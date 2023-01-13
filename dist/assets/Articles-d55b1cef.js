import{a as I,s as p,B as f,i as re,p as ie,q as ne,z as se,A as ae,m as o,n as g,r as Q,F as E,D as oe}from"./bannerComponents-2e57662a.js";import{_ as ce,l as W,n as ue,m as K,o as j,t as le,p as de,r as z,q as H,s as he,u as fe,v as T,w as pe,x as me,y as ve,j as ge,k as be,z as ye,D as xe,E as Re,G as Oe,H as G,C as Ie,A as Ee,S as q}from"./index-702dcae0.js";import{p as Ce}from"./index-bf9313bc.js";import{T as Te}from"./titleCallout-5f935a7d.js";import{R as we}from"./rowButton-cb6301a5.js";import"./buttonComponents-6d835e97.js";var ke=function(n){ce(c,n);function c(s,t){var e;return e=n.call(this)||this,e.client=s,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var i=c.prototype;return i.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},i.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),V(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},i.onUnsubscribe=function(){this.listeners.length||this.destroy()},i.shouldFetchOnReconnect=function(){return A(this.currentQuery,this.options,this.options.refetchOnReconnect)},i.shouldFetchOnWindowFocus=function(){return A(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},i.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},i.setOptions=function(t,e){var a=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),this.updateQuery();var l=this.hasListeners();l&&Z(this.currentQuery,r,this.options,a)&&this.executeFetch(),this.updateResult(e),l&&(this.currentQuery!==r||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();l&&(this.currentQuery!==r||this.options.enabled!==a.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},i.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),a=this.client.getQueryCache().build(this.client,e);return this.createResult(a,e)},i.getCurrentResult=function(){return this.currentResult},i.trackResult=function(t,e){var a=this,r={},l=function(h){a.trackedProps.includes(h)||a.trackedProps.push(h)};return Object.keys(t).forEach(function(u){Object.defineProperty(r,u,{configurable:!1,enumerable:!0,get:function(){return l(u),t[u]}})}),(e.useErrorBoundary||e.suspense)&&l("error"),r},i.getNextResult=function(t){var e=this;return new Promise(function(a,r){var l=e.subscribe(function(u){u.isFetching||(l(),u.isError&&(t!=null&&t.throwOnError)?r(u.error):a(u))})})},i.getCurrentQuery=function(){return this.currentQuery},i.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},i.refetch=function(t){return this.fetch(W({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},i.fetchOptimistic=function(t){var e=this,a=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,a);return r.fetch().then(function(){return e.createResult(r,a)})},i.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},i.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(ue)),e},i.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(K||this.currentResult.isStale||!j(this.options.staleTime))){var e=le(this.currentResult.dataUpdatedAt,this.options.staleTime),a=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},a)}},i.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},i.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(K||this.options.enabled===!1||!j(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||de.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},i.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},i.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},i.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},i.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},i.createResult=function(t,e){var a=this.currentQuery,r=this.options,l=this.currentResult,u=this.currentResultState,h=this.currentResultOptions,v=t!==a,y=v?t.state:this.currentQueryInitialState,R=v?this.currentResult:this.previousQueryResult,d=t.state,O=d.dataUpdatedAt,F=d.error,L=d.errorUpdatedAt,_=d.isFetching,m=d.status,B=!1,U=!1,b;if(e.optimisticResults){var M=this.hasListeners(),Y=!M&&V(t,e),ee=M&&Z(t,a,e,r);(Y||ee)&&(_=!0,O||(m="loading"))}if(e.keepPreviousData&&!d.dataUpdateCount&&(R!=null&&R.isSuccess)&&m!=="error")b=R.data,O=R.dataUpdatedAt,m=R.status,B=!0;else if(e.select&&typeof d.data<"u")if(l&&d.data===(u==null?void 0:u.data)&&e.select===this.selectFn)b=this.selectResult;else try{this.selectFn=e.select,b=e.select(d.data),e.structuralSharing!==!1&&(b=z(l==null?void 0:l.data,b)),this.selectResult=b,this.selectError=null}catch(C){H().error(C),this.selectError=C}else b=d.data;if(typeof e.placeholderData<"u"&&typeof b>"u"&&(m==="loading"||m==="idle")){var x;if(l!=null&&l.isPlaceholderData&&e.placeholderData===(h==null?void 0:h.placeholderData))x=l.data;else if(x=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof x<"u")try{x=e.select(x),e.structuralSharing!==!1&&(x=z(l==null?void 0:l.data,x)),this.selectError=null}catch(C){H().error(C),this.selectError=C}typeof x<"u"&&(m="success",b=x,U=!0)}this.selectError&&(F=this.selectError,b=this.selectResult,L=Date.now(),m="error");var te={status:m,isLoading:m==="loading",isSuccess:m==="success",isError:m==="error",isIdle:m==="idle",data:b,dataUpdatedAt:O,error:F,errorUpdatedAt:L,failureCount:d.fetchFailureCount,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>y.dataUpdateCount||d.errorUpdateCount>y.errorUpdateCount,isFetching:_,isRefetching:_&&m!=="loading",isLoadingError:m==="error"&&d.dataUpdatedAt===0,isPlaceholderData:U,isPreviousData:B,isRefetchError:m==="error"&&d.dataUpdatedAt!==0,isStale:N(t,e),refetch:this.refetch,remove:this.remove};return te},i.shouldNotifyListeners=function(t,e){if(!e)return!0;var a=this.options,r=a.notifyOnChangeProps,l=a.notifyOnChangePropsExclusions;if(!r&&!l||r==="tracked"&&!this.trackedProps.length)return!0;var u=r==="tracked"?this.trackedProps:r;return Object.keys(t).some(function(h){var v=h,y=t[v]!==e[v],R=u==null?void 0:u.some(function(O){return O===h}),d=l==null?void 0:l.some(function(O){return O===h});return y&&!d&&(!u||R)})},i.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!he(this.currentResult,e)){var a={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(a.listeners=!0),this.notify(W({},a,t))}},i.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},i.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!fe(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},i.notify=function(t){var e=this;T.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(a){a(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},c}(pe);function Se(n,c){return c.enabled!==!1&&!n.state.dataUpdatedAt&&!(n.state.status==="error"&&c.retryOnMount===!1)}function V(n,c){return Se(n,c)||n.state.dataUpdatedAt>0&&A(n,c,c.refetchOnMount)}function A(n,c,i){if(c.enabled!==!1){var s=typeof i=="function"?i(n):i;return s==="always"||s!==!1&&N(n,c)}return!1}function Z(n,c,i,s){return i.enabled!==!1&&(n!==c||s.enabled===!1)&&(!i.suspense||n.state.status!=="error")&&N(n,i)}function N(n,c){return n.isStaleByTime(c.staleTime)}function $e(){var n=!1;return{clearReset:function(){n=!1},reset:function(){n=!0},isReset:function(){return n}}}var _e=I.createContext($e()),Qe=function(){return I.useContext(_e)};function Ae(n,c,i){return typeof c=="function"?c.apply(void 0,i):typeof c=="boolean"?c:!!n}function Ne(n,c){var i=I.useRef(!1),s=I.useState(0),t=s[1],e=me(),a=Qe(),r=e.defaultQueryObserverOptions(n);r.optimisticResults=!0,r.onError&&(r.onError=T.batchCalls(r.onError)),r.onSuccess&&(r.onSuccess=T.batchCalls(r.onSuccess)),r.onSettled&&(r.onSettled=T.batchCalls(r.onSettled)),r.suspense&&(typeof r.staleTime!="number"&&(r.staleTime=1e3),r.cacheTime===0&&(r.cacheTime=1)),(r.suspense||r.useErrorBoundary)&&(a.isReset()||(r.retryOnMount=!1));var l=I.useState(function(){return new c(e,r)}),u=l[0],h=u.getOptimisticResult(r);if(I.useEffect(function(){i.current=!0,a.clearReset();var v=u.subscribe(T.batchCalls(function(){i.current&&t(function(y){return y+1})}));return u.updateResult(),function(){i.current=!1,v()}},[a,u]),I.useEffect(function(){u.setOptions(r,{listeners:!1})},[r,u]),r.suspense&&h.isLoading)throw u.fetchOptimistic(r).then(function(v){var y=v.data;r.onSuccess==null||r.onSuccess(y),r.onSettled==null||r.onSettled(y,null)}).catch(function(v){a.clearReset(),r.onError==null||r.onError(v),r.onSettled==null||r.onSettled(void 0,v)});if(h.isError&&!a.isReset()&&!h.isFetching&&Ae(r.suspense,r.useErrorBoundary,[h.error,u.getCurrentQuery()]))throw h.error;return r.notifyOnChangeProps==="tracked"&&(h=u.trackResult(h,r)),h}function Pe(n,c,i){var s=ve(n,c,i);return Ne(s,ke)}const De=p.div`
  margin: 20px 0;
  position: relative;
  top: 0;
  height: auto;
`,Fe=p.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${f}px) {
    padding: 50px 0;
    width: ${re};
  }
  @media (max-width: ${f}px) {
    padding: 20px 0;
    width: ${ie};
  }
  /* background: red;; */
