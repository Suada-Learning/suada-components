import{j as o}from"./jsx-runtime-BMn0QxmW.js";import{C as w}from"./ThemeProvider-GwGc0gxs.js";import{G as P}from"./global.styles-CyevQp7B.js";import{r as T}from"./index-P7RG-sTI.js";import{d as s}from"./styled-components.browser.esm-DJTJMFhR.js";import{E as k}from"./ExpandMore-Dn3azIlu.js";import{u as C}from"./TranslationProvider-De5tz1Zh.js";import{aH as $,aB as q}from"./SchoolIcon-icINwQwI.js";import"./PlayButton-C-8aCi6g.js";import"./SearchRounded-BYJUFGCg.js";import"./Unlock-BMGeDJzN.js";import{P as D}from"./Popover-CSFG0R5Q.js";import"./index-ChsGqxH_.js";import"./Theme-BcQkaft4.js";import"./createTheme-DGNmzB_z.js";import"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import"./DefaultPropsProvider-B8aBBDeI.js";import"./useThemeWithoutDefault-CFR2Jxbw.js";import"./emotion-element-f0de968e.browser.esm-5W1wZvPb.js";import"./index-C4F_4SMc.js";import"./nested-Cn8RRBPJ.js";import"./createSvgIcon-Btl_X0QY.js";import"./createSvgIcon-Cdkvs6qy.js";import"./DefaultPropsProvider-Bw6qbxfz.js";import"./emotion-react.browser.esm-uhHxmO8j.js";import"./capitalize-DkmCX2yr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DPXMUJfm.js";import"./resolveComponentProps-BLe9na05.js";import"./isMuiElement-D00nZeEu.js";import"./useTimeout-C7Z447pM.js";import"./useId-C3_UTZZn.js";import"./useControlled-ZN7nkyof.js";import"./useIsFocusVisible-iU9pYnBM.js";import"./Grow-D4SzEOUP.js";import"./index-qH2c_dVb.js";import"./index-DdXvKv-Q.js";import"./useTheme-C9h2Par8.js";import"./utils-DKRoJviL.js";import"./TransitionGroupContext-BzHhXwHW.js";import"./setPrototypeOf-DgZC2w_0.js";import"./useSlotProps-B3Uksuau.js";import"./Paper-CnXrLlT7.js";const E=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px;
  transition: 0.3s ease;
  background: #fff;
  border-radius: 8px;

  &:hover {
    background: #edeef2;
  }

  ${({open:r})=>r&&"background: #edeef2;"||""}
`,_=s.h4`
  font-size: 14px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #414141;
`,N=s.div`
  display: flex;
  width: 180px;
  flex-direction: column;
  padding: 8px;
  border-radius: 8px;

  & > div {
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    padding: 8px;
    border-radius: 8px;
    transition: 0.3s ease;
    background: #fff;

    &:hover {
      background: #edeef2;
    }

    div {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`,z=s.figure`
  overflow: hidden;
  border-radius: 50%;
  width: ${({width:r})=>`${r}px;`};
  height: ${({height:r})=>`${r}px;`};
  box-shadow: ${({shadow:r})=>r?"0px 10px 10px rgba(0,0,0,0.2);":"none"};
`,f=({imgSource:r,shadow:n,width:a,height:e})=>o.jsx(z,{shadow:n,width:a,height:e,children:o.jsx("img",{src:r,alt:r})});f.__docgenInfo={description:"",methods:[],displayName:"ProfilePicture",props:{imgSource:{required:!1,tsType:{name:"string"},description:""},width:{required:!0,tsType:{name:"number"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},height:{required:!0,tsType:{name:"number"},description:""}}};const h=({user:r,logout:n,navigate:a})=>{const{t:e}=C(),[d,l]=T.useState(null),v=j=>{l(j.currentTarget)},p=()=>{l(null)},b=()=>{p(),a(`/user-profile/${r.id}`)},y=()=>{p(),n()},t=!!d,m=t?"simple-popover":void 0;return o.jsxs("div",{children:[o.jsxs(E,{role:"button",open:t,"aria-describedby":m,onClick:v,children:[o.jsx(f,{imgSource:r.avatarThumbnail||r.avatar||"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg",width:25,height:25}),o.jsx(_,{children:`${r.firstName} ${r.lastName}`}),o.jsx(k,{style:{color:"#02020f",transition:"transform 0.3s",transform:t?"rotate(180deg)":"rotate(0deg)"}})]}),o.jsx(D,{id:m,open:t,anchorEl:d,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},slotProps:{paper:{style:{borderRadius:8}}},children:o.jsxs(N,{children:[o.jsxs("div",{onClick:b,children:[o.jsx("div",{children:o.jsx($,{})}),o.jsx("span",{children:`${e("general.my")} ${e("general.profile")}`})]}),o.jsxs("div",{onClick:y,children:[o.jsx("div",{children:o.jsx(q,{})}),o.jsx("span",{children:e("actions.log_out")})]})]})})]})};h.__docgenInfo={description:"",methods:[],displayName:"ProfileDropdown",props:{user:{required:!0,tsType:{name:"IUser"},description:""},logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},navigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:""}}};const x={email:"JohnDoe@suada.com",id:"1",firstName:"John",lastName:"Doe",avatarThumbnail:"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg"},To={title:"Components/ProfileDropdown",component:h,tags:["autodocs"],decorators:[r=>o.jsxs(w,{children:[o.jsx(P,{}),o.jsx(r,{})]})],parameters:{layout:"centered"},argTypes:{user:{control:"object"},logout:{action:"logout"}},args:{user:x,logout:()=>console.log("Logged out")}},i={args:{user:x,logout:()=>console.log("Logged out")}};var c,u,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    user: mockUser,
    logout: () => console.log('Logged out')
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const ko=["Default"];export{i as Default,ko as __namedExportsOrder,To as default};
