import{r as X,j as o,m as v,A as $l,u as dg,a as mo,b as zd,c as Te}from"./vendor-motion-BoSVoJ0s.js";import{r as pg,a as gg}from"./vendor-react-DlBnNAMw.js";import{f as mg,m as Ot,d,l as Je}from"./vendor-styled-Du6AN5G6.js";(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))p(w);new MutationObserver(w=>{for(const U of w)if(U.type==="childList")for(const C of U.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&p(C)}).observe(document,{childList:!0,subtree:!0});function O(w){const U={};return w.integrity&&(U.integrity=w.integrity),w.referrerPolicy&&(U.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?U.credentials="include":w.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function p(w){if(w.ep)return;w.ep=!0;const U=O(w);fetch(w.href,U)}})();var ho={exports:{}},Tn={},yo={exports:{}},bo={};var Td;function hg(){return Td||(Td=1,(function(h){function E(T,j){var k=T.length;T.push(j);t:for(;0<k;){var ot=k-1>>>1,st=T[ot];if(0<w(st,j))T[ot]=j,T[k]=st,k=ot;else break t}}function O(T){return T.length===0?null:T[0]}function p(T){if(T.length===0)return null;var j=T[0],k=T.pop();if(k!==j){T[0]=k;t:for(var ot=0,st=T.length,Gt=st>>>1;ot<Gt;){var mt=2*(ot+1)-1,tt=T[mt],jt=mt+1,Ae=T[jt];if(0>w(tt,k))jt<st&&0>w(Ae,tt)?(T[ot]=Ae,T[jt]=k,ot=jt):(T[ot]=tt,T[mt]=k,ot=mt);else if(jt<st&&0>w(Ae,k))T[ot]=Ae,T[jt]=k,ot=jt;else break t}}return j}function w(T,j){var k=T.sortIndex-j.sortIndex;return k!==0?k:T.id-j.id}if(h.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var U=performance;h.unstable_now=function(){return U.now()}}else{var C=Date,q=C.now();h.unstable_now=function(){return C.now()-q}}var _=[],R=[],ut=1,M=null,$=3,Yt=!1,I=!1,Ht=!1,dt=!1,J=typeof setTimeout=="function"?setTimeout:null,bt=typeof clearTimeout=="function"?clearTimeout:null,gt=typeof setImmediate<"u"?setImmediate:null;function Et(T){for(var j=O(R);j!==null;){if(j.callback===null)p(R);else if(j.startTime<=T)p(R),j.sortIndex=j.expirationTime,E(_,j);else break;j=O(R)}}function Jt(T){if(Ht=!1,Et(T),!I)if(O(_)!==null)I=!0,ce||(ce=!0,ue());else{var j=O(R);j!==null&&De(Jt,j.startTime-T)}}var ce=!1,be=-1,ve=5,Xa=-1;function An(){return dt?!0:!(h.unstable_now()-Xa<ve)}function Qa(){if(dt=!1,ce){var T=h.unstable_now();Xa=T;var j=!0;try{t:{I=!1,Ht&&(Ht=!1,bt(be),be=-1),Yt=!0;var k=$;try{e:{for(Et(T),M=O(_);M!==null&&!(M.expirationTime>T&&An());){var ot=M.callback;if(typeof ot=="function"){M.callback=null,$=M.priorityLevel;var st=ot(M.expirationTime<=T);if(T=h.unstable_now(),typeof st=="function"){M.callback=st,Et(T),j=!0;break e}M===O(_)&&p(_),Et(T)}else p(_);M=O(_)}if(M!==null)j=!0;else{var Gt=O(R);Gt!==null&&De(Jt,Gt.startTime-T),j=!1}}break t}finally{M=null,$=k,Yt=!1}j=void 0}}finally{j?ue():ce=!1}}}var ue;if(typeof gt=="function")ue=function(){gt(Qa)};else if(typeof MessageChannel<"u"){var wn=new MessageChannel,Di=wn.port2;wn.port1.onmessage=Qa,ue=function(){Di.postMessage(null)}}else ue=function(){J(Qa,0)};function De(T,j){be=J(function(){T(h.unstable_now())},j)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(T){T.callback=null},h.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<T?Math.floor(1e3/T):5},h.unstable_getCurrentPriorityLevel=function(){return $},h.unstable_next=function(T){switch($){case 1:case 2:case 3:var j=3;break;default:j=$}var k=$;$=j;try{return T()}finally{$=k}},h.unstable_requestPaint=function(){dt=!0},h.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var k=$;$=T;try{return j()}finally{$=k}},h.unstable_scheduleCallback=function(T,j,k){var ot=h.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ot+k:ot):k=ot,T){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=k+st,T={id:ut++,callback:j,priorityLevel:T,startTime:k,expirationTime:st,sortIndex:-1},k>ot?(T.sortIndex=k,E(R,T),O(_)===null&&T===O(R)&&(Ht?(bt(be),be=-1):Ht=!0,De(Jt,k-ot))):(T.sortIndex=st,E(_,T),I||Yt||(I=!0,ce||(ce=!0,ue()))),T},h.unstable_shouldYield=An,h.unstable_wrapCallback=function(T){var j=$;return function(){var k=$;$=j;try{return T.apply(this,arguments)}finally{$=k}}}})(bo)),bo}var Ad;function yg(){return Ad||(Ad=1,yo.exports=hg()),yo.exports}var wd;function bg(){if(wd)return Tn;wd=1;var h=yg(),E=pg(),O=gg();function p(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function U(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function C(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function q(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(U(t)!==t)throw Error(p(188))}function R(t){var e=t.alternate;if(!e){if(e=U(t),e===null)throw Error(p(188));return e!==t?null:t}for(var a=t,i=e;;){var n=a.return;if(n===null)break;var l=n.alternate;if(l===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===a)return _(n),t;if(l===i)return _(n),e;l=l.sibling}throw Error(p(188))}if(a.return!==i.return)a=n,i=l;else{for(var c=!1,u=n.child;u;){if(u===a){c=!0,a=n,i=l;break}if(u===i){c=!0,i=n,a=l;break}u=u.sibling}if(!c){for(u=l.child;u;){if(u===a){c=!0,a=l,i=n;break}if(u===i){c=!0,i=l,a=n;break}u=u.sibling}if(!c)throw Error(p(189))}}if(a.alternate!==i)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?t:e}function ut(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=ut(t),e!==null)return e;t=t.sibling}return null}var M=Object.assign,$=Symbol.for("react.element"),Yt=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),dt=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),bt=Symbol.for("react.consumer"),gt=Symbol.for("react.context"),Et=Symbol.for("react.forward_ref"),Jt=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),Xa=Symbol.for("react.activity"),An=Symbol.for("react.memo_cache_sentinel"),Qa=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=Qa&&t[Qa]||t["@@iterator"],typeof t=="function"?t:null)}var wn=Symbol.for("react.client.reference");function Di(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===wn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ht:return"Fragment";case J:return"Profiler";case dt:return"StrictMode";case Jt:return"Suspense";case ce:return"SuspenseList";case Xa:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case I:return"Portal";case gt:return t.displayName||"Context";case bt:return(t._context.displayName||"Context")+".Consumer";case Et:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case be:return e=t.displayName||null,e!==null?e:Di(t.type)||"Memo";case ve:e=t._payload,t=t._init;try{return Di(t(e))}catch{}}return null}var De=Array.isArray,T=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},ot=[],st=-1;function Gt(t){return{current:t}}function mt(t){0>st||(t.current=ot[st],ot[st]=null,st--)}function tt(t,e){st++,ot[st]=t.current,t.current=e}var jt=Gt(null),Ae=Gt(null),We=Gt(null),En=Gt(null);function jn(t,e){switch(tt(We,e),tt(Ae,t),tt(jt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Lf(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Lf(e),t=Zf(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}mt(jt),tt(jt,t)}function Va(){mt(jt),mt(Ae),mt(We)}function Jl(t){t.memoizedState!==null&&tt(En,t);var e=jt.current,a=Zf(e,t.type);e!==a&&(tt(Ae,t),tt(jt,a))}function Mn(t){Ae.current===t&&(mt(jt),mt(Ae)),En.current===t&&(mt(En),vn._currentValue=k)}var Wl,xo;function Ta(t){if(Wl===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Wl=e&&e[1]||"",xo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wl+t+xo}var Fl=!1;function Il(t,e){if(!t||Fl)return"";Fl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(b){var y=b}Reflect.construct(t,[],A)}else{try{A.call()}catch(b){y=b}t.call(A.prototype)}}else{try{throw Error()}catch(b){y=b}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),c=l[0],u=l[1];if(c&&u){var s=c.split(`
`),m=u.split(`
`);for(n=i=0;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(i===s.length||n===m.length)for(i=s.length-1,n=m.length-1;1<=i&&0<=n&&s[i]!==m[n];)n--;for(;1<=i&&0<=n;i--,n--)if(s[i]!==m[n]){if(i!==1||n!==1)do if(i--,n--,0>n||s[i]!==m[n]){var S=`
`+s[i].replace(" at new "," at ");return t.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",t.displayName)),S}while(1<=i&&0<=n);break}}}finally{Fl=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ta(a):""}function Qd(t,e){switch(t.tag){case 26:case 27:case 5:return Ta(t.type);case 16:return Ta("Lazy");case 13:return t.child!==e&&e!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Il(t.type,!1);case 11:return Il(t.type.render,!1);case 1:return Il(t.type,!0);case 31:return Ta("Activity");default:return""}}function So(t){try{var e="",a=null;do e+=Qd(t,a),a=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Pl=Object.prototype.hasOwnProperty,tc=h.unstable_scheduleCallback,ec=h.unstable_cancelCallback,Vd=h.unstable_shouldYield,Ld=h.unstable_requestPaint,Wt=h.unstable_now,Zd=h.unstable_getCurrentPriorityLevel,zo=h.unstable_ImmediatePriority,To=h.unstable_UserBlockingPriority,Dn=h.unstable_NormalPriority,Kd=h.unstable_LowPriority,Ao=h.unstable_IdlePriority,$d=h.log,Jd=h.unstable_setDisableYieldValue,Ci=null,Ft=null;function Fe(t){if(typeof $d=="function"&&Jd(t),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(Ci,t)}catch{}}var It=Math.clz32?Math.clz32:Id,Wd=Math.log,Fd=Math.LN2;function Id(t){return t>>>=0,t===0?32:31-(Wd(t)/Fd|0)|0}var Cn=256,On=262144,Hn=4194304;function Aa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Un(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var n=0,l=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var u=i&134217727;return u!==0?(i=u&~l,i!==0?n=Aa(i):(c&=u,c!==0?n=Aa(c):a||(a=u&~t,a!==0&&(n=Aa(a))))):(u=i&~l,u!==0?n=Aa(u):c!==0?n=Aa(c):a||(a=i&~t,a!==0&&(n=Aa(a)))),n===0?0:e!==0&&e!==n&&(e&l)===0&&(l=n&-n,a=e&-e,l>=a||l===32&&(a&4194048)!==0)?e:n}function Oi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Pd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wo(){var t=Hn;return Hn<<=1,(Hn&62914560)===0&&(Hn=4194304),t}function ac(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Hi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function t0(t,e,a,i,n,l){var c=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var u=t.entanglements,s=t.expirationTimes,m=t.hiddenUpdates;for(a=c&~a;0<a;){var S=31-It(a),A=1<<S;u[S]=0,s[S]=-1;var y=m[S];if(y!==null)for(m[S]=null,S=0;S<y.length;S++){var b=y[S];b!==null&&(b.lane&=-536870913)}a&=~A}i!==0&&Eo(t,i,0),l!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=l&~(c&~e))}function Eo(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-It(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&261930}function jo(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-It(a),n=1<<i;n&e|t[i]&e&&(t[i]|=e),a&=~n}}function Mo(t,e){var a=e&-e;return a=(a&42)!==0?1:ic(a),(a&(t.suspendedLanes|e))!==0?0:a}function ic(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function nc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Do(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:md(t.type))}function Co(t,e){var a=j.p;try{return j.p=t,e()}finally{j.p=a}}var Ie=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Ie,Xt="__reactProps$"+Ie,La="__reactContainer$"+Ie,lc="__reactEvents$"+Ie,e0="__reactListeners$"+Ie,a0="__reactHandles$"+Ie,Oo="__reactResources$"+Ie,Ui="__reactMarker$"+Ie;function cc(t){delete t[Ut],delete t[Xt],delete t[lc],delete t[e0],delete t[a0]}function Za(t){var e=t[Ut];if(e)return e;for(var a=t.parentNode;a;){if(e=a[La]||a[Ut]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Pf(t);t!==null;){if(a=t[Ut])return a;t=Pf(t)}return e}t=a,a=t.parentNode}return null}function Ka(t){if(t=t[Ut]||t[La]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Bi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(p(33))}function $a(t){var e=t[Oo];return e||(e=t[Oo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Mt(t){t[Ui]=!0}var Ho=new Set,Uo={};function wa(t,e){Ja(t,e),Ja(t+"Capture",e)}function Ja(t,e){for(Uo[t]=e,t=0;t<e.length;t++)Ho.add(e[t])}var i0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bo={},No={};function n0(t){return Pl.call(No,t)?!0:Pl.call(Bo,t)?!1:i0.test(t)?No[t]=!0:(Bo[t]=!0,!1)}function Bn(t,e,a){if(n0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Nn(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Ce(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}function oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _o(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function l0(t,e,a){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,l=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,l.call(this,c)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uc(t){if(!t._valueTracker){var e=_o(t)?"checked":"value";t._valueTracker=l0(t,e,""+t[e])}}function qo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=_o(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var c0=/[\n"\\]/g;function se(t){return t.replace(c0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function oc(t,e,a,i,n,l,c,u){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+oe(e)):t.value!==""+oe(e)&&(t.value=""+oe(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?sc(t,c,oe(e)):a!=null?sc(t,c,oe(a)):i!=null&&t.removeAttribute("value"),n==null&&l!=null&&(t.defaultChecked=!!l),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.name=""+oe(u):t.removeAttribute("name")}function ko(t,e,a,i,n,l,c,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){uc(t);return}a=a!=null?""+oe(a):"",e=e!=null?""+oe(e):a,u||e===t.value||(t.value=e),t.defaultValue=e}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=u?t.checked:!!i,t.defaultChecked=!!i,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),uc(t)}function sc(t,e,a){e==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Wa(t,e,a,i){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&i&&(t[a].defaultSelected=!0)}else{for(a=""+oe(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Go(t,e,a){if(e!=null&&(e=""+oe(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+oe(a):""}function Ro(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(p(92));if(De(i)){if(1<i.length)throw Error(p(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=oe(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i),uc(t)}function Fa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var u0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yo(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||u0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Xo(t,e,a){if(e!=null&&typeof e!="object")throw Error(p(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var n in e)i=e[n],e.hasOwnProperty(n)&&a[n]!==i&&Yo(t,n,i)}else for(var l in e)e.hasOwnProperty(l)&&Yo(t,l,e[l])}function rc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var o0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),s0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qn(t){return s0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oe(){}var fc=null;function dc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ia=null,Pa=null;function Qo(t){var e=Ka(t);if(e&&(t=e.stateNode)){var a=t[Xt]||null;t:switch(t=e.stateNode,e.type){case"input":if(oc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var n=i[Xt]||null;if(!n)throw Error(p(90));oc(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&qo(i)}break t;case"textarea":Go(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Wa(t,!!a.multiple,e,!1)}}}var pc=!1;function Vo(t,e,a){if(pc)return t(e,a);pc=!0;try{var i=t(e);return i}finally{if(pc=!1,(Ia!==null||Pa!==null)&&(Al(),Ia&&(e=Ia,t=Pa,Pa=Ia=null,Qo(e),t)))for(e=0;e<t.length;e++)Qo(t[e])}}function Ni(t,e){var a=t.stateNode;if(a===null)return null;var i=a[Xt]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(p(231,e,typeof a));return a}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gc=!1;if(He)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){gc=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{gc=!1}var Pe=null,mc=null,kn=null;function Lo(){if(kn)return kn;var t,e=mc,a=e.length,i,n="value"in Pe?Pe.value:Pe.textContent,l=n.length;for(t=0;t<a&&e[t]===n[t];t++);var c=a-t;for(i=1;i<=c&&e[a-i]===n[l-i];i++);return kn=n.slice(t,1<i?1-i:void 0)}function Gn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rn(){return!0}function Zo(){return!1}function Qt(t){function e(a,i,n,l,c){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(a=t[u],this[u]=a?a(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Rn:Zo,this.isPropagationStopped=Zo,this}return M(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),e}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yn=Qt(Ea),qi=M({},Ea,{view:0,detail:0}),r0=Qt(qi),hc,yc,ki,Xn=M({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(hc=t.screenX-ki.screenX,yc=t.screenY-ki.screenY):yc=hc=0,ki=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Ko=Qt(Xn),f0=M({},Xn,{dataTransfer:0}),d0=Qt(f0),p0=M({},qi,{relatedTarget:0}),bc=Qt(p0),g0=M({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=Qt(g0),h0=M({},Ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),y0=Qt(h0),b0=M({},Ea,{data:0}),$o=Qt(b0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S0[t])?!!e[t]:!1}function vc(){return z0}var T0=M({},qi,{key:function(t){if(t.key){var e=v0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(t){return t.type==="keypress"?Gn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),A0=Qt(T0),w0=M({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=Qt(w0),E0=M({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),j0=Qt(E0),M0=M({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),D0=Qt(M0),C0=M({},Xn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),O0=Qt(C0),H0=M({},Ea,{newState:0,oldState:0}),U0=Qt(H0),B0=[9,13,27,32],xc=He&&"CompositionEvent"in window,Gi=null;He&&"documentMode"in document&&(Gi=document.documentMode);var N0=He&&"TextEvent"in window&&!Gi,Wo=He&&(!xc||Gi&&8<Gi&&11>=Gi),Fo=" ",Io=!1;function Po(t,e){switch(t){case"keyup":return B0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ts(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function _0(t,e){switch(t){case"compositionend":return ts(e);case"keypress":return e.which!==32?null:(Io=!0,Fo);case"textInput":return t=e.data,t===Fo&&Io?null:t;default:return null}}function q0(t,e){if(ti)return t==="compositionend"||!xc&&Po(t,e)?(t=Lo(),kn=mc=Pe=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wo&&e.locale!=="ko"?null:e.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!k0[t.type]:e==="textarea"}function as(t,e,a,i){Ia?Pa?Pa.push(i):Pa=[i]:Ia=i,e=Ol(e,"onChange"),0<e.length&&(a=new Yn("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Ri=null,Yi=null;function G0(t){Gf(t,0)}function Qn(t){var e=Bi(t);if(qo(e))return t}function is(t,e){if(t==="change")return e}var ns=!1;if(He){var Sc;if(He){var zc="oninput"in document;if(!zc){var ls=document.createElement("div");ls.setAttribute("oninput","return;"),zc=typeof ls.oninput=="function"}Sc=zc}else Sc=!1;ns=Sc&&(!document.documentMode||9<document.documentMode)}function cs(){Ri&&(Ri.detachEvent("onpropertychange",us),Yi=Ri=null)}function us(t){if(t.propertyName==="value"&&Qn(Yi)){var e=[];as(e,Yi,t,dc(t)),Vo(G0,e)}}function R0(t,e,a){t==="focusin"?(cs(),Ri=e,Yi=a,Ri.attachEvent("onpropertychange",us)):t==="focusout"&&cs()}function Y0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qn(Yi)}function X0(t,e){if(t==="click")return Qn(e)}function Q0(t,e){if(t==="input"||t==="change")return Qn(e)}function V0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pt=typeof Object.is=="function"?Object.is:V0;function Xi(t,e){if(Pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!Pl.call(e,n)||!Pt(t[n],e[n]))return!1}return!0}function os(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ss(t,e){var a=os(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=os(a)}}function rs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=_n(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=_n(t.document)}return e}function Tc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var L0=He&&"documentMode"in document&&11>=document.documentMode,ei=null,Ac=null,Qi=null,wc=!1;function ds(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||ei==null||ei!==_n(i)||(i=ei,"selectionStart"in i&&Tc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qi&&Xi(Qi,i)||(Qi=i,i=Ol(Ac,"onSelect"),0<i.length&&(e=new Yn("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=ei)))}function ja(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var ai={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Ec={},ps={};He&&(ps=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function Ma(t){if(Ec[t])return Ec[t];if(!ai[t])return t;var e=ai[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in ps)return Ec[t]=e[a];return t}var gs=Ma("animationend"),ms=Ma("animationiteration"),hs=Ma("animationstart"),Z0=Ma("transitionrun"),K0=Ma("transitionstart"),$0=Ma("transitioncancel"),ys=Ma("transitionend"),bs=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function xe(t,e){bs.set(t,e),wa(e,[t])}var Vn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},re=[],ii=0,Mc=0;function Ln(){for(var t=ii,e=Mc=ii=0;e<t;){var a=re[e];re[e++]=null;var i=re[e];re[e++]=null;var n=re[e];re[e++]=null;var l=re[e];if(re[e++]=null,i!==null&&n!==null){var c=i.pending;c===null?n.next=n:(n.next=c.next,c.next=n),i.pending=n}l!==0&&vs(a,n,l)}}function Zn(t,e,a,i){re[ii++]=t,re[ii++]=e,re[ii++]=a,re[ii++]=i,Mc|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Dc(t,e,a,i){return Zn(t,e,a,i),Kn(t)}function Da(t,e){return Zn(t,null,null,e),Kn(t)}function vs(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var n=!1,l=t.return;l!==null;)l.childLanes|=a,i=l.alternate,i!==null&&(i.childLanes|=a),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(n=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,n&&e!==null&&(n=31-It(a),t=l.hiddenUpdates,i=t[n],i===null?t[n]=[e]:i.push(e),e.lane=a|536870912),l):null}function Kn(t){if(50<dn)throw dn=0,ku=null,Error(p(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ni={};function J0(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function te(t,e,a,i){return new J0(t,e,a,i)}function Cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ue(t,e){var a=t.alternate;return a===null?(a=te(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function xs(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function $n(t,e,a,i,n,l){var c=0;if(i=t,typeof t=="function")Cc(t)&&(c=1);else if(typeof t=="string")c=tg(t,a,jt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Xa:return t=te(31,a,e,n),t.elementType=Xa,t.lanes=l,t;case Ht:return Ca(a.children,n,l,e);case dt:c=8,n|=24;break;case J:return t=te(12,a,e,n|2),t.elementType=J,t.lanes=l,t;case Jt:return t=te(13,a,e,n),t.elementType=Jt,t.lanes=l,t;case ce:return t=te(19,a,e,n),t.elementType=ce,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gt:c=10;break t;case bt:c=9;break t;case Et:c=11;break t;case be:c=14;break t;case ve:c=16,i=null;break t}c=29,a=Error(p(130,t===null?"null":typeof t,"")),i=null}return e=te(c,a,e,n),e.elementType=t,e.type=i,e.lanes=l,e}function Ca(t,e,a,i){return t=te(7,t,i,e),t.lanes=a,t}function Oc(t,e,a){return t=te(6,t,null,e),t.lanes=a,t}function Ss(t){var e=te(18,null,null,0);return e.stateNode=t,e}function Hc(t,e,a){return e=te(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var zs=new WeakMap;function fe(t,e){if(typeof t=="object"&&t!==null){var a=zs.get(t);return a!==void 0?a:(e={value:t,source:e,stack:So(e)},zs.set(t,e),e)}return{value:t,source:e,stack:So(e)}}var li=[],ci=0,Jn=null,Vi=0,de=[],pe=0,ta=null,we=1,Ee="";function Be(t,e){li[ci++]=Vi,li[ci++]=Jn,Jn=t,Vi=e}function Ts(t,e,a){de[pe++]=we,de[pe++]=Ee,de[pe++]=ta,ta=t;var i=we;t=Ee;var n=32-It(i)-1;i&=~(1<<n),a+=1;var l=32-It(e)+n;if(30<l){var c=n-n%5;l=(i&(1<<c)-1).toString(32),i>>=c,n-=c,we=1<<32-It(e)+n|a<<n|i,Ee=l+t}else we=1<<l|a<<n|i,Ee=t}function Uc(t){t.return!==null&&(Be(t,1),Ts(t,1,0))}function Bc(t){for(;t===Jn;)Jn=li[--ci],li[ci]=null,Vi=li[--ci],li[ci]=null;for(;t===ta;)ta=de[--pe],de[pe]=null,Ee=de[--pe],de[pe]=null,we=de[--pe],de[pe]=null}function As(t,e){de[pe++]=we,de[pe++]=Ee,de[pe++]=ta,we=e.id,Ee=e.overflow,ta=t}var Bt=null,rt=null,K=!1,ea=null,ge=!1,Nc=Error(p(519));function aa(t){var e=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Li(fe(e,t)),Nc}function ws(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[Ut]=t,e[Xt]=i,a){case"dialog":V("cancel",e),V("close",e);break;case"iframe":case"object":case"embed":V("load",e);break;case"video":case"audio":for(a=0;a<gn.length;a++)V(gn[a],e);break;case"source":V("error",e);break;case"img":case"image":case"link":V("error",e),V("load",e);break;case"details":V("toggle",e);break;case"input":V("invalid",e),ko(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":V("invalid",e);break;case"textarea":V("invalid",e),Ro(e,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||Qf(e.textContent,a)?(i.popover!=null&&(V("beforetoggle",e),V("toggle",e)),i.onScroll!=null&&V("scroll",e),i.onScrollEnd!=null&&V("scrollend",e),i.onClick!=null&&(e.onclick=Oe),e=!0):e=!1,e||aa(t,!0)}function Es(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:ge=!1;return;case 27:case 3:ge=!0;return;default:Bt=Bt.return}}function ui(t){if(t!==Bt)return!1;if(!K)return Es(t),K=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pu(t.type,t.memoizedProps)),a=!a),a&&rt&&aa(t),Es(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));rt=If(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));rt=If(t)}else e===27?(e=rt,ha(t.type)?(t=no,no=null,rt=t):rt=e):rt=Bt?he(t.stateNode.nextSibling):null;return!0}function Oa(){rt=Bt=null,K=!1}function _c(){var t=ea;return t!==null&&(Kt===null?Kt=t:Kt.push.apply(Kt,t),ea=null),t}function Li(t){ea===null?ea=[t]:ea.push(t)}var qc=Gt(null),Ha=null,Ne=null;function ia(t,e,a){tt(qc,e._currentValue),e._currentValue=a}function _e(t){t._currentValue=qc.current,mt(qc)}function kc(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function Gc(t,e,a,i){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var l=n.dependencies;if(l!==null){var c=n.child;l=l.firstContext;t:for(;l!==null;){var u=l;l=n;for(var s=0;s<e.length;s++)if(u.context===e[s]){l.lanes|=a,u=l.alternate,u!==null&&(u.lanes|=a),kc(l.return,a,t),i||(c=null);break t}l=u.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(p(341));c.lanes|=a,l=c.alternate,l!==null&&(l.lanes|=a),kc(c,a,t),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===t){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function oi(t,e,a,i){t=null;for(var n=e,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(p(387));if(c=c.memoizedProps,c!==null){var u=n.type;Pt(n.pendingProps.value,c.value)||(t!==null?t.push(u):t=[u])}}else if(n===En.current){if(c=n.alternate,c===null)throw Error(p(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(vn):t=[vn])}n=n.return}t!==null&&Gc(e,t,a,i),e.flags|=262144}function Wn(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ua(t){Ha=t,Ne=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nt(t){return js(Ha,t)}function Fn(t,e){return Ha===null&&Ua(t),js(t,e)}function js(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ne===null){if(t===null)throw Error(p(308));Ne=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ne=Ne.next=e;return a}var W0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},F0=h.unstable_scheduleCallback,I0=h.unstable_NormalPriority,St={$$typeof:gt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rc(){return{controller:new W0,data:new Map,refCount:0}}function Zi(t){t.refCount--,t.refCount===0&&F0(I0,function(){t.controller.abort()})}var Ki=null,Yc=0,si=0,ri=null;function P0(t,e){if(Ki===null){var a=Ki=[];Yc=0,si=Vu(),ri={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Yc++,e.then(Ms,Ms),e}function Ms(){if(--Yc===0&&Ki!==null){ri!==null&&(ri.status="fulfilled");var t=Ki;Ki=null,si=0,ri=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function tp(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var Ds=T.S;T.S=function(t,e){pf=Wt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&P0(t,e),Ds!==null&&Ds(t,e)};var Ba=Gt(null);function Xc(){var t=Ba.current;return t!==null?t:ct.pooledCache}function In(t,e){e===null?tt(Ba,Ba.current):tt(Ba,e.pool)}function Cs(){var t=Xc();return t===null?null:{parent:St._currentValue,pool:t}}var fi=Error(p(460)),Qc=Error(p(474)),Pn=Error(p(542)),tl={then:function(){}};function Os(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hs(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Oe,Oe),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Bs(t),t;default:if(typeof e.status=="string")e.then(Oe,Oe);else{if(t=ct,t!==null&&100<t.shellSuspendCounter)throw Error(p(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=i}},function(i){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Bs(t),t}throw _a=e,fi}}function Na(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_a=a,fi):a}}var _a=null;function Us(){if(_a===null)throw Error(p(459));var t=_a;return _a=null,t}function Bs(t){if(t===fi||t===Pn)throw Error(p(483))}var di=null,$i=0;function el(t){var e=$i;return $i+=1,di===null&&(di=[]),Hs(di,t,e)}function Ji(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function al(t,e){throw e.$$typeof===$?Error(p(525)):(t=Object.prototype.toString.call(e),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ns(t){function e(f,r){if(t){var g=f.deletions;g===null?(f.deletions=[r],f.flags|=16):g.push(r)}}function a(f,r){if(!t)return null;for(;r!==null;)e(f,r),r=r.sibling;return null}function i(f){for(var r=new Map;f!==null;)f.key!==null?r.set(f.key,f):r.set(f.index,f),f=f.sibling;return r}function n(f,r){return f=Ue(f,r),f.index=0,f.sibling=null,f}function l(f,r,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<r?(f.flags|=67108866,r):g):(f.flags|=67108866,r)):(f.flags|=1048576,r)}function c(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function u(f,r,g,z){return r===null||r.tag!==6?(r=Oc(g,f.mode,z),r.return=f,r):(r=n(r,g),r.return=f,r)}function s(f,r,g,z){var B=g.type;return B===Ht?S(f,r,g.props.children,z,g.key):r!==null&&(r.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ve&&Na(B)===r.type)?(r=n(r,g.props),Ji(r,g),r.return=f,r):(r=$n(g.type,g.key,g.props,null,f.mode,z),Ji(r,g),r.return=f,r)}function m(f,r,g,z){return r===null||r.tag!==4||r.stateNode.containerInfo!==g.containerInfo||r.stateNode.implementation!==g.implementation?(r=Hc(g,f.mode,z),r.return=f,r):(r=n(r,g.children||[]),r.return=f,r)}function S(f,r,g,z,B){return r===null||r.tag!==7?(r=Ca(g,f.mode,z,B),r.return=f,r):(r=n(r,g),r.return=f,r)}function A(f,r,g){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Oc(""+r,f.mode,g),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Yt:return g=$n(r.type,r.key,r.props,null,f.mode,g),Ji(g,r),g.return=f,g;case I:return r=Hc(r,f.mode,g),r.return=f,r;case ve:return r=Na(r),A(f,r,g)}if(De(r)||ue(r))return r=Ca(r,f.mode,g,null),r.return=f,r;if(typeof r.then=="function")return A(f,el(r),g);if(r.$$typeof===gt)return A(f,Fn(f,r),g);al(f,r)}return null}function y(f,r,g,z){var B=r!==null?r.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return B!==null?null:u(f,r,""+g,z);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yt:return g.key===B?s(f,r,g,z):null;case I:return g.key===B?m(f,r,g,z):null;case ve:return g=Na(g),y(f,r,g,z)}if(De(g)||ue(g))return B!==null?null:S(f,r,g,z,null);if(typeof g.then=="function")return y(f,r,el(g),z);if(g.$$typeof===gt)return y(f,r,Fn(f,g),z);al(f,g)}return null}function b(f,r,g,z,B){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return f=f.get(g)||null,u(r,f,""+z,B);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Yt:return f=f.get(z.key===null?g:z.key)||null,s(r,f,z,B);case I:return f=f.get(z.key===null?g:z.key)||null,m(r,f,z,B);case ve:return z=Na(z),b(f,r,g,z,B)}if(De(z)||ue(z))return f=f.get(g)||null,S(r,f,z,B,null);if(typeof z.then=="function")return b(f,r,g,el(z),B);if(z.$$typeof===gt)return b(f,r,g,Fn(r,z),B);al(r,z)}return null}function D(f,r,g,z){for(var B=null,W=null,H=r,Y=r=0,Z=null;H!==null&&Y<g.length;Y++){H.index>Y?(Z=H,H=null):Z=H.sibling;var F=y(f,H,g[Y],z);if(F===null){H===null&&(H=Z);break}t&&H&&F.alternate===null&&e(f,H),r=l(F,r,Y),W===null?B=F:W.sibling=F,W=F,H=Z}if(Y===g.length)return a(f,H),K&&Be(f,Y),B;if(H===null){for(;Y<g.length;Y++)H=A(f,g[Y],z),H!==null&&(r=l(H,r,Y),W===null?B=H:W.sibling=H,W=H);return K&&Be(f,Y),B}for(H=i(H);Y<g.length;Y++)Z=b(H,f,Y,g[Y],z),Z!==null&&(t&&Z.alternate!==null&&H.delete(Z.key===null?Y:Z.key),r=l(Z,r,Y),W===null?B=Z:W.sibling=Z,W=Z);return t&&H.forEach(function(Sa){return e(f,Sa)}),K&&Be(f,Y),B}function N(f,r,g,z){if(g==null)throw Error(p(151));for(var B=null,W=null,H=r,Y=r=0,Z=null,F=g.next();H!==null&&!F.done;Y++,F=g.next()){H.index>Y?(Z=H,H=null):Z=H.sibling;var Sa=y(f,H,F.value,z);if(Sa===null){H===null&&(H=Z);break}t&&H&&Sa.alternate===null&&e(f,H),r=l(Sa,r,Y),W===null?B=Sa:W.sibling=Sa,W=Sa,H=Z}if(F.done)return a(f,H),K&&Be(f,Y),B;if(H===null){for(;!F.done;Y++,F=g.next())F=A(f,F.value,z),F!==null&&(r=l(F,r,Y),W===null?B=F:W.sibling=F,W=F);return K&&Be(f,Y),B}for(H=i(H);!F.done;Y++,F=g.next())F=b(H,f,Y,F.value,z),F!==null&&(t&&F.alternate!==null&&H.delete(F.key===null?Y:F.key),r=l(F,r,Y),W===null?B=F:W.sibling=F,W=F);return t&&H.forEach(function(fg){return e(f,fg)}),K&&Be(f,Y),B}function lt(f,r,g,z){if(typeof g=="object"&&g!==null&&g.type===Ht&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yt:t:{for(var B=g.key;r!==null;){if(r.key===B){if(B=g.type,B===Ht){if(r.tag===7){a(f,r.sibling),z=n(r,g.props.children),z.return=f,f=z;break t}}else if(r.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ve&&Na(B)===r.type){a(f,r.sibling),z=n(r,g.props),Ji(z,g),z.return=f,f=z;break t}a(f,r);break}else e(f,r);r=r.sibling}g.type===Ht?(z=Ca(g.props.children,f.mode,z,g.key),z.return=f,f=z):(z=$n(g.type,g.key,g.props,null,f.mode,z),Ji(z,g),z.return=f,f=z)}return c(f);case I:t:{for(B=g.key;r!==null;){if(r.key===B)if(r.tag===4&&r.stateNode.containerInfo===g.containerInfo&&r.stateNode.implementation===g.implementation){a(f,r.sibling),z=n(r,g.children||[]),z.return=f,f=z;break t}else{a(f,r);break}else e(f,r);r=r.sibling}z=Hc(g,f.mode,z),z.return=f,f=z}return c(f);case ve:return g=Na(g),lt(f,r,g,z)}if(De(g))return D(f,r,g,z);if(ue(g)){if(B=ue(g),typeof B!="function")throw Error(p(150));return g=B.call(g),N(f,r,g,z)}if(typeof g.then=="function")return lt(f,r,el(g),z);if(g.$$typeof===gt)return lt(f,r,Fn(f,g),z);al(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,r!==null&&r.tag===6?(a(f,r.sibling),z=n(r,g),z.return=f,f=z):(a(f,r),z=Oc(g,f.mode,z),z.return=f,f=z),c(f)):a(f,r)}return function(f,r,g,z){try{$i=0;var B=lt(f,r,g,z);return di=null,B}catch(H){if(H===fi||H===Pn)throw H;var W=te(29,H,null,f.mode);return W.lanes=z,W.return=f,W}finally{}}}var qa=Ns(!0),_s=Ns(!1),na=!1;function Vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function la(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ca(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(P&2)!==0){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,e=Kn(t),vs(t,null,a),e}return Zn(t,i,e,a),Kn(t)}function Wi(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,jo(t,a)}}function Zc(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?n=l=c:l=l.next=c,a=a.next}while(a!==null);l===null?n=l=e:l=l.next=e}else n=l=e;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Kc=!1;function Fi(){if(Kc){var t=ri;if(t!==null)throw t}}function Ii(t,e,a,i){Kc=!1;var n=t.updateQueue;na=!1;var l=n.firstBaseUpdate,c=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var s=u,m=s.next;s.next=null,c===null?l=m:c.next=m,c=s;var S=t.alternate;S!==null&&(S=S.updateQueue,u=S.lastBaseUpdate,u!==c&&(u===null?S.firstBaseUpdate=m:u.next=m,S.lastBaseUpdate=s))}if(l!==null){var A=n.baseState;c=0,S=m=s=null,u=l;do{var y=u.lane&-536870913,b=y!==u.lane;if(b?(L&y)===y:(i&y)===y){y!==0&&y===si&&(Kc=!0),S!==null&&(S=S.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});t:{var D=t,N=u;y=e;var lt=a;switch(N.tag){case 1:if(D=N.payload,typeof D=="function"){A=D.call(lt,A,y);break t}A=D;break t;case 3:D.flags=D.flags&-65537|128;case 0:if(D=N.payload,y=typeof D=="function"?D.call(lt,A,y):D,y==null)break t;A=M({},A,y);break t;case 2:na=!0}}y=u.callback,y!==null&&(t.flags|=64,b&&(t.flags|=8192),b=n.callbacks,b===null?n.callbacks=[y]:b.push(y))}else b={lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},S===null?(m=S=b,s=A):S=S.next=b,c|=y;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;b=u,u=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);S===null&&(s=A),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=S,l===null&&(n.shared.lanes=0),fa|=c,t.lanes=c,t.memoizedState=A}}function qs(t,e){if(typeof t!="function")throw Error(p(191,t));t.call(e)}function ks(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)qs(a[t],e)}var pi=Gt(null),il=Gt(0);function Gs(t,e){t=Le,tt(il,t),tt(pi,e),Le=t|e.baseLanes}function $c(){tt(il,Le),tt(pi,pi.current)}function Jc(){Le=il.current,mt(pi),mt(il)}var ee=Gt(null),me=null;function ua(t){var e=t.alternate;tt(vt,vt.current&1),tt(ee,t),me===null&&(e===null||pi.current!==null||e.memoizedState!==null)&&(me=t)}function Wc(t){tt(vt,vt.current),tt(ee,t),me===null&&(me=t)}function Rs(t){t.tag===22?(tt(vt,vt.current),tt(ee,t),me===null&&(me=t)):oa()}function oa(){tt(vt,vt.current),tt(ee,ee.current)}function ae(t){mt(ee),me===t&&(me=null),mt(vt)}var vt=Gt(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ao(a)||io(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qe=0,G=null,it=null,zt=null,ll=!1,gi=!1,ka=!1,cl=0,Pi=0,mi=null,ep=0;function ht(){throw Error(p(321))}function Fc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Pt(t[a],e[a]))return!1;return!0}function Ic(t,e,a,i,n,l){return qe=l,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,T.H=t===null||t.memoizedState===null?Tr:pu,ka=!1,l=a(i,n),ka=!1,gi&&(l=Xs(e,a,i,n)),Ys(t),l}function Ys(t){T.H=an;var e=it!==null&&it.next!==null;if(qe=0,zt=it=G=null,ll=!1,Pi=0,mi=null,e)throw Error(p(300));t===null||Tt||(t=t.dependencies,t!==null&&Wn(t)&&(Tt=!0))}function Xs(t,e,a,i){G=t;var n=0;do{if(gi&&(mi=null),Pi=0,gi=!1,25<=n)throw Error(p(301));if(n+=1,zt=it=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}T.H=Ar,l=e(a,i)}while(gi);return l}function ap(){var t=T.H,e=t.useState()[0];return e=typeof e.then=="function"?tn(e):e,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(G.flags|=1024),e}function Pc(){var t=cl!==0;return cl=0,t}function tu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function eu(t){if(ll){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ll=!1}qe=0,zt=it=G=null,gi=!1,Pi=cl=0,mi=null}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?G.memoizedState=zt=t:zt=zt.next=t,zt}function xt(){if(it===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=zt===null?G.memoizedState:zt.next;if(e!==null)zt=e,it=t;else{if(t===null)throw G.alternate===null?Error(p(467)):Error(p(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},zt===null?G.memoizedState=zt=t:zt=zt.next=t}return zt}function ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tn(t){var e=Pi;return Pi+=1,mi===null&&(mi=[]),t=Hs(mi,t,e),e=G,(zt===null?e.memoizedState:zt.next)===null&&(e=e.alternate,T.H=e===null||e.memoizedState===null?Tr:pu),t}function ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tn(t);if(t.$$typeof===gt)return Nt(t)}throw Error(p(438,String(t)))}function au(t){var e=null,a=G.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=G.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ul(),G.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=An;return e.index++,a}function ke(t,e){return typeof e=="function"?e(t):e}function sl(t){var e=xt();return iu(e,it,t)}function iu(t,e,a){var i=t.queue;if(i===null)throw Error(p(311));i.lastRenderedReducer=a;var n=t.baseQueue,l=i.pending;if(l!==null){if(n!==null){var c=n.next;n.next=l.next,l.next=c}e.baseQueue=n=l,i.pending=null}if(l=t.baseState,n===null)t.memoizedState=l;else{e=n.next;var u=c=null,s=null,m=e,S=!1;do{var A=m.lane&-536870913;if(A!==m.lane?(L&A)===A:(qe&A)===A){var y=m.revertLane;if(y===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),A===si&&(S=!0);else if((qe&y)===y){m=m.next,y===si&&(S=!0);continue}else A={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(u=s=A,c=l):s=s.next=A,G.lanes|=y,fa|=y;A=m.action,ka&&a(l,A),l=m.hasEagerState?m.eagerState:a(l,A)}else y={lane:A,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(u=s=y,c=l):s=s.next=y,G.lanes|=A,fa|=A;m=m.next}while(m!==null&&m!==e);if(s===null?c=l:s.next=u,!Pt(l,t.memoizedState)&&(Tt=!0,S&&(a=ri,a!==null)))throw a;t.memoizedState=l,t.baseState=c,t.baseQueue=s,i.lastRenderedState=l}return n===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function nu(t){var e=xt(),a=e.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=t;var i=a.dispatch,n=a.pending,l=e.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do l=t(l,c.action),c=c.next;while(c!==n);Pt(l,e.memoizedState)||(Tt=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),a.lastRenderedState=l}return[l,i]}function Qs(t,e,a){var i=G,n=xt(),l=K;if(l){if(a===void 0)throw Error(p(407));a=a()}else a=e();var c=!Pt((it||n).memoizedState,a);if(c&&(n.memoizedState=a,Tt=!0),n=n.queue,uu(Zs.bind(null,i,n,t),[t]),n.getSnapshot!==e||c||zt!==null&&zt.memoizedState.tag&1){if(i.flags|=2048,hi(9,{destroy:void 0},Ls.bind(null,i,n,a,e),null),ct===null)throw Error(p(349));l||(qe&127)!==0||Vs(i,e,a)}return a}function Vs(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=G.updateQueue,e===null?(e=ul(),G.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Ls(t,e,a,i){e.value=a,e.getSnapshot=i,Ks(e)&&$s(t)}function Zs(t,e,a){return a(function(){Ks(e)&&$s(t)})}function Ks(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Pt(t,a)}catch{return!0}}function $s(t){var e=Da(t,2);e!==null&&$t(e,t,2)}function lu(t){var e=Rt();if(typeof t=="function"){var a=t;if(t=a(),ka){Fe(!0);try{a()}finally{Fe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:t},e}function Js(t,e,a,i){return t.baseState=a,iu(t,it,typeof i=="function"?i:ke)}function ip(t,e,a,i,n){if(dl(t))throw Error(p(485));if(t=e.action,t!==null){var l={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){l.listeners.push(c)}};T.T!==null?a(!0):l.isTransition=!1,i(l),a=e.pending,a===null?(l.next=e.pending=l,Ws(e,l)):(l.next=a.next,e.pending=a.next=l)}}function Ws(t,e){var a=e.action,i=e.payload,n=t.state;if(e.isTransition){var l=T.T,c={};T.T=c;try{var u=a(n,i),s=T.S;s!==null&&s(c,u),Fs(t,e,u)}catch(m){cu(t,e,m)}finally{l!==null&&c.types!==null&&(l.types=c.types),T.T=l}}else try{l=a(n,i),Fs(t,e,l)}catch(m){cu(t,e,m)}}function Fs(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){Is(t,e,i)},function(i){return cu(t,e,i)}):Is(t,e,a)}function Is(t,e,a){e.status="fulfilled",e.value=a,Ps(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Ws(t,a)))}function cu(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,Ps(e),e=e.next;while(e!==i)}t.action=null}function Ps(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function tr(t,e){return e}function er(t,e){if(K){var a=ct.formState;if(a!==null){t:{var i=G;if(K){if(rt){e:{for(var n=rt,l=ge;n.nodeType!==8;){if(!l){n=null;break e}if(n=he(n.nextSibling),n===null){n=null;break e}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){rt=he(n.nextSibling),i=n.data==="F!";break t}}aa(i)}i=!1}i&&(e=a[0])}}return a=Rt(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},a.queue=i,a=xr.bind(null,G,i),i.dispatch=a,i=lu(!1),l=du.bind(null,G,!1,i.queue),i=Rt(),n={state:e,dispatch:null,action:t,pending:null},i.queue=n,a=ip.bind(null,G,n,l,a),n.dispatch=a,i.memoizedState=t,[e,a,!1]}function ar(t){var e=xt();return ir(e,it,t)}function ir(t,e,a){if(e=iu(t,e,tr)[0],t=sl(ke)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=tn(e)}catch(c){throw c===fi?Pn:c}else i=e;e=xt();var n=e.queue,l=n.dispatch;return a!==e.memoizedState&&(G.flags|=2048,hi(9,{destroy:void 0},np.bind(null,n,a),null)),[i,l,t]}function np(t,e){t.action=e}function nr(t){var e=xt(),a=it;if(a!==null)return ir(e,a,t);xt(),e=e.memoizedState,a=xt();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function hi(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=G.updateQueue,e===null&&(e=ul(),G.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function lr(){return xt().memoizedState}function rl(t,e,a,i){var n=Rt();G.flags|=t,n.memoizedState=hi(1|e,{destroy:void 0},a,i===void 0?null:i)}function fl(t,e,a,i){var n=xt();i=i===void 0?null:i;var l=n.memoizedState.inst;it!==null&&i!==null&&Fc(i,it.memoizedState.deps)?n.memoizedState=hi(e,l,a,i):(G.flags|=t,n.memoizedState=hi(1|e,l,a,i))}function cr(t,e){rl(8390656,8,t,e)}function uu(t,e){fl(2048,8,t,e)}function lp(t){G.flags|=4;var e=G.updateQueue;if(e===null)e=ul(),G.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function ur(t){var e=xt().memoizedState;return lp({ref:e,nextImpl:t}),function(){if((P&2)!==0)throw Error(p(440));return e.impl.apply(void 0,arguments)}}function or(t,e){return fl(4,2,t,e)}function sr(t,e){return fl(4,4,t,e)}function rr(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fr(t,e,a){a=a!=null?a.concat([t]):null,fl(4,4,rr.bind(null,e,t),a)}function ou(){}function dr(t,e){var a=xt();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&Fc(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function pr(t,e){var a=xt();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&Fc(e,i[1]))return i[0];if(i=t(),ka){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[i,e],i}function su(t,e,a){return a===void 0||(qe&1073741824)!==0&&(L&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=mf(),G.lanes|=t,fa|=t,a)}function gr(t,e,a,i){return Pt(a,e)?a:pi.current!==null?(t=su(t,a,i),Pt(t,e)||(Tt=!0),t):(qe&42)===0||(qe&1073741824)!==0&&(L&261930)===0?(Tt=!0,t.memoizedState=a):(t=mf(),G.lanes|=t,fa|=t,e)}function mr(t,e,a,i,n){var l=j.p;j.p=l!==0&&8>l?l:8;var c=T.T,u={};T.T=u,du(t,!1,e,a);try{var s=n(),m=T.S;if(m!==null&&m(u,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var S=tp(s,i);en(t,e,S,le(t))}else en(t,e,i,le(t))}catch(A){en(t,e,{then:function(){},status:"rejected",reason:A},le())}finally{j.p=l,c!==null&&u.types!==null&&(c.types=u.types),T.T=c}}function cp(){}function ru(t,e,a,i){if(t.tag!==5)throw Error(p(476));var n=hr(t).queue;mr(t,n,e,k,a===null?cp:function(){return yr(t),a(i)})}function hr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:k},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function yr(t){var e=hr(t);e.next===null&&(e=t.alternate.memoizedState),en(t,e.next.queue,{},le())}function fu(){return Nt(vn)}function br(){return xt().memoizedState}function vr(){return xt().memoizedState}function up(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=le();t=la(a);var i=ca(e,t,a);i!==null&&($t(i,e,a),Wi(i,e,a)),e={cache:Rc()},t.payload=e;return}e=e.return}}function op(t,e,a){var i=le();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},dl(t)?Sr(e,a):(a=Dc(t,e,a,i),a!==null&&($t(a,t,i),zr(a,e,i)))}function xr(t,e,a){var i=le();en(t,e,a,i)}function en(t,e,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(t))Sr(e,n);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var c=e.lastRenderedState,u=l(c,a);if(n.hasEagerState=!0,n.eagerState=u,Pt(u,c))return Zn(t,e,n,0),ct===null&&Ln(),!1}catch{}finally{}if(a=Dc(t,e,n,i),a!==null)return $t(a,t,i),zr(a,e,i),!0}return!1}function du(t,e,a,i){if(i={lane:2,revertLane:Vu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},dl(t)){if(e)throw Error(p(479))}else e=Dc(t,a,i,2),e!==null&&$t(e,t,2)}function dl(t){var e=t.alternate;return t===G||e!==null&&e===G}function Sr(t,e){gi=ll=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function zr(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,jo(t,a)}}var an={readContext:Nt,use:ol,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht};an.useEffectEvent=ht;var Tr={readContext:Nt,use:ol,useCallback:function(t,e){return Rt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:cr,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,rl(4194308,4,rr.bind(null,e,t),a)},useLayoutEffect:function(t,e){return rl(4194308,4,t,e)},useInsertionEffect:function(t,e){rl(4,2,t,e)},useMemo:function(t,e){var a=Rt();e=e===void 0?null:e;var i=t();if(ka){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=Rt();if(a!==void 0){var n=a(e);if(ka){Fe(!0);try{a(e)}finally{Fe(!1)}}}else n=e;return i.memoizedState=i.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},i.queue=t,t=t.dispatch=op.bind(null,G,t),[i.memoizedState,t]},useRef:function(t){var e=Rt();return t={current:t},e.memoizedState=t},useState:function(t){t=lu(t);var e=t.queue,a=xr.bind(null,G,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:ou,useDeferredValue:function(t,e){var a=Rt();return su(a,t,e)},useTransition:function(){var t=lu(!1);return t=mr.bind(null,G,t.queue,!0,!1),Rt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=G,n=Rt();if(K){if(a===void 0)throw Error(p(407));a=a()}else{if(a=e(),ct===null)throw Error(p(349));(L&127)!==0||Vs(i,e,a)}n.memoizedState=a;var l={value:a,getSnapshot:e};return n.queue=l,cr(Zs.bind(null,i,l,t),[t]),i.flags|=2048,hi(9,{destroy:void 0},Ls.bind(null,i,l,a,e),null),a},useId:function(){var t=Rt(),e=ct.identifierPrefix;if(K){var a=Ee,i=we;a=(i&~(1<<32-It(i)-1)).toString(32)+a,e="_"+e+"R_"+a,a=cl++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=ep++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:fu,useFormState:er,useActionState:er,useOptimistic:function(t){var e=Rt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=du.bind(null,G,!0,a),a.dispatch=e,[t,e]},useMemoCache:au,useCacheRefresh:function(){return Rt().memoizedState=up.bind(null,G)},useEffectEvent:function(t){var e=Rt(),a={impl:t};return e.memoizedState=a,function(){if((P&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}},pu={readContext:Nt,use:ol,useCallback:dr,useContext:Nt,useEffect:uu,useImperativeHandle:fr,useInsertionEffect:or,useLayoutEffect:sr,useMemo:pr,useReducer:sl,useRef:lr,useState:function(){return sl(ke)},useDebugValue:ou,useDeferredValue:function(t,e){var a=xt();return gr(a,it.memoizedState,t,e)},useTransition:function(){var t=sl(ke)[0],e=xt().memoizedState;return[typeof t=="boolean"?t:tn(t),e]},useSyncExternalStore:Qs,useId:br,useHostTransitionStatus:fu,useFormState:ar,useActionState:ar,useOptimistic:function(t,e){var a=xt();return Js(a,it,t,e)},useMemoCache:au,useCacheRefresh:vr};pu.useEffectEvent=ur;var Ar={readContext:Nt,use:ol,useCallback:dr,useContext:Nt,useEffect:uu,useImperativeHandle:fr,useInsertionEffect:or,useLayoutEffect:sr,useMemo:pr,useReducer:nu,useRef:lr,useState:function(){return nu(ke)},useDebugValue:ou,useDeferredValue:function(t,e){var a=xt();return it===null?su(a,t,e):gr(a,it.memoizedState,t,e)},useTransition:function(){var t=nu(ke)[0],e=xt().memoizedState;return[typeof t=="boolean"?t:tn(t),e]},useSyncExternalStore:Qs,useId:br,useHostTransitionStatus:fu,useFormState:nr,useActionState:nr,useOptimistic:function(t,e){var a=xt();return it!==null?Js(a,it,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:au,useCacheRefresh:vr};Ar.useEffectEvent=ur;function gu(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:M({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var mu={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=le(),n=la(i);n.payload=e,a!=null&&(n.callback=a),e=ca(t,n,i),e!==null&&($t(e,t,i),Wi(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=le(),n=la(i);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=ca(t,n,i),e!==null&&($t(e,t,i),Wi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=le(),i=la(a);i.tag=2,e!=null&&(i.callback=e),e=ca(t,i,a),e!==null&&($t(e,t,a),Wi(e,t,a))}};function wr(t,e,a,i,n,l,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,l,c):e.prototype&&e.prototype.isPureReactComponent?!Xi(a,i)||!Xi(n,l):!0}function Er(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&mu.enqueueReplaceState(e,e.state,null)}function Ga(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=M({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function jr(t){Vn(t)}function Mr(t){console.error(t)}function Dr(t){Vn(t)}function pl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Cr(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function hu(t,e,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,e)},a}function Or(t){return t=la(t),t.tag=3,t}function Hr(t,e,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var l=i.value;t.payload=function(){return n(l)},t.callback=function(){Cr(e,a,i)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){Cr(e,a,i),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var u=i.stack;this.componentDidCatch(i.value,{componentStack:u!==null?u:""})})}function sp(t,e,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&oi(e,a,n,!0),a=ee.current,a!==null){switch(a.tag){case 31:case 13:return me===null?wl():a.alternate===null&&yt===0&&(yt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===tl?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),Yu(t,i,n)),!1;case 22:return a.flags|=65536,i===tl?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),Yu(t,i,n)),!1}throw Error(p(435,a.tag))}return Yu(t,i,n),wl(),!1}if(K)return e=ee.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,i!==Nc&&(t=Error(p(422),{cause:i}),Li(fe(t,a)))):(i!==Nc&&(e=Error(p(423),{cause:i}),Li(fe(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,i=fe(i,a),n=hu(t.stateNode,i,n),Zc(t,n),yt!==4&&(yt=2)),!1;var l=Error(p(520),{cause:i});if(l=fe(l,a),fn===null?fn=[l]:fn.push(l),yt!==4&&(yt=2),e===null)return!0;i=fe(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=hu(a.stateNode,i,t),Zc(a,t),!1;case 1:if(e=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Or(n),Hr(n,t,a,i),Zc(a,n),!1}a=a.return}while(a!==null);return!1}var yu=Error(p(461)),Tt=!1;function _t(t,e,a,i){e.child=t===null?_s(e,null,a,i):qa(e,t.child,a,i)}function Ur(t,e,a,i,n){a=a.render;var l=e.ref;if("ref"in i){var c={};for(var u in i)u!=="ref"&&(c[u]=i[u])}else c=i;return Ua(e),i=Ic(t,e,a,c,l,n),u=Pc(),t!==null&&!Tt?(tu(t,e,n),Ge(t,e,n)):(K&&u&&Uc(e),e.flags|=1,_t(t,e,i,n),e.child)}function Br(t,e,a,i,n){if(t===null){var l=a.type;return typeof l=="function"&&!Cc(l)&&l.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=l,Nr(t,e,l,i,n)):(t=$n(a.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!wu(t,n)){var c=l.memoizedProps;if(a=a.compare,a=a!==null?a:Xi,a(c,i)&&t.ref===e.ref)return Ge(t,e,n)}return e.flags|=1,t=Ue(l,i),t.ref=e.ref,t.return=e,e.child=t}function Nr(t,e,a,i,n){if(t!==null){var l=t.memoizedProps;if(Xi(l,i)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=i=l,wu(t,n))(t.flags&131072)!==0&&(Tt=!0);else return e.lanes=t.lanes,Ge(t,e,n)}return bu(t,e,a,i,n)}function _r(t,e,a,i){var n=i.children,l=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,t!==null){for(i=e.child=t.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~l}else i=0,e.child=null;return qr(t,e,l,a,i)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&In(e,l!==null?l.cachePool:null),l!==null?Gs(e,l):$c(),Rs(e);else return i=e.lanes=536870912,qr(t,e,l!==null?l.baseLanes|a:a,a,i)}else l!==null?(In(e,l.cachePool),Gs(e,l),oa(),e.memoizedState=null):(t!==null&&In(e,null),$c(),oa());return _t(t,e,n,a),e.child}function nn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function qr(t,e,a,i,n){var l=Xc();return l=l===null?null:{parent:St._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&In(e,null),$c(),Rs(e),t!==null&&oi(t,e,i,!0),e.childLanes=n,null}function gl(t,e){return e=hl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function kr(t,e,a){return qa(e,t.child,null,a),t=gl(e,e.pendingProps),t.flags|=2,ae(e),e.memoizedState=null,t}function rp(t,e,a){var i=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(K){if(i.mode==="hidden")return t=gl(e,i),e.lanes=536870912,nn(null,t);if(Wc(e),(t=rt)?(t=Ff(t,ge),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ta!==null?{id:we,overflow:Ee}:null,retryLane:536870912,hydrationErrors:null},a=Ss(t),a.return=e,e.child=a,Bt=e,rt=null)):t=null,t===null)throw aa(e);return e.lanes=536870912,null}return gl(e,i)}var l=t.memoizedState;if(l!==null){var c=l.dehydrated;if(Wc(e),n)if(e.flags&256)e.flags&=-257,e=kr(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(p(558));else if(Tt||oi(t,e,a,!1),n=(a&t.childLanes)!==0,Tt||n){if(i=ct,i!==null&&(c=Mo(i,a),c!==0&&c!==l.retryLane))throw l.retryLane=c,Da(t,c),$t(i,t,c),yu;wl(),e=kr(t,e,a)}else t=l.treeContext,rt=he(c.nextSibling),Bt=e,K=!0,ea=null,ge=!1,t!==null&&As(e,t),e=gl(e,i),e.flags|=4096;return e}return t=Ue(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ml(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(p(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function bu(t,e,a,i,n){return Ua(e),a=Ic(t,e,a,i,void 0,n),i=Pc(),t!==null&&!Tt?(tu(t,e,n),Ge(t,e,n)):(K&&i&&Uc(e),e.flags|=1,_t(t,e,a,n),e.child)}function Gr(t,e,a,i,n,l){return Ua(e),e.updateQueue=null,a=Xs(e,i,a,n),Ys(t),i=Pc(),t!==null&&!Tt?(tu(t,e,l),Ge(t,e,l)):(K&&i&&Uc(e),e.flags|=1,_t(t,e,a,l),e.child)}function Rr(t,e,a,i,n){if(Ua(e),e.stateNode===null){var l=ni,c=a.contextType;typeof c=="object"&&c!==null&&(l=Nt(c)),l=new a(i,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=mu,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=i,l.state=e.memoizedState,l.refs={},Vc(e),c=a.contextType,l.context=typeof c=="object"&&c!==null?Nt(c):ni,l.state=e.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(gu(e,a,c,i),l.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(c=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),c!==l.state&&mu.enqueueReplaceState(l,l.state,null),Ii(e,i,l,n),Fi(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){l=e.stateNode;var u=e.memoizedProps,s=Ga(a,u);l.props=s;var m=l.context,S=a.contextType;c=ni,typeof S=="object"&&S!==null&&(c=Nt(S));var A=a.getDerivedStateFromProps;S=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,S||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||m!==c)&&Er(e,l,i,c),na=!1;var y=e.memoizedState;l.state=y,Ii(e,i,l,n),Fi(),m=e.memoizedState,u||y!==m||na?(typeof A=="function"&&(gu(e,a,A,i),m=e.memoizedState),(s=na||wr(e,a,s,i,y,m,c))?(S||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=m),l.props=i,l.state=m,l.context=c,i=s):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Lc(t,e),c=e.memoizedProps,S=Ga(a,c),l.props=S,A=e.pendingProps,y=l.context,m=a.contextType,s=ni,typeof m=="object"&&m!==null&&(s=Nt(m)),u=a.getDerivedStateFromProps,(m=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==A||y!==s)&&Er(e,l,i,s),na=!1,y=e.memoizedState,l.state=y,Ii(e,i,l,n),Fi();var b=e.memoizedState;c!==A||y!==b||na||t!==null&&t.dependencies!==null&&Wn(t.dependencies)?(typeof u=="function"&&(gu(e,a,u,i),b=e.memoizedState),(S=na||wr(e,a,S,i,y,b,s)||t!==null&&t.dependencies!==null&&Wn(t.dependencies))?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,b,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,b,s)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=b),l.props=i,l.state=b,l.context=s,i=S):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),i=!1)}return l=i,ml(t,e),i=(e.flags&128)!==0,l||i?(l=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&i?(e.child=qa(e,t.child,null,n),e.child=qa(e,null,a,n)):_t(t,e,a,n),e.memoizedState=l.state,t=e.child):t=Ge(t,e,n),t}function Yr(t,e,a,i){return Oa(),e.flags|=256,_t(t,e,a,i),e.child}var vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xu(t){return{baseLanes:t,cachePool:Cs()}}function Su(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=ne),t}function Xr(t,e,a){var i=e.pendingProps,n=!1,l=(e.flags&128)!==0,c;if((c=l)||(c=t!==null&&t.memoizedState===null?!1:(vt.current&2)!==0),c&&(n=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(K){if(n?ua(e):oa(),(t=rt)?(t=Ff(t,ge),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ta!==null?{id:we,overflow:Ee}:null,retryLane:536870912,hydrationErrors:null},a=Ss(t),a.return=e,e.child=a,Bt=e,rt=null)):t=null,t===null)throw aa(e);return io(t)?e.lanes=32:e.lanes=536870912,null}var u=i.children;return i=i.fallback,n?(oa(),n=e.mode,u=hl({mode:"hidden",children:u},n),i=Ca(i,n,a,null),u.return=e,i.return=e,u.sibling=i,e.child=u,i=e.child,i.memoizedState=xu(a),i.childLanes=Su(t,c,a),e.memoizedState=vu,nn(null,i)):(ua(e),zu(e,u))}var s=t.memoizedState;if(s!==null&&(u=s.dehydrated,u!==null)){if(l)e.flags&256?(ua(e),e.flags&=-257,e=Tu(t,e,a)):e.memoizedState!==null?(oa(),e.child=t.child,e.flags|=128,e=null):(oa(),u=i.fallback,n=e.mode,i=hl({mode:"visible",children:i.children},n),u=Ca(u,n,a,null),u.flags|=2,i.return=e,u.return=e,i.sibling=u,e.child=i,qa(e,t.child,null,a),i=e.child,i.memoizedState=xu(a),i.childLanes=Su(t,c,a),e.memoizedState=vu,e=nn(null,i));else if(ua(e),io(u)){if(c=u.nextSibling&&u.nextSibling.dataset,c)var m=c.dgst;c=m,i=Error(p(419)),i.stack="",i.digest=c,Li({value:i,source:null,stack:null}),e=Tu(t,e,a)}else if(Tt||oi(t,e,a,!1),c=(a&t.childLanes)!==0,Tt||c){if(c=ct,c!==null&&(i=Mo(c,a),i!==0&&i!==s.retryLane))throw s.retryLane=i,Da(t,i),$t(c,t,i),yu;ao(u)||wl(),e=Tu(t,e,a)}else ao(u)?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,rt=he(u.nextSibling),Bt=e,K=!0,ea=null,ge=!1,t!==null&&As(e,t),e=zu(e,i.children),e.flags|=4096);return e}return n?(oa(),u=i.fallback,n=e.mode,s=t.child,m=s.sibling,i=Ue(s,{mode:"hidden",children:i.children}),i.subtreeFlags=s.subtreeFlags&65011712,m!==null?u=Ue(m,u):(u=Ca(u,n,a,null),u.flags|=2),u.return=e,i.return=e,i.sibling=u,e.child=i,nn(null,i),i=e.child,u=t.child.memoizedState,u===null?u=xu(a):(n=u.cachePool,n!==null?(s=St._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Cs(),u={baseLanes:u.baseLanes|a,cachePool:n}),i.memoizedState=u,i.childLanes=Su(t,c,a),e.memoizedState=vu,nn(t.child,i)):(ua(e),a=t.child,t=a.sibling,a=Ue(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=a,e.memoizedState=null,a)}function zu(t,e){return e=hl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function hl(t,e){return t=te(22,t,null,e),t.lanes=0,t}function Tu(t,e,a){return qa(e,t.child,null,a),t=zu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qr(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),kc(t.return,e,a)}function Au(t,e,a,i,n,l){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:l}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=a,c.tailMode=n,c.treeForkCount=l)}function Vr(t,e,a){var i=e.pendingProps,n=i.revealOrder,l=i.tail;i=i.children;var c=vt.current,u=(c&2)!==0;if(u?(c=c&1|2,e.flags|=128):c&=1,tt(vt,c),_t(t,e,i,a),i=K?Vi:0,!u&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qr(t,a,e);else if(t.tag===19)Qr(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&nl(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),Au(e,!1,n,a,l,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&nl(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Au(e,!0,a,null,l,i);break;case"together":Au(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Ge(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),fa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(oi(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(p(153));if(e.child!==null){for(t=e.child,a=Ue(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ue(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function wu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Wn(t)))}function fp(t,e,a){switch(e.tag){case 3:jn(e,e.stateNode.containerInfo),ia(e,St,t.memoizedState.cache),Oa();break;case 27:case 5:Jl(e);break;case 4:jn(e,e.stateNode.containerInfo);break;case 10:ia(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Wc(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(ua(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Xr(t,e,a):(ua(e),t=Ge(t,e,a),t!==null?t.sibling:null);ua(e);break;case 19:var n=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(oi(t,e,a,!1),i=(a&e.childLanes)!==0),n){if(i)return Vr(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(vt,vt.current),i)break;return null;case 22:return e.lanes=0,_r(t,e,a,e.pendingProps);case 24:ia(e,St,t.memoizedState.cache)}return Ge(t,e,a)}function Lr(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Tt=!0;else{if(!wu(t,a)&&(e.flags&128)===0)return Tt=!1,fp(t,e,a);Tt=(t.flags&131072)!==0}else Tt=!1,K&&(e.flags&1048576)!==0&&Ts(e,Vi,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=Na(e.elementType),e.type=t,typeof t=="function")Cc(t)?(i=Ga(t,i),e.tag=1,e=Rr(null,e,t,i,a)):(e.tag=0,e=bu(null,e,t,i,a));else{if(t!=null){var n=t.$$typeof;if(n===Et){e.tag=11,e=Ur(null,e,t,i,a);break t}else if(n===be){e.tag=14,e=Br(null,e,t,i,a);break t}}throw e=Di(t)||t,Error(p(306,e,""))}}return e;case 0:return bu(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,n=Ga(i,e.pendingProps),Rr(t,e,i,n,a);case 3:t:{if(jn(e,e.stateNode.containerInfo),t===null)throw Error(p(387));i=e.pendingProps;var l=e.memoizedState;n=l.element,Lc(t,e),Ii(e,i,null,a);var c=e.memoizedState;if(i=c.cache,ia(e,St,i),i!==l.cache&&Gc(e,[St],a,!0),Fi(),i=c.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Yr(t,e,i,a);break t}else if(i!==n){n=fe(Error(p(424)),e),Li(n),e=Yr(t,e,i,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(rt=he(t.firstChild),Bt=e,K=!0,ea=null,ge=!0,a=_s(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Oa(),i===n){e=Ge(t,e,a);break t}_t(t,e,i,a)}e=e.child}return e;case 26:return ml(t,e),t===null?(a=id(e.type,null,e.pendingProps,null))?e.memoizedState=a:K||(a=e.type,t=e.pendingProps,i=Hl(We.current).createElement(a),i[Ut]=e,i[Xt]=t,qt(i,a,t),Mt(i),e.stateNode=i):e.memoizedState=id(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Jl(e),t===null&&K&&(i=e.stateNode=td(e.type,e.pendingProps,We.current),Bt=e,ge=!0,n=rt,ha(e.type)?(no=n,rt=he(i.firstChild)):rt=n),_t(t,e,e.pendingProps.children,a),ml(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&K&&((n=i=rt)&&(i=Yp(i,e.type,e.pendingProps,ge),i!==null?(e.stateNode=i,Bt=e,rt=he(i.firstChild),ge=!1,n=!0):n=!1),n||aa(e)),Jl(e),n=e.type,l=e.pendingProps,c=t!==null?t.memoizedProps:null,i=l.children,Pu(n,l)?i=null:c!==null&&Pu(n,c)&&(e.flags|=32),e.memoizedState!==null&&(n=Ic(t,e,ap,null,null,a),vn._currentValue=n),ml(t,e),_t(t,e,i,a),e.child;case 6:return t===null&&K&&((t=a=rt)&&(a=Xp(a,e.pendingProps,ge),a!==null?(e.stateNode=a,Bt=e,rt=null,t=!0):t=!1),t||aa(e)),null;case 13:return Xr(t,e,a);case 4:return jn(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qa(e,null,i,a):_t(t,e,i,a),e.child;case 11:return Ur(t,e,e.type,e.pendingProps,a);case 7:return _t(t,e,e.pendingProps,a),e.child;case 8:return _t(t,e,e.pendingProps.children,a),e.child;case 12:return _t(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,ia(e,e.type,i.value),_t(t,e,i.children,a),e.child;case 9:return n=e.type._context,i=e.pendingProps.children,Ua(e),n=Nt(n),i=i(n),e.flags|=1,_t(t,e,i,a),e.child;case 14:return Br(t,e,e.type,e.pendingProps,a);case 15:return Nr(t,e,e.type,e.pendingProps,a);case 19:return Vr(t,e,a);case 31:return rp(t,e,a);case 22:return _r(t,e,a,e.pendingProps);case 24:return Ua(e),i=Nt(St),t===null?(n=Xc(),n===null&&(n=ct,l=Rc(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=a),n=l),e.memoizedState={parent:i,cache:n},Vc(e),ia(e,St,n)):((t.lanes&a)!==0&&(Lc(t,e),Ii(e,null,null,a),Fi()),n=t.memoizedState,l=e.memoizedState,n.parent!==i?(n={parent:i,cache:i},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ia(e,St,i)):(i=l.cache,ia(e,St,i),i!==n.cache&&Gc(e,[St],a,!0))),_t(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(p(156,e.tag))}function Re(t){t.flags|=4}function Eu(t,e,a,i,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(vf())t.flags|=8192;else throw _a=tl,Qc}else t.flags&=-16777217}function Zr(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!od(e))if(vf())t.flags|=8192;else throw _a=tl,Qc}function yl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?wo():536870912,t.lanes|=e,xi|=e)}function ln(t,e){if(!K)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function dp(t,e,a){var i=e.pendingProps;switch(Bc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return ft(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),_e(St),Va(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ui(e)?Re(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,_c())),ft(e),null;case 26:var n=e.type,l=e.memoizedState;return t===null?(Re(e),l!==null?(ft(e),Zr(e,l)):(ft(e),Eu(e,n,null,i,a))):l?l!==t.memoizedState?(Re(e),ft(e),Zr(e,l)):(ft(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Re(e),ft(e),Eu(e,n,t,i,a)),null;case 27:if(Mn(e),a=We.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Re(e);else{if(!i){if(e.stateNode===null)throw Error(p(166));return ft(e),null}t=jt.current,ui(e)?ws(e):(t=td(n,i,a),e.stateNode=t,Re(e))}return ft(e),null;case 5:if(Mn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Re(e);else{if(!i){if(e.stateNode===null)throw Error(p(166));return ft(e),null}if(l=jt.current,ui(e))ws(e);else{var c=Hl(We.current);switch(l){case 1:l=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=c.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?c.createElement("select",{is:i.is}):c.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?c.createElement(n,{is:i.is}):c.createElement(n)}}l[Ut]=e,l[Xt]=i;t:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)l.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break t;for(;c.sibling===null;){if(c.return===null||c.return===e)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=l;t:switch(qt(l,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Re(e)}}return ft(e),Eu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Re(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(p(166));if(t=We.current,ui(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,n=Bt,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}t[Ut]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Qf(t.nodeValue,a)),t||aa(e,!0)}else t=Hl(t).createTextNode(i),t[Ut]=e,e.stateNode=t}return ft(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(i=ui(e),a!==null){if(t===null){if(!i)throw Error(p(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(557));t[Ut]=e}else Oa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ft(e),t=!1}else a=_c(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ae(e),e):(ae(e),null);if((e.flags&128)!==0)throw Error(p(558))}return ft(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ui(e),i!==null&&i.dehydrated!==null){if(t===null){if(!n)throw Error(p(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(p(317));n[Ut]=e}else Oa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ft(e),n=!1}else n=_c(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ae(e),e):(ae(e),null)}return ae(e),(e.flags&128)!==0?(e.lanes=a,e):(a=i!==null,t=t!==null&&t.memoizedState!==null,a&&(i=e.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==n&&(i.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),yl(e,e.updateQueue),ft(e),null);case 4:return Va(),t===null&&$u(e.stateNode.containerInfo),ft(e),null;case 10:return _e(e.type),ft(e),null;case 19:if(mt(vt),i=e.memoizedState,i===null)return ft(e),null;if(n=(e.flags&128)!==0,l=i.rendering,l===null)if(n)ln(i,!1);else{if(yt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=nl(t),l!==null){for(e.flags|=128,ln(i,!1),t=l.updateQueue,e.updateQueue=t,yl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)xs(a,t),a=a.sibling;return tt(vt,vt.current&1|2),K&&Be(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Wt()>zl&&(e.flags|=128,n=!0,ln(i,!1),e.lanes=4194304)}else{if(!n)if(t=nl(l),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,yl(e,t),ln(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return ft(e),null}else 2*Wt()-i.renderingStartTime>zl&&a!==536870912&&(e.flags|=128,n=!0,ln(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(t=i.last,t!==null?t.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Wt(),t.sibling=null,a=vt.current,tt(vt,n?a&1|2:a&1),K&&Be(e,i.treeForkCount),t):(ft(e),null);case 22:case 23:return ae(e),Jc(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),a=e.updateQueue,a!==null&&yl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&mt(Ba),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),_e(St),ft(e),null;case 25:return null;case 30:return null}throw Error(p(156,e.tag))}function pp(t,e){switch(Bc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _e(St),Va(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Mn(e),null;case 31:if(e.memoizedState!==null){if(ae(e),e.alternate===null)throw Error(p(340));Oa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ae(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(p(340));Oa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(vt),null;case 4:return Va(),null;case 10:return _e(e.type),null;case 22:case 23:return ae(e),Jc(),t!==null&&mt(Ba),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return _e(St),null;case 25:return null;default:return null}}function Kr(t,e){switch(Bc(e),e.tag){case 3:_e(St),Va();break;case 26:case 27:case 5:Mn(e);break;case 4:Va();break;case 31:e.memoizedState!==null&&ae(e);break;case 13:ae(e);break;case 19:mt(vt);break;case 10:_e(e.type);break;case 22:case 23:ae(e),Jc(),t!==null&&mt(Ba);break;case 24:_e(St)}}function cn(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&t)===t){i=void 0;var l=a.create,c=a.inst;i=l(),c.destroy=i}a=a.next}while(a!==n)}}catch(u){at(e,e.return,u)}}function sa(t,e,a){try{var i=e.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var l=n.next;i=l;do{if((i.tag&t)===t){var c=i.inst,u=c.destroy;if(u!==void 0){c.destroy=void 0,n=e;var s=a,m=u;try{m()}catch(S){at(n,s,S)}}}i=i.next}while(i!==l)}}catch(S){at(e,e.return,S)}}function $r(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{ks(e,a)}catch(i){at(t,t.return,i)}}}function Jr(t,e,a){a.props=Ga(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){at(t,e,i)}}function un(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(n){at(t,e,n)}}function je(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){at(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){at(t,e,n)}else a.current=null}function Wr(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){at(t,t.return,n)}}function ju(t,e,a){try{var i=t.stateNode;Np(i,t.type,a,e),i[Xt]=e}catch(n){at(t,t.return,n)}}function Fr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ha(t.type)||t.tag===4}function Mu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Fr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Du(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Oe));else if(i!==4&&(i===27&&ha(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Du(t,e,a),t=t.sibling;t!==null;)Du(t,e,a),t=t.sibling}function bl(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&ha(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(bl(t,e,a),t=t.sibling;t!==null;)bl(t,e,a),t=t.sibling}function Ir(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qt(e,i,a),e[Ut]=t,e[Xt]=a}catch(l){at(t,t.return,l)}}var Ye=!1,At=!1,Cu=!1,Pr=typeof WeakSet=="function"?WeakSet:Set,Dt=null;function gp(t,e){if(t=t.containerInfo,Fu=Gl,t=fs(t),Tc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break t}var c=0,u=-1,s=-1,m=0,S=0,A=t,y=null;e:for(;;){for(var b;A!==a||n!==0&&A.nodeType!==3||(u=c+n),A!==l||i!==0&&A.nodeType!==3||(s=c+i),A.nodeType===3&&(c+=A.nodeValue.length),(b=A.firstChild)!==null;)y=A,A=b;for(;;){if(A===t)break e;if(y===a&&++m===n&&(u=c),y===l&&++S===i&&(s=c),(b=A.nextSibling)!==null)break;A=y,y=A.parentNode}A=b}a=u===-1||s===-1?null:{start:u,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Iu={focusedElem:t,selectionRange:a},Gl=!1,Dt=e;Dt!==null;)if(e=Dt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Dt=t;else for(;Dt!==null;){switch(e=Dt,l=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,a=e,n=l.memoizedProps,l=l.memoizedState,i=a.stateNode;try{var D=Ga(a.type,n);t=i.getSnapshotBeforeUpdate(D,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(N){at(a,a.return,N)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)eo(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":eo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(p(163))}if(t=e.sibling,t!==null){t.return=e.return,Dt=t;break}Dt=e.return}}function tf(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Qe(t,a),i&4&&cn(5,a);break;case 1:if(Qe(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(c){at(a,a.return,c)}else{var n=Ga(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){at(a,a.return,c)}}i&64&&$r(a),i&512&&un(a,a.return);break;case 3:if(Qe(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{ks(t,e)}catch(c){at(a,a.return,c)}}break;case 27:e===null&&i&4&&Ir(a);case 26:case 5:Qe(t,a),e===null&&i&4&&Wr(a),i&512&&un(a,a.return);break;case 12:Qe(t,a);break;case 31:Qe(t,a),i&4&&nf(t,a);break;case 13:Qe(t,a),i&4&&lf(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Tp.bind(null,a),Qp(t,a))));break;case 22:if(i=a.memoizedState!==null||Ye,!i){e=e!==null&&e.memoizedState!==null||At,n=Ye;var l=At;Ye=i,(At=e)&&!l?Ve(t,a,(a.subtreeFlags&8772)!==0):Qe(t,a),Ye=n,At=l}break;case 30:break;default:Qe(t,a)}}function ef(t){var e=t.alternate;e!==null&&(t.alternate=null,ef(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&cc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pt=null,Vt=!1;function Xe(t,e,a){for(a=a.child;a!==null;)af(t,e,a),a=a.sibling}function af(t,e,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Ci,a)}catch{}switch(a.tag){case 26:At||je(a,e),Xe(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:At||je(a,e);var i=pt,n=Vt;ha(a.type)&&(pt=a.stateNode,Vt=!1),Xe(t,e,a),hn(a.stateNode),pt=i,Vt=n;break;case 5:At||je(a,e);case 6:if(i=pt,n=Vt,pt=null,Xe(t,e,a),pt=i,Vt=n,pt!==null)if(Vt)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(a.stateNode)}catch(l){at(a,e,l)}else try{pt.removeChild(a.stateNode)}catch(l){at(a,e,l)}break;case 18:pt!==null&&(Vt?(t=pt,Jf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Mi(t)):Jf(pt,a.stateNode));break;case 4:i=pt,n=Vt,pt=a.stateNode.containerInfo,Vt=!0,Xe(t,e,a),pt=i,Vt=n;break;case 0:case 11:case 14:case 15:sa(2,a,e),At||sa(4,a,e),Xe(t,e,a);break;case 1:At||(je(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Jr(a,e,i)),Xe(t,e,a);break;case 21:Xe(t,e,a);break;case 22:At=(i=At)||a.memoizedState!==null,Xe(t,e,a),At=i;break;default:Xe(t,e,a)}}function nf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Mi(t)}catch(a){at(e,e.return,a)}}}function lf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Mi(t)}catch(a){at(e,e.return,a)}}function mp(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Pr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Pr),e;default:throw Error(p(435,t.tag))}}function vl(t,e){var a=mp(t);e.forEach(function(i){if(!a.has(i)){a.add(i);var n=Ap.bind(null,t,i);i.then(n,n)}})}function Lt(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],l=t,c=e,u=c;t:for(;u!==null;){switch(u.tag){case 27:if(ha(u.type)){pt=u.stateNode,Vt=!1;break t}break;case 5:pt=u.stateNode,Vt=!1;break t;case 3:case 4:pt=u.stateNode.containerInfo,Vt=!0;break t}u=u.return}if(pt===null)throw Error(p(160));af(l,c,n),pt=null,Vt=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)cf(e,t),e=e.sibling}var Se=null;function cf(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Lt(e,t),Zt(t),i&4&&(sa(3,t,t.return),cn(3,t),sa(5,t,t.return));break;case 1:Lt(e,t),Zt(t),i&512&&(At||a===null||je(a,a.return)),i&64&&Ye&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=Se;if(Lt(e,t),Zt(t),i&512&&(At||a===null||je(a,a.return)),i&4){var l=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(i){case"title":l=n.getElementsByTagName("title")[0],(!l||l[Ui]||l[Ut]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(i),n.head.insertBefore(l,n.querySelector("head > title"))),qt(l,i,a),l[Ut]=t,Mt(l),i=l;break t;case"link":var c=cd("link","href",n).get(i+(a.href||""));if(c){for(var u=0;u<c.length;u++)if(l=c[u],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(u,1);break e}}l=n.createElement(i),qt(l,i,a),n.head.appendChild(l);break;case"meta":if(c=cd("meta","content",n).get(i+(a.content||""))){for(u=0;u<c.length;u++)if(l=c[u],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(u,1);break e}}l=n.createElement(i),qt(l,i,a),n.head.appendChild(l);break;default:throw Error(p(468,i))}l[Ut]=t,Mt(l),i=l}t.stateNode=i}else ud(n,t.type,t.stateNode);else t.stateNode=ld(n,i,t.memoizedProps);else l!==i?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,i===null?ud(n,t.type,t.stateNode):ld(n,i,t.memoizedProps)):i===null&&t.stateNode!==null&&ju(t,t.memoizedProps,a.memoizedProps)}break;case 27:Lt(e,t),Zt(t),i&512&&(At||a===null||je(a,a.return)),a!==null&&i&4&&ju(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Lt(e,t),Zt(t),i&512&&(At||a===null||je(a,a.return)),t.flags&32){n=t.stateNode;try{Fa(n,"")}catch(D){at(t,t.return,D)}}i&4&&t.stateNode!=null&&(n=t.memoizedProps,ju(t,n,a!==null?a.memoizedProps:n)),i&1024&&(Cu=!0);break;case 6:if(Lt(e,t),Zt(t),i&4){if(t.stateNode===null)throw Error(p(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(D){at(t,t.return,D)}}break;case 3:if(Nl=null,n=Se,Se=Ul(e.containerInfo),Lt(e,t),Se=n,Zt(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Mi(e.containerInfo)}catch(D){at(t,t.return,D)}Cu&&(Cu=!1,uf(t));break;case 4:i=Se,Se=Ul(t.stateNode.containerInfo),Lt(e,t),Zt(t),Se=i;break;case 12:Lt(e,t),Zt(t);break;case 31:Lt(e,t),Zt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vl(t,i)));break;case 13:Lt(e,t),Zt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Sl=Wt()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vl(t,i)));break;case 22:n=t.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,m=Ye,S=At;if(Ye=m||n,At=S||s,Lt(e,t),At=S,Ye=m,Zt(t),i&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||s||Ye||At||Ra(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){s=a=e;try{if(l=s.stateNode,n)c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{u=s.stateNode;var A=s.memoizedProps.style,y=A!=null&&A.hasOwnProperty("display")?A.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(D){at(s,s.return,D)}}}else if(e.tag===6){if(a===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(D){at(s,s.return,D)}}}else if(e.tag===18){if(a===null){s=e;try{var b=s.stateNode;n?Wf(b,!0):Wf(s.stateNode,!1)}catch(D){at(s,s.return,D)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,vl(t,a))));break;case 19:Lt(e,t),Zt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vl(t,i)));break;case 30:break;case 21:break;default:Lt(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if(Fr(i)){a=i;break}i=i.return}if(a==null)throw Error(p(160));switch(a.tag){case 27:var n=a.stateNode,l=Mu(t);bl(t,l,n);break;case 5:var c=a.stateNode;a.flags&32&&(Fa(c,""),a.flags&=-33);var u=Mu(t);bl(t,u,c);break;case 3:case 4:var s=a.stateNode.containerInfo,m=Mu(t);Du(t,m,s);break;default:throw Error(p(161))}}catch(S){at(t,t.return,S)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;uf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Qe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)tf(t,e.alternate,e),e=e.sibling}function Ra(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:sa(4,e,e.return),Ra(e);break;case 1:je(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Jr(e,e.return,a),Ra(e);break;case 27:hn(e.stateNode);case 26:case 5:je(e,e.return),Ra(e);break;case 22:e.memoizedState===null&&Ra(e);break;case 30:Ra(e);break;default:Ra(e)}t=t.sibling}}function Ve(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,n=t,l=e,c=l.flags;switch(l.tag){case 0:case 11:case 15:Ve(n,l,a),cn(4,l);break;case 1:if(Ve(n,l,a),i=l,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){at(i,i.return,m)}if(i=l,n=i.updateQueue,n!==null){var u=i.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)qs(s[n],u)}catch(m){at(i,i.return,m)}}a&&c&64&&$r(l),un(l,l.return);break;case 27:Ir(l);case 26:case 5:Ve(n,l,a),a&&i===null&&c&4&&Wr(l),un(l,l.return);break;case 12:Ve(n,l,a);break;case 31:Ve(n,l,a),a&&c&4&&nf(n,l);break;case 13:Ve(n,l,a),a&&c&4&&lf(n,l);break;case 22:l.memoizedState===null&&Ve(n,l,a),un(l,l.return);break;case 30:break;default:Ve(n,l,a)}e=e.sibling}}function Ou(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zi(a))}function Hu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zi(t))}function ze(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)of(t,e,a,i),e=e.sibling}function of(t,e,a,i){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ze(t,e,a,i),n&2048&&cn(9,e);break;case 1:ze(t,e,a,i);break;case 3:ze(t,e,a,i),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zi(t)));break;case 12:if(n&2048){ze(t,e,a,i),t=e.stateNode;try{var l=e.memoizedProps,c=l.id,u=l.onPostCommit;typeof u=="function"&&u(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){at(e,e.return,s)}}else ze(t,e,a,i);break;case 31:ze(t,e,a,i);break;case 13:ze(t,e,a,i);break;case 23:break;case 22:l=e.stateNode,c=e.alternate,e.memoizedState!==null?l._visibility&2?ze(t,e,a,i):on(t,e):l._visibility&2?ze(t,e,a,i):(l._visibility|=2,yi(t,e,a,i,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Ou(c,e);break;case 24:ze(t,e,a,i),n&2048&&Hu(e.alternate,e);break;default:ze(t,e,a,i)}}function yi(t,e,a,i,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=t,c=e,u=a,s=i,m=c.flags;switch(c.tag){case 0:case 11:case 15:yi(l,c,u,s,n),cn(8,c);break;case 23:break;case 22:var S=c.stateNode;c.memoizedState!==null?S._visibility&2?yi(l,c,u,s,n):on(l,c):(S._visibility|=2,yi(l,c,u,s,n)),n&&m&2048&&Ou(c.alternate,c);break;case 24:yi(l,c,u,s,n),n&&m&2048&&Hu(c.alternate,c);break;default:yi(l,c,u,s,n)}e=e.sibling}}function on(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,n=i.flags;switch(i.tag){case 22:on(a,i),n&2048&&Ou(i.alternate,i);break;case 24:on(a,i),n&2048&&Hu(i.alternate,i);break;default:on(a,i)}e=e.sibling}}var sn=8192;function bi(t,e,a){if(t.subtreeFlags&sn)for(t=t.child;t!==null;)sf(t,e,a),t=t.sibling}function sf(t,e,a){switch(t.tag){case 26:bi(t,e,a),t.flags&sn&&t.memoizedState!==null&&eg(a,Se,t.memoizedState,t.memoizedProps);break;case 5:bi(t,e,a);break;case 3:case 4:var i=Se;Se=Ul(t.stateNode.containerInfo),bi(t,e,a),Se=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=sn,sn=16777216,bi(t,e,a),sn=i):bi(t,e,a));break;default:bi(t,e,a)}}function rf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function rn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Dt=i,df(i,t)}rf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ff(t),t=t.sibling}function ff(t){switch(t.tag){case 0:case 11:case 15:rn(t),t.flags&2048&&sa(9,t,t.return);break;case 3:rn(t);break;case 12:rn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,xl(t)):rn(t);break;default:rn(t)}}function xl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Dt=i,df(i,t)}rf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:sa(8,e,e.return),xl(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,xl(e));break;default:xl(e)}t=t.sibling}}function df(t,e){for(;Dt!==null;){var a=Dt;switch(a.tag){case 0:case 11:case 15:sa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Zi(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Dt=i;else t:for(a=t;Dt!==null;){i=Dt;var n=i.sibling,l=i.return;if(ef(i),i===a){Dt=null;break t}if(n!==null){n.return=l,Dt=n;break t}Dt=l}}}var hp={getCacheForType:function(t){var e=Nt(St),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Nt(St).controller.signal}},yp=typeof WeakMap=="function"?WeakMap:Map,P=0,ct=null,Q=null,L=0,et=0,ie=null,ra=!1,vi=!1,Uu=!1,Le=0,yt=0,fa=0,Ya=0,Bu=0,ne=0,xi=0,fn=null,Kt=null,Nu=!1,Sl=0,pf=0,zl=1/0,Tl=null,da=null,wt=0,pa=null,Si=null,Ze=0,_u=0,qu=null,gf=null,dn=0,ku=null;function le(){return(P&2)!==0&&L!==0?L&-L:T.T!==null?Vu():Do()}function mf(){if(ne===0)if((L&536870912)===0||K){var t=On;On<<=1,(On&3932160)===0&&(On=262144),ne=t}else ne=536870912;return t=ee.current,t!==null&&(t.flags|=32),ne}function $t(t,e,a){(t===ct&&(et===2||et===9)||t.cancelPendingCommit!==null)&&(zi(t,0),ga(t,L,ne,!1)),Hi(t,a),((P&2)===0||t!==ct)&&(t===ct&&((P&2)===0&&(Ya|=a),yt===4&&ga(t,L,ne,!1)),Me(t))}function hf(t,e,a){if((P&6)!==0)throw Error(p(327));var i=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Oi(t,e),n=i?xp(t,e):Ru(t,e,!0),l=i;do{if(n===0){vi&&!i&&ga(t,e,0,!1);break}else{if(a=t.current.alternate,l&&!bp(a)){n=Ru(t,e,!1),l=!1;continue}if(n===2){if(l=e,t.errorRecoveryDisabledLanes&l)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var u=t;n=fn;var s=u.current.memoizedState.isDehydrated;if(s&&(zi(u,c).flags|=256),c=Ru(u,c,!1),c!==2){if(Uu&&!s){u.errorRecoveryDisabledLanes|=l,Ya|=l,n=4;break t}l=Kt,Kt=n,l!==null&&(Kt===null?Kt=l:Kt.push.apply(Kt,l))}n=c}if(l=!1,n!==2)continue}}if(n===1){zi(t,0),ga(t,e,0,!0);break}t:{switch(i=t,l=n,l){case 0:case 1:throw Error(p(345));case 4:if((e&4194048)!==e)break;case 6:ga(i,e,ne,!ra);break t;case 2:Kt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((e&62914560)===e&&(n=Sl+300-Wt(),10<n)){if(ga(i,e,ne,!ra),Un(i,0,!0)!==0)break t;Ze=e,i.timeoutHandle=Kf(yf.bind(null,i,a,Kt,Tl,Nu,e,ne,Ya,xi,ra,l,"Throttled",-0,0),n);break t}yf(i,a,Kt,Tl,Nu,e,ne,Ya,xi,ra,l,null,-0,0)}}break}while(!0);Me(t)}function yf(t,e,a,i,n,l,c,u,s,m,S,A,y,b){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oe},sf(e,l,A);var D=(l&62914560)===l?Sl-Wt():(l&4194048)===l?pf-Wt():0;if(D=ag(A,D),D!==null){Ze=l,t.cancelPendingCommit=D(wf.bind(null,t,e,l,a,i,n,c,u,s,S,A,null,y,b)),ga(t,l,c,!m);return}}wf(t,e,l,a,i,n,c,u,s)}function bp(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],l=n.getSnapshot;n=n.value;try{if(!Pt(l(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ga(t,e,a,i){e&=~Bu,e&=~Ya,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var n=e;0<n;){var l=31-It(n),c=1<<l;i[l]=-1,n&=~c}a!==0&&Eo(t,a,e)}function Al(){return(P&6)===0?(pn(0),!1):!0}function Gu(){if(Q!==null){if(et===0)var t=Q.return;else t=Q,Ne=Ha=null,eu(t),di=null,$i=0,t=Q;for(;t!==null;)Kr(t.alternate,t),t=t.return;Q=null}}function zi(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,kp(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ze=0,Gu(),ct=t,Q=a=Ue(t.current,null),L=e,et=0,ie=null,ra=!1,vi=Oi(t,e),Uu=!1,xi=ne=Bu=Ya=fa=yt=0,Kt=fn=null,Nu=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var n=31-It(i),l=1<<n;e|=t[n],i&=~l}return Le=e,Ln(),a}function bf(t,e){G=null,T.H=an,e===fi||e===Pn?(e=Us(),et=3):e===Qc?(e=Us(),et=4):et=e===yu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ie=e,Q===null&&(yt=1,pl(t,fe(e,t.current)))}function vf(){var t=ee.current;return t===null?!0:(L&4194048)===L?me===null:(L&62914560)===L||(L&536870912)!==0?t===me:!1}function xf(){var t=T.H;return T.H=an,t===null?an:t}function Sf(){var t=T.A;return T.A=hp,t}function wl(){yt=4,ra||(L&4194048)!==L&&ee.current!==null||(vi=!0),(fa&134217727)===0&&(Ya&134217727)===0||ct===null||ga(ct,L,ne,!1)}function Ru(t,e,a){var i=P;P|=2;var n=xf(),l=Sf();(ct!==t||L!==e)&&(Tl=null,zi(t,e)),e=!1;var c=yt;t:do try{if(et!==0&&Q!==null){var u=Q,s=ie;switch(et){case 8:Gu(),c=6;break t;case 3:case 2:case 9:case 6:ee.current===null&&(e=!0);var m=et;if(et=0,ie=null,Ti(t,u,s,m),a&&vi){c=0;break t}break;default:m=et,et=0,ie=null,Ti(t,u,s,m)}}vp(),c=yt;break}catch(S){bf(t,S)}while(!0);return e&&t.shellSuspendCounter++,Ne=Ha=null,P=i,T.H=n,T.A=l,Q===null&&(ct=null,L=0,Ln()),c}function vp(){for(;Q!==null;)zf(Q)}function xp(t,e){var a=P;P|=2;var i=xf(),n=Sf();ct!==t||L!==e?(Tl=null,zl=Wt()+500,zi(t,e)):vi=Oi(t,e);t:do try{if(et!==0&&Q!==null){e=Q;var l=ie;e:switch(et){case 1:et=0,ie=null,Ti(t,e,l,1);break;case 2:case 9:if(Os(l)){et=0,ie=null,Tf(e);break}e=function(){et!==2&&et!==9||ct!==t||(et=7),Me(t)},l.then(e,e);break t;case 3:et=7;break t;case 4:et=5;break t;case 7:Os(l)?(et=0,ie=null,Tf(e)):(et=0,ie=null,Ti(t,e,l,7));break;case 5:var c=null;switch(Q.tag){case 26:c=Q.memoizedState;case 5:case 27:var u=Q;if(c?od(c):u.stateNode.complete){et=0,ie=null;var s=u.sibling;if(s!==null)Q=s;else{var m=u.return;m!==null?(Q=m,El(m)):Q=null}break e}}et=0,ie=null,Ti(t,e,l,5);break;case 6:et=0,ie=null,Ti(t,e,l,6);break;case 8:Gu(),yt=6;break t;default:throw Error(p(462))}}Sp();break}catch(S){bf(t,S)}while(!0);return Ne=Ha=null,T.H=i,T.A=n,P=a,Q!==null?0:(ct=null,L=0,Ln(),yt)}function Sp(){for(;Q!==null&&!Vd();)zf(Q)}function zf(t){var e=Lr(t.alternate,t,Le);t.memoizedProps=t.pendingProps,e===null?El(t):Q=e}function Tf(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Gr(a,e,e.pendingProps,e.type,void 0,L);break;case 11:e=Gr(a,e,e.pendingProps,e.type.render,e.ref,L);break;case 5:eu(e);default:Kr(a,e),e=Q=xs(e,Le),e=Lr(a,e,Le)}t.memoizedProps=t.pendingProps,e===null?El(t):Q=e}function Ti(t,e,a,i){Ne=Ha=null,eu(e),di=null,$i=0;var n=e.return;try{if(sp(t,n,e,a,L)){yt=1,pl(t,fe(a,t.current)),Q=null;return}}catch(l){if(n!==null)throw Q=n,l;yt=1,pl(t,fe(a,t.current)),Q=null;return}e.flags&32768?(K||i===1?t=!0:vi||(L&536870912)!==0?t=!1:(ra=t=!0,(i===2||i===9||i===3||i===6)&&(i=ee.current,i!==null&&i.tag===13&&(i.flags|=16384))),Af(e,t)):El(e)}function El(t){var e=t;do{if((e.flags&32768)!==0){Af(e,ra);return}t=e.return;var a=dp(e.alternate,e,Le);if(a!==null){Q=a;return}if(e=e.sibling,e!==null){Q=e;return}Q=e=t}while(e!==null);yt===0&&(yt=5)}function Af(t,e){do{var a=pp(t.alternate,t);if(a!==null){a.flags&=32767,Q=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Q=t;return}Q=t=a}while(t!==null);yt=6,Q=null}function wf(t,e,a,i,n,l,c,u,s){t.cancelPendingCommit=null;do jl();while(wt!==0);if((P&6)!==0)throw Error(p(327));if(e!==null){if(e===t.current)throw Error(p(177));if(l=e.lanes|e.childLanes,l|=Mc,t0(t,a,l,c,u,s),t===ct&&(Q=ct=null,L=0),Si=e,pa=t,Ze=a,_u=l,qu=n,gf=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,wp(Dn,function(){return Cf(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=T.T,T.T=null,n=j.p,j.p=2,c=P,P|=4;try{gp(t,e,a)}finally{P=c,j.p=n,T.T=i}}wt=1,Ef(),jf(),Mf()}}function Ef(){if(wt===1){wt=0;var t=pa,e=Si,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=T.T,T.T=null;var i=j.p;j.p=2;var n=P;P|=4;try{cf(e,t);var l=Iu,c=fs(t.containerInfo),u=l.focusedElem,s=l.selectionRange;if(c!==u&&u&&u.ownerDocument&&rs(u.ownerDocument.documentElement,u)){if(s!==null&&Tc(u)){var m=s.start,S=s.end;if(S===void 0&&(S=m),"selectionStart"in u)u.selectionStart=m,u.selectionEnd=Math.min(S,u.value.length);else{var A=u.ownerDocument||document,y=A&&A.defaultView||window;if(y.getSelection){var b=y.getSelection(),D=u.textContent.length,N=Math.min(s.start,D),lt=s.end===void 0?N:Math.min(s.end,D);!b.extend&&N>lt&&(c=lt,lt=N,N=c);var f=ss(u,N),r=ss(u,lt);if(f&&r&&(b.rangeCount!==1||b.anchorNode!==f.node||b.anchorOffset!==f.offset||b.focusNode!==r.node||b.focusOffset!==r.offset)){var g=A.createRange();g.setStart(f.node,f.offset),b.removeAllRanges(),N>lt?(b.addRange(g),b.extend(r.node,r.offset)):(g.setEnd(r.node,r.offset),b.addRange(g))}}}}for(A=[],b=u;b=b.parentNode;)b.nodeType===1&&A.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<A.length;u++){var z=A[u];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Gl=!!Fu,Iu=Fu=null}finally{P=n,j.p=i,T.T=a}}t.current=e,wt=2}}function jf(){if(wt===2){wt=0;var t=pa,e=Si,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=T.T,T.T=null;var i=j.p;j.p=2;var n=P;P|=4;try{tf(t,e.alternate,e)}finally{P=n,j.p=i,T.T=a}}wt=3}}function Mf(){if(wt===4||wt===3){wt=0,Ld();var t=pa,e=Si,a=Ze,i=gf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?wt=5:(wt=0,Si=pa=null,Df(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(da=null),nc(a),e=e.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Ci,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=T.T,n=j.p,j.p=2,T.T=null;try{for(var l=t.onRecoverableError,c=0;c<i.length;c++){var u=i[c];l(u.value,{componentStack:u.stack})}}finally{T.T=e,j.p=n}}(Ze&3)!==0&&jl(),Me(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===ku?dn++:(dn=0,ku=t):dn=0,pn(0)}}function Df(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Zi(e)))}function jl(){return Ef(),jf(),Mf(),Cf()}function Cf(){if(wt!==5)return!1;var t=pa,e=_u;_u=0;var a=nc(Ze),i=T.T,n=j.p;try{j.p=32>a?32:a,T.T=null,a=qu,qu=null;var l=pa,c=Ze;if(wt=0,Si=pa=null,Ze=0,(P&6)!==0)throw Error(p(331));var u=P;if(P|=4,ff(l.current),of(l,l.current,c,a),P=u,pn(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Ci,l)}catch{}return!0}finally{j.p=n,T.T=i,Df(t,e)}}function Of(t,e,a){e=fe(a,e),e=hu(t.stateNode,e,2),t=ca(t,e,2),t!==null&&(Hi(t,2),Me(t))}function at(t,e,a){if(t.tag===3)Of(t,t,a);else for(;e!==null;){if(e.tag===3){Of(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))){t=fe(a,t),a=Or(2),i=ca(e,a,2),i!==null&&(Hr(a,i,e,t),Hi(i,2),Me(i));break}}e=e.return}}function Yu(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new yp;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(a)||(Uu=!0,n.add(a),t=zp.bind(null,t,e,a),e.then(t,t))}function zp(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ct===t&&(L&a)===a&&(yt===4||yt===3&&(L&62914560)===L&&300>Wt()-Sl?(P&2)===0&&zi(t,0):Bu|=a,xi===L&&(xi=0)),Me(t)}function Hf(t,e){e===0&&(e=wo()),t=Da(t,e),t!==null&&(Hi(t,e),Me(t))}function Tp(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Hf(t,a)}function Ap(t,e){var a=0;switch(t.tag){case 31:case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(p(314))}i!==null&&i.delete(e),Hf(t,a)}function wp(t,e){return tc(t,e)}var Ml=null,Ai=null,Xu=!1,Dl=!1,Qu=!1,ma=0;function Me(t){t!==Ai&&t.next===null&&(Ai===null?Ml=Ai=t:Ai=Ai.next=t),Dl=!0,Xu||(Xu=!0,jp())}function pn(t,e){if(!Qu&&Dl){Qu=!0;do for(var a=!1,i=Ml;i!==null;){if(t!==0){var n=i.pendingLanes;if(n===0)var l=0;else{var c=i.suspendedLanes,u=i.pingedLanes;l=(1<<31-It(42|t)+1)-1,l&=n&~(c&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,_f(i,l))}else l=L,l=Un(i,i===ct?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Oi(i,l)||(a=!0,_f(i,l));i=i.next}while(a);Qu=!1}}function Ep(){Uf()}function Uf(){Dl=Xu=!1;var t=0;ma!==0&&qp()&&(t=ma);for(var e=Wt(),a=null,i=Ml;i!==null;){var n=i.next,l=Bf(i,e);l===0?(i.next=null,a===null?Ml=n:a.next=n,n===null&&(Ai=a)):(a=i,(t!==0||(l&3)!==0)&&(Dl=!0)),i=n}wt!==0&&wt!==5||pn(t),ma!==0&&(ma=0)}function Bf(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var c=31-It(l),u=1<<c,s=n[c];s===-1?((u&a)===0||(u&i)!==0)&&(n[c]=Pd(u,e)):s<=e&&(t.expiredLanes|=u),l&=~u}if(e=ct,a=L,a=Un(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(et===2||et===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&ec(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Oi(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&ec(i),nc(a)){case 2:case 8:a=To;break;case 32:a=Dn;break;case 268435456:a=Ao;break;default:a=Dn}return i=Nf.bind(null,t),a=tc(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&ec(i),t.callbackPriority=2,t.callbackNode=null,2}function Nf(t,e){if(wt!==0&&wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(jl()&&t.callbackNode!==a)return null;var i=L;return i=Un(t,t===ct?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(hf(t,i,e),Bf(t,Wt()),t.callbackNode!=null&&t.callbackNode===a?Nf.bind(null,t):null)}function _f(t,e){if(jl())return null;hf(t,e,!0)}function jp(){Gp(function(){(P&6)!==0?tc(zo,Ep):Uf()})}function Vu(){if(ma===0){var t=si;t===0&&(t=Cn,Cn<<=1,(Cn&261888)===0&&(Cn=256)),ma=t}return ma}function qf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qn(""+t)}function kf(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Mp(t,e,a,i,n){if(e==="submit"&&a&&a.stateNode===n){var l=qf((n[Xt]||null).action),c=i.submitter;c&&(e=(e=c[Xt]||null)?qf(e.formAction):c.getAttribute("formAction"),e!==null&&(l=e,c=null));var u=new Yn("action","action",null,i,n);t.push({event:u,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ma!==0){var s=c?kf(n,c):new FormData(n);ru(a,{pending:!0,data:s,method:n.method,action:l},null,s)}}else typeof l=="function"&&(u.preventDefault(),s=c?kf(n,c):new FormData(n),ru(a,{pending:!0,data:s,method:n.method,action:l},l,s))},currentTarget:n}]})}}for(var Lu=0;Lu<jc.length;Lu++){var Zu=jc[Lu],Dp=Zu.toLowerCase(),Cp=Zu[0].toUpperCase()+Zu.slice(1);xe(Dp,"on"+Cp)}xe(gs,"onAnimationEnd"),xe(ms,"onAnimationIteration"),xe(hs,"onAnimationStart"),xe("dblclick","onDoubleClick"),xe("focusin","onFocus"),xe("focusout","onBlur"),xe(Z0,"onTransitionRun"),xe(K0,"onTransitionStart"),xe($0,"onTransitionCancel"),xe(ys,"onTransitionEnd"),Ja("onMouseEnter",["mouseout","mouseover"]),Ja("onMouseLeave",["mouseout","mouseover"]),Ja("onPointerEnter",["pointerout","pointerover"]),Ja("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Op=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn));function Gf(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],n=i.event;i=i.listeners;t:{var l=void 0;if(e)for(var c=i.length-1;0<=c;c--){var u=i[c],s=u.instance,m=u.currentTarget;if(u=u.listener,s!==l&&n.isPropagationStopped())break t;l=u,n.currentTarget=m;try{l(n)}catch(S){Vn(S)}n.currentTarget=null,l=s}else for(c=0;c<i.length;c++){if(u=i[c],s=u.instance,m=u.currentTarget,u=u.listener,s!==l&&n.isPropagationStopped())break t;l=u,n.currentTarget=m;try{l(n)}catch(S){Vn(S)}n.currentTarget=null,l=s}}}}function V(t,e){var a=e[lc];a===void 0&&(a=e[lc]=new Set);var i=t+"__bubble";a.has(i)||(Rf(e,t,2,!1),a.add(i))}function Ku(t,e,a){var i=0;e&&(i|=4),Rf(a,t,i,e)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function $u(t){if(!t[Cl]){t[Cl]=!0,Ho.forEach(function(a){a!=="selectionchange"&&(Op.has(a)||Ku(a,!1,t),Ku(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Cl]||(e[Cl]=!0,Ku("selectionchange",!1,e))}}function Rf(t,e,a,i){switch(md(e)){case 2:var n=lg;break;case 8:n=cg;break;default:n=so}a=n.bind(null,e,a,t),n=void 0,!gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Ju(t,e,a,i,n){var l=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var u=i.stateNode.containerInfo;if(u===n)break;if(c===4)for(c=i.return;c!==null;){var s=c.tag;if((s===3||s===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;u!==null;){if(c=Za(u),c===null)return;if(s=c.tag,s===5||s===6||s===26||s===27){i=l=c;continue t}u=u.parentNode}}i=i.return}Vo(function(){var m=l,S=dc(a),A=[];t:{var y=bs.get(t);if(y!==void 0){var b=Yn,D=t;switch(t){case"keypress":if(Gn(a)===0)break t;case"keydown":case"keyup":b=A0;break;case"focusin":D="focus",b=bc;break;case"focusout":D="blur",b=bc;break;case"beforeblur":case"afterblur":b=bc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=j0;break;case gs:case ms:case hs:b=m0;break;case ys:b=D0;break;case"scroll":case"scrollend":b=r0;break;case"wheel":b=O0;break;case"copy":case"cut":case"paste":b=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Jo;break;case"toggle":case"beforetoggle":b=U0}var N=(e&4)!==0,lt=!N&&(t==="scroll"||t==="scrollend"),f=N?y!==null?y+"Capture":null:y;N=[];for(var r=m,g;r!==null;){var z=r;if(g=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||g===null||f===null||(z=Ni(r,f),z!=null&&N.push(mn(r,z,g))),lt)break;r=r.return}0<N.length&&(y=new b(y,D,null,a,S),A.push({event:y,listeners:N}))}}if((e&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",y&&a!==fc&&(D=a.relatedTarget||a.fromElement)&&(Za(D)||D[La]))break t;if((b||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,b?(D=a.relatedTarget||a.toElement,b=m,D=D?Za(D):null,D!==null&&(lt=U(D),N=D.tag,D!==lt||N!==5&&N!==27&&N!==6)&&(D=null)):(b=null,D=m),b!==D)){if(N=Ko,z="onMouseLeave",f="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(N=Jo,z="onPointerLeave",f="onPointerEnter",r="pointer"),lt=b==null?y:Bi(b),g=D==null?y:Bi(D),y=new N(z,r+"leave",b,a,S),y.target=lt,y.relatedTarget=g,z=null,Za(S)===m&&(N=new N(f,r+"enter",D,a,S),N.target=g,N.relatedTarget=lt,z=N),lt=z,b&&D)e:{for(N=Hp,f=b,r=D,g=0,z=f;z;z=N(z))g++;z=0;for(var B=r;B;B=N(B))z++;for(;0<g-z;)f=N(f),g--;for(;0<z-g;)r=N(r),z--;for(;g--;){if(f===r||r!==null&&f===r.alternate){N=f;break e}f=N(f),r=N(r)}N=null}else N=null;b!==null&&Yf(A,y,b,N,!1),D!==null&&lt!==null&&Yf(A,lt,D,N,!0)}}t:{if(y=m?Bi(m):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var W=is;else if(es(y))if(ns)W=Q0;else{W=Y0;var H=R0}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?m&&rc(m.elementType)&&(W=is):W=X0;if(W&&(W=W(t,m))){as(A,W,a,S);break t}H&&H(t,y,m),t==="focusout"&&m&&y.type==="number"&&m.memoizedProps.value!=null&&sc(y,"number",y.value)}switch(H=m?Bi(m):window,t){case"focusin":(es(H)||H.contentEditable==="true")&&(ei=H,Ac=m,Qi=null);break;case"focusout":Qi=Ac=ei=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,ds(A,a,S);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":ds(A,a,S)}var Y;if(xc)t:{switch(t){case"compositionstart":var Z="onCompositionStart";break t;case"compositionend":Z="onCompositionEnd";break t;case"compositionupdate":Z="onCompositionUpdate";break t}Z=void 0}else ti?Po(t,a)&&(Z="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Z="onCompositionStart");Z&&(Wo&&a.locale!=="ko"&&(ti||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&ti&&(Y=Lo()):(Pe=S,mc="value"in Pe?Pe.value:Pe.textContent,ti=!0)),H=Ol(m,Z),0<H.length&&(Z=new $o(Z,t,null,a,S),A.push({event:Z,listeners:H}),Y?Z.data=Y:(Y=ts(a),Y!==null&&(Z.data=Y)))),(Y=N0?_0(t,a):q0(t,a))&&(Z=Ol(m,"onBeforeInput"),0<Z.length&&(H=new $o("onBeforeInput","beforeinput",null,a,S),A.push({event:H,listeners:Z}),H.data=Y)),Mp(A,t,m,a,S)}Gf(A,e)})}function mn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Ol(t,e){for(var a=e+"Capture",i=[];t!==null;){var n=t,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=Ni(t,a),n!=null&&i.unshift(mn(t,n,l)),n=Ni(t,e),n!=null&&i.push(mn(t,n,l))),t.tag===3)return i;t=t.return}return[]}function Hp(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yf(t,e,a,i,n){for(var l=e._reactName,c=[];a!==null&&a!==i;){var u=a,s=u.alternate,m=u.stateNode;if(u=u.tag,s!==null&&s===i)break;u!==5&&u!==26&&u!==27||m===null||(s=m,n?(m=Ni(a,l),m!=null&&c.unshift(mn(a,m,s))):n||(m=Ni(a,l),m!=null&&c.push(mn(a,m,s)))),a=a.return}c.length!==0&&t.push({event:e,listeners:c})}var Up=/\r\n?/g,Bp=/\u0000|\uFFFD/g;function Xf(t){return(typeof t=="string"?t:""+t).replace(Up,`
`).replace(Bp,"")}function Qf(t,e){return e=Xf(e),Xf(t)===e}function nt(t,e,a,i,n,l){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Fa(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Fa(t,""+i);break;case"className":Nn(t,"class",i);break;case"tabIndex":Nn(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Nn(t,a,i);break;case"style":Xo(t,i,l);break;case"data":if(e!=="object"){Nn(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=qn(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(e!=="input"&&nt(t,e,"name",n.name,n,null),nt(t,e,"formEncType",n.formEncType,n,null),nt(t,e,"formMethod",n.formMethod,n,null),nt(t,e,"formTarget",n.formTarget,n,null)):(nt(t,e,"encType",n.encType,n,null),nt(t,e,"method",n.method,n,null),nt(t,e,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=qn(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=Oe);break;case"onScroll":i!=null&&V("scroll",t);break;case"onScrollEnd":i!=null&&V("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(p(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(p(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=qn(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":V("beforetoggle",t),V("toggle",t),Bn(t,"popover",i);break;case"xlinkActuate":Ce(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ce(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ce(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ce(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ce(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ce(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Bn(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=o0.get(a)||a,Bn(t,a,i))}}function Wu(t,e,a,i,n,l){switch(a){case"style":Xo(t,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(p(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(p(60));t.innerHTML=a}}break;case"children":typeof i=="string"?Fa(t,i):(typeof i=="number"||typeof i=="bigint")&&Fa(t,""+i);break;case"onScroll":i!=null&&V("scroll",t);break;case"onScrollEnd":i!=null&&V("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Oe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),l=t[Xt]||null,l=l!=null?l[a]:null,typeof l=="function"&&t.removeEventListener(e,l,n),typeof i=="function")){typeof l!="function"&&l!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,n);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):Bn(t,a,i)}}}function qt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",t),V("load",t);var i=!1,n=!1,l;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];if(c!=null)switch(l){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:nt(t,e,l,c,a,null)}}n&&nt(t,e,"srcSet",a.srcSet,a,null),i&&nt(t,e,"src",a.src,a,null);return;case"input":V("invalid",t);var u=l=c=n=null,s=null,m=null;for(i in a)if(a.hasOwnProperty(i)){var S=a[i];if(S!=null)switch(i){case"name":n=S;break;case"type":c=S;break;case"checked":s=S;break;case"defaultChecked":m=S;break;case"value":l=S;break;case"defaultValue":u=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(p(137,e));break;default:nt(t,e,i,S,a,null)}}ko(t,l,u,s,m,c,n,!1);return;case"select":V("invalid",t),i=c=l=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":l=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:nt(t,e,n,u,a,null)}e=l,a=c,t.multiple=!!i,e!=null?Wa(t,!!i,e,!1):a!=null&&Wa(t,!!i,a,!0);return;case"textarea":V("invalid",t),l=n=i=null;for(c in a)if(a.hasOwnProperty(c)&&(u=a[c],u!=null))switch(c){case"value":i=u;break;case"defaultValue":n=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(p(91));break;default:nt(t,e,c,u,a,null)}Ro(t,i,n,l);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(i=a[s],i!=null))switch(s){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:nt(t,e,s,i,a,null)}return;case"dialog":V("beforetoggle",t),V("toggle",t),V("cancel",t),V("close",t);break;case"iframe":case"object":V("load",t);break;case"video":case"audio":for(i=0;i<gn.length;i++)V(gn[i],t);break;case"image":V("error",t),V("load",t);break;case"details":V("toggle",t);break;case"embed":case"source":case"link":V("error",t),V("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(i=a[m],i!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:nt(t,e,m,i,a,null)}return;default:if(rc(e)){for(S in a)a.hasOwnProperty(S)&&(i=a[S],i!==void 0&&Wu(t,e,S,i,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(i=a[u],i!=null&&nt(t,e,u,i,a,null))}function Np(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,c=null,u=null,s=null,m=null,S=null;for(b in a){var A=a[b];if(a.hasOwnProperty(b)&&A!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":s=A;default:i.hasOwnProperty(b)||nt(t,e,b,null,i,A)}}for(var y in i){var b=i[y];if(A=a[y],i.hasOwnProperty(y)&&(b!=null||A!=null))switch(y){case"type":l=b;break;case"name":n=b;break;case"checked":m=b;break;case"defaultChecked":S=b;break;case"value":c=b;break;case"defaultValue":u=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(p(137,e));break;default:b!==A&&nt(t,e,y,b,i,A)}}oc(t,c,u,s,m,S,l,n);return;case"select":b=c=u=y=null;for(l in a)if(s=a[l],a.hasOwnProperty(l)&&s!=null)switch(l){case"value":break;case"multiple":b=s;default:i.hasOwnProperty(l)||nt(t,e,l,null,i,s)}for(n in i)if(l=i[n],s=a[n],i.hasOwnProperty(n)&&(l!=null||s!=null))switch(n){case"value":y=l;break;case"defaultValue":u=l;break;case"multiple":c=l;default:l!==s&&nt(t,e,n,l,i,s)}e=u,a=c,i=b,y!=null?Wa(t,!!a,y,!1):!!i!=!!a&&(e!=null?Wa(t,!!a,e,!0):Wa(t,!!a,a?[]:"",!1));return;case"textarea":b=y=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!i.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:nt(t,e,u,null,i,n)}for(c in i)if(n=i[c],l=a[c],i.hasOwnProperty(c)&&(n!=null||l!=null))switch(c){case"value":y=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(p(91));break;default:n!==l&&nt(t,e,c,n,i,l)}Go(t,y,b);return;case"option":for(var D in a)if(y=a[D],a.hasOwnProperty(D)&&y!=null&&!i.hasOwnProperty(D))switch(D){case"selected":t.selected=!1;break;default:nt(t,e,D,null,i,y)}for(s in i)if(y=i[s],b=a[s],i.hasOwnProperty(s)&&y!==b&&(y!=null||b!=null))switch(s){case"selected":t.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:nt(t,e,s,y,i,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in a)y=a[N],a.hasOwnProperty(N)&&y!=null&&!i.hasOwnProperty(N)&&nt(t,e,N,null,i,y);for(m in i)if(y=i[m],b=a[m],i.hasOwnProperty(m)&&y!==b&&(y!=null||b!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,e));break;default:nt(t,e,m,y,i,b)}return;default:if(rc(e)){for(var lt in a)y=a[lt],a.hasOwnProperty(lt)&&y!==void 0&&!i.hasOwnProperty(lt)&&Wu(t,e,lt,void 0,i,y);for(S in i)y=i[S],b=a[S],!i.hasOwnProperty(S)||y===b||y===void 0&&b===void 0||Wu(t,e,S,y,i,b);return}}for(var f in a)y=a[f],a.hasOwnProperty(f)&&y!=null&&!i.hasOwnProperty(f)&&nt(t,e,f,null,i,y);for(A in i)y=i[A],b=a[A],!i.hasOwnProperty(A)||y===b||y==null&&b==null||nt(t,e,A,y,i,b)}function Vf(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _p(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],l=n.transferSize,c=n.initiatorType,u=n.duration;if(l&&u&&Vf(c)){for(c=0,u=n.responseEnd,i+=1;i<a.length;i++){var s=a[i],m=s.startTime;if(m>u)break;var S=s.transferSize,A=s.initiatorType;S&&Vf(A)&&(s=s.responseEnd,c+=S*(s<u?1:(u-m)/(s-m)))}if(--i,e+=8*(l+c)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Fu=null,Iu=null;function Hl(t){return t.nodeType===9?t:t.ownerDocument}function Lf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zf(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Pu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var to=null;function qp(){var t=window.event;return t&&t.type==="popstate"?t===to?!1:(to=t,!0):(to=null,!1)}var Kf=typeof setTimeout=="function"?setTimeout:void 0,kp=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,Gp=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(t){return $f.resolve(null).then(t).catch(Rp)}:Kf;function Rp(t){setTimeout(function(){throw t})}function ha(t){return t==="head"}function Jf(t,e){var a=e,i=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){t.removeChild(n),Mi(e);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")hn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,hn(a);for(var l=a.firstChild;l;){var c=l.nextSibling,u=l.nodeName;l[Ui]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=c}}else a==="body"&&hn(t.ownerDocument.body);a=n}while(a);Mi(e)}function Wf(t,e){var a=t;t=0;do{var i=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=i}while(a)}function eo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eo(a),cc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Yp(t,e,a,i){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ui])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=he(t.nextSibling),t===null)break}return null}function Xp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=he(t.nextSibling),t===null))return null;return t}function Ff(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=he(t.nextSibling),t===null))return null;return t}function ao(t){return t.data==="$?"||t.data==="$~"}function io(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qp(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function he(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var no=null;function If(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return he(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Pf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function td(t,e,a){switch(e=Hl(a),t){case"html":if(t=e.documentElement,!t)throw Error(p(452));return t;case"head":if(t=e.head,!t)throw Error(p(453));return t;case"body":if(t=e.body,!t)throw Error(p(454));return t;default:throw Error(p(451))}}function hn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);cc(t)}var ye=new Map,ed=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ke=j.d;j.d={f:Vp,r:Lp,D:Zp,C:Kp,L:$p,m:Jp,X:Fp,S:Wp,M:Ip};function Vp(){var t=Ke.f(),e=Al();return t||e}function Lp(t){var e=Ka(t);e!==null&&e.tag===5&&e.type==="form"?yr(e):Ke.r(t)}var wi=typeof document>"u"?null:document;function ad(t,e,a){var i=wi;if(i&&typeof e=="string"&&e){var n=se(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),ed.has(n)||(ed.add(n),t={rel:t,crossOrigin:a,href:e},i.querySelector(n)===null&&(e=i.createElement("link"),qt(e,"link",t),Mt(e),i.head.appendChild(e)))}}function Zp(t){Ke.D(t),ad("dns-prefetch",t,null)}function Kp(t,e){Ke.C(t,e),ad("preconnect",t,e)}function $p(t,e,a){Ke.L(t,e,a);var i=wi;if(i&&t&&e){var n='link[rel="preload"][as="'+se(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+se(a.imageSizes)+'"]')):n+='[href="'+se(t)+'"]';var l=n;switch(e){case"style":l=Ei(t);break;case"script":l=ji(t)}ye.has(l)||(t=M({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ye.set(l,t),i.querySelector(n)!==null||e==="style"&&i.querySelector(yn(l))||e==="script"&&i.querySelector(bn(l))||(e=i.createElement("link"),qt(e,"link",t),Mt(e),i.head.appendChild(e)))}}function Jp(t,e){Ke.m(t,e);var a=wi;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+se(i)+'"][href="'+se(t)+'"]',l=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=ji(t)}if(!ye.has(l)&&(t=M({rel:"modulepreload",href:t},e),ye.set(l,t),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bn(l)))return}i=a.createElement("link"),qt(i,"link",t),Mt(i),a.head.appendChild(i)}}}function Wp(t,e,a){Ke.S(t,e,a);var i=wi;if(i&&t){var n=$a(i).hoistableStyles,l=Ei(t);e=e||"default";var c=n.get(l);if(!c){var u={loading:0,preload:null};if(c=i.querySelector(yn(l)))u.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ye.get(l))&&lo(t,a);var s=c=i.createElement("link");Mt(s),qt(s,"link",t),s._p=new Promise(function(m,S){s.onload=m,s.onerror=S}),s.addEventListener("load",function(){u.loading|=1}),s.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Bl(c,e,i)}c={type:"stylesheet",instance:c,count:1,state:u},n.set(l,c)}}}function Fp(t,e){Ke.X(t,e);var a=wi;if(a&&t){var i=$a(a).hoistableScripts,n=ji(t),l=i.get(n);l||(l=a.querySelector(bn(n)),l||(t=M({src:t,async:!0},e),(e=ye.get(n))&&co(t,e),l=a.createElement("script"),Mt(l),qt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function Ip(t,e){Ke.M(t,e);var a=wi;if(a&&t){var i=$a(a).hoistableScripts,n=ji(t),l=i.get(n);l||(l=a.querySelector(bn(n)),l||(t=M({src:t,async:!0,type:"module"},e),(e=ye.get(n))&&co(t,e),l=a.createElement("script"),Mt(l),qt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function id(t,e,a,i){var n=(n=We.current)?Ul(n):null;if(!n)throw Error(p(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Ei(a.href),a=$a(n).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ei(a.href);var l=$a(n).hoistableStyles,c=l.get(t);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,c),(l=n.querySelector(yn(t)))&&!l._p&&(c.instance=l,c.state.loading=5),ye.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ye.set(t,a),l||Pp(n,t,a,c.state))),e&&i===null)throw Error(p(528,""));return c}if(e&&i!==null)throw Error(p(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ji(a),a=$a(n).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,t))}}function Ei(t){return'href="'+se(t)+'"'}function yn(t){return'link[rel="stylesheet"]['+t+"]"}function nd(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function Pp(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),qt(e,"link",a),Mt(e),t.head.appendChild(e))}function ji(t){return'[src="'+se(t)+'"]'}function bn(t){return"script[async]"+t}function ld(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+se(a.href)+'"]');if(i)return e.instance=i,Mt(i),i;var n=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Mt(i),qt(i,"style",n),Bl(i,a.precedence,t),e.instance=i;case"stylesheet":n=Ei(a.href);var l=t.querySelector(yn(n));if(l)return e.state.loading|=4,e.instance=l,Mt(l),l;i=nd(a),(n=ye.get(n))&&lo(i,n),l=(t.ownerDocument||t).createElement("link"),Mt(l);var c=l;return c._p=new Promise(function(u,s){c.onload=u,c.onerror=s}),qt(l,"link",i),e.state.loading|=4,Bl(l,a.precedence,t),e.instance=l;case"script":return l=ji(a.src),(n=t.querySelector(bn(l)))?(e.instance=n,Mt(n),n):(i=a,(n=ye.get(l))&&(i=M({},a),co(i,n)),t=t.ownerDocument||t,n=t.createElement("script"),Mt(n),qt(n,"link",i),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(p(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,Bl(i,a.precedence,t));return e.instance}function Bl(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,l=n,c=0;c<i.length;c++){var u=i[c];if(u.dataset.precedence===e)l=u;else if(l!==n)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function lo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function co(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Nl=null;function cd(t,e,a){if(Nl===null){var i=new Map,n=Nl=new Map;n.set(a,i)}else n=Nl,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var l=a[n];if(!(l[Ui]||l[Ut]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var c=l.getAttribute(e)||"";c=t+c;var u=i.get(c);u?u.push(l):i.set(c,[l])}}return i}function ud(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function tg(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function od(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function eg(t,e,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ei(i.href),l=e.querySelector(yn(n));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=_l.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=l,Mt(l);return}l=e.ownerDocument||e,i=nd(i),(n=ye.get(n))&&lo(i,n),l=l.createElement("link"),Mt(l);var c=l;c._p=new Promise(function(u,s){c.onload=u,c.onerror=s}),qt(l,"link",i),a.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_l.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var uo=0;function ag(t,e){return t.stylesheets&&t.count===0&&kl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var i=setTimeout(function(){if(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+e);0<t.imgBytes&&uo===0&&(uo=62500*_p());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>uo?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function _l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ql=null;function kl(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ql=new Map,e.forEach(ig,t),ql=null,_l.call(t))}function ig(t,e){if(!(e.state.loading&4)){var a=ql.get(t);if(a)var i=a.get(null);else{a=new Map,ql.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var c=n[l];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),i=c)}i&&a.set(null,i)}n=e.instance,c=n.getAttribute("data-precedence"),l=a.get(c)||i,l===i&&a.set(null,n),a.set(c,n),this.count++,i=_l.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),l?l.parentNode.insertBefore(n,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var vn={$$typeof:gt,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function ng(t,e,a,i,n,l,c,u,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ac(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.hiddenUpdates=ac(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function sd(t,e,a,i,n,l,c,u,s,m,S,A){return t=new ng(t,e,a,c,s,m,S,A,u),e=1,l===!0&&(e|=24),l=te(3,null,null,e),t.current=l,l.stateNode=t,e=Rc(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:i,isDehydrated:a,cache:e},Vc(l),t}function rd(t){return t?(t=ni,t):ni}function fd(t,e,a,i,n,l){n=rd(n),i.context===null?i.context=n:i.pendingContext=n,i=la(e),i.payload={element:a},l=l===void 0?null:l,l!==null&&(i.callback=l),a=ca(t,i,e),a!==null&&($t(a,t,e),Wi(a,t,e))}function dd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function oo(t,e){dd(t,e),(t=t.alternate)&&dd(t,e)}function pd(t){if(t.tag===13||t.tag===31){var e=Da(t,67108864);e!==null&&$t(e,t,67108864),oo(t,67108864)}}function gd(t){if(t.tag===13||t.tag===31){var e=le();e=ic(e);var a=Da(t,e);a!==null&&$t(a,t,e),oo(t,e)}}var Gl=!0;function lg(t,e,a,i){var n=T.T;T.T=null;var l=j.p;try{j.p=2,so(t,e,a,i)}finally{j.p=l,T.T=n}}function cg(t,e,a,i){var n=T.T;T.T=null;var l=j.p;try{j.p=8,so(t,e,a,i)}finally{j.p=l,T.T=n}}function so(t,e,a,i){if(Gl){var n=ro(i);if(n===null)Ju(t,e,i,Rl,a),hd(t,i);else if(og(n,t,e,a,i))i.stopPropagation();else if(hd(t,i),e&4&&-1<ug.indexOf(t)){for(;n!==null;){var l=Ka(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var c=Aa(l.pendingLanes);if(c!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;c;){var s=1<<31-It(c);u.entanglements[1]|=s,c&=~s}Me(l),(P&6)===0&&(zl=Wt()+500,pn(0))}}break;case 31:case 13:u=Da(l,2),u!==null&&$t(u,l,2),Al(),oo(l,2)}if(l=ro(i),l===null&&Ju(t,e,i,Rl,a),l===n)break;n=l}n!==null&&i.stopPropagation()}else Ju(t,e,i,null,a)}}function ro(t){return t=dc(t),fo(t)}var Rl=null;function fo(t){if(Rl=null,t=Za(t),t!==null){var e=U(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=C(e),t!==null)return t;t=null}else if(a===31){if(t=q(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Rl=t,null}function md(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zd()){case zo:return 2;case To:return 8;case Dn:case Kd:return 32;case Ao:return 268435456;default:return 32}default:return 32}}var po=!1,ya=null,ba=null,va=null,xn=new Map,Sn=new Map,xa=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hd(t,e){switch(t){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":xn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(e.pointerId)}}function zn(t,e,a,i,n,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:l,targetContainers:[n]},e!==null&&(e=Ka(e),e!==null&&pd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function og(t,e,a,i,n){switch(e){case"focusin":return ya=zn(ya,t,e,a,i,n),!0;case"dragenter":return ba=zn(ba,t,e,a,i,n),!0;case"mouseover":return va=zn(va,t,e,a,i,n),!0;case"pointerover":var l=n.pointerId;return xn.set(l,zn(xn.get(l)||null,t,e,a,i,n)),!0;case"gotpointercapture":return l=n.pointerId,Sn.set(l,zn(Sn.get(l)||null,t,e,a,i,n)),!0}return!1}function yd(t){var e=Za(t.target);if(e!==null){var a=U(e);if(a!==null){if(e=a.tag,e===13){if(e=C(a),e!==null){t.blockedOn=e,Co(t.priority,function(){gd(a)});return}}else if(e===31){if(e=q(a),e!==null){t.blockedOn=e,Co(t.priority,function(){gd(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=ro(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);fc=i,a.target.dispatchEvent(i),fc=null}else return e=Ka(a),e!==null&&pd(e),t.blockedOn=a,!1;e.shift()}return!0}function bd(t,e,a){Yl(t)&&a.delete(e)}function sg(){po=!1,ya!==null&&Yl(ya)&&(ya=null),ba!==null&&Yl(ba)&&(ba=null),va!==null&&Yl(va)&&(va=null),xn.forEach(bd),Sn.forEach(bd)}function Xl(t,e){t.blockedOn===e&&(t.blockedOn=null,po||(po=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,sg)))}var Ql=null;function vd(t){Ql!==t&&(Ql=t,h.unstable_scheduleCallback(h.unstable_NormalPriority,function(){Ql===t&&(Ql=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],n=t[e+2];if(typeof i!="function"){if(fo(i||a)===null)continue;break}var l=Ka(a);l!==null&&(t.splice(e,3),e-=3,ru(l,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function Mi(t){function e(s){return Xl(s,t)}ya!==null&&Xl(ya,t),ba!==null&&Xl(ba,t),va!==null&&Xl(va,t),xn.forEach(e),Sn.forEach(e);for(var a=0;a<xa.length;a++){var i=xa[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)yd(a),a.blockedOn===null&&xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],l=a[i+1],c=n[Xt]||null;if(typeof l=="function")c||vd(a);else if(c){var u=null;if(l&&l.hasAttribute("formAction")){if(n=l,c=l[Xt]||null)u=c.formAction;else if(fo(n)!==null)continue}else u=c.action;typeof u=="function"?a[i+1]=u:(a.splice(i,3),i-=3),vd(a)}}}function xd(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function go(t){this._internalRoot=t}Vl.prototype.render=go.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(p(409));var a=e.current,i=le();fd(a,i,t,e,null,null)},Vl.prototype.unmount=go.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fd(t.current,2,null,t,null,null),Al(),e[La]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Do();t={blockedOn:null,target:t,priority:e};for(var a=0;a<xa.length&&e!==0&&e<xa[a].priority;a++);xa.splice(a,0,t),a===0&&yd(t)}};var Sd=E.version;if(Sd!=="19.2.1")throw Error(p(527,Sd,"19.2.1"));j.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=R(e),t=t!==null?ut(t):null,t=t===null?null:t.stateNode,t};var rg={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{Ci=Ll.inject(rg),Ft=Ll}catch{}}return Tn.createRoot=function(t,e){if(!w(t))throw Error(p(299));var a=!1,i="",n=jr,l=Mr,c=Dr;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=sd(t,1,!1,null,null,a,i,null,n,l,c,xd),t[La]=e.current,$u(t),new go(e)},Tn.hydrateRoot=function(t,e,a){if(!w(t))throw Error(p(299));var i=!1,n="",l=jr,c=Mr,u=Dr,s=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),e=sd(t,1,!0,e,a??null,i,n,s,l,c,u,xd),e.context=rd(null),a=e.current,i=le(),i=ic(i),n=la(i),n.callback=null,ca(a,n,i),a=i,e.current.lanes=a,Hi(e,a),Me(e),t[La]=e.current,$u(t),new Vl(e)},Tn.version="19.2.1",Tn}var Ed;function vg(){if(Ed)return ho.exports;Ed=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(E){console.error(E)}}return h(),ho.exports=bg(),ho.exports}var xg=vg();const Ct={bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgTertiary:"#111111",bgCard:"rgba(255, 255, 255, 0.02)",textPrimary:"#f5f5f7",textSecondary:"#a1a1a6",textTertiary:"#8e8e93",accent:"#2A9D8F",accentHover:"#3BB4A5",accentSubtle:"rgba(42, 157, 143, 0.15)",blue:"#4361A5",lightBlue:"#7BA7D9",cyan:"#3BB4B1",border:"rgba(255, 255, 255, 0.08)",borderHover:"rgba(255, 255, 255, 0.15)",gradient:"linear-gradient(135deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientHorizontal:"linear-gradient(90deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)"},kt={bgPrimary:"#ffffff",bgSecondary:"#f5f5f7",bgTertiary:"#e8e8ed",bgCard:"rgba(0, 0, 0, 0.02)",textPrimary:"#1d1d1f",textSecondary:"#515154",textTertiary:"#6e6e73",accent:"#238076",accentHover:"#1a6b63",accentSubtle:"rgba(42, 157, 143, 0.12)",blue:"#3a5491",lightBlue:"#5a8cc7",cyan:"#2f9d9a",border:"rgba(0, 0, 0, 0.08)",borderHover:"rgba(0, 0, 0, 0.15)",gradient:"linear-gradient(135deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientHorizontal:"linear-gradient(90deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)"},x={colors:Ct,space:{sm:"16px",section:"100px"},typography:{fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',fontSize:{headline:"clamp(40px, 5vw, 64px)",caption:"14px"},fontWeight:{regular:400,medium:500,semibold:600,bold:700},lineHeight:{tight:1.05},letterSpacing:{tight:"-0.03em",wide:"0.1em"}},breakpoints:{mobile:"640px",tablet:"1024px",desktop:"1280px"},borderRadius:{full:"9999px"},zIndex:{sticky:100},maxWidth:{wide:"1200px",full:"1440px"}},Sg=mg`
  /* CSS Variables for dynamic theming */
  :root {
    /* Dark mode (default) */
    --bg-primary: ${Ct.bgPrimary};
    --bg-secondary: ${Ct.bgSecondary};
    --bg-tertiary: ${Ct.bgTertiary};
    --bg-card: ${Ct.bgCard};
    --text-primary: ${Ct.textPrimary};
    --text-secondary: ${Ct.textSecondary};
    --text-tertiary: ${Ct.textTertiary};
    --accent: ${Ct.accent};
    --accent-hover: ${Ct.accentHover};
    --accent-subtle: ${Ct.accentSubtle};
    --blue: ${Ct.blue};
    --cyan: ${Ct.cyan};
    --light-blue: ${Ct.lightBlue};
    --border: ${Ct.border};
    --border-hover: ${Ct.borderHover};
    --gradient: ${Ct.gradient};
    --gradient-horizontal: ${Ct.gradientHorizontal};
    
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
    --bg-primary: ${kt.bgPrimary};
    --bg-secondary: ${kt.bgSecondary};
    --bg-tertiary: ${kt.bgTertiary};
    --bg-card: ${kt.bgCard};
    --text-primary: ${kt.textPrimary};
    --text-secondary: ${kt.textSecondary};
    --text-tertiary: ${kt.textTertiary};
    --accent: ${kt.accent};
    --accent-hover: ${kt.accentHover};
    --accent-subtle: ${kt.accentSubtle};
    --blue: ${kt.blue};
    --cyan: ${kt.cyan};
    --light-blue: ${kt.lightBlue};
    --border: ${kt.border};
    --border-hover: ${kt.borderHover};
    --gradient: ${kt.gradient};
    --gradient-horizontal: ${kt.gradientHorizontal};
    
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
`,Nd=X.createContext(void 0),_d="portfolio-theme-mode",zg=()=>{if(typeof window<"u"){const h=localStorage.getItem(_d);if(h==="dark"||h==="light")return h}return"dark"},Tg=({children:h})=>{const[E,O]=X.useState(zg);X.useEffect(()=>{document.documentElement.setAttribute("data-theme",E),localStorage.setItem(_d,E)},[E]);const p=()=>{O(w=>w==="dark"?"light":"dark")};return o.jsx(Nd.Provider,{value:{mode:E,toggleTheme:p,isDark:E==="dark"},children:h})},Ag=()=>{const h=X.useContext(Nd);if(!h)throw new Error("useTheme must be used within a ThemeProvider");return h},wg=Ot`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Eg=Ot`
  0%, 100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.6;
  }
`,jg=d.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${x.zIndex.sticky};
  max-width: calc(100vw - 48px);
  
  @media (max-width: ${x.breakpoints.tablet}) {
    top: auto;
    bottom: 24px;
    max-width: calc(100vw - 48px);
  }
  
  @media (max-width: 480px) {
    bottom: 16px;
    max-width: calc(100vw - 32px);
  }
`,Mg=d(v.nav)`
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
  
  @media (max-width: ${x.breakpoints.tablet}) {
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
`,Dg=d(v.a)`
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
    animation: ${wg} 1.5s ease infinite;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  @media (max-width: ${x.breakpoints.tablet}) {
    width: 38px;
    height: 38px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;
  }
`,Cg=d.img`
  height: 28px;
  width: auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${x.breakpoints.tablet}) {
    height: 24px;
  }
  
  @media (max-width: 480px) {
    height: 20px;
  }
`,Og=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
  
  @media (max-width: ${x.breakpoints.tablet}) {
    gap: 1px;
  }
  
  @media (max-width: 480px) {
    gap: 0;
  }
`,Hg=d(v.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  font-size: 13px;
  font-weight: ${x.typography.fontWeight.medium};
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 14px;
  transition: color 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  
  ${({$isActive:h})=>h&&Je`
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
  
  @media (max-width: ${x.breakpoints.tablet}) {
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
`,Ug=d(v.div)`
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
    animation: ${Eg} 3s ease-in-out infinite;
    pointer-events: none;
  }
  
  @media (max-width: ${x.breakpoints.tablet}) {
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
`,Bg=d(v.button)`
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
  
  @media (max-width: ${x.breakpoints.tablet}) {
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
`,jd=[{label:"About",href:"#about"},{label:"Skills",href:"#technologyproficiency"},{label:"Experience",href:"#professionalexperience"},{label:"Projects",href:"#mostproudof"},{label:"Contact",href:"#contact"}],Ng=()=>{const[h,E]=X.useState(""),O=X.useRef(null),{isDark:p,toggleTheme:w}=Ag();X.useEffect(()=>{const q=()=>{const _=jd.map(R=>R.href.replace("#",""));for(const R of[..._].reverse()){const ut=document.getElementById(R);if(ut&&ut.getBoundingClientRect().top<=150){E(R);return}}E("")};return window.addEventListener("scroll",q,{passive:!0}),()=>window.removeEventListener("scroll",q)},[]);const U=q=>{const _=q.currentTarget.getBoundingClientRect(),R=(q.clientX-_.left)/_.width*100,ut=(q.clientY-_.top)/_.height*100;q.currentTarget.style.setProperty("--mouse-x",`${R}%`),q.currentTarget.style.setProperty("--mouse-y",`${ut}%`)},C=(q,_)=>{q.preventDefault();const R=document.querySelector(_);if(!R)return;const ut=()=>{R.scrollIntoView({behavior:"smooth",block:"start"})};ut(),setTimeout(ut,500),setTimeout(ut,1e3)};return o.jsx(jg,{ref:O,children:o.jsxs(Mg,{"aria-label":"Main navigation",initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:[.25,.1,.25,1],delay:.2},children:[o.jsx(Dg,{href:"#home",onClick:q=>C(q,"#home"),whileHover:{scale:1.05},whileTap:{scale:.95},children:o.jsxs("picture",{children:[o.jsx("source",{srcSet:"/images/logo-100.webp",type:"image/webp"}),o.jsx(Cg,{src:"/images/logo-optimized.png",alt:"PN",width:28,height:28,loading:"eager",decoding:"async"})]})}),o.jsx(Og,{children:jd.map(q=>{const _=h===q.href.replace("#","");return o.jsxs(Hg,{href:q.href,$isActive:_,"aria-current":_?"page":void 0,onClick:R=>C(R,q.href),onMouseMove:U,whileHover:{scale:1.02},whileTap:{scale:.98},children:[_&&o.jsx(Ug,{layoutId:"navActive",initial:!1,transition:{type:"spring",stiffness:500,damping:35}}),o.jsx("span",{style:{position:"relative",zIndex:1},children:q.label})]},q.label)})}),o.jsx(Bg,{onClick:w,whileHover:{scale:1.05},whileTap:{scale:.95},title:p?"Switch to light mode":"Switch to dark mode","aria-label":p?"Switch to light mode":"Switch to dark mode",role:"button",children:o.jsx($l,{mode:"wait",children:p?o.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.3},children:[o.jsx("circle",{cx:"12",cy:"12",r:"5"}),o.jsx("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]},"sun"):o.jsx(v.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.3},children:o.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})},"moon")})})]})})},qd=Ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,_g=Ot`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`,qg=d(v.footer)`
  padding: 48px 24px;
  padding-bottom: 100px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 56px 80px;
    padding-bottom: 56px;
  }
`,kg=d.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 1px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${qd} 3s ease infinite;
  opacity: 0.6;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    width: 140px;
  }
`,Gg=d(v.div)`
  max-width: ${x.maxWidth.wide};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Rg=d(v.p)`
  font-size: 13px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
  letter-spacing: 0.01em;
  line-height: 1.6;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    font-size: 14px;
  }
`,Yg=d(v.span)`
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
`,Xg=d.span`
  color: #ef4444;
  font-size: 13px;
  display: inline-block;
  animation: ${_g} 1.8s ease-in-out infinite;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    font-size: 14px;
  }
`,Qg=d.span`
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${qd} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${x.typography.fontWeight.semibold};
`,Vg=()=>o.jsxs(qg,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:[o.jsx(kg,{}),o.jsx(Gg,{children:o.jsxs(Rg,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:["Designed & Built With",o.jsx(Yg,{whileHover:{scale:1.2},transition:{type:"spring",stiffness:400,damping:15},children:o.jsx(Xg,{children:"♥"})}),"By ",o.jsx(Qg,{children:"Pranshu"})," • © 2025"]})})]}),Lg=Ot`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`,Zg=Ot`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`,Kg=d(v.div)`
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
`,Jg=d(v.div)`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,Wg=d(v.div)`
  position: absolute;
  width: ${({$size:h})=>h}px;
  height: ${({$size:h})=>h}px;
  border-radius: 50%;
  background: ${({$color:h})=>h};
  filter: blur(1px);
`,Fg=d(v.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,Ig=d(v.div)`
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    width: 180px;
    height: 180px;
  }
`,Pg=d(v.div)`
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
`,tm=d(v.div)`
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
`,vo=d(v.div)`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px solid rgba(42, 157, 143, 0.3);
  animation: ${Zg} 2s ease-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`,em=d(v.img)`
  width: 90px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 25px rgba(42, 157, 143, 0.5));
  
  @media (min-width: ${x.breakpoints.tablet}) {
    width: 110px;
  }
`,am=d(v.div)`
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
    animation: ${Lg} 2s ease-in-out infinite;
  }
`,im={initial:{opacity:1},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2,ease:"easeOut"}}},nm={initial:{opacity:0,scale:1.5},animate:{opacity:1,scale:1,transition:{duration:1.5}},exit:{opacity:0,scale:.95,transition:{duration:.2}}},lm={initial:{},animate:{},exit:{scale:.9,opacity:0,transition:{duration:.2,ease:"easeOut"}}},cm={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},um={initial:{opacity:0,scale:0,rotate:-180},animate:{opacity:1,scale:1,rotate:0,transition:{type:"spring",stiffness:100,damping:15,delay:.2}}},om={initial:{opacity:0,scale:.3,rotateY:-90,filter:"blur(10px)"},animate:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:12,delay:.4}}},sm=({onComplete:h})=>{const[E,O]=X.useState("animate"),p=Array.from({length:20},(w,U)=>({id:U,x:Math.random()*100,y:Math.random()*100,size:Math.random()*4+2,color:U%3===0?"rgba(42, 157, 143, 0.4)":U%3===1?"rgba(59, 180, 177, 0.3)":"rgba(67, 97, 165, 0.3)",duration:Math.random()*3+2,delay:Math.random()*2}));return X.useEffect(()=>{const w=setTimeout(()=>{O("exit")},2200);return()=>clearTimeout(w)},[]),X.useEffect(()=>{if(E==="exit"){const w=setTimeout(()=>{h()},200);return()=>clearTimeout(w)}},[E,h]),o.jsxs(Kg,{variants:im,initial:"initial",animate:E,children:[o.jsx($g,{variants:nm,initial:"initial",animate:E}),o.jsx(Jg,{initial:{opacity:1},animate:{opacity:E==="exit"?0:1},transition:{duration:.2},children:p.map(w=>o.jsx(Wg,{$size:w.size,$color:w.color,style:{left:`${w.x}%`,top:`${w.y}%`},initial:{opacity:0,scale:0},animate:{opacity:[0,.8,0],scale:[0,1,0],y:[0,-100]},transition:{duration:w.duration,delay:w.delay,repeat:1/0,repeatDelay:Math.random()*2}},w.id))}),o.jsx(Fg,{variants:lm,initial:"initial",animate:E,children:o.jsxs(Ig,{children:[o.jsx(Pg,{variants:cm,initial:"initial",animate:"animate"}),o.jsx(vo,{}),o.jsx(vo,{}),o.jsx(vo,{}),o.jsx(tm,{variants:um,initial:"initial",animate:"animate"}),o.jsxs("picture",{children:[o.jsx("source",{srcSet:"/images/logo-optimized.webp",type:"image/webp"}),o.jsx(em,{src:"/images/logo-optimized.png",alt:"PN",width:80,height:80,loading:"eager",decoding:"async",variants:om,initial:"initial",animate:"animate"})]}),o.jsx(am,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:.5}})]})})]})},rm=d.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.4;
  
  @media (max-width: ${x.breakpoints.tablet}) {
    display: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Md=[{r:42,g:157,b:143},{r:59,g:180,b:177},{r:67,g:97,b:165},{r:123,g:167,b:217}],fm=()=>{const h=X.useRef(null),E=X.useRef([]),O=X.useRef(0),p=X.useRef({x:window.innerWidth/2,y:window.innerHeight/2});return X.useEffect(()=>{const w=h.current;if(!w)return;const U=w.getContext("2d");if(!U)return;const C=()=>{const M=window.devicePixelRatio||1;w.width=window.innerWidth*M,w.height=window.innerHeight*M,w.style.width=`${window.innerWidth}px`,w.style.height=`${window.innerHeight}px`,U.scale(M,M)};C(),window.addEventListener("resize",C);const q=4;E.current=[];for(let M=0;M<q;M++)E.current.push({x:window.innerWidth/2,y:window.innerHeight/2,size:60+M*20,color:Md[M%Md.length],speed:.1-M*.015,offset:M*.4});let _=0;const R=()=>{_+=.016,U.clearRect(0,0,w.width,w.height);const M=E.current,$=p.current;for(let Yt=M.length-1;Yt>=0;Yt--){const I=M[Yt],Ht=Math.sin(_*1.5+I.offset*4)*15,dt=Math.cos(_*1.5+I.offset*4)*15;I.x+=($.x+Ht-I.x)*I.speed,I.y+=($.y+dt-I.y)*I.speed;const J=I.size+Math.sin(_*1.2+I.offset*2)*8,bt=U.createRadialGradient(I.x,I.y,0,I.x,I.y,J),{r:gt,g:Et,b:Jt}=I.color;bt.addColorStop(0,`rgba(${gt}, ${Et}, ${Jt}, 0.25)`),bt.addColorStop(.4,`rgba(${gt}, ${Et}, ${Jt}, 0.1)`),bt.addColorStop(.7,`rgba(${gt}, ${Et}, ${Jt}, 0.03)`),bt.addColorStop(1,`rgba(${gt}, ${Et}, ${Jt}, 0)`),U.beginPath(),U.arc(I.x,I.y,J,0,Math.PI*2),U.fillStyle=bt,U.fill()}O.current=requestAnimationFrame(R)},ut=M=>{p.current={x:M.clientX,y:M.clientY}};return window.addEventListener("mousemove",ut),O.current=requestAnimationFrame(R),()=>{window.removeEventListener("resize",C),window.removeEventListener("mousemove",ut),cancelAnimationFrame(O.current)}},[]),o.jsx(rm,{ref:h})},dm=Ot`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,pm=Ot`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(3deg);
  }
`,gm=Ot`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`,mm=Ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,hm=d.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 24px 40px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  overflow: hidden;
  position: relative;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 80px 48px 60px;
  }
  
  @media (min-width: ${x.breakpoints.desktop}) {
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
`,bm=d.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,vm=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    grid-template-columns: 1fr 400px;
    gap: 64px;
  }
  
  @media (min-width: ${x.breakpoints.desktop}) {
    grid-template-columns: 1fr 480px;
    gap: 80px;
  }
`,xm=d.div`
  perspective: 1000px;
`,Sm=d(v.div)`
  display: flex;
  justify-content: center;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`,zm=d(v.div)`
  position: relative;
  width: 280px;
  height: 280px;
  
  @media (min-width: ${x.breakpoints.mobile}) {
    width: 340px;
    height: 340px;
  }
  
  @media (min-width: ${x.breakpoints.tablet}) {
    width: 380px;
    height: 380px;
  }
  
  @media (min-width: ${x.breakpoints.desktop}) {
    width: 440px;
    height: 440px;
  }
`,Tm=d(v.div)`
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
`,Am=d.picture`
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
`,wm=d.div`
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
    animation: ${dm} 6s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: var(--bg-primary);
    border-radius: 24px;
    transition: background-color 0.4s ease;
  }
`,Zl=d(v.div)`
  position: absolute;
  border-radius: 16px;
  z-index: -2;
  animation: ${pm} 5s ease-in-out infinite;
  will-change: transform;
  
  ${({$position:h})=>{switch(h){case"top":return`
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
  
  @media (max-width: ${x.breakpoints.tablet}) {
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
  animation: ${gm} 3s ease-in-out infinite;
  filter: blur(30px);
  will-change: transform, opacity;
`,jm=d(v.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;
`,Mm=d(v.span)`
  width: 40px;
  height: 2px;
  background: var(--gradient-horizontal);
  border-radius: 1px;
  transform-origin: left;
`,Dm=d(v.span)`
  font-size: 13px;
  font-weight: ${x.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${mm} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,Cm=d(v.div)`
  overflow: hidden;
  margin-bottom: 24px;
`,Om=d(v.h1)`
  font-size: clamp(52px, 9vw, 96px);
  font-weight: ${x.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.04em;
  line-height: 0.92;
  transition: color 0.4s ease;
  will-change: transform;
`,Hm=d(v.span)`
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
`,Um=d(v.p)`
  font-size: clamp(17px, 2.2vw, 22px);
  font-weight: ${x.typography.fontWeight.regular};
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 20px;
  transition: color 0.4s ease;
`,Bm=d(v.p)`
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--text-tertiary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color 0.4s ease;
  max-width: 680px;
`,Nm=d(v.div)`
  display: flex;
  gap: 14px;
  flex-wrap: nowrap;
  margin-bottom: 56px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`,_m=d(v.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--text-primary);
  color: var(--bg-primary);
  font-size: 15px;
  font-weight: ${x.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: ${x.borderRadius.full};
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
`,qm=d(v.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 26px; /* 2px less than primary to account for 2px border */
  background: transparent;
  color: var(--text-primary);
  font-size: 15px;
  font-weight: ${x.typography.fontWeight.medium};
  text-decoration: none;
  border: 2px solid var(--text-secondary);
  border-radius: ${x.borderRadius.full};
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
`,km=d(v.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding-top: 36px;
  border-top: 1px solid var(--border);
  transition: border-color 0.4s ease;
  
  @media (min-width: ${x.breakpoints.mobile}) {
    gap: 24px;
  }
  
  @media (min-width: ${x.breakpoints.tablet}) {
    gap: 32px;
  }
`,Gm=d(v.div)`
  text-align: center;
  
  @media (min-width: ${x.breakpoints.mobile}) {
    text-align: left;
  }
`,Rm=d(v.span)`
  display: block;
  font-size: clamp(26px, 5.5vw, 44px);
  font-weight: ${x.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 8px;
  transition: color 0.4s ease;
  
  @media (min-width: ${x.breakpoints.mobile}) {
    font-size: clamp(30px, 4.5vw, 44px);
  }
`,Ym=d.span`
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-transform: uppercase;
  transition: color 0.4s ease;
  
  @media (min-width: ${x.breakpoints.mobile}) {
    font-size: 12px;
  }
`,Xm={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},Kl={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,mass:1}}},Qm={hidden:{opacity:0,y:80,rotateX:-20},visible:{opacity:1,y:0,rotateX:0,transition:{type:"spring",stiffness:80,damping:20,mass:1.2}}},Vm={hidden:{opacity:0,scale:.85,rotateY:-15,filter:"blur(15px)"},visible:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:60,damping:20,mass:1.5,delay:.3}}},Lm={hidden:{scaleX:0},visible:{scaleX:1,transition:{type:"spring",stiffness:100,damping:20,delay:.1}}},Zm={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.6}}},Km={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:150,damping:20}}},$m=({data:h})=>{const E=X.useRef(null),{scrollYProgress:O}=dg({target:E,offset:["start start","end start"]}),p=mo(O,[0,1],["0%","30%"]),w=mo(O,[0,.5],[1,.9]),U=mo(O,[0,.5],[1,.6]),C=zd(p,{stiffness:100,damping:30}),q=zd(w,{stiffness:100,damping:30}),_=[{value:"9+",label:"Years"},{value:"39+",label:"Engineers Led"},{value:"$2M+",label:"Savings"},{value:"15+",label:"Products"}];return o.jsxs(hm,{id:"home",ref:E,children:[o.jsx(ym,{style:{y:C}}),o.jsx(bm,{children:o.jsxs(vm,{children:[o.jsx(xm,{children:o.jsxs(v.div,{variants:Xm,initial:"hidden",animate:"visible",children:[o.jsxs(jm,{variants:Kl,children:[o.jsx(Mm,{variants:Lm}),o.jsx(Dm,{children:"Engineering Leader & Architect"})]}),o.jsx(Cm,{children:o.jsxs(Om,{variants:Qm,children:[o.jsx(Hm,{children:h.name.split(" ")[0]}),o.jsx("br",{}),h.name.split(" ").slice(1).join(" ")]})}),o.jsx(Um,{variants:Kl,children:h.designation}),o.jsx(Bm,{variants:Kl,children:h.headline}),o.jsxs(Nm,{variants:Kl,children:[o.jsxs(_m,{href:"#contact",onClick:R=>{R.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[o.jsx("span",{children:"Get in Touch"}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),o.jsx(qm,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:o.jsx("span",{children:"Download Resume"})})]}),o.jsx(km,{variants:Zm,initial:"hidden",animate:"visible",children:_.map((R,ut)=>o.jsxs(Gm,{variants:Km,children:[o.jsx(Rm,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:100,damping:15,delay:.7+ut*.1},children:R.value}),o.jsx(Ym,{children:R.label})]},ut))})]})}),o.jsx(Sm,{variants:Vm,initial:"hidden",animate:"visible",style:{scale:q,opacity:U},children:o.jsxs(zm,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:200,damping:20},children:[o.jsx(Em,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:.5}}),o.jsx(Zl,{$position:"top",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.6}}),o.jsx(Zl,{$position:"bottom",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.6}}),o.jsx(Zl,{$position:"left",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.9,duration:.6}}),o.jsx(Zl,{$position:"right",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:1.1,duration:.6}}),o.jsx(wm,{}),o.jsx(Tm,{whileHover:{scale:1.03},transition:{type:"spring",stiffness:300,damping:25},children:o.jsxs(Am,{children:[o.jsx("source",{srcSet:"/images/profile.webp",type:"image/webp"}),o.jsx("img",{src:"/images/IMG_0832.PNG",alt:`${h.name} - Engineering Leader & Architect`,width:560,height:560,loading:"eager",decoding:"async",fetchPriority:"high"})]})})]})})]})})]})};d.div`
  width: 100%;
  max-width: ${({$wide:h})=>h?x.maxWidth.full:x.maxWidth.wide};
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${x.breakpoints.mobile}) {
    padding: 0 32px;
  }

  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 0 48px;
  }
`;const kd={primary:Je`
    color: ${x.colors.bgPrimary};
    background: ${x.colors.textPrimary};
    
    &:hover {
      background: ${x.colors.textSecondary};
    }
  `,secondary:Je`
    color: ${x.colors.textPrimary};
    background: transparent;
    border: 1px solid ${x.colors.border};
    
    &:hover {
      border-color: ${x.colors.textSecondary};
    }
  `,ghost:Je`
    color: ${x.colors.accent};
    background: transparent;
    
    &:hover {
      text-decoration: underline;
    }
  `},Gd={sm:Je`
    padding: 8px 16px;
    font-size: 13px;
  `,md:Je`
    padding: 12px 24px;
    font-size: 14px;
  `,lg:Je`
    padding: 16px 32px;
    font-size: 16px;
  `};d(v.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${x.typography.fontFamily};
  font-weight: ${x.typography.fontWeight.medium};
  border-radius: ${x.borderRadius.full};
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  
  ${({$size:h="md"})=>Gd[h]}
  ${({$variant:h="primary"})=>kd[h]}
`;d(v.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${x.typography.fontFamily};
  font-weight: ${x.typography.fontWeight.medium};
  border-radius: ${x.borderRadius.full};
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  
  ${({$size:h="md"})=>Gd[h]}
  ${({$variant:h="primary"})=>kd[h]}
`;const Rd=Ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Jm=d(v.div)`
  margin-bottom: 64px;
  position: relative;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    margin-bottom: 88px;
  }
`,Wm=d.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    gap: 32px;
  }
`,Fm=d(v.div)`
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
  
  @media (min-width: ${x.breakpoints.tablet}) {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }
`,Im=d.span`
  font-size: 14px;
  font-weight: ${x.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Rd} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-variant-numeric: tabular-nums;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    font-size: 16px;
  }
`,Pm=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,th=d(v.span)`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-tertiary);
  font-weight: ${x.typography.fontWeight.medium};
  transition: color 0.4s ease;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    font-size: 12px;
    letter-spacing: 0.18em;
  }
`,eh=d(v.h2)`
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: ${x.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.1;
  transition: color 0.4s ease;
  margin: 0;
`,ah=d(v.div)`
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
  
  @media (min-width: ${x.breakpoints.tablet}) {
    width: 80px;
    bottom: -24px;
  }
`,ih={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},nh={hidden:{opacity:0,scale:.8,filter:"blur(4px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:200,damping:20}}},lh={hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:150,damping:20}}},ch={hidden:{opacity:0,y:20,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},uh={hidden:{scaleX:0,opacity:0},visible:{scaleX:1,opacity:1,transition:{duration:.6,ease:[.25,.1,.25,1],delay:.3}}},oh={About:"Who I Am",Skills:"Technical Expertise",Experience:"Career Journey",Projects:"Featured Work",Certifications:"Credentials",Testimonials:"What Others Say",Education:"Academic Background",Contact:"Get In Touch"},za=({number:h,title:E,inView:O=!0})=>{const p=oh[E]||"Section";return o.jsxs(Jm,{variants:ih,initial:"hidden",animate:O?"visible":"hidden",children:[o.jsxs(Wm,{children:[o.jsx(Fm,{variants:nh,children:o.jsx(Im,{children:h})}),o.jsxs(Pm,{children:[o.jsx(th,{variants:lh,children:p}),o.jsx(eh,{variants:ch,children:E})]})]}),o.jsx(ah,{variants:uh})]})};d.section`
  padding: 64px 24px;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: ${x.space.section} 80px;
  }
`;d.p`
  font-size: ${x.typography.fontSize.caption};
  font-weight: ${x.typography.fontWeight.medium};
  color: ${x.colors.textTertiary};
  letter-spacing: ${x.typography.letterSpacing.wide};
  text-transform: uppercase;
  margin-bottom: ${x.space.sm};
`;d.h2`
  font-size: ${x.typography.fontSize.headline};
  font-weight: ${x.typography.fontWeight.semibold};
  color: ${x.colors.textPrimary};
  letter-spacing: ${x.typography.letterSpacing.tight};
  line-height: ${x.typography.lineHeight.tight};
`;const sh=Ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,rh=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,fh=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,dh=d(v.div)`
  margin-bottom: 48px;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    margin-bottom: 64px;
  }
`,ph=d(v.div)`
  position: relative;
  padding-left: 36px;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding-left: 56px;
  }
`,gh=d(v.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient);
  background-size: 100% 200%;
  animation: ${sh} 3s ease infinite;
  border-radius: 2px;
  transform-origin: top;
`,mh=d(v.p)`
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: ${x.typography.fontWeight.regular};
  color: var(--text-primary);
  line-height: 1.6;
  letter-spacing: -0.01em;
  font-style: italic;
  transition: color 0.4s ease;
`,hh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 64px;
  }
`,Dd=d(v.div)``,Cd=d(v.h3)`
  font-size: 13px;
  font-weight: ${x.typography.fontWeight.semibold};
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
`,Od=d(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.85;
  transition: color 0.4s ease;
`,yh=d(v.div)`
  margin-bottom: 48px;
`,bh=d(v.h3)`
  font-size: 13px;
  font-weight: ${x.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  transition: color 0.4s ease;
`,vh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: ${x.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    transition: background-color 0.4s ease, border-color 0.4s ease;
  }
`,xh=d(v.div)`
  background: var(--bg-primary);
  padding: 36px;
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
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
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  @media (min-width: ${x.breakpoints.mobile}) {
    padding: 48px 36px;
  }
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 56px 44px;
  }
`,Sh=d(v.h4)`
  font-size: 19px;
  font-weight: ${x.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 18px;
  line-height: 1.35;
  transition: color 0.4s ease;
`,zh=d(v.p)`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color 0.4s ease;
`,Th=d(v.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding-top: 56px;
  border-top: 1px solid var(--border);
  transition: border-color 0.4s ease;
  
  @media (min-width: ${x.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,Ah=d(v.p)`
  font-size: 19px;
  color: var(--text-secondary);
  transition: color 0.4s ease;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    font-size: 21px;
  }
`,wh=d(v.a)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: var(--text-primary);
  color: var(--bg-primary);
  font-size: 15px;
  font-weight: ${x.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: ${x.borderRadius.full};
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
`,Eh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},jh={hidden:{opacity:0,y:50,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:20,mass:1}}},Mh={hidden:{scaleY:0},visible:{scaleY:1,transition:{type:"spring",stiffness:100,damping:20,delay:.2}}},Hd={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:h=>({opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,delay:h*.15}})},Dh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},Ch={hidden:{opacity:0,y:40,scale:.95,filter:"blur(6px)"},visible:{opacity:1,y:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},Oh=({data:h})=>{const E=X.useRef(null),O=Te(E,{once:!0,margin:"-100px"}),p=X.useRef(null),w=Te(p,{once:!0,margin:"-50px"}),U=X.useRef(null),C=Te(U,{once:!0,margin:"-50px"}),q=X.useRef(null),_=Te(q,{once:!0,margin:"-50px"}),R=h.content.slice(0,3).map(M=>M.replace(/^🔹\s*/,"").trim()),ut=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}];return o.jsx(rh,{id:"about",ref:E,children:o.jsxs(fh,{children:[o.jsx(za,{number:"01",title:"About",inView:O}),o.jsx(dh,{ref:p,children:o.jsxs(ph,{initial:"hidden",animate:w?"visible":"hidden",variants:Eh,children:[o.jsx(gh,{variants:Mh}),o.jsx(mh,{variants:jh,children:R[0]})]})}),o.jsxs(hh,{ref:U,children:[o.jsxs(Dd,{variants:Hd,custom:0,initial:"hidden",animate:C?"visible":"hidden",children:[o.jsx(Cd,{initial:{opacity:0,x:-20},animate:C?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Transformation"}),o.jsx(Od,{initial:{opacity:0,y:20},animate:C?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:R[1]})]}),o.jsxs(Dd,{variants:Hd,custom:1,initial:"hidden",animate:C?"visible":"hidden",children:[o.jsx(Cd,{initial:{opacity:0,x:-20},animate:C?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.15},children:"Philosophy"}),o.jsx(Od,{initial:{opacity:0,y:20},animate:C?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.25},children:R[2]})]})]}),o.jsxs(yh,{ref:q,children:[o.jsx(bh,{initial:{opacity:0,y:20},animate:_?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Key Highlights"}),o.jsx(vh,{variants:Dh,initial:"hidden",animate:_?"visible":"hidden",children:ut.map((M,$)=>o.jsxs(xh,{variants:Ch,whileHover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},children:[o.jsx(Sh,{children:M.title}),o.jsx(zh,{children:M.text})]},$))})]}),o.jsxs(Th,{initial:{opacity:0,y:30},animate:O?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[o.jsx(Ah,{children:"Want to know more?"}),o.jsxs(wh,{href:h.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[o.jsx("span",{children:h.buttonProps.name}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]})})},Hh=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Uh=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Bh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  
  @media (min-width: ${x.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 72px;
  }
  
  @media (min-width: ${x.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 56px 88px;
  }
`,Nh=d(v.div)``,_h=d(v.h3)`
  font-size: 13px;
  font-weight: ${x.typography.fontWeight.semibold};
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
`,qh=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,kh=d(v.li)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Gh=d(v.div)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,Rh=d(v.span)`
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
`,Yh=d(v.span)`
  font-size: 13px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  font-weight: ${x.typography.fontWeight.medium};
  transition: color 0.4s ease;
`,Xh=d(v.div)`
  width: 100%;
  height: 3px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
  transition: background-color 0.4s ease;
  position: relative;
`,Qh=d(v.div)`
  height: 100%;
  background: var(--gradient-horizontal);
  border-radius: 2px;
  transform-origin: left;
`,Vh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},Lh={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18,staggerChildren:.06,delayChildren:.1}}},Zh={hidden:{opacity:0,x:-20,filter:"blur(4px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:120,damping:20}}},Kh={hidden:{scaleX:0,opacity:0},visible:h=>({scaleX:h/100,opacity:1,transition:{scaleX:{type:"spring",stiffness:50,damping:15,mass:1},opacity:{duration:.3}}})},$h=({data:h})=>{const E=X.useRef(null),O=Te(E,{once:!0,margin:"-100px"});return o.jsx(Hh,{id:"technologyproficiency",ref:E,children:o.jsxs(Uh,{children:[o.jsx(za,{number:"02",title:"Skills",inView:O}),o.jsx(Bh,{variants:Vh,initial:"hidden",animate:O?"visible":"hidden",children:h.skills.map((p,w)=>o.jsxs(Nh,{variants:Lh,custom:w,children:[o.jsx(_h,{initial:{opacity:0,x:-20},animate:O?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.2+w*.08},children:p.category}),o.jsx(qh,{children:p.skills.map((U,C)=>o.jsxs(kh,{variants:Zh,whileHover:{x:8,transition:{type:"spring",stiffness:400,damping:25}},children:[o.jsxs(Gh,{children:[o.jsx(Rh,{children:U.name}),o.jsxs(Yh,{initial:{opacity:0,scale:.8},animate:O?{opacity:1,scale:1}:{},transition:{type:"spring",stiffness:150,damping:20,delay:.4+w*.1+C*.05},children:[U.percentage,"%"]})]}),o.jsx(Xh,{children:o.jsx(Qh,{variants:Kh,custom:U.percentage,initial:"hidden",animate:O?"visible":"hidden",transition:{delay:.5+w*.1+C*.06},style:{width:`${U.percentage}%`}})})]},U.name))})]},p.category))})]})})},Jh=Ot`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(42, 157, 143, 0);
  }
  50% {
    box-shadow: 0 0 20px 5px rgba(42, 157, 143, 0.15);
  }
`,Wh=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Fh=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Ih=d(v.div)``,Ph=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: border-color 0.4s ease;
  position: relative;
  
  @media (min-width: ${x.breakpoints.tablet}) {
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
  
  @media (min-width: ${x.breakpoints.tablet}) {
    &::before {
      left: -48px;
    }
  }
`,t1=d(v.div)``,e1=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color 0.4s ease;
`,a1=d(v.div)``,i1=d(v.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 10px;
`,n1=d(v.h3)`
  font-size: 22px;
  font-weight: ${x.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.01em;
  transition: color 0.4s ease;
  
  @media (min-width: ${x.breakpoints.tablet}) {
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
`,l1=d(v.div)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({$isOpen:h})=>h?"var(--accent)":"transparent"};
  border: 1.5px solid ${({$isOpen:h})=>h?"var(--accent)":"var(--border)"};
  flex-shrink: 0;
  will-change: transform, background, border-color;
  
  ${({$isOpen:h})=>h&&Je`
    animation: ${Jh} 2s ease-in-out infinite;
  `}
  
  svg {
    width: 14px;
    height: 14px;
    color: ${({$isOpen:h})=>h?"var(--bg-primary)":"var(--text-secondary)"};
    will-change: transform;
  }
`,c1=d(v.p)`
  font-size: 16px;
  color: var(--accent);
  font-weight: ${x.typography.fontWeight.medium};
  margin-bottom: 6px;
  transition: color 0.4s ease;
`,u1=d(v.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  flex-wrap: wrap;
`,o1=d.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
  font-weight: ${x.typography.fontWeight.medium};
`,s1=d.span`
  font-size: 14px;
  color: var(--text-secondary);
  font-style: italic;
  transition: color 0.4s ease;
`,r1=d(v.p)`
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
`,f1=d(v.div)`
  overflow: hidden;
  will-change: height, opacity;
`,d1=d(v.div)`
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  will-change: transform, opacity;
  transition: border-color 0.4s ease;
`,p1=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,g1=d(v.li)`
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
`,m1={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12}}},h1={hidden:{opacity:0,y:50,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},y1={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35,mass:1},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},b1={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.08}}},v1={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.12}}},x1={collapsed:{opacity:0,x:-15,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},S1=({data:h})=>{const[E,O]=X.useState(new Set),p=X.useRef(null),w=Te(p,{once:!0,margin:"-100px"}),U=C=>{O(q=>{const _=new Set(q);return _.has(C)?_.delete(C):_.add(C),_})};return o.jsx(Wh,{id:"professionalexperience",ref:p,children:o.jsxs(Fh,{children:[o.jsx(za,{number:"03",title:"Experience",inView:w}),o.jsx(Ih,{variants:m1,initial:"hidden",animate:w?"visible":"hidden",children:h.timeline.map((C,q)=>{const _=E.has(q);return o.jsxs(Ph,{variants:h1,onClick:()=>U(q),whileHover:{x:8,transition:{type:"spring",stiffness:300,damping:25}},children:[o.jsx(t1,{children:o.jsx(e1,{initial:{opacity:0,x:-20},animate:w?{opacity:1,x:0}:{},transition:{delay:.2+q*.1},children:C.date})}),o.jsxs(a1,{children:[o.jsxs(i1,{children:[o.jsxs("div",{children:[o.jsx(n1,{children:o.jsx("a",{href:C.url,target:"_blank",rel:"noopener noreferrer",onClick:R=>R.stopPropagation(),children:C.title})}),o.jsx(c1,{children:C.subTitle}),C.previously&&o.jsxs(u1,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.1},children:[o.jsx(o1,{children:"Previously:"}),o.jsx(s1,{children:C.previously})]})]}),o.jsx(l1,{$isOpen:_,animate:{rotate:_?45:0,scale:_?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:o.jsx(v.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),o.jsx(r1,{dangerouslySetInnerHTML:{__html:C.descriptionSummary}}),o.jsx($l,{initial:!1,children:_&&o.jsx(f1,{variants:y1,initial:"collapsed",animate:"expanded",exit:"collapsed",children:o.jsx(d1,{variants:b1,children:o.jsx(p1,{variants:v1,initial:"collapsed",animate:"expanded",exit:"collapsed",children:C.description.map((R,ut)=>o.jsx(g1,{variants:x1,children:R},ut))})})},"content")})]})]},q)})})]})})},Yd=Ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,z1=Ot`
  0%, 100% {
    box-shadow: 0 0 20px rgba(42, 157, 143, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(42, 157, 143, 0.2);
  }
`,T1=d.section`
  padding: 64px 24px;
  overflow: hidden;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,A1=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,w1=d(v.div)`
  position: relative;
`,E1=d.div`
  position: relative;
  perspective: 1000px;
`,j1=d(v.article)`
  border-radius: 24px;
  will-change: transform, opacity;
  overflow: hidden;
  position: relative;
  animation: ${z1} 4s ease-in-out infinite;
  
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
  
  @media (min-width: ${x.breakpoints.tablet}) {
    border-radius: 28px;
    
    &::before {
      border-radius: 28px;
    }
  }
`,M1=d(v.div)`
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
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 32px 40px;
  }
`,D1=d(v.h3)`
  font-size: 20px;
  font-weight: ${x.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.35;
  flex: 1;
  transition: color 0.4s ease;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    font-size: 24px;
  }
`,C1=d(v.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid ${({$isExpanded:h})=>h?"var(--accent)":"var(--border)"};
  background: ${({$isExpanded:h})=>h?"var(--accent-subtle)":"transparent"};
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
    color: ${({$isExpanded:h})=>h?"var(--accent)":"var(--text-secondary)"};
    will-change: transform;
  }
`,O1=d(v.div)`
  overflow: hidden;
  will-change: height;
`,H1=d(v.div)`
  padding: 0 32px 32px;
  border-top: 1px solid var(--border);
  padding-top: 28px;
  transition: border-color 0.4s ease;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 0 40px 36px;
    padding-top: 32px;
  }
`,U1=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 36px;
  }
`,B1=d(v.li)`
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
  
  @media (min-width: ${x.breakpoints.tablet}) {
    font-size: 16px;
  }
`,N1=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 48px;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    gap: 36px;
    margin-top: 56px;
  }
`,Ud=d(v.button)`
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
`,_1=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,q1=d(v.button)`
  width: ${({$isActive:h})=>h?"36px":"12px"};
  height: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: ${({$isActive:h})=>h?"var(--gradient)":"var(--border)"};
  background-size: 200% 200%;
  ${({$isActive:h})=>h&&Je`
    animation: ${Yd} 3s ease infinite;
  `}
  will-change: width, background;
  
  &:hover {
    background: ${({$isActive:h})=>h?"var(--gradient)":"var(--text-tertiary)"};
  }
`,k1={enter:h=>({x:h>0?80:-80,opacity:0,scale:.98}),center:{x:0,opacity:1,scale:1,transition:{type:"spring",stiffness:500,damping:35,mass:.8}},exit:h=>({x:h<0?80:-80,opacity:0,scale:.98,transition:{type:"spring",stiffness:500,damping:35,mass:.8}})},G1={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},R1={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.1}}},Y1={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.15}}},X1={collapsed:{opacity:0,x:-20,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},Q1=({data:h})=>{const[[E,O],p]=X.useState([0,0]),[w,U]=X.useState(!1),[C,q]=X.useState(!1),_=X.useRef(null),R=X.useRef(null),ut=X.useRef(0),M=Te(_,{once:!0,margin:"-100px"}),$=X.useCallback(dt=>{if(C)return;const J=E+dt;J>=0&&J<h.content.length&&(q(!0),p([J,dt]),U(!1),setTimeout(()=>q(!1),350))},[E,h.content.length,C]),Yt=X.useCallback(dt=>{if(C||dt===E)return;const J=dt>E?1:-1;q(!0),p([dt,J]),U(!1),setTimeout(()=>q(!1),350)},[E,C]);X.useEffect(()=>{const dt=R.current;if(!dt)return;const J=bt=>{const gt=Date.now();if(gt-ut.current<300)return;const Et=Math.abs(bt.deltaX)>Math.abs(bt.deltaY)?bt.deltaX:bt.deltaY;if(Math.abs(Et)>20){const ce=E<h.content.length-1,be=E>0;(Et>0&&ce||Et<0&&be)&&(bt.preventDefault(),bt.stopPropagation(),ut.current=gt,Et>0?$(1):$(-1))}};return dt.addEventListener("wheel",J,{passive:!1}),()=>dt.removeEventListener("wheel",J)},[E,h.content.length,$]);const I=X.useCallback((dt,J)=>{if(C)return;const bt=30,gt=200;J.velocity.x>gt||J.offset.x>bt?E>0&&$(-1):(J.velocity.x<-gt||J.offset.x<-bt)&&E<h.content.length-1&&$(1)},[E,h.content.length,C,$]),Ht=h.content[E];return o.jsx(T1,{id:"mostproudof",ref:_,children:o.jsxs(A1,{children:[o.jsx(za,{number:"04",title:"Projects",inView:M}),o.jsxs(w1,{initial:{opacity:0,y:40},animate:M?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:20,delay:.2},children:[o.jsx(E1,{ref:R,children:o.jsx($l,{initial:!1,custom:O,mode:"wait",children:o.jsxs(j1,{custom:O,variants:k1,initial:"enter",animate:"center",exit:"exit",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.1,dragMomentum:!1,onDragEnd:I,transition:{x:{type:"spring",stiffness:500,damping:35,mass:.8},opacity:{duration:.2},scale:{type:"spring",stiffness:500,damping:35,mass:.8}},style:{cursor:"grab",touchAction:"pan-y"},whileDrag:{cursor:"grabbing",scale:1.01},children:[o.jsxs(M1,{$isExpanded:w,onClick:()=>U(!w),whileHover:{scale:1.01},transition:{type:"spring",stiffness:400,damping:25},children:[o.jsx(D1,{children:Ht.title}),o.jsx(C1,{$isExpanded:w,"aria-label":w?"Collapse project details":"Expand project details","aria-expanded":w,animate:{rotate:w?45:0,scale:w?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:o.jsx(v.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),o.jsx($l,{initial:!1,children:w&&o.jsx(O1,{variants:G1,initial:"collapsed",animate:"expanded",exit:"collapsed",children:o.jsx(H1,{variants:R1,children:o.jsx(U1,{variants:Y1,initial:"collapsed",animate:"expanded",exit:"collapsed",children:Ht.content.map((dt,J)=>o.jsx(B1,{variants:X1,children:dt},J))})})})})]},E)})}),o.jsxs(N1,{initial:{opacity:0,y:20},animate:M?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[o.jsx(Ud,{onClick:()=>$(-1),disabled:E===0,"aria-label":"Previous project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(_1,{role:"tablist","aria-label":"Project navigation",children:h.content.map((dt,J)=>o.jsx(q1,{$isActive:E===J,onClick:()=>Yt(J),role:"tab","aria-selected":E===J,"aria-label":`Go to project ${J+1}: ${dt.title}`,whileHover:{scale:1.1},whileTap:{scale:.95},animate:{width:E===J?36:12},transition:{type:"spring",stiffness:400,damping:25}},J))}),o.jsx(Ud,{onClick:()=>$(1),disabled:E===h.content.length-1,"aria-label":"Next project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]})]})})},V1=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,L1=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Z1=d(v.div)`
  display: flex;
  flex-direction: column;
`,K1=d(v.div)`
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
  
  @media (min-width: ${x.breakpoints.tablet}) {
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
`,$1=d(v.div)`
  flex: 1;
`,J1=d(v.h3)`
  font-size: 18px;
  font-weight: ${x.typography.fontWeight.semibold};
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 6px;
  transition: color 0.4s ease;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    font-size: 20px;
  }
`,W1=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
`,F1=d(v.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: ${x.typography.fontWeight.medium};
  color: var(--blue);
  text-decoration: none;
  border: 1.5px solid var(--border);
  border-radius: ${x.borderRadius.full};
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
`,I1={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},P1={hidden:{opacity:0,x:-40,filter:"blur(8px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},ty=({data:h})=>{const E=X.useRef(null),O=Te(E,{once:!0,margin:"-100px"}),p=w=>w.toLowerCase().includes("azure")||w.toLowerCase().includes("microsoft")?"Microsoft":w.toLowerCase().includes("aws")?"Amazon Web Services":"";return o.jsx(V1,{id:"certifications",ref:E,children:o.jsxs(L1,{children:[o.jsx(za,{number:"05",title:"Certifications",inView:O}),o.jsx(Z1,{variants:I1,initial:"hidden",animate:O?"visible":"hidden",children:h.certificateProps.certificateMetaData.map((w,U)=>o.jsxs(K1,{variants:P1,whileHover:{x:12,transition:{type:"spring",stiffness:400,damping:25}},children:[o.jsxs($1,{children:[o.jsx(J1,{children:w.title}),o.jsx(W1,{children:p(w.title)})]}),o.jsxs(F1,{href:w.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[o.jsx("span",{children:"Verify"}),o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),o.jsx("polyline",{points:"15,3 21,3 21,9"}),o.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]},U))})]})})},ey=Ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,ay=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,iy=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,ny=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }
`,ly=d(v.blockquote)`
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
    animation: ${ey} 3s ease infinite;
  }
  
  &:hover {
    border-color: transparent;
  }
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 52px;
  }
`,cy=d(v.div)`
  font-size: 56px;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 24px;
  font-weight: bold;
`,uy=d(v.p)`
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 28px;
  font-style: italic;
  transition: color 0.4s ease;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    font-size: 18px;
  }
`,oy=d(v.footer)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,sy=d(v.cite)`
  font-size: 16px;
  font-weight: ${x.typography.fontWeight.semibold};
  color: var(--text-primary);
  font-style: normal;
  transition: color 0.4s ease;
`,ry=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
`,fy={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},dy={hidden:{opacity:0,y:50,scale:.95,filter:"blur(10px)"},visible:{opacity:1,y:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},py={hidden:{opacity:0,scale:.5,filter:"blur(4px)"},visible:{opacity:.5,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:150,damping:15}}},gy={hidden:{opacity:0,y:15,filter:"blur(4px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18,delay:.1}}},my=({data:h})=>{const E=X.useRef(null),O=Te(E,{once:!0,margin:"-100px"});return o.jsx(ay,{id:"testimonials",ref:E,children:o.jsxs(iy,{children:[o.jsx(za,{number:"06",title:"Testimonials",inView:O}),o.jsx(ny,{variants:fy,initial:"hidden",animate:O?"visible":"hidden",children:h.quoteProps.quoteMetaData.map((p,w)=>o.jsxs(ly,{variants:dy,whileHover:{y:-10,scale:1.02,transition:{type:"spring",stiffness:300,damping:20}},children:[o.jsx(cy,{variants:py,children:'"'}),o.jsx(uy,{variants:gy,children:p.quote}),o.jsxs(oy,{children:[o.jsx(sy,{initial:{opacity:0,x:-10},animate:O?{opacity:1,x:0}:{},transition:{delay:.3+w*.1},children:p.givenBy}),o.jsx(ry,{initial:{opacity:0,x:-10},animate:O?{opacity:1,x:0}:{},transition:{delay:.35+w*.1},children:p.subTitleGivenBy})]})]},w))})]})})},hy=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,yy=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,by=d(v.div)`
  display: flex;
  flex-direction: column;
`,vy=d(v.div)`
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
  
  @media (min-width: ${x.breakpoints.tablet}) {
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
`,xy=d(v.span)`
  font-size: 15px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color 0.4s ease;
  font-weight: ${x.typography.fontWeight.medium};
`,Sy=d(v.div)``,zy=d(v.h3)`
  font-size: 20px;
  font-weight: ${x.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
  transition: color 0.4s ease;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    font-size: 22px;
  }
`,Ty=d(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  transition: color 0.4s ease;
`,Ay={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12}}},wy={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},Ey={hidden:{opacity:0,x:-20,filter:"blur(4px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18,delay:.1}}},jy=({data:h})=>{const E=X.useRef(null),O=Te(E,{once:!0,margin:"-100px"});return o.jsx(hy,{id:"educationalqualifications",ref:E,children:o.jsxs(yy,{children:[o.jsx(za,{number:"07",title:"Education",inView:O}),o.jsx(by,{variants:Ay,initial:"hidden",animate:O?"visible":"hidden",children:h.timeline.map((p,w)=>o.jsxs(vy,{variants:wy,whileHover:{x:16,transition:{type:"spring",stiffness:400,damping:25}},children:[o.jsx(xy,{initial:{opacity:0,y:10},animate:O?{opacity:1,y:0}:{},transition:{delay:.2+w*.1},children:p.date}),o.jsxs(Sy,{variants:Ey,children:[o.jsx(zy,{children:p.title}),o.jsx(Ty,{children:p.subTitle})]})]},w))})]})})},Xd=Ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,My=Ot`
  0%, 100% {
    box-shadow: 0 0 20px rgba(42, 157, 143, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(42, 157, 143, 0.2);
  }
`,Dy=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Cy=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Oy=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 72px;
  
  @media (min-width: ${x.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`,Hy=d(v.div)``,Uy=d(v.h3)`
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: ${x.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  transition: color 0.4s ease;
`,By=d(v.p)`
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color 0.4s ease;
`,Ny=d(v.a)`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-size: 19px;
  font-weight: ${x.typography.fontWeight.medium};
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
`,_y=d(v.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,qy=d(v.a)`
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
`,ky=d(v.div)`
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
  animation: ${My} 4s ease-in-out infinite;
  
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
`,Gy=d(v.div)`
  position: relative;
  z-index: 1;
`,Ry=d(v.span)`
  display: block;
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  transition: color 0.4s ease;
`,Yy=d(v.span)`
  font-size: 17px;
  font-weight: ${x.typography.fontWeight.medium};
  color: var(--text-primary);
  transition: color 0.4s ease;
`,Bd={mail:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),o.jsx("path",{d:"M22 6L12 13 2 6"})]}),phone:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:o.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),linkedin:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),o.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),o.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),location:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]})},Xy={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},Qy={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},Vy={hidden:{opacity:0,x:30,scale:.95,filter:"blur(4px)"},visible:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},Ly=({data:h})=>{const E=X.useRef(null),O=Te(E,{once:!0,margin:"-100px"}),p=C=>Bd[C.toLowerCase()]||Bd.mail,w=C=>({mail:"Email",phone:"Phone",linkedin:"LinkedIn",location:"Location"})[C.toLowerCase()]||C,U=h.contactMetaData.find(C=>C.icon.toLowerCase()==="mail");return o.jsx(Dy,{id:"contact",ref:E,children:o.jsxs(Cy,{children:[o.jsx(za,{number:"08",title:"Contact",inView:O}),o.jsxs(Oy,{variants:Xy,initial:"hidden",animate:O?"visible":"hidden",children:[o.jsxs(Hy,{variants:Qy,children:[o.jsx(Uy,{initial:{opacity:0,y:30},animate:O?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:18},children:"Let's work together"}),o.jsx(By,{initial:{opacity:0,y:20},animate:O?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:18,delay:.1},children:"Have a project in mind or want to discuss opportunities? I'd love to hear from you."}),U&&o.jsxs(Ny,{href:U.href,initial:{opacity:0,y:20},animate:O?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:18,delay:.2},whileHover:{scale:1.02},whileTap:{scale:.98},children:[o.jsx("span",{children:U.content}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),o.jsx(_y,{children:h.contactMetaData.filter(C=>C.icon.toLowerCase()!=="phone").map((C,q)=>o.jsxs(qy,{href:C.href,target:C.href.startsWith("http")?"_blank":void 0,rel:C.href.startsWith("http")?"noopener noreferrer":void 0,variants:Vy,custom:q,initial:"hidden",animate:O?"visible":"hidden",transition:{delay:.3+q*.1},whileHover:{x:12,scale:1.02,transition:{type:"spring",stiffness:400,damping:25}},whileTap:{scale:.98},children:[o.jsx(ky,{whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:20},children:p(C.icon)}),o.jsxs(Gy,{children:[o.jsx(Ry,{children:w(C.icon)}),o.jsx(Yy,{children:C.content})]})]},q))})]})]})})},Zy={sectionTitle:"About Me",content:["🔹  I specialize in crafting multi-tenant, event-driven, and Micro-Services architectures on Azure and AWS, enabling real-time intelligence at scale. My leadership has accelerated delivery velocity by 25% and nurtured high-performing teams of 39+ engineers across international locations.","An expert in transforming monoliths into cloud-native Micro-Services, designing AI-driven orchestration platforms, and modernizing data pipelines using Spark, Databricks, and real-time analytics.","Passionate about balancing technical depth with business outcomes, aligning architecture roadmaps with OKRs, and embedding security and compliance (SOC2, InfoSec) across the SDLC.",`💡 Key Highlights: 
 ✅ Product & Project Expertise — Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT. 
 
 ✅ Technical Edge — Deep experience leading and mentoring global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, Docker/Kubernetes, and DevOps automation. 
 
 ✅ Business Outcomes — Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution.`],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},Ky={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},$y={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},Jy={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},Wy={name:"Pranshu Nijhawan",designation:"Designing for Scale, Leading for Impact",headline:"Strategic Engineering Leader with 9+ years of experience architecting scalable SaaS platforms, leading global teams, and driving multimillion-dollar cost optimizations. Expert in cloud-native transformations, data-intensive systems, and multi-tenant architectures that enable real-time intelligence and business growth. Proven track record of reducing operational costs by $2M+, improving delivery velocity by 25%, and mentoring high-performing engineering teams.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},Fy={sectionTitle:"Most Proud Of",content:[{id:1,title:"SearchSphere – Multi-Tenant Search Platform with RAG and Vectorization",content:["Designed and architected a fully configurable multi-tenant search platform using TypeScript, Node.js, and PostgreSQL.","Implemented vectorization and Retrieval Augmented Generation (RAG) to enable intelligent global and dimension-based search capabilities.","Enabled onboarding of new search dimensions dynamically via configuration, eliminating the need for code changes.","Successfully decommissioned Elasticsearch, achieving platform simplification and over $2 million in cost savings.","Built for high scalability, supporting tenant isolation and extensibility without compromising performance."]},{id:2,title:"Zero-Downtime ETL Platform – Scalable Blue/Green Data Processing at Scale",content:["Engineered a highly scalable and fault-tolerant ETL platform using Databricks, Spark, Azure Data Factory, and PostgreSQL.","Designed around a Blue/Green deployment strategy to ensure zero downtime during data ingestion and transformation cycles.","Processed 200+ million records across 100+ tables in under 15 minutes using Change Data Capture (CDC) and dynamic schema allocation techniques.","Enabled seamless schema evolution and pipeline reusability across multiple tenants and data domains.","Delivered a production-grade solution with operational efficiency, reliability, and real-time recovery capabilities."]},{id:3,title:"Orchestron – AI Orchestrated Modular Data Processing & Explosion Platform",content:["Architected a high-performance data processing and explosion platform using .NET, Apache Spark, and Kubernetes.","Designed a modular, plug-and-play architecture with configurable rules to enable seamless data transformation at scale.","Integrated Generative AI Agents to manage orchestration and rule governance, enabling intelligent, adaptive processing workflows.","Achieved dynamic scalability and reusability across domains through containerized deployments and configuration-driven pipelines.","Delivered a flexible and future-proof platform capable of adapting to evolving data models and transformation logic with minimal effort."]},{id:4,title:"Polymorphic Self-Mutating Encryption Algorithm",content:["Created a highly secured Hybrid Encryption Algorithm, a combination of hashing and dynamic key-based Encryption Algorithm.",'Solve the drawback of traditional Hashing technique to always create a unique hash value with an "Always Unique" based mechanism ignoring the need to store a key as followed in Key Based Encryption technique.']},{id:5,title:"Global Dependency Tracer",content:["Created a highly optimized Dependency Trace writer, based on Aspect-Oriented-Programming (AOP) Paradigm.","Architected using .NET Core's built-in Dependency Injection (DI) Containers by injecting dynamic proxies acting as a Middleware for all service calls."]},{id:6,title:"Dynamic Result Library for IQueryable & IEnumerable Collections",content:["Created a highly customizable library for Non-Generic collections IQueryable & IEnumerable based on concepts of Reflection for transforming Custom Data objects into LINQ compatible Lambda Expressions.","Dynamic Filter: Generate lambda expressions for LINQ's where extension method to filter data based on defined properties and values.","Dynamic Sort: Generate LINQ's ordering extensions with lambda expressions to sort the object in any direction (Ascending & Descending).","Dynamic Select: Generate lambda expressions for LINQ's select extension to fetch only the provided properties and filter the response using Custom Middleware Injection in .NET Core's request cycle.","Fully Compatible for EF Core's Translations."]}]},Iy={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect I",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 - Present",descriptionSummary:'At McKinsey, I lead architectural vision for <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a>, a flagship <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> product for CPG and retail clients. My role involves bridging deep technical expertise with strategic client engagement, advising senior product and consulting leaders, and driving solution design for high-stakes RFPs and enterprise implementations. I ensure our technical strategy delivers measurable client impact, while also leading a global team of 39 engineers in strategic technical delivery.',description:["Directed a 39-person team on Promotion Advisor, automating 80% of manual tasks to optimize trade spend and maximize ROI, yielding $2M annual savings through targeted allocation across brands, channels, and geographies.","Engineered machine learning models and Azure-based ETL pipelines to collect, clean, and validate promotion data, enabling scenario planning, impact forecasting, and workflow approvals for superior margin and sales outcomes.","Developed a scalable ETL platform (Databricks, Spark, Azure Data Factory, PostgreSQL) with Blue/Green slotting. Processed 200M+ records across 100+ tables in <15 mins (zero downtime), providing retail clients with timely, accurate data for promotional analytics and strategic decision-making.","Architected Orchestron, a high-performance Data Processing and Explosion platform (.NET, Spark, Kubernetes) with modular, rule-driven design. Utilized Generative AI Agents for intelligent orchestration, automating 80% of manual transformation tasks, enhancing client operational efficiency and insights.","Consulted Fortune 500 consumer-goods clients in North America and Europe, delivering transformations with competitive intelligence and consumer insights for full-lifecycle pricing adjustments."]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 - March 2022",descriptionSummary:'At Eptura, I transformed <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), re-architecting legacy SaaS into cloud-native systems and designing distributed platforms. This directly enhanced product reliability and scalability for global clients, while I also led engineering squads, driving technical excellence and team growth.',description:["Cloud-Native Transformation for Enhanced Client Uptime: Led re-architecture of legacy SaaS to a cloud-native microservices solution on Azure Kubernetes Service (AKS). Achieved 60% faster recovery and significantly enhanced system uptime, critical for client operations.","Global Distributed Release Management System: Engineered and deployed a system (Azure IoT Hub, Serverless Functions, Azure CosmosDB) orchestrating synchronized updates across 300M+ IoT devices globally. Ensured seamless and reliable software delivery to a vast client network.","Led & Mentored Engineering Squads: Directed a team of 20 engineers (4 tech leads) across four product squads. Implemented mentorship, improving team retention by 20% and fostering engineering growth, impacting product quality for clients."]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 – April 2021",descriptionSummary:"At Nagarro, I delivered full-stack applications for diverse clients, enhancing user experience and streamlining development. My role involved hands-on development and implementing modern software engineering practices to improve efficiency and reliability of client solutions.",description:["High-Performance Full-Stack Applications: Developed full-stack web applications (Angular, .NET Core, PostgreSQL, Ionic Framework) for e-commerce and HR clients.","CI/CD & IaC for Reliable Client Deployments: Established CI/CD pipelines and Infrastructure as Code (IaC) practices. Reduced deployment failures by 70%, ensuring stable and predictable software releases for client projects."]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 – December 2019",descriptionSummary:'During this tenure at Condeco, I focused on core development and optimization of the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), contributing to its scalability and reliability for a rapidly growing customer base.',description:["Scalable Microservices for 3x Customer Growth: Designed and developed microservices (C#, .NET, React, SQL Server) for the workspace SaaS platform. Supported 3x customer scale-up, handling increased user demand.","Optimized CI/CD & Data Models: Maintained CI/CD pipelines and implemented data model optimizations. Resulted in faster, more reliable software releases and improved system performance for client-facing features."]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",date:"May 2017 – August 2018",descriptionSummary:"At Gartner, I contributed to the development of the ClearForce platform (proprietary survey and analytics tool for HR consulting), focusing on improving data accuracy and automating workflows for clients.",description:["Core SaaS Analytics Tool Development: Contributed backend development for ClearForce (C#, .NET Core, React), improving employee survey data accuracy by 60%. Critical for providing data-driven insights to HR clients.","Automated SQL Workflows: Developed and automated SQL workflows (SPs, SQL agent jobs). Saved over 240 engineering hours annually in manual data processing, improving data delivery efficiency for clients."],last:!0,previously:"Intern"}]},Py={sectionTitle:"Technology Proficiency",skills:[{icon:"Architecture",category:"Architecture",skills:[{name:"Microservices Architecture",percentage:100},{name:"Data Lakehouse",percentage:90},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Multi-Tenant Architecture (Database, Schema, Metadata Resolution)",percentage:90},{name:"Event-Driven Architecture (EDA)",percentage:100},{name:"Serverless",percentage:80}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"Angular",percentage:90},{name:"JavaScript",percentage:100},{name:"TypeScript",percentage:100},{name:"Ionic Framework",percentage:60}]},{icon:"Backend",category:"Backend",skills:[{name:"C#",percentage:100},{name:".NET Core",percentage:100},{name:"Node.Js",percentage:80},{name:"Python",percentage:80},{name:"Microservices",percentage:100},{name:"GraphQL",percentage:80}]},{icon:"Database",category:"Database",skills:[{name:"SQL",percentage:100},{name:"NoSQL",percentage:90}]},{icon:"Cloud",category:"Cloud",skills:[{name:"Microsoft Azure",percentage:90},{name:"Amazon Web Services (AWS)",percentage:80}]},{icon:"DataEngineering",category:"Data Engineering",skills:[{name:"Azure Databricks (Apache Spark)",percentage:80},{name:"Azure Datafactory",percentage:70},{name:"Azure Stream Analytics",percentage:70}]}]},tb={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},eb={aboutSection:Zy,certifications:Ky,contactMe:$y,educationalQualifications:Jy,homeSection:Wy,mostProudOf:Fy,professionalExperience:Iy,technologyProficiency:Py,testimonials:tb},$e=eb;function ab(){const[h,E]=X.useState(!1);return o.jsxs(Tg,{children:[o.jsx(Sg,{}),o.jsx(fm,{}),!h&&o.jsx(sm,{onComplete:()=>E(!0)}),h&&o.jsxs(o.Fragment,{children:[o.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),o.jsx(Ng,{}),o.jsxs("main",{id:"main-content",style:{position:"relative"},role:"main",children:[o.jsx($m,{data:$e.homeSection}),o.jsx(Oh,{data:$e.aboutSection}),o.jsx($h,{data:$e.technologyProficiency}),o.jsx(S1,{data:$e.professionalExperience}),o.jsx(Q1,{data:$e.mostProudOf}),o.jsx(ty,{data:$e.certifications}),o.jsx(my,{data:$e.testimonials}),o.jsx(jy,{data:$e.educationalQualifications}),o.jsx(Ly,{data:$e.contactMe})]}),o.jsx(Vg,{})]})]})}xg.createRoot(document.getElementById("root")).render(o.jsx(X.StrictMode,{children:o.jsx(ab,{})}));
