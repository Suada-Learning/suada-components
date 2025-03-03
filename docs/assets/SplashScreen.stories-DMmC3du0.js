import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{d as r}from"./styled-components.browser.esm-pdgFlRIf.js";import{B as h}from"./Button-CUBKU9L3.js";import"./index-ChsGqxH_.js";import"./index-Dmy2JGbm.js";import"./Middleware-Iy5ki4vm.js";const x=r.div`
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  border: 1px solid #e7e9ed;
  border-radius: 4px;
  flex-direction: column;
  padding: 40px;
`,y=r.div`
  font-weight: 800;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  gap: 8px;
  margin-top: ${({marginTop:t})=>t||"0px"};

  h1 {
    font-size: 18px;
    font-weight: 800;
  }

  h4 {
    color: #68707a;
    font-size: 16px;
    font-weight: 500;
  }
`,B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPJSURBVHgB7ZtLbExRGMf/504V1alqvKo0Xq1kEpJ6hKRCYiZIiUewsSEshQ22pU1sJDYs7S2UeESLpENIxcIruiBKEOKVJkYp1ZqZ43/OdJqaTqeN9N522u8/Offec853b+b73e+755zJHYV+tPe2njDZh3IFLGWZphQcZJm0RlwDrUrjUfQnWs5Uqc50dipd46E7uoweH2HvbhrkI/v1g0DOxYFTp9eql6mdfe7u4dt6KhsPEMC+UQLAyM9I3u9TOHjknp6e2pmT2hB1EOQJ6wkgZyJ75xUAM/L6CZkRLqYCvvwC3nwHOqLIYT0Yi6KJzed72/WBwPwpocOzjdfLyWxDKZA3Dlmrn3+Am++Apo/WtzlMi9mpNn0g0PkCFr85zMvJbgBGk/j9JyW9TPhVkGqTdU98NyQQIBCsBAIEgpVAgECwEggQCFYCAQLBSiBAIFgJBAgEK4EAgWAlECAQrAQCBIKVQIBAsBIIEAhWAgECwUogQCBYCQQIBCuBAIFgJRAgEKwEAgSClUBAulf4Rrk0P6FduzCuPRf5+V2oq6tLvKi6buOOJY4PlQqqoDCwJjR+2pyQaS8vZJmCrFdLhOVb4vh36/vGtmd3w4TxXcfQVOR3mpUBoHw4TgDbMcZEEJcI4vhYfiaYV5+1SYWedFAOQlBqupObN2H8lOIS094Z+fQh3vXrN0a29EAGaX3SuhVxNIZvXGyGaHjf4FfBqm2bHPg2xRGrDzdcrscg7qob8mF4pEJVO/cyUE8yBTkSOZULygJtr18+e4ph0LBACFbt3MwQPKoUAqbOfSGf1KXzFwa+vHn1/AU8ltcQTARsJYAaJuKyfzqUKuYwvWh+WeAzI6IFHspLCAbAFu6PEUBFegsUc+s5CM8gdKdAdTICtNafuWtnBOQzFT7y+AcjwW9AsL7Iy9TwBEI3ABMBy02dAJ7Q+XrlKPPnorl0/hHLTY4NubSZZVIDJiIIou1r5EVHRzvclOsQ0gGgs7VQupmOr2XTXJa37D+rNe7Ttrw3iOKSUtdBuDpt7g9A+PrFK0o5feYE4YYL17R5aGo8NHWCqOC51RUrK7cWFc10bU7jGoRMAJBhUtQLxANT9wKEGxCSw2BtEgAdesLQrxkIQFIEYWaPJ2j52F6QIFiql65avcXv9w85iCGHwMXYYq30np5hkAC4rWlsuHAVg58W62772iQIcz1z3RWV6xdjiOXuUjoDgHhUf+VQGEmY6YhmPfXsFBA9S9+hlis5ZpbmPh+WxGJovpVhqZq0i9Mu05I2mPjla0C7/9VfqPhM23MjJyAAAAAASUVORK5CYII=",E=r.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  img {
    width: 100%;
  }
`,d=()=>e.jsx(E,{children:e.jsx("img",{src:B,alt:"Add More"})});d.__docgenInfo={description:"",methods:[],displayName:"Presentation"};const s=({title:t,subTitle:i,createButton:n=!1,marginTop:c=0,minHeight:u="75vh",height:A="auto",contentMaxWidth:f="100%",textMarginTop:m="0px",isSearchOrFilter:g=!1})=>e.jsx(x,{style:{marginTop:c,minHeight:u,height:A,justifyContent:g?"flex-start":"center"},children:e.jsxs(y,{style:{maxWidth:f},marginTop:m,children:[e.jsx(d,{}),t&&e.jsx("h1",{children:t}),i&&e.jsx("h4",{children:i}),n&&e.jsx("div",{children:n()})]})});s.__docgenInfo={description:"",methods:[],displayName:"SplashScreen",props:{title:{required:!1,tsType:{name:"string"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},createButton:{required:!1,tsType:{name:"union",raw:"(() => ReactElement) | false",elements:[{name:"unknown"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"false",computed:!1}},marginTop:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},minHeight:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'75vh'",computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'auto'",computed:!1}},contentMaxWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'100%'",computed:!1}},textMarginTop:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'0px'",computed:!1}},isSearchOrFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const q={title:"Components/SplashScreen",component:s,tags:["autodocs","SplashScreen"],parameters:{layout:"centered",controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},C=t=>e.jsx(s,{...t}),a=C.bind({});a.args={title:"You don’t have any groups yet.",subTitle:"As soon as you add a group, it will appear here",createButton:()=>e.jsx(h,{type:"primary",size:"small",label:"Create Group"}),marginTop:20,minHeight:"80vh",height:"auto",contentMaxWidth:"80%",textMarginTop:"10px",isSearchOrFilter:!1};var o,l,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"args => <SplashScreen {...args} />",...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const U=["DefaultSplashScreen"];export{a as DefaultSplashScreen,U as __namedExportsOrder,q as default};
