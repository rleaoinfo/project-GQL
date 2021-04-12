import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { UserInput } from './input/user.input';
import { GithubapiService } from 'src/githubapi/githubapi.service';
import { dataAdjust } from 'src/utils/user.utils';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly gitService: GithubapiService,) { }

  async create(createUserdto: UserInput): Promise<any> {

    const createdUser = new this.userModel(createUserdto);
    return createdUser.save();
  }

  async findAll(): Promise<any> {
    return this.userModel.find().exec();
  }

  async find(username: string): Promise<any> {
    const mongoFind = await this.userModel.findOne({ name: username }).exec();
    if (mongoFind) {
      return dataAdjust(mongoFind);
    }
    else {
      const gitFind = await this.gitService.getUser(username);
      if (gitFind) {
        return dataAdjust(gitFind)
      }
      else {
        return { response: "error 404" }
      }


    }
  }
}
