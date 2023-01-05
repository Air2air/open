import{s as i,B as a,j as e,b as n,r as m,F as d,C as k,d as w}from"./bannerCSS-7d27781b.js";import{j as _,k as O,l as T,m as E,n as I,o as f,q as b,r as N,s as A,t as C,u as v,v as D,T as y,A as B,c as L,e as R}from"./index-91a95fb3.js";import{u as P}from"./useQuery-c3e1642a.js";const l=400,h=180,S=210,H=190,W=200,M=140,x=W,p=280,u=M,g=240,z=i.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${_};
  @media (min-width: ${a}px) {
    padding-top: ${S}px;
    height: auto;
  }
  @media (max-width: ${a}px) {
    padding-top: ${H}px;
    height: auto;
  }
`,F=i.div`
  box-sizing: border-box;
  margin: 40px 0;
  display: flex;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  /* background: gold; */
`,K=i.div`
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
    height: ${x}px;
    width: ${p}px;
  }
  @media (max-width: ${a}px) {
    height: ${u}px;
    width: ${g}px;
  }
  /* background-color: blue; */
`,j=i.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: ${a}px) {
    height: ${x}px;
    width: ${p}px;
  }
  @media (max-width: ${a}px) {
    height: ${u}px;
    width: ${g}px;
  }
  /* background-color: blue; */
`,G=i.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  @media (min-width: ${a}px) {
    height: ${x}px;
    width: ${p}px;
  }
  @media (max-width: ${a}px) {
    height: ${u}px;
    width: ${g}px;
  }
  /* background-color: blue; */
`,U=i.div`
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: ${a}px) {
    height: 50%;
    width: ${p}px;
  }
  @media (max-width: ${a}px) {
    height: 50%;
    width: ${g}px;
  }
`,q=i.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  color: ${O};
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  @media (min-width: ${a}px) {
    height: 50%;
  ${T}
  }
  @media (max-width: ${a}px) {
    height: 50%;
    ${E}
  }
  /* background-color: blue; */
`,$=t=>e(Z,{children:n("div",{className:"code-wrapper",children:[e("div",{className:"bracket",children:"["}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"prompt"'}),":",n("span",{className:"value",children:['"',t.code,'"']}),e("span",{className:"brace",children:"},"})]}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"model"'}),":",e("span",{className:"value",children:'"text-davinci-003"'}),e("span",{className:"brace",children:"},"})]}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"top_p"'}),":",e("span",{className:"value",children:"1.2"}),e("span",{className:"brace",children:"},"})]}),e("div",{className:"bracket",children:"]"})]})}),Z=i.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: ${a}px) {
    ${I}
    padding: 30px;
    height: 100%;
    width: ${l}px;
  }
  @media (max-width: ${a}px) {
    ${f}
    padding: 10px;
    height: 100%;
    width: ${h}px;
  }

  .code-wrapper {
    height: auto;
  }
  .bracket {
    font-weight: ${b};
    color: gold;
  }
  .indent {
    margin-left: 20px;
  }
  .brace {
    font-weight: ${b};
    color: #22aaff;
  }
  .key {
    color: #3ae998;
  }
  .value {
    color: #faab4a;
  }
  background-color: ${N};
`,Q=t=>n(J,{children:[e(V,{style:{backgroundImage:`url(/images/content/${t.image})`}}),e($,{...t})]}),X=240,J=i.div`
  float: right;
  margin: 0 0 40px 40px;
  height: ${l+X}px;
  width: ${l}px;
  /* background-color: blue; */
`,V=i.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${l}px;
  width: ${l}px;
  /* background-color: blue; */
`,Y=t=>n(ee,{children:[e(te,{style:{backgroundImage:`url(/images/content/${t.image})`}}),e($,{...t})]}),ee=i.div`
  float: top;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${h}px;
  /* background-color: blue; */
`,te=i.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${h}px;
  width: ${h}px;
  /* background-color: blue; */
`,ae=t=>{const[o,c]=m.useState(window.innerWidth);return m.useEffect(()=>{const r=()=>c(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e(d,{children:o>a?e(Q,{...t}):e(Y,{...t})})},ie=t=>{const o=D(t.text);return e(d,{children:e(ne,{style:{background:t.backgroundColor},children:n(re,{children:[e(y,{title:t.title}),e(B,{animateIn:"animate__fadeIn",delay:10,offset:100,children:n(oe,{children:[e(ae,{...t}),o]})})]})})})},ne=i.div`
  margin: 20px 0;
  position: relative;
  top: 0;
  height: auto;
`,re=i.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${a}px) {
    padding: 50px 0;
    width: ${k};
  }
  @media (max-width: ${a}px) {
    padding: 20px 0;
    width: ${w};
  }
  /* background: red;; */
`,oe=i.div`
  color: ${A};
  height: auto;
  text-align: left;
  @media (min-width: ${a}px) {
    /* ${C} */
  }
  @media (max-width: ${a}px) {
    /* ${v} */
  }
`,ce=t=>{const[o,c]=m.useState(0);return n(d,{children:[e(z,{children:e(L,{children:e(F,{children:t.data.map((r,s)=>n(K,{onClick:()=>c(s),children:[e(j,{style:{backgroundImage:`url(/images/content/${r.image})`},className:"card-background"}),n(G,{children:[e(U,{className:"card-block"}),e(q,{children:r.title})]})]},s))})})}),t.data.map((r,s)=>e(ie,{...r,style:{display:o===s?"block":"none"}},s))]})},de=t=>e(ce,{...t}),se="/data/dataArticles.json",le="articles",me=()=>{const t=async()=>(await fetch(se,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:o,status:c}=P(le,t);return n(d,{children:[c==="error"&&e("p",{style:{color:"red"},children:"Error fetching data"}),c==="loading"&&e(d,{children:e(R,{text:"articles"})}),c==="success"&&e(d,{children:e(de,{data:o})})]})};export{me as default};
