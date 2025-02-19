import{j as e}from"./jsx-runtime-Be5KepTg.js";import{c as a}from"./createSvgIcon-KzkT8T21.js";import{d as n}from"./createTheme-B4pomYAW.js";import{T as J}from"./TextInput-C8rNGnDJ.js";import{u as B}from"./TranslationProvider-CUEHlEwt.js";import{C as W}from"./CircularProgress-C1zYHYrT.js";import"./index-Cu3ntQMU.js";import"./index-BsICj7Do.js";import"./useSlot-MqmgmX97.js";import"./DefaultPropsProvider-BB0hjY0t.js";import"./index-cfNomcto.js";import"./index-DYvH7Hsd.js";import"./styled-components-DZLBgmQk.js";import"./useFormControl-BFGBx6La.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-Dp9otNH8.js";import"./index-Dpg-LJl0.js";import"./Popover-IETx_Mw0.js";import"./Grow-DTwrS1bI.js";import"./Paper-BScAZJYj.js";import"./useControlled-DNjoTknX.js";const C=a(e.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel"),T=a(e.jsx("path",{d:"M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5z"}),"FileUploadOutlined"),K=a(e.jsx("path",{d:"M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9"}),"Headset"),Q=a(e.jsx("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm7 7V3.5L18.5 9z"}),"InsertDriveFile"),X=a(e.jsx("path",{d:"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18zm-5-6-7 4V7z"}),"OndemandVideo");n.div`
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
`;n.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  border-radius: 4px;
`;n.div`
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
`;n.div`
  margin-bottom: 15px;
`;n.header`
  color: rgba(0, 0, 0, 0.54);
  transition: color 0.2 ease;
  svg {
    fill: #3f51b5;
  }
`;n.div``;n.div`
  background: #fff;
  position: relative;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;const Y=n.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
`,Z=n.div`
  font-size: 12px;
  color: #d32f2f;
  margin-left: 5px;
  margin-top: -15px;
`,ee=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`,m=n.div`
  width: ${({width:t})=>t||"100%"};
  position: relative;
`;n.div`
  width: 390px;
`;const E=n.div`
  position: absolute;
  right: ${({right:t})=>t||"-13px"};
  top: ${({top:t})=>t||"5px"};
  cursor: pointer;
`,q=n.div`
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
`,z=n.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  left: 0;
  width: 0;
  top: 0;
  overflow: hidden;
`;n.div`
  position: absolute;
  left: 0px;
  top: -15px;
  background: #fff;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
`;const k=n.div`
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
`,M=n.label`
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
`;n.label`
  cursor: pointer;
  color: #fff;
  background: #06c68f;
  font-size: 11px;
  padding: 4px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;n.div`
  input {
    opacity: 0;
    width: 1px;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    overflow: hidden;
  }
`;const te=n.div`
  margin-left: auto;
  margin-top: 3px;
  width: 60px;
  cursor: pointer;
`,L=n.div`
  margin-left: 23px;
  margin-top: 3px;
  cursor: pointer;
`,U=n.div`
  margin-left: 19px;
  margin-top: 2px;
`,ne={width:"32px",height:"32px"},ie=n.h2`
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
`;var r=(t=>(t.DOCUMENT="document",t.IMAGE="image",t.VIDEO="video",t.AUDIO="audio",t.FILE="file",t))(r||{});const F=({type:t,loading:i})=>[r.VIDEO,r.AUDIO].includes(t)?e.jsxs(U,{children:[Math.round(i)," %"]}):e.jsx(U,{children:e.jsx(W,{style:ne})}),d=t=>{t&&window.open(t,"_blank")},O=({type:t,uploadedFile:i,label:u,inputValue:A,onInputChange:D,onFileChange:x,disabled:R,loading:s,deleteFile:f,id:l,accept:g,name:h,multiple:v,placeHolder:b,showFullPreview:_=!1,inputClassName:G,touched:y,error:c,nameClassName:N,required:S=!1})=>{const{t:j}=B(),$=()=>{const o=i;switch(t){case r.IMAGE:return e.jsx(k,{onClick:()=>{d(o.link)},children:e.jsx("img",{src:o==null?void 0:o.link,alt:""})});case r.VIDEO:return e.jsx(te,{onClick:()=>{var w,I;d((I=(w=o.links)==null?void 0:w[4])==null?void 0:I.url)},children:e.jsx(X,{color:"secondary"})});case r.AUDIO:return e.jsx(L,{onClick:()=>{d(o.link)},children:e.jsx(K,{color:"secondary"})});default:return e.jsx(L,{onClick:()=>{d(o.link)},children:e.jsx(Q,{color:"secondary"})})}};return e.jsxs(Y,{children:[u&&e.jsx(ie,{$required:S,children:u}),e.jsxs(ee,{children:[e.jsx(m,{width:"75%",children:e.jsx(J,{label:"",placeholder:b||"Supported formats are PNG, JPG, JPEG",name:"file",size:"small",type:"text",fullWidth:!0,touched:y,error:!!c,value:A,onChange:D,disabled:R})}),_?e.jsxs(e.Fragment,{children:[e.jsx(m,{width:"23%",children:s?e.jsx(F,{type:t,loading:s}):e.jsxs(q,{children:[e.jsx(z,{type:"file",className:N,name:h,id:l,onChange:x,multiple:v,accept:g}),e.jsxs(M,{htmlFor:l,children:[e.jsx(T,{}),j("general.upload")||"Upload"," "]})]})}),i&&t===r.IMAGE&&e.jsx(k,{height:160,children:i.link&&e.jsx("img",{src:i.link,alt:"Input Image"})}),i&&e.jsx(E,{onClick:f,right:"160px",top:"37px",children:e.jsx(C,{style:{color:"rgba(179, 179, 184, 1)"}})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(m,{width:"23%",children:[!i&&!s&&e.jsxs(q,{children:[e.jsx(z,{type:"file",className:G,name:h,id:l,onChange:x,multiple:v,accept:g}),e.jsxs(M,{htmlFor:l,children:[e.jsx(T,{}),j("general.upload")]})]}),s&&e.jsx(F,{type:t,loading:s}),i&&$()]}),i&&e.jsx(E,{onClick:f,children:e.jsx(C,{style:{color:"#06C68F"}})})," "]})]}),c&&y&&e.jsx(Z,{children:c})]})};O.__docgenInfo={description:"",methods:[],displayName:"Uploader",props:{placeHolder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"FileTypes"},description:""},label:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onFileChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:""},uploadedFile:{required:!1,tsType:{name:"union",raw:"IAttachment | null | IAudio | IUploadedFile",elements:[{name:"IAttachment"},{name:"null"},{name:"IAudio"},{name:"IUploadedFile"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},showFullPreview:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fileExtension:{required:!1,tsType:{name:"string"},description:""},deleteFile:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},nameClassName:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Te={title:"Components/Uploader",decorators:[t=>e.jsx("div",{style:{padding:"0",display:"flex",justifyContent:"center"},children:e.jsx(t,{})})],tags:["autodocs"],component:O,argTypes:{type:{control:"select",options:Object.values(r)},disabled:{control:"boolean"},loading:{control:"number"},showFullPreview:{control:"boolean"}}},p={args:{type:r.IMAGE,label:"Upload File",disabled:!1,loading:0,showFullPreview:!0}};var V,H,P;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: FileTypes.IMAGE,
    label: 'Upload File',
    disabled: false,
    loading: 0,
    showFullPreview: true
  }
}`,...(P=(H=p.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const Ee=["Default"];export{p as Default,Ee as __namedExportsOrder,Te as default};
