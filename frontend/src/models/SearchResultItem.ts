import { ArtistSimplified } from './ArtistSimplified'
import { Album } from './Album'

export interface SearchResultItem {
    album: Album;
    artists: ArtistSimplified[];
    explicit: boolean;
    href: string;  // link to Spotify api url for this item
    name: string;  // song name
    type: string;
    uri: string;
}