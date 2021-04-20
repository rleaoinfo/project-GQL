import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RepoDTO } from './dto/repo.dto';
import { UserDTO } from './dto/user.dto';
import { UserInput } from './input/user.input';
import { Repo } from './schemas/repo.schema';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Resolver(()=>UserDTO)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ){}

    @Query(()=> String)
    async hello() {
      return 'hello world';
    }

    @Query(()=> UserDTO)
    async user(@Args('name') name: string) {
      return await this.userService.find(name);
    }

    
    @ResolveField(returns => [RepoDTO])
    async repos(@Parent() user:User){
      return this.userService.repoFind(user)
    }
    
}

