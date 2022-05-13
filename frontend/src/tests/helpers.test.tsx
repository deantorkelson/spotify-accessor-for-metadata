import React from 'react';
import { isUriList, parseUriFromLink } from '../helpers/helpers'

describe('isUriList', () => {
  test('valid: list of colon Spotify URIs', () => {
    const uris = "spotify:playlist:0iAeUtwINlqfjwAyQ4ykur, spotify:playlist:0iAeUtwINlqfjwAyQ4ykur";
    expect(isUriList(uris)).toEqual(true);
  });

  test('valid: long list of colon Spotify URIs', () => {
    const uris = "spotify:playlist:0iAeUtwINlqfjwAyQ4ykur, spotify:playlist:0iAeUtwINlqfjwAyQ4ykur,spotify:playlist:0iAeUtwINlqfjwAyQ4ykur, spotify:playlist:0iAeUtwINlqfjwAyQ4ykur";
    expect(isUriList(uris)).toEqual(true);
  });

  test('valid: list of forward slash Spotify URIs', () => {
    const uris = "spotify/playlist/0iAeUtwINlqfjwAyQ4ykur, spotify/playlist/0iAeUtwINlqfjwAyQ4ykur";
    expect(isUriList(uris)).toEqual(true);
  });

  test('valid: space separator', () => {
    const uris = "spotify/playlist/0iAeUtwINlqfjwAyQ4ykur spotify:playlist:0iAeUtwINlqfjwAyQ4ykur";
    expect(isUriList(uris)).toEqual(true);
  });

  test('invalid: empty string', () => {
    const uris = "";
    expect(isUriList(uris)).toEqual(false);
  });

  test('invalid: single element', () => {
    const uris = "spotify:playlist:0iAeUtwINlqfjwAyQ4ykur";
    expect(isUriList(uris)).toEqual(false);
  });

  test('invalid: too short', () => {
    const uris = "spotify/playlist/0iAeUtwINlqfjwAyQ4ykur, spotify:0iAeUtwINlqfjwAyQ4ykur";
    expect(isUriList(uris)).toEqual(false);
  });

  test('invalid: missing type', () => {
    const uris = "spotify/playlist/0iAeUtwINlqfjwAyQ4ykur playlist:0iAeUtwINlqfjwAyQ4ykur";
    expect(isUriList(uris)).toEqual(false);
  });
});

describe('parseUriFromLink', () => {
  test('should get URI from playlist link', () => {
    const link = 'https://open.spotify.com/playlist/5YfQFj40rrMiUp5hutvfH6?si=9f2a8e502276493b';
    const expected = 'spotify:playlist:5YfQFj40rrMiUp5hutvfH6';
    expect(parseUriFromLink(link)).toEqual(expected);
  })
});

