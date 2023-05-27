import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { authDTO, authLoginDTO } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(authDto: authDTO) {
    let hashedPassword = await argon.hash(authDto.password);
    try {
      const user = await this.prismaService.user.create({
        data: {
          email: authDto.email,
          hashedPassword: hashedPassword,
          numberPhone: authDto.phonenumber,
          gender: authDto.gender,
        },
        select: {
          id: true,
          email: true,
          createAt: true,
        },
      });
      hashedPassword = '';
      return user;
    } catch (error) {
      if (error.code == 'P2002') {
        throw new ForbiddenException('Email is existed');
      }
    }
  }
  async login(authLoginDTO: authLoginDTO) {
    const user = await this.prismaService.user.findFirst({
      where: {
        email: authLoginDTO.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('User not found');
    }
    const passwordMatched = await argon.verify(
      user.hashedPassword,
      authLoginDTO.password,
    );
    if (!passwordMatched) {
      throw new ForbiddenException('Incorrect password');
    }
    user.hashedPassword = undefined;
    return {
      ...user,
      accessToken: await this.signToJwtString(user.id, user.email),
    };
  }

  async signToJwtString(userId: number, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email: email,
    };
    const jwtString = await this.jwtService.signAsync(payload, {
      expiresIn: '30m',
      secret: this.configService.get('JWT_SECRET'),
    });
    return jwtString;
  }
}
