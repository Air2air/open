import{s as i,B as a,C as _,d as C,j as e,b as n,r as u,F as s}from"./bannerCSS-312176e4.js";import{k as v,l as E,m as I,h as N,n as O,o as A,p as D,q as y,r as $,s as B,c as L,A as P,e as R,S as k}from"./index-e3d340cf.js";import{u as S}from"./useQuery-18b016b1.js";import{p as W}from"./index-e7ce6b91.js";import{T as M}from"./titleCallout-6bf5329d.js";import{R as F}from"./rowButton-6fbba9ee.js";import"./buttonCSS-4aba25bd.js";const H=i.div`
  margin: 20px 0;
  position: relative;
  top: 0;
  height: auto;
`,z=i.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${a}px) {
    padding: 50px 0;
    width: ${_};
  }
  @media (max-width: ${a}px) {
    padding: 20px 0;
    width: ${C};
  }
  /* background: red;; */
`,K=i.div`
  color: ${v};
  height: auto;
  text-align: left;
  @media (min-width: ${a}px) {
    /* ${E} */
  }
  @media (max-width: ${a}px) {
    /* ${I} */
  }
`,j=60,G=60,b=180,m=180,w=180,g=180,U=i.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  @media (min-width: ${a}px) {
    padding-top: ${j}px;
  }
  @media (max-width: ${a}px) {
    padding-top: ${G}px;
  }
  /* background: red; */
`,q=i.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  /* background: gold; */
`,Z=i.div`
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
`,Q=i.div`
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
`,X=i.div`
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
`,J=i.div`
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
`,V=i.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  color: ${N};
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  @media (min-width: ${a}px) {
    height: 50%;
    ${O}
  }
  @media (max-width: ${a}px) {
    height: 50%;
    ${A}
  }
  /* background-color: blue; */
`,l=400,p=180,f=t=>e(Y,{children:n("div",{className:"code-wrapper",children:[e("div",{className:"bracket",children:"["}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"prompt"'}),":",n("span",{className:"value",children:['"',t.code,'"']}),e("span",{className:"brace",children:"},"})]}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"model"'}),":",e("span",{className:"value",children:'"text-davinci-003"'}),e("span",{className:"brace",children:"},"})]}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"top_p"'}),":",e("span",{className:"value",children:"1.2"}),e("span",{className:"brace",children:"},"})]}),e("div",{className:"bracket",children:"]"})]})}),Y=i.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: ${a}px) {
    ${D}
    padding: 30px;
    /* height: 100%; */
    width: ${l}px;
  }
  @media (max-width: ${a}px) {
    ${y}
    padding: 10px;
    height: 100%;
    width: ${p}px;
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
  background-color: ${B};
`,ee=t=>n(ae,{children:[e(ie,{style:{backgroundImage:`url(/images/content/${t.image})`}}),e(f,{...t})]}),te=240,ae=i.div`
  float: right;
  margin: 0 0 40px 40px;
  height: ${l+te}px;
  width: ${l}px;
  /* background-color: blue; */
`,ie=i.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${l}px;
  width: ${l}px;
  /* background-color: blue; */
`,ne=t=>n(re,{children:[e(oe,{style:{backgroundImage:`url(/images/content/${t.image})`}}),e(f,{...t})]}),re=i.div`
  float: top;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${p}px;
  /* background-color: blue; */
`,oe=i.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${p}px;
  width: ${p}px;
  /* background-color: blue; */
`,de=t=>{const[r,d]=u.useState(window.innerWidth);return u.useEffect(()=>{const c=()=>d(window.innerWidth);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),e(s,{children:r>a?e(ee,{...t}):e(ne,{...t})})},ce=t=>{const[r,d]=u.useState(0);function c(h){let o=document.getElementsByClassName("cardContent");for(let x=0;x<o.length;x++)o[x].classList.remove("active");o[h].classList.add("active")}const T=W(t.data[r].text);return n(s,{children:[e(L,{backgroundColor:4,children:e(U,{children:e(q,{children:t.data.map((h,o)=>n(Z,{className:`card ${o===r?"active":""}`,onClick:()=>{d(o),c(o)},children:[e(Q,{style:{backgroundImage:`url(/images/content/${h.image})`}}),e(X,{children:e(J,{children:e(V,{children:h.title})})})]},o))})})}),e(H,{className:"cardContent",style:{background:t.backgroundColor},children:n(z,{children:[e(M,{title:t.data[r].title}),e(P,{animateIn:"animate__fadeIn",delay:10,offset:100,children:n(K,{children:[e(de,{image:t.data[r].image,code:t.data[r].code}),T]})})]})})]})};i.div`
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
`;const se="/data/dataArticles.json",le="articles",we=()=>{const t=async()=>(await fetch(se,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:r,status:d}=S(le,t);return n(s,{children:[d==="error"&&e("p",{style:{color:"red"},children:"Error fetching data"}),d==="loading"&&e(s,{children:e(R,{text:"articles"})}),d==="success"&&e(s,{children:e(ce,{data:r})}),e(k,{height:40,backgroundColor:2}),e(F,{buttonTo:"/contact",buttonText:"Contact"}),e(k,{height:40,backgroundColor:2})]})};export{we as default};
