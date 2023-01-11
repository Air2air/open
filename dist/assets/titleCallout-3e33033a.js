import{s as l,B as o,j as i}from"./bannerCSS-18d11c47.js";import{q as e,v as a,w as r}from"./index-6ddabe69.js";const m=t=>i(c,{children:i(d,{color:t.color,children:t.title})}),c=l.div`
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
`;export{m as T};
