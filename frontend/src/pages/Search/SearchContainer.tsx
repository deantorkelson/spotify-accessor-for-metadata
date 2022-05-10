import React, {useState} from 'react';

import { ArtistMetadataResponse } from 'src/models/api/ArtistMetadataResponse';
import { TrackMetadataResponse } from 'src/models/api/TrackMetadataResponse';
import { Track } from 'src/models/Track';
import SearchPresenter from 'src/pages/Search/SearchPresenter';
import SpotifyApiService from 'src/utils/api/SpotifyApiService/SpotifyApiService';
import en from "src/static/additionalStrings";
import './Search.css';
import '../ResultList.css';

export const SearchContainer = () => {
  const [artistName, setArtistName] = useState('');
  const [artistMetadata, setArtistMetadata] = useState({} as ArtistMetadataResponse);
  const [searchResults, setSearchResults] = useState([] as Track[]);
  const [loading, setLoading] = useState(false);
  const [trackName, setTrackName] = useState('');
  const [trackMetadata, setTrackMetadata] = useState({} as TrackMetadataResponse);

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

  const fetchMetadata = (trackUri: string, trackName: string, artistUri: string, artistName: string) => {
    fetchTrackMetadata(trackUri, trackName);
    fetchArtistMetadata(artistUri, artistName);
  }

  const fetchTrackMetadata = (trackUri: string, trackName: string) => {
    spotifyApiService.fetchTrackMetadata(trackUri).then(data => {
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

  return (
    <SearchPresenter
      artistName={artistName}
      artistMetadata={artistMetadata}
      audioFeatureSliderData={createAudioFeatureSliderData(trackMetadata)}
      fetchMetadata={fetchMetadata}
      loading={loading}
      searchResults={searchResults}
      searchSubmit={searchSubmit}
      trackName={trackName}
      trackMetadata={trackMetadata}
    />
  )
}

export default SearchContainer;
