import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "../catalog/book";
import { OrderService } from "../services/order.service";
import { Router } from "@angular/router";

@Component({
  selector: "book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent {
  constructor(private router: Router, private bookOrder: OrderService) {}

  public orderBook(): void {
    this.bookOrder.orderBook(this.book);
    this.router.navigateByUrl("/customer-details");
  }
  @Input()
  public book: Book;

  @Output()
  public back = new EventEmitter();
}
