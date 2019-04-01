export interface Artist {
  name: string;
}

export interface Album {
  name: string;
}

export interface Track {
  name: string;
  artist: Artist;
  album: Album;
}

export interface Playlist {
  name: string;
  cover: string;
  tracks: Track[];
}
