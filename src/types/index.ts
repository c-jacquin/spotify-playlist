import { SpotifyImage } from './spotify';

export interface Artist {
  name: string;
}

export interface Album {
  name: string;
  cover: SpotifyImage[];
}

export interface Track {
  name: string;
  href: string;
  artists: Artist[];
  album: Album;
}

export interface Playlist {
  name: string;
  description: string;
  cover: SpotifyImage[];
  tracks: Track[];
}

export * from './spotify';
