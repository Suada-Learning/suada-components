import{j as n}from"./jsx-runtime-1u1Nfn-y.js";import{r as V,R as A}from"./index-DmTNtw1v.js";import{a as m,d as o}from"./Theme-DB1c5mYq.js";import{g as B,a as H,s as S,m as _,c as P,u as N,b as $,i as L,d as Z,P as D}from"./ThemeProvider-QavAmAtN.js";function W(e){return B("MuiTypography",e)}H("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const O={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},U=L(),J=e=>{const{align:i,gutterBottom:t,noWrap:r,paragraph:s,variant:a,classes:l}=e,p={root:["root",a,e.align!=="inherit"&&`align${m(i)}`,t&&"gutterBottom",r&&"noWrap",s&&"paragraph"]};return Z(p,W,l)},F=S("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:t}=e;return[i.root,t.variant&&i[t.variant],t.align!=="inherit"&&i[`align${m(t.align)}`],t.noWrap&&i.noWrap,t.gutterBottom&&i.gutterBottom,t.paragraph&&i.paragraph]}})(_(({theme:e})=>{var i;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter(([t,r])=>t!=="inherit"&&r&&typeof r=="object").map(([t,r])=>({props:{variant:t},style:r})),...Object.entries(e.palette).filter(P()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(((i=e.palette)==null?void 0:i.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${m(t)}`},style:{color:(e.vars||e).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},g=V.forwardRef(function(i,t){const{color:r,...s}=N({props:i,name:"MuiTypography"}),a=!O[r],l=U({...s,...a&&{color:r}}),{align:p="inherit",className:f,component:h,gutterBottom:z=!1,noWrap:q=!1,paragraph:u=!1,variant:c="body1",variantMapping:x=b,...y}=l,v={...l,align:p,color:r,className:f,component:h,gutterBottom:z,noWrap:q,paragraph:u,variant:c,variantMapping:x},R=h||(u?"p":x[c]||b[c])||"span",I=J(v);return n.jsx(F,{as:R,ref:t,className:$(I.root,f),...y,ownerState:v,style:{...p!=="inherit"&&{"--Typography-textAlign":p},...y.style}})});o.span``;const ae=o.header`
  display: flex;
  justify-content: space-between;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,se=o.h3`
  font-size: 18px;
  font-weight: 500;

  transition: color 0.3s ease;
`,X=o.span`
  color: #ea382a;
`,K=o(g)`
  color: #7a7a7a;
  opacity: 0.7;
`,d=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px;
  transition: 0.3s ease;
  gap: 6px;
  border-radius: 5px;
  &:hover {
    /* background: ${({hoverBackground:e})=>e||"rgba(0, 0, 0, 0.1)"}; */
    ${({$hoverColor:e})=>e&&`svg path {
          fill: ${e};
           }`}
  }
  svg {
    font-size: 1rem;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;o.div`
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;
  width: 100%;
  box-sizing: border-box;
  padding-right: 20px;
  .wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;o.div`
  margin-top: 30px;

  ${({$isGrid:e})=>e?`
      .card {
        display: grid;
        grid-template-columns: repeat(4, 1fr);


        @media (max-width: 1450px) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    `:`
      .card {
          grid-template-columns:none
      }
    `}
`;const le=o.div`
  width: 100%;
  position: absolute;
  z-index: 99;
  box-sizing: border-box;
  padding: 6px;
  ${({$switched:e})=>e?`
    top: 0px;
    left: 0px;
    grid-template-columns: 1fr 35px;
  `:`
    bottom: 0px;
    right: 0px;
    justify-content: end;
    grid-template-columns: 35px 35px;
  `}
  .action_block {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`,pe=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${({$canOpen:e})=>e?"pointer":"default"};
  height: 100%;
  border-radius: 12px !important;
  &:hover {
    .action_block {
      background: rgba(255, 255, 255, 0.59) !important;
    }
  }
`,de=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgb(0 0 0 / 23%);
`;o.div`
  position: relative;
  cursor: pointer;
  .icon_button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;const ce=o.div`
  color: #fff;
  height: 32px;
  padding: 4px 12px;
  text-transform: capitalize;
  border-radius: 4px;
  background: ${({$status:e})=>e?"#00905E":"#EA382A"};
  display: flex;
  align-items: center;
  justify-content: center;
`;o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    font-size: 13px;
  }
`;const me=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :first-child {
    font-size: 14px;
    margin-bottom: 5px;
  }
  div {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .tooltip-text {
      font-size: 12px;
      margin-top: 5px;
      text-align: center;
    }
  }
`,ge=o.div`
  display: flex;
  width: 100%;
  flex-direction: column !important;
  align-self: flex-end;
  gap: 10px;
  padding-bottom: 10px;
`,fe=o.div`
  display: flex;
  flex-direction: row !important;
  width: 100%;
`,he=o.span`
  display: flex;
  align-items: center;
  height: 14px;
  cursor: ${({disabled:e})=>e?"default":"pointer"};
  color: ${({disabled:e})=>e?"#ccc":"#68707a"};
  font-size: 14px;
  padding-bottom: 10px;
  width: 100%;
  justify-content: center;
  gap: 8px;
  padding: 12px 4px;
  svg path {
    fill: ${({disabled:e})=>e?"#ccc":"#68707a"};
    width: 16px;
    height: 16px;
  }
  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: ${({disabled:e,color:i="#68707a"})=>e?"#ccc":i};
    svg path {
      fill: ${({disabled:e,color:i="#68707a"})=>e?"#ccc":i};
    }
  }
`;o.span`
  color: #20a8c6;
  font-size: 14px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #edf8fa;
`;const ue=o.div`
  text-transform: capitalize;
`,xe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`,ye=o.span`
  color: #20a8c6;
  font-size: 14px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #edf8fa;
`,ve=o.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  flex-direction: row !important;
  padding-left: 16px;

  // when card is checked
  span {
    background: ${e=>e.checked?"none":"#edf8fa"};
    color: ${e=>e.checked?"#333333":"#20a8c6"};
  }
  > div {
    font-size: 12px;
    position: relative;
    padding-left: 12px;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);
    }

    :not(:last-child) {
      margin-right: 10px;
    }
  }
`,be=o.div`
  width: 100%;
`;o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 10px;
  transition: 0.3s ease;
  border-radius: 5px;
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  svg {
    font-size: 1rem;
    margin-right: 6px;
    width: 20px;
    height: 20px;
  }
  svg path {
    width: 20px;
    height: 20px;
    fill: #717882;
  }
  /* .MuiTypography-body1 {
    font-size: 0.875rem;
  } */
`;o.div`
  box-sizing: border-box;
  padding: 0 20px 0 0;
  text-transform: capitalize;
`;const we=o.section`
  position: relative;
  z-index: 100;
  font-size: 16px;
  color: #333;
  padding: 16px;
`,Ve=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;o.div`
  width: 100%;
  height: fit-content;
  flex-shrink: 0;
  border-radius: 4px;
  background: #fff;
  margin-top: 20px;
  padding: 16px;

  th:last-child {
    width: 10px;
  }
`;o.div`
  justify-content: flex-end;
  display: flex;
  margin-right: 40px;
  margin-left: 16px;
  margin-bottom: 16px;
  margin-top: 20px;
`;const Se=o.figure`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    transition: transform 0.3s ease;
  }
`,Ce=o.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;

  &:hover {
    img {
      transform: scale(1.2);
    }

    h3 {
      color: #06c68f;
    }
  }

  ${({$isFromUser:e})=>e&&`
  figure {
    position: relative;
    &:after {
      content: 'View Analytics';
      position: absolute;
      top: 0;
      opacity: 0;
      color: #06c68f;
      left: 0;
      font-size: 24px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.9);
      width: 100%;
      height: 100%;
      transition: opacity 0.3s ease;
      z-index: 10;
    }
  }

  &:hover {
    figure {
      &:after {
        opacity: 1;
      }
    }
  }
  `||""}
`;S("div")(({theme:e})=>({"& .CourseLayout-paper":{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}));const C=({className:e,onClick:i,...t})=>n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e,onClick:i,...t,children:[n.jsx("path",{d:"M22.5 19.5H1.5V21H22.5V19.5Z",fill:"#020210"}),n.jsx("path",{d:"M19.05 6.75C19.65 6.15 19.65 5.25 19.05 4.65L16.35 1.95C15.75 1.35 14.85 1.35 14.25 1.95L3 13.2V18H7.8L19.05 6.75ZM15.3 3L18 5.7L15.75 7.95L13.05 5.25L15.3 3ZM4.5 16.5V13.8L12 6.3L14.7 9L7.2 16.5H4.5Z",fill:"#020210"})]});C.__docgenInfo={description:"",methods:[],displayName:"EditSVG",props:{className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<SVGSVGElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},name:"e"}],return:{name:"void"}}},description:""},red:{required:!1,tsType:{name:"boolean"},description:""},black:{required:!1,tsType:{name:"boolean"},description:""},white:{required:!1,tsType:{name:"boolean"},description:""}},composes:["SVGProps"]};const j=({className:e,onClick:i,...t})=>n.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0,0,256,256",children:n.jsx("g",{"fill-opacity":"0.52941",fill:"#020210","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none",className:e,onClick:i,...t,children:n.jsx("g",{transform:"translate(-8,-0.00053) scale(10.66667,10.66667)",children:n.jsx("path",{d:"M5.25,21.0001c-0.19891,0 -0.38968,-0.0791 -0.53033,-0.2197c-0.14065,-0.1407 -0.21967,-0.3314 -0.21967,-0.5303v-16.50004c-0.00001,-0.13034 0.03395,-0.25843 0.09852,-0.37164c0.06458,-0.11322 0.15754,-0.20765 0.26973,-0.27399c0.11219,-0.06635 0.23973,-0.10231 0.37005,-0.10434c0.13032,-0.00203 0.25892,0.02993 0.37313,0.09274l14.99997,8.24997c0.1177,0.0647 0.2159,0.1599 0.2842,0.2755c0.0684,0.1156 0.1044,0.2474 0.1044,0.3817c0,0.1343 -0.036,0.2662 -0.1044,0.3818c-0.0683,0.1156 -0.1665,0.2107 -0.2842,0.2754l-14.99997,8.25c-0.11074,0.0609 -0.23506,0.0928 -0.36143,0.0929zM6,5.01823v13.96347l12.6936,-6.9816z"})})})});j.__docgenInfo={description:"",methods:[],displayName:"PlayButtonSVG",props:{className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<SVGSVGElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},name:"e"}],return:{name:"void"}}},description:""},red:{required:!1,tsType:{name:"boolean"},description:""},black:{required:!1,tsType:{name:"boolean"},description:""},white:{required:!1,tsType:{name:"boolean"},description:""}},composes:["SVGProps"]};const Q=o.div``,Y=o.div`
  padding: 5px;
