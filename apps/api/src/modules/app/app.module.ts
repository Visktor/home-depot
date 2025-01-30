import { databaseProviders } from '#/database/providers';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvService } from 'config/env/env.service';
import { z } from 'zod';

@Module({
  controllers: [],
  providers: [...databaseProviders, EnvService],
  exports: [...databaseProviders],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validate: (env) => {
        return z
          .object({
            DATABASE_HOST: z.string(),
            DATABASE_PORT: z.coerce.number(),
            DATABASE_USER: z.string(),
            DATABASE_PASSWORD: z.string(),
            DATABASE_NAME: z.string(),
            JWT_SECRET: z.string(),
          })
          .parse(env);
      },
    }),
  ],
})
export class AppModule {}
