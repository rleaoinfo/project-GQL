import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CreateUserDTO } from './dto/user.dto';
import { UserInput } from './input/user.input';
import { Repo } from './schemas/repo.schema';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ){}

    @Query(()=> String)
    async hello() {
      return 'hello world';
    }

    @Query(()=> CreateUserDTO)
    async user(@Args('name') name: string) {
      return await this.userService.find(name);
    }

    
    @ResolveField('repos', returns => [Repo])
    async repos(@Parent() user:User){
      const {id} = user;
      return this.userService.repoFind(id)
    }
    
}

