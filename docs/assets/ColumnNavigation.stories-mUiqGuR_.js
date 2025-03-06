import{j as t}from"./jsx-runtime-BMn0QxmW.js";import{r as b}from"./index-P7RG-sTI.js";import{d as m}from"./styled-components.browser.esm-C8J4ZJ9w.js";import{c as d}from"./createSvgIcon-B0lg9Vxo.js";import"./index-ChsGqxH_.js";import"./DefaultPropsProvider-CSM5SLky.js";import"./createTheme-DoGQ71L4.js";import"./DefaultPropsProvider-C-0Iltjy.js";import"./extends-CF3RwP-h.js";import"./emotion-element-f0de968e.browser.esm-D4p4t6Fx.js";const x=m.div`
  box-shadow: 0px 0px 29px 5px rgba(0, 0, 0, 0.03);
  background: #fff;
  border-radius: 28px;
  padding: 10px 30px;
  padding-bottom: 34px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1660px) {
    padding: 10px 20px;
    padding-bottom: 24px;
  }
`,v=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  @media (max-width: 1660px) {
    font-size: 0.9rem;
    padding: 5px;
  }
  font-weight: 600;
  color: #000;
  position: relative;
  transition: font-weight 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  svg {
    fill: ${({active:e})=>e?" #06c68f":"#ccc"};
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(-50%);
    width: ${({active:e})=>e?"100%":"50%"};
    height: 2px;
    border-radius: 20px;
    background-color: ${({active:e})=>e?"#06c68f":"#ccc"};
    transition:
      width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      background-color 0.3s ease-in-out;
  }
`,r=({tabs:e,activeTab:a,setActiveTab:i})=>t.jsx(x,{children:e.map((s,o)=>{if(s){const{label:u,icon:g}=s;return t.jsxs(v,{onClick:()=>i(o),active:a===o,children:[t.jsx("p",{children:u}),g]},o)}return null})});r.__docgenInfo={description:"",methods:[],displayName:"ColumnNavigation",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string
  icon: JSX.Element
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!0}}]}}],raw:`{
  label: string
  icon: JSX.Element
}[]`},description:""},activeTab:{required:!0,tsType:{name:"number"},description:""},setActiveTab:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const f=d(t.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),h=d(t.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings"),q={title:"Components/ColumnNavigation",component:r,tags:["autodocs","CourseNavigation"],parameters:{layout:"centered"}},y=e=>{const[a,i]=b.useState(0);return t.jsx(r,{...e,activeTab:a,setActiveTab:i})},n=y.bind({});n.args={tabs:[{label:"Home",icon:t.jsx(f,{})},{label:"Settings",icon:t.jsx(h,{})}]};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [activeTab, setActiveTab] = useState(0);
  return <ColumnNavigation {...args} activeTab={activeTab} setActiveTab={setActiveTab} />;
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const _=["DefaultColumnNavigation"];export{n as DefaultColumnNavigation,_ as __namedExportsOrder,q as default};
