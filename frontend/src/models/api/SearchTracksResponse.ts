import { Track } from '../Track';

export interface SearchTracksResponse {
  tracks: {
    href: string;
    items: Track[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  }
}
