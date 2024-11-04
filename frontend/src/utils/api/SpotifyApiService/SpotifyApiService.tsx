import { ENVIRONMENTS } from "src/constants";
import { ArtistMetadataResponse } from "src/models/api/ArtistMetadataResponse";
import { SearchTracksResponse } from "src/models/api/SearchTracksResponse";
import { TrackMetadataResponse } from "src/models/api/TrackMetadataResponse";
import { SearchPlaylistsResponse } from "src/models/api/SearchPlaylistsResponse";
import { ComparePlaylistsResponse } from "src/models/api/ComparePlaylistsResponse";
import { Playlist } from "src/models/Playlist";
import { BookQuoteResponse } from "src/models/api/BookQuoteResponse";
import { RubinResponse } from "src/models/api/RubinResponse";

enum HttpMethod {
  GET = "GET",
  POST = "POST",
}

export class SpotifyApiService {
  readonly api_url: string;

  constructor() {
    if (process.env.NODE_ENV === ENVIRONMENTS.DEV) {
      this.api_url = "http://127.0.0.1:5000";
    } else {
      this.api_url = "https://sam-backend-d60bd9ccf7b8.herokuapp.com";
    }
  }

  public searchTracks(searchQuery: string): Promise<SearchTracksResponse> {
    return this.get(this.api_url + `/search/tracks?q=${searchQuery}`);
  }

  public searchPlaylists(
    searchQuery: string
  ): Promise<SearchPlaylistsResponse> {
    return this.get(this.api_url + `/search/playlists?q=${searchQuery}`);
  }

  public playlistDetails(playlistUri: string): Promise<Playlist> {
    return this.get(this.api_url + `/playlist/${playlistUri}`);
  }

  public fetchTrackMetadata(trackUri: string): Promise<TrackMetadataResponse> {
    return this.get(this.api_url + `/track/${trackUri}`);
  }

  public fetchArtistMetadata(
    artistUri: string
  ): Promise<ArtistMetadataResponse> {
    return this.get(this.api_url + `/artist/${artistUri}`);
  }

  public comparePlaylists(
    playlistUris: string[]
  ): Promise<ComparePlaylistsResponse> {
    const body = JSON.stringify({
      uris: playlistUris,
    });
    return this.post(this.api_url + "/playlists/compare", body);
  }

  public rubinQuote(): Promise<RubinResponse> {
    return this.get(this.api_url + `/random/rubin`);
  }

  public bookQuote(): Promise<BookQuoteResponse> {
    return this.get(this.api_url + `/random/book_quote`);
  }

  public get(endpoint: string): Promise<any> {
    return fetch(endpoint).then((response: any) => response.json());
  }

  public post(endpoint: string, body: string): Promise<any> {
    let options = {
      method: HttpMethod.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };
    return fetch(endpoint, options).then((response: any) => response.json());
  }
}

export default SpotifyApiService;
