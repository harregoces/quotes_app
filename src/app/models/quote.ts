export class Quote {
  constructor(
    private quote: string,
    private author: string,
    private isFavorite: boolean = false
  ) {
  }

  getQuote(): string {
    return this.quote;
  }

  getAuthor(): string {
    return this.author;
  }

  isQuoteFavorite(): boolean {
    return this.isFavorite;
  }

  setQuoteFavorite(isFavorite: boolean): void {
    this.isFavorite = isFavorite;
  }

}
