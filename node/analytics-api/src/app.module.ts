import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleDataClient } from './google/google.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), GoogleDataClient],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
