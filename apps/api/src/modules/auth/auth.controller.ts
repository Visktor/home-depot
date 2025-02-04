import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RolesGuard } from './auth.guard';
import { Request as ExpressRequest } from 'express';
// import { AuthSchemas } from './auth.schemas';
// import { ZodValidationPipe } from '#/pipes/zod';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(RolesGuard)
  @Post()
  login(@Request() req: ExpressRequest) {
    // console.log(req.user);
  }
}
