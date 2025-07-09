import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, computed, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}
const PRODUCTS: Product[] = [
  { id: 1, name: 'Book', price: 25 },
  { id: 2, name: 'Pen', price: 5 },
  { id: 3, name: 'Bag', price: 50 },
];

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {

  products = PRODUCTS;

  // --- WITHOUT SIGNALS (Classic State Management) ---

  classicCart: { product: Product; quantity: number }[] = [];
  classicTotal = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  addToCartClassic(product: Product) {
    const idx = this.classicCart.findIndex(i => i.product.id === product.id);
    if (idx > -1) {
      this.classicCart[idx].quantity += 1;
    } else {
      this.classicCart.push({ product, quantity: 1 });
    }
    this.classicTotal = this.classicCart.reduce(
      (sum, item) => sum + item.product.price * item.quantity, 0
    );
    // Sometimes, especially with OnPush, you may need:
    // this.cdr.markForCheck();
  }

  removeFromCartClassic(product: Product) {
    this.classicCart = this.classicCart.filter(i => i.product.id !== product.id);
    this.classicTotal = this.classicCart.reduce(
      (sum, item) => sum + item.product.price * item.quantity, 0
    );
    // this.cdr.markForCheck();
  }

  // --- WITH SIGNALS ---

  private _cart = signal<{ product: Product; quantity: number }[]>([]);
  cart = computed(() => this._cart());

  totalPrice = computed(() =>
    this._cart().reduce(
      (sum, item) => sum + item.product.price * item.quantity, 0
    )
  );

  addToCartSignal(product: Product) {
    this._cart.update(cart => {
      const idx = cart.findIndex(i => i.product.id === product.id);
      if (idx > -1) {
        const updated = [...cart];
        updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + 1 };
        return updated;
      } else {
        return [...cart, { product, quantity: 1 }];
      }
    });
    // No need to manually recalculate total or trigger change detection
  }

  removeFromCartSignal(product: Product) {
    this._cart.update(cart => cart.filter(i => i.product.id !== product.id));
    // No need to manually recalculate total or trigger change detection
  }

}
