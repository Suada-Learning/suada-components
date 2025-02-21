import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{d as p}from"./styled-components.browser.esm-DT3FsLGj.js";import{s as g}from"./DefaultPropsProvider-BjW0N_ST.js";import{C as f}from"./CircularProgress-CfUbmS-o.js";import{C as h}from"./ThemeProvider-OMQ2BVwH.js";import{G as x}from"./global.styles-ky-6VlY_.js";import"./index-ChsGqxH_.js";import"./index-CAe6R3bO.js";import"./createTheme-B9H9ZwjD.js";import"./DefaultPropsProvider-CE9yCcll.js";import"./emotion-react.browser.esm-pxioRHjz.js";import"./extends-CF3RwP-h.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Theme-C1aqVGh7.js";import"./index-Cr4NX4s1.js";import"./useEnhancedEffect-DhebxzmZ.js";const b=p.div`
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
`,w=p.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,k="Loader",y={root:`${k}-root`},B=g(b)(({theme:r})=>({[`& .${y.root}`]:{display:"flex","& > * + *":{marginLeft:r.spacing(2)}}})),c=({width:r="40px",height:l="40px",withBackground:u=!1})=>e.jsx(B,{className:`${u?"withBackground":""}`,children:e.jsx(w,{children:e.jsx(f,{style:{width:r,height:l}})})});c.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'40px'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'40px'",computed:!1}},withBackground:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const N={title:"Components/Loader",component:c,decorators:[r=>e.jsxs(h,{children:[e.jsx(x,{}),e.jsx(r,{})]})],parameters:{layout:"centered"},argTypes:{width:{control:"text"},height:{control:"text"},withBackground:{control:"boolean"}},args:{width:"40px",height:"40px",withBackground:!1}},t={},o={args:{withBackground:!0}};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,d,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    withBackground: true
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const R=["Default","WithBackground"];export{t as Default,o as WithBackground,R as __namedExportsOrder,N as default};
