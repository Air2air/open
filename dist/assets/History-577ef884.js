import{s as i,B as a,h as n,i as r,b as d,F as s,j as e}from"./bannerCSS-18d11c47.js";import{C as p}from"./callOut-73ea4712.js";import{o as u,N as g,B as b,S as o}from"./index-d98062c6.js";import{R as m}from"./rowButton-ea15484b.js";import"./index-be224f05.js";import"./titleCallout-2109ed08.js";import"./buttonComponents-a7f8a55b.js";const f=({pageImage:t,overlayOpacity:l,overlayColor:c})=>{const h="url(/images/content/"+t+")";return d(s,{children:[e("div",{className:"animate__animated animate__fadeIn animate__delay-0s animate__slower",children:e(y,{style:{backgroundImage:h}})}),e(x,{overlayOpacity:l,overlayColor:c})]})},x=({overlayOpacity:t,overlayColor:l})=>e(s,{children:e(v,{style:{opacity:t,background:l}})}),y=i.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  overflow: hidden;
  @media (min-width: ${a}px) {
    height: ${n}px;
  }
  @media (max-width: ${a}px) {
    height: ${r}px;
  }
`,v=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (min-width: ${a}px) {
    height: ${n}px;
  }
  @media (max-width: ${a}px) {
    height: ${r}px;
  }
`,w=t=>e(s,{children:d(_,{className:"animate__animated animate__fadeIn animate__delay-0s animate__slower",children:[t.pageImage?e(f,{...t}):"",e(k,{style:{opacity:t.overlayOpacity,background:t.overlayColor}})]})}),_=i.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  overflow: hidden;
  background: ${u};
  @media (min-width: ${a}px) {
    height: ${n}px;
  }
  @media (max-width: ${a}px) {
    height: ${r}px;
  }
`,k=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (min-width: ${a}px) {
    height: ${n}px;
  }
  @media (max-width: ${a}px) {
    height: ${r}px;
  }
`,I="dartmouth.jpeg",A=()=>d(s,{children:[e(w,{pageImage:I,overlayOpacity:.7,overlayColor:g,typing:!0}),e(b,{text:"history"}),e(o,{height:40,backgroundColor:2}),e(m,{buttonTo:"/about",buttonText:"About",backgroundColor:2}),e(o,{height:40,backgroundColor:2}),e(p,{title:"THE BIRTH OF MACHINE INTELLIGENCE",text:'<p>In 1956, 11 experts from multiple scientific disciplines traveled around the world to meet at Dartmouth College. Over several days the <b>Dartmouth Workshop</b> combined their collective experience to build the foundational principles for what we know today as Artificial Intelligence. The proposal states:</p><blockquote><i>"...We propose that a 2-month, 10-man(sic) study of artificial intelligence be carried out during the summer of 1956 at Dartmouth College in Hanover, New Hampshire. The study is to proceed on the basis of the conjecture that every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it. An attempt will be made to find how to make machines use language, form abstractions and concepts, solve kinds of problems now reserved for humans, and improve themselves. We think that a significant advance can be made in one or more of these problems if a carefully selected group of scientists work on it together for a summer.</i></blockquote><p>The workshop is widely considered to be the founding event of artificial intelligence as a field.</p>',backgroundColor:1}),e(o,{height:40,backgroundColor:2}),e(m,{buttonTo:"/about",buttonText:"About",backgroundColor:2}),e(o,{height:40,backgroundColor:2})]});export{A as default};
