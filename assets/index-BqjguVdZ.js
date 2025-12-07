const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-CRpSdQGn.js","assets/vendor-motion-BoSVoJ0s.js","assets/vendor-react-DlBnNAMw.js","assets/vendor-styled-Du6AN5G6.js","assets/Section-BGkULATQ.js","assets/TechnologyProficiency-DprAn24n.js","assets/ProfessionalExperience-BLhn6QgD.js","assets/MostProudOf-B339xh3t.js","assets/Certifications-BUmJQEuY.js","assets/Testimonials-WCnKKiNr.js","assets/EducationalQualifications-BDWWQl5U.js","assets/Contact-OS6H5Ih3.js"])))=>i.map(i=>d[i]);
import{r as nt,j as x,m as C,A as Pm,u as th,a as df,b as bd}from"./vendor-motion-BoSVoJ0s.js";import{r as ah,a as lh}from"./vendor-react-DlBnNAMw.js";import{f as eh,m as Ta,d as O,l as nh}from"./vendor-styled-Du6AN5G6.js";(function(){const q=document.createElement("link").relList;if(q&&q.supports&&q.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))g(D);new MutationObserver(D=>{for(const w of D)if(w.type==="childList")for(const it of w.addedNodes)it.tagName==="LINK"&&it.rel==="modulepreload"&&g(it)}).observe(document,{childList:!0,subtree:!0});function V(D){const w={};return D.integrity&&(w.integrity=D.integrity),D.referrerPolicy&&(w.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?w.credentials="include":D.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function g(D){if(D.ep)return;D.ep=!0;const w=V(D);fetch(D.href,w)}})();var mf={exports:{}},xn={},hf={exports:{}},gf={};var Sd;function ih(){return Sd||(Sd=1,(function(S){function q(v,z){var _=v.length;v.push(z);t:for(;0<_;){var ct=_-1>>>1,ft=v[ct];if(0<D(ft,z))v[ct]=z,v[_]=ft,_=ct;else break t}}function V(v){return v.length===0?null:v[0]}function g(v){if(v.length===0)return null;var z=v[0],_=v.pop();if(_!==z){v[0]=_;t:for(var ct=0,ft=v.length,jt=ft>>>1;ct<jt;){var dt=2*(ct+1)-1,F=v[dt],zt=dt+1,ba=v[zt];if(0>D(F,_))zt<ft&&0>D(ba,F)?(v[ct]=ba,v[zt]=_,ct=zt):(v[ct]=F,v[dt]=_,ct=dt);else if(zt<ft&&0>D(ba,_))v[ct]=ba,v[zt]=_,ct=zt;else break t}}return z}function D(v,z){var _=v.sortIndex-z.sortIndex;return _!==0?_:v.id-z.id}if(S.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var w=performance;S.unstable_now=function(){return w.now()}}else{var it=Date,G=it.now();S.unstable_now=function(){return it.now()-G}}var L=[],j=[],ut=1,T=null,W=3,Bt=!1,k=!1,qt=!1,Ja=!1,Ea=typeof setTimeout=="function"?setTimeout:null,ma=typeof clearTimeout=="function"?clearTimeout:null,Mt=typeof setImmediate<"u"?setImmediate:null;function Lt(v){for(var z=V(j);z!==null;){if(z.callback===null)g(j);else if(z.startTime<=v)g(j),z.sortIndex=z.expirationTime,q(L,z);else break;z=V(j)}}function aa(v){if(qt=!1,Lt(v),!k)if(V(L)!==null)k=!0,va||(va=!0,la());else{var z=V(j);z!==null&&Da(aa,z.startTime-v)}}var va=!1,Ma=-1,ha=5,Yl=-1;function zn(){return Ja?!0:!(S.unstable_now()-Yl<ha)}function Ql(){if(Ja=!1,va){var v=S.unstable_now();Yl=v;var z=!0;try{t:{k=!1,qt&&(qt=!1,ma(Ma),Ma=-1),Bt=!0;var _=W;try{a:{for(Lt(v),T=V(L);T!==null&&!(T.expirationTime>v&&zn());){var ct=T.callback;if(typeof ct=="function"){T.callback=null,W=T.priorityLevel;var ft=ct(T.expirationTime<=v);if(v=S.unstable_now(),typeof ft=="function"){T.callback=ft,Lt(v),z=!0;break a}T===V(L)&&g(L),Lt(v)}else g(L);T=V(L)}if(T!==null)z=!0;else{var jt=V(j);jt!==null&&Da(aa,jt.startTime-v),z=!1}}break t}finally{T=null,W=_,Bt=!1}z=void 0}}finally{z?la():va=!1}}}var la;if(typeof Mt=="function")la=function(){Mt(Ql)};else if(typeof MessageChannel<"u"){var An=new MessageChannel,De=An.port2;An.port1.onmessage=Ql,la=function(){De.postMessage(null)}}else la=function(){Ea(Ql,0)};function Da(v,z){Ma=Ea(function(){v(S.unstable_now())},z)}S.unstable_IdlePriority=5,S.unstable_ImmediatePriority=1,S.unstable_LowPriority=4,S.unstable_NormalPriority=3,S.unstable_Profiling=null,S.unstable_UserBlockingPriority=2,S.unstable_cancelCallback=function(v){v.callback=null},S.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ha=0<v?Math.floor(1e3/v):5},S.unstable_getCurrentPriorityLevel=function(){return W},S.unstable_next=function(v){switch(W){case 1:case 2:case 3:var z=3;break;default:z=W}var _=W;W=z;try{return v()}finally{W=_}},S.unstable_requestPaint=function(){Ja=!0},S.unstable_runWithPriority=function(v,z){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var _=W;W=v;try{return z()}finally{W=_}},S.unstable_scheduleCallback=function(v,z,_){var ct=S.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?ct+_:ct):_=ct,v){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=_+ft,v={id:ut++,callback:z,priorityLevel:v,startTime:_,expirationTime:ft,sortIndex:-1},_>ct?(v.sortIndex=_,q(j,v),V(L)===null&&v===V(j)&&(qt?(ma(Ma),Ma=-1):qt=!0,Da(aa,_-ct))):(v.sortIndex=ft,q(L,v),k||Bt||(k=!0,va||(va=!0,la()))),v},S.unstable_shouldYield=zn,S.unstable_wrapCallback=function(v){var z=W;return function(){var _=W;W=z;try{return v.apply(this,arguments)}finally{W=_}}}})(gf)),gf}var xd;function uh(){return xd||(xd=1,hf.exports=ih()),hf.exports}var zd;function ch(){if(zd)return xn;zd=1;var S=uh(),q=ah(),V=lh();function g(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function w(t){var a=t,l=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(l=a.return),t=a.return;while(t)}return a.tag===3?l:null}function it(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function G(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function L(t){if(w(t)!==t)throw Error(g(188))}function j(t){var a=t.alternate;if(!a){if(a=w(t),a===null)throw Error(g(188));return a!==t?null:t}for(var l=t,e=a;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(e=n.return,e!==null){l=e;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return L(n),t;if(i===e)return L(n),a;i=i.sibling}throw Error(g(188))}if(l.return!==e.return)l=n,e=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,e=i;break}if(c===e){u=!0,e=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,e=n;break}if(c===e){u=!0,e=i,l=n;break}c=c.sibling}if(!u)throw Error(g(189))}}if(l.alternate!==e)throw Error(g(190))}if(l.tag!==3)throw Error(g(188));return l.stateNode.current===l?t:a}function ut(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=ut(t),a!==null)return a;t=t.sibling}return null}var T=Object.assign,W=Symbol.for("react.element"),Bt=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),Ja=Symbol.for("react.strict_mode"),Ea=Symbol.for("react.profiler"),ma=Symbol.for("react.consumer"),Mt=Symbol.for("react.context"),Lt=Symbol.for("react.forward_ref"),aa=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),Ma=Symbol.for("react.memo"),ha=Symbol.for("react.lazy"),Yl=Symbol.for("react.activity"),zn=Symbol.for("react.memo_cache_sentinel"),Ql=Symbol.iterator;function la(t){return t===null||typeof t!="object"?null:(t=Ql&&t[Ql]||t["@@iterator"],typeof t=="function"?t:null)}var An=Symbol.for("react.client.reference");function De(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===An?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qt:return"Fragment";case Ea:return"Profiler";case Ja:return"StrictMode";case aa:return"Suspense";case va:return"SuspenseList";case Yl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case Mt:return t.displayName||"Context";case ma:return(t._context.displayName||"Context")+".Consumer";case Lt:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ma:return a=t.displayName||null,a!==null?a:De(t.type)||"Memo";case ha:a=t._payload,t=t._init;try{return De(t(a))}catch{}}return null}var Da=Array.isArray,v=q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=V.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},ct=[],ft=-1;function jt(t){return{current:t}}function dt(t){0>ft||(t.current=ct[ft],ct[ft]=null,ft--)}function F(t,a){ft++,ct[ft]=t.current,t.current=a}var zt=jt(null),ba=jt(null),ka=jt(null),Tn=jt(null);function En(t,a){switch(F(ka,a),F(ba,t),F(zt,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?Xr(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=Xr(a),t=Zr(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}dt(zt),F(zt,t)}function Xl(){dt(zt),dt(ba),dt(ka)}function Ki(t){t.memoizedState!==null&&F(Tn,t);var a=zt.current,l=Zr(a,t.type);a!==l&&(F(ba,t),F(zt,l))}function Mn(t){ba.current===t&&(dt(zt),dt(ba)),Tn.current===t&&(dt(Tn),pn._currentValue=_)}var Ji,pf;function xl(t){if(Ji===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);Ji=a&&a[1]||"",pf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ji+t+pf}var ki=!1;function $i(t,a){if(!t||ki)return"";ki=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(h){var m=h}Reflect.construct(t,[],b)}else{try{b.call()}catch(h){m=h}t.call(b.prototype)}}else{try{throw Error()}catch(h){m=h}(b=t())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(h){if(h&&m&&typeof h.stack=="string")return[h.stack,m.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=e.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var f=u.split(`
`),d=c.split(`
`);for(n=e=0;e<f.length&&!f[e].includes("DetermineComponentFrameRoot");)e++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(e===f.length||n===d.length)for(e=f.length-1,n=d.length-1;1<=e&&0<=n&&f[e]!==d[n];)n--;for(;1<=e&&0<=n;e--,n--)if(f[e]!==d[n]){if(e!==1||n!==1)do if(e--,n--,0>n||f[e]!==d[n]){var y=`
`+f[e].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=e&&0<=n);break}}}finally{ki=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?xl(l):""}function _d(t,a){switch(t.tag){case 26:case 27:case 5:return xl(t.type);case 16:return xl("Lazy");case 13:return t.child!==a&&a!==null?xl("Suspense Fallback"):xl("Suspense");case 19:return xl("SuspenseList");case 0:case 15:return $i(t.type,!1);case 11:return $i(t.type.render,!1);case 1:return $i(t.type,!0);case 31:return xl("Activity");default:return""}}function vf(t){try{var a="",l=null;do a+=_d(t,l),l=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Wi=Object.prototype.hasOwnProperty,Fi=S.unstable_scheduleCallback,Ii=S.unstable_cancelCallback,Cd=S.unstable_shouldYield,Hd=S.unstable_requestPaint,Vt=S.unstable_now,jd=S.unstable_getCurrentPriorityLevel,bf=S.unstable_ImmediatePriority,Sf=S.unstable_UserBlockingPriority,Dn=S.unstable_NormalPriority,Nd=S.unstable_LowPriority,xf=S.unstable_IdlePriority,Bd=S.log,qd=S.unstable_setDisableYieldValue,Oe=null,Kt=null;function $a(t){if(typeof Bd=="function"&&qd(t),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(Oe,t)}catch{}}var Jt=Math.clz32?Math.clz32:Rd,wd=Math.log,Gd=Math.LN2;function Rd(t){return t>>>=0,t===0?32:31-(wd(t)/Gd|0)|0}var On=256,Un=262144,_n=4194304;function zl(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Cn(t,a,l){var e=t.pendingLanes;if(e===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=e&134217727;return c!==0?(e=c&~i,e!==0?n=zl(e):(u&=c,u!==0?n=zl(u):l||(l=c&~t,l!==0&&(n=zl(l))))):(c=e&~i,c!==0?n=zl(c):u!==0?n=zl(u):l||(l=e&~t,l!==0&&(n=zl(l)))),n===0?0:a!==0&&a!==n&&(a&i)===0&&(i=n&-n,l=a&-a,i>=l||i===32&&(l&4194048)!==0)?a:n}function Ue(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Yd(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(){var t=_n;return _n<<=1,(_n&62914560)===0&&(_n=4194304),t}function Pi(t){for(var a=[],l=0;31>l;l++)a.push(t);return a}function _e(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qd(t,a,l,e,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,d=t.hiddenUpdates;for(l=u&~l;0<l;){var y=31-Jt(l),b=1<<y;c[y]=0,f[y]=-1;var m=d[y];if(m!==null)for(d[y]=null,y=0;y<m.length;y++){var h=m[y];h!==null&&(h.lane&=-536870913)}l&=~b}e!==0&&Af(t,e,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~a))}function Af(t,a,l){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-Jt(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|l&261930}function Tf(t,a){var l=t.entangledLanes|=a;for(t=t.entanglements;l;){var e=31-Jt(l),n=1<<e;n&a|t[e]&a&&(t[e]|=a),l&=~n}}function Ef(t,a){var l=a&-a;return l=(l&42)!==0?1:tu(l),(l&(t.suspendedLanes|a))!==0?0:l}function tu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function au(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mf(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:dd(t.type))}function Df(t,a){var l=z.p;try{return z.p=t,a()}finally{z.p=l}}var Wa=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Wa,wt="__reactProps$"+Wa,Zl="__reactContainer$"+Wa,lu="__reactEvents$"+Wa,Xd="__reactListeners$"+Wa,Zd="__reactHandles$"+Wa,Of="__reactResources$"+Wa,Ce="__reactMarker$"+Wa;function eu(t){delete t[Dt],delete t[wt],delete t[lu],delete t[Xd],delete t[Zd]}function Ll(t){var a=t[Dt];if(a)return a;for(var l=t.parentNode;l;){if(a=l[Zl]||l[Dt]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(t=Wr(t);t!==null;){if(l=t[Dt])return l;t=Wr(t)}return a}t=l,l=t.parentNode}return null}function Vl(t){if(t=t[Dt]||t[Zl]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function He(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(g(33))}function Kl(t){var a=t[Of];return a||(a=t[Of]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function At(t){t[Ce]=!0}var Uf=new Set,_f={};function Al(t,a){Jl(t,a),Jl(t+"Capture",a)}function Jl(t,a){for(_f[t]=a,t=0;t<a.length;t++)Uf.add(a[t])}var Ld=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cf={},Hf={};function Vd(t){return Wi.call(Hf,t)?!0:Wi.call(Cf,t)?!1:Ld.test(t)?Hf[t]=!0:(Cf[t]=!0,!1)}function Hn(t,a,l){if(Vd(a))if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+l)}}function jn(t,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+l)}}function Oa(t,a,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(a,l,""+e)}}function ea(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jf(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Kd(t,a,l){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,i=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function nu(t){if(!t._valueTracker){var a=jf(t)?"checked":"value";t._valueTracker=Kd(t,a,""+t[a])}}function Nf(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var l=a.getValue(),e="";return t&&(e=jf(t)?t.checked?"true":"false":t.value),t=e,t!==l?(a.setValue(t),!0):!1}function Nn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Jd=/[\n"\\]/g;function na(t){return t.replace(Jd,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function iu(t,a,l,e,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),a!=null?u==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+ea(a)):t.value!==""+ea(a)&&(t.value=""+ea(a)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),a!=null?uu(t,u,ea(a)):l!=null?uu(t,u,ea(l)):e!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ea(c):t.removeAttribute("name")}function Bf(t,a,l,e,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),a!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){nu(t);return}l=l!=null?""+ea(l):"",a=a!=null?""+ea(a):l,c||a===t.value||(t.value=a),t.defaultValue=a}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=c?t.checked:!!e,t.defaultChecked=!!e,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),nu(t)}function uu(t,a,l){a==="number"&&Nn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function kl(t,a,l,e){if(t=t.options,a){a={};for(var n=0;n<l.length;n++)a["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=a.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&e&&(t[l].defaultSelected=!0)}else{for(l=""+ea(l),a=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,e&&(t[n].defaultSelected=!0);return}a!==null||t[n].disabled||(a=t[n])}a!==null&&(a.selected=!0)}}function qf(t,a,l){if(a!=null&&(a=""+ea(a),a!==t.value&&(t.value=a),l==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=l!=null?""+ea(l):""}function wf(t,a,l,e){if(a==null){if(e!=null){if(l!=null)throw Error(g(92));if(Da(e)){if(1<e.length)throw Error(g(93));e=e[0]}l=e}l==null&&(l=""),a=l}l=ea(a),t.defaultValue=l,e=t.textContent,e===l&&e!==""&&e!==null&&(t.value=e),nu(t)}function $l(t,a){if(a){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=a;return}}t.textContent=a}var kd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gf(t,a,l){var e=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,l):typeof l!="number"||l===0||kd.has(a)?a==="float"?t.cssFloat=l:t[a]=(""+l).trim():t[a]=l+"px"}function Rf(t,a,l){if(a!=null&&typeof a!="object")throw Error(g(62));if(t=t.style,l!=null){for(var e in l)!l.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var n in a)e=a[n],a.hasOwnProperty(n)&&l[n]!==e&&Gf(t,n,e)}else for(var i in a)a.hasOwnProperty(i)&&Gf(t,i,a[i])}function cu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $d=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bn(t){return Wd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ua(){}var fu=null;function ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wl=null,Fl=null;function Yf(t){var a=Vl(t);if(a&&(t=a.stateNode)){var l=t[wt]||null;t:switch(t=a.stateNode,a.type){case"input":if(iu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+na(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var e=l[a];if(e!==t&&e.form===t.form){var n=e[wt]||null;if(!n)throw Error(g(90));iu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<l.length;a++)e=l[a],e.form===t.form&&Nf(e)}break t;case"textarea":qf(t,l.value,l.defaultValue);break t;case"select":a=l.value,a!=null&&kl(t,!!l.multiple,a,!1)}}}var su=!1;function Qf(t,a,l){if(su)return t(a,l);su=!0;try{var e=t(a);return e}finally{if(su=!1,(Wl!==null||Fl!==null)&&(zi(),Wl&&(a=Wl,t=Fl,Fl=Wl=null,Yf(a),t)))for(a=0;a<t.length;a++)Yf(t[a])}}function je(t,a){var l=t.stateNode;if(l===null)return null;var e=l[wt]||null;if(e===null)return null;l=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(g(231,a,typeof l));return l}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(_a)try{var Ne={};Object.defineProperty(Ne,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Ne,Ne),window.removeEventListener("test",Ne,Ne)}catch{ru=!1}var Fa=null,du=null,qn=null;function Xf(){if(qn)return qn;var t,a=du,l=a.length,e,n="value"in Fa?Fa.value:Fa.textContent,i=n.length;for(t=0;t<l&&a[t]===n[t];t++);var u=l-t;for(e=1;e<=u&&a[l-e]===n[i-e];e++);return qn=n.slice(t,1<e?1-e:void 0)}function wn(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Gn(){return!0}function Zf(){return!1}function Gt(t){function a(l,e,n,i,u){this._reactName=l,this._targetInst=n,this.type=e,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gn:Zf,this.isPropagationStopped=Zf,this}return T(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),a}var Tl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=Gt(Tl),Be=T({},Tl,{view:0,detail:0}),Fd=Gt(Be),mu,hu,qe,Yn=T({},Be,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qe&&(qe&&t.type==="mousemove"?(mu=t.screenX-qe.screenX,hu=t.screenY-qe.screenY):hu=mu=0,qe=t),mu)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),Lf=Gt(Yn),Id=T({},Yn,{dataTransfer:0}),Pd=Gt(Id),t0=T({},Be,{relatedTarget:0}),gu=Gt(t0),a0=T({},Tl,{animationName:0,elapsedTime:0,pseudoElement:0}),l0=Gt(a0),e0=T({},Tl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n0=Gt(e0),i0=T({},Tl,{data:0}),Vf=Gt(i0),u0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=f0[t])?!!a[t]:!1}function yu(){return o0}var s0=T({},Be,{key:function(t){if(t.key){var a=u0[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=wn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(t){return t.type==="keypress"?wn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r0=Gt(s0),d0=T({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=Gt(d0),m0=T({},Be,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),h0=Gt(m0),g0=T({},Tl,{propertyName:0,elapsedTime:0,pseudoElement:0}),y0=Gt(g0),p0=T({},Yn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),v0=Gt(p0),b0=T({},Tl,{newState:0,oldState:0}),S0=Gt(b0),x0=[9,13,27,32],pu=_a&&"CompositionEvent"in window,we=null;_a&&"documentMode"in document&&(we=document.documentMode);var z0=_a&&"TextEvent"in window&&!we,Jf=_a&&(!pu||we&&8<we&&11>=we),kf=" ",$f=!1;function Wf(t,a){switch(t){case"keyup":return x0.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Il=!1;function A0(t,a){switch(t){case"compositionend":return Ff(a);case"keypress":return a.which!==32?null:($f=!0,kf);case"textInput":return t=a.data,t===kf&&$f?null:t;default:return null}}function T0(t,a){if(Il)return t==="compositionend"||!pu&&Wf(t,a)?(t=Xf(),qn=du=Fa=null,Il=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Jf&&a.locale!=="ko"?null:a.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!E0[t.type]:a==="textarea"}function Pf(t,a,l,e){Wl?Fl?Fl.push(e):Fl=[e]:Wl=e,a=Ui(a,"onChange"),0<a.length&&(l=new Rn("onChange","change",null,l,e),t.push({event:l,listeners:a}))}var Ge=null,Re=null;function M0(t){qr(t,0)}function Qn(t){var a=He(t);if(Nf(a))return t}function to(t,a){if(t==="change")return a}var ao=!1;if(_a){var vu;if(_a){var bu="oninput"in document;if(!bu){var lo=document.createElement("div");lo.setAttribute("oninput","return;"),bu=typeof lo.oninput=="function"}vu=bu}else vu=!1;ao=vu&&(!document.documentMode||9<document.documentMode)}function eo(){Ge&&(Ge.detachEvent("onpropertychange",no),Re=Ge=null)}function no(t){if(t.propertyName==="value"&&Qn(Re)){var a=[];Pf(a,Re,t,ou(t)),Qf(M0,a)}}function D0(t,a,l){t==="focusin"?(eo(),Ge=a,Re=l,Ge.attachEvent("onpropertychange",no)):t==="focusout"&&eo()}function O0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qn(Re)}function U0(t,a){if(t==="click")return Qn(a)}function _0(t,a){if(t==="input"||t==="change")return Qn(a)}function C0(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var kt=typeof Object.is=="function"?Object.is:C0;function Ye(t,a){if(kt(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var l=Object.keys(t),e=Object.keys(a);if(l.length!==e.length)return!1;for(e=0;e<l.length;e++){var n=l[e];if(!Wi.call(a,n)||!kt(t[n],a[n]))return!1}return!0}function io(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uo(t,a){var l=io(t);t=0;for(var e;l;){if(l.nodeType===3){if(e=t+l.textContent.length,t<=a&&e>=a)return{node:l,offset:a-t};t=e}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=io(l)}}function co(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?co(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function fo(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Nn(t.document);a instanceof t.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)t=a.contentWindow;else break;a=Nn(t.document)}return a}function Su(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var H0=_a&&"documentMode"in document&&11>=document.documentMode,Pl=null,xu=null,Qe=null,zu=!1;function oo(t,a,l){var e=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;zu||Pl==null||Pl!==Nn(e)||(e=Pl,"selectionStart"in e&&Su(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Qe&&Ye(Qe,e)||(Qe=e,e=Ui(xu,"onSelect"),0<e.length&&(a=new Rn("onSelect","select",null,a,l),t.push({event:a,listeners:e}),a.target=Pl)))}function El(t,a){var l={};return l[t.toLowerCase()]=a.toLowerCase(),l["Webkit"+t]="webkit"+a,l["Moz"+t]="moz"+a,l}var te={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionrun:El("Transition","TransitionRun"),transitionstart:El("Transition","TransitionStart"),transitioncancel:El("Transition","TransitionCancel"),transitionend:El("Transition","TransitionEnd")},Au={},so={};_a&&(so=document.createElement("div").style,"AnimationEvent"in window||(delete te.animationend.animation,delete te.animationiteration.animation,delete te.animationstart.animation),"TransitionEvent"in window||delete te.transitionend.transition);function Ml(t){if(Au[t])return Au[t];if(!te[t])return t;var a=te[t],l;for(l in a)if(a.hasOwnProperty(l)&&l in so)return Au[t]=a[l];return t}var ro=Ml("animationend"),mo=Ml("animationiteration"),ho=Ml("animationstart"),j0=Ml("transitionrun"),N0=Ml("transitionstart"),B0=Ml("transitioncancel"),go=Ml("transitionend"),yo=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function ga(t,a){yo.set(t,a),Al(a,[t])}var Xn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ia=[],ae=0,Eu=0;function Zn(){for(var t=ae,a=Eu=ae=0;a<t;){var l=ia[a];ia[a++]=null;var e=ia[a];ia[a++]=null;var n=ia[a];ia[a++]=null;var i=ia[a];if(ia[a++]=null,e!==null&&n!==null){var u=e.pending;u===null?n.next=n:(n.next=u.next,u.next=n),e.pending=n}i!==0&&po(l,n,i)}}function Ln(t,a,l,e){ia[ae++]=t,ia[ae++]=a,ia[ae++]=l,ia[ae++]=e,Eu|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function Mu(t,a,l,e){return Ln(t,a,l,e),Vn(t)}function Dl(t,a){return Ln(t,null,null,a),Vn(t)}function po(t,a,l){t.lanes|=l;var e=t.alternate;e!==null&&(e.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,e=i.alternate,e!==null&&(e.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&a!==null&&(n=31-Jt(l),t=i.hiddenUpdates,e=t[n],e===null?t[n]=[a]:e.push(a),a.lane=l|536870912),i):null}function Vn(t){if(50<sn)throw sn=0,Bc=null,Error(g(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var le={};function q0(t,a,l,e){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,a,l,e){return new q0(t,a,l,e)}function Du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ca(t,a){var l=t.alternate;return l===null?(l=$t(t.tag,a,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=a,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,a=t.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function vo(t,a){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,a=l.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Kn(t,a,l,e,n,i){var u=0;if(e=t,typeof t=="function")Du(t)&&(u=1);else if(typeof t=="string")u=Qm(t,l,zt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Yl:return t=$t(31,l,a,n),t.elementType=Yl,t.lanes=i,t;case qt:return Ol(l.children,n,i,a);case Ja:u=8,n|=24;break;case Ea:return t=$t(12,l,a,n|2),t.elementType=Ea,t.lanes=i,t;case aa:return t=$t(13,l,a,n),t.elementType=aa,t.lanes=i,t;case va:return t=$t(19,l,a,n),t.elementType=va,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mt:u=10;break t;case ma:u=9;break t;case Lt:u=11;break t;case Ma:u=14;break t;case ha:u=16,e=null;break t}u=29,l=Error(g(130,t===null?"null":typeof t,"")),e=null}return a=$t(u,l,a,n),a.elementType=t,a.type=e,a.lanes=i,a}function Ol(t,a,l,e){return t=$t(7,t,e,a),t.lanes=l,t}function Ou(t,a,l){return t=$t(6,t,null,a),t.lanes=l,t}function bo(t){var a=$t(18,null,null,0);return a.stateNode=t,a}function Uu(t,a,l){return a=$t(4,t.children!==null?t.children:[],t.key,a),a.lanes=l,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var So=new WeakMap;function ua(t,a){if(typeof t=="object"&&t!==null){var l=So.get(t);return l!==void 0?l:(a={value:t,source:a,stack:vf(a)},So.set(t,a),a)}return{value:t,source:a,stack:vf(a)}}var ee=[],ne=0,Jn=null,Xe=0,ca=[],fa=0,Ia=null,Sa=1,xa="";function Ha(t,a){ee[ne++]=Xe,ee[ne++]=Jn,Jn=t,Xe=a}function xo(t,a,l){ca[fa++]=Sa,ca[fa++]=xa,ca[fa++]=Ia,Ia=t;var e=Sa;t=xa;var n=32-Jt(e)-1;e&=~(1<<n),l+=1;var i=32-Jt(a)+n;if(30<i){var u=n-n%5;i=(e&(1<<u)-1).toString(32),e>>=u,n-=u,Sa=1<<32-Jt(a)+n|l<<n|e,xa=i+t}else Sa=1<<i|l<<n|e,xa=t}function _u(t){t.return!==null&&(Ha(t,1),xo(t,1,0))}function Cu(t){for(;t===Jn;)Jn=ee[--ne],ee[ne]=null,Xe=ee[--ne],ee[ne]=null;for(;t===Ia;)Ia=ca[--fa],ca[fa]=null,xa=ca[--fa],ca[fa]=null,Sa=ca[--fa],ca[fa]=null}function zo(t,a){ca[fa++]=Sa,ca[fa++]=xa,ca[fa++]=Ia,Sa=a.id,xa=a.overflow,Ia=t}var Ot=null,ot=null,Z=!1,Pa=null,oa=!1,Hu=Error(g(519));function tl(t){var a=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ze(ua(a,t)),Hu}function Ao(t){var a=t.stateNode,l=t.type,e=t.memoizedProps;switch(a[Dt]=t,a[wt]=e,l){case"dialog":Y("cancel",a),Y("close",a);break;case"iframe":case"object":case"embed":Y("load",a);break;case"video":case"audio":for(l=0;l<dn.length;l++)Y(dn[l],a);break;case"source":Y("error",a);break;case"img":case"image":case"link":Y("error",a),Y("load",a);break;case"details":Y("toggle",a);break;case"input":Y("invalid",a),Bf(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":Y("invalid",a);break;case"textarea":Y("invalid",a),wf(a,e.value,e.defaultValue,e.children)}l=e.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||e.suppressHydrationWarning===!0||Yr(a.textContent,l)?(e.popover!=null&&(Y("beforetoggle",a),Y("toggle",a)),e.onScroll!=null&&Y("scroll",a),e.onScrollEnd!=null&&Y("scrollend",a),e.onClick!=null&&(a.onclick=Ua),a=!0):a=!1,a||tl(t,!0)}function To(t){for(Ot=t.return;Ot;)switch(Ot.tag){case 5:case 31:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:Ot=Ot.return}}function ie(t){if(t!==Ot)return!1;if(!Z)return To(t),Z=!0,!1;var a=t.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Wc(t.type,t.memoizedProps)),l=!l),l&&ot&&tl(t),To(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(317));ot=$r(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(317));ot=$r(t)}else a===27?(a=ot,hl(t.type)?(t=af,af=null,ot=t):ot=a):ot=Ot?ra(t.stateNode.nextSibling):null;return!0}function Ul(){ot=Ot=null,Z=!1}function ju(){var t=Pa;return t!==null&&(Xt===null?Xt=t:Xt.push.apply(Xt,t),Pa=null),t}function Ze(t){Pa===null?Pa=[t]:Pa.push(t)}var Nu=jt(null),_l=null,ja=null;function al(t,a,l){F(Nu,a._currentValue),a._currentValue=l}function Na(t){t._currentValue=Nu.current,dt(Nu)}function Bu(t,a,l){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===l)break;t=t.return}}function qu(t,a,l,e){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var f=0;f<a.length;f++)if(c.context===a[f]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Bu(i.return,l,t),e||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(g(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Bu(u,l,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ue(t,a,l,e){t=null;for(var n=a,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(g(387));if(u=u.memoizedProps,u!==null){var c=n.type;kt(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===Tn.current){if(u=n.alternate,u===null)throw Error(g(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(pn):t=[pn])}n=n.return}t!==null&&qu(a,t,l,e),a.flags|=262144}function kn(t){for(t=t.firstContext;t!==null;){if(!kt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cl(t){_l=t,ja=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ut(t){return Eo(_l,t)}function $n(t,a){return _l===null&&Cl(t),Eo(t,a)}function Eo(t,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},ja===null){if(t===null)throw Error(g(308));ja=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else ja=ja.next=a;return l}var w0=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(l,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(l){return l()})}},G0=S.unstable_scheduleCallback,R0=S.unstable_NormalPriority,pt={$$typeof:Mt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new w0,data:new Map,refCount:0}}function Le(t){t.refCount--,t.refCount===0&&G0(R0,function(){t.controller.abort()})}var Ve=null,Gu=0,ce=0,fe=null;function Y0(t,a){if(Ve===null){var l=Ve=[];Gu=0,ce=Qc(),fe={status:"pending",value:void 0,then:function(e){l.push(e)}}}return Gu++,a.then(Mo,Mo),a}function Mo(){if(--Gu===0&&Ve!==null){fe!==null&&(fe.status="fulfilled");var t=Ve;Ve=null,ce=0,fe=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function Q0(t,a){var l=[],e={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var n=0;n<l.length;n++)(0,l[n])(a)},function(n){for(e.status="rejected",e.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),e}var Do=v.S;v.S=function(t,a){sr=Vt(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Y0(t,a),Do!==null&&Do(t,a)};var Hl=jt(null);function Ru(){var t=Hl.current;return t!==null?t:et.pooledCache}function Wn(t,a){a===null?F(Hl,Hl.current):F(Hl,a.pool)}function Oo(){var t=Ru();return t===null?null:{parent:pt._currentValue,pool:t}}var oe=Error(g(460)),Yu=Error(g(474)),Fn=Error(g(542)),In={then:function(){}};function Uo(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _o(t,a,l){switch(l=t[l],l===void 0?t.push(a):l!==a&&(a.then(Ua,Ua),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Ho(t),t;default:if(typeof a.status=="string")a.then(Ua,Ua);else{if(t=et,t!==null&&100<t.shellSuspendCounter)throw Error(g(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=e}},function(e){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Ho(t),t}throw Nl=a,oe}}function jl(t){try{var a=t._init;return a(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Nl=l,oe):l}}var Nl=null;function Co(){if(Nl===null)throw Error(g(459));var t=Nl;return Nl=null,t}function Ho(t){if(t===oe||t===Fn)throw Error(g(483))}var se=null,Ke=0;function Pn(t){var a=Ke;return Ke+=1,se===null&&(se=[]),_o(se,t,a)}function Je(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function ti(t,a){throw a.$$typeof===W?Error(g(525)):(t=Object.prototype.toString.call(a),Error(g(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function jo(t){function a(s,o){if(t){var r=s.deletions;r===null?(s.deletions=[o],s.flags|=16):r.push(o)}}function l(s,o){if(!t)return null;for(;o!==null;)a(s,o),o=o.sibling;return null}function e(s){for(var o=new Map;s!==null;)s.key!==null?o.set(s.key,s):o.set(s.index,s),s=s.sibling;return o}function n(s,o){return s=Ca(s,o),s.index=0,s.sibling=null,s}function i(s,o,r){return s.index=r,t?(r=s.alternate,r!==null?(r=r.index,r<o?(s.flags|=67108866,o):r):(s.flags|=67108866,o)):(s.flags|=1048576,o)}function u(s){return t&&s.alternate===null&&(s.flags|=67108866),s}function c(s,o,r,p){return o===null||o.tag!==6?(o=Ou(r,s.mode,p),o.return=s,o):(o=n(o,r),o.return=s,o)}function f(s,o,r,p){var M=r.type;return M===qt?y(s,o,r.props.children,p,r.key):o!==null&&(o.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ha&&jl(M)===o.type)?(o=n(o,r.props),Je(o,r),o.return=s,o):(o=Kn(r.type,r.key,r.props,null,s.mode,p),Je(o,r),o.return=s,o)}function d(s,o,r,p){return o===null||o.tag!==4||o.stateNode.containerInfo!==r.containerInfo||o.stateNode.implementation!==r.implementation?(o=Uu(r,s.mode,p),o.return=s,o):(o=n(o,r.children||[]),o.return=s,o)}function y(s,o,r,p,M){return o===null||o.tag!==7?(o=Ol(r,s.mode,p,M),o.return=s,o):(o=n(o,r),o.return=s,o)}function b(s,o,r){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Ou(""+o,s.mode,r),o.return=s,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Bt:return r=Kn(o.type,o.key,o.props,null,s.mode,r),Je(r,o),r.return=s,r;case k:return o=Uu(o,s.mode,r),o.return=s,o;case ha:return o=jl(o),b(s,o,r)}if(Da(o)||la(o))return o=Ol(o,s.mode,r,null),o.return=s,o;if(typeof o.then=="function")return b(s,Pn(o),r);if(o.$$typeof===Mt)return b(s,$n(s,o),r);ti(s,o)}return null}function m(s,o,r,p){var M=o!==null?o.key:null;if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return M!==null?null:c(s,o,""+r,p);if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Bt:return r.key===M?f(s,o,r,p):null;case k:return r.key===M?d(s,o,r,p):null;case ha:return r=jl(r),m(s,o,r,p)}if(Da(r)||la(r))return M!==null?null:y(s,o,r,p,null);if(typeof r.then=="function")return m(s,o,Pn(r),p);if(r.$$typeof===Mt)return m(s,o,$n(s,r),p);ti(s,r)}return null}function h(s,o,r,p,M){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return s=s.get(r)||null,c(o,s,""+p,M);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Bt:return s=s.get(p.key===null?r:p.key)||null,f(o,s,p,M);case k:return s=s.get(p.key===null?r:p.key)||null,d(o,s,p,M);case ha:return p=jl(p),h(s,o,r,p,M)}if(Da(p)||la(p))return s=s.get(r)||null,y(o,s,p,M,null);if(typeof p.then=="function")return h(s,o,r,Pn(p),M);if(p.$$typeof===Mt)return h(s,o,r,$n(o,p),M);ti(o,p)}return null}function A(s,o,r,p){for(var M=null,K=null,E=o,N=o=0,X=null;E!==null&&N<r.length;N++){E.index>N?(X=E,E=null):X=E.sibling;var J=m(s,E,r[N],p);if(J===null){E===null&&(E=X);break}t&&E&&J.alternate===null&&a(s,E),o=i(J,o,N),K===null?M=J:K.sibling=J,K=J,E=X}if(N===r.length)return l(s,E),Z&&Ha(s,N),M;if(E===null){for(;N<r.length;N++)E=b(s,r[N],p),E!==null&&(o=i(E,o,N),K===null?M=E:K.sibling=E,K=E);return Z&&Ha(s,N),M}for(E=e(E);N<r.length;N++)X=h(E,s,N,r[N],p),X!==null&&(t&&X.alternate!==null&&E.delete(X.key===null?N:X.key),o=i(X,o,N),K===null?M=X:K.sibling=X,K=X);return t&&E.forEach(function(bl){return a(s,bl)}),Z&&Ha(s,N),M}function U(s,o,r,p){if(r==null)throw Error(g(151));for(var M=null,K=null,E=o,N=o=0,X=null,J=r.next();E!==null&&!J.done;N++,J=r.next()){E.index>N?(X=E,E=null):X=E.sibling;var bl=m(s,E,J.value,p);if(bl===null){E===null&&(E=X);break}t&&E&&bl.alternate===null&&a(s,E),o=i(bl,o,N),K===null?M=bl:K.sibling=bl,K=bl,E=X}if(J.done)return l(s,E),Z&&Ha(s,N),M;if(E===null){for(;!J.done;N++,J=r.next())J=b(s,J.value,p),J!==null&&(o=i(J,o,N),K===null?M=J:K.sibling=J,K=J);return Z&&Ha(s,N),M}for(E=e(E);!J.done;N++,J=r.next())J=h(E,s,N,J.value,p),J!==null&&(t&&J.alternate!==null&&E.delete(J.key===null?N:J.key),o=i(J,o,N),K===null?M=J:K.sibling=J,K=J);return t&&E.forEach(function(Im){return a(s,Im)}),Z&&Ha(s,N),M}function lt(s,o,r,p){if(typeof r=="object"&&r!==null&&r.type===qt&&r.key===null&&(r=r.props.children),typeof r=="object"&&r!==null){switch(r.$$typeof){case Bt:t:{for(var M=r.key;o!==null;){if(o.key===M){if(M=r.type,M===qt){if(o.tag===7){l(s,o.sibling),p=n(o,r.props.children),p.return=s,s=p;break t}}else if(o.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ha&&jl(M)===o.type){l(s,o.sibling),p=n(o,r.props),Je(p,r),p.return=s,s=p;break t}l(s,o);break}else a(s,o);o=o.sibling}r.type===qt?(p=Ol(r.props.children,s.mode,p,r.key),p.return=s,s=p):(p=Kn(r.type,r.key,r.props,null,s.mode,p),Je(p,r),p.return=s,s=p)}return u(s);case k:t:{for(M=r.key;o!==null;){if(o.key===M)if(o.tag===4&&o.stateNode.containerInfo===r.containerInfo&&o.stateNode.implementation===r.implementation){l(s,o.sibling),p=n(o,r.children||[]),p.return=s,s=p;break t}else{l(s,o);break}else a(s,o);o=o.sibling}p=Uu(r,s.mode,p),p.return=s,s=p}return u(s);case ha:return r=jl(r),lt(s,o,r,p)}if(Da(r))return A(s,o,r,p);if(la(r)){if(M=la(r),typeof M!="function")throw Error(g(150));return r=M.call(r),U(s,o,r,p)}if(typeof r.then=="function")return lt(s,o,Pn(r),p);if(r.$$typeof===Mt)return lt(s,o,$n(s,r),p);ti(s,r)}return typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint"?(r=""+r,o!==null&&o.tag===6?(l(s,o.sibling),p=n(o,r),p.return=s,s=p):(l(s,o),p=Ou(r,s.mode,p),p.return=s,s=p),u(s)):l(s,o)}return function(s,o,r,p){try{Ke=0;var M=lt(s,o,r,p);return se=null,M}catch(E){if(E===oe||E===Fn)throw E;var K=$t(29,E,null,s.mode);return K.lanes=p,K.return=s,K}finally{}}}var Bl=jo(!0),No=jo(!1),ll=!1;function Qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xu(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function el(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function nl(t,a,l){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,($&2)!==0){var n=e.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a,a=Vn(t),po(t,null,l),a}return Ln(t,e,a,l),Vn(t)}function ke(t,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,l|=e,a.lanes=l,Tf(t,l)}}function Zu(t,a){var l=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,l===e)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=a:i=i.next=a}else n=i=a;l={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:e.shared,callbacks:e.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=a:t.next=a,l.lastBaseUpdate=a}var Lu=!1;function $e(){if(Lu){var t=fe;if(t!==null)throw t}}function We(t,a,l,e){Lu=!1;var n=t.updateQueue;ll=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,d=f.next;f.next=null,u===null?i=d:u.next=d,u=f;var y=t.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==u&&(c===null?y.firstBaseUpdate=d:c.next=d,y.lastBaseUpdate=f))}if(i!==null){var b=n.baseState;u=0,y=d=f=null,c=i;do{var m=c.lane&-536870913,h=m!==c.lane;if(h?(Q&m)===m:(e&m)===m){m!==0&&m===ce&&(Lu=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var A=t,U=c;m=a;var lt=l;switch(U.tag){case 1:if(A=U.payload,typeof A=="function"){b=A.call(lt,b,m);break t}b=A;break t;case 3:A.flags=A.flags&-65537|128;case 0:if(A=U.payload,m=typeof A=="function"?A.call(lt,b,m):A,m==null)break t;b=T({},b,m);break t;case 2:ll=!0}}m=c.callback,m!==null&&(t.flags|=64,h&&(t.flags|=8192),h=n.callbacks,h===null?n.callbacks=[m]:h.push(m))}else h={lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(d=y=h,f=b):y=y.next=h,u|=m;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;h=c,c=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);y===null&&(f=b),n.baseState=f,n.firstBaseUpdate=d,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),ol|=u,t.lanes=u,t.memoizedState=b}}function Bo(t,a){if(typeof t!="function")throw Error(g(191,t));t.call(a)}function qo(t,a){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Bo(l[t],a)}var re=jt(null),ai=jt(0);function wo(t,a){t=Za,F(ai,t),F(re,a),Za=t|a.baseLanes}function Vu(){F(ai,Za),F(re,re.current)}function Ku(){Za=ai.current,dt(re),dt(ai)}var Wt=jt(null),sa=null;function il(t){var a=t.alternate;F(gt,gt.current&1),F(Wt,t),sa===null&&(a===null||re.current!==null||a.memoizedState!==null)&&(sa=t)}function Ju(t){F(gt,gt.current),F(Wt,t),sa===null&&(sa=t)}function Go(t){t.tag===22?(F(gt,gt.current),F(Wt,t),sa===null&&(sa=t)):ul()}function ul(){F(gt,gt.current),F(Wt,Wt.current)}function Ft(t){dt(Wt),sa===t&&(sa=null),dt(gt)}var gt=jt(0);function li(t){for(var a=t;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Pc(l)||tf(l)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ba=0,H=null,tt=null,vt=null,ei=!1,de=!1,ql=!1,ni=0,Fe=0,me=null,X0=0;function mt(){throw Error(g(321))}function ku(t,a){if(a===null)return!1;for(var l=0;l<a.length&&l<t.length;l++)if(!kt(t[l],a[l]))return!1;return!0}function $u(t,a,l,e,n,i){return Ba=i,H=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,v.H=t===null||t.memoizedState===null?xs:sc,ql=!1,i=l(e,n),ql=!1,de&&(i=Yo(a,l,e,n)),Ro(t),i}function Ro(t){v.H=tn;var a=tt!==null&&tt.next!==null;if(Ba=0,vt=tt=H=null,ei=!1,Fe=0,me=null,a)throw Error(g(300));t===null||bt||(t=t.dependencies,t!==null&&kn(t)&&(bt=!0))}function Yo(t,a,l,e){H=t;var n=0;do{if(de&&(me=null),Fe=0,de=!1,25<=n)throw Error(g(301));if(n+=1,vt=tt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=zs,i=a(l,e)}while(de);return i}function Z0(){var t=v.H,a=t.useState()[0];return a=typeof a.then=="function"?Ie(a):a,t=t.useState()[0],(tt!==null?tt.memoizedState:null)!==t&&(H.flags|=1024),a}function Wu(){var t=ni!==0;return ni=0,t}function Fu(t,a,l){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~l}function Iu(t){if(ei){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}ei=!1}Ba=0,vt=tt=H=null,de=!1,Fe=ni=0,me=null}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?H.memoizedState=vt=t:vt=vt.next=t,vt}function yt(){if(tt===null){var t=H.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var a=vt===null?H.memoizedState:vt.next;if(a!==null)vt=a,tt=t;else{if(t===null)throw H.alternate===null?Error(g(467)):Error(g(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},vt===null?H.memoizedState=vt=t:vt=vt.next=t}return vt}function ii(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ie(t){var a=Fe;return Fe+=1,me===null&&(me=[]),t=_o(me,t,a),a=H,(vt===null?a.memoizedState:vt.next)===null&&(a=a.alternate,v.H=a===null||a.memoizedState===null?xs:sc),t}function ui(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ie(t);if(t.$$typeof===Mt)return Ut(t)}throw Error(g(438,String(t)))}function Pu(t){var a=null,l=H.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var e=H.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=ii(),H.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(t),e=0;e<t;e++)l[e]=zn;return a.index++,l}function qa(t,a){return typeof a=="function"?a(t):a}function ci(t){var a=yt();return tc(a,tt,t)}function tc(t,a,l){var e=t.queue;if(e===null)throw Error(g(311));e.lastRenderedReducer=l;var n=t.baseQueue,i=e.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}a.baseQueue=n=i,e.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{a=n.next;var c=u=null,f=null,d=a,y=!1;do{var b=d.lane&-536870913;if(b!==d.lane?(Q&b)===b:(Ba&b)===b){var m=d.revertLane;if(m===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),b===ce&&(y=!0);else if((Ba&m)===m){d=d.next,m===ce&&(y=!0);continue}else b={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},f===null?(c=f=b,u=i):f=f.next=b,H.lanes|=m,ol|=m;b=d.action,ql&&l(i,b),i=d.hasEagerState?d.eagerState:l(i,b)}else m={lane:b,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},f===null?(c=f=m,u=i):f=f.next=m,H.lanes|=b,ol|=b;d=d.next}while(d!==null&&d!==a);if(f===null?u=i:f.next=c,!kt(i,t.memoizedState)&&(bt=!0,y&&(l=fe,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=f,e.lastRenderedState=i}return n===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function ac(t){var a=yt(),l=a.queue;if(l===null)throw Error(g(311));l.lastRenderedReducer=t;var e=l.dispatch,n=l.pending,i=a.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);kt(i,a.memoizedState)||(bt=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),l.lastRenderedState=i}return[i,e]}function Qo(t,a,l){var e=H,n=yt(),i=Z;if(i){if(l===void 0)throw Error(g(407));l=l()}else l=a();var u=!kt((tt||n).memoizedState,l);if(u&&(n.memoizedState=l,bt=!0),n=n.queue,nc(Lo.bind(null,e,n,t),[t]),n.getSnapshot!==a||u||vt!==null&&vt.memoizedState.tag&1){if(e.flags|=2048,he(9,{destroy:void 0},Zo.bind(null,e,n,l,a),null),et===null)throw Error(g(349));i||(Ba&127)!==0||Xo(e,a,l)}return l}function Xo(t,a,l){t.flags|=16384,t={getSnapshot:a,value:l},a=H.updateQueue,a===null?(a=ii(),H.updateQueue=a,a.stores=[t]):(l=a.stores,l===null?a.stores=[t]:l.push(t))}function Zo(t,a,l,e){a.value=l,a.getSnapshot=e,Vo(a)&&Ko(t)}function Lo(t,a,l){return l(function(){Vo(a)&&Ko(t)})}function Vo(t){var a=t.getSnapshot;t=t.value;try{var l=a();return!kt(t,l)}catch{return!0}}function Ko(t){var a=Dl(t,2);a!==null&&Zt(a,t,2)}function lc(t){var a=Nt();if(typeof t=="function"){var l=t;if(t=l(),ql){$a(!0);try{l()}finally{$a(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},a}function Jo(t,a,l,e){return t.baseState=l,tc(t,tt,typeof e=="function"?e:qa)}function L0(t,a,l,e,n){if(si(t))throw Error(g(485));if(t=a.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};v.T!==null?l(!0):i.isTransition=!1,e(i),l=a.pending,l===null?(i.next=a.pending=i,ko(a,i)):(i.next=l.next,a.pending=l.next=i)}}function ko(t,a){var l=a.action,e=a.payload,n=t.state;if(a.isTransition){var i=v.T,u={};v.T=u;try{var c=l(n,e),f=v.S;f!==null&&f(u,c),$o(t,a,c)}catch(d){ec(t,a,d)}finally{i!==null&&u.types!==null&&(i.types=u.types),v.T=i}}else try{i=l(n,e),$o(t,a,i)}catch(d){ec(t,a,d)}}function $o(t,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(e){Wo(t,a,e)},function(e){return ec(t,a,e)}):Wo(t,a,l)}function Wo(t,a,l){a.status="fulfilled",a.value=l,Fo(a),t.state=l,a=t.pending,a!==null&&(l=a.next,l===a?t.pending=null:(l=l.next,a.next=l,ko(t,l)))}function ec(t,a,l){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=l,Fo(a),a=a.next;while(a!==e)}t.action=null}function Fo(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Io(t,a){return a}function Po(t,a){if(Z){var l=et.formState;if(l!==null){t:{var e=H;if(Z){if(ot){a:{for(var n=ot,i=oa;n.nodeType!==8;){if(!i){n=null;break a}if(n=ra(n.nextSibling),n===null){n=null;break a}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ot=ra(n.nextSibling),e=n.data==="F!";break t}}tl(e)}e=!1}e&&(a=l[0])}}return l=Nt(),l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:a},l.queue=e,l=vs.bind(null,H,e),e.dispatch=l,e=lc(!1),i=oc.bind(null,H,!1,e.queue),e=Nt(),n={state:a,dispatch:null,action:t,pending:null},e.queue=n,l=L0.bind(null,H,n,i,l),n.dispatch=l,e.memoizedState=t,[a,l,!1]}function ts(t){var a=yt();return as(a,tt,t)}function as(t,a,l){if(a=tc(t,a,Io)[0],t=ci(qa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=Ie(a)}catch(u){throw u===oe?Fn:u}else e=a;a=yt();var n=a.queue,i=n.dispatch;return l!==a.memoizedState&&(H.flags|=2048,he(9,{destroy:void 0},V0.bind(null,n,l),null)),[e,i,t]}function V0(t,a){t.action=a}function ls(t){var a=yt(),l=tt;if(l!==null)return as(a,l,t);yt(),a=a.memoizedState,l=yt();var e=l.queue.dispatch;return l.memoizedState=t,[a,e,!1]}function he(t,a,l,e){return t={tag:t,create:l,deps:e,inst:a,next:null},a=H.updateQueue,a===null&&(a=ii(),H.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=t.next=t:(e=l.next,l.next=t,t.next=e,a.lastEffect=t),t}function es(){return yt().memoizedState}function fi(t,a,l,e){var n=Nt();H.flags|=t,n.memoizedState=he(1|a,{destroy:void 0},l,e===void 0?null:e)}function oi(t,a,l,e){var n=yt();e=e===void 0?null:e;var i=n.memoizedState.inst;tt!==null&&e!==null&&ku(e,tt.memoizedState.deps)?n.memoizedState=he(a,i,l,e):(H.flags|=t,n.memoizedState=he(1|a,i,l,e))}function ns(t,a){fi(8390656,8,t,a)}function nc(t,a){oi(2048,8,t,a)}function K0(t){H.flags|=4;var a=H.updateQueue;if(a===null)a=ii(),H.updateQueue=a,a.events=[t];else{var l=a.events;l===null?a.events=[t]:l.push(t)}}function is(t){var a=yt().memoizedState;return K0({ref:a,nextImpl:t}),function(){if(($&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}function us(t,a){return oi(4,2,t,a)}function cs(t,a){return oi(4,4,t,a)}function fs(t,a){if(typeof a=="function"){t=t();var l=a(t);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function os(t,a,l){l=l!=null?l.concat([t]):null,oi(4,4,fs.bind(null,a,t),l)}function ic(){}function ss(t,a){var l=yt();a=a===void 0?null:a;var e=l.memoizedState;return a!==null&&ku(a,e[1])?e[0]:(l.memoizedState=[t,a],t)}function rs(t,a){var l=yt();a=a===void 0?null:a;var e=l.memoizedState;if(a!==null&&ku(a,e[1]))return e[0];if(e=t(),ql){$a(!0);try{t()}finally{$a(!1)}}return l.memoizedState=[e,a],e}function uc(t,a,l){return l===void 0||(Ba&1073741824)!==0&&(Q&261930)===0?t.memoizedState=a:(t.memoizedState=l,t=dr(),H.lanes|=t,ol|=t,l)}function ds(t,a,l,e){return kt(l,a)?l:re.current!==null?(t=uc(t,l,e),kt(t,a)||(bt=!0),t):(Ba&42)===0||(Ba&1073741824)!==0&&(Q&261930)===0?(bt=!0,t.memoizedState=l):(t=dr(),H.lanes|=t,ol|=t,a)}function ms(t,a,l,e,n){var i=z.p;z.p=i!==0&&8>i?i:8;var u=v.T,c={};v.T=c,oc(t,!1,a,l);try{var f=n(),d=v.S;if(d!==null&&d(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=Q0(f,e);Pe(t,a,y,ta(t))}else Pe(t,a,e,ta(t))}catch(b){Pe(t,a,{then:function(){},status:"rejected",reason:b},ta())}finally{z.p=i,u!==null&&c.types!==null&&(u.types=c.types),v.T=u}}function J0(){}function cc(t,a,l,e){if(t.tag!==5)throw Error(g(476));var n=hs(t).queue;ms(t,n,a,_,l===null?J0:function(){return gs(t),l(e)})}function hs(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:_},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:l},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function gs(t){var a=hs(t);a.next===null&&(a=t.alternate.memoizedState),Pe(t,a.next.queue,{},ta())}function fc(){return Ut(pn)}function ys(){return yt().memoizedState}function ps(){return yt().memoizedState}function k0(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var l=ta();t=el(l);var e=nl(a,t,l);e!==null&&(Zt(e,a,l),ke(e,a,l)),a={cache:wu()},t.payload=a;return}a=a.return}}function $0(t,a,l){var e=ta();l={lane:e,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},si(t)?bs(a,l):(l=Mu(t,a,l,e),l!==null&&(Zt(l,t,e),Ss(l,a,e)))}function vs(t,a,l){var e=ta();Pe(t,a,l,e)}function Pe(t,a,l,e){var n={lane:e,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(si(t))bs(a,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var u=a.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,kt(c,u))return Ln(t,a,n,0),et===null&&Zn(),!1}catch{}finally{}if(l=Mu(t,a,n,e),l!==null)return Zt(l,t,e),Ss(l,a,e),!0}return!1}function oc(t,a,l,e){if(e={lane:2,revertLane:Qc(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},si(t)){if(a)throw Error(g(479))}else a=Mu(t,l,e,2),a!==null&&Zt(a,t,2)}function si(t){var a=t.alternate;return t===H||a!==null&&a===H}function bs(t,a){de=ei=!0;var l=t.pending;l===null?a.next=a:(a.next=l.next,l.next=a),t.pending=a}function Ss(t,a,l){if((l&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,l|=e,a.lanes=l,Tf(t,l)}}var tn={readContext:Ut,use:ui,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt};tn.useEffectEvent=mt;var xs={readContext:Ut,use:ui,useCallback:function(t,a){return Nt().memoizedState=[t,a===void 0?null:a],t},useContext:Ut,useEffect:ns,useImperativeHandle:function(t,a,l){l=l!=null?l.concat([t]):null,fi(4194308,4,fs.bind(null,a,t),l)},useLayoutEffect:function(t,a){return fi(4194308,4,t,a)},useInsertionEffect:function(t,a){fi(4,2,t,a)},useMemo:function(t,a){var l=Nt();a=a===void 0?null:a;var e=t();if(ql){$a(!0);try{t()}finally{$a(!1)}}return l.memoizedState=[e,a],e},useReducer:function(t,a,l){var e=Nt();if(l!==void 0){var n=l(a);if(ql){$a(!0);try{l(a)}finally{$a(!1)}}}else n=a;return e.memoizedState=e.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},e.queue=t,t=t.dispatch=$0.bind(null,H,t),[e.memoizedState,t]},useRef:function(t){var a=Nt();return t={current:t},a.memoizedState=t},useState:function(t){t=lc(t);var a=t.queue,l=vs.bind(null,H,a);return a.dispatch=l,[t.memoizedState,l]},useDebugValue:ic,useDeferredValue:function(t,a){var l=Nt();return uc(l,t,a)},useTransition:function(){var t=lc(!1);return t=ms.bind(null,H,t.queue,!0,!1),Nt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,l){var e=H,n=Nt();if(Z){if(l===void 0)throw Error(g(407));l=l()}else{if(l=a(),et===null)throw Error(g(349));(Q&127)!==0||Xo(e,a,l)}n.memoizedState=l;var i={value:l,getSnapshot:a};return n.queue=i,ns(Lo.bind(null,e,i,t),[t]),e.flags|=2048,he(9,{destroy:void 0},Zo.bind(null,e,i,l,a),null),l},useId:function(){var t=Nt(),a=et.identifierPrefix;if(Z){var l=xa,e=Sa;l=(e&~(1<<32-Jt(e)-1)).toString(32)+l,a="_"+a+"R_"+l,l=ni++,0<l&&(a+="H"+l.toString(32)),a+="_"}else l=X0++,a="_"+a+"r_"+l.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:fc,useFormState:Po,useActionState:Po,useOptimistic:function(t){var a=Nt();a.memoizedState=a.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=oc.bind(null,H,!0,l),l.dispatch=a,[t,a]},useMemoCache:Pu,useCacheRefresh:function(){return Nt().memoizedState=k0.bind(null,H)},useEffectEvent:function(t){var a=Nt(),l={impl:t};return a.memoizedState=l,function(){if(($&2)!==0)throw Error(g(440));return l.impl.apply(void 0,arguments)}}},sc={readContext:Ut,use:ui,useCallback:ss,useContext:Ut,useEffect:nc,useImperativeHandle:os,useInsertionEffect:us,useLayoutEffect:cs,useMemo:rs,useReducer:ci,useRef:es,useState:function(){return ci(qa)},useDebugValue:ic,useDeferredValue:function(t,a){var l=yt();return ds(l,tt.memoizedState,t,a)},useTransition:function(){var t=ci(qa)[0],a=yt().memoizedState;return[typeof t=="boolean"?t:Ie(t),a]},useSyncExternalStore:Qo,useId:ys,useHostTransitionStatus:fc,useFormState:ts,useActionState:ts,useOptimistic:function(t,a){var l=yt();return Jo(l,tt,t,a)},useMemoCache:Pu,useCacheRefresh:ps};sc.useEffectEvent=is;var zs={readContext:Ut,use:ui,useCallback:ss,useContext:Ut,useEffect:nc,useImperativeHandle:os,useInsertionEffect:us,useLayoutEffect:cs,useMemo:rs,useReducer:ac,useRef:es,useState:function(){return ac(qa)},useDebugValue:ic,useDeferredValue:function(t,a){var l=yt();return tt===null?uc(l,t,a):ds(l,tt.memoizedState,t,a)},useTransition:function(){var t=ac(qa)[0],a=yt().memoizedState;return[typeof t=="boolean"?t:Ie(t),a]},useSyncExternalStore:Qo,useId:ys,useHostTransitionStatus:fc,useFormState:ls,useActionState:ls,useOptimistic:function(t,a){var l=yt();return tt!==null?Jo(l,tt,t,a):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:ps};zs.useEffectEvent=is;function rc(t,a,l,e){a=t.memoizedState,l=l(e,a),l=l==null?a:T({},a,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var dc={enqueueSetState:function(t,a,l){t=t._reactInternals;var e=ta(),n=el(e);n.payload=a,l!=null&&(n.callback=l),a=nl(t,n,e),a!==null&&(Zt(a,t,e),ke(a,t,e))},enqueueReplaceState:function(t,a,l){t=t._reactInternals;var e=ta(),n=el(e);n.tag=1,n.payload=a,l!=null&&(n.callback=l),a=nl(t,n,e),a!==null&&(Zt(a,t,e),ke(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var l=ta(),e=el(l);e.tag=2,a!=null&&(e.callback=a),a=nl(t,e,l),a!==null&&(Zt(a,t,l),ke(a,t,l))}};function As(t,a,l,e,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,i,u):a.prototype&&a.prototype.isPureReactComponent?!Ye(l,e)||!Ye(n,i):!0}function Ts(t,a,l,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,e),a.state!==t&&dc.enqueueReplaceState(a,a.state,null)}function wl(t,a){var l=a;if("ref"in a){l={};for(var e in a)e!=="ref"&&(l[e]=a[e])}if(t=t.defaultProps){l===a&&(l=T({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Es(t){Xn(t)}function Ms(t){console.error(t)}function Ds(t){Xn(t)}function ri(t,a){try{var l=t.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function Os(t,a,l){try{var e=t.onCaughtError;e(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function mc(t,a,l){return l=el(l),l.tag=3,l.payload={element:null},l.callback=function(){ri(t,a)},l}function Us(t){return t=el(t),t.tag=3,t}function _s(t,a,l,e){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;t.payload=function(){return n(i)},t.callback=function(){Os(a,l,e)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Os(a,l,e),typeof n!="function"&&(sl===null?sl=new Set([this]):sl.add(this));var c=e.stack;this.componentDidCatch(e.value,{componentStack:c!==null?c:""})})}function W0(t,a,l,e,n){if(l.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=l.alternate,a!==null&&ue(a,l,n,!0),l=Wt.current,l!==null){switch(l.tag){case 31:case 13:return sa===null?Ai():l.alternate===null&&ht===0&&(ht=3),l.flags&=-257,l.flags|=65536,l.lanes=n,e===In?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([e]):a.add(e),Gc(t,e,n)),!1;case 22:return l.flags|=65536,e===In?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([e]):l.add(e)),Gc(t,e,n)),!1}throw Error(g(435,l.tag))}return Gc(t,e,n),Ai(),!1}if(Z)return a=Wt.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,e!==Hu&&(t=Error(g(422),{cause:e}),Ze(ua(t,l)))):(e!==Hu&&(a=Error(g(423),{cause:e}),Ze(ua(a,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,e=ua(e,l),n=mc(t.stateNode,e,n),Zu(t,n),ht!==4&&(ht=2)),!1;var i=Error(g(520),{cause:e});if(i=ua(i,l),on===null?on=[i]:on.push(i),ht!==4&&(ht=2),a===null)return!0;e=ua(e,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=mc(l.stateNode,e,t),Zu(l,t),!1;case 1:if(a=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(sl===null||!sl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Us(n),_s(n,t,l,e),Zu(l,n),!1}l=l.return}while(l!==null);return!1}var hc=Error(g(461)),bt=!1;function _t(t,a,l,e){a.child=t===null?No(a,null,l,e):Bl(a,t.child,l,e)}function Cs(t,a,l,e,n){l=l.render;var i=a.ref;if("ref"in e){var u={};for(var c in e)c!=="ref"&&(u[c]=e[c])}else u=e;return Cl(a),e=$u(t,a,l,u,i,n),c=Wu(),t!==null&&!bt?(Fu(t,a,n),wa(t,a,n)):(Z&&c&&_u(a),a.flags|=1,_t(t,a,e,n),a.child)}function Hs(t,a,l,e,n){if(t===null){var i=l.type;return typeof i=="function"&&!Du(i)&&i.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=i,js(t,a,i,e,n)):(t=Kn(l.type,null,e,a,a.mode,n),t.ref=a.ref,t.return=a,a.child=t)}if(i=t.child,!zc(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ye,l(u,e)&&t.ref===a.ref)return wa(t,a,n)}return a.flags|=1,t=Ca(i,e),t.ref=a.ref,t.return=a,a.child=t}function js(t,a,l,e,n){if(t!==null){var i=t.memoizedProps;if(Ye(i,e)&&t.ref===a.ref)if(bt=!1,a.pendingProps=e=i,zc(t,n))(t.flags&131072)!==0&&(bt=!0);else return a.lanes=t.lanes,wa(t,a,n)}return gc(t,a,l,e,n)}function Ns(t,a,l,e){var n=e.children,i=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(e=a.child=t.child,n=0;e!==null;)n=n|e.lanes|e.childLanes,e=e.sibling;e=n&~i}else e=0,a.child=null;return Bs(t,a,i,l,e)}if((l&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wn(a,i!==null?i.cachePool:null),i!==null?wo(a,i):Vu(),Go(a);else return e=a.lanes=536870912,Bs(t,a,i!==null?i.baseLanes|l:l,l,e)}else i!==null?(Wn(a,i.cachePool),wo(a,i),ul(),a.memoizedState=null):(t!==null&&Wn(a,null),Vu(),ul());return _t(t,a,n,l),a.child}function an(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Bs(t,a,l,e,n){var i=Ru();return i=i===null?null:{parent:pt._currentValue,pool:i},a.memoizedState={baseLanes:l,cachePool:i},t!==null&&Wn(a,null),Vu(),Go(a),t!==null&&ue(t,a,e,!0),a.childLanes=n,null}function di(t,a){return a=hi({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function qs(t,a,l){return Bl(a,t.child,null,l),t=di(a,a.pendingProps),t.flags|=2,Ft(a),a.memoizedState=null,t}function F0(t,a,l){var e=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(Z){if(e.mode==="hidden")return t=di(a,e),a.lanes=536870912,an(null,t);if(Ju(a),(t=ot)?(t=kr(t,oa),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Sa,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},l=bo(t),l.return=a,a.child=l,Ot=a,ot=null)):t=null,t===null)throw tl(a);return a.lanes=536870912,null}return di(a,e)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Ju(a),n)if(a.flags&256)a.flags&=-257,a=qs(t,a,l);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(g(558));else if(bt||ue(t,a,l,!1),n=(l&t.childLanes)!==0,bt||n){if(e=et,e!==null&&(u=Ef(e,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Dl(t,u),Zt(e,t,u),hc;Ai(),a=qs(t,a,l)}else t=i.treeContext,ot=ra(u.nextSibling),Ot=a,Z=!0,Pa=null,oa=!1,t!==null&&zo(a,t),a=di(a,e),a.flags|=4096;return a}return t=Ca(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function mi(t,a){var l=a.ref;if(l===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(g(284));(t===null||t.ref!==l)&&(a.flags|=4194816)}}function gc(t,a,l,e,n){return Cl(a),l=$u(t,a,l,e,void 0,n),e=Wu(),t!==null&&!bt?(Fu(t,a,n),wa(t,a,n)):(Z&&e&&_u(a),a.flags|=1,_t(t,a,l,n),a.child)}function ws(t,a,l,e,n,i){return Cl(a),a.updateQueue=null,l=Yo(a,e,l,n),Ro(t),e=Wu(),t!==null&&!bt?(Fu(t,a,i),wa(t,a,i)):(Z&&e&&_u(a),a.flags|=1,_t(t,a,l,i),a.child)}function Gs(t,a,l,e,n){if(Cl(a),a.stateNode===null){var i=le,u=l.contextType;typeof u=="object"&&u!==null&&(i=Ut(u)),i=new l(e,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=dc,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=e,i.state=a.memoizedState,i.refs={},Qu(a),u=l.contextType,i.context=typeof u=="object"&&u!==null?Ut(u):le,i.state=a.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(rc(a,l,u,e),i.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&dc.enqueueReplaceState(i,i.state,null),We(a,e,i,n),$e(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){i=a.stateNode;var c=a.memoizedProps,f=wl(l,c);i.props=f;var d=i.context,y=l.contextType;u=le,typeof y=="object"&&y!==null&&(u=Ut(y));var b=l.getDerivedStateFromProps;y=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=a.pendingProps!==c,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||d!==u)&&Ts(a,i,e,u),ll=!1;var m=a.memoizedState;i.state=m,We(a,e,i,n),$e(),d=a.memoizedState,c||m!==d||ll?(typeof b=="function"&&(rc(a,l,b,e),d=a.memoizedState),(f=ll||As(a,l,f,e,m,d,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=d),i.props=e,i.state=d,i.context=u,e=f):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{i=a.stateNode,Xu(t,a),u=a.memoizedProps,y=wl(l,u),i.props=y,b=a.pendingProps,m=i.context,d=l.contextType,f=le,typeof d=="object"&&d!==null&&(f=Ut(d)),c=l.getDerivedStateFromProps,(d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==b||m!==f)&&Ts(a,i,e,f),ll=!1,m=a.memoizedState,i.state=m,We(a,e,i,n),$e();var h=a.memoizedState;u!==b||m!==h||ll||t!==null&&t.dependencies!==null&&kn(t.dependencies)?(typeof c=="function"&&(rc(a,l,c,e),h=a.memoizedState),(y=ll||As(a,l,y,e,m,h,f)||t!==null&&t.dependencies!==null&&kn(t.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(e,h,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(e,h,f)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=h),i.props=e,i.state=h,i.context=f,e=y):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=1024),e=!1)}return i=e,mi(t,a),e=(a.flags&128)!==0,i||e?(i=a.stateNode,l=e&&typeof l.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,t!==null&&e?(a.child=Bl(a,t.child,null,n),a.child=Bl(a,null,l,n)):_t(t,a,l,n),a.memoizedState=i.state,t=a.child):t=wa(t,a,n),t}function Rs(t,a,l,e){return Ul(),a.flags|=256,_t(t,a,l,e),a.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pc(t){return{baseLanes:t,cachePool:Oo()}}function vc(t,a,l){return t=t!==null?t.childLanes&~l:0,a&&(t|=Pt),t}function Ys(t,a,l){var e=a.pendingProps,n=!1,i=(a.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(gt.current&2)!==0),u&&(n=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,t===null){if(Z){if(n?il(a):ul(),(t=ot)?(t=kr(t,oa),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Sa,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},l=bo(t),l.return=a,a.child=l,Ot=a,ot=null)):t=null,t===null)throw tl(a);return tf(t)?a.lanes=32:a.lanes=536870912,null}var c=e.children;return e=e.fallback,n?(ul(),n=a.mode,c=hi({mode:"hidden",children:c},n),e=Ol(e,n,l,null),c.return=a,e.return=a,c.sibling=e,a.child=c,e=a.child,e.memoizedState=pc(l),e.childLanes=vc(t,u,l),a.memoizedState=yc,an(null,e)):(il(a),bc(a,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(i)a.flags&256?(il(a),a.flags&=-257,a=Sc(t,a,l)):a.memoizedState!==null?(ul(),a.child=t.child,a.flags|=128,a=null):(ul(),c=e.fallback,n=a.mode,e=hi({mode:"visible",children:e.children},n),c=Ol(c,n,l,null),c.flags|=2,e.return=a,c.return=a,e.sibling=c,a.child=e,Bl(a,t.child,null,l),e=a.child,e.memoizedState=pc(l),e.childLanes=vc(t,u,l),a.memoizedState=yc,a=an(null,e));else if(il(a),tf(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var d=u.dgst;u=d,e=Error(g(419)),e.stack="",e.digest=u,Ze({value:e,source:null,stack:null}),a=Sc(t,a,l)}else if(bt||ue(t,a,l,!1),u=(l&t.childLanes)!==0,bt||u){if(u=et,u!==null&&(e=Ef(u,l),e!==0&&e!==f.retryLane))throw f.retryLane=e,Dl(t,e),Zt(u,t,e),hc;Pc(c)||Ai(),a=Sc(t,a,l)}else Pc(c)?(a.flags|=192,a.child=t.child,a=null):(t=f.treeContext,ot=ra(c.nextSibling),Ot=a,Z=!0,Pa=null,oa=!1,t!==null&&zo(a,t),a=bc(a,e.children),a.flags|=4096);return a}return n?(ul(),c=e.fallback,n=a.mode,f=t.child,d=f.sibling,e=Ca(f,{mode:"hidden",children:e.children}),e.subtreeFlags=f.subtreeFlags&65011712,d!==null?c=Ca(d,c):(c=Ol(c,n,l,null),c.flags|=2),c.return=a,e.return=a,e.sibling=c,a.child=e,an(null,e),e=a.child,c=t.child.memoizedState,c===null?c=pc(l):(n=c.cachePool,n!==null?(f=pt._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Oo(),c={baseLanes:c.baseLanes|l,cachePool:n}),e.memoizedState=c,e.childLanes=vc(t,u,l),a.memoizedState=yc,an(t.child,e)):(il(a),l=t.child,t=l.sibling,l=Ca(l,{mode:"visible",children:e.children}),l.return=a,l.sibling=null,t!==null&&(u=a.deletions,u===null?(a.deletions=[t],a.flags|=16):u.push(t)),a.child=l,a.memoizedState=null,l)}function bc(t,a){return a=hi({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function hi(t,a){return t=$t(22,t,null,a),t.lanes=0,t}function Sc(t,a,l){return Bl(a,t.child,null,l),t=bc(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Qs(t,a,l){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),Bu(t.return,a,l)}function xc(t,a,l,e,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=e,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Xs(t,a,l){var e=a.pendingProps,n=e.revealOrder,i=e.tail;e=e.children;var u=gt.current,c=(u&2)!==0;if(c?(u=u&1|2,a.flags|=128):u&=1,F(gt,u),_t(t,a,e,l),e=Z?Xe:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qs(t,l,a);else if(t.tag===19)Qs(t,l,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=a.child,n=null;l!==null;)t=l.alternate,t!==null&&li(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=a.child,a.child=null):(n=l.sibling,l.sibling=null),xc(a,!1,n,l,i,e);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=a.child,a.child=null;n!==null;){if(t=n.alternate,t!==null&&li(t)===null){a.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}xc(a,!0,l,null,i,e);break;case"together":xc(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function wa(t,a,l){if(t!==null&&(a.dependencies=t.dependencies),ol|=a.lanes,(l&a.childLanes)===0)if(t!==null){if(ue(t,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(g(153));if(a.child!==null){for(t=a.child,l=Ca(t,t.pendingProps),a.child=l,l.return=a;t.sibling!==null;)t=t.sibling,l=l.sibling=Ca(t,t.pendingProps),l.return=a;l.sibling=null}return a.child}function zc(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&kn(t)))}function I0(t,a,l){switch(a.tag){case 3:En(a,a.stateNode.containerInfo),al(a,pt,t.memoizedState.cache),Ul();break;case 27:case 5:Ki(a);break;case 4:En(a,a.stateNode.containerInfo);break;case 10:al(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ju(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(il(a),a.flags|=128,null):(l&a.child.childLanes)!==0?Ys(t,a,l):(il(a),t=wa(t,a,l),t!==null?t.sibling:null);il(a);break;case 19:var n=(t.flags&128)!==0;if(e=(l&a.childLanes)!==0,e||(ue(t,a,l,!1),e=(l&a.childLanes)!==0),n){if(e)return Xs(t,a,l);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),F(gt,gt.current),e)break;return null;case 22:return a.lanes=0,Ns(t,a,l,a.pendingProps);case 24:al(a,pt,t.memoizedState.cache)}return wa(t,a,l)}function Zs(t,a,l){if(t!==null)if(t.memoizedProps!==a.pendingProps)bt=!0;else{if(!zc(t,l)&&(a.flags&128)===0)return bt=!1,I0(t,a,l);bt=(t.flags&131072)!==0}else bt=!1,Z&&(a.flags&1048576)!==0&&xo(a,Xe,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=jl(a.elementType),a.type=t,typeof t=="function")Du(t)?(e=wl(t,e),a.tag=1,a=Gs(null,a,t,e,l)):(a.tag=0,a=gc(null,a,t,e,l));else{if(t!=null){var n=t.$$typeof;if(n===Lt){a.tag=11,a=Cs(null,a,t,e,l);break t}else if(n===Ma){a.tag=14,a=Hs(null,a,t,e,l);break t}}throw a=De(t)||t,Error(g(306,a,""))}}return a;case 0:return gc(t,a,a.type,a.pendingProps,l);case 1:return e=a.type,n=wl(e,a.pendingProps),Gs(t,a,e,n,l);case 3:t:{if(En(a,a.stateNode.containerInfo),t===null)throw Error(g(387));e=a.pendingProps;var i=a.memoizedState;n=i.element,Xu(t,a),We(a,e,null,l);var u=a.memoizedState;if(e=u.cache,al(a,pt,e),e!==i.cache&&qu(a,[pt],l,!0),$e(),e=u.element,i.isDehydrated)if(i={element:e,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=Rs(t,a,e,l);break t}else if(e!==n){n=ua(Error(g(424)),a),Ze(n),a=Rs(t,a,e,l);break t}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ot=ra(t.firstChild),Ot=a,Z=!0,Pa=null,oa=!0,l=No(a,null,e,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ul(),e===n){a=wa(t,a,l);break t}_t(t,a,e,l)}a=a.child}return a;case 26:return mi(t,a),t===null?(l=td(a.type,null,a.pendingProps,null))?a.memoizedState=l:Z||(l=a.type,t=a.pendingProps,e=_i(ka.current).createElement(l),e[Dt]=a,e[wt]=t,Ct(e,l,t),At(e),a.stateNode=e):a.memoizedState=td(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Ki(a),t===null&&Z&&(e=a.stateNode=Fr(a.type,a.pendingProps,ka.current),Ot=a,oa=!0,n=ot,hl(a.type)?(af=n,ot=ra(e.firstChild)):ot=n),_t(t,a,a.pendingProps.children,l),mi(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Z&&((n=e=ot)&&(e=Om(e,a.type,a.pendingProps,oa),e!==null?(a.stateNode=e,Ot=a,ot=ra(e.firstChild),oa=!1,n=!0):n=!1),n||tl(a)),Ki(a),n=a.type,i=a.pendingProps,u=t!==null?t.memoizedProps:null,e=i.children,Wc(n,i)?e=null:u!==null&&Wc(n,u)&&(a.flags|=32),a.memoizedState!==null&&(n=$u(t,a,Z0,null,null,l),pn._currentValue=n),mi(t,a),_t(t,a,e,l),a.child;case 6:return t===null&&Z&&((t=l=ot)&&(l=Um(l,a.pendingProps,oa),l!==null?(a.stateNode=l,Ot=a,ot=null,t=!0):t=!1),t||tl(a)),null;case 13:return Ys(t,a,l);case 4:return En(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=Bl(a,null,e,l):_t(t,a,e,l),a.child;case 11:return Cs(t,a,a.type,a.pendingProps,l);case 7:return _t(t,a,a.pendingProps,l),a.child;case 8:return _t(t,a,a.pendingProps.children,l),a.child;case 12:return _t(t,a,a.pendingProps.children,l),a.child;case 10:return e=a.pendingProps,al(a,a.type,e.value),_t(t,a,e.children,l),a.child;case 9:return n=a.type._context,e=a.pendingProps.children,Cl(a),n=Ut(n),e=e(n),a.flags|=1,_t(t,a,e,l),a.child;case 14:return Hs(t,a,a.type,a.pendingProps,l);case 15:return js(t,a,a.type,a.pendingProps,l);case 19:return Xs(t,a,l);case 31:return F0(t,a,l);case 22:return Ns(t,a,l,a.pendingProps);case 24:return Cl(a),e=Ut(pt),t===null?(n=Ru(),n===null&&(n=et,i=wu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),a.memoizedState={parent:e,cache:n},Qu(a),al(a,pt,n)):((t.lanes&l)!==0&&(Xu(t,a),We(a,null,null,l),$e()),n=t.memoizedState,i=a.memoizedState,n.parent!==e?(n={parent:e,cache:e},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),al(a,pt,e)):(e=i.cache,al(a,pt,e),e!==n.cache&&qu(a,[pt],l,!0))),_t(t,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(g(156,a.tag))}function Ga(t){t.flags|=4}function Ac(t,a,l,e,n){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(yr())t.flags|=8192;else throw Nl=In,Yu}else t.flags&=-16777217}function Ls(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!id(a))if(yr())t.flags|=8192;else throw Nl=In,Yu}function gi(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?zf():536870912,t.lanes|=a,ve|=a)}function ln(t,a){if(!Z)switch(t.tailMode){case"hidden":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function st(t){var a=t.alternate!==null&&t.alternate.child===t.child,l=0,e=0;if(a)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=e,t.childLanes=l,a}function P0(t,a,l){var e=a.pendingProps;switch(Cu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(a),null;case 1:return st(a),null;case 3:return l=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Na(pt),Xl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ie(a)?Ga(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ju())),st(a),null;case 26:var n=a.type,i=a.memoizedState;return t===null?(Ga(a),i!==null?(st(a),Ls(a,i)):(st(a),Ac(a,n,null,e,l))):i?i!==t.memoizedState?(Ga(a),st(a),Ls(a,i)):(st(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&Ga(a),st(a),Ac(a,n,t,e,l)),null;case 27:if(Mn(a),l=ka.current,n=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ga(a);else{if(!e){if(a.stateNode===null)throw Error(g(166));return st(a),null}t=zt.current,ie(a)?Ao(a):(t=Fr(n,e,l),a.stateNode=t,Ga(a))}return st(a),null;case 5:if(Mn(a),n=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ga(a);else{if(!e){if(a.stateNode===null)throw Error(g(166));return st(a),null}if(i=zt.current,ie(a))Ao(a);else{var u=_i(ka.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof e.is=="string"?u.createElement("select",{is:e.is}):u.createElement("select"),e.multiple?i.multiple=!0:e.size&&(i.size=e.size);break;default:i=typeof e.is=="string"?u.createElement(n,{is:e.is}):u.createElement(n)}}i[Dt]=a,i[wt]=e;t:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break t;for(;u.sibling===null;){if(u.return===null||u.return===a)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=i;t:switch(Ct(i,n,e),n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ga(a)}}return st(a),Ac(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,l),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&Ga(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(g(166));if(t=ka.current,ie(a)){if(t=a.stateNode,l=a.memoizedProps,e=null,n=Ot,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}t[Dt]=a,t=!!(t.nodeValue===l||e!==null&&e.suppressHydrationWarning===!0||Yr(t.nodeValue,l)),t||tl(a,!0)}else t=_i(t).createTextNode(e),t[Dt]=a,a.stateNode=t}return st(a),null;case 31:if(l=a.memoizedState,t===null||t.memoizedState!==null){if(e=ie(a),l!==null){if(t===null){if(!e)throw Error(g(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(557));t[Dt]=a}else Ul(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;st(a),t=!1}else l=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return a.flags&256?(Ft(a),a):(Ft(a),null);if((a.flags&128)!==0)throw Error(g(558))}return st(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ie(a),e!==null&&e.dehydrated!==null){if(t===null){if(!n)throw Error(g(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[Dt]=a}else Ul(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;st(a),n=!1}else n=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(Ft(a),a):(Ft(a),null)}return Ft(a),(a.flags&128)!==0?(a.lanes=l,a):(l=e!==null,t=t!==null&&t.memoizedState!==null,l&&(e=a.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048)),l!==t&&l&&(a.child.flags|=8192),gi(a,a.updateQueue),st(a),null);case 4:return Xl(),t===null&&Vc(a.stateNode.containerInfo),st(a),null;case 10:return Na(a.type),st(a),null;case 19:if(dt(gt),e=a.memoizedState,e===null)return st(a),null;if(n=(a.flags&128)!==0,i=e.rendering,i===null)if(n)ln(e,!1);else{if(ht!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(i=li(t),i!==null){for(a.flags|=128,ln(e,!1),t=i.updateQueue,a.updateQueue=t,gi(a,t),a.subtreeFlags=0,t=l,l=a.child;l!==null;)vo(l,t),l=l.sibling;return F(gt,gt.current&1|2),Z&&Ha(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&Vt()>Si&&(a.flags|=128,n=!0,ln(e,!1),a.lanes=4194304)}else{if(!n)if(t=li(i),t!==null){if(a.flags|=128,n=!0,t=t.updateQueue,a.updateQueue=t,gi(a,t),ln(e,!0),e.tail===null&&e.tailMode==="hidden"&&!i.alternate&&!Z)return st(a),null}else 2*Vt()-e.renderingStartTime>Si&&l!==536870912&&(a.flags|=128,n=!0,ln(e,!1),a.lanes=4194304);e.isBackwards?(i.sibling=a.child,a.child=i):(t=e.last,t!==null?t.sibling=i:a.child=i,e.last=i)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=Vt(),t.sibling=null,l=gt.current,F(gt,n?l&1|2:l&1),Z&&Ha(a,e.treeForkCount),t):(st(a),null);case 22:case 23:return Ft(a),Ku(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(l&536870912)!==0&&(a.flags&128)===0&&(st(a),a.subtreeFlags&6&&(a.flags|=8192)):st(a),l=a.updateQueue,l!==null&&gi(a,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==l&&(a.flags|=2048),t!==null&&dt(Hl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Na(pt),st(a),null;case 25:return null;case 30:return null}throw Error(g(156,a.tag))}function tm(t,a){switch(Cu(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Na(pt),Xl(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Mn(a),null;case 31:if(a.memoizedState!==null){if(Ft(a),a.alternate===null)throw Error(g(340));Ul()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(Ft(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(g(340));Ul()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return dt(gt),null;case 4:return Xl(),null;case 10:return Na(a.type),null;case 22:case 23:return Ft(a),Ku(),t!==null&&dt(Hl),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Na(pt),null;case 25:return null;default:return null}}function Vs(t,a){switch(Cu(a),a.tag){case 3:Na(pt),Xl();break;case 26:case 27:case 5:Mn(a);break;case 4:Xl();break;case 31:a.memoizedState!==null&&Ft(a);break;case 13:Ft(a);break;case 19:dt(gt);break;case 10:Na(a.type);break;case 22:case 23:Ft(a),Ku(),t!==null&&dt(Hl);break;case 24:Na(pt)}}function en(t,a){try{var l=a.updateQueue,e=l!==null?l.lastEffect:null;if(e!==null){var n=e.next;l=n;do{if((l.tag&t)===t){e=void 0;var i=l.create,u=l.inst;e=i(),u.destroy=e}l=l.next}while(l!==n)}}catch(c){P(a,a.return,c)}}function cl(t,a,l){try{var e=a.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var i=n.next;e=i;do{if((e.tag&t)===t){var u=e.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=a;var f=l,d=c;try{d()}catch(y){P(n,f,y)}}}e=e.next}while(e!==i)}}catch(y){P(a,a.return,y)}}function Ks(t){var a=t.updateQueue;if(a!==null){var l=t.stateNode;try{qo(a,l)}catch(e){P(t,t.return,e)}}}function Js(t,a,l){l.props=wl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(e){P(t,a,e)}}function nn(t,a){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof l=="function"?t.refCleanup=l(e):l.current=e}}catch(n){P(t,a,n)}}function za(t,a){var l=t.ref,e=t.refCleanup;if(l!==null)if(typeof e=="function")try{e()}catch(n){P(t,a,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){P(t,a,n)}else l.current=null}function ks(t){var a=t.type,l=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&e.focus();break t;case"img":l.src?e.src=l.src:l.srcSet&&(e.srcset=l.srcSet)}}catch(n){P(t,t.return,n)}}function Tc(t,a,l){try{var e=t.stateNode;zm(e,t.type,l,a),e[wt]=a}catch(n){P(t,t.return,n)}}function $s(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&hl(t.type)||t.tag===4}function Ec(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$s(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&hl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mc(t,a,l){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(t),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=Ua));else if(e!==4&&(e===27&&hl(t.type)&&(l=t.stateNode,a=null),t=t.child,t!==null))for(Mc(t,a,l),t=t.sibling;t!==null;)Mc(t,a,l),t=t.sibling}function yi(t,a,l){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?l.insertBefore(t,a):l.appendChild(t);else if(e!==4&&(e===27&&hl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(yi(t,a,l),t=t.sibling;t!==null;)yi(t,a,l),t=t.sibling}function Ws(t){var a=t.stateNode,l=t.memoizedProps;try{for(var e=t.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Ct(a,e,l),a[Dt]=t,a[wt]=l}catch(i){P(t,t.return,i)}}var Ra=!1,St=!1,Dc=!1,Fs=typeof WeakSet=="function"?WeakSet:Set,Tt=null;function am(t,a){if(t=t.containerInfo,kc=wi,t=fo(t),Su(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var e=l.getSelection&&l.getSelection();if(e&&e.rangeCount!==0){l=e.anchorNode;var n=e.anchorOffset,i=e.focusNode;e=e.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var u=0,c=-1,f=-1,d=0,y=0,b=t,m=null;a:for(;;){for(var h;b!==l||n!==0&&b.nodeType!==3||(c=u+n),b!==i||e!==0&&b.nodeType!==3||(f=u+e),b.nodeType===3&&(u+=b.nodeValue.length),(h=b.firstChild)!==null;)m=b,b=h;for(;;){if(b===t)break a;if(m===l&&++d===n&&(c=u),m===i&&++y===e&&(f=u),(h=b.nextSibling)!==null)break;b=m,m=b.parentNode}b=h}l=c===-1||f===-1?null:{start:c,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for($c={focusedElem:t,selectionRange:l},wi=!1,Tt=a;Tt!==null;)if(a=Tt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Tt=t;else for(;Tt!==null;){switch(a=Tt,i=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=a,n=i.memoizedProps,i=i.memoizedState,e=l.stateNode;try{var A=wl(l.type,n);t=e.getSnapshotBeforeUpdate(A,i),e.__reactInternalSnapshotBeforeUpdate=t}catch(U){P(l,l.return,U)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,l=t.nodeType,l===9)Ic(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ic(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(g(163))}if(t=a.sibling,t!==null){t.return=a.return,Tt=t;break}Tt=a.return}}function Is(t,a,l){var e=l.flags;switch(l.tag){case 0:case 11:case 15:Qa(t,l),e&4&&en(5,l);break;case 1:if(Qa(t,l),e&4)if(t=l.stateNode,a===null)try{t.componentDidMount()}catch(u){P(l,l.return,u)}else{var n=wl(l.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(n,a,t.__reactInternalSnapshotBeforeUpdate)}catch(u){P(l,l.return,u)}}e&64&&Ks(l),e&512&&nn(l,l.return);break;case 3:if(Qa(t,l),e&64&&(t=l.updateQueue,t!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{qo(t,a)}catch(u){P(l,l.return,u)}}break;case 27:a===null&&e&4&&Ws(l);case 26:case 5:Qa(t,l),a===null&&e&4&&ks(l),e&512&&nn(l,l.return);break;case 12:Qa(t,l);break;case 31:Qa(t,l),e&4&&ar(t,l);break;case 13:Qa(t,l),e&4&&lr(t,l),e&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=sm.bind(null,l),_m(t,l))));break;case 22:if(e=l.memoizedState!==null||Ra,!e){a=a!==null&&a.memoizedState!==null||St,n=Ra;var i=St;Ra=e,(St=a)&&!i?Xa(t,l,(l.subtreeFlags&8772)!==0):Qa(t,l),Ra=n,St=i}break;case 30:break;default:Qa(t,l)}}function Ps(t){var a=t.alternate;a!==null&&(t.alternate=null,Ps(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&eu(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rt=null,Rt=!1;function Ya(t,a,l){for(l=l.child;l!==null;)tr(t,a,l),l=l.sibling}function tr(t,a,l){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Oe,l)}catch{}switch(l.tag){case 26:St||za(l,a),Ya(t,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:St||za(l,a);var e=rt,n=Rt;hl(l.type)&&(rt=l.stateNode,Rt=!1),Ya(t,a,l),hn(l.stateNode),rt=e,Rt=n;break;case 5:St||za(l,a);case 6:if(e=rt,n=Rt,rt=null,Ya(t,a,l),rt=e,Rt=n,rt!==null)if(Rt)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(l.stateNode)}catch(i){P(l,a,i)}else try{rt.removeChild(l.stateNode)}catch(i){P(l,a,i)}break;case 18:rt!==null&&(Rt?(t=rt,Kr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Me(t)):Kr(rt,l.stateNode));break;case 4:e=rt,n=Rt,rt=l.stateNode.containerInfo,Rt=!0,Ya(t,a,l),rt=e,Rt=n;break;case 0:case 11:case 14:case 15:cl(2,l,a),St||cl(4,l,a),Ya(t,a,l);break;case 1:St||(za(l,a),e=l.stateNode,typeof e.componentWillUnmount=="function"&&Js(l,a,e)),Ya(t,a,l);break;case 21:Ya(t,a,l);break;case 22:St=(e=St)||l.memoizedState!==null,Ya(t,a,l),St=e;break;default:Ya(t,a,l)}}function ar(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Me(t)}catch(l){P(a,a.return,l)}}}function lr(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Me(t)}catch(l){P(a,a.return,l)}}function lm(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new Fs),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new Fs),a;default:throw Error(g(435,t.tag))}}function pi(t,a){var l=lm(t);a.forEach(function(e){if(!l.has(e)){l.add(e);var n=rm.bind(null,t,e);e.then(n,n)}})}function Yt(t,a){var l=a.deletions;if(l!==null)for(var e=0;e<l.length;e++){var n=l[e],i=t,u=a,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(hl(c.type)){rt=c.stateNode,Rt=!1;break t}break;case 5:rt=c.stateNode,Rt=!1;break t;case 3:case 4:rt=c.stateNode.containerInfo,Rt=!0;break t}c=c.return}if(rt===null)throw Error(g(160));tr(i,u,n),rt=null,Rt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)er(a,t),a=a.sibling}var ya=null;function er(t,a){var l=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yt(a,t),Qt(t),e&4&&(cl(3,t,t.return),en(3,t),cl(5,t,t.return));break;case 1:Yt(a,t),Qt(t),e&512&&(St||l===null||za(l,l.return)),e&64&&Ra&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?e:l.concat(e))));break;case 26:var n=ya;if(Yt(a,t),Qt(t),e&512&&(St||l===null||za(l,l.return)),e&4){var i=l!==null?l.memoizedState:null;if(e=t.memoizedState,l===null)if(e===null)if(t.stateNode===null){t:{e=t.type,l=t.memoizedProps,n=n.ownerDocument||n;a:switch(e){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ce]||i[Dt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(e),n.head.insertBefore(i,n.querySelector("head > title"))),Ct(i,e,l),i[Dt]=t,At(i),e=i;break t;case"link":var u=ed("link","href",n).get(e+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break a}}i=n.createElement(e),Ct(i,e,l),n.head.appendChild(i);break;case"meta":if(u=ed("meta","content",n).get(e+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break a}}i=n.createElement(e),Ct(i,e,l),n.head.appendChild(i);break;default:throw Error(g(468,e))}i[Dt]=t,At(i),e=i}t.stateNode=e}else nd(n,t.type,t.stateNode);else t.stateNode=ld(n,e,t.memoizedProps);else i!==e?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,e===null?nd(n,t.type,t.stateNode):ld(n,e,t.memoizedProps)):e===null&&t.stateNode!==null&&Tc(t,t.memoizedProps,l.memoizedProps)}break;case 27:Yt(a,t),Qt(t),e&512&&(St||l===null||za(l,l.return)),l!==null&&e&4&&Tc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Yt(a,t),Qt(t),e&512&&(St||l===null||za(l,l.return)),t.flags&32){n=t.stateNode;try{$l(n,"")}catch(A){P(t,t.return,A)}}e&4&&t.stateNode!=null&&(n=t.memoizedProps,Tc(t,n,l!==null?l.memoizedProps:n)),e&1024&&(Dc=!0);break;case 6:if(Yt(a,t),Qt(t),e&4){if(t.stateNode===null)throw Error(g(162));e=t.memoizedProps,l=t.stateNode;try{l.nodeValue=e}catch(A){P(t,t.return,A)}}break;case 3:if(ji=null,n=ya,ya=Ci(a.containerInfo),Yt(a,t),ya=n,Qt(t),e&4&&l!==null&&l.memoizedState.isDehydrated)try{Me(a.containerInfo)}catch(A){P(t,t.return,A)}Dc&&(Dc=!1,nr(t));break;case 4:e=ya,ya=Ci(t.stateNode.containerInfo),Yt(a,t),Qt(t),ya=e;break;case 12:Yt(a,t),Qt(t);break;case 31:Yt(a,t),Qt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,pi(t,e)));break;case 13:Yt(a,t),Qt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(bi=Vt()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,pi(t,e)));break;case 22:n=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,d=Ra,y=St;if(Ra=d||n,St=y||f,Yt(a,t),St=y,Ra=d,Qt(t),e&8192)t:for(a=t.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(l===null||f||Ra||St||Gl(t)),l=null,a=t;;){if(a.tag===5||a.tag===26){if(l===null){f=l=a;try{if(i=f.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var b=f.memoizedProps.style,m=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(A){P(f,f.return,A)}}}else if(a.tag===6){if(l===null){f=a;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(A){P(f,f.return,A)}}}else if(a.tag===18){if(l===null){f=a;try{var h=f.stateNode;n?Jr(h,!0):Jr(f.stateNode,!1)}catch(A){P(f,f.return,A)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(l=e.retryQueue,l!==null&&(e.retryQueue=null,pi(t,l))));break;case 19:Yt(a,t),Qt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,pi(t,e)));break;case 30:break;case 21:break;default:Yt(a,t),Qt(t)}}function Qt(t){var a=t.flags;if(a&2){try{for(var l,e=t.return;e!==null;){if($s(e)){l=e;break}e=e.return}if(l==null)throw Error(g(160));switch(l.tag){case 27:var n=l.stateNode,i=Ec(t);yi(t,i,n);break;case 5:var u=l.stateNode;l.flags&32&&($l(u,""),l.flags&=-33);var c=Ec(t);yi(t,c,u);break;case 3:case 4:var f=l.stateNode.containerInfo,d=Ec(t);Mc(t,d,f);break;default:throw Error(g(161))}}catch(y){P(t,t.return,y)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function nr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;nr(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Qa(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Is(t,a.alternate,a),a=a.sibling}function Gl(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:cl(4,a,a.return),Gl(a);break;case 1:za(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Js(a,a.return,l),Gl(a);break;case 27:hn(a.stateNode);case 26:case 5:za(a,a.return),Gl(a);break;case 22:a.memoizedState===null&&Gl(a);break;case 30:Gl(a);break;default:Gl(a)}t=t.sibling}}function Xa(t,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,n=t,i=a,u=i.flags;switch(i.tag){case 0:case 11:case 15:Xa(n,i,l),en(4,i);break;case 1:if(Xa(n,i,l),e=i,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){P(e,e.return,d)}if(e=i,n=e.updateQueue,n!==null){var c=e.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Bo(f[n],c)}catch(d){P(e,e.return,d)}}l&&u&64&&Ks(i),nn(i,i.return);break;case 27:Ws(i);case 26:case 5:Xa(n,i,l),l&&e===null&&u&4&&ks(i),nn(i,i.return);break;case 12:Xa(n,i,l);break;case 31:Xa(n,i,l),l&&u&4&&ar(n,i);break;case 13:Xa(n,i,l),l&&u&4&&lr(n,i);break;case 22:i.memoizedState===null&&Xa(n,i,l),nn(i,i.return);break;case 30:break;default:Xa(n,i,l)}a=a.sibling}}function Oc(t,a){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Le(l))}function Uc(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Le(t))}function pa(t,a,l,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ir(t,a,l,e),a=a.sibling}function ir(t,a,l,e){var n=a.flags;switch(a.tag){case 0:case 11:case 15:pa(t,a,l,e),n&2048&&en(9,a);break;case 1:pa(t,a,l,e);break;case 3:pa(t,a,l,e),n&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Le(t)));break;case 12:if(n&2048){pa(t,a,l,e),t=a.stateNode;try{var i=a.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){P(a,a.return,f)}}else pa(t,a,l,e);break;case 31:pa(t,a,l,e);break;case 13:pa(t,a,l,e);break;case 23:break;case 22:i=a.stateNode,u=a.alternate,a.memoizedState!==null?i._visibility&2?pa(t,a,l,e):un(t,a):i._visibility&2?pa(t,a,l,e):(i._visibility|=2,ge(t,a,l,e,(a.subtreeFlags&10256)!==0||!1)),n&2048&&Oc(u,a);break;case 24:pa(t,a,l,e),n&2048&&Uc(a.alternate,a);break;default:pa(t,a,l,e)}}function ge(t,a,l,e,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=t,u=a,c=l,f=e,d=u.flags;switch(u.tag){case 0:case 11:case 15:ge(i,u,c,f,n),en(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?ge(i,u,c,f,n):un(i,u):(y._visibility|=2,ge(i,u,c,f,n)),n&&d&2048&&Oc(u.alternate,u);break;case 24:ge(i,u,c,f,n),n&&d&2048&&Uc(u.alternate,u);break;default:ge(i,u,c,f,n)}a=a.sibling}}function un(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=t,e=a,n=e.flags;switch(e.tag){case 22:un(l,e),n&2048&&Oc(e.alternate,e);break;case 24:un(l,e),n&2048&&Uc(e.alternate,e);break;default:un(l,e)}a=a.sibling}}var cn=8192;function ye(t,a,l){if(t.subtreeFlags&cn)for(t=t.child;t!==null;)ur(t,a,l),t=t.sibling}function ur(t,a,l){switch(t.tag){case 26:ye(t,a,l),t.flags&cn&&t.memoizedState!==null&&Xm(l,ya,t.memoizedState,t.memoizedProps);break;case 5:ye(t,a,l);break;case 3:case 4:var e=ya;ya=Ci(t.stateNode.containerInfo),ye(t,a,l),ya=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=cn,cn=16777216,ye(t,a,l),cn=e):ye(t,a,l));break;default:ye(t,a,l)}}function cr(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function fn(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var e=a[l];Tt=e,or(e,t)}cr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fr(t),t=t.sibling}function fr(t){switch(t.tag){case 0:case 11:case 15:fn(t),t.flags&2048&&cl(9,t,t.return);break;case 3:fn(t);break;case 12:fn(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,vi(t)):fn(t);break;default:fn(t)}}function vi(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var e=a[l];Tt=e,or(e,t)}cr(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:cl(8,a,a.return),vi(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,vi(a));break;default:vi(a)}t=t.sibling}}function or(t,a){for(;Tt!==null;){var l=Tt;switch(l.tag){case 0:case 11:case 15:cl(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var e=l.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Le(l.memoizedState.cache)}if(e=l.child,e!==null)e.return=l,Tt=e;else t:for(l=t;Tt!==null;){e=Tt;var n=e.sibling,i=e.return;if(Ps(e),e===l){Tt=null;break t}if(n!==null){n.return=i,Tt=n;break t}Tt=i}}}var em={getCacheForType:function(t){var a=Ut(pt),l=a.data.get(t);return l===void 0&&(l=t(),a.data.set(t,l)),l},cacheSignal:function(){return Ut(pt).controller.signal}},nm=typeof WeakMap=="function"?WeakMap:Map,$=0,et=null,R=null,Q=0,I=0,It=null,fl=!1,pe=!1,_c=!1,Za=0,ht=0,ol=0,Rl=0,Cc=0,Pt=0,ve=0,on=null,Xt=null,Hc=!1,bi=0,sr=0,Si=1/0,xi=null,sl=null,xt=0,rl=null,be=null,La=0,jc=0,Nc=null,rr=null,sn=0,Bc=null;function ta(){return($&2)!==0&&Q!==0?Q&-Q:v.T!==null?Qc():Mf()}function dr(){if(Pt===0)if((Q&536870912)===0||Z){var t=Un;Un<<=1,(Un&3932160)===0&&(Un=262144),Pt=t}else Pt=536870912;return t=Wt.current,t!==null&&(t.flags|=32),Pt}function Zt(t,a,l){(t===et&&(I===2||I===9)||t.cancelPendingCommit!==null)&&(Se(t,0),dl(t,Q,Pt,!1)),_e(t,l),(($&2)===0||t!==et)&&(t===et&&(($&2)===0&&(Rl|=l),ht===4&&dl(t,Q,Pt,!1)),Aa(t))}function mr(t,a,l){if(($&6)!==0)throw Error(g(327));var e=!l&&(a&127)===0&&(a&t.expiredLanes)===0||Ue(t,a),n=e?cm(t,a):wc(t,a,!0),i=e;do{if(n===0){pe&&!e&&dl(t,a,0,!1);break}else{if(l=t.current.alternate,i&&!im(l)){n=wc(t,a,!1),i=!1;continue}if(n===2){if(i=a,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;t:{var c=t;n=on;var f=c.current.memoizedState.isDehydrated;if(f&&(Se(c,u).flags|=256),u=wc(c,u,!1),u!==2){if(_c&&!f){c.errorRecoveryDisabledLanes|=i,Rl|=i,n=4;break t}i=Xt,Xt=n,i!==null&&(Xt===null?Xt=i:Xt.push.apply(Xt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Se(t,0),dl(t,a,0,!0);break}t:{switch(e=t,i=n,i){case 0:case 1:throw Error(g(345));case 4:if((a&4194048)!==a)break;case 6:dl(e,a,Pt,!fl);break t;case 2:Xt=null;break;case 3:case 5:break;default:throw Error(g(329))}if((a&62914560)===a&&(n=bi+300-Vt(),10<n)){if(dl(e,a,Pt,!fl),Cn(e,0,!0)!==0)break t;La=a,e.timeoutHandle=Lr(hr.bind(null,e,l,Xt,xi,Hc,a,Pt,Rl,ve,fl,i,"Throttled",-0,0),n);break t}hr(e,l,Xt,xi,Hc,a,Pt,Rl,ve,fl,i,null,-0,0)}}break}while(!0);Aa(t)}function hr(t,a,l,e,n,i,u,c,f,d,y,b,m,h){if(t.timeoutHandle=-1,b=a.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ua},ur(a,i,b);var A=(i&62914560)===i?bi-Vt():(i&4194048)===i?sr-Vt():0;if(A=Zm(b,A),A!==null){La=i,t.cancelPendingCommit=A(zr.bind(null,t,a,i,l,e,n,u,c,f,y,b,null,m,h)),dl(t,i,u,!d);return}}zr(t,a,i,l,e,n,u,c,f)}function im(t){for(var a=t;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var e=0;e<l.length;e++){var n=l[e],i=n.getSnapshot;n=n.value;try{if(!kt(i(),n))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function dl(t,a,l,e){a&=~Cc,a&=~Rl,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var n=a;0<n;){var i=31-Jt(n),u=1<<i;e[i]=-1,n&=~u}l!==0&&Af(t,l,a)}function zi(){return($&6)===0?(rn(0),!1):!0}function qc(){if(R!==null){if(I===0)var t=R.return;else t=R,ja=_l=null,Iu(t),se=null,Ke=0,t=R;for(;t!==null;)Vs(t.alternate,t),t=t.return;R=null}}function Se(t,a){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Em(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),La=0,qc(),et=t,R=l=Ca(t.current,null),Q=a,I=0,It=null,fl=!1,pe=Ue(t,a),_c=!1,ve=Pt=Cc=Rl=ol=ht=0,Xt=on=null,Hc=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var n=31-Jt(e),i=1<<n;a|=t[n],e&=~i}return Za=a,Zn(),l}function gr(t,a){H=null,v.H=tn,a===oe||a===Fn?(a=Co(),I=3):a===Yu?(a=Co(),I=4):I=a===hc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,It=a,R===null&&(ht=1,ri(t,ua(a,t.current)))}function yr(){var t=Wt.current;return t===null?!0:(Q&4194048)===Q?sa===null:(Q&62914560)===Q||(Q&536870912)!==0?t===sa:!1}function pr(){var t=v.H;return v.H=tn,t===null?tn:t}function vr(){var t=v.A;return v.A=em,t}function Ai(){ht=4,fl||(Q&4194048)!==Q&&Wt.current!==null||(pe=!0),(ol&134217727)===0&&(Rl&134217727)===0||et===null||dl(et,Q,Pt,!1)}function wc(t,a,l){var e=$;$|=2;var n=pr(),i=vr();(et!==t||Q!==a)&&(xi=null,Se(t,a)),a=!1;var u=ht;t:do try{if(I!==0&&R!==null){var c=R,f=It;switch(I){case 8:qc(),u=6;break t;case 3:case 2:case 9:case 6:Wt.current===null&&(a=!0);var d=I;if(I=0,It=null,xe(t,c,f,d),l&&pe){u=0;break t}break;default:d=I,I=0,It=null,xe(t,c,f,d)}}um(),u=ht;break}catch(y){gr(t,y)}while(!0);return a&&t.shellSuspendCounter++,ja=_l=null,$=e,v.H=n,v.A=i,R===null&&(et=null,Q=0,Zn()),u}function um(){for(;R!==null;)br(R)}function cm(t,a){var l=$;$|=2;var e=pr(),n=vr();et!==t||Q!==a?(xi=null,Si=Vt()+500,Se(t,a)):pe=Ue(t,a);t:do try{if(I!==0&&R!==null){a=R;var i=It;a:switch(I){case 1:I=0,It=null,xe(t,a,i,1);break;case 2:case 9:if(Uo(i)){I=0,It=null,Sr(a);break}a=function(){I!==2&&I!==9||et!==t||(I=7),Aa(t)},i.then(a,a);break t;case 3:I=7;break t;case 4:I=5;break t;case 7:Uo(i)?(I=0,It=null,Sr(a)):(I=0,It=null,xe(t,a,i,7));break;case 5:var u=null;switch(R.tag){case 26:u=R.memoizedState;case 5:case 27:var c=R;if(u?id(u):c.stateNode.complete){I=0,It=null;var f=c.sibling;if(f!==null)R=f;else{var d=c.return;d!==null?(R=d,Ti(d)):R=null}break a}}I=0,It=null,xe(t,a,i,5);break;case 6:I=0,It=null,xe(t,a,i,6);break;case 8:qc(),ht=6;break t;default:throw Error(g(462))}}fm();break}catch(y){gr(t,y)}while(!0);return ja=_l=null,v.H=e,v.A=n,$=l,R!==null?0:(et=null,Q=0,Zn(),ht)}function fm(){for(;R!==null&&!Cd();)br(R)}function br(t){var a=Zs(t.alternate,t,Za);t.memoizedProps=t.pendingProps,a===null?Ti(t):R=a}function Sr(t){var a=t,l=a.alternate;switch(a.tag){case 15:case 0:a=ws(l,a,a.pendingProps,a.type,void 0,Q);break;case 11:a=ws(l,a,a.pendingProps,a.type.render,a.ref,Q);break;case 5:Iu(a);default:Vs(l,a),a=R=vo(a,Za),a=Zs(l,a,Za)}t.memoizedProps=t.pendingProps,a===null?Ti(t):R=a}function xe(t,a,l,e){ja=_l=null,Iu(a),se=null,Ke=0;var n=a.return;try{if(W0(t,n,a,l,Q)){ht=1,ri(t,ua(l,t.current)),R=null;return}}catch(i){if(n!==null)throw R=n,i;ht=1,ri(t,ua(l,t.current)),R=null;return}a.flags&32768?(Z||e===1?t=!0:pe||(Q&536870912)!==0?t=!1:(fl=t=!0,(e===2||e===9||e===3||e===6)&&(e=Wt.current,e!==null&&e.tag===13&&(e.flags|=16384))),xr(a,t)):Ti(a)}function Ti(t){var a=t;do{if((a.flags&32768)!==0){xr(a,fl);return}t=a.return;var l=P0(a.alternate,a,Za);if(l!==null){R=l;return}if(a=a.sibling,a!==null){R=a;return}R=a=t}while(a!==null);ht===0&&(ht=5)}function xr(t,a){do{var l=tm(t.alternate,t);if(l!==null){l.flags&=32767,R=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(t=t.sibling,t!==null)){R=t;return}R=t=l}while(t!==null);ht=6,R=null}function zr(t,a,l,e,n,i,u,c,f){t.cancelPendingCommit=null;do Ei();while(xt!==0);if(($&6)!==0)throw Error(g(327));if(a!==null){if(a===t.current)throw Error(g(177));if(i=a.lanes|a.childLanes,i|=Eu,Qd(t,l,i,u,c,f),t===et&&(R=et=null,Q=0),be=a,rl=t,La=l,jc=i,Nc=n,rr=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,dm(Dn,function(){return Dr(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=v.T,v.T=null,n=z.p,z.p=2,u=$,$|=4;try{am(t,a,l)}finally{$=u,z.p=n,v.T=e}}xt=1,Ar(),Tr(),Er()}}function Ar(){if(xt===1){xt=0;var t=rl,a=be,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=v.T,v.T=null;var e=z.p;z.p=2;var n=$;$|=4;try{er(a,t);var i=$c,u=fo(t.containerInfo),c=i.focusedElem,f=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&co(c.ownerDocument.documentElement,c)){if(f!==null&&Su(c)){var d=f.start,y=f.end;if(y===void 0&&(y=d),"selectionStart"in c)c.selectionStart=d,c.selectionEnd=Math.min(y,c.value.length);else{var b=c.ownerDocument||document,m=b&&b.defaultView||window;if(m.getSelection){var h=m.getSelection(),A=c.textContent.length,U=Math.min(f.start,A),lt=f.end===void 0?U:Math.min(f.end,A);!h.extend&&U>lt&&(u=lt,lt=U,U=u);var s=uo(c,U),o=uo(c,lt);if(s&&o&&(h.rangeCount!==1||h.anchorNode!==s.node||h.anchorOffset!==s.offset||h.focusNode!==o.node||h.focusOffset!==o.offset)){var r=b.createRange();r.setStart(s.node,s.offset),h.removeAllRanges(),U>lt?(h.addRange(r),h.extend(o.node,o.offset)):(r.setEnd(o.node,o.offset),h.addRange(r))}}}}for(b=[],h=c;h=h.parentNode;)h.nodeType===1&&b.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var p=b[c];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}wi=!!kc,$c=kc=null}finally{$=n,z.p=e,v.T=l}}t.current=a,xt=2}}function Tr(){if(xt===2){xt=0;var t=rl,a=be,l=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||l){l=v.T,v.T=null;var e=z.p;z.p=2;var n=$;$|=4;try{Is(t,a.alternate,a)}finally{$=n,z.p=e,v.T=l}}xt=3}}function Er(){if(xt===4||xt===3){xt=0,Hd();var t=rl,a=be,l=La,e=rr;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?xt=5:(xt=0,be=rl=null,Mr(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(sl=null),au(l),a=a.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Oe,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=v.T,n=z.p,z.p=2,v.T=null;try{for(var i=t.onRecoverableError,u=0;u<e.length;u++){var c=e[u];i(c.value,{componentStack:c.stack})}}finally{v.T=a,z.p=n}}(La&3)!==0&&Ei(),Aa(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===Bc?sn++:(sn=0,Bc=t):sn=0,rn(0)}}function Mr(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Le(a)))}function Ei(){return Ar(),Tr(),Er(),Dr()}function Dr(){if(xt!==5)return!1;var t=rl,a=jc;jc=0;var l=au(La),e=v.T,n=z.p;try{z.p=32>l?32:l,v.T=null,l=Nc,Nc=null;var i=rl,u=La;if(xt=0,be=rl=null,La=0,($&6)!==0)throw Error(g(331));var c=$;if($|=4,fr(i.current),ir(i,i.current,u,l),$=c,rn(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Oe,i)}catch{}return!0}finally{z.p=n,v.T=e,Mr(t,a)}}function Or(t,a,l){a=ua(l,a),a=mc(t.stateNode,a,2),t=nl(t,a,2),t!==null&&(_e(t,2),Aa(t))}function P(t,a,l){if(t.tag===3)Or(t,t,l);else for(;a!==null;){if(a.tag===3){Or(a,t,l);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(sl===null||!sl.has(e))){t=ua(l,t),l=Us(2),e=nl(a,l,2),e!==null&&(_s(l,e,a,t),_e(e,2),Aa(e));break}}a=a.return}}function Gc(t,a,l){var e=t.pingCache;if(e===null){e=t.pingCache=new nm;var n=new Set;e.set(a,n)}else n=e.get(a),n===void 0&&(n=new Set,e.set(a,n));n.has(l)||(_c=!0,n.add(l),t=om.bind(null,t,a,l),a.then(t,t))}function om(t,a,l){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,et===t&&(Q&l)===l&&(ht===4||ht===3&&(Q&62914560)===Q&&300>Vt()-bi?($&2)===0&&Se(t,0):Cc|=l,ve===Q&&(ve=0)),Aa(t)}function Ur(t,a){a===0&&(a=zf()),t=Dl(t,a),t!==null&&(_e(t,a),Aa(t))}function sm(t){var a=t.memoizedState,l=0;a!==null&&(l=a.retryLane),Ur(t,l)}function rm(t,a){var l=0;switch(t.tag){case 31:case 13:var e=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(g(314))}e!==null&&e.delete(a),Ur(t,l)}function dm(t,a){return Fi(t,a)}var Mi=null,ze=null,Rc=!1,Di=!1,Yc=!1,ml=0;function Aa(t){t!==ze&&t.next===null&&(ze===null?Mi=ze=t:ze=ze.next=t),Di=!0,Rc||(Rc=!0,hm())}function rn(t,a){if(!Yc&&Di){Yc=!0;do for(var l=!1,e=Mi;e!==null;){if(t!==0){var n=e.pendingLanes;if(n===0)var i=0;else{var u=e.suspendedLanes,c=e.pingedLanes;i=(1<<31-Jt(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,jr(e,i))}else i=Q,i=Cn(e,e===et?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(i&3)===0||Ue(e,i)||(l=!0,jr(e,i));e=e.next}while(l);Yc=!1}}function mm(){_r()}function _r(){Di=Rc=!1;var t=0;ml!==0&&Tm()&&(t=ml);for(var a=Vt(),l=null,e=Mi;e!==null;){var n=e.next,i=Cr(e,a);i===0?(e.next=null,l===null?Mi=n:l.next=n,n===null&&(ze=l)):(l=e,(t!==0||(i&3)!==0)&&(Di=!0)),e=n}xt!==0&&xt!==5||rn(t),ml!==0&&(ml=0)}function Cr(t,a){for(var l=t.suspendedLanes,e=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Jt(i),c=1<<u,f=n[u];f===-1?((c&l)===0||(c&e)!==0)&&(n[u]=Yd(c,a)):f<=a&&(t.expiredLanes|=c),i&=~c}if(a=et,l=Q,l=Cn(t,t===a?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,l===0||t===a&&(I===2||I===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&Ii(e),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Ue(t,l)){if(a=l&-l,a===t.callbackPriority)return a;switch(e!==null&&Ii(e),au(l)){case 2:case 8:l=Sf;break;case 32:l=Dn;break;case 268435456:l=xf;break;default:l=Dn}return e=Hr.bind(null,t),l=Fi(l,e),t.callbackPriority=a,t.callbackNode=l,a}return e!==null&&e!==null&&Ii(e),t.callbackPriority=2,t.callbackNode=null,2}function Hr(t,a){if(xt!==0&&xt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Ei()&&t.callbackNode!==l)return null;var e=Q;return e=Cn(t,t===et?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(mr(t,e,a),Cr(t,Vt()),t.callbackNode!=null&&t.callbackNode===l?Hr.bind(null,t):null)}function jr(t,a){if(Ei())return null;mr(t,a,!0)}function hm(){Mm(function(){($&6)!==0?Fi(bf,mm):_r()})}function Qc(){if(ml===0){var t=ce;t===0&&(t=On,On<<=1,(On&261888)===0&&(On=256)),ml=t}return ml}function Nr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bn(""+t)}function Br(t,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,t.id&&l.setAttribute("form",t.id),a.parentNode.insertBefore(l,a),t=new FormData(t),l.parentNode.removeChild(l),t}function gm(t,a,l,e,n){if(a==="submit"&&l&&l.stateNode===n){var i=Nr((n[wt]||null).action),u=e.submitter;u&&(a=(a=u[wt]||null)?Nr(a.formAction):u.getAttribute("formAction"),a!==null&&(i=a,u=null));var c=new Rn("action","action",null,e,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(ml!==0){var f=u?Br(n,u):new FormData(n);cc(l,{pending:!0,data:f,method:n.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=u?Br(n,u):new FormData(n),cc(l,{pending:!0,data:f,method:n.method,action:i},i,f))},currentTarget:n}]})}}for(var Xc=0;Xc<Tu.length;Xc++){var Zc=Tu[Xc],ym=Zc.toLowerCase(),pm=Zc[0].toUpperCase()+Zc.slice(1);ga(ym,"on"+pm)}ga(ro,"onAnimationEnd"),ga(mo,"onAnimationIteration"),ga(ho,"onAnimationStart"),ga("dblclick","onDoubleClick"),ga("focusin","onFocus"),ga("focusout","onBlur"),ga(j0,"onTransitionRun"),ga(N0,"onTransitionStart"),ga(B0,"onTransitionCancel"),ga(go,"onTransitionEnd"),Jl("onMouseEnter",["mouseout","mouseover"]),Jl("onMouseLeave",["mouseout","mouseover"]),Jl("onPointerEnter",["pointerout","pointerover"]),Jl("onPointerLeave",["pointerout","pointerover"]),Al("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Al("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Al("onBeforeInput",["compositionend","keypress","textInput","paste"]),Al("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));function qr(t,a){a=(a&4)!==0;for(var l=0;l<t.length;l++){var e=t[l],n=e.event;e=e.listeners;t:{var i=void 0;if(a)for(var u=e.length-1;0<=u;u--){var c=e[u],f=c.instance,d=c.currentTarget;if(c=c.listener,f!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=d;try{i(n)}catch(y){Xn(y)}n.currentTarget=null,i=f}else for(u=0;u<e.length;u++){if(c=e[u],f=c.instance,d=c.currentTarget,c=c.listener,f!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=d;try{i(n)}catch(y){Xn(y)}n.currentTarget=null,i=f}}}}function Y(t,a){var l=a[lu];l===void 0&&(l=a[lu]=new Set);var e=t+"__bubble";l.has(e)||(wr(a,t,2,!1),l.add(e))}function Lc(t,a,l){var e=0;a&&(e|=4),wr(l,t,e,a)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function Vc(t){if(!t[Oi]){t[Oi]=!0,Uf.forEach(function(l){l!=="selectionchange"&&(vm.has(l)||Lc(l,!1,t),Lc(l,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Oi]||(a[Oi]=!0,Lc("selectionchange",!1,a))}}function wr(t,a,l,e){switch(dd(a)){case 2:var n=Km;break;case 8:n=Jm;break;default:n=cf}l=n.bind(null,a,l,t),n=void 0,!ru||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),e?n!==void 0?t.addEventListener(a,l,{capture:!0,passive:n}):t.addEventListener(a,l,!0):n!==void 0?t.addEventListener(a,l,{passive:n}):t.addEventListener(a,l,!1)}function Kc(t,a,l,e,n){var i=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var u=e.tag;if(u===3||u===4){var c=e.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=e.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Ll(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){e=i=u;continue t}c=c.parentNode}}e=e.return}Qf(function(){var d=i,y=ou(l),b=[];t:{var m=yo.get(t);if(m!==void 0){var h=Rn,A=t;switch(t){case"keypress":if(wn(l)===0)break t;case"keydown":case"keyup":h=r0;break;case"focusin":A="focus",h=gu;break;case"focusout":A="blur",h=gu;break;case"beforeblur":case"afterblur":h=gu;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=h0;break;case ro:case mo:case ho:h=l0;break;case go:h=y0;break;case"scroll":case"scrollend":h=Fd;break;case"wheel":h=v0;break;case"copy":case"cut":case"paste":h=n0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Kf;break;case"toggle":case"beforetoggle":h=S0}var U=(a&4)!==0,lt=!U&&(t==="scroll"||t==="scrollend"),s=U?m!==null?m+"Capture":null:m;U=[];for(var o=d,r;o!==null;){var p=o;if(r=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||r===null||s===null||(p=je(o,s),p!=null&&U.push(mn(o,p,r))),lt)break;o=o.return}0<U.length&&(m=new h(m,A,null,l,y),b.push({event:m,listeners:U}))}}if((a&7)===0){t:{if(m=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",m&&l!==fu&&(A=l.relatedTarget||l.fromElement)&&(Ll(A)||A[Zl]))break t;if((h||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,h?(A=l.relatedTarget||l.toElement,h=d,A=A?Ll(A):null,A!==null&&(lt=w(A),U=A.tag,A!==lt||U!==5&&U!==27&&U!==6)&&(A=null)):(h=null,A=d),h!==A)){if(U=Lf,p="onMouseLeave",s="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(U=Kf,p="onPointerLeave",s="onPointerEnter",o="pointer"),lt=h==null?m:He(h),r=A==null?m:He(A),m=new U(p,o+"leave",h,l,y),m.target=lt,m.relatedTarget=r,p=null,Ll(y)===d&&(U=new U(s,o+"enter",A,l,y),U.target=r,U.relatedTarget=lt,p=U),lt=p,h&&A)a:{for(U=bm,s=h,o=A,r=0,p=s;p;p=U(p))r++;p=0;for(var M=o;M;M=U(M))p++;for(;0<r-p;)s=U(s),r--;for(;0<p-r;)o=U(o),p--;for(;r--;){if(s===o||o!==null&&s===o.alternate){U=s;break a}s=U(s),o=U(o)}U=null}else U=null;h!==null&&Gr(b,m,h,U,!1),A!==null&&lt!==null&&Gr(b,lt,A,U,!0)}}t:{if(m=d?He(d):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var K=to;else if(If(m))if(ao)K=_0;else{K=O0;var E=D0}else h=m.nodeName,!h||h.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&cu(d.elementType)&&(K=to):K=U0;if(K&&(K=K(t,d))){Pf(b,K,l,y);break t}E&&E(t,m,d),t==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&uu(m,"number",m.value)}switch(E=d?He(d):window,t){case"focusin":(If(E)||E.contentEditable==="true")&&(Pl=E,xu=d,Qe=null);break;case"focusout":Qe=xu=Pl=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,oo(b,l,y);break;case"selectionchange":if(H0)break;case"keydown":case"keyup":oo(b,l,y)}var N;if(pu)t:{switch(t){case"compositionstart":var X="onCompositionStart";break t;case"compositionend":X="onCompositionEnd";break t;case"compositionupdate":X="onCompositionUpdate";break t}X=void 0}else Il?Wf(t,l)&&(X="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(X="onCompositionStart");X&&(Jf&&l.locale!=="ko"&&(Il||X!=="onCompositionStart"?X==="onCompositionEnd"&&Il&&(N=Xf()):(Fa=y,du="value"in Fa?Fa.value:Fa.textContent,Il=!0)),E=Ui(d,X),0<E.length&&(X=new Vf(X,t,null,l,y),b.push({event:X,listeners:E}),N?X.data=N:(N=Ff(l),N!==null&&(X.data=N)))),(N=z0?A0(t,l):T0(t,l))&&(X=Ui(d,"onBeforeInput"),0<X.length&&(E=new Vf("onBeforeInput","beforeinput",null,l,y),b.push({event:E,listeners:X}),E.data=N)),gm(b,t,d,l,y)}qr(b,a)})}function mn(t,a,l){return{instance:t,listener:a,currentTarget:l}}function Ui(t,a){for(var l=a+"Capture",e=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=je(t,l),n!=null&&e.unshift(mn(t,n,i)),n=je(t,a),n!=null&&e.push(mn(t,n,i))),t.tag===3)return e;t=t.return}return[]}function bm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Gr(t,a,l,e,n){for(var i=a._reactName,u=[];l!==null&&l!==e;){var c=l,f=c.alternate,d=c.stateNode;if(c=c.tag,f!==null&&f===e)break;c!==5&&c!==26&&c!==27||d===null||(f=d,n?(d=je(l,i),d!=null&&u.unshift(mn(l,d,f))):n||(d=je(l,i),d!=null&&u.push(mn(l,d,f)))),l=l.return}u.length!==0&&t.push({event:a,listeners:u})}var Sm=/\r\n?/g,xm=/\u0000|\uFFFD/g;function Rr(t){return(typeof t=="string"?t:""+t).replace(Sm,`
`).replace(xm,"")}function Yr(t,a){return a=Rr(a),Rr(t)===a}function at(t,a,l,e,n,i){switch(l){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||$l(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&$l(t,""+e);break;case"className":jn(t,"class",e);break;case"tabIndex":jn(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":jn(t,l,e);break;case"style":Rf(t,e,i);break;case"data":if(a!=="object"){jn(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||l!=="href")){t.removeAttribute(l);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(l);break}e=Bn(""+e),t.setAttribute(l,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(a!=="input"&&at(t,a,"name",n.name,n,null),at(t,a,"formEncType",n.formEncType,n,null),at(t,a,"formMethod",n.formMethod,n,null),at(t,a,"formTarget",n.formTarget,n,null)):(at(t,a,"encType",n.encType,n,null),at(t,a,"method",n.method,n,null),at(t,a,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(l);break}e=Bn(""+e),t.setAttribute(l,e);break;case"onClick":e!=null&&(t.onclick=Ua);break;case"onScroll":e!=null&&Y("scroll",t);break;case"onScrollEnd":e!=null&&Y("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(g(61));if(l=e.__html,l!=null){if(n.children!=null)throw Error(g(60));t.innerHTML=l}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}l=Bn(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,""+e):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":e===!0?t.setAttribute(l,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,e):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(l,e):t.removeAttribute(l);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(l):t.setAttribute(l,e);break;case"popover":Y("beforetoggle",t),Y("toggle",t),Hn(t,"popover",e);break;case"xlinkActuate":Oa(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Oa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Oa(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Oa(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Oa(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Oa(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Oa(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Oa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Oa(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Hn(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=$d.get(l)||l,Hn(t,l,e))}}function Jc(t,a,l,e,n,i){switch(l){case"style":Rf(t,e,i);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(g(61));if(l=e.__html,l!=null){if(n.children!=null)throw Error(g(60));t.innerHTML=l}}break;case"children":typeof e=="string"?$l(t,e):(typeof e=="number"||typeof e=="bigint")&&$l(t,""+e);break;case"onScroll":e!=null&&Y("scroll",t);break;case"onScrollEnd":e!=null&&Y("scrollend",t);break;case"onClick":e!=null&&(t.onclick=Ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_f.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),a=l.slice(2,n?l.length-7:void 0),i=t[wt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(a,i,n),typeof e=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(a,e,n);break t}l in t?t[l]=e:e===!0?t.setAttribute(l,""):Hn(t,l,e)}}}function Ct(t,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",t),Y("load",t);var e=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,a));default:at(t,a,i,u,l,null)}}n&&at(t,a,"srcSet",l.srcSet,l,null),e&&at(t,a,"src",l.src,l,null);return;case"input":Y("invalid",t);var c=i=u=n=null,f=null,d=null;for(e in l)if(l.hasOwnProperty(e)){var y=l[e];if(y!=null)switch(e){case"name":n=y;break;case"type":u=y;break;case"checked":f=y;break;case"defaultChecked":d=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,a));break;default:at(t,a,e,y,l,null)}}Bf(t,i,c,f,d,u,n,!1);return;case"select":Y("invalid",t),e=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":e=c;default:at(t,a,n,c,l,null)}a=i,l=u,t.multiple=!!e,a!=null?kl(t,!!e,a,!1):l!=null&&kl(t,!!e,l,!0);return;case"textarea":Y("invalid",t),i=n=e=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":e=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(g(91));break;default:at(t,a,u,c,l,null)}wf(t,e,n,i);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(e=l[f],e!=null))switch(f){case"selected":t.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:at(t,a,f,e,l,null)}return;case"dialog":Y("beforetoggle",t),Y("toggle",t),Y("cancel",t),Y("close",t);break;case"iframe":case"object":Y("load",t);break;case"video":case"audio":for(e=0;e<dn.length;e++)Y(dn[e],t);break;case"image":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"embed":case"source":case"link":Y("error",t),Y("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in l)if(l.hasOwnProperty(d)&&(e=l[d],e!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,a));default:at(t,a,d,e,l,null)}return;default:if(cu(a)){for(y in l)l.hasOwnProperty(y)&&(e=l[y],e!==void 0&&Jc(t,a,y,e,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(e=l[c],e!=null&&at(t,a,c,e,l,null))}function zm(t,a,l,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,f=null,d=null,y=null;for(h in l){var b=l[h];if(l.hasOwnProperty(h)&&b!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":f=b;default:e.hasOwnProperty(h)||at(t,a,h,null,e,b)}}for(var m in e){var h=e[m];if(b=l[m],e.hasOwnProperty(m)&&(h!=null||b!=null))switch(m){case"type":i=h;break;case"name":n=h;break;case"checked":d=h;break;case"defaultChecked":y=h;break;case"value":u=h;break;case"defaultValue":c=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(g(137,a));break;default:h!==b&&at(t,a,m,h,e,b)}}iu(t,u,c,f,d,y,i,n);return;case"select":h=u=c=m=null;for(i in l)if(f=l[i],l.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":h=f;default:e.hasOwnProperty(i)||at(t,a,i,null,e,f)}for(n in e)if(i=e[n],f=l[n],e.hasOwnProperty(n)&&(i!=null||f!=null))switch(n){case"value":m=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==f&&at(t,a,n,i,e,f)}a=c,l=u,e=h,m!=null?kl(t,!!l,m,!1):!!e!=!!l&&(a!=null?kl(t,!!l,a,!0):kl(t,!!l,l?[]:"",!1));return;case"textarea":h=m=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!e.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:at(t,a,c,null,e,n)}for(u in e)if(n=e[u],i=l[u],e.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":m=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==i&&at(t,a,u,n,e,i)}qf(t,m,h);return;case"option":for(var A in l)if(m=l[A],l.hasOwnProperty(A)&&m!=null&&!e.hasOwnProperty(A))switch(A){case"selected":t.selected=!1;break;default:at(t,a,A,null,e,m)}for(f in e)if(m=e[f],h=l[f],e.hasOwnProperty(f)&&m!==h&&(m!=null||h!=null))switch(f){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:at(t,a,f,m,e,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in l)m=l[U],l.hasOwnProperty(U)&&m!=null&&!e.hasOwnProperty(U)&&at(t,a,U,null,e,m);for(d in e)if(m=e[d],h=l[d],e.hasOwnProperty(d)&&m!==h&&(m!=null||h!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(g(137,a));break;default:at(t,a,d,m,e,h)}return;default:if(cu(a)){for(var lt in l)m=l[lt],l.hasOwnProperty(lt)&&m!==void 0&&!e.hasOwnProperty(lt)&&Jc(t,a,lt,void 0,e,m);for(y in e)m=e[y],h=l[y],!e.hasOwnProperty(y)||m===h||m===void 0&&h===void 0||Jc(t,a,y,m,e,h);return}}for(var s in l)m=l[s],l.hasOwnProperty(s)&&m!=null&&!e.hasOwnProperty(s)&&at(t,a,s,null,e,m);for(b in e)m=e[b],h=l[b],!e.hasOwnProperty(b)||m===h||m==null&&h==null||at(t,a,b,m,e,h)}function Qr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Am(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,l=performance.getEntriesByType("resource"),e=0;e<l.length;e++){var n=l[e],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Qr(u)){for(u=0,c=n.responseEnd,e+=1;e<l.length;e++){var f=l[e],d=f.startTime;if(d>c)break;var y=f.transferSize,b=f.initiatorType;y&&Qr(b)&&(f=f.responseEnd,u+=y*(f<c?1:(c-d)/(f-d)))}if(--e,a+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kc=null,$c=null;function _i(t){return t.nodeType===9?t:t.ownerDocument}function Xr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zr(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Wc(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Fc=null;function Tm(){var t=window.event;return t&&t.type==="popstate"?t===Fc?!1:(Fc=t,!0):(Fc=null,!1)}var Lr=typeof setTimeout=="function"?setTimeout:void 0,Em=typeof clearTimeout=="function"?clearTimeout:void 0,Vr=typeof Promise=="function"?Promise:void 0,Mm=typeof queueMicrotask=="function"?queueMicrotask:typeof Vr<"u"?function(t){return Vr.resolve(null).then(t).catch(Dm)}:Lr;function Dm(t){setTimeout(function(){throw t})}function hl(t){return t==="head"}function Kr(t,a){var l=a,e=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(e===0){t.removeChild(n),Me(a);return}e--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")e++;else if(l==="html")hn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,hn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Ce]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&hn(t.ownerDocument.body);l=n}while(l);Me(a)}function Jr(t,a){var l=t;t=0;do{var e=l.nextSibling;if(l.nodeType===1?a?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(a?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),e&&e.nodeType===8)if(l=e.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=e}while(l)}function Ic(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Ic(l),eu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Om(t,a,l,e){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[Ce])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=ra(t.nextSibling),t===null)break}return null}function Um(t,a,l){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=ra(t.nextSibling),t===null))return null;return t}function kr(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ra(t.nextSibling),t===null))return null;return t}function Pc(t){return t.data==="$?"||t.data==="$~"}function tf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _m(t,a){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||l.readyState!=="loading")a();else{var e=function(){a(),l.removeEventListener("DOMContentLoaded",e)};l.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function ra(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var af=null;function $r(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(a===0)return ra(t.nextSibling);a--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||a++}t=t.nextSibling}return null}function Wr(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(a===0)return t;a--}else l!=="/$"&&l!=="/&"||a++}t=t.previousSibling}return null}function Fr(t,a,l){switch(a=_i(l),t){case"html":if(t=a.documentElement,!t)throw Error(g(452));return t;case"head":if(t=a.head,!t)throw Error(g(453));return t;case"body":if(t=a.body,!t)throw Error(g(454));return t;default:throw Error(g(451))}}function hn(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);eu(t)}var da=new Map,Ir=new Set;function Ci(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Va=z.d;z.d={f:Cm,r:Hm,D:jm,C:Nm,L:Bm,m:qm,X:Gm,S:wm,M:Rm};function Cm(){var t=Va.f(),a=zi();return t||a}function Hm(t){var a=Vl(t);a!==null&&a.tag===5&&a.type==="form"?gs(a):Va.r(t)}var Ae=typeof document>"u"?null:document;function Pr(t,a,l){var e=Ae;if(e&&typeof a=="string"&&a){var n=na(a);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Ir.has(n)||(Ir.add(n),t={rel:t,crossOrigin:l,href:a},e.querySelector(n)===null&&(a=e.createElement("link"),Ct(a,"link",t),At(a),e.head.appendChild(a)))}}function jm(t){Va.D(t),Pr("dns-prefetch",t,null)}function Nm(t,a){Va.C(t,a),Pr("preconnect",t,a)}function Bm(t,a,l){Va.L(t,a,l);var e=Ae;if(e&&t&&a){var n='link[rel="preload"][as="'+na(a)+'"]';a==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+na(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+na(l.imageSizes)+'"]')):n+='[href="'+na(t)+'"]';var i=n;switch(a){case"style":i=Te(t);break;case"script":i=Ee(t)}da.has(i)||(t=T({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:t,as:a},l),da.set(i,t),e.querySelector(n)!==null||a==="style"&&e.querySelector(gn(i))||a==="script"&&e.querySelector(yn(i))||(a=e.createElement("link"),Ct(a,"link",t),At(a),e.head.appendChild(a)))}}function qm(t,a){Va.m(t,a);var l=Ae;if(l&&t){var e=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+na(e)+'"][href="'+na(t)+'"]',i=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ee(t)}if(!da.has(i)&&(t=T({rel:"modulepreload",href:t},a),da.set(i,t),l.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yn(i)))return}e=l.createElement("link"),Ct(e,"link",t),At(e),l.head.appendChild(e)}}}function wm(t,a,l){Va.S(t,a,l);var e=Ae;if(e&&t){var n=Kl(e).hoistableStyles,i=Te(t);a=a||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=e.querySelector(gn(i)))c.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":a},l),(l=da.get(i))&&lf(t,l);var f=u=e.createElement("link");At(f),Ct(f,"link",t),f._p=new Promise(function(d,y){f.onload=d,f.onerror=y}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Hi(u,a,e)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function Gm(t,a){Va.X(t,a);var l=Ae;if(l&&t){var e=Kl(l).hoistableScripts,n=Ee(t),i=e.get(n);i||(i=l.querySelector(yn(n)),i||(t=T({src:t,async:!0},a),(a=da.get(n))&&ef(t,a),i=l.createElement("script"),At(i),Ct(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(n,i))}}function Rm(t,a){Va.M(t,a);var l=Ae;if(l&&t){var e=Kl(l).hoistableScripts,n=Ee(t),i=e.get(n);i||(i=l.querySelector(yn(n)),i||(t=T({src:t,async:!0,type:"module"},a),(a=da.get(n))&&ef(t,a),i=l.createElement("script"),At(i),Ct(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(n,i))}}function td(t,a,l,e){var n=(n=ka.current)?Ci(n):null;if(!n)throw Error(g(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=Te(l.href),l=Kl(n).hoistableStyles,e=l.get(a),e||(e={type:"style",instance:null,count:0,state:null},l.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Te(l.href);var i=Kl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(gn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),da.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},da.set(t,l),i||Ym(n,t,l,u.state))),a&&e===null)throw Error(g(528,""));return u}if(a&&e!==null)throw Error(g(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Ee(l),l=Kl(n).hoistableScripts,e=l.get(a),e||(e={type:"script",instance:null,count:0,state:null},l.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,t))}}function Te(t){return'href="'+na(t)+'"'}function gn(t){return'link[rel="stylesheet"]['+t+"]"}function ad(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function Ym(t,a,l,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Ct(a,"link",l),At(a),t.head.appendChild(a))}function Ee(t){return'[src="'+na(t)+'"]'}function yn(t){return"script[async]"+t}function ld(t,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+na(l.href)+'"]');if(e)return a.instance=e,At(e),e;var n=T({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),At(e),Ct(e,"style",n),Hi(e,l.precedence,t),a.instance=e;case"stylesheet":n=Te(l.href);var i=t.querySelector(gn(n));if(i)return a.state.loading|=4,a.instance=i,At(i),i;e=ad(l),(n=da.get(n))&&lf(e,n),i=(t.ownerDocument||t).createElement("link"),At(i);var u=i;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Ct(i,"link",e),a.state.loading|=4,Hi(i,l.precedence,t),a.instance=i;case"script":return i=Ee(l.src),(n=t.querySelector(yn(i)))?(a.instance=n,At(n),n):(e=l,(n=da.get(i))&&(e=T({},l),ef(e,n)),t=t.ownerDocument||t,n=t.createElement("script"),At(n),Ct(n,"link",e),t.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(g(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,Hi(e,l.precedence,t));return a.instance}function Hi(t,a,l){for(var e=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,i=n,u=0;u<e.length;u++){var c=e[u];if(c.dataset.precedence===a)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(t,a.firstChild))}function lf(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function ef(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var ji=null;function ed(t,a,l){if(ji===null){var e=new Map,n=ji=new Map;n.set(l,e)}else n=ji,e=n.get(l),e||(e=new Map,n.set(l,e));if(e.has(t))return e;for(e.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[Ce]||i[Dt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(a)||"";u=t+u;var c=e.get(u);c?c.push(i):e.set(u,[i])}}return e}function nd(t,a,l){t=t.ownerDocument||t,t.head.insertBefore(l,a==="title"?t.querySelector("head > title"):null)}function Qm(t,a,l){if(l===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function id(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Xm(t,a,l,e){if(l.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Te(e.href),i=a.querySelector(gn(n));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Ni.bind(t),a.then(t,t)),l.state.loading|=4,l.instance=i,At(i);return}i=a.ownerDocument||a,e=ad(e),(n=da.get(n))&&lf(e,n),i=i.createElement("link"),At(i);var u=i;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Ct(i,"link",e),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,a),(a=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Ni.bind(t),a.addEventListener("load",l),a.addEventListener("error",l))}}var nf=0;function Zm(t,a){return t.stylesheets&&t.count===0&&qi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var e=setTimeout(function(){if(t.stylesheets&&qi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+a);0<t.imgBytes&&nf===0&&(nf=62500*Am());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>nf?50:800)+a);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(n)}}:null}function Ni(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bi=null;function qi(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bi=new Map,a.forEach(Lm,t),Bi=null,Ni.call(t))}function Lm(t,a){if(!(a.state.loading&4)){var l=Bi.get(t);if(l)var e=l.get(null);else{l=new Map,Bi.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),e=u)}e&&l.set(null,e)}n=a.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||e,i===e&&l.set(null,n),l.set(u,n),this.count++,e=Ni.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),a.state.loading|=4}}var pn={$$typeof:Mt,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function Vm(t,a,l,e,n,i,u,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.hiddenUpdates=Pi(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function ud(t,a,l,e,n,i,u,c,f,d,y,b){return t=new Vm(t,a,l,u,f,d,y,b,c),a=1,i===!0&&(a|=24),i=$t(3,null,null,a),t.current=i,i.stateNode=t,a=wu(),a.refCount++,t.pooledCache=a,a.refCount++,i.memoizedState={element:e,isDehydrated:l,cache:a},Qu(i),t}function cd(t){return t?(t=le,t):le}function fd(t,a,l,e,n,i){n=cd(n),e.context===null?e.context=n:e.pendingContext=n,e=el(a),e.payload={element:l},i=i===void 0?null:i,i!==null&&(e.callback=i),l=nl(t,e,a),l!==null&&(Zt(l,t,a),ke(l,t,a))}function od(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<a?l:a}}function uf(t,a){od(t,a),(t=t.alternate)&&od(t,a)}function sd(t){if(t.tag===13||t.tag===31){var a=Dl(t,67108864);a!==null&&Zt(a,t,67108864),uf(t,67108864)}}function rd(t){if(t.tag===13||t.tag===31){var a=ta();a=tu(a);var l=Dl(t,a);l!==null&&Zt(l,t,a),uf(t,a)}}var wi=!0;function Km(t,a,l,e){var n=v.T;v.T=null;var i=z.p;try{z.p=2,cf(t,a,l,e)}finally{z.p=i,v.T=n}}function Jm(t,a,l,e){var n=v.T;v.T=null;var i=z.p;try{z.p=8,cf(t,a,l,e)}finally{z.p=i,v.T=n}}function cf(t,a,l,e){if(wi){var n=ff(e);if(n===null)Kc(t,a,e,Gi,l),md(t,e);else if($m(n,t,a,l,e))e.stopPropagation();else if(md(t,e),a&4&&-1<km.indexOf(t)){for(;n!==null;){var i=Vl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=zl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-Jt(u);c.entanglements[1]|=f,u&=~f}Aa(i),($&6)===0&&(Si=Vt()+500,rn(0))}}break;case 31:case 13:c=Dl(i,2),c!==null&&Zt(c,i,2),zi(),uf(i,2)}if(i=ff(e),i===null&&Kc(t,a,e,Gi,l),i===n)break;n=i}n!==null&&e.stopPropagation()}else Kc(t,a,e,null,l)}}function ff(t){return t=ou(t),of(t)}var Gi=null;function of(t){if(Gi=null,t=Ll(t),t!==null){var a=w(t);if(a===null)t=null;else{var l=a.tag;if(l===13){if(t=it(a),t!==null)return t;t=null}else if(l===31){if(t=G(a),t!==null)return t;t=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Gi=t,null}function dd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jd()){case bf:return 2;case Sf:return 8;case Dn:case Nd:return 32;case xf:return 268435456;default:return 32}default:return 32}}var sf=!1,gl=null,yl=null,pl=null,vn=new Map,bn=new Map,vl=[],km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function md(t,a){switch(t){case"focusin":case"focusout":gl=null;break;case"dragenter":case"dragleave":yl=null;break;case"mouseover":case"mouseout":pl=null;break;case"pointerover":case"pointerout":vn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(a.pointerId)}}function Sn(t,a,l,e,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:a,domEventName:l,eventSystemFlags:e,nativeEvent:i,targetContainers:[n]},a!==null&&(a=Vl(a),a!==null&&sd(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),t)}function $m(t,a,l,e,n){switch(a){case"focusin":return gl=Sn(gl,t,a,l,e,n),!0;case"dragenter":return yl=Sn(yl,t,a,l,e,n),!0;case"mouseover":return pl=Sn(pl,t,a,l,e,n),!0;case"pointerover":var i=n.pointerId;return vn.set(i,Sn(vn.get(i)||null,t,a,l,e,n)),!0;case"gotpointercapture":return i=n.pointerId,bn.set(i,Sn(bn.get(i)||null,t,a,l,e,n)),!0}return!1}function hd(t){var a=Ll(t.target);if(a!==null){var l=w(a);if(l!==null){if(a=l.tag,a===13){if(a=it(l),a!==null){t.blockedOn=a,Df(t.priority,function(){rd(l)});return}}else if(a===31){if(a=G(l),a!==null){t.blockedOn=a,Df(t.priority,function(){rd(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ri(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var l=ff(t.nativeEvent);if(l===null){l=t.nativeEvent;var e=new l.constructor(l.type,l);fu=e,l.target.dispatchEvent(e),fu=null}else return a=Vl(l),a!==null&&sd(a),t.blockedOn=l,!1;a.shift()}return!0}function gd(t,a,l){Ri(t)&&l.delete(a)}function Wm(){sf=!1,gl!==null&&Ri(gl)&&(gl=null),yl!==null&&Ri(yl)&&(yl=null),pl!==null&&Ri(pl)&&(pl=null),vn.forEach(gd),bn.forEach(gd)}function Yi(t,a){t.blockedOn===a&&(t.blockedOn=null,sf||(sf=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,Wm)))}var Qi=null;function yd(t){Qi!==t&&(Qi=t,S.unstable_scheduleCallback(S.unstable_NormalPriority,function(){Qi===t&&(Qi=null);for(var a=0;a<t.length;a+=3){var l=t[a],e=t[a+1],n=t[a+2];if(typeof e!="function"){if(of(e||l)===null)continue;break}var i=Vl(l);i!==null&&(t.splice(a,3),a-=3,cc(i,{pending:!0,data:n,method:l.method,action:e},e,n))}}))}function Me(t){function a(f){return Yi(f,t)}gl!==null&&Yi(gl,t),yl!==null&&Yi(yl,t),pl!==null&&Yi(pl,t),vn.forEach(a),bn.forEach(a);for(var l=0;l<vl.length;l++){var e=vl[l];e.blockedOn===t&&(e.blockedOn=null)}for(;0<vl.length&&(l=vl[0],l.blockedOn===null);)hd(l),l.blockedOn===null&&vl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(e=0;e<l.length;e+=3){var n=l[e],i=l[e+1],u=n[wt]||null;if(typeof i=="function")u||yd(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[wt]||null)c=u.formAction;else if(of(n)!==null)continue}else c=u.action;typeof c=="function"?l[e+1]=c:(l.splice(e,3),e-=3),yd(l)}}}function pd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),e||setTimeout(l,20)}function l(){if(!e&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(l,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function rf(t){this._internalRoot=t}Xi.prototype.render=rf.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(g(409));var l=a.current,e=ta();fd(l,e,t,a,null,null)},Xi.prototype.unmount=rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;fd(t.current,2,null,t,null,null),zi(),a[Zl]=null}};function Xi(t){this._internalRoot=t}Xi.prototype.unstable_scheduleHydration=function(t){if(t){var a=Mf();t={blockedOn:null,target:t,priority:a};for(var l=0;l<vl.length&&a!==0&&a<vl[l].priority;l++);vl.splice(l,0,t),l===0&&hd(t)}};var vd=q.version;if(vd!=="19.2.1")throw Error(g(527,vd,"19.2.1"));z.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(g(188)):(t=Object.keys(t).join(","),Error(g(268,t)));return t=j(a),t=t!==null?ut(t):null,t=t===null?null:t.stateNode,t};var Fm={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zi.isDisabled&&Zi.supportsFiber)try{Oe=Zi.inject(Fm),Kt=Zi}catch{}}return xn.createRoot=function(t,a){if(!D(t))throw Error(g(299));var l=!1,e="",n=Es,i=Ms,u=Ds;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=ud(t,1,!1,null,null,l,e,null,n,i,u,pd),t[Zl]=a.current,Vc(t),new rf(a)},xn.hydrateRoot=function(t,a,l){if(!D(t))throw Error(g(299));var e=!1,n="",i=Es,u=Ms,c=Ds,f=null;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),a=ud(t,1,!0,a,l??null,e,n,f,i,u,c,pd),a.context=cd(null),l=a.current,e=ta(),e=tu(e),n=el(e),n.callback=null,nl(l,n,e),l=e,a.current.lanes=l,_e(a,l),Aa(a),t[Zl]=a.current,Vc(t),new Xi(a)},xn.version="19.2.1",xn}var Ad;function fh(){if(Ad)return mf.exports;Ad=1;function S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S)}catch(q){console.error(q)}}return S(),mf.exports=ch(),mf.exports}var oh=fh();const sh="modulepreload",rh=function(S){return"/"+S},Td={},Sl=function(q,V,g){let D=Promise.resolve();if(V&&V.length>0){let L=function(j){return Promise.all(j.map(ut=>Promise.resolve(ut).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const it=document.querySelector("meta[property=csp-nonce]"),G=it?.nonce||it?.getAttribute("nonce");D=L(V.map(j=>{if(j=rh(j),j in Td)return;Td[j]=!0;const ut=j.endsWith(".css"),T=ut?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${j}"]${T}`))return;const W=document.createElement("link");if(W.rel=ut?"stylesheet":sh,ut||(W.as="script"),W.crossOrigin="",W.href=j,G&&W.setAttribute("nonce",G),document.head.appendChild(W),ut)return new Promise((Bt,k)=>{W.addEventListener("load",Bt),W.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${j}`)))})}))}function w(it){const G=new Event("vite:preloadError",{cancelable:!0});if(G.payload=it,window.dispatchEvent(G),!G.defaultPrevented)throw it}return D.then(it=>{for(const G of it||[])G.status==="rejected"&&w(G.reason);return q().catch(w)})},Et={bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgTertiary:"#111111",bgCard:"rgba(255, 255, 255, 0.02)",textPrimary:"#f5f5f7",textSecondary:"#a1a1a6",textTertiary:"#8e8e93",accent:"#2A9D8F",accentHover:"#3BB4A5",accentSubtle:"rgba(42, 157, 143, 0.15)",blue:"#4361A5",lightBlue:"#7BA7D9",cyan:"#3BB4B1",border:"rgba(255, 255, 255, 0.08)",borderHover:"rgba(255, 255, 255, 0.15)",gradient:"linear-gradient(135deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientHorizontal:"linear-gradient(90deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)"},Ht={bgPrimary:"#ffffff",bgSecondary:"#f5f5f7",bgTertiary:"#e8e8ed",bgCard:"rgba(0, 0, 0, 0.02)",textPrimary:"#1d1d1f",textSecondary:"#515154",textTertiary:"#6e6e73",accent:"#238076",accentHover:"#1a6b63",accentSubtle:"rgba(42, 157, 143, 0.12)",blue:"#3a5491",lightBlue:"#5a8cc7",cyan:"#2f9d9a",border:"rgba(0, 0, 0, 0.08)",borderHover:"rgba(0, 0, 0, 0.15)",gradient:"linear-gradient(135deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientHorizontal:"linear-gradient(90deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)"},B={colors:Et,space:{sm:"16px",section:"100px"},typography:{fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',fontSize:{headline:"clamp(40px, 5vw, 64px)",caption:"14px"},fontWeight:{regular:400,medium:500,semibold:600,bold:700},lineHeight:{tight:1.05},letterSpacing:{tight:"-0.03em",wide:"0.1em"}},breakpoints:{mobile:"640px",tablet:"1024px",desktop:"1280px"},borderRadius:{full:"9999px"},zIndex:{sticky:100},maxWidth:{wide:"1200px",full:"1440px"}},dh=eh`
  /* CSS Variables for dynamic theming */
  :root {
    /* Dark mode (default) */
    --bg-primary: ${Et.bgPrimary};
    --bg-secondary: ${Et.bgSecondary};
    --bg-tertiary: ${Et.bgTertiary};
    --bg-card: ${Et.bgCard};
    --text-primary: ${Et.textPrimary};
    --text-secondary: ${Et.textSecondary};
    --text-tertiary: ${Et.textTertiary};
    --accent: ${Et.accent};
    --accent-hover: ${Et.accentHover};
    --accent-subtle: ${Et.accentSubtle};
    --blue: ${Et.blue};
    --cyan: ${Et.cyan};
    --light-blue: ${Et.lightBlue};
    --border: ${Et.border};
    --border-hover: ${Et.borderHover};
    --gradient: ${Et.gradient};
    --gradient-horizontal: ${Et.gradientHorizontal};
    
    /* Glass effects for dark mode */
    --glass-bg: rgba(255, 255, 255, 0.08);
    --glass-bg-hover: rgba(255, 255, 255, 0.12);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-shadow: rgba(0, 0, 0, 0.3);
    
    /* Navigation specific */
    --nav-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.08) 100%);
    --nav-border-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 40%, rgba(42, 157, 143, 0.2) 60%, rgba(67, 97, 165, 0.15) 100%);
    --nav-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 24px -4px rgba(0, 0, 0, 0.3), 0 8px 48px -8px rgba(42, 157, 143, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 -1px 1px rgba(0, 0, 0, 0.1);
    --nav-highlight: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    
    /* Card backgrounds */
    --card-bg: rgba(255, 255, 255, 0.02);
    --card-bg-hover: rgba(255, 255, 255, 0.05);
    --card-border: rgba(255, 255, 255, 0.08);
  }
  
  [data-theme="light"] {
    --bg-primary: ${Ht.bgPrimary};
    --bg-secondary: ${Ht.bgSecondary};
    --bg-tertiary: ${Ht.bgTertiary};
    --bg-card: ${Ht.bgCard};
    --text-primary: ${Ht.textPrimary};
    --text-secondary: ${Ht.textSecondary};
    --text-tertiary: ${Ht.textTertiary};
    --accent: ${Ht.accent};
    --accent-hover: ${Ht.accentHover};
    --accent-subtle: ${Ht.accentSubtle};
    --blue: ${Ht.blue};
    --cyan: ${Ht.cyan};
    --light-blue: ${Ht.lightBlue};
    --border: ${Ht.border};
    --border-hover: ${Ht.borderHover};
    --gradient: ${Ht.gradient};
    --gradient-horizontal: ${Ht.gradientHorizontal};
    
    /* Glass effects for light mode */
    --glass-bg: rgba(255, 255, 255, 0.7);
    --glass-bg-hover: rgba(255, 255, 255, 0.85);
    --glass-border: rgba(0, 0, 0, 0.08);
    --glass-shadow: rgba(0, 0, 0, 0.1);
    
    /* Navigation for light mode */
    --nav-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.8) 100%);
    --nav-border-gradient: linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 40%, rgba(42, 157, 143, 0.15) 60%, rgba(67, 97, 165, 0.1) 100%);
    --nav-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 24px -4px rgba(0, 0, 0, 0.1), 0 8px 48px -8px rgba(42, 157, 143, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.8);
    --nav-highlight: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
    
    /* Card backgrounds for light mode */
    --card-bg: rgba(255, 255, 255, 0.6);
    --card-bg-hover: rgba(255, 255, 255, 0.8);
    --card-border: rgba(0, 0, 0, 0.06);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    position: relative;
    min-height: 100vh;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.5;
    font-size: 17px;
    transition: background-color 0.4s ease, color 0.4s ease;
    position: relative;
    min-height: 100vh;
  }

  ::selection {
    background: var(--accent);
    color: white;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--border-hover);
  }

  /* Focus styles */
  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  /* Skip link for accessibility */
  .skip-link {
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--accent);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 500;
    z-index: 10000;
    text-decoration: none;
    transition: top 0.3s ease;
    
    &:focus {
      top: 20px;
    }
  }

  /* Performance: Enable content-visibility for below-the-fold sections */
  section:not(:first-of-type) {
    content-visibility: auto;
    contain-intrinsic-size: 0 800px;
  }

  /* Performance: Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Performance: Hardware acceleration for animations */
  .gpu-accelerated {
    transform: translateZ(0);
    will-change: transform;
    backface-visibility: hidden;
  }
`,Dd=nt.createContext(void 0),Od="portfolio-theme-mode",mh=()=>{if(typeof window<"u"){const S=localStorage.getItem(Od);if(S==="dark"||S==="light")return S}return"dark"},hh=({children:S})=>{const[q,V]=nt.useState(mh);nt.useEffect(()=>{document.documentElement.setAttribute("data-theme",q),localStorage.setItem(Od,q)},[q]);const g=()=>{V(D=>D==="dark"?"light":"dark")};return x.jsx(Dd.Provider,{value:{mode:q,toggleTheme:g,isDark:q==="dark"},children:S})},gh=()=>{const S=nt.useContext(Dd);if(!S)throw new Error("useTheme must be used within a ThemeProvider");return S},yh=Ta`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,ph=Ta`
  0%, 100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.6;
  }
`,vh=O.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${B.zIndex.sticky};
  max-width: calc(100vw - 48px);
  
  @media (max-width: ${B.breakpoints.tablet}) {
    top: auto;
    bottom: 24px;
    max-width: calc(100vw - 48px);
  }
  
  @media (max-width: 480px) {
    bottom: 16px;
    max-width: calc(100vw - 32px);
  }
`,bh=O(C.nav)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  border-radius: 24px;
  
  /* Multi-layer glass effect - uses CSS variables */
  background: var(--nav-bg);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  
  /* Liquid border with gradient */
  border: 1px solid transparent;
  background-clip: padding-box;
  
  /* Outer glow */
  box-shadow: var(--nav-shadow);
  transition: background 0.4s ease, box-shadow 0.4s ease;
    
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: var(--nav-border-gradient);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
  
  /* Ambient light reflection */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    height: 1px;
    background: var(--nav-highlight);
    border-radius: 50%;
    pointer-events: none;
  }
  
  @media (max-width: ${B.breakpoints.tablet}) {
    gap: 2px;
    padding: 5px;
    border-radius: 20px;
    
    &::before {
      border-radius: 20px;
    }
  }
  
  @media (max-width: 480px) {
    gap: 2px;
    padding: 5px;
    border-radius: 18px;
    max-width: 100%;
    
    &::before {
      border-radius: 18px;
    }
  }
`,Sh=O(C.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 16px;
  text-decoration: none;
  overflow: hidden;
  flex-shrink: 0;
  
  /* Glass layer */
  background: linear-gradient(
    135deg,
    rgba(42, 157, 143, 0.15) 0%,
    rgba(67, 97, 165, 0.1) 100%
  );
  
  /* Shimmer effect on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
    animation: ${yh} 1.5s ease infinite;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  @media (max-width: ${B.breakpoints.tablet}) {
    width: 38px;
    height: 38px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;
  }
`,xh=O.img`
  height: 28px;
  width: auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${B.breakpoints.tablet}) {
    height: 24px;
  }
  
  @media (max-width: 480px) {
    height: 20px;
  }
`,zh=O.div`
  display: flex;
  align-items: center;
  gap: 2px;
  
  @media (max-width: ${B.breakpoints.tablet}) {
    gap: 1px;
  }
  
  @media (max-width: 480px) {
    gap: 0;
  }
`,Ah=O(C.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  font-size: 13px;
  font-weight: ${B.typography.fontWeight.medium};
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 14px;
  transition: color 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  
  ${({$isActive:S})=>S&&nh`
    color: var(--text-primary);
  `}
  
  &:hover {
    color: var(--text-primary);
    text-decoration: none;
  }
  
  /* Liquid ripple on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      var(--glass-bg-hover) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: ${B.breakpoints.tablet}) {
    padding: 10px 12px;
    font-size: 12px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 10px;
    font-size: 11px;
    border-radius: 10px;
    flex-shrink: 1;
    min-width: 0;
  }
  
  @media (max-width: 360px) {
    padding: 8px 8px;
    font-size: 10px;
  }
`,Th=O(C.div)`
  position: absolute;
  inset: 2px;
  border-radius: 12px;
  z-index: -1;
  
  /* Liquid glass active state */
  background: linear-gradient(
    135deg,
    rgba(42, 157, 143, 0.2) 0%,
    rgba(59, 180, 177, 0.15) 50%,
    rgba(67, 97, 165, 0.2) 100%
  );
  
  /* Subtle inner glow */
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.1),
    0 0 20px -5px rgba(42, 157, 143, 0.4);
    
  /* Breathing animation */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: inherit;
    animation: ${ph} 3s ease-in-out infinite;
    pointer-events: none;
  }
  
  @media (max-width: ${B.breakpoints.tablet}) {
    border-radius: 10px;
    
    &::after {
      border-radius: 10px;
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 6px;
    
    &::after {
      border-radius: 6px;
    }
  }
`,Eh=O(C.button)`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  overflow: hidden;
  flex-shrink: 0;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(42, 157, 143, 0.1) 0%,
      rgba(67, 97, 165, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 14px;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    color: var(--text-primary);
  }
  
  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: ${B.breakpoints.tablet}) {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,Ed=[{label:"About",href:"#about"},{label:"Skills",href:"#technologyproficiency"},{label:"Experience",href:"#professionalexperience"},{label:"Projects",href:"#mostproudof"},{label:"Contact",href:"#contact"}],Mh=()=>{const[S,q]=nt.useState(""),V=nt.useRef(null),{isDark:g,toggleTheme:D}=gh();nt.useEffect(()=>{const G=()=>{const L=Ed.map(j=>j.href.replace("#",""));for(const j of[...L].reverse()){const ut=document.getElementById(j);if(ut&&ut.getBoundingClientRect().top<=150){q(j);return}}q("")};return window.addEventListener("scroll",G,{passive:!0}),()=>window.removeEventListener("scroll",G)},[]);const w=G=>{const L=G.currentTarget.getBoundingClientRect(),j=(G.clientX-L.left)/L.width*100,ut=(G.clientY-L.top)/L.height*100;G.currentTarget.style.setProperty("--mouse-x",`${j}%`),G.currentTarget.style.setProperty("--mouse-y",`${ut}%`)},it=(G,L)=>{G.preventDefault();const j=document.querySelector(L);if(!j)return;const ut=()=>{j.scrollIntoView({behavior:"smooth",block:"start"})};ut(),setTimeout(ut,500),setTimeout(ut,1e3)};return x.jsx(vh,{ref:V,children:x.jsxs(bh,{"aria-label":"Main navigation",initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:[.25,.1,.25,1],delay:.2},children:[x.jsx(Sh,{href:"#home",onClick:G=>it(G,"#home"),whileHover:{scale:1.05},whileTap:{scale:.95},children:x.jsxs("picture",{children:[x.jsx("source",{srcSet:"/images/logo-100.webp",type:"image/webp"}),x.jsx(xh,{src:"/images/logo-optimized.png",alt:"PN",width:28,height:28,loading:"eager",decoding:"async"})]})}),x.jsx(zh,{children:Ed.map(G=>{const L=S===G.href.replace("#","");return x.jsxs(Ah,{href:G.href,$isActive:L,"aria-current":L?"page":void 0,onClick:j=>it(j,G.href),onMouseMove:w,whileHover:{scale:1.02},whileTap:{scale:.98},children:[L&&x.jsx(Th,{layoutId:"navActive",initial:!1,transition:{type:"spring",stiffness:500,damping:35}}),x.jsx("span",{style:{position:"relative",zIndex:1},children:G.label})]},G.label)})}),x.jsx(Eh,{onClick:D,whileHover:{scale:1.05},whileTap:{scale:.95},title:g?"Switch to light mode":"Switch to dark mode","aria-label":g?"Switch to light mode":"Switch to dark mode",role:"button",children:x.jsx(Pm,{mode:"wait",children:g?x.jsxs(C.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.3},children:[x.jsx("circle",{cx:"12",cy:"12",r:"5"}),x.jsx("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]},"sun"):x.jsx(C.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.3},children:x.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})},"moon")})})]})})},Ud=Ta`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Dh=Ta`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`,Oh=O(C.footer)`
  padding: 48px 24px;
  padding-bottom: 100px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${B.breakpoints.tablet}) {
    padding: 56px 80px;
    padding-bottom: 56px;
  }
`,Uh=O.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 1px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${Ud} 3s ease infinite;
  opacity: 0.6;
  
  @media (min-width: ${B.breakpoints.tablet}) {
    width: 140px;
  }
`,_h=O(C.div)`
  max-width: ${B.maxWidth.wide};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Ch=O(C.p)`
  font-size: 13px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
  letter-spacing: 0.01em;
  line-height: 1.6;
  
  @media (min-width: ${B.breakpoints.tablet}) {
    font-size: 14px;
  }
`,Hh=O(C.span)`
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
`,jh=O.span`
  color: #ef4444;
  font-size: 13px;
  display: inline-block;
  animation: ${Dh} 1.8s ease-in-out infinite;
  
  @media (min-width: ${B.breakpoints.tablet}) {
    font-size: 14px;
  }
`,Nh=O.span`
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Ud} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${B.typography.fontWeight.semibold};
`,Bh=()=>x.jsxs(Oh,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:[x.jsx(Uh,{}),x.jsx(_h,{children:x.jsxs(Ch,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:["Designed & Built With",x.jsx(Hh,{whileHover:{scale:1.2},transition:{type:"spring",stiffness:400,damping:15},children:x.jsx(jh,{children:"♥"})}),"By ",x.jsx(Nh,{children:"Pranshu"})," • © 2025"]})})]}),qh=Ta`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`,wh=Ta`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`,Gh=O(C.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  overflow: hidden;
  will-change: transform, opacity;
`,Rh=O(C.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(42, 157, 143, 0.08) 0%,
    rgba(67, 97, 165, 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
`,Yh=O(C.div)`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,Qh=O(C.div)`
  position: absolute;
  width: ${({$size:S})=>S}px;
  height: ${({$size:S})=>S}px;
  border-radius: 50%;
  background: ${({$color:S})=>S};
  filter: blur(1px);
`,Xh=O(C.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,Zh=O(C.div)`
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${B.breakpoints.tablet}) {
    width: 180px;
    height: 180px;
  }
`,Lh=O(C.div)`
  position: absolute;
  inset: -40px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(42, 157, 143, 0.4) 0%,
    rgba(59, 180, 177, 0.2) 40%,
    transparent 70%
  );
  filter: blur(25px);
`,Vh=O(C.div)`
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(135deg, #2A9D8F, #3BB4B1, #4361A5);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2A9D8F, #3BB4B1, #4361A5);
    z-index: -1;
    opacity: 0.5;
    filter: blur(8px);
  }
`,yf=O(C.div)`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px solid rgba(42, 157, 143, 0.3);
  animation: ${wh} 2s ease-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`,Kh=O(C.img)`
  width: 90px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 25px rgba(42, 157, 143, 0.5));
  
  @media (min-width: ${B.breakpoints.tablet}) {
    width: 110px;
  }
`,Jh=O(C.div)`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  overflow: hidden;
  z-index: 3;
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.15) 50%,
      transparent 60%
    );
    animation: ${qh} 2s ease-in-out infinite;
  }
`,kh={initial:{opacity:1},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2,ease:"easeOut"}}},$h={initial:{opacity:0,scale:1.5},animate:{opacity:1,scale:1,transition:{duration:1.5}},exit:{opacity:0,scale:.95,transition:{duration:.2}}},Wh={initial:{},animate:{},exit:{scale:.9,opacity:0,transition:{duration:.2,ease:"easeOut"}}},Fh={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},Ih={initial:{opacity:0,scale:0,rotate:-180},animate:{opacity:1,scale:1,rotate:0,transition:{type:"spring",stiffness:100,damping:15,delay:.2}}},Ph={initial:{opacity:0,scale:.3,rotateY:-90,filter:"blur(10px)"},animate:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:12,delay:.4}}},tg=({onComplete:S})=>{const[q,V]=nt.useState("animate"),g=Array.from({length:20},(D,w)=>({id:w,x:Math.random()*100,y:Math.random()*100,size:Math.random()*4+2,color:w%3===0?"rgba(42, 157, 143, 0.4)":w%3===1?"rgba(59, 180, 177, 0.3)":"rgba(67, 97, 165, 0.3)",duration:Math.random()*3+2,delay:Math.random()*2}));return nt.useEffect(()=>{const D=setTimeout(()=>{V("exit")},2200);return()=>clearTimeout(D)},[]),nt.useEffect(()=>{if(q==="exit"){const D=setTimeout(()=>{S()},200);return()=>clearTimeout(D)}},[q,S]),x.jsxs(Gh,{variants:kh,initial:"initial",animate:q,children:[x.jsx(Rh,{variants:$h,initial:"initial",animate:q}),x.jsx(Yh,{initial:{opacity:1},animate:{opacity:q==="exit"?0:1},transition:{duration:.2},children:g.map(D=>x.jsx(Qh,{$size:D.size,$color:D.color,style:{left:`${D.x}%`,top:`${D.y}%`},initial:{opacity:0,scale:0},animate:{opacity:[0,.8,0],scale:[0,1,0],y:[0,-100]},transition:{duration:D.duration,delay:D.delay,repeat:1/0,repeatDelay:Math.random()*2}},D.id))}),x.jsx(Xh,{variants:Wh,initial:"initial",animate:q,children:x.jsxs(Zh,{children:[x.jsx(Lh,{variants:Fh,initial:"initial",animate:"animate"}),x.jsx(yf,{}),x.jsx(yf,{}),x.jsx(yf,{}),x.jsx(Vh,{variants:Ih,initial:"initial",animate:"animate"}),x.jsxs("picture",{children:[x.jsx("source",{srcSet:"/images/logo-optimized.webp",type:"image/webp"}),x.jsx(Kh,{src:"/images/logo-optimized.png",alt:"PN",width:80,height:80,loading:"eager",decoding:"async",variants:Ph,initial:"initial",animate:"animate"})]}),x.jsx(Jh,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:.5}})]})})]})},ag=O.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.4;
  
  @media (max-width: ${B.breakpoints.tablet}) {
    display: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Md=[{r:42,g:157,b:143},{r:59,g:180,b:177},{r:67,g:97,b:165},{r:123,g:167,b:217}],lg=()=>{const S=nt.useRef(null),q=nt.useRef([]),V=nt.useRef(0),g=nt.useRef({x:window.innerWidth/2,y:window.innerHeight/2});return nt.useEffect(()=>{const D=S.current;if(!D)return;const w=D.getContext("2d");if(!w)return;const it=()=>{const T=window.devicePixelRatio||1;D.width=window.innerWidth*T,D.height=window.innerHeight*T,D.style.width=`${window.innerWidth}px`,D.style.height=`${window.innerHeight}px`,w.scale(T,T)};it(),window.addEventListener("resize",it);const G=4;q.current=[];for(let T=0;T<G;T++)q.current.push({x:window.innerWidth/2,y:window.innerHeight/2,size:60+T*20,color:Md[T%Md.length],speed:.1-T*.015,offset:T*.4});let L=0;const j=()=>{L+=.016,w.clearRect(0,0,D.width,D.height);const T=q.current,W=g.current;for(let Bt=T.length-1;Bt>=0;Bt--){const k=T[Bt],qt=Math.sin(L*1.5+k.offset*4)*15,Ja=Math.cos(L*1.5+k.offset*4)*15;k.x+=(W.x+qt-k.x)*k.speed,k.y+=(W.y+Ja-k.y)*k.speed;const Ea=k.size+Math.sin(L*1.2+k.offset*2)*8,ma=w.createRadialGradient(k.x,k.y,0,k.x,k.y,Ea),{r:Mt,g:Lt,b:aa}=k.color;ma.addColorStop(0,`rgba(${Mt}, ${Lt}, ${aa}, 0.25)`),ma.addColorStop(.4,`rgba(${Mt}, ${Lt}, ${aa}, 0.1)`),ma.addColorStop(.7,`rgba(${Mt}, ${Lt}, ${aa}, 0.03)`),ma.addColorStop(1,`rgba(${Mt}, ${Lt}, ${aa}, 0)`),w.beginPath(),w.arc(k.x,k.y,Ea,0,Math.PI*2),w.fillStyle=ma,w.fill()}V.current=requestAnimationFrame(j)},ut=T=>{g.current={x:T.clientX,y:T.clientY}};return window.addEventListener("mousemove",ut),V.current=requestAnimationFrame(j),()=>{window.removeEventListener("resize",it),window.removeEventListener("mousemove",ut),cancelAnimationFrame(V.current)}},[]),x.jsx(ag,{ref:S})},eg=Ta`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,ng=Ta`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(3deg);
  }
`,ig=Ta`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`,ug=Ta`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,cg=O.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 24px 40px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  overflow: hidden;
  position: relative;
  
  @media (min-width: ${B.breakpoints.tablet}) {
    padding: 80px 48px 60px;
  }
  
  @media (min-width: ${B.breakpoints.desktop}) {
    padding: 100px 48px 60px;
  }
`,fg=O(C.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120vw;
  height: 120vh;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse at 60% 40%,
    rgba(42, 157, 143, 0.08) 0%,
    rgba(67, 97, 165, 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 0;
`,og=O.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,sg=O.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  
  @media (min-width: ${B.breakpoints.tablet}) {
    grid-template-columns: 1fr 400px;
    gap: 64px;
  }
  
  @media (min-width: ${B.breakpoints.desktop}) {
    grid-template-columns: 1fr 480px;
    gap: 80px;
  }
`,rg=O.div`
  perspective: 1000px;
`,dg=O(C.div)`
  display: flex;
  justify-content: center;
  
  @media (min-width: ${B.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`,mg=O(C.div)`
  position: relative;
  width: 280px;
  height: 280px;
  
  @media (min-width: ${B.breakpoints.mobile}) {
    width: 340px;
    height: 340px;
  }
  
  @media (min-width: ${B.breakpoints.tablet}) {
    width: 380px;
    height: 380px;
  }
  
  @media (min-width: ${B.breakpoints.desktop}) {
    width: 440px;
    height: 440px;
  }
`,hg=O(C.div)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
  will-change: transform;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
`,gg=O.picture`
  width: 100%;
  height: 100%;
  display: block;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(100%);
    transition: filter 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
    will-change: transform, filter;
  }
  
  &:hover img {
    filter: grayscale(0%);
  }
`,yg=O.div`
  position: absolute;
  inset: -4px;
  border-radius: 28px;
  z-index: -1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: -50%;
    background: conic-gradient(
      from 0deg,
      var(--accent),
      var(--cyan),
      var(--blue),
      var(--light-blue),
      var(--accent)
    );
    animation: ${eg} 6s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: var(--bg-primary);
    border-radius: 24px;
    transition: background-color 0.4s ease;
  }
`,Li=O(C.div)`
  position: absolute;
  border-radius: 16px;
  z-index: -2;
  animation: ${ng} 5s ease-in-out infinite;
  will-change: transform;
  
  ${({$position:S})=>{switch(S){case"top":return`
          top: -25px;
          right: 15px;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, rgba(42, 157, 143, 0.35), transparent);
          animation-delay: 0s;
        `;case"bottom":return`
          bottom: -20px;
          left: 25px;
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, rgba(67, 97, 165, 0.3), transparent);
          animation-delay: 1.5s;
          border-radius: 14px;
        `;case"left":return`
          top: 35%;
          left: -30px;
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, rgba(59, 180, 177, 0.25), transparent);
          animation-delay: 0.8s;
          border-radius: 12px;
        `;case"right":return`
          bottom: 25%;
          right: -25px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(123, 167, 217, 0.3), transparent);
          animation-delay: 2.2s;
          border-radius: 50%;
        `}}}
  
  @media (max-width: ${B.breakpoints.tablet}) {
    display: none;
  }
`,pg=O(C.div)`
  position: absolute;
  inset: -60px;
  background: radial-gradient(
    ellipse at center,
    rgba(42, 157, 143, 0.2) 0%,
    rgba(67, 97, 165, 0.12) 35%,
    transparent 65%
  );
  z-index: -3;
  animation: ${ig} 3s ease-in-out infinite;
  filter: blur(30px);
  will-change: transform, opacity;
`,vg=O(C.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;
`,bg=O(C.span)`
  width: 40px;
  height: 2px;
  background: var(--gradient-horizontal);
  border-radius: 1px;
  transform-origin: left;
`,Sg=O(C.span)`
  font-size: 13px;
  font-weight: ${B.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${ug} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,xg=O(C.div)`
  overflow: hidden;
  margin-bottom: 24px;
`,zg=O(C.h1)`
  font-size: clamp(52px, 9vw, 96px);
  font-weight: ${B.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.04em;
  line-height: 0.92;
  transition: color 0.4s ease;
  will-change: transform;
`,Ag=O(C.span)`
  display: inline-block;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    height: 8px;
    background: var(--gradient);
    opacity: 0.3;
    border-radius: 4px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`,Tg=O(C.p)`
  font-size: clamp(17px, 2.2vw, 22px);
  font-weight: ${B.typography.fontWeight.regular};
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 20px;
  transition: color 0.4s ease;
`,Eg=O(C.p)`
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--text-tertiary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color 0.4s ease;
  max-width: 680px;
`,Mg=O(C.div)`
  display: flex;
  gap: 14px;
  flex-wrap: nowrap;
  margin-bottom: 56px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`,Dg=O(C.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--text-primary);
  color: var(--bg-primary);
  font-size: 15px;
  font-weight: ${B.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: ${B.borderRadius.full};
  position: relative;
  overflow: hidden;
  will-change: transform;
  white-space: nowrap;
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    padding: 14px 20px;
    font-size: 14px;
    gap: 8px;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
    flex-shrink: 0;
    
    @media (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`,Og=O(C.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 26px; /* 2px less than primary to account for 2px border */
  background: transparent;
  color: var(--text-primary);
  font-size: 15px;
  font-weight: ${B.typography.fontWeight.medium};
  text-decoration: none;
  border: 2px solid var(--text-secondary);
  border-radius: ${B.borderRadius.full};
  position: relative;
  overflow: hidden;
  will-change: transform;
  white-space: nowrap;
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    padding: 12px 18px;
    font-size: 14px;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--glass-bg);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: var(--text-primary);
    text-decoration: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`,Ug=O(C.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding-top: 36px;
  border-top: 1px solid var(--border);
  transition: border-color 0.4s ease;
  
  @media (min-width: ${B.breakpoints.mobile}) {
    gap: 24px;
  }
  
  @media (min-width: ${B.breakpoints.tablet}) {
    gap: 32px;
  }
`,_g=O(C.div)`
  text-align: center;
  
  @media (min-width: ${B.breakpoints.mobile}) {
    text-align: left;
  }
`,Cg=O(C.span)`
  display: block;
  font-size: clamp(26px, 5.5vw, 44px);
  font-weight: ${B.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 8px;
  transition: color 0.4s ease;
  
  @media (min-width: ${B.breakpoints.mobile}) {
    font-size: clamp(30px, 4.5vw, 44px);
  }
`,Hg=O.span`
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-transform: uppercase;
  transition: color 0.4s ease;
  
  @media (min-width: ${B.breakpoints.mobile}) {
    font-size: 12px;
  }
`,jg={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},Vi={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,mass:1}}},Ng={hidden:{opacity:0,y:80,rotateX:-20},visible:{opacity:1,y:0,rotateX:0,transition:{type:"spring",stiffness:80,damping:20,mass:1.2}}},Bg={hidden:{opacity:0,scale:.85,rotateY:-15,filter:"blur(15px)"},visible:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:60,damping:20,mass:1.5,delay:.3}}},qg={hidden:{scaleX:0},visible:{scaleX:1,transition:{type:"spring",stiffness:100,damping:20,delay:.1}}},wg={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.6}}},Gg={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:150,damping:20}}},Rg=({data:S})=>{const q=nt.useRef(null),{scrollYProgress:V}=th({target:q,offset:["start start","end start"]}),g=df(V,[0,1],["0%","30%"]),D=df(V,[0,.5],[1,.9]),w=df(V,[0,.5],[1,.6]),it=bd(g,{stiffness:100,damping:30}),G=bd(D,{stiffness:100,damping:30}),L=[{value:"9+",label:"Years"},{value:"39+",label:"Engineers Led"},{value:"$2M+",label:"Savings"},{value:"15+",label:"Products"}];return x.jsxs(cg,{id:"home",ref:q,children:[x.jsx(fg,{style:{y:it}}),x.jsx(og,{children:x.jsxs(sg,{children:[x.jsx(rg,{children:x.jsxs(C.div,{variants:jg,initial:"hidden",animate:"visible",children:[x.jsxs(vg,{variants:Vi,children:[x.jsx(bg,{variants:qg}),x.jsx(Sg,{children:"Engineering Leader & Architect"})]}),x.jsx(xg,{children:x.jsxs(zg,{variants:Ng,children:[x.jsx(Ag,{children:S.name.split(" ")[0]}),x.jsx("br",{}),S.name.split(" ").slice(1).join(" ")]})}),x.jsx(Tg,{variants:Vi,children:S.designation}),x.jsx(Eg,{variants:Vi,children:S.headline}),x.jsxs(Mg,{variants:Vi,children:[x.jsxs(Dg,{href:"#contact",onClick:j=>{j.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[x.jsx("span",{children:"Get in Touch"}),x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:x.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),x.jsx(Og,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:x.jsx("span",{children:"Download Resume"})})]}),x.jsx(Ug,{variants:wg,initial:"hidden",animate:"visible",children:L.map((j,ut)=>x.jsxs(_g,{variants:Gg,children:[x.jsx(Cg,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:100,damping:15,delay:.7+ut*.1},children:j.value}),x.jsx(Hg,{children:j.label})]},ut))})]})}),x.jsx(dg,{variants:Bg,initial:"hidden",animate:"visible",style:{scale:G,opacity:w},children:x.jsxs(mg,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:200,damping:20},children:[x.jsx(pg,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:.5}}),x.jsx(Li,{$position:"top",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.6}}),x.jsx(Li,{$position:"bottom",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.6}}),x.jsx(Li,{$position:"left",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.9,duration:.6}}),x.jsx(Li,{$position:"right",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:1.1,duration:.6}}),x.jsx(yg,{}),x.jsx(hg,{whileHover:{scale:1.03},transition:{type:"spring",stiffness:300,damping:25},children:x.jsxs(gg,{children:[x.jsx("source",{srcSet:"/images/profile.webp",type:"image/webp"}),x.jsx("img",{src:"/images/IMG_0832.PNG",alt:`${S.name} - Engineering Leader & Architect`,width:560,height:560,loading:"eager",decoding:"async",fetchPriority:"high"})]})})]})})]})})]})},Yg={sectionTitle:"About Me",content:["🔹  I specialize in crafting multi-tenant, event-driven, and Micro-Services architectures on Azure and AWS, enabling real-time intelligence at scale. My leadership has accelerated delivery velocity by 25% and nurtured high-performing teams of 39+ engineers across international locations.","An expert in transforming monoliths into cloud-native Micro-Services, designing AI-driven orchestration platforms, and modernizing data pipelines using Spark, Databricks, and real-time analytics.","Passionate about balancing technical depth with business outcomes, aligning architecture roadmaps with OKRs, and embedding security and compliance (SOC2, InfoSec) across the SDLC.",`💡 Key Highlights: 
 ✅ Product & Project Expertise — Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT. 
 
 ✅ Technical Edge — Deep experience leading and mentoring global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, Docker/Kubernetes, and DevOps automation. 
 
 ✅ Business Outcomes — Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution.`],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},Qg={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},Xg={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},Zg={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},Lg={name:"Pranshu Nijhawan",designation:"Designing for Scale, Leading for Impact",headline:"Strategic Engineering Leader with 9+ years of experience architecting scalable SaaS platforms, leading global teams, and driving multimillion-dollar cost optimizations. Expert in cloud-native transformations, data-intensive systems, and multi-tenant architectures that enable real-time intelligence and business growth. Proven track record of reducing operational costs by $2M+, improving delivery velocity by 25%, and mentoring high-performing engineering teams.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},Vg={sectionTitle:"Most Proud Of",content:[{id:1,title:"SearchSphere – Multi-Tenant Search Platform with RAG and Vectorization",content:["Designed and architected a fully configurable multi-tenant search platform using TypeScript, Node.js, and PostgreSQL.","Implemented vectorization and Retrieval Augmented Generation (RAG) to enable intelligent global and dimension-based search capabilities.","Enabled onboarding of new search dimensions dynamically via configuration, eliminating the need for code changes.","Successfully decommissioned Elasticsearch, achieving platform simplification and over $2 million in cost savings.","Built for high scalability, supporting tenant isolation and extensibility without compromising performance."]},{id:2,title:"Zero-Downtime ETL Platform – Scalable Blue/Green Data Processing at Scale",content:["Engineered a highly scalable and fault-tolerant ETL platform using Databricks, Spark, Azure Data Factory, and PostgreSQL.","Designed around a Blue/Green deployment strategy to ensure zero downtime during data ingestion and transformation cycles.","Processed 200+ million records across 100+ tables in under 15 minutes using Change Data Capture (CDC) and dynamic schema allocation techniques.","Enabled seamless schema evolution and pipeline reusability across multiple tenants and data domains.","Delivered a production-grade solution with operational efficiency, reliability, and real-time recovery capabilities."]},{id:3,title:"Orchestron – AI Orchestrated Modular Data Processing & Explosion Platform",content:["Architected a high-performance data processing and explosion platform using .NET, Apache Spark, and Kubernetes.","Designed a modular, plug-and-play architecture with configurable rules to enable seamless data transformation at scale.","Integrated Generative AI Agents to manage orchestration and rule governance, enabling intelligent, adaptive processing workflows.","Achieved dynamic scalability and reusability across domains through containerized deployments and configuration-driven pipelines.","Delivered a flexible and future-proof platform capable of adapting to evolving data models and transformation logic with minimal effort."]},{id:4,title:"Polymorphic Self-Mutating Encryption Algorithm",content:["Created a highly secured Hybrid Encryption Algorithm, a combination of hashing and dynamic key-based Encryption Algorithm.",'Solve the drawback of traditional Hashing technique to always create a unique hash value with an "Always Unique" based mechanism ignoring the need to store a key as followed in Key Based Encryption technique.']},{id:5,title:"Global Dependency Tracer",content:["Created a highly optimized Dependency Trace writer, based on Aspect-Oriented-Programming (AOP) Paradigm.","Architected using .NET Core's built-in Dependency Injection (DI) Containers by injecting dynamic proxies acting as a Middleware for all service calls."]},{id:6,title:"Dynamic Result Library for IQueryable & IEnumerable Collections",content:["Created a highly customizable library for Non-Generic collections IQueryable & IEnumerable based on concepts of Reflection for transforming Custom Data objects into LINQ compatible Lambda Expressions.","Dynamic Filter: Generate lambda expressions for LINQ's where extension method to filter data based on defined properties and values.","Dynamic Sort: Generate LINQ's ordering extensions with lambda expressions to sort the object in any direction (Ascending & Descending).","Dynamic Select: Generate lambda expressions for LINQ's select extension to fetch only the provided properties and filter the response using Custom Middleware Injection in .NET Core's request cycle.","Fully Compatible for EF Core's Translations."]}]},Kg={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect I",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 - Present",descriptionSummary:'At McKinsey, I lead architectural vision for <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a>, a flagship <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> product for CPG and retail clients. My role involves bridging deep technical expertise with strategic client engagement, advising senior product and consulting leaders, and driving solution design for high-stakes RFPs and enterprise implementations. I ensure our technical strategy delivers measurable client impact, while also leading a global team of 39 engineers in strategic technical delivery.',description:["Directed a 39-person team on Promotion Advisor, automating 80% of manual tasks to optimize trade spend and maximize ROI, yielding $2M annual savings through targeted allocation across brands, channels, and geographies.","Engineered machine learning models and Azure-based ETL pipelines to collect, clean, and validate promotion data, enabling scenario planning, impact forecasting, and workflow approvals for superior margin and sales outcomes.","Developed a scalable ETL platform (Databricks, Spark, Azure Data Factory, PostgreSQL) with Blue/Green slotting. Processed 200M+ records across 100+ tables in <15 mins (zero downtime), providing retail clients with timely, accurate data for promotional analytics and strategic decision-making.","Architected Orchestron, a high-performance Data Processing and Explosion platform (.NET, Spark, Kubernetes) with modular, rule-driven design. Utilized Generative AI Agents for intelligent orchestration, automating 80% of manual transformation tasks, enhancing client operational efficiency and insights.","Consulted Fortune 500 consumer-goods clients in North America and Europe, delivering transformations with competitive intelligence and consumer insights for full-lifecycle pricing adjustments."]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 - March 2022",descriptionSummary:'At Eptura, I transformed <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), re-architecting legacy SaaS into cloud-native systems and designing distributed platforms. This directly enhanced product reliability and scalability for global clients, while I also led engineering squads, driving technical excellence and team growth.',description:["Cloud-Native Transformation for Enhanced Client Uptime: Led re-architecture of legacy SaaS to a cloud-native microservices solution on Azure Kubernetes Service (AKS). Achieved 60% faster recovery and significantly enhanced system uptime, critical for client operations.","Global Distributed Release Management System: Engineered and deployed a system (Azure IoT Hub, Serverless Functions, Azure CosmosDB) orchestrating synchronized updates across 300M+ IoT devices globally. Ensured seamless and reliable software delivery to a vast client network.","Led & Mentored Engineering Squads: Directed a team of 20 engineers (4 tech leads) across four product squads. Implemented mentorship, improving team retention by 20% and fostering engineering growth, impacting product quality for clients."]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 – April 2021",descriptionSummary:"At Nagarro, I delivered full-stack applications for diverse clients, enhancing user experience and streamlining development. My role involved hands-on development and implementing modern software engineering practices to improve efficiency and reliability of client solutions.",description:["High-Performance Full-Stack Applications: Developed full-stack web applications (Angular, .NET Core, PostgreSQL, Ionic Framework) for e-commerce and HR clients.","CI/CD & IaC for Reliable Client Deployments: Established CI/CD pipelines and Infrastructure as Code (IaC) practices. Reduced deployment failures by 70%, ensuring stable and predictable software releases for client projects."]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 – December 2019",descriptionSummary:'During this tenure at Condeco, I focused on core development and optimization of the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), contributing to its scalability and reliability for a rapidly growing customer base.',description:["Scalable Microservices for 3x Customer Growth: Designed and developed microservices (C#, .NET, React, SQL Server) for the workspace SaaS platform. Supported 3x customer scale-up, handling increased user demand.","Optimized CI/CD & Data Models: Maintained CI/CD pipelines and implemented data model optimizations. Resulted in faster, more reliable software releases and improved system performance for client-facing features."]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",date:"May 2017 – August 2018",descriptionSummary:"At Gartner, I contributed to the development of the ClearForce platform (proprietary survey and analytics tool for HR consulting), focusing on improving data accuracy and automating workflows for clients.",description:["Core SaaS Analytics Tool Development: Contributed backend development for ClearForce (C#, .NET Core, React), improving employee survey data accuracy by 60%. Critical for providing data-driven insights to HR clients.","Automated SQL Workflows: Developed and automated SQL workflows (SPs, SQL agent jobs). Saved over 240 engineering hours annually in manual data processing, improving data delivery efficiency for clients."],last:!0,previously:"Intern"}]},Jg={sectionTitle:"Technology Proficiency",skills:[{icon:"Architecture",category:"Architecture",skills:[{name:"Microservices Architecture",percentage:100},{name:"Data Lakehouse",percentage:90},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Multi-Tenant Architecture (Database, Schema, Metadata Resolution)",percentage:90},{name:"Event-Driven Architecture (EDA)",percentage:100},{name:"Serverless",percentage:80}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"Angular",percentage:90},{name:"JavaScript",percentage:100},{name:"TypeScript",percentage:100},{name:"Ionic Framework",percentage:60}]},{icon:"Backend",category:"Backend",skills:[{name:"C#",percentage:100},{name:".NET Core",percentage:100},{name:"Node.Js",percentage:80},{name:"Python",percentage:80},{name:"Microservices",percentage:100},{name:"GraphQL",percentage:80}]},{icon:"Database",category:"Database",skills:[{name:"SQL",percentage:100},{name:"NoSQL",percentage:90}]},{icon:"Cloud",category:"Cloud",skills:[{name:"Microsoft Azure",percentage:90},{name:"Amazon Web Services (AWS)",percentage:80}]},{icon:"DataEngineering",category:"Data Engineering",skills:[{name:"Azure Databricks (Apache Spark)",percentage:80},{name:"Azure Datafactory",percentage:70},{name:"Azure Stream Analytics",percentage:70}]}]},kg={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},$g={aboutSection:Yg,certifications:Qg,contactMe:Xg,educationalQualifications:Zg,homeSection:Lg,mostProudOf:Vg,professionalExperience:Kg,technologyProficiency:Jg,testimonials:kg},Wg=nt.lazy(()=>Sl(()=>import("./About-CRpSdQGn.js"),__vite__mapDeps([0,1,2,3,4])).then(S=>({default:S.About}))),Fg=nt.lazy(()=>Sl(()=>import("./TechnologyProficiency-DprAn24n.js"),__vite__mapDeps([5,1,2,3,4])).then(S=>({default:S.TechnologyProficiency}))),Ig=nt.lazy(()=>Sl(()=>import("./ProfessionalExperience-BLhn6QgD.js"),__vite__mapDeps([6,1,2,3,4])).then(S=>({default:S.ProfessionalExperience}))),Pg=nt.lazy(()=>Sl(()=>import("./MostProudOf-B339xh3t.js"),__vite__mapDeps([7,1,2,3,4])).then(S=>({default:S.MostProudOf}))),t1=nt.lazy(()=>Sl(()=>import("./Certifications-BUmJQEuY.js"),__vite__mapDeps([8,1,2,3,4])).then(S=>({default:S.Certifications}))),a1=nt.lazy(()=>Sl(()=>import("./Testimonials-WCnKKiNr.js"),__vite__mapDeps([9,1,2,3,4])).then(S=>({default:S.Testimonials}))),l1=nt.lazy(()=>Sl(()=>import("./EducationalQualifications-BDWWQl5U.js"),__vite__mapDeps([10,1,2,3,4])).then(S=>({default:S.EducationalQualifications}))),e1=nt.lazy(()=>Sl(()=>import("./Contact-OS6H5Ih3.js"),__vite__mapDeps([11,1,2,3,4])).then(S=>({default:S.Contact}))),Ka=$g;function n1(){const[S,q]=nt.useState(!1);return x.jsxs(hh,{children:[x.jsx(dh,{}),x.jsx(lg,{}),!S&&x.jsx(tg,{onComplete:()=>q(!0)}),S&&x.jsxs(x.Fragment,{children:[x.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),x.jsx(Mh,{}),x.jsxs("main",{id:"main-content",style:{position:"relative"},role:"main",children:[x.jsx(Rg,{data:Ka.homeSection}),x.jsxs(nt.Suspense,{fallback:null,children:[x.jsx(Wg,{data:Ka.aboutSection}),x.jsx(Fg,{data:Ka.technologyProficiency}),x.jsx(Ig,{data:Ka.professionalExperience}),x.jsx(Pg,{data:Ka.mostProudOf}),x.jsx(t1,{data:Ka.certifications}),x.jsx(a1,{data:Ka.testimonials}),x.jsx(l1,{data:Ka.educationalQualifications}),x.jsx(e1,{data:Ka.contactMe})]})]}),x.jsx(Bh,{})]})]})}oh.createRoot(document.getElementById("root")).render(x.jsx(nt.StrictMode,{children:x.jsx(n1,{})}));export{B as t};
