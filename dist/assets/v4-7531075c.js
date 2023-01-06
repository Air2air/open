import{r as d,s,j as o,F as u,b as m}from"./bannerCSS-312176e4.js";import{f as p,a as g,g as L,h}from"./buttonCSS-4aba25bd.js";import{F as x}from"./index-e3d340cf.js";const y=n=>d.createElement("svg",{viewBox:"0 0 80 80",style:{enableBackground:"new 0 0 80 80"},xmlns:"http://www.w3.org/2000/svg",...n},d.createElement("g",{fill:"none",fillRule:"evenodd"},d.createElement("path",{d:"M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z",fill:"#444"}),d.createElement("path",{d:"M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z",fill:"#FFF"}))),_=n=>o(u,{children:o(C,{children:o("a",{href:n.to,children:m(E,{children:[o(y,{}),o("span",{children:n.text})]})})})}),C=s.div`
  height: ${p}px;
`,E=s.div`
  ${x};
  color: ${g};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${p}px;
  transition: all 300ms;
  text-transform: uppercase;
  background: ${L};
  &:hover {
    background: ${h};
  }
  span {
    margin-left: 8px;
  }
  .icon {
    height: 24px;
  }
`;let a;const U=new Uint8Array(16);function O(){if(!a&&(a=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(U)}const t=[];for(let n=0;n<256;++n)t.push((n+256).toString(16).slice(1));function T(n,e=0){return(t[n[e+0]]+t[n[e+1]]+t[n[e+2]]+t[n[e+3]]+"-"+t[n[e+4]]+t[n[e+5]]+"-"+t[n[e+6]]+t[n[e+7]]+"-"+t[n[e+8]]+t[n[e+9]]+"-"+t[n[e+10]]+t[n[e+11]]+t[n[e+12]]+t[n[e+13]]+t[n[e+14]]+t[n[e+15]]).toLowerCase()}const I=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),l={randomUUID:I};function w(n,e,c){if(l.randomUUID&&!e&&!n)return l.randomUUID();n=n||{};const i=n.random||(n.rng||O)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){c=c||0;for(let r=0;r<16;++r)e[c+r]=i[r];return e}return T(i)}export{_ as B,w as v};
