import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{d as a}from"./styled-components.browser.esm-pdgFlRIf.js";import"./index-ChsGqxH_.js";import"./index-Dmy2JGbm.js";import"./Middleware-Iy5ki4vm.js";const d=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-weight: 400 !important;
`,x=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;a.div`
  display: flex;
  font-weight: 400 !important;
`;const u={svg:{width:"32px",height:"32px"}},o=({tips:i,rememberText:p})=>{const l=s=>{const r=s.split(" ");return r.length?e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:r[0]}),r.slice(1).join(" ")]}):null};return e.jsxs(x,{children:[i.map((s,r)=>e.jsxs(d,{children:[e.jsx("img",{src:s.icon,alt:"tipSVG",style:u.svg}),e.jsx("span",{children:s.text})]},r)),p&&e.jsx("div",{children:l(p)})]})};o.__docgenInfo={description:"",methods:[],displayName:"DrawerTips",props:{tips:{required:!0,tsType:{name:"Array",elements:[{name:"ITip"}],raw:"ITip[]"},description:""},rememberText:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Components/DrawerTips",component:o,tags:["autodocs","DrawerTips"],parameters:{layout:"centered"}},g=i=>e.jsx(o,{...i}),t=g.bind({});t.args={tips:[{icon:"https://via.placeholder.com/32",text:"Tip 1: Remember to save your work."},{icon:"https://via.placeholder.com/32",text:"Tip 2: Check your email regularly."}],rememberText:"Remember: Always backup your data."};var n,m,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"args => <DrawerTips {...args} />",...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const D=["DefaultDrawerTips"];export{t as DefaultDrawerTips,D as __namedExportsOrder,j as default};
