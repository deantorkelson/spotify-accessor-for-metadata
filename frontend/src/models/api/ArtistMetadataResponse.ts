import { Followers } from "../Followers";
import { Image } from "../Image";

export interface ArtistMetadataResponse {
    followers: Followers;
    genres: string[];
    images: Image[];
    popularity: number;
}