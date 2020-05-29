import requests
import json
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

class Spotify:
    def __init__(self):
        self.get_api_config()
        credentials = SpotifyClientCredentials(client_id=self.id, client_secret=self.secret)
        self.spotify = spotipy.Spotify(client_credentials_manager=credentials)

    def get_api_config(self):
        with open('../config.json') as config:
            data = json.load(config)
            self.id = data['id']
            self.secret = data['secret']

    def search(self, name):
        return self.spotify.search(name)

    def fetch_track_metadata(self, track_uri):
        return self.spotify.audio_features([track_uri])

    def __str__(self):
        return 'id::' + self.id + ' secret::' + self.secret
