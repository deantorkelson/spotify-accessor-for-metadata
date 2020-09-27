import React from 'react'
import '../ResultList.css'
import './PlaylistCompare.css'

export class PlaylistCompare extends React.Component {

  render() {
    return (
      <div className='page'>
        Flow for library compare: <br/>
        1) Users search for playlists<br/>
        2) Users add playlists they want to compare to a list<br/>
        3) When they are ready, the URIs are sent to the backend<br/>
        4) The backend fetches the songs from the playlists, and finds similarities<br/>
        5) The list of common tracks is returned <br/>
      </div>
    )
  }
}

export default PlaylistCompare;