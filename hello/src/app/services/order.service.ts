import { Injectable } from "@angular/core";
import { Book } from "../catalog/book";
import { Customer } from '../model/customer';
import { HttpClient, HttpParams, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
@Injectable()
export class OrderService {
  public customer: Customer;
  public orderedBook: Book;

  constructor(private httpClient: HttpClient) { }

  public orderBook(): Promise<number> {
    let url = "/api/orders";
    let options = {
      params: new HttpParams().set("isbn", this.orderedBook.isbn),
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }
    return this.httpClient.post<number>(url, this.customer, options).toPromise()
  }
}
