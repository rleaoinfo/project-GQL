import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Repo, RepoDocument } from './schemas/repo.schema';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Repo.name) private repoModel: Model<RepoDocument>,) { }

    async findUser(username: string): Promise<any> {
        const mongoFind = await this.userModel.findOne({ login: username }).exec();
        return mongoFind;

    }

    async findRepo(ownerId: string) : Promise<any>{
        const mongoFind = await this.repoModel.find({owner_id : ownerId}).exec();
        return mongoFind
    }

    save(user: any) {
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    saveRepo(repo : any[]){
       return this.repoModel.insertMany(repo)
    }

    async usernameById(owner_id: any){
        const username = await this.userModel.findOne({ id : owner_id}).exec();
        return username;
    }
}
