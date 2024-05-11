import React, {useState} from 'react';

import { ArtistMetadataResponse } from 'src/models/api/ArtistMetadataResponse';
import { TrackMetadataResponse } from 'src/models/api/TrackMetadataResponse';
import { Track } from 'src/models/Track';
import SearchPresenter from 'src/pages/Search/SearchPresenter';
import SpotifyApiService from 'src/utils/api/SpotifyApiService/SpotifyApiService';
import en from "src/static/additionalStrings";
import './Search.css';
import '../ResultList.css';
import { Nullable } from 'src/types/types';

export const SearchContainer = () => {
  const [artistName, setArtistName] = useState('');
  const [artistMetadata, setArtistMetadata] = useState<Nullable<ArtistMetadataResponse>>(null);
  const [searchResults, setSearchResults] = useState<Nullable<Track[]>>(null);
  const [loading, setLoading] = useState(false);
  const [trackName, setTrackName] = useState('');
  const [trackMetadata, setTrackMetadata] = useState<Nullable<TrackMetadataResponse>>(null);

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

  return (
    <SearchPresenter
      artistName={artistName}
      artistMetadata={artistMetadata}
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
