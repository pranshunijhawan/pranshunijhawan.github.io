import{r as O,j as s,m as v,L as vg,A as Hi,u as Cf,a as yg,b as Df,c as kf,d as xe}from"./vendor-motion-NN0UiyF0.js";import{r as xg,a as Sg}from"./vendor-react-DlBnNAMw.js";import{f as wg,m as Wt,d as p,l as st}from"./vendor-styled-TQ_oEx1d.js";(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))d(j);new MutationObserver(j=>{for(const M of j)if(M.type==="childList")for(const B of M.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&d(B)}).observe(document,{childList:!0,subtree:!0});function E(j){const M={};return j.integrity&&(M.integrity=j.integrity),j.referrerPolicy&&(M.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?M.credentials="include":j.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function d(j){if(j.ep)return;j.ep=!0;const M=E(j);fetch(j.href,M)}})();var ys={exports:{}},Mn={},xs={exports:{}},Ss={};var Hf;function zg(){return Hf||(Hf=1,(function(u){function T(z,D){var R=z.length;z.push(D);t:for(;0<R;){var ft=R-1>>>1,pt=z[ft];if(0<j(pt,D))z[ft]=D,z[R]=pt,R=ft;else break t}}function E(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var D=z[0],R=z.pop();if(R!==D){z[0]=R;t:for(var ft=0,pt=z.length,qt=pt>>>1;ft<qt;){var vt=2*(ft+1)-1,tt=z[vt],Dt=vt+1,je=z[Dt];if(0>j(tt,R))Dt<pt&&0>j(je,tt)?(z[ft]=je,z[Dt]=R,ft=Dt):(z[ft]=tt,z[vt]=R,ft=vt);else if(Dt<pt&&0>j(je,R))z[ft]=je,z[Dt]=R,ft=Dt;else break t}}return D}function j(z,D){var R=z.sortIndex-D.sortIndex;return R!==0?R:z.id-D.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;u.unstable_now=function(){return M.now()}}else{var B=Date,F=B.now();u.unstable_now=function(){return B.now()-F}}var L=[],K=[],$=1,C=null,P=3,_t=!1,q=!1,Ct=!1,Se=!1,bt=typeof setTimeout=="function"?setTimeout:null,rt=typeof clearTimeout=="function"?clearTimeout:null,dt=typeof setImmediate<"u"?setImmediate:null;function jt(z){for(var D=E(K);D!==null;){if(D.callback===null)d(K);else if(D.startTime<=z)d(K),D.sortIndex=D.expirationTime,T(L,D);else break;D=E(K)}}function Bt(z){if(Ct=!1,jt(z),!q)if(E(L)!==null)q=!0,se||(se=!0,ue());else{var D=E(K);D!==null&&He(Bt,D.startTime-z)}}var se=!1,we=-1,ze=5,Va=-1;function Cn(){return Se?!0:!(u.unstable_now()-Va<ze)}function $a(){if(Se=!1,se){var z=u.unstable_now();Va=z;var D=!0;try{t:{q=!1,Ct&&(Ct=!1,rt(we),we=-1),_t=!0;var R=P;try{e:{for(jt(z),C=E(L);C!==null&&!(C.expirationTime>z&&Cn());){var ft=C.callback;if(typeof ft=="function"){C.callback=null,P=C.priorityLevel;var pt=ft(C.expirationTime<=z);if(z=u.unstable_now(),typeof pt=="function"){C.callback=pt,jt(z),D=!0;break e}C===E(L)&&d(L),jt(z)}else d(L);C=E(L)}if(C!==null)D=!0;else{var qt=E(K);qt!==null&&He(Bt,qt.startTime-z),D=!1}}break t}finally{C=null,P=R,_t=!1}D=void 0}}finally{D?ue():se=!1}}}var ue;if(typeof dt=="function")ue=function(){dt($a)};else if(typeof MessageChannel<"u"){var Dn=new MessageChannel,Bi=Dn.port2;Dn.port1.onmessage=$a,ue=function(){Bi.postMessage(null)}}else ue=function(){bt($a,0)};function He(z,D){we=bt(function(){z(u.unstable_now())},D)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(z){z.callback=null},u.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<z?Math.floor(1e3/z):5},u.unstable_getCurrentPriorityLevel=function(){return P},u.unstable_next=function(z){switch(P){case 1:case 2:case 3:var D=3;break;default:D=P}var R=P;P=D;try{return z()}finally{P=R}},u.unstable_requestPaint=function(){Se=!0},u.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var R=P;P=z;try{return D()}finally{P=R}},u.unstable_scheduleCallback=function(z,D,R){var ft=u.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ft+R:ft):R=ft,z){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=R+pt,z={id:$++,callback:D,priorityLevel:z,startTime:R,expirationTime:pt,sortIndex:-1},R>ft?(z.sortIndex=R,T(K,z),E(L)===null&&z===E(K)&&(Ct?(rt(we),we=-1):Ct=!0,He(Bt,R-ft))):(z.sortIndex=pt,T(L,z),q||_t||(q=!0,se||(se=!0,ue()))),z},u.unstable_shouldYield=Cn,u.unstable_wrapCallback=function(z){var D=P;return function(){var R=P;P=D;try{return z.apply(this,arguments)}finally{P=R}}}})(Ss)),Ss}var Of;function Ag(){return Of||(Of=1,xs.exports=zg()),xs.exports}var Bf;function Tg(){if(Bf)return Mn;Bf=1;var u=Ag(),T=xg(),E=Sg();function d(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function M(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function B(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function F(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function L(t){if(M(t)!==t)throw Error(d(188))}function K(t){var e=t.alternate;if(!e){if(e=M(t),e===null)throw Error(d(188));return e!==t?null:t}for(var a=t,i=e;;){var n=a.return;if(n===null)break;var l=n.alternate;if(l===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===a)return L(n),t;if(l===i)return L(n),e;l=l.sibling}throw Error(d(188))}if(a.return!==i.return)a=n,i=l;else{for(var r=!1,o=n.child;o;){if(o===a){r=!0,a=n,i=l;break}if(o===i){r=!0,i=n,a=l;break}o=o.sibling}if(!r){for(o=l.child;o;){if(o===a){r=!0,a=l,i=n;break}if(o===i){r=!0,i=l,a=n;break}o=o.sibling}if(!r)throw Error(d(189))}}if(a.alternate!==i)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?t:e}function $(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=$(t),e!==null)return e;t=t.sibling}return null}var C=Object.assign,P=Symbol.for("react.element"),_t=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),Ct=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),bt=Symbol.for("react.profiler"),rt=Symbol.for("react.consumer"),dt=Symbol.for("react.context"),jt=Symbol.for("react.forward_ref"),Bt=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),Va=Symbol.for("react.activity"),Cn=Symbol.for("react.memo_cache_sentinel"),$a=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=$a&&t[$a]||t["@@iterator"],typeof t=="function"?t:null)}var Dn=Symbol.for("react.client.reference");function Bi(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Dn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ct:return"Fragment";case bt:return"Profiler";case Se:return"StrictMode";case Bt:return"Suspense";case se:return"SuspenseList";case Va:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case q:return"Portal";case dt:return t.displayName||"Context";case rt:return(t._context.displayName||"Context")+".Consumer";case jt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case we:return e=t.displayName||null,e!==null?e:Bi(t.type)||"Memo";case ze:e=t._payload,t=t._init;try{return Bi(t(e))}catch{}}return null}var He=Array.isArray,z=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},ft=[],pt=-1;function qt(t){return{current:t}}function vt(t){0>pt||(t.current=ft[pt],ft[pt]=null,pt--)}function tt(t,e){pt++,ft[pt]=t.current,t.current=e}var Dt=qt(null),je=qt(null),Pe=qt(null),kn=qt(null);function Hn(t,e){switch(tt(Pe,e),tt(je,t),tt(Dt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Fd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Fd(e),t=Id(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(Dt),tt(Dt,t)}function Za(){vt(Dt),vt(je),vt(Pe)}function Pl(t){t.memoizedState!==null&&tt(kn,t);var e=Dt.current,a=Id(e,t.type);e!==a&&(tt(je,t),tt(Dt,a))}function On(t){je.current===t&&(vt(Dt),vt(je)),kn.current===t&&(vt(kn),An._currentValue=R)}var tr,js;function Ea(t){if(tr===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);tr=e&&e[1]||"",js=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tr+t+js}var er=!1;function ar(t,e){if(!t||er)return"";er=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(y){var b=y}Reflect.construct(t,[],A)}else{try{A.call()}catch(y){b=y}t.call(A.prototype)}}else{try{throw Error()}catch(y){b=y}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(y){if(y&&b&&typeof y.stack=="string")return[y.stack,b.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),r=l[0],o=l[1];if(r&&o){var c=r.split(`
`),h=o.split(`
`);for(n=i=0;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(i===c.length||n===h.length)for(i=c.length-1,n=h.length-1;1<=i&&0<=n&&c[i]!==h[n];)n--;for(;1<=i&&0<=n;i--,n--)if(c[i]!==h[n]){if(i!==1||n!==1)do if(i--,n--,0>n||c[i]!==h[n]){var x=`
`+c[i].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=i&&0<=n);break}}}finally{er=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ea(a):""}function Jf(t,e){switch(t.tag){case 26:case 27:case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return t.child!==e&&e!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return ar(t.type,!1);case 11:return ar(t.type.render,!1);case 1:return ar(t.type,!0);case 31:return Ea("Activity");default:return""}}function Ms(t){try{var e="",a=null;do e+=Jf(t,a),a=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ir=Object.prototype.hasOwnProperty,nr=u.unstable_scheduleCallback,lr=u.unstable_cancelCallback,Wf=u.unstable_shouldYield,Ff=u.unstable_requestPaint,Ft=u.unstable_now,If=u.unstable_getCurrentPriorityLevel,Cs=u.unstable_ImmediatePriority,Ds=u.unstable_UserBlockingPriority,Bn=u.unstable_NormalPriority,Pf=u.unstable_LowPriority,ks=u.unstable_IdlePriority,t0=u.log,e0=u.unstable_setDisableYieldValue,Ui=null,It=null;function ta(t){if(typeof t0=="function"&&e0(t),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(Ui,t)}catch{}}var Pt=Math.clz32?Math.clz32:n0,a0=Math.log,i0=Math.LN2;function n0(t){return t>>>=0,t===0?32:31-(a0(t)/i0|0)|0}var Un=256,Nn=262144,Rn=4194304;function ja(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ln(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var n=0,l=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~l,i!==0?n=ja(i):(r&=o,r!==0?n=ja(r):a||(a=o&~t,a!==0&&(n=ja(a))))):(o=i&~l,o!==0?n=ja(o):r!==0?n=ja(r):a||(a=i&~t,a!==0&&(n=ja(a)))),n===0?0:e!==0&&e!==n&&(e&l)===0&&(l=n&-n,a=e&-e,l>=a||l===32&&(a&4194048)!==0)?e:n}function Ni(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function l0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hs(){var t=Rn;return Rn<<=1,(Rn&62914560)===0&&(Rn=4194304),t}function rr(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ri(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function r0(t,e,a,i,n,l){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,c=t.expirationTimes,h=t.hiddenUpdates;for(a=r&~a;0<a;){var x=31-Pt(a),A=1<<x;o[x]=0,c[x]=-1;var b=h[x];if(b!==null)for(h[x]=null,x=0;x<b.length;x++){var y=b[x];y!==null&&(y.lane&=-536870913)}a&=~A}i!==0&&Os(t,i,0),l!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=l&~(r&~e))}function Os(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Pt(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&261930}function Bs(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-Pt(a),n=1<<i;n&e|t[i]&e&&(t[i]|=e),a&=~n}}function Us(t,e){var a=e&-e;return a=(a&42)!==0?1:or(a),(a&(t.suspendedLanes|e))!==0?0:a}function or(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function sr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ns(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:wf(t.type))}function Rs(t,e){var a=D.p;try{return D.p=t,e()}finally{D.p=a}}var ea=Math.random().toString(36).slice(2),Ut="__reactFiber$"+ea,Qt="__reactProps$"+ea,Ka="__reactContainer$"+ea,ur="__reactEvents$"+ea,o0="__reactListeners$"+ea,s0="__reactHandles$"+ea,Ls="__reactResources$"+ea,Li="__reactMarker$"+ea;function cr(t){delete t[Ut],delete t[Qt],delete t[ur],delete t[o0],delete t[s0]}function Ja(t){var e=t[Ut];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ka]||a[Ut]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=rf(t);t!==null;){if(a=t[Ut])return a;t=rf(t)}return e}t=a,a=t.parentNode}return null}function Wa(t){if(t=t[Ut]||t[Ka]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Gi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(d(33))}function Fa(t){var e=t[Ls];return e||(e=t[Ls]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function kt(t){t[Li]=!0}var Gs=new Set,_s={};function Ma(t,e){Ia(t,e),Ia(t+"Capture",e)}function Ia(t,e){for(_s[t]=e,t=0;t<e.length;t++)Gs.add(e[t])}var u0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qs={},Ys={};function c0(t){return ir.call(Ys,t)?!0:ir.call(qs,t)?!1:u0.test(t)?Ys[t]=!0:(qs[t]=!0,!1)}function Gn(t,e,a){if(c0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function _n(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Oe(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}function ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d0(t,e,a){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,l=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,l.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function dr(t){if(!t._valueTracker){var e=Qs(t)?"checked":"value";t._valueTracker=d0(t,e,""+t[e])}}function Xs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=Qs(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function qn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var f0=/[\n"\\]/g;function de(t){return t.replace(f0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function fr(t,e,a,i,n,l,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ce(e)):t.value!==""+ce(e)&&(t.value=""+ce(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?pr(t,r,ce(e)):a!=null?pr(t,r,ce(a)):i!=null&&t.removeAttribute("value"),n==null&&l!=null&&(t.defaultChecked=!!l),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+ce(o):t.removeAttribute("name")}function Vs(t,e,a,i,n,l,r,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){dr(t);return}a=a!=null?""+ce(a):"",e=e!=null?""+ce(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),dr(t)}function pr(t,e,a){e==="number"&&qn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Pa(t,e,a,i){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&i&&(t[a].defaultSelected=!0)}else{for(a=""+ce(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function $s(t,e,a){if(e!=null&&(e=""+ce(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ce(a):""}function Zs(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(d(92));if(He(i)){if(1<i.length)throw Error(d(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=ce(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i),dr(t)}function ti(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var p0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ks(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||p0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Js(t,e,a){if(e!=null&&typeof e!="object")throw Error(d(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var n in e)i=e[n],e.hasOwnProperty(n)&&a[n]!==i&&Ks(t,n,i)}else for(var l in e)e.hasOwnProperty(l)&&Ks(t,l,e[l])}function gr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var g0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),m0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yn(t){return m0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Be(){}var mr=null;function hr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ei=null,ai=null;function Ws(t){var e=Wa(t);if(e&&(t=e.stateNode)){var a=t[Qt]||null;t:switch(t=e.stateNode,e.type){case"input":if(fr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var n=i[Qt]||null;if(!n)throw Error(d(90));fr(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&Xs(i)}break t;case"textarea":$s(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Pa(t,!!a.multiple,e,!1)}}}var br=!1;function Fs(t,e,a){if(br)return t(e,a);br=!0;try{var i=t(e);return i}finally{if(br=!1,(ei!==null||ai!==null)&&(Cl(),ei&&(e=ei,t=ai,ai=ei=null,Ws(e),t)))for(e=0;e<t.length;e++)Ws(t[e])}}function _i(t,e){var a=t.stateNode;if(a===null)return null;var i=a[Qt]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(d(231,e,typeof a));return a}var Ue=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vr=!1;if(Ue)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){vr=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{vr=!1}var aa=null,yr=null,Qn=null;function Is(){if(Qn)return Qn;var t,e=yr,a=e.length,i,n="value"in aa?aa.value:aa.textContent,l=n.length;for(t=0;t<a&&e[t]===n[t];t++);var r=a-t;for(i=1;i<=r&&e[a-i]===n[l-i];i++);return Qn=n.slice(t,1<i?1-i:void 0)}function Xn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vn(){return!0}function Ps(){return!1}function Xt(t){function e(a,i,n,l,r){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Vn:Ps,this.isPropagationStopped=Ps,this}return C(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){},isPersistent:Vn}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=Xt(Ca),Yi=C({},Ca,{view:0,detail:0}),h0=Xt(Yi),xr,Sr,Qi,Zn=C({},Yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qi&&(Qi&&t.type==="mousemove"?(xr=t.screenX-Qi.screenX,Sr=t.screenY-Qi.screenY):Sr=xr=0,Qi=t),xr)},movementY:function(t){return"movementY"in t?t.movementY:Sr}}),tu=Xt(Zn),b0=C({},Zn,{dataTransfer:0}),v0=Xt(b0),y0=C({},Yi,{relatedTarget:0}),wr=Xt(y0),x0=C({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),S0=Xt(x0),w0=C({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=Xt(w0),A0=C({},Ca,{data:0}),eu=Xt(A0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j0[t])?!!e[t]:!1}function zr(){return M0}var C0=C({},Yi,{key:function(t){if(t.key){var e=T0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zr,charCode:function(t){return t.type==="keypress"?Xn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D0=Xt(C0),k0=C({},Zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),au=Xt(k0),H0=C({},Yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zr}),O0=Xt(H0),B0=C({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=Xt(B0),N0=C({},Zn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=Xt(N0),L0=C({},Ca,{newState:0,oldState:0}),G0=Xt(L0),_0=[9,13,27,32],Ar=Ue&&"CompositionEvent"in window,Xi=null;Ue&&"documentMode"in document&&(Xi=document.documentMode);var q0=Ue&&"TextEvent"in window&&!Xi,iu=Ue&&(!Ar||Xi&&8<Xi&&11>=Xi),nu=" ",lu=!1;function ru(t,e){switch(t){case"keyup":return _0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ou(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ii=!1;function Y0(t,e){switch(t){case"compositionend":return ou(e);case"keypress":return e.which!==32?null:(lu=!0,nu);case"textInput":return t=e.data,t===nu&&lu?null:t;default:return null}}function Q0(t,e){if(ii)return t==="compositionend"||!Ar&&ru(t,e)?(t=Is(),Qn=yr=aa=null,ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iu&&e.locale!=="ko"?null:e.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X0[t.type]:e==="textarea"}function uu(t,e,a,i){ei?ai?ai.push(i):ai=[i]:ei=i,e=Nl(e,"onChange"),0<e.length&&(a=new $n("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Vi=null,$i=null;function V0(t){Vd(t,0)}function Kn(t){var e=Gi(t);if(Xs(e))return t}function cu(t,e){if(t==="change")return e}var du=!1;if(Ue){var Tr;if(Ue){var Er="oninput"in document;if(!Er){var fu=document.createElement("div");fu.setAttribute("oninput","return;"),Er=typeof fu.oninput=="function"}Tr=Er}else Tr=!1;du=Tr&&(!document.documentMode||9<document.documentMode)}function pu(){Vi&&(Vi.detachEvent("onpropertychange",gu),$i=Vi=null)}function gu(t){if(t.propertyName==="value"&&Kn($i)){var e=[];uu(e,$i,t,hr(t)),Fs(V0,e)}}function $0(t,e,a){t==="focusin"?(pu(),Vi=e,$i=a,Vi.attachEvent("onpropertychange",gu)):t==="focusout"&&pu()}function Z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kn($i)}function K0(t,e){if(t==="click")return Kn(e)}function J0(t,e){if(t==="input"||t==="change")return Kn(e)}function W0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var te=typeof Object.is=="function"?Object.is:W0;function Zi(t,e){if(te(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!ir.call(e,n)||!te(t[n],e[n]))return!1}return!0}function mu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hu(t,e){var a=mu(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=mu(a)}}function bu(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bu(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vu(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=qn(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=qn(t.document)}return e}function jr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var F0=Ue&&"documentMode"in document&&11>=document.documentMode,ni=null,Mr=null,Ki=null,Cr=!1;function yu(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cr||ni==null||ni!==qn(i)||(i=ni,"selectionStart"in i&&jr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ki&&Zi(Ki,i)||(Ki=i,i=Nl(Mr,"onSelect"),0<i.length&&(e=new $n("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=ni)))}function Da(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var li={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Dr={},xu={};Ue&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function ka(t){if(Dr[t])return Dr[t];if(!li[t])return t;var e=li[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in xu)return Dr[t]=e[a];return t}var Su=ka("animationend"),wu=ka("animationiteration"),zu=ka("animationstart"),I0=ka("transitionrun"),P0=ka("transitionstart"),tp=ka("transitioncancel"),Au=ka("transitionend"),Tu=new Map,kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kr.push("scrollEnd");function Ae(t,e){Tu.set(t,e),Ma(e,[t])}var Jn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fe=[],ri=0,Hr=0;function Wn(){for(var t=ri,e=Hr=ri=0;e<t;){var a=fe[e];fe[e++]=null;var i=fe[e];fe[e++]=null;var n=fe[e];fe[e++]=null;var l=fe[e];if(fe[e++]=null,i!==null&&n!==null){var r=i.pending;r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n}l!==0&&Eu(a,n,l)}}function Fn(t,e,a,i){fe[ri++]=t,fe[ri++]=e,fe[ri++]=a,fe[ri++]=i,Hr|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Or(t,e,a,i){return Fn(t,e,a,i),In(t)}function Ha(t,e){return Fn(t,null,null,e),In(t)}function Eu(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var n=!1,l=t.return;l!==null;)l.childLanes|=a,i=l.alternate,i!==null&&(i.childLanes|=a),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(n=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,n&&e!==null&&(n=31-Pt(a),t=l.hiddenUpdates,i=t[n],i===null?t[n]=[e]:i.push(e),e.lane=a|536870912),l):null}function In(t){if(50<bn)throw bn=0,Qo=null,Error(d(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var oi={};function ep(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ee(t,e,a,i){return new ep(t,e,a,i)}function Br(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ne(t,e){var a=t.alternate;return a===null?(a=ee(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ju(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Pn(t,e,a,i,n,l){var r=0;if(i=t,typeof t=="function")Br(t)&&(r=1);else if(typeof t=="string")r=rg(t,a,Dt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Va:return t=ee(31,a,e,n),t.elementType=Va,t.lanes=l,t;case Ct:return Oa(a.children,n,l,e);case Se:r=8,n|=24;break;case bt:return t=ee(12,a,e,n|2),t.elementType=bt,t.lanes=l,t;case Bt:return t=ee(13,a,e,n),t.elementType=Bt,t.lanes=l,t;case se:return t=ee(19,a,e,n),t.elementType=se,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dt:r=10;break t;case rt:r=9;break t;case jt:r=11;break t;case we:r=14;break t;case ze:r=16,i=null;break t}r=29,a=Error(d(130,t===null?"null":typeof t,"")),i=null}return e=ee(r,a,e,n),e.elementType=t,e.type=i,e.lanes=l,e}function Oa(t,e,a,i){return t=ee(7,t,i,e),t.lanes=a,t}function Ur(t,e,a){return t=ee(6,t,null,e),t.lanes=a,t}function Mu(t){var e=ee(18,null,null,0);return e.stateNode=t,e}function Nr(t,e,a){return e=ee(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Cu=new WeakMap;function pe(t,e){if(typeof t=="object"&&t!==null){var a=Cu.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Ms(e)},Cu.set(t,e),e)}return{value:t,source:e,stack:Ms(e)}}var si=[],ui=0,tl=null,Ji=0,ge=[],me=0,ia=null,Me=1,Ce="";function Re(t,e){si[ui++]=Ji,si[ui++]=tl,tl=t,Ji=e}function Du(t,e,a){ge[me++]=Me,ge[me++]=Ce,ge[me++]=ia,ia=t;var i=Me;t=Ce;var n=32-Pt(i)-1;i&=~(1<<n),a+=1;var l=32-Pt(e)+n;if(30<l){var r=n-n%5;l=(i&(1<<r)-1).toString(32),i>>=r,n-=r,Me=1<<32-Pt(e)+n|a<<n|i,Ce=l+t}else Me=1<<l|a<<n|i,Ce=t}function Rr(t){t.return!==null&&(Re(t,1),Du(t,1,0))}function Lr(t){for(;t===tl;)tl=si[--ui],si[ui]=null,Ji=si[--ui],si[ui]=null;for(;t===ia;)ia=ge[--me],ge[me]=null,Ce=ge[--me],ge[me]=null,Me=ge[--me],ge[me]=null}function ku(t,e){ge[me++]=Me,ge[me++]=Ce,ge[me++]=ia,Me=e.id,Ce=e.overflow,ia=t}var Nt=null,gt=null,Z=!1,na=null,he=!1,Gr=Error(d(519));function la(t){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wi(pe(e,t)),Gr}function Hu(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[Ut]=t,e[Qt]=i,a){case"dialog":Q("cancel",e),Q("close",e);break;case"iframe":case"object":case"embed":Q("load",e);break;case"video":case"audio":for(a=0;a<yn.length;a++)Q(yn[a],e);break;case"source":Q("error",e);break;case"img":case"image":case"link":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"input":Q("invalid",e),Vs(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Q("invalid",e);break;case"textarea":Q("invalid",e),Zs(e,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||Jd(e.textContent,a)?(i.popover!=null&&(Q("beforetoggle",e),Q("toggle",e)),i.onScroll!=null&&Q("scroll",e),i.onScrollEnd!=null&&Q("scrollend",e),i.onClick!=null&&(e.onclick=Be),e=!0):e=!1,e||la(t,!0)}function Ou(t){for(Nt=t.return;Nt;)switch(Nt.tag){case 5:case 31:case 13:he=!1;return;case 27:case 3:he=!0;return;default:Nt=Nt.return}}function ci(t){if(t!==Nt)return!1;if(!Z)return Ou(t),Z=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ns(t.type,t.memoizedProps)),a=!a),a&&gt&&la(t),Ou(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));gt=lf(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));gt=lf(t)}else e===27?(e=gt,ya(t.type)?(t=us,us=null,gt=t):gt=e):gt=Nt?ve(t.stateNode.nextSibling):null;return!0}function Ba(){gt=Nt=null,Z=!1}function _r(){var t=na;return t!==null&&(Kt===null?Kt=t:Kt.push.apply(Kt,t),na=null),t}function Wi(t){na===null?na=[t]:na.push(t)}var qr=qt(null),Ua=null,Le=null;function ra(t,e,a){tt(qr,e._currentValue),e._currentValue=a}function Ge(t){t._currentValue=qr.current,vt(qr)}function Yr(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function Qr(t,e,a,i){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var l=n.dependencies;if(l!==null){var r=n.child;l=l.firstContext;t:for(;l!==null;){var o=l;l=n;for(var c=0;c<e.length;c++)if(o.context===e[c]){l.lanes|=a,o=l.alternate,o!==null&&(o.lanes|=a),Yr(l.return,a,t),i||(r=null);break t}l=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(d(341));r.lanes|=a,l=r.alternate,l!==null&&(l.lanes|=a),Yr(r,a,t),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function di(t,e,a,i){t=null;for(var n=e,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(d(387));if(r=r.memoizedProps,r!==null){var o=n.type;te(n.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(n===kn.current){if(r=n.alternate,r===null)throw Error(d(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(An):t=[An])}n=n.return}t!==null&&Qr(e,t,a,i),e.flags|=262144}function el(t){for(t=t.firstContext;t!==null;){if(!te(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Na(t){Ua=t,Le=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rt(t){return Bu(Ua,t)}function al(t,e){return Ua===null&&Na(t),Bu(t,e)}function Bu(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Le===null){if(t===null)throw Error(d(308));Le=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Le=Le.next=e;return a}var ap=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},ip=u.unstable_scheduleCallback,np=u.unstable_NormalPriority,zt={$$typeof:dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xr(){return{controller:new ap,data:new Map,refCount:0}}function Fi(t){t.refCount--,t.refCount===0&&ip(np,function(){t.controller.abort()})}var Ii=null,Vr=0,fi=0,pi=null;function lp(t,e){if(Ii===null){var a=Ii=[];Vr=0,fi=Jo(),pi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Vr++,e.then(Uu,Uu),e}function Uu(){if(--Vr===0&&Ii!==null){pi!==null&&(pi.status="fulfilled");var t=Ii;Ii=null,fi=0,pi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function rp(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var Nu=z.S;z.S=function(t,e){yd=Ft(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&lp(t,e),Nu!==null&&Nu(t,e)};var Ra=qt(null);function $r(){var t=Ra.current;return t!==null?t:ot.pooledCache}function il(t,e){e===null?tt(Ra,Ra.current):tt(Ra,e.pool)}function Ru(){var t=$r();return t===null?null:{parent:zt._currentValue,pool:t}}var gi=Error(d(460)),Zr=Error(d(474)),nl=Error(d(542)),ll={then:function(){}};function Lu(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gu(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Be,Be),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qu(t),t;default:if(typeof e.status=="string")e.then(Be,Be);else{if(t=ot,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=i}},function(i){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qu(t),t}throw Ga=e,gi}}function La(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ga=a,gi):a}}var Ga=null;function _u(){if(Ga===null)throw Error(d(459));var t=Ga;return Ga=null,t}function qu(t){if(t===gi||t===nl)throw Error(d(483))}var mi=null,Pi=0;function rl(t){var e=Pi;return Pi+=1,mi===null&&(mi=[]),Gu(mi,t,e)}function tn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ol(t,e){throw e.$$typeof===P?Error(d(525)):(t=Object.prototype.toString.call(e),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Yu(t){function e(g,f){if(t){var m=g.deletions;m===null?(g.deletions=[f],g.flags|=16):m.push(f)}}function a(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function i(g){for(var f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function n(g,f){return g=Ne(g,f),g.index=0,g.sibling=null,g}function l(g,f,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<f?(g.flags|=67108866,f):m):(g.flags|=67108866,f)):(g.flags|=1048576,f)}function r(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function o(g,f,m,S){return f===null||f.tag!==6?(f=Ur(m,g.mode,S),f.return=g,f):(f=n(f,m),f.return=g,f)}function c(g,f,m,S){var U=m.type;return U===Ct?x(g,f,m.props.children,S,m.key):f!==null&&(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ze&&La(U)===f.type)?(f=n(f,m.props),tn(f,m),f.return=g,f):(f=Pn(m.type,m.key,m.props,null,g.mode,S),tn(f,m),f.return=g,f)}function h(g,f,m,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Nr(m,g.mode,S),f.return=g,f):(f=n(f,m.children||[]),f.return=g,f)}function x(g,f,m,S,U){return f===null||f.tag!==7?(f=Oa(m,g.mode,S,U),f.return=g,f):(f=n(f,m),f.return=g,f)}function A(g,f,m){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Ur(""+f,g.mode,m),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _t:return m=Pn(f.type,f.key,f.props,null,g.mode,m),tn(m,f),m.return=g,m;case q:return f=Nr(f,g.mode,m),f.return=g,f;case ze:return f=La(f),A(g,f,m)}if(He(f)||ue(f))return f=Oa(f,g.mode,m,null),f.return=g,f;if(typeof f.then=="function")return A(g,rl(f),m);if(f.$$typeof===dt)return A(g,al(g,f),m);ol(g,f)}return null}function b(g,f,m,S){var U=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return U!==null?null:o(g,f,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _t:return m.key===U?c(g,f,m,S):null;case q:return m.key===U?h(g,f,m,S):null;case ze:return m=La(m),b(g,f,m,S)}if(He(m)||ue(m))return U!==null?null:x(g,f,m,S,null);if(typeof m.then=="function")return b(g,f,rl(m),S);if(m.$$typeof===dt)return b(g,f,al(g,m),S);ol(g,m)}return null}function y(g,f,m,S,U){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return g=g.get(m)||null,o(f,g,""+S,U);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _t:return g=g.get(S.key===null?m:S.key)||null,c(f,g,S,U);case q:return g=g.get(S.key===null?m:S.key)||null,h(f,g,S,U);case ze:return S=La(S),y(g,f,m,S,U)}if(He(S)||ue(S))return g=g.get(m)||null,x(f,g,S,U,null);if(typeof S.then=="function")return y(g,f,m,rl(S),U);if(S.$$typeof===dt)return y(g,f,m,al(f,S),U);ol(f,S)}return null}function k(g,f,m,S){for(var U=null,J=null,H=f,_=f=0,V=null;H!==null&&_<m.length;_++){H.index>_?(V=H,H=null):V=H.sibling;var W=b(g,H,m[_],S);if(W===null){H===null&&(H=V);break}t&&H&&W.alternate===null&&e(g,H),f=l(W,f,_),J===null?U=W:J.sibling=W,J=W,H=V}if(_===m.length)return a(g,H),Z&&Re(g,_),U;if(H===null){for(;_<m.length;_++)H=A(g,m[_],S),H!==null&&(f=l(H,f,_),J===null?U=H:J.sibling=H,J=H);return Z&&Re(g,_),U}for(H=i(H);_<m.length;_++)V=y(H,g,_,m[_],S),V!==null&&(t&&V.alternate!==null&&H.delete(V.key===null?_:V.key),f=l(V,f,_),J===null?U=V:J.sibling=V,J=V);return t&&H.forEach(function(Aa){return e(g,Aa)}),Z&&Re(g,_),U}function N(g,f,m,S){if(m==null)throw Error(d(151));for(var U=null,J=null,H=f,_=f=0,V=null,W=m.next();H!==null&&!W.done;_++,W=m.next()){H.index>_?(V=H,H=null):V=H.sibling;var Aa=b(g,H,W.value,S);if(Aa===null){H===null&&(H=V);break}t&&H&&Aa.alternate===null&&e(g,H),f=l(Aa,f,_),J===null?U=Aa:J.sibling=Aa,J=Aa,H=V}if(W.done)return a(g,H),Z&&Re(g,_),U;if(H===null){for(;!W.done;_++,W=m.next())W=A(g,W.value,S),W!==null&&(f=l(W,f,_),J===null?U=W:J.sibling=W,J=W);return Z&&Re(g,_),U}for(H=i(H);!W.done;_++,W=m.next())W=y(H,g,_,W.value,S),W!==null&&(t&&W.alternate!==null&&H.delete(W.key===null?_:W.key),f=l(W,f,_),J===null?U=W:J.sibling=W,J=W);return t&&H.forEach(function(bg){return e(g,bg)}),Z&&Re(g,_),U}function lt(g,f,m,S){if(typeof m=="object"&&m!==null&&m.type===Ct&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case _t:t:{for(var U=m.key;f!==null;){if(f.key===U){if(U=m.type,U===Ct){if(f.tag===7){a(g,f.sibling),S=n(f,m.props.children),S.return=g,g=S;break t}}else if(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ze&&La(U)===f.type){a(g,f.sibling),S=n(f,m.props),tn(S,m),S.return=g,g=S;break t}a(g,f);break}else e(g,f);f=f.sibling}m.type===Ct?(S=Oa(m.props.children,g.mode,S,m.key),S.return=g,g=S):(S=Pn(m.type,m.key,m.props,null,g.mode,S),tn(S,m),S.return=g,g=S)}return r(g);case q:t:{for(U=m.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){a(g,f.sibling),S=n(f,m.children||[]),S.return=g,g=S;break t}else{a(g,f);break}else e(g,f);f=f.sibling}S=Nr(m,g.mode,S),S.return=g,g=S}return r(g);case ze:return m=La(m),lt(g,f,m,S)}if(He(m))return k(g,f,m,S);if(ue(m)){if(U=ue(m),typeof U!="function")throw Error(d(150));return m=U.call(m),N(g,f,m,S)}if(typeof m.then=="function")return lt(g,f,rl(m),S);if(m.$$typeof===dt)return lt(g,f,al(g,m),S);ol(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,f!==null&&f.tag===6?(a(g,f.sibling),S=n(f,m),S.return=g,g=S):(a(g,f),S=Ur(m,g.mode,S),S.return=g,g=S),r(g)):a(g,f)}return function(g,f,m,S){try{Pi=0;var U=lt(g,f,m,S);return mi=null,U}catch(H){if(H===gi||H===nl)throw H;var J=ee(29,H,null,g.mode);return J.lanes=S,J.return=g,J}finally{}}}var _a=Yu(!0),Qu=Yu(!1),oa=!1;function Kr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ua(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(I&2)!==0){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,e=In(t),Eu(t,null,a),e}return Fn(t,i,e,a),In(t)}function en(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,Bs(t,a)}}function Wr(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?n=l=r:l=l.next=r,a=a.next}while(a!==null);l===null?n=l=e:l=l.next=e}else n=l=e;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Fr=!1;function an(){if(Fr){var t=pi;if(t!==null)throw t}}function nn(t,e,a,i){Fr=!1;var n=t.updateQueue;oa=!1;var l=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var c=o,h=c.next;c.next=null,r===null?l=h:r.next=h,r=c;var x=t.alternate;x!==null&&(x=x.updateQueue,o=x.lastBaseUpdate,o!==r&&(o===null?x.firstBaseUpdate=h:o.next=h,x.lastBaseUpdate=c))}if(l!==null){var A=n.baseState;r=0,x=h=c=null,o=l;do{var b=o.lane&-536870913,y=b!==o.lane;if(y?(X&b)===b:(i&b)===b){b!==0&&b===fi&&(Fr=!0),x!==null&&(x=x.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var k=t,N=o;b=e;var lt=a;switch(N.tag){case 1:if(k=N.payload,typeof k=="function"){A=k.call(lt,A,b);break t}A=k;break t;case 3:k.flags=k.flags&-65537|128;case 0:if(k=N.payload,b=typeof k=="function"?k.call(lt,A,b):k,b==null)break t;A=C({},A,b);break t;case 2:oa=!0}}b=o.callback,b!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[b]:y.push(b))}else y={lane:b,tag:o.tag,payload:o.payload,callback:o.callback,next:null},x===null?(h=x=y,c=A):x=x.next=y,r|=b;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;y=o,o=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);x===null&&(c=A),n.baseState=c,n.firstBaseUpdate=h,n.lastBaseUpdate=x,l===null&&(n.shared.lanes=0),ga|=r,t.lanes=r,t.memoizedState=A}}function Xu(t,e){if(typeof t!="function")throw Error(d(191,t));t.call(e)}function Vu(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Xu(a[t],e)}var hi=qt(null),sl=qt(0);function $u(t,e){t=Ke,tt(sl,t),tt(hi,e),Ke=t|e.baseLanes}function Ir(){tt(sl,Ke),tt(hi,hi.current)}function Pr(){Ke=sl.current,vt(hi),vt(sl)}var ae=qt(null),be=null;function ca(t){var e=t.alternate;tt(St,St.current&1),tt(ae,t),be===null&&(e===null||hi.current!==null||e.memoizedState!==null)&&(be=t)}function to(t){tt(St,St.current),tt(ae,t),be===null&&(be=t)}function Zu(t){t.tag===22?(tt(St,St.current),tt(ae,t),be===null&&(be=t)):da()}function da(){tt(St,St.current),tt(ae,ae.current)}function ie(t){vt(ae),be===t&&(be=null),vt(St)}var St=qt(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||os(a)||ss(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _e=0,G=null,it=null,At=null,cl=!1,bi=!1,qa=!1,dl=0,ln=0,vi=null,op=0;function yt(){throw Error(d(321))}function eo(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!te(t[a],e[a]))return!1;return!0}function ao(t,e,a,i,n,l){return _e=l,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?Dc:vo,qa=!1,l=a(i,n),qa=!1,bi&&(l=Ju(e,a,i,n)),Ku(t),l}function Ku(t){z.H=sn;var e=it!==null&&it.next!==null;if(_e=0,At=it=G=null,cl=!1,ln=0,vi=null,e)throw Error(d(300));t===null||Tt||(t=t.dependencies,t!==null&&el(t)&&(Tt=!0))}function Ju(t,e,a,i){G=t;var n=0;do{if(bi&&(vi=null),ln=0,bi=!1,25<=n)throw Error(d(301));if(n+=1,At=it=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}z.H=kc,l=e(a,i)}while(bi);return l}function sp(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?rn(e):e,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(G.flags|=1024),e}function io(){var t=dl!==0;return dl=0,t}function no(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function lo(t){if(cl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}cl=!1}_e=0,At=it=G=null,bi=!1,ln=dl=0,vi=null}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?G.memoizedState=At=t:At=At.next=t,At}function wt(){if(it===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=At===null?G.memoizedState:At.next;if(e!==null)At=e,it=t;else{if(t===null)throw G.alternate===null?Error(d(467)):Error(d(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},At===null?G.memoizedState=At=t:At=At.next=t}return At}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rn(t){var e=ln;return ln+=1,vi===null&&(vi=[]),t=Gu(vi,t,e),e=G,(At===null?e.memoizedState:At.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?Dc:vo),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return rn(t);if(t.$$typeof===dt)return Rt(t)}throw Error(d(438,String(t)))}function ro(t){var e=null,a=G.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=G.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=fl(),G.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=Cn;return e.index++,a}function qe(t,e){return typeof e=="function"?e(t):e}function gl(t){var e=wt();return oo(e,it,t)}function oo(t,e,a){var i=t.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=a;var n=t.baseQueue,l=i.pending;if(l!==null){if(n!==null){var r=n.next;n.next=l.next,l.next=r}e.baseQueue=n=l,i.pending=null}if(l=t.baseState,n===null)t.memoizedState=l;else{e=n.next;var o=r=null,c=null,h=e,x=!1;do{var A=h.lane&-536870913;if(A!==h.lane?(X&A)===A:(_e&A)===A){var b=h.revertLane;if(b===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),A===fi&&(x=!0);else if((_e&b)===b){h=h.next,b===fi&&(x=!0);continue}else A={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(o=c=A,r=l):c=c.next=A,G.lanes|=b,ga|=b;A=h.action,qa&&a(l,A),l=h.hasEagerState?h.eagerState:a(l,A)}else b={lane:A,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(o=c=b,r=l):c=c.next=b,G.lanes|=A,ga|=A;h=h.next}while(h!==null&&h!==e);if(c===null?r=l:c.next=o,!te(l,t.memoizedState)&&(Tt=!0,x&&(a=pi,a!==null)))throw a;t.memoizedState=l,t.baseState=r,t.baseQueue=c,i.lastRenderedState=l}return n===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function so(t){var e=wt(),a=e.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var i=a.dispatch,n=a.pending,l=e.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do l=t(l,r.action),r=r.next;while(r!==n);te(l,e.memoizedState)||(Tt=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),a.lastRenderedState=l}return[l,i]}function Wu(t,e,a){var i=G,n=wt(),l=Z;if(l){if(a===void 0)throw Error(d(407));a=a()}else a=e();var r=!te((it||n).memoizedState,a);if(r&&(n.memoizedState=a,Tt=!0),n=n.queue,fo(Pu.bind(null,i,n,t),[t]),n.getSnapshot!==e||r||At!==null&&At.memoizedState.tag&1){if(i.flags|=2048,yi(9,{destroy:void 0},Iu.bind(null,i,n,a,e),null),ot===null)throw Error(d(349));l||(_e&127)!==0||Fu(i,e,a)}return a}function Fu(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=G.updateQueue,e===null?(e=fl(),G.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Iu(t,e,a,i){e.value=a,e.getSnapshot=i,tc(e)&&ec(t)}function Pu(t,e,a){return a(function(){tc(e)&&ec(t)})}function tc(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!te(t,a)}catch{return!0}}function ec(t){var e=Ha(t,2);e!==null&&Jt(e,t,2)}function uo(t){var e=Yt();if(typeof t=="function"){var a=t;if(t=a(),qa){ta(!0);try{a()}finally{ta(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qe,lastRenderedState:t},e}function ac(t,e,a,i){return t.baseState=a,oo(t,it,typeof i=="function"?i:qe)}function up(t,e,a,i,n){if(bl(t))throw Error(d(485));if(t=e.action,t!==null){var l={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};z.T!==null?a(!0):l.isTransition=!1,i(l),a=e.pending,a===null?(l.next=e.pending=l,ic(e,l)):(l.next=a.next,e.pending=a.next=l)}}function ic(t,e){var a=e.action,i=e.payload,n=t.state;if(e.isTransition){var l=z.T,r={};z.T=r;try{var o=a(n,i),c=z.S;c!==null&&c(r,o),nc(t,e,o)}catch(h){co(t,e,h)}finally{l!==null&&r.types!==null&&(l.types=r.types),z.T=l}}else try{l=a(n,i),nc(t,e,l)}catch(h){co(t,e,h)}}function nc(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){lc(t,e,i)},function(i){return co(t,e,i)}):lc(t,e,a)}function lc(t,e,a){e.status="fulfilled",e.value=a,rc(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,ic(t,a)))}function co(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,rc(e),e=e.next;while(e!==i)}t.action=null}function rc(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function oc(t,e){return e}function sc(t,e){if(Z){var a=ot.formState;if(a!==null){t:{var i=G;if(Z){if(gt){e:{for(var n=gt,l=he;n.nodeType!==8;){if(!l){n=null;break e}if(n=ve(n.nextSibling),n===null){n=null;break e}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){gt=ve(n.nextSibling),i=n.data==="F!";break t}}la(i)}i=!1}i&&(e=a[0])}}return a=Yt(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oc,lastRenderedState:e},a.queue=i,a=jc.bind(null,G,i),i.dispatch=a,i=uo(!1),l=bo.bind(null,G,!1,i.queue),i=Yt(),n={state:e,dispatch:null,action:t,pending:null},i.queue=n,a=up.bind(null,G,n,l,a),n.dispatch=a,i.memoizedState=t,[e,a,!1]}function uc(t){var e=wt();return cc(e,it,t)}function cc(t,e,a){if(e=oo(t,e,oc)[0],t=gl(qe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=rn(e)}catch(r){throw r===gi?nl:r}else i=e;e=wt();var n=e.queue,l=n.dispatch;return a!==e.memoizedState&&(G.flags|=2048,yi(9,{destroy:void 0},cp.bind(null,n,a),null)),[i,l,t]}function cp(t,e){t.action=e}function dc(t){var e=wt(),a=it;if(a!==null)return cc(e,a,t);wt(),e=e.memoizedState,a=wt();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function yi(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=G.updateQueue,e===null&&(e=fl(),G.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function fc(){return wt().memoizedState}function ml(t,e,a,i){var n=Yt();G.flags|=t,n.memoizedState=yi(1|e,{destroy:void 0},a,i===void 0?null:i)}function hl(t,e,a,i){var n=wt();i=i===void 0?null:i;var l=n.memoizedState.inst;it!==null&&i!==null&&eo(i,it.memoizedState.deps)?n.memoizedState=yi(e,l,a,i):(G.flags|=t,n.memoizedState=yi(1|e,l,a,i))}function pc(t,e){ml(8390656,8,t,e)}function fo(t,e){hl(2048,8,t,e)}function dp(t){G.flags|=4;var e=G.updateQueue;if(e===null)e=fl(),G.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function gc(t){var e=wt().memoizedState;return dp({ref:e,nextImpl:t}),function(){if((I&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function mc(t,e){return hl(4,2,t,e)}function hc(t,e){return hl(4,4,t,e)}function bc(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vc(t,e,a){a=a!=null?a.concat([t]):null,hl(4,4,bc.bind(null,e,t),a)}function po(){}function yc(t,e){var a=wt();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&eo(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function xc(t,e){var a=wt();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&eo(e,i[1]))return i[0];if(i=t(),qa){ta(!0);try{t()}finally{ta(!1)}}return a.memoizedState=[i,e],i}function go(t,e,a){return a===void 0||(_e&1073741824)!==0&&(X&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Sd(),G.lanes|=t,ga|=t,a)}function Sc(t,e,a,i){return te(a,e)?a:hi.current!==null?(t=go(t,a,i),te(t,e)||(Tt=!0),t):(_e&42)===0||(_e&1073741824)!==0&&(X&261930)===0?(Tt=!0,t.memoizedState=a):(t=Sd(),G.lanes|=t,ga|=t,e)}function wc(t,e,a,i,n){var l=D.p;D.p=l!==0&&8>l?l:8;var r=z.T,o={};z.T=o,bo(t,!1,e,a);try{var c=n(),h=z.S;if(h!==null&&h(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var x=rp(c,i);on(t,e,x,re(t))}else on(t,e,i,re(t))}catch(A){on(t,e,{then:function(){},status:"rejected",reason:A},re())}finally{D.p=l,r!==null&&o.types!==null&&(r.types=o.types),z.T=r}}function fp(){}function mo(t,e,a,i){if(t.tag!==5)throw Error(d(476));var n=zc(t).queue;wc(t,n,e,R,a===null?fp:function(){return Ac(t),a(i)})}function zc(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qe,lastRenderedState:R},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qe,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ac(t){var e=zc(t);e.next===null&&(e=t.alternate.memoizedState),on(t,e.next.queue,{},re())}function ho(){return Rt(An)}function Tc(){return wt().memoizedState}function Ec(){return wt().memoizedState}function pp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=re();t=sa(a);var i=ua(e,t,a);i!==null&&(Jt(i,e,a),en(i,e,a)),e={cache:Xr()},t.payload=e;return}e=e.return}}function gp(t,e,a){var i=re();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(t)?Mc(e,a):(a=Or(t,e,a,i),a!==null&&(Jt(a,t,i),Cc(a,e,i)))}function jc(t,e,a){var i=re();on(t,e,a,i)}function on(t,e,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(t))Mc(e,n);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var r=e.lastRenderedState,o=l(r,a);if(n.hasEagerState=!0,n.eagerState=o,te(o,r))return Fn(t,e,n,0),ot===null&&Wn(),!1}catch{}finally{}if(a=Or(t,e,n,i),a!==null)return Jt(a,t,i),Cc(a,e,i),!0}return!1}function bo(t,e,a,i){if(i={lane:2,revertLane:Jo(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},bl(t)){if(e)throw Error(d(479))}else e=Or(t,a,i,2),e!==null&&Jt(e,t,2)}function bl(t){var e=t.alternate;return t===G||e!==null&&e===G}function Mc(t,e){bi=cl=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Cc(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,Bs(t,a)}}var sn={readContext:Rt,use:pl,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt};sn.useEffectEvent=yt;var Dc={readContext:Rt,use:pl,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Rt,useEffect:pc,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,ml(4194308,4,bc.bind(null,e,t),a)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){ml(4,2,t,e)},useMemo:function(t,e){var a=Yt();e=e===void 0?null:e;var i=t();if(qa){ta(!0);try{t()}finally{ta(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=Yt();if(a!==void 0){var n=a(e);if(qa){ta(!0);try{a(e)}finally{ta(!1)}}}else n=e;return i.memoizedState=i.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},i.queue=t,t=t.dispatch=gp.bind(null,G,t),[i.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:function(t){t=uo(t);var e=t.queue,a=jc.bind(null,G,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:po,useDeferredValue:function(t,e){var a=Yt();return go(a,t,e)},useTransition:function(){var t=uo(!1);return t=wc.bind(null,G,t.queue,!0,!1),Yt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=G,n=Yt();if(Z){if(a===void 0)throw Error(d(407));a=a()}else{if(a=e(),ot===null)throw Error(d(349));(X&127)!==0||Fu(i,e,a)}n.memoizedState=a;var l={value:a,getSnapshot:e};return n.queue=l,pc(Pu.bind(null,i,l,t),[t]),i.flags|=2048,yi(9,{destroy:void 0},Iu.bind(null,i,l,a,e),null),a},useId:function(){var t=Yt(),e=ot.identifierPrefix;if(Z){var a=Ce,i=Me;a=(i&~(1<<32-Pt(i)-1)).toString(32)+a,e="_"+e+"R_"+a,a=dl++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=op++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ho,useFormState:sc,useActionState:sc,useOptimistic:function(t){var e=Yt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=bo.bind(null,G,!0,a),a.dispatch=e,[t,e]},useMemoCache:ro,useCacheRefresh:function(){return Yt().memoizedState=pp.bind(null,G)},useEffectEvent:function(t){var e=Yt(),a={impl:t};return e.memoizedState=a,function(){if((I&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},vo={readContext:Rt,use:pl,useCallback:yc,useContext:Rt,useEffect:fo,useImperativeHandle:vc,useInsertionEffect:mc,useLayoutEffect:hc,useMemo:xc,useReducer:gl,useRef:fc,useState:function(){return gl(qe)},useDebugValue:po,useDeferredValue:function(t,e){var a=wt();return Sc(a,it.memoizedState,t,e)},useTransition:function(){var t=gl(qe)[0],e=wt().memoizedState;return[typeof t=="boolean"?t:rn(t),e]},useSyncExternalStore:Wu,useId:Tc,useHostTransitionStatus:ho,useFormState:uc,useActionState:uc,useOptimistic:function(t,e){var a=wt();return ac(a,it,t,e)},useMemoCache:ro,useCacheRefresh:Ec};vo.useEffectEvent=gc;var kc={readContext:Rt,use:pl,useCallback:yc,useContext:Rt,useEffect:fo,useImperativeHandle:vc,useInsertionEffect:mc,useLayoutEffect:hc,useMemo:xc,useReducer:so,useRef:fc,useState:function(){return so(qe)},useDebugValue:po,useDeferredValue:function(t,e){var a=wt();return it===null?go(a,t,e):Sc(a,it.memoizedState,t,e)},useTransition:function(){var t=so(qe)[0],e=wt().memoizedState;return[typeof t=="boolean"?t:rn(t),e]},useSyncExternalStore:Wu,useId:Tc,useHostTransitionStatus:ho,useFormState:dc,useActionState:dc,useOptimistic:function(t,e){var a=wt();return it!==null?ac(a,it,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ro,useCacheRefresh:Ec};kc.useEffectEvent=gc;function yo(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:C({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xo={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=re(),n=sa(i);n.payload=e,a!=null&&(n.callback=a),e=ua(t,n,i),e!==null&&(Jt(e,t,i),en(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=re(),n=sa(i);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=ua(t,n,i),e!==null&&(Jt(e,t,i),en(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=re(),i=sa(a);i.tag=2,e!=null&&(i.callback=e),e=ua(t,i,a),e!==null&&(Jt(e,t,a),en(e,t,a))}};function Hc(t,e,a,i,n,l,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,l,r):e.prototype&&e.prototype.isPureReactComponent?!Zi(a,i)||!Zi(n,l):!0}function Oc(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&xo.enqueueReplaceState(e,e.state,null)}function Ya(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=C({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Bc(t){Jn(t)}function Uc(t){console.error(t)}function Nc(t){Jn(t)}function vl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Rc(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function So(t,e,a){return a=sa(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(t,e)},a}function Lc(t){return t=sa(t),t.tag=3,t}function Gc(t,e,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var l=i.value;t.payload=function(){return n(l)},t.callback=function(){Rc(e,a,i)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Rc(e,a,i),typeof n!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function mp(t,e,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&di(e,a,n,!0),a=ae.current,a!==null){switch(a.tag){case 31:case 13:return be===null?Dl():a.alternate===null&&xt===0&&(xt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===ll?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),$o(t,i,n)),!1;case 22:return a.flags|=65536,i===ll?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),$o(t,i,n)),!1}throw Error(d(435,a.tag))}return $o(t,i,n),Dl(),!1}if(Z)return e=ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,i!==Gr&&(t=Error(d(422),{cause:i}),Wi(pe(t,a)))):(i!==Gr&&(e=Error(d(423),{cause:i}),Wi(pe(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,i=pe(i,a),n=So(t.stateNode,i,n),Wr(t,n),xt!==4&&(xt=2)),!1;var l=Error(d(520),{cause:i});if(l=pe(l,a),hn===null?hn=[l]:hn.push(l),xt!==4&&(xt=2),e===null)return!0;i=pe(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=So(a.stateNode,i,t),Wr(a,t),!1;case 1:if(e=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Lc(n),Gc(n,t,a,i),Wr(a,n),!1}a=a.return}while(a!==null);return!1}var wo=Error(d(461)),Tt=!1;function Lt(t,e,a,i){e.child=t===null?Qu(e,null,a,i):_a(e,t.child,a,i)}function _c(t,e,a,i,n){a=a.render;var l=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Na(e),i=ao(t,e,a,r,l,n),o=io(),t!==null&&!Tt?(no(t,e,n),Ye(t,e,n)):(Z&&o&&Rr(e),e.flags|=1,Lt(t,e,i,n),e.child)}function qc(t,e,a,i,n){if(t===null){var l=a.type;return typeof l=="function"&&!Br(l)&&l.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=l,Yc(t,e,l,i,n)):(t=Pn(a.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!Do(t,n)){var r=l.memoizedProps;if(a=a.compare,a=a!==null?a:Zi,a(r,i)&&t.ref===e.ref)return Ye(t,e,n)}return e.flags|=1,t=Ne(l,i),t.ref=e.ref,t.return=e,e.child=t}function Yc(t,e,a,i,n){if(t!==null){var l=t.memoizedProps;if(Zi(l,i)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=i=l,Do(t,n))(t.flags&131072)!==0&&(Tt=!0);else return e.lanes=t.lanes,Ye(t,e,n)}return zo(t,e,a,i,n)}function Qc(t,e,a,i){var n=i.children,l=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,t!==null){for(i=e.child=t.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~l}else i=0,e.child=null;return Xc(t,e,l,a,i)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(e,l!==null?l.cachePool:null),l!==null?$u(e,l):Ir(),Zu(e);else return i=e.lanes=536870912,Xc(t,e,l!==null?l.baseLanes|a:a,a,i)}else l!==null?(il(e,l.cachePool),$u(e,l),da(),e.memoizedState=null):(t!==null&&il(e,null),Ir(),da());return Lt(t,e,n,a),e.child}function un(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Xc(t,e,a,i,n){var l=$r();return l=l===null?null:{parent:zt._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&il(e,null),Ir(),Zu(e),t!==null&&di(t,e,i,!0),e.childLanes=n,null}function yl(t,e){return e=Sl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Vc(t,e,a){return _a(e,t.child,null,a),t=yl(e,e.pendingProps),t.flags|=2,ie(e),e.memoizedState=null,t}function hp(t,e,a){var i=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Z){if(i.mode==="hidden")return t=yl(e,i),e.lanes=536870912,un(null,t);if(to(e),(t=gt)?(t=nf(t,he),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ia!==null?{id:Me,overflow:Ce}:null,retryLane:536870912,hydrationErrors:null},a=Mu(t),a.return=e,e.child=a,Nt=e,gt=null)):t=null,t===null)throw la(e);return e.lanes=536870912,null}return yl(e,i)}var l=t.memoizedState;if(l!==null){var r=l.dehydrated;if(to(e),n)if(e.flags&256)e.flags&=-257,e=Vc(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(d(558));else if(Tt||di(t,e,a,!1),n=(a&t.childLanes)!==0,Tt||n){if(i=ot,i!==null&&(r=Us(i,a),r!==0&&r!==l.retryLane))throw l.retryLane=r,Ha(t,r),Jt(i,t,r),wo;Dl(),e=Vc(t,e,a)}else t=l.treeContext,gt=ve(r.nextSibling),Nt=e,Z=!0,na=null,he=!1,t!==null&&ku(e,t),e=yl(e,i),e.flags|=4096;return e}return t=Ne(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function xl(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function zo(t,e,a,i,n){return Na(e),a=ao(t,e,a,i,void 0,n),i=io(),t!==null&&!Tt?(no(t,e,n),Ye(t,e,n)):(Z&&i&&Rr(e),e.flags|=1,Lt(t,e,a,n),e.child)}function $c(t,e,a,i,n,l){return Na(e),e.updateQueue=null,a=Ju(e,i,a,n),Ku(t),i=io(),t!==null&&!Tt?(no(t,e,l),Ye(t,e,l)):(Z&&i&&Rr(e),e.flags|=1,Lt(t,e,a,l),e.child)}function Zc(t,e,a,i,n){if(Na(e),e.stateNode===null){var l=oi,r=a.contextType;typeof r=="object"&&r!==null&&(l=Rt(r)),l=new a(i,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=xo,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=i,l.state=e.memoizedState,l.refs={},Kr(e),r=a.contextType,l.context=typeof r=="object"&&r!==null?Rt(r):oi,l.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(yo(e,a,r,i),l.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&xo.enqueueReplaceState(l,l.state,null),nn(e,i,l,n),an(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){l=e.stateNode;var o=e.memoizedProps,c=Ya(a,o);l.props=c;var h=l.context,x=a.contextType;r=oi,typeof x=="object"&&x!==null&&(r=Rt(x));var A=a.getDerivedStateFromProps;x=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||h!==r)&&Oc(e,l,i,r),oa=!1;var b=e.memoizedState;l.state=b,nn(e,i,l,n),an(),h=e.memoizedState,o||b!==h||oa?(typeof A=="function"&&(yo(e,a,A,i),h=e.memoizedState),(c=oa||Hc(e,a,c,i,b,h,r))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=h),l.props=i,l.state=h,l.context=r,i=c):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Jr(t,e),r=e.memoizedProps,x=Ya(a,r),l.props=x,A=e.pendingProps,b=l.context,h=a.contextType,c=oi,typeof h=="object"&&h!==null&&(c=Rt(h)),o=a.getDerivedStateFromProps,(h=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==A||b!==c)&&Oc(e,l,i,c),oa=!1,b=e.memoizedState,l.state=b,nn(e,i,l,n),an();var y=e.memoizedState;r!==A||b!==y||oa||t!==null&&t.dependencies!==null&&el(t.dependencies)?(typeof o=="function"&&(yo(e,a,o,i),y=e.memoizedState),(x=oa||Hc(e,a,x,i,b,y,c)||t!==null&&t.dependencies!==null&&el(t.dependencies))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,y,c)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),l.props=i,l.state=y,l.context=c,i=x):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),i=!1)}return l=i,xl(t,e),i=(e.flags&128)!==0,l||i?(l=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&i?(e.child=_a(e,t.child,null,n),e.child=_a(e,null,a,n)):Lt(t,e,a,n),e.memoizedState=l.state,t=e.child):t=Ye(t,e,n),t}function Kc(t,e,a,i){return Ba(),e.flags|=256,Lt(t,e,a,i),e.child}var Ao={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function To(t){return{baseLanes:t,cachePool:Ru()}}function Eo(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=le),t}function Jc(t,e,a){var i=e.pendingProps,n=!1,l=(e.flags&128)!==0,r;if((r=l)||(r=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),r&&(n=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(Z){if(n?ca(e):da(),(t=gt)?(t=nf(t,he),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ia!==null?{id:Me,overflow:Ce}:null,retryLane:536870912,hydrationErrors:null},a=Mu(t),a.return=e,e.child=a,Nt=e,gt=null)):t=null,t===null)throw la(e);return ss(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,n?(da(),n=e.mode,o=Sl({mode:"hidden",children:o},n),i=Oa(i,n,a,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=To(a),i.childLanes=Eo(t,r,a),e.memoizedState=Ao,un(null,i)):(ca(e),jo(e,o))}var c=t.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(l)e.flags&256?(ca(e),e.flags&=-257,e=Mo(t,e,a)):e.memoizedState!==null?(da(),e.child=t.child,e.flags|=128,e=null):(da(),o=i.fallback,n=e.mode,i=Sl({mode:"visible",children:i.children},n),o=Oa(o,n,a,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,_a(e,t.child,null,a),i=e.child,i.memoizedState=To(a),i.childLanes=Eo(t,r,a),e.memoizedState=Ao,e=un(null,i));else if(ca(e),ss(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var h=r.dgst;r=h,i=Error(d(419)),i.stack="",i.digest=r,Wi({value:i,source:null,stack:null}),e=Mo(t,e,a)}else if(Tt||di(t,e,a,!1),r=(a&t.childLanes)!==0,Tt||r){if(r=ot,r!==null&&(i=Us(r,a),i!==0&&i!==c.retryLane))throw c.retryLane=i,Ha(t,i),Jt(r,t,i),wo;os(o)||Dl(),e=Mo(t,e,a)}else os(o)?(e.flags|=192,e.child=t.child,e=null):(t=c.treeContext,gt=ve(o.nextSibling),Nt=e,Z=!0,na=null,he=!1,t!==null&&ku(e,t),e=jo(e,i.children),e.flags|=4096);return e}return n?(da(),o=i.fallback,n=e.mode,c=t.child,h=c.sibling,i=Ne(c,{mode:"hidden",children:i.children}),i.subtreeFlags=c.subtreeFlags&65011712,h!==null?o=Ne(h,o):(o=Oa(o,n,a,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,un(null,i),i=e.child,o=t.child.memoizedState,o===null?o=To(a):(n=o.cachePool,n!==null?(c=zt._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Ru(),o={baseLanes:o.baseLanes|a,cachePool:n}),i.memoizedState=o,i.childLanes=Eo(t,r,a),e.memoizedState=Ao,un(t.child,i)):(ca(e),a=t.child,t=a.sibling,a=Ne(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function jo(t,e){return e=Sl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Sl(t,e){return t=ee(22,t,null,e),t.lanes=0,t}function Mo(t,e,a){return _a(e,t.child,null,a),t=jo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wc(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yr(t.return,e,a)}function Co(t,e,a,i,n,l){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:l}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=a,r.tailMode=n,r.treeForkCount=l)}function Fc(t,e,a){var i=e.pendingProps,n=i.revealOrder,l=i.tail;i=i.children;var r=St.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,tt(St,r),Lt(t,e,i,a),i=Z?Ji:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wc(t,a,e);else if(t.tag===19)Wc(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),Co(e,!1,n,a,l,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ul(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Co(e,!0,a,null,l,i);break;case"together":Co(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Ye(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ga|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(di(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(d(153));if(e.child!==null){for(t=e.child,a=Ne(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ne(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Do(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&el(t)))}function bp(t,e,a){switch(e.tag){case 3:Hn(e,e.stateNode.containerInfo),ra(e,zt,t.memoizedState.cache),Ba();break;case 27:case 5:Pl(e);break;case 4:Hn(e,e.stateNode.containerInfo);break;case 10:ra(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,to(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(ca(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Jc(t,e,a):(ca(e),t=Ye(t,e,a),t!==null?t.sibling:null);ca(e);break;case 19:var n=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(di(t,e,a,!1),i=(a&e.childLanes)!==0),n){if(i)return Fc(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(St,St.current),i)break;return null;case 22:return e.lanes=0,Qc(t,e,a,e.pendingProps);case 24:ra(e,zt,t.memoizedState.cache)}return Ye(t,e,a)}function Ic(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Tt=!0;else{if(!Do(t,a)&&(e.flags&128)===0)return Tt=!1,bp(t,e,a);Tt=(t.flags&131072)!==0}else Tt=!1,Z&&(e.flags&1048576)!==0&&Du(e,Ji,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=La(e.elementType),e.type=t,typeof t=="function")Br(t)?(i=Ya(t,i),e.tag=1,e=Zc(null,e,t,i,a)):(e.tag=0,e=zo(null,e,t,i,a));else{if(t!=null){var n=t.$$typeof;if(n===jt){e.tag=11,e=_c(null,e,t,i,a);break t}else if(n===we){e.tag=14,e=qc(null,e,t,i,a);break t}}throw e=Bi(t)||t,Error(d(306,e,""))}}return e;case 0:return zo(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,n=Ya(i,e.pendingProps),Zc(t,e,i,n,a);case 3:t:{if(Hn(e,e.stateNode.containerInfo),t===null)throw Error(d(387));i=e.pendingProps;var l=e.memoizedState;n=l.element,Jr(t,e),nn(e,i,null,a);var r=e.memoizedState;if(i=r.cache,ra(e,zt,i),i!==l.cache&&Qr(e,[zt],a,!0),an(),i=r.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Kc(t,e,i,a);break t}else if(i!==n){n=pe(Error(d(424)),e),Wi(n),e=Kc(t,e,i,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gt=ve(t.firstChild),Nt=e,Z=!0,na=null,he=!0,a=Qu(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ba(),i===n){e=Ye(t,e,a);break t}Lt(t,e,i,a)}e=e.child}return e;case 26:return xl(t,e),t===null?(a=cf(e.type,null,e.pendingProps,null))?e.memoizedState=a:Z||(a=e.type,t=e.pendingProps,i=Rl(Pe.current).createElement(a),i[Ut]=e,i[Qt]=t,Gt(i,a,t),kt(i),e.stateNode=i):e.memoizedState=cf(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Pl(e),t===null&&Z&&(i=e.stateNode=of(e.type,e.pendingProps,Pe.current),Nt=e,he=!0,n=gt,ya(e.type)?(us=n,gt=ve(i.firstChild)):gt=n),Lt(t,e,e.pendingProps.children,a),xl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Z&&((n=i=gt)&&(i=Zp(i,e.type,e.pendingProps,he),i!==null?(e.stateNode=i,Nt=e,gt=ve(i.firstChild),he=!1,n=!0):n=!1),n||la(e)),Pl(e),n=e.type,l=e.pendingProps,r=t!==null?t.memoizedProps:null,i=l.children,ns(n,l)?i=null:r!==null&&ns(n,r)&&(e.flags|=32),e.memoizedState!==null&&(n=ao(t,e,sp,null,null,a),An._currentValue=n),xl(t,e),Lt(t,e,i,a),e.child;case 6:return t===null&&Z&&((t=a=gt)&&(a=Kp(a,e.pendingProps,he),a!==null?(e.stateNode=a,Nt=e,gt=null,t=!0):t=!1),t||la(e)),null;case 13:return Jc(t,e,a);case 4:return Hn(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_a(e,null,i,a):Lt(t,e,i,a),e.child;case 11:return _c(t,e,e.type,e.pendingProps,a);case 7:return Lt(t,e,e.pendingProps,a),e.child;case 8:return Lt(t,e,e.pendingProps.children,a),e.child;case 12:return Lt(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,ra(e,e.type,i.value),Lt(t,e,i.children,a),e.child;case 9:return n=e.type._context,i=e.pendingProps.children,Na(e),n=Rt(n),i=i(n),e.flags|=1,Lt(t,e,i,a),e.child;case 14:return qc(t,e,e.type,e.pendingProps,a);case 15:return Yc(t,e,e.type,e.pendingProps,a);case 19:return Fc(t,e,a);case 31:return hp(t,e,a);case 22:return Qc(t,e,a,e.pendingProps);case 24:return Na(e),i=Rt(zt),t===null?(n=$r(),n===null&&(n=ot,l=Xr(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=a),n=l),e.memoizedState={parent:i,cache:n},Kr(e),ra(e,zt,n)):((t.lanes&a)!==0&&(Jr(t,e),nn(e,null,null,a),an()),n=t.memoizedState,l=e.memoizedState,n.parent!==i?(n={parent:i,cache:i},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ra(e,zt,i)):(i=l.cache,ra(e,zt,i),i!==n.cache&&Qr(e,[zt],a,!0))),Lt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function Qe(t){t.flags|=4}function ko(t,e,a,i,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Td())t.flags|=8192;else throw Ga=ll,Zr}else t.flags&=-16777217}function Pc(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mf(e))if(Td())t.flags|=8192;else throw Ga=ll,Zr}function wl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Hs():536870912,t.lanes|=e,zi|=e)}function cn(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function vp(t,e,a){var i=e.pendingProps;switch(Lr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Ge(zt),Za(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ci(e)?Qe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,_r())),mt(e),null;case 26:var n=e.type,l=e.memoizedState;return t===null?(Qe(e),l!==null?(mt(e),Pc(e,l)):(mt(e),ko(e,n,null,i,a))):l?l!==t.memoizedState?(Qe(e),mt(e),Pc(e,l)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Qe(e),mt(e),ko(e,n,t,i,a)),null;case 27:if(On(e),a=Pe.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Qe(e);else{if(!i){if(e.stateNode===null)throw Error(d(166));return mt(e),null}t=Dt.current,ci(e)?Hu(e):(t=of(n,i,a),e.stateNode=t,Qe(e))}return mt(e),null;case 5:if(On(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Qe(e);else{if(!i){if(e.stateNode===null)throw Error(d(166));return mt(e),null}if(l=Dt.current,ci(e))Hu(e);else{var r=Rl(Pe.current);switch(l){case 1:l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=r.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?r.createElement(n,{is:i.is}):r.createElement(n)}}l[Ut]=e,l[Qt]=i;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)l.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=l;t:switch(Gt(l,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Qe(e)}}return mt(e),ko(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Qe(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(d(166));if(t=Pe.current,ci(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,n=Nt,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}t[Ut]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Jd(t.nodeValue,a)),t||la(e,!0)}else t=Rl(t).createTextNode(i),t[Ut]=e,e.stateNode=t}return mt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(i=ci(e),a!==null){if(t===null){if(!i)throw Error(d(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[Ut]=e}else Ba(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else a=_r(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ie(e),e):(ie(e),null);if((e.flags&128)!==0)throw Error(d(558))}return mt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ci(e),i!==null&&i.dehydrated!==null){if(t===null){if(!n)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Ut]=e}else Ba(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),n=!1}else n=_r(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ie(e),e):(ie(e),null)}return ie(e),(e.flags&128)!==0?(e.lanes=a,e):(a=i!==null,t=t!==null&&t.memoizedState!==null,a&&(i=e.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==n&&(i.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),wl(e,e.updateQueue),mt(e),null);case 4:return Za(),t===null&&Po(e.stateNode.containerInfo),mt(e),null;case 10:return Ge(e.type),mt(e),null;case 19:if(vt(St),i=e.memoizedState,i===null)return mt(e),null;if(n=(e.flags&128)!==0,l=i.rendering,l===null)if(n)cn(i,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=ul(t),l!==null){for(e.flags|=128,cn(i,!1),t=l.updateQueue,e.updateQueue=t,wl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)ju(a,t),a=a.sibling;return tt(St,St.current&1|2),Z&&Re(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Ft()>jl&&(e.flags|=128,n=!0,cn(i,!1),e.lanes=4194304)}else{if(!n)if(t=ul(l),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,wl(e,t),cn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return mt(e),null}else 2*Ft()-i.renderingStartTime>jl&&a!==536870912&&(e.flags|=128,n=!0,cn(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(t=i.last,t!==null?t.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ft(),t.sibling=null,a=St.current,tt(St,n?a&1|2:a&1),Z&&Re(e,i.treeForkCount),t):(mt(e),null);case 22:case 23:return ie(e),Pr(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),a=e.updateQueue,a!==null&&wl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&vt(Ra),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ge(zt),mt(e),null;case 25:return null;case 30:return null}throw Error(d(156,e.tag))}function yp(t,e){switch(Lr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ge(zt),Za(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return On(e),null;case 31:if(e.memoizedState!==null){if(ie(e),e.alternate===null)throw Error(d(340));Ba()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ie(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(d(340));Ba()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return Za(),null;case 10:return Ge(e.type),null;case 22:case 23:return ie(e),Pr(),t!==null&&vt(Ra),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ge(zt),null;case 25:return null;default:return null}}function td(t,e){switch(Lr(e),e.tag){case 3:Ge(zt),Za();break;case 26:case 27:case 5:On(e);break;case 4:Za();break;case 31:e.memoizedState!==null&&ie(e);break;case 13:ie(e);break;case 19:vt(St);break;case 10:Ge(e.type);break;case 22:case 23:ie(e),Pr(),t!==null&&vt(Ra);break;case 24:Ge(zt)}}function dn(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&t)===t){i=void 0;var l=a.create,r=a.inst;i=l(),r.destroy=i}a=a.next}while(a!==n)}}catch(o){at(e,e.return,o)}}function fa(t,e,a){try{var i=e.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var l=n.next;i=l;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=e;var c=a,h=o;try{h()}catch(x){at(n,c,x)}}}i=i.next}while(i!==l)}}catch(x){at(e,e.return,x)}}function ed(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Vu(e,a)}catch(i){at(t,t.return,i)}}}function ad(t,e,a){a.props=Ya(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){at(t,e,i)}}function fn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(n){at(t,e,n)}}function De(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){at(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){at(t,e,n)}else a.current=null}function id(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){at(t,t.return,n)}}function Ho(t,e,a){try{var i=t.stateNode;qp(i,t.type,a,e),i[Qt]=e}catch(n){at(t,t.return,n)}}function nd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ya(t.type)||t.tag===4}function Oo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||nd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bo(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Be));else if(i!==4&&(i===27&&ya(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Bo(t,e,a),t=t.sibling;t!==null;)Bo(t,e,a),t=t.sibling}function zl(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&ya(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(zl(t,e,a),t=t.sibling;t!==null;)zl(t,e,a),t=t.sibling}function ld(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gt(e,i,a),e[Ut]=t,e[Qt]=a}catch(l){at(t,t.return,l)}}var Xe=!1,Et=!1,Uo=!1,rd=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function xp(t,e){if(t=t.containerInfo,as=Xl,t=vu(t),jr(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break t}var r=0,o=-1,c=-1,h=0,x=0,A=t,b=null;e:for(;;){for(var y;A!==a||n!==0&&A.nodeType!==3||(o=r+n),A!==l||i!==0&&A.nodeType!==3||(c=r+i),A.nodeType===3&&(r+=A.nodeValue.length),(y=A.firstChild)!==null;)b=A,A=y;for(;;){if(A===t)break e;if(b===a&&++h===n&&(o=r),b===l&&++x===i&&(c=r),(y=A.nextSibling)!==null)break;A=b,b=A.parentNode}A=y}a=o===-1||c===-1?null:{start:o,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(is={focusedElem:t,selectionRange:a},Xl=!1,Ht=e;Ht!==null;)if(e=Ht,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ht=t;else for(;Ht!==null;){switch(e=Ht,l=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,a=e,n=l.memoizedProps,l=l.memoizedState,i=a.stateNode;try{var k=Ya(a.type,n);t=i.getSnapshotBeforeUpdate(k,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(N){at(a,a.return,N)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)rs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=e.sibling,t!==null){t.return=e.return,Ht=t;break}Ht=e.return}}function od(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:$e(t,a),i&4&&dn(5,a);break;case 1:if($e(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){at(a,a.return,r)}else{var n=Ya(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){at(a,a.return,r)}}i&64&&ed(a),i&512&&fn(a,a.return);break;case 3:if($e(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Vu(t,e)}catch(r){at(a,a.return,r)}}break;case 27:e===null&&i&4&&ld(a);case 26:case 5:$e(t,a),e===null&&i&4&&id(a),i&512&&fn(a,a.return);break;case 12:$e(t,a);break;case 31:$e(t,a),i&4&&cd(t,a);break;case 13:$e(t,a),i&4&&dd(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Cp.bind(null,a),Jp(t,a))));break;case 22:if(i=a.memoizedState!==null||Xe,!i){e=e!==null&&e.memoizedState!==null||Et,n=Xe;var l=Et;Xe=i,(Et=e)&&!l?Ze(t,a,(a.subtreeFlags&8772)!==0):$e(t,a),Xe=n,Et=l}break;case 30:break;default:$e(t,a)}}function sd(t){var e=t.alternate;e!==null&&(t.alternate=null,sd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&cr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ht=null,Vt=!1;function Ve(t,e,a){for(a=a.child;a!==null;)ud(t,e,a),a=a.sibling}function ud(t,e,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Ui,a)}catch{}switch(a.tag){case 26:Et||De(a,e),Ve(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Et||De(a,e);var i=ht,n=Vt;ya(a.type)&&(ht=a.stateNode,Vt=!1),Ve(t,e,a),Sn(a.stateNode),ht=i,Vt=n;break;case 5:Et||De(a,e);case 6:if(i=ht,n=Vt,ht=null,Ve(t,e,a),ht=i,Vt=n,ht!==null)if(Vt)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(a.stateNode)}catch(l){at(a,e,l)}else try{ht.removeChild(a.stateNode)}catch(l){at(a,e,l)}break;case 18:ht!==null&&(Vt?(t=ht,ef(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ki(t)):ef(ht,a.stateNode));break;case 4:i=ht,n=Vt,ht=a.stateNode.containerInfo,Vt=!0,Ve(t,e,a),ht=i,Vt=n;break;case 0:case 11:case 14:case 15:fa(2,a,e),Et||fa(4,a,e),Ve(t,e,a);break;case 1:Et||(De(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&ad(a,e,i)),Ve(t,e,a);break;case 21:Ve(t,e,a);break;case 22:Et=(i=Et)||a.memoizedState!==null,Ve(t,e,a),Et=i;break;default:Ve(t,e,a)}}function cd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ki(t)}catch(a){at(e,e.return,a)}}}function dd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ki(t)}catch(a){at(e,e.return,a)}}function Sp(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new rd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new rd),e;default:throw Error(d(435,t.tag))}}function Al(t,e){var a=Sp(t);e.forEach(function(i){if(!a.has(i)){a.add(i);var n=Dp.bind(null,t,i);i.then(n,n)}})}function $t(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],l=t,r=e,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(ya(o.type)){ht=o.stateNode,Vt=!1;break t}break;case 5:ht=o.stateNode,Vt=!1;break t;case 3:case 4:ht=o.stateNode.containerInfo,Vt=!0;break t}o=o.return}if(ht===null)throw Error(d(160));ud(l,r,n),ht=null,Vt=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)fd(e,t),e=e.sibling}var Te=null;function fd(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$t(e,t),Zt(t),i&4&&(fa(3,t,t.return),dn(3,t),fa(5,t,t.return));break;case 1:$t(e,t),Zt(t),i&512&&(Et||a===null||De(a,a.return)),i&64&&Xe&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=Te;if($t(e,t),Zt(t),i&512&&(Et||a===null||De(a,a.return)),i&4){var l=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(i){case"title":l=n.getElementsByTagName("title")[0],(!l||l[Li]||l[Ut]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(i),n.head.insertBefore(l,n.querySelector("head > title"))),Gt(l,i,a),l[Ut]=t,kt(l),i=l;break t;case"link":var r=pf("link","href",n).get(i+(a.href||""));if(r){for(var o=0;o<r.length;o++)if(l=r[o],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(o,1);break e}}l=n.createElement(i),Gt(l,i,a),n.head.appendChild(l);break;case"meta":if(r=pf("meta","content",n).get(i+(a.content||""))){for(o=0;o<r.length;o++)if(l=r[o],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(o,1);break e}}l=n.createElement(i),Gt(l,i,a),n.head.appendChild(l);break;default:throw Error(d(468,i))}l[Ut]=t,kt(l),i=l}t.stateNode=i}else gf(n,t.type,t.stateNode);else t.stateNode=ff(n,i,t.memoizedProps);else l!==i?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,i===null?gf(n,t.type,t.stateNode):ff(n,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Ho(t,t.memoizedProps,a.memoizedProps)}break;case 27:$t(e,t),Zt(t),i&512&&(Et||a===null||De(a,a.return)),a!==null&&i&4&&Ho(t,t.memoizedProps,a.memoizedProps);break;case 5:if($t(e,t),Zt(t),i&512&&(Et||a===null||De(a,a.return)),t.flags&32){n=t.stateNode;try{ti(n,"")}catch(k){at(t,t.return,k)}}i&4&&t.stateNode!=null&&(n=t.memoizedProps,Ho(t,n,a!==null?a.memoizedProps:n)),i&1024&&(Uo=!0);break;case 6:if($t(e,t),Zt(t),i&4){if(t.stateNode===null)throw Error(d(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(k){at(t,t.return,k)}}break;case 3:if(_l=null,n=Te,Te=Ll(e.containerInfo),$t(e,t),Te=n,Zt(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{ki(e.containerInfo)}catch(k){at(t,t.return,k)}Uo&&(Uo=!1,pd(t));break;case 4:i=Te,Te=Ll(t.stateNode.containerInfo),$t(e,t),Zt(t),Te=i;break;case 12:$t(e,t),Zt(t);break;case 31:$t(e,t),Zt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Al(t,i)));break;case 13:$t(e,t),Zt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(El=Ft()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Al(t,i)));break;case 22:n=t.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,h=Xe,x=Et;if(Xe=h||n,Et=x||c,$t(e,t),Et=x,Xe=h,Zt(t),i&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||c||Xe||Et||Qa(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){c=a=e;try{if(l=c.stateNode,n)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=c.stateNode;var A=c.memoizedProps.style,b=A!=null&&A.hasOwnProperty("display")?A.display:null;o.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(k){at(c,c.return,k)}}}else if(e.tag===6){if(a===null){c=e;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(k){at(c,c.return,k)}}}else if(e.tag===18){if(a===null){c=e;try{var y=c.stateNode;n?af(y,!0):af(c.stateNode,!1)}catch(k){at(c,c.return,k)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Al(t,a))));break;case 19:$t(e,t),Zt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Al(t,i)));break;case 30:break;case 21:break;default:$t(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if(nd(i)){a=i;break}i=i.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var n=a.stateNode,l=Oo(t);zl(t,l,n);break;case 5:var r=a.stateNode;a.flags&32&&(ti(r,""),a.flags&=-33);var o=Oo(t);zl(t,o,r);break;case 3:case 4:var c=a.stateNode.containerInfo,h=Oo(t);Bo(t,h,c);break;default:throw Error(d(161))}}catch(x){at(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;pd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $e(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)od(t,e.alternate,e),e=e.sibling}function Qa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:fa(4,e,e.return),Qa(e);break;case 1:De(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&ad(e,e.return,a),Qa(e);break;case 27:Sn(e.stateNode);case 26:case 5:De(e,e.return),Qa(e);break;case 22:e.memoizedState===null&&Qa(e);break;case 30:Qa(e);break;default:Qa(e)}t=t.sibling}}function Ze(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,n=t,l=e,r=l.flags;switch(l.tag){case 0:case 11:case 15:Ze(n,l,a),dn(4,l);break;case 1:if(Ze(n,l,a),i=l,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){at(i,i.return,h)}if(i=l,n=i.updateQueue,n!==null){var o=i.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Xu(c[n],o)}catch(h){at(i,i.return,h)}}a&&r&64&&ed(l),fn(l,l.return);break;case 27:ld(l);case 26:case 5:Ze(n,l,a),a&&i===null&&r&4&&id(l),fn(l,l.return);break;case 12:Ze(n,l,a);break;case 31:Ze(n,l,a),a&&r&4&&cd(n,l);break;case 13:Ze(n,l,a),a&&r&4&&dd(n,l);break;case 22:l.memoizedState===null&&Ze(n,l,a),fn(l,l.return);break;case 30:break;default:Ze(n,l,a)}e=e.sibling}}function No(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Fi(a))}function Ro(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Fi(t))}function Ee(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gd(t,e,a,i),e=e.sibling}function gd(t,e,a,i){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ee(t,e,a,i),n&2048&&dn(9,e);break;case 1:Ee(t,e,a,i);break;case 3:Ee(t,e,a,i),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Fi(t)));break;case 12:if(n&2048){Ee(t,e,a,i),t=e.stateNode;try{var l=e.memoizedProps,r=l.id,o=l.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){at(e,e.return,c)}}else Ee(t,e,a,i);break;case 31:Ee(t,e,a,i);break;case 13:Ee(t,e,a,i);break;case 23:break;case 22:l=e.stateNode,r=e.alternate,e.memoizedState!==null?l._visibility&2?Ee(t,e,a,i):pn(t,e):l._visibility&2?Ee(t,e,a,i):(l._visibility|=2,xi(t,e,a,i,(e.subtreeFlags&10256)!==0||!1)),n&2048&&No(r,e);break;case 24:Ee(t,e,a,i),n&2048&&Ro(e.alternate,e);break;default:Ee(t,e,a,i)}}function xi(t,e,a,i,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=t,r=e,o=a,c=i,h=r.flags;switch(r.tag){case 0:case 11:case 15:xi(l,r,o,c,n),dn(8,r);break;case 23:break;case 22:var x=r.stateNode;r.memoizedState!==null?x._visibility&2?xi(l,r,o,c,n):pn(l,r):(x._visibility|=2,xi(l,r,o,c,n)),n&&h&2048&&No(r.alternate,r);break;case 24:xi(l,r,o,c,n),n&&h&2048&&Ro(r.alternate,r);break;default:xi(l,r,o,c,n)}e=e.sibling}}function pn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,n=i.flags;switch(i.tag){case 22:pn(a,i),n&2048&&No(i.alternate,i);break;case 24:pn(a,i),n&2048&&Ro(i.alternate,i);break;default:pn(a,i)}e=e.sibling}}var gn=8192;function Si(t,e,a){if(t.subtreeFlags&gn)for(t=t.child;t!==null;)md(t,e,a),t=t.sibling}function md(t,e,a){switch(t.tag){case 26:Si(t,e,a),t.flags&gn&&t.memoizedState!==null&&og(a,Te,t.memoizedState,t.memoizedProps);break;case 5:Si(t,e,a);break;case 3:case 4:var i=Te;Te=Ll(t.stateNode.containerInfo),Si(t,e,a),Te=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=gn,gn=16777216,Si(t,e,a),gn=i):Si(t,e,a));break;default:Si(t,e,a)}}function hd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function mn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Ht=i,vd(i,t)}hd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bd(t),t=t.sibling}function bd(t){switch(t.tag){case 0:case 11:case 15:mn(t),t.flags&2048&&fa(9,t,t.return);break;case 3:mn(t);break;case 12:mn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Tl(t)):mn(t);break;default:mn(t)}}function Tl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Ht=i,vd(i,t)}hd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:fa(8,e,e.return),Tl(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(e));break;default:Tl(e)}t=t.sibling}}function vd(t,e){for(;Ht!==null;){var a=Ht;switch(a.tag){case 0:case 11:case 15:fa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Fi(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Ht=i;else t:for(a=t;Ht!==null;){i=Ht;var n=i.sibling,l=i.return;if(sd(i),i===a){Ht=null;break t}if(n!==null){n.return=l,Ht=n;break t}Ht=l}}}var wp={getCacheForType:function(t){var e=Rt(zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Rt(zt).controller.signal}},zp=typeof WeakMap=="function"?WeakMap:Map,I=0,ot=null,Y=null,X=0,et=0,ne=null,pa=!1,wi=!1,Lo=!1,Ke=0,xt=0,ga=0,Xa=0,Go=0,le=0,zi=0,hn=null,Kt=null,_o=!1,El=0,yd=0,jl=1/0,Ml=null,ma=null,Mt=0,ha=null,Ai=null,Je=0,qo=0,Yo=null,xd=null,bn=0,Qo=null;function re(){return(I&2)!==0&&X!==0?X&-X:z.T!==null?Jo():Ns()}function Sd(){if(le===0)if((X&536870912)===0||Z){var t=Nn;Nn<<=1,(Nn&3932160)===0&&(Nn=262144),le=t}else le=536870912;return t=ae.current,t!==null&&(t.flags|=32),le}function Jt(t,e,a){(t===ot&&(et===2||et===9)||t.cancelPendingCommit!==null)&&(Ti(t,0),ba(t,X,le,!1)),Ri(t,a),((I&2)===0||t!==ot)&&(t===ot&&((I&2)===0&&(Xa|=a),xt===4&&ba(t,X,le,!1)),ke(t))}function wd(t,e,a){if((I&6)!==0)throw Error(d(327));var i=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Ni(t,e),n=i?Ep(t,e):Vo(t,e,!0),l=i;do{if(n===0){wi&&!i&&ba(t,e,0,!1);break}else{if(a=t.current.alternate,l&&!Ap(a)){n=Vo(t,e,!1),l=!1;continue}if(n===2){if(l=e,t.errorRecoveryDisabledLanes&l)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var o=t;n=hn;var c=o.current.memoizedState.isDehydrated;if(c&&(Ti(o,r).flags|=256),r=Vo(o,r,!1),r!==2){if(Lo&&!c){o.errorRecoveryDisabledLanes|=l,Xa|=l,n=4;break t}l=Kt,Kt=n,l!==null&&(Kt===null?Kt=l:Kt.push.apply(Kt,l))}n=r}if(l=!1,n!==2)continue}}if(n===1){Ti(t,0),ba(t,e,0,!0);break}t:{switch(i=t,l=n,l){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e)break;case 6:ba(i,e,le,!pa);break t;case 2:Kt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(n=El+300-Ft(),10<n)){if(ba(i,e,le,!pa),Ln(i,0,!0)!==0)break t;Je=e,i.timeoutHandle=Pd(zd.bind(null,i,a,Kt,Ml,_o,e,le,Xa,zi,pa,l,"Throttled",-0,0),n);break t}zd(i,a,Kt,Ml,_o,e,le,Xa,zi,pa,l,null,-0,0)}}break}while(!0);ke(t)}function zd(t,e,a,i,n,l,r,o,c,h,x,A,b,y){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Be},md(e,l,A);var k=(l&62914560)===l?El-Ft():(l&4194048)===l?yd-Ft():0;if(k=sg(A,k),k!==null){Je=l,t.cancelPendingCommit=k(kd.bind(null,t,e,l,a,i,n,r,o,c,x,A,null,b,y)),ba(t,l,r,!h);return}}kd(t,e,l,a,i,n,r,o,c)}function Ap(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],l=n.getSnapshot;n=n.value;try{if(!te(l(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ba(t,e,a,i){e&=~Go,e&=~Xa,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var n=e;0<n;){var l=31-Pt(n),r=1<<l;i[l]=-1,n&=~r}a!==0&&Os(t,a,e)}function Cl(){return(I&6)===0?(vn(0),!1):!0}function Xo(){if(Y!==null){if(et===0)var t=Y.return;else t=Y,Le=Ua=null,lo(t),mi=null,Pi=0,t=Y;for(;t!==null;)td(t.alternate,t),t=t.return;Y=null}}function Ti(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Xp(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Je=0,Xo(),ot=t,Y=a=Ne(t.current,null),X=e,et=0,ne=null,pa=!1,wi=Ni(t,e),Lo=!1,zi=le=Go=Xa=ga=xt=0,Kt=hn=null,_o=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var n=31-Pt(i),l=1<<n;e|=t[n],i&=~l}return Ke=e,Wn(),a}function Ad(t,e){G=null,z.H=sn,e===gi||e===nl?(e=_u(),et=3):e===Zr?(e=_u(),et=4):et=e===wo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ne=e,Y===null&&(xt=1,vl(t,pe(e,t.current)))}function Td(){var t=ae.current;return t===null?!0:(X&4194048)===X?be===null:(X&62914560)===X||(X&536870912)!==0?t===be:!1}function Ed(){var t=z.H;return z.H=sn,t===null?sn:t}function jd(){var t=z.A;return z.A=wp,t}function Dl(){xt=4,pa||(X&4194048)!==X&&ae.current!==null||(wi=!0),(ga&134217727)===0&&(Xa&134217727)===0||ot===null||ba(ot,X,le,!1)}function Vo(t,e,a){var i=I;I|=2;var n=Ed(),l=jd();(ot!==t||X!==e)&&(Ml=null,Ti(t,e)),e=!1;var r=xt;t:do try{if(et!==0&&Y!==null){var o=Y,c=ne;switch(et){case 8:Xo(),r=6;break t;case 3:case 2:case 9:case 6:ae.current===null&&(e=!0);var h=et;if(et=0,ne=null,Ei(t,o,c,h),a&&wi){r=0;break t}break;default:h=et,et=0,ne=null,Ei(t,o,c,h)}}Tp(),r=xt;break}catch(x){Ad(t,x)}while(!0);return e&&t.shellSuspendCounter++,Le=Ua=null,I=i,z.H=n,z.A=l,Y===null&&(ot=null,X=0,Wn()),r}function Tp(){for(;Y!==null;)Md(Y)}function Ep(t,e){var a=I;I|=2;var i=Ed(),n=jd();ot!==t||X!==e?(Ml=null,jl=Ft()+500,Ti(t,e)):wi=Ni(t,e);t:do try{if(et!==0&&Y!==null){e=Y;var l=ne;e:switch(et){case 1:et=0,ne=null,Ei(t,e,l,1);break;case 2:case 9:if(Lu(l)){et=0,ne=null,Cd(e);break}e=function(){et!==2&&et!==9||ot!==t||(et=7),ke(t)},l.then(e,e);break t;case 3:et=7;break t;case 4:et=5;break t;case 7:Lu(l)?(et=0,ne=null,Cd(e)):(et=0,ne=null,Ei(t,e,l,7));break;case 5:var r=null;switch(Y.tag){case 26:r=Y.memoizedState;case 5:case 27:var o=Y;if(r?mf(r):o.stateNode.complete){et=0,ne=null;var c=o.sibling;if(c!==null)Y=c;else{var h=o.return;h!==null?(Y=h,kl(h)):Y=null}break e}}et=0,ne=null,Ei(t,e,l,5);break;case 6:et=0,ne=null,Ei(t,e,l,6);break;case 8:Xo(),xt=6;break t;default:throw Error(d(462))}}jp();break}catch(x){Ad(t,x)}while(!0);return Le=Ua=null,z.H=i,z.A=n,I=a,Y!==null?0:(ot=null,X=0,Wn(),xt)}function jp(){for(;Y!==null&&!Wf();)Md(Y)}function Md(t){var e=Ic(t.alternate,t,Ke);t.memoizedProps=t.pendingProps,e===null?kl(t):Y=e}function Cd(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=$c(a,e,e.pendingProps,e.type,void 0,X);break;case 11:e=$c(a,e,e.pendingProps,e.type.render,e.ref,X);break;case 5:lo(e);default:td(a,e),e=Y=ju(e,Ke),e=Ic(a,e,Ke)}t.memoizedProps=t.pendingProps,e===null?kl(t):Y=e}function Ei(t,e,a,i){Le=Ua=null,lo(e),mi=null,Pi=0;var n=e.return;try{if(mp(t,n,e,a,X)){xt=1,vl(t,pe(a,t.current)),Y=null;return}}catch(l){if(n!==null)throw Y=n,l;xt=1,vl(t,pe(a,t.current)),Y=null;return}e.flags&32768?(Z||i===1?t=!0:wi||(X&536870912)!==0?t=!1:(pa=t=!0,(i===2||i===9||i===3||i===6)&&(i=ae.current,i!==null&&i.tag===13&&(i.flags|=16384))),Dd(e,t)):kl(e)}function kl(t){var e=t;do{if((e.flags&32768)!==0){Dd(e,pa);return}t=e.return;var a=vp(e.alternate,e,Ke);if(a!==null){Y=a;return}if(e=e.sibling,e!==null){Y=e;return}Y=e=t}while(e!==null);xt===0&&(xt=5)}function Dd(t,e){do{var a=yp(t.alternate,t);if(a!==null){a.flags&=32767,Y=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Y=t;return}Y=t=a}while(t!==null);xt=6,Y=null}function kd(t,e,a,i,n,l,r,o,c){t.cancelPendingCommit=null;do Hl();while(Mt!==0);if((I&6)!==0)throw Error(d(327));if(e!==null){if(e===t.current)throw Error(d(177));if(l=e.lanes|e.childLanes,l|=Hr,r0(t,a,l,r,o,c),t===ot&&(Y=ot=null,X=0),Ai=e,ha=t,Je=a,qo=l,Yo=n,xd=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,kp(Bn,function(){return Nd(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,n=D.p,D.p=2,r=I,I|=4;try{xp(t,e,a)}finally{I=r,D.p=n,z.T=i}}Mt=1,Hd(),Od(),Bd()}}function Hd(){if(Mt===1){Mt=0;var t=ha,e=Ai,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var i=D.p;D.p=2;var n=I;I|=4;try{fd(e,t);var l=is,r=vu(t.containerInfo),o=l.focusedElem,c=l.selectionRange;if(r!==o&&o&&o.ownerDocument&&bu(o.ownerDocument.documentElement,o)){if(c!==null&&jr(o)){var h=c.start,x=c.end;if(x===void 0&&(x=h),"selectionStart"in o)o.selectionStart=h,o.selectionEnd=Math.min(x,o.value.length);else{var A=o.ownerDocument||document,b=A&&A.defaultView||window;if(b.getSelection){var y=b.getSelection(),k=o.textContent.length,N=Math.min(c.start,k),lt=c.end===void 0?N:Math.min(c.end,k);!y.extend&&N>lt&&(r=lt,lt=N,N=r);var g=hu(o,N),f=hu(o,lt);if(g&&f&&(y.rangeCount!==1||y.anchorNode!==g.node||y.anchorOffset!==g.offset||y.focusNode!==f.node||y.focusOffset!==f.offset)){var m=A.createRange();m.setStart(g.node,g.offset),y.removeAllRanges(),N>lt?(y.addRange(m),y.extend(f.node,f.offset)):(m.setEnd(f.node,f.offset),y.addRange(m))}}}}for(A=[],y=o;y=y.parentNode;)y.nodeType===1&&A.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<A.length;o++){var S=A[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Xl=!!as,is=as=null}finally{I=n,D.p=i,z.T=a}}t.current=e,Mt=2}}function Od(){if(Mt===2){Mt=0;var t=ha,e=Ai,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var i=D.p;D.p=2;var n=I;I|=4;try{od(t,e.alternate,e)}finally{I=n,D.p=i,z.T=a}}Mt=3}}function Bd(){if(Mt===4||Mt===3){Mt=0,Ff();var t=ha,e=Ai,a=Je,i=xd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Mt=5:(Mt=0,Ai=ha=null,Ud(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ma=null),sr(a),e=e.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Ui,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=z.T,n=D.p,D.p=2,z.T=null;try{for(var l=t.onRecoverableError,r=0;r<i.length;r++){var o=i[r];l(o.value,{componentStack:o.stack})}}finally{z.T=e,D.p=n}}(Je&3)!==0&&Hl(),ke(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===Qo?bn++:(bn=0,Qo=t):bn=0,vn(0)}}function Ud(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Fi(e)))}function Hl(){return Hd(),Od(),Bd(),Nd()}function Nd(){if(Mt!==5)return!1;var t=ha,e=qo;qo=0;var a=sr(Je),i=z.T,n=D.p;try{D.p=32>a?32:a,z.T=null,a=Yo,Yo=null;var l=ha,r=Je;if(Mt=0,Ai=ha=null,Je=0,(I&6)!==0)throw Error(d(331));var o=I;if(I|=4,bd(l.current),gd(l,l.current,r,a),I=o,vn(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Ui,l)}catch{}return!0}finally{D.p=n,z.T=i,Ud(t,e)}}function Rd(t,e,a){e=pe(a,e),e=So(t.stateNode,e,2),t=ua(t,e,2),t!==null&&(Ri(t,2),ke(t))}function at(t,e,a){if(t.tag===3)Rd(t,t,a);else for(;e!==null;){if(e.tag===3){Rd(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))){t=pe(a,t),a=Lc(2),i=ua(e,a,2),i!==null&&(Gc(a,i,e,t),Ri(i,2),ke(i));break}}e=e.return}}function $o(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new zp;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(a)||(Lo=!0,n.add(a),t=Mp.bind(null,t,e,a),e.then(t,t))}function Mp(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ot===t&&(X&a)===a&&(xt===4||xt===3&&(X&62914560)===X&&300>Ft()-El?(I&2)===0&&Ti(t,0):Go|=a,zi===X&&(zi=0)),ke(t)}function Ld(t,e){e===0&&(e=Hs()),t=Ha(t,e),t!==null&&(Ri(t,e),ke(t))}function Cp(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Ld(t,a)}function Dp(t,e){var a=0;switch(t.tag){case 31:case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(e),Ld(t,a)}function kp(t,e){return nr(t,e)}var Ol=null,ji=null,Zo=!1,Bl=!1,Ko=!1,va=0;function ke(t){t!==ji&&t.next===null&&(ji===null?Ol=ji=t:ji=ji.next=t),Bl=!0,Zo||(Zo=!0,Op())}function vn(t,e){if(!Ko&&Bl){Ko=!0;do for(var a=!1,i=Ol;i!==null;){if(t!==0){var n=i.pendingLanes;if(n===0)var l=0;else{var r=i.suspendedLanes,o=i.pingedLanes;l=(1<<31-Pt(42|t)+1)-1,l&=n&~(r&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,Yd(i,l))}else l=X,l=Ln(i,i===ot?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Ni(i,l)||(a=!0,Yd(i,l));i=i.next}while(a);Ko=!1}}function Hp(){Gd()}function Gd(){Bl=Zo=!1;var t=0;va!==0&&Qp()&&(t=va);for(var e=Ft(),a=null,i=Ol;i!==null;){var n=i.next,l=_d(i,e);l===0?(i.next=null,a===null?Ol=n:a.next=n,n===null&&(ji=a)):(a=i,(t!==0||(l&3)!==0)&&(Bl=!0)),i=n}Mt!==0&&Mt!==5||vn(t),va!==0&&(va=0)}function _d(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var r=31-Pt(l),o=1<<r,c=n[r];c===-1?((o&a)===0||(o&i)!==0)&&(n[r]=l0(o,e)):c<=e&&(t.expiredLanes|=o),l&=~o}if(e=ot,a=X,a=Ln(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(et===2||et===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&lr(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ni(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&lr(i),sr(a)){case 2:case 8:a=Ds;break;case 32:a=Bn;break;case 268435456:a=ks;break;default:a=Bn}return i=qd.bind(null,t),a=nr(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&lr(i),t.callbackPriority=2,t.callbackNode=null,2}function qd(t,e){if(Mt!==0&&Mt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var i=X;return i=Ln(t,t===ot?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(wd(t,i,e),_d(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?qd.bind(null,t):null)}function Yd(t,e){if(Hl())return null;wd(t,e,!0)}function Op(){Vp(function(){(I&6)!==0?nr(Cs,Hp):Gd()})}function Jo(){if(va===0){var t=fi;t===0&&(t=Un,Un<<=1,(Un&261888)===0&&(Un=256)),va=t}return va}function Qd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yn(""+t)}function Xd(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Bp(t,e,a,i,n){if(e==="submit"&&a&&a.stateNode===n){var l=Qd((n[Qt]||null).action),r=i.submitter;r&&(e=(e=r[Qt]||null)?Qd(e.formAction):r.getAttribute("formAction"),e!==null&&(l=e,r=null));var o=new $n("action","action",null,i,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(va!==0){var c=r?Xd(n,r):new FormData(n);mo(a,{pending:!0,data:c,method:n.method,action:l},null,c)}}else typeof l=="function"&&(o.preventDefault(),c=r?Xd(n,r):new FormData(n),mo(a,{pending:!0,data:c,method:n.method,action:l},l,c))},currentTarget:n}]})}}for(var Wo=0;Wo<kr.length;Wo++){var Fo=kr[Wo],Up=Fo.toLowerCase(),Np=Fo[0].toUpperCase()+Fo.slice(1);Ae(Up,"on"+Np)}Ae(Su,"onAnimationEnd"),Ae(wu,"onAnimationIteration"),Ae(zu,"onAnimationStart"),Ae("dblclick","onDoubleClick"),Ae("focusin","onFocus"),Ae("focusout","onBlur"),Ae(I0,"onTransitionRun"),Ae(P0,"onTransitionStart"),Ae(tp,"onTransitionCancel"),Ae(Au,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yn));function Vd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],n=i.event;i=i.listeners;t:{var l=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],c=o.instance,h=o.currentTarget;if(o=o.listener,c!==l&&n.isPropagationStopped())break t;l=o,n.currentTarget=h;try{l(n)}catch(x){Jn(x)}n.currentTarget=null,l=c}else for(r=0;r<i.length;r++){if(o=i[r],c=o.instance,h=o.currentTarget,o=o.listener,c!==l&&n.isPropagationStopped())break t;l=o,n.currentTarget=h;try{l(n)}catch(x){Jn(x)}n.currentTarget=null,l=c}}}}function Q(t,e){var a=e[ur];a===void 0&&(a=e[ur]=new Set);var i=t+"__bubble";a.has(i)||($d(e,t,2,!1),a.add(i))}function Io(t,e,a){var i=0;e&&(i|=4),$d(a,t,i,e)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[Ul]){t[Ul]=!0,Gs.forEach(function(a){a!=="selectionchange"&&(Rp.has(a)||Io(a,!1,t),Io(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ul]||(e[Ul]=!0,Io("selectionchange",!1,e))}}function $d(t,e,a,i){switch(wf(e)){case 2:var n=dg;break;case 8:n=fg;break;default:n=gs}a=n.bind(null,e,a,t),n=void 0,!vr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function ts(t,e,a,i,n){var l=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=i.return;r!==null;){var c=r.tag;if((c===3||c===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=Ja(o),r===null)return;if(c=r.tag,c===5||c===6||c===26||c===27){i=l=r;continue t}o=o.parentNode}}i=i.return}Fs(function(){var h=l,x=hr(a),A=[];t:{var b=Tu.get(t);if(b!==void 0){var y=$n,k=t;switch(t){case"keypress":if(Xn(a)===0)break t;case"keydown":case"keyup":y=D0;break;case"focusin":k="focus",y=wr;break;case"focusout":k="blur",y=wr;break;case"beforeblur":case"afterblur":y=wr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=O0;break;case Su:case wu:case zu:y=S0;break;case Au:y=U0;break;case"scroll":case"scrollend":y=h0;break;case"wheel":y=R0;break;case"copy":case"cut":case"paste":y=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=au;break;case"toggle":case"beforetoggle":y=G0}var N=(e&4)!==0,lt=!N&&(t==="scroll"||t==="scrollend"),g=N?b!==null?b+"Capture":null:b;N=[];for(var f=h,m;f!==null;){var S=f;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||g===null||(S=_i(f,g),S!=null&&N.push(xn(f,S,m))),lt)break;f=f.return}0<N.length&&(b=new y(b,k,null,a,x),A.push({event:b,listeners:N}))}}if((e&7)===0){t:{if(b=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",b&&a!==mr&&(k=a.relatedTarget||a.fromElement)&&(Ja(k)||k[Ka]))break t;if((y||b)&&(b=x.window===x?x:(b=x.ownerDocument)?b.defaultView||b.parentWindow:window,y?(k=a.relatedTarget||a.toElement,y=h,k=k?Ja(k):null,k!==null&&(lt=M(k),N=k.tag,k!==lt||N!==5&&N!==27&&N!==6)&&(k=null)):(y=null,k=h),y!==k)){if(N=tu,S="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(N=au,S="onPointerLeave",g="onPointerEnter",f="pointer"),lt=y==null?b:Gi(y),m=k==null?b:Gi(k),b=new N(S,f+"leave",y,a,x),b.target=lt,b.relatedTarget=m,S=null,Ja(x)===h&&(N=new N(g,f+"enter",k,a,x),N.target=m,N.relatedTarget=lt,S=N),lt=S,y&&k)e:{for(N=Lp,g=y,f=k,m=0,S=g;S;S=N(S))m++;S=0;for(var U=f;U;U=N(U))S++;for(;0<m-S;)g=N(g),m--;for(;0<S-m;)f=N(f),S--;for(;m--;){if(g===f||f!==null&&g===f.alternate){N=g;break e}g=N(g),f=N(f)}N=null}else N=null;y!==null&&Zd(A,b,y,N,!1),k!==null&&lt!==null&&Zd(A,lt,k,N,!0)}}t:{if(b=h?Gi(h):window,y=b.nodeName&&b.nodeName.toLowerCase(),y==="select"||y==="input"&&b.type==="file")var J=cu;else if(su(b))if(du)J=J0;else{J=Z0;var H=$0}else y=b.nodeName,!y||y.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?h&&gr(h.elementType)&&(J=cu):J=K0;if(J&&(J=J(t,h))){uu(A,J,a,x);break t}H&&H(t,b,h),t==="focusout"&&h&&b.type==="number"&&h.memoizedProps.value!=null&&pr(b,"number",b.value)}switch(H=h?Gi(h):window,t){case"focusin":(su(H)||H.contentEditable==="true")&&(ni=H,Mr=h,Ki=null);break;case"focusout":Ki=Mr=ni=null;break;case"mousedown":Cr=!0;break;case"contextmenu":case"mouseup":case"dragend":Cr=!1,yu(A,a,x);break;case"selectionchange":if(F0)break;case"keydown":case"keyup":yu(A,a,x)}var _;if(Ar)t:{switch(t){case"compositionstart":var V="onCompositionStart";break t;case"compositionend":V="onCompositionEnd";break t;case"compositionupdate":V="onCompositionUpdate";break t}V=void 0}else ii?ru(t,a)&&(V="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(V="onCompositionStart");V&&(iu&&a.locale!=="ko"&&(ii||V!=="onCompositionStart"?V==="onCompositionEnd"&&ii&&(_=Is()):(aa=x,yr="value"in aa?aa.value:aa.textContent,ii=!0)),H=Nl(h,V),0<H.length&&(V=new eu(V,t,null,a,x),A.push({event:V,listeners:H}),_?V.data=_:(_=ou(a),_!==null&&(V.data=_)))),(_=q0?Y0(t,a):Q0(t,a))&&(V=Nl(h,"onBeforeInput"),0<V.length&&(H=new eu("onBeforeInput","beforeinput",null,a,x),A.push({event:H,listeners:V}),H.data=_)),Bp(A,t,h,a,x)}Vd(A,e)})}function xn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Nl(t,e){for(var a=e+"Capture",i=[];t!==null;){var n=t,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=_i(t,a),n!=null&&i.unshift(xn(t,n,l)),n=_i(t,e),n!=null&&i.push(xn(t,n,l))),t.tag===3)return i;t=t.return}return[]}function Lp(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Zd(t,e,a,i,n){for(var l=e._reactName,r=[];a!==null&&a!==i;){var o=a,c=o.alternate,h=o.stateNode;if(o=o.tag,c!==null&&c===i)break;o!==5&&o!==26&&o!==27||h===null||(c=h,n?(h=_i(a,l),h!=null&&r.unshift(xn(a,h,c))):n||(h=_i(a,l),h!=null&&r.push(xn(a,h,c)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var Gp=/\r\n?/g,_p=/\u0000|\uFFFD/g;function Kd(t){return(typeof t=="string"?t:""+t).replace(Gp,`
`).replace(_p,"")}function Jd(t,e){return e=Kd(e),Kd(t)===e}function nt(t,e,a,i,n,l){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ti(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ti(t,""+i);break;case"className":_n(t,"class",i);break;case"tabIndex":_n(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(t,a,i);break;case"style":Js(t,i,l);break;case"data":if(e!=="object"){_n(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Yn(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(e!=="input"&&nt(t,e,"name",n.name,n,null),nt(t,e,"formEncType",n.formEncType,n,null),nt(t,e,"formMethod",n.formMethod,n,null),nt(t,e,"formTarget",n.formTarget,n,null)):(nt(t,e,"encType",n.encType,n,null),nt(t,e,"method",n.method,n,null),nt(t,e,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Yn(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=Be);break;case"onScroll":i!=null&&Q("scroll",t);break;case"onScrollEnd":i!=null&&Q("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=Yn(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":Q("beforetoggle",t),Q("toggle",t),Gn(t,"popover",i);break;case"xlinkActuate":Oe(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Oe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Oe(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Oe(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Oe(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Oe(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Gn(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=g0.get(a)||a,Gn(t,a,i))}}function es(t,e,a,i,n,l){switch(a){case"style":Js(t,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=a}}break;case"children":typeof i=="string"?ti(t,i):(typeof i=="number"||typeof i=="bigint")&&ti(t,""+i);break;case"onScroll":i!=null&&Q("scroll",t);break;case"onScrollEnd":i!=null&&Q("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Be);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_s.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),l=t[Qt]||null,l=l!=null?l[a]:null,typeof l=="function"&&t.removeEventListener(e,l,n),typeof i=="function")){typeof l!="function"&&l!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,n);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):Gn(t,a,i)}}}function Gt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",t),Q("load",t);var i=!1,n=!1,l;for(l in a)if(a.hasOwnProperty(l)){var r=a[l];if(r!=null)switch(l){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:nt(t,e,l,r,a,null)}}n&&nt(t,e,"srcSet",a.srcSet,a,null),i&&nt(t,e,"src",a.src,a,null);return;case"input":Q("invalid",t);var o=l=r=n=null,c=null,h=null;for(i in a)if(a.hasOwnProperty(i)){var x=a[i];if(x!=null)switch(i){case"name":n=x;break;case"type":r=x;break;case"checked":c=x;break;case"defaultChecked":h=x;break;case"value":l=x;break;case"defaultValue":o=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,e));break;default:nt(t,e,i,x,a,null)}}Vs(t,l,o,c,h,r,n,!1);return;case"select":Q("invalid",t),i=r=l=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":l=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:nt(t,e,n,o,a,null)}e=l,a=r,t.multiple=!!i,e!=null?Pa(t,!!i,e,!1):a!=null&&Pa(t,!!i,a,!0);return;case"textarea":Q("invalid",t),l=n=i=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":n=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:nt(t,e,r,o,a,null)}Zs(t,i,n,l);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(i=a[c],i!=null))switch(c){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:nt(t,e,c,i,a,null)}return;case"dialog":Q("beforetoggle",t),Q("toggle",t),Q("cancel",t),Q("close",t);break;case"iframe":case"object":Q("load",t);break;case"video":case"audio":for(i=0;i<yn.length;i++)Q(yn[i],t);break;case"image":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"embed":case"source":case"link":Q("error",t),Q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(i=a[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:nt(t,e,h,i,a,null)}return;default:if(gr(e)){for(x in a)a.hasOwnProperty(x)&&(i=a[x],i!==void 0&&es(t,e,x,i,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(i=a[o],i!=null&&nt(t,e,o,i,a,null))}function qp(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,r=null,o=null,c=null,h=null,x=null;for(y in a){var A=a[y];if(a.hasOwnProperty(y)&&A!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":c=A;default:i.hasOwnProperty(y)||nt(t,e,y,null,i,A)}}for(var b in i){var y=i[b];if(A=a[b],i.hasOwnProperty(b)&&(y!=null||A!=null))switch(b){case"type":l=y;break;case"name":n=y;break;case"checked":h=y;break;case"defaultChecked":x=y;break;case"value":r=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,e));break;default:y!==A&&nt(t,e,b,y,i,A)}}fr(t,r,o,c,h,x,l,n);return;case"select":y=r=o=b=null;for(l in a)if(c=a[l],a.hasOwnProperty(l)&&c!=null)switch(l){case"value":break;case"multiple":y=c;default:i.hasOwnProperty(l)||nt(t,e,l,null,i,c)}for(n in i)if(l=i[n],c=a[n],i.hasOwnProperty(n)&&(l!=null||c!=null))switch(n){case"value":b=l;break;case"defaultValue":o=l;break;case"multiple":r=l;default:l!==c&&nt(t,e,n,l,i,c)}e=o,a=r,i=y,b!=null?Pa(t,!!a,b,!1):!!i!=!!a&&(e!=null?Pa(t,!!a,e,!0):Pa(t,!!a,a?[]:"",!1));return;case"textarea":y=b=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:nt(t,e,o,null,i,n)}for(r in i)if(n=i[r],l=a[r],i.hasOwnProperty(r)&&(n!=null||l!=null))switch(r){case"value":b=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==l&&nt(t,e,r,n,i,l)}$s(t,b,y);return;case"option":for(var k in a)if(b=a[k],a.hasOwnProperty(k)&&b!=null&&!i.hasOwnProperty(k))switch(k){case"selected":t.selected=!1;break;default:nt(t,e,k,null,i,b)}for(c in i)if(b=i[c],y=a[c],i.hasOwnProperty(c)&&b!==y&&(b!=null||y!=null))switch(c){case"selected":t.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:nt(t,e,c,b,i,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in a)b=a[N],a.hasOwnProperty(N)&&b!=null&&!i.hasOwnProperty(N)&&nt(t,e,N,null,i,b);for(h in i)if(b=i[h],y=a[h],i.hasOwnProperty(h)&&b!==y&&(b!=null||y!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,e));break;default:nt(t,e,h,b,i,y)}return;default:if(gr(e)){for(var lt in a)b=a[lt],a.hasOwnProperty(lt)&&b!==void 0&&!i.hasOwnProperty(lt)&&es(t,e,lt,void 0,i,b);for(x in i)b=i[x],y=a[x],!i.hasOwnProperty(x)||b===y||b===void 0&&y===void 0||es(t,e,x,b,i,y);return}}for(var g in a)b=a[g],a.hasOwnProperty(g)&&b!=null&&!i.hasOwnProperty(g)&&nt(t,e,g,null,i,b);for(A in i)b=i[A],y=a[A],!i.hasOwnProperty(A)||b===y||b==null&&y==null||nt(t,e,A,b,i,y)}function Wd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yp(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],l=n.transferSize,r=n.initiatorType,o=n.duration;if(l&&o&&Wd(r)){for(r=0,o=n.responseEnd,i+=1;i<a.length;i++){var c=a[i],h=c.startTime;if(h>o)break;var x=c.transferSize,A=c.initiatorType;x&&Wd(A)&&(c=c.responseEnd,r+=x*(c<o?1:(o-h)/(c-h)))}if(--i,e+=8*(l+r)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var as=null,is=null;function Rl(t){return t.nodeType===9?t:t.ownerDocument}function Fd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Id(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ns(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ls=null;function Qp(){var t=window.event;return t&&t.type==="popstate"?t===ls?!1:(ls=t,!0):(ls=null,!1)}var Pd=typeof setTimeout=="function"?setTimeout:void 0,Xp=typeof clearTimeout=="function"?clearTimeout:void 0,tf=typeof Promise=="function"?Promise:void 0,Vp=typeof queueMicrotask=="function"?queueMicrotask:typeof tf<"u"?function(t){return tf.resolve(null).then(t).catch($p)}:Pd;function $p(t){setTimeout(function(){throw t})}function ya(t){return t==="head"}function ef(t,e){var a=e,i=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){t.removeChild(n),ki(e);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Sn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Sn(a);for(var l=a.firstChild;l;){var r=l.nextSibling,o=l.nodeName;l[Li]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=r}}else a==="body"&&Sn(t.ownerDocument.body);a=n}while(a);ki(e)}function af(t,e){var a=t;t=0;do{var i=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=i}while(a)}function rs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rs(a),cr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Zp(t,e,a,i){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Li])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=ve(t.nextSibling),t===null)break}return null}function Kp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ve(t.nextSibling),t===null))return null;return t}function nf(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ve(t.nextSibling),t===null))return null;return t}function os(t){return t.data==="$?"||t.data==="$~"}function ss(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Jp(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function ve(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var us=null;function lf(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return ve(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function rf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function of(t,e,a){switch(e=Rl(a),t){case"html":if(t=e.documentElement,!t)throw Error(d(452));return t;case"head":if(t=e.head,!t)throw Error(d(453));return t;case"body":if(t=e.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function Sn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);cr(t)}var ye=new Map,sf=new Set;function Ll(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var We=D.d;D.d={f:Wp,r:Fp,D:Ip,C:Pp,L:tg,m:eg,X:ig,S:ag,M:ng};function Wp(){var t=We.f(),e=Cl();return t||e}function Fp(t){var e=Wa(t);e!==null&&e.tag===5&&e.type==="form"?Ac(e):We.r(t)}var Mi=typeof document>"u"?null:document;function uf(t,e,a){var i=Mi;if(i&&typeof e=="string"&&e){var n=de(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),sf.has(n)||(sf.add(n),t={rel:t,crossOrigin:a,href:e},i.querySelector(n)===null&&(e=i.createElement("link"),Gt(e,"link",t),kt(e),i.head.appendChild(e)))}}function Ip(t){We.D(t),uf("dns-prefetch",t,null)}function Pp(t,e){We.C(t,e),uf("preconnect",t,e)}function tg(t,e,a){We.L(t,e,a);var i=Mi;if(i&&t&&e){var n='link[rel="preload"][as="'+de(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+de(a.imageSizes)+'"]')):n+='[href="'+de(t)+'"]';var l=n;switch(e){case"style":l=Ci(t);break;case"script":l=Di(t)}ye.has(l)||(t=C({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ye.set(l,t),i.querySelector(n)!==null||e==="style"&&i.querySelector(wn(l))||e==="script"&&i.querySelector(zn(l))||(e=i.createElement("link"),Gt(e,"link",t),kt(e),i.head.appendChild(e)))}}function eg(t,e){We.m(t,e);var a=Mi;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+de(i)+'"][href="'+de(t)+'"]',l=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Di(t)}if(!ye.has(l)&&(t=C({rel:"modulepreload",href:t},e),ye.set(l,t),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zn(l)))return}i=a.createElement("link"),Gt(i,"link",t),kt(i),a.head.appendChild(i)}}}function ag(t,e,a){We.S(t,e,a);var i=Mi;if(i&&t){var n=Fa(i).hoistableStyles,l=Ci(t);e=e||"default";var r=n.get(l);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(wn(l)))o.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ye.get(l))&&cs(t,a);var c=r=i.createElement("link");kt(c),Gt(c,"link",t),c._p=new Promise(function(h,x){c.onload=h,c.onerror=x}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Gl(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(l,r)}}}function ig(t,e){We.X(t,e);var a=Mi;if(a&&t){var i=Fa(a).hoistableScripts,n=Di(t),l=i.get(n);l||(l=a.querySelector(zn(n)),l||(t=C({src:t,async:!0},e),(e=ye.get(n))&&ds(t,e),l=a.createElement("script"),kt(l),Gt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function ng(t,e){We.M(t,e);var a=Mi;if(a&&t){var i=Fa(a).hoistableScripts,n=Di(t),l=i.get(n);l||(l=a.querySelector(zn(n)),l||(t=C({src:t,async:!0,type:"module"},e),(e=ye.get(n))&&ds(t,e),l=a.createElement("script"),kt(l),Gt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function cf(t,e,a,i){var n=(n=Pe.current)?Ll(n):null;if(!n)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Ci(a.href),a=Fa(n).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ci(a.href);var l=Fa(n).hoistableStyles,r=l.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,r),(l=n.querySelector(wn(t)))&&!l._p&&(r.instance=l,r.state.loading=5),ye.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ye.set(t,a),l||lg(n,t,a,r.state))),e&&i===null)throw Error(d(528,""));return r}if(e&&i!==null)throw Error(d(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Di(a),a=Fa(n).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function Ci(t){return'href="'+de(t)+'"'}function wn(t){return'link[rel="stylesheet"]['+t+"]"}function df(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function lg(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Gt(e,"link",a),kt(e),t.head.appendChild(e))}function Di(t){return'[src="'+de(t)+'"]'}function zn(t){return"script[async]"+t}function ff(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+de(a.href)+'"]');if(i)return e.instance=i,kt(i),i;var n=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),kt(i),Gt(i,"style",n),Gl(i,a.precedence,t),e.instance=i;case"stylesheet":n=Ci(a.href);var l=t.querySelector(wn(n));if(l)return e.state.loading|=4,e.instance=l,kt(l),l;i=df(a),(n=ye.get(n))&&cs(i,n),l=(t.ownerDocument||t).createElement("link"),kt(l);var r=l;return r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Gt(l,"link",i),e.state.loading|=4,Gl(l,a.precedence,t),e.instance=l;case"script":return l=Di(a.src),(n=t.querySelector(zn(l)))?(e.instance=n,kt(n),n):(i=a,(n=ye.get(l))&&(i=C({},a),ds(i,n)),t=t.ownerDocument||t,n=t.createElement("script"),kt(n),Gt(n,"link",i),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,Gl(i,a.precedence,t));return e.instance}function Gl(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,l=n,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)l=o;else if(l!==n)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function cs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ds(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var _l=null;function pf(t,e,a){if(_l===null){var i=new Map,n=_l=new Map;n.set(a,i)}else n=_l,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var l=a[n];if(!(l[Li]||l[Ut]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(l):i.set(r,[l])}}return i}function gf(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function rg(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function mf(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function og(t,e,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ci(i.href),l=e.querySelector(wn(n));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=ql.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=l,kt(l);return}l=e.ownerDocument||e,i=df(i),(n=ye.get(n))&&cs(i,n),l=l.createElement("link"),kt(l);var r=l;r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Gt(l,"link",i),a.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ql.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var fs=0;function sg(t,e){return t.stylesheets&&t.count===0&&Ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var i=setTimeout(function(){if(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+e);0<t.imgBytes&&fs===0&&(fs=62500*Yp());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>fs?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yl=null;function Ql(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yl=new Map,e.forEach(ug,t),Yl=null,ql.call(t))}function ug(t,e){if(!(e.state.loading&4)){var a=Yl.get(t);if(a)var i=a.get(null);else{a=new Map,Yl.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var r=n[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),i=r)}i&&a.set(null,i)}n=e.instance,r=n.getAttribute("data-precedence"),l=a.get(r)||i,l===i&&a.set(null,n),a.set(r,n),this.count++,i=ql.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),l?l.parentNode.insertBefore(n,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var An={$$typeof:dt,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function cg(t,e,a,i,n,l,r,o,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rr(0),this.hiddenUpdates=rr(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function hf(t,e,a,i,n,l,r,o,c,h,x,A){return t=new cg(t,e,a,r,c,h,x,A,o),e=1,l===!0&&(e|=24),l=ee(3,null,null,e),t.current=l,l.stateNode=t,e=Xr(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:i,isDehydrated:a,cache:e},Kr(l),t}function bf(t){return t?(t=oi,t):oi}function vf(t,e,a,i,n,l){n=bf(n),i.context===null?i.context=n:i.pendingContext=n,i=sa(e),i.payload={element:a},l=l===void 0?null:l,l!==null&&(i.callback=l),a=ua(t,i,e),a!==null&&(Jt(a,t,e),en(a,t,e))}function yf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function ps(t,e){yf(t,e),(t=t.alternate)&&yf(t,e)}function xf(t){if(t.tag===13||t.tag===31){var e=Ha(t,67108864);e!==null&&Jt(e,t,67108864),ps(t,67108864)}}function Sf(t){if(t.tag===13||t.tag===31){var e=re();e=or(e);var a=Ha(t,e);a!==null&&Jt(a,t,e),ps(t,e)}}var Xl=!0;function dg(t,e,a,i){var n=z.T;z.T=null;var l=D.p;try{D.p=2,gs(t,e,a,i)}finally{D.p=l,z.T=n}}function fg(t,e,a,i){var n=z.T;z.T=null;var l=D.p;try{D.p=8,gs(t,e,a,i)}finally{D.p=l,z.T=n}}function gs(t,e,a,i){if(Xl){var n=ms(i);if(n===null)ts(t,e,i,Vl,a),zf(t,i);else if(gg(n,t,e,a,i))i.stopPropagation();else if(zf(t,i),e&4&&-1<pg.indexOf(t)){for(;n!==null;){var l=Wa(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=ja(l.pendingLanes);if(r!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var c=1<<31-Pt(r);o.entanglements[1]|=c,r&=~c}ke(l),(I&6)===0&&(jl=Ft()+500,vn(0))}}break;case 31:case 13:o=Ha(l,2),o!==null&&Jt(o,l,2),Cl(),ps(l,2)}if(l=ms(i),l===null&&ts(t,e,i,Vl,a),l===n)break;n=l}n!==null&&i.stopPropagation()}else ts(t,e,i,null,a)}}function ms(t){return t=hr(t),hs(t)}var Vl=null;function hs(t){if(Vl=null,t=Ja(t),t!==null){var e=M(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=B(e),t!==null)return t;t=null}else if(a===31){if(t=F(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Vl=t,null}function wf(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(If()){case Cs:return 2;case Ds:return 8;case Bn:case Pf:return 32;case ks:return 268435456;default:return 32}default:return 32}}var bs=!1,xa=null,Sa=null,wa=null,Tn=new Map,En=new Map,za=[],pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zf(t,e){switch(t){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Tn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(e.pointerId)}}function jn(t,e,a,i,n,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:l,targetContainers:[n]},e!==null&&(e=Wa(e),e!==null&&xf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function gg(t,e,a,i,n){switch(e){case"focusin":return xa=jn(xa,t,e,a,i,n),!0;case"dragenter":return Sa=jn(Sa,t,e,a,i,n),!0;case"mouseover":return wa=jn(wa,t,e,a,i,n),!0;case"pointerover":var l=n.pointerId;return Tn.set(l,jn(Tn.get(l)||null,t,e,a,i,n)),!0;case"gotpointercapture":return l=n.pointerId,En.set(l,jn(En.get(l)||null,t,e,a,i,n)),!0}return!1}function Af(t){var e=Ja(t.target);if(e!==null){var a=M(e);if(a!==null){if(e=a.tag,e===13){if(e=B(a),e!==null){t.blockedOn=e,Rs(t.priority,function(){Sf(a)});return}}else if(e===31){if(e=F(a),e!==null){t.blockedOn=e,Rs(t.priority,function(){Sf(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=ms(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);mr=i,a.target.dispatchEvent(i),mr=null}else return e=Wa(a),e!==null&&xf(e),t.blockedOn=a,!1;e.shift()}return!0}function Tf(t,e,a){$l(t)&&a.delete(e)}function mg(){bs=!1,xa!==null&&$l(xa)&&(xa=null),Sa!==null&&$l(Sa)&&(Sa=null),wa!==null&&$l(wa)&&(wa=null),Tn.forEach(Tf),En.forEach(Tf)}function Zl(t,e){t.blockedOn===e&&(t.blockedOn=null,bs||(bs=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,mg)))}var Kl=null;function Ef(t){Kl!==t&&(Kl=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Kl===t&&(Kl=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],n=t[e+2];if(typeof i!="function"){if(hs(i||a)===null)continue;break}var l=Wa(a);l!==null&&(t.splice(e,3),e-=3,mo(l,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function ki(t){function e(c){return Zl(c,t)}xa!==null&&Zl(xa,t),Sa!==null&&Zl(Sa,t),wa!==null&&Zl(wa,t),Tn.forEach(e),En.forEach(e);for(var a=0;a<za.length;a++){var i=za[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)Af(a),a.blockedOn===null&&za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],l=a[i+1],r=n[Qt]||null;if(typeof l=="function")r||Ef(a);else if(r){var o=null;if(l&&l.hasAttribute("formAction")){if(n=l,r=l[Qt]||null)o=r.formAction;else if(hs(n)!==null)continue}else o=r.action;typeof o=="function"?a[i+1]=o:(a.splice(i,3),i-=3),Ef(a)}}}function jf(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function vs(t){this._internalRoot=t}Jl.prototype.render=vs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(d(409));var a=e.current,i=re();vf(a,i,t,e,null,null)},Jl.prototype.unmount=vs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vf(t.current,2,null,t,null,null),Cl(),e[Ka]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ns();t={blockedOn:null,target:t,priority:e};for(var a=0;a<za.length&&e!==0&&e<za[a].priority;a++);za.splice(a,0,t),a===0&&Af(t)}};var Mf=T.version;if(Mf!=="19.2.1")throw Error(d(527,Mf,"19.2.1"));D.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=K(e),t=t!==null?$(t):null,t=t===null?null:t.stateNode,t};var hg={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Ui=Wl.inject(hg),It=Wl}catch{}}return Mn.createRoot=function(t,e){if(!j(t))throw Error(d(299));var a=!1,i="",n=Bc,l=Uc,r=Nc;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hf(t,1,!1,null,null,a,i,null,n,l,r,jf),t[Ka]=e.current,Po(t),new vs(e)},Mn.hydrateRoot=function(t,e,a){if(!j(t))throw Error(d(299));var i=!1,n="",l=Bc,r=Uc,o=Nc,c=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),e=hf(t,1,!0,e,a??null,i,n,c,l,r,o,jf),e.context=bf(null),a=e.current,i=re(),i=or(i),n=sa(i),n.callback=null,ua(a,n,i),a=i,e.current.lanes=a,Ri(e,a),ke(e),t[Ka]=e.current,Po(t),new Jl(e)},Mn.version="19.2.1",Mn}var Uf;function Eg(){if(Uf)return ys.exports;Uf=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(T){console.error(T)}}return u(),ys.exports=Tg(),ys.exports}var jg=Eg();const Ot={blur:{primary:"40px",secondary:"24px",subtle:"12px",heavy:"60px"},saturation:{normal:"180%"},radius:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2xl":"24px",full:"9999px"},timing:{micro:"100ms",small:"200ms",medium:"300ms",large:"500ms"},easing:{standard:"cubic-bezier(0.4, 0, 0.2, 1)",emphasized:"cubic-bezier(0.0, 0, 0.2, 1)"}},ut={bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgTertiary:"#111111",bgCard:"rgba(255, 255, 255, 0.02)",textPrimary:"rgba(255, 255, 255, 0.87)",textSecondary:"rgba(255, 255, 255, 0.60)",textTertiary:"rgba(255, 255, 255, 0.38)",accent:"#2A9D8F",accentHover:"#3BB4A5",accentSubtle:"rgba(42, 157, 143, 0.15)",accentRgb:"42, 157, 143",blue:"#4361A5",blueRgb:"67, 97, 165",lightBlue:"#7BA7D9",cyan:"#3BB4B1",border:"rgba(255, 255, 255, 0.08)",borderHover:"rgba(255, 255, 255, 0.15)",gradient:"linear-gradient(135deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientHorizontal:"linear-gradient(90deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientSubtle:"linear-gradient(135deg, rgba(42, 157, 143, 0.15) 0%, rgba(67, 97, 165, 0.15) 100%)",glassBg:"rgba(255, 255, 255, 0.06)",glassBgHover:"rgba(255, 255, 255, 0.10)",glassBorder:"rgba(255, 255, 255, 0.10)",glassHighlight:"rgba(255, 255, 255, 0.15)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.32)",specularHighlight:"rgba(255, 255, 255, 0.25)"},ct={bgPrimary:"#ffffff",bgSecondary:"#f5f5f7",bgTertiary:"#e8e8ed",bgCard:"rgba(0, 0, 0, 0.02)",textPrimary:"rgba(0, 0, 0, 0.87)",textSecondary:"rgba(0, 0, 0, 0.60)",textTertiary:"rgba(0, 0, 0, 0.38)",accent:"#238076",accentHover:"#1a6b63",accentSubtle:"rgba(42, 157, 143, 0.12)",accentRgb:"35, 128, 118",blue:"#3a5491",blueRgb:"58, 84, 145",lightBlue:"#5a8cc7",cyan:"#2f9d9a",border:"rgba(0, 0, 0, 0.06)",borderHover:"rgba(0, 0, 0, 0.12)",gradient:"linear-gradient(135deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientHorizontal:"linear-gradient(90deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientSubtle:"linear-gradient(135deg, rgba(42, 157, 143, 0.1) 0%, rgba(67, 97, 165, 0.1) 100%)",glassBg:"rgba(255, 255, 255, 0.72)",glassBgHover:"rgba(255, 255, 255, 0.85)",glassBorder:"rgba(0, 0, 0, 0.08)",glassHighlight:"rgba(255, 255, 255, 0.9)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.08)",specularHighlight:"rgba(255, 255, 255, 0.8)"},Mg={fontWeight:{regular:400,medium:500,semibold:600,bold:700}},w={typography:Mg,breakpoints:{mobile:"640px",tablet:"1024px",desktop:"1280px"},zIndex:{sticky:100},maxWidth:{wide:"1200px",full:"1440px"}},Cg=wg`
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
    --glass-blur: ${Ot.blur.primary};
    --glass-blur-secondary: ${Ot.blur.secondary};
    --glass-blur-subtle: ${Ot.blur.subtle};
    --glass-blur-heavy: ${Ot.blur.heavy};
    --glass-saturation: ${Ot.saturation.normal};
    
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
    --timing-micro: ${Ot.timing.micro};
    --timing-small: ${Ot.timing.small};
    --timing-medium: ${Ot.timing.medium};
    --timing-large: ${Ot.timing.large};
    --ease-standard: ${Ot.easing.standard};
    --ease-emphasized: ${Ot.easing.emphasized};
    
    /* Border Radius */
    --radius-xs: ${Ot.radius.xs};
    --radius-sm: ${Ot.radius.sm};
    --radius-md: ${Ot.radius.md};
    --radius-lg: ${Ot.radius.lg};
    --radius-xl: ${Ot.radius.xl};
    --radius-2xl: ${Ot.radius["2xl"]};
    --radius-full: ${Ot.radius.full};
  }
  
  /* ============================================
     LIGHT MODE OVERRIDES
     ============================================ */
  
  [data-theme="light"] {
    --bg-primary: ${ct.bgPrimary};
    --bg-secondary: ${ct.bgSecondary};
    --bg-tertiary: ${ct.bgTertiary};
    --bg-card: ${ct.bgCard};
    
    --text-primary: ${ct.textPrimary};
    --text-secondary: ${ct.textSecondary};
    --text-tertiary: ${ct.textTertiary};
    
    --accent: ${ct.accent};
    --accent-hover: ${ct.accentHover};
    --accent-subtle: ${ct.accentSubtle};
    --accent-rgb: ${ct.accentRgb};
    
    --blue: ${ct.blue};
    --blue-rgb: ${ct.blueRgb};
    --cyan: ${ct.cyan};
    --light-blue: ${ct.lightBlue};
    
    --border: ${ct.border};
    --border-hover: ${ct.borderHover};
    
    --gradient: ${ct.gradient};
    --gradient-horizontal: ${ct.gradientHorizontal};
    --gradient-subtle: ${ct.gradientSubtle};
    
    /* Liquid Glass - Light Mode */
    --glass-bg: ${ct.glassBg};
    --glass-bg-hover: ${ct.glassBgHover};
    --glass-border: ${ct.glassBorder};
    --glass-highlight: ${ct.glassHighlight};
    --glass-shadow: ${ct.glassShadow};
    --specular-highlight: ${ct.specularHighlight};
    
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
    position: relative;
    min-height: 100vh;
    overscroll-behavior-x: none;
  }

  ::selection {
    background: var(--accent);
    color: white;
  }

  a {
    text-decoration: none;
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
     UNIFIED THEME TRANSITION
     All color-related properties transition together
     for smooth theme switching at 60fps
     ============================================ */
  
  *,
  *::before,
  *::after {
    transition: 
      background-color var(--timing-medium) var(--ease-standard),
      color var(--timing-medium) var(--ease-standard),
      border-color var(--timing-medium) var(--ease-standard),
      fill var(--timing-medium) var(--ease-standard),
      stroke var(--timing-medium) var(--ease-standard),
      box-shadow var(--timing-medium) var(--ease-standard);
  }
  
  /* Interactive elements also need transform transitions */
  a, button, [role="button"], input, select, textarea {
    transition: 
      background-color var(--timing-medium) var(--ease-standard),
      color var(--timing-medium) var(--ease-standard),
      border-color var(--timing-medium) var(--ease-standard),
      fill var(--timing-medium) var(--ease-standard),
      stroke var(--timing-medium) var(--ease-standard),
      box-shadow var(--timing-medium) var(--ease-standard),
      transform var(--timing-small) var(--ease-standard);
  }
  
  /* Disable ALL transitions during page load to prevent flash */
  .no-transition,
  .no-transition *,
  .no-transition *::before,
  .no-transition *::after {
    transition: none !important;
  }
  
  /* ============================================
     SCROLLBAR - Hidden but functional
     ============================================ */

  /* Hide scrollbar for Chrome, Safari, Edge */
  ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  /* Hide scrollbar for Firefox */
  * {
    scrollbar-width: none;
  }
  
  /* Hide scrollbar for IE/Edge legacy */
  body {
    -ms-overflow-style: none;
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
`,Xf=O.createContext(void 0),As="portfolio-theme-mode",Dg=()=>{if(typeof window<"u"){const u=localStorage.getItem(As),T=window.matchMedia("(prefers-color-scheme: dark)").matches;return u==="dark"||u==="light"?u:T?"dark":"light"}return"dark"},kg=({children:u})=>{const[T,E]=O.useState(Dg),[d,j]=O.useState(()=>{if(typeof window<"u"){const B=localStorage.getItem(As);return B==="dark"||B==="light"}return!1});O.useEffect(()=>{document.documentElement.setAttribute("data-theme",T),requestAnimationFrame(()=>{document.body.classList.remove("no-transition")})},[T]),O.useEffect(()=>{document.body.classList.add("no-transition");const B=requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.body.classList.remove("no-transition")})});return()=>cancelAnimationFrame(B)},[]),O.useEffect(()=>{d&&localStorage.setItem(As,T)},[T,d]);const M=()=>{j(!0),E(B=>B==="dark"?"light":"dark")};return s.jsx(Xf.Provider,{value:{mode:T,toggleTheme:M,isDark:T==="dark"},children:u})},oe=Wt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Ie=Wt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,Hg=Wt`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
`,Vf=Wt`
  0%, 100% { box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.1); }
  50% { box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.2); }
`,Og=Wt`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(3deg); }
`,Bg=Wt`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
`,Ug=Wt`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Ng=Wt`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`,Rg=Wt`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.8; }
`,Lg=p.div`
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
`,Gg=p(v.nav)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  border-radius: var(--radius-2xl);
  max-width: 100%;
  
  background: var(--nav-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  
  border: 1px solid transparent;
  background-clip: padding-box;
  box-shadow: var(--nav-shadow);
  transition: background var(--timing-medium) var(--ease-standard), 
              box-shadow var(--timing-medium) var(--ease-standard);
  
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
    
    &::before { border-radius: 20px; }
  }
  
  @media (max-width: 480px) {
    gap: 2px;
    padding: 5px;
    border-radius: 18px;
    
    &::before { border-radius: 18px; }
  }
`,_g=p(v.a)`
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
  
  background: linear-gradient(
    135deg,
    rgba(42, 157, 143, 0.15) 0%,
    rgba(67, 97, 165, 0.1) 100%
  );
  
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
    animation: ${Ie} 1.5s ease infinite;
  }
  
  &:hover { text-decoration: none; }
  
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
`,qg=p.img`
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
`,Yg=p.div`
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
`,Qg=p(v.a)`
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
  
  & * { cursor: none !important; }
  
  ${({$isActive:u})=>u&&st`
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
`,Xg=p(v.div)`
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
`,Vg=p(v.div)`
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
`,$g=p.div`
  position: relative;
`,Zg=p(v.button)`
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
  
  background: linear-gradient(
    135deg,
    rgba(42, 157, 143, 0.15) 0%,
    rgba(67, 97, 165, 0.1) 100%
  );
  
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
    animation: ${Ie} 1.5s ease infinite;
  }
  
  &:hover { color: var(--text-primary); }
  
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
    
    svg { width: 18px; height: 18px; }
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    
    svg { width: 16px; height: 16px; }
  }
`,Kg=p(v.div)`
  position: absolute;
  inset: -4px;
  border-radius: 20px;
  border: 2px solid var(--accent);
  pointer-events: none;
  animation: ${Rg} 2s ease-in-out infinite;
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
`,Jg=p.div`
  position: absolute;
  top: -6px;
  right: 18px;
  width: 12px;
  height: 12px;
  background: ${({$isDark:u})=>u?"rgba(20, 25, 35, 0.98)":"rgba(255, 255, 255, 0.98)"};
  border-left: 1px solid var(--accent);
  border-top: 1px solid var(--accent);
  transform: rotate(45deg);
  
  @media (max-width: ${w.breakpoints.tablet}) {
    top: auto;
    bottom: -6px;
    transform: rotate(225deg);
  }
`,Wg=p(v.div)`
  position: absolute;
  top: calc(100% + 12px);
  right: -8px;
  padding: 12px 16px;
  border-radius: 12px;
  background: ${({$isDark:u})=>u?"rgba(20, 25, 35, 0.98)":"rgba(255, 255, 255, 0.98)"};
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  border: 1px solid var(--accent);
  box-shadow: ${({$isDark:u})=>u?"0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(42, 157, 143, 0.3), 0 0 30px rgba(42, 157, 143, 0.2)":"0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(42, 157, 143, 0.3), 0 0 30px rgba(42, 157, 143, 0.1)"};
  white-space: nowrap;
  z-index: 100;
  
  @media (max-width: ${w.breakpoints.tablet}) {
    top: auto;
    bottom: calc(100% + 12px);
    right: -8px;
  }
`,Fg=p.span`
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
`,Ig=p.span`
  display: block;
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,$f=[{label:"About",href:"#about"},{label:"Skills",href:"#technologyproficiency"},{label:"Experience",href:"#professionalexperience"},{label:"Projects",href:"#mostproudof"},{label:"Contact",href:"#contact"}];function Pg(){const u=$f.map(E=>E.href.replace("#",""));if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-100)return u[u.length-1];for(const E of[...u].reverse()){const d=document.getElementById(E);if(d&&d.getBoundingClientRect().top<=150)return E}return""}function tm(){const u=O.useCallback(d=>(window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)),[]),T=O.useCallback(()=>Pg(),[]),E=O.useCallback(()=>"",[]);return O.useSyncExternalStore(u,T,E)}function Zf(u,T){u.preventDefault();const E=document.getElementById(T);E&&E.scrollIntoView({behavior:"smooth",block:"start"})}const em=()=>s.jsx(_g,{href:"#home",onClick:u=>Zf(u,"home"),whileHover:{scale:1.05},whileTap:{scale:.95},children:s.jsxs("picture",{children:[s.jsx("source",{srcSet:"/images/logo-100.webp",type:"image/webp"}),s.jsx(qg,{src:"/images/logo-optimized.png",alt:"PN",width:28,height:28,loading:"eager",decoding:"async"})]})}),am=({activeSection:u,hoveredItem:T,setHoveredItem:E})=>s.jsx(Yg,{children:s.jsx(vg,{children:$f.map(d=>{const j=u===d.href.replace("#",""),M=T===d.label;return s.jsxs(Qg,{href:d.href,$isActive:j,$isHovered:M,"aria-current":j?"page":void 0,onClick:B=>Zf(B,d.href.replace("#","")),onMouseEnter:()=>E(d.label),onMouseLeave:()=>E(null),whileTap:{scale:.98},children:[s.jsx(Hi,{children:M&&!j&&s.jsx(Xg,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15}})}),j&&s.jsx(Vg,{layoutId:"nav-active-pill",transition:{type:"spring",stiffness:500,damping:35,mass:1}}),s.jsx("span",{style:{position:"relative",zIndex:1},children:d.label})]},d.label)})})});function im(){const u=O.useContext(Xf);if(!u)throw new Error("useTheme must be used within a ThemeProvider");return u}const ws="portfolio-theme-hint-seen";function nm(){const[u,T]=O.useState(!1);O.useEffect(()=>{if(!localStorage.getItem(ws)){const j=setTimeout(()=>{T(!0)},1500);return()=>clearTimeout(j)}},[]),O.useEffect(()=>{if(u){const d=setTimeout(()=>{T(!1),localStorage.setItem(ws,"true")},8e3);return()=>clearTimeout(d)}},[u]);const E=O.useCallback(()=>{u&&(T(!1),localStorage.setItem(ws,"true"))},[u]);return{showThemeHint:u,dismissHint:E}}const lm=()=>s.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.3},children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"sunGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),s.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),s.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),s.jsx("circle",{cx:"12",cy:"12",r:"5",stroke:"url(#sunGradient)"}),s.jsx("path",{stroke:"url(#sunGradient)",d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]},"sun"),rm=()=>s.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.3},children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"moonGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),s.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),s.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),s.jsx("path",{stroke:"url(#moonGradient)",d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})]},"moon"),om=()=>{const{isDark:u,toggleTheme:T}=im(),{showThemeHint:E,dismissHint:d}=nm(),j=()=>{T(),d()};return s.jsxs($g,{children:[s.jsx(Hi,{children:E&&s.jsxs(s.Fragment,{children:[s.jsx(Kg,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3}}),s.jsxs(Wg,{$isDark:u,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3,delay:.1},children:[s.jsx(Jg,{$isDark:u}),s.jsxs(Fg,{children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"}),s.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),"Toggle Theme"]}),s.jsx(Ig,{children:"Click to switch between light & dark"})]})]})}),s.jsx(Zg,{onClick:j,whileHover:{scale:1.05},whileTap:{scale:.95},title:u?"Switch to light mode":"Switch to dark mode","aria-label":u?"Switch to light mode":"Switch to dark mode",role:"button",children:s.jsx(Hi,{mode:"wait",children:u?s.jsx(lm,{}):s.jsx(rm,{})})})]})},sm=()=>{const u=tm(),[T,E]=O.useState(null);return s.jsx(Lg,{children:s.jsxs(Gg,{"aria-label":"Main navigation",initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:[.25,.1,.25,1],delay:.2},children:[s.jsx(em,{}),s.jsx(am,{activeSection:u,hoveredItem:T,setHoveredItem:E}),s.jsx(om,{})]})})},um="2.0.10",Es=Wt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,cm=Wt`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`,dm=p(v.footer)`
  padding: 48px 24px;
  padding-bottom: 100px;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 56px 80px;
    padding-bottom: 56px;
  }
`,fm=p.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 1px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${Es} 3s ease infinite;
  opacity: 0.6;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 140px;
  }
`,pm=p(v.div)`
  max-width: ${w.maxWidth.wide};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,gm=p(v.p)`
  font-size: 13px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
  letter-spacing: 0.01em;
  line-height: 1.6;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 14px;
  }
`,mm=p(v.span)`
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
`,hm=p.span`
  font-size: 13px;
  display: inline-block;
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${cm} 1.8s ease-in-out infinite, ${Es} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 14px;
  }
`,bm=p.span`
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Es} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${w.typography.fontWeight.semibold};
`,vm=p(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    margin-top: 24px;
  }
`,Nf=p.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,ym=p(v.span)`
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
`,xm=()=>s.jsxs(dm,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:[s.jsx(fm,{}),s.jsxs(pm,{children:[s.jsxs(gm,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:["Designed & Built With",s.jsx(mm,{whileHover:{scale:1.2},transition:{type:"spring",stiffness:400,damping:15},children:s.jsx(hm,{children:"♥"})}),"By ",s.jsx(bm,{children:"Pranshu"})," • © 2025"]}),s.jsxs(vm,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2,duration:.5},children:[s.jsx(Nf,{}),s.jsxs(ym,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:400,damping:20},children:["v",um]}),s.jsx(Nf,{})]})]})]}),Sm=Wt`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`,wm=Wt`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`,zm=p(v.div)`
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
`,Am=p(v.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(42, 157, 143, 0.08) 0%,
    rgba(67, 97, 165, 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
`,Tm=p(v.div)`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,Em=p(v.div)`
  position: absolute;
  width: ${({$size:u})=>u}px;
  height: ${({$size:u})=>u}px;
  border-radius: 50%;
  background: ${({$color:u})=>u};
  filter: blur(1px);
`,jm=p(v.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,Mm=p(v.div)`
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
`,Cm=p(v.div)`
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
`,Dm=p(v.div)`
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
`,zs=p(v.div)`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px solid rgba(42, 157, 143, 0.3);
  animation: ${wm} 2s ease-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`,km=p(v.img)`
  width: 90px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 25px rgba(42, 157, 143, 0.5));
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 110px;
  }
`,Hm=p(v.div)`
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
    animation: ${Sm} 2s ease-in-out infinite;
  }
`,Om={initial:{opacity:1},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2,ease:"easeOut"}}},Bm={initial:{opacity:0,scale:1.5},animate:{opacity:1,scale:1,transition:{duration:1.5}},exit:{opacity:0,scale:.95,transition:{duration:.2}}},Um={initial:{},animate:{},exit:{scale:.9,opacity:0,transition:{duration:.2,ease:"easeOut"}}},Nm={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},Rm={initial:{opacity:0,scale:0,rotate:-180},animate:{opacity:1,scale:1,rotate:0,transition:{type:"spring",stiffness:100,damping:15,delay:.2}}},Lm={initial:{opacity:0,scale:.3,rotateY:-90,filter:"blur(10px)"},animate:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:12,delay:.4}}};function Gm(u){return()=>(u=(u*9301+49297)%233280,u/233280)}function _m(u,T){const E=Gm(T),d=["rgba(42, 157, 143, 0.4)","rgba(59, 180, 177, 0.3)","rgba(67, 97, 165, 0.3)"];return Array.from({length:u},(j,M)=>({id:M,x:E()*100,y:E()*100,size:E()*4+2,color:d[M%3],duration:E()*3+2,delay:E()*2,repeatDelay:E()*2}))}const qm=({onComplete:u})=>{const[T,E]=O.useState("animate"),d=O.useMemo(()=>_m(20,42),[]);return O.useEffect(()=>{const j=setTimeout(()=>{E("exit")},2200);return()=>clearTimeout(j)},[]),O.useEffect(()=>{T==="exit"&&u()},[T,u]),s.jsxs(zm,{variants:Om,initial:"initial",animate:T,children:[s.jsx(Am,{variants:Bm,initial:"initial",animate:T}),s.jsx(Tm,{initial:{opacity:1},animate:{opacity:T==="exit"?0:1},transition:{duration:.2},children:d.map(j=>s.jsx(Em,{$size:j.size,$color:j.color,style:{left:`${j.x}%`,top:`${j.y}%`},initial:{opacity:0,scale:0},animate:{opacity:[0,.8,0],scale:[0,1,0],y:[0,-100]},transition:{duration:j.duration,delay:j.delay,repeat:1/0,repeatDelay:j.repeatDelay}},j.id))}),s.jsx(jm,{variants:Um,initial:"initial",animate:T,children:s.jsxs(Mm,{children:[s.jsx(Cm,{variants:Nm,initial:"initial",animate:"animate"}),s.jsx(zs,{}),s.jsx(zs,{}),s.jsx(zs,{}),s.jsx(Dm,{variants:Rm,initial:"initial",animate:"animate"}),s.jsxs("picture",{children:[s.jsx("source",{srcSet:"/images/logo-optimized.webp",type:"image/webp"}),s.jsx(km,{src:"/images/logo-optimized.png",alt:"PN",width:80,height:80,loading:"eager",decoding:"async",variants:Lm,initial:"initial",animate:"animate"})]}),s.jsx(Hm,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:.5}})]})})]})},Ym=p.canvas`
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
`,Rf=[{r:42,g:157,b:143},{r:59,g:180,b:177},{r:67,g:97,b:165},{r:123,g:167,b:217}],Qm=()=>{const u=O.useRef(null),T=O.useRef([]),E=O.useRef(0),d=O.useRef({x:window.innerWidth/2,y:window.innerHeight/2});return O.useEffect(()=>{const j=u.current;if(!j)return;const M=j.getContext("2d");if(!M)return;const B=()=>{const C=window.devicePixelRatio||1;j.width=window.innerWidth*C,j.height=window.innerHeight*C,j.style.width=`${window.innerWidth}px`,j.style.height=`${window.innerHeight}px`,M.scale(C,C)};B(),window.addEventListener("resize",B);const F=4;T.current=[];for(let C=0;C<F;C++)T.current.push({x:window.innerWidth/2,y:window.innerHeight/2,size:60+C*20,color:Rf[C%Rf.length],speed:.1-C*.015,offset:C*.4});let L=0;const K=()=>{L+=.016,M.clearRect(0,0,j.width,j.height);const C=T.current,P=d.current;for(let _t=C.length-1;_t>=0;_t--){const q=C[_t],Ct=Math.sin(L*1.5+q.offset*4)*15,Se=Math.cos(L*1.5+q.offset*4)*15;q.x+=(P.x+Ct-q.x)*q.speed,q.y+=(P.y+Se-q.y)*q.speed;const bt=q.size+Math.sin(L*1.2+q.offset*2)*8,rt=M.createRadialGradient(q.x,q.y,0,q.x,q.y,bt),{r:dt,g:jt,b:Bt}=q.color;rt.addColorStop(0,`rgba(${dt}, ${jt}, ${Bt}, 0.25)`),rt.addColorStop(.4,`rgba(${dt}, ${jt}, ${Bt}, 0.1)`),rt.addColorStop(.7,`rgba(${dt}, ${jt}, ${Bt}, 0.03)`),rt.addColorStop(1,`rgba(${dt}, ${jt}, ${Bt}, 0)`),M.beginPath(),M.arc(q.x,q.y,bt,0,Math.PI*2),M.fillStyle=rt,M.fill()}E.current=requestAnimationFrame(K)},$=C=>{d.current={x:C.clientX,y:C.clientY}};return window.addEventListener("mousemove",$),E.current=requestAnimationFrame(K),()=>{window.removeEventListener("resize",B),window.removeEventListener("mousemove",$),cancelAnimationFrame(E.current)}},[]),s.jsx(Ym,{ref:u})},Xm=p(v.div)`
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
`,Vm=()=>{const[u,T]=O.useState(!1),[E,d]=O.useState(!1),j=Cf(0),M=Cf(0),B=O.useCallback($=>{j.set($.clientX),M.set($.clientY),u||T(!0)},[j,M,u]),F=O.useCallback(()=>{T(!0)},[]),L=O.useCallback(()=>{T(!1)},[]),K=O.useCallback($=>{const C=$.target;if(C.closest("nav")!==null){d(!1);return}if(C.tagName==="A"||C.closest("a")!==null){d(!0);return}const q=C.tagName==="INPUT"||C.tagName==="TEXTAREA",Ct=C.contentEditable==="true",bt=["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","PRE","CODE","EM","STRONG","B","I","U"].includes(C.tagName),rt=Array.from(C.childNodes).some(jt=>jt.nodeType===Node.TEXT_NODE&&jt.textContent?.trim());d(q||Ct||bt&&rt)},[]);return O.useEffect(()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0)return;document.addEventListener("mousemove",B),document.addEventListener("mouseenter",F),document.addEventListener("mouseleave",L),document.addEventListener("mouseover",K);const C=document.createElement("style");return C.id="custom-cursor-styles",C.textContent=`
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
    `,document.head.appendChild(C),()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseenter",F),document.removeEventListener("mouseleave",L),document.removeEventListener("mouseover",K);const P=document.getElementById("custom-cursor-styles");P&&P.remove()}},[B,F,L,K]),typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0)?null:s.jsx(Xm,{style:{x:j,y:M,translateX:"-50%",translateY:"-50%"},animate:{opacity:u&&!E?1:0,scale:u&&!E?1:0},transition:{duration:.15}})},$m=p.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 24px 40px;
  background: var(--bg-primary);
  overflow: hidden;
  position: relative;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px 60px;
  }
  
  @media (min-width: ${w.breakpoints.desktop}) {
    padding: 100px 48px 60px;
  }
`,Zm=p(v.div)`
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
`,Km=p.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,Jm=p.div`
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
`,Wm=p.div`
  perspective: 1000px;
`,Fm=p(v.div)`
  display: flex;
  justify-content: center;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`,Im=p(v.div)`
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
`,Pm=p(v.div)`
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
`,th=p.picture`
  width: 100%;
  height: 100%;
  display: block;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`,eh=p.div`
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
    animation: ${Ug} 6s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
  }
`,Fl=p(v.div)`
  position: absolute;
  border-radius: var(--radius-lg);
  z-index: -2;
  animation: ${Og} 5s ease-in-out infinite;
  will-change: transform;
  
  ${({$position:u})=>{switch(u){case"top":return`
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
`,ah=p(v.div)`
  position: absolute;
  inset: -60px;
  background: radial-gradient(
    ellipse at center,
    rgba(var(--accent-rgb), 0.2) 0%,
    rgba(var(--blue-rgb), 0.12) 35%,
    transparent 65%
  );
  z-index: -3;
  animation: ${Bg} 3s ease-in-out infinite;
  filter: blur(30px);
  will-change: transform, opacity;
`,ih=p(v.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;
`,nh=p(v.span)`
  width: 40px;
  height: 2px;
  background: var(--gradient-horizontal);
  border-radius: var(--radius-full);
  transform-origin: left;
`,lh=p(v.span)`
  font-size: 13px;
  font-weight: ${w.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${oe} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,rh=p(v.div)`
  overflow: hidden;
  margin-bottom: 24px;
`,oh=p(v.h1)`
  font-size: clamp(52px, 9vw, 96px);
  font-weight: ${w.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.04em;
  line-height: 0.92;
  transition: color var(--timing-medium) var(--ease-standard);
  will-change: transform;
`,sh=p(v.span)`
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
`,uh=p(v.p)`
  font-size: clamp(17px, 2.2vw, 22px);
  font-weight: ${w.typography.fontWeight.regular};
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 20px;
  transition: color var(--timing-medium) var(--ease-standard);
`,ch=p(v.p)`
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--text-tertiary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color var(--timing-medium) var(--ease-standard);
  max-width: 680px;
`,dh=p(v.div)`
  display: flex;
  gap: 14px;
  flex-wrap: nowrap;
  margin-bottom: 56px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`,fh=p(v.a)`
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
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s var(--ease-standard);
  }
  
  &:hover { text-decoration: none; }
  &:hover::before { transform: translateX(100%); }
  
  span, svg { position: relative; z-index: 1; }
  
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
  
  &:hover svg { transform: translateX(4px); }
`,ph=p(v.a)`
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
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover {
    text-decoration: none;
    animation: ${oe} 3s ease infinite;
    box-shadow: 0 8px 32px rgba(var(--accent-rgb), 0.4);
  }
  
  &:hover::before { transform: translateX(100%); }
  
  span { position: relative; z-index: 1; }
  
  svg {
    width: 18px;
    height: 18px;
    transition: transform var(--timing-small) var(--ease-standard);
    position: relative;
    z-index: 1;
  }
  
  &:hover svg { transform: translateX(5px); }
`,gh=p(v.div)`
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
`,mh=p(v.div)`
  text-align: center;
  
  @media (min-width: ${w.breakpoints.mobile}) {
    text-align: left;
  }
`,hh=p(v.span)`
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
`,bh=p.span`
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-transform: uppercase;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.mobile}) {
    font-size: 12px;
  }
`;function vh(u){const T=O.useCallback(j=>{const M=window.matchMedia(u);return M.addEventListener("change",j),()=>M.removeEventListener("change",j)},[u]),E=O.useCallback(()=>window.matchMedia(u).matches,[u]),d=O.useCallback(()=>!1,[]);return O.useSyncExternalStore(T,E,d)}function yh(u=1024){return vh(`(max-width: ${u}px)`)}function xh(){const u=O.useRef(null),T=yh(1024),{scrollYProgress:E}=yg(),d=Df(E,[0,.3],["0%","30%"]),j=Df(E,[0,.15],T?[.9,1]:[1,.95]),M=kf(d,{stiffness:100,damping:30}),B=kf(j,{stiffness:100,damping:30});return{containerRef:u,backgroundY:M,imageScale:B}}p.section`
  padding: 64px 24px;
  background: ${({$variant:u="primary"})=>u==="secondary"?"var(--bg-secondary)":"var(--bg-primary)"};
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`;p.div`
  max-width: 1200px;
  margin: 0 auto;
`;const Ts=u=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...u,children:s.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),Sh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},Il={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,mass:1}}},wh={hidden:{opacity:0,y:80,rotateX:-20},visible:{opacity:1,y:0,rotateX:0,transition:{type:"spring",stiffness:80,damping:20,mass:1.2}}},zh={hidden:{opacity:0,scale:.85,rotateY:-15,filter:"blur(15px)"},visible:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:60,damping:20,mass:1.5,delay:.3}}},Ah={hidden:{scaleX:0},visible:{scaleX:1,transition:{type:"spring",stiffness:100,damping:20,delay:.1}}},Th={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.6}}},Eh={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:150,damping:20}}},jh=[{value:"10+",label:"Years"},{value:"65+",label:"Engineers Led"},{value:"$2M+",label:"Savings"},{value:"15+",label:"Products"}],Mh=u=>{u.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})},Ch=({data:u})=>{const T=u.name.split(" ")[0],E=u.name.split(" ").slice(1).join(" ");return s.jsx(Wm,{children:s.jsxs(v.div,{variants:Sh,initial:"hidden",animate:"visible",children:[s.jsxs(ih,{variants:Il,children:[s.jsx(nh,{variants:Ah}),s.jsx(lh,{children:"Engineering Leader & Architect"})]}),s.jsx(rh,{children:s.jsxs(oh,{variants:wh,children:[s.jsx(sh,{children:T}),s.jsx("br",{}),E]})}),s.jsx(uh,{variants:Il,children:u.designation}),s.jsx(ch,{variants:Il,children:u.headline}),s.jsxs(dh,{variants:Il,children:[s.jsxs(fh,{href:"#contact",onClick:Mh,whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[s.jsx("span",{children:"Get in Touch"}),s.jsx(Ts,{})]}),s.jsxs(ph,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[s.jsx("span",{children:"Download Resume"}),s.jsx(Ts,{})]})]}),s.jsx(gh,{variants:Th,initial:"hidden",animate:"visible",children:jh.map((d,j)=>s.jsxs(mh,{variants:Eh,children:[s.jsx(hh,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:100,damping:15,delay:.7+j*.1},children:d.value}),s.jsx(bh,{children:d.label})]},j))})]})})},Dh=({name:u,imageScale:T})=>s.jsx(Fm,{variants:zh,initial:"hidden",animate:"visible",style:{scale:T},children:s.jsxs(Im,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:200,damping:20},children:[s.jsx(ah,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:.5}}),s.jsx(Fl,{$position:"top",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.6}}),s.jsx(Fl,{$position:"bottom",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.6}}),s.jsx(Fl,{$position:"left",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.9,duration:.6}}),s.jsx(Fl,{$position:"right",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:1.1,duration:.6}}),s.jsx(eh,{}),s.jsx(Pm,{whileHover:{scale:1.03},transition:{type:"spring",stiffness:300,damping:25},children:s.jsxs(th,{children:[s.jsx("source",{srcSet:"/images/profile.webp",type:"image/webp"}),s.jsx("img",{src:"/images/IMG_1153.JPG",alt:`${u} - Engineering Leader & Architect`,width:560,height:560,loading:"eager",decoding:"async",fetchPriority:"high"})]})})]})}),kh=({data:u})=>{const{containerRef:T,backgroundY:E,imageScale:d}=xh();return s.jsxs($m,{id:"home",ref:T,children:[s.jsx(Zm,{style:{y:E}}),s.jsx(Km,{children:s.jsxs(Jm,{children:[s.jsx(Ch,{data:u}),s.jsx(Dh,{name:u.name,imageScale:d})]})})]})};p.div`
  width: 100%;
  max-width: ${({$wide:u})=>u?w.maxWidth.full:w.maxWidth.wide};
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${w.breakpoints.mobile}) {
    padding: 0 32px;
  }

  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 0 48px;
  }
`;const Hh=p(v.div)`
  margin-bottom: 64px;
  position: relative;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    margin-bottom: 88px;
  }
`,Oh=p.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    gap: 32px;
  }
