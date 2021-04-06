import {ArtistMetadataResponse} from 'src/models/api/ArtistMetadataResponse';
import {SearchTracksResponse} from 'src/models/api/SearchTracksResponse';
import {TrackMetadataResponse} from 'src/models/api/TrackMetadataResponse';
import {SearchPlaylistsResponse} from 'src/models/api/SearchPlaylistsResponse';
import {ComparePlaylistsResponse} from 'src/models/api/ComparePlaylistsResponse';

enum HttpMethod {
  GET = 'GET',
  POST = 'POST'
}

export class SpotifyApiService {
  readonly api_url: string;

  constructor() {
    if (process.env.REACT_APP_USE_LOCAL_BACKEND === "1") {
      this.api_url = 'http://127.0.0.1:5000'
    } else {
      this.api_url = 'https://spotify-accessor-for-metadata.herokuapp.com'
    }
  }

  public searchTracks(searchQuery: string): Promise<SearchTracksResponse> {
    return this.fetcher(this.api_url + `/search/tracks/${searchQuery}`, HttpMethod.GET);
  }

  public searchPlaylists(searchQuery: string): Promise<SearchPlaylistsResponse> {
    return this.fetcher(this.api_url + `/search/playlists/${searchQuery}`, HttpMethod.GET);
  }

  public fetchTrackMetadata(trackUri: string): Promise<TrackMetadataResponse> {
    return this.fetcher(this.api_url + `/fetchTrackMetadata/${trackUri}`, HttpMethod.GET);
  }

  public fetchArtistMetadata(artistUri: string): Promise<ArtistMetadataResponse> {
    return this.fetcher(this.api_url + `/fetchArtistMetadata/${artistUri}`, HttpMethod.GET);
  }

  public comparePlaylists(playlistUris: string[]): Promise<ComparePlaylistsResponse> {
    const body = JSON.stringify({
      "uris": playlistUris
    })
    return this.fetcher(this.api_url + '/comparePlaylists', HttpMethod.POST, body);
  }

  public fetcher(endpoint: string, method: string, body?: string): Promise<any> {
    let options = {
      method,
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    if (body) {
      // @ts-ignore
      options.body = body;
    }
    // @ts-ignore
    return fetch(endpoint, options).then((response: any) => response.json());
  }
}

export default SpotifyApiService;