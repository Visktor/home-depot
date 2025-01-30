import { Injectable } from '@nestjs/common';
import { LoginDto } from './auth.schemas';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(data: LoginDto['login']) {
    const user = await this.userService.findOne({
      email: data.email,
    });

    if (!user) {
      return {
        error: 'User not found',
        success: false,
      };
    }

    // const isPasswordValid = await bcrypt.compare(data.password, user.password);

    // if (!isPasswordValid) {
    //   return {
    //     error: 'Invalid password',
    //     success: false,
    //   };
    // }
  }
}
