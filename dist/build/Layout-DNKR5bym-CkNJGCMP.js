import{h as M,u as x,k as P,gt as S,r as u,gu as O,gv as W,gw as A,j as a,P as k,L as j,B as w,F as h,as as I,T as L}from"./strapi-DTz6PUqZ.js";import{u as F}from"./useDragLayer-B9Nw-Cyl.js";const f={id:"notification.error",defaultMessage:"An error occurred, please try again"},B=(n={})=>{const{toggleNotification:e}=M(),{formatMessage:t}=x(),{_unstableFormatAPIError:r}=P(),{skip:i=!1,...g}=n,{data:o,isLoading:E,error:l}=S({populate:["stages","stageRequiredToPublish"],...g},{skip:i});u.useEffect(()=>{l&&e({type:"danger",message:r(l)})},[l,r,e]);const[p]=O(),R=u.useCallback(async c=>{try{const s=await p({data:c});return"error"in s?(e({type:"danger",message:r(s.error)}),s):(e({type:"success",message:t({id:"actions.created",defaultMessage:"Created workflow"})}),s)}catch(s){throw e({type:"danger",message:t(f)}),s}},[p,r,t,e]),[y]=W(),b=u.useCallback(async(c,s)=>{try{const d=await y({id:c,data:s});return"error"in d?(e({type:"danger",message:r(d.error)}),d):(e({type:"success",message:t({id:"actions.updated",defaultMessage:"Updated workflow"})}),d)}catch(d){throw e({type:"danger",message:t(f)}),d}},[r,t,e,y]),[m]=A(),D=u.useCallback(async c=>{try{const s=await m({id:c});if("error"in s){e({type:"danger",message:r(s.error)});return}return e({type:"success",message:t({id:"actions.deleted",defaultMessage:"Deleted workflow"})}),s.data}catch(s){throw e({type:"danger",message:t(f)}),s}},[m,r,t,e]),{workflows:T=[],meta:C}=o??{};return{meta:C,workflows:T,isLoading:E,error:l,create:R,delete:D,update:b}},_={STAGE:"stage"},G=({name:n})=>a.jsxs(h,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:"30rem",children:[a.jsx(h,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:a.jsx(I,{width:"0.8rem",fill:"neutral600"})}),a.jsx(L,{fontWeight:"bold",children:n})]});function v(n,e,t){if(!n||!e||!t)return{display:"none"};const{x:r,y:i}=t;return{transform:`translate(${r}px, ${i}px)`}}const N=()=>{const{itemType:n,isDragging:e,item:t,initialOffset:r,currentOffset:i,mouseOffset:g}=F(o=>({item:o.getItem(),itemType:o.getItemType(),initialOffset:o.getInitialSourceClientOffset(),currentOffset:o.getSourceClientOffset(),isDragging:o.isDragging(),mouseOffset:o.getClientOffset()}));return!e||n!==_.STAGE?null:a.jsx(w,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:a.jsxs(w,{style:v(r,i,g),children:[a.jsx(G,{name:typeof t.item=="string"?t.item:null}),";"]})})},$=({children:n})=>a.jsx(k.Main,{children:a.jsx(j.Content,{children:n})}),q=({title:n,subtitle:e,navigationAction:t,primaryAction:r})=>{const{formatMessage:i}=x();return a.jsxs(a.Fragment,{children:[a.jsx(k.Title,{children:i({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:n})}),a.jsx(j.BaseHeader,{navigationAction:t,primaryAction:r,title:n,subtitle:e})]})};export{N as D,q as H,$ as R,_ as a,B as u};
