import{a as c,_ as g}from"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import{r as h}from"./index-P7RG-sTI.js";import{D as v,T as u}from"./DefaultPropsProvider-B8aBBDeI.js";import{j as a}from"./jsx-runtime-BMn0QxmW.js";import{u as x}from"./useThemeWithoutDefault-CFR2Jxbw.js";import{R as b}from"./index-C4F_4SMc.js";import{u as d,n as M,T}from"./nested-Cn8RRBPJ.js";import{T as w}from"./emotion-element-f0de968e.browser.esm-5W1wZvPb.js";import{f as y}from"./styled-components.browser.esm-DJTJMFhR.js";function P(o,t){return typeof t=="function"?t(o):c({},o,t)}function j(o){const{children:t,theme:r}=o,e=d(),i=h.useMemo(()=>{const n=e===null?r:P(e,r);return n!=null&&(n[M]=e!==null),n},[r,e]);return a.jsx(T.Provider,{value:i,children:t})}const l={};function m(o,t,r,e=!1){return h.useMemo(()=>{const i=o&&t[o]||t;if(typeof r=="function"){const n=r(i),s=o?c({},t,{[o]:n}):n;return e?()=>s:s}return o?c({},t,{[o]:r}):c({},t,r)},[o,t,r,e])}function k(o){const{children:t,theme:r,themeId:e}=o,i=x(l),n=d()||l,s=m(e,i,r),f=m(e,n,r,!0),p=s.direction==="rtl";return a.jsx(j,{theme:f,children:a.jsx(w.Provider,{value:s,children:a.jsx(b,{value:p,children:a.jsx(v,{value:s==null?void 0:s.components,children:t})})})})}const E=["theme"];function H(o){let{theme:t}=o,r=g(o,E);const e=t[u];let i=e||t;return typeof t!="function"&&(e&&!e.vars?i=c({},e,{vars:null}):t&&!t.vars&&(i=c({},t,{vars:null}))),a.jsx(k,c({},r,{themeId:e?u:void 0,theme:i}))}const L=y`
  body {
    width: 100%;
    height: 100%;
    background-color: #f5f6fa !important;
  }
  a,
  a:hover {
    text-decoration: none;
    color: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    font-weight: normal;
    margin: 0;
    list-style-type: none;
  }
  ul {
    list-style: none;
  }
  ul,
  figure {
    margin: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swal2-container {
    z-index: 1301 !important;
  }
  .MuiDialog-paper,
  .MuiDialogContent-root {
    overflow-y: unset !important;
  }
  article {
    ul {
      list-style: inherit;
    }
    pre {
      margin: 0;
    }
    a {
      cursor: pointer;
      color: #5e93c5;
      &:hover {
        color: #7eadda;
      }
    }
    blockquote {
      background: #eee;
      padding: 10px;
      border-radius: 5px;
      margin: 0;
    }
  }
  ::-webkit-scrollbar {
    width: 0px !important;
    height: 0px !important;
  }
  .MuiTabs-indicator {
    background-color: #06c68f !important;
  }
  .MuiTab-root {
    min-width: 160px !important;
  }
  .Mui-checked + .MuiSwitch-track {
    background-color: #06c68f !important;
  }
  .MuiTab-root.Mui-selected,
  .MuiSvgIcon-root.Mui-active,
  .MuiSvgIcon-root.Mui-checked,
  .MuiSvgIcon-root.Mui-selected,
  .MuiSvgIcon-root.Mui-completed,
  .MuiSwitch-thumb {
    color: #06c68f !important;
  }
  .DraftEditor-root {
    max-height: 210px !important;
  }
  .fireQuestionIsUsedInQuizPopup {
    font-size: 1.5em;
    font-weight: 450;
    br:last-child,
    br:nth-child(2) {
      display: block !important;
      content: '';
      margin-bottom: 15px;
    }
  }
  .swal2-icon {
    scale: 0.7;
  }
  .swal2-actions {
    font-size: 85%;
  }
  .custom-swal2-vertical-buttons .swal2-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .custom-swal2-button {
    width: 70%;
    margin: 5px 0;
  }
`;export{L as G,H as T};
