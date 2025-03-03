import{j as b}from"./jsx-runtime-BTJTZTIL.js";import{d as g}from"./styled-components.browser.esm-pdgFlRIf.js";var l=(r=>(r.SUBMIT="submit",r.RESET="reset",r.BUTTON="button",r))(l||{}),e=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r.GHOST="ghost",r.NEGATIVE="negative",r.POSITIVE="positive",r.DARK="dark",r.TEXT="text",r))(e||{}),o=(r=>(r.SM="small",r.LG="large",r))(o||{});const v=g.button`
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

  ${({$size:r})=>{switch(r){case o.SM:return`  
          width: 159px;
          height: 40px;
          padding: 8px; 
        `;case o.LG:return`
          width: 167px;
          height: 48px;
          padding: 12px;
        `;default:return""}}}

  ${({theme:r,$type:a})=>{switch(a){case e.PRIMARY:return`
          color: ${r.colors.neutral[100]};
          background-color: ${r.colors.primary.main};

          & > svg > path {
            fill: ${r.colors.neutral[100]};
          }

          &:not(:disabled):hover {
            background-color: ${r.colors.primary[700]};    
          }

          &:disabled {
            background: ${r.colors.neutral[400]}; 
          }
        `;case e.SECONDARY:return`
          border: 1px solid ${r.colors.primary.main}; 
          color: ${r.colors.primary.main};

          & > svg > path {
            fill: ${r.colors.primary.main};
          }

          &:not(:disabled):hover {
            border: 1px solid ${r.colors.primary[700]};
            color: ${r.colors.primary[700]};

            & > svg > path {
              fill: ${r.colors.primary[700]};
            }
          }

          &:disabled {
            border: 1px solid ${r.colors.neutral[400]}; 
            color: ${r.colors.neutral[400]}; 

            & > svg > path {
              fill: ${r.colors.neutral[400]};
            }
          }
        `;case e.GHOST:return`
          background-color: transparent;
          color: ${r.colors.neutral[900]};

          & > svg > path {
            fill: ${r.colors.neutral[900]};
          }

          &:not(:disabled):hover {
            background-color: ${r.colors.neutral[300]};
          }

          &:disabled {
            color: ${r.colors.neutral[400]}; 
            
            & > svg > path {
              fill: ${r.colors.neutral[400]};
            }
          }
        `;case e.NEGATIVE:return`
          background-color: ${r.colors.system.error.main};
          color: ${r.colors.neutral[100]};

          & > svg > path {
            fill: ${r.colors.neutral[100]};
          }

          &:not(:disabled):hover {
            background-color: ${r.colors.system.error[700]};
          }

          &:disabled {
            background: ${r.colors.system.error[300]}; 
          }
        `;case e.POSITIVE:return`
          background-color: ${r.colors.system.success.main};
          color: ${r.colors.neutral[100]};

          & > svg > path {
            fill: ${r.colors.neutral[100]};
          }

          &:not(:disabled):hover {
            background-color: ${r.colors.system.success[700]};
          }

          &:disabled {
            background: ${r.colors.system.success[300]}; 
          }
        `;case e.DARK:return`
          border: 1px solid ${r.colors.neutral[900]}; 
          color: ${r.colors.neutral[900]};

          & > svg > path {
            fill: ${r.colors.neutral[900]};
          }

          &:not(:disabled):hover {
            opacity: 0.8;
          }

          &:disabled {
            border: 1px solid ${r.colors.neutral[400]}; 
            color: ${r.colors.neutral[400]}; 
          }
        `;case e.TEXT:return`
          border: none; 
          color: ${r.colors.neutral[900]};
          padding-top: 0;
          padding-bottom: 0;
          width: fit-content;

          & > svg > path {
            fill: ${r.colors.neutral[900]};
          }

          &:not(:disabled):hover {
           color: ${r.colors.neutral[600]};
           
            & > svg > path {
              fill: ${r.colors.neutral[600]};
            }
          }

          &:disabled {
            color: ${r.colors.neutral[400]}; 

            & > svg > path {
              fill: ${r.colors.neutral[400]};
            }
          }
        `;default:return""}}}
`,$=({type:r,size:a,label:s,iconLeft:n,iconRight:i,disabled:t,customStyles:c,onClick:d,htmlType:u=l.BUTTON,className:p})=>b.jsxs(v,{$type:r,$size:a,disabled:!!t,style:c,onClick:d,type:u,className:p,children:[n,s,i]});$.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{required:!0,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'ghost'
| 'negative'
| 'positive'
| 'dark'
| 'text'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'text'"}]},description:""},size:{required:!0,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},iconLeft:{required:!1,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},iconRight:{required:!1,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},customStyles:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},htmlType:{required:!1,tsType:{name:"union",raw:"'submit' | 'reset' | 'button'",elements:[{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'button'"}]},description:"",defaultValue:{value:"HtmlButtonTypeEnum.BUTTON",computed:!0}},id:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},themes:{required:!1,tsType:{name:"any"},description:""}}};export{$ as B,l as H,o as a,e as b};
