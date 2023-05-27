import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDTO } from './dto';
import { FileService } from 'src/file/services';

@Injectable()
export class ProductService {
  constructor(
    private prismaService: PrismaService,
    private fileService: FileService,
  ) {}
  getAllProduct() {
    const products = this.prismaService.product.findMany({
      include: {
        Category: true,
      },
    });
    return products;
  }
  async postProduct(ProductDTO: ProductDTO) {
    const product = await this.prismaService.product.create({
      data: {
        name: ProductDTO.name,
        price: ProductDTO.price,
        description: ProductDTO.description,
        discount: ProductDTO.discount,
        fileId: null,
        categoryId: ProductDTO.categoryID,
      },
    });
    return product;
  }
  getProduct(id: number) {
    const product = this.prismaService.product.findUnique({
      where: {
        id: id,
      },
      include: {
        Category: true,
      },
    });
    return product;
  }
  deleteProduct(id: number) {
    const product = this.prismaService.product.delete({
      where: {
        id: id,
      },
    });
    return { message: 'Delete successful' };
  }
}
