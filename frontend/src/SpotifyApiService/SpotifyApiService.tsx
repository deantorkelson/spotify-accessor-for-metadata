export class SpotifyApiService {
    private api_url: string;

    constructor() {
        this.api_url = 'http://127.0.0.1:5000'
    }

    public search(searchQuery: string): Promise<any> {
        return fetch(this.api_url + `/search/${searchQuery}`).then(response => response.json());
    }
}

export default SpotifyApiService;