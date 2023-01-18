import{a as I,s as v,B as f,i as re,p as ie,q as ne,z as se,A as ae,m as o,n as g,r as Q,F as E,D as oe}from"./bannerComponents-a40a04da.js";import{l as ce,m as W,n as ue,o as K,p as j,t as le,q as de,r as z,s as H,u as he,v as fe,w as T,x as pe,y as ve,z as me,b as ge,c as be,B as ye,D as Re,E as xe,G as Oe,H as G,C as Ie,A as Ee,S as q}from"./index-e8aebce2.js";import{p as Ce}from"./index-bb904758.js";import{T as Te,R as we}from"./rowButton-f51667b9.js";import"./buttonComponents-89de562b.js";var ke=function(n){ce(c,n);function c(s,t){var e;return e=n.call(this)||this,e.client=s,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var i=c.prototype;return i.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},i.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),V(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},i.onUnsubscribe=function(){this.listeners.length||this.destroy()},i.shouldFetchOnReconnect=function(){return A(this.currentQuery,this.options,this.options.refetchOnReconnect)},i.shouldFetchOnWindowFocus=function(){return A(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},i.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},i.setOptions=function(t,e){var a=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),this.updateQuery();var l=this.hasListeners();l&&Z(this.currentQuery,r,this.options,a)&&this.executeFetch(),this.updateResult(e),l&&(this.currentQuery!==r||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();l&&(this.currentQuery!==r||this.options.enabled!==a.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},i.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),a=this.client.getQueryCache().build(this.client,e);return this.createResult(a,e)},i.getCurrentResult=function(){return this.currentResult},i.trackResult=function(t,e){var a=this,r={},l=function(h){a.trackedProps.includes(h)||a.trackedProps.push(h)};return Object.keys(t).forEach(function(u){Object.defineProperty(r,u,{configurable:!1,enumerable:!0,get:function(){return l(u),t[u]}})}),(e.useErrorBoundary||e.suspense)&&l("error"),r},i.getNextResult=function(t){var e=this;return new Promise(function(a,r){var l=e.subscribe(function(u){u.isFetching||(l(),u.isError&&(t!=null&&t.throwOnError)?r(u.error):a(u))})})},i.getCurrentQuery=function(){return this.currentQuery},i.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},i.refetch=function(t){return this.fetch(W({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},i.fetchOptimistic=function(t){var e=this,a=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,a);return r.fetch().then(function(){return e.createResult(r,a)})},i.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},i.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(ue)),e},i.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(K||this.currentResult.isStale||!j(this.options.staleTime))){var e=le(this.currentResult.dataUpdatedAt,this.options.staleTime),a=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},a)}},i.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},i.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(K||this.options.enabled===!1||!j(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||de.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},i.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},i.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},i.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},i.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},i.createResult=function(t,e){var a=this.currentQuery,r=this.options,l=this.currentResult,u=this.currentResultState,h=this.currentResultOptions,m=t!==a,y=m?t.state:this.currentQueryInitialState,x=m?this.currentResult:this.previousQueryResult,d=t.state,O=d.dataUpdatedAt,F=d.error,L=d.errorUpdatedAt,_=d.isFetching,p=d.status,B=!1,U=!1,b;if(e.optimisticResults){var M=this.hasListeners(),Y=!M&&V(t,e),ee=M&&Z(t,a,e,r);(Y||ee)&&(_=!0,O||(p="loading"))}if(e.keepPreviousData&&!d.dataUpdateCount&&(x!=null&&x.isSuccess)&&p!=="error")b=x.data,O=x.dataUpdatedAt,p=x.status,B=!0;else if(e.select&&typeof d.data<"u")if(l&&d.data===(u==null?void 0:u.data)&&e.select===this.selectFn)b=this.selectResult;else try{this.selectFn=e.select,b=e.select(d.data),e.structuralSharing!==!1&&(b=z(l==null?void 0:l.data,b)),this.selectResult=b,this.selectError=null}catch(C){H().error(C),this.selectError=C}else b=d.data;if(typeof e.placeholderData<"u"&&typeof b>"u"&&(p==="loading"||p==="idle")){var R;if(l!=null&&l.isPlaceholderData&&e.placeholderData===(h==null?void 0:h.placeholderData))R=l.data;else if(R=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof R<"u")try{R=e.select(R),e.structuralSharing!==!1&&(R=z(l==null?void 0:l.data,R)),this.selectError=null}catch(C){H().error(C),this.selectError=C}typeof R<"u"&&(p="success",b=R,U=!0)}this.selectError&&(F=this.selectError,b=this.selectResult,L=Date.now(),p="error");var te={status:p,isLoading:p==="loading",isSuccess:p==="success",isError:p==="error",isIdle:p==="idle",data:b,dataUpdatedAt:O,error:F,errorUpdatedAt:L,failureCount:d.fetchFailureCount,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>y.dataUpdateCount||d.errorUpdateCount>y.errorUpdateCount,isFetching:_,isRefetching:_&&p!=="loading",isLoadingError:p==="error"&&d.dataUpdatedAt===0,isPlaceholderData:U,isPreviousData:B,isRefetchError:p==="error"&&d.dataUpdatedAt!==0,isStale:N(t,e),refetch:this.refetch,remove:this.remove};return te},i.shouldNotifyListeners=function(t,e){if(!e)return!0;var a=this.options,r=a.notifyOnChangeProps,l=a.notifyOnChangePropsExclusions;if(!r&&!l||r==="tracked"&&!this.trackedProps.length)return!0;var u=r==="tracked"?this.trackedProps:r;return Object.keys(t).some(function(h){var m=h,y=t[m]!==e[m],x=u==null?void 0:u.some(function(O){return O===h}),d=l==null?void 0:l.some(function(O){return O===h});return y&&!d&&(!u||x)})},i.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!he(this.currentResult,e)){var a={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(a.listeners=!0),this.notify(W({},a,t))}},i.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},i.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!fe(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},i.notify=function(t){var e=this;T.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(a){a(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},c}(pe);function Se(n,c){return c.enabled!==!1&&!n.state.dataUpdatedAt&&!(n.state.status==="error"&&c.retryOnMount===!1)}function V(n,c){return Se(n,c)||n.state.dataUpdatedAt>0&&A(n,c,c.refetchOnMount)}function A(n,c,i){if(c.enabled!==!1){var s=typeof i=="function"?i(n):i;return s==="always"||s!==!1&&N(n,c)}return!1}function Z(n,c,i,s){return i.enabled!==!1&&(n!==c||s.enabled===!1)&&(!i.suspense||n.state.status!=="error")&&N(n,i)}function N(n,c){return n.isStaleByTime(c.staleTime)}function $e(){var n=!1;return{clearReset:function(){n=!1},reset:function(){n=!0},isReset:function(){return n}}}var _e=I.createContext($e()),Qe=function(){return I.useContext(_e)};function Ae(n,c,i){return typeof c=="function"?c.apply(void 0,i):typeof c=="boolean"?c:!!n}function Ne(n,c){var i=I.useRef(!1),s=I.useState(0),t=s[1],e=ve(),a=Qe(),r=e.defaultQueryObserverOptions(n);r.optimisticResults=!0,r.onError&&(r.onError=T.batchCalls(r.onError)),r.onSuccess&&(r.onSuccess=T.batchCalls(r.onSuccess)),r.onSettled&&(r.onSettled=T.batchCalls(r.onSettled)),r.suspense&&(typeof r.staleTime!="number"&&(r.staleTime=1e3),r.cacheTime===0&&(r.cacheTime=1)),(r.suspense||r.useErrorBoundary)&&(a.isReset()||(r.retryOnMount=!1));var l=I.useState(function(){return new c(e,r)}),u=l[0],h=u.getOptimisticResult(r);if(I.useEffect(function(){i.current=!0,a.clearReset();var m=u.subscribe(T.batchCalls(function(){i.current&&t(function(y){return y+1})}));return u.updateResult(),function(){i.current=!1,m()}},[a,u]),I.useEffect(function(){u.setOptions(r,{listeners:!1})},[r,u]),r.suspense&&h.isLoading)throw u.fetchOptimistic(r).then(function(m){var y=m.data;r.onSuccess==null||r.onSuccess(y),r.onSettled==null||r.onSettled(y,null)}).catch(function(m){a.clearReset(),r.onError==null||r.onError(m),r.onSettled==null||r.onSettled(void 0,m)});if(h.isError&&!a.isReset()&&!h.isFetching&&Ae(r.suspense,r.useErrorBoundary,[h.error,u.getCurrentQuery()]))throw h.error;return r.notifyOnChangeProps==="tracked"&&(h=u.trackResult(h,r)),h}function Pe(n,c,i){var s=me(n,c,i);return Ne(s,ke)}const De=v.div`
  margin: 20px 0;
  position: relative;
  top: 0;
  height: auto;
`,Fe=v.div`
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
`,Le=v.div`
  color: ${ne};
  height: auto;
  text-align: left;
  @media (min-width: ${f}px) {
    /* ${ge} */
  }
  @media (max-width: ${f}px) {
    /* ${be} */
  }
`,Be=60,Ue=60,P=180,S=180,D=180,$=180,Me=v.div`
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
`,We=v.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  flex-wrap: wrap;
  /* background: gold; */
`,Ke=v.div`
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
`,je=v.div`
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
`,ze=v.div`
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
`,He=v.div`
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
`,Ge=v.div`
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
    ${Re}
  }
  /* background-color: blue; */
