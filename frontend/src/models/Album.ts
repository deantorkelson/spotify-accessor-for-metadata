import { ArtistSimplified } from 'src/models/ArtistSimplified'
import { Image } from 'src/models/Image';

export interface Album {
    artists: ArtistSimplified[];
    href: string;
    images: Image[];
    name: string;
    release_date: string;
    uri: string;
}