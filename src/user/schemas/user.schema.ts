import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema, PromiseProvider } from 'mongoose';


export type UserDocument = Document;

export class User {
    login: string;
    id: string;
    node_id: string;
    name: string;
    html_url: string;
    repos_url: string;
    created_at: string;
    updated_at: string;
    email: string;
    created_at_mongo: Date;
}

export const UserSchema = new Schema({
    login: String,
    id: String,
    node_id: String,
    name: String,
    html_url: String,
    repos_url: String,
    created_at: String,
    updated_at: String,
    email: String,
}, { timestamps: { createdAt: 'created_at_mongo' } }
).index({ created_at_mongo: 1 }, { expireAfterSeconds: 3600});