import{s as u,d as w,B as f,i as E,p as O,n as d,F as C,m as e,r as l,E as x}from"./bannerComponents-b17e5c41.js";import{E as I,G as k,H as v,I as B,J as S,K as j,M as W,C as H,N as L,b as N,B as _,S as $}from"./index-24415fcf.js";import{u as D}from"./useQuery-b813b750.js";import{R as M}from"./rowButton-1ab95f14.js";import{B as R}from"./barLabel-5d529e73.js";import{F}from"./fetch-c6cd0f13.js";import"./buttonComponents-841b3e60.js";const g="/data/dataOrgs.json",A="orgs",P=a=>{const r=async()=>(await fetch(g,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:n,status:o}=D(A,r),m=window.innerWidth<f;function h(t,i){return i?t*.6:t}return d(C,{children:[o==="error"&&e(p,{style:{background:"red"},children:d("div",{style:{color:"white"},children:["Data fetch error at ",g]})}),o==="loading"&&e(p,{style:{background:"red"},children:d("div",{style:{color:"white"},children:["Loading from ",g]})}),o==="success"&&e(C,{children:e(p,{style:{background:I(a.backgroundColor)},children:e(z,{children:e(V,{children:n.map((t,i)=>e(q,{children:e(G,{src:`images/content/${t.image}`,alt:t.title,width:h(t.width,m)})},i))})})})})]})},K="100px",p=u.div`
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
`,z=u.div`
  margin: 0 auto;

  z-index: +1;
  height: auto;
  @media (min-width: ${f}px) {
    width: ${E};
    padding: 50px 0;
  }
  @media (max-width: ${f}px) {
    width: ${O};
    padding: 20px 0;
  }
`,V=u.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  opacity: 0.5;
  grid-template-columns: auto auto auto;

`,q=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${K};
  /* background: gold; */
`,G=u.img`
  height: auto;
`,J=a=>{const[r,n]=l.useState(0),[o,m]=l.useState("100%"),[h,t]=l.useState(!0),[i,T]=l.useState(1);return l.useEffect(()=>{m("100%"),n(1),t(!0);const s=setTimeout(()=>{t(!1)},500),c=setTimeout(()=>{m("50%"),t(!0)},7e3),b=setTimeout(()=>{n(0),t(!0)},a.loopEndTime-2e3),y=setTimeout(()=>{T(i+1)},a.loopEndTime);return()=>{clearTimeout(s),clearTimeout(c),clearTimeout(b),clearTimeout(y)}},[i]),e(k,{style:{width:o},children:a.data.map((s,c)=>d(v,{children:[e(B,{style:{height:S(s.height),backgroundColor:s.backgroundColor,animation:r?j(c):W(c),opacity:r?0:1}},s.id),e(R,{hidden:h,label:s.label,index:c})]},c))})},Q=({jsonFile:a})=>{const{data:r,loading:n,error:o}=F({file:a});return n?e("div",{children:"Loading..."}):o?d("div",{children:["Error: ",o.message]}):e(H,{backgroundColor:2,children:e(L,{children:e(J,{data:r,loopEndTime:12e4})})})},ae=()=>d(C,{children:[e(N,{pageVideo:776443340,overlayOpacity:.1,overlayColor:x}),e(_,{text:"home"}),e(Q,{jsonFile:"/data/homeChart.json"}),e(M,{buttonTo:"/whatwedo",buttonText:"What we do",backgroundColor:2}),e($,{height:40,backgroundColor:2}),e(P,{backgroundColor:1})]});export{ae as default};
