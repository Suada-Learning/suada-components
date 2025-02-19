var Pe=Object.defineProperty;var Ve=(t,e,n)=>e in t?Pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var se=(t,e,n)=>Ve(t,typeof e!="symbol"?e+"":e,n);import{r as l,R as H}from"./index-BsICj7Do.js";import{_ as Se,t as Be,v as we,w as oe,x as De,c as C,g as ae,s as Q,u as le,j as Le,a as je,f as ie,y as _,d as ke}from"./useSlot-BEsZemBB.js";import{j as N}from"./jsx-runtime-Be5KepTg.js";import{k as Z}from"./DefaultPropsProvider-BB0hjY0t.js";function it({controlled:t,default:e,name:n,state:a="value"}){const{current:s}=l.useRef(t!==void 0),[o,i]=l.useState(e),c=s?t:o,u=l.useCallback(f=>{s||i(f)},[]);return[c,u]}function re(t){try{return t.matches(":focus-visible")}catch{}return!1}function ve(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ee(t,e){var n=function(o){return e&&l.isValidElement(o)?e(o):o},a=Object.create(null);return t&&l.Children.map(t,function(s){return s}).forEach(function(s){a[s.key]=n(s)}),a}function Ne(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var a=Object.create(null),s=[];for(var o in t)o in e?s.length&&(a[o]=s,s=[]):s.push(o);var i,c={};for(var u in e){if(a[u])for(i=0;i<a[u].length;i++){var f=a[u][i];c[a[u][i]]=n(f)}c[u]=n(u)}for(i=0;i<s.length;i++)c[s[i]]=n(s[i]);return c}function v(t,e,n){return n[e]!=null?n[e]:t.props[e]}function $e(t,e){return ee(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:v(n,"appear",t),enter:v(n,"enter",t),exit:v(n,"exit",t)})})}function Ie(t,e,n){var a=ee(t.children),s=Ne(e,a);return Object.keys(s).forEach(function(o){var i=s[o];if(l.isValidElement(i)){var c=o in e,u=o in a,f=e[o],d=l.isValidElement(f)&&!f.props.in;u&&(!c||d)?s[o]=l.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:v(i,"exit",t),enter:v(i,"enter",t)}):!u&&c&&!d?s[o]=l.cloneElement(i,{in:!1}):u&&c&&l.isValidElement(f)&&(s[o]=l.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:v(i,"exit",t),enter:v(i,"enter",t)}))}}),s}var Fe=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Ue={component:"div",childFactory:function(e){return e}},te=function(t){Se(e,t);function e(a,s){var o;o=t.call(this,a,s)||this;var i=o.handleExited.bind(ve(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(s,o){var i=o.children,c=o.handleExited,u=o.firstRender;return{children:u?$e(s,c):Ie(s,i,c),firstRender:!1}},n.handleExited=function(s,o){var i=ee(this.props.children);s.key in i||(s.props.onExited&&s.props.onExited(o),this.mounted&&this.setState(function(c){var u=Be({},c.children);return delete u[s.key],{children:u}}))},n.render=function(){var s=this.props,o=s.component,i=s.childFactory,c=we(s,["component","childFactory"]),u=this.state.contextValue,f=Fe(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,o===null?H.createElement(oe.Provider,{value:u},f):H.createElement(oe.Provider,{value:u},H.createElement(o,c,f))},e}(H.Component);te.propTypes={};te.defaultProps=Ue;class G{constructor(){se(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const e=De(G.create).current,[n,a]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=a,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Oe(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function ze(){return G.use()}function Oe(){let t,e;const n=new Promise((a,s)=>{t=a,e=s});return n.resolve=t,n.reject=e,n}function Ae(t){const{className:e,classes:n,pulsate:a=!1,rippleX:s,rippleY:o,rippleSize:i,in:c,onExited:u,timeout:f}=t,[d,h]=l.useState(!1),M=C(e,n.ripple,n.rippleVisible,a&&n.ripplePulsate),V={width:i,height:i,top:-(i/2)+o,left:-(i/2)+s},b=C(n.child,d&&n.childLeaving,a&&n.childPulsate);return!c&&!d&&h(!0),l.useEffect(()=>{if(!c&&u!=null){const D=setTimeout(u,f);return()=>{clearTimeout(D)}}},[u,c,f]),N.jsx("span",{className:M,style:V,children:N.jsx("span",{className:b})})}const g=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Xe=80,Ye=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ke=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,We=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,He=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),_e=Q(Ae,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ye};
    animation-duration: ${J}ms;
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
    animation-name: ${Ke};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${We};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Ge=l.forwardRef(function(e,n){const a=le({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:o={},className:i,...c}=a,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),V=Le(),b=l.useRef(null),D=l.useRef(null),E=l.useCallback(p=>{const{pulsate:y,rippleX:R,rippleY:F,rippleSize:L,cb:U}=p;f(x=>[...x,N.jsx(_e,{classes:{ripple:C(o.ripple,g.ripple),rippleVisible:C(o.rippleVisible,g.rippleVisible),ripplePulsate:C(o.ripplePulsate,g.ripplePulsate),child:C(o.child,g.child),childLeaving:C(o.childLeaving,g.childLeaving),childPulsate:C(o.childPulsate,g.childPulsate)},timeout:J,pulsate:y,rippleX:R,rippleY:F,rippleSize:L},d.current)]),d.current+=1,h.current=U},[o]),$=l.useCallback((p={},y={},R=()=>{})=>{const{pulsate:F=!1,center:L=s||y.pulsate,fakeElement:U=!1}=y;if((p==null?void 0:p.type)==="mousedown"&&M.current){M.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(M.current=!0);const x=U?null:D.current,S=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,T,w;if(L||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)B=Math.round(S.width/2),T=Math.round(S.height/2);else{const{clientX:z,clientY:j}=p.touches&&p.touches.length>0?p.touches[0]:p;B=Math.round(z-S.left),T=Math.round(j-S.top)}if(L)w=Math.sqrt((2*S.width**2+S.height**2)/3),w%2===0&&(w+=1);else{const z=Math.max(Math.abs((x?x.clientWidth:0)-B),B)*2+2,j=Math.max(Math.abs((x?x.clientHeight:0)-T),T)*2+2;w=Math.sqrt(z**2+j**2)}p!=null&&p.touches?b.current===null&&(b.current=()=>{E({pulsate:F,rippleX:B,rippleY:T,rippleSize:w,cb:R})},V.start(Xe,()=>{b.current&&(b.current(),b.current=null)})):E({pulsate:F,rippleX:B,rippleY:T,rippleSize:w,cb:R})},[s,E,V]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),I=l.useCallback((p,y)=>{if(V.clear(),(p==null?void 0:p.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{I(p,y)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=y},[V]);return l.useImperativeHandle(n,()=>({pulsate:Y,start:$,stop:I}),[Y,$,I]),N.jsx(He,{className:C(g.root,o.root,i),ref:D,...c,children:N.jsx(te,{component:null,exit:!0,children:u})})});function qe(t){return je("MuiButtonBase",t)}const Je=ae("MuiButtonBase",["root","disabled","focusVisible"]),Qe=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:a,classes:s}=t,i=ke({root:["root",e&&"disabled",n&&"focusVisible"]},qe,s);return n&&a&&(i.root+=` ${a}`),i},Ze=Q("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Je.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),rt=l.forwardRef(function(e,n){const a=le({props:e,name:"MuiButtonBase"}),{action:s,centerRipple:o=!1,children:i,className:c,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:D,onClick:E,onContextMenu:$,onDragLeave:Y,onFocus:I,onFocusVisible:p,onKeyDown:y,onKeyUp:R,onMouseDown:F,onMouseLeave:L,onMouseUp:U,onTouchEnd:x,onTouchMove:S,onTouchStart:B,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:z,type:j,...O}=a,A=l.useRef(null),m=ze(),ue=ie(m.ref,z),[k,K]=l.useState(!1);f&&k&&K(!1),l.useImperativeHandle(s,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const ce=m.shouldMount&&!d&&!f;l.useEffect(()=>{k&&M&&!d&&m.pulsate()},[d,M,k,m]);const pe=P(m,"start",F,h),fe=P(m,"stop",$,h),de=P(m,"stop",Y,h),he=P(m,"stop",U,h),me=P(m,"stop",r=>{k&&r.preventDefault(),L&&L(r)},h),be=P(m,"start",B,h),ge=P(m,"stop",x,h),Me=P(m,"stop",S,h),Re=P(m,"stop",r=>{re(r.target)||K(!1),D&&D(r)},!1),ye=_(r=>{A.current||(A.current=r.currentTarget),re(r.target)&&(K(!0),p&&p(r)),I&&I(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},xe=_(r=>{M&&!r.repeat&&k&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),y&&y(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!f&&(r.preventDefault(),E&&E(r))}),Ce=_(r=>{M&&r.key===" "&&k&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),E&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&E(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=b);const X={};W==="button"?(X.type=j===void 0?"button":j,X.disabled=f):(!O.href&&!O.to&&(X.role="button"),f&&(X["aria-disabled"]=f));const Ee=ie(n,A),ne={...a,centerRipple:o,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:k},Te=Qe(ne);return N.jsxs(Ze,{as:W,className:C(Te.root,c),ownerState:ne,onBlur:Re,onClick:E,onContextMenu:fe,onFocus:ye,onKeyDown:xe,onKeyUp:Ce,onMouseDown:pe,onMouseLeave:me,onMouseUp:he,onDragLeave:de,onTouchEnd:ge,onTouchMove:Me,onTouchStart:be,ref:Ee,tabIndex:f?-1:T,type:j,...X,...O,children:[i,ce?N.jsx(Ge,{ref:ue,center:o,...w}):null]})});function P(t,e,n,a=!1){return _(s=>(n&&n(s),a||t[e](s),!0))}export{rt as B,re as i,it as u};
