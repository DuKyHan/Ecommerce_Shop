import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { updateUserDTO, userDTO } from './dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async updateUser(id: number, updateUser: updateUserDTO) {
    let hashedPassword = await argon.hash(updateUser.password);
    const user = this.prismaService.user.update({
      where: {
        id: id,
      },
      data: {
        username: updateUser.username,
        numberPhone: updateUser.numberphone,
        hashedPassword: hashedPassword,
        gender: updateUser.gender,
      },
    });
    return user;
  }
  async getAllUser() {
    return this.prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        gender: true,
        numberPhone: true,
        createAt: true,
        updateAt: true,
      },
    });
  }
}
