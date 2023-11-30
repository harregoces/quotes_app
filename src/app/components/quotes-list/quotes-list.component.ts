import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-quotes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes-list.component.html',
  styleUrl: './quotes-list.component.scss'
})
export class QuotesListComponent {

  @Input() quotesList: Quote[] = [];

  toggleFavorite(quote: Quote) {
    quote.setQuoteFavorite(!quote.isQuoteFavorite());
  }

}
