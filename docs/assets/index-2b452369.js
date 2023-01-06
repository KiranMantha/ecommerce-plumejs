var n=Object.defineProperty;var l=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var m=(t,e,r)=>(l(t,typeof e!="symbol"?e+"":e,r),r);import{h as p,C as h,A as v,R as d}from"./index-86b834ca.js";const u=`.cart-item{display:flex;align-items:flex-start;gap:20px}.cart-item img{border-radius:4px;height:200px}
`;var I=Object.defineProperty,f=Object.getOwnPropertyDescriptor,g=(t,e,r,a)=>{for(var s=a>1?void 0:a?f(e,r):e,i=t.length-1,c;i>=0;i--)(c=t[i])&&(s=(a?c(e,r,s):c(s))||s);return a&&s&&I(e,r,s),s};let o=class{constructor(t,e){m(this,"cartItems");this.appService=t,this.renderer=e,this.cartItems=t.getCartItems()}removeItem(t){this.cartItems=this.appService.removeCartItem(t),this.renderer.update()}render(){return this.cartItems.length?p`<div>
        ${this.cartItems.map((t,e)=>p`<section class="cart-item">
            <img src="${t.image}" />
            <div>
              <p>${t.title}</p>
              <p>${t.description}</p>
              <p>&#8377; ${t.price}</p>
              <button onclick=${()=>this.removeItem(e)}>Remove</button>
            </div>
          </section>`)}
      </div>`:p`add items to cart.cart count: ${this.cartItems.length}`}};o=g([h({selector:"app-cart",styles:u,deps:[v,d]})],o);export{o as Cart};
