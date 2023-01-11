import{s as i,B as a,i as v,p as I,q as N,u as E,D as O,m as e,n,r as u,F as c}from"./bannerComponents-b17e5c41.js";import{q as A,v as D,w as B,x as y,y as L,z as P,D as $,C as R,A as S,B as k,S as f}from"./index-24415fcf.js";import{u as W}from"./useQuery-b813b750.js";import{p as M}from"./index-9076de00.js";import{T as z}from"./titleCallout-e41bbb77.js";import{R as F}from"./rowButton-1ab95f14.js";import{B as T}from"./bannerLoading-d0dd46e1.js";import"./buttonComponents-841b3e60.js";const H=i.div`
  margin: 20px 0;
  position: relative;
  top: 0;
  height: auto;
`,K=i.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${a}px) {
    padding: 50px 0;
    width: ${v};
  }
  @media (max-width: ${a}px) {
    padding: 20px 0;
    width: ${I};
  }
  /* background: red;; */
`,j=i.div`
  color: ${N};
  height: auto;
  text-align: left;
  @media (min-width: ${a}px) {
    /* ${A} */
  }
  @media (max-width: ${a}px) {
    /* ${D} */
  }
`,G=60,q=60,b=180,m=180,w=180,g=180,U=i.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  @media (min-width: ${a}px) {
    padding-top: ${G}px;
  }
  @media (max-width: ${a}px) {
    padding-top: ${q}px;
  }
  /* background: red; */
`,Z=i.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  /* background: gold; */
`,Q=i.div`
  margin: 20px 12px;
  position: relative;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .card-background {
    filter: brightness(0.7);
    transform: scale(1);
  }
  .card-block {
    transition: all 600ms;
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:hover {
    .card-background {
      filter: brightness(1);
      transform: scale(1.03);
    }
    .card-block {
      /* transition: all 600ms; */
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  overflow: hidden;
  @media (min-width: ${a}px) {
    height: ${b}px;
    width: ${m}px;
  }
  @media (max-width: ${a}px) {
    height: ${w}px;
    width: ${g}px;
  }
  /* background-color: blue; */
`,X=i.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: ${a}px) {
    height: ${b}px;
    width: ${m}px;
  }
  @media (max-width: ${a}px) {
    height: ${w}px;
    width: ${g}px;
  }
  background-color: blue;
`,J=i.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  @media (min-width: ${a}px) {
    height: ${b}px;
    width: ${m}px;
  }
  @media (max-width: ${a}px) {
    height: ${w}px;
    width: ${g}px;
  }
  /* background-color: blue; */
`,V=i.div`
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: ${a}px) {
    height: 50%;
    width: ${m}px;
  }
  @media (max-width: ${a}px) {
    height: 50%;
    width: ${g}px;
  }
`,Y=i.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  color: ${E};
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  @media (min-width: ${a}px) {
    height: 50%;
    ${B}
  }
  @media (max-width: ${a}px) {
    height: 50%;
    ${y}
  }
  /* background-color: blue; */
`,l=400,h=180,_=t=>e(ee,{children:n("div",{className:"code-wrapper",children:[e("div",{className:"bracket",children:"["}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"prompt"'}),":",n("span",{className:"value",children:['"',t.code,'"']}),e("span",{className:"brace",children:"},"})]}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"model"'}),":",e("span",{className:"value",children:'"text-davinci-003"'}),e("span",{className:"brace",children:"},"})]}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"top_p"'}),":",e("span",{className:"value",children:"1.2"}),e("span",{className:"brace",children:"},"})]}),e("div",{className:"bracket",children:"]"})]})}),ee=i.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: ${a}px) {
    ${L}
    padding: 30px;
    /* height: 100%; */
    width: ${l}px;
  }
  @media (max-width: ${a}px) {
    ${P}
    padding: 10px;
    height: 100%;
    width: ${h}px;
  }

  .code-wrapper {
    height: auto;
  }
  .bracket {
    font-weight: ${$};
    color: gold;
  }
  .indent {
    margin-left: 20px;
  }
  .brace {
    font-weight: ${$};
    color: #22aaff;
  }
  .key {
    color: #3ae998;
  }
  .value {
    color: #faab4a;
  }
  background-color: ${O};
`,te=t=>n(ie,{children:[e(ne,{style:{backgroundImage:`url(/images/content/${t.image})`}}),e(_,{...t})]}),ae=240,ie=i.div`
  float: right;
  margin: 0 0 40px 40px;
  height: ${l+ae}px;
  width: ${l}px;
  /* background-color: blue; */
`,ne=i.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${l}px;
  width: ${l}px;
  /* background-color: blue; */
`,re=t=>n(oe,{children:[e(de,{style:{backgroundImage:`url(/images/content/${t.image})`}}),e(_,{...t})]}),oe=i.div`
  float: top;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${h}px;
  /* background-color: blue; */
`,de=i.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${h}px;
  width: ${h}px;
  /* background-color: blue; */
`,ce=t=>{const[r,d]=u.useState(window.innerWidth);return u.useEffect(()=>{const s=()=>d(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e(c,{children:r>a?e(te,{...t}):e(re,{...t})})},se=t=>{const[r,d]=u.useState(0);function s(p){let o=document.getElementsByClassName("cardContent");for(let x=0;x<o.length;x++)o[x].classList.remove("active");o[p].classList.add("active")}const C=M(t.data[r].text);return n(c,{children:[e(R,{backgroundColor:4,children:e(U,{children:e(Z,{children:t.data.map((p,o)=>n(Q,{className:`card ${o===r?"active":""}`,onClick:()=>{d(o),s(o)},children:[e(X,{style:{backgroundImage:`url(/images/content/${p.image})`}}),e(J,{children:e(V,{children:e(Y,{children:p.title})})})]},o))})})}),e(H,{className:"cardContent",style:{background:t.backgroundColor},children:n(K,{children:[e(z,{title:t.data[r].title}),e(S,{animateIn:"animate__fadeIn",delay:10,offset:100,children:n(j,{children:[e(ce,{image:t.data[r].image,code:t.data[r].code}),C]})})]})})]})};i.div`
  display: grid;
  flex: 0 0 100%;
  gap: 2rem;
  /* padding: 10px 0 0 0; */
  width: 100%;
  height: auto;
  @media (min-width: 701px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 301px) and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  background: gold;
`;const le="/data/dataArticles.json",pe="articles",ke=()=>{const t=async()=>(await fetch(le,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:r,status:d}=W(pe,t);return n(c,{children:[d==="error"&&n(c,{children:[e(T,{}),e(k,{text:"error"})]}),d==="loading"&&n(c,{children:[e(T,{}),e(k,{text:"articles"})]}),d==="success"&&e(c,{children:e(se,{data:r})}),e(f,{height:40,backgroundColor:2}),e(F,{buttonTo:"/contact",buttonText:"Contact"}),e(f,{height:40,backgroundColor:2})]})};export{ke as default};
