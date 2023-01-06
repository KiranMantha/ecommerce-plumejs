import { Injectable } from '@plumejs/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/common/products.model';

@Injectable()
export class AppService {
  private cartItems: Product[] = [];
  private products: Product[] = [];
  private cartCountSubscription = new BehaviorSubject(0);

  getCartCount() {
    return this.cartCountSubscription.asObservable();
  }

  getProducts() {
    return this.products;
  }

  setProducts(products: Product[]) {
    this.products = products;
  }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: Product) {
    this.cartItems.push(item);
    this.cartCountSubscription.next(this.cartItems.length);
  }

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
    this.cartCountSubscription.next(this.cartItems.length);
    return this.cartItems;
  }
}
