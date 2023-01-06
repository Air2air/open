import{s as h,B as y,C as E,d as k,b as r,F as l,j as e,r as m}from"./bannerCSS-312176e4.js";import{Z as S,a1 as j,N as I,O as v,P as B,Q as W,R as H,a2 as $,T as L,c as N,U as _,e as p,B as R,V as D,S as A}from"./index-59119b23.js";import{u as f,B as b}from"./bannerLoading-fb240f8b.js";import{R as M}from"./rowButton-22a62410.js";import"./buttonCSS-4aba25bd.js";const C="/data/dataOrgs.json",P="orgs",V=o=>{const i=async()=>(await fetch(C,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:a,status:n}=f(P,i),u=window.innerWidth<y;function g(t,s){return s?t*.6:t}return r(l,{children:[n==="error"&&e(T,{style:{background:"red"},children:r("div",{style:{color:"white"},children:["Data fetch error at ",C]})}),n==="loading"&&e(T,{style:{background:"red"},children:r("div",{style:{color:"white"},children:["Loading from ",C]})}),n==="success"&&e(l,{children:e(T,{style:{background:j(o.backgroundColor)},children:e(z,{children:e(F,{children:a.map((t,s)=>e(K,{children:e(Q,{src:`images/content/${t.image}`,alt:t.title,width:g(t.width,u)})},s))})})})})]})},q="100px",T=h.div`
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
`,U=o=>{const[i,a]=m.useState(0),[n,u]=m.useState("100%"),[g,t]=m.useState(!0),[s,O]=m.useState(1);return m.useEffect(()=>{u("100%"),a(1),t(!0);const c=setTimeout(()=>{t(!1)},500),d=setTimeout(()=>{u("50%"),t(!0)},7e3),w=setTimeout(()=>{a(0),t(!0)},o.loopEndTime-2e3),x=setTimeout(()=>{O(s+1)},o.loopEndTime);return()=>{clearTimeout(c),clearTimeout(d),clearTimeout(w),clearTimeout(x)}},[s]),e(I,{style:{width:n},children:o.data.map((c,d)=>r(v,{children:[e(B,{style:{height:W(c.height),backgroundColor:c.backgroundColor,animation:i?H(d):$(d),opacity:i?0:1}},c.id),e(L,{hidden:g,label:c.label,index:d})]},d))})},Z=o=>e(N,{backgroundColor:o.backgroundColor,children:e(_,{children:e(U,{data:o.data,loopEndTime:o.loopEndTime})})}),G="/data/dataHome.json",J="home",ae=()=>{const o=async()=>(await fetch(G,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:i,status:a}=f(J,o),n=14e3;return r(l,{children:[a==="error"&&r(l,{children:[e(b,{}),e(p,{text:"error"})]}),a==="loading"&&r(l,{children:[e(b,{}),e(p,{text:"home"})]}),a==="success"&&r(l,{children:[e(R,{pageVideo:776443340,overlayOpacity:.1,overlayColor:D,loopEndTime:n}),e(p,{text:"home"}),e(Z,{columnCount:7,data:i,loopEndTime:n,backgroundColor:2}),e(M,{buttonTo:"/practice_areas",buttonText:"What we do",backgroundColor:2}),e(A,{height:40,backgroundColor:2}),e(V,{backgroundColor:1})]})]})};export{ae as default};
