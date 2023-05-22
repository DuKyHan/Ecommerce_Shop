import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ProductModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    OrderModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
