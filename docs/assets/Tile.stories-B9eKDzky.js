import{j as o}from"./jsx-runtime-Bkl-fPu3.js";import{g as r}from"./styled-components.browser.esm-vTeNnIge.js";import{_ as C,a as l}from"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import{r as h}from"./index-LpBWhHPZ.js";import{g as y,a as b,s as v,u as T,c as j,b as w}from"./DefaultPropsProvider-C9DmSv4N.js";import{P as S}from"./Paper-Cn_3E_mi.js";import{bq as N}from"./SchoolIcon-BCTNLzS8.js";import"./PlayButton-tDDVXCNd.js";import"./SearchRounded-CpGVmpS1.js";import"./Unlock-DvKQY-eR.js";import"./index-yBjzXJbu.js";import"./createTheme-BJjsgvJc.js";import"./DefaultPropsProvider-Bumr00fv.js";import"./emotion-react.browser.esm-D9ztm9Ef.js";function R(e){return y("MuiCard",e)}b("MuiCard",["root"]);const _=["className","raised"],q=e=>{const{classes:t}=e;return w({root:["root"]},R,t)},M=v(S,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),k=h.forwardRef(function(t,n){const s=T({props:t,name:"MuiCard"}),{className:d,raised:a=!1}=s,p=C(s,_),i=l({},s,{raised:a}),m=q(i);return o.jsx(M,l({className:j(m.root,d),elevation:a?8:void 0,ref:n,ownerState:i},p))});function $(e){return y("MuiCardContent",e)}b("MuiCardContent",["root"]);const U=["className","component"],P=e=>{const{classes:t}=e;return w({root:["root"]},$,t)},z=v("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),D=h.forwardRef(function(t,n){const s=T({props:t,name:"MuiCardContent"}),{className:d,component:a="div"}=s,p=C(s,U),i=l({},s,{component:a}),m=P(i);return o.jsx(z,l({as:a,className:j(m.root,d),ownerState:i,ref:n},p))}),E=r.div`
  position: relative;
`,I=r(k)`
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
`,W=r.div`
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
`,A=r.div``,B=r(D)`
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
`,F=r.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
`,H=r.span`
  font-size: 15px;
  font-weight: 500;
  display: flex;
  height: 22px;
  align-items: center;
`;r.div`
  position: absolute;
  bottom: 28px;
  left: -22px;
  transform: translateY(100%);
  width: 300px;
  background: #fff;
  z-index: 5;
`;const u=({customCardStyles:e,$backgroundColor:t,iconColor:n,icon:s,gap:d,value:a,subIcon:p,text:i})=>o.jsx(E,{className:"tile",children:o.jsxs(I,{style:e,children:[s&&o.jsx(W,{$backgroundColor:t,color:n,children:s}),o.jsx(B,{gap:d,children:o.jsxs(A,{children:[o.jsxs(H,{children:[a," ",p]}),o.jsx(F,{children:i})]})})]})});u.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{customCardStyles:{required:!0,tsType:{name:"CSSProperties"},description:""},$backgroundColor:{required:!0,tsType:{name:"string"},description:""},iconColor:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"ReactNode"},description:""},gap:{required:!0,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number | undefined",elements:[{name:"string"},{name:"number"},{name:"undefined"}]},description:""},subIcon:{required:!1,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""}}};const ne={title:"Components/Tile",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},L=e=>o.jsx(u,{...e}),c=L.bind({});c.args={customCardStyles:{width:"400px"},$backgroundColor:"lightblue",iconColor:"darkblue",gap:10,value:"10",text:"Sample Tile",icon:o.jsx(N,{})};var x,g,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Tile {...args} />",...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const ae=["Default"];export{c as Default,ae as __namedExportsOrder,ne as default};
