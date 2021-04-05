import { Album } from 'src/models/Album';
import { ArtistSimplified } from 'src/models/ArtistSimplified';

export interface Track {
    album: Album;
    artists: ArtistSimplified[];
    name: string;
    popularity: number;
    uri: string;
}