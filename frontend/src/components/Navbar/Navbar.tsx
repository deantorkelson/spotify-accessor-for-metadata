import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from 'src/constants';
import greenLogo from 'src/static/green-logo.png'
import './Navbar.css'


export class Navbar extends React.Component<{}, {}> {

  render() {
    return (
      <div className='navbar'>
        <Link className='logo' to={ROUTES.HOME}>
          <img className='logo-img' src={greenLogo} alt={'Logo for S.A.M.'}/>
          <h1 className='title'>Spotify Accessor for Metadata</h1>
        </Link>
        <ul className='links'>
          <li>
            <Link to={ROUTES.HOME}>HOME</Link>
          </li>
          <li>
            <Link to={ROUTES.SEARCH}>SEARCH</Link>
          </li>
          <li>
            <Link to={ROUTES.COMPARE}>COMPARE PLAYLISTS</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;