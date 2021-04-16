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

  async repoFind(id : string): Promise<any>{
    const dataFind = await this.repoFind(id);
    if(dataFind){
      return dataFind;
    }
    const username = await this.userRepository.usernameById(id)
    const userRepo = await this.userRepository.findUser(username)
    const gitFind = await this.gitService.getRepos(userRepo.repos_url)
    const newRepo = await this.userRepository.saveRepo(gitFind)
    return newRepo;

  }
  

}

