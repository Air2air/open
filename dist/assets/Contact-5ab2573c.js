import{s as n,B as a,n as u,o as C,C as T,G as f,H as p,d as m,p as I,q as b,j as t,F as h,b as i,S as c}from"./index-5c6e6edb.js";import{F as $,C as w,B as O,H as E,R as s}from"./bannerImage-564bd2e8.js";import{B as _}from"./button-adf5e639.js";import{a as y}from"./assignCalloutColor-1a909d64.js";const l=250,k=n.div`
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
`;n.div`
  margin: 0 auto;
  height: auto;
  min-height:200px;
  padding:40px 0;
  @media (min-width: ${a}px) {
    width: ${u};
  }
  @media (max-width: ${a}px) {
    width: ${C};
  }
  /* background: red; */
`;const H=n.div`
  height: ${l}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,N=l*.8,v=n.div`
  flex: 1;
  width: 100%;
  height: ${N}px;
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
  color: ${e=>e.color===""||!e.color?T:e.color};
  @media (min-width: ${a}px) {
    ${f}
  }
  @media (max-width: ${a}px) {
    ${p}
  }
`,B=n.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${m};
`,D=n.a`
  color: ${m};
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
    ${b}
    font-size: 1.1em;
  }
`,L=e=>{const o=r=>"url(/images/content/"+r+")";return t(h,{children:i(k,{style:{backgroundColor:y(e.backgroundColor)},children:[i(H,{children:[t(F,{children:e.shortName}),t(B,{children:e.address}),t(c,{height:15,backgroundColor:e.backgroundColor}),t(_,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(c,{height:15,backgroundColor:e.backgroundColor}),t(D,{href:`mailto:${e.email}`,children:e.email})]}),t(v,{className:"bgImage",style:{backgroundImage:o(e.photo)}})]})})},S=({jsonFile:e})=>{const{data:o,loading:r,error:d}=$({file:e});return r?t(w,{}):d?i("div",{children:["Error: ",d.message]}):o&&o.length>0?o.map((g,x)=>t(L,{...g},x)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},M=()=>i(h,{children:[t(O,{pageImage:"banner_3.webp",overlayOpacity:.1,overlayColor:1}),t(E,{jsonFile:"/data/contactHeading.json"}),t(s,{buttonTo:"/home",buttonText:"Home"}),t(S,{jsonFile:"/data/contactContent.json"}),t(s,{buttonTo:"/home",buttonText:"Home"})]});export{M as default};
