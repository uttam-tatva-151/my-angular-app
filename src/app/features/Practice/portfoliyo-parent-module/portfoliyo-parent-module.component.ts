import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Portfolio, PortfolioComponent } from './portfolio/portfolio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-parent',
  standalone: true,
  imports: [CommonModule, PortfolioComponent],
  templateUrl: './portfoliyo-parent-module.component.html'
})
export class PortfolioParentComponent {
  portfolio: Portfolio = {
    owner: 'Alice',
    stocks: [
      { symbol: 'AAPL', price: 175, details: { sector: 'Tech' } },
      { symbol: 'TSLA', price: 780, details: { sector: 'Auto' } }
    ]
  };

  livePrices$ = new BehaviorSubject<{ [symbol: string]: number }>({
    AAPL: 175,
    TSLA: 780,
  });

  simulateLivePrices() {
    this.livePrices$.next({
      AAPL: Math.round(170 + Math.random() * 10),
      TSLA: Math.round(770 + Math.random() * 20),
    });
  }

  // Replace portfolio (new object)
  replacePortfolioAll() {
    this.portfolio = {
      ...this.portfolio,
      stocks: this.portfolio.stocks.map(stock => ({
        ...stock,
        price: stock.price + 1
      }))
    };
  }

  // Mutate (in-place)
  mutatePortfolioAll() {
    this.portfolio.stocks.forEach(stock => stock.price += 1);
  }

  onAction(type: string, event: string) {
    alert(`[${type}] ${event}`);
  }
}