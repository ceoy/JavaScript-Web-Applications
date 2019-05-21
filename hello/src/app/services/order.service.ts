import { Injectable } from "@angular/core";
import { Book } from "../catalog/book";

@Injectable({
  providedIn: "root"
})
@Injectable()
export class OrderService {
  private orderedBook: Book;
  constructor() {}

  public orderBook(book: Book) {
    this.orderedBook = book;
  }

  public getOrderedBook(): Book {
    return this.orderedBook;
  }

  public clearOrderedBook() {
    this.orderedBook = undefined;
  }
}
