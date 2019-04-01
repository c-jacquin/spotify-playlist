import Page from './page';
import PlaylistPage from './playlist-page';
import { Playlist } from './types';

class PlaylistsPage extends Page {
  constructor() {
    super('https://open.spotify.com/browse/featured');
  }

  async getPlaylistList(): Promise<Playlist[]> {
    const elements = await this.getElements('a.cover.entity-type-playlist');

    return Promise.all(elements.map(elem => new PlaylistPage(elem.attr('href')).get()));
  }
}

export default PlaylistsPage;
