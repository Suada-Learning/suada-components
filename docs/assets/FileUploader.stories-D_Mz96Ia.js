import{r as L,j as r}from"./jsx-runtime-Bkl-fPu3.js";import{g as S,r as P}from"./index-LpBWhHPZ.js";import{g as i}from"./styled-components.browser.esm-vTeNnIge.js";import{r as D}from"./createTheme-BJjsgvJc.js";import{r as $}from"./createSvgIcon-BbYfysmO.js";import{T as H}from"./Input-DxiaYzMd.js";import{u as O}from"./TranslationProvider-BFNHPoCP.js";import{C}from"./CircularProgress-RBKaNx7o.js";import"./index-yBjzXJbu.js";import"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import"./createSvgIcon-CHN_NkDh.js";import"./DefaultPropsProvider-C9DmSv4N.js";import"./DefaultPropsProvider-Bumr00fv.js";import"./emotion-react.browser.esm-D9ztm9Ef.js";import"./capitalize-C0twwv1t.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DXMN4qyR.js";import"./resolveComponentProps-CgC_3vN1.js";import"./isMuiElement-CmoBwBYB.js";import"./useTimeout-uj8HMJ6V.js";import"./useId-b15GGdoE.js";import"./useControlled-DzIyCmSp.js";import"./useIsFocusVisible-CkGi1wcy.js";import"./styled-components-DwCD6MDa.js";import"./TextField-P2M3YGIz.js";import"./Select-BCko3Ae-.js";import"./index-wK_Vy0z3.js";import"./useSlotProps-BYWN3rPX.js";import"./Popover-CkqaQlXT.js";import"./Grow-D6hKvwp6.js";import"./index-OYHOLIWU.js";import"./index-B6ujFmsw.js";import"./useTheme-oTZv7BHd.js";import"./useTheme-B6KSNk_k.js";import"./utils-CorHJCvM.js";import"./TransitionGroupContext-D8ooFCJs.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Paper-Cn_3E_mi.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-_SN1wxK1.js";import"./GlobalStyles-DoDlTzDT.js";var o={},b;function G(){if(b)return o;b=1;var t=D();Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=t($()),n=L();return o.default=(0,e.default)((0,n.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel"),o}var V=G();const N=S(V);i.div`
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
`;i.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  border-radius: 4px;
`;i.div`
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
`;i.div`
  margin-bottom: 15px;
`;i.header`
  color: rgba(0, 0, 0, 0.54);
  transition: color 0.2 ease;
  svg {
    fill: #3f51b5;
  }
