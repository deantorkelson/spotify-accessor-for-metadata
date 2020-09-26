import { Album } from "./Album";
import { ArtistSimplified } from "./ArtistSimplified";

export interface Track {
    album: Album;
    artists: ArtistSimplified[];
    name: string;
    popularity: number;
}