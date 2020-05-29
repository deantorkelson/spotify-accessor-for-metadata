import SampleTrackSearch from '../static/sample-data/SampleTrackSearch.json'

export class SpotifyApiService {
    private api_url: string;

    constructor() {
        this.api_url = 'http://127.0.0.1:5000'
    }

    public searchTracks(searchQuery: string): Promise<any> {
        return new Promise((resolve) => resolve(SampleTrackSearch));
        // return fetch(this.api_url + `/search/${searchQuery}`).then(response => response.json());
    }

    public fetchTrackMetadata(trackUri: string): Promise<any> {
        return fetch(this.api_url + `/fetchTrackMetadata/${trackUri}`).then(response => response.json());
    }
}

export default SpotifyApiService;