import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Modal from 'react-modal';

import TextInput from 'src/components/TextInput/TextInput'
import { isUriList } from 'src/helpers/helpers';
import { Playlist } from 'src/models/Playlist'
import SpotifyApiService from 'src/SpotifyApiService/SpotifyApiService'
import en from 'src/static/additionalStrings';
import './PlaylistCompare.css'
import '../ResultList.css'

let he = require('he');

export const PlaylistCompare = () => {
  const [searchResults, setSearchResults] = useState([] as Playlist[]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [selectedPlaylists, setSelectedPlaylists] = useState(new Set() as Set<Playlist>);
  const [compareLoading, setCompareLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const spotifyApiService = new SpotifyApiService();

  const searchSubmit = (query: string) => {
    if (query) {
      if (isUriList(query)) {
        setCompareLoading(true);
        const playlistUris = query.split(', ')
        spotifyApiService.comparePlaylists(playlistUris).then(data => {
          setCompareLoading(false);
          setModalIsOpen(true);
          setModalData(data);
        });
      } else {
        setSearchLoading(true)
        spotifyApiService.searchPlaylists(query).then(data => {
          setSearchResults(data.playlists.items);
          setSearchLoading(false);
        });
      }
    }
  }

  const compareSubmit = (playlists: Set<Playlist>) => {
    setCompareLoading(true);
    let playlistUris: string[] = [];
    playlists.forEach((playlist: Playlist) => {
      playlistUris.push(playlist.uri)
    })
    spotifyApiService.comparePlaylists(playlistUris).then(data => {
      setCompareLoading(false);
      setModalIsOpen(true);
      setModalData(data);
    });
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const commonPlaylistData = () => (
    !modalData
    ? <></>
    : <>
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

  const createSearchResultList = () => (
    searchResults.length === 0 && !searchLoading
    ? <div key='-1'>No search results found.</div>
    : <>
        {searchLoading ?
          <div>
            <Spinner animation='border' />
            <div>
              *note that the first search might take extra time while the Heroku dyno spins up.
            </div>
          </div>
          :
          <div className='result-list'>
            {searchResults.map((playlist: Playlist) => searchResult(playlist,
              () => {
                let playlists = new Set(selectedPlaylists)
                playlists.add(playlist);
                setSelectedPlaylists(playlists);
              }
            ))}
          </div>}
      </>
  )

  const searchResult = (result: Playlist, onClickFn: any) => (
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
  )

  const getPlaylistList = () => {
    let playlistItems: JSX.Element[] = [];
    selectedPlaylists.forEach((playlist: Playlist) => {
      playlistItems.push(searchResult(playlist,
        () => {
          let playlists = new Set(selectedPlaylists)
          playlists.delete(playlist);
          setSelectedPlaylists(playlists)
        }));
    });
    return playlistItems;
  }

  const displaySelectedPlaylists = () => (
    selectedPlaylists.size === 0
    ? <div>Please select some playlists to compare.</div>
    : <div>
        {getPlaylistList()}
        {compareLoading
          ?
          <div>
            <Spinner animation='border' />
          </div>
          :
          <Button className='submit' type="button" variant="outline-success"
            onClick={() =>
              compareSubmit(selectedPlaylists)
            }>
            Submit
          </Button>
        }
      </div>
  )

  const renderTooltip = (props: any) => (
    <Tooltip {...props}>
      {"These take the form \"spotify:playlist:<something>\" or \"spotify/playlist/<something>\""}
    </Tooltip>
  )

  return <div className='page'>
    <div className='header'>
      Enter the name of the playlist to search for, <br/>or a comma-separated list of&nbsp;
      <OverlayTrigger
        placement="right"
        delay={{ show: 100, hide: 400 }}
        overlay={renderTooltip}
      >
        <span className="uri-tooltip">
          Spotify URIs:
        </span>
      </OverlayTrigger>
    </div>
    <TextInput 
      placeholder={en.playlistCompare.placeholder}
      submit={searchSubmit} 
    />
    <div className='main-content'>
      <div className='column'>
        {createSearchResultList()}
      </div>
      <div className='column'>
        <div className='header'>
          Comparing these playlists:
        </div>
        {displaySelectedPlaylists()}
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