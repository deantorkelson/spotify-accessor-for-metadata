import React from 'react'
import SpotifyApiService from '../SpotifyApiService/SpotifyApiService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-modal'
import { SearchResultItem } from '../models/SearchResultItem';

interface SearchState {
  searchResults: SearchResultItem[];
  modalIsOpen: boolean;
  metadata: string;
}

export class Search extends React.Component<{}, SearchState> {

  public searchQuery: string = '';
  private spotifyApiService: SpotifyApiService = new SpotifyApiService();

  constructor(props: any) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      searchResults: [],
      metadata: 'No track metadata to display at this time.',
      modalIsOpen: false
    }
  }

  searchSubmit() {
    this.spotifyApiService.searchTracks(this.searchQuery).then(data => {
      this.setState({searchResults: data.tracks.items});
    });
  }

  createSearchResultList(): JSX.Element[] {
    if (this.state.searchResults.length === 0) {
      return [<div key='-1'>No search results found.</div>]
    }
    return this.state.searchResults.map((result: SearchResultItem) => this.createSearchResult(result));
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  createSearchResult(result: SearchResultItem): JSX.Element {
    return (
      <div key={result.uri}>
        <img src={result.album.images[0].url} />
        <button onClick={() => this.fetchAndDisplayTrackMetadata(result.uri)}>
          <div>
            {result.name}
          </div>
          <div>
            {result.artists[0].name} • {result.album.name}
          </div>
        </button>
      </div>
    );
  }

  fetchAndDisplayTrackMetadata(songUri: string) {
    this.spotifyApiService.fetchTrackMetadata(songUri).then(data => {
      this.setState({metadata: data});
      this.openModal();
    })
  }

  render() {
    return (
      <div>
        Enter the name of the track to search for:<br />
        <Form.Control
          type="text"
          placeholder="Enter a track name..."
          onChange={(value: any) =>
            this.searchQuery = value.target.value
          }
        />
        <Button variant="primary" type="submit" onClick={() => this.searchSubmit()}>
          Submit
        </Button>
        {this.createSearchResultList()}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          contentLabel="Track Metadata">
          <Button className='header-button' variant='primary' onClick={() => this.closeModal()}>
            Close
          </Button>
          {this.state.metadata}
        </Modal>
      </div>
    );
  }
}

export default Search;