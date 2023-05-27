import {
  IsArray,
  IsEmail,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { OrderItemDTO } from './orderItem.dto';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsNumber()
  userId: number;
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  address: string;
  @IsString()
  numberphone: string;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDTO)
  orderitems: OrderItemDTO[];
}
