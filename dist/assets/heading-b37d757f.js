import{s as i,B as t,x as T,y as p,i as r,p as m,z as E,q as g,T as $,r as n,m as e,n as w}from"./bannerComponents-cd50e550.js";import{b as N,c as u,d as O,e as f}from"./index-da42b55a.js";const o=i.div`
  position: absolute;
  margin: 0 auto;
  top: 0;

  @media (min-width: ${t}px) {
    height: ${T}px;
    width: 100%;
  }
  @media (max-width: ${t}px) {
    height: ${p}px;
    width: 100%;
  }
  /* background: blue; */
`,I=i.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 60%;
    width: ${r};
  }
  @media (max-width: ${t}px) {
    height: 60%;
    width: ${m};
  }
  /* background: green; */
`,D=i.h1`
  color: ${E};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${t}px) {
    ${N}
  }
  @media (max-width: ${t}px) {
    ${u}
  }
`,H=i.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 40%;
    width: ${r};
  }
  @media (max-width: ${t}px) {
    height: 40%;
    width: ${m};
  }
  /* background: red; */
`,B=i.div`
  color: ${g};
  height: auto;
  text-align: left;
  opacity: ${$};
  text-shadow: 0 0 4px #000;
  /* background: red; */
  @media (min-width: ${t}px) {
    ${O}
  }
  @media (max-width: ${t}px) {
    ${f}
  }
`,S=({jsonFile:x})=>{const[a,l]=n.useState([]),[s,c]=n.useState(0);return n.useEffect(()=>{(async()=>{const _=await(await fetch(x)).json();l(_)})()},[]),n.useEffect(()=>{const d=setInterval(()=>{c(h=>(h+1)%a.length)},6e3);return()=>clearInterval(d)},[a]),a.length?w(o,{children:[e(I,{children:e(D,{className:"animate__animated animate__fadeInDown",children:a[s].title})}),e(H,{children:e(B,{className:"animate__animated animate__fadeInUp animate__delay-1s",children:a[s].subhead})})]},s):e(o,{})};export{S as H};
