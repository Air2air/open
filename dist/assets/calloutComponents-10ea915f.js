import{s as i,B as a,i as e,p as o,q as s,T as n,m as t}from"./bannerComponents-2e57662a.js";import{j as T,k as p,C as l}from"./index-702dcae0.js";const r=i.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${a}px) {
    padding: 50px 0;
    /* width: ${e}; */
  }
  @media (max-width: ${a}px) {
    padding: 20px 0;
    /* width: ${o}; */
  }
  /* background: red;; */
`,x=i.div`
  color: ${s};
  height: auto;
  text-align: left;
  opacity: ${n};
  /* padding-bottom: 20px; */
  @media (min-width: ${a}px) {
    ${T};
  }
  @media (max-width: ${a}px) {
    ${p};
  }
`,O=d=>t(l,{...d,children:t("div",{style:{height:400}})});export{O as C,r as a,x as b};
