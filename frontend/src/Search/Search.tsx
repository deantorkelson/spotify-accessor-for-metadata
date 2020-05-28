import React from 'react'
import SpotifyApiService from '../SpotifyApiService/SpotifyApiService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { SearchResultItem } from '../models/SearchResultItem';

interface SearchState {
  searchResults: SearchResultItem[];
}

export class Search extends React.Component<{}, SearchState> {

  public searchQuery: string = '';
  private spotifyApiService: SpotifyApiService = new SpotifyApiService();

  constructor(props: any) {
    super(props);
    this.state = {
      searchResults: []
    }
  }

  searchSubmit() {
    console.log(this.spotifyApiService.search(this.searchQuery).then(data => {
      this.setState({searchResults: data.tracks.items});
    }));
  }

  createSearchResultList(): JSX.Element[] {
    if (this.state.searchResults.length === 0) {
      return [<div key='-1'>No search results found.</div>]
    }
    return this.state.searchResults.map((result: SearchResultItem) => this.createSearchResult(result));
  }

  createSearchResult(result: SearchResultItem): JSX.Element {
    return (
      <div key={result.uri}>
        <img src={result.album.images[0].url} />
        <div>
          {result.name}
        </div>
        <div>
          {result.artists[0].name} • {result.album.name}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        Enter the name of the artist to search for:<br />
        <Form.Control
          type="text"
          placeholder="Enter an artist name..."
          onChange={(value: any) =>
            this.searchQuery = value.target.value
          }
        />
        <Button variant="primary" type="submit" onClick={() => this.searchSubmit()}>
          Submit
        </Button>
        {this.createSearchResultList()}
      </div>
    );
  }
}

export default Search;