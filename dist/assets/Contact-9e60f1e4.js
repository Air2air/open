import{s as a,B as n,j as x,q as s,m as t,F as m,n as r,E as f}from"./bannerComponents-b17e5c41.js";import{k as C,l as p,q as u,v as T,C as $,S as d,b as E,B as I}from"./index-24415fcf.js";import{F as O}from"./fetch-c6cd0f13.js";import{B as b}from"./button-0aad5260.js";import"./buttonComponents-841b3e60.js";const l=250,y=a.div`
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
`,k=a.div`
  height: ${l}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,_=l*.8,v=a.div`
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
`,w=a.h2`
  color: ${e=>e.color===""||!e.color?x:e.color};
  @media (min-width: ${n}px) {
    ${C}
  }
  @media (max-width: ${n}px) {
    ${p}
  }
`,B=a.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${s};
`,F=a.a`
  color: ${s};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${n}px) {
    ${u}
    font-size: 1.2em;
  }
  @media (max-width: ${n}px) {
    ${T}
    font-size: 1.1em;
  }
`,L=(e,o)=>{const c=i=>"url(/images/content/"+i+")";return t(m,{children:t($,{backgroundColor:e.backgroundColor,children:r(y,{children:[r(k,{children:[t(w,{children:e.shortName}),t(B,{children:e.address}),t(d,{height:15,backgroundColor:e.backgroundColor}),t(b,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(d,{height:15,backgroundColor:e.backgroundColor}),t(F,{href:`mailto:${e.email}`,children:e.email})]}),t(v,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},o)})},D=({jsonFile:e})=>{const{data:o,loading:c,error:i}=O({file:e});return c?t("div",{children:"Loading..."}):i?r("div",{children:["Error: ",i.message]}):o&&o.length>0?o.map((h,g)=>t(L,{...h},g)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},R=()=>r(m,{children:[t(E,{pageVideo:769227014,overlayOpacity:.1,overlayColor:f}),t(I,{text:"contact"}),t(D,{jsonFile:"/data/contactContent.json"})]});export{R as default};
