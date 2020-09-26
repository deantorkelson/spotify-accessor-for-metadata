import React from 'react'
import { Link } from 'react-router-dom'
import greenLogo from '../../static/green-logo.png'
import './Navbar.css'


export class Navbar extends React.Component<{}, {}> {

  render() {
    return (
      <div className='navbar'>
        <Link className='logo' to='/'>
          <img className='logo-img' src={greenLogo} alt={'Logo for S.A.M.'}/>
          <h1 className='title'>Spotify Accessor for Metadata</h1>
        </Link>
        <ul className='links'>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/search'>SEARCH</Link>
          </li>
          <li>
            <Link to='/playlist-compare'>COMPARE PLAYLISTS</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;