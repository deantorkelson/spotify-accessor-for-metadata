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

    def __str__(self):
        return 'id::' + self.id + ' secret::' + self.secret

def main():
    spotify = Spotify()
    search_result = spotify.search("The Killers")
    print(search_result)

if __name__ == '__main__':
    main()