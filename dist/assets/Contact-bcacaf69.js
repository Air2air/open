import{s as a,B as n,C as f,G as u,H as C,d as m,p,q as T,j as t,F as g,a as b,b as r,S as s}from"./index-bbed2e0e.js";import{B as I}from"./bannerImage-8c1a29fc.js";import{F as $,C as w,H as y,R as d}from"./heading-b34a466f.js";import{B as O}from"./button-8b5a07d2.js";const l=250,k=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: ${l}px;
  transition: all 500ms;
  &:hover {
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
    padding: 20px 0;
  }
  @media (max-width: ${n}px) {
    padding: 0;
  }
  /* background: gold; */
`,E=a.div`
  height: ${l}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,_=l*.8,F=a.div`
  flex: 1;
  width: 100%;
  height: ${_}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${n}px) {
    display: inline-flex;
  }
  @media (max-width: ${n}px) {
    display: none;
  }
`,v=a.h2`
  color: ${e=>e.color===""||!e.color?f:e.color};
  @media (min-width: ${n}px) {
    ${u}
  }
  @media (max-width: ${n}px) {
    ${C}
  }
`,H=a.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${m};
`,B=a.a`
  color: ${m};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${n}px) {
    ${p}
    font-size: 1.2em;
  }
  @media (max-width: ${n}px) {
    ${T}
    font-size: 1.1em;
  }
`,L=(e,o)=>{const c=i=>"url(/images/content/"+i+")";return t(g,{children:t(b,{backgroundColor:e.backgroundColor,children:r(k,{children:[r(E,{children:[t(v,{children:e.shortName}),t(H,{children:e.address}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(O,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(B,{href:`mailto:${e.email}`,children:e.email})]}),t(F,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},o)})},N=({jsonFile:e})=>{const{data:o,loading:c,error:i}=$({file:e});return c?t(w,{}):i?r("div",{children:["Error: ",i.message]}):o&&o.length>0?o.map((h,x)=>t(L,{...h},x)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},R=()=>r(g,{children:[t(I,{pageImage:"banner_3.webp",overlayOpacity:.7,overlayColor:1}),t(y,{jsonFile:"/data/contactHeading.json"}),t(d,{buttonTo:"/home",buttonText:"Home"}),t(N,{jsonFile:"/data/contactContent.json"}),t(d,{buttonTo:"/home",buttonText:"Home"})]});export{R as default};
