import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{d}from"./styled-components.browser.esm-pdgFlRIf.js";import{s as g}from"./DefaultPropsProvider-C_GoaD6p.js";import{C as f}from"./CircularProgress-TN8SFjvT.js";import{C as h}from"./ThemeProvider-DCa0myCF.js";import{G as x}from"./global.styles-B2KOwP-z.js";import"./index-ChsGqxH_.js";import"./index-Dmy2JGbm.js";import"./Middleware-Iy5ki4vm.js";import"./createTheme-CeVqtfuz.js";import"./DefaultPropsProvider-BK5jcq1d.js";import"./emotion-element-f0de968e.browser.esm-CIG5UYoQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./capitalize-CZCi9i4k.js";import"./emotion-react.browser.esm-ClIzM0To.js";import"./Theme-CfSMJjkw.js";import"./index-CSFoGZ6e.js";import"./useThemeWithoutDefault-MawsT_Y8.js";import"./useEnhancedEffect-CGhZVi17.js";import"./GlobalStyles-BetpE-We.js";const b=d.div`
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
`,w=d.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,k="Loader",y={root:`${k}-root`},B=g(b)(({theme:r})=>({[`& .${y.root}`]:{display:"flex","& > * + *":{marginLeft:r.spacing(2)}}})),c=({width:r="40px",height:l="40px",withBackground:u=!1})=>e.jsx(B,{className:`${u?"withBackground":""}`,children:e.jsx(w,{children:e.jsx(f,{style:{width:r,height:l}})})});c.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'40px'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'40px'",computed:!1}},withBackground:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const O={title:"Components/Loader",component:c,decorators:[r=>e.jsxs(h,{children:[e.jsx(x,{}),e.jsx(r,{})]})],parameters:{layout:"centered"},argTypes:{width:{control:"text"},height:{control:"text"},withBackground:{control:"boolean"}},args:{width:"40px",height:"40px",withBackground:!1}},t={},o={args:{withBackground:!0}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,m,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    withBackground: true
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const X=["Default","WithBackground"];export{t as Default,o as WithBackground,X as __namedExportsOrder,O as default};
