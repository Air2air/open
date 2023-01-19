import{R as qn,s as N,f as Re,B as y,g as vt,h as pt,i as Le,k as Qn,l as Jn,L as $e,m as Me,n as De,o as Fe,p as je,j as O,e as Lt,c as K,a as ze,q as Ye,r as Ue,d as Be,t as Y,u as He,v as We,w as Ge,x as Xe,y as Ke,z as Ve,D as qe,I as Qe,O as Zn,E as Je}from"./index-bae9db71.js";function wn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?wn(Object(e),!0).forEach(function(a){_(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):wn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Pt(t){return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pt(t)}function Ze(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function kn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ta(t,n,e){return n&&kn(t.prototype,n),e&&kn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function fn(t,n){return ea(t)||ra(t,n)||te(t,n)||oa()}function bt(t){return na(t)||aa(t)||te(t)||ia()}function na(t){if(Array.isArray(t))return Xt(t)}function ea(t){if(Array.isArray(t))return t}function aa(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ra(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function te(t,n){if(t){if(typeof t=="string")return Xt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Xt(t,n)}}function Xt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function ia(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var On=function(){},ln={},ne={},ee=null,ae={mark:On,measure:On};try{typeof window<"u"&&(ln=window),typeof document<"u"&&(ne=document),typeof MutationObserver<"u"&&(ee=MutationObserver),typeof performance<"u"&&(ae=performance)}catch{}var sa=ln.navigator||{},An=sa.userAgent,En=An===void 0?"":An,B=ln,h=ne,_n=ee,yt=ae;B.document;var F=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",re=~En.indexOf("MSIE")||~En.indexOf("Trident/"),xt,wt,kt,Ot,At,$="___FONT_AWESOME___",Kt=16,ie="fa",oe="svg-inline--fa",Q="data-fa-i2svg",Vt="data-fa-pseudo-element",fa="data-fa-pseudo-element-pending",cn="data-prefix",un="data-icon",Sn="fontawesome-i2svg",la="async",ca=["HTML","HEAD","STYLE","SCRIPT"],se=function(){try{return!0}catch{return!1}}(),g="classic",x="sharp",mn=[g,x];function gt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[g]}})}var lt=gt((xt={},_(xt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),_(xt,x,{fa:"solid",fass:"solid","fa-solid":"solid"}),xt)),ct=gt((wt={},_(wt,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_(wt,x,{solid:"fass"}),wt)),ut=gt((kt={},_(kt,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_(kt,x,{fass:"fa-solid"}),kt)),ua=gt((Ot={},_(Ot,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_(Ot,x,{"fa-solid":"fass"}),Ot)),ma=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,fe="fa-layers-text",da=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,va=gt((At={},_(At,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_(At,x,{900:"fass"}),At)),le=[1,2,3,4,5,6,7,8,9,10],pa=le.concat([11,12,13,14,15,16,17,18,19,20]),ba=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mt=new Set;Object.keys(ct[g]).map(mt.add.bind(mt));Object.keys(ct[x]).map(mt.add.bind(mt));var ga=[].concat(mn,bt(mt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V.GROUP,V.SWAP_OPACITY,V.PRIMARY,V.SECONDARY]).concat(le.map(function(t){return"".concat(t,"x")})).concat(pa.map(function(t){return"w-".concat(t)})),st=B.FontAwesomeConfig||{};function ha(t){var n=h.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function ya(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var xa=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];xa.forEach(function(t){var n=fn(t,2),e=n[0],a=n[1],r=ya(ha(e));r!=null&&(st[a]=r)})}var ce={styleDefault:"solid",familyDefault:"classic",cssPrefix:ie,replacementClass:oe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);var at=u(u({},ce),st);at.autoReplaceSvg||(at.observeMutations=!1);var d={};Object.keys(ce).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){at[t]=e,ft.forEach(function(a){return a(d)})},get:function(){return at[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){at.cssPrefix=n,ft.forEach(function(e){return e(d)})},get:function(){return at.cssPrefix}});B.FontAwesomeConfig=d;var ft=[];function wa(t){return ft.push(t),function(){ft.splice(ft.indexOf(t),1)}}var z=Kt,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ka(t){if(!(!t||!F)){var n=h.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=h.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(n,a),t}}var Oa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dt(){for(var t=12,n="";t-- >0;)n+=Oa[Math.random()*62|0];return n}function it(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function dn(t){return t.classList?it(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function ue(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Aa(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(ue(t[e]),'" ')},"").trim()}function $t(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function vn(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function Ea(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function _a(t){var n=t.transform,e=t.width,a=e===void 0?Kt:e,r=t.height,i=r===void 0?Kt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&re?f+="translate(".concat(n.x/z-a/2,"em, ").concat(n.y/z-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/z,"em), calc(-50% + ").concat(n.y/z,"em)) "):f+="translate(".concat(n.x/z,"em, ").concat(n.y/z,"em) "),f+="scale(".concat(n.size/z*(n.flipX?-1:1),", ").concat(n.size/z*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Sa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function me(){var t=ie,n=oe,e=d.cssPrefix,a=d.replacementClass,r=Sa;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Tn=!1;function Ut(){d.autoAddCss&&!Tn&&(ka(me()),Tn=!0)}var Ta={mixout:function(){return{dom:{css:me,insertCss:Ut}}},hooks:function(){return{beforeDOMElementCreation:function(){Ut()},beforeI2svg:function(){Ut()}}}},M=B||{};M[$]||(M[$]={});M[$].styles||(M[$].styles={});M[$].hooks||(M[$].hooks={});M[$].shims||(M[$].shims=[]);var R=M[$],de=[],Ia=function t(){h.removeEventListener("DOMContentLoaded",t),Nt=1,de.map(function(n){return n()})},Nt=!1;F&&(Nt=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),Nt||h.addEventListener("DOMContentLoaded",Ia));function Pa(t){F&&(Nt?setTimeout(t,0):de.push(t))}function ht(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?ue(t):"<".concat(n," ").concat(Aa(a),">").concat(i.map(ht).join(""),"</").concat(n,">")}function In(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Na=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Bt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?Na(e,r):e,f,l,c;for(a===void 0?(f=1,c=n[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,n[l],l,n);return c};function Ca(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function qt(t){var n=Ca(t);return n.length===1?n[0].toString(16):null}function Ra(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Pn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Qt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Pn(n);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(t,Pn(n)):R.styles[t]=u(u({},R.styles[t]||{}),i),t==="fas"&&Qt("fa",n)}var Et,_t,St,Z=R.styles,La=R.shims,$a=(Et={},_(Et,g,Object.values(ut[g])),_(Et,x,Object.values(ut[x])),Et),pn=null,ve={},pe={},be={},ge={},he={},Ma=(_t={},_(_t,g,Object.keys(lt[g])),_(_t,x,Object.keys(lt[x])),_t);function Da(t){return~ga.indexOf(t)}function Fa(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Da(r)?r:null}var ye=function(){var n=function(i){return Bt(Z,function(o,s,f){return o[f]=Bt(s,i,{}),o},{})};ve=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),pe=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),he=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in Z||d.autoFetchSvg,a=Bt(La,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});be=a.names,ge=a.unicodes,pn=Mt(d.styleDefault,{family:d.familyDefault})};wa(function(t){pn=Mt(t.styleDefault,{family:d.familyDefault})});ye();function bn(t,n){return(ve[t]||{})[n]}function ja(t,n){return(pe[t]||{})[n]}function q(t,n){return(he[t]||{})[n]}function xe(t){return be[t]||{prefix:null,iconName:null}}function za(t){var n=ge[t],e=bn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function H(){return pn}var gn=function(){return{prefix:null,iconName:null,rest:[]}};function Mt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?g:e,r=lt[a][t],i=ct[a][t]||ct[a][r],o=t in R.styles?t:null;return i||o||null}var Nn=(St={},_(St,g,Object.keys(ut[g])),_(St,x,Object.keys(ut[x])),St);function Dt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},_(n,g,"".concat(d.cssPrefix,"-").concat(g)),_(n,x,"".concat(d.cssPrefix,"-").concat(x)),n),o=null,s=g;(t.includes(i[g])||t.some(function(l){return Nn[g].includes(l)}))&&(s=g),(t.includes(i[x])||t.some(function(l){return Nn[x].includes(l)}))&&(s=x);var f=t.reduce(function(l,c){var m=Fa(d.cssPrefix,c);if(Z[c]?(c=$a[s].includes(c)?ua[s][c]:c,o=c,l.prefix=c):Ma[s].indexOf(c)>-1?(o=c,l.prefix=Mt(c,{family:s})):m?l.iconName=m:c!==d.replacementClass&&c!==i[g]&&c!==i[x]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var v=o==="fa"?xe(l.iconName):{},b=q(l.prefix,l.iconName);v.prefix&&(o=null),l.iconName=v.iconName||b||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!Z.far&&Z.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},gn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===x&&(Z.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=q(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=H()||"fas"),f}var Ya=function(){function t(){Ze(this,t),this.definitions={}}return ta(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),Qt(s,o[s]);var f=ut[g][s];f&&Qt(f,o[s]),ye()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];e[s]||(e[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(e[s][m]=l)}),e[s][f]=l}),e}}]),t}(),Cn=[],tt={},et={},Ua=Object.keys(et);function Ba(t,n){var e=n.mixoutsTo;return Cn=t,tt={},Object.keys(et).forEach(function(a){Ua.indexOf(a)===-1&&delete et[a]}),Cn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Pt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){tt[o]||(tt[o]=[]),tt[o].push(i[o])})}a.provides&&a.provides(et)}),e}function Jt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=tt[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function J(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=tt[t]||[];r.forEach(function(i){i.apply(null,e)})}function D(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return et[t]?et[t].apply(null,n):void 0}function Zt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||H();if(n)return n=q(e,n)||n,In(we.definitions,e,n)||In(R.styles,e,n)}var we=new Ya,Ha=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,J("noAuto")},Wa={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(J("beforeI2svg",n),D("pseudoElements2svg",n),D("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Pa(function(){Xa({autoReplaceSvgRoot:e}),J("watch",n)})}},Ga={icon:function(n){if(n===null)return null;if(Pt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:q(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Mt(n[0]);return{prefix:a,iconName:q(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(ma))){var r=Dt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=H();return{prefix:i,iconName:q(i,n)||n}}}},C={noAuto:Ha,config:d,dom:Wa,parse:Ga,library:we,findIconDefinition:Zt,toHtml:ht},Xa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?h:e;(Object.keys(R.styles).length>0||d.autoFetchSvg)&&F&&d.autoReplaceSvg&&C.dom.i2svg({node:a})};function Ft(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ht(a)})}}),Object.defineProperty(t,"node",{get:function(){if(F){var a=h.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ka(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(vn(o)&&e.found&&!a.found){var s=e.width,f=e.height,l={x:s/f/2,y:.5};r.style=$t(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Va(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function hn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,m=t.extra,v=t.watchable,b=v===void 0?!1:v,A=a.found?a:e,T=A.width,w=A.height,I=r==="fak",k=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),E={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(w)})},P=I&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/w*16*.0625,"em")}:{};b&&(E.attributes[Q]=""),f&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(c||dt())},children:[f]}),delete E.attributes.title);var S=u(u({},E),{},{prefix:r,iconName:i,main:e,mask:a,maskId:l,transform:o,symbol:s,styles:u(u({},P),m.styles)}),G=a.found&&e.found?D("generateAbstractMask",S)||{children:[],attributes:{}}:D("generateAbstractIcon",S)||{children:[],attributes:{}},X=G.children,Yt=G.attributes;return S.children=X,S.attributes=Yt,s?Va(S):Ka(S)}function Rn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[Q]="");var c=u({},o.styles);vn(r)&&(c.transform=_a({transform:r,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);var m=$t(c);m.length>0&&(l.style=m);var v=[];return v.push({tag:"span",attributes:l,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function qa(t){var n=t.content,e=t.title,a=t.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=$t(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Ht=R.styles;function tn(t){var n=t[0],e=t[1],a=t.slice(4),r=fn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var Qa={found:!1,width:512,height:512};function Ja(t,n){!se&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function nn(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=H()),new Promise(function(a,r){if(D("missingIconAbstract"),e==="fa"){var i=xe(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Ht[n]&&Ht[n][t]){var o=Ht[n][t];return a(tn(o))}Ja(t,n),a(u(u({},Qa),{},{icon:d.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}var Ln=function(){},en=d.measurePerformance&&yt&&yt.mark&&yt.measure?yt:{mark:Ln,measure:Ln},ot='FA "6.2.1"',Za=function(n){return en.mark("".concat(ot," ").concat(n," begins")),function(){return ke(n)}},ke=function(n){en.mark("".concat(ot," ").concat(n," ends")),en.measure("".concat(ot," ").concat(n),"".concat(ot," ").concat(n," begins"),"".concat(ot," ").concat(n," ends"))},yn={begin:Za,end:ke},Tt=function(){};function $n(t){var n=t.getAttribute?t.getAttribute(Q):null;return typeof n=="string"}function tr(t){var n=t.getAttribute?t.getAttribute(cn):null,e=t.getAttribute?t.getAttribute(un):null;return n&&e}function nr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function er(){if(d.autoReplaceSvg===!0)return It.replace;var t=It[d.autoReplaceSvg];return t||It.replace}function ar(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function rr(t){return h.createElement(t)}function Oe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?ar:rr:e;if(typeof t=="string")return h.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Oe(o,{ceFn:a}))}),r}function ir(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var It={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Oe(r),e)}),e.getAttribute(Q)===null&&d.keepOriginalSource){var a=h.createComment(ir(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~dn(e).indexOf(d.replacementClass))return It.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ht(s)}).join(`
`);e.setAttribute(Q,""),e.innerHTML=o}};function Mn(t){t()}function Ae(t,n){var e=typeof n=="function"?n:Tt;if(t.length===0)e();else{var a=Mn;d.mutateApproach===la&&(a=B.requestAnimationFrame||Mn),a(function(){var r=er(),i=yn.begin("mutate");t.map(r),i(),e()})}}var xn=!1;function Ee(){xn=!0}function an(){xn=!1}var Ct=null;function Dn(t){if(_n&&d.observeMutations){var n=t.treeCallback,e=n===void 0?Tt:n,a=t.nodeCallback,r=a===void 0?Tt:a,i=t.pseudoElementsCallback,o=i===void 0?Tt:i,s=t.observeMutationsRoot,f=s===void 0?h:s;Ct=new _n(function(l){if(!xn){var c=H();it(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!$n(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&$n(m.target)&&~ba.indexOf(m.attributeName))if(m.attributeName==="class"&&tr(m.target)){var v=Dt(dn(m.target)),b=v.prefix,A=v.iconName;m.target.setAttribute(cn,b||c),A&&m.target.setAttribute(un,A)}else nr(m.target)&&r(m.target)})}}),F&&Ct.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function or(){Ct&&Ct.disconnect()}function sr(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function fr(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Dt(dn(t));return r.prefix||(r.prefix=H()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ja(r.prefix,t.innerText)||bn(r.prefix,qt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function lr(t){var n=it(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||dt()):(n["aria-hidden"]="true",n.focusable="false")),n}function cr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=fr(t),a=e.iconName,r=e.prefix,i=e.rest,o=lr(t),s=Jt("parseNodeAttributes",{},t),f=n.styleParser?sr(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var ur=R.styles;function _e(t){var n=d.autoReplaceSvg==="nest"?Fn(t,{styleParser:!1}):Fn(t);return~n.extra.classes.indexOf(fe)?D("generateLayersText",t,n):D("generateSvgReplacementMutation",t,n)}var W=new Set;mn.map(function(t){W.add("fa-".concat(t))});Object.keys(lt[g]).map(W.add.bind(W));Object.keys(lt[x]).map(W.add.bind(W));W=bt(W);function jn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var e=h.documentElement.classList,a=function(m){return e.add("".concat(Sn,"-").concat(m))},r=function(m){return e.remove("".concat(Sn,"-").concat(m))},i=d.autoFetchSvg?W:mn.map(function(c){return"fa-".concat(c)}).concat(Object.keys(ur));i.includes("fa")||i.push("fa");var o=[".".concat(fe,":not([").concat(Q,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=it(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=yn.begin("onTree"),l=s.reduce(function(c,m){try{var v=_e(m);v&&c.push(v)}catch(b){se||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,m){Promise.all(l).then(function(v){Ae(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),c()})}).catch(function(v){f(),m(v)})})}function mr(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_e(t).then(function(e){e&&Ae([e],n)})}function dr(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Zt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Zt(r||{})),t(a,u(u({},e),{},{mask:r}))}}var vr=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?L:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,l=e.maskId,c=l===void 0?null:l,m=e.title,v=m===void 0?null:m,b=e.titleId,A=b===void 0?null:b,T=e.classes,w=T===void 0?[]:T,I=e.attributes,k=I===void 0?{}:I,E=e.styles,P=E===void 0?{}:E;if(n){var S=n.prefix,G=n.iconName,X=n.icon;return Ft(u({type:"icon"},n),function(){return J("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(v?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||dt()):(k["aria-hidden"]="true",k.focusable="false")),hn({icons:{main:tn(X),mask:f?tn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:G,transform:u(u({},L),r),symbol:o,title:v,maskId:c,titleId:A,extra:{attributes:k,styles:P,classes:w}})})}},pr={mixout:function(){return{icon:dr(vr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=jn,e.nodeCallback=mr,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?h:a,i=e.callback,o=i===void 0?function(){}:i;return jn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,m=a.maskId,v=a.extra;return new Promise(function(b,A){Promise.all([nn(r,s),c.iconName?nn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var w=fn(T,2),I=w[0],k=w[1];b([e,hn({icons:{main:I,mask:k},prefix:s,iconName:r,transform:f,symbol:l,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=$t(s);f.length>0&&(r.style=f);var l;return vn(o)&&(l=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},br={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ft({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(bt(i)).join(" ")},children:o}]})}}}},gr={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return Ft({type:"counter",content:e},function(){return J("beforeDOMElementCreation",{content:e,params:a}),qa({content:e.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(bt(s))}})})}}}},hr={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,v=a.styles,b=v===void 0?{}:v;return Ft({type:"text",content:e},function(){return J("beforeDOMElementCreation",{content:e,params:a}),Rn({content:e,transform:u(u({},L),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(d.cssPrefix,"-layers-text")].concat(bt(l))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(re){var l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/l,f=c.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Rn({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},yr=new RegExp('"',"ug"),zn=[1105920,1112319];function xr(t){var n=t.replace(yr,""),e=Ra(n,0),a=e>=zn[0]&&e<=zn[1],r=n.length===2?n[0]===n[1]:!1;return{value:qt(r?n[0]:n),isSecondary:a||r}}function Yn(t,n){var e="".concat(fa).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=it(t.children),o=i.filter(function(X){return X.getAttribute(Vt)===n})[0],s=B.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(da),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?x:g,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ct[v][f[2].toLowerCase()]:va[v][l],A=xr(m),T=A.value,w=A.isSecondary,I=f[0].startsWith("FontAwesome"),k=bn(b,T),E=k;if(I){var P=za(T);P.iconName&&P.prefix&&(k=P.iconName,b=P.prefix)}if(k&&!w&&(!o||o.getAttribute(cn)!==b||o.getAttribute(un)!==E)){t.setAttribute(e,E),o&&t.removeChild(o);var S=cr(),G=S.extra;G.attributes[Vt]=n,nn(k,b).then(function(X){var Yt=hn(u(u({},S),{},{icons:{main:X,mask:gn()},prefix:b,iconName:E,extra:G,watchable:!0})),j=h.createElement("svg");n==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=Yt.map(function(Ce){return ht(Ce)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function wr(t){return Promise.all([Yn(t,"::before"),Yn(t,"::after")])}function kr(t){return t.parentNode!==document.head&&!~ca.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Un(t){if(F)return new Promise(function(n,e){var a=it(t.querySelectorAll("*")).filter(kr).map(wr),r=yn.begin("searchPseudoElements");Ee(),Promise.all(a).then(function(){r(),an(),n()}).catch(function(){r(),an(),e()})})}var Or={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Un,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?h:a;d.searchPseudoElements&&Un(r)}}},Bn=!1,Ar={mixout:function(){return{dom:{unwatch:function(){Ee(),Bn=!0}}}},hooks:function(){return{bootstrap:function(){Dn(Jt("mutationObserverCallbacks",{}))},noAuto:function(){or()},watch:function(e){var a=e.observeMutationsRoot;Bn?an():Dn(Jt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Hn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Er={mixout:function(){return{parse:{transform:function(e){return Hn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Hn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(l," ").concat(c)},v={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:v};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},Wt={x:0,y:0,width:"100%",height:"100%"};function Wn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function _r(t){return t.tag==="g"?t.children:[t]}var Sr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Dt(r.split(" ").map(function(o){return o.trim()})):gn();return i.prefix||(i.prefix=H()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,l=i.width,c=i.icon,m=o.width,v=o.icon,b=Ea({transform:f,containerWidth:m,iconWidth:l}),A={tag:"rect",attributes:u(u({},Wt),{},{fill:"white"})},T=c.children?{children:c.children.map(Wn)}:{},w={tag:"g",attributes:u({},b.inner),children:[Wn(u({tag:c.tag,attributes:u(u({},c.attributes),b.path)},T))]},I={tag:"g",attributes:u({},b.outer),children:[w]},k="mask-".concat(s||dt()),E="clip-".concat(s||dt()),P={tag:"mask",attributes:u(u({},Wt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,I]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:_r(v)},P]};return a.push(S,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(k,")")},Wt)}),{children:a,attributes:r}}}},Tr={provides:function(n){var e=!1;B.matchMedia&&(e=B.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ir={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Pr=[Ta,pr,br,gr,hr,Or,Ar,Er,Sr,Tr,Ir];Ba(Pr,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;var rn=C.parse;C.findIconDefinition;C.toHtml;var Nr=C.icon;C.layer;C.text;C.counter;var p={},Cr={get exports(){return p},set exports(t){p=t}},Rr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Lr=Rr,$r=Lr;function Se(){}function Te(){}Te.resetWarningCache=Se;var Mr=function(){function t(a,r,i,o,s,f){if(f!==$r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function n(){return t}var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Te,resetWarningCache:Se};return e.PropTypes=e,e};Cr.exports=Mr();function Gn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function U(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Gn(Object(e),!0).forEach(function(a){nt(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Gn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Rt(t){return Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Rt(t)}function nt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Dr(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function Fr(t,n){if(t==null)return{};var e=Dr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function on(t){return jr(t)||zr(t)||Yr(t)||Ur()}function jr(t){if(Array.isArray(t))return sn(t)}function zr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Yr(t,n){if(t){if(typeof t=="string")return sn(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return sn(t,n)}}function sn(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Ur(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Br(t){var n,e=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,m=t.pulse,v=t.fixedWidth,b=t.inverse,A=t.border,T=t.listItem,w=t.flip,I=t.size,k=t.rotation,E=t.pull,P=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":v,"fa-inverse":b,"fa-border":A,"fa-li":T,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},nt(n,"fa-".concat(I),typeof I<"u"&&I!==null),nt(n,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),nt(n,"fa-pull-".concat(E),typeof E<"u"&&E!==null),nt(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(P).map(function(S){return P[S]?S:null}).filter(function(S){return S})}function Hr(t){return t=t-0,t===t}function Ie(t){return Hr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Wr=["style"];function Gr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Xr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=Ie(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?n[Gr(r)]=i:n[r]=i,n},{})}function Pe(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return Pe(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,l){var c=n.attributes[l];switch(l){case"class":f.attrs.className=c,delete n.attributes.class;break;case"style":f.attrs.style=Xr(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[Ie(l)]=c}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=Fr(e,Wr);return r.attrs.style=U(U({},r.attrs.style),o),t.apply(void 0,[n.tag,U(U({},r.attrs),s)].concat(on(a)))}var Ne=!1;try{Ne=!0}catch{}function Kr(){if(!Ne&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Xn(t){if(t&&Rt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(rn.icon)return rn.icon(t);if(t===null)return null;if(t&&Rt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Gt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?nt({},t,n):{}}var rt=qn.forwardRef(function(t,n){var e=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=Xn(e),c=Gt("classes",[].concat(on(Br(t)),on(i.split(" ")))),m=Gt("transform",typeof t.transform=="string"?rn.transform(t.transform):t.transform),v=Gt("mask",Xn(a)),b=Nr(l,U(U(U(U({},c),m),v),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!b)return Kr("Could not find icon",l),null;var A=b.abstract,T={ref:n};return Object.keys(t).forEach(function(w){rt.defaultProps.hasOwnProperty(w)||(T[w]=t[w])}),Vr(A[0],T)});rt.displayName="FontAwesomeIcon";rt.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};rt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Vr=Pe.bind(null,qn.createElement),Kn={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};const jt=70,zt=70,qr=N.div`
  width: 100%;
  background: ${Re};
  @media (min-width: ${y}px) {
    height: ${jt}px;
  }
  @media (max-width: ${y}px) {
    height: ${zt}px;
  }
  /* background-color: blue; */
`,Qr=N.div`
  margin: 0 auto;
  display: flex;
  /* justify-content: flex-end; */

  @media (min-width: ${y}px) {
    height: ${jt}px;
    width: ${vt};
  }
  @media (max-width: ${y}px) {
    height: ${zt}px;
    width: ${pt};
  }
  /* background-color: blue; */
`,Jr=N.div`
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 50%;
  color: ${Le};
  span {
    margin-left: 10px;
  }
  @media (min-width: ${y}px) {
    ${Qn};
    height: ${jt}px;
  }
  @media (max-width: ${y}px) {
    ${Jn};
    height: ${zt}px;
  }
  /* background: red; */
`,Zr=N($e)`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  transition: all 300ms;
  color: ${Me};
  background: ${De};
  span {
    margin-right: 10px;
  }
  &:hover {
    color: ${Fe};
    background: ${je};
  }
  @media (min-width: ${y}px) {
    height: ${jt}px;
    ${Qn};
  }
  @media (max-width: ${y}px) {
    height: ${zt}px;
    ${Jn};
  }
  /* background: red; */
`,si=t=>O(Lt,{children:O(qr,{children:K(Qr,{children:[K(Jr,{children:[O(rt,{icon:Kn,size:"xs"}),O("span",{children:t.currentPage})]}),K(Zr,{to:t.buttonTo,children:[K("span",{children:[t.buttonText," "]}),O(rt,{icon:Kn,size:"xs"})]})]})})}),fi=N.div`
  height: 100%;
  width: 100%;
  /* background-color: gold; */
`,li=N.div`
  margin: 0 auto;
  height: auto;
  min-height:120px;
  padding:40px 0;
  @media (min-width: ${y}px) {
    width: ${vt};
  }
  @media (max-width: ${y}px) {
    width: ${pt};
  }
  /* background: red; */
`;N.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${y}px) {
    padding: 50px 0;
    /* width: ${vt}; */
  }
  @media (max-width: ${y}px) {
    padding: 20px 0;
    /* width: ${pt}; */
  }
  /* background: red;; */
`;const ci=N.div`
  color: ${ze};
  height: auto;
  text-align: left;
  /* padding-bottom: 20px; */
  @media (min-width: ${y}px) {
    ${Ye};
  }
  @media (max-width: ${y}px) {
    ${Ue};
  }
`,ui=t=>O(Be,{...t,children:O("div",{style:{height:400}})}),mi=({file:t})=>{const[n,e]=Y.useState(null),[a,r]=Y.useState(!0),[i,o]=Y.useState(null),s={"Content-Type":"application/json",Accept:"application/json"};return Y.useEffect(()=>{(async()=>{try{const c=await(await fetch(t,{headers:s})).json();e(c)}catch(l){o(l)}finally{r(!1)}})()},[t]),{data:n,loading:a,error:i}},Vn=N.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  @media (min-width: ${y}px) {
    height: ${He}px;
    width: 100%;
  }
  @media (max-width: ${y}px) {
    height: ${We}px;
    width: 100%;
  }
  /* background: blue; */
`,ti=N.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${y}px) {
    height: 60%;
    width: ${vt};
  }
  @media (max-width: ${y}px) {
    height: 60%;
    width: ${pt};
  }
  /* background: green; */
`,ni=N.div`
  @media (min-width: ${y}px) {
    ${Ge};
    color:${Xe}
  }
  @media (max-width: ${y}px) {
    ${Ke}
  }
`,ei=N.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${y}px) {
    height: 40%;
    width: ${vt};
  }
  @media (max-width: ${y}px) {
    height: 40%;
    width: ${pt};
  }
  /* background: red; */
`,ai=N.div`
  height: auto;
  text-align: left;
  /* background: red; */
  @media (min-width: ${y}px) {
    ${Ve}
  }
  @media (max-width: ${y}px) {
    ${qe}
  }
`,di=({jsonFile:t})=>{const[n,e]=Y.useState([]),[a,r]=Y.useState(0);return Y.useEffect(()=>{(async()=>{const s=await(await fetch(t)).json();e(s)})()},[]),Y.useEffect(()=>{const i=setInterval(()=>{r(o=>(o+1)%n.length)},6e3);return()=>clearInterval(i)},[n]),n.length?K(Vn,{children:[O(ti,{children:O(ni,{className:"animate__animated animate__fadeInDown",children:n[a].title})}),O(ei,{children:O(ai,{className:"animate__animated animate__fadeInUp animate__delay-1s",children:n[a].subhead})})]}):O(Vn,{})},ri=({pageImage:t,overlayOpacity:n,overlayColor:e})=>{const a="url(/images/site/"+t+")";return K(Lt,{children:[O("div",{className:"animate__animated animate__fadeIn animate__delay-0s animate__faster",children:O(Qe,{style:{backgroundImage:a}})}),O(ii,{overlayOpacity:n,overlayColor:e})]})},ii=({overlayOpacity:t,overlayColor:n})=>O(Lt,{children:O(Zn,{style:{opacity:t,background:n}})}),vi=t=>O(Lt,{children:K(Je,{className:"animate__animated animate__fadeIn animate__delay-0s",children:[t.pageImage?O(ri,{...t}):"",O(Zn,{style:{opacity:t.overlayOpacity,background:t.overlayColor}})]})});export{vi as B,ui as C,mi as F,di as H,si as R,fi as a,li as b,ci as c};
