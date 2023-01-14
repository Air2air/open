import{s as a,B as n,j as f,q as d,m as t,F as m,n as r}from"./bannerComponents-cd50e550.js";import{F as x,B as C}from"./fetch-583f3b21.js";import{C as p}from"./calloutComponents-9d800c0f.js";import{B as u}from"./button-f513da1a.js";import{f as T,g as $,j as I,k,C as y,S as s}from"./index-b9c5e089.js";import{H as E}from"./heading-18346d13.js";import"./buttonComponents-8c20dc27.js";const l=250,O=a.div`
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
`,b=a.div`
  height: ${l}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,w=l*.8,_=a.div`
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
`,F=a.h2`
  color: ${e=>e.color===""||!e.color?f:e.color};
  @media (min-width: ${n}px) {
    ${T}
  }
  @media (max-width: ${n}px) {
    ${$}
  }
`,v=a.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${d};
`,B=a.a`
  color: ${d};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${n}px) {
    ${I}
    font-size: 1.2em;
  }
  @media (max-width: ${n}px) {
    ${k}
    font-size: 1.1em;
  }
`,D=(e,o)=>{const c=i=>"url(/images/content/"+i+")";return t(m,{children:t(y,{backgroundColor:e.backgroundColor,children:r(O,{children:[r(b,{children:[t(F,{children:e.shortName}),t(v,{children:e.address}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(u,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(B,{href:`mailto:${e.email}`,children:e.email})]}),t(_,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},o)})},L=({jsonFile:e})=>{const{data:o,loading:c,error:i}=x({file:e});return c?t(p,{}):i?r("div",{children:["Error: ",i.message]}):o&&o.length>0?o.map((g,h)=>t(D,{...g},h)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},P=()=>r(m,{children:[t(C,{pageVideo:769227014,overlayOpacity:.1,overlayColor:1}),t(E,{jsonFile:"/data/contactHeading.json"}),t(L,{jsonFile:"/data/contactContent.json"})]});export{P as default};
