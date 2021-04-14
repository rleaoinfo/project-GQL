import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { GithubapiService } from 'src/githubapi/githubapi.service';

@Injectable()
export class UserApiProvider {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
        private readonly gitService: GithubapiService,) { }

    async findUser(username: string): Promise<any> {
        const mongoFind = await this.userModel.findOne({ name: username }).exec();
        if (mongoFind) {
            return mongoFind;
        }
        const gitFind = await this.gitService.getUser(username);
        const newUser = await this.save(gitFind);

        return newUser;

    }

    save(user: any) {
        const newUser = new this.userModel(user);
        return newUser.save();
    }
}
