import{s as a,B as n,C as m,d as g,j as t,b as i,F as l,r as f}from"./bannerCSS-7d27781b.js";import{$ as s,q as h,d as C,s as c,A as u,j as x,a0 as O,a1 as _,a2 as b,B as y,Y as T,e as E}from"./index-91a95fb3.js";import{B as I,v as o}from"./v4-12f13d6d.js";const r=210,k=e=>e.backgroundColor===1?x:e.backgroundColor===2?s:e.backgroundColor===3?O:e.backgroundColor===4?_:e.backgroundColor===5?b:e.backgroundColor,p=e=>{const d="url(/images/content/"+e.photo+")";return t($,{animateIn:"animate__fadeIn",delay:0,style:{background:k(e)},children:i(v,{children:[i(B,{children:[t(S,{children:e.shortName}),t(A,{children:e.address}),t("br",{}),t(I,{to:"https://www.linkedin.com/company/eleven-health",text:"Elevens.ai"}),t("br",{}),t(L,{href:`mailto:${e.email}`,children:e.email})]}),t(N,{className:"bgImage",style:{backgroundImage:d}})]})},e.id)},$=a(u)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,v=a.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${r}px;
  transition: all 500ms;
  background: none;
  &:hover {
    background: ${s};
    .bgImage {
      opacity: 1;
      filter: none;
    }
  }
  .bgImage {
    opacity: 0.8;
    filter: grayscale(100%);
  }
  @media (min-width: ${n}px) {
    width: ${m};
    margin: 40px 0;
  }
  @media (max-width: ${n}px) {
    width: ${g};
    margin: 10px 0;
  }
`,B=a.div`
  height: ${r}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,w=r*.8,N=a.div`
  flex: 1;
  width: 100%;
  height: ${w}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${n}px) {
    display: inline-flex;
  }
  @media (max-width: ${n}px) {
    display: none;
  }
`,S=a.h2`
  text-transform: uppercase;
  font-weight: ${h};
  color: ${e=>e.color===""||!e.color?C:e.color};
  @media (min-width: ${n}px) {
    font-size: 1.5em;
  }
  @media (max-width: ${n}px) {
    font-size: 1.3em;
  }
`,A=a.div`
  font-family: "Roboto", sans-serif;
    line-height: 1.6em;
  color: ${c};
`,L=a.a`
  font-family: "Roboto", sans-serif;
    font-size: 1.3em;
  line-height: 1.6em;
  color: ${c};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
`,R=[{id:o(),shortName:"Silicon Valley",address:"Stanford, California, United States",email:"info@elevens.ai",photo:"stanford.jpg",backgroundColor:1},{id:o(),shortName:"Silicon Valley North",address:"Toronto, Ontario, Canada",email:"info@elevens.ai",photo:"toronto.jpg",backgroundColor:2},{id:o(),shortName:"Silicon Hills	",address:"Austin, Texas, United States",email:"info@elevens.ai",photo:"austin.jpg",backgroundColor:3}],j=()=>t(l,{children:R.map(e=>f.createElement(p,{...e,key:e.id}))}),z=()=>i(l,{children:[t(y,{pageVideo:769227014,overlayOpacity:.1,overlayColor:T,typing:!0}),t(E,{text:"contact"}),t(j,{})]});export{z as default};
