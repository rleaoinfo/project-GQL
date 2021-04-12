import { Field, ID, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class CreateUserDTO {
    @Field()
    login: string
    @Field()
    id: string;
    @Field()
    node_id: string;
    @Field()
    name: string;
    @Field()
    html_url: string
    @Field()
    repos_url: string;
    @Field()
    created_at: string;
    @Field()
    updated_at: string;
    @Field()
    email: string
}