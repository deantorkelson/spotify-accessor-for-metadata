import json
from spotify import Spotify
from flask import Flask, request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
spotify = Spotify()


@app.route('/search/tracks/<string:search_query>/')
@cross_origin()
def search_tracks(search_query):
    return spotify.search_tracks(search_query)


@app.route('/search/playlists/<string:search_query>/')
@cross_origin()
def search_playlists(search_query):
    return spotify.search_playlists(search_query)


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
    result = spotify.compare_playlists(uris)
    print(result)
    return result


if __name__ == '__main__':
    app.run()