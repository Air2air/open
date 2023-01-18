import{s as i,e as d,J as e,g as a,k as r,l as p,B as n,m as l,j as t,F as c}from"./index-5c6e6edb.js";const s=40,h="250px",m="100%",x=i.div`
  ${d};
  color: ${e};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${s}px;
  transition: all 300ms;
  text-transform: uppercase;
  background: ${a};
  &:hover {
    background: ${r};
  }
  span {
    margin-left: 8px;
  }
  .icon {
    height: 24px;
  }
`;i.div`
  ${p};
  height: ${s}px;
  color: ${e};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${a};
  &:hover {
    background: ${r};
  }
  min-width: ${h};
  @media (min-width: ${n}px) {
    display: inline-flex;
  }
  @media (max-width: ${n}px) {
    display: none;
  }
`;i.div`
  ${l};
  height: ${s}px;
  color: ${e};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  width: ${m};
  span {
    margin-right: 10px;
  }
  background: ${a};
  &:hover {
    background: ${r};
  }
  @media (min-width: ${n}px) {
    display: none;
  }
  @media (max-width: ${n}px) {
    display: inline-flex;
  }
`;const O=o=>t(c,{children:t("a",{href:o.to,children:t(x,{children:t("span",{children:o.text})})})});export{O as B};
