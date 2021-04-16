import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class RepoInput {
    @Field({nullable: true})
    readonly owner_id: string;
    @Field({nullable: true})
    readonly id: string;
    @Field({nullable: true})
    readonly node_id: string;
    @Field({nullable: true})
    readonly name: string;
    @Field({nullable: true})
    readonly full_name: string;
    @Field({nullable: true})
    readonly description: string;
    @Field({nullable: true})
    readonly html_url: string;
}