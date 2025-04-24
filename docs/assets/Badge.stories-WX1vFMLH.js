import{j as t}from"./jsx-runtime-BMn0QxmW.js";import{d as o}from"./styled-components.browser.esm-DJTJMFhR.js";import"./SchoolIcon-icINwQwI.js";import{E as c}from"./PlayButton-C-8aCi6g.js";import"./SearchRounded-BYJUFGCg.js";import"./Unlock-BMGeDJzN.js";import"./index-ChsGqxH_.js";import"./index-P7RG-sTI.js";const p=o.div`
  aspect-ratio: 1;
  width: 410px;
  scale: 0.4;
  transform: translate(-75%, -76%);
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 14px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;o.iframe`
  width: 410px;
  height: 410px;
  border: 0;
  border-radius: 4px;
`;const m=o.div`
  background-color: rgb(6, 198, 143);
  position: absolute;
  right: -12px;
  scale: 2.5;
  top: -12px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
  display: flex;
`,s=({src:e,onEditClick:d})=>e?t.jsxs(p,{children:[t.jsx("img",{src:e}),t.jsx(m,{onClick:d,children:t.jsx(c,{style:{color:"#fff"}})})]}):t.jsx(t.Fragment,{});s.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{src:{required:!0,tsType:{name:"string"},description:""},onEditClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E={title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},component:s},g=e=>t.jsx(s,{...e}),r=g.bind({});r.args={src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaxdUf7Wbdggm-utxlTr34w-nqSDOPHFIiWw&s",onEditClick:()=>console.log("Edit clicked")};var i,a,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Badge {...args} />",...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,E as default};
