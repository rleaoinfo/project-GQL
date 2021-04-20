import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, PromiseProvider } from 'mongoose';


export type UserDocument = Document;

@Schema()
export class User {
    @Prop()
    login: string;

    @Prop()
    id: string;

    @Prop()
    node_id: string;

    @Prop()
    name: string;

    @Prop()
    html_url: string;

    @Prop()
    repos_url: string;

    @Prop()
    created_at: string;

    @Prop()
    updated_at: string;

    @Prop()
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);