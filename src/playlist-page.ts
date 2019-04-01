import Page from './page';
import { Playlist } from './types';

class PlaylistPage extends Page {
  constructor(url: string) {
    super(`https://open.spotify.com${url}`);
  }

  private extractCoverUrl(style: string): string {
    return style.split(')')[0].split('//')[1];
  }

  async get(): Promise<Playlist> {
    const imageElement = await this.getElement('.cover-art-image');
    const elements = await this.getElements('.track-name-wrapper');

    return {
      name: '',
      cover: this.extractCoverUrl(imageElement.attr('style')),
      tracks: elements.map(elem => {
        return {
          name: this.getText(elem, '.track-name'),
          artist: {
            name: this.getText(elem, '.tracklist-row__artist-name-link')
          },
          album: {
            name: this.getText(elem, '.tracklist-row__album-name-link')
          },
        }
      }),
    }
  }
}

export default PlaylistPage;
