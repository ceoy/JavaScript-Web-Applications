import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Book } from '../catalog/book';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  public customer: Customer;
  public book: Book;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
   this.book = this.orderService.orderedBook;
   this.customer = this.orderService.customer;
  }

  public order() {
    this.orderService.orderBook().then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })
  } 

}
