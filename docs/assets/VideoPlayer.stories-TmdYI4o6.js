const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./YouTube-B0r1GZ6q.js","./index-LpBWhHPZ.js","./index-yBjzXJbu.js","./SoundCloud-CGmxLaA-.js","./Vimeo-D02zwFsN.js","./Mux-DjYbqmNq.js","./iframe-BmqlE7ii.js","./Facebook-DXD9vJmH.js","./Streamable-BAjtmGJV.js","./Wistia-BzbEXE5n.js","./Twitch-vYe_uCng.js","./DailyMotion-CtOzDWPT.js","./Mixcloud-BeBsignD.js","./Vidyard-DFvu89b2.js","./Kaltura-DCDhkhGX.js","./FilePlayer-BVMkstM2.js","./Preview-DgmP_xpe.js"])))=>i.map(i=>d[i]);
import{j as d}from"./jsx-runtime-Bkl-fPu3.js";import{a as li,c as Dr,g as ui,r as P}from"./index-LpBWhHPZ.js";import{_ as _e}from"./iframe-BmqlE7ii.js";import{r as rn}from"./index-yBjzXJbu.js";import{r as di}from"./index-Chjiymov.js";import{r as An}from"./index-OYHOLIWU.js";import{g as E,E as ci}from"./styled-components.browser.esm-vTeNnIge.js";import{aE as fi,bu as Fa,bd as pi,aN as hi,aT as mi,b6 as Fn,bz as yi,bA as gi,be as Hn,al as vi,aJ as _i,bg as wi,aR as bi,aF as xi,aD as Si,bi as ki,bm as Pi}from"./SchoolIcon-BCTNLzS8.js";import{a as Ti}from"./PlayButton-tDDVXCNd.js";import"./SearchRounded-CpGVmpS1.js";import"./Unlock-DvKQY-eR.js";import"./TooltipHeight-CQMq8KDV.js";import{C as Ce}from"./CustomTooltip-BIpGBbl0.js";import{u as Ha}from"./TranslationProvider-BFNHPoCP.js";var Cr,Vn;function Mi(){if(Vn)return Cr;Vn=1,Cr=function(a,s,i){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("script");typeof s=="function"&&(i=s,s={}),s=s||{},i=i||function(){},l.type=s.type||"text/javascript",l.charset=s.charset||"utf8",l.async="async"in s?!!s.async:!0,l.src=a,s.attrs&&e(l,s.attrs),s.text&&(l.text=""+s.text);var c="onload"in l?t:r;c(l,i),l.onload||t(l,i),o.appendChild(l)};function e(n,a){for(var s in a)n.setAttribute(s,a[s])}function t(n,a){n.onload=function(){this.onerror=this.onload=null,a(null,n)},n.onerror=function(){this.onerror=this.onload=null,a(new Error("Failed to load "+this.src),n)}}function r(n,a){n.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,a(null,n))}}return Cr}var Er,Wn;function Va(){if(Wn)return Er;Wn=1;var e=function(f){return t(f)&&!r(f)};function t(g){return!!g&&typeof g=="object"}function r(g){var f=Object.prototype.toString.call(g);return f==="[object RegExp]"||f==="[object Date]"||s(g)}var n=typeof Symbol=="function"&&Symbol.for,a=n?Symbol.for("react.element"):60103;function s(g){return g.$$typeof===a}function i(g){return Array.isArray(g)?[]:{}}function o(g,f){return f.clone!==!1&&f.isMergeableObject(g)?C(i(g),g,f):g}function l(g,f,h){return g.concat(f).map(function(y){return o(y,h)})}function c(g,f){if(!f.customMerge)return C;var h=f.customMerge(g);return typeof h=="function"?h:C}function w(g){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(g).filter(function(f){return Object.propertyIsEnumerable.call(g,f)}):[]}function u(g){return Object.keys(g).concat(w(g))}function v(g,f){try{return f in g}catch{return!1}}function M(g,f){return v(g,f)&&!(Object.hasOwnProperty.call(g,f)&&Object.propertyIsEnumerable.call(g,f))}function $(g,f,h){var y={};return h.isMergeableObject(g)&&u(g).forEach(function(x){y[x]=o(g[x],h)}),u(f).forEach(function(x){M(g,x)||(v(g,x)&&h.isMergeableObject(f[x])?y[x]=c(x,h)(g[x],f[x],h):y[x]=o(f[x],h))}),y}function C(g,f,h){h=h||{},h.arrayMerge=h.arrayMerge||l,h.isMergeableObject=h.isMergeableObject||e,h.cloneUnlessOtherwiseSpecified=o;var y=Array.isArray(f),x=Array.isArray(g),T=y===x;return T?y?h.arrayMerge(g,f,h):$(g,f,h):o(f,h)}C.all=function(f,h){if(!Array.isArray(f))throw new Error("first argument should be an array");return f.reduce(function(y,x){return C(y,x,h)},{})};var j=C;return Er=j,Er}var Nr,Un;function dr(){if(Un)return Nr;Un=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,i=(S,R)=>{for(var G in R)t(S,G,{get:R[G],enumerable:!0})},o=(S,R,G,ee)=>{if(R&&typeof R=="object"||typeof R=="function")for(let ae of n(R))!s.call(S,ae)&&ae!==G&&t(S,ae,{get:()=>R[ae],enumerable:!(ee=r(R,ae))||ee.enumerable});return S},l=(S,R,G)=>(G=S!=null?e(a(S)):{},o(!S||!S.__esModule?t(G,"default",{value:S,enumerable:!0}):G,S)),c=S=>o(t({},"__esModule",{value:!0}),S),w={};i(w,{callPlayer:()=>p,getConfig:()=>I,getSDK:()=>N,isBlobUrl:()=>K,isMediaStream:()=>O,lazy:()=>$,omit:()=>A,parseEndTime:()=>T,parseStartTime:()=>x,queryString:()=>V,randomString:()=>L,supportsWebKitPresentationMode:()=>pe}),Nr=c(w);var u=l(rn()),v=l(Mi()),M=l(Va());const $=S=>u.default.lazy(async()=>{const R=await S();return typeof R.default=="function"?R:R.default}),C=/[?&#](?:start|t)=([0-9hms]+)/,j=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,f=/^\d+$/;function h(S,R){if(S instanceof Array)return;const G=S.match(R);if(G){const ee=G[1];if(ee.match(g))return y(ee);if(f.test(ee))return parseInt(ee)}}function y(S){let R=0,G=g.exec(S);for(;G!==null;){const[,ee,ae]=G;ae==="h"&&(R+=parseInt(ee,10)*60*60),ae==="m"&&(R+=parseInt(ee,10)*60),ae==="s"&&(R+=parseInt(ee,10)),G=g.exec(S)}return R}function x(S){return h(S,C)}function T(S){return h(S,j)}function L(){return Math.random().toString(36).substr(2,5)}function V(S){return Object.keys(S).map(R=>`${R}=${S[R]}`).join("&")}function W(S){return window[S]?window[S]:window.exports&&window.exports[S]?window.exports[S]:window.module&&window.module.exports&&window.module.exports[S]?window.module.exports[S]:null}const Z={},N=function(R,G,ee=null,ae=()=>!0,Oe=v.default){const ye=W(G);return ye&&ae(ye)?Promise.resolve(ye):new Promise((oe,Ye)=>{if(Z[R]){Z[R].push({resolve:oe,reject:Ye});return}Z[R]=[{resolve:oe,reject:Ye}];const fe=De=>{Z[R].forEach(ge=>ge.resolve(De))};if(ee){const De=window[ee];window[ee]=function(){De&&De(),fe(W(G))}}Oe(R,De=>{De?(Z[R].forEach(ge=>ge.reject(De)),Z[R]=null):ee||fe(W(G))})})};function I(S,R){return(0,M.default)(R.config,S.config)}function A(S,...R){const G=[].concat(...R),ee={},ae=Object.keys(S);for(const Oe of ae)G.indexOf(Oe)===-1&&(ee[Oe]=S[Oe]);return ee}function p(S,...R){if(!this.player||!this.player[S]){let G=`ReactPlayer: ${this.constructor.displayName} player could not call %c${S}%c – `;return this.player?this.player[S]||(G+="The method was not available"):G+="The player was not available",console.warn(G,"font-weight: bold",""),null}return this.player[S](...R)}function O(S){return typeof window<"u"&&typeof window.MediaStream<"u"&&S instanceof window.MediaStream}function K(S){return/^blob:/.test(S)}function pe(S=document.createElement("video")){const R=/iPhone|iPod/.test(navigator.userAgent)===!1;return S.webkitSupportsPresentationMode&&typeof S.webkitSetPresentationMode=="function"&&R}function ce(S){return S}return Nr}var Rr,zn;function Oi(){if(zn)return Rr;zn=1;var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,a=(p,O)=>{for(var K in O)e(p,K,{get:O[K],enumerable:!0})},s=(p,O,K,pe)=>{if(O&&typeof O=="object"||typeof O=="function")for(let ce of r(O))!n.call(p,ce)&&ce!==K&&e(p,ce,{get:()=>O[ce],enumerable:!(pe=t(O,ce))||pe.enumerable});return p},i=p=>s(e({},"__esModule",{value:!0}),p),o={};a(o,{AUDIO_EXTENSIONS:()=>L,DASH_EXTENSIONS:()=>Z,FLV_EXTENSIONS:()=>N,HLS_EXTENSIONS:()=>W,MATCH_URL_DAILYMOTION:()=>h,MATCH_URL_FACEBOOK:()=>M,MATCH_URL_FACEBOOK_WATCH:()=>$,MATCH_URL_KALTURA:()=>T,MATCH_URL_MIXCLOUD:()=>y,MATCH_URL_MUX:()=>v,MATCH_URL_SOUNDCLOUD:()=>w,MATCH_URL_STREAMABLE:()=>C,MATCH_URL_TWITCH_CHANNEL:()=>f,MATCH_URL_TWITCH_VIDEO:()=>g,MATCH_URL_VIDYARD:()=>x,MATCH_URL_VIMEO:()=>u,MATCH_URL_WISTIA:()=>j,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>V,canPlay:()=>A}),Rr=i(o);var l=dr();const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,w=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,u=/vimeo\.com\/(?!progressive_redirect).+/,v=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,M=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,$=/^https?:\/\/fb\.watch\/.+$/,C=/streamable\.com\/([a-z0-9]+)$/,j=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,g=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,f=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,h=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,y=/mixcloud\.com\/([^/]+\/[^/]+)/,x=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,T=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,L=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,V=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,W=/\.(m3u8)($|\?)/i,Z=/\.(mpd)($|\?)/i,N=/\.(flv)($|\?)/i,I=p=>{if(p instanceof Array){for(const O of p)if(typeof O=="string"&&I(O)||I(O.src))return!0;return!1}return(0,l.isMediaStream)(p)||(0,l.isBlobUrl)(p)?!0:L.test(p)||V.test(p)||W.test(p)||Z.test(p)||N.test(p)},A={youtube:p=>p instanceof Array?p.every(O=>c.test(O)):c.test(p),soundcloud:p=>w.test(p)&&!L.test(p),vimeo:p=>u.test(p)&&!V.test(p)&&!W.test(p),mux:p=>v.test(p),facebook:p=>M.test(p)||$.test(p),streamable:p=>C.test(p),wistia:p=>j.test(p),twitch:p=>g.test(p)||f.test(p),dailymotion:p=>h.test(p),mixcloud:p=>y.test(p),vidyard:p=>x.test(p),kaltura:p=>T.test(p),file:I};return Rr}var Lr,qn;function Di(){if(qn)return Lr;qn=1;var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,a=(u,v)=>{for(var M in v)e(u,M,{get:v[M],enumerable:!0})},s=(u,v,M,$)=>{if(v&&typeof v=="object"||typeof v=="function")for(let C of r(v))!n.call(u,C)&&C!==M&&e(u,C,{get:()=>v[C],enumerable:!($=t(v,C))||$.enumerable});return u},i=u=>s(e({},"__esModule",{value:!0}),u),o={};a(o,{default:()=>w}),Lr=i(o);var l=dr(),c=Oi(),w=[{key:"youtube",name:"YouTube",canPlay:c.canPlay.youtube,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./YouTube-B0r1GZ6q.js").then(u=>u.Y),__vite__mapDeps([0,1,2]),import.meta.url))},{key:"soundcloud",name:"SoundCloud",canPlay:c.canPlay.soundcloud,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./SoundCloud-CGmxLaA-.js").then(u=>u.S),__vite__mapDeps([3,1,2]),import.meta.url))},{key:"vimeo",name:"Vimeo",canPlay:c.canPlay.vimeo,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./Vimeo-D02zwFsN.js").then(u=>u.V),__vite__mapDeps([4,1,2]),import.meta.url))},{key:"mux",name:"Mux",canPlay:c.canPlay.mux,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./Mux-DjYbqmNq.js").then(u=>u.M),__vite__mapDeps([5,1,2,6]),import.meta.url))},{key:"facebook",name:"Facebook",canPlay:c.canPlay.facebook,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./Facebook-DXD9vJmH.js").then(u=>u.F),__vite__mapDeps([7,1,2]),import.meta.url))},{key:"streamable",name:"Streamable",canPlay:c.canPlay.streamable,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./Streamable-BAjtmGJV.js").then(u=>u.S),__vite__mapDeps([8,1,2]),import.meta.url))},{key:"wistia",name:"Wistia",canPlay:c.canPlay.wistia,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./Wistia-BzbEXE5n.js").then(u=>u.W),__vite__mapDeps([9,1,2]),import.meta.url))},{key:"twitch",name:"Twitch",canPlay:c.canPlay.twitch,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./Twitch-vYe_uCng.js").then(u=>u.T),__vite__mapDeps([10,1,2]),import.meta.url))},{key:"dailymotion",name:"DailyMotion",canPlay:c.canPlay.dailymotion,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./DailyMotion-CtOzDWPT.js").then(u=>u.D),__vite__mapDeps([11,1,2]),import.meta.url))},{key:"mixcloud",name:"Mixcloud",canPlay:c.canPlay.mixcloud,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./Mixcloud-BeBsignD.js").then(u=>u.M),__vite__mapDeps([12,1,2]),import.meta.url))},{key:"vidyard",name:"Vidyard",canPlay:c.canPlay.vidyard,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./Vidyard-DFvu89b2.js").then(u=>u.V),__vite__mapDeps([13,1,2]),import.meta.url))},{key:"kaltura",name:"Kaltura",canPlay:c.canPlay.kaltura,lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./Kaltura-DCDhkhGX.js").then(u=>u.K),__vite__mapDeps([14,1,2]),import.meta.url))},{key:"file",name:"FilePlayer",canPlay:c.canPlay.file,canEnablePIP:u=>c.canPlay.file(u)&&(document.pictureInPictureEnabled||(0,l.supportsWebKitPresentationMode)())&&!c.AUDIO_EXTENSIONS.test(u),lazyPlayer:(0,l.lazy)(()=>_e(()=>import("./FilePlayer-BVMkstM2.js").then(u=>u.F),__vite__mapDeps([15,1,2]),import.meta.url))}];return Lr}var $n=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Ci(e,t){return!!(e===t||$n(e)&&$n(t))}function Ei(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Ci(e[r],t[r]))return!1;return!0}function Ni(e,t){t===void 0&&(t=Ei);var r,n=[],a,s=!1;function i(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return s&&r===this&&t(o,n)||(a=e.apply(this,o),s=!0,r=this,n=o),a}return i}const Ri=Object.freeze(Object.defineProperty({__proto__:null,default:Ni},Symbol.toStringTag,{value:"Module"})),Li=li(Ri);var Ir,Gn;function Wa(){if(Gn)return Ir;Gn=1;var e=typeof Element<"u",t=typeof Map=="function",r=typeof Set=="function",n=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function a(s,i){if(s===i)return!0;if(s&&i&&typeof s=="object"&&typeof i=="object"){if(s.constructor!==i.constructor)return!1;var o,l,c;if(Array.isArray(s)){if(o=s.length,o!=i.length)return!1;for(l=o;l--!==0;)if(!a(s[l],i[l]))return!1;return!0}var w;if(t&&s instanceof Map&&i instanceof Map){if(s.size!==i.size)return!1;for(w=s.entries();!(l=w.next()).done;)if(!i.has(l.value[0]))return!1;for(w=s.entries();!(l=w.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&s instanceof Set&&i instanceof Set){if(s.size!==i.size)return!1;for(w=s.entries();!(l=w.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(s)&&ArrayBuffer.isView(i)){if(o=s.length,o!=i.length)return!1;for(l=o;l--!==0;)if(s[l]!==i[l])return!1;return!0}if(s.constructor===RegExp)return s.source===i.source&&s.flags===i.flags;if(s.valueOf!==Object.prototype.valueOf&&typeof s.valueOf=="function"&&typeof i.valueOf=="function")return s.valueOf()===i.valueOf();if(s.toString!==Object.prototype.toString&&typeof s.toString=="function"&&typeof i.toString=="function")return s.toString()===i.toString();if(c=Object.keys(s),o=c.length,o!==Object.keys(i).length)return!1;for(l=o;l--!==0;)if(!Object.prototype.hasOwnProperty.call(i,c[l]))return!1;if(e&&s instanceof Element)return!1;for(l=o;l--!==0;)if(!((c[l]==="_owner"||c[l]==="__v"||c[l]==="__o")&&s.$$typeof)&&!a(s[c[l]],i[c[l]]))return!1;return!0}return s!==s&&i!==i}return Ir=function(i,o){try{return a(i,o)}catch(l){if((l.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw l}},Ir}var Yr,Bn;function Ua(){if(Bn)return Yr;Bn=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,i=(V,W)=>{for(var Z in W)t(V,Z,{get:W[Z],enumerable:!0})},o=(V,W,Z,N)=>{if(W&&typeof W=="object"||typeof W=="function")for(let I of n(W))!s.call(V,I)&&I!==Z&&t(V,I,{get:()=>W[I],enumerable:!(N=r(W,I))||N.enumerable});return V},l=(V,W,Z)=>(Z=V!=null?e(a(V)):{},o(!V||!V.__esModule?t(Z,"default",{value:V,enumerable:!0}):Z,V)),c=V=>o(t({},"__esModule",{value:!0}),V),w={};i(w,{defaultProps:()=>L,propTypes:()=>x}),Yr=c(w);var u=l(di());const{string:v,bool:M,number:$,array:C,oneOfType:j,shape:g,object:f,func:h,node:y}=u.default,x={url:j([v,C,f]),playing:M,loop:M,controls:M,volume:$,muted:M,playbackRate:$,width:j([v,$]),height:j([v,$]),style:f,progressInterval:$,playsinline:M,pip:M,stopOnUnmount:M,light:j([M,v,f]),playIcon:y,previewTabIndex:$,previewAriaLabel:v,fallback:y,oEmbedUrl:v,wrapper:j([v,h,g({render:h.isRequired})]),config:g({soundcloud:g({options:f}),youtube:g({playerVars:f,embedOptions:f,onUnstarted:h}),facebook:g({appId:v,version:v,playerId:v,attributes:f}),dailymotion:g({params:f}),vimeo:g({playerOptions:f,title:v}),mux:g({attributes:f,version:v}),file:g({attributes:f,tracks:C,forceVideo:M,forceAudio:M,forceHLS:M,forceSafariHLS:M,forceDisableHls:M,forceDASH:M,forceFLV:M,hlsOptions:f,hlsVersion:v,dashVersion:v,flvVersion:v}),wistia:g({options:f,playerId:v,customControls:C}),mixcloud:g({options:f}),twitch:g({options:f,playerId:v}),vidyard:g({options:f})}),onReady:h,onStart:h,onPlay:h,onPause:h,onBuffer:h,onBufferEnd:h,onEnded:h,onError:h,onDuration:h,onSeek:h,onPlaybackRateChange:h,onPlaybackQualityChange:h,onProgress:h,onClickPreview:h,onEnablePIP:h,onDisablePIP:h},T=()=>{},L={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:T},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:T,onStart:T,onPlay:T,onPause:T,onBuffer:T,onBufferEnd:T,onEnded:T,onError:T,onDuration:T,onSeek:T,onPlaybackRateChange:T,onPlaybackQualityChange:T,onProgress:T,onClickPreview:T,onEnablePIP:T,onDisablePIP:T};return Yr}var jr,Zn;function Ii(){if(Zn)return jr;Zn=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,i=(h,y,x)=>y in h?t(h,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):h[y]=x,o=(h,y)=>{for(var x in y)t(h,x,{get:y[x],enumerable:!0})},l=(h,y,x,T)=>{if(y&&typeof y=="object"||typeof y=="function")for(let L of n(y))!s.call(h,L)&&L!==x&&t(h,L,{get:()=>y[L],enumerable:!(T=r(y,L))||T.enumerable});return h},c=(h,y,x)=>(x=h!=null?e(a(h)):{},l(!h||!h.__esModule?t(x,"default",{value:h,enumerable:!0}):x,h)),w=h=>l(t({},"__esModule",{value:!0}),h),u=(h,y,x)=>(i(h,typeof y!="symbol"?y+"":y,x),x),v={};o(v,{default:()=>f}),jr=w(v);var M=c(rn()),$=c(Wa()),C=Ua(),j=dr();const g=5e3;class f extends M.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"isReady",!1),u(this,"isPlaying",!1),u(this,"isLoading",!0),u(this,"loadOnReady",null),u(this,"startOnPlay",!0),u(this,"seekOnPlay",null),u(this,"onDurationCalled",!1),u(this,"handlePlayerMount",y=>{if(this.player){this.progress();return}this.player=y,this.player.load(this.props.url),this.progress()}),u(this,"getInternalPlayer",y=>this.player?this.player[y]:null),u(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const y=this.getCurrentTime()||0,x=this.getSecondsLoaded(),T=this.getDuration();if(T){const L={playedSeconds:y,played:y/T};x!==null&&(L.loadedSeconds=x,L.loaded=x/T),(L.playedSeconds!==this.prevPlayed||L.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(L),this.prevPlayed=L.playedSeconds,this.prevLoaded=L.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),u(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:y,playing:x,volume:T,muted:L}=this.props;y(),!L&&T!==null&&this.player.setVolume(T),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):x&&this.player.play(),this.handleDurationCheck()}),u(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:y,onPlay:x,playbackRate:T}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&T!==1&&this.player.setPlaybackRate(T),y(),this.startOnPlay=!1),x(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),u(this,"handlePause",y=>{this.isPlaying=!1,this.isLoading||this.props.onPause(y)}),u(this,"handleEnded",()=>{const{activePlayer:y,loop:x,onEnded:T}=this.props;y.loopOnEnded&&x&&this.seekTo(0),x||(this.isPlaying=!1,T())}),u(this,"handleError",(...y)=>{this.isLoading=!1,this.props.onError(...y)}),u(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const y=this.getDuration();y?this.onDurationCalled||(this.props.onDuration(y),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),u(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(y){if(!this.player)return;const{url:x,playing:T,volume:L,muted:V,playbackRate:W,pip:Z,loop:N,activePlayer:I,disableDeferredLoading:A}=this.props;if(!(0,$.default)(y.url,x)){if(this.isLoading&&!I.forceLoad&&!A&&!(0,j.isMediaStream)(x)){console.warn(`ReactPlayer: the attempt to load ${x} is being deferred until the player has loaded`),this.loadOnReady=x;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(x,this.isReady)}!y.playing&&T&&!this.isPlaying&&this.player.play(),y.playing&&!T&&this.isPlaying&&this.player.pause(),!y.pip&&Z&&this.player.enablePIP&&this.player.enablePIP(),y.pip&&!Z&&this.player.disablePIP&&this.player.disablePIP(),y.volume!==L&&L!==null&&this.player.setVolume(L),y.muted!==V&&(V?this.player.mute():(this.player.unmute(),L!==null&&setTimeout(()=>this.player.setVolume(L)))),y.playbackRate!==W&&this.player.setPlaybackRate&&this.player.setPlaybackRate(W),y.loop!==N&&this.player.setLoop&&this.player.setLoop(N)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(y,x,T){if(!this.isReady){y!==0&&(this.seekOnPlay=y,setTimeout(()=>{this.seekOnPlay=null},g));return}if(x?x==="fraction":y>0&&y<1){const V=this.player.getDuration();if(!V){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(V*y,T);return}this.player.seekTo(y,T)}render(){const y=this.props.activePlayer;return y?M.default.createElement(y,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}return u(f,"displayName","Player"),u(f,"propTypes",C.propTypes),u(f,"defaultProps",C.defaultProps),jr}var Ar,Xn;function Yi(){if(Xn)return Ar;Xn=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,i=(N,I,A)=>I in N?t(N,I,{enumerable:!0,configurable:!0,writable:!0,value:A}):N[I]=A,o=(N,I)=>{for(var A in I)t(N,A,{get:I[A],enumerable:!0})},l=(N,I,A,p)=>{if(I&&typeof I=="object"||typeof I=="function")for(let O of n(I))!s.call(N,O)&&O!==A&&t(N,O,{get:()=>I[O],enumerable:!(p=r(I,O))||p.enumerable});return N},c=(N,I,A)=>(A=N!=null?e(a(N)):{},l(!N||!N.__esModule?t(A,"default",{value:N,enumerable:!0}):A,N)),w=N=>l(t({},"__esModule",{value:!0}),N),u=(N,I,A)=>(i(N,typeof I!="symbol"?I+"":I,A),A),v={};o(v,{createReactPlayer:()=>Z}),Ar=w(v);var M=c(rn()),$=c(Va()),C=c(Li),j=c(Wa()),g=Ua(),f=dr(),h=c(Ii());const y=(0,f.lazy)(()=>_e(()=>import("./Preview-DgmP_xpe.js").then(N=>N.P),__vite__mapDeps([16,1,2]),import.meta.url)),x=typeof window<"u"&&window.document&&typeof document<"u",T=typeof Dr<"u"&&Dr.window&&Dr.window.document,L=Object.keys(g.propTypes),V=x||T?M.Suspense:()=>null,W=[],Z=(N,I)=>{var A;return A=class extends M.Component{constructor(){super(...arguments),u(this,"state",{showPreview:!!this.props.light}),u(this,"references",{wrapper:p=>{this.wrapper=p},player:p=>{this.player=p}}),u(this,"handleClickPreview",p=>{this.setState({showPreview:!1}),this.props.onClickPreview(p)}),u(this,"showPreview",()=>{this.setState({showPreview:!0})}),u(this,"getDuration",()=>this.player?this.player.getDuration():null),u(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),u(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),u(this,"getInternalPlayer",(p="player")=>this.player?this.player.getInternalPlayer(p):null),u(this,"seekTo",(p,O,K)=>{if(!this.player)return null;this.player.seekTo(p,O,K)}),u(this,"handleReady",()=>{this.props.onReady(this)}),u(this,"getActivePlayer",(0,C.default)(p=>{for(const O of[...W,...N])if(O.canPlay(p))return O;return I||null})),u(this,"getConfig",(0,C.default)((p,O)=>{const{config:K}=this.props;return $.default.all([g.defaultProps.config,g.defaultProps.config[O]||{},K,K[O]||{}])})),u(this,"getAttributes",(0,C.default)(p=>(0,f.omit)(this.props,L))),u(this,"renderActivePlayer",p=>{if(!p)return null;const O=this.getActivePlayer(p);if(!O)return null;const K=this.getConfig(p,O.key);return M.default.createElement(h.default,{...this.props,key:O.key,ref:this.references.player,config:K,activePlayer:O.lazyPlayer||O,onReady:this.handleReady})})}shouldComponentUpdate(p,O){return!(0,j.default)(this.props,p)||!(0,j.default)(this.state,O)}componentDidUpdate(p){const{light:O}=this.props;!p.light&&O&&this.setState({showPreview:!0}),p.light&&!O&&this.setState({showPreview:!1})}renderPreview(p){if(!p)return null;const{light:O,playIcon:K,previewTabIndex:pe,oEmbedUrl:ce,previewAriaLabel:S}=this.props;return M.default.createElement(y,{url:p,light:O,playIcon:K,previewTabIndex:pe,previewAriaLabel:S,oEmbedUrl:ce,onClick:this.handleClickPreview})}render(){const{url:p,style:O,width:K,height:pe,fallback:ce,wrapper:S}=this.props,{showPreview:R}=this.state,G=this.getAttributes(p),ee=typeof S=="string"?this.references.wrapper:void 0;return M.default.createElement(S,{ref:ee,style:{...O,width:K,height:pe},...G},M.default.createElement(V,{fallback:ce},R?this.renderPreview(p):this.renderActivePlayer(p)))}},u(A,"displayName","ReactPlayer"),u(A,"propTypes",g.propTypes),u(A,"defaultProps",g.defaultProps),u(A,"addCustomPlayer",p=>{W.push(p)}),u(A,"removeCustomPlayers",()=>{W.length=0}),u(A,"canPlay",p=>{for(const O of[...W,...N])if(O.canPlay(p))return!0;return!1}),u(A,"canEnablePIP",p=>{for(const O of[...W,...N])if(O.canEnablePIP&&O.canEnablePIP(p))return!0;return!1}),A};return Ar}var Fr,Kn;function ji(){if(Kn)return Fr;Kn=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,i=(C,j)=>{for(var g in j)t(C,g,{get:j[g],enumerable:!0})},o=(C,j,g,f)=>{if(j&&typeof j=="object"||typeof j=="function")for(let h of n(j))!s.call(C,h)&&h!==g&&t(C,h,{get:()=>j[h],enumerable:!(f=r(j,h))||f.enumerable});return C},l=(C,j,g)=>(g=C!=null?e(a(C)):{},o(!C||!C.__esModule?t(g,"default",{value:C,enumerable:!0}):g,C)),c=C=>o(t({},"__esModule",{value:!0}),C),w={};i(w,{default:()=>$}),Fr=c(w);var u=l(Di()),v=Yi();const M=u.default[u.default.length-1];var $=(0,v.createReactPlayer)(u.default,M);return Fr}var Ai=ji();const Fi=ui(Ai),za=E.div`
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .react-player {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    height: 50%;

    & > video {
      height: fit-content;
      width: 100%;
      object-fit: contain;
      border-radius: 8px;
      background-color: var(--neutral-colors-dark);
    }
  }
`,qa=E.div`
  position: relative;
  z-index: 1;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  & > ${za} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`,Hi=E.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #e7e9ed;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  margin: auto 0;
  color: var(--neutral-colors-light);
  justify-content: center;
  z-index: 5;
`,Vi=ci`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Wi=E.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 3px solid var(--neutral-colors-light);
  border-right: 3px solid var(--neutral-colors-light);
  border-bottom: 3px solid var(--neutral-colors-light);
  border-left: 3px solid var(--brand-colors-accent);
  transform: translateZ(0);
  animation: ${Vi} 1.1s infinite linear;
  border-radius: 50%;
  width: 46px;
  height: 46px;

  &:after {
    border-radius: 50%;
    width: 46px;
    height: 46px;
  }
`,Ui=E.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-end;
  position: absolute;
  flex-direction: column;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
`,zi=E.div`
  background-color: rgba(2, 2, 16, 0.32);
  color: #fff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 8px;
  position: absolute;
  z-index: 100;
  bottom: ${({$controls:e})=>e?"60px":"10px"};
  right: 0;
  left: 0;
  width: fit-content;
  margin: 0 auto;
  max-width: 80%;
  width: fit-content;
`,qi=E.div`
  position: absolute;
  ${({$position:e})=>e==="center"?`
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `:e==="left"?`
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
      `:`
      top: 50%;
      right: 24px;
      transform: translateY(-50%);
    `}
  z-index: 110;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 88px;
  min-height: 72px;
  padding: 14px 18px;
  border-radius: 12px;
  background: rgba(2, 2, 16, 0.62);
  color: #fff;
  backdrop-filter: blur(4px);
`,Qn=E.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
`,$i=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,Gi=E.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
`,Bi=`
  /* Hide native HLS subtitles completely - comprehensive approach */
  video::cue {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  video::-webkit-media-text-track-display {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  video::cue-region {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  video::-webkit-media-text-track-container {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  /* Target ReactPlayer specifically */
  .react-player video::cue {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .react-player video::-webkit-media-text-track-display {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .react-player video::cue-region {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .react-player video::-webkit-media-text-track-container {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  /* Additional selectors for different browsers */
  video::-moz-media-text-track-display {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  video::-ms-media-text-track-display {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  /* Hide any subtitle overlays */
  .react-player video + div[style*="position: absolute"] {
    display: none !important;
  }
  
  /* Target HLS video player specifically */
  .hls-video-player::cue {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .hls-video-player::-webkit-media-text-track-display {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .hls-video-player::-webkit-media-text-track-container {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  
  .hls-video-player::cue-region {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
`,Zi=()=>((()=>{const t=document.getElementById("hls-subtitle-styles");t&&t.remove();const r=document.createElement("style");r.id="hls-subtitle-styles",r.textContent=Bi,document.head.appendChild(r)})(),()=>{const t=document.getElementById("hls-subtitle-styles");t&&t.remove()}),Xi=E.div`
  position: absolute;
  bottom: 45px;
  left: 5px;
  right: 5px;
  height: 6px;
  z-index: ${e=>e.$isFullscreen?2147483646:15};
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  overflow: visible;

  ${e=>e.$isFullscreen?`
    position: absolute;
    left: 5px;
    right: 5px;
    bottom: 42px;
    top: auto;
    height: 6px;
    z-index: 2147483646;
    width: 100%;
    opacity: 1;
    visibility: visible;
  `:""}

  ${e=>e.$isFullscreen?"":`
    ${qa}:hover & {
      opacity: 1 !important;
    }
  `}

  &.controls-visible {
    opacity: 1 !important;
  }
`,Ki=E.div`
  position: absolute;
  ${e=>e.$isFullscreen?"top: auto; bottom: 0; transform: translateX(-50%);":"bottom: -3px; transform: translateX(-50%);"}
  left: 0;
  right: 0;
  bottom: -3px;
  width: ${e=>e.$isFullscreen?"12px":"10px"};
  height: ${e=>e.$isFullscreen?"12px":"10px"};
  background-color: #ffd700;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: auto;
  border: 2px solid #fff;
  box-shadow: ${e=>e.$isFullscreen?"0 2px 4px rgba(0, 0, 0, 0.4)":"0 2px 4px rgba(0, 0, 0, 0.3)"};
  transition: all 0.2s ease;
  z-index: ${e=>e.$isFullscreen?2147483647:20};

  &:hover {
    transform: translateX(-50%) scale(1.2);
    background-color: #ffed4e;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  }
`,Qi=E.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  pointer-events: none;
  z-index: 2147483647;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }
`,Ji=E.div`
  font-size: 10px;
  opacity: 0.8;
  margin-top: 2px;
`;E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${e=>e.$isFullscreen?2147483646:999};
  pointer-events: none;
`;const eo=E.div`
  position: absolute;
  bottom: 70px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid #e2e8f0;
  z-index: ${e=>e.$isFullscreen?2147483647:1e3};
  width: 320px;
  height: 270px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  pointer-events: auto;

  ${e=>{const t=e.$position||50,r=e.$alignment||"center",n=20;return r==="left"?`
        left: ${n}px;
        &::after { left: calc(${t}% - ${n}px); }
        &::before { left: calc(${t}% - ${n}px); }
      `:r==="right"?`
        right: ${n}px;
        &::after { right: calc(${100-t}% - ${n}px); }
        &::before { right: calc(${100-t}% - ${n}px); }
      `:`
        left: ${t}%;
        transform: translateX(-50%);
        &::after { left: 50%; }
        &::before { left: 50%; }
      `}}

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    transform: translateX(-50%);
    border: 8px solid transparent;
  }

  &::after {
    border-top-color: white;
    z-index: 2;
  }

  &::before {
    border-top-color: #e2e8f0;
    z-index: 1;
    margin-top: 1px;
  }
`,to=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  background: rgba(86, 90, 98, 0.6);
  backdrop-filter: blur(4px);
  padding: 12px 16px;
  position: relative;
  opacity: 0.8;

  /* Responsive padding adjustments */
  @media screen and (max-width: 768px) {
    padding: 8px 12px;
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    padding: 6px 8px;
    gap: 8px;
  }

  svg {
    cursor: pointer;
    transition: transform 0.2s ease, fill 0.2s ease;

    /* Desktop and large screens */
    @media screen and (min-width: 1501px) {
      width: 24px;
      height: 24px;
    }

    /* Medium to large screens */
    @media screen and (max-width: 1500px) {
      width: 20px;
      height: 20px;
    }

    /* Small to medium screens */
    @media screen and (max-width: 1000px) {
      width: 18px;
      height: 18px;
    }

    /* Tablet screens */
    @media screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
    }

    /* Mobile screens */
    @media screen and (max-width: 480px) {
      width: 18px;
      height: 18px;
    }

    /* Very small mobile screens */
    @media screen and (max-width: 320px) {
      width: 16px;
      height: 16px;
    }

    &:hover {
      transform: scale(1.1);
      
      path {
        fill: ${({theme:e})=>{var t,r;return(t=e==null?void 0:e.colors)!=null&&t.primary&&typeof e.colors.primary=="object"&&"main"in e.colors.primary?e.colors.primary.main||"#08C694":typeof((r=e==null?void 0:e.colors)==null?void 0:r.primary)=="string"?e.colors.primary:"var(--brand-colors-accent, #08C694)"}} !important;
      }
    }

    &:active {
      transform: scale(0.95);
    }
  }

  & > p {
    color: var(--neutral-colors-light);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    ${{fontStyle:"descriptor"}}
  }
`,ro=E.input`
  width: 100%;
  height: 2px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({value:e,theme:t})=>{var n,a;let r="var(--brand-colors-accent)";return(n=t==null?void 0:t.colors)!=null&&n.primary&&typeof t.colors.primary=="object"&&"main"in t.colors.primary?r=t.colors.primary.main||"#08C694":typeof((a=t==null?void 0:t.colors)==null?void 0:a.primary)=="string"&&(r=t.colors.primary),`linear-gradient(
      to right,
      ${r} 0%,
      ${r} ${e}%,
      var(--level-dark-200) ${e}%,
      var(--level-dark-200) 100%
    )`}};
  outline: none;
  border: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:focus {
    outline: none;
    border: none;
  }

  /* Enhanced mobile touch target */
  @media (hover: none) and (pointer: coarse) {
    height: 4px;
  }
 &::-webkit-slider-runnable-track {
    border: none;
    outline: none;
  }

  &::-moz-range-track {
    border: none;
    outline: none;
  }

  &::-ms-track {
    border: none;
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({theme:e})=>{var t,r;return(t=e==null?void 0:e.colors)!=null&&t.primary&&typeof e.colors.primary=="object"&&"main"in e.colors.primary?e.colors.primary.main||"#08C694":typeof((r=e==null?void 0:e.colors)==null?void 0:r.primary)=="string"?e.colors.primary:"var(--brand-colors-accent)"}};
    cursor: pointer;
    outline: none;
    border: none;

    /* Larger touch target for mobile */
    @media (hover: none) and (pointer: coarse) {
      width: 16px;
      height: 16px;
    }

    /* Responsive adjustments */
    @media screen and (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({theme:e})=>{var t,r;return(t=e==null?void 0:e.colors)!=null&&t.primary&&typeof e.colors.primary=="object"&&"main"in e.colors.primary?e.colors.primary.main||"#08C694":typeof((r=e==null?void 0:e.colors)==null?void 0:r.primary)=="string"?e.colors.primary:"var(--brand-colors-accent)"}};
    cursor: pointer;
    outline: none;
    border: none;
    border: none;

    /* Larger touch target for mobile */
    @media (hover: none) and (pointer: coarse) {
      width: 16px;
      height: 16px;
    }

    /* Responsive adjustments */
    @media screen and (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }

  /* Enhance visibility on focus for accessibility */
  &:focus {
    outline: none;
  }
`,no=E.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  /* Responsive gap adjustments */
  @media screen and (max-width: 768px) {
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
  }

  & > svg {
    cursor: pointer;
  }

  & > input {
    display: none;
  }

  &:hover > input {
    display: block;
  }

  /* Always show volume slider on touch devices */
  @media (hover: none) and (pointer: coarse) {
    & > input {
      display: block;
    }
  }

  /* Hide volume slider on very small screens */
  @media screen and (max-width: 320px) {
    & > input {
      display: none !important;
    }
  }
`,ao=E.input`
  width: 100px;
  height: 4px;
  border-radius: 5px;
  background: ${({value:e,theme:t})=>{var n,a;let r="var(--neutral-colors-light)";return(n=t==null?void 0:t.colors)!=null&&n.primary&&typeof t.colors.primary=="object"&&"main"in t.colors.primary?r=t.colors.primary.main||"#08C694":typeof((a=t==null?void 0:t.colors)==null?void 0:a.primary)=="string"&&(r=t.colors.primary),`linear-gradient(
      to right,
      ${r} 0%,
      ${r} ${e}%,
      var(--level-grey-500) ${e}%,
      var(--level-grey-500) 100%
    )`}};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  /* Responsive width adjustments */
  @media screen and (max-width: 768px) {
    width: 80px;
  }

  @media screen and (max-width: 480px) {
    width: 60px;
  }

  @media screen and (max-width: 320px) {
    width: 50px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({theme:e})=>{var t,r;return(t=e==null?void 0:e.colors)!=null&&t.primary&&typeof e.colors.primary=="object"&&"main"in e.colors.primary?e.colors.primary.main||"#08C694":typeof((r=e==null?void 0:e.colors)==null?void 0:r.primary)=="string"?e.colors.primary:"var(--neutral-colors-light)"}};
    cursor: pointer;

    /* Responsive thumb size */
    @media screen and (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({theme:e})=>{var t,r;return(t=e==null?void 0:e.colors)!=null&&t.primary&&typeof e.colors.primary=="object"&&"main"in e.colors.primary?e.colors.primary.main||"#08C694":typeof((r=e==null?void 0:e.colors)==null?void 0:r.primary)=="string"?e.colors.primary:"var(--neutral-colors-light)"}};
    cursor: pointer;
    border: none;

    /* Responsive thumb size */
    @media screen and (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }
`,so=E.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  
  /* Responsive gap adjustments */
  @media screen and (max-width: 768px) {
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
  }

  @media screen and (max-width: 320px) {
    gap: 6px;
  }

  /* Hide rewind/forward controls on very small screens */
  @media screen and (max-width: 480px) {
    .rewind-control,
    .forward-control {
      display: none;
    }
  }
`,io=E.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;

  /* Responsive gap adjustments */
  @media screen and (max-width: 768px) {
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
    
    /* Hide less essential controls on mobile */
    .skip-control,
    .favorite-control,
    .download-control {
      display: none;
    }
  }

  @media screen and (max-width: 320px) {
    gap: 6px;
  }

  .skip-icon-disabled {
    cursor: default;

    & > path {
      fill: var(--level-dark-300);
    }
  }
`,oo=E.div`
  color: #FFFFFF;
  ${{fontStyle:"descriptor"}}
  text-align: right;
  white-space: nowrap;
  font-size: 14px;
  
  /* Responsive font size adjustments */
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`,et=E.button.attrs({type:"button"})`
  border: none;
  background: none;
  padding: 0;
  color: inherit;
  font: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 24px;
  min-height: 24px;
  border-radius: 4px;
  transition: background-color 0.2s ease, transform 0.1s ease;

  /* Enhanced touch targets for mobile */
  @media (hover: none) and (pointer: coarse) {
    min-width: 32px;
    min-height: 32px;
  }

  & > svg > path {
    fill: #FFFFFF !important;
    transition: fill 0.2s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    
    & > svg > path {
      fill: ${({theme:e})=>{var t,r;return(t=e==null?void 0:e.colors)!=null&&t.primary&&typeof e.colors.primary=="object"&&"main"in e.colors.primary?e.colors.primary.main||"#08C694":typeof((r=e==null?void 0:e.colors)==null?void 0:r.primary)=="string"?e.colors.primary:"var(--video-player-primary-color, #08C694)"}} !important;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid #FFFFFF;
    outline-offset: 2px;
  }

  &:disabled {
    cursor: default;
  }
`,lo=E(et)`
  /* Additional specific styles if needed */
`,uo=E(et)`
  & > svg {
    width: 24px !important;
    height: 24px !important;
    
    @media screen and (max-width: 1500px) {
      width: 20px !important;
      height: 20px !important;
    }

    @media screen and (max-width: 1000px) {
      width: 16px !important;
      height: 16px !important;
    }

    @media screen and (max-width: 768px) {
      width: 20px !important;
      height: 20px !important;
    }

    @media screen and (max-width: 480px) {
      width: 18px !important;
      height: 18px !important;
    }
  }
`,co=E(et)`
  /* Additional specific styles if needed */
`,fo=E(et)`
  /* Additional specific styles if needed */
`,po=E(et)`
  &.pip-active {
    background-color: ${({theme:e})=>{var i,o;let t;(i=e==null?void 0:e.colors)!=null&&i.primary&&typeof e.colors.primary=="object"&&"main"in e.colors.primary?t=e.colors.primary.main||"#08C694":typeof((o=e==null?void 0:e.colors)==null?void 0:o.primary)=="string"?t=e.colors.primary:t="#08C694";const r=t.replace("#",""),n=parseInt(r.substr(0,2),16),a=parseInt(r.substr(2,2),16),s=parseInt(r.substr(4,2),16);return`rgba(${n}, ${a}, ${s}, 0.2)`}};
    
    & > svg > path {
      fill: ${({theme:e})=>{var t,r;return(t=e==null?void 0:e.colors)!=null&&t.primary&&typeof e.colors.primary=="object"&&"main"in e.colors.primary?e.colors.primary.main||"#08C694":typeof((r=e==null?void 0:e.colors)==null?void 0:r.primary)=="string"?e.colors.primary:"var(--video-player-primary-color, #08C694)"}} !important;
    }
  }
`,ho=E(et)`
  /* Additional specific styles if needed */
`,mo=E(et)`
  /* Additional specific styles if needed */
`,Qt=E(et)`
  /* Additional specific styles if needed */
`,yo=E(et)`
  /* Additional specific styles for notes icon */
`,go=[{label:"playback_speed.2x",value:2},{label:"playback_speed.1_75x",value:1.75},{label:"playback_speed.1_5x",value:1.5},{label:"playback_speed.1_25x",value:1.25},{label:"general.normal",value:1},{label:"playback_speed.0_75x",value:.75},{label:"playback_speed.0_5x",value:.5}],nt=15;//! moment.js
//! version : 2.31.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var $a;function b(){return $a.apply(null,arguments)}function vo(e){$a=e}function He(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function dt(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function nn(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(z(e,t))return!1;return!0}function we(e){return e===void 0}function Je(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function At(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Ga(e,t){var r=[],n,a=e.length;for(n=0;n<a;++n)r.push(t(e[n],n));return r}function Ue(e,t){for(var r in t)z(t,r)&&(e[r]=t[r]);return z(t,"toString")&&(e.toString=t.toString),z(t,"valueOf")&&(e.valueOf=t.valueOf),e}function ze(e,t,r,n){return vs(e,t,r,n,!0).utc()}function _o(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidOffset:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Y(e){return e._pf==null&&(e._pf=_o()),e._pf}var Gr;Array.prototype.some?Gr=Array.prototype.some:Gr=function(e){var t=Object(this),r=t.length>>>0,n;for(n=0;n<r;n++)if(n in t&&e.call(this,t[n],n,t))return!0;return!1};function an(e){var t=null,r=!1,n=e._d&&!isNaN(e._d.getTime());if(n&&(t=Y(e),r=Gr.call(t.parsedDateParts,function(a){return a!=null}),n=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidOffset&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(n=n&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=n;else return n;return e._isValid}function Ft(e){var t=ze(NaN);return e!=null?Ue(Y(t),e):Y(t).userInvalidated=!0,t}var Jn=b.momentProperties=[],Hr=!1;function sn(e,t){var r,n,a,s=Jn.length;if(we(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),we(t._i)||(e._i=t._i),we(t._f)||(e._f=t._f),we(t._l)||(e._l=t._l),we(t._strict)||(e._strict=t._strict),we(t._tzm)||(e._tzm=t._tzm),we(t._isUTC)||(e._isUTC=t._isUTC),we(t._offset)||(e._offset=t._offset),we(t._pf)||(e._pf=Y(t)),we(t._locale)||(e._locale=t._locale),s>0)for(r=0;r<s;r++)n=Jn[r],a=t[n],we(a)||(e[n]=a);return e}function Ht(e){sn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Hr===!1&&(Hr=!0,b.updateOffset(this),Hr=!1)}function Te(e){return e instanceof Ht||e!=null&&e._isAMomentObject!=null}function Ba(e){b.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Le(e,t){var r=!0;return Ue(function(){if(b.deprecationHandler!=null&&b.deprecationHandler(null,e),r){var n=[],a,s,i,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(i in arguments[0])z(arguments[0],i)&&(a+=i+": "+arguments[0][i]+", ");a=a.slice(0,-2)}else a=arguments[s];n.push(a)}Ba(e+`
Arguments: `+Array.prototype.slice.call(n).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var ea={};function Za(e,t){b.deprecationHandler!=null&&b.deprecationHandler(e,t),ea[e]||(Ba(t+`
`+new Error().stack),ea[e]=!0)}b.suppressDeprecationWarnings=!1;b.deprecationHandler=null;function qe(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}var ta={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Ie(e){return typeof e=="string"?ta[e]||ta[e.toLowerCase()]:void 0}function on(e){var t={},r,n;for(n in e)z(e,n)&&(r=Ie(n),r&&(t[r]=e[n]));return t}var wo={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function bo(e){var t=[],r;for(r in e)z(e,r)&&t.push({unit:r,priority:wo[r]});return t.sort(function(n,a){return n.priority-a.priority}),t}function Re(e,t,r){var n=""+Math.abs(e),a=t-n.length,s=e>=0;return(s?r?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+n}var ln=/(\[[^\[]*\])|(\\e)|(\\)?(eHHmm|[Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Jt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Vr={},mt={};function D(e,t,r,n){var a=n;typeof n=="string"&&(a=function(){return this[n]()}),e&&(mt[e]=a),t&&(mt[t[0]]=function(){return Re(a.apply(this,arguments),t[1],t[2])}),r&&(mt[r]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function xo(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function So(e){var t=e.match(ln),r,n;for(r=0,n=t.length;r<n;r++)mt[t[r]]?t[r]=mt[t[r]]:t[r]=xo(t[r]);return function(a){var s="",i;for(i=0;i<n;i++)s+=qe(t[i])?t[i].call(a,e):t[i];return s}}function rr(e,t){if(!e.isValid())return e.localeData().invalidDate();t=Xa(t,e.localeData());var r="$"+t;return z(Vr,r)||(Vr[r]=So(t)),Vr[r](e)}function Xa(e,t){var r=5;function n(a){return t.longDateFormat(a)||a}for(Jt.lastIndex=0;r>=0&&Jt.test(e);)e=e.replace(Jt,n),Jt.lastIndex=0,r-=1;return e}var Ka=/\d/,Me=/\d\d/,Qa=/\d{3}/,un=/\d{4}/,cr=/[+-]?\d{6}/,re=/\d\d?/,Ja=/\d\d\d\d?/,dn=/\d\d\d\d\d\d?/,fr=/\d{1,3}/,cn=/\d{1,4}/,pr=/[+-]?\d{1,6}/,vt=/\d+/,hr=/[+-]?\d+/,ko=/Z|[+-]\d\d:?\d\d/gi,mr=/Z|[+-]\d\d(?::?\d\d)?/gi,Po=/[+-]?\d+(\.\d{1,3})?/,Vt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,_t=/^[1-9]\d?/,fn=/^([1-9]\d|\d)/,sr;sr={};function k(e,t,r){sr[e]=qe(t)?t:function(n,a){return n&&r?r:t}}function To(e,t){return z(sr,e)?sr[e](t._strict,t._locale):new RegExp(Mo(e))}function Mo(e){return Ke(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,n,a,s){return r||n||a||s}))}function Ke(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Ee(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function H(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=Ee(t)),r}var Br={};function J(e,t){var r,n=t,a;for(typeof e=="string"&&(e=[e]),Je(t)&&(n=function(s,i){i[t]=H(s)}),a=e.length,r=0;r<a;r++)Br[e[r]]=n}function wt(e,t){J(e,function(r,n,a,s){a._w=a._w||{},t(r,a._w,a,s)})}function Oo(e,t,r){t!=null&&z(Br,e)&&Br[e](t,r._a,r,e)}function yr(e){return e%4===0&&e%100!==0||e%400===0}var ie=0,Pe=1,be=2,ue=3,Ne=4,Xe=5,ut=6,Do=7,Co=8;D("Y",0,0,function(){var e=this.year();return e<=9999?Re(e,4):"+"+e});D(0,["YY",2],0,function(){return this.year()%100});D(0,["YYYY",4],0,"year");D(0,["YYYYY",5],0,"year");D(0,["YYYYYY",6,!0],0,"year");k("Y",hr);k("YY",re,Me);k("YYYY",cn,un);k("YYYYY",pr,cr);k("YYYYYY",pr,cr);J(["YYYYY","YYYYYY"],ie);J("YYYY",function(e,t){t[ie]=e.length===2?b.parseTwoDigitYear(e):H(e)});J("YY",function(e,t){t[ie]=b.parseTwoDigitYear(e)});J("Y",function(e,t){t[ie]=parseInt(e,10)});function Lt(e){return yr(e)?366:365}b.parseTwoDigitYear=function(e){return H(e)+(H(e)>68?1900:2e3)};var es=bt("FullYear",!0);function Eo(){return yr(this.year())}function bt(e,t){return function(r){return r!=null?(ts(this,e,r),b.updateOffset(this,t),this):It(this,e)}}function It(e,t){if(!e.isValid())return NaN;var r=e._d,n=e._isUTC;switch(t){case"Milliseconds":return n?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return n?r.getUTCSeconds():r.getSeconds();case"Minutes":return n?r.getUTCMinutes():r.getMinutes();case"Hours":return n?r.getUTCHours():r.getHours();case"Date":return n?r.getUTCDate():r.getDate();case"Day":return n?r.getUTCDay():r.getDay();case"Month":return n?r.getUTCMonth():r.getMonth();case"FullYear":return n?r.getUTCFullYear():r.getFullYear();default:return NaN}}function ts(e,t,r){var n,a,s,i,o;if(!(!e.isValid()||isNaN(r))){switch(n=e._d,a=e._isUTC,t){case"Milliseconds":return void(a?n.setUTCMilliseconds(r):n.setMilliseconds(r));case"Seconds":return void(a?n.setUTCSeconds(r):n.setSeconds(r));case"Minutes":return void(a?n.setUTCMinutes(r):n.setMinutes(r));case"Hours":return void(a?n.setUTCHours(r):n.setHours(r));case"Date":return void(a?n.setUTCDate(r):n.setDate(r));case"FullYear":break;default:return}s=r,i=e.month(),o=e.date(),o=o===29&&i===1&&!yr(s)?28:o,a?n.setUTCFullYear(s,i,o):n.setFullYear(s,i,o)}}function No(e){return e=Ie(e),qe(this[e])?this[e]():this}function Ro(e,t){if(typeof e=="object"){e=on(e);var r=bo(e),n,a=r.length;for(n=0;n<a;n++)this[r[n].unit](e[r[n].unit])}else if(e=Ie(e),qe(this[e]))return this[e](t);return this}function Lo(e,t){return(e%t+t)%t}var se;Array.prototype.indexOf?se=Array.prototype.indexOf:se=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function pn(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=Lo(t,12);return e+=(t-r)/12,r===1?yr(e)?29:28:31-r%7%2}D("M",["MM",2],"Mo",function(){return this.month()+1});D("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});D("MMMM",0,0,function(e){return this.localeData().months(this,e)});k("M",re,_t);k("MM",re,Me);k("MMM",function(e,t){return t.monthsShortRegex(e)});k("MMMM",function(e,t){return t.monthsRegex(e)});J(["M","MM"],function(e,t){t[Pe]=H(e)-1});J(["MMM","MMMM"],function(e,t,r,n){var a=r._locale.monthsParse(e,n,r._strict);a!=null?t[Pe]=a:Y(r).invalidMonth=e});var Io="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),rs="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ns=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Yo=Vt,jo=Vt,ra=["monthsParse","longMonthsParse","shortMonthsParse","monthsRegex","monthsShortRegex","monthsStrictRegex","monthsShortStrictRegex"];function Ao(e,t){var r,n;for(r=0;r<ra.length;r++)n=ra[r],z(t,n)||delete e["_"+n]}function Fo(e,t){return e?He(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||ns).test(t)?"format":"standalone"][e.month()]:He(this._months)?this._months:this._months.standalone}function Ho(e,t){return e?He(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[ns.test(t)?"format":"standalone"][e.month()]:He(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Vo(e,t,r){var n,a,s,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)s=ze([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(s,"").toLocaleLowerCase();return r?t==="MMM"?(a=se.call(this._shortMonthsParse,i),a!==-1?a:null):(a=se.call(this._longMonthsParse,i),a!==-1?a:null):t==="MMM"?(a=se.call(this._shortMonthsParse,i),a!==-1?a:(a=se.call(this._longMonthsParse,i),a!==-1?a:null)):(a=se.call(this._longMonthsParse,i),a!==-1?a:(a=se.call(this._shortMonthsParse,i),a!==-1?a:null))}function Wo(e,t,r){var n,a,s;if(this._monthsParseExact)return Vo.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(a=ze([2e3,n]),r&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!r&&!this._monthsParse[n]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[n]=new RegExp(s.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[n].test(e))return n;if(r&&t==="MMM"&&this._shortMonthsParse[n].test(e))return n;if(!r&&this._monthsParse[n].test(e))return n}}function as(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=H(t);else if(t=e.localeData().monthsParse(t),!Je(t))return e}var r=t,n=e.date();return n=n<29?n:Math.min(n,pn(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,n):e._d.setMonth(r,n),e}function ss(e){return e!=null?(as(this,e),b.updateOffset(this,!0),this):It(this,"Month")}function Uo(){return pn(this.year(),this.month())}function zo(e){return this._monthsParseExact?(z(this,"_monthsRegex")||is.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(z(this,"_monthsShortRegex")||(this._monthsShortRegex=Yo),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function qo(e){return this._monthsParseExact?(z(this,"_monthsRegex")||is.call(this),e?this._monthsStrictRegex:this._monthsRegex):(z(this,"_monthsRegex")||(this._monthsRegex=jo),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function is(){function e(l,c){return c.length-l.length}var t=[],r=[],n=[],a,s,i,o;for(a=0;a<12;a++)s=ze([2e3,a]),i=Ke(this.monthsShort(s,"")),o=Ke(this.months(s,"")),t.push(i),r.push(o),n.push(o),n.push(i);t.sort(e),r.sort(e),n.sort(e),this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}D("d",0,"do","day");D("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});D("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});D("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});D("e",0,0,"weekday");D("E",0,0,"isoWeekday");D("eHHmm",0,0,function(){return""+this.weekday()+Re(this.hours(),2)+Re(this.minutes(),2)});k("d",re);k("e",re);k("E",re);k("eHHmm",dn);k("dd",function(e,t){return t.weekdaysMinRegex(e)});k("ddd",function(e,t){return t.weekdaysShortRegex(e)});k("dddd",function(e,t){return t.weekdaysRegex(e)});wt(["dd","ddd","dddd"],function(e,t,r,n){var a=r._locale.weekdaysParse(e,n,r._strict);a!=null?t.d=a:Y(r).invalidWeekday=e});wt(["d","e","E"],function(e,t,r,n){t[n]=H(e)});wt("eHHmm",function(e,t,r){var n=e.length-4;t.e=H(e.substr(0,n)),r._a[ue]=H(e.substr(n,2)),r._a[Ne]=H(e.substr(n+2))});function $o(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Go(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function hn(e,t){return e.slice(t,7).concat(e.slice(0,t))}var Bo="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),os="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Zo="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Xo=Vt,Ko=Vt,Qo=Vt,na=["weekdaysParse","fullWeekdaysParse","shortWeekdaysParse","minWeekdaysParse","weekdaysRegex","weekdaysShortRegex","weekdaysMinRegex","weekdaysStrictRegex","weekdaysShortStrictRegex","weekdaysMinStrictRegex"];function Jo(e,t){var r,n;for(r=0;r<na.length;r++)n=na[r],z(t,n)||delete e["_"+n]}function el(e,t){var r=He(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?hn(r,this._week.dow):e?r[e.day()]:r}function tl(e){return e===!0?hn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function rl(e){return e===!0?hn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function nl(e,t,r){var n,a,s,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)s=ze([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(s,"").toLocaleLowerCase();return r?t==="dddd"?(a=se.call(this._weekdaysParse,i),a!==-1?a:null):t==="ddd"?(a=se.call(this._shortWeekdaysParse,i),a!==-1?a:null):(a=se.call(this._minWeekdaysParse,i),a!==-1?a:null):t==="dddd"?(a=se.call(this._weekdaysParse,i),a!==-1||(a=se.call(this._shortWeekdaysParse,i),a!==-1)?a:(a=se.call(this._minWeekdaysParse,i),a!==-1?a:null)):t==="ddd"?(a=se.call(this._shortWeekdaysParse,i),a!==-1||(a=se.call(this._weekdaysParse,i),a!==-1)?a:(a=se.call(this._minWeekdaysParse,i),a!==-1?a:null)):(a=se.call(this._minWeekdaysParse,i),a!==-1||(a=se.call(this._weekdaysParse,i),a!==-1)?a:(a=se.call(this._shortWeekdaysParse,i),a!==-1?a:null))}function al(e,t,r){var n,a,s;if(this._weekdaysParseExact)return nl.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(a=ze([2e3,1]).day(n),r&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[n]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[n]=new RegExp(s.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[n].test(e))return n;if(r&&t==="ddd"&&this._shortWeekdaysParse[n].test(e))return n;if(r&&t==="dd"&&this._minWeekdaysParse[n].test(e))return n;if(!r&&this._weekdaysParse[n].test(e))return n}}function sl(e){if(!this.isValid())return e!=null?this:NaN;var t=It(this,"Day");return e!=null?(e=$o(e,this.localeData()),this.add(e-t,"d")):t}function il(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function ol(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=Go(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function ll(e){return this._weekdaysParseExact?(z(this,"_weekdaysRegex")||mn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(z(this,"_weekdaysRegex")||(this._weekdaysRegex=Xo),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function ul(e){return this._weekdaysParseExact?(z(this,"_weekdaysRegex")||mn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(z(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ko),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function dl(e){return this._weekdaysParseExact?(z(this,"_weekdaysRegex")||mn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(z(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Qo),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function mn(){function e(w,u){return u.length-w.length}var t=[],r=[],n=[],a=[],s,i,o,l,c;for(s=0;s<7;s++)i=ze([2e3,1]).day(s),o=Ke(this.weekdaysMin(i,"")),l=Ke(this.weekdaysShort(i,"")),c=Ke(this.weekdays(i,"")),t.push(o),r.push(l),n.push(c),a.push(o),a.push(l),a.push(c);t.sort(e),r.sort(e),n.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function cl(e){var t,r;Ao(this,e),Jo(this,e);for(r in e)z(e,r)&&(t=e[r],qe(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Zr(e,t){var r=Ue({},e),n;for(n in t)z(t,n)&&(dt(e[n])&&dt(t[n])?(r[n]={},Ue(r[n],e[n]),Ue(r[n],t[n])):t[n]!=null?r[n]=t[n]:delete r[n]);for(n in e)z(e,n)&&!z(t,n)&&dt(e[n])&&(r[n]=Ue({},r[n]));return r}function yn(e){e!=null&&this.set(e)}var Xr;Object.keys?Xr=Object.keys:Xr=function(e){var t,r=[];for(t in e)z(e,t)&&r.push(t);return r};var fl={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function pl(e,t,r){var n=this._calendar[e]||this._calendar.sameElse;return qe(n)?n.call(t,r):n}var hl={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function ml(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()],n=this._longDateFormatCache;return t||!r?t:n&&n[e]&&n[e].formatUpper===r?n[e].format:(t=r.match(ln).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),n||(n=this._longDateFormatCache={}),n[e]={formatUpper:r,format:t},t)}var yl="Invalid date";function gl(){return this._invalidDate}var vl="%d",_l=/\d{1,2}/;function wl(e){return this._ordinal.replace("%d",e)}var bl={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function ls(e,t,r,n){var a=this._relativeTime[r];return qe(a)?a(e,t,r,n):a.replace(/%d/i,e)}function xl(e,t,r,n){return this.postformat(ls.call(this,e,t,r,n))}function us(e,t){var r=this._relativeTime[e>0?"future":"past"];return qe(r)?r(t):r.replace(/%s/i,t)}function Sl(e,t){return this.postformat(us.call(this,e,t))}function kl(e,t,r,n,a,s,i){var o;return e<100&&e>=0?(o=new Date(e+400,t,r,n,a,s,i),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,r,n,a,s,i),o}function ct(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function ir(e,t,r){var n=7+t-r,a=(7+ct(e,0,n).getUTCDay()-t)%7;return-a+n-1}function ds(e,t,r,n,a){var s=(7+r-n)%7,i=ir(e,n,a),o=1+7*(t-1)+s+i,l,c;return o<=0?(l=e-1,c=Lt(l)+o):o>Lt(e)?(l=e+1,c=o-Lt(e)):(l=e,c=o),{year:l,dayOfYear:c}}function cs(e,t,r,n){var a=ir(e,r,n),s=Math.floor((t-a-1)/7)+1,i,o;return s<1?(o=e-1,i=s+Qe(o,r,n)):s>Qe(e,r,n)?(i=s-Qe(e,r,n),o=e+1):(o=e,i=s),{week:i,year:o}}function gn(e,t,r){return cs(e.year(),e.dayOfYear(),t,r)}function aa(e,t,r,n,a){var s=Math.round((ct(e,t,r)-ct(e,0,1))/864e5)+1;return cs(e,s,n,a)}function Qe(e,t,r){var n=ir(e,t,r),a=ir(e+1,t,r);return(Lt(e)-n+a)/7}D("w",["ww",2],"wo","week");D("W",["WW",2],"Wo","isoWeek");k("w",re,_t);k("ww",re,Me);k("W",re,_t);k("WW",re,Me);wt(["w","ww","W","WW"],function(e,t,r,n){t[n.substr(0,1)]=H(e)});function Pl(e){return gn(e,this._week.dow,this._week.doy).week}var Tl={dow:0,doy:6};function Ml(){return this._week.dow}function Ol(){return this._week.doy}function Dl(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function Cl(e){var t=gn(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}function vn(){return this.hours()%12||12}function El(){return this.hours()||24}D("H",["HH",2],0,"hour");D("h",["hh",2],0,vn);D("k",["kk",2],0,El);D("hmm",0,0,function(){return""+vn.apply(this)+Re(this.minutes(),2)});D("hmmss",0,0,function(){return""+vn.apply(this)+Re(this.minutes(),2)+Re(this.seconds(),2)});D("Hmm",0,0,function(){return""+this.hours()+Re(this.minutes(),2)});D("Hmmss",0,0,function(){return""+this.hours()+Re(this.minutes(),2)+Re(this.seconds(),2)});function fs(e,t){D(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}fs("a",!0);fs("A",!1);function ps(e,t){return t._meridiemParse}k("a",ps);k("A",ps);k("H",re,fn);k("h",re,_t);k("k",re,_t);k("HH",re,Me);k("hh",re,Me);k("kk",re,Me);k("hmm",Ja);k("hmmss",dn);k("Hmm",Ja);k("Hmmss",dn);J(["H","HH"],ue);J(["k","kk"],function(e,t,r){var n=H(e);t[ue]=n===24?0:n});J(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});J(["h","hh"],function(e,t,r){t[ue]=H(e),Y(r).bigHour=!0});J("hmm",function(e,t,r){var n=e.length-2;t[ue]=H(e.substr(0,n)),t[Ne]=H(e.substr(n)),Y(r).bigHour=!0});J("hmmss",function(e,t,r){var n=e.length-4,a=e.length-2;t[ue]=H(e.substr(0,n)),t[Ne]=H(e.substr(n,2)),t[Xe]=H(e.substr(a)),Y(r).bigHour=!0});J("Hmm",function(e,t,r){var n=e.length-2;t[ue]=H(e.substr(0,n)),t[Ne]=H(e.substr(n))});J("Hmmss",function(e,t,r){var n=e.length-4,a=e.length-2;t[ue]=H(e.substr(0,n)),t[Ne]=H(e.substr(n,2)),t[Xe]=H(e.substr(a))});function Nl(e){return(e+"").toLowerCase().charAt(0)==="p"}var Rl=/[ap]\.?m?\.?/i,Ll=bt("Hours",!0);function Il(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var hs={calendar:fl,longDateFormat:hl,invalidDate:yl,ordinal:vl,dayOfMonthOrdinalParse:_l,relativeTime:bl,months:Io,monthsShort:rs,week:Tl,weekdays:Bo,weekdaysMin:Zo,weekdaysShort:os,meridiemParse:Rl},Q={},xt={},Yt;function Yl(e,t){var r,n=Math.min(e.length,t.length);for(r=0;r<n;r+=1)if(e[r]!==t[r])return r;return n}function Kr(e){return e&&e.toLowerCase().replace("_","-")}function jl(e){for(var t=0,r,n,a,s;t<e.length;){for(s=Kr(e[t]).split("-"),r=s.length,n=Kr(e[t+1]),n=n?n.split("-"):null;r>0;){if(a=gr(s.slice(0,r).join("-")),a)return a;if(n&&n.length>=r&&Yl(s,n)>=r-1)break;r--}t++}return Yt}function Al(e){return typeof e=="string"&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e)}function gr(e){var t=null,r,n;if(z(Q,e))return Q[e];if(n=Kr(e),z(Q,n))return Q[n];if(typeof module<"u"&&module&&module.exports&&Al(n))try{t=Yt._abbr,r=require,r("./locale/"+n),st(t)}catch{Q[n]=null}if(z(Q,n))return Q[n]}function st(e,t){var r;return e&&(we(t)?r=tt(e):r=_n(e,t),r?Yt=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Yt._abbr}function _n(e,t){if(t!==null){var r,n=hs;if(t.abbr=e,Q[e]!=null)Za("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Q[e]._config;else if(t.parentLocale!=null)if(Q[t.parentLocale]!=null)n=Q[t.parentLocale]._config;else if(r=gr(t.parentLocale),r!=null)n=r._config;else return xt[t.parentLocale]||(xt[t.parentLocale]=[]),xt[t.parentLocale].push({name:e,config:t}),null;return Q[e]=new yn(Zr(n,t)),xt[e]&&xt[e].forEach(function(a){_n(a.name,a.config)}),st(e),Q[e]}else return delete Q[e],null}function Fl(e,t){var r,n=gr(e),a=hs;return n!=null&&(e=n._abbr),t!=null?(Q[e]!=null&&Q[e].parentLocale!=null?Q[e].set(Zr(Q[e]._config,t)):(n!=null&&(a=n._config),t=Zr(a,t),n==null&&(t.abbr=e),r=new yn(t),r.parentLocale=Q[e],Q[e]=r),st(e)):Q[e]!=null&&(Q[e].parentLocale!=null?(Q[e]=Q[e].parentLocale,e===st()&&st(e)):Q[e]!=null&&delete Q[e]),Q[e]}function tt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Yt;if(!He(e)){if(t=gr(e),t)return t;e=[e]}return jl(e)}function Hl(){return Xr(Q)}function wn(e){var t,r=e._a;return r&&Y(e).overflow===-2&&(t=r[Pe]<0||r[Pe]>11?Pe:r[be]<1||r[be]>pn(r[ie],r[Pe])?be:r[ue]<0||r[ue]>24||r[ue]===24&&(r[Ne]!==0||r[Xe]!==0||r[ut]!==0)?ue:r[Ne]<0||r[Ne]>59?Ne:r[Xe]<0||r[Xe]>59?Xe:r[ut]<0||r[ut]>999?ut:-1,Y(e)._overflowDayOfYear&&(t<ie||t>be)&&(t=be),Y(e)._overflowWeeks&&t===-1&&(t=Do),Y(e)._overflowWeekday&&t===-1&&(t=Co),Y(e).overflow=t),e}var Vl=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Wl=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ul=/Z|[+-]\d\d(?::?\d\d)?/,er=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Wr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],zl=/^\/?Date\((-?\d+)/i,ql=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,$l={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ms(e){var t,r,n=e._i,a=Vl.exec(n)||Wl.exec(n),s,i,o,l,c=er.length,w=Wr.length;if(a){for(Y(e).iso=!0,t=0,r=c;t<r;t++)if(er[t][1].exec(a[1])){i=er[t][0],s=er[t][2]!==!1;break}if(i==null){e._isValid=!1;return}if(a[3]){for(t=0,r=w;t<r;t++)if(Wr[t][1].exec(a[3])){o=(a[2]||" ")+Wr[t][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Ul.exec(a[4]))l="Z";else{e._isValid=!1;return}e._f=i+(o||"")+(l||""),xn(e)}else e._isValid=!1}function Gl(e,t,r,n,a,s){var i=[Bl(e),rs.indexOf(t),parseInt(r,10),parseInt(n,10),parseInt(a,10)];return s&&i.push(parseInt(s,10)),i}function Bl(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Zl(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Xl(e,t,r){if(e){var n=os.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay();if(n!==a)return Y(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Kl(e,t,r){if(e)return $l[e];if(t)return 0;var n=parseInt(r,10),a=n%100,s=(n-a)/100;return s*60+a}function ys(e){var t=ql.exec(Zl(e._i)),r;if(t){if(r=Gl(t[4],t[3],t[2],t[5],t[6],t[7]),!Xl(t[1],r,e))return;e._a=r,e._tzm=Kl(t[8],t[9],t[10]),e._d=ct.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),Y(e).rfc2822=!0}else e._isValid=!1}function Ql(e){var t=zl.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(ms(e),e._isValid===!1)delete e._isValid;else return;if(ys(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:b.createFromInputFallback(e)}b.createFromInputFallback=Le("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function St(e,t,r){return e??t??r}function sa(e,t,r){var n=Object.prototype.hasOwnProperty.call(e,"_isDefaultDatePartsForWeek"),a=e._isDefaultDatePartsForWeek;e._isDefaultDatePartsForWeek=!!r;try{return b._getDefaultDateParts(e,t,r)}finally{n?e._isDefaultDatePartsForWeek=a:delete e._isDefaultDatePartsForWeek}}function Jl(e){var t=e._defaultDatePartsNow;return t?(t.hasValue||(t.value=b.now(),t.hasValue=!0),t.value):b.now()}function eu(e,t,r){var n=r||e._isDefaultDatePartsForWeek,a=n?ne(t):new Date(t);return n?[a.year(),a.month(),a.date()]:e._useUTC?[a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()]:[a.getFullYear(),a.getMonth(),a.getDate()]}b._getDefaultDateParts=eu;function bn(e){var t,r,n=[],a,s,i,o,l;if(!e._d){for((e._a[ie]==null||e._a[Pe]==null||e._a[be]==null)&&(a=Jl(e),s=sa(e,a)),e._w&&e._a[be]==null&&e._a[Pe]==null&&tu(e,sa(e,a,!0)),e._dayOfYear!=null&&(o=e._a[ie]!=null?e._a[ie]:s[ie],(e._dayOfYear>Lt(o)||e._dayOfYear===0)&&(Y(e)._overflowDayOfYear=!0),r=ct(o,0,e._dayOfYear),e._a[Pe]=r.getUTCMonth(),e._a[be]=r.getUTCDate()),l=e._a[ie]==null||e._a[Pe]==null||e._a[be]==null,t=0;t<3&&e._a[t]==null;++t)e._a[t]=n[t]=s[t];for(;t<7;t++)e._a[t]=n[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[ue]===24&&e._a[Ne]===0&&e._a[Xe]===0&&e._a[ut]===0&&(e._nextDay=!0,e._a[ue]=0),e._d=(e._useUTC?ct:kl).apply(null,n),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ue]=24),e._w&&typeof e._w.d<"u"&&!l&&e._w.d!==i&&(Y(e).weekdayMismatch=!0)}}function tu(e,t){var r,n,a,s,i,o,l,c,w;r=e._w,r.GG!=null||r.W!=null||r.E!=null?(i=1,o=4,n=St(r.GG,e._a[ie],aa(t[ie],t[Pe],t[be],1,4).year),a=St(r.W,1),s=St(r.E,1),(s<1||s>7)&&(c=!0)):(i=e._locale._week.dow,o=e._locale._week.doy,w=aa(t[ie],t[Pe],t[be],i,o),n=St(r.gg,e._a[ie],w.year),a=St(r.w,w.week),r.d!=null?(s=r.d,(s<0||s>6)&&(c=!0)):r.e!=null?(s=r.e+i,(r.e<0||r.e>6)&&(c=!0)):s=i),a<1||a>Qe(n,i,o)?Y(e)._overflowWeeks=!0:c!=null?Y(e)._overflowWeekday=!0:(l=ds(n,a,s,i,o),e._a[ie]=l.year,e._dayOfYear=l.dayOfYear)}b.ISO_8601=function(){};b.RFC_2822=function(){};function xn(e){if(e._f===b.ISO_8601){ms(e);return}if(e._f===b.RFC_2822){ys(e);return}e._a=[],Y(e).empty=!0;var t=""+e._i,r,n,a,s,i,o=t.length,l=0,c,w;for(a=Xa(e._f,e._locale).match(ln)||[],w=a.length,r=0;r<w;r++)s=a[r],n=(t.match(To(s,e))||[])[0],n&&(i=t.substr(0,t.indexOf(n)),i.length>0&&Y(e).unusedInput.push(i),t=t.slice(t.indexOf(n)+n.length),l+=n.length),mt[s]?(n?Y(e).empty=!1:Y(e).unusedTokens.push(s),Oo(s,n,e)):e._strict&&!n&&Y(e).unusedTokens.push(s);Y(e).charsLeftOver=o-l,t.length>0&&Y(e).unusedInput.push(t),e._a[ue]<=12&&Y(e).bigHour===!0&&e._a[ue]>0&&(Y(e).bigHour=void 0),Y(e).parsedDateParts=e._a.slice(0),Y(e).meridiem=e._meridiem,e._a[ue]=ru(e._locale,e._a[ue],e._meridiem),c=Y(e).era,c!==null&&(e._a[ie]=e._locale.erasConvertYear(c,e._a[ie])),bn(e),wn(e)}function ru(e,t,r){var n;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(n=e.isPM(r),n&&t<12&&(t+=12),!n&&t===12&&(t=0)),t)}function nu(e){var t,r,n,a,s,i,o=!1,l={},c=e._f.length;if(c===0){Y(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<c;a++)s=0,i=!1,t=sn({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._defaultDatePartsNow=l,t._f=e._f[a],xn(t),an(t)&&(i=!0),s+=Y(t).charsLeftOver,s+=Y(t).unusedTokens.length*10,Y(t).score=s,o?s<n&&(n=s,r=t):(n==null||s<n||i)&&(n=s,r=t,i&&(o=!0));Ue(e,r||t)}function au(e){if(!e._d){var t=on(e._i),r=t.day===void 0?t.date:t.day;e._a=Ga([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(n){return n&&parseInt(n,10)}),bn(e)}}function su(e){var t=new Ht(wn(gs(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function gs(e){var t=e._i,r=e._f;return e._locale=e._locale||tt(e._l),t===null||r===void 0&&t===""?Ft({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Te(t)?new Ht(wn(t)):(At(t)?e._d=t:He(r)?nu(e):r?xn(e):iu(e),an(e)||(e._d=null),e))}function iu(e){var t=e._i;we(t)?e._d=new Date(b.now()):At(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Ql(e):He(t)?(e._a=Ga(t.slice(0),function(r){return parseInt(r,10)}),bn(e)):dt(t)?au(e):Je(t)?e._d=new Date(t):b.createFromInputFallback(e)}function vs(e,t,r,n,a){var s={};return(t===!0||t===!1)&&(n=t,t=void 0),(r===!0||r===!1)&&(n=r,r=void 0),(dt(e)&&nn(e)||He(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=r,s._i=e,s._f=t,s._strict=n,su(s)}function ne(e,t,r,n){return vs(e,t,r,n,!1)}var ou=Le("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ne.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Ft()}),lu=Le("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=ne.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Ft()});function _s(e,t){var r,n;if(t.length===1&&He(t[0])&&(t=t[0]),!t.length)return ne();for(n=0;n<t.length;++n)if(Te(t[n])){r=t[n];break}if(!r)return Ft();for(++n;n<t.length;++n)Te(t[n])&&(!t[n].isValid()||t[n][e](r))&&(r=t[n]);return r}function uu(){var e=[].slice.call(arguments,0);return _s("isBefore",e)}function du(){var e=[].slice.call(arguments,0);return _s("isAfter",e)}var cu=function(){return Date.now?Date.now():+new Date},kt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function fu(e){var t,r=!1,n,a=kt.length;for(t in e)if(z(e,t)&&!(se.call(kt,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(n=0;n<a;++n)if(e[kt[n]]){if(r)return!1;parseFloat(e[kt[n]])!==H(e[kt[n]])&&(r=!0)}return!0}function pu(){return this._isValid}function hu(){return Ve(NaN)}function vr(e){var t=on(e),r=t.year||0,n=t.quarter||0,a=t.month||0,s=t.week||t.isoWeek||0,i=t.day||0,o=t.hour||0,l=t.minute||0,c=t.second||0,w=t.millisecond||0;this._isValid=fu(t),this._milliseconds=+w+c*1e3+l*6e4+o*1e3*60*60,this._days=+i+s*7,this._months=+a+n*3+r*12,this._data={},this._locale=tt(),this._bubble()}function nr(e){return e instanceof vr}function Qr(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function mu(e,t,r){var n=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),s=0,i;for(i=0;i<n;i++)H(e[i])!==H(t[i])&&s++;return s+a}function ws(e,t){D(e,0,0,function(){var r=this.utcOffset(),n="+";return r<0&&(r=-r,n="-"),n+Re(~~(r/60),2)+t+Re(~~r%60,2)})}ws("Z",":");ws("ZZ","");k("Z",mr);k("ZZ",mr);J(["Z","ZZ"],function(e,t,r){var n=Sn(mr,e);r._useUTC=!0,r._tzm=n,n===null&&(Y(r).invalidOffset=e)});var yu=/([\+\-]|\d\d)/gi;function Sn(e,t){var r=(t||"").match(e),n,a,s;return r===null||(n=r[r.length-1]||[],a=(n+"").match(yu)||["-",0,0],s=+(a[1]*60)+H(a[2]),H(a[2])>59||(a[0]==="+"?s>840:s>720))?null:s===0?0:a[0]==="+"?s:-s}function kn(e,t){var r,n;return t._isUTC?(r=t.clone(),n=(Te(e)||At(e)?e.valueOf():ne(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+n),b.updateOffset(r,!1),r):ne(e).local()}function Jr(e){return-Math.round(e._d.getTimezoneOffset())}b.updateOffset=function(){};function gu(e,t,r){var n=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Sn(mr,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(a=Jr(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),n!==e&&(!t||this._changeInProgress?Ss(this,Ve(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,b.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?n:Jr(this)}function vu(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function _u(e){return this.utcOffset(0,e)}function wu(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Jr(this),"m")),this}function bu(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Sn(ko,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function xu(e){return this.isValid()?(e=e?ne(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Su(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function ku(){if(!we(this._isDSTShifted))return this._isDSTShifted;var e={},t;return sn(e,this),e=gs(e),e._a?(t=e._isUTC?ze(e._a):ne(e._a),this._isDSTShifted=this.isValid()&&mu(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Pu(){return this.isValid()?!this._isUTC:!1}function Tu(){return this.isValid()?this._isUTC:!1}function bs(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Mu=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Ou=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ve(e,t){var r=e,n=null,a,s,i;return nr(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:Je(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(n=Mu.exec(e))?(a=n[1]==="-"?-1:1,r={y:0,d:H(n[be])*a,h:H(n[ue])*a,m:H(n[Ne])*a,s:H(n[Xe])*a,ms:H(Qr(n[ut]*1e3))*a}):(n=Ou.exec(e))?(a=n[1]==="-"?-1:1,r={y:lt(n[2],a),M:lt(n[3],a),w:lt(n[4],a),d:lt(n[5],a),h:lt(n[6],a),m:lt(n[7],a),s:lt(n[8],a)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(i=Du(ne(r.from),ne(r.to)),r={},r.ms=i.milliseconds,r.M=i.months),s=new vr(r),nr(e)&&z(e,"_locale")&&(s._locale=e._locale),nr(e)&&z(e,"_isValid")&&(s._isValid=e._isValid),s}Ve.fn=vr.prototype;Ve.invalid=hu;function lt(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function ia(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function Du(e,t){var r;return e.isValid()&&t.isValid()?(t=kn(t,e),e.isBefore(t)?r=ia(e,t):(r=ia(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function xs(e,t){return function(r,n){var a,s;return n!==null&&!isNaN(+n)&&(Za(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=r,r=n,n=s),a=Ve(r,n),Ss(this,a,e),this}}function Ss(e,t,r,n){var a=t._milliseconds,s=Qr(t._days),i=Qr(t._months);e.isValid()&&(n=n??!0,i&&as(e,It(e,"Month")+i*r),s&&ts(e,"Date",It(e,"Date")+s*r),a&&e._d.setTime(e._d.valueOf()+a*r),n&&b.updateOffset(e,s||i))}var Cu=xs(1,"add"),Eu=xs(-1,"subtract");function ks(e){return typeof e=="string"||e instanceof String}function Nu(e){return Te(e)||At(e)||ks(e)||Je(e)||Lu(e)||Ru(e)||e===null||e===void 0}function Ru(e){var t=dt(e)&&!nn(e),r=!1,n=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,i=n.length;for(a=0;a<i;a+=1)s=n[a],r=r||z(e,s);return t&&r}function Lu(e){var t=He(e),r=!1;return t&&(r=e.filter(function(n){return!Je(n)&&ks(e)}).length===0),t&&r}function Iu(e){var t=dt(e)&&!nn(e),r=!1,n=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<n.length;a+=1)s=n[a],r=r||z(e,s);return t&&r}function Yu(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function ju(e,t){arguments.length===1&&(arguments[0]?Nu(arguments[0])?(e=arguments[0],t=void 0):Iu(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||ne(),n=kn(r,this).startOf("day"),a=b.calendarFormat(this,n)||"sameElse",s=t&&(qe(t[a])?t[a].call(this,r):t[a]);return this.format(s||this.localeData().calendar(a,this,ne(r)))}function Au(){return new Ht(this)}function Fu(e,t){var r=Te(e)?e:ne(e);return this.isValid()&&r.isValid()?(t=Ie(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function Hu(e,t){var r=Te(e)?e:ne(e);return this.isValid()&&r.isValid()?(t=Ie(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function Vu(e,t,r,n){var a=Te(e)?e:ne(e),s=Te(t)?t:ne(t);return this.isValid()&&a.isValid()&&s.isValid()?(n=n||"()",(n[0]==="("?this.isAfter(a,r):!this.isBefore(a,r))&&(n[1]===")"?this.isBefore(s,r):!this.isAfter(s,r))):!1}function Wu(e,t){var r=Te(e)?e:ne(e),n;return this.isValid()&&r.isValid()?(t=Ie(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf())):!1}function Uu(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function zu(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function qu(e,t,r){var n,a,s;if(!this.isValid())return NaN;if(n=kn(e,this),!n.isValid())return NaN;switch(a=(n.utcOffset()-this.utcOffset())*6e4,t=Ie(t),t){case"year":s=ar(this,n)/12;break;case"month":s=ar(this,n);break;case"quarter":s=ar(this,n)/3;break;case"second":s=(this-n)/1e3;break;case"minute":s=(this-n)/6e4;break;case"hour":s=(this-n)/36e5;break;case"day":s=(this-n-a)/864e5;break;case"week":s=(this-n-a)/6048e5;break;default:s=this-n}return r?s:Ee(s)}function ar(e,t){if(e.date()<t.date())return-ar(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),n=e.clone().add(r,"months"),a,s;return t-n<0?(a=e.clone().add(r-1,"months"),s=(t-n)/(n-a)):(a=e.clone().add(r+1,"months"),s=(t-n)/(a-n)),-(r+s)||0}b.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";b.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function $u(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Gu(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?rr(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):qe(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",rr(r,"Z")):rr(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Bu(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,n,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(r+n+a+s)}function Zu(e){e||(e=this.isUtc()?b.defaultFormatUtc:b.defaultFormat);var t=rr(this,e);return this.localeData().postformat(t)}function Xu(e,t){return this.isValid()&&(Te(e)&&e.isValid()||ne(e).isValid())?Ve({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Ku(e){return this.from(ne(),e)}function Qu(e,t){return this.isValid()&&(Te(e)&&e.isValid()||ne(e).isValid())?Ve({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Ju(e){return this.to(ne(),e)}function Ps(e){var t;return e===void 0?this._locale._abbr:(t=tt(e),t!=null&&(this._locale=t),this)}var Ts=Le("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Ms(){return this._locale}var or=1e3,yt=60*or,lr=60*yt,Os=(365*400+97)*24*lr;function gt(e,t){return(e%t+t)%t}function Ds(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-Os:new Date(e,t,r).valueOf()}function Cs(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-Os:Date.UTC(e,t,r)}function ed(e){var t,r;if(e=Ie(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Cs:Ds,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=gt(t+(this._isUTC?0:this.utcOffset()*yt),lr);break;case"minute":t=this._d.valueOf(),t-=gt(t,yt);break;case"second":t=this._d.valueOf(),t-=gt(t,or);break}return this._d.setTime(t),b.updateOffset(this,!0),this}function td(e){var t,r;if(e=Ie(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Cs:Ds,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=lr-gt(t+(this._isUTC?0:this.utcOffset()*yt),lr)-1;break;case"minute":t=this._d.valueOf(),t+=yt-gt(t,yt)-1;break;case"second":t=this._d.valueOf(),t+=or-gt(t,or)-1;break}return this._d.setTime(t),b.updateOffset(this,!0),this}function rd(){return this._d.valueOf()-(this._offset||0)*6e4}function nd(){return Math.floor(this.valueOf()/1e3)}function ad(){return new Date(this.valueOf())}function sd(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function id(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function od(){return this.isValid()?this.toISOString():null}function ld(){return an(this)}function ud(){return Ue({},Y(this))}function dd(){return Y(this).overflow}function cd(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}D("N",0,0,"eraAbbr");D("NN",0,0,"eraAbbr");D("NNN",0,0,"eraAbbr");D("NNNN",0,0,"eraName");D("NNNNN",0,0,"eraNarrow");D("y",["y",1],"yo","eraYear");D("y",["yy",2],0,"eraYear");D("y",["yyy",3],0,"eraYear");D("y",["yyyy",4],0,"eraYear");k("N",Pn);k("NN",Pn);k("NNN",Pn);k("NNNN",xd);k("NNNNN",Sd);J(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,n){var a=r._locale.erasParse(e,n,r._strict);a?Y(r).era=a:Y(r).invalidEra=e});k("y",vt);k("yy",vt);k("yyy",vt);k("yyyy",vt);k("yo",kd);J(["y","yy","yyy","yyyy"],ie);J(["yo"],function(e,t,r,n){var a;r._locale._eraYearOrdinalRegex&&(a=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[ie]=r._locale.eraYearOrdinalParse(e,a):t[ie]=parseInt(e,10)});function fd(e,t){var r,n,a,s=this._eras||tt("en")._eras;for(r=0,n=s.length;r<n;++r){switch(typeof s[r].since){case"string":a=b(s[r].since).startOf("day"),s[r].since=a.valueOf();break}switch(typeof s[r].until){case"undefined":s[r].until=1/0;break;case"string":a=b(s[r].until).startOf("day").valueOf(),s[r].until=a.valueOf();break}}return s}function pd(e,t,r){var n,a,s=this.eras(),i,o,l;for(e=e.toUpperCase(),n=0,a=s.length;n<a;++n)if(i=s[n].name.toUpperCase(),o=s[n].abbr.toUpperCase(),l=s[n].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(o===e)return s[n];break;case"NNNN":if(i===e)return s[n];break;case"NNNNN":if(l===e)return s[n];break}else if([i,o,l].indexOf(e)>=0)return s[n]}function hd(e,t){var r=e.since<=e.until?1:-1;return t===void 0?b(e.since).year():b(e.since).year()+(t-e.offset)*r}function md(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].name;return""}function yd(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].narrow;return""}function gd(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].abbr;return""}function vd(){var e,t,r,n,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=a[e].since<=a[e].until?1:-1,n=this.clone().startOf("day").valueOf(),a[e].since<=n&&n<=a[e].until||a[e].until<=n&&n<=a[e].since)return(this.year()-b(a[e].since).year())*r+a[e].offset;return this.year()}function _d(e){return z(this,"_erasNameRegex")||Tn.call(this),e?this._erasNameRegex:this._erasRegex}function wd(e){return z(this,"_erasAbbrRegex")||Tn.call(this),e?this._erasAbbrRegex:this._erasRegex}function bd(e){return z(this,"_erasNarrowRegex")||Tn.call(this),e?this._erasNarrowRegex:this._erasRegex}function Pn(e,t){return t.erasAbbrRegex(e)}function xd(e,t){return t.erasNameRegex(e)}function Sd(e,t){return t.erasNarrowRegex(e)}function kd(e,t){return t._eraYearOrdinalRegex||vt}function Tn(){var e=[],t=[],r=[],n=[],a,s,i,o,l,c=this.eras();for(a=0,s=c.length;a<s;++a)i=Ke(c[a].name),o=Ke(c[a].abbr),l=Ke(c[a].narrow),t.push(i),e.push(o),r.push(l),n.push(i),n.push(o),n.push(l);this._erasRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}D(0,["gg",2],0,function(){return this.weekYear()%100});D(0,["GG",2],0,function(){return this.isoWeekYear()%100});function _r(e,t){D(0,[e,e.length],0,t)}_r("gggg","weekYear");_r("ggggg","weekYear");_r("GGGG","isoWeekYear");_r("GGGGG","isoWeekYear");k("G",hr);k("g",hr);k("GG",re,Me);k("gg",re,Me);k("GGGG",cn,un);k("gggg",cn,un);k("GGGGG",pr,cr);k("ggggg",pr,cr);wt(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,n){t[n.substr(0,2)]=H(e)});wt(["gg","GG"],function(e,t,r,n){t[n]=b.parseTwoDigitYear(e)});function Pd(e){return Es.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Td(e){return Es.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Md(){return Qe(this.year(),1,4)}function Od(){return Qe(this.isoWeekYear(),1,4)}function Dd(){var e=this.localeData()._week;return Qe(this.year(),e.dow,e.doy)}function Cd(){var e=this.localeData()._week;return Qe(this.weekYear(),e.dow,e.doy)}function Es(e,t,r,n,a){var s;return e==null?gn(this,n,a).year:(s=Qe(e,n,a),t>s&&(t=s),Ed.call(this,e,t,r,n,a))}function Ed(e,t,r,n,a){var s=ds(e,t,r,n,a),i=ct(s.year,0,s.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}D("Q",0,"Qo","quarter");k("Q",Ka);J("Q",function(e,t){t[Pe]=(H(e)-1)*3});function Nd(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}D("D",["DD",2],"Do","date");k("D",re,_t);k("DD",re,Me);k("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});J(["D","DD"],be);J("Do",function(e,t){t[be]=H(e.match(re)[0])});var Ns=bt("Date",!0);D("DDD",["DDDD",3],"DDDo","dayOfYear");k("DDD",fr);k("DDDD",Qa);J(["DDD","DDDD"],function(e,t,r){r._dayOfYear=H(e)});function Rd(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}D("m",["mm",2],0,"minute");k("m",re,fn);k("mm",re,Me);J(["m","mm"],Ne);var Ld=bt("Minutes",!1);D("s",["ss",2],0,"second");k("s",re,fn);k("ss",re,Me);J(["s","ss"],Xe);var Id=bt("Seconds",!1);D("S",0,0,function(){return~~(this.millisecond()/100)});D(0,["SS",2],0,function(){return~~(this.millisecond()/10)});D(0,["SSS",3],0,"millisecond");D(0,["SSSS",4],0,function(){return this.millisecond()*10});D(0,["SSSSS",5],0,function(){return this.millisecond()*100});D(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});D(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});D(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});D(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});k("S",fr,Ka);k("SS",fr,Me);k("SSS",fr,Qa);var at,Rs;for(at="SSSS";at.length<=9;at+="S")k(at,vt);function Yd(e,t){t[ut]=H(("0."+e)*1e3)}for(at="S";at.length<=9;at+="S")J(at,Yd);Rs=bt("Milliseconds",!1);D("z",0,0,"zoneAbbr");D("zz",0,0,"zoneName");function jd(){return this._isUTC?"UTC":""}function Ad(){return this._isUTC?"Coordinated Universal Time":""}var m=Ht.prototype;m.add=Cu;m.calendar=ju;m.clone=Au;m.diff=qu;m.endOf=td;m.format=Zu;m.from=Xu;m.fromNow=Ku;m.to=Qu;m.toNow=Ju;m.get=No;m.invalidAt=dd;m.isAfter=Fu;m.isBefore=Hu;m.isBetween=Vu;m.isSame=Wu;m.isSameOrAfter=Uu;m.isSameOrBefore=zu;m.isValid=ld;m.lang=Ts;m.locale=Ps;m.localeData=Ms;m.max=lu;m.min=ou;m.parsingFlags=ud;m.set=Ro;m.startOf=ed;m.subtract=Eu;m.toArray=sd;m.toObject=id;m.toDate=ad;m.toISOString=Gu;m.inspect=Bu;typeof Symbol<"u"&&Symbol.for!=null&&(m[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});m.toJSON=od;m.toString=$u;m.unix=nd;m.valueOf=rd;m.creationData=cd;m.eraName=md;m.eraNarrow=yd;m.eraAbbr=gd;m.eraYear=vd;m.year=es;m.isLeapYear=Eo;m.weekYear=Pd;m.isoWeekYear=Td;m.quarter=m.quarters=Nd;m.month=ss;m.daysInMonth=Uo;m.week=m.weeks=Dl;m.isoWeek=m.isoWeeks=Cl;m.weeksInYear=Dd;m.weeksInWeekYear=Cd;m.isoWeeksInYear=Md;m.isoWeeksInISOWeekYear=Od;m.date=Ns;m.day=m.days=sl;m.weekday=il;m.isoWeekday=ol;m.dayOfYear=Rd;m.hour=m.hours=Ll;m.minute=m.minutes=Ld;m.second=m.seconds=Id;m.millisecond=m.milliseconds=Rs;m.utcOffset=gu;m.utc=_u;m.local=wu;m.parseZone=bu;m.hasAlignedHourOffset=xu;m.isDST=Su;m.isLocal=Pu;m.isUtcOffset=Tu;m.isUtc=bs;m.isUTC=bs;m.zoneAbbr=jd;m.zoneName=Ad;m.dates=Le("dates accessor is deprecated. Use date instead.",Ns);m.months=Le("months accessor is deprecated. Use month instead",ss);m.years=Le("years accessor is deprecated. Use year instead",es);m.zone=Le("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",vu);m.isDSTShifted=Le("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",ku);function Fd(e){return ne(e*1e3)}function Hd(){return ne.apply(null,arguments).parseZone()}function Ls(e){return e}var X=yn.prototype;X.calendar=pl;X.longDateFormat=ml;X.invalidDate=gl;X.ordinal=wl;X.preparse=Ls;X.postformat=Ls;X.relativeTime=xl;X.pastFuture=Sl;X.set=cl;X.eras=fd;X.erasParse=pd;X.erasConvertYear=hd;X.erasAbbrRegex=wd;X.erasNameRegex=_d;X.erasNarrowRegex=bd;X.months=Fo;X.monthsShort=Ho;X.monthsParse=Wo;X.monthsRegex=qo;X.monthsShortRegex=zo;X.week=Pl;X.firstDayOfYear=Ol;X.firstDayOfWeek=Ml;X.weekdays=el;X.weekdaysMin=rl;X.weekdaysShort=tl;X.weekdaysParse=al;X.weekdaysRegex=ll;X.weekdaysShortRegex=ul;X.weekdaysMinRegex=dl;X.isPM=Nl;X.meridiem=Il;function ur(e,t,r,n){var a=tt(),s=ze().set(n,t);return a[r](s,e)}function Is(e,t,r){if(Je(e)&&(t=e,e=void 0),e=e||"",t!=null)return ur(e,t,r,"month");var n,a=[];for(n=0;n<12;n++)a[n]=ur(e,n,r,"month");return a}function Mn(e,t,r,n){typeof e=="boolean"?(Je(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,Je(t)&&(r=t,t=void 0),t=t||"");var a=tt(),s=e?a._week.dow:0,i,o=[];if(r!=null)return ur(t,(r+s)%7,n,"day");for(i=0;i<7;i++)o[i]=ur(t,(i+s)%7,n,"day");return o}function Vd(e,t){return Is(e,t,"months")}function Wd(e,t){return Is(e,t,"monthsShort")}function Ud(e,t,r){return Mn(e,t,r,"weekdays")}function zd(e,t,r){return Mn(e,t,r,"weekdaysShort")}function qd(e,t,r){return Mn(e,t,r,"weekdaysMin")}st("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=H(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});b.lang=Le("moment.lang is deprecated. Use moment.locale instead.",st);b.langData=Le("moment.langData is deprecated. Use moment.localeData instead.",tt);var Be=Math.abs;function $d(){var e=this._data;return this._milliseconds=Be(this._milliseconds),this._days=Be(this._days),this._months=Be(this._months),e.milliseconds=Be(e.milliseconds),e.seconds=Be(e.seconds),e.minutes=Be(e.minutes),e.hours=Be(e.hours),e.months=Be(e.months),e.years=Be(e.years),this}function Ys(e,t,r,n){var a=Ve(t,r);return e._milliseconds+=n*a._milliseconds,e._days+=n*a._days,e._months+=n*a._months,e._bubble()}function Gd(e,t){return Ys(this,e,t,1)}function Bd(e,t){return Ys(this,e,t,-1)}function oa(e){return e<0?Math.floor(e):Math.ceil(e)}function Zd(){var e=this._milliseconds,t=this._days,r=this._months,n=this._data,a,s,i,o,l;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=oa(en(r)+t)*864e5,t=0,r=0),n.milliseconds=e%1e3,a=Ee(e/1e3),n.seconds=a%60,s=Ee(a/60),n.minutes=s%60,i=Ee(s/60),n.hours=i%24,t+=Ee(i/24),l=Ee(js(t)),r+=l,t-=oa(en(l)),o=Ee(r/12),r%=12,n.days=t,n.months=r,n.years=o,this}function js(e){return e*4800/146097}function en(e){return e*146097/4800}function Xd(e){if(!this.isValid())return NaN;var t,r,n=this._milliseconds;if(e=Ie(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+n/864e5,r=this._months+js(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(en(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return t*24+n/36e5;case"minute":return t*1440+n/6e4;case"second":return t*86400+n/1e3;case"millisecond":return Math.floor(t*864e5)+n;default:throw new Error("Unknown unit "+e)}}function rt(e){return function(){return this.as(e)}}var As=rt("ms"),Kd=rt("s"),Qd=rt("m"),Jd=rt("h"),ec=rt("d"),tc=rt("w"),rc=rt("M"),nc=rt("Q"),ac=rt("y"),sc=As;function ic(){return Ve(this)}function oc(e){return e=Ie(e),this.isValid()?this[e+"s"]():NaN}function ft(e){return function(){return this.isValid()?this._data[e]:NaN}}var lc=ft("milliseconds"),uc=ft("seconds"),dc=ft("minutes"),cc=ft("hours"),fc=ft("days"),pc=ft("months"),hc=ft("years");function mc(){return Ee(this.days()/7)}var Ze=Math.round,ht={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function yc(e,t,r,n,a){return ls.call(a,t||1,!!r,e,n)}function gc(e,t,r,n){var a=Ve(e).abs(),s=Ze(a.as("s")),i=Ze(a.as("m")),o=Ze(a.as("h")),l=Ze(a.as("d")),c=Ze(a.as("M")),w=Ze(a.as("w")),u=Ze(a.as("y")),v=s<=r.ss&&["s",s]||s<r.s&&["ss",s]||i<=1&&["m"]||i<r.m&&["mm",i]||o<=1&&["h"]||o<r.h&&["hh",o]||l<=1&&["d"]||l<r.d&&["dd",l];return r.w!=null&&(v=v||w<=1&&["w"]||w<r.w&&["ww",w]),v=v||c<=1&&["M"]||c<r.M&&["MM",c]||u<=1&&["y"]||["yy",u],v[2]=t,v[3]=+e>0,v[4]=n,yc.apply(null,v)}function vc(e){return e===void 0?Ze:typeof e=="function"?(Ze=e,!0):!1}function _c(e,t){return ht[e]===void 0?!1:t===void 0?ht[e]:(ht[e]=t,e==="s"&&(ht.ss=t-1),!0)}function wc(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,n=ht,a,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(n=Ue(Ue({},ht),t||{}),t.s!=null&&t.ss==null&&(n.ss=t.s-1)),a=this.localeData(),s=gc(this,!r,n,a),r&&(s=us.call(a,+this,s)),a.postformat(s)}var Ur=Math.abs;function pt(e){return(e>0)-(e<0)||+e}function wr(){if(!this.isValid())return this.localeData().invalidDate();var e=Ur(this._milliseconds)/1e3,t=Ur(this._days),r=Ur(this._months),n,a,s,i,o=this.asSeconds(),l,c,w,u;return o?(n=Ee(e/60),a=Ee(n/60),e%=60,n%=60,s=Ee(r/12),r%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",c=pt(this._months)!==pt(o)?"-":"",w=pt(this._days)!==pt(o)?"-":"",u=pt(this._milliseconds)!==pt(o)?"-":"",l+"P"+(s?c+s+"Y":"")+(r?c+r+"M":"")+(t?w+t+"D":"")+(a||n||e?"T":"")+(a?u+a+"H":"")+(n?u+n+"M":"")+(e?u+i+"S":"")):"P0D"}var B=vr.prototype;B.isValid=pu;B.abs=$d;B.add=Gd;B.subtract=Bd;B.as=Xd;B.asMilliseconds=As;B.asSeconds=Kd;B.asMinutes=Qd;B.asHours=Jd;B.asDays=ec;B.asWeeks=tc;B.asMonths=rc;B.asQuarters=nc;B.asYears=ac;B.valueOf=sc;B._bubble=Zd;B.clone=ic;B.get=oc;B.milliseconds=lc;B.seconds=uc;B.minutes=dc;B.hours=cc;B.days=fc;B.weeks=mc;B.months=pc;B.years=hc;B.humanize=wc;B.toISOString=wr;B.toString=wr;B.toJSON=wr;B.locale=Ps;B.localeData=Ms;B.toIsoString=Le("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",wr);B.lang=Ts;D("X",0,0,"unix");D("x",0,0,"valueOf");k("x",hr);k("X",Po);J("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});J("x",function(e,t,r){r._d=new Date(H(e))});//! moment.js
b.version="2.31.0";vo(ne);b.fn=m;b.min=uu;b.max=du;b.now=cu;b.utc=ze;b.unix=Fd;b.months=Vd;b.isDate=At;b.locale=st;b.invalid=Ft;b.duration=Ve;b.isMoment=Te;b.weekdays=Ud;b.parseZone=Hd;b.localeData=tt;b.isDuration=nr;b.monthsShort=Wd;b.weekdaysMin=qd;b.defineLocale=_n;b.updateLocale=Fl;b.locales=Hl;b.weekdaysShort=zd;b.normalizeUnits=Ie;b.relativeTimeRounding=vc;b.relativeTimeThreshold=_c;b.calendarFormat=Yu;b.prototype=m;b.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const jt=e=>{if(isNaN(e))return"00:00";const t=e*1e3,r=b.utc(t);return r.hours()?r.format("HH:mm:ss"):r.format("mm:ss")},bc={vertical:"top",horizontal:"left"},xc=(e,t,r=0)=>{const[n,a]=P.useState(bc);return P.useEffect(()=>{if(e&&t.current){const i=t.current.getBoundingClientRect(),o=window.innerWidth,l=window.innerHeight,c=i.bottom+r,w=i.top-r,u=w>=i.height+r,v=l-c>=i.height+r,M=u&&!v?"top":!u&&v||l-c>w?"bottom":"top",$=i.right,C=i.width,g=o-$>=C+r?"right":"left";a({vertical:M,horizontal:g})}},[e,t,r]),n},Sc=(e,t)=>{P.useEffect(()=>{const r=n=>{e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[e,t])};var On=(e=>(e.Top="top",e.Bottom="bottom",e))(On||{}),Dn=(e=>(e.Left="left",e.Right="right",e))(Dn||{});const Fs=(e=!1,t=8)=>{const[r,n]=P.useState(e),a=P.useRef(null),s=xc(r,a,t);return Sc(a,()=>n(!1)),{menuRef:a,isVisible:r,setIsVisible:n,menuPosition:s,toggleMenu:()=>n(o=>!o)}},kc=E.div`
  display: flex;
  align-items: center;
  position: relative;

  & > svg {
    cursor: pointer;
  }
`,Pc=E.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 20px 0px rgba(71, 85, 105, 0.12);
  width: 220px;
  height: 312px;
  ${({$position:e})=>`
    ${e.vertical===On.Top?"bottom: calc(100% + 8px);":"top: calc(100% + 8px);"}
    ${e.horizontal===Dn.Left?"right: calc(100% + 8px);":"left: calc(100% + 8px);"}
  `}
  padding: 8px 16px;
  transition:
    opacity 0.3s,
    visibility 0.3s;
  overflow: scroll;

  & > h2 {
    ${{fontStyle:"labelM"}}
    color: #0f172a;
  }

  @media screen and (max-width: 1500px) {
    width: 180px;
    height: 250px;
    gap: 12px;

    & > h2 {
      ${{fontStyle:"bodyS"}}
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 140px;
    height: 200px;
    gap: 8px;
  }
`,Tc=E.button.attrs({type:"button"})`
  border: none;
  background: none;
  padding: 0;
  width: 100%;
  text-align: left;
  font-family: inherit;
  ${{fontStyle:"labelM"}}
  font-weight: 400;
  color: #020210;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);

  @media screen and (max-width: 1500px) {
    ${{fontStyle:"bodyS"}}
  }
`,Mc=E.button.attrs({type:"button"})`
  border: none;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: inherit;

  &:focus-visible {
    outline: 2px solid #FFFFFF;
    outline-offset: 2px;
  }
`,zr=e=>({"general.playback_speed":"Playback Speed","general.normal":"Normal","playback_speed.2x":"2x","playback_speed.1_75x":"1.75x","playback_speed.1_5x":"1.5x","playback_speed.1_25x":"1.25x","playback_speed.1x":"1x","playback_speed.0_75x":"0.75x","playback_speed.0_5x":"0.5x"})[e]||e,Hs=({playbackSpeed:e,onPlaybackSpeedChange:t,menuWrapperClassName:r,labelIconClassName:n,customMenuWrapperStyles:a,customMenuStyles:s})=>{const{menuRef:i,isVisible:o,menuPosition:l,toggleMenu:c}=Fs();return d.jsxs(kc,{ref:i,className:r,style:a,children:[d.jsx(Mc,{"aria-label":zr("general.playback_speed"),"aria-haspopup":"menu","aria-expanded":o,onClick:c,children:d.jsx(fi,{className:n})}),o&&d.jsxs(Pc,{role:"menu",$position:l,style:s,children:[d.jsx("h2",{children:zr("general.playback_speed")}),go.map(({label:w,value:u},v)=>d.jsxs(Tc,{role:"menuitemradio","aria-checked":u===e,onClick:()=>{t(u),c()},children:[zr(w),u===e&&d.jsx(Fa,{})]},v))]})]})};Hs.__docgenInfo={description:"",methods:[],displayName:"PlaybackSpeedMenu",props:{playbackSpeed:{required:!0,tsType:{name:"number"},description:""},onPlaybackSpeedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(speed: number) => void",signature:{arguments:[{type:{name:"number"},name:"speed"}],return:{name:"void"}}},description:""},menuWrapperClassName:{required:!1,tsType:{name:"string"},description:""},labelIconClassName:{required:!1,tsType:{name:"string"},description:""},customMenuWrapperStyles:{required:!1,tsType:{name:"CSSProperties"},description:""},customMenuStyles:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Oc=E.div`
  display: flex;
  align-items: center;
  position: relative;

  & > svg {
    cursor: pointer;
  }
`,Dc=E.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 20px 0px rgba(71, 85, 105, 0.12);
  width: 200px;
  max-height: 280px;
  ${({$position:e})=>`
    ${e.vertical===On.Top?"bottom: calc(100% + 8px);":"top: calc(100% + 8px);"}
    ${e.horizontal===Dn.Left?"right: calc(100% + 8px);":"left: calc(100% + 8px);"}
  `}
  padding: 8px 16px;
  transition:
    opacity 0.3s,
    visibility 0.3s;
  overflow: auto;

  & > h2 {
    ${{fontStyle:"labelM"}}
    color: #0f172a;
  }

  @media screen and (max-width: 1500px) {
    width: 170px;
    gap: 10px;

    & > h2 {
      ${{fontStyle:"bodyS"}}
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 150px;
    gap: 8px;
  }
`,Cc=E.button.attrs({type:"button"})`
  border: none;
  background: none;
  padding: 0;
  width: 100%;
  text-align: left;
  font-family: inherit;
  ${{fontStyle:"labelM"}}
  font-weight: 400;
  color: #020210;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);

  @media screen and (max-width: 1500px) {
    ${{fontStyle:"bodyS"}}
  }
`,Ec=E.button.attrs({type:"button"})`
  border: none;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: inherit;

  &:focus-visible {
    outline: 2px solid #FFFFFF;
    outline-offset: 2px;
  }
`,Vs=({levels:e,selectedLevel:t,onLevelChange:r,menuWrapperClassName:n,labelIconClassName:a,customMenuWrapperStyles:s,customMenuStyles:i})=>{const{menuRef:o,isVisible:l,menuPosition:c,toggleMenu:w}=Fs(),{t:u}=Ha();return e.length<=1?null:d.jsxs(Oc,{ref:o,className:n,style:s,children:[d.jsx(Ec,{"aria-label":u("general.quality"),"aria-haspopup":"menu","aria-expanded":l,onClick:w,children:d.jsx(pi,{className:a,fill:"#ffffff"})}),l&&d.jsxs(Dc,{role:"menu",$position:c,style:i,children:[d.jsx("h2",{children:u("general.quality")}),e.map(({label:v,value:M})=>d.jsxs(Cc,{role:"menuitemradio","aria-checked":M===t,onClick:()=>{r(M),w()},children:[v,M===t&&d.jsx(Fa,{})]},M))]})]})};Vs.__docgenInfo={description:"",methods:[],displayName:"QualityMenu",props:{levels:{required:!0,tsType:{name:"Array",elements:[{name:"QualityLevelOption"}],raw:"QualityLevelOption[]"},description:""},selectedLevel:{required:!0,tsType:{name:"number"},description:""},onLevelChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(level: number) => void",signature:{arguments:[{type:{name:"number"},name:"level"}],return:{name:"void"}}},description:""},menuWrapperClassName:{required:!1,tsType:{name:"string"},description:""},labelIconClassName:{required:!1,tsType:{name:"string"},description:""},customMenuWrapperStyles:{required:!1,tsType:{name:"CSSProperties"},description:""},customMenuStyles:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Ws=({setVideoState:e,playbackRate:t,rewindHandler:r,playPauseHandler:n,handleFastForward:a,formatCurrentTime:s,played:i,duration:o,onSeekMouseDownHandler:l,seekHandler:c,seekMouseUpHandler:w,volume:u,muted:v,muteHandler:M,volumeChangeHandler:$,formatDuration:C,handleFullScreen:j,handlePictureInPicture:g,playing:f,isSubtitlesChecked:h,toggleSubtitlesCheck:y,isFavorite:x,toggleIsFavorite:T,isFullscreen:L,isPiPActive:V,subtitle:W,handleSkipBackward:Z,handleSkipForward:N,isNextVideo:I,isPreviousVideo:A,showFavorite:p,showDownload:O,downloadUrl:K,downloadFileName:pe,onDownload:ce,showPictureInPicture:S=!0,qualityLevels:R,selectedQuality:G,onQualityChange:ee,onAddNote:ae})=>{const Oe=async()=>{if(ce)ce();else if(K)try{const ye=await fetch(K);if(!ye.ok)throw new Error("Download failed");const oe=await ye.blob(),Ye=window.URL.createObjectURL(oe),fe=document.createElement("a");fe.href=Ye,fe.download=pe||"video-download",fe.style.display="none",document.body.appendChild(fe),fe.click(),document.body.removeChild(fe),window.URL.revokeObjectURL(Ye)}catch(ye){console.error("Download failed:",ye);const oe=document.createElement("a");oe.href=K,oe.download=pe||"video-download",oe.style.display="none",document.body.appendChild(oe),oe.click(),document.body.removeChild(oe)}};return d.jsxs(to,{children:[d.jsx(ro,{type:"range","aria-label":"Seek",min:0,max:100,value:i*100,"aria-valuetext":`${jt(i*o)} of ${C}`,onMouseDown:l,onChange:c,onMouseUp:w}),d.jsxs(so,{children:[d.jsx(Ce,{title:f?"Pause":"Play",children:d.jsx(mo,{onClick:n,children:f?d.jsx(hi,{}):d.jsx(mi,{})})}),d.jsx(Ce,{title:`Rewind ${nt} seconds`,children:d.jsx(Qt,{className:"rewind-control",onClick:r,children:d.jsx(Fn,{})})}),d.jsx(Ce,{title:`Forward ${nt} seconds`,children:d.jsx(Qt,{className:"forward-control",onClick:a,children:d.jsx(Fn,{forward:!0})})}),d.jsxs(no,{children:[d.jsx(Ce,{title:v?"Unmute":"Mute",children:d.jsx(ho,{onClick:M,children:v?d.jsx(yi,{}):d.jsx(gi,{})})}),d.jsx(ao,{type:"range","aria-label":"Volume",value:u*100,onChange:$})]}),d.jsxs(oo,{children:[s," /",C]})]}),d.jsxs(io,{children:[Z&&d.jsx(Ce,{title:"Previous video",children:d.jsx(Qt,{className:"skip-control",onClick:Z,disabled:!A,children:d.jsx(Hn,{className:A?"":"skip-icon-disabled"})})}),N&&d.jsx(Ce,{title:"Next video",children:d.jsx(Qt,{className:"skip-control",onClick:N,disabled:!I,children:d.jsx(Hn,{forward:!0,className:I?"":"skip-icon-disabled"})})}),p&&d.jsx(Ce,{title:x?"Remove from favorites":"Add to favorites",children:d.jsx(lo,{className:"favorite-control",onClick:T,"aria-pressed":x,children:d.jsx(vi,{active:x})})}),O&&K&&d.jsx(Ce,{title:"Download video",children:d.jsx(uo,{className:"download-control",onClick:Oe,children:d.jsx(Ti,{})})}),d.jsx(Hs,{playbackSpeed:t,onPlaybackSpeedChange:ye=>e(oe=>({...oe,playbackRate:ye})),customMenuWrapperStyles:{position:"unset"},customMenuStyles:{right:"8px",left:"auto"}}),d.jsx(Vs,{levels:R,selectedLevel:G,onLevelChange:ee,customMenuWrapperStyles:{position:"unset"},customMenuStyles:{right:"8px",left:"auto"}}),ae&&d.jsx(Ce,{title:"Add note",children:d.jsx(yo,{onClick:ae,children:d.jsx(_i,{})})}),W&&d.jsx(Ce,{title:h?"Hide subtitles":"Show subtitles",children:d.jsx(co,{onClick:y,"aria-pressed":h,children:d.jsx(wi,{active:h})})}),S&&d.jsx(Ce,{title:V?"Exit picture-in-picture":"Enter picture-in-picture",children:d.jsx(po,{className:V?"pip-active":"",onClick:g,children:d.jsx(bi,{})})}),d.jsx(Ce,{title:L?"Exit fullscreen":"Enter fullscreen",children:d.jsx(fo,{onClick:j,children:L?d.jsx(xi,{}):d.jsx(Si,{})})})]})]})};Ws.__docgenInfo={description:"",methods:[],displayName:"Controls",props:{setVideoState:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: (prev: VideoState) => VideoState) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(prev: VideoState) => VideoState",signature:{arguments:[{type:{name:"VideoState"},name:"prev"}],return:{name:"VideoState"}}},name:"value"}],return:{name:"void"}}},description:""},playbackRate:{required:!0,tsType:{name:"number"},description:""},rewindHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},playPauseHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleFastForward:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},formatCurrentTime:{required:!0,tsType:{name:"string"},description:""},played:{required:!0,tsType:{name:"number"},description:""},duration:{required:!0,tsType:{name:"number"},description:""},onSeekMouseDownHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLInputElement"}],raw:"MouseEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},seekHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},seekMouseUpHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLInputElement"}],raw:"MouseEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},volume:{required:!0,tsType:{name:"number"},description:""},muted:{required:!0,tsType:{name:"boolean"},description:""},muteHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},volumeChangeHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},formatDuration:{required:!0,tsType:{name:"string"},description:""},handleFullScreen:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handlePictureInPicture:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},playing:{required:!0,tsType:{name:"boolean"},description:""},isSubtitlesChecked:{required:!0,tsType:{name:"boolean"},description:""},toggleSubtitlesCheck:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isFavorite:{required:!0,tsType:{name:"boolean"},description:""},toggleIsFavorite:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},isFullscreen:{required:!0,tsType:{name:"boolean"},description:""},isPiPActive:{required:!0,tsType:{name:"boolean"},description:""},subtitle:{required:!1,tsType:{name:"boolean"},description:""},handleSkipBackward:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleSkipForward:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isNextVideo:{required:!1,tsType:{name:"boolean"},description:""},isPreviousVideo:{required:!1,tsType:{name:"boolean"},description:""},showFavorite:{required:!1,tsType:{name:"boolean"},description:""},showDownload:{required:!1,tsType:{name:"boolean"},description:""},downloadUrl:{required:!1,tsType:{name:"string"},description:""},downloadFileName:{required:!1,tsType:{name:"string"},description:""},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showPictureInPicture:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},qualityLevels:{required:!0,tsType:{name:"Array",elements:[{name:"QualityLevelOption"}],raw:"QualityLevelOption[]"},description:""},selectedQuality:{required:!0,tsType:{name:"number"},description:""},onQualityChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(level: number) => void",signature:{arguments:[{type:{name:"number"},name:"level"}],return:{name:"void"}}},description:""},onAddNote:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const tn=-1;function Nc(e){const t=e.split(/\r?\n/),r=[];for(let a=0;a<t.length;a++)if(t[a].includes("-->")){const s=t[a].split(" --> ");if(s.length===2){const i=n(s[0]),o=n(s[1]);let l="";for(a++;a<t.length&&t[a].trim()!=="";)l+=t[a]+" ",a++;r.push({start:i,end:o,text:l.trim()})}}function n(a){const s=a.split(":");let i=0,o=1;for(;s.length>0;)i+=o*parseFloat(s.pop()||"0"),o*=60;return i}return r}const la=(e,t,r,n=()=>!0)=>{const a=P.useRef();P.useEffect(()=>{a.current=t},[t]),P.useEffect(()=>{const s=r&&"current"in r?r.current:window;if(!s||!s.addEventListener)return;const o=l=>{a.current&&n()&&a.current(l)};return s.addEventListener(e,o),()=>{s.removeEventListener(e,o)}},[e,r,n])},Rc=P.createContext(void 0),Lc={isPiPActive:!1,pipVideoState:null,enterPiP:async()=>(console.warn("PiP functionality requires PiPProvider wrapper"),!1),exitPiP:async()=>(console.warn("PiP functionality requires PiPProvider wrapper"),!1),updateVideoState:()=>{console.warn("PiP functionality requires PiPProvider wrapper")},registerVideoElement:()=>{},unregisterVideoElement:()=>{},syncPiPState:()=>{}},Us=()=>{const e=P.useContext(Rc);return e===void 0?Lc:e};let tr=0;const Ic={muted:!1,volume:1,prevVolume:.3,playbackRate:1,played:0,seeking:!1,buffer:!0};function Yc({startTime:e=0,setLoading:t,handleTrackProgress:r,url:n,subtitleUrl:a,setIsPlaying:s,isPlaying:i,shouldPlayerBeFocusedOnSpaceClick:o}){const[l,c]=P.useState(!1),[w,u]=P.useState(Ic),[v,M]=P.useState(!1),[$,C]=P.useState(!1),[j,g]=P.useState(!1),f=P.useRef(null),h=P.useRef(null),y=P.useRef(null),[x,T]=P.useState([]),[L,V]=P.useState(""),[W,Z]=P.useState(null),N=P.useRef(null),I=P.useRef(0),A=P.useRef(Date.now()),p=P.useRef(null),{isPiPActive:O,enterPiP:K,exitPiP:pe,registerVideoElement:ce,unregisterVideoElement:S}=Us(),{muted:R,volume:G,prevVolume:ee,playbackRate:ae,played:Oe,seeking:ye}=w,oe=f.current?f.current.getCurrentTime():0,Ye=f.current?f.current.getDuration():0,fe=jt(oe),De=jt(Ye);P.useEffect(()=>{a&&fetch(a).then(_=>_.text()).then(_=>{const F=Nc(_);T(F)}).catch(_=>{console.error("Error fetching external subtitles:",_)})},[a]),P.useEffect(()=>{var ot;const _=()=>{C(!!document.fullscreenElement)},F=()=>{var le;const he=(le=f.current)==null?void 0:le.getInternalPlayer();he&&he instanceof HTMLVideoElement&&K(he,{url:n,currentTime:he.currentTime,isPlaying:i,volume:w.volume,muted:w.muted})},U=()=>{pe()};document.addEventListener("fullscreenchange",_),document.addEventListener("enterpictureinpicture",F),document.addEventListener("leavepictureinpicture",U);const de=(ot=f.current)==null?void 0:ot.getInternalPlayer();return de&&de instanceof HTMLVideoElement&&(de.addEventListener("enterpictureinpicture",F),de.addEventListener("leavepictureinpicture",U),ce(de)),()=>{document.removeEventListener("fullscreenchange",_),document.removeEventListener("enterpictureinpicture",F),document.removeEventListener("leavepictureinpicture",U),de&&de instanceof HTMLVideoElement&&(de.removeEventListener("enterpictureinpicture",F),de.removeEventListener("leavepictureinpicture",U)),S()}},[n,K,pe,ce,S,i,w.volume,w.muted]),P.useEffect(()=>{c(!1)},[n]),P.useEffect(()=>{var U;const _=document.activeElement;_ instanceof HTMLInputElement||_ instanceof HTMLTextAreaElement||_ instanceof HTMLElement&&_.isContentEditable||(U=y.current)==null||U.focus({preventScroll:!0})},[n]),P.useEffect(()=>()=>{p.current&&window.clearTimeout(p.current)},[]),P.useEffect(()=>{const _=f.current;return()=>{if(document.pictureInPictureElement){const F=_==null?void 0:_.getInternalPlayer();F&&F instanceof HTMLVideoElement&&console.log("Component unmounting while in Picture-in-Picture mode")}}},[]);const ge=P.useCallback(()=>{s(_=>!_)},[s]),Ge=P.useCallback(()=>{if(f.current){const _=f.current.getCurrentTime();f.current.seekTo(Math.max(_-nt,0))}},[f]),Wt=P.useCallback(()=>{if(f.current){const _=f.current.getCurrentTime(),F=f.current.getDuration(),U=_+nt;f.current.seekTo(F?Math.min(U,F):U)}},[f]),Ut=P.useCallback(async _=>{var de,ot;tr>2?h.current&&(h.current.contains(document.activeElement)?tr=0:(h.current.style.visibility="hidden",g(!1))):h.current&&h.current.style.visibility==="visible"&&j&&(tr+=1);const F=(de=f.current)==null?void 0:de.getInternalPlayer(),U=((ot=F==null?void 0:F.textTracks)==null?void 0:ot.length)>0;if(x.length>0&&!U&&v){let he;if(N.current!==null)if(_.playedSeconds>I.current)for(let le=N.current;le<x.length;le++){const je=x[le];if(_.playedSeconds>=je.start&&_.playedSeconds<=je.end){he=je,N.current=le;break}}else for(let le=N.current;le>=0;le--){const je=x[le];if(_.playedSeconds>=je.start&&_.playedSeconds<=je.end){he=je,N.current=le;break}}he||(he=x.find(le=>_.playedSeconds>=le.start&&_.playedSeconds<=le.end),he&&(N.current=x.indexOf(he))),I.current=_.playedSeconds,he?V(he.text):(V(""),N.current=null)}if(!ye){u(je=>({...je,..._}));const he=Math.floor(_.playedSeconds),le=Date.now();le-A.current>8e3&&(A.current=le,r(he))}},[ye,r,j,x,v]),zt=_=>{const F=parseFloat(_.target.value)/100;u(U=>({...U,played:F})),f.current&&f.current.seekTo(F)},qt=()=>{u(_=>({..._,seeking:!1})),f.current&&f.current.seekTo(w.played)},$t=_=>{const F=_.target.value,U=parseFloat(F)/100;u(de=>({...de,volume:U,muted:U===0,prevVolume:U===0?.1:U}))},br=()=>{w.muted?u(_=>({..._,muted:!1,volume:ee})):u(_=>({..._,muted:!0,prevVolume:G,volume:0}))},We=()=>{u(_=>({..._,seeking:!0}))},xr=()=>{h.current&&(h.current.style.visibility="visible",g(!0)),tr=0},Gt=P.useCallback(()=>{u(_=>({..._,buffer:!0}))},[u]),Bt=P.useCallback(()=>{l&&(u(_=>({..._,buffer:!1})),s(!0))},[l,u,s]),Sr=P.useCallback(()=>{f.current&&!l&&(f.current.seekTo(e),c(!0)),t(!1)},[e,l,t]),kr=()=>{const _=y.current;_&&(document.fullscreenElement?document.exitFullscreen().catch(console.error):_.requestFullscreen().catch(console.error))},Pr=()=>{var F;const _=(F=f.current)==null?void 0:F.getInternalPlayer();if(!(!_||!(_ instanceof HTMLVideoElement))){if(!document.pictureInPictureEnabled){console.warn("Picture-in-Picture is not supported in this browser");return}if(O)pe();else{const U={url:n,currentTime:_.currentTime,isPlaying:i,volume:w.volume,muted:w.muted};K(_,U)}}},it=P.useCallback(_=>{Z(_),p.current&&window.clearTimeout(p.current),p.current=window.setTimeout(()=>{Z(null)},900)},[]),Zt=P.useCallback(_=>{if("code"in _)switch(_.code){case"ArrowLeft":if(_.preventDefault(),f.current){const F=f.current.getCurrentTime();f.current.seekTo(Math.max(F-nt,0))}it({type:"seek-backward",position:"left"});break;case"ArrowRight":if(_.preventDefault(),f.current){const F=f.current.getCurrentTime(),U=f.current.getDuration(),de=F+nt;f.current.seekTo(U?Math.min(de,U):de)}it({type:"seek-forward",position:"right"});break;case"ArrowUp":_.preventDefault(),u(F=>{const U=Math.min(F.volume+.1,1);return it({type:"volume-up",position:"center",volume:U}),{...F,volume:U,muted:U===0,prevVolume:U===0?.1:U}});break;case"ArrowDown":_.preventDefault(),u(F=>{const U=Math.max(F.volume-.1,0);return it({type:"volume-down",position:"center",volume:U}),{...F,volume:U,muted:U===0,prevVolume:U===0?.1:U}});break}},[u,it]),Xt=P.useCallback(_=>{if("code"in _)switch(_.code){case"Space":if(_.target&&(_.target instanceof HTMLInputElement||_.target instanceof HTMLTextAreaElement))break;_.preventDefault(),ge();break}},[ge]),Kt=()=>{var F;const _=document.activeElement;return!!((F=y.current)!=null&&F.contains(_))},Tr=()=>M(_=>!_);return la("keydown",Zt,y,Kt),la("keydown",Xt,o?y:null,o?Kt:void 0),{mouseMoveHandler:xr,playerContainerRef:y,playPauseHandler:ge,handleFullScreen:kr,handlePictureInPicture:Pr,videoPlayerRef:f,volume:G,muted:R,progressHandler:Ut,bufferStartHandler:Gt,bufferEndHandler:Bt,onPlayerStart:Sr,setVideoState:u,playbackRate:ae,controlRef:h,rewindHandler:Ge,handleFastForward:Wt,formatCurrentTime:fe,played:Oe,duration:Ye,onSeekMouseDownHandler:We,seekHandler:zt,seekMouseUpHandler:qt,muteHandler:br,volumeChangeHandler:$t,formatDuration:De,isSubtitlesChecked:v,toggleSubtitlesCheck:Tr,isFullscreen:$,isPiPActive:O,isControlsActive:j,currentSubtitle:L,setCurrentSubtitle:V,keyboardIndicator:W,playing:i}}const jc=({videoPlayerRef:e,isSubtitlesChecked:t,setCurrentSubtitle:r})=>{const n=P.useRef(null),a=P.useCallback(()=>{var o;const i=(o=e.current)==null?void 0:o.getInternalPlayer();if(!(!i||!i.textTracks))for(let l=0;l<i.textTracks.length;l++){const c=i.textTracks[l];if(c.kind==="subtitles"||c.kind==="captions"){n.current=c;const w=()=>{if(t&&c.activeCues&&c.activeCues.length>0){const u=c.activeCues[0];u&&u.text&&r(u.text)}else t&&r("")};c.removeEventListener("cuechange",w),c.addEventListener("cuechange",w),c.mode=t?"showing":"hidden";break}}},[t,r,e]),s=P.useCallback(()=>{var l;const i=(l=e.current)==null?void 0:l.getInternalPlayer();if(!i)return;i.classList.add("hls-video-player");const o=(c=0)=>{const w=i.textTracks;w&&w.length>0?a():c<5&&setTimeout(()=>o(c+1),300*(c+1))};o(),i.addEventListener("loadedmetadata",()=>{o()})},[a,e]);return P.useEffect(()=>{a()},[t,a]),P.useEffect(()=>{var o;const i=(o=e.current)==null?void 0:o.getInternalPlayer();i&&i.textTracks&&i.textTracks.length>0&&a()},[e.current,a]),{extractHLSSubtitleText:a,setupHLSSubtitleTracking:s}},Ac=E.div`
  padding: 16px 20px 0;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 16px;
`,Fc=E.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`,Hc=E.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Vc=E.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #0f172a;
`,Wc=E.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #475569;
  font-weight: 500;
  background: #f1f5f9;
  padding: 3px 8px;
  border-radius: 5px;
  
  svg {
    width: 12px;
    height: 12px;
    color: #10b981;
    flex-shrink: 0;
  }
`,Uc=E.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #64748b;
  padding: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.15s ease;
  line-height: 1;

  &:hover {
    background: #f1f5f9;
    color: #334155;
  }
`,zc=E.div`
  padding: 0 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,qc=E.input`
  width: 100%;
  padding: 8px 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #0f172a;
  outline: none;
  box-sizing: border-box;
  transition: all 0.15s ease;

  &:focus {
    background: white;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`,$c=E.textarea`
  width: 100%;
  padding: 8px 12px 8px 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #0f172a;
  outline: none;
  resize: none;
  min-height: 80px;
  flex: 1;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1.5;
  transition: all 0.15s ease;
  margin-bottom: 12px;

  &:focus {
    background: white;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`,Gc=E.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e2e8f0;
  margin-top: auto;
`,qr=E.button`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: fit-content;

  ${e=>{switch(e.$variant){case"primary":return`
          background: #10b981;
          color: white;
          &:hover:not(:disabled) { 
            background: #059669;
            transform: translateY(-1px);
          }
          &:active:not(:disabled) {
            background: #047857;
            transform: translateY(0);
          }
        `;case"danger":return`
          background: transparent;
          color: #dc2626;
          &:hover:not(:disabled) { 
            background: #fef2f2;
          }
          &:active:not(:disabled) {
            background: #fee2e2;
          }
        `;default:return`
          background: #f1f5f9;
          color: #334155;
          &:hover:not(:disabled) { 
            background: #e2e8f0;
            transform: translateY(-1px);
          }
          &:active:not(:disabled) {
            background: #cbd5e1;
            transform: translateY(0);
          }
        `}}}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Bc=E.div`
  display: flex;
  gap: 12px;
`,zs=({note:e,editingTitle:t,editingContent:r,onTitleChange:n,onContentChange:a,onCancel:s,onDelete:i,onSave:o})=>{const l=!e.id||e.id.startsWith("note_"),c=l?"Add Note":"Edit Note",w=jt(e.moment),u=l?t.trim()||r.trim():t!==e.title||r!==(e.description||"");return d.jsxs(d.Fragment,{children:[d.jsx(Ac,{children:d.jsxs(Fc,{children:[d.jsx(Vc,{children:c}),d.jsxs(Hc,{children:[d.jsxs(Wc,{children:[d.jsx(ki,{}),d.jsxs("span",{children:["at ",w]})]}),d.jsx(Uc,{onClick:s,children:"×"})]})]})}),d.jsxs(zc,{children:[d.jsx(qc,{type:"text",placeholder:"Note title...",value:t,onChange:n}),d.jsx($c,{placeholder:"Add your note content...",value:r,onChange:a})]}),d.jsxs(Gc,{children:[!l&&d.jsxs(qr,{onClick:i,$variant:"danger",children:[d.jsx(Pi,{style:{width:"16px",height:"16px",marginRight:"6px"}}),"Delete"]}),d.jsxs(Bc,{style:{marginLeft:l?"auto":"initial"},children:[d.jsx(qr,{onClick:s,children:"Cancel"}),d.jsx(qr,{onClick:o,$variant:"primary",disabled:!u,children:l?"Add Note":"Save"})]})]})]})};zs.__docgenInfo={description:"",methods:[],displayName:"NoteEditModal",props:{isFullscreen:{required:!1,tsType:{name:"boolean"},description:""},note:{required:!0,tsType:{name:"Note"},description:""},notePosition:{required:!0,tsType:{name:"number"},description:""},alignment:{required:!0,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:""},editingTitle:{required:!0,tsType:{name:"string"},description:""},editingContent:{required:!0,tsType:{name:"string"},description:""},onTitleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onContentChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:""},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isNewNote:{required:!1,tsType:{name:"boolean"},description:""}}};const $r=2,Zc=15e3,Xc=(e,t)=>{const r=new Map;e.forEach((a,s)=>{a.height&&!r.has(a.height)&&r.set(a.height,s)});const n=Array.from(r.entries()).sort(([a],[s])=>s-a).map(([a,s])=>({label:`${a}p`,value:s}));return[{label:t,value:tn},...n]},Kc=2147483646,Qc=2147483647,Jc=({volume:e=0,isVolumeDown:t})=>{const r=Math.round(e*100),n=r===0,a=r>0&&r<=30,s=r>30&&r<=70,i=r>70;return d.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:[d.jsx("path",{d:"M3 9V15H7L12 20V4L7 9H3Z",fill:"white"}),n&&d.jsx("path",{d:"M14 9L20 15M20 9L14 15",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),(a||s||i)&&d.jsx("path",{d:"M15.8 12C15.8 11.08 15.27 10.28 14.5 9.9V14.1C15.27 13.72 15.8 12.92 15.8 12Z",fill:"white"}),(s||i)&&d.jsx("path",{d:"M17.8 12C17.8 10.23 16.78 8.7 15.3 7.98V9.6C16.1 10.14 16.6 11.02 16.6 12C16.6 12.98 16.1 13.86 15.3 14.4V16.02C16.78 15.3 17.8 13.77 17.8 12Z",fill:"white"}),i&&d.jsx("path",{d:"M14.6 5.4V7.05C16.97 7.83 18.7 9.72 18.7 12C18.7 14.28 16.97 16.17 14.6 16.95V18.6C17.86 17.79 20.2 15.18 20.2 12C20.2 8.82 17.86 6.21 14.6 5.4Z",fill:"white"}),d.jsx("circle",{cx:"19",cy:"5",r:"4",fill:"rgba(255, 255, 255, 0.18)"}),t?d.jsx("path",{d:"M17.2 5H20.8",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round"}):d.jsxs(d.Fragment,{children:[d.jsx("path",{d:"M17.2 5H20.8",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round"}),d.jsx("path",{d:"M19 3.2V6.8",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round"})]})]})},ef=({indicator:e})=>e?d.jsxs(qi,{$position:e.position,children:[(e.type==="volume-up"||e.type==="volume-down")&&d.jsxs($i,{children:[d.jsx(Jc,{volume:e.volume,isVolumeDown:e.type==="volume-down"}),d.jsxs(Gi,{children:[Math.round((e.volume??0)*100),"%"]})]}),e.type==="seek-backward"&&d.jsxs(Qn,{children:[d.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"white","aria-hidden":!0,children:[d.jsx("path",{d:"M15.7 6.3A1 1 0 0 1 17 7.9L12.9 12L17 16.1A1 1 0 1 1 15.6 17.5L10.8 12.7A1 1 0 0 1 10.8 11.3L15.7 6.3Z"}),d.jsx("path",{d:"M11.4 6.3A1 1 0 0 1 12.8 7.7L8.5 12L12.8 16.3A1 1 0 0 1 11.4 17.7L6.4 12.7A1 1 0 0 1 6.4 11.3L11.4 6.3Z"})]}),d.jsxs("span",{children:["-",nt,"s"]})]}),e.type==="seek-forward"&&d.jsxs(Qn,{children:[d.jsxs("span",{children:["+",nt,"s"]}),d.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"white","aria-hidden":!0,children:[d.jsx("path",{d:"M8.3 6.3A1 1 0 0 0 7 7.9L11.1 12L7 16.1A1 1 0 1 0 8.4 17.5L13.2 12.7A1 1 0 0 0 13.2 11.3L8.3 6.3Z"}),d.jsx("path",{d:"M12.6 6.3A1 1 0 0 0 11.2 7.7L15.5 12L11.2 16.3A1 1 0 0 0 12.6 17.7L17.6 12.7A1 1 0 0 0 17.6 11.3L12.6 6.3Z"})]})]})]}):null,Cn=({customStyles:e,startTime:t=0,loading:r,setLoading:n,handleTrackProgress:a,url:s,subtitle:i,handleNextVideo:o,handlePreviousVideo:l,isNextVideo:c,isPreviousVideo:w,isPlaying:u,setIsPlaying:v,shouldPlayerBeFocusedOnSpaceClick:M=!1,showFavorite:$,isFavorite:C=!1,toggleFavorite:j=async()=>{},showDownload:g,downloadUrl:f,downloadFileName:h,onDownload:y,showPictureInPicture:x=!0,notes:T,videoDuration:L,onNoteClick:V,editingNote:W,onNoteEdit:Z,onNoteSave:N,onNoteDelete:I,onNoteCancelEdit:A,onAddNote:p,onError:O})=>{var In,Yn,jn;const K=P.useRef(null),{t:pe}=Ha(),[ce,S]=P.useState([]),[R,G]=P.useState(tn),ee=P.useRef(null),[ae,Oe]=P.useState(null),[ye,oe]=P.useState(null),[Ye,fe]=P.useState(""),[De,ge]=P.useState(""),Ge=W!==void 0?W:ye,{syncPiPState:Wt}=Us(),{mouseMoveHandler:Ut,playerContainerRef:zt,playPauseHandler:qt,handleFullScreen:$t,handlePictureInPicture:br,videoPlayerRef:We,playing:xr,volume:Gt,muted:Bt,progressHandler:Sr,bufferStartHandler:kr,bufferEndHandler:Pr,onPlayerStart:it,setVideoState:Zt,playbackRate:Xt,controlRef:Kt,rewindHandler:Tr,handleFastForward:_,formatCurrentTime:F,played:U,duration:de,onSeekMouseDownHandler:ot,seekHandler:he,seekMouseUpHandler:le,muteHandler:je,volumeChangeHandler:qs,formatDuration:$s,isSubtitlesChecked:Mr,toggleSubtitlesCheck:Gs,isFullscreen:Se,isPiPActive:Bs,isControlsActive:En,currentSubtitle:Nn,setCurrentSubtitle:Zs,keyboardIndicator:Xs}=Yc({startTime:t,setLoading:n,handleTrackProgress:a,url:s,subtitleUrl:i,isPlaying:u,setIsPlaying:v,shouldPlayerBeFocusedOnSpaceClick:M});P.useEffect(()=>{Wt()},[s,Wt]);const Ks=P.useCallback(()=>{var q;if(v(!1),p)p();else{const te=((q=We.current)==null?void 0:q.getCurrentTime())||0,me={id:`note_${Date.now()}`,moment:te,title:"",description:""};oe(me),fe(""),ge("")}},[p,v]),{setupHLSSubtitleTracking:Qs}=jc({videoPlayerRef:We,isSubtitlesChecked:Mr,setCurrentSubtitle:Zs}),Or=P.useMemo(()=>!L||L===0||!T?[]:T==null?void 0:T.map(te=>({id:te.id,title:te.title,moment:te.moment,position:te.moment/L*100})),[T,L]),Js=P.useCallback(q=>{Z?Z(q):(oe(q),fe(q.title),ge(q.description||"")),V&&V(q)},[V,Z]),ei=async()=>{Ge&&(N&&await N(Ge.id,Ye.trim(),De.trim()),A?A():(oe(null),fe(""),ge("")))},Rn=()=>{A?A():(oe(null),fe(""),ge(""))},ti=async()=>{Ge&&(I&&await I(Ge.id),Rn())};P.useEffect(()=>{W&&(fe(W.title),ge(W.description||""))},[W]);const ri=()=>{if(!T||!Ge)return null;const q=L&&L>0?Ge.moment/L*100:50;let te="center";q<25?te="left":q>75&&(te="right");const me=d.jsx(eo,{$isFullscreen:Se,$position:q,$alignment:te,children:d.jsx(zs,{isFullscreen:Se,note:Ge,notePosition:q,alignment:te,editingTitle:Ye,editingContent:De,onTitleChange:Ae=>fe(Ae.target.value),onContentChange:Ae=>ge(Ae.target.value),onCancel:Rn,onDelete:ti,onSave:ei})});return Se&&document.fullscreenElement?An.createPortal(me,document.fullscreenElement):me},ni=()=>{if(!T||!Or||Or.length===0)return null;const q=En||Se,te=q?"controls-visible":"",me={position:"absolute",left:0,right:0,bottom:42,top:"auto",height:6,zIndex:Kc,width:"100%"},Ae=d.jsx(Xi,{ref:ee,className:te,$isFullscreen:Se,style:{opacity:q?1:0,visibility:q?"visible":"hidden",...Se?me:{}},children:Or.map(ke=>{const ve=T==null?void 0:T.find(Fe=>Fe.id===ke.id);return ve?d.jsx(Ki,{$position:ke.position,$isFullscreen:Se,onMouseEnter:()=>Oe(ve),onMouseLeave:()=>Oe(null),onClick:()=>Js(ve),title:ve.title,style:{opacity:1,visibility:"visible",backgroundColor:"#ffd700",zIndex:Se?Qc:20,position:"absolute",left:`${ke.position}%`,bottom:Se?0:void 0,transform:"translateX(-50%)",width:Se?12:void 0,height:Se?12:void 0,outline:"none",border:"none"},children:(ae==null?void 0:ae.id)===ve.id&&d.jsxs(Qi,{children:[d.jsx("div",{children:ve.title.length>25?`${ve.title.substring(0,25)}...`:ve.title}),d.jsx(Ji,{children:jt(ve.moment)})]})},ke.id):null})});return Se&&document.fullscreenElement?An.createPortal(Ae,document.fullscreenElement):Ae};P.useEffect(()=>Zi(),[]);const ai=()=>{var me,Ae,ke;it(),Qs();const q=(me=We.current)==null?void 0:me.getInternalPlayer();q&&q instanceof HTMLVideoElement&&(K.current=q);const te=(Ae=We.current)==null?void 0:Ae.getInternalPlayer("hls");S((ke=te==null?void 0:te.levels)!=null&&ke.length?Xc(te.levels,pe("general.quality_auto")):[]),G(tn)},si=P.useRef({media:0,network:0,lastAt:0}),ii=(q,te,me,Ae)=>{const ke=te,ve=me;if(ke!=null&&ke.fatal&&ve){const Fe=si.current;if(Date.now()-Fe.lastAt>Zc&&(Fe.media=0,Fe.network=0),Fe.lastAt=Date.now(),ke.type==="mediaError"&&Fe.media<$r){Fe.media+=1,Fe.media===$r&&ve.swapAudioCodec(),ve.recoverMediaError();return}if(ke.type==="networkError"&&Fe.network<$r){Fe.network+=1,ve.startLoad();return}}O==null||O(q,te,me,Ae)},oi=q=>{var me;const te=(me=We.current)==null?void 0:me.getInternalPlayer("hls");te&&(te.currentLevel=q),G(q)},Ln=()=>{var q;(q=zt.current)==null||q.focus({preventScroll:!0})};return d.jsxs(qa,{ref:zt,tabIndex:0,onMouseMove:Ut,onFocus:Ut,onMouseDown:Ln,onTouchStart:Ln,style:e,onClick:q=>q.stopPropagation(),children:[d.jsxs(za,{onClick:qt,onDoubleClick:$t,children:[d.jsx(Fi,{url:s,ref:We,className:"react-player",width:"100%",height:"100%",playing:u,volume:Gt,muted:Bt,onProgress:Sr,onBuffer:kr,onBufferEnd:Pr,onReady:ai,onError:ii,onPlay:()=>v(!0),onPause:()=>v(!1),onEnded:()=>{var te;const q=(te=We.current)==null?void 0:te.getDuration();q&&a(q),Zt(me=>({...me,playing:!1})),o&&o()},controls:!1,pip:!0,playbackRate:Xt,preload:"metadata",config:{file:{hlsOptions:{autoStartLoad:!0,renderTextTracksNatively:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,backBufferLength:90,maxBufferLength:30,maxBufferSize:60*1e3*1e3}}}},s),r&&d.jsx(Hi,{children:d.jsx(Wi,{})}),Mr&&Nn&&d.jsx(zi,{$controls:En,children:Nn}),d.jsx(ef,{indicator:Xs})]}),d.jsx(Ui,{ref:Kt,children:d.jsx(Ws,{setVideoState:Zt,playbackRate:Xt,rewindHandler:Tr,playPauseHandler:qt,handleFastForward:_,formatCurrentTime:F,played:U,duration:de,onSeekMouseDownHandler:ot,seekHandler:he,seekMouseUpHandler:le,volume:Gt,muted:Bt,muteHandler:je,volumeChangeHandler:qs,formatDuration:$s,handleFullScreen:$t,handlePictureInPicture:br,playing:xr,isSubtitlesChecked:Mr,toggleSubtitlesCheck:Gs,isFavorite:C,toggleIsFavorite:j,isFullscreen:Se,isPiPActive:Bs,subtitle:!!i||((jn=(Yn=(In=We.current)==null?void 0:In.getInternalPlayer())==null?void 0:Yn.textTracks)==null?void 0:jn.length)>0,handleSkipBackward:l,handleSkipForward:o,isNextVideo:c,isPreviousVideo:w,showFavorite:$,showDownload:g,downloadUrl:f,downloadFileName:h,onDownload:y,showPictureInPicture:x,qualityLevels:ce,selectedQuality:R,onQualityChange:oi,onAddNote:T?Ks:void 0})}),ni(),ri()]})};Cn.__docgenInfo={description:"",methods:[],displayName:"VideoPlayer",props:{customStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},startTime:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},loading:{required:!0,tsType:{name:"boolean"},description:""},setLoading:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""},url:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},handleTrackProgress:{required:!0,tsType:{name:"signature",type:"function",raw:"(currentTime: number) => void",signature:{arguments:[{type:{name:"number"},name:"currentTime"}],return:{name:"void"}}},description:""},handleNextVideo:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handlePreviousVideo:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isNextVideo:{required:!1,tsType:{name:"boolean"},description:""},isPreviousVideo:{required:!1,tsType:{name:"boolean"},description:""},isPlaying:{required:!0,tsType:{name:"boolean"},description:""},setIsPlaying:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""},shouldPlayerBeFocusedOnSpaceClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFavorite:{required:!1,tsType:{name:"boolean"},description:""},isFavorite:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},toggleFavorite:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:"",defaultValue:{value:"async (): Promise<void> => {}",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:""},downloadUrl:{required:!1,tsType:{name:"string"},description:""},downloadFileName:{required:!1,tsType:{name:"string"},description:""},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showPictureInPicture:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},notes:{required:!1,tsType:{name:"Array",elements:[{name:"Note"}],raw:"Note[]"},description:""},videoDuration:{required:!1,tsType:{name:"number"},description:""},onNoteClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(note: Note) => void",signature:{arguments:[{type:{name:"Note"},name:"note"}],return:{name:"void"}}},description:""},courseId:{required:!1,tsType:{name:"string"},description:""},moduleId:{required:!1,tsType:{name:"string"},description:""},lessonId:{required:!1,tsType:{name:"string"},description:""},editingNote:{required:!1,tsType:{name:"union",raw:"Note | null",elements:[{name:"Note"},{name:"null"}]},description:""},onNoteEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"(note: Note) => void",signature:{arguments:[{type:{name:"Note"},name:"note"}],return:{name:"void"}}},description:""},onNoteSave:{required:!1,tsType:{name:"signature",type:"function",raw:"(noteId: string, title: string, content: string) => Promise<void>",signature:{arguments:[{type:{name:"string"},name:"noteId"},{type:{name:"string"},name:"title"},{type:{name:"string"},name:"content"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},onNoteDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(noteId: string) => Promise<void>",signature:{arguments:[{type:{name:"string"},name:"noteId"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},onNoteCancelEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAddNote:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: unknown, data?: unknown, hlsInstance?: unknown, hlsGlobal?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"error"},{type:{name:"unknown"},name:"data"},{type:{name:"unknown"},name:"hlsInstance"},{type:{name:"unknown"},name:"hlsGlobal"}],return:{name:"void"}}},description:""}}};const tf={title:"Components/VideoPlayer",component:Cn,parameters:{layout:"centered",docs:{disable:!0}},decorators:[e=>d.jsx("div",{style:{width:"800px",height:"450px"},children:e()})],tags:["autodocs"],argTypes:{url:{control:"text",description:"Video URL to play"},subtitle:{control:"text",description:"Subtitle URL"},startTime:{control:{type:"number",min:0,step:10},description:"Start time in seconds",defaultValue:0},isPlaying:{control:"boolean",description:"Controls whether the video is playing",defaultValue:!1},shouldPlayerBeFocusedOnSpaceClick:{control:"boolean",description:"Controls focus behavior on space click",defaultValue:!1},customStyles:{control:"object",description:"Custom styles for the player wrapper"},showFavorite:{control:"boolean",description:"Show favorite button",defaultValue:!0},isFavorite:{control:"boolean",description:"Is video marked as favorite",defaultValue:!1},isNextVideo:{control:"boolean",description:"Is there a next video available",defaultValue:!0},isPreviousVideo:{control:"boolean",description:"Is there a previous video available",defaultValue:!0},showDownload:{control:"boolean",description:"Show download button",defaultValue:!1},downloadUrl:{control:"text",description:"URL for downloading the video"},downloadFileName:{control:"text",description:"Filename for the downloaded video"},showPictureInPicture:{control:"boolean",description:"Show picture-in-picture button",defaultValue:!0}}},$e=e=>{const[t,r]=P.useState(e.isPlaying||!1),[n,a]=P.useState(!1),[s,i]=P.useState(e.isFavorite||!1),o=M=>{console.log("Track progress:",M)},l=()=>{console.log("Next video requested")},c=()=>{console.log("Previous video requested")},w=async()=>(i(!s),console.log("Favorite toggled to:",!s),Promise.resolve()),u=()=>{console.log("Download requested for:",e.downloadFileName||"video")},v={url:e.url||"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",startTime:e.startTime||0,loading:n,setLoading:a,handleTrackProgress:o,subtitle:e.subtitle||"",handleNextVideo:e.isNextVideo?l:void 0,handlePreviousVideo:e.isPreviousVideo?c:void 0,isNextVideo:!!e.isNextVideo,isPreviousVideo:!!e.isPreviousVideo,isPlaying:t,setIsPlaying:r,shouldPlayerBeFocusedOnSpaceClick:e.shouldPlayerBeFocusedOnSpaceClick||!1,showFavorite:!!e.showFavorite,isFavorite:s,toggleFavorite:w,customStyles:e.customStyles||{borderRadius:"8px",overflow:"hidden"},showDownload:!!e.showDownload,downloadUrl:e.downloadUrl,downloadFileName:e.downloadFileName,onDownload:e.showDownload?u:void 0,showPictureInPicture:e.showPictureInPicture!==!1};return d.jsx(Cn,{...v})},xe={render:e=>d.jsx($e,{...e}),args:{url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",startTime:0,shouldPlayerBeFocusedOnSpaceClick:!0,showFavorite:!0,isNextVideo:!0,isPreviousVideo:!0,customStyles:{borderRadius:"8px",overflow:"hidden"}}},Pt={render:e=>d.jsx($e,{...e}),args:{...xe.args,subtitle:"https://example.com/subtitles.vtt"}},Tt={render:e=>d.jsx($e,{...e}),args:{...xe.args,isPlaying:!0}},Mt={render:e=>d.jsx($e,{...e}),args:{...xe.args,isFavorite:!0}},Ot={render:e=>d.jsx($e,{...e}),args:{...xe.args,isNextVideo:!1,isPreviousVideo:!1,showFavorite:!1}},Dt={render:e=>d.jsx($e,{...e}),args:{...xe.args,showDownload:!0,downloadUrl:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",downloadFileName:"sample-video.mp4"}},Ct={render:e=>d.jsx($e,{...e}),args:{...xe.args,isNextVideo:!1,isPreviousVideo:!1,showFavorite:!1,showDownload:!0,downloadUrl:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",downloadFileName:"lesson-video.mp4"}},Et={render:e=>d.jsx($e,{...e}),args:{...xe.args,showDownload:!0,downloadUrl:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",downloadFileName:"complete-lesson.mp4",subtitle:"https://example.com/subtitles.vtt",isFavorite:!0}},Nt={render:e=>d.jsx($e,{...e}),args:{...xe.args,showPictureInPicture:!1}},Rt={render:e=>{const[t,r]=P.useState([{id:"note1",moment:15,title:"Important Concept",description:"This explains the key principle behind the topic."},{id:"note2",moment:45,title:"Remember This",description:"Don't forget to apply this in practice."},{id:"note3",moment:90,title:"Follow-up",description:"Check the documentation for more details."}]),[n,a]=P.useState(null),u={notes:t,videoDuration:120,onNoteClick:v=>{console.log("Note clicked:",v)},courseId:"demo-course",moduleId:"demo-module",lessonId:"demo-lesson",editingNote:n,onNoteEdit:v=>{a(v),console.log("Editing note:",v)},onNoteSave:async(v,M,$)=>(r(C=>C.map(j=>j.id===v?{...j,title:M,content:$}:j)),a(null),console.log("Note saved:",{noteId:v,title:M,content:$}),Promise.resolve()),onNoteDelete:async v=>(r(M=>M.filter($=>$.id!==v)),console.log("Note deleted:",v),Promise.resolve()),onNoteCancelEdit:()=>{a(null),console.log("Note edit cancelled")},onAddNote:()=>{const v={id:`note_${Date.now()}`,moment:30,title:"",description:""};r(M=>[...M,v]),a(v),console.log("Adding new note at time 30s")}};return d.jsx($e,{...e,...u})},args:{...xe.args,url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"}};var ua,da,ca;xe.parameters={...xe.parameters,docs:{...(ua=xe.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  render: args => <PlayerWrapper {...args} />,
  args: {
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    startTime: 0,
    shouldPlayerBeFocusedOnSpaceClick: true,
    showFavorite: true,
    isNextVideo: true,
    isPreviousVideo: true,
    customStyles: {
      borderRadius: '8px',
      overflow: 'hidden'
    }
  }
}`,...(ca=(da=xe.parameters)==null?void 0:da.docs)==null?void 0:ca.source}}};var fa,pa,ha;Pt.parameters={...Pt.parameters,docs:{...(fa=Pt.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    subtitle: 'https://example.com/subtitles.vtt'
  }
}`,...(ha=(pa=Pt.parameters)==null?void 0:pa.docs)==null?void 0:ha.source}}};var ma,ya,ga;Tt.parameters={...Tt.parameters,docs:{...(ma=Tt.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    isPlaying: true
  }
}`,...(ga=(ya=Tt.parameters)==null?void 0:ya.docs)==null?void 0:ga.source}}};var va,_a,wa;Mt.parameters={...Mt.parameters,docs:{...(va=Mt.parameters)==null?void 0:va.docs,source:{originalSource:`{
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    isFavorite: true
  }
}`,...(wa=(_a=Mt.parameters)==null?void 0:_a.docs)==null?void 0:wa.source}}};var ba,xa,Sa;Ot.parameters={...Ot.parameters,docs:{...(ba=Ot.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    isNextVideo: false,
    isPreviousVideo: false,
    showFavorite: false
  }
}`,...(Sa=(xa=Ot.parameters)==null?void 0:xa.docs)==null?void 0:Sa.source}}};var ka,Pa,Ta;Dt.parameters={...Dt.parameters,docs:{...(ka=Dt.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    showDownload: true,
    downloadUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    downloadFileName: 'sample-video.mp4'
  }
}`,...(Ta=(Pa=Dt.parameters)==null?void 0:Pa.docs)==null?void 0:Ta.source}}};var Ma,Oa,Da;Ct.parameters={...Ct.parameters,docs:{...(Ma=Ct.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    isNextVideo: false,
    isPreviousVideo: false,
    showFavorite: false,
    showDownload: true,
    downloadUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    downloadFileName: 'lesson-video.mp4'
  }
}`,...(Da=(Oa=Ct.parameters)==null?void 0:Oa.docs)==null?void 0:Da.source}}};var Ca,Ea,Na;Et.parameters={...Et.parameters,docs:{...(Ca=Et.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    showDownload: true,
    downloadUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    downloadFileName: 'complete-lesson.mp4',
    subtitle: 'https://example.com/subtitles.vtt',
    isFavorite: true
  }
}`,...(Na=(Ea=Et.parameters)==null?void 0:Ea.docs)==null?void 0:Na.source}}};var Ra,La,Ia;Nt.parameters={...Nt.parameters,docs:{...(Ra=Nt.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  render: args => <PlayerWrapper {...args} />,
  args: {
    ...Default.args,
    showPictureInPicture: false
  }
}`,...(Ia=(La=Nt.parameters)==null?void 0:La.docs)==null?void 0:Ia.source}}};var Ya,ja,Aa;Rt.parameters={...Rt.parameters,docs:{...(Ya=Rt.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  render: args => {
    const [notes, setNotes] = useState<Note[]>([{
      id: 'note1',
      moment: 15,
      title: 'Important Concept',
      description: 'This explains the key principle behind the topic.'
    }, {
      id: 'note2',
      moment: 45,
      title: 'Remember This',
      description: 'Don\\'t forget to apply this in practice.'
    }, {
      id: 'note3',
      moment: 90,
      title: 'Follow-up',
      description: 'Check the documentation for more details.'
    }]);
    const [editingNote, setEditingNote] = useState<Note | null>(null);
    const handleNoteClick = (note: Note) => {
      console.log('Note clicked:', note);
      // You could seek to the note time here
    };
    const handleNoteEdit = (note: Note) => {
      setEditingNote(note);
      console.log('Editing note:', note);
    };
    const handleNoteSave = async (noteId: string, title: string, content: string) => {
      setNotes(prev => prev.map(note => note.id === noteId ? {
        ...note,
        title,
        content
      } : note));
      setEditingNote(null);
      console.log('Note saved:', {
        noteId,
        title,
        content
      });
      return Promise.resolve();
    };
    const handleNoteDelete = async (noteId: string) => {
      setNotes(prev => prev.filter(note => note.id !== noteId));
      console.log('Note deleted:', noteId);
      return Promise.resolve();
    };
    const handleNoteCancelEdit = () => {
      setEditingNote(null);
      console.log('Note edit cancelled');
    };
    const handleAddNote = () => {
      const newNote: Note = {
        id: \`note_\${Date.now()}\`,
        moment: 30,
        // Default time for demo
        title: '',
        description: ''
      };
      setNotes(prev => [...prev, newNote]);
      setEditingNote(newNote);
      console.log('Adding new note at time 30s');
    };
    const notesProps = {
      notes,
      videoDuration: 120,
      // 2 minutes for demo
      onNoteClick: handleNoteClick,
      courseId: 'demo-course',
      moduleId: 'demo-module',
      lessonId: 'demo-lesson',
      editingNote,
      onNoteEdit: handleNoteEdit,
      onNoteSave: handleNoteSave,
      onNoteDelete: handleNoteDelete,
      onNoteCancelEdit: handleNoteCancelEdit,
      onAddNote: handleAddNote
    };
    return <PlayerWrapper {...args} {...notesProps} />;
  },
  args: {
    ...Default.args,
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
  }
}`,...(Aa=(ja=Rt.parameters)==null?void 0:ja.docs)==null?void 0:Aa.source}}};const rf=["Default","WithSubtitles","Playing","Favorited","NoControls","WithDownload","DownloadOnly","AllFeatures","WithoutPictureInPicture","WithNotes"],vf=Object.freeze(Object.defineProperty({__proto__:null,AllFeatures:Et,Default:xe,DownloadOnly:Ct,Favorited:Mt,NoControls:Ot,Playing:Tt,WithDownload:Dt,WithNotes:Rt,WithSubtitles:Pt,WithoutPictureInPicture:Nt,__namedExportsOrder:rf,default:tf},Symbol.toStringTag,{value:"Module"}));export{vf as V,Oi as a,dr as r};
