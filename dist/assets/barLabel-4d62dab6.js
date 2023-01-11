import{s as i,B as e,j as a}from"./bannerCSS-18d11c47.js";import{q as n,G as o,H as r,W as d,U as s}from"./index-6ddabe69.js";const h=t=>a(l,{style:{animation:t.hidden?"":s(t.index)},children:a(m,{style:{transform:t.rotate?"rotate(90deg)":""},children:t.label})},t.index),l=i.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: +1;
  opacity: 0;
  /* display: none; */
  /* background: red; */
`,m=i.div`
  position: absolute;
  text-transform: uppercase;
  color: ${n};
  @media (min-width: ${e}px) {
    ${o};
    bottom: 10%;
    width: 100%;
    text-align: center;
  }
  @media (max-width: ${e}px) {
    ${r};
    left: 0%;
    bottom: ${d+20}px;
    text-align: right;
    transform-origin: 20% 18%;
    transform: rotate(90deg);
    min-width: 160px;
  }
  /* background: green; */
`;export{h as B};
