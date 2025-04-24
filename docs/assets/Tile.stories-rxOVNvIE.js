import{j as o}from"./jsx-runtime-BMn0QxmW.js";import{d as s}from"./styled-components.browser.esm-DJTJMFhR.js";import{_ as C,a as l}from"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import{r as h}from"./index-P7RG-sTI.js";import{g as y,a as b,s as v,u as T,c as j,b as w}from"./DefaultPropsProvider-Bw6qbxfz.js";import{P as S}from"./Paper-CnXrLlT7.js";import{bn as N}from"./SchoolIcon-icINwQwI.js";import"./PlayButton-C-8aCi6g.js";import"./SearchRounded-BYJUFGCg.js";import"./Unlock-BMGeDJzN.js";import"./index-ChsGqxH_.js";import"./createTheme-DGNmzB_z.js";import"./emotion-element-f0de968e.browser.esm-5W1wZvPb.js";import"./emotion-react.browser.esm-uhHxmO8j.js";import"./DefaultPropsProvider-B8aBBDeI.js";function R(e){return y("MuiCard",e)}b("MuiCard",["root"]);const _=["className","raised"],M=e=>{const{classes:t}=e;return w({root:["root"]},R,t)},k=v(S,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),q=h.forwardRef(function(t,n){const r=T({props:t,name:"MuiCard"}),{className:d,raised:a=!1}=r,p=C(r,_),i=l({},r,{raised:a}),m=M(i);return o.jsx(k,l({className:j(m.root,d),elevation:a?8:void 0,ref:n,ownerState:i},p))});function $(e){return y("MuiCardContent",e)}b("MuiCardContent",["root"]);const U=["className","component"],P=e=>{const{classes:t}=e;return w({root:["root"]},$,t)},z=v("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),D=h.forwardRef(function(t,n){const r=T({props:t,name:"MuiCardContent"}),{className:d,component:a="div"}=r,p=C(r,U),i=l({},r,{component:a}),m=P(i);return o.jsx(z,l({as:a,className:j(m.root,d),ownerState:i,ref:n},p))}),E=s.div`
  position: relative;
`,I=s(q)`
  padding: 16px;
  height: 88px;
  border-radius: 4px;
  border: 1px solid #d6dae0;
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  background-color: #fff;
  box-shadow: none !important;
`,W=s.div`
  width: 56px;
  height: 56px;
  border-radius: var(--Padding-4px, 4px);
  background: ${({$backgroundColor:e})=>e};
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${({color:e})=>e||"#000000"};
  svg {
    width: 23.172px;
    height: 23.172px;
    flex-shrink: 0;
    color: ${({color:e})=>e||"#000000"};
  }
`,A=s.div``,B=s(D)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: ${({gap:e})=>e||20}px;
  padding-bottom: 0 !important;
  padding: 10px !important;
  background: #fff;
  .MuiFab-sizeSmall {
    width: 36px !important;
    height: 36px !important;
  }
`,F=s.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
`,H=s.span`
  font-size: 15px;
  font-weight: 500;
  display: flex;
  height: 22px;
  align-items: center;
`;s.div`
  position: absolute;
  bottom: 28px;
  left: -22px;
  transform: translateY(100%);
  width: 300px;
  background: #fff;
  z-index: 5;
`;const u=({customCardStyles:e,$backgroundColor:t,iconColor:n,icon:r,gap:d,value:a,subIcon:p,text:i})=>o.jsx(E,{className:"tile",children:o.jsxs(I,{style:e,children:[r&&o.jsx(W,{$backgroundColor:t,color:n,children:r}),o.jsx(B,{gap:d,children:o.jsxs(A,{children:[o.jsxs(H,{children:[a," ",p]}),o.jsx(F,{children:i})]})})]})});u.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{customCardStyles:{required:!0,tsType:{name:"CSSProperties"},description:""},$backgroundColor:{required:!0,tsType:{name:"string"},description:""},iconColor:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"ReactNode"},description:""},gap:{required:!0,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number | undefined",elements:[{name:"string"},{name:"number"},{name:"undefined"}]},description:""},subIcon:{required:!1,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""}}};const ae={title:"Components/Tile",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},L=e=>o.jsx(u,{...e}),c=L.bind({});c.args={customCardStyles:{width:"400px"},$backgroundColor:"lightblue",iconColor:"darkblue",gap:10,value:"10",text:"Sample Tile",icon:o.jsx(N,{})};var x,g,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Tile {...args} />",...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const ie=["Default"];export{c as Default,ie as __namedExportsOrder,ae as default};
