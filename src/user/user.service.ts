import { Injectable } from '@nestjs/common';
import { GithubapiService } from 'src/githubapi/githubapi.service';
import { UserRepository } from './user-repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly gitService: GithubapiService,) { }

  async find(username: string): Promise<any> {
    const dataFind = await this.userRepository.findUser(username);
    if (dataFind) {
      return dataFind;
    }
    const gitFind = await this.gitService.getUser(username);
    const newUser = await this.userRepository.save(gitFind);
    return newUser;

  }

  async repoFind(user : any): Promise<any>{
    const {id , repos_url} = user
    const dataFind = await this.userRepository.findRepo(id);
    if(dataFind?.length > 0){
      return dataFind;
    }
    const gitFind = await this.gitService.getRepos(repos_url)
    const newRepo = await this.userRepository.saveRepo(gitFind)
    return newRepo;

  }
  

}

