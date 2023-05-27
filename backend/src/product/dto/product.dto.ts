import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  discount: number;
  @IsNotEmpty()
  @IsNumber()
  categoryID: number;
}
