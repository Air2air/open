import{r as i,j as e,F as c,b as u}from"./bannerCSS-18d11c47.js";import{Q as k,R as T,U as w,a0 as B,a as I,O as E,P as H,e as R,N as j,B as F,S as d}from"./index-6ddabe69.js";import{R as g}from"./rowButton-5db528ae.js";import{C as L}from"./callOutList-9a167d01.js";import{F as O}from"./fetch-46dff3be.js";import{B as W}from"./barLabel-4d62dab6.js";import"./buttonComponents-a90f10df.js";import"./callOut-19f36580.js";import"./titleCallout-3e33033a.js";import"./index-be224f05.js";const p=(a,o)=>{const[s,r]=i.useState(!0),[t,l]=i.useState(!1),[C,b]=i.useState(50),h=20,f=100,x=()=>{const n=Math.random()*(f-h)+h;b(n)},m=3e3,v=5e3;i.useEffect(()=>{l(!0);const n=setInterval(()=>{x()},Math.random()*(v-m)+m);return()=>clearInterval(n)},[]),i.useEffect(()=>{r(!0);const n=setTimeout(()=>{r(!1)},500);return()=>{clearTimeout(n)}},[]);const S=`all ${B}ms`;return e(c,{children:u(k,{children:[e(T,{style:{height:C+"%",backgroundColor:a.backgroundColor,transition:S,animation:t?w(a.index):""}}),e(W,{hidden:s,label:a.label,index:a.index})]},o)})},y=({jsonFile:a})=>{const{data:o,loading:s,error:r}=O({file:a});return s?e("div",{children:"Loading..."}):r?u("div",{children:["Error: ",r.message]}):e(c,{children:o&&o.length>0?e(I,{backgroundColor:3,children:e(E,{children:e(H,{children:o.map((t,l)=>e(p,{index:l,title:t.title,label:t.label,value:t.value,backgroundColor:t.backgroundColor},t.id))})})}):e("div",{style:{color:"white"},children:"Data Fetch error in Page component"})})},q=()=>u(c,{children:[e(R,{pageVideo:776449715,overlayOpacity:.7,overlayColor:j}),e(F,{text:"whatwedo"}),e(y,{jsonFile:"/data/whatwedoChart.json"}),e(g,{buttonTo:"/casestudies",buttonText:"Case Studies",backgroundColor:3}),e(d,{height:40,backgroundColor:3}),e(L,{jsonFile:"/data/whatwedoContent.json"}),e(d,{height:40,backgroundColor:2}),e(g,{buttonTo:"/casestudies",buttonText:"Case Studies",backgroundColor:2}),e(d,{height:40,backgroundColor:2})]});export{q as default};
