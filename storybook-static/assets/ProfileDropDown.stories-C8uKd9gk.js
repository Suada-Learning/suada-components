import{j as e}from"./jsx-runtime-Be5KepTg.js";import{C as w}from"./ThemeProvider-D_IVFJ-Y.js";import{G as P}from"./global.styles-BTXDQl3G.js";import{r as T}from"./index-BsICj7Do.js";import{d as i}from"./createTheme-B4pomYAW.js";import{E as k}from"./ExpandMore-C1aYoMnF.js";import{u as C}from"./TranslationProvider-CUEHlEwt.js";import{_ as $,Y as _}from"./WhiteAiAssistent-B4Cw982k.js";import"./DownloadIcon-CXLA5aQr.js";import"./SearchRounded-D1EKSe9L.js";import"./Unlock-Xl_lJOgC.js";import{P as q}from"./Popover-IETx_Mw0.js";import"./index-Cu3ntQMU.js";import"./Theme-D4T0JIIw.js";import"./DefaultPropsProvider-BB0hjY0t.js";import"./index-Dpg-LJl0.js";import"./createSvgIcon-KzkT8T21.js";import"./useSlot-MqmgmX97.js";import"./index-cfNomcto.js";import"./index-DYvH7Hsd.js";import"./Grow-DTwrS1bI.js";import"./Paper-BScAZJYj.js";const D=i.div`
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

  ${({open:o})=>o&&"background: #edeef2;"||""}
`,E=i.h4`
  font-size: 14px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #414141;
`,N=i.div`
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
`,z=i.figure`
  overflow: hidden;
  border-radius: 50%;
  width: ${({width:o})=>`${o}px;`};
  height: ${({height:o})=>`${o}px;`};
  box-shadow: ${({shadow:o})=>o?"0px 10px 10px rgba(0,0,0,0.2);":"none"};
`,f=({imgSource:o,shadow:n,width:a,height:r})=>e.jsx(z,{shadow:n,width:a,height:r,children:e.jsx("img",{src:o,alt:o})});f.__docgenInfo={description:"",methods:[],displayName:"ProfilePicture",props:{imgSource:{required:!1,tsType:{name:"string"},description:""},width:{required:!0,tsType:{name:"number"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},height:{required:!0,tsType:{name:"number"},description:""}}};const h=({user:o,logout:n,navigate:a})=>{const{t:r}=C(),[p,l]=T.useState(null),v=j=>{l(j.currentTarget)},d=()=>{l(null)},b=()=>{d(),a(`/user-profile/${o.id}`)},y=()=>{d(),n()},t=!!p,c=t?"simple-popover":void 0;return e.jsxs("div",{children:[e.jsxs(D,{role:"button",open:t,"aria-describedby":c,onClick:v,children:[e.jsx(f,{imgSource:o.avatarThumbnail||o.avatar||"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg",width:25,height:25}),e.jsx(E,{children:`${o.firstName} ${o.lastName}`}),e.jsx(k,{style:{color:"#02020f",transition:"transform 0.3s",transform:t?"rotate(180deg)":"rotate(0deg)"}})]}),e.jsx(q,{id:c,open:t,anchorEl:p,onClose:d,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},slotProps:{paper:{style:{borderRadius:8}}},children:e.jsxs(N,{children:[e.jsxs("div",{onClick:b,children:[e.jsx("div",{children:e.jsx($,{})}),e.jsx("span",{children:`${r("general.my")} ${r("general.profile")}`})]}),e.jsxs("div",{onClick:y,children:[e.jsx("div",{children:e.jsx(_,{})}),e.jsx("span",{children:r("actions.log_out")})]})]})})]})};h.__docgenInfo={description:"",methods:[],displayName:"ProfileDropdown",props:{user:{required:!0,tsType:{name:"IUser"},description:""},logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},navigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:""}}};const x={email:"JohnDoe@suada.com",id:"1",firstName:"John",lastName:"Doe",avatarThumbnail:"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg"},re={title:"Components/ProfileDropdown",component:h,tags:["autodocs"],decorators:[o=>e.jsxs(w,{children:[e.jsx(P,{}),e.jsx(o,{})]})],parameters:{layout:"centered"},argTypes:{user:{control:"object"},logout:{action:"logout"}},args:{user:x,logout:()=>console.log("Logged out")}},s={args:{user:x,logout:()=>console.log("Logged out")}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    user: mockUser,
    logout: () => console.log('Logged out')
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const te=["Default"];export{s as Default,te as __namedExportsOrder,re as default};
