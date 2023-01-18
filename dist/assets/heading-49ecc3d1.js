import{s as a,e as E,i as p,k as m,l as x,m as N,B as t,n as f,o as g,p as u,d as w,q as D,t as B,j as n,a as b,r as e,u as I,v,w as y,x as S,y as C,z as H,b as k}from"./index-b394176e.js";const $=40,A="250px",F="100%",M=a.div`
  ${E};
  color: ${p};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${$}px;
  transition: all 300ms;
  text-transform: uppercase;
  background: ${m};
  &:hover {
    background: ${x};
  }
  span {
    margin-left: 8px;
  }
  .icon {
    height: 24px;
  }
`,G=a.div`
  ${N};
  height: ${$}px;
  color: ${p};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${m};
  &:hover {
    background: ${x};
  }
  min-width: ${A};
  @media (min-width: ${t}px) {
    display: inline-flex;
  }
  @media (max-width: ${t}px) {
    display: none;
  }
`,W=a.div`
  ${f};
  height: ${$}px;
  color: ${p};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  width: ${F};
  span {
    margin-right: 10px;
  }
  background: ${m};
  &:hover {
    background: ${x};
  }
  @media (min-width: ${t}px) {
    display: none;
  }
  @media (max-width: ${t}px) {
    display: inline-flex;
  }
`,z=a.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${t}px) {
    padding: 50px 0;
    /* width: ${g}; */
  }
  @media (max-width: ${t}px) {
    padding: 20px 0;
    /* width: ${u}; */
  }
  /* background: red;; */
`,X=a.div`
  color: ${w};
  height: auto;
  text-align: left;
  /* padding-bottom: 20px; */
  @media (min-width: ${t}px) {
    ${D};
  }
  @media (max-width: ${t}px) {
    ${B};
  }
`,q=s=>n(b,{...s,children:n("div",{style:{height:400}})}),V=({file:s})=>{const[i,c]=e.useState(null),[d,h]=e.useState(!0),[o,r]=e.useState(null),l={"Content-Type":"application/json",Accept:"application/json"};return e.useEffect(()=>{(async()=>{try{const O=await(await fetch(s,{headers:l})).json();c(O)}catch(T){r(T)}finally{h(!1)}})()},[s]),{data:i,loading:d,error:o}},_=a.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  @media (min-width: ${t}px) {
    height: ${I}px;
    width: 100%;
  }
  @media (max-width: ${t}px) {
    height: ${v}px;
    width: 100%;
  }
  /* background: blue; */
`,L=a.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 60%;
    width: ${g};
  }
  @media (max-width: ${t}px) {
    height: 60%;
    width: ${u};
  }
  /* background: green; */
`,R=a.div`
  @media (min-width: ${t}px) {
    ${y}
  }
  @media (max-width: ${t}px) {
    ${S}
  }
`,j=a.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 40%;
    width: ${g};
  }
  @media (max-width: ${t}px) {
    height: 40%;
    width: ${u};
  }
  /* background: red; */
`,U=a.div`
  height: auto;
  text-align: left;
  /* background: red; */
  @media (min-width: ${t}px) {
    ${C}
  }
  @media (max-width: ${t}px) {
    ${H}
  }
`,J=({jsonFile:s})=>{const[i,c]=e.useState([]),[d,h]=e.useState(0);return e.useEffect(()=>{(async()=>{const l=await(await fetch(s)).json();c(l)})()},[]),e.useEffect(()=>{const o=setInterval(()=>{h(r=>(r+1)%i.length)},6e3);return()=>clearInterval(o)},[i]),i.length?k(_,{children:[n(L,{children:n(R,{className:"animate__animated animate__fadeInDown",children:i[d].title})}),n(j,{children:n(U,{className:"animate__animated animate__fadeInUp animate__delay-1s",children:i[d].subhead})})]}):n(_,{})};export{$ as B,q as C,V as F,J as H,G as a,W as b,M as c,z as d,X as e};
