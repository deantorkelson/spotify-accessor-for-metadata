import React from 'react'
import SpotifyApiService from '../SpotifyApiService/SpotifyApiService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { SearchResultItem } from '../models/SearchResultItem';
import { AudioFeatures } from '../models/AudioFeatures';
import blackLogo from '../static/black-logo.png'
import SampleTrackMetadata from '../static/sample-data/SampleTrackMetadata.json'
import Slider from '@material-ui/core/Slider'
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
      searchResults: [],
      metadata: SampleTrackMetadata
    }
  }

  searchSubmit() {
    if (this.searchQuery)
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
          <div className='result'>
            <img className='album-art' src={result.album.images[0].url} alt={`Album art for ${result.album.name}`} />
            <span>
              <div>
                {result.name}
              </div>
              <div>
                {result.artists[0].name} • {result.album.name}
              </div>
            </span>
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
    let metadata = this.state.metadata;
    return (
      <div>
        <h3>Audio Features:</h3>
        <h6>Acousticness</h6>
        <Slider disabled value={metadata.acousticness} max={1}/>
        <h6>Danceability</h6>
        <Slider disabled value={metadata.danceability} max={1}/>
        <h6>Energy</h6>
        <Slider disabled value={metadata.energy} max={1}/>
        <h6>Instrumentalness</h6>
        <Slider disabled value={metadata.instrumentalness} max={1}/>
        <h6>Liveness</h6>
        <Slider disabled value={metadata.liveness} max={1}/>
        <h6>Loudness</h6>
        <Slider disabled value={metadata.loudness * -1} max={60}/>
        <h6>Speechiness</h6>
        <Slider disabled value={metadata.speechiness} max={1}/>
        <h6>Valence</h6>
        <Slider disabled value={metadata.valence} max={1}/>
      </div>
    );
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
          <Button className='submit' variant="outline-success" onClick={() => this.searchSubmit()}>
            <img className='submit-img' src={blackLogo} alt='Submit' />
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