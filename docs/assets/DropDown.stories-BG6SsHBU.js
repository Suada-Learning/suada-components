import{j as r}from"./jsx-runtime-Bkl-fPu3.js";import{C as u}from"./ThemeProvider-B4R_6A2M.js";import{G as p}from"./global.styles-eHzobOmD.js";import{r as b}from"./index-LpBWhHPZ.js";import{S as f}from"./react-select.esm-BMW9auo7.js";import{S as g}from"./styled-components-DwCD6MDa.js";import{o as y}from"./SchoolIcon-BCTNLzS8.js";import"./PlayButton-tDDVXCNd.js";import"./SearchRounded-CpGVmpS1.js";import"./Unlock-DvKQY-eR.js";import{g as n}from"./styled-components.browser.esm-vTeNnIge.js";import"./index-yBjzXJbu.js";import"./Theme-C_GbAspN.js";import"./createTheme-8DWx8oiM.js";import"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import"./DefaultPropsProvider-Bumr00fv.js";import"./emotion-react.browser.esm-D9ztm9Ef.js";import"./useTheme-JzeSqcNx.js";import"./index-wK_Vy0z3.js";import"./useId-b15GGdoE.js";import"./useEnhancedEffect-DwozEE2v.js";import"./GlobalStyles-Br73Fs44.js";import"./setPrototypeOf-DgZC2w_0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-OYHOLIWU.js";import"./index-B6ujFmsw.js";const h={option:(e,o)=>({...e,"&:hover":{backgroundColor:"rgba(6, 198, 144, 0.1)"},backgroundColor:o.isSelected?"rgba(6, 198, 144, 0.3)":"transparent",color:"#000",fontFamily:"'Helvetica neue', sans-serif",borderRadius:"6px"}),control:(e,o)=>({...e,borderRadius:"6px",transition:"border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in",boxShadow:"0 1px 9px 5px rgb(0 0 0 / 3%)",outline:"none",borderColor:o.isFocused?"#06c68f !important":"rgba(0, 0, 0, 0.1)",fontFamily:"'Helvetica neue', sans-serif",border:o.isFocused?"1px solid #06c68f":"1px solid rgba(0, 0, 0, 0.1)"}),menu:(e,o)=>({...e,zIndex:"99",transition:"border 0.3s ease-in, outline 0.6s ease-in, box-shadow 0.6s ease-in",boxShadow:"0 1px 9px 5px rgb(0 0 0 / 3%)",fontFamily:"'Helvetica neue', sans-serif",outline:"none",border:o.isFocused?"1px solid #06c68f":"1px solid rgba(0, 0, 0, 0.1)",borderColor:o.isFocused?"#06c68f !important":"rgba(0, 0, 0, 0.1)",borderRadius:"6px",minHeight:"40px"})};n.div`
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
`;const x=n.div`
  position: absolute;
  color: #f44336;
  bottom: -20px;
  left: 6px;
  font-size: 0.75rem;
`,T=n.div`
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
`,v=n.div`
  width: 372px !important;
  height: 40px !important;
  .selectField {
    width: 372px !important;
  }
`,d=e=>{const o=()=>r.jsx(y,{}),m=b.useId(),i=e.inputId||`${m}-input`;return r.jsxs(T,{error:!!(e.error&&e.touched),children:[e.label&&r.jsx(g,{htmlFor:i,$required:e.required,children:e.label}),r.jsx(f,{inputId:i,"aria-label":e.ariaLabel,className:e.className,isMulti:e.isMulti,onChange:e.onChange,options:e.options||void 0,value:e.value,placeholder:e.placeholder,styles:e.styles||h,isClearable:e.isClearable,onFocus:e.onFocus,isDisabled:e.isDisabled,isLoading:e.isLoading,components:{DropdownIndicator:o},noOptionsMessage:e.noOptionsMessage}),e.touched&&e.error&&e.errorMessage&&r.jsx(x,{children:e.errorMessage})]})};d.__docgenInfo={description:"",methods:[],displayName:"DropDown",props:{required:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isMulti:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!1,tsType:{name:"union",raw:"any[] | null",elements:[{name:"Array",elements:[{name:"any"}],raw:"any[]"},{name:"null"}]},description:""},value:{required:!0,tsType:{name:"any"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},styles:{required:!1,tsType:{name:"StylesConfig",elements:[{name:"IFilterQuery"},{name:"boolean"}],raw:"StylesConfig<IFilterQuery, boolean>"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},noOptionsMessage:{required:!1,tsType:{name:"union",raw:"((obj: { inputValue: string }) => ReactNode) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},inputId:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},touched:{required:!1,tsType:{name:"union",raw:"boolean | FormikTouched<any> | FormikTouched<any>[] | undefined",elements:[{name:"boolean"},{name:"FormikTouched",elements:[{name:"any"}],raw:"FormikTouched<any>"},{name:"Array",elements:[{name:"FormikTouched",elements:[{name:"any"}],raw:"FormikTouched<any>"}],raw:"FormikTouched<any>[]"},{name:"undefined"}]},description:""},errorMessage:{required:!1,tsType:{name:"any"},description:""}}};const c=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],J={title:"Components/DropDown",component:d,tags:["autodocs"],decorators:[e=>r.jsx(u,{children:r.jsxs(v,{children:[r.jsx(p,{}),r.jsx(e,{})]})})],parameters:{layout:"centered"},argTypes:{label:{control:"text"},options:{control:"object"},isMulti:{control:"boolean"},isClearable:{control:"boolean"},isDisabled:{control:"boolean"},isLoading:{control:"boolean"},placeholder:{control:"text"},className:{control:"text"},errorMessage:{control:"text"}},args:{label:"Select an option",options:c,isMulti:!1,isClearable:!0,isDisabled:!1,isLoading:!1,placeholder:"Choose...",className:"",errorMessage:""}},a={args:{label:"Select an option",options:c,isMulti:!1,isClearable:!0,isDisabled:!1,isLoading:!1,placeholder:"Choose...",className:"",errorMessage:""}};var s,t,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const K=["Default"];export{a as Default,K as __namedExportsOrder,J as default};
