import{s as i,B as t,a as p,b as T,C as c,c as g,F as _,d as $,e as f,f as w,g as O,j as m,h as e,r as d,i as x}from"./index-28fd10db.js";const B=i.div`
  /* position: absolute; */
  margin: 0 auto;
  top: 0;
  @media (min-width: ${t}px) {
    height: ${p}px;
    width: 100%;
  }
  @media (max-width: ${t}px) {
    height: ${T}px;
    width: 100%;
  }
  /* background: blue; */
`,D=i.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  margin: 0 auto 20px auto;
  @media (min-width: ${t}px) {
    height: 60%;
    width: ${c};
  }
  @media (max-width: ${t}px) {
    height: 60%;
    width: ${g};
  }
  /* background: green; */
`,A=i.div`
  @media (min-width: ${t}px) {
    ${_};
    color: ${$};
  }
  @media (max-width: ${t}px) {
    ${f}
  }
`,H=i.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 40%;
    width: ${c};
  }
  @media (max-width: ${t}px) {
    height: 40%;
    width: ${g};
  }
  /* background: red; */
`,I=i.div`
  height: auto;
  text-align: left;
  /* background: red; */
  @media (min-width: ${t}px) {
    ${w}
  }
  @media (max-width: ${t}px) {
    ${O}
  }
`,b=a=>m(B,{children:[e(D,{children:e(A,{children:a.title})}),e(H,{children:e(I,{children:a.text})})]}),C=({file:a})=>{const[o,r]=d.useState(null),[n,s]=d.useState(!0),[h,u]=d.useState(null),E={"Content-Type":"application/json",Accept:"application/json"};return d.useEffect(()=>{(async()=>{try{const N=await(await fetch(a,{headers:E})).json();r(N)}catch(l){u(l)}finally{s(!1)}})()},[a]),{data:o,loading:n,error:h}},S=({jsonFile:a})=>{const{data:o,loading:r,error:n}=C({file:a});return r?null:n?m("div",{children:["Error: ",n.message]}):e(x,{children:o.map((s,h)=>e("div",{style:{height:500,background:s.backgroundColor},children:e(b,{...s})},h))})},y=()=>e(x,{children:e(S,{jsonFile:"/data/homeContent.json"})});export{y as default};
