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
  @IsNotEmpty()
  @IsString()
  size: string;
  @IsNotEmpty()
  @IsString()
  color: string;
  @IsNumber()
  @IsNotEmpty()
  discount: number;
  @IsNotEmpty()
  @IsString()
  image: string;
  @IsNotEmpty()
  @IsNumber()
  categoryID: number;
}
