import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UserInput {
    @Field()
    readonly login: string;
    @Field()
    readonly id: string;
    @Field()
    readonly node_id: string;
    @Field()
    readonly name: string;
    @Field()
    readonly html_url: string;
    @Field()
    readonly repos_url: string;
    @Field()
    readonly created_at: string;
    @Field()
    readonly updated_at: string;
    @Field()
    readonly email: string;
}