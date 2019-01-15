import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

let Spotify = require('spotify-web-api-js');
let s = new Spotify();
let spotifyApi = new SpotifyWebApi();
let access_token = "NOT SET";

class SongSearch extends React.Component {
    constructor(props) {
        super(props);
        access_token = props.token;
        spotifyApi.setAccessToken(access_token);
        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        alert(this.state.value);
        spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
            if (err) console.error(err);
            else console.log('Artist albums', data);
        });

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <h2> Songsearch token: {this.props.token} </h2>
                <input type="submit" value="Submit"/>

            </form>);
    }
}

export default SongSearch;
