const spotifyUriRegex =
  /(spotify[/:]playlist[/:]([a-zA-Z0-9]+)[,\s]+)+(spotify[/:]playlist[/:]([a-zA-Z0-9]+))/;

export const isUriList = (str: string): boolean => spotifyUriRegex.test(str);

export const parseUriFromLink = (link: string): string => {
  const withoutQueryParams = link.split("?")[0];
  const playlistId = withoutQueryParams.split("/").pop();
  return `spotify:playlist:${playlistId}`;
};

export const parseUriListFromLinks = (query: string): string[] => {
  const links = query.split(",");
  return links.map((link) => parseUriFromLink(link));
};

export const isPlaylistLink = (query: string) => {
  return query.includes("open.spotify.com/playlist");
};
