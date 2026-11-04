import{a as u,_ as y}from"./objectWithoutPropertiesLoose-Cv5OCJ0e.js";import{r as d,o as M}from"./index-LpBWhHPZ.js";import{D as T,T as f}from"./DefaultPropsProvider-Bumr00fv.js";import{j as a}from"./jsx-runtime-Bkl-fPu3.js";import{a as x}from"./useTheme-B6KSNk_k.js";import{R as w}from"./index-wK_Vy0z3.js";import{u as S}from"./useEnhancedEffect-DwozEE2v.js";import{G as E}from"./GlobalStyles-DoDlTzDT.js";import{u as b,n as I,T as j}from"./nested-DJSeckUa.js";import{T as P}from"./emotion-react.browser.esm-D9ztm9Ef.js";import{S as k}from"./styled-components.browser.esm-vTeNnIge.js";function D(t,e){return typeof e=="function"?e(t):u({},t,e)}function C(t){const{children:e,theme:o}=t,r=b(),n=d.useMemo(()=>{const i=r===null?o:D(r,o);return i!=null&&(i[I]=r!==null),i},[o,r]);return a.jsx(j.Provider,{value:n,children:e})}let h=0;function G(t){const[e,o]=d.useState(t),r=t||e;return d.useEffect(()=>{e==null&&(h+=1,o(`mui-${h}`))},[e]),r}const p=M.useId;function $(t){return p!==void 0?p():G(t)}function z(t){const e=x(),o=$()||"",{modularCssLayers:r}=t;let n="mui.global, mui.components, mui.theme, mui.custom, mui.sx";return!r||e!==null?n="":typeof r=="string"?n=r.replace(/mui(?!\.)/g,n):n=`@layer ${n};`,S(()=>{const i=document.querySelector("head");if(!i)return;const s=i.firstChild;if(n){var c;if(s&&(c=s.hasAttribute)!=null&&c.call(s,"data-mui-layer-order")&&s.getAttribute("data-mui-layer-order")===o)return;const l=document.createElement("style");l.setAttribute("data-mui-layer-order",o),l.textContent=n,i.prepend(l)}else{var m;(m=i.querySelector(`style[data-mui-layer-order="${o}"]`))==null||m.remove()}},[n,o]),n?a.jsx(E,{styles:n}):null}const g={};function v(t,e,o,r=!1){return d.useMemo(()=>{const n=t&&e[t]||e;if(typeof o=="function"){const i=o(n),s=t?u({},e,{[t]:i}):i;return r?()=>s:s}return t?u({},e,{[t]:o}):u({},e,o)},[t,e,o,r])}function L(t){const{children:e,theme:o,themeId:r}=t,n=x(g),i=b()||g,s=v(r,n,o),c=v(r,i,o,!0),m=s.direction==="rtl",l=z(s);return a.jsx(C,{theme:c,children:a.jsx(P.Provider,{value:s,children:a.jsx(w,{value:m,children:a.jsxs(T,{value:s==null?void 0:s.components,children:[l,e]})})})})}const R=["theme"];function F(t){let{theme:e}=t,o=y(t,R);const r=e[f];let n=r||e;return typeof e!="function"&&(r&&!r.vars?n=u({},r,{vars:null}):e&&!e.vars&&(n=u({},e,{vars:null}))),a.jsx(L,u({},o,{themeId:r?f:void 0,theme:n}))}const J=k`
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
`;export{J as G,F as T};
