import{s as n,B as a,C as f,g as x,h as C,d,q as p,t as u,j as t,F as m,a as I,b as r,S as s}from"./index-b394176e.js";import{B as T}from"./bannerImage-77dd2435.js";import{F as $,C as b,H as y}from"./heading-49ecc3d1.js";import{B as O}from"./button-8aa88109.js";const l=250,k=n.div`
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
`,w=n.div`
  height: ${l}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,E=l*.8,_=n.div`
  flex: 1;
  width: 100%;
  height: ${E}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${a}px) {
    display: inline-flex;
  }
  @media (max-width: ${a}px) {
    display: none;
  }
`,F=n.h2`
  color: ${e=>e.color===""||!e.color?f:e.color};
  @media (min-width: ${a}px) {
    ${x}
  }
  @media (max-width: ${a}px) {
    ${C}
  }
`,v=n.div`
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
    ${p}
    font-size: 1.2em;
  }
  @media (max-width: ${a}px) {
    ${u}
    font-size: 1.1em;
  }
`,B=(e,o)=>{const c=i=>"url(/images/content/"+i+")";return t(m,{children:t(I,{backgroundColor:e.backgroundColor,children:r(k,{children:[r(w,{children:[t(F,{children:e.shortName}),t(v,{children:e.address}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(O,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(L,{href:`mailto:${e.email}`,children:e.email})]}),t(_,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},o)})},N=({jsonFile:e})=>{const{data:o,loading:c,error:i}=$({file:e});return c?t(b,{}):i?r("div",{children:["Error: ",i.message]}):o&&o.length>0?o.map((g,h)=>t(B,{...g},h)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},S=()=>r(m,{children:[t(T,{pageImage:"banner_3.webp",overlayOpacity:.7,overlayColor:1}),t(y,{jsonFile:"/data/contactHeading.json"}),t(N,{jsonFile:"/data/contactContent.json"})]});export{S as default};
