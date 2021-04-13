import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { UserInput } from './input/user.input';
import { GithubapiService } from 'src/githubapi/githubapi.service';

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
      return mongoFind;
    }
    const gitFind = await this.gitService.getUser(username);
    const newUser = await this.save(gitFind);

    return newUser;
    
  }

  save(user : any){
    const newUser = new this.userModel(user);
    return newUser.save();
  }


}

