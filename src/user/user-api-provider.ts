import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserApiProvider {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,) { }

    async findUser(username: string): Promise<any> {
        const mongoFind = await this.userModel.findOne({ name: username }).exec();
        return mongoFind;

    }

    save(user: any) {
        const newUser = new this.userModel(user);
        return newUser.save();
    }
}
