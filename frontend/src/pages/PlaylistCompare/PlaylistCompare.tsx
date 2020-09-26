import React from 'react'
import blackLogo from '../../static/black-logo.png'
import './PlaylistCompare.css'

export class PlaylistCompare extends React.Component {

  render() {
    return (
      <div className='page'>
        Flow for library compare:
        1) Users search for playlists
        2) Users add playlists they want to compare to a list
        3) When they are ready, the URIs are sent to the backend
        4) The backend fetches the songs from the playlists, and finds similarities
        5) The list of common tracks is returned 
      </div>
    )
  }
}

export default PlaylistCompare;