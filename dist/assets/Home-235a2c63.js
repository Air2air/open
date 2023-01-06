import{s as h,B as y,C as k,d as v,b as r,F as m,j as e,r as u}from"./bannerCSS-312176e4.js";import{Y as S,a1 as j,M as I,N as B,O as W,P as H,Q as $,a2 as N,R as _,c as L,T as R,B as T,U as b,e as f,S as D}from"./index-e3d340cf.js";import{u as O}from"./useQuery-18b016b1.js";import{R as M}from"./rowButton-6fbba9ee.js";import"./buttonCSS-4aba25bd.js";const p="/data/dataOrgs.json",A="orgs",P=o=>{const i=async()=>(await fetch(p,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:n,status:a}=O(A,i),d=window.innerWidth<y;function g(t,s){return s?t*.6:t}return r(m,{children:[a==="error"&&e(C,{style:{background:"red"},children:r("div",{style:{color:"white"},children:["Data fetch error at ",p]})}),a==="loading"&&e(C,{style:{background:"red"},children:r("div",{style:{color:"white"},children:["Loading from ",p]})}),a==="success"&&e(m,{children:e(C,{style:{background:j(o.backgroundColor)},children:e(q,{children:e(z,{children:n.map((t,s)=>e(F,{children:e(K,{src:`images/content/${t.image}`,alt:t.title,width:g(t.width,d)})},s))})})})})]})},V="100px",C=h.div`
  position: relative;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  background: ${S};
`,q=h.div`
  margin: 0 auto;

  z-index: +1;
  height: auto;
  @media (min-width: ${y}px) {
    width: ${k};
    padding: 50px 0;
  }
  @media (max-width: ${y}px) {
    width: ${v};
    padding: 20px 0;
  }
`,z=h.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  opacity: 0.5;
  grid-template-columns: auto auto auto;

`,F=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${V};
  /* background: gold; */
`,K=h.img`
  height: auto;
`,Q=o=>{const[i,n]=u.useState(0),[a,d]=u.useState("100%"),[g,t]=u.useState(!0),[s,E]=u.useState(1);return u.useEffect(()=>{d("100%"),n(1),t(!0);const c=setTimeout(()=>{t(!1)},500),l=setTimeout(()=>{d("50%"),t(!0)},7e3),w=setTimeout(()=>{n(0),t(!0)},o.loopEndTime-2e3),x=setTimeout(()=>{E(s+1)},o.loopEndTime);return()=>{clearTimeout(c),clearTimeout(l),clearTimeout(w),clearTimeout(x)}},[s]),e(I,{style:{width:a},children:o.data.map((c,l)=>r(B,{children:[e(W,{style:{height:H(c.height),backgroundColor:c.backgroundColor,animation:i?$(l):N(l),opacity:i?0:1}},c.id),e(_,{hidden:g,label:c.label,index:l})]},l))})},U=o=>e(L,{backgroundColor:o.backgroundColor,children:e(R,{children:e(Q,{data:o.data,loopEndTime:o.loopEndTime})})}),Y="/data/dataHome.json",G="home",oe=()=>{const o=async()=>(await fetch(Y,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:i,status:n}=O(G,o),a=14e3;return r(m,{children:[n==="error"&&e("p",{style:{color:"red"},children:"Error fetching data"}),n==="loading"&&r(m,{children:[e(T,{pageVideo:776443340,overlayOpacity:.1,overlayColor:b,loopEndTime:a}),e(f,{text:"home"})]}),n==="success"&&r(m,{children:[e(T,{pageVideo:776443340,overlayOpacity:.1,overlayColor:b,loopEndTime:a}),e(f,{text:"home"}),e(U,{columnCount:7,data:i,loopEndTime:a,backgroundColor:2}),e(M,{buttonTo:"/practice_areas",buttonText:"What we do",backgroundColor:2}),e(D,{height:40,backgroundColor:2}),e(P,{backgroundColor:1})]})]})};export{oe as default};
