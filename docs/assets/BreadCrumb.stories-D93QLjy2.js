import{j as e}from"./jsx-runtime-BMn0QxmW.js";import{R as i}from"./index-P7RG-sTI.js";import{d as c}from"./styled-components.browser.esm-DJTJMFhR.js";import{z as g}from"./SchoolIcon-icINwQwI.js";import"./PlayButton-C-8aCi6g.js";import"./SearchRounded-BYJUFGCg.js";import"./Unlock-BMGeDJzN.js";import{u as b,a as j}from"./chunk-LSOULM7L-DdLFbg93.js";import"./index-ChsGqxH_.js";c.div``;const h=c.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`,x=c.div`
  color: #68707a;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  svg {
    /* opacity: 0.5; */
  }
`;c.div`
  display: flex;
  align-items: center;
`;const f=c.div`
  font-weight: 400;
`,y=({data:r})=>{const t=j(),a=(n,s,l={})=>{n.preventDefault(),t(s,{state:l})};return r?e.jsx(h,{children:r.map((n,s)=>e.jsxs(i.Fragment,{children:[e.jsxs(x,{children:[n.icon,n.link?e.jsx("a",{href:n.link,onClick:l=>a(l,n.link,n.state),children:n.label}):e.jsx(f,{children:n.label})]}),s<r.length-1&&(s===0?e.jsx(g,{}):e.jsx("span",{children:" / "}))]},s))}):null},k=({data:r})=>r?e.jsx(h,{children:r.map((t,a)=>e.jsxs(i.Fragment,{children:[e.jsxs(x,{children:[t.icon,t.link?e.jsx("a",{href:t.link,children:t.label}):e.jsx(f,{children:t.label})]}),a<r.length-1&&(a===0?e.jsx(g,{}):e.jsx("span",{children:" / "}))]},a))}):null,u=r=>{const t=i.useMemo(()=>{try{return b(),!0}catch{return!1}},[]);try{if(t)return e.jsx(y,{...r})}catch{console.warn("Router context not detected, using regular links in breadcrumb")}return e.jsx(k,{...r})};u.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IBreadcrumbItemV2"}],raw:"IBreadcrumbItemV2[]"},description:""}}};const E={title:"Components/Breadcrumb",component:u,parameters:{layout:"centered"},tags:["autodocs"]},v=r=>e.jsx(u,{...r}),o=v.bind({});o.args={data:[{label:"Home",link:"/",icon:null,state:{}},{label:"Category",link:"/category",icon:null,state:{}},{label:"Subcategory",link:"/category/subcategory",icon:null,state:{}}]};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Breadcrumb {...args} />",...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,E as default};
