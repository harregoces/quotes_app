import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Quote} from "../models/quote";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getQuotes(force: boolean = false): any {
    let finalUrl = this.apiUrl + '/quotes';
    if (force) {
      finalUrl += '?new=true';
    }
    return this.http.get(finalUrl);
  }

  setFavorite(quote: Quote): Observable<any> {
    return this.http.post(this.apiUrl + '/quotes/favorite', quote);
  }

  getTodayQuote(force: boolean = false): any {
    let finalUrl = this.apiUrl + '/today';
    if (force) {
      finalUrl += '?new=true';
    }
    return this.http.get(finalUrl);
  }
}
