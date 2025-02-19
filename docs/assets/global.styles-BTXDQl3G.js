import{r as l}from"./index-BsICj7Do.js";import{a as je,b as Le,D as De,u as _e,G as Pe,T as _}from"./DefaultPropsProvider-BB0hjY0t.js";import{j as g}from"./jsx-runtime-Be5KepTg.js";import{R as Ae}from"./index-Dpg-LJl0.js";import{c as Ve,h as Ke,s as Oe,j as Re}from"./createTheme-B4pomYAW.js";const Ce=l.createContext(null);function Y(){return l.useContext(Ce)}const Ge=typeof Symbol=="function"&&Symbol.for,Ne=Ge?Symbol.for("mui.nested"):"__THEME_NESTED__";function We(e,t){return typeof t=="function"?t(e):{...e,...t}}function ze(e){const{children:t,theme:r}=e,i=Y(),p=l.useMemo(()=>{const a=i===null?{...r}:We(i,r);return a!=null&&(a[Ne]=i!==null),a},[r,i]);return g.jsx(Ce.Provider,{value:p,children:t})}const Se={};function ge(e,t,r,i=!1){return l.useMemo(()=>{const p=e&&t[e]||t;if(typeof r=="function"){const a=r(p),o=e?{...t,[e]:a}:a;return i?()=>o:o}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,i])}function ke(e){const{children:t,theme:r,themeId:i}=e,p=je(Se),a=Y()||Se,o=ge(i,p,r),d=ge(i,a,r,!0),j=(i?o[i]:o).direction==="rtl";return g.jsx(ze,{theme:d,children:g.jsx(Le.Provider,{value:o,children:g.jsx(Ae,{value:j,children:g.jsx(De,{value:i?o[i].components:o.components,children:t})})})})}const B="mode",J="color-scheme",He="data-color-scheme";function qe(e){const{defaultMode:t="system",defaultLightColorScheme:r="light",defaultDarkColorScheme:i="dark",modeStorageKey:p=B,colorSchemeStorageKey:a=J,attribute:o=He,colorSchemeNode:d="document.documentElement",nonce:j}=e;let m="",f=o;if(o==="class"&&(f=".%s"),o==="data"&&(f="[data-%s]"),f.startsWith(".")){const u=f.substring(1);m+=`${d}.classList.remove('${u}'.replace('%s', light), '${u}'.replace('%s', dark));
      ${d}.classList.add('${u}'.replace('%s', colorScheme));`}const b=f.match(/\[([^\]]+)\]/);if(b){const[u,T]=b[1].split("=");T||(m+=`${d}.removeAttribute('${u}'.replace('%s', light));
      ${d}.removeAttribute('${u}'.replace('%s', dark));`),m+=`
      ${d}.setAttribute('${u}'.replace('%s', colorScheme), ${T?`${T}.replace('%s', colorScheme)`:'""'});`}else m+=`${d}.setAttribute('${f}', colorScheme);`;return g.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?j:"",dangerouslySetInnerHTML:{__html:`(function() {
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
} catch(e){}})();`}},"mui-color-scheme-init")}function pe(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Me(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function Fe(e){return Me(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function Q(e,t){if(typeof window>"u")return;let r;try{r=localStorage.getItem(e)||void 0,r||localStorage.setItem(e,t)}catch{}return r||t}function Ue(e){const{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:i,supportedColorSchemes:p=[],modeStorageKey:a=B,colorSchemeStorageKey:o=J,storageWindow:d=typeof window>"u"?void 0:window,noSsr:j=!1}=e,m=p.join(","),f=p.length>1,[b,u]=l.useState(()=>{const n=Q(a,t),s=Q(`${o}-light`,r),c=Q(`${o}-dark`,i);return{mode:n,systemMode:pe(n),lightColorScheme:s,darkColorScheme:c}}),[T,G]=l.useState(j||!f);l.useEffect(()=>{G(!0)},[]);const N=Fe(b),K=l.useCallback(n=>{u(s=>{if(n===s.mode)return s;const c=n??t;try{localStorage.setItem(a,c)}catch{}return{...s,mode:c,systemMode:pe(c)}})},[a,t]),v=l.useCallback(n=>{n?typeof n=="string"?n&&!m.includes(n)?console.error(`\`${n}\` does not exist in \`theme.colorSchemes\`.`):u(s=>{const c={...s};return Me(s,w=>{try{localStorage.setItem(`${o}-${w}`,n)}catch{}w==="light"&&(c.lightColorScheme=n),w==="dark"&&(c.darkColorScheme=n)}),c}):u(s=>{const c={...s},w=n.light===null?r:n.light,y=n.dark===null?i:n.dark;if(w)if(!m.includes(w))console.error(`\`${w}\` does not exist in \`theme.colorSchemes\`.`);else{c.lightColorScheme=w;try{localStorage.setItem(`${o}-light`,w)}catch{}}if(y)if(!m.includes(y))console.error(`\`${y}\` does not exist in \`theme.colorSchemes\`.`);else{c.darkColorScheme=y;try{localStorage.setItem(`${o}-dark`,y)}catch{}}return c}):u(s=>{try{localStorage.setItem(`${o}-light`,r),localStorage.setItem(`${o}-dark`,i)}catch{}return{...s,lightColorScheme:r,darkColorScheme:i}})},[m,o,r,i]),O=l.useCallback(n=>{b.mode==="system"&&u(s=>{const c=n!=null&&n.matches?"dark":"light";return s.systemMode===c?s:{...s,systemMode:c}})},[b.mode]),L=l.useRef(O);return L.current=O,l.useEffect(()=>{if(typeof window.matchMedia!="function"||!f)return;const n=(...c)=>L.current(...c),s=window.matchMedia("(prefers-color-scheme: dark)");return s.addListener(n),n(s),()=>{s.removeListener(n)}},[f]),l.useEffect(()=>{if(d&&f){const n=s=>{const c=s.newValue;typeof s.key=="string"&&s.key.startsWith(o)&&(!c||m.match(c))&&(s.key.endsWith("light")&&v({light:c}),s.key.endsWith("dark")&&v({dark:c})),s.key===a&&(!c||["light","dark","system"].includes(c))&&K(c||t)};return d.addEventListener("storage",n),()=>{d.removeEventListener("storage",n)}}},[v,K,a,o,m,t,d,f]),{...b,mode:T?b.mode:void 0,systemMode:T?b.systemMode:void 0,colorScheme:T?N:void 0,setMode:K,setColorScheme:v}}const Qe="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Ye(e){const{themeId:t,theme:r={},modeStorageKey:i=B,colorSchemeStorageKey:p=J,disableTransitionOnChange:a=!1,defaultColorScheme:o,resolveTheme:d}=e,j={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},m=l.createContext(void 0),f=()=>l.useContext(m)||j,b={},u={};function T(v){var me,ue,he,fe;const{children:O,theme:L,modeStorageKey:n=i,colorSchemeStorageKey:s=p,disableTransitionOnChange:c=a,storageWindow:w=typeof window>"u"?void 0:window,documentNode:y=typeof document>"u"?void 0:document,colorSchemeNode:E=typeof document>"u"?void 0:document.documentElement,disableNestedContext:be=!1,disableStyleSheetGeneration:we=!1,defaultMode:xe="system",noSsr:Te}=v,W=l.useRef(!1),z=Y(),H=l.useContext(m),q=!!H&&!be,X=l.useMemo(()=>L||(typeof r=="function"?r():r),[L]),Z=X[t],k=Z||X,{colorSchemes:I=b,components:ee=u,cssVarPrefix:F}=k,te=Object.keys(I).filter(h=>!!I[h]).join(","),D=l.useMemo(()=>te.split(","),[te]),oe=typeof o=="string"?o:o.light,re=typeof o=="string"?o:o.dark,Ee=I[oe]&&I[re]?xe:((ue=(me=I[k.defaultColorScheme])==null?void 0:me.palette)==null?void 0:ue.mode)||((he=k.palette)==null?void 0:he.mode),{mode:$e,setMode:ne,systemMode:se,lightColorScheme:ce,darkColorScheme:ie,colorScheme:ve,setColorScheme:le}=Ue({supportedColorSchemes:D,defaultLightColorScheme:oe,defaultDarkColorScheme:re,modeStorageKey:n,colorSchemeStorageKey:s,defaultMode:Ee,storageWindow:w,noSsr:Te});let U=$e,M=ve;q&&(U=H.mode,M=H.colorScheme);const P=l.useMemo(()=>{var V;const h=M||k.defaultColorScheme,S=((V=k.generateThemeVars)==null?void 0:V.call(k))||k.vars,C={...k,components:ee,colorSchemes:I,cssVarPrefix:F,vars:S};if(typeof C.generateSpacing=="function"&&(C.spacing=C.generateSpacing()),h){const x=I[h];x&&typeof x=="object"&&Object.keys(x).forEach($=>{x[$]&&typeof x[$]=="object"?C[$]={...C[$],...x[$]}:C[$]=x[$]})}return d?d(C):C},[k,M,ee,I,F]),A=k.colorSchemeSelector;_e(()=>{if(M&&E&&A&&A!=="media"){const h=A;let S=A;if(h==="class"&&(S=".%s"),h==="data"&&(S="[data-%s]"),h!=null&&h.startsWith("data-")&&!h.includes("%s")&&(S=`[${h}="%s"]`),S.startsWith("."))E.classList.remove(...D.map(C=>S.substring(1).replace("%s",C))),E.classList.add(S.substring(1).replace("%s",M));else{const C=S.replace("%s",M).match(/\[([^\]]+)\]/);if(C){const[V,x]=C[1].split("=");x||D.forEach($=>{E.removeAttribute(V.replace(M,$))}),E.setAttribute(V,x?x.replace(/"|'/g,""):"")}else E.setAttribute(S,M)}}},[M,A,E,D]),l.useEffect(()=>{let h;if(c&&W.current&&y){const S=y.createElement("style");S.appendChild(y.createTextNode(Qe)),y.head.appendChild(S),window.getComputedStyle(y.body),h=setTimeout(()=>{y.head.removeChild(S)},1)}return()=>{clearTimeout(h)}},[M,c,y]),l.useEffect(()=>(W.current=!0,()=>{W.current=!1}),[]);const Ie=l.useMemo(()=>({allColorSchemes:D,colorScheme:M,darkColorScheme:ie,lightColorScheme:ce,mode:U,setColorScheme:le,setMode:ne,systemMode:se}),[D,M,ie,ce,U,le,ne,se,P.colorSchemeSelector]);let ae=!0;(we||k.cssVariables===!1||q&&(z==null?void 0:z.cssVarPrefix)===F)&&(ae=!1);const de=g.jsxs(l.Fragment,{children:[g.jsx(ke,{themeId:Z?t:void 0,theme:P,children:O}),ae&&g.jsx(Pe,{styles:((fe=P.generateStyleSheets)==null?void 0:fe.call(P))||[]})]});return q?de:g.jsx(m.Provider,{value:Ie,children:de})}const G=typeof o=="string"?o:o.light,N=typeof o=="string"?o:o.dark;return{CssVarsProvider:T,useColorScheme:f,getInitColorSchemeScript:v=>qe({colorSchemeStorageKey:p,defaultLightColorScheme:G,defaultDarkColorScheme:N,modeStorageKey:i,...v})}}function ye({theme:e,...t}){const r=_ in e?e[_]:void 0;return g.jsx(ke,{...t,themeId:r?_:void 0,theme:r||e})}const R={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:Be,useColorScheme:rt,getInitColorSchemeScript:nt}=Ye({themeId:_,theme:()=>Ve({cssVariables:!0}),colorSchemeStorageKey:R.colorSchemeStorageKey,modeStorageKey:R.modeStorageKey,defaultColorScheme:{light:R.defaultLightColorScheme,dark:R.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:Ke(e.palette,e.typography)};return t.unstable_sx=function(i){return Oe({sx:i,theme:this})},t}}),Je=Be;function st({theme:e,...t}){return typeof e=="function"?g.jsx(ye,{theme:e,...t}):"colorSchemes"in(_ in e?e[_]:e)?g.jsx(Je,{theme:e,...t}):g.jsx(ye,{theme:e,...t})}const ct=Re`
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
`;export{ct as G,st as T};
