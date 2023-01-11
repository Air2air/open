import{s as u,B as f,C as w,d as O,b as d,F as C,j as e,r as l}from"./bannerCSS-18d11c47.js";import{X as E,Y as x,P as k,Q as v,R as B,T as I,U as S,Z as j,a as W,O as H,e as L,N,B as R,S as _}from"./index-6ddabe69.js";import{u as $}from"./useQuery-61113c0d.js";import{R as D}from"./rowButton-5db528ae.js";import{B as F}from"./barLabel-4d62dab6.js";import{F as M}from"./fetch-46dff3be.js";import"./buttonComponents-a90f10df.js";const g="/data/dataOrgs.json",P="orgs",A=o=>{const r=async()=>(await fetch(g,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:n,status:a}=$(P,r),m=window.innerWidth<f;function h(t,i){return i?t*.6:t}return d(C,{children:[a==="error"&&e(p,{style:{background:"red"},children:d("div",{style:{color:"white"},children:["Data fetch error at ",g]})}),a==="loading"&&e(p,{style:{background:"red"},children:d("div",{style:{color:"white"},children:["Loading from ",g]})}),a==="success"&&e(C,{children:e(p,{style:{background:x(o.backgroundColor)},children:e(K,{children:e(Q,{children:n.map((t,i)=>e(V,{children:e(q,{src:`images/content/${t.image}`,alt:t.title,width:h(t.width,m)})},i))})})})})]})},z="100px",p=u.div`
  position: relative;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  background: ${E};
`,K=u.div`
  margin: 0 auto;

  z-index: +1;
  height: auto;
  @media (min-width: ${f}px) {
    width: ${w};
    padding: 50px 0;
  }
  @media (max-width: ${f}px) {
    width: ${O};
    padding: 20px 0;
  }
`,Q=u.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  opacity: 0.5;
  grid-template-columns: auto auto auto;

`,V=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${z};
  /* background: gold; */
`,q=u.img`
  height: auto;
`,U=o=>{const[r,n]=l.useState(0),[a,m]=l.useState("100%"),[h,t]=l.useState(!0),[i,T]=l.useState(1);return l.useEffect(()=>{m("100%"),n(1),t(!0);const s=setTimeout(()=>{t(!1)},500),c=setTimeout(()=>{m("50%"),t(!0)},7e3),b=setTimeout(()=>{n(0),t(!0)},o.loopEndTime-2e3),y=setTimeout(()=>{T(i+1)},o.loopEndTime);return()=>{clearTimeout(s),clearTimeout(c),clearTimeout(b),clearTimeout(y)}},[i]),e(k,{style:{width:a},children:o.data.map((s,c)=>d(v,{children:[e(B,{style:{height:I(s.height),backgroundColor:s.backgroundColor,animation:r?S(c):j(c),opacity:r?0:1}},s.id),e(F,{hidden:h,label:s.label,index:c})]},c))})},X=({jsonFile:o})=>{const{data:r,loading:n,error:a}=M({file:o});return n?e("div",{children:"Loading..."}):a?d("div",{children:["Error: ",a.message]}):e(W,{backgroundColor:2,children:e(H,{children:e(U,{data:r,loopEndTime:12e4})})})},oe=()=>d(C,{children:[e(L,{pageVideo:776443340,overlayOpacity:.1,overlayColor:N}),e(R,{text:"home"}),e(X,{jsonFile:"/data/homeChart.json"}),e(D,{buttonTo:"/whatwedo",buttonText:"What we do",backgroundColor:2}),e(_,{height:40,backgroundColor:2}),e(A,{backgroundColor:1})]});export{oe as default};
