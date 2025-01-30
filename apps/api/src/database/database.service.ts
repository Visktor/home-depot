import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
class DatabaseService {
  constructor(private configService: ConfigService) {}

  getConfig() {
    const dbEnv = {};

    return {};
  }
}

export { DatabaseService };
