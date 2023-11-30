import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Quote} from "../../models/quote";
import {QuoteServiceService} from "../../services/quote-service.service";
import {QuotesListComponent} from "../quotes-list/quotes-list.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule, FormsModule, QuotesListComponent],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss'
})
export class QuotesComponent implements OnInit {

  public quotesList: Quote[] = [];
  private force: boolean = false;

  constructor(
    private quoteService: QuoteServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.checkTheForceParameter();
    this.getQuotesFormService();
  }

  checkTheForceParameter(): void {
    this.route.url.subscribe(url => {
      const currentPath = url[1]?.path;
      this.force = currentPath === 'new';
    });
  }

  getQuotesFormService(): void {
    this.quoteService.getQuotes(this.force).subscribe(
      (data: any) => {
        data.quotes.forEach((quote: any) => {
          this.quotesList.push(new Quote(quote.quote, quote.author));
        });
      }
    );
  }

}
