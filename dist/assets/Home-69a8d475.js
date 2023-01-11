import{s as h,B as y,C as E,d as k,b as r,F as l,j as e,r as m}from"./bannerCSS-18d11c47.js";import{X as B,Y as I,P as j,Q as S,R as v,T as W,U as H,Z as $,V as L,a as N,O as R,B as p,e as _,N as D,S as A}from"./index-4213c5a9.js";import{u as f,B as b}from"./bannerLoading-11f5b030.js";import{R as M}from"./rowButton-25add37e.js";import"./buttonComponents-f575d892.js";const C="/data/dataOrgs.json",P="orgs",V=a=>{const i=async()=>(await fetch(C,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:o,status:n}=f(P,i),u=window.innerWidth<y;function g(t,s){return s?t*.6:t}return r(l,{children:[n==="error"&&e(T,{style:{background:"red"},children:r("div",{style:{color:"white"},children:["Data fetch error at ",C]})}),n==="loading"&&e(T,{style:{background:"red"},children:r("div",{style:{color:"white"},children:["Loading from ",C]})}),n==="success"&&e(l,{children:e(T,{style:{background:I(a.backgroundColor)},children:e(z,{children:e(F,{children:o.map((t,s)=>e(K,{children:e(Q,{src:`images/content/${t.image}`,alt:t.title,width:g(t.width,u)})},s))})})})})]})},q="100px",T=h.div`
  position: relative;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  background: ${B};
`,z=h.div`
  margin: 0 auto;

  z-index: +1;
  height: auto;
  @media (min-width: ${y}px) {
    width: ${E};
    padding: 50px 0;
  }
  @media (max-width: ${y}px) {
    width: ${k};
    padding: 20px 0;
  }
`,F=h.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  opacity: 0.5;
  grid-template-columns: auto auto auto;

`,K=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${q};
  /* background: gold; */
`,Q=h.img`
  height: auto;
`,U=a=>{const[i,o]=m.useState(0),[n,u]=m.useState("100%"),[g,t]=m.useState(!0),[s,w]=m.useState(1);return m.useEffect(()=>{u("100%"),o(1),t(!0);const c=setTimeout(()=>{t(!1)},500),d=setTimeout(()=>{u("50%"),t(!0)},7e3),O=setTimeout(()=>{o(0),t(!0)},a.loopEndTime-2e3),x=setTimeout(()=>{w(s+1)},a.loopEndTime);return()=>{clearTimeout(c),clearTimeout(d),clearTimeout(O),clearTimeout(x)}},[s]),e(j,{style:{width:n},children:a.data.map((c,d)=>r(S,{children:[e(v,{style:{height:W(c.height),backgroundColor:c.backgroundColor,animation:i?H(d):$(d),opacity:i?0:1}},c.id),e(L,{hidden:g,label:c.label,index:d})]},d))})},X=a=>e(N,{backgroundColor:a.backgroundColor,children:e(R,{children:e(U,{data:a.data,loopEndTime:a.loopEndTime})})}),Y="/data/dataHome.json",Z="home",oe=()=>{const a=async()=>(await fetch(Y,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:i,status:o}=f(Z,a),n=14e3;return r(l,{children:[o==="error"&&r(l,{children:[e(b,{}),e(p,{text:"error"})]}),o==="loading"&&r(l,{children:[e(b,{}),e(p,{text:"home"})]}),o==="success"&&r(l,{children:[e(_,{pageVideo:776443340,overlayOpacity:.1,overlayColor:D,loopEndTime:n}),e(p,{text:"home"}),e(X,{columnCount:7,data:i,loopEndTime:n,backgroundColor:2}),e(M,{buttonTo:"/whatwedo",buttonText:"What we do",backgroundColor:2}),e(A,{height:40,backgroundColor:2}),e(V,{backgroundColor:1})]})]})};export{oe as default};
