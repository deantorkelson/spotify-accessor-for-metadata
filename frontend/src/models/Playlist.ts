import { Followers } from "src/models/Followers";
import { Image } from "src/models/Image";
import { User } from "src/models/User";

export interface Playlist {
  description: string;
  followers: Followers;
  images: Image[];
  name: string;
  owner: User;
  tracks: PlaylistTracks;
  uri: string;
}

interface PlaylistTracks {
  href: string;
  total: number;
}
