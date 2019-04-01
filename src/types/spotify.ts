export interface SpotifyImage {
  height?: number;
  width?: number;
  url: string;
}

export interface SpotifyExternalsUrl {
  spotify: string;
}

export interface SpotifyUser {
  external_urls: SpotifyExternalsUrl;
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface SpotifyAlbum {
  album_type: string;
  artists: SpotifyArtist[];
  external_urls: any[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface SpotifyArtist extends SpotifyUser {
  name: string;
}

export interface SpotifyTrack {
  added_at: string;
  added_by: SpotifyUser;
  is_local: boolean;
  primary_color: string;
  track: {
    album: SpotifyAlbum;
    artists: SpotifyArtist[];
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: boolean;
    external_ids: { isrc: string };
    external_urls: SpotifyExternalsUrl;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track: boolean;
    track_number: number;
    type: string;
    uri: string;
  };
  video_thumbnail: { url?: string };
}

export interface SpotifyPlaylistJSON {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  followers: { href?: string; total: number };
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyUser;
  primary_color?: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    items: SpotifyTrack[];
    limit: number;
    offset: number;
    total: number;
  };
  type: string;
  uri: string;
  etag: string;
  'last-checked-timestamp': number;
}

export interface SpotifyPlaylistCarousel {
  content: {
    items: Array<{ content: { items: Array<{ id: string }> } }>;
  };
}

export interface SpotifyJSON {
  content: {
    href: string;
    items: SpotifyPlaylistCarousel[];
    limit: number;
    offset: number;
    total: number;
  };
  custom_fields: any[];
  external_urls?: SpotifyExternalsUrl;
  href: string;
  id: string;
  images: any[];
  name: string;
  rendering: string;
  tag_line?: any;
  type: string;
  etag: string;
  'last-checked-timestamp': number;
  uri: string;
}
