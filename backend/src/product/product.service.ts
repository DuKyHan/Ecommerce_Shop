import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDTO } from './dto';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
  getAllProduct() {
    const products = this.prismaService.product.findMany({
      include: {
        Category: true,
      },
    });
    return products;
  }
  postProduct(ProductDTO: ProductDTO) {
    const product = this.prismaService.product.create({
      data: {
        name: ProductDTO.name,
        price: ProductDTO.price,
        color: ProductDTO.color,
        size: ProductDTO.size,
        description: ProductDTO.description,
        discount: ProductDTO.discount,
        image: ProductDTO.image,
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
