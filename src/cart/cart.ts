import { Component, html, Renderer } from '@plumejs/core';
import { AppService } from '../common/app.service';
import { Product } from '../common/products.model';
import cartStyles from './cart.scss?inline';

@Component({
  selector: 'app-cart',
  styles: cartStyles,
  deps: [AppService, Renderer]
})
export class Cart {
  cartItems: Product[];
  constructor(private appService: AppService, private renderer: Renderer) {
    this.cartItems = appService.getCartItems();
  }

  removeItem(index: number) {
    this.cartItems = this.appService.removeCartItem(index);
    this.renderer.update();
  }

  render() {
    if (this.cartItems.length) {
      return html`<div class="cart-container">
        ${this.cartItems.map(
          (item, index) => html`<section class="cart-item">
            <img src="${item.image}" />
            <div>
              <p>${item.title}</p>
              <p>${item.description}</p>
              <p>&#8377; ${item.price}</p>
              <button onclick=${() => this.removeItem(index)}>Remove</button>
            </div>
          </section>`
        )}
      </div>`;
    } else {
      return html`add items to cart.cart count: ${this.cartItems.length}`;
    }
  }
}
