import React from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-modal';

import SpotifyApiService from '../../SpotifyApiService/SpotifyApiService'
import TextInput from '../../components/TextInput/TextInput'
import { Playlist } from '../../models/Playlist'
import '../ResultList.css'
import './PlaylistCompare.css'

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
      this.setState({ searchLoading: true });
      this.spotifyApiService.searchPlaylists(query).then(data => {
        this.setState({ searchResults: data.playlists.items, searchLoading: false });
      });
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

  render() {
    return (
      <div className='page'>
        <div className='header'>
          Enter the name of the playlist to search for:
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