import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Post()
  PostCategory(@Body() categoryDTO: CategoryDTO) {
    return this.categoryService.PostCategory(categoryDTO);
  }
  @Get()
  GetCategory() {
    return this.categoryService.GetCategory();
  }
  @Delete(':id')
  RemoveCategory(@Param('id') id: string) {
    return this.categoryService.DeleteCategory(+id);
  }
}
