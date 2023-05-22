import { IsEmail, IsEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class updateUserDTO {
  @IsString()
  username: string;
  @IsString()
  numberphone: string;
  @IsString()
  gender: string;
  @IsString()
  password: string;
}
