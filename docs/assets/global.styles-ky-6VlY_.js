import{r as l}from"./index-CAe6R3bO.js";import{u as Ie,D as Le,G as De,T as _}from"./DefaultPropsProvider-CE9yCcll.js";import{j as g}from"./jsx-runtime-BTJTZTIL.js";import{R as _e}from"./index-Cr4NX4s1.js";import{T as Pe}from"./emotion-react.browser.esm-pxioRHjz.js";import{c as Ae,f as Ve,s as Ke}from"./createTheme-B9H9ZwjD.js";import{u as Oe}from"./useEnhancedEffect-DhebxzmZ.js";import{f as Re}from"./styled-components.browser.esm-DT3FsLGj.js";const Ce=l.createContext(null);function Y(){return l.useContext(Ce)}const Ne=typeof Symbol=="function"&&Symbol.for,We=Ne?Symbol.for("mui.nested"):"__THEME_NESTED__";function Ge(e,t){return typeof t=="function"?t(e):{...e,...t}}function ze(e){const{children:t,theme:r}=e,c=Y(),p=l.useMemo(()=>{const a=c===null?{...r}:Ge(c,r);return a!=null&&(a[We]=c!==null),a},[r,c]);return g.jsx(Ce.Provider,{value:p,children:t})}const Se={};function ge(e,t,r,c=!1){return l.useMemo(()=>{const p=e&&t[e]||t;if(typeof r=="function"){const a=r(p),o=e?{...t,[e]:a}:a;return c?()=>o:o}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,c])}function ke(e){const{children:t,theme:r,themeId:c}=e,p=Ie(Se),a=Y()||Se,o=ge(c,p,r),d=ge(c,a,r,!0),I=(c?o[c]:o).direction==="rtl";return g.jsx(ze,{theme:d,children:g.jsx(Pe.Provider,{value:o,children:g.jsx(_e,{value:I,children:g.jsx(Le,{value:c?o[c].components:o.components,children:t})})})})}const B="mode",J="color-scheme",He="data-color-scheme";function qe(e){const{defaultMode:t="system",defaultLightColorScheme:r="light",defaultDarkColorScheme:c="dark",modeStorageKey:p=B,colorSchemeStorageKey:a=J,attribute:o=He,colorSchemeNode:d="document.documentElement",nonce:I}=e||{};let m="",f=o;if(o==="class"&&(f=".%s"),o==="data"&&(f="[data-%s]"),f.startsWith(".")){const h=f.substring(1);m+=`${d}.classList.remove('${h}'.replace('%s', light), '${h}'.replace('%s', dark));
      ${d}.classList.add('${h}'.replace('%s', colorScheme));`}const b=f.match(/\[([^\]]+)\]/);if(b){const[h,T]=b[1].split("=");T||(m+=`${d}.removeAttribute('${h}'.replace('%s', light));
      ${d}.removeAttribute('${h}'.replace('%s', dark));`),m+=`
      ${d}.setAttribute('${h}'.replace('%s', colorScheme), ${T?`${T}.replace('%s', colorScheme)`:'""'});`}else m+=`${d}.setAttribute('${f}', colorScheme);`;return g.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?I:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${p}') || '${t}';
  const dark = localStorage.getItem('${a}-dark') || '${c}';
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
} catch(e){}})();`}},"mui-color-scheme-init")}function pe(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Me(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function Fe(e){return Me(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function Q(e,t){if(typeof window>"u")return;let r;try{r=localStorage.getItem(e)||void 0,r||localStorage.setItem(e,t)}catch{}return r||t}function Ue(e){const{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:c,supportedColorSchemes:p=[],modeStorageKey:a=B,colorSchemeStorageKey:o=J,storageWindow:d=typeof window>"u"?void 0:window,noSsr:I=!1}=e,m=p.join(","),f=p.length>1,[b,h]=l.useState(()=>{const n=Q(a,t),s=Q(`${o}-light`,r),i=Q(`${o}-dark`,c);return{mode:n,systemMode:pe(n),lightColorScheme:s,darkColorScheme:i}}),[T,N]=l.useState(I||!f);l.useEffect(()=>{N(!0)},[]);const W=Fe(b),K=l.useCallback(n=>{h(s=>{if(n===s.mode)return s;const i=n??t;try{localStorage.setItem(a,i)}catch{}return{...s,mode:i,systemMode:pe(i)}})},[a,t]),$=l.useCallback(n=>{n?typeof n=="string"?n&&!m.includes(n)?console.error(`\`${n}\` does not exist in \`theme.colorSchemes\`.`):h(s=>{const i={...s};return Me(s,w=>{try{localStorage.setItem(`${o}-${w}`,n)}catch{}w==="light"&&(i.lightColorScheme=n),w==="dark"&&(i.darkColorScheme=n)}),i}):h(s=>{const i={...s},w=n.light===null?r:n.light,y=n.dark===null?c:n.dark;if(w)if(!m.includes(w))console.error(`\`${w}\` does not exist in \`theme.colorSchemes\`.`);else{i.lightColorScheme=w;try{localStorage.setItem(`${o}-light`,w)}catch{}}if(y)if(!m.includes(y))console.error(`\`${y}\` does not exist in \`theme.colorSchemes\`.`);else{i.darkColorScheme=y;try{localStorage.setItem(`${o}-dark`,y)}catch{}}return i}):h(s=>{try{localStorage.setItem(`${o}-light`,r),localStorage.setItem(`${o}-dark`,c)}catch{}return{...s,lightColorScheme:r,darkColorScheme:c}})},[m,o,r,c]),O=l.useCallback(n=>{b.mode==="system"&&h(s=>{const i=n!=null&&n.matches?"dark":"light";return s.systemMode===i?s:{...s,systemMode:i}})},[b.mode]),L=l.useRef(O);return L.current=O,l.useEffect(()=>{if(typeof window.matchMedia!="function"||!f)return;const n=(...i)=>L.current(...i),s=window.matchMedia("(prefers-color-scheme: dark)");return s.addListener(n),n(s),()=>{s.removeListener(n)}},[f]),l.useEffect(()=>{if(d&&f){const n=s=>{const i=s.newValue;typeof s.key=="string"&&s.key.startsWith(o)&&(!i||m.match(i))&&(s.key.endsWith("light")&&$({light:i}),s.key.endsWith("dark")&&$({dark:i})),s.key===a&&(!i||["light","dark","system"].includes(i))&&K(i||t)};return d.addEventListener("storage",n),()=>{d.removeEventListener("storage",n)}}},[$,K,a,o,m,t,d,f]),{...b,mode:T?b.mode:void 0,systemMode:T?b.systemMode:void 0,colorScheme:T?W:void 0,setMode:K,setColorScheme:$}}const Qe="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Ye(e){const{themeId:t,theme:r={},modeStorageKey:c=B,colorSchemeStorageKey:p=J,disableTransitionOnChange:a=!1,defaultColorScheme:o,resolveTheme:d}=e,I={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},m=l.createContext(void 0),f=()=>l.useContext(m)||I,b={},h={};function T($){var me,he,ue,fe;const{children:O,theme:L,modeStorageKey:n=c,colorSchemeStorageKey:s=p,disableTransitionOnChange:i=a,storageWindow:w=typeof window>"u"?void 0:window,documentNode:y=typeof document>"u"?void 0:document,colorSchemeNode:v=typeof document>"u"?void 0:document.documentElement,disableNestedContext:be=!1,disableStyleSheetGeneration:we=!1,defaultMode:xe="system",noSsr:Te}=$,G=l.useRef(!1),z=Y(),H=l.useContext(m),q=!!H&&!be,X=l.useMemo(()=>L||(typeof r=="function"?r():r),[L]),Z=X[t],k=Z||X,{colorSchemes:j=b,components:ee=h,cssVarPrefix:F}=k,te=Object.keys(j).filter(u=>!!j[u]).join(","),D=l.useMemo(()=>te.split(","),[te]),oe=typeof o=="string"?o:o.light,re=typeof o=="string"?o:o.dark,ve=j[oe]&&j[re]?xe:((he=(me=j[k.defaultColorScheme])==null?void 0:me.palette)==null?void 0:he.mode)||((ue=k.palette)==null?void 0:ue.mode),{mode:Ee,setMode:ne,systemMode:se,lightColorScheme:ie,darkColorScheme:ce,colorScheme:$e,setColorScheme:le}=Ue({supportedColorSchemes:D,defaultLightColorScheme:oe,defaultDarkColorScheme:re,modeStorageKey:n,colorSchemeStorageKey:s,defaultMode:ve,storageWindow:w,noSsr:Te});let U=Ee,M=$e;q&&(U=H.mode,M=H.colorScheme);const P=l.useMemo(()=>{var V;const u=M||k.defaultColorScheme,S=((V=k.generateThemeVars)==null?void 0:V.call(k))||k.vars,C={...k,components:ee,colorSchemes:j,cssVarPrefix:F,vars:S};if(typeof C.generateSpacing=="function"&&(C.spacing=C.generateSpacing()),u){const x=j[u];x&&typeof x=="object"&&Object.keys(x).forEach(E=>{x[E]&&typeof x[E]=="object"?C[E]={...C[E],...x[E]}:C[E]=x[E]})}return d?d(C):C},[k,M,ee,j,F]),A=k.colorSchemeSelector;Oe(()=>{if(M&&v&&A&&A!=="media"){const u=A;let S=A;if(u==="class"&&(S=".%s"),u==="data"&&(S="[data-%s]"),u!=null&&u.startsWith("data-")&&!u.includes("%s")&&(S=`[${u}="%s"]`),S.startsWith("."))v.classList.remove(...D.map(C=>S.substring(1).replace("%s",C))),v.classList.add(S.substring(1).replace("%s",M));else{const C=S.replace("%s",M).match(/\[([^\]]+)\]/);if(C){const[V,x]=C[1].split("=");x||D.forEach(E=>{v.removeAttribute(V.replace(M,E))}),v.setAttribute(V,x?x.replace(/"|'/g,""):"")}else v.setAttribute(S,M)}}},[M,A,v,D]),l.useEffect(()=>{let u;if(i&&G.current&&y){const S=y.createElement("style");S.appendChild(y.createTextNode(Qe)),y.head.appendChild(S),window.getComputedStyle(y.body),u=setTimeout(()=>{y.head.removeChild(S)},1)}return()=>{clearTimeout(u)}},[M,i,y]),l.useEffect(()=>(G.current=!0,()=>{G.current=!1}),[]);const je=l.useMemo(()=>({allColorSchemes:D,colorScheme:M,darkColorScheme:ce,lightColorScheme:ie,mode:U,setColorScheme:le,setMode:ne,systemMode:se}),[D,M,ce,ie,U,le,ne,se,P.colorSchemeSelector]);let ae=!0;(we||k.cssVariables===!1||q&&(z==null?void 0:z.cssVarPrefix)===F)&&(ae=!1);const de=g.jsxs(l.Fragment,{children:[g.jsx(ke,{themeId:Z?t:void 0,theme:P,children:O}),ae&&g.jsx(De,{styles:((fe=P.generateStyleSheets)==null?void 0:fe.call(P))||[]})]});return q?de:g.jsx(m.Provider,{value:je,children:de})}const N=typeof o=="string"?o:o.light,W=typeof o=="string"?o:o.dark;return{CssVarsProvider:T,useColorScheme:f,getInitColorSchemeScript:$=>qe({colorSchemeStorageKey:p,defaultLightColorScheme:N,defaultDarkColorScheme:W,modeStorageKey:c,...$})}}function ye({theme:e,...t}){const r=_ in e?e[_]:void 0;return g.jsx(ke,{...t,themeId:r?_:void 0,theme:r||e})}const R={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:Be}=Ye({themeId:_,theme:()=>Ae({cssVariables:!0}),colorSchemeStorageKey:R.colorSchemeStorageKey,modeStorageKey:R.modeStorageKey,defaultColorScheme:{light:R.defaultLightColorScheme,dark:R.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:Ve(e.palette,e.typography)};return t.unstable_sx=function(c){return Ke({sx:c,theme:this})},t}}),Je=Be;function it({theme:e,...t}){return typeof e=="function"?g.jsx(ye,{theme:e,...t}):"colorSchemes"in(_ in e?e[_]:e)?g.jsx(Je,{theme:e,...t}):g.jsx(ye,{theme:e,...t})}const ct=Re`
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
`;export{ct as G,it as T};
