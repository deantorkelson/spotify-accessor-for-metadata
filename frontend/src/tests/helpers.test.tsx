import React from 'react';
import { isUriList } from 'src/helpers/helpers'

test('valid: list of colon Spotify URIs', () => {
  const uris = "spotify:playlist:0iAeUtwINlqfjwAyQ4ykur, spotify:playlist:0iAeUtwINlqfjwAyQ4ykur"
  expect(isUriList(uris)).toEqual(true);
});

test('valid: long list of colon Spotify URIs', () => {
  const uris = "spotify:playlist:0iAeUtwINlqfjwAyQ4ykur, spotify:playlist:0iAeUtwINlqfjwAyQ4ykur,spotify:playlist:0iAeUtwINlqfjwAyQ4ykur, spotify:playlist:0iAeUtwINlqfjwAyQ4ykur"
  expect(isUriList(uris)).toEqual(true);
});

test('valid: list of forward slash Spotify URIs', () => {
  const uris = "spotify/playlist/0iAeUtwINlqfjwAyQ4ykur, spotify/playlist/0iAeUtwINlqfjwAyQ4ykur"
  expect(isUriList(uris)).toEqual(true);
});

test('valid: space separator', () => {
  const uris = "spotify/playlist/0iAeUtwINlqfjwAyQ4ykur spotify:playlist:0iAeUtwINlqfjwAyQ4ykur"
  expect(isUriList(uris)).toEqual(true);
});

test('invalid: empty string', () => {
  const uris = ""
  expect(isUriList(uris)).toEqual(false);
});

test('invalid: single element', () => {
  const uris = "spotify:playlist:0iAeUtwINlqfjwAyQ4ykur"
  expect(isUriList(uris)).toEqual(false);
});

test('invalid: too short', () => {
  const uris = "spotify/playlist/0iAeUtwINlqfjwAyQ4ykur, spotify:0iAeUtwINlqfjwAyQ4ykur"
  expect(isUriList(uris)).toEqual(false);
});

test('invalid: missing type', () => {
  const uris = "spotify/playlist/0iAeUtwINlqfjwAyQ4ykur playlist:0iAeUtwINlqfjwAyQ4ykur"
  expect(isUriList(uris)).toEqual(false);
});
