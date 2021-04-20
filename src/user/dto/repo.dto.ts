import { Field, ID, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class RepoDTO {
    @Field({nullable: true})
    owner_id: string
    @Field({nullable: true})
    id: string
    @Field({nullable: true})
    node_id: string;
    @Field({nullable: true})
    name: string;
    @Field({nullable: true})
    full_name: string;
    @Field({nullable: true})
    description: string
    @Field({nullable: true})
    html_url: string;
}