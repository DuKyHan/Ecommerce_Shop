import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class authDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  repassword: string;
  @IsNotEmpty()
  @IsPhoneNumber('VN')
  phonenumber: string;
  @IsString()
  @IsNotEmpty()
  gender: string;
}
