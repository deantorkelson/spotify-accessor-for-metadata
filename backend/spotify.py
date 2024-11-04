import os
import asyncio

import spotipy
from spotipy.oauth2 import SpotifyClientCredentials


class Spotify:
    def __init__(self):
        try:
            self.id = os.environ['SPOTIFY_APP_ID']
        except KeyError:
            print('Failed to get Spotify app ID')
            self.id = ''
        try:
            self.secret = os.environ['SPOTIFY_APP_SECRET']
        except KeyError:
            print('Failed to get Spotify API Secret')
            self.secret = ''
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

    def get_playlist_details(self, playlist_uri):
        return self.spotify.playlist(playlist_uri)

    async def get_playlist_tracks(self, playlist_uri):
        # TODO: can this be sped up by only specifying certain fields?
        #  spotipy impl seems buggy wrt `next` after filtering fields
        response = self.spotify.playlist(playlist_uri)
        tracks = response['tracks']
        items = tracks['items']
        while tracks['next']:
            tracks = self.spotify.next(tracks)
            items.extend(tracks['items'])
        return {
            "name": f"{response['name']}, curated by {response['owner']['display_name']}",
            "items": items
        }

    async def compare_playlists(self, uris):
        playlists_async = [self.get_playlist_tracks(uri) for uri in uris]
        playlists = await asyncio.gather(*playlists_async)
        # Fetch playlists
        artist_sets = []
        song_sets = []
        playlist_names = []
        for playlist in playlists:
            playlist_names.append(playlist['name'])
            items = playlist['items']
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
            "names": playlist_names,
            "artists": list(set.intersection(*artist_sets)),
            "songs": list(set.intersection(*song_sets))
        }
