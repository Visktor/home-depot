import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSchemas, LoginDto } from './auth.schemas';
import { ZodValidationPipe } from '#/pipes/zod';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(AuthSchemas.login))
  login(@Body() data: LoginDto['login']) {
    return this.authService.login(data);
  }
}
