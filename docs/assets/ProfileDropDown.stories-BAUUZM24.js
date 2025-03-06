import{j as o}from"./jsx-runtime-BMn0QxmW.js";import{C as y}from"./ThemeProvider-ermrFBfr.js";import{G as w}from"./global.styles-CoN48fG-.js";import{r as P}from"./index-P7RG-sTI.js";import{d as n}from"./styled-components.browser.esm-C8J4ZJ9w.js";import{E as k}from"./ExpandMore-BvylEVJf.js";import{u as C}from"./TranslationProvider-De5tz1Zh.js";import{P as T}from"./ProfilePicture-CVR9M9L5.js";import{aD as D,aA as E}from"./SchoolIcon-BAVzMfD1.js";import"./PlayButton-DqZmVyxd.js";import"./SearchRounded-CZbvd4YK.js";import"./Unlock-BEu2NmH4.js";import{P as $}from"./Popover-CAJEir_G.js";import"./index-ChsGqxH_.js";import"./Theme-7RLsAxfg.js";import"./createTheme-DoGQ71L4.js";import"./DefaultPropsProvider-C-0Iltjy.js";import"./index-DNzaLvD1.js";import"./useThemeWithoutDefault-BzTszGh4.js";import"./emotion-element-f0de968e.browser.esm-D4p4t6Fx.js";import"./useEnhancedEffect-BdJxjJVZ.js";import"./GlobalStyles-BmpI7maY.js";import"./emotion-react.browser.esm-pFE7M3pz.js";import"./interopRequireDefault-CdiRfGvq.js";import"./createSvgIcon-BbSdJoBL.js";import"./createSvgIcon-B0lg9Vxo.js";import"./DefaultPropsProvider-CSM5SLky.js";import"./extends-CF3RwP-h.js";import"./mergeSlotProps-YP2eSxzh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-CknlublU.js";import"./resolveComponentProps-IGToM-EB.js";import"./useId-UV2MHOX5.js";import"./useControlled-ZN7nkyof.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-DryEmI1_.js";import"./setPrototypeOf-B4fUID9J.js";import"./Grow-PnXGcmFC.js";import"./index-qH2c_dVb.js";import"./index-DdXvKv-Q.js";import"./useTheme-CEHeA6GC.js";import"./useTheme-D9KO4m93.js";import"./utils-BL9f0C3K.js";import"./Paper-CmIQIAUw.js";const z=n.div`
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
`,L=n.h4`
  font-size: 14px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #414141;
`,N=n.div`
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
`,u=({user:r,logout:f,navigate:h})=>{const{t:i}=C(),[a,p]=P.useState(null),x=b=>{p(b.currentTarget)},s=()=>{p(null)},v=()=>{s(),h(`/user-profile/${r.id}`)},j=()=>{s(),f()},e=!!a,m=e?"simple-popover":void 0;return o.jsxs("div",{children:[o.jsxs(z,{role:"button",open:e,"aria-describedby":m,onClick:x,children:[o.jsx(T,{imgSource:r.avatarThumbnail||r.avatar||"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg",width:25,height:25}),o.jsx(L,{children:`${r.firstName} ${r.lastName}`}),o.jsx(k,{style:{color:"#02020f",transition:"transform 0.3s",transform:e?"rotate(180deg)":"rotate(0deg)"}})]}),o.jsx($,{id:m,open:e,anchorEl:a,onClose:s,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},slotProps:{paper:{style:{borderRadius:8}}},children:o.jsxs(N,{children:[o.jsxs("div",{onClick:v,children:[o.jsx("div",{children:o.jsx(D,{})}),o.jsx("span",{children:`${i("general.my")} ${i("general.profile")}`})]}),o.jsxs("div",{onClick:j,children:[o.jsx("div",{children:o.jsx(E,{})}),o.jsx("span",{children:i("actions.log_out")})]})]})})]})};u.__docgenInfo={description:"",methods:[],displayName:"ProfileDropdown",props:{user:{required:!0,tsType:{name:"IUser"},description:""},logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},navigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:""}}};const g={email:"JohnDoe@suada.com",id:"1",firstName:"John",lastName:"Doe",avatarThumbnail:"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg"},To={title:"Components/ProfileDropdown",component:u,tags:["autodocs"],decorators:[r=>o.jsxs(y,{children:[o.jsx(w,{}),o.jsx(r,{})]})],parameters:{layout:"centered"},argTypes:{user:{control:"object"},logout:{action:"logout"}},args:{user:g,logout:()=>console.log("Logged out")}},t={args:{user:g,logout:()=>console.log("Logged out")}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    user: mockUser,
    logout: () => console.log('Logged out')
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Do=["Default"];export{t as Default,Do as __namedExportsOrder,To as default};