`,w=400,k=180,J=n=>o(qe,{children:g("div",{className:"code-wrapper",children:[o("div",{className:"bracket",children:"["}),g("div",{className:"indent",children:[o("span",{className:"brace",children:"{"}),o("span",{className:"key",children:'"prompt"'}),":",g("span",{className:"value",children:['"',n.code,'"']}),o("span",{className:"brace",children:"},"})]}),g("div",{className:"indent",children:[o("span",{className:"brace",children:"{"}),o("span",{className:"key",children:'"model"'}),":",o("span",{className:"value",children:'"text-davinci-003"'}),o("span",{className:"brace",children:"},"})]}),g("div",{className:"indent",children:[o("span",{className:"brace",children:"{"}),o("span",{className:"key",children:'"top_p"'}),":",o("span",{className:"value",children:"1.2"}),o("span",{className:"brace",children:"},"})]}),o("div",{className:"bracket",children:"]"})]})}),qe=v.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: ${f}px) {
    ${xe}
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
`,Ve=n=>g(Xe,{children:[o(Je,{style:{backgroundImage:`url(/images/content/${n.image})`}}),o(J,{...n})]}),Ze=240,Xe=v.div`
  float: right;
  margin: 0 0 40px 40px;
  height: ${w+Ze}px;
  width: ${w}px;
  /* background-color: blue; */
`,Je=v.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${w}px;
  width: ${w}px;
  /* background-color: blue; */
