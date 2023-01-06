import { Component, html } from '@plumejs/core';
import { Router } from '@plumejs/router';
import { Subscription } from 'rxjs';
import { AppService } from './common/app.service';
// as per https://github.com/vitejs/vite/pull/2148
import styles from './styles/base.scss?inline';

@Component({
  selector: 'app-root',
  styles: styles,
  root: true,
  deps: [Router, AppService]
})
export class AppComponent {
  constructor(private router: Router, private appService: AppService) {
    Router.registerRoutes(this.routes, false);
  }

  private cartCounterRef: HTMLElement;
  private subscriptions = new Subscription();

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

  mount() {
    this.subscriptions.add(
      this.appService.getCartCount().subscribe((count) => {
        this.cartCounterRef.innerHTML = `${count}`;
      })
    );
  }

  unmount() {
    this.subscriptions.unsubscribe();
  }

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
              <li>
                <a href="#" class="logo" onclick=${(e) => this.navigate(e, '/products')}>
                  <img src="./images/logo.jpg" />
                </a>
              </li>
            </ul>
            <ul>
              <li><a href="#" onclick=${(e) => this.navigate(e, '/products')}>Products</a></li>
              <li>
                <a href="#" onclick=${(e) => this.navigate(e, '/cart')}
                  >Cart (<span
                    ref=${(node) => {
                      this.cartCounterRef = node;
                    }}
                  ></span
                  >)</a
                >
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <router-outlet></router-outlet>
        </main>
        <footer class="layout">
          <a href="https://github.com/KiranMantha/ecommerce-plumejs">Source code</a>
        </footer>
      </div>
    `;
  }
}
