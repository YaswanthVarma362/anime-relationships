import { Query, Resolver } from "@nestjs/graphql";
import { AnimeType } from "./anime.type";

@Resolver( of => AnimeType)
export class AnimeResolver{
    @Query( () => AnimeType)
    hello(){
        return  {
            name: "Yaswanth",
            "type": "crew"
        }
    }
}