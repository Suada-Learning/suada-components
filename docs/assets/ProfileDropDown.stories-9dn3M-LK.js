import{j as o}from"./jsx-runtime-Bkl-fPu3.js";import{C as w}from"./ThemeProvider-D0mCMvfb.js";import{G as P}from"./global.styles-M091n8II.js";import{r as T}from"./index-LpBWhHPZ.js";import{g as s}from"./styled-components.browser.esm-vTeNnIge.js";import{E as k}from"./ExpandMore-5EUaJnLW.js";import{u as C}from"./TranslationProvider-BFNHPoCP.js";import{aH as $,aB as q}from"./SchoolIcon-BCTNLzS8.js";import"./PlayButton-tDDVXCNd.js";import"./SearchRounded-CpGVmpS1.js";import"./Unlock-DvKQY-eR.js";import{P as D}from"./Popover-CkqaQlXT.js";import"./index-yBjzXJbu.js";import"./Theme-bYHw1exk.js";import"./createTheme-BJjsgvJc.js";import"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import"./DefaultPropsProvider-Bumr00fv.js";import"./emotion-react.browser.esm-D9ztm9Ef.js";import"./useTheme-B6KSNk_k.js";import"./index-wK_Vy0z3.js";import"./useEnhancedEffect-DwozEE2v.js";import"./GlobalStyles-DoDlTzDT.js";import"./nested-DJSeckUa.js";import"./createSvgIcon-BbYfysmO.js";import"./createSvgIcon-CHN_NkDh.js";import"./DefaultPropsProvider-C9DmSv4N.js";import"./capitalize-C0twwv1t.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DXMN4qyR.js";import"./resolveComponentProps-CgC_3vN1.js";import"./isMuiElement-CmoBwBYB.js";import"./useTimeout-uj8HMJ6V.js";import"./useId-b15GGdoE.js";import"./useControlled-DzIyCmSp.js";import"./useIsFocusVisible-CkGi1wcy.js";import"./Grow-D6hKvwp6.js";import"./index-OYHOLIWU.js";import"./index-B6ujFmsw.js";import"./useTheme-oTZv7BHd.js";import"./utils-CorHJCvM.js";import"./TransitionGroupContext-D8ooFCJs.js";import"./setPrototypeOf-DgZC2w_0.js";import"./useSlotProps-BYWN3rPX.js";import"./Paper-Cn_3E_mi.js";const E=s.div`
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
`,f=({imgSource:r,shadow:n,width:a,height:e})=>o.jsx(z,{shadow:n,width:a,height:e,children:o.jsx("img",{src:r,alt:r})});f.__docgenInfo={description:"",methods:[],displayName:"ProfilePicture",props:{imgSource:{required:!1,tsType:{name:"string"},description:""},width:{required:!0,tsType:{name:"number"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},height:{required:!0,tsType:{name:"number"},description:""}}};const h=({user:r,logout:n,navigate:a})=>{const{t:e}=C(),[d,l]=T.useState(null),v=j=>{l(j.currentTarget)},p=()=>{l(null)},b=()=>{p(),a(`/user-profile/${r.id}`)},y=()=>{p(),n()},t=!!d,m=t?"simple-popover":void 0;return o.jsxs("div",{children:[o.jsxs(E,{role:"button",open:t,"aria-describedby":m,onClick:v,children:[o.jsx(f,{imgSource:r.avatarThumbnail||r.avatar||"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg",width:25,height:25}),o.jsx(_,{children:`${r.firstName} ${r.lastName}`}),o.jsx(k,{style:{color:"#02020f",transition:"transform 0.3s",transform:t?"rotate(180deg)":"rotate(0deg)"}})]}),o.jsx(D,{id:m,open:t,anchorEl:d,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},slotProps:{paper:{style:{borderRadius:8}}},children:o.jsxs(N,{children:[o.jsxs("div",{onClick:b,children:[o.jsx("div",{children:o.jsx($,{})}),o.jsx("span",{children:`${e("general.my")} ${e("general.profile")}`})]}),o.jsxs("div",{onClick:y,children:[o.jsx("div",{children:o.jsx(q,{})}),o.jsx("span",{children:e("actions.log_out")})]})]})})]})};h.__docgenInfo={description:"",methods:[],displayName:"ProfileDropdown",props:{user:{required:!0,tsType:{name:"IUser"},description:""},logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},navigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:""}}};const x={email:"JohnDoe@suada.com",id:"1",firstName:"John",lastName:"Doe",avatarThumbnail:"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg"},ko={title:"Components/ProfileDropdown",component:h,tags:["autodocs"],decorators:[r=>o.jsxs(w,{children:[o.jsx(P,{}),o.jsx(r,{})]})],parameters:{layout:"centered"},argTypes:{user:{control:"object"},logout:{action:"logout"}},args:{user:x,logout:()=>console.log("Logged out")}},i={args:{user:x,logout:()=>console.log("Logged out")}};var c,u,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    user: mockUser,
    logout: () => console.log('Logged out')
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const Co=["Default"];export{i as Default,Co as __namedExportsOrder,ko as default};
