import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubapiService {
    constructor(private http: HttpService,
        private readonly configService: ConfigService,) { }

    async getAll(): Promise<any> {
        const apiGithub = this.configService.get('GITHUB_API');
        console.log(apiGithub)
        const userGithub = await this.http.get(apiGithub + '/users').pipe(map(response => response.data)).toPromise();
        const Filter = userGithub.map(item => ({
            login: item.login,
            id: item.id,
            node_id: item.node_id,
            html_url: item.html_url,
            repos_url: item.repos_url,
            email: item.email
        }));
        return Filter;
    }

    async getUser(user : string){
        const apiGithub = this.configService.get('GITHUB_API');
        const userGithub = await this.http.get(apiGithub + '/users/' + user).pipe(map(response => response.data)).toPromise();
        return userGithub;
    }


}
