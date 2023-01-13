import{s as l,z as e,B as o,m as i}from"./bannerComponents-2e57662a.js";import{f as a,g as r}from"./index-702dcae0.js";const s=t=>i(c,{children:i(d,{color:t.color,children:t.title})}),c=l.div`
  text-align: left;
  width: 100%;
  min-height: 50px;
  /* background: red; */
`,d=l.h3`
  color: ${t=>t.color===""||!t.color?e:t.color};
  @media (min-width: ${o}px) {
    ${a}
  }
  @media (max-width: ${o}px) {
    ${r}
  }
`;export{s as T};
