import{r as m,j as e}from"./jsx-runtime-BMn0QxmW.js";import{g as f}from"./index-P7RG-sTI.js";import{r as x}from"./interopRequireDefault-CdiRfGvq.js";import{r as g}from"./createSvgIcon-BbSdJoBL.js";import{d as r}from"./styled-components.browser.esm-C8J4ZJ9w.js";import{T as oe}from"./Input-R3rzebAP.js";import{u as ae}from"./TranslationProvider-De5tz1Zh.js";import{C as se}from"./CircularProgress-BWq5DOC9.js";import"./index-ChsGqxH_.js";import"./createSvgIcon-B0lg9Vxo.js";import"./DefaultPropsProvider-CSM5SLky.js";import"./createTheme-DoGQ71L4.js";import"./DefaultPropsProvider-C-0Iltjy.js";import"./extends-CF3RwP-h.js";import"./emotion-element-f0de968e.browser.esm-D4p4t6Fx.js";import"./mergeSlotProps-YP2eSxzh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-CknlublU.js";import"./resolveComponentProps-IGToM-EB.js";import"./useEnhancedEffect-BdJxjJVZ.js";import"./useId-UV2MHOX5.js";import"./useControlled-ZN7nkyof.js";import"./styled-components-CRiLI2a7.js";import"./TextField-Ciy7mFf3.js";import"./useSlot-DryEmI1_.js";import"./setPrototypeOf-B4fUID9J.js";import"./Select-h3-45OWK.js";import"./index-DNzaLvD1.js";import"./useSlotProps-B3SxwOxI.js";import"./Popover-CAJEir_G.js";import"./isHostComponent-DVu5iVWx.js";import"./Grow-PnXGcmFC.js";import"./index-qH2c_dVb.js";import"./index-DdXvKv-Q.js";import"./useTheme-CEHeA6GC.js";import"./useTheme-D9KO4m93.js";import"./useThemeWithoutDefault-BzTszGh4.js";import"./utils-BL9f0C3K.js";import"./Paper-CmIQIAUw.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CUBQW1zD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-C5D4xruB.js";import"./GlobalStyles-BmpI7maY.js";import"./emotion-react.browser.esm-pFE7M3pz.js";var l={},F;function le(){if(F)return l;F=1;var t=x();Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=t(g()),n=m();return l.default=(0,i.default)((0,n.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel"),l}var de=le();const z=f(de);var d={},D;function pe(){if(D)return d;D=1;var t=x();Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var i=t(g()),n=m();return d.default=(0,i.default)((0,n.jsx)("path",{d:"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18zm-5-6-7 4V7z"}),"OndemandVideo"),d}var ce=pe();const ue=f(ce);r.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 100%;
  transition: border 0.2s ease;

  .image_wrapper {
    position: relative;
    padding-top: 10px;
    width: 100px;
    height: 100px;
    border-radius: 4px;
    svg {
      position: absolute;
      right: -11px;
      top: 0px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .video_wrapper {
    padding: 5px 10px;
    background: #eee;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      color: red;
    }
  }

  .file_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    svg {
      font-size: 20px;
      color: red;
      margin-left: 10px;
    }
  }

  label {
    cursor: pointer;
    display: flex;
    .MuiSvgIcon-fontSizeLarge {
      font-size: 5.1875rem;
    }

    svg {
      transform: scale(0.8);
      transition: transform 0.2s ease;
    }
  }
  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    overflow: hidden;
  }

  &.full {
    display: flex;
    align-items: center;
    justify-content: center;

    header {
      margin-right: 15px;
    }

    label {
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    label svg {
      transform: scale(1);
    }
  }

  &.uploaded {
    border: 1px solid rgba(0, 0, 0, 0.3);

    header {
      color: rgba(0, 0, 0, 0.74);
    }

    label svg {
      transform: scale(1);
    }
  }
`;r.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  border-radius: 4px;
`;r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  > div {
    width: 100%;
    text-align: center;
  }
`;r.div`
  margin-bottom: 15px;
`;r.header`
  color: rgba(0, 0, 0, 0.54);
  transition: color 0.2 ease;
  svg {
    fill: #3f51b5;
  }
`;r.div``;r.div`
  background: #fff;
  position: relative;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;const me=r.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
`,fe=r.div`
  font-size: 12px;
  color: #d32f2f;
  margin-left: 5px;
  margin-top: -15px;
`,xe=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`,y=r.div`
  width: ${({width:t})=>t||"100%"};
  position: relative;
`;r.div`
  width: 390px;
`;const k=r.div`
  position: absolute;
  right: ${({right:t})=>t||"-13px"};
  top: ${({top:t})=>t||"5px"};
  cursor: pointer;
`,U=r.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  /* input {
    opacity: 0;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    overflow: hidden;
  }

  &label {
    width: 85%;
    height: 100%;
    cursor: pointer;
  } */
`,P=r.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  left: 0;
  width: 0;
  top: 0;
  overflow: hidden;
`;r.div`
  position: absolute;
  left: 0px;
  top: -15px;
  background: #fff;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
`;const V=r.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  img {
    position: relative;
    border: 1px solid #08c694;
    width: 100%;
    height: ${({height:t})=>t||60}px;
    object-fit: cover;
    top: 2px;
  }
`,H=r.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 5px 5px;
  max-width: 150px;
  cursor: pointer;
  background: #fff;
  border: 1px solid #08c694;
  color: #08c694;
  font-size: 19px;
  font-weight: 400;
  border-radius: 4px;
  width: 130px;
`;r.label`
  cursor: pointer;
  color: #fff;
  background: #06c68f;
  font-size: 11px;
  padding: 4px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;r.div`
  input {
    opacity: 0;
    width: 1px;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    overflow: hidden;
  }
`;const ge=r.div`
  margin-left: auto;
  margin-top: 3px;
  width: 60px;
  cursor: pointer;
`,L=r.div`
  margin-left: 23px;
  margin-top: 3px;
  cursor: pointer;
`,A=r.div`
  margin-left: 19px;
  margin-top: 2px;
`,ve={width:"32px",height:"32px"},he=r.h2`
  font-size: 16px;
  font-weight: 550;
  margin-bottom: 5px;

  ${({$required:t})=>t?`
    &::after {
      content: '*';
      color: red;
      margin-left: 3px;
    }
  `:""}
`;var p={},S;function be(){if(S)return p;S=1;var t=x();Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var i=t(g()),n=m();return p.default=(0,i.default)((0,n.jsx)("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm7 7V3.5L18.5 9z"}),"InsertDriveFile"),p}var je=be();const ye=f(je);var c={},G;function we(){if(G)return c;G=1;var t=x();Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var i=t(g()),n=m();return c.default=(0,i.default)((0,n.jsx)("path",{d:"M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9"}),"Headset"),c}var Ie=we();const qe=f(Ie);var u={},N;function Ce(){if(N)return u;N=1;var t=x();Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var i=t(g()),n=m();return u.default=(0,i.default)((0,n.jsx)("path",{d:"M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5z"}),"FileUploadOutlined"),u}var Ee=Ce();const $=f(Ee);var o=(t=>(t.DOCUMENT="document",t.IMAGE="image",t.VIDEO="video",t.AUDIO="audio",t.FILE="file",t))(o||{});const J=({type:t,loading:i})=>[o.VIDEO,o.AUDIO].includes(t)?e.jsxs(A,{children:[Math.round(i)," %"]}):e.jsx(A,{children:e.jsx(se,{style:ve})}),h=t=>{t&&window.open(t,"_blank")},Q=({type:t,uploadedFile:i,label:n,inputValue:X,onInputChange:Y,onFileChange:w,disabled:Z,loading:s,deleteFile:I,id:v,accept:q,name:C,multiple:E,placeHolder:_,showFullPreview:ee=!1,inputClassName:te,touched:T,error:j,nameClassName:re,required:ie=!1})=>{const{t:O}=ae(),ne=()=>{const a=i;switch(t){case o.IMAGE:return e.jsx(V,{onClick:()=>{h(a.link)},children:e.jsx("img",{src:a==null?void 0:a.link,alt:""})});case o.VIDEO:return e.jsx(ge,{onClick:()=>{var R,M;h((M=(R=a.links)==null?void 0:R[4])==null?void 0:M.url)},children:e.jsx(ue,{color:"secondary"})});case o.AUDIO:return e.jsx(L,{onClick:()=>{h(a.link)},children:e.jsx(qe,{color:"secondary"})});default:return e.jsx(L,{onClick:()=>{h(a.link)},children:e.jsx(ye,{color:"secondary"})})}};return e.jsxs(me,{children:[n&&e.jsx(he,{$required:ie,children:n}),e.jsxs(xe,{children:[e.jsx(y,{width:"75%",children:e.jsx(oe,{label:"",placeholder:_||"Supported formats are PNG, JPG, JPEG",name:"file",size:"small",type:"text",fullWidth:!0,touched:T,error:!!j,value:X,onChange:Y,disabled:Z})}),ee?e.jsxs(e.Fragment,{children:[e.jsx(y,{width:"23%",children:s?e.jsx(J,{type:t,loading:s}):e.jsxs(U,{children:[e.jsx(P,{type:"file",className:re,name:C,id:v,onChange:w,multiple:E,accept:q}),e.jsxs(H,{htmlFor:v,children:[e.jsx($,{}),O("general.upload")||"Upload"," "]})]})}),i&&t===o.IMAGE&&e.jsx(V,{height:160,children:i.link&&e.jsx("img",{src:i.link,alt:"Input Image"})}),i&&e.jsx(k,{onClick:I,right:"160px",top:"37px",children:e.jsx(z,{style:{color:"rgba(179, 179, 184, 1)"}})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(y,{width:"23%",children:[!i&&!s&&e.jsxs(U,{children:[e.jsx(P,{type:"file",className:te,name:C,id:v,onChange:w,multiple:E,accept:q}),e.jsxs(H,{htmlFor:v,children:[e.jsx($,{}),O("general.upload")]})]}),s&&e.jsx(J,{type:t,loading:s}),i&&ne()]}),i&&e.jsx(k,{onClick:I,children:e.jsx(z,{style:{color:"#06C68F"}})})," "]})]}),j&&T&&e.jsx(fe,{children:j})]})};Q.__docgenInfo={description:"",methods:[],displayName:"Uploader",props:{placeHolder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"FileTypes"},description:""},label:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onFileChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:""},uploadedFile:{required:!1,tsType:{name:"union",raw:"IAttachment | null | IAudio | IUploadedFile",elements:[{name:"IAttachment"},{name:"null"},{name:"IAudio"},{name:"IUploadedFile"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},showFullPreview:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fileExtension:{required:!1,tsType:{name:"string"},description:""},deleteFile:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},nameClassName:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const jt={title:"Components/Uploader",decorators:[t=>e.jsx("div",{style:{padding:"0",display:"flex",justifyContent:"center"},children:e.jsx(t,{})})],tags:["autodocs"],component:Q,argTypes:{type:{control:"select",options:Object.values(o)},disabled:{control:"boolean"},loading:{control:"number"},showFullPreview:{control:"boolean"}}},b={args:{type:o.IMAGE,label:"Upload File",disabled:!1,loading:0,showFullPreview:!0}};var B,W,K;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: FileTypes.IMAGE,
    label: 'Upload File',
    disabled: false,
    loading: 0,
    showFullPreview: true
  }
}`,...(K=(W=b.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};const yt=["Default"];export{b as Default,yt as __namedExportsOrder,jt as default};
