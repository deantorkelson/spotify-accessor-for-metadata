import React from 'react'
import SpotifyApiService from '../SpotifyApiService/SpotifyApiService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


let searchQuery: string = '';
let spotifyApiService: SpotifyApiService = new SpotifyApiService();

function searchSubmit(value: any) {
  // console.log(searchQuery);
  console.log(spotifyApiService.search(searchQuery).then(data => {
    console.log(data)
  }));
}

function Search() {
  return (
    <div>
        Enter the name of the artist to search for:<br/>
        <Form.Control
          type="text"
          placeholder="Enter an artist name..."
          onChange={(value: any) =>
            searchQuery = value.target.value
          }
        />
        <Button variant="primary" type="submit" onClick={(event: any) => searchSubmit(event)}> 
          Submit
        </Button>

    </div>
  )
}

export default Search;