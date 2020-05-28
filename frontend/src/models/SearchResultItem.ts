import { Artist } from './Artist'
import { Album } from './Album'

export interface SearchResultItem {
    album: Album;
    artists: Artist[];
    explicit: boolean;
    href: string;  // link to Spotify api url for this item
    name: string;  // song name
    type: string;
    uri: string;
}