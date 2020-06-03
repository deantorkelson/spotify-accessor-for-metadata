import React from 'react'
import SpotifyApiService from '../SpotifyApiService/SpotifyApiService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { SearchResultItem } from '../models/SearchResultItem';
import { AudioFeatures, getKeyAndMode } from '../models/AudioFeatures';
import blackLogo from '../static/black-logo.png'
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip';
import InfoIconOutlined from '@material-ui/icons/InfoOutlined';
import './Search.css'
import { Artist } from '../models/Artist';

interface SearchState {
  searchResults: SearchResultItem[];
  trackName: string;
  artistName: string;
  trackMetadata: AudioFeatures;
  artistMetadata: Artist;
}

export class Search extends React.Component<{}, SearchState> {

  public searchQuery: string = '';
  private spotifyApiService: SpotifyApiService = new SpotifyApiService();

  constructor(props: any) {
    super(props);
    this.state = {
      searchResults: [],
      trackName: '',
      artistName: '',
      trackMetadata: {} as AudioFeatures,
      artistMetadata: {} as Artist
    }
  }

  searchSubmit(): void {
    if (this.searchQuery)
      this.spotifyApiService.searchTracks(this.searchQuery).then(data => {
        this.setState({ searchResults: data.tracks.items });
      });
  }

  fetchTrackMetadata(songUri: string, trackName: string): void {
    this.spotifyApiService.fetchTrackMetadata(songUri).then(data => {
      this.setState(
        {
          trackMetadata: data,
          trackName: trackName
        });
    })
  }

  fetchArtistMetadata(artistUri: string, artistName: string): void {
    this.spotifyApiService.fetchArtistMetadata(artistUri).then(data => {
      this.setState(
        {
          artistMetadata: data,
          artistName: artistName
        });
    })
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
        <Button variant='outline-secondary' onClick={() => {
          this.fetchTrackMetadata(result.uri, result.name);
          this.fetchArtistMetadata(result.uri, result.artists[0].name);
        }}>
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

  displayTrackMetadata(): JSX.Element {
    let metadata = this.state.trackMetadata;
    if (!metadata.duration_ms)
      return <div>Please search for and select a song to view its metadata.</div>
    let acousticnessTitle = 'A confidence measure from 0.0 to 1.0 of whether the track is acoustic.';
    let danceabilityTitle = 'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.';
    let energyTitle = 'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.';
    let instrumentalnessTitle = 'Predicts whether a track contains no vocals. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content.';
    let livenessTitle = 'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.';
    let loudnessTitle = 'The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks.';
    let speechinessTitle = 'Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value.';
    let valenceTitle = 'A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track.';
    return (
      <div>
        <h3>Audio Features for {this.state.trackName}:</h3>
        <h5>Key: {getKeyAndMode(metadata.key, metadata.mode)}</h5>
        <h5>Tempo: {metadata.tempo}</h5>
        <h5>Beats/measure: {metadata.time_signature}</h5>
        <div className='value-sliders'>
          <div className='reduced-column'>
            <span className='attribute-title'>Acousticness </span>
            <Tooltip title={acousticnessTitle}>
              <InfoIconOutlined fontSize='small' />
            </Tooltip>
            <Slider disabled track={false} value={metadata.acousticness} max={1} />

            <span className='attribute-title'>Danceability </span>
            <Tooltip title={danceabilityTitle}>
              <InfoIconOutlined fontSize='small' />
            </Tooltip>
            <Slider disabled track={false} value={metadata.danceability} max={1} />

            <span className='attribute-title'>Energy </span>
            <Tooltip title={energyTitle}>
              <InfoIconOutlined fontSize='small' />
            </Tooltip>
            <Slider disabled track={false} value={metadata.energy} max={1} />

            <span className='attribute-title'>Instrumentalness </span>
            <Tooltip title={instrumentalnessTitle}>
              <InfoIconOutlined fontSize='small' />
            </Tooltip>
            <Slider disabled track={false} value={metadata.instrumentalness} max={1} />
          </div>

          <div className='reduced-column'>
            <span className='attribute-title'>Liveness </span>
            <Tooltip title={livenessTitle}>
              <InfoIconOutlined fontSize='small' />
            </Tooltip>
            <Slider disabled track={false} value={metadata.liveness} max={1} />

            <span className='attribute-title'>Loudness </span>
            <Tooltip title={loudnessTitle}>
              <InfoIconOutlined fontSize='small' />
            </Tooltip>
            <Slider disabled track={false} value={metadata.loudness * -1} max={60} />

            <span className='attribute-title'>Speechiness </span>
            <Tooltip title={speechinessTitle}>
              <InfoIconOutlined fontSize='small' />
            </Tooltip>
            <Slider disabled track={false} value={metadata.speechiness} max={1} />

            <span className='attribute-title'>Valence </span>
            <Tooltip title={valenceTitle}>
              <InfoIconOutlined fontSize='small' />
            </Tooltip>
            <Slider disabled track={false} value={metadata.valence} max={1} />
          </div>
        </div>
      </div>
    );
  }

  displayArtistMetadata(): JSX.Element {
    return (
      <div>
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
            {this.displayTrackMetadata()}
            {this.displayArtistMetadata()}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;