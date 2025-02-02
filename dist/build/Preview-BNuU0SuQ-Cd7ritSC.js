import{cE as T,j as e,cF as B,cG as k,bn as P,m as L,P as p,B as x,cH as I,u as h,aN as v,r as M,cM as D,cO as E,eK as R,cJ as F,cK as H,F as S,h as A,bE as Q,Q as g,I as b,dQ as q,eL as f,bw as G,b7 as N,bQ as z,d as y,cU as U,cq as w,T as W}from"./strapi-DTz6PUqZ.js";import{getDocumentStatus as C}from"./EditViewPage-DrmVmYN0-B28wHZrY.js";import"./Input-CZ1YvjHR-tNITV7F_.js";import"./usePrev-CZGy2Vjf-DJSC6vC_.js";import"./useDragAndDrop-DJ6jqvZN-BLEeBZog.js";import"./objects-D6yBsdmx-29L_A7NK.js";import"./Relations-C2Ahkrdg-CiuXUBPr.js";import"./relations-BakOFl_1-C4NMmqKT.js";import"./getEmptyImage-CjqolaH3.js";import"./ComponentIcon-u4bIXTFY-CcTMj_wY.js";const $=()=>{const t=u("PreviewContent",a=>a.url),{formatMessage:s}=h();return e.jsx(x,{src:t,title:s({id:"content-manager.preview.panel.title",defaultMessage:"Preview"}),width:"100%",height:"100%",borderWidth:0,tag:"iframe"},t)},O=()=>{const[{query:t}]=v(),{formatMessage:s}=h(),a=f("BackButton",d=>d.canGoBack),o=f("BackButton",d=>d.goBack),i=f("BackButton",d=>d.history),n=f("BackButton",d=>d.currentLocationIndex),l=a?i.at(n-2):void 0,c={pathname:"..",search:G.stringify(t,{encode:!1})},m=l??c,r=d=>{if(a){d.preventDefault(),o();return}};return e.jsx(b,{tag:N,relative:"path",to:m,onClick:r,label:s({id:"content-manager.preview.header.close",defaultMessage:"Close preview"}),children:e.jsx(z,{})})},K=()=>{const t=u("PreviewHeader",n=>n.document),s=u("PreviewHeader",n=>n.schema),a=u("PreviewHeader",n=>n.meta);if(!(s?.options?.draftAndPublish??!1))return null;const i=C(t,a);return e.jsx(U,{status:i,size:"XS"})},V=()=>{const{formatMessage:t}=h(),[{query:s},a]=v(),o=u("PreviewHeader",r=>r.document),i=u("PreviewHeader",r=>r.schema),n=u("PreviewHeader",r=>r.meta),l=i?.options?.draftAndPublish??!1,c=C(o,n),m=r=>{(r==="published"||r==="draft")&&a({status:r},"push",!0)};return l?e.jsx(e.Fragment,{children:e.jsx(w.Root,{variant:"simple",value:s.status||"draft",onValueChange:m,children:e.jsxs(w.List,{"aria-label":t({id:"preview.tabs.label",defaultMessage:"Document status"}),children:[e.jsx(j,{value:"draft",children:t({id:"content-manager.containers.List.draft",defaultMessage:"draft"})}),e.jsx(j,{value:"published",disabled:c==="draft",children:t({id:"content-manager.containers.List.published",defaultMessage:"published"})})]})})}):null},J=()=>{const t=u("PreviewHeader",n=>n.title),{formatMessage:s}=h(),{toggleNotification:a}=A(),{copy:o}=Q(),i=()=>{o(window.location.href),a({message:s({id:"content-manager.preview.copy.success",defaultMessage:"Copied preview link"}),type:"success"})};return e.jsxs(g.Root,{gap:3,gridCols:3,paddingLeft:2,paddingRight:2,background:"neutral0",borderColor:"neutral150",tag:"header",children:[e.jsxs(g.Item,{xs:1,paddingTop:2,paddingBottom:2,gap:3,children:[e.jsx(O,{}),e.jsx(X,{tag:"h1",fontWeight:600,fontSize:2,maxWidth:"200px",title:t,children:t}),e.jsx(K,{})]}),e.jsx(g.Item,{xs:1,marginBottom:"-1px",alignItems:"end",margin:"auto",children:e.jsx(V,{})}),e.jsx(g.Item,{xs:1,justifyContent:"end",paddingTop:2,paddingBottom:2,children:e.jsx(b,{type:"button",label:s({id:"preview.copy.label",defaultMessage:"Copy preview link"}),onClick:i,children:e.jsx(q,{})})})]})},X=y(W)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,j=y(w.Trigger)`
  text-transform: uppercase;
`,[Y,u]=T("PreviewPage"),_=()=>{const{formatMessage:t}=h(),{slug:s,id:a,collectionType:o}=P(),[{query:i}]=v(),n=M.useMemo(()=>D(i),[i]);if(!o)throw new Error("Could not find collectionType in url params");if(!s)throw new Error("Could not find model in url params");if(o===E&&!a)throw new Error("Could not find documentId in url params");const l=R({params:{contentType:s},query:{documentId:a,locale:n.locale,status:n.status}}),c=F({model:s,collectionType:o,documentId:a,params:n}),m=H(s);if(c.isLoading||l.isLoading||m.isLoading)return e.jsx(p.Loading,{});if(l.error||m.error||!c.document||!c.meta||!c.schema)return e.jsx(p.Error,{});if(!l.data?.data?.url)return e.jsx(p.NoData,{});const r=c.getTitle(m.edit.settings.mainField);return e.jsxs(e.Fragment,{children:[e.jsx(p.Title,{children:t({id:"content-manager.preview.page-title",defaultMessage:"{contentType} preview"},{contentType:r})}),e.jsx(Y,{url:l.data.data.url,document:c.document,title:r,meta:c.meta,schema:c.schema,children:e.jsxs(S,{direction:"column",height:"100%",alignItems:"stretch",children:[e.jsx(J,{}),e.jsx($,{})]})})]})},Z=()=>{const{slug:t}=P(),{permissions:s=[],isLoading:a,error:o}=L([{action:"plugin::content-manager.explorer.read",subject:t}]);return a?e.jsx(p.Loading,{}):o||!t?e.jsx(x,{height:"100vh",width:"100vw",position:"fixed",top:0,left:0,zIndex:2,background:"neutral0",children:e.jsx(p.Error,{})}):e.jsx(x,{height:"100vh",width:"100vw",position:"fixed",top:0,left:0,zIndex:2,background:"neutral0",children:e.jsx(p.Protect,{permissions:s,children:({permissions:i})=>e.jsx(I,{permissions:i,children:e.jsx(_,{})})})})},le=()=>e.jsx(B,{children:e.jsx(k,{children:e.jsx(Z,{})})});export{le as ProtectedPreviewPage,u as usePreviewContext};
