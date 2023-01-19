import{s as a,B as i,C as g,a as p,F as h,b as u,A as x,j as t,c as n,d as T,e as b}from"./index-bae9db71.js";import{F as f,C as w,B as E,H as O,R as r}from"./bannerImage-859cb47f.js";import{B as C}from"./button-75c1ebb4.js";import{T as _}from"./titleCallout-fb3f903e.js";const y=220,$=100,l=120,A=a(x)`
  display: flex;
  width: 100%;
  height: auto;
`,B=a.div`
  width: "100%";
  height: auto;
  @media (min-width: ${i}px) {
    padding-top: 10px;
    padding-bottom: 80px;
  }

  @media (max-width: ${i}px) {
    padding-top: 10px;
    padding-bottom: 20px;
  }
  /* background: gold; */
`,M=a.div`
  display: grid;
  flex: 0 0 100%;
  gap: 2rem;
  /* padding: 10px 0 0 0; */
  width: 100%;
  height: auto;
  @media (min-width: 701px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 301px) and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,k=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: ${y}px;
  min-width: ${$}px;
  /* margin-top: 20px; */
  /* background: gold; */
`,v=a.div`
  width: ${l}px;
  height: ${l}px;
  background-size: cover;
  background-color: ${g};
  filter: grayscale(100%);
`,I=a.div`
  padding: 12px 0;
  color: ${p};
  display: flex;
  align-items: center;

  /* background: red; */
  @media (min-width: ${i}px) {
    ${h};
  }
  @media (max-width: ${i}px) {
    ${u};
  }
  /* background: gold; */
`,F=({jsonFile:c})=>{const{data:o,loading:s,error:d}=f({file:c});return s?t(w,{}):d?n("div",{children:["Error: ",d.message]}):o&&o.length>0?t(T,{backgroundColor:0,children:n(B,{children:[t(_,{title:"Team"}),t(A,{animateIn:"animate__fadeIn",delay:0,offset:30,children:t(M,{children:o.map(e=>e.category==="Advisor"?n(k,{children:[t(v,{style:{backgroundImage:`url(/images/team/${e.photo})`}}),n(I,{children:[e.nameFirst," ",e.nameLast]}),t(C,{to:e.linkedin,text:"LinkedIn"})]},e.id):null)})})]})}):t("div",{style:{color:"white"},children:"Data Fetch error in Team component"})},m="About Open",S=()=>n(b,{children:[t(E,{pageImage:"banner_1.webp",overlayOpacity:.1,overlayColor:1}),t(O,{jsonFile:"/data/aboutHeading.json"}),t(r,{currentPage:m,buttonTo:"/contact",buttonText:"Contact"}),t(F,{jsonFile:"/data/teamContent.json"}),t(r,{currentPage:m,buttonTo:"/contact",buttonText:"Contact"})]});export{S as default};
