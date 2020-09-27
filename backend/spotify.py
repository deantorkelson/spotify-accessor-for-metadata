import requests
import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

class Spotify:
    def __init__(self):
        self.get_api_config()
        credentials = SpotifyClientCredentials(client_id=self.id, client_secret=self.secret)
        self.spotify = spotipy.Spotify(client_credentials_manager=credentials)

    def get_api_config(self):
        self.id = os.environ['ID']
        self.secret = os.environ['SECRET']

    def search_tracks(self, query):
        return self.spotify.search(query, type='track')

    def search_playlists(self, query):
        return self.spotify.search(query, type='playlist')

    def fetch_track_metadata(self, track_uri):
        return self.spotify.audio_features([track_uri])

    def fetch_artist_metadata(self, artist_uri):
        return self.spotify.artist(artist_uri)

    def get_playlist_details(self, playlist_uri):
        return self.spotify.playlist(playlist_uri)

    def compare_playlists(self, uris):
        common_tracks = []
        for uri in uris:
            tracks = self.get_playlist_details(uri)["tracks"]
            song_data = tracks["items"]
            # each element of `song_data` has a "track" object
            # want to return the song_data elements that have a shared title
            #     and at least 1 item of overlap between artists
            # next steps: want to also return artists in common, not just songs
        
