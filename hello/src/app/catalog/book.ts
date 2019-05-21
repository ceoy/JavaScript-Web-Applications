export class Book {
  constructor(
    public isbn: String,
    public author: string,
    public title: string,
    public price: number,
    public publisher: string,
    public publicationYear: number,
    public bindind: BookBinding,
    public numberOfPages: number,
    public description: string,
    public imageUrl: string
  ) {}

  public toString() {
    return (
      this.isbn +
      " " +
      this.description +
      " " +
      this.title +
      " " +
      this.author +
      " " +
      this.publisher
    );
  }
}

export enum BookBinding {
  PAPERBACK = 1,
  EBOOK = 2
}
