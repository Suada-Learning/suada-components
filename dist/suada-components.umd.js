(function(R,P){typeof exports=="object"&&typeof module<"u"?P(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],P):(R=typeof globalThis<"u"?globalThis:R||self,P(R["suada-components"]={},R.React,R.styled))})(this,function(R,P,je){"use strict";var V={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Ae(){if(re)return I;re=1;var l=P,k=Symbol.for("react.element"),$=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,C=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function O(h,f,m){var b,y={},S=null,L=null;m!==void 0&&(S=""+m),f.key!==void 0&&(S=""+f.key),f.ref!==void 0&&(L=f.ref);for(b in f)_.call(f,b)&&!j.hasOwnProperty(b)&&(y[b]=f[b]);if(h&&h.defaultProps)for(b in f=h.defaultProps,f)y[b]===void 0&&(y[b]=f[b]);return{$$typeof:k,type:h,key:S,ref:L,props:y,_owner:C.current}}return I.Fragment=$,I.jsx=O,I.jsxs=O,I}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function De(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var l=P,k=Symbol.for("react.element"),$=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),oe=Symbol.iterator,Me="@@iterator";function We(e){if(e===null||typeof e!="object")return null;var r=oe&&e[oe]||e[Me];return typeof r=="function"?r:null}var A=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];Ve("error",e,t)}}function Ve(e,r,t){{var a=A.ReactDebugCurrentFrame,i=a.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var s=t.map(function(o){return String(o)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var Le=!1,Ne=!1,Ue=!1,Ge=!1,Je=!1,ie;ie=Symbol.for("react.module.reference");function qe(e){return!!(typeof e=="string"||typeof e=="function"||e===_||e===j||Je||e===C||e===m||e===b||Ge||e===L||Le||Ne||Ue||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===y||e.$$typeof===O||e.$$typeof===h||e.$$typeof===f||e.$$typeof===ie||e.getModuleId!==void 0))}function ze(e,r,t){var a=e.displayName;if(a)return a;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function le(e){return e.displayName||"Context"}function T(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case $:return"Portal";case j:return"Profiler";case C:return"StrictMode";case m:return"Suspense";case b:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case h:var r=e;return le(r)+".Consumer";case O:var t=e;return le(t._context)+".Provider";case f:return ze(e,e.render,"ForwardRef");case y:var a=e.displayName||null;return a!==null?a:T(e.type)||"Memo";case S:{var i=e,s=i._payload,o=i._init;try{return T(o(s))}catch{return null}}}return null}var x=Object.assign,M=0,se,ue,ce,fe,de,ve,pe;function be(){}be.__reactDisabledLog=!0;function Ke(){{if(M===0){se=console.log,ue=console.info,ce=console.warn,fe=console.error,de=console.group,ve=console.groupCollapsed,pe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:be,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function Be(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:x({},e,{value:se}),info:x({},e,{value:ue}),warn:x({},e,{value:ce}),error:x({},e,{value:fe}),group:x({},e,{value:de}),groupCollapsed:x({},e,{value:ve}),groupEnd:x({},e,{value:pe})})}M<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var z=A.ReactCurrentDispatcher,K;function N(e,r,t){{if(K===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);K=a&&a[1]||""}return`
`+K+e}}var B=!1,U;{var Xe=typeof WeakMap=="function"?WeakMap:Map;U=new Xe}function ge(e,r){if(!e||B)return"";{var t=U.get(e);if(t!==void 0)return t}var a;B=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=z.current,z.current=null,Ke();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(p){a=p}Reflect.construct(e,[],o)}else{try{o.call()}catch(p){a=p}e.call(o.prototype)}}else{try{throw Error()}catch(p){a=p}e()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var n=p.stack.split(`
`),v=a.stack.split(`
`),u=n.length-1,c=v.length-1;u>=1&&c>=0&&n[u]!==v[c];)c--;for(;u>=1&&c>=0;u--,c--)if(n[u]!==v[c]){if(u!==1||c!==1)do if(u--,c--,c<0||n[u]!==v[c]){var g=`
`+n[u].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),typeof e=="function"&&U.set(e,g),g}while(u>=1&&c>=0);break}}}finally{B=!1,z.current=s,Be(),Error.prepareStackTrace=i}var F=e?e.displayName||e.name:"",w=F?N(F):"";return typeof e=="function"&&U.set(e,w),w}function He(e,r,t){return ge(e,!1)}function Ze(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function G(e,r,t){if(e==null)return"";if(typeof e=="function")return ge(e,Ze(e));if(typeof e=="string")return N(e);switch(e){case m:return N("Suspense");case b:return N("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return He(e.render);case y:return G(e.type,r,t);case S:{var a=e,i=a._payload,s=a._init;try{return G(s(i),r,t)}catch{}}}return""}var W=Object.prototype.hasOwnProperty,he={},ye=A.ReactDebugCurrentFrame;function J(e){if(e){var r=e._owner,t=G(e.type,e._source,r?r.type:null);ye.setExtraStackFrame(t)}else ye.setExtraStackFrame(null)}function Qe(e,r,t,a,i){{var s=Function.call.bind(W);for(var o in e)if(s(e,o)){var n=void 0;try{if(typeof e[o]!="function"){var v=Error((a||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}n=e[o](r,o,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(u){n=u}n&&!(n instanceof Error)&&(J(i),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,o,typeof n),J(null)),n instanceof Error&&!(n.message in he)&&(he[n.message]=!0,J(i),d("Failed %s type: %s",t,n.message),J(null))}}}var er=Array.isArray;function X(e){return er(e)}function rr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function tr(e){try{return Re(e),!1}catch{return!0}}function Re(e){return""+e}function Ee(e){if(tr(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",rr(e)),Re(e)}var _e=A.ReactCurrentOwner,ar={key:!0,ref:!0,__self:!0,__source:!0},me,Te;function nr(e){if(W.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function or(e){if(W.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ir(e,r){typeof e.ref=="string"&&_e.current}function lr(e,r){{var t=function(){me||(me=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function sr(e,r){{var t=function(){Te||(Te=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ur=function(e,r,t,a,i,s,o){var n={$$typeof:k,type:e,key:r,ref:t,props:o,_owner:s};return n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(n,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(n,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n};function cr(e,r,t,a,i){{var s,o={},n=null,v=null;t!==void 0&&(Ee(t),n=""+t),or(r)&&(Ee(r.key),n=""+r.key),nr(r)&&(v=r.ref,ir(r,i));for(s in r)W.call(r,s)&&!ar.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps){var u=e.defaultProps;for(s in u)o[s]===void 0&&(o[s]=u[s])}if(n||v){var c=typeof e=="function"?e.displayName||e.name||"Unknown":e;n&&lr(o,c),v&&sr(o,c)}return ur(e,n,v,i,a,_e.current,o)}}var H=A.ReactCurrentOwner,ke=A.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=G(e.type,e._source,r?r.type:null);ke.setExtraStackFrame(t)}else ke.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===k}function Oe(){{if(H.current){var e=T(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function fr(e){return""}var Se={};function dr(e){{var r=Oe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function xe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=dr(r);if(Se[t])return;Se[t]=!0;var a="";e&&e._owner&&e._owner!==H.current&&(a=" It was passed a child from "+T(e._owner.type)+"."),D(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),D(null)}}function we(e,r){{if(typeof e!="object")return;if(X(e))for(var t=0;t<e.length;t++){var a=e[t];Q(a)&&xe(a,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var i=We(e);if(typeof i=="function"&&i!==e.entries)for(var s=i.call(e),o;!(o=s.next()).done;)Q(o.value)&&xe(o.value,r)}}}function vr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===y))t=r.propTypes;else return;if(t){var a=T(r);Qe(t,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var i=T(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function pr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var a=r[t];if(a!=="children"&&a!=="key"){D(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),D(null);break}}e.ref!==null&&(D(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}var Pe={};function Ce(e,r,t,a,i,s){{var o=qe(e);if(!o){var n="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(n+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=fr();v?n+=v:n+=Oe();var u;e===null?u="null":X(e)?u="array":e!==void 0&&e.$$typeof===k?(u="<"+(T(e.type)||"Unknown")+" />",n=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,n)}var c=cr(e,r,t,i,s);if(c==null)return c;if(o){var g=r.children;if(g!==void 0)if(a)if(X(g)){for(var F=0;F<g.length;F++)we(g[F],e);Object.freeze&&Object.freeze(g)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else we(g,e)}if(W.call(r,"key")){var w=T(e),p=Object.keys(r).filter(function(Er){return Er!=="key"}),ee=p.length>0?"{key: someKey, "+p.join(": ..., ")+": ...}":"{key: someKey}";if(!Pe[w+ee]){var Rr=p.length>0?"{"+p.join(": ..., ")+": ...}":"{}";d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ee,w,Rr,w),Pe[w+ee]=!0}}return e===_?pr(c):vr(c),c}}function br(e,r,t){return Ce(e,r,t,!0)}function gr(e,r,t){return Ce(e,r,t,!1)}var hr=gr,yr=br;Y.Fragment=_,Y.jsx=hr,Y.jsxs=yr}()),Y}var ae;function Fe(){return ae||(ae=1,process.env.NODE_ENV==="production"?V.exports=Ae():V.exports=De()),V.exports}var Ie=Fe(),ne=(l=>(l.SUBMIT="submit",l.RESET="reset",l.BUTTON="button",l))(ne||{}),E=(l=>(l.PRIMARY="primary",l.SECONDARY="secondary",l.GHOST="ghost",l.NEGATIVE="negative",l.POSITIVE="positive",l.DARK="dark",l.TEXT="text",l))(E||{}),q=(l=>(l.SM="small",l.LG="large",l))(q||{});const Ye=je.button`
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

  ${({$size:l})=>{switch(l){case q.SM:return`  
          width: 159px;
          height: 40px;
          padding: 8px; 
        `;case q.LG:return`
          width: 167px;
          height: 48px;
          padding: 12px;
        `;default:return""}}}

  ${({$type:l})=>{switch(l){case E.PRIMARY:return`
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
        `;case E.SECONDARY:return`
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
        `;case E.GHOST:return`
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
        `;case E.NEGATIVE:return`
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
        `;case E.POSITIVE:return`
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
        `;case E.DARK:return`
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
        `;case E.TEXT:return`
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
`,$e=({type:l,size:k,label:$,iconLeft:_,iconRight:C,disabled:j,customStyles:O,onClick:h,htmlType:f=ne.BUTTON,className:m})=>Ie.jsxs(Ye,{$type:l,$size:k,disabled:!!j,style:O,onClick:h,type:f,className:m,children:[_,$,C]});R.Button=$e,Object.defineProperty(R,Symbol.toStringTag,{value:"Module"})});
