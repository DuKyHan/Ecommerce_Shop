import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDTO } from './dto';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}
  PostCategory(categoryDTO: CategoryDTO) {
    try {
      const category = this.prismaService.category.create({
        data: {
          name: categoryDTO.name,
        },
        select: {
          id: true,
          name: true,
        },
      });
      return category;
    } catch (error) {
      throw new ForbiddenException('Initialization failed');
    }
  }
  GetCategory() {
    const categories = this.prismaService.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return categories;
  }
  DeleteCategory(id: number) {
    const categories = this.prismaService.category.delete({
      where: { id: id },
    });
    return { message: 'Delete successful' };
  }
}
