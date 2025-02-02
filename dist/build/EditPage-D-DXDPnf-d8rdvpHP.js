const __vite__fileDeps=["MagicLinkEE-CtnFDrz0-Bz76wwti.js","strapi-DTz6PUqZ.js","strapi-COJtagOC.css","SelectRoles-pO8L3L4W-Cijt7WE5.js","useAdminRoles-pTnwwZSZ-CvggHn0-.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as B,aJ as C,a5 as z,h as D,bv as F,k as q,aM as L,m as O,bH as V,aR as H,r as N,j as e,P as c,bI as E,$,t as G,L as P,bt as K,S as Q,_ as Y,B as p,F as h,T as y,Q as l,a0 as J,a_ as W,G as X,H as T,a$ as Z,by as ee}from"./strapi-DTz6PUqZ.js";import{s as se}from"./selectors-BZApelK9-BQiYn5VZ.js";import{g as ae}from"./users-8N93LH7R-MOwOr-tf.js";import{S as te,M as re}from"./SelectRoles-pO8L3L4W-Cijt7WE5.js";import{C as ie}from"./validation-BUsrO5hO-DVesExVw.js";import"./useAdminRoles-pTnwwZSZ-CvggHn0-.js";const oe=G().shape({...ie,isActive:X(),roles:W().min(1,{id:T.required.id,defaultMessage:"This field is required"}).required({id:T.required.id,defaultMessage:"This field is required"})}),I=["email","firstname","lastname","username","isActive","roles"],ne=()=>{const{formatMessage:s}=B(),M=C("/settings/users/:id")?.params?.id??"",b=z(),{toggleNotification:r}=D(),x=F(re,async()=>(await ee(()=>import("./MagicLinkEE-CtnFDrz0-Bz76wwti.js"),__vite__mapDeps([0,1,2,3,4]))).MagicLinkEE),{_unstableFormatAPIError:m,_unstableFormatValidationErrors:_}=q(),A=L(se),{isLoading:v,allowedActions:{canUpdate:u}}=O({read:A.settings?.users.read??[],update:A.settings?.users.update??[]}),[R]=V(),{data:k,error:i,isLoading:S}=H({id:M},{refetchOnMountOrArgChange:!0}),[o]=k?.users??[];if(N.useEffect(()=>{i&&(i.name==="UnauthorizedError"?(r({type:"info",message:s({id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"})}),b("/")):r({type:"danger",message:m(i)}))},[i,m,s,b,r]),S||!x||v)return e.jsx(c.Loading,{});const j={...E(o,I),roles:o.roles.map(({id:a})=>a),password:"",confirmPassword:""},U=async(a,n)=>{const{confirmPassword:w,...g}=a,t=await R({id:M,...g});"error"in t&&Z(t.error)?(t.error.name==="ValidationError"&&n.setErrors(_(t.error)),r({type:"danger",message:m(t.error)})):(r({type:"success",message:s({id:"notification.success.saved",defaultMessage:"Saved"})}),n.setValues({...E(a,I),password:"",confirmPassword:""}))};return e.jsxs(c.Main,{children:[e.jsx(c.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Users"})}),e.jsx($,{method:"PUT",onSubmit:U,initialValues:j,validationSchema:oe,children:({isSubmitting:a,modified:n})=>e.jsxs(e.Fragment,{children:[e.jsx(P.Header,{primaryAction:e.jsx(Q,{disabled:a||!u||!n,startIcon:e.jsx(Y,{}),loading:a,type:"submit",children:s({id:"global.save",defaultMessage:"Save"})}),title:s({id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},{name:ae(j)}),navigationAction:e.jsx(K,{fallback:"../users"})}),e.jsxs(P.Content,{children:[o?.registrationToken&&e.jsx(p,{paddingBottom:6,children:e.jsx(x,{registrationToken:o.registrationToken})}),e.jsxs(h,{direction:"column",alignItems:"stretch",gap:7,children:[e.jsx(p,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(h,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(y,{variant:"delta",tag:"h2",children:s({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})}),e.jsx(l.Root,{gap:5,children:de.map(w=>w.map(({size:g,label:t,...d})=>e.jsx(l.Item,{col:g,direction:"column",alignItems:"stretch",children:e.jsx(J,{...d,disabled:!u,label:s(t),placeholder:"placeholder"in d?s(d.placeholder):void 0})},d.name)))})]})}),e.jsx(p,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(h,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(y,{variant:"delta",tag:"h2",children:s({id:"global.roles",defaultMessage:"User's role"})}),e.jsx(l.Root,{gap:5,children:e.jsx(l.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(te,{disabled:!u})})})]})})]})]})]})})]})},de=[[{label:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"string",size:6,required:!0},{label:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"string",size:6}],[{label:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:6,required:!0},{label:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"string",size:6}],[{autoComplete:"new-password",label:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:6},{autoComplete:"new-password",label:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:6}],[{label:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"boolean",size:6}]],fe=()=>{const s=L(f=>f.admin_app.permissions.settings?.users.read);return e.jsx(c.Protect,{permissions:s,children:e.jsx(ne,{})})};export{ne as EditPage,fe as ProtectedEditPage};
