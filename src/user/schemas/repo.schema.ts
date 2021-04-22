import { Document,Schema } from 'mongoose';

export type RepoDocument = Document;

export class Repo {
    owner_id: string;
    id: string;
    node_id: string;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    created_at_mongo: Date;
}

export const RepoSchema = new Schema({
    owner_id: String,
    id: String,
    node_id: String,
    name: String,
    full_name: String,
    description: String,
    html_url: String,
}, { timestamps: { createdAt: 'created_at_mongo' } }
).index({ created_at_mongo: 1 }, { expireAfterSeconds: 3600 });