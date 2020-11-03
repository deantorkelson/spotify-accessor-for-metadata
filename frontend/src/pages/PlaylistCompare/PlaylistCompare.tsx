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
  selectedPlaylists: Set<Playlist>;
  compareLoading: boolean;
}

export class PlaylistCompare extends React.Component<{}, PlaylistCompareState> {

  private spotifyApiService: SpotifyApiService = new SpotifyApiService();

  constructor(props: any) {
    super(props);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.state = {
      searchResults: [],
      loading: false,
      selectedPlaylists: new Set(),
      compareLoading: false
    }
  }

  searchSubmit(query: string): void {
    if (query) {
      this.setState({loading: true});
      this.spotifyApiService.searchPlaylists(query).then(data => {
        this.setState({ searchResults: data.playlists.items, loading: false });
      });
    }
  }

  compareSubmit(playlists: Set<Playlist>): void {
    this.setState({compareLoading: true});
    let playlistUris: string[] = [];
    playlists.forEach((playlist: Playlist) => {
      playlistUris.push(playlist.uri)
    })
    this.spotifyApiService.comparePlaylists(playlistUris).then(data => {
      console.log(data);
      this.setState({ compareLoading: false });
    });
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
          {this.state.searchResults.map((playlist: Playlist) => this.createSearchResult(playlist, 
            () => {
              let set = new Set(this.state.selectedPlaylists)
              set.add(playlist);
              this.setState({selectedPlaylists: set})
              }
            ))}
        </div>}
      </div>
    )
  }

  createSearchResult(result: Playlist, onClickFn: any): JSX.Element {
    return (
      <div key={result.uri}>
        <Button variant='outline-secondary' onClick={() => {
          onClickFn(result);
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

  displaySelectedPlaylists(): JSX.Element {
    if (this.state.selectedPlaylists.size > 0) {
      let selectedPlaylists: JSX.Element[] = [];
      this.state.selectedPlaylists.forEach((playlist: Playlist) => {
        selectedPlaylists.push(this.createSearchResult(playlist, 
          () => {
            let set = new Set(this.state.selectedPlaylists)
            set.delete(playlist);
            this.setState({selectedPlaylists: set})
          }));
      });
      return <div>
        {selectedPlaylists}
        <Button className='submit' type="button" variant="outline-success" onClick={() => this.compareSubmit(this.state.selectedPlaylists)}>
          Submit
        </Button>
      </div>
    }
    return <div>Please select some playlists to compare.</div>
  }

  render() {
    return (
      <div className='page'>
        <div className='header'>
          Enter the name of the playlist to search for:
        </div>
        <TextInput submit={this.searchSubmit}/>
        <div className='main-content'>
          <div className='column'>
            {this.createSearchResultList()}
          </div>
          <div className='column'>
            <div className='header'>
              Comparing these playlists on submit:
            </div>
            {this.displaySelectedPlaylists()}
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