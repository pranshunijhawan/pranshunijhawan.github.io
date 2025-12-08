import{r as Y,j as o,m as v,A as wn,u as dg,a as go,b as zd,c as we}from"./vendor-motion-BoSVoJ0s.js";import{r as pg,a as gg}from"./vendor-react-DlBnNAMw.js";import{f as mg,m as kt,d,l as vo}from"./vendor-styled-Du6AN5G6.js";(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))p(T);new MutationObserver(T=>{for(const H of T)if(H.type==="childList")for(const E of H.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&p(E)}).observe(document,{childList:!0,subtree:!0});function N(T){const H={};return T.integrity&&(H.integrity=T.integrity),T.referrerPolicy&&(H.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?H.credentials="include":T.crossOrigin==="anonymous"?H.credentials="omit":H.credentials="same-origin",H}function p(T){if(T.ep)return;T.ep=!0;const H=N(T);fetch(T.href,H)}})();var mo={exports:{}},zn={},ho={exports:{}},bo={};var wd;function hg(){return wd||(wd=1,(function(b){function j(z,M){var _=z.length;z.push(M);t:for(;0<_;){var ct=_-1>>>1,ot=z[ct];if(0<T(ot,M))z[ct]=M,z[_]=ot,_=ct;else break t}}function N(z){return z.length===0?null:z[0]}function p(z){if(z.length===0)return null;var M=z[0],_=z.pop();if(_!==M){z[0]=_;t:for(var ct=0,ot=z.length,Gt=ot>>>1;ct<Gt;){var gt=2*(ct+1)-1,tt=z[gt],Et=gt+1,Ae=z[Et];if(0>T(tt,_))Et<ot&&0>T(Ae,tt)?(z[ct]=Ae,z[Et]=_,ct=Et):(z[ct]=tt,z[gt]=_,ct=gt);else if(Et<ot&&0>T(Ae,_))z[ct]=Ae,z[Et]=_,ct=Et;else break t}}return M}function T(z,M){var _=z.sortIndex-M.sortIndex;return _!==0?_:z.id-M.id}if(b.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var H=performance;b.unstable_now=function(){return H.now()}}else{var E=Date,G=E.now();b.unstable_now=function(){return E.now()-G}}var q=[],V=[],xt=1,D=null,J=3,Yt=!1,I=!1,Ct=!1,ft=!1,$=typeof setTimeout=="function"?setTimeout:null,bt=typeof clearTimeout=="function"?clearTimeout:null,pt=typeof setImmediate<"u"?setImmediate:null;function jt(z){for(var M=N(V);M!==null;){if(M.callback===null)p(V);else if(M.startTime<=z)p(V),M.sortIndex=M.expirationTime,j(q,M);else break;M=N(V)}}function $t(z){if(Ct=!1,jt(z),!I)if(N(q)!==null)I=!0,ue||(ue=!0,ce());else{var M=N(V);M!==null&&De($t,M.startTime-z)}}var ue=!1,ye=-1,ve=5,Ya=-1;function An(){return ft?!0:!(b.unstable_now()-Ya<ve)}function Xa(){if(ft=!1,ue){var z=b.unstable_now();Ya=z;var M=!0;try{t:{I=!1,Ct&&(Ct=!1,bt(ye),ye=-1),Yt=!0;var _=J;try{e:{for(jt(z),D=N(q);D!==null&&!(D.expirationTime>z&&An());){var ct=D.callback;if(typeof ct=="function"){D.callback=null,J=D.priorityLevel;var ot=ct(D.expirationTime<=z);if(z=b.unstable_now(),typeof ot=="function"){D.callback=ot,jt(z),M=!0;break e}D===N(q)&&p(q),jt(z)}else p(q);D=N(q)}if(D!==null)M=!0;else{var Gt=N(V);Gt!==null&&De($t,Gt.startTime-z),M=!1}}break t}finally{D=null,J=_,Yt=!1}M=void 0}}finally{M?ce():ue=!1}}}var ce;if(typeof pt=="function")ce=function(){pt(Xa)};else if(typeof MessageChannel<"u"){var Tn=new MessageChannel,Ml=Tn.port2;Tn.port1.onmessage=Xa,ce=function(){Ml.postMessage(null)}}else ce=function(){$(Xa,0)};function De(z,M){ye=$(function(){z(b.unstable_now())},M)}b.unstable_IdlePriority=5,b.unstable_ImmediatePriority=1,b.unstable_LowPriority=4,b.unstable_NormalPriority=3,b.unstable_Profiling=null,b.unstable_UserBlockingPriority=2,b.unstable_cancelCallback=function(z){z.callback=null},b.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<z?Math.floor(1e3/z):5},b.unstable_getCurrentPriorityLevel=function(){return J},b.unstable_next=function(z){switch(J){case 1:case 2:case 3:var M=3;break;default:M=J}var _=J;J=M;try{return z()}finally{J=_}},b.unstable_requestPaint=function(){ft=!0},b.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var _=J;J=z;try{return M()}finally{J=_}},b.unstable_scheduleCallback=function(z,M,_){var ct=b.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?ct+_:ct):_=ct,z){case 1:var ot=-1;break;case 2:ot=250;break;case 5:ot=1073741823;break;case 4:ot=1e4;break;default:ot=5e3}return ot=_+ot,z={id:xt++,callback:M,priorityLevel:z,startTime:_,expirationTime:ot,sortIndex:-1},_>ct?(z.sortIndex=_,j(V,z),N(q)===null&&z===N(V)&&(Ct?(bt(ye),ye=-1):Ct=!0,De($t,_-ct))):(z.sortIndex=ot,j(q,z),I||Yt||(I=!0,ue||(ue=!0,ce()))),z},b.unstable_shouldYield=An,b.unstable_wrapCallback=function(z){var M=J;return function(){var _=J;J=M;try{return z.apply(this,arguments)}finally{J=_}}}})(bo)),bo}var Ad;function bg(){return Ad||(Ad=1,ho.exports=hg()),ho.exports}var Td;function yg(){if(Td)return zn;Td=1;var b=bg(),j=pg(),N=gg();function p(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function H(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function E(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function G(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function q(t){if(H(t)!==t)throw Error(p(188))}function V(t){var e=t.alternate;if(!e){if(e=H(t),e===null)throw Error(p(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return q(n),t;if(i===l)return q(n),e;i=i.sibling}throw Error(p(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,c=n.child;c;){if(c===a){u=!0,a=n,l=i;break}if(c===l){u=!0,l=n,a=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===a){u=!0,a=i,l=n;break}if(c===l){u=!0,l=i,a=n;break}c=c.sibling}if(!u)throw Error(p(189))}}if(a.alternate!==l)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?t:e}function xt(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=xt(t),e!==null)return e;t=t.sibling}return null}var D=Object.assign,J=Symbol.for("react.element"),Yt=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),Ct=Symbol.for("react.fragment"),ft=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),bt=Symbol.for("react.consumer"),pt=Symbol.for("react.context"),jt=Symbol.for("react.forward_ref"),$t=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),ye=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),Ya=Symbol.for("react.activity"),An=Symbol.for("react.memo_cache_sentinel"),Xa=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=Xa&&t[Xa]||t["@@iterator"],typeof t=="function"?t:null)}var Tn=Symbol.for("react.client.reference");function Ml(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ct:return"Fragment";case $:return"Profiler";case ft:return"StrictMode";case $t:return"Suspense";case ue:return"SuspenseList";case Ya:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case I:return"Portal";case pt:return t.displayName||"Context";case bt:return(t._context.displayName||"Context")+".Consumer";case jt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ye:return e=t.displayName||null,e!==null?e:Ml(t.type)||"Memo";case ve:e=t._payload,t=t._init;try{return Ml(t(e))}catch{}}return null}var De=Array.isArray,z=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},ct=[],ot=-1;function Gt(t){return{current:t}}function gt(t){0>ot||(t.current=ct[ot],ct[ot]=null,ot--)}function tt(t,e){ot++,ct[ot]=t.current,t.current=e}var Et=Gt(null),Ae=Gt(null),$e=Gt(null),jn=Gt(null);function En(t,e){switch(tt($e,e),tt(Ae,t),tt(Et,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Lf(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Lf(e),t=Zf(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}gt(Et),tt(Et,t)}function Qa(){gt(Et),gt(Ae),gt($e)}function Ji(t){t.memoizedState!==null&&tt(jn,t);var e=Et.current,a=Zf(e,t.type);e!==a&&(tt(Ae,t),tt(Et,a))}function Mn(t){Ae.current===t&&(gt(Et),gt(Ae)),jn.current===t&&(gt(jn),yn._currentValue=_)}var $i,xo;function za(t){if($i===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);$i=e&&e[1]||"",xo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$i+t+xo}var Wi=!1;function Fi(t,e){if(!t||Wi)return"";Wi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(y){var h=y}Reflect.construct(t,[],w)}else{try{w.call()}catch(y){h=y}t.call(w.prototype)}}else{try{throw Error()}catch(y){h=y}(w=t())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(y){if(y&&h&&typeof y.stack=="string")return[y.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),m=c.split(`
`);for(n=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(l===s.length||n===m.length)for(l=s.length-1,n=m.length-1;1<=l&&0<=n&&s[l]!==m[n];)n--;for(;1<=l&&0<=n;l--,n--)if(s[l]!==m[n]){if(l!==1||n!==1)do if(l--,n--,0>n||s[l]!==m[n]){var x=`
`+s[l].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=l&&0<=n);break}}}finally{Wi=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?za(a):""}function Qd(t,e){switch(t.tag){case 26:case 27:case 5:return za(t.type);case 16:return za("Lazy");case 13:return t.child!==e&&e!==null?za("Suspense Fallback"):za("Suspense");case 19:return za("SuspenseList");case 0:case 15:return Fi(t.type,!1);case 11:return Fi(t.type.render,!1);case 1:return Fi(t.type,!0);case 31:return za("Activity");default:return""}}function So(t){try{var e="",a=null;do e+=Qd(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ii=Object.prototype.hasOwnProperty,Pi=b.unstable_scheduleCallback,tu=b.unstable_cancelCallback,Vd=b.unstable_shouldYield,Ld=b.unstable_requestPaint,Wt=b.unstable_now,Zd=b.unstable_getCurrentPriorityLevel,zo=b.unstable_ImmediatePriority,wo=b.unstable_UserBlockingPriority,Dn=b.unstable_NormalPriority,Kd=b.unstable_LowPriority,Ao=b.unstable_IdlePriority,Jd=b.log,$d=b.unstable_setDisableYieldValue,Dl=null,Ft=null;function We(t){if(typeof Jd=="function"&&$d(t),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(Dl,t)}catch{}}var It=Math.clz32?Math.clz32:Id,Wd=Math.log,Fd=Math.LN2;function Id(t){return t>>>=0,t===0?32:31-(Wd(t)/Fd|0)|0}var Cn=256,On=262144,Hn=4194304;function wa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Un(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=wa(l):(u&=c,u!==0?n=wa(u):a||(a=c&~t,a!==0&&(n=wa(a))))):(c=l&~i,c!==0?n=wa(c):u!==0?n=wa(u):a||(a=l&~t,a!==0&&(n=wa(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Cl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Pd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function To(){var t=Hn;return Hn<<=1,(Hn&62914560)===0&&(Hn=4194304),t}function eu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ol(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function t0(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,m=t.hiddenUpdates;for(a=u&~a;0<a;){var x=31-It(a),w=1<<x;c[x]=0,s[x]=-1;var h=m[x];if(h!==null)for(m[x]=null,x=0;x<h.length;x++){var y=h[x];y!==null&&(y.lane&=-536870913)}a&=~w}l!==0&&jo(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function jo(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-It(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Eo(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-It(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function Mo(t,e){var a=e&-e;return a=(a&42)!==0?1:au(a),(a&(t.suspendedLanes|e))!==0?0:a}function au(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function lu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Do(){var t=M.p;return t!==0?t:(t=window.event,t===void 0?32:md(t.type))}function Co(t,e){var a=M.p;try{return M.p=t,e()}finally{M.p=a}}var Fe=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Fe,Xt="__reactProps$"+Fe,Va="__reactContainer$"+Fe,nu="__reactEvents$"+Fe,e0="__reactListeners$"+Fe,a0="__reactHandles$"+Fe,Oo="__reactResources$"+Fe,Hl="__reactMarker$"+Fe;function iu(t){delete t[Ot],delete t[Xt],delete t[nu],delete t[e0],delete t[a0]}function La(t){var e=t[Ot];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Va]||a[Ot]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Pf(t);t!==null;){if(a=t[Ot])return a;t=Pf(t)}return e}t=a,a=t.parentNode}return null}function Za(t){if(t=t[Ot]||t[Va]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ul(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(p(33))}function Ka(t){var e=t[Oo];return e||(e=t[Oo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Mt(t){t[Hl]=!0}var Ho=new Set,Uo={};function Aa(t,e){Ja(t,e),Ja(t+"Capture",e)}function Ja(t,e){for(Uo[t]=e,t=0;t<e.length;t++)Ho.add(e[t])}var l0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bo={},No={};function n0(t){return Ii.call(No,t)?!0:Ii.call(Bo,t)?!1:l0.test(t)?No[t]=!0:(Bo[t]=!0,!1)}function Bn(t,e,a){if(n0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Nn(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Ce(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _o(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function i0(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uu(t){if(!t._valueTracker){var e=_o(t)?"checked":"value";t._valueTracker=i0(t,e,""+t[e])}}function qo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=_o(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var u0=/[\n"\\]/g;function se(t){return t.replace(u0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function cu(t,e,a,l,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+oe(e)):t.value!==""+oe(e)&&(t.value=""+oe(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?ou(t,u,oe(e)):a!=null?ou(t,u,oe(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+oe(c):t.removeAttribute("name")}function ko(t,e,a,l,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){uu(t);return}a=a!=null?""+oe(a):"",e=e!=null?""+oe(e):a,c||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),uu(t)}function ou(t,e,a){e==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function $a(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+oe(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Go(t,e,a){if(e!=null&&(e=""+oe(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+oe(a):""}function Ro(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(p(92));if(De(l)){if(1<l.length)throw Error(p(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=oe(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),uu(t)}function Wa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var c0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yo(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||c0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Xo(t,e,a){if(e!=null&&typeof e!="object")throw Error(p(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&Yo(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&Yo(t,i,e[i])}function su(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var o0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),s0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qn(t){return s0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oe(){}var ru=null;function fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fa=null,Ia=null;function Qo(t){var e=Za(t);if(e&&(t=e.stateNode)){var a=t[Xt]||null;t:switch(t=e.stateNode,e.type){case"input":if(cu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Xt]||null;if(!n)throw Error(p(90));cu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&qo(l)}break t;case"textarea":Go(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&$a(t,!!a.multiple,e,!1)}}}var du=!1;function Vo(t,e,a){if(du)return t(e,a);du=!0;try{var l=t(e);return l}finally{if(du=!1,(Fa!==null||Ia!==null)&&(Ai(),Fa&&(e=Fa,t=Ia,Ia=Fa=null,Qo(e),t)))for(e=0;e<t.length;e++)Qo(t[e])}}function Bl(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Xt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(p(231,e,typeof a));return a}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(He)try{var Nl={};Object.defineProperty(Nl,"passive",{get:function(){pu=!0}}),window.addEventListener("test",Nl,Nl),window.removeEventListener("test",Nl,Nl)}catch{pu=!1}var Ie=null,gu=null,kn=null;function Lo(){if(kn)return kn;var t,e=gu,a=e.length,l,n="value"in Ie?Ie.value:Ie.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return kn=n.slice(t,1<l?1-l:void 0)}function Gn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rn(){return!0}function Zo(){return!1}function Qt(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(a=t[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Rn:Zo,this.isPropagationStopped=Zo,this}return D(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),e}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yn=Qt(Ta),_l=D({},Ta,{view:0,detail:0}),r0=Qt(_l),mu,hu,ql,Xn=D({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ql&&(ql&&t.type==="mousemove"?(mu=t.screenX-ql.screenX,hu=t.screenY-ql.screenY):hu=mu=0,ql=t),mu)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),Ko=Qt(Xn),f0=D({},Xn,{dataTransfer:0}),d0=Qt(f0),p0=D({},_l,{relatedTarget:0}),bu=Qt(p0),g0=D({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=Qt(g0),h0=D({},Ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b0=Qt(h0),y0=D({},Ta,{data:0}),Jo=Qt(y0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S0[t])?!!e[t]:!1}function yu(){return z0}var w0=D({},_l,{key:function(t){if(t.key){var e=v0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(t){return t.type==="keypress"?Gn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),A0=Qt(w0),T0=D({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$o=Qt(T0),j0=D({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),E0=Qt(j0),M0=D({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),D0=Qt(M0),C0=D({},Xn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),O0=Qt(C0),H0=D({},Ta,{newState:0,oldState:0}),U0=Qt(H0),B0=[9,13,27,32],vu=He&&"CompositionEvent"in window,kl=null;He&&"documentMode"in document&&(kl=document.documentMode);var N0=He&&"TextEvent"in window&&!kl,Wo=He&&(!vu||kl&&8<kl&&11>=kl),Fo=" ",Io=!1;function Po(t,e){switch(t){case"keyup":return B0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ts(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pa=!1;function _0(t,e){switch(t){case"compositionend":return ts(e);case"keypress":return e.which!==32?null:(Io=!0,Fo);case"textInput":return t=e.data,t===Fo&&Io?null:t;default:return null}}function q0(t,e){if(Pa)return t==="compositionend"||!vu&&Po(t,e)?(t=Lo(),kn=gu=Ie=null,Pa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wo&&e.locale!=="ko"?null:e.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!k0[t.type]:e==="textarea"}function as(t,e,a,l){Fa?Ia?Ia.push(l):Ia=[l]:Fa=l,e=Oi(e,"onChange"),0<e.length&&(a=new Yn("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Gl=null,Rl=null;function G0(t){Gf(t,0)}function Qn(t){var e=Ul(t);if(qo(e))return t}function ls(t,e){if(t==="change")return e}var ns=!1;if(He){var xu;if(He){var Su="oninput"in document;if(!Su){var is=document.createElement("div");is.setAttribute("oninput","return;"),Su=typeof is.oninput=="function"}xu=Su}else xu=!1;ns=xu&&(!document.documentMode||9<document.documentMode)}function us(){Gl&&(Gl.detachEvent("onpropertychange",cs),Rl=Gl=null)}function cs(t){if(t.propertyName==="value"&&Qn(Rl)){var e=[];as(e,Rl,t,fu(t)),Vo(G0,e)}}function R0(t,e,a){t==="focusin"?(us(),Gl=e,Rl=a,Gl.attachEvent("onpropertychange",cs)):t==="focusout"&&us()}function Y0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qn(Rl)}function X0(t,e){if(t==="click")return Qn(e)}function Q0(t,e){if(t==="input"||t==="change")return Qn(e)}function V0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pt=typeof Object.is=="function"?Object.is:V0;function Yl(t,e){if(Pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ii.call(e,n)||!Pt(t[n],e[n]))return!1}return!0}function os(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ss(t,e){var a=os(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=os(a)}}function rs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=_n(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=_n(t.document)}return e}function zu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var L0=He&&"documentMode"in document&&11>=document.documentMode,tl=null,wu=null,Xl=null,Au=!1;function ds(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||tl==null||tl!==_n(l)||(l=tl,"selectionStart"in l&&zu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xl&&Yl(Xl,l)||(Xl=l,l=Oi(wu,"onSelect"),0<l.length&&(e=new Yn("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=tl)))}function ja(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var el={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Tu={},ps={};He&&(ps=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Ea(t){if(Tu[t])return Tu[t];if(!el[t])return t;var e=el[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in ps)return Tu[t]=e[a];return t}var gs=Ea("animationend"),ms=Ea("animationiteration"),hs=Ea("animationstart"),Z0=Ea("transitionrun"),K0=Ea("transitionstart"),J0=Ea("transitioncancel"),bs=Ea("transitionend"),ys=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ju.push("scrollEnd");function xe(t,e){ys.set(t,e),Aa(e,[t])}var Vn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},re=[],al=0,Eu=0;function Ln(){for(var t=al,e=Eu=al=0;e<t;){var a=re[e];re[e++]=null;var l=re[e];re[e++]=null;var n=re[e];re[e++]=null;var i=re[e];if(re[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&vs(a,n,i)}}function Zn(t,e,a,l){re[al++]=t,re[al++]=e,re[al++]=a,re[al++]=l,Eu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Mu(t,e,a,l){return Zn(t,e,a,l),Kn(t)}function Ma(t,e){return Zn(t,null,null,e),Kn(t)}function vs(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-It(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function Kn(t){if(50<fn)throw fn=0,qc=null,Error(p(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ll={};function $0(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function te(t,e,a,l){return new $0(t,e,a,l)}function Du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ue(t,e){var a=t.alternate;return a===null?(a=te(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function xs(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Jn(t,e,a,l,n,i){var u=0;if(l=t,typeof t=="function")Du(t)&&(u=1);else if(typeof t=="string")u=tg(t,a,Et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ya:return t=te(31,a,e,n),t.elementType=Ya,t.lanes=i,t;case Ct:return Da(a.children,n,i,e);case ft:u=8,n|=24;break;case $:return t=te(12,a,e,n|2),t.elementType=$,t.lanes=i,t;case $t:return t=te(13,a,e,n),t.elementType=$t,t.lanes=i,t;case ue:return t=te(19,a,e,n),t.elementType=ue,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pt:u=10;break t;case bt:u=9;break t;case jt:u=11;break t;case ye:u=14;break t;case ve:u=16,l=null;break t}u=29,a=Error(p(130,t===null?"null":typeof t,"")),l=null}return e=te(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function Da(t,e,a,l){return t=te(7,t,l,e),t.lanes=a,t}function Cu(t,e,a){return t=te(6,t,null,e),t.lanes=a,t}function Ss(t){var e=te(18,null,null,0);return e.stateNode=t,e}function Ou(t,e,a){return e=te(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var zs=new WeakMap;function fe(t,e){if(typeof t=="object"&&t!==null){var a=zs.get(t);return a!==void 0?a:(e={value:t,source:e,stack:So(e)},zs.set(t,e),e)}return{value:t,source:e,stack:So(e)}}var nl=[],il=0,$n=null,Ql=0,de=[],pe=0,Pe=null,Te=1,je="";function Be(t,e){nl[il++]=Ql,nl[il++]=$n,$n=t,Ql=e}function ws(t,e,a){de[pe++]=Te,de[pe++]=je,de[pe++]=Pe,Pe=t;var l=Te;t=je;var n=32-It(l)-1;l&=~(1<<n),a+=1;var i=32-It(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Te=1<<32-It(e)+n|a<<n|l,je=i+t}else Te=1<<i|a<<n|l,je=t}function Hu(t){t.return!==null&&(Be(t,1),ws(t,1,0))}function Uu(t){for(;t===$n;)$n=nl[--il],nl[il]=null,Ql=nl[--il],nl[il]=null;for(;t===Pe;)Pe=de[--pe],de[pe]=null,je=de[--pe],de[pe]=null,Te=de[--pe],de[pe]=null}function As(t,e){de[pe++]=Te,de[pe++]=je,de[pe++]=Pe,Te=e.id,je=e.overflow,Pe=t}var Ht=null,st=null,K=!1,ta=null,ge=!1,Bu=Error(p(519));function ea(t){var e=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vl(fe(e,t)),Bu}function Ts(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Ot]=t,e[Xt]=l,a){case"dialog":Q("cancel",e),Q("close",e);break;case"iframe":case"object":case"embed":Q("load",e);break;case"video":case"audio":for(a=0;a<pn.length;a++)Q(pn[a],e);break;case"source":Q("error",e);break;case"img":case"image":case"link":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"input":Q("invalid",e),ko(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Q("invalid",e);break;case"textarea":Q("invalid",e),Ro(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||Qf(e.textContent,a)?(l.popover!=null&&(Q("beforetoggle",e),Q("toggle",e)),l.onScroll!=null&&Q("scroll",e),l.onScrollEnd!=null&&Q("scrollend",e),l.onClick!=null&&(e.onclick=Oe),e=!0):e=!1,e||ea(t,!0)}function js(t){for(Ht=t.return;Ht;)switch(Ht.tag){case 5:case 31:case 13:ge=!1;return;case 27:case 3:ge=!0;return;default:Ht=Ht.return}}function ul(t){if(t!==Ht)return!1;if(!K)return js(t),K=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ic(t.type,t.memoizedProps)),a=!a),a&&st&&ea(t),js(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));st=If(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));st=If(t)}else e===27?(e=st,ma(t.type)?(t=lo,lo=null,st=t):st=e):st=Ht?he(t.stateNode.nextSibling):null;return!0}function Ca(){st=Ht=null,K=!1}function Nu(){var t=ta;return t!==null&&(Kt===null?Kt=t:Kt.push.apply(Kt,t),ta=null),t}function Vl(t){ta===null?ta=[t]:ta.push(t)}var _u=Gt(null),Oa=null,Ne=null;function aa(t,e,a){tt(_u,e._currentValue),e._currentValue=a}function _e(t){t._currentValue=_u.current,gt(_u)}function qu(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function ku(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var s=0;s<e.length;s++)if(c.context===e[s]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),qu(i.return,a,t),l||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(p(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),qu(u,a,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function cl(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(p(387));if(u=u.memoizedProps,u!==null){var c=n.type;Pt(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===jn.current){if(u=n.alternate,u===null)throw Error(p(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(yn):t=[yn])}n=n.return}t!==null&&ku(e,t,a,l),e.flags|=262144}function Wn(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ha(t){Oa=t,Ne=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ut(t){return Es(Oa,t)}function Fn(t,e){return Oa===null&&Ha(t),Es(t,e)}function Es(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ne===null){if(t===null)throw Error(p(308));Ne=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ne=Ne.next=e;return a}var W0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},F0=b.unstable_scheduleCallback,I0=b.unstable_NormalPriority,St={$$typeof:pt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new W0,data:new Map,refCount:0}}function Ll(t){t.refCount--,t.refCount===0&&F0(I0,function(){t.controller.abort()})}var Zl=null,Ru=0,ol=0,sl=null;function P0(t,e){if(Zl===null){var a=Zl=[];Ru=0,ol=Qc(),sl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ru++,e.then(Ms,Ms),e}function Ms(){if(--Ru===0&&Zl!==null){sl!==null&&(sl.status="fulfilled");var t=Zl;Zl=null,ol=0,sl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function tp(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ds=z.S;z.S=function(t,e){pf=Wt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&P0(t,e),Ds!==null&&Ds(t,e)};var Ua=Gt(null);function Yu(){var t=Ua.current;return t!==null?t:ut.pooledCache}function In(t,e){e===null?tt(Ua,Ua.current):tt(Ua,e.pool)}function Cs(){var t=Yu();return t===null?null:{parent:St._currentValue,pool:t}}var rl=Error(p(460)),Xu=Error(p(474)),Pn=Error(p(542)),ti={then:function(){}};function Os(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hs(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Oe,Oe),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Bs(t),t;default:if(typeof e.status=="string")e.then(Oe,Oe);else{if(t=ut,t!==null&&100<t.shellSuspendCounter)throw Error(p(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Bs(t),t}throw Na=e,rl}}function Ba(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Na=a,rl):a}}var Na=null;function Us(){if(Na===null)throw Error(p(459));var t=Na;return Na=null,t}function Bs(t){if(t===rl||t===Pn)throw Error(p(483))}var fl=null,Kl=0;function ei(t){var e=Kl;return Kl+=1,fl===null&&(fl=[]),Hs(fl,t,e)}function Jl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ai(t,e){throw e.$$typeof===J?Error(p(525)):(t=Object.prototype.toString.call(e),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ns(t){function e(f,r){if(t){var g=f.deletions;g===null?(f.deletions=[r],f.flags|=16):g.push(r)}}function a(f,r){if(!t)return null;for(;r!==null;)e(f,r),r=r.sibling;return null}function l(f){for(var r=new Map;f!==null;)f.key!==null?r.set(f.key,f):r.set(f.index,f),f=f.sibling;return r}function n(f,r){return f=Ue(f,r),f.index=0,f.sibling=null,f}function i(f,r,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<r?(f.flags|=67108866,r):g):(f.flags|=67108866,r)):(f.flags|=1048576,r)}function u(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function c(f,r,g,S){return r===null||r.tag!==6?(r=Cu(g,f.mode,S),r.return=f,r):(r=n(r,g),r.return=f,r)}function s(f,r,g,S){var U=g.type;return U===Ct?x(f,r,g.props.children,S,g.key):r!==null&&(r.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ve&&Ba(U)===r.type)?(r=n(r,g.props),Jl(r,g),r.return=f,r):(r=Jn(g.type,g.key,g.props,null,f.mode,S),Jl(r,g),r.return=f,r)}function m(f,r,g,S){return r===null||r.tag!==4||r.stateNode.containerInfo!==g.containerInfo||r.stateNode.implementation!==g.implementation?(r=Ou(g,f.mode,S),r.return=f,r):(r=n(r,g.children||[]),r.return=f,r)}function x(f,r,g,S,U){return r===null||r.tag!==7?(r=Da(g,f.mode,S,U),r.return=f,r):(r=n(r,g),r.return=f,r)}function w(f,r,g){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Cu(""+r,f.mode,g),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Yt:return g=Jn(r.type,r.key,r.props,null,f.mode,g),Jl(g,r),g.return=f,g;case I:return r=Ou(r,f.mode,g),r.return=f,r;case ve:return r=Ba(r),w(f,r,g)}if(De(r)||ce(r))return r=Da(r,f.mode,g,null),r.return=f,r;if(typeof r.then=="function")return w(f,ei(r),g);if(r.$$typeof===pt)return w(f,Fn(f,r),g);ai(f,r)}return null}function h(f,r,g,S){var U=r!==null?r.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return U!==null?null:c(f,r,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yt:return g.key===U?s(f,r,g,S):null;case I:return g.key===U?m(f,r,g,S):null;case ve:return g=Ba(g),h(f,r,g,S)}if(De(g)||ce(g))return U!==null?null:x(f,r,g,S,null);if(typeof g.then=="function")return h(f,r,ei(g),S);if(g.$$typeof===pt)return h(f,r,Fn(f,g),S);ai(f,g)}return null}function y(f,r,g,S,U){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(g)||null,c(r,f,""+S,U);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Yt:return f=f.get(S.key===null?g:S.key)||null,s(r,f,S,U);case I:return f=f.get(S.key===null?g:S.key)||null,m(r,f,S,U);case ve:return S=Ba(S),y(f,r,g,S,U)}if(De(S)||ce(S))return f=f.get(g)||null,x(r,f,S,U,null);if(typeof S.then=="function")return y(f,r,g,ei(S),U);if(S.$$typeof===pt)return y(f,r,g,Fn(r,S),U);ai(r,S)}return null}function C(f,r,g,S){for(var U=null,W=null,O=r,R=r=0,Z=null;O!==null&&R<g.length;R++){O.index>R?(Z=O,O=null):Z=O.sibling;var F=h(f,O,g[R],S);if(F===null){O===null&&(O=Z);break}t&&O&&F.alternate===null&&e(f,O),r=i(F,r,R),W===null?U=F:W.sibling=F,W=F,O=Z}if(R===g.length)return a(f,O),K&&Be(f,R),U;if(O===null){for(;R<g.length;R++)O=w(f,g[R],S),O!==null&&(r=i(O,r,R),W===null?U=O:W.sibling=O,W=O);return K&&Be(f,R),U}for(O=l(O);R<g.length;R++)Z=y(O,f,R,g[R],S),Z!==null&&(t&&Z.alternate!==null&&O.delete(Z.key===null?R:Z.key),r=i(Z,r,R),W===null?U=Z:W.sibling=Z,W=Z);return t&&O.forEach(function(xa){return e(f,xa)}),K&&Be(f,R),U}function B(f,r,g,S){if(g==null)throw Error(p(151));for(var U=null,W=null,O=r,R=r=0,Z=null,F=g.next();O!==null&&!F.done;R++,F=g.next()){O.index>R?(Z=O,O=null):Z=O.sibling;var xa=h(f,O,F.value,S);if(xa===null){O===null&&(O=Z);break}t&&O&&xa.alternate===null&&e(f,O),r=i(xa,r,R),W===null?U=xa:W.sibling=xa,W=xa,O=Z}if(F.done)return a(f,O),K&&Be(f,R),U;if(O===null){for(;!F.done;R++,F=g.next())F=w(f,F.value,S),F!==null&&(r=i(F,r,R),W===null?U=F:W.sibling=F,W=F);return K&&Be(f,R),U}for(O=l(O);!F.done;R++,F=g.next())F=y(O,f,R,F.value,S),F!==null&&(t&&F.alternate!==null&&O.delete(F.key===null?R:F.key),r=i(F,r,R),W===null?U=F:W.sibling=F,W=F);return t&&O.forEach(function(fg){return e(f,fg)}),K&&Be(f,R),U}function it(f,r,g,S){if(typeof g=="object"&&g!==null&&g.type===Ct&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yt:t:{for(var U=g.key;r!==null;){if(r.key===U){if(U=g.type,U===Ct){if(r.tag===7){a(f,r.sibling),S=n(r,g.props.children),S.return=f,f=S;break t}}else if(r.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ve&&Ba(U)===r.type){a(f,r.sibling),S=n(r,g.props),Jl(S,g),S.return=f,f=S;break t}a(f,r);break}else e(f,r);r=r.sibling}g.type===Ct?(S=Da(g.props.children,f.mode,S,g.key),S.return=f,f=S):(S=Jn(g.type,g.key,g.props,null,f.mode,S),Jl(S,g),S.return=f,f=S)}return u(f);case I:t:{for(U=g.key;r!==null;){if(r.key===U)if(r.tag===4&&r.stateNode.containerInfo===g.containerInfo&&r.stateNode.implementation===g.implementation){a(f,r.sibling),S=n(r,g.children||[]),S.return=f,f=S;break t}else{a(f,r);break}else e(f,r);r=r.sibling}S=Ou(g,f.mode,S),S.return=f,f=S}return u(f);case ve:return g=Ba(g),it(f,r,g,S)}if(De(g))return C(f,r,g,S);if(ce(g)){if(U=ce(g),typeof U!="function")throw Error(p(150));return g=U.call(g),B(f,r,g,S)}if(typeof g.then=="function")return it(f,r,ei(g),S);if(g.$$typeof===pt)return it(f,r,Fn(f,g),S);ai(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,r!==null&&r.tag===6?(a(f,r.sibling),S=n(r,g),S.return=f,f=S):(a(f,r),S=Cu(g,f.mode,S),S.return=f,f=S),u(f)):a(f,r)}return function(f,r,g,S){try{Kl=0;var U=it(f,r,g,S);return fl=null,U}catch(O){if(O===rl||O===Pn)throw O;var W=te(29,O,null,f.mode);return W.lanes=S,W.return=f,W}finally{}}}var _a=Ns(!0),_s=Ns(!1),la=!1;function Qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function na(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ia(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(P&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=Kn(t),vs(t,null,a),e}return Zn(t,l,e,a),Kn(t)}function $l(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Eo(t,a)}}function Lu(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Zu=!1;function Wl(){if(Zu){var t=sl;if(t!==null)throw t}}function Fl(t,e,a,l){Zu=!1;var n=t.updateQueue;la=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,m=s.next;s.next=null,u===null?i=m:u.next=m,u=s;var x=t.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==u&&(c===null?x.firstBaseUpdate=m:c.next=m,x.lastBaseUpdate=s))}if(i!==null){var w=n.baseState;u=0,x=m=s=null,c=i;do{var h=c.lane&-536870913,y=h!==c.lane;if(y?(L&h)===h:(l&h)===h){h!==0&&h===ol&&(Zu=!0),x!==null&&(x=x.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var C=t,B=c;h=e;var it=a;switch(B.tag){case 1:if(C=B.payload,typeof C=="function"){w=C.call(it,w,h);break t}w=C;break t;case 3:C.flags=C.flags&-65537|128;case 0:if(C=B.payload,h=typeof C=="function"?C.call(it,w,h):C,h==null)break t;w=D({},w,h);break t;case 2:la=!0}}h=c.callback,h!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[h]:y.push(h))}else y={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(m=x=y,s=w):x=x.next=y,u|=h;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);x===null&&(s=w),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),ra|=u,t.lanes=u,t.memoizedState=w}}function qs(t,e){if(typeof t!="function")throw Error(p(191,t));t.call(e)}function ks(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)qs(a[t],e)}var dl=Gt(null),li=Gt(0);function Gs(t,e){t=Le,tt(li,t),tt(dl,e),Le=t|e.baseLanes}function Ku(){tt(li,Le),tt(dl,dl.current)}function Ju(){Le=li.current,gt(dl),gt(li)}var ee=Gt(null),me=null;function ua(t){var e=t.alternate;tt(yt,yt.current&1),tt(ee,t),me===null&&(e===null||dl.current!==null||e.memoizedState!==null)&&(me=t)}function $u(t){tt(yt,yt.current),tt(ee,t),me===null&&(me=t)}function Rs(t){t.tag===22?(tt(yt,yt.current),tt(ee,t),me===null&&(me=t)):ca()}function ca(){tt(yt,yt.current),tt(ee,ee.current)}function ae(t){gt(ee),me===t&&(me=null),gt(yt)}var yt=Gt(0);function ni(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||eo(a)||ao(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qe=0,k=null,lt=null,zt=null,ii=!1,pl=!1,qa=!1,ui=0,Il=0,gl=null,ep=0;function mt(){throw Error(p(321))}function Wu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Pt(t[a],e[a]))return!1;return!0}function Fu(t,e,a,l,n,i){return qe=i,k=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?wr:dc,qa=!1,i=a(l,n),qa=!1,pl&&(i=Xs(e,a,l,n)),Ys(t),i}function Ys(t){z.H=en;var e=lt!==null&&lt.next!==null;if(qe=0,zt=lt=k=null,ii=!1,Il=0,gl=null,e)throw Error(p(300));t===null||wt||(t=t.dependencies,t!==null&&Wn(t)&&(wt=!0))}function Xs(t,e,a,l){k=t;var n=0;do{if(pl&&(gl=null),Il=0,pl=!1,25<=n)throw Error(p(301));if(n+=1,zt=lt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Ar,i=e(a,l)}while(pl);return i}function ap(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?Pl(e):e,t=t.useState()[0],(lt!==null?lt.memoizedState:null)!==t&&(k.flags|=1024),e}function Iu(){var t=ui!==0;return ui=0,t}function Pu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function tc(t){if(ii){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ii=!1}qe=0,zt=lt=k=null,pl=!1,Il=ui=0,gl=null}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?k.memoizedState=zt=t:zt=zt.next=t,zt}function vt(){if(lt===null){var t=k.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var e=zt===null?k.memoizedState:zt.next;if(e!==null)zt=e,lt=t;else{if(t===null)throw k.alternate===null?Error(p(467)):Error(p(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},zt===null?k.memoizedState=zt=t:zt=zt.next=t}return zt}function ci(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(t){var e=Il;return Il+=1,gl===null&&(gl=[]),t=Hs(gl,t,e),e=k,(zt===null?e.memoizedState:zt.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?wr:dc),t}function oi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pl(t);if(t.$$typeof===pt)return Ut(t)}throw Error(p(438,String(t)))}function ec(t){var e=null,a=k.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=k.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ci(),k.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=An;return e.index++,a}function ke(t,e){return typeof e=="function"?e(t):e}function si(t){var e=vt();return ac(e,lt,t)}function ac(t,e,a){var l=t.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,s=null,m=e,x=!1;do{var w=m.lane&-536870913;if(w!==m.lane?(L&w)===w:(qe&w)===w){var h=m.revertLane;if(h===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),w===ol&&(x=!0);else if((qe&h)===h){m=m.next,h===ol&&(x=!0);continue}else w={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=w,u=i):s=s.next=w,k.lanes|=h,ra|=h;w=m.action,qa&&a(i,w),i=m.hasEagerState?m.eagerState:a(i,w)}else h={lane:w,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=h,u=i):s=s.next=h,k.lanes|=w,ra|=w;m=m.next}while(m!==null&&m!==e);if(s===null?u=i:s.next=c,!Pt(i,t.memoizedState)&&(wt=!0,x&&(a=sl,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=s,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function lc(t){var e=vt(),a=e.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Pt(i,e.memoizedState)||(wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function Qs(t,e,a){var l=k,n=vt(),i=K;if(i){if(a===void 0)throw Error(p(407));a=a()}else a=e();var u=!Pt((lt||n).memoizedState,a);if(u&&(n.memoizedState=a,wt=!0),n=n.queue,uc(Zs.bind(null,l,n,t),[t]),n.getSnapshot!==e||u||zt!==null&&zt.memoizedState.tag&1){if(l.flags|=2048,ml(9,{destroy:void 0},Ls.bind(null,l,n,a,e),null),ut===null)throw Error(p(349));i||(qe&127)!==0||Vs(l,e,a)}return a}function Vs(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=k.updateQueue,e===null?(e=ci(),k.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Ls(t,e,a,l){e.value=a,e.getSnapshot=l,Ks(e)&&Js(t)}function Zs(t,e,a){return a(function(){Ks(e)&&Js(t)})}function Ks(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Pt(t,a)}catch{return!0}}function Js(t){var e=Ma(t,2);e!==null&&Jt(e,t,2)}function nc(t){var e=Rt();if(typeof t=="function"){var a=t;if(t=a(),qa){We(!0);try{a()}finally{We(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:t},e}function $s(t,e,a,l){return t.baseState=a,ac(t,lt,typeof l=="function"?l:ke)}function lp(t,e,a,l,n){if(di(t))throw Error(p(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,Ws(e,i)):(i.next=a.next,e.pending=a.next=i)}}function Ws(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=z.T,u={};z.T=u;try{var c=a(n,l),s=z.S;s!==null&&s(u,c),Fs(t,e,c)}catch(m){ic(t,e,m)}finally{i!==null&&u.types!==null&&(i.types=u.types),z.T=i}}else try{i=a(n,l),Fs(t,e,i)}catch(m){ic(t,e,m)}}function Fs(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Is(t,e,l)},function(l){return ic(t,e,l)}):Is(t,e,a)}function Is(t,e,a){e.status="fulfilled",e.value=a,Ps(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Ws(t,a)))}function ic(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,Ps(e),e=e.next;while(e!==l)}t.action=null}function Ps(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function tr(t,e){return e}function er(t,e){if(K){var a=ut.formState;if(a!==null){t:{var l=k;if(K){if(st){e:{for(var n=st,i=ge;n.nodeType!==8;){if(!i){n=null;break e}if(n=he(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){st=he(n.nextSibling),l=n.data==="F!";break t}}ea(l)}l=!1}l&&(e=a[0])}}return a=Rt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},a.queue=l,a=xr.bind(null,k,l),l.dispatch=a,l=nc(!1),i=fc.bind(null,k,!1,l.queue),l=Rt(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=lp.bind(null,k,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function ar(t){var e=vt();return lr(e,lt,t)}function lr(t,e,a){if(e=ac(t,e,tr)[0],t=si(ke)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Pl(e)}catch(u){throw u===rl?Pn:u}else l=e;e=vt();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(k.flags|=2048,ml(9,{destroy:void 0},np.bind(null,n,a),null)),[l,i,t]}function np(t,e){t.action=e}function nr(t){var e=vt(),a=lt;if(a!==null)return lr(e,a,t);vt(),e=e.memoizedState,a=vt();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function ml(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=k.updateQueue,e===null&&(e=ci(),k.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function ir(){return vt().memoizedState}function ri(t,e,a,l){var n=Rt();k.flags|=t,n.memoizedState=ml(1|e,{destroy:void 0},a,l===void 0?null:l)}function fi(t,e,a,l){var n=vt();l=l===void 0?null:l;var i=n.memoizedState.inst;lt!==null&&l!==null&&Wu(l,lt.memoizedState.deps)?n.memoizedState=ml(e,i,a,l):(k.flags|=t,n.memoizedState=ml(1|e,i,a,l))}function ur(t,e){ri(8390656,8,t,e)}function uc(t,e){fi(2048,8,t,e)}function ip(t){k.flags|=4;var e=k.updateQueue;if(e===null)e=ci(),k.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function cr(t){var e=vt().memoizedState;return ip({ref:e,nextImpl:t}),function(){if((P&2)!==0)throw Error(p(440));return e.impl.apply(void 0,arguments)}}function or(t,e){return fi(4,2,t,e)}function sr(t,e){return fi(4,4,t,e)}function rr(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fr(t,e,a){a=a!=null?a.concat([t]):null,fi(4,4,rr.bind(null,e,t),a)}function cc(){}function dr(t,e){var a=vt();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Wu(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function pr(t,e){var a=vt();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Wu(e,l[1]))return l[0];if(l=t(),qa){We(!0);try{t()}finally{We(!1)}}return a.memoizedState=[l,e],l}function oc(t,e,a){return a===void 0||(qe&1073741824)!==0&&(L&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=mf(),k.lanes|=t,ra|=t,a)}function gr(t,e,a,l){return Pt(a,e)?a:dl.current!==null?(t=oc(t,a,l),Pt(t,e)||(wt=!0),t):(qe&42)===0||(qe&1073741824)!==0&&(L&261930)===0?(wt=!0,t.memoizedState=a):(t=mf(),k.lanes|=t,ra|=t,e)}function mr(t,e,a,l,n){var i=M.p;M.p=i!==0&&8>i?i:8;var u=z.T,c={};z.T=c,fc(t,!1,e,a);try{var s=n(),m=z.S;if(m!==null&&m(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var x=tp(s,l);tn(t,e,x,ie(t))}else tn(t,e,l,ie(t))}catch(w){tn(t,e,{then:function(){},status:"rejected",reason:w},ie())}finally{M.p=i,u!==null&&c.types!==null&&(u.types=c.types),z.T=u}}function up(){}function sc(t,e,a,l){if(t.tag!==5)throw Error(p(476));var n=hr(t).queue;mr(t,n,e,_,a===null?up:function(){return br(t),a(l)})}function hr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:_},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function br(t){var e=hr(t);e.next===null&&(e=t.alternate.memoizedState),tn(t,e.next.queue,{},ie())}function rc(){return Ut(yn)}function yr(){return vt().memoizedState}function vr(){return vt().memoizedState}function cp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ie();t=na(a);var l=ia(e,t,a);l!==null&&(Jt(l,e,a),$l(l,e,a)),e={cache:Gu()},t.payload=e;return}e=e.return}}function op(t,e,a){var l=ie();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},di(t)?Sr(e,a):(a=Mu(t,e,a,l),a!==null&&(Jt(a,t,l),zr(a,e,l)))}function xr(t,e,a){var l=ie();tn(t,e,a,l)}function tn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(di(t))Sr(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,a);if(n.hasEagerState=!0,n.eagerState=c,Pt(c,u))return Zn(t,e,n,0),ut===null&&Ln(),!1}catch{}finally{}if(a=Mu(t,e,n,l),a!==null)return Jt(a,t,l),zr(a,e,l),!0}return!1}function fc(t,e,a,l){if(l={lane:2,revertLane:Qc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},di(t)){if(e)throw Error(p(479))}else e=Mu(t,a,l,2),e!==null&&Jt(e,t,2)}function di(t){var e=t.alternate;return t===k||e!==null&&e===k}function Sr(t,e){pl=ii=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function zr(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Eo(t,a)}}var en={readContext:Ut,use:oi,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt};en.useEffectEvent=mt;var wr={readContext:Ut,use:oi,useCallback:function(t,e){return Rt().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:ur,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,ri(4194308,4,rr.bind(null,e,t),a)},useLayoutEffect:function(t,e){return ri(4194308,4,t,e)},useInsertionEffect:function(t,e){ri(4,2,t,e)},useMemo:function(t,e){var a=Rt();e=e===void 0?null:e;var l=t();if(qa){We(!0);try{t()}finally{We(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Rt();if(a!==void 0){var n=a(e);if(qa){We(!0);try{a(e)}finally{We(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=op.bind(null,k,t),[l.memoizedState,t]},useRef:function(t){var e=Rt();return t={current:t},e.memoizedState=t},useState:function(t){t=nc(t);var e=t.queue,a=xr.bind(null,k,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:cc,useDeferredValue:function(t,e){var a=Rt();return oc(a,t,e)},useTransition:function(){var t=nc(!1);return t=mr.bind(null,k,t.queue,!0,!1),Rt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=k,n=Rt();if(K){if(a===void 0)throw Error(p(407));a=a()}else{if(a=e(),ut===null)throw Error(p(349));(L&127)!==0||Vs(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,ur(Zs.bind(null,l,i,t),[t]),l.flags|=2048,ml(9,{destroy:void 0},Ls.bind(null,l,i,a,e),null),a},useId:function(){var t=Rt(),e=ut.identifierPrefix;if(K){var a=je,l=Te;a=(l&~(1<<32-It(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=ui++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=ep++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:rc,useFormState:er,useActionState:er,useOptimistic:function(t){var e=Rt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=fc.bind(null,k,!0,a),a.dispatch=e,[t,e]},useMemoCache:ec,useCacheRefresh:function(){return Rt().memoizedState=cp.bind(null,k)},useEffectEvent:function(t){var e=Rt(),a={impl:t};return e.memoizedState=a,function(){if((P&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}},dc={readContext:Ut,use:oi,useCallback:dr,useContext:Ut,useEffect:uc,useImperativeHandle:fr,useInsertionEffect:or,useLayoutEffect:sr,useMemo:pr,useReducer:si,useRef:ir,useState:function(){return si(ke)},useDebugValue:cc,useDeferredValue:function(t,e){var a=vt();return gr(a,lt.memoizedState,t,e)},useTransition:function(){var t=si(ke)[0],e=vt().memoizedState;return[typeof t=="boolean"?t:Pl(t),e]},useSyncExternalStore:Qs,useId:yr,useHostTransitionStatus:rc,useFormState:ar,useActionState:ar,useOptimistic:function(t,e){var a=vt();return $s(a,lt,t,e)},useMemoCache:ec,useCacheRefresh:vr};dc.useEffectEvent=cr;var Ar={readContext:Ut,use:oi,useCallback:dr,useContext:Ut,useEffect:uc,useImperativeHandle:fr,useInsertionEffect:or,useLayoutEffect:sr,useMemo:pr,useReducer:lc,useRef:ir,useState:function(){return lc(ke)},useDebugValue:cc,useDeferredValue:function(t,e){var a=vt();return lt===null?oc(a,t,e):gr(a,lt.memoizedState,t,e)},useTransition:function(){var t=lc(ke)[0],e=vt().memoizedState;return[typeof t=="boolean"?t:Pl(t),e]},useSyncExternalStore:Qs,useId:yr,useHostTransitionStatus:rc,useFormState:nr,useActionState:nr,useOptimistic:function(t,e){var a=vt();return lt!==null?$s(a,lt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ec,useCacheRefresh:vr};Ar.useEffectEvent=cr;function pc(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:D({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var gc={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=ie(),n=na(l);n.payload=e,a!=null&&(n.callback=a),e=ia(t,n,l),e!==null&&(Jt(e,t,l),$l(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=ie(),n=na(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=ia(t,n,l),e!==null&&(Jt(e,t,l),$l(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ie(),l=na(a);l.tag=2,e!=null&&(l.callback=e),e=ia(t,l,a),e!==null&&(Jt(e,t,a),$l(e,t,a))}};function Tr(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!Yl(a,l)||!Yl(n,i):!0}function jr(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&gc.enqueueReplaceState(e,e.state,null)}function ka(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=D({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Er(t){Vn(t)}function Mr(t){console.error(t)}function Dr(t){Vn(t)}function pi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Cr(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function mc(t,e,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){pi(t,e)},a}function Or(t){return t=na(t),t.tag=3,t}function Hr(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){Cr(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Cr(e,a,l),typeof n!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function sp(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&cl(e,a,n,!0),a=ee.current,a!==null){switch(a.tag){case 31:case 13:return me===null?Ti():a.alternate===null&&ht===0&&(ht=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===ti?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Rc(t,l,n)),!1;case 22:return a.flags|=65536,l===ti?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Rc(t,l,n)),!1}throw Error(p(435,a.tag))}return Rc(t,l,n),Ti(),!1}if(K)return e=ee.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==Bu&&(t=Error(p(422),{cause:l}),Vl(fe(t,a)))):(l!==Bu&&(e=Error(p(423),{cause:l}),Vl(fe(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=fe(l,a),n=mc(t.stateNode,l,n),Lu(t,n),ht!==4&&(ht=2)),!1;var i=Error(p(520),{cause:l});if(i=fe(i,a),rn===null?rn=[i]:rn.push(i),ht!==4&&(ht=2),e===null)return!0;l=fe(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=mc(a.stateNode,l,t),Lu(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(fa===null||!fa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Or(n),Hr(n,t,a,l),Lu(a,n),!1}a=a.return}while(a!==null);return!1}var hc=Error(p(461)),wt=!1;function Bt(t,e,a,l){e.child=t===null?_s(e,null,a,l):_a(e,t.child,a,l)}function Ur(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Ha(e),l=Fu(t,e,a,u,i,n),c=Iu(),t!==null&&!wt?(Pu(t,e,n),Ge(t,e,n)):(K&&c&&Hu(e),e.flags|=1,Bt(t,e,l,n),e.child)}function Br(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Du(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,Nr(t,e,i,l,n)):(t=Jn(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Ac(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Yl,a(u,l)&&t.ref===e.ref)return Ge(t,e,n)}return e.flags|=1,t=Ue(i,l),t.ref=e.ref,t.return=e,e.child=t}function Nr(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Yl(i,l)&&t.ref===e.ref)if(wt=!1,e.pendingProps=l=i,Ac(t,n))(t.flags&131072)!==0&&(wt=!0);else return e.lanes=t.lanes,Ge(t,e,n)}return bc(t,e,a,l,n)}function _r(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return qr(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&In(e,i!==null?i.cachePool:null),i!==null?Gs(e,i):Ku(),Rs(e);else return l=e.lanes=536870912,qr(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(In(e,i.cachePool),Gs(e,i),ca(),e.memoizedState=null):(t!==null&&In(e,null),Ku(),ca());return Bt(t,e,n,a),e.child}function an(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function qr(t,e,a,l,n){var i=Yu();return i=i===null?null:{parent:St._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&In(e,null),Ku(),Rs(e),t!==null&&cl(t,e,l,!0),e.childLanes=n,null}function gi(t,e){return e=hi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function kr(t,e,a){return _a(e,t.child,null,a),t=gi(e,e.pendingProps),t.flags|=2,ae(e),e.memoizedState=null,t}function rp(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(K){if(l.mode==="hidden")return t=gi(e,l),e.lanes=536870912,an(null,t);if($u(e),(t=st)?(t=Ff(t,ge),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Pe!==null?{id:Te,overflow:je}:null,retryLane:536870912,hydrationErrors:null},a=Ss(t),a.return=e,e.child=a,Ht=e,st=null)):t=null,t===null)throw ea(e);return e.lanes=536870912,null}return gi(e,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if($u(e),n)if(e.flags&256)e.flags&=-257,e=kr(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(p(558));else if(wt||cl(t,e,a,!1),n=(a&t.childLanes)!==0,wt||n){if(l=ut,l!==null&&(u=Mo(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ma(t,u),Jt(l,t,u),hc;Ti(),e=kr(t,e,a)}else t=i.treeContext,st=he(u.nextSibling),Ht=e,K=!0,ta=null,ge=!1,t!==null&&As(e,t),e=gi(e,l),e.flags|=4096;return e}return t=Ue(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function mi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(p(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function bc(t,e,a,l,n){return Ha(e),a=Fu(t,e,a,l,void 0,n),l=Iu(),t!==null&&!wt?(Pu(t,e,n),Ge(t,e,n)):(K&&l&&Hu(e),e.flags|=1,Bt(t,e,a,n),e.child)}function Gr(t,e,a,l,n,i){return Ha(e),e.updateQueue=null,a=Xs(e,l,a,n),Ys(t),l=Iu(),t!==null&&!wt?(Pu(t,e,i),Ge(t,e,i)):(K&&l&&Hu(e),e.flags|=1,Bt(t,e,a,i),e.child)}function Rr(t,e,a,l,n){if(Ha(e),e.stateNode===null){var i=ll,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ut(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},Qu(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ut(u):ll,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(pc(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&gc.enqueueReplaceState(i,i.state,null),Fl(e,l,i,n),Wl(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,s=ka(a,c);i.props=s;var m=i.context,x=a.contextType;u=ll,typeof x=="object"&&x!==null&&(u=Ut(x));var w=a.getDerivedStateFromProps;x=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||m!==u)&&jr(e,i,l,u),la=!1;var h=e.memoizedState;i.state=h,Fl(e,l,i,n),Wl(),m=e.memoizedState,c||h!==m||la?(typeof w=="function"&&(pc(e,a,w,l),m=e.memoizedState),(s=la||Tr(e,a,s,l,h,m,u))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=m),i.props=l,i.state=m,i.context=u,l=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Vu(t,e),u=e.memoizedProps,x=ka(a,u),i.props=x,w=e.pendingProps,h=i.context,m=a.contextType,s=ll,typeof m=="object"&&m!==null&&(s=Ut(m)),c=a.getDerivedStateFromProps,(m=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==w||h!==s)&&jr(e,i,l,s),la=!1,h=e.memoizedState,i.state=h,Fl(e,l,i,n),Wl();var y=e.memoizedState;u!==w||h!==y||la||t!==null&&t.dependencies!==null&&Wn(t.dependencies)?(typeof c=="function"&&(pc(e,a,c,l),y=e.memoizedState),(x=la||Tr(e,a,x,l,h,y,s)||t!==null&&t.dependencies!==null&&Wn(t.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,y,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=y),i.props=l,i.state=y,i.context=s,l=x):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,mi(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=_a(e,t.child,null,n),e.child=_a(e,null,a,n)):Bt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Ge(t,e,n),t}function Yr(t,e,a,l){return Ca(),e.flags|=256,Bt(t,e,a,l),e.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(t){return{baseLanes:t,cachePool:Cs()}}function xc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=ne),t}function Xr(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(yt.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(K){if(n?ua(e):ca(),(t=st)?(t=Ff(t,ge),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Pe!==null?{id:Te,overflow:je}:null,retryLane:536870912,hydrationErrors:null},a=Ss(t),a.return=e,e.child=a,Ht=e,st=null)):t=null,t===null)throw ea(e);return ao(t)?e.lanes=32:e.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(ca(),n=e.mode,c=hi({mode:"hidden",children:c},n),l=Da(l,n,a,null),c.return=e,l.return=e,c.sibling=l,e.child=c,l=e.child,l.memoizedState=vc(a),l.childLanes=xc(t,u,a),e.memoizedState=yc,an(null,l)):(ua(e),Sc(e,c))}var s=t.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)e.flags&256?(ua(e),e.flags&=-257,e=zc(t,e,a)):e.memoizedState!==null?(ca(),e.child=t.child,e.flags|=128,e=null):(ca(),c=l.fallback,n=e.mode,l=hi({mode:"visible",children:l.children},n),c=Da(c,n,a,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,_a(e,t.child,null,a),l=e.child,l.memoizedState=vc(a),l.childLanes=xc(t,u,a),e.memoizedState=yc,e=an(null,l));else if(ua(e),ao(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var m=u.dgst;u=m,l=Error(p(419)),l.stack="",l.digest=u,Vl({value:l,source:null,stack:null}),e=zc(t,e,a)}else if(wt||cl(t,e,a,!1),u=(a&t.childLanes)!==0,wt||u){if(u=ut,u!==null&&(l=Mo(u,a),l!==0&&l!==s.retryLane))throw s.retryLane=l,Ma(t,l),Jt(u,t,l),hc;eo(c)||Ti(),e=zc(t,e,a)}else eo(c)?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,st=he(c.nextSibling),Ht=e,K=!0,ta=null,ge=!1,t!==null&&As(e,t),e=Sc(e,l.children),e.flags|=4096);return e}return n?(ca(),c=l.fallback,n=e.mode,s=t.child,m=s.sibling,l=Ue(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,m!==null?c=Ue(m,c):(c=Da(c,n,a,null),c.flags|=2),c.return=e,l.return=e,l.sibling=c,e.child=l,an(null,l),l=e.child,c=t.child.memoizedState,c===null?c=vc(a):(n=c.cachePool,n!==null?(s=St._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Cs(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=xc(t,u,a),e.memoizedState=yc,an(t.child,l)):(ua(e),a=t.child,t=a.sibling,a=Ue(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function Sc(t,e){return e=hi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function hi(t,e){return t=te(22,t,null,e),t.lanes=0,t}function zc(t,e,a){return _a(e,t.child,null,a),t=Sc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qr(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),qu(t.return,e,a)}function wc(t,e,a,l,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Vr(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=yt.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,tt(yt,u),Bt(t,e,l,a),l=K?Ql:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qr(t,a,e);else if(t.tag===19)Qr(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&ni(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),wc(e,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ni(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}wc(e,!0,a,null,i,l);break;case"together":wc(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Ge(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ra|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(cl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(p(153));if(e.child!==null){for(t=e.child,a=Ue(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ue(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Ac(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Wn(t)))}function fp(t,e,a){switch(e.tag){case 3:En(e,e.stateNode.containerInfo),aa(e,St,t.memoizedState.cache),Ca();break;case 27:case 5:Ji(e);break;case 4:En(e,e.stateNode.containerInfo);break;case 10:aa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,$u(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(ua(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Xr(t,e,a):(ua(e),t=Ge(t,e,a),t!==null?t.sibling:null);ua(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(cl(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return Vr(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(yt,yt.current),l)break;return null;case 22:return e.lanes=0,_r(t,e,a,e.pendingProps);case 24:aa(e,St,t.memoizedState.cache)}return Ge(t,e,a)}function Lr(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)wt=!0;else{if(!Ac(t,a)&&(e.flags&128)===0)return wt=!1,fp(t,e,a);wt=(t.flags&131072)!==0}else wt=!1,K&&(e.flags&1048576)!==0&&ws(e,Ql,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=Ba(e.elementType),e.type=t,typeof t=="function")Du(t)?(l=ka(t,l),e.tag=1,e=Rr(null,e,t,l,a)):(e.tag=0,e=bc(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===jt){e.tag=11,e=Ur(null,e,t,l,a);break t}else if(n===ye){e.tag=14,e=Br(null,e,t,l,a);break t}}throw e=Ml(t)||t,Error(p(306,e,""))}}return e;case 0:return bc(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=ka(l,e.pendingProps),Rr(t,e,l,n,a);case 3:t:{if(En(e,e.stateNode.containerInfo),t===null)throw Error(p(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,Vu(t,e),Fl(e,l,null,a);var u=e.memoizedState;if(l=u.cache,aa(e,St,l),l!==i.cache&&ku(e,[St],a,!0),Wl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Yr(t,e,l,a);break t}else if(l!==n){n=fe(Error(p(424)),e),Vl(n),e=Yr(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(st=he(t.firstChild),Ht=e,K=!0,ta=null,ge=!0,a=_s(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ca(),l===n){e=Ge(t,e,a);break t}Bt(t,e,l,a)}e=e.child}return e;case 26:return mi(t,e),t===null?(a=ld(e.type,null,e.pendingProps,null))?e.memoizedState=a:K||(a=e.type,t=e.pendingProps,l=Hi($e.current).createElement(a),l[Ot]=e,l[Xt]=t,Nt(l,a,t),Mt(l),e.stateNode=l):e.memoizedState=ld(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ji(e),t===null&&K&&(l=e.stateNode=td(e.type,e.pendingProps,$e.current),Ht=e,ge=!0,n=st,ma(e.type)?(lo=n,st=he(l.firstChild)):st=n),Bt(t,e,e.pendingProps.children,a),mi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&K&&((n=l=st)&&(l=Yp(l,e.type,e.pendingProps,ge),l!==null?(e.stateNode=l,Ht=e,st=he(l.firstChild),ge=!1,n=!0):n=!1),n||ea(e)),Ji(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,Ic(n,i)?l=null:u!==null&&Ic(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Fu(t,e,ap,null,null,a),yn._currentValue=n),mi(t,e),Bt(t,e,l,a),e.child;case 6:return t===null&&K&&((t=a=st)&&(a=Xp(a,e.pendingProps,ge),a!==null?(e.stateNode=a,Ht=e,st=null,t=!0):t=!1),t||ea(e)),null;case 13:return Xr(t,e,a);case 4:return En(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=_a(e,null,l,a):Bt(t,e,l,a),e.child;case 11:return Ur(t,e,e.type,e.pendingProps,a);case 7:return Bt(t,e,e.pendingProps,a),e.child;case 8:return Bt(t,e,e.pendingProps.children,a),e.child;case 12:return Bt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,aa(e,e.type,l.value),Bt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,Ha(e),n=Ut(n),l=l(n),e.flags|=1,Bt(t,e,l,a),e.child;case 14:return Br(t,e,e.type,e.pendingProps,a);case 15:return Nr(t,e,e.type,e.pendingProps,a);case 19:return Vr(t,e,a);case 31:return rp(t,e,a);case 22:return _r(t,e,a,e.pendingProps);case 24:return Ha(e),l=Ut(St),t===null?(n=Yu(),n===null&&(n=ut,i=Gu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},Qu(e),aa(e,St,n)):((t.lanes&a)!==0&&(Vu(t,e),Fl(e,null,null,a),Wl()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),aa(e,St,l)):(l=i.cache,aa(e,St,l),l!==n.cache&&ku(e,[St],a,!0))),Bt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(p(156,e.tag))}function Re(t){t.flags|=4}function Tc(t,e,a,l,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(vf())t.flags|=8192;else throw Na=ti,Xu}else t.flags&=-16777217}function Zr(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!od(e))if(vf())t.flags|=8192;else throw Na=ti,Xu}function bi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?To():536870912,t.lanes|=e,vl|=e)}function ln(t,e){if(!K)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function dp(t,e,a){var l=e.pendingProps;switch(Uu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return rt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),_e(St),Qa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ul(e)?Re(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Nu())),rt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Re(e),i!==null?(rt(e),Zr(e,i)):(rt(e),Tc(e,n,null,l,a))):i?i!==t.memoizedState?(Re(e),rt(e),Zr(e,i)):(rt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Re(e),rt(e),Tc(e,n,t,l,a)),null;case 27:if(Mn(e),a=$e.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Re(e);else{if(!l){if(e.stateNode===null)throw Error(p(166));return rt(e),null}t=Et.current,ul(e)?Ts(e):(t=td(n,l,a),e.stateNode=t,Re(e))}return rt(e),null;case 5:if(Mn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Re(e);else{if(!l){if(e.stateNode===null)throw Error(p(166));return rt(e),null}if(i=Et.current,ul(e))Ts(e);else{var u=Hi($e.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Ot]=e,i[Xt]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(Nt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Re(e)}}return rt(e),Tc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Re(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(p(166));if(t=$e.current,ul(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=Ht,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[Ot]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Qf(t.nodeValue,a)),t||ea(e,!0)}else t=Hi(t).createTextNode(l),t[Ot]=e,e.stateNode=t}return rt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=ul(e),a!==null){if(t===null){if(!l)throw Error(p(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(557));t[Ot]=e}else Ca(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;rt(e),t=!1}else a=Nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ae(e),e):(ae(e),null);if((e.flags&128)!==0)throw Error(p(558))}return rt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ul(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(p(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(p(317));n[Ot]=e}else Ca(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;rt(e),n=!1}else n=Nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ae(e),e):(ae(e),null)}return ae(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),bi(e,e.updateQueue),rt(e),null);case 4:return Qa(),t===null&&Kc(e.stateNode.containerInfo),rt(e),null;case 10:return _e(e.type),rt(e),null;case 19:if(gt(yt),l=e.memoizedState,l===null)return rt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)ln(l,!1);else{if(ht!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ni(t),i!==null){for(e.flags|=128,ln(l,!1),t=i.updateQueue,e.updateQueue=t,bi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)xs(a,t),a=a.sibling;return tt(yt,yt.current&1|2),K&&Be(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&Wt()>zi&&(e.flags|=128,n=!0,ln(l,!1),e.lanes=4194304)}else{if(!n)if(t=ni(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,bi(e,t),ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!K)return rt(e),null}else 2*Wt()-l.renderingStartTime>zi&&a!==536870912&&(e.flags|=128,n=!0,ln(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Wt(),t.sibling=null,a=yt.current,tt(yt,n?a&1|2:a&1),K&&Be(e,l.treeForkCount),t):(rt(e),null);case 22:case 23:return ae(e),Ju(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),a=e.updateQueue,a!==null&&bi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&gt(Ua),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),_e(St),rt(e),null;case 25:return null;case 30:return null}throw Error(p(156,e.tag))}function pp(t,e){switch(Uu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _e(St),Qa(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Mn(e),null;case 31:if(e.memoizedState!==null){if(ae(e),e.alternate===null)throw Error(p(340));Ca()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ae(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(p(340));Ca()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return Qa(),null;case 10:return _e(e.type),null;case 22:case 23:return ae(e),Ju(),t!==null&&gt(Ua),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return _e(St),null;case 25:return null;default:return null}}function Kr(t,e){switch(Uu(e),e.tag){case 3:_e(St),Qa();break;case 26:case 27:case 5:Mn(e);break;case 4:Qa();break;case 31:e.memoizedState!==null&&ae(e);break;case 13:ae(e);break;case 19:gt(yt);break;case 10:_e(e.type);break;case 22:case 23:ae(e),Ju(),t!==null&&gt(Ua);break;case 24:_e(St)}}function nn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(c){at(e,e.return,c)}}function oa(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var s=a,m=c;try{m()}catch(x){at(n,s,x)}}}l=l.next}while(l!==i)}}catch(x){at(e,e.return,x)}}function Jr(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{ks(e,a)}catch(l){at(t,t.return,l)}}}function $r(t,e,a){a.props=ka(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){at(t,e,l)}}function un(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){at(t,e,n)}}function Ee(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){at(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){at(t,e,n)}else a.current=null}function Wr(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){at(t,t.return,n)}}function jc(t,e,a){try{var l=t.stateNode;Np(l,t.type,a,e),l[Xt]=e}catch(n){at(t,t.return,n)}}function Fr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ma(t.type)||t.tag===4}function Ec(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Fr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ma(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mc(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Oe));else if(l!==4&&(l===27&&ma(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Mc(t,e,a),t=t.sibling;t!==null;)Mc(t,e,a),t=t.sibling}function yi(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&ma(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yi(t,e,a),t=t.sibling;t!==null;)yi(t,e,a),t=t.sibling}function Ir(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Nt(e,l,a),e[Ot]=t,e[Xt]=a}catch(i){at(t,t.return,i)}}var Ye=!1,At=!1,Dc=!1,Pr=typeof WeakSet=="function"?WeakSet:Set,Dt=null;function gp(t,e){if(t=t.containerInfo,Wc=Gi,t=fs(t),zu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var u=0,c=-1,s=-1,m=0,x=0,w=t,h=null;e:for(;;){for(var y;w!==a||n!==0&&w.nodeType!==3||(c=u+n),w!==i||l!==0&&w.nodeType!==3||(s=u+l),w.nodeType===3&&(u+=w.nodeValue.length),(y=w.firstChild)!==null;)h=w,w=y;for(;;){if(w===t)break e;if(h===a&&++m===n&&(c=u),h===i&&++x===l&&(s=u),(y=w.nextSibling)!==null)break;w=h,h=w.parentNode}w=y}a=c===-1||s===-1?null:{start:c,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:t,selectionRange:a},Gi=!1,Dt=e;Dt!==null;)if(e=Dt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Dt=t;else for(;Dt!==null;){switch(e=Dt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var C=ka(a.type,n);t=l.getSnapshotBeforeUpdate(C,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(B){at(a,a.return,B)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)to(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":to(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(p(163))}if(t=e.sibling,t!==null){t.return=e.return,Dt=t;break}Dt=e.return}}function tf(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Qe(t,a),l&4&&nn(5,a);break;case 1:if(Qe(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){at(a,a.return,u)}else{var n=ka(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){at(a,a.return,u)}}l&64&&Jr(a),l&512&&un(a,a.return);break;case 3:if(Qe(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{ks(t,e)}catch(u){at(a,a.return,u)}}break;case 27:e===null&&l&4&&Ir(a);case 26:case 5:Qe(t,a),e===null&&l&4&&Wr(a),l&512&&un(a,a.return);break;case 12:Qe(t,a);break;case 31:Qe(t,a),l&4&&lf(t,a);break;case 13:Qe(t,a),l&4&&nf(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=wp.bind(null,a),Qp(t,a))));break;case 22:if(l=a.memoizedState!==null||Ye,!l){e=e!==null&&e.memoizedState!==null||At,n=Ye;var i=At;Ye=l,(At=e)&&!i?Ve(t,a,(a.subtreeFlags&8772)!==0):Qe(t,a),Ye=n,At=i}break;case 30:break;default:Qe(t,a)}}function ef(t){var e=t.alternate;e!==null&&(t.alternate=null,ef(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&iu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dt=null,Vt=!1;function Xe(t,e,a){for(a=a.child;a!==null;)af(t,e,a),a=a.sibling}function af(t,e,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:At||Ee(a,e),Xe(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:At||Ee(a,e);var l=dt,n=Vt;ma(a.type)&&(dt=a.stateNode,Vt=!1),Xe(t,e,a),mn(a.stateNode),dt=l,Vt=n;break;case 5:At||Ee(a,e);case 6:if(l=dt,n=Vt,dt=null,Xe(t,e,a),dt=l,Vt=n,dt!==null)if(Vt)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(a.stateNode)}catch(i){at(a,e,i)}else try{dt.removeChild(a.stateNode)}catch(i){at(a,e,i)}break;case 18:dt!==null&&(Vt?(t=dt,$f(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),El(t)):$f(dt,a.stateNode));break;case 4:l=dt,n=Vt,dt=a.stateNode.containerInfo,Vt=!0,Xe(t,e,a),dt=l,Vt=n;break;case 0:case 11:case 14:case 15:oa(2,a,e),At||oa(4,a,e),Xe(t,e,a);break;case 1:At||(Ee(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&$r(a,e,l)),Xe(t,e,a);break;case 21:Xe(t,e,a);break;case 22:At=(l=At)||a.memoizedState!==null,Xe(t,e,a),At=l;break;default:Xe(t,e,a)}}function lf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{El(t)}catch(a){at(e,e.return,a)}}}function nf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{El(t)}catch(a){at(e,e.return,a)}}function mp(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Pr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Pr),e;default:throw Error(p(435,t.tag))}}function vi(t,e){var a=mp(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=Ap.bind(null,t,l);l.then(n,n)}})}function Lt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(ma(c.type)){dt=c.stateNode,Vt=!1;break t}break;case 5:dt=c.stateNode,Vt=!1;break t;case 3:case 4:dt=c.stateNode.containerInfo,Vt=!0;break t}c=c.return}if(dt===null)throw Error(p(160));af(i,u,n),dt=null,Vt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)uf(e,t),e=e.sibling}var Se=null;function uf(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Lt(e,t),Zt(t),l&4&&(oa(3,t,t.return),nn(3,t),oa(5,t,t.return));break;case 1:Lt(e,t),Zt(t),l&512&&(At||a===null||Ee(a,a.return)),l&64&&Ye&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Se;if(Lt(e,t),Zt(t),l&512&&(At||a===null||Ee(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Hl]||i[Ot]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Nt(i,l,a),i[Ot]=t,Mt(i),l=i;break t;case"link":var u=ud("link","href",n).get(l+(a.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(c,1);break e}}i=n.createElement(l),Nt(i,l,a),n.head.appendChild(i);break;case"meta":if(u=ud("meta","content",n).get(l+(a.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(c,1);break e}}i=n.createElement(l),Nt(i,l,a),n.head.appendChild(i);break;default:throw Error(p(468,l))}i[Ot]=t,Mt(i),l=i}t.stateNode=l}else cd(n,t.type,t.stateNode);else t.stateNode=id(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?cd(n,t.type,t.stateNode):id(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&jc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Lt(e,t),Zt(t),l&512&&(At||a===null||Ee(a,a.return)),a!==null&&l&4&&jc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Lt(e,t),Zt(t),l&512&&(At||a===null||Ee(a,a.return)),t.flags&32){n=t.stateNode;try{Wa(n,"")}catch(C){at(t,t.return,C)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,jc(t,n,a!==null?a.memoizedProps:n)),l&1024&&(Dc=!0);break;case 6:if(Lt(e,t),Zt(t),l&4){if(t.stateNode===null)throw Error(p(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(C){at(t,t.return,C)}}break;case 3:if(Ni=null,n=Se,Se=Ui(e.containerInfo),Lt(e,t),Se=n,Zt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{El(e.containerInfo)}catch(C){at(t,t.return,C)}Dc&&(Dc=!1,cf(t));break;case 4:l=Se,Se=Ui(t.stateNode.containerInfo),Lt(e,t),Zt(t),Se=l;break;case 12:Lt(e,t),Zt(t);break;case 31:Lt(e,t),Zt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vi(t,l)));break;case 13:Lt(e,t),Zt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Si=Wt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vi(t,l)));break;case 22:n=t.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,m=Ye,x=At;if(Ye=m||n,At=x||s,Lt(e,t),At=x,Ye=m,Zt(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||s||Ye||At||Ga(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){s=a=e;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var w=s.memoizedProps.style,h=w!=null&&w.hasOwnProperty("display")?w.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(C){at(s,s.return,C)}}}else if(e.tag===6){if(a===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(C){at(s,s.return,C)}}}else if(e.tag===18){if(a===null){s=e;try{var y=s.stateNode;n?Wf(y,!0):Wf(s.stateNode,!1)}catch(C){at(s,s.return,C)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,vi(t,a))));break;case 19:Lt(e,t),Zt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vi(t,l)));break;case 30:break;case 21:break;default:Lt(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Fr(l)){a=l;break}l=l.return}if(a==null)throw Error(p(160));switch(a.tag){case 27:var n=a.stateNode,i=Ec(t);yi(t,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Wa(u,""),a.flags&=-33);var c=Ec(t);yi(t,c,u);break;case 3:case 4:var s=a.stateNode.containerInfo,m=Ec(t);Mc(t,m,s);break;default:throw Error(p(161))}}catch(x){at(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;cf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Qe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)tf(t,e.alternate,e),e=e.sibling}function Ga(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:oa(4,e,e.return),Ga(e);break;case 1:Ee(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&$r(e,e.return,a),Ga(e);break;case 27:mn(e.stateNode);case 26:case 5:Ee(e,e.return),Ga(e);break;case 22:e.memoizedState===null&&Ga(e);break;case 30:Ga(e);break;default:Ga(e)}t=t.sibling}}function Ve(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ve(n,i,a),nn(4,i);break;case 1:if(Ve(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){at(l,l.return,m)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)qs(s[n],c)}catch(m){at(l,l.return,m)}}a&&u&64&&Jr(i),un(i,i.return);break;case 27:Ir(i);case 26:case 5:Ve(n,i,a),a&&l===null&&u&4&&Wr(i),un(i,i.return);break;case 12:Ve(n,i,a);break;case 31:Ve(n,i,a),a&&u&4&&lf(n,i);break;case 13:Ve(n,i,a),a&&u&4&&nf(n,i);break;case 22:i.memoizedState===null&&Ve(n,i,a),un(i,i.return);break;case 30:break;default:Ve(n,i,a)}e=e.sibling}}function Cc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ll(a))}function Oc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ll(t))}function ze(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)of(t,e,a,l),e=e.sibling}function of(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ze(t,e,a,l),n&2048&&nn(9,e);break;case 1:ze(t,e,a,l);break;case 3:ze(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ll(t)));break;case 12:if(n&2048){ze(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){at(e,e.return,s)}}else ze(t,e,a,l);break;case 31:ze(t,e,a,l);break;case 13:ze(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?ze(t,e,a,l):cn(t,e):i._visibility&2?ze(t,e,a,l):(i._visibility|=2,hl(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Cc(u,e);break;case 24:ze(t,e,a,l),n&2048&&Oc(e.alternate,e);break;default:ze(t,e,a,l)}}function hl(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=a,s=l,m=u.flags;switch(u.tag){case 0:case 11:case 15:hl(i,u,c,s,n),nn(8,u);break;case 23:break;case 22:var x=u.stateNode;u.memoizedState!==null?x._visibility&2?hl(i,u,c,s,n):cn(i,u):(x._visibility|=2,hl(i,u,c,s,n)),n&&m&2048&&Cc(u.alternate,u);break;case 24:hl(i,u,c,s,n),n&&m&2048&&Oc(u.alternate,u);break;default:hl(i,u,c,s,n)}e=e.sibling}}function cn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:cn(a,l),n&2048&&Cc(l.alternate,l);break;case 24:cn(a,l),n&2048&&Oc(l.alternate,l);break;default:cn(a,l)}e=e.sibling}}var on=8192;function bl(t,e,a){if(t.subtreeFlags&on)for(t=t.child;t!==null;)sf(t,e,a),t=t.sibling}function sf(t,e,a){switch(t.tag){case 26:bl(t,e,a),t.flags&on&&t.memoizedState!==null&&eg(a,Se,t.memoizedState,t.memoizedProps);break;case 5:bl(t,e,a);break;case 3:case 4:var l=Se;Se=Ui(t.stateNode.containerInfo),bl(t,e,a),Se=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=on,on=16777216,bl(t,e,a),on=l):bl(t,e,a));break;default:bl(t,e,a)}}function rf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function sn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Dt=l,df(l,t)}rf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ff(t),t=t.sibling}function ff(t){switch(t.tag){case 0:case 11:case 15:sn(t),t.flags&2048&&oa(9,t,t.return);break;case 3:sn(t);break;case 12:sn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,xi(t)):sn(t);break;default:sn(t)}}function xi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Dt=l,df(l,t)}rf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:oa(8,e,e.return),xi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,xi(e));break;default:xi(e)}t=t.sibling}}function df(t,e){for(;Dt!==null;){var a=Dt;switch(a.tag){case 0:case 11:case 15:oa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ll(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Dt=l;else t:for(a=t;Dt!==null;){l=Dt;var n=l.sibling,i=l.return;if(ef(l),l===a){Dt=null;break t}if(n!==null){n.return=i,Dt=n;break t}Dt=i}}}var hp={getCacheForType:function(t){var e=Ut(St),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Ut(St).controller.signal}},bp=typeof WeakMap=="function"?WeakMap:Map,P=0,ut=null,X=null,L=0,et=0,le=null,sa=!1,yl=!1,Hc=!1,Le=0,ht=0,ra=0,Ra=0,Uc=0,ne=0,vl=0,rn=null,Kt=null,Bc=!1,Si=0,pf=0,zi=1/0,wi=null,fa=null,Tt=0,da=null,xl=null,Ze=0,Nc=0,_c=null,gf=null,fn=0,qc=null;function ie(){return(P&2)!==0&&L!==0?L&-L:z.T!==null?Qc():Do()}function mf(){if(ne===0)if((L&536870912)===0||K){var t=On;On<<=1,(On&3932160)===0&&(On=262144),ne=t}else ne=536870912;return t=ee.current,t!==null&&(t.flags|=32),ne}function Jt(t,e,a){(t===ut&&(et===2||et===9)||t.cancelPendingCommit!==null)&&(Sl(t,0),pa(t,L,ne,!1)),Ol(t,a),((P&2)===0||t!==ut)&&(t===ut&&((P&2)===0&&(Ra|=a),ht===4&&pa(t,L,ne,!1)),Me(t))}function hf(t,e,a){if((P&6)!==0)throw Error(p(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Cl(t,e),n=l?xp(t,e):Gc(t,e,!0),i=l;do{if(n===0){yl&&!l&&pa(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!yp(a)){n=Gc(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=rn;var s=c.current.memoizedState.isDehydrated;if(s&&(Sl(c,u).flags|=256),u=Gc(c,u,!1),u!==2){if(Hc&&!s){c.errorRecoveryDisabledLanes|=i,Ra|=i,n=4;break t}i=Kt,Kt=n,i!==null&&(Kt===null?Kt=i:Kt.push.apply(Kt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Sl(t,0),pa(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(p(345));case 4:if((e&4194048)!==e)break;case 6:pa(l,e,ne,!sa);break t;case 2:Kt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((e&62914560)===e&&(n=Si+300-Wt(),10<n)){if(pa(l,e,ne,!sa),Un(l,0,!0)!==0)break t;Ze=e,l.timeoutHandle=Kf(bf.bind(null,l,a,Kt,wi,Bc,e,ne,Ra,vl,sa,i,"Throttled",-0,0),n);break t}bf(l,a,Kt,wi,Bc,e,ne,Ra,vl,sa,i,null,-0,0)}}break}while(!0);Me(t)}function bf(t,e,a,l,n,i,u,c,s,m,x,w,h,y){if(t.timeoutHandle=-1,w=e.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oe},sf(e,i,w);var C=(i&62914560)===i?Si-Wt():(i&4194048)===i?pf-Wt():0;if(C=ag(w,C),C!==null){Ze=i,t.cancelPendingCommit=C(Tf.bind(null,t,e,i,a,l,n,u,c,s,x,w,null,h,y)),pa(t,i,u,!m);return}}Tf(t,e,i,a,l,n,u,c,s)}function yp(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Pt(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pa(t,e,a,l){e&=~Uc,e&=~Ra,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-It(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&jo(t,a,e)}function Ai(){return(P&6)===0?(dn(0),!1):!0}function kc(){if(X!==null){if(et===0)var t=X.return;else t=X,Ne=Oa=null,tc(t),fl=null,Kl=0,t=X;for(;t!==null;)Kr(t.alternate,t),t=t.return;X=null}}function Sl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,kp(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ze=0,kc(),ut=t,X=a=Ue(t.current,null),L=e,et=0,le=null,sa=!1,yl=Cl(t,e),Hc=!1,vl=ne=Uc=Ra=ra=ht=0,Kt=rn=null,Bc=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-It(l),i=1<<n;e|=t[n],l&=~i}return Le=e,Ln(),a}function yf(t,e){k=null,z.H=en,e===rl||e===Pn?(e=Us(),et=3):e===Xu?(e=Us(),et=4):et=e===hc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,le=e,X===null&&(ht=1,pi(t,fe(e,t.current)))}function vf(){var t=ee.current;return t===null?!0:(L&4194048)===L?me===null:(L&62914560)===L||(L&536870912)!==0?t===me:!1}function xf(){var t=z.H;return z.H=en,t===null?en:t}function Sf(){var t=z.A;return z.A=hp,t}function Ti(){ht=4,sa||(L&4194048)!==L&&ee.current!==null||(yl=!0),(ra&134217727)===0&&(Ra&134217727)===0||ut===null||pa(ut,L,ne,!1)}function Gc(t,e,a){var l=P;P|=2;var n=xf(),i=Sf();(ut!==t||L!==e)&&(wi=null,Sl(t,e)),e=!1;var u=ht;t:do try{if(et!==0&&X!==null){var c=X,s=le;switch(et){case 8:kc(),u=6;break t;case 3:case 2:case 9:case 6:ee.current===null&&(e=!0);var m=et;if(et=0,le=null,zl(t,c,s,m),a&&yl){u=0;break t}break;default:m=et,et=0,le=null,zl(t,c,s,m)}}vp(),u=ht;break}catch(x){yf(t,x)}while(!0);return e&&t.shellSuspendCounter++,Ne=Oa=null,P=l,z.H=n,z.A=i,X===null&&(ut=null,L=0,Ln()),u}function vp(){for(;X!==null;)zf(X)}function xp(t,e){var a=P;P|=2;var l=xf(),n=Sf();ut!==t||L!==e?(wi=null,zi=Wt()+500,Sl(t,e)):yl=Cl(t,e);t:do try{if(et!==0&&X!==null){e=X;var i=le;e:switch(et){case 1:et=0,le=null,zl(t,e,i,1);break;case 2:case 9:if(Os(i)){et=0,le=null,wf(e);break}e=function(){et!==2&&et!==9||ut!==t||(et=7),Me(t)},i.then(e,e);break t;case 3:et=7;break t;case 4:et=5;break t;case 7:Os(i)?(et=0,le=null,wf(e)):(et=0,le=null,zl(t,e,i,7));break;case 5:var u=null;switch(X.tag){case 26:u=X.memoizedState;case 5:case 27:var c=X;if(u?od(u):c.stateNode.complete){et=0,le=null;var s=c.sibling;if(s!==null)X=s;else{var m=c.return;m!==null?(X=m,ji(m)):X=null}break e}}et=0,le=null,zl(t,e,i,5);break;case 6:et=0,le=null,zl(t,e,i,6);break;case 8:kc(),ht=6;break t;default:throw Error(p(462))}}Sp();break}catch(x){yf(t,x)}while(!0);return Ne=Oa=null,z.H=l,z.A=n,P=a,X!==null?0:(ut=null,L=0,Ln(),ht)}function Sp(){for(;X!==null&&!Vd();)zf(X)}function zf(t){var e=Lr(t.alternate,t,Le);t.memoizedProps=t.pendingProps,e===null?ji(t):X=e}function wf(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Gr(a,e,e.pendingProps,e.type,void 0,L);break;case 11:e=Gr(a,e,e.pendingProps,e.type.render,e.ref,L);break;case 5:tc(e);default:Kr(a,e),e=X=xs(e,Le),e=Lr(a,e,Le)}t.memoizedProps=t.pendingProps,e===null?ji(t):X=e}function zl(t,e,a,l){Ne=Oa=null,tc(e),fl=null,Kl=0;var n=e.return;try{if(sp(t,n,e,a,L)){ht=1,pi(t,fe(a,t.current)),X=null;return}}catch(i){if(n!==null)throw X=n,i;ht=1,pi(t,fe(a,t.current)),X=null;return}e.flags&32768?(K||l===1?t=!0:yl||(L&536870912)!==0?t=!1:(sa=t=!0,(l===2||l===9||l===3||l===6)&&(l=ee.current,l!==null&&l.tag===13&&(l.flags|=16384))),Af(e,t)):ji(e)}function ji(t){var e=t;do{if((e.flags&32768)!==0){Af(e,sa);return}t=e.return;var a=dp(e.alternate,e,Le);if(a!==null){X=a;return}if(e=e.sibling,e!==null){X=e;return}X=e=t}while(e!==null);ht===0&&(ht=5)}function Af(t,e){do{var a=pp(t.alternate,t);if(a!==null){a.flags&=32767,X=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){X=t;return}X=t=a}while(t!==null);ht=6,X=null}function Tf(t,e,a,l,n,i,u,c,s){t.cancelPendingCommit=null;do Ei();while(Tt!==0);if((P&6)!==0)throw Error(p(327));if(e!==null){if(e===t.current)throw Error(p(177));if(i=e.lanes|e.childLanes,i|=Eu,t0(t,a,i,u,c,s),t===ut&&(X=ut=null,L=0),xl=e,da=t,Ze=a,Nc=i,_c=n,gf=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Tp(Dn,function(){return Cf(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,n=M.p,M.p=2,u=P,P|=4;try{gp(t,e,a)}finally{P=u,M.p=n,z.T=l}}Tt=1,jf(),Ef(),Mf()}}function jf(){if(Tt===1){Tt=0;var t=da,e=xl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=M.p;M.p=2;var n=P;P|=4;try{uf(e,t);var i=Fc,u=fs(t.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&rs(c.ownerDocument.documentElement,c)){if(s!==null&&zu(c)){var m=s.start,x=s.end;if(x===void 0&&(x=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(x,c.value.length);else{var w=c.ownerDocument||document,h=w&&w.defaultView||window;if(h.getSelection){var y=h.getSelection(),C=c.textContent.length,B=Math.min(s.start,C),it=s.end===void 0?B:Math.min(s.end,C);!y.extend&&B>it&&(u=it,it=B,B=u);var f=ss(c,B),r=ss(c,it);if(f&&r&&(y.rangeCount!==1||y.anchorNode!==f.node||y.anchorOffset!==f.offset||y.focusNode!==r.node||y.focusOffset!==r.offset)){var g=w.createRange();g.setStart(f.node,f.offset),y.removeAllRanges(),B>it?(y.addRange(g),y.extend(r.node,r.offset)):(g.setEnd(r.node,r.offset),y.addRange(g))}}}}for(w=[],y=c;y=y.parentNode;)y.nodeType===1&&w.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<w.length;c++){var S=w[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Gi=!!Wc,Fc=Wc=null}finally{P=n,M.p=l,z.T=a}}t.current=e,Tt=2}}function Ef(){if(Tt===2){Tt=0;var t=da,e=xl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=M.p;M.p=2;var n=P;P|=4;try{tf(t,e.alternate,e)}finally{P=n,M.p=l,z.T=a}}Tt=3}}function Mf(){if(Tt===4||Tt===3){Tt=0,Ld();var t=da,e=xl,a=Ze,l=gf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Tt=5:(Tt=0,xl=da=null,Df(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(fa=null),lu(a),e=e.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Dl,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=z.T,n=M.p,M.p=2,z.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{z.T=e,M.p=n}}(Ze&3)!==0&&Ei(),Me(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===qc?fn++:(fn=0,qc=t):fn=0,dn(0)}}function Df(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ll(e)))}function Ei(){return jf(),Ef(),Mf(),Cf()}function Cf(){if(Tt!==5)return!1;var t=da,e=Nc;Nc=0;var a=lu(Ze),l=z.T,n=M.p;try{M.p=32>a?32:a,z.T=null,a=_c,_c=null;var i=da,u=Ze;if(Tt=0,xl=da=null,Ze=0,(P&6)!==0)throw Error(p(331));var c=P;if(P|=4,ff(i.current),of(i,i.current,u,a),P=c,dn(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Dl,i)}catch{}return!0}finally{M.p=n,z.T=l,Df(t,e)}}function Of(t,e,a){e=fe(a,e),e=mc(t.stateNode,e,2),t=ia(t,e,2),t!==null&&(Ol(t,2),Me(t))}function at(t,e,a){if(t.tag===3)Of(t,t,a);else for(;e!==null;){if(e.tag===3){Of(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fa===null||!fa.has(l))){t=fe(a,t),a=Or(2),l=ia(e,a,2),l!==null&&(Hr(a,l,e,t),Ol(l,2),Me(l));break}}e=e.return}}function Rc(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new bp;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Hc=!0,n.add(a),t=zp.bind(null,t,e,a),e.then(t,t))}function zp(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ut===t&&(L&a)===a&&(ht===4||ht===3&&(L&62914560)===L&&300>Wt()-Si?(P&2)===0&&Sl(t,0):Uc|=a,vl===L&&(vl=0)),Me(t)}function Hf(t,e){e===0&&(e=To()),t=Ma(t,e),t!==null&&(Ol(t,e),Me(t))}function wp(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Hf(t,a)}function Ap(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(p(314))}l!==null&&l.delete(e),Hf(t,a)}function Tp(t,e){return Pi(t,e)}var Mi=null,wl=null,Yc=!1,Di=!1,Xc=!1,ga=0;function Me(t){t!==wl&&t.next===null&&(wl===null?Mi=wl=t:wl=wl.next=t),Di=!0,Yc||(Yc=!0,Ep())}function dn(t,e){if(!Xc&&Di){Xc=!0;do for(var a=!1,l=Mi;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-It(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,_f(l,i))}else i=L,i=Un(l,l===ut?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Cl(l,i)||(a=!0,_f(l,i));l=l.next}while(a);Xc=!1}}function jp(){Uf()}function Uf(){Di=Yc=!1;var t=0;ga!==0&&qp()&&(t=ga);for(var e=Wt(),a=null,l=Mi;l!==null;){var n=l.next,i=Bf(l,e);i===0?(l.next=null,a===null?Mi=n:a.next=n,n===null&&(wl=a)):(a=l,(t!==0||(i&3)!==0)&&(Di=!0)),l=n}Tt!==0&&Tt!==5||dn(t),ga!==0&&(ga=0)}function Bf(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-It(i),c=1<<u,s=n[u];s===-1?((c&a)===0||(c&l)!==0)&&(n[u]=Pd(c,e)):s<=e&&(t.expiredLanes|=c),i&=~c}if(e=ut,a=L,a=Un(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(et===2||et===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&tu(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Cl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&tu(l),lu(a)){case 2:case 8:a=wo;break;case 32:a=Dn;break;case 268435456:a=Ao;break;default:a=Dn}return l=Nf.bind(null,t),a=Pi(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&tu(l),t.callbackPriority=2,t.callbackNode=null,2}function Nf(t,e){if(Tt!==0&&Tt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ei()&&t.callbackNode!==a)return null;var l=L;return l=Un(t,t===ut?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(hf(t,l,e),Bf(t,Wt()),t.callbackNode!=null&&t.callbackNode===a?Nf.bind(null,t):null)}function _f(t,e){if(Ei())return null;hf(t,e,!0)}function Ep(){Gp(function(){(P&6)!==0?Pi(zo,jp):Uf()})}function Qc(){if(ga===0){var t=ol;t===0&&(t=Cn,Cn<<=1,(Cn&261888)===0&&(Cn=256)),ga=t}return ga}function qf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qn(""+t)}function kf(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Mp(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=qf((n[Xt]||null).action),u=l.submitter;u&&(e=(e=u[Xt]||null)?qf(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new Yn("action","action",null,l,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var s=u?kf(n,u):new FormData(n);sc(a,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?kf(n,u):new FormData(n),sc(a,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var Vc=0;Vc<ju.length;Vc++){var Lc=ju[Vc],Dp=Lc.toLowerCase(),Cp=Lc[0].toUpperCase()+Lc.slice(1);xe(Dp,"on"+Cp)}xe(gs,"onAnimationEnd"),xe(ms,"onAnimationIteration"),xe(hs,"onAnimationStart"),xe("dblclick","onDoubleClick"),xe("focusin","onFocus"),xe("focusout","onBlur"),xe(Z0,"onTransitionRun"),xe(K0,"onTransitionStart"),xe(J0,"onTransitionCancel"),xe(bs,"onTransitionEnd"),Ja("onMouseEnter",["mouseout","mouseover"]),Ja("onMouseLeave",["mouseout","mouseover"]),Ja("onPointerEnter",["pointerout","pointerover"]),Ja("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Op=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function Gf(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var c=l[u],s=c.instance,m=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=m;try{i(n)}catch(x){Vn(x)}n.currentTarget=null,i=s}else for(u=0;u<l.length;u++){if(c=l[u],s=c.instance,m=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=m;try{i(n)}catch(x){Vn(x)}n.currentTarget=null,i=s}}}}function Q(t,e){var a=e[nu];a===void 0&&(a=e[nu]=new Set);var l=t+"__bubble";a.has(l)||(Rf(e,t,2,!1),a.add(l))}function Zc(t,e,a){var l=0;e&&(l|=4),Rf(a,t,l,e)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Kc(t){if(!t[Ci]){t[Ci]=!0,Ho.forEach(function(a){a!=="selectionchange"&&(Op.has(a)||Zc(a,!1,t),Zc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ci]||(e[Ci]=!0,Zc("selectionchange",!1,e))}}function Rf(t,e,a,l){switch(md(e)){case 2:var n=ig;break;case 8:n=ug;break;default:n=oo}a=n.bind(null,e,a,t),n=void 0,!pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Jc(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=l.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=La(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){l=i=u;continue t}c=c.parentNode}}l=l.return}Vo(function(){var m=i,x=fu(a),w=[];t:{var h=ys.get(t);if(h!==void 0){var y=Yn,C=t;switch(t){case"keypress":if(Gn(a)===0)break t;case"keydown":case"keyup":y=A0;break;case"focusin":C="focus",y=bu;break;case"focusout":C="blur",y=bu;break;case"beforeblur":case"afterblur":y=bu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=E0;break;case gs:case ms:case hs:y=m0;break;case bs:y=D0;break;case"scroll":case"scrollend":y=r0;break;case"wheel":y=O0;break;case"copy":case"cut":case"paste":y=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=$o;break;case"toggle":case"beforetoggle":y=U0}var B=(e&4)!==0,it=!B&&(t==="scroll"||t==="scrollend"),f=B?h!==null?h+"Capture":null:h;B=[];for(var r=m,g;r!==null;){var S=r;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||f===null||(S=Bl(r,f),S!=null&&B.push(gn(r,S,g))),it)break;r=r.return}0<B.length&&(h=new y(h,C,null,a,x),w.push({event:h,listeners:B}))}}if((e&7)===0){t:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&a!==ru&&(C=a.relatedTarget||a.fromElement)&&(La(C)||C[Va]))break t;if((y||h)&&(h=x.window===x?x:(h=x.ownerDocument)?h.defaultView||h.parentWindow:window,y?(C=a.relatedTarget||a.toElement,y=m,C=C?La(C):null,C!==null&&(it=H(C),B=C.tag,C!==it||B!==5&&B!==27&&B!==6)&&(C=null)):(y=null,C=m),y!==C)){if(B=Ko,S="onMouseLeave",f="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(B=$o,S="onPointerLeave",f="onPointerEnter",r="pointer"),it=y==null?h:Ul(y),g=C==null?h:Ul(C),h=new B(S,r+"leave",y,a,x),h.target=it,h.relatedTarget=g,S=null,La(x)===m&&(B=new B(f,r+"enter",C,a,x),B.target=g,B.relatedTarget=it,S=B),it=S,y&&C)e:{for(B=Hp,f=y,r=C,g=0,S=f;S;S=B(S))g++;S=0;for(var U=r;U;U=B(U))S++;for(;0<g-S;)f=B(f),g--;for(;0<S-g;)r=B(r),S--;for(;g--;){if(f===r||r!==null&&f===r.alternate){B=f;break e}f=B(f),r=B(r)}B=null}else B=null;y!==null&&Yf(w,h,y,B,!1),C!==null&&it!==null&&Yf(w,it,C,B,!0)}}t:{if(h=m?Ul(m):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var W=ls;else if(es(h))if(ns)W=Q0;else{W=Y0;var O=R0}else y=h.nodeName,!y||y.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&su(m.elementType)&&(W=ls):W=X0;if(W&&(W=W(t,m))){as(w,W,a,x);break t}O&&O(t,h,m),t==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&ou(h,"number",h.value)}switch(O=m?Ul(m):window,t){case"focusin":(es(O)||O.contentEditable==="true")&&(tl=O,wu=m,Xl=null);break;case"focusout":Xl=wu=tl=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,ds(w,a,x);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":ds(w,a,x)}var R;if(vu)t:{switch(t){case"compositionstart":var Z="onCompositionStart";break t;case"compositionend":Z="onCompositionEnd";break t;case"compositionupdate":Z="onCompositionUpdate";break t}Z=void 0}else Pa?Po(t,a)&&(Z="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Z="onCompositionStart");Z&&(Wo&&a.locale!=="ko"&&(Pa||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Pa&&(R=Lo()):(Ie=x,gu="value"in Ie?Ie.value:Ie.textContent,Pa=!0)),O=Oi(m,Z),0<O.length&&(Z=new Jo(Z,t,null,a,x),w.push({event:Z,listeners:O}),R?Z.data=R:(R=ts(a),R!==null&&(Z.data=R)))),(R=N0?_0(t,a):q0(t,a))&&(Z=Oi(m,"onBeforeInput"),0<Z.length&&(O=new Jo("onBeforeInput","beforeinput",null,a,x),w.push({event:O,listeners:Z}),O.data=R)),Mp(w,t,m,a,x)}Gf(w,e)})}function gn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Oi(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Bl(t,a),n!=null&&l.unshift(gn(t,n,i)),n=Bl(t,e),n!=null&&l.push(gn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function Hp(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yf(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var c=a,s=c.alternate,m=c.stateNode;if(c=c.tag,s!==null&&s===l)break;c!==5&&c!==26&&c!==27||m===null||(s=m,n?(m=Bl(a,i),m!=null&&u.unshift(gn(a,m,s))):n||(m=Bl(a,i),m!=null&&u.push(gn(a,m,s)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var Up=/\r\n?/g,Bp=/\u0000|\uFFFD/g;function Xf(t){return(typeof t=="string"?t:""+t).replace(Up,`
`).replace(Bp,"")}function Qf(t,e){return e=Xf(e),Xf(t)===e}function nt(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Wa(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Wa(t,""+l);break;case"className":Nn(t,"class",l);break;case"tabIndex":Nn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Nn(t,a,l);break;case"style":Xo(t,l,i);break;case"data":if(e!=="object"){Nn(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=qn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&nt(t,e,"name",n.name,n,null),nt(t,e,"formEncType",n.formEncType,n,null),nt(t,e,"formMethod",n.formMethod,n,null),nt(t,e,"formTarget",n.formTarget,n,null)):(nt(t,e,"encType",n.encType,n,null),nt(t,e,"method",n.method,n,null),nt(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=qn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Oe);break;case"onScroll":l!=null&&Q("scroll",t);break;case"onScrollEnd":l!=null&&Q("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(p(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=qn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Q("beforetoggle",t),Q("toggle",t),Bn(t,"popover",l);break;case"xlinkActuate":Ce(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ce(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ce(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ce(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ce(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ce(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Bn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=o0.get(a)||a,Bn(t,a,l))}}function $c(t,e,a,l,n,i){switch(a){case"style":Xo(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(p(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Wa(t,l):(typeof l=="number"||typeof l=="bigint")&&Wa(t,""+l);break;case"onScroll":l!=null&&Q("scroll",t);break;case"onScrollEnd":l!=null&&Q("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Oe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Xt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Bn(t,a,l)}}}function Nt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",t),Q("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:nt(t,e,i,u,a,null)}}n&&nt(t,e,"srcSet",a.srcSet,a,null),l&&nt(t,e,"src",a.src,a,null);return;case"input":Q("invalid",t);var c=i=u=n=null,s=null,m=null;for(l in a)if(a.hasOwnProperty(l)){var x=a[l];if(x!=null)switch(l){case"name":n=x;break;case"type":u=x;break;case"checked":s=x;break;case"defaultChecked":m=x;break;case"value":i=x;break;case"defaultValue":c=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(p(137,e));break;default:nt(t,e,l,x,a,null)}}ko(t,i,c,s,m,u,n,!1);return;case"select":Q("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:nt(t,e,n,c,a,null)}e=i,a=u,t.multiple=!!l,e!=null?$a(t,!!l,e,!1):a!=null&&$a(t,!!l,a,!0);return;case"textarea":Q("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(p(91));break;default:nt(t,e,u,c,a,null)}Ro(t,l,n,i);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(l=a[s],l!=null))switch(s){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:nt(t,e,s,l,a,null)}return;case"dialog":Q("beforetoggle",t),Q("toggle",t),Q("cancel",t),Q("close",t);break;case"iframe":case"object":Q("load",t);break;case"video":case"audio":for(l=0;l<pn.length;l++)Q(pn[l],t);break;case"image":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"embed":case"source":case"link":Q("error",t),Q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(l=a[m],l!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:nt(t,e,m,l,a,null)}return;default:if(su(e)){for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!==void 0&&$c(t,e,x,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&nt(t,e,c,l,a,null))}function Np(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,m=null,x=null;for(y in a){var w=a[y];if(a.hasOwnProperty(y)&&w!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":s=w;default:l.hasOwnProperty(y)||nt(t,e,y,null,l,w)}}for(var h in l){var y=l[h];if(w=a[h],l.hasOwnProperty(h)&&(y!=null||w!=null))switch(h){case"type":i=y;break;case"name":n=y;break;case"checked":m=y;break;case"defaultChecked":x=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,e));break;default:y!==w&&nt(t,e,h,y,l,w)}}cu(t,u,c,s,m,x,i,n);return;case"select":y=u=c=h=null;for(i in a)if(s=a[i],a.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":y=s;default:l.hasOwnProperty(i)||nt(t,e,i,null,l,s)}for(n in l)if(i=l[n],s=a[n],l.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":h=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&nt(t,e,n,i,l,s)}e=c,a=u,l=y,h!=null?$a(t,!!a,h,!1):!!l!=!!a&&(e!=null?$a(t,!!a,e,!0):$a(t,!!a,a?[]:"",!1));return;case"textarea":y=h=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:nt(t,e,c,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":h=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(p(91));break;default:n!==i&&nt(t,e,u,n,l,i)}Go(t,h,y);return;case"option":for(var C in a)if(h=a[C],a.hasOwnProperty(C)&&h!=null&&!l.hasOwnProperty(C))switch(C){case"selected":t.selected=!1;break;default:nt(t,e,C,null,l,h)}for(s in l)if(h=l[s],y=a[s],l.hasOwnProperty(s)&&h!==y&&(h!=null||y!=null))switch(s){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:nt(t,e,s,h,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in a)h=a[B],a.hasOwnProperty(B)&&h!=null&&!l.hasOwnProperty(B)&&nt(t,e,B,null,l,h);for(m in l)if(h=l[m],y=a[m],l.hasOwnProperty(m)&&h!==y&&(h!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(p(137,e));break;default:nt(t,e,m,h,l,y)}return;default:if(su(e)){for(var it in a)h=a[it],a.hasOwnProperty(it)&&h!==void 0&&!l.hasOwnProperty(it)&&$c(t,e,it,void 0,l,h);for(x in l)h=l[x],y=a[x],!l.hasOwnProperty(x)||h===y||h===void 0&&y===void 0||$c(t,e,x,h,l,y);return}}for(var f in a)h=a[f],a.hasOwnProperty(f)&&h!=null&&!l.hasOwnProperty(f)&&nt(t,e,f,null,l,h);for(w in l)h=l[w],y=a[w],!l.hasOwnProperty(w)||h===y||h==null&&y==null||nt(t,e,w,h,l,y)}function Vf(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _p(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Vf(u)){for(u=0,c=n.responseEnd,l+=1;l<a.length;l++){var s=a[l],m=s.startTime;if(m>c)break;var x=s.transferSize,w=s.initiatorType;x&&Vf(w)&&(s=s.responseEnd,u+=x*(s<c?1:(c-m)/(s-m)))}if(--l,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wc=null,Fc=null;function Hi(t){return t.nodeType===9?t:t.ownerDocument}function Lf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zf(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ic(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pc=null;function qp(){var t=window.event;return t&&t.type==="popstate"?t===Pc?!1:(Pc=t,!0):(Pc=null,!1)}var Kf=typeof setTimeout=="function"?setTimeout:void 0,kp=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,Gp=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(t){return Jf.resolve(null).then(t).catch(Rp)}:Kf;function Rp(t){setTimeout(function(){throw t})}function ma(t){return t==="head"}function $f(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),El(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")mn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,mn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Hl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&mn(t.ownerDocument.body);a=n}while(a);El(e)}function Wf(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function to(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":to(a),iu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Yp(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Hl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=he(t.nextSibling),t===null)break}return null}function Xp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=he(t.nextSibling),t===null))return null;return t}function Ff(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=he(t.nextSibling),t===null))return null;return t}function eo(t){return t.data==="$?"||t.data==="$~"}function ao(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qp(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function he(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var lo=null;function If(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return he(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Pf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function td(t,e,a){switch(e=Hi(a),t){case"html":if(t=e.documentElement,!t)throw Error(p(452));return t;case"head":if(t=e.head,!t)throw Error(p(453));return t;case"body":if(t=e.body,!t)throw Error(p(454));return t;default:throw Error(p(451))}}function mn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);iu(t)}var be=new Map,ed=new Set;function Ui(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ke=M.d;M.d={f:Vp,r:Lp,D:Zp,C:Kp,L:Jp,m:$p,X:Fp,S:Wp,M:Ip};function Vp(){var t=Ke.f(),e=Ai();return t||e}function Lp(t){var e=Za(t);e!==null&&e.tag===5&&e.type==="form"?br(e):Ke.r(t)}var Al=typeof document>"u"?null:document;function ad(t,e,a){var l=Al;if(l&&typeof e=="string"&&e){var n=se(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),ed.has(n)||(ed.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Nt(e,"link",t),Mt(e),l.head.appendChild(e)))}}function Zp(t){Ke.D(t),ad("dns-prefetch",t,null)}function Kp(t,e){Ke.C(t,e),ad("preconnect",t,e)}function Jp(t,e,a){Ke.L(t,e,a);var l=Al;if(l&&t&&e){var n='link[rel="preload"][as="'+se(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+se(a.imageSizes)+'"]')):n+='[href="'+se(t)+'"]';var i=n;switch(e){case"style":i=Tl(t);break;case"script":i=jl(t)}be.has(i)||(t=D({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),be.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(hn(i))||e==="script"&&l.querySelector(bn(i))||(e=l.createElement("link"),Nt(e,"link",t),Mt(e),l.head.appendChild(e)))}}function $p(t,e){Ke.m(t,e);var a=Al;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+se(l)+'"][href="'+se(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=jl(t)}if(!be.has(i)&&(t=D({rel:"modulepreload",href:t},e),be.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bn(i)))return}l=a.createElement("link"),Nt(l,"link",t),Mt(l),a.head.appendChild(l)}}}function Wp(t,e,a){Ke.S(t,e,a);var l=Al;if(l&&t){var n=Ka(l).hoistableStyles,i=Tl(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(hn(i)))c.loading=5;else{t=D({rel:"stylesheet",href:t,"data-precedence":e},a),(a=be.get(i))&&no(t,a);var s=u=l.createElement("link");Mt(s),Nt(s,"link",t),s._p=new Promise(function(m,x){s.onload=m,s.onerror=x}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Bi(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function Fp(t,e){Ke.X(t,e);var a=Al;if(a&&t){var l=Ka(a).hoistableScripts,n=jl(t),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(t=D({src:t,async:!0},e),(e=be.get(n))&&io(t,e),i=a.createElement("script"),Mt(i),Nt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Ip(t,e){Ke.M(t,e);var a=Al;if(a&&t){var l=Ka(a).hoistableScripts,n=jl(t),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(t=D({src:t,async:!0,type:"module"},e),(e=be.get(n))&&io(t,e),i=a.createElement("script"),Mt(i),Nt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function ld(t,e,a,l){var n=(n=$e.current)?Ui(n):null;if(!n)throw Error(p(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Tl(a.href),a=Ka(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Tl(a.href);var i=Ka(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(hn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),be.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},be.set(t,a),i||Pp(n,t,a,u.state))),e&&l===null)throw Error(p(528,""));return u}if(e&&l!==null)throw Error(p(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=jl(a),a=Ka(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,t))}}function Tl(t){return'href="'+se(t)+'"'}function hn(t){return'link[rel="stylesheet"]['+t+"]"}function nd(t){return D({},t,{"data-precedence":t.precedence,precedence:null})}function Pp(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Nt(e,"link",a),Mt(e),t.head.appendChild(e))}function jl(t){return'[src="'+se(t)+'"]'}function bn(t){return"script[async]"+t}function id(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+se(a.href)+'"]');if(l)return e.instance=l,Mt(l),l;var n=D({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Mt(l),Nt(l,"style",n),Bi(l,a.precedence,t),e.instance=l;case"stylesheet":n=Tl(a.href);var i=t.querySelector(hn(n));if(i)return e.state.loading|=4,e.instance=i,Mt(i),i;l=nd(a),(n=be.get(n))&&no(l,n),i=(t.ownerDocument||t).createElement("link"),Mt(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Nt(i,"link",l),e.state.loading|=4,Bi(i,a.precedence,t),e.instance=i;case"script":return i=jl(a.src),(n=t.querySelector(bn(i)))?(e.instance=n,Mt(n),n):(l=a,(n=be.get(i))&&(l=D({},a),io(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Mt(n),Nt(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(p(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Bi(l,a.precedence,t));return e.instance}function Bi(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function no(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function io(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ni=null;function ud(t,e,a){if(Ni===null){var l=new Map,n=Ni=new Map;n.set(a,l)}else n=Ni,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Hl]||i[Ot]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function cd(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function tg(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function od(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function eg(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Tl(l.href),i=e.querySelector(hn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=_i.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,Mt(i);return}i=e.ownerDocument||e,l=nd(l),(n=be.get(n))&&no(l,n),i=i.createElement("link"),Mt(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Nt(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_i.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var uo=0;function ag(t,e){return t.stylesheets&&t.count===0&&ki(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&ki(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&uo===0&&(uo=62500*_p());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ki(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>uo?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function _i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ki(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var qi=null;function ki(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qi=new Map,e.forEach(lg,t),qi=null,_i.call(t))}function lg(t,e){if(!(e.state.loading&4)){var a=qi.get(t);if(a)var l=a.get(null);else{a=new Map,qi.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=_i.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var yn={$$typeof:pt,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function ng(t,e,a,l,n,i,u,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=eu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.hiddenUpdates=eu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function sd(t,e,a,l,n,i,u,c,s,m,x,w){return t=new ng(t,e,a,u,s,m,x,w,c),e=1,i===!0&&(e|=24),i=te(3,null,null,e),t.current=i,i.stateNode=t,e=Gu(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},Qu(i),t}function rd(t){return t?(t=ll,t):ll}function fd(t,e,a,l,n,i){n=rd(n),l.context===null?l.context=n:l.pendingContext=n,l=na(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ia(t,l,e),a!==null&&(Jt(a,t,e),$l(a,t,e))}function dd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function co(t,e){dd(t,e),(t=t.alternate)&&dd(t,e)}function pd(t){if(t.tag===13||t.tag===31){var e=Ma(t,67108864);e!==null&&Jt(e,t,67108864),co(t,67108864)}}function gd(t){if(t.tag===13||t.tag===31){var e=ie();e=au(e);var a=Ma(t,e);a!==null&&Jt(a,t,e),co(t,e)}}var Gi=!0;function ig(t,e,a,l){var n=z.T;z.T=null;var i=M.p;try{M.p=2,oo(t,e,a,l)}finally{M.p=i,z.T=n}}function ug(t,e,a,l){var n=z.T;z.T=null;var i=M.p;try{M.p=8,oo(t,e,a,l)}finally{M.p=i,z.T=n}}function oo(t,e,a,l){if(Gi){var n=so(l);if(n===null)Jc(t,e,l,Ri,a),hd(t,l);else if(og(n,t,e,a,l))l.stopPropagation();else if(hd(t,l),e&4&&-1<cg.indexOf(t)){for(;n!==null;){var i=Za(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=wa(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-It(u);c.entanglements[1]|=s,u&=~s}Me(i),(P&6)===0&&(zi=Wt()+500,dn(0))}}break;case 31:case 13:c=Ma(i,2),c!==null&&Jt(c,i,2),Ai(),co(i,2)}if(i=so(l),i===null&&Jc(t,e,l,Ri,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Jc(t,e,l,null,a)}}function so(t){return t=fu(t),ro(t)}var Ri=null;function ro(t){if(Ri=null,t=La(t),t!==null){var e=H(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=E(e),t!==null)return t;t=null}else if(a===31){if(t=G(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ri=t,null}function md(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zd()){case zo:return 2;case wo:return 8;case Dn:case Kd:return 32;case Ao:return 268435456;default:return 32}default:return 32}}var fo=!1,ha=null,ba=null,ya=null,vn=new Map,xn=new Map,va=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hd(t,e){switch(t){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":vn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(e.pointerId)}}function Sn(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Za(e),e!==null&&pd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function og(t,e,a,l,n){switch(e){case"focusin":return ha=Sn(ha,t,e,a,l,n),!0;case"dragenter":return ba=Sn(ba,t,e,a,l,n),!0;case"mouseover":return ya=Sn(ya,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return vn.set(i,Sn(vn.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,xn.set(i,Sn(xn.get(i)||null,t,e,a,l,n)),!0}return!1}function bd(t){var e=La(t.target);if(e!==null){var a=H(e);if(a!==null){if(e=a.tag,e===13){if(e=E(a),e!==null){t.blockedOn=e,Co(t.priority,function(){gd(a)});return}}else if(e===31){if(e=G(a),e!==null){t.blockedOn=e,Co(t.priority,function(){gd(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=so(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ru=l,a.target.dispatchEvent(l),ru=null}else return e=Za(a),e!==null&&pd(e),t.blockedOn=a,!1;e.shift()}return!0}function yd(t,e,a){Yi(t)&&a.delete(e)}function sg(){fo=!1,ha!==null&&Yi(ha)&&(ha=null),ba!==null&&Yi(ba)&&(ba=null),ya!==null&&Yi(ya)&&(ya=null),vn.forEach(yd),xn.forEach(yd)}function Xi(t,e){t.blockedOn===e&&(t.blockedOn=null,fo||(fo=!0,b.unstable_scheduleCallback(b.unstable_NormalPriority,sg)))}var Qi=null;function vd(t){Qi!==t&&(Qi=t,b.unstable_scheduleCallback(b.unstable_NormalPriority,function(){Qi===t&&(Qi=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(ro(l||a)===null)continue;break}var i=Za(a);i!==null&&(t.splice(e,3),e-=3,sc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function El(t){function e(s){return Xi(s,t)}ha!==null&&Xi(ha,t),ba!==null&&Xi(ba,t),ya!==null&&Xi(ya,t),vn.forEach(e),xn.forEach(e);for(var a=0;a<va.length;a++){var l=va[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<va.length&&(a=va[0],a.blockedOn===null);)bd(a),a.blockedOn===null&&va.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Xt]||null;if(typeof i=="function")u||vd(a);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Xt]||null)c=u.formAction;else if(ro(n)!==null)continue}else c=u.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),vd(a)}}}function xd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function po(t){this._internalRoot=t}Vi.prototype.render=po.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(p(409));var a=e.current,l=ie();fd(a,l,t,e,null,null)},Vi.prototype.unmount=po.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fd(t.current,2,null,t,null,null),Ai(),e[Va]=null}};function Vi(t){this._internalRoot=t}Vi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Do();t={blockedOn:null,target:t,priority:e};for(var a=0;a<va.length&&e!==0&&e<va[a].priority;a++);va.splice(a,0,t),a===0&&bd(t)}};var Sd=j.version;if(Sd!=="19.2.1")throw Error(p(527,Sd,"19.2.1"));M.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=V(e),t=t!==null?xt(t):null,t=t===null?null:t.stateNode,t};var rg={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{Dl=Li.inject(rg),Ft=Li}catch{}}return zn.createRoot=function(t,e){if(!T(t))throw Error(p(299));var a=!1,l="",n=Er,i=Mr,u=Dr;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=sd(t,1,!1,null,null,a,l,null,n,i,u,xd),t[Va]=e.current,Kc(t),new po(e)},zn.hydrateRoot=function(t,e,a){if(!T(t))throw Error(p(299));var l=!1,n="",i=Er,u=Mr,c=Dr,s=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),e=sd(t,1,!0,e,a??null,l,n,s,i,u,c,xd),e.context=rd(null),a=e.current,l=ie(),l=au(l),n=na(l),n.callback=null,ia(a,n,l),a=l,e.current.lanes=a,Ol(e,a),Me(e),t[Va]=e.current,Kc(t),new Vi(e)},zn.version="19.2.1",zn}var jd;function vg(){if(jd)return mo.exports;jd=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(j){console.error(j)}}return b(),mo.exports=yg(),mo.exports}var xg=vg();const _t={bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgTertiary:"#111111",bgCard:"rgba(255, 255, 255, 0.02)",textPrimary:"#f5f5f7",textSecondary:"#a1a1a6",textTertiary:"#8e8e93",accent:"#2A9D8F",accentHover:"#3BB4A5",accentSubtle:"rgba(42, 157, 143, 0.15)",blue:"#4361A5",lightBlue:"#7BA7D9",cyan:"#3BB4B1",border:"rgba(255, 255, 255, 0.08)",borderHover:"rgba(255, 255, 255, 0.15)",gradient:"linear-gradient(135deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientHorizontal:"linear-gradient(90deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)"},qt={bgPrimary:"#ffffff",bgSecondary:"#f5f5f7",bgTertiary:"#e8e8ed",bgCard:"rgba(0, 0, 0, 0.02)",textPrimary:"#1d1d1f",textSecondary:"#515154",textTertiary:"#6e6e73",accent:"#238076",accentHover:"#1a6b63",accentSubtle:"rgba(42, 157, 143, 0.12)",blue:"#3a5491",lightBlue:"#5a8cc7",cyan:"#2f9d9a",border:"rgba(0, 0, 0, 0.08)",borderHover:"rgba(0, 0, 0, 0.15)",gradient:"linear-gradient(135deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientHorizontal:"linear-gradient(90deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)"},A={typography:{fontWeight:{regular:400,medium:500,semibold:600,bold:700}},breakpoints:{mobile:"640px",tablet:"1024px",desktop:"1280px"},borderRadius:{full:"9999px"},zIndex:{sticky:100},maxWidth:{wide:"1200px",full:"1440px"}},Sg=mg`
  /* CSS Variables for dynamic theming */
  :root {
    /* Dark mode (default) */
    --bg-primary: ${_t.bgPrimary};
    --bg-secondary: ${_t.bgSecondary};
    --bg-tertiary: ${_t.bgTertiary};
    --bg-card: ${_t.bgCard};
    --text-primary: ${_t.textPrimary};
    --text-secondary: ${_t.textSecondary};
    --text-tertiary: ${_t.textTertiary};
    --accent: ${_t.accent};
    --accent-hover: ${_t.accentHover};
    --accent-subtle: ${_t.accentSubtle};
    --blue: ${_t.blue};
    --cyan: ${_t.cyan};
    --light-blue: ${_t.lightBlue};
    --border: ${_t.border};
    --border-hover: ${_t.borderHover};
    --gradient: ${_t.gradient};
    --gradient-horizontal: ${_t.gradientHorizontal};
    
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
    --bg-primary: ${qt.bgPrimary};
    --bg-secondary: ${qt.bgSecondary};
    --bg-tertiary: ${qt.bgTertiary};
    --bg-card: ${qt.bgCard};
    --text-primary: ${qt.textPrimary};
    --text-secondary: ${qt.textSecondary};
    --text-tertiary: ${qt.textTertiary};
    --accent: ${qt.accent};
    --accent-hover: ${qt.accentHover};
    --accent-subtle: ${qt.accentSubtle};
    --blue: ${qt.blue};
    --cyan: ${qt.cyan};
    --light-blue: ${qt.lightBlue};
    --border: ${qt.border};
    --border-hover: ${qt.borderHover};
    --gradient: ${qt.gradient};
    --gradient-horizontal: ${qt.gradientHorizontal};
    
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
    /* Prevent browser back/forward gesture on horizontal swipe */
    overscroll-behavior-x: none;
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
    /* Prevent browser back/forward gesture on horizontal swipe */
    overscroll-behavior-x: none;
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

  /* Scroll margin for fixed navigation */
  section[id] {
    scroll-margin-top: 100px;
  }
  
  /* Home section needs different offset */
  #home {
    scroll-margin-top: 0;
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
`,_d=Y.createContext(void 0),qd="portfolio-theme-mode",zg=()=>{if(typeof window<"u"){const b=localStorage.getItem(qd);if(b==="dark"||b==="light")return b}return"dark"},wg=({children:b})=>{const[j,N]=Y.useState(zg);Y.useEffect(()=>{document.documentElement.setAttribute("data-theme",j),localStorage.setItem(qd,j)},[j]);const p=()=>{N(T=>T==="dark"?"light":"dark")};return o.jsx(_d.Provider,{value:{mode:j,toggleTheme:p,isDark:j==="dark"},children:b})},Ag=()=>{const b=Y.useContext(_d);if(!b)throw new Error("useTheme must be used within a ThemeProvider");return b},kd=kt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Tg=d.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${A.zIndex.sticky};
  max-width: calc(100vw - 48px);
  
  @media (max-width: ${A.breakpoints.tablet}) {
    top: auto;
    bottom: 24px;
    max-width: calc(100vw - 48px);
  }
  
  @media (max-width: 480px) {
    bottom: 16px;
    max-width: calc(100vw - 32px);
  }
`,jg=d(v.nav)`
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
  
  @media (max-width: ${A.breakpoints.tablet}) {
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
`,Eg=d(v.a)`
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
    animation: ${kd} 1.5s ease infinite;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  @media (max-width: ${A.breakpoints.tablet}) {
    width: 38px;
    height: 38px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;
  }
`,Mg=d.img`
  height: 28px;
  width: auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${A.breakpoints.tablet}) {
    height: 24px;
  }
  
  @media (max-width: 480px) {
    height: 20px;
  }
`,Dg=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
  
  @media (max-width: ${A.breakpoints.tablet}) {
    gap: 1px;
  }
  
  @media (max-width: 480px) {
    gap: 0;
  }
`,Cg=d(v.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  font-size: 13px;
  font-weight: ${A.typography.fontWeight.medium};
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 14px;
  transition: color 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  
  ${({$isActive:b})=>b&&vo`
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
  
  @media (max-width: ${A.breakpoints.tablet}) {
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
`,Og=d(v.div)`
  position: absolute;
  inset: 2px;
  border-radius: 12px;
  z-index: -1;
  background: rgba(42, 157, 143, 0.15);
  box-shadow: 0 0 12px -4px rgba(42, 157, 143, 0.3);
  
  @media (max-width: ${A.breakpoints.tablet}) {
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    border-radius: 6px;
  }
`,Hg=d(v.button)`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  overflow: hidden;
  flex-shrink: 0;
  
  /* Glass layer - matches LogoContainer */
  background: linear-gradient(
    135deg,
    rgba(42, 157, 143, 0.15) 0%,
    rgba(67, 97, 165, 0.1) 100%
  );
  
  /* Shimmer effect on hover - matches LogoContainer */
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
    animation: ${kd} 1.5s ease infinite;
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
  
  @media (max-width: ${A.breakpoints.tablet}) {
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
`,Ed=[{label:"About",href:"#about"},{label:"Skills",href:"#technologyproficiency"},{label:"Experience",href:"#professionalexperience"},{label:"Projects",href:"#mostproudof"},{label:"Contact",href:"#contact"}],Ug=()=>{const[b,j]=Y.useState(""),{isDark:N,toggleTheme:p}=Ag();Y.useEffect(()=>{const E=()=>{const G=Ed.map(V=>V.href.replace("#",""));if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-100){j(G[G.length-1]);return}for(const V of[...G].reverse()){const xt=document.getElementById(V);if(xt&&xt.getBoundingClientRect().top<=150){j(V);return}}j("")};return window.addEventListener("scroll",E,{passive:!0}),()=>window.removeEventListener("scroll",E)},[]);const T=E=>{const G=E.currentTarget.getBoundingClientRect(),q=(E.clientX-G.left)/G.width*100,V=(E.clientY-G.top)/G.height*100;E.currentTarget.style.setProperty("--mouse-x",`${q}%`),E.currentTarget.style.setProperty("--mouse-y",`${V}%`)},H=(E,G)=>{E.preventDefault();const q=document.getElementById(G);q&&q.scrollIntoView({behavior:"smooth",block:"start"})};return o.jsx(Tg,{children:o.jsxs(jg,{"aria-label":"Main navigation",initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:[.25,.1,.25,1],delay:.2},children:[o.jsx(Eg,{href:"#home",onClick:E=>H(E,"home"),whileHover:{scale:1.05},whileTap:{scale:.95},children:o.jsxs("picture",{children:[o.jsx("source",{srcSet:"/images/logo-100.webp",type:"image/webp"}),o.jsx(Mg,{src:"/images/logo-optimized.png",alt:"PN",width:28,height:28,loading:"eager",decoding:"async"})]})}),o.jsx(Dg,{children:Ed.map(E=>{const G=b===E.href.replace("#","");return o.jsxs(Cg,{href:E.href,$isActive:G,"aria-current":G?"page":void 0,onClick:q=>H(q,E.href.replace("#","")),onMouseMove:T,whileHover:{scale:1.02},whileTap:{scale:.98},children:[o.jsx(wn,{children:G&&o.jsx(Og,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15,ease:"easeOut"}},E.label)}),o.jsx("span",{style:{position:"relative",zIndex:1},children:E.label})]},E.label)})}),o.jsx(Hg,{onClick:p,whileHover:{scale:1.05},whileTap:{scale:.95},title:N?"Switch to light mode":"Switch to dark mode","aria-label":N?"Switch to light mode":"Switch to dark mode",role:"button",children:o.jsx(wn,{mode:"wait",children:N?o.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.3},children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:"sunGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[o.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),o.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),o.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),o.jsx("circle",{cx:"12",cy:"12",r:"5",stroke:"url(#sunGradient)"}),o.jsx("path",{stroke:"url(#sunGradient)",d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]},"sun"):o.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.3},children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:"moonGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[o.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),o.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),o.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),o.jsx("path",{stroke:"url(#moonGradient)",d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})]},"moon")})})]})})},Bg="2.0.1",Gd=kt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Ng=kt`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`,_g=d(v.footer)`
  padding: 48px 24px;
  padding-bottom: 100px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 56px 80px;
    padding-bottom: 56px;
  }
`,qg=d.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 1px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${Gd} 3s ease infinite;
  opacity: 0.6;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    width: 140px;
  }
`,kg=d(v.div)`
  max-width: ${A.maxWidth.wide};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Gg=d(v.p)`
  font-size: 13px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
  letter-spacing: 0.01em;
  line-height: 1.6;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 14px;
  }
`,Rg=d(v.span)`
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
`,Yg=d.span`
  color: #ef4444;
  font-size: 13px;
  display: inline-block;
  animation: ${Ng} 1.8s ease-in-out infinite;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 14px;
  }
`,Xg=d.span`
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Gd} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${A.typography.fontWeight.semibold};
`,Qg=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    margin-top: 24px;
  }
`,Md=d.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,Vg=d(v.span)`
  font-size: 11px;
  font-weight: ${A.typography.fontWeight.medium};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 12px;
  border: 1px solid var(--border);
  border-radius: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 11px;
  }
`,Lg=()=>o.jsxs(_g,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:[o.jsx(qg,{}),o.jsxs(kg,{children:[o.jsxs(Gg,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:["Designed & Built With",o.jsx(Rg,{whileHover:{scale:1.2},transition:{type:"spring",stiffness:400,damping:15},children:o.jsx(Yg,{children:"♥"})}),"By ",o.jsx(Xg,{children:"Pranshu"})," • © 2025"]}),o.jsxs(Qg,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2,duration:.5},children:[o.jsx(Md,{}),o.jsxs(Vg,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:400,damping:20},children:["v",Bg]}),o.jsx(Md,{})]})]})]}),Zg=kt`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`,Kg=kt`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`,Jg=d(v.div)`
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
`,$g=d(v.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(42, 157, 143, 0.08) 0%,
    rgba(67, 97, 165, 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
`,Wg=d(v.div)`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,Fg=d(v.div)`
  position: absolute;
  width: ${({$size:b})=>b}px;
  height: ${({$size:b})=>b}px;
  border-radius: 50%;
  background: ${({$color:b})=>b};
  filter: blur(1px);
`,Ig=d(v.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,Pg=d(v.div)`
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    width: 180px;
    height: 180px;
  }
`,tm=d(v.div)`
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
`,em=d(v.div)`
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
`,yo=d(v.div)`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px solid rgba(42, 157, 143, 0.3);
  animation: ${Kg} 2s ease-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`,am=d(v.img)`
  width: 90px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 25px rgba(42, 157, 143, 0.5));
  
  @media (min-width: ${A.breakpoints.tablet}) {
    width: 110px;
  }
`,lm=d(v.div)`
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
    animation: ${Zg} 2s ease-in-out infinite;
  }
`,nm={initial:{opacity:1},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2,ease:"easeOut"}}},im={initial:{opacity:0,scale:1.5},animate:{opacity:1,scale:1,transition:{duration:1.5}},exit:{opacity:0,scale:.95,transition:{duration:.2}}},um={initial:{},animate:{},exit:{scale:.9,opacity:0,transition:{duration:.2,ease:"easeOut"}}},cm={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},om={initial:{opacity:0,scale:0,rotate:-180},animate:{opacity:1,scale:1,rotate:0,transition:{type:"spring",stiffness:100,damping:15,delay:.2}}},sm={initial:{opacity:0,scale:.3,rotateY:-90,filter:"blur(10px)"},animate:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:12,delay:.4}}},rm=({onComplete:b})=>{const[j,N]=Y.useState("animate"),p=Array.from({length:20},(T,H)=>({id:H,x:Math.random()*100,y:Math.random()*100,size:Math.random()*4+2,color:H%3===0?"rgba(42, 157, 143, 0.4)":H%3===1?"rgba(59, 180, 177, 0.3)":"rgba(67, 97, 165, 0.3)",duration:Math.random()*3+2,delay:Math.random()*2}));return Y.useEffect(()=>{const T=setTimeout(()=>{N("exit")},2200);return()=>clearTimeout(T)},[]),Y.useEffect(()=>{if(j==="exit"){const T=setTimeout(()=>{b()},200);return()=>clearTimeout(T)}},[j,b]),o.jsxs(Jg,{variants:nm,initial:"initial",animate:j,children:[o.jsx($g,{variants:im,initial:"initial",animate:j}),o.jsx(Wg,{initial:{opacity:1},animate:{opacity:j==="exit"?0:1},transition:{duration:.2},children:p.map(T=>o.jsx(Fg,{$size:T.size,$color:T.color,style:{left:`${T.x}%`,top:`${T.y}%`},initial:{opacity:0,scale:0},animate:{opacity:[0,.8,0],scale:[0,1,0],y:[0,-100]},transition:{duration:T.duration,delay:T.delay,repeat:1/0,repeatDelay:Math.random()*2}},T.id))}),o.jsx(Ig,{variants:um,initial:"initial",animate:j,children:o.jsxs(Pg,{children:[o.jsx(tm,{variants:cm,initial:"initial",animate:"animate"}),o.jsx(yo,{}),o.jsx(yo,{}),o.jsx(yo,{}),o.jsx(em,{variants:om,initial:"initial",animate:"animate"}),o.jsxs("picture",{children:[o.jsx("source",{srcSet:"/images/logo-optimized.webp",type:"image/webp"}),o.jsx(am,{src:"/images/logo-optimized.png",alt:"PN",width:80,height:80,loading:"eager",decoding:"async",variants:sm,initial:"initial",animate:"animate"})]}),o.jsx(lm,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:.5}})]})})]})},fm=d.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.4;
  
  @media (max-width: ${A.breakpoints.tablet}) {
    display: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Dd=[{r:42,g:157,b:143},{r:59,g:180,b:177},{r:67,g:97,b:165},{r:123,g:167,b:217}],dm=()=>{const b=Y.useRef(null),j=Y.useRef([]),N=Y.useRef(0),p=Y.useRef({x:window.innerWidth/2,y:window.innerHeight/2});return Y.useEffect(()=>{const T=b.current;if(!T)return;const H=T.getContext("2d");if(!H)return;const E=()=>{const D=window.devicePixelRatio||1;T.width=window.innerWidth*D,T.height=window.innerHeight*D,T.style.width=`${window.innerWidth}px`,T.style.height=`${window.innerHeight}px`,H.scale(D,D)};E(),window.addEventListener("resize",E);const G=4;j.current=[];for(let D=0;D<G;D++)j.current.push({x:window.innerWidth/2,y:window.innerHeight/2,size:60+D*20,color:Dd[D%Dd.length],speed:.1-D*.015,offset:D*.4});let q=0;const V=()=>{q+=.016,H.clearRect(0,0,T.width,T.height);const D=j.current,J=p.current;for(let Yt=D.length-1;Yt>=0;Yt--){const I=D[Yt],Ct=Math.sin(q*1.5+I.offset*4)*15,ft=Math.cos(q*1.5+I.offset*4)*15;I.x+=(J.x+Ct-I.x)*I.speed,I.y+=(J.y+ft-I.y)*I.speed;const $=I.size+Math.sin(q*1.2+I.offset*2)*8,bt=H.createRadialGradient(I.x,I.y,0,I.x,I.y,$),{r:pt,g:jt,b:$t}=I.color;bt.addColorStop(0,`rgba(${pt}, ${jt}, ${$t}, 0.25)`),bt.addColorStop(.4,`rgba(${pt}, ${jt}, ${$t}, 0.1)`),bt.addColorStop(.7,`rgba(${pt}, ${jt}, ${$t}, 0.03)`),bt.addColorStop(1,`rgba(${pt}, ${jt}, ${$t}, 0)`),H.beginPath(),H.arc(I.x,I.y,$,0,Math.PI*2),H.fillStyle=bt,H.fill()}N.current=requestAnimationFrame(V)},xt=D=>{p.current={x:D.clientX,y:D.clientY}};return window.addEventListener("mousemove",xt),N.current=requestAnimationFrame(V),()=>{window.removeEventListener("resize",E),window.removeEventListener("mousemove",xt),cancelAnimationFrame(N.current)}},[]),o.jsx(fm,{ref:b})},pm=kt`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,gm=kt`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(3deg);
  }
`,mm=kt`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`,hm=kt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,bm=d.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 24px 40px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  overflow: hidden;
  position: relative;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px 60px;
  }
  
  @media (min-width: ${A.breakpoints.desktop}) {
    padding: 100px 48px 60px;
  }
`,ym=d(v.div)`
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
`,vm=d.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,xm=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    grid-template-columns: 1fr 400px;
    gap: 64px;
  }
  
  @media (min-width: ${A.breakpoints.desktop}) {
    grid-template-columns: 1fr 480px;
    gap: 80px;
  }
`,Sm=d.div`
  perspective: 1000px;
`,zm=d(v.div)`
  display: flex;
  justify-content: center;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`,wm=d(v.div)`
  position: relative;
  width: 280px;
  height: 280px;
  
  @media (min-width: ${A.breakpoints.mobile}) {
    width: 340px;
    height: 340px;
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    width: 380px;
    height: 380px;
  }
  
  @media (min-width: ${A.breakpoints.desktop}) {
    width: 440px;
    height: 440px;
  }
`,Am=d(v.div)`
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
`,Tm=d.picture`
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
`,jm=d.div`
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
    animation: ${pm} 6s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: var(--bg-primary);
    border-radius: 24px;
    transition: background-color 0.4s ease;
  }
`,Zi=d(v.div)`
  position: absolute;
  border-radius: 16px;
  z-index: -2;
  animation: ${gm} 5s ease-in-out infinite;
  will-change: transform;
  
  ${({$position:b})=>{switch(b){case"top":return`
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
  
  @media (max-width: ${A.breakpoints.tablet}) {
    display: none;
  }
`,Em=d(v.div)`
  position: absolute;
  inset: -60px;
  background: radial-gradient(
    ellipse at center,
    rgba(42, 157, 143, 0.2) 0%,
    rgba(67, 97, 165, 0.12) 35%,
    transparent 65%
  );
  z-index: -3;
  animation: ${mm} 3s ease-in-out infinite;
  filter: blur(30px);
  will-change: transform, opacity;
`,Mm=d(v.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;
`,Dm=d(v.span)`
  width: 40px;
  height: 2px;
  background: var(--gradient-horizontal);
  border-radius: 1px;
  transform-origin: left;
`,Cm=d(v.span)`
  font-size: 13px;
  font-weight: ${A.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${hm} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,Om=d(v.div)`
  overflow: hidden;
  margin-bottom: 24px;
`,Hm=d(v.h1)`
  font-size: clamp(52px, 9vw, 96px);
  font-weight: ${A.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.04em;
  line-height: 0.92;
  transition: color 0.4s ease;
  will-change: transform;
`,Um=d(v.span)`
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
`,Bm=d(v.p)`
  font-size: clamp(17px, 2.2vw, 22px);
  font-weight: ${A.typography.fontWeight.regular};
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 20px;
  transition: color 0.4s ease;
`,Nm=d(v.p)`
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--text-tertiary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color 0.4s ease;
  max-width: 680px;
`,_m=d(v.div)`
  display: flex;
  gap: 14px;
  flex-wrap: nowrap;
  margin-bottom: 56px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`,qm=d(v.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--text-primary);
  color: var(--bg-primary);
  font-size: 15px;
  font-weight: ${A.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: ${A.borderRadius.full};
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
`,km=d(v.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 26px; /* 2px less than primary to account for 2px border */
  background: transparent;
  color: var(--text-primary);
  font-size: 15px;
  font-weight: ${A.typography.fontWeight.medium};
  text-decoration: none;
  border: 2px solid var(--text-secondary);
  border-radius: ${A.borderRadius.full};
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
`,Gm=d(v.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding-top: 36px;
  border-top: 1px solid var(--border);
  transition: border-color 0.4s ease;
  
  @media (min-width: ${A.breakpoints.mobile}) {
    gap: 24px;
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    gap: 32px;
  }
`,Rm=d(v.div)`
  text-align: center;
  
  @media (min-width: ${A.breakpoints.mobile}) {
    text-align: left;
  }
`,Ym=d(v.span)`
  display: block;
  font-size: clamp(26px, 5.5vw, 44px);
  font-weight: ${A.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 8px;
  transition: color 0.4s ease;
  
  @media (min-width: ${A.breakpoints.mobile}) {
    font-size: clamp(30px, 4.5vw, 44px);
  }
`,Xm=d.span`
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-transform: uppercase;
  transition: color 0.4s ease;
  
  @media (min-width: ${A.breakpoints.mobile}) {
    font-size: 12px;
  }
`,Qm={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},Ki={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,mass:1}}},Vm={hidden:{opacity:0,y:80,rotateX:-20},visible:{opacity:1,y:0,rotateX:0,transition:{type:"spring",stiffness:80,damping:20,mass:1.2}}},Lm={hidden:{opacity:0,scale:.85,rotateY:-15,filter:"blur(15px)"},visible:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:60,damping:20,mass:1.5,delay:.3}}},Zm={hidden:{scaleX:0},visible:{scaleX:1,transition:{type:"spring",stiffness:100,damping:20,delay:.1}}},Km={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.6}}},Jm={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:150,damping:20}}},$m=({data:b})=>{const j=Y.useRef(null),{scrollYProgress:N}=dg({target:j,offset:["start start","end start"]}),p=go(N,[0,1],["0%","30%"]),T=go(N,[0,.5],[1,.9]),H=go(N,[0,.5],[1,.6]),E=zd(p,{stiffness:100,damping:30}),G=zd(T,{stiffness:100,damping:30}),q=[{value:"9+",label:"Years"},{value:"39+",label:"Engineers Led"},{value:"$2M+",label:"Savings"},{value:"15+",label:"Products"}];return o.jsxs(bm,{id:"home",ref:j,children:[o.jsx(ym,{style:{y:E}}),o.jsx(vm,{children:o.jsxs(xm,{children:[o.jsx(Sm,{children:o.jsxs(v.div,{variants:Qm,initial:"hidden",animate:"visible",children:[o.jsxs(Mm,{variants:Ki,children:[o.jsx(Dm,{variants:Zm}),o.jsx(Cm,{children:"Engineering Leader & Architect"})]}),o.jsx(Om,{children:o.jsxs(Hm,{variants:Vm,children:[o.jsx(Um,{children:b.name.split(" ")[0]}),o.jsx("br",{}),b.name.split(" ").slice(1).join(" ")]})}),o.jsx(Bm,{variants:Ki,children:b.designation}),o.jsx(Nm,{variants:Ki,children:b.headline}),o.jsxs(_m,{variants:Ki,children:[o.jsxs(qm,{href:"#contact",onClick:V=>{V.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[o.jsx("span",{children:"Get in Touch"}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),o.jsx(km,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:o.jsx("span",{children:"Download Resume"})})]}),o.jsx(Gm,{variants:Km,initial:"hidden",animate:"visible",children:q.map((V,xt)=>o.jsxs(Rm,{variants:Jm,children:[o.jsx(Ym,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:100,damping:15,delay:.7+xt*.1},children:V.value}),o.jsx(Xm,{children:V.label})]},xt))})]})}),o.jsx(zm,{variants:Lm,initial:"hidden",animate:"visible",style:{scale:G,opacity:H},children:o.jsxs(wm,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:200,damping:20},children:[o.jsx(Em,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:.5}}),o.jsx(Zi,{$position:"top",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.6}}),o.jsx(Zi,{$position:"bottom",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.6}}),o.jsx(Zi,{$position:"left",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.9,duration:.6}}),o.jsx(Zi,{$position:"right",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:1.1,duration:.6}}),o.jsx(jm,{}),o.jsx(Am,{whileHover:{scale:1.03},transition:{type:"spring",stiffness:300,damping:25},children:o.jsxs(Tm,{children:[o.jsx("source",{srcSet:"/images/profile.webp",type:"image/webp"}),o.jsx("img",{src:"/images/IMG_0832.PNG",alt:`${b.name} - Engineering Leader & Architect`,width:560,height:560,loading:"eager",decoding:"async",fetchPriority:"high"})]})})]})})]})})]})};d.div`
  width: 100%;
  max-width: ${({$wide:b})=>b?A.maxWidth.full:A.maxWidth.wide};
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${A.breakpoints.mobile}) {
    padding: 0 32px;
  }

  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 0 48px;
  }
`;const Rd=kt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Wm=d(v.div)`
  margin-bottom: 64px;
  position: relative;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    margin-bottom: 88px;
  }
`,Fm=d.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    gap: 32px;
  }
`,Im=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(42, 157, 143, 0.15) 0%,
    rgba(67, 97, 165, 0.1) 100%
  );
  border: 1px solid rgba(42, 157, 143, 0.2);
  flex-shrink: 0;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }
`,Pm=d.span`
  font-size: 14px;
  font-weight: ${A.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Rd} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-variant-numeric: tabular-nums;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 16px;
  }
`,th=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eh=d(v.span)`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-tertiary);
  font-weight: ${A.typography.fontWeight.medium};
  transition: color 0.4s ease;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 12px;
    letter-spacing: 0.18em;
  }
`,ah=d(v.h2)`
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: ${A.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.1;
  transition: color 0.4s ease;
  margin: 0;
`,lh=d(v.div)`
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 2px;
  width: 60px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${Rd} 3s ease infinite;
  border-radius: 1px;
  transform-origin: left;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    width: 80px;
    bottom: -24px;
  }
`,nh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},ih={hidden:{opacity:0,scale:.8,filter:"blur(4px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:200,damping:20}}},uh={hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:150,damping:20}}},ch={hidden:{opacity:0,y:20,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},oh={hidden:{scaleX:0,opacity:0},visible:{scaleX:1,opacity:1,transition:{duration:.6,ease:[.25,.1,.25,1],delay:.3}}},sh={About:"Who I Am",Skills:"Technical Expertise",Experience:"Career Journey",Projects:"Featured Work",Certifications:"Credentials",Testimonials:"What Others Say",Education:"Academic Background",Contact:"Get In Touch"},Sa=({number:b,title:j,inView:N=!0})=>{const p=sh[j]||"Section";return o.jsxs(Wm,{variants:nh,initial:"hidden",animate:N?"visible":"hidden",children:[o.jsxs(Fm,{children:[o.jsx(Im,{variants:ih,children:o.jsx(Pm,{children:b})}),o.jsxs(th,{children:[o.jsx(eh,{variants:uh,children:p}),o.jsx(ah,{variants:ch,children:j})]})]}),o.jsx(lh,{variants:oh})]})},rh=kt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,fh=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,dh=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,ph=d(v.div)`
  margin-bottom: 48px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    margin-bottom: 64px;
  }
`,gh=d(v.div)`
  position: relative;
  padding-left: 36px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding-left: 56px;
  }
`,mh=d(v.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient);
  background-size: 100% 200%;
  animation: ${rh} 3s ease infinite;
  border-radius: 2px;
  transform-origin: top;
`,hh=d(v.p)`
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: ${A.typography.fontWeight.regular};
  color: var(--text-primary);
  line-height: 1.6;
  letter-spacing: -0.01em;
  font-style: italic;
  transition: color 0.4s ease;
`,bh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 64px;
  }
`,Cd=d(v.div)``,Od=d(v.h3)`
  font-size: 13px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
  transition: color 0.4s ease, border-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 60px;
    height: 2px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`,Hd=d(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.85;
  transition: color 0.4s ease;
`,yh=d(v.div)`
  margin-bottom: 48px;
`,vh=d(v.h3)`
  font-size: 13px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  transition: color 0.4s ease;
`,xh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: ${A.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    transition: background-color 0.4s ease, border-color 0.4s ease;
  }
`,Sh=d(v.div)`
  background: var(--bg-primary);
  padding: 36px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, background-color 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-6px);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  @media (min-width: ${A.breakpoints.mobile}) {
    padding: 48px 36px;
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 56px 44px;
  }
`,zh=d(v.h4)`
  font-size: 19px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 18px;
  line-height: 1.35;
  transition: color 0.4s ease;
`,wh=d(v.p)`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color 0.4s ease;
`,Ah=d(v.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding-top: 56px;
  border-top: 1px solid var(--border);
  transition: border-color 0.4s ease;
  
  @media (min-width: ${A.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,Th=d(v.p)`
  font-size: 19px;
  color: var(--text-secondary);
  transition: color 0.4s ease;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 21px;
  }
`,jh=d(v.a)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: var(--text-primary);
  color: var(--bg-primary);
  font-size: 15px;
  font-weight: ${A.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: ${A.borderRadius.full};
  position: relative;
  overflow: hidden;
  will-change: transform;
  
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
    transition: transform 0.5s ease;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`,Eh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},Mh={hidden:{opacity:0,y:50,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:20,mass:1}}},Dh={hidden:{scaleY:0},visible:{scaleY:1,transition:{type:"spring",stiffness:100,damping:20,delay:.2}}},Ud={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:b=>({opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,delay:b*.15}})},Ch={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},Oh={hidden:{opacity:0,y:40,scale:.95,filter:"blur(6px)"},visible:{opacity:1,y:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},Hh=({data:b})=>{const j=Y.useRef(null),N=we(j,{once:!0,margin:"-100px"}),p=Y.useRef(null),T=we(p,{once:!0,margin:"-50px"}),H=Y.useRef(null),E=we(H,{once:!0,margin:"-50px"}),G=Y.useRef(null),q=we(G,{once:!0,margin:"-50px"}),V=b.content.slice(0,3).map(D=>D.replace(/^🔹\s*/,"").trim()),xt=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}];return o.jsx(fh,{id:"about",ref:j,children:o.jsxs(dh,{children:[o.jsx(Sa,{number:"01",title:"About",inView:N}),o.jsx(ph,{ref:p,children:o.jsxs(gh,{initial:"hidden",animate:T?"visible":"hidden",variants:Eh,children:[o.jsx(mh,{variants:Dh}),o.jsx(hh,{variants:Mh,children:V[0]})]})}),o.jsxs(bh,{ref:H,children:[o.jsxs(Cd,{variants:Ud,custom:0,initial:"hidden",animate:E?"visible":"hidden",children:[o.jsx(Od,{initial:{opacity:0,x:-20},animate:E?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Transformation"}),o.jsx(Hd,{initial:{opacity:0,y:20},animate:E?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:V[1]})]}),o.jsxs(Cd,{variants:Ud,custom:1,initial:"hidden",animate:E?"visible":"hidden",children:[o.jsx(Od,{initial:{opacity:0,x:-20},animate:E?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.15},children:"Philosophy"}),o.jsx(Hd,{initial:{opacity:0,y:20},animate:E?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.25},children:V[2]})]})]}),o.jsxs(yh,{ref:G,children:[o.jsx(vh,{initial:{opacity:0,y:20},animate:q?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Key Highlights"}),o.jsx(xh,{variants:Ch,initial:"hidden",animate:q?"visible":"hidden",children:xt.map((D,J)=>o.jsxs(Sh,{variants:Oh,children:[o.jsx(zh,{children:D.title}),o.jsx(wh,{children:D.text})]},J))})]}),o.jsxs(Ah,{initial:{opacity:0,y:30},animate:N?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[o.jsx(Th,{children:"Want to know more?"}),o.jsxs(jh,{href:b.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[o.jsx("span",{children:b.buttonProps.name}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]})})},Uh=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Bh=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Nh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  
  @media (min-width: ${A.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 72px;
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 56px 88px;
  }
`,_h=d(v.div)``,qh=d(v.h3)`
  font-size: 13px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 28px;
  position: relative;
  transition: color 0.4s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`,kh=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Gh=d(v.li)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Rh=d(v.div)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,Yh=d(v.span)`
  font-size: 15px;
  color: var(--text-primary);
  transition: color 0.4s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
`,Xh=d(v.span)`
  font-size: 13px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  font-weight: ${A.typography.fontWeight.medium};
  transition: color 0.4s ease;
`,Qh=d(v.div)`
  width: 100%;
  height: 3px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
  transition: background-color 0.4s ease;
  position: relative;
`,Vh=d(v.div)`
  height: 100%;
  background: var(--gradient-horizontal);
  border-radius: 2px;
  transform-origin: left;
`,Lh=({data:b})=>{const j=Y.useRef(null),N=we(j,{once:!0,margin:"-100px"});return o.jsx(Uh,{id:"technologyproficiency",ref:j,children:o.jsxs(Bh,{children:[o.jsx(Sa,{number:"02",title:"Skills",inView:N}),o.jsx(Nh,{children:b.skills.map(p=>o.jsxs(_h,{initial:{opacity:0,y:30,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20},children:[o.jsx(qh,{children:p.category}),o.jsx(kh,{children:p.skills.map((T,H)=>o.jsxs(Gh,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-30px"},transition:{type:"spring",stiffness:100,damping:20,delay:H*.05},whileHover:{x:8,transition:{type:"spring",stiffness:400,damping:25}},children:[o.jsxs(Rh,{children:[o.jsx(Yh,{children:T.name}),o.jsxs(Xh,{children:[T.percentage,"%"]})]}),o.jsx(Qh,{children:o.jsx(Vh,{style:{width:`${T.percentage}%`},initial:{scaleX:0},whileInView:{scaleX:1},viewport:{once:!0,amount:.8},transition:{duration:.8,ease:[.4,0,.2,1],delay:.2+H*.08}})})]},T.name))})]},p.category))})]})})},Zh=kt`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(42, 157, 143, 0);
  }
  50% {
    box-shadow: 0 0 20px 5px rgba(42, 157, 143, 0.15);
  }
`,Kh=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Jh=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,$h=d(v.div)``,Wh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: border-color 0.4s ease;
  position: relative;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    grid-template-columns: 200px 1fr;
    gap: 56px;
    padding: 48px 0;
  }
  
  &:first-child {
    padding-top: 0;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover::before {
    transform: scaleY(1);
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    &::before {
      left: -48px;
    }
  }
`,Fh=d(v.div)``,Ih=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color 0.4s ease;
`,Ph=d(v.div)``,t1=d(v.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 10px;
`,e1=d(v.h3)`
  font-size: 22px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.01em;
  transition: color 0.4s ease;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 24px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--gradient);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    }
    
    &:hover {
      color: var(--accent);
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
`,a1=d(v.div)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({$isOpen:b})=>b?"var(--accent)":"transparent"};
  border: 1.5px solid ${({$isOpen:b})=>b?"var(--accent)":"var(--border)"};
  flex-shrink: 0;
  will-change: transform, background, border-color;
  
  ${({$isOpen:b})=>b&&vo`
    animation: ${Zh} 2s ease-in-out infinite;
  `}
  
  svg {
    width: 14px;
    height: 14px;
    color: ${({$isOpen:b})=>b?"var(--bg-primary)":"var(--text-secondary)"};
    will-change: transform;
  }
`,l1=d(v.p)`
  font-size: 16px;
  color: var(--accent);
  font-weight: ${A.typography.fontWeight.medium};
  margin-bottom: 6px;
  transition: color 0.4s ease;
`,n1=d(v.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  flex-wrap: wrap;
`,i1=d.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
  font-weight: ${A.typography.fontWeight.medium};
`,u1=d.span`
  font-size: 14px;
  color: var(--text-secondary);
  font-style: italic;
  transition: color 0.4s ease;
`,c1=d(v.p)`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color 0.4s ease;
  
  a {
    color: var(--blue);
    text-decoration: none;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--blue);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
`,o1=d(v.div)`
  overflow: hidden;
  will-change: height, opacity;
`,s1=d(v.div)`
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  will-change: transform, opacity;
  transition: border-color 0.4s ease;
`,r1=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,f1=d(v.li)`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  padding-left: 20px;
  position: relative;
  will-change: transform, opacity;
  transition: color 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 6px;
    height: 6px;
    background: var(--accent);
    border-radius: 50%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  &:hover::before {
    transform: scale(1.3);
    box-shadow: 0 0 10px var(--accent);
  }
`,d1={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35,mass:1},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},p1={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.08}}},g1={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.12}}},m1={collapsed:{opacity:0,x:-15,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},h1=({data:b})=>{const[j,N]=Y.useState(new Set),p=Y.useRef(null),T=we(p,{once:!0,margin:"-100px"}),H=E=>{N(G=>{const q=new Set(G);return q.has(E)?q.delete(E):q.add(E),q})};return o.jsx(Kh,{id:"professionalexperience",ref:p,children:o.jsxs(Jh,{children:[o.jsx(Sa,{number:"03",title:"Experience",inView:T}),o.jsx($h,{children:b.timeline.map((E,G)=>{const q=j.has(G);return o.jsxs(Wh,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:.1},onClick:()=>H(G),whileHover:{x:8,transition:{type:"spring",stiffness:300,damping:25}},children:[o.jsx(Fh,{children:o.jsx(Ih,{children:E.date})}),o.jsxs(Ph,{children:[o.jsxs(t1,{children:[o.jsxs("div",{children:[o.jsx(e1,{children:o.jsx("a",{href:E.url,target:"_blank",rel:"noopener noreferrer",onClick:V=>V.stopPropagation(),children:E.title})}),o.jsx(l1,{children:E.subTitle}),E.previously&&o.jsxs(n1,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.1},children:[o.jsx(i1,{children:"Previously:"}),o.jsx(u1,{children:E.previously})]})]}),o.jsx(a1,{$isOpen:q,animate:{rotate:q?45:0,scale:q?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:o.jsx(v.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),o.jsx(c1,{dangerouslySetInnerHTML:{__html:E.descriptionSummary}}),o.jsx(wn,{initial:!1,children:q&&o.jsx(o1,{variants:d1,initial:"collapsed",animate:"expanded",exit:"collapsed",children:o.jsx(s1,{variants:p1,children:o.jsx(r1,{variants:g1,initial:"collapsed",animate:"expanded",exit:"collapsed",children:E.description.map((V,xt)=>o.jsx(f1,{variants:m1,children:V},xt))})})},"content")})]})]},G)})})]})})},Yd=kt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,b1=kt`
  0%, 100% {
    box-shadow: 0 0 20px rgba(42, 157, 143, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(42, 157, 143, 0.2);
  }
`,y1=d.section`
  padding: 64px 24px;
  overflow: hidden;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,v1=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,x1=d(v.div)`
  position: relative;
`,S1=d.div`
  position: relative;
  perspective: 1000px;
`,z1=d(v.article)`
  border-radius: 24px;
  will-change: transform, opacity;
  overflow: hidden;
  position: relative;
  animation: ${b1} 4s ease-in-out infinite;
  
  /* Glass morphism */
  background: var(--glass-bg);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  transition: background 0.4s ease;
  
  /* Border gradient */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1.5px;
    background: var(--gradient);
    background-size: 200% 200%;
    animation: ${Yd} 4s ease infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.6;
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    border-radius: 28px;
    
    &::before {
      border-radius: 28px;
    }
  }
`,w1=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 32px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      var(--glass-bg-hover),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 32px 40px;
  }
`,A1=d(v.h3)`
  font-size: 20px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.35;
  flex: 1;
  transition: color 0.4s ease;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 24px;
  }
`,T1=d(v.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid ${({$isExpanded:b})=>b?"var(--accent)":"var(--border)"};
  background: ${({$isExpanded:b})=>b?"var(--accent-subtle)":"transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  will-change: transform, background, border-color;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: var(--gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({$isExpanded:b})=>b?"var(--accent)":"var(--text-secondary)"};
    will-change: transform;
  }
`,j1=d(v.div)`
  overflow: hidden;
  will-change: height;
`,E1=d(v.div)`
  padding: 0 32px 32px;
  border-top: 1px solid var(--border);
  padding-top: 28px;
  transition: border-color 0.4s ease;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 0 40px 36px;
    padding-top: 32px;
  }
`,M1=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 36px;
  }
`,D1=d(v.li)`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  padding-left: 22px;
  position: relative;
  transition: color 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    background: var(--gradient);
    border-radius: 50%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  &:hover::before {
    transform: scale(1.3);
    box-shadow: 0 0 12px var(--accent);
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 16px;
  }
`,C1=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 48px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    gap: 36px;
    margin-top: 56px;
  }
`,Bd=d(v.button)`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--glass-bg);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }
  
  &:hover:not(:disabled)::before {
    opacity: 1;
  }
  
  &:hover:not(:disabled) {
    border-color: var(--text-secondary);
    color: var(--text-primary);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  svg {
    width: 22px;
    height: 22px;
    position: relative;
    z-index: 1;
  }
`,O1=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,H1=d(v.button)`
  width: ${({$isActive:b})=>b?"36px":"12px"};
  height: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: ${({$isActive:b})=>b?"var(--gradient)":"var(--border)"};
  background-size: 200% 200%;
  ${({$isActive:b})=>b&&vo`
    animation: ${Yd} 3s ease infinite;
  `}
  will-change: width, background;
  
  &:hover {
    background: ${({$isActive:b})=>b?"var(--gradient)":"var(--text-tertiary)"};
  }
`,U1={enter:b=>({x:b>0?80:-80,opacity:0,scale:.98}),center:{x:0,opacity:1,scale:1,transition:{type:"spring",stiffness:500,damping:35,mass:.8}},exit:b=>({x:b<0?80:-80,opacity:0,scale:.98,transition:{type:"spring",stiffness:500,damping:35,mass:.8}})},B1={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},N1={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.1}}},_1={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.15}}},q1={collapsed:{opacity:0,x:-20,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},k1=({data:b})=>{const[[j,N],p]=Y.useState([0,0]),[T,H]=Y.useState(!1),[E,G]=Y.useState(!1),q=Y.useRef(null),V=Y.useRef(null),xt=Y.useRef(0),D=we(q,{once:!0,margin:"-100px"}),J=Y.useCallback(ft=>{if(E)return;const $=j+ft;$>=0&&$<b.content.length&&(G(!0),p([$,ft]),H(!1),setTimeout(()=>G(!1),350))},[j,b.content.length,E]),Yt=Y.useCallback(ft=>{if(E||ft===j)return;const $=ft>j?1:-1;G(!0),p([ft,$]),H(!1),setTimeout(()=>G(!1),350)},[j,E]);Y.useEffect(()=>{const ft=V.current;if(!ft)return;const $=bt=>{const pt=Date.now();if(pt-xt.current<300)return;const jt=Math.abs(bt.deltaX)>Math.abs(bt.deltaY)?bt.deltaX:bt.deltaY;if(Math.abs(jt)>20){const ue=j<b.content.length-1,ye=j>0;(jt>0&&ue||jt<0&&ye)&&(bt.preventDefault(),bt.stopPropagation(),xt.current=pt,jt>0?J(1):J(-1))}};return ft.addEventListener("wheel",$,{passive:!1}),()=>ft.removeEventListener("wheel",$)},[j,b.content.length,J]);const I=Y.useCallback((ft,$)=>{if(E)return;const bt=30,pt=200;$.velocity.x>pt||$.offset.x>bt?j>0&&J(-1):($.velocity.x<-pt||$.offset.x<-bt)&&j<b.content.length-1&&J(1)},[j,b.content.length,E,J]),Ct=b.content[j];return o.jsx(y1,{id:"mostproudof",ref:q,children:o.jsxs(v1,{children:[o.jsx(Sa,{number:"04",title:"Projects",inView:D}),o.jsxs(x1,{initial:{opacity:0,y:40},animate:D?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:20,delay:.2},children:[o.jsx(S1,{ref:V,children:o.jsx(wn,{initial:!1,custom:N,mode:"wait",children:o.jsxs(z1,{custom:N,variants:U1,initial:"enter",animate:"center",exit:"exit",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.1,dragMomentum:!1,onDragEnd:I,transition:{x:{type:"spring",stiffness:500,damping:35,mass:.8},opacity:{duration:.2},scale:{type:"spring",stiffness:500,damping:35,mass:.8}},style:{cursor:"grab",touchAction:"pan-y"},whileDrag:{cursor:"grabbing",scale:1.01},children:[o.jsxs(w1,{$isExpanded:T,onClick:()=>H(!T),whileHover:{scale:1.01},transition:{type:"spring",stiffness:400,damping:25},children:[o.jsx(A1,{children:Ct.title}),o.jsx(T1,{$isExpanded:T,"aria-label":T?"Collapse project details":"Expand project details","aria-expanded":T,animate:{rotate:T?45:0,scale:T?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:o.jsx(v.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),o.jsx(wn,{initial:!1,children:T&&o.jsx(j1,{variants:B1,initial:"collapsed",animate:"expanded",exit:"collapsed",children:o.jsx(E1,{variants:N1,children:o.jsx(M1,{variants:_1,initial:"collapsed",animate:"expanded",exit:"collapsed",children:Ct.content.map((ft,$)=>o.jsx(D1,{variants:q1,children:ft},$))})})})})]},j)})}),o.jsxs(C1,{initial:{opacity:0,y:20},animate:D?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[o.jsx(Bd,{onClick:()=>J(-1),disabled:j===0,"aria-label":"Previous project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(O1,{role:"tablist","aria-label":"Project navigation",children:b.content.map((ft,$)=>o.jsx(H1,{$isActive:j===$,onClick:()=>Yt($),role:"tab","aria-selected":j===$,"aria-label":`Go to project ${$+1}: ${ft.title}`,whileHover:{scale:1.1},whileTap:{scale:.95},animate:{width:j===$?36:12},transition:{type:"spring",stiffness:400,damping:25}},$))}),o.jsx(Bd,{onClick:()=>J(1),disabled:j===b.content.length-1,"aria-label":"Next project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]})]})})},G1=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,R1=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Y1=d(v.div)`
  display: flex;
  flex-direction: column;
`,X1=d(v.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.4s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 36px 0;
  }
  
  &:first-child {
    padding-top: 0;
  }
  
  &:last-child {
    border-bottom: none;
    
    &::before {
      display: none;
    }
  }
`,Q1=d(v.div)`
  flex: 1;
`,V1=d(v.h3)`
  font-size: 18px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 6px;
  transition: color 0.4s ease;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 20px;
  }
`,L1=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
`,Z1=d(v.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: ${A.typography.fontWeight.medium};
  color: var(--blue);
  text-decoration: none;
  border: 1.5px solid var(--border);
  border-radius: ${A.borderRadius.full};
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--accent-subtle);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: var(--blue);
    text-decoration: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  span, svg {
    position: relative;
    z-index: 1;
  }
  
  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translate(2px, -2px);
  }
`,K1=({data:b})=>{const j=Y.useRef(null),N=we(j,{once:!0,margin:"-100px"}),p=T=>T.toLowerCase().includes("azure")||T.toLowerCase().includes("microsoft")?"Microsoft":T.toLowerCase().includes("aws")?"Amazon Web Services":"";return o.jsx(G1,{id:"certifications",ref:j,children:o.jsxs(R1,{children:[o.jsx(Sa,{number:"05",title:"Certifications",inView:N}),o.jsx(Y1,{children:b.certificateProps.certificateMetaData.map((T,H)=>o.jsxs(X1,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:H*.08},whileHover:{x:12,transition:{type:"spring",stiffness:400,damping:25}},children:[o.jsxs(Q1,{children:[o.jsx(V1,{children:T.title}),o.jsx(L1,{children:p(T.title)})]}),o.jsxs(Z1,{href:T.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[o.jsx("span",{children:"Verify"}),o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),o.jsx("polyline",{points:"15,3 21,3 21,9"}),o.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]},H))})]})})},J1=kt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,$1=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,W1=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,F1=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }
`,I1=d(v.blockquote)`
  padding: 44px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 24px;
  margin: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: var(--gradient);
    background-size: 200% 200%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 0.5;
    animation: ${J1} 3s ease infinite;
  }
  
  &:hover {
    border-color: transparent;
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 52px;
  }
`,P1=d(v.div)`
  font-size: 56px;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 24px;
  font-weight: bold;
`,tb=d(v.p)`
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 28px;
  font-style: italic;
  transition: color 0.4s ease;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 18px;
  }
`,eb=d(v.footer)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ab=d(v.cite)`
  font-size: 16px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  font-style: normal;
  transition: color 0.4s ease;
`,lb=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
`,nb=({data:b})=>{const j=Y.useRef(null),N=we(j,{once:!0,margin:"-100px"});return o.jsx($1,{id:"testimonials",ref:j,children:o.jsxs(W1,{children:[o.jsx(Sa,{number:"06",title:"Testimonials",inView:N}),o.jsx(F1,{children:b.quoteProps.quoteMetaData.map((p,T)=>o.jsxs(I1,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:T*.1},whileHover:{y:-10,scale:1.02,transition:{type:"spring",stiffness:300,damping:20}},children:[o.jsx(P1,{children:'"'}),o.jsx(tb,{children:p.quote}),o.jsxs(eb,{children:[o.jsx(ab,{children:p.givenBy}),o.jsx(lb,{children:p.subTitleGivenBy})]})]},T))})]})})},ib=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,ub=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,cb=d(v.div)`
  display: flex;
  flex-direction: column;
`,ob=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.4s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: var(--gradient);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    grid-template-columns: 200px 1fr;
    gap: 56px;
    
    &::before {
      left: 185px;
    }
  }
  
  &:first-child {
    padding-top: 0;
  }
  
  &:last-child {
    border-bottom: none;
  }
`,sb=d(v.span)`
  font-size: 15px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color 0.4s ease;
  font-weight: ${A.typography.fontWeight.medium};
`,rb=d(v.div)``,fb=d(v.h3)`
  font-size: 20px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
  transition: color 0.4s ease;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 22px;
  }
`,db=d(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  transition: color 0.4s ease;
`,pb=({data:b})=>{const j=Y.useRef(null),N=we(j,{once:!0,margin:"-100px"});return o.jsx(ib,{id:"educationalqualifications",ref:j,children:o.jsxs(ub,{children:[o.jsx(Sa,{number:"07",title:"Education",inView:N}),o.jsx(cb,{children:b.timeline.map((p,T)=>o.jsxs(ob,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:T*.1},whileHover:{x:16,transition:{type:"spring",stiffness:400,damping:25}},children:[o.jsx(sb,{children:p.date}),o.jsxs(rb,{children:[o.jsx(fb,{children:p.title}),o.jsx(db,{children:p.subTitle})]})]},T))})]})})},Xd=kt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,gb=kt`
  0%, 100% {
    box-shadow: 0 0 20px rgba(42, 157, 143, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(42, 157, 143, 0.2);
  }
`,mb=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,hb=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,bb=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 72px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`,yb=d(v.div)``,vb=d(v.h3)`
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: ${A.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  transition: color 0.4s ease;
`,xb=d(v.p)`
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color 0.4s ease;
`,Sb=d(v.a)`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-size: 19px;
  font-weight: ${A.typography.fontWeight.medium};
  text-decoration: none;
  
  span {
    background: var(--gradient);
    background-size: 200% 200%;
    animation: ${Xd} 4s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  svg {
    width: 22px;
    height: 22px;
    color: var(--accent);
    transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover svg {
    transform: translateX(8px);
  }
`,zb=d(v.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,wb=d(v.a)`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 20px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient);
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: var(--gradient);
    background-size: 200% 200%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    border-color: transparent;
    text-decoration: none;
  }
  
  &:hover::after {
    opacity: 0.8;
    animation: ${Xd} 3s ease infinite;
  }
`,Ab=d(v.div)`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-subtle);
  border-radius: 16px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  animation: ${gb} 4s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: var(--gradient);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.4;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: var(--cyan);
    position: relative;
    z-index: 1;
  }
`,Tb=d(v.div)`
  position: relative;
  z-index: 1;
`,jb=d(v.span)`
  display: block;
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  transition: color 0.4s ease;
`,Eb=d(v.span)`
  font-size: 17px;
  font-weight: ${A.typography.fontWeight.medium};
  color: var(--text-primary);
  transition: color 0.4s ease;
`,Nd={mail:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),o.jsx("path",{d:"M22 6L12 13 2 6"})]}),phone:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:o.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),linkedin:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),o.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),o.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),location:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]})},Mb=({data:b})=>{const j=Y.useRef(null),N=we(j,{once:!0,margin:"-100px"}),p=E=>Nd[E.toLowerCase()]||Nd.mail,T=E=>({mail:"Email",phone:"Phone",linkedin:"LinkedIn",location:"Location"})[E.toLowerCase()]||E,H=b.contactMetaData.find(E=>E.icon.toLowerCase()==="mail");return o.jsx(mb,{id:"contact",ref:j,children:o.jsxs(hb,{children:[o.jsx(Sa,{number:"08",title:"Contact",inView:N}),o.jsxs(bb,{children:[o.jsxs(yb,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:80,damping:18},children:[o.jsx(vb,{children:"Let's work together"}),o.jsx(xb,{children:"Have a project in mind or want to discuss opportunities? I'd love to hear from you."}),H&&o.jsxs(Sb,{href:H.href,whileHover:{scale:1.02},whileTap:{scale:.98},children:[o.jsx("span",{children:H.content}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),o.jsx(zb,{children:b.contactMetaData.filter(E=>E.icon.toLowerCase()!=="phone").map((E,G)=>o.jsxs(wb,{href:E.href,target:E.href.startsWith("http")?"_blank":void 0,rel:E.href.startsWith("http")?"noopener noreferrer":void 0,initial:{opacity:0,x:30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:18,delay:G*.1},whileHover:{x:12,scale:1.02,transition:{type:"spring",stiffness:400,damping:25}},whileTap:{scale:.98},children:[o.jsx(Ab,{whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:20},children:p(E.icon)}),o.jsxs(Tb,{children:[o.jsx(jb,{children:T(E.icon)}),o.jsx(Eb,{children:E.content})]})]},G))})]})]})})},Db={sectionTitle:"About Me",content:["🔹  I specialize in crafting multi-tenant, event-driven, and Micro-Services architectures on Azure and AWS, enabling real-time intelligence at scale. My leadership has accelerated delivery velocity by 25% and nurtured high-performing teams of 39+ engineers across international locations.","An expert in transforming monoliths into cloud-native Micro-Services, designing AI-driven orchestration platforms, and modernizing data pipelines using Spark, Databricks, and real-time analytics.","Passionate about balancing technical depth with business outcomes, aligning architecture roadmaps with OKRs, and embedding security and compliance (SOC2, InfoSec) across the SDLC.",`💡 Key Highlights: 
 ✅ Product & Project Expertise — Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT. 
 
 ✅ Technical Edge — Deep experience leading and mentoring global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, Docker/Kubernetes, and DevOps automation. 
 
 ✅ Business Outcomes — Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution.`],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},Cb={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},Ob={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},Hb={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},Ub={name:"Pranshu Nijhawan",designation:"Designing for Scale, Leading for Impact",headline:"Strategic Engineering Leader with 9+ years of experience architecting scalable SaaS platforms, leading global teams, and driving multimillion-dollar cost optimizations. Expert in cloud-native transformations, data-intensive systems, and multi-tenant architectures that enable real-time intelligence and business growth. Proven track record of reducing operational costs by $2M+, improving delivery velocity by 25%, and mentoring high-performing engineering teams.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},Bb={sectionTitle:"Most Proud Of",content:[{id:1,title:"SearchSphere – Multi-Tenant Search Platform with RAG and Vectorization",content:["Designed and architected a fully configurable multi-tenant search platform using TypeScript, Node.js, and PostgreSQL.","Implemented vectorization and Retrieval Augmented Generation (RAG) to enable intelligent global and dimension-based search capabilities.","Enabled onboarding of new search dimensions dynamically via configuration, eliminating the need for code changes.","Successfully decommissioned Elasticsearch, achieving platform simplification and over $2 million in cost savings.","Built for high scalability, supporting tenant isolation and extensibility without compromising performance."]},{id:2,title:"Zero-Downtime ETL Platform – Scalable Blue/Green Data Processing at Scale",content:["Engineered a highly scalable and fault-tolerant ETL platform using Databricks, Spark, Azure Data Factory, and PostgreSQL.","Designed around a Blue/Green deployment strategy to ensure zero downtime during data ingestion and transformation cycles.","Processed 200+ million records across 100+ tables in under 15 minutes using Change Data Capture (CDC) and dynamic schema allocation techniques.","Enabled seamless schema evolution and pipeline reusability across multiple tenants and data domains.","Delivered a production-grade solution with operational efficiency, reliability, and real-time recovery capabilities."]},{id:3,title:"Orchestron – AI Orchestrated Modular Data Processing & Explosion Platform",content:["Architected a high-performance data processing and explosion platform using .NET, Apache Spark, and Kubernetes.","Designed a modular, plug-and-play architecture with configurable rules to enable seamless data transformation at scale.","Integrated Generative AI Agents to manage orchestration and rule governance, enabling intelligent, adaptive processing workflows.","Achieved dynamic scalability and reusability across domains through containerized deployments and configuration-driven pipelines.","Delivered a flexible and future-proof platform capable of adapting to evolving data models and transformation logic with minimal effort."]},{id:4,title:"Polymorphic Self-Mutating Encryption Algorithm",content:["Created a highly secured Hybrid Encryption Algorithm, a combination of hashing and dynamic key-based Encryption Algorithm.",'Solve the drawback of traditional Hashing technique to always create a unique hash value with an "Always Unique" based mechanism ignoring the need to store a key as followed in Key Based Encryption technique.']},{id:5,title:"Global Dependency Tracer",content:["Created a highly optimized Dependency Trace writer, based on Aspect-Oriented-Programming (AOP) Paradigm.","Architected using .NET Core's built-in Dependency Injection (DI) Containers by injecting dynamic proxies acting as a Middleware for all service calls."]},{id:6,title:"Dynamic Result Library for IQueryable & IEnumerable Collections",content:["Created a highly customizable library for Non-Generic collections IQueryable & IEnumerable based on concepts of Reflection for transforming Custom Data objects into LINQ compatible Lambda Expressions.","Dynamic Filter: Generate lambda expressions for LINQ's where extension method to filter data based on defined properties and values.","Dynamic Sort: Generate LINQ's ordering extensions with lambda expressions to sort the object in any direction (Ascending & Descending).","Dynamic Select: Generate lambda expressions for LINQ's select extension to fetch only the provided properties and filter the response using Custom Middleware Injection in .NET Core's request cycle.","Fully Compatible for EF Core's Translations."]}]},Nb={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect I",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 - Present",descriptionSummary:'At McKinsey, I lead architectural vision for <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a>, a flagship <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> product for CPG and retail clients. My role involves bridging deep technical expertise with strategic client engagement, advising senior product and consulting leaders, and driving solution design for high-stakes RFPs and enterprise implementations. I ensure our technical strategy delivers measurable client impact, while also leading a global team of 39 engineers in strategic technical delivery.',description:["Directed a 39-person team on Promotion Advisor, automating 80% of manual tasks to optimize trade spend and maximize ROI, yielding $2M annual savings through targeted allocation across brands, channels, and geographies.","Engineered machine learning models and Azure-based ETL pipelines to collect, clean, and validate promotion data, enabling scenario planning, impact forecasting, and workflow approvals for superior margin and sales outcomes.","Developed a scalable ETL platform (Databricks, Spark, Azure Data Factory, PostgreSQL) with Blue/Green slotting. Processed 200M+ records across 100+ tables in <15 mins (zero downtime), providing retail clients with timely, accurate data for promotional analytics and strategic decision-making.","Architected Orchestron, a high-performance Data Processing and Explosion platform (.NET, Spark, Kubernetes) with modular, rule-driven design. Utilized Generative AI Agents for intelligent orchestration, automating 80% of manual transformation tasks, enhancing client operational efficiency and insights.","Consulted Fortune 500 consumer-goods clients in North America and Europe, delivering transformations with competitive intelligence and consumer insights for full-lifecycle pricing adjustments."]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 - March 2022",descriptionSummary:'At Eptura, I transformed <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), re-architecting legacy SaaS into cloud-native systems and designing distributed platforms. This directly enhanced product reliability and scalability for global clients, while I also led engineering squads, driving technical excellence and team growth.',description:["Cloud-Native Transformation for Enhanced Client Uptime: Led re-architecture of legacy SaaS to a cloud-native microservices solution on Azure Kubernetes Service (AKS). Achieved 60% faster recovery and significantly enhanced system uptime, critical for client operations.","Global Distributed Release Management System: Engineered and deployed a system (Azure IoT Hub, Serverless Functions, Azure CosmosDB) orchestrating synchronized updates across 300M+ IoT devices globally. Ensured seamless and reliable software delivery to a vast client network.","Led & Mentored Engineering Squads: Directed a team of 20 engineers (4 tech leads) across four product squads. Implemented mentorship, improving team retention by 20% and fostering engineering growth, impacting product quality for clients."]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 – April 2021",descriptionSummary:"At Nagarro, I delivered full-stack applications for diverse clients, enhancing user experience and streamlining development. My role involved hands-on development and implementing modern software engineering practices to improve efficiency and reliability of client solutions.",description:["High-Performance Full-Stack Applications: Developed full-stack web applications (Angular, .NET Core, PostgreSQL, Ionic Framework) for e-commerce and HR clients.","CI/CD & IaC for Reliable Client Deployments: Established CI/CD pipelines and Infrastructure as Code (IaC) practices. Reduced deployment failures by 70%, ensuring stable and predictable software releases for client projects."]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 – December 2019",descriptionSummary:'During this tenure at Condeco, I focused on core development and optimization of the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), contributing to its scalability and reliability for a rapidly growing customer base.',description:["Scalable Microservices for 3x Customer Growth: Designed and developed microservices (C#, .NET, React, SQL Server) for the workspace SaaS platform. Supported 3x customer scale-up, handling increased user demand.","Optimized CI/CD & Data Models: Maintained CI/CD pipelines and implemented data model optimizations. Resulted in faster, more reliable software releases and improved system performance for client-facing features."]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",date:"May 2017 – August 2018",descriptionSummary:"At Gartner, I contributed to the development of the ClearForce platform (proprietary survey and analytics tool for HR consulting), focusing on improving data accuracy and automating workflows for clients.",description:["Core SaaS Analytics Tool Development: Contributed backend development for ClearForce (C#, .NET Core, React), improving employee survey data accuracy by 60%. Critical for providing data-driven insights to HR clients.","Automated SQL Workflows: Developed and automated SQL workflows (SPs, SQL agent jobs). Saved over 240 engineering hours annually in manual data processing, improving data delivery efficiency for clients."],last:!0,previously:"Intern"}]},_b={sectionTitle:"Technology Proficiency",skills:[{icon:"Architecture",category:"Architecture",skills:[{name:"Microservices Architecture",percentage:100},{name:"Data Lakehouse",percentage:90},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Multi-Tenant Architecture (Database, Schema, Metadata Resolution)",percentage:90},{name:"Event-Driven Architecture (EDA)",percentage:100},{name:"Serverless",percentage:80}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"Angular",percentage:90},{name:"JavaScript",percentage:100},{name:"TypeScript",percentage:100},{name:"Ionic Framework",percentage:60}]},{icon:"Backend",category:"Backend",skills:[{name:"C#",percentage:100},{name:".NET Core",percentage:100},{name:"Node.Js",percentage:80},{name:"Python",percentage:80},{name:"Microservices",percentage:100},{name:"GraphQL",percentage:80}]},{icon:"Database",category:"Database",skills:[{name:"SQL",percentage:100},{name:"NoSQL",percentage:90}]},{icon:"Cloud",category:"Cloud",skills:[{name:"Microsoft Azure",percentage:90},{name:"Amazon Web Services (AWS)",percentage:80}]},{icon:"DataEngineering",category:"Data Engineering",skills:[{name:"Azure Databricks (Apache Spark)",percentage:80},{name:"Azure Datafactory",percentage:70},{name:"Azure Stream Analytics",percentage:70}]}]},qb={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},kb={aboutSection:Db,certifications:Cb,contactMe:Ob,educationalQualifications:Hb,homeSection:Ub,mostProudOf:Bb,professionalExperience:Nb,technologyProficiency:_b,testimonials:qb},Je=kb;function Gb(){const[b,j]=Y.useState(!1);return o.jsxs(wg,{children:[o.jsx(Sg,{}),o.jsx(dm,{}),!b&&o.jsx(rm,{onComplete:()=>j(!0)}),b&&o.jsxs(o.Fragment,{children:[o.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),o.jsx(Ug,{}),o.jsxs("main",{id:"main-content",style:{position:"relative"},role:"main",children:[o.jsx($m,{data:Je.homeSection}),o.jsx(Hh,{data:Je.aboutSection}),o.jsx(Lh,{data:Je.technologyProficiency}),o.jsx(h1,{data:Je.professionalExperience}),o.jsx(k1,{data:Je.mostProudOf}),o.jsx(K1,{data:Je.certifications}),o.jsx(nb,{data:Je.testimonials}),o.jsx(pb,{data:Je.educationalQualifications}),o.jsx(Mb,{data:Je.contactMe})]}),o.jsx(Lg,{})]})]})}xg.createRoot(document.getElementById("root")).render(o.jsx(Y.StrictMode,{children:o.jsx(Gb,{})}));
