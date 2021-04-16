import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RepoDocument = Document;

@Schema()
export class Repo {
    @Prop()
    owner_id: string;
    
    @Prop()
    id: string;

    @Prop()
    node_id: string;

    @Prop()
    name: string;

    @Prop()
    full_name: string;

    @Prop()
    description: string;

    @Prop()
    html_url: string;
}

export const RepoSchema = SchemaFactory.createForClass(Repo);