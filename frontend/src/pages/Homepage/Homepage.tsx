import React from 'react'
import blackLogo from '../../static/black-logo.png'
import './Homepage.css'

export class Homepage extends React.Component {

  getReadmeLink(): JSX.Element {
    let readmeLink = 'https://github.com/deantorkelson/spotify-accessor-for-metadata/blob/master/frontend/README.md';
    return <a className='readme' href={readmeLink}>readme</a>
  }

  getGithubIssuesLink(): JSX.Element {
    let githubIssuesLink = 'https://github.com/deantorkelson/spotify-accessor-for-metadata/issues';
    return <a className='readme' href={githubIssuesLink}>Github Issues</a>
  }

  render() {
    return (
      <div className='page'>
        <div>
          <h1><br /><br />Welcome to the Spotify Accessor for Metadata!</h1>
          <div className='main-text'>
            <h3>
              This website was designed to allow you to do more with the metadata stored by Spotify. It's still in development, so please refer to the {this.getReadmeLink()} or {this.getGithubIssuesLink()} to see what's in store!
            </h3>
          </div>
        </div>
        <img className='main-logo' src={blackLogo} alt='Spotify Accessor for Metadata logo' />
      </div>
    )
  }
}

export default Homepage;