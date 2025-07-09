import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productSignalStore, Product } from './product-signal-store';

@Component({
  selector: 'app-product-signal-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  store = productSignalStore;

  onFilterInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.store.setFilter(val);
  }

  addToCart(product: Product) {
    this.store.addToCart(product);
  }
  removeFromCart(product: Product) {
    this.store.removeFromCart(product);
  }
  changeQuantity(product: Product, delta: number) {
    this.store.changeQuantity(product, delta);
  }
  clearCart() {
    this.store.clearCart();
  }
}