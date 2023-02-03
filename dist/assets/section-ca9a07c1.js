import{r as c,s as i,j as t,a as _,C as I,b as D,L as N,c as T,d as m,e as w,f as O,g as $,F as h,h as g,P as S,i as H,k,l as v,m as L,n as x,o as A,B as y}from"./index-0bec48b0.js";const P=({file:e})=>{const[a,s]=c.useState(null),[l,n]=c.useState(!0),[o,r]=c.useState(null),d={"Content-Type":"application/json",Accept:"application/json"};return c.useEffect(()=>{(async()=>{try{const B=await(await fetch(e,{headers:d})).json();s(B)}catch(u){r(u)}finally{n(!1)}})()},[e]),{data:a,loading:l,error:o}},b=({src:e,alt:a=""})=>{const[s,l]=c.useState(null);return c.useEffect(()=>{let n=null;const o=new Image;return o.src=e,o.onload=()=>{n&&n.disconnect(),l(e)},s||(n=new IntersectionObserver(r=>{r[0].isIntersecting&&(l(e),n&&n.disconnect())}),n.observe(o)),()=>{n&&n.disconnect()}},[e,s]),t(F,{src:s||"",alt:a})},F=i.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* filter: brightness(0.5); */
`,G=(e,a)=>t(h,{children:e.hasParallax===!0?g(S,{style:{padding:0,height:e.height,width:"100%",background:e.colorBackground},children:[t(b,{src:e.imageBackground,alt:e}),t(H,{speed:e.speedTitle,children:t(C,{children:t(M,{children:t(E,{style:{color:e.colorTitle},children:e.text})})})})]},a):t(z,{style:{height:"auto",width:"100%",background:e.colorBackground},children:t(R,{children:t(E,{children:e.text})})},a)}),z=i.div`
  width: 100%;
  height: auto;

  padding: 4rem 0;

  /* background: #009e5f; */
`,C=i.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background: gold; */
`,M=i.div`
  font-family: ${_};
  color: ${I};
  padding: 12px 0;
  font-size: ${D};
  line-height: ${N};
  /* text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.9); */
  /* background: green; */
`,R=i.div`
  font-family: ${T};
  color: ${m};
  padding: 0 8px;
  font-size: ${w};
  line-height: ${O};
  /* background: green; */
`,E=i.div`
  margin: 0 auto;
  width: ${$};
  /* background: red; */
`,W=.55,j=(e,a)=>t(h,{children:e.hasParallax===!0?g(S,{style:{height:e.height*W,width:"100%",background:e.colorBackground},children:[t(b,{src:e.imageBackground,alt:e}),t(H,{speed:e.speedTitle,children:t(U,{children:t(V,{children:t(f,{style:{color:e.colorTitle},children:e.text})})})})]},a):t(K,{style:{height:"auto",width:"100%",background:e.colorBackground},children:t(Z,{children:t(f,{children:e.text})})},a)}),K=i.div`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  /* background: #009e5f; */
`,U=i.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background: gold; */
`,V=i.div`
  font-family: ${_};
  color: ${I};
  padding: 0 8px;
  font-size: ${k};
  line-height: ${v};
  /* background: green; */
`,Z=i.div`
  font-family: ${T};
  color: ${m};
  padding: 0 8px;
  font-size: ${L};
  line-height: ${x};
  /* background: green; */
`,f=i.div`
  margin: 0 auto;
  width: ${A};
  /* background: green; */
`,q=({jsonFile:e})=>{const[a,s]=c.useState(window.innerWidth);c.useEffect(()=>{const r=()=>s(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]);const{data:l,loading:n,error:o}=P({file:e});return n?null:o?g("div",{children:["Error: ",o.message]}):t(h,{children:l.map((r,d)=>t("div",{children:a>y?t(G,{index:d,...r},d):t(j,{index:d,...r},d)},d))})};export{q as S};
