var G=Object.defineProperty;var Q=(t,e,r)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var b=(t,e,r)=>(Q(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const X="modulepreload",Z=function(t,e){return new URL(t,e).href},H={},$=function(e,r,o){if(!r||r.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=Z(n,o),n in H)return;H[n]=!0;const i=n.endsWith(".css"),m=i?'[rel="stylesheet"]':"";if(!!o)for(let w=a.length-1;w>=0;w--){const C=a[w];if(C.href===n&&(!i||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${m}`))return;const v=document.createElement("link");if(v.rel=i?"stylesheet":X,i||(v.as="script",v.crossOrigin=""),v.href=n,document.head.appendChild(v),i)return new Promise((w,C)=>{v.addEventListener("load",w),v.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())},V=new class{constructor(){b(this,"map",new WeakMap)}register(t,e){if(!this.map.get(t))this.map.set(t,e);else throw Error(`${t} is already registered service.`)}getService(t){const e=this.map.get(t);if(e)return e;throw Error(`${t} is not a registered provider.`)}clear(){this.map=new WeakMap}},q=(t,e,r)=>{if(e.length){const o=[];for(const a of e)a.__metadata__?o.push(r):o.push(V.getService(a));return new t(...o)}else return new t},k=new class{constructor(){b(this,"globalStyles");b(this,"style_registry");b(this,"isRootNodeSet");b(this,"globalStyleTag");b(this,"getComputedCss",(t="",e)=>{let r=[];const o=new CSSStyleSheet;if(o.insertRule(":host { display: block; }"),r=e?[o]:[this.globalStyles,o],t){const a=new CSSStyleSheet;a.replace(t),r.push(a)}return r});try{this.globalStyles=new CSSStyleSheet}catch{this.globalStyles=""}this.isRootNodeSet=!1,this.globalStyleTag=null}},{html:L,render:ee}=(()=>{const t=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,e=/<[a-z][^>]+$/i,r="attr",o=/^attr([^ ]+)/,a="insertNode",n=/^insertNode([^ ]+)/;let i=[];const m=d=>{const s={"&":"&amp;","<":"&lt;",">":"&gt;","(":"%28",")":"%29"};let u=JSON.stringify(d);const c=l=>s[l]||l;return u=(l=>l.replace(/[&<>\(\)]/g,c))(u),JSON.parse(u)},R=(d,s)=>{const u=d.options,c=Array.isArray(s)?s:[s];let p,l,g=u.length;for(;g--;){l=u[g];const h=l.getAttribute("value")??(l.textContent.match(/[^\x20\t\r\n\f]+/g)||[]).join(" ");(l.selected=c.indexOf(h)>-1)&&(p=!0)}p||(d.selectedIndex=-1)},v=d=>{const s=document.createElement("template");return s.innerHTML=d,s.content},w=(d,s)=>{const u=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,null);let c=u.nextNode();for(;c;){if(c.eventSubscriptions=[],c.hasAttributes()){const p=Array.from(c.attributes).filter(l=>o.test(l.nodeName));for(const{nodeName:l,nodeValue:g}of p){const h=o.exec(l)[1];switch(!0){case/^on+/.test(g):{const f=g.slice(2).toLowerCase();c.removeEventListener(f,s[h]),f!=="bindprops"?c.addEventListener(f,s[h]):c.addEventListener(f,y=>{y.detail.setProps(s[h]())});break}case/ref/.test(g):{const f=(y=>{const S=y;return()=>{S.isConnected&&s[h](S)}})(c);i.push(f);break}case/^data-+/.test(g):case/^aria-+/.test(g):{c.setAttribute(g,m(s[h]));break}case/class/.test(g):{s[h]?c.classList.add(...s[h].split(" ")):c.setAttribute("class","");break}case/value/.test(g):{c.nodeName.toLowerCase()==="select"?R(c,s[h]):c.value=m(s[h]);break}case/disabled/.test(g):case/checked/.test(g):{s[h]?c.setAttribute(g,s[h]):c.removeAttribute(g);break}default:c.setAttribute(g,m(s[h]))}c.removeAttribute(l)}}c=u.nextNode()}},C=(d,s)=>{const u=document.createTreeWalker(d,NodeFilter.SHOW_COMMENT,null);let c=u.nextNode(),p;for(;c;){if(p=n.exec(c.data)){const l=Array.isArray(s[p[1]])?s[p[1]]:[s[p[1]]];c.replaceWith(...l),u.currentNode=d}c=u.nextNode()}},K=(d,s)=>{if(!d||!s||d.nodeType!==1||s.nodeType!==1)return;const u=d.attributes,c=s.attributes;for(const{name:p,value:l}of u)/class/.test(p)?Array.from(d.classList).every(g=>{s.classList.contains(g)||s.classList.add(g)}):(!c[p]||c[p]!==l)&&s.setAttribute(p,l);for(const{name:p}of c)/class/.test(p)?Array.from(s.classList).every(l=>{d.classList.contains(l)||s.classList.remove(l)}):u[p]||s.removeAttribute(p)},z=d=>d.nodeType===3?"text":d.nodeType===8?"comment":d.tagName.toLowerCase(),I=d=>d.childNodes&&d.childNodes.length>0?null:d.textContent,A=(d,s)=>{const u=s?Array.from(s.childNodes):[],c=d?Array.from(d.childNodes):[];let p=u.length-c.length;if(p>0)for(;p>0;p--)u[u.length-p].parentNode.removeChild(u[u.length-p]);c.forEach((l,g)=>{const h=u[g];if(K(l,h),!h){s&&s.appendChild(l);return}if(z(l)!==z(h)){h.replaceWith(l);return}const f=I(l);if(f&&f!==I(h)){h.textContent=f;return}if(h.childNodes.length>0&&l.childNodes.length<1){h.innerHTML="";return}if(h.childNodes.length<1&&l.childNodes.length>0){const y=document.createDocumentFragment();A(l,y),h.appendChild(y);return}if(l.childNodes.length>0){A(l,h);return}})};return{html:(d,...s)=>{let u="";const{length:c}=d;for(let l=1;l<c;l++){const g=s[l-1];let h=!1;u+=d[l-1],t.test(u)&&e.test(u)&&(u=u.replace(t,(f,y,S)=>`${r}${l-1}=${S||'"'}${y}${S?"":'"'}`),h=!0),h||(Array.isArray(g)||g instanceof DocumentFragment?u+=`<!--${a}${l-1}-->`:u+=g)}u+=d[c-1];const p=v(u.trim());return w(p,s),C(p,s),p},render:(d,s)=>{d.children.length?A(s,d):(d.innerHTML="",d.appendChild(s)),i.forEach(u=>{u()}),i=[]}}})();class N{constructor(){b(this,"shadowRoot");b(this,"update");b(this,"emitEvent")}static get __metadata__(){return{name:"Renderer"}}}const O=(()=>{try{return new CSSStyleSheet,!1}catch{return!0}})(),Y=(t,e,r,o=!1)=>(t.addEventListener(e,r,o),()=>{t.removeEventListener(e,r,o)}),te={selector:"",root:!1,styles:"",deps:[],standalone:!1},F=(t,e=null)=>{const r=document.createElement("style");return r.innerHTML=t,e&&e.appendChild(r),r},re=(t,e)=>{if(t={...te,...t},t.styles=t.styles.toString(),t.root&&!k.isRootNodeSet)k.isRootNodeSet=!0,t.styles&&(k.globalStyleTag=F(t.styles,document.head),k.globalStyles.replace(t.styles));else if(t.root&&k.isRootNodeSet)throw Error("Cannot register duplicate root component in "+t.selector+" component");window.customElements.define(t.selector,class extends HTMLElement{constructor(){super();b(this,"klass");b(this,"shadow");b(this,"componentStyleTag",null);b(this,"eventSubscriptions",[]);if(this.shadow=this.attachShadow({mode:"open"}),!O){const o=k.getComputedCss(t.styles,t.standalone);this.shadow.adoptedStyleSheets=o}this.getInstance=this.getInstance.bind(this)}static get observedAttributes(){return e.observedAttributes||[]}emulateComponent(){O&&t.styles&&(this.componentStyleTag=F(t.styles))}update(){ee(this.shadow,(()=>this.klass.render())()),O&&(t.styles&&this.shadow.insertBefore(this.componentStyleTag,this.shadow.childNodes[0]),k.globalStyleTag&&!t.standalone&&this.shadow.insertBefore(document.importNode(k.globalStyleTag,!0),this.shadow.childNodes[0]))}emitEvent(o,a,n=!0){const i=new CustomEvent(o,{detail:a,bubbles:n});this.dispatchEvent(i)}setProps(o){var a,n;for(const[i,m]of Object.entries(o))this.klass[i]=m;(n=(a=this.klass).onPropsChanged)==null||n.call(a),this.update()}getInstance(){return this.klass}connectedCallback(){this.emulateComponent();const o=new N;o.update=()=>{this.update()},o.shadowRoot=this.shadow,o.emitEvent=(a,n)=>{this.emitEvent(a,n)},this.klass=q(e,t.deps,o),this.klass.beforeMount&&this.klass.beforeMount(),this.update(),this.klass.mount&&this.klass.mount(),this.emitEvent("bindprops",{setProps:a=>{this.setProps(a)}},!1),this.eventSubscriptions.push(Y(window,"onLanguageChange",()=>{this.update()}))}attributeChangedCallback(o,a,n){var i,m;(m=(i=this.klass).onNativeAttributeChanges)==null||m.call(i,o,a,n)}disconnectedCallback(){var o,a,n;if(this.componentStyleTag&&this.componentStyleTag.remove(),(a=(o=this.klass).unmount)==null||a.call(o),(n=this.eventSubscriptions)!=null&&n.length)for(const i of this.eventSubscriptions)i()}})},oe={deps:[]},J=t=>e=>{if(t.selector.indexOf("-")<=0)throw new Error("You need at least 1 dash in the custom element name!");window.customElements.get(t.selector)||(Object.defineProperty(e.prototype,"selector",{get(){return t.selector}}),re(t,e))},M=(t={})=>e=>{t={...oe,...t};const r=q(e,t.deps);V.register(e,r)};function P(t,e,r,o){var a=arguments.length,n=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var m=t.length-1;m>=0;m--)(i=t[m])&&(n=(a<3?i(n):a>3?i(e,r,n):i(e,r))||n);return a>3&&n&&Object.defineProperty(e,r,n),n}function j(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}let D=class{constructor(){b(this,"transition","");this.whichTransitionEnd()}onTransitionEnd(e,r,o){let a=!1,n=null;const i=()=>{a||(a=!0,r&&r(),n(),n=null)};n=Y(e,this.transition,()=>{i()}),setTimeout(i,o)}animationsComplete(e){return e.getAnimations?Promise.allSettled(e.getAnimations().map(r=>r.finished)):Promise.allSettled([!0])}whichTransitionEnd(){const r=document.createElement("div").style,o={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"};for(const a in o)if(typeof r[a]<"u"){this.transition=o[a];break}}};D=P([M(),j("design:paramtypes",[])],D);const _=class{static checkParams(e,r){let o=0;const a={},n=r.paramCount;for(let i=0;i<e.length;i++){const m=r.params[i];m.indexOf(":")>=0&&(a[m.split(":")[1]]=e[i].split("?")[0],o+=1)}return o===n?a:{}}static getParamCount(e){let r=0;return e.forEach(o=>{o.indexOf(":")>=0&&(r+=1)}),r}static formatRoute(e){const r={params:{},url:"",template:"",paramCount:0,isRegistered:!1,redirectTo:"",canActivate:()=>!0};if(r.params=e.path.split("/").filter(o=>o.length>0),r.url=e.path,r.template="",r.redirectTo=e.redirectTo,e.template){if(!e.templatePath)throw Error("templatePath is required in route if template is mentioned.");r.template=e.template,r.templatePath=e.templatePath}e.canActivate&&(r.canActivate=e.canActivate),r.paramCount=_.getParamCount(r.params),_.routeList.push(r)}static preloadRoutes(){for(const e of _.routeList)e.templatePath&&e.templatePath()}};let x=_;b(x,"routeList",[]);const ae=t=>!!t&&typeof t.subscribe=="function",ne=t=>!!t&&typeof t.then=="function",ie=t=>({subscribe:e=>{e(t)}}),se=t=>({subscribe:e=>{Promise.resolve(t).then(r=>{e(r)})}});class le{constructor(){b(this,"_internalFn")}asObservable(){return{subscribe:e=>this.subscribe(e)}}subscribe(e){return this._internalFn=e,this.unsubscribe}unsubscribe(){this._internalFn=null}next(e){this._internalFn(e)}}const W=t=>ae(t)?t:ne(t)?se(Promise.resolve(t)):ie(t),ce=(t,e,r,o=!1)=>(t.addEventListener(e,r,o),()=>{t.removeEventListener(e,r,o)});let E=class{constructor(){b(this,"_currentRoute",{path:"",routeParams:new Map,queryParams:new Map,state:{}});b(this,"_template",new le);b(this,"_unSubscribeHashEvent")}startHashChange(){this._unSubscribeHashEvent=ce(window,"hashchange",()=>{this._registerOnHashChange()})}stopHashChange(){this._unSubscribeHashEvent()}getTemplate(){return this._template.asObservable()}getCurrentRoute(){return this._currentRoute}navigateTo(e="",r){e?(window.location.hash.replace(/^#/,"")===e&&this._navigateTo(e,r),window.location.hash="#"+e):this._navigateTo(e,r)}_registerOnHashChange(){const e=window.location.hash.replace(/^#/,"");this._navigateTo(e,null)}_routeMatcher(e,r){if(e){const o=new RegExp(e.replace(/:[^\s/]+/g,"([\\w-]+)"));return r.match(o)}else return e===r}_navigateTo(e,r){const o=e.split("/").filter(i=>i.length>0),a=x.routeList.filter(i=>{if(i.params.length===o.length&&this._routeMatcher(i.url,e))return i;if(i.url===e)return i}),n=a.length>0?a[0]:null;n&&(this._currentRoute.path=e,this._currentRoute.state={...r||{}},W(n.canActivate()).subscribe(i=>{if(!i)return;const m=x.checkParams(o,n);if(Object.keys(m).length>0||e){this._currentRoute.routeParams=new Map(Object.entries(m));const R=window.location.hash.split("?")[1]?new URLSearchParams(window.location.hash.split("?")[1]).entries():[];this._currentRoute.queryParams=new Map(R),n.isRegistered?this._template.next(n.template):n.templatePath&&W(n.templatePath()).subscribe(()=>{n.isRegistered=!0,this._template.next(n.template)})}else this.navigateTo(n.redirectTo,r)}))}};E=P([M()],E);let U=class{constructor(e,r){b(this,"internalRouterSrvc");b(this,"renderer");b(this,"_template","");b(this,"_templateSubscription");this.internalRouterSrvc=e,this.renderer=r}beforeMount(){this._templateSubscription=this.internalRouterSrvc.getTemplate().subscribe(e=>{this._template=e,this.renderer.update()}),this.internalRouterSrvc.startHashChange()}mount(){const e=window.location.hash.replace(/^#/,"");this.internalRouterSrvc.navigateTo(e,null)}unmount(){this._templateSubscription(),this.internalRouterSrvc.stopHashChange()}render(){if(this._template){const e=[`${this._template}`];return e.raw=[`${this._template}`],L(e)}else return L``}};U=P([J({selector:"router-outlet",deps:[E,N]}),j("design:paramtypes",[E,N])],U);let T=class{constructor(e){b(this,"internalRouter");this.internalRouter=e}getCurrentRoute(){return this.internalRouter.getCurrentRoute()}navigateTo(e,r){this.internalRouter.navigateTo(e,r)}static registerRoutes(e,r=!1){if(Array.isArray(e)){for(const o of e)x.formatRoute(o);r&&x.preloadRoutes()}else throw Error("router.addRoutes: the parameter must be an array")}};T=P([M({deps:[E]}),j("design:paramtypes",[E])],T);const de=`@charset "UTF-8";@import"https://necolas.github.io/normalize.css/latest/normalize.css";/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */:root{--black: #000000;--white: #ffffff;--gray-25: #fcfcfd;--gray-50: #f9fafb;--gray-100: #f8f9fa;--gray-150: #e9ecef80;--gray-200: #e9ecef;--gray-300: #dee2e6;--gray-400: #ced4da;--gray-500: #adb5bd;--gray-600: #6c757d;--gray-700: #495057;--gray-800: #343a40;--gray-900: #212529;--theme: #2684ff;--theme75: #4c9aff;--body-background-color: var(--white);--background-color: var(--white);--font-color: var(--gray-900);--hover-color: var(--gray-150);--button-hover-color: var(--theme75);--border-color: var(--gray-400);--range-background-color: var(--gray-400);--th-background-color: var(--gray-200);--box-shadow: rgba(9, 30, 66, .25) 0px 1px 1px, rgba(9, 30, 66, .13) 0px 0px 1px 1px;--button-background-color: var(--gray-25);--font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--spacing: 1rem;--base: 16;--html-font-size: calc((var(--base) / 16) * 100%);--font-8: calc(8 / var(--base) * 1rem);--font-16: calc(16 / var(--base) * 1rem);--font-24: calc(24 / var(--base) * 1rem);--font-32: calc(32 / var(--base) * 1rem);--font-40: calc(40 / var(--base) * 1rem);--font-48: calc(48 / var(--base) * 1rem);--font-64: calc(64 / var(--base) * 1rem);--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--border-radius: 4px;--icon-checkmark: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");--icon-chevron: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");--icon-date: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'/%3E%3Cpath d='M16 2v4M8 2v4M3 10h18'/%3E%3C/svg%3E");--icon-time: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 6v6l4 2'/%3E%3C/svg%3E");--icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E")}::-webkit-backdrop{--backdrop-color: rgb(0 0 0/45%)}::backdrop{--backdrop-color: rgb(0 0 0/45%)}[data-theme=dark]{--body-background-color: var(--gray-900);--background-color: var(--gray-800);--button-background-color: var(--gray-800);--font-color: var(--gray-300);--hover-color: var(--gray-700);--border-color: var(--gray-600);--range-background-color: var(--gray-900);--th-background-color: var(--gray-700);--box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .3), 0 2px 6px 2px rgba(0, 0, 0, .15);--icon-checkmark: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='rgba(206, 212, 218, 0.999)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");--icon-chevron: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='rgba(206, 212, 218, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");--icon-date: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='rgba(206, 212, 218, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'/%3E%3Cpath d='M16 2v4M8 2v4M3 10h18'/%3E%3C/svg%3E");--icon-time: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='rgba(206, 212, 218, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 6v6l4 2'/%3E%3C/svg%3E");--icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(206, 212, 218, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E")}*,:after,:before{box-sizing:border-box;color:inherit;line-height:1.5}html{font-family:var(--font-family);font-size:var(--html-font-size);scroll-behavior:smooth}.layout{display:grid;grid-template-columns:1fr min(75rem,90%) 1fr}.layout.fluid{grid-template-columns:1fr 90% 1fr}.layout>*{grid-column:2}.layout>header{grid-column:1/-1}body{background-color:var(--body-background-color);color:var(--font-color);margin:0;padding:0}header{background-color:var(--background-color);box-shadow:var(--box-shadow)}header nav{display:flex;grid-column:2;justify-content:space-between}header nav ul{align-items:center;display:flex;list-style:none;margin:var(--spacing) 0;padding:0}header nav ul:not(:only-child):last-child{align-items:flex-end}header nav ul li a{border-radius:var(--border-radius);display:block;padding:calc(var(--spacing) * .5) var(--spacing);text-decoration:none}header nav ul li a:hover{background-color:var(--hover-color);cursor:pointer}header nav details{margin-bottom:0}header.fluid{display:block}header.fluid nav ul{margin:var(--spacing)}main{padding:var(--spacing) 0}article,code,output,section{display:block;margin-bottom:calc(var(--spacing) * 2);padding:var(--spacing)}[role=button],article,button,code,input,output,section,select,textarea{background-color:transparent;border:1px solid var(--border-color);border-radius:var(--border-radius)}section{background-color:var(--background-color);border-color:transparent;box-shadow:var(--box-shadow)}code,output{font-family:monospace}table{border-collapse:separate;border-spacing:0;width:100%;text-align:unset}thead tr th{background-color:var(--th-background-color);border-top:1px solid var(--border-color);font-weight:700}tr td,tr th{border-bottom:1px solid var(--border-color);padding:var(--spacing);text-align:inherit;vertical-align:middle}tfoot tr:first-child td{border-top:1px solid var(--border-color)}table.table-sticky tfoot td{background-color:var(--background-color)}table.table-sticky tfoot td,table.table-sticky thead th{position:-webkit-sticky;position:sticky;z-index:2}table.table-sticky thead th{top:0}table.table-sticky tfoot td{bottom:0}.table-responsive{overflow:auto}table.table-bordered{border-left:1px solid var(--border-color)}table.table-bordered tr td,table.table-bordered tr th,table.table-bordered *::part(table-cell){border-right:1px solid var(--border-color)}table.table-hover tr:hover,table.table-hover *::part(table-row):hover{background-color:var(--hover-color)}section .table-sticky table tfoot td,section .table-sticky table thead th{background-color:var(--background-color)}footer{grid-column:1/-1}[role=button],button,input,select,textarea{font-size:inherit;line-height:1.5;padding:calc(var(--spacing) * .5) var(--spacing)}input,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}input:where(:not([type="checkbox"]):not([type="radio"])),select,textarea{display:block;width:100%}input:is([type="checkbox"],[type="radio"]){-webkit-appearance:auto;-moz-appearance:auto;appearance:auto;height:calc(var(--spacing) * 1.25);margin-right:calc(var(--spacing) * .25);margin-top:calc(var(--spacing) * -.125);vertical-align:middle;width:calc(var(--spacing) * 1.25)}input[type=checkbox][role=switch]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--body-background-color);border:2px solid var(--border-color);border-radius:calc(var(--spacing) * 2);position:relative;width:calc(var(--spacing) * 2.1)}input[type=checkbox][role=switch]:checked{border-color:var(--theme)}input[type=checkbox][role=switch]:before{background-color:var(--border-color);border-radius:50%;content:"";height:1rem;margin-left:0;position:absolute;top:0;left:0;transition:left .1s ease-in-out;width:1rem}input[type=checkbox][role=switch]:checked:before{left:calc(var(--spacing) * 0)}input:is([type="date"],[type="datetime-local"],[type="month"],[type="week"],[type="time"]){background-size:var(--spacing) auto}input:is([type="date"],[type="datetime-local"],[type="month"],[type="week"],[type="time"])::-webkit-calendar-picker-indicator,input:is([type="date"],[type="datetime-local"],[type="month"],[type="week"],[type="time"])::-webkit-inner-spin-button{opacity:0}input:is([type="date"],[type="datetime-local"],[type="month"],[type="week"]){background-image:var(--icon-date)}input[type=time]{background-image:var(--icon-time)}input[type=file]{background-color:transparent;cursor:pointer;padding:0}input[type=file]::-webkit-file-upload-button{background-color:var(--body-background-color);border:none;color:var(--font-color);margin-right:var(--spacing);padding:calc(var(--spacing) * .5) var(--spacing)}input[type=file]::file-selector-button{background-color:var(--body-background-color);border:none;color:var(--font-color);margin-right:var(--spacing);padding:calc(var(--spacing) * .5) var(--spacing)}input[type=range]{background-color:var(--range-background-color);border:0;cursor:pointer;height:calc(var(--spacing) * .25);padding:0}input:is([type="date"],[type="datetime-local"],[type="month"],[type="week"],[type="time"]),select:not([multiple]){background-position:right var(--spacing) center;background-repeat:no-repeat}select:not([multiple]){background-image:var(--icon-chevron);background-position:right calc(var(--spacing) * .8) center}[role=button],button{background-color:var(--button-background-color);cursor:pointer;border-color:transparent;box-shadow:var(--box-shadow)}[role=button]:hover,button:hover{background-color:var(--hover-color)}[role=button][type=submit],button[type=submit]{background-color:var(--theme);border-color:var(--theme);color:var(--gray-100);box-shadow:none}button[type=submit]:hover{background-color:var(--theme75);border-color:var(--theme75)}details{margin-bottom:calc(var(--spacing) * 2)}details>summary{border:1px solid var(--border-color);border-radius:var(--border-radius);cursor:pointer;line-height:1.5;padding:calc(var(--spacing) * .5) var(--spacing)}details[open]>summary{border-bottom-left-radius:0;border-bottom-right-radius:0}details[open]>summary+*{border:1px solid var(--border-color);border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top:none;padding:calc(var(--spacing) * .5) var(--spacing)}@keyframes dialog-open{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}dialog{background-color:var(--background-color);border:0;border-radius:var(--border-radius);box-shadow:var(--box-shadow);padding:var(--spacing)}dialog[open]{-webkit-animation:dialog-open .45s ease normal;animation:dialog-open .45s ease normal}dialog::-webkit-backdrop{background-color:var(--backdrop-color)}dialog::backdrop{background-color:var(--backdrop-color)}details[role=listbox]{position:relative}details[role=listbox].disabled{cursor:not-allowed}details[role=listbox].disabled>summary{color:#0f0f0f4d;pointer-events:none}details[role=listbox]>summary{list-style:none;position:relative}details[role=listbox]>summary::-webkit-details-marker{display:none}details[role=listbox]>summary:after{background-image:var(--icon-chevron);background-position:50%;background-repeat:no-repeat;content:"";float:right;height:calc(var(--spacing) * 1.25);margin-left:calc(var(--spacing) * .625);margin-top:calc(var(--spacing) * .125);pointer-events:none;width:calc(var(--spacing) * 1.25)}details[role=listbox][open]>summary:before{background:transparent;bottom:0;content:" ";cursor:default;display:block;left:0;position:fixed;right:0;top:0;z-index:1}details[role=listbox][open]>summary:after{transform:rotate(180deg)}details[role=listbox][open]>summary+ul{display:initial}details[role=listbox] summary+ul{background-color:var(--background-color);display:none;left:0;list-style:none;margin:0;padding:0;position:absolute;right:0;top:auto;z-index:2}details[role=listbox] summary+ul.top{border-bottom:none;border-radius:2px 2px 0 0;border-top:1px solid var(--border-color)}details[role=listbox] summary+ul.hide{visibility:hidden}details[role=listbox] summary+ul li{box-sizing:border-box;padding:0}details[role=listbox] summary+ul li.filter{background-color:var(--option-hover-color);border-bottom:1px solid var(--border-color);padding:calc(var(--spacing) * .5) var(--spacing)}details[role=listbox] summary+ul li.filter input[type=search]{padding:4px;width:100%}details[role=listbox] summary+ul li.hide-item{display:none}details[role=listbox] summary+ul li input[type=checkbox],details[role=listbox] summary+ul li input[type=radio]{opacity:0;position:absolute}details[role=listbox] summary+ul li input[type=checkbox]:checked+label,details[role=listbox] summary+ul li input[type=radio]:checked+label{border-left-color:var(--option-selected-color)}details[role=listbox] summary+ul li input[type=checkbox]+label:before{background-color:#fff;border:1px solid;content:"";display:inline-block;height:20px;margin-right:4px;vertical-align:text-bottom;width:20px}details[role=listbox] summary+ul li input[type=checkbox]:checked+label:before{background-color:var(--option-selected-color);background-image:var(--checkmark);background-position:50%;background-repeat:no-repeat;background-size:.8rem auto;border:1px solid var(--option-selected-color)}details[role=listbox] summary+ul li label{border-left:3px solid transparent;cursor:pointer;display:block;padding:calc(var(--spacing) * .5) var(--spacing);position:relative;white-space:nowrap}details[role=listbox] summary+ul li label:hover{background-color:var(--option-hover-color)}details[role=listbox] summary+ul li a{display:block}details[role=listbox] summary+ul li a:hover{border-radius:0}details[aria-haspopup=true]{display:inline-block;position:relative}details[aria-haspopup=true] summary{cursor:pointer}details[aria-haspopup=true][open] summary:before{background-color:transparent;bottom:0;content:" ";cursor:default;display:block;left:0;position:fixed;right:0;top:0;z-index:1}details[aria-haspopup=true] summary+div{background-color:var(--primary);border:1px solid var(--border-color);border-radius:4px;margin:4px auto;padding:var(--spacing);position:absolute;z-index:2}:root{--star-size: 14px;--star-color: #ccc;--star-background: #fc0}.sticky-header{position:sticky;top:0}.logo{padding:0;display:flex;align-items:center}.logo img{width:100px;height:auto}.rating{--percent: calc(var(--rating) / 5 * 100%);display:inline-block;font-size:var(--star-size);line-height:1}.rating:before{content:"\\2605\\2605\\2605\\2605\\2605";letter-spacing:3px;font-family:Times;background:linear-gradient(90deg,var(--star-background) var(--percent),var(--star-color) var(--percent));-webkit-background-clip:text;-webkit-text-fill-color:transparent}.rating:after{content:attr(data-count);display:inline;margin-left:5px}.center{text-align:center}
`;var ue=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,he=(t,e,r,o)=>{for(var a=o>1?void 0:o?pe(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(a=(o?i(e,r,a):i(a))||a);return o&&a&&ue(e,r,a),a};let B=class{constructor(t){b(this,"routes",[{path:"",redirectTo:"/products"},{path:"/products",template:"<app-products></app-products>",templatePath:()=>$(()=>import("./index-12d84843.js"),["./index-12d84843.js","./app.service-9309052d.js"],import.meta.url)},{path:"/cart",template:"<app-cart></app-cart>",templatePath:()=>$(()=>import("./index-6453e0b0.js"),["./index-6453e0b0.js","./app.service-9309052d.js"],import.meta.url)}]);this.router=t,T.registerRoutes(this.routes,!1)}navigate(t,e){t.preventDefault(),this.router.navigateTo(e)}render(){return L`
      <div class="layout">
        <header class="layout sticky-header">
          <nav>
            <ul>
              <li>
                <a href="#" class="logo" onclick=${t=>this.navigate(t,"/products")}>
                  <img src="./images/logo.jpg" />
                </a>
              </li>
            </ul>
            <ul>
              <li><a href="#" onclick=${t=>this.navigate(t,"/products")}>Products</a></li>
              <li><a href="#" onclick=${t=>this.navigate(t,"/cart")}>Cart</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <router-outlet></router-outlet>
        </main>
      </div>
    `}};B=he([J({selector:"app-root",styles:de,root:!0,deps:[T]})],B);export{J as C,M as I,N as R,L as h};
