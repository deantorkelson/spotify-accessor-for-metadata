import { Followers } from 'src/models/Followers';
import { Image } from 'src/models/Image';

export interface ArtistMetadataResponse {
    followers: Followers;
    genres: string[];
    images: Image[];
    popularity: number;
}