`,Bh=p(v.div)`
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
    animation: ${Ie} 1.5s ease infinite;
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
`,Uh=p.span`
  font-size: 14px;
  font-weight: ${w.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${oe} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-variant-numeric: tabular-nums;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 16px;
  }
`,Nh=p.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Rh=p(v.span)`
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
`,Lh=p(v.h2)`
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: ${w.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.1;
  transition: color var(--timing-medium) var(--ease-standard);
  margin: 0;
`,Gh=p(v.div)`
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 2px;
  width: 60px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${oe} 3s ease infinite;
  border-radius: var(--radius-full);
  transform-origin: left;
  
  /* Glass glow effect */
  box-shadow: 0 0 12px -2px rgba(var(--accent-rgb), 0.4);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 80px;
    bottom: -24px;
  }
`,_h={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},qh={hidden:{opacity:0,scale:.8,filter:"blur(8px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:200,damping:20}}},Yh={hidden:{opacity:0,x:-10,filter:"blur(4px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:150,damping:20}}},Qh={hidden:{opacity:0,y:20,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},Xh={hidden:{scaleX:0,opacity:0},visible:{scaleX:1,opacity:1,transition:{duration:.6,ease:[.25,.1,.25,1],delay:.3}}},Vh={About:"Who I Am",Skills:"Technical Expertise",Experience:"Career Journey",Projects:"Featured Work",Certifications:"Credentials",Testimonials:"What Others Say",Education:"Academic Background",Contact:"Get In Touch"},Ta=({number:u,title:T,inView:E=!0})=>{const d=Vh[T]||"Section";return s.jsxs(Hh,{variants:_h,initial:"hidden",animate:E?"visible":"hidden",children:[s.jsxs(Oh,{children:[s.jsx(Bh,{variants:qh,whileHover:{scale:1.05},whileTap:{scale:.98},children:s.jsx(Uh,{children:u})}),s.jsxs(Nh,{children:[s.jsx(Rh,{variants:Yh,children:d}),s.jsx(Lh,{variants:Qh,children:T})]})]}),s.jsx(Gh,{variants:Xh})]})},Oi=st`
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
`,Kf=st`
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
    animation: ${Ie} 1.5s ease infinite;
  }
