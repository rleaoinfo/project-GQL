import { Document } from 'mongoose';

export interface Repo extends Document {
    readonly owner_id: string;
    readonly id: string;
    readonly node_id: string;
    readonly name: string;
    readonly full_name: string;
    readonly description: string;
    readonly html_url: string;
}