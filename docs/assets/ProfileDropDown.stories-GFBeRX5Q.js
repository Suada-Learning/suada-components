import{j as o}from"./jsx-runtime-Bkl-fPu3.js";import{C as w}from"./ThemeProvider-B4R_6A2M.js";import{G as P}from"./global.styles-eHzobOmD.js";import{r as T}from"./index-LpBWhHPZ.js";import{g as s}from"./styled-components.browser.esm-vTeNnIge.js";import{E as k}from"./ExpandMore-In0pvvb-.js";import{u as C}from"./TranslationProvider-BFNHPoCP.js";import{aH as $,aB as q}from"./SchoolIcon-BCTNLzS8.js";import"./PlayButton-tDDVXCNd.js";import"./SearchRounded-CpGVmpS1.js";import"./Unlock-DvKQY-eR.js";import{P as D}from"./Popover-DkmLV67c.js";import"./index-yBjzXJbu.js";import"./Theme-C_GbAspN.js";import"./createTheme-8DWx8oiM.js";import"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import"./DefaultPropsProvider-Bumr00fv.js";import"./emotion-react.browser.esm-D9ztm9Ef.js";import"./useTheme-JzeSqcNx.js";import"./index-wK_Vy0z3.js";import"./useId-b15GGdoE.js";import"./useEnhancedEffect-DwozEE2v.js";import"./GlobalStyles-Br73Fs44.js";import"./createSvgIcon-vJPLBLCv.js";import"./createSvgIcon-6TTNghIK.js";import"./DefaultPropsProvider-D67Nt_Kr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DU6g1DOS.js";import"./resolveComponentProps-OuSpL2-v.js";import"./isMuiElement-CmoBwBYB.js";import"./useTimeout-CW-DWDBm.js";import"./useControlled-DzIyCmSp.js";import"./useIsFocusVisible-BelUa8Kr.js";import"./Grow-cFBBroYj.js";import"./index-OYHOLIWU.js";import"./index-B6ujFmsw.js";import"./useTheme-Bzwj_SMN.js";import"./utils-CorHJCvM.js";import"./TransitionGroupContext-D8ooFCJs.js";import"./setPrototypeOf-DgZC2w_0.js";import"./useSlotProps-DhFxGq5w.js";import"./Paper-Cp2Qdm1l.js";const E=s.div`
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

  ${({open:e})=>e&&"background: #edeef2;"||""}
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
  width: ${({width:e})=>`${e}px;`};
  height: ${({height:e})=>`${e}px;`};
  box-shadow: ${({shadow:e})=>e?"0px 10px 10px rgba(0,0,0,0.2);":"none"};
`,f=({imgSource:e,shadow:n,width:a,height:r})=>o.jsx(z,{shadow:n,width:a,height:r,children:o.jsx("img",{src:e,alt:e})});f.__docgenInfo={description:"",methods:[],displayName:"ProfilePicture",props:{imgSource:{required:!1,tsType:{name:"string"},description:""},width:{required:!0,tsType:{name:"number"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},height:{required:!0,tsType:{name:"number"},description:""}}};const h=({user:e,logout:n,navigate:a})=>{const{t:r}=C(),[d,l]=T.useState(null),v=j=>{l(j.currentTarget)},p=()=>{l(null)},b=()=>{p(),a(`/user-profile/${e.id}`)},y=()=>{p(),n()},t=!!d,c=t?"simple-popover":void 0;return o.jsxs("div",{children:[o.jsxs(E,{role:"button",open:t,"aria-describedby":c,onClick:v,children:[o.jsx(f,{imgSource:e.avatarThumbnail||e.avatar||"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg",width:25,height:25}),o.jsx(_,{children:`${e.firstName} ${e.lastName}`}),o.jsx(k,{style:{color:"#02020f",transition:"transform 0.3s",transform:t?"rotate(180deg)":"rotate(0deg)"}})]}),o.jsx(D,{id:c,open:t,anchorEl:d,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},slotProps:{paper:{style:{borderRadius:8}}},children:o.jsxs(N,{children:[o.jsxs("div",{onClick:b,children:[o.jsx("div",{children:o.jsx($,{})}),o.jsx("span",{children:`${r("general.my")} ${r("general.profile")}`})]}),o.jsxs("div",{onClick:y,children:[o.jsx("div",{children:o.jsx(q,{})}),o.jsx("span",{children:r("actions.log_out")})]})]})})]})};h.__docgenInfo={description:"",methods:[],displayName:"ProfileDropdown",props:{user:{required:!0,tsType:{name:"IUser"},description:""},logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},navigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:""}}};const x={email:"JohnDoe@suada.com",id:"1",firstName:"John",lastName:"Doe",avatarThumbnail:"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg"},Po={title:"Components/ProfileDropdown",component:h,tags:["autodocs"],decorators:[e=>o.jsxs(w,{children:[o.jsx(P,{}),o.jsx(e,{})]})],parameters:{layout:"centered"},argTypes:{user:{control:"object"},logout:{action:"logout"}},args:{user:x,logout:()=>console.log("Logged out")}},i={args:{user:x,logout:()=>console.log("Logged out")}};var m,u,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    user: mockUser,
    logout: () => console.log('Logged out')
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const To=["Default"];export{i as Default,To as __namedExportsOrder,Po as default};
