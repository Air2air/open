import{s as a,X as r,Y as s,B as n,Z as g,$ as h,h as f,a0 as c,A as C,d as t,j as i,a1 as u,a2 as x,a3 as O,a4 as y,F as d,r as _,e as b,D as l,i as k,k as T}from"./index-4edf04d5.js";import{B as E}from"./buttonLinkedIn-7d04b507.js";import{v as o}from"./v4-a960c1f4.js";const I=e=>e.backgroundColor===1?u:e.backgroundColor===2?s:e.backgroundColor===3?x:e.backgroundColor===4?O:e.backgroundColor===5?y:e.backgroundColor,p=e=>{const m="url(/images/content/"+e.photo+")";return t(w,{animateIn:"animate__fadeIn",delay:0,style:{background:I(e)},children:i($,{children:[i(v,{children:[t(A,{children:e.shortName}),t(N,{children:e.address}),t("br",{}),t(E,{to:"https://www.linkedin.com/company/eleven-health",text:"Elevens.ai"}),t("br",{}),t(R,{href:`mailto:${e.email}`,children:e.email})]}),t(S,{className:"bgImage",style:{backgroundImage:m}})]})},e.id)},w=a(C)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,$=a.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${r}px;
  transition: all 500ms;
  background: none;
  &:hover {
    background: ${s};
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
    width: ${g};
    margin: 40px 0;
  }
  @media (max-width: ${n}px) {
    width: ${h};
    margin: 10px 0;
  }
`,v=a.div`
  height: ${r}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,B=r*.8,S=a.div`
  flex: 1;
  width: 100%;
  height: ${B}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${n}px) {
    display: inline-flex;
  }
  @media (max-width: ${n}px) {
    display: none;
  }
`,A=a.h2`
  text-transform: uppercase;
  font-weight: 500;
  color: ${e=>e.color===""||!e.color?f:e.color};
  @media (min-width: ${n}px) {
    font-size: 1.5em;
  }
  @media (max-width: ${n}px) {
    font-size: 1.3em;
  }
`,N=a.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 1.6em;
  color: ${c};
`,R=a.a`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.3em;
  line-height: 1.6em;
  color: ${c};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
`,L=[{id:o(),shortName:"Silicon Valley",address:"Stanford, California, United States",email:"info@elevens.ai",photo:"stanford.jpg",backgroundColor:1},{id:o(),shortName:"Silicon Valley North",address:"Toronto, Ontario, Canada",email:"info@elevens.ai",photo:"toronto.jpg",backgroundColor:2},{id:o(),shortName:"Silicon Hills	",address:"Austin, Texas, United States",email:"info@elevens.ai",photo:"austin.jpg",backgroundColor:3}],j=()=>t(d,{children:L.map(e=>_.createElement(p,{...e,key:e.id}))}),z=()=>(b({color:l}),i(d,{children:[t(k,{pageVideo:769227014,overlayOpacity:.1,overlayColor:l,typing:!0}),t(T,{text:"contact"}),t(j,{})]}));export{z as default};
