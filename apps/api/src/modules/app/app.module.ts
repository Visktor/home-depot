import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/database/providers';

@Module({
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
  imports: [],
})
export class AppModule {}
