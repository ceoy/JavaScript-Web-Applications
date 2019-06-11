import { Injectable } from "@angular/core";
import { BOOK_DATA } from "../catalog/book-data";
import { Book } from "../catalog/book";
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CatalogService {
  private keywords: string;

  constructor(private httpClient: HttpClient){}

  public searchBooks(keywords: string): Promise<Book[]> {
    this.keywords = keywords;
    
    let url = "/api/books";
    let options = { params: new HttpParams().set('keywords', keywords) };
    return this.httpClient.get<Book[]>(url, options).toPromise()
      .then(result => {
        console.log(result.length + ' books found');
        console.log(result);
        return result;
      })
      .catch((response: HttpErrorResponse) => {
        throw response.statusText + "; " + response.error.message;
      })
  }
}
