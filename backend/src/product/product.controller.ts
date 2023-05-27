import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './dto';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProduct() {
    return this.productService.getAllProduct();
  }

  @Post()
  async postProduct(@Body() ProductDTO: ProductDTO) {
    return this.productService.postProduct(ProductDTO);
  }
  @Get(':id')
  getProduct(@Param() id: string) {
    return this.productService.getProduct(+id);
  }
}
