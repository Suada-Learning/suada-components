"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const wr=require("react"),ve=require("styled-components");var U={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or;function pe(){if(Or)return $;Or=1;var l=wr,T=Symbol.for("react.element"),D=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,w=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function k(h,f,E){var b,R={},O=null,M=null;E!==void 0&&(O=""+E),f.key!==void 0&&(O=""+f.key),f.ref!==void 0&&(M=f.ref);for(b in f)y.call(f,b)&&!P.hasOwnProperty(b)&&(R[b]=f[b]);if(h&&h.defaultProps)for(b in f=h.defaultProps,f)R[b]===void 0&&(R[b]=f[b]);return{$$typeof:T,type:h,key:O,ref:M,props:R,_owner:w.current}}return $.Fragment=D,$.jsx=k,$.jsxs=k,$}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr;function be(){return Sr||(Sr=1,process.env.NODE_ENV!=="production"&&function(){var l=wr,T=Symbol.for("react.element"),D=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),Q=Symbol.iterator,Cr="@@iterator";function jr(r){if(r===null||typeof r!="object")return null;var e=Q&&r[Q]||r[Cr];return typeof e=="function"?e:null}var C=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(r){{for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];Ar("error",r,t)}}function Ar(r,e,t){{var a=C.ReactDebugCurrentFrame,i=a.getStackAddendum();i!==""&&(e+="%s",t=t.concat([i]));var s=t.map(function(o){return String(o)});s.unshift("Warning: "+e),Function.prototype.apply.call(console[r],console,s)}}var Dr=!1,Fr=!1,Ir=!1,$r=!1,Yr=!1,rr;rr=Symbol.for("react.module.reference");function Mr(r){return!!(typeof r=="string"||typeof r=="function"||r===y||r===P||Yr||r===w||r===E||r===b||$r||r===M||Dr||Fr||Ir||typeof r=="object"&&r!==null&&(r.$$typeof===O||r.$$typeof===R||r.$$typeof===k||r.$$typeof===h||r.$$typeof===f||r.$$typeof===rr||r.getModuleId!==void 0))}function Wr(r,e,t){var a=r.displayName;if(a)return a;var i=e.displayName||e.name||"";return i!==""?t+"("+i+")":t}function er(r){return r.displayName||"Context"}function _(r){if(r==null)return null;if(typeof r.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case y:return"Fragment";case D:return"Portal";case P:return"Profiler";case w:return"StrictMode";case E:return"Suspense";case b:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case h:var e=r;return er(e)+".Consumer";case k:var t=r;return er(t._context)+".Provider";case f:return Wr(r,r.render,"ForwardRef");case R:var a=r.displayName||null;return a!==null?a:_(r.type)||"Memo";case O:{var i=r,s=i._payload,o=i._init;try{return _(o(s))}catch{return null}}}return null}var S=Object.assign,F=0,tr,ar,nr,or,ir,lr,sr;function ur(){}ur.__reactDisabledLog=!0;function Vr(){{if(F===0){tr=console.log,ar=console.info,nr=console.warn,or=console.error,ir=console.group,lr=console.groupCollapsed,sr=console.groupEnd;var r={configurable:!0,enumerable:!0,value:ur,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}F++}}function Lr(){{if(F--,F===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:S({},r,{value:tr}),info:S({},r,{value:ar}),warn:S({},r,{value:nr}),error:S({},r,{value:or}),group:S({},r,{value:ir}),groupCollapsed:S({},r,{value:lr}),groupEnd:S({},r,{value:sr})})}F<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=C.ReactCurrentDispatcher,G;function W(r,e,t){{if(G===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);G=a&&a[1]||""}return`
`+G+r}}var J=!1,V;{var Nr=typeof WeakMap=="function"?WeakMap:Map;V=new Nr}function cr(r,e){if(!r||J)return"";{var t=V.get(r);if(t!==void 0)return t}var a;J=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=q.current,q.current=null,Vr();try{if(e){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(p){a=p}Reflect.construct(r,[],o)}else{try{o.call()}catch(p){a=p}r.call(o.prototype)}}else{try{throw Error()}catch(p){a=p}r()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var n=p.stack.split(`
`),v=a.stack.split(`
`),u=n.length-1,c=v.length-1;u>=1&&c>=0&&n[u]!==v[c];)c--;for(;u>=1&&c>=0;u--,c--)if(n[u]!==v[c]){if(u!==1||c!==1)do if(u--,c--,c<0||n[u]!==v[c]){var g=`
`+n[u].replace(" at new "," at ");return r.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",r.displayName)),typeof r=="function"&&V.set(r,g),g}while(u>=1&&c>=0);break}}}finally{J=!1,q.current=s,Lr(),Error.prepareStackTrace=i}var A=r?r.displayName||r.name:"",x=A?W(A):"";return typeof r=="function"&&V.set(r,x),x}function Ur(r,e,t){return cr(r,!1)}function qr(r){var e=r.prototype;return!!(e&&e.isReactComponent)}function L(r,e,t){if(r==null)return"";if(typeof r=="function")return cr(r,qr(r));if(typeof r=="string")return W(r);switch(r){case E:return W("Suspense");case b:return W("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case f:return Ur(r.render);case R:return L(r.type,e,t);case O:{var a=r,i=a._payload,s=a._init;try{return L(s(i),e,t)}catch{}}}return""}var I=Object.prototype.hasOwnProperty,fr={},dr=C.ReactDebugCurrentFrame;function N(r){if(r){var e=r._owner,t=L(r.type,r._source,e?e.type:null);dr.setExtraStackFrame(t)}else dr.setExtraStackFrame(null)}function Gr(r,e,t,a,i){{var s=Function.call.bind(I);for(var o in r)if(s(r,o)){var n=void 0;try{if(typeof r[o]!="function"){var v=Error((a||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}n=r[o](e,o,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(u){n=u}n&&!(n instanceof Error)&&(N(i),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,o,typeof n),N(null)),n instanceof Error&&!(n.message in fr)&&(fr[n.message]=!0,N(i),d("Failed %s type: %s",t,n.message),N(null))}}}var Jr=Array.isArray;function z(r){return Jr(r)}function zr(r){{var e=typeof Symbol=="function"&&Symbol.toStringTag,t=e&&r[Symbol.toStringTag]||r.constructor.name||"Object";return t}}function Kr(r){try{return vr(r),!1}catch{return!0}}function vr(r){return""+r}function pr(r){if(Kr(r))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",zr(r)),vr(r)}var br=C.ReactCurrentOwner,Br={key:!0,ref:!0,__self:!0,__source:!0},gr,hr;function Xr(r){if(I.call(r,"ref")){var e=Object.getOwnPropertyDescriptor(r,"ref").get;if(e&&e.isReactWarning)return!1}return r.ref!==void 0}function Hr(r){if(I.call(r,"key")){var e=Object.getOwnPropertyDescriptor(r,"key").get;if(e&&e.isReactWarning)return!1}return r.key!==void 0}function Zr(r,e){typeof r.ref=="string"&&br.current}function Qr(r,e){{var t=function(){gr||(gr=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};t.isReactWarning=!0,Object.defineProperty(r,"key",{get:t,configurable:!0})}}function re(r,e){{var t=function(){hr||(hr=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};t.isReactWarning=!0,Object.defineProperty(r,"ref",{get:t,configurable:!0})}}var ee=function(r,e,t,a,i,s,o){var n={$$typeof:T,type:r,key:e,ref:t,props:o,_owner:s};return n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(n,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(n,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n};function te(r,e,t,a,i){{var s,o={},n=null,v=null;t!==void 0&&(pr(t),n=""+t),Hr(e)&&(pr(e.key),n=""+e.key),Xr(e)&&(v=e.ref,Zr(e,i));for(s in e)I.call(e,s)&&!Br.hasOwnProperty(s)&&(o[s]=e[s]);if(r&&r.defaultProps){var u=r.defaultProps;for(s in u)o[s]===void 0&&(o[s]=u[s])}if(n||v){var c=typeof r=="function"?r.displayName||r.name||"Unknown":r;n&&Qr(o,c),v&&re(o,c)}return ee(r,n,v,i,a,br.current,o)}}var K=C.ReactCurrentOwner,Rr=C.ReactDebugCurrentFrame;function j(r){if(r){var e=r._owner,t=L(r.type,r._source,e?e.type:null);Rr.setExtraStackFrame(t)}else Rr.setExtraStackFrame(null)}var B;B=!1;function X(r){return typeof r=="object"&&r!==null&&r.$$typeof===T}function yr(){{if(K.current){var r=_(K.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function ae(r){return""}var Er={};function ne(r){{var e=yr();if(!e){var t=typeof r=="string"?r:r.displayName||r.name;t&&(e=`

