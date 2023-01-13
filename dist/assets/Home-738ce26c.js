import{r as l,m as e,n as u,s as c,d as b,B as h,i as w,p as x,F as p,E as I}from"./bannerComponents-2e57662a.js";import{R as v}from"./rowButton-cb6301a5.js";import{I as y,J as B,K as S,M as H,N as j,O as k,P as W,C,Q as F,B as N,S as _}from"./index-702dcae0.js";import{B as $}from"./barLabel-341f9c71.js";import{F as f}from"./fetch-9100cff1.js";import{H as L}from"./heading-e9117604.js";import"./buttonComponents-6d835e97.js";const M=a=>{const[n,r]=l.useState(0),[o,g]=l.useState("100%"),[m,t]=l.useState(!0),[i,T]=l.useState(1);return l.useEffect(()=>{g("100%"),r(1),t(!0);const s=setTimeout(()=>{t(!1)},500),d=setTimeout(()=>{g("50%"),t(!0)},7e3),E=setTimeout(()=>{r(0),t(!0)},a.loopEndTime-2e3),O=setTimeout(()=>{T(i+1)},a.loopEndTime);return()=>{clearTimeout(s),clearTimeout(d),clearTimeout(E),clearTimeout(O)}},[i]),e(y,{style:{width:o},children:a.data.map((s,d)=>u(B,{children:[e(S,{style:{height:H(s.height),backgroundColor:s.backgroundColor,animation:n?j(d):k(d),opacity:n?0:1}},s.id),e($,{hidden:m,label:s.label,index:d})]},d))})},R=({jsonFile:a})=>{const{data:n,loading:r,error:o}=f({file:a});return r?e(W,{}):o?u("div",{children:["Error: ",o.message]}):e(C,{backgroundColor:2,children:e(F,{children:e(M,{data:n,loopEndTime:12e4})})})},P="100px";c.div`
  position: relative;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  background: ${b};
`;const D=c.div`
  margin: 0 auto;

  z-index: +1;
  height: auto;
  @media (min-width: ${h}px) {
    width: ${w};
    padding: 50px 0;
  }
  @media (max-width: ${h}px) {
    width: ${x};
    padding: 20px 0;
  }
`,A=c.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  opacity: 0.5;
  grid-template-columns: auto auto auto;
`,K=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${P};
  /* background: gold; */
`,z=c.img`
  height: auto;
`,V=({jsonFile:a})=>{const n=window.innerWidth<h;function r(t,i){return i?t*.6:t}const{data:o,loading:g,error:m}=f({file:a});return m?u("div",{children:["Error: ",m.message]}):o&&o.length>0?e(p,{children:e(C,{backgroundColor:1,children:e(D,{children:e(A,{children:o.map((t,i)=>e(K,{children:e(z,{src:`images/content/${t.image}`,alt:t.title,width:r(t.width,n)})},i))})})})}):e("div",{children:"No data"})},Z=()=>u(p,{children:[e(N,{pageVideo:776443340,overlayOpacity:.1,overlayColor:I}),e(L,{jsonFile:"/data/homeHeading.json"}),e(R,{jsonFile:"/data/homeChart.json"}),e(v,{buttonTo:"/whatwedo",buttonText:"What we do",backgroundColor:2}),e(_,{height:40,backgroundColor:2}),e(V,{jsonFile:"/data/orgsContent.json"})]});export{Z as default};
