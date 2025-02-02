import{u as d,bI as p,j as e,U as i,bP as u,bQ as g,cf as f,cg as m,h,ch as x,ci as j,I as M,b$ as b,d as C,cj as y}from"./strapi-CHRtS7bY.js";import{u as k}from"./useAdminRoles-pTnwwZSZ-zs6Ytyyq.js";const v=({children:a,target:t})=>{const{toggleNotification:n}=h(),{formatMessage:o}=d(),{copy:r}=x(),l=o({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),c=async s=>{s.preventDefault(),await r(t)&&n({type:"info",message:o({id:"notification.link-copied"})})};return e.jsx(j,{endAction:e.jsx(M,{label:l,variant:"ghost",onClick:c,children:e.jsx(b,{})}),title:t,titleEllipsis:!0,subtitle:a,icon:e.jsx("span",{style:{fontSize:32},children:"✉️"}),iconBackground:"neutral100"})},I=({registrationToken:a})=>{const{formatMessage:t}=d(),n=`${window.location.origin}${f()}/auth/register?registrationToken=${a}`;return e.jsx(v,{target:n,children:t({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},U=({disabled:a})=>{const{isLoading:t,roles:n}=k(),{formatMessage:o}=d(),{value:r=[],onChange:l,error:c}=p("roles");return e.jsxs(i.Root,{error:c,hint:o({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),name:"roles",required:!0,children:[e.jsx(i.Label,{children:o({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"})}),e.jsx(u,{disabled:a,onChange:s=>{l("roles",s)},placeholder:o({id:"app.components.Select.placeholder",defaultMessage:"Select"}),startIcon:t?e.jsx($,{}):void 0,value:r.map(s=>s.toString()),withTags:!0,children:n.map(s=>e.jsx(g,{value:s.id.toString(),children:o({id:`global.${s.code}`,defaultMessage:s.name})},s.id))}),e.jsx(i.Error,{}),e.jsx(i.Hint,{})]})},L=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,S=C.div`
  animation: ${L} 2s infinite linear;
`,$=()=>e.jsx(S,{children:e.jsx(m,{})});export{I as M,U as S,v as a};
