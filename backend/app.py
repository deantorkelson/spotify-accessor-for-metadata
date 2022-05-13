import json
from spotify import Spotify
from flask import Flask, request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
spotify = Spotify()


@app.route('/search/tracks')
@cross_origin()
def search_tracks():
    args = request.args
    search_query = args.get("q")
    return spotify.search_tracks(search_query)


@app.route('/search/playlists')
@cross_origin()
def search_playlists():
    args = request.args
    search_query = args.get("q")
    return spotify.search_playlists(search_query)

@app.route('/playlistDetails/<string:playlist_uri>/')
@cross_origin()
def playlist_details(playlist_uri):
    return spotify.get_playlist_details(playlist_uri)

@app.route('/fetchTrackMetadata/<string:track_uri>/')
@cross_origin()
def fetch_track_metadata(track_uri):
    return spotify.fetch_track_metadata(track_uri)[0]


@app.route('/fetchArtistMetadata/<string:artist_uri>/')
@cross_origin()
def fetch_artist_metadata(artist_uri):
    return spotify.fetch_artist_metadata(artist_uri)


@app.route('/comparePlaylists', methods=['POST'])
@cross_origin()
def compare_playlists():
    uris = request.get_json()["uris"]
    return spotify.compare_playlists(uris)


if __name__ == '__main__':
    app.run()
