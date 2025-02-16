var Ve=Object.defineProperty;var Be=(t,e,n)=>e in t?Ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var se=(t,e,n)=>Be(t,typeof e!="symbol"?e+"":e,n);import{r as l,a as Ie,R as _}from"./index-BsICj7Do.js";import{r as De,f as ke,h as J,j as we,_ as Le,T as re,k as je,b as y,a as ue,s as Z,u as ce,l as Fe,g as Ne,n as H,d as $e}from"./Grow-HfH_tyoM.js";import{j as F}from"./jsx-runtime-Be5KepTg.js";import{k as ee}from"./global.styles-BXW-5976.js";import{_ as ve,a as Ue}from"./ThemeProvider-D7YOJeXe.js";import{_ as ze}from"./assertThisInitialized-DYA3nViS.js";let ie=0;function Oe(t){const[e,n]=l.useState(t),i=t||e;return l.useEffect(()=>{e==null&&(ie+=1,n(`mui-${ie}`))},[e]),i}const Ae={...Ie},ae=Ae.useId;function gt(t){if(ae!==void 0){const e=ae();return t??e}return Oe(t)}function bt({controlled:t,default:e,name:n,state:i="value"}){const{current:o}=l.useRef(t!==void 0),[s,r]=l.useState(e),c=o?t:s,u=l.useCallback(p=>{o||r(p)},[]);return[c,u]}function le(t){try{return t.matches(":focus-visible")}catch{}return!1}function Mt(t){var d;const{elementType:e,externalSlotProps:n,ownerState:i,skipResolvingSlotProps:o=!1,...s}=t,r=o?{}:De(n,i),{props:c,internalRef:u}=ke({...s,externalSlotProps:r}),p=J(u,r==null?void 0:r.ref,(d=t.additionalProps)==null?void 0:d.ref);return we(e,{...c,ref:p},i)}function te(t,e){var n=function(s){return e&&l.isValidElement(s)?e(s):s},i=Object.create(null);return t&&l.Children.map(t,function(o){return o}).forEach(function(o){i[o.key]=n(o)}),i}function Xe(t,e){t=t||{},e=e||{};function n(h){return h in e?e[h]:t[h]}var i=Object.create(null),o=[];for(var s in t)s in e?o.length&&(i[s]=o,o=[]):o.push(s);var r,c={};for(var u in e){if(i[u])for(r=0;r<i[u].length;r++){var p=i[u][r];c[i[u][r]]=n(p)}c[u]=n(u)}for(r=0;r<o.length;r++)c[o[r]]=n(o[r]);return c}function j(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Ye(t,e){return te(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:j(n,"appear",t),enter:j(n,"enter",t),exit:j(n,"exit",t)})})}function Ke(t,e,n){var i=te(t.children),o=Xe(e,i);return Object.keys(o).forEach(function(s){var r=o[s];if(l.isValidElement(r)){var c=s in e,u=s in i,p=e[s],h=l.isValidElement(p)&&!p.props.in;u&&(!c||h)?o[s]=l.cloneElement(r,{onExited:n.bind(null,r),in:!0,exit:j(r,"exit",t),enter:j(r,"enter",t)}):!u&&c&&!h?o[s]=l.cloneElement(r,{in:!1}):u&&c&&l.isValidElement(p)&&(o[s]=l.cloneElement(r,{onExited:n.bind(null,r),in:p.props.in,exit:j(r,"exit",t),enter:j(r,"enter",t)}))}}),o}var We=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},_e={component:"div",childFactory:function(e){return e}},ne=function(t){Le(e,t);function e(i,o){var s;s=t.call(this,i,o)||this;var r=s.handleExited.bind(ze(s));return s.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},s}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,s){var r=s.children,c=s.handleExited,u=s.firstRender;return{children:u?Ye(o,c):Ke(o,r,c),firstRender:!1}},n.handleExited=function(o,s){var r=te(this.props.children);o.key in r||(o.props.onExited&&o.props.onExited(s),this.mounted&&this.setState(function(c){var u=ve({},c.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,s=o.component,r=o.childFactory,c=Ue(o,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(r);return delete c.appear,delete c.enter,delete c.exit,s===null?_.createElement(re.Provider,{value:u},p):_.createElement(re.Provider,{value:u},_.createElement(s,c,p))},e}(_.Component);ne.propTypes={};ne.defaultProps=_e;class G{constructor(){se(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const e=je(G.create).current,[n,i]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=i,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Ge(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function He(){return G.use()}function Ge(){let t,e;const n=new Promise((i,o)=>{t=i,e=o});return n.resolve=t,n.reject=e,n}function qe(t){const{className:e,classes:n,pulsate:i=!1,rippleX:o,rippleY:s,rippleSize:r,in:c,onExited:u,timeout:p}=t,[h,d]=l.useState(!1),M=y(e,n.ripple,n.rippleVisible,i&&n.ripplePulsate),S={width:r,height:r,top:-(r/2)+s,left:-(r/2)+o},g=y(n.child,h&&n.childLeaving,i&&n.childPulsate);return!c&&!h&&d(!0),l.useEffect(()=>{if(!c&&u!=null){const D=setTimeout(u,p);return()=>{clearTimeout(D)}}},[u,c,p]),F.jsx("span",{className:M,style:S,children:F.jsx("span",{className:g})})}const b=ue("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,Je=80,Qe=ee`
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

  &.${b.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Qe};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${b.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${b.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${b.childLeaving} {
    opacity: 0;
    animation-name: ${Ze};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${b.childPulsate} {
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
`,ot=l.forwardRef(function(e,n){const i=ce({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:r,...c}=i,[u,p]=l.useState([]),h=l.useRef(0),d=l.useRef(null);l.useEffect(()=>{d.current&&(d.current(),d.current=null)},[u]);const M=l.useRef(!1),S=Fe(),g=l.useRef(null),D=l.useRef(null),E=l.useCallback(f=>{const{pulsate:C,rippleX:R,rippleY:v,rippleSize:k,cb:U}=f;p(x=>[...x,F.jsx(nt,{classes:{ripple:y(s.ripple,b.ripple),rippleVisible:y(s.rippleVisible,b.rippleVisible),ripplePulsate:y(s.ripplePulsate,b.ripplePulsate),child:y(s.child,b.child),childLeaving:y(s.childLeaving,b.childLeaving),childPulsate:y(s.childPulsate,b.childPulsate)},timeout:Q,pulsate:C,rippleX:R,rippleY:v,rippleSize:k},h.current)]),h.current+=1,d.current=U},[s]),N=l.useCallback((f={},C={},R=()=>{})=>{const{pulsate:v=!1,center:k=o||C.pulsate,fakeElement:U=!1}=C;if((f==null?void 0:f.type)==="mousedown"&&M.current){M.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(M.current=!0);const x=U?null:D.current,V=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,T,I;if(k||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)B=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:z,clientY:w}=f.touches&&f.touches.length>0?f.touches[0]:f;B=Math.round(z-V.left),T=Math.round(w-V.top)}if(k)I=Math.sqrt((2*V.width**2+V.height**2)/3),I%2===0&&(I+=1);else{const z=Math.max(Math.abs((x?x.clientWidth:0)-B),B)*2+2,w=Math.max(Math.abs((x?x.clientHeight:0)-T),T)*2+2;I=Math.sqrt(z**2+w**2)}f!=null&&f.touches?g.current===null&&(g.current=()=>{E({pulsate:v,rippleX:B,rippleY:T,rippleSize:I,cb:R})},S.start(Je,()=>{g.current&&(g.current(),g.current=null)})):E({pulsate:v,rippleX:B,rippleY:T,rippleSize:I,cb:R})},[o,E,S]),Y=l.useCallback(()=>{N({},{pulsate:!0})},[N]),$=l.useCallback((f,C)=>{if(S.clear(),(f==null?void 0:f.type)==="touchend"&&g.current){g.current(),g.current=null,S.start(0,()=>{$(f,C)});return}g.current=null,p(R=>R.length>0?R.slice(1):R),d.current=C},[S]);return l.useImperativeHandle(n,()=>({pulsate:Y,start:N,stop:$}),[Y,N,$]),F.jsx(tt,{className:y(b.root,s.root,r),ref:D,...c,children:F.jsx(ne,{component:null,exit:!0,children:u})})});function st(t){return Ne("MuiButtonBase",t)}const rt=ue("MuiButtonBase",["root","disabled","focusVisible"]),it=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:i,classes:o}=t,r=$e({root:["root",e&&"disabled",n&&"focusVisible"]},st,o);return n&&i&&(r.root+=` ${i}`),r},at=Z("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${rt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Rt=l.forwardRef(function(e,n){const i=ce({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:s=!1,children:r,className:c,component:u="button",disabled:p=!1,disableRipple:h=!1,disableTouchRipple:d=!1,focusRipple:M=!1,focusVisibleClassName:S,LinkComponent:g="a",onBlur:D,onClick:E,onContextMenu:N,onDragLeave:Y,onFocus:$,onFocusVisible:f,onKeyDown:C,onKeyUp:R,onMouseDown:v,onMouseLeave:k,onMouseUp:U,onTouchEnd:x,onTouchMove:V,onTouchStart:B,tabIndex:T=0,TouchRippleProps:I,touchRippleRef:z,type:w,...O}=i,A=l.useRef(null),m=He(),pe=J(m.ref,z),[L,K]=l.useState(!1);p&&L&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const fe=m.shouldMount&&!h&&!p;l.useEffect(()=>{L&&M&&!h&&m.pulsate()},[h,M,L,m]);const de=P(m,"start",v,d),he=P(m,"stop",N,d),me=P(m,"stop",Y,d),ge=P(m,"stop",U,d),be=P(m,"stop",a=>{L&&a.preventDefault(),k&&k(a)},d),Me=P(m,"start",B,d),Re=P(m,"stop",x,d),Ce=P(m,"stop",V,d),xe=P(m,"stop",a=>{le(a.target)||K(!1),D&&D(a)},!1),ye=H(a=>{A.current||(A.current=a.currentTarget),le(a.target)&&(K(!0),f&&f(a)),$&&$(a)}),q=()=>{const a=A.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},Ee=H(a=>{M&&!a.repeat&&L&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&q()&&a.key===" "&&a.preventDefault(),C&&C(a),a.target===a.currentTarget&&q()&&a.key==="Enter"&&!p&&(a.preventDefault(),E&&E(a))}),Te=H(a=>{M&&a.key===" "&&L&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),E&&a.target===a.currentTarget&&q()&&a.key===" "&&!a.defaultPrevented&&E(a)});let W=u;W==="button"&&(O.href||O.to)&&(W=g);const X={};W==="button"?(X.type=w===void 0?"button":w,X.disabled=p):(!O.href&&!O.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const Pe=J(n,A),oe={...i,centerRipple:s,component:u,disabled:p,disableRipple:h,disableTouchRipple:d,focusRipple:M,tabIndex:T,focusVisible:L},Se=it(oe);return F.jsxs(at,{as:W,className:y(Se.root,c),ownerState:oe,onBlur:xe,onClick:E,onContextMenu:he,onFocus:ye,onKeyDown:Ee,onKeyUp:Te,onMouseDown:de,onMouseLeave:be,onMouseUp:ge,onDragLeave:me,onTouchEnd:Re,onTouchMove:Ce,onTouchStart:Me,ref:Pe,tabIndex:p?-1:T,type:w,...X,...O,children:[r,fe?F.jsx(ot,{ref:pe,center:s,...I}):null]})});function P(t,e,n,i=!1){return H(o=>(n&&n(o),i||t[e](o),!0))}const lt=l.createContext(void 0);function Ct(){return l.useContext(lt)}export{Rt as B,lt as F,Ct as a,Mt as b,bt as c,le as i,gt as u};
