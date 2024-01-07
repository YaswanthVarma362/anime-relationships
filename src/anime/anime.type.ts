import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AnimeType{
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    type: string;
}