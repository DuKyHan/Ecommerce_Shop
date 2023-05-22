import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { request } from 'http';
import { authDTO, authLoginDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() authdto: authDTO) {
    return this.authService.register(authdto);
  }

  @Post('login')
  login(@Body() authLoginDTO: authLoginDTO) {
    return this.authService.login(authLoginDTO);
  }
}
