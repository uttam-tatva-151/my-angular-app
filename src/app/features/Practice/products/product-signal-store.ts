import { signal, computed } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

const INITIAL_PRODUCTS: Product[] = [
  { id: 1, name: 'Book', price: 25 },
  { id: 2, name: 'Pen', price: 5 },
  { id: 3, name: 'Bag', price: 50 },
  { id: 4, name: 'Lamp', price: 75 },
  { id: 5, name: 'Notebook', price: 15 },
];

export class ProductSignalStore {
  // Signals for state
  private readonly _products = signal<Product[]>(INITIAL_PRODUCTS);
  private readonly _cart = signal<CartItem[]>([]);
  private readonly _filter = signal<string>('');

  // Computed signals for derived state
  readonly products = computed(() => this._products());
  readonly filter = computed(() => this._filter());
  readonly filteredProducts = computed(() => {
    const term = this._filter().trim().toLowerCase();
    if (!term) return this._products();
    return this._products().filter(p => p.name.toLowerCase().includes(term));
  });
  readonly cart = computed(() => this._cart());
  readonly totalItems = computed(() =>
    this._cart().reduce((sum, item) => sum + item.quantity, 0)
  );
  readonly totalPrice = computed(() =>
    this._cart().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );

  // Actions
  setFilter(term: string) {
    this._filter.set(term);
  }

  addToCart(product: Product) {
    this._cart.update(cart => {
      const idx = cart.findIndex(i => i.product.id === product.id);
      if (idx > -1) {
        const updated = [...cart];
        updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + 1 };
        return updated;
      }
      return [...cart, { product, quantity: 1 }];
    });
  }

  removeFromCart(product: Product) {
    this._cart.update(cart => cart.filter(i => i.product.id !== product.id));
  }

  changeQuantity(product: Product, delta: number) {
    this._cart.update(cart => {
      const idx = cart.findIndex(i => i.product.id === product.id);
      if (idx === -1) return cart;
      const updated = [...cart];
      const newQty = updated[idx].quantity + delta;
      if (newQty <= 0) {
        return cart.filter(i => i.product.id !== product.id);
      }
      updated[idx] = { ...updated[idx], quantity: newQty };
      return updated;
    });
  }

  clearCart() {
    this._cart.set([]);
  }
}

// Singleton store instance
export const productSignalStore = new ProductSignalStore();