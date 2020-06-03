import { ArtistSimplified } from './ArtistSimplified'
import { Image } from './Image';

export interface Album {
    artists: ArtistSimplified[];
    href: string;
    images: Image[];
    name: string;
    release_date: string;
    uri: string;
}