import { Followers } from "./Followers";
import { Image } from "./Image";

export interface Artist {
    followers: Followers;
    genres: string[];
    images: Image[];
    popularity: number;
}