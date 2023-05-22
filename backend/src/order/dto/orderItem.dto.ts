import { IsNumber } from 'class-validator';

export class OrderItemDTO {
  @IsNumber()
  productId: number;
  @IsNumber()
  quantity: number;
  @IsNumber()
  price: number;
}
