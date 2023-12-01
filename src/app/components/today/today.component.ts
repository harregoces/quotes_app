import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteServiceService } from "../../services/quote-service.service";
import { Quote } from "../../models/quote";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss'
})
export class TodayComponent implements OnInit {

  private force: boolean = false;
  public quote: Quote = new Quote('', '');

  constructor(
    private quoteService: QuoteServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.checkTheForceParameter();
    this.getTodayQuotesFormService();
  }

  checkTheForceParameter(): void {
    this.route.url.subscribe(url => {
      const currentPath = url[1]?.path;
      this.force = currentPath === 'new';
    });
  }

  getTodayQuotesFormService(): void {
    this.quoteService.getTodayQuote(this.force).subscribe(
      (data: any) => {
        this.quote = new Quote(data.quote.quote, data.quote.author);
      }
    );
  }

}
