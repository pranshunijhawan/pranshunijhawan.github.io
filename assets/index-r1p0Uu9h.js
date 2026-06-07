import{r as q,j as o,u as Bt,m as R,a as Me,b as Oa,L as Cm,A as eu,c as On,d as xl,e as Cn,f as Om}from"./vendor-motion-C8MGYtJI.js";import{r as Um,a as Bm}from"./vendor-react-DlBnNAMw.js";import{f as Hm,d as v}from"./vendor-styled-D8mjEXd4.js";(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))f(E);new MutationObserver(E=>{for(const M of E)if(M.type==="childList")for(const j of M.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&f(j)}).observe(document,{childList:!0,subtree:!0});function T(E){const M={};return E.integrity&&(M.integrity=E.integrity),E.referrerPolicy&&(M.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?M.credentials="include":E.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function f(E){if(E.ep)return;E.ep=!0;const M=T(E);fetch(E.href,M)}})();var zo={exports:{}},wn={},Ao={exports:{}},To={};var Bd;function _m(){return Bd||(Bd=1,(function(d){function S(z,D){var Q=z.length;z.push(D);t:for(;0<Q;){var rt=Q-1>>>1,dt=z[rt];if(0<E(dt,D))z[rt]=D,z[Q]=dt,Q=rt;else break t}}function T(z){return z.length===0?null:z[0]}function f(z){if(z.length===0)return null;var D=z[0],Q=z.pop();if(Q!==D){z[0]=Q;t:for(var rt=0,dt=z.length,Qt=dt>>>1;rt<Qt;){var yt=2*(rt+1)-1,et=z[yt],Ct=yt+1,Se=z[Ct];if(0>E(et,Q))Ct<dt&&0>E(Se,et)?(z[rt]=Se,z[Ct]=Q,rt=Ct):(z[rt]=et,z[yt]=Q,rt=yt);else if(Ct<dt&&0>E(Se,Q))z[rt]=Se,z[Ct]=Q,rt=Ct;else break t}}return D}function E(z,D){var Q=z.sortIndex-D.sortIndex;return Q!==0?Q:z.id-D.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;d.unstable_now=function(){return M.now()}}else{var j=Date,H=j.now();d.unstable_now=function(){return j.now()-H}}var _=[],C=[],V=1,w=null,Y=3,tt=!1,st=!1,vt=!1,At=!1,pt=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,ft=typeof setImmediate<"u"?setImmediate:null;function Dt(z){for(var D=T(C);D!==null;){if(D.callback===null)f(C);else if(D.startTime<=z)f(C),D.sortIndex=D.expirationTime,S(_,D);else break;D=T(C)}}function ge(z){if(vt=!1,Dt(z),!st)if(T(_)!==null)st=!0,ne||(ne=!0,ie());else{var D=T(C);D!==null&&je(ge,D.startTime-z)}}var ne=!1,we=-1,ve=5,kl=-1;function Un(){return At?!0:!(d.unstable_now()-kl<ve)}function Zl(){if(At=!1,ne){var z=d.unstable_now();kl=z;var D=!0;try{t:{st=!1,vt&&(vt=!1,W(we),we=-1),tt=!0;var Q=Y;try{e:{for(Dt(z),w=T(_);w!==null&&!(w.expirationTime>z&&Un());){var rt=w.callback;if(typeof rt=="function"){w.callback=null,Y=w.priorityLevel;var dt=rt(w.expirationTime<=z);if(z=d.unstable_now(),typeof dt=="function"){w.callback=dt,Dt(z),D=!0;break e}w===T(_)&&f(_),Dt(z)}else f(_);w=T(_)}if(w!==null)D=!0;else{var Qt=T(C);Qt!==null&&je(ge,Qt.startTime-z),D=!1}}break t}finally{w=null,Y=Q,tt=!1}D=void 0}}finally{D?ie():ne=!1}}}var ie;if(typeof ft=="function")ie=function(){ft(Zl)};else if(typeof MessageChannel<"u"){var Bn=new MessageChannel,Ba=Bn.port2;Bn.port1.onmessage=Zl,ie=function(){Ba.postMessage(null)}}else ie=function(){pt(Zl,0)};function je(z,D){we=pt(function(){z(d.unstable_now())},D)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(z){z.callback=null},d.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<z?Math.floor(1e3/z):5},d.unstable_getCurrentPriorityLevel=function(){return Y},d.unstable_next=function(z){switch(Y){case 1:case 2:case 3:var D=3;break;default:D=Y}var Q=Y;Y=D;try{return z()}finally{Y=Q}},d.unstable_requestPaint=function(){At=!0},d.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=Y;Y=z;try{return D()}finally{Y=Q}},d.unstable_scheduleCallback=function(z,D,Q){var rt=d.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?rt+Q:rt):Q=rt,z){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=Q+dt,z={id:V++,callback:D,priorityLevel:z,startTime:Q,expirationTime:dt,sortIndex:-1},Q>rt?(z.sortIndex=Q,S(C,z),T(_)===null&&z===T(C)&&(vt?(W(we),we=-1):vt=!0,je(ge,Q-rt))):(z.sortIndex=dt,S(_,z),st||tt||(st=!0,ne||(ne=!0,ie()))),z},d.unstable_shouldYield=Un,d.unstable_wrapCallback=function(z){var D=Y;return function(){var Q=Y;Y=D;try{return z.apply(this,arguments)}finally{Y=Q}}}})(To)),To}var Hd;function Nm(){return Hd||(Hd=1,Ao.exports=_m()),Ao.exports}var _d;function Rm(){if(_d)return wn;_d=1;var d=Nm(),S=Um(),T=Bm();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function M(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function j(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function H(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(M(t)!==t)throw Error(f(188))}function C(t){var e=t.alternate;if(!e){if(e=M(t),e===null)throw Error(f(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return _(n),t;if(i===a)return _(n),e;i=i.sibling}throw Error(f(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(f(189))}}if(l.alternate!==a)throw Error(f(190))}if(l.tag!==3)throw Error(f(188));return l.stateNode.current===l?t:e}function V(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=V(t),e!==null)return e;t=t.sibling}return null}var w=Object.assign,Y=Symbol.for("react.element"),tt=Symbol.for("react.transitional.element"),st=Symbol.for("react.portal"),vt=Symbol.for("react.fragment"),At=Symbol.for("react.strict_mode"),pt=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),ft=Symbol.for("react.context"),Dt=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),kl=Symbol.for("react.activity"),Un=Symbol.for("react.memo_cache_sentinel"),Zl=Symbol.iterator;function ie(t){return t===null||typeof t!="object"?null:(t=Zl&&t[Zl]||t["@@iterator"],typeof t=="function"?t:null)}var Bn=Symbol.for("react.client.reference");function Ba(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Bn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vt:return"Fragment";case pt:return"Profiler";case At:return"StrictMode";case ge:return"Suspense";case ne:return"SuspenseList";case kl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case st:return"Portal";case ft:return t.displayName||"Context";case W:return(t._context.displayName||"Context")+".Consumer";case Dt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case we:return e=t.displayName||null,e!==null?e:Ba(t.type)||"Memo";case ve:e=t._payload,t=t._init;try{return Ba(t(e))}catch{}}return null}var je=Array.isArray,z=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},rt=[],dt=-1;function Qt(t){return{current:t}}function yt(t){0>dt||(t.current=rt[dt],rt[dt]=null,dt--)}function et(t,e){dt++,rt[dt]=t.current,t.current=e}var Ct=Qt(null),Se=Qt(null),Je=Qt(null),Hn=Qt(null);function _n(t,e){switch(et(Je,e),et(Se,t),et(Ct,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?ld(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=ld(e),t=ad(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(Ct),et(Ct,t)}function Vl(){yt(Ct),yt(Se),yt(Je)}function lu(t){t.memoizedState!==null&&et(Hn,t);var e=Ct.current,l=ad(e,t.type);e!==l&&(et(Se,t),et(Ct,l))}function Nn(t){Se.current===t&&(yt(Ct),yt(Se)),Hn.current===t&&(yt(Hn),An._currentValue=Q)}var au,Oo;function zl(t){if(au===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||"",Oo=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+au+t+Oo}var nu=!1;function iu(t,e){if(!t||nu)return"";nu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(y){var g=y}Reflect.construct(t,[],A)}else{try{A.call()}catch(y){g=y}t.call(A.prototype)}}else{try{throw Error()}catch(y){g=y}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),p=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===p.length)for(a=s.length-1,n=p.length-1;1<=a&&0<=n&&s[a]!==p[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==p[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==p[n]){var b=`
`+s[a].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=a&&0<=n);break}}}finally{nu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?zl(l):""}function c0(t,e){switch(t.tag){case 26:case 27:case 5:return zl(t.type);case 16:return zl("Lazy");case 13:return t.child!==e&&e!==null?zl("Suspense Fallback"):zl("Suspense");case 19:return zl("SuspenseList");case 0:case 15:return iu(t.type,!1);case 11:return iu(t.type.render,!1);case 1:return iu(t.type,!0);case 31:return zl("Activity");default:return""}}function Uo(t){try{var e="",l=null;do e+=c0(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var uu=Object.prototype.hasOwnProperty,cu=d.unstable_scheduleCallback,ou=d.unstable_cancelCallback,o0=d.unstable_shouldYield,s0=d.unstable_requestPaint,Jt=d.unstable_now,f0=d.unstable_getCurrentPriorityLevel,Bo=d.unstable_ImmediatePriority,Ho=d.unstable_UserBlockingPriority,Rn=d.unstable_NormalPriority,r0=d.unstable_LowPriority,_o=d.unstable_IdlePriority,d0=d.log,h0=d.unstable_setDisableYieldValue,Ha=null,$t=null;function $e(t){if(typeof d0=="function"&&h0(t),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(Ha,t)}catch{}}var Wt=Math.clz32?Math.clz32:g0,m0=Math.log,p0=Math.LN2;function g0(t){return t>>>=0,t===0?32:31-(m0(t)/p0|0)|0}var qn=256,Qn=262144,Yn=4194304;function Al(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Gn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=Al(a):(u&=c,u!==0?n=Al(u):l||(l=c&~t,l!==0&&(n=Al(l))))):(c=a&~i,c!==0?n=Al(c):u!==0?n=Al(u):l||(l=a&~t,l!==0&&(n=Al(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function _a(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function v0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function No(){var t=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),t}function su(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Na(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function y0(t,e,l,a,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,p=t.hiddenUpdates;for(l=u&~l;0<l;){var b=31-Wt(l),A=1<<b;c[b]=0,s[b]=-1;var g=p[b];if(g!==null)for(p[b]=null,b=0;b<g.length;b++){var y=g[b];y!==null&&(y.lane&=-536870913)}l&=~A}a!==0&&Ro(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Ro(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Wt(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function qo(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Wt(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Qo(t,e){var l=e&-e;return l=(l&42)!==0?1:fu(l),(l&(t.suspendedLanes|e))!==0?0:l}function fu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ru(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Yo(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:Md(t.type))}function Go(t,e){var l=D.p;try{return D.p=t,e()}finally{D.p=l}}var We=Math.random().toString(36).slice(2),Ht="__reactFiber$"+We,Gt="__reactProps$"+We,Kl="__reactContainer$"+We,du="__reactEvents$"+We,b0="__reactListeners$"+We,x0="__reactHandles$"+We,Lo="__reactResources$"+We,Ra="__reactMarker$"+We;function hu(t){delete t[Ht],delete t[Gt],delete t[du],delete t[b0],delete t[x0]}function Jl(t){var e=t[Ht];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Kl]||l[Ht]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=fd(t);t!==null;){if(l=t[Ht])return l;t=fd(t)}return e}t=l,l=t.parentNode}return null}function $l(t){if(t=t[Ht]||t[Kl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function qa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function Wl(t){var e=t[Lo];return e||(e=t[Lo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ot(t){t[Ra]=!0}var Xo=new Set,ko={};function Tl(t,e){Fl(t,e),Fl(t+"Capture",e)}function Fl(t,e){for(ko[t]=e,t=0;t<e.length;t++)Xo.add(e[t])}var S0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zo={},Vo={};function z0(t){return uu.call(Vo,t)?!0:uu.call(Zo,t)?!1:S0.test(t)?Vo[t]=!0:(Zo[t]=!0,!1)}function Ln(t,e,l){if(z0(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Xn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function De(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ko(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function A0(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mu(t){if(!t._valueTracker){var e=Ko(t)?"checked":"value";t._valueTracker=A0(t,e,""+t[e])}}function Jo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Ko(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function kn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var T0=/[\n"\\]/g;function ce(t){return t.replace(T0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function pu(t,e,l,a,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ue(e)):t.value!==""+ue(e)&&(t.value=""+ue(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?gu(t,u,ue(e)):l!=null?gu(t,u,ue(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ue(c):t.removeAttribute("name")}function $o(t,e,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){mu(t);return}l=l!=null?""+ue(l):"",e=e!=null?""+ue(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),mu(t)}function gu(t,e,l){e==="number"&&kn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Il(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+ue(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Wo(t,e,l){if(e!=null&&(e=""+ue(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ue(l):""}function Fo(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(f(92));if(je(a)){if(1<a.length)throw Error(f(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=ue(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),mu(t)}function Pl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var E0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Io(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||E0.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Po(t,e,l){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Io(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&Io(t,i,e[i])}function vu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),w0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(t){return w0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ce(){}var yu=null;function bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ta=null,ea=null;function ts(t){var e=$l(t);if(e&&(t=e.stateNode)){var l=t[Gt]||null;t:switch(t=e.stateNode,e.type){case"input":if(pu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ce(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Gt]||null;if(!n)throw Error(f(90));pu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Jo(a)}break t;case"textarea":Wo(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Il(t,!!l.multiple,e,!1)}}}var xu=!1;function es(t,e,l){if(xu)return t(e,l);xu=!0;try{var a=t(e);return a}finally{if(xu=!1,(ta!==null||ea!==null)&&(Ui(),ta&&(e=ta,t=ea,ea=ta=null,ts(e),t)))for(e=0;e<t.length;e++)ts(t[e])}}function Qa(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Gt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(f(231,e,typeof l));return l}var Oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Oe)try{var Ya={};Object.defineProperty(Ya,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Ya,Ya),window.removeEventListener("test",Ya,Ya)}catch{Su=!1}var Fe=null,zu=null,Vn=null;function ls(){if(Vn)return Vn;var t,e=zu,l=e.length,a,n="value"in Fe?Fe.value:Fe.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===n[i-a];a++);return Vn=n.slice(t,1<a?1-a:void 0)}function Kn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jn(){return!0}function as(){return!1}function Lt(t){function e(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jn:as,this.isPropagationStopped=as,this}return w(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),e}var El={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=Lt(El),Ga=w({},El,{view:0,detail:0}),j0=Lt(Ga),Au,Tu,La,Wn=w({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==La&&(La&&t.type==="mousemove"?(Au=t.screenX-La.screenX,Tu=t.screenY-La.screenY):Tu=Au=0,La=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),ns=Lt(Wn),D0=w({},Wn,{dataTransfer:0}),C0=Lt(D0),O0=w({},Ga,{relatedTarget:0}),Eu=Lt(O0),U0=w({},El,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=Lt(U0),H0=w({},El,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_0=Lt(H0),N0=w({},El,{data:0}),is=Lt(N0),R0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q0[t])?!!e[t]:!1}function Mu(){return Y0}var G0=w({},Ga,{key:function(t){if(t.key){var e=R0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?q0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?Kn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L0=Lt(G0),X0=w({},Wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),us=Lt(X0),k0=w({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Z0=Lt(k0),V0=w({},El,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=Lt(V0),J0=w({},Wn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=Lt(J0),W0=w({},El,{newState:0,oldState:0}),F0=Lt(W0),I0=[9,13,27,32],wu=Oe&&"CompositionEvent"in window,Xa=null;Oe&&"documentMode"in document&&(Xa=document.documentMode);var P0=Oe&&"TextEvent"in window&&!Xa,cs=Oe&&(!wu||Xa&&8<Xa&&11>=Xa),os=" ",ss=!1;function fs(t,e){switch(t){case"keyup":return I0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var la=!1;function th(t,e){switch(t){case"compositionend":return rs(e);case"keypress":return e.which!==32?null:(ss=!0,os);case"textInput":return t=e.data,t===os&&ss?null:t;default:return null}}function eh(t,e){if(la)return t==="compositionend"||!wu&&fs(t,e)?(t=ls(),Vn=zu=Fe=null,la=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cs&&e.locale!=="ko"?null:e.data;default:return null}}var lh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ds(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lh[t.type]:e==="textarea"}function hs(t,e,l,a){ta?ea?ea.push(a):ea=[a]:ta=a,e=Qi(e,"onChange"),0<e.length&&(l=new $n("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var ka=null,Za=null;function ah(t){Wr(t,0)}function Fn(t){var e=qa(t);if(Jo(e))return t}function ms(t,e){if(t==="change")return e}var ps=!1;if(Oe){var ju;if(Oe){var Du="oninput"in document;if(!Du){var gs=document.createElement("div");gs.setAttribute("oninput","return;"),Du=typeof gs.oninput=="function"}ju=Du}else ju=!1;ps=ju&&(!document.documentMode||9<document.documentMode)}function vs(){ka&&(ka.detachEvent("onpropertychange",ys),Za=ka=null)}function ys(t){if(t.propertyName==="value"&&Fn(Za)){var e=[];hs(e,Za,t,bu(t)),es(ah,e)}}function nh(t,e,l){t==="focusin"?(vs(),ka=e,Za=l,ka.attachEvent("onpropertychange",ys)):t==="focusout"&&vs()}function ih(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fn(Za)}function uh(t,e){if(t==="click")return Fn(e)}function ch(t,e){if(t==="input"||t==="change")return Fn(e)}function oh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:oh;function Va(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!uu.call(e,n)||!Ft(t[n],e[n]))return!1}return!0}function bs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xs(t,e){var l=bs(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=bs(l)}}function Ss(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ss(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=kn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=kn(t.document)}return e}function Cu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var sh=Oe&&"documentMode"in document&&11>=document.documentMode,aa=null,Ou=null,Ka=null,Uu=!1;function As(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Uu||aa==null||aa!==kn(a)||(a=aa,"selectionStart"in a&&Cu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ka&&Va(Ka,a)||(Ka=a,a=Qi(Ou,"onSelect"),0<a.length&&(e=new $n("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=aa)))}function Ml(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var na={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionrun:Ml("Transition","TransitionRun"),transitionstart:Ml("Transition","TransitionStart"),transitioncancel:Ml("Transition","TransitionCancel"),transitionend:Ml("Transition","TransitionEnd")},Bu={},Ts={};Oe&&(Ts=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function wl(t){if(Bu[t])return Bu[t];if(!na[t])return t;var e=na[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Ts)return Bu[t]=e[l];return t}var Es=wl("animationend"),Ms=wl("animationiteration"),ws=wl("animationstart"),fh=wl("transitionrun"),rh=wl("transitionstart"),dh=wl("transitioncancel"),js=wl("transitionend"),Ds=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function ye(t,e){Ds.set(t,e),Tl(e,[t])}var In=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oe=[],ia=0,_u=0;function Pn(){for(var t=ia,e=_u=ia=0;e<t;){var l=oe[e];oe[e++]=null;var a=oe[e];oe[e++]=null;var n=oe[e];oe[e++]=null;var i=oe[e];if(oe[e++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Cs(l,n,i)}}function ti(t,e,l,a){oe[ia++]=t,oe[ia++]=e,oe[ia++]=l,oe[ia++]=a,_u|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Nu(t,e,l,a){return ti(t,e,l,a),ei(t)}function jl(t,e){return ti(t,null,null,e),ei(t)}function Cs(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Wt(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function ei(t){if(50<gn)throw gn=0,Zc=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ua={};function hh(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,e,l,a){return new hh(t,e,l,a)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ue(t,e){var l=t.alternate;return l===null?(l=It(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Os(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function li(t,e,l,a,n,i){var u=0;if(a=t,typeof t=="function")Ru(t)&&(u=1);else if(typeof t=="string")u=ym(t,l,Ct.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case kl:return t=It(31,l,e,n),t.elementType=kl,t.lanes=i,t;case vt:return Dl(l.children,n,i,e);case At:u=8,n|=24;break;case pt:return t=It(12,l,e,n|2),t.elementType=pt,t.lanes=i,t;case ge:return t=It(13,l,e,n),t.elementType=ge,t.lanes=i,t;case ne:return t=It(19,l,e,n),t.elementType=ne,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ft:u=10;break t;case W:u=9;break t;case Dt:u=11;break t;case we:u=14;break t;case ve:u=16,a=null;break t}u=29,l=Error(f(130,t===null?"null":typeof t,"")),a=null}return e=It(u,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function Dl(t,e,l,a){return t=It(7,t,a,e),t.lanes=l,t}function qu(t,e,l){return t=It(6,t,null,e),t.lanes=l,t}function Us(t){var e=It(18,null,null,0);return e.stateNode=t,e}function Qu(t,e,l){return e=It(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Bs=new WeakMap;function se(t,e){if(typeof t=="object"&&t!==null){var l=Bs.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Uo(e)},Bs.set(t,e),e)}return{value:t,source:e,stack:Uo(e)}}var ca=[],oa=0,ai=null,Ja=0,fe=[],re=0,Ie=null,ze=1,Ae="";function Be(t,e){ca[oa++]=Ja,ca[oa++]=ai,ai=t,Ja=e}function Hs(t,e,l){fe[re++]=ze,fe[re++]=Ae,fe[re++]=Ie,Ie=t;var a=ze;t=Ae;var n=32-Wt(a)-1;a&=~(1<<n),l+=1;var i=32-Wt(e)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,ze=1<<32-Wt(e)+n|l<<n|a,Ae=i+t}else ze=1<<i|l<<n|a,Ae=t}function Yu(t){t.return!==null&&(Be(t,1),Hs(t,1,0))}function Gu(t){for(;t===ai;)ai=ca[--oa],ca[oa]=null,Ja=ca[--oa],ca[oa]=null;for(;t===Ie;)Ie=fe[--re],fe[re]=null,Ae=fe[--re],fe[re]=null,ze=fe[--re],fe[re]=null}function _s(t,e){fe[re++]=ze,fe[re++]=Ae,fe[re++]=Ie,ze=e.id,Ae=e.overflow,Ie=t}var _t=null,ht=null,$=!1,Pe=null,de=!1,Lu=Error(f(519));function tl(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $a(se(e,t)),Lu}function Ns(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Ht]=t,e[Gt]=a,l){case"dialog":Z("cancel",e),Z("close",e);break;case"iframe":case"object":case"embed":Z("load",e);break;case"video":case"audio":for(l=0;l<yn.length;l++)Z(yn[l],e);break;case"source":Z("error",e);break;case"img":case"image":case"link":Z("error",e),Z("load",e);break;case"details":Z("toggle",e);break;case"input":Z("invalid",e),$o(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Z("invalid",e);break;case"textarea":Z("invalid",e),Fo(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||td(e.textContent,l)?(a.popover!=null&&(Z("beforetoggle",e),Z("toggle",e)),a.onScroll!=null&&Z("scroll",e),a.onScrollEnd!=null&&Z("scrollend",e),a.onClick!=null&&(e.onclick=Ce),e=!0):e=!1,e||tl(t,!0)}function Rs(t){for(_t=t.return;_t;)switch(_t.tag){case 5:case 31:case 13:de=!1;return;case 27:case 3:de=!0;return;default:_t=_t.return}}function sa(t){if(t!==_t)return!1;if(!$)return Rs(t),$=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||uo(t.type,t.memoizedProps)),l=!l),l&&ht&&tl(t),Rs(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));ht=sd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));ht=sd(t)}else e===27?(e=ht,ml(t.type)?(t=ro,ro=null,ht=t):ht=e):ht=_t?me(t.stateNode.nextSibling):null;return!0}function Cl(){ht=_t=null,$=!1}function Xu(){var t=Pe;return t!==null&&(Vt===null?Vt=t:Vt.push.apply(Vt,t),Pe=null),t}function $a(t){Pe===null?Pe=[t]:Pe.push(t)}var ku=Qt(null),Ol=null,He=null;function el(t,e,l){et(ku,e._currentValue),e._currentValue=l}function _e(t){t._currentValue=ku.current,yt(ku)}function Zu(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Vu(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var s=0;s<e.length;s++)if(c.context===e[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Zu(i.return,l,t),a||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(f(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Zu(u,l,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function fa(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(f(387));if(u=u.memoizedProps,u!==null){var c=n.type;Ft(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===Hn.current){if(u=n.alternate,u===null)throw Error(f(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(An):t=[An])}n=n.return}t!==null&&Vu(e,t,l,a),e.flags|=262144}function ni(t){for(t=t.firstContext;t!==null;){if(!Ft(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ul(t){Ol=t,He=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nt(t){return qs(Ol,t)}function ii(t,e){return Ol===null&&Ul(t),qs(t,e)}function qs(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},He===null){if(t===null)throw Error(f(308));He=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else He=He.next=e;return l}var mh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},ph=d.unstable_scheduleCallback,gh=d.unstable_NormalPriority,Tt={$$typeof:ft,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new mh,data:new Map,refCount:0}}function Wa(t){t.refCount--,t.refCount===0&&ph(gh,function(){t.controller.abort()})}var Fa=null,Ju=0,ra=0,da=null;function vh(t,e){if(Fa===null){var l=Fa=[];Ju=0,ra=Fc(),da={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ju++,e.then(Qs,Qs),e}function Qs(){if(--Ju===0&&Fa!==null){da!==null&&(da.status="fulfilled");var t=Fa;Fa=null,ra=0,da=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function yh(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Ys=z.S;z.S=function(t,e){Tr=Jt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&vh(t,e),Ys!==null&&Ys(t,e)};var Bl=Qt(null);function $u(){var t=Bl.current;return t!==null?t:ot.pooledCache}function ui(t,e){e===null?et(Bl,Bl.current):et(Bl,e.pool)}function Gs(){var t=$u();return t===null?null:{parent:Tt._currentValue,pool:t}}var ha=Error(f(460)),Wu=Error(f(474)),ci=Error(f(542)),oi={then:function(){}};function Ls(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xs(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ce,Ce),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zs(t),t;default:if(typeof e.status=="string")e.then(Ce,Ce);else{if(t=ot,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zs(t),t}throw _l=e,ha}}function Hl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(_l=l,ha):l}}var _l=null;function ks(){if(_l===null)throw Error(f(459));var t=_l;return _l=null,t}function Zs(t){if(t===ha||t===ci)throw Error(f(483))}var ma=null,Ia=0;function si(t){var e=Ia;return Ia+=1,ma===null&&(ma=[]),Xs(ma,t,e)}function Pa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function fi(t,e){throw e.$$typeof===Y?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Vs(t){function e(h,r){if(t){var m=h.deletions;m===null?(h.deletions=[r],h.flags|=16):m.push(r)}}function l(h,r){if(!t)return null;for(;r!==null;)e(h,r),r=r.sibling;return null}function a(h){for(var r=new Map;h!==null;)h.key!==null?r.set(h.key,h):r.set(h.index,h),h=h.sibling;return r}function n(h,r){return h=Ue(h,r),h.index=0,h.sibling=null,h}function i(h,r,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<r?(h.flags|=67108866,r):m):(h.flags|=67108866,r)):(h.flags|=1048576,r)}function u(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function c(h,r,m,x){return r===null||r.tag!==6?(r=qu(m,h.mode,x),r.return=h,r):(r=n(r,m),r.return=h,r)}function s(h,r,m,x){var B=m.type;return B===vt?b(h,r,m.props.children,x,m.key):r!==null&&(r.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ve&&Hl(B)===r.type)?(r=n(r,m.props),Pa(r,m),r.return=h,r):(r=li(m.type,m.key,m.props,null,h.mode,x),Pa(r,m),r.return=h,r)}function p(h,r,m,x){return r===null||r.tag!==4||r.stateNode.containerInfo!==m.containerInfo||r.stateNode.implementation!==m.implementation?(r=Qu(m,h.mode,x),r.return=h,r):(r=n(r,m.children||[]),r.return=h,r)}function b(h,r,m,x,B){return r===null||r.tag!==7?(r=Dl(m,h.mode,x,B),r.return=h,r):(r=n(r,m),r.return=h,r)}function A(h,r,m){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=qu(""+r,h.mode,m),r.return=h,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case tt:return m=li(r.type,r.key,r.props,null,h.mode,m),Pa(m,r),m.return=h,m;case st:return r=Qu(r,h.mode,m),r.return=h,r;case ve:return r=Hl(r),A(h,r,m)}if(je(r)||ie(r))return r=Dl(r,h.mode,m,null),r.return=h,r;if(typeof r.then=="function")return A(h,si(r),m);if(r.$$typeof===ft)return A(h,ii(h,r),m);fi(h,r)}return null}function g(h,r,m,x){var B=r!==null?r.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return B!==null?null:c(h,r,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case tt:return m.key===B?s(h,r,m,x):null;case st:return m.key===B?p(h,r,m,x):null;case ve:return m=Hl(m),g(h,r,m,x)}if(je(m)||ie(m))return B!==null?null:b(h,r,m,x,null);if(typeof m.then=="function")return g(h,r,si(m),x);if(m.$$typeof===ft)return g(h,r,ii(h,m),x);fi(h,m)}return null}function y(h,r,m,x,B){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return h=h.get(m)||null,c(r,h,""+x,B);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case tt:return h=h.get(x.key===null?m:x.key)||null,s(r,h,x,B);case st:return h=h.get(x.key===null?m:x.key)||null,p(r,h,x,B);case ve:return x=Hl(x),y(h,r,m,x,B)}if(je(x)||ie(x))return h=h.get(m)||null,b(r,h,x,B,null);if(typeof x.then=="function")return y(h,r,m,si(x),B);if(x.$$typeof===ft)return y(h,r,m,ii(r,x),B);fi(r,x)}return null}function O(h,r,m,x){for(var B=null,F=null,U=r,L=r=0,J=null;U!==null&&L<m.length;L++){U.index>L?(J=U,U=null):J=U.sibling;var I=g(h,U,m[L],x);if(I===null){U===null&&(U=J);break}t&&U&&I.alternate===null&&e(h,U),r=i(I,r,L),F===null?B=I:F.sibling=I,F=I,U=J}if(L===m.length)return l(h,U),$&&Be(h,L),B;if(U===null){for(;L<m.length;L++)U=A(h,m[L],x),U!==null&&(r=i(U,r,L),F===null?B=U:F.sibling=U,F=U);return $&&Be(h,L),B}for(U=a(U);L<m.length;L++)J=y(U,h,L,m[L],x),J!==null&&(t&&J.alternate!==null&&U.delete(J.key===null?L:J.key),r=i(J,r,L),F===null?B=J:F.sibling=J,F=J);return t&&U.forEach(function(bl){return e(h,bl)}),$&&Be(h,L),B}function N(h,r,m,x){if(m==null)throw Error(f(151));for(var B=null,F=null,U=r,L=r=0,J=null,I=m.next();U!==null&&!I.done;L++,I=m.next()){U.index>L?(J=U,U=null):J=U.sibling;var bl=g(h,U,I.value,x);if(bl===null){U===null&&(U=J);break}t&&U&&bl.alternate===null&&e(h,U),r=i(bl,r,L),F===null?B=bl:F.sibling=bl,F=bl,U=J}if(I.done)return l(h,U),$&&Be(h,L),B;if(U===null){for(;!I.done;L++,I=m.next())I=A(h,I.value,x),I!==null&&(r=i(I,r,L),F===null?B=I:F.sibling=I,F=I);return $&&Be(h,L),B}for(U=a(U);!I.done;L++,I=m.next())I=y(U,h,L,I.value,x),I!==null&&(t&&I.alternate!==null&&U.delete(I.key===null?L:I.key),r=i(I,r,L),F===null?B=I:F.sibling=I,F=I);return t&&U.forEach(function(Dm){return e(h,Dm)}),$&&Be(h,L),B}function ct(h,r,m,x){if(typeof m=="object"&&m!==null&&m.type===vt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case tt:t:{for(var B=m.key;r!==null;){if(r.key===B){if(B=m.type,B===vt){if(r.tag===7){l(h,r.sibling),x=n(r,m.props.children),x.return=h,h=x;break t}}else if(r.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ve&&Hl(B)===r.type){l(h,r.sibling),x=n(r,m.props),Pa(x,m),x.return=h,h=x;break t}l(h,r);break}else e(h,r);r=r.sibling}m.type===vt?(x=Dl(m.props.children,h.mode,x,m.key),x.return=h,h=x):(x=li(m.type,m.key,m.props,null,h.mode,x),Pa(x,m),x.return=h,h=x)}return u(h);case st:t:{for(B=m.key;r!==null;){if(r.key===B)if(r.tag===4&&r.stateNode.containerInfo===m.containerInfo&&r.stateNode.implementation===m.implementation){l(h,r.sibling),x=n(r,m.children||[]),x.return=h,h=x;break t}else{l(h,r);break}else e(h,r);r=r.sibling}x=Qu(m,h.mode,x),x.return=h,h=x}return u(h);case ve:return m=Hl(m),ct(h,r,m,x)}if(je(m))return O(h,r,m,x);if(ie(m)){if(B=ie(m),typeof B!="function")throw Error(f(150));return m=B.call(m),N(h,r,m,x)}if(typeof m.then=="function")return ct(h,r,si(m),x);if(m.$$typeof===ft)return ct(h,r,ii(h,m),x);fi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,r!==null&&r.tag===6?(l(h,r.sibling),x=n(r,m),x.return=h,h=x):(l(h,r),x=qu(m,h.mode,x),x.return=h,h=x),u(h)):l(h,r)}return function(h,r,m,x){try{Ia=0;var B=ct(h,r,m,x);return ma=null,B}catch(U){if(U===ha||U===ci)throw U;var F=It(29,U,null,h.mode);return F.lanes=x,F.return=h,F}finally{}}}var Nl=Vs(!0),Ks=Vs(!1),ll=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function al(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function nl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(P&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=ei(t),Cs(t,null,l),e}return ti(t,a,e,l),ei(t)}function tn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,qo(t,l)}}function Pu(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var tc=!1;function en(){if(tc){var t=da;if(t!==null)throw t}}function ln(t,e,l,a){tc=!1;var n=t.updateQueue;ll=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,p=s.next;s.next=null,u===null?i=p:u.next=p,u=s;var b=t.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==u&&(c===null?b.firstBaseUpdate=p:c.next=p,b.lastBaseUpdate=s))}if(i!==null){var A=n.baseState;u=0,b=p=s=null,c=i;do{var g=c.lane&-536870913,y=g!==c.lane;if(y?(K&g)===g:(a&g)===g){g!==0&&g===ra&&(tc=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var O=t,N=c;g=e;var ct=l;switch(N.tag){case 1:if(O=N.payload,typeof O=="function"){A=O.call(ct,A,g);break t}A=O;break t;case 3:O.flags=O.flags&-65537|128;case 0:if(O=N.payload,g=typeof O=="function"?O.call(ct,A,g):O,g==null)break t;A=w({},A,g);break t;case 2:ll=!0}}g=c.callback,g!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[g]:y.push(g))}else y={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(p=b=y,s=A):b=b.next=y,u|=g;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);b===null&&(s=A),n.baseState=s,n.firstBaseUpdate=p,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),sl|=u,t.lanes=u,t.memoizedState=A}}function Js(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function $s(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Js(l[t],e)}var pa=Qt(null),ri=Qt(0);function Ws(t,e){t=ke,et(ri,t),et(pa,e),ke=t|e.baseLanes}function ec(){et(ri,ke),et(pa,pa.current)}function lc(){ke=ri.current,yt(pa),yt(ri)}var Pt=Qt(null),he=null;function il(t){var e=t.alternate;et(St,St.current&1),et(Pt,t),he===null&&(e===null||pa.current!==null||e.memoizedState!==null)&&(he=t)}function ac(t){et(St,St.current),et(Pt,t),he===null&&(he=t)}function Fs(t){t.tag===22?(et(St,St.current),et(Pt,t),he===null&&(he=t)):ul()}function ul(){et(St,St.current),et(Pt,Pt.current)}function te(t){yt(Pt),he===t&&(he=null),yt(St)}var St=Qt(0);function di(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||so(l)||fo(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ne=0,G=null,it=null,Et=null,hi=!1,ga=!1,Rl=!1,mi=0,an=0,va=null,bh=0;function bt(){throw Error(f(321))}function nc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Ft(t[l],e[l]))return!1;return!0}function ic(t,e,l,a,n,i){return Ne=i,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?_f:xc,Rl=!1,i=l(a,n),Rl=!1,ga&&(i=Ps(e,l,a,n)),Is(t),i}function Is(t){z.H=cn;var e=it!==null&&it.next!==null;if(Ne=0,Et=it=G=null,hi=!1,an=0,va=null,e)throw Error(f(300));t===null||Mt||(t=t.dependencies,t!==null&&ni(t)&&(Mt=!0))}function Ps(t,e,l,a){G=t;var n=0;do{if(ga&&(va=null),an=0,ga=!1,25<=n)throw Error(f(301));if(n+=1,Et=it=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Nf,i=e(l,a)}while(ga);return i}function xh(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?nn(e):e,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(G.flags|=1024),e}function uc(){var t=mi!==0;return mi=0,t}function cc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function oc(t){if(hi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}hi=!1}Ne=0,Et=it=G=null,ga=!1,an=mi=0,va=null}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?G.memoizedState=Et=t:Et=Et.next=t,Et}function zt(){if(it===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=Et===null?G.memoizedState:Et.next;if(e!==null)Et=e,it=t;else{if(t===null)throw G.alternate===null?Error(f(467)):Error(f(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Et===null?G.memoizedState=Et=t:Et=Et.next=t}return Et}function pi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(t){var e=an;return an+=1,va===null&&(va=[]),t=Xs(va,t,e),e=G,(Et===null?e.memoizedState:Et.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?_f:xc),t}function gi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nn(t);if(t.$$typeof===ft)return Nt(t)}throw Error(f(438,String(t)))}function sc(t){var e=null,l=G.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=G.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=pi(),G.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Un;return e.index++,l}function Re(t,e){return typeof e=="function"?e(t):e}function vi(t){var e=zt();return fc(e,it,t)}function fc(t,e,l){var a=t.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,s=null,p=e,b=!1;do{var A=p.lane&-536870913;if(A!==p.lane?(K&A)===A:(Ne&A)===A){var g=p.revertLane;if(g===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),A===ra&&(b=!0);else if((Ne&g)===g){p=p.next,g===ra&&(b=!0);continue}else A={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(c=s=A,u=i):s=s.next=A,G.lanes|=g,sl|=g;A=p.action,Rl&&l(i,A),i=p.hasEagerState?p.eagerState:l(i,A)}else g={lane:A,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(c=s=g,u=i):s=s.next=g,G.lanes|=A,sl|=A;p=p.next}while(p!==null&&p!==e);if(s===null?u=i:s.next=c,!Ft(i,t.memoizedState)&&(Mt=!0,b&&(l=da,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function rc(t){var e=zt(),l=e.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Ft(i,e.memoizedState)||(Mt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function tf(t,e,l){var a=G,n=zt(),i=$;if(i){if(l===void 0)throw Error(f(407));l=l()}else l=e();var u=!Ft((it||n).memoizedState,l);if(u&&(n.memoizedState=l,Mt=!0),n=n.queue,mc(af.bind(null,a,n,t),[t]),n.getSnapshot!==e||u||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ya(9,{destroy:void 0},lf.bind(null,a,n,l,e),null),ot===null)throw Error(f(349));i||(Ne&127)!==0||ef(a,e,l)}return l}function ef(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=G.updateQueue,e===null?(e=pi(),G.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function lf(t,e,l,a){e.value=l,e.getSnapshot=a,nf(e)&&uf(t)}function af(t,e,l){return l(function(){nf(e)&&uf(t)})}function nf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Ft(t,l)}catch{return!0}}function uf(t){var e=jl(t,2);e!==null&&Kt(e,t,2)}function dc(t){var e=Yt();if(typeof t=="function"){var l=t;if(t=l(),Rl){$e(!0);try{l()}finally{$e(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:t},e}function cf(t,e,l,a){return t.baseState=l,fc(t,it,typeof a=="function"?a:Re)}function Sh(t,e,l,a,n){if(xi(t))throw Error(f(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,of(e,i)):(i.next=l.next,e.pending=l.next=i)}}function of(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=z.T,u={};z.T=u;try{var c=l(n,a),s=z.S;s!==null&&s(u,c),sf(t,e,c)}catch(p){hc(t,e,p)}finally{i!==null&&u.types!==null&&(i.types=u.types),z.T=i}}else try{i=l(n,a),sf(t,e,i)}catch(p){hc(t,e,p)}}function sf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){ff(t,e,a)},function(a){return hc(t,e,a)}):ff(t,e,l)}function ff(t,e,l){e.status="fulfilled",e.value=l,rf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,of(t,l)))}function hc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,rf(e),e=e.next;while(e!==a)}t.action=null}function rf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function df(t,e){return e}function hf(t,e){if($){var l=ot.formState;if(l!==null){t:{var a=G;if($){if(ht){e:{for(var n=ht,i=de;n.nodeType!==8;){if(!i){n=null;break e}if(n=me(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ht=me(n.nextSibling),a=n.data==="F!";break t}}tl(a)}a=!1}a&&(e=l[0])}}return l=Yt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:df,lastRenderedState:e},l.queue=a,l=Uf.bind(null,G,a),a.dispatch=l,a=dc(!1),i=bc.bind(null,G,!1,a.queue),a=Yt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Sh.bind(null,G,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function mf(t){var e=zt();return pf(e,it,t)}function pf(t,e,l){if(e=fc(t,e,df)[0],t=vi(Re)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=nn(e)}catch(u){throw u===ha?ci:u}else a=e;e=zt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(G.flags|=2048,ya(9,{destroy:void 0},zh.bind(null,n,l),null)),[a,i,t]}function zh(t,e){t.action=e}function gf(t){var e=zt(),l=it;if(l!==null)return pf(e,l,t);zt(),e=e.memoizedState,l=zt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ya(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=G.updateQueue,e===null&&(e=pi(),G.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function vf(){return zt().memoizedState}function yi(t,e,l,a){var n=Yt();G.flags|=t,n.memoizedState=ya(1|e,{destroy:void 0},l,a===void 0?null:a)}function bi(t,e,l,a){var n=zt();a=a===void 0?null:a;var i=n.memoizedState.inst;it!==null&&a!==null&&nc(a,it.memoizedState.deps)?n.memoizedState=ya(e,i,l,a):(G.flags|=t,n.memoizedState=ya(1|e,i,l,a))}function yf(t,e){yi(8390656,8,t,e)}function mc(t,e){bi(2048,8,t,e)}function Ah(t){G.flags|=4;var e=G.updateQueue;if(e===null)e=pi(),G.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function bf(t){var e=zt().memoizedState;return Ah({ref:e,nextImpl:t}),function(){if((P&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function xf(t,e){return bi(4,2,t,e)}function Sf(t,e){return bi(4,4,t,e)}function zf(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Af(t,e,l){l=l!=null?l.concat([t]):null,bi(4,4,zf.bind(null,e,t),l)}function pc(){}function Tf(t,e){var l=zt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&nc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Ef(t,e){var l=zt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&nc(e,a[1]))return a[0];if(a=t(),Rl){$e(!0);try{t()}finally{$e(!1)}}return l.memoizedState=[a,e],a}function gc(t,e,l){return l===void 0||(Ne&1073741824)!==0&&(K&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=Mr(),G.lanes|=t,sl|=t,l)}function Mf(t,e,l,a){return Ft(l,e)?l:pa.current!==null?(t=gc(t,l,a),Ft(t,e)||(Mt=!0),t):(Ne&42)===0||(Ne&1073741824)!==0&&(K&261930)===0?(Mt=!0,t.memoizedState=l):(t=Mr(),G.lanes|=t,sl|=t,e)}function wf(t,e,l,a,n){var i=D.p;D.p=i!==0&&8>i?i:8;var u=z.T,c={};z.T=c,bc(t,!1,e,l);try{var s=n(),p=z.S;if(p!==null&&p(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var b=yh(s,a);un(t,e,b,ae(t))}else un(t,e,a,ae(t))}catch(A){un(t,e,{then:function(){},status:"rejected",reason:A},ae())}finally{D.p=i,u!==null&&c.types!==null&&(u.types=c.types),z.T=u}}function Th(){}function vc(t,e,l,a){if(t.tag!==5)throw Error(f(476));var n=jf(t).queue;wf(t,n,e,Q,l===null?Th:function(){return Df(t),l(a)})}function jf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:Q},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Df(t){var e=jf(t);e.next===null&&(e=t.alternate.memoizedState),un(t,e.next.queue,{},ae())}function yc(){return Nt(An)}function Cf(){return zt().memoizedState}function Of(){return zt().memoizedState}function Eh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ae();t=al(l);var a=nl(e,t,l);a!==null&&(Kt(a,e,l),tn(a,e,l)),e={cache:Ku()},t.payload=e;return}e=e.return}}function Mh(t,e,l){var a=ae();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},xi(t)?Bf(e,l):(l=Nu(t,e,l,a),l!==null&&(Kt(l,t,a),Hf(l,e,a)))}function Uf(t,e,l){var a=ae();un(t,e,l,a)}function un(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(xi(t))Bf(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,Ft(c,u))return ti(t,e,n,0),ot===null&&Pn(),!1}catch{}finally{}if(l=Nu(t,e,n,a),l!==null)return Kt(l,t,a),Hf(l,e,a),!0}return!1}function bc(t,e,l,a){if(a={lane:2,revertLane:Fc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xi(t)){if(e)throw Error(f(479))}else e=Nu(t,l,a,2),e!==null&&Kt(e,t,2)}function xi(t){var e=t.alternate;return t===G||e!==null&&e===G}function Bf(t,e){ga=hi=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Hf(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,qo(t,l)}}var cn={readContext:Nt,use:gi,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt};cn.useEffectEvent=bt;var _f={readContext:Nt,use:gi,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:yf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,yi(4194308,4,zf.bind(null,e,t),l)},useLayoutEffect:function(t,e){return yi(4194308,4,t,e)},useInsertionEffect:function(t,e){yi(4,2,t,e)},useMemo:function(t,e){var l=Yt();e=e===void 0?null:e;var a=t();if(Rl){$e(!0);try{t()}finally{$e(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Yt();if(l!==void 0){var n=l(e);if(Rl){$e(!0);try{l(e)}finally{$e(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=Mh.bind(null,G,t),[a.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:function(t){t=dc(t);var e=t.queue,l=Uf.bind(null,G,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:pc,useDeferredValue:function(t,e){var l=Yt();return gc(l,t,e)},useTransition:function(){var t=dc(!1);return t=wf.bind(null,G,t.queue,!0,!1),Yt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=G,n=Yt();if($){if(l===void 0)throw Error(f(407));l=l()}else{if(l=e(),ot===null)throw Error(f(349));(K&127)!==0||ef(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,yf(af.bind(null,a,i,t),[t]),a.flags|=2048,ya(9,{destroy:void 0},lf.bind(null,a,i,l,e),null),l},useId:function(){var t=Yt(),e=ot.identifierPrefix;if($){var l=Ae,a=ze;l=(a&~(1<<32-Wt(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=mi++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=bh++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:yc,useFormState:hf,useActionState:hf,useOptimistic:function(t){var e=Yt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=bc.bind(null,G,!0,l),l.dispatch=e,[t,e]},useMemoCache:sc,useCacheRefresh:function(){return Yt().memoizedState=Eh.bind(null,G)},useEffectEvent:function(t){var e=Yt(),l={impl:t};return e.memoizedState=l,function(){if((P&2)!==0)throw Error(f(440));return l.impl.apply(void 0,arguments)}}},xc={readContext:Nt,use:gi,useCallback:Tf,useContext:Nt,useEffect:mc,useImperativeHandle:Af,useInsertionEffect:xf,useLayoutEffect:Sf,useMemo:Ef,useReducer:vi,useRef:vf,useState:function(){return vi(Re)},useDebugValue:pc,useDeferredValue:function(t,e){var l=zt();return Mf(l,it.memoizedState,t,e)},useTransition:function(){var t=vi(Re)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:tf,useId:Cf,useHostTransitionStatus:yc,useFormState:mf,useActionState:mf,useOptimistic:function(t,e){var l=zt();return cf(l,it,t,e)},useMemoCache:sc,useCacheRefresh:Of};xc.useEffectEvent=bf;var Nf={readContext:Nt,use:gi,useCallback:Tf,useContext:Nt,useEffect:mc,useImperativeHandle:Af,useInsertionEffect:xf,useLayoutEffect:Sf,useMemo:Ef,useReducer:rc,useRef:vf,useState:function(){return rc(Re)},useDebugValue:pc,useDeferredValue:function(t,e){var l=zt();return it===null?gc(l,t,e):Mf(l,it.memoizedState,t,e)},useTransition:function(){var t=rc(Re)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:tf,useId:Cf,useHostTransitionStatus:yc,useFormState:gf,useActionState:gf,useOptimistic:function(t,e){var l=zt();return it!==null?cf(l,it,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:sc,useCacheRefresh:Of};Nf.useEffectEvent=bf;function Sc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:w({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var zc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ae(),n=al(a);n.payload=e,l!=null&&(n.callback=l),e=nl(t,n,a),e!==null&&(Kt(e,t,a),tn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ae(),n=al(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=nl(t,n,a),e!==null&&(Kt(e,t,a),tn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ae(),a=al(l);a.tag=2,e!=null&&(a.callback=e),e=nl(t,a,l),e!==null&&(Kt(e,t,l),tn(e,t,l))}};function Rf(t,e,l,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):e.prototype&&e.prototype.isPureReactComponent?!Va(l,a)||!Va(n,i):!0}function qf(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&zc.enqueueReplaceState(e,e.state,null)}function ql(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=w({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Qf(t){In(t)}function Yf(t){console.error(t)}function Gf(t){In(t)}function Si(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Lf(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ac(t,e,l){return l=al(l),l.tag=3,l.payload={element:null},l.callback=function(){Si(t,e)},l}function Xf(t){return t=al(t),t.tag=3,t}function kf(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Lf(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Lf(e,l,a),typeof n!="function"&&(fl===null?fl=new Set([this]):fl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function wh(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&fa(e,l,n,!0),l=Pt.current,l!==null){switch(l.tag){case 31:case 13:return he===null?Bi():l.alternate===null&&xt===0&&(xt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===oi?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Jc(t,a,n)),!1;case 22:return l.flags|=65536,a===oi?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Jc(t,a,n)),!1}throw Error(f(435,l.tag))}return Jc(t,a,n),Bi(),!1}if($)return e=Pt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Lu&&(t=Error(f(422),{cause:a}),$a(se(t,l)))):(a!==Lu&&(e=Error(f(423),{cause:a}),$a(se(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=se(a,l),n=Ac(t.stateNode,a,n),Pu(t,n),xt!==4&&(xt=2)),!1;var i=Error(f(520),{cause:a});if(i=se(i,l),pn===null?pn=[i]:pn.push(i),xt!==4&&(xt=2),e===null)return!0;a=se(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=Ac(l.stateNode,a,t),Pu(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(fl===null||!fl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Xf(n),kf(n,t,l,a),Pu(l,n),!1}l=l.return}while(l!==null);return!1}var Tc=Error(f(461)),Mt=!1;function Rt(t,e,l,a){e.child=t===null?Ks(e,null,l,a):Nl(e,t.child,l,a)}function Zf(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return Ul(e),a=ic(t,e,l,u,i,n),c=uc(),t!==null&&!Mt?(cc(t,e,n),qe(t,e,n)):($&&c&&Yu(e),e.flags|=1,Rt(t,e,a,n),e.child)}function Vf(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Ru(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Kf(t,e,i,a,n)):(t=li(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Uc(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Va,l(u,a)&&t.ref===e.ref)return qe(t,e,n)}return e.flags|=1,t=Ue(i,a),t.ref=e.ref,t.return=e,e.child=t}function Kf(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Va(i,a)&&t.ref===e.ref)if(Mt=!1,e.pendingProps=a=i,Uc(t,n))(t.flags&131072)!==0&&(Mt=!0);else return e.lanes=t.lanes,qe(t,e,n)}return Ec(t,e,l,a,n)}function Jf(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return $f(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ui(e,i!==null?i.cachePool:null),i!==null?Ws(e,i):ec(),Fs(e);else return a=e.lanes=536870912,$f(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(ui(e,i.cachePool),Ws(e,i),ul(),e.memoizedState=null):(t!==null&&ui(e,null),ec(),ul());return Rt(t,e,n,l),e.child}function on(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function $f(t,e,l,a,n){var i=$u();return i=i===null?null:{parent:Tt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&ui(e,null),ec(),Fs(e),t!==null&&fa(t,e,a,!0),e.childLanes=n,null}function zi(t,e){return e=Ti({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Wf(t,e,l){return Nl(e,t.child,null,l),t=zi(e,e.pendingProps),t.flags|=2,te(e),e.memoizedState=null,t}function jh(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if($){if(a.mode==="hidden")return t=zi(e,a),e.lanes=536870912,on(null,t);if(ac(e),(t=ht)?(t=od(t,de),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:ze,overflow:Ae}:null,retryLane:536870912,hydrationErrors:null},l=Us(t),l.return=e,e.child=l,_t=e,ht=null)):t=null,t===null)throw tl(e);return e.lanes=536870912,null}return zi(e,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(ac(e),n)if(e.flags&256)e.flags&=-257,e=Wf(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(Mt||fa(t,e,l,!1),n=(l&t.childLanes)!==0,Mt||n){if(a=ot,a!==null&&(u=Qo(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,jl(t,u),Kt(a,t,u),Tc;Bi(),e=Wf(t,e,l)}else t=i.treeContext,ht=me(u.nextSibling),_t=e,$=!0,Pe=null,de=!1,t!==null&&_s(e,t),e=zi(e,a),e.flags|=4096;return e}return t=Ue(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ai(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(f(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Ec(t,e,l,a,n){return Ul(e),l=ic(t,e,l,a,void 0,n),a=uc(),t!==null&&!Mt?(cc(t,e,n),qe(t,e,n)):($&&a&&Yu(e),e.flags|=1,Rt(t,e,l,n),e.child)}function Ff(t,e,l,a,n,i){return Ul(e),e.updateQueue=null,l=Ps(e,a,l,n),Is(t),a=uc(),t!==null&&!Mt?(cc(t,e,i),qe(t,e,i)):($&&a&&Yu(e),e.flags|=1,Rt(t,e,l,i),e.child)}function If(t,e,l,a,n){if(Ul(e),e.stateNode===null){var i=ua,u=l.contextType;typeof u=="object"&&u!==null&&(i=Nt(u)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Fu(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?Nt(u):ua,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Sc(e,l,u,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&zc.enqueueReplaceState(i,i.state,null),ln(e,a,i,n),en(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,s=ql(l,c);i.props=s;var p=i.context,b=l.contextType;u=ua,typeof b=="object"&&b!==null&&(u=Nt(b));var A=l.getDerivedStateFromProps;b=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||p!==u)&&qf(e,i,a,u),ll=!1;var g=e.memoizedState;i.state=g,ln(e,a,i,n),en(),p=e.memoizedState,c||g!==p||ll?(typeof A=="function"&&(Sc(e,l,A,a),p=e.memoizedState),(s=ll||Rf(e,l,s,a,g,p,u))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=p),i.props=a,i.state=p,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Iu(t,e),u=e.memoizedProps,b=ql(l,u),i.props=b,A=e.pendingProps,g=i.context,p=l.contextType,s=ua,typeof p=="object"&&p!==null&&(s=Nt(p)),c=l.getDerivedStateFromProps,(p=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||g!==s)&&qf(e,i,a,s),ll=!1,g=e.memoizedState,i.state=g,ln(e,a,i,n),en();var y=e.memoizedState;u!==A||g!==y||ll||t!==null&&t.dependencies!==null&&ni(t.dependencies)?(typeof c=="function"&&(Sc(e,l,c,a),y=e.memoizedState),(b=ll||Rf(e,l,b,a,g,y,s)||t!==null&&t.dependencies!==null&&ni(t.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=y),i.props=a,i.state=y,i.context=s,a=b):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Ai(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Nl(e,t.child,null,n),e.child=Nl(e,null,l,n)):Rt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=qe(t,e,n),t}function Pf(t,e,l,a){return Cl(),e.flags|=256,Rt(t,e,l,a),e.child}var Mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(t){return{baseLanes:t,cachePool:Gs()}}function jc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=le),t}function tr(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if($){if(n?il(e):ul(),(t=ht)?(t=od(t,de),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:ze,overflow:Ae}:null,retryLane:536870912,hydrationErrors:null},l=Us(t),l.return=e,e.child=l,_t=e,ht=null)):t=null,t===null)throw tl(e);return fo(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(ul(),n=e.mode,c=Ti({mode:"hidden",children:c},n),a=Dl(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=wc(l),a.childLanes=jc(t,u,l),e.memoizedState=Mc,on(null,a)):(il(e),Dc(e,c))}var s=t.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)e.flags&256?(il(e),e.flags&=-257,e=Cc(t,e,l)):e.memoizedState!==null?(ul(),e.child=t.child,e.flags|=128,e=null):(ul(),c=a.fallback,n=e.mode,a=Ti({mode:"visible",children:a.children},n),c=Dl(c,n,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,Nl(e,t.child,null,l),a=e.child,a.memoizedState=wc(l),a.childLanes=jc(t,u,l),e.memoizedState=Mc,e=on(null,a));else if(il(e),fo(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var p=u.dgst;u=p,a=Error(f(419)),a.stack="",a.digest=u,$a({value:a,source:null,stack:null}),e=Cc(t,e,l)}else if(Mt||fa(t,e,l,!1),u=(l&t.childLanes)!==0,Mt||u){if(u=ot,u!==null&&(a=Qo(u,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,jl(t,a),Kt(u,t,a),Tc;so(c)||Bi(),e=Cc(t,e,l)}else so(c)?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,ht=me(c.nextSibling),_t=e,$=!0,Pe=null,de=!1,t!==null&&_s(e,t),e=Dc(e,a.children),e.flags|=4096);return e}return n?(ul(),c=a.fallback,n=e.mode,s=t.child,p=s.sibling,a=Ue(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,p!==null?c=Ue(p,c):(c=Dl(c,n,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,on(null,a),a=e.child,c=t.child.memoizedState,c===null?c=wc(l):(n=c.cachePool,n!==null?(s=Tt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Gs(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=jc(t,u,l),e.memoizedState=Mc,on(t.child,a)):(il(e),l=t.child,t=l.sibling,l=Ue(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function Dc(t,e){return e=Ti({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ti(t,e){return t=It(22,t,null,e),t.lanes=0,t}function Cc(t,e,l){return Nl(e,t.child,null,l),t=Dc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function er(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Zu(t.return,e,l)}function Oc(t,e,l,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function lr(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=St.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,et(St,u),Rt(t,e,a,l),a=$?Ja:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&er(t,l,e);else if(t.tag===19)er(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&di(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),Oc(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&di(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}Oc(e,!0,l,null,i,a);break;case"together":Oc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function qe(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),sl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(fa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,l=Ue(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ue(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Uc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ni(t)))}function Dh(t,e,l){switch(e.tag){case 3:_n(e,e.stateNode.containerInfo),el(e,Tt,t.memoizedState.cache),Cl();break;case 27:case 5:lu(e);break;case 4:_n(e,e.stateNode.containerInfo);break;case 10:el(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ac(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(il(e),e.flags|=128,null):(l&e.child.childLanes)!==0?tr(t,e,l):(il(e),t=qe(t,e,l),t!==null?t.sibling:null);il(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(fa(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return lr(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),et(St,St.current),a)break;return null;case 22:return e.lanes=0,Jf(t,e,l,e.pendingProps);case 24:el(e,Tt,t.memoizedState.cache)}return qe(t,e,l)}function ar(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Mt=!0;else{if(!Uc(t,l)&&(e.flags&128)===0)return Mt=!1,Dh(t,e,l);Mt=(t.flags&131072)!==0}else Mt=!1,$&&(e.flags&1048576)!==0&&Hs(e,Ja,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Hl(e.elementType),e.type=t,typeof t=="function")Ru(t)?(a=ql(t,a),e.tag=1,e=If(null,e,t,a,l)):(e.tag=0,e=Ec(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===Dt){e.tag=11,e=Zf(null,e,t,a,l);break t}else if(n===we){e.tag=14,e=Vf(null,e,t,a,l);break t}}throw e=Ba(t)||t,Error(f(306,e,""))}}return e;case 0:return Ec(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=ql(a,e.pendingProps),If(t,e,a,n,l);case 3:t:{if(_n(e,e.stateNode.containerInfo),t===null)throw Error(f(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,Iu(t,e),ln(e,a,null,l);var u=e.memoizedState;if(a=u.cache,el(e,Tt,a),a!==i.cache&&Vu(e,[Tt],l,!0),en(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Pf(t,e,a,l);break t}else if(a!==n){n=se(Error(f(424)),e),$a(n),e=Pf(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ht=me(t.firstChild),_t=e,$=!0,Pe=null,de=!0,l=Ks(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Cl(),a===n){e=qe(t,e,l);break t}Rt(t,e,a,l)}e=e.child}return e;case 26:return Ai(t,e),t===null?(l=md(e.type,null,e.pendingProps,null))?e.memoizedState=l:$||(l=e.type,t=e.pendingProps,a=Yi(Je.current).createElement(l),a[Ht]=e,a[Gt]=t,qt(a,l,t),Ot(a),e.stateNode=a):e.memoizedState=md(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return lu(e),t===null&&$&&(a=e.stateNode=rd(e.type,e.pendingProps,Je.current),_t=e,de=!0,n=ht,ml(e.type)?(ro=n,ht=me(a.firstChild)):ht=n),Rt(t,e,e.pendingProps.children,l),Ai(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&$&&((n=a=ht)&&(a=im(a,e.type,e.pendingProps,de),a!==null?(e.stateNode=a,_t=e,ht=me(a.firstChild),de=!1,n=!0):n=!1),n||tl(e)),lu(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,uo(n,i)?a=null:u!==null&&uo(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=ic(t,e,xh,null,null,l),An._currentValue=n),Ai(t,e),Rt(t,e,a,l),e.child;case 6:return t===null&&$&&((t=l=ht)&&(l=um(l,e.pendingProps,de),l!==null?(e.stateNode=l,_t=e,ht=null,t=!0):t=!1),t||tl(e)),null;case 13:return tr(t,e,l);case 4:return _n(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Nl(e,null,a,l):Rt(t,e,a,l),e.child;case 11:return Zf(t,e,e.type,e.pendingProps,l);case 7:return Rt(t,e,e.pendingProps,l),e.child;case 8:return Rt(t,e,e.pendingProps.children,l),e.child;case 12:return Rt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,el(e,e.type,a.value),Rt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Ul(e),n=Nt(n),a=a(n),e.flags|=1,Rt(t,e,a,l),e.child;case 14:return Vf(t,e,e.type,e.pendingProps,l);case 15:return Kf(t,e,e.type,e.pendingProps,l);case 19:return lr(t,e,l);case 31:return jh(t,e,l);case 22:return Jf(t,e,l,e.pendingProps);case 24:return Ul(e),a=Nt(Tt),t===null?(n=$u(),n===null&&(n=ot,i=Ku(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Fu(e),el(e,Tt,n)):((t.lanes&l)!==0&&(Iu(t,e),ln(e,null,null,l),en()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),el(e,Tt,a)):(a=i.cache,el(e,Tt,a),a!==n.cache&&Vu(e,[Tt],l,!0))),Rt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Qe(t){t.flags|=4}function Bc(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Cr())t.flags|=8192;else throw _l=oi,Wu}else t.flags&=-16777217}function nr(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!bd(e))if(Cr())t.flags|=8192;else throw _l=oi,Wu}function Ei(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?No():536870912,t.lanes|=e,za|=e)}function sn(t,e){if(!$)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Ch(t,e,l){var a=e.pendingProps;switch(Gu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),_e(Tt),Vl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(sa(e)?Qe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Xu())),mt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Qe(e),i!==null?(mt(e),nr(e,i)):(mt(e),Bc(e,n,null,a,l))):i?i!==t.memoizedState?(Qe(e),mt(e),nr(e,i)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Qe(e),mt(e),Bc(e,n,t,a,l)),null;case 27:if(Nn(e),l=Je.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(!a){if(e.stateNode===null)throw Error(f(166));return mt(e),null}t=Ct.current,sa(e)?Ns(e):(t=rd(n,a,l),e.stateNode=t,Qe(e))}return mt(e),null;case 5:if(Nn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(!a){if(e.stateNode===null)throw Error(f(166));return mt(e),null}if(i=Ct.current,sa(e))Ns(e);else{var u=Yi(Je.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Ht]=e,i[Gt]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(qt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Qe(e)}}return mt(e),Bc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(f(166));if(t=Je.current,sa(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=_t,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Ht]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||td(t.nodeValue,l)),t||tl(e,!0)}else t=Yi(t).createTextNode(a),t[Ht]=e,e.stateNode=t}return mt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=sa(e),l!==null){if(t===null){if(!a)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[Ht]=e}else Cl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else l=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(te(e),e):(te(e),null);if((e.flags&128)!==0)throw Error(f(558))}return mt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=sa(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(f(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[Ht]=e}else Cl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),n=!1}else n=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(te(e),e):(te(e),null)}return te(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Ei(e,e.updateQueue),mt(e),null);case 4:return Vl(),t===null&&eo(e.stateNode.containerInfo),mt(e),null;case 10:return _e(e.type),mt(e),null;case 19:if(yt(St),a=e.memoizedState,a===null)return mt(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)sn(a,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=di(t),i!==null){for(e.flags|=128,sn(a,!1),t=i.updateQueue,e.updateQueue=t,Ei(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Os(l,t),l=l.sibling;return et(St,St.current&1|2),$&&Be(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Jt()>Ci&&(e.flags|=128,n=!0,sn(a,!1),e.lanes=4194304)}else{if(!n)if(t=di(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Ei(e,t),sn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!$)return mt(e),null}else 2*Jt()-a.renderingStartTime>Ci&&l!==536870912&&(e.flags|=128,n=!0,sn(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Jt(),t.sibling=null,l=St.current,et(St,n?l&1|2:l&1),$&&Be(e,a.treeForkCount),t):(mt(e),null);case 22:case 23:return te(e),lc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),l=e.updateQueue,l!==null&&Ei(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&yt(Bl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),_e(Tt),mt(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function Oh(t,e){switch(Gu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _e(Tt),Vl(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Nn(e),null;case 31:if(e.memoizedState!==null){if(te(e),e.alternate===null)throw Error(f(340));Cl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(te(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Cl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(St),null;case 4:return Vl(),null;case 10:return _e(e.type),null;case 22:case 23:return te(e),lc(),t!==null&&yt(Bl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return _e(Tt),null;case 25:return null;default:return null}}function ir(t,e){switch(Gu(e),e.tag){case 3:_e(Tt),Vl();break;case 26:case 27:case 5:Nn(e);break;case 4:Vl();break;case 31:e.memoizedState!==null&&te(e);break;case 13:te(e);break;case 19:yt(St);break;case 10:_e(e.type);break;case 22:case 23:te(e),lc(),t!==null&&yt(Bl);break;case 24:_e(Tt)}}function fn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){at(e,e.return,c)}}function cl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var s=l,p=c;try{p()}catch(b){at(n,s,b)}}}a=a.next}while(a!==i)}}catch(b){at(e,e.return,b)}}function ur(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{$s(e,l)}catch(a){at(t,t.return,a)}}}function cr(t,e,l){l.props=ql(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){at(t,e,a)}}function rn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){at(t,e,n)}}function Te(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){at(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){at(t,e,n)}else l.current=null}function or(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){at(t,t.return,n)}}function Hc(t,e,l){try{var a=t.stateNode;Ph(a,t.type,l,e),a[Gt]=e}catch(n){at(t,t.return,n)}}function sr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ml(t.type)||t.tag===4}function _c(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||sr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ml(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ce));else if(a!==4&&(a===27&&ml(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Nc(t,e,l),t=t.sibling;t!==null;)Nc(t,e,l),t=t.sibling}function Mi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&ml(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Mi(t,e,l),t=t.sibling;t!==null;)Mi(t,e,l),t=t.sibling}function fr(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qt(e,a,l),e[Ht]=t,e[Gt]=l}catch(i){at(t,t.return,i)}}var Ye=!1,wt=!1,Rc=!1,rr=typeof WeakSet=="function"?WeakSet:Set,Ut=null;function Uh(t,e){if(t=t.containerInfo,no=Ki,t=zs(t),Cu(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var u=0,c=-1,s=-1,p=0,b=0,A=t,g=null;e:for(;;){for(var y;A!==l||n!==0&&A.nodeType!==3||(c=u+n),A!==i||a!==0&&A.nodeType!==3||(s=u+a),A.nodeType===3&&(u+=A.nodeValue.length),(y=A.firstChild)!==null;)g=A,A=y;for(;;){if(A===t)break e;if(g===l&&++p===n&&(c=u),g===i&&++b===a&&(s=u),(y=A.nextSibling)!==null)break;A=g,g=A.parentNode}A=y}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(io={focusedElem:t,selectionRange:l},Ki=!1,Ut=e;Ut!==null;)if(e=Ut,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ut=t;else for(;Ut!==null;){switch(e=Ut,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var O=ql(l.type,n);t=a.getSnapshotBeforeUpdate(O,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(N){at(l,l.return,N)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)oo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":oo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,Ut=t;break}Ut=e.return}}function dr(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Le(t,l),a&4&&fn(5,l);break;case 1:if(Le(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){at(l,l.return,u)}else{var n=ql(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){at(l,l.return,u)}}a&64&&ur(l),a&512&&rn(l,l.return);break;case 3:if(Le(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{$s(t,e)}catch(u){at(l,l.return,u)}}break;case 27:e===null&&a&4&&fr(l);case 26:case 5:Le(t,l),e===null&&a&4&&or(l),a&512&&rn(l,l.return);break;case 12:Le(t,l);break;case 31:Le(t,l),a&4&&pr(t,l);break;case 13:Le(t,l),a&4&&gr(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=Gh.bind(null,l),cm(t,l))));break;case 22:if(a=l.memoizedState!==null||Ye,!a){e=e!==null&&e.memoizedState!==null||wt,n=Ye;var i=wt;Ye=a,(wt=e)&&!i?Xe(t,l,(l.subtreeFlags&8772)!==0):Le(t,l),Ye=n,wt=i}break;case 30:break;default:Le(t,l)}}function hr(t){var e=t.alternate;e!==null&&(t.alternate=null,hr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&hu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,Xt=!1;function Ge(t,e,l){for(l=l.child;l!==null;)mr(t,e,l),l=l.sibling}function mr(t,e,l){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Ha,l)}catch{}switch(l.tag){case 26:wt||Te(l,e),Ge(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:wt||Te(l,e);var a=gt,n=Xt;ml(l.type)&&(gt=l.stateNode,Xt=!1),Ge(t,e,l),xn(l.stateNode),gt=a,Xt=n;break;case 5:wt||Te(l,e);case 6:if(a=gt,n=Xt,gt=null,Ge(t,e,l),gt=a,Xt=n,gt!==null)if(Xt)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(l.stateNode)}catch(i){at(l,e,i)}else try{gt.removeChild(l.stateNode)}catch(i){at(l,e,i)}break;case 18:gt!==null&&(Xt?(t=gt,ud(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Ca(t)):ud(gt,l.stateNode));break;case 4:a=gt,n=Xt,gt=l.stateNode.containerInfo,Xt=!0,Ge(t,e,l),gt=a,Xt=n;break;case 0:case 11:case 14:case 15:cl(2,l,e),wt||cl(4,l,e),Ge(t,e,l);break;case 1:wt||(Te(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&cr(l,e,a)),Ge(t,e,l);break;case 21:Ge(t,e,l);break;case 22:wt=(a=wt)||l.memoizedState!==null,Ge(t,e,l),wt=a;break;default:Ge(t,e,l)}}function pr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ca(t)}catch(l){at(e,e.return,l)}}}function gr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ca(t)}catch(l){at(e,e.return,l)}}function Bh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new rr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new rr),e;default:throw Error(f(435,t.tag))}}function wi(t,e){var l=Bh(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=Lh.bind(null,t,a);a.then(n,n)}})}function kt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(ml(c.type)){gt=c.stateNode,Xt=!1;break t}break;case 5:gt=c.stateNode,Xt=!1;break t;case 3:case 4:gt=c.stateNode.containerInfo,Xt=!0;break t}c=c.return}if(gt===null)throw Error(f(160));mr(i,u,n),gt=null,Xt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)vr(e,t),e=e.sibling}var be=null;function vr(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kt(e,t),Zt(t),a&4&&(cl(3,t,t.return),fn(3,t),cl(5,t,t.return));break;case 1:kt(e,t),Zt(t),a&512&&(wt||l===null||Te(l,l.return)),a&64&&Ye&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=be;if(kt(e,t),Zt(t),a&512&&(wt||l===null||Te(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ra]||i[Ht]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),qt(i,a,l),i[Ht]=t,Ot(i),a=i;break t;case"link":var u=vd("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break e}}i=n.createElement(a),qt(i,a,l),n.head.appendChild(i);break;case"meta":if(u=vd("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break e}}i=n.createElement(a),qt(i,a,l),n.head.appendChild(i);break;default:throw Error(f(468,a))}i[Ht]=t,Ot(i),a=i}t.stateNode=a}else yd(n,t.type,t.stateNode);else t.stateNode=gd(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?yd(n,t.type,t.stateNode):gd(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Hc(t,t.memoizedProps,l.memoizedProps)}break;case 27:kt(e,t),Zt(t),a&512&&(wt||l===null||Te(l,l.return)),l!==null&&a&4&&Hc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(kt(e,t),Zt(t),a&512&&(wt||l===null||Te(l,l.return)),t.flags&32){n=t.stateNode;try{Pl(n,"")}catch(O){at(t,t.return,O)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,Hc(t,n,l!==null?l.memoizedProps:n)),a&1024&&(Rc=!0);break;case 6:if(kt(e,t),Zt(t),a&4){if(t.stateNode===null)throw Error(f(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(O){at(t,t.return,O)}}break;case 3:if(Xi=null,n=be,be=Gi(e.containerInfo),kt(e,t),be=n,Zt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ca(e.containerInfo)}catch(O){at(t,t.return,O)}Rc&&(Rc=!1,yr(t));break;case 4:a=be,be=Gi(t.stateNode.containerInfo),kt(e,t),Zt(t),be=a;break;case 12:kt(e,t),Zt(t);break;case 31:kt(e,t),Zt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wi(t,a)));break;case 13:kt(e,t),Zt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Di=Jt()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wi(t,a)));break;case 22:n=t.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,p=Ye,b=wt;if(Ye=p||n,wt=b||s,kt(e,t),wt=b,Ye=p,Zt(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||s||Ye||wt||Ql(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){s=l=e;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var A=s.memoizedProps.style,g=A!=null&&A.hasOwnProperty("display")?A.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(O){at(s,s.return,O)}}}else if(e.tag===6){if(l===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(O){at(s,s.return,O)}}}else if(e.tag===18){if(l===null){s=e;try{var y=s.stateNode;n?cd(y,!0):cd(s.stateNode,!1)}catch(O){at(s,s.return,O)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,wi(t,l))));break;case 19:kt(e,t),Zt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wi(t,a)));break;case 30:break;case 21:break;default:kt(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(sr(a)){l=a;break}a=a.return}if(l==null)throw Error(f(160));switch(l.tag){case 27:var n=l.stateNode,i=_c(t);Mi(t,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Pl(u,""),l.flags&=-33);var c=_c(t);Mi(t,c,u);break;case 3:case 4:var s=l.stateNode.containerInfo,p=_c(t);Nc(t,p,s);break;default:throw Error(f(161))}}catch(b){at(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;yr(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Le(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)dr(t,e.alternate,e),e=e.sibling}function Ql(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:cl(4,e,e.return),Ql(e);break;case 1:Te(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&cr(e,e.return,l),Ql(e);break;case 27:xn(e.stateNode);case 26:case 5:Te(e,e.return),Ql(e);break;case 22:e.memoizedState===null&&Ql(e);break;case 30:Ql(e);break;default:Ql(e)}t=t.sibling}}function Xe(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:Xe(n,i,l),fn(4,i);break;case 1:if(Xe(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){at(a,a.return,p)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Js(s[n],c)}catch(p){at(a,a.return,p)}}l&&u&64&&ur(i),rn(i,i.return);break;case 27:fr(i);case 26:case 5:Xe(n,i,l),l&&a===null&&u&4&&or(i),rn(i,i.return);break;case 12:Xe(n,i,l);break;case 31:Xe(n,i,l),l&&u&4&&pr(n,i);break;case 13:Xe(n,i,l),l&&u&4&&gr(n,i);break;case 22:i.memoizedState===null&&Xe(n,i,l),rn(i,i.return);break;case 30:break;default:Xe(n,i,l)}e=e.sibling}}function qc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Wa(l))}function Qc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wa(t))}function xe(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)br(t,e,l,a),e=e.sibling}function br(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:xe(t,e,l,a),n&2048&&fn(9,e);break;case 1:xe(t,e,l,a);break;case 3:xe(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wa(t)));break;case 12:if(n&2048){xe(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){at(e,e.return,s)}}else xe(t,e,l,a);break;case 31:xe(t,e,l,a);break;case 13:xe(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?xe(t,e,l,a):dn(t,e):i._visibility&2?xe(t,e,l,a):(i._visibility|=2,ba(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&qc(u,e);break;case 24:xe(t,e,l,a),n&2048&&Qc(e.alternate,e);break;default:xe(t,e,l,a)}}function ba(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=l,s=a,p=u.flags;switch(u.tag){case 0:case 11:case 15:ba(i,u,c,s,n),fn(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?ba(i,u,c,s,n):dn(i,u):(b._visibility|=2,ba(i,u,c,s,n)),n&&p&2048&&qc(u.alternate,u);break;case 24:ba(i,u,c,s,n),n&&p&2048&&Qc(u.alternate,u);break;default:ba(i,u,c,s,n)}e=e.sibling}}function dn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:dn(l,a),n&2048&&qc(a.alternate,a);break;case 24:dn(l,a),n&2048&&Qc(a.alternate,a);break;default:dn(l,a)}e=e.sibling}}var hn=8192;function xa(t,e,l){if(t.subtreeFlags&hn)for(t=t.child;t!==null;)xr(t,e,l),t=t.sibling}function xr(t,e,l){switch(t.tag){case 26:xa(t,e,l),t.flags&hn&&t.memoizedState!==null&&bm(l,be,t.memoizedState,t.memoizedProps);break;case 5:xa(t,e,l);break;case 3:case 4:var a=be;be=Gi(t.stateNode.containerInfo),xa(t,e,l),be=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=hn,hn=16777216,xa(t,e,l),hn=a):xa(t,e,l));break;default:xa(t,e,l)}}function Sr(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function mn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ut=a,Ar(a,t)}Sr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zr(t),t=t.sibling}function zr(t){switch(t.tag){case 0:case 11:case 15:mn(t),t.flags&2048&&cl(9,t,t.return);break;case 3:mn(t);break;case 12:mn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ji(t)):mn(t);break;default:mn(t)}}function ji(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ut=a,Ar(a,t)}Sr(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:cl(8,e,e.return),ji(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,ji(e));break;default:ji(e)}t=t.sibling}}function Ar(t,e){for(;Ut!==null;){var l=Ut;switch(l.tag){case 0:case 11:case 15:cl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Wa(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ut=a;else t:for(l=t;Ut!==null;){a=Ut;var n=a.sibling,i=a.return;if(hr(a),a===l){Ut=null;break t}if(n!==null){n.return=i,Ut=n;break t}Ut=i}}}var Hh={getCacheForType:function(t){var e=Nt(Tt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Nt(Tt).controller.signal}},_h=typeof WeakMap=="function"?WeakMap:Map,P=0,ot=null,k=null,K=0,lt=0,ee=null,ol=!1,Sa=!1,Yc=!1,ke=0,xt=0,sl=0,Yl=0,Gc=0,le=0,za=0,pn=null,Vt=null,Lc=!1,Di=0,Tr=0,Ci=1/0,Oi=null,fl=null,jt=0,rl=null,Aa=null,Ze=0,Xc=0,kc=null,Er=null,gn=0,Zc=null;function ae(){return(P&2)!==0&&K!==0?K&-K:z.T!==null?Fc():Yo()}function Mr(){if(le===0)if((K&536870912)===0||$){var t=Qn;Qn<<=1,(Qn&3932160)===0&&(Qn=262144),le=t}else le=536870912;return t=Pt.current,t!==null&&(t.flags|=32),le}function Kt(t,e,l){(t===ot&&(lt===2||lt===9)||t.cancelPendingCommit!==null)&&(Ta(t,0),dl(t,K,le,!1)),Na(t,l),((P&2)===0||t!==ot)&&(t===ot&&((P&2)===0&&(Yl|=l),xt===4&&dl(t,K,le,!1)),Ee(t))}function wr(t,e,l){if((P&6)!==0)throw Error(f(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||_a(t,e),n=a?qh(t,e):Kc(t,e,!0),i=a;do{if(n===0){Sa&&!a&&dl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!Nh(l)){n=Kc(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=pn;var s=c.current.memoizedState.isDehydrated;if(s&&(Ta(c,u).flags|=256),u=Kc(c,u,!1),u!==2){if(Yc&&!s){c.errorRecoveryDisabledLanes|=i,Yl|=i,n=4;break t}i=Vt,Vt=n,i!==null&&(Vt===null?Vt=i:Vt.push.apply(Vt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ta(t,0),dl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:dl(a,e,le,!ol);break t;case 2:Vt=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(n=Di+300-Jt(),10<n)){if(dl(a,e,le,!ol),Gn(a,0,!0)!==0)break t;Ze=e,a.timeoutHandle=nd(jr.bind(null,a,l,Vt,Oi,Lc,e,le,Yl,za,ol,i,"Throttled",-0,0),n);break t}jr(a,l,Vt,Oi,Lc,e,le,Yl,za,ol,i,null,-0,0)}}break}while(!0);Ee(t)}function jr(t,e,l,a,n,i,u,c,s,p,b,A,g,y){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ce},xr(e,i,A);var O=(i&62914560)===i?Di-Jt():(i&4194048)===i?Tr-Jt():0;if(O=xm(A,O),O!==null){Ze=i,t.cancelPendingCommit=O(Nr.bind(null,t,e,i,l,a,n,u,c,s,b,A,null,g,y)),dl(t,i,u,!p);return}}Nr(t,e,i,l,a,n,u,c,s)}function Nh(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!Ft(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dl(t,e,l,a){e&=~Gc,e&=~Yl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-Wt(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Ro(t,l,e)}function Ui(){return(P&6)===0?(vn(0),!1):!0}function Vc(){if(k!==null){if(lt===0)var t=k.return;else t=k,He=Ol=null,oc(t),ma=null,Ia=0,t=k;for(;t!==null;)ir(t.alternate,t),t=t.return;k=null}}function Ta(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,lm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Ze=0,Vc(),ot=t,k=l=Ue(t.current,null),K=e,lt=0,ee=null,ol=!1,Sa=_a(t,e),Yc=!1,za=le=Gc=Yl=sl=xt=0,Vt=pn=null,Lc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-Wt(a),i=1<<n;e|=t[n],a&=~i}return ke=e,Pn(),l}function Dr(t,e){G=null,z.H=cn,e===ha||e===ci?(e=ks(),lt=3):e===Wu?(e=ks(),lt=4):lt=e===Tc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ee=e,k===null&&(xt=1,Si(t,se(e,t.current)))}function Cr(){var t=Pt.current;return t===null?!0:(K&4194048)===K?he===null:(K&62914560)===K||(K&536870912)!==0?t===he:!1}function Or(){var t=z.H;return z.H=cn,t===null?cn:t}function Ur(){var t=z.A;return z.A=Hh,t}function Bi(){xt=4,ol||(K&4194048)!==K&&Pt.current!==null||(Sa=!0),(sl&134217727)===0&&(Yl&134217727)===0||ot===null||dl(ot,K,le,!1)}function Kc(t,e,l){var a=P;P|=2;var n=Or(),i=Ur();(ot!==t||K!==e)&&(Oi=null,Ta(t,e)),e=!1;var u=xt;t:do try{if(lt!==0&&k!==null){var c=k,s=ee;switch(lt){case 8:Vc(),u=6;break t;case 3:case 2:case 9:case 6:Pt.current===null&&(e=!0);var p=lt;if(lt=0,ee=null,Ea(t,c,s,p),l&&Sa){u=0;break t}break;default:p=lt,lt=0,ee=null,Ea(t,c,s,p)}}Rh(),u=xt;break}catch(b){Dr(t,b)}while(!0);return e&&t.shellSuspendCounter++,He=Ol=null,P=a,z.H=n,z.A=i,k===null&&(ot=null,K=0,Pn()),u}function Rh(){for(;k!==null;)Br(k)}function qh(t,e){var l=P;P|=2;var a=Or(),n=Ur();ot!==t||K!==e?(Oi=null,Ci=Jt()+500,Ta(t,e)):Sa=_a(t,e);t:do try{if(lt!==0&&k!==null){e=k;var i=ee;e:switch(lt){case 1:lt=0,ee=null,Ea(t,e,i,1);break;case 2:case 9:if(Ls(i)){lt=0,ee=null,Hr(e);break}e=function(){lt!==2&&lt!==9||ot!==t||(lt=7),Ee(t)},i.then(e,e);break t;case 3:lt=7;break t;case 4:lt=5;break t;case 7:Ls(i)?(lt=0,ee=null,Hr(e)):(lt=0,ee=null,Ea(t,e,i,7));break;case 5:var u=null;switch(k.tag){case 26:u=k.memoizedState;case 5:case 27:var c=k;if(u?bd(u):c.stateNode.complete){lt=0,ee=null;var s=c.sibling;if(s!==null)k=s;else{var p=c.return;p!==null?(k=p,Hi(p)):k=null}break e}}lt=0,ee=null,Ea(t,e,i,5);break;case 6:lt=0,ee=null,Ea(t,e,i,6);break;case 8:Vc(),xt=6;break t;default:throw Error(f(462))}}Qh();break}catch(b){Dr(t,b)}while(!0);return He=Ol=null,z.H=a,z.A=n,P=l,k!==null?0:(ot=null,K=0,Pn(),xt)}function Qh(){for(;k!==null&&!o0();)Br(k)}function Br(t){var e=ar(t.alternate,t,ke);t.memoizedProps=t.pendingProps,e===null?Hi(t):k=e}function Hr(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ff(l,e,e.pendingProps,e.type,void 0,K);break;case 11:e=Ff(l,e,e.pendingProps,e.type.render,e.ref,K);break;case 5:oc(e);default:ir(l,e),e=k=Os(e,ke),e=ar(l,e,ke)}t.memoizedProps=t.pendingProps,e===null?Hi(t):k=e}function Ea(t,e,l,a){He=Ol=null,oc(e),ma=null,Ia=0;var n=e.return;try{if(wh(t,n,e,l,K)){xt=1,Si(t,se(l,t.current)),k=null;return}}catch(i){if(n!==null)throw k=n,i;xt=1,Si(t,se(l,t.current)),k=null;return}e.flags&32768?($||a===1?t=!0:Sa||(K&536870912)!==0?t=!1:(ol=t=!0,(a===2||a===9||a===3||a===6)&&(a=Pt.current,a!==null&&a.tag===13&&(a.flags|=16384))),_r(e,t)):Hi(e)}function Hi(t){var e=t;do{if((e.flags&32768)!==0){_r(e,ol);return}t=e.return;var l=Ch(e.alternate,e,ke);if(l!==null){k=l;return}if(e=e.sibling,e!==null){k=e;return}k=e=t}while(e!==null);xt===0&&(xt=5)}function _r(t,e){do{var l=Oh(t.alternate,t);if(l!==null){l.flags&=32767,k=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){k=t;return}k=t=l}while(t!==null);xt=6,k=null}function Nr(t,e,l,a,n,i,u,c,s){t.cancelPendingCommit=null;do _i();while(jt!==0);if((P&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(i=e.lanes|e.childLanes,i|=_u,y0(t,l,i,u,c,s),t===ot&&(k=ot=null,K=0),Aa=e,rl=t,Ze=l,Xc=i,kc=n,Er=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xh(Rn,function(){return Gr(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,n=D.p,D.p=2,u=P,P|=4;try{Uh(t,e,l)}finally{P=u,D.p=n,z.T=a}}jt=1,Rr(),qr(),Qr()}}function Rr(){if(jt===1){jt=0;var t=rl,e=Aa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=z.T,z.T=null;var a=D.p;D.p=2;var n=P;P|=4;try{vr(e,t);var i=io,u=zs(t.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Ss(c.ownerDocument.documentElement,c)){if(s!==null&&Cu(c)){var p=s.start,b=s.end;if(b===void 0&&(b=p),"selectionStart"in c)c.selectionStart=p,c.selectionEnd=Math.min(b,c.value.length);else{var A=c.ownerDocument||document,g=A&&A.defaultView||window;if(g.getSelection){var y=g.getSelection(),O=c.textContent.length,N=Math.min(s.start,O),ct=s.end===void 0?N:Math.min(s.end,O);!y.extend&&N>ct&&(u=ct,ct=N,N=u);var h=xs(c,N),r=xs(c,ct);if(h&&r&&(y.rangeCount!==1||y.anchorNode!==h.node||y.anchorOffset!==h.offset||y.focusNode!==r.node||y.focusOffset!==r.offset)){var m=A.createRange();m.setStart(h.node,h.offset),y.removeAllRanges(),N>ct?(y.addRange(m),y.extend(r.node,r.offset)):(m.setEnd(r.node,r.offset),y.addRange(m))}}}}for(A=[],y=c;y=y.parentNode;)y.nodeType===1&&A.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<A.length;c++){var x=A[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Ki=!!no,io=no=null}finally{P=n,D.p=a,z.T=l}}t.current=e,jt=2}}function qr(){if(jt===2){jt=0;var t=rl,e=Aa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=z.T,z.T=null;var a=D.p;D.p=2;var n=P;P|=4;try{dr(t,e.alternate,e)}finally{P=n,D.p=a,z.T=l}}jt=3}}function Qr(){if(jt===4||jt===3){jt=0,s0();var t=rl,e=Aa,l=Ze,a=Er;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?jt=5:(jt=0,Aa=rl=null,Yr(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(fl=null),ru(l),e=e.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Ha,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=z.T,n=D.p,D.p=2,z.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{z.T=e,D.p=n}}(Ze&3)!==0&&_i(),Ee(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===Zc?gn++:(gn=0,Zc=t):gn=0,vn(0)}}function Yr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Wa(e)))}function _i(){return Rr(),qr(),Qr(),Gr()}function Gr(){if(jt!==5)return!1;var t=rl,e=Xc;Xc=0;var l=ru(Ze),a=z.T,n=D.p;try{D.p=32>l?32:l,z.T=null,l=kc,kc=null;var i=rl,u=Ze;if(jt=0,Aa=rl=null,Ze=0,(P&6)!==0)throw Error(f(331));var c=P;if(P|=4,zr(i.current),br(i,i.current,u,l),P=c,vn(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Ha,i)}catch{}return!0}finally{D.p=n,z.T=a,Yr(t,e)}}function Lr(t,e,l){e=se(l,e),e=Ac(t.stateNode,e,2),t=nl(t,e,2),t!==null&&(Na(t,2),Ee(t))}function at(t,e,l){if(t.tag===3)Lr(t,t,l);else for(;e!==null;){if(e.tag===3){Lr(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(fl===null||!fl.has(a))){t=se(l,t),l=Xf(2),a=nl(e,l,2),a!==null&&(kf(l,a,e,t),Na(a,2),Ee(a));break}}e=e.return}}function Jc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new _h;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Yc=!0,n.add(l),t=Yh.bind(null,t,e,l),e.then(t,t))}function Yh(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,ot===t&&(K&l)===l&&(xt===4||xt===3&&(K&62914560)===K&&300>Jt()-Di?(P&2)===0&&Ta(t,0):Gc|=l,za===K&&(za=0)),Ee(t)}function Xr(t,e){e===0&&(e=No()),t=jl(t,e),t!==null&&(Na(t,e),Ee(t))}function Gh(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Xr(t,l)}function Lh(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(f(314))}a!==null&&a.delete(e),Xr(t,l)}function Xh(t,e){return cu(t,e)}var Ni=null,Ma=null,$c=!1,Ri=!1,Wc=!1,hl=0;function Ee(t){t!==Ma&&t.next===null&&(Ma===null?Ni=Ma=t:Ma=Ma.next=t),Ri=!0,$c||($c=!0,Zh())}function vn(t,e){if(!Wc&&Ri){Wc=!0;do for(var l=!1,a=Ni;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-Wt(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Kr(a,i))}else i=K,i=Gn(a,a===ot?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||_a(a,i)||(l=!0,Kr(a,i));a=a.next}while(l);Wc=!1}}function kh(){kr()}function kr(){Ri=$c=!1;var t=0;hl!==0&&em()&&(t=hl);for(var e=Jt(),l=null,a=Ni;a!==null;){var n=a.next,i=Zr(a,e);i===0?(a.next=null,l===null?Ni=n:l.next=n,n===null&&(Ma=l)):(l=a,(t!==0||(i&3)!==0)&&(Ri=!0)),a=n}jt!==0&&jt!==5||vn(t),hl!==0&&(hl=0)}function Zr(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Wt(i),c=1<<u,s=n[u];s===-1?((c&l)===0||(c&a)!==0)&&(n[u]=v0(c,e)):s<=e&&(t.expiredLanes|=c),i&=~c}if(e=ot,l=K,l=Gn(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(lt===2||lt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ou(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||_a(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ou(a),ru(l)){case 2:case 8:l=Ho;break;case 32:l=Rn;break;case 268435456:l=_o;break;default:l=Rn}return a=Vr.bind(null,t),l=cu(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ou(a),t.callbackPriority=2,t.callbackNode=null,2}function Vr(t,e){if(jt!==0&&jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(_i()&&t.callbackNode!==l)return null;var a=K;return a=Gn(t,t===ot?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(wr(t,a,e),Zr(t,Jt()),t.callbackNode!=null&&t.callbackNode===l?Vr.bind(null,t):null)}function Kr(t,e){if(_i())return null;wr(t,e,!0)}function Zh(){am(function(){(P&6)!==0?cu(Bo,kh):kr()})}function Fc(){if(hl===0){var t=ra;t===0&&(t=qn,qn<<=1,(qn&261888)===0&&(qn=256)),hl=t}return hl}function Jr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zn(""+t)}function $r(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Vh(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=Jr((n[Gt]||null).action),u=a.submitter;u&&(e=(e=u[Gt]||null)?Jr(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new $n("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(hl!==0){var s=u?$r(n,u):new FormData(n);vc(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?$r(n,u):new FormData(n),vc(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var Ic=0;Ic<Hu.length;Ic++){var Pc=Hu[Ic],Kh=Pc.toLowerCase(),Jh=Pc[0].toUpperCase()+Pc.slice(1);ye(Kh,"on"+Jh)}ye(Es,"onAnimationEnd"),ye(Ms,"onAnimationIteration"),ye(ws,"onAnimationStart"),ye("dblclick","onDoubleClick"),ye("focusin","onFocus"),ye("focusout","onBlur"),ye(fh,"onTransitionRun"),ye(rh,"onTransitionStart"),ye(dh,"onTransitionCancel"),ye(js,"onTransitionEnd"),Fl("onMouseEnter",["mouseout","mouseover"]),Fl("onMouseLeave",["mouseout","mouseover"]),Fl("onPointerEnter",["pointerout","pointerover"]),Fl("onPointerLeave",["pointerout","pointerover"]),Tl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$h=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yn));function Wr(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var u=a.length-1;0<=u;u--){var c=a[u],s=c.instance,p=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=p;try{i(n)}catch(b){In(b)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(c=a[u],s=c.instance,p=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=p;try{i(n)}catch(b){In(b)}n.currentTarget=null,i=s}}}}function Z(t,e){var l=e[du];l===void 0&&(l=e[du]=new Set);var a=t+"__bubble";l.has(a)||(Fr(e,t,2,!1),l.add(a))}function to(t,e,l){var a=0;e&&(a|=4),Fr(l,t,a,e)}var qi="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[qi]){t[qi]=!0,Xo.forEach(function(l){l!=="selectionchange"&&($h.has(l)||to(l,!1,t),to(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qi]||(e[qi]=!0,to("selectionchange",!1,e))}}function Fr(t,e,l,a){switch(Md(e)){case 2:var n=Am;break;case 8:n=Tm;break;default:n=vo}l=n.bind(null,e,l,t),n=void 0,!Su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function lo(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Jl(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue t}c=c.parentNode}}a=a.return}es(function(){var p=i,b=bu(l),A=[];t:{var g=Ds.get(t);if(g!==void 0){var y=$n,O=t;switch(t){case"keypress":if(Kn(l)===0)break t;case"keydown":case"keyup":y=L0;break;case"focusin":O="focus",y=Eu;break;case"focusout":O="blur",y=Eu;break;case"beforeblur":case"afterblur":y=Eu;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Z0;break;case Es:case Ms:case ws:y=B0;break;case js:y=K0;break;case"scroll":case"scrollend":y=j0;break;case"wheel":y=$0;break;case"copy":case"cut":case"paste":y=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=us;break;case"toggle":case"beforetoggle":y=F0}var N=(e&4)!==0,ct=!N&&(t==="scroll"||t==="scrollend"),h=N?g!==null?g+"Capture":null:g;N=[];for(var r=p,m;r!==null;){var x=r;if(m=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||m===null||h===null||(x=Qa(r,h),x!=null&&N.push(bn(r,x,m))),ct)break;r=r.return}0<N.length&&(g=new y(g,O,null,l,b),A.push({event:g,listeners:N}))}}if((e&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&l!==yu&&(O=l.relatedTarget||l.fromElement)&&(Jl(O)||O[Kl]))break t;if((y||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,y?(O=l.relatedTarget||l.toElement,y=p,O=O?Jl(O):null,O!==null&&(ct=M(O),N=O.tag,O!==ct||N!==5&&N!==27&&N!==6)&&(O=null)):(y=null,O=p),y!==O)){if(N=ns,x="onMouseLeave",h="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(N=us,x="onPointerLeave",h="onPointerEnter",r="pointer"),ct=y==null?g:qa(y),m=O==null?g:qa(O),g=new N(x,r+"leave",y,l,b),g.target=ct,g.relatedTarget=m,x=null,Jl(b)===p&&(N=new N(h,r+"enter",O,l,b),N.target=m,N.relatedTarget=ct,x=N),ct=x,y&&O)e:{for(N=Wh,h=y,r=O,m=0,x=h;x;x=N(x))m++;x=0;for(var B=r;B;B=N(B))x++;for(;0<m-x;)h=N(h),m--;for(;0<x-m;)r=N(r),x--;for(;m--;){if(h===r||r!==null&&h===r.alternate){N=h;break e}h=N(h),r=N(r)}N=null}else N=null;y!==null&&Ir(A,g,y,N,!1),O!==null&&ct!==null&&Ir(A,ct,O,N,!0)}}t:{if(g=p?qa(p):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var F=ms;else if(ds(g))if(ps)F=ch;else{F=ih;var U=nh}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?p&&vu(p.elementType)&&(F=ms):F=uh;if(F&&(F=F(t,p))){hs(A,F,l,b);break t}U&&U(t,g,p),t==="focusout"&&p&&g.type==="number"&&p.memoizedProps.value!=null&&gu(g,"number",g.value)}switch(U=p?qa(p):window,t){case"focusin":(ds(U)||U.contentEditable==="true")&&(aa=U,Ou=p,Ka=null);break;case"focusout":Ka=Ou=aa=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,As(A,l,b);break;case"selectionchange":if(sh)break;case"keydown":case"keyup":As(A,l,b)}var L;if(wu)t:{switch(t){case"compositionstart":var J="onCompositionStart";break t;case"compositionend":J="onCompositionEnd";break t;case"compositionupdate":J="onCompositionUpdate";break t}J=void 0}else la?fs(t,l)&&(J="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(J="onCompositionStart");J&&(cs&&l.locale!=="ko"&&(la||J!=="onCompositionStart"?J==="onCompositionEnd"&&la&&(L=ls()):(Fe=b,zu="value"in Fe?Fe.value:Fe.textContent,la=!0)),U=Qi(p,J),0<U.length&&(J=new is(J,t,null,l,b),A.push({event:J,listeners:U}),L?J.data=L:(L=rs(l),L!==null&&(J.data=L)))),(L=P0?th(t,l):eh(t,l))&&(J=Qi(p,"onBeforeInput"),0<J.length&&(U=new is("onBeforeInput","beforeinput",null,l,b),A.push({event:U,listeners:J}),U.data=L)),Vh(A,t,p,l,b)}Wr(A,e)})}function bn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Qi(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Qa(t,l),n!=null&&a.unshift(bn(t,n,i)),n=Qa(t,e),n!=null&&a.push(bn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function Wh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ir(t,e,l,a,n){for(var i=e._reactName,u=[];l!==null&&l!==a;){var c=l,s=c.alternate,p=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||p===null||(s=p,n?(p=Qa(l,i),p!=null&&u.unshift(bn(l,p,s))):n||(p=Qa(l,i),p!=null&&u.push(bn(l,p,s)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var Fh=/\r\n?/g,Ih=/\u0000|\uFFFD/g;function Pr(t){return(typeof t=="string"?t:""+t).replace(Fh,`
`).replace(Ih,"")}function td(t,e){return e=Pr(e),Pr(t)===e}function ut(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Pl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Pl(t,""+a);break;case"className":Xn(t,"class",a);break;case"tabIndex":Xn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(t,l,a);break;case"style":Po(t,a,i);break;case"data":if(e!=="object"){Xn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Zn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&ut(t,e,"name",n.name,n,null),ut(t,e,"formEncType",n.formEncType,n,null),ut(t,e,"formMethod",n.formMethod,n,null),ut(t,e,"formTarget",n.formTarget,n,null)):(ut(t,e,"encType",n.encType,n,null),ut(t,e,"method",n.method,n,null),ut(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Zn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Ce);break;case"onScroll":a!=null&&Z("scroll",t);break;case"onScrollEnd":a!=null&&Z("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Zn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":Z("beforetoggle",t),Z("toggle",t),Ln(t,"popover",a);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ln(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=M0.get(l)||l,Ln(t,l,a))}}function ao(t,e,l,a,n,i){switch(l){case"style":Po(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Pl(t,a):(typeof a=="number"||typeof a=="bigint")&&Pl(t,""+a);break;case"onScroll":a!=null&&Z("scroll",t);break;case"onScrollEnd":a!=null&&Z("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ce);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ko.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[Gt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Ln(t,l,a)}}}function qt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",t),Z("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ut(t,e,i,u,l,null)}}n&&ut(t,e,"srcSet",l.srcSet,l,null),a&&ut(t,e,"src",l.src,l,null);return;case"input":Z("invalid",t);var c=i=u=n=null,s=null,p=null;for(a in l)if(l.hasOwnProperty(a)){var b=l[a];if(b!=null)switch(a){case"name":n=b;break;case"type":u=b;break;case"checked":s=b;break;case"defaultChecked":p=b;break;case"value":i=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,e));break;default:ut(t,e,a,b,l,null)}}$o(t,i,c,s,p,u,n,!1);return;case"select":Z("invalid",t),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:ut(t,e,n,c,l,null)}e=i,l=u,t.multiple=!!a,e!=null?Il(t,!!a,e,!1):l!=null&&Il(t,!!a,l,!0);return;case"textarea":Z("invalid",t),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(f(91));break;default:ut(t,e,u,c,l,null)}Fo(t,a,n,i);return;case"option":for(s in l)if(l.hasOwnProperty(s)&&(a=l[s],a!=null))switch(s){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ut(t,e,s,a,l,null)}return;case"dialog":Z("beforetoggle",t),Z("toggle",t),Z("cancel",t),Z("close",t);break;case"iframe":case"object":Z("load",t);break;case"video":case"audio":for(a=0;a<yn.length;a++)Z(yn[a],t);break;case"image":Z("error",t),Z("load",t);break;case"details":Z("toggle",t);break;case"embed":case"source":case"link":Z("error",t),Z("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in l)if(l.hasOwnProperty(p)&&(a=l[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ut(t,e,p,a,l,null)}return;default:if(vu(e)){for(b in l)l.hasOwnProperty(b)&&(a=l[b],a!==void 0&&ao(t,e,b,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&ut(t,e,c,a,l,null))}function Ph(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,p=null,b=null;for(y in l){var A=l[y];if(l.hasOwnProperty(y)&&A!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":s=A;default:a.hasOwnProperty(y)||ut(t,e,y,null,a,A)}}for(var g in a){var y=a[g];if(A=l[g],a.hasOwnProperty(g)&&(y!=null||A!=null))switch(g){case"type":i=y;break;case"name":n=y;break;case"checked":p=y;break;case"defaultChecked":b=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,e));break;default:y!==A&&ut(t,e,g,y,a,A)}}pu(t,u,c,s,p,b,i,n);return;case"select":y=u=c=g=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":y=s;default:a.hasOwnProperty(i)||ut(t,e,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":g=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&ut(t,e,n,i,a,s)}e=c,l=u,a=y,g!=null?Il(t,!!l,g,!1):!!a!=!!l&&(e!=null?Il(t,!!l,e,!0):Il(t,!!l,l?[]:"",!1));return;case"textarea":y=g=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ut(t,e,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":g=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==i&&ut(t,e,u,n,a,i)}Wo(t,g,y);return;case"option":for(var O in l)if(g=l[O],l.hasOwnProperty(O)&&g!=null&&!a.hasOwnProperty(O))switch(O){case"selected":t.selected=!1;break;default:ut(t,e,O,null,a,g)}for(s in a)if(g=a[s],y=l[s],a.hasOwnProperty(s)&&g!==y&&(g!=null||y!=null))switch(s){case"selected":t.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:ut(t,e,s,g,a,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in l)g=l[N],l.hasOwnProperty(N)&&g!=null&&!a.hasOwnProperty(N)&&ut(t,e,N,null,a,g);for(p in a)if(g=a[p],y=l[p],a.hasOwnProperty(p)&&g!==y&&(g!=null||y!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,e));break;default:ut(t,e,p,g,a,y)}return;default:if(vu(e)){for(var ct in l)g=l[ct],l.hasOwnProperty(ct)&&g!==void 0&&!a.hasOwnProperty(ct)&&ao(t,e,ct,void 0,a,g);for(b in a)g=a[b],y=l[b],!a.hasOwnProperty(b)||g===y||g===void 0&&y===void 0||ao(t,e,b,g,a,y);return}}for(var h in l)g=l[h],l.hasOwnProperty(h)&&g!=null&&!a.hasOwnProperty(h)&&ut(t,e,h,null,a,g);for(A in a)g=a[A],y=l[A],!a.hasOwnProperty(A)||g===y||g==null&&y==null||ut(t,e,A,g,a,y)}function ed(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&ed(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],p=s.startTime;if(p>c)break;var b=s.transferSize,A=s.initiatorType;b&&ed(A)&&(s=s.responseEnd,u+=b*(s<c?1:(c-p)/(s-p)))}if(--a,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var no=null,io=null;function Yi(t){return t.nodeType===9?t:t.ownerDocument}function ld(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function uo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var co=null;function em(){var t=window.event;return t&&t.type==="popstate"?t===co?!1:(co=t,!0):(co=null,!1)}var nd=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,am=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(t){return id.resolve(null).then(t).catch(nm)}:nd;function nm(t){setTimeout(function(){throw t})}function ml(t){return t==="head"}function ud(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Ca(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")xn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,xn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Ra]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&xn(t.ownerDocument.body);l=n}while(l);Ca(e)}function cd(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function oo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":oo(l),hu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function im(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ra])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=me(t.nextSibling),t===null)break}return null}function um(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=me(t.nextSibling),t===null))return null;return t}function od(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=me(t.nextSibling),t===null))return null;return t}function so(t){return t.data==="$?"||t.data==="$~"}function fo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cm(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function me(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var ro=null;function sd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return me(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function fd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function rd(t,e,l){switch(e=Yi(l),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function xn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);hu(t)}var pe=new Map,dd=new Set;function Gi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ve=D.d;D.d={f:om,r:sm,D:fm,C:rm,L:dm,m:hm,X:pm,S:mm,M:gm};function om(){var t=Ve.f(),e=Ui();return t||e}function sm(t){var e=$l(t);e!==null&&e.tag===5&&e.type==="form"?Df(e):Ve.r(t)}var wa=typeof document>"u"?null:document;function hd(t,e,l){var a=wa;if(a&&typeof e=="string"&&e){var n=ce(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),dd.has(n)||(dd.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),qt(e,"link",t),Ot(e),a.head.appendChild(e)))}}function fm(t){Ve.D(t),hd("dns-prefetch",t,null)}function rm(t,e){Ve.C(t,e),hd("preconnect",t,e)}function dm(t,e,l){Ve.L(t,e,l);var a=wa;if(a&&t&&e){var n='link[rel="preload"][as="'+ce(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ce(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ce(l.imageSizes)+'"]')):n+='[href="'+ce(t)+'"]';var i=n;switch(e){case"style":i=ja(t);break;case"script":i=Da(t)}pe.has(i)||(t=w({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),pe.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(Sn(i))||e==="script"&&a.querySelector(zn(i))||(e=a.createElement("link"),qt(e,"link",t),Ot(e),a.head.appendChild(e)))}}function hm(t,e){Ve.m(t,e);var l=wa;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ce(a)+'"][href="'+ce(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Da(t)}if(!pe.has(i)&&(t=w({rel:"modulepreload",href:t},e),pe.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(zn(i)))return}a=l.createElement("link"),qt(a,"link",t),Ot(a),l.head.appendChild(a)}}}function mm(t,e,l){Ve.S(t,e,l);var a=wa;if(a&&t){var n=Wl(a).hoistableStyles,i=ja(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(Sn(i)))c.loading=5;else{t=w({rel:"stylesheet",href:t,"data-precedence":e},l),(l=pe.get(i))&&ho(t,l);var s=u=a.createElement("link");Ot(s),qt(s,"link",t),s._p=new Promise(function(p,b){s.onload=p,s.onerror=b}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Li(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function pm(t,e){Ve.X(t,e);var l=wa;if(l&&t){var a=Wl(l).hoistableScripts,n=Da(t),i=a.get(n);i||(i=l.querySelector(zn(n)),i||(t=w({src:t,async:!0},e),(e=pe.get(n))&&mo(t,e),i=l.createElement("script"),Ot(i),qt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function gm(t,e){Ve.M(t,e);var l=wa;if(l&&t){var a=Wl(l).hoistableScripts,n=Da(t),i=a.get(n);i||(i=l.querySelector(zn(n)),i||(t=w({src:t,async:!0,type:"module"},e),(e=pe.get(n))&&mo(t,e),i=l.createElement("script"),Ot(i),qt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function md(t,e,l,a){var n=(n=Je.current)?Gi(n):null;if(!n)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=ja(l.href),l=Wl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=ja(l.href);var i=Wl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(Sn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),pe.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},pe.set(t,l),i||vm(n,t,l,u.state))),e&&a===null)throw Error(f(528,""));return u}if(e&&a!==null)throw Error(f(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Da(l),l=Wl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function ja(t){return'href="'+ce(t)+'"'}function Sn(t){return'link[rel="stylesheet"]['+t+"]"}function pd(t){return w({},t,{"data-precedence":t.precedence,precedence:null})}function vm(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),qt(e,"link",l),Ot(e),t.head.appendChild(e))}function Da(t){return'[src="'+ce(t)+'"]'}function zn(t){return"script[async]"+t}function gd(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ce(l.href)+'"]');if(a)return e.instance=a,Ot(a),a;var n=w({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Ot(a),qt(a,"style",n),Li(a,l.precedence,t),e.instance=a;case"stylesheet":n=ja(l.href);var i=t.querySelector(Sn(n));if(i)return e.state.loading|=4,e.instance=i,Ot(i),i;a=pd(l),(n=pe.get(n))&&ho(a,n),i=(t.ownerDocument||t).createElement("link"),Ot(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),qt(i,"link",a),e.state.loading|=4,Li(i,l.precedence,t),e.instance=i;case"script":return i=Da(l.src),(n=t.querySelector(zn(i)))?(e.instance=n,Ot(n),n):(a=l,(n=pe.get(i))&&(a=w({},l),mo(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ot(n),qt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Li(a,l.precedence,t));return e.instance}function Li(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function ho(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function mo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Xi=null;function vd(t,e,l){if(Xi===null){var a=new Map,n=Xi=new Map;n.set(l,a)}else n=Xi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[Ra]||i[Ht]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function yd(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function ym(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function bd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function bm(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=ja(a.href),i=e.querySelector(Sn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=ki.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,Ot(i);return}i=e.ownerDocument||e,a=pd(a),(n=pe.get(n))&&ho(a,n),i=i.createElement("link"),Ot(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),qt(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=ki.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var po=0;function xm(t,e){return t.stylesheets&&t.count===0&&Vi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Vi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&po===0&&(po=62500*tm());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>po?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Zi=null;function Vi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zi=new Map,e.forEach(Sm,t),Zi=null,ki.call(t))}function Sm(t,e){if(!(e.state.loading&4)){var l=Zi.get(t);if(l)var a=l.get(null);else{l=new Map,Zi.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=ki.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var An={$$typeof:ft,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function zm(t,e,l,a,n,i,u,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=su(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.hiddenUpdates=su(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function xd(t,e,l,a,n,i,u,c,s,p,b,A){return t=new zm(t,e,l,u,s,p,b,A,c),e=1,i===!0&&(e|=24),i=It(3,null,null,e),t.current=i,i.stateNode=t,e=Ku(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Fu(i),t}function Sd(t){return t?(t=ua,t):ua}function zd(t,e,l,a,n,i){n=Sd(n),a.context===null?a.context=n:a.pendingContext=n,a=al(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=nl(t,a,e),l!==null&&(Kt(l,t,e),tn(l,t,e))}function Ad(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function go(t,e){Ad(t,e),(t=t.alternate)&&Ad(t,e)}function Td(t){if(t.tag===13||t.tag===31){var e=jl(t,67108864);e!==null&&Kt(e,t,67108864),go(t,67108864)}}function Ed(t){if(t.tag===13||t.tag===31){var e=ae();e=fu(e);var l=jl(t,e);l!==null&&Kt(l,t,e),go(t,e)}}var Ki=!0;function Am(t,e,l,a){var n=z.T;z.T=null;var i=D.p;try{D.p=2,vo(t,e,l,a)}finally{D.p=i,z.T=n}}function Tm(t,e,l,a){var n=z.T;z.T=null;var i=D.p;try{D.p=8,vo(t,e,l,a)}finally{D.p=i,z.T=n}}function vo(t,e,l,a){if(Ki){var n=yo(a);if(n===null)lo(t,e,a,Ji,l),wd(t,a);else if(Mm(n,t,e,l,a))a.stopPropagation();else if(wd(t,a),e&4&&-1<Em.indexOf(t)){for(;n!==null;){var i=$l(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Al(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-Wt(u);c.entanglements[1]|=s,u&=~s}Ee(i),(P&6)===0&&(Ci=Jt()+500,vn(0))}}break;case 31:case 13:c=jl(i,2),c!==null&&Kt(c,i,2),Ui(),go(i,2)}if(i=yo(a),i===null&&lo(t,e,a,Ji,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else lo(t,e,a,null,l)}}function yo(t){return t=bu(t),bo(t)}var Ji=null;function bo(t){if(Ji=null,t=Jl(t),t!==null){var e=M(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=j(e),t!==null)return t;t=null}else if(l===31){if(t=H(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ji=t,null}function Md(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(f0()){case Bo:return 2;case Ho:return 8;case Rn:case r0:return 32;case _o:return 268435456;default:return 32}default:return 32}}var xo=!1,pl=null,gl=null,vl=null,Tn=new Map,En=new Map,yl=[],Em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wd(t,e){switch(t){case"focusin":case"focusout":pl=null;break;case"dragenter":case"dragleave":gl=null;break;case"mouseover":case"mouseout":vl=null;break;case"pointerover":case"pointerout":Tn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(e.pointerId)}}function Mn(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=$l(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Mm(t,e,l,a,n){switch(e){case"focusin":return pl=Mn(pl,t,e,l,a,n),!0;case"dragenter":return gl=Mn(gl,t,e,l,a,n),!0;case"mouseover":return vl=Mn(vl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return Tn.set(i,Mn(Tn.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,En.set(i,Mn(En.get(i)||null,t,e,l,a,n)),!0}return!1}function jd(t){var e=Jl(t.target);if(e!==null){var l=M(e);if(l!==null){if(e=l.tag,e===13){if(e=j(l),e!==null){t.blockedOn=e,Go(t.priority,function(){Ed(l)});return}}else if(e===31){if(e=H(l),e!==null){t.blockedOn=e,Go(t.priority,function(){Ed(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=yo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);yu=a,l.target.dispatchEvent(a),yu=null}else return e=$l(l),e!==null&&Td(e),t.blockedOn=l,!1;e.shift()}return!0}function Dd(t,e,l){$i(t)&&l.delete(e)}function wm(){xo=!1,pl!==null&&$i(pl)&&(pl=null),gl!==null&&$i(gl)&&(gl=null),vl!==null&&$i(vl)&&(vl=null),Tn.forEach(Dd),En.forEach(Dd)}function Wi(t,e){t.blockedOn===e&&(t.blockedOn=null,xo||(xo=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,wm)))}var Fi=null;function Cd(t){Fi!==t&&(Fi=t,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){Fi===t&&(Fi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(bo(a||l)===null)continue;break}var i=$l(l);i!==null&&(t.splice(e,3),e-=3,vc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ca(t){function e(s){return Wi(s,t)}pl!==null&&Wi(pl,t),gl!==null&&Wi(gl,t),vl!==null&&Wi(vl,t),Tn.forEach(e),En.forEach(e);for(var l=0;l<yl.length;l++){var a=yl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<yl.length&&(l=yl[0],l.blockedOn===null);)jd(l),l.blockedOn===null&&yl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Gt]||null;if(typeof i=="function")u||Cd(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Gt]||null)c=u.formAction;else if(bo(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),Cd(l)}}}function Od(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function So(t){this._internalRoot=t}Ii.prototype.render=So.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var l=e.current,a=ae();zd(l,a,t,e,null,null)},Ii.prototype.unmount=So.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zd(t.current,2,null,t,null,null),Ui(),e[Kl]=null}};function Ii(t){this._internalRoot=t}Ii.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yo();t={blockedOn:null,target:t,priority:e};for(var l=0;l<yl.length&&e!==0&&e<yl[l].priority;l++);yl.splice(l,0,t),l===0&&jd(t)}};var Ud=S.version;if(Ud!=="19.2.1")throw Error(f(527,Ud,"19.2.1"));D.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=C(e),t=t!==null?V(t):null,t=t===null?null:t.stateNode,t};var jm={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Ha=Pi.inject(jm),$t=Pi}catch{}}return wn.createRoot=function(t,e){if(!E(t))throw Error(f(299));var l=!1,a="",n=Qf,i=Yf,u=Gf;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=xd(t,1,!1,null,null,l,a,null,n,i,u,Od),t[Kl]=e.current,eo(t),new So(e)},wn.hydrateRoot=function(t,e,l){if(!E(t))throw Error(f(299));var a=!1,n="",i=Qf,u=Yf,c=Gf,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),e=xd(t,1,!0,e,l??null,a,n,s,i,u,c,Od),e.context=Sd(null),l=e.current,a=ae(),a=fu(a),n=al(a),n.callback=null,nl(l,n,a),l=a,e.current.lanes=l,Na(e,l),Ee(e),t[Kl]=e.current,eo(t),new Ii(e)},wn.version="19.2.1",wn}var Nd;function qm(){if(Nd)return zo.exports;Nd=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(S){console.error(S)}}return d(),zo.exports=Rm(),zo.exports}var Qm=qm();const Eo='-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',nt={display:Eo,body:Eo,mono:Eo},Mo={mobile:"640px",tablet:"1024px",desktop:"1280px"},X={mobile:`@media (min-width: ${Mo.mobile})`,tablet:`@media (min-width: ${Mo.tablet})`,desktop:`@media (min-width: ${Mo.desktop})`,belowTablet:"@media (max-width: 1023px)",belowMobile:"@media (max-width: 639px)"},jn={sm:"8px",md:"10px",lg:"14px",xl:"20px",pill:"999px"},wo={out:"cubic-bezier(0.16, 1, 0.3, 1)",outStrong:"cubic-bezier(0.23, 1, 0.32, 1)",inOut:"cubic-bezier(0.77, 0, 0.175, 1)"},Ym=Hm`
  :root {
    --bg: #000000;
    --bg-elev: #0A0C0E;
    --surface: rgba(255, 255, 255, 0.030);
    --surface-2: rgba(255, 255, 255, 0.062);
    --ink: #F4F7FA;
    --ink-2: rgba(244, 247, 250, 0.62);
    --ink-3: rgba(244, 247, 250, 0.38);
    --line: rgba(255, 255, 255, 0.085);
    --line-2: rgba(255, 255, 255, 0.16);

    --accent: #0FA3B8;
    --accent-hot: #3E9BE0;
    --accent-deep: #2B3F8F;
    --accent-ink: #14B0C6;
    --accent-rgb: 15, 163, 184;
    --accent-soft: rgba(15, 163, 184, 0.16);

    --shadow-1: 0 2px 10px rgba(0, 0, 0, 0.55);
    --shadow-2: 0 22px 60px -18px rgba(0, 0, 0, 0.80);
    --scene-opacity: 0.60;

    --ease-out: ${wo.out};
    --ease-out-strong: ${wo.outStrong};
    --ease-in-out: ${wo.inOut};

    --r-sm: ${jn.sm};
    --r-md: ${jn.md};
    --r-lg: ${jn.lg};
    --r-xl: ${jn.xl};
    --r-pill: ${jn.pill};

    --gutter: clamp(22px, 6vw, 48px);
    --maxw-prose: 720px;
    --maxw-content: 980px;
    --maxw-wide: 1200px;
    --maxw-full: 1320px;
    --nav-h: 64px;

    color-scheme: dark;
  }

  [data-theme="light"] {
    --bg: #EBECEF;
    --bg-elev: #F6F7F9;
    --surface: rgba(15, 16, 20, 0.03);
    --surface-2: rgba(15, 16, 20, 0.055);
    --ink: #15161A;
    --ink-2: rgba(21, 22, 26, 0.66);
    --ink-3: rgba(21, 22, 26, 0.44);
    --line: rgba(21, 22, 26, 0.10);
    --line-2: rgba(21, 22, 26, 0.18);

    --accent: #0FA3B8;
    --accent-hot: #2563B0;
    --accent-deep: #2B3F8F;
    --accent-ink: #0C8294;
    --accent-rgb: 15, 163, 184;
    --accent-soft: rgba(15, 163, 184, 0.14);

    --shadow-1: 0 2px 8px rgba(15, 16, 20, 0.08);
    --shadow-2: 0 18px 50px -16px rgba(15, 16, 20, 0.18);
    --scene-opacity: 0.32;

    color-scheme: light;
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overscroll-behavior: none;
    scroll-behavior: auto;
  }

  body {
    font-family: ${nt.body};
    font-optical-sizing: auto;
    background-color: var(--bg);
    color: var(--ink);
    line-height: 1.6;
    font-size: 17px;
    font-weight: 400;
    min-height: 100vh;
    position: relative;
    overscroll-behavior: none;
    -webkit-tap-highlight-color: transparent;
  }

  #root { position: relative; min-height: 100vh; isolation: isolate; }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${nt.display};
    font-weight: 600;
    line-height: 1.02;
    letter-spacing: -0.02em;
    text-wrap: balance;
  }

  p { text-wrap: pretty; }

  a { color: inherit; text-decoration: none; }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
  }

  img, picture, svg { display: block; max-width: 100%; }
  ul, ol { list-style: none; }

  ::selection { background: var(--accent); color: #00171B; }
  [data-theme="light"] ::selection { background: var(--accent); color: #fff; }

  body, header, section, footer, a, button, h1, h2, h3, h4, p, span, li, div {
    transition:
      background-color 0.4s var(--ease-out),
      border-color 0.4s var(--ease-out),
      color 0.4s var(--ease-out);
  }
  .no-transition, .no-transition * { transition: none !important; }

  ::-webkit-scrollbar { width: 0; height: 0; display: none; }
  * { scrollbar-width: none; }
  body { -ms-overflow-style: none; }

  :focus { outline: none; }
  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--accent);
    border-radius: var(--r-sm);
  }

  .skip-link {
    position: fixed;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-elev);
    color: var(--ink);
    padding: 12px 22px;
    border-radius: var(--r-pill);
    border: 1px solid var(--line-2);
    font-weight: 600;
    font-size: 14px;
    z-index: 10001;
    transition: top 0.3s var(--ease-out);
    &:focus { top: 18px; }
  }

  section[id] { scroll-margin-top: 96px; }
  #home { scroll-margin-top: 0; }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }

  .mono { font-family: ${nt.mono}; font-variant-numeric: tabular-nums; }
  .gpu { transform: translateZ(0); backface-visibility: hidden; }
`,Kd=q.createContext(void 0),jo="portfolio-theme-mode",Gm=()=>{if(typeof window<"u"){const d=localStorage.getItem(jo);return d==="dark"||d==="light"?d:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"dark"},Lm=({children:d})=>{const[S,T]=q.useState(Gm),[f,E]=q.useState(()=>{if(typeof window<"u"){const j=localStorage.getItem(jo);return j==="dark"||j==="light"}return!1});q.useEffect(()=>{document.documentElement.setAttribute("data-theme",S),requestAnimationFrame(()=>{document.body.classList.remove("no-transition")})},[S]),q.useEffect(()=>{document.body.classList.add("no-transition");const j=requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.body.classList.remove("no-transition")})});return()=>cancelAnimationFrame(j)},[]),q.useEffect(()=>{f&&localStorage.setItem(jo,S)},[S,f]);const M=()=>{E(!0),T(j=>j==="dark"?"light":"dark")};return o.jsx(Kd.Provider,{value:{mode:S,toggleTheme:M,isDark:S==="dark"},children:d})},Jd=(d,S)=>{const T=S?.offset??0,f=typeof d=="string"?document.getElementById(d.replace("#","")):d instanceof HTMLElement?d:null;f?window.scrollTo({top:f.getBoundingClientRect().top+window.scrollY+T,behavior:"smooth"}):typeof d=="number"&&window.scrollTo({top:d+T,behavior:"smooth"})},$d=q.createContext({scrollTo:Jd}),Co=()=>q.useContext($d);function Wd(d,S){if(S==="home"){d("home",{offset:0});return}const T=document.getElementById(S),f=T?.firstElementChild,E=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"))||64,M=window.matchMedia("(min-width: 1024px)").matches?E:0,j=f&&parseFloat(getComputedStyle(f).paddingLeft)||0;if(T&&f&&j>0){const H=f.getBoundingClientRect().top+window.scrollY;d(H-M-j*1.6)}else d(S,{offset:-(M+24)})}const Xm=({children:d})=>o.jsx($d.Provider,{value:{scrollTo:Jd},children:d}),km="modulepreload",Zm=function(d){return"/"+d},Rd={},Vm=function(S,T,f){let E=Promise.resolve();if(T&&T.length>0){let _=function(C){return Promise.all(C.map(V=>Promise.resolve(V).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const j=document.querySelector("meta[property=csp-nonce]"),H=j?.nonce||j?.getAttribute("nonce");E=_(T.map(C=>{if(C=Zm(C),C in Rd)return;Rd[C]=!0;const V=C.endsWith(".css"),w=V?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${C}"]${w}`))return;const Y=document.createElement("link");if(Y.rel=V?"stylesheet":km,V||(Y.as="script"),Y.crossOrigin="",Y.href=C,H&&Y.setAttribute("nonce",H),document.head.appendChild(Y),V)return new Promise((tt,st)=>{Y.addEventListener("load",tt),Y.addEventListener("error",()=>st(new Error(`Unable to preload CSS for ${C}`)))})}))}function M(j){const H=new Event("vite:preloadError",{cancelable:!0});if(H.payload=j,window.dispatchEvent(H),!H.defaultPrevented)throw j}return E.then(j=>{for(const H of j||[])H.status==="rejected"&&M(H.reason);return S().catch(M)})};function Fd(){const d=q.useContext(Kd);if(!d)throw new Error("useTheme must be used within a ThemeProvider");return d}const Km="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E",Jm=v.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: #000000;

  [data-theme='light'] & {
    background: transparent;
  }
`,$m=v.div`
  position: absolute;
  inset: 0;
`,Wm=v.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(90% 60% at 50% -8%, rgba(70, 210, 230, 0.10), transparent 62%);

  [data-theme='light'] & {
    background: radial-gradient(95% 65% at 50% -8%, rgba(10, 150, 172, 0.28), rgba(10, 150, 172, 0.08) 42%, transparent 66%);
  }
`,Fm=v.div`
  position: absolute;
  inset: 0;
  background-image: url('${Km}');
  background-repeat: repeat;
  background-size: 160px 160px;
  opacity: 0.035;

  [data-theme='light'] & {
    opacity: 0.022;
  }

  @media (prefers-reduced-transparency: reduce) {
    display: none;
  }
`,Im=v.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(135% 105% at 50% 38%, transparent 60%, rgba(0, 0, 0, 0.6) 100%);

  [data-theme='light'] & {
    display: none;
  }
`,Pm=()=>{const d=Bt(),{isDark:S}=Fd(),T=!d,f=q.useRef(null),E=q.useRef(null),M=q.useRef(S);return M.current=S,q.useEffect(()=>{if(!T||!f.current)return;let H=!1;return(async()=>{try{const{initSheen:_}=await Vm(async()=>{const{initSheen:C}=await import("./sheen-Cznn_EJ8.js");return{initSheen:C}},[]);if(H||!f.current)return;E.current=_(f.current,{dark:M.current})}catch{}})(),()=>{if(H=!0,E.current){try{E.current.destroy()}catch{}E.current=null}}},[T]),q.useEffect(()=>{E.current?.setDark(S)},[S]),o.jsxs(Jm,{"aria-hidden":!0,children:[T?o.jsx($m,{ref:f}):o.jsx(Wm,{}),o.jsx(Fm,{}),o.jsx(Im,{})]})},tp=d=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...d,children:[o.jsx("circle",{cx:"12",cy:"12",r:"4"}),o.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),ep=d=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...d,children:o.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),Id=d=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...d,children:[o.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),o.jsx("path",{d:"M22 6L12 13 2 6"})]}),lp=d=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...d,children:o.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),ap=d=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...d,children:[o.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),o.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),o.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),np=d=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...d,children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),Pd=[{label:"About",href:"about"},{label:"Skills",href:"technologyproficiency"},{label:"Work",href:"professionalexperience"},{label:"Projects",href:"mostproudof"},{label:"Contact",href:"contact"}];function ip(){const[d,S]=q.useState("home");return q.useEffect(()=>{const f=["home",...Pd.map(j=>j.href)].map(j=>document.getElementById(j)).filter(j=>j!==null),E=new Map,M=new IntersectionObserver(j=>{for(const C of j)E.set(C.target.id,C.isIntersecting?C.intersectionRatio:0);let H=d,_=0;for(const[C,V]of E)V>_&&(_=V,H=C);_>0&&S(H)},{rootMargin:"-45% 0px -45% 0px",threshold:[0,.25,.5,.75,1]});return f.forEach(j=>M.observe(j)),()=>M.disconnect()},[]),d}const up=v.nav`
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  pointer-events: none;

  bottom: max(14px, env(safe-area-inset-bottom));
  top: auto;
  display: flex;
  justify-content: center;
  padding: 0 12px;

  ${X.tablet} {
    top: 0;
    bottom: auto;
    height: var(--nav-h);
    padding: 0;
    display: block;
  }
`,cp=v.div`
  position: relative;
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  max-width: 100%;

  ${X.tablet} {
    height: var(--nav-h);
    width: 100%;
    max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
    margin-inline: auto;
    padding: 0 var(--gutter);
    gap: 8px;
    justify-content: space-between;
  }

  ${X.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,op=v(R.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  border-radius: var(--r-pill);
  border: 1px solid var(--line-2);
  background: color-mix(in srgb, var(--bg-elev) 74%, transparent);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
  box-shadow: var(--shadow-2);

  [data-theme='light'] & {
    background: color-mix(in srgb, var(--bg-elev) 88%, transparent);
    backdrop-filter: blur(18px) saturate(115%);
    -webkit-backdrop-filter: blur(18px) saturate(115%);
  }

  ${X.tablet} {
    background: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;

    [data-theme='light'] & {
      background: transparent;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }
  }

  @media (prefers-reduced-transparency: reduce) {
    background: var(--bg-elev);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    ${X.tablet} { background: transparent; }
  }
`,sp=v(R.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(50% - 50vw);
  right: calc(50% - 50vw);
  z-index: 0;
  pointer-events: none;
  display: none;
  background: rgba(0, 0, 0, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.085);
  backdrop-filter: blur(20px) saturate(120%);
  -webkit-backdrop-filter: blur(20px) saturate(120%);
  will-change: opacity;

  [data-theme='light'] & {
    background: rgba(235, 236, 239, 0.9);
    border-bottom-color: rgba(21, 22, 26, 0.1);
    backdrop-filter: blur(20px) saturate(112%);
    -webkit-backdrop-filter: blur(20px) saturate(112%);
  }

  ${X.tablet} { display: block; }

  @media (prefers-reduced-transparency: reduce) {
    background: var(--bg);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,fp=v(R.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--r-pill);
  flex-shrink: 0;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--accent-soft);
    opacity: 0;
    transition: opacity 0.25s var(--ease-out);
  }
  &:hover::after { opacity: 1; }

  ${X.belowTablet} { width: 36px; height: 36px; }
`,rp=v(R.img)`
  width: 32px;
  height: 32px;
  object-fit: contain;
  position: relative;
  z-index: 1;
  transform-origin: center center;
  /* No CSS filter/will-change: Safari rasterizes a filtered transformed <img> blurrily. */
`,dp=v(R.div)`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 2px;
  min-width: 0;

  ${X.tablet} {
    flex: 1 1 auto;
    justify-content: center;
  }

  ${X.belowTablet} {
    flex: 0 1 auto;
    min-width: 0;
    justify-content: flex-start;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,hp=v(R.a)`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 9px 14px;
  border-radius: var(--r-pill);
  font-size: 13.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
  scroll-snap-align: center;
  color: ${({$active:d})=>d?"var(--accent-ink)":"var(--ink-2)"};
  transition: color 0.25s var(--ease-out);

  &:hover { color: ${({$active:d})=>d?"var(--accent-ink)":"var(--ink)"}; }

  ${X.belowTablet} {
    padding: 8px 9px;
    font-size: 12px;
  }
`,mp=v(R.span)`
  position: absolute;
  inset: 0;
  border-radius: var(--r-pill);
  background: var(--accent-soft);
  border: 1px solid rgba(var(--accent-rgb), 0.45);
  z-index: 0;
`,pp=v.span`
  position: relative;
  z-index: 1;
`,gp=v(R.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--r-pill);
  color: var(--ink);
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--accent-soft);
    opacity: 0;
    transition: opacity 0.25s var(--ease-out);
  }
  &:hover::after { opacity: 1; }

  svg { width: 19px; height: 19px; position: relative; z-index: 1; }

  ${X.belowTablet} { width: 36px; height: 36px; }
`,Dn=[.16,1,.3,1],vp=[.76,0,.24,1],yp=({revealed:d=!0})=>{const S=ip(),{scrollTo:T}=Co(),{isDark:f,toggleTheme:E}=Fd(),M=Bt(),[j,H]=q.useState(!1);q.useEffect(()=>{const W=()=>H(window.scrollY>8);return W(),window.addEventListener("scroll",W,{passive:!0}),()=>window.removeEventListener("scroll",W)},[]);const _=q.useRef(null),C=q.useRef(null),V=q.useRef(1),w=Me(0),Y=Me(0),tt=Me(1),st=Me(0);q.useLayoutEffect(()=>{const W=_.current,ft=C.current;if(!W||!ft)return;if(M||d){w.set(0),Y.set(0),tt.set(1),st.set(1);return}const Dt=W.getBoundingClientRect(),ge=ft.offsetWidth||26;if(Dt.width===0){st.set(1);return}const ne=Math.min(150,window.innerWidth*.34);V.current=ne/ge,w.set(window.innerWidth/2-(Dt.left+Dt.width/2)),Y.set(window.innerHeight/2-(Dt.top+Dt.height/2)),tt.set(V.current*.86),st.set(0)},[]),q.useEffect(()=>{if(M||d){st.set(1);return}const W=Oa(st,1,{duration:1,ease:Dn}),ft=Oa(tt,V.current,{duration:1.4,ease:Dn});return()=>{W.stop(),ft.stop()}},[]),q.useEffect(()=>{if(!d||M)return;const W={duration:.8,ease:vp},ft=Oa(w,0,W),Dt=Oa(Y,0,W),ge=Oa(tt,1,W);return()=>{ft.stop(),Dt.stop(),ge.stop()}},[d]);const vt=(W,ft)=>{W.preventDefault(),Wd(T,ft)},At=M?0:.5,pt=W=>({initial:{opacity:0,y:M?0:8},animate:{opacity:d?1:0,y:d||M?0:8},transition:{duration:.6,delay:d?At+W:0,ease:Dn}});return o.jsx(up,{"aria-label":"Primary",children:o.jsxs(cp,{children:[o.jsx(op,{initial:{opacity:0},animate:{opacity:d?1:0},transition:{duration:.7,delay:d?At:0,ease:Dn}}),o.jsx(sp,{initial:!1,animate:{opacity:j?1:0},transition:{duration:.35,ease:Dn}}),o.jsx(fp,{ref:_,href:"#home",onClick:W=>vt(W,"home"),"aria-label":"Pranshu Nijhawan, back to top",whileHover:{scale:1.06},whileTap:{scale:.94},children:o.jsx(rp,{ref:C,"data-brand-logo":!0,src:"/images/logo-optimized.webp",alt:"Pranshu Nijhawan logo",width:26,height:26,style:{x:w,y:Y,scale:tt,opacity:st}})}),o.jsx(dp,{...pt(.18),children:o.jsx(Cm,{children:Pd.map(W=>{const ft=S===W.href;return o.jsxs(hp,{href:`#${W.href}`,$active:ft,"aria-current":ft?"true":void 0,onClick:Dt=>vt(Dt,W.href),whileTap:{scale:.95},children:[ft&&o.jsx(mp,{layoutId:"nav-active",transition:{type:"spring",stiffness:480,damping:38,mass:.9}}),o.jsx(pp,{children:W.label})]},W.href)})})}),o.jsx(gp,{onClick:E,"aria-label":f?"Switch to light mode":"Switch to dark mode",title:f?"Light mode":"Dark mode",whileHover:{scale:1.06},whileTap:{scale:.94},...pt(.26),children:o.jsx(eu,{mode:"wait",initial:!1,children:o.jsx(R.span,{initial:{opacity:0,rotate:-45,scale:.6},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:45,scale:.6},transition:{duration:.25,ease:[.16,1,.3,1]},style:{display:"inline-flex"},children:f?o.jsx(tp,{}):o.jsx(ep,{})},f?"sun":"moon")})})]})})},bp="3.0.1",xp=v.footer`
  position: relative;
  z-index: 1;
  padding: 40px 0 calc(96px + env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);
  ${X.tablet} { padding: 48px 0; }
`,Sp=v.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  display: flex;
  flex-direction: column;
  gap: 28px;

  ${X.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  ${X.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,zp=v.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  margin-top: 4px;
  padding-inline: var(--gutter);

  ${X.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,Ap=v.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Tp=v.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Ep=v.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
`,Mp=v.span`
  font-family: ${nt.display};
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: var(--ink);
`,wp=v.span`
  font-size: 14px;
  color: var(--ink-3);
`,jp=v.div`
  display: flex;
  align-items: center;
  gap: 22px;
`,Dp=v(R.button)`
  font-family: ${nt.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-2);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  &:hover { color: var(--accent-ink); }
`,Cp=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 14px;
`,qd=v.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,Op=v.span`
  font-family: ${nt.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
`,Up=()=>{const{scrollTo:d}=Co(),S=new Date().getFullYear();return o.jsxs(xp,{children:[o.jsxs(Sp,{children:[o.jsxs(Ap,{children:[o.jsxs(Tp,{children:[o.jsx(Ep,{src:"/images/logo-100.webp",alt:"Pranshu Nijhawan logo",width:34,height:34}),o.jsx(Mp,{children:"Pranshu Nijhawan"})]}),o.jsx(wp,{children:"Principal Architect, Agentic AI & Scale"})]}),o.jsx(jp,{children:o.jsxs(Dp,{onClick:()=>d("home"),whileHover:{scale:1.04},whileTap:{scale:.96},children:["Top",o.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 19V5M5 12l7-7 7 7"})})]})})]}),o.jsx(zp,{children:o.jsxs(Cp,{children:[o.jsx(qd,{}),o.jsxs(Op,{children:["© ",S," Pranshu Nijhawan • v",bp]}),o.jsx(qd,{})]})})]})},Qd=v(R.div)`
  position: fixed;
  inset: 0;
  z-index: 60;
  background:
    radial-gradient(120% 90% at 50% 8%, rgba(10, 14, 20, 0.9) 0%, transparent 55%),
    var(--bg);
  overflow: hidden;
  pointer-events: none;

  [data-theme='light'] & {
    background:
      radial-gradient(72% 60% at 50% 54%, rgba(22, 192, 212, 0.10) 0%, transparent 70%),
      var(--bg);
  }
`,Bp=v(R.div)`
  position: absolute;
  inset: 0;
  transform-origin: center 56%;
`,Ua=v(R.div)`
  position: absolute;
  inset: 0;
  will-change: transform, opacity;
`,Yd=v(Ua)`
  background: radial-gradient(58% 46% at 50% 58%,
    rgba(22, 192, 212, 0.55) 0%,
    rgba(34, 96, 168, 0.26) 34%,
    rgba(43, 63, 143, 0.12) 52%,
    transparent 72%);
  filter: blur(28px);

  [data-theme='light'] & {
    background: radial-gradient(50% 42% at 50% 56%,
      rgba(22, 192, 212, 0.26) 0%,
      rgba(22, 192, 212, 0.10) 42%,
      transparent 72%);
  }
`,Hp=v(Ua)`
  background: radial-gradient(38% 70% at 50% -6%,
    rgba(150, 220, 240, 0.18) 0%,
    rgba(80, 140, 200, 0.08) 30%,
    transparent 62%);
  mix-blend-mode: screen;

  [data-theme='light'] & {
    mix-blend-mode: normal;
    opacity: 0.35;
  }
`,_p=v(Ua)`
  background: radial-gradient(70% 16% at 50% 70%,
    rgba(22, 192, 212, 0.22) 0%,
    transparent 70%);
  filter: blur(12px);

  [data-theme='light'] & { opacity: 0.5; }
`,Np=v(Ua)``,Rp=v(R.span)`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(190, 235, 245, 0.9), rgba(190, 235, 245, 0) 70%);

  [data-theme='light'] & {
    background: radial-gradient(circle, rgba(22, 192, 212, 0.55), rgba(22, 192, 212, 0) 70%);
  }
`,Gd=v(Ua)`
  background: radial-gradient(circle at 50% 54%, transparent 34%, rgba(0, 0, 0, 0.5) 78%, rgba(0, 0, 0, 0.72) 100%);

  [data-theme='light'] & {
    background: radial-gradient(circle at 50% 54%,
      transparent 50%,
      rgba(15, 18, 26, 0.04) 84%,
      rgba(15, 18, 26, 0.08) 100%);
  }
`,qp=v(Ua)`
  opacity: 0.05;
  mix-blend-mode: overlay;

  [data-theme='light'] & { opacity: 0.025; }
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
`,tu=[.16,1,.3,1],Qp=({onComplete:d})=>{const S=Bt(),T=q.useMemo(()=>Array.from({length:14},(f,E)=>{const j=(E*9301+49297)%233280/233280,H=(E*4099+1)%977/977;return{left:8+j*84,top:24+H*62,size:1.5+H*3.5,delay:j*2.2,dur:5+j*5,drift:12+H*26}}),[]);return q.useEffect(()=>{const f=setTimeout(d,S?500:1600);return()=>clearTimeout(f)},[S,d]),S?o.jsxs(Qd,{initial:{opacity:1},exit:{opacity:0,transition:{duration:.4}},children:[o.jsx(Yd,{animate:{opacity:.8}}),o.jsx(Gd,{})]}):o.jsxs(Qd,{initial:{opacity:1},exit:{opacity:0,transition:{duration:.75,ease:tu}},children:[o.jsxs(Bp,{initial:{scale:1.12},animate:{scale:1},transition:{duration:4,ease:tu},children:[o.jsx(Yd,{initial:{opacity:0,scale:.7},animate:{opacity:[0,1,.82,1],scale:[.7,1.02,.99,1.02]},transition:{duration:4.2,times:[0,.32,.66,1],ease:"easeInOut",repeat:1/0,repeatType:"mirror"}}),o.jsx(Hp,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:1.8,ease:tu}}),o.jsx(_p,{initial:{opacity:0,scaleX:.6},animate:{opacity:1,scaleX:1},transition:{duration:2,delay:.4,ease:tu}}),o.jsx(Np,{children:T.map((f,E)=>o.jsx(Rp,{style:{left:`${f.left}%`,top:`${f.top}%`,width:f.size,height:f.size},initial:{opacity:0,y:0},animate:{opacity:[0,.8,0],y:[-f.drift*.3,-f.drift]},transition:{duration:f.dur,delay:f.delay,ease:"easeInOut",repeat:1/0,repeatType:"loop"}},E))})]}),o.jsx(Gd,{}),o.jsx(qp,{})]})},Ld=new Map;function t0(d){let S=Ld.get(d);return S||(S=typeof d=="string"?R[d]:R.create(d),Ld.set(d,S)),S}const Yp=(d,S)=>{switch(d){case"up":return{y:S};case"down":return{y:-S};case"left":return{x:S};case"right":return{x:-S};default:return{}}},Gl=({children:d,as:S="div",delay:T=0,dist:f=28,dir:E="up",blur:M=!0,amount:j=.3,once:H=!0,className:_,style:C})=>Bt()?q.createElement(S,{className:_,style:C},d):q.createElement(t0(S),{className:_,style:C,initial:{opacity:0,...Yp(E,f),filter:M?"blur(10px)":"blur(0px)"},whileInView:{opacity:1,x:0,y:0,filter:"blur(0px)"},viewport:{once:H,amount:j},transition:{duration:.7,delay:T,ease:[.16,1,.3,1]}},d),Do=({text:d,as:S="span",className:T,delay:f=0,stagger:E=.045,once:M=!0,amount:j=.4})=>{const H=Bt(),_=d.split(" ");if(H)return q.createElement(S,{className:T},d);const C=_.map((V,w)=>o.jsx("span",{"aria-hidden":!0,style:{display:"inline-block",overflow:"hidden",verticalAlign:"top",paddingBottom:"0.12em"},children:o.jsxs(R.span,{style:{display:"inline-block",willChange:"transform"},variants:{hidden:{y:"110%",opacity:0,filter:"blur(8px)"},visible:{y:"0%",opacity:1,filter:"blur(0px)",transition:{duration:.75,ease:[.16,1,.3,1]}}},children:[V,w<_.length-1?" ":""]})},`${V}-${w}`));return q.createElement(t0(S),{className:T,initial:"hidden",whileInView:"visible",viewport:{once:M,amount:j},variants:{hidden:{},visible:{transition:{staggerChildren:E,delayChildren:f}}}},o.jsx("span",{style:Gp,children:d},"sr"),...C)},Gp={position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0 0 0 0)",whiteSpace:"nowrap",border:0},e0=({children:d,strength:S=.35,className:T,...f})=>{const E=Bt(),M=q.useRef(null),j=Me(0),H=Me(0),_=Cn(j,{stiffness:200,damping:18,mass:.6}),C=Cn(H,{stiffness:200,damping:18,mass:.6}),V=Y=>{if(E||!M.current)return;const tt=M.current.getBoundingClientRect();j.set((Y.clientX-(tt.left+tt.width/2))*S),H.set((Y.clientY-(tt.top+tt.height/2))*S)},w=()=>{j.set(0),H.set(0)};return o.jsx(R.div,{ref:M,className:T,onMouseMove:V,onMouseLeave:w,style:{x:E?0:_,y:E?0:C,display:"inline-block"},...f,children:d})},l0=({children:d,className:S,max:T=9,glare:f=!0})=>{const E=Bt(),M=q.useRef(null),j=Me(0),H=Me(0),_=Me(50),C=Me(50),V=Cn(j,{stiffness:200,damping:20}),w=Cn(H,{stiffness:200,damping:20}),Y=vt=>{if(E||!M.current)return;const At=M.current.getBoundingClientRect(),pt=(vt.clientX-At.left)/At.width,W=(vt.clientY-At.top)/At.height;H.set((pt-.5)*T*2),j.set(-(W-.5)*T*2),_.set(pt*100),C.set(W*100)},tt=()=>{j.set(0),H.set(0),_.set(50),C.set(50)},st=xl([_,C],([vt,At])=>`radial-gradient(circle at ${vt}% ${At}%, rgba(var(--accent-rgb),0.18), transparent 55%)`);return o.jsxs(R.div,{ref:M,className:S,onMouseMove:Y,onMouseLeave:tt,style:{rotateX:E?0:V,rotateY:E?0:w,transformStyle:"preserve-3d",transformPerspective:900,position:"relative"},children:[d,f&&!E&&o.jsx(R.span,{"aria-hidden":!0,style:{position:"absolute",inset:0,borderRadius:"inherit",background:st,pointerEvents:"none",mixBlendMode:"screen"}})]})};function Lp(d=80){const S=q.useRef(null),T=Bt(),{scrollYProgress:f}=On({target:S,offset:["start end","end start"]}),E=xl(f,[0,1],[d,-d]);return{ref:S,y:T?0:E}}const Xp=({to:d,suffix:S="",prefix:T="",duration:f=1.6,className:E,play:M=!0})=>{const j=Bt(),H=q.useRef(null),_=Om(H,{once:!0,amount:.6}),[C,V]=q.useState(0);return q.useEffect(()=>{if(!_||!M)return;const w=Oa(0,d,{duration:j?.001:f,ease:[.16,1,.3,1],onUpdate:Y=>V(Y)});return()=>w.stop()},[_,M,d,f,j]),o.jsxs("span",{ref:H,className:E,children:[T,Math.round(C),S]})},kp=v.section`
  position: relative;
  z-index: 1;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${X.belowTablet} {
    min-height: auto;
    justify-content: flex-start;
  }
`,Zp=v(R.div)`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  padding-top: clamp(120px, 18vh, 200px);
  padding-bottom: clamp(48px, 8vh, 96px);

  ${X.belowTablet} {
    padding-top: clamp(40px, 11vw, 72px);
    padding-bottom: 24px;
  }

  ${X.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,Vp=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;

  ${X.belowTablet} {
    gap: 12px;
  }

  ${X.tablet} {
    grid-template-columns: 1.08fr 0.92fr;
  }
`,Kp=v.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Jp=v.h1`
  font-family: ${nt.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.045em;
  line-height: 0.88;
  font-size: clamp(54px, 9.5vw, 116px);
  margin-bottom: 26px;
`,Xd=v.span`
  display: block;
  overflow: hidden;
  padding-bottom: 0.06em;
`,$p=v(R.p)`
  font-family: ${nt.display};
  font-weight: 500;
  font-size: clamp(19px, 2.5vw, 27px);
  letter-spacing: -0.02em;
  line-height: 1.12;
  color: var(--ink);
  margin-bottom: 22px;

  em { font-style: normal; color: var(--accent-ink); }
`,Wp=v(R.p)`
  font-size: 17px;
  line-height: 1.62;
  color: var(--ink-2);
  max-width: 46ch;
  margin-bottom: 40px;

  a {
    color: var(--ink);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: var(--line-2);
    transition: color 0.3s var(--ease-out), text-decoration-color 0.3s var(--ease-out);
  }
  a:hover { color: var(--accent-ink); text-decoration-color: var(--accent); }
`,Fp=v(R.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`,Ip=v(R.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 26px;
  border-radius: var(--r-pill);
  background: var(--accent);
  color: #04181b;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
  box-shadow: 0 10px 30px -10px rgba(var(--accent-rgb), 0.6);

  [data-theme='light'] & { color: #fff; }

  svg { width: 17px; height: 17px; transition: transform 0.3s var(--ease-out); }
  &:hover svg { transform: translateX(4px); }
`,Pp=v(R.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 24px;
  border-radius: var(--r-pill);
  border: 1px solid var(--line-2);
  background: var(--surface);
  color: var(--ink);
  font-weight: 600;
  font-size: 15px;

  svg { width: 16px; height: 16px; opacity: 0.7; transition: transform 0.3s var(--ease-out); }
  &:hover { border-color: var(--ink-3); }
  &:hover svg { transform: translate(2px, -2px); }
`,tg=v(R.div)`
  position: relative;
  display: flex;
  justify-content: center;
  ${X.belowTablet} { order: -1; }
`,eg=v.div`
  position: relative;
  width: min(440px, 78vw);
  aspect-ratio: 1 / 1;
`,lg=v.div`
  position: absolute;
  inset: 4% 6% 2% 6%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(var(--accent-rgb), 0.13), transparent 72%);
  filter: blur(48px);
  z-index: -1;
`,ag=v.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid var(--line-2);
  box-shadow: var(--shadow-2);
  background: #000;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  }
`,ng=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`,ig=v.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  padding-bottom: clamp(40px, 7vh, 88px);

  ${X.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,ug=v(R.ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(28px, 4vw, 60px);
  list-style: none;
  margin: 0;
  padding: 0;

  ${X.mobile} { grid-template-columns: repeat(4, 1fr); }
`,cg=v(R.li)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,og=v(R.span)`
  height: 2px;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 10px;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 12%, transparent));
`,sg=v.span`
  font-family: ${nt.display};
  font-weight: 600;
  font-size: clamp(34px, 5vw, 56px);
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1;
`,fg=v.span`
  font-family: ${nt.mono};
  font-size: 11.5px;
  color: var(--ink-3);
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,rg=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),dg=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),hg=[{to:10,prefix:"",suffix:"+",label:"Years"},{to:65,prefix:"",suffix:"+",label:"Engineers Led"},{to:2,prefix:"$",suffix:"M+",label:"Savings"},{to:15,prefix:"",suffix:"+",label:"Products"}],mg=({data:d,start:S=!0})=>{const T=Bt(),{scrollTo:f}=Co(),{ref:E,y:M}=Lp(56),j=q.useRef(null),{scrollYProgress:H}=On({target:j,offset:["start start","end start"]}),_=xl(H,[0,1],[0,-110]),C=xl(H,[0,.75],[1,0]),[V,...w]=d.name.split(" "),Y=w.join(" "),tt=T?0:.5,st=[.16,1,.3,1],vt=pt=>({initial:T?{opacity:0}:{y:"110%"},animate:S?T?{opacity:1}:{y:"0%"}:T?{opacity:0}:{y:"110%"},transition:{duration:.9,delay:S?tt+pt:0,ease:[.16,1,.3,1]}}),At=pt=>({initial:T?{opacity:0}:{opacity:0,y:18,filter:"blur(8px)"},animate:S?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:T?0:18,filter:T?"blur(0px)":"blur(8px)"},transition:{duration:.7,delay:S?tt+pt:0,ease:[.16,1,.3,1]}});return o.jsxs(kp,{id:"home",ref:j,children:[o.jsx(Zp,{style:T?void 0:{y:_,opacity:C},children:o.jsxs(Vp,{children:[o.jsxs(Kp,{children:[o.jsxs(Jp,{"aria-label":d.name,children:[o.jsx(Xd,{"aria-hidden":!0,children:o.jsx(R.span,{style:{display:"block"},...vt(.15),children:V})}),o.jsx(Xd,{"aria-hidden":!0,children:o.jsx(R.span,{style:{display:"block",color:"var(--accent-ink)"},...vt(.27),children:Y})})]}),o.jsx($p,{...At(.34),children:d.designation}),o.jsxs(Wp,{...At(.45),children:["Enterprise Architect of"," ",o.jsx("a",{href:"https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview",target:"_blank",rel:"noopener noreferrer",children:"Periscope"}),"'s"," ",o.jsx("a",{href:"https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance",target:"_blank",rel:"noopener noreferrer",children:"Promotion Advisor"})," ","at"," ",o.jsx("a",{href:"https://www.linkedin.com/company/mckinsey/",target:"_blank",rel:"noopener noreferrer",children:"McKinsey"}),", building agentic AI and high-throughput data platforms."]}),o.jsxs(Fp,{...At(.58),children:[o.jsx(e0,{strength:.4,style:{display:"inline-block"},children:o.jsxs(Ip,{href:"#contact",onClick:pt=>{pt.preventDefault(),Wd(f,"contact")},whileHover:{scale:1.04},whileTap:{scale:.97},children:["Get in touch ",o.jsx(rg,{})]})}),o.jsxs(Pp,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.97},children:[o.jsx(dg,{})," Download resume"]})]})]}),o.jsx(tg,{ref:E,style:{y:M},children:o.jsx(R.div,{initial:T?{opacity:0}:{opacity:0,scale:.92,filter:"blur(14px)"},animate:S?{opacity:1,scale:1,filter:"blur(0px)"}:{opacity:0},transition:{duration:1,delay:S?tt+.4:0,ease:[.16,1,.3,1]},children:o.jsx(l0,{max:6,glare:!1,children:o.jsxs(eg,{children:[o.jsx(lg,{}),o.jsx(ag,{children:o.jsx(ng,{src:"/images/profile.webp",alt:d.name,width:440,height:550,loading:"eager",decoding:"async"})})]})})})})]})}),o.jsx(ig,{children:o.jsx(ug,{initial:T?!1:"hidden",animate:T?void 0:S?"visible":"hidden",variants:{hidden:{},visible:{transition:{staggerChildren:.12,delayChildren:tt+.2}}},children:hg.map(pt=>o.jsxs(cg,{variants:{hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.6,ease:st}}},children:[o.jsx(og,{variants:{hidden:{scaleX:0},visible:{scaleX:1,transition:{duration:.8,ease:st}}}}),o.jsx(sg,{children:o.jsx(Xp,{to:pt.to,prefix:pt.prefix,suffix:pt.suffix,play:S})}),o.jsx(fg,{children:pt.label})]},pt.label))})})]})},kd={prose:"var(--maxw-prose)",content:"var(--maxw-content)",wide:"var(--maxw-wide)",full:"var(--maxw-full)"},Ll=v.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,Xl=v.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--gutter);
  max-width: calc(${({$max:d="content"})=>kd[d]} + var(--gutter) * 2);

  ${X.desktop} {
    max-width: calc((100vw + ${({$max:d="content"})=>kd[d]} + var(--gutter) * 2) / 2);
  }
`,pg=v.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${nt.mono};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-ink);

  &::before {
    content: '';
    width: 26px;
    height: 1px;
    background: var(--accent);
    opacity: 0.7;
  }
`,gg=v.h2`
  font-family: ${nt.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.03em;
  line-height: 0.98;
  font-size: clamp(38px, 7vw, 84px);
`,vg=v.p`
  color: var(--ink-2);
  font-size: clamp(17px, 2.1vw, 21px);
  line-height: 1.6;
  max-width: 60ch;
`,yg=v.span`
  display: block;
  height: 2px;
  width: 64px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-hot));
  transform-origin: left;
`,bg=v(R.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 56px;
  align-items: ${({$align:d})=>d==="center"?"center":"flex-start"};
  text-align: ${({$align:d})=>d==="center"?"center":"left"};
  ${X.tablet} { margin-bottom: 80px; }
`,Sl=({title:d,kicker:S,lead:T,align:f="left",leadFull:E=!1})=>{const M=Bt(),j=q.useRef(null),{scrollYProgress:H}=On({target:j,offset:["start end","end start"]}),_=xl(H,[0,1],[M?0:30,M?0:-30]);return o.jsxs(bg,{ref:j,$align:f,style:M?void 0:{y:_},children:[S&&o.jsx(R.div,{initial:M?!1:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.6},transition:{duration:.5,ease:[.16,1,.3,1]},children:o.jsx(pg,{children:S})}),o.jsx(Do,{as:gg,text:d}),o.jsx(R.div,{style:{transformOrigin:f==="center"?"center":"left"},initial:M?!1:{scaleX:0,opacity:0},whileInView:{scaleX:1,opacity:1},viewport:{once:!0,amount:.6},transition:{duration:.7,delay:.15,ease:[.16,1,.3,1]},children:o.jsx(yg,{})}),T&&o.jsx(R.div,{initial:M?!1:{opacity:0,y:16,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.5},transition:{duration:.7,delay:.2,ease:[.16,1,.3,1]},children:o.jsx(vg,{style:{...f==="center"?{marginInline:"auto"}:{},...E?{maxWidth:"none"}:{}},children:T})})]})},xg=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}],Sg=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 8px;

  ${X.tablet} {
    grid-template-columns: 0.42fr 0.58fr;
    gap: 80px;
  }
`,zg=v.div`
  ${X.tablet} { position: sticky; top: 120px; height: max-content; }
`,Ag=v.span`
  font-family: ${nt.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-ink);
  display: block;
  margin-bottom: 18px;
`,Tg=v.p`
  font-family: ${nt.display};
  font-weight: 500;
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--ink);
`,Eg=v.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  p {
    font-size: clamp(16px, 1.8vw, 18px);
    line-height: 1.75;
    color: var(--ink-2);
    max-width: 65ch;
  }
`,Mg=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  margin-top: 72px;
  border-top: 1px solid var(--line);

  ${X.mobile} { grid-template-columns: repeat(3, 1fr); }
`,wg=v.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${X.mobile} {
    padding: 36px 28px 36px 0;
    border-right: 1px solid var(--line);
    &:last-child { border-right: none; padding-right: 0; }
    &:not(:first-child) { padding-left: 28px; }
  }
  ${X.belowMobile} { border-bottom: 1px solid var(--line); }
`,jg=v.h3`
  font-family: ${nt.display};
  font-size: 18px;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  position: relative;
  padding-top: 16px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 28px;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent-hot));
  }
`,Dg=v.p`
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ink-3);
`,Cg=v.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`,Og=v(R.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: var(--r-pill);
  border: 1px solid var(--line-2);
  background: var(--surface);
  color: var(--ink);
  font-weight: 600;
  font-size: 15px;

  svg { width: 16px; height: 16px; color: var(--accent-ink); transition: transform 0.3s var(--ease-out); }
  &:hover { border-color: var(--accent); }
  &:hover svg { transform: translateY(2px); }
`,Ug=({data:d})=>{const S=d.content.slice(0,3).map(T=>T.replace(/^🔹\s*/,"").trim());return o.jsx(Ll,{id:"about",children:o.jsxs(Xl,{$max:"wide",children:[o.jsx(Sl,{title:"About",lead:S[0],leadFull:!0}),o.jsxs(Sg,{children:[o.jsx(zg,{children:o.jsxs(Gl,{dir:"up",children:[o.jsx(Ag,{children:"The throughline"}),o.jsx(Tg,{children:"Technical depth, measured in business outcomes."})]})}),o.jsxs(Eg,{children:[o.jsx(Gl,{dir:"up",delay:.05,children:o.jsx("p",{children:S[1]})}),o.jsx(Gl,{dir:"up",delay:.12,children:o.jsx("p",{children:S[2]})})]})]}),o.jsx(Mg,{children:xg.map((T,f)=>o.jsxs(Gl,{as:wg,dir:"up",delay:f*.08,children:[o.jsx(jg,{children:T.title}),o.jsx(Dg,{children:T.text})]},T.title))}),o.jsx(Cg,{children:o.jsx(e0,{strength:.3,style:{display:"inline-block"},children:o.jsxs(Og,{href:d.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.04},whileTap:{scale:.97},children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),d.buttonProps.name]})})})]})})},Zd=[.16,1,.3,1],Bg=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 5vh, 64px) clamp(48px, 6vw, 96px);
  margin-top: clamp(40px, 6vh, 72px);

  ${X.tablet} { grid-template-columns: repeat(2, 1fr); }
`,Hg=v(R.div)`
  display: flex;
  flex-direction: column;
`,_g=v.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px solid var(--line);
`,Ng=v.h3`
  font-family: ${nt.display};
  font-size: clamp(18px, 2vw, 23px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.1;
`,Rg=v.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,qg=v.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`,Qg=v.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,Yg=v.span`
  font-size: 14.5px;
  color: var(--ink);
  line-height: 1.25;
`,Gg=v.span`
  font-family: ${nt.mono};
  font-size: 12.5px;
  color: var(--ink-3);
  flex-shrink: 0;
`,Lg=v.div`
  position: relative;
  height: 4px;
  border-radius: 4px;
  background: var(--line);
  overflow: hidden;
`,Xg=v(R.span)`
  position: absolute;
  inset: 0;
  border-radius: 4px;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), var(--accent-ink));
`,kg=({data:d})=>{const S=Bt();return o.jsx(Ll,{id:"technologyproficiency",children:o.jsxs(Xl,{$max:"wide",children:[o.jsx(Sl,{title:"Skills",lead:"The stack behind agentic AI systems, billion-row analytics, and platforms that stay up while they scale."}),o.jsx(Bg,{children:d.skills.map(T=>o.jsxs(Hg,{initial:S?!1:{opacity:0,y:26},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6,ease:Zd},children:[o.jsx(_g,{children:o.jsx(Ng,{children:T.category})}),o.jsx(Rg,{children:T.skills.map((f,E)=>o.jsxs(qg,{children:[o.jsxs(Qg,{children:[o.jsx(Yg,{children:f.name}),o.jsxs(Gg,{children:[f.percentage,"%"]})]}),o.jsx(Lg,{children:o.jsx(Xg,{initial:S?{scaleX:f.percentage/100}:{scaleX:0},whileInView:{scaleX:f.percentage/100},viewport:{once:!0,amount:.8},transition:{duration:.9,delay:.1+E*.06,ease:Zd}})})]},f.name))})]},T.category))})]})})},Zg=v.div`
  position: relative;
  padding-left: 30px;
  ${X.tablet} { padding-left: 220px; }
`,Vg=v.span`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: var(--line);
  ${X.tablet} { left: 188px; }
`,Kg=v(R.span)`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: linear-gradient(var(--accent), var(--accent-hot));
  transform-origin: top;
  ${X.tablet} { left: 188px; }
`,Jg=v(R.div)`
  position: relative;
  padding: 0 0 56px;
  &:last-child { padding-bottom: 0; }
`,$g=v.span`
  position: absolute;
  top: 7px;
  left: -30px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-elev);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 4px var(--bg), 0 0 14px rgba(var(--accent-rgb), 0.5);
  ${X.tablet} { left: -38px; }
`,Wg=v.span`
  font-family: ${nt.mono};
  font-size: 13px;
  color: var(--ink-3);
  letter-spacing: 0.02em;
  display: block;
  margin-bottom: 8px;

  ${X.tablet} {
    position: absolute;
    left: -220px;
    top: 4px;
    width: 168px;
    text-align: right;
    margin-bottom: 0;
  }
`,Fg=v.h3`
  font-family: ${nt.display};
  font-size: clamp(22px, 3vw, 28px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 4px;

  a {
    color: var(--ink);
    background-image: linear-gradient(var(--accent), var(--accent));
    background-size: 0% 2px;
    background-repeat: no-repeat;
    background-position: 0 100%;
    transition: background-size 0.3s var(--ease-out), color 0.3s var(--ease-out);
    &:hover { color: var(--accent-ink); background-size: 100% 2px; }
  }
`,Ig=v.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--accent-ink);
  margin-bottom: 2px;
`,Pg=v.p`
  font-size: 13.5px;
  color: var(--ink-3);
  font-style: italic;
  margin-bottom: 16px;
`,tv=v.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--ink-2);

  a { color: var(--accent-ink); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--line-2); }
  a:hover { text-decoration-color: var(--accent); }
`,ev=v.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  padding: 9px 16px;
  border-radius: var(--r-pill);
  border: 1px solid var(--line-2);
  background: var(--surface);
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-2);
  transition: border-color 0.25s var(--ease-out), color 0.25s var(--ease-out);

  &:hover { color: var(--ink); border-color: var(--accent); }
  svg { width: 14px; height: 14px; transition: transform 0.3s var(--ease-out); }
  &[data-open='true'] svg { transform: rotate(180deg); }
`,lv=v.span`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  vertical-align: bottom;
`,av=v(R.span)`
  display: inline-block;
  white-space: nowrap;
`,nv=v(R.div)`
  display: grid;
  overflow: hidden;
`,iv=v.div`
  min-height: 0;
  overflow: hidden;
`,uv=v.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
`,cv=v.li`
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ink-2);
  padding-left: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 9px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
  }
  strong { color: var(--ink); font-weight: 600; }
`,ov=({data:d})=>{const S=Bt(),T=q.useRef(null),[f,E]=q.useState(new Set),{scrollYProgress:M}=On({target:T,offset:["start 60%","end 60%"]}),j=xl(M,[0,1],[0,1]),H=Cn(j,{stiffness:140,damping:30,mass:.4}),_=C=>E(V=>{const w=new Set(V);return w.has(C)?w.delete(C):w.add(C),w});return o.jsx(Ll,{id:"professionalexperience",children:o.jsxs(Xl,{$max:"wide",children:[o.jsx(Sl,{title:"Experience",lead:"A decade across enterprise SaaS, from shipping features to owning platform architecture for global consulting clients."}),o.jsxs(Zg,{ref:T,children:[o.jsx(Vg,{}),!S&&o.jsx(Kg,{style:{scaleY:H}}),d.timeline.map((C,V)=>{const w=f.has(V);return o.jsxs(Jg,{initial:S?!1:{opacity:0,x:-24,filter:"blur(6px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.6,ease:[.16,1,.3,1]},children:[o.jsx($g,{}),o.jsx(Wg,{children:C.date}),o.jsx(Fg,{children:o.jsx("a",{href:C.url,target:"_blank",rel:"noopener noreferrer",children:C.title})}),o.jsx(Ig,{children:C.subTitle}),C.previously&&o.jsxs(Pg,{children:["Previously: ",C.previously]}),o.jsx(tv,{dangerouslySetInnerHTML:{__html:C.descriptionSummary}}),C.achievements&&C.achievements.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs(ev,{"data-open":w,onClick:()=>_(V),"aria-expanded":w,children:[o.jsx("span",{children:"Show"}),o.jsx(lv,{children:o.jsx(eu,{mode:"popLayout",initial:!1,children:o.jsx(av,{initial:{y:"100%",opacity:0},animate:{y:"0%",opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.3,ease:[.16,1,.3,1]},children:w?"Less":"More"},w?"less":"more")})}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M6 9l6 6 6-6"})})]}),o.jsx(eu,{initial:!1,children:w&&o.jsx(nv,{initial:{gridTemplateRows:"0fr",opacity:0},animate:{gridTemplateRows:"1fr",opacity:1},exit:{gridTemplateRows:"0fr",opacity:0},transition:{gridTemplateRows:{duration:.45,ease:[.16,1,.3,1]},opacity:{duration:.3,ease:[.16,1,.3,1]}},children:o.jsx(iv,{children:o.jsx(uv,{children:C.achievements.map((Y,tt)=>o.jsxs(cv,{children:[o.jsx("strong",{children:Y.title}),": ",Y.description]},tt))})})})})]})]},V)})]})]})})};function sv(d){const S=q.useCallback(E=>{const M=window.matchMedia(d);return M.addEventListener("change",E),()=>M.removeEventListener("change",E)},[d]),T=q.useCallback(()=>window.matchMedia(d).matches,[d]),f=q.useCallback(()=>!1,[]);return q.useSyncExternalStore(S,T,f)}const a0=v.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: var(--r-xl);
  border: 1px solid var(--line);
  background: var(--surface);
  padding: 38px 34px;
  overflow: hidden;
  transition: border-color 0.3s var(--ease-out), background 0.3s var(--ease-out);

  &:hover { border-color: var(--line-2); background: var(--surface-2); }

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent-hot));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.45s var(--ease-out);
  }
  &:hover::before { transform: scaleX(1); }
`,fv=v.h3`
  font-family: ${nt.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.12;
  margin-bottom: 20px;
`,rv=v.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;
`,dv=v.li`
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--ink-2);
  padding-left: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0; top: 9px;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.8;
  }
`,hv=v.section`
  position: relative;
  --rail: max(var(--gutter), calc((100vw - var(--maxw-wide)) / 2));

  ${X.desktop} {
    --rail: calc((100vw - var(--maxw-wide) - var(--gutter) * 2) / 4 + var(--gutter));
  }
`,mv=v.div`
  position: sticky;
  top: 0;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`,pv=v.div`
  padding-inline: var(--rail);
  margin: 0 0 40px;
  width: 100%;
`,gv=v(R.div)`
  display: flex;
  gap: 26px;
  padding: 0 var(--rail) 8px;
  will-change: transform;

  ${a0} { width: min(440px, 82vw); }
`,vv=v.div`
  margin: 30px var(--rail) 0;
  height: 2px;
  background: var(--line);
  border-radius: 2px;
  overflow: hidden;
`,yv=v(R.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-hot));
  transform-origin: left;
`,bv=v.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,xv=v.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);

  ${X.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,Sv=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${X.mobile} { grid-template-columns: repeat(2, 1fr); }
`,n0=({title:d,content:S})=>o.jsxs(a0,{children:[o.jsx(fv,{children:d}),o.jsx(rv,{children:S.slice(0,4).map((T,f)=>o.jsx(dv,{children:T},f))})]}),i0="The systems I would put my name on, with the numbers that came with them.",zv=({data:d})=>{const S=q.useRef(null),T=q.useRef(null),[f,E]=q.useState(0),{scrollYProgress:M}=On({target:S,offset:["start start","end end"]}),j=xl(M,[0,1],[0,-f]),H=xl(M,[0,1],[0,1]);return q.useEffect(()=>{const _=()=>{const C=T.current;C&&E(Math.max(0,C.scrollWidth-window.innerWidth+48))};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]),o.jsx(hv,{id:"mostproudof",ref:S,style:{height:`calc(100dvh + ${f}px)`},children:o.jsxs(mv,{children:[o.jsx(pv,{children:o.jsx(Sl,{title:"Most Proud Of",lead:i0})}),o.jsx(gv,{ref:T,style:{x:j},children:d.content.map(_=>o.jsx(n0,{title:_.title,content:_.content},_.id))}),o.jsx("div",{style:{width:"100%"},children:o.jsx(vv,{children:o.jsx(yv,{style:{scaleX:H}})})})]})})},Av=({data:d})=>o.jsx(bv,{id:"mostproudof",children:o.jsxs(xv,{children:[o.jsx(Sl,{title:"Most Proud Of",lead:i0}),o.jsx(Sv,{children:d.content.map((S,T)=>o.jsx(Gl,{dir:"up",delay:T%2*.06,children:o.jsx(n0,{title:S.title,content:S.content})},S.id))})]})}),Tv=({data:d})=>{const S=Bt();return sv("(min-width: 1024px)")&&!S?o.jsx(zv,{data:d}):o.jsx(Av,{data:d})},Ev=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${X.mobile} { grid-template-columns: repeat(3, 1fr); gap: 20px; }
`,Mv=v(R.div)`
  position: relative;
  height: 100%;
  border-radius: var(--r-lg);
  border: 1px solid var(--line);
  background: var(--surface);
  padding: 30px 28px;
  display: flex;
  flex-direction: column;
  min-height: 240px;
  overflow: hidden;
  transition: border-color 0.3s var(--ease-out), background 0.3s var(--ease-out);

  &:hover { border-color: var(--line-2); background: var(--surface-2); }
`,wv=v.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${nt.mono};
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--accent-ink);
  margin-bottom: 18px;

  span.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
`,jv=v.h3`
  font-family: ${nt.display};
  font-size: clamp(18px, 1.8vw, 21px);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: var(--ink);
  margin-bottom: auto;
`,Dv=v.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 26px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-2);
  width: max-content;

  svg { width: 15px; height: 15px; transition: transform 0.3s var(--ease-out); }
  &:hover { color: var(--accent-ink); }
  &:hover svg { transform: translate(2px, -2px); }
`,Cv=d=>{const S=d.toLowerCase();return S.includes("azure")||S.includes("microsoft")?"Microsoft":S.includes("aws")?"Amazon Web Services":"Credential"},Ov=({data:d})=>{const S=Bt();return o.jsx(Ll,{id:"certifications",children:o.jsxs(Xl,{$max:"wide",children:[o.jsx(Sl,{title:"Certifications",lead:"Cloud and data credentials across Azure and AWS, kept current."}),o.jsx(Ev,{children:d.certificateProps.certificateMetaData.map((T,f)=>o.jsx(l0,{max:9,children:o.jsxs(Mv,{initial:S?!1:{opacity:0,y:28,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.3},transition:{duration:.6,delay:f*.1,ease:[.16,1,.3,1]},children:[o.jsxs(wv,{children:[o.jsx("span",{className:"dot"}),Cv(T.title)]}),o.jsx(jv,{children:T.title}),o.jsxs(Dv,{href:T.buttonProps.link,target:"_blank",rel:"noopener noreferrer",children:["Verify credential",o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),o.jsx("path",{d:"M15 3h6v6M10 14L21 3"})]})]})]})},f))})]})})},Vd=[.16,1,.3,1],Uv=v.div`
  max-width: 900px;
`,Bv=v(R.blockquote)`
  position: relative;
  padding-left: clamp(22px, 3vw, 38px);
  font-family: ${nt.display};
  font-weight: 500;
  font-size: clamp(22px, 2.9vw, 38px);
  line-height: 1.36;
  letter-spacing: -0.02em;
  color: var(--ink);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 3px;
    border-radius: 3px;
    background: linear-gradient(180deg, var(--accent), var(--accent-hot));
  }
`,Hv=v(R.figcaption)`
  margin-top: clamp(30px, 4.5vh, 48px);
  padding-left: clamp(22px, 3vw, 38px);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,_v=v.span`
  font-weight: 600;
  font-size: 16px;
  color: var(--ink);
`,Nv=v.span`
  font-size: 14px;
  color: var(--ink-3);

  em {
    font-style: normal;
    font-family: ${nt.mono};
    font-size: 11.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-ink);
  }
`,Rv=({data:d})=>{const S=Bt(),T=d.quoteProps.quoteMetaData[0];return T?o.jsx(Ll,{id:"testimonials",children:o.jsxs(Xl,{$max:"wide",children:[o.jsx(Sl,{title:"Testimonials",lead:"Words from people I have built alongside."}),o.jsxs(Uv,{children:[o.jsxs(Bv,{initial:S?!1:{opacity:0,y:22,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.8,ease:Vd},children:["“",T.quote,"”"]}),o.jsxs(Hv,{initial:S?!1:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.6},transition:{duration:.6,delay:.15,ease:Vd},children:[o.jsx(_v,{children:T.givenBy}),o.jsxs(Nv,{children:[T.subTitleGivenBy,T.source&&o.jsxs(o.Fragment,{children:["  ·  ",o.jsxs("em",{children:["via ",T.source]})]})]})]})]})]})}):null},qv=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid var(--line);

  ${X.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 56px;
  }
`,Qv=v(R.div)`
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Yv=v.span`
  font-family: ${nt.mono};
  font-size: 13px;
  color: var(--accent-ink);
  letter-spacing: 0.02em;
`,Gv=v.h3`
  font-family: ${nt.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.15;
`,Lv=v.p`
  font-size: 15px;
  color: var(--ink-2);
  line-height: 1.5;
`,Xv=({data:d})=>{const S=Bt();return o.jsx(Ll,{id:"educationalqualifications",children:o.jsxs(Xl,{$max:"wide",children:[o.jsx(Sl,{title:"Education"}),o.jsx(qv,{children:d.timeline.map((T,f)=>o.jsxs(Qv,{initial:S?!1:{opacity:0,y:22,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.55,delay:f%2*.08,ease:[.16,1,.3,1]},children:[o.jsx(Yv,{children:T.date}),o.jsx(Gv,{children:T.title}),o.jsx(Lv,{children:T.subTitle})]},f))})]})})},kv=v.h2`
  font-family: ${nt.display};
  font-weight: 600;
  font-size: clamp(40px, 7.5vw, 88px);
  letter-spacing: -0.035em;
  line-height: 0.96;
  color: var(--ink);
  margin-bottom: 26px;

  em { font-style: normal; color: var(--accent-ink); }
`,Zv=v.p`
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.6;
  color: var(--ink-2);
  max-width: 50ch;
  margin-bottom: 64px;
`,Vv=v.div`
  border-top: 1px solid var(--line);
`,u0=v(R.a)`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 26px 4px;
  border-bottom: 1px solid var(--line);
  transition: padding-left 0.35s var(--ease-out);

  &:hover { padding-left: 16px; }
`,Kv=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--r-md);
  background: var(--accent-soft);
  color: var(--accent-ink);
  flex-shrink: 0;
  svg { width: 22px; height: 22px; }
`,Jv=v.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
  flex: 1;
`,$v=v.span`
  font-family: ${nt.mono};
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
`,Wv=v.span`
  font-family: ${nt.display};
  font-size: clamp(18px, 2.4vw, 24px);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Fv=v.span`
  flex-shrink: 0;
  color: var(--ink-3);
  transition: transform 0.3s var(--ease-out), color 0.3s var(--ease-out);
  svg { width: 20px; height: 20px; }

  ${u0}:hover & { color: var(--accent-ink); transform: translate(4px, -4px); }
`,Iv={email:o.jsx(Id,{}),phone:o.jsx(lp,{}),linkedin:o.jsx(ap,{}),location:o.jsx(np,{})},Pv=({data:d})=>{const S=Bt();return o.jsx(Ll,{id:"contact",children:o.jsxs(Xl,{$max:"wide",children:[o.jsx(Gl,{dir:"up",children:o.jsxs(kv,{children:[o.jsx(Do,{text:"Let's build something"}),o.jsx("br",{}),o.jsx("em",{children:o.jsx(Do,{text:"that scales.",delay:.15})})]})}),o.jsx(Gl,{dir:"up",delay:.1,children:o.jsx(Zv,{children:"Architecture, agentic AI, or platform performance. If it needs to work at scale, I want to hear about it."})}),o.jsx(Vv,{children:d.contactMetaData.map((T,f)=>{const E=T.icon.toLowerCase(),M=T.href.startsWith("http");return o.jsxs(u0,{href:T.href,target:M?"_blank":void 0,rel:M?"noopener noreferrer":void 0,initial:S?!1:{opacity:0,y:20,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.5,delay:f*.07,ease:[.16,1,.3,1]},children:[o.jsx(Kv,{children:Iv[E]??o.jsx(Id,{})}),o.jsxs(Jv,{children:[o.jsx($v,{children:E==="email"?"Email":T.icon}),o.jsx(Wv,{children:T.content})]}),o.jsx(Fv,{children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M7 17L17 7M9 7h8v8"})})})]},f)})})]})})},t1={sectionTitle:"About Me",content:["🔹  I architect systems that process 200M+ records across 100+ tables in under 15 minutes — with zero downtime. Currently the Enterprise Architect of Promotion Advisor, McKinsey Periscope's flagship multi-tenant SaaS, where I lead end-to-end technical strategy across agentic AI, cloud-native platforms, and high-throughput data infrastructure for 65+ engineers and global enterprise CPG and retail clients.","An expert in designing multi-agent AI architectures (MCP connectors, evaluation harnesses, instruction-set ownership), transforming legacy monoliths into cloud-native microservices on Kubernetes, and modernizing data pipelines with Databricks, ClickHouse, and PostgreSQL — delivering billion-row sub-second analytics and sub-2 second response times on 2M+ record datasets.","Passionate about Spec-Driven Development and the AI-led SDLC. Coached org-wide adoption of Cursor and SDD frameworks (OpenSpec, SpecKit, BMad), delivering a 37% capacity increase. I balance technical depth with measurable business outcomes — embedding security-first practices (SOC2, Casbin, two-layer FAC + DAC) and FinOps discipline across the SDLC, and aligning architecture roadmaps with OKRs."],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},e1={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},l1={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},a1={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},n1={name:"Pranshu Nijhawan",designation:"Architecting Agentic AI. Engineering at Scale.",headline:"Principal Architect with 10+ years in enterprise SaaS, currently the Enterprise Architect of McKinsey Periscope's flagship multi-tenant Promotion Advisor platform across 65+ engineers. I architect agentic AI systems (MCP, multi-agent orchestration, evaluation harnesses), high-performance data platforms (sub-2 second response on 2M+ records, billion-row ClickHouse analytics), and two-layer security (FAC + DAC with Casbin) — while coaching org-wide AI-assisted engineering that delivered a 37% capacity increase and spearheading Spec-Driven Development to evolve the organization toward an AI-led SDLC.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},i1={sectionTitle:"Most Proud Of",content:[{id:1,title:"Multi-Agent AI Architecture for Promotion Advisor (Periscope)",content:["Built a multi-agent architecture for McKinsey's flagship Promotion Advisor SaaS, with MCP (Model Context Protocol) connectors, externalized instruction sets owned by product teams, and evaluation harnesses for continuous quality.","Read-replica isolation with data-access control enforced at the SQL layer ensured agentic workflows could never cross tenant or authorization boundaries.","Cut business-rule changes from multi-day deploys to hour-level config updates, dramatically accelerating client-driven iteration cycles.","Established the architectural pattern for product teams to self-serve new agentic capabilities without architectural review."]},{id:2,title:"Spec-Driven Development Agents & AI-Led SDLC",content:["Introduced org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit, BMad) across greenfield and brownfield product development.","Developed the 'Spec-Driven Development Agent' and 'Repo Mastery Agent' — autonomous systems enforcing 11-dimension anti-hallucination audits and 100/100 Spec Quality Scores.","Established the abstraction and technical detail required for Devs, Product Managers, and QAs to seamlessly collaborate on a shared spec.","Coaching delivered a 37% capacity increase across the engineering organization, evolving the SDLC toward an AI-led model.","Built and deployed 10+ production agents (Architecture Diagram Generators, ADR / APR Writers, automated Technical Communications)."]},{id:3,title:"Real-Time Conflict Engine — 5,000x Algorithmic Speedup",content:["Built real-time multi-dimensional conflict detection on PostgreSQL using progressive candidate narrowing for the Promotion Advisor platform.","Delivered sub-2 second response times on 2M+ record datasets with multi-dimensional eligibility rules.","Achieved a 5,000x algorithmic improvement over the prior implementation through query restructuring and index strategy.","Unlocked interactive what-if analysis for consulting clients that was previously a batch-only workflow."]},{id:4,title:"ClickHouse Analytics Platform — Billion-Row Sub-Second Queries",content:["Architected the platform's ClickHouse analytics layer for billion-row sub-second queries powering interactive dashboards.","Optimized the data model with Projections and Dictionaries; built a dynamic Query Builder Engine for runtime-composed analytical queries.","Delivered 6.6–12.6x cost efficiency versus Databricks SQL Serverless on equivalent workloads.","Achieved ~11x compression versus Delta Lake on the same datasets, materially reducing storage and scan costs."]},{id:5,title:"Two-Layer Authorization Engine (FAC + DAC) with Casbin",content:["Designed a two-layer authorization architecture so unauthorized data never leaves the database.","Layer 1 — Feature Access Control: enforces capability-level permissions at the GraphQL resolver middleware.","Layer 2 — Data Access Control: integrates Casbin at the SQL layer, dynamically rewriting queries based on identity, tenant, and role.","Replaced ad-hoc per-query permission checks with a single declarative policy surface auditable across the platform."]},{id:6,title:"Analytics Cost Migration — $172K Annual Savings",content:["Migrated heavy analytics workloads from variable-cost Databricks compute to fixed-cost PostgreSQL.","Cut annual analytics infrastructure spend by $172K (a 23–50% reduction depending on the workload profile).","Re-architected query patterns and data models to make PostgreSQL competitive with Databricks SQL on the migrated workloads.","Delivered FinOps wins without compromising analytical capability or query latency for end users."]},{id:7,title:"Zero-Downtime ETL Platform — Blue/Green Data Processing at Scale",content:["Engineered a highly scalable and fault-tolerant ETL platform using Databricks, Spark, Azure Data Factory, and PostgreSQL.","Designed around a Blue/Green deployment strategy to ensure zero downtime during data ingestion and transformation cycles.","Processed 200+ million records across 100+ tables in under 15 minutes using Change Data Capture (CDC) and dynamic schema allocation.","Enabled seamless schema evolution and pipeline reusability across multiple tenants and data domains."]}]},u1={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect I",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 – Present",descriptionSummary:`At McKinsey, I serve as the Enterprise Architect of <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a>, a flagship multi-tenant SaaS in the <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> suite for CPG and retail clients. I built the platform's multi-agent AI architecture, coached org-wide AI-assisted engineering that delivered a 37% capacity increase, and spearheaded Spec-Driven Development to evolve the organization toward an AI-led SDLC — while leading 65+ engineers across 5 Development and 1 Core Support Squad and partnering with senior consulting leaders on high-stakes RFPs and enterprise implementations.`,achievements:[{title:"Agentic AI Architecture",description:"Built a multi-agent architecture for the platform using MCP (Model Context Protocol) connectors, externalized instruction sets owned by product teams, evaluation harnesses, and read-replica isolation with data-access control enforced at the SQL layer. Cut business-rule changes from multi-day deploys to hour-level config updates."},{title:"Spec-Driven Development & AI-Led SDLC",description:"Introduced org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit) across greenfield and brownfield product development. Developed the 'Spec-Driven Development Agent' and 'Repo Mastery Agent' — autonomous systems enforcing 11-dimension anti-hallucination audits and 100/100 Spec Quality Scores — establishing the abstraction and technical detail required for Devs, Product Managers, and QAs to seamlessly collaborate on a shared spec."},{title:"Enterprise Agent Skills Library",description:"Built a comprehensive library of autonomous, self-contained AI agents leveraging embedded design systems, deterministic validation checklists, and MCP tools. Deployed 10+ production agents across enterprise products, including Architecture Diagram Generators, ADR/APR Writers, and automated Technical Communications."},{title:"Real-Time Conflict Engine — 5,000x Speedup",description:"Built real-time multi-dimensional conflict detection on PostgreSQL using progressive candidate narrowing. Delivered sub-2 second response times on 2M+ records, achieving a 5,000x algorithmic improvement over the prior implementation."},{title:"ClickHouse Analytics Platform",description:"Built the platform's ClickHouse analytics layer for billion-row sub-second queries. Optimized the data model with Projections and Dictionaries and built a dynamic Query Builder Engine. Delivered 6.6–12.6x cost efficiency vs Databricks SQL Serverless and ~11x compression vs Delta Lake."},{title:"Analytics Cost Migration — $172K/Year Savings",description:"Migrated heavy analytics workloads from variable-cost Databricks compute to fixed-cost PostgreSQL. Cut annual analytics infrastructure spend by $172K (a 23–50% reduction depending on the workload)."},{title:"Two-Layer Authorization Engine (FAC + DAC)",description:"Built a two-layer authorization engine. Layer 1 (Feature Access Control) enforces at the GraphQL resolver middleware. Layer 2 (Data Access Control) integrates Casbin at the SQL layer, dynamically rewriting queries so unauthorized data never leaves the database."},{title:"NL-to-SQL ML Prototyping",description:"Trained a custom encoder-decoder transformer (BPE tokenizer, PyTorch) and fine-tuned T5 on synthetic NL-to-SQL datasets generated from production PostgreSQL schemas."},{title:"Engineering Standards & FinOps",description:"Institutionalized cross-product standards by publishing the C4 Architecture Handbook, deploying a serverless Azure cost attribution dashboard via GitHub Actions, and building an automated external API documentation pipeline with Git changelog guardrails."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 – March 2022",descriptionSummary:'At Eptura, I re-architected a single-tenant workspace SaaS — <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software) — to cloud-native microservices on AKS and built a global IoT release orchestrator synchronizing 300M+ devices. Directed 20 engineers across 4 squads, driving technical excellence and team growth.',achievements:[{title:"Cloud-Native Re-Architecture",description:"Migrated legacy single-tenant SaaS to cloud-native microservices on Azure Kubernetes Service (AKS). Delivered 60% faster incident recovery and eliminated single-tenant scaling bottlenecks critical for client operations."},{title:"Global IoT Release Orchestration",description:"Built a release orchestration system (Azure IoT Hub, Azure Functions, Azure CosmosDB) synchronizing firmware updates across 300M+ IoT devices globally with zero-downtime rollouts."},{title:"Engineering Leadership",description:"Directed 20 engineers (4 tech leads) across four squads. Established a structured mentorship program: +20% retention and accelerated engineering progression."}]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 – April 2021",descriptionSummary:"At Nagarro, I shipped full-stack web and mobile applications for e-commerce and HR enterprise clients on Angular, .NET Core, PostgreSQL, and Ionic. Established CI/CD and IaC practices that cut deployment failures by 70% across client projects.",achievements:[{title:"Full-Stack Web + Mobile Delivery",description:"Shipped production apps on Angular, .NET Core, PostgreSQL, and Ionic Framework for e-commerce and HR clients with 99.5%+ uptime across web and mobile."},{title:"CI/CD & Infrastructure as Code",description:"Established CI/CD pipelines and IaC practices: 70% reduction in deployment failures across client projects, ensuring stable and predictable software releases."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 – December 2019",descriptionSummary:'At Condeco, I shipped C# / .NET / React / SQL Server microservices for the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> workspace SaaS that sustained 3x customer growth without reliability regressions. Cut build times by 40% and core query latency by 3x through data model refactoring.',achievements:[{title:"Microservices for 3x Customer Scale",description:"Designed and shipped C# / .NET / React / SQL Server microservices, sustaining 3x customer scale-up without reliability regressions for the workspace SaaS platform."},{title:"CI/CD & Data Model Optimization",description:"Cut build times by 40% and refactored core data models to reduce average query latency by 3x, resulting in faster, more reliable releases and improved client-facing performance."}]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",previously:"Intern",date:"February 2016 – August 2018",descriptionSummary:"At Gartner, I shipped backend features on C# / .NET Core / React for an HR analytics SaaS, improving survey data accuracy by 60% for consulting clients. Automated SQL workflows saved 240+ engineering hours annually.",achievements:[{title:"SaaS Analytics Backend",description:"Shipped backend features on C# / .NET Core / React for the HR analytics platform, improving employee survey data accuracy by 60% for consulting clients."},{title:"SQL Workflow Automation",description:"Developed and automated SQL workflows (stored procedures, SQL Agent jobs): saved 240+ engineering hours annually in manual data processing and improved data delivery efficiency for clients."}],last:!0}]},c1={sectionTitle:"Technology Proficiency",skills:[{icon:"AI",category:"AI & Agentic Engineering",skills:[{name:"Multi-Agent Orchestration",percentage:100},{name:"MCP (Model Context Protocol)",percentage:100},{name:"Cursor (Rules / Skills / Agents / Hooks / SDK)",percentage:100},{name:"Spec-Driven Development (OpenSpec, SpecKit, BMad)",percentage:100},{name:"RAG & Evaluation Frameworks",percentage:90},{name:"PyTorch / T5 Fine-tuning, NL-to-SQL",percentage:80}]},{icon:"Architecture",category:"Architecture",skills:[{name:"Multi-Tenant SaaS Architecture",percentage:100},{name:"Microservices & Event-Driven Architecture",percentage:100},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Distributed Systems",percentage:100},{name:"C4 Modeling & ADR / APR Authorship",percentage:95},{name:"Serverless",percentage:80}]},{icon:"Backend",category:"Backend",skills:[{name:"TypeScript / Node.js / Fastify",percentage:100},{name:"C# / .NET Core",percentage:100},{name:"Python",percentage:90},{name:"GraphQL",percentage:90},{name:"REST APIs",percentage:100}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"TypeScript",percentage:100},{name:"Angular",percentage:90},{name:"Micro-Frontends",percentage:90},{name:"Ionic Framework",percentage:60}]},{icon:"Database",category:"Data & Storage",skills:[{name:"PostgreSQL",percentage:100},{name:"ClickHouse",percentage:95},{name:"SQL Server",percentage:95},{name:"NoSQL (CosmosDB, DynamoDB)",percentage:85}]},{icon:"Cloud",category:"Cloud & Infrastructure",skills:[{name:"Microsoft Azure",percentage:95},{name:"Amazon Web Services (AWS)",percentage:85},{name:"Kubernetes (AKS)",percentage:90},{name:"Terraform / ArgoCD / Helm (GitOps)",percentage:90}]},{icon:"DataEngineering",category:"Data Engineering & Real-Time Analytics",skills:[{name:"Databricks (PySpark, SparkSQL)",percentage:90},{name:"ClickHouse Analytics (Projections, Dictionaries)",percentage:95},{name:"Real-Time Analytics & Query Engines",percentage:95},{name:"Blue-Green ETL & Data Modeling",percentage:90}]},{icon:"Security",category:"Security & Compliance",skills:[{name:"Two-Layer FAC + DAC Architecture",percentage:100},{name:"Casbin RBAC / ABAC",percentage:95},{name:"SOC2 / Secure SDLC",percentage:90},{name:"Wiz / SonarQube / OpenTelemetry",percentage:85}]}]},o1={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},s1={aboutSection:t1,certifications:e1,contactMe:l1,educationalQualifications:a1,homeSection:n1,mostProudOf:i1,professionalExperience:u1,technologyProficiency:c1,testimonials:o1},Ke=s1;function f1(){const[d,S]=q.useState(!1);return o.jsxs(Lm,{children:[o.jsx(Ym,{}),o.jsxs(Xm,{children:[o.jsx(Pm,{}),o.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),o.jsx(yp,{revealed:d}),o.jsxs("main",{id:"main-content",style:{position:"relative",zIndex:1},role:"main",children:[o.jsx(mg,{data:Ke.homeSection,start:d}),o.jsx(Ug,{data:Ke.aboutSection}),o.jsx(kg,{data:Ke.technologyProficiency}),o.jsx(ov,{data:Ke.professionalExperience}),o.jsx(Tv,{data:Ke.mostProudOf}),o.jsx(Ov,{data:Ke.certifications}),o.jsx(Rv,{data:Ke.testimonials}),o.jsx(Xv,{data:Ke.educationalQualifications}),o.jsx(Pv,{data:Ke.contactMe})]}),o.jsx(Up,{}),o.jsx(eu,{children:!d&&o.jsx(Qp,{onComplete:()=>S(!0)},"intro")})]})]})}"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);Qm.createRoot(document.getElementById("root")).render(o.jsx(q.StrictMode,{children:o.jsx(f1,{})}));
