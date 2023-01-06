import{s as l,B as i,j as o}from"./bannerCSS-9b2ceb0f.js";import{i as e,j as a,k as r}from"./index-c06fd0ae.js";const m=t=>o(c,{children:o(d,{color:t.color,children:t.title})}),c=l.div`
  text-align: left;
  width: 100%;
  min-height: 50px;
  /* background: red; */
`,d=l.h3`
  color: ${t=>t.color===""||!t.color?e:t.color};
  @media (min-width: ${i}px) {
    ${a}
  }
  @media (max-width: ${i}px) {
    ${r}
  }
`;export{m as T};
