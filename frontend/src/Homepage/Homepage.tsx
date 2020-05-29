import React from 'react'
import { Navbar, LogoColor } from '../Navbar/Navbar'

export class Homepage extends React.Component {

  render() {
    return (
      <div>
        <Navbar logoColor={LogoColor.GREEN}/>
        Spotify Accessor for Metadata Homepage
      </div>
    )
  }
}

export default Homepage;