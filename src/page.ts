class Page {
  private markup: string;

  constructor(private readonly url: string) {}

  private async fetchMarkup(): Promise<void> {
    const res = await fetch(this.url);

    this.markup = await res.text();
  }

  protected async getSpotifyEntityJSON<T>(): Promise<T> {
    if (!this.markup) {
      await this.fetchMarkup();
    }
    return JSON.parse(
      this.markup
        .split('Spotify.Entity = ')[1]
        .split('</script>')[0]
        .replace(';', ''),
    ) as T;
  }
}

export default Page;
