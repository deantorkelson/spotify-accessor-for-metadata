import { Image } from "./Image";

export interface Artist {
    followers: FollowerObject;
    genres: string[];
    images: Image[];
    popularity: number;
}

interface FollowerObject {
    href: string;
    total: number;
}