`;p(v.div)`
  ${Oi}
  
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--card-shadow);
  transition: 
    background var(--timing-medium) var(--ease-standard),
    box-shadow var(--timing-medium) var(--ease-standard),
    transform var(--timing-small) var(--ease-standard),
    border-color var(--timing-small) var(--ease-standard);
  
  ${({$elevated:u})=>u&&st`
    box-shadow: var(--card-shadow-hover);
  `}
  
  ${({$interactive:u})=>u&&st`
    ${Kf}
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
  
  ${({$accent:u})=>u&&st`
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
`;p(v.div)`
  ${Oi}
  
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  box-shadow: var(--card-shadow);
  
  ${({$subtle:u})=>u&&st`
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
`;p(v.button)`
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
  ${({$size:u="md"})=>{switch(u){case"sm":return st`
          padding: 10px 18px;
          font-size: 13px;
        `;case"lg":return st`
          padding: 18px 36px;
          font-size: 16px;
        `;default:return st`
          padding: 14px 26px;
          font-size: 15px;
        `}}}
  
  /* Variant styles */
  ${({$variant:u="primary"})=>{switch(u){case"secondary":return st`
          ${Oi}
          color: var(--text-primary);
          
          &:hover {
            background: var(--glass-bg-hover);
            box-shadow: var(--card-shadow);
          }
        `;case"ghost":return st`
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          
          &:hover {
            background: var(--glass-bg);
            border-color: var(--border-hover);
            color: var(--text-primary);
          }
        `;default:return st`
          background: var(--gradient);
          background-size: 200% 200%;
          border: none;
          color: white;
          box-shadow: 0 4px 16px rgba(var(--accent-rgb), 0.3);
          
          &:hover {
            animation: ${oe} 3s ease infinite;
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
`;p(v.span)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  border-radius: var(--radius-full);
  letter-spacing: 0.02em;
  
  ${({$variant:u="default"})=>{switch(u){case"accent":return st`
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), rgba(var(--blue-rgb), 0.1));
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent);
        `;case"subtle":return st`
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
        `;default:return st`
          ${Oi}
          color: var(--text-primary);
        `}}}
`;p.div`
  height: 1px;
  width: 100%;
  background: var(--border);
  margin: 24px 0;
  
  ${({$gradient:u})=>u&&st`
    height: 2px;
    background: var(--gradient);
    border-radius: 1px;
  `}
`;p(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Oi}
  ${Kf}
  
  ${({$size:u="md"})=>{switch(u){case"sm":return st`
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          
          svg {
            width: 18px;
            height: 18px;
          }
        `;case"lg":return st`
          width: 56px;
          height: 56px;
          border-radius: var(--radius-xl);
          
          svg {
            width: 28px;
            height: 28px;
          }
        `;default:return st`
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
`;p.input`
  ${Oi}
  
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
`;p(v.div)`
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
`;p(v.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  animation: ${Hg} 4s ease-in-out infinite;
  
  ${({$color:u="accent",$intensity:T="normal"})=>{const E=T==="subtle"?.15:T==="strong"?.35:.25;switch(u){case"blue":return st`
          background: rgba(var(--blue-rgb), ${E});
        `;case"mixed":return st`
          background: radial-gradient(
            ellipse,
            rgba(var(--accent-rgb), ${E}) 0%,
            rgba(var(--blue-rgb), ${E*.7}) 50%,
            transparent 70%
          );
        `;default:return st`
          background: rgba(var(--accent-rgb), ${E});
        `}}}
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;p.span`
  background: var(--gradient);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  ${({$animated:u})=>u&&st`
    animation: ${oe} 4s ease infinite;
  `}
`;const $h=p.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Zh=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,Kh=p(v.div)`
  margin-bottom: 48px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    margin-bottom: 64px;
  }
`,Jh=p(v.div)`
  position: relative;
  padding-left: 36px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding-left: 56px;
  }
`,Wh=p(v.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient);
  background-size: 100% 200%;
  animation: ${oe} 3s ease infinite;
  border-radius: var(--radius-full);
  transform-origin: top;
  box-shadow: 0 0 16px -2px rgba(var(--accent-rgb), 0.4);
`,Fh=p(v.p)`
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: ${w.typography.fontWeight.regular};
  color: var(--text-primary);
  line-height: 1.6;
  letter-spacing: -0.01em;
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
`,Ih=p(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 64px;
  }
`,Lf=p(v.div)``,Gf=p(v.h3)`
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
`,_f=p(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.85;
  transition: color var(--timing-medium) var(--ease-standard);
`,Ph=p(v.div)`
  margin-bottom: 48px;
`,tb=p(v.h3)`
  font-size: 13px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  transition: color var(--timing-medium) var(--ease-standard);
`,eb=p(v.div)`
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
`,ab=p(v.div)`
  position: relative;
  background: var(--bg-primary);
  padding: 36px;
  overflow: hidden;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: background-color var(--timing-medium) var(--ease-standard);
  
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
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%);
    background-size: 200% 100%;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--timing-small) var(--ease-standard);
  }
  
  &:hover::before { transform: scaleX(1); }
  
  &:hover::after {
    opacity: 1;
    animation: ${Ie} 1.5s ease infinite;
  }
  
  @media (min-width: ${w.breakpoints.mobile}) {
    padding: 48px 36px;
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 56px 44px;
  }
`,ib=p(v.h4)`
  font-size: 19px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 18px;
  line-height: 1.35;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
`,nb=p(v.p)`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
`,lb=p(v.div)`
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
`,rb=p(v.p)`
  font-size: 19px;
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 21px;
  }
`,ob=p(v.a)`
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
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover {
    text-decoration: none;
    animation: ${oe} 3s ease infinite;
    box-shadow: 0 8px 32px rgba(var(--accent-rgb), 0.4);
  }
  
  &:hover::before { transform: translateX(100%); }
  
  svg {
    width: 18px;
    height: 18px;
    transition: transform var(--timing-small) var(--ease-standard);
  }
  
  &:hover svg { transform: translateX(5px); }
`,sb={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},ub={hidden:{opacity:0,y:50,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:20,mass:1}}},cb={hidden:{scaleY:0},visible:{scaleY:1,transition:{type:"spring",stiffness:100,damping:20,delay:.2}}},qf={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:u=>({opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,delay:u*.15}})},db={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},fb={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.4,ease:[.25,.46,.45,.94]}}},pb=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}],gb=({data:u})=>{const T=O.useRef(null),E=xe(T,{once:!0,margin:"-100px"}),d=O.useRef(null),j=xe(d,{once:!0,margin:"-50px"}),M=O.useRef(null),B=xe(M,{once:!0,margin:"-50px"}),F=O.useRef(null),L=xe(F,{once:!0,margin:"-50px"}),K=u.content.slice(0,3).map($=>$.replace(/^🔹\s*/,"").trim());return s.jsx($h,{id:"about",ref:T,children:s.jsxs(Zh,{children:[s.jsx(Ta,{number:"01",title:"About",inView:E}),s.jsx(Kh,{ref:d,children:s.jsxs(Jh,{initial:"hidden",animate:j?"visible":"hidden",variants:sb,children:[s.jsx(Wh,{variants:cb}),s.jsx(Fh,{variants:ub,children:K[0]})]})}),s.jsxs(Ih,{ref:M,children:[s.jsxs(Lf,{variants:qf,custom:0,initial:"hidden",animate:B?"visible":"hidden",children:[s.jsx(Gf,{initial:{opacity:0,x:-20},animate:B?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Transformation"}),s.jsx(_f,{initial:{opacity:0,y:20},animate:B?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:K[1]})]}),s.jsxs(Lf,{variants:qf,custom:1,initial:"hidden",animate:B?"visible":"hidden",children:[s.jsx(Gf,{initial:{opacity:0,x:-20},animate:B?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.15},children:"Philosophy"}),s.jsx(_f,{initial:{opacity:0,y:20},animate:B?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.25},children:K[2]})]})]}),s.jsxs(Ph,{ref:F,children:[s.jsx(tb,{initial:{opacity:0,y:20},animate:L?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Key Highlights"}),s.jsx(eb,{variants:db,initial:"hidden",animate:L?"visible":"hidden",children:pb.map(($,C)=>s.jsxs(ab,{variants:fb,children:[s.jsx(ib,{children:$.title}),s.jsx(nb,{children:$.text})]},C))})]}),s.jsxs(lb,{initial:{opacity:0,y:30},animate:E?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[s.jsx(rb,{children:"Want to know more?"}),s.jsxs(ob,{href:u.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[s.jsx("span",{children:u.buttonProps.name}),s.jsx(Ts,{})]})]})]})})},mb=p.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,hb=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,bb=p(v.div)`
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
`,vb=p(v.div)``,yb=p(v.h3)`
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
`,xb=p(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Sb=p(v.li)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,wb=p(v.div)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,zb=p(v.span)`
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
`,Ab=p(v.span)`
  font-size: 13px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  font-weight: ${w.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
`,Tb=p(v.div)`
  width: 100%;
  height: 4px;
  background: var(--glass-border);
  border-radius: var(--radius-full);
  overflow: hidden;
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  /* Subtle inner shadow for depth */
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`,Eb=p.div`
  height: 100%;
  background: var(--gradient-horizontal);
  border-radius: var(--radius-full);
  transform-origin: left;
  width: ${u=>u.$percentage}%;
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
    animation: ${Ie} 2s ease infinite;
    animation-delay: ${u=>u.$delay+.6}s;
  }
  
  ${u=>u.$animate&&st`
    animation: ${Ng} 0.6s cubic-bezier(0.33, 1, 0.68, 1) forwards;
    animation-delay: ${u.$delay}s;
  `}
`,jb=({category:u})=>{const T=O.useRef(null),E=xe(T,{once:!0,margin:"-50px"});return s.jsxs(vb,{ref:T,initial:{opacity:0,y:30,filter:"blur(4px)"},animate:E?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:30,filter:"blur(4px)"},transition:{type:"spring",stiffness:100,damping:20},children:[s.jsx(yb,{children:u.category}),s.jsx(xb,{children:u.skills.map((d,j)=>s.jsxs(Sb,{initial:{opacity:0,x:-20},animate:E?{opacity:1,x:0}:{opacity:0,x:-20},transition:{type:"spring",stiffness:100,damping:20,delay:j*.05},whileHover:{x:8,transition:{type:"spring",stiffness:400,damping:25}},children:[s.jsxs(wb,{children:[s.jsx(zb,{children:d.name}),s.jsxs(Ab,{children:[d.percentage,"%"]})]}),s.jsx(Tb,{children:s.jsx(Eb,{$percentage:d.percentage,$delay:.1+j*.06,$animate:E})})]},d.name))})]})},Mb=({data:u})=>{const T=O.useRef(null),E=xe(T,{once:!0,margin:"-100px"});return s.jsx(mb,{id:"technologyproficiency",ref:T,children:s.jsxs(hb,{children:[s.jsx(Ta,{number:"02",title:"Skills",inView:E}),s.jsx(bb,{children:u.skills.map(d=>s.jsx(jb,{category:d},d.category))})]})})},Cb=Wt`
  0%, 100% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0); }
  50% { box-shadow: 0 0 20px 5px rgba(var(--accent-rgb), 0.15); }
