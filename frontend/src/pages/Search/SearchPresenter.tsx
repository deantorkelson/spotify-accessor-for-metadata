import React from 'react'
import Button from 'react-bootstrap/Button'
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip';
import { InfoOutlined, Visibility } from '@material-ui/icons';

import TextInput from 'src/components/TextInput/TextInput'
import { ArtistMetadataResponse } from 'src/models/api/ArtistMetadataResponse';
import { TrackMetadataResponse, getKeyAndMode } from 'src/models/api/TrackMetadataResponse';
import { Track } from 'src/models/Track';
import { AudioFeatureSliderData, Nullable } from 'src/types/types';
import en from 'src/static/additionalStrings'
import './Search.css'
import '../ResultList.css'
import { createSearchResultList } from 'src/components/ResultList/ResultList';

interface Props {
  artistName: string;
  artistMetadata: Nullable<ArtistMetadataResponse>;
  fetchMetadata: (trackUri: string, trackName: string, artistUri: string, artistName: string) => void;
  loading: boolean;
  searchResults: Nullable<Track[]>;
  searchSubmit: (query: string) => void;
  trackName: string;
  trackMetadata: Nullable<TrackMetadataResponse>;
}

export const SearchPresenter = (props: Props) => {
  const {
    artistName,
    artistMetadata,
    fetchMetadata,
    loading,
    searchResults,
    searchSubmit,
    trackName,
    trackMetadata
  } = props;

  const searchResult = (result: Track) => (
    <div key={result.uri}>
      <div className='result'>
        <div className='image-container'>
          <img
            className='cover-img'
            src={result.album.images[0].url}
            alt={`Cover for ${result.album.name}`}
          />
          <Button
            className='result-button'
            variant='link'
            onClick={() => fetchMetadata(result.uri, result.name, result.artists[0].uri, result.artists[0].name)}
          >
            <Visibility className='select-logo-img'/>
          </Button>
        </div>
        <section className='result-text'>
          <b>
            {result.name}
          </b>
          <div>
            {result.artists[0].name} • {result.album.name}
          </div>
        </section>
      </div>
    </div>
  );

  const audioFeatureSliderData = (trackMetadata: TrackMetadataResponse): AudioFeatureSliderData[] => (
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
        value: trackMetadata.loudness / (-60),
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

  const audioFeatureSlider = (title: string, tooltip: string, value: number) => (
    <>
      <span className='attribute-title'>{title}</span>
      <Tooltip title={tooltip}>
        <InfoOutlined className={'info-icon'} fontSize='small'/>
      </Tooltip>
      <Slider disabled track={false} value={value} max={1}/>
    </>
  )

  const displayTrackMetadata = () => {
    const columnLength = 4;
    return (trackMetadata ?
      (<div>
        <h3>Audio features for <span className='name'>{trackName}</span>:</h3>
        <h5>Key: {getKeyAndMode(trackMetadata.key, trackMetadata.mode)}</h5>
        <h5>Tempo: {trackMetadata.tempo}</h5>
        <h5>Beats/measure: {trackMetadata.time_signature}</h5>
        <div className='value-sliders'>
          <div className='reduced-column'>
            {audioFeatureSliderData(trackMetadata).slice(0, columnLength).map(sliderData => audioFeatureSlider(
              sliderData.title,
              sliderData.tooltip,
              sliderData.value
            ))}
          </div>
          <div className='reduced-column'>
            {audioFeatureSliderData(trackMetadata).slice(columnLength).map(
              sliderData => audioFeatureSlider(
                sliderData.title,
                sliderData.tooltip,
                sliderData.value
              ))}
          </div>
        </div>
      </div>) : null);
  };

  const displayArtistMetadata = () => (
    artistMetadata ? (
      <div>
        <h3>Additional information on <span className='name'>{artistName}</span>:</h3>
        <h5>Genres: {displayGenres(artistMetadata.genres)}</h5>
        <h5>Followers: {artistMetadata.followers.total.toLocaleString()}</h5>
        <h5>Popularity: {artistMetadata.popularity}</h5>
      </div>
    ) : null
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
          {createSearchResultList<Track>(loading, searchResults, searchResult)}
        </div>
        <div className='column'>
          {displayTrackMetadata()}
          {(artistMetadata && trackMetadata ? <hr/> : null)}
          {displayArtistMetadata()}
        </div>
      </div>
    </div>
  );
}

export default SearchPresenter;