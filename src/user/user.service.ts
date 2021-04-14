import { Injectable } from '@nestjs/common';
import { GithubapiService } from 'src/githubapi/githubapi.service';
import { UserApiProvider } from './user-api-provider';

@Injectable()
export class UserService {
  constructor(
    private readonly userApiService: UserApiProvider,
    private readonly gitService: GithubapiService,) { }

  async find(username: string): Promise<any> {
    const dataFind = await this.userApiService.findUser(username);
    if (dataFind) {
      return dataFind;
    }
    const gitFind = await this.gitService.getUser(username);
    const newUser = await this.userApiService.save(gitFind);
    return newUser;

  }

}

