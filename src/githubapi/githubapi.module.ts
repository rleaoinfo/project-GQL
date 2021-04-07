import { HttpModule, Module } from '@nestjs/common';
import { GithubapiService } from './githubapi.service';

@Module({
    imports: [HttpModule],
    providers: [GithubapiService]
})
export class GithubapiModule { }
