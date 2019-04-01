import 'isomorphic-fetch';
import PlaylistsPage from './playlists-page';
import { Playlist } from './types';

class SpotifyPlaylist {
  playlistsPage = new PlaylistsPage();

  async get(): Promise<Playlist[]> {
    return this.playlistsPage.getPlaylistList();
  }
}

export default SpotifyPlaylist;