`;i.div``;i.div`
  background: #fff;
  position: relative;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;const W=i.div`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 10px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  display: grid;
  grid-template-columns: 86px auto;
  align-items: center;
  position: relative;
`,y=i.div``;i.div`
  width: 390px;
`;const B=i.div`
  position: absolute;
  right: ${({right:t})=>t||"-12px"};
  top: ${({top:t})=>t||"-12px"};
  cursor: pointer;
`,J=i.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
`,K=i.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  left: 0;
  width: 0;
  top: 0;
  overflow: hidden;
`;i.div`
  position: absolute;
  left: 0px;
  top: -15px;
  background: #fff;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
`;const l=i.div`
  img {
    position: relative;
    width: 72px;
    height: 48px;
    border-radius: 4px;
    padding: 4px;
    top: 2px;
  }
`,Q=i.label`
  cursor: pointer;
  color: #fff;
  background: ${({theme:t})=>{var n;const e=(n=t==null?void 0:t.colors)==null?void 0:n.primary;return typeof e=="string"?e:e!=null&&e.main?e.main:"var(--primary-color, #06c68f)"}};
  font-size: 11px;
  padding: 9px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;i.label`
  cursor: pointer;
  color: #fff;
  background: ${({theme:t})=>{var n;const e=(n=t==null?void 0:t.colors)==null?void 0:n.primary;return typeof e=="string"?e:e!=null&&e.main?e.main:"var(--primary-color, #06c68f)"}};
  font-size: 11px;
  padding: 4px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;i.div`
  input {
    opacity: 0;
    width: 1px;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    overflow: hidden;
  }
`;i.div`
  margin-left: auto;
  margin-top: 3px;
  width: 60px;
  cursor: pointer;
`;i.div`
  margin-left: 23px;
  margin-top: 3px;
  cursor: pointer;
`;i.div`
  margin-left: 19px;
  margin-top: 2px;
`;const X=i.h2`
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
`,Y=i.p`
  font-size: 14px;
  color: #d32f2f;
  margin-top: 4px;
`,Z=i(N)`
  color: ${({theme:t})=>{var n;const e=(n=t==null?void 0:t.colors)==null?void 0:n.primary;return typeof e=="string"?e:e!=null&&e.main?e.main:"var(--primary-color, #06c68f)"}};
`,ee={thumbnail:{width:"72px",height:"48px",borderRadius:"4px",padding:"4px"}},te=({src:t,alt:e})=>{const[n,s]=P.useState(!1);return n?r.jsx(C,{}):r.jsx("img",{src:t,alt:e,style:ee.thumbnail,onError:()=>s(!0)})},re=({type:t,loading:e})=>["video","audio"].includes(t)?r.jsxs("div",{style:{marginLeft:"19px",marginTop:"2px"},children:[Math.round(e)," %"]}):r.jsx("div",{style:{marginLeft:"19px",marginTop:"2px"},children:r.jsx(C,{style:{width:"32px",height:"32px"}})}),q=({type:t,uploadedFile:e,label:n,inputValue:s,onInputChange:z,onFileChange:R,disabled:m,loading:u,deleteFile:f,id:g,accept:A,name:M,multiple:U,fileExtension:_,error:x,required:k=!1})=>{const{t:h}=O(),F=()=>{var p;if(((p=e==null?void 0:e.link)==null?void 0:p.split(".").pop())==="pdf")return r.jsx(l,{children:r.jsx("div",{style:{fontSize:"10px",textAlign:"center",padding:"4px",width:"72px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f5f5",borderRadius:"4px"},children:"PDF"})});switch(t){case"image":return r.jsx(l,{children:r.jsx(te,{src:(e==null?void 0:e.link)||"",alt:"Image Thumbnail"})});case"file":return r.jsx(l,{children:r.jsx("div",{style:{fontSize:"10px",textAlign:"center",padding:"4px",width:"72px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f5f5",borderRadius:"4px"},children:"FILE"})});case"video":return r.jsx("div",{style:{marginTop:"3px"},children:r.jsx("div",{style:{fontSize:"10px",textAlign:"center",padding:"4px",width:"72px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f5f5",borderRadius:"4px"},children:"VIDEO"})});case"audio":return r.jsx("div",{style:{marginTop:"3px"},children:r.jsx("div",{style:{fontSize:"10px",textAlign:"center",padding:"4px",width:"72px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f5f5",borderRadius:"4px"},children:"AUDIO"})});default:return r.jsx(l,{children:r.jsx("div",{style:{fontSize:"10px",textAlign:"center",padding:"4px",width:"72px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f5f5",borderRadius:"4px"},children:"FILE"})})}};return r.jsxs("div",{children:[n&&r.jsx(X,{$required:k,children:n}),r.jsxs(W,{children:[r.jsxs(y,{children:[!e&&!u&&r.jsxs(J,{children:[r.jsx(K,{type:"file",name:M,id:g,onChange:R,multiple:U,accept:A}),r.jsx(Q,{htmlFor:g,children:h("actions.choose_file")||"Choose File"})]}),u&&r.jsx(re,{type:t||"file",loading:u}),!m&&e&&F()]}),r.jsx(y,{children:r.jsx(H,{label:s?"":`${h("form_fields.file_name")||"File name"} ${_||""}`,name:"file",size:"small",type:"text",fullWidth:!0,value:s||"",onChange:z,disabled:m})}),e&&r.jsx(B,{onClick:p=>{p.stopPropagation(),f&&f()},children:r.jsx(Z,{})})]}),x&&r.jsx(Y,{children:x})]})};q.__docgenInfo={description:"",methods:[],displayName:"Uploader",props:{placeHolder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"FileTypes"},description:""},label:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onFileChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:""},uploadedFile:{required:!1,tsType:{name:"union",raw:"IAttachment | null | IAudio | IUploadedFile",elements:[{name:"IAttachment"},{name:"null"},{name:"IAudio"},{name:"IUploadedFile"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},showFullPreview:{required:!1,tsType:{name:"boolean"},description:""},fileExtension:{required:!1,tsType:{name:"string"},description:""},deleteFile:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},nameClassName:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};var a=(t=>(t.DOCUMENT="document",t.IMAGE="image",t.VIDEO="video",t.AUDIO="audio",t.FILE="file",t))(a||{});const Ve={title:"Components/Uploader",decorators:[t=>r.jsx("div",{style:{padding:"0",display:"flex",justifyContent:"center"},children:r.jsx(t,{})})],tags:["autodocs"],component:q,argTypes:{type:{control:"select",options:Object.values(a)},disabled:{control:"boolean"},loading:{control:"number"},showFullPreview:{control:"boolean"}}},d={args:{type:a.IMAGE,label:"Upload File",disabled:!1,showFullPreview:!0}},c={args:{type:a.IMAGE,label:"Upload File",uploadedFile:{id:"1",name:"image.png",type:a.IMAGE,size:1024},inputValue:"image.png",disabled:!1,showFullPreview:!0}};var v,j,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: FileTypes.IMAGE,
    label: 'Upload File',
    disabled: false,
    showFullPreview: true
  }
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var I,T,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: FileTypes.IMAGE,
    label: 'Upload File',
    uploadedFile: {
      id: '1',
      name: 'image.png',
      type: FileTypes.IMAGE,
      size: 1024
    },
    inputValue: 'image.png',
    disabled: false,
    showFullPreview: true
  }
}`,...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const Ne=["Default","Uploaded"];export{d as Default,c as Uploaded,Ne as __namedExportsOrder,Ve as default};
