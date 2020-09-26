import { Followers } from "./Followers";
import { Image } from "./Image";
import { User } from "./User";

export interface Playlist {
    description: string;
    followers: Followers;
    images: Image[];
    name: string;
    owner: User;
    uri: string;
}