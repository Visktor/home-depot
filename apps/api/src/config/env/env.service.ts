import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { z } from 'zod';

@Injectable()
class EnvService {
  constructor(private configService: ConfigService) {}

  private readonly dbSchema = z.object({
    host: z.string(),
    port: z.coerce.number(),
    username: z.string(),
    password: z.string(),
    database: z.string(),
  });

  getDbConfig() {
    return this.dbSchema.parse({
      host: this.configService.get('DATABASE_HOST'),
      port: this.configService.get('DATABASE_PORT'),
      username: this.configService.get('DATABASE_USER'),
      password: this.configService.get('DATABASE_PASSWORD'),
      database: this.configService.get('DATABASE_NAME'),
    });
  }

  private readonly jwtSchema = z.object({
    secret: z.string(),
  });

  getJwtConfig() {
    return this.jwtSchema.parse({
      secret: this.configService.get('JWT_SECRET'),
    });
  }
}

export { EnvService };
