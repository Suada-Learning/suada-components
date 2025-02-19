import{j as X}from"./jsx-runtime-Be5KepTg.js";import{d as _}from"./createTheme-B4pomYAW.js";import{a as m}from"./Theme-D4T0JIIw.js";import"./index-Cu3ntQMU.js";import"./index-BsICj7Do.js";var o=(e=>(e.SUBMIT="submit",e.RESET="reset",e.BUTTON="button",e))(o||{}),r=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.GHOST="ghost",e.NEGATIVE="negative",e.POSITIVE="positive",e.DARK="dark",e.TEXT="text",e))(r||{}),t=(e=>(e.SM="small",e.LG="large",e))(t||{});const F=_.button`
  display: inline-flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  text-transform: capitalize;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  cursor: pointer;
  white-space: nowrap;

  & > svg > path {
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }

  &:disabled {
    cursor: not-allowed;
    transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);

    & > svg > path {
      transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
  }

  ${({$size:e})=>{switch(e){case t.SM:return`  
          width: 159px;
          height: 40px;
          padding: 8px; 
        `;case t.LG:return`
          width: 167px;
          height: 48px;
          padding: 12px;
        `;default:return""}}}

  ${({theme:e,$type:d})=>{switch(d){case r.PRIMARY:return`
          color: ${e.colors.neutral[100]};
          background-color: ${e.colors.primary.main};

          & > svg > path {
            fill: ${e.colors.neutral[100]};
          }

          &:not(:disabled):hover {
            background-color: ${e.colors.primary[700]};    
          }

          &:disabled {
            background: ${e.colors.neutral[400]}; 
          }
        `;case r.SECONDARY:return`
          border: 1px solid ${e.colors.primary.main}; 
          color: ${e.colors.primary.main};

          & > svg > path {
            fill: ${e.colors.primary.main};
          }

          &:not(:disabled):hover {
            border: 1px solid ${e.colors.primary[700]};
            color: ${e.colors.primary[700]};

            & > svg > path {
              fill: ${e.colors.primary[700]};
            }
          }

          &:disabled {
            border: 1px solid ${e.colors.neutral[400]}; 
            color: ${e.colors.neutral[400]}; 

            & > svg > path {
              fill: ${e.colors.neutral[400]};
            }
          }
        `;case r.GHOST:return`
          background-color: transparent;
          color: ${e.colors.neutral[900]};

          & > svg > path {
            fill: ${e.colors.neutral[900]};
          }

          &:not(:disabled):hover {
            background-color: ${e.colors.neutral[300]};
          }

          &:disabled {
            color: ${e.colors.neutral[400]}; 
            
            & > svg > path {
              fill: ${e.colors.neutral[400]};
            }
          }
        `;case r.NEGATIVE:return`
          background-color: ${e.colors.system.error.main};
          color: ${e.colors.neutral[100]};

          & > svg > path {
            fill: ${e.colors.neutral[100]};
          }

          &:not(:disabled):hover {
            background-color: ${e.colors.system.error[700]};
          }

          &:disabled {
            background: ${e.colors.system.error[300]}; 
          }
        `;case r.POSITIVE:return`
          background-color: ${e.colors.system.success.main};
          color: ${e.colors.neutral[100]};

          & > svg > path {
            fill: ${e.colors.neutral[100]};
          }

          &:not(:disabled):hover {
            background-color: ${e.colors.system.success[700]};
          }

          &:disabled {
            background: ${e.colors.system.success[300]}; 
          }
        `;case r.DARK:return`
          border: 1px solid ${e.colors.neutral[900]}; 
          color: ${e.colors.neutral[900]};

          & > svg > path {
            fill: ${e.colors.neutral[900]};
          }

          &:not(:disabled):hover {
            opacity: 0.8;
          }

          &:disabled {
            border: 1px solid ${e.colors.neutral[400]}; 
            color: ${e.colors.neutral[400]}; 
          }
        `;case r.TEXT:return`
          border: none; 
          color: ${e.colors.neutral[900]};
          padding-top: 0;
          padding-bottom: 0;
          width: fit-content;

          & > svg > path {
            fill: ${e.colors.neutral[900]};
          }

          &:not(:disabled):hover {
           color: ${e.colors.neutral[600]};
           
            & > svg > path {
              fill: ${e.colors.neutral[600]};
            }
          }

          &:disabled {
            color: ${e.colors.neutral[400]}; 

            & > svg > path {
              fill: ${e.colors.neutral[400]};
            }
          }
        `;default:return""}}}
`,G=({type:e,size:d,label:q,iconLeft:j,iconRight:H,disabled:V,customStyles:Y,onClick:C,htmlType:K=o.BUTTON,className:L})=>X.jsxs(F,{$type:e,$size:d,disabled:!!V,style:Y,onClick:C,type:K,className:L,children:[j,q,H]});G.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{required:!0,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'ghost'
| 'negative'
| 'positive'
| 'dark'
| 'text'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'text'"}]},description:""},size:{required:!0,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},iconLeft:{required:!1,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},iconRight:{required:!1,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},customStyles:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},htmlType:{required:!1,tsType:{name:"union",raw:"'submit' | 'reset' | 'button'",elements:[{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'button'"}]},description:"",defaultValue:{value:"HtmlButtonTypeEnum.BUTTON",computed:!0}},id:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},themes:{required:!1,tsType:{name:"any"},description:""}}};const re={title:"Components/Button",component:G,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select",options:Object.values(r)}},size:{control:{type:"select",options:Object.values(t)}},htmlType:{control:{type:"select",options:Object.values(o)}},disabled:{control:{type:"boolean"}},label:{control:{type:"text"}},iconLeft:{control:{type:"object"}},iconRight:{control:{type:"object"}},customStyles:{control:{type:"object"}},className:{control:{type:"text"}},onClick:{action:"clicked"},themes:{control:{type:"select"},options:Object.keys(m),mapping:m,defaultValue:"light"}},args:{onClick:()=>console.log("Button clicked!")}},a={args:{type:r.PRIMARY,size:t.SM,label:"Primary Button",htmlType:o.BUTTON}},s={args:{type:r.SECONDARY,size:t.SM,label:"Secondary Button",htmlType:o.BUTTON}},n={args:{type:r.PRIMARY,size:t.SM,label:"Disabled Button",disabled:!0,htmlType:o.BUTTON}},l={args:{type:r.POSITIVE,size:t.SM,label:"Success Button",htmlType:o.BUTTON}},i={args:{type:r.NEGATIVE,size:t.SM,label:"Negative Button",htmlType:o.BUTTON}},c={args:{type:r.GHOST,size:t.SM,label:"Ghost Button",htmlType:o.BUTTON}},u={args:{type:r.DARK,size:t.SM,label:"Dark Button",htmlType:o.BUTTON}},p={args:{type:r.TEXT,size:t.SM,label:"Text Button",htmlType:o.BUTTON}};var y,T,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: ButtonTypeEnum.PRIMARY,
    size: ButtonSizeEnum.SM,
    label: 'Primary Button',
    htmlType: HtmlButtonTypeEnum.BUTTON
  }
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var g,S,B;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: ButtonTypeEnum.SECONDARY,
    size: ButtonSizeEnum.SM,
    label: 'Secondary Button',
    htmlType: HtmlButtonTypeEnum.BUTTON
  }
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var v,E,$;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: ButtonTypeEnum.PRIMARY,
    size: ButtonSizeEnum.SM,
    label: 'Disabled Button',
    disabled: true,
    htmlType: HtmlButtonTypeEnum.BUTTON
  }
}`,...($=(E=n.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var f,O,N;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: ButtonTypeEnum.POSITIVE,
    size: ButtonSizeEnum.SM,
    label: 'Success Button',
    htmlType: HtmlButtonTypeEnum.BUTTON
  }
}`,...(N=(O=l.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var z,x,R;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: ButtonTypeEnum.NEGATIVE,
    size: ButtonSizeEnum.SM,
    label: 'Negative Button',
    htmlType: HtmlButtonTypeEnum.BUTTON
  }
}`,...(R=(x=i.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var h,M,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: ButtonTypeEnum.GHOST,
    size: ButtonSizeEnum.SM,
    label: 'Ghost Button',
    htmlType: HtmlButtonTypeEnum.BUTTON
  }
}`,...(k=(M=c.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var I,U,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: ButtonTypeEnum.DARK,
    size: ButtonSizeEnum.SM,
    label: 'Dark Button',
    htmlType: HtmlButtonTypeEnum.BUTTON
  }
}`,...(A=(U=u.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var P,D,w;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: ButtonTypeEnum.TEXT,
    size: ButtonSizeEnum.SM,
    label: 'Text Button',
    htmlType: HtmlButtonTypeEnum.BUTTON
  }
}`,...(w=(D=p.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const te=["Primary","Secondary","Disabled","Positive","Negative","Ghost","Dark","Text"];export{u as Dark,n as Disabled,c as Ghost,i as Negative,l as Positive,a as Primary,s as Secondary,p as Text,te as __namedExportsOrder,re as default};
