import { Test, TestingModule } from '@nestjs/testing';
import { GithubApiHttpClient } from './github-api-http-client';
import { GithubapiService } from './githubapi.service';

describe('GithubapiService', () => {
  let service: GithubapiService;
  const userMock = {login: 'mojombo', html_url: ''}
  const repoMock = 'https://api.github.com/users/mojombo/repos';
  const githubHttpmock = {
    getUser: (username: any) => Promise.resolve({...userMock, login: username}),
    getRepo: (user_repo: any) => Promise.resolve({user_repo : repoMock}),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubapiService, GithubApiHttpClient],
    })
    .overrideProvider(GithubApiHttpClient)
    .useValue(githubHttpmock)
    .compile();

    service = module.get<GithubapiService>(GithubapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getUser ', async () => {
    const user = await service.getUser('mojombo')
    
    expect(user).toBeDefined();
  });

  it('should getRepos ', async () => {
    const repo = await service.getRepos('url')
    
    expect(repo).toBeDefined();
  });


});
