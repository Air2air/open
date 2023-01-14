import{s as o,B as n}from"./bannerComponents-cd50e550.js";import{F as l,h as c,i as d}from"./index-b9c5e089.js";const i=40,O="250px",g="100%",a="hsl(0, 0%, 90%)",s="hsl(0, 86%, 36%)",e="hsl(0, 86%, 46%)",r="rgba(0, 0, 0, 0.4)",p="rgba(50, 50, 50, 0.4)",T=o.div`
  ${l};
  color: ${a};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${i}px;
  transition: all 300ms;
  text-transform: uppercase;
  background: ${s};
  &:hover {
    background: ${e};
  }
  span {
    margin-left: 8px;
  }
  .icon {
    height: 24px;
  }
`,x=o.div`
  ${c};
  height: ${i}px;
  color: ${a};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${t=>t.buttonColor==="gray"?r:s};
  &:hover {
    background: ${t=>t.buttonColor==="gray"?p:e};
  }
  min-width: ${O};
  @media (min-width: ${n}px) {
    display: inline-flex;
  }
  @media (max-width: ${n}px) {
    display: none;
  }
`,$=o.div`
  ${d};
  height: ${i}px;
  color: ${a};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  width: ${g};
  span {
    margin-right: 10px;
  }
  background: ${t=>t.buttonColor==="gray"?r:s};
  &:hover {
    background: ${t=>t.buttonColor==="gray"?p:e};
  }
  @media (min-width: ${n}px) {
    display: none;
  }
  @media (max-width: ${n}px) {
    display: inline-flex;
  }
`;export{i as B,x as a,$ as b,T as c};
