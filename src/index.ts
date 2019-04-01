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

(async () => {
  const playlists = await new SpotifyPlaylist().get()

  playlists.forEach(({ cover, name, tracks }) => {
    console.log('Playlist => ', name);
    console.log('cover ', cover);
    console.log('tracks ', tracks);
  });
})()
