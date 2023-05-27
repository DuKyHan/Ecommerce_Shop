import { BucketAlreadyExists, NoSuchKey, S3 } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { File } from '@prisma/client';
import { nanoid } from 'nanoid';
import fileConfig from 'src/config/subconfigs/file.config';
import { Readable } from 'stream';

import { DownloadFileQueryDto } from '../dtos/download-file.query.dto';
import { FileOutputDto } from '../dtos/file-output.dto';
import { UploadFileOutputDto } from '../dtos/upload-file-output.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FileService {
  private readonly client: S3;
  private readonly bucket: string;

  constructor(
    @Inject(fileConfig.KEY) fileConfigApi: ConfigType<typeof fileConfig>,
    private readonly prisma: PrismaService,
  ) {
    this.client = new S3({
      endpoint: fileConfigApi.endpoint,
      region: fileConfigApi.region,
      credentials: {
        accessKeyId: fileConfigApi.accessKey,
        secretAccessKey: fileConfigApi.secretKey,
      },
    });
    this.bucket = fileConfigApi.bucket;
    this.setup();
  }

  async setup() {
    try {
      await this.client.createBucket({
        Bucket: this.bucket,
      });
    } catch (err) {
      if (!(err instanceof BucketAlreadyExists)) {
        throw err;
      }
    }
  }

  async uploadFile(
    buffer: Buffer,
    originalname: string,
    mimetype: string,
  ): Promise<UploadFileOutputDto> {
    const key = nanoid();
    const upload = new Upload({
      client: this.client,
      params: {
        Bucket: this.bucket,
        Body: buffer,
        Key: key,
        Metadata: {
          originalname: originalname,
          mimetype: mimetype,
        },
      },
      queueSize: 4, // optional concurrency configuration
      partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
      leavePartsOnError: false, // optional manually handle dropped parts
    });

    upload.on('httpUploadProgress', (progress) => {
      if (progress.loaded != null && progress.total != null) {
      }
    });

    await this.uploadFileToS3(upload);

    const file = {
      name: originalname,
      internalName: key,
      mimetype: mimetype,
      path: '/',
    };

    const res = await this.prisma.file.create({ data: file });
    return res;
  }

  private async uploadFileToS3(upload: Upload) {
    console.log('start uploading file');
    const startTime = Date.now();
    await upload.done();
    console.log(`upload file completed, took ${Date.now() - startTime} ms`);
  }

  async downloadFileById(
    id: number,
    query?: DownloadFileQueryDto,
  ): Promise<{ stream: Readable; file: FileOutputDto }> {
    const file = await this.prisma.file.findUnique({ where: { id: id } });
    return this.downloadFile(file, query);
  }

  async downloadFileByInternalName(
    name: string,
    query?: DownloadFileQueryDto,
  ): Promise<{ stream: Readable; file: FileOutputDto }> {
    const file = await this.prisma.file.findUnique({
      where: { internalName: name },
    });
    return this.downloadFile(file, query);
  }

  private async downloadFile(
    file: File | null,
    query?: DownloadFileQueryDto,
  ): Promise<{ stream: Readable; file: FileOutputDto }> {
    const safeFile = await this.validateDownloadFile(file, query);
    try {
      const stream = await this.downloadFileFromS3(safeFile);
      return {
        stream: stream,
        file: safeFile,
      };
    } catch (err) {
      if (err instanceof NoSuchKey) {
        throw 'FileProcessingHasNotFinished';
      }
      throw err;
    }
  }

  private validateDownloadFile(
    file: File | null,
    query?: DownloadFileQueryDto,
  ): File {
    if (!file) {
      throw 'FileNotFoundException';
    }

    if (query) {
      const type = query.type;
      const subtype = query.subtype;

      if (type != null) {
        if (!file.mimetype.startsWith(type)) {
          throw 'FileNotFoundException';
        }
        if (subtype != null && file.mimetype !== `${type}/${subtype}`) {
          throw 'FileNotFoundException';
        }
      }
    }

    return file;
  }

  private async downloadFileFromS3(file: File): Promise<Readable> {
    const res = await this.client.getObject({
      Bucket: this.bucket,
      Key: file.internalName,
    });
    return res.Body as Readable;
  }
}
