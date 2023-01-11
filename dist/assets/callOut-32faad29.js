import{s as e,B as i,i as d,p as r,q as o,T as l,m as t,F as s,n as m}from"./bannerComponents-b17e5c41.js";import{q as T,v as x,C as h,A as c}from"./index-24415fcf.js";import{T as p}from"./titleCallout-e41bbb77.js";import{p as O}from"./index-9076de00.js";const _=e.div`
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
`,g=e.div`
  color: ${o};
  height: auto;
  text-align: left;
  opacity: ${l};
  /* padding-bottom: 20px; */
  @media (min-width: ${i}px) {
    ${T};
  }
  @media (max-width: ${i}px) {
    ${x};
  }
`,u=a=>{const n=a.text?O(a.text):"Data fetch error in Text";return t(s,{children:t(h,{...a,children:m(_,{children:[t(p,{title:a.title}),t(c,{animateIn:"animate__fadeIn",delay:0,offset:60,children:t(g,{children:n})})]})})})};export{u as C};
