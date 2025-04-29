import{j as e}from"./jsx-runtime-BMn0QxmW.js";import{d}from"./styled-components.browser.esm-DJTJMFhR.js";import{C as l}from"./CircularProgress-CRQfFSdP.js";import{C as g}from"./ThemeProvider-GwGc0gxs.js";import{G as h}from"./global.styles-CyevQp7B.js";import"./index-ChsGqxH_.js";import"./index-P7RG-sTI.js";import"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import"./DefaultPropsProvider-Bw6qbxfz.js";import"./createTheme-DGNmzB_z.js";import"./emotion-element-f0de968e.browser.esm-5W1wZvPb.js";import"./emotion-react.browser.esm-uhHxmO8j.js";import"./DefaultPropsProvider-B8aBBDeI.js";import"./capitalize-DkmCX2yr.js";import"./Theme-BcQkaft4.js";import"./useThemeWithoutDefault-CFR2Jxbw.js";import"./index-C4F_4SMc.js";import"./nested-Cn8RRBPJ.js";d.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &.withBackground {
    background: rgba(255, 255, 255, 1);
  }
`;const f=d.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,u=({width:o="40px",height:c="40px",withBackground:x=!1})=>e.jsx(e.Fragment,{children:e.jsx(f,{children:e.jsx(l,{style:{width:o,height:c}})})});u.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'40px'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'40px'",computed:!1}},withBackground:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const W={title:"Components/Loader",component:u,decorators:[o=>e.jsxs(g,{children:[e.jsx(h,{}),e.jsx(o,{})]})],parameters:{layout:"centered"},argTypes:{width:{control:"text"},height:{control:"text"},withBackground:{control:"boolean"}},args:{width:"40px",height:"40px",withBackground:!1}},r={},t={args:{withBackground:!0}};var a,s,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    withBackground: true
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const z=["Default","WithBackground"];export{r as Default,t as WithBackground,z as __namedExportsOrder,W as default};
