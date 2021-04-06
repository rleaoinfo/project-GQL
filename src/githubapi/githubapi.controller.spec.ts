import { Test, TestingModule } from '@nestjs/testing';
import { GithubapiController } from './githubapi.controller';

describe('GithubapiController', () => {
  let controller: GithubapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubapiController],
    }).compile();

    controller = module.get<GithubapiController>(GithubapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
