import { HttpModule, Module } from '@nestjs/common';
import { GithubapiController } from './githubapi.controller';
import { GithubapiService } from './githubapi.service';

@Module({
    imports: [HttpModule],
    controllers: [GithubapiController],
    providers: [GithubapiService]
})
export class GithubapiModule { }