`,Db=p.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,kb=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,Hb=p(v.div)``,Ob=p(v.div)`
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
`,Bb=p(v.div)``,Ub=p(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color var(--timing-medium) var(--ease-standard);
`,Nb=p(v.div)``,Rb=p(v.div)``,Lb=p.h3`
  font-size: 22px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin-bottom: 4px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 24px;
  }
  
  a {
    color: var(--text-primary);
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
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    &:hover {
      color: var(--accent);
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
`,Gb=p(v.button)`
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
  background: ${({$isOpen:u})=>u?"var(--accent)":"var(--glass-bg)"};
  backdrop-filter: blur(var(--glass-blur-secondary));
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
  outline: 1.5px solid ${({$isOpen:u})=>u?"var(--accent)":"var(--glass-border)"};
  
  ${({$isOpen:u})=>u&&st`
    animation: ${Cb} 2s ease-in-out infinite;
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
    animation: ${Ie} 1.5s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,_b=p(v.span)`
  font-size: 12px;
  font-weight: ${w.typography.fontWeight.medium};
  color: ${({$isOpen:u})=>u?"var(--bg-primary)":"var(--text-secondary)"};
  white-space: nowrap;
  letter-spacing: 0.02em;
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
`,qb=p(v.span)`
  display: inline-flex;
  align-items: center;
`,Yb=p(v.p)`
  font-size: 16px;
  color: var(--accent);
  font-weight: ${w.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
`,Qb=p(v.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  flex-wrap: wrap;
`,Xb=p.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
  font-weight: ${w.typography.fontWeight.medium};
`,Vb=p.span`
  font-size: 14px;
  color: var(--text-secondary);
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
`,$b=p(v.p)`
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
`,Zb=p.div`
  display: grid;
  grid-template-rows: ${({$isExpanded:u})=>u?"1fr":"0fr"};
  transition: grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1);
`,Kb=p.div`
  min-height: 0;
  overflow: hidden;
`,Jb=p.div`
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  opacity: ${({$isExpanded:u})=>u?1:0};
  transform: translateY(${({$isExpanded:u})=>u?"0":"-4px"});
  transition: opacity 0.25s ease, transform 0.25s ease, border-color var(--timing-medium) var(--ease-standard);
`,Wb=p.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: ${({$isExpanded:u})=>u?1:0};
  transition: opacity 0.3s ease;
`,Fb=p.li`
  font-size: 15px;
  line-height: 1.75;
  padding-left: 20px;
  position: relative;
  opacity: ${({$isExpanded:u})=>u?1:0};
  transform: translateY(${({$isExpanded:u})=>u?"0":"8px"});
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition-delay: ${({$index:u,$isExpanded:T})=>T?`${u*.05}s`:"0s"};
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    background: var(--accent);
    border-radius: var(--radius-full);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  &:hover::before {
    transform: scale(1.4);
    box-shadow: 0 0 8px var(--accent);
  }
`,Ib=p.span`
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--accent);
`,Pb=p.span`
  color: var(--text-secondary);
