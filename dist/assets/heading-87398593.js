import{_ as $,b as w,c as O,C as f,d as D,e as N,f as I,g as y}from"./index-e8aebce2.js";import{r as i,m as e,F as v,n as g,w as B,O as C,s,B as t,i as m,p,q as u,T as E,x as S,y as b,z as A}from"./bannerComponents-a40a04da.js";const H=i.lazy(()=>$(()=>import("./vimeoPlayer-2e21066a.js"),["assets/vimeoPlayer-2e21066a.js","assets/bannerComponents-a40a04da.js"])),M=a=>e(v,{children:g(B,{children:[e(H,{videoID:a.pageVideo}),e(C,{style:{opacity:a.overlayOpacity,background:a.overlayColor}})]})}),U=s.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${t}px) {
    padding: 50px 0;
    /* width: ${m}; */
  }
  @media (max-width: ${t}px) {
    padding: 20px 0;
    /* width: ${p}; */
  }
  /* background: red;; */
`,V=s.div`
  color: ${u};
  height: auto;
  text-align: left;
  opacity: ${E};
  /* padding-bottom: 20px; */
  @media (min-width: ${t}px) {
    ${w};
  }
  @media (max-width: ${t}px) {
    ${O};
  }
`,G=a=>e(f,{...a,children:e("div",{style:{height:400}})}),W=({file:a})=>{const[n,c]=i.useState(null),[d,l]=i.useState(!0),[o,r]=i.useState(null),h={"Content-Type":"application/json",Accept:"application/json"};return i.useEffect(()=>{(async()=>{try{const T=await(await fetch(a,{headers:h})).json();c(T)}catch(x){r(x)}finally{l(!1)}})()},[a]),{data:n,loading:d,error:o}},_=s.div`
  position: absolute;
  margin: 0 auto;
  top: 0;

  @media (min-width: ${t}px) {
    height: ${S}px;
    width: 100%;
  }
  @media (max-width: ${t}px) {
    height: ${b}px;
    width: 100%;
  }
  /* background: blue; */
`,F=s.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 60%;
    width: ${m};
  }
  @media (max-width: ${t}px) {
    height: 60%;
    width: ${p};
  }
  /* background: green; */
`,L=s.h1`
  color: ${A};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${t}px) {
    ${D}
  }
  @media (max-width: ${t}px) {
    ${N}
  }
`,P=s.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 40%;
    width: ${m};
  }
  @media (max-width: ${t}px) {
    height: 40%;
    width: ${p};
  }
  /* background: red; */
`,j=s.div`
  color: ${u};
  height: auto;
  text-align: left;
  opacity: ${E};
  text-shadow: 0 0 4px #000;
  /* background: red; */
  @media (min-width: ${t}px) {
    ${I}
  }
  @media (max-width: ${t}px) {
    ${y}
  }
`,z=({jsonFile:a})=>{const[n,c]=i.useState([]),[d,l]=i.useState(0);return i.useEffect(()=>{(async()=>{const h=await(await fetch(a)).json();c(h)})()},[]),i.useEffect(()=>{const o=setInterval(()=>{l(r=>(r+1)%n.length)},6e3);return()=>clearInterval(o)},[n]),n.length?g(_,{children:[e(F,{children:e(L,{className:"animate__animated animate__fadeInDown",children:n[d].title})}),e(P,{children:e(j,{className:"animate__animated animate__fadeInUp animate__delay-1s",children:n[d].subhead})})]},d):e(_,{})};export{M as B,G as C,W as F,z as H,U as a,V as b};
