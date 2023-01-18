import{s as a,B as n,j as f,q as d,m as t,F as m,n as r}from"./bannerComponents-a40a04da.js";import{F as x,C,B as p,H as u}from"./heading-87398593.js";import{B as T}from"./button-cbe49178.js";import{h as $,i as I,b,c as y,C as E,S as s}from"./index-e8aebce2.js";import"./buttonComponents-89de562b.js";const l=250,O=a.div`
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
    ${$}
  }
  @media (max-width: ${n}px) {
    ${I}
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
    ${b}
    font-size: 1.2em;
  }
  @media (max-width: ${n}px) {
    ${y}
    font-size: 1.1em;
  }
`,D=(e,o)=>{const c=i=>"url(/images/content/"+i+")";return t(m,{children:t(E,{backgroundColor:e.backgroundColor,children:r(O,{children:[r(k,{children:[t(F,{children:e.shortName}),t(v,{children:e.address}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(T,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(B,{href:`mailto:${e.email}`,children:e.email})]}),t(_,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},o)})},L=({jsonFile:e})=>{const{data:o,loading:c,error:i}=x({file:e});return c?t(C,{}):i?r("div",{children:["Error: ",i.message]}):o&&o.length>0?o.map((h,g)=>t(D,{...h},g)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},R=()=>r(m,{children:[t(p,{pageVideo:769227014,overlayOpacity:.1,overlayColor:1}),t(u,{jsonFile:"/data/contactHeading.json"}),t(L,{jsonFile:"/data/contactContent.json"})]});export{R as default};
