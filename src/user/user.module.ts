import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GithubapiModule } from 'src/githubapi/githubapi.module';
import { UserResolver } from './user.resolver';
import { User, UserSchema } from './schemas/user.schema';
import { UserService } from './user.service';
import { UserRepository } from './user-repository';
import { Repo, RepoSchema } from './schemas/repo.schema';

@Module({
  imports: [
    GithubapiModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Repo.name, schema: RepoSchema },
    ]),
  ],
  providers: [UserResolver, UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
