import{s as i,B as t,x as _,y as T,i as o,p as r,z as p,q as E,T as g,r as n,m as e,n as $}from"./bannerComponents-2e57662a.js";import{b as w,c as N,d as u,e as O}from"./index-702dcae0.js";const f=i.div`
  position: absolute;
  margin: 0 auto;
  top: 0;

  @media (min-width: ${t}px) {
    height: ${_}px;
    width: 100%;
  }
  @media (max-width: ${t}px) {
    height: ${T}px;
    width: 100%;
  }
  /* background: blue; */
`,I=i.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 60%;
    width: ${o};
  }
  @media (max-width: ${t}px) {
    height: 60%;
    width: ${r};
  }
  /* background: green; */
`,D=i.h1`
  color: ${p};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${t}px) {
    ${w}
  }
  @media (max-width: ${t}px) {
    ${N}
  }
`,H=i.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 40%;
    width: ${o};
  }
  @media (max-width: ${t}px) {
    height: 40%;
    width: ${r};
  }
  /* background: red; */
`,B=i.div`
  color: ${E};
  height: auto;
  text-align: left;
  opacity: ${g};
  text-shadow: 0 0 4px #000;
  /* background: red; */
  @media (min-width: ${t}px) {
    ${u}
  }
  @media (max-width: ${t}px) {
    ${O}
  }
`,S=({jsonFile:m})=>{const[a,l]=n.useState([]),[d,x]=n.useState(0);return n.useEffect(()=>{(async()=>{const c=await(await fetch(m)).json();l(c)})()},[]),n.useEffect(()=>{const s=setInterval(()=>{x(h=>(h+1)%a.length)},6e3);return()=>clearInterval(s)},[a]),a.length?$(f,{children:[e(I,{children:e(D,{className:"animate__animated animate__fadeInDown",children:a[d].title})}),e(H,{children:e(B,{className:"animate__animated animate__fadeInUp animate__delay-1s",children:a[d].subhead})})]},d):e("div",{children:"Loading..."})};export{S as H};
