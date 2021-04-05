import React from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Modal from 'react-modal';

import TextInput from 'src/components/TextInput/TextInput'
import { isUriList } from 'src/helpers/helpers';
import { Playlist } from 'src/models/Playlist'
import SpotifyApiService from 'src/SpotifyApiService/SpotifyApiService'
import './PlaylistCompare.css'
import '../ResultList.css'

let he = require('he');

interface PlaylistCompareState {
  searchResults: Playlist[];
  searchLoading: boolean;
  selectedPlaylists: Set<Playlist>;
  compareLoading: boolean;
  modalIsOpen: boolean;
  modalData: any;
}

export class PlaylistCompare extends React.Component<{}, PlaylistCompareState> {

  private spotifyApiService: SpotifyApiService = new SpotifyApiService();

  constructor(props: any) {
    super(props);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      searchResults: [],
      searchLoading: false,
      selectedPlaylists: new Set(),
      compareLoading: false,
      modalIsOpen: false,
      modalData: undefined
    }
  }

  searchSubmit(query: string): void {
    if (query) {
      if (isUriList(query)) {
        this.setState({ compareLoading: true });
        const playlistUris = query.split(', ')
        this.spotifyApiService.comparePlaylists(playlistUris).then(data => {
          this.setState({ 
            compareLoading: false, 
            modalIsOpen: true, 
            modalData: data 
          });
        });
      } else {
        this.setState({ searchLoading: true });
        this.spotifyApiService.searchPlaylists(query).then(data => {
          this.setState({ 
            searchResults: data.playlists.items, 
            searchLoading: false 
          });
        });
      }
    }
  }

  compareSubmit(playlists: Set<Playlist>): void {
    this.setState({ compareLoading: true });
    let playlistUris: string[] = [];
    playlists.forEach((playlist: Playlist) => {
      playlistUris.push(playlist.uri)
    })
    this.spotifyApiService.comparePlaylists(playlistUris).then(data => {
      this.setState({ compareLoading: false, modalIsOpen: true, modalData: data });
    });
  }

  closeModal(): void {
    this.setState({ modalIsOpen: false })
  }

  commonData(): JSX.Element {
    if (!this.state.modalData)
      return <></>
    return <>
      <Button variant={'outline-secondary'} onClick={this.closeModal}>
        Close
      </Button>
      <div className='modalContent'>
        {"Comparing these playlists: " + this.state.modalData.names.join(', ')}
        <div className='column'>
          <div className='header'>
            Common artists:
          </div>
          <ul>
            {this.state.modalData.artists.map((artist: string) =>
              <div className='modal-li'>
                {artist}
              </div>
            )}
          </ul>
        </div>
        <div className='column'>
          <div className='header'>
            Common songs:
          </div>
          <ul>
            {this.state.modalData.songs.map((song: string) =>
              <div className='modal-li'>
                {song}
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  }

  createSearchResultList(): JSX.Element {
    if (this.state.searchResults.length === 0 && !this.state.searchLoading) {
      return <div key='-1'>No search results found.</div>
    }
    return (
      <>
        {this.state.searchLoading ?
          <div>
            <Spinner animation='border' />
            <div>
              *note that the first search might take extra time while the Heroku dyno spins up.
            </div>
          </div>
          :
          <div className='result-list'>
            {this.state.searchResults.map((playlist: Playlist) => this.createSearchResult(playlist,
              () => {
                let set = new Set(this.state.selectedPlaylists)
                set.add(playlist);
                this.setState({ selectedPlaylists: set })
              }
            ))}
          </div>}
      </>
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
                  Description: {he.decode(result.description)}
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

  getPlaylistList(): JSX.Element[] {
    let playlistItems: JSX.Element[] = [];
    this.state.selectedPlaylists.forEach((playlist: Playlist) => {
      playlistItems.push(this.createSearchResult(playlist,
        () => {
          let set = new Set(this.state.selectedPlaylists)
          set.delete(playlist);
          this.setState({ selectedPlaylists: set })
        }));
    });
    return playlistItems;
  }

  displaySelectedPlaylists(): JSX.Element {
    if (this.state.selectedPlaylists.size > 0) {
      return <div>
        {this.getPlaylistList()}
        {this.state.compareLoading
          ?
          <div>
            <Spinner animation='border' />
          </div>
          :
          <Button className='submit' type="button" variant="outline-success"
            onClick={() =>
              this.compareSubmit(this.state.selectedPlaylists)
            }>
            Submit
          </Button>
        }
      </div>
    }
    return <div>Please select some playlists to compare.</div>
  }

  renderTooltip (props: any) {
    return <Tooltip {...props}>
      {"These take the form \"spotify:playlist:<something>\" or \"spotify/playlist/<something>\""}
    </Tooltip>
  };

  render() {
    return (
      <div className='page'>
        <div className='header'>
          Enter the name of the playlist to search for, <br/>or a comma-separated list of&nbsp;
          <OverlayTrigger
            placement="right"
            delay={{ show: 100, hide: 400 }}
            overlay={this.renderTooltip}
          >
            <span className="uri-tooltip">
              Spotify URIs:
            </span>
          </OverlayTrigger>
        </div>
        <TextInput submit={this.searchSubmit} />
        <div className='main-content'>
          <div className='column'>
            {this.createSearchResultList()}
          </div>
          <div className='column'>
            <div className='header'>
              Comparing these playlists:
            </div>
            {this.displaySelectedPlaylists()}
          </div>
          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
            >
              {this.commonData()}
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaylistCompare;