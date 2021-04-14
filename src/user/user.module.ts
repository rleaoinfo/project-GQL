import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GithubapiModule } from 'src/githubapi/githubapi.module';
import { UserResolver } from './user.resolver';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import { UserApiProvider } from './user-api-provider';

@Module({
    imports:[GithubapiModule,MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers: [UserResolver,UserService, UserApiProvider],
    exports: [UserService]
})
export class UserModule {}
