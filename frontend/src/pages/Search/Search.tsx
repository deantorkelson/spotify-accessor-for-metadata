import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from "react-bootstrap/Spinner";
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip';
import InfoIconOutlined from '@material-ui/icons/InfoOutlined';

import TextInput from 'src/components/TextInput/TextInput'
import { ArtistMetadataResponse } from 'src/models/api/ArtistMetadataResponse';
import { TrackMetadataResponse, getKeyAndMode } from 'src/models/api/TrackMetadataResponse';
import { Track } from 'src/models/Track';
import SpotifyApiService from 'src/SpotifyApiService/SpotifyApiService'
import './Search.css'
import '../ResultList.css'

export const Search = () => {
  const [searchResults, setSearchResults] = useState([] as Track[]);
  const [loading, setLoading] = useState(false);
  const [trackName, setTrackName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [trackMetadata, setTrackMetadata] = useState({} as TrackMetadataResponse);
  const [artistMetadata, setArtistMetadata] = useState({} as ArtistMetadataResponse);

  const spotifyApiService = new SpotifyApiService();

  const searchSubmit = (query: string) => {
    if (!query) {
      return;
    }
    setLoading(true);
    spotifyApiService.searchTracks(query).then(data => {
      setSearchResults(data.tracks.items);
      setLoading(false);
    });
  };

  const fetchTrackMetadata = (songUri: string, trackName: string) => {
    spotifyApiService.fetchTrackMetadata(songUri).then(data => {
      setTrackMetadata(data);
      setTrackName(trackName);
    });
  };

  const fetchArtistMetadata = (artistUri: string, artistName: string) => {
    spotifyApiService.fetchArtistMetadata(artistUri).then(data => {
      setArtistMetadata(data);
      setArtistName(artistName);
    });
  };

  const searchResultList = () => (
    searchResults.length === 0 && !loading
    ? <div key='-1'>No search results found.</div>
    : <div>
      {loading ?
        <div>
          <Spinner animation='border'/>
          <div>
            *note that the first search might take extra time while the Heroku dyno spins up.
          </div>
        </div> :
        <div className='result-list'>
          {searchResults.map((result: Track) => searchResult(result))}
        </div>}
      </div>
  );

  const searchResult = (result: Track) => (
    <div key={result.uri}>
      <Button variant='outline-secondary' onClick={() => {
        fetchTrackMetadata(result.uri, result.name);
        fetchArtistMetadata(result.artists[0].uri, result.artists[0].name);
      }}>
        <div className='result'>
          <img className='cover-img' src={result.album.images[0].url} alt={`Album art for ${result.album.name}`} />
          <section className='result-text'>
            <b>
              {result.name}
            </b>
            <div>
              {result.artists[0].name} • {result.album.name}
            </div>
          </section>
        </div>
      </Button>
    </div>
  );

  const displayTrackMetadata = () => {
    let metadata = trackMetadata;
    if (!metadata?.duration_ms)
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
        <h3>Audio features for <span className='name'>{trackName}</span>:</h3>
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
  };

  const displayArtistMetadata = () => (
    !artistMetadata?.followers
    ? <div>Please search for and select a song to view its artist's metadata.</div>
    : <div>
        <h3>Additional information on <span className='name'>{artistName}</span>:</h3>
        <h5>Genres: {displayGenres(artistMetadata.genres)}</h5>
        <h5>Followers: {artistMetadata.followers.total.toLocaleString()}</h5>
        <h5>Popularity: {artistMetadata.popularity}</h5>
      </div>
  );

  const displayGenres = (genres: string[]) => (
    !genres.length
    ? 'No genre information is available for this artist.'
    : genres.join(', ')
  );

  return (
    <div className='page'>
      <div className='header'>
        Enter the name of the track to search for:
      </div>
      <TextInput submit={searchSubmit}/>
      <div className='main-content'>
        <div className='column'>
          {searchResultList()}
        </div>
        <div className='column'>
          {displayTrackMetadata()}
          <hr/>
          {displayArtistMetadata()}
        </div>
      </div>
    </div>
  );
}

export default Search;