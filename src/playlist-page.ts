import Page from './page';
import { Playlist, SpotifyPlaylistJSON } from './types';

class PlaylistPage extends Page {
  constructor(url: string) {
    super(`https://open.spotify.com${url}`);
  }

  async get(): Promise<Playlist> {
    const { name, description, tracks, images } = await this.getSpotifyEntityJSON<
      SpotifyPlaylistJSON
    >();

    return {
      name,
      description,
      cover: images,
      tracks: tracks.items.map(({ track }) => ({
        name: track.name,
        href: track.href,
        artists: track.artists.map(({ name }) => ({
          name,
        })),
        album: {
          name: track.album.name,
          cover: track.album.images,
          date: track.album.release_date,
        },
      })),
    };
  }
}

export default PlaylistPage;
