import{r as l}from"./index-BsICj7Do.js";import{a as Le,b as De,D as Pe,u as _e,G as Ae,T as P}from"./DefaultPropsProvider-BB0hjY0t.js";import{j as f}from"./jsx-runtime-Be5KepTg.js";import{c as Ve,h as Ke,s as Oe,j as Re}from"./createTheme-BTfVaJ7I.js";const Ce=l.createContext(null);function Y(){return l.useContext(Ce)}const Ge=typeof Symbol=="function"&&Symbol.for,Ne=Ge?Symbol.for("mui.nested"):"__THEME_NESTED__";function We(e,t){return typeof t=="function"?t(e):{...e,...t}}function ze(e){const{children:t,theme:r}=e,i=Y(),p=l.useMemo(()=>{const a=i===null?{...r}:We(i,r);return a!=null&&(a[Ne]=i!==null),a},[r,i]);return f.jsx(Ce.Provider,{value:p,children:t})}const ke=l.createContext();function He({value:e,...t}){return f.jsx(ke.Provider,{value:e??!0,...t})}const rt=()=>l.useContext(ke)??!1,Se={};function ge(e,t,r,i=!1){return l.useMemo(()=>{const p=e&&t[e]||t;if(typeof r=="function"){const a=r(p),o=e?{...t,[e]:a}:a;return i?()=>o:o}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,i])}function Me(e){const{children:t,theme:r,themeId:i}=e,p=Le(Se),a=Y()||Se,o=ge(i,p,r),d=ge(i,a,r,!0),I=(i?o[i]:o).direction==="rtl";return f.jsx(ze,{theme:d,children:f.jsx(De.Provider,{value:o,children:f.jsx(He,{value:I,children:f.jsx(Pe,{value:i?o[i].components:o.components,children:t})})})})}const B="mode",J="color-scheme",qe="data-color-scheme";function Fe(e){const{defaultMode:t="system",defaultLightColorScheme:r="light",defaultDarkColorScheme:i="dark",modeStorageKey:p=B,colorSchemeStorageKey:a=J,attribute:o=qe,colorSchemeNode:d="document.documentElement",nonce:I}=e;let m="",S=o;if(o==="class"&&(S=".%s"),o==="data"&&(S="[data-%s]"),S.startsWith(".")){const u=S.substring(1);m+=`${d}.classList.remove('${u}'.replace('%s', light), '${u}'.replace('%s', dark));
      ${d}.classList.add('${u}'.replace('%s', colorScheme));`}const x=S.match(/\[([^\]]+)\]/);if(x){const[u,T]=x[1].split("=");T||(m+=`${d}.removeAttribute('${u}'.replace('%s', light));
      ${d}.removeAttribute('${u}'.replace('%s', dark));`),m+=`
      ${d}.setAttribute('${u}'.replace('%s', colorScheme), ${T?`${T}.replace('%s', colorScheme)`:'""'});`}else m+=`${d}.setAttribute('${S}', colorScheme);`;return f.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?I:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${p}') || '${t}';
  const dark = localStorage.getItem('${a}-dark') || '${i}';
  const light = localStorage.getItem('${a}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${m}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function pe(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function xe(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function Ue(e){return xe(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function Q(e,t){if(typeof window>"u")return;let r;try{r=localStorage.getItem(e)||void 0,r||localStorage.setItem(e,t)}catch{}return r||t}function Qe(e){const{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:i,supportedColorSchemes:p=[],modeStorageKey:a=B,colorSchemeStorageKey:o=J,storageWindow:d=typeof window>"u"?void 0:window,noSsr:I=!1}=e,m=p.join(","),S=p.length>1,[x,u]=l.useState(()=>{const n=Q(a,t),s=Q(`${o}-light`,r),c=Q(`${o}-dark`,i);return{mode:n,systemMode:pe(n),lightColorScheme:s,darkColorScheme:c}}),[T,G]=l.useState(I||!S);l.useEffect(()=>{G(!0)},[]);const N=Ue(x),K=l.useCallback(n=>{u(s=>{if(n===s.mode)return s;const c=n??t;try{localStorage.setItem(a,c)}catch{}return{...s,mode:c,systemMode:pe(c)}})},[a,t]),v=l.useCallback(n=>{n?typeof n=="string"?n&&!m.includes(n)?console.error(`\`${n}\` does not exist in \`theme.colorSchemes\`.`):u(s=>{const c={...s};return xe(s,b=>{try{localStorage.setItem(`${o}-${b}`,n)}catch{}b==="light"&&(c.lightColorScheme=n),b==="dark"&&(c.darkColorScheme=n)}),c}):u(s=>{const c={...s},b=n.light===null?r:n.light,y=n.dark===null?i:n.dark;if(b)if(!m.includes(b))console.error(`\`${b}\` does not exist in \`theme.colorSchemes\`.`);else{c.lightColorScheme=b;try{localStorage.setItem(`${o}-light`,b)}catch{}}if(y)if(!m.includes(y))console.error(`\`${y}\` does not exist in \`theme.colorSchemes\`.`);else{c.darkColorScheme=y;try{localStorage.setItem(`${o}-dark`,y)}catch{}}return c}):u(s=>{try{localStorage.setItem(`${o}-light`,r),localStorage.setItem(`${o}-dark`,i)}catch{}return{...s,lightColorScheme:r,darkColorScheme:i}})},[m,o,r,i]),O=l.useCallback(n=>{x.mode==="system"&&u(s=>{const c=n!=null&&n.matches?"dark":"light";return s.systemMode===c?s:{...s,systemMode:c}})},[x.mode]),L=l.useRef(O);return L.current=O,l.useEffect(()=>{if(typeof window.matchMedia!="function"||!S)return;const n=(...c)=>L.current(...c),s=window.matchMedia("(prefers-color-scheme: dark)");return s.addListener(n),n(s),()=>{s.removeListener(n)}},[S]),l.useEffect(()=>{if(d&&S){const n=s=>{const c=s.newValue;typeof s.key=="string"&&s.key.startsWith(o)&&(!c||m.match(c))&&(s.key.endsWith("light")&&v({light:c}),s.key.endsWith("dark")&&v({dark:c})),s.key===a&&(!c||["light","dark","system"].includes(c))&&K(c||t)};return d.addEventListener("storage",n),()=>{d.removeEventListener("storage",n)}}},[v,K,a,o,m,t,d,S]),{...x,mode:T?x.mode:void 0,systemMode:T?x.systemMode:void 0,colorScheme:T?N:void 0,setMode:K,setColorScheme:v}}const Ye="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Be(e){const{themeId:t,theme:r={},modeStorageKey:i=B,colorSchemeStorageKey:p=J,disableTransitionOnChange:a=!1,defaultColorScheme:o,resolveTheme:d}=e,I={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},m=l.createContext(void 0),S=()=>l.useContext(m)||I,x={},u={};function T(v){var me,ue,he,fe;const{children:O,theme:L,modeStorageKey:n=i,colorSchemeStorageKey:s=p,disableTransitionOnChange:c=a,storageWindow:b=typeof window>"u"?void 0:window,documentNode:y=typeof document>"u"?void 0:document,colorSchemeNode:E=typeof document>"u"?void 0:document.documentElement,disableNestedContext:be=!1,disableStyleSheetGeneration:we=!1,defaultMode:Te="system",noSsr:Ee}=v,W=l.useRef(!1),z=Y(),H=l.useContext(m),q=!!H&&!be,X=l.useMemo(()=>L||(typeof r=="function"?r():r),[L]),Z=X[t],k=Z||X,{colorSchemes:j=x,components:ee=u,cssVarPrefix:F}=k,te=Object.keys(j).filter(h=>!!j[h]).join(","),D=l.useMemo(()=>te.split(","),[te]),oe=typeof o=="string"?o:o.light,re=typeof o=="string"?o:o.dark,$e=j[oe]&&j[re]?Te:((ue=(me=j[k.defaultColorScheme])==null?void 0:me.palette)==null?void 0:ue.mode)||((he=k.palette)==null?void 0:he.mode),{mode:ve,setMode:ne,systemMode:se,lightColorScheme:ce,darkColorScheme:ie,colorScheme:je,setColorScheme:le}=Qe({supportedColorSchemes:D,defaultLightColorScheme:oe,defaultDarkColorScheme:re,modeStorageKey:n,colorSchemeStorageKey:s,defaultMode:$e,storageWindow:b,noSsr:Ee});let U=ve,M=je;q&&(U=H.mode,M=H.colorScheme);const _=l.useMemo(()=>{var V;const h=M||k.defaultColorScheme,g=((V=k.generateThemeVars)==null?void 0:V.call(k))||k.vars,C={...k,components:ee,colorSchemes:j,cssVarPrefix:F,vars:g};if(typeof C.generateSpacing=="function"&&(C.spacing=C.generateSpacing()),h){const w=j[h];w&&typeof w=="object"&&Object.keys(w).forEach($=>{w[$]&&typeof w[$]=="object"?C[$]={...C[$],...w[$]}:C[$]=w[$]})}return d?d(C):C},[k,M,ee,j,F]),A=k.colorSchemeSelector;_e(()=>{if(M&&E&&A&&A!=="media"){const h=A;let g=A;if(h==="class"&&(g=".%s"),h==="data"&&(g="[data-%s]"),h!=null&&h.startsWith("data-")&&!h.includes("%s")&&(g=`[${h}="%s"]`),g.startsWith("."))E.classList.remove(...D.map(C=>g.substring(1).replace("%s",C))),E.classList.add(g.substring(1).replace("%s",M));else{const C=g.replace("%s",M).match(/\[([^\]]+)\]/);if(C){const[V,w]=C[1].split("=");w||D.forEach($=>{E.removeAttribute(V.replace(M,$))}),E.setAttribute(V,w?w.replace(/"|'/g,""):"")}else E.setAttribute(g,M)}}},[M,A,E,D]),l.useEffect(()=>{let h;if(c&&W.current&&y){const g=y.createElement("style");g.appendChild(y.createTextNode(Ye)),y.head.appendChild(g),window.getComputedStyle(y.body),h=setTimeout(()=>{y.head.removeChild(g)},1)}return()=>{clearTimeout(h)}},[M,c,y]),l.useEffect(()=>(W.current=!0,()=>{W.current=!1}),[]);const Ie=l.useMemo(()=>({allColorSchemes:D,colorScheme:M,darkColorScheme:ie,lightColorScheme:ce,mode:U,setColorScheme:le,setMode:ne,systemMode:se}),[D,M,ie,ce,U,le,ne,se,_.colorSchemeSelector]);let ae=!0;(we||k.cssVariables===!1||q&&(z==null?void 0:z.cssVarPrefix)===F)&&(ae=!1);const de=f.jsxs(l.Fragment,{children:[f.jsx(Me,{themeId:Z?t:void 0,theme:_,children:O}),ae&&f.jsx(Ae,{styles:((fe=_.generateStyleSheets)==null?void 0:fe.call(_))||[]})]});return q?de:f.jsx(m.Provider,{value:Ie,children:de})}const G=typeof o=="string"?o:o.light,N=typeof o=="string"?o:o.dark;return{CssVarsProvider:T,useColorScheme:S,getInitColorSchemeScript:v=>Fe({colorSchemeStorageKey:p,defaultLightColorScheme:G,defaultDarkColorScheme:N,modeStorageKey:i,...v})}}function ye({theme:e,...t}){const r=P in e?e[P]:void 0;return f.jsx(Me,{...t,themeId:r?P:void 0,theme:r||e})}const R={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:Je,useColorScheme:nt,getInitColorSchemeScript:st}=Be({themeId:P,theme:()=>Ve({cssVariables:!0}),colorSchemeStorageKey:R.colorSchemeStorageKey,modeStorageKey:R.modeStorageKey,defaultColorScheme:{light:R.defaultLightColorScheme,dark:R.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:Ke(e.palette,e.typography)};return t.unstable_sx=function(i){return Oe({sx:i,theme:this})},t}}),Xe=Je;function ct({theme:e,...t}){return typeof e=="function"?f.jsx(ye,{theme:e,...t}):"colorSchemes"in(P in e?e[P]:e)?f.jsx(Xe,{theme:e,...t}):f.jsx(ye,{theme:e,...t})}const it=Re`
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
`;export{it as G,ct as T,rt as u};
