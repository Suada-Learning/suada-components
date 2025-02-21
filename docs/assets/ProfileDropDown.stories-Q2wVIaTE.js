import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{C as w}from"./ThemeProvider-OMQ2BVwH.js";import{G as P}from"./global.styles-ky-6VlY_.js";import{r as T}from"./index-CAe6R3bO.js";import{d as s}from"./styled-components.browser.esm-DT3FsLGj.js";import{E as k}from"./ExpandMore-DSCLNfQN.js";import{u as C}from"./TranslationProvider-CmuXOqXD.js";import{_ as $,Y as _}from"./WhiteAiAssistent-CHGddrWY.js";import"./PlayButton-WkCxJEgw.js";import"./SearchRounded-B4wRncnu.js";import"./Unlock-BWT_y5W-.js";import{P as q}from"./Popover-BbQG8zDd.js";import"./index-ChsGqxH_.js";import"./Theme-C1aqVGh7.js";import"./createTheme-B9H9ZwjD.js";import"./DefaultPropsProvider-CE9yCcll.js";import"./emotion-react.browser.esm-pxioRHjz.js";import"./index-Cr4NX4s1.js";import"./useEnhancedEffect-DhebxzmZ.js";import"./createSvgIcon-DrAgNEdu.js";import"./DefaultPropsProvider-BjW0N_ST.js";import"./extends-CF3RwP-h.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-BOxLXIxU.js";import"./resolveComponentProps-SIU9M0H_.js";import"./setPrototypeOf-C3V6guyq.js";import"./index-CqMW6mv0.js";import"./index-C7hTFOIV.js";import"./Grow-D8l1LaiA.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-CynSGn_i.js";const D=s.div`
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
`,E=s.h4`
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
  width: ${({width:o})=>`${o}px;`};
  height: ${({height:o})=>`${o}px;`};
  box-shadow: ${({shadow:o})=>o?"0px 10px 10px rgba(0,0,0,0.2);":"none"};
`,f=({imgSource:o,shadow:n,width:a,height:r})=>e.jsx(z,{shadow:n,width:a,height:r,children:e.jsx("img",{src:o,alt:o})});f.__docgenInfo={description:"",methods:[],displayName:"ProfilePicture",props:{imgSource:{required:!1,tsType:{name:"string"},description:""},width:{required:!0,tsType:{name:"number"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},height:{required:!0,tsType:{name:"number"},description:""}}};const h=({user:o,logout:n,navigate:a})=>{const{t:r}=C(),[d,l]=T.useState(null),v=j=>{l(j.currentTarget)},p=()=>{l(null)},b=()=>{p(),a(`/user-profile/${o.id}`)},y=()=>{p(),n()},t=!!d,c=t?"simple-popover":void 0;return e.jsxs("div",{children:[e.jsxs(D,{role:"button",open:t,"aria-describedby":c,onClick:v,children:[e.jsx(f,{imgSource:o.avatarThumbnail||o.avatar||"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg",width:25,height:25}),e.jsx(E,{children:`${o.firstName} ${o.lastName}`}),e.jsx(k,{style:{color:"#02020f",transition:"transform 0.3s",transform:t?"rotate(180deg)":"rotate(0deg)"}})]}),e.jsx(q,{id:c,open:t,anchorEl:d,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},slotProps:{paper:{style:{borderRadius:8}}},children:e.jsxs(N,{children:[e.jsxs("div",{onClick:b,children:[e.jsx("div",{children:e.jsx($,{})}),e.jsx("span",{children:`${r("general.my")} ${r("general.profile")}`})]}),e.jsxs("div",{onClick:y,children:[e.jsx("div",{children:e.jsx(_,{})}),e.jsx("span",{children:r("actions.log_out")})]})]})})]})};h.__docgenInfo={description:"",methods:[],displayName:"ProfileDropdown",props:{user:{required:!0,tsType:{name:"IUser"},description:""},logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},navigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:""}}};const x={email:"JohnDoe@suada.com",id:"1",firstName:"John",lastName:"Doe",avatarThumbnail:"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg"},ce={title:"Components/ProfileDropdown",component:h,tags:["autodocs"],decorators:[o=>e.jsxs(w,{children:[e.jsx(P,{}),e.jsx(o,{})]})],parameters:{layout:"centered"},argTypes:{user:{control:"object"},logout:{action:"logout"}},args:{user:x,logout:()=>console.log("Logged out")}},i={args:{user:x,logout:()=>console.log("Logged out")}};var m,u,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    user: mockUser,
    logout: () => console.log('Logged out')
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const me=["Default"];export{i as Default,me as __namedExportsOrder,ce as default};
