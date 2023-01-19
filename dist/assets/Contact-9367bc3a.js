import{s as n,B as a,g as C,h as T,S as f,H as p,J as I,a as g,q as $,r as b,j as t,e as h,c as i,T as s}from"./index-de9958dc.js";import{F as O,C as w,B as E,H as _,R as d}from"./bannerImage-41857041.js";import{B as y}from"./button-9737b81d.js";import{a as k}from"./assignCalloutColor-d1fa8e08.js";const c=250,H=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: ${c}px;
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
    width: ${C};
  }
  @media (max-width: ${a}px) {
    width: ${T};
  }
  /* background: red; */
`;const N=n.div`
  height: ${c}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,v=c*.8,B=n.div`
  flex: 1;
  width: 100%;
  height: ${v}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${a}px) {
    display: inline-flex;
  }
  @media (max-width: ${a}px) {
    display: none;
  }
`,D=n.h2`
  color: ${e=>e.color===""||!e.color?f:e.color};
  @media (min-width: ${a}px) {
    ${p}
  }
  @media (max-width: ${a}px) {
    ${I}
  }
`,F=n.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${g};
`,L=n.a`
  color: ${g};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${a}px) {
    ${$}
    font-size: 1.2em;
  }
  @media (max-width: ${a}px) {
    ${b}
    font-size: 1.1em;
  }
`,S=e=>{const o=r=>"url(/images/content/"+r+")";return t(h,{children:i(H,{style:{backgroundColor:k(e.backgroundColor)},children:[i(N,{children:[t(D,{children:e.shortName}),t(F,{children:e.address}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(y,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(L,{href:`mailto:${e.email}`,children:e.email})]}),t(B,{className:"bgImage",style:{backgroundImage:o(e.photo)}})]})})},j=({jsonFile:e})=>{const{data:o,loading:r,error:l}=O({file:e});return r?t(w,{}):l?i("div",{children:["Error: ",l.message]}):o&&o.length>0?o.map((x,u)=>t(S,{...x},u)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},m="Contact Open",M=()=>i(h,{children:[t(E,{pageImage:"banner_3.webp",overlayOpacity:.1,overlayColor:1}),t(_,{jsonFile:"/data/contactHeading.json"}),t(d,{currentPage:m,buttonTo:"/home",buttonText:"Home"}),t(j,{jsonFile:"/data/contactContent.json"}),t(d,{currentPage:m,buttonTo:"/home",buttonText:"Home"})]});export{M as default};
