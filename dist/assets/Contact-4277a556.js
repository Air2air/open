import{s as n,B as a,j as f,q as d,m as t,F as m,n as r,E as x}from"./bannerComponents-cd50e550.js";import{F as C,B as p}from"./fetch-639c3ff0.js";import{C as u}from"./calloutComponents-17a144d5.js";import{B as T}from"./button-83b5bcdb.js";import{f as $,g as E,j as I,k as O,C as k,S as s}from"./index-da42b55a.js";import{H as y}from"./heading-b37d757f.js";import"./buttonComponents-c47ebf73.js";const l=250,b=n.div`
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
    ${$}
  }
  @media (max-width: ${a}px) {
    ${E}
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
    ${I}
    font-size: 1.2em;
  }
  @media (max-width: ${a}px) {
    ${O}
    font-size: 1.1em;
  }
`,D=(e,o)=>{const c=i=>"url(/images/content/"+i+")";return t(m,{children:t(k,{backgroundColor:e.backgroundColor,children:r(b,{children:[r(_,{children:[t(v,{children:e.shortName}),t(B,{children:e.address}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(T,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(L,{href:`mailto:${e.email}`,children:e.email})]}),t(F,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},o)})},j=({jsonFile:e})=>{const{data:o,loading:c,error:i}=C({file:e});return c?t(u,{}):i?r("div",{children:["Error: ",i.message]}):o&&o.length>0?o.map((g,h)=>t(D,{...g},h)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},U=()=>r(m,{children:[t(p,{pageVideo:769227014,overlayOpacity:.1,overlayColor:x}),t(y,{jsonFile:"/data/contactHeading.json"}),t(j,{jsonFile:"/data/contactContent.json"})]});export{U as default};