`,tv=({data:u})=>{const[T,E]=O.useState(new Set),d=O.useRef(null),j=xe(d,{once:!0,margin:"-100px"}),M=B=>{E(F=>{const L=new Set(F);return L.has(B)?L.delete(B):L.add(B),L})};return s.jsx(Db,{id:"professionalexperience",ref:d,children:s.jsxs(kb,{children:[s.jsx(Ta,{number:"03",title:"Experience",inView:j}),s.jsx(Hb,{children:u.timeline.map((B,F)=>{const L=T.has(F);return s.jsxs(Ob,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:[s.jsx(Bb,{children:s.jsx(Ub,{children:B.date})}),s.jsxs(Nb,{children:[s.jsxs(Rb,{children:[s.jsx(Lb,{children:s.jsx("a",{href:B.url,target:"_blank",rel:"noopener noreferrer",children:B.title})}),s.jsx(Yb,{children:B.subTitle}),B.previously&&s.jsxs(Qb,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.1},children:[s.jsx(Xb,{children:"Previously:"}),s.jsx(Vb,{children:B.previously})]})]}),s.jsx($b,{dangerouslySetInnerHTML:{__html:B.descriptionSummary}}),s.jsx(Gb,{$isOpen:L,whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},onClick:()=>M(F),"aria-expanded":L,"aria-label":L?"Show less":"Show more",children:s.jsxs(_b,{$isOpen:L,children:["Show ",s.jsx(Hi,{mode:"wait",children:s.jsx(qb,{initial:"hidden",animate:"visible",exit:"exit",children:(L?"Less":"More").split("").map((K,$)=>s.jsx(v.span,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:$*.05}},exit:{opacity:0,transition:{delay:(3-$)*.03}}},children:K},$))},L?"less":"more")})]})}),s.jsx(Zb,{$isExpanded:L,children:s.jsx(Kb,{children:s.jsx(Jb,{$isExpanded:L,children:s.jsx(Wb,{$isExpanded:L,children:B.achievements?.map((K,$)=>s.jsxs(Fb,{$index:$,$isExpanded:L,children:[s.jsx(Ib,{children:K.title}),": ",s.jsx(Pb,{children:K.description})]},$))})})})})]})]},F)})})]})})},ev=p.section`
  padding: 64px 24px;
  overflow: hidden;
  background: var(--bg-primary);
  position: relative;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,av=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,iv=p(v.div)`
  position: relative;
`,nv=p.div`
  position: relative;
  perspective: 1000px;
`,lv=p(v.article)`
  border-radius: var(--radius-xl);
  will-change: transform, opacity;
  overflow: hidden;
  position: relative;
  animation: ${Vf} 4s ease-in-out infinite;
  
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  box-shadow: var(--card-shadow);
  transition: background var(--timing-medium) var(--ease-standard);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius-xl);
    padding: 1.5px;
    background: var(--gradient);
    background-size: 200% 200%;
    animation: ${oe} 4s ease infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.6;
  }
  
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
`,rv=p(v.div)`
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
    background: linear-gradient(90deg, transparent, var(--glass-bg-hover), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s var(--ease-standard);
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 32px 40px;
  }
`,ov=p(v.h3)`
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
`,sv=p(v.button)`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  border: 1.5px solid ${({$isExpanded:u})=>u?"var(--accent)":"var(--glass-border)"};
  background: ${({$isExpanded:u})=>u?"var(--accent-subtle)":"var(--glass-bg)"};
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
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: var(--radius-full);
    background: var(--gradient);
    opacity: 0;
    transition: opacity var(--timing-small) var(--ease-standard);
  }
  
  &:hover::before { opacity: 0.2; }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity var(--timing-small) var(--ease-standard);
  }
  
  &:hover::after {
    opacity: 1;
    animation: ${Ie} 1.5s ease infinite;
  }
  
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({$isExpanded:u})=>u?"var(--accent)":"var(--text-secondary)"};
    will-change: transform;
    position: relative;
    z-index: 1;
  }
`,uv=p.div`
  display: grid;
  grid-template-rows: ${({$isExpanded:u})=>u?"1fr":"0fr"};
  transition: grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1);
`,cv=p(v.div)`
  min-height: 0;
  overflow: hidden;
`,dv=p(v.div)`
  padding: 0 32px 32px;
  border-top: 1px solid var(--glass-border);
  padding-top: 28px;
  transition: border-color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 0 40px 36px;
    padding-top: 32px;
  }
`,fv=p(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 36px;
  }
