import{j as e,b as s,F as l,r as c}from"./bannerCSS-18d11c47.js";import{C as m}from"./callOut-19f36580.js";import{F as d}from"./fetch-46dff3be.js";const g=({jsonFile:a})=>{const{data:r,loading:o,error:t}=d({file:a});return o?e("div",{children:"Loading..."}):t?s("div",{children:["Error: ",t.message]}):e(l,{children:r&&r.length>0?r.map((i,n)=>c.createElement(m,{...i,key:n})):e("div",{style:{color:"white"},children:"Data Fetch error in Page component"})})};export{g as C};
