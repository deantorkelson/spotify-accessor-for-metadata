export class SpotifyApiService {

    private api_url: string;
    constructor() {
        this.api_url = 'http://127.0.0.1:5000'
    }

    public search(searchQuery: string): Promise<Response> {
        return fetch(this.api_url + `/search/${searchQuery}`)
    }

}