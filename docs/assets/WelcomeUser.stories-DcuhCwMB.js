import{j as a}from"./jsx-runtime-BMn0QxmW.js";import{d as m}from"./styled-components.browser.esm-C8J4ZJ9w.js";import{P as l}from"./ProfilePicture-CVR9M9L5.js";import"./index-ChsGqxH_.js";import"./index-P7RG-sTI.js";const c=m.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  background: #212121;
  transform: ${({isOpened:e})=>e?"translateX(0px)":"translateX(0)"};
`,p=m.h4`
  font-size: 16px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  width: ${({isOpened:e})=>e?"unset":"70px"};
`,s=({isOpened:e,user:r})=>a.jsxs(c,{isOpened:e,children:[a.jsx(l,{imgSource:r.avatar||"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",width:e?70:60,height:e?70:60}),a.jsx(p,{isOpened:e,children:e?`Hello, ${r.firstName} ${r.lastName}`:`${r.firstName.charAt(0)}${r.lastName.charAt(0)}`})]});s.__docgenInfo={description:"",methods:[],displayName:"WelcomeUser",props:{isOpened:{required:!0,tsType:{name:"boolean"},description:""},user:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  firstName: string
  lastName: string
  email: string
  phone: string
  avatar: string
}`,signature:{properties:[{key:"firstName",value:{name:"string",required:!0}},{key:"lastName",value:{name:"string",required:!0}},{key:"email",value:{name:"string",required:!0}},{key:"phone",value:{name:"string",required:!0}},{key:"avatar",value:{name:"string",required:!0}}]}},description:""}}};const y={title:"Components/WelcomeUser",component:s,tags:["autodocs","WelcomeUser"],parameters:{layout:"centered"}},u=e=>a.jsx(s,{...e}),t=u.bind({});t.args={isOpened:!0,user:{firstName:"John",lastName:"Doe",email:"john.doe@example.com",phone:"123-456-7890",avatar:"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"}};var o,n,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"args => <WelcomeUser {...args} />",...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const N=["DefaultWelcomeUser"];export{t as DefaultWelcomeUser,N as __namedExportsOrder,y as default};
