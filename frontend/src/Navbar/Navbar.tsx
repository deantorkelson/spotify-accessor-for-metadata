import React from 'react'
import { Link } from 'react-router-dom'
import blackLogo from '../static/black-logo.png'
import blueLogo from '../static/blue-logo.png'
import brickLogo from '../static/brick-logo.png'
import crimsonLogo from '../static/crimson-logo.png'
import orangeLogo from '../static/orange-logo.png'
import greenLogo from '../static/green-logo.png'
import './Navbar.css'

export enum LogoColor {
  BLACK,
  BLUE,
  BRICK,
  CRIMSON,
  ORANGE,
  GREEN
}

interface NavbarProps {
  logoColor: LogoColor;
}

interface NavbarState {
  logo: string;
}

export class Navbar extends React.Component<NavbarProps, NavbarState> {

  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      logo: this.getLogo(props.logoColor)
    }
  }

  getLogo(logoColor: LogoColor): string {
    switch (logoColor) {
      case LogoColor.BLUE:
        return blueLogo;
      case LogoColor.BRICK:
        return brickLogo;
      case LogoColor.CRIMSON:
        return crimsonLogo;
      case LogoColor.ORANGE:
        return orangeLogo;
      case LogoColor.GREEN:
        return greenLogo;
      default:
        return blackLogo;
    }
  }

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