import { Component, OnInit, Injectable } from "@angular/core";
import { OrderService } from "../services/order.service";
import { Customer, CreditCardType } from '../model/customer';
import { Router } from '@angular/router';

@Component({
  selector: "app-customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.css"]
})
export class CustomerDetailsComponent {
  public customer: Customer = new Customer;
  public creditCardTypes: CreditCardType[] = [CreditCardType.MASTERCARD,CreditCardType.VISA];
  public currentYear:number = (new Date()).getFullYear();

  constructor(public orderService: OrderService, public router: Router) {}

  public saveCustomer(){
    this.orderService.customer = this.customer;

    this.router.navigateByUrl("/order-summary");
  }
}
