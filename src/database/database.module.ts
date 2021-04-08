import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const host = configService.get('DB_HOST', 'localhost');
        const port = configService.get('DB_PORT');
        const DBname = configService.get('DB_NAME');
        const url = 'mongodb://' + host + ":" + port + "/" + DBname;

        return {
          uri: url,
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
        };
      },
      inject: [ConfigService],
    })],
})
export class DatabaseModule { }
