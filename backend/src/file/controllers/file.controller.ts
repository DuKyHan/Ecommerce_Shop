import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Response } from 'express';

import { UploadFileOutputDto } from '../dtos/upload-file-output.dto';
import { FileService } from '../services';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UploadFileOutputDto> {
    return this.fileService.uploadFile(
      file.buffer,
      file.originalname,
      file.mimetype,
    );
  }

  @Get('download/:id')
  async downloadFileById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<StreamableFile> {
    const fileInfo = await this.fileService.downloadFileById(id);
    return new StreamableFile(fileInfo.stream, {
      type: fileInfo.file.mimetype,
      disposition: `attachment; filename="${fileInfo.file.name}"`,
    });
  }

  @Get('image/i/:id')
  async downloadPublicImageById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<StreamableFile> {
    const fileInfo = await this.fileService.downloadFileById(id, {
      type: 'image',
    });
    return new StreamableFile(fileInfo.stream, {
      type: fileInfo.file.mimetype,
      disposition: `inline`,
    });
  }

  @Get('image/n/:name')
  async downloadPublicImageByName(
    @Param('name') internalName: string,
  ): Promise<StreamableFile> {
    const fileInfo = await this.fileService.downloadFileByInternalName(
      internalName,
      {
        type: 'image',
      },
    );
    return new StreamableFile(fileInfo.stream, {
      type: fileInfo.file.mimetype,
      disposition: `inline`,
    });
  }
}
