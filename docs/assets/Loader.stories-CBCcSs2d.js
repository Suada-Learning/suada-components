import{j as e}from"./jsx-runtime-Bkl-fPu3.js";import{g as d}from"./styled-components.browser.esm-vTeNnIge.js";import{C as l}from"./CircularProgress-BG8-UYaW.js";import{C as g}from"./ThemeProvider-B4R_6A2M.js";import{G as h}from"./global.styles-eHzobOmD.js";import"./index-yBjzXJbu.js";import"./index-LpBWhHPZ.js";import"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import"./DefaultPropsProvider-D67Nt_Kr.js";import"./createTheme-8DWx8oiM.js";import"./DefaultPropsProvider-Bumr00fv.js";import"./emotion-react.browser.esm-D9ztm9Ef.js";import"./Theme-C_GbAspN.js";import"./useTheme-JzeSqcNx.js";import"./index-wK_Vy0z3.js";import"./useId-b15GGdoE.js";import"./useEnhancedEffect-DwozEE2v.js";import"./GlobalStyles-Br73Fs44.js";d.div`
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
