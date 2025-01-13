import { Injectable } from '@nestjs/common';
import { LoginDto } from './auth.schemas';

@Injectable()
export class AuthService {
  async login(data: LoginDto) {}
}
