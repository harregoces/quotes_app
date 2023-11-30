import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Quote} from "../models/quote";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {

  private apiUrl = '';

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
  }

  getQuotes(force: boolean = false): any {
    let finalUrl = this.apiUrl + '/quotes';
    if (force) {
      finalUrl += '?new=true';
    }
    return this.http.get(finalUrl);
  }


}
