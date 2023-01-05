import { Component, html, IHooks, Renderer } from '@plumejs/core';
import { AppService } from '../common/app.service';
import { Product } from '../common/products.model';
import productStyles from './products.scss?inline';

@Component({
  selector: 'app-products',
  styles: productStyles,
  deps: [Renderer, AppService]
})
export class Products implements IHooks {
  constructor(private renderer: Renderer, private appService: AppService) {}
  products: Product[] = [];

  mount() {
    this.loadProducts();
  }

  private async loadProducts() {
    this.products = this.appService.getProducts();
    if (!this.products.length) {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      this.products = data;
      this.appService.setProducts(data);
    }
    this.renderer.update();
  }

  private addToCart(item: Product) {
    this.appService.addToCart(item);
  }

  render() {
    if (this.products.length) {
      return html`<div class="products">
        ${this.products.map(
          (product) => html`<section class="product">
            <img src="${product.image}" />
            <p>${product.title}</p>
            <div class="price-rating">
              <span>&#8377; ${product.price}</span>
              <div class="rating" style="--rating: ${product.rating.rate}" data-count="${product.rating.count}"></div>
            </div>
            <div class="center">
              <button onclick=${() => this.addToCart(product)}>Add To Cart</button>
            </div>
          </section>`
        )}
      </div>`;
    } else {
      return html`Loading..`;
    }
  }
}
