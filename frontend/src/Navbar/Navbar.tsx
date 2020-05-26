import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export class Navbar extends React.Component {

  render() {
    return (
      <div className='navbar'>
        <span className='title'>Spotify Accessor for Metadata</span>
        <ul className='links'>
          <li>
            <Link to='/search'>Search</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;