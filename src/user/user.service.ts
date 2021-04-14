import { Injectable } from '@nestjs/common';
import { UserApiProvider } from './user-api-provider';

@Injectable()
export class UserService {
  constructor(
    private readonly userApiService: UserApiProvider,) { }

  async find(username: string): Promise<any> {
    const dataFind = await this.userApiService.findUser(username);
    return dataFind;

  }

}

