import{s as o,B as a,h as i,i as n,b as d,F as r,j as e}from"./bannerCSS-312176e4.js";import{C as p}from"./callOut-cdb08feb.js";import{a0 as u,U as g,e as b,S as l}from"./index-679cdf5d.js";import{R as m}from"./rowButton-c328089d.js";import"./index-e7ce6b91.js";import"./titleCallout-25dc8190.js";import"./buttonCSS-4aba25bd.js";const f=({pageImage:t,overlayOpacity:s,overlayColor:c})=>{const h="url(/images/content/"+t+")";return d(r,{children:[e("div",{className:"animate__animated animate__fadeIn animate__delay-0s animate__slower",children:e(v,{style:{backgroundImage:h}})}),e(x,{overlayOpacity:s,overlayColor:c})]})},x=({overlayOpacity:t,overlayColor:s})=>e(r,{children:e(y,{style:{opacity:t,background:s}})}),v=o.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  overflow: hidden;
  @media (min-width: ${a}px) {
    height: ${i}px;
  }
  @media (max-width: ${a}px) {
    height: ${n}px;
  }
`,y=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (min-width: ${a}px) {
    height: ${i}px;
  }
  @media (max-width: ${a}px) {
    height: ${n}px;
  }
`,w=t=>e(r,{children:d(_,{className:"animate__animated animate__fadeIn animate__delay-0s animate__slower",children:[t.pageImage?e(f,{...t}):"",e(k,{style:{opacity:t.overlayOpacity,background:t.overlayColor}})]})}),_=o.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  overflow: hidden;
  background: ${u};
  @media (min-width: ${a}px) {
    height: ${i}px;
  }
  @media (max-width: ${a}px) {
    height: ${n}px;
  }
`,k=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (min-width: ${a}px) {
    height: ${i}px;
  }
  @media (max-width: ${a}px) {
    height: ${n}px;
  }
`,I="dartmouth.jpeg",N=()=>d(r,{children:[e(w,{pageImage:I,overlayOpacity:.7,overlayColor:g,typing:!0}),e(b,{text:"history"}),e(l,{height:40,backgroundColor:2}),e(m,{buttonTo:"/about",buttonText:"About",backgroundColor:2}),e(p,{id:0,title:"THE BIRTH OF MACHINE INTELLIGENCE",text:'<p>In 1956, 11 experts from multiple scientific disciplines traveled around the world to meet at Dartmouth College. Over several days the <b>Dartmouth Workshop</b> combined their collective experience to build the foundational principles for what we know today as Artificial Intelligence. The proposal states:</p><blockquote><i>"...We propose that a 2-month, 10-man(sic) study of artificial intelligence be carried out during the summer of 1956 at Dartmouth College in Hanover, New Hampshire. The study is to proceed on the basis of the conjecture that every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it. An attempt will be made to find how to make machines use language, form abstractions and concepts, solve kinds of problems now reserved for humans, and improve themselves. We think that a significant advance can be made in one or more of these problems if a carefully selected group of scientists work on it together for a summer.</i></blockquote><p>The workshop is widely considered to be the founding event of artificial intelligence as a field.</p>',backgroundColor:1,buttonText:"About Elevens",buttonTo:"/about"}),e(l,{height:40,backgroundColor:2}),e(m,{buttonTo:"/about",buttonText:"About",backgroundColor:2}),e(l,{height:40,backgroundColor:2})]});export{N as default};
