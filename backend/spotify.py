import requests
import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials


class Spotify:
    def __init__(self):
        self.id = os.environ['ID']
        self.secret = os.environ['SECRET']
        credentials = SpotifyClientCredentials(
            client_id=self.id, client_secret=self.secret)
        self.spotify = spotipy.Spotify(client_credentials_manager=credentials)

    def search_tracks(self, query):
        return self.spotify.search(query, type='track')

    def search_playlists(self, query):
        return self.spotify.search(query, type='playlist')

    def fetch_track_metadata(self, track_uri):
        return self.spotify.audio_features([track_uri])

    def fetch_artist_metadata(self, artist_uri):
        return self.spotify.artist(artist_uri)

    def get_playlist_data(self, playlist_uri):
        response = self.spotify.playlist(playlist_uri)['tracks']
        items = response['items']
        while response['next']:
            response = self.spotify.next(response)
            items.extend(response['items'])
        return items

    def compare_playlists(self, uris):
        artist_sets = []
        song_sets = []
        for uri in uris:
            items = self.get_playlist_data(uri)
            artists = set()
            songs = set()
            for item in items:
                song = item["track"]
                songs.add(f"{song['name']} - {song['artists'][0]['name']}")
                for artist in song["artists"]:
                    artists.add(artist["name"])
            artist_sets.append(artists)
            song_sets.append(songs)
        return {
            "artists": list(set.intersection(*artist_sets)),
            "songs": list(set.intersection(*song_sets))
        }
