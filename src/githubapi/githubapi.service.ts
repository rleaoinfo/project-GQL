import { Injectable } from '@nestjs/common';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'node:constants';
import { GithubApiHttpClient } from './github-api-http-client';

@Injectable()
export class GithubapiService {
    constructor(
        private readonly githubApihttpclient: GithubApiHttpClient) { }

    async getUser(user: string) {
        const userGithub = await this.githubApihttpclient.getUser(user)
        const Filter = [userGithub].map((item: { login: any; id: any; node_id: any; name: any; html_url: any; repos_url: any; updated_at: any; created_at: any; email: any; }) => ({
            login: item.login,
            id: item.id,
            node_id: item.node_id,
            name: item.name,
            html_url: item.html_url,
            repos_url: item.repos_url,
            updated_at: item.updated_at,
            created_at: item.created_at,
            email: item.email
        }));
        return Filter[0];
    }

    async getRepos(user_repo: string) {
        const repos = await this.githubApihttpclient.getRepo(user_repo);
        const filteredRepos =
            repos?.map(
                ({owner, id, node_id, name, full_name, description, html_url }) => ({
                    owner_id : owner.id,
                    id,
                    node_id,
                    name,
                    full_name,
                    description,
                    html_url,
                }),
            ) || [];
        console.log(filteredRepos)
        return filteredRepos;
    }


}
