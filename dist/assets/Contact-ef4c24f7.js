import{s as n,B as t,C as g,d as h,j as a,b as i,F as s,r as C}from"./bannerCSS-312176e4.js";import{W as c,d as f,i as u,j as x,k as d,l as O,m as _,A as T,S as l,X as E,Y as $,Z as y,$ as I,B as k,U as p,e as b}from"./index-5228a348.js";import{B as S,v as o}from"./v4-454080bf.js";import"./buttonCSS-4aba25bd.js";const r=210,B=e=>e.backgroundColor===1?E:e.backgroundColor===2?c:e.backgroundColor===3?$:e.backgroundColor===4?y:e.backgroundColor===5?I:e.backgroundColor,A=e=>{const m="url(/images/content/"+e.photo+")";return a(N,{animateIn:"animate__fadeIn",delay:0,style:{background:B(e)},children:i(v,{children:[i(w,{children:[a(R,{children:e.shortName}),a(H,{children:e.address}),a(l,{height:15}),a(S,{to:"https://www.linkedin.com/company/eleven-health",text:"Elevens.ai"}),a(l,{height:15}),a(j,{href:`mailto:${e.email}`,children:e.email})]}),a(D,{className:"bgImage",style:{backgroundImage:m}})]})},e.id)},N=n(T)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,v=n.div`
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
  @media (min-width: ${t}px) {
    width: ${g};
    margin: 40px 0;
  }
  @media (max-width: ${t}px) {
    width: ${h};
    margin: 10px 0;
  }
`,w=n.div`
  height: ${r}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,L=r*.8,D=n.div`
  flex: 1;
  width: 100%;
  height: ${L}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${t}px) {
    display: inline-flex;
  }
  @media (max-width: ${t}px) {
    display: none;
  }
`,R=n.h2`
  color: ${e=>e.color===""||!e.color?f:e.color};
  @media (min-width: ${t}px) {
    ${u}
  }
  @media (max-width: ${t}px) {
    ${x}
  }
`,H=n.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${d};
`,j=n.a`
  color: ${d};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${t}px) {
    ${O}
    font-size: 1.2em;
  }
  @media (max-width: ${t}px) {
    ${_}
    font-size: 1.1em;
  }
`,F=[{id:o(),shortName:"Silicon Valley",address:"Stanford, California, United States",email:"info@elevens.ai",photo:"stanford.jpg",backgroundColor:1},{id:o(),shortName:"Silicon Valley North",address:"Toronto, Ontario, Canada",email:"info@elevens.ai",photo:"toronto.jpg",backgroundColor:2},{id:o(),shortName:"Silicon Hills	",address:"Austin, Texas, United States",email:"info@elevens.ai",photo:"austin.jpg",backgroundColor:3}],U=()=>a(s,{children:F.map(e=>C.createElement(A,{...e,key:e.id}))}),V=()=>i(s,{children:[a(k,{pageVideo:769227014,overlayOpacity:.1,overlayColor:p,typing:!0}),a(b,{text:"contact"}),a(U,{})]});export{V as default};
