var n=Object.defineProperty;var u=(t,s,e)=>s in t?n(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var c=(t,s,e)=>(u(t,typeof s!="symbol"?s+"":s,e),e);import{h as o,C as l,R as h}from"./index-fe0fb9be.js";import{A as m}from"./app.service-4da430e9.js";const f=`.products{display:flex;flex-wrap:wrap;column-gap:20px}.products .product{display:flex;flex-direction:column;justify-content:space-between;flex:1}.products .product img{width:100%;height:300px}.products .product .price-rating{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}.products .product .price-rating .rating{margin-top:5px;text-align:right}@media (max-width: 365px){.products{display:block}}@media (min-width: 768px){.products .product{flex-basis:50%}}@media (min-width: 992px){.products .product{flex-basis:33.3333%}}@media (min-width: 1200px){.products .product{flex-basis:20%}}
`;var g=Object.defineProperty,x=Object.getOwnPropertyDescriptor,v=(t,s,e,i)=>{for(var r=i>1?void 0:i?x(s,e):s,p=t.length-1,a;p>=0;p--)(a=t[p])&&(r=(i?a(s,e,r):a(r))||r);return i&&r&&g(s,e,r),r};let d=class{constructor(t,s){c(this,"products",[]);this.renderer=t,this.appService=s}mount(){this.loadProducts()}async loadProducts(){if(this.products=this.appService.getProducts(),!this.products.length){const s=await(await fetch("https://fakestoreapi.com/products")).json();this.products=s,this.appService.setProducts(s)}this.renderer.update()}addToCart(t){this.appService.addToCart(t)}render(){return this.products.length?o`<div class="products">
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
      </div>`:o`Loading..`}};d=v([l({selector:"app-products",styles:f,deps:[h,m]})],d);export{d as Products};
