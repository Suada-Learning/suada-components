import{a,_ as x}from"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import{r as d}from"./index-LpBWhHPZ.js";import{D as b,T as f}from"./DefaultPropsProvider-Bumr00fv.js";import{j as l}from"./jsx-runtime-Bkl-fPu3.js";import{a as g}from"./useTheme-JzeSqcNx.js";import{R as M}from"./index-wK_Vy0z3.js";import{u as T}from"./useId-b15GGdoE.js";import{u as w}from"./useEnhancedEffect-DwozEE2v.js";import{G as S}from"./GlobalStyles-Br73Fs44.js";import{T as E}from"./emotion-react.browser.esm-D9ztm9Ef.js";import{S as j}from"./styled-components.browser.esm-vTeNnIge.js";const y=d.createContext(null);function v(){return d.useContext(y)}const P=typeof Symbol=="function"&&Symbol.for,k=P?Symbol.for("mui.nested"):"__THEME_NESTED__";function C(t,e){return typeof e=="function"?e(t):a({},t,e)}function _(t){const{children:e,theme:o}=t,r=v(),n=d.useMemo(()=>{const i=r===null?o:C(r,o);return i!=null&&(i[k]=r!==null),i},[o,r]);return l.jsx(y.Provider,{value:n,children:e})}function D(t){const e=g(),o=T()||"",{modularCssLayers:r}=t;let n="mui.global, mui.components, mui.theme, mui.custom, mui.sx";return!r||e!==null?n="":typeof r=="string"?n=r.replace(/mui(?!\.)/g,n):n=`@layer ${n};`,w(()=>{const i=document.querySelector("head");if(!i)return;const s=i.firstChild;if(n){var c;if(s&&(c=s.hasAttribute)!=null&&c.call(s,"data-mui-layer-order")&&s.getAttribute("data-mui-layer-order")===o)return;const u=document.createElement("style");u.setAttribute("data-mui-layer-order",o),u.textContent=n,i.prepend(u)}else{var m;(m=i.querySelector(`style[data-mui-layer-order="${o}"]`))==null||m.remove()}},[n,o]),n?l.jsx(S,{styles:n}):null}const h={};function p(t,e,o,r=!1){return d.useMemo(()=>{const n=t&&e[t]||e;if(typeof o=="function"){const i=o(n),s=t?a({},e,{[t]:i}):i;return r?()=>s:s}return t?a({},e,{[t]:o}):a({},e,o)},[t,e,o,r])}function I(t){const{children:e,theme:o,themeId:r}=t,n=g(h),i=v()||h,s=p(r,n,o),c=p(r,i,o,!0),m=s.direction==="rtl",u=D(s);return l.jsx(_,{theme:c,children:l.jsx(E.Provider,{value:s,children:l.jsx(M,{value:m,children:l.jsxs(b,{value:s==null?void 0:s.components,children:[u,e]})})})})}const z=["theme"];function V(t){let{theme:e}=t,o=x(t,z);const r=e[f];let n=r||e;return typeof e!="function"&&(r&&!r.vars?n=a({},r,{vars:null}):e&&!e.vars&&(n=a({},e,{vars:null}))),l.jsx(I,a({},o,{themeId:r?f:void 0,theme:n}))}const W=j`
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
`;export{W as G,V as T};
