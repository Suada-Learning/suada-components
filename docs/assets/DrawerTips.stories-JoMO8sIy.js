import{j as e}from"./jsx-runtime-BMn0QxmW.js";import{d as a}from"./styled-components.browser.esm-C8J4ZJ9w.js";import"./index-ChsGqxH_.js";import"./index-P7RG-sTI.js";const d=a.div`
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
`;const u={svg:{width:"32px",height:"32px"}},o=({tips:i,rememberText:n})=>{const l=s=>{const r=s.split(" ");return r.length?e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:r[0]}),r.slice(1).join(" ")]}):null};return e.jsxs(x,{children:[i.map((s,r)=>e.jsxs(d,{children:[e.jsx("img",{src:s.icon,alt:"tipSVG",style:u.svg}),e.jsx("span",{children:s.text})]},r)),n&&e.jsx("div",{children:l(n)})]})};o.__docgenInfo={description:"",methods:[],displayName:"DrawerTips",props:{tips:{required:!0,tsType:{name:"Array",elements:[{name:"ITip"}],raw:"ITip[]"},description:""},rememberText:{required:!1,tsType:{name:"string"},description:""}}};const f={title:"Components/DrawerTips",component:o,tags:["autodocs","DrawerTips"],parameters:{layout:"centered"}},g=i=>e.jsx(o,{...i}),t=g.bind({});t.args={tips:[{icon:"https://via.placeholder.com/32",text:"Tip 1: Remember to save your work."},{icon:"https://via.placeholder.com/32",text:"Tip 2: Check your email regularly."}],rememberText:"Remember: Always backup your data."};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <DrawerTips {...args} />",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const j=["DefaultDrawerTips"];export{t as DefaultDrawerTips,j as __namedExportsOrder,f as default};
