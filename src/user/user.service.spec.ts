import { Test, TestingModule } from '@nestjs/testing';
import { GithubapiService } from 'src/githubapi/githubapi.service';
import { UserApiProvider } from './user-api-provider';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  const usernameMock = {
    findUser: () => Promise.resolve({username: "mojombo"})
  }

  const githubapimock = {
    getUser: () => Promise.resolve({username : "mojombo"}),
  }


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserApiProvider],
    })
      .overrideProvider(UserApiProvider)
      .useValue(usernameMock)
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
});
