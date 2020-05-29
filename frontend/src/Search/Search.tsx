import React from 'react'
import SpotifyApiService from '../SpotifyApiService/SpotifyApiService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { SearchResultItem } from '../models/SearchResultItem';
import { AudioFeatures } from '../models/AudioFeatures';
import SampleTrackSearch from '../static/sample-data/SampleTrackSearch.json'
import blackLogo from '../static/black-logo.png'
import './Search.css'

interface SearchState {
  searchResults: SearchResultItem[];
  metadata: AudioFeatures;
}

export class Search extends React.Component<{}, SearchState> {

  public searchQuery: string = '';
  private spotifyApiService: SpotifyApiService = new SpotifyApiService();

  constructor(props: any) {
    super(props);
    this.state = {
      searchResults: SampleTrackSearch.tracks.items,
      metadata: {} as AudioFeatures
    }
  }

  searchSubmit() {
    this.spotifyApiService.searchTracks(this.searchQuery).then(data => {
      this.setState({ searchResults: data.tracks.items });
    });
  }

  createSearchResultList(): JSX.Element {
    if (this.state.searchResults.length === 0) {
      return <div key='-1'>No search results found.</div>
    }
    return (
      <div className='result-list'>
        {this.state.searchResults.map((result: SearchResultItem) => this.createSearchResult(result))}
      </div>
    )
  }


  createSearchResult(result: SearchResultItem): JSX.Element {
    return (
      <div key={result.uri}>
        <Button variant='outline-secondary' onClick={() => this.fetchTrackMetadata(result.uri)}>
          <img className='album-art' src={result.album.images[0].url} alt={`Album art for ${result.album.name}`} />
          <div>
            {result.name}
          </div>
          <div>
            {result.artists[0].name} • {result.album.name}
          </div>
        </Button>
      </div>
    );
  }

  fetchTrackMetadata(songUri: string) {
    this.spotifyApiService.fetchTrackMetadata(songUri).then(data => {
      this.setState({ metadata: data });
    })
  }

  displayMetadata() {
    return <div>metadata goes here<br /><br /><br />moredata</div>
  }

  render() {
    return (
      <div className='search-page'>
        <div className='input-prompt'>
          Enter the name of the track to search for:
        </div>
        <Form className='input' inline>
          <Form.Control 
            type="text"
            onChange={(value: any) =>
              this.searchQuery = value.target.value
            }
          />
          <Button variant="outline-success" type="submit" onClick={() => this.searchSubmit()}>
            <img className='submit' src={blackLogo} alt='Submit' />
          </Button>
        </Form>
        <div className='main-content'>
          <div className='column'>
            {this.createSearchResultList()}
          </div>
          <div className='column'>
            {this.displayMetadata()}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;