import { ArtistMetadataResponse } from '../models/api/ArtistMetadataResponse';
import { SearchTracksResponse } from '../models/api/SearchTracksResponse';
import { TrackMetadataResponse } from '../models/api/TrackMetadataResponse';

export class SpotifyApiService {
    private api_url: string;

    constructor() {
        if (process.env.REACT_APP_USE_LOCAL_BACKEND === "1") {
            this.api_url = 'http://127.0.0.1:5000'
        } else {
            this.api_url = 'https://spotify-accessor-for-metadata.herokuapp.com'
        }
    }


    public searchTracks(searchQuery: string): Promise<SearchTracksResponse> {
        return fetch(this.api_url + `/search/tracks/${searchQuery}`).then(response => response.json());
    }
    
    public searchPlaylists(searchQuery: string): Promise<any> {
        return fetch(this.api_url + `/search/playlists/${searchQuery}`).then(response => response.json());
    }

    public fetchTrackMetadata(trackUri: string): Promise<TrackMetadataResponse> {
        return fetch(this.api_url + `/fetchTrackMetadata/${trackUri}`).then(response => response.json());
    }

    public fetchArtistMetadata(artistUri: string): Promise<ArtistMetadataResponse> {
        return fetch(this.api_url + `/fetchArtistMetadata/${artistUri}`).then(response => response.json());
    }

    public comparePlaylists(playlistUris: string[]): Promise<any> {
        let options = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "uris": playlistUris
            })
        }
        return fetch(this.api_url + '/comparePlaylists', options).then(response => response.json());
    }
}

export default SpotifyApiService;