import{r as q,j as c,m as v,A as we,u as yg,a as bc,b as Ef,c as xa}from"./vendor-motion-BoSVoJ0s.js";import{r as xg,a as Sg}from"./vendor-react-DlBnNAMw.js";import{f as zg,m as rt,d,l as ct}from"./vendor-styled-Du6AN5G6.js";(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))g(E);new MutationObserver(E=>{for(const D of E)if(D.type==="childList")for(const B of D.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&g(B)}).observe(document,{childList:!0,subtree:!0});function C(E){const D={};return E.integrity&&(D.integrity=E.integrity),E.referrerPolicy&&(D.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?D.credentials="include":E.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function g(E){if(E.ep)return;E.ep=!0;const D=C(E);fetch(E.href,D)}})();var vc={exports:{}},En={},yc={exports:{}},xc={};var jf;function wg(){return jf||(jf=1,(function(f){function A(w,M){var G=w.length;w.push(M);t:for(;0<G;){var dt=G-1>>>1,ft=w[dt];if(0<E(ft,M))w[dt]=M,w[G]=ft,G=dt;else break t}}function C(w){return w.length===0?null:w[0]}function g(w){if(w.length===0)return null;var M=w[0],G=w.pop();if(G!==M){w[0]=G;t:for(var dt=0,ft=w.length,Xt=ft>>>1;dt<Xt;){var yt=2*(dt+1)-1,tt=w[yt],Ct=yt+1,Ea=w[Ct];if(0>E(tt,G))Ct<ft&&0>E(Ea,tt)?(w[dt]=Ea,w[Ct]=G,dt=Ct):(w[dt]=tt,w[yt]=G,dt=yt);else if(Ct<ft&&0>E(Ea,G))w[dt]=Ea,w[Ct]=G,dt=Ct;else break t}}return M}function E(w,M){var G=w.sortIndex-M.sortIndex;return G!==0?G:w.id-M.id}if(f.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;f.unstable_now=function(){return D.now()}}else{var B=Date,mt=B.now();f.unstable_now=function(){return B.now()-mt}}var R=[],U=[],L=1,j=null,X=3,Ut=!1,J=!1,Nt=!1,ht=!1,W=typeof setTimeout=="function"?setTimeout:null,zt=typeof clearTimeout=="function"?clearTimeout:null,vt=typeof setImmediate<"u"?setImmediate:null;function Dt(w){for(var M=C(U);M!==null;){if(M.callback===null)g(U);else if(M.startTime<=w)g(U),M.sortIndex=M.expirationTime,A(R,M);else break;M=C(U)}}function Ft(w){if(Nt=!1,Dt(w),!J)if(C(R)!==null)J=!0,ca||(ca=!0,ua());else{var M=C(U);M!==null&&Ca(Ft,M.startTime-w)}}var ca=!1,Sa=-1,za=5,Qe=-1;function jn(){return ht?!0:!(f.unstable_now()-Qe<za)}function Ve(){if(ht=!1,ca){var w=f.unstable_now();Qe=w;var M=!0;try{t:{J=!1,Nt&&(Nt=!1,zt(Sa),Sa=-1),Ut=!0;var G=X;try{a:{for(Dt(w),j=C(R);j!==null&&!(j.expirationTime>w&&jn());){var dt=j.callback;if(typeof dt=="function"){j.callback=null,X=j.priorityLevel;var ft=dt(j.expirationTime<=w);if(w=f.unstable_now(),typeof ft=="function"){j.callback=ft,Dt(w),M=!0;break a}j===C(R)&&g(R),Dt(w)}else g(R);j=C(R)}if(j!==null)M=!0;else{var Xt=C(U);Xt!==null&&Ca(Ft,Xt.startTime-w),M=!1}}break t}finally{j=null,X=G,Ut=!1}M=void 0}}finally{M?ua():ca=!1}}}var ua;if(typeof vt=="function")ua=function(){vt(Ve)};else if(typeof MessageChannel<"u"){var Mn=new MessageChannel,Oi=Mn.port2;Mn.port1.onmessage=Ve,ua=function(){Oi.postMessage(null)}}else ua=function(){W(Ve,0)};function Ca(w,M){Sa=W(function(){w(f.unstable_now())},M)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(w){w.callback=null},f.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):za=0<w?Math.floor(1e3/w):5},f.unstable_getCurrentPriorityLevel=function(){return X},f.unstable_next=function(w){switch(X){case 1:case 2:case 3:var M=3;break;default:M=X}var G=X;X=M;try{return w()}finally{X=G}},f.unstable_requestPaint=function(){ht=!0},f.unstable_runWithPriority=function(w,M){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var G=X;X=w;try{return M()}finally{X=G}},f.unstable_scheduleCallback=function(w,M,G){var dt=f.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?dt+G:dt):G=dt,w){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=G+ft,w={id:L++,callback:M,priorityLevel:w,startTime:G,expirationTime:ft,sortIndex:-1},G>dt?(w.sortIndex=G,A(U,w),C(R)===null&&w===C(U)&&(Nt?(zt(Sa),Sa=-1):Nt=!0,Ca(Ft,G-dt))):(w.sortIndex=ft,A(R,w),J||Ut||(J=!0,ca||(ca=!0,ua()))),w},f.unstable_shouldYield=jn,f.unstable_wrapCallback=function(w){var M=X;return function(){var G=X;X=M;try{return w.apply(this,arguments)}finally{X=G}}}})(xc)),xc}var Mf;function Tg(){return Mf||(Mf=1,yc.exports=wg()),yc.exports}var kf;function Ag(){if(kf)return En;kf=1;var f=Tg(),A=xg(),C=Sg();function g(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function D(t){var a=t,e=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(e=a.return),t=a.return;while(t)}return a.tag===3?e:null}function B(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function mt(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function R(t){if(D(t)!==t)throw Error(g(188))}function U(t){var a=t.alternate;if(!a){if(a=D(t),a===null)throw Error(g(188));return a!==t?null:t}for(var e=t,i=a;;){var n=e.return;if(n===null)break;var l=n.alternate;if(l===null){if(i=n.return,i!==null){e=i;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===e)return R(n),t;if(l===i)return R(n),a;l=l.sibling}throw Error(g(188))}if(e.return!==i.return)e=n,i=l;else{for(var r=!1,o=n.child;o;){if(o===e){r=!0,e=n,i=l;break}if(o===i){r=!0,i=n,e=l;break}o=o.sibling}if(!r){for(o=l.child;o;){if(o===e){r=!0,e=l,i=n;break}if(o===i){r=!0,i=l,e=n;break}o=o.sibling}if(!r)throw Error(g(189))}}if(e.alternate!==i)throw Error(g(190))}if(e.tag!==3)throw Error(g(188));return e.stateNode.current===e?t:a}function L(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=L(t),a!==null)return a;t=t.sibling}return null}var j=Object.assign,X=Symbol.for("react.element"),Ut=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),ht=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),zt=Symbol.for("react.consumer"),vt=Symbol.for("react.context"),Dt=Symbol.for("react.forward_ref"),Ft=Symbol.for("react.suspense"),ca=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),za=Symbol.for("react.lazy"),Qe=Symbol.for("react.activity"),jn=Symbol.for("react.memo_cache_sentinel"),Ve=Symbol.iterator;function ua(t){return t===null||typeof t!="object"?null:(t=Ve&&t[Ve]||t["@@iterator"],typeof t=="function"?t:null)}var Mn=Symbol.for("react.client.reference");function Oi(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Nt:return"Fragment";case W:return"Profiler";case ht:return"StrictMode";case Ft:return"Suspense";case ca:return"SuspenseList";case Qe:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case J:return"Portal";case vt:return t.displayName||"Context";case zt:return(t._context.displayName||"Context")+".Consumer";case Dt:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sa:return a=t.displayName||null,a!==null?a:Oi(t.type)||"Memo";case za:a=t._payload,t=t._init;try{return Oi(t(a))}catch{}}return null}var Ca=Array.isArray,w=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},dt=[],ft=-1;function Xt(t){return{current:t}}function yt(t){0>ft||(t.current=dt[ft],dt[ft]=null,ft--)}function tt(t,a){ft++,dt[ft]=t.current,t.current=a}var Ct=Xt(null),Ea=Xt(null),Fa=Xt(null),kn=Xt(null);function Dn(t,a){switch(tt(Fa,a),tt(Ea,t),tt(Ct,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?Kd(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=Kd(a),t=Jd(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(Ct),tt(Ct,t)}function $e(){yt(Ct),yt(Ea),yt(Fa)}function Fl(t){t.memoizedState!==null&&tt(kn,t);var a=Ct.current,e=Jd(a,t.type);a!==e&&(tt(Ea,t),tt(Ct,e))}function Cn(t){Ea.current===t&&(yt(Ct),yt(Ea)),kn.current===t&&(yt(kn),zn._currentValue=G)}var Il,Tc;function Ae(t){if(Il===void 0)try{throw Error()}catch(e){var a=e.stack.trim().match(/\n( *(at )?)/);Il=a&&a[1]||"",Tc=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Il+t+Tc}var Pl=!1;function tr(t,a){if(!t||Pl)return"";Pl=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(a){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(y){var b=y}Reflect.construct(t,[],T)}else{try{T.call()}catch(y){b=y}t.call(T.prototype)}}else{try{throw Error()}catch(y){b=y}(T=t())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(y){if(y&&b&&typeof y.stack=="string")return[y.stack,b.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),r=l[0],o=l[1];if(r&&o){var u=r.split(`
`),h=o.split(`
`);for(n=i=0;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(i===u.length||n===h.length)for(i=u.length-1,n=h.length-1;1<=i&&0<=n&&u[i]!==h[n];)n--;for(;1<=i&&0<=n;i--,n--)if(u[i]!==h[n]){if(i!==1||n!==1)do if(i--,n--,0>n||u[i]!==h[n]){var x=`
`+u[i].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=i&&0<=n);break}}}finally{Pl=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ae(e):""}function Wf(t,a){switch(t.tag){case 26:case 27:case 5:return Ae(t.type);case 16:return Ae("Lazy");case 13:return t.child!==a&&a!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return tr(t.type,!1);case 11:return tr(t.type.render,!1);case 1:return tr(t.type,!0);case 31:return Ae("Activity");default:return""}}function Ac(t){try{var a="",e=null;do a+=Wf(t,e),e=t,t=t.return;while(t);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ar=Object.prototype.hasOwnProperty,er=f.unstable_scheduleCallback,ir=f.unstable_cancelCallback,Ff=f.unstable_shouldYield,If=f.unstable_requestPaint,It=f.unstable_now,Pf=f.unstable_getCurrentPriorityLevel,Ec=f.unstable_ImmediatePriority,jc=f.unstable_UserBlockingPriority,On=f.unstable_NormalPriority,t0=f.unstable_LowPriority,Mc=f.unstable_IdlePriority,a0=f.log,e0=f.unstable_setDisableYieldValue,Hi=null,Pt=null;function Ia(t){if(typeof a0=="function"&&e0(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Hi,t)}catch{}}var ta=Math.clz32?Math.clz32:l0,i0=Math.log,n0=Math.LN2;function l0(t){return t>>>=0,t===0?32:31-(i0(t)/n0|0)|0}var Hn=256,Bn=262144,Un=4194304;function Ee(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nn(t,a,e){var i=t.pendingLanes;if(i===0)return 0;var n=0,l=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~l,i!==0?n=Ee(i):(r&=o,r!==0?n=Ee(r):e||(e=o&~t,e!==0&&(n=Ee(e))))):(o=i&~l,o!==0?n=Ee(o):r!==0?n=Ee(r):e||(e=i&~t,e!==0&&(n=Ee(e)))),n===0?0:a!==0&&a!==n&&(a&l)===0&&(l=n&-n,e=a&-a,l>=e||l===32&&(e&4194048)!==0)?a:n}function Bi(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function r0(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kc(){var t=Un;return Un<<=1,(Un&62914560)===0&&(Un=4194304),t}function nr(t){for(var a=[],e=0;31>e;e++)a.push(t);return a}function Ui(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function o0(t,a,e,i,n,l){var r=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var o=t.entanglements,u=t.expirationTimes,h=t.hiddenUpdates;for(e=r&~e;0<e;){var x=31-ta(e),T=1<<x;o[x]=0,u[x]=-1;var b=h[x];if(b!==null)for(h[x]=null,x=0;x<b.length;x++){var y=b[x];y!==null&&(y.lane&=-536870913)}e&=~T}i!==0&&Dc(t,i,0),l!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=l&~(r&~a))}function Dc(t,a,e){t.pendingLanes|=a,t.suspendedLanes&=~a;var i=31-ta(a);t.entangledLanes|=a,t.entanglements[i]=t.entanglements[i]|1073741824|e&261930}function Cc(t,a){var e=t.entangledLanes|=a;for(t=t.entanglements;e;){var i=31-ta(e),n=1<<i;n&a|t[i]&a&&(t[i]|=a),e&=~n}}function Oc(t,a){var e=a&-a;return e=(e&42)!==0?1:lr(e),(e&(t.suspendedLanes|a))!==0?0:e}function lr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hc(){var t=M.p;return t!==0?t:(t=window.event,t===void 0?32:yf(t.type))}function Bc(t,a){var e=M.p;try{return M.p=t,a()}finally{M.p=e}}var Pa=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Pa,Qt="__reactProps$"+Pa,Ze="__reactContainer$"+Pa,or="__reactEvents$"+Pa,c0="__reactListeners$"+Pa,u0="__reactHandles$"+Pa,Uc="__reactResources$"+Pa,Ni="__reactMarker$"+Pa;function cr(t){delete t[Gt],delete t[Qt],delete t[or],delete t[c0],delete t[u0]}function Ke(t){var a=t[Gt];if(a)return a;for(var e=t.parentNode;e;){if(a=e[Ze]||e[Gt]){if(e=a.alternate,a.child!==null||e!==null&&e.child!==null)for(t=ef(t);t!==null;){if(e=t[Gt])return e;t=ef(t)}return a}t=e,e=t.parentNode}return null}function Je(t){if(t=t[Gt]||t[Ze]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Gi(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(g(33))}function We(t){var a=t[Uc];return a||(a=t[Uc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ot(t){t[Ni]=!0}var Nc=new Set,Gc={};function je(t,a){Fe(t,a),Fe(t+"Capture",a)}function Fe(t,a){for(Gc[t]=a,t=0;t<a.length;t++)Nc.add(a[t])}var s0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qc={},_c={};function d0(t){return ar.call(_c,t)?!0:ar.call(qc,t)?!1:s0.test(t)?_c[t]=!0:(qc[t]=!0,!1)}function Gn(t,a,e){if(d0(a))if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var i=a.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+e)}}function qn(t,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+e)}}function Oa(t,a,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(a,e,""+i)}}function sa(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rc(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function f0(t,a,e){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,l=i.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return n.call(this)},set:function(r){e=""+r,l.call(this,r)}}),Object.defineProperty(t,a,{enumerable:i.enumerable}),{getValue:function(){return e},setValue:function(r){e=""+r},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function ur(t){if(!t._valueTracker){var a=Rc(t)?"checked":"value";t._valueTracker=f0(t,a,""+t[a])}}function Yc(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var e=a.getValue(),i="";return t&&(i=Rc(t)?t.checked?"true":"false":t.value),t=i,t!==e?(a.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var p0=/[\n"\\]/g;function da(t){return t.replace(p0,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function sr(t,a,e,i,n,l,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),a!=null?r==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+sa(a)):t.value!==""+sa(a)&&(t.value=""+sa(a)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),a!=null?dr(t,r,sa(a)):e!=null?dr(t,r,sa(e)):i!=null&&t.removeAttribute("value"),n==null&&l!=null&&(t.defaultChecked=!!l),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+sa(o):t.removeAttribute("name")}function Xc(t,a,e,i,n,l,r,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),a!=null||e!=null){if(!(l!=="submit"&&l!=="reset"||a!=null)){ur(t);return}e=e!=null?""+sa(e):"",a=a!=null?""+sa(a):e,o||a===t.value||(t.value=a),t.defaultValue=a}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),ur(t)}function dr(t,a,e){a==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function Ie(t,a,e,i){if(t=t.options,a){a={};for(var n=0;n<e.length;n++)a["$"+e[n]]=!0;for(e=0;e<t.length;e++)n=a.hasOwnProperty("$"+t[e].value),t[e].selected!==n&&(t[e].selected=n),n&&i&&(t[e].defaultSelected=!0)}else{for(e=""+sa(e),a=null,n=0;n<t.length;n++){if(t[n].value===e){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}a!==null||t[n].disabled||(a=t[n])}a!==null&&(a.selected=!0)}}function Lc(t,a,e){if(a!=null&&(a=""+sa(a),a!==t.value&&(t.value=a),e==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=e!=null?""+sa(e):""}function Qc(t,a,e,i){if(a==null){if(i!=null){if(e!=null)throw Error(g(92));if(Ca(i)){if(1<i.length)throw Error(g(93));i=i[0]}e=i}e==null&&(e=""),a=e}e=sa(a),t.defaultValue=e,i=t.textContent,i===e&&i!==""&&i!==null&&(t.value=i),ur(t)}function Pe(t,a){if(a){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=a;return}}t.textContent=a}var g0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vc(t,a,e){var i=a.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?i?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":i?t.setProperty(a,e):typeof e!="number"||e===0||g0.has(a)?a==="float"?t.cssFloat=e:t[a]=(""+e).trim():t[a]=e+"px"}function $c(t,a,e){if(a!=null&&typeof a!="object")throw Error(g(62));if(t=t.style,e!=null){for(var i in e)!e.hasOwnProperty(i)||a!=null&&a.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var n in a)i=a[n],a.hasOwnProperty(n)&&e[n]!==i&&Vc(t,n,i)}else for(var l in a)a.hasOwnProperty(l)&&Vc(t,l,a[l])}function fr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var m0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),h0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(t){return h0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ha(){}var pr=null;function gr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ti=null,ai=null;function Zc(t){var a=Je(t);if(a&&(t=a.stateNode)){var e=t[Qt]||null;t:switch(t=a.stateNode,a.type){case"input":if(sr(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),a=e.name,e.type==="radio"&&a!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+da(""+a)+'"][type="radio"]'),a=0;a<e.length;a++){var i=e[a];if(i!==t&&i.form===t.form){var n=i[Qt]||null;if(!n)throw Error(g(90));sr(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<e.length;a++)i=e[a],i.form===t.form&&Yc(i)}break t;case"textarea":Lc(t,e.value,e.defaultValue);break t;case"select":a=e.value,a!=null&&Ie(t,!!e.multiple,a,!1)}}}var mr=!1;function Kc(t,a,e){if(mr)return t(a,e);mr=!0;try{var i=t(a);return i}finally{if(mr=!1,(ti!==null||ai!==null)&&(jl(),ti&&(a=ti,t=ai,ai=ti=null,Zc(a),t)))for(a=0;a<t.length;a++)Zc(t[a])}}function qi(t,a){var e=t.stateNode;if(e===null)return null;var i=e[Qt]||null;if(i===null)return null;e=i[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(g(231,a,typeof e));return e}var Ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hr=!1;if(Ba)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){hr=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{hr=!1}var te=null,br=null,Yn=null;function Jc(){if(Yn)return Yn;var t,a=br,e=a.length,i,n="value"in te?te.value:te.textContent,l=n.length;for(t=0;t<e&&a[t]===n[t];t++);var r=e-t;for(i=1;i<=r&&a[e-i]===n[l-i];i++);return Yn=n.slice(t,1<i?1-i:void 0)}function Xn(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Ln(){return!0}function Wc(){return!1}function Vt(t){function a(e,i,n,l,r){this._reactName=e,this._targetInst=n,this.type=i,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(e=t[o],this[o]=e?e(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ln:Wc,this.isPropagationStopped=Wc,this}return j(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),a}var Me={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qn=Vt(Me),Ri=j({},Me,{view:0,detail:0}),b0=Vt(Ri),vr,yr,Yi,Vn=j({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yi&&(Yi&&t.type==="mousemove"?(vr=t.screenX-Yi.screenX,yr=t.screenY-Yi.screenY):yr=vr=0,Yi=t),vr)},movementY:function(t){return"movementY"in t?t.movementY:yr}}),Fc=Vt(Vn),v0=j({},Vn,{dataTransfer:0}),y0=Vt(v0),x0=j({},Ri,{relatedTarget:0}),xr=Vt(x0),S0=j({},Me,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=Vt(S0),w0=j({},Me,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T0=Vt(w0),A0=j({},Me,{data:0}),Ic=Vt(A0),E0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=M0[t])?!!a[t]:!1}function Sr(){return k0}var D0=j({},Ri,{key:function(t){if(t.key){var a=E0[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Xn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?j0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(t){return t.type==="keypress"?Xn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),C0=Vt(D0),O0=j({},Vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pc=Vt(O0),H0=j({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr}),B0=Vt(H0),U0=j({},Me,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=Vt(U0),G0=j({},Vn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q0=Vt(G0),_0=j({},Me,{newState:0,oldState:0}),R0=Vt(_0),Y0=[9,13,27,32],zr=Ba&&"CompositionEvent"in window,Xi=null;Ba&&"documentMode"in document&&(Xi=document.documentMode);var X0=Ba&&"TextEvent"in window&&!Xi,tu=Ba&&(!zr||Xi&&8<Xi&&11>=Xi),au=" ",eu=!1;function iu(t,a){switch(t){case"keyup":return Y0.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ei=!1;function L0(t,a){switch(t){case"compositionend":return nu(a);case"keypress":return a.which!==32?null:(eu=!0,au);case"textInput":return t=a.data,t===au&&eu?null:t;default:return null}}function Q0(t,a){if(ei)return t==="compositionend"||!zr&&iu(t,a)?(t=Jc(),Yn=br=te=null,ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return tu&&a.locale!=="ko"?null:a.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!V0[t.type]:a==="textarea"}function ru(t,a,e,i){ti?ai?ai.push(i):ai=[i]:ti=i,a=Bl(a,"onChange"),0<a.length&&(e=new Qn("onChange","change",null,e,i),t.push({event:e,listeners:a}))}var Li=null,Qi=null;function $0(t){Xd(t,0)}function $n(t){var a=Gi(t);if(Yc(a))return t}function ou(t,a){if(t==="change")return a}var cu=!1;if(Ba){var wr;if(Ba){var Tr="oninput"in document;if(!Tr){var uu=document.createElement("div");uu.setAttribute("oninput","return;"),Tr=typeof uu.oninput=="function"}wr=Tr}else wr=!1;cu=wr&&(!document.documentMode||9<document.documentMode)}function su(){Li&&(Li.detachEvent("onpropertychange",du),Qi=Li=null)}function du(t){if(t.propertyName==="value"&&$n(Qi)){var a=[];ru(a,Qi,t,gr(t)),Kc($0,a)}}function Z0(t,a,e){t==="focusin"?(su(),Li=a,Qi=e,Li.attachEvent("onpropertychange",du)):t==="focusout"&&su()}function K0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $n(Qi)}function J0(t,a){if(t==="click")return $n(a)}function W0(t,a){if(t==="input"||t==="change")return $n(a)}function F0(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var aa=typeof Object.is=="function"?Object.is:F0;function Vi(t,a){if(aa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var e=Object.keys(t),i=Object.keys(a);if(e.length!==i.length)return!1;for(i=0;i<e.length;i++){var n=e[i];if(!ar.call(a,n)||!aa(t[n],a[n]))return!1}return!0}function fu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pu(t,a){var e=fu(t);t=0;for(var i;e;){if(e.nodeType===3){if(i=t+e.textContent.length,t<=a&&i>=a)return{node:e,offset:a-t};t=i}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=fu(e)}}function gu(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?gu(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function mu(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=_n(t.document);a instanceof t.HTMLIFrameElement;){try{var e=typeof a.contentWindow.location.href=="string"}catch{e=!1}if(e)t=a.contentWindow;else break;a=_n(t.document)}return a}function Ar(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var I0=Ba&&"documentMode"in document&&11>=document.documentMode,ii=null,Er=null,$i=null,jr=!1;function hu(t,a,e){var i=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;jr||ii==null||ii!==_n(i)||(i=ii,"selectionStart"in i&&Ar(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$i&&Vi($i,i)||($i=i,i=Bl(Er,"onSelect"),0<i.length&&(a=new Qn("onSelect","select",null,a,e),t.push({event:a,listeners:i}),a.target=ii)))}function ke(t,a){var e={};return e[t.toLowerCase()]=a.toLowerCase(),e["Webkit"+t]="webkit"+a,e["Moz"+t]="moz"+a,e}var ni={animationend:ke("Animation","AnimationEnd"),animationiteration:ke("Animation","AnimationIteration"),animationstart:ke("Animation","AnimationStart"),transitionrun:ke("Transition","TransitionRun"),transitionstart:ke("Transition","TransitionStart"),transitioncancel:ke("Transition","TransitionCancel"),transitionend:ke("Transition","TransitionEnd")},Mr={},bu={};Ba&&(bu=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function De(t){if(Mr[t])return Mr[t];if(!ni[t])return t;var a=ni[t],e;for(e in a)if(a.hasOwnProperty(e)&&e in bu)return Mr[t]=a[e];return t}var vu=De("animationend"),yu=De("animationiteration"),xu=De("animationstart"),P0=De("transitionrun"),tp=De("transitionstart"),ap=De("transitioncancel"),Su=De("transitionend"),zu=new Map,kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kr.push("scrollEnd");function wa(t,a){zu.set(t,a),je(a,[t])}var Zn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fa=[],li=0,Dr=0;function Kn(){for(var t=li,a=Dr=li=0;a<t;){var e=fa[a];fa[a++]=null;var i=fa[a];fa[a++]=null;var n=fa[a];fa[a++]=null;var l=fa[a];if(fa[a++]=null,i!==null&&n!==null){var r=i.pending;r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n}l!==0&&wu(e,n,l)}}function Jn(t,a,e,i){fa[li++]=t,fa[li++]=a,fa[li++]=e,fa[li++]=i,Dr|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Cr(t,a,e,i){return Jn(t,a,e,i),Wn(t)}function Ce(t,a){return Jn(t,null,null,a),Wn(t)}function wu(t,a,e){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e);for(var n=!1,l=t.return;l!==null;)l.childLanes|=e,i=l.alternate,i!==null&&(i.childLanes|=e),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(n=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,n&&a!==null&&(n=31-ta(e),t=l.hiddenUpdates,i=t[n],i===null?t[n]=[a]:i.push(a),a.lane=e|536870912),l):null}function Wn(t){if(50<mn)throw mn=0,Yo=null,Error(g(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var ri={};function ep(t,a,e,i){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ea(t,a,e,i){return new ep(t,a,e,i)}function Or(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ua(t,a){var e=t.alternate;return e===null?(e=ea(t.tag,a,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=a,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function Tu(t,a){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Fn(t,a,e,i,n,l){var r=0;if(i=t,typeof t=="function")Or(t)&&(r=1);else if(typeof t=="string")r=og(t,e,Ct.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Qe:return t=ea(31,e,a,n),t.elementType=Qe,t.lanes=l,t;case Nt:return Oe(e.children,n,l,a);case ht:r=8,n|=24;break;case W:return t=ea(12,e,a,n|2),t.elementType=W,t.lanes=l,t;case Ft:return t=ea(13,e,a,n),t.elementType=Ft,t.lanes=l,t;case ca:return t=ea(19,e,a,n),t.elementType=ca,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vt:r=10;break t;case zt:r=9;break t;case Dt:r=11;break t;case Sa:r=14;break t;case za:r=16,i=null;break t}r=29,e=Error(g(130,t===null?"null":typeof t,"")),i=null}return a=ea(r,e,a,n),a.elementType=t,a.type=i,a.lanes=l,a}function Oe(t,a,e,i){return t=ea(7,t,i,a),t.lanes=e,t}function Hr(t,a,e){return t=ea(6,t,null,a),t.lanes=e,t}function Au(t){var a=ea(18,null,null,0);return a.stateNode=t,a}function Br(t,a,e){return a=ea(4,t.children!==null?t.children:[],t.key,a),a.lanes=e,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Eu=new WeakMap;function pa(t,a){if(typeof t=="object"&&t!==null){var e=Eu.get(t);return e!==void 0?e:(a={value:t,source:a,stack:Ac(a)},Eu.set(t,a),a)}return{value:t,source:a,stack:Ac(a)}}var oi=[],ci=0,In=null,Zi=0,ga=[],ma=0,ae=null,ja=1,Ma="";function Na(t,a){oi[ci++]=Zi,oi[ci++]=In,In=t,Zi=a}function ju(t,a,e){ga[ma++]=ja,ga[ma++]=Ma,ga[ma++]=ae,ae=t;var i=ja;t=Ma;var n=32-ta(i)-1;i&=~(1<<n),e+=1;var l=32-ta(a)+n;if(30<l){var r=n-n%5;l=(i&(1<<r)-1).toString(32),i>>=r,n-=r,ja=1<<32-ta(a)+n|e<<n|i,Ma=l+t}else ja=1<<l|e<<n|i,Ma=t}function Ur(t){t.return!==null&&(Na(t,1),ju(t,1,0))}function Nr(t){for(;t===In;)In=oi[--ci],oi[ci]=null,Zi=oi[--ci],oi[ci]=null;for(;t===ae;)ae=ga[--ma],ga[ma]=null,Ma=ga[--ma],ga[ma]=null,ja=ga[--ma],ga[ma]=null}function Mu(t,a){ga[ma++]=ja,ga[ma++]=Ma,ga[ma++]=ae,ja=a.id,Ma=a.overflow,ae=t}var qt=null,pt=null,K=!1,ee=null,ha=!1,Gr=Error(g(519));function ie(t){var a=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ki(pa(a,t)),Gr}function ku(t){var a=t.stateNode,e=t.type,i=t.memoizedProps;switch(a[Gt]=t,a[Qt]=i,e){case"dialog":V("cancel",a),V("close",a);break;case"iframe":case"object":case"embed":V("load",a);break;case"video":case"audio":for(e=0;e<bn.length;e++)V(bn[e],a);break;case"source":V("error",a);break;case"img":case"image":case"link":V("error",a),V("load",a);break;case"details":V("toggle",a);break;case"input":V("invalid",a),Xc(a,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":V("invalid",a);break;case"textarea":V("invalid",a),Qc(a,i.value,i.defaultValue,i.children)}e=i.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||a.textContent===""+e||i.suppressHydrationWarning===!0||$d(a.textContent,e)?(i.popover!=null&&(V("beforetoggle",a),V("toggle",a)),i.onScroll!=null&&V("scroll",a),i.onScrollEnd!=null&&V("scrollend",a),i.onClick!=null&&(a.onclick=Ha),a=!0):a=!1,a||ie(t,!0)}function Du(t){for(qt=t.return;qt;)switch(qt.tag){case 5:case 31:case 13:ha=!1;return;case 27:case 3:ha=!0;return;default:qt=qt.return}}function ui(t){if(t!==qt)return!1;if(!K)return Du(t),K=!0,!1;var a=t.tag,e;if((e=a!==3&&a!==27)&&((e=a===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||ec(t.type,t.memoizedProps)),e=!e),e&&pt&&ie(t),Du(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(317));pt=af(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(317));pt=af(t)}else a===27?(a=pt,be(t.type)?(t=oc,oc=null,pt=t):pt=a):pt=qt?va(t.stateNode.nextSibling):null;return!0}function He(){pt=qt=null,K=!1}function qr(){var t=ee;return t!==null&&(Jt===null?Jt=t:Jt.push.apply(Jt,t),ee=null),t}function Ki(t){ee===null?ee=[t]:ee.push(t)}var _r=Xt(null),Be=null,Ga=null;function ne(t,a,e){tt(_r,a._currentValue),a._currentValue=e}function qa(t){t._currentValue=_r.current,yt(_r)}function Rr(t,a,e){for(;t!==null;){var i=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,i!==null&&(i.childLanes|=a)):i!==null&&(i.childLanes&a)!==a&&(i.childLanes|=a),t===e)break;t=t.return}}function Yr(t,a,e,i){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var l=n.dependencies;if(l!==null){var r=n.child;l=l.firstContext;t:for(;l!==null;){var o=l;l=n;for(var u=0;u<a.length;u++)if(o.context===a[u]){l.lanes|=e,o=l.alternate,o!==null&&(o.lanes|=e),Rr(l.return,e,t),i||(r=null);break t}l=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(g(341));r.lanes|=e,l=r.alternate,l!==null&&(l.lanes|=e),Rr(r,e,t),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function si(t,a,e,i){t=null;for(var n=a,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(g(387));if(r=r.memoizedProps,r!==null){var o=n.type;aa(n.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(n===kn.current){if(r=n.alternate,r===null)throw Error(g(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(zn):t=[zn])}n=n.return}t!==null&&Yr(a,t,e,i),a.flags|=262144}function Pn(t){for(t=t.firstContext;t!==null;){if(!aa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ue(t){Be=t,Ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function _t(t){return Cu(Be,t)}function tl(t,a){return Be===null&&Ue(t),Cu(t,a)}function Cu(t,a){var e=a._currentValue;if(a={context:a,memoizedValue:e,next:null},Ga===null){if(t===null)throw Error(g(308));Ga=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Ga=Ga.next=a;return e}var ip=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(e,i){t.push(i)}};this.abort=function(){a.aborted=!0,t.forEach(function(e){return e()})}},np=f.unstable_scheduleCallback,lp=f.unstable_NormalPriority,At={$$typeof:vt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xr(){return{controller:new ip,data:new Map,refCount:0}}function Ji(t){t.refCount--,t.refCount===0&&np(lp,function(){t.controller.abort()})}var Wi=null,Lr=0,di=0,fi=null;function rp(t,a){if(Wi===null){var e=Wi=[];Lr=0,di=Zo(),fi={status:"pending",value:void 0,then:function(i){e.push(i)}}}return Lr++,a.then(Ou,Ou),a}function Ou(){if(--Lr===0&&Wi!==null){fi!==null&&(fi.status="fulfilled");var t=Wi;Wi=null,di=0,fi=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function op(t,a){var e=[],i={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return t.then(function(){i.status="fulfilled",i.value=a;for(var n=0;n<e.length;n++)(0,e[n])(a)},function(n){for(i.status="rejected",i.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),i}var Hu=w.S;w.S=function(t,a){hd=It(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&rp(t,a),Hu!==null&&Hu(t,a)};var Ne=Xt(null);function Qr(){var t=Ne.current;return t!==null?t:ot.pooledCache}function al(t,a){a===null?tt(Ne,Ne.current):tt(Ne,a.pool)}function Bu(){var t=Qr();return t===null?null:{parent:At._currentValue,pool:t}}var pi=Error(g(460)),Vr=Error(g(474)),el=Error(g(542)),il={then:function(){}};function Uu(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nu(t,a,e){switch(e=t[e],e===void 0?t.push(a):e!==a&&(a.then(Ha,Ha),a=e),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,qu(t),t;default:if(typeof a.status=="string")a.then(Ha,Ha);else{if(t=ot,t!==null&&100<t.shellSuspendCounter)throw Error(g(482));t=a,t.status="pending",t.then(function(i){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=i}},function(i){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=i}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,qu(t),t}throw qe=a,pi}}function Ge(t){try{var a=t._init;return a(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(qe=e,pi):e}}var qe=null;function Gu(){if(qe===null)throw Error(g(459));var t=qe;return qe=null,t}function qu(t){if(t===pi||t===el)throw Error(g(483))}var gi=null,Fi=0;function nl(t){var a=Fi;return Fi+=1,gi===null&&(gi=[]),Nu(gi,t,a)}function Ii(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function ll(t,a){throw a.$$typeof===X?Error(g(525)):(t=Object.prototype.toString.call(a),Error(g(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function _u(t){function a(p,s){if(t){var m=p.deletions;m===null?(p.deletions=[s],p.flags|=16):m.push(s)}}function e(p,s){if(!t)return null;for(;s!==null;)a(p,s),s=s.sibling;return null}function i(p){for(var s=new Map;p!==null;)p.key!==null?s.set(p.key,p):s.set(p.index,p),p=p.sibling;return s}function n(p,s){return p=Ua(p,s),p.index=0,p.sibling=null,p}function l(p,s,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<s?(p.flags|=67108866,s):m):(p.flags|=67108866,s)):(p.flags|=1048576,s)}function r(p){return t&&p.alternate===null&&(p.flags|=67108866),p}function o(p,s,m,S){return s===null||s.tag!==6?(s=Hr(m,p.mode,S),s.return=p,s):(s=n(s,m),s.return=p,s)}function u(p,s,m,S){var H=m.type;return H===Nt?x(p,s,m.props.children,S,m.key):s!==null&&(s.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===za&&Ge(H)===s.type)?(s=n(s,m.props),Ii(s,m),s.return=p,s):(s=Fn(m.type,m.key,m.props,null,p.mode,S),Ii(s,m),s.return=p,s)}function h(p,s,m,S){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=Br(m,p.mode,S),s.return=p,s):(s=n(s,m.children||[]),s.return=p,s)}function x(p,s,m,S,H){return s===null||s.tag!==7?(s=Oe(m,p.mode,S,H),s.return=p,s):(s=n(s,m),s.return=p,s)}function T(p,s,m){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Hr(""+s,p.mode,m),s.return=p,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Ut:return m=Fn(s.type,s.key,s.props,null,p.mode,m),Ii(m,s),m.return=p,m;case J:return s=Br(s,p.mode,m),s.return=p,s;case za:return s=Ge(s),T(p,s,m)}if(Ca(s)||ua(s))return s=Oe(s,p.mode,m,null),s.return=p,s;if(typeof s.then=="function")return T(p,nl(s),m);if(s.$$typeof===vt)return T(p,tl(p,s),m);ll(p,s)}return null}function b(p,s,m,S){var H=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return H!==null?null:o(p,s,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ut:return m.key===H?u(p,s,m,S):null;case J:return m.key===H?h(p,s,m,S):null;case za:return m=Ge(m),b(p,s,m,S)}if(Ca(m)||ua(m))return H!==null?null:x(p,s,m,S,null);if(typeof m.then=="function")return b(p,s,nl(m),S);if(m.$$typeof===vt)return b(p,s,tl(p,m),S);ll(p,m)}return null}function y(p,s,m,S,H){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return p=p.get(m)||null,o(s,p,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ut:return p=p.get(S.key===null?m:S.key)||null,u(s,p,S,H);case J:return p=p.get(S.key===null?m:S.key)||null,h(s,p,S,H);case za:return S=Ge(S),y(p,s,m,S,H)}if(Ca(S)||ua(S))return p=p.get(m)||null,x(s,p,S,H,null);if(typeof S.then=="function")return y(p,s,m,nl(S),H);if(S.$$typeof===vt)return y(p,s,m,tl(s,S),H);ll(s,S)}return null}function k(p,s,m,S){for(var H=null,F=null,O=s,Y=s=0,Z=null;O!==null&&Y<m.length;Y++){O.index>Y?(Z=O,O=null):Z=O.sibling;var I=b(p,O,m[Y],S);if(I===null){O===null&&(O=Z);break}t&&O&&I.alternate===null&&a(p,O),s=l(I,s,Y),F===null?H=I:F.sibling=I,F=I,O=Z}if(Y===m.length)return e(p,O),K&&Na(p,Y),H;if(O===null){for(;Y<m.length;Y++)O=T(p,m[Y],S),O!==null&&(s=l(O,s,Y),F===null?H=O:F.sibling=O,F=O);return K&&Na(p,Y),H}for(O=i(O);Y<m.length;Y++)Z=y(O,p,Y,m[Y],S),Z!==null&&(t&&Z.alternate!==null&&O.delete(Z.key===null?Y:Z.key),s=l(Z,s,Y),F===null?H=Z:F.sibling=Z,F=Z);return t&&O.forEach(function(ze){return a(p,ze)}),K&&Na(p,Y),H}function N(p,s,m,S){if(m==null)throw Error(g(151));for(var H=null,F=null,O=s,Y=s=0,Z=null,I=m.next();O!==null&&!I.done;Y++,I=m.next()){O.index>Y?(Z=O,O=null):Z=O.sibling;var ze=b(p,O,I.value,S);if(ze===null){O===null&&(O=Z);break}t&&O&&ze.alternate===null&&a(p,O),s=l(ze,s,Y),F===null?H=ze:F.sibling=ze,F=ze,O=Z}if(I.done)return e(p,O),K&&Na(p,Y),H;if(O===null){for(;!I.done;Y++,I=m.next())I=T(p,I.value,S),I!==null&&(s=l(I,s,Y),F===null?H=I:F.sibling=I,F=I);return K&&Na(p,Y),H}for(O=i(O);!I.done;Y++,I=m.next())I=y(O,p,Y,I.value,S),I!==null&&(t&&I.alternate!==null&&O.delete(I.key===null?Y:I.key),s=l(I,s,Y),F===null?H=I:F.sibling=I,F=I);return t&&O.forEach(function(vg){return a(p,vg)}),K&&Na(p,Y),H}function lt(p,s,m,S){if(typeof m=="object"&&m!==null&&m.type===Nt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ut:t:{for(var H=m.key;s!==null;){if(s.key===H){if(H=m.type,H===Nt){if(s.tag===7){e(p,s.sibling),S=n(s,m.props.children),S.return=p,p=S;break t}}else if(s.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===za&&Ge(H)===s.type){e(p,s.sibling),S=n(s,m.props),Ii(S,m),S.return=p,p=S;break t}e(p,s);break}else a(p,s);s=s.sibling}m.type===Nt?(S=Oe(m.props.children,p.mode,S,m.key),S.return=p,p=S):(S=Fn(m.type,m.key,m.props,null,p.mode,S),Ii(S,m),S.return=p,p=S)}return r(p);case J:t:{for(H=m.key;s!==null;){if(s.key===H)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){e(p,s.sibling),S=n(s,m.children||[]),S.return=p,p=S;break t}else{e(p,s);break}else a(p,s);s=s.sibling}S=Br(m,p.mode,S),S.return=p,p=S}return r(p);case za:return m=Ge(m),lt(p,s,m,S)}if(Ca(m))return k(p,s,m,S);if(ua(m)){if(H=ua(m),typeof H!="function")throw Error(g(150));return m=H.call(m),N(p,s,m,S)}if(typeof m.then=="function")return lt(p,s,nl(m),S);if(m.$$typeof===vt)return lt(p,s,tl(p,m),S);ll(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,s!==null&&s.tag===6?(e(p,s.sibling),S=n(s,m),S.return=p,p=S):(e(p,s),S=Hr(m,p.mode,S),S.return=p,p=S),r(p)):e(p,s)}return function(p,s,m,S){try{Fi=0;var H=lt(p,s,m,S);return gi=null,H}catch(O){if(O===pi||O===el)throw O;var F=ea(29,O,null,p.mode);return F.lanes=S,F.return=p,F}finally{}}}var _e=_u(!0),Ru=_u(!1),le=!1;function $r(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zr(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function re(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function oe(t,a,e){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(P&2)!==0){var n=i.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),i.pending=a,a=Wn(t),wu(t,null,e),a}return Jn(t,i,a,e),Wn(t)}function Pi(t,a,e){if(a=a.updateQueue,a!==null&&(a=a.shared,(e&4194048)!==0)){var i=a.lanes;i&=t.pendingLanes,e|=i,a.lanes=e,Cc(t,e)}}function Kr(t,a){var e=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,e===i)){var n=null,l=null;if(e=e.firstBaseUpdate,e!==null){do{var r={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};l===null?n=l=r:l=l.next=r,e=e.next}while(e!==null);l===null?n=l=a:l=l.next=a}else n=l=a;e={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=a:t.next=a,e.lastBaseUpdate=a}var Jr=!1;function tn(){if(Jr){var t=fi;if(t!==null)throw t}}function an(t,a,e,i){Jr=!1;var n=t.updateQueue;le=!1;var l=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var u=o,h=u.next;u.next=null,r===null?l=h:r.next=h,r=u;var x=t.alternate;x!==null&&(x=x.updateQueue,o=x.lastBaseUpdate,o!==r&&(o===null?x.firstBaseUpdate=h:o.next=h,x.lastBaseUpdate=u))}if(l!==null){var T=n.baseState;r=0,x=h=u=null,o=l;do{var b=o.lane&-536870913,y=b!==o.lane;if(y?($&b)===b:(i&b)===b){b!==0&&b===di&&(Jr=!0),x!==null&&(x=x.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var k=t,N=o;b=a;var lt=e;switch(N.tag){case 1:if(k=N.payload,typeof k=="function"){T=k.call(lt,T,b);break t}T=k;break t;case 3:k.flags=k.flags&-65537|128;case 0:if(k=N.payload,b=typeof k=="function"?k.call(lt,T,b):k,b==null)break t;T=j({},T,b);break t;case 2:le=!0}}b=o.callback,b!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[b]:y.push(b))}else y={lane:b,tag:o.tag,payload:o.payload,callback:o.callback,next:null},x===null?(h=x=y,u=T):x=x.next=y,r|=b;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;y=o,o=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);x===null&&(u=T),n.baseState=u,n.firstBaseUpdate=h,n.lastBaseUpdate=x,l===null&&(n.shared.lanes=0),fe|=r,t.lanes=r,t.memoizedState=T}}function Yu(t,a){if(typeof t!="function")throw Error(g(191,t));t.call(a)}function Xu(t,a){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Yu(e[t],a)}var mi=Xt(null),rl=Xt(0);function Lu(t,a){t=Za,tt(rl,t),tt(mi,a),Za=t|a.baseLanes}function Wr(){tt(rl,Za),tt(mi,mi.current)}function Fr(){Za=rl.current,yt(mi),yt(rl)}var ia=Xt(null),ba=null;function ce(t){var a=t.alternate;tt(wt,wt.current&1),tt(ia,t),ba===null&&(a===null||mi.current!==null||a.memoizedState!==null)&&(ba=t)}function Ir(t){tt(wt,wt.current),tt(ia,t),ba===null&&(ba=t)}function Qu(t){t.tag===22?(tt(wt,wt.current),tt(ia,t),ba===null&&(ba=t)):ue()}function ue(){tt(wt,wt.current),tt(ia,ia.current)}function na(t){yt(ia),ba===t&&(ba=null),yt(wt)}var wt=Xt(0);function ol(t){for(var a=t;a!==null;){if(a.tag===13){var e=a.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||lc(e)||rc(e)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var _a=0,_=null,it=null,Et=null,cl=!1,hi=!1,Re=!1,ul=0,en=0,bi=null,cp=0;function xt(){throw Error(g(321))}function Pr(t,a){if(a===null)return!1;for(var e=0;e<a.length&&e<t.length;e++)if(!aa(t[e],a[e]))return!1;return!0}function to(t,a,e,i,n,l){return _a=l,_=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,w.H=t===null||t.memoizedState===null?js:ho,Re=!1,l=e(i,n),Re=!1,hi&&(l=$u(a,e,i,n)),Vu(t),l}function Vu(t){w.H=rn;var a=it!==null&&it.next!==null;if(_a=0,Et=it=_=null,cl=!1,en=0,bi=null,a)throw Error(g(300));t===null||jt||(t=t.dependencies,t!==null&&Pn(t)&&(jt=!0))}function $u(t,a,e,i){_=t;var n=0;do{if(hi&&(bi=null),en=0,hi=!1,25<=n)throw Error(g(301));if(n+=1,Et=it=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}w.H=Ms,l=a(e,i)}while(hi);return l}function up(){var t=w.H,a=t.useState()[0];return a=typeof a.then=="function"?nn(a):a,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(_.flags|=1024),a}function ao(){var t=ul!==0;return ul=0,t}function eo(t,a,e){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~e}function io(t){if(cl){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}cl=!1}_a=0,Et=it=_=null,hi=!1,en=ul=0,bi=null}function Lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?_.memoizedState=Et=t:Et=Et.next=t,Et}function Tt(){if(it===null){var t=_.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var a=Et===null?_.memoizedState:Et.next;if(a!==null)Et=a,it=t;else{if(t===null)throw _.alternate===null?Error(g(467)):Error(g(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Et===null?_.memoizedState=Et=t:Et=Et.next=t}return Et}function sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(t){var a=en;return en+=1,bi===null&&(bi=[]),t=Nu(bi,t,a),a=_,(Et===null?a.memoizedState:Et.next)===null&&(a=a.alternate,w.H=a===null||a.memoizedState===null?js:ho),t}function dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nn(t);if(t.$$typeof===vt)return _t(t)}throw Error(g(438,String(t)))}function no(t){var a=null,e=_.updateQueue;if(e!==null&&(a=e.memoCache),a==null){var i=_.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(a={data:i.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),e===null&&(e=sl(),_.updateQueue=e),e.memoCache=a,e=a.data[a.index],e===void 0)for(e=a.data[a.index]=Array(t),i=0;i<t;i++)e[i]=jn;return a.index++,e}function Ra(t,a){return typeof a=="function"?a(t):a}function fl(t){var a=Tt();return lo(a,it,t)}function lo(t,a,e){var i=t.queue;if(i===null)throw Error(g(311));i.lastRenderedReducer=e;var n=t.baseQueue,l=i.pending;if(l!==null){if(n!==null){var r=n.next;n.next=l.next,l.next=r}a.baseQueue=n=l,i.pending=null}if(l=t.baseState,n===null)t.memoizedState=l;else{a=n.next;var o=r=null,u=null,h=a,x=!1;do{var T=h.lane&-536870913;if(T!==h.lane?($&T)===T:(_a&T)===T){var b=h.revertLane;if(b===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),T===di&&(x=!0);else if((_a&b)===b){h=h.next,b===di&&(x=!0);continue}else T={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(o=u=T,r=l):u=u.next=T,_.lanes|=b,fe|=b;T=h.action,Re&&e(l,T),l=h.hasEagerState?h.eagerState:e(l,T)}else b={lane:T,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(o=u=b,r=l):u=u.next=b,_.lanes|=T,fe|=T;h=h.next}while(h!==null&&h!==a);if(u===null?r=l:u.next=o,!aa(l,t.memoizedState)&&(jt=!0,x&&(e=fi,e!==null)))throw e;t.memoizedState=l,t.baseState=r,t.baseQueue=u,i.lastRenderedState=l}return n===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function ro(t){var a=Tt(),e=a.queue;if(e===null)throw Error(g(311));e.lastRenderedReducer=t;var i=e.dispatch,n=e.pending,l=a.memoizedState;if(n!==null){e.pending=null;var r=n=n.next;do l=t(l,r.action),r=r.next;while(r!==n);aa(l,a.memoizedState)||(jt=!0),a.memoizedState=l,a.baseQueue===null&&(a.baseState=l),e.lastRenderedState=l}return[l,i]}function Zu(t,a,e){var i=_,n=Tt(),l=K;if(l){if(e===void 0)throw Error(g(407));e=e()}else e=a();var r=!aa((it||n).memoizedState,e);if(r&&(n.memoizedState=e,jt=!0),n=n.queue,uo(Wu.bind(null,i,n,t),[t]),n.getSnapshot!==a||r||Et!==null&&Et.memoizedState.tag&1){if(i.flags|=2048,vi(9,{destroy:void 0},Ju.bind(null,i,n,e,a),null),ot===null)throw Error(g(349));l||(_a&127)!==0||Ku(i,a,e)}return e}function Ku(t,a,e){t.flags|=16384,t={getSnapshot:a,value:e},a=_.updateQueue,a===null?(a=sl(),_.updateQueue=a,a.stores=[t]):(e=a.stores,e===null?a.stores=[t]:e.push(t))}function Ju(t,a,e,i){a.value=e,a.getSnapshot=i,Fu(a)&&Iu(t)}function Wu(t,a,e){return e(function(){Fu(a)&&Iu(t)})}function Fu(t){var a=t.getSnapshot;t=t.value;try{var e=a();return!aa(t,e)}catch{return!0}}function Iu(t){var a=Ce(t,2);a!==null&&Wt(a,t,2)}function oo(t){var a=Lt();if(typeof t=="function"){var e=t;if(t=e(),Re){Ia(!0);try{e()}finally{Ia(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},a}function Pu(t,a,e,i){return t.baseState=e,lo(t,it,typeof i=="function"?i:Ra)}function sp(t,a,e,i,n){if(ml(t))throw Error(g(485));if(t=a.action,t!==null){var l={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};w.T!==null?e(!0):l.isTransition=!1,i(l),e=a.pending,e===null?(l.next=a.pending=l,ts(a,l)):(l.next=e.next,a.pending=e.next=l)}}function ts(t,a){var e=a.action,i=a.payload,n=t.state;if(a.isTransition){var l=w.T,r={};w.T=r;try{var o=e(n,i),u=w.S;u!==null&&u(r,o),as(t,a,o)}catch(h){co(t,a,h)}finally{l!==null&&r.types!==null&&(l.types=r.types),w.T=l}}else try{l=e(n,i),as(t,a,l)}catch(h){co(t,a,h)}}function as(t,a,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(i){es(t,a,i)},function(i){return co(t,a,i)}):es(t,a,e)}function es(t,a,e){a.status="fulfilled",a.value=e,is(a),t.state=e,a=t.pending,a!==null&&(e=a.next,e===a?t.pending=null:(e=e.next,a.next=e,ts(t,e)))}function co(t,a,e){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do a.status="rejected",a.reason=e,is(a),a=a.next;while(a!==i)}t.action=null}function is(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function ns(t,a){return a}function ls(t,a){if(K){var e=ot.formState;if(e!==null){t:{var i=_;if(K){if(pt){a:{for(var n=pt,l=ha;n.nodeType!==8;){if(!l){n=null;break a}if(n=va(n.nextSibling),n===null){n=null;break a}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){pt=va(n.nextSibling),i=n.data==="F!";break t}}ie(i)}i=!1}i&&(a=e[0])}}return e=Lt(),e.memoizedState=e.baseState=a,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:a},e.queue=i,e=Ts.bind(null,_,i),i.dispatch=e,i=oo(!1),l=mo.bind(null,_,!1,i.queue),i=Lt(),n={state:a,dispatch:null,action:t,pending:null},i.queue=n,e=sp.bind(null,_,n,l,e),n.dispatch=e,i.memoizedState=t,[a,e,!1]}function rs(t){var a=Tt();return os(a,it,t)}function os(t,a,e){if(a=lo(t,a,ns)[0],t=fl(Ra)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var i=nn(a)}catch(r){throw r===pi?el:r}else i=a;a=Tt();var n=a.queue,l=n.dispatch;return e!==a.memoizedState&&(_.flags|=2048,vi(9,{destroy:void 0},dp.bind(null,n,e),null)),[i,l,t]}function dp(t,a){t.action=a}function cs(t){var a=Tt(),e=it;if(e!==null)return os(a,e,t);Tt(),a=a.memoizedState,e=Tt();var i=e.queue.dispatch;return e.memoizedState=t,[a,i,!1]}function vi(t,a,e,i){return t={tag:t,create:e,deps:i,inst:a,next:null},a=_.updateQueue,a===null&&(a=sl(),_.updateQueue=a),e=a.lastEffect,e===null?a.lastEffect=t.next=t:(i=e.next,e.next=t,t.next=i,a.lastEffect=t),t}function us(){return Tt().memoizedState}function pl(t,a,e,i){var n=Lt();_.flags|=t,n.memoizedState=vi(1|a,{destroy:void 0},e,i===void 0?null:i)}function gl(t,a,e,i){var n=Tt();i=i===void 0?null:i;var l=n.memoizedState.inst;it!==null&&i!==null&&Pr(i,it.memoizedState.deps)?n.memoizedState=vi(a,l,e,i):(_.flags|=t,n.memoizedState=vi(1|a,l,e,i))}function ss(t,a){pl(8390656,8,t,a)}function uo(t,a){gl(2048,8,t,a)}function fp(t){_.flags|=4;var a=_.updateQueue;if(a===null)a=sl(),_.updateQueue=a,a.events=[t];else{var e=a.events;e===null?a.events=[t]:e.push(t)}}function ds(t){var a=Tt().memoizedState;return fp({ref:a,nextImpl:t}),function(){if((P&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}function fs(t,a){return gl(4,2,t,a)}function ps(t,a){return gl(4,4,t,a)}function gs(t,a){if(typeof a=="function"){t=t();var e=a(t);return function(){typeof e=="function"?e():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function ms(t,a,e){e=e!=null?e.concat([t]):null,gl(4,4,gs.bind(null,a,t),e)}function so(){}function hs(t,a){var e=Tt();a=a===void 0?null:a;var i=e.memoizedState;return a!==null&&Pr(a,i[1])?i[0]:(e.memoizedState=[t,a],t)}function bs(t,a){var e=Tt();a=a===void 0?null:a;var i=e.memoizedState;if(a!==null&&Pr(a,i[1]))return i[0];if(i=t(),Re){Ia(!0);try{t()}finally{Ia(!1)}}return e.memoizedState=[i,a],i}function fo(t,a,e){return e===void 0||(_a&1073741824)!==0&&($&261930)===0?t.memoizedState=a:(t.memoizedState=e,t=vd(),_.lanes|=t,fe|=t,e)}function vs(t,a,e,i){return aa(e,a)?e:mi.current!==null?(t=fo(t,e,i),aa(t,a)||(jt=!0),t):(_a&42)===0||(_a&1073741824)!==0&&($&261930)===0?(jt=!0,t.memoizedState=e):(t=vd(),_.lanes|=t,fe|=t,a)}function ys(t,a,e,i,n){var l=M.p;M.p=l!==0&&8>l?l:8;var r=w.T,o={};w.T=o,mo(t,!1,a,e);try{var u=n(),h=w.S;if(h!==null&&h(o,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var x=op(u,i);ln(t,a,x,oa(t))}else ln(t,a,i,oa(t))}catch(T){ln(t,a,{then:function(){},status:"rejected",reason:T},oa())}finally{M.p=l,r!==null&&o.types!==null&&(r.types=o.types),w.T=r}}function pp(){}function po(t,a,e,i){if(t.tag!==5)throw Error(g(476));var n=xs(t).queue;ys(t,n,a,G,e===null?pp:function(){return Ss(t),e(i)})}function xs(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:G},next:null};var e={};return a.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:e},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Ss(t){var a=xs(t);a.next===null&&(a=t.alternate.memoizedState),ln(t,a.next.queue,{},oa())}function go(){return _t(zn)}function zs(){return Tt().memoizedState}function ws(){return Tt().memoizedState}function gp(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var e=oa();t=re(e);var i=oe(a,t,e);i!==null&&(Wt(i,a,e),Pi(i,a,e)),a={cache:Xr()},t.payload=a;return}a=a.return}}function mp(t,a,e){var i=oa();e={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},ml(t)?As(a,e):(e=Cr(t,a,e,i),e!==null&&(Wt(e,t,i),Es(e,a,i)))}function Ts(t,a,e){var i=oa();ln(t,a,e,i)}function ln(t,a,e,i){var n={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(ml(t))As(a,n);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=a.lastRenderedReducer,l!==null))try{var r=a.lastRenderedState,o=l(r,e);if(n.hasEagerState=!0,n.eagerState=o,aa(o,r))return Jn(t,a,n,0),ot===null&&Kn(),!1}catch{}finally{}if(e=Cr(t,a,n,i),e!==null)return Wt(e,t,i),Es(e,a,i),!0}return!1}function mo(t,a,e,i){if(i={lane:2,revertLane:Zo(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ml(t)){if(a)throw Error(g(479))}else a=Cr(t,e,i,2),a!==null&&Wt(a,t,2)}function ml(t){var a=t.alternate;return t===_||a!==null&&a===_}function As(t,a){hi=cl=!0;var e=t.pending;e===null?a.next=a:(a.next=e.next,e.next=a),t.pending=a}function Es(t,a,e){if((e&4194048)!==0){var i=a.lanes;i&=t.pendingLanes,e|=i,a.lanes=e,Cc(t,e)}}var rn={readContext:_t,use:dl,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt};rn.useEffectEvent=xt;var js={readContext:_t,use:dl,useCallback:function(t,a){return Lt().memoizedState=[t,a===void 0?null:a],t},useContext:_t,useEffect:ss,useImperativeHandle:function(t,a,e){e=e!=null?e.concat([t]):null,pl(4194308,4,gs.bind(null,a,t),e)},useLayoutEffect:function(t,a){return pl(4194308,4,t,a)},useInsertionEffect:function(t,a){pl(4,2,t,a)},useMemo:function(t,a){var e=Lt();a=a===void 0?null:a;var i=t();if(Re){Ia(!0);try{t()}finally{Ia(!1)}}return e.memoizedState=[i,a],i},useReducer:function(t,a,e){var i=Lt();if(e!==void 0){var n=e(a);if(Re){Ia(!0);try{e(a)}finally{Ia(!1)}}}else n=a;return i.memoizedState=i.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},i.queue=t,t=t.dispatch=mp.bind(null,_,t),[i.memoizedState,t]},useRef:function(t){var a=Lt();return t={current:t},a.memoizedState=t},useState:function(t){t=oo(t);var a=t.queue,e=Ts.bind(null,_,a);return a.dispatch=e,[t.memoizedState,e]},useDebugValue:so,useDeferredValue:function(t,a){var e=Lt();return fo(e,t,a)},useTransition:function(){var t=oo(!1);return t=ys.bind(null,_,t.queue,!0,!1),Lt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,e){var i=_,n=Lt();if(K){if(e===void 0)throw Error(g(407));e=e()}else{if(e=a(),ot===null)throw Error(g(349));($&127)!==0||Ku(i,a,e)}n.memoizedState=e;var l={value:e,getSnapshot:a};return n.queue=l,ss(Wu.bind(null,i,l,t),[t]),i.flags|=2048,vi(9,{destroy:void 0},Ju.bind(null,i,l,e,a),null),e},useId:function(){var t=Lt(),a=ot.identifierPrefix;if(K){var e=Ma,i=ja;e=(i&~(1<<32-ta(i)-1)).toString(32)+e,a="_"+a+"R_"+e,e=ul++,0<e&&(a+="H"+e.toString(32)),a+="_"}else e=cp++,a="_"+a+"r_"+e.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:go,useFormState:ls,useActionState:ls,useOptimistic:function(t){var a=Lt();a.memoizedState=a.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=e,a=mo.bind(null,_,!0,e),e.dispatch=a,[t,a]},useMemoCache:no,useCacheRefresh:function(){return Lt().memoizedState=gp.bind(null,_)},useEffectEvent:function(t){var a=Lt(),e={impl:t};return a.memoizedState=e,function(){if((P&2)!==0)throw Error(g(440));return e.impl.apply(void 0,arguments)}}},ho={readContext:_t,use:dl,useCallback:hs,useContext:_t,useEffect:uo,useImperativeHandle:ms,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:bs,useReducer:fl,useRef:us,useState:function(){return fl(Ra)},useDebugValue:so,useDeferredValue:function(t,a){var e=Tt();return vs(e,it.memoizedState,t,a)},useTransition:function(){var t=fl(Ra)[0],a=Tt().memoizedState;return[typeof t=="boolean"?t:nn(t),a]},useSyncExternalStore:Zu,useId:zs,useHostTransitionStatus:go,useFormState:rs,useActionState:rs,useOptimistic:function(t,a){var e=Tt();return Pu(e,it,t,a)},useMemoCache:no,useCacheRefresh:ws};ho.useEffectEvent=ds;var Ms={readContext:_t,use:dl,useCallback:hs,useContext:_t,useEffect:uo,useImperativeHandle:ms,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:bs,useReducer:ro,useRef:us,useState:function(){return ro(Ra)},useDebugValue:so,useDeferredValue:function(t,a){var e=Tt();return it===null?fo(e,t,a):vs(e,it.memoizedState,t,a)},useTransition:function(){var t=ro(Ra)[0],a=Tt().memoizedState;return[typeof t=="boolean"?t:nn(t),a]},useSyncExternalStore:Zu,useId:zs,useHostTransitionStatus:go,useFormState:cs,useActionState:cs,useOptimistic:function(t,a){var e=Tt();return it!==null?Pu(e,it,t,a):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:no,useCacheRefresh:ws};Ms.useEffectEvent=ds;function bo(t,a,e,i){a=t.memoizedState,e=e(i,a),e=e==null?a:j({},a,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var vo={enqueueSetState:function(t,a,e){t=t._reactInternals;var i=oa(),n=re(i);n.payload=a,e!=null&&(n.callback=e),a=oe(t,n,i),a!==null&&(Wt(a,t,i),Pi(a,t,i))},enqueueReplaceState:function(t,a,e){t=t._reactInternals;var i=oa(),n=re(i);n.tag=1,n.payload=a,e!=null&&(n.callback=e),a=oe(t,n,i),a!==null&&(Wt(a,t,i),Pi(a,t,i))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var e=oa(),i=re(e);i.tag=2,a!=null&&(i.callback=a),a=oe(t,i,e),a!==null&&(Wt(a,t,e),Pi(a,t,e))}};function ks(t,a,e,i,n,l,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,l,r):a.prototype&&a.prototype.isPureReactComponent?!Vi(e,i)||!Vi(n,l):!0}function Ds(t,a,e,i){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(e,i),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(e,i),a.state!==t&&vo.enqueueReplaceState(a,a.state,null)}function Ye(t,a){var e=a;if("ref"in a){e={};for(var i in a)i!=="ref"&&(e[i]=a[i])}if(t=t.defaultProps){e===a&&(e=j({},e));for(var n in t)e[n]===void 0&&(e[n]=t[n])}return e}function Cs(t){Zn(t)}function Os(t){console.error(t)}function Hs(t){Zn(t)}function hl(t,a){try{var e=t.onUncaughtError;e(a.value,{componentStack:a.stack})}catch(i){setTimeout(function(){throw i})}}function Bs(t,a,e){try{var i=t.onCaughtError;i(e.value,{componentStack:e.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function yo(t,a,e){return e=re(e),e.tag=3,e.payload={element:null},e.callback=function(){hl(t,a)},e}function Us(t){return t=re(t),t.tag=3,t}function Ns(t,a,e,i){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=i.value;t.payload=function(){return n(l)},t.callback=function(){Bs(a,e,i)}}var r=e.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Bs(a,e,i),typeof n!="function"&&(pe===null?pe=new Set([this]):pe.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function hp(t,a,e,i,n){if(e.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(a=e.alternate,a!==null&&si(a,e,n,!0),e=ia.current,e!==null){switch(e.tag){case 31:case 13:return ba===null?Ml():e.alternate===null&&St===0&&(St=3),e.flags&=-257,e.flags|=65536,e.lanes=n,i===il?e.flags|=16384:(a=e.updateQueue,a===null?e.updateQueue=new Set([i]):a.add(i),Qo(t,i,n)),!1;case 22:return e.flags|=65536,i===il?e.flags|=16384:(a=e.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([i])},e.updateQueue=a):(e=a.retryQueue,e===null?a.retryQueue=new Set([i]):e.add(i)),Qo(t,i,n)),!1}throw Error(g(435,e.tag))}return Qo(t,i,n),Ml(),!1}if(K)return a=ia.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,i!==Gr&&(t=Error(g(422),{cause:i}),Ki(pa(t,e)))):(i!==Gr&&(a=Error(g(423),{cause:i}),Ki(pa(a,e))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,i=pa(i,e),n=yo(t.stateNode,i,n),Kr(t,n),St!==4&&(St=2)),!1;var l=Error(g(520),{cause:i});if(l=pa(l,e),gn===null?gn=[l]:gn.push(l),St!==4&&(St=2),a===null)return!0;i=pa(i,e),e=a;do{switch(e.tag){case 3:return e.flags|=65536,t=n&-n,e.lanes|=t,t=yo(e.stateNode,i,t),Kr(e,t),!1;case 1:if(a=e.type,l=e.stateNode,(e.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(pe===null||!pe.has(l))))return e.flags|=65536,n&=-n,e.lanes|=n,n=Us(n),Ns(n,t,e,i),Kr(e,n),!1}e=e.return}while(e!==null);return!1}var xo=Error(g(461)),jt=!1;function Rt(t,a,e,i){a.child=t===null?Ru(a,null,e,i):_e(a,t.child,e,i)}function Gs(t,a,e,i,n){e=e.render;var l=a.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ue(a),i=to(t,a,e,r,l,n),o=ao(),t!==null&&!jt?(eo(t,a,n),Ya(t,a,n)):(K&&o&&Ur(a),a.flags|=1,Rt(t,a,i,n),a.child)}function qs(t,a,e,i,n){if(t===null){var l=e.type;return typeof l=="function"&&!Or(l)&&l.defaultProps===void 0&&e.compare===null?(a.tag=15,a.type=l,_s(t,a,l,i,n)):(t=Fn(e.type,null,i,a,a.mode,n),t.ref=a.ref,t.return=a,a.child=t)}if(l=t.child,!Mo(t,n)){var r=l.memoizedProps;if(e=e.compare,e=e!==null?e:Vi,e(r,i)&&t.ref===a.ref)return Ya(t,a,n)}return a.flags|=1,t=Ua(l,i),t.ref=a.ref,t.return=a,a.child=t}function _s(t,a,e,i,n){if(t!==null){var l=t.memoizedProps;if(Vi(l,i)&&t.ref===a.ref)if(jt=!1,a.pendingProps=i=l,Mo(t,n))(t.flags&131072)!==0&&(jt=!0);else return a.lanes=t.lanes,Ya(t,a,n)}return So(t,a,e,i,n)}function Rs(t,a,e,i){var n=i.children,l=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((a.flags&128)!==0){if(l=l!==null?l.baseLanes|e:e,t!==null){for(i=a.child=t.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~l}else i=0,a.child=null;return Ys(t,a,l,e,i)}if((e&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(a,l!==null?l.cachePool:null),l!==null?Lu(a,l):Wr(),Qu(a);else return i=a.lanes=536870912,Ys(t,a,l!==null?l.baseLanes|e:e,e,i)}else l!==null?(al(a,l.cachePool),Lu(a,l),ue(),a.memoizedState=null):(t!==null&&al(a,null),Wr(),ue());return Rt(t,a,n,e),a.child}function on(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Ys(t,a,e,i,n){var l=Qr();return l=l===null?null:{parent:At._currentValue,pool:l},a.memoizedState={baseLanes:e,cachePool:l},t!==null&&al(a,null),Wr(),Qu(a),t!==null&&si(t,a,i,!0),a.childLanes=n,null}function bl(t,a){return a=yl({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function Xs(t,a,e){return _e(a,t.child,null,e),t=bl(a,a.pendingProps),t.flags|=2,na(a),a.memoizedState=null,t}function bp(t,a,e){var i=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(K){if(i.mode==="hidden")return t=bl(a,i),a.lanes=536870912,on(null,t);if(Ir(a),(t=pt)?(t=tf(t,ha),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:ae!==null?{id:ja,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},e=Au(t),e.return=a,a.child=e,qt=a,pt=null)):t=null,t===null)throw ie(a);return a.lanes=536870912,null}return bl(a,i)}var l=t.memoizedState;if(l!==null){var r=l.dehydrated;if(Ir(a),n)if(a.flags&256)a.flags&=-257,a=Xs(t,a,e);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(g(558));else if(jt||si(t,a,e,!1),n=(e&t.childLanes)!==0,jt||n){if(i=ot,i!==null&&(r=Oc(i,e),r!==0&&r!==l.retryLane))throw l.retryLane=r,Ce(t,r),Wt(i,t,r),xo;Ml(),a=Xs(t,a,e)}else t=l.treeContext,pt=va(r.nextSibling),qt=a,K=!0,ee=null,ha=!1,t!==null&&Mu(a,t),a=bl(a,i),a.flags|=4096;return a}return t=Ua(t.child,{mode:i.mode,children:i.children}),t.ref=a.ref,a.child=t,t.return=a,t}function vl(t,a){var e=a.ref;if(e===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(g(284));(t===null||t.ref!==e)&&(a.flags|=4194816)}}function So(t,a,e,i,n){return Ue(a),e=to(t,a,e,i,void 0,n),i=ao(),t!==null&&!jt?(eo(t,a,n),Ya(t,a,n)):(K&&i&&Ur(a),a.flags|=1,Rt(t,a,e,n),a.child)}function Ls(t,a,e,i,n,l){return Ue(a),a.updateQueue=null,e=$u(a,i,e,n),Vu(t),i=ao(),t!==null&&!jt?(eo(t,a,l),Ya(t,a,l)):(K&&i&&Ur(a),a.flags|=1,Rt(t,a,e,l),a.child)}function Qs(t,a,e,i,n){if(Ue(a),a.stateNode===null){var l=ri,r=e.contextType;typeof r=="object"&&r!==null&&(l=_t(r)),l=new e(i,l),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=vo,a.stateNode=l,l._reactInternals=a,l=a.stateNode,l.props=i,l.state=a.memoizedState,l.refs={},$r(a),r=e.contextType,l.context=typeof r=="object"&&r!==null?_t(r):ri,l.state=a.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(bo(a,e,r,i),l.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&vo.enqueueReplaceState(l,l.state,null),an(a,i,l,n),tn(),l.state=a.memoizedState),typeof l.componentDidMount=="function"&&(a.flags|=4194308),i=!0}else if(t===null){l=a.stateNode;var o=a.memoizedProps,u=Ye(e,o);l.props=u;var h=l.context,x=e.contextType;r=ri,typeof x=="object"&&x!==null&&(r=_t(x));var T=e.getDerivedStateFromProps;x=typeof T=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||h!==r)&&Ds(a,l,i,r),le=!1;var b=a.memoizedState;l.state=b,an(a,i,l,n),tn(),h=a.memoizedState,o||b!==h||le?(typeof T=="function"&&(bo(a,e,T,i),h=a.memoizedState),(u=le||ks(a,e,u,i,b,h,r))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(a.flags|=4194308)):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=i,a.memoizedState=h),l.props=i,l.state=h,l.context=r,i=u):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),i=!1)}else{l=a.stateNode,Zr(t,a),r=a.memoizedProps,x=Ye(e,r),l.props=x,T=a.pendingProps,b=l.context,h=e.contextType,u=ri,typeof h=="object"&&h!==null&&(u=_t(h)),o=e.getDerivedStateFromProps,(h=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==T||b!==u)&&Ds(a,l,i,u),le=!1,b=a.memoizedState,l.state=b,an(a,i,l,n),tn();var y=a.memoizedState;r!==T||b!==y||le||t!==null&&t.dependencies!==null&&Pn(t.dependencies)?(typeof o=="function"&&(bo(a,e,o,i),y=a.memoizedState),(x=le||ks(a,e,x,i,b,y,u)||t!==null&&t.dependencies!==null&&Pn(t.dependencies))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,y,u)),typeof l.componentDidUpdate=="function"&&(a.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(a.flags|=1024),a.memoizedProps=i,a.memoizedState=y),l.props=i,l.state=y,l.context=u,i=x):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(a.flags|=1024),i=!1)}return l=i,vl(t,a),i=(a.flags&128)!==0,l||i?(l=a.stateNode,e=i&&typeof e.getDerivedStateFromError!="function"?null:l.render(),a.flags|=1,t!==null&&i?(a.child=_e(a,t.child,null,n),a.child=_e(a,null,e,n)):Rt(t,a,e,n),a.memoizedState=l.state,t=a.child):t=Ya(t,a,n),t}function Vs(t,a,e,i){return He(),a.flags|=256,Rt(t,a,e,i),a.child}var zo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wo(t){return{baseLanes:t,cachePool:Bu()}}function To(t,a,e){return t=t!==null?t.childLanes&~e:0,a&&(t|=ra),t}function $s(t,a,e){var i=a.pendingProps,n=!1,l=(a.flags&128)!==0,r;if((r=l)||(r=t!==null&&t.memoizedState===null?!1:(wt.current&2)!==0),r&&(n=!0,a.flags&=-129),r=(a.flags&32)!==0,a.flags&=-33,t===null){if(K){if(n?ce(a):ue(),(t=pt)?(t=tf(t,ha),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:ae!==null?{id:ja,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},e=Au(t),e.return=a,a.child=e,qt=a,pt=null)):t=null,t===null)throw ie(a);return rc(t)?a.lanes=32:a.lanes=536870912,null}var o=i.children;return i=i.fallback,n?(ue(),n=a.mode,o=yl({mode:"hidden",children:o},n),i=Oe(i,n,e,null),o.return=a,i.return=a,o.sibling=i,a.child=o,i=a.child,i.memoizedState=wo(e),i.childLanes=To(t,r,e),a.memoizedState=zo,on(null,i)):(ce(a),Ao(a,o))}var u=t.memoizedState;if(u!==null&&(o=u.dehydrated,o!==null)){if(l)a.flags&256?(ce(a),a.flags&=-257,a=Eo(t,a,e)):a.memoizedState!==null?(ue(),a.child=t.child,a.flags|=128,a=null):(ue(),o=i.fallback,n=a.mode,i=yl({mode:"visible",children:i.children},n),o=Oe(o,n,e,null),o.flags|=2,i.return=a,o.return=a,i.sibling=o,a.child=i,_e(a,t.child,null,e),i=a.child,i.memoizedState=wo(e),i.childLanes=To(t,r,e),a.memoizedState=zo,a=on(null,i));else if(ce(a),rc(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var h=r.dgst;r=h,i=Error(g(419)),i.stack="",i.digest=r,Ki({value:i,source:null,stack:null}),a=Eo(t,a,e)}else if(jt||si(t,a,e,!1),r=(e&t.childLanes)!==0,jt||r){if(r=ot,r!==null&&(i=Oc(r,e),i!==0&&i!==u.retryLane))throw u.retryLane=i,Ce(t,i),Wt(r,t,i),xo;lc(o)||Ml(),a=Eo(t,a,e)}else lc(o)?(a.flags|=192,a.child=t.child,a=null):(t=u.treeContext,pt=va(o.nextSibling),qt=a,K=!0,ee=null,ha=!1,t!==null&&Mu(a,t),a=Ao(a,i.children),a.flags|=4096);return a}return n?(ue(),o=i.fallback,n=a.mode,u=t.child,h=u.sibling,i=Ua(u,{mode:"hidden",children:i.children}),i.subtreeFlags=u.subtreeFlags&65011712,h!==null?o=Ua(h,o):(o=Oe(o,n,e,null),o.flags|=2),o.return=a,i.return=a,i.sibling=o,a.child=i,on(null,i),i=a.child,o=t.child.memoizedState,o===null?o=wo(e):(n=o.cachePool,n!==null?(u=At._currentValue,n=n.parent!==u?{parent:u,pool:u}:n):n=Bu(),o={baseLanes:o.baseLanes|e,cachePool:n}),i.memoizedState=o,i.childLanes=To(t,r,e),a.memoizedState=zo,on(t.child,i)):(ce(a),e=t.child,t=e.sibling,e=Ua(e,{mode:"visible",children:i.children}),e.return=a,e.sibling=null,t!==null&&(r=a.deletions,r===null?(a.deletions=[t],a.flags|=16):r.push(t)),a.child=e,a.memoizedState=null,e)}function Ao(t,a){return a=yl({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function yl(t,a){return t=ea(22,t,null,a),t.lanes=0,t}function Eo(t,a,e){return _e(a,t.child,null,e),t=Ao(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Zs(t,a,e){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a),Rr(t.return,a,e)}function jo(t,a,e,i,n,l){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:i,tail:e,tailMode:n,treeForkCount:l}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=e,r.tailMode=n,r.treeForkCount=l)}function Ks(t,a,e){var i=a.pendingProps,n=i.revealOrder,l=i.tail;i=i.children;var r=wt.current,o=(r&2)!==0;if(o?(r=r&1|2,a.flags|=128):r&=1,tt(wt,r),Rt(t,a,i,e),i=K?Zi:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zs(t,e,a);else if(t.tag===19)Zs(t,e,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(e=a.child,n=null;e!==null;)t=e.alternate,t!==null&&ol(t)===null&&(n=e),e=e.sibling;e=n,e===null?(n=a.child,a.child=null):(n=e.sibling,e.sibling=null),jo(a,!1,n,e,l,i);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=a.child,a.child=null;n!==null;){if(t=n.alternate,t!==null&&ol(t)===null){a.child=n;break}t=n.sibling,n.sibling=e,e=n,n=t}jo(a,!0,e,null,l,i);break;case"together":jo(a,!1,null,null,void 0,i);break;default:a.memoizedState=null}return a.child}function Ya(t,a,e){if(t!==null&&(a.dependencies=t.dependencies),fe|=a.lanes,(e&a.childLanes)===0)if(t!==null){if(si(t,a,e,!1),(e&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(g(153));if(a.child!==null){for(t=a.child,e=Ua(t,t.pendingProps),a.child=e,e.return=a;t.sibling!==null;)t=t.sibling,e=e.sibling=Ua(t,t.pendingProps),e.return=a;e.sibling=null}return a.child}function Mo(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Pn(t)))}function vp(t,a,e){switch(a.tag){case 3:Dn(a,a.stateNode.containerInfo),ne(a,At,t.memoizedState.cache),He();break;case 27:case 5:Fl(a);break;case 4:Dn(a,a.stateNode.containerInfo);break;case 10:ne(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ir(a),null;break;case 13:var i=a.memoizedState;if(i!==null)return i.dehydrated!==null?(ce(a),a.flags|=128,null):(e&a.child.childLanes)!==0?$s(t,a,e):(ce(a),t=Ya(t,a,e),t!==null?t.sibling:null);ce(a);break;case 19:var n=(t.flags&128)!==0;if(i=(e&a.childLanes)!==0,i||(si(t,a,e,!1),i=(e&a.childLanes)!==0),n){if(i)return Ks(t,a,e);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(wt,wt.current),i)break;return null;case 22:return a.lanes=0,Rs(t,a,e,a.pendingProps);case 24:ne(a,At,t.memoizedState.cache)}return Ya(t,a,e)}function Js(t,a,e){if(t!==null)if(t.memoizedProps!==a.pendingProps)jt=!0;else{if(!Mo(t,e)&&(a.flags&128)===0)return jt=!1,vp(t,a,e);jt=(t.flags&131072)!==0}else jt=!1,K&&(a.flags&1048576)!==0&&ju(a,Zi,a.index);switch(a.lanes=0,a.tag){case 16:t:{var i=a.pendingProps;if(t=Ge(a.elementType),a.type=t,typeof t=="function")Or(t)?(i=Ye(t,i),a.tag=1,a=Qs(null,a,t,i,e)):(a.tag=0,a=So(null,a,t,i,e));else{if(t!=null){var n=t.$$typeof;if(n===Dt){a.tag=11,a=Gs(null,a,t,i,e);break t}else if(n===Sa){a.tag=14,a=qs(null,a,t,i,e);break t}}throw a=Oi(t)||t,Error(g(306,a,""))}}return a;case 0:return So(t,a,a.type,a.pendingProps,e);case 1:return i=a.type,n=Ye(i,a.pendingProps),Qs(t,a,i,n,e);case 3:t:{if(Dn(a,a.stateNode.containerInfo),t===null)throw Error(g(387));i=a.pendingProps;var l=a.memoizedState;n=l.element,Zr(t,a),an(a,i,null,e);var r=a.memoizedState;if(i=r.cache,ne(a,At,i),i!==l.cache&&Yr(a,[At],e,!0),tn(),i=r.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:r.cache},a.updateQueue.baseState=l,a.memoizedState=l,a.flags&256){a=Vs(t,a,i,e);break t}else if(i!==n){n=pa(Error(g(424)),a),Ki(n),a=Vs(t,a,i,e);break t}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(pt=va(t.firstChild),qt=a,K=!0,ee=null,ha=!0,e=Ru(a,null,i,e),a.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(He(),i===n){a=Ya(t,a,e);break t}Rt(t,a,i,e)}a=a.child}return a;case 26:return vl(t,a),t===null?(e=of(a.type,null,a.pendingProps,null))?a.memoizedState=e:K||(e=a.type,t=a.pendingProps,i=Ul(Fa.current).createElement(e),i[Gt]=a,i[Qt]=t,Yt(i,e,t),Ot(i),a.stateNode=i):a.memoizedState=of(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Fl(a),t===null&&K&&(i=a.stateNode=nf(a.type,a.pendingProps,Fa.current),qt=a,ha=!0,n=pt,be(a.type)?(oc=n,pt=va(i.firstChild)):pt=n),Rt(t,a,a.pendingProps.children,e),vl(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&K&&((n=i=pt)&&(i=Kp(i,a.type,a.pendingProps,ha),i!==null?(a.stateNode=i,qt=a,pt=va(i.firstChild),ha=!1,n=!0):n=!1),n||ie(a)),Fl(a),n=a.type,l=a.pendingProps,r=t!==null?t.memoizedProps:null,i=l.children,ec(n,l)?i=null:r!==null&&ec(n,r)&&(a.flags|=32),a.memoizedState!==null&&(n=to(t,a,up,null,null,e),zn._currentValue=n),vl(t,a),Rt(t,a,i,e),a.child;case 6:return t===null&&K&&((t=e=pt)&&(e=Jp(e,a.pendingProps,ha),e!==null?(a.stateNode=e,qt=a,pt=null,t=!0):t=!1),t||ie(a)),null;case 13:return $s(t,a,e);case 4:return Dn(a,a.stateNode.containerInfo),i=a.pendingProps,t===null?a.child=_e(a,null,i,e):Rt(t,a,i,e),a.child;case 11:return Gs(t,a,a.type,a.pendingProps,e);case 7:return Rt(t,a,a.pendingProps,e),a.child;case 8:return Rt(t,a,a.pendingProps.children,e),a.child;case 12:return Rt(t,a,a.pendingProps.children,e),a.child;case 10:return i=a.pendingProps,ne(a,a.type,i.value),Rt(t,a,i.children,e),a.child;case 9:return n=a.type._context,i=a.pendingProps.children,Ue(a),n=_t(n),i=i(n),a.flags|=1,Rt(t,a,i,e),a.child;case 14:return qs(t,a,a.type,a.pendingProps,e);case 15:return _s(t,a,a.type,a.pendingProps,e);case 19:return Ks(t,a,e);case 31:return bp(t,a,e);case 22:return Rs(t,a,e,a.pendingProps);case 24:return Ue(a),i=_t(At),t===null?(n=Qr(),n===null&&(n=ot,l=Xr(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=e),n=l),a.memoizedState={parent:i,cache:n},$r(a),ne(a,At,n)):((t.lanes&e)!==0&&(Zr(t,a),an(a,null,null,e),tn()),n=t.memoizedState,l=a.memoizedState,n.parent!==i?(n={parent:i,cache:i},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),ne(a,At,i)):(i=l.cache,ne(a,At,i),i!==n.cache&&Yr(a,[At],e,!0))),Rt(t,a,a.pendingProps.children,e),a.child;case 29:throw a.pendingProps}throw Error(g(156,a.tag))}function Xa(t){t.flags|=4}function ko(t,a,e,i,n){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(zd())t.flags|=8192;else throw qe=il,Vr}else t.flags&=-16777217}function Ws(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ff(a))if(zd())t.flags|=8192;else throw qe=il,Vr}function xl(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?kc():536870912,t.lanes|=a,zi|=a)}function cn(t,a){if(!K)switch(t.tailMode){case"hidden":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function gt(t){var a=t.alternate!==null&&t.alternate.child===t.child,e=0,i=0;if(a)for(var n=t.child;n!==null;)e|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)e|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=e,a}function yp(t,a,e){var i=a.pendingProps;switch(Nr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(a),null;case 1:return gt(a),null;case 3:return e=a.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),qa(At),$e(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(ui(a)?Xa(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,qr())),gt(a),null;case 26:var n=a.type,l=a.memoizedState;return t===null?(Xa(a),l!==null?(gt(a),Ws(a,l)):(gt(a),ko(a,n,null,i,e))):l?l!==t.memoizedState?(Xa(a),gt(a),Ws(a,l)):(gt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==i&&Xa(a),gt(a),ko(a,n,t,i,e)),null;case 27:if(Cn(a),e=Fa.current,n=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==i&&Xa(a);else{if(!i){if(a.stateNode===null)throw Error(g(166));return gt(a),null}t=Ct.current,ui(a)?ku(a):(t=nf(n,i,e),a.stateNode=t,Xa(a))}return gt(a),null;case 5:if(Cn(a),n=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==i&&Xa(a);else{if(!i){if(a.stateNode===null)throw Error(g(166));return gt(a),null}if(l=Ct.current,ui(a))ku(a);else{var r=Ul(Fa.current);switch(l){case 1:l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=r.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?r.createElement(n,{is:i.is}):r.createElement(n)}}l[Gt]=a,l[Qt]=i;t:for(r=a.child;r!==null;){if(r.tag===5||r.tag===6)l.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break t;for(;r.sibling===null;){if(r.return===null||r.return===a)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}a.stateNode=l;t:switch(Yt(l,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Xa(a)}}return gt(a),ko(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,e),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==i&&Xa(a);else{if(typeof i!="string"&&a.stateNode===null)throw Error(g(166));if(t=Fa.current,ui(a)){if(t=a.stateNode,e=a.memoizedProps,i=null,n=qt,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}t[Gt]=a,t=!!(t.nodeValue===e||i!==null&&i.suppressHydrationWarning===!0||$d(t.nodeValue,e)),t||ie(a,!0)}else t=Ul(t).createTextNode(i),t[Gt]=a,a.stateNode=t}return gt(a),null;case 31:if(e=a.memoizedState,t===null||t.memoizedState!==null){if(i=ui(a),e!==null){if(t===null){if(!i)throw Error(g(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(557));t[Gt]=a}else He(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;gt(a),t=!1}else e=qr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return a.flags&256?(na(a),a):(na(a),null);if((a.flags&128)!==0)throw Error(g(558))}return gt(a),null;case 13:if(i=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ui(a),i!==null&&i.dehydrated!==null){if(t===null){if(!n)throw Error(g(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[Gt]=a}else He(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;gt(a),n=!1}else n=qr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(na(a),a):(na(a),null)}return na(a),(a.flags&128)!==0?(a.lanes=e,a):(e=i!==null,t=t!==null&&t.memoizedState!==null,e&&(i=a.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==n&&(i.flags|=2048)),e!==t&&e&&(a.child.flags|=8192),xl(a,a.updateQueue),gt(a),null);case 4:return $e(),t===null&&Fo(a.stateNode.containerInfo),gt(a),null;case 10:return qa(a.type),gt(a),null;case 19:if(yt(wt),i=a.memoizedState,i===null)return gt(a),null;if(n=(a.flags&128)!==0,l=i.rendering,l===null)if(n)cn(i,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(l=ol(t),l!==null){for(a.flags|=128,cn(i,!1),t=l.updateQueue,a.updateQueue=t,xl(a,t),a.subtreeFlags=0,t=e,e=a.child;e!==null;)Tu(e,t),e=e.sibling;return tt(wt,wt.current&1|2),K&&Na(a,i.treeForkCount),a.child}t=t.sibling}i.tail!==null&&It()>Al&&(a.flags|=128,n=!0,cn(i,!1),a.lanes=4194304)}else{if(!n)if(t=ol(l),t!==null){if(a.flags|=128,n=!0,t=t.updateQueue,a.updateQueue=t,xl(a,t),cn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return gt(a),null}else 2*It()-i.renderingStartTime>Al&&e!==536870912&&(a.flags|=128,n=!0,cn(i,!1),a.lanes=4194304);i.isBackwards?(l.sibling=a.child,a.child=l):(t=i.last,t!==null?t.sibling=l:a.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=It(),t.sibling=null,e=wt.current,tt(wt,n?e&1|2:e&1),K&&Na(a,i.treeForkCount),t):(gt(a),null);case 22:case 23:return na(a),Fr(),i=a.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(a.flags|=8192):i&&(a.flags|=8192),i?(e&536870912)!==0&&(a.flags&128)===0&&(gt(a),a.subtreeFlags&6&&(a.flags|=8192)):gt(a),e=a.updateQueue,e!==null&&xl(a,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==e&&(a.flags|=2048),t!==null&&yt(Ne),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),qa(At),gt(a),null;case 25:return null;case 30:return null}throw Error(g(156,a.tag))}function xp(t,a){switch(Nr(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return qa(At),$e(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Cn(a),null;case 31:if(a.memoizedState!==null){if(na(a),a.alternate===null)throw Error(g(340));He()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(na(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(g(340));He()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return yt(wt),null;case 4:return $e(),null;case 10:return qa(a.type),null;case 22:case 23:return na(a),Fr(),t!==null&&yt(Ne),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return qa(At),null;case 25:return null;default:return null}}function Fs(t,a){switch(Nr(a),a.tag){case 3:qa(At),$e();break;case 26:case 27:case 5:Cn(a);break;case 4:$e();break;case 31:a.memoizedState!==null&&na(a);break;case 13:na(a);break;case 19:yt(wt);break;case 10:qa(a.type);break;case 22:case 23:na(a),Fr(),t!==null&&yt(Ne);break;case 24:qa(At)}}function un(t,a){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){i=void 0;var l=e.create,r=e.inst;i=l(),r.destroy=i}e=e.next}while(e!==n)}}catch(o){et(a,a.return,o)}}function se(t,a,e){try{var i=a.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var l=n.next;i=l;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=a;var u=e,h=o;try{h()}catch(x){et(n,u,x)}}}i=i.next}while(i!==l)}}catch(x){et(a,a.return,x)}}function Is(t){var a=t.updateQueue;if(a!==null){var e=t.stateNode;try{Xu(a,e)}catch(i){et(t,t.return,i)}}}function Ps(t,a,e){e.props=Ye(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(i){et(t,a,i)}}function sn(t,a){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof e=="function"?t.refCleanup=e(i):e.current=i}}catch(n){et(t,a,n)}}function ka(t,a){var e=t.ref,i=t.refCleanup;if(e!==null)if(typeof i=="function")try{i()}catch(n){et(t,a,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){et(t,a,n)}else e.current=null}function td(t){var a=t.type,e=t.memoizedProps,i=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":e.autoFocus&&i.focus();break t;case"img":e.src?i.src=e.src:e.srcSet&&(i.srcset=e.srcSet)}}catch(n){et(t,t.return,n)}}function Do(t,a,e){try{var i=t.stateNode;Xp(i,t.type,e,a),i[Qt]=a}catch(n){et(t,t.return,n)}}function ad(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&be(t.type)||t.tag===4}function Co(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ad(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&be(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oo(t,a,e){var i=t.tag;if(i===5||i===6)t=t.stateNode,a?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,a):(a=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.appendChild(t),e=e._reactRootContainer,e!=null||a.onclick!==null||(a.onclick=Ha));else if(i!==4&&(i===27&&be(t.type)&&(e=t.stateNode,a=null),t=t.child,t!==null))for(Oo(t,a,e),t=t.sibling;t!==null;)Oo(t,a,e),t=t.sibling}function Sl(t,a,e){var i=t.tag;if(i===5||i===6)t=t.stateNode,a?e.insertBefore(t,a):e.appendChild(t);else if(i!==4&&(i===27&&be(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(Sl(t,a,e),t=t.sibling;t!==null;)Sl(t,a,e),t=t.sibling}function ed(t){var a=t.stateNode,e=t.memoizedProps;try{for(var i=t.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Yt(a,i,e),a[Gt]=t,a[Qt]=e}catch(l){et(t,t.return,l)}}var La=!1,Mt=!1,Ho=!1,id=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function Sp(t,a){if(t=t.containerInfo,tc=Xl,t=mu(t),Ar(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var i=e.getSelection&&e.getSelection();if(i&&i.rangeCount!==0){e=i.anchorNode;var n=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{e.nodeType,l.nodeType}catch{e=null;break t}var r=0,o=-1,u=-1,h=0,x=0,T=t,b=null;a:for(;;){for(var y;T!==e||n!==0&&T.nodeType!==3||(o=r+n),T!==l||i!==0&&T.nodeType!==3||(u=r+i),T.nodeType===3&&(r+=T.nodeValue.length),(y=T.firstChild)!==null;)b=T,T=y;for(;;){if(T===t)break a;if(b===e&&++h===n&&(o=r),b===l&&++x===i&&(u=r),(y=T.nextSibling)!==null)break;T=b,b=T.parentNode}T=y}e=o===-1||u===-1?null:{start:o,end:u}}else e=null}e=e||{start:0,end:0}}else e=null;for(ac={focusedElem:t,selectionRange:e},Xl=!1,Ht=a;Ht!==null;)if(a=Ht,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Ht=t;else for(;Ht!==null;){switch(a=Ht,l=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)n=t[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,e=a,n=l.memoizedProps,l=l.memoizedState,i=e.stateNode;try{var k=Ye(e.type,n);t=i.getSnapshotBeforeUpdate(k,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(N){et(e,e.return,N)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,e=t.nodeType,e===9)nc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(g(163))}if(t=a.sibling,t!==null){t.return=a.return,Ht=t;break}Ht=a.return}}function nd(t,a,e){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Va(t,e),i&4&&un(5,e);break;case 1:if(Va(t,e),i&4)if(t=e.stateNode,a===null)try{t.componentDidMount()}catch(r){et(e,e.return,r)}else{var n=Ye(e.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(n,a,t.__reactInternalSnapshotBeforeUpdate)}catch(r){et(e,e.return,r)}}i&64&&Is(e),i&512&&sn(e,e.return);break;case 3:if(Va(t,e),i&64&&(t=e.updateQueue,t!==null)){if(a=null,e.child!==null)switch(e.child.tag){case 27:case 5:a=e.child.stateNode;break;case 1:a=e.child.stateNode}try{Xu(t,a)}catch(r){et(e,e.return,r)}}break;case 27:a===null&&i&4&&ed(e);case 26:case 5:Va(t,e),a===null&&i&4&&td(e),i&512&&sn(e,e.return);break;case 12:Va(t,e);break;case 31:Va(t,e),i&4&&od(t,e);break;case 13:Va(t,e),i&4&&cd(t,e),i&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=Dp.bind(null,e),Wp(t,e))));break;case 22:if(i=e.memoizedState!==null||La,!i){a=a!==null&&a.memoizedState!==null||Mt,n=La;var l=Mt;La=i,(Mt=a)&&!l?$a(t,e,(e.subtreeFlags&8772)!==0):Va(t,e),La=n,Mt=l}break;case 30:break;default:Va(t,e)}}function ld(t){var a=t.alternate;a!==null&&(t.alternate=null,ld(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&cr(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var bt=null,$t=!1;function Qa(t,a,e){for(e=e.child;e!==null;)rd(t,a,e),e=e.sibling}function rd(t,a,e){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Hi,e)}catch{}switch(e.tag){case 26:Mt||ka(e,a),Qa(t,a,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Mt||ka(e,a);var i=bt,n=$t;be(e.type)&&(bt=e.stateNode,$t=!1),Qa(t,a,e),yn(e.stateNode),bt=i,$t=n;break;case 5:Mt||ka(e,a);case 6:if(i=bt,n=$t,bt=null,Qa(t,a,e),bt=i,$t=n,bt!==null)if($t)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(e.stateNode)}catch(l){et(e,a,l)}else try{bt.removeChild(e.stateNode)}catch(l){et(e,a,l)}break;case 18:bt!==null&&($t?(t=bt,Id(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Di(t)):Id(bt,e.stateNode));break;case 4:i=bt,n=$t,bt=e.stateNode.containerInfo,$t=!0,Qa(t,a,e),bt=i,$t=n;break;case 0:case 11:case 14:case 15:se(2,e,a),Mt||se(4,e,a),Qa(t,a,e);break;case 1:Mt||(ka(e,a),i=e.stateNode,typeof i.componentWillUnmount=="function"&&Ps(e,a,i)),Qa(t,a,e);break;case 21:Qa(t,a,e);break;case 22:Mt=(i=Mt)||e.memoizedState!==null,Qa(t,a,e),Mt=i;break;default:Qa(t,a,e)}}function od(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Di(t)}catch(e){et(a,a.return,e)}}}function cd(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Di(t)}catch(e){et(a,a.return,e)}}function zp(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new id),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new id),a;default:throw Error(g(435,t.tag))}}function zl(t,a){var e=zp(t);a.forEach(function(i){if(!e.has(i)){e.add(i);var n=Cp.bind(null,t,i);i.then(n,n)}})}function Zt(t,a){var e=a.deletions;if(e!==null)for(var i=0;i<e.length;i++){var n=e[i],l=t,r=a,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(be(o.type)){bt=o.stateNode,$t=!1;break t}break;case 5:bt=o.stateNode,$t=!1;break t;case 3:case 4:bt=o.stateNode.containerInfo,$t=!0;break t}o=o.return}if(bt===null)throw Error(g(160));rd(l,r,n),bt=null,$t=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)ud(a,t),a=a.sibling}var Ta=null;function ud(t,a){var e=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zt(a,t),Kt(t),i&4&&(se(3,t,t.return),un(3,t),se(5,t,t.return));break;case 1:Zt(a,t),Kt(t),i&512&&(Mt||e===null||ka(e,e.return)),i&64&&La&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?i:e.concat(i))));break;case 26:var n=Ta;if(Zt(a,t),Kt(t),i&512&&(Mt||e===null||ka(e,e.return)),i&4){var l=e!==null?e.memoizedState:null;if(i=t.memoizedState,e===null)if(i===null)if(t.stateNode===null){t:{i=t.type,e=t.memoizedProps,n=n.ownerDocument||n;a:switch(i){case"title":l=n.getElementsByTagName("title")[0],(!l||l[Ni]||l[Gt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(i),n.head.insertBefore(l,n.querySelector("head > title"))),Yt(l,i,e),l[Gt]=t,Ot(l),i=l;break t;case"link":var r=sf("link","href",n).get(i+(e.href||""));if(r){for(var o=0;o<r.length;o++)if(l=r[o],l.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&l.getAttribute("rel")===(e.rel==null?null:e.rel)&&l.getAttribute("title")===(e.title==null?null:e.title)&&l.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){r.splice(o,1);break a}}l=n.createElement(i),Yt(l,i,e),n.head.appendChild(l);break;case"meta":if(r=sf("meta","content",n).get(i+(e.content||""))){for(o=0;o<r.length;o++)if(l=r[o],l.getAttribute("content")===(e.content==null?null:""+e.content)&&l.getAttribute("name")===(e.name==null?null:e.name)&&l.getAttribute("property")===(e.property==null?null:e.property)&&l.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&l.getAttribute("charset")===(e.charSet==null?null:e.charSet)){r.splice(o,1);break a}}l=n.createElement(i),Yt(l,i,e),n.head.appendChild(l);break;default:throw Error(g(468,i))}l[Gt]=t,Ot(l),i=l}t.stateNode=i}else df(n,t.type,t.stateNode);else t.stateNode=uf(n,i,t.memoizedProps);else l!==i?(l===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):l.count--,i===null?df(n,t.type,t.stateNode):uf(n,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Do(t,t.memoizedProps,e.memoizedProps)}break;case 27:Zt(a,t),Kt(t),i&512&&(Mt||e===null||ka(e,e.return)),e!==null&&i&4&&Do(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Zt(a,t),Kt(t),i&512&&(Mt||e===null||ka(e,e.return)),t.flags&32){n=t.stateNode;try{Pe(n,"")}catch(k){et(t,t.return,k)}}i&4&&t.stateNode!=null&&(n=t.memoizedProps,Do(t,n,e!==null?e.memoizedProps:n)),i&1024&&(Ho=!0);break;case 6:if(Zt(a,t),Kt(t),i&4){if(t.stateNode===null)throw Error(g(162));i=t.memoizedProps,e=t.stateNode;try{e.nodeValue=i}catch(k){et(t,t.return,k)}}break;case 3:if(ql=null,n=Ta,Ta=Nl(a.containerInfo),Zt(a,t),Ta=n,Kt(t),i&4&&e!==null&&e.memoizedState.isDehydrated)try{Di(a.containerInfo)}catch(k){et(t,t.return,k)}Ho&&(Ho=!1,sd(t));break;case 4:i=Ta,Ta=Nl(t.stateNode.containerInfo),Zt(a,t),Kt(t),Ta=i;break;case 12:Zt(a,t),Kt(t);break;case 31:Zt(a,t),Kt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,zl(t,i)));break;case 13:Zt(a,t),Kt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Tl=It()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,zl(t,i)));break;case 22:n=t.memoizedState!==null;var u=e!==null&&e.memoizedState!==null,h=La,x=Mt;if(La=h||n,Mt=x||u,Zt(a,t),Mt=x,La=h,Kt(t),i&8192)t:for(a=t.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(e===null||u||La||Mt||Xe(t)),e=null,a=t;;){if(a.tag===5||a.tag===26){if(e===null){u=e=a;try{if(l=u.stateNode,n)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=u.stateNode;var T=u.memoizedProps.style,b=T!=null&&T.hasOwnProperty("display")?T.display:null;o.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(k){et(u,u.return,k)}}}else if(a.tag===6){if(e===null){u=a;try{u.stateNode.nodeValue=n?"":u.memoizedProps}catch(k){et(u,u.return,k)}}}else if(a.tag===18){if(e===null){u=a;try{var y=u.stateNode;n?Pd(y,!0):Pd(u.stateNode,!1)}catch(k){et(u,u.return,k)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;e===a&&(e=null),a=a.return}e===a&&(e=null),a.sibling.return=a.return,a=a.sibling}i&4&&(i=t.updateQueue,i!==null&&(e=i.retryQueue,e!==null&&(i.retryQueue=null,zl(t,e))));break;case 19:Zt(a,t),Kt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,zl(t,i)));break;case 30:break;case 21:break;default:Zt(a,t),Kt(t)}}function Kt(t){var a=t.flags;if(a&2){try{for(var e,i=t.return;i!==null;){if(ad(i)){e=i;break}i=i.return}if(e==null)throw Error(g(160));switch(e.tag){case 27:var n=e.stateNode,l=Co(t);Sl(t,l,n);break;case 5:var r=e.stateNode;e.flags&32&&(Pe(r,""),e.flags&=-33);var o=Co(t);Sl(t,o,r);break;case 3:case 4:var u=e.stateNode.containerInfo,h=Co(t);Oo(t,h,u);break;default:throw Error(g(161))}}catch(x){et(t,t.return,x)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function sd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;sd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Va(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)nd(t,a.alternate,a),a=a.sibling}function Xe(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:se(4,a,a.return),Xe(a);break;case 1:ka(a,a.return);var e=a.stateNode;typeof e.componentWillUnmount=="function"&&Ps(a,a.return,e),Xe(a);break;case 27:yn(a.stateNode);case 26:case 5:ka(a,a.return),Xe(a);break;case 22:a.memoizedState===null&&Xe(a);break;case 30:Xe(a);break;default:Xe(a)}t=t.sibling}}function $a(t,a,e){for(e=e&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var i=a.alternate,n=t,l=a,r=l.flags;switch(l.tag){case 0:case 11:case 15:$a(n,l,e),un(4,l);break;case 1:if($a(n,l,e),i=l,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){et(i,i.return,h)}if(i=l,n=i.updateQueue,n!==null){var o=i.stateNode;try{var u=n.shared.hiddenCallbacks;if(u!==null)for(n.shared.hiddenCallbacks=null,n=0;n<u.length;n++)Yu(u[n],o)}catch(h){et(i,i.return,h)}}e&&r&64&&Is(l),sn(l,l.return);break;case 27:ed(l);case 26:case 5:$a(n,l,e),e&&i===null&&r&4&&td(l),sn(l,l.return);break;case 12:$a(n,l,e);break;case 31:$a(n,l,e),e&&r&4&&od(n,l);break;case 13:$a(n,l,e),e&&r&4&&cd(n,l);break;case 22:l.memoizedState===null&&$a(n,l,e),sn(l,l.return);break;case 30:break;default:$a(n,l,e)}a=a.sibling}}function Bo(t,a){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Ji(e))}function Uo(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Ji(t))}function Aa(t,a,e,i){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)dd(t,a,e,i),a=a.sibling}function dd(t,a,e,i){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Aa(t,a,e,i),n&2048&&un(9,a);break;case 1:Aa(t,a,e,i);break;case 3:Aa(t,a,e,i),n&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Ji(t)));break;case 12:if(n&2048){Aa(t,a,e,i),t=a.stateNode;try{var l=a.memoizedProps,r=l.id,o=l.onPostCommit;typeof o=="function"&&o(r,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(u){et(a,a.return,u)}}else Aa(t,a,e,i);break;case 31:Aa(t,a,e,i);break;case 13:Aa(t,a,e,i);break;case 23:break;case 22:l=a.stateNode,r=a.alternate,a.memoizedState!==null?l._visibility&2?Aa(t,a,e,i):dn(t,a):l._visibility&2?Aa(t,a,e,i):(l._visibility|=2,yi(t,a,e,i,(a.subtreeFlags&10256)!==0||!1)),n&2048&&Bo(r,a);break;case 24:Aa(t,a,e,i),n&2048&&Uo(a.alternate,a);break;default:Aa(t,a,e,i)}}function yi(t,a,e,i,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var l=t,r=a,o=e,u=i,h=r.flags;switch(r.tag){case 0:case 11:case 15:yi(l,r,o,u,n),un(8,r);break;case 23:break;case 22:var x=r.stateNode;r.memoizedState!==null?x._visibility&2?yi(l,r,o,u,n):dn(l,r):(x._visibility|=2,yi(l,r,o,u,n)),n&&h&2048&&Bo(r.alternate,r);break;case 24:yi(l,r,o,u,n),n&&h&2048&&Uo(r.alternate,r);break;default:yi(l,r,o,u,n)}a=a.sibling}}function dn(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var e=t,i=a,n=i.flags;switch(i.tag){case 22:dn(e,i),n&2048&&Bo(i.alternate,i);break;case 24:dn(e,i),n&2048&&Uo(i.alternate,i);break;default:dn(e,i)}a=a.sibling}}var fn=8192;function xi(t,a,e){if(t.subtreeFlags&fn)for(t=t.child;t!==null;)fd(t,a,e),t=t.sibling}function fd(t,a,e){switch(t.tag){case 26:xi(t,a,e),t.flags&fn&&t.memoizedState!==null&&cg(e,Ta,t.memoizedState,t.memoizedProps);break;case 5:xi(t,a,e);break;case 3:case 4:var i=Ta;Ta=Nl(t.stateNode.containerInfo),xi(t,a,e),Ta=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=fn,fn=16777216,xi(t,a,e),fn=i):xi(t,a,e));break;default:xi(t,a,e)}}function pd(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function pn(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var i=a[e];Ht=i,md(i,t)}pd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gd(t),t=t.sibling}function gd(t){switch(t.tag){case 0:case 11:case 15:pn(t),t.flags&2048&&se(9,t,t.return);break;case 3:pn(t);break;case 12:pn(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,wl(t)):pn(t);break;default:pn(t)}}function wl(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var i=a[e];Ht=i,md(i,t)}pd(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:se(8,a,a.return),wl(a);break;case 22:e=a.stateNode,e._visibility&2&&(e._visibility&=-3,wl(a));break;default:wl(a)}t=t.sibling}}function md(t,a){for(;Ht!==null;){var e=Ht;switch(e.tag){case 0:case 11:case 15:se(8,e,a);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var i=e.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ji(e.memoizedState.cache)}if(i=e.child,i!==null)i.return=e,Ht=i;else t:for(e=t;Ht!==null;){i=Ht;var n=i.sibling,l=i.return;if(ld(i),i===e){Ht=null;break t}if(n!==null){n.return=l,Ht=n;break t}Ht=l}}}var wp={getCacheForType:function(t){var a=_t(At),e=a.data.get(t);return e===void 0&&(e=t(),a.data.set(t,e)),e},cacheSignal:function(){return _t(At).controller.signal}},Tp=typeof WeakMap=="function"?WeakMap:Map,P=0,ot=null,Q=null,$=0,at=0,la=null,de=!1,Si=!1,No=!1,Za=0,St=0,fe=0,Le=0,Go=0,ra=0,zi=0,gn=null,Jt=null,qo=!1,Tl=0,hd=0,Al=1/0,El=null,pe=null,kt=0,ge=null,wi=null,Ka=0,_o=0,Ro=null,bd=null,mn=0,Yo=null;function oa(){return(P&2)!==0&&$!==0?$&-$:w.T!==null?Zo():Hc()}function vd(){if(ra===0)if(($&536870912)===0||K){var t=Bn;Bn<<=1,(Bn&3932160)===0&&(Bn=262144),ra=t}else ra=536870912;return t=ia.current,t!==null&&(t.flags|=32),ra}function Wt(t,a,e){(t===ot&&(at===2||at===9)||t.cancelPendingCommit!==null)&&(Ti(t,0),me(t,$,ra,!1)),Ui(t,e),((P&2)===0||t!==ot)&&(t===ot&&((P&2)===0&&(Le|=e),St===4&&me(t,$,ra,!1)),Da(t))}function yd(t,a,e){if((P&6)!==0)throw Error(g(327));var i=!e&&(a&127)===0&&(a&t.expiredLanes)===0||Bi(t,a),n=i?jp(t,a):Lo(t,a,!0),l=i;do{if(n===0){Si&&!i&&me(t,a,0,!1);break}else{if(e=t.current.alternate,l&&!Ap(e)){n=Lo(t,a,!1),l=!1;continue}if(n===2){if(l=a,t.errorRecoveryDisabledLanes&l)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){a=r;t:{var o=t;n=gn;var u=o.current.memoizedState.isDehydrated;if(u&&(Ti(o,r).flags|=256),r=Lo(o,r,!1),r!==2){if(No&&!u){o.errorRecoveryDisabledLanes|=l,Le|=l,n=4;break t}l=Jt,Jt=n,l!==null&&(Jt===null?Jt=l:Jt.push.apply(Jt,l))}n=r}if(l=!1,n!==2)continue}}if(n===1){Ti(t,0),me(t,a,0,!0);break}t:{switch(i=t,l=n,l){case 0:case 1:throw Error(g(345));case 4:if((a&4194048)!==a)break;case 6:me(i,a,ra,!de);break t;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(g(329))}if((a&62914560)===a&&(n=Tl+300-It(),10<n)){if(me(i,a,ra,!de),Nn(i,0,!0)!==0)break t;Ka=a,i.timeoutHandle=Wd(xd.bind(null,i,e,Jt,El,qo,a,ra,Le,zi,de,l,"Throttled",-0,0),n);break t}xd(i,e,Jt,El,qo,a,ra,Le,zi,de,l,null,-0,0)}}break}while(!0);Da(t)}function xd(t,a,e,i,n,l,r,o,u,h,x,T,b,y){if(t.timeoutHandle=-1,T=a.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ha},fd(a,l,T);var k=(l&62914560)===l?Tl-It():(l&4194048)===l?hd-It():0;if(k=ug(T,k),k!==null){Ka=l,t.cancelPendingCommit=k(Md.bind(null,t,a,l,e,i,n,r,o,u,x,T,null,b,y)),me(t,l,r,!h);return}}Md(t,a,l,e,i,n,r,o,u)}function Ap(t){for(var a=t;;){var e=a.tag;if((e===0||e===11||e===15)&&a.flags&16384&&(e=a.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var i=0;i<e.length;i++){var n=e[i],l=n.getSnapshot;n=n.value;try{if(!aa(l(),n))return!1}catch{return!1}}if(e=a.child,a.subtreeFlags&16384&&e!==null)e.return=a,a=e;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function me(t,a,e,i){a&=~Go,a&=~Le,t.suspendedLanes|=a,t.pingedLanes&=~a,i&&(t.warmLanes|=a),i=t.expirationTimes;for(var n=a;0<n;){var l=31-ta(n),r=1<<l;i[l]=-1,n&=~r}e!==0&&Dc(t,e,a)}function jl(){return(P&6)===0?(hn(0),!1):!0}function Xo(){if(Q!==null){if(at===0)var t=Q.return;else t=Q,Ga=Be=null,io(t),gi=null,Fi=0,t=Q;for(;t!==null;)Fs(t.alternate,t),t=t.return;Q=null}}function Ti(t,a){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,Vp(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Ka=0,Xo(),ot=t,Q=e=Ua(t.current,null),$=a,at=0,la=null,de=!1,Si=Bi(t,a),No=!1,zi=ra=Go=Le=fe=St=0,Jt=gn=null,qo=!1,(a&8)!==0&&(a|=a&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=a;0<i;){var n=31-ta(i),l=1<<n;a|=t[n],i&=~l}return Za=a,Kn(),e}function Sd(t,a){_=null,w.H=rn,a===pi||a===el?(a=Gu(),at=3):a===Vr?(a=Gu(),at=4):at=a===xo?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,la=a,Q===null&&(St=1,hl(t,pa(a,t.current)))}function zd(){var t=ia.current;return t===null?!0:($&4194048)===$?ba===null:($&62914560)===$||($&536870912)!==0?t===ba:!1}function wd(){var t=w.H;return w.H=rn,t===null?rn:t}function Td(){var t=w.A;return w.A=wp,t}function Ml(){St=4,de||($&4194048)!==$&&ia.current!==null||(Si=!0),(fe&134217727)===0&&(Le&134217727)===0||ot===null||me(ot,$,ra,!1)}function Lo(t,a,e){var i=P;P|=2;var n=wd(),l=Td();(ot!==t||$!==a)&&(El=null,Ti(t,a)),a=!1;var r=St;t:do try{if(at!==0&&Q!==null){var o=Q,u=la;switch(at){case 8:Xo(),r=6;break t;case 3:case 2:case 9:case 6:ia.current===null&&(a=!0);var h=at;if(at=0,la=null,Ai(t,o,u,h),e&&Si){r=0;break t}break;default:h=at,at=0,la=null,Ai(t,o,u,h)}}Ep(),r=St;break}catch(x){Sd(t,x)}while(!0);return a&&t.shellSuspendCounter++,Ga=Be=null,P=i,w.H=n,w.A=l,Q===null&&(ot=null,$=0,Kn()),r}function Ep(){for(;Q!==null;)Ad(Q)}function jp(t,a){var e=P;P|=2;var i=wd(),n=Td();ot!==t||$!==a?(El=null,Al=It()+500,Ti(t,a)):Si=Bi(t,a);t:do try{if(at!==0&&Q!==null){a=Q;var l=la;a:switch(at){case 1:at=0,la=null,Ai(t,a,l,1);break;case 2:case 9:if(Uu(l)){at=0,la=null,Ed(a);break}a=function(){at!==2&&at!==9||ot!==t||(at=7),Da(t)},l.then(a,a);break t;case 3:at=7;break t;case 4:at=5;break t;case 7:Uu(l)?(at=0,la=null,Ed(a)):(at=0,la=null,Ai(t,a,l,7));break;case 5:var r=null;switch(Q.tag){case 26:r=Q.memoizedState;case 5:case 27:var o=Q;if(r?ff(r):o.stateNode.complete){at=0,la=null;var u=o.sibling;if(u!==null)Q=u;else{var h=o.return;h!==null?(Q=h,kl(h)):Q=null}break a}}at=0,la=null,Ai(t,a,l,5);break;case 6:at=0,la=null,Ai(t,a,l,6);break;case 8:Xo(),St=6;break t;default:throw Error(g(462))}}Mp();break}catch(x){Sd(t,x)}while(!0);return Ga=Be=null,w.H=i,w.A=n,P=e,Q!==null?0:(ot=null,$=0,Kn(),St)}function Mp(){for(;Q!==null&&!Ff();)Ad(Q)}function Ad(t){var a=Js(t.alternate,t,Za);t.memoizedProps=t.pendingProps,a===null?kl(t):Q=a}function Ed(t){var a=t,e=a.alternate;switch(a.tag){case 15:case 0:a=Ls(e,a,a.pendingProps,a.type,void 0,$);break;case 11:a=Ls(e,a,a.pendingProps,a.type.render,a.ref,$);break;case 5:io(a);default:Fs(e,a),a=Q=Tu(a,Za),a=Js(e,a,Za)}t.memoizedProps=t.pendingProps,a===null?kl(t):Q=a}function Ai(t,a,e,i){Ga=Be=null,io(a),gi=null,Fi=0;var n=a.return;try{if(hp(t,n,a,e,$)){St=1,hl(t,pa(e,t.current)),Q=null;return}}catch(l){if(n!==null)throw Q=n,l;St=1,hl(t,pa(e,t.current)),Q=null;return}a.flags&32768?(K||i===1?t=!0:Si||($&536870912)!==0?t=!1:(de=t=!0,(i===2||i===9||i===3||i===6)&&(i=ia.current,i!==null&&i.tag===13&&(i.flags|=16384))),jd(a,t)):kl(a)}function kl(t){var a=t;do{if((a.flags&32768)!==0){jd(a,de);return}t=a.return;var e=yp(a.alternate,a,Za);if(e!==null){Q=e;return}if(a=a.sibling,a!==null){Q=a;return}Q=a=t}while(a!==null);St===0&&(St=5)}function jd(t,a){do{var e=xp(t.alternate,t);if(e!==null){e.flags&=32767,Q=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!a&&(t=t.sibling,t!==null)){Q=t;return}Q=t=e}while(t!==null);St=6,Q=null}function Md(t,a,e,i,n,l,r,o,u){t.cancelPendingCommit=null;do Dl();while(kt!==0);if((P&6)!==0)throw Error(g(327));if(a!==null){if(a===t.current)throw Error(g(177));if(l=a.lanes|a.childLanes,l|=Dr,o0(t,e,l,r,o,u),t===ot&&(Q=ot=null,$=0),wi=a,ge=t,Ka=e,_o=l,Ro=n,bd=i,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Op(On,function(){return Hd(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||i){i=w.T,w.T=null,n=M.p,M.p=2,r=P,P|=4;try{Sp(t,a,e)}finally{P=r,M.p=n,w.T=i}}kt=1,kd(),Dd(),Cd()}}function kd(){if(kt===1){kt=0;var t=ge,a=wi,e=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||e){e=w.T,w.T=null;var i=M.p;M.p=2;var n=P;P|=4;try{ud(a,t);var l=ac,r=mu(t.containerInfo),o=l.focusedElem,u=l.selectionRange;if(r!==o&&o&&o.ownerDocument&&gu(o.ownerDocument.documentElement,o)){if(u!==null&&Ar(o)){var h=u.start,x=u.end;if(x===void 0&&(x=h),"selectionStart"in o)o.selectionStart=h,o.selectionEnd=Math.min(x,o.value.length);else{var T=o.ownerDocument||document,b=T&&T.defaultView||window;if(b.getSelection){var y=b.getSelection(),k=o.textContent.length,N=Math.min(u.start,k),lt=u.end===void 0?N:Math.min(u.end,k);!y.extend&&N>lt&&(r=lt,lt=N,N=r);var p=pu(o,N),s=pu(o,lt);if(p&&s&&(y.rangeCount!==1||y.anchorNode!==p.node||y.anchorOffset!==p.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)){var m=T.createRange();m.setStart(p.node,p.offset),y.removeAllRanges(),N>lt?(y.addRange(m),y.extend(s.node,s.offset)):(m.setEnd(s.node,s.offset),y.addRange(m))}}}}for(T=[],y=o;y=y.parentNode;)y.nodeType===1&&T.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<T.length;o++){var S=T[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Xl=!!tc,ac=tc=null}finally{P=n,M.p=i,w.T=e}}t.current=a,kt=2}}function Dd(){if(kt===2){kt=0;var t=ge,a=wi,e=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||e){e=w.T,w.T=null;var i=M.p;M.p=2;var n=P;P|=4;try{nd(t,a.alternate,a)}finally{P=n,M.p=i,w.T=e}}kt=3}}function Cd(){if(kt===4||kt===3){kt=0,If();var t=ge,a=wi,e=Ka,i=bd;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?kt=5:(kt=0,wi=ge=null,Od(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(pe=null),rr(e),a=a.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Hi,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=w.T,n=M.p,M.p=2,w.T=null;try{for(var l=t.onRecoverableError,r=0;r<i.length;r++){var o=i[r];l(o.value,{componentStack:o.stack})}}finally{w.T=a,M.p=n}}(Ka&3)!==0&&Dl(),Da(t),n=t.pendingLanes,(e&261930)!==0&&(n&42)!==0?t===Yo?mn++:(mn=0,Yo=t):mn=0,hn(0)}}function Od(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Ji(a)))}function Dl(){return kd(),Dd(),Cd(),Hd()}function Hd(){if(kt!==5)return!1;var t=ge,a=_o;_o=0;var e=rr(Ka),i=w.T,n=M.p;try{M.p=32>e?32:e,w.T=null,e=Ro,Ro=null;var l=ge,r=Ka;if(kt=0,wi=ge=null,Ka=0,(P&6)!==0)throw Error(g(331));var o=P;if(P|=4,gd(l.current),dd(l,l.current,r,e),P=o,hn(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Hi,l)}catch{}return!0}finally{M.p=n,w.T=i,Od(t,a)}}function Bd(t,a,e){a=pa(e,a),a=yo(t.stateNode,a,2),t=oe(t,a,2),t!==null&&(Ui(t,2),Da(t))}function et(t,a,e){if(t.tag===3)Bd(t,t,e);else for(;a!==null;){if(a.tag===3){Bd(a,t,e);break}else if(a.tag===1){var i=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pe===null||!pe.has(i))){t=pa(e,t),e=Us(2),i=oe(a,e,2),i!==null&&(Ns(e,i,a,t),Ui(i,2),Da(i));break}}a=a.return}}function Qo(t,a,e){var i=t.pingCache;if(i===null){i=t.pingCache=new Tp;var n=new Set;i.set(a,n)}else n=i.get(a),n===void 0&&(n=new Set,i.set(a,n));n.has(e)||(No=!0,n.add(e),t=kp.bind(null,t,a,e),a.then(t,t))}function kp(t,a,e){var i=t.pingCache;i!==null&&i.delete(a),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,ot===t&&($&e)===e&&(St===4||St===3&&($&62914560)===$&&300>It()-Tl?(P&2)===0&&Ti(t,0):Go|=e,zi===$&&(zi=0)),Da(t)}function Ud(t,a){a===0&&(a=kc()),t=Ce(t,a),t!==null&&(Ui(t,a),Da(t))}function Dp(t){var a=t.memoizedState,e=0;a!==null&&(e=a.retryLane),Ud(t,e)}function Cp(t,a){var e=0;switch(t.tag){case 31:case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(e=n.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(g(314))}i!==null&&i.delete(a),Ud(t,e)}function Op(t,a){return er(t,a)}var Cl=null,Ei=null,Vo=!1,Ol=!1,$o=!1,he=0;function Da(t){t!==Ei&&t.next===null&&(Ei===null?Cl=Ei=t:Ei=Ei.next=t),Ol=!0,Vo||(Vo=!0,Bp())}function hn(t,a){if(!$o&&Ol){$o=!0;do for(var e=!1,i=Cl;i!==null;){if(t!==0){var n=i.pendingLanes;if(n===0)var l=0;else{var r=i.suspendedLanes,o=i.pingedLanes;l=(1<<31-ta(42|t)+1)-1,l&=n&~(r&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(e=!0,_d(i,l))}else l=$,l=Nn(i,i===ot?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Bi(i,l)||(e=!0,_d(i,l));i=i.next}while(e);$o=!1}}function Hp(){Nd()}function Nd(){Ol=Vo=!1;var t=0;he!==0&&Qp()&&(t=he);for(var a=It(),e=null,i=Cl;i!==null;){var n=i.next,l=Gd(i,a);l===0?(i.next=null,e===null?Cl=n:e.next=n,n===null&&(Ei=e)):(e=i,(t!==0||(l&3)!==0)&&(Ol=!0)),i=n}kt!==0&&kt!==5||hn(t),he!==0&&(he=0)}function Gd(t,a){for(var e=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var r=31-ta(l),o=1<<r,u=n[r];u===-1?((o&e)===0||(o&i)!==0)&&(n[r]=r0(o,a)):u<=a&&(t.expiredLanes|=o),l&=~o}if(a=ot,e=$,e=Nn(t,t===a?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,e===0||t===a&&(at===2||at===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&ir(i),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Bi(t,e)){if(a=e&-e,a===t.callbackPriority)return a;switch(i!==null&&ir(i),rr(e)){case 2:case 8:e=jc;break;case 32:e=On;break;case 268435456:e=Mc;break;default:e=On}return i=qd.bind(null,t),e=er(e,i),t.callbackPriority=a,t.callbackNode=e,a}return i!==null&&i!==null&&ir(i),t.callbackPriority=2,t.callbackNode=null,2}function qd(t,a){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Dl()&&t.callbackNode!==e)return null;var i=$;return i=Nn(t,t===ot?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(yd(t,i,a),Gd(t,It()),t.callbackNode!=null&&t.callbackNode===e?qd.bind(null,t):null)}function _d(t,a){if(Dl())return null;yd(t,a,!0)}function Bp(){$p(function(){(P&6)!==0?er(Ec,Hp):Nd()})}function Zo(){if(he===0){var t=di;t===0&&(t=Hn,Hn<<=1,(Hn&261888)===0&&(Hn=256)),he=t}return he}function Rd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rn(""+t)}function Yd(t,a){var e=a.ownerDocument.createElement("input");return e.name=a.name,e.value=a.value,t.id&&e.setAttribute("form",t.id),a.parentNode.insertBefore(e,a),t=new FormData(t),e.parentNode.removeChild(e),t}function Up(t,a,e,i,n){if(a==="submit"&&e&&e.stateNode===n){var l=Rd((n[Qt]||null).action),r=i.submitter;r&&(a=(a=r[Qt]||null)?Rd(a.formAction):r.getAttribute("formAction"),a!==null&&(l=a,r=null));var o=new Qn("action","action",null,i,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(he!==0){var u=r?Yd(n,r):new FormData(n);po(e,{pending:!0,data:u,method:n.method,action:l},null,u)}}else typeof l=="function"&&(o.preventDefault(),u=r?Yd(n,r):new FormData(n),po(e,{pending:!0,data:u,method:n.method,action:l},l,u))},currentTarget:n}]})}}for(var Ko=0;Ko<kr.length;Ko++){var Jo=kr[Ko],Np=Jo.toLowerCase(),Gp=Jo[0].toUpperCase()+Jo.slice(1);wa(Np,"on"+Gp)}wa(vu,"onAnimationEnd"),wa(yu,"onAnimationIteration"),wa(xu,"onAnimationStart"),wa("dblclick","onDoubleClick"),wa("focusin","onFocus"),wa("focusout","onBlur"),wa(P0,"onTransitionRun"),wa(tp,"onTransitionStart"),wa(ap,"onTransitionCancel"),wa(Su,"onTransitionEnd"),Fe("onMouseEnter",["mouseout","mouseover"]),Fe("onMouseLeave",["mouseout","mouseover"]),Fe("onPointerEnter",["pointerout","pointerover"]),Fe("onPointerLeave",["pointerout","pointerover"]),je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),je("onBeforeInput",["compositionend","keypress","textInput","paste"]),je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));function Xd(t,a){a=(a&4)!==0;for(var e=0;e<t.length;e++){var i=t[e],n=i.event;i=i.listeners;t:{var l=void 0;if(a)for(var r=i.length-1;0<=r;r--){var o=i[r],u=o.instance,h=o.currentTarget;if(o=o.listener,u!==l&&n.isPropagationStopped())break t;l=o,n.currentTarget=h;try{l(n)}catch(x){Zn(x)}n.currentTarget=null,l=u}else for(r=0;r<i.length;r++){if(o=i[r],u=o.instance,h=o.currentTarget,o=o.listener,u!==l&&n.isPropagationStopped())break t;l=o,n.currentTarget=h;try{l(n)}catch(x){Zn(x)}n.currentTarget=null,l=u}}}}function V(t,a){var e=a[or];e===void 0&&(e=a[or]=new Set);var i=t+"__bubble";e.has(i)||(Ld(a,t,2,!1),e.add(i))}function Wo(t,a,e){var i=0;a&&(i|=4),Ld(e,t,i,a)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[Hl]){t[Hl]=!0,Nc.forEach(function(e){e!=="selectionchange"&&(qp.has(e)||Wo(e,!1,t),Wo(e,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Hl]||(a[Hl]=!0,Wo("selectionchange",!1,a))}}function Ld(t,a,e,i){switch(yf(a)){case 2:var n=fg;break;case 8:n=pg;break;default:n=fc}e=n.bind(null,a,e,t),n=void 0,!hr||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(a,e,{capture:!0,passive:n}):t.addEventListener(a,e,!0):n!==void 0?t.addEventListener(a,e,{passive:n}):t.addEventListener(a,e,!1)}function Io(t,a,e,i,n){var l=i;if((a&1)===0&&(a&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=i.return;r!==null;){var u=r.tag;if((u===3||u===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=Ke(o),r===null)return;if(u=r.tag,u===5||u===6||u===26||u===27){i=l=r;continue t}o=o.parentNode}}i=i.return}Kc(function(){var h=l,x=gr(e),T=[];t:{var b=zu.get(t);if(b!==void 0){var y=Qn,k=t;switch(t){case"keypress":if(Xn(e)===0)break t;case"keydown":case"keyup":y=C0;break;case"focusin":k="focus",y=xr;break;case"focusout":k="blur",y=xr;break;case"beforeblur":case"afterblur":y=xr;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=B0;break;case vu:case yu:case xu:y=z0;break;case Su:y=N0;break;case"scroll":case"scrollend":y=b0;break;case"wheel":y=q0;break;case"copy":case"cut":case"paste":y=T0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Pc;break;case"toggle":case"beforetoggle":y=R0}var N=(a&4)!==0,lt=!N&&(t==="scroll"||t==="scrollend"),p=N?b!==null?b+"Capture":null:b;N=[];for(var s=h,m;s!==null;){var S=s;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||p===null||(S=qi(s,p),S!=null&&N.push(vn(s,S,m))),lt)break;s=s.return}0<N.length&&(b=new y(b,k,null,e,x),T.push({event:b,listeners:N}))}}if((a&7)===0){t:{if(b=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",b&&e!==pr&&(k=e.relatedTarget||e.fromElement)&&(Ke(k)||k[Ze]))break t;if((y||b)&&(b=x.window===x?x:(b=x.ownerDocument)?b.defaultView||b.parentWindow:window,y?(k=e.relatedTarget||e.toElement,y=h,k=k?Ke(k):null,k!==null&&(lt=D(k),N=k.tag,k!==lt||N!==5&&N!==27&&N!==6)&&(k=null)):(y=null,k=h),y!==k)){if(N=Fc,S="onMouseLeave",p="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(N=Pc,S="onPointerLeave",p="onPointerEnter",s="pointer"),lt=y==null?b:Gi(y),m=k==null?b:Gi(k),b=new N(S,s+"leave",y,e,x),b.target=lt,b.relatedTarget=m,S=null,Ke(x)===h&&(N=new N(p,s+"enter",k,e,x),N.target=m,N.relatedTarget=lt,S=N),lt=S,y&&k)a:{for(N=_p,p=y,s=k,m=0,S=p;S;S=N(S))m++;S=0;for(var H=s;H;H=N(H))S++;for(;0<m-S;)p=N(p),m--;for(;0<S-m;)s=N(s),S--;for(;m--;){if(p===s||s!==null&&p===s.alternate){N=p;break a}p=N(p),s=N(s)}N=null}else N=null;y!==null&&Qd(T,b,y,N,!1),k!==null&&lt!==null&&Qd(T,lt,k,N,!0)}}t:{if(b=h?Gi(h):window,y=b.nodeName&&b.nodeName.toLowerCase(),y==="select"||y==="input"&&b.type==="file")var F=ou;else if(lu(b))if(cu)F=W0;else{F=K0;var O=Z0}else y=b.nodeName,!y||y.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?h&&fr(h.elementType)&&(F=ou):F=J0;if(F&&(F=F(t,h))){ru(T,F,e,x);break t}O&&O(t,b,h),t==="focusout"&&h&&b.type==="number"&&h.memoizedProps.value!=null&&dr(b,"number",b.value)}switch(O=h?Gi(h):window,t){case"focusin":(lu(O)||O.contentEditable==="true")&&(ii=O,Er=h,$i=null);break;case"focusout":$i=Er=ii=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,hu(T,e,x);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":hu(T,e,x)}var Y;if(zr)t:{switch(t){case"compositionstart":var Z="onCompositionStart";break t;case"compositionend":Z="onCompositionEnd";break t;case"compositionupdate":Z="onCompositionUpdate";break t}Z=void 0}else ei?iu(t,e)&&(Z="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(Z="onCompositionStart");Z&&(tu&&e.locale!=="ko"&&(ei||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&ei&&(Y=Jc()):(te=x,br="value"in te?te.value:te.textContent,ei=!0)),O=Bl(h,Z),0<O.length&&(Z=new Ic(Z,t,null,e,x),T.push({event:Z,listeners:O}),Y?Z.data=Y:(Y=nu(e),Y!==null&&(Z.data=Y)))),(Y=X0?L0(t,e):Q0(t,e))&&(Z=Bl(h,"onBeforeInput"),0<Z.length&&(O=new Ic("onBeforeInput","beforeinput",null,e,x),T.push({event:O,listeners:Z}),O.data=Y)),Up(T,t,h,e,x)}Xd(T,a)})}function vn(t,a,e){return{instance:t,listener:a,currentTarget:e}}function Bl(t,a){for(var e=a+"Capture",i=[];t!==null;){var n=t,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=qi(t,e),n!=null&&i.unshift(vn(t,n,l)),n=qi(t,a),n!=null&&i.push(vn(t,n,l))),t.tag===3)return i;t=t.return}return[]}function _p(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Qd(t,a,e,i,n){for(var l=a._reactName,r=[];e!==null&&e!==i;){var o=e,u=o.alternate,h=o.stateNode;if(o=o.tag,u!==null&&u===i)break;o!==5&&o!==26&&o!==27||h===null||(u=h,n?(h=qi(e,l),h!=null&&r.unshift(vn(e,h,u))):n||(h=qi(e,l),h!=null&&r.push(vn(e,h,u)))),e=e.return}r.length!==0&&t.push({event:a,listeners:r})}var Rp=/\r\n?/g,Yp=/\u0000|\uFFFD/g;function Vd(t){return(typeof t=="string"?t:""+t).replace(Rp,`
`).replace(Yp,"")}function $d(t,a){return a=Vd(a),Vd(t)===a}function nt(t,a,e,i,n,l){switch(e){case"children":typeof i=="string"?a==="body"||a==="textarea"&&i===""||Pe(t,i):(typeof i=="number"||typeof i=="bigint")&&a!=="body"&&Pe(t,""+i);break;case"className":qn(t,"class",i);break;case"tabIndex":qn(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":qn(t,e,i);break;case"style":$c(t,i,l);break;case"data":if(a!=="object"){qn(t,"data",i);break}case"src":case"href":if(i===""&&(a!=="a"||e!=="href")){t.removeAttribute(e);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(e);break}i=Rn(""+i),t.setAttribute(e,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(e==="formAction"?(a!=="input"&&nt(t,a,"name",n.name,n,null),nt(t,a,"formEncType",n.formEncType,n,null),nt(t,a,"formMethod",n.formMethod,n,null),nt(t,a,"formTarget",n.formTarget,n,null)):(nt(t,a,"encType",n.encType,n,null),nt(t,a,"method",n.method,n,null),nt(t,a,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(e);break}i=Rn(""+i),t.setAttribute(e,i);break;case"onClick":i!=null&&(t.onclick=Ha);break;case"onScroll":i!=null&&V("scroll",t);break;case"onScrollEnd":i!=null&&V("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(g(61));if(e=i.__html,e!=null){if(n.children!=null)throw Error(g(60));t.innerHTML=e}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}e=Rn(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(e,""+i):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":i===!0?t.setAttribute(e,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(e,i):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(e,i):t.removeAttribute(e);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(e):t.setAttribute(e,i);break;case"popover":V("beforetoggle",t),V("toggle",t),Gn(t,"popover",i);break;case"xlinkActuate":Oa(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Oa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Oa(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Oa(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Oa(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Oa(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Oa(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Oa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Oa(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Gn(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=m0.get(e)||e,Gn(t,e,i))}}function Po(t,a,e,i,n,l){switch(e){case"style":$c(t,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(g(61));if(e=i.__html,e!=null){if(n.children!=null)throw Error(g(60));t.innerHTML=e}}break;case"children":typeof i=="string"?Pe(t,i):(typeof i=="number"||typeof i=="bigint")&&Pe(t,""+i);break;case"onScroll":i!=null&&V("scroll",t);break;case"onScrollEnd":i!=null&&V("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gc.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),a=e.slice(2,n?e.length-7:void 0),l=t[Qt]||null,l=l!=null?l[e]:null,typeof l=="function"&&t.removeEventListener(a,l,n),typeof i=="function")){typeof l!="function"&&l!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(a,i,n);break t}e in t?t[e]=i:i===!0?t.setAttribute(e,""):Gn(t,e,i)}}}function Yt(t,a,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",t),V("load",t);var i=!1,n=!1,l;for(l in e)if(e.hasOwnProperty(l)){var r=e[l];if(r!=null)switch(l){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,a));default:nt(t,a,l,r,e,null)}}n&&nt(t,a,"srcSet",e.srcSet,e,null),i&&nt(t,a,"src",e.src,e,null);return;case"input":V("invalid",t);var o=l=r=n=null,u=null,h=null;for(i in e)if(e.hasOwnProperty(i)){var x=e[i];if(x!=null)switch(i){case"name":n=x;break;case"type":r=x;break;case"checked":u=x;break;case"defaultChecked":h=x;break;case"value":l=x;break;case"defaultValue":o=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(g(137,a));break;default:nt(t,a,i,x,e,null)}}Xc(t,l,o,u,h,r,n,!1);return;case"select":V("invalid",t),i=r=l=null;for(n in e)if(e.hasOwnProperty(n)&&(o=e[n],o!=null))switch(n){case"value":l=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:nt(t,a,n,o,e,null)}a=l,e=r,t.multiple=!!i,a!=null?Ie(t,!!i,a,!1):e!=null&&Ie(t,!!i,e,!0);return;case"textarea":V("invalid",t),l=n=i=null;for(r in e)if(e.hasOwnProperty(r)&&(o=e[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":n=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(g(91));break;default:nt(t,a,r,o,e,null)}Qc(t,i,n,l);return;case"option":for(u in e)if(e.hasOwnProperty(u)&&(i=e[u],i!=null))switch(u){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:nt(t,a,u,i,e,null)}return;case"dialog":V("beforetoggle",t),V("toggle",t),V("cancel",t),V("close",t);break;case"iframe":case"object":V("load",t);break;case"video":case"audio":for(i=0;i<bn.length;i++)V(bn[i],t);break;case"image":V("error",t),V("load",t);break;case"details":V("toggle",t);break;case"embed":case"source":case"link":V("error",t),V("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in e)if(e.hasOwnProperty(h)&&(i=e[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,a));default:nt(t,a,h,i,e,null)}return;default:if(fr(a)){for(x in e)e.hasOwnProperty(x)&&(i=e[x],i!==void 0&&Po(t,a,x,i,e,void 0));return}}for(o in e)e.hasOwnProperty(o)&&(i=e[o],i!=null&&nt(t,a,o,i,e,null))}function Xp(t,a,e,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,r=null,o=null,u=null,h=null,x=null;for(y in e){var T=e[y];if(e.hasOwnProperty(y)&&T!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":u=T;default:i.hasOwnProperty(y)||nt(t,a,y,null,i,T)}}for(var b in i){var y=i[b];if(T=e[b],i.hasOwnProperty(b)&&(y!=null||T!=null))switch(b){case"type":l=y;break;case"name":n=y;break;case"checked":h=y;break;case"defaultChecked":x=y;break;case"value":r=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,a));break;default:y!==T&&nt(t,a,b,y,i,T)}}sr(t,r,o,u,h,x,l,n);return;case"select":y=r=o=b=null;for(l in e)if(u=e[l],e.hasOwnProperty(l)&&u!=null)switch(l){case"value":break;case"multiple":y=u;default:i.hasOwnProperty(l)||nt(t,a,l,null,i,u)}for(n in i)if(l=i[n],u=e[n],i.hasOwnProperty(n)&&(l!=null||u!=null))switch(n){case"value":b=l;break;case"defaultValue":o=l;break;case"multiple":r=l;default:l!==u&&nt(t,a,n,l,i,u)}a=o,e=r,i=y,b!=null?Ie(t,!!e,b,!1):!!i!=!!e&&(a!=null?Ie(t,!!e,a,!0):Ie(t,!!e,e?[]:"",!1));return;case"textarea":y=b=null;for(o in e)if(n=e[o],e.hasOwnProperty(o)&&n!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:nt(t,a,o,null,i,n)}for(r in i)if(n=i[r],l=e[r],i.hasOwnProperty(r)&&(n!=null||l!=null))switch(r){case"value":b=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==l&&nt(t,a,r,n,i,l)}Lc(t,b,y);return;case"option":for(var k in e)if(b=e[k],e.hasOwnProperty(k)&&b!=null&&!i.hasOwnProperty(k))switch(k){case"selected":t.selected=!1;break;default:nt(t,a,k,null,i,b)}for(u in i)if(b=i[u],y=e[u],i.hasOwnProperty(u)&&b!==y&&(b!=null||y!=null))switch(u){case"selected":t.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:nt(t,a,u,b,i,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in e)b=e[N],e.hasOwnProperty(N)&&b!=null&&!i.hasOwnProperty(N)&&nt(t,a,N,null,i,b);for(h in i)if(b=i[h],y=e[h],i.hasOwnProperty(h)&&b!==y&&(b!=null||y!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(g(137,a));break;default:nt(t,a,h,b,i,y)}return;default:if(fr(a)){for(var lt in e)b=e[lt],e.hasOwnProperty(lt)&&b!==void 0&&!i.hasOwnProperty(lt)&&Po(t,a,lt,void 0,i,b);for(x in i)b=i[x],y=e[x],!i.hasOwnProperty(x)||b===y||b===void 0&&y===void 0||Po(t,a,x,b,i,y);return}}for(var p in e)b=e[p],e.hasOwnProperty(p)&&b!=null&&!i.hasOwnProperty(p)&&nt(t,a,p,null,i,b);for(T in i)b=i[T],y=e[T],!i.hasOwnProperty(T)||b===y||b==null&&y==null||nt(t,a,T,b,i,y)}function Zd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lp(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,e=performance.getEntriesByType("resource"),i=0;i<e.length;i++){var n=e[i],l=n.transferSize,r=n.initiatorType,o=n.duration;if(l&&o&&Zd(r)){for(r=0,o=n.responseEnd,i+=1;i<e.length;i++){var u=e[i],h=u.startTime;if(h>o)break;var x=u.transferSize,T=u.initiatorType;x&&Zd(T)&&(u=u.responseEnd,r+=x*(u<o?1:(o-h)/(u-h)))}if(--i,a+=8*(l+r)/(n.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var tc=null,ac=null;function Ul(t){return t.nodeType===9?t:t.ownerDocument}function Kd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jd(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function ec(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ic=null;function Qp(){var t=window.event;return t&&t.type==="popstate"?t===ic?!1:(ic=t,!0):(ic=null,!1)}var Wd=typeof setTimeout=="function"?setTimeout:void 0,Vp=typeof clearTimeout=="function"?clearTimeout:void 0,Fd=typeof Promise=="function"?Promise:void 0,$p=typeof queueMicrotask=="function"?queueMicrotask:typeof Fd<"u"?function(t){return Fd.resolve(null).then(t).catch(Zp)}:Wd;function Zp(t){setTimeout(function(){throw t})}function be(t){return t==="head"}function Id(t,a){var e=a,i=0;do{var n=e.nextSibling;if(t.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(i===0){t.removeChild(n),Di(a);return}i--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")i++;else if(e==="html")yn(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,yn(e);for(var l=e.firstChild;l;){var r=l.nextSibling,o=l.nodeName;l[Ni]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||e.removeChild(l),l=r}}else e==="body"&&yn(t.ownerDocument.body);e=n}while(e);Di(a)}function Pd(t,a){var e=t;t=0;do{var i=e.nextSibling;if(e.nodeType===1?a?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(a?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),i&&i.nodeType===8)if(e=i.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=i}while(e)}function nc(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var e=a;switch(a=a.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":nc(e),cr(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function Kp(t,a,e,i){for(;t.nodeType===1;){var n=e;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ni])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=va(t.nextSibling),t===null)break}return null}function Jp(t,a,e){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=va(t.nextSibling),t===null))return null;return t}function tf(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=va(t.nextSibling),t===null))return null;return t}function lc(t){return t.data==="$?"||t.data==="$~"}function rc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Wp(t,a){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||e.readyState!=="loading")a();else{var i=function(){a(),e.removeEventListener("DOMContentLoaded",i)};e.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function va(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var oc=null;function af(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(a===0)return va(t.nextSibling);a--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||a++}t=t.nextSibling}return null}function ef(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(a===0)return t;a--}else e!=="/$"&&e!=="/&"||a++}t=t.previousSibling}return null}function nf(t,a,e){switch(a=Ul(e),t){case"html":if(t=a.documentElement,!t)throw Error(g(452));return t;case"head":if(t=a.head,!t)throw Error(g(453));return t;case"body":if(t=a.body,!t)throw Error(g(454));return t;default:throw Error(g(451))}}function yn(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);cr(t)}var ya=new Map,lf=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ja=M.d;M.d={f:Fp,r:Ip,D:Pp,C:tg,L:ag,m:eg,X:ng,S:ig,M:lg};function Fp(){var t=Ja.f(),a=jl();return t||a}function Ip(t){var a=Je(t);a!==null&&a.tag===5&&a.type==="form"?Ss(a):Ja.r(t)}var ji=typeof document>"u"?null:document;function rf(t,a,e){var i=ji;if(i&&typeof a=="string"&&a){var n=da(a);n='link[rel="'+t+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),lf.has(n)||(lf.add(n),t={rel:t,crossOrigin:e,href:a},i.querySelector(n)===null&&(a=i.createElement("link"),Yt(a,"link",t),Ot(a),i.head.appendChild(a)))}}function Pp(t){Ja.D(t),rf("dns-prefetch",t,null)}function tg(t,a){Ja.C(t,a),rf("preconnect",t,a)}function ag(t,a,e){Ja.L(t,a,e);var i=ji;if(i&&t&&a){var n='link[rel="preload"][as="'+da(a)+'"]';a==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+da(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+da(e.imageSizes)+'"]')):n+='[href="'+da(t)+'"]';var l=n;switch(a){case"style":l=Mi(t);break;case"script":l=ki(t)}ya.has(l)||(t=j({rel:"preload",href:a==="image"&&e&&e.imageSrcSet?void 0:t,as:a},e),ya.set(l,t),i.querySelector(n)!==null||a==="style"&&i.querySelector(xn(l))||a==="script"&&i.querySelector(Sn(l))||(a=i.createElement("link"),Yt(a,"link",t),Ot(a),i.head.appendChild(a)))}}function eg(t,a){Ja.m(t,a);var e=ji;if(e&&t){var i=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+da(i)+'"][href="'+da(t)+'"]',l=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=ki(t)}if(!ya.has(l)&&(t=j({rel:"modulepreload",href:t},a),ya.set(l,t),e.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Sn(l)))return}i=e.createElement("link"),Yt(i,"link",t),Ot(i),e.head.appendChild(i)}}}function ig(t,a,e){Ja.S(t,a,e);var i=ji;if(i&&t){var n=We(i).hoistableStyles,l=Mi(t);a=a||"default";var r=n.get(l);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(xn(l)))o.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":a},e),(e=ya.get(l))&&cc(t,e);var u=r=i.createElement("link");Ot(u),Yt(u,"link",t),u._p=new Promise(function(h,x){u.onload=h,u.onerror=x}),u.addEventListener("load",function(){o.loading|=1}),u.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Gl(r,a,i)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(l,r)}}}function ng(t,a){Ja.X(t,a);var e=ji;if(e&&t){var i=We(e).hoistableScripts,n=ki(t),l=i.get(n);l||(l=e.querySelector(Sn(n)),l||(t=j({src:t,async:!0},a),(a=ya.get(n))&&uc(t,a),l=e.createElement("script"),Ot(l),Yt(l,"link",t),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function lg(t,a){Ja.M(t,a);var e=ji;if(e&&t){var i=We(e).hoistableScripts,n=ki(t),l=i.get(n);l||(l=e.querySelector(Sn(n)),l||(t=j({src:t,async:!0,type:"module"},a),(a=ya.get(n))&&uc(t,a),l=e.createElement("script"),Ot(l),Yt(l,"link",t),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function of(t,a,e,i){var n=(n=Fa.current)?Nl(n):null;if(!n)throw Error(g(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(a=Mi(e.href),e=We(n).hoistableStyles,i=e.get(a),i||(i={type:"style",instance:null,count:0,state:null},e.set(a,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Mi(e.href);var l=We(n).hoistableStyles,r=l.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,r),(l=n.querySelector(xn(t)))&&!l._p&&(r.instance=l,r.state.loading=5),ya.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},ya.set(t,e),l||rg(n,t,e,r.state))),a&&i===null)throw Error(g(528,""));return r}if(a&&i!==null)throw Error(g(529,""));return null;case"script":return a=e.async,e=e.src,typeof e=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ki(e),e=We(n).hoistableScripts,i=e.get(a),i||(i={type:"script",instance:null,count:0,state:null},e.set(a,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,t))}}function Mi(t){return'href="'+da(t)+'"'}function xn(t){return'link[rel="stylesheet"]['+t+"]"}function cf(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function rg(t,a,e,i){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?i.loading=1:(a=t.createElement("link"),i.preload=a,a.addEventListener("load",function(){return i.loading|=1}),a.addEventListener("error",function(){return i.loading|=2}),Yt(a,"link",e),Ot(a),t.head.appendChild(a))}function ki(t){return'[src="'+da(t)+'"]'}function Sn(t){return"script[async]"+t}function uf(t,a,e){if(a.count++,a.instance===null)switch(a.type){case"style":var i=t.querySelector('style[data-href~="'+da(e.href)+'"]');if(i)return a.instance=i,Ot(i),i;var n=j({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Ot(i),Yt(i,"style",n),Gl(i,e.precedence,t),a.instance=i;case"stylesheet":n=Mi(e.href);var l=t.querySelector(xn(n));if(l)return a.state.loading|=4,a.instance=l,Ot(l),l;i=cf(e),(n=ya.get(n))&&cc(i,n),l=(t.ownerDocument||t).createElement("link"),Ot(l);var r=l;return r._p=new Promise(function(o,u){r.onload=o,r.onerror=u}),Yt(l,"link",i),a.state.loading|=4,Gl(l,e.precedence,t),a.instance=l;case"script":return l=ki(e.src),(n=t.querySelector(Sn(l)))?(a.instance=n,Ot(n),n):(i=e,(n=ya.get(l))&&(i=j({},e),uc(i,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ot(n),Yt(n,"link",i),t.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(g(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(i=a.instance,a.state.loading|=4,Gl(i,e.precedence,t));return a.instance}function Gl(t,a,e){for(var i=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,l=n,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===a)l=o;else if(l!==n)break}l?l.parentNode.insertBefore(t,l.nextSibling):(a=e.nodeType===9?e.head:e,a.insertBefore(t,a.firstChild))}function cc(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function uc(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var ql=null;function sf(t,a,e){if(ql===null){var i=new Map,n=ql=new Map;n.set(e,i)}else n=ql,i=n.get(e),i||(i=new Map,n.set(e,i));if(i.has(t))return i;for(i.set(t,null),e=e.getElementsByTagName(t),n=0;n<e.length;n++){var l=e[n];if(!(l[Ni]||l[Gt]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(a)||"";r=t+r;var o=i.get(r);o?o.push(l):i.set(r,[l])}}return i}function df(t,a,e){t=t.ownerDocument||t,t.head.insertBefore(e,a==="title"?t.querySelector("head > title"):null)}function og(t,a,e){if(e===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ff(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cg(t,a,e,i){if(e.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Mi(i.href),l=a.querySelector(xn(n));if(l){a=l._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=_l.bind(t),a.then(t,t)),e.state.loading|=4,e.instance=l,Ot(l);return}l=a.ownerDocument||a,i=cf(i),(n=ya.get(n))&&cc(i,n),l=l.createElement("link"),Ot(l);var r=l;r._p=new Promise(function(o,u){r.onload=o,r.onerror=u}),Yt(l,"link",i),e.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,a),(a=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=_l.bind(t),a.addEventListener("load",e),a.addEventListener("error",e))}}var sc=0;function ug(t,a){return t.stylesheets&&t.count===0&&Yl(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var i=setTimeout(function(){if(t.stylesheets&&Yl(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+a);0<t.imgBytes&&sc===0&&(sc=62500*Lp());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yl(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>sc?50:800)+a);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function _l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Rl=null;function Yl(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Rl=new Map,a.forEach(sg,t),Rl=null,_l.call(t))}function sg(t,a){if(!(a.state.loading&4)){var e=Rl.get(t);if(e)var i=e.get(null);else{e=new Map,Rl.set(t,e);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var r=n[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(e.set(r.dataset.precedence,r),i=r)}i&&e.set(null,i)}n=a.instance,r=n.getAttribute("data-precedence"),l=e.get(r)||i,l===i&&e.set(null,n),e.set(r,n),this.count++,i=_l.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),l?l.parentNode.insertBefore(n,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),a.state.loading|=4}}var zn={$$typeof:vt,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function dg(t,a,e,i,n,l,r,o,u){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.hiddenUpdates=nr(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function pf(t,a,e,i,n,l,r,o,u,h,x,T){return t=new dg(t,a,e,r,u,h,x,T,o),a=1,l===!0&&(a|=24),l=ea(3,null,null,a),t.current=l,l.stateNode=t,a=Xr(),a.refCount++,t.pooledCache=a,a.refCount++,l.memoizedState={element:i,isDehydrated:e,cache:a},$r(l),t}function gf(t){return t?(t=ri,t):ri}function mf(t,a,e,i,n,l){n=gf(n),i.context===null?i.context=n:i.pendingContext=n,i=re(a),i.payload={element:e},l=l===void 0?null:l,l!==null&&(i.callback=l),e=oe(t,i,a),e!==null&&(Wt(e,t,a),Pi(e,t,a))}function hf(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<a?e:a}}function dc(t,a){hf(t,a),(t=t.alternate)&&hf(t,a)}function bf(t){if(t.tag===13||t.tag===31){var a=Ce(t,67108864);a!==null&&Wt(a,t,67108864),dc(t,67108864)}}function vf(t){if(t.tag===13||t.tag===31){var a=oa();a=lr(a);var e=Ce(t,a);e!==null&&Wt(e,t,a),dc(t,a)}}var Xl=!0;function fg(t,a,e,i){var n=w.T;w.T=null;var l=M.p;try{M.p=2,fc(t,a,e,i)}finally{M.p=l,w.T=n}}function pg(t,a,e,i){var n=w.T;w.T=null;var l=M.p;try{M.p=8,fc(t,a,e,i)}finally{M.p=l,w.T=n}}function fc(t,a,e,i){if(Xl){var n=pc(i);if(n===null)Io(t,a,i,Ll,e),xf(t,i);else if(mg(n,t,a,e,i))i.stopPropagation();else if(xf(t,i),a&4&&-1<gg.indexOf(t)){for(;n!==null;){var l=Je(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Ee(l.pendingLanes);if(r!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var u=1<<31-ta(r);o.entanglements[1]|=u,r&=~u}Da(l),(P&6)===0&&(Al=It()+500,hn(0))}}break;case 31:case 13:o=Ce(l,2),o!==null&&Wt(o,l,2),jl(),dc(l,2)}if(l=pc(i),l===null&&Io(t,a,i,Ll,e),l===n)break;n=l}n!==null&&i.stopPropagation()}else Io(t,a,i,null,e)}}function pc(t){return t=gr(t),gc(t)}var Ll=null;function gc(t){if(Ll=null,t=Ke(t),t!==null){var a=D(t);if(a===null)t=null;else{var e=a.tag;if(e===13){if(t=B(a),t!==null)return t;t=null}else if(e===31){if(t=mt(a),t!==null)return t;t=null}else if(e===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Ll=t,null}function yf(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pf()){case Ec:return 2;case jc:return 8;case On:case t0:return 32;case Mc:return 268435456;default:return 32}default:return 32}}var mc=!1,ve=null,ye=null,xe=null,wn=new Map,Tn=new Map,Se=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xf(t,a){switch(t){case"focusin":case"focusout":ve=null;break;case"dragenter":case"dragleave":ye=null;break;case"mouseover":case"mouseout":xe=null;break;case"pointerover":case"pointerout":wn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(a.pointerId)}}function An(t,a,e,i,n,l){return t===null||t.nativeEvent!==l?(t={blockedOn:a,domEventName:e,eventSystemFlags:i,nativeEvent:l,targetContainers:[n]},a!==null&&(a=Je(a),a!==null&&bf(a)),t):(t.eventSystemFlags|=i,a=t.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),t)}function mg(t,a,e,i,n){switch(a){case"focusin":return ve=An(ve,t,a,e,i,n),!0;case"dragenter":return ye=An(ye,t,a,e,i,n),!0;case"mouseover":return xe=An(xe,t,a,e,i,n),!0;case"pointerover":var l=n.pointerId;return wn.set(l,An(wn.get(l)||null,t,a,e,i,n)),!0;case"gotpointercapture":return l=n.pointerId,Tn.set(l,An(Tn.get(l)||null,t,a,e,i,n)),!0}return!1}function Sf(t){var a=Ke(t.target);if(a!==null){var e=D(a);if(e!==null){if(a=e.tag,a===13){if(a=B(e),a!==null){t.blockedOn=a,Bc(t.priority,function(){vf(e)});return}}else if(a===31){if(a=mt(e),a!==null){t.blockedOn=a,Bc(t.priority,function(){vf(e)});return}}else if(a===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var e=pc(t.nativeEvent);if(e===null){e=t.nativeEvent;var i=new e.constructor(e.type,e);pr=i,e.target.dispatchEvent(i),pr=null}else return a=Je(e),a!==null&&bf(a),t.blockedOn=e,!1;a.shift()}return!0}function zf(t,a,e){Ql(t)&&e.delete(a)}function hg(){mc=!1,ve!==null&&Ql(ve)&&(ve=null),ye!==null&&Ql(ye)&&(ye=null),xe!==null&&Ql(xe)&&(xe=null),wn.forEach(zf),Tn.forEach(zf)}function Vl(t,a){t.blockedOn===a&&(t.blockedOn=null,mc||(mc=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,hg)))}var $l=null;function wf(t){$l!==t&&($l=t,f.unstable_scheduleCallback(f.unstable_NormalPriority,function(){$l===t&&($l=null);for(var a=0;a<t.length;a+=3){var e=t[a],i=t[a+1],n=t[a+2];if(typeof i!="function"){if(gc(i||e)===null)continue;break}var l=Je(e);l!==null&&(t.splice(a,3),a-=3,po(l,{pending:!0,data:n,method:e.method,action:i},i,n))}}))}function Di(t){function a(u){return Vl(u,t)}ve!==null&&Vl(ve,t),ye!==null&&Vl(ye,t),xe!==null&&Vl(xe,t),wn.forEach(a),Tn.forEach(a);for(var e=0;e<Se.length;e++){var i=Se[e];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Se.length&&(e=Se[0],e.blockedOn===null);)Sf(e),e.blockedOn===null&&Se.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(i=0;i<e.length;i+=3){var n=e[i],l=e[i+1],r=n[Qt]||null;if(typeof l=="function")r||wf(e);else if(r){var o=null;if(l&&l.hasAttribute("formAction")){if(n=l,r=l[Qt]||null)o=r.formAction;else if(gc(n)!==null)continue}else o=r.action;typeof o=="function"?e[i+1]=o:(e.splice(i,3),i-=3),wf(e)}}}function Tf(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),i||setTimeout(e,20)}function e(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(e,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function hc(t){this._internalRoot=t}Zl.prototype.render=hc.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(g(409));var e=a.current,i=oa();mf(e,i,t,a,null,null)},Zl.prototype.unmount=hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;mf(t.current,2,null,t,null,null),jl(),a[Ze]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var a=Hc();t={blockedOn:null,target:t,priority:a};for(var e=0;e<Se.length&&a!==0&&a<Se[e].priority;e++);Se.splice(e,0,t),e===0&&Sf(t)}};var Af=A.version;if(Af!=="19.2.1")throw Error(g(527,Af,"19.2.1"));M.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(g(188)):(t=Object.keys(t).join(","),Error(g(268,t)));return t=U(a),t=t!==null?L(t):null,t=t===null?null:t.stateNode,t};var bg={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Hi=Kl.inject(bg),Pt=Kl}catch{}}return En.createRoot=function(t,a){if(!E(t))throw Error(g(299));var e=!1,i="",n=Cs,l=Os,r=Hs;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError)),a=pf(t,1,!1,null,null,e,i,null,n,l,r,Tf),t[Ze]=a.current,Fo(t),new hc(a)},En.hydrateRoot=function(t,a,e){if(!E(t))throw Error(g(299));var i=!1,n="",l=Cs,r=Os,o=Hs,u=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.formState!==void 0&&(u=e.formState)),a=pf(t,1,!0,a,e??null,i,n,u,l,r,o,Tf),a.context=gf(null),e=a.current,i=oa(),i=lr(i),n=re(i),n.callback=null,oe(e,n,i),e=i,a.current.lanes=e,Ui(a,e),Da(a),t[Ze]=a.current,Fo(t),new Zl(a)},En.version="19.2.1",En}var Df;function Eg(){if(Df)return vc.exports;Df=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(A){console.error(A)}}return f(),vc.exports=Ag(),vc.exports}var jg=Eg();const Bt={blur:{primary:"40px",secondary:"24px",subtle:"12px",heavy:"60px"},saturation:{normal:"180%"},radius:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2xl":"24px",full:"9999px"},timing:{micro:"100ms",small:"200ms",medium:"300ms",large:"500ms"},easing:{standard:"cubic-bezier(0.4, 0, 0.2, 1)",emphasized:"cubic-bezier(0.0, 0, 0.2, 1)"}},ut={bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgTertiary:"#111111",bgCard:"rgba(255, 255, 255, 0.02)",textPrimary:"rgba(255, 255, 255, 0.87)",textSecondary:"rgba(255, 255, 255, 0.60)",textTertiary:"rgba(255, 255, 255, 0.38)",accent:"#2A9D8F",accentHover:"#3BB4A5",accentSubtle:"rgba(42, 157, 143, 0.15)",accentRgb:"42, 157, 143",blue:"#4361A5",blueRgb:"67, 97, 165",lightBlue:"#7BA7D9",cyan:"#3BB4B1",border:"rgba(255, 255, 255, 0.08)",borderHover:"rgba(255, 255, 255, 0.15)",gradient:"linear-gradient(135deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientHorizontal:"linear-gradient(90deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientSubtle:"linear-gradient(135deg, rgba(42, 157, 143, 0.15) 0%, rgba(67, 97, 165, 0.15) 100%)",glassBg:"rgba(255, 255, 255, 0.06)",glassBgHover:"rgba(255, 255, 255, 0.10)",glassBorder:"rgba(255, 255, 255, 0.10)",glassHighlight:"rgba(255, 255, 255, 0.15)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.32)",specularHighlight:"rgba(255, 255, 255, 0.25)"},st={bgPrimary:"#ffffff",bgSecondary:"#f5f5f7",bgTertiary:"#e8e8ed",bgCard:"rgba(0, 0, 0, 0.02)",textPrimary:"rgba(0, 0, 0, 0.87)",textSecondary:"rgba(0, 0, 0, 0.60)",textTertiary:"rgba(0, 0, 0, 0.38)",accent:"#238076",accentHover:"#1a6b63",accentSubtle:"rgba(42, 157, 143, 0.12)",accentRgb:"35, 128, 118",blue:"#3a5491",blueRgb:"58, 84, 145",lightBlue:"#5a8cc7",cyan:"#2f9d9a",border:"rgba(0, 0, 0, 0.06)",borderHover:"rgba(0, 0, 0, 0.12)",gradient:"linear-gradient(135deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientHorizontal:"linear-gradient(90deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientSubtle:"linear-gradient(135deg, rgba(42, 157, 143, 0.1) 0%, rgba(67, 97, 165, 0.1) 100%)",glassBg:"rgba(255, 255, 255, 0.72)",glassBgHover:"rgba(255, 255, 255, 0.85)",glassBorder:"rgba(0, 0, 0, 0.08)",glassHighlight:"rgba(255, 255, 255, 0.9)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.08)",specularHighlight:"rgba(255, 255, 255, 0.8)"},Mg={fontWeight:{regular:400,medium:500,semibold:600,bold:700}},z={typography:Mg,breakpoints:{mobile:"640px",tablet:"1024px",desktop:"1280px"},zIndex:{sticky:100},maxWidth:{wide:"1200px",full:"1440px"}},kg=zg`
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
    --glass-blur: ${Bt.blur.primary};
    --glass-blur-secondary: ${Bt.blur.secondary};
    --glass-blur-subtle: ${Bt.blur.subtle};
    --glass-blur-heavy: ${Bt.blur.heavy};
    --glass-saturation: ${Bt.saturation.normal};
    
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
    --timing-micro: ${Bt.timing.micro};
    --timing-small: ${Bt.timing.small};
    --timing-medium: ${Bt.timing.medium};
    --timing-large: ${Bt.timing.large};
    --ease-standard: ${Bt.easing.standard};
    --ease-emphasized: ${Bt.easing.emphasized};
    
    /* Border Radius */
    --radius-xs: ${Bt.radius.xs};
    --radius-sm: ${Bt.radius.sm};
    --radius-md: ${Bt.radius.md};
    --radius-lg: ${Bt.radius.lg};
    --radius-xl: ${Bt.radius.xl};
    --radius-2xl: ${Bt.radius["2xl"]};
    --radius-full: ${Bt.radius.full};
  }
  
  /* ============================================
     LIGHT MODE OVERRIDES
     ============================================ */
  
  [data-theme="light"] {
    --bg-primary: ${st.bgPrimary};
    --bg-secondary: ${st.bgSecondary};
    --bg-tertiary: ${st.bgTertiary};
    --bg-card: ${st.bgCard};
    
    --text-primary: ${st.textPrimary};
    --text-secondary: ${st.textSecondary};
    --text-tertiary: ${st.textTertiary};
    
    --accent: ${st.accent};
    --accent-hover: ${st.accentHover};
    --accent-subtle: ${st.accentSubtle};
    --accent-rgb: ${st.accentRgb};
    
    --blue: ${st.blue};
    --blue-rgb: ${st.blueRgb};
    --cyan: ${st.cyan};
    --light-blue: ${st.lightBlue};
    
    --border: ${st.border};
    --border-hover: ${st.borderHover};
    
    --gradient: ${st.gradient};
    --gradient-horizontal: ${st.gradientHorizontal};
    --gradient-subtle: ${st.gradientSubtle};
    
    /* Liquid Glass - Light Mode */
    --glass-bg: ${st.glassBg};
    --glass-bg-hover: ${st.glassBgHover};
    --glass-border: ${st.glassBorder};
    --glass-highlight: ${st.glassHighlight};
    --glass-shadow: ${st.glassShadow};
    --specular-highlight: ${st.specularHighlight};
    
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
`,Rf=q.createContext(void 0),wc="portfolio-theme-mode",Dg=()=>{if(typeof window<"u"){const f=localStorage.getItem(wc),A=window.matchMedia("(prefers-color-scheme: dark)").matches;if(console.log("[ThemeContext] Saved:",f,"| System prefers dark:",A),f==="dark"||f==="light")return console.log("[ThemeContext] Using saved preference:",f),f;const C=A?"dark":"light";return console.log("[ThemeContext] Using system preference:",C),C}return"dark"},Cg=({children:f})=>{const[A,C]=q.useState(Dg),[g,E]=q.useState(()=>{if(typeof window<"u"){const B=localStorage.getItem(wc);return B==="dark"||B==="light"}return!1});q.useEffect(()=>{document.documentElement.setAttribute("data-theme",A)},[A]),q.useEffect(()=>{g&&localStorage.setItem(wc,A)},[A,g]);const D=()=>{E(!0),C(B=>B==="dark"?"light":"dark")};return c.jsx(Rf.Provider,{value:{mode:A,toggleTheme:D,isDark:A==="dark"},children:f})},Og=()=>{const f=q.useContext(Rf);if(!f)throw new Error("useTheme must be used within a ThemeProvider");return f},Yf=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Hg=d.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${z.zIndex.sticky};
  max-width: calc(100vw - 48px);
  width: max-content;
  
  @media (max-width: ${z.breakpoints.tablet}) {
    top: auto;
    bottom: 24px;
    max-width: calc(100vw - 48px);
  }
  
  @media (max-width: 480px) {
    bottom: 16px;
    max-width: calc(100vw - 32px);
  }
`,Bg=d(v.nav)`
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
  
  @media (max-width: ${z.breakpoints.tablet}) {
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
`,Ug=d(v.a)`
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
  
  @media (max-width: ${z.breakpoints.tablet}) {
    width: 38px;
    height: 38px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;
  }
`,Ng=d.img`
  height: 28px;
  width: auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${z.breakpoints.tablet}) {
    height: 24px;
  }
  
  @media (max-width: 480px) {
    height: 20px;
  }
`,Gg=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  
  @media (max-width: ${z.breakpoints.tablet}) {
    gap: 1px;
  }
  
  @media (max-width: 480px) {
    gap: 0;
  }
`,qg=d(v.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  font-size: 13px;
  font-weight: ${z.typography.fontWeight.medium};
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 14px;
  transition: color 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  flex-shrink: 0;
  
  ${({$isActive:f})=>f&&ct`
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
  
  @media (max-width: ${z.breakpoints.tablet}) {
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
`,_g=d(v.div)`
  position: absolute;
  inset: 2px;
  border-radius: 12px;
  z-index: -1;
  background: rgba(42, 157, 143, 0.15);
  box-shadow: 0 0 12px -4px rgba(42, 157, 143, 0.3);
  
  @media (max-width: ${z.breakpoints.tablet}) {
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    border-radius: 6px;
  }
`,Rg=d.div`
  position: relative;
`,Yg=d(v.button)`
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
  
  @media (max-width: ${z.breakpoints.tablet}) {
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
`,Xg=rt`
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
`,Lg=d(v.div)`
  position: absolute;
  inset: -4px;
  border-radius: 20px;
  border: 2px solid var(--accent);
  pointer-events: none;
  animation: ${Xg} 2s ease-in-out infinite;
  box-shadow: 0 0 20px rgba(42, 157, 143, 0.4),
              inset 0 0 10px rgba(42, 157, 143, 0.1);
  
  @media (max-width: ${z.breakpoints.tablet}) {
    inset: -3px;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    inset: -3px;
    border-radius: 13px;
  }
`,Qg=d.div`
  position: absolute;
  top: -6px;
  right: 18px;
  width: 12px;
  height: 12px;
  background: ${({$isDark:f})=>f?"rgba(20, 25, 35, 0.98)":"rgba(255, 255, 255, 0.98)"};
  border-left: 1px solid var(--accent);
  border-top: 1px solid var(--accent);
  transform: rotate(45deg);
  
  @media (max-width: ${z.breakpoints.tablet}) {
    top: auto;
    bottom: -6px;
    transform: rotate(225deg);
  }
`,Vg=d(v.div)`
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
  
  @media (max-width: ${z.breakpoints.tablet}) {
    top: auto;
    bottom: calc(100% + 12px);
    right: -8px;
  }
`,$g=d.span`
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
`,Zg=d.span`
  display: block;
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,Cf=[{label:"About",href:"#about"},{label:"Skills",href:"#technologyproficiency"},{label:"Experience",href:"#professionalexperience"},{label:"Projects",href:"#mostproudof"},{label:"Contact",href:"#contact"}],Sc="portfolio-theme-hint-seen",Kg=()=>{const[f,A]=q.useState(""),[C,g]=q.useState(!1),{isDark:E,toggleTheme:D}=Og();q.useEffect(()=>{if(!localStorage.getItem(Sc)){const L=setTimeout(()=>{g(!0)},1500);return()=>clearTimeout(L)}},[]),q.useEffect(()=>{if(C){const U=setTimeout(()=>{g(!1),localStorage.setItem(Sc,"true")},8e3);return()=>clearTimeout(U)}},[C]);const B=()=>{D(),C&&(g(!1),localStorage.setItem(Sc,"true"))};q.useEffect(()=>{const U=()=>{const L=Cf.map(X=>X.href.replace("#",""));if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-100){A(L[L.length-1]);return}for(const X of[...L].reverse()){const Ut=document.getElementById(X);if(Ut&&Ut.getBoundingClientRect().top<=150){A(X);return}}A("")};return window.addEventListener("scroll",U,{passive:!0}),()=>window.removeEventListener("scroll",U)},[]);const mt=U=>{const L=U.currentTarget.getBoundingClientRect(),j=(U.clientX-L.left)/L.width*100,X=(U.clientY-L.top)/L.height*100;U.currentTarget.style.setProperty("--mouse-x",`${j}%`),U.currentTarget.style.setProperty("--mouse-y",`${X}%`)},R=(U,L)=>{U.preventDefault();const j=document.getElementById(L);j&&j.scrollIntoView({behavior:"smooth",block:"start"})};return c.jsx(Hg,{children:c.jsxs(Bg,{"aria-label":"Main navigation",initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:[.25,.1,.25,1],delay:.2},children:[c.jsx(Ug,{href:"#home",onClick:U=>R(U,"home"),whileHover:{scale:1.05},whileTap:{scale:.95},children:c.jsxs("picture",{children:[c.jsx("source",{srcSet:"/images/logo-100.webp",type:"image/webp"}),c.jsx(Ng,{src:"/images/logo-optimized.png",alt:"PN",width:28,height:28,loading:"eager",decoding:"async"})]})}),c.jsx(Gg,{children:Cf.map(U=>{const L=f===U.href.replace("#","");return c.jsxs(qg,{href:U.href,$isActive:L,"aria-current":L?"page":void 0,onClick:j=>R(j,U.href.replace("#","")),onMouseMove:mt,whileHover:{scale:1.02},whileTap:{scale:.98},children:[c.jsx(we,{children:L&&c.jsx(_g,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15,ease:"easeOut"}},U.label)}),c.jsx("span",{style:{position:"relative",zIndex:1},children:U.label})]},U.label)})}),c.jsxs(Rg,{children:[c.jsx(we,{children:C&&c.jsxs(c.Fragment,{children:[c.jsx(Lg,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3}}),c.jsxs(Vg,{$isDark:E,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3,delay:.1},children:[c.jsx(Qg,{$isDark:E}),c.jsxs($g,{children:[c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"}),c.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),"Toggle Theme"]}),c.jsx(Zg,{children:"Click to switch between light & dark"})]})]})}),c.jsx(Yg,{onClick:B,whileHover:{scale:1.05},whileTap:{scale:.95},title:E?"Switch to light mode":"Switch to dark mode","aria-label":E?"Switch to light mode":"Switch to dark mode",role:"button",children:c.jsx(we,{mode:"wait",children:E?c.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.3},children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"sunGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),c.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),c.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),c.jsx("circle",{cx:"12",cy:"12",r:"5",stroke:"url(#sunGradient)"}),c.jsx("path",{stroke:"url(#sunGradient)",d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]},"sun"):c.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.3},children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"moonGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),c.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),c.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),c.jsx("path",{stroke:"url(#moonGradient)",d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})]},"moon")})})]})]})})},Jg="2.0.5",Xf=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Wg=rt`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`,Fg=d(v.footer)`
  padding: 48px 24px;
  padding-bottom: 100px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 56px 80px;
    padding-bottom: 56px;
  }
`,Ig=d.div`
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
  
  @media (min-width: ${z.breakpoints.tablet}) {
    width: 140px;
  }
`,Pg=d(v.div)`
  max-width: ${z.maxWidth.wide};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,tm=d(v.p)`
  font-size: 13px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
  letter-spacing: 0.01em;
  line-height: 1.6;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    font-size: 14px;
  }
`,am=d(v.span)`
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
`,em=d.span`
  color: #ef4444;
  font-size: 13px;
  display: inline-block;
  animation: ${Wg} 1.8s ease-in-out infinite;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    font-size: 14px;
  }
`,im=d.span`
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Xf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${z.typography.fontWeight.semibold};
`,nm=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    margin-top: 24px;
  }
`,Of=d.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,lm=d(v.span)`
  font-size: 11px;
  font-weight: ${z.typography.fontWeight.medium};
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
  
  @media (min-width: ${z.breakpoints.tablet}) {
    font-size: 11px;
  }
`,rm=()=>c.jsxs(Fg,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:[c.jsx(Ig,{}),c.jsxs(Pg,{children:[c.jsxs(tm,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:["Designed & Built With",c.jsx(am,{whileHover:{scale:1.2},transition:{type:"spring",stiffness:400,damping:15},children:c.jsx(em,{children:"♥"})}),"By ",c.jsx(im,{children:"Pranshu"})," • © 2025"]}),c.jsxs(nm,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2,duration:.5},children:[c.jsx(Of,{}),c.jsxs(lm,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:400,damping:20},children:["v",Jg]}),c.jsx(Of,{})]})]})]}),om=rt`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`,cm=rt`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`,um=d(v.div)`
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
`,sm=d(v.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(42, 157, 143, 0.08) 0%,
    rgba(67, 97, 165, 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
`,dm=d(v.div)`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,fm=d(v.div)`
  position: absolute;
  width: ${({$size:f})=>f}px;
  height: ${({$size:f})=>f}px;
  border-radius: 50%;
  background: ${({$color:f})=>f};
  filter: blur(1px);
`,pm=d(v.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,gm=d(v.div)`
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    width: 180px;
    height: 180px;
  }
`,mm=d(v.div)`
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
`,hm=d(v.div)`
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
`,zc=d(v.div)`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px solid rgba(42, 157, 143, 0.3);
  animation: ${cm} 2s ease-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`,bm=d(v.img)`
  width: 90px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 25px rgba(42, 157, 143, 0.5));
  
  @media (min-width: ${z.breakpoints.tablet}) {
    width: 110px;
  }
`,vm=d(v.div)`
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
    animation: ${om} 2s ease-in-out infinite;
  }
`,ym={initial:{opacity:1},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2,ease:"easeOut"}}},xm={initial:{opacity:0,scale:1.5},animate:{opacity:1,scale:1,transition:{duration:1.5}},exit:{opacity:0,scale:.95,transition:{duration:.2}}},Sm={initial:{},animate:{},exit:{scale:.9,opacity:0,transition:{duration:.2,ease:"easeOut"}}},zm={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},wm={initial:{opacity:0,scale:0,rotate:-180},animate:{opacity:1,scale:1,rotate:0,transition:{type:"spring",stiffness:100,damping:15,delay:.2}}},Tm={initial:{opacity:0,scale:.3,rotateY:-90,filter:"blur(10px)"},animate:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:12,delay:.4}}},Am=({onComplete:f})=>{const[A,C]=q.useState("animate"),g=Array.from({length:20},(E,D)=>({id:D,x:Math.random()*100,y:Math.random()*100,size:Math.random()*4+2,color:D%3===0?"rgba(42, 157, 143, 0.4)":D%3===1?"rgba(59, 180, 177, 0.3)":"rgba(67, 97, 165, 0.3)",duration:Math.random()*3+2,delay:Math.random()*2}));return q.useEffect(()=>{const E=setTimeout(()=>{C("exit")},2200);return()=>clearTimeout(E)},[]),q.useEffect(()=>{A==="exit"&&f()},[A,f]),c.jsxs(um,{variants:ym,initial:"initial",animate:A,children:[c.jsx(sm,{variants:xm,initial:"initial",animate:A}),c.jsx(dm,{initial:{opacity:1},animate:{opacity:A==="exit"?0:1},transition:{duration:.2},children:g.map(E=>c.jsx(fm,{$size:E.size,$color:E.color,style:{left:`${E.x}%`,top:`${E.y}%`},initial:{opacity:0,scale:0},animate:{opacity:[0,.8,0],scale:[0,1,0],y:[0,-100]},transition:{duration:E.duration,delay:E.delay,repeat:1/0,repeatDelay:Math.random()*2}},E.id))}),c.jsx(pm,{variants:Sm,initial:"initial",animate:A,children:c.jsxs(gm,{children:[c.jsx(mm,{variants:zm,initial:"initial",animate:"animate"}),c.jsx(zc,{}),c.jsx(zc,{}),c.jsx(zc,{}),c.jsx(hm,{variants:wm,initial:"initial",animate:"animate"}),c.jsxs("picture",{children:[c.jsx("source",{srcSet:"/images/logo-optimized.webp",type:"image/webp"}),c.jsx(bm,{src:"/images/logo-optimized.png",alt:"PN",width:80,height:80,loading:"eager",decoding:"async",variants:Tm,initial:"initial",animate:"animate"})]}),c.jsx(vm,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:.5}})]})})]})},Em=d.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.4;
  
  @media (max-width: ${z.breakpoints.tablet}) {
    display: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Hf=[{r:42,g:157,b:143},{r:59,g:180,b:177},{r:67,g:97,b:165},{r:123,g:167,b:217}],jm=()=>{const f=q.useRef(null),A=q.useRef([]),C=q.useRef(0),g=q.useRef({x:window.innerWidth/2,y:window.innerHeight/2});return q.useEffect(()=>{const E=f.current;if(!E)return;const D=E.getContext("2d");if(!D)return;const B=()=>{const j=window.devicePixelRatio||1;E.width=window.innerWidth*j,E.height=window.innerHeight*j,E.style.width=`${window.innerWidth}px`,E.style.height=`${window.innerHeight}px`,D.scale(j,j)};B(),window.addEventListener("resize",B);const mt=4;A.current=[];for(let j=0;j<mt;j++)A.current.push({x:window.innerWidth/2,y:window.innerHeight/2,size:60+j*20,color:Hf[j%Hf.length],speed:.1-j*.015,offset:j*.4});let R=0;const U=()=>{R+=.016,D.clearRect(0,0,E.width,E.height);const j=A.current,X=g.current;for(let Ut=j.length-1;Ut>=0;Ut--){const J=j[Ut],Nt=Math.sin(R*1.5+J.offset*4)*15,ht=Math.cos(R*1.5+J.offset*4)*15;J.x+=(X.x+Nt-J.x)*J.speed,J.y+=(X.y+ht-J.y)*J.speed;const W=J.size+Math.sin(R*1.2+J.offset*2)*8,zt=D.createRadialGradient(J.x,J.y,0,J.x,J.y,W),{r:vt,g:Dt,b:Ft}=J.color;zt.addColorStop(0,`rgba(${vt}, ${Dt}, ${Ft}, 0.25)`),zt.addColorStop(.4,`rgba(${vt}, ${Dt}, ${Ft}, 0.1)`),zt.addColorStop(.7,`rgba(${vt}, ${Dt}, ${Ft}, 0.03)`),zt.addColorStop(1,`rgba(${vt}, ${Dt}, ${Ft}, 0)`),D.beginPath(),D.arc(J.x,J.y,W,0,Math.PI*2),D.fillStyle=zt,D.fill()}C.current=requestAnimationFrame(U)},L=j=>{g.current={x:j.clientX,y:j.clientY}};return window.addEventListener("mousemove",L),C.current=requestAnimationFrame(U),()=>{window.removeEventListener("resize",B),window.removeEventListener("mousemove",L),cancelAnimationFrame(C.current)}},[]),c.jsx(Em,{ref:f})},Mm=rt`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,km=rt`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(3deg);
  }
`,Dm=rt`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`,Lf=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Cm=d.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 24px 40px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  overflow: hidden;
  position: relative;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 80px 48px 60px;
  }
  
  @media (min-width: ${z.breakpoints.desktop}) {
    padding: 100px 48px 60px;
  }
`,Om=d(v.div)`
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
`,Hm=d.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,Bm=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    grid-template-columns: 1fr 400px;
    gap: 64px;
  }
  
  @media (min-width: ${z.breakpoints.desktop}) {
    grid-template-columns: 1fr 480px;
    gap: 80px;
  }
`,Um=d.div`
  perspective: 1000px;
`,Nm=d(v.div)`
  display: flex;
  justify-content: center;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`,Gm=d(v.div)`
  position: relative;
  width: 280px;
  height: 280px;
  
  @media (min-width: ${z.breakpoints.mobile}) {
    width: 340px;
    height: 340px;
  }
  
  @media (min-width: ${z.breakpoints.tablet}) {
    width: 380px;
    height: 380px;
  }
  
  @media (min-width: ${z.breakpoints.desktop}) {
    width: 440px;
    height: 440px;
  }
`,qm=d(v.div)`
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
`,_m=d.picture`
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
`,Rm=d.div`
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
    animation: ${Mm} 6s linear infinite;
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
  animation: ${km} 5s ease-in-out infinite;
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
  
  @media (max-width: ${z.breakpoints.tablet}) {
    display: none;
  }
`,Ym=d(v.div)`
  position: absolute;
  inset: -60px;
  background: radial-gradient(
    ellipse at center,
    rgba(var(--accent-rgb), 0.2) 0%,
    rgba(var(--blue-rgb), 0.12) 35%,
    transparent 65%
  );
  z-index: -3;
  animation: ${Dm} 3s ease-in-out infinite;
  filter: blur(30px);
  will-change: transform, opacity;
`,Xm=d(v.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;
`,Lm=d(v.span)`
  width: 40px;
  height: 2px;
  background: var(--gradient-horizontal);
  border-radius: var(--radius-full);
  transform-origin: left;
`,Qm=d(v.span)`
  font-size: 13px;
  font-weight: ${z.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Lf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,Vm=d(v.div)`
  overflow: hidden;
  margin-bottom: 24px;
`,$m=d(v.h1)`
  font-size: clamp(52px, 9vw, 96px);
  font-weight: ${z.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.04em;
  line-height: 0.92;
  transition: color var(--timing-medium) var(--ease-standard);
  will-change: transform;
`,Zm=d(v.span)`
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
`,Km=d(v.p)`
  font-size: clamp(17px, 2.2vw, 22px);
  font-weight: ${z.typography.fontWeight.regular};
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 20px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Jm=d(v.p)`
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--text-tertiary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color var(--timing-medium) var(--ease-standard);
  max-width: 680px;
`,Wm=d(v.div)`
  display: flex;
  gap: 14px;
  flex-wrap: nowrap;
  margin-bottom: 56px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`,Fm=d(v.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--text-primary);
  color: var(--bg-primary);
  font-size: 15px;
  font-weight: ${z.typography.fontWeight.medium};
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
`,Im=d(v.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--gradient);
  background-size: 200% 200%;
  color: white;
  font-size: 15px;
  font-weight: ${z.typography.fontWeight.medium};
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
    animation: ${Lf} 3s ease infinite;
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
`,Pm=d(v.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 40px 0;
  margin-top: 8px;
  border-top: 1px solid var(--border);
  transition: border-color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${z.breakpoints.mobile}) {
    gap: 32px;
  }
  
  @media (min-width: ${z.breakpoints.tablet}) {
    gap: 48px;
  }
`,th=d(v.div)`
  text-align: center;
  
  @media (min-width: ${z.breakpoints.mobile}) {
    text-align: left;
  }
`,ah=d(v.span)`
  display: block;
  font-size: clamp(26px, 5.5vw, 44px);
  font-weight: ${z.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 10px;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${z.breakpoints.mobile}) {
    font-size: clamp(30px, 4.5vw, 44px);
    margin-bottom: 12px;
  }
`,eh=d.span`
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-transform: uppercase;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${z.breakpoints.mobile}) {
    font-size: 12px;
  }
`,ih={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},Wl={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,mass:1}}},nh={hidden:{opacity:0,y:80,rotateX:-20},visible:{opacity:1,y:0,rotateX:0,transition:{type:"spring",stiffness:80,damping:20,mass:1.2}}},lh={hidden:{opacity:0,scale:.85,rotateY:-15,filter:"blur(15px)"},visible:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:60,damping:20,mass:1.5,delay:.3}}},rh={hidden:{scaleX:0},visible:{scaleX:1,transition:{type:"spring",stiffness:100,damping:20,delay:.1}}},oh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.6}}},ch={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:150,damping:20}}},uh=({data:f})=>{const A=q.useRef(null),{scrollYProgress:C}=yg({target:A,offset:["start start","end start"]}),g=bc(C,[0,1],["0%","30%"]),E=bc(C,[0,.5],[1,.9]),D=bc(C,[0,.5],[1,.6]),B=Ef(g,{stiffness:100,damping:30}),mt=Ef(E,{stiffness:100,damping:30}),R=[{value:"10+",label:"Years"},{value:"65+",label:"Engineers Steered"},{value:"$2M+",label:"Savings"},{value:"15+",label:"Products"}];return c.jsxs(Cm,{id:"home",ref:A,children:[c.jsx(Om,{style:{y:B}}),c.jsx(Hm,{children:c.jsxs(Bm,{children:[c.jsx(Um,{children:c.jsxs(v.div,{variants:ih,initial:"hidden",animate:"visible",children:[c.jsxs(Xm,{variants:Wl,children:[c.jsx(Lm,{variants:rh}),c.jsx(Qm,{children:"Engineering Leader & Architect"})]}),c.jsx(Vm,{children:c.jsxs($m,{variants:nh,children:[c.jsx(Zm,{children:f.name.split(" ")[0]}),c.jsx("br",{}),f.name.split(" ").slice(1).join(" ")]})}),c.jsx(Km,{variants:Wl,children:f.designation}),c.jsx(Jm,{variants:Wl,children:f.headline}),c.jsxs(Wm,{variants:Wl,children:[c.jsxs(Fm,{href:"#contact",onClick:U=>{U.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[c.jsx("span",{children:"Get in Touch"}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),c.jsxs(Im,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[c.jsx("span",{children:"Download Resume"}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c.jsx(Pm,{variants:oh,initial:"hidden",animate:"visible",children:R.map((U,L)=>c.jsxs(th,{variants:ch,children:[c.jsx(ah,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:100,damping:15,delay:.7+L*.1},children:U.value}),c.jsx(eh,{children:U.label})]},L))})]})}),c.jsx(Nm,{variants:lh,initial:"hidden",animate:"visible",style:{scale:mt,opacity:D},children:c.jsxs(Gm,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:200,damping:20},children:[c.jsx(Ym,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:.5}}),c.jsx(Jl,{$position:"top",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.6}}),c.jsx(Jl,{$position:"bottom",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.6}}),c.jsx(Jl,{$position:"left",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.9,duration:.6}}),c.jsx(Jl,{$position:"right",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:1.1,duration:.6}}),c.jsx(Rm,{}),c.jsx(qm,{whileHover:{scale:1.03},transition:{type:"spring",stiffness:300,damping:25},children:c.jsxs(_m,{children:[c.jsx("source",{srcSet:"/images/profile.webp",type:"image/webp"}),c.jsx("img",{src:"/images/IMG_0832.PNG",alt:`${f.name} - Engineering Leader & Architect`,width:560,height:560,loading:"eager",decoding:"async",fetchPriority:"high"})]})})]})})]})})]})};d.div`
  width: 100%;
  max-width: ${({$wide:f})=>f?z.maxWidth.full:z.maxWidth.wide};
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${z.breakpoints.mobile}) {
    padding: 0 32px;
  }

  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 0 48px;
  }
`;const Qf=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,sh=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,dh=d(v.div)`
  margin-bottom: 64px;
  position: relative;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    margin-bottom: 88px;
  }
`,fh=d.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    gap: 32px;
  }
`,ph=d(v.div)`
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
    animation: ${sh} 1.5s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  @media (min-width: ${z.breakpoints.tablet}) {
    width: 52px;
    height: 52px;
    border-radius: var(--radius-xl);
  }
`,gh=d.span`
  font-size: 14px;
  font-weight: ${z.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Qf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-variant-numeric: tabular-nums;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    font-size: 16px;
  }
`,mh=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,hh=d(v.span)`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-tertiary);
  font-weight: ${z.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${z.breakpoints.tablet}) {
    font-size: 12px;
    letter-spacing: 0.18em;
  }
