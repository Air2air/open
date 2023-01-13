import{s as n,B as a,j as f,q as d,m as t,F as m,n as r,E as x}from"./bannerComponents-2e57662a.js";import{f as C,g as p,j as u,k as T,C as $,S as s,B as E}from"./index-702dcae0.js";import{C as I}from"./calloutComponents-10ea915f.js";import{F as O}from"./fetch-9100cff1.js";import{B as k}from"./button-ffc5c0c2.js";import{H as y}from"./heading-e9117604.js";import"./buttonComponents-6d835e97.js";const l=250,b=n.div`
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
  @media (min-width: ${a}px) {
    padding: 20px 0;
  }
  @media (max-width: ${a}px) {
    padding: 0;
  }
  /* background: gold; */
`,_=n.div`
  height: ${l}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,w=l*.8,F=n.div`
  flex: 1;
  width: 100%;
  height: ${w}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${a}px) {
    display: inline-flex;
  }
  @media (max-width: ${a}px) {
    display: none;
  }
`,v=n.h2`
  color: ${e=>e.color===""||!e.color?f:e.color};
  @media (min-width: ${a}px) {
    ${C}
  }
  @media (max-width: ${a}px) {
    ${p}
  }
`,B=n.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${d};
`,L=n.a`
  color: ${d};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${a}px) {
    ${u}
    font-size: 1.2em;
  }
  @media (max-width: ${a}px) {
    ${T}
    font-size: 1.1em;
  }
`,D=(e,o)=>{const c=i=>"url(/images/content/"+i+")";return t(m,{children:t($,{backgroundColor:e.backgroundColor,children:r(b,{children:[r(_,{children:[t(v,{children:e.shortName}),t(B,{children:e.address}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(k,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(L,{href:`mailto:${e.email}`,children:e.email})]}),t(F,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},o)})},j=({jsonFile:e})=>{const{data:o,loading:c,error:i}=O({file:e});return c?t(I,{}):i?r("div",{children:["Error: ",i.message]}):o&&o.length>0?o.map((g,h)=>t(D,{...g},h)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},U=()=>r(m,{children:[t(E,{pageVideo:769227014,overlayOpacity:.1,overlayColor:x}),t(y,{jsonFile:"/data/contactHeading.json"}),t(j,{jsonFile:"/data/contactContent.json"})]});export{U as default};
