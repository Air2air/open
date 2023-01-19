import{s as i,F as d,G as e,n as a,p as r,k as p,B as n,l,j as t,e as c}from"./index-de9958dc.js";const s=40,h="250px",m="100%",x=i.div`
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
`;const T=o=>t(c,{children:t("a",{href:o.to,children:t(x,{children:t("span",{children:o.text})})})});export{T as B};
