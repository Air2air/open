import{s as i,B as a,j as e,b as o,F as s}from"./bannerCSS-18d11c47.js";import{C as g,v as x,w as f,z as m,D as C,E as p,a as u,S as d,e as T,N as $,B as E}from"./index-6ddabe69.js";import{B as O}from"./button-47c50852.js";import{F as I}from"./fetch-46dff3be.js";import"./buttonComponents-a90f10df.js";const c=250,b=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: ${c}px;
  transition: all 500ms;
  &:hover {
    .bgImage {
      opacity: 1;
      filter: none;
    }
  }
  .bgImage {
    opacity: 0.8;
    filter: grayscale(100%);
  }
  @media (min-width: ${a}px) {
    padding: 20px 0;
  }
  @media (max-width: ${a}px) {
    padding: 0;
  }
  /* background: gold; */
`,y=i.div`
  height: ${c}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,w=c*.8,_=i.div`
  flex: 1;
  width: 100%;
  height: ${w}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${a}px) {
    display: inline-flex;
  }
  @media (max-width: ${a}px) {
    display: none;
  }
`,k=i.h2`
  color: ${n=>n.color===""||!n.color?g:n.color};
  @media (min-width: ${a}px) {
    ${x}
  }
  @media (max-width: ${a}px) {
    ${f}
  }
`,v=i.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${m};
`,B=i.a`
  color: ${m};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${a}px) {
    ${C}
    font-size: 1.2em;
  }
  @media (max-width: ${a}px) {
    ${p}
    font-size: 1.1em;
  }
`,F=n=>"url(/images/content/"+n+")",L=({jsonFile:n})=>{const{data:r,loading:h,error:l}=I({file:n});return h?e("div",{children:"Loading..."}):l?o("div",{children:["Error: ",l.message]}):e(s,{children:r&&r.length>0?r.map((t,D)=>{u,t.backgroundColor,t.shortName,t.address,d,t.backgroundColor,O,d,t.backgroundColor,`${t.email}`,t.email,F(t.photo),t.id}):e("div",{style:{color:"white"},children:"Data Fetch error in List component"})})},R=()=>o(s,{children:[e(T,{pageVideo:769227014,overlayOpacity:.1,overlayColor:$}),e(E,{text:"contact"}),e(L,{jsonFile:"/data/contactContent.json"})]});export{R as default};
