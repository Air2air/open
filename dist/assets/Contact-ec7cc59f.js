import{s as a,B as n,j as x,q as d,m as t,F as m,n as r,E as f}from"./bannerComponents-3c2cd0d6.js";import{k as C,l as p,q as u,v as T,C as $,S as s,B as E,b as I}from"./index-7bc0c802.js";import{C as O}from"./calloutComponents-5f96cb5f.js";import{F as b}from"./fetch-b3e5db23.js";import{B as k}from"./button-69b4d4a2.js";import"./buttonComponents-9f4b8032.js";const l=250,y=a.div`
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
`,_=a.div`
  height: ${l}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,w=l*.8,v=a.div`
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
`,B=a.h2`
  color: ${e=>e.color===""||!e.color?x:e.color};
  @media (min-width: ${n}px) {
    ${C}
  }
  @media (max-width: ${n}px) {
    ${p}
  }
`,F=a.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${d};
`,L=a.a`
  color: ${d};
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
`,D=(e,o)=>{const c=i=>"url(/images/content/"+i+")";return t(m,{children:t($,{backgroundColor:e.backgroundColor,children:r(y,{children:[r(_,{children:[t(B,{children:e.shortName}),t(F,{children:e.address}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(k,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(L,{href:`mailto:${e.email}`,children:e.email})]}),t(v,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},o)})},A=({jsonFile:e})=>{const{data:o,loading:c,error:i}=b({file:e});return c?t(O,{}):i?r("div",{children:["Error: ",i.message]}):o&&o.length>0?o.map((h,g)=>t(D,{...h},g)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},P=()=>r(m,{children:[t(E,{pageVideo:769227014,overlayOpacity:.1,overlayColor:f}),t(I,{text:"contact"}),t(A,{jsonFile:"/data/contactContent.json"})]});export{P as default};
