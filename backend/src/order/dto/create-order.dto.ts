import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { OrderItemDTO } from './orderItem.dto';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsNumber()
  userId: number;
  @IsString()
  address: string;
  @IsString()
  numberphone: string;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDTO)
  orderitems: OrderItemDTO[];
}
