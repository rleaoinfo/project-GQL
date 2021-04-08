import { HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { GithubApiHttpClient } from './github-api-http-client';
import { GithubapiService } from './githubapi.service';

describe('GithubapiService', () => {
  let service: GithubapiService;
  const userMock = {login: 'mojombo', html_url: ''}
  const githubHttpmock = {
    getUser: (username: any) => Promise.resolve({...userMock, login: username}),
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


});
