import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}
  create(createOrderDto: CreateOrderDto) {
    return this.prismaService.order.create({
      data: {
        userId: createOrderDto.userId,
        address: createOrderDto.address,
        numberphone: createOrderDto.numberphone,
        OrderItem: {
          create: createOrderDto.orderitems,
        },
      },
    });
  }

  findAll() {
    return this.prismaService.order.findMany({
      include: {
        OrderItem: true,
        User: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
