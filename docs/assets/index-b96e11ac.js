var d=Object.defineProperty;var u=(t,e,r)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(u(t,typeof e!="symbol"?e+"":e,r),r);import{h as p,C as l,R as g,A as h}from"./index-14d6ba91.js";const m=`.products{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.products .product{display:flex;flex-direction:column;justify-content:space-between;flex:1;margin-bottom:0}.products .product img{width:100%;height:300px}.products .product .price-rating{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}.products .product .price-rating .rating{margin-top:5px;text-align:right}
`;var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,x=(t,e,r,i)=>{for(var s=i>1?void 0:i?f(e,r):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&v(e,r,s),s};let n=class{constructor(t,e){c(this,"products",[]);this.renderer=t,this.appService=e}mount(){this.loadProducts()}async loadProducts(){if(this.products=this.appService.getProducts(),!this.products.length){const e=await(await fetch("https://fakestoreapi.com/products")).json();this.products=e,this.appService.setProducts(e)}this.renderer.update()}addToCart(t){this.appService.addToCart(t)}render(){return this.products.length?p`<div class="products">
        ${this.products.map(t=>p`<section class="product">
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
      </div>`:p`Loading..`}};n=x([l({selector:"app-products",styles:m,deps:[g,h]})],n);export{n as Products};
