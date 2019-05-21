import { Component, OnInit } from "@angular/core";
import { OrderService } from "../services/order.service";

@Component({
  selector: "app-customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.css"]
})
export class CustomerDetailsComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    let orderedBook = this.orderService.getOrderedBook();
    if (orderedBook) {
      this.orderService.clearOrderedBook();
      alert("you ordered a book!");
    }
  }
}
