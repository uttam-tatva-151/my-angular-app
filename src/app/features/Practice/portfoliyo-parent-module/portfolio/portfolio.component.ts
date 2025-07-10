import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy, DoCheck, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export interface Stock {
  symbol: string;
  price: number;
  details: { sector: string };
}
export interface Portfolio {
  owner: string;
  stocks: Stock[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, OnDestroy, DoCheck {
  @Input() portfolio!: Portfolio;
  @Input() livePrices$!: Observable<{ [symbol: string]: number }>;
  @Input() cdStrategy: 'Default' | 'OnPush' = 'Default';

  @Output() action = new EventEmitter<string>();

  prices: { [symbol: string]: number } = {};
  private subs: Subscription[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.livePrices$) {
      const s = this.livePrices$.subscribe(prices => {
        this.prices = prices;
        if (this.cdStrategy === 'OnPush') this.cdr.markForCheck();
      });
      this.subs.push(s);
    }
  }

  ngDoCheck() {
    // You can see when change detection runs for this component
    console.log(`[${this.cdStrategy}] PortfolioComponent Checked`);
  }

  // Mutate first stock price (in-place)
  mutateStockPrice() {
    if (this.portfolio.stocks.length) {
      this.portfolio.stocks[0].price += 10;
      if (this.cdStrategy === 'OnPush') this.cdr.markForCheck();
      this.action.emit('Mutated first stock price (in-place)');
    }
  }

  // Replace first stock (new object, new array reference)
  replaceStock() {
    if (this.portfolio.stocks.length) {
      const updatedStock = { ...this.portfolio.stocks[0], price: this.portfolio.stocks[0].price + 10 };
      this.portfolio = {
        ...this.portfolio,
        stocks: [updatedStock, ...this.portfolio.stocks.slice(1)]
      };
      this.action.emit('Replaced first stock (new object, new array)');
    }
  }

  manualDetectChanges() {
    this.cdr.detectChanges();
    this.action.emit('Manual detectChanges() triggered');
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}