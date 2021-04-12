import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { GithubapiModule } from 'src/githubapi/githubapi.module';
import { UserResolver } from './user.resolver';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
    imports:[GithubapiModule,GraphQLModule.forRoot({
        autoSchemaFile: 'schema.gql'
    }),MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers: [UserResolver,UserService],
})
export class UserModule {}
