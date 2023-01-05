import{s as h,B as y,C as k,d as v,b as r,F as m,j as e,r as u}from"./bannerCSS-7d27781b.js";import{a0 as j,a3 as I,O as S,P as W,Q as B,U as H,V as $,a4 as _,W as L,c as N,X as D,B as T,Y as b,e as f,R}from"./index-91a95fb3.js";import{u as O}from"./useQuery-c3e1642a.js";const p="/data/dataOrgs.json",A="orgs",M=o=>{const i=async()=>(await fetch(p,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:n,status:a}=O(A,i),d=window.innerWidth<y;function g(t,s){return s?t*.6:t}return r(m,{children:[a==="error"&&e(C,{style:{background:"red"},children:r("div",{style:{color:"white"},children:["Data fetch error at ",p]})}),a==="loading"&&e(C,{style:{background:"red"},children:r("div",{style:{color:"white"},children:["Loading from ",p]})}),a==="success"&&e(m,{children:e(C,{style:{background:I(o.backgroundColor)},children:e(V,{children:e(q,{children:n.map((t,s)=>e(z,{children:e(F,{src:`images/content/${t.image}`,alt:t.title,width:g(t.width,d)})},s))})})})})]})},P="100px",C=h.div`
  position: relative;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  background: ${j};
`,V=h.div`
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
`,q=h.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  opacity: 0.5;
  grid-template-columns: auto auto auto;

`,z=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${P};
  /* background: gold; */
`,F=h.img`
  height: auto;
`,K=o=>{const[i,n]=u.useState(0),[a,d]=u.useState("100%"),[g,t]=u.useState(!0),[s,E]=u.useState(1);return u.useEffect(()=>{d("100%"),n(1),t(!0);const c=setTimeout(()=>{t(!1)},500),l=setTimeout(()=>{d("50%"),t(!0)},7e3),w=setTimeout(()=>{n(0),t(!0)},o.loopEndTime-2e3),x=setTimeout(()=>{E(s+1)},o.loopEndTime);return()=>{clearTimeout(c),clearTimeout(l),clearTimeout(w),clearTimeout(x)}},[s]),e(S,{style:{width:a},children:o.data.map((c,l)=>r(W,{children:[e(B,{style:{height:H(c.height),backgroundColor:c.backgroundColor,animation:i?$(l):_(l),opacity:i?0:1}},c.id),e(L,{hidden:g,label:c.label,index:l})]},l))})},Q=o=>e(N,{backgroundColor:o.backgroundColor,children:e(D,{children:e(K,{data:o.data,loopEndTime:o.loopEndTime})})}),U="/data/dataHome.json",X="home",Z=()=>{const o=async()=>(await fetch(U,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:i,status:n}=O(X,o),a=14e3;return r(m,{children:[n==="error"&&e("p",{style:{color:"red"},children:"Error fetching data"}),n==="loading"&&r(m,{children:[e(T,{pageVideo:776443340,overlayOpacity:.1,overlayColor:b,loopEndTime:a}),e(f,{text:"home"})]}),n==="success"&&r(m,{children:[e(T,{pageVideo:776443340,overlayOpacity:.1,overlayColor:b,loopEndTime:a}),e(f,{text:"home"}),e(Q,{columnCount:7,data:i,loopEndTime:a,backgroundColor:1}),e(R,{buttonTo:"/practice_areas",buttonText:"What we do",backgroundColor:4}),e(M,{backgroundColor:1})]})]})};export{Z as default};
