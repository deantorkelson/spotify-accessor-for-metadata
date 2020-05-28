import { Artist } from './Artist'

export interface Album {
    artists: Artist[];
    href: string;
    images: Image[];
    name: string;
    release_date: string;
    uri: string;
}

interface Image {
    height: number;
    width: number;
    url: string;
}