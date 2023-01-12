import{s as i,u as n,B as e,m as a}from"./bannerComponents-3c2cd0d6.js";import{w as o,x as r,P as d,K as s}from"./index-7bc0c802.js";const h=t=>a(m,{style:{animation:t.hidden?"":s(t.index)},children:a(l,{style:{transform:t.rotate?"rotate(90deg)":""},children:t.label})},t.index),m=i.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: +1;
  opacity: 0;
  /* display: none; */
  /* background: red; */
`,l=i.div`
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
