import 'isomorphic-fetch';
import PlaylistsPage from './playlists-page';
import { Playlist } from './types';

import fs from 'fs-extra';

class SpotifyPlaylist {
  playlistsPage = new PlaylistsPage();

  async get(): Promise<Playlist[]> {
    return this.playlistsPage.getPlaylistList();
  }
}

export default SpotifyPlaylist;