`,ee=o.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: transparent !important;
  }
`;o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px;
  transition: 0.3s ease;
  gap: 6px;
  border-radius: 5px;
  &:hover {
    /* background: ${({hoverBackground:e})=>e||"rgba(0, 0, 0, 0.1)"}; */
    ${({$hoverColor:e})=>e&&`svg path {
          fill: ${e};
           }`}
  }
  svg {
    font-size: 1rem;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;const G=({className:e,onClick:i,...t})=>n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e,onClick:i,...t,children:[n.jsx("path",{d:"M12 7.5C12.8284 7.5 13.5 6.82843 13.5 6C13.5 5.17157 12.8284 4.5 12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5Z",fill:"#020210"}),n.jsx("path",{d:"M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z",fill:"#020210"}),n.jsx("path",{d:"M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z",fill:"#020210"})]});G.__docgenInfo={description:"",methods:[],displayName:"MoreVertRoundedIcon",props:{className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<SVGSVGElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},name:"e"}],return:{name:"void"}}},description:""},red:{required:!1,tsType:{name:"boolean"},description:""},black:{required:!1,tsType:{name:"boolean"},description:""},white:{required:!1,tsType:{name:"boolean"},description:""}},composes:["SVGProps"]};const te=e=>{var s;const[i,t]=V.useState(null),r=a=>{t(a.currentTarget)};return n.jsx("div",{children:e.actionConfig&&e.actionConfig.length>0&&n.jsxs(Q,{onClick:a=>a.stopPropagation(),children:[n.jsx("div",{onClick:r,children:e.button??n.jsx(ee,{className:"more",children:e.icon??n.jsx(G,{})})}),n.jsx(D,{open:!!i,anchorEl:i,onClose:()=>{t(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:n.jsx(Y,{children:(s=e==null?void 0:e.actionConfig)==null?void 0:s.map((a,l)=>n.jsx("div",{onClick:()=>t(null),children:a.render(e.row)},l))})})]})})};te.__docgenInfo={description:"",methods:[],displayName:"GridActionMenu",props:{actionConfig:{required:!1,tsType:{name:"Array",elements:[{name:"IAction"}],raw:"IAction[]"},description:""},row:{required:!1,tsType:{name:"any"},description:""},icon:{required:!1,tsType:{name:"JSX.Element"},description:""},button:{required:!1,tsType:{name:"JSX.Element"},description:""}}};const k=({className:e,onClick:i,...t})=>n.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0,0,256,256",children:n.jsx("g",{"fill-opacity":"0.52941",fill:"#7a7a7a","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none",className:e,onClick:i,...t,children:n.jsx("g",{transform:"translate(-8,-0.00053) scale(10.66667,10.66667)",children:n.jsx("path",{d:"M5.25,21.0001c-0.19891,0 -0.38968,-0.0791 -0.53033,-0.2197c-0.14065,-0.1407 -0.21967,-0.3314 -0.21967,-0.5303v-16.50004c-0.00001,-0.13034 0.03395,-0.25843 0.09852,-0.37164c0.06458,-0.11322 0.15754,-0.20765 0.26973,-0.27399c0.11219,-0.06635 0.23973,-0.10231 0.37005,-0.10434c0.13032,-0.00203 0.25892,0.02993 0.37313,0.09274l14.99997,8.24997c0.1177,0.0647 0.2159,0.1599 0.2842,0.2755c0.0684,0.1156 0.1044,0.2474 0.1044,0.3817c0,0.1343 -0.036,0.2662 -0.1044,0.3818c-0.0683,0.1156 -0.1665,0.2107 -0.2842,0.2754l-14.99997,8.25c-0.11074,0.0609 -0.23506,0.0928 -0.36143,0.0929zM6,5.01823v13.96347l12.6936,-6.9816z"})})})});k.__docgenInfo={description:"",methods:[],displayName:"PlayGrayButtonSVG",props:{className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<SVGSVGElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},name:"e"}],return:{name:"void"}}},description:""},red:{required:!1,tsType:{name:"boolean"},description:""},black:{required:!1,tsType:{name:"boolean"},description:""},white:{required:!1,tsType:{name:"boolean"},description:""}},composes:["SVGProps"]};const T=({className:e,onClick:i,...t})=>n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e,onClick:i,...t,children:[n.jsx("path",{d:"M10.5 9H9V18H10.5V9Z",fill:"#EA382A"}),n.jsx("path",{d:"M15 9H13.5V18H15V9Z",fill:"#EA382A"}),n.jsx("path",{d:"M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6Z",fill:"#EA382A"}),n.jsx("path",{d:"M15 1.5H9V3H15V1.5Z",fill:"#EA382A"})]});T.__docgenInfo={description:"",methods:[],displayName:"DeleteSVG",props:{className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<SVGSVGElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},name:"e"}],return:{name:"void"}}},description:""},red:{required:!1,tsType:{name:"boolean"},description:""},black:{required:!1,tsType:{name:"boolean"},description:""},white:{required:!1,tsType:{name:"boolean"},description:""}},composes:["SVGProps"]};const E=({className:e,onClick:i,...t})=>n.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0,0,256,256",className:e,onClick:i,...t,children:n.jsx("g",{"fill-opacity":"0.52941",fill:"#7a7a7a","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none",children:n.jsxs("g",{transform:"scale(10.66667,10.66667)",children:[n.jsx("path",{d:"M19.5,18v3h-15v-3h-1.5v3c0,0.3978 0.15804,0.7794 0.43934,1.0607c0.2813,0.2813 0.66284,0.4393 1.06066,0.4393h15c0.3978,0 0.7794,-0.158 1.0607,-0.4393c0.2813,-0.2813 0.4393,-0.6629 0.4393,-1.0607v-3z"}),n.jsx("path",{d:"M19.5,10.5l-1.0575,-1.0575l-5.6925,5.685v-13.6275h-1.5v13.6275l-5.6925,-5.685l-1.0575,1.0575l7.5,7.5z"})]})})});E.__docgenInfo={description:"",methods:[],displayName:"GrayDownloadSVG",props:{className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<SVGSVGElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},name:"e"}],return:{name:"void"}}},description:""},red:{required:!1,tsType:{name:"boolean"},description:""},black:{required:!1,tsType:{name:"boolean"},description:""},white:{required:!1,tsType:{name:"boolean"},description:""}},composes:["SVGProps"]};const M=({className:e,onClick:i,...t})=>n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e,onClick:i,...t,children:[n.jsx("path",{d:"M19.5 18V21H4.5V18H3V21C3 21.3978 3.15804 21.7794 3.43934 22.0607C3.72064 22.342 4.10218 22.5 4.5 22.5H19.5C19.8978 22.5 20.2794 22.342 20.5607 22.0607C20.842 21.7794 21 21.3978 21 21V18H19.5Z",fill:"#020210"}),n.jsx("path",{d:"M19.5 10.5L18.4425 9.4425L12.75 15.1275V1.5H11.25V15.1275L5.5575 9.4425L4.5 10.5L12 18L19.5 10.5Z",fill:"#020210"})]});M.__docgenInfo={description:"",methods:[],displayName:"DownloadSVG",props:{className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<SVGSVGElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},name:"e"}],return:{name:"void"}}},description:""},red:{required:!1,tsType:{name:"boolean"},description:""},black:{required:!1,tsType:{name:"boolean"},description:""},white:{required:!1,tsType:{name:"boolean"},description:""}},composes:["SVGProps"]};const w=(e,i,t)=>({TypographyComponent:e?g:K,IconComponent:e?i:t}),je=(e,i,t)=>[{render:r=>r.isBought?n.jsx(A.Fragment,{}):n.jsxs(d,{className:"edit",onClick:()=>e("editCourse",r),children:[n.jsx(C,{}),n.jsx(g,{children:t("actions.edit")})]})},{render:()=>{const{TypographyComponent:r,IconComponent:s}=w(!1,M,E);return n.jsxs(d,{children:[n.jsx(s,{}),n.jsx(r,{children:t("actions.download_syllabus")})]})}},{render:r=>{const{TypographyComponent:s,IconComponent:a}=w(!!r.video,j,k);return n.jsxs(d,{onClick:()=>e("playIntro",r),disabled:!r.video,children:[n.jsx(a,{}),n.jsx(s,{children:t("actions.play_intro")})]})}},{hide:!i.deleteCourse,render:r=>n.jsxs(d,{className:"delete",onClick:()=>e("deleteCourse",r.id),children:[n.jsx(T,{}),n.jsx(X,{children:t("actions.delete")})]})}];export{Q as C,C as E,te as G,ue as I,j as P,pe as S,me as T,je as a,de as b,le as c,ce as d,Ce as e,Se as f,we as g,Ve as h,ae as i,se as j,xe as k,ge as l,ve as m,ye as n,fe as o,he as p,be as q};
