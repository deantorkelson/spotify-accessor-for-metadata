const spotifyUriRegex = /(spotify[/:]playlist[/:]([a-zA-Z0-9]+)[,\s]+)+(spotify[/:]playlist[/:]([a-zA-Z0-9]+))/

export const isUriList = (str: string) => (
  spotifyUriRegex.test(str)
)