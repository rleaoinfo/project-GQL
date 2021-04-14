import { HttpException, HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { map } from 'rxjs/operators'

@Injectable()
export class GithubApiHttpClient {
    constructor(
        private readonly http: HttpService,
        private readonly configService: ConfigService
    ) { }

    getUser(username: string) {
        const apiGithub = this.configService.get('GITHUB_API');
        return this.http.get(apiGithub + '/users/' + username).pipe(map((response) => response.data)).toPromise().catch((err)=> this.handlerError(err));
    }

    private handlerError(err: any) {
        const { response: { status = 500, statusText = '' } = {} } = err;
        const error = new HttpException({ status, statusText }, status);

        throw error;
    }
}
