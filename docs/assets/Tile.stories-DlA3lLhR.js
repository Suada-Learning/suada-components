import{j as o}from"./jsx-runtime-BMn0QxmW.js";import{d as s}from"./styled-components.browser.esm-C8J4ZJ9w.js";import{r as f}from"./index-P7RG-sTI.js";import{a as C,g as h,s as y,u as b,c as v,b as T}from"./DefaultPropsProvider-CSM5SLky.js";import{P as j}from"./Paper-CmIQIAUw.js";import{be as w}from"./SchoolIcon-BAVzMfD1.js";import"./PlayButton-DqZmVyxd.js";import"./SearchRounded-CZbvd4YK.js";import"./Unlock-BEu2NmH4.js";import"./index-ChsGqxH_.js";import"./createTheme-DoGQ71L4.js";import"./DefaultPropsProvider-C-0Iltjy.js";import"./extends-CF3RwP-h.js";import"./emotion-element-f0de968e.browser.esm-D4p4t6Fx.js";import"./useTheme-CEHeA6GC.js";import"./useTheme-D9KO4m93.js";import"./useThemeWithoutDefault-BzTszGh4.js";function S(t){return C("MuiCard",t)}h("MuiCard",["root"]);const R=t=>{const{classes:e}=t;return T({root:["root"]},S,e)},M=y(j,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})({overflow:"hidden"}),N=f.forwardRef(function(e,n){const r=b({props:e,name:"MuiCard"}),{className:d,raised:i=!1,...p}=r,a={...r,raised:i},l=R(a);return o.jsx(M,{className:v(l.root,d),elevation:i?8:void 0,ref:n,ownerState:a,...p})});function k(t){return C("MuiCardContent",t)}h("MuiCardContent",["root"]);const q=t=>{const{classes:e}=t;return T({root:["root"]},k,e)},U=y("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})({padding:16,"&:last-child":{paddingBottom:24}}),$=f.forwardRef(function(e,n){const r=b({props:e,name:"MuiCardContent"}),{className:d,component:i="div",...p}=r,a={...r,component:i},l=q(a);return o.jsx(U,{as:i,className:v(l.root,d),ownerState:a,ref:n,...p})}),P=s.div`
  position: relative;
`,_=s(N)`
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
`,z=s.div`
  width: 56px;
  height: 56px;
  border-radius: var(--Padding-4px, 4px);
  background: ${({$backgroundColor:t})=>t};
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${({color:t})=>t||"#000000"};
  svg {
    width: 23.172px;
    height: 23.172px;
    flex-shrink: 0;
    color: ${({color:t})=>t||"#000000"};
  }
`,D=s.div``,E=s($)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: ${({gap:t})=>t||20}px;
  padding-bottom: 0 !important;
  padding: 10px !important;
  background: #fff;
  .MuiFab-sizeSmall {
    width: 36px !important;
    height: 36px !important;
  }
`,I=s.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
`,A=s.span`
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
`;const m=({customCardStyles:t,$backgroundColor:e,iconColor:n,icon:r,gap:d,value:i,subIcon:p,text:a})=>o.jsx(P,{className:"tile",children:o.jsxs(_,{style:t,children:[r&&o.jsx(z,{$backgroundColor:e,color:n,children:r}),o.jsx(E,{gap:d,children:o.jsxs(D,{children:[o.jsxs(A,{children:[i," ",p]}),o.jsx(I,{children:a})]})})]})});m.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{customCardStyles:{required:!0,tsType:{name:"CSSProperties"},description:""},$backgroundColor:{required:!0,tsType:{name:"string"},description:""},iconColor:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"ReactNode"},description:""},gap:{required:!0,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number | undefined",elements:[{name:"string"},{name:"number"},{name:"undefined"}]},description:""},subIcon:{required:!1,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""}}};const st={title:"Components/Tile",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},B=t=>o.jsx(m,{...t}),c=B.bind({});c.args={customCardStyles:{width:"400px"},$backgroundColor:"lightblue",iconColor:"darkblue",gap:10,value:"10",text:"Sample Tile",icon:o.jsx(w,{})};var u,x,g;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Tile {...args} />",...(g=(x=c.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const nt=["Default"];export{c as Default,nt as __namedExportsOrder,st as default};
