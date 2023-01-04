import{s as a,w as r,B as n,C as g,e as f,j as t,b as i,f as s,r as h}from"./styled-components.browser.esm-e2f2eb67.js";import{O as c,c as C,l as d,A as u,i as x,P as O,Q as y,U as b,V as _,k as l,B as k,d as T}from"./index-84b97dce.js";import{B as p}from"./buttonLinkedIn-ea61670f.js";import{v as o}from"./v4-a960c1f4.js";const E=e=>e.backgroundColor===1?x:e.backgroundColor===2?c:e.backgroundColor===3?O:e.backgroundColor===4?y:e.backgroundColor===5?b:e.backgroundColor,I=e=>{const m="url(/images/content/"+e.photo+")";return t(w,{animateIn:"animate__fadeIn",delay:0,style:{background:E(e)},children:i(v,{children:[i(B,{children:[t(A,{children:e.shortName}),t(N,{children:e.address}),t("br",{}),t(p,{to:"https://www.linkedin.com/company/eleven-health",text:"Elevens.ai"}),t("br",{}),t(R,{href:`mailto:${e.email}`,children:e.email})]}),t(S,{className:"bgImage",style:{backgroundImage:m}})]})},e.id)},w=a(u)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,v=a.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${r}px;
  transition: all 500ms;
  background: none;
  &:hover {
    background: ${c};
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
    width: ${f};
    margin: 10px 0;
  }
`,B=a.div`
  height: ${r}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,$=r*.8,S=a.div`
  flex: 1;
  width: 100%;
  height: ${$}px;
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
  color: ${e=>e.color===""||!e.color?C:e.color};
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
  color: ${d};
`,R=a.a`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.3em;
  line-height: 1.6em;
  color: ${d};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
`,L=[{id:o(),shortName:"Silicon Valley",address:"Stanford, California, United States",email:"info@elevens.ai",photo:"stanford.jpg",backgroundColor:1},{id:o(),shortName:"Silicon Valley North",address:"Toronto, Ontario, Canada",email:"info@elevens.ai",photo:"toronto.jpg",backgroundColor:2},{id:o(),shortName:"Silicon Hills	",address:"Austin, Texas, United States",email:"info@elevens.ai",photo:"austin.jpg",backgroundColor:3}],j=()=>t(s,{children:L.map(e=>h.createElement(I,{...e,key:e.id}))}),z=()=>(_({color:l}),i(s,{children:[t(k,{pageVideo:769227014,overlayOpacity:.1,overlayColor:l,typing:!0}),t(T,{text:"contact"}),t(j,{})]}));export{z as default};