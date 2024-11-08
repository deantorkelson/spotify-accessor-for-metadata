import json
import requests
from random import choice
from spotify import Spotify
from flask import Flask, request
from flask_cors import CORS, cross_origin
application = Flask(__name__)
cors = CORS(application)
application.config['CORS_HEADERS'] = 'Content-Type'
spotify = Spotify()


@application.route('/')
@application.route('/status')
def status():
    return "ok"


@application.route('/random/book_quote')
def random_quote():
    quote = requests.get(url='https://api.quotable.io/random',  verify=False).json()
    return {
        "quote": quote["content"],
        "author": quote["author"]
    }


@application.route('/random/rubin')
def random_rubin():
    quotes_file = open('./rubin.json')
    quotes = json.load(quotes_file)
    return {"quote": choice(quotes["quotes"])}


@application.route('/search/tracks')
@cross_origin()
def search_tracks():
    args = request.args
    search_query = args.get("q")
    return spotify.search_tracks(search_query)


@application.route('/search/playlists')
@cross_origin()
def search_playlists():
    args = request.args
    search_query = args.get("q")
    return spotify.search_playlists(search_query)


@application.route('/playlist/<string:playlist_uri>/')
@cross_origin()
def playlist_details(playlist_uri):
    return spotify.get_playlist_details(playlist_uri)


@application.route('/track/<string:track_uri>/')
@cross_origin()
def fetch_track_metadata(track_uri):
    return spotify.fetch_track_metadata(track_uri)[0]


@application.route('/artist/<string:artist_uri>/')
@cross_origin()
def fetch_artist_metadata(artist_uri):
    return spotify.fetch_artist_metadata(artist_uri)


@application.route('/playlists/compare', methods=['POST'])
async def compare_playlists():
    uris = request.get_json()["uris"]
    return await spotify.compare_playlists(uris)


if __name__ == "__main__":
    application.debug = True
    application.run()
