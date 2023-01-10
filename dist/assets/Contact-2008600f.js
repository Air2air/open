import{s as o,B as a,b as n,F as r,j as t}from"./bannerCSS-18d11c47.js";import{C as f,v as u,w as p,z as g,D as C,E as T,B as l,e as y,N as $,a as O,S as m}from"./index-d98062c6.js";import{u as E,B as h}from"./bannerLoading-e638e11a.js";import{B as I}from"./button-6b39eadd.js";import"./buttonComponents-a7f8a55b.js";const d=250,b=o.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: ${d}px;
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
    padding:20px 0;
  }
  @media (max-width: ${a}px) {
    padding:0;
  }
  /* background: gold; */
`,w=o.div`
  height: ${d}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,_=d*.8,k=o.div`
  flex: 1;
  width: 100%;
  height: ${_}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${a}px) {
    display: inline-flex;
  }
  @media (max-width: ${a}px) {
    display: none;
  }
`,B=o.h2`
  color: ${i=>i.color===""||!i.color?f:i.color};
  @media (min-width: ${a}px) {
    ${u}
  }
  @media (max-width: ${a}px) {
    ${p}
  }
`,v=o.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${g};
`,N=o.a`
  color: ${g};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${a}px) {
    ${C}
    font-size: 1.2em;
  }
  @media (max-width: ${a}px) {
    ${T}
    font-size: 1.1em;
  }
`,A="/data/dataContact.json",D="contact",R=()=>{const i=async()=>(await fetch(A,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:c,status:s}=E(D,i),x=e=>"url(/images/content/"+e+")";return n(r,{children:[s==="error"&&n(r,{children:[t(h,{}),t(l,{text:"error"})]}),s==="loading"&&n(r,{children:[t(h,{}),t(l,{text:"casestudies"})]}),s==="success"&&n(r,{children:[t(y,{pageVideo:769227014,overlayOpacity:.1,overlayColor:$,typing:!0}),t(l,{text:"contact"}),c&&c.length>0?c.map(e=>t(O,{backgroundColor:e.backgroundColor,children:n(b,{children:[n(w,{children:[t(B,{children:e.shortName}),t(v,{children:e.address}),t(m,{height:15,backgroundColor:e.backgroundColor}),t(I,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(m,{height:15,backgroundColor:e.backgroundColor}),t(N,{href:`mailto:${e.email}`,children:e.email})]}),t(k,{className:"bgImage",style:{backgroundImage:x(e.photo)}})]})},e.id)):null]})]})};export{R as default};
