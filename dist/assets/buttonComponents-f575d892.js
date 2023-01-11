import{s as o,B as n}from"./bannerCSS-18d11c47.js";import{F as l,x as c,y as d}from"./index-4213c5a9.js";const a=40,O="250px",i="hsl(0, 0%, 90%)",r="hsl(0, 86%, 36%)",s="hsl(0, 86%, 46%)",e="rgba(0, 0, 0, 0.4)",p="rgba(50, 50, 50, 0.4)",T=o.div`
  ${l};
  color: ${i};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${a}px;
  transition: all 300ms;
  text-transform: uppercase;
  background: ${r};
  &:hover {
    background: ${s};
  }
  span {
    margin-left: 8px;
  }
  .icon {
    height: 24px;
  }
`,h=o.div`
  ${c};
  height: ${a}px;
  color: ${i};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${t=>t.buttonColor==="gray"?e:r};
  &:hover {
    background: ${t=>t.buttonColor==="gray"?p:s};
  }
  min-width: ${O};
  @media (min-width: ${n}px) {
    display: inline-flex;
  }
  @media (max-width: ${n}px) {
    display: none;
  }
`,x=o.div`
  ${d};
  height: ${a}px;
  color: ${i};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  width: 100%;
  span {
    margin-right: 10px;
  }
  background: ${t=>t.buttonColor==="gray"?e:r};
  &:hover {
    background: ${t=>t.buttonColor==="gray"?p:s};
  }
  @media (min-width: ${n}px) {
    display: none;
  }
  @media (max-width: ${n}px) {
    display: inline-flex;
  }
`;export{a as B,h as a,x as b,T as c};