`,bh=d(v.h2)`
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: ${z.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.1;
  transition: color var(--timing-medium) var(--ease-standard);
  margin: 0;
`,vh=d(v.div)`
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 2px;
  width: 60px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${Qf} 3s ease infinite;
  border-radius: var(--radius-full);
  transform-origin: left;
  
  /* Glass glow effect */
  box-shadow: 0 0 12px -2px rgba(var(--accent-rgb), 0.4);
  
  @media (min-width: ${z.breakpoints.tablet}) {
    width: 80px;
    bottom: -24px;
  }
`,yh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},xh={hidden:{opacity:0,scale:.8,filter:"blur(8px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:200,damping:20}}},Sh={hidden:{opacity:0,x:-10,filter:"blur(4px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:150,damping:20}}},zh={hidden:{opacity:0,y:20,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},wh={hidden:{scaleX:0,opacity:0},visible:{scaleX:1,opacity:1,transition:{duration:.6,ease:[.25,.1,.25,1],delay:.3}}},Th={About:"Who I Am",Skills:"Technical Expertise",Experience:"Career Journey",Projects:"Featured Work",Certifications:"Credentials",Testimonials:"What Others Say",Education:"Academic Background",Contact:"Get In Touch"},Te=({number:f,title:A,inView:C=!0})=>{const g=Th[A]||"Section";return c.jsxs(dh,{variants:yh,initial:"hidden",animate:C?"visible":"hidden",children:[c.jsxs(fh,{children:[c.jsx(ph,{variants:xh,whileHover:{scale:1.05},whileTap:{scale:.98},children:c.jsx(gh,{children:f})}),c.jsxs(mh,{children:[c.jsx(hh,{variants:Sh,children:g}),c.jsx(bh,{variants:zh,children:A})]})]}),c.jsx(vh,{variants:wh})]})},Ah=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Vf=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Eh=rt`
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
`,$f=ct`
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
    animation: ${Ah} 1.5s ease infinite;
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
    ${$f}
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
  
  @media (min-width: ${z.breakpoints.tablet}) {
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
  
  @media (min-width: ${z.breakpoints.tablet}) {
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
            animation: ${Vf} 3s ease infinite;
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
  ${$f}
  
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
  animation: ${Eh} 4s ease-in-out infinite;
  
  ${({$color:f="accent",$intensity:A="normal"})=>{const C=A==="subtle"?.15:A==="strong"?.35:.25;switch(f){case"blue":return ct`
          background: rgba(var(--blue-rgb), ${C});
        `;case"mixed":return ct`
          background: radial-gradient(
            ellipse,
            rgba(var(--accent-rgb), ${C}) 0%,
            rgba(var(--blue-rgb), ${C*.7}) 50%,
            transparent 70%
          );
        `;default:return ct`
          background: rgba(var(--accent-rgb), ${C});
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
    animation: ${Vf} 4s ease infinite;
  `}
`;const Zf=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,jh=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Mh=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,kh=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Dh=d(v.div)`
  margin-bottom: 48px;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    margin-bottom: 64px;
  }
`,Ch=d(v.div)`
  position: relative;
  padding-left: 36px;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding-left: 56px;
  }
`,Oh=d(v.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient);
  background-size: 100% 200%;
  animation: ${Zf} 3s ease infinite;
  border-radius: var(--radius-full);
  transform-origin: top;
  
  /* Liquid Glass glow */
  box-shadow: 0 0 16px -2px rgba(var(--accent-rgb), 0.4);
`,Hh=d(v.p)`
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: ${z.typography.fontWeight.regular};
  color: var(--text-primary);
  line-height: 1.6;
  letter-spacing: -0.01em;
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
`,Bh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 64px;
  }
`,Bf=d(v.div)``,Uf=d(v.h3)`
  font-size: 13px;
  font-weight: ${z.typography.fontWeight.semibold};
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
`,Nf=d(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.85;
  transition: color var(--timing-medium) var(--ease-standard);
`,Uh=d(v.div)`
  margin-bottom: 48px;
`,Nh=d(v.h3)`
  font-size: 13px;
  font-weight: ${z.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Gh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: ${z.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--glass-border);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-xl);
    overflow: hidden;
    transition: background-color var(--timing-medium) var(--ease-standard), 
                border-color var(--timing-medium) var(--ease-standard);
  }
`,qh=d(v.div)`
  position: relative;
  background: var(--bg-primary);
  padding: 36px;
  overflow: hidden;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: background-color var(--timing-medium) var(--ease-standard);
  
  /* Mobile: Individual glass cards */
  @media (max-width: ${z.breakpoints.mobile}) {
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
    animation: ${jh} 1.5s ease infinite;
  }
  
  @media (min-width: ${z.breakpoints.mobile}) {
    padding: 48px 36px;
  }
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 56px 44px;
  }
`,_h=d(v.h4)`
  font-size: 19px;
  font-weight: ${z.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 18px;
  line-height: 1.35;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
`,Rh=d(v.p)`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
`,Yh=d(v.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding-top: 56px;
  border-top: 1px solid var(--border);
  transition: border-color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${z.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,Xh=d(v.p)`
  font-size: 19px;
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${z.breakpoints.tablet}) {
    font-size: 21px;
  }
`,Lh=d(v.a)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: var(--gradient);
  background-size: 200% 200%;
  color: white;
  font-size: 15px;
  font-weight: ${z.typography.fontWeight.medium};
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
    animation: ${Zf} 3s ease infinite;
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
`,Qh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},Vh={hidden:{opacity:0,y:50,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:20,mass:1}}},$h={hidden:{scaleY:0},visible:{scaleY:1,transition:{type:"spring",stiffness:100,damping:20,delay:.2}}},Gf={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:f=>({opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,delay:f*.15}})},Zh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},Kh={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.4,ease:[.25,.46,.45,.94]}}},Jh=({data:f})=>{const A=q.useRef(null),C=xa(A,{once:!0,margin:"-100px"}),g=q.useRef(null),E=xa(g,{once:!0,margin:"-50px"}),D=q.useRef(null),B=xa(D,{once:!0,margin:"-50px"}),mt=q.useRef(null),R=xa(mt,{once:!0,margin:"-50px"}),U=f.content.slice(0,3).map(j=>j.replace(/^🔹\s*/,"").trim()),L=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}];return c.jsx(Mh,{id:"about",ref:A,children:c.jsxs(kh,{children:[c.jsx(Te,{number:"01",title:"About",inView:C}),c.jsx(Dh,{ref:g,children:c.jsxs(Ch,{initial:"hidden",animate:E?"visible":"hidden",variants:Qh,children:[c.jsx(Oh,{variants:$h}),c.jsx(Hh,{variants:Vh,children:U[0]})]})}),c.jsxs(Bh,{ref:D,children:[c.jsxs(Bf,{variants:Gf,custom:0,initial:"hidden",animate:B?"visible":"hidden",children:[c.jsx(Uf,{initial:{opacity:0,x:-20},animate:B?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Transformation"}),c.jsx(Nf,{initial:{opacity:0,y:20},animate:B?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:U[1]})]}),c.jsxs(Bf,{variants:Gf,custom:1,initial:"hidden",animate:B?"visible":"hidden",children:[c.jsx(Uf,{initial:{opacity:0,x:-20},animate:B?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.15},children:"Philosophy"}),c.jsx(Nf,{initial:{opacity:0,y:20},animate:B?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.25},children:U[2]})]})]}),c.jsxs(Uh,{ref:mt,children:[c.jsx(Nh,{initial:{opacity:0,y:20},animate:R?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Key Highlights"}),c.jsx(Gh,{variants:Zh,initial:"hidden",animate:R?"visible":"hidden",children:L.map((j,X)=>c.jsxs(qh,{variants:Kh,children:[c.jsx(_h,{children:j.title}),c.jsx(Rh,{children:j.text})]},X))})]}),c.jsxs(Yh,{initial:{opacity:0,y:30},animate:C?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[c.jsx(Xh,{children:"Want to know more?"}),c.jsxs(Lh,{href:f.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[c.jsx("span",{children:f.buttonProps.name}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]})})},Wh=rt`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,Fh=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Ih=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Ph=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,tb=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  
  @media (min-width: ${z.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 72px;
  }
  
  @media (min-width: ${z.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 56px 88px;
  }
`,ab=d(v.div)``,eb=d(v.h3)`
  font-size: 13px;
  font-weight: ${z.typography.fontWeight.semibold};
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
`,ib=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,nb=d(v.li)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,lb=d(v.div)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,rb=d(v.span)`
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
`,ob=d(v.span)`
  font-size: 13px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  font-weight: ${z.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
`,cb=d(v.div)`
  width: 100%;
  height: 4px;
  background: var(--glass-border);
  border-radius: var(--radius-full);
  overflow: hidden;
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  /* Subtle inner shadow for depth */
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`,ub=d.div`
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
    animation: ${Fh} 2s ease infinite;
    animation-delay: ${f=>f.$delay+.6}s;
  }
  
  ${f=>f.$animate&&ct`
    animation: ${Wh} 0.6s cubic-bezier(0.33, 1, 0.68, 1) forwards;
    animation-delay: ${f.$delay}s;
  `}
`,sb=({category:f})=>{const A=q.useRef(null),C=xa(A,{once:!0,margin:"-50px"});return c.jsxs(ab,{ref:A,initial:{opacity:0,y:30,filter:"blur(4px)"},animate:C?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:30,filter:"blur(4px)"},transition:{type:"spring",stiffness:100,damping:20},children:[c.jsx(eb,{children:f.category}),c.jsx(ib,{children:f.skills.map((g,E)=>c.jsxs(nb,{initial:{opacity:0,x:-20},animate:C?{opacity:1,x:0}:{opacity:0,x:-20},transition:{type:"spring",stiffness:100,damping:20,delay:E*.05},whileHover:{x:8,transition:{type:"spring",stiffness:400,damping:25}},children:[c.jsxs(lb,{children:[c.jsx(rb,{children:g.name}),c.jsxs(ob,{children:[g.percentage,"%"]})]}),c.jsx(cb,{children:c.jsx(ub,{$percentage:g.percentage,$delay:.1+E*.06,$animate:C})})]},g.name))})]})},db=({data:f})=>{const A=q.useRef(null),C=xa(A,{once:!0,margin:"-100px"});return c.jsx(Ih,{id:"technologyproficiency",ref:A,children:c.jsxs(Ph,{children:[c.jsx(Te,{number:"02",title:"Skills",inView:C}),c.jsx(tb,{children:f.skills.map(g=>c.jsx(sb,{category:g},g.category))})]})})},fb=rt`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0);
  }
  50% {
    box-shadow: 0 0 20px 5px rgba(var(--accent-rgb), 0.15);
  }
`,pb=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,gb=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,mb=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,hb=d(v.div)``,bb=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  transition: border-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  @media (min-width: ${z.breakpoints.tablet}) {
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
  
  @media (min-width: ${z.breakpoints.tablet}) {
    &::before {
      left: -48px;
    }
  }
`,vb=d(v.div)``,yb=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color var(--timing-medium) var(--ease-standard);
`,xb=d(v.div)``,Sb=d(v.div)``,zb=d(v.h3)`
  font-size: 22px;
  font-weight: ${z.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin-bottom: 4px;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${z.breakpoints.tablet}) {
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
`,wb=d(v.button)`
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
    animation: ${fb} 2s ease-in-out infinite;
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
    animation: ${pb} 1.5s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,Tb=d(v.span)`
  font-size: 12px;
  font-weight: ${z.typography.fontWeight.medium};
  color: ${({$isOpen:f})=>f?"var(--bg-primary)":"var(--text-secondary)"};
  white-space: nowrap;
  letter-spacing: 0.02em;
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
`,Ab=d(v.span)`
  display: inline-flex;
  align-items: center;
`,Eb=d(v.p)`
  font-size: 16px;
  color: var(--accent);
  font-weight: ${z.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
`,jb=d(v.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  flex-wrap: wrap;
`,Mb=d.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
  font-weight: ${z.typography.fontWeight.medium};
`,kb=d.span`
  font-size: 14px;
  color: var(--text-secondary);
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
`,Db=d(v.p)`
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
`,Cb=d(v.div)`
  overflow: hidden;
  will-change: height, opacity;
`,Ob=d(v.div)`
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  will-change: transform, opacity;
  transition: border-color var(--timing-medium) var(--ease-standard);
`,Hb=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Bb=d(v.li)`
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
`,Ub=d.span`
  font-weight: ${z.typography.fontWeight.semibold};
  color: var(--accent);
  transition: color var(--timing-medium) var(--ease-standard);
`,Nb=d.span`
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Gb={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35,mass:1},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},qb={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.08}}},_b={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.12}}},Rb={collapsed:{opacity:0,x:-15,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},Yb=({data:f})=>{const[A,C]=q.useState(new Set),g=q.useRef(null),E=xa(g,{once:!0,margin:"-100px"}),D=B=>{C(mt=>{const R=new Set(mt);return R.has(B)?R.delete(B):R.add(B),R})};return c.jsx(gb,{id:"professionalexperience",ref:g,children:c.jsxs(mb,{children:[c.jsx(Te,{number:"03",title:"Experience",inView:E}),c.jsx(hb,{children:f.timeline.map((B,mt)=>{const R=A.has(mt);return c.jsxs(bb,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:[c.jsx(vb,{children:c.jsx(yb,{children:B.date})}),c.jsxs(xb,{children:[c.jsxs(Sb,{children:[c.jsx(zb,{children:c.jsx("a",{href:B.url,target:"_blank",rel:"noopener noreferrer",children:B.title})}),c.jsx(Eb,{children:B.subTitle}),B.previously&&c.jsxs(jb,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.1},children:[c.jsx(Mb,{children:"Previously:"}),c.jsx(kb,{children:B.previously})]})]}),c.jsx(Db,{dangerouslySetInnerHTML:{__html:B.descriptionSummary}}),c.jsx(wb,{$isOpen:R,whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},onClick:()=>D(mt),"aria-expanded":R,"aria-label":R?"Show less":"Show more",children:c.jsxs(Tb,{$isOpen:R,children:["Show ",c.jsx(we,{mode:"wait",children:c.jsx(Ab,{initial:"hidden",animate:"visible",exit:"exit",children:(R?"Less":"More").split("").map((U,L)=>c.jsx(v.span,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:L*.05}},exit:{opacity:0,transition:{delay:(3-L)*.03}}},children:U},L))},R?"less":"more")})]})}),c.jsx(we,{initial:!1,children:R&&c.jsx(Cb,{variants:Gb,initial:"collapsed",animate:"expanded",exit:"collapsed",children:c.jsx(Ob,{variants:qb,children:c.jsx(Hb,{variants:_b,initial:"collapsed",animate:"expanded",exit:"collapsed",children:B.achievements?.map((U,L)=>c.jsxs(Bb,{variants:Rb,children:[c.jsx(Ub,{children:U.title}),": ",c.jsx(Nb,{children:U.description})]},L))})})},"content")})]})]},mt)})})]})})},Kf=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Xb=rt`
  0%, 100% {
    box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.2);
  }
`,Lb=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Qb=d.section`
  padding: 64px 24px;
  overflow: hidden;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Vb=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,$b=d(v.div)`
  position: relative;
`,Zb=d.div`
  position: relative;
  perspective: 1000px;
`,Kb=d(v.article)`
  border-radius: var(--radius-xl);
  will-change: transform, opacity;
  overflow: hidden;
  position: relative;
  animation: ${Xb} 4s ease-in-out infinite;
  
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
    animation: ${Kf} 4s ease infinite;
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
  
  @media (min-width: ${z.breakpoints.tablet}) {
    border-radius: var(--radius-2xl);
    
    &::before, &::after {
      border-radius: var(--radius-2xl);
    }
  }
`,Jb=d(v.div)`
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
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 32px 40px;
  }
`,Wb=d(v.h3)`
  font-size: 20px;
  font-weight: ${z.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.35;
  flex: 1;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    font-size: 24px;
  }
`,Fb=d(v.button)`
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
    animation: ${Lb} 1.5s ease infinite;
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
`,Ib=d(v.div)`
  overflow: hidden;
  will-change: height;
`,Pb=d(v.div)`
  padding: 0 32px 32px;
  border-top: 1px solid var(--glass-border);
  padding-top: 28px;
  transition: border-color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 0 40px 36px;
    padding-top: 32px;
  }
`,tv=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 36px;
  }
`,av=d(v.li)`
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
  
  @media (min-width: ${z.breakpoints.tablet}) {
    font-size: 16px;
  }
`,ev=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 48px;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    gap: 36px;
    margin-top: 56px;
  }
`,qf=d(v.button)`
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
`,iv=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,nv=d(v.button)`
  width: ${({$isActive:f})=>f?"36px":"12px"};
  height: 12px;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  background: ${({$isActive:f})=>f?"var(--gradient)":"var(--glass-border)"};
  background-size: 200% 200%;
  ${({$isActive:f})=>f&&ct`
    animation: ${Kf} 3s ease infinite;
  `}
  will-change: width, background;
  transition: background var(--timing-small) var(--ease-standard);
  
  &:hover {
    background: ${({$isActive:f})=>f?"var(--gradient)":"var(--text-tertiary)"};
  }
`,lv={enter:f=>({x:f>0?80:-80,opacity:0,scale:.98}),center:{x:0,opacity:1,scale:1,transition:{type:"spring",stiffness:500,damping:35,mass:.8}},exit:f=>({x:f<0?80:-80,opacity:0,scale:.98,transition:{type:"spring",stiffness:500,damping:35,mass:.8}})},rv={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},ov={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.1}}},cv={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.15}}},uv={collapsed:{opacity:0,x:-20,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},sv=({data:f})=>{const[[A,C],g]=q.useState([0,0]),[E,D]=q.useState(!1),[B,mt]=q.useState(!1),R=q.useRef(null),U=q.useRef(null),L=q.useRef(0),j=xa(R,{once:!0,margin:"-100px"}),X=q.useCallback(ht=>{if(B)return;const W=A+ht;W>=0&&W<f.content.length&&(mt(!0),g([W,ht]),D(!1),setTimeout(()=>mt(!1),350))},[A,f.content.length,B]),Ut=q.useCallback(ht=>{if(B||ht===A)return;const W=ht>A?1:-1;mt(!0),g([ht,W]),D(!1),setTimeout(()=>mt(!1),350)},[A,B]);q.useEffect(()=>{const ht=U.current;if(!ht)return;const W=zt=>{const vt=Date.now();if(vt-L.current<300)return;const Dt=Math.abs(zt.deltaX)>Math.abs(zt.deltaY)?zt.deltaX:zt.deltaY;if(Math.abs(Dt)>20){const ca=A<f.content.length-1,Sa=A>0;(Dt>0&&ca||Dt<0&&Sa)&&(zt.preventDefault(),zt.stopPropagation(),L.current=vt,Dt>0?X(1):X(-1))}};return ht.addEventListener("wheel",W,{passive:!1}),()=>ht.removeEventListener("wheel",W)},[A,f.content.length,X]);const J=q.useCallback((ht,W)=>{if(B)return;const zt=30,vt=200;W.velocity.x>vt||W.offset.x>zt?A>0&&X(-1):(W.velocity.x<-vt||W.offset.x<-zt)&&A<f.content.length-1&&X(1)},[A,f.content.length,B,X]),Nt=f.content[A];return c.jsx(Qb,{id:"mostproudof",ref:R,children:c.jsxs(Vb,{children:[c.jsx(Te,{number:"04",title:"Projects",inView:j}),c.jsxs($b,{initial:{opacity:0,y:40},animate:j?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:20,delay:.2},children:[c.jsx(Zb,{ref:U,children:c.jsx(we,{initial:!1,custom:C,mode:"wait",children:c.jsxs(Kb,{custom:C,variants:lv,initial:"enter",animate:"center",exit:"exit",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.1,dragMomentum:!1,onDragEnd:J,transition:{x:{type:"spring",stiffness:500,damping:35,mass:.8},opacity:{duration:.2},scale:{type:"spring",stiffness:500,damping:35,mass:.8}},style:{cursor:"grab",touchAction:"pan-y"},whileDrag:{cursor:"grabbing",scale:1.01},children:[c.jsxs(Jb,{$isExpanded:E,onClick:()=>D(!E),whileHover:{scale:1.01},transition:{type:"spring",stiffness:400,damping:25},children:[c.jsx(Wb,{children:Nt.title}),c.jsx(Fb,{$isExpanded:E,"aria-label":E?"Collapse project details":"Expand project details","aria-expanded":E,animate:{rotate:E?45:0,scale:E?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:c.jsx(v.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:c.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),c.jsx(we,{initial:!1,children:E&&c.jsx(Ib,{variants:rv,initial:"collapsed",animate:"expanded",exit:"collapsed",children:c.jsx(Pb,{variants:ov,children:c.jsx(tv,{variants:cv,initial:"collapsed",animate:"expanded",exit:"collapsed",children:Nt.content.map((ht,W)=>c.jsx(av,{variants:uv,children:ht},W))})})})})]},A)})}),c.jsxs(ev,{initial:{opacity:0,y:20},animate:j?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[c.jsx(qf,{onClick:()=>X(-1),disabled:A===0,"aria-label":"Previous project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:c.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),c.jsx(iv,{role:"tablist","aria-label":"Project navigation",children:f.content.map((ht,W)=>c.jsx(nv,{$isActive:A===W,onClick:()=>Ut(W),role:"tab","aria-selected":A===W,"aria-label":`Go to project ${W+1}: ${ht.title}`,whileHover:{scale:1.1},whileTap:{scale:.95},animate:{width:A===W?36:12},transition:{type:"spring",stiffness:400,damping:25}},W))}),c.jsx(qf,{onClick:()=>X(1),disabled:A===f.content.length-1,"aria-label":"Next project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]})]})})},dv=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,fv=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,pv=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,gv=d(v.div)`
  display: flex;
  flex-direction: column;
`,mv=d(v.div)`
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
  
  @media (min-width: ${z.breakpoints.tablet}) {
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
`,hv=d(v.div)`
  flex: 1;
`,bv=d(v.h3)`
  font-size: 18px;
  font-weight: ${z.typography.fontWeight.semibold};
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 6px;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${z.breakpoints.tablet}) {
    font-size: 20px;
  }
`,vv=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
`,yv=d(v.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: ${z.typography.fontWeight.medium};
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
    animation: ${dv} 1.5s ease infinite;
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
`,xv=({data:f})=>{const A=q.useRef(null),C=xa(A,{once:!0,margin:"-100px"}),g=E=>E.toLowerCase().includes("azure")||E.toLowerCase().includes("microsoft")?"Microsoft":E.toLowerCase().includes("aws")?"Amazon Web Services":"";return c.jsx(fv,{id:"certifications",ref:A,children:c.jsxs(pv,{children:[c.jsx(Te,{number:"05",title:"Certifications",inView:C}),c.jsx(gv,{children:f.certificateProps.certificateMetaData.map((E,D)=>c.jsxs(mv,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:D*.08},whileHover:{x:12,transition:{type:"spring",stiffness:400,damping:25}},children:[c.jsxs(hv,{children:[c.jsx(bv,{children:E.title}),c.jsx(vv,{children:g(E.title)})]}),c.jsxs(yv,{href:E.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[c.jsx("span",{children:"Verify"}),c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),c.jsx("polyline",{points:"15,3 21,3 21,9"}),c.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]},D))})]})})},Jf=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Sv=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,zv=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,wv=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }
`,Tv=d(v.blockquote)`
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
    animation: ${Jf} 3s ease infinite;
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
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 52px;
  }
`,Av=d(v.div)`
  font-size: 56px;
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Jf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 24px;
  font-weight: bold;
  position: relative;
  z-index: 1;
`,Ev=d(v.p)`
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 28px;
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    font-size: 18px;
  }
`,jv=d(v.footer)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  z-index: 1;
`,Mv=d(v.cite)`
  font-size: 16px;
  font-weight: ${z.typography.fontWeight.semibold};
  color: var(--text-primary);
  font-style: normal;
  transition: color var(--timing-medium) var(--ease-standard);
`,kv=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Dv=({data:f})=>{const A=q.useRef(null),C=xa(A,{once:!0,margin:"-100px"});return c.jsx(Sv,{id:"testimonials",ref:A,children:c.jsxs(zv,{children:[c.jsx(Te,{number:"06",title:"Testimonials",inView:C}),c.jsx(wv,{children:f.quoteProps.quoteMetaData.map((g,E)=>c.jsxs(Tv,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:E*.1},whileHover:{y:-8,scale:1.02,transition:{type:"spring",stiffness:300,damping:20}},children:[c.jsx(Av,{children:'"'}),c.jsx(Ev,{children:g.quote}),c.jsxs(jv,{children:[c.jsx(Mv,{children:g.givenBy}),c.jsx(kv,{children:g.subTitleGivenBy})]})]},E))})]})})},Cv=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Ov=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Hv=d(v.div)`
  display: flex;
  flex-direction: column;
`,Bv=d(v.div)`
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
  
  @media (min-width: ${z.breakpoints.tablet}) {
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
`,Uv=d(v.span)`
  font-size: 15px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color var(--timing-medium) var(--ease-standard);
  font-weight: ${z.typography.fontWeight.medium};
`,Nv=d(v.div)``,Gv=d(v.h3)`
  font-size: 20px;
  font-weight: ${z.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${z.breakpoints.tablet}) {
    font-size: 22px;
  }
`,qv=d(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
`,_v=({data:f})=>{const A=q.useRef(null),C=xa(A,{once:!0,margin:"-100px"});return c.jsx(Cv,{id:"educationalqualifications",ref:A,children:c.jsxs(Ov,{children:[c.jsx(Te,{number:"07",title:"Education",inView:C}),c.jsx(Hv,{children:f.timeline.map((g,E)=>c.jsxs(Bv,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:E*.1},whileHover:{x:16,transition:{type:"spring",stiffness:400,damping:25}},children:[c.jsx(Uv,{children:g.date}),c.jsxs(Nv,{children:[c.jsx(Gv,{children:g.title}),c.jsx(qv,{children:g.subTitle})]})]},E))})]})})},Rv=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Yv=rt`
  0%, 100% {
    box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.2);
  }
`,Xv=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Lv=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Qv=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 72px;
  
  @media (min-width: ${z.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`,Vv=d(v.div)``,$v=d(v.h3)`
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: ${z.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Zv=d(v.p)`
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Kv=d(v.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,Jv=d(v.a)`
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
    animation: ${Rv} 3s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,Wv=d(v.div)`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  animation: ${Yv} 4s ease-in-out infinite;
  
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
`,Fv=d(v.div)`
  position: relative;
  z-index: 1;
`,Iv=d(v.span)`
  display: block;
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Pv=d(v.span)`
  font-size: 17px;
  font-weight: ${z.typography.fontWeight.medium};
  color: var(--text-primary);
  transition: color var(--timing-medium) var(--ease-standard);
`,_f={mail:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[c.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),c.jsx("path",{d:"M22 6L12 13 2 6"})]}),email:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[c.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),c.jsx("path",{d:"M22 6L12 13 2 6"})]}),phone:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:c.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),linkedin:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[c.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),c.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),c.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),location:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[c.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),c.jsx("circle",{cx:"12",cy:"10",r:"3"})]})},t1=({data:f})=>{const A=q.useRef(null),C=xa(A,{once:!0,margin:"-100px"}),g=D=>_f[D.toLowerCase()]||_f.mail,E=D=>({mail:"Email",email:"Email",phone:"Phone",linkedin:"LinkedIn",location:"Location"})[D.toLowerCase()]||D;return c.jsx(Xv,{id:"contact",ref:A,children:c.jsxs(Lv,{children:[c.jsx(Te,{number:"08",title:"Contact",inView:C}),c.jsxs(Qv,{children:[c.jsxs(Vv,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:80,damping:18},children:[c.jsx($v,{children:"Let's work together"}),c.jsx(Zv,{children:"Have a project in mind or want to discuss opportunities? I'd love to hear from you."})]}),c.jsx(Kv,{children:f.contactMetaData.filter(D=>D.icon.toLowerCase()!=="phone").map((D,B)=>c.jsxs(Jv,{href:D.href,target:D.href.startsWith("http")?"_blank":void 0,rel:D.href.startsWith("http")?"noopener noreferrer":void 0,initial:{opacity:0,x:30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:18,delay:B*.1},whileHover:{x:12,scale:1.02,transition:{type:"spring",stiffness:400,damping:25}},whileTap:{scale:.98},children:[c.jsx(Wv,{whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:20},children:g(D.icon)}),c.jsxs(Fv,{children:[c.jsx(Iv,{children:E(D.icon)}),c.jsx(Pv,{children:D.content})]})]},B))})]})]})})},a1={sectionTitle:"About Me",content:["🔹  I specialize in crafting multi-tenant, event-driven, and Micro-Services architectures on Azure and AWS, enabling real-time intelligence at scale. My leadership has accelerated delivery velocity by 25% and nurtured high-performing teams of 65+ engineers across 5 Development and 1 Core Support Squad, distributed globally.","An expert in transforming monoliths into cloud-native Micro-Services, designing AI-driven orchestration platforms, and modernizing data pipelines using Spark, Databricks, and real-time analytics.","Passionate about balancing technical depth with business outcomes, aligning architecture roadmaps with OKRs, and embedding security and compliance (SOC2, InfoSec) across the SDLC.",`💡 Key Highlights: 
 ✅ Product & Project Expertise — Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT. 
 
 ✅ Technical Edge — Deep experience leading and mentoring global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, Docker/Kubernetes, and DevOps automation. 
 
 ✅ Business Outcomes — Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution.`],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},e1={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},i1={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},n1={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},l1={name:"Pranshu Nijhawan",designation:"Designing for Scale, Leading for Impact",headline:"Strategic Engineering Leader with 10+ years of experience architecting scalable SaaS platforms, leading global teams, and driving multimillion-dollar cost optimizations. Expert in cloud-native transformations, data-intensive systems, and multi-tenant architectures that enable real-time intelligence and business growth. Proven track record of reducing operational costs by $2M+, improving delivery velocity by 25%, and mentoring high-performing engineering teams.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},r1={sectionTitle:"Most Proud Of",content:[{id:1,title:"SearchSphere – Multi-Tenant Search Platform with RAG and Vectorization",content:["Designed and architected a fully configurable multi-tenant search platform using TypeScript, Node.js, and PostgreSQL.","Implemented vectorization and Retrieval Augmented Generation (RAG) to enable intelligent global and dimension-based search capabilities.","Enabled onboarding of new search dimensions dynamically via configuration, eliminating the need for code changes.","Successfully decommissioned Elasticsearch, achieving platform simplification and over $2 million in cost savings.","Built for high scalability, supporting tenant isolation and extensibility without compromising performance."]},{id:2,title:"Zero-Downtime ETL Platform – Scalable Blue/Green Data Processing at Scale",content:["Engineered a highly scalable and fault-tolerant ETL platform using Databricks, Spark, Azure Data Factory, and PostgreSQL.","Designed around a Blue/Green deployment strategy to ensure zero downtime during data ingestion and transformation cycles.","Processed 200+ million records across 100+ tables in under 15 minutes using Change Data Capture (CDC) and dynamic schema allocation techniques.","Enabled seamless schema evolution and pipeline reusability across multiple tenants and data domains.","Delivered a production-grade solution with operational efficiency, reliability, and real-time recovery capabilities."]},{id:3,title:"Orchestron – AI Orchestrated Modular Data Processing & Explosion Platform",content:["Architected a high-performance data processing and explosion platform using .NET, Apache Spark, and Kubernetes.","Designed a modular, plug-and-play architecture with configurable rules to enable seamless data transformation at scale.","Integrated Generative AI Agents to manage orchestration and rule governance, enabling intelligent, adaptive processing workflows.","Achieved dynamic scalability and reusability across domains through containerized deployments and configuration-driven pipelines.","Delivered a flexible and future-proof platform capable of adapting to evolving data models and transformation logic with minimal effort."]},{id:4,title:"Polymorphic Self-Mutating Encryption Algorithm",content:["Created a highly secured Hybrid Encryption Algorithm, a combination of hashing and dynamic key-based Encryption Algorithm.",'Solve the drawback of traditional Hashing technique to always create a unique hash value with an "Always Unique" based mechanism ignoring the need to store a key as followed in Key Based Encryption technique.']},{id:5,title:"Global Dependency Tracer",content:["Created a highly optimized Dependency Trace writer, based on Aspect-Oriented-Programming (AOP) Paradigm.","Architected using .NET Core's built-in Dependency Injection (DI) Containers by injecting dynamic proxies acting as a Middleware for all service calls."]},{id:6,title:"Dynamic Result Library for IQueryable & IEnumerable Collections",content:["Created a highly customizable library for Non-Generic collections IQueryable & IEnumerable based on concepts of Reflection for transforming Custom Data objects into LINQ compatible Lambda Expressions.","Dynamic Filter: Generate lambda expressions for LINQ's where extension method to filter data based on defined properties and values.","Dynamic Sort: Generate LINQ's ordering extensions with lambda expressions to sort the object in any direction (Ascending & Descending).","Dynamic Select: Generate lambda expressions for LINQ's select extension to fetch only the provided properties and filter the response using Custom Middleware Injection in .NET Core's request cycle.","Fully Compatible for EF Core's Translations."]}]},o1={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect I",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 – Present",descriptionSummary:'At McKinsey, I serve as the Lead Architect for the entire <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a> platform, a flagship <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> product for CPG and retail clients. My role involves bridging deep technical expertise with strategic client engagement, advising senior product and consulting leaders, and driving solution design for high-stakes RFPs and enterprise implementations. I ensure our technical strategy delivers measurable client impact, while leading a global team of 65+ engineers across 5 Development and 1 Core Support Squad in strategic technical delivery.',achievements:[{title:"Design of a Multi-Language Backend Architecture",description:"Defined the long-term architectural roadmap for a complex, data heavy ecosystem where I coordinated the interoperability of a backend that uses multiple languages - Node.js/Fastify for scalable microservices and .NET/C# for high performance batch processing."},{title:"Implementation of a Scalable Blue-Green ETL Platform",description:"Built a scalable ETL platform that uses Databricks, Azure Data Factory and PostgreSQL that switches between two identical production slots, Blue or Green - one slot runs the live service while the other receives the new release. The system loads more than 200 million records from more than 100 tables in under 15 minutes."},{title:"Development of a Micro-Frontend-Based UI Architecture",description:"Led the design of data heavy user interfaces based on Micro Frontend architecture using React, TypeScript, Redux and AG Grid."},{title:"Establishment of a GitOps-Driven Delivery Framework",description:"Established the delivery system - putting GitOps at the center. I designed all infrastructure as plain Terraform code and set up one touch release pipelines in Azure DevOps, Helm besides ArgoCD."},{title:"Advancement of Security-First Practices and Unified Observability",description:'Established a "Security-First" culture by adding Wiz besides SonarQube to CI/CD pipelines and created a single observability rule set with Dynatrace and OpenTelemetry.'},{title:"Leadership Contributions and Career Progression",description:"Got promoted from Senior Software Engineer to Principal Architect in 3.5 years to build a culture where people take responsibility and think about the whole system. Personally guided senior engineers on how to choose system designs, linked product needs to what the code can deliver plus earned strong trust from every stakeholder."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 – March 2022",descriptionSummary:'At Eptura, I transformed <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), re-architecting legacy SaaS into cloud-native systems and designing distributed platforms. This directly enhanced product reliability and scalability for global clients, while I also led engineering squads, driving technical excellence and team growth.',achievements:[{title:"Cloud-Native Transformation for Enhanced Client Uptime",description:"Led re-architecture of legacy SaaS to a cloud-native microservices solution on Azure Kubernetes Service (AKS). Achieved 60% faster recovery and significantly enhanced system uptime, critical for client operations."},{title:"Global Distributed Release Management System",description:"Engineered and deployed a system (Azure IoT Hub, Serverless Functions, Azure CosmosDB) orchestrating synchronized updates across 300M+ IoT devices globally. Ensured seamless and reliable software delivery to a vast client network."},{title:"Led & Mentored Engineering Squads",description:"Directed a team of 20 engineers (4 tech leads) across four product squads. Implemented mentorship, improving team retention by 20% and fostering engineering growth, impacting product quality for clients."}]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 – April 2021",descriptionSummary:"At Nagarro, I delivered full-stack applications for diverse clients, enhancing user experience and streamlining development. My role involved hands-on development and implementing modern software engineering practices to improve efficiency and reliability of client solutions.",achievements:[{title:"High-Performance Full-Stack Applications",description:"Developed full-stack web applications (Angular, .NET Core, PostgreSQL, Ionic Framework) for e-commerce and HR clients."},{title:"CI/CD & IaC for Reliable Client Deployments",description:"Established CI/CD pipelines and Infrastructure as Code (IaC) practices. Reduced deployment failures by 70%, ensuring stable and predictable software releases for client projects."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 – December 2019",descriptionSummary:'During this tenure at Condeco, I focused on core development and optimization of the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), contributing to its scalability and reliability for a rapidly growing customer base.',achievements:[{title:"Scalable Microservices for 3x Customer Growth",description:"Designed and developed microservices (C#, .NET, React, SQL Server) for the workspace SaaS platform. Supported 3x customer scale-up, handling increased user demand."},{title:"Optimized CI/CD & Data Models",description:"Maintained CI/CD pipelines and implemented data model optimizations. Resulted in faster, more reliable software releases and improved system performance for client-facing features."}]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",previously:"Intern",date:"February 2016 – August 2018",descriptionSummary:"At Gartner, I contributed to the development of the ClearForce platform (proprietary survey and analytics tool for HR consulting), focusing on improving data accuracy and automating workflows for clients.",achievements:[{title:"Core SaaS Analytics Tool Development",description:"Contributed backend development for ClearForce (C#, .NET Core, React), improving employee survey data accuracy by 60%. Critical for providing data-driven insights to HR clients."},{title:"Automated SQL Workflows",description:"Developed and automated SQL workflows (SPs, SQL agent jobs). Saved over 240 engineering hours annually in manual data processing, improving data delivery efficiency for clients."}],last:!0}]},c1={sectionTitle:"Technology Proficiency",skills:[{icon:"Architecture",category:"Architecture",skills:[{name:"Microservices Architecture",percentage:100},{name:"Data Lakehouse",percentage:90},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Multi-Tenant Architecture (Database, Schema, Metadata Resolution)",percentage:90},{name:"Event-Driven Architecture (EDA)",percentage:100},{name:"Serverless",percentage:80}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"Angular",percentage:90},{name:"JavaScript",percentage:100},{name:"TypeScript",percentage:100},{name:"Ionic Framework",percentage:60}]},{icon:"Backend",category:"Backend",skills:[{name:"C#",percentage:100},{name:".NET Core",percentage:100},{name:"Node.Js",percentage:80},{name:"Python",percentage:80},{name:"Microservices",percentage:100},{name:"GraphQL",percentage:80}]},{icon:"Database",category:"Database",skills:[{name:"SQL",percentage:100},{name:"NoSQL",percentage:90}]},{icon:"Cloud",category:"Cloud",skills:[{name:"Microsoft Azure",percentage:90},{name:"Amazon Web Services (AWS)",percentage:80}]},{icon:"DataEngineering",category:"Data Engineering",skills:[{name:"Azure Databricks (Apache Spark)",percentage:80},{name:"Azure Datafactory",percentage:70},{name:"Azure Stream Analytics",percentage:70}]}]},u1={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},s1={aboutSection:a1,certifications:e1,contactMe:i1,educationalQualifications:n1,homeSection:l1,mostProudOf:r1,professionalExperience:o1,technologyProficiency:c1,testimonials:u1},Wa=s1;function d1(){const[f,A]=q.useState(!1);return c.jsxs(Cg,{children:[c.jsx(kg,{}),c.jsx(jm,{}),c.jsx(we,{children:!f&&c.jsx(Am,{onComplete:()=>A(!0)})}),f&&c.jsxs(c.Fragment,{children:[c.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),c.jsx(Kg,{}),c.jsxs("main",{id:"main-content",style:{position:"relative"},role:"main",children:[c.jsx(uh,{data:Wa.homeSection}),c.jsx(Jh,{data:Wa.aboutSection}),c.jsx(db,{data:Wa.technologyProficiency}),c.jsx(Yb,{data:Wa.professionalExperience}),c.jsx(sv,{data:Wa.mostProudOf}),c.jsx(xv,{data:Wa.certifications}),c.jsx(Dv,{data:Wa.testimonials}),c.jsx(_v,{data:Wa.educationalQualifications}),c.jsx(t1,{data:Wa.contactMe})]}),c.jsx(rm,{})]})]})}jg.createRoot(document.getElementById("root")).render(c.jsx(q.StrictMode,{children:c.jsx(d1,{})}));
