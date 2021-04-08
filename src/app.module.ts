import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GithubapiModule } from './githubapi/githubapi.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),DatabaseModule, GithubapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
