var m=Object.defineProperty;var l=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var o=(t,e,r)=>(l(t,typeof e!="symbol"?e+"":e,r),r);import{h as n,C as h,A as d,R as v}from"./index-64c02706.js";const u=`.cart-container{container-type:inline-size;container-name:cart-container}.cart-container .cart-item{display:flex;align-items:flex-start;gap:20px}.cart-container .cart-item img{border-radius:4px;height:200px}@container cart-container (max-width: 450px){.cart-item{flex-direction:column}.cart-item img{width:100%}}
`;var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,I=(t,e,r,i)=>{for(var a=i>1?void 0:i?g(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&f(e,r,a),a};let p=class{constructor(t,e){o(this,"cartItems");this.appService=t,this.renderer=e,this.cartItems=t.getCartItems()}removeItem(t){this.cartItems=this.appService.removeCartItem(t),this.renderer.update()}render(){return this.cartItems.length?n`<div class="cart-container">
        ${this.cartItems.map((t,e)=>n`<section class="cart-item">
            <img src="${t.image}" />
            <div>
              <p>${t.title}</p>
              <p>${t.description}</p>
              <p>&#8377; ${t.price}</p>
              <button onclick=${()=>this.removeItem(e)}>Remove</button>
            </div>
          </section>`)}
      </div>`:n`add items to cart.cart count: ${this.cartItems.length}`}};p=I([h({selector:"app-cart",styles:u,deps:[d,v]})],p);export{p as Cart};
