import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Modal from 'react-modal';

import TextInput from 'src/components/TextInput/TextInput'
import { DEAN_URI } from 'src/constants';
import { createSearchResultList } from 'src/components/ResultList/ResultList';
import { isPlaylistLink, parseUriFromLink } from 'src/helpers/helpers';
import { Playlist } from 'src/models/Playlist'
import SpotifyApiService from 'src/utils/api/SpotifyApiService/SpotifyApiService'
import en from 'src/static/additionalStrings';
import { Nullable } from 'src/types/types';
import './PlaylistCompare.css'
import '../ResultList.css'
import { ComparePlaylistsResponse } from 'src/models/api/ComparePlaylistsResponse';

let he = require('he');

export const PlaylistCompare = () => {
  const [searchResults, setSearchResults] = useState<Nullable<Playlist[]>>(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [selectedPlaylists, setSelectedPlaylists] = useState<Nullable<Set<Playlist>>>(null);
  const [compareLoading, setCompareLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Nullable<ComparePlaylistsResponse>>(null);

  const spotifyApiService = new SpotifyApiService();

  const addPlaylist = (playlist: Playlist) => {
    let playlists = new Set(selectedPlaylists)
    playlists.add(playlist);
    setSelectedPlaylists(playlists);
  }

  const searchSubmit = (query: string) => {
    if (query) {
      // if words, search for words
      // if list of links, parse out the URIs and send to the backend
      if (isPlaylistLink(query)) {
        setSearchLoading(true);
        const playlistUri = parseUriFromLink(query);
        spotifyApiService.playlistDetails(playlistUri).then(data => {
          addPlaylist(data);
        });
        setSearchLoading(false);
      } else {
        setSearchLoading(true)
        spotifyApiService.searchPlaylists(query).then(data => {
          setSearchResults(data.playlists.items);
          setSearchLoading(false);
        });
      }
    }
  }

  const compareSubmit = (playlists: Set<Playlist>, additional: string[] = []) => {
    setCompareLoading(true);
    let playlistUris = additional;
    playlists.forEach((playlist: Playlist) => {
      playlistUris.push(playlist.uri)
    })
    playlistUris.concat(additional);
    spotifyApiService.comparePlaylists(playlistUris).then(data => {
      setCompareLoading(false);
      setModalIsOpen(true);
      setModalData(data);
    });
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const commonPlaylistData = () => {
    if (!modalData) return null;

    return (
      <>
        <Button variant={'outline-secondary'} onClick={closeModal}>
          Close
        </Button>
        <div className='modal-body'>
          <div className='column-30'>
            <div className='header'>
              Comparing these playlists:
            </div>
            {modalData.names.map((playlist: string) => (
              <div>
                {playlist}
              </div>
            ))}
          </div>
          <div className='column'>
            <div className='header'>
              Common artists:
            </div>
            <ul>
              {modalData.artists.map((artist: string) =>
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
              {modalData.songs.map((song: string) =>
                <div className='modal-li'>
                  {song}
                </div>
              )}
            </ul>
          </div>
        </div>
      </>
    )
  }

  const displaySearchResult = (result: Playlist) => (
    <div key={result.uri}>
      <Button variant='outline-secondary' onClick={() => {
        addPlaylist(result)
      }}>
        <div className='result'>
          <img className='cover-img' src={result.images[0].url} alt={`Cover for ${result.name}`} />
          <section className='result-text'>
            <div>
              <b>{result.name}</b> by {result.owner.display_name}
            </div>
            {
              result.description &&
                <div>
                    Description: {he.decode(result.description)}
                </div>
            }
            <div>
              {result.tracks.total} songs
            </div>
          </section>
        </div>
      </Button>
    </div>
  )

  const renderSelectedPlaylists = () => {
    if (!selectedPlaylists) return null;

    let playlistItems: JSX.Element[] = [];
    selectedPlaylists.forEach((playlist: Playlist) => {
      playlistItems.push(displaySearchResult(playlist));
    });
    return playlistItems;
  }

  const displaySelectedPlaylistsColumn = () => {
    if (!selectedPlaylists) return null;

    return (<>
      <div className='header'>
        Comparing these playlists:
      </div>
      {renderSelectedPlaylists()}
      {compareLoading ? <Spinner animation='border'/> : <div className="buttons">
        <Button
          className="submit"
          type="button"
          variant="success"
          onClick={() => compareSubmit(selectedPlaylists)}
        >
          Submit
        </Button>
        <Button
          className="submit"
          type="button"
          variant="secondary"
          onClick={() => setSelectedPlaylists(new Set())}
        >
          Clear
        </Button>
        <Button
          className="submit"
          type="button"
          variant="danger"
          onClick={() => compareSubmit(selectedPlaylists, [DEAN_URI])}
        >
          Compare to Dean's music
        </Button>
      </div>}
    </>)
  }

  const renderTooltip = (props: any) => (
    <Tooltip {...props}>
    {en.playlistCompare.tooltip}
    </Tooltip>
  )

  return <div className='page'>
    <div className='header'>
      Enter the name of the playlist to search for, <br/>or a&nbsp;
      <OverlayTrigger
        placement="right"
        delay={{show: 100, hide: 400}}
        overlay={renderTooltip}
      >
        <span className="uri-tooltip">
          link to a playlist:
        </span>
      </OverlayTrigger>
    </div>
    <TextInput
      placeholder={en.playlistCompare.placeholder}
      submit={searchSubmit}
    />
    <div className='main-content'>
      <div className='column'>
        {createSearchResultList<Playlist>(searchLoading, searchResults, displaySearchResult)}
      </div>
      <div className='column'>
        {displaySelectedPlaylistsColumn()}
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              margin: 'auto',
              width: '75%'
            },
          }}
        >
          {commonPlaylistData()}
        </Modal>
      </div>
    </div>
  </div>
}

export default PlaylistCompare;