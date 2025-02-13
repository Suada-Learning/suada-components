var Ve=Object.defineProperty;var we=(t,e,n)=>e in t?Ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var se=(t,e,n)=>we(t,typeof e!="symbol"?e+"":e,n);import{r as l,a as Be,R as H}from"./index-BsICj7Do.js";import{r as Ie,f as De,h as J,j as ke,_ as Le,k as je,l as Fe,T as re,n as Ne,b as y,a as ue,s as Z,u as ce,o as $e,g as ve,p as G,d as Ue}from"./ThemeProvider-DR-SbEpM.js";import{j as F}from"./jsx-runtime-Be5KepTg.js";import{k as ee}from"./global.styles-CLjrNNNp.js";let ie=0;function ze(t){const[e,n]=l.useState(t),i=t||e;return l.useEffect(()=>{e==null&&(ie+=1,n(`mui-${ie}`))},[e]),i}const Oe={...Be},ae=Oe.useId;function ht(t){if(ae!==void 0){const e=ae();return t??e}return ze(t)}function mt({controlled:t,default:e,name:n,state:i="value"}){const{current:o}=l.useRef(t!==void 0),[s,r]=l.useState(e),c=o?t:s,u=l.useCallback(p=>{o||r(p)},[]);return[c,u]}function le(t){try{return t.matches(":focus-visible")}catch{}return!1}function bt(t){var d;const{elementType:e,externalSlotProps:n,ownerState:i,skipResolvingSlotProps:o=!1,...s}=t,r=o?{}:Ie(n,i),{props:c,internalRef:u}=De({...s,externalSlotProps:r}),p=J(u,r==null?void 0:r.ref,(d=t.additionalProps)==null?void 0:d.ref);return ke(e,{...c,ref:p},i)}function Ae(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function te(t,e){var n=function(s){return e&&l.isValidElement(s)?e(s):s},i=Object.create(null);return t&&l.Children.map(t,function(o){return o}).forEach(function(o){i[o.key]=n(o)}),i}function Xe(t,e){t=t||{},e=e||{};function n(h){return h in e?e[h]:t[h]}var i=Object.create(null),o=[];for(var s in t)s in e?o.length&&(i[s]=o,o=[]):o.push(s);var r,c={};for(var u in e){if(i[u])for(r=0;r<i[u].length;r++){var p=i[u][r];c[i[u][r]]=n(p)}c[u]=n(u)}for(r=0;r<o.length;r++)c[o[r]]=n(o[r]);return c}function j(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Ye(t,e){return te(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:j(n,"appear",t),enter:j(n,"enter",t),exit:j(n,"exit",t)})})}function Ke(t,e,n){var i=te(t.children),o=Xe(e,i);return Object.keys(o).forEach(function(s){var r=o[s];if(l.isValidElement(r)){var c=s in e,u=s in i,p=e[s],h=l.isValidElement(p)&&!p.props.in;u&&(!c||h)?o[s]=l.cloneElement(r,{onExited:n.bind(null,r),in:!0,exit:j(r,"exit",t),enter:j(r,"enter",t)}):!u&&c&&!h?o[s]=l.cloneElement(r,{in:!1}):u&&c&&l.isValidElement(p)&&(o[s]=l.cloneElement(r,{onExited:n.bind(null,r),in:p.props.in,exit:j(r,"exit",t),enter:j(r,"enter",t)}))}}),o}var We=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},He={component:"div",childFactory:function(e){return e}},ne=function(t){Le(e,t);function e(i,o){var s;s=t.call(this,i,o)||this;var r=s.handleExited.bind(Ae(s));return s.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},s}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,s){var r=s.children,c=s.handleExited,u=s.firstRender;return{children:u?Ye(o,c):Ke(o,r,c),firstRender:!1}},n.handleExited=function(o,s){var r=te(this.props.children);o.key in r||(o.props.onExited&&o.props.onExited(s),this.mounted&&this.setState(function(c){var u=je({},c.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,s=o.component,r=o.childFactory,c=Fe(o,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(r);return delete c.appear,delete c.enter,delete c.exit,s===null?H.createElement(re.Provider,{value:u},p):H.createElement(re.Provider,{value:u},H.createElement(s,c,p))},e}(H.Component);ne.propTypes={};ne.defaultProps=He;class _{constructor(){se(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new _}static use(){const e=Ne(_.create).current,[n,i]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=i,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=_e(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Ge(){return _.use()}function _e(){let t,e;const n=new Promise((i,o)=>{t=i,e=o});return n.resolve=t,n.reject=e,n}function qe(t){const{className:e,classes:n,pulsate:i=!1,rippleX:o,rippleY:s,rippleSize:r,in:c,onExited:u,timeout:p}=t,[h,d]=l.useState(!1),M=y(e,n.ripple,n.rippleVisible,i&&n.ripplePulsate),S={width:r,height:r,top:-(r/2)+s,left:-(r/2)+o},b=y(n.child,h&&n.childLeaving,i&&n.childPulsate);return!c&&!h&&d(!0),l.useEffect(()=>{if(!c&&u!=null){const I=setTimeout(u,p);return()=>{clearTimeout(I)}}},[u,c,p]),F.jsx("span",{className:M,style:S,children:F.jsx("span",{className:b})})}const g=ue("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,Je=80,Qe=ee`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ze=ee`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,et=ee`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,tt=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),nt=Z(qe,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Qe};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Ze};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${et};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ot=l.forwardRef(function(e,n){const i=ce({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:r,...c}=i,[u,p]=l.useState([]),h=l.useRef(0),d=l.useRef(null);l.useEffect(()=>{d.current&&(d.current(),d.current=null)},[u]);const M=l.useRef(!1),S=$e(),b=l.useRef(null),I=l.useRef(null),E=l.useCallback(f=>{const{pulsate:C,rippleX:R,rippleY:v,rippleSize:D,cb:U}=f;p(x=>[...x,F.jsx(nt,{classes:{ripple:y(s.ripple,g.ripple),rippleVisible:y(s.rippleVisible,g.rippleVisible),ripplePulsate:y(s.ripplePulsate,g.ripplePulsate),child:y(s.child,g.child),childLeaving:y(s.childLeaving,g.childLeaving),childPulsate:y(s.childPulsate,g.childPulsate)},timeout:Q,pulsate:C,rippleX:R,rippleY:v,rippleSize:D},h.current)]),h.current+=1,d.current=U},[s]),N=l.useCallback((f={},C={},R=()=>{})=>{const{pulsate:v=!1,center:D=o||C.pulsate,fakeElement:U=!1}=C;if((f==null?void 0:f.type)==="mousedown"&&M.current){M.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(M.current=!0);const x=U?null:I.current,V=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let w,T,B;if(D||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)w=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:z,clientY:k}=f.touches&&f.touches.length>0?f.touches[0]:f;w=Math.round(z-V.left),T=Math.round(k-V.top)}if(D)B=Math.sqrt((2*V.width**2+V.height**2)/3),B%2===0&&(B+=1);else{const z=Math.max(Math.abs((x?x.clientWidth:0)-w),w)*2+2,k=Math.max(Math.abs((x?x.clientHeight:0)-T),T)*2+2;B=Math.sqrt(z**2+k**2)}f!=null&&f.touches?b.current===null&&(b.current=()=>{E({pulsate:v,rippleX:w,rippleY:T,rippleSize:B,cb:R})},S.start(Je,()=>{b.current&&(b.current(),b.current=null)})):E({pulsate:v,rippleX:w,rippleY:T,rippleSize:B,cb:R})},[o,E,S]),Y=l.useCallback(()=>{N({},{pulsate:!0})},[N]),$=l.useCallback((f,C)=>{if(S.clear(),(f==null?void 0:f.type)==="touchend"&&b.current){b.current(),b.current=null,S.start(0,()=>{$(f,C)});return}b.current=null,p(R=>R.length>0?R.slice(1):R),d.current=C},[S]);return l.useImperativeHandle(n,()=>({pulsate:Y,start:N,stop:$}),[Y,N,$]),F.jsx(tt,{className:y(g.root,s.root,r),ref:I,...c,children:F.jsx(ne,{component:null,exit:!0,children:u})})});function st(t){return ve("MuiButtonBase",t)}const rt=ue("MuiButtonBase",["root","disabled","focusVisible"]),it=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:i,classes:o}=t,r=Ue({root:["root",e&&"disabled",n&&"focusVisible"]},st,o);return n&&i&&(r.root+=` ${i}`),r},at=Z("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${rt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),gt=l.forwardRef(function(e,n){const i=ce({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:s=!1,children:r,className:c,component:u="button",disabled:p=!1,disableRipple:h=!1,disableTouchRipple:d=!1,focusRipple:M=!1,focusVisibleClassName:S,LinkComponent:b="a",onBlur:I,onClick:E,onContextMenu:N,onDragLeave:Y,onFocus:$,onFocusVisible:f,onKeyDown:C,onKeyUp:R,onMouseDown:v,onMouseLeave:D,onMouseUp:U,onTouchEnd:x,onTouchMove:V,onTouchStart:w,tabIndex:T=0,TouchRippleProps:B,touchRippleRef:z,type:k,...O}=i,A=l.useRef(null),m=Ge(),pe=J(m.ref,z),[L,K]=l.useState(!1);p&&L&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const fe=m.shouldMount&&!h&&!p;l.useEffect(()=>{L&&M&&!h&&m.pulsate()},[h,M,L,m]);const de=P(m,"start",v,d),he=P(m,"stop",N,d),me=P(m,"stop",Y,d),be=P(m,"stop",U,d),ge=P(m,"stop",a=>{L&&a.preventDefault(),D&&D(a)},d),Me=P(m,"start",w,d),Re=P(m,"stop",x,d),Ce=P(m,"stop",V,d),xe=P(m,"stop",a=>{le(a.target)||K(!1),I&&I(a)},!1),ye=G(a=>{A.current||(A.current=a.currentTarget),le(a.target)&&(K(!0),f&&f(a)),$&&$(a)}),q=()=>{const a=A.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},Ee=G(a=>{M&&!a.repeat&&L&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&q()&&a.key===" "&&a.preventDefault(),C&&C(a),a.target===a.currentTarget&&q()&&a.key==="Enter"&&!p&&(a.preventDefault(),E&&E(a))}),Te=G(a=>{M&&a.key===" "&&L&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),E&&a.target===a.currentTarget&&q()&&a.key===" "&&!a.defaultPrevented&&E(a)});let W=u;W==="button"&&(O.href||O.to)&&(W=b);const X={};W==="button"?(X.type=k===void 0?"button":k,X.disabled=p):(!O.href&&!O.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const Pe=J(n,A),oe={...i,centerRipple:s,component:u,disabled:p,disableRipple:h,disableTouchRipple:d,focusRipple:M,tabIndex:T,focusVisible:L},Se=it(oe);return F.jsxs(at,{as:W,className:y(Se.root,c),ownerState:oe,onBlur:xe,onClick:E,onContextMenu:he,onFocus:ye,onKeyDown:Ee,onKeyUp:Te,onMouseDown:de,onMouseLeave:ge,onMouseUp:be,onDragLeave:me,onTouchEnd:Re,onTouchMove:Ce,onTouchStart:Me,ref:Pe,tabIndex:p?-1:T,type:k,...X,...O,children:[r,fe?F.jsx(ot,{ref:pe,center:s,...B}):null]})});function P(t,e,n,i=!1){return G(o=>(n&&n(o),i||t[e](o),!0))}const lt=l.createContext(void 0);function Mt(){return l.useContext(lt)}export{gt as B,lt as F,Mt as a,bt as b,mt as c,le as i,ht as u};
