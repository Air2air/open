import{m as o,n,F as s,E as c}from"./bannerComponents-2e57662a.js";import{P as m,C as g,Q as u,I as C,J as p,K as b,M as f,N as k,B as y,S as t}from"./index-702dcae0.js";import{R as e}from"./rowButton-cb6301a5.js";import{C as j}from"./callOutList-ba43aaae.js";import{F as B}from"./fetch-9100cff1.js";import{B as F}from"./barLabel-341f9c71.js";import{H as v}from"./heading-e9117604.js";import"./buttonComponents-6d835e97.js";import"./callOut-3e620c90.js";import"./titleCallout-5f935a7d.js";import"./calloutComponents-10ea915f.js";import"./index-bf9313bc.js";const x=({jsonFile:l})=>{const{data:a,loading:d,error:i}=B({file:l});return d?o(m,{}):i?n("div",{children:["Error: ",i.message]}):o(s,{children:a&&a.length>0?o(g,{backgroundColor:3,children:o(u,{children:o(C,{children:a.map((r,h)=>n(p,{children:[o(b,{style:{height:f(r.height),backgroundColor:r.backgroundColor,animation:k(r.id)}}),o(F,{label:r.label,index:r.id})]},h))})})}):o("div",{style:{color:"white"},children:"Data Fetch error in Chart component"})})},A=()=>n(s,{children:[o(y,{pageVideo:776451115,overlayOpacity:.1,overlayColor:c}),o(v,{jsonFile:"/data/visionHeading.json"}),o(x,{jsonFile:"/data/visionChart.json"}),o(e,{buttonTo:"/history",buttonText:"History",backgroundColor:3}),o(t,{height:40,backgroundColor:3}),o(j,{jsonFile:"/data/visionContent.json"}),o(t,{height:40,backgroundColor:3}),o(e,{buttonTo:"/history",buttonText:"History",backgroundColor:3}),o(t,{height:40,backgroundColor:3})]});export{A as default};