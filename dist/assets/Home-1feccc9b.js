import{s as u,d as w,B as C,i as E,p as O,n as d,F as f,m as e,r as l,E as x}from"./bannerComponents-3c2cd0d6.js";import{E as k,G as I,H as B,I as v,J as S,K as j,M as W,N as H,C as L,O as N,B as _,b as $,S as D}from"./index-7bc0c802.js";import{u as M}from"./useQuery-4d69af5e.js";import{R}from"./rowButton-34df14be.js";import{B as F}from"./barLabel-89caf403.js";import{F as A}from"./fetch-b3e5db23.js";import"./buttonComponents-9f4b8032.js";const g="/data/dataOrgs.json",P="orgs",K=o=>{const r=async()=>(await fetch(g,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:n,status:a}=M(P,r),m=window.innerWidth<C;function h(t,i){return i?t*.6:t}return d(f,{children:[a==="error"&&e(p,{style:{background:"red"},children:d("div",{style:{color:"white"},children:["Data fetch error at ",g]})}),a==="loading"&&e(p,{style:{background:"red"},children:d("div",{style:{color:"white"},children:["Loading from ",g]})}),a==="success"&&e(f,{children:e(p,{style:{background:k(o.backgroundColor)},children:e(V,{children:e(q,{children:n.map((t,i)=>e(G,{children:e(J,{src:`images/content/${t.image}`,alt:t.title,width:h(t.width,m)})},i))})})})})]})},z="100px",p=u.div`
  position: relative;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  background: ${w};
`,V=u.div`
  margin: 0 auto;

  z-index: +1;
  height: auto;
  @media (min-width: ${C}px) {
    width: ${E};
    padding: 50px 0;
  }
  @media (max-width: ${C}px) {
    width: ${O};
    padding: 20px 0;
  }
`,q=u.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  opacity: 0.5;
  grid-template-columns: auto auto auto;

`,G=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${z};
  /* background: gold; */
`,J=u.img`
  height: auto;
`,Q=o=>{const[r,n]=l.useState(0),[a,m]=l.useState("100%"),[h,t]=l.useState(!0),[i,T]=l.useState(1);return l.useEffect(()=>{m("100%"),n(1),t(!0);const s=setTimeout(()=>{t(!1)},500),c=setTimeout(()=>{m("50%"),t(!0)},7e3),b=setTimeout(()=>{n(0),t(!0)},o.loopEndTime-2e3),y=setTimeout(()=>{T(i+1)},o.loopEndTime);return()=>{clearTimeout(s),clearTimeout(c),clearTimeout(b),clearTimeout(y)}},[i]),e(I,{style:{width:a},children:o.data.map((s,c)=>d(B,{children:[e(v,{style:{height:S(s.height),backgroundColor:s.backgroundColor,animation:r?j(c):W(c),opacity:r?0:1}},s.id),e(F,{hidden:h,label:s.label,index:c})]},c))})},U=({jsonFile:o})=>{const{data:r,loading:n,error:a}=A({file:o});return n?e(H,{}):a?d("div",{children:["Error: ",a.message]}):e(L,{backgroundColor:2,children:e(N,{children:e(Q,{data:r,loopEndTime:12e4})})})},re=()=>d(f,{children:[e(_,{pageVideo:776443340,overlayOpacity:.1,overlayColor:x}),e($,{text:"home"}),e(U,{jsonFile:"/data/homeChart.json"}),e(R,{buttonTo:"/whatwedo",buttonText:"What we do",backgroundColor:2}),e(D,{height:40,backgroundColor:2}),e(K,{backgroundColor:1})]});export{re as default};
