import{s as e,B as i,C as d,d as r,j as t,F as o,b as l}from"./bannerCSS-18d11c47.js";import{z as s,V as m,D as T,E as x,a as h,A as c}from"./index-6ddabe69.js";import{T as O}from"./titleCallout-3e33033a.js";import{p}from"./index-be224f05.js";const E=e.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${i}px) {
    padding: 50px 0;
    /* width: ${d}; */
  }
  @media (max-width: ${i}px) {
    padding: 20px 0;
    /* width: ${r}; */
  }
  /* background: red;; */
`,_=e.div`
  color: ${s};
  height: auto;
  text-align: left;
  opacity: ${m};
  /* padding-bottom: 20px; */
  @media (min-width: ${i}px) {
    ${T};
  }
  @media (max-width: ${i}px) {
    ${x};
  }
`,u=a=>{const n=a.text?p(a.text):"Data fetch error in Text";return t(o,{children:t(h,{...a,children:l(E,{children:[t(O,{title:a.title}),t(c,{animateIn:"animate__fadeIn",delay:0,offset:60,children:t(_,{children:n})})]})})})};export{u as C};