`,pv=p(v.li)`
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
`,gv=p(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 48px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    gap: 36px;
    margin-top: 56px;
  }
`,Yf=p(v.button)`
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
  
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur-secondary));
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--glass-bg-hover);
    opacity: 0;
    transition: opacity var(--timing-small) var(--ease-standard);
    border-radius: var(--radius-full);
  }
  
  &:hover:not(:disabled)::before { opacity: 1; }
  
  &:hover:not(:disabled) {
    border-color: var(--text-secondary);
    color: var(--text-primary);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
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
`,mv=p(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,hv=p(v.button)`
  width: ${({$isActive:u})=>u?"36px":"12px"};
  height: 12px;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  background: ${({$isActive:u})=>u?"var(--gradient)":"var(--glass-border)"};
  background-size: 200% 200%;
  ${({$isActive:u})=>u&&st`
    animation: ${oe} 3s ease infinite;
  `}
  will-change: width, background;
  transition: background var(--timing-small) var(--ease-standard);
  
  &:hover {
    background: ${({$isActive:u})=>u?"var(--gradient)":"var(--text-tertiary)"};
  }
`,bv={enter:u=>({x:u>0?80:-80,opacity:0,scale:.98}),center:{x:0,opacity:1,scale:1,transition:{type:"spring",stiffness:500,damping:35,mass:.8}},exit:u=>({x:u<0?80:-80,opacity:0,scale:.98,transition:{type:"spring",stiffness:500,damping:35,mass:.8}})},vv={collapsed:{opacity:0},expanded:{opacity:1,transition:{duration:.25,ease:[.4,0,.2,1],delay:.1}}},yv={collapsed:{opacity:0,y:-6},expanded:{opacity:1,y:0,transition:{duration:.3,ease:[.4,0,.2,1]}}},xv={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.025,delayChildren:.08}}},Sv={collapsed:{opacity:0,x:-8},expanded:{opacity:1,x:0,transition:{duration:.2,ease:[.4,0,.2,1]}}};function wv({totalItems:u,animationDuration:T=350,wheelThreshold:E=20,swipeThreshold:d=30,velocityThreshold:j=200}){const[[M,B],F]=O.useState([0,0]),[L,K]=O.useState(!1),[$,C]=O.useState(!1),P=O.useRef(null),_t=O.useRef(0),q=O.useCallback(bt=>{if($)return;const rt=M+bt;rt>=0&&rt<u&&(C(!0),F([rt,bt]),K(!1),setTimeout(()=>C(!1),T))},[M,u,$,T]),Ct=O.useCallback(bt=>{if($||bt===M)return;const rt=bt>M?1:-1;C(!0),F([bt,rt]),K(!1),setTimeout(()=>C(!1),T)},[M,$,T]);O.useEffect(()=>{const bt=P.current;if(!bt)return;const rt=dt=>{const jt=Date.now();if(jt-_t.current<300)return;const Bt=Math.abs(dt.deltaX)>Math.abs(dt.deltaY)?dt.deltaX:dt.deltaY;if(Math.abs(Bt)>E){const se=M<u-1,we=M>0;(Bt>0&&se||Bt<0&&we)&&(dt.preventDefault(),dt.stopPropagation(),_t.current=jt,Bt>0?q(1):q(-1))}};return bt.addEventListener("wheel",rt,{passive:!1}),()=>bt.removeEventListener("wheel",rt)},[M,u,q,E]);const Se=O.useCallback((bt,rt)=>{$||(rt.velocity.x>j||rt.offset.x>d?M>0&&q(-1):(rt.velocity.x<-j||rt.offset.x<-d)&&M<u-1&&q(1))},[M,u,$,q,d,j]);return{activeIndex:M,direction:B,isAnimating:$,cardRef:P,paginate:q,goToSlide:Ct,handleDragEnd:Se,setIsExpanded:K,isExpanded:L}}const zv=({title:u,content:T,isExpanded:E,onToggle:d})=>s.jsxs(s.Fragment,{children:[s.jsxs(rv,{$isExpanded:E,onClick:d,whileHover:{scale:1.01},transition:{type:"spring",stiffness:400,damping:25},children:[s.jsx(ov,{children:u}),s.jsx(sv,{$isExpanded:E,"aria-label":E?"Collapse project details":"Expand project details","aria-expanded":E,animate:{rotate:E?45:0,scale:E?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:s.jsx(v.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:s.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),s.jsx(uv,{$isExpanded:E,children:s.jsx(cv,{initial:"collapsed",animate:E?"expanded":"collapsed",variants:vv,children:s.jsx(dv,{initial:"collapsed",animate:E?"expanded":"collapsed",variants:yv,children:s.jsx(fv,{variants:xv,initial:"collapsed",animate:E?"expanded":"collapsed",children:T.map((j,M)=>s.jsx(pv,{variants:Sv,children:j},M))})})})})]}),Av=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),Tv=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:s.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),Ev=({activeIndex:u,totalItems:T,isInView:E,onPaginate:d,onGoToSlide:j,projectTitles:M})=>s.jsxs(gv,{initial:{opacity:0,y:20},animate:E?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[s.jsx(Yf,{onClick:()=>d(-1),disabled:u===0,"aria-label":"Previous project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:s.jsx(Av,{})}),s.jsx(mv,{role:"tablist","aria-label":"Project navigation",children:M.map((B,F)=>s.jsx(hv,{$isActive:u===F,onClick:()=>j(F),role:"tab","aria-selected":u===F,"aria-label":`Go to project ${F+1}: ${B}`,whileHover:{scale:1.1},whileTap:{scale:.95},animate:{width:u===F?36:12},transition:{type:"spring",stiffness:400,damping:25}},F))}),s.jsx(Yf,{onClick:()=>d(1),disabled:u===T-1,"aria-label":"Next project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:s.jsx(Tv,{})})]}),jv=({data:u})=>{const T=O.useRef(null),E=xe(T,{once:!0,margin:"-100px"}),{activeIndex:d,direction:j,cardRef:M,paginate:B,goToSlide:F,handleDragEnd:L,isExpanded:K,setIsExpanded:$}=wv({totalItems:u.content.length}),C=u.content[d];return s.jsx(ev,{id:"mostproudof",ref:T,children:s.jsxs(av,{children:[s.jsx(Ta,{number:"04",title:"Projects",inView:E}),s.jsxs(iv,{initial:{opacity:0,y:40},animate:E?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:20,delay:.2},children:[s.jsx(nv,{ref:M,children:s.jsx(Hi,{initial:!1,custom:j,mode:"wait",children:s.jsx(lv,{custom:j,variants:bv,initial:"enter",animate:"center",exit:"exit",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.1,dragMomentum:!1,onDragEnd:L,transition:{x:{type:"spring",stiffness:500,damping:35,mass:.8},opacity:{duration:.2},scale:{type:"spring",stiffness:500,damping:35,mass:.8}},style:{cursor:"grab",touchAction:"pan-y"},whileDrag:{cursor:"grabbing",scale:1.01},children:s.jsx(zv,{title:C.title,content:C.content,isExpanded:K,onToggle:()=>$(!K)})},d)})}),s.jsx(Ev,{activeIndex:d,totalItems:u.content.length,isInView:E,onPaginate:B,onGoToSlide:F,projectTitles:u.content.map(P=>P.title)})]})]})})},Mv=p.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Cv=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,Dv=p(v.div)`
  display: flex;
  flex-direction: column;
`,kv=p(v.div)`
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
`,Hv=p(v.div)`
  flex: 1;
`,Ov=p(v.h3)`
  font-size: 18px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 6px;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 20px;
  }
`,Bv=p(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Uv=p(v.a)`
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
    animation: ${Ie} 1.5s ease infinite;
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
`,Nv=({data:u})=>{const T=O.useRef(null),E=xe(T,{once:!0,margin:"-100px"}),d=j=>j.toLowerCase().includes("azure")||j.toLowerCase().includes("microsoft")?"Microsoft":j.toLowerCase().includes("aws")?"Amazon Web Services":"";return s.jsx(Mv,{id:"certifications",ref:T,children:s.jsxs(Cv,{children:[s.jsx(Ta,{number:"05",title:"Certifications",inView:E}),s.jsx(Dv,{children:u.certificateProps.certificateMetaData.map((j,M)=>s.jsxs(kv,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:M*.08},whileHover:{x:12,transition:{type:"spring",stiffness:400,damping:25}},children:[s.jsxs(Hv,{children:[s.jsx(Ov,{children:j.title}),s.jsx(Bv,{children:d(j.title)})]}),s.jsxs(Uv,{href:j.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[s.jsx("span",{children:"Verify"}),s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),s.jsx("polyline",{points:"15,3 21,3 21,9"}),s.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]},M))})]})})},Rv=p.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Lv=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,Gv=p(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }
`,_v=p(v.blockquote)`
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
    animation: ${oe} 3s ease infinite;
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
`,qv=p(v.div)`
  font-size: 56px;
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${oe} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 24px;
  font-weight: bold;
  position: relative;
  z-index: 1;
`,Yv=p(v.p)`
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
`,Qv=p(v.footer)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  z-index: 1;
`,Xv=p(v.cite)`
  font-size: 16px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  font-style: normal;
  transition: color var(--timing-medium) var(--ease-standard);
`,Vv=p(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
`,$v=({data:u})=>{const T=O.useRef(null),E=xe(T,{once:!0,margin:"-100px"});return s.jsx(Rv,{id:"testimonials",ref:T,children:s.jsxs(Lv,{children:[s.jsx(Ta,{number:"06",title:"Testimonials",inView:E}),s.jsx(Gv,{children:u.quoteProps.quoteMetaData.map((d,j)=>s.jsxs(_v,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:j*.1},whileHover:{y:-8,scale:1.02,transition:{type:"spring",stiffness:300,damping:20}},children:[s.jsx(qv,{children:'"'}),s.jsx(Yv,{children:d.quote}),s.jsxs(Qv,{children:[s.jsx(Xv,{children:d.givenBy}),s.jsx(Vv,{children:d.subTitleGivenBy})]})]},j))})]})})},Zv=p.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Kv=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,Jv=p(v.div)`
  display: flex;
  flex-direction: column;
`,Wv=p(v.div)`
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
`,Fv=p(v.span)`
  font-size: 15px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color var(--timing-medium) var(--ease-standard);
  font-weight: ${w.typography.fontWeight.medium};
`,Iv=p(v.div)``,Pv=p(v.h3)`
  font-size: 20px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 22px;
  }
`,t1=p(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
`,e1=({data:u})=>{const T=O.useRef(null),E=xe(T,{once:!0,margin:"-100px"});return s.jsx(Zv,{id:"educationalqualifications",ref:T,children:s.jsxs(Kv,{children:[s.jsx(Ta,{number:"07",title:"Education",inView:E}),s.jsx(Jv,{children:u.timeline.map((d,j)=>s.jsxs(Wv,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:j*.1},whileHover:{x:16,transition:{type:"spring",stiffness:400,damping:25}},children:[s.jsx(Fv,{children:d.date}),s.jsxs(Iv,{children:[s.jsx(Pv,{children:d.title}),s.jsx(t1,{children:d.subTitle})]})]},j))})]})})},a1=p.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,i1=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,n1=p(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 72px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`,l1=p(v.div)``,r1=p(v.h3)`
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: ${w.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  transition: color var(--timing-medium) var(--ease-standard);
`,o1=p(v.p)`
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color var(--timing-medium) var(--ease-standard);
`,s1=p(v.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,u1=p(v.a)`
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
    animation: ${oe} 3s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,c1=p(v.div)`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  animation: ${Vf} 4s ease-in-out infinite;
  
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
`,d1=p(v.div)`
  position: relative;
  z-index: 1;
`,f1=p(v.span)`
  display: block;
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  transition: color var(--timing-medium) var(--ease-standard);
`,p1=p(v.span)`
  font-size: 17px;
  font-weight: ${w.typography.fontWeight.medium};
  color: var(--text-primary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Qf={mail:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[s.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),s.jsx("path",{d:"M22 6L12 13 2 6"})]}),email:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[s.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),s.jsx("path",{d:"M22 6L12 13 2 6"})]}),phone:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:s.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),linkedin:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[s.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),s.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),s.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),location:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]})},g1=({data:u})=>{const T=O.useRef(null),E=xe(T,{once:!0,margin:"-100px"}),d=M=>Qf[M.toLowerCase()]||Qf.mail,j=M=>({mail:"Email",email:"Email",phone:"Phone",linkedin:"LinkedIn",location:"Location"})[M.toLowerCase()]||M;return s.jsx(a1,{id:"contact",ref:T,children:s.jsxs(i1,{children:[s.jsx(Ta,{number:"08",title:"Contact",inView:E}),s.jsxs(n1,{children:[s.jsxs(l1,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:80,damping:18},children:[s.jsx(r1,{children:"Let's work together"}),s.jsx(o1,{children:"Have a project in mind or want to discuss opportunities? I'd love to hear from you."})]}),s.jsx(s1,{children:u.contactMetaData.filter(M=>M.icon.toLowerCase()!=="phone").map((M,B)=>s.jsxs(u1,{href:M.href,target:M.href.startsWith("http")?"_blank":void 0,rel:M.href.startsWith("http")?"noopener noreferrer":void 0,initial:{opacity:0,x:30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:18,delay:B*.1},whileHover:{x:12,scale:1.02,transition:{type:"spring",stiffness:400,damping:25}},whileTap:{scale:.98},children:[s.jsx(c1,{whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:20},children:d(M.icon)}),s.jsxs(d1,{children:[s.jsx(f1,{children:j(M.icon)}),s.jsx(p1,{children:M.content})]})]},B))})]})]})})},m1={sectionTitle:"About Me",content:["🔹  I architect systems that process 200M+ records across 100+ tables in under 15 minutes — with zero downtime. Currently the Enterprise Architect of Promotion Advisor, McKinsey Periscope's flagship multi-tenant SaaS, where I lead end-to-end technical strategy across agentic AI, cloud-native platforms, and high-throughput data infrastructure for 65+ engineers and global enterprise CPG and retail clients.","An expert in designing multi-agent AI architectures (MCP connectors, evaluation harnesses, instruction-set ownership), transforming legacy monoliths into cloud-native microservices on Kubernetes, and modernizing data pipelines with Databricks, ClickHouse, and PostgreSQL — delivering billion-row sub-second analytics and sub-2 second response times on 2M+ record datasets.","Passionate about Spec-Driven Development and the AI-led SDLC. Coached org-wide adoption of Cursor and SDD frameworks (OpenSpec, SpecKit, BMad), delivering a 37% capacity increase. I balance technical depth with measurable business outcomes — embedding security-first practices (SOC2, Casbin, two-layer FAC + DAC) and FinOps discipline across the SDLC, and aligning architecture roadmaps with OKRs."],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},h1={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},b1={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},v1={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},y1={name:"Pranshu Nijhawan",designation:"Architecting Agentic AI. Engineering at Scale.",headline:"Principal Architect with 10+ years in enterprise SaaS, currently the Enterprise Architect of McKinsey Periscope's flagship multi-tenant Promotion Advisor platform across 65+ engineers. I architect agentic AI systems (MCP, multi-agent orchestration, evaluation harnesses), high-performance data platforms (sub-2 second response on 2M+ records, billion-row ClickHouse analytics), and two-layer security (FAC + DAC with Casbin) — while coaching org-wide AI-assisted engineering that delivered a 37% capacity increase and spearheading Spec-Driven Development to evolve the organization toward an AI-led SDLC.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},x1={sectionTitle:"Most Proud Of",content:[{id:1,title:"Multi-Agent AI Architecture for Promotion Advisor (Periscope)",content:["Built a multi-agent architecture for McKinsey's flagship Promotion Advisor SaaS, with MCP (Model Context Protocol) connectors, externalized instruction sets owned by product teams, and evaluation harnesses for continuous quality.","Read-replica isolation with data-access control enforced at the SQL layer ensured agentic workflows could never cross tenant or authorization boundaries.","Cut business-rule changes from multi-day deploys to hour-level config updates, dramatically accelerating client-driven iteration cycles.","Established the architectural pattern for product teams to self-serve new agentic capabilities without architectural review."]},{id:2,title:"Spec-Driven Development Agents & AI-Led SDLC",content:["Introduced org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit, BMad) across greenfield and brownfield product development.","Developed the 'Spec-Driven Development Agent' and 'Repo Mastery Agent' — autonomous systems enforcing 11-dimension anti-hallucination audits and 100/100 Spec Quality Scores.","Established the abstraction and technical detail required for Devs, Product Managers, and QAs to seamlessly collaborate on a shared spec.","Coaching delivered a 37% capacity increase across the engineering organization, evolving the SDLC toward an AI-led model.","Built and deployed 10+ production agents (Architecture Diagram Generators, ADR / APR Writers, automated Technical Communications)."]},{id:3,title:"Real-Time Conflict Engine — 5,000x Algorithmic Speedup",content:["Built real-time multi-dimensional conflict detection on PostgreSQL using progressive candidate narrowing for the Promotion Advisor platform.","Delivered sub-2 second response times on 2M+ record datasets with multi-dimensional eligibility rules.","Achieved a 5,000x algorithmic improvement over the prior implementation through query restructuring and index strategy.","Unlocked interactive what-if analysis for consulting clients that was previously a batch-only workflow."]},{id:4,title:"ClickHouse Analytics Platform — Billion-Row Sub-Second Queries",content:["Architected the platform's ClickHouse analytics layer for billion-row sub-second queries powering interactive dashboards.","Optimized the data model with Projections and Dictionaries; built a dynamic Query Builder Engine for runtime-composed analytical queries.","Delivered 6.6–12.6x cost efficiency versus Databricks SQL Serverless on equivalent workloads.","Achieved ~11x compression versus Delta Lake on the same datasets, materially reducing storage and scan costs."]},{id:5,title:"Two-Layer Authorization Engine (FAC + DAC) with Casbin",content:["Designed a two-layer authorization architecture so unauthorized data never leaves the database.","Layer 1 — Feature Access Control: enforces capability-level permissions at the GraphQL resolver middleware.","Layer 2 — Data Access Control: integrates Casbin at the SQL layer, dynamically rewriting queries based on identity, tenant, and role.","Replaced ad-hoc per-query permission checks with a single declarative policy surface auditable across the platform."]},{id:6,title:"Analytics Cost Migration — $172K Annual Savings",content:["Migrated heavy analytics workloads from variable-cost Databricks compute to fixed-cost PostgreSQL.","Cut annual analytics infrastructure spend by $172K (a 23–50% reduction depending on the workload profile).","Re-architected query patterns and data models to make PostgreSQL competitive with Databricks SQL on the migrated workloads.","Delivered FinOps wins without compromising analytical capability or query latency for end users."]},{id:7,title:"Zero-Downtime ETL Platform — Blue/Green Data Processing at Scale",content:["Engineered a highly scalable and fault-tolerant ETL platform using Databricks, Spark, Azure Data Factory, and PostgreSQL.","Designed around a Blue/Green deployment strategy to ensure zero downtime during data ingestion and transformation cycles.","Processed 200+ million records across 100+ tables in under 15 minutes using Change Data Capture (CDC) and dynamic schema allocation.","Enabled seamless schema evolution and pipeline reusability across multiple tenants and data domains."]},{id:8,title:"Multi-Tradition Astrology Engine with MCP Server (Personal Project)",content:["Built a Python computation engine bridging multiple astrological traditions on Swiss Ephemeris, with ML weight calibration and a Monte Carlo null baseline.","Exposed via a custom MCP (Model Context Protocol) server enabling LLM-driven natural-language consultations through Cursor / Claude clients.","Demonstrates end-to-end MCP server authoring, statistical baselining, and multi-tradition model unification in a single package."]},{id:9,title:"pnos-native — Personal Productivity Desktop App (Personal Project)",content:["Native cross-platform desktop app built on Tauri 2 + Rust + React + TypeScript.","Features a command palette, rich-text editing, and AI agent workflow integration as first-class citizens.","A personal sandbox for testing agentic workflow patterns at the desktop OS layer outside the browser sandbox."]}]},S1={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect I",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 – Present",descriptionSummary:`At McKinsey, I serve as the Enterprise Architect of <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a>, a flagship multi-tenant SaaS in the <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> suite for CPG and retail clients. I built the platform's multi-agent AI architecture, coached org-wide AI-assisted engineering that delivered a 37% capacity increase, and spearheaded Spec-Driven Development to evolve the organization toward an AI-led SDLC — while leading 65+ engineers across 5 Development and 1 Core Support Squad and partnering with senior consulting leaders on high-stakes RFPs and enterprise implementations.`,achievements:[{title:"Agentic AI Architecture",description:"Built a multi-agent architecture for the platform using MCP (Model Context Protocol) connectors, externalized instruction sets owned by product teams, evaluation harnesses, and read-replica isolation with data-access control enforced at the SQL layer. Cut business-rule changes from multi-day deploys to hour-level config updates."},{title:"Spec-Driven Development & AI-Led SDLC",description:"Introduced org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit) across greenfield and brownfield product development. Developed the 'Spec-Driven Development Agent' and 'Repo Mastery Agent' — autonomous systems enforcing 11-dimension anti-hallucination audits and 100/100 Spec Quality Scores — establishing the abstraction and technical detail required for Devs, Product Managers, and QAs to seamlessly collaborate on a shared spec."},{title:"Enterprise Agent Skills Library",description:"Built a comprehensive library of autonomous, self-contained AI agents leveraging embedded design systems, deterministic validation checklists, and MCP tools. Deployed 10+ production agents across enterprise products, including Architecture Diagram Generators, ADR/APR Writers, and automated Technical Communications."},{title:"Real-Time Conflict Engine — 5,000x Speedup",description:"Built real-time multi-dimensional conflict detection on PostgreSQL using progressive candidate narrowing. Delivered sub-2 second response times on 2M+ records, achieving a 5,000x algorithmic improvement over the prior implementation."},{title:"ClickHouse Analytics Platform",description:"Built the platform's ClickHouse analytics layer for billion-row sub-second queries. Optimized the data model with Projections and Dictionaries and built a dynamic Query Builder Engine. Delivered 6.6–12.6x cost efficiency vs Databricks SQL Serverless and ~11x compression vs Delta Lake."},{title:"Analytics Cost Migration — $172K/Year Savings",description:"Migrated heavy analytics workloads from variable-cost Databricks compute to fixed-cost PostgreSQL. Cut annual analytics infrastructure spend by $172K (a 23–50% reduction depending on the workload)."},{title:"Two-Layer Authorization Engine (FAC + DAC)",description:"Built a two-layer authorization engine. Layer 1 (Feature Access Control) enforces at the GraphQL resolver middleware. Layer 2 (Data Access Control) integrates Casbin at the SQL layer, dynamically rewriting queries so unauthorized data never leaves the database."},{title:"NL-to-SQL ML Prototyping",description:"Trained a custom encoder-decoder transformer (BPE tokenizer, PyTorch) and fine-tuned T5 on synthetic NL-to-SQL datasets generated from production PostgreSQL schemas."},{title:"Engineering Standards & FinOps",description:"Institutionalized cross-product standards by publishing the C4 Architecture Handbook, deploying a serverless Azure cost attribution dashboard via GitHub Actions, and building an automated external API documentation pipeline with Git changelog guardrails."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 – March 2022",descriptionSummary:'At Eptura, I re-architected a single-tenant workspace SaaS — <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software) — to cloud-native microservices on AKS and built a global IoT release orchestrator synchronizing 300M+ devices. Directed 20 engineers across 4 squads, driving technical excellence and team growth.',achievements:[{title:"Cloud-Native Re-Architecture",description:"Migrated legacy single-tenant SaaS to cloud-native microservices on Azure Kubernetes Service (AKS). Delivered 60% faster incident recovery and eliminated single-tenant scaling bottlenecks critical for client operations."},{title:"Global IoT Release Orchestration",description:"Built a release orchestration system (Azure IoT Hub, Azure Functions, Azure CosmosDB) synchronizing firmware updates across 300M+ IoT devices globally with zero-downtime rollouts."},{title:"Engineering Leadership",description:"Directed 20 engineers (4 tech leads) across four squads. Established a structured mentorship program: +20% retention and accelerated engineering progression."}]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 – April 2021",descriptionSummary:"At Nagarro, I shipped full-stack web and mobile applications for e-commerce and HR enterprise clients on Angular, .NET Core, PostgreSQL, and Ionic. Established CI/CD and IaC practices that cut deployment failures by 70% across client projects.",achievements:[{title:"Full-Stack Web + Mobile Delivery",description:"Shipped production apps on Angular, .NET Core, PostgreSQL, and Ionic Framework for e-commerce and HR clients with 99.5%+ uptime across web and mobile."},{title:"CI/CD & Infrastructure as Code",description:"Established CI/CD pipelines and IaC practices: 70% reduction in deployment failures across client projects, ensuring stable and predictable software releases."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 – December 2019",descriptionSummary:'At Condeco, I shipped C# / .NET / React / SQL Server microservices for the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> workspace SaaS that sustained 3x customer growth without reliability regressions. Cut build times by 40% and core query latency by 3x through data model refactoring.',achievements:[{title:"Microservices for 3x Customer Scale",description:"Designed and shipped C# / .NET / React / SQL Server microservices, sustaining 3x customer scale-up without reliability regressions for the workspace SaaS platform."},{title:"CI/CD & Data Model Optimization",description:"Cut build times by 40% and refactored core data models to reduce average query latency by 3x, resulting in faster, more reliable releases and improved client-facing performance."}]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",previously:"Intern",date:"February 2016 – August 2018",descriptionSummary:"At Gartner, I shipped backend features on C# / .NET Core / React for an HR analytics SaaS, improving survey data accuracy by 60% for consulting clients. Automated SQL workflows saved 240+ engineering hours annually.",achievements:[{title:"SaaS Analytics Backend",description:"Shipped backend features on C# / .NET Core / React for the HR analytics platform, improving employee survey data accuracy by 60% for consulting clients."},{title:"SQL Workflow Automation",description:"Developed and automated SQL workflows (stored procedures, SQL Agent jobs): saved 240+ engineering hours annually in manual data processing and improved data delivery efficiency for clients."}],last:!0}]},w1={sectionTitle:"Technology Proficiency",skills:[{icon:"AI",category:"AI & Agentic Engineering",skills:[{name:"Multi-Agent Orchestration",percentage:100},{name:"MCP (Model Context Protocol)",percentage:100},{name:"Cursor (Rules / Skills / Agents / Hooks / SDK)",percentage:100},{name:"Spec-Driven Development (OpenSpec, SpecKit, BMad)",percentage:100},{name:"RAG & Evaluation Frameworks",percentage:90},{name:"PyTorch / T5 Fine-tuning, NL-to-SQL",percentage:80}]},{icon:"Architecture",category:"Architecture",skills:[{name:"Multi-Tenant SaaS Architecture",percentage:100},{name:"Microservices & Event-Driven Architecture",percentage:100},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Distributed Systems",percentage:100},{name:"C4 Modeling & ADR / APR Authorship",percentage:95},{name:"Serverless",percentage:80}]},{icon:"Backend",category:"Backend",skills:[{name:"TypeScript / Node.js / Fastify",percentage:100},{name:"C# / .NET Core",percentage:100},{name:"Python",percentage:90},{name:"GraphQL",percentage:90},{name:"REST APIs",percentage:100}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"TypeScript",percentage:100},{name:"Angular",percentage:90},{name:"Micro-Frontends",percentage:90},{name:"Ionic Framework",percentage:60}]},{icon:"Database",category:"Data & Storage",skills:[{name:"PostgreSQL",percentage:100},{name:"ClickHouse",percentage:95},{name:"SQL Server",percentage:95},{name:"NoSQL (CosmosDB, DynamoDB)",percentage:85}]},{icon:"Cloud",category:"Cloud & Infrastructure",skills:[{name:"Microsoft Azure",percentage:95},{name:"Amazon Web Services (AWS)",percentage:85},{name:"Kubernetes (AKS)",percentage:90},{name:"Terraform / ArgoCD / Helm (GitOps)",percentage:90}]},{icon:"DataEngineering",category:"Data Engineering & Real-Time Analytics",skills:[{name:"Databricks (PySpark, SparkSQL)",percentage:90},{name:"ClickHouse Analytics (Projections, Dictionaries)",percentage:95},{name:"Real-Time Analytics & Query Engines",percentage:95},{name:"Blue-Green ETL & Data Modeling",percentage:90}]},{icon:"Security",category:"Security & Compliance",skills:[{name:"Two-Layer FAC + DAC Architecture",percentage:100},{name:"Casbin RBAC / ABAC",percentage:95},{name:"SOC2 / Secure SDLC",percentage:90},{name:"Wiz / SonarQube / OpenTelemetry",percentage:85}]}]},z1={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},A1={aboutSection:m1,certifications:h1,contactMe:b1,educationalQualifications:v1,homeSection:y1,mostProudOf:x1,professionalExperience:S1,technologyProficiency:w1,testimonials:z1},Fe=A1;function T1(){const[u,T]=O.useState(!1);return s.jsxs(kg,{children:[s.jsx(Cg,{}),s.jsx(Vm,{}),s.jsx(Qm,{}),s.jsx(Hi,{children:!u&&s.jsx(qm,{onComplete:()=>T(!0)})}),u&&s.jsxs(s.Fragment,{children:[s.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),s.jsx(sm,{}),s.jsxs("main",{id:"main-content",style:{position:"relative"},role:"main",children:[s.jsx(kh,{data:Fe.homeSection}),s.jsx(gb,{data:Fe.aboutSection}),s.jsx(Mb,{data:Fe.technologyProficiency}),s.jsx(tv,{data:Fe.professionalExperience}),s.jsx(jv,{data:Fe.mostProudOf}),s.jsx(Nv,{data:Fe.certifications}),s.jsx($v,{data:Fe.testimonials}),s.jsx(e1,{data:Fe.educationalQualifications}),s.jsx(g1,{data:Fe.contactMe})]}),s.jsx(xm,{})]})]})}jg.createRoot(document.getElementById("root")).render(s.jsx(O.StrictMode,{children:s.jsx(T1,{})}));
