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
import en from 'src/static/additionalStrings'
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

  const audioFeatureSlider = (title: string, tooltip: string, value: number) => (
    <>
      <span className='attribute-title'>{title}</span>
      <Tooltip title={tooltip}>
        <InfoIconOutlined fontSize='small' />
      </Tooltip>
      <Slider disabled track={false} value={value} max={1} />
    </>
  )

  const createAudioFeatureSliderData = (trackMetadata: TrackMetadataResponse) => (
    [
      {
        title: 'Acousticness',
        tooltip: en.search.tooltips.acousticness,
        value: trackMetadata.acousticness,
      },
      {
        title: 'Danceability',
        tooltip: en.search.tooltips.danceability,
        value: trackMetadata.danceability,
      },
      {
        title: 'Energy',
        tooltip: en.search.tooltips.energy,
        value: trackMetadata.energy,
      },
      {
        title: 'Instrumentalness',
        tooltip: en.search.tooltips.instrumentalness,
        value: trackMetadata.instrumentalness,
      },
      {
        title: 'Liveness',
        tooltip: en.search.tooltips.liveness,
        value: trackMetadata.liveness,
      },
      {
        title: 'Loudness',
        tooltip: en.search.tooltips.loudness,
        value: trackMetadata.loudness/(-60),
      },
      {
        title: 'Speechiness',
        tooltip: en.search.tooltips.speechiness,
        value: trackMetadata.acousticness,
      },
      {
        title: 'Valence',
        tooltip: en.search.tooltips.valence,
        value: trackMetadata.valence,
      },
    ]
  )

  const displayTrackMetadata = () => {
    if (!trackMetadata?.duration_ms)
      return <div>Please search for and select a song to view its metadata.</div>
    const data = createAudioFeatureSliderData(trackMetadata);
    const columnLength = 4;
    return (
      <div>
        <h3>Audio features for <span className='name'>{trackName}</span>:</h3>
        <h5>Key: {getKeyAndMode(trackMetadata.key, trackMetadata.mode)}</h5>
        <h5>Tempo: {trackMetadata.tempo}</h5>
        <h5>Beats/measure: {trackMetadata.time_signature}</h5>
        <div className='value-sliders'>
          <div className='reduced-column'>
            {data.slice(0, columnLength).map(sliderData => audioFeatureSlider(
              sliderData.title,
              sliderData.tooltip,
              sliderData.value
            ))}
          </div>
          <div className='reduced-column'>
            {data.slice(columnLength, data.length).map(sliderData => audioFeatureSlider(
              sliderData.title,
              sliderData.tooltip,
              sliderData.value
            ))}
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
      <TextInput 
        placeholder={en.search.placeholder}
        submit={searchSubmit}
      />
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