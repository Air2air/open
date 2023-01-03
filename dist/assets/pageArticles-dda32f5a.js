import{s as o,B as e,j as t,f as s,b as i}from"./styled-components.browser.esm-fe26e059.js";import{i as x,b as g,L as m,S as h,d as u}from"./index-0f05db7b.js";import{u as b}from"./useQuery-68b90f55.js";const f=240,$=140,l=f,r=280,p=$,n=240,w=d=>t(s,{children:t(g,{children:t(k,{children:d.data.map(a=>t(m,{to:a.to,children:i(C,{children:[t(T,{style:{backgroundImage:`url(/images/content/${a.image})`},className:"card-background"}),i(_,{children:[t(y,{className:"card-block"}),t(E,{children:a.title})]})]})},a.id))})})}),k=o.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  /* background: gold; */
`,C=o.div`
  margin: 20px 12px;
  position: relative;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .card-background {
    filter: brightness(0.5);
    transform: scale(1);
  }
  .card-block {
    transition: all 600ms;
    background-color: rgba(0, 0, 0, 0);
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
  @media (min-width: ${e}px) {
    height: ${l}px;
    width: ${r}px;
  }
  @media (max-width: ${e}px) {
    height: ${p}px;
    width: ${n}px;
  }
  /* background-color: blue; */
`,T=o.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: ${e}px) {
    height: ${l}px;
    width: ${r}px;
  }
  @media (max-width: ${e}px) {
    height: ${p}px;
    width: ${n}px;
  }
  /* background-color: blue; */
`,_=o.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  @media (min-width: ${e}px) {
    height: ${l}px;
    width: ${r}px;
  }
  @media (max-width: ${e}px) {
    height: ${p}px;
    width: ${n}px;
  }
  /* background-color: blue; */
`,y=o.div`
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: ${e}px) {
    height: 50%;
    width: ${r}px;
  }
  @media (max-width: ${e}px) {
    height: 50%;
    width: ${n}px;
  }
`,E=o.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  color: ${x};
  padding: 30px;
  box-sizing: border-box;
  font-weight: 400;
  font-family: "Roboto Condensed", sans-serif;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  @media (min-width: ${e}px) {
    height: 50%;
    width: ${r}px;
    font-size: 1.3em;
  }
  @media (max-width: ${e}px) {
    height: 50%;
    width: ${n}px;
    font-size: 1.3em;
  }
  /* background-color: blue; */
`,D="data/dataArticles.json",I="articles",A=()=>{const d=async()=>(await fetch(D,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:a,status:c}=b(I,d);return i(s,{children:[c==="error"&&t("p",{style:{color:"red"},children:"Error fetching data"}),c==="loading"&&i(s,{children:[t(h,{height:140}),t(u,{text:"articles"})]}),c==="success"&&i(s,{children:[t(h,{height:140}),t(w,{data:a})]})]})};export{A as default};
