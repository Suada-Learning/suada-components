import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{C as w}from"./ThemeProvider-DCa0myCF.js";import{G as P}from"./global.styles-B2KOwP-z.js";import{r as T}from"./index-Dmy2JGbm.js";import{d as s}from"./styled-components.browser.esm-pdgFlRIf.js";import{E as k}from"./ExpandMore-BnJ4slFe.js";import{u as C}from"./TranslationProvider-FY5howXM.js";import{aD as $,aA as D}from"./SchoolIcon-DbRWRIQ4.js";import"./PlayButton-WkCxJEgw.js";import"./SearchRounded-B4wRncnu.js";import"./Unlock-BWT_y5W-.js";import{P as q}from"./Popover-BxhzktAW.js";import"./index-ChsGqxH_.js";import"./Theme-CfSMJjkw.js";import"./createTheme-CeVqtfuz.js";import"./DefaultPropsProvider-BK5jcq1d.js";import"./index-CSFoGZ6e.js";import"./useThemeWithoutDefault-MawsT_Y8.js";import"./emotion-element-f0de968e.browser.esm-CIG5UYoQ.js";import"./Middleware-Iy5ki4vm.js";import"./useEnhancedEffect-CGhZVi17.js";import"./GlobalStyles-BetpE-We.js";import"./emotion-react.browser.esm-ClIzM0To.js";import"./createSvgIcon-M6KNGs69.js";import"./DefaultPropsProvider-C_GoaD6p.js";import"./capitalize-CZCi9i4k.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-CpCLTyuj.js";import"./setPrototypeOf-C3V6guyq.js";import"./index-CIZcjP-h.js";import"./index-C7hTFOIV.js";import"./resolveComponentProps-CQ90vU45.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bev_ZNGP.js";import"./useTheme-C7Gniin0.js";import"./useTheme-Iuwdh8No.js";import"./mergeSlotProps-BwmBCtFN.js";import"./Paper-b9sZ73N9.js";const E=s.div`
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
`,f=({imgSource:e,shadow:n,width:a,height:r})=>o.jsx(z,{shadow:n,width:a,height:r,children:o.jsx("img",{src:e,alt:e})});f.__docgenInfo={description:"",methods:[],displayName:"ProfilePicture",props:{imgSource:{required:!1,tsType:{name:"string"},description:""},width:{required:!0,tsType:{name:"number"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},height:{required:!0,tsType:{name:"number"},description:""}}};const h=({user:e,logout:n,navigate:a})=>{const{t:r}=C(),[d,l]=T.useState(null),v=j=>{l(j.currentTarget)},p=()=>{l(null)},b=()=>{p(),a(`/user-profile/${e.id}`)},y=()=>{p(),n()},t=!!d,c=t?"simple-popover":void 0;return o.jsxs("div",{children:[o.jsxs(E,{role:"button",open:t,"aria-describedby":c,onClick:v,children:[o.jsx(f,{imgSource:e.avatarThumbnail||e.avatar||"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg",width:25,height:25}),o.jsx(_,{children:`${e.firstName} ${e.lastName}`}),o.jsx(k,{style:{color:"#02020f",transition:"transform 0.3s",transform:t?"rotate(180deg)":"rotate(0deg)"}})]}),o.jsx(q,{id:c,open:t,anchorEl:d,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},slotProps:{paper:{style:{borderRadius:8}}},children:o.jsxs(N,{children:[o.jsxs("div",{onClick:b,children:[o.jsx("div",{children:o.jsx($,{})}),o.jsx("span",{children:`${r("general.my")} ${r("general.profile")}`})]}),o.jsxs("div",{onClick:y,children:[o.jsx("div",{children:o.jsx(D,{})}),o.jsx("span",{children:r("actions.log_out")})]})]})})]})};h.__docgenInfo={description:"",methods:[],displayName:"ProfileDropdown",props:{user:{required:!0,tsType:{name:"IUser"},description:""},logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},navigate:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:""}}};const x={email:"JohnDoe@suada.com",id:"1",firstName:"John",lastName:"Doe",avatarThumbnail:"https://ib-assets-public.s3.eu-west-2.amazonaws.com/profilePicture.svg"},bo={title:"Components/ProfileDropdown",component:h,tags:["autodocs"],decorators:[e=>o.jsxs(w,{children:[o.jsx(P,{}),o.jsx(e,{})]})],parameters:{layout:"centered"},argTypes:{user:{control:"object"},logout:{action:"logout"}},args:{user:x,logout:()=>console.log("Logged out")}},i={args:{user:x,logout:()=>console.log("Logged out")}};var m,u,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    user: mockUser,
    logout: () => console.log('Logged out')
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const yo=["Default"];export{i as Default,yo as __namedExportsOrder,bo as default};
