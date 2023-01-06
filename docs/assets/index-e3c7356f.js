var n=Object.defineProperty;var u=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(u(t,typeof e!="symbol"?e+"":e,r),r);import{h as o,C as l,R as m,A as g}from"./index-8026fb81.js";const h=`.products{display:grid;gap:20px}.products .product{display:flex;flex-direction:column;justify-content:space-between;margin-bottom:0}.products .product img{width:100%;height:300px}.products .product .price-rating{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}.products .product .price-rating .rating{margin-top:5px;text-align:right}@media (max-width: 375px){.products{grid-template-columns:repeat(1,1fr)}}@media (min-width: 376px){.products{grid-template-columns:repeat(2,1fr)}}@media (min-width: 768px){.products{grid-template-columns:repeat(3,1fr)}}@media (min-width: 1200px){.products{grid-template-columns:repeat(4,1fr)}}
`;var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,x=(t,e,r,i)=>{for(var s=i>1?void 0:i?v(e,r):e,p=t.length-1,a;p>=0;p--)(a=t[p])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&f(e,r,s),s};let d=class{constructor(t,e){c(this,"products",[]);this.renderer=t,this.appService=e}mount(){this.loadProducts()}async loadProducts(){if(this.products=this.appService.getProducts(),!this.products.length){const e=await(await fetch("https://fakestoreapi.com/products")).json();this.products=e,this.appService.setProducts(e)}this.renderer.update()}addToCart(t){this.appService.addToCart(t)}render(){return this.products.length?o`<div class="products">
        ${this.products.map(t=>o`<section class="product">
            <img src="${t.image}" />
            <p>${t.title}</p>
            <div class="price-rating">
              <span>&#8377; ${t.price}</span>
              <div class="rating" style="--rating: ${t.rating.rate}" data-count="${t.rating.count}"></div>
            </div>
            <div class="center">
              <button onclick=${()=>this.addToCart(t)}>Add To Cart</button>
            </div>
          </section>`)}
      </div>`:o`Loading..`}};d=x([l({selector:"app-products",styles:h,deps:[m,g]})],d);export{d as Products};
