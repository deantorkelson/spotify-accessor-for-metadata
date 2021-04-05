import { Playlist } from "../Playlist";

export interface SearchPlaylistsResponse {
  playlists: {
      href: string;
      items: Playlist[];
      limit: number;
      next: string;
      offset: number;
      previous: string;
      total: number;
  }
}