import React from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from "react-bootstrap/Spinner";

import SpotifyApiService from '../../SpotifyApiService/SpotifyApiService'
import TextInput from '../../components/TextInput/TextInput'
import { Playlist } from '../../models/Playlist'
import '../ResultList.css'
import './PlaylistCompare.css'

interface PlaylistCompareState {
  searchResults: Playlist[];
  loading: boolean;
}

export class PlaylistCompare extends React.Component<{}, PlaylistCompareState> {

  private spotifyApiService: SpotifyApiService = new SpotifyApiService();

  constructor(props: any) {
    super(props);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.state = {
      searchResults: [],
      loading: false
    }
  }

  searchSubmit(query: string): void {
    if (query) {
      this.setState({loading: true});
      this.spotifyApiService.searchPlaylists(query).then(data => {
        console.log(data);
        this.setState({ searchResults: data.playlists.items, loading: false });
      });
    }
  }

  createSearchResultList(): JSX.Element {
    if (this.state.searchResults.length === 0 && !this.state.loading) {
      return <div key='-1'>No search results found.</div>
    }
    return (
      <div>
        {this.state.loading ? 
        <div>
          <Spinner animation='border'/>
          <div>
            *note that the first search might take extra time while the Heroku dyno spins up.
          </div>
        </div> :
        <div className='result-list'>
          {this.state.searchResults.map((result: Playlist) => this.createSearchResult(result))}
        </div>}
      </div>
    )
  }

  displayPlaylistMetadata(creator: string, description: string): JSX.Element {
    if (description) {
      return <div>{creator}: {description}</div>
    }
    return <div>Playlist by {creator}</div>
  }

  createSearchResult(result: Playlist): JSX.Element {
    return (
      <div key={result.uri}>
        <Button variant='outline-secondary' onClick={() => {
        }}>
          <div className='result'>
            <img className='cover-img' src={result.images[0].url} alt={`Cover for ${result.name}`} />
            <section className='result-text'>
              <div>
                <b>{result.name}</b> by {result.owner.display_name}
              </div>
              {result.description && 
                <div>
                  Description: {decodeURI(result.description.replace("&#x", "%")).replace(";", "")}
                </div>}
              <div>
                {result.tracks.total} songs
              </div>
            </section>
          </div>
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div className='page'>
        <div className='input-prompt'>
          Enter the name of the playlist to search for:
        </div>
        <TextInput submit={this.searchSubmit}/>
        <div className='main-content'>
          <div className='column'>
            {this.createSearchResultList()}
          </div>
        </div>
        Flow for library compare: <br/>
        1) Users search for playlists<br/>
        2) Users add playlists they want to compare to a list<br/>
        3) When they are ready, the URIs are sent to the backend<br/>
        4) The backend fetches the songs from the playlists, and finds similarities<br/>
        5) The list of common tracks is returned <br/>
      </div>
    )
  }
}

export default PlaylistCompare;