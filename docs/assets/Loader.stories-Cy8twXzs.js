import{j as e}from"./jsx-runtime-BMn0QxmW.js";import{d}from"./styled-components.browser.esm-C8J4ZJ9w.js";import{C as l}from"./CircularProgress-BWq5DOC9.js";import{C as g}from"./ThemeProvider-ermrFBfr.js";import{G as h}from"./global.styles-CoN48fG-.js";import"./index-ChsGqxH_.js";import"./index-P7RG-sTI.js";import"./DefaultPropsProvider-CSM5SLky.js";import"./createTheme-DoGQ71L4.js";import"./DefaultPropsProvider-C-0Iltjy.js";import"./extends-CF3RwP-h.js";import"./emotion-element-f0de968e.browser.esm-D4p4t6Fx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./emotion-react.browser.esm-pFE7M3pz.js";import"./Theme-7RLsAxfg.js";import"./index-DNzaLvD1.js";import"./useThemeWithoutDefault-BzTszGh4.js";import"./useEnhancedEffect-BdJxjJVZ.js";import"./GlobalStyles-BmpI7maY.js";d.div`
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
`,u=({width:o="40px",height:c="40px",withBackground:x=!1})=>e.jsx(e.Fragment,{children:e.jsx(f,{children:e.jsx(l,{style:{width:o,height:c}})})});u.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'40px'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'40px'",computed:!1}},withBackground:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z={title:"Components/Loader",component:u,decorators:[o=>e.jsxs(g,{children:[e.jsx(h,{}),e.jsx(o,{})]})],parameters:{layout:"centered"},argTypes:{width:{control:"text"},height:{control:"text"},withBackground:{control:"boolean"}},args:{width:"40px",height:"40px",withBackground:!1}},r={},t={args:{withBackground:!0}};var a,s,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    withBackground: true
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const F=["Default","WithBackground"];export{r as Default,t as WithBackground,F as __namedExportsOrder,z as default};
