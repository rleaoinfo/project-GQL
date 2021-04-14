import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,DatabaseModule,
    ConfigModule.forRoot({isGlobal: true}),GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