Check the top-level render call using <`+t+">.")}return e}}function _r(r,e){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var t=ne(e);if(Er[t])return;Er[t]=!0;var a="";r&&r._owner&&r._owner!==K.current&&(a=" It was passed a child from "+_(r._owner.type)+"."),j(r),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),j(null)}}function mr(r,e){{if(typeof r!="object")return;if(z(r))for(var t=0;t<r.length;t++){var a=r[t];X(a)&&_r(a,e)}else if(X(r))r._store&&(r._store.validated=!0);else if(r){var i=jr(r);if(typeof i=="function"&&i!==r.entries)for(var s=i.call(r),o;!(o=s.next()).done;)X(o.value)&&_r(o.value,e)}}}function oe(r){{var e=r.type;if(e==null||typeof e=="string")return;var t;if(typeof e=="function")t=e.propTypes;else if(typeof e=="object"&&(e.$$typeof===f||e.$$typeof===R))t=e.propTypes;else return;if(t){var a=_(e);Gr(t,r.props,"prop",a,r)}else if(e.PropTypes!==void 0&&!B){B=!0;var i=_(e);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof e.getDefaultProps=="function"&&!e.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ie(r){{for(var e=Object.keys(r.props),t=0;t<e.length;t++){var a=e[t];if(a!=="children"&&a!=="key"){j(r),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),j(null);break}}r.ref!==null&&(j(r),d("Invalid attribute `ref` supplied to `React.Fragment`."),j(null))}}var Tr={};function kr(r,e,t,a,i,s){{var o=Mr(r);if(!o){var n="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(n+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=ae();v?n+=v:n+=yr();var u;r===null?u="null":z(r)?u="array":r!==void 0&&r.$$typeof===T?(u="<"+(_(r.type)||"Unknown")+" />",n=" Did you accidentally export a JSX literal instead of a component?"):u=typeof r,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,n)}var c=te(r,e,t,i,s);if(c==null)return c;if(o){var g=e.children;if(g!==void 0)if(a)if(z(g)){for(var A=0;A<g.length;A++)mr(g[A],r);Object.freeze&&Object.freeze(g)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else mr(g,r)}if(I.call(e,"key")){var x=_(r),p=Object.keys(e).filter(function(de){return de!=="key"}),H=p.length>0?"{key: someKey, "+p.join(": ..., ")+": ...}":"{key: someKey}";if(!Tr[x+H]){var fe=p.length>0?"{"+p.join(": ..., ")+": ...}":"{}";d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,H,x,fe,x),Tr[x+H]=!0}}return r===y?ie(c):oe(c),c}}function le(r,e,t){return kr(r,e,t,!0)}function se(r,e,t){return kr(r,e,t,!1)}var ue=se,ce=le;Y.Fragment=y,Y.jsx=ue,Y.jsxs=ce}()),Y}var xr;function ge(){return xr||(xr=1,process.env.NODE_ENV==="production"?U.exports=pe():U.exports=be()),U.exports}var he=ge(),Pr=(l=>(l.SUBMIT="submit",l.RESET="reset",l.BUTTON="button",l))(Pr||{}),m=(l=>(l.PRIMARY="primary",l.SECONDARY="secondary",l.GHOST="ghost",l.NEGATIVE="negative",l.POSITIVE="positive",l.DARK="dark",l.TEXT="text",l))(m||{}),Z=(l=>(l.SM="small",l.LG="large",l))(Z||{});const Re=ve.button`
  display: inline-flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  text-transform: capitalize;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  cursor: pointer;
  ${{fontStyle:"labelM"}}
  white-space: nowrap;

  & > svg > path {
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }

  &:disabled {
    cursor: not-allowed;
    transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);

    & > svg > path {
      transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
  }

  ${({$size:l})=>{switch(l){case Z.SM:return`  
          width: 159px;
          height: 40px;
          padding: 8px; 
        `;case Z.LG:return`
          width: 167px;
          height: 48px;
          padding: 12px;
        `;default:return""}}}

  ${({$type:l})=>{switch(l){case m.PRIMARY:return`
          color: var(--neutral-colors-light);
          background-color: var(--brand-colors-accent);

          & > svg > path {
            fill: var(--neutral-colors-light);
          }

          &:not(:disabled):hover {
            background-color: var(--level-accent-700);    
          }

          &:disabled {
            background: var(--level-dark-300); 
          }
        `;case m.SECONDARY:return`
          border: 1px solid var(--brand-colors-accent); 
          color: var(--brand-colors-accent);

          & > svg > path {
            fill: var(--brand-colors-accent);
          }

          &:not(:disabled):hover {
            border: 1px solid var(--level-accent-700);
            color: var(--level-accent-700);

            & > svg > path {
              fill: var(--level-accent-700);
            }
          }

          &:disabled {
            border: 1px solid var(--level-dark-300); 
            color: var(--level-dark-300); 

            & > svg > path {
              fill: var(--level-dark-300);
            }
          }
        `;case m.GHOST:return`
          background-color: transparent;
          color: var(--neutral-colors-dark);

          & > svg > path {
            fill: var(--neutral-colors-dark);
          }

          &:not(:disabled):hover {
            background-color: var(--level-grey-100);
          }

          &:disabled {
            color: var(--level-dark-300); 
            
            & > svg > path {
              fill: var(--level-dark-300);
            }
          }
        `;case m.NEGATIVE:return`
          background-color: var(--system-colors-negative);
          color: var(--neutral-colors-light);

          & > svg > path {
            fill: var(--neutral-colors-light);
          }

          &:not(:disabled):hover {
            background-color: var(--level-negative-700);
          }

          &:disabled {
            background: var(--level-negative-500); 
          }
        `;case m.POSITIVE:return`
          background-color: var(--system-colors-positive);
          color: var(--neutral-colors-light);

          & > svg > path {
            fill: var(--neutral-colors-light);
          }

          &:not(:disabled):hover {
            background-color: var(--level-accent-700);
          }

          &:disabled {
            background: var(--level-accent-500); 
          }
        `;case m.DARK:return`
          border: 1px solid var(--neutral-colors-dark); 
          color: var(--neutral-colors-dark));

          & > svg > path {
            fill: var(--neutral-colors-dark));
          }

          &:not(:disabled):hover {
            opacity: 0.8;
          }

          &:disabled {
            border: 1px solid var(--level-dark-300); 
            color: var(--level-dark-300); 
          }
        `;case m.TEXT:return`
          border: none; 
          color: var(--neutral-colors-dark));
          padding-top: 0;
          padding-bottom: 0;
          width: fit-content;

          & > svg > path {
            fill: var(--neutral-colors-dark));
          }

          &:not(:disabled):hover {
           color: var(--level-dark-700, #4F4E5B);
           
            & > svg > path {
              fill: var(--level-dark-700, #4F4E5B);
            }
          }

          &:disabled {
            color: var(--level-dark-300); 

            & > svg > path {
              fill: var(--level-dark-300);
            }
          }
        `;default:return""}}}
`,ye=({type:l,size:T,label:D,iconLeft:y,iconRight:w,disabled:P,customStyles:k,onClick:h,htmlType:f=Pr.BUTTON,className:E})=>he.jsxs(Re,{$type:l,$size:T,disabled:!!P,style:k,onClick:h,type:f,className:E,children:[y,D,w]});exports.Button=ye;
