import Page from './page';
import PlaylistPage from './playlist-page';
import { Playlist, SpotifyJSON } from './types';

class PlaylistsPage extends Page {
  constructor() {
    super('https://open.spotify.com/browse/featured');
  }

  async getPlaylistList(): Promise<Playlist[]> {
    const spotifyJson = await this.getSpotifyEntityJSON<SpotifyJSON>();

    return Promise.all(
      spotifyJson.content.items
        .reduce((acc, item) => [...acc, ...item.content.items], [] as any[])
        .map(({ id }) => id)
        .filter(Boolean)
        .map(id => new PlaylistPage(`/playlist/${id}`).get()),
    );
  }
}

export default PlaylistsPage;
