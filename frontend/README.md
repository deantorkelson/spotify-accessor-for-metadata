TODO: Info about this project

Sample data is used in place of live data where constant repeated testing is necessary and the liveness of the data itself isn't an issue (i.e. CSS). This way, the application doesn't get rate-limited.
Example: replace the `fetch` in `SpotifyApiService` with `return new Promise((resolve) => resolve(SampleTrackSearch));`.