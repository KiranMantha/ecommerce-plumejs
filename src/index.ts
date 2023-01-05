import { Component, html } from '@plumejs/core';
import { Router } from '@plumejs/router';
// as per https://github.com/vitejs/vite/pull/2148
import styles from './styles/base.scss?inline';

@Component({
  selector: 'app-root',
  styles: styles,
  root: true,
  deps: [Router]
})
export class AppComponent {
  constructor(private router: Router) {
    Router.registerRoutes(this.routes, false);
  }

  routes = [
    {
      path: '',
      redirectTo: '/products'
    },
    {
      path: '/products',
      template: '<app-products></app-products>',
      templatePath: () => import('./products')
    },
    {
      path: '/cart',
      template: '<app-cart></app-cart>',
      templatePath: () => import('./cart')
    }
  ];

  navigate(e: Event, path: string) {
    e.preventDefault();
    this.router.navigateTo(path);
  }

  render() {
    return html`
      <div class="layout">
        <header class="layout sticky-header">
          <nav>
            <ul>
              <li><a href="#" onclick=${(e) => this.navigate(e, '/products')}>Products</a></li>
              <li><a href="#" onclick=${(e) => this.navigate(e, '/cart')}>Cart</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <router-outlet></router-outlet>
        </main>
      </div>
    `;
  }
}
