import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{C as c}from"./ThemeProvider-OMQ2BVwH.js";import{G as m}from"./global.styles-ky-6VlY_.js";import{S as p}from"./react-select.esm-mJbQvImt.js";import{S as u}from"./styled-components-CgXJv8Ku.js";import{C as b}from"./WhiteAiAssistent-CHGddrWY.js";import"./PlayButton-WkCxJEgw.js";import"./SearchRounded-B4wRncnu.js";import"./Unlock-BWT_y5W-.js";import{d as n}from"./styled-components.browser.esm-DT3FsLGj.js";import"./index-ChsGqxH_.js";import"./Theme-C1aqVGh7.js";import"./createTheme-B9H9ZwjD.js";import"./index-CAe6R3bO.js";import"./DefaultPropsProvider-CE9yCcll.js";import"./emotion-react.browser.esm-pxioRHjz.js";import"./index-Cr4NX4s1.js";import"./useEnhancedEffect-DhebxzmZ.js";import"./defineProperty-ByFOxOYJ.js";import"./setPrototypeOf-C3V6guyq.js";import"./createClass-DbbEhZZE.js";import"./assertThisInitialized-B9jnkVVz.js";import"./extends-CF3RwP-h.js";import"./toConsumableArray-BcwBUSn-.js";import"./index-CqMW6mv0.js";import"./index-C7hTFOIV.js";const f={option:(e,o)=>({...e,"&:hover":{backgroundColor:"rgba(6, 198, 144, 0.1)"},backgroundColor:o.isSelected?"rgba(6, 198, 144, 0.3)":"transparent",color:"#000",fontFamily:"'Helvetica neue', sans-serif",borderRadius:"6px"}),control:(e,o)=>({...e,borderRadius:"6px",transition:"border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in",boxShadow:"0 1px 9px 5px rgb(0 0 0 / 3%)",outline:"none",borderColor:o.isFocused?"#06c68f !important":"rgba(0, 0, 0, 0.1)",fontFamily:"'Helvetica neue', sans-serif",border:o.isFocused?"1px solid #06c68f":"1px solid rgba(0, 0, 0, 0.1)"}),menu:(e,o)=>({...e,zIndex:"99",transition:"border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in",boxShadow:"0 1px 9px 5px rgb(0 0 0 / 3%)",fontFamily:"'Helvetica neue', sans-serif",outline:"none",border:o.isFocused?"1px solid #06c68f":"1px solid rgba(0, 0, 0, 0.1)",borderColor:o.isFocused?"#06c68f !important":"rgba(0, 0, 0, 0.1)",borderRadius:"6px",minHeight:"40px"})};n.div`
  width: 100%;
  position: relative;
  .css-yk16xz-control {
    border-color: ${({error:e})=>e?"#f44336":"rgba(0, 0, 0, 0.23)"};
    outline: none;
    &:hover {
      border-color: ${({error:e})=>e?"#f44336":"rgba(0, 0, 0, 0.23)"};
    }
  }
  .css-1wa3eu0-placeholder {
    color: ${({error:e})=>e?"#f44336":"rgba(0, 0, 0, 0.54) "};
  }
  & > .css-1m92ju6-control {
    border-color: ${({error:e})=>e?"#f44336":"#06c68f"};
  }
  & > .css-1n7v3ny-option {
    background-color: rgba(6, 198, 144, 0.1) !important;
  }
`;const g=n.div`
  position: absolute;
  color: #f44336;
  bottom: -20px;
  left: 6px;
  font-size: 0.75rem;
`,y=n.div`
  width: 100%;
  position: relative;
  .css-yk16xz-control {
    border-color: ${({error:e})=>e?"#f44336":"rgba(0, 0, 0, 0.23)"};
    outline: none;
  }
  .css-1wa3eu0-placeholder {
    color: ${({error:e})=>e?"#f44336":"rgba(0, 0, 0, 0.54) "};
  }
  .css-1hb7zxy-IndicatorsContainer {
    padding-right: 10px;
    cursor: pointer;
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
`,h=n.div`
  width: 372px !important;
  height: 40px !important;
  .selectField {
    width: 372px !important;
  }
`,l=e=>{const o=()=>r.jsx(b,{});return r.jsxs(y,{error:!!(e.error&&e.touched),children:[e.label&&r.jsx(u,{children:e.label}),r.jsx(p,{className:e.className,isMulti:e.isMulti,onChange:e.onChange,options:e.options||void 0,value:e.value,placeholder:e.placeholder,styles:e.styles||f,isClearable:e.isClearable,onFocus:e.onFocus,isDisabled:e.isDisabled,isLoading:e.isLoading,components:{DropdownIndicator:o}}),e.touched&&e.error&&e.errorMessage&&r.jsx(g,{children:e.errorMessage})]})};l.__docgenInfo={description:"",methods:[],displayName:"DropDown",props:{className:{required:!1,tsType:{name:"string"},description:""},isMulti:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!1,tsType:{name:"union",raw:"any[] | null",elements:[{name:"Array",elements:[{name:"any"}],raw:"any[]"},{name:"null"}]},description:""},value:{required:!0,tsType:{name:"any"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},styles:{required:!1,tsType:{name:"StylesConfig",elements:[{name:"IFilterQuery"},{name:"boolean"}],raw:"StylesConfig<IFilterQuery, boolean>"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},touched:{required:!1,tsType:{name:"union",raw:"boolean | FormikTouched<any> | FormikTouched<any>[] | undefined",elements:[{name:"boolean"},{name:"FormikTouched",elements:[{name:"any"}],raw:"FormikTouched<any>"},{name:"Array",elements:[{name:"FormikTouched",elements:[{name:"any"}],raw:"FormikTouched<any>"}],raw:"FormikTouched<any>[]"},{name:"undefined"}]},description:""},errorMessage:{required:!1,tsType:{name:"any"},description:""}}};const d=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],W={title:"Components/DropDown",component:l,tags:["autodocs"],decorators:[e=>r.jsx(c,{children:r.jsxs(h,{children:[r.jsx(m,{}),r.jsx(e,{})]})})],parameters:{layout:"centered"},argTypes:{label:{control:"text"},options:{control:"object"},isMulti:{control:"boolean"},isClearable:{control:"boolean"},isDisabled:{control:"boolean"},isLoading:{control:"boolean"},placeholder:{control:"text"},className:{control:"text"},errorMessage:{control:"text"}},args:{label:"Select an option",options:d,isMulti:!1,isClearable:!0,isDisabled:!1,isLoading:!1,placeholder:"Choose...",className:"",errorMessage:""}},a={args:{label:"Select an option",options:d,isMulti:!1,isClearable:!0,isDisabled:!1,isLoading:!1,placeholder:"Choose...",className:"",errorMessage:""}};var s,i,t;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Select an option',
    options: options,
    isMulti: false,
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    placeholder: 'Choose...',
    className: '',
    errorMessage: ''
  }
}`,...(t=(i=a.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,W as default};