`,Ye=n=>g(et,{children:[o(tt,{style:{backgroundImage:`url(/images/content/${n.image})`}}),o(J,{...n})]}),et=v.div`
  float: top;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${k}px;
  /* background-color: blue; */
`,tt=v.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${k}px;
  width: ${k}px;
  /* background-color: blue; */
`,rt=n=>{const[c,i]=Q.useState(window.innerWidth);return Q.useEffect(()=>{const s=()=>i(window.innerWidth);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),o(E,{children:c>f?o(Ve,{...n}):o(Ye,{...n})})},it=n=>{const[c,i]=Q.useState(0);function s(e){const a=document.getElementsByClassName("articleContent");for(let r=0;r<a.length;r++)a[r].classList.remove("active");a[e].classList.add("active")}const t=Ce(n.data[c].text);return g(E,{children:[o(Ie,{backgroundColor:4,children:o(Me,{children:o(We,{children:n.data.map((e,a)=>g(Ke,{className:`card ${a===c?"active":""}`,onClick:()=>{i(a),s(a)},children:[o(je,{style:{backgroundImage:`url(/images/content/${e.image})`}}),o(ze,{children:o(He,{children:o(Ge,{children:e.title})})})]},a))})})}),o(De,{className:"articleContent",style:{background:n.backgroundColor},children:g(Fe,{children:[o(Te,{title:n.data[c].title}),o(Ee,{animateIn:"animate__fadeIn",delay:10,offset:100,children:g(Le,{children:[o(rt,{image:n.data[c].image,code:n.data[c].code}),t]})})]})})]})},X=()=>o(E,{children:o(oe,{})}),nt="/data/dataArticles.json",st="articles",dt=()=>{const n=async()=>(await fetch(nt,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:c,status:i}=Pe(st,n);return g(E,{children:[i==="error"&&o(E,{children:o(X,{})}),i==="loading"&&o(E,{children:o(X,{})}),i==="success"&&o(E,{children:o(it,{data:c})}),o(q,{height:40,backgroundColor:2}),o(we,{buttonTo:"/contact",buttonText:"Contact",backgroundColor:2}),o(q,{height:40,backgroundColor:2})]})};export{dt as default};
