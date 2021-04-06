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
    return this.get(this.api_url + `/search/tracks/${searchQuery}`);
  }

  public searchPlaylists(searchQuery: string): Promise<SearchPlaylistsResponse> {
    return this.get(this.api_url + `/search/playlists/${searchQuery}`);
  }

  public fetchTrackMetadata(trackUri: string): Promise<TrackMetadataResponse> {
    return this.get(this.api_url + `/fetchTrackMetadata/${trackUri}`);
  }

  public fetchArtistMetadata(artistUri: string): Promise<ArtistMetadataResponse> {
    return this.get(this.api_url + `/fetchArtistMetadata/${artistUri}`);
  }

  public comparePlaylists(playlistUris: string[]): Promise<ComparePlaylistsResponse> {
    const body = JSON.stringify({
      "uris": playlistUris
    })
    return this.post(this.api_url + '/comparePlaylists', body);
  }

  public get(endpoint: string): Promise<any> {
    return fetch(endpoint).then((response: any) => response.json());
  }

  public post(endpoint: string, body: string): Promise<any> {
    let options = {
      method: HttpMethod.POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body,
    }
    console.log({body})
    return fetch(endpoint, options).then((response: any) => response.json());
  }
}

export default SpotifyApiService;