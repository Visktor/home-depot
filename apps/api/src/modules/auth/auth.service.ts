import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './auth.schemas';
import { UserService } from '../user/user.service';
import { withCatcher } from 'withCatcher';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(data: AuthDto['signIn']) {
    const [error, user] = await withCatcher(
      this.userService.findOne({
        email: data.email,
      }),
    );

    if (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
