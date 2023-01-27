import{r as T,c as Q,s as X,C as Z,B as $,a as ee,F as te,b as ne,d as re,j as R,e as W,f as oe}from"./index-bdf34af6.js";const ie=({file:v})=>{const[w,M]=T.useState(null),[S,t]=T.useState(!0),[l,n]=T.useState(null),a={"Content-Type":"application/json",Accept:"application/json"};return T.useEffect(()=>{(async()=>{try{const p=await(await fetch(v,{headers:a})).json();M(p)}catch(u){n(u)}finally{t(!1)}})()},[v]),{data:w,loading:S,error:l}};var A={},ae={get exports(){return A},set exports(v){A=v}};(function(v,w){(function(S,t){v.exports=t(T)})(typeof self<"u"?self:Q,function(M){return function(S){var t={};function l(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return S[n].call(a.exports,a,a.exports,l),a.l=!0,a.exports}return l.m=S,l.c=t,l.d=function(n,a,g){l.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:g})},l.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,a){if(1&a&&(n=l(n)),8&a||4&a&&typeof n=="object"&&n&&n.__esModule)return n;var g=Object.create(null);if(l.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:n}),2&a&&typeof n!="string")for(var u in n)l.d(g,u,function(p){return n[p]}.bind(null,u));return g},l.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(a,"a",a),a},l.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},l.p="",l(l.s=3)}([function(S,t){S.exports=M},function(S,t,l){function n(s){return(n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(s)}function a(s,r){if(!(s instanceof r))throw new TypeError("Cannot call a class as a function")}function g(s,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(r&&r.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),r&&u(s,r)}function u(s,r){return(u=Object.setPrototypeOf||function(c,d){return c.__proto__=d,c})(s,r)}function p(s){var r=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var c,d=P(s);if(r){var m=P(this).constructor;c=Reflect.construct(d,arguments,m)}else c=d.apply(this,arguments);return y(this,c)}}function y(s,r){return!r||n(r)!=="object"&&typeof r!="function"?function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(s):r}function P(s){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(s)}var x=this&&this.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var j=x(l(0)),I=function(s){g(i,s);var r=p(i);function i(){return a(this,i),r.apply(this,arguments)}return i}(j.default.Component);t.Parallax=I;var h=function(s){g(i,s);var r=p(i);function i(){return a(this,i),r.apply(this,arguments)}return i}(j.default.Component);t.Background=h},function(S,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(n){if(!n)return 0;var a=window,g=document,u=g.documentElement,p=g.getElementsByTagName("body")[0];return a.innerHeight||u.clientHeight||p.clientHeight},t.isScrolledIntoView=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,g=arguments.length>2?arguments[2]:void 0;if(!g)return!1;var u=n.getBoundingClientRect().top-a,p=n.getBoundingClientRect().bottom+a;return u<=t.getWindowHeight(g)&&p>=0},t.getNodeHeight=function(n,a){return n?a&&"clientHeight"in a?a.clientHeight:t.getWindowHeight(n):0},t.canUseDOM=function(){return!(typeof window>"u"||!window.document||!window.document.createElement)}},function(S,t,l){var n=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var a=n(l(4));t.Parallax=a.default;var g=n(l(7));t.Background=g.default},function(S,t,l){function n(c){return(n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m})(c)}function a(c,d){for(var m=0;m<d.length;m++){var f=d[m];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(c,f.key,f)}}function g(c,d){return(g=Object.setPrototypeOf||function(f,e){return f.__proto__=e,f})(c,d)}function u(c){var d=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var f,e=y(c);if(d){var o=y(this).constructor;f=Reflect.construct(e,arguments,o)}else f=e.apply(this,arguments);return p(this,f)}}function p(c,d){return!d||n(d)!=="object"&&typeof d!="function"?function(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}(c):d}function y(c){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(m){return m.__proto__||Object.getPrototypeOf(m)})(c)}var P=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(t,"__esModule",{value:!0});var x=P(l(0)),j=l(1),I=l(5),h=l(2),s=P(l(6)),r={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},i=function(c){(function(e,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&g(e,o)})(m,c);var d=u(m);function m(f){var e;return function(b,_){if(!(b instanceof _))throw new TypeError("Cannot call a class as a function")}(this,m),(e=d.call(this,f)).onWindowResize=function(){e.parentHeight=h.getNodeHeight(e.canUseDOM,e.parent),e.updatePosition()},e.onWindowLoad=function(){e.updatePosition()},e.onScroll=function(){if(e.canUseDOM){var o=Date.now();o-e.timestamp>=10&&h.isScrolledIntoView(e.node,100,e.canUseDOM)&&(window.requestAnimationFrame(e.updatePosition),e.timestamp=o)}},e.onContentMount=function(o){e.content=o},e.updatePosition=function(){if(e.content){var o=!1;e.contentHeight=e.content.getBoundingClientRect().height,e.contentWidth=e.node.getBoundingClientRect().width,e.img&&e.img.naturalWidth/e.img.naturalHeight<e.contentWidth/e.getImageHeight()&&(o=!0);var b=I.getRelativePosition(e.node,e.canUseDOM),_=!!e.img,O=e.bg&&e.state.splitChildren.bgChildren.length>0;_&&e.setImagePosition(b,o),O&&e.setBackgroundPosition(b),_||O||e.setState({percentage:b})}},e.state={bgImage:f.bgImage,bgImageSrcSet:f.bgImageSrcSet,bgImageSizes:f.bgImageSizes,imgStyle:r,bgStyle:Object.assign(Object.assign({},r),f.bgStyle),percentage:0,splitChildren:I.getSplitChildren(f)},e.canUseDOM=h.canUseDOM(),e.node=null,e.content=null,e.bgImageLoaded=!1,e.bgImageRef=void 0,e.parent=f.parent,e.parentHeight=h.getNodeHeight(e.canUseDOM,e.parent),e.timestamp=Date.now(),e.isDynamicBlur=I.getHasDynamicBlur(f.blur),e}return function(e,o,b){return o&&a(e.prototype,o),b&&a(e,b),e}(m,[{key:"componentDidMount",value:function(){var e=this.props.parent,o=this.state,b=o.bgImage,_=o.bgImageSrcSet,O=o.bgImageSizes;this.parent=e||document,this.addListeners(),b?this.loadImage(b,_,O):this.updatePosition()}},{key:"componentDidUpdate",value:function(e){var o=this.props,b=o.parent,_=o.bgImage,O=o.bgImageSrcSet,C=o.bgImageSizes,E=this.state.bgImage;e.parent!==b&&(this.removeListeners(this.parent),this.parent=b,b&&this.addListeners()),this.parentHeight=h.getNodeHeight(this.canUseDOM,this.parent),E!==_&&this.loadImage(_,O,C)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(e){var o=this.props,b=o.disabled,_=o.strength,O=Object.assign({},this.state.bgStyle);if(!b){var C="translate3d(-50%, ".concat((_<0?_:0)-_*e,"px, 0)");O.WebkitTransform=C,O.transform=C}this.setState({bgStyle:O,percentage:e})}},{key:"setImagePosition",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],b=this.props,_=b.disabled,O=b.strength,C=b.blur,E=o?"auto":"".concat(this.getImageHeight(),"px"),L=o?"".concat(this.contentWidth,"px"):"auto",k=Object.assign(Object.assign({},this.state.imgStyle),{height:E,width:L});if(!_){var z=O<0,D=(z?O:0)-O*e,N="translate3d(-50%, ".concat(D,"px, 0)"),B="none";C&&(B="blur(".concat(I.getBlurValue(this.isDynamicBlur,C,e),"px)")),k.WebkitTransform=N,k.transform=N,k.WebkitFilter=B,k.filter=B}this.setState({imgStyle:k,percentage:e})}},{key:"getImageHeight",value:function(){var e=this.props.strength,o=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+o)}},{key:"loadImage",value:function(e,o,b){var _=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(O){_.setState({bgImage:e,bgImageSrcSet:o,bgImageSizes:b},function(){return _.updatePosition()}),_.props.onLoad&&_.props.onLoad(O)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=o||"",this.bgImageRef.sizes=b||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var e=this,o=this.props,b=o.className,_=o.style,O=o.bgClassName,C=o.contentClassName,E=o.bgImageAlt,L=o.renderLayer,k=o.bgImageStyle,z=o.lazy,D=this.state,N=D.bgImage,B=D.bgImageSrcSet,Y=D.bgImageSizes,K=D.percentage,q=D.imgStyle,J=D.bgStyle,U=D.splitChildren;return x.default.createElement("div",{className:"react-parallax ".concat(b),style:Object.assign({position:"relative",overflow:"hidden"},_),ref:function(H){e.node=H}},N?x.default.createElement("img",{className:O,src:N,srcSet:B,sizes:Y,ref:function(H){e.img=H},alt:E,style:Object.assign(Object.assign({},q),k),loading:z?"lazy":"eager"}):null,L?L(-(K-1)):null,U.bgChildren.length>0?x.default.createElement("div",{className:"react-parallax-background-children",ref:function(H){e.bg=H},style:J},U.bgChildren):null,x.default.createElement(s.default,{onMount:this.onContentMount,className:C},U.children))}}],[{key:"getDerivedStateFromProps",value:function(e){return{splitChildren:I.getSplitChildren(e)}}}]),m}(j.Parallax);i.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=i},function(S,t,l){function n(u){return(n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y})(u)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var a=l(0),g=l(2);t.getPercentage=function(u,p,y){return(y-u)/(p-u)||0},t.getRelativePosition=function(u,p){if(!p)return 0;var y=u.getBoundingClientRect(),P=y.top,x=y.height,j=g.getNodeHeight(p),I=x>j?x:j,h=Math.round(P>I?I:P);return t.getPercentage(0,I,h)},t.getSplitChildren=function(u){var p=[],y=a.Children.toArray(u.children);return y.forEach(function(P,x){var j=P;j.type&&j.type.isParallaxBackground&&(p=p.concat(y.splice(x,1)))}),{bgChildren:p,children:y}},t.getHasDynamicBlur=function(u){return n(u)==="object"&&u.min!==void 0&&u.max!==void 0},t.getBlurValue=function(u,p,y){return u?p.min+(1-y)*p.max:p},t.setBlur=function(u,p){u.style.webkitFilter="blur(".concat(p,"px)"),u.style.filter="blur(".concat(p,"px)")}},function(S,t,l){var n=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(l(0));t.default=function(u){var p=u.children,y=u.onMount,P=u.className;return a.default.createElement("div",{ref:function(j){return y(j)},className:P||"react-parallax-content",style:{position:"relative"}},p)}},function(S,t,l){function n(h){return(n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(h)}function a(h,s){if(!(h instanceof s))throw new TypeError("Cannot call a class as a function")}function g(h,s){for(var r=0;r<s.length;r++){var i=s[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(h,i.key,i)}}function u(h,s){return(u=Object.setPrototypeOf||function(i,c){return i.__proto__=c,i})(h,s)}function p(h){var s=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var i,c=P(h);if(s){var d=P(this).constructor;i=Reflect.construct(c,arguments,d)}else i=c.apply(this,arguments);return y(this,i)}}function y(h,s){return!s||n(s)!=="object"&&typeof s!="function"?function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(h):s}function P(h){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(h)}var x=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(t,"__esModule",{value:!0});var j=x(l(0)),I=function(h){(function(c,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(d&&d.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),d&&u(c,d)})(r,h);var s=p(r);function r(){return a(this,r),s.apply(this,arguments)}return function(c,d,m){return d&&g(c.prototype,d),m&&g(c,m),c}(r,[{key:"render",value:function(){var c=this.props,d=c.className,m=c.children;return j.default.createElement("div",{className:"react-parallax-background ".concat(d)},m)}}]),r}(l(1).Background);I.defaultProps={className:""},I.isParallaxBackground=!0,t.default=I}])})})(ae);const se=X.div`
  position: "absolute";
  width: 100%;
`,V=.5,G=.9,ce=v=>{const w=Math.round(v*1e3)/1e3;if(w<V)return w;if(w>V&&w<G)return w*2;if(w>G)return 1},ue=v=>{function w(t){return Math.round(t*1e3)/600}function M(t){return t==="left"?`-${w(v.percentage)*v.translateX}%`:`${w(v.percentage)*v.translateX}%`}function S(t){return t==="top"?`${w(v.percentage)*v.translateY}%`:`-${w(v.percentage)*v.translateY}%`}return R(W,{children:R("div",{style:{position:"absolute",left:M(v.fromX),top:S(v.fromY),opacity:ce(v.percentage)},children:R(le,{style:{color:v.color},children:v.text})})})},le=X.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  /* background-color: hsla(0, 0%, 10%, 0.7); */
  /* color: ${Z}; */
  @media (min-width: ${$}px) {
    width: auto; //${ee};
    ${te};
  }
  @media (max-width: ${$}px) {
    width: auto; //${ne};
    ${re};
  }
  /* background: green; */
`,fe=({jsonFile:v})=>{const{data:w,loading:M,error:S}=ie({file:v});return M?null:S?oe("div",{children:["Error: ",S.message]}):R(W,{children:w.map((t,l)=>R("div",{style:{position:"relative"},children:R(A.Parallax,{bgImage:t.imageBackground,strength:t.strength,bgImageStyle:{backgroundSize:"cover"},renderLayer:n=>R(W,{children:t.title&&t.title.map((a,g)=>R(ue,{...a,percentage:n},g))}),children:R(se,{style:{height:t.height}})},l)},l))})},de=()=>R(W,{children:R(fe,{jsonFile:"/data/homeContent.json"})});export{de as default};