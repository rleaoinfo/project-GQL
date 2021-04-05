import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({  
    imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configService:ConfigService) =>{
        const url = configService.get('MONGO_CONN');

        return{
          uri: url,
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
        };
      },
      inject:[ConfigService],
    })],
  controllers: [DatabaseController],
  providers: [DatabaseService]
})
export class DatabaseModule {}