`,Le=p.div`
  color: ${ne};
  height: auto;
  text-align: left;
  @media (min-width: ${f}px) {
    /* ${ge} */
  }
  @media (max-width: ${f}px) {
    /* ${be} */
  }
`,Be=60,Ue=60,P=180,S=180,D=180,$=180,Me=p.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  @media (min-width: ${f}px) {
    padding-top: ${Be}px;
  }
  @media (max-width: ${f}px) {
    padding-top: ${Ue}px;
  }
  /* background: red; */
`,We=p.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  /* background: gold; */
`,Ke=p.div`
  margin: 20px 12px;
  position: relative;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .card-background {
    filter: brightness(0.7);
    transform: scale(1);
  }
  .card-block {
    transition: all 600ms;
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:hover {
    .card-background {
      filter: brightness(1);
      transform: scale(1.03);
    }
    .card-block {
      /* transition: all 600ms; */
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  overflow: hidden;
  @media (min-width: ${f}px) {
    height: ${P}px;
    width: ${S}px;
  }
  @media (max-width: ${f}px) {
    height: ${D}px;
    width: ${$}px;
  }
  /* background-color: blue; */
`,je=p.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 600ms;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: ${f}px) {
    height: ${P}px;
    width: ${S}px;
  }
  @media (max-width: ${f}px) {
    height: ${D}px;
    width: ${$}px;
  }
  background-color: blue;
`,ze=p.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  @media (min-width: ${f}px) {
    height: ${P}px;
    width: ${S}px;
  }
  @media (max-width: ${f}px) {
    height: ${D}px;
    width: ${$}px;
  }
  /* background-color: blue; */
`,He=p.div`
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: ${f}px) {
    height: 50%;
    width: ${S}px;
  }
  @media (max-width: ${f}px) {
    height: 50%;
    width: ${$}px;
  }
`,Ge=p.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  color: ${se};
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  @media (min-width: ${f}px) {
    height: 50%;
    ${ye}
  }
  @media (max-width: ${f}px) {
    height: 50%;
    ${xe}
  }
  /* background-color: blue; */
`,w=400,k=180,J=n=>o(qe,{children:g("div",{className:"code-wrapper",children:[o("div",{className:"bracket",children:"["}),g("div",{className:"indent",children:[o("span",{className:"brace",children:"{"}),o("span",{className:"key",children:'"prompt"'}),":",g("span",{className:"value",children:['"',n.code,'"']}),o("span",{className:"brace",children:"},"})]}),g("div",{className:"indent",children:[o("span",{className:"brace",children:"{"}),o("span",{className:"key",children:'"model"'}),":",o("span",{className:"value",children:'"text-davinci-003"'}),o("span",{className:"brace",children:"},"})]}),g("div",{className:"indent",children:[o("span",{className:"brace",children:"{"}),o("span",{className:"key",children:'"top_p"'}),":",o("span",{className:"value",children:"1.2"}),o("span",{className:"brace",children:"},"})]}),o("div",{className:"bracket",children:"]"})]})}),qe=p.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: ${f}px) {
    ${Re}
    padding: 30px;
    /* height: 100%; */
    width: ${w}px;
  }
  @media (max-width: ${f}px) {
    ${Oe}
    padding: 10px;
    height: 100%;
    width: ${k}px;
  }

  .code-wrapper {
    height: auto;
  }
  .bracket {
    font-weight: ${G};
    color: gold;
  }
  .indent {
    margin-left: 20px;
  }
  .brace {
    font-weight: ${G};
    color: #22aaff;
  }
  .key {
    color: #3ae998;
  }
  .value {
    color: #faab4a;
  }
  background-color: ${ae};
`,Ve=n=>g(Xe,{children:[o(Je,{style:{backgroundImage:`url(/images/content/${n.image})`}}),o(J,{...n})]}),Ze=240,Xe=p.div`
  float: right;
  margin: 0 0 40px 40px;
  height: ${w+Ze}px;
  width: ${w}px;
  /* background-color: blue; */
`,Je=p.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${w}px;
  width: ${w}px;
  /* background-color: blue; */
`,Ye=n=>g(et,{children:[o(tt,{style:{backgroundImage:`url(/images/content/${n.image})`}}),o(J,{...n})]}),et=p.div`
  float: top;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${k}px;
  /* background-color: blue; */
`,tt=p.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${k}px;
  width: ${k}px;
  /* background-color: blue; */
`,rt=n=>{const[c,i]=Q.useState(window.innerWidth);return Q.useEffect(()=>{const s=()=>i(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),o(E,{children:c>f?o(Ve,{...n}):o(Ye,{...n})})},it=n=>{const[c,i]=Q.useState(0);function s(e){let a=document.getElementsByClassName("cardContent");for(let r=0;r<a.length;r++)a[r].classList.remove("active");a[e].classList.add("active")}const t=Ce(n.data[c].text);return g(E,{children:[o(Ie,{backgroundColor:4,children:o(Me,{children:o(We,{children:n.data.map((e,a)=>g(Ke,{className:`card ${a===c?"active":""}`,onClick:()=>{i(a),s(a)},children:[o(je,{style:{backgroundImage:`url(/images/content/${e.image})`}}),o(ze,{children:o(He,{children:o(Ge,{children:e.title})})})]},a))})})}),o(De,{className:"cardContent",style:{background:n.backgroundColor},children:g(Fe,{children:[o(Te,{title:n.data[c].title}),o(Ee,{animateIn:"animate__fadeIn",delay:10,offset:100,children:g(Le,{children:[o(rt,{image:n.data[c].image,code:n.data[c].code}),t]})})]})})]})};p.div`
  display: grid;
  flex: 0 0 100%;
  gap: 2rem;
  /* padding: 10px 0 0 0; */
  width: 100%;
  height: auto;
  @media (min-width: 701px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 301px) and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  background: gold;
`;const X=()=>o(E,{children:o(oe,{})}),nt="/data/dataArticles.json",st="articles",ht=()=>{const n=async()=>(await fetch(nt,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:c,status:i}=Pe(st,n);return g(E,{children:[i==="error"&&o(E,{children:o(X,{})}),i==="loading"&&o(E,{children:o(X,{})}),i==="success"&&o(E,{children:o(it,{data:c})}),o(q,{height:40,backgroundColor:2}),o(we,{buttonTo:"/contact",buttonText:"Contact"}),o(q,{height:40,backgroundColor:2})]})};export{ht as default};
