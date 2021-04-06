import { Controller, Get, Param } from '@nestjs/common';
import { GithubapiService } from './githubapi.service';

@Controller('githubapi')
export class GithubapiController {
    constructor(private ghService: GithubapiService) { }

    @Get()
    async get(){
        return await this.ghService.getAll();
    }

    @Get(':id')
    async getId(@Param() params){
        return await this.ghService.getUser(params.id)
    }

}
