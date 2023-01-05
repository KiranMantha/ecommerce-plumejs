import { Injectable } from '@plumejs/core';
import { Product } from 'src/common/products.model';

@Injectable()
export class AppService {
  private cartItems: Product[] = [];
  private products: Product[] = [];

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
  }

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
    return this.cartItems;
  }
}
