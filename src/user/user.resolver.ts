import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RepoDTO } from './dto/repo.dto';
import { UserDTO } from './dto/user.dto';

import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Resolver(() => UserDTO)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async hello() {
    return 'hello world';
  }

  @Query(() => UserDTO)
  async user(@Args('name') name: string) {
    return await this.userService.find(name);
  }

  @ResolveField(() => [RepoDTO])
  async repos(@Parent() user: User) {
    return this.userService.repoFind(user);
  }
}
