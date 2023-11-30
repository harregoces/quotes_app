export class Quote {
  constructor(
    private quote: string,
    private author: string,
  ) {
  }

  getQuote(): string {
    return this.quote;
  }

  getAuthor(): string {
    return this.author;
  }

}
