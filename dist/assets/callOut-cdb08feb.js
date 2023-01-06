import{s as e,B as a,C as o,d,j as t,F as l,b as r}from"./bannerCSS-312176e4.js";import{k as s,V as m,l as c,m as h,A as T}from"./index-679cdf5d.js";import{p as x}from"./index-e7ce6b91.js";import{T as p}from"./titleCallout-25dc8190.js";const g=250,I=i=>{const n=x(i.text);return t(l,{children:t(u,{style:{background:i.backgroundColor},children:r(O,{children:[t(p,{title:i.title}),t(T,{animateIn:"animate__fadeIn",delay:10,offset:60,children:t(C,{children:n})})]})})})},u=e.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  min-height: ${g}px;
`,O=e.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${a}px) {
    padding: 50px 0;
    width: ${o};
  }
  @media (max-width: ${a}px) {
    padding: 20px 0;
    width: ${d};
  }
  /* background: red;; */
`,C=e.div`
  color: ${s};
  height: auto;
  text-align: left;
  opacity: ${m};
  /* padding-bottom: 20px; */
  @media (min-width: ${a}px) {
    ${c};
  }
  @media (max-width: ${a}px) {
    ${h};
  }
`;export{I as C};
