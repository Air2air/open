import{s as c,a5 as O,a2 as E,B as g,Z as b,$ as k,d as t,F as m,r as s,t as I,j as u,u as S,v as H,w as $,x as W,a6 as j,y as _,f as B,z as L,i as C,D as T,k as w,l as M}from"./index-4edf04d5.js";import{u as A}from"./useQuery-52635993.js";import{v as a}from"./v4-a960c1f4.js";const D=[{id:a(),order:1,title:"University of Toronto",image:"uot.png",width:150},{id:a(),order:2,title:"UCSF",image:"ucsf.png",width:80},{id:a(),order:3,title:"Stanford University",image:"stanford.png",width:140},{id:a(),order:4,title:"MIT",image:"mit.png",width:150},{id:a(),order:5,title:"Harvard University",image:"harvard.png",width:150},{id:a(),order:6,title:"Duke University",image:"duke.png",width:100},{id:a(),order:8,title:"Microsoft",image:"microsoft.png",width:150},{id:a(),order:8,title:"Google",image:"google.png",width:120},{id:a(),order:9,title:"Amazon Web Services",image:"aws.png",width:80}],N=()=>{const e=D.map(o=>t(V,{children:t(G,{src:`/images/content/${o.image}`,alt:o.title,width:o.width})},o.id));return t(m,{children:e})},U=e=>t(P,{style:{background:e.backgroundColor},children:t(z,{children:t(F,{children:t(N,{})})})}),R="100px",P=c.div`
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
  background: ${E};
`,z=c.div`
  margin: 0 auto;

  z-index: +1;
  height: auto;
  @media (min-width: ${g}px) {
    width: ${b};
    padding: 50px 0;
  }
  @media (max-width: ${g}px) {
    width: ${k};
    padding: 20px 0;
  }
`,F=c.div`
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
`,V=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${R};
  /* background: gold; */
`,G=c.img`
  height: auto;
`,K=e=>{const[o,i]=s.useState(0),[d,h]=s.useState("100%"),[y,l]=s.useState(!0),[p,f]=s.useState(1);return s.useEffect(()=>{h("100%"),i(1),l(!0);const n=setTimeout(()=>{l(!1)},500),r=setTimeout(()=>{h("50%"),l(!0)},7e3),x=setTimeout(()=>{i(0),l(!0)},e.loopEndTime-2e3),v=setTimeout(()=>{f(p+1)},e.loopEndTime);return()=>{clearTimeout(n),clearTimeout(r),clearTimeout(x),clearTimeout(v)}},[p]),t(I,{style:{width:d},children:e.data.map((n,r)=>u(S,{children:[t(H,{style:{height:$(n.height),backgroundColor:n.backgroundColor,animation:o?W(r):j(r),opacity:o?0:1}},n.id),t(_,{hidden:y,label:n.label,index:r})]},r))})},q=e=>t(B,{backgroundColor:e.backgroundColor,children:t(L,{children:t(K,{data:e.data,loopEndTime:e.loopEndTime})})}),Q="data/dataHome.json",Z="home",tt=()=>{const e=async()=>(await fetch(Q,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:o,status:i}=A(Z,e),d=14e3;return u(m,{children:[i==="error"&&t("p",{style:{color:"red"},children:"Error fetching data"}),i==="loading"&&u(m,{children:[t(C,{pageVideo:776443340,overlayOpacity:.1,overlayColor:T,loopEndTime:d}),t(w,{text:"home"})]}),i==="success"&&u(m,{children:[t(C,{pageVideo:776443340,overlayOpacity:.1,overlayColor:T,loopEndTime:d}),t(w,{text:"home"}),t(q,{columnCount:7,data:o,loopEndTime:d,backgroundColor:1}),t(M,{buttonTo:"/practice_areas",buttonText:"What we do",backgroundColor:4}),t(U,{})]})]})};export{tt as default};
