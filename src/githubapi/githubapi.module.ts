import { HttpModule, Module } from '@nestjs/common';
import { GithubapiService } from './githubapi.service';
import { GithubApiHttpClient } from './github-api-http-client'

@Module({
    imports: [HttpModule],
    providers: [GithubapiService, GithubApiHttpClient],
    exports:[GithubapiService]
})
export class GithubapiModule { }
