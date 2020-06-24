export class SpotifyApiService {
    private api_url: string;

    constructor() {
        if(process.env.REACT_APP_USE_LOCAL_BACKEND === "1") {
            this.api_url = 'http://127.0.0.1:5000'
          } else {
            this.api_url = 'https://spotify-accessor-for-metadata.herokuapp.com'
          }
        
    }

    public searchTracks(searchQuery: string): Promise<any> {
        return fetch(this.api_url + `/search/${searchQuery}`).then(response => response.json());
    }

    public fetchTrackMetadata(trackUri: string): Promise<any> {
        return fetch(this.api_url + `/fetchTrackMetadata/${trackUri}`).then(response => response.json());
    }

    public fetchArtistMetadata(artistUri: string): Promise<any> {
        return fetch(this.api_url + `/fetchArtistMetadata/${artistUri}`).then(response => response.json());
    }
}

export default SpotifyApiService;