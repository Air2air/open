import{b as e,F as n,j as r}from"./bannerCSS-18d11c47.js";import{R as d}from"./rowButton-25add37e.js";import{e as c,N as h,B as g,S as m,a as p,O as u,P as C,Q as b,R as k,T as v,U as B,V as f,$ as j}from"./index-4213c5a9.js";import{C as x,F as y}from"./callOutList-425c1166.js";import"./buttonComponents-f575d892.js";import"./callOut-2f140b1b.js";import"./titleCallout-cf478d1d.js";import"./index-be224f05.js";const F=784844948,L="markets",D=()=>e(n,{children:[r(c,{pageVideo:F,overlayOpacity:.4,overlayColor:h}),r(g,{text:L}),r(O,{jsonFile:"/data/marketsChart.json"}),r(d,{buttonTo:"/vision",buttonText:"Vision",backgroundColor:1}),r(m,{height:40,backgroundColor:1}),r(x,{jsonFile:"/data/marketsContent.json"})]}),O=({jsonFile:i})=>{const{data:o,loading:s,error:t}=y({file:i});return s?r("div",{children:"Loading..."}):t?e("div",{children:["Error: ",t.message]}):r(n,{children:o&&o.length>0?r(p,{backgroundColor:1,children:r(u,{children:e(C,{children:[o.map((a,l)=>e(b,{children:[r(k,{style:{height:v(a.height),backgroundColor:a.backgroundColor,animation:B(a.id)}}),r(f,{label:a.label,index:a.id})]},l)),e(j,{children:[r("div",{children:"$1.2T"}),r("div",{children:"$800B"}),r("div",{children:"$400B"}),r("div",{style:{height:10},children:" "})]})]})})}):r("div",{style:{color:"white"},children:"Data Fetch error in Page component"})})};export{D as default};
