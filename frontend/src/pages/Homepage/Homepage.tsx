import React from 'react'

import blackLogo from 'src/static/black-logo.png'
import packageJson from '../../../package.json'
import './Homepage.css'

const Homepage = () => {
  const BASE_URL = 'https://github.com/deantorkelson/spotify-accessor-for-metadata'

  const getReadmeLink = () => {
    let readmeLink = `${BASE_URL}/blob/master/README.md`;
    return <a className='readme' href={readmeLink}>readme</a>;
  }

  const getGithubIssuesLink = () => {
    let githubIssuesLink = `${BASE_URL}/issues`;
    return <a className='readme' href={githubIssuesLink}>Github Issues</a>
  }

  return (
    <div className='page'>
      <div>
        <h1><br /><br />Welcome to the Spotify Accessor for Metadata v{packageJson.version}!</h1>
        <div className='main-text'>
          <h3>
            This website was designed to allow you to do more with the metadata stored by Spotify. It's still in development, so please refer to the {getReadmeLink()} or {getGithubIssuesLink()} to see what's in store!
          </h3>
        </div>
      </div>
      <img className='main-logo' src={blackLogo} alt='Spotify Accessor for Metadata logo' />
    </div>
  )
}

export default Homepage;