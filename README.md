# Welcome to Spotify Accessor for Metadata (S.A.M.)!

This project was created to allow users and listeners to interact with the metadata provided by Spotify in richer ways than are currently available.
The website is live here: https://deantorkelson.github.io/spotify-accessor-for-metadata/

## Current Features

### Search
- Search for a song and view metadata on the song and its artist.

## Planned user features
- See [issues](https://github.com/deantorkelson/spotify-accessor-for-metadata/issues) for what's in store!

### Playlist/Library Compare
- Users will be able to find common artists/songs between two playlists, allowing them to find music tastes they have in common with other people.

### Vibe Match
- The user will be given a set of filter fields where they can select track metadata (key, tempo, musical attributes) and SAM will identify songs in their playlists that match the data.

### Create Playlists
- The user will be able to create new playlists based off metadata (for example, create a new playlist comprised of only songs from their 'Liked' library that are above 150 BPM)

### View My Listening Habits
- Display to the user their favorite tracks and artists

## Notes about this project
Sample data:
  - Sample Data: is used in place of live data where constant repeated testing is necessary and the liveness of the data itself isn't an issue (i.e. CSS). This way, the application doesn't get rate-limited.  
     Example: replace the `fetch` in `SpotifyApiService` with `return new Promise((resolve) => resolve(SampleTrackSearch));`.
   
## Reference
- [Spotify API docs](https://developer.spotify.com/documentation/web-api/reference/)
- [Spotipy Docs](https://spotipy.readthedocs.io/en/2.12.0/)

