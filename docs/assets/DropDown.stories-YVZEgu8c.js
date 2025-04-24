import{j as r}from"./jsx-runtime-BMn0QxmW.js";import{C as c}from"./ThemeProvider-GwGc0gxs.js";import{G as m}from"./global.styles-CyevQp7B.js";import{S as p}from"./react-select.esm-D3BlUfpz.js";import{S as u}from"./styled-components-DgsfQBty.js";import{o as b}from"./SchoolIcon-icINwQwI.js";import"./PlayButton-C-8aCi6g.js";import"./SearchRounded-BYJUFGCg.js";import"./Unlock-BMGeDJzN.js";import{d as n}from"./styled-components.browser.esm-DJTJMFhR.js";import"./index-ChsGqxH_.js";import"./Theme-BcQkaft4.js";import"./createTheme-DGNmzB_z.js";import"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import"./index-P7RG-sTI.js";import"./DefaultPropsProvider-B8aBBDeI.js";import"./useThemeWithoutDefault-CFR2Jxbw.js";import"./emotion-element-f0de968e.browser.esm-5W1wZvPb.js";import"./index-C4F_4SMc.js";import"./nested-Cn8RRBPJ.js";import"./defineProperty-BoB-4B-Z.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-Ckd6v8Uw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./toConsumableArray-CSXa18Nn.js";import"./emotion-react.browser.esm-uhHxmO8j.js";import"./index-qH2c_dVb.js";import"./index-DdXvKv-Q.js";const f={option:(e,o)=>({...e,"&:hover":{backgroundColor:"rgba(6, 198, 144, 0.1)"},backgroundColor:o.isSelected?"rgba(6, 198, 144, 0.3)":"transparent",color:"#000",fontFamily:"'Helvetica neue', sans-serif",borderRadius:"6px"}),control:(e,o)=>({...e,borderRadius:"6px",transition:"border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in",boxShadow:"0 1px 9px 5px rgb(0 0 0 / 3%)",outline:"none",borderColor:o.isFocused?"#06c68f !important":"rgba(0, 0, 0, 0.1)",fontFamily:"'Helvetica neue', sans-serif",border:o.isFocused?"1px solid #06c68f":"1px solid rgba(0, 0, 0, 0.1)"}),menu:(e,o)=>({...e,zIndex:"99",transition:"border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in",boxShadow:"0 1px 9px 5px rgb(0 0 0 / 3%)",fontFamily:"'Helvetica neue', sans-serif",outline:"none",border:o.isFocused?"1px solid #06c68f":"1px solid rgba(0, 0, 0, 0.1)",borderColor:o.isFocused?"#06c68f !important":"rgba(0, 0, 0, 0.1)",borderRadius:"6px",minHeight:"40px"})};n.div`
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
`,l=e=>{const o=()=>r.jsx(b,{});return r.jsxs(y,{error:!!(e.error&&e.touched),children:[e.label&&r.jsx(u,{$required:e.required,children:e.label}),r.jsx(p,{className:e.className,isMulti:e.isMulti,onChange:e.onChange,options:e.options||void 0,value:e.value,placeholder:e.placeholder,styles:e.styles||f,isClearable:e.isClearable,onFocus:e.onFocus,isDisabled:e.isDisabled,isLoading:e.isLoading,components:{DropdownIndicator:o}}),e.touched&&e.error&&e.errorMessage&&r.jsx(g,{children:e.errorMessage})]})};l.__docgenInfo={description:"",methods:[],displayName:"DropDown",props:{required:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isMulti:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!1,tsType:{name:"union",raw:"any[] | null",elements:[{name:"Array",elements:[{name:"any"}],raw:"any[]"},{name:"null"}]},description:""},value:{required:!0,tsType:{name:"any"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},styles:{required:!1,tsType:{name:"StylesConfig",elements:[{name:"IFilterQuery"},{name:"boolean"}],raw:"StylesConfig<IFilterQuery, boolean>"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},touched:{required:!1,tsType:{name:"union",raw:"boolean | FormikTouched<any> | FormikTouched<any>[] | undefined",elements:[{name:"boolean"},{name:"FormikTouched",elements:[{name:"any"}],raw:"FormikTouched<any>"},{name:"Array",elements:[{name:"FormikTouched",elements:[{name:"any"}],raw:"FormikTouched<any>"}],raw:"FormikTouched<any>[]"},{name:"undefined"}]},description:""},errorMessage:{required:!1,tsType:{name:"any"},description:""}}};const d=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],J={title:"Components/DropDown",component:l,tags:["autodocs"],decorators:[e=>r.jsx(c,{children:r.jsxs(h,{children:[r.jsx(m,{}),r.jsx(e,{})]})})],parameters:{layout:"centered"},argTypes:{label:{control:"text"},options:{control:"object"},isMulti:{control:"boolean"},isClearable:{control:"boolean"},isDisabled:{control:"boolean"},isLoading:{control:"boolean"},placeholder:{control:"text"},className:{control:"text"},errorMessage:{control:"text"}},args:{label:"Select an option",options:d,isMulti:!1,isClearable:!0,isDisabled:!1,isLoading:!1,placeholder:"Choose...",className:"",errorMessage:""}},a={args:{label:"Select an option",options:d,isMulti:!1,isClearable:!0,isDisabled:!1,isLoading:!1,placeholder:"Choose...",className:"",errorMessage:""}};var i,s,t;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const K=["Default"];export{a as Default,K as __namedExportsOrder,J as default};
