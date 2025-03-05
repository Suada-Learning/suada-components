import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{R as u}from"./index-Dmy2JGbm.js";import{d as s}from"./styled-components.browser.esm-pdgFlRIf.js";import{u as g}from"./chunk-HA7DTUK3-YgDQKlqm.js";import{z as f}from"./SchoolIcon-DbRWRIQ4.js";import"./PlayButton-WkCxJEgw.js";import"./SearchRounded-B4wRncnu.js";import"./Unlock-BWT_y5W-.js";import"./index-ChsGqxH_.js";import"./Middleware-Iy5ki4vm.js";s.div``;const x=s.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`,b=s.div`
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
`;s.div`
  display: flex;
  align-items: center;
`;const h=s.div`
  font-weight: 400;
`,i=({data:r})=>{const p=g(),d=(e,a,n={})=>{e.preventDefault(),p(a,{state:n})};if(r)return t.jsx(x,{children:r.map((e,a)=>t.jsxs(u.Fragment,{children:[t.jsxs(b,{children:[e.icon,e.link?t.jsx("a",{href:"/",onClick:n=>d(n,e.link,e.state),children:e.label}):t.jsx(h,{children:e.label})]}),a<r.length-1&&(a===0?t.jsx(f,{}):t.jsx("span",{children:" / "}))]},a))})};i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IBreadcrumbItemV2"}],raw:"IBreadcrumbItemV2[]"},description:""}}};const z={title:"Components/Breadcrumb",component:i,parameters:{layout:"centered"},tags:["autodocs"]},y=r=>t.jsx(i,{...r}),o=y.bind({});o.args={data:[{label:"Home",link:"/",icon:null,state:{}},{label:"Category",link:"/category",icon:null,state:{}},{label:"Subcategory",link:"/category/subcategory",icon:null,state:{}}]};var c,l,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Breadcrumb {...args} />",...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,z as default};
