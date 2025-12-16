import{r as U,j as s,m as v,L as xg,A as za,u as Ef,a as Sg,b as bs,c as jf,d as xe}from"./vendor-motion-NN0UiyF0.js";import{r as wg,a as zg}from"./vendor-react-DlBnNAMw.js";import{f as Tg,m as ot,d,l as ct}from"./vendor-styled-TQ_oEx1d.js";(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))g(j);new MutationObserver(j=>{for(const M of j)if(M.type==="childList")for(const O of M.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&g(O)}).observe(document,{childList:!0,subtree:!0});function D(j){const M={};return j.integrity&&(M.integrity=j.integrity),j.referrerPolicy&&(M.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?M.credentials="include":j.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function g(j){if(j.ep)return;j.ep=!0;const M=D(j);fetch(j.href,M)}})();var vs={exports:{}},En={},ys={exports:{}},xs={};var Mf;function Ag(){return Mf||(Mf=1,(function(f){function A(z,k){var q=z.length;z.push(k);t:for(;0<q;){var pt=q-1>>>1,gt=z[pt];if(0<j(gt,k))z[pt]=k,z[q]=gt,q=pt;else break t}}function D(z){return z.length===0?null:z[0]}function g(z){if(z.length===0)return null;var k=z[0],q=z.pop();if(q!==k){z[0]=q;t:for(var pt=0,gt=z.length,Yt=gt>>>1;pt<Yt;){var xt=2*(pt+1)-1,tt=z[xt],Ht=xt+1,Ee=z[Ht];if(0>j(tt,q))Ht<gt&&0>j(Ee,tt)?(z[pt]=Ee,z[Ht]=q,pt=Ht):(z[pt]=tt,z[xt]=q,pt=xt);else if(Ht<gt&&0>j(Ee,q))z[pt]=Ee,z[Ht]=q,pt=Ht;else break t}}return k}function j(z,k){var q=z.sortIndex-k.sortIndex;return q!==0?q:z.id-k.id}if(f.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;f.unstable_now=function(){return M.now()}}else{var O=Date,it=O.now();f.unstable_now=function(){return O.now()-it}}var _=[],X=[],G=1,E=null,R=3,St=!1,$=!1,jt=!1,ft=!1,W=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,bt=typeof setImmediate<"u"?setImmediate:null;function Tt(z){for(var k=D(X);k!==null;){if(k.callback===null)g(X);else if(k.startTime<=z)g(X),k.sortIndex=k.expirationTime,A(_,k);else break;k=D(X)}}function Ft(z){if(jt=!1,Tt(z),!$)if(D(_)!==null)$=!0,se||(se=!0,ce());else{var k=D(X);k!==null&&Ce(Ft,k.startTime-z)}}var se=!1,Se=-1,we=5,Qa=-1;function jn(){return ft?!0:!(f.unstable_now()-Qa<we)}function Va(){if(ft=!1,se){var z=f.unstable_now();Qa=z;var k=!0;try{t:{$=!1,jt&&(jt=!1,yt(Se),Se=-1),St=!0;var q=R;try{e:{for(Tt(z),E=D(_);E!==null&&!(E.expirationTime>z&&jn());){var pt=E.callback;if(typeof pt=="function"){E.callback=null,R=E.priorityLevel;var gt=pt(E.expirationTime<=z);if(z=f.unstable_now(),typeof gt=="function"){E.callback=gt,Tt(z),k=!0;break e}E===D(_)&&g(_),Tt(z)}else g(_);E=D(_)}if(E!==null)k=!0;else{var Yt=D(X);Yt!==null&&Ce(Ft,Yt.startTime-z),k=!1}}break t}finally{E=null,R=q,St=!1}k=void 0}}finally{k?ce():se=!1}}}var ce;if(typeof bt=="function")ce=function(){bt(Va)};else if(typeof MessageChannel<"u"){var Mn=new MessageChannel,Oi=Mn.port2;Mn.port1.onmessage=Va,ce=function(){Oi.postMessage(null)}}else ce=function(){W(Va,0)};function Ce(z,k){Se=W(function(){z(f.unstable_now())},k)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(z){z.callback=null},f.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<z?Math.floor(1e3/z):5},f.unstable_getCurrentPriorityLevel=function(){return R},f.unstable_next=function(z){switch(R){case 1:case 2:case 3:var k=3;break;default:k=R}var q=R;R=k;try{return z()}finally{R=q}},f.unstable_requestPaint=function(){ft=!0},f.unstable_runWithPriority=function(z,k){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=R;R=z;try{return k()}finally{R=q}},f.unstable_scheduleCallback=function(z,k,q){var pt=f.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pt+q:pt):q=pt,z){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=q+gt,z={id:G++,callback:k,priorityLevel:z,startTime:q,expirationTime:gt,sortIndex:-1},q>pt?(z.sortIndex=q,A(X,z),D(_)===null&&z===D(X)&&(jt?(yt(Se),Se=-1):jt=!0,Ce(Ft,q-pt))):(z.sortIndex=gt,A(_,z),$||St||($=!0,se||(se=!0,ce()))),z},f.unstable_shouldYield=jn,f.unstable_wrapCallback=function(z){var k=R;return function(){var q=R;R=k;try{return z.apply(this,arguments)}finally{R=q}}}})(xs)),xs}var kf;function Eg(){return kf||(kf=1,ys.exports=Ag()),ys.exports}var Df;function jg(){if(Df)return En;Df=1;var f=Eg(),A=wg(),D=zg();function g(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function M(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function O(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function it(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(M(t)!==t)throw Error(g(188))}function X(t){var e=t.alternate;if(!e){if(e=M(t),e===null)throw Error(g(188));return e!==t?null:t}for(var a=t,i=e;;){var n=a.return;if(n===null)break;var l=n.alternate;if(l===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===a)return _(n),t;if(l===i)return _(n),e;l=l.sibling}throw Error(g(188))}if(a.return!==i.return)a=n,i=l;else{for(var r=!1,o=n.child;o;){if(o===a){r=!0,a=n,i=l;break}if(o===i){r=!0,i=n,a=l;break}o=o.sibling}if(!r){for(o=l.child;o;){if(o===a){r=!0,a=l,i=n;break}if(o===i){r=!0,i=l,a=n;break}o=o.sibling}if(!r)throw Error(g(189))}}if(a.alternate!==i)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?t:e}function G(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=G(t),e!==null)return e;t=t.sibling}return null}var E=Object.assign,R=Symbol.for("react.element"),St=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),jt=Symbol.for("react.fragment"),ft=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),yt=Symbol.for("react.consumer"),bt=Symbol.for("react.context"),Tt=Symbol.for("react.forward_ref"),Ft=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),Se=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Qa=Symbol.for("react.activity"),jn=Symbol.for("react.memo_cache_sentinel"),Va=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=Va&&t[Va]||t["@@iterator"],typeof t=="function"?t:null)}var Mn=Symbol.for("react.client.reference");function Oi(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jt:return"Fragment";case W:return"Profiler";case ft:return"StrictMode";case Ft:return"Suspense";case se:return"SuspenseList";case Qa:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case $:return"Portal";case bt:return t.displayName||"Context";case yt:return(t._context.displayName||"Context")+".Consumer";case Tt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Se:return e=t.displayName||null,e!==null?e:Oi(t.type)||"Memo";case we:e=t._payload,t=t._init;try{return Oi(t(e))}catch{}}return null}var Ce=Array.isArray,z=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=D.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},pt=[],gt=-1;function Yt(t){return{current:t}}function xt(t){0>gt||(t.current=pt[gt],pt[gt]=null,gt--)}function tt(t,e){gt++,pt[gt]=t.current,t.current=e}var Ht=Yt(null),Ee=Yt(null),Fe=Yt(null),kn=Yt(null);function Dn(t,e){switch(tt(Fe,e),tt(Ee,t),tt(Ht,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Kd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Kd(e),t=Jd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xt(Ht),tt(Ht,t)}function $a(){xt(Ht),xt(Ee),xt(Fe)}function Fl(t){t.memoizedState!==null&&tt(kn,t);var e=Ht.current,a=Jd(e,t.type);e!==a&&(tt(Ee,t),tt(Ht,a))}function Cn(t){Ee.current===t&&(xt(Ht),xt(Ee)),kn.current===t&&(xt(kn),wn._currentValue=q)}var Il,Ts;function Aa(t){if(Il===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Il=e&&e[1]||"",Ts=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Il+t+Ts}var Pl=!1;function tr(t,e){if(!t||Pl)return"";Pl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(y){var b=y}Reflect.construct(t,[],T)}else{try{T.call()}catch(y){b=y}t.call(T.prototype)}}else{try{throw Error()}catch(y){b=y}(T=t())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(y){if(y&&b&&typeof y.stack=="string")return[y.stack,b.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),r=l[0],o=l[1];if(r&&o){var c=r.split(`
`),h=o.split(`
`);for(n=i=0;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(i===c.length||n===h.length)for(i=c.length-1,n=h.length-1;1<=i&&0<=n&&c[i]!==h[n];)n--;for(;1<=i&&0<=n;i--,n--)if(c[i]!==h[n]){if(i!==1||n!==1)do if(i--,n--,0>n||c[i]!==h[n]){var x=`
`+c[i].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=i&&0<=n);break}}}finally{Pl=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Aa(a):""}function Ff(t,e){switch(t.tag){case 26:case 27:case 5:return Aa(t.type);case 16:return Aa("Lazy");case 13:return t.child!==e&&e!==null?Aa("Suspense Fallback"):Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 15:return tr(t.type,!1);case 11:return tr(t.type.render,!1);case 1:return tr(t.type,!0);case 31:return Aa("Activity");default:return""}}function As(t){try{var e="",a=null;do e+=Ff(t,a),a=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var er=Object.prototype.hasOwnProperty,ar=f.unstable_scheduleCallback,ir=f.unstable_cancelCallback,If=f.unstable_shouldYield,Pf=f.unstable_requestPaint,It=f.unstable_now,t0=f.unstable_getCurrentPriorityLevel,Es=f.unstable_ImmediatePriority,js=f.unstable_UserBlockingPriority,On=f.unstable_NormalPriority,e0=f.unstable_LowPriority,Ms=f.unstable_IdlePriority,a0=f.log,i0=f.unstable_setDisableYieldValue,Hi=null,Pt=null;function Ie(t){if(typeof a0=="function"&&i0(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Hi,t)}catch{}}var te=Math.clz32?Math.clz32:r0,n0=Math.log,l0=Math.LN2;function r0(t){return t>>>=0,t===0?32:31-(n0(t)/l0|0)|0}var Hn=256,Bn=262144,Un=4194304;function Ea(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nn(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var n=0,l=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~l,i!==0?n=Ea(i):(r&=o,r!==0?n=Ea(r):a||(a=o&~t,a!==0&&(n=Ea(a))))):(o=i&~l,o!==0?n=Ea(o):r!==0?n=Ea(r):a||(a=i&~t,a!==0&&(n=Ea(a)))),n===0?0:e!==0&&e!==n&&(e&l)===0&&(l=n&-n,a=e&-e,l>=a||l===32&&(a&4194048)!==0)?e:n}function Bi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function o0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ks(){var t=Un;return Un<<=1,(Un&62914560)===0&&(Un=4194304),t}function nr(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ui(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function s0(t,e,a,i,n,l){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,c=t.expirationTimes,h=t.hiddenUpdates;for(a=r&~a;0<a;){var x=31-te(a),T=1<<x;o[x]=0,c[x]=-1;var b=h[x];if(b!==null)for(h[x]=null,x=0;x<b.length;x++){var y=b[x];y!==null&&(y.lane&=-536870913)}a&=~T}i!==0&&Ds(t,i,0),l!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=l&~(r&~e))}function Ds(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-te(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&261930}function Cs(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-te(a),n=1<<i;n&e|t[i]&e&&(t[i]|=e),a&=~n}}function Os(t,e){var a=e&-e;return a=(a&42)!==0?1:lr(a),(a&(t.suspendedLanes|e))!==0?0:a}function lr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hs(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:yf(t.type))}function Bs(t,e){var a=k.p;try{return k.p=t,e()}finally{k.p=a}}var Pe=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Pe,Qt="__reactProps$"+Pe,Za="__reactContainer$"+Pe,or="__reactEvents$"+Pe,c0="__reactListeners$"+Pe,u0="__reactHandles$"+Pe,Us="__reactResources$"+Pe,Ni="__reactMarker$"+Pe;function sr(t){delete t[Gt],delete t[Qt],delete t[or],delete t[c0],delete t[u0]}function Ka(t){var e=t[Gt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Za]||a[Gt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=af(t);t!==null;){if(a=t[Gt])return a;t=af(t)}return e}t=a,a=t.parentNode}return null}function Ja(t){if(t=t[Gt]||t[Za]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Gi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(g(33))}function Wa(t){var e=t[Us];return e||(e=t[Us]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Bt(t){t[Ni]=!0}var Ns=new Set,Gs={};function ja(t,e){Fa(t,e),Fa(t+"Capture",e)}function Fa(t,e){for(Gs[t]=e,t=0;t<e.length;t++)Ns.add(e[t])}var d0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qs={},_s={};function f0(t){return er.call(_s,t)?!0:er.call(qs,t)?!1:d0.test(t)?_s[t]=!0:(qs[t]=!0,!1)}function Gn(t,e,a){if(f0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function qn(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Oe(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p0(t,e,a){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,l=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,l.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cr(t){if(!t._valueTracker){var e=Rs(t)?"checked":"value";t._valueTracker=p0(t,e,""+t[e])}}function Ls(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=Rs(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var g0=/[\n"\\]/g;function de(t){return t.replace(g0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ur(t,e,a,i,n,l,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ue(e)):t.value!==""+ue(e)&&(t.value=""+ue(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?dr(t,r,ue(e)):a!=null?dr(t,r,ue(a)):i!=null&&t.removeAttribute("value"),n==null&&l!=null&&(t.defaultChecked=!!l),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+ue(o):t.removeAttribute("name")}function Ys(t,e,a,i,n,l,r,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){cr(t);return}a=a!=null?""+ue(a):"",e=e!=null?""+ue(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),cr(t)}function dr(t,e,a){e==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ia(t,e,a,i){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&i&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Xs(t,e,a){if(e!=null&&(e=""+ue(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ue(a):""}function Qs(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(g(92));if(Ce(i)){if(1<i.length)throw Error(g(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=ue(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i),cr(t)}function Pa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var m0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vs(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||m0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function $s(t,e,a){if(e!=null&&typeof e!="object")throw Error(g(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var n in e)i=e[n],e.hasOwnProperty(n)&&a[n]!==i&&Vs(t,n,i)}else for(var l in e)e.hasOwnProperty(l)&&Vs(t,l,e[l])}function fr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),b0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(t){return b0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function He(){}var pr=null;function gr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ti=null,ei=null;function Zs(t){var e=Ja(t);if(e&&(t=e.stateNode)){var a=t[Qt]||null;t:switch(t=e.stateNode,e.type){case"input":if(ur(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var n=i[Qt]||null;if(!n)throw Error(g(90));ur(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&Ls(i)}break t;case"textarea":Xs(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Ia(t,!!a.multiple,e,!1)}}}var mr=!1;function Ks(t,e,a){if(mr)return t(e,a);mr=!0;try{var i=t(e);return i}finally{if(mr=!1,(ti!==null||ei!==null)&&(jl(),ti&&(e=ti,t=ei,ei=ti=null,Zs(e),t)))for(e=0;e<t.length;e++)Zs(t[e])}}function qi(t,e){var a=t.stateNode;if(a===null)return null;var i=a[Qt]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(g(231,e,typeof a));return a}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hr=!1;if(Be)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){hr=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{hr=!1}var ta=null,br=null,Ln=null;function Js(){if(Ln)return Ln;var t,e=br,a=e.length,i,n="value"in ta?ta.value:ta.textContent,l=n.length;for(t=0;t<a&&e[t]===n[t];t++);var r=a-t;for(i=1;i<=r&&e[a-i]===n[l-i];i++);return Ln=n.slice(t,1<i?1-i:void 0)}function Yn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xn(){return!0}function Ws(){return!1}function Vt(t){function e(a,i,n,l,r){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Xn:Ws,this.isPropagationStopped=Ws,this}return E(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),e}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qn=Vt(Ma),Ri=E({},Ma,{view:0,detail:0}),v0=Vt(Ri),vr,yr,Li,Vn=E({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Li&&(Li&&t.type==="mousemove"?(vr=t.screenX-Li.screenX,yr=t.screenY-Li.screenY):yr=vr=0,Li=t),vr)},movementY:function(t){return"movementY"in t?t.movementY:yr}}),Fs=Vt(Vn),y0=E({},Vn,{dataTransfer:0}),x0=Vt(y0),S0=E({},Ri,{relatedTarget:0}),xr=Vt(S0),w0=E({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=Vt(w0),T0=E({},Ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A0=Vt(T0),E0=E({},Ma,{data:0}),Is=Vt(E0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=k0[t])?!!e[t]:!1}function Sr(){return D0}var C0=E({},Ri,{key:function(t){if(t.key){var e=j0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(t){return t.type==="keypress"?Yn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O0=Vt(C0),H0=E({},Vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ps=Vt(H0),B0=E({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr}),U0=Vt(B0),N0=E({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),G0=Vt(N0),q0=E({},Vn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_0=Vt(q0),R0=E({},Ma,{newState:0,oldState:0}),L0=Vt(R0),Y0=[9,13,27,32],wr=Be&&"CompositionEvent"in window,Yi=null;Be&&"documentMode"in document&&(Yi=document.documentMode);var X0=Be&&"TextEvent"in window&&!Yi,tc=Be&&(!wr||Yi&&8<Yi&&11>=Yi),ec=" ",ac=!1;function ic(t,e){switch(t){case"keyup":return Y0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function Q0(t,e){switch(t){case"compositionend":return nc(e);case"keypress":return e.which!==32?null:(ac=!0,ec);case"textInput":return t=e.data,t===ec&&ac?null:t;default:return null}}function V0(t,e){if(ai)return t==="compositionend"||!wr&&ic(t,e)?(t=Js(),Ln=br=ta=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tc&&e.locale!=="ko"?null:e.data;default:return null}}var $0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$0[t.type]:e==="textarea"}function rc(t,e,a,i){ti?ei?ei.push(i):ei=[i]:ti=i,e=Bl(e,"onChange"),0<e.length&&(a=new Qn("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Xi=null,Qi=null;function Z0(t){Yd(t,0)}function $n(t){var e=Gi(t);if(Ls(e))return t}function oc(t,e){if(t==="change")return e}var sc=!1;if(Be){var zr;if(Be){var Tr="oninput"in document;if(!Tr){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),Tr=typeof cc.oninput=="function"}zr=Tr}else zr=!1;sc=zr&&(!document.documentMode||9<document.documentMode)}function uc(){Xi&&(Xi.detachEvent("onpropertychange",dc),Qi=Xi=null)}function dc(t){if(t.propertyName==="value"&&$n(Qi)){var e=[];rc(e,Qi,t,gr(t)),Ks(Z0,e)}}function K0(t,e,a){t==="focusin"?(uc(),Xi=e,Qi=a,Xi.attachEvent("onpropertychange",dc)):t==="focusout"&&uc()}function J0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $n(Qi)}function W0(t,e){if(t==="click")return $n(e)}function F0(t,e){if(t==="input"||t==="change")return $n(e)}function I0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ee=typeof Object.is=="function"?Object.is:I0;function Vi(t,e){if(ee(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!er.call(e,n)||!ee(t[n],e[n]))return!1}return!0}function fc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pc(t,e){var a=fc(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=fc(a)}}function gc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=_n(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=_n(t.document)}return e}function Ar(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var P0=Be&&"documentMode"in document&&11>=document.documentMode,ii=null,Er=null,$i=null,jr=!1;function hc(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jr||ii==null||ii!==_n(i)||(i=ii,"selectionStart"in i&&Ar(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$i&&Vi($i,i)||($i=i,i=Bl(Er,"onSelect"),0<i.length&&(e=new Qn("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=ii)))}function ka(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var ni={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},Mr={},bc={};Be&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function Da(t){if(Mr[t])return Mr[t];if(!ni[t])return t;var e=ni[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in bc)return Mr[t]=e[a];return t}var vc=Da("animationend"),yc=Da("animationiteration"),xc=Da("animationstart"),tp=Da("transitionrun"),ep=Da("transitionstart"),ap=Da("transitioncancel"),Sc=Da("transitionend"),wc=new Map,kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kr.push("scrollEnd");function ze(t,e){wc.set(t,e),ja(e,[t])}var Zn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fe=[],li=0,Dr=0;function Kn(){for(var t=li,e=Dr=li=0;e<t;){var a=fe[e];fe[e++]=null;var i=fe[e];fe[e++]=null;var n=fe[e];fe[e++]=null;var l=fe[e];if(fe[e++]=null,i!==null&&n!==null){var r=i.pending;r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n}l!==0&&zc(a,n,l)}}function Jn(t,e,a,i){fe[li++]=t,fe[li++]=e,fe[li++]=a,fe[li++]=i,Dr|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Cr(t,e,a,i){return Jn(t,e,a,i),Wn(t)}function Ca(t,e){return Jn(t,null,null,e),Wn(t)}function zc(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var n=!1,l=t.return;l!==null;)l.childLanes|=a,i=l.alternate,i!==null&&(i.childLanes|=a),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(n=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,n&&e!==null&&(n=31-te(a),t=l.hiddenUpdates,i=t[n],i===null?t[n]=[e]:i.push(e),e.lane=a|536870912),l):null}function Wn(t){if(50<mn)throw mn=0,Lo=null,Error(g(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ri={};function ip(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ae(t,e,a,i){return new ip(t,e,a,i)}function Or(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ue(t,e){var a=t.alternate;return a===null?(a=ae(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Tc(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Fn(t,e,a,i,n,l){var r=0;if(i=t,typeof t=="function")Or(t)&&(r=1);else if(typeof t=="string")r=sg(t,a,Ht.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Qa:return t=ae(31,a,e,n),t.elementType=Qa,t.lanes=l,t;case jt:return Oa(a.children,n,l,e);case ft:r=8,n|=24;break;case W:return t=ae(12,a,e,n|2),t.elementType=W,t.lanes=l,t;case Ft:return t=ae(13,a,e,n),t.elementType=Ft,t.lanes=l,t;case se:return t=ae(19,a,e,n),t.elementType=se,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bt:r=10;break t;case yt:r=9;break t;case Tt:r=11;break t;case Se:r=14;break t;case we:r=16,i=null;break t}r=29,a=Error(g(130,t===null?"null":typeof t,"")),i=null}return e=ae(r,a,e,n),e.elementType=t,e.type=i,e.lanes=l,e}function Oa(t,e,a,i){return t=ae(7,t,i,e),t.lanes=a,t}function Hr(t,e,a){return t=ae(6,t,null,e),t.lanes=a,t}function Ac(t){var e=ae(18,null,null,0);return e.stateNode=t,e}function Br(t,e,a){return e=ae(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ec=new WeakMap;function pe(t,e){if(typeof t=="object"&&t!==null){var a=Ec.get(t);return a!==void 0?a:(e={value:t,source:e,stack:As(e)},Ec.set(t,e),e)}return{value:t,source:e,stack:As(e)}}var oi=[],si=0,In=null,Zi=0,ge=[],me=0,ea=null,je=1,Me="";function Ne(t,e){oi[si++]=Zi,oi[si++]=In,In=t,Zi=e}function jc(t,e,a){ge[me++]=je,ge[me++]=Me,ge[me++]=ea,ea=t;var i=je;t=Me;var n=32-te(i)-1;i&=~(1<<n),a+=1;var l=32-te(e)+n;if(30<l){var r=n-n%5;l=(i&(1<<r)-1).toString(32),i>>=r,n-=r,je=1<<32-te(e)+n|a<<n|i,Me=l+t}else je=1<<l|a<<n|i,Me=t}function Ur(t){t.return!==null&&(Ne(t,1),jc(t,1,0))}function Nr(t){for(;t===In;)In=oi[--si],oi[si]=null,Zi=oi[--si],oi[si]=null;for(;t===ea;)ea=ge[--me],ge[me]=null,Me=ge[--me],ge[me]=null,je=ge[--me],ge[me]=null}function Mc(t,e){ge[me++]=je,ge[me++]=Me,ge[me++]=ea,je=e.id,Me=e.overflow,ea=t}var qt=null,mt=null,J=!1,aa=null,he=!1,Gr=Error(g(519));function ia(t){var e=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ki(pe(e,t)),Gr}function kc(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[Gt]=t,e[Qt]=i,a){case"dialog":V("cancel",e),V("close",e);break;case"iframe":case"object":case"embed":V("load",e);break;case"video":case"audio":for(a=0;a<bn.length;a++)V(bn[a],e);break;case"source":V("error",e);break;case"img":case"image":case"link":V("error",e),V("load",e);break;case"details":V("toggle",e);break;case"input":V("invalid",e),Ys(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":V("invalid",e);break;case"textarea":V("invalid",e),Qs(e,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||$d(e.textContent,a)?(i.popover!=null&&(V("beforetoggle",e),V("toggle",e)),i.onScroll!=null&&V("scroll",e),i.onScrollEnd!=null&&V("scrollend",e),i.onClick!=null&&(e.onclick=He),e=!0):e=!1,e||ia(t,!0)}function Dc(t){for(qt=t.return;qt;)switch(qt.tag){case 5:case 31:case 13:he=!1;return;case 27:case 3:he=!0;return;default:qt=qt.return}}function ci(t){if(t!==qt)return!1;if(!J)return Dc(t),J=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||as(t.type,t.memoizedProps)),a=!a),a&&mt&&ia(t),Dc(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(317));mt=ef(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(317));mt=ef(t)}else e===27?(e=mt,ba(t.type)?(t=os,os=null,mt=t):mt=e):mt=qt?ve(t.stateNode.nextSibling):null;return!0}function Ha(){mt=qt=null,J=!1}function qr(){var t=aa;return t!==null&&(Jt===null?Jt=t:Jt.push.apply(Jt,t),aa=null),t}function Ki(t){aa===null?aa=[t]:aa.push(t)}var _r=Yt(null),Ba=null,Ge=null;function na(t,e,a){tt(_r,e._currentValue),e._currentValue=a}function qe(t){t._currentValue=_r.current,xt(_r)}function Rr(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function Lr(t,e,a,i){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var l=n.dependencies;if(l!==null){var r=n.child;l=l.firstContext;t:for(;l!==null;){var o=l;l=n;for(var c=0;c<e.length;c++)if(o.context===e[c]){l.lanes|=a,o=l.alternate,o!==null&&(o.lanes|=a),Rr(l.return,a,t),i||(r=null);break t}l=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(g(341));r.lanes|=a,l=r.alternate,l!==null&&(l.lanes|=a),Rr(r,a,t),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function ui(t,e,a,i){t=null;for(var n=e,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(g(387));if(r=r.memoizedProps,r!==null){var o=n.type;ee(n.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(n===kn.current){if(r=n.alternate,r===null)throw Error(g(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(wn):t=[wn])}n=n.return}t!==null&&Lr(e,t,a,i),e.flags|=262144}function Pn(t){for(t=t.firstContext;t!==null;){if(!ee(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ua(t){Ba=t,Ge=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function _t(t){return Cc(Ba,t)}function tl(t,e){return Ba===null&&Ua(t),Cc(t,e)}function Cc(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ge===null){if(t===null)throw Error(g(308));Ge=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ge=Ge.next=e;return a}var np=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},lp=f.unstable_scheduleCallback,rp=f.unstable_NormalPriority,Mt={$$typeof:bt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yr(){return{controller:new np,data:new Map,refCount:0}}function Ji(t){t.refCount--,t.refCount===0&&lp(rp,function(){t.controller.abort()})}var Wi=null,Xr=0,di=0,fi=null;function op(t,e){if(Wi===null){var a=Wi=[];Xr=0,di=Zo(),fi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Xr++,e.then(Oc,Oc),e}function Oc(){if(--Xr===0&&Wi!==null){fi!==null&&(fi.status="fulfilled");var t=Wi;Wi=null,di=0,fi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function sp(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var Hc=z.S;z.S=function(t,e){hd=It(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&op(t,e),Hc!==null&&Hc(t,e)};var Na=Yt(null);function Qr(){var t=Na.current;return t!==null?t:st.pooledCache}function el(t,e){e===null?tt(Na,Na.current):tt(Na,e.pool)}function Bc(){var t=Qr();return t===null?null:{parent:Mt._currentValue,pool:t}}var pi=Error(g(460)),Vr=Error(g(474)),al=Error(g(542)),il={then:function(){}};function Uc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nc(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(He,He),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qc(t),t;default:if(typeof e.status=="string")e.then(He,He);else{if(t=st,t!==null&&100<t.shellSuspendCounter)throw Error(g(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=i}},function(i){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qc(t),t}throw qa=e,pi}}function Ga(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(qa=a,pi):a}}var qa=null;function Gc(){if(qa===null)throw Error(g(459));var t=qa;return qa=null,t}function qc(t){if(t===pi||t===al)throw Error(g(483))}var gi=null,Fi=0;function nl(t){var e=Fi;return Fi+=1,gi===null&&(gi=[]),Nc(gi,t,e)}function Ii(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ll(t,e){throw e.$$typeof===R?Error(g(525)):(t=Object.prototype.toString.call(e),Error(g(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function _c(t){function e(p,u){if(t){var m=p.deletions;m===null?(p.deletions=[u],p.flags|=16):m.push(u)}}function a(p,u){if(!t)return null;for(;u!==null;)e(p,u),u=u.sibling;return null}function i(p){for(var u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function n(p,u){return p=Ue(p,u),p.index=0,p.sibling=null,p}function l(p,u,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<u?(p.flags|=67108866,u):m):(p.flags|=67108866,u)):(p.flags|=1048576,u)}function r(p){return t&&p.alternate===null&&(p.flags|=67108866),p}function o(p,u,m,S){return u===null||u.tag!==6?(u=Hr(m,p.mode,S),u.return=p,u):(u=n(u,m),u.return=p,u)}function c(p,u,m,S){var B=m.type;return B===jt?x(p,u,m.props.children,S,m.key):u!==null&&(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===we&&Ga(B)===u.type)?(u=n(u,m.props),Ii(u,m),u.return=p,u):(u=Fn(m.type,m.key,m.props,null,p.mode,S),Ii(u,m),u.return=p,u)}function h(p,u,m,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=Br(m,p.mode,S),u.return=p,u):(u=n(u,m.children||[]),u.return=p,u)}function x(p,u,m,S,B){return u===null||u.tag!==7?(u=Oa(m,p.mode,S,B),u.return=p,u):(u=n(u,m),u.return=p,u)}function T(p,u,m){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Hr(""+u,p.mode,m),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case St:return m=Fn(u.type,u.key,u.props,null,p.mode,m),Ii(m,u),m.return=p,m;case $:return u=Br(u,p.mode,m),u.return=p,u;case we:return u=Ga(u),T(p,u,m)}if(Ce(u)||ce(u))return u=Oa(u,p.mode,m,null),u.return=p,u;if(typeof u.then=="function")return T(p,nl(u),m);if(u.$$typeof===bt)return T(p,tl(p,u),m);ll(p,u)}return null}function b(p,u,m,S){var B=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return B!==null?null:o(p,u,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case St:return m.key===B?c(p,u,m,S):null;case $:return m.key===B?h(p,u,m,S):null;case we:return m=Ga(m),b(p,u,m,S)}if(Ce(m)||ce(m))return B!==null?null:x(p,u,m,S,null);if(typeof m.then=="function")return b(p,u,nl(m),S);if(m.$$typeof===bt)return b(p,u,tl(p,m),S);ll(p,m)}return null}function y(p,u,m,S,B){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return p=p.get(m)||null,o(u,p,""+S,B);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case St:return p=p.get(S.key===null?m:S.key)||null,c(u,p,S,B);case $:return p=p.get(S.key===null?m:S.key)||null,h(u,p,S,B);case we:return S=Ga(S),y(p,u,m,S,B)}if(Ce(S)||ce(S))return p=p.get(m)||null,x(u,p,S,B,null);if(typeof S.then=="function")return y(p,u,m,nl(S),B);if(S.$$typeof===bt)return y(p,u,m,tl(u,S),B);ll(u,S)}return null}function C(p,u,m,S){for(var B=null,F=null,H=u,Y=u=0,K=null;H!==null&&Y<m.length;Y++){H.index>Y?(K=H,H=null):K=H.sibling;var I=b(p,H,m[Y],S);if(I===null){H===null&&(H=K);break}t&&H&&I.alternate===null&&e(p,H),u=l(I,u,Y),F===null?B=I:F.sibling=I,F=I,H=K}if(Y===m.length)return a(p,H),J&&Ne(p,Y),B;if(H===null){for(;Y<m.length;Y++)H=T(p,m[Y],S),H!==null&&(u=l(H,u,Y),F===null?B=H:F.sibling=H,F=H);return J&&Ne(p,Y),B}for(H=i(H);Y<m.length;Y++)K=y(H,p,Y,m[Y],S),K!==null&&(t&&K.alternate!==null&&H.delete(K.key===null?Y:K.key),u=l(K,u,Y),F===null?B=K:F.sibling=K,F=K);return t&&H.forEach(function(wa){return e(p,wa)}),J&&Ne(p,Y),B}function N(p,u,m,S){if(m==null)throw Error(g(151));for(var B=null,F=null,H=u,Y=u=0,K=null,I=m.next();H!==null&&!I.done;Y++,I=m.next()){H.index>Y?(K=H,H=null):K=H.sibling;var wa=b(p,H,I.value,S);if(wa===null){H===null&&(H=K);break}t&&H&&wa.alternate===null&&e(p,H),u=l(wa,u,Y),F===null?B=wa:F.sibling=wa,F=wa,H=K}if(I.done)return a(p,H),J&&Ne(p,Y),B;if(H===null){for(;!I.done;Y++,I=m.next())I=T(p,I.value,S),I!==null&&(u=l(I,u,Y),F===null?B=I:F.sibling=I,F=I);return J&&Ne(p,Y),B}for(H=i(H);!I.done;Y++,I=m.next())I=y(H,p,Y,I.value,S),I!==null&&(t&&I.alternate!==null&&H.delete(I.key===null?Y:I.key),u=l(I,u,Y),F===null?B=I:F.sibling=I,F=I);return t&&H.forEach(function(yg){return e(p,yg)}),J&&Ne(p,Y),B}function rt(p,u,m,S){if(typeof m=="object"&&m!==null&&m.type===jt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case St:t:{for(var B=m.key;u!==null;){if(u.key===B){if(B=m.type,B===jt){if(u.tag===7){a(p,u.sibling),S=n(u,m.props.children),S.return=p,p=S;break t}}else if(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===we&&Ga(B)===u.type){a(p,u.sibling),S=n(u,m.props),Ii(S,m),S.return=p,p=S;break t}a(p,u);break}else e(p,u);u=u.sibling}m.type===jt?(S=Oa(m.props.children,p.mode,S,m.key),S.return=p,p=S):(S=Fn(m.type,m.key,m.props,null,p.mode,S),Ii(S,m),S.return=p,p=S)}return r(p);case $:t:{for(B=m.key;u!==null;){if(u.key===B)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){a(p,u.sibling),S=n(u,m.children||[]),S.return=p,p=S;break t}else{a(p,u);break}else e(p,u);u=u.sibling}S=Br(m,p.mode,S),S.return=p,p=S}return r(p);case we:return m=Ga(m),rt(p,u,m,S)}if(Ce(m))return C(p,u,m,S);if(ce(m)){if(B=ce(m),typeof B!="function")throw Error(g(150));return m=B.call(m),N(p,u,m,S)}if(typeof m.then=="function")return rt(p,u,nl(m),S);if(m.$$typeof===bt)return rt(p,u,tl(p,m),S);ll(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,u!==null&&u.tag===6?(a(p,u.sibling),S=n(u,m),S.return=p,p=S):(a(p,u),S=Hr(m,p.mode,S),S.return=p,p=S),r(p)):a(p,u)}return function(p,u,m,S){try{Fi=0;var B=rt(p,u,m,S);return gi=null,B}catch(H){if(H===pi||H===al)throw H;var F=ae(29,H,null,p.mode);return F.lanes=S,F.return=p,F}finally{}}}var _a=_c(!0),Rc=_c(!1),la=!1;function $r(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function oa(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(P&2)!==0){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,e=Wn(t),zc(t,null,a),e}return Jn(t,i,e,a),Wn(t)}function Pi(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,Cs(t,a)}}function Kr(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?n=l=r:l=l.next=r,a=a.next}while(a!==null);l===null?n=l=e:l=l.next=e}else n=l=e;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Jr=!1;function tn(){if(Jr){var t=fi;if(t!==null)throw t}}function en(t,e,a,i){Jr=!1;var n=t.updateQueue;la=!1;var l=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var c=o,h=c.next;c.next=null,r===null?l=h:r.next=h,r=c;var x=t.alternate;x!==null&&(x=x.updateQueue,o=x.lastBaseUpdate,o!==r&&(o===null?x.firstBaseUpdate=h:o.next=h,x.lastBaseUpdate=c))}if(l!==null){var T=n.baseState;r=0,x=h=c=null,o=l;do{var b=o.lane&-536870913,y=b!==o.lane;if(y?(Z&b)===b:(i&b)===b){b!==0&&b===di&&(Jr=!0),x!==null&&(x=x.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var C=t,N=o;b=e;var rt=a;switch(N.tag){case 1:if(C=N.payload,typeof C=="function"){T=C.call(rt,T,b);break t}T=C;break t;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,b=typeof C=="function"?C.call(rt,T,b):C,b==null)break t;T=E({},T,b);break t;case 2:la=!0}}b=o.callback,b!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[b]:y.push(b))}else y={lane:b,tag:o.tag,payload:o.payload,callback:o.callback,next:null},x===null?(h=x=y,c=T):x=x.next=y,r|=b;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;y=o,o=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);x===null&&(c=T),n.baseState=c,n.firstBaseUpdate=h,n.lastBaseUpdate=x,l===null&&(n.shared.lanes=0),fa|=r,t.lanes=r,t.memoizedState=T}}function Lc(t,e){if(typeof t!="function")throw Error(g(191,t));t.call(e)}function Yc(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Lc(a[t],e)}var mi=Yt(null),rl=Yt(0);function Xc(t,e){t=Ze,tt(rl,t),tt(mi,e),Ze=t|e.baseLanes}function Wr(){tt(rl,Ze),tt(mi,mi.current)}function Fr(){Ze=rl.current,xt(mi),xt(rl)}var ie=Yt(null),be=null;function sa(t){var e=t.alternate;tt(At,At.current&1),tt(ie,t),be===null&&(e===null||mi.current!==null||e.memoizedState!==null)&&(be=t)}function Ir(t){tt(At,At.current),tt(ie,t),be===null&&(be=t)}function Qc(t){t.tag===22?(tt(At,At.current),tt(ie,t),be===null&&(be=t)):ca()}function ca(){tt(At,At.current),tt(ie,ie.current)}function ne(t){xt(ie),be===t&&(be=null),xt(At)}var At=Yt(0);function ol(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ls(a)||rs(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _e=0,L=null,nt=null,kt=null,sl=!1,hi=!1,Ra=!1,cl=0,an=0,bi=null,cp=0;function wt(){throw Error(g(321))}function Pr(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ee(t[a],e[a]))return!1;return!0}function to(t,e,a,i,n,l){return _e=l,L=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?ju:ho,Ra=!1,l=a(i,n),Ra=!1,hi&&(l=$c(e,a,i,n)),Vc(t),l}function Vc(t){z.H=rn;var e=nt!==null&&nt.next!==null;if(_e=0,kt=nt=L=null,sl=!1,an=0,bi=null,e)throw Error(g(300));t===null||Dt||(t=t.dependencies,t!==null&&Pn(t)&&(Dt=!0))}function $c(t,e,a,i){L=t;var n=0;do{if(hi&&(bi=null),an=0,hi=!1,25<=n)throw Error(g(301));if(n+=1,kt=nt=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}z.H=Mu,l=e(a,i)}while(hi);return l}function up(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?nn(e):e,t=t.useState()[0],(nt!==null?nt.memoizedState:null)!==t&&(L.flags|=1024),e}function eo(){var t=cl!==0;return cl=0,t}function ao(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function io(t){if(sl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}sl=!1}_e=0,kt=nt=L=null,hi=!1,an=cl=0,bi=null}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?L.memoizedState=kt=t:kt=kt.next=t,kt}function Et(){if(nt===null){var t=L.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=kt===null?L.memoizedState:kt.next;if(e!==null)kt=e,nt=t;else{if(t===null)throw L.alternate===null?Error(g(467)):Error(g(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},kt===null?L.memoizedState=kt=t:kt=kt.next=t}return kt}function ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(t){var e=an;return an+=1,bi===null&&(bi=[]),t=Nc(bi,t,e),e=L,(kt===null?e.memoizedState:kt.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?ju:ho),t}function dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nn(t);if(t.$$typeof===bt)return _t(t)}throw Error(g(438,String(t)))}function no(t){var e=null,a=L.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=L.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ul(),L.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=jn;return e.index++,a}function Re(t,e){return typeof e=="function"?e(t):e}function fl(t){var e=Et();return lo(e,nt,t)}function lo(t,e,a){var i=t.queue;if(i===null)throw Error(g(311));i.lastRenderedReducer=a;var n=t.baseQueue,l=i.pending;if(l!==null){if(n!==null){var r=n.next;n.next=l.next,l.next=r}e.baseQueue=n=l,i.pending=null}if(l=t.baseState,n===null)t.memoizedState=l;else{e=n.next;var o=r=null,c=null,h=e,x=!1;do{var T=h.lane&-536870913;if(T!==h.lane?(Z&T)===T:(_e&T)===T){var b=h.revertLane;if(b===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),T===di&&(x=!0);else if((_e&b)===b){h=h.next,b===di&&(x=!0);continue}else T={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(o=c=T,r=l):c=c.next=T,L.lanes|=b,fa|=b;T=h.action,Ra&&a(l,T),l=h.hasEagerState?h.eagerState:a(l,T)}else b={lane:T,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(o=c=b,r=l):c=c.next=b,L.lanes|=T,fa|=T;h=h.next}while(h!==null&&h!==e);if(c===null?r=l:c.next=o,!ee(l,t.memoizedState)&&(Dt=!0,x&&(a=fi,a!==null)))throw a;t.memoizedState=l,t.baseState=r,t.baseQueue=c,i.lastRenderedState=l}return n===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function ro(t){var e=Et(),a=e.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=t;var i=a.dispatch,n=a.pending,l=e.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do l=t(l,r.action),r=r.next;while(r!==n);ee(l,e.memoizedState)||(Dt=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),a.lastRenderedState=l}return[l,i]}function Zc(t,e,a){var i=L,n=Et(),l=J;if(l){if(a===void 0)throw Error(g(407));a=a()}else a=e();var r=!ee((nt||n).memoizedState,a);if(r&&(n.memoizedState=a,Dt=!0),n=n.queue,co(Wc.bind(null,i,n,t),[t]),n.getSnapshot!==e||r||kt!==null&&kt.memoizedState.tag&1){if(i.flags|=2048,vi(9,{destroy:void 0},Jc.bind(null,i,n,a,e),null),st===null)throw Error(g(349));l||(_e&127)!==0||Kc(i,e,a)}return a}function Kc(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=L.updateQueue,e===null?(e=ul(),L.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Jc(t,e,a,i){e.value=a,e.getSnapshot=i,Fc(e)&&Ic(t)}function Wc(t,e,a){return a(function(){Fc(e)&&Ic(t)})}function Fc(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ee(t,a)}catch{return!0}}function Ic(t){var e=Ca(t,2);e!==null&&Wt(e,t,2)}function oo(t){var e=Xt();if(typeof t=="function"){var a=t;if(t=a(),Ra){Ie(!0);try{a()}finally{Ie(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:t},e}function Pc(t,e,a,i){return t.baseState=a,lo(t,nt,typeof i=="function"?i:Re)}function dp(t,e,a,i,n){if(ml(t))throw Error(g(485));if(t=e.action,t!==null){var l={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};z.T!==null?a(!0):l.isTransition=!1,i(l),a=e.pending,a===null?(l.next=e.pending=l,tu(e,l)):(l.next=a.next,e.pending=a.next=l)}}function tu(t,e){var a=e.action,i=e.payload,n=t.state;if(e.isTransition){var l=z.T,r={};z.T=r;try{var o=a(n,i),c=z.S;c!==null&&c(r,o),eu(t,e,o)}catch(h){so(t,e,h)}finally{l!==null&&r.types!==null&&(l.types=r.types),z.T=l}}else try{l=a(n,i),eu(t,e,l)}catch(h){so(t,e,h)}}function eu(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){au(t,e,i)},function(i){return so(t,e,i)}):au(t,e,a)}function au(t,e,a){e.status="fulfilled",e.value=a,iu(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,tu(t,a)))}function so(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,iu(e),e=e.next;while(e!==i)}t.action=null}function iu(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function nu(t,e){return e}function lu(t,e){if(J){var a=st.formState;if(a!==null){t:{var i=L;if(J){if(mt){e:{for(var n=mt,l=he;n.nodeType!==8;){if(!l){n=null;break e}if(n=ve(n.nextSibling),n===null){n=null;break e}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){mt=ve(n.nextSibling),i=n.data==="F!";break t}}ia(i)}i=!1}i&&(e=a[0])}}return a=Xt(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nu,lastRenderedState:e},a.queue=i,a=Tu.bind(null,L,i),i.dispatch=a,i=oo(!1),l=mo.bind(null,L,!1,i.queue),i=Xt(),n={state:e,dispatch:null,action:t,pending:null},i.queue=n,a=dp.bind(null,L,n,l,a),n.dispatch=a,i.memoizedState=t,[e,a,!1]}function ru(t){var e=Et();return ou(e,nt,t)}function ou(t,e,a){if(e=lo(t,e,nu)[0],t=fl(Re)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=nn(e)}catch(r){throw r===pi?al:r}else i=e;e=Et();var n=e.queue,l=n.dispatch;return a!==e.memoizedState&&(L.flags|=2048,vi(9,{destroy:void 0},fp.bind(null,n,a),null)),[i,l,t]}function fp(t,e){t.action=e}function su(t){var e=Et(),a=nt;if(a!==null)return ou(e,a,t);Et(),e=e.memoizedState,a=Et();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function vi(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=L.updateQueue,e===null&&(e=ul(),L.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function cu(){return Et().memoizedState}function pl(t,e,a,i){var n=Xt();L.flags|=t,n.memoizedState=vi(1|e,{destroy:void 0},a,i===void 0?null:i)}function gl(t,e,a,i){var n=Et();i=i===void 0?null:i;var l=n.memoizedState.inst;nt!==null&&i!==null&&Pr(i,nt.memoizedState.deps)?n.memoizedState=vi(e,l,a,i):(L.flags|=t,n.memoizedState=vi(1|e,l,a,i))}function uu(t,e){pl(8390656,8,t,e)}function co(t,e){gl(2048,8,t,e)}function pp(t){L.flags|=4;var e=L.updateQueue;if(e===null)e=ul(),L.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function du(t){var e=Et().memoizedState;return pp({ref:e,nextImpl:t}),function(){if((P&2)!==0)throw Error(g(440));return e.impl.apply(void 0,arguments)}}function fu(t,e){return gl(4,2,t,e)}function pu(t,e){return gl(4,4,t,e)}function gu(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mu(t,e,a){a=a!=null?a.concat([t]):null,gl(4,4,gu.bind(null,e,t),a)}function uo(){}function hu(t,e){var a=Et();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&Pr(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function bu(t,e){var a=Et();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&Pr(e,i[1]))return i[0];if(i=t(),Ra){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[i,e],i}function fo(t,e,a){return a===void 0||(_e&1073741824)!==0&&(Z&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=vd(),L.lanes|=t,fa|=t,a)}function vu(t,e,a,i){return ee(a,e)?a:mi.current!==null?(t=fo(t,a,i),ee(t,e)||(Dt=!0),t):(_e&42)===0||(_e&1073741824)!==0&&(Z&261930)===0?(Dt=!0,t.memoizedState=a):(t=vd(),L.lanes|=t,fa|=t,e)}function yu(t,e,a,i,n){var l=k.p;k.p=l!==0&&8>l?l:8;var r=z.T,o={};z.T=o,mo(t,!1,e,a);try{var c=n(),h=z.S;if(h!==null&&h(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var x=sp(c,i);ln(t,e,x,oe(t))}else ln(t,e,i,oe(t))}catch(T){ln(t,e,{then:function(){},status:"rejected",reason:T},oe())}finally{k.p=l,r!==null&&o.types!==null&&(r.types=o.types),z.T=r}}function gp(){}function po(t,e,a,i){if(t.tag!==5)throw Error(g(476));var n=xu(t).queue;yu(t,n,e,q,a===null?gp:function(){return Su(t),a(i)})}function xu(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:q},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Su(t){var e=xu(t);e.next===null&&(e=t.alternate.memoizedState),ln(t,e.next.queue,{},oe())}function go(){return _t(wn)}function wu(){return Et().memoizedState}function zu(){return Et().memoizedState}function mp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=oe();t=ra(a);var i=oa(e,t,a);i!==null&&(Wt(i,e,a),Pi(i,e,a)),e={cache:Yr()},t.payload=e;return}e=e.return}}function hp(t,e,a){var i=oe();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ml(t)?Au(e,a):(a=Cr(t,e,a,i),a!==null&&(Wt(a,t,i),Eu(a,e,i)))}function Tu(t,e,a){var i=oe();ln(t,e,a,i)}function ln(t,e,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ml(t))Au(e,n);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var r=e.lastRenderedState,o=l(r,a);if(n.hasEagerState=!0,n.eagerState=o,ee(o,r))return Jn(t,e,n,0),st===null&&Kn(),!1}catch{}finally{}if(a=Cr(t,e,n,i),a!==null)return Wt(a,t,i),Eu(a,e,i),!0}return!1}function mo(t,e,a,i){if(i={lane:2,revertLane:Zo(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ml(t)){if(e)throw Error(g(479))}else e=Cr(t,a,i,2),e!==null&&Wt(e,t,2)}function ml(t){var e=t.alternate;return t===L||e!==null&&e===L}function Au(t,e){hi=sl=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Eu(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,Cs(t,a)}}var rn={readContext:_t,use:dl,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt};rn.useEffectEvent=wt;var ju={readContext:_t,use:dl,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:uu,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,pl(4194308,4,gu.bind(null,e,t),a)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){pl(4,2,t,e)},useMemo:function(t,e){var a=Xt();e=e===void 0?null:e;var i=t();if(Ra){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=Xt();if(a!==void 0){var n=a(e);if(Ra){Ie(!0);try{a(e)}finally{Ie(!1)}}}else n=e;return i.memoizedState=i.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},i.queue=t,t=t.dispatch=hp.bind(null,L,t),[i.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:function(t){t=oo(t);var e=t.queue,a=Tu.bind(null,L,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:uo,useDeferredValue:function(t,e){var a=Xt();return fo(a,t,e)},useTransition:function(){var t=oo(!1);return t=yu.bind(null,L,t.queue,!0,!1),Xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=L,n=Xt();if(J){if(a===void 0)throw Error(g(407));a=a()}else{if(a=e(),st===null)throw Error(g(349));(Z&127)!==0||Kc(i,e,a)}n.memoizedState=a;var l={value:a,getSnapshot:e};return n.queue=l,uu(Wc.bind(null,i,l,t),[t]),i.flags|=2048,vi(9,{destroy:void 0},Jc.bind(null,i,l,a,e),null),a},useId:function(){var t=Xt(),e=st.identifierPrefix;if(J){var a=Me,i=je;a=(i&~(1<<32-te(i)-1)).toString(32)+a,e="_"+e+"R_"+a,a=cl++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=cp++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:go,useFormState:lu,useActionState:lu,useOptimistic:function(t){var e=Xt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=mo.bind(null,L,!0,a),a.dispatch=e,[t,e]},useMemoCache:no,useCacheRefresh:function(){return Xt().memoizedState=mp.bind(null,L)},useEffectEvent:function(t){var e=Xt(),a={impl:t};return e.memoizedState=a,function(){if((P&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}},ho={readContext:_t,use:dl,useCallback:hu,useContext:_t,useEffect:co,useImperativeHandle:mu,useInsertionEffect:fu,useLayoutEffect:pu,useMemo:bu,useReducer:fl,useRef:cu,useState:function(){return fl(Re)},useDebugValue:uo,useDeferredValue:function(t,e){var a=Et();return vu(a,nt.memoizedState,t,e)},useTransition:function(){var t=fl(Re)[0],e=Et().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:Zc,useId:wu,useHostTransitionStatus:go,useFormState:ru,useActionState:ru,useOptimistic:function(t,e){var a=Et();return Pc(a,nt,t,e)},useMemoCache:no,useCacheRefresh:zu};ho.useEffectEvent=du;var Mu={readContext:_t,use:dl,useCallback:hu,useContext:_t,useEffect:co,useImperativeHandle:mu,useInsertionEffect:fu,useLayoutEffect:pu,useMemo:bu,useReducer:ro,useRef:cu,useState:function(){return ro(Re)},useDebugValue:uo,useDeferredValue:function(t,e){var a=Et();return nt===null?fo(a,t,e):vu(a,nt.memoizedState,t,e)},useTransition:function(){var t=ro(Re)[0],e=Et().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:Zc,useId:wu,useHostTransitionStatus:go,useFormState:su,useActionState:su,useOptimistic:function(t,e){var a=Et();return nt!==null?Pc(a,nt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:no,useCacheRefresh:zu};Mu.useEffectEvent=du;function bo(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:E({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vo={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=oe(),n=ra(i);n.payload=e,a!=null&&(n.callback=a),e=oa(t,n,i),e!==null&&(Wt(e,t,i),Pi(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=oe(),n=ra(i);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=oa(t,n,i),e!==null&&(Wt(e,t,i),Pi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=oe(),i=ra(a);i.tag=2,e!=null&&(i.callback=e),e=oa(t,i,a),e!==null&&(Wt(e,t,a),Pi(e,t,a))}};function ku(t,e,a,i,n,l,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,l,r):e.prototype&&e.prototype.isPureReactComponent?!Vi(a,i)||!Vi(n,l):!0}function Du(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&vo.enqueueReplaceState(e,e.state,null)}function La(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=E({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Cu(t){Zn(t)}function Ou(t){console.error(t)}function Hu(t){Zn(t)}function hl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Bu(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function yo(t,e,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){hl(t,e)},a}function Uu(t){return t=ra(t),t.tag=3,t}function Nu(t,e,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var l=i.value;t.payload=function(){return n(l)},t.callback=function(){Bu(e,a,i)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Bu(e,a,i),typeof n!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function bp(t,e,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&ui(e,a,n,!0),a=ie.current,a!==null){switch(a.tag){case 31:case 13:return be===null?Ml():a.alternate===null&&zt===0&&(zt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===il?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),Qo(t,i,n)),!1;case 22:return a.flags|=65536,i===il?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),Qo(t,i,n)),!1}throw Error(g(435,a.tag))}return Qo(t,i,n),Ml(),!1}if(J)return e=ie.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,i!==Gr&&(t=Error(g(422),{cause:i}),Ki(pe(t,a)))):(i!==Gr&&(e=Error(g(423),{cause:i}),Ki(pe(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,i=pe(i,a),n=yo(t.stateNode,i,n),Kr(t,n),zt!==4&&(zt=2)),!1;var l=Error(g(520),{cause:i});if(l=pe(l,a),gn===null?gn=[l]:gn.push(l),zt!==4&&(zt=2),e===null)return!0;i=pe(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=yo(a.stateNode,i,t),Kr(a,t),!1;case 1:if(e=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(pa===null||!pa.has(l))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Uu(n),Nu(n,t,a,i),Kr(a,n),!1}a=a.return}while(a!==null);return!1}var xo=Error(g(461)),Dt=!1;function Rt(t,e,a,i){e.child=t===null?Rc(e,null,a,i):_a(e,t.child,a,i)}function Gu(t,e,a,i,n){a=a.render;var l=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ua(e),i=to(t,e,a,r,l,n),o=eo(),t!==null&&!Dt?(ao(t,e,n),Le(t,e,n)):(J&&o&&Ur(e),e.flags|=1,Rt(t,e,i,n),e.child)}function qu(t,e,a,i,n){if(t===null){var l=a.type;return typeof l=="function"&&!Or(l)&&l.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=l,_u(t,e,l,i,n)):(t=Fn(a.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!Mo(t,n)){var r=l.memoizedProps;if(a=a.compare,a=a!==null?a:Vi,a(r,i)&&t.ref===e.ref)return Le(t,e,n)}return e.flags|=1,t=Ue(l,i),t.ref=e.ref,t.return=e,e.child=t}function _u(t,e,a,i,n){if(t!==null){var l=t.memoizedProps;if(Vi(l,i)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=i=l,Mo(t,n))(t.flags&131072)!==0&&(Dt=!0);else return e.lanes=t.lanes,Le(t,e,n)}return So(t,e,a,i,n)}function Ru(t,e,a,i){var n=i.children,l=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,t!==null){for(i=e.child=t.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~l}else i=0,e.child=null;return Lu(t,e,l,a,i)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&el(e,l!==null?l.cachePool:null),l!==null?Xc(e,l):Wr(),Qc(e);else return i=e.lanes=536870912,Lu(t,e,l!==null?l.baseLanes|a:a,a,i)}else l!==null?(el(e,l.cachePool),Xc(e,l),ca(),e.memoizedState=null):(t!==null&&el(e,null),Wr(),ca());return Rt(t,e,n,a),e.child}function on(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Lu(t,e,a,i,n){var l=Qr();return l=l===null?null:{parent:Mt._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&el(e,null),Wr(),Qc(e),t!==null&&ui(t,e,i,!0),e.childLanes=n,null}function bl(t,e){return e=yl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Yu(t,e,a){return _a(e,t.child,null,a),t=bl(e,e.pendingProps),t.flags|=2,ne(e),e.memoizedState=null,t}function vp(t,e,a){var i=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(J){if(i.mode==="hidden")return t=bl(e,i),e.lanes=536870912,on(null,t);if(Ir(e),(t=mt)?(t=tf(t,he),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ea!==null?{id:je,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},a=Ac(t),a.return=e,e.child=a,qt=e,mt=null)):t=null,t===null)throw ia(e);return e.lanes=536870912,null}return bl(e,i)}var l=t.memoizedState;if(l!==null){var r=l.dehydrated;if(Ir(e),n)if(e.flags&256)e.flags&=-257,e=Yu(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(g(558));else if(Dt||ui(t,e,a,!1),n=(a&t.childLanes)!==0,Dt||n){if(i=st,i!==null&&(r=Os(i,a),r!==0&&r!==l.retryLane))throw l.retryLane=r,Ca(t,r),Wt(i,t,r),xo;Ml(),e=Yu(t,e,a)}else t=l.treeContext,mt=ve(r.nextSibling),qt=e,J=!0,aa=null,he=!1,t!==null&&Mc(e,t),e=bl(e,i),e.flags|=4096;return e}return t=Ue(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function vl(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function So(t,e,a,i,n){return Ua(e),a=to(t,e,a,i,void 0,n),i=eo(),t!==null&&!Dt?(ao(t,e,n),Le(t,e,n)):(J&&i&&Ur(e),e.flags|=1,Rt(t,e,a,n),e.child)}function Xu(t,e,a,i,n,l){return Ua(e),e.updateQueue=null,a=$c(e,i,a,n),Vc(t),i=eo(),t!==null&&!Dt?(ao(t,e,l),Le(t,e,l)):(J&&i&&Ur(e),e.flags|=1,Rt(t,e,a,l),e.child)}function Qu(t,e,a,i,n){if(Ua(e),e.stateNode===null){var l=ri,r=a.contextType;typeof r=="object"&&r!==null&&(l=_t(r)),l=new a(i,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=vo,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=i,l.state=e.memoizedState,l.refs={},$r(e),r=a.contextType,l.context=typeof r=="object"&&r!==null?_t(r):ri,l.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(bo(e,a,r,i),l.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&vo.enqueueReplaceState(l,l.state,null),en(e,i,l,n),tn(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){l=e.stateNode;var o=e.memoizedProps,c=La(a,o);l.props=c;var h=l.context,x=a.contextType;r=ri,typeof x=="object"&&x!==null&&(r=_t(x));var T=a.getDerivedStateFromProps;x=typeof T=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||h!==r)&&Du(e,l,i,r),la=!1;var b=e.memoizedState;l.state=b,en(e,i,l,n),tn(),h=e.memoizedState,o||b!==h||la?(typeof T=="function"&&(bo(e,a,T,i),h=e.memoizedState),(c=la||ku(e,a,c,i,b,h,r))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=h),l.props=i,l.state=h,l.context=r,i=c):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Zr(t,e),r=e.memoizedProps,x=La(a,r),l.props=x,T=e.pendingProps,b=l.context,h=a.contextType,c=ri,typeof h=="object"&&h!==null&&(c=_t(h)),o=a.getDerivedStateFromProps,(h=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==T||b!==c)&&Du(e,l,i,c),la=!1,b=e.memoizedState,l.state=b,en(e,i,l,n),tn();var y=e.memoizedState;r!==T||b!==y||la||t!==null&&t.dependencies!==null&&Pn(t.dependencies)?(typeof o=="function"&&(bo(e,a,o,i),y=e.memoizedState),(x=la||ku(e,a,x,i,b,y,c)||t!==null&&t.dependencies!==null&&Pn(t.dependencies))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,y,c)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),l.props=i,l.state=y,l.context=c,i=x):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),i=!1)}return l=i,vl(t,e),i=(e.flags&128)!==0,l||i?(l=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&i?(e.child=_a(e,t.child,null,n),e.child=_a(e,null,a,n)):Rt(t,e,a,n),e.memoizedState=l.state,t=e.child):t=Le(t,e,n),t}function Vu(t,e,a,i){return Ha(),e.flags|=256,Rt(t,e,a,i),e.child}var wo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zo(t){return{baseLanes:t,cachePool:Bc()}}function To(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=re),t}function $u(t,e,a){var i=e.pendingProps,n=!1,l=(e.flags&128)!==0,r;if((r=l)||(r=t!==null&&t.memoizedState===null?!1:(At.current&2)!==0),r&&(n=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(J){if(n?sa(e):ca(),(t=mt)?(t=tf(t,he),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ea!==null?{id:je,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},a=Ac(t),a.return=e,e.child=a,qt=e,mt=null)):t=null,t===null)throw ia(e);return rs(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,n?(ca(),n=e.mode,o=yl({mode:"hidden",children:o},n),i=Oa(i,n,a,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=zo(a),i.childLanes=To(t,r,a),e.memoizedState=wo,on(null,i)):(sa(e),Ao(e,o))}var c=t.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(l)e.flags&256?(sa(e),e.flags&=-257,e=Eo(t,e,a)):e.memoizedState!==null?(ca(),e.child=t.child,e.flags|=128,e=null):(ca(),o=i.fallback,n=e.mode,i=yl({mode:"visible",children:i.children},n),o=Oa(o,n,a,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,_a(e,t.child,null,a),i=e.child,i.memoizedState=zo(a),i.childLanes=To(t,r,a),e.memoizedState=wo,e=on(null,i));else if(sa(e),rs(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var h=r.dgst;r=h,i=Error(g(419)),i.stack="",i.digest=r,Ki({value:i,source:null,stack:null}),e=Eo(t,e,a)}else if(Dt||ui(t,e,a,!1),r=(a&t.childLanes)!==0,Dt||r){if(r=st,r!==null&&(i=Os(r,a),i!==0&&i!==c.retryLane))throw c.retryLane=i,Ca(t,i),Wt(r,t,i),xo;ls(o)||Ml(),e=Eo(t,e,a)}else ls(o)?(e.flags|=192,e.child=t.child,e=null):(t=c.treeContext,mt=ve(o.nextSibling),qt=e,J=!0,aa=null,he=!1,t!==null&&Mc(e,t),e=Ao(e,i.children),e.flags|=4096);return e}return n?(ca(),o=i.fallback,n=e.mode,c=t.child,h=c.sibling,i=Ue(c,{mode:"hidden",children:i.children}),i.subtreeFlags=c.subtreeFlags&65011712,h!==null?o=Ue(h,o):(o=Oa(o,n,a,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,on(null,i),i=e.child,o=t.child.memoizedState,o===null?o=zo(a):(n=o.cachePool,n!==null?(c=Mt._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Bc(),o={baseLanes:o.baseLanes|a,cachePool:n}),i.memoizedState=o,i.childLanes=To(t,r,a),e.memoizedState=wo,on(t.child,i)):(sa(e),a=t.child,t=a.sibling,a=Ue(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function Ao(t,e){return e=yl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function yl(t,e){return t=ae(22,t,null,e),t.lanes=0,t}function Eo(t,e,a){return _a(e,t.child,null,a),t=Ao(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zu(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Rr(t.return,e,a)}function jo(t,e,a,i,n,l){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:l}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=a,r.tailMode=n,r.treeForkCount=l)}function Ku(t,e,a){var i=e.pendingProps,n=i.revealOrder,l=i.tail;i=i.children;var r=At.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,tt(At,r),Rt(t,e,i,a),i=J?Zi:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zu(t,a,e);else if(t.tag===19)Zu(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&ol(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),jo(e,!1,n,a,l,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ol(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}jo(e,!0,a,null,l,i);break;case"together":jo(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Le(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),fa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ui(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(g(153));if(e.child!==null){for(t=e.child,a=Ue(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ue(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Mo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Pn(t)))}function yp(t,e,a){switch(e.tag){case 3:Dn(e,e.stateNode.containerInfo),na(e,Mt,t.memoizedState.cache),Ha();break;case 27:case 5:Fl(e);break;case 4:Dn(e,e.stateNode.containerInfo);break;case 10:na(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ir(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(sa(e),e.flags|=128,null):(a&e.child.childLanes)!==0?$u(t,e,a):(sa(e),t=Le(t,e,a),t!==null?t.sibling:null);sa(e);break;case 19:var n=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(ui(t,e,a,!1),i=(a&e.childLanes)!==0),n){if(i)return Ku(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(At,At.current),i)break;return null;case 22:return e.lanes=0,Ru(t,e,a,e.pendingProps);case 24:na(e,Mt,t.memoizedState.cache)}return Le(t,e,a)}function Ju(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Dt=!0;else{if(!Mo(t,a)&&(e.flags&128)===0)return Dt=!1,yp(t,e,a);Dt=(t.flags&131072)!==0}else Dt=!1,J&&(e.flags&1048576)!==0&&jc(e,Zi,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=Ga(e.elementType),e.type=t,typeof t=="function")Or(t)?(i=La(t,i),e.tag=1,e=Qu(null,e,t,i,a)):(e.tag=0,e=So(null,e,t,i,a));else{if(t!=null){var n=t.$$typeof;if(n===Tt){e.tag=11,e=Gu(null,e,t,i,a);break t}else if(n===Se){e.tag=14,e=qu(null,e,t,i,a);break t}}throw e=Oi(t)||t,Error(g(306,e,""))}}return e;case 0:return So(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,n=La(i,e.pendingProps),Qu(t,e,i,n,a);case 3:t:{if(Dn(e,e.stateNode.containerInfo),t===null)throw Error(g(387));i=e.pendingProps;var l=e.memoizedState;n=l.element,Zr(t,e),en(e,i,null,a);var r=e.memoizedState;if(i=r.cache,na(e,Mt,i),i!==l.cache&&Lr(e,[Mt],a,!0),tn(),i=r.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Vu(t,e,i,a);break t}else if(i!==n){n=pe(Error(g(424)),e),Ki(n),e=Vu(t,e,i,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(mt=ve(t.firstChild),qt=e,J=!0,aa=null,he=!0,a=Rc(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ha(),i===n){e=Le(t,e,a);break t}Rt(t,e,i,a)}e=e.child}return e;case 26:return vl(t,e),t===null?(a=of(e.type,null,e.pendingProps,null))?e.memoizedState=a:J||(a=e.type,t=e.pendingProps,i=Ul(Fe.current).createElement(a),i[Gt]=e,i[Qt]=t,Lt(i,a,t),Bt(i),e.stateNode=i):e.memoizedState=of(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Fl(e),t===null&&J&&(i=e.stateNode=nf(e.type,e.pendingProps,Fe.current),qt=e,he=!0,n=mt,ba(e.type)?(os=n,mt=ve(i.firstChild)):mt=n),Rt(t,e,e.pendingProps.children,a),vl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&J&&((n=i=mt)&&(i=Jp(i,e.type,e.pendingProps,he),i!==null?(e.stateNode=i,qt=e,mt=ve(i.firstChild),he=!1,n=!0):n=!1),n||ia(e)),Fl(e),n=e.type,l=e.pendingProps,r=t!==null?t.memoizedProps:null,i=l.children,as(n,l)?i=null:r!==null&&as(n,r)&&(e.flags|=32),e.memoizedState!==null&&(n=to(t,e,up,null,null,a),wn._currentValue=n),vl(t,e),Rt(t,e,i,a),e.child;case 6:return t===null&&J&&((t=a=mt)&&(a=Wp(a,e.pendingProps,he),a!==null?(e.stateNode=a,qt=e,mt=null,t=!0):t=!1),t||ia(e)),null;case 13:return $u(t,e,a);case 4:return Dn(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_a(e,null,i,a):Rt(t,e,i,a),e.child;case 11:return Gu(t,e,e.type,e.pendingProps,a);case 7:return Rt(t,e,e.pendingProps,a),e.child;case 8:return Rt(t,e,e.pendingProps.children,a),e.child;case 12:return Rt(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,na(e,e.type,i.value),Rt(t,e,i.children,a),e.child;case 9:return n=e.type._context,i=e.pendingProps.children,Ua(e),n=_t(n),i=i(n),e.flags|=1,Rt(t,e,i,a),e.child;case 14:return qu(t,e,e.type,e.pendingProps,a);case 15:return _u(t,e,e.type,e.pendingProps,a);case 19:return Ku(t,e,a);case 31:return vp(t,e,a);case 22:return Ru(t,e,a,e.pendingProps);case 24:return Ua(e),i=_t(Mt),t===null?(n=Qr(),n===null&&(n=st,l=Yr(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=a),n=l),e.memoizedState={parent:i,cache:n},$r(e),na(e,Mt,n)):((t.lanes&a)!==0&&(Zr(t,e),en(e,null,null,a),tn()),n=t.memoizedState,l=e.memoizedState,n.parent!==i?(n={parent:i,cache:i},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),na(e,Mt,i)):(i=l.cache,na(e,Mt,i),i!==n.cache&&Lr(e,[Mt],a,!0))),Rt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(g(156,e.tag))}function Ye(t){t.flags|=4}function ko(t,e,a,i,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(wd())t.flags|=8192;else throw qa=il,Vr}else t.flags&=-16777217}function Wu(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ff(e))if(wd())t.flags|=8192;else throw qa=il,Vr}function xl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ks():536870912,t.lanes|=e,wi|=e)}function sn(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function xp(t,e,a){var i=e.pendingProps;switch(Nr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return ht(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),qe(Mt),$a(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ci(e)?Ye(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qr())),ht(e),null;case 26:var n=e.type,l=e.memoizedState;return t===null?(Ye(e),l!==null?(ht(e),Wu(e,l)):(ht(e),ko(e,n,null,i,a))):l?l!==t.memoizedState?(Ye(e),ht(e),Wu(e,l)):(ht(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Ye(e),ht(e),ko(e,n,t,i,a)),null;case 27:if(Cn(e),a=Fe.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ye(e);else{if(!i){if(e.stateNode===null)throw Error(g(166));return ht(e),null}t=Ht.current,ci(e)?kc(e):(t=nf(n,i,a),e.stateNode=t,Ye(e))}return ht(e),null;case 5:if(Cn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ye(e);else{if(!i){if(e.stateNode===null)throw Error(g(166));return ht(e),null}if(l=Ht.current,ci(e))kc(e);else{var r=Ul(Fe.current);switch(l){case 1:l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=r.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?r.createElement(n,{is:i.is}):r.createElement(n)}}l[Gt]=e,l[Qt]=i;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)l.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=l;t:switch(Lt(l,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ye(e)}}return ht(e),ko(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ye(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(g(166));if(t=Fe.current,ci(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,n=qt,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}t[Gt]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||$d(t.nodeValue,a)),t||ia(e,!0)}else t=Ul(t).createTextNode(i),t[Gt]=e,e.stateNode=t}return ht(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(i=ci(e),a!==null){if(t===null){if(!i)throw Error(g(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(557));t[Gt]=e}else Ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ht(e),t=!1}else a=qr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ne(e),e):(ne(e),null);if((e.flags&128)!==0)throw Error(g(558))}return ht(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ci(e),i!==null&&i.dehydrated!==null){if(t===null){if(!n)throw Error(g(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[Gt]=e}else Ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ht(e),n=!1}else n=qr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ne(e),e):(ne(e),null)}return ne(e),(e.flags&128)!==0?(e.lanes=a,e):(a=i!==null,t=t!==null&&t.memoizedState!==null,a&&(i=e.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==n&&(i.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),xl(e,e.updateQueue),ht(e),null);case 4:return $a(),t===null&&Fo(e.stateNode.containerInfo),ht(e),null;case 10:return qe(e.type),ht(e),null;case 19:if(xt(At),i=e.memoizedState,i===null)return ht(e),null;if(n=(e.flags&128)!==0,l=i.rendering,l===null)if(n)sn(i,!1);else{if(zt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=ol(t),l!==null){for(e.flags|=128,sn(i,!1),t=l.updateQueue,e.updateQueue=t,xl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Tc(a,t),a=a.sibling;return tt(At,At.current&1|2),J&&Ne(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&It()>Al&&(e.flags|=128,n=!0,sn(i,!1),e.lanes=4194304)}else{if(!n)if(t=ol(l),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,xl(e,t),sn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!J)return ht(e),null}else 2*It()-i.renderingStartTime>Al&&a!==536870912&&(e.flags|=128,n=!0,sn(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(t=i.last,t!==null?t.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=It(),t.sibling=null,a=At.current,tt(At,n?a&1|2:a&1),J&&Ne(e,i.treeForkCount),t):(ht(e),null);case 22:case 23:return ne(e),Fr(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),a=e.updateQueue,a!==null&&xl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&xt(Na),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),qe(Mt),ht(e),null;case 25:return null;case 30:return null}throw Error(g(156,e.tag))}function Sp(t,e){switch(Nr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qe(Mt),$a(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Cn(e),null;case 31:if(e.memoizedState!==null){if(ne(e),e.alternate===null)throw Error(g(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ne(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(g(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(At),null;case 4:return $a(),null;case 10:return qe(e.type),null;case 22:case 23:return ne(e),Fr(),t!==null&&xt(Na),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return qe(Mt),null;case 25:return null;default:return null}}function Fu(t,e){switch(Nr(e),e.tag){case 3:qe(Mt),$a();break;case 26:case 27:case 5:Cn(e);break;case 4:$a();break;case 31:e.memoizedState!==null&&ne(e);break;case 13:ne(e);break;case 19:xt(At);break;case 10:qe(e.type);break;case 22:case 23:ne(e),Fr(),t!==null&&xt(Na);break;case 24:qe(Mt)}}function cn(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&t)===t){i=void 0;var l=a.create,r=a.inst;i=l(),r.destroy=i}a=a.next}while(a!==n)}}catch(o){at(e,e.return,o)}}function ua(t,e,a){try{var i=e.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var l=n.next;i=l;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=e;var c=a,h=o;try{h()}catch(x){at(n,c,x)}}}i=i.next}while(i!==l)}}catch(x){at(e,e.return,x)}}function Iu(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Yc(e,a)}catch(i){at(t,t.return,i)}}}function Pu(t,e,a){a.props=La(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){at(t,e,i)}}function un(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(n){at(t,e,n)}}function ke(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){at(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){at(t,e,n)}else a.current=null}function td(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){at(t,t.return,n)}}function Do(t,e,a){try{var i=t.stateNode;Xp(i,t.type,a,e),i[Qt]=e}catch(n){at(t,t.return,n)}}function ed(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ba(t.type)||t.tag===4}function Co(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ed(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oo(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=He));else if(i!==4&&(i===27&&ba(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Oo(t,e,a),t=t.sibling;t!==null;)Oo(t,e,a),t=t.sibling}function Sl(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sl(t,e,a),t=t.sibling;t!==null;)Sl(t,e,a),t=t.sibling}function ad(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Lt(e,i,a),e[Gt]=t,e[Qt]=a}catch(l){at(t,t.return,l)}}var Xe=!1,Ct=!1,Ho=!1,id=typeof WeakSet=="function"?WeakSet:Set,Ut=null;function wp(t,e){if(t=t.containerInfo,ts=Yl,t=mc(t),Ar(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break t}var r=0,o=-1,c=-1,h=0,x=0,T=t,b=null;e:for(;;){for(var y;T!==a||n!==0&&T.nodeType!==3||(o=r+n),T!==l||i!==0&&T.nodeType!==3||(c=r+i),T.nodeType===3&&(r+=T.nodeValue.length),(y=T.firstChild)!==null;)b=T,T=y;for(;;){if(T===t)break e;if(b===a&&++h===n&&(o=r),b===l&&++x===i&&(c=r),(y=T.nextSibling)!==null)break;T=b,b=T.parentNode}T=y}a=o===-1||c===-1?null:{start:o,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(es={focusedElem:t,selectionRange:a},Yl=!1,Ut=e;Ut!==null;)if(e=Ut,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ut=t;else for(;Ut!==null;){switch(e=Ut,l=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,a=e,n=l.memoizedProps,l=l.memoizedState,i=a.stateNode;try{var C=La(a.type,n);t=i.getSnapshotBeforeUpdate(C,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(N){at(a,a.return,N)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)ns(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ns(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(g(163))}if(t=e.sibling,t!==null){t.return=e.return,Ut=t;break}Ut=e.return}}function nd(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ve(t,a),i&4&&cn(5,a);break;case 1:if(Ve(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){at(a,a.return,r)}else{var n=La(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){at(a,a.return,r)}}i&64&&Iu(a),i&512&&un(a,a.return);break;case 3:if(Ve(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Yc(t,e)}catch(r){at(a,a.return,r)}}break;case 27:e===null&&i&4&&ad(a);case 26:case 5:Ve(t,a),e===null&&i&4&&td(a),i&512&&un(a,a.return);break;case 12:Ve(t,a);break;case 31:Ve(t,a),i&4&&od(t,a);break;case 13:Ve(t,a),i&4&&sd(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Cp.bind(null,a),Fp(t,a))));break;case 22:if(i=a.memoizedState!==null||Xe,!i){e=e!==null&&e.memoizedState!==null||Ct,n=Xe;var l=Ct;Xe=i,(Ct=e)&&!l?$e(t,a,(a.subtreeFlags&8772)!==0):Ve(t,a),Xe=n,Ct=l}break;case 30:break;default:Ve(t,a)}}function ld(t){var e=t.alternate;e!==null&&(t.alternate=null,ld(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&sr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vt=null,$t=!1;function Qe(t,e,a){for(a=a.child;a!==null;)rd(t,e,a),a=a.sibling}function rd(t,e,a){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 26:Ct||ke(a,e),Qe(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ct||ke(a,e);var i=vt,n=$t;ba(a.type)&&(vt=a.stateNode,$t=!1),Qe(t,e,a),yn(a.stateNode),vt=i,$t=n;break;case 5:Ct||ke(a,e);case 6:if(i=vt,n=$t,vt=null,Qe(t,e,a),vt=i,$t=n,vt!==null)if($t)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(a.stateNode)}catch(l){at(a,e,l)}else try{vt.removeChild(a.stateNode)}catch(l){at(a,e,l)}break;case 18:vt!==null&&($t?(t=vt,Id(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Di(t)):Id(vt,a.stateNode));break;case 4:i=vt,n=$t,vt=a.stateNode.containerInfo,$t=!0,Qe(t,e,a),vt=i,$t=n;break;case 0:case 11:case 14:case 15:ua(2,a,e),Ct||ua(4,a,e),Qe(t,e,a);break;case 1:Ct||(ke(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Pu(a,e,i)),Qe(t,e,a);break;case 21:Qe(t,e,a);break;case 22:Ct=(i=Ct)||a.memoizedState!==null,Qe(t,e,a),Ct=i;break;default:Qe(t,e,a)}}function od(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Di(t)}catch(a){at(e,e.return,a)}}}function sd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Di(t)}catch(a){at(e,e.return,a)}}function zp(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new id),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new id),e;default:throw Error(g(435,t.tag))}}function wl(t,e){var a=zp(t);e.forEach(function(i){if(!a.has(i)){a.add(i);var n=Op.bind(null,t,i);i.then(n,n)}})}function Zt(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],l=t,r=e,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(ba(o.type)){vt=o.stateNode,$t=!1;break t}break;case 5:vt=o.stateNode,$t=!1;break t;case 3:case 4:vt=o.stateNode.containerInfo,$t=!0;break t}o=o.return}if(vt===null)throw Error(g(160));rd(l,r,n),vt=null,$t=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)cd(e,t),e=e.sibling}var Te=null;function cd(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zt(e,t),Kt(t),i&4&&(ua(3,t,t.return),cn(3,t),ua(5,t,t.return));break;case 1:Zt(e,t),Kt(t),i&512&&(Ct||a===null||ke(a,a.return)),i&64&&Xe&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=Te;if(Zt(e,t),Kt(t),i&512&&(Ct||a===null||ke(a,a.return)),i&4){var l=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(i){case"title":l=n.getElementsByTagName("title")[0],(!l||l[Ni]||l[Gt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(i),n.head.insertBefore(l,n.querySelector("head > title"))),Lt(l,i,a),l[Gt]=t,Bt(l),i=l;break t;case"link":var r=uf("link","href",n).get(i+(a.href||""));if(r){for(var o=0;o<r.length;o++)if(l=r[o],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(o,1);break e}}l=n.createElement(i),Lt(l,i,a),n.head.appendChild(l);break;case"meta":if(r=uf("meta","content",n).get(i+(a.content||""))){for(o=0;o<r.length;o++)if(l=r[o],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(o,1);break e}}l=n.createElement(i),Lt(l,i,a),n.head.appendChild(l);break;default:throw Error(g(468,i))}l[Gt]=t,Bt(l),i=l}t.stateNode=i}else df(n,t.type,t.stateNode);else t.stateNode=cf(n,i,t.memoizedProps);else l!==i?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,i===null?df(n,t.type,t.stateNode):cf(n,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Do(t,t.memoizedProps,a.memoizedProps)}break;case 27:Zt(e,t),Kt(t),i&512&&(Ct||a===null||ke(a,a.return)),a!==null&&i&4&&Do(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Zt(e,t),Kt(t),i&512&&(Ct||a===null||ke(a,a.return)),t.flags&32){n=t.stateNode;try{Pa(n,"")}catch(C){at(t,t.return,C)}}i&4&&t.stateNode!=null&&(n=t.memoizedProps,Do(t,n,a!==null?a.memoizedProps:n)),i&1024&&(Ho=!0);break;case 6:if(Zt(e,t),Kt(t),i&4){if(t.stateNode===null)throw Error(g(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(C){at(t,t.return,C)}}break;case 3:if(ql=null,n=Te,Te=Nl(e.containerInfo),Zt(e,t),Te=n,Kt(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Di(e.containerInfo)}catch(C){at(t,t.return,C)}Ho&&(Ho=!1,ud(t));break;case 4:i=Te,Te=Nl(t.stateNode.containerInfo),Zt(e,t),Kt(t),Te=i;break;case 12:Zt(e,t),Kt(t);break;case 31:Zt(e,t),Kt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,wl(t,i)));break;case 13:Zt(e,t),Kt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tl=It()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,wl(t,i)));break;case 22:n=t.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,h=Xe,x=Ct;if(Xe=h||n,Ct=x||c,Zt(e,t),Ct=x,Xe=h,Kt(t),i&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||c||Xe||Ct||Ya(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){c=a=e;try{if(l=c.stateNode,n)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=c.stateNode;var T=c.memoizedProps.style,b=T!=null&&T.hasOwnProperty("display")?T.display:null;o.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(C){at(c,c.return,C)}}}else if(e.tag===6){if(a===null){c=e;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(C){at(c,c.return,C)}}}else if(e.tag===18){if(a===null){c=e;try{var y=c.stateNode;n?Pd(y,!0):Pd(c.stateNode,!1)}catch(C){at(c,c.return,C)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,wl(t,a))));break;case 19:Zt(e,t),Kt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,wl(t,i)));break;case 30:break;case 21:break;default:Zt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if(ed(i)){a=i;break}i=i.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var n=a.stateNode,l=Co(t);Sl(t,l,n);break;case 5:var r=a.stateNode;a.flags&32&&(Pa(r,""),a.flags&=-33);var o=Co(t);Sl(t,o,r);break;case 3:case 4:var c=a.stateNode.containerInfo,h=Co(t);Oo(t,h,c);break;default:throw Error(g(161))}}catch(x){at(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ud(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ud(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ve(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)nd(t,e.alternate,e),e=e.sibling}function Ya(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ua(4,e,e.return),Ya(e);break;case 1:ke(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Pu(e,e.return,a),Ya(e);break;case 27:yn(e.stateNode);case 26:case 5:ke(e,e.return),Ya(e);break;case 22:e.memoizedState===null&&Ya(e);break;case 30:Ya(e);break;default:Ya(e)}t=t.sibling}}function $e(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,n=t,l=e,r=l.flags;switch(l.tag){case 0:case 11:case 15:$e(n,l,a),cn(4,l);break;case 1:if($e(n,l,a),i=l,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){at(i,i.return,h)}if(i=l,n=i.updateQueue,n!==null){var o=i.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Lc(c[n],o)}catch(h){at(i,i.return,h)}}a&&r&64&&Iu(l),un(l,l.return);break;case 27:ad(l);case 26:case 5:$e(n,l,a),a&&i===null&&r&4&&td(l),un(l,l.return);break;case 12:$e(n,l,a);break;case 31:$e(n,l,a),a&&r&4&&od(n,l);break;case 13:$e(n,l,a),a&&r&4&&sd(n,l);break;case 22:l.memoizedState===null&&$e(n,l,a),un(l,l.return);break;case 30:break;default:$e(n,l,a)}e=e.sibling}}function Bo(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ji(a))}function Uo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ji(t))}function Ae(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dd(t,e,a,i),e=e.sibling}function dd(t,e,a,i){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ae(t,e,a,i),n&2048&&cn(9,e);break;case 1:Ae(t,e,a,i);break;case 3:Ae(t,e,a,i),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ji(t)));break;case 12:if(n&2048){Ae(t,e,a,i),t=e.stateNode;try{var l=e.memoizedProps,r=l.id,o=l.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){at(e,e.return,c)}}else Ae(t,e,a,i);break;case 31:Ae(t,e,a,i);break;case 13:Ae(t,e,a,i);break;case 23:break;case 22:l=e.stateNode,r=e.alternate,e.memoizedState!==null?l._visibility&2?Ae(t,e,a,i):dn(t,e):l._visibility&2?Ae(t,e,a,i):(l._visibility|=2,yi(t,e,a,i,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Bo(r,e);break;case 24:Ae(t,e,a,i),n&2048&&Uo(e.alternate,e);break;default:Ae(t,e,a,i)}}function yi(t,e,a,i,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=t,r=e,o=a,c=i,h=r.flags;switch(r.tag){case 0:case 11:case 15:yi(l,r,o,c,n),cn(8,r);break;case 23:break;case 22:var x=r.stateNode;r.memoizedState!==null?x._visibility&2?yi(l,r,o,c,n):dn(l,r):(x._visibility|=2,yi(l,r,o,c,n)),n&&h&2048&&Bo(r.alternate,r);break;case 24:yi(l,r,o,c,n),n&&h&2048&&Uo(r.alternate,r);break;default:yi(l,r,o,c,n)}e=e.sibling}}function dn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,n=i.flags;switch(i.tag){case 22:dn(a,i),n&2048&&Bo(i.alternate,i);break;case 24:dn(a,i),n&2048&&Uo(i.alternate,i);break;default:dn(a,i)}e=e.sibling}}var fn=8192;function xi(t,e,a){if(t.subtreeFlags&fn)for(t=t.child;t!==null;)fd(t,e,a),t=t.sibling}function fd(t,e,a){switch(t.tag){case 26:xi(t,e,a),t.flags&fn&&t.memoizedState!==null&&cg(a,Te,t.memoizedState,t.memoizedProps);break;case 5:xi(t,e,a);break;case 3:case 4:var i=Te;Te=Nl(t.stateNode.containerInfo),xi(t,e,a),Te=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=fn,fn=16777216,xi(t,e,a),fn=i):xi(t,e,a));break;default:xi(t,e,a)}}function pd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function pn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Ut=i,md(i,t)}pd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gd(t),t=t.sibling}function gd(t){switch(t.tag){case 0:case 11:case 15:pn(t),t.flags&2048&&ua(9,t,t.return);break;case 3:pn(t);break;case 12:pn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,zl(t)):pn(t);break;default:pn(t)}}function zl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Ut=i,md(i,t)}pd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ua(8,e,e.return),zl(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,zl(e));break;default:zl(e)}t=t.sibling}}function md(t,e){for(;Ut!==null;){var a=Ut;switch(a.tag){case 0:case 11:case 15:ua(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ji(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Ut=i;else t:for(a=t;Ut!==null;){i=Ut;var n=i.sibling,l=i.return;if(ld(i),i===a){Ut=null;break t}if(n!==null){n.return=l,Ut=n;break t}Ut=l}}}var Tp={getCacheForType:function(t){var e=_t(Mt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return _t(Mt).controller.signal}},Ap=typeof WeakMap=="function"?WeakMap:Map,P=0,st=null,Q=null,Z=0,et=0,le=null,da=!1,Si=!1,No=!1,Ze=0,zt=0,fa=0,Xa=0,Go=0,re=0,wi=0,gn=null,Jt=null,qo=!1,Tl=0,hd=0,Al=1/0,El=null,pa=null,Ot=0,ga=null,zi=null,Ke=0,_o=0,Ro=null,bd=null,mn=0,Lo=null;function oe(){return(P&2)!==0&&Z!==0?Z&-Z:z.T!==null?Zo():Hs()}function vd(){if(re===0)if((Z&536870912)===0||J){var t=Bn;Bn<<=1,(Bn&3932160)===0&&(Bn=262144),re=t}else re=536870912;return t=ie.current,t!==null&&(t.flags|=32),re}function Wt(t,e,a){(t===st&&(et===2||et===9)||t.cancelPendingCommit!==null)&&(Ti(t,0),ma(t,Z,re,!1)),Ui(t,a),((P&2)===0||t!==st)&&(t===st&&((P&2)===0&&(Xa|=a),zt===4&&ma(t,Z,re,!1)),De(t))}function yd(t,e,a){if((P&6)!==0)throw Error(g(327));var i=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Bi(t,e),n=i?Mp(t,e):Xo(t,e,!0),l=i;do{if(n===0){Si&&!i&&ma(t,e,0,!1);break}else{if(a=t.current.alternate,l&&!Ep(a)){n=Xo(t,e,!1),l=!1;continue}if(n===2){if(l=e,t.errorRecoveryDisabledLanes&l)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var o=t;n=gn;var c=o.current.memoizedState.isDehydrated;if(c&&(Ti(o,r).flags|=256),r=Xo(o,r,!1),r!==2){if(No&&!c){o.errorRecoveryDisabledLanes|=l,Xa|=l,n=4;break t}l=Jt,Jt=n,l!==null&&(Jt===null?Jt=l:Jt.push.apply(Jt,l))}n=r}if(l=!1,n!==2)continue}}if(n===1){Ti(t,0),ma(t,e,0,!0);break}t:{switch(i=t,l=n,l){case 0:case 1:throw Error(g(345));case 4:if((e&4194048)!==e)break;case 6:ma(i,e,re,!da);break t;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(g(329))}if((e&62914560)===e&&(n=Tl+300-It(),10<n)){if(ma(i,e,re,!da),Nn(i,0,!0)!==0)break t;Ke=e,i.timeoutHandle=Wd(xd.bind(null,i,a,Jt,El,qo,e,re,Xa,wi,da,l,"Throttled",-0,0),n);break t}xd(i,a,Jt,El,qo,e,re,Xa,wi,da,l,null,-0,0)}}break}while(!0);De(t)}function xd(t,e,a,i,n,l,r,o,c,h,x,T,b,y){if(t.timeoutHandle=-1,T=e.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:He},fd(e,l,T);var C=(l&62914560)===l?Tl-It():(l&4194048)===l?hd-It():0;if(C=ug(T,C),C!==null){Ke=l,t.cancelPendingCommit=C(Md.bind(null,t,e,l,a,i,n,r,o,c,x,T,null,b,y)),ma(t,l,r,!h);return}}Md(t,e,l,a,i,n,r,o,c)}function Ep(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],l=n.getSnapshot;n=n.value;try{if(!ee(l(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ma(t,e,a,i){e&=~Go,e&=~Xa,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var n=e;0<n;){var l=31-te(n),r=1<<l;i[l]=-1,n&=~r}a!==0&&Ds(t,a,e)}function jl(){return(P&6)===0?(hn(0),!1):!0}function Yo(){if(Q!==null){if(et===0)var t=Q.return;else t=Q,Ge=Ba=null,io(t),gi=null,Fi=0,t=Q;for(;t!==null;)Fu(t.alternate,t),t=t.return;Q=null}}function Ti(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$p(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ke=0,Yo(),st=t,Q=a=Ue(t.current,null),Z=e,et=0,le=null,da=!1,Si=Bi(t,e),No=!1,wi=re=Go=Xa=fa=zt=0,Jt=gn=null,qo=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var n=31-te(i),l=1<<n;e|=t[n],i&=~l}return Ze=e,Kn(),a}function Sd(t,e){L=null,z.H=rn,e===pi||e===al?(e=Gc(),et=3):e===Vr?(e=Gc(),et=4):et=e===xo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,le=e,Q===null&&(zt=1,hl(t,pe(e,t.current)))}function wd(){var t=ie.current;return t===null?!0:(Z&4194048)===Z?be===null:(Z&62914560)===Z||(Z&536870912)!==0?t===be:!1}function zd(){var t=z.H;return z.H=rn,t===null?rn:t}function Td(){var t=z.A;return z.A=Tp,t}function Ml(){zt=4,da||(Z&4194048)!==Z&&ie.current!==null||(Si=!0),(fa&134217727)===0&&(Xa&134217727)===0||st===null||ma(st,Z,re,!1)}function Xo(t,e,a){var i=P;P|=2;var n=zd(),l=Td();(st!==t||Z!==e)&&(El=null,Ti(t,e)),e=!1;var r=zt;t:do try{if(et!==0&&Q!==null){var o=Q,c=le;switch(et){case 8:Yo(),r=6;break t;case 3:case 2:case 9:case 6:ie.current===null&&(e=!0);var h=et;if(et=0,le=null,Ai(t,o,c,h),a&&Si){r=0;break t}break;default:h=et,et=0,le=null,Ai(t,o,c,h)}}jp(),r=zt;break}catch(x){Sd(t,x)}while(!0);return e&&t.shellSuspendCounter++,Ge=Ba=null,P=i,z.H=n,z.A=l,Q===null&&(st=null,Z=0,Kn()),r}function jp(){for(;Q!==null;)Ad(Q)}function Mp(t,e){var a=P;P|=2;var i=zd(),n=Td();st!==t||Z!==e?(El=null,Al=It()+500,Ti(t,e)):Si=Bi(t,e);t:do try{if(et!==0&&Q!==null){e=Q;var l=le;e:switch(et){case 1:et=0,le=null,Ai(t,e,l,1);break;case 2:case 9:if(Uc(l)){et=0,le=null,Ed(e);break}e=function(){et!==2&&et!==9||st!==t||(et=7),De(t)},l.then(e,e);break t;case 3:et=7;break t;case 4:et=5;break t;case 7:Uc(l)?(et=0,le=null,Ed(e)):(et=0,le=null,Ai(t,e,l,7));break;case 5:var r=null;switch(Q.tag){case 26:r=Q.memoizedState;case 5:case 27:var o=Q;if(r?ff(r):o.stateNode.complete){et=0,le=null;var c=o.sibling;if(c!==null)Q=c;else{var h=o.return;h!==null?(Q=h,kl(h)):Q=null}break e}}et=0,le=null,Ai(t,e,l,5);break;case 6:et=0,le=null,Ai(t,e,l,6);break;case 8:Yo(),zt=6;break t;default:throw Error(g(462))}}kp();break}catch(x){Sd(t,x)}while(!0);return Ge=Ba=null,z.H=i,z.A=n,P=a,Q!==null?0:(st=null,Z=0,Kn(),zt)}function kp(){for(;Q!==null&&!If();)Ad(Q)}function Ad(t){var e=Ju(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?kl(t):Q=e}function Ed(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Xu(a,e,e.pendingProps,e.type,void 0,Z);break;case 11:e=Xu(a,e,e.pendingProps,e.type.render,e.ref,Z);break;case 5:io(e);default:Fu(a,e),e=Q=Tc(e,Ze),e=Ju(a,e,Ze)}t.memoizedProps=t.pendingProps,e===null?kl(t):Q=e}function Ai(t,e,a,i){Ge=Ba=null,io(e),gi=null,Fi=0;var n=e.return;try{if(bp(t,n,e,a,Z)){zt=1,hl(t,pe(a,t.current)),Q=null;return}}catch(l){if(n!==null)throw Q=n,l;zt=1,hl(t,pe(a,t.current)),Q=null;return}e.flags&32768?(J||i===1?t=!0:Si||(Z&536870912)!==0?t=!1:(da=t=!0,(i===2||i===9||i===3||i===6)&&(i=ie.current,i!==null&&i.tag===13&&(i.flags|=16384))),jd(e,t)):kl(e)}function kl(t){var e=t;do{if((e.flags&32768)!==0){jd(e,da);return}t=e.return;var a=xp(e.alternate,e,Ze);if(a!==null){Q=a;return}if(e=e.sibling,e!==null){Q=e;return}Q=e=t}while(e!==null);zt===0&&(zt=5)}function jd(t,e){do{var a=Sp(t.alternate,t);if(a!==null){a.flags&=32767,Q=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Q=t;return}Q=t=a}while(t!==null);zt=6,Q=null}function Md(t,e,a,i,n,l,r,o,c){t.cancelPendingCommit=null;do Dl();while(Ot!==0);if((P&6)!==0)throw Error(g(327));if(e!==null){if(e===t.current)throw Error(g(177));if(l=e.lanes|e.childLanes,l|=Dr,s0(t,a,l,r,o,c),t===st&&(Q=st=null,Z=0),zi=e,ga=t,Ke=a,_o=l,Ro=n,bd=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Hp(On,function(){return Hd(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,n=k.p,k.p=2,r=P,P|=4;try{wp(t,e,a)}finally{P=r,k.p=n,z.T=i}}Ot=1,kd(),Dd(),Cd()}}function kd(){if(Ot===1){Ot=0;var t=ga,e=zi,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var i=k.p;k.p=2;var n=P;P|=4;try{cd(e,t);var l=es,r=mc(t.containerInfo),o=l.focusedElem,c=l.selectionRange;if(r!==o&&o&&o.ownerDocument&&gc(o.ownerDocument.documentElement,o)){if(c!==null&&Ar(o)){var h=c.start,x=c.end;if(x===void 0&&(x=h),"selectionStart"in o)o.selectionStart=h,o.selectionEnd=Math.min(x,o.value.length);else{var T=o.ownerDocument||document,b=T&&T.defaultView||window;if(b.getSelection){var y=b.getSelection(),C=o.textContent.length,N=Math.min(c.start,C),rt=c.end===void 0?N:Math.min(c.end,C);!y.extend&&N>rt&&(r=rt,rt=N,N=r);var p=pc(o,N),u=pc(o,rt);if(p&&u&&(y.rangeCount!==1||y.anchorNode!==p.node||y.anchorOffset!==p.offset||y.focusNode!==u.node||y.focusOffset!==u.offset)){var m=T.createRange();m.setStart(p.node,p.offset),y.removeAllRanges(),N>rt?(y.addRange(m),y.extend(u.node,u.offset)):(m.setEnd(u.node,u.offset),y.addRange(m))}}}}for(T=[],y=o;y=y.parentNode;)y.nodeType===1&&T.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<T.length;o++){var S=T[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Yl=!!ts,es=ts=null}finally{P=n,k.p=i,z.T=a}}t.current=e,Ot=2}}function Dd(){if(Ot===2){Ot=0;var t=ga,e=zi,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var i=k.p;k.p=2;var n=P;P|=4;try{nd(t,e.alternate,e)}finally{P=n,k.p=i,z.T=a}}Ot=3}}function Cd(){if(Ot===4||Ot===3){Ot=0,Pf();var t=ga,e=zi,a=Ke,i=bd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ot=5:(Ot=0,zi=ga=null,Od(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(pa=null),rr(a),e=e.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Hi,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=z.T,n=k.p,k.p=2,z.T=null;try{for(var l=t.onRecoverableError,r=0;r<i.length;r++){var o=i[r];l(o.value,{componentStack:o.stack})}}finally{z.T=e,k.p=n}}(Ke&3)!==0&&Dl(),De(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===Lo?mn++:(mn=0,Lo=t):mn=0,hn(0)}}function Od(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ji(e)))}function Dl(){return kd(),Dd(),Cd(),Hd()}function Hd(){if(Ot!==5)return!1;var t=ga,e=_o;_o=0;var a=rr(Ke),i=z.T,n=k.p;try{k.p=32>a?32:a,z.T=null,a=Ro,Ro=null;var l=ga,r=Ke;if(Ot=0,zi=ga=null,Ke=0,(P&6)!==0)throw Error(g(331));var o=P;if(P|=4,gd(l.current),dd(l,l.current,r,a),P=o,hn(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Hi,l)}catch{}return!0}finally{k.p=n,z.T=i,Od(t,e)}}function Bd(t,e,a){e=pe(a,e),e=yo(t.stateNode,e,2),t=oa(t,e,2),t!==null&&(Ui(t,2),De(t))}function at(t,e,a){if(t.tag===3)Bd(t,t,a);else for(;e!==null;){if(e.tag===3){Bd(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))){t=pe(a,t),a=Uu(2),i=oa(e,a,2),i!==null&&(Nu(a,i,e,t),Ui(i,2),De(i));break}}e=e.return}}function Qo(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new Ap;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(a)||(No=!0,n.add(a),t=Dp.bind(null,t,e,a),e.then(t,t))}function Dp(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,st===t&&(Z&a)===a&&(zt===4||zt===3&&(Z&62914560)===Z&&300>It()-Tl?(P&2)===0&&Ti(t,0):Go|=a,wi===Z&&(wi=0)),De(t)}function Ud(t,e){e===0&&(e=ks()),t=Ca(t,e),t!==null&&(Ui(t,e),De(t))}function Cp(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Ud(t,a)}function Op(t,e){var a=0;switch(t.tag){case 31:case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(g(314))}i!==null&&i.delete(e),Ud(t,a)}function Hp(t,e){return ar(t,e)}var Cl=null,Ei=null,Vo=!1,Ol=!1,$o=!1,ha=0;function De(t){t!==Ei&&t.next===null&&(Ei===null?Cl=Ei=t:Ei=Ei.next=t),Ol=!0,Vo||(Vo=!0,Up())}function hn(t,e){if(!$o&&Ol){$o=!0;do for(var a=!1,i=Cl;i!==null;){if(t!==0){var n=i.pendingLanes;if(n===0)var l=0;else{var r=i.suspendedLanes,o=i.pingedLanes;l=(1<<31-te(42|t)+1)-1,l&=n&~(r&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,_d(i,l))}else l=Z,l=Nn(i,i===st?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Bi(i,l)||(a=!0,_d(i,l));i=i.next}while(a);$o=!1}}function Bp(){Nd()}function Nd(){Ol=Vo=!1;var t=0;ha!==0&&Vp()&&(t=ha);for(var e=It(),a=null,i=Cl;i!==null;){var n=i.next,l=Gd(i,e);l===0?(i.next=null,a===null?Cl=n:a.next=n,n===null&&(Ei=a)):(a=i,(t!==0||(l&3)!==0)&&(Ol=!0)),i=n}Ot!==0&&Ot!==5||hn(t),ha!==0&&(ha=0)}function Gd(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var r=31-te(l),o=1<<r,c=n[r];c===-1?((o&a)===0||(o&i)!==0)&&(n[r]=o0(o,e)):c<=e&&(t.expiredLanes|=o),l&=~o}if(e=st,a=Z,a=Nn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(et===2||et===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&ir(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bi(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&ir(i),rr(a)){case 2:case 8:a=js;break;case 32:a=On;break;case 268435456:a=Ms;break;default:a=On}return i=qd.bind(null,t),a=ar(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&ir(i),t.callbackPriority=2,t.callbackNode=null,2}function qd(t,e){if(Ot!==0&&Ot!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Dl()&&t.callbackNode!==a)return null;var i=Z;return i=Nn(t,t===st?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(yd(t,i,e),Gd(t,It()),t.callbackNode!=null&&t.callbackNode===a?qd.bind(null,t):null)}function _d(t,e){if(Dl())return null;yd(t,e,!0)}function Up(){Zp(function(){(P&6)!==0?ar(Es,Bp):Nd()})}function Zo(){if(ha===0){var t=di;t===0&&(t=Hn,Hn<<=1,(Hn&261888)===0&&(Hn=256)),ha=t}return ha}function Rd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rn(""+t)}function Ld(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Np(t,e,a,i,n){if(e==="submit"&&a&&a.stateNode===n){var l=Rd((n[Qt]||null).action),r=i.submitter;r&&(e=(e=r[Qt]||null)?Rd(e.formAction):r.getAttribute("formAction"),e!==null&&(l=e,r=null));var o=new Qn("action","action",null,i,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ha!==0){var c=r?Ld(n,r):new FormData(n);po(a,{pending:!0,data:c,method:n.method,action:l},null,c)}}else typeof l=="function"&&(o.preventDefault(),c=r?Ld(n,r):new FormData(n),po(a,{pending:!0,data:c,method:n.method,action:l},l,c))},currentTarget:n}]})}}for(var Ko=0;Ko<kr.length;Ko++){var Jo=kr[Ko],Gp=Jo.toLowerCase(),qp=Jo[0].toUpperCase()+Jo.slice(1);ze(Gp,"on"+qp)}ze(vc,"onAnimationEnd"),ze(yc,"onAnimationIteration"),ze(xc,"onAnimationStart"),ze("dblclick","onDoubleClick"),ze("focusin","onFocus"),ze("focusout","onBlur"),ze(tp,"onTransitionRun"),ze(ep,"onTransitionStart"),ze(ap,"onTransitionCancel"),ze(Sc,"onTransitionEnd"),Fa("onMouseEnter",["mouseout","mouseover"]),Fa("onMouseLeave",["mouseout","mouseover"]),Fa("onPointerEnter",["pointerout","pointerover"]),Fa("onPointerLeave",["pointerout","pointerover"]),ja("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ja("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ja("onBeforeInput",["compositionend","keypress","textInput","paste"]),ja("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_p=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));function Yd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],n=i.event;i=i.listeners;t:{var l=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],c=o.instance,h=o.currentTarget;if(o=o.listener,c!==l&&n.isPropagationStopped())break t;l=o,n.currentTarget=h;try{l(n)}catch(x){Zn(x)}n.currentTarget=null,l=c}else for(r=0;r<i.length;r++){if(o=i[r],c=o.instance,h=o.currentTarget,o=o.listener,c!==l&&n.isPropagationStopped())break t;l=o,n.currentTarget=h;try{l(n)}catch(x){Zn(x)}n.currentTarget=null,l=c}}}}function V(t,e){var a=e[or];a===void 0&&(a=e[or]=new Set);var i=t+"__bubble";a.has(i)||(Xd(e,t,2,!1),a.add(i))}function Wo(t,e,a){var i=0;e&&(i|=4),Xd(a,t,i,e)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[Hl]){t[Hl]=!0,Ns.forEach(function(a){a!=="selectionchange"&&(_p.has(a)||Wo(a,!1,t),Wo(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hl]||(e[Hl]=!0,Wo("selectionchange",!1,e))}}function Xd(t,e,a,i){switch(yf(e)){case 2:var n=pg;break;case 8:n=gg;break;default:n=fs}a=n.bind(null,e,a,t),n=void 0,!hr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Io(t,e,a,i,n){var l=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=i.return;r!==null;){var c=r.tag;if((c===3||c===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=Ka(o),r===null)return;if(c=r.tag,c===5||c===6||c===26||c===27){i=l=r;continue t}o=o.parentNode}}i=i.return}Ks(function(){var h=l,x=gr(a),T=[];t:{var b=wc.get(t);if(b!==void 0){var y=Qn,C=t;switch(t){case"keypress":if(Yn(a)===0)break t;case"keydown":case"keyup":y=O0;break;case"focusin":C="focus",y=xr;break;case"focusout":C="blur",y=xr;break;case"beforeblur":case"afterblur":y=xr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=U0;break;case vc:case yc:case xc:y=z0;break;case Sc:y=G0;break;case"scroll":case"scrollend":y=v0;break;case"wheel":y=_0;break;case"copy":case"cut":case"paste":y=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ps;break;case"toggle":case"beforetoggle":y=L0}var N=(e&4)!==0,rt=!N&&(t==="scroll"||t==="scrollend"),p=N?b!==null?b+"Capture":null:b;N=[];for(var u=h,m;u!==null;){var S=u;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||p===null||(S=qi(u,p),S!=null&&N.push(vn(u,S,m))),rt)break;u=u.return}0<N.length&&(b=new y(b,C,null,a,x),T.push({event:b,listeners:N}))}}if((e&7)===0){t:{if(b=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",b&&a!==pr&&(C=a.relatedTarget||a.fromElement)&&(Ka(C)||C[Za]))break t;if((y||b)&&(b=x.window===x?x:(b=x.ownerDocument)?b.defaultView||b.parentWindow:window,y?(C=a.relatedTarget||a.toElement,y=h,C=C?Ka(C):null,C!==null&&(rt=M(C),N=C.tag,C!==rt||N!==5&&N!==27&&N!==6)&&(C=null)):(y=null,C=h),y!==C)){if(N=Fs,S="onMouseLeave",p="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(N=Ps,S="onPointerLeave",p="onPointerEnter",u="pointer"),rt=y==null?b:Gi(y),m=C==null?b:Gi(C),b=new N(S,u+"leave",y,a,x),b.target=rt,b.relatedTarget=m,S=null,Ka(x)===h&&(N=new N(p,u+"enter",C,a,x),N.target=m,N.relatedTarget=rt,S=N),rt=S,y&&C)e:{for(N=Rp,p=y,u=C,m=0,S=p;S;S=N(S))m++;S=0;for(var B=u;B;B=N(B))S++;for(;0<m-S;)p=N(p),m--;for(;0<S-m;)u=N(u),S--;for(;m--;){if(p===u||u!==null&&p===u.alternate){N=p;break e}p=N(p),u=N(u)}N=null}else N=null;y!==null&&Qd(T,b,y,N,!1),C!==null&&rt!==null&&Qd(T,rt,C,N,!0)}}t:{if(b=h?Gi(h):window,y=b.nodeName&&b.nodeName.toLowerCase(),y==="select"||y==="input"&&b.type==="file")var F=oc;else if(lc(b))if(sc)F=F0;else{F=J0;var H=K0}else y=b.nodeName,!y||y.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?h&&fr(h.elementType)&&(F=oc):F=W0;if(F&&(F=F(t,h))){rc(T,F,a,x);break t}H&&H(t,b,h),t==="focusout"&&h&&b.type==="number"&&h.memoizedProps.value!=null&&dr(b,"number",b.value)}switch(H=h?Gi(h):window,t){case"focusin":(lc(H)||H.contentEditable==="true")&&(ii=H,Er=h,$i=null);break;case"focusout":$i=Er=ii=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,hc(T,a,x);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":hc(T,a,x)}var Y;if(wr)t:{switch(t){case"compositionstart":var K="onCompositionStart";break t;case"compositionend":K="onCompositionEnd";break t;case"compositionupdate":K="onCompositionUpdate";break t}K=void 0}else ai?ic(t,a)&&(K="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(tc&&a.locale!=="ko"&&(ai||K!=="onCompositionStart"?K==="onCompositionEnd"&&ai&&(Y=Js()):(ta=x,br="value"in ta?ta.value:ta.textContent,ai=!0)),H=Bl(h,K),0<H.length&&(K=new Is(K,t,null,a,x),T.push({event:K,listeners:H}),Y?K.data=Y:(Y=nc(a),Y!==null&&(K.data=Y)))),(Y=X0?Q0(t,a):V0(t,a))&&(K=Bl(h,"onBeforeInput"),0<K.length&&(H=new Is("onBeforeInput","beforeinput",null,a,x),T.push({event:H,listeners:K}),H.data=Y)),Np(T,t,h,a,x)}Yd(T,e)})}function vn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Bl(t,e){for(var a=e+"Capture",i=[];t!==null;){var n=t,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=qi(t,a),n!=null&&i.unshift(vn(t,n,l)),n=qi(t,e),n!=null&&i.push(vn(t,n,l))),t.tag===3)return i;t=t.return}return[]}function Rp(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Qd(t,e,a,i,n){for(var l=e._reactName,r=[];a!==null&&a!==i;){var o=a,c=o.alternate,h=o.stateNode;if(o=o.tag,c!==null&&c===i)break;o!==5&&o!==26&&o!==27||h===null||(c=h,n?(h=qi(a,l),h!=null&&r.unshift(vn(a,h,c))):n||(h=qi(a,l),h!=null&&r.push(vn(a,h,c)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var Lp=/\r\n?/g,Yp=/\u0000|\uFFFD/g;function Vd(t){return(typeof t=="string"?t:""+t).replace(Lp,`
`).replace(Yp,"")}function $d(t,e){return e=Vd(e),Vd(t)===e}function lt(t,e,a,i,n,l){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Pa(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Pa(t,""+i);break;case"className":qn(t,"class",i);break;case"tabIndex":qn(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":qn(t,a,i);break;case"style":$s(t,i,l);break;case"data":if(e!=="object"){qn(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Rn(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(e!=="input"&&lt(t,e,"name",n.name,n,null),lt(t,e,"formEncType",n.formEncType,n,null),lt(t,e,"formMethod",n.formMethod,n,null),lt(t,e,"formTarget",n.formTarget,n,null)):(lt(t,e,"encType",n.encType,n,null),lt(t,e,"method",n.method,n,null),lt(t,e,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Rn(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=He);break;case"onScroll":i!=null&&V("scroll",t);break;case"onScrollEnd":i!=null&&V("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(g(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(g(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=Rn(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":V("beforetoggle",t),V("toggle",t),Gn(t,"popover",i);break;case"xlinkActuate":Oe(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Oe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Oe(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Oe(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Oe(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Oe(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Gn(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=h0.get(a)||a,Gn(t,a,i))}}function Po(t,e,a,i,n,l){switch(a){case"style":$s(t,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(g(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(g(60));t.innerHTML=a}}break;case"children":typeof i=="string"?Pa(t,i):(typeof i=="number"||typeof i=="bigint")&&Pa(t,""+i);break;case"onScroll":i!=null&&V("scroll",t);break;case"onScrollEnd":i!=null&&V("scrollend",t);break;case"onClick":i!=null&&(t.onclick=He);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),l=t[Qt]||null,l=l!=null?l[a]:null,typeof l=="function"&&t.removeEventListener(e,l,n),typeof i=="function")){typeof l!="function"&&l!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,n);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):Gn(t,a,i)}}}function Lt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",t),V("load",t);var i=!1,n=!1,l;for(l in a)if(a.hasOwnProperty(l)){var r=a[l];if(r!=null)switch(l){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,e));default:lt(t,e,l,r,a,null)}}n&&lt(t,e,"srcSet",a.srcSet,a,null),i&&lt(t,e,"src",a.src,a,null);return;case"input":V("invalid",t);var o=l=r=n=null,c=null,h=null;for(i in a)if(a.hasOwnProperty(i)){var x=a[i];if(x!=null)switch(i){case"name":n=x;break;case"type":r=x;break;case"checked":c=x;break;case"defaultChecked":h=x;break;case"value":l=x;break;case"defaultValue":o=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(g(137,e));break;default:lt(t,e,i,x,a,null)}}Ys(t,l,o,c,h,r,n,!1);return;case"select":V("invalid",t),i=r=l=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":l=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:lt(t,e,n,o,a,null)}e=l,a=r,t.multiple=!!i,e!=null?Ia(t,!!i,e,!1):a!=null&&Ia(t,!!i,a,!0);return;case"textarea":V("invalid",t),l=n=i=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":n=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(g(91));break;default:lt(t,e,r,o,a,null)}Qs(t,i,n,l);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(i=a[c],i!=null))switch(c){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:lt(t,e,c,i,a,null)}return;case"dialog":V("beforetoggle",t),V("toggle",t),V("cancel",t),V("close",t);break;case"iframe":case"object":V("load",t);break;case"video":case"audio":for(i=0;i<bn.length;i++)V(bn[i],t);break;case"image":V("error",t),V("load",t);break;case"details":V("toggle",t);break;case"embed":case"source":case"link":V("error",t),V("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(i=a[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,e));default:lt(t,e,h,i,a,null)}return;default:if(fr(e)){for(x in a)a.hasOwnProperty(x)&&(i=a[x],i!==void 0&&Po(t,e,x,i,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(i=a[o],i!=null&&lt(t,e,o,i,a,null))}function Xp(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,r=null,o=null,c=null,h=null,x=null;for(y in a){var T=a[y];if(a.hasOwnProperty(y)&&T!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":c=T;default:i.hasOwnProperty(y)||lt(t,e,y,null,i,T)}}for(var b in i){var y=i[b];if(T=a[b],i.hasOwnProperty(b)&&(y!=null||T!=null))switch(b){case"type":l=y;break;case"name":n=y;break;case"checked":h=y;break;case"defaultChecked":x=y;break;case"value":r=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,e));break;default:y!==T&&lt(t,e,b,y,i,T)}}ur(t,r,o,c,h,x,l,n);return;case"select":y=r=o=b=null;for(l in a)if(c=a[l],a.hasOwnProperty(l)&&c!=null)switch(l){case"value":break;case"multiple":y=c;default:i.hasOwnProperty(l)||lt(t,e,l,null,i,c)}for(n in i)if(l=i[n],c=a[n],i.hasOwnProperty(n)&&(l!=null||c!=null))switch(n){case"value":b=l;break;case"defaultValue":o=l;break;case"multiple":r=l;default:l!==c&&lt(t,e,n,l,i,c)}e=o,a=r,i=y,b!=null?Ia(t,!!a,b,!1):!!i!=!!a&&(e!=null?Ia(t,!!a,e,!0):Ia(t,!!a,a?[]:"",!1));return;case"textarea":y=b=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:lt(t,e,o,null,i,n)}for(r in i)if(n=i[r],l=a[r],i.hasOwnProperty(r)&&(n!=null||l!=null))switch(r){case"value":b=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==l&&lt(t,e,r,n,i,l)}Xs(t,b,y);return;case"option":for(var C in a)if(b=a[C],a.hasOwnProperty(C)&&b!=null&&!i.hasOwnProperty(C))switch(C){case"selected":t.selected=!1;break;default:lt(t,e,C,null,i,b)}for(c in i)if(b=i[c],y=a[c],i.hasOwnProperty(c)&&b!==y&&(b!=null||y!=null))switch(c){case"selected":t.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:lt(t,e,c,b,i,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in a)b=a[N],a.hasOwnProperty(N)&&b!=null&&!i.hasOwnProperty(N)&&lt(t,e,N,null,i,b);for(h in i)if(b=i[h],y=a[h],i.hasOwnProperty(h)&&b!==y&&(b!=null||y!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(g(137,e));break;default:lt(t,e,h,b,i,y)}return;default:if(fr(e)){for(var rt in a)b=a[rt],a.hasOwnProperty(rt)&&b!==void 0&&!i.hasOwnProperty(rt)&&Po(t,e,rt,void 0,i,b);for(x in i)b=i[x],y=a[x],!i.hasOwnProperty(x)||b===y||b===void 0&&y===void 0||Po(t,e,x,b,i,y);return}}for(var p in a)b=a[p],a.hasOwnProperty(p)&&b!=null&&!i.hasOwnProperty(p)&&lt(t,e,p,null,i,b);for(T in i)b=i[T],y=a[T],!i.hasOwnProperty(T)||b===y||b==null&&y==null||lt(t,e,T,b,i,y)}function Zd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qp(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],l=n.transferSize,r=n.initiatorType,o=n.duration;if(l&&o&&Zd(r)){for(r=0,o=n.responseEnd,i+=1;i<a.length;i++){var c=a[i],h=c.startTime;if(h>o)break;var x=c.transferSize,T=c.initiatorType;x&&Zd(T)&&(c=c.responseEnd,r+=x*(c<o?1:(o-h)/(c-h)))}if(--i,e+=8*(l+r)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ts=null,es=null;function Ul(t){return t.nodeType===9?t:t.ownerDocument}function Kd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function as(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var is=null;function Vp(){var t=window.event;return t&&t.type==="popstate"?t===is?!1:(is=t,!0):(is=null,!1)}var Wd=typeof setTimeout=="function"?setTimeout:void 0,$p=typeof clearTimeout=="function"?clearTimeout:void 0,Fd=typeof Promise=="function"?Promise:void 0,Zp=typeof queueMicrotask=="function"?queueMicrotask:typeof Fd<"u"?function(t){return Fd.resolve(null).then(t).catch(Kp)}:Wd;function Kp(t){setTimeout(function(){throw t})}function ba(t){return t==="head"}function Id(t,e){var a=e,i=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){t.removeChild(n),Di(e);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")yn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yn(a);for(var l=a.firstChild;l;){var r=l.nextSibling,o=l.nodeName;l[Ni]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=r}}else a==="body"&&yn(t.ownerDocument.body);a=n}while(a);Di(e)}function Pd(t,e){var a=t;t=0;do{var i=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=i}while(a)}function ns(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ns(a),sr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Jp(t,e,a,i){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ni])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=ve(t.nextSibling),t===null)break}return null}function Wp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ve(t.nextSibling),t===null))return null;return t}function tf(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ve(t.nextSibling),t===null))return null;return t}function ls(t){return t.data==="$?"||t.data==="$~"}function rs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Fp(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function ve(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var os=null;function ef(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return ve(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function af(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function nf(t,e,a){switch(e=Ul(a),t){case"html":if(t=e.documentElement,!t)throw Error(g(452));return t;case"head":if(t=e.head,!t)throw Error(g(453));return t;case"body":if(t=e.body,!t)throw Error(g(454));return t;default:throw Error(g(451))}}function yn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);sr(t)}var ye=new Map,lf=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Je=k.d;k.d={f:Ip,r:Pp,D:tg,C:eg,L:ag,m:ig,X:lg,S:ng,M:rg};function Ip(){var t=Je.f(),e=jl();return t||e}function Pp(t){var e=Ja(t);e!==null&&e.tag===5&&e.type==="form"?Su(e):Je.r(t)}var ji=typeof document>"u"?null:document;function rf(t,e,a){var i=ji;if(i&&typeof e=="string"&&e){var n=de(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),lf.has(n)||(lf.add(n),t={rel:t,crossOrigin:a,href:e},i.querySelector(n)===null&&(e=i.createElement("link"),Lt(e,"link",t),Bt(e),i.head.appendChild(e)))}}function tg(t){Je.D(t),rf("dns-prefetch",t,null)}function eg(t,e){Je.C(t,e),rf("preconnect",t,e)}function ag(t,e,a){Je.L(t,e,a);var i=ji;if(i&&t&&e){var n='link[rel="preload"][as="'+de(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+de(a.imageSizes)+'"]')):n+='[href="'+de(t)+'"]';var l=n;switch(e){case"style":l=Mi(t);break;case"script":l=ki(t)}ye.has(l)||(t=E({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ye.set(l,t),i.querySelector(n)!==null||e==="style"&&i.querySelector(xn(l))||e==="script"&&i.querySelector(Sn(l))||(e=i.createElement("link"),Lt(e,"link",t),Bt(e),i.head.appendChild(e)))}}function ig(t,e){Je.m(t,e);var a=ji;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+de(i)+'"][href="'+de(t)+'"]',l=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=ki(t)}if(!ye.has(l)&&(t=E({rel:"modulepreload",href:t},e),ye.set(l,t),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sn(l)))return}i=a.createElement("link"),Lt(i,"link",t),Bt(i),a.head.appendChild(i)}}}function ng(t,e,a){Je.S(t,e,a);var i=ji;if(i&&t){var n=Wa(i).hoistableStyles,l=Mi(t);e=e||"default";var r=n.get(l);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(xn(l)))o.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ye.get(l))&&ss(t,a);var c=r=i.createElement("link");Bt(c),Lt(c,"link",t),c._p=new Promise(function(h,x){c.onload=h,c.onerror=x}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Gl(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(l,r)}}}function lg(t,e){Je.X(t,e);var a=ji;if(a&&t){var i=Wa(a).hoistableScripts,n=ki(t),l=i.get(n);l||(l=a.querySelector(Sn(n)),l||(t=E({src:t,async:!0},e),(e=ye.get(n))&&cs(t,e),l=a.createElement("script"),Bt(l),Lt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function rg(t,e){Je.M(t,e);var a=ji;if(a&&t){var i=Wa(a).hoistableScripts,n=ki(t),l=i.get(n);l||(l=a.querySelector(Sn(n)),l||(t=E({src:t,async:!0,type:"module"},e),(e=ye.get(n))&&cs(t,e),l=a.createElement("script"),Bt(l),Lt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function of(t,e,a,i){var n=(n=Fe.current)?Nl(n):null;if(!n)throw Error(g(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Mi(a.href),a=Wa(n).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Mi(a.href);var l=Wa(n).hoistableStyles,r=l.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,r),(l=n.querySelector(xn(t)))&&!l._p&&(r.instance=l,r.state.loading=5),ye.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ye.set(t,a),l||og(n,t,a,r.state))),e&&i===null)throw Error(g(528,""));return r}if(e&&i!==null)throw Error(g(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ki(a),a=Wa(n).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,t))}}function Mi(t){return'href="'+de(t)+'"'}function xn(t){return'link[rel="stylesheet"]['+t+"]"}function sf(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function og(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Lt(e,"link",a),Bt(e),t.head.appendChild(e))}function ki(t){return'[src="'+de(t)+'"]'}function Sn(t){return"script[async]"+t}function cf(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+de(a.href)+'"]');if(i)return e.instance=i,Bt(i),i;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Bt(i),Lt(i,"style",n),Gl(i,a.precedence,t),e.instance=i;case"stylesheet":n=Mi(a.href);var l=t.querySelector(xn(n));if(l)return e.state.loading|=4,e.instance=l,Bt(l),l;i=sf(a),(n=ye.get(n))&&ss(i,n),l=(t.ownerDocument||t).createElement("link"),Bt(l);var r=l;return r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Lt(l,"link",i),e.state.loading|=4,Gl(l,a.precedence,t),e.instance=l;case"script":return l=ki(a.src),(n=t.querySelector(Sn(l)))?(e.instance=n,Bt(n),n):(i=a,(n=ye.get(l))&&(i=E({},a),cs(i,n)),t=t.ownerDocument||t,n=t.createElement("script"),Bt(n),Lt(n,"link",i),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(g(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,Gl(i,a.precedence,t));return e.instance}function Gl(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,l=n,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)l=o;else if(l!==n)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function ss(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function cs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ql=null;function uf(t,e,a){if(ql===null){var i=new Map,n=ql=new Map;n.set(a,i)}else n=ql,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var l=a[n];if(!(l[Ni]||l[Gt]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(l):i.set(r,[l])}}return i}function df(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function sg(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ff(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cg(t,e,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Mi(i.href),l=e.querySelector(xn(n));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=_l.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=l,Bt(l);return}l=e.ownerDocument||e,i=sf(i),(n=ye.get(n))&&ss(i,n),l=l.createElement("link"),Bt(l);var r=l;r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Lt(l,"link",i),a.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_l.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var us=0;function ug(t,e){return t.stylesheets&&t.count===0&&Ll(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var i=setTimeout(function(){if(t.stylesheets&&Ll(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+e);0<t.imgBytes&&us===0&&(us=62500*Qp());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ll(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>us?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function _l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ll(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Rl=null;function Ll(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Rl=new Map,e.forEach(dg,t),Rl=null,_l.call(t))}function dg(t,e){if(!(e.state.loading&4)){var a=Rl.get(t);if(a)var i=a.get(null);else{a=new Map,Rl.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var r=n[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),i=r)}i&&a.set(null,i)}n=e.instance,r=n.getAttribute("data-precedence"),l=a.get(r)||i,l===i&&a.set(null,n),a.set(r,n),this.count++,i=_l.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),l?l.parentNode.insertBefore(n,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var wn={$$typeof:bt,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function fg(t,e,a,i,n,l,r,o,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.hiddenUpdates=nr(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function pf(t,e,a,i,n,l,r,o,c,h,x,T){return t=new fg(t,e,a,r,c,h,x,T,o),e=1,l===!0&&(e|=24),l=ae(3,null,null,e),t.current=l,l.stateNode=t,e=Yr(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:i,isDehydrated:a,cache:e},$r(l),t}function gf(t){return t?(t=ri,t):ri}function mf(t,e,a,i,n,l){n=gf(n),i.context===null?i.context=n:i.pendingContext=n,i=ra(e),i.payload={element:a},l=l===void 0?null:l,l!==null&&(i.callback=l),a=oa(t,i,e),a!==null&&(Wt(a,t,e),Pi(a,t,e))}function hf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function ds(t,e){hf(t,e),(t=t.alternate)&&hf(t,e)}function bf(t){if(t.tag===13||t.tag===31){var e=Ca(t,67108864);e!==null&&Wt(e,t,67108864),ds(t,67108864)}}function vf(t){if(t.tag===13||t.tag===31){var e=oe();e=lr(e);var a=Ca(t,e);a!==null&&Wt(a,t,e),ds(t,e)}}var Yl=!0;function pg(t,e,a,i){var n=z.T;z.T=null;var l=k.p;try{k.p=2,fs(t,e,a,i)}finally{k.p=l,z.T=n}}function gg(t,e,a,i){var n=z.T;z.T=null;var l=k.p;try{k.p=8,fs(t,e,a,i)}finally{k.p=l,z.T=n}}function fs(t,e,a,i){if(Yl){var n=ps(i);if(n===null)Io(t,e,i,Xl,a),xf(t,i);else if(hg(n,t,e,a,i))i.stopPropagation();else if(xf(t,i),e&4&&-1<mg.indexOf(t)){for(;n!==null;){var l=Ja(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Ea(l.pendingLanes);if(r!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var c=1<<31-te(r);o.entanglements[1]|=c,r&=~c}De(l),(P&6)===0&&(Al=It()+500,hn(0))}}break;case 31:case 13:o=Ca(l,2),o!==null&&Wt(o,l,2),jl(),ds(l,2)}if(l=ps(i),l===null&&Io(t,e,i,Xl,a),l===n)break;n=l}n!==null&&i.stopPropagation()}else Io(t,e,i,null,a)}}function ps(t){return t=gr(t),gs(t)}var Xl=null;function gs(t){if(Xl=null,t=Ka(t),t!==null){var e=M(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=O(e),t!==null)return t;t=null}else if(a===31){if(t=it(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Xl=t,null}function yf(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(t0()){case Es:return 2;case js:return 8;case On:case e0:return 32;case Ms:return 268435456;default:return 32}default:return 32}}var ms=!1,va=null,ya=null,xa=null,zn=new Map,Tn=new Map,Sa=[],mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xf(t,e){switch(t){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":zn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(e.pointerId)}}function An(t,e,a,i,n,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:l,targetContainers:[n]},e!==null&&(e=Ja(e),e!==null&&bf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function hg(t,e,a,i,n){switch(e){case"focusin":return va=An(va,t,e,a,i,n),!0;case"dragenter":return ya=An(ya,t,e,a,i,n),!0;case"mouseover":return xa=An(xa,t,e,a,i,n),!0;case"pointerover":var l=n.pointerId;return zn.set(l,An(zn.get(l)||null,t,e,a,i,n)),!0;case"gotpointercapture":return l=n.pointerId,Tn.set(l,An(Tn.get(l)||null,t,e,a,i,n)),!0}return!1}function Sf(t){var e=Ka(t.target);if(e!==null){var a=M(e);if(a!==null){if(e=a.tag,e===13){if(e=O(a),e!==null){t.blockedOn=e,Bs(t.priority,function(){vf(a)});return}}else if(e===31){if(e=it(a),e!==null){t.blockedOn=e,Bs(t.priority,function(){vf(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=ps(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);pr=i,a.target.dispatchEvent(i),pr=null}else return e=Ja(a),e!==null&&bf(e),t.blockedOn=a,!1;e.shift()}return!0}function wf(t,e,a){Ql(t)&&a.delete(e)}function bg(){ms=!1,va!==null&&Ql(va)&&(va=null),ya!==null&&Ql(ya)&&(ya=null),xa!==null&&Ql(xa)&&(xa=null),zn.forEach(wf),Tn.forEach(wf)}function Vl(t,e){t.blockedOn===e&&(t.blockedOn=null,ms||(ms=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,bg)))}var $l=null;function zf(t){$l!==t&&($l=t,f.unstable_scheduleCallback(f.unstable_NormalPriority,function(){$l===t&&($l=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],n=t[e+2];if(typeof i!="function"){if(gs(i||a)===null)continue;break}var l=Ja(a);l!==null&&(t.splice(e,3),e-=3,po(l,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function Di(t){function e(c){return Vl(c,t)}va!==null&&Vl(va,t),ya!==null&&Vl(ya,t),xa!==null&&Vl(xa,t),zn.forEach(e),Tn.forEach(e);for(var a=0;a<Sa.length;a++){var i=Sa[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Sa.length&&(a=Sa[0],a.blockedOn===null);)Sf(a),a.blockedOn===null&&Sa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],l=a[i+1],r=n[Qt]||null;if(typeof l=="function")r||zf(a);else if(r){var o=null;if(l&&l.hasAttribute("formAction")){if(n=l,r=l[Qt]||null)o=r.formAction;else if(gs(n)!==null)continue}else o=r.action;typeof o=="function"?a[i+1]=o:(a.splice(i,3),i-=3),zf(a)}}}function Tf(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function hs(t){this._internalRoot=t}Zl.prototype.render=hs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(g(409));var a=e.current,i=oe();mf(a,i,t,e,null,null)},Zl.prototype.unmount=hs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mf(t.current,2,null,t,null,null),jl(),e[Za]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hs();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Sa.length&&e!==0&&e<Sa[a].priority;a++);Sa.splice(a,0,t),a===0&&Sf(t)}};var Af=A.version;if(Af!=="19.2.1")throw Error(g(527,Af,"19.2.1"));k.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(g(188)):(t=Object.keys(t).join(","),Error(g(268,t)));return t=X(e),t=t!==null?G(t):null,t=t===null?null:t.stateNode,t};var vg={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Hi=Kl.inject(vg),Pt=Kl}catch{}}return En.createRoot=function(t,e){if(!j(t))throw Error(g(299));var a=!1,i="",n=Cu,l=Ou,r=Hu;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pf(t,1,!1,null,null,a,i,null,n,l,r,Tf),t[Za]=e.current,Fo(t),new hs(e)},En.hydrateRoot=function(t,e,a){if(!j(t))throw Error(g(299));var i=!1,n="",l=Cu,r=Ou,o=Hu,c=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),e=pf(t,1,!0,e,a??null,i,n,c,l,r,o,Tf),e.context=gf(null),a=e.current,i=oe(),i=lr(i),n=ra(i),n.callback=null,oa(a,n,i),a=i,e.current.lanes=a,Ui(e,a),De(e),t[Za]=e.current,Fo(t),new Zl(e)},En.version="19.2.1",En}var Cf;function Mg(){if(Cf)return vs.exports;Cf=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(A){console.error(A)}}return f(),vs.exports=jg(),vs.exports}var kg=Mg();const Nt={blur:{primary:"40px",secondary:"24px",subtle:"12px",heavy:"60px"},saturation:{normal:"180%"},radius:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2xl":"24px",full:"9999px"},timing:{micro:"100ms",small:"200ms",medium:"300ms",large:"500ms"},easing:{standard:"cubic-bezier(0.4, 0, 0.2, 1)",emphasized:"cubic-bezier(0.0, 0, 0.2, 1)"}},ut={bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgTertiary:"#111111",bgCard:"rgba(255, 255, 255, 0.02)",textPrimary:"rgba(255, 255, 255, 0.87)",textSecondary:"rgba(255, 255, 255, 0.60)",textTertiary:"rgba(255, 255, 255, 0.38)",accent:"#2A9D8F",accentHover:"#3BB4A5",accentSubtle:"rgba(42, 157, 143, 0.15)",accentRgb:"42, 157, 143",blue:"#4361A5",blueRgb:"67, 97, 165",lightBlue:"#7BA7D9",cyan:"#3BB4B1",border:"rgba(255, 255, 255, 0.08)",borderHover:"rgba(255, 255, 255, 0.15)",gradient:"linear-gradient(135deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientHorizontal:"linear-gradient(90deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientSubtle:"linear-gradient(135deg, rgba(42, 157, 143, 0.15) 0%, rgba(67, 97, 165, 0.15) 100%)",glassBg:"rgba(255, 255, 255, 0.06)",glassBgHover:"rgba(255, 255, 255, 0.10)",glassBorder:"rgba(255, 255, 255, 0.10)",glassHighlight:"rgba(255, 255, 255, 0.15)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.32)",specularHighlight:"rgba(255, 255, 255, 0.25)"},dt={bgPrimary:"#ffffff",bgSecondary:"#f5f5f7",bgTertiary:"#e8e8ed",bgCard:"rgba(0, 0, 0, 0.02)",textPrimary:"rgba(0, 0, 0, 0.87)",textSecondary:"rgba(0, 0, 0, 0.60)",textTertiary:"rgba(0, 0, 0, 0.38)",accent:"#238076",accentHover:"#1a6b63",accentSubtle:"rgba(42, 157, 143, 0.12)",accentRgb:"35, 128, 118",blue:"#3a5491",blueRgb:"58, 84, 145",lightBlue:"#5a8cc7",cyan:"#2f9d9a",border:"rgba(0, 0, 0, 0.06)",borderHover:"rgba(0, 0, 0, 0.12)",gradient:"linear-gradient(135deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientHorizontal:"linear-gradient(90deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientSubtle:"linear-gradient(135deg, rgba(42, 157, 143, 0.1) 0%, rgba(67, 97, 165, 0.1) 100%)",glassBg:"rgba(255, 255, 255, 0.72)",glassBgHover:"rgba(255, 255, 255, 0.85)",glassBorder:"rgba(0, 0, 0, 0.08)",glassHighlight:"rgba(255, 255, 255, 0.9)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.08)",specularHighlight:"rgba(255, 255, 255, 0.8)"},Dg={fontWeight:{regular:400,medium:500,semibold:600,bold:700}},w={typography:Dg,breakpoints:{mobile:"640px",tablet:"1024px",desktop:"1280px"},zIndex:{sticky:100},maxWidth:{wide:"1200px",full:"1440px"}},Cg=Tg`
  /* ============================================
     LIQUID GLASS CSS VARIABLES
     iOS 26 Design System
     ============================================ */
  
  :root {
    /* ----------------------------------------
       Core Color Tokens (Dark Mode Default)
       ---------------------------------------- */
    --bg-primary: ${ut.bgPrimary};
    --bg-secondary: ${ut.bgSecondary};
    --bg-tertiary: ${ut.bgTertiary};
    --bg-card: ${ut.bgCard};
    
    --text-primary: ${ut.textPrimary};
    --text-secondary: ${ut.textSecondary};
    --text-tertiary: ${ut.textTertiary};
    
    --accent: ${ut.accent};
    --accent-hover: ${ut.accentHover};
    --accent-subtle: ${ut.accentSubtle};
    --accent-rgb: ${ut.accentRgb};
    
    --blue: ${ut.blue};
    --blue-rgb: ${ut.blueRgb};
    --cyan: ${ut.cyan};
    --light-blue: ${ut.lightBlue};
    
    --border: ${ut.border};
    --border-hover: ${ut.borderHover};
    
    --gradient: ${ut.gradient};
    --gradient-horizontal: ${ut.gradientHorizontal};
    --gradient-subtle: ${ut.gradientSubtle};
    
    /* ----------------------------------------
       Liquid Glass Properties (Dark Mode)
       ---------------------------------------- */
    --glass-blur: ${Nt.blur.primary};
    --glass-blur-secondary: ${Nt.blur.secondary};
    --glass-blur-subtle: ${Nt.blur.subtle};
    --glass-blur-heavy: ${Nt.blur.heavy};
    --glass-saturation: ${Nt.saturation.normal};
    
    --glass-bg: ${ut.glassBg};
    --glass-bg-hover: ${ut.glassBgHover};
    --glass-border: ${ut.glassBorder};
    --glass-highlight: ${ut.glassHighlight};
    --glass-shadow: ${ut.glassShadow};
    --specular-highlight: ${ut.specularHighlight};
    
    /* Navigation Glass */
    --nav-bg: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0.04) 50%,
      rgba(255, 255, 255, 0.06) 100%
    );
    --nav-border-gradient: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 40%,
      rgba(42, 157, 143, 0.2) 60%,
      rgba(67, 97, 165, 0.15) 100%
    );
    --nav-shadow: 
      0 0 0 1px rgba(255, 255, 255, 0.08),
      0 4px 24px -4px rgba(0, 0, 0, 0.4),
      0 8px 48px -8px rgba(42, 157, 143, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    --nav-highlight: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    
    /* Card Glass */
    --card-bg: rgba(255, 255, 255, 0.03);
    --card-bg-hover: rgba(255, 255, 255, 0.06);
    --card-border: rgba(255, 255, 255, 0.08);
    --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.24);
    --card-shadow-hover: 0 16px 48px rgba(0, 0, 0, 0.32);
    
    /* Animation Timing */
    --timing-micro: ${Nt.timing.micro};
    --timing-small: ${Nt.timing.small};
    --timing-medium: ${Nt.timing.medium};
    --timing-large: ${Nt.timing.large};
    --ease-standard: ${Nt.easing.standard};
    --ease-emphasized: ${Nt.easing.emphasized};
    
    /* Border Radius */
    --radius-xs: ${Nt.radius.xs};
    --radius-sm: ${Nt.radius.sm};
    --radius-md: ${Nt.radius.md};
    --radius-lg: ${Nt.radius.lg};
    --radius-xl: ${Nt.radius.xl};
    --radius-2xl: ${Nt.radius["2xl"]};
    --radius-full: ${Nt.radius.full};
  }
  
  /* ============================================
     LIGHT MODE OVERRIDES
     ============================================ */
  
  [data-theme="light"] {
    --bg-primary: ${dt.bgPrimary};
    --bg-secondary: ${dt.bgSecondary};
    --bg-tertiary: ${dt.bgTertiary};
    --bg-card: ${dt.bgCard};
    
    --text-primary: ${dt.textPrimary};
    --text-secondary: ${dt.textSecondary};
    --text-tertiary: ${dt.textTertiary};
    
    --accent: ${dt.accent};
    --accent-hover: ${dt.accentHover};
    --accent-subtle: ${dt.accentSubtle};
    --accent-rgb: ${dt.accentRgb};
    
    --blue: ${dt.blue};
    --blue-rgb: ${dt.blueRgb};
    --cyan: ${dt.cyan};
    --light-blue: ${dt.lightBlue};
    
    --border: ${dt.border};
    --border-hover: ${dt.borderHover};
    
    --gradient: ${dt.gradient};
    --gradient-horizontal: ${dt.gradientHorizontal};
    --gradient-subtle: ${dt.gradientSubtle};
    
    /* Liquid Glass - Light Mode */
    --glass-bg: ${dt.glassBg};
    --glass-bg-hover: ${dt.glassBgHover};
    --glass-border: ${dt.glassBorder};
    --glass-highlight: ${dt.glassHighlight};
    --glass-shadow: ${dt.glassShadow};
    --specular-highlight: ${dt.specularHighlight};
    
    /* Navigation - Light Mode */
    --nav-bg: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.82) 0%,
      rgba(255, 255, 255, 0.72) 50%,
      rgba(255, 255, 255, 0.78) 100%
    );
    --nav-border-gradient: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.06) 0%,
      rgba(0, 0, 0, 0.03) 40%,
      rgba(42, 157, 143, 0.12) 60%,
      rgba(67, 97, 165, 0.08) 100%
    );
    --nav-shadow: 
      0 0 0 1px rgba(0, 0, 0, 0.04),
      0 4px 24px -4px rgba(0, 0, 0, 0.08),
      0 8px 48px -8px rgba(42, 157, 143, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    --nav-highlight: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
    
    /* Card Glass - Light Mode */
    --card-bg: rgba(255, 255, 255, 0.65);
    --card-bg-hover: rgba(255, 255, 255, 0.8);
    --card-border: rgba(0, 0, 0, 0.06);
    --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    --card-shadow-hover: 0 16px 48px rgba(0, 0, 0, 0.1);
  }
  
  /* ============================================
     ACCESSIBILITY: REDUCE TRANSPARENCY
     ============================================ */
  
  @media (prefers-reduced-transparency: reduce) {
    :root {
      --glass-bg: rgba(20, 20, 20, 0.98);
      --glass-bg-hover: rgba(30, 30, 30, 0.98);
      --nav-bg: rgba(20, 20, 20, 0.98);
      --card-bg: rgba(25, 25, 25, 0.98);
      --card-bg-hover: rgba(35, 35, 35, 0.98);
      --glass-blur: 0px;
      --glass-blur-secondary: 0px;
      --glass-blur-subtle: 0px;
      --glass-blur-heavy: 0px;
    }
    
    [data-theme="light"] {
      --glass-bg: rgba(250, 250, 250, 0.98);
      --glass-bg-hover: rgba(245, 245, 245, 0.98);
      --nav-bg: rgba(250, 250, 250, 0.98);
      --card-bg: rgba(255, 255, 255, 0.98);
      --card-bg-hover: rgba(248, 248, 248, 0.98);
    }
  }
  
  /* ============================================
     BASE RESET & DEFAULTS
     ============================================ */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
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
    transition: background-color var(--timing-medium) var(--ease-standard),
                color var(--timing-medium) var(--ease-standard);
    position: relative;
    min-height: 100vh;
    overscroll-behavior-x: none;
  }

  ::selection {
    background: var(--accent);
    color: white;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--timing-small) var(--ease-standard);
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
  
  /* ============================================
     SCROLLBAR - Liquid Glass Style
     ============================================ */

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--glass-border);
    border-radius: var(--radius-full);
    transition: background var(--timing-small) var(--ease-standard);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--border-hover);
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--glass-border) transparent;
  }

  /* ============================================
     FOCUS STYLES - Liquid Glass
     ============================================ */

  :focus-visible {
    outline: none;
    box-shadow: 
      0 0 0 2px var(--bg-primary),
      0 0 0 4px var(--accent),
      0 0 12px rgba(var(--accent-rgb), 0.3);
    border-radius: var(--radius-sm);
  }

  /* Skip link for accessibility */
  .skip-link {
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    color: var(--text-primary);
    padding: 12px 24px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--glass-border);
    font-weight: 500;
    z-index: 10000;
    text-decoration: none;
    transition: top var(--timing-medium) var(--ease-standard);
    
    &:focus {
      top: 20px;
    }
  }

  /* ============================================
     SCROLL MARGIN FOR FIXED NAVIGATION
     ============================================ */

  section[id] {
    /* No offset on mobile/tablet - dock is at bottom */
    scroll-margin-top: 0;
    
    /* Add offset only on desktop where dock is at top */
    @media (min-width: 1024px) {
      scroll-margin-top: 100px;
    }
  }
  
  #home {
    scroll-margin-top: 0;
  }

  /* ============================================
     ACCESSIBILITY: REDUCE MOTION
     ============================================ */

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    
    /* Disable backdrop blur for performance */
    .liquid-glass,
    [class*="glass"] {
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
    }
  }

  /* ============================================
     LIQUID GLASS UTILITY CLASSES
     ============================================ */

  /* Primary Glass Surface */
  .liquid-glass {
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
    -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--card-shadow);
    transition: 
      background var(--timing-medium) var(--ease-standard),
      box-shadow var(--timing-medium) var(--ease-standard),
      transform var(--timing-small) var(--ease-standard);
    position: relative;
    overflow: hidden;
    
    /* Top specular highlight */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 10%;
      right: 10%;
      height: 1px;
      background: var(--specular-highlight);
      border-radius: 50%;
      pointer-events: none;
    }
  }
  
  .liquid-glass:hover {
    background: var(--glass-bg-hover);
    box-shadow: var(--card-shadow-hover);
    transform: translateY(-2px);
  }
  
  /* Secondary Glass Surface (lighter) */
  .liquid-glass-secondary {
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur-secondary)) saturate(150%);
    -webkit-backdrop-filter: blur(var(--glass-blur-secondary)) saturate(150%);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    transition: 
      background var(--timing-medium) var(--ease-standard),
      border-color var(--timing-small) var(--ease-standard);
  }
  
  /* Subtle Glass (minimal effect) */
  .liquid-glass-subtle {
    background: rgba(var(--accent-rgb), 0.08);
    backdrop-filter: blur(var(--glass-blur-subtle));
    -webkit-backdrop-filter: blur(var(--glass-blur-subtle));
    border: 1px solid rgba(var(--accent-rgb), 0.12);
    border-radius: var(--radius-md);
  }

  /* GPU Acceleration Helper */
  .gpu-accelerated {
    transform: translateZ(0);
    will-change: transform, opacity;
    backface-visibility: hidden;
  }
  
  /* ============================================
     LIQUID GLASS SHIMMER ANIMATION
     ============================================ */
  
  @keyframes liquidShimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }
  
  .liquid-shimmer {
    position: relative;
    overflow: hidden;
    
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.15) 50%,
        transparent 100%
      );
      background-size: 200% 100%;
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--timing-small) var(--ease-standard);
    }
    
    &:hover::after {
      opacity: 1;
      animation: liquidShimmer 1.5s ease infinite;
    }
  }
  
  /* ============================================
     GRADIENT TEXT UTILITY
     ============================================ */
  
  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  .gradient-text {
    background: var(--gradient);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .gradient-text-animated {
    background: var(--gradient);
    background-size: 200% 200%;
    animation: gradientFlow 4s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,Lf=U.createContext(void 0),zs="portfolio-theme-mode",Og=()=>{if(typeof window<"u"){const f=localStorage.getItem(zs),A=window.matchMedia("(prefers-color-scheme: dark)").matches;if(console.log("[ThemeContext] Saved:",f,"| System prefers dark:",A),f==="dark"||f==="light")return console.log("[ThemeContext] Using saved preference:",f),f;const D=A?"dark":"light";return console.log("[ThemeContext] Using system preference:",D),D}return"dark"},Hg=({children:f})=>{const[A,D]=U.useState(Og),[g,j]=U.useState(()=>{if(typeof window<"u"){const O=localStorage.getItem(zs);return O==="dark"||O==="light"}return!1});U.useEffect(()=>{document.documentElement.setAttribute("data-theme",A)},[A]),U.useEffect(()=>{g&&localStorage.setItem(zs,A)},[A,g]);const M=()=>{j(!0),D(O=>O==="dark"?"light":"dark")};return s.jsx(Lf.Provider,{value:{mode:A,toggleTheme:M,isDark:A==="dark"},children:f})},Bg=()=>{const f=U.useContext(Lf);if(!f)throw new Error("useTheme must be used within a ThemeProvider");return f},Yf=ot`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Ug=d.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${w.zIndex.sticky};
  max-width: calc(100vw - 48px);
  width: max-content;
  
  @media (max-width: ${w.breakpoints.tablet}) {
    top: auto;
    bottom: 24px;
    max-width: calc(100vw - 48px);
  }
  
  @media (max-width: 480px) {
    bottom: 16px;
    max-width: calc(100vw - 32px);
  }
`,Ng=d(v.nav)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  border-radius: var(--radius-2xl);
  max-width: 100%;
  
  /* Multi-layer Liquid Glass effect */
  background: var(--nav-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  
  /* Liquid border with gradient */
  border: 1px solid transparent;
  background-clip: padding-box;
  
  /* Outer glow */
  box-shadow: var(--nav-shadow);
  transition: background var(--timing-medium) var(--ease-standard), 
              box-shadow var(--timing-medium) var(--ease-standard);
  
  /* Accessibility: Respect reduced transparency */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
    
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
  
  @media (max-width: ${w.breakpoints.tablet}) {
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
    
    &::before {
      border-radius: 18px;
    }
  }
`,Gg=d(v.a)`
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
    animation: ${Yf} 1.5s ease infinite;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  @media (max-width: ${w.breakpoints.tablet}) {
    width: 38px;
    height: 38px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;
  }
`,qg=d.img`
  height: 28px;
  width: auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${w.breakpoints.tablet}) {
    height: 24px;
  }
  
  @media (max-width: 480px) {
    height: 20px;
  }
`,_g=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  
  @media (max-width: ${w.breakpoints.tablet}) {
    gap: 1px;
  }
  
  @media (max-width: 480px) {
    gap: 0;
  }
`,Rg=d(v.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  font-size: 13px;
  font-weight: ${w.typography.fontWeight.medium};
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 14px;
  transition: color 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  
  /* Prevent text cursor on nav items */
  & * {
    cursor: none !important;
  }
  
  ${({$isActive:f})=>f&&ct`
    color: var(--text-primary);
  `}
  
  &:hover {
    color: var(--text-primary);
    text-decoration: none;
  }
  
  @media (max-width: ${w.breakpoints.tablet}) {
    padding: 10px 12px;
    font-size: 12px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 8px;
    font-size: 11px;
    border-radius: 10px;
    flex-shrink: 1;
    min-width: 0;
  }
  
  @media (max-width: 360px) {
    padding: 8px 6px;
    font-size: 10px;
  }
`,Lg=d(v.div)`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  pointer-events: none;
  background: rgba(42, 157, 143, 0.08);
  
  @media (max-width: ${w.breakpoints.tablet}) {
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    border-radius: 8px;
  }
`,Yg=d(v.div)`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  pointer-events: none;
  background: linear-gradient(
    135deg,
    rgba(42, 157, 143, 0.28) 0%,
    rgba(59, 180, 177, 0.18) 50%,
    rgba(67, 97, 165, 0.22) 100%
  );
  box-shadow: 
    inset 0 0 0 1.5px rgba(42, 157, 143, 0.5),
    0 0 16px rgba(42, 157, 143, 0.15);
  
  @media (max-width: ${w.breakpoints.tablet}) {
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    border-radius: 8px;
  }
`,Xg=d.div`
  position: relative;
`,Qg=d(v.button)`
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
    animation: ${Yf} 1.5s ease infinite;
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
  
  @media (max-width: ${w.breakpoints.tablet}) {
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
`,Vg=ot`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`,$g=d(v.div)`
  position: absolute;
  inset: -4px;
  border-radius: 20px;
  border: 2px solid var(--accent);
  pointer-events: none;
  animation: ${Vg} 2s ease-in-out infinite;
  box-shadow: 0 0 20px rgba(42, 157, 143, 0.4),
              inset 0 0 10px rgba(42, 157, 143, 0.1);
  
  @media (max-width: ${w.breakpoints.tablet}) {
    inset: -3px;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    inset: -3px;
    border-radius: 13px;
  }
`,Zg=d.div`
  position: absolute;
  top: -6px;
  right: 18px;
  width: 12px;
  height: 12px;
  background: ${({$isDark:f})=>f?"rgba(20, 25, 35, 0.98)":"rgba(255, 255, 255, 0.98)"};
  border-left: 1px solid var(--accent);
  border-top: 1px solid var(--accent);
  transform: rotate(45deg);
  
  @media (max-width: ${w.breakpoints.tablet}) {
    top: auto;
    bottom: -6px;
    transform: rotate(225deg);
  }
`,Kg=d(v.div)`
  position: absolute;
  top: calc(100% + 12px);
  right: -8px;
  padding: 12px 16px;
  border-radius: 12px;
  background: ${({$isDark:f})=>f?"rgba(20, 25, 35, 0.98)":"rgba(255, 255, 255, 0.98)"};
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  border: 1px solid var(--accent);
  box-shadow: ${({$isDark:f})=>f?"0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(42, 157, 143, 0.3), 0 0 30px rgba(42, 157, 143, 0.2)":"0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(42, 157, 143, 0.3), 0 0 30px rgba(42, 157, 143, 0.1)"};
  white-space: nowrap;
  z-index: 100;
  
  @media (max-width: ${w.breakpoints.tablet}) {
    top: auto;
    bottom: calc(100% + 12px);
    right: -8px;
  }
`,Jg=d.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    width: 14px;
    height: 14px;
    color: var(--accent);
  }
`,Wg=d.span`
  display: block;
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,Of=[{label:"About",href:"#about"},{label:"Skills",href:"#technologyproficiency"},{label:"Experience",href:"#professionalexperience"},{label:"Projects",href:"#mostproudof"},{label:"Contact",href:"#contact"}],Ss="portfolio-theme-hint-seen",Fg=()=>{const[f,A]=U.useState(""),[D,g]=U.useState(!1),[j,M]=U.useState(null),{isDark:O,toggleTheme:it}=Bg();U.useEffect(()=>{if(!localStorage.getItem(Ss)){const E=setTimeout(()=>{g(!0)},1500);return()=>clearTimeout(E)}},[]),U.useEffect(()=>{if(D){const G=setTimeout(()=>{g(!1),localStorage.setItem(Ss,"true")},8e3);return()=>clearTimeout(G)}},[D]);const _=()=>{it(),D&&(g(!1),localStorage.setItem(Ss,"true"))};U.useEffect(()=>{const G=()=>{const E=Of.map(St=>St.href.replace("#",""));if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-100){A(E[E.length-1]);return}for(const St of[...E].reverse()){const $=document.getElementById(St);if($&&$.getBoundingClientRect().top<=150){A(St);return}}A("")};return G(),window.addEventListener("scroll",G,{passive:!0}),()=>window.removeEventListener("scroll",G)},[]);const X=(G,E)=>{G.preventDefault();const R=document.getElementById(E);R&&R.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsx(Ug,{children:s.jsxs(Ng,{"aria-label":"Main navigation",initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:[.25,.1,.25,1],delay:.2},children:[s.jsx(Gg,{href:"#home",onClick:G=>X(G,"home"),whileHover:{scale:1.05},whileTap:{scale:.95},children:s.jsxs("picture",{children:[s.jsx("source",{srcSet:"/images/logo-100.webp",type:"image/webp"}),s.jsx(qg,{src:"/images/logo-optimized.png",alt:"PN",width:28,height:28,loading:"eager",decoding:"async"})]})}),s.jsx(_g,{children:s.jsx(xg,{children:Of.map(G=>{const E=f===G.href.replace("#",""),R=j===G.label;return s.jsxs(Rg,{href:G.href,$isActive:E,$isHovered:R,"aria-current":E?"page":void 0,onClick:St=>X(St,G.href.replace("#","")),onMouseEnter:()=>M(G.label),onMouseLeave:()=>M(null),whileTap:{scale:.98},children:[s.jsx(za,{children:R&&!E&&s.jsx(Lg,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15}})}),E&&s.jsx(Yg,{layoutId:"nav-active-pill",transition:{type:"spring",stiffness:500,damping:35,mass:1}}),s.jsx("span",{style:{position:"relative",zIndex:1},children:G.label})]},G.label)})})}),s.jsxs(Xg,{children:[s.jsx(za,{children:D&&s.jsxs(s.Fragment,{children:[s.jsx($g,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3}}),s.jsxs(Kg,{$isDark:O,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3,delay:.1},children:[s.jsx(Zg,{$isDark:O}),s.jsxs(Jg,{children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"}),s.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),"Toggle Theme"]}),s.jsx(Wg,{children:"Click to switch between light & dark"})]})]})}),s.jsx(Qg,{onClick:_,whileHover:{scale:1.05},whileTap:{scale:.95},title:O?"Switch to light mode":"Switch to dark mode","aria-label":O?"Switch to light mode":"Switch to dark mode",role:"button",children:s.jsx(za,{mode:"wait",children:O?s.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.3},children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"sunGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),s.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),s.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),s.jsx("circle",{cx:"12",cy:"12",r:"5",stroke:"url(#sunGradient)"}),s.jsx("path",{stroke:"url(#sunGradient)",d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]},"sun"):s.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.3},children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"moonGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),s.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),s.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),s.jsx("path",{stroke:"url(#moonGradient)",d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})]},"moon")})})]})]})})},Ig="2.0.6",Xf=ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Pg=ot`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`,tm=d(v.footer)`
  padding: 48px 24px;
  padding-bottom: 100px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 56px 80px;
    padding-bottom: 56px;
  }
`,em=d.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 1px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${Xf} 3s ease infinite;
  opacity: 0.6;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 140px;
  }
`,am=d(v.div)`
  max-width: ${w.maxWidth.wide};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,im=d(v.p)`
  font-size: 13px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
  letter-spacing: 0.01em;
  line-height: 1.6;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 14px;
  }
`,nm=d(v.span)`
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
`,lm=d.span`
  color: #ef4444;
  font-size: 13px;
  display: inline-block;
  animation: ${Pg} 1.8s ease-in-out infinite;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 14px;
  }
`,rm=d.span`
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Xf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${w.typography.fontWeight.semibold};
`,om=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    margin-top: 24px;
  }
`,Hf=d.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,sm=d(v.span)`
  font-size: 11px;
  font-weight: ${w.typography.fontWeight.medium};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
  transition: all var(--timing-small) var(--ease-standard);
  
  /* Liquid Glass Effect */
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur-secondary));
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
  border: 1px solid var(--glass-border);
  
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 11px;
  }
`,cm=()=>s.jsxs(tm,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:[s.jsx(em,{}),s.jsxs(am,{children:[s.jsxs(im,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:["Designed & Built With",s.jsx(nm,{whileHover:{scale:1.2},transition:{type:"spring",stiffness:400,damping:15},children:s.jsx(lm,{children:"♥"})}),"By ",s.jsx(rm,{children:"Pranshu"})," • © 2025"]}),s.jsxs(om,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2,duration:.5},children:[s.jsx(Hf,{}),s.jsxs(sm,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:400,damping:20},children:["v",Ig]}),s.jsx(Hf,{})]})]})]}),um=ot`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`,dm=ot`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`,fm=d(v.div)`
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
`,pm=d(v.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(42, 157, 143, 0.08) 0%,
    rgba(67, 97, 165, 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
`,gm=d(v.div)`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,mm=d(v.div)`
  position: absolute;
  width: ${({$size:f})=>f}px;
  height: ${({$size:f})=>f}px;
  border-radius: 50%;
  background: ${({$color:f})=>f};
  filter: blur(1px);
`,hm=d(v.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,bm=d(v.div)`
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 180px;
    height: 180px;
  }
`,vm=d(v.div)`
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
`,ym=d(v.div)`
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
`,ws=d(v.div)`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px solid rgba(42, 157, 143, 0.3);
  animation: ${dm} 2s ease-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`,xm=d(v.img)`
  width: 90px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 25px rgba(42, 157, 143, 0.5));
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 110px;
  }
`,Sm=d(v.div)`
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
    animation: ${um} 2s ease-in-out infinite;
  }
`,wm={initial:{opacity:1},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2,ease:"easeOut"}}},zm={initial:{opacity:0,scale:1.5},animate:{opacity:1,scale:1,transition:{duration:1.5}},exit:{opacity:0,scale:.95,transition:{duration:.2}}},Tm={initial:{},animate:{},exit:{scale:.9,opacity:0,transition:{duration:.2,ease:"easeOut"}}},Am={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},Em={initial:{opacity:0,scale:0,rotate:-180},animate:{opacity:1,scale:1,rotate:0,transition:{type:"spring",stiffness:100,damping:15,delay:.2}}},jm={initial:{opacity:0,scale:.3,rotateY:-90,filter:"blur(10px)"},animate:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:12,delay:.4}}},Mm=({onComplete:f})=>{const[A,D]=U.useState("animate"),g=Array.from({length:20},(j,M)=>({id:M,x:Math.random()*100,y:Math.random()*100,size:Math.random()*4+2,color:M%3===0?"rgba(42, 157, 143, 0.4)":M%3===1?"rgba(59, 180, 177, 0.3)":"rgba(67, 97, 165, 0.3)",duration:Math.random()*3+2,delay:Math.random()*2}));return U.useEffect(()=>{const j=setTimeout(()=>{D("exit")},2200);return()=>clearTimeout(j)},[]),U.useEffect(()=>{A==="exit"&&f()},[A,f]),s.jsxs(fm,{variants:wm,initial:"initial",animate:A,children:[s.jsx(pm,{variants:zm,initial:"initial",animate:A}),s.jsx(gm,{initial:{opacity:1},animate:{opacity:A==="exit"?0:1},transition:{duration:.2},children:g.map(j=>s.jsx(mm,{$size:j.size,$color:j.color,style:{left:`${j.x}%`,top:`${j.y}%`},initial:{opacity:0,scale:0},animate:{opacity:[0,.8,0],scale:[0,1,0],y:[0,-100]},transition:{duration:j.duration,delay:j.delay,repeat:1/0,repeatDelay:Math.random()*2}},j.id))}),s.jsx(hm,{variants:Tm,initial:"initial",animate:A,children:s.jsxs(bm,{children:[s.jsx(vm,{variants:Am,initial:"initial",animate:"animate"}),s.jsx(ws,{}),s.jsx(ws,{}),s.jsx(ws,{}),s.jsx(ym,{variants:Em,initial:"initial",animate:"animate"}),s.jsxs("picture",{children:[s.jsx("source",{srcSet:"/images/logo-optimized.webp",type:"image/webp"}),s.jsx(xm,{src:"/images/logo-optimized.png",alt:"PN",width:80,height:80,loading:"eager",decoding:"async",variants:jm,initial:"initial",animate:"animate"})]}),s.jsx(Sm,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:.5}})]})})]})},km=d.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.4;
  
  @media (max-width: ${w.breakpoints.tablet}) {
    display: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Bf=[{r:42,g:157,b:143},{r:59,g:180,b:177},{r:67,g:97,b:165},{r:123,g:167,b:217}],Dm=()=>{const f=U.useRef(null),A=U.useRef([]),D=U.useRef(0),g=U.useRef({x:window.innerWidth/2,y:window.innerHeight/2});return U.useEffect(()=>{const j=f.current;if(!j)return;const M=j.getContext("2d");if(!M)return;const O=()=>{const E=window.devicePixelRatio||1;j.width=window.innerWidth*E,j.height=window.innerHeight*E,j.style.width=`${window.innerWidth}px`,j.style.height=`${window.innerHeight}px`,M.scale(E,E)};O(),window.addEventListener("resize",O);const it=4;A.current=[];for(let E=0;E<it;E++)A.current.push({x:window.innerWidth/2,y:window.innerHeight/2,size:60+E*20,color:Bf[E%Bf.length],speed:.1-E*.015,offset:E*.4});let _=0;const X=()=>{_+=.016,M.clearRect(0,0,j.width,j.height);const E=A.current,R=g.current;for(let St=E.length-1;St>=0;St--){const $=E[St],jt=Math.sin(_*1.5+$.offset*4)*15,ft=Math.cos(_*1.5+$.offset*4)*15;$.x+=(R.x+jt-$.x)*$.speed,$.y+=(R.y+ft-$.y)*$.speed;const W=$.size+Math.sin(_*1.2+$.offset*2)*8,yt=M.createRadialGradient($.x,$.y,0,$.x,$.y,W),{r:bt,g:Tt,b:Ft}=$.color;yt.addColorStop(0,`rgba(${bt}, ${Tt}, ${Ft}, 0.25)`),yt.addColorStop(.4,`rgba(${bt}, ${Tt}, ${Ft}, 0.1)`),yt.addColorStop(.7,`rgba(${bt}, ${Tt}, ${Ft}, 0.03)`),yt.addColorStop(1,`rgba(${bt}, ${Tt}, ${Ft}, 0)`),M.beginPath(),M.arc($.x,$.y,W,0,Math.PI*2),M.fillStyle=yt,M.fill()}D.current=requestAnimationFrame(X)},G=E=>{g.current={x:E.clientX,y:E.clientY}};return window.addEventListener("mousemove",G),D.current=requestAnimationFrame(X),()=>{window.removeEventListener("resize",O),window.removeEventListener("mousemove",G),cancelAnimationFrame(D.current)}},[]),s.jsx(km,{ref:f})},Cm=d(v.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2A9D8F, #3BB4B1);
  box-shadow: 
    0 0 12px rgba(42, 157, 143, 0.6), 
    0 0 4px rgba(42, 157, 143, 0.8);
  pointer-events: none;
  z-index: 99999;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  @media (hover: none) {
    display: none;
  }
`,Om=()=>{const[f,A]=U.useState(!1),[D,g]=U.useState(!1),j=Ef(0),M=Ef(0),O=U.useCallback(G=>{j.set(G.clientX),M.set(G.clientY),f||A(!0)},[j,M,f]),it=U.useCallback(()=>{A(!0)},[]),_=U.useCallback(()=>{A(!1)},[]),X=U.useCallback(G=>{const E=G.target;if(E.closest("nav")!==null){g(!1);return}if(E.tagName==="A"||E.closest("a")!==null){g(!0);return}const $=E.tagName==="INPUT"||E.tagName==="TEXTAREA",jt=E.contentEditable==="true",W=["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","PRE","CODE","EM","STRONG","B","I","U"].includes(E.tagName),yt=Array.from(E.childNodes).some(Tt=>Tt.nodeType===Node.TEXT_NODE&&Tt.textContent?.trim());g($||jt||W&&yt)},[]);return U.useEffect(()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0)return;document.addEventListener("mousemove",O),document.addEventListener("mouseenter",it),document.addEventListener("mouseleave",_),document.addEventListener("mouseover",X);const E=document.createElement("style");return E.id="custom-cursor-styles",E.textContent=`
      *, *::before, *::after {
        cursor: none !important;
      }
      
      /* Show text cursor on editable elements */
      input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]),
      textarea,
      [contenteditable="true"] {
        cursor: text !important;
      }
      
      /* Show text cursor on text elements */
      p, span, h1, h2, h3, h4, h5, h6, li, td, th, label, blockquote, pre, code, em, strong, b, i, u {
        cursor: text !important;
      }
      
      /* Show pointer cursor on links */
      a, a * {
        cursor: pointer !important;
      }
      
      /* Navigation should use custom cursor */
      nav, nav *, nav a, nav a * {
        cursor: none !important;
      }
    `,document.head.appendChild(E),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseenter",it),document.removeEventListener("mouseleave",_),document.removeEventListener("mouseover",X);const R=document.getElementById("custom-cursor-styles");R&&R.remove()}},[O,it,_,X]),typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0)?null:s.jsx(Cm,{style:{x:j,y:M,translateX:"-50%",translateY:"-50%"},animate:{opacity:f&&!D?1:0,scale:f&&!D?1:0},transition:{duration:.15}})},Hm=ot`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Bm=ot`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(3deg);
  }
`,Um=ot`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`,Qf=ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Nm=d.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 24px 40px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  overflow: hidden;
  position: relative;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px 60px;
  }
  
  @media (min-width: ${w.breakpoints.desktop}) {
    padding: 100px 48px 60px;
  }
`,Gm=d(v.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120vw;
  height: 120vh;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse at 60% 40%,
    rgba(var(--accent-rgb), 0.08) 0%,
    rgba(var(--blue-rgb), 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 0;
  will-change: transform;
`,qm=d.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,_m=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    grid-template-columns: 1fr 400px;
    gap: 64px;
  }
  
  @media (min-width: ${w.breakpoints.desktop}) {
    grid-template-columns: 1fr 480px;
    gap: 80px;
  }
`,Rm=d.div`
  perspective: 1000px;
`,Lm=d(v.div)`
  display: flex;
  justify-content: center;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`,Ym=d(v.div)`
  position: relative;
  width: 280px;
  height: 280px;
  
  @media (min-width: ${w.breakpoints.mobile}) {
    width: 340px;
    height: 340px;
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 380px;
    height: 380px;
  }
  
  @media (min-width: ${w.breakpoints.desktop}) {
    width: 440px;
    height: 440px;
  }
`,Xm=d(v.div)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  will-change: transform;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius-xl);
    box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
`,Qm=d.picture`
  width: 100%;
  height: 100%;
  display: block;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(100%);
    transition: filter 0.8s var(--ease-standard);
    will-change: transform, filter;
  }
  
  &:hover img {
    filter: grayscale(0%);
  }
`,Vm=d.div`
  position: absolute;
  inset: -4px;
  border-radius: calc(var(--radius-xl) + 4px);
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
    animation: ${Hm} 6s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    transition: background-color var(--timing-medium) var(--ease-standard);
  }
`,Jl=d(v.div)`
  position: absolute;
  border-radius: var(--radius-lg);
  z-index: -2;
  animation: ${Bm} 5s ease-in-out infinite;
  will-change: transform;
  
  ${({$position:f})=>{switch(f){case"top":return`
          top: -25px;
          right: 15px;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.35), transparent);
          animation-delay: 0s;
        `;case"bottom":return`
          bottom: -20px;
          left: 25px;
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, rgba(var(--blue-rgb), 0.3), transparent);
          animation-delay: 1.5s;
          border-radius: var(--radius-md);
        `;case"left":return`
          top: 35%;
          left: -30px;
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, rgba(var(--cyan-rgb), 0.25), transparent);
          animation-delay: 0.8s;
          border-radius: var(--radius-sm);
        `;case"right":return`
          bottom: 25%;
          right: -25px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(var(--light-blue-rgb), 0.3), transparent);
          animation-delay: 2.2s;
          border-radius: var(--radius-full);
        `}}}
  
  @media (max-width: ${w.breakpoints.tablet}) {
    display: none;
  }
`,$m=d(v.div)`
  position: absolute;
  inset: -60px;
  background: radial-gradient(
    ellipse at center,
    rgba(var(--accent-rgb), 0.2) 0%,
    rgba(var(--blue-rgb), 0.12) 35%,
    transparent 65%
  );
  z-index: -3;
  animation: ${Um} 3s ease-in-out infinite;
  filter: blur(30px);
  will-change: transform, opacity;
`,Zm=d(v.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;
`,Km=d(v.span)`
  width: 40px;
  height: 2px;
  background: var(--gradient-horizontal);
  border-radius: var(--radius-full);
  transform-origin: left;
`,Jm=d(v.span)`
  font-size: 13px;
  font-weight: ${w.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Qf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,Wm=d(v.div)`
  overflow: hidden;
  margin-bottom: 24px;
`,Fm=d(v.h1)`
  font-size: clamp(52px, 9vw, 96px);
  font-weight: ${w.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.04em;
  line-height: 0.92;
  transition: color var(--timing-medium) var(--ease-standard);
  will-change: transform;
`,Im=d(v.span)`
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
    border-radius: var(--radius-sm);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s var(--ease-standard);
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`,Pm=d(v.p)`
  font-size: clamp(17px, 2.2vw, 22px);
  font-weight: ${w.typography.fontWeight.regular};
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 20px;
  transition: color var(--timing-medium) var(--ease-standard);
`,th=d(v.p)`
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--text-tertiary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color var(--timing-medium) var(--ease-standard);
  max-width: 680px;
`,eh=d(v.div)`
  display: flex;
  gap: 14px;
  flex-wrap: nowrap;
  margin-bottom: 56px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`,ah=d(v.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--text-primary);
  color: var(--bg-primary);
  font-size: 15px;
  font-weight: ${w.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: var(--radius-full);
  position: relative;
  overflow: hidden;
  will-change: transform;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background-color var(--timing-small) var(--ease-standard);
  
  @media (max-width: 480px) {
    padding: 14px 20px;
    font-size: 14px;
    gap: 8px;
  }
  
  /* Shimmer effect */
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
    transition: transform 0.6s var(--ease-standard);
  }
  
  &:hover {
    text-decoration: none;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  span, svg {
    position: relative;
    z-index: 1;
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform var(--timing-small) var(--ease-standard);
    flex-shrink: 0;
    
    @media (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`,ih=d(v.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--gradient);
  background-size: 200% 200%;
  color: white;
  font-size: 15px;
  font-weight: ${w.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: var(--radius-full);
  position: relative;
  overflow: hidden;
  will-change: transform;
  white-space: nowrap;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(var(--accent-rgb), 0.3);
  
  @media (max-width: 480px) {
    padding: 14px 20px;
    font-size: 14px;
  }
  
  /* Shimmer effect */
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
    animation: ${Qf} 3s ease infinite;
    box-shadow: 0 8px 32px rgba(var(--accent-rgb), 0.4);
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  span {
    position: relative;
    z-index: 1;
  }
  
  svg {
    width: 18px;
    height: 18px;
    transition: transform var(--timing-small) var(--ease-standard);
    position: relative;
    z-index: 1;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`,nh=d(v.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 40px 0;
  margin-top: 8px;
  border-top: 1px solid var(--border);
  transition: border-color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.mobile}) {
    gap: 32px;
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    gap: 48px;
  }
`,lh=d(v.div)`
  text-align: center;
  
  @media (min-width: ${w.breakpoints.mobile}) {
    text-align: left;
  }
`,rh=d(v.span)`
  display: block;
  font-size: clamp(26px, 5.5vw, 44px);
  font-weight: ${w.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 10px;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.mobile}) {
    font-size: clamp(30px, 4.5vw, 44px);
    margin-bottom: 12px;
  }
`,oh=d.span`
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-transform: uppercase;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.mobile}) {
    font-size: 12px;
  }
`,sh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},Wl={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,mass:1}}},ch={hidden:{opacity:0,y:80,rotateX:-20},visible:{opacity:1,y:0,rotateX:0,transition:{type:"spring",stiffness:80,damping:20,mass:1.2}}},uh={hidden:{opacity:0,scale:.85,rotateY:-15,filter:"blur(15px)"},visible:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:60,damping:20,mass:1.5,delay:.3}}},dh={hidden:{scaleX:0},visible:{scaleX:1,transition:{type:"spring",stiffness:100,damping:20,delay:.1}}},fh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.6}}},ph={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:150,damping:20}}},gh=({data:f})=>{const A=U.useRef(null),{scrollYProgress:D}=Sg({target:A,offset:["start start","end start"]}),g=bs(D,[0,1],["0%","30%"]),j=bs(D,[0,.5],[1,.9]),M=bs(D,[0,.5],[1,.6]),O=jf(g,{stiffness:100,damping:30}),it=jf(j,{stiffness:100,damping:30}),_=[{value:"10+",label:"Years"},{value:"65+",label:"Engineers Steered"},{value:"$2M+",label:"Savings"},{value:"15+",label:"Products"}];return s.jsxs(Nm,{id:"home",ref:A,children:[s.jsx(Gm,{style:{y:O}}),s.jsx(qm,{children:s.jsxs(_m,{children:[s.jsx(Rm,{children:s.jsxs(v.div,{variants:sh,initial:"hidden",animate:"visible",children:[s.jsxs(Zm,{variants:Wl,children:[s.jsx(Km,{variants:dh}),s.jsx(Jm,{children:"Engineering Leader & Architect"})]}),s.jsx(Wm,{children:s.jsxs(Fm,{variants:ch,children:[s.jsx(Im,{children:f.name.split(" ")[0]}),s.jsx("br",{}),f.name.split(" ").slice(1).join(" ")]})}),s.jsx(Pm,{variants:Wl,children:f.designation}),s.jsx(th,{variants:Wl,children:f.headline}),s.jsxs(eh,{variants:Wl,children:[s.jsxs(ah,{href:"#contact",onClick:X=>{X.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[s.jsx("span",{children:"Get in Touch"}),s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),s.jsxs(ih,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[s.jsx("span",{children:"Download Resume"}),s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),s.jsx(nh,{variants:fh,initial:"hidden",animate:"visible",children:_.map((X,G)=>s.jsxs(lh,{variants:ph,children:[s.jsx(rh,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:100,damping:15,delay:.7+G*.1},children:X.value}),s.jsx(oh,{children:X.label})]},G))})]})}),s.jsx(Lm,{variants:uh,initial:"hidden",animate:"visible",style:{scale:it,opacity:M},children:s.jsxs(Ym,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:200,damping:20},children:[s.jsx($m,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:.5}}),s.jsx(Jl,{$position:"top",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.6}}),s.jsx(Jl,{$position:"bottom",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.6}}),s.jsx(Jl,{$position:"left",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.9,duration:.6}}),s.jsx(Jl,{$position:"right",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:1.1,duration:.6}}),s.jsx(Vm,{}),s.jsx(Xm,{whileHover:{scale:1.03},transition:{type:"spring",stiffness:300,damping:25},children:s.jsxs(Qm,{children:[s.jsx("source",{srcSet:"/images/profile.webp",type:"image/webp"}),s.jsx("img",{src:"/images/IMG_0832.PNG",alt:`${f.name} - Engineering Leader & Architect`,width:560,height:560,loading:"eager",decoding:"async",fetchPriority:"high"})]})})]})})]})})]})};d.div`
  width: 100%;
  max-width: ${({$wide:f})=>f?w.maxWidth.full:w.maxWidth.wide};
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${w.breakpoints.mobile}) {
    padding: 0 32px;
  }

  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 0 48px;
  }
`;const Vf=ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,mh=ot`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,hh=d(v.div)`
  margin-bottom: 64px;
  position: relative;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    margin-bottom: 88px;
  }
`,bh=d.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    gap: 32px;
  }
`,vh=d(v.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-lg);
  flex-shrink: 0;
  overflow: hidden;
  
  /* Liquid Glass Effect */
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur-secondary)) saturate(150%);
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary)) saturate(150%);
  border: 1px solid var(--glass-border);
  box-shadow: var(--card-shadow);
  
  
  /* Shimmer effect on hover */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.15) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity var(--timing-small) var(--ease-standard);
  }
  
  &:hover::after {
    opacity: 1;
    animation: ${mh} 1.5s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 52px;
    height: 52px;
    border-radius: var(--radius-xl);
  }
`,yh=d.span`
  font-size: 14px;
  font-weight: ${w.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Vf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-variant-numeric: tabular-nums;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 16px;
  }
`,xh=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Sh=d(v.span)`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-tertiary);
  font-weight: ${w.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 12px;
    letter-spacing: 0.18em;
  }
`,wh=d(v.h2)`
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: ${w.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.1;
  transition: color var(--timing-medium) var(--ease-standard);
  margin: 0;
`,zh=d(v.div)`
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 2px;
  width: 60px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${Vf} 3s ease infinite;
  border-radius: var(--radius-full);
  transform-origin: left;
  
  /* Glass glow effect */
  box-shadow: 0 0 12px -2px rgba(var(--accent-rgb), 0.4);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 80px;
    bottom: -24px;
  }
`,Th={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},Ah={hidden:{opacity:0,scale:.8,filter:"blur(8px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:200,damping:20}}},Eh={hidden:{opacity:0,x:-10,filter:"blur(4px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:150,damping:20}}},jh={hidden:{opacity:0,y:20,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},Mh={hidden:{scaleX:0,opacity:0},visible:{scaleX:1,opacity:1,transition:{duration:.6,ease:[.25,.1,.25,1],delay:.3}}},kh={About:"Who I Am",Skills:"Technical Expertise",Experience:"Career Journey",Projects:"Featured Work",Certifications:"Credentials",Testimonials:"What Others Say",Education:"Academic Background",Contact:"Get In Touch"},Ta=({number:f,title:A,inView:D=!0})=>{const g=kh[A]||"Section";return s.jsxs(hh,{variants:Th,initial:"hidden",animate:D?"visible":"hidden",children:[s.jsxs(bh,{children:[s.jsx(vh,{variants:Ah,whileHover:{scale:1.05},whileTap:{scale:.98},children:s.jsx(yh,{children:f})}),s.jsxs(xh,{children:[s.jsx(Sh,{variants:Eh,children:g}),s.jsx(wh,{variants:jh,children:A})]})]}),s.jsx(zh,{variants:Mh})]})},Dh=ot`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,$f=ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Ch=ot`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
`,Ci=ct`
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border: 1px solid var(--glass-border);
  position: relative;
  overflow: hidden;
  
  /* Respect reduced transparency */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,Zf=ct`
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.15) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--timing-small) var(--ease-standard);
  }
  
  &:hover::after {
    opacity: 1;
    animation: ${Dh} 1.5s ease infinite;
  }
`;d(v.div)`
  ${Ci}
  
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--card-shadow);
  transition: 
    background var(--timing-medium) var(--ease-standard),
    box-shadow var(--timing-medium) var(--ease-standard),
    transform var(--timing-small) var(--ease-standard),
    border-color var(--timing-small) var(--ease-standard);
  
  ${({$elevated:f})=>f&&ct`
    box-shadow: var(--card-shadow-hover);
  `}
  
  ${({$interactive:f})=>f&&ct`
    ${Zf}
    cursor: pointer;
    
    &:hover {
      background: var(--glass-bg-hover);
      box-shadow: var(--card-shadow-hover);
      transform: translateY(-4px);
      border-color: var(--border-hover);
    }
    
    &:active {
      transform: translateY(-2px) scale(0.99);
    }
  `}
  
  ${({$accent:f})=>f&&ct`
    border-color: rgba(var(--accent-rgb), 0.2);
    
    &::before {
      background: linear-gradient(90deg, transparent, rgba(var(--accent-rgb), 0.3), transparent);
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--gradient);
      opacity: 0;
      transition: opacity var(--timing-small) var(--ease-standard);
    }
    
    &:hover::after {
      opacity: 1;
    }
  `}
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 32px;
    border-radius: var(--radius-xl);
  }
`;d(v.div)`
  ${Ci}
  
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  box-shadow: var(--card-shadow);
  
  ${({$subtle:f})=>f&&ct`
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur-secondary));
    -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
    box-shadow: none;
    border-color: var(--card-border);
  `}
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 48px 40px;
    border-radius: var(--radius-2xl);
  }
`;d(v.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--radius-full);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 
    background var(--timing-small) var(--ease-standard),
    transform var(--timing-micro) var(--ease-standard),
    box-shadow var(--timing-small) var(--ease-standard);
  
  /* Size variants */
  ${({$size:f="md"})=>{switch(f){case"sm":return ct`
          padding: 10px 18px;
          font-size: 13px;
        `;case"lg":return ct`
          padding: 18px 36px;
          font-size: 16px;
        `;default:return ct`
          padding: 14px 26px;
          font-size: 15px;
        `}}}
  
  /* Variant styles */
  ${({$variant:f="primary"})=>{switch(f){case"secondary":return ct`
          ${Ci}
          color: var(--text-primary);
          
          &:hover {
            background: var(--glass-bg-hover);
            box-shadow: var(--card-shadow);
          }
        `;case"ghost":return ct`
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          
          &:hover {
            background: var(--glass-bg);
            border-color: var(--border-hover);
            color: var(--text-primary);
          }
        `;default:return ct`
          background: var(--gradient);
          background-size: 200% 200%;
          border: none;
          color: white;
          box-shadow: 0 4px 16px rgba(var(--accent-rgb), 0.3);
          
          &:hover {
            animation: ${$f} 3s ease infinite;
            box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.4);
          }
        `}}}
  
  /* Shimmer effect */
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
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    transition: transform var(--timing-small) var(--ease-standard);
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;d(v.span)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  border-radius: var(--radius-full);
  letter-spacing: 0.02em;
  
  ${({$variant:f="default"})=>{switch(f){case"accent":return ct`
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), rgba(var(--blue-rgb), 0.1));
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent);
        `;case"subtle":return ct`
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
        `;default:return ct`
          ${Ci}
          color: var(--text-primary);
        `}}}
`;d.div`
  height: 1px;
  width: 100%;
  background: var(--border);
  margin: 24px 0;
  
  ${({$gradient:f})=>f&&ct`
    height: 2px;
    background: var(--gradient);
    border-radius: 1px;
  `}
`;d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Ci}
  ${Zf}
  
  ${({$size:f="md"})=>{switch(f){case"sm":return ct`
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          
          svg {
            width: 18px;
            height: 18px;
          }
        `;case"lg":return ct`
          width: 56px;
          height: 56px;
          border-radius: var(--radius-xl);
          
          svg {
            width: 28px;
            height: 28px;
          }
        `;default:return ct`
          width: 44px;
          height: 44px;
          border-radius: var(--radius-lg);
          
          svg {
            width: 22px;
            height: 22px;
          }
        `}}}
  
  svg {
    color: var(--text-primary);
    transition: color var(--timing-small) var(--ease-standard);
  }
  
  &:hover svg {
    color: var(--accent);
  }
`;d.input`
  ${Ci}
  
  width: 100%;
  padding: 14px 18px;
  font-size: 15px;
  color: var(--text-primary);
  border-radius: var(--radius-md);
  outline: none;
  transition: 
    background var(--timing-small) var(--ease-standard),
    border-color var(--timing-small) var(--ease-standard),
    box-shadow var(--timing-small) var(--ease-standard);
  
  &::placeholder {
    color: var(--text-tertiary);
  }
  
  &:hover {
    border-color: var(--border-hover);
  }
  
  &:focus {
    background: var(--glass-bg-hover);
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.15);
  }
`;d(v.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(var(--glass-blur-subtle));
  -webkit-backdrop-filter: blur(var(--glass-blur-subtle));
  z-index: 999;
  
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: rgba(0, 0, 0, 0.85);
  }
`;d(v.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  animation: ${Ch} 4s ease-in-out infinite;
  
  ${({$color:f="accent",$intensity:A="normal"})=>{const D=A==="subtle"?.15:A==="strong"?.35:.25;switch(f){case"blue":return ct`
          background: rgba(var(--blue-rgb), ${D});
        `;case"mixed":return ct`
          background: radial-gradient(
            ellipse,
            rgba(var(--accent-rgb), ${D}) 0%,
            rgba(var(--blue-rgb), ${D*.7}) 50%,
            transparent 70%
          );
        `;default:return ct`
          background: rgba(var(--accent-rgb), ${D});
        `}}}
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;d.span`
  background: var(--gradient);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  ${({$animated:f})=>f&&ct`
    animation: ${$f} 4s ease infinite;
  `}
`;const Kf=ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Oh=ot`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Hh=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Bh=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Uh=d(v.div)`
  margin-bottom: 48px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    margin-bottom: 64px;
  }
`,Nh=d(v.div)`
  position: relative;
  padding-left: 36px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding-left: 56px;
  }
`,Gh=d(v.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient);
  background-size: 100% 200%;
  animation: ${Kf} 3s ease infinite;
  border-radius: var(--radius-full);
  transform-origin: top;
  
  /* Liquid Glass glow */
  box-shadow: 0 0 16px -2px rgba(var(--accent-rgb), 0.4);
`,qh=d(v.p)`
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: ${w.typography.fontWeight.regular};
  color: var(--text-primary);
  line-height: 1.6;
  letter-spacing: -0.01em;
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
`,_h=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 64px;
  }
`,Uf=d(v.div)``,Nf=d(v.h3)`
  font-size: 13px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
  transition: color var(--timing-medium) var(--ease-standard), 
              border-color var(--timing-medium) var(--ease-standard);
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
    transition: transform 0.6s var(--ease-standard);
  }
`,Gf=d(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.85;
  transition: color var(--timing-medium) var(--ease-standard);
`,Rh=d(v.div)`
  margin-bottom: 48px;
`,Lh=d(v.h3)`
  font-size: 13px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Yh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: ${w.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--glass-border);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-xl);
    overflow: hidden;
    transition: background-color var(--timing-medium) var(--ease-standard), 
                border-color var(--timing-medium) var(--ease-standard);
  }
`,Xh=d(v.div)`
  position: relative;
  background: var(--bg-primary);
  padding: 36px;
  overflow: hidden;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: background-color var(--timing-medium) var(--ease-standard);
  
  /* Mobile: Individual glass cards */
  @media (max-width: ${w.breakpoints.mobile}) {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur-secondary));
    -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    
    @media (prefers-reduced-transparency: reduce) {
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }
  }
  
  /* Gradient top border on hover */
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
    transition: transform var(--timing-medium) var(--ease-standard);
  }
  
  /* Shimmer effect on hover */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.08) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--timing-small) var(--ease-standard);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  &:hover::after {
    opacity: 1;
    animation: ${Oh} 1.5s ease infinite;
  }
  
  @media (min-width: ${w.breakpoints.mobile}) {
    padding: 48px 36px;
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 56px 44px;
  }
`,Qh=d(v.h4)`
  font-size: 19px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 18px;
  line-height: 1.35;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
`,Vh=d(v.p)`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
`,$h=d(v.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding-top: 56px;
  border-top: 1px solid var(--border);
  transition: border-color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,Zh=d(v.p)`
  font-size: 19px;
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 21px;
  }
`,Kh=d(v.a)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: var(--gradient);
  background-size: 200% 200%;
  color: white;
  font-size: 15px;
  font-weight: ${w.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: var(--radius-full);
  overflow: hidden;
  will-change: transform;
  box-shadow: 0 4px 20px rgba(var(--accent-rgb), 0.3);
  
  /* Shimmer effect */
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
    animation: ${Kf} 3s ease infinite;
    box-shadow: 0 8px 32px rgba(var(--accent-rgb), 0.4);
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  svg {
    width: 18px;
    height: 18px;
    transition: transform var(--timing-small) var(--ease-standard);
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`,Jh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},Wh={hidden:{opacity:0,y:50,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:20,mass:1}}},Fh={hidden:{scaleY:0},visible:{scaleY:1,transition:{type:"spring",stiffness:100,damping:20,delay:.2}}},qf={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:f=>({opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,delay:f*.15}})},Ih={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},Ph={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.4,ease:[.25,.46,.45,.94]}}},tb=({data:f})=>{const A=U.useRef(null),D=xe(A,{once:!0,margin:"-100px"}),g=U.useRef(null),j=xe(g,{once:!0,margin:"-50px"}),M=U.useRef(null),O=xe(M,{once:!0,margin:"-50px"}),it=U.useRef(null),_=xe(it,{once:!0,margin:"-50px"}),X=f.content.slice(0,3).map(E=>E.replace(/^🔹\s*/,"").trim()),G=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}];return s.jsx(Hh,{id:"about",ref:A,children:s.jsxs(Bh,{children:[s.jsx(Ta,{number:"01",title:"About",inView:D}),s.jsx(Uh,{ref:g,children:s.jsxs(Nh,{initial:"hidden",animate:j?"visible":"hidden",variants:Jh,children:[s.jsx(Gh,{variants:Fh}),s.jsx(qh,{variants:Wh,children:X[0]})]})}),s.jsxs(_h,{ref:M,children:[s.jsxs(Uf,{variants:qf,custom:0,initial:"hidden",animate:O?"visible":"hidden",children:[s.jsx(Nf,{initial:{opacity:0,x:-20},animate:O?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Transformation"}),s.jsx(Gf,{initial:{opacity:0,y:20},animate:O?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:X[1]})]}),s.jsxs(Uf,{variants:qf,custom:1,initial:"hidden",animate:O?"visible":"hidden",children:[s.jsx(Nf,{initial:{opacity:0,x:-20},animate:O?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.15},children:"Philosophy"}),s.jsx(Gf,{initial:{opacity:0,y:20},animate:O?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.25},children:X[2]})]})]}),s.jsxs(Rh,{ref:it,children:[s.jsx(Lh,{initial:{opacity:0,y:20},animate:_?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Key Highlights"}),s.jsx(Yh,{variants:Ih,initial:"hidden",animate:_?"visible":"hidden",children:G.map((E,R)=>s.jsxs(Xh,{variants:Ph,children:[s.jsx(Qh,{children:E.title}),s.jsx(Vh,{children:E.text})]},R))})]}),s.jsxs($h,{initial:{opacity:0,y:30},animate:D?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[s.jsx(Zh,{children:"Want to know more?"}),s.jsxs(Kh,{href:f.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[s.jsx("span",{children:f.buttonProps.name}),s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]})})},eb=ot`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,ab=ot`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,ib=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,nb=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,lb=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  
  @media (min-width: ${w.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 72px;
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 56px 88px;
  }
`,rb=d(v.div)``,ob=d(v.h3)`
  font-size: 13px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 28px;
  position: relative;
  transition: color var(--timing-medium) var(--ease-standard);
  
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
    transition: transform 0.5s var(--ease-standard);
  }
`,sb=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,cb=d(v.li)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ub=d(v.div)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,db=d(v.span)`
  font-size: 15px;
  color: var(--text-primary);
  transition: color var(--timing-medium) var(--ease-standard);
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
    transition: transform var(--timing-small) var(--ease-standard);
  }
`,fb=d(v.span)`
  font-size: 13px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  font-weight: ${w.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
`,pb=d(v.div)`
  width: 100%;
  height: 4px;
  background: var(--glass-border);
  border-radius: var(--radius-full);
  overflow: hidden;
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  /* Subtle inner shadow for depth */
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`,gb=d.div`
  height: 100%;
  background: var(--gradient-horizontal);
  border-radius: var(--radius-full);
  transform-origin: left;
  width: ${f=>f.$percentage}%;
  transform: scaleX(0);
  will-change: transform;
  backface-visibility: hidden;
  
  /* Liquid Glass shimmer effect */
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${ab} 2s ease infinite;
    animation-delay: ${f=>f.$delay+.6}s;
  }
  
  ${f=>f.$animate&&ct`
    animation: ${eb} 0.6s cubic-bezier(0.33, 1, 0.68, 1) forwards;
    animation-delay: ${f.$delay}s;
  `}
`,mb=({category:f})=>{const A=U.useRef(null),D=xe(A,{once:!0,margin:"-50px"});return s.jsxs(rb,{ref:A,initial:{opacity:0,y:30,filter:"blur(4px)"},animate:D?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:30,filter:"blur(4px)"},transition:{type:"spring",stiffness:100,damping:20},children:[s.jsx(ob,{children:f.category}),s.jsx(sb,{children:f.skills.map((g,j)=>s.jsxs(cb,{initial:{opacity:0,x:-20},animate:D?{opacity:1,x:0}:{opacity:0,x:-20},transition:{type:"spring",stiffness:100,damping:20,delay:j*.05},whileHover:{x:8,transition:{type:"spring",stiffness:400,damping:25}},children:[s.jsxs(ub,{children:[s.jsx(db,{children:g.name}),s.jsxs(fb,{children:[g.percentage,"%"]})]}),s.jsx(pb,{children:s.jsx(gb,{$percentage:g.percentage,$delay:.1+j*.06,$animate:D})})]},g.name))})]})},hb=({data:f})=>{const A=U.useRef(null),D=xe(A,{once:!0,margin:"-100px"});return s.jsx(ib,{id:"technologyproficiency",ref:A,children:s.jsxs(nb,{children:[s.jsx(Ta,{number:"02",title:"Skills",inView:D}),s.jsx(lb,{children:f.skills.map(g=>s.jsx(mb,{category:g},g.category))})]})})},bb=ot`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0);
  }
  50% {
    box-shadow: 0 0 20px 5px rgba(var(--accent-rgb), 0.15);
  }
`,vb=ot`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,yb=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,xb=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Sb=d(v.div)``,wb=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  transition: border-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  @media (min-width: ${w.breakpoints.tablet}) {
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
  
  /* Gradient accent line on hover */
  &::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient);
    border-radius: var(--radius-full);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform var(--timing-medium) var(--ease-standard);
  }
  
  &:hover::before {
    transform: scaleY(1);
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    &::before {
      left: -48px;
    }
  }
`,zb=d(v.div)``,Tb=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color var(--timing-medium) var(--ease-standard);
`,Ab=d(v.div)``,Eb=d(v.div)``,jb=d(v.h3)`
  font-size: 22px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin-bottom: 4px;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
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
      border-radius: var(--radius-full);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--timing-small) var(--ease-standard);
    }
    
    &:hover {
      color: var(--accent);
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
`,Mb=d(v.button)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  margin-top: 28px;
  border-radius: var(--radius-full);
  cursor: pointer;
  border: none;
  will-change: transform, background, border-color;
  position: relative;
  overflow: hidden;
  
  /* Liquid Glass Effect */
  background: ${({$isOpen:f})=>f?"var(--accent)":"var(--glass-bg)"};
  backdrop-filter: blur(var(--glass-blur-secondary));
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
  outline: 1.5px solid ${({$isOpen:f})=>f?"var(--accent)":"var(--glass-border)"};
  
  ${({$isOpen:f})=>f&&ct`
    animation: ${bb} 2s ease-in-out infinite;
  `}
  
  /* Shimmer effect */
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
    transition: opacity var(--timing-small) var(--ease-standard);
  }
  
  &:hover::before {
    opacity: 1;
    animation: ${vb} 1.5s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,kb=d(v.span)`
  font-size: 12px;
  font-weight: ${w.typography.fontWeight.medium};
  color: ${({$isOpen:f})=>f?"var(--bg-primary)":"var(--text-secondary)"};
  white-space: nowrap;
  letter-spacing: 0.02em;
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
`,Db=d(v.span)`
  display: inline-flex;
  align-items: center;
`,Cb=d(v.p)`
  font-size: 16px;
  color: var(--accent);
  font-weight: ${w.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
`,Ob=d(v.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  flex-wrap: wrap;
`,Hb=d.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
  font-weight: ${w.typography.fontWeight.medium};
`,Bb=d.span`
  font-size: 14px;
  color: var(--text-secondary);
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
`,Ub=d(v.p)`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-top: 16px;
  transition: color var(--timing-medium) var(--ease-standard);
  
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
      transition: transform var(--timing-small) var(--ease-standard);
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
`,Nb=d(v.div)`
  overflow: hidden;
  will-change: height, opacity;
`,Gb=d(v.div)`
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  will-change: transform, opacity;
  transition: border-color var(--timing-medium) var(--ease-standard);
`,qb=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,_b=d(v.li)`
  font-size: 15px;
  line-height: 1.75;
  padding-left: 20px;
  position: relative;
  will-change: transform, opacity;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    background: var(--accent);
    border-radius: var(--radius-full);
    transition: transform var(--timing-small) var(--ease-standard), 
                box-shadow var(--timing-small) var(--ease-standard);
  }
  
  &:hover::before {
    transform: scale(1.3);
    box-shadow: 0 0 10px var(--accent);
  }
`,Rb=d.span`
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--accent);
  transition: color var(--timing-medium) var(--ease-standard);
`,Lb=d.span`
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Yb={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35,mass:1},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},Xb={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.08}}},Qb={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.12}}},Vb={collapsed:{opacity:0,x:-15,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},$b=({data:f})=>{const[A,D]=U.useState(new Set),g=U.useRef(null),j=xe(g,{once:!0,margin:"-100px"}),M=O=>{D(it=>{const _=new Set(it);return _.has(O)?_.delete(O):_.add(O),_})};return s.jsx(yb,{id:"professionalexperience",ref:g,children:s.jsxs(xb,{children:[s.jsx(Ta,{number:"03",title:"Experience",inView:j}),s.jsx(Sb,{children:f.timeline.map((O,it)=>{const _=A.has(it);return s.jsxs(wb,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:[s.jsx(zb,{children:s.jsx(Tb,{children:O.date})}),s.jsxs(Ab,{children:[s.jsxs(Eb,{children:[s.jsx(jb,{children:s.jsx("a",{href:O.url,target:"_blank",rel:"noopener noreferrer",children:O.title})}),s.jsx(Cb,{children:O.subTitle}),O.previously&&s.jsxs(Ob,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.1},children:[s.jsx(Hb,{children:"Previously:"}),s.jsx(Bb,{children:O.previously})]})]}),s.jsx(Ub,{dangerouslySetInnerHTML:{__html:O.descriptionSummary}}),s.jsx(Mb,{$isOpen:_,whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},onClick:()=>M(it),"aria-expanded":_,"aria-label":_?"Show less":"Show more",children:s.jsxs(kb,{$isOpen:_,children:["Show ",s.jsx(za,{mode:"wait",children:s.jsx(Db,{initial:"hidden",animate:"visible",exit:"exit",children:(_?"Less":"More").split("").map((X,G)=>s.jsx(v.span,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:G*.05}},exit:{opacity:0,transition:{delay:(3-G)*.03}}},children:X},G))},_?"less":"more")})]})}),s.jsx(za,{initial:!1,children:_&&s.jsx(Nb,{variants:Yb,initial:"collapsed",animate:"expanded",exit:"collapsed",children:s.jsx(Gb,{variants:Xb,children:s.jsx(qb,{variants:Qb,initial:"collapsed",animate:"expanded",exit:"collapsed",children:O.achievements?.map((X,G)=>s.jsxs(_b,{variants:Vb,children:[s.jsx(Rb,{children:X.title}),": ",s.jsx(Lb,{children:X.description})]},G))})})},"content")})]})]},it)})})]})})},Jf=ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Zb=ot`
  0%, 100% {
    box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.2);
  }
`,Kb=ot`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Jb=d.section`
  padding: 64px 24px;
  overflow: hidden;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Wb=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Fb=d(v.div)`
  position: relative;
`,Ib=d.div`
  position: relative;
  perspective: 1000px;
`,Pb=d(v.article)`
  border-radius: var(--radius-xl);
  will-change: transform, opacity;
  overflow: hidden;
  position: relative;
  animation: ${Zb} 4s ease-in-out infinite;
  
  /* Liquid Glass Effect */
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  box-shadow: var(--card-shadow);
  transition: background var(--timing-medium) var(--ease-standard);
  
  
  /* Border gradient */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius-xl);
    padding: 1.5px;
    background: var(--gradient);
    background-size: 200% 200%;
    animation: ${Jf} 4s ease infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.6;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    border-radius: var(--radius-2xl);
    
    &::before, &::after {
      border-radius: var(--radius-2xl);
    }
  }
`,tv=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 32px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  /* Shimmer effect on hover */
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
    transition: transform 0.5s var(--ease-standard);
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 32px 40px;
  }
`,ev=d(v.h3)`
  font-size: 20px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.35;
  flex: 1;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 24px;
  }
`,av=d(v.button)`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  border: 1.5px solid ${({$isExpanded:f})=>f?"var(--accent)":"var(--glass-border)"};
  background: ${({$isExpanded:f})=>f?"var(--accent-subtle)":"var(--glass-bg)"};
  backdrop-filter: blur(var(--glass-blur-secondary));
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  will-change: transform, background, border-color;
  overflow: hidden;
  
  /* Glow effect */
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: var(--radius-full);
    background: var(--gradient);
    opacity: 0;
    transition: opacity var(--timing-small) var(--ease-standard);
  }
  
  &:hover::before {
    opacity: 0.2;
  }
  
  /* Shimmer effect */
  &::after {
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
    transition: opacity var(--timing-small) var(--ease-standard);
  }
  
  &:hover::after {
    opacity: 1;
    animation: ${Kb} 1.5s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({$isExpanded:f})=>f?"var(--accent)":"var(--text-secondary)"};
    will-change: transform;
    position: relative;
    z-index: 1;
  }
`,iv=d(v.div)`
  overflow: hidden;
  will-change: height;
`,nv=d(v.div)`
  padding: 0 32px 32px;
  border-top: 1px solid var(--glass-border);
  padding-top: 28px;
  transition: border-color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 0 40px 36px;
    padding-top: 32px;
  }
`,lv=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 36px;
  }
`,rv=d(v.li)`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  padding-left: 22px;
  position: relative;
  transition: color var(--timing-medium) var(--ease-standard);
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    background: var(--gradient);
    border-radius: var(--radius-full);
    transition: transform var(--timing-small) var(--ease-standard), 
                box-shadow var(--timing-small) var(--ease-standard);
  }
  
  &:hover::before {
    transform: scale(1.3);
    box-shadow: 0 0 12px var(--accent);
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 16px;
  }
`,ov=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 48px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    gap: 36px;
    margin-top: 56px;
  }
`,_f=d(v.button)`
  width: 54px;
  height: 54px;
  border-radius: var(--radius-full);
  border: 1.5px solid var(--glass-border);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  /* Liquid Glass Effect */
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur-secondary));
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
  
  /* Hover fill effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--glass-bg-hover);
    opacity: 0;
    transition: opacity var(--timing-small) var(--ease-standard);
    border-radius: var(--radius-full);
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
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  svg {
    width: 22px;
    height: 22px;
    position: relative;
    z-index: 1;
  }
`,sv=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,cv=d(v.button)`
  width: ${({$isActive:f})=>f?"36px":"12px"};
  height: 12px;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  background: ${({$isActive:f})=>f?"var(--gradient)":"var(--glass-border)"};
  background-size: 200% 200%;
  ${({$isActive:f})=>f&&ct`
    animation: ${Jf} 3s ease infinite;
  `}
  will-change: width, background;
  transition: background var(--timing-small) var(--ease-standard);
  
  &:hover {
    background: ${({$isActive:f})=>f?"var(--gradient)":"var(--text-tertiary)"};
  }
`,uv={enter:f=>({x:f>0?80:-80,opacity:0,scale:.98}),center:{x:0,opacity:1,scale:1,transition:{type:"spring",stiffness:500,damping:35,mass:.8}},exit:f=>({x:f<0?80:-80,opacity:0,scale:.98,transition:{type:"spring",stiffness:500,damping:35,mass:.8}})},dv={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},fv={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.1}}},pv={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.15}}},gv={collapsed:{opacity:0,x:-20,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},mv=({data:f})=>{const[[A,D],g]=U.useState([0,0]),[j,M]=U.useState(!1),[O,it]=U.useState(!1),_=U.useRef(null),X=U.useRef(null),G=U.useRef(0),E=xe(_,{once:!0,margin:"-100px"}),R=U.useCallback(ft=>{if(O)return;const W=A+ft;W>=0&&W<f.content.length&&(it(!0),g([W,ft]),M(!1),setTimeout(()=>it(!1),350))},[A,f.content.length,O]),St=U.useCallback(ft=>{if(O||ft===A)return;const W=ft>A?1:-1;it(!0),g([ft,W]),M(!1),setTimeout(()=>it(!1),350)},[A,O]);U.useEffect(()=>{const ft=X.current;if(!ft)return;const W=yt=>{const bt=Date.now();if(bt-G.current<300)return;const Tt=Math.abs(yt.deltaX)>Math.abs(yt.deltaY)?yt.deltaX:yt.deltaY;if(Math.abs(Tt)>20){const se=A<f.content.length-1,Se=A>0;(Tt>0&&se||Tt<0&&Se)&&(yt.preventDefault(),yt.stopPropagation(),G.current=bt,Tt>0?R(1):R(-1))}};return ft.addEventListener("wheel",W,{passive:!1}),()=>ft.removeEventListener("wheel",W)},[A,f.content.length,R]);const $=U.useCallback((ft,W)=>{if(O)return;const yt=30,bt=200;W.velocity.x>bt||W.offset.x>yt?A>0&&R(-1):(W.velocity.x<-bt||W.offset.x<-yt)&&A<f.content.length-1&&R(1)},[A,f.content.length,O,R]),jt=f.content[A];return s.jsx(Jb,{id:"mostproudof",ref:_,children:s.jsxs(Wb,{children:[s.jsx(Ta,{number:"04",title:"Projects",inView:E}),s.jsxs(Fb,{initial:{opacity:0,y:40},animate:E?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:20,delay:.2},children:[s.jsx(Ib,{ref:X,children:s.jsx(za,{initial:!1,custom:D,mode:"wait",children:s.jsxs(Pb,{custom:D,variants:uv,initial:"enter",animate:"center",exit:"exit",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.1,dragMomentum:!1,onDragEnd:$,transition:{x:{type:"spring",stiffness:500,damping:35,mass:.8},opacity:{duration:.2},scale:{type:"spring",stiffness:500,damping:35,mass:.8}},style:{cursor:"grab",touchAction:"pan-y"},whileDrag:{cursor:"grabbing",scale:1.01},children:[s.jsxs(tv,{$isExpanded:j,onClick:()=>M(!j),whileHover:{scale:1.01},transition:{type:"spring",stiffness:400,damping:25},children:[s.jsx(ev,{children:jt.title}),s.jsx(av,{$isExpanded:j,"aria-label":j?"Collapse project details":"Expand project details","aria-expanded":j,animate:{rotate:j?45:0,scale:j?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:s.jsx(v.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:s.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),s.jsx(za,{initial:!1,children:j&&s.jsx(iv,{variants:dv,initial:"collapsed",animate:"expanded",exit:"collapsed",children:s.jsx(nv,{variants:fv,children:s.jsx(lv,{variants:pv,initial:"collapsed",animate:"expanded",exit:"collapsed",children:jt.content.map((ft,W)=>s.jsx(rv,{variants:gv,children:ft},W))})})})})]},A)})}),s.jsxs(ov,{initial:{opacity:0,y:20},animate:E?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[s.jsx(_f,{onClick:()=>R(-1),disabled:A===0,"aria-label":"Previous project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(sv,{role:"tablist","aria-label":"Project navigation",children:f.content.map((ft,W)=>s.jsx(cv,{$isActive:A===W,onClick:()=>St(W),role:"tab","aria-selected":A===W,"aria-label":`Go to project ${W+1}: ${ft.title}`,whileHover:{scale:1.1},whileTap:{scale:.95},animate:{width:A===W?36:12},transition:{type:"spring",stiffness:400,damping:25}},W))}),s.jsx(_f,{onClick:()=>R(1),disabled:A===f.content.length-1,"aria-label":"Next project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:s.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]})]})})},hv=ot`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,bv=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,vv=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,yv=d(v.div)`
  display: flex;
  flex-direction: column;
`,xv=d(v.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  transition: border-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  /* Gradient underline on hover */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background: var(--gradient);
    border-radius: var(--radius-full);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s var(--ease-standard);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
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
`,Sv=d(v.div)`
  flex: 1;
`,wv=d(v.h3)`
  font-size: 18px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 6px;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 20px;
  }
`,zv=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Tv=d(v.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: ${w.typography.fontWeight.medium};
  color: var(--blue);
  text-decoration: none;
  border-radius: var(--radius-full);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  /* Liquid Glass Effect */
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur-secondary));
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
  border: 1.5px solid var(--glass-border);
  
  /* Shimmer effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.15) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity var(--timing-small) var(--ease-standard);
  }
  
  &:hover {
    border-color: var(--blue);
    text-decoration: none;
  }
  
  &:hover::before {
    opacity: 1;
    animation: ${hv} 1.5s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  span, svg {
    position: relative;
    z-index: 1;
  }
  
  svg {
    width: 14px;
    height: 14px;
    transition: transform var(--timing-small) var(--ease-standard);
  }
  
  &:hover svg {
    transform: translate(2px, -2px);
  }
`,Av=({data:f})=>{const A=U.useRef(null),D=xe(A,{once:!0,margin:"-100px"}),g=j=>j.toLowerCase().includes("azure")||j.toLowerCase().includes("microsoft")?"Microsoft":j.toLowerCase().includes("aws")?"Amazon Web Services":"";return s.jsx(bv,{id:"certifications",ref:A,children:s.jsxs(vv,{children:[s.jsx(Ta,{number:"05",title:"Certifications",inView:D}),s.jsx(yv,{children:f.certificateProps.certificateMetaData.map((j,M)=>s.jsxs(xv,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:M*.08},whileHover:{x:12,transition:{type:"spring",stiffness:400,damping:25}},children:[s.jsxs(Sv,{children:[s.jsx(wv,{children:j.title}),s.jsx(zv,{children:g(j.title)})]}),s.jsxs(Tv,{href:j.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[s.jsx("span",{children:"Verify"}),s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),s.jsx("polyline",{points:"15,3 21,3 21,9"}),s.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]},M))})]})})},Wf=ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Ev=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,jv=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Mv=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }
`,kv=d(v.blockquote)`
  padding: 44px;
  margin: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  /* Liquid Glass Effect */
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--card-shadow);
  transition: 
    background var(--timing-medium) var(--ease-standard),
    box-shadow var(--timing-medium) var(--ease-standard),
    border-color var(--timing-medium) var(--ease-standard);
  
  
  /* Gradient border on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius-xl);
    padding: 1px;
    background: var(--gradient);
    background-size: 200% 200%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity var(--timing-medium) var(--ease-standard);
  }
  
  &:hover::before {
    opacity: 0.5;
    animation: ${Wf} 3s ease infinite;
  }
  
  &:hover {
    border-color: transparent;
    box-shadow: var(--card-shadow-hover);
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 52px;
  }
`,Dv=d(v.div)`
  font-size: 56px;
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Wf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 24px;
  font-weight: bold;
  position: relative;
  z-index: 1;
`,Cv=d(v.p)`
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 28px;
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 18px;
  }
`,Ov=d(v.footer)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  z-index: 1;
`,Hv=d(v.cite)`
  font-size: 16px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  font-style: normal;
  transition: color var(--timing-medium) var(--ease-standard);
`,Bv=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Uv=({data:f})=>{const A=U.useRef(null),D=xe(A,{once:!0,margin:"-100px"});return s.jsx(Ev,{id:"testimonials",ref:A,children:s.jsxs(jv,{children:[s.jsx(Ta,{number:"06",title:"Testimonials",inView:D}),s.jsx(Mv,{children:f.quoteProps.quoteMetaData.map((g,j)=>s.jsxs(kv,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:j*.1},whileHover:{y:-8,scale:1.02,transition:{type:"spring",stiffness:300,damping:20}},children:[s.jsx(Dv,{children:'"'}),s.jsx(Cv,{children:g.quote}),s.jsxs(Ov,{children:[s.jsx(Hv,{children:g.givenBy}),s.jsx(Bv,{children:g.subTitleGivenBy})]})]},j))})]})})},Nv=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Gv=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,qv=d(v.div)`
  display: flex;
  flex-direction: column;
`,_v=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  transition: border-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  /* Timeline dot with gradient */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: var(--gradient);
    border-radius: var(--radius-full);
    opacity: 0;
    transition: opacity var(--timing-small) var(--ease-standard), 
                transform var(--timing-small) var(--ease-standard),
                box-shadow var(--timing-small) var(--ease-standard);
  }
  
  &:hover::before {
    opacity: 1;
    box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.4);
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
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
`,Rv=d(v.span)`
  font-size: 15px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color var(--timing-medium) var(--ease-standard);
  font-weight: ${w.typography.fontWeight.medium};
`,Lv=d(v.div)``,Yv=d(v.h3)`
  font-size: 20px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 22px;
  }
`,Xv=d(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Qv=({data:f})=>{const A=U.useRef(null),D=xe(A,{once:!0,margin:"-100px"});return s.jsx(Nv,{id:"educationalqualifications",ref:A,children:s.jsxs(Gv,{children:[s.jsx(Ta,{number:"07",title:"Education",inView:D}),s.jsx(qv,{children:f.timeline.map((g,j)=>s.jsxs(_v,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:j*.1},whileHover:{x:16,transition:{type:"spring",stiffness:400,damping:25}},children:[s.jsx(Rv,{children:g.date}),s.jsxs(Lv,{children:[s.jsx(Yv,{children:g.title}),s.jsx(Xv,{children:g.subTitle})]})]},j))})]})})},Vv=ot`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,$v=ot`
  0%, 100% {
    box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.2);
  }
`,Zv=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Kv=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Jv=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 72px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`,Wv=d(v.div)``,Fv=d(v.h3)`
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: ${w.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Iv=d(v.p)`
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Pv=d(v.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,t1=d(v.a)`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  will-change: transform;
  border-radius: 20px;
  
  /* Liquid Glass Effect */
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur-secondary));
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
  border: 1px solid var(--glass-border);
  transition: 
    background var(--timing-medium) var(--ease-standard),
    border-color var(--timing-medium) var(--ease-standard);
  
  /* Gradient border on hover */
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
    transition: opacity var(--timing-medium) var(--ease-standard);
  }
  
  &:hover {
    border-color: transparent;
    text-decoration: none;
  }
  
  &:hover::after {
    opacity: 0.8;
    animation: ${Vv} 3s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,e1=d(v.div)`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  animation: ${$v} 4s ease-in-out infinite;
  
  /* Liquid Glass Effect */
  background: var(--glass-bg-secondary);
  backdrop-filter: blur(var(--glass-blur-secondary));
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
  
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
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: var(--cyan);
    position: relative;
    z-index: 1;
  }
`,a1=d(v.div)`
  position: relative;
  z-index: 1;
`,i1=d(v.span)`
  display: block;
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  transition: color var(--timing-medium) var(--ease-standard);
`,n1=d(v.span)`
  font-size: 17px;
  font-weight: ${w.typography.fontWeight.medium};
  color: var(--text-primary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Rf={mail:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[s.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),s.jsx("path",{d:"M22 6L12 13 2 6"})]}),email:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[s.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),s.jsx("path",{d:"M22 6L12 13 2 6"})]}),phone:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:s.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),linkedin:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[s.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),s.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),s.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),location:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]})},l1=({data:f})=>{const A=U.useRef(null),D=xe(A,{once:!0,margin:"-100px"}),g=M=>Rf[M.toLowerCase()]||Rf.mail,j=M=>({mail:"Email",email:"Email",phone:"Phone",linkedin:"LinkedIn",location:"Location"})[M.toLowerCase()]||M;return s.jsx(Zv,{id:"contact",ref:A,children:s.jsxs(Kv,{children:[s.jsx(Ta,{number:"08",title:"Contact",inView:D}),s.jsxs(Jv,{children:[s.jsxs(Wv,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:80,damping:18},children:[s.jsx(Fv,{children:"Let's work together"}),s.jsx(Iv,{children:"Have a project in mind or want to discuss opportunities? I'd love to hear from you."})]}),s.jsx(Pv,{children:f.contactMetaData.filter(M=>M.icon.toLowerCase()!=="phone").map((M,O)=>s.jsxs(t1,{href:M.href,target:M.href.startsWith("http")?"_blank":void 0,rel:M.href.startsWith("http")?"noopener noreferrer":void 0,initial:{opacity:0,x:30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:18,delay:O*.1},whileHover:{x:12,scale:1.02,transition:{type:"spring",stiffness:400,damping:25}},whileTap:{scale:.98},children:[s.jsx(e1,{whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:20},children:g(M.icon)}),s.jsxs(a1,{children:[s.jsx(i1,{children:j(M.icon)}),s.jsx(n1,{children:M.content})]})]},O))})]})]})})},r1={sectionTitle:"About Me",content:["🔹  I specialize in crafting multi-tenant, event-driven, and Micro-Services architectures on Azure and AWS, enabling real-time intelligence at scale. My leadership has accelerated delivery velocity by 25% and nurtured high-performing teams of 65+ engineers across 5 Development and 1 Core Support Squad, distributed globally.","An expert in transforming monoliths into cloud-native Micro-Services, designing AI-driven orchestration platforms, and modernizing data pipelines using Spark, Databricks, and real-time analytics.","Passionate about balancing technical depth with business outcomes, aligning architecture roadmaps with OKRs, and embedding security and compliance (SOC2, InfoSec) across the SDLC.",`💡 Key Highlights: 
 ✅ Product & Project Expertise — Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT. 
 
 ✅ Technical Edge — Deep experience leading and mentoring global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, Docker/Kubernetes, and DevOps automation. 
 
 ✅ Business Outcomes — Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution.`],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},o1={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},s1={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},c1={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},u1={name:"Pranshu Nijhawan",designation:"Designing for Scale, Leading for Impact",headline:"Strategic Engineering Leader with 10+ years of experience architecting scalable SaaS platforms, leading global teams, and driving multimillion-dollar cost optimizations. Expert in cloud-native transformations, data-intensive systems, and multi-tenant architectures that enable real-time intelligence and business growth. Proven track record of reducing operational costs by $2M+, improving delivery velocity by 25%, and mentoring high-performing engineering teams.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},d1={sectionTitle:"Most Proud Of",content:[{id:1,title:"SearchSphere – Multi-Tenant Search Platform with RAG and Vectorization",content:["Designed and architected a fully configurable multi-tenant search platform using TypeScript, Node.js, and PostgreSQL.","Implemented vectorization and Retrieval Augmented Generation (RAG) to enable intelligent global and dimension-based search capabilities.","Enabled onboarding of new search dimensions dynamically via configuration, eliminating the need for code changes.","Successfully decommissioned Elasticsearch, achieving platform simplification and over $2 million in cost savings.","Built for high scalability, supporting tenant isolation and extensibility without compromising performance."]},{id:2,title:"Zero-Downtime ETL Platform – Scalable Blue/Green Data Processing at Scale",content:["Engineered a highly scalable and fault-tolerant ETL platform using Databricks, Spark, Azure Data Factory, and PostgreSQL.","Designed around a Blue/Green deployment strategy to ensure zero downtime during data ingestion and transformation cycles.","Processed 200+ million records across 100+ tables in under 15 minutes using Change Data Capture (CDC) and dynamic schema allocation techniques.","Enabled seamless schema evolution and pipeline reusability across multiple tenants and data domains.","Delivered a production-grade solution with operational efficiency, reliability, and real-time recovery capabilities."]},{id:3,title:"Orchestron – AI Orchestrated Modular Data Processing & Explosion Platform",content:["Architected a high-performance data processing and explosion platform using .NET, Apache Spark, and Kubernetes.","Designed a modular, plug-and-play architecture with configurable rules to enable seamless data transformation at scale.","Integrated Generative AI Agents to manage orchestration and rule governance, enabling intelligent, adaptive processing workflows.","Achieved dynamic scalability and reusability across domains through containerized deployments and configuration-driven pipelines.","Delivered a flexible and future-proof platform capable of adapting to evolving data models and transformation logic with minimal effort."]},{id:4,title:"Polymorphic Self-Mutating Encryption Algorithm",content:["Created a highly secured Hybrid Encryption Algorithm, a combination of hashing and dynamic key-based Encryption Algorithm.",'Solve the drawback of traditional Hashing technique to always create a unique hash value with an "Always Unique" based mechanism ignoring the need to store a key as followed in Key Based Encryption technique.']},{id:5,title:"Global Dependency Tracer",content:["Created a highly optimized Dependency Trace writer, based on Aspect-Oriented-Programming (AOP) Paradigm.","Architected using .NET Core's built-in Dependency Injection (DI) Containers by injecting dynamic proxies acting as a Middleware for all service calls."]},{id:6,title:"Dynamic Result Library for IQueryable & IEnumerable Collections",content:["Created a highly customizable library for Non-Generic collections IQueryable & IEnumerable based on concepts of Reflection for transforming Custom Data objects into LINQ compatible Lambda Expressions.","Dynamic Filter: Generate lambda expressions for LINQ's where extension method to filter data based on defined properties and values.","Dynamic Sort: Generate LINQ's ordering extensions with lambda expressions to sort the object in any direction (Ascending & Descending).","Dynamic Select: Generate lambda expressions for LINQ's select extension to fetch only the provided properties and filter the response using Custom Middleware Injection in .NET Core's request cycle.","Fully Compatible for EF Core's Translations."]}]},f1={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect I",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 – Present",descriptionSummary:'At McKinsey, I serve as the Lead Architect for the entire <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a> platform, a flagship <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> product for CPG and retail clients. My role involves bridging deep technical expertise with strategic client engagement, advising senior product and consulting leaders, and driving solution design for high-stakes RFPs and enterprise implementations. I ensure our technical strategy delivers measurable client impact, while leading a global team of 65+ engineers across 5 Development and 1 Core Support Squad in strategic technical delivery.',achievements:[{title:"Design of a Multi-Language Backend Architecture",description:"Defined the long-term architectural roadmap for a complex, data heavy ecosystem where I coordinated the interoperability of a backend that uses multiple languages - Node.js/Fastify for scalable microservices and .NET/C# for high performance batch processing."},{title:"Implementation of a Scalable Blue-Green ETL Platform",description:"Built a scalable ETL platform that uses Databricks, Azure Data Factory and PostgreSQL that switches between two identical production slots, Blue or Green - one slot runs the live service while the other receives the new release. The system loads more than 200 million records from more than 100 tables in under 15 minutes."},{title:"Development of a Micro-Frontend-Based UI Architecture",description:"Led the design of data heavy user interfaces based on Micro Frontend architecture using React, TypeScript, Redux and AG Grid."},{title:"Establishment of a GitOps-Driven Delivery Framework",description:"Established the delivery system - putting GitOps at the center. I designed all infrastructure as plain Terraform code and set up one touch release pipelines in Azure DevOps, Helm besides ArgoCD."},{title:"Advancement of Security-First Practices and Unified Observability",description:'Established a "Security-First" culture by adding Wiz besides SonarQube to CI/CD pipelines and created a single observability rule set with Dynatrace and OpenTelemetry.'},{title:"Leadership Contributions and Career Progression",description:"Got promoted from Senior Software Engineer to Principal Architect in 3.5 years to build a culture where people take responsibility and think about the whole system. Personally guided senior engineers on how to choose system designs, linked product needs to what the code can deliver plus earned strong trust from every stakeholder."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 – March 2022",descriptionSummary:'At Eptura, I transformed <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), re-architecting legacy SaaS into cloud-native systems and designing distributed platforms. This directly enhanced product reliability and scalability for global clients, while I also led engineering squads, driving technical excellence and team growth.',achievements:[{title:"Cloud-Native Transformation for Enhanced Client Uptime",description:"Led re-architecture of legacy SaaS to a cloud-native microservices solution on Azure Kubernetes Service (AKS). Achieved 60% faster recovery and significantly enhanced system uptime, critical for client operations."},{title:"Global Distributed Release Management System",description:"Engineered and deployed a system (Azure IoT Hub, Serverless Functions, Azure CosmosDB) orchestrating synchronized updates across 300M+ IoT devices globally. Ensured seamless and reliable software delivery to a vast client network."},{title:"Led & Mentored Engineering Squads",description:"Directed a team of 20 engineers (4 tech leads) across four product squads. Implemented mentorship, improving team retention by 20% and fostering engineering growth, impacting product quality for clients."}]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 – April 2021",descriptionSummary:"At Nagarro, I delivered full-stack applications for diverse clients, enhancing user experience and streamlining development. My role involved hands-on development and implementing modern software engineering practices to improve efficiency and reliability of client solutions.",achievements:[{title:"High-Performance Full-Stack Applications",description:"Developed full-stack web applications (Angular, .NET Core, PostgreSQL, Ionic Framework) for e-commerce and HR clients."},{title:"CI/CD & IaC for Reliable Client Deployments",description:"Established CI/CD pipelines and Infrastructure as Code (IaC) practices. Reduced deployment failures by 70%, ensuring stable and predictable software releases for client projects."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 – December 2019",descriptionSummary:'During this tenure at Condeco, I focused on core development and optimization of the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), contributing to its scalability and reliability for a rapidly growing customer base.',achievements:[{title:"Scalable Microservices for 3x Customer Growth",description:"Designed and developed microservices (C#, .NET, React, SQL Server) for the workspace SaaS platform. Supported 3x customer scale-up, handling increased user demand."},{title:"Optimized CI/CD & Data Models",description:"Maintained CI/CD pipelines and implemented data model optimizations. Resulted in faster, more reliable software releases and improved system performance for client-facing features."}]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",previously:"Intern",date:"February 2016 – August 2018",descriptionSummary:"At Gartner, I contributed to the development of the ClearForce platform (proprietary survey and analytics tool for HR consulting), focusing on improving data accuracy and automating workflows for clients.",achievements:[{title:"Core SaaS Analytics Tool Development",description:"Contributed backend development for ClearForce (C#, .NET Core, React), improving employee survey data accuracy by 60%. Critical for providing data-driven insights to HR clients."},{title:"Automated SQL Workflows",description:"Developed and automated SQL workflows (SPs, SQL agent jobs). Saved over 240 engineering hours annually in manual data processing, improving data delivery efficiency for clients."}],last:!0}]},p1={sectionTitle:"Technology Proficiency",skills:[{icon:"Architecture",category:"Architecture",skills:[{name:"Microservices Architecture",percentage:100},{name:"Data Lakehouse",percentage:90},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Multi-Tenant Architecture (Database, Schema, Metadata Resolution)",percentage:90},{name:"Event-Driven Architecture (EDA)",percentage:100},{name:"Serverless",percentage:80}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"Angular",percentage:90},{name:"JavaScript",percentage:100},{name:"TypeScript",percentage:100},{name:"Ionic Framework",percentage:60}]},{icon:"Backend",category:"Backend",skills:[{name:"C#",percentage:100},{name:".NET Core",percentage:100},{name:"Node.Js",percentage:80},{name:"Python",percentage:80},{name:"Microservices",percentage:100},{name:"GraphQL",percentage:80}]},{icon:"Database",category:"Database",skills:[{name:"SQL",percentage:100},{name:"NoSQL",percentage:90}]},{icon:"Cloud",category:"Cloud",skills:[{name:"Microsoft Azure",percentage:90},{name:"Amazon Web Services (AWS)",percentage:80}]},{icon:"DataEngineering",category:"Data Engineering",skills:[{name:"Azure Databricks (Apache Spark)",percentage:80},{name:"Azure Datafactory",percentage:70},{name:"Azure Stream Analytics",percentage:70}]}]},g1={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},m1={aboutSection:r1,certifications:o1,contactMe:s1,educationalQualifications:c1,homeSection:u1,mostProudOf:d1,professionalExperience:f1,technologyProficiency:p1,testimonials:g1},We=m1;function h1(){const[f,A]=U.useState(!1);return s.jsxs(Hg,{children:[s.jsx(Cg,{}),s.jsx(Om,{}),s.jsx(Dm,{}),s.jsx(za,{children:!f&&s.jsx(Mm,{onComplete:()=>A(!0)})}),f&&s.jsxs(s.Fragment,{children:[s.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),s.jsx(Fg,{}),s.jsxs("main",{id:"main-content",style:{position:"relative"},role:"main",children:[s.jsx(gh,{data:We.homeSection}),s.jsx(tb,{data:We.aboutSection}),s.jsx(hb,{data:We.technologyProficiency}),s.jsx($b,{data:We.professionalExperience}),s.jsx(mv,{data:We.mostProudOf}),s.jsx(Av,{data:We.certifications}),s.jsx(Uv,{data:We.testimonials}),s.jsx(Qv,{data:We.educationalQualifications}),s.jsx(l1,{data:We.contactMe})]}),s.jsx(cm,{})]})]})}kg.createRoot(document.getElementById("root")).render(s.jsx(U.StrictMode,{children:s.jsx(h1,{})}));
