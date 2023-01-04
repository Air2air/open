import{s as c,l as O,B as g,C as v,e as E,j as t,f as m,r as s,b as u}from"./styled-components.browser.esm-e2f2eb67.js";import{P as I,F as k,G as S,H,I as W,J as $,W as j,K as B,b as _,M as L,B as C,k as T,d as w,R as M}from"./index-84b97dce.js";import{u as A}from"./useQuery-1e8173fd.js";import{v as a}from"./v4-a960c1f4.js";const N=[{id:a(),order:1,title:"University of Toronto",image:"uot.png",width:150},{id:a(),order:2,title:"UCSF",image:"ucsf.png",width:80},{id:a(),order:3,title:"Stanford University",image:"stanford.png",width:140},{id:a(),order:4,title:"MIT",image:"mit.png",width:150},{id:a(),order:5,title:"Harvard University",image:"harvard.png",width:150},{id:a(),order:6,title:"Duke University",image:"duke.png",width:100},{id:a(),order:8,title:"Microsoft",image:"microsoft.png",width:150},{id:a(),order:8,title:"Google",image:"google.png",width:120},{id:a(),order:9,title:"Amazon Web Services",image:"aws.png",width:80}],R=()=>{const e=N.map(o=>t(K,{children:t(V,{src:`images/content/${o.image}`,alt:o.title,width:o.width})},o.id));return t(m,{children:e})},U=e=>t(P,{style:{background:e.backgroundColor},children:t(F,{children:t(G,{children:t(R,{})})})}),D="100px",P=c.div`
  position: relative;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  min-height: ${O}px;
  background: ${I};
`,F=c.div`
  margin: 0 auto;

  z-index: +1;
  height: auto;
  @media (min-width: ${g}px) {
    width: ${v};
    padding: 50px 0;
  }
  @media (max-width: ${g}px) {
    width: ${E};
    padding: 20px 0;
  }
`,G=c.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  opacity: 0.5;

  @media (min-width: ${g}px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: ${g}px) {
    grid-template-columns: auto auto;
  }
  /* background: red; */
`,K=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${D};
  /* background: gold; */
`,V=c.img`
  height: auto;
`,z=e=>{const[o,i]=s.useState(0),[d,h]=s.useState("100%"),[y,l]=s.useState(!0),[p,f]=s.useState(1);return s.useEffect(()=>{h("100%"),i(1),l(!0);const n=setTimeout(()=>{l(!1)},500),r=setTimeout(()=>{h("50%"),l(!0)},7e3),b=setTimeout(()=>{i(0),l(!0)},e.loopEndTime-2e3),x=setTimeout(()=>{f(p+1)},e.loopEndTime);return()=>{clearTimeout(n),clearTimeout(r),clearTimeout(b),clearTimeout(x)}},[p]),t(k,{style:{width:d},children:e.data.map((n,r)=>u(S,{children:[t(H,{style:{height:W(n.height),backgroundColor:n.backgroundColor,animation:o?$(r):j(r),opacity:o?0:1}},n.id),t(B,{hidden:y,label:n.label,index:r})]},r))})},q=e=>t(_,{backgroundColor:e.backgroundColor,children:t(L,{children:t(z,{data:e.data,loopEndTime:e.loopEndTime})})}),J="data/dataHome.json",Q="home",et=()=>{const e=async()=>(await fetch(J,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:o,status:i}=A(Q,e),d=14e3;return u(m,{children:[i==="error"&&t("p",{style:{color:"red"},children:"Error fetching data"}),i==="loading"&&u(m,{children:[t(C,{pageVideo:776443340,overlayOpacity:.1,overlayColor:T,loopEndTime:d}),t(w,{text:"home"})]}),i==="success"&&u(m,{children:[t(C,{pageVideo:776443340,overlayOpacity:.1,overlayColor:T,loopEndTime:d}),t(w,{text:"home"}),t(q,{columnCount:7,data:o,loopEndTime:d,backgroundColor:1}),t(M,{buttonTo:"/practice_areas",buttonText:"What we do",backgroundColor:4}),t(U,{})]})]})};export{et as default};
