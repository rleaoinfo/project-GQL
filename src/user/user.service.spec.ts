import { Test, TestingModule } from '@nestjs/testing';
import { GithubapiService } from 'src/githubapi/githubapi.service';
import { UserRepository } from './user-repository';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  const repository_url =  "https://api.github.com/users/mojombo/repos"

  const userRepositoryMock = {
    findUser: () => Promise.resolve({ username: "mojombo" }),
    save: (user: any) => Promise.resolve({ ...user }),
    findRepo: () => Promise.resolve([{ownerId : 1}]),
    saveRepo: (repo:any[]) => Promise.resolve({repo})
  }

  const githubapimock = {
    getUser: () => Promise.resolve({ username: "mojombo" }),
    getRepos: () => Promise.resolve({repository_url})
  }


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserRepository, GithubapiService],
    })
      .overrideProvider(UserRepository)
      .useValue(userRepositoryMock)
      .overrideProvider(GithubapiService)
      .useValue(githubapimock)
      .compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find', async () => {
    const user = await service.find("mojombo")
    expect(user).toBeDefined();
  });


  it('should define user', async () => {
    jest.spyOn(userRepositoryMock, 'findUser').mockImplementationOnce(() => Promise.resolve(null))
    const user = await service.find("mojombo")
    expect(user).toBeDefined();
  });
  

  it('should define repo with obj', async () => {
    const repo = await service.repoFind("mojombo")
    expect(repo).toBeDefined();
  });

  
  it('should define repo', async () => {
    jest.spyOn(userRepositoryMock, 'findRepo').mockImplementationOnce(() => Promise.resolve([] as any))
    const repo = await service.repoFind("mojombo")
    expect(repo).toBeDefined();
  });

});
