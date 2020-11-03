import requests
import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

class Spotify:
    def __init__(self):
        self.id = os.environ['ID']
        self.secret = os.environ['SECRET']
        credentials = SpotifyClientCredentials(client_id=self.id, client_secret=self.secret)
        self.spotify = spotipy.Spotify(client_credentials_manager=credentials)

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
        artist_sets = []
        # for each uri/playlist
        #     for each song
        #         add all artist names to local artist set
        # return intersection of all sets
        for uri in uris:
            response = self.get_playlist_details(uri)["tracks"]
            artists = set()
            for song in response["items"]:
                for artist in song["track"]["artists"]:
                    artists.add(artist["name"])
            artist_sets.append(artists)
        return set.intersection(*artist_sets)
