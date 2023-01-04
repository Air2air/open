import{s as a,B as t,H as b,k as $,b as n,j as e,l as f,C as w,e as k,f as r}from"./styled-components.browser.esm-e2f2eb67.js";import{i as E,j as g,k as _,l as C,m as I,T,A as v,b as A,L as y,d as O}from"./index-84b97dce.js";import{u as N}from"./useQuery-1e8173fd.js";const d=380,c=280,H=200,B=140,p=H,s=280,m=B,l=240,D=a.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${E};
  @media (min-width: ${t}px) {
    padding-top: ${b}px;
    height: auto;
  }
  @media (max-width: ${t}px) {
    padding-top: ${$}px;
    height: auto;
  }
`,R=a.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  /* background: gold; */
`,L=a.div`
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
  @media (min-width: ${t}px) {
    height: ${p}px;
    width: ${s}px;
  }
  @media (max-width: ${t}px) {
    height: ${m}px;
    width: ${l}px;
  }
  /* background-color: blue; */
`,S=a.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: ${t}px) {
    height: ${p}px;
    width: ${s}px;
  }
  @media (max-width: ${t}px) {
    height: ${m}px;
    width: ${l}px;
  }
  /* background-color: blue; */
`,j=a.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  @media (min-width: ${t}px) {
    height: ${p}px;
    width: ${s}px;
  }
  @media (max-width: ${t}px) {
    height: ${m}px;
    width: ${l}px;
  }
  /* background-color: blue; */
`,z=a.div`
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: ${t}px) {
    height: 50%;
    width: ${s}px;
  }
  @media (max-width: ${t}px) {
    height: 50%;
    width: ${l}px;
  }
`,P=a.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  color: ${g};
  padding: 30px;
  box-sizing: border-box;
  font-weight: 400;
  font-family: "Roboto Condensed", sans-serif;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  @media (min-width: ${t}px) {
    height: 50%;
    width: ${s}px;
    font-size: 1.3em;
  }
  @media (max-width: ${t}px) {
    height: 50%;
    width: ${l}px;
    font-size: 1.3em;
  }
  /* background-color: blue; */
`,G=i=>n(M,{children:[e(W,{style:{backgroundImage:`url(/images/content/${i.image})`}}),e(K,{children:n("div",{className:"code-wrapper",children:[e("div",{className:"bracket",children:"["}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"prompt"'}),":",e("span",{className:"value",children:'"An oil painting by matisse showing diagrams and doctors"'}),e("span",{className:"brace",children:"},"})]}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"model"'}),":",e("span",{className:"value",children:'"text-davinci-003"'}),e("span",{className:"brace",children:"},"})]}),n("div",{className:"indent",children:[e("span",{className:"brace",children:"{"}),e("span",{className:"key",children:'"top_p"'}),":",e("span",{className:"value",children:"1.2"}),e("span",{className:"brace",children:"},"})]}),e("div",{className:"bracket",children:"]"})]})})]}),x=200,u=200,M=a.div`
  float: right;
  @media (min-width: ${t}px) {
    margin: 0 0 40px 40px;
    height: ${d+x}px;
    width: ${d}px;
  }
  @media (max-width: ${t}px) {
    height: ${c+u}px;
    width: ${c}px;
  }

  /* background-color: blue; */
`,W=a.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: ${t}px) {
    height: ${d}px;
    width: ${d}px;
  }
  @media (max-width: ${t}px) {
    height: ${c}px;
    width: ${c}px;
  }
  /* background-color: blue; */
`,K=a.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  box-sizing: border-box;
  padding: 30px;
  font-family: "Fira Code", sans-serif;
  font-size: 0.9rem;
  line-height: 1.4rem;

  @media (min-width: ${t}px) {
    height: ${x}px;
    width: ${d}px;
  }
  @media (max-width: ${t}px) {
    height: ${u}px;
    width: ${c}px;
  }
  color: ${g};
  background-color: ${_};
  .code-wrapper {
    height: auto;
  }
  .bracket {
    font-weight: bold;
    color: gold;
  }
  .indent {
    margin-left: 20px;
  }
  .brace {
    font-weight: bold;
    color: lightskyblue;
  }
  .key {
    color: lightgreen;
  }
  .value {
    color: lightcoral;
  }
`,F=i=>{const o=I(i.text);return e(r,{children:e(Z,{style:{background:i.backgroundColor},children:n(q,{children:[e(T,{title:i.title}),e(v,{animateIn:"animate__fadeIn",delay:10,offset:100,children:n(Q,{children:[e(G,{...i}),o]})})]})})})},Z=a.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  min-height: ${f}px;
`,q=a.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${t}px) {
    padding: 50px 0;
    width: ${w};
  }
  @media (max-width: ${t}px) {
    padding: 20px 0;
    width: ${k};
  }
  /* background: red;; */
`,Q=a.div`
  color: ${C};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  height: auto;
  text-align: left;
  @media (min-width: ${t}px) {
    font-size: 1.3em;
    line-height: 1.7em;
  }
  @media (max-width: ${t}px) {
    font-size: 1.1em;
    line-height: 1.7em;
  }
`,U=i=>n(r,{children:[e(D,{children:e(A,{children:e(R,{children:i.data.map(o=>e(y,{to:o.to,children:n(L,{children:[e(S,{style:{backgroundImage:`url(/images/content/${o.image})`},className:"card-background"}),n(j,{children:[e(z,{className:"card-block"}),e(P,{children:o.title})]})]})},o.id))})})}),i.data.map(o=>e(F,{...o}))]}),X=i=>e(U,{...i}),J="data/dataArticles.json",V="articles",ae=()=>{const i=async()=>(await fetch(J,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:o,status:h}=N(V,i);return n(r,{children:[h==="error"&&e("p",{style:{color:"red"},children:"Error fetching data"}),h==="loading"&&e(r,{children:e(O,{text:"articles"})}),h==="success"&&e(r,{children:e(X,{data:o})})]})};export{ae as default};
