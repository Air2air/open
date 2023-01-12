import{s as i,B as a,i as v,p as I,q as N,u as E,A as O,m as e,n,r as u,F as c,D as A}from"./bannerComponents-3c2cd0d6.js";import{q as D,v as B,w as y,x as L,y as P,z as R,D as $,C as S,A as W,b as k,S as f}from"./index-7bc0c802.js";import{u as M}from"./useQuery-4d69af5e.js";import{p as z}from"./index-e5772ce4.js";import{T as F}from"./titleCallout-89cb4ba6.js";import{R as H}from"./rowButton-34df14be.js";import"./buttonComponents-9f4b8032.js";const K=i.div`
  margin: 20px 0;
  position: relative;
  top: 0;
  height: auto;
`,j=i.div`
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
`,G=i.div`
  color: ${N};
  height: auto;
  text-align: left;
  @media (min-width: ${a}px) {
    /* ${D} */
  }
  @media (max-width: ${a}px) {
    /* ${B} */
  }
`,q=60,U=60,b=180,m=180,w=180,g=180,Z=i.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  @media (min-width: ${a}px) {
    padding-top: ${q}px;
  }
  @media (max-width: ${a}px) {
    padding-top: ${U}px;
  }
  /* background: red; */
`,Q=i.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  /* background: gold; */
`,X=i.div`
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
`,J=i.div`
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
`,V=i.div`
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
`,Y=i.div`
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
`,ee=i.div`
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
    ${y}
  }
  @media (max-width: ${a}px) {
    height: 50%;
    ${L}
  }
  /* background-color: blue; */
`,l=400,h=180,_=t=>e(te,{children:n("div",{className:"code-wrapper",children:[e("div",{className:"bracket",children:"["}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"prompt"'}),":",n("span",{className:"value",children:['"',t.code,'"']}),e("span",{className:"brace",children:"},"})]}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"model"'}),":",e("span",{className:"value",children:'"text-davinci-003"'}),e("span",{className:"brace",children:"},"})]}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"top_p"'}),":",e("span",{className:"value",children:"1.2"}),e("span",{className:"brace",children:"},"})]}),e("div",{className:"bracket",children:"]"})]})}),te=i.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: ${a}px) {
    ${P}
    padding: 30px;
    /* height: 100%; */
    width: ${l}px;
  }
  @media (max-width: ${a}px) {
    ${R}
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
`,ae=t=>n(ne,{children:[e(re,{style:{backgroundImage:`url(/images/content/${t.image})`}}),e(_,{...t})]}),ie=240,ne=i.div`
  float: right;
  margin: 0 0 40px 40px;
  height: ${l+ie}px;
  width: ${l}px;
  /* background-color: blue; */
`,re=i.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${l}px;
  width: ${l}px;
  /* background-color: blue; */
`,oe=t=>n(de,{children:[e(ce,{style:{backgroundImage:`url(/images/content/${t.image})`}}),e(_,{...t})]}),de=i.div`
  float: top;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${h}px;
  /* background-color: blue; */
`,ce=i.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${h}px;
  width: ${h}px;
  /* background-color: blue; */
`,se=t=>{const[r,d]=u.useState(window.innerWidth);return u.useEffect(()=>{const s=()=>d(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e(c,{children:r>a?e(ae,{...t}):e(oe,{...t})})},le=t=>{const[r,d]=u.useState(0);function s(p){let o=document.getElementsByClassName("cardContent");for(let x=0;x<o.length;x++)o[x].classList.remove("active");o[p].classList.add("active")}const C=z(t.data[r].text);return n(c,{children:[e(S,{backgroundColor:4,children:e(Z,{children:e(Q,{children:t.data.map((p,o)=>n(X,{className:`card ${o===r?"active":""}`,onClick:()=>{d(o),s(o)},children:[e(J,{style:{backgroundImage:`url(/images/content/${p.image})`}}),e(V,{children:e(Y,{children:e(ee,{children:p.title})})})]},o))})})}),e(K,{className:"cardContent",style:{background:t.backgroundColor},children:n(j,{children:[e(F,{title:t.data[r].title}),e(W,{animateIn:"animate__fadeIn",delay:10,offset:100,children:n(G,{children:[e(se,{image:t.data[r].image,code:t.data[r].code}),C]})})]})})]})};i.div`
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
`;const T=()=>e(c,{children:e(A,{})}),pe="/data/dataArticles.json",he="articles",ke=()=>{const t=async()=>(await fetch(pe,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:r,status:d}=M(he,t);return n(c,{children:[d==="error"&&n(c,{children:[e(T,{}),e(k,{text:"error"})]}),d==="loading"&&n(c,{children:[e(T,{}),e(k,{text:"articles"})]}),d==="success"&&e(c,{children:e(le,{data:r})}),e(f,{height:40,backgroundColor:2}),e(H,{buttonTo:"/contact",buttonText:"Contact"}),e(f,{height:40,backgroundColor:2})]})};export{ke as default};
