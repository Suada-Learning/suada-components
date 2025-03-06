import{j as s}from"./jsx-runtime-BMn0QxmW.js";import{d as l}from"./styled-components.browser.esm-C8J4ZJ9w.js";import{u as m}from"./useTranslation-BxHDJEAA.js";import"./index-ChsGqxH_.js";import"./index-P7RG-sTI.js";var t=(e=>(e.ACTIVE="ACTIVE",e.SUSPENDED="SUSPENDED",e.PENDING="PENDING",e.DRAFT="DRAFT",e.UNPUBLISHED="UNPUBLISHED",e.PUBLISHED="PUBLISHED",e.APPROVED="APPROVED",e.DECLINED="DECLINED",e))(t||{});const I=l.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 92px;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 4px;
  display: inline-block;

  background: ${({status:e})=>{switch(e){case t.ACTIVE:return"#e5f4ef";case t.SUSPENDED:return"#fdebea";case t.PENDING:return"rgba(207, 207, 9, 0.1)";case t.APPROVED:return"#e5f4ef";case t.DECLINED:return"#fdebea";case t.UNPUBLISHED:return"#FDEBEA";case t.PUBLISHED:return"#E5F4EF";case t.DRAFT:return"rgba(0, 0, 0, 0.1)";default:return"transparent"}}};

  color: ${({status:e})=>{switch(e){case t.ACTIVE:return"#00905e";case t.SUSPENDED:return"#ea382a";case t.PENDING:return"rgb(207, 207, 9)";case t.UNPUBLISHED:return"#EA382A";case t.APPROVED:return"#00905E";case t.DECLINED:return"#EA382A";case t.PUBLISHED:return"#00905E";case t.DRAFT:return"rgba(0, 0, 0, 0.5)";default:return"transparent"}}};
`,f=l.div`
  font-size: 13px;
  color: #fff;
  height: 32px;
  padding: 4px 12px;
  text-transform: capitalize;
  border-radius: 4px;
  background: ${({$isActive:e})=>e?"#08C694":"#EA382A"};
  display: flex;
  align-items: center;
  justify-content: center;
`,n=({status:e=t.SUSPENDED})=>s.jsx(I,{status:e,children:e.charAt(0)+e.slice(1).toLowerCase()}),D=({$isActive:e=!0})=>{const{t:o}=m();return s.jsx(f,{$isActive:e,children:o(e?"general.active":"general.disabled")})};n.__docgenInfo={description:"",methods:[],displayName:"StatusIndicator",props:{status:{required:!1,tsType:{name:"GridStatusEnums"},description:"",defaultValue:{value:"GridStatusEnums.SUSPENDED",computed:!0}}}};D.__docgenInfo={description:"",methods:[],displayName:"CompanyStatusIndicator",props:{$isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const U={title:"Components/StatusIndicator",component:n,tags:["autodocs","StatusIndicator"],parameters:{layout:"centered"}},S=e=>s.jsx(n,{...e}),r=S.bind({});r.args={status:t.ACTIVE};const P=e=>s.jsx(D,{...e}),a=P.bind({});a.args={$isActive:!0};var c,i,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"args => <StatusIndicator {...args} />",...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,E;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"args => <CompanyStatusIndicator {...args} />",...(E=(p=a.parameters)==null?void 0:p.docs)==null?void 0:E.source}}};const y=["DefaultStatusIndicator","DefaultCompanyStatusIndicator"];export{a as DefaultCompanyStatusIndicator,r as DefaultStatusIndicator,y as __namedExportsOrder,U as default};
