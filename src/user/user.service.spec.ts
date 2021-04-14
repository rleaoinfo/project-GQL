import { Test, TestingModule } from '@nestjs/testing';
import { GithubapiService } from 'src/githubapi/githubapi.service';
import { UserRepository } from './user-repository';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  const userRepositoryMock = {
    findUser: () => Promise.resolve({ username: "mojombo" }),
    save:(user: any) => Promise.resolve({...user})
  }

  const githubapimock = {
    getUser: () => Promise.resolve({ username: "mojombo" }),
  }


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserRepository,GithubapiService],
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

  
  it('should find', async () => {
    jest.spyOn(userRepositoryMock, 'findUser').mockImplementationOnce(()=> Promise.resolve(null))
    const user = await service.find("mojombo")
    expect(user).toBeDefined();
  });
});
