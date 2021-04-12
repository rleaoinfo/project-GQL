import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDTO } from './dto/user.dto';
import { UserInput } from './input/user.input';
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

    @Query(()=> [CreateUserDTO])
    async users() {
      return await this.userService.findAll();
    }

    @Query(()=> CreateUserDTO)
    async user(@Args('name') name: string) {
      return await this.userService.find(name);
    }

    @Mutation(()=> CreateUserDTO)
    async createUser(@Args('inputs') input: UserInput) {
      return await this.userService.create(input); 
    }
    
}

