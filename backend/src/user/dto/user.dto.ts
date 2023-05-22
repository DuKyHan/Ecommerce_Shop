import { IsEmail, IsString } from 'class-validator';

export class userDTO {
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  @IsString()
  gender: string;
  @IsString()
  numberphone: string;
  @IsString()
  password: string;
}
