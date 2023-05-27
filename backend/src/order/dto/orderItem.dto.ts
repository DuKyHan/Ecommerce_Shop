import { IsNumber, IsString } from 'class-validator';

export class OrderItemDTO {
  @IsNumber()
  productId: number;
  @IsNumber()
  quantity: number;
  @IsString()
  size: string;
  @IsString()
  color: string;
  @IsNumber()
  price: number;
}
