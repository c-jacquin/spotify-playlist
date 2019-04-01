import cheerio from 'cheerio';

class Page {
  private markup: string;
  private $: CheerioStatic;

  constructor(private readonly url: string) {}

  private async fetchMarkup(): Promise<void> {
    const res = await fetch(this.url);

    this.markup = await res.text();
    this.$ = cheerio.load(this.markup);
  }

  protected async getElement(selector: string): Promise<Cheerio> {
    if (!this.markup) {
      await this.fetchMarkup();
    }

    return this.$(selector);
  }

  protected async getElements(selector: string): Promise<Cheerio[]> {
    if (!this.markup) {
      await this.fetchMarkup();
    }

    return this.$(selector).toArray().map(elem => this.$(elem));
  }

  protected getText(elem: Cheerio, selector?: string): string {
    if (selector) {
      return this.$(selector, elem).text();
    } else {
      return this.$(elem).text();
    }
  }
}

export default Page;
