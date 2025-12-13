import{r as R,j as u,m as v,A as Le,u as vp,a as bu,b as Af,c as xa}from"./vendor-motion-BoSVoJ0s.js";import{r as yp,a as xp}from"./vendor-react-DlBnNAMw.js";import{f as Sp,m as ut,d,l as ot}from"./vendor-styled-Du6AN5G6.js";(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))p(E);new MutationObserver(E=>{for(const C of E)if(C.type==="childList")for(const M of C.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&p(M)}).observe(document,{childList:!0,subtree:!0});function H(E){const C={};return E.integrity&&(C.integrity=E.integrity),E.referrerPolicy&&(C.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?C.credentials="include":E.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function p(E){if(E.ep)return;E.ep=!0;const C=H(E);fetch(E.href,C)}})();var vu={exports:{}},En={},yu={exports:{}},xu={};var Tf;function zp(){return Tf||(Tf=1,(function(g){function T(z,j){var G=z.length;z.push(j);t:for(;0<G;){var dt=G-1>>>1,ft=z[dt];if(0<E(ft,j))z[dt]=j,z[G]=ft,G=dt;else break t}}function H(z){return z.length===0?null:z[0]}function p(z){if(z.length===0)return null;var j=z[0],G=z.pop();if(G!==j){z[0]=G;t:for(var dt=0,ft=z.length,Yt=ft>>>1;dt<Yt;){var yt=2*(dt+1)-1,tt=z[yt],Ct=yt+1,Ea=z[Ct];if(0>E(tt,G))Ct<ft&&0>E(Ea,tt)?(z[dt]=Ea,z[Ct]=G,dt=Ct):(z[dt]=tt,z[yt]=G,dt=yt);else if(Ct<ft&&0>E(Ea,G))z[dt]=Ea,z[Ct]=G,dt=Ct;else break t}}return j}function E(z,j){var G=z.sortIndex-j.sortIndex;return G!==0?G:z.id-j.id}if(g.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var C=performance;g.unstable_now=function(){return C.now()}}else{var M=Date,Y=M.now();g.unstable_now=function(){return M.now()-Y}}var N=[],X=[],mt=1,D=null,K=3,Lt=!1,I=!1,Ut=!1,ht=!1,J=typeof setTimeout=="function"?setTimeout:null,zt=typeof clearTimeout=="function"?clearTimeout:null,vt=typeof setImmediate<"u"?setImmediate:null;function kt(z){for(var j=H(X);j!==null;){if(j.callback===null)p(X);else if(j.startTime<=z)p(X),j.sortIndex=j.expirationTime,T(N,j);else break;j=H(X)}}function Ft(z){if(Ut=!1,kt(z),!I)if(H(N)!==null)I=!0,ua||(ua=!0,ca());else{var j=H(X);j!==null&&Ca(Ft,j.startTime-z)}}var ua=!1,Sa=-1,za=5,Qe=-1;function jn(){return ht?!0:!(g.unstable_now()-Qe<za)}function Ve(){if(ht=!1,ua){var z=g.unstable_now();Qe=z;var j=!0;try{t:{I=!1,Ut&&(Ut=!1,zt(Sa),Sa=-1),Lt=!0;var G=K;try{a:{for(kt(z),D=H(N);D!==null&&!(D.expirationTime>z&&jn());){var dt=D.callback;if(typeof dt=="function"){D.callback=null,K=D.priorityLevel;var ft=dt(D.expirationTime<=z);if(z=g.unstable_now(),typeof ft=="function"){D.callback=ft,kt(z),j=!0;break a}D===H(N)&&p(N),kt(z)}else p(N);D=H(N)}if(D!==null)j=!0;else{var Yt=H(X);Yt!==null&&Ca(Ft,Yt.startTime-z),j=!1}}break t}finally{D=null,K=G,Lt=!1}j=void 0}}finally{j?ca():ua=!1}}}var ca;if(typeof vt=="function")ca=function(){vt(Ve)};else if(typeof MessageChannel<"u"){var Mn=new MessageChannel,Oi=Mn.port2;Mn.port1.onmessage=Ve,ca=function(){Oi.postMessage(null)}}else ca=function(){J(Ve,0)};function Ca(z,j){Sa=J(function(){z(g.unstable_now())},j)}g.unstable_IdlePriority=5,g.unstable_ImmediatePriority=1,g.unstable_LowPriority=4,g.unstable_NormalPriority=3,g.unstable_Profiling=null,g.unstable_UserBlockingPriority=2,g.unstable_cancelCallback=function(z){z.callback=null},g.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):za=0<z?Math.floor(1e3/z):5},g.unstable_getCurrentPriorityLevel=function(){return K},g.unstable_next=function(z){switch(K){case 1:case 2:case 3:var j=3;break;default:j=K}var G=K;K=j;try{return z()}finally{K=G}},g.unstable_requestPaint=function(){ht=!0},g.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=K;K=z;try{return j()}finally{K=G}},g.unstable_scheduleCallback=function(z,j,G){var dt=g.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?dt+G:dt):G=dt,z){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=G+ft,z={id:mt++,callback:j,priorityLevel:z,startTime:G,expirationTime:ft,sortIndex:-1},G>dt?(z.sortIndex=G,T(X,z),H(N)===null&&z===H(X)&&(Ut?(zt(Sa),Sa=-1):Ut=!0,Ca(Ft,G-dt))):(z.sortIndex=ft,T(N,z),I||Lt||(I=!0,ua||(ua=!0,ca()))),z},g.unstable_shouldYield=jn,g.unstable_wrapCallback=function(z){var j=K;return function(){var G=K;K=j;try{return z.apply(this,arguments)}finally{K=G}}}})(xu)),xu}var Ef;function wp(){return Ef||(Ef=1,yu.exports=zp()),yu.exports}var jf;function Ap(){if(jf)return En;jf=1;var g=wp(),T=yp(),H=xp();function p(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function C(t){var a=t,e=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(e=a.return),t=a.return;while(t)}return a.tag===3?e:null}function M(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Y(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function N(t){if(C(t)!==t)throw Error(p(188))}function X(t){var a=t.alternate;if(!a){if(a=C(t),a===null)throw Error(p(188));return a!==t?null:t}for(var e=t,i=a;;){var n=e.return;if(n===null)break;var l=n.alternate;if(l===null){if(i=n.return,i!==null){e=i;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===e)return N(n),t;if(l===i)return N(n),a;l=l.sibling}throw Error(p(188))}if(e.return!==i.return)e=n,i=l;else{for(var r=!1,o=n.child;o;){if(o===e){r=!0,e=n,i=l;break}if(o===i){r=!0,i=n,e=l;break}o=o.sibling}if(!r){for(o=l.child;o;){if(o===e){r=!0,e=l,i=n;break}if(o===i){r=!0,i=l,e=n;break}o=o.sibling}if(!r)throw Error(p(189))}}if(e.alternate!==i)throw Error(p(190))}if(e.tag!==3)throw Error(p(188));return e.stateNode.current===e?t:a}function mt(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=mt(t),a!==null)return a;t=t.sibling}return null}var D=Object.assign,K=Symbol.for("react.element"),Lt=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),ht=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),zt=Symbol.for("react.consumer"),vt=Symbol.for("react.context"),kt=Symbol.for("react.forward_ref"),Ft=Symbol.for("react.suspense"),ua=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),za=Symbol.for("react.lazy"),Qe=Symbol.for("react.activity"),jn=Symbol.for("react.memo_cache_sentinel"),Ve=Symbol.iterator;function ca(t){return t===null||typeof t!="object"?null:(t=Ve&&t[Ve]||t["@@iterator"],typeof t=="function"?t:null)}var Mn=Symbol.for("react.client.reference");function Oi(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ut:return"Fragment";case J:return"Profiler";case ht:return"StrictMode";case Ft:return"Suspense";case ua:return"SuspenseList";case Qe:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case I:return"Portal";case vt:return t.displayName||"Context";case zt:return(t._context.displayName||"Context")+".Consumer";case kt:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sa:return a=t.displayName||null,a!==null?a:Oi(t.type)||"Memo";case za:a=t._payload,t=t._init;try{return Oi(t(a))}catch{}}return null}var Ca=Array.isArray,z=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=H.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},dt=[],ft=-1;function Yt(t){return{current:t}}function yt(t){0>ft||(t.current=dt[ft],dt[ft]=null,ft--)}function tt(t,a){ft++,dt[ft]=t.current,t.current=a}var Ct=Yt(null),Ea=Yt(null),Fa=Yt(null),Dn=Yt(null);function kn(t,a){switch(tt(Fa,a),tt(Ea,t),tt(Ct,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?Zd(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=Zd(a),t=$d(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(Ct),tt(Ct,t)}function Ze(){yt(Ct),yt(Ea),yt(Fa)}function Fl(t){t.memoizedState!==null&&tt(Dn,t);var a=Ct.current,e=$d(a,t.type);a!==e&&(tt(Ea,t),tt(Ct,e))}function Cn(t){Ea.current===t&&(yt(Ct),yt(Ea)),Dn.current===t&&(yt(Dn),zn._currentValue=G)}var Il,zu;function Ae(t){if(Il===void 0)try{throw Error()}catch(e){var a=e.stack.trim().match(/\n( *(at )?)/);Il=a&&a[1]||"",zu=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Il+t+zu}var Pl=!1;function tr(t,a){if(!t||Pl)return"";Pl=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(a){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(y){var b=y}Reflect.construct(t,[],w)}else{try{w.call()}catch(y){b=y}t.call(w.prototype)}}else{try{throw Error()}catch(y){b=y}(w=t())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(y){if(y&&b&&typeof y.stack=="string")return[y.stack,b.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),r=l[0],o=l[1];if(r&&o){var c=r.split(`
`),h=o.split(`
`);for(n=i=0;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(i===c.length||n===h.length)for(i=c.length-1,n=h.length-1;1<=i&&0<=n&&c[i]!==h[n];)n--;for(;1<=i&&0<=n;i--,n--)if(c[i]!==h[n]){if(i!==1||n!==1)do if(i--,n--,0>n||c[i]!==h[n]){var x=`
`+c[i].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=i&&0<=n);break}}}finally{Pl=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ae(e):""}function Jf(t,a){switch(t.tag){case 26:case 27:case 5:return Ae(t.type);case 16:return Ae("Lazy");case 13:return t.child!==a&&a!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return tr(t.type,!1);case 11:return tr(t.type.render,!1);case 1:return tr(t.type,!0);case 31:return Ae("Activity");default:return""}}function wu(t){try{var a="",e=null;do a+=Jf(t,e),e=t,t=t.return;while(t);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ar=Object.prototype.hasOwnProperty,er=g.unstable_scheduleCallback,ir=g.unstable_cancelCallback,Wf=g.unstable_shouldYield,Ff=g.unstable_requestPaint,It=g.unstable_now,If=g.unstable_getCurrentPriorityLevel,Au=g.unstable_ImmediatePriority,Tu=g.unstable_UserBlockingPriority,On=g.unstable_NormalPriority,Pf=g.unstable_LowPriority,Eu=g.unstable_IdlePriority,t0=g.log,a0=g.unstable_setDisableYieldValue,Hi=null,Pt=null;function Ia(t){if(typeof t0=="function"&&a0(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Hi,t)}catch{}}var ta=Math.clz32?Math.clz32:n0,e0=Math.log,i0=Math.LN2;function n0(t){return t>>>=0,t===0?32:31-(e0(t)/i0|0)|0}var Hn=256,Bn=262144,Un=4194304;function Te(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nn(t,a,e){var i=t.pendingLanes;if(i===0)return 0;var n=0,l=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~l,i!==0?n=Te(i):(r&=o,r!==0?n=Te(r):e||(e=o&~t,e!==0&&(n=Te(e))))):(o=i&~l,o!==0?n=Te(o):r!==0?n=Te(r):e||(e=i&~t,e!==0&&(n=Te(e)))),n===0?0:a!==0&&a!==n&&(a&l)===0&&(l=n&-n,e=a&-a,l>=e||l===32&&(e&4194048)!==0)?a:n}function Bi(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function l0(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ju(){var t=Un;return Un<<=1,(Un&62914560)===0&&(Un=4194304),t}function nr(t){for(var a=[],e=0;31>e;e++)a.push(t);return a}function Ui(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function r0(t,a,e,i,n,l){var r=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var o=t.entanglements,c=t.expirationTimes,h=t.hiddenUpdates;for(e=r&~e;0<e;){var x=31-ta(e),w=1<<x;o[x]=0,c[x]=-1;var b=h[x];if(b!==null)for(h[x]=null,x=0;x<b.length;x++){var y=b[x];y!==null&&(y.lane&=-536870913)}e&=~w}i!==0&&Mu(t,i,0),l!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=l&~(r&~a))}function Mu(t,a,e){t.pendingLanes|=a,t.suspendedLanes&=~a;var i=31-ta(a);t.entangledLanes|=a,t.entanglements[i]=t.entanglements[i]|1073741824|e&261930}function Du(t,a){var e=t.entangledLanes|=a;for(t=t.entanglements;e;){var i=31-ta(e),n=1<<i;n&a|t[i]&a&&(t[i]|=a),e&=~n}}function ku(t,a){var e=a&-a;return e=(e&42)!==0?1:lr(e),(e&(t.suspendedLanes|a))!==0?0:e}function lr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cu(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:bf(t.type))}function Ou(t,a){var e=j.p;try{return j.p=t,a()}finally{j.p=e}}var Pa=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Pa,Qt="__reactProps$"+Pa,$e="__reactContainer$"+Pa,or="__reactEvents$"+Pa,o0="__reactListeners$"+Pa,u0="__reactHandles$"+Pa,Hu="__reactResources$"+Pa,Ni="__reactMarker$"+Pa;function ur(t){delete t[Nt],delete t[Qt],delete t[or],delete t[o0],delete t[u0]}function Ke(t){var a=t[Nt];if(a)return a;for(var e=t.parentNode;e;){if(a=e[$e]||e[Nt]){if(e=a.alternate,a.child!==null||e!==null&&e.child!==null)for(t=tf(t);t!==null;){if(e=t[Nt])return e;t=tf(t)}return a}t=e,e=t.parentNode}return null}function Je(t){if(t=t[Nt]||t[$e]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Gi(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(p(33))}function We(t){var a=t[Hu];return a||(a=t[Hu]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ot(t){t[Ni]=!0}var Bu=new Set,Uu={};function Ee(t,a){Fe(t,a),Fe(t+"Capture",a)}function Fe(t,a){for(Uu[t]=a,t=0;t<a.length;t++)Bu.add(a[t])}var c0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nu={},Gu={};function s0(t){return ar.call(Gu,t)?!0:ar.call(Nu,t)?!1:c0.test(t)?Gu[t]=!0:(Nu[t]=!0,!1)}function Gn(t,a,e){if(s0(a))if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var i=a.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+e)}}function qn(t,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+e)}}function Oa(t,a,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(a,e,""+i)}}function sa(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qu(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function d0(t,a,e){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,l=i.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return n.call(this)},set:function(r){e=""+r,l.call(this,r)}}),Object.defineProperty(t,a,{enumerable:i.enumerable}),{getValue:function(){return e},setValue:function(r){e=""+r},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function cr(t){if(!t._valueTracker){var a=qu(t)?"checked":"value";t._valueTracker=d0(t,a,""+t[a])}}function _u(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var e=a.getValue(),i="";return t&&(i=qu(t)?t.checked?"true":"false":t.value),t=i,t!==e?(a.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var f0=/[\n"\\]/g;function da(t){return t.replace(f0,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function sr(t,a,e,i,n,l,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),a!=null?r==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+sa(a)):t.value!==""+sa(a)&&(t.value=""+sa(a)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),a!=null?dr(t,r,sa(a)):e!=null?dr(t,r,sa(e)):i!=null&&t.removeAttribute("value"),n==null&&l!=null&&(t.defaultChecked=!!l),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+sa(o):t.removeAttribute("name")}function Ru(t,a,e,i,n,l,r,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),a!=null||e!=null){if(!(l!=="submit"&&l!=="reset"||a!=null)){cr(t);return}e=e!=null?""+sa(e):"",a=a!=null?""+sa(a):e,o||a===t.value||(t.value=a),t.defaultValue=a}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),cr(t)}function dr(t,a,e){a==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function Ie(t,a,e,i){if(t=t.options,a){a={};for(var n=0;n<e.length;n++)a["$"+e[n]]=!0;for(e=0;e<t.length;e++)n=a.hasOwnProperty("$"+t[e].value),t[e].selected!==n&&(t[e].selected=n),n&&i&&(t[e].defaultSelected=!0)}else{for(e=""+sa(e),a=null,n=0;n<t.length;n++){if(t[n].value===e){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}a!==null||t[n].disabled||(a=t[n])}a!==null&&(a.selected=!0)}}function Yu(t,a,e){if(a!=null&&(a=""+sa(a),a!==t.value&&(t.value=a),e==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=e!=null?""+sa(e):""}function Xu(t,a,e,i){if(a==null){if(i!=null){if(e!=null)throw Error(p(92));if(Ca(i)){if(1<i.length)throw Error(p(93));i=i[0]}e=i}e==null&&(e=""),a=e}e=sa(a),t.defaultValue=e,i=t.textContent,i===e&&i!==""&&i!==null&&(t.value=i),cr(t)}function Pe(t,a){if(a){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=a;return}}t.textContent=a}var g0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lu(t,a,e){var i=a.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?i?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":i?t.setProperty(a,e):typeof e!="number"||e===0||g0.has(a)?a==="float"?t.cssFloat=e:t[a]=(""+e).trim():t[a]=e+"px"}function Qu(t,a,e){if(a!=null&&typeof a!="object")throw Error(p(62));if(t=t.style,e!=null){for(var i in e)!e.hasOwnProperty(i)||a!=null&&a.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var n in a)i=a[n],a.hasOwnProperty(n)&&e[n]!==i&&Lu(t,n,i)}else for(var l in a)a.hasOwnProperty(l)&&Lu(t,l,a[l])}function fr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var p0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),m0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(t){return m0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ha(){}var gr=null;function pr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ti=null,ai=null;function Vu(t){var a=Je(t);if(a&&(t=a.stateNode)){var e=t[Qt]||null;t:switch(t=a.stateNode,a.type){case"input":if(sr(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),a=e.name,e.type==="radio"&&a!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+da(""+a)+'"][type="radio"]'),a=0;a<e.length;a++){var i=e[a];if(i!==t&&i.form===t.form){var n=i[Qt]||null;if(!n)throw Error(p(90));sr(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<e.length;a++)i=e[a],i.form===t.form&&_u(i)}break t;case"textarea":Yu(t,e.value,e.defaultValue);break t;case"select":a=e.value,a!=null&&Ie(t,!!e.multiple,a,!1)}}}var mr=!1;function Zu(t,a,e){if(mr)return t(a,e);mr=!0;try{var i=t(a);return i}finally{if(mr=!1,(ti!==null||ai!==null)&&(jl(),ti&&(a=ti,t=ai,ai=ti=null,Vu(a),t)))for(a=0;a<t.length;a++)Vu(t[a])}}function qi(t,a){var e=t.stateNode;if(e===null)return null;var i=e[Qt]||null;if(i===null)return null;e=i[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(p(231,a,typeof e));return e}var Ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hr=!1;if(Ba)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){hr=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{hr=!1}var te=null,br=null,Yn=null;function $u(){if(Yn)return Yn;var t,a=br,e=a.length,i,n="value"in te?te.value:te.textContent,l=n.length;for(t=0;t<e&&a[t]===n[t];t++);var r=e-t;for(i=1;i<=r&&a[e-i]===n[l-i];i++);return Yn=n.slice(t,1<i?1-i:void 0)}function Xn(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Ln(){return!0}function Ku(){return!1}function Vt(t){function a(e,i,n,l,r){this._reactName=e,this._targetInst=n,this.type=i,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(e=t[o],this[o]=e?e(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ln:Ku,this.isPropagationStopped=Ku,this}return D(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),a}var je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qn=Vt(je),Ri=D({},je,{view:0,detail:0}),h0=Vt(Ri),vr,yr,Yi,Vn=D({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yi&&(Yi&&t.type==="mousemove"?(vr=t.screenX-Yi.screenX,yr=t.screenY-Yi.screenY):yr=vr=0,Yi=t),vr)},movementY:function(t){return"movementY"in t?t.movementY:yr}}),Ju=Vt(Vn),b0=D({},Vn,{dataTransfer:0}),v0=Vt(b0),y0=D({},Ri,{relatedTarget:0}),xr=Vt(y0),x0=D({},je,{animationName:0,elapsedTime:0,pseudoElement:0}),S0=Vt(x0),z0=D({},je,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),w0=Vt(z0),A0=D({},je,{data:0}),Wu=Vt(A0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=j0[t])?!!a[t]:!1}function Sr(){return M0}var D0=D({},Ri,{key:function(t){if(t.key){var a=T0[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Xn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(t){return t.type==="keypress"?Xn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=Vt(D0),C0=D({},Vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=Vt(C0),O0=D({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr}),H0=Vt(O0),B0=D({},je,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=Vt(B0),N0=D({},Vn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=Vt(N0),q0=D({},je,{newState:0,oldState:0}),_0=Vt(q0),R0=[9,13,27,32],zr=Ba&&"CompositionEvent"in window,Xi=null;Ba&&"documentMode"in document&&(Xi=document.documentMode);var Y0=Ba&&"TextEvent"in window&&!Xi,Iu=Ba&&(!zr||Xi&&8<Xi&&11>=Xi),Pu=" ",tc=!1;function ac(t,a){switch(t){case"keyup":return R0.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ei=!1;function X0(t,a){switch(t){case"compositionend":return ec(a);case"keypress":return a.which!==32?null:(tc=!0,Pu);case"textInput":return t=a.data,t===Pu&&tc?null:t;default:return null}}function L0(t,a){if(ei)return t==="compositionend"||!zr&&ac(t,a)?(t=$u(),Yn=br=te=null,ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Iu&&a.locale!=="ko"?null:a.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ic(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!Q0[t.type]:a==="textarea"}function nc(t,a,e,i){ti?ai?ai.push(i):ai=[i]:ti=i,a=Bl(a,"onChange"),0<a.length&&(e=new Qn("onChange","change",null,e,i),t.push({event:e,listeners:a}))}var Li=null,Qi=null;function V0(t){Rd(t,0)}function Zn(t){var a=Gi(t);if(_u(a))return t}function lc(t,a){if(t==="change")return a}var rc=!1;if(Ba){var wr;if(Ba){var Ar="oninput"in document;if(!Ar){var oc=document.createElement("div");oc.setAttribute("oninput","return;"),Ar=typeof oc.oninput=="function"}wr=Ar}else wr=!1;rc=wr&&(!document.documentMode||9<document.documentMode)}function uc(){Li&&(Li.detachEvent("onpropertychange",cc),Qi=Li=null)}function cc(t){if(t.propertyName==="value"&&Zn(Qi)){var a=[];nc(a,Qi,t,pr(t)),Zu(V0,a)}}function Z0(t,a,e){t==="focusin"?(uc(),Li=a,Qi=e,Li.attachEvent("onpropertychange",cc)):t==="focusout"&&uc()}function $0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zn(Qi)}function K0(t,a){if(t==="click")return Zn(a)}function J0(t,a){if(t==="input"||t==="change")return Zn(a)}function W0(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var aa=typeof Object.is=="function"?Object.is:W0;function Vi(t,a){if(aa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var e=Object.keys(t),i=Object.keys(a);if(e.length!==i.length)return!1;for(i=0;i<e.length;i++){var n=e[i];if(!ar.call(a,n)||!aa(t[n],a[n]))return!1}return!0}function sc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dc(t,a){var e=sc(t);t=0;for(var i;e;){if(e.nodeType===3){if(i=t+e.textContent.length,t<=a&&i>=a)return{node:e,offset:a-t};t=i}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=sc(e)}}function fc(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?fc(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function gc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=_n(t.document);a instanceof t.HTMLIFrameElement;){try{var e=typeof a.contentWindow.location.href=="string"}catch{e=!1}if(e)t=a.contentWindow;else break;a=_n(t.document)}return a}function Tr(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var F0=Ba&&"documentMode"in document&&11>=document.documentMode,ii=null,Er=null,Zi=null,jr=!1;function pc(t,a,e){var i=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;jr||ii==null||ii!==_n(i)||(i=ii,"selectionStart"in i&&Tr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zi&&Vi(Zi,i)||(Zi=i,i=Bl(Er,"onSelect"),0<i.length&&(a=new Qn("onSelect","select",null,a,e),t.push({event:a,listeners:i}),a.target=ii)))}function Me(t,a){var e={};return e[t.toLowerCase()]=a.toLowerCase(),e["Webkit"+t]="webkit"+a,e["Moz"+t]="moz"+a,e}var ni={animationend:Me("Animation","AnimationEnd"),animationiteration:Me("Animation","AnimationIteration"),animationstart:Me("Animation","AnimationStart"),transitionrun:Me("Transition","TransitionRun"),transitionstart:Me("Transition","TransitionStart"),transitioncancel:Me("Transition","TransitionCancel"),transitionend:Me("Transition","TransitionEnd")},Mr={},mc={};Ba&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function De(t){if(Mr[t])return Mr[t];if(!ni[t])return t;var a=ni[t],e;for(e in a)if(a.hasOwnProperty(e)&&e in mc)return Mr[t]=a[e];return t}var hc=De("animationend"),bc=De("animationiteration"),vc=De("animationstart"),I0=De("transitionrun"),P0=De("transitionstart"),tg=De("transitioncancel"),yc=De("transitionend"),xc=new Map,Dr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dr.push("scrollEnd");function wa(t,a){xc.set(t,a),Ee(a,[t])}var $n=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fa=[],li=0,kr=0;function Kn(){for(var t=li,a=kr=li=0;a<t;){var e=fa[a];fa[a++]=null;var i=fa[a];fa[a++]=null;var n=fa[a];fa[a++]=null;var l=fa[a];if(fa[a++]=null,i!==null&&n!==null){var r=i.pending;r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n}l!==0&&Sc(e,n,l)}}function Jn(t,a,e,i){fa[li++]=t,fa[li++]=a,fa[li++]=e,fa[li++]=i,kr|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Cr(t,a,e,i){return Jn(t,a,e,i),Wn(t)}function ke(t,a){return Jn(t,null,null,a),Wn(t)}function Sc(t,a,e){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e);for(var n=!1,l=t.return;l!==null;)l.childLanes|=e,i=l.alternate,i!==null&&(i.childLanes|=e),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(n=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,n&&a!==null&&(n=31-ta(e),t=l.hiddenUpdates,i=t[n],i===null?t[n]=[a]:i.push(a),a.lane=e|536870912),l):null}function Wn(t){if(50<mn)throw mn=0,Yo=null,Error(p(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var ri={};function ag(t,a,e,i){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ea(t,a,e,i){return new ag(t,a,e,i)}function Or(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ua(t,a){var e=t.alternate;return e===null?(e=ea(t.tag,a,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=a,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function zc(t,a){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Fn(t,a,e,i,n,l){var r=0;if(i=t,typeof t=="function")Or(t)&&(r=1);else if(typeof t=="string")r=rp(t,e,Ct.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Qe:return t=ea(31,e,a,n),t.elementType=Qe,t.lanes=l,t;case Ut:return Ce(e.children,n,l,a);case ht:r=8,n|=24;break;case J:return t=ea(12,e,a,n|2),t.elementType=J,t.lanes=l,t;case Ft:return t=ea(13,e,a,n),t.elementType=Ft,t.lanes=l,t;case ua:return t=ea(19,e,a,n),t.elementType=ua,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vt:r=10;break t;case zt:r=9;break t;case kt:r=11;break t;case Sa:r=14;break t;case za:r=16,i=null;break t}r=29,e=Error(p(130,t===null?"null":typeof t,"")),i=null}return a=ea(r,e,a,n),a.elementType=t,a.type=i,a.lanes=l,a}function Ce(t,a,e,i){return t=ea(7,t,i,a),t.lanes=e,t}function Hr(t,a,e){return t=ea(6,t,null,a),t.lanes=e,t}function wc(t){var a=ea(18,null,null,0);return a.stateNode=t,a}function Br(t,a,e){return a=ea(4,t.children!==null?t.children:[],t.key,a),a.lanes=e,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Ac=new WeakMap;function ga(t,a){if(typeof t=="object"&&t!==null){var e=Ac.get(t);return e!==void 0?e:(a={value:t,source:a,stack:wu(a)},Ac.set(t,a),a)}return{value:t,source:a,stack:wu(a)}}var oi=[],ui=0,In=null,$i=0,pa=[],ma=0,ae=null,ja=1,Ma="";function Na(t,a){oi[ui++]=$i,oi[ui++]=In,In=t,$i=a}function Tc(t,a,e){pa[ma++]=ja,pa[ma++]=Ma,pa[ma++]=ae,ae=t;var i=ja;t=Ma;var n=32-ta(i)-1;i&=~(1<<n),e+=1;var l=32-ta(a)+n;if(30<l){var r=n-n%5;l=(i&(1<<r)-1).toString(32),i>>=r,n-=r,ja=1<<32-ta(a)+n|e<<n|i,Ma=l+t}else ja=1<<l|e<<n|i,Ma=t}function Ur(t){t.return!==null&&(Na(t,1),Tc(t,1,0))}function Nr(t){for(;t===In;)In=oi[--ui],oi[ui]=null,$i=oi[--ui],oi[ui]=null;for(;t===ae;)ae=pa[--ma],pa[ma]=null,Ma=pa[--ma],pa[ma]=null,ja=pa[--ma],pa[ma]=null}function Ec(t,a){pa[ma++]=ja,pa[ma++]=Ma,pa[ma++]=ae,ja=a.id,Ma=a.overflow,ae=t}var Gt=null,gt=null,$=!1,ee=null,ha=!1,Gr=Error(p(519));function ie(t){var a=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ki(ga(a,t)),Gr}function jc(t){var a=t.stateNode,e=t.type,i=t.memoizedProps;switch(a[Nt]=t,a[Qt]=i,e){case"dialog":Q("cancel",a),Q("close",a);break;case"iframe":case"object":case"embed":Q("load",a);break;case"video":case"audio":for(e=0;e<bn.length;e++)Q(bn[e],a);break;case"source":Q("error",a);break;case"img":case"image":case"link":Q("error",a),Q("load",a);break;case"details":Q("toggle",a);break;case"input":Q("invalid",a),Ru(a,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Q("invalid",a);break;case"textarea":Q("invalid",a),Xu(a,i.value,i.defaultValue,i.children)}e=i.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||a.textContent===""+e||i.suppressHydrationWarning===!0||Qd(a.textContent,e)?(i.popover!=null&&(Q("beforetoggle",a),Q("toggle",a)),i.onScroll!=null&&Q("scroll",a),i.onScrollEnd!=null&&Q("scrollend",a),i.onClick!=null&&(a.onclick=Ha),a=!0):a=!1,a||ie(t,!0)}function Mc(t){for(Gt=t.return;Gt;)switch(Gt.tag){case 5:case 31:case 13:ha=!1;return;case 27:case 3:ha=!0;return;default:Gt=Gt.return}}function ci(t){if(t!==Gt)return!1;if(!$)return Mc(t),$=!0,!1;var a=t.tag,e;if((e=a!==3&&a!==27)&&((e=a===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||eu(t.type,t.memoizedProps)),e=!e),e&&gt&&ie(t),Mc(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));gt=Pd(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));gt=Pd(t)}else a===27?(a=gt,be(t.type)?(t=ou,ou=null,gt=t):gt=a):gt=Gt?va(t.stateNode.nextSibling):null;return!0}function Oe(){gt=Gt=null,$=!1}function qr(){var t=ee;return t!==null&&(Jt===null?Jt=t:Jt.push.apply(Jt,t),ee=null),t}function Ki(t){ee===null?ee=[t]:ee.push(t)}var _r=Yt(null),He=null,Ga=null;function ne(t,a,e){tt(_r,a._currentValue),a._currentValue=e}function qa(t){t._currentValue=_r.current,yt(_r)}function Rr(t,a,e){for(;t!==null;){var i=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,i!==null&&(i.childLanes|=a)):i!==null&&(i.childLanes&a)!==a&&(i.childLanes|=a),t===e)break;t=t.return}}function Yr(t,a,e,i){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var l=n.dependencies;if(l!==null){var r=n.child;l=l.firstContext;t:for(;l!==null;){var o=l;l=n;for(var c=0;c<a.length;c++)if(o.context===a[c]){l.lanes|=e,o=l.alternate,o!==null&&(o.lanes|=e),Rr(l.return,e,t),i||(r=null);break t}l=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(p(341));r.lanes|=e,l=r.alternate,l!==null&&(l.lanes|=e),Rr(r,e,t),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function si(t,a,e,i){t=null;for(var n=a,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(p(387));if(r=r.memoizedProps,r!==null){var o=n.type;aa(n.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(n===Dn.current){if(r=n.alternate,r===null)throw Error(p(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(zn):t=[zn])}n=n.return}t!==null&&Yr(a,t,e,i),a.flags|=262144}function Pn(t){for(t=t.firstContext;t!==null;){if(!aa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Be(t){He=t,Ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qt(t){return Dc(He,t)}function tl(t,a){return He===null&&Be(t),Dc(t,a)}function Dc(t,a){var e=a._currentValue;if(a={context:a,memoizedValue:e,next:null},Ga===null){if(t===null)throw Error(p(308));Ga=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Ga=Ga.next=a;return e}var eg=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(e,i){t.push(i)}};this.abort=function(){a.aborted=!0,t.forEach(function(e){return e()})}},ig=g.unstable_scheduleCallback,ng=g.unstable_NormalPriority,Tt={$$typeof:vt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xr(){return{controller:new eg,data:new Map,refCount:0}}function Ji(t){t.refCount--,t.refCount===0&&ig(ng,function(){t.controller.abort()})}var Wi=null,Lr=0,di=0,fi=null;function lg(t,a){if(Wi===null){var e=Wi=[];Lr=0,di=$o(),fi={status:"pending",value:void 0,then:function(i){e.push(i)}}}return Lr++,a.then(kc,kc),a}function kc(){if(--Lr===0&&Wi!==null){fi!==null&&(fi.status="fulfilled");var t=Wi;Wi=null,di=0,fi=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function rg(t,a){var e=[],i={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return t.then(function(){i.status="fulfilled",i.value=a;for(var n=0;n<e.length;n++)(0,e[n])(a)},function(n){for(i.status="rejected",i.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),i}var Cc=z.S;z.S=function(t,a){pd=It(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&lg(t,a),Cc!==null&&Cc(t,a)};var Ue=Yt(null);function Qr(){var t=Ue.current;return t!==null?t:rt.pooledCache}function al(t,a){a===null?tt(Ue,Ue.current):tt(Ue,a.pool)}function Oc(){var t=Qr();return t===null?null:{parent:Tt._currentValue,pool:t}}var gi=Error(p(460)),Vr=Error(p(474)),el=Error(p(542)),il={then:function(){}};function Hc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bc(t,a,e){switch(e=t[e],e===void 0?t.push(a):e!==a&&(a.then(Ha,Ha),a=e),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Nc(t),t;default:if(typeof a.status=="string")a.then(Ha,Ha);else{if(t=rt,t!==null&&100<t.shellSuspendCounter)throw Error(p(482));t=a,t.status="pending",t.then(function(i){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=i}},function(i){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=i}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Nc(t),t}throw Ge=a,gi}}function Ne(t){try{var a=t._init;return a(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ge=e,gi):e}}var Ge=null;function Uc(){if(Ge===null)throw Error(p(459));var t=Ge;return Ge=null,t}function Nc(t){if(t===gi||t===el)throw Error(p(483))}var pi=null,Fi=0;function nl(t){var a=Fi;return Fi+=1,pi===null&&(pi=[]),Bc(pi,t,a)}function Ii(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function ll(t,a){throw a.$$typeof===K?Error(p(525)):(t=Object.prototype.toString.call(a),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function Gc(t){function a(f,s){if(t){var m=f.deletions;m===null?(f.deletions=[s],f.flags|=16):m.push(s)}}function e(f,s){if(!t)return null;for(;s!==null;)a(f,s),s=s.sibling;return null}function i(f){for(var s=new Map;f!==null;)f.key!==null?s.set(f.key,f):s.set(f.index,f),f=f.sibling;return s}function n(f,s){return f=Ua(f,s),f.index=0,f.sibling=null,f}function l(f,s,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<s?(f.flags|=67108866,s):m):(f.flags|=67108866,s)):(f.flags|=1048576,s)}function r(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function o(f,s,m,S){return s===null||s.tag!==6?(s=Hr(m,f.mode,S),s.return=f,s):(s=n(s,m),s.return=f,s)}function c(f,s,m,S){var B=m.type;return B===Ut?x(f,s,m.props.children,S,m.key):s!==null&&(s.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===za&&Ne(B)===s.type)?(s=n(s,m.props),Ii(s,m),s.return=f,s):(s=Fn(m.type,m.key,m.props,null,f.mode,S),Ii(s,m),s.return=f,s)}function h(f,s,m,S){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=Br(m,f.mode,S),s.return=f,s):(s=n(s,m.children||[]),s.return=f,s)}function x(f,s,m,S,B){return s===null||s.tag!==7?(s=Ce(m,f.mode,S,B),s.return=f,s):(s=n(s,m),s.return=f,s)}function w(f,s,m){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Hr(""+s,f.mode,m),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Lt:return m=Fn(s.type,s.key,s.props,null,f.mode,m),Ii(m,s),m.return=f,m;case I:return s=Br(s,f.mode,m),s.return=f,s;case za:return s=Ne(s),w(f,s,m)}if(Ca(s)||ca(s))return s=Ce(s,f.mode,m,null),s.return=f,s;if(typeof s.then=="function")return w(f,nl(s),m);if(s.$$typeof===vt)return w(f,tl(f,s),m);ll(f,s)}return null}function b(f,s,m,S){var B=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return B!==null?null:o(f,s,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Lt:return m.key===B?c(f,s,m,S):null;case I:return m.key===B?h(f,s,m,S):null;case za:return m=Ne(m),b(f,s,m,S)}if(Ca(m)||ca(m))return B!==null?null:x(f,s,m,S,null);if(typeof m.then=="function")return b(f,s,nl(m),S);if(m.$$typeof===vt)return b(f,s,tl(f,m),S);ll(f,m)}return null}function y(f,s,m,S,B){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(m)||null,o(s,f,""+S,B);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Lt:return f=f.get(S.key===null?m:S.key)||null,c(s,f,S,B);case I:return f=f.get(S.key===null?m:S.key)||null,h(s,f,S,B);case za:return S=Ne(S),y(f,s,m,S,B)}if(Ca(S)||ca(S))return f=f.get(m)||null,x(s,f,S,B,null);if(typeof S.then=="function")return y(f,s,m,nl(S),B);if(S.$$typeof===vt)return y(f,s,m,tl(s,S),B);ll(s,S)}return null}function k(f,s,m,S){for(var B=null,W=null,O=s,_=s=0,Z=null;O!==null&&_<m.length;_++){O.index>_?(Z=O,O=null):Z=O.sibling;var F=b(f,O,m[_],S);if(F===null){O===null&&(O=Z);break}t&&O&&F.alternate===null&&a(f,O),s=l(F,s,_),W===null?B=F:W.sibling=F,W=F,O=Z}if(_===m.length)return e(f,O),$&&Na(f,_),B;if(O===null){for(;_<m.length;_++)O=w(f,m[_],S),O!==null&&(s=l(O,s,_),W===null?B=O:W.sibling=O,W=O);return $&&Na(f,_),B}for(O=i(O);_<m.length;_++)Z=y(O,f,_,m[_],S),Z!==null&&(t&&Z.alternate!==null&&O.delete(Z.key===null?_:Z.key),s=l(Z,s,_),W===null?B=Z:W.sibling=Z,W=Z);return t&&O.forEach(function(ze){return a(f,ze)}),$&&Na(f,_),B}function U(f,s,m,S){if(m==null)throw Error(p(151));for(var B=null,W=null,O=s,_=s=0,Z=null,F=m.next();O!==null&&!F.done;_++,F=m.next()){O.index>_?(Z=O,O=null):Z=O.sibling;var ze=b(f,O,F.value,S);if(ze===null){O===null&&(O=Z);break}t&&O&&ze.alternate===null&&a(f,O),s=l(ze,s,_),W===null?B=ze:W.sibling=ze,W=ze,O=Z}if(F.done)return e(f,O),$&&Na(f,_),B;if(O===null){for(;!F.done;_++,F=m.next())F=w(f,F.value,S),F!==null&&(s=l(F,s,_),W===null?B=F:W.sibling=F,W=F);return $&&Na(f,_),B}for(O=i(O);!F.done;_++,F=m.next())F=y(O,f,_,F.value,S),F!==null&&(t&&F.alternate!==null&&O.delete(F.key===null?_:F.key),s=l(F,s,_),W===null?B=F:W.sibling=F,W=F);return t&&O.forEach(function(bp){return a(f,bp)}),$&&Na(f,_),B}function lt(f,s,m,S){if(typeof m=="object"&&m!==null&&m.type===Ut&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Lt:t:{for(var B=m.key;s!==null;){if(s.key===B){if(B=m.type,B===Ut){if(s.tag===7){e(f,s.sibling),S=n(s,m.props.children),S.return=f,f=S;break t}}else if(s.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===za&&Ne(B)===s.type){e(f,s.sibling),S=n(s,m.props),Ii(S,m),S.return=f,f=S;break t}e(f,s);break}else a(f,s);s=s.sibling}m.type===Ut?(S=Ce(m.props.children,f.mode,S,m.key),S.return=f,f=S):(S=Fn(m.type,m.key,m.props,null,f.mode,S),Ii(S,m),S.return=f,f=S)}return r(f);case I:t:{for(B=m.key;s!==null;){if(s.key===B)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){e(f,s.sibling),S=n(s,m.children||[]),S.return=f,f=S;break t}else{e(f,s);break}else a(f,s);s=s.sibling}S=Br(m,f.mode,S),S.return=f,f=S}return r(f);case za:return m=Ne(m),lt(f,s,m,S)}if(Ca(m))return k(f,s,m,S);if(ca(m)){if(B=ca(m),typeof B!="function")throw Error(p(150));return m=B.call(m),U(f,s,m,S)}if(typeof m.then=="function")return lt(f,s,nl(m),S);if(m.$$typeof===vt)return lt(f,s,tl(f,m),S);ll(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,s!==null&&s.tag===6?(e(f,s.sibling),S=n(s,m),S.return=f,f=S):(e(f,s),S=Hr(m,f.mode,S),S.return=f,f=S),r(f)):e(f,s)}return function(f,s,m,S){try{Fi=0;var B=lt(f,s,m,S);return pi=null,B}catch(O){if(O===gi||O===el)throw O;var W=ea(29,O,null,f.mode);return W.lanes=S,W.return=f,W}finally{}}}var qe=Gc(!0),qc=Gc(!1),le=!1;function Zr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $r(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function re(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function oe(t,a,e){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(P&2)!==0){var n=i.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),i.pending=a,a=Wn(t),Sc(t,null,e),a}return Jn(t,i,a,e),Wn(t)}function Pi(t,a,e){if(a=a.updateQueue,a!==null&&(a=a.shared,(e&4194048)!==0)){var i=a.lanes;i&=t.pendingLanes,e|=i,a.lanes=e,Du(t,e)}}function Kr(t,a){var e=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,e===i)){var n=null,l=null;if(e=e.firstBaseUpdate,e!==null){do{var r={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};l===null?n=l=r:l=l.next=r,e=e.next}while(e!==null);l===null?n=l=a:l=l.next=a}else n=l=a;e={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=a:t.next=a,e.lastBaseUpdate=a}var Jr=!1;function tn(){if(Jr){var t=fi;if(t!==null)throw t}}function an(t,a,e,i){Jr=!1;var n=t.updateQueue;le=!1;var l=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var c=o,h=c.next;c.next=null,r===null?l=h:r.next=h,r=c;var x=t.alternate;x!==null&&(x=x.updateQueue,o=x.lastBaseUpdate,o!==r&&(o===null?x.firstBaseUpdate=h:o.next=h,x.lastBaseUpdate=c))}if(l!==null){var w=n.baseState;r=0,x=h=c=null,o=l;do{var b=o.lane&-536870913,y=b!==o.lane;if(y?(V&b)===b:(i&b)===b){b!==0&&b===di&&(Jr=!0),x!==null&&(x=x.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var k=t,U=o;b=a;var lt=e;switch(U.tag){case 1:if(k=U.payload,typeof k=="function"){w=k.call(lt,w,b);break t}w=k;break t;case 3:k.flags=k.flags&-65537|128;case 0:if(k=U.payload,b=typeof k=="function"?k.call(lt,w,b):k,b==null)break t;w=D({},w,b);break t;case 2:le=!0}}b=o.callback,b!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[b]:y.push(b))}else y={lane:b,tag:o.tag,payload:o.payload,callback:o.callback,next:null},x===null?(h=x=y,c=w):x=x.next=y,r|=b;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;y=o,o=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);x===null&&(c=w),n.baseState=c,n.firstBaseUpdate=h,n.lastBaseUpdate=x,l===null&&(n.shared.lanes=0),fe|=r,t.lanes=r,t.memoizedState=w}}function _c(t,a){if(typeof t!="function")throw Error(p(191,t));t.call(a)}function Rc(t,a){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)_c(e[t],a)}var mi=Yt(null),rl=Yt(0);function Yc(t,a){t=$a,tt(rl,t),tt(mi,a),$a=t|a.baseLanes}function Wr(){tt(rl,$a),tt(mi,mi.current)}function Fr(){$a=rl.current,yt(mi),yt(rl)}var ia=Yt(null),ba=null;function ue(t){var a=t.alternate;tt(wt,wt.current&1),tt(ia,t),ba===null&&(a===null||mi.current!==null||a.memoizedState!==null)&&(ba=t)}function Ir(t){tt(wt,wt.current),tt(ia,t),ba===null&&(ba=t)}function Xc(t){t.tag===22?(tt(wt,wt.current),tt(ia,t),ba===null&&(ba=t)):ce()}function ce(){tt(wt,wt.current),tt(ia,ia.current)}function na(t){yt(ia),ba===t&&(ba=null),yt(wt)}var wt=Yt(0);function ol(t){for(var a=t;a!==null;){if(a.tag===13){var e=a.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||lu(e)||ru(e)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var _a=0,q=null,it=null,Et=null,ul=!1,hi=!1,_e=!1,cl=0,en=0,bi=null,og=0;function xt(){throw Error(p(321))}function Pr(t,a){if(a===null)return!1;for(var e=0;e<a.length&&e<t.length;e++)if(!aa(t[e],a[e]))return!1;return!0}function to(t,a,e,i,n,l){return _a=l,q=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=t===null||t.memoizedState===null?Ts:ho,_e=!1,l=e(i,n),_e=!1,hi&&(l=Qc(a,e,i,n)),Lc(t),l}function Lc(t){z.H=rn;var a=it!==null&&it.next!==null;if(_a=0,Et=it=q=null,ul=!1,en=0,bi=null,a)throw Error(p(300));t===null||jt||(t=t.dependencies,t!==null&&Pn(t)&&(jt=!0))}function Qc(t,a,e,i){q=t;var n=0;do{if(hi&&(bi=null),en=0,hi=!1,25<=n)throw Error(p(301));if(n+=1,Et=it=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}z.H=Es,l=a(e,i)}while(hi);return l}function ug(){var t=z.H,a=t.useState()[0];return a=typeof a.then=="function"?nn(a):a,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(q.flags|=1024),a}function ao(){var t=cl!==0;return cl=0,t}function eo(t,a,e){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~e}function io(t){if(ul){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}ul=!1}_a=0,Et=it=q=null,hi=!1,en=cl=0,bi=null}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?q.memoizedState=Et=t:Et=Et.next=t,Et}function At(){if(it===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var a=Et===null?q.memoizedState:Et.next;if(a!==null)Et=a,it=t;else{if(t===null)throw q.alternate===null?Error(p(467)):Error(p(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Et===null?q.memoizedState=Et=t:Et=Et.next=t}return Et}function sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(t){var a=en;return en+=1,bi===null&&(bi=[]),t=Bc(bi,t,a),a=q,(Et===null?a.memoizedState:Et.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?Ts:ho),t}function dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nn(t);if(t.$$typeof===vt)return qt(t)}throw Error(p(438,String(t)))}function no(t){var a=null,e=q.updateQueue;if(e!==null&&(a=e.memoCache),a==null){var i=q.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(a={data:i.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),e===null&&(e=sl(),q.updateQueue=e),e.memoCache=a,e=a.data[a.index],e===void 0)for(e=a.data[a.index]=Array(t),i=0;i<t;i++)e[i]=jn;return a.index++,e}function Ra(t,a){return typeof a=="function"?a(t):a}function fl(t){var a=At();return lo(a,it,t)}function lo(t,a,e){var i=t.queue;if(i===null)throw Error(p(311));i.lastRenderedReducer=e;var n=t.baseQueue,l=i.pending;if(l!==null){if(n!==null){var r=n.next;n.next=l.next,l.next=r}a.baseQueue=n=l,i.pending=null}if(l=t.baseState,n===null)t.memoizedState=l;else{a=n.next;var o=r=null,c=null,h=a,x=!1;do{var w=h.lane&-536870913;if(w!==h.lane?(V&w)===w:(_a&w)===w){var b=h.revertLane;if(b===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),w===di&&(x=!0);else if((_a&b)===b){h=h.next,b===di&&(x=!0);continue}else w={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(o=c=w,r=l):c=c.next=w,q.lanes|=b,fe|=b;w=h.action,_e&&e(l,w),l=h.hasEagerState?h.eagerState:e(l,w)}else b={lane:w,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(o=c=b,r=l):c=c.next=b,q.lanes|=w,fe|=w;h=h.next}while(h!==null&&h!==a);if(c===null?r=l:c.next=o,!aa(l,t.memoizedState)&&(jt=!0,x&&(e=fi,e!==null)))throw e;t.memoizedState=l,t.baseState=r,t.baseQueue=c,i.lastRenderedState=l}return n===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function ro(t){var a=At(),e=a.queue;if(e===null)throw Error(p(311));e.lastRenderedReducer=t;var i=e.dispatch,n=e.pending,l=a.memoizedState;if(n!==null){e.pending=null;var r=n=n.next;do l=t(l,r.action),r=r.next;while(r!==n);aa(l,a.memoizedState)||(jt=!0),a.memoizedState=l,a.baseQueue===null&&(a.baseState=l),e.lastRenderedState=l}return[l,i]}function Vc(t,a,e){var i=q,n=At(),l=$;if(l){if(e===void 0)throw Error(p(407));e=e()}else e=a();var r=!aa((it||n).memoizedState,e);if(r&&(n.memoizedState=e,jt=!0),n=n.queue,co(Kc.bind(null,i,n,t),[t]),n.getSnapshot!==a||r||Et!==null&&Et.memoizedState.tag&1){if(i.flags|=2048,vi(9,{destroy:void 0},$c.bind(null,i,n,e,a),null),rt===null)throw Error(p(349));l||(_a&127)!==0||Zc(i,a,e)}return e}function Zc(t,a,e){t.flags|=16384,t={getSnapshot:a,value:e},a=q.updateQueue,a===null?(a=sl(),q.updateQueue=a,a.stores=[t]):(e=a.stores,e===null?a.stores=[t]:e.push(t))}function $c(t,a,e,i){a.value=e,a.getSnapshot=i,Jc(a)&&Wc(t)}function Kc(t,a,e){return e(function(){Jc(a)&&Wc(t)})}function Jc(t){var a=t.getSnapshot;t=t.value;try{var e=a();return!aa(t,e)}catch{return!0}}function Wc(t){var a=ke(t,2);a!==null&&Wt(a,t,2)}function oo(t){var a=Xt();if(typeof t=="function"){var e=t;if(t=e(),_e){Ia(!0);try{e()}finally{Ia(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},a}function Fc(t,a,e,i){return t.baseState=e,lo(t,it,typeof i=="function"?i:Ra)}function cg(t,a,e,i,n){if(ml(t))throw Error(p(485));if(t=a.action,t!==null){var l={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};z.T!==null?e(!0):l.isTransition=!1,i(l),e=a.pending,e===null?(l.next=a.pending=l,Ic(a,l)):(l.next=e.next,a.pending=e.next=l)}}function Ic(t,a){var e=a.action,i=a.payload,n=t.state;if(a.isTransition){var l=z.T,r={};z.T=r;try{var o=e(n,i),c=z.S;c!==null&&c(r,o),Pc(t,a,o)}catch(h){uo(t,a,h)}finally{l!==null&&r.types!==null&&(l.types=r.types),z.T=l}}else try{l=e(n,i),Pc(t,a,l)}catch(h){uo(t,a,h)}}function Pc(t,a,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(i){ts(t,a,i)},function(i){return uo(t,a,i)}):ts(t,a,e)}function ts(t,a,e){a.status="fulfilled",a.value=e,as(a),t.state=e,a=t.pending,a!==null&&(e=a.next,e===a?t.pending=null:(e=e.next,a.next=e,Ic(t,e)))}function uo(t,a,e){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do a.status="rejected",a.reason=e,as(a),a=a.next;while(a!==i)}t.action=null}function as(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function es(t,a){return a}function is(t,a){if($){var e=rt.formState;if(e!==null){t:{var i=q;if($){if(gt){a:{for(var n=gt,l=ha;n.nodeType!==8;){if(!l){n=null;break a}if(n=va(n.nextSibling),n===null){n=null;break a}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){gt=va(n.nextSibling),i=n.data==="F!";break t}}ie(i)}i=!1}i&&(a=e[0])}}return e=Xt(),e.memoizedState=e.baseState=a,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:a},e.queue=i,e=zs.bind(null,q,i),i.dispatch=e,i=oo(!1),l=mo.bind(null,q,!1,i.queue),i=Xt(),n={state:a,dispatch:null,action:t,pending:null},i.queue=n,e=cg.bind(null,q,n,l,e),n.dispatch=e,i.memoizedState=t,[a,e,!1]}function ns(t){var a=At();return ls(a,it,t)}function ls(t,a,e){if(a=lo(t,a,es)[0],t=fl(Ra)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var i=nn(a)}catch(r){throw r===gi?el:r}else i=a;a=At();var n=a.queue,l=n.dispatch;return e!==a.memoizedState&&(q.flags|=2048,vi(9,{destroy:void 0},sg.bind(null,n,e),null)),[i,l,t]}function sg(t,a){t.action=a}function rs(t){var a=At(),e=it;if(e!==null)return ls(a,e,t);At(),a=a.memoizedState,e=At();var i=e.queue.dispatch;return e.memoizedState=t,[a,i,!1]}function vi(t,a,e,i){return t={tag:t,create:e,deps:i,inst:a,next:null},a=q.updateQueue,a===null&&(a=sl(),q.updateQueue=a),e=a.lastEffect,e===null?a.lastEffect=t.next=t:(i=e.next,e.next=t,t.next=i,a.lastEffect=t),t}function os(){return At().memoizedState}function gl(t,a,e,i){var n=Xt();q.flags|=t,n.memoizedState=vi(1|a,{destroy:void 0},e,i===void 0?null:i)}function pl(t,a,e,i){var n=At();i=i===void 0?null:i;var l=n.memoizedState.inst;it!==null&&i!==null&&Pr(i,it.memoizedState.deps)?n.memoizedState=vi(a,l,e,i):(q.flags|=t,n.memoizedState=vi(1|a,l,e,i))}function us(t,a){gl(8390656,8,t,a)}function co(t,a){pl(2048,8,t,a)}function dg(t){q.flags|=4;var a=q.updateQueue;if(a===null)a=sl(),q.updateQueue=a,a.events=[t];else{var e=a.events;e===null?a.events=[t]:e.push(t)}}function cs(t){var a=At().memoizedState;return dg({ref:a,nextImpl:t}),function(){if((P&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}function ss(t,a){return pl(4,2,t,a)}function ds(t,a){return pl(4,4,t,a)}function fs(t,a){if(typeof a=="function"){t=t();var e=a(t);return function(){typeof e=="function"?e():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function gs(t,a,e){e=e!=null?e.concat([t]):null,pl(4,4,fs.bind(null,a,t),e)}function so(){}function ps(t,a){var e=At();a=a===void 0?null:a;var i=e.memoizedState;return a!==null&&Pr(a,i[1])?i[0]:(e.memoizedState=[t,a],t)}function ms(t,a){var e=At();a=a===void 0?null:a;var i=e.memoizedState;if(a!==null&&Pr(a,i[1]))return i[0];if(i=t(),_e){Ia(!0);try{t()}finally{Ia(!1)}}return e.memoizedState=[i,a],i}function fo(t,a,e){return e===void 0||(_a&1073741824)!==0&&(V&261930)===0?t.memoizedState=a:(t.memoizedState=e,t=hd(),q.lanes|=t,fe|=t,e)}function hs(t,a,e,i){return aa(e,a)?e:mi.current!==null?(t=fo(t,e,i),aa(t,a)||(jt=!0),t):(_a&42)===0||(_a&1073741824)!==0&&(V&261930)===0?(jt=!0,t.memoizedState=e):(t=hd(),q.lanes|=t,fe|=t,a)}function bs(t,a,e,i,n){var l=j.p;j.p=l!==0&&8>l?l:8;var r=z.T,o={};z.T=o,mo(t,!1,a,e);try{var c=n(),h=z.S;if(h!==null&&h(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var x=rg(c,i);ln(t,a,x,oa(t))}else ln(t,a,i,oa(t))}catch(w){ln(t,a,{then:function(){},status:"rejected",reason:w},oa())}finally{j.p=l,r!==null&&o.types!==null&&(r.types=o.types),z.T=r}}function fg(){}function go(t,a,e,i){if(t.tag!==5)throw Error(p(476));var n=vs(t).queue;bs(t,n,a,G,e===null?fg:function(){return ys(t),e(i)})}function vs(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:G},next:null};var e={};return a.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:e},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function ys(t){var a=vs(t);a.next===null&&(a=t.alternate.memoizedState),ln(t,a.next.queue,{},oa())}function po(){return qt(zn)}function xs(){return At().memoizedState}function Ss(){return At().memoizedState}function gg(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var e=oa();t=re(e);var i=oe(a,t,e);i!==null&&(Wt(i,a,e),Pi(i,a,e)),a={cache:Xr()},t.payload=a;return}a=a.return}}function pg(t,a,e){var i=oa();e={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},ml(t)?ws(a,e):(e=Cr(t,a,e,i),e!==null&&(Wt(e,t,i),As(e,a,i)))}function zs(t,a,e){var i=oa();ln(t,a,e,i)}function ln(t,a,e,i){var n={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(ml(t))ws(a,n);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=a.lastRenderedReducer,l!==null))try{var r=a.lastRenderedState,o=l(r,e);if(n.hasEagerState=!0,n.eagerState=o,aa(o,r))return Jn(t,a,n,0),rt===null&&Kn(),!1}catch{}finally{}if(e=Cr(t,a,n,i),e!==null)return Wt(e,t,i),As(e,a,i),!0}return!1}function mo(t,a,e,i){if(i={lane:2,revertLane:$o(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ml(t)){if(a)throw Error(p(479))}else a=Cr(t,e,i,2),a!==null&&Wt(a,t,2)}function ml(t){var a=t.alternate;return t===q||a!==null&&a===q}function ws(t,a){hi=ul=!0;var e=t.pending;e===null?a.next=a:(a.next=e.next,e.next=a),t.pending=a}function As(t,a,e){if((e&4194048)!==0){var i=a.lanes;i&=t.pendingLanes,e|=i,a.lanes=e,Du(t,e)}}var rn={readContext:qt,use:dl,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt};rn.useEffectEvent=xt;var Ts={readContext:qt,use:dl,useCallback:function(t,a){return Xt().memoizedState=[t,a===void 0?null:a],t},useContext:qt,useEffect:us,useImperativeHandle:function(t,a,e){e=e!=null?e.concat([t]):null,gl(4194308,4,fs.bind(null,a,t),e)},useLayoutEffect:function(t,a){return gl(4194308,4,t,a)},useInsertionEffect:function(t,a){gl(4,2,t,a)},useMemo:function(t,a){var e=Xt();a=a===void 0?null:a;var i=t();if(_e){Ia(!0);try{t()}finally{Ia(!1)}}return e.memoizedState=[i,a],i},useReducer:function(t,a,e){var i=Xt();if(e!==void 0){var n=e(a);if(_e){Ia(!0);try{e(a)}finally{Ia(!1)}}}else n=a;return i.memoizedState=i.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},i.queue=t,t=t.dispatch=pg.bind(null,q,t),[i.memoizedState,t]},useRef:function(t){var a=Xt();return t={current:t},a.memoizedState=t},useState:function(t){t=oo(t);var a=t.queue,e=zs.bind(null,q,a);return a.dispatch=e,[t.memoizedState,e]},useDebugValue:so,useDeferredValue:function(t,a){var e=Xt();return fo(e,t,a)},useTransition:function(){var t=oo(!1);return t=bs.bind(null,q,t.queue,!0,!1),Xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,e){var i=q,n=Xt();if($){if(e===void 0)throw Error(p(407));e=e()}else{if(e=a(),rt===null)throw Error(p(349));(V&127)!==0||Zc(i,a,e)}n.memoizedState=e;var l={value:e,getSnapshot:a};return n.queue=l,us(Kc.bind(null,i,l,t),[t]),i.flags|=2048,vi(9,{destroy:void 0},$c.bind(null,i,l,e,a),null),e},useId:function(){var t=Xt(),a=rt.identifierPrefix;if($){var e=Ma,i=ja;e=(i&~(1<<32-ta(i)-1)).toString(32)+e,a="_"+a+"R_"+e,e=cl++,0<e&&(a+="H"+e.toString(32)),a+="_"}else e=og++,a="_"+a+"r_"+e.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:po,useFormState:is,useActionState:is,useOptimistic:function(t){var a=Xt();a.memoizedState=a.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=e,a=mo.bind(null,q,!0,e),e.dispatch=a,[t,a]},useMemoCache:no,useCacheRefresh:function(){return Xt().memoizedState=gg.bind(null,q)},useEffectEvent:function(t){var a=Xt(),e={impl:t};return a.memoizedState=e,function(){if((P&2)!==0)throw Error(p(440));return e.impl.apply(void 0,arguments)}}},ho={readContext:qt,use:dl,useCallback:ps,useContext:qt,useEffect:co,useImperativeHandle:gs,useInsertionEffect:ss,useLayoutEffect:ds,useMemo:ms,useReducer:fl,useRef:os,useState:function(){return fl(Ra)},useDebugValue:so,useDeferredValue:function(t,a){var e=At();return hs(e,it.memoizedState,t,a)},useTransition:function(){var t=fl(Ra)[0],a=At().memoizedState;return[typeof t=="boolean"?t:nn(t),a]},useSyncExternalStore:Vc,useId:xs,useHostTransitionStatus:po,useFormState:ns,useActionState:ns,useOptimistic:function(t,a){var e=At();return Fc(e,it,t,a)},useMemoCache:no,useCacheRefresh:Ss};ho.useEffectEvent=cs;var Es={readContext:qt,use:dl,useCallback:ps,useContext:qt,useEffect:co,useImperativeHandle:gs,useInsertionEffect:ss,useLayoutEffect:ds,useMemo:ms,useReducer:ro,useRef:os,useState:function(){return ro(Ra)},useDebugValue:so,useDeferredValue:function(t,a){var e=At();return it===null?fo(e,t,a):hs(e,it.memoizedState,t,a)},useTransition:function(){var t=ro(Ra)[0],a=At().memoizedState;return[typeof t=="boolean"?t:nn(t),a]},useSyncExternalStore:Vc,useId:xs,useHostTransitionStatus:po,useFormState:rs,useActionState:rs,useOptimistic:function(t,a){var e=At();return it!==null?Fc(e,it,t,a):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:no,useCacheRefresh:Ss};Es.useEffectEvent=cs;function bo(t,a,e,i){a=t.memoizedState,e=e(i,a),e=e==null?a:D({},a,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var vo={enqueueSetState:function(t,a,e){t=t._reactInternals;var i=oa(),n=re(i);n.payload=a,e!=null&&(n.callback=e),a=oe(t,n,i),a!==null&&(Wt(a,t,i),Pi(a,t,i))},enqueueReplaceState:function(t,a,e){t=t._reactInternals;var i=oa(),n=re(i);n.tag=1,n.payload=a,e!=null&&(n.callback=e),a=oe(t,n,i),a!==null&&(Wt(a,t,i),Pi(a,t,i))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var e=oa(),i=re(e);i.tag=2,a!=null&&(i.callback=a),a=oe(t,i,e),a!==null&&(Wt(a,t,e),Pi(a,t,e))}};function js(t,a,e,i,n,l,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,l,r):a.prototype&&a.prototype.isPureReactComponent?!Vi(e,i)||!Vi(n,l):!0}function Ms(t,a,e,i){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(e,i),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(e,i),a.state!==t&&vo.enqueueReplaceState(a,a.state,null)}function Re(t,a){var e=a;if("ref"in a){e={};for(var i in a)i!=="ref"&&(e[i]=a[i])}if(t=t.defaultProps){e===a&&(e=D({},e));for(var n in t)e[n]===void 0&&(e[n]=t[n])}return e}function Ds(t){$n(t)}function ks(t){console.error(t)}function Cs(t){$n(t)}function hl(t,a){try{var e=t.onUncaughtError;e(a.value,{componentStack:a.stack})}catch(i){setTimeout(function(){throw i})}}function Os(t,a,e){try{var i=t.onCaughtError;i(e.value,{componentStack:e.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function yo(t,a,e){return e=re(e),e.tag=3,e.payload={element:null},e.callback=function(){hl(t,a)},e}function Hs(t){return t=re(t),t.tag=3,t}function Bs(t,a,e,i){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=i.value;t.payload=function(){return n(l)},t.callback=function(){Os(a,e,i)}}var r=e.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Os(a,e,i),typeof n!="function"&&(ge===null?ge=new Set([this]):ge.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function mg(t,a,e,i,n){if(e.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(a=e.alternate,a!==null&&si(a,e,n,!0),e=ia.current,e!==null){switch(e.tag){case 31:case 13:return ba===null?Ml():e.alternate===null&&St===0&&(St=3),e.flags&=-257,e.flags|=65536,e.lanes=n,i===il?e.flags|=16384:(a=e.updateQueue,a===null?e.updateQueue=new Set([i]):a.add(i),Qo(t,i,n)),!1;case 22:return e.flags|=65536,i===il?e.flags|=16384:(a=e.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([i])},e.updateQueue=a):(e=a.retryQueue,e===null?a.retryQueue=new Set([i]):e.add(i)),Qo(t,i,n)),!1}throw Error(p(435,e.tag))}return Qo(t,i,n),Ml(),!1}if($)return a=ia.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,i!==Gr&&(t=Error(p(422),{cause:i}),Ki(ga(t,e)))):(i!==Gr&&(a=Error(p(423),{cause:i}),Ki(ga(a,e))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,i=ga(i,e),n=yo(t.stateNode,i,n),Kr(t,n),St!==4&&(St=2)),!1;var l=Error(p(520),{cause:i});if(l=ga(l,e),pn===null?pn=[l]:pn.push(l),St!==4&&(St=2),a===null)return!0;i=ga(i,e),e=a;do{switch(e.tag){case 3:return e.flags|=65536,t=n&-n,e.lanes|=t,t=yo(e.stateNode,i,t),Kr(e,t),!1;case 1:if(a=e.type,l=e.stateNode,(e.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ge===null||!ge.has(l))))return e.flags|=65536,n&=-n,e.lanes|=n,n=Hs(n),Bs(n,t,e,i),Kr(e,n),!1}e=e.return}while(e!==null);return!1}var xo=Error(p(461)),jt=!1;function _t(t,a,e,i){a.child=t===null?qc(a,null,e,i):qe(a,t.child,e,i)}function Us(t,a,e,i,n){e=e.render;var l=a.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Be(a),i=to(t,a,e,r,l,n),o=ao(),t!==null&&!jt?(eo(t,a,n),Ya(t,a,n)):($&&o&&Ur(a),a.flags|=1,_t(t,a,i,n),a.child)}function Ns(t,a,e,i,n){if(t===null){var l=e.type;return typeof l=="function"&&!Or(l)&&l.defaultProps===void 0&&e.compare===null?(a.tag=15,a.type=l,Gs(t,a,l,i,n)):(t=Fn(e.type,null,i,a,a.mode,n),t.ref=a.ref,t.return=a,a.child=t)}if(l=t.child,!Mo(t,n)){var r=l.memoizedProps;if(e=e.compare,e=e!==null?e:Vi,e(r,i)&&t.ref===a.ref)return Ya(t,a,n)}return a.flags|=1,t=Ua(l,i),t.ref=a.ref,t.return=a,a.child=t}function Gs(t,a,e,i,n){if(t!==null){var l=t.memoizedProps;if(Vi(l,i)&&t.ref===a.ref)if(jt=!1,a.pendingProps=i=l,Mo(t,n))(t.flags&131072)!==0&&(jt=!0);else return a.lanes=t.lanes,Ya(t,a,n)}return So(t,a,e,i,n)}function qs(t,a,e,i){var n=i.children,l=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((a.flags&128)!==0){if(l=l!==null?l.baseLanes|e:e,t!==null){for(i=a.child=t.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~l}else i=0,a.child=null;return _s(t,a,l,e,i)}if((e&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(a,l!==null?l.cachePool:null),l!==null?Yc(a,l):Wr(),Xc(a);else return i=a.lanes=536870912,_s(t,a,l!==null?l.baseLanes|e:e,e,i)}else l!==null?(al(a,l.cachePool),Yc(a,l),ce(),a.memoizedState=null):(t!==null&&al(a,null),Wr(),ce());return _t(t,a,n,e),a.child}function on(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function _s(t,a,e,i,n){var l=Qr();return l=l===null?null:{parent:Tt._currentValue,pool:l},a.memoizedState={baseLanes:e,cachePool:l},t!==null&&al(a,null),Wr(),Xc(a),t!==null&&si(t,a,i,!0),a.childLanes=n,null}function bl(t,a){return a=yl({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function Rs(t,a,e){return qe(a,t.child,null,e),t=bl(a,a.pendingProps),t.flags|=2,na(a),a.memoizedState=null,t}function hg(t,a,e){var i=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,t===null){if($){if(i.mode==="hidden")return t=bl(a,i),a.lanes=536870912,on(null,t);if(Ir(a),(t=gt)?(t=Id(t,ha),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:ae!==null?{id:ja,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},e=wc(t),e.return=a,a.child=e,Gt=a,gt=null)):t=null,t===null)throw ie(a);return a.lanes=536870912,null}return bl(a,i)}var l=t.memoizedState;if(l!==null){var r=l.dehydrated;if(Ir(a),n)if(a.flags&256)a.flags&=-257,a=Rs(t,a,e);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(p(558));else if(jt||si(t,a,e,!1),n=(e&t.childLanes)!==0,jt||n){if(i=rt,i!==null&&(r=ku(i,e),r!==0&&r!==l.retryLane))throw l.retryLane=r,ke(t,r),Wt(i,t,r),xo;Ml(),a=Rs(t,a,e)}else t=l.treeContext,gt=va(r.nextSibling),Gt=a,$=!0,ee=null,ha=!1,t!==null&&Ec(a,t),a=bl(a,i),a.flags|=4096;return a}return t=Ua(t.child,{mode:i.mode,children:i.children}),t.ref=a.ref,a.child=t,t.return=a,t}function vl(t,a){var e=a.ref;if(e===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(p(284));(t===null||t.ref!==e)&&(a.flags|=4194816)}}function So(t,a,e,i,n){return Be(a),e=to(t,a,e,i,void 0,n),i=ao(),t!==null&&!jt?(eo(t,a,n),Ya(t,a,n)):($&&i&&Ur(a),a.flags|=1,_t(t,a,e,n),a.child)}function Ys(t,a,e,i,n,l){return Be(a),a.updateQueue=null,e=Qc(a,i,e,n),Lc(t),i=ao(),t!==null&&!jt?(eo(t,a,l),Ya(t,a,l)):($&&i&&Ur(a),a.flags|=1,_t(t,a,e,l),a.child)}function Xs(t,a,e,i,n){if(Be(a),a.stateNode===null){var l=ri,r=e.contextType;typeof r=="object"&&r!==null&&(l=qt(r)),l=new e(i,l),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=vo,a.stateNode=l,l._reactInternals=a,l=a.stateNode,l.props=i,l.state=a.memoizedState,l.refs={},Zr(a),r=e.contextType,l.context=typeof r=="object"&&r!==null?qt(r):ri,l.state=a.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(bo(a,e,r,i),l.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&vo.enqueueReplaceState(l,l.state,null),an(a,i,l,n),tn(),l.state=a.memoizedState),typeof l.componentDidMount=="function"&&(a.flags|=4194308),i=!0}else if(t===null){l=a.stateNode;var o=a.memoizedProps,c=Re(e,o);l.props=c;var h=l.context,x=e.contextType;r=ri,typeof x=="object"&&x!==null&&(r=qt(x));var w=e.getDerivedStateFromProps;x=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||h!==r)&&Ms(a,l,i,r),le=!1;var b=a.memoizedState;l.state=b,an(a,i,l,n),tn(),h=a.memoizedState,o||b!==h||le?(typeof w=="function"&&(bo(a,e,w,i),h=a.memoizedState),(c=le||js(a,e,c,i,b,h,r))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(a.flags|=4194308)):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=i,a.memoizedState=h),l.props=i,l.state=h,l.context=r,i=c):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),i=!1)}else{l=a.stateNode,$r(t,a),r=a.memoizedProps,x=Re(e,r),l.props=x,w=a.pendingProps,b=l.context,h=e.contextType,c=ri,typeof h=="object"&&h!==null&&(c=qt(h)),o=e.getDerivedStateFromProps,(h=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==w||b!==c)&&Ms(a,l,i,c),le=!1,b=a.memoizedState,l.state=b,an(a,i,l,n),tn();var y=a.memoizedState;r!==w||b!==y||le||t!==null&&t.dependencies!==null&&Pn(t.dependencies)?(typeof o=="function"&&(bo(a,e,o,i),y=a.memoizedState),(x=le||js(a,e,x,i,b,y,c)||t!==null&&t.dependencies!==null&&Pn(t.dependencies))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,y,c)),typeof l.componentDidUpdate=="function"&&(a.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(a.flags|=1024),a.memoizedProps=i,a.memoizedState=y),l.props=i,l.state=y,l.context=c,i=x):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(a.flags|=1024),i=!1)}return l=i,vl(t,a),i=(a.flags&128)!==0,l||i?(l=a.stateNode,e=i&&typeof e.getDerivedStateFromError!="function"?null:l.render(),a.flags|=1,t!==null&&i?(a.child=qe(a,t.child,null,n),a.child=qe(a,null,e,n)):_t(t,a,e,n),a.memoizedState=l.state,t=a.child):t=Ya(t,a,n),t}function Ls(t,a,e,i){return Oe(),a.flags|=256,_t(t,a,e,i),a.child}var zo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wo(t){return{baseLanes:t,cachePool:Oc()}}function Ao(t,a,e){return t=t!==null?t.childLanes&~e:0,a&&(t|=ra),t}function Qs(t,a,e){var i=a.pendingProps,n=!1,l=(a.flags&128)!==0,r;if((r=l)||(r=t!==null&&t.memoizedState===null?!1:(wt.current&2)!==0),r&&(n=!0,a.flags&=-129),r=(a.flags&32)!==0,a.flags&=-33,t===null){if($){if(n?ue(a):ce(),(t=gt)?(t=Id(t,ha),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:ae!==null?{id:ja,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},e=wc(t),e.return=a,a.child=e,Gt=a,gt=null)):t=null,t===null)throw ie(a);return ru(t)?a.lanes=32:a.lanes=536870912,null}var o=i.children;return i=i.fallback,n?(ce(),n=a.mode,o=yl({mode:"hidden",children:o},n),i=Ce(i,n,e,null),o.return=a,i.return=a,o.sibling=i,a.child=o,i=a.child,i.memoizedState=wo(e),i.childLanes=Ao(t,r,e),a.memoizedState=zo,on(null,i)):(ue(a),To(a,o))}var c=t.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(l)a.flags&256?(ue(a),a.flags&=-257,a=Eo(t,a,e)):a.memoizedState!==null?(ce(),a.child=t.child,a.flags|=128,a=null):(ce(),o=i.fallback,n=a.mode,i=yl({mode:"visible",children:i.children},n),o=Ce(o,n,e,null),o.flags|=2,i.return=a,o.return=a,i.sibling=o,a.child=i,qe(a,t.child,null,e),i=a.child,i.memoizedState=wo(e),i.childLanes=Ao(t,r,e),a.memoizedState=zo,a=on(null,i));else if(ue(a),ru(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var h=r.dgst;r=h,i=Error(p(419)),i.stack="",i.digest=r,Ki({value:i,source:null,stack:null}),a=Eo(t,a,e)}else if(jt||si(t,a,e,!1),r=(e&t.childLanes)!==0,jt||r){if(r=rt,r!==null&&(i=ku(r,e),i!==0&&i!==c.retryLane))throw c.retryLane=i,ke(t,i),Wt(r,t,i),xo;lu(o)||Ml(),a=Eo(t,a,e)}else lu(o)?(a.flags|=192,a.child=t.child,a=null):(t=c.treeContext,gt=va(o.nextSibling),Gt=a,$=!0,ee=null,ha=!1,t!==null&&Ec(a,t),a=To(a,i.children),a.flags|=4096);return a}return n?(ce(),o=i.fallback,n=a.mode,c=t.child,h=c.sibling,i=Ua(c,{mode:"hidden",children:i.children}),i.subtreeFlags=c.subtreeFlags&65011712,h!==null?o=Ua(h,o):(o=Ce(o,n,e,null),o.flags|=2),o.return=a,i.return=a,i.sibling=o,a.child=i,on(null,i),i=a.child,o=t.child.memoizedState,o===null?o=wo(e):(n=o.cachePool,n!==null?(c=Tt._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Oc(),o={baseLanes:o.baseLanes|e,cachePool:n}),i.memoizedState=o,i.childLanes=Ao(t,r,e),a.memoizedState=zo,on(t.child,i)):(ue(a),e=t.child,t=e.sibling,e=Ua(e,{mode:"visible",children:i.children}),e.return=a,e.sibling=null,t!==null&&(r=a.deletions,r===null?(a.deletions=[t],a.flags|=16):r.push(t)),a.child=e,a.memoizedState=null,e)}function To(t,a){return a=yl({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function yl(t,a){return t=ea(22,t,null,a),t.lanes=0,t}function Eo(t,a,e){return qe(a,t.child,null,e),t=To(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Vs(t,a,e){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a),Rr(t.return,a,e)}function jo(t,a,e,i,n,l){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:i,tail:e,tailMode:n,treeForkCount:l}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=e,r.tailMode=n,r.treeForkCount=l)}function Zs(t,a,e){var i=a.pendingProps,n=i.revealOrder,l=i.tail;i=i.children;var r=wt.current,o=(r&2)!==0;if(o?(r=r&1|2,a.flags|=128):r&=1,tt(wt,r),_t(t,a,i,e),i=$?$i:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vs(t,e,a);else if(t.tag===19)Vs(t,e,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(e=a.child,n=null;e!==null;)t=e.alternate,t!==null&&ol(t)===null&&(n=e),e=e.sibling;e=n,e===null?(n=a.child,a.child=null):(n=e.sibling,e.sibling=null),jo(a,!1,n,e,l,i);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=a.child,a.child=null;n!==null;){if(t=n.alternate,t!==null&&ol(t)===null){a.child=n;break}t=n.sibling,n.sibling=e,e=n,n=t}jo(a,!0,e,null,l,i);break;case"together":jo(a,!1,null,null,void 0,i);break;default:a.memoizedState=null}return a.child}function Ya(t,a,e){if(t!==null&&(a.dependencies=t.dependencies),fe|=a.lanes,(e&a.childLanes)===0)if(t!==null){if(si(t,a,e,!1),(e&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(p(153));if(a.child!==null){for(t=a.child,e=Ua(t,t.pendingProps),a.child=e,e.return=a;t.sibling!==null;)t=t.sibling,e=e.sibling=Ua(t,t.pendingProps),e.return=a;e.sibling=null}return a.child}function Mo(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Pn(t)))}function bg(t,a,e){switch(a.tag){case 3:kn(a,a.stateNode.containerInfo),ne(a,Tt,t.memoizedState.cache),Oe();break;case 27:case 5:Fl(a);break;case 4:kn(a,a.stateNode.containerInfo);break;case 10:ne(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ir(a),null;break;case 13:var i=a.memoizedState;if(i!==null)return i.dehydrated!==null?(ue(a),a.flags|=128,null):(e&a.child.childLanes)!==0?Qs(t,a,e):(ue(a),t=Ya(t,a,e),t!==null?t.sibling:null);ue(a);break;case 19:var n=(t.flags&128)!==0;if(i=(e&a.childLanes)!==0,i||(si(t,a,e,!1),i=(e&a.childLanes)!==0),n){if(i)return Zs(t,a,e);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(wt,wt.current),i)break;return null;case 22:return a.lanes=0,qs(t,a,e,a.pendingProps);case 24:ne(a,Tt,t.memoizedState.cache)}return Ya(t,a,e)}function $s(t,a,e){if(t!==null)if(t.memoizedProps!==a.pendingProps)jt=!0;else{if(!Mo(t,e)&&(a.flags&128)===0)return jt=!1,bg(t,a,e);jt=(t.flags&131072)!==0}else jt=!1,$&&(a.flags&1048576)!==0&&Tc(a,$i,a.index);switch(a.lanes=0,a.tag){case 16:t:{var i=a.pendingProps;if(t=Ne(a.elementType),a.type=t,typeof t=="function")Or(t)?(i=Re(t,i),a.tag=1,a=Xs(null,a,t,i,e)):(a.tag=0,a=So(null,a,t,i,e));else{if(t!=null){var n=t.$$typeof;if(n===kt){a.tag=11,a=Us(null,a,t,i,e);break t}else if(n===Sa){a.tag=14,a=Ns(null,a,t,i,e);break t}}throw a=Oi(t)||t,Error(p(306,a,""))}}return a;case 0:return So(t,a,a.type,a.pendingProps,e);case 1:return i=a.type,n=Re(i,a.pendingProps),Xs(t,a,i,n,e);case 3:t:{if(kn(a,a.stateNode.containerInfo),t===null)throw Error(p(387));i=a.pendingProps;var l=a.memoizedState;n=l.element,$r(t,a),an(a,i,null,e);var r=a.memoizedState;if(i=r.cache,ne(a,Tt,i),i!==l.cache&&Yr(a,[Tt],e,!0),tn(),i=r.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:r.cache},a.updateQueue.baseState=l,a.memoizedState=l,a.flags&256){a=Ls(t,a,i,e);break t}else if(i!==n){n=ga(Error(p(424)),a),Ki(n),a=Ls(t,a,i,e);break t}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gt=va(t.firstChild),Gt=a,$=!0,ee=null,ha=!0,e=qc(a,null,i,e),a.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Oe(),i===n){a=Ya(t,a,e);break t}_t(t,a,i,e)}a=a.child}return a;case 26:return vl(t,a),t===null?(e=lf(a.type,null,a.pendingProps,null))?a.memoizedState=e:$||(e=a.type,t=a.pendingProps,i=Ul(Fa.current).createElement(e),i[Nt]=a,i[Qt]=t,Rt(i,e,t),Ot(i),a.stateNode=i):a.memoizedState=lf(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Fl(a),t===null&&$&&(i=a.stateNode=af(a.type,a.pendingProps,Fa.current),Gt=a,ha=!0,n=gt,be(a.type)?(ou=n,gt=va(i.firstChild)):gt=n),_t(t,a,a.pendingProps.children,e),vl(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&$&&((n=i=gt)&&(i=$g(i,a.type,a.pendingProps,ha),i!==null?(a.stateNode=i,Gt=a,gt=va(i.firstChild),ha=!1,n=!0):n=!1),n||ie(a)),Fl(a),n=a.type,l=a.pendingProps,r=t!==null?t.memoizedProps:null,i=l.children,eu(n,l)?i=null:r!==null&&eu(n,r)&&(a.flags|=32),a.memoizedState!==null&&(n=to(t,a,ug,null,null,e),zn._currentValue=n),vl(t,a),_t(t,a,i,e),a.child;case 6:return t===null&&$&&((t=e=gt)&&(e=Kg(e,a.pendingProps,ha),e!==null?(a.stateNode=e,Gt=a,gt=null,t=!0):t=!1),t||ie(a)),null;case 13:return Qs(t,a,e);case 4:return kn(a,a.stateNode.containerInfo),i=a.pendingProps,t===null?a.child=qe(a,null,i,e):_t(t,a,i,e),a.child;case 11:return Us(t,a,a.type,a.pendingProps,e);case 7:return _t(t,a,a.pendingProps,e),a.child;case 8:return _t(t,a,a.pendingProps.children,e),a.child;case 12:return _t(t,a,a.pendingProps.children,e),a.child;case 10:return i=a.pendingProps,ne(a,a.type,i.value),_t(t,a,i.children,e),a.child;case 9:return n=a.type._context,i=a.pendingProps.children,Be(a),n=qt(n),i=i(n),a.flags|=1,_t(t,a,i,e),a.child;case 14:return Ns(t,a,a.type,a.pendingProps,e);case 15:return Gs(t,a,a.type,a.pendingProps,e);case 19:return Zs(t,a,e);case 31:return hg(t,a,e);case 22:return qs(t,a,e,a.pendingProps);case 24:return Be(a),i=qt(Tt),t===null?(n=Qr(),n===null&&(n=rt,l=Xr(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=e),n=l),a.memoizedState={parent:i,cache:n},Zr(a),ne(a,Tt,n)):((t.lanes&e)!==0&&($r(t,a),an(a,null,null,e),tn()),n=t.memoizedState,l=a.memoizedState,n.parent!==i?(n={parent:i,cache:i},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),ne(a,Tt,i)):(i=l.cache,ne(a,Tt,i),i!==n.cache&&Yr(a,[Tt],e,!0))),_t(t,a,a.pendingProps.children,e),a.child;case 29:throw a.pendingProps}throw Error(p(156,a.tag))}function Xa(t){t.flags|=4}function Do(t,a,e,i,n){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(xd())t.flags|=8192;else throw Ge=il,Vr}else t.flags&=-16777217}function Ks(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!sf(a))if(xd())t.flags|=8192;else throw Ge=il,Vr}function xl(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?ju():536870912,t.lanes|=a,zi|=a)}function un(t,a){if(!$)switch(t.tailMode){case"hidden":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function pt(t){var a=t.alternate!==null&&t.alternate.child===t.child,e=0,i=0;if(a)for(var n=t.child;n!==null;)e|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)e|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=e,a}function vg(t,a,e){var i=a.pendingProps;switch(Nr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(a),null;case 1:return pt(a),null;case 3:return e=a.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),qa(Tt),Ze(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(ci(a)?Xa(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,qr())),pt(a),null;case 26:var n=a.type,l=a.memoizedState;return t===null?(Xa(a),l!==null?(pt(a),Ks(a,l)):(pt(a),Do(a,n,null,i,e))):l?l!==t.memoizedState?(Xa(a),pt(a),Ks(a,l)):(pt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==i&&Xa(a),pt(a),Do(a,n,t,i,e)),null;case 27:if(Cn(a),e=Fa.current,n=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==i&&Xa(a);else{if(!i){if(a.stateNode===null)throw Error(p(166));return pt(a),null}t=Ct.current,ci(a)?jc(a):(t=af(n,i,e),a.stateNode=t,Xa(a))}return pt(a),null;case 5:if(Cn(a),n=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==i&&Xa(a);else{if(!i){if(a.stateNode===null)throw Error(p(166));return pt(a),null}if(l=Ct.current,ci(a))jc(a);else{var r=Ul(Fa.current);switch(l){case 1:l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=r.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?r.createElement(n,{is:i.is}):r.createElement(n)}}l[Nt]=a,l[Qt]=i;t:for(r=a.child;r!==null;){if(r.tag===5||r.tag===6)l.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break t;for(;r.sibling===null;){if(r.return===null||r.return===a)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}a.stateNode=l;t:switch(Rt(l,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Xa(a)}}return pt(a),Do(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,e),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==i&&Xa(a);else{if(typeof i!="string"&&a.stateNode===null)throw Error(p(166));if(t=Fa.current,ci(a)){if(t=a.stateNode,e=a.memoizedProps,i=null,n=Gt,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}t[Nt]=a,t=!!(t.nodeValue===e||i!==null&&i.suppressHydrationWarning===!0||Qd(t.nodeValue,e)),t||ie(a,!0)}else t=Ul(t).createTextNode(i),t[Nt]=a,a.stateNode=t}return pt(a),null;case 31:if(e=a.memoizedState,t===null||t.memoizedState!==null){if(i=ci(a),e!==null){if(t===null){if(!i)throw Error(p(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(557));t[Nt]=a}else Oe(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;pt(a),t=!1}else e=qr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return a.flags&256?(na(a),a):(na(a),null);if((a.flags&128)!==0)throw Error(p(558))}return pt(a),null;case 13:if(i=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ci(a),i!==null&&i.dehydrated!==null){if(t===null){if(!n)throw Error(p(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(p(317));n[Nt]=a}else Oe(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;pt(a),n=!1}else n=qr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(na(a),a):(na(a),null)}return na(a),(a.flags&128)!==0?(a.lanes=e,a):(e=i!==null,t=t!==null&&t.memoizedState!==null,e&&(i=a.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==n&&(i.flags|=2048)),e!==t&&e&&(a.child.flags|=8192),xl(a,a.updateQueue),pt(a),null);case 4:return Ze(),t===null&&Fo(a.stateNode.containerInfo),pt(a),null;case 10:return qa(a.type),pt(a),null;case 19:if(yt(wt),i=a.memoizedState,i===null)return pt(a),null;if(n=(a.flags&128)!==0,l=i.rendering,l===null)if(n)un(i,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(l=ol(t),l!==null){for(a.flags|=128,un(i,!1),t=l.updateQueue,a.updateQueue=t,xl(a,t),a.subtreeFlags=0,t=e,e=a.child;e!==null;)zc(e,t),e=e.sibling;return tt(wt,wt.current&1|2),$&&Na(a,i.treeForkCount),a.child}t=t.sibling}i.tail!==null&&It()>Tl&&(a.flags|=128,n=!0,un(i,!1),a.lanes=4194304)}else{if(!n)if(t=ol(l),t!==null){if(a.flags|=128,n=!0,t=t.updateQueue,a.updateQueue=t,xl(a,t),un(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!$)return pt(a),null}else 2*It()-i.renderingStartTime>Tl&&e!==536870912&&(a.flags|=128,n=!0,un(i,!1),a.lanes=4194304);i.isBackwards?(l.sibling=a.child,a.child=l):(t=i.last,t!==null?t.sibling=l:a.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=It(),t.sibling=null,e=wt.current,tt(wt,n?e&1|2:e&1),$&&Na(a,i.treeForkCount),t):(pt(a),null);case 22:case 23:return na(a),Fr(),i=a.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(a.flags|=8192):i&&(a.flags|=8192),i?(e&536870912)!==0&&(a.flags&128)===0&&(pt(a),a.subtreeFlags&6&&(a.flags|=8192)):pt(a),e=a.updateQueue,e!==null&&xl(a,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==e&&(a.flags|=2048),t!==null&&yt(Ue),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),qa(Tt),pt(a),null;case 25:return null;case 30:return null}throw Error(p(156,a.tag))}function yg(t,a){switch(Nr(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return qa(Tt),Ze(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Cn(a),null;case 31:if(a.memoizedState!==null){if(na(a),a.alternate===null)throw Error(p(340));Oe()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(na(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(p(340));Oe()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return yt(wt),null;case 4:return Ze(),null;case 10:return qa(a.type),null;case 22:case 23:return na(a),Fr(),t!==null&&yt(Ue),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return qa(Tt),null;case 25:return null;default:return null}}function Js(t,a){switch(Nr(a),a.tag){case 3:qa(Tt),Ze();break;case 26:case 27:case 5:Cn(a);break;case 4:Ze();break;case 31:a.memoizedState!==null&&na(a);break;case 13:na(a);break;case 19:yt(wt);break;case 10:qa(a.type);break;case 22:case 23:na(a),Fr(),t!==null&&yt(Ue);break;case 24:qa(Tt)}}function cn(t,a){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){i=void 0;var l=e.create,r=e.inst;i=l(),r.destroy=i}e=e.next}while(e!==n)}}catch(o){et(a,a.return,o)}}function se(t,a,e){try{var i=a.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var l=n.next;i=l;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=a;var c=e,h=o;try{h()}catch(x){et(n,c,x)}}}i=i.next}while(i!==l)}}catch(x){et(a,a.return,x)}}function Ws(t){var a=t.updateQueue;if(a!==null){var e=t.stateNode;try{Rc(a,e)}catch(i){et(t,t.return,i)}}}function Fs(t,a,e){e.props=Re(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(i){et(t,a,i)}}function sn(t,a){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof e=="function"?t.refCleanup=e(i):e.current=i}}catch(n){et(t,a,n)}}function Da(t,a){var e=t.ref,i=t.refCleanup;if(e!==null)if(typeof i=="function")try{i()}catch(n){et(t,a,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){et(t,a,n)}else e.current=null}function Is(t){var a=t.type,e=t.memoizedProps,i=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":e.autoFocus&&i.focus();break t;case"img":e.src?i.src=e.src:e.srcSet&&(i.srcset=e.srcSet)}}catch(n){et(t,t.return,n)}}function ko(t,a,e){try{var i=t.stateNode;Yg(i,t.type,e,a),i[Qt]=a}catch(n){et(t,t.return,n)}}function Ps(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&be(t.type)||t.tag===4}function Co(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ps(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&be(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oo(t,a,e){var i=t.tag;if(i===5||i===6)t=t.stateNode,a?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,a):(a=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.appendChild(t),e=e._reactRootContainer,e!=null||a.onclick!==null||(a.onclick=Ha));else if(i!==4&&(i===27&&be(t.type)&&(e=t.stateNode,a=null),t=t.child,t!==null))for(Oo(t,a,e),t=t.sibling;t!==null;)Oo(t,a,e),t=t.sibling}function Sl(t,a,e){var i=t.tag;if(i===5||i===6)t=t.stateNode,a?e.insertBefore(t,a):e.appendChild(t);else if(i!==4&&(i===27&&be(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(Sl(t,a,e),t=t.sibling;t!==null;)Sl(t,a,e),t=t.sibling}function td(t){var a=t.stateNode,e=t.memoizedProps;try{for(var i=t.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Rt(a,i,e),a[Nt]=t,a[Qt]=e}catch(l){et(t,t.return,l)}}var La=!1,Mt=!1,Ho=!1,ad=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function xg(t,a){if(t=t.containerInfo,tu=Xl,t=gc(t),Tr(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var i=e.getSelection&&e.getSelection();if(i&&i.rangeCount!==0){e=i.anchorNode;var n=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{e.nodeType,l.nodeType}catch{e=null;break t}var r=0,o=-1,c=-1,h=0,x=0,w=t,b=null;a:for(;;){for(var y;w!==e||n!==0&&w.nodeType!==3||(o=r+n),w!==l||i!==0&&w.nodeType!==3||(c=r+i),w.nodeType===3&&(r+=w.nodeValue.length),(y=w.firstChild)!==null;)b=w,w=y;for(;;){if(w===t)break a;if(b===e&&++h===n&&(o=r),b===l&&++x===i&&(c=r),(y=w.nextSibling)!==null)break;w=b,b=w.parentNode}w=y}e=o===-1||c===-1?null:{start:o,end:c}}else e=null}e=e||{start:0,end:0}}else e=null;for(au={focusedElem:t,selectionRange:e},Xl=!1,Ht=a;Ht!==null;)if(a=Ht,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Ht=t;else for(;Ht!==null;){switch(a=Ht,l=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)n=t[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,e=a,n=l.memoizedProps,l=l.memoizedState,i=e.stateNode;try{var k=Re(e.type,n);t=i.getSnapshotBeforeUpdate(k,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(U){et(e,e.return,U)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,e=t.nodeType,e===9)nu(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(p(163))}if(t=a.sibling,t!==null){t.return=a.return,Ht=t;break}Ht=a.return}}function ed(t,a,e){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Va(t,e),i&4&&cn(5,e);break;case 1:if(Va(t,e),i&4)if(t=e.stateNode,a===null)try{t.componentDidMount()}catch(r){et(e,e.return,r)}else{var n=Re(e.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(n,a,t.__reactInternalSnapshotBeforeUpdate)}catch(r){et(e,e.return,r)}}i&64&&Ws(e),i&512&&sn(e,e.return);break;case 3:if(Va(t,e),i&64&&(t=e.updateQueue,t!==null)){if(a=null,e.child!==null)switch(e.child.tag){case 27:case 5:a=e.child.stateNode;break;case 1:a=e.child.stateNode}try{Rc(t,a)}catch(r){et(e,e.return,r)}}break;case 27:a===null&&i&4&&td(e);case 26:case 5:Va(t,e),a===null&&i&4&&Is(e),i&512&&sn(e,e.return);break;case 12:Va(t,e);break;case 31:Va(t,e),i&4&&ld(t,e);break;case 13:Va(t,e),i&4&&rd(t,e),i&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=Dg.bind(null,e),Jg(t,e))));break;case 22:if(i=e.memoizedState!==null||La,!i){a=a!==null&&a.memoizedState!==null||Mt,n=La;var l=Mt;La=i,(Mt=a)&&!l?Za(t,e,(e.subtreeFlags&8772)!==0):Va(t,e),La=n,Mt=l}break;case 30:break;default:Va(t,e)}}function id(t){var a=t.alternate;a!==null&&(t.alternate=null,id(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&ur(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var bt=null,Zt=!1;function Qa(t,a,e){for(e=e.child;e!==null;)nd(t,a,e),e=e.sibling}function nd(t,a,e){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Hi,e)}catch{}switch(e.tag){case 26:Mt||Da(e,a),Qa(t,a,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Mt||Da(e,a);var i=bt,n=Zt;be(e.type)&&(bt=e.stateNode,Zt=!1),Qa(t,a,e),yn(e.stateNode),bt=i,Zt=n;break;case 5:Mt||Da(e,a);case 6:if(i=bt,n=Zt,bt=null,Qa(t,a,e),bt=i,Zt=n,bt!==null)if(Zt)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(e.stateNode)}catch(l){et(e,a,l)}else try{bt.removeChild(e.stateNode)}catch(l){et(e,a,l)}break;case 18:bt!==null&&(Zt?(t=bt,Wd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),ki(t)):Wd(bt,e.stateNode));break;case 4:i=bt,n=Zt,bt=e.stateNode.containerInfo,Zt=!0,Qa(t,a,e),bt=i,Zt=n;break;case 0:case 11:case 14:case 15:se(2,e,a),Mt||se(4,e,a),Qa(t,a,e);break;case 1:Mt||(Da(e,a),i=e.stateNode,typeof i.componentWillUnmount=="function"&&Fs(e,a,i)),Qa(t,a,e);break;case 21:Qa(t,a,e);break;case 22:Mt=(i=Mt)||e.memoizedState!==null,Qa(t,a,e),Mt=i;break;default:Qa(t,a,e)}}function ld(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ki(t)}catch(e){et(a,a.return,e)}}}function rd(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ki(t)}catch(e){et(a,a.return,e)}}function Sg(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new ad),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new ad),a;default:throw Error(p(435,t.tag))}}function zl(t,a){var e=Sg(t);a.forEach(function(i){if(!e.has(i)){e.add(i);var n=kg.bind(null,t,i);i.then(n,n)}})}function $t(t,a){var e=a.deletions;if(e!==null)for(var i=0;i<e.length;i++){var n=e[i],l=t,r=a,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(be(o.type)){bt=o.stateNode,Zt=!1;break t}break;case 5:bt=o.stateNode,Zt=!1;break t;case 3:case 4:bt=o.stateNode.containerInfo,Zt=!0;break t}o=o.return}if(bt===null)throw Error(p(160));nd(l,r,n),bt=null,Zt=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)od(a,t),a=a.sibling}var Aa=null;function od(t,a){var e=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$t(a,t),Kt(t),i&4&&(se(3,t,t.return),cn(3,t),se(5,t,t.return));break;case 1:$t(a,t),Kt(t),i&512&&(Mt||e===null||Da(e,e.return)),i&64&&La&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?i:e.concat(i))));break;case 26:var n=Aa;if($t(a,t),Kt(t),i&512&&(Mt||e===null||Da(e,e.return)),i&4){var l=e!==null?e.memoizedState:null;if(i=t.memoizedState,e===null)if(i===null)if(t.stateNode===null){t:{i=t.type,e=t.memoizedProps,n=n.ownerDocument||n;a:switch(i){case"title":l=n.getElementsByTagName("title")[0],(!l||l[Ni]||l[Nt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(i),n.head.insertBefore(l,n.querySelector("head > title"))),Rt(l,i,e),l[Nt]=t,Ot(l),i=l;break t;case"link":var r=uf("link","href",n).get(i+(e.href||""));if(r){for(var o=0;o<r.length;o++)if(l=r[o],l.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&l.getAttribute("rel")===(e.rel==null?null:e.rel)&&l.getAttribute("title")===(e.title==null?null:e.title)&&l.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){r.splice(o,1);break a}}l=n.createElement(i),Rt(l,i,e),n.head.appendChild(l);break;case"meta":if(r=uf("meta","content",n).get(i+(e.content||""))){for(o=0;o<r.length;o++)if(l=r[o],l.getAttribute("content")===(e.content==null?null:""+e.content)&&l.getAttribute("name")===(e.name==null?null:e.name)&&l.getAttribute("property")===(e.property==null?null:e.property)&&l.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&l.getAttribute("charset")===(e.charSet==null?null:e.charSet)){r.splice(o,1);break a}}l=n.createElement(i),Rt(l,i,e),n.head.appendChild(l);break;default:throw Error(p(468,i))}l[Nt]=t,Ot(l),i=l}t.stateNode=i}else cf(n,t.type,t.stateNode);else t.stateNode=of(n,i,t.memoizedProps);else l!==i?(l===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):l.count--,i===null?cf(n,t.type,t.stateNode):of(n,i,t.memoizedProps)):i===null&&t.stateNode!==null&&ko(t,t.memoizedProps,e.memoizedProps)}break;case 27:$t(a,t),Kt(t),i&512&&(Mt||e===null||Da(e,e.return)),e!==null&&i&4&&ko(t,t.memoizedProps,e.memoizedProps);break;case 5:if($t(a,t),Kt(t),i&512&&(Mt||e===null||Da(e,e.return)),t.flags&32){n=t.stateNode;try{Pe(n,"")}catch(k){et(t,t.return,k)}}i&4&&t.stateNode!=null&&(n=t.memoizedProps,ko(t,n,e!==null?e.memoizedProps:n)),i&1024&&(Ho=!0);break;case 6:if($t(a,t),Kt(t),i&4){if(t.stateNode===null)throw Error(p(162));i=t.memoizedProps,e=t.stateNode;try{e.nodeValue=i}catch(k){et(t,t.return,k)}}break;case 3:if(ql=null,n=Aa,Aa=Nl(a.containerInfo),$t(a,t),Aa=n,Kt(t),i&4&&e!==null&&e.memoizedState.isDehydrated)try{ki(a.containerInfo)}catch(k){et(t,t.return,k)}Ho&&(Ho=!1,ud(t));break;case 4:i=Aa,Aa=Nl(t.stateNode.containerInfo),$t(a,t),Kt(t),Aa=i;break;case 12:$t(a,t),Kt(t);break;case 31:$t(a,t),Kt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,zl(t,i)));break;case 13:$t(a,t),Kt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Al=It()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,zl(t,i)));break;case 22:n=t.memoizedState!==null;var c=e!==null&&e.memoizedState!==null,h=La,x=Mt;if(La=h||n,Mt=x||c,$t(a,t),Mt=x,La=h,Kt(t),i&8192)t:for(a=t.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(e===null||c||La||Mt||Ye(t)),e=null,a=t;;){if(a.tag===5||a.tag===26){if(e===null){c=e=a;try{if(l=c.stateNode,n)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=c.stateNode;var w=c.memoizedProps.style,b=w!=null&&w.hasOwnProperty("display")?w.display:null;o.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(k){et(c,c.return,k)}}}else if(a.tag===6){if(e===null){c=a;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(k){et(c,c.return,k)}}}else if(a.tag===18){if(e===null){c=a;try{var y=c.stateNode;n?Fd(y,!0):Fd(c.stateNode,!1)}catch(k){et(c,c.return,k)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;e===a&&(e=null),a=a.return}e===a&&(e=null),a.sibling.return=a.return,a=a.sibling}i&4&&(i=t.updateQueue,i!==null&&(e=i.retryQueue,e!==null&&(i.retryQueue=null,zl(t,e))));break;case 19:$t(a,t),Kt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,zl(t,i)));break;case 30:break;case 21:break;default:$t(a,t),Kt(t)}}function Kt(t){var a=t.flags;if(a&2){try{for(var e,i=t.return;i!==null;){if(Ps(i)){e=i;break}i=i.return}if(e==null)throw Error(p(160));switch(e.tag){case 27:var n=e.stateNode,l=Co(t);Sl(t,l,n);break;case 5:var r=e.stateNode;e.flags&32&&(Pe(r,""),e.flags&=-33);var o=Co(t);Sl(t,o,r);break;case 3:case 4:var c=e.stateNode.containerInfo,h=Co(t);Oo(t,h,c);break;default:throw Error(p(161))}}catch(x){et(t,t.return,x)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function ud(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;ud(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Va(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)ed(t,a.alternate,a),a=a.sibling}function Ye(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:se(4,a,a.return),Ye(a);break;case 1:Da(a,a.return);var e=a.stateNode;typeof e.componentWillUnmount=="function"&&Fs(a,a.return,e),Ye(a);break;case 27:yn(a.stateNode);case 26:case 5:Da(a,a.return),Ye(a);break;case 22:a.memoizedState===null&&Ye(a);break;case 30:Ye(a);break;default:Ye(a)}t=t.sibling}}function Za(t,a,e){for(e=e&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var i=a.alternate,n=t,l=a,r=l.flags;switch(l.tag){case 0:case 11:case 15:Za(n,l,e),cn(4,l);break;case 1:if(Za(n,l,e),i=l,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){et(i,i.return,h)}if(i=l,n=i.updateQueue,n!==null){var o=i.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)_c(c[n],o)}catch(h){et(i,i.return,h)}}e&&r&64&&Ws(l),sn(l,l.return);break;case 27:td(l);case 26:case 5:Za(n,l,e),e&&i===null&&r&4&&Is(l),sn(l,l.return);break;case 12:Za(n,l,e);break;case 31:Za(n,l,e),e&&r&4&&ld(n,l);break;case 13:Za(n,l,e),e&&r&4&&rd(n,l);break;case 22:l.memoizedState===null&&Za(n,l,e),sn(l,l.return);break;case 30:break;default:Za(n,l,e)}a=a.sibling}}function Bo(t,a){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Ji(e))}function Uo(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Ji(t))}function Ta(t,a,e,i){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)cd(t,a,e,i),a=a.sibling}function cd(t,a,e,i){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(t,a,e,i),n&2048&&cn(9,a);break;case 1:Ta(t,a,e,i);break;case 3:Ta(t,a,e,i),n&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Ji(t)));break;case 12:if(n&2048){Ta(t,a,e,i),t=a.stateNode;try{var l=a.memoizedProps,r=l.id,o=l.onPostCommit;typeof o=="function"&&o(r,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){et(a,a.return,c)}}else Ta(t,a,e,i);break;case 31:Ta(t,a,e,i);break;case 13:Ta(t,a,e,i);break;case 23:break;case 22:l=a.stateNode,r=a.alternate,a.memoizedState!==null?l._visibility&2?Ta(t,a,e,i):dn(t,a):l._visibility&2?Ta(t,a,e,i):(l._visibility|=2,yi(t,a,e,i,(a.subtreeFlags&10256)!==0||!1)),n&2048&&Bo(r,a);break;case 24:Ta(t,a,e,i),n&2048&&Uo(a.alternate,a);break;default:Ta(t,a,e,i)}}function yi(t,a,e,i,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var l=t,r=a,o=e,c=i,h=r.flags;switch(r.tag){case 0:case 11:case 15:yi(l,r,o,c,n),cn(8,r);break;case 23:break;case 22:var x=r.stateNode;r.memoizedState!==null?x._visibility&2?yi(l,r,o,c,n):dn(l,r):(x._visibility|=2,yi(l,r,o,c,n)),n&&h&2048&&Bo(r.alternate,r);break;case 24:yi(l,r,o,c,n),n&&h&2048&&Uo(r.alternate,r);break;default:yi(l,r,o,c,n)}a=a.sibling}}function dn(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var e=t,i=a,n=i.flags;switch(i.tag){case 22:dn(e,i),n&2048&&Bo(i.alternate,i);break;case 24:dn(e,i),n&2048&&Uo(i.alternate,i);break;default:dn(e,i)}a=a.sibling}}var fn=8192;function xi(t,a,e){if(t.subtreeFlags&fn)for(t=t.child;t!==null;)sd(t,a,e),t=t.sibling}function sd(t,a,e){switch(t.tag){case 26:xi(t,a,e),t.flags&fn&&t.memoizedState!==null&&op(e,Aa,t.memoizedState,t.memoizedProps);break;case 5:xi(t,a,e);break;case 3:case 4:var i=Aa;Aa=Nl(t.stateNode.containerInfo),xi(t,a,e),Aa=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=fn,fn=16777216,xi(t,a,e),fn=i):xi(t,a,e));break;default:xi(t,a,e)}}function dd(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function gn(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var i=a[e];Ht=i,gd(i,t)}dd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fd(t),t=t.sibling}function fd(t){switch(t.tag){case 0:case 11:case 15:gn(t),t.flags&2048&&se(9,t,t.return);break;case 3:gn(t);break;case 12:gn(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,wl(t)):gn(t);break;default:gn(t)}}function wl(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var i=a[e];Ht=i,gd(i,t)}dd(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:se(8,a,a.return),wl(a);break;case 22:e=a.stateNode,e._visibility&2&&(e._visibility&=-3,wl(a));break;default:wl(a)}t=t.sibling}}function gd(t,a){for(;Ht!==null;){var e=Ht;switch(e.tag){case 0:case 11:case 15:se(8,e,a);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var i=e.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ji(e.memoizedState.cache)}if(i=e.child,i!==null)i.return=e,Ht=i;else t:for(e=t;Ht!==null;){i=Ht;var n=i.sibling,l=i.return;if(id(i),i===e){Ht=null;break t}if(n!==null){n.return=l,Ht=n;break t}Ht=l}}}var zg={getCacheForType:function(t){var a=qt(Tt),e=a.data.get(t);return e===void 0&&(e=t(),a.data.set(t,e)),e},cacheSignal:function(){return qt(Tt).controller.signal}},wg=typeof WeakMap=="function"?WeakMap:Map,P=0,rt=null,L=null,V=0,at=0,la=null,de=!1,Si=!1,No=!1,$a=0,St=0,fe=0,Xe=0,Go=0,ra=0,zi=0,pn=null,Jt=null,qo=!1,Al=0,pd=0,Tl=1/0,El=null,ge=null,Dt=0,pe=null,wi=null,Ka=0,_o=0,Ro=null,md=null,mn=0,Yo=null;function oa(){return(P&2)!==0&&V!==0?V&-V:z.T!==null?$o():Cu()}function hd(){if(ra===0)if((V&536870912)===0||$){var t=Bn;Bn<<=1,(Bn&3932160)===0&&(Bn=262144),ra=t}else ra=536870912;return t=ia.current,t!==null&&(t.flags|=32),ra}function Wt(t,a,e){(t===rt&&(at===2||at===9)||t.cancelPendingCommit!==null)&&(Ai(t,0),me(t,V,ra,!1)),Ui(t,e),((P&2)===0||t!==rt)&&(t===rt&&((P&2)===0&&(Xe|=e),St===4&&me(t,V,ra,!1)),ka(t))}function bd(t,a,e){if((P&6)!==0)throw Error(p(327));var i=!e&&(a&127)===0&&(a&t.expiredLanes)===0||Bi(t,a),n=i?Eg(t,a):Lo(t,a,!0),l=i;do{if(n===0){Si&&!i&&me(t,a,0,!1);break}else{if(e=t.current.alternate,l&&!Ag(e)){n=Lo(t,a,!1),l=!1;continue}if(n===2){if(l=a,t.errorRecoveryDisabledLanes&l)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){a=r;t:{var o=t;n=pn;var c=o.current.memoizedState.isDehydrated;if(c&&(Ai(o,r).flags|=256),r=Lo(o,r,!1),r!==2){if(No&&!c){o.errorRecoveryDisabledLanes|=l,Xe|=l,n=4;break t}l=Jt,Jt=n,l!==null&&(Jt===null?Jt=l:Jt.push.apply(Jt,l))}n=r}if(l=!1,n!==2)continue}}if(n===1){Ai(t,0),me(t,a,0,!0);break}t:{switch(i=t,l=n,l){case 0:case 1:throw Error(p(345));case 4:if((a&4194048)!==a)break;case 6:me(i,a,ra,!de);break t;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((a&62914560)===a&&(n=Al+300-It(),10<n)){if(me(i,a,ra,!de),Nn(i,0,!0)!==0)break t;Ka=a,i.timeoutHandle=Kd(vd.bind(null,i,e,Jt,El,qo,a,ra,Xe,zi,de,l,"Throttled",-0,0),n);break t}vd(i,e,Jt,El,qo,a,ra,Xe,zi,de,l,null,-0,0)}}break}while(!0);ka(t)}function vd(t,a,e,i,n,l,r,o,c,h,x,w,b,y){if(t.timeoutHandle=-1,w=a.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ha},sd(a,l,w);var k=(l&62914560)===l?Al-It():(l&4194048)===l?pd-It():0;if(k=up(w,k),k!==null){Ka=l,t.cancelPendingCommit=k(Ed.bind(null,t,a,l,e,i,n,r,o,c,x,w,null,b,y)),me(t,l,r,!h);return}}Ed(t,a,l,e,i,n,r,o,c)}function Ag(t){for(var a=t;;){var e=a.tag;if((e===0||e===11||e===15)&&a.flags&16384&&(e=a.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var i=0;i<e.length;i++){var n=e[i],l=n.getSnapshot;n=n.value;try{if(!aa(l(),n))return!1}catch{return!1}}if(e=a.child,a.subtreeFlags&16384&&e!==null)e.return=a,a=e;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function me(t,a,e,i){a&=~Go,a&=~Xe,t.suspendedLanes|=a,t.pingedLanes&=~a,i&&(t.warmLanes|=a),i=t.expirationTimes;for(var n=a;0<n;){var l=31-ta(n),r=1<<l;i[l]=-1,n&=~r}e!==0&&Mu(t,e,a)}function jl(){return(P&6)===0?(hn(0),!1):!0}function Xo(){if(L!==null){if(at===0)var t=L.return;else t=L,Ga=He=null,io(t),pi=null,Fi=0,t=L;for(;t!==null;)Js(t.alternate,t),t=t.return;L=null}}function Ai(t,a){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,Qg(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Ka=0,Xo(),rt=t,L=e=Ua(t.current,null),V=a,at=0,la=null,de=!1,Si=Bi(t,a),No=!1,zi=ra=Go=Xe=fe=St=0,Jt=pn=null,qo=!1,(a&8)!==0&&(a|=a&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=a;0<i;){var n=31-ta(i),l=1<<n;a|=t[n],i&=~l}return $a=a,Kn(),e}function yd(t,a){q=null,z.H=rn,a===gi||a===el?(a=Uc(),at=3):a===Vr?(a=Uc(),at=4):at=a===xo?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,la=a,L===null&&(St=1,hl(t,ga(a,t.current)))}function xd(){var t=ia.current;return t===null?!0:(V&4194048)===V?ba===null:(V&62914560)===V||(V&536870912)!==0?t===ba:!1}function Sd(){var t=z.H;return z.H=rn,t===null?rn:t}function zd(){var t=z.A;return z.A=zg,t}function Ml(){St=4,de||(V&4194048)!==V&&ia.current!==null||(Si=!0),(fe&134217727)===0&&(Xe&134217727)===0||rt===null||me(rt,V,ra,!1)}function Lo(t,a,e){var i=P;P|=2;var n=Sd(),l=zd();(rt!==t||V!==a)&&(El=null,Ai(t,a)),a=!1;var r=St;t:do try{if(at!==0&&L!==null){var o=L,c=la;switch(at){case 8:Xo(),r=6;break t;case 3:case 2:case 9:case 6:ia.current===null&&(a=!0);var h=at;if(at=0,la=null,Ti(t,o,c,h),e&&Si){r=0;break t}break;default:h=at,at=0,la=null,Ti(t,o,c,h)}}Tg(),r=St;break}catch(x){yd(t,x)}while(!0);return a&&t.shellSuspendCounter++,Ga=He=null,P=i,z.H=n,z.A=l,L===null&&(rt=null,V=0,Kn()),r}function Tg(){for(;L!==null;)wd(L)}function Eg(t,a){var e=P;P|=2;var i=Sd(),n=zd();rt!==t||V!==a?(El=null,Tl=It()+500,Ai(t,a)):Si=Bi(t,a);t:do try{if(at!==0&&L!==null){a=L;var l=la;a:switch(at){case 1:at=0,la=null,Ti(t,a,l,1);break;case 2:case 9:if(Hc(l)){at=0,la=null,Ad(a);break}a=function(){at!==2&&at!==9||rt!==t||(at=7),ka(t)},l.then(a,a);break t;case 3:at=7;break t;case 4:at=5;break t;case 7:Hc(l)?(at=0,la=null,Ad(a)):(at=0,la=null,Ti(t,a,l,7));break;case 5:var r=null;switch(L.tag){case 26:r=L.memoizedState;case 5:case 27:var o=L;if(r?sf(r):o.stateNode.complete){at=0,la=null;var c=o.sibling;if(c!==null)L=c;else{var h=o.return;h!==null?(L=h,Dl(h)):L=null}break a}}at=0,la=null,Ti(t,a,l,5);break;case 6:at=0,la=null,Ti(t,a,l,6);break;case 8:Xo(),St=6;break t;default:throw Error(p(462))}}jg();break}catch(x){yd(t,x)}while(!0);return Ga=He=null,z.H=i,z.A=n,P=e,L!==null?0:(rt=null,V=0,Kn(),St)}function jg(){for(;L!==null&&!Wf();)wd(L)}function wd(t){var a=$s(t.alternate,t,$a);t.memoizedProps=t.pendingProps,a===null?Dl(t):L=a}function Ad(t){var a=t,e=a.alternate;switch(a.tag){case 15:case 0:a=Ys(e,a,a.pendingProps,a.type,void 0,V);break;case 11:a=Ys(e,a,a.pendingProps,a.type.render,a.ref,V);break;case 5:io(a);default:Js(e,a),a=L=zc(a,$a),a=$s(e,a,$a)}t.memoizedProps=t.pendingProps,a===null?Dl(t):L=a}function Ti(t,a,e,i){Ga=He=null,io(a),pi=null,Fi=0;var n=a.return;try{if(mg(t,n,a,e,V)){St=1,hl(t,ga(e,t.current)),L=null;return}}catch(l){if(n!==null)throw L=n,l;St=1,hl(t,ga(e,t.current)),L=null;return}a.flags&32768?($||i===1?t=!0:Si||(V&536870912)!==0?t=!1:(de=t=!0,(i===2||i===9||i===3||i===6)&&(i=ia.current,i!==null&&i.tag===13&&(i.flags|=16384))),Td(a,t)):Dl(a)}function Dl(t){var a=t;do{if((a.flags&32768)!==0){Td(a,de);return}t=a.return;var e=vg(a.alternate,a,$a);if(e!==null){L=e;return}if(a=a.sibling,a!==null){L=a;return}L=a=t}while(a!==null);St===0&&(St=5)}function Td(t,a){do{var e=yg(t.alternate,t);if(e!==null){e.flags&=32767,L=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!a&&(t=t.sibling,t!==null)){L=t;return}L=t=e}while(t!==null);St=6,L=null}function Ed(t,a,e,i,n,l,r,o,c){t.cancelPendingCommit=null;do kl();while(Dt!==0);if((P&6)!==0)throw Error(p(327));if(a!==null){if(a===t.current)throw Error(p(177));if(l=a.lanes|a.childLanes,l|=kr,r0(t,e,l,r,o,c),t===rt&&(L=rt=null,V=0),wi=a,pe=t,Ka=e,_o=l,Ro=n,md=i,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Cg(On,function(){return Cd(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,n=j.p,j.p=2,r=P,P|=4;try{xg(t,a,e)}finally{P=r,j.p=n,z.T=i}}Dt=1,jd(),Md(),Dd()}}function jd(){if(Dt===1){Dt=0;var t=pe,a=wi,e=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||e){e=z.T,z.T=null;var i=j.p;j.p=2;var n=P;P|=4;try{od(a,t);var l=au,r=gc(t.containerInfo),o=l.focusedElem,c=l.selectionRange;if(r!==o&&o&&o.ownerDocument&&fc(o.ownerDocument.documentElement,o)){if(c!==null&&Tr(o)){var h=c.start,x=c.end;if(x===void 0&&(x=h),"selectionStart"in o)o.selectionStart=h,o.selectionEnd=Math.min(x,o.value.length);else{var w=o.ownerDocument||document,b=w&&w.defaultView||window;if(b.getSelection){var y=b.getSelection(),k=o.textContent.length,U=Math.min(c.start,k),lt=c.end===void 0?U:Math.min(c.end,k);!y.extend&&U>lt&&(r=lt,lt=U,U=r);var f=dc(o,U),s=dc(o,lt);if(f&&s&&(y.rangeCount!==1||y.anchorNode!==f.node||y.anchorOffset!==f.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)){var m=w.createRange();m.setStart(f.node,f.offset),y.removeAllRanges(),U>lt?(y.addRange(m),y.extend(s.node,s.offset)):(m.setEnd(s.node,s.offset),y.addRange(m))}}}}for(w=[],y=o;y=y.parentNode;)y.nodeType===1&&w.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<w.length;o++){var S=w[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Xl=!!tu,au=tu=null}finally{P=n,j.p=i,z.T=e}}t.current=a,Dt=2}}function Md(){if(Dt===2){Dt=0;var t=pe,a=wi,e=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||e){e=z.T,z.T=null;var i=j.p;j.p=2;var n=P;P|=4;try{ed(t,a.alternate,a)}finally{P=n,j.p=i,z.T=e}}Dt=3}}function Dd(){if(Dt===4||Dt===3){Dt=0,Ff();var t=pe,a=wi,e=Ka,i=md;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Dt=5:(Dt=0,wi=pe=null,kd(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ge=null),rr(e),a=a.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Hi,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=z.T,n=j.p,j.p=2,z.T=null;try{for(var l=t.onRecoverableError,r=0;r<i.length;r++){var o=i[r];l(o.value,{componentStack:o.stack})}}finally{z.T=a,j.p=n}}(Ka&3)!==0&&kl(),ka(t),n=t.pendingLanes,(e&261930)!==0&&(n&42)!==0?t===Yo?mn++:(mn=0,Yo=t):mn=0,hn(0)}}function kd(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Ji(a)))}function kl(){return jd(),Md(),Dd(),Cd()}function Cd(){if(Dt!==5)return!1;var t=pe,a=_o;_o=0;var e=rr(Ka),i=z.T,n=j.p;try{j.p=32>e?32:e,z.T=null,e=Ro,Ro=null;var l=pe,r=Ka;if(Dt=0,wi=pe=null,Ka=0,(P&6)!==0)throw Error(p(331));var o=P;if(P|=4,fd(l.current),cd(l,l.current,r,e),P=o,hn(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Hi,l)}catch{}return!0}finally{j.p=n,z.T=i,kd(t,a)}}function Od(t,a,e){a=ga(e,a),a=yo(t.stateNode,a,2),t=oe(t,a,2),t!==null&&(Ui(t,2),ka(t))}function et(t,a,e){if(t.tag===3)Od(t,t,e);else for(;a!==null;){if(a.tag===3){Od(a,t,e);break}else if(a.tag===1){var i=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ge===null||!ge.has(i))){t=ga(e,t),e=Hs(2),i=oe(a,e,2),i!==null&&(Bs(e,i,a,t),Ui(i,2),ka(i));break}}a=a.return}}function Qo(t,a,e){var i=t.pingCache;if(i===null){i=t.pingCache=new wg;var n=new Set;i.set(a,n)}else n=i.get(a),n===void 0&&(n=new Set,i.set(a,n));n.has(e)||(No=!0,n.add(e),t=Mg.bind(null,t,a,e),a.then(t,t))}function Mg(t,a,e){var i=t.pingCache;i!==null&&i.delete(a),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,rt===t&&(V&e)===e&&(St===4||St===3&&(V&62914560)===V&&300>It()-Al?(P&2)===0&&Ai(t,0):Go|=e,zi===V&&(zi=0)),ka(t)}function Hd(t,a){a===0&&(a=ju()),t=ke(t,a),t!==null&&(Ui(t,a),ka(t))}function Dg(t){var a=t.memoizedState,e=0;a!==null&&(e=a.retryLane),Hd(t,e)}function kg(t,a){var e=0;switch(t.tag){case 31:case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(e=n.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(p(314))}i!==null&&i.delete(a),Hd(t,e)}function Cg(t,a){return er(t,a)}var Cl=null,Ei=null,Vo=!1,Ol=!1,Zo=!1,he=0;function ka(t){t!==Ei&&t.next===null&&(Ei===null?Cl=Ei=t:Ei=Ei.next=t),Ol=!0,Vo||(Vo=!0,Hg())}function hn(t,a){if(!Zo&&Ol){Zo=!0;do for(var e=!1,i=Cl;i!==null;){if(t!==0){var n=i.pendingLanes;if(n===0)var l=0;else{var r=i.suspendedLanes,o=i.pingedLanes;l=(1<<31-ta(42|t)+1)-1,l&=n&~(r&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(e=!0,Gd(i,l))}else l=V,l=Nn(i,i===rt?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Bi(i,l)||(e=!0,Gd(i,l));i=i.next}while(e);Zo=!1}}function Og(){Bd()}function Bd(){Ol=Vo=!1;var t=0;he!==0&&Lg()&&(t=he);for(var a=It(),e=null,i=Cl;i!==null;){var n=i.next,l=Ud(i,a);l===0?(i.next=null,e===null?Cl=n:e.next=n,n===null&&(Ei=e)):(e=i,(t!==0||(l&3)!==0)&&(Ol=!0)),i=n}Dt!==0&&Dt!==5||hn(t),he!==0&&(he=0)}function Ud(t,a){for(var e=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var r=31-ta(l),o=1<<r,c=n[r];c===-1?((o&e)===0||(o&i)!==0)&&(n[r]=l0(o,a)):c<=a&&(t.expiredLanes|=o),l&=~o}if(a=rt,e=V,e=Nn(t,t===a?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,e===0||t===a&&(at===2||at===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&ir(i),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Bi(t,e)){if(a=e&-e,a===t.callbackPriority)return a;switch(i!==null&&ir(i),rr(e)){case 2:case 8:e=Tu;break;case 32:e=On;break;case 268435456:e=Eu;break;default:e=On}return i=Nd.bind(null,t),e=er(e,i),t.callbackPriority=a,t.callbackNode=e,a}return i!==null&&i!==null&&ir(i),t.callbackPriority=2,t.callbackNode=null,2}function Nd(t,a){if(Dt!==0&&Dt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(kl()&&t.callbackNode!==e)return null;var i=V;return i=Nn(t,t===rt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(bd(t,i,a),Ud(t,It()),t.callbackNode!=null&&t.callbackNode===e?Nd.bind(null,t):null)}function Gd(t,a){if(kl())return null;bd(t,a,!0)}function Hg(){Vg(function(){(P&6)!==0?er(Au,Og):Bd()})}function $o(){if(he===0){var t=di;t===0&&(t=Hn,Hn<<=1,(Hn&261888)===0&&(Hn=256)),he=t}return he}function qd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rn(""+t)}function _d(t,a){var e=a.ownerDocument.createElement("input");return e.name=a.name,e.value=a.value,t.id&&e.setAttribute("form",t.id),a.parentNode.insertBefore(e,a),t=new FormData(t),e.parentNode.removeChild(e),t}function Bg(t,a,e,i,n){if(a==="submit"&&e&&e.stateNode===n){var l=qd((n[Qt]||null).action),r=i.submitter;r&&(a=(a=r[Qt]||null)?qd(a.formAction):r.getAttribute("formAction"),a!==null&&(l=a,r=null));var o=new Qn("action","action",null,i,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(he!==0){var c=r?_d(n,r):new FormData(n);go(e,{pending:!0,data:c,method:n.method,action:l},null,c)}}else typeof l=="function"&&(o.preventDefault(),c=r?_d(n,r):new FormData(n),go(e,{pending:!0,data:c,method:n.method,action:l},l,c))},currentTarget:n}]})}}for(var Ko=0;Ko<Dr.length;Ko++){var Jo=Dr[Ko],Ug=Jo.toLowerCase(),Ng=Jo[0].toUpperCase()+Jo.slice(1);wa(Ug,"on"+Ng)}wa(hc,"onAnimationEnd"),wa(bc,"onAnimationIteration"),wa(vc,"onAnimationStart"),wa("dblclick","onDoubleClick"),wa("focusin","onFocus"),wa("focusout","onBlur"),wa(I0,"onTransitionRun"),wa(P0,"onTransitionStart"),wa(tg,"onTransitionCancel"),wa(yc,"onTransitionEnd"),Fe("onMouseEnter",["mouseout","mouseover"]),Fe("onMouseLeave",["mouseout","mouseover"]),Fe("onPointerEnter",["pointerout","pointerover"]),Fe("onPointerLeave",["pointerout","pointerover"]),Ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));function Rd(t,a){a=(a&4)!==0;for(var e=0;e<t.length;e++){var i=t[e],n=i.event;i=i.listeners;t:{var l=void 0;if(a)for(var r=i.length-1;0<=r;r--){var o=i[r],c=o.instance,h=o.currentTarget;if(o=o.listener,c!==l&&n.isPropagationStopped())break t;l=o,n.currentTarget=h;try{l(n)}catch(x){$n(x)}n.currentTarget=null,l=c}else for(r=0;r<i.length;r++){if(o=i[r],c=o.instance,h=o.currentTarget,o=o.listener,c!==l&&n.isPropagationStopped())break t;l=o,n.currentTarget=h;try{l(n)}catch(x){$n(x)}n.currentTarget=null,l=c}}}}function Q(t,a){var e=a[or];e===void 0&&(e=a[or]=new Set);var i=t+"__bubble";e.has(i)||(Yd(a,t,2,!1),e.add(i))}function Wo(t,a,e){var i=0;a&&(i|=4),Yd(e,t,i,a)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[Hl]){t[Hl]=!0,Bu.forEach(function(e){e!=="selectionchange"&&(Gg.has(e)||Wo(e,!1,t),Wo(e,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Hl]||(a[Hl]=!0,Wo("selectionchange",!1,a))}}function Yd(t,a,e,i){switch(bf(a)){case 2:var n=dp;break;case 8:n=fp;break;default:n=fu}e=n.bind(null,a,e,t),n=void 0,!hr||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(a,e,{capture:!0,passive:n}):t.addEventListener(a,e,!0):n!==void 0?t.addEventListener(a,e,{passive:n}):t.addEventListener(a,e,!1)}function Io(t,a,e,i,n){var l=i;if((a&1)===0&&(a&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=i.return;r!==null;){var c=r.tag;if((c===3||c===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=Ke(o),r===null)return;if(c=r.tag,c===5||c===6||c===26||c===27){i=l=r;continue t}o=o.parentNode}}i=i.return}Zu(function(){var h=l,x=pr(e),w=[];t:{var b=xc.get(t);if(b!==void 0){var y=Qn,k=t;switch(t){case"keypress":if(Xn(e)===0)break t;case"keydown":case"keyup":y=k0;break;case"focusin":k="focus",y=xr;break;case"focusout":k="blur",y=xr;break;case"beforeblur":case"afterblur":y=xr;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=H0;break;case hc:case bc:case vc:y=S0;break;case yc:y=U0;break;case"scroll":case"scrollend":y=h0;break;case"wheel":y=G0;break;case"copy":case"cut":case"paste":y=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Fu;break;case"toggle":case"beforetoggle":y=_0}var U=(a&4)!==0,lt=!U&&(t==="scroll"||t==="scrollend"),f=U?b!==null?b+"Capture":null:b;U=[];for(var s=h,m;s!==null;){var S=s;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||f===null||(S=qi(s,f),S!=null&&U.push(vn(s,S,m))),lt)break;s=s.return}0<U.length&&(b=new y(b,k,null,e,x),w.push({event:b,listeners:U}))}}if((a&7)===0){t:{if(b=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",b&&e!==gr&&(k=e.relatedTarget||e.fromElement)&&(Ke(k)||k[$e]))break t;if((y||b)&&(b=x.window===x?x:(b=x.ownerDocument)?b.defaultView||b.parentWindow:window,y?(k=e.relatedTarget||e.toElement,y=h,k=k?Ke(k):null,k!==null&&(lt=C(k),U=k.tag,k!==lt||U!==5&&U!==27&&U!==6)&&(k=null)):(y=null,k=h),y!==k)){if(U=Ju,S="onMouseLeave",f="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(U=Fu,S="onPointerLeave",f="onPointerEnter",s="pointer"),lt=y==null?b:Gi(y),m=k==null?b:Gi(k),b=new U(S,s+"leave",y,e,x),b.target=lt,b.relatedTarget=m,S=null,Ke(x)===h&&(U=new U(f,s+"enter",k,e,x),U.target=m,U.relatedTarget=lt,S=U),lt=S,y&&k)a:{for(U=qg,f=y,s=k,m=0,S=f;S;S=U(S))m++;S=0;for(var B=s;B;B=U(B))S++;for(;0<m-S;)f=U(f),m--;for(;0<S-m;)s=U(s),S--;for(;m--;){if(f===s||s!==null&&f===s.alternate){U=f;break a}f=U(f),s=U(s)}U=null}else U=null;y!==null&&Xd(w,b,y,U,!1),k!==null&&lt!==null&&Xd(w,lt,k,U,!0)}}t:{if(b=h?Gi(h):window,y=b.nodeName&&b.nodeName.toLowerCase(),y==="select"||y==="input"&&b.type==="file")var W=lc;else if(ic(b))if(rc)W=J0;else{W=$0;var O=Z0}else y=b.nodeName,!y||y.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?h&&fr(h.elementType)&&(W=lc):W=K0;if(W&&(W=W(t,h))){nc(w,W,e,x);break t}O&&O(t,b,h),t==="focusout"&&h&&b.type==="number"&&h.memoizedProps.value!=null&&dr(b,"number",b.value)}switch(O=h?Gi(h):window,t){case"focusin":(ic(O)||O.contentEditable==="true")&&(ii=O,Er=h,Zi=null);break;case"focusout":Zi=Er=ii=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,pc(w,e,x);break;case"selectionchange":if(F0)break;case"keydown":case"keyup":pc(w,e,x)}var _;if(zr)t:{switch(t){case"compositionstart":var Z="onCompositionStart";break t;case"compositionend":Z="onCompositionEnd";break t;case"compositionupdate":Z="onCompositionUpdate";break t}Z=void 0}else ei?ac(t,e)&&(Z="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(Z="onCompositionStart");Z&&(Iu&&e.locale!=="ko"&&(ei||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&ei&&(_=$u()):(te=x,br="value"in te?te.value:te.textContent,ei=!0)),O=Bl(h,Z),0<O.length&&(Z=new Wu(Z,t,null,e,x),w.push({event:Z,listeners:O}),_?Z.data=_:(_=ec(e),_!==null&&(Z.data=_)))),(_=Y0?X0(t,e):L0(t,e))&&(Z=Bl(h,"onBeforeInput"),0<Z.length&&(O=new Wu("onBeforeInput","beforeinput",null,e,x),w.push({event:O,listeners:Z}),O.data=_)),Bg(w,t,h,e,x)}Rd(w,a)})}function vn(t,a,e){return{instance:t,listener:a,currentTarget:e}}function Bl(t,a){for(var e=a+"Capture",i=[];t!==null;){var n=t,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=qi(t,e),n!=null&&i.unshift(vn(t,n,l)),n=qi(t,a),n!=null&&i.push(vn(t,n,l))),t.tag===3)return i;t=t.return}return[]}function qg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xd(t,a,e,i,n){for(var l=a._reactName,r=[];e!==null&&e!==i;){var o=e,c=o.alternate,h=o.stateNode;if(o=o.tag,c!==null&&c===i)break;o!==5&&o!==26&&o!==27||h===null||(c=h,n?(h=qi(e,l),h!=null&&r.unshift(vn(e,h,c))):n||(h=qi(e,l),h!=null&&r.push(vn(e,h,c)))),e=e.return}r.length!==0&&t.push({event:a,listeners:r})}var _g=/\r\n?/g,Rg=/\u0000|\uFFFD/g;function Ld(t){return(typeof t=="string"?t:""+t).replace(_g,`
`).replace(Rg,"")}function Qd(t,a){return a=Ld(a),Ld(t)===a}function nt(t,a,e,i,n,l){switch(e){case"children":typeof i=="string"?a==="body"||a==="textarea"&&i===""||Pe(t,i):(typeof i=="number"||typeof i=="bigint")&&a!=="body"&&Pe(t,""+i);break;case"className":qn(t,"class",i);break;case"tabIndex":qn(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":qn(t,e,i);break;case"style":Qu(t,i,l);break;case"data":if(a!=="object"){qn(t,"data",i);break}case"src":case"href":if(i===""&&(a!=="a"||e!=="href")){t.removeAttribute(e);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(e);break}i=Rn(""+i),t.setAttribute(e,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(e==="formAction"?(a!=="input"&&nt(t,a,"name",n.name,n,null),nt(t,a,"formEncType",n.formEncType,n,null),nt(t,a,"formMethod",n.formMethod,n,null),nt(t,a,"formTarget",n.formTarget,n,null)):(nt(t,a,"encType",n.encType,n,null),nt(t,a,"method",n.method,n,null),nt(t,a,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(e);break}i=Rn(""+i),t.setAttribute(e,i);break;case"onClick":i!=null&&(t.onclick=Ha);break;case"onScroll":i!=null&&Q("scroll",t);break;case"onScrollEnd":i!=null&&Q("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(p(61));if(e=i.__html,e!=null){if(n.children!=null)throw Error(p(60));t.innerHTML=e}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}e=Rn(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(e,""+i):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":i===!0?t.setAttribute(e,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(e,i):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(e,i):t.removeAttribute(e);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(e):t.setAttribute(e,i);break;case"popover":Q("beforetoggle",t),Q("toggle",t),Gn(t,"popover",i);break;case"xlinkActuate":Oa(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Oa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Oa(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Oa(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Oa(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Oa(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Oa(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Oa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Oa(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Gn(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=p0.get(e)||e,Gn(t,e,i))}}function Po(t,a,e,i,n,l){switch(e){case"style":Qu(t,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(p(61));if(e=i.__html,e!=null){if(n.children!=null)throw Error(p(60));t.innerHTML=e}}break;case"children":typeof i=="string"?Pe(t,i):(typeof i=="number"||typeof i=="bigint")&&Pe(t,""+i);break;case"onScroll":i!=null&&Q("scroll",t);break;case"onScrollEnd":i!=null&&Q("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uu.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),a=e.slice(2,n?e.length-7:void 0),l=t[Qt]||null,l=l!=null?l[e]:null,typeof l=="function"&&t.removeEventListener(a,l,n),typeof i=="function")){typeof l!="function"&&l!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(a,i,n);break t}e in t?t[e]=i:i===!0?t.setAttribute(e,""):Gn(t,e,i)}}}function Rt(t,a,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",t),Q("load",t);var i=!1,n=!1,l;for(l in e)if(e.hasOwnProperty(l)){var r=e[l];if(r!=null)switch(l){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:nt(t,a,l,r,e,null)}}n&&nt(t,a,"srcSet",e.srcSet,e,null),i&&nt(t,a,"src",e.src,e,null);return;case"input":Q("invalid",t);var o=l=r=n=null,c=null,h=null;for(i in e)if(e.hasOwnProperty(i)){var x=e[i];if(x!=null)switch(i){case"name":n=x;break;case"type":r=x;break;case"checked":c=x;break;case"defaultChecked":h=x;break;case"value":l=x;break;case"defaultValue":o=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(p(137,a));break;default:nt(t,a,i,x,e,null)}}Ru(t,l,o,c,h,r,n,!1);return;case"select":Q("invalid",t),i=r=l=null;for(n in e)if(e.hasOwnProperty(n)&&(o=e[n],o!=null))switch(n){case"value":l=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:nt(t,a,n,o,e,null)}a=l,e=r,t.multiple=!!i,a!=null?Ie(t,!!i,a,!1):e!=null&&Ie(t,!!i,e,!0);return;case"textarea":Q("invalid",t),l=n=i=null;for(r in e)if(e.hasOwnProperty(r)&&(o=e[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":n=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(p(91));break;default:nt(t,a,r,o,e,null)}Xu(t,i,n,l);return;case"option":for(c in e)if(e.hasOwnProperty(c)&&(i=e[c],i!=null))switch(c){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:nt(t,a,c,i,e,null)}return;case"dialog":Q("beforetoggle",t),Q("toggle",t),Q("cancel",t),Q("close",t);break;case"iframe":case"object":Q("load",t);break;case"video":case"audio":for(i=0;i<bn.length;i++)Q(bn[i],t);break;case"image":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"embed":case"source":case"link":Q("error",t),Q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in e)if(e.hasOwnProperty(h)&&(i=e[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:nt(t,a,h,i,e,null)}return;default:if(fr(a)){for(x in e)e.hasOwnProperty(x)&&(i=e[x],i!==void 0&&Po(t,a,x,i,e,void 0));return}}for(o in e)e.hasOwnProperty(o)&&(i=e[o],i!=null&&nt(t,a,o,i,e,null))}function Yg(t,a,e,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,r=null,o=null,c=null,h=null,x=null;for(y in e){var w=e[y];if(e.hasOwnProperty(y)&&w!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":c=w;default:i.hasOwnProperty(y)||nt(t,a,y,null,i,w)}}for(var b in i){var y=i[b];if(w=e[b],i.hasOwnProperty(b)&&(y!=null||w!=null))switch(b){case"type":l=y;break;case"name":n=y;break;case"checked":h=y;break;case"defaultChecked":x=y;break;case"value":r=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,a));break;default:y!==w&&nt(t,a,b,y,i,w)}}sr(t,r,o,c,h,x,l,n);return;case"select":y=r=o=b=null;for(l in e)if(c=e[l],e.hasOwnProperty(l)&&c!=null)switch(l){case"value":break;case"multiple":y=c;default:i.hasOwnProperty(l)||nt(t,a,l,null,i,c)}for(n in i)if(l=i[n],c=e[n],i.hasOwnProperty(n)&&(l!=null||c!=null))switch(n){case"value":b=l;break;case"defaultValue":o=l;break;case"multiple":r=l;default:l!==c&&nt(t,a,n,l,i,c)}a=o,e=r,i=y,b!=null?Ie(t,!!e,b,!1):!!i!=!!e&&(a!=null?Ie(t,!!e,a,!0):Ie(t,!!e,e?[]:"",!1));return;case"textarea":y=b=null;for(o in e)if(n=e[o],e.hasOwnProperty(o)&&n!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:nt(t,a,o,null,i,n)}for(r in i)if(n=i[r],l=e[r],i.hasOwnProperty(r)&&(n!=null||l!=null))switch(r){case"value":b=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(p(91));break;default:n!==l&&nt(t,a,r,n,i,l)}Yu(t,b,y);return;case"option":for(var k in e)if(b=e[k],e.hasOwnProperty(k)&&b!=null&&!i.hasOwnProperty(k))switch(k){case"selected":t.selected=!1;break;default:nt(t,a,k,null,i,b)}for(c in i)if(b=i[c],y=e[c],i.hasOwnProperty(c)&&b!==y&&(b!=null||y!=null))switch(c){case"selected":t.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:nt(t,a,c,b,i,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in e)b=e[U],e.hasOwnProperty(U)&&b!=null&&!i.hasOwnProperty(U)&&nt(t,a,U,null,i,b);for(h in i)if(b=i[h],y=e[h],i.hasOwnProperty(h)&&b!==y&&(b!=null||y!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(p(137,a));break;default:nt(t,a,h,b,i,y)}return;default:if(fr(a)){for(var lt in e)b=e[lt],e.hasOwnProperty(lt)&&b!==void 0&&!i.hasOwnProperty(lt)&&Po(t,a,lt,void 0,i,b);for(x in i)b=i[x],y=e[x],!i.hasOwnProperty(x)||b===y||b===void 0&&y===void 0||Po(t,a,x,b,i,y);return}}for(var f in e)b=e[f],e.hasOwnProperty(f)&&b!=null&&!i.hasOwnProperty(f)&&nt(t,a,f,null,i,b);for(w in i)b=i[w],y=e[w],!i.hasOwnProperty(w)||b===y||b==null&&y==null||nt(t,a,w,b,i,y)}function Vd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,e=performance.getEntriesByType("resource"),i=0;i<e.length;i++){var n=e[i],l=n.transferSize,r=n.initiatorType,o=n.duration;if(l&&o&&Vd(r)){for(r=0,o=n.responseEnd,i+=1;i<e.length;i++){var c=e[i],h=c.startTime;if(h>o)break;var x=c.transferSize,w=c.initiatorType;x&&Vd(w)&&(c=c.responseEnd,r+=x*(c<o?1:(o-h)/(c-h)))}if(--i,a+=8*(l+r)/(n.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var tu=null,au=null;function Ul(t){return t.nodeType===9?t:t.ownerDocument}function Zd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $d(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function eu(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var iu=null;function Lg(){var t=window.event;return t&&t.type==="popstate"?t===iu?!1:(iu=t,!0):(iu=null,!1)}var Kd=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,Jd=typeof Promise=="function"?Promise:void 0,Vg=typeof queueMicrotask=="function"?queueMicrotask:typeof Jd<"u"?function(t){return Jd.resolve(null).then(t).catch(Zg)}:Kd;function Zg(t){setTimeout(function(){throw t})}function be(t){return t==="head"}function Wd(t,a){var e=a,i=0;do{var n=e.nextSibling;if(t.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(i===0){t.removeChild(n),ki(a);return}i--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")i++;else if(e==="html")yn(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,yn(e);for(var l=e.firstChild;l;){var r=l.nextSibling,o=l.nodeName;l[Ni]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||e.removeChild(l),l=r}}else e==="body"&&yn(t.ownerDocument.body);e=n}while(e);ki(a)}function Fd(t,a){var e=t;t=0;do{var i=e.nextSibling;if(e.nodeType===1?a?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(a?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),i&&i.nodeType===8)if(e=i.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=i}while(e)}function nu(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var e=a;switch(a=a.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":nu(e),ur(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function $g(t,a,e,i){for(;t.nodeType===1;){var n=e;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ni])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=va(t.nextSibling),t===null)break}return null}function Kg(t,a,e){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=va(t.nextSibling),t===null))return null;return t}function Id(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=va(t.nextSibling),t===null))return null;return t}function lu(t){return t.data==="$?"||t.data==="$~"}function ru(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Jg(t,a){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||e.readyState!=="loading")a();else{var i=function(){a(),e.removeEventListener("DOMContentLoaded",i)};e.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function va(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var ou=null;function Pd(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(a===0)return va(t.nextSibling);a--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||a++}t=t.nextSibling}return null}function tf(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(a===0)return t;a--}else e!=="/$"&&e!=="/&"||a++}t=t.previousSibling}return null}function af(t,a,e){switch(a=Ul(e),t){case"html":if(t=a.documentElement,!t)throw Error(p(452));return t;case"head":if(t=a.head,!t)throw Error(p(453));return t;case"body":if(t=a.body,!t)throw Error(p(454));return t;default:throw Error(p(451))}}function yn(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ur(t)}var ya=new Map,ef=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ja=j.d;j.d={f:Wg,r:Fg,D:Ig,C:Pg,L:tp,m:ap,X:ip,S:ep,M:np};function Wg(){var t=Ja.f(),a=jl();return t||a}function Fg(t){var a=Je(t);a!==null&&a.tag===5&&a.type==="form"?ys(a):Ja.r(t)}var ji=typeof document>"u"?null:document;function nf(t,a,e){var i=ji;if(i&&typeof a=="string"&&a){var n=da(a);n='link[rel="'+t+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),ef.has(n)||(ef.add(n),t={rel:t,crossOrigin:e,href:a},i.querySelector(n)===null&&(a=i.createElement("link"),Rt(a,"link",t),Ot(a),i.head.appendChild(a)))}}function Ig(t){Ja.D(t),nf("dns-prefetch",t,null)}function Pg(t,a){Ja.C(t,a),nf("preconnect",t,a)}function tp(t,a,e){Ja.L(t,a,e);var i=ji;if(i&&t&&a){var n='link[rel="preload"][as="'+da(a)+'"]';a==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+da(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+da(e.imageSizes)+'"]')):n+='[href="'+da(t)+'"]';var l=n;switch(a){case"style":l=Mi(t);break;case"script":l=Di(t)}ya.has(l)||(t=D({rel:"preload",href:a==="image"&&e&&e.imageSrcSet?void 0:t,as:a},e),ya.set(l,t),i.querySelector(n)!==null||a==="style"&&i.querySelector(xn(l))||a==="script"&&i.querySelector(Sn(l))||(a=i.createElement("link"),Rt(a,"link",t),Ot(a),i.head.appendChild(a)))}}function ap(t,a){Ja.m(t,a);var e=ji;if(e&&t){var i=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+da(i)+'"][href="'+da(t)+'"]',l=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Di(t)}if(!ya.has(l)&&(t=D({rel:"modulepreload",href:t},a),ya.set(l,t),e.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Sn(l)))return}i=e.createElement("link"),Rt(i,"link",t),Ot(i),e.head.appendChild(i)}}}function ep(t,a,e){Ja.S(t,a,e);var i=ji;if(i&&t){var n=We(i).hoistableStyles,l=Mi(t);a=a||"default";var r=n.get(l);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(xn(l)))o.loading=5;else{t=D({rel:"stylesheet",href:t,"data-precedence":a},e),(e=ya.get(l))&&uu(t,e);var c=r=i.createElement("link");Ot(c),Rt(c,"link",t),c._p=new Promise(function(h,x){c.onload=h,c.onerror=x}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Gl(r,a,i)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(l,r)}}}function ip(t,a){Ja.X(t,a);var e=ji;if(e&&t){var i=We(e).hoistableScripts,n=Di(t),l=i.get(n);l||(l=e.querySelector(Sn(n)),l||(t=D({src:t,async:!0},a),(a=ya.get(n))&&cu(t,a),l=e.createElement("script"),Ot(l),Rt(l,"link",t),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function np(t,a){Ja.M(t,a);var e=ji;if(e&&t){var i=We(e).hoistableScripts,n=Di(t),l=i.get(n);l||(l=e.querySelector(Sn(n)),l||(t=D({src:t,async:!0,type:"module"},a),(a=ya.get(n))&&cu(t,a),l=e.createElement("script"),Ot(l),Rt(l,"link",t),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function lf(t,a,e,i){var n=(n=Fa.current)?Nl(n):null;if(!n)throw Error(p(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(a=Mi(e.href),e=We(n).hoistableStyles,i=e.get(a),i||(i={type:"style",instance:null,count:0,state:null},e.set(a,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Mi(e.href);var l=We(n).hoistableStyles,r=l.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,r),(l=n.querySelector(xn(t)))&&!l._p&&(r.instance=l,r.state.loading=5),ya.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},ya.set(t,e),l||lp(n,t,e,r.state))),a&&i===null)throw Error(p(528,""));return r}if(a&&i!==null)throw Error(p(529,""));return null;case"script":return a=e.async,e=e.src,typeof e=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Di(e),e=We(n).hoistableScripts,i=e.get(a),i||(i={type:"script",instance:null,count:0,state:null},e.set(a,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,t))}}function Mi(t){return'href="'+da(t)+'"'}function xn(t){return'link[rel="stylesheet"]['+t+"]"}function rf(t){return D({},t,{"data-precedence":t.precedence,precedence:null})}function lp(t,a,e,i){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?i.loading=1:(a=t.createElement("link"),i.preload=a,a.addEventListener("load",function(){return i.loading|=1}),a.addEventListener("error",function(){return i.loading|=2}),Rt(a,"link",e),Ot(a),t.head.appendChild(a))}function Di(t){return'[src="'+da(t)+'"]'}function Sn(t){return"script[async]"+t}function of(t,a,e){if(a.count++,a.instance===null)switch(a.type){case"style":var i=t.querySelector('style[data-href~="'+da(e.href)+'"]');if(i)return a.instance=i,Ot(i),i;var n=D({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Ot(i),Rt(i,"style",n),Gl(i,e.precedence,t),a.instance=i;case"stylesheet":n=Mi(e.href);var l=t.querySelector(xn(n));if(l)return a.state.loading|=4,a.instance=l,Ot(l),l;i=rf(e),(n=ya.get(n))&&uu(i,n),l=(t.ownerDocument||t).createElement("link"),Ot(l);var r=l;return r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Rt(l,"link",i),a.state.loading|=4,Gl(l,e.precedence,t),a.instance=l;case"script":return l=Di(e.src),(n=t.querySelector(Sn(l)))?(a.instance=n,Ot(n),n):(i=e,(n=ya.get(l))&&(i=D({},e),cu(i,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ot(n),Rt(n,"link",i),t.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(p(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(i=a.instance,a.state.loading|=4,Gl(i,e.precedence,t));return a.instance}function Gl(t,a,e){for(var i=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,l=n,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===a)l=o;else if(l!==n)break}l?l.parentNode.insertBefore(t,l.nextSibling):(a=e.nodeType===9?e.head:e,a.insertBefore(t,a.firstChild))}function uu(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function cu(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var ql=null;function uf(t,a,e){if(ql===null){var i=new Map,n=ql=new Map;n.set(e,i)}else n=ql,i=n.get(e),i||(i=new Map,n.set(e,i));if(i.has(t))return i;for(i.set(t,null),e=e.getElementsByTagName(t),n=0;n<e.length;n++){var l=e[n];if(!(l[Ni]||l[Nt]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(a)||"";r=t+r;var o=i.get(r);o?o.push(l):i.set(r,[l])}}return i}function cf(t,a,e){t=t.ownerDocument||t,t.head.insertBefore(e,a==="title"?t.querySelector("head > title"):null)}function rp(t,a,e){if(e===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function sf(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function op(t,a,e,i){if(e.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Mi(i.href),l=a.querySelector(xn(n));if(l){a=l._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=_l.bind(t),a.then(t,t)),e.state.loading|=4,e.instance=l,Ot(l);return}l=a.ownerDocument||a,i=rf(i),(n=ya.get(n))&&uu(i,n),l=l.createElement("link"),Ot(l);var r=l;r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Rt(l,"link",i),e.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,a),(a=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=_l.bind(t),a.addEventListener("load",e),a.addEventListener("error",e))}}var su=0;function up(t,a){return t.stylesheets&&t.count===0&&Yl(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var i=setTimeout(function(){if(t.stylesheets&&Yl(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+a);0<t.imgBytes&&su===0&&(su=62500*Xg());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yl(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>su?50:800)+a);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function _l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Rl=null;function Yl(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Rl=new Map,a.forEach(cp,t),Rl=null,_l.call(t))}function cp(t,a){if(!(a.state.loading&4)){var e=Rl.get(t);if(e)var i=e.get(null);else{e=new Map,Rl.set(t,e);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var r=n[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(e.set(r.dataset.precedence,r),i=r)}i&&e.set(null,i)}n=a.instance,r=n.getAttribute("data-precedence"),l=e.get(r)||i,l===i&&e.set(null,n),e.set(r,n),this.count++,i=_l.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),l?l.parentNode.insertBefore(n,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),a.state.loading|=4}}var zn={$$typeof:vt,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function sp(t,a,e,i,n,l,r,o,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.hiddenUpdates=nr(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function df(t,a,e,i,n,l,r,o,c,h,x,w){return t=new sp(t,a,e,r,c,h,x,w,o),a=1,l===!0&&(a|=24),l=ea(3,null,null,a),t.current=l,l.stateNode=t,a=Xr(),a.refCount++,t.pooledCache=a,a.refCount++,l.memoizedState={element:i,isDehydrated:e,cache:a},Zr(l),t}function ff(t){return t?(t=ri,t):ri}function gf(t,a,e,i,n,l){n=ff(n),i.context===null?i.context=n:i.pendingContext=n,i=re(a),i.payload={element:e},l=l===void 0?null:l,l!==null&&(i.callback=l),e=oe(t,i,a),e!==null&&(Wt(e,t,a),Pi(e,t,a))}function pf(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<a?e:a}}function du(t,a){pf(t,a),(t=t.alternate)&&pf(t,a)}function mf(t){if(t.tag===13||t.tag===31){var a=ke(t,67108864);a!==null&&Wt(a,t,67108864),du(t,67108864)}}function hf(t){if(t.tag===13||t.tag===31){var a=oa();a=lr(a);var e=ke(t,a);e!==null&&Wt(e,t,a),du(t,a)}}var Xl=!0;function dp(t,a,e,i){var n=z.T;z.T=null;var l=j.p;try{j.p=2,fu(t,a,e,i)}finally{j.p=l,z.T=n}}function fp(t,a,e,i){var n=z.T;z.T=null;var l=j.p;try{j.p=8,fu(t,a,e,i)}finally{j.p=l,z.T=n}}function fu(t,a,e,i){if(Xl){var n=gu(i);if(n===null)Io(t,a,i,Ll,e),vf(t,i);else if(pp(n,t,a,e,i))i.stopPropagation();else if(vf(t,i),a&4&&-1<gp.indexOf(t)){for(;n!==null;){var l=Je(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Te(l.pendingLanes);if(r!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var c=1<<31-ta(r);o.entanglements[1]|=c,r&=~c}ka(l),(P&6)===0&&(Tl=It()+500,hn(0))}}break;case 31:case 13:o=ke(l,2),o!==null&&Wt(o,l,2),jl(),du(l,2)}if(l=gu(i),l===null&&Io(t,a,i,Ll,e),l===n)break;n=l}n!==null&&i.stopPropagation()}else Io(t,a,i,null,e)}}function gu(t){return t=pr(t),pu(t)}var Ll=null;function pu(t){if(Ll=null,t=Ke(t),t!==null){var a=C(t);if(a===null)t=null;else{var e=a.tag;if(e===13){if(t=M(a),t!==null)return t;t=null}else if(e===31){if(t=Y(a),t!==null)return t;t=null}else if(e===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Ll=t,null}function bf(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(If()){case Au:return 2;case Tu:return 8;case On:case Pf:return 32;case Eu:return 268435456;default:return 32}default:return 32}}var mu=!1,ve=null,ye=null,xe=null,wn=new Map,An=new Map,Se=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vf(t,a){switch(t){case"focusin":case"focusout":ve=null;break;case"dragenter":case"dragleave":ye=null;break;case"mouseover":case"mouseout":xe=null;break;case"pointerover":case"pointerout":wn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(a.pointerId)}}function Tn(t,a,e,i,n,l){return t===null||t.nativeEvent!==l?(t={blockedOn:a,domEventName:e,eventSystemFlags:i,nativeEvent:l,targetContainers:[n]},a!==null&&(a=Je(a),a!==null&&mf(a)),t):(t.eventSystemFlags|=i,a=t.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),t)}function pp(t,a,e,i,n){switch(a){case"focusin":return ve=Tn(ve,t,a,e,i,n),!0;case"dragenter":return ye=Tn(ye,t,a,e,i,n),!0;case"mouseover":return xe=Tn(xe,t,a,e,i,n),!0;case"pointerover":var l=n.pointerId;return wn.set(l,Tn(wn.get(l)||null,t,a,e,i,n)),!0;case"gotpointercapture":return l=n.pointerId,An.set(l,Tn(An.get(l)||null,t,a,e,i,n)),!0}return!1}function yf(t){var a=Ke(t.target);if(a!==null){var e=C(a);if(e!==null){if(a=e.tag,a===13){if(a=M(e),a!==null){t.blockedOn=a,Ou(t.priority,function(){hf(e)});return}}else if(a===31){if(a=Y(e),a!==null){t.blockedOn=a,Ou(t.priority,function(){hf(e)});return}}else if(a===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var e=gu(t.nativeEvent);if(e===null){e=t.nativeEvent;var i=new e.constructor(e.type,e);gr=i,e.target.dispatchEvent(i),gr=null}else return a=Je(e),a!==null&&mf(a),t.blockedOn=e,!1;a.shift()}return!0}function xf(t,a,e){Ql(t)&&e.delete(a)}function mp(){mu=!1,ve!==null&&Ql(ve)&&(ve=null),ye!==null&&Ql(ye)&&(ye=null),xe!==null&&Ql(xe)&&(xe=null),wn.forEach(xf),An.forEach(xf)}function Vl(t,a){t.blockedOn===a&&(t.blockedOn=null,mu||(mu=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,mp)))}var Zl=null;function Sf(t){Zl!==t&&(Zl=t,g.unstable_scheduleCallback(g.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var a=0;a<t.length;a+=3){var e=t[a],i=t[a+1],n=t[a+2];if(typeof i!="function"){if(pu(i||e)===null)continue;break}var l=Je(e);l!==null&&(t.splice(a,3),a-=3,go(l,{pending:!0,data:n,method:e.method,action:i},i,n))}}))}function ki(t){function a(c){return Vl(c,t)}ve!==null&&Vl(ve,t),ye!==null&&Vl(ye,t),xe!==null&&Vl(xe,t),wn.forEach(a),An.forEach(a);for(var e=0;e<Se.length;e++){var i=Se[e];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Se.length&&(e=Se[0],e.blockedOn===null);)yf(e),e.blockedOn===null&&Se.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(i=0;i<e.length;i+=3){var n=e[i],l=e[i+1],r=n[Qt]||null;if(typeof l=="function")r||Sf(e);else if(r){var o=null;if(l&&l.hasAttribute("formAction")){if(n=l,r=l[Qt]||null)o=r.formAction;else if(pu(n)!==null)continue}else o=r.action;typeof o=="function"?e[i+1]=o:(e.splice(i,3),i-=3),Sf(e)}}}function zf(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),i||setTimeout(e,20)}function e(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(e,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function hu(t){this._internalRoot=t}$l.prototype.render=hu.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(p(409));var e=a.current,i=oa();gf(e,i,t,a,null,null)},$l.prototype.unmount=hu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;gf(t.current,2,null,t,null,null),jl(),a[$e]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var a=Cu();t={blockedOn:null,target:t,priority:a};for(var e=0;e<Se.length&&a!==0&&a<Se[e].priority;e++);Se.splice(e,0,t),e===0&&yf(t)}};var wf=T.version;if(wf!=="19.2.1")throw Error(p(527,wf,"19.2.1"));j.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=X(a),t=t!==null?mt(t):null,t=t===null?null:t.stateNode,t};var hp={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Hi=Kl.inject(hp),Pt=Kl}catch{}}return En.createRoot=function(t,a){if(!E(t))throw Error(p(299));var e=!1,i="",n=Ds,l=ks,r=Cs;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError)),a=df(t,1,!1,null,null,e,i,null,n,l,r,zf),t[$e]=a.current,Fo(t),new hu(a)},En.hydrateRoot=function(t,a,e){if(!E(t))throw Error(p(299));var i=!1,n="",l=Ds,r=ks,o=Cs,c=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.formState!==void 0&&(c=e.formState)),a=df(t,1,!0,a,e??null,i,n,c,l,r,o,zf),a.context=ff(null),e=a.current,i=oa(),i=lr(i),n=re(i),n.callback=null,oe(e,n,i),e=i,a.current.lanes=e,Ui(a,e),ka(a),t[$e]=a.current,Fo(t),new $l(a)},En.version="19.2.1",En}var Mf;function Tp(){if(Mf)return vu.exports;Mf=1;function g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)}catch(T){console.error(T)}}return g(),vu.exports=Ap(),vu.exports}var Ep=Tp();const Bt={blur:{primary:"40px",secondary:"24px",subtle:"12px",heavy:"60px"},saturation:{normal:"180%"},radius:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2xl":"24px",full:"9999px"},timing:{micro:"100ms",small:"200ms",medium:"300ms",large:"500ms"},easing:{standard:"cubic-bezier(0.4, 0, 0.2, 1)",emphasized:"cubic-bezier(0.0, 0, 0.2, 1)"}},ct={bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgTertiary:"#111111",bgCard:"rgba(255, 255, 255, 0.02)",textPrimary:"rgba(255, 255, 255, 0.87)",textSecondary:"rgba(255, 255, 255, 0.60)",textTertiary:"rgba(255, 255, 255, 0.38)",accent:"#2A9D8F",accentHover:"#3BB4A5",accentSubtle:"rgba(42, 157, 143, 0.15)",accentRgb:"42, 157, 143",blue:"#4361A5",blueRgb:"67, 97, 165",lightBlue:"#7BA7D9",cyan:"#3BB4B1",border:"rgba(255, 255, 255, 0.08)",borderHover:"rgba(255, 255, 255, 0.15)",gradient:"linear-gradient(135deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientHorizontal:"linear-gradient(90deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientSubtle:"linear-gradient(135deg, rgba(42, 157, 143, 0.15) 0%, rgba(67, 97, 165, 0.15) 100%)",glassBg:"rgba(255, 255, 255, 0.06)",glassBgHover:"rgba(255, 255, 255, 0.10)",glassBorder:"rgba(255, 255, 255, 0.10)",glassHighlight:"rgba(255, 255, 255, 0.15)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.32)",specularHighlight:"rgba(255, 255, 255, 0.25)"},st={bgPrimary:"#ffffff",bgSecondary:"#f5f5f7",bgTertiary:"#e8e8ed",bgCard:"rgba(0, 0, 0, 0.02)",textPrimary:"rgba(0, 0, 0, 0.87)",textSecondary:"rgba(0, 0, 0, 0.60)",textTertiary:"rgba(0, 0, 0, 0.38)",accent:"#238076",accentHover:"#1a6b63",accentSubtle:"rgba(42, 157, 143, 0.12)",accentRgb:"35, 128, 118",blue:"#3a5491",blueRgb:"58, 84, 145",lightBlue:"#5a8cc7",cyan:"#2f9d9a",border:"rgba(0, 0, 0, 0.06)",borderHover:"rgba(0, 0, 0, 0.12)",gradient:"linear-gradient(135deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientHorizontal:"linear-gradient(90deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientSubtle:"linear-gradient(135deg, rgba(42, 157, 143, 0.1) 0%, rgba(67, 97, 165, 0.1) 100%)",glassBg:"rgba(255, 255, 255, 0.72)",glassBgHover:"rgba(255, 255, 255, 0.85)",glassBorder:"rgba(0, 0, 0, 0.08)",glassHighlight:"rgba(255, 255, 255, 0.9)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.08)",specularHighlight:"rgba(255, 255, 255, 0.8)"},jp={fontWeight:{regular:400,medium:500,semibold:600,bold:700}},A={typography:jp,breakpoints:{mobile:"640px",tablet:"1024px",desktop:"1280px"},zIndex:{sticky:100},maxWidth:{wide:"1200px",full:"1440px"}},Mp=Sp`
  /* ============================================
     LIQUID GLASS CSS VARIABLES
     iOS 26 Design System
     ============================================ */
  
  :root {
    /* ----------------------------------------
       Core Color Tokens (Dark Mode Default)
       ---------------------------------------- */
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
    
    /* ----------------------------------------
       Liquid Glass Properties (Dark Mode)
       ---------------------------------------- */
    --glass-blur: ${Bt.blur.primary};
    --glass-blur-secondary: ${Bt.blur.secondary};
    --glass-blur-subtle: ${Bt.blur.subtle};
    --glass-blur-heavy: ${Bt.blur.heavy};
    --glass-saturation: ${Bt.saturation.normal};
    
    --glass-bg: ${ct.glassBg};
    --glass-bg-hover: ${ct.glassBgHover};
    --glass-border: ${ct.glassBorder};
    --glass-highlight: ${ct.glassHighlight};
    --glass-shadow: ${ct.glassShadow};
    --specular-highlight: ${ct.specularHighlight};
    
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
`,qf=R.createContext(void 0),_f="portfolio-theme-mode",Dp=()=>{if(typeof window<"u"){const g=localStorage.getItem(_f);if(g==="dark"||g==="light")return g}return"dark"},kp=({children:g})=>{const[T,H]=R.useState(Dp);R.useEffect(()=>{document.documentElement.setAttribute("data-theme",T),localStorage.setItem(_f,T)},[T]);const p=()=>{H(E=>E==="dark"?"light":"dark")};return u.jsx(qf.Provider,{value:{mode:T,toggleTheme:p,isDark:T==="dark"},children:g})},Cp=()=>{const g=R.useContext(qf);if(!g)throw new Error("useTheme must be used within a ThemeProvider");return g},Rf=ut`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Op=d.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${A.zIndex.sticky};
  max-width: calc(100vw - 48px);
  width: max-content;
  
  @media (max-width: ${A.breakpoints.tablet}) {
    top: auto;
    bottom: 24px;
    max-width: calc(100vw - 48px);
  }
  
  @media (max-width: 480px) {
    bottom: 16px;
    max-width: calc(100vw - 32px);
  }
`,Hp=d(v.nav)`
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
    
    &::before {
      border-radius: 18px;
    }
  }
`,Bp=d(v.a)`
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
    animation: ${Rf} 1.5s ease infinite;
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
`,Up=d.img`
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
`,Np=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  
  @media (max-width: ${A.breakpoints.tablet}) {
    gap: 1px;
  }
  
  @media (max-width: 480px) {
    gap: 0;
  }
`,Gp=d(v.a)`
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
  flex-shrink: 0;
  
  ${({$isActive:g})=>g&&ot`
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
`,qp=d(v.div)`
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
`,_p=d(v.button)`
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
    animation: ${Rf} 1.5s ease infinite;
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
`,Df=[{label:"About",href:"#about"},{label:"Skills",href:"#technologyproficiency"},{label:"Experience",href:"#professionalexperience"},{label:"Projects",href:"#mostproudof"},{label:"Contact",href:"#contact"}],Rp=()=>{const[g,T]=R.useState(""),{isDark:H,toggleTheme:p}=Cp();R.useEffect(()=>{const M=()=>{const Y=Df.map(X=>X.href.replace("#",""));if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-100){T(Y[Y.length-1]);return}for(const X of[...Y].reverse()){const mt=document.getElementById(X);if(mt&&mt.getBoundingClientRect().top<=150){T(X);return}}T("")};return window.addEventListener("scroll",M,{passive:!0}),()=>window.removeEventListener("scroll",M)},[]);const E=M=>{const Y=M.currentTarget.getBoundingClientRect(),N=(M.clientX-Y.left)/Y.width*100,X=(M.clientY-Y.top)/Y.height*100;M.currentTarget.style.setProperty("--mouse-x",`${N}%`),M.currentTarget.style.setProperty("--mouse-y",`${X}%`)},C=(M,Y)=>{M.preventDefault();const N=document.getElementById(Y);N&&N.scrollIntoView({behavior:"smooth",block:"start"})};return u.jsx(Op,{children:u.jsxs(Hp,{"aria-label":"Main navigation",initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:[.25,.1,.25,1],delay:.2},children:[u.jsx(Bp,{href:"#home",onClick:M=>C(M,"home"),whileHover:{scale:1.05},whileTap:{scale:.95},children:u.jsxs("picture",{children:[u.jsx("source",{srcSet:"/images/logo-100.webp",type:"image/webp"}),u.jsx(Up,{src:"/images/logo-optimized.png",alt:"PN",width:28,height:28,loading:"eager",decoding:"async"})]})}),u.jsx(Np,{children:Df.map(M=>{const Y=g===M.href.replace("#","");return u.jsxs(Gp,{href:M.href,$isActive:Y,"aria-current":Y?"page":void 0,onClick:N=>C(N,M.href.replace("#","")),onMouseMove:E,whileHover:{scale:1.02},whileTap:{scale:.98},children:[u.jsx(Le,{children:Y&&u.jsx(qp,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15,ease:"easeOut"}},M.label)}),u.jsx("span",{style:{position:"relative",zIndex:1},children:M.label})]},M.label)})}),u.jsx(_p,{onClick:p,whileHover:{scale:1.05},whileTap:{scale:.95},title:H?"Switch to light mode":"Switch to dark mode","aria-label":H?"Switch to light mode":"Switch to dark mode",role:"button",children:u.jsx(Le,{mode:"wait",children:H?u.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.3},children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"sunGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),u.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),u.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),u.jsx("circle",{cx:"12",cy:"12",r:"5",stroke:"url(#sunGradient)"}),u.jsx("path",{stroke:"url(#sunGradient)",d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]},"sun"):u.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.3},children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"moonGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),u.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),u.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),u.jsx("path",{stroke:"url(#moonGradient)",d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})]},"moon")})})]})})},Yp="2.0.4",Yf=ut`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Xp=ut`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`,Lp=d(v.footer)`
  padding: 48px 24px;
  padding-bottom: 100px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 56px 80px;
    padding-bottom: 56px;
  }
`,Qp=d.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 1px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${Yf} 3s ease infinite;
  opacity: 0.6;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    width: 140px;
  }
`,Vp=d(v.div)`
  max-width: ${A.maxWidth.wide};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Zp=d(v.p)`
  font-size: 13px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
  letter-spacing: 0.01em;
  line-height: 1.6;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 14px;
  }
`,$p=d(v.span)`
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
`,Kp=d.span`
  color: #ef4444;
  font-size: 13px;
  display: inline-block;
  animation: ${Xp} 1.8s ease-in-out infinite;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 14px;
  }
`,Jp=d.span`
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Yf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${A.typography.fontWeight.semibold};
`,Wp=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    margin-top: 24px;
  }
`,kf=d.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,Fp=d(v.span)`
  font-size: 11px;
  font-weight: ${A.typography.fontWeight.medium};
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
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 11px;
  }
`,Ip=()=>u.jsxs(Lp,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:[u.jsx(Qp,{}),u.jsxs(Vp,{children:[u.jsxs(Zp,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:["Designed & Built With",u.jsx($p,{whileHover:{scale:1.2},transition:{type:"spring",stiffness:400,damping:15},children:u.jsx(Kp,{children:"♥"})}),"By ",u.jsx(Jp,{children:"Pranshu"})," • © 2025"]}),u.jsxs(Wp,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2,duration:.5},children:[u.jsx(kf,{}),u.jsxs(Fp,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:400,damping:20},children:["v",Yp]}),u.jsx(kf,{})]})]})]}),Pp=ut`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`,tm=ut`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`,am=d(v.div)`
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
`,em=d(v.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(42, 157, 143, 0.08) 0%,
    rgba(67, 97, 165, 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
`,im=d(v.div)`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,nm=d(v.div)`
  position: absolute;
  width: ${({$size:g})=>g}px;
  height: ${({$size:g})=>g}px;
  border-radius: 50%;
  background: ${({$color:g})=>g};
  filter: blur(1px);
`,lm=d(v.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,rm=d(v.div)`
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
`,om=d(v.div)`
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
`,um=d(v.div)`
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
`,Su=d(v.div)`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px solid rgba(42, 157, 143, 0.3);
  animation: ${tm} 2s ease-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`,cm=d(v.img)`
  width: 90px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 25px rgba(42, 157, 143, 0.5));
  
  @media (min-width: ${A.breakpoints.tablet}) {
    width: 110px;
  }
`,sm=d(v.div)`
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
    animation: ${Pp} 2s ease-in-out infinite;
  }
`,dm={initial:{opacity:1},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2,ease:"easeOut"}}},fm={initial:{opacity:0,scale:1.5},animate:{opacity:1,scale:1,transition:{duration:1.5}},exit:{opacity:0,scale:.95,transition:{duration:.2}}},gm={initial:{},animate:{},exit:{scale:.9,opacity:0,transition:{duration:.2,ease:"easeOut"}}},pm={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},mm={initial:{opacity:0,scale:0,rotate:-180},animate:{opacity:1,scale:1,rotate:0,transition:{type:"spring",stiffness:100,damping:15,delay:.2}}},hm={initial:{opacity:0,scale:.3,rotateY:-90,filter:"blur(10px)"},animate:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:12,delay:.4}}},bm=({onComplete:g})=>{const[T,H]=R.useState("animate"),p=Array.from({length:20},(E,C)=>({id:C,x:Math.random()*100,y:Math.random()*100,size:Math.random()*4+2,color:C%3===0?"rgba(42, 157, 143, 0.4)":C%3===1?"rgba(59, 180, 177, 0.3)":"rgba(67, 97, 165, 0.3)",duration:Math.random()*3+2,delay:Math.random()*2}));return R.useEffect(()=>{const E=setTimeout(()=>{H("exit")},2200);return()=>clearTimeout(E)},[]),R.useEffect(()=>{T==="exit"&&g()},[T,g]),u.jsxs(am,{variants:dm,initial:"initial",animate:T,children:[u.jsx(em,{variants:fm,initial:"initial",animate:T}),u.jsx(im,{initial:{opacity:1},animate:{opacity:T==="exit"?0:1},transition:{duration:.2},children:p.map(E=>u.jsx(nm,{$size:E.size,$color:E.color,style:{left:`${E.x}%`,top:`${E.y}%`},initial:{opacity:0,scale:0},animate:{opacity:[0,.8,0],scale:[0,1,0],y:[0,-100]},transition:{duration:E.duration,delay:E.delay,repeat:1/0,repeatDelay:Math.random()*2}},E.id))}),u.jsx(lm,{variants:gm,initial:"initial",animate:T,children:u.jsxs(rm,{children:[u.jsx(om,{variants:pm,initial:"initial",animate:"animate"}),u.jsx(Su,{}),u.jsx(Su,{}),u.jsx(Su,{}),u.jsx(um,{variants:mm,initial:"initial",animate:"animate"}),u.jsxs("picture",{children:[u.jsx("source",{srcSet:"/images/logo-optimized.webp",type:"image/webp"}),u.jsx(cm,{src:"/images/logo-optimized.png",alt:"PN",width:80,height:80,loading:"eager",decoding:"async",variants:hm,initial:"initial",animate:"animate"})]}),u.jsx(sm,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:.5}})]})})]})},vm=d.canvas`
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
`,Cf=[{r:42,g:157,b:143},{r:59,g:180,b:177},{r:67,g:97,b:165},{r:123,g:167,b:217}],ym=()=>{const g=R.useRef(null),T=R.useRef([]),H=R.useRef(0),p=R.useRef({x:window.innerWidth/2,y:window.innerHeight/2});return R.useEffect(()=>{const E=g.current;if(!E)return;const C=E.getContext("2d");if(!C)return;const M=()=>{const D=window.devicePixelRatio||1;E.width=window.innerWidth*D,E.height=window.innerHeight*D,E.style.width=`${window.innerWidth}px`,E.style.height=`${window.innerHeight}px`,C.scale(D,D)};M(),window.addEventListener("resize",M);const Y=4;T.current=[];for(let D=0;D<Y;D++)T.current.push({x:window.innerWidth/2,y:window.innerHeight/2,size:60+D*20,color:Cf[D%Cf.length],speed:.1-D*.015,offset:D*.4});let N=0;const X=()=>{N+=.016,C.clearRect(0,0,E.width,E.height);const D=T.current,K=p.current;for(let Lt=D.length-1;Lt>=0;Lt--){const I=D[Lt],Ut=Math.sin(N*1.5+I.offset*4)*15,ht=Math.cos(N*1.5+I.offset*4)*15;I.x+=(K.x+Ut-I.x)*I.speed,I.y+=(K.y+ht-I.y)*I.speed;const J=I.size+Math.sin(N*1.2+I.offset*2)*8,zt=C.createRadialGradient(I.x,I.y,0,I.x,I.y,J),{r:vt,g:kt,b:Ft}=I.color;zt.addColorStop(0,`rgba(${vt}, ${kt}, ${Ft}, 0.25)`),zt.addColorStop(.4,`rgba(${vt}, ${kt}, ${Ft}, 0.1)`),zt.addColorStop(.7,`rgba(${vt}, ${kt}, ${Ft}, 0.03)`),zt.addColorStop(1,`rgba(${vt}, ${kt}, ${Ft}, 0)`),C.beginPath(),C.arc(I.x,I.y,J,0,Math.PI*2),C.fillStyle=zt,C.fill()}H.current=requestAnimationFrame(X)},mt=D=>{p.current={x:D.clientX,y:D.clientY}};return window.addEventListener("mousemove",mt),H.current=requestAnimationFrame(X),()=>{window.removeEventListener("resize",M),window.removeEventListener("mousemove",mt),cancelAnimationFrame(H.current)}},[]),u.jsx(vm,{ref:g})},xm=ut`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Sm=ut`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(3deg);
  }
`,zm=ut`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`,Xf=ut`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,wm=d.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 24px 40px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  overflow: hidden;
  position: relative;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px 60px;
  }
  
  @media (min-width: ${A.breakpoints.desktop}) {
    padding: 100px 48px 60px;
  }
`,Am=d(v.div)`
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
`,Tm=d.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,Em=d.div`
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
`,jm=d.div`
  perspective: 1000px;
`,Mm=d(v.div)`
  display: flex;
  justify-content: center;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`,Dm=d(v.div)`
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
`,km=d(v.div)`
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
`,Cm=d.picture`
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
`,Om=d.div`
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
    animation: ${xm} 6s linear infinite;
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
  animation: ${Sm} 5s ease-in-out infinite;
  will-change: transform;
  
  ${({$position:g})=>{switch(g){case"top":return`
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
  
  @media (max-width: ${A.breakpoints.tablet}) {
    display: none;
  }
`,Hm=d(v.div)`
  position: absolute;
  inset: -60px;
  background: radial-gradient(
    ellipse at center,
    rgba(var(--accent-rgb), 0.2) 0%,
    rgba(var(--blue-rgb), 0.12) 35%,
    transparent 65%
  );
  z-index: -3;
  animation: ${zm} 3s ease-in-out infinite;
  filter: blur(30px);
  will-change: transform, opacity;
`,Bm=d(v.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;
`,Um=d(v.span)`
  width: 40px;
  height: 2px;
  background: var(--gradient-horizontal);
  border-radius: var(--radius-full);
  transform-origin: left;
`,Nm=d(v.span)`
  font-size: 13px;
  font-weight: ${A.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Xf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,Gm=d(v.div)`
  overflow: hidden;
  margin-bottom: 24px;
`,qm=d(v.h1)`
  font-size: clamp(52px, 9vw, 96px);
  font-weight: ${A.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.04em;
  line-height: 0.92;
  transition: color var(--timing-medium) var(--ease-standard);
  will-change: transform;
`,_m=d(v.span)`
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
`,Rm=d(v.p)`
  font-size: clamp(17px, 2.2vw, 22px);
  font-weight: ${A.typography.fontWeight.regular};
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 20px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Ym=d(v.p)`
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--text-tertiary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color var(--timing-medium) var(--ease-standard);
  max-width: 680px;
`,Xm=d(v.div)`
  display: flex;
  gap: 14px;
  flex-wrap: nowrap;
  margin-bottom: 56px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`,Lm=d(v.a)`
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
`,Qm=d(v.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--gradient);
  background-size: 200% 200%;
  color: white;
  font-size: 15px;
  font-weight: ${A.typography.fontWeight.medium};
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
    animation: ${Xf} 3s ease infinite;
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
`,Vm=d(v.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 40px 0;
  margin-top: 8px;
  border-top: 1px solid var(--border);
  transition: border-color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${A.breakpoints.mobile}) {
    gap: 32px;
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    gap: 48px;
  }
`,Zm=d(v.div)`
  text-align: center;
  
  @media (min-width: ${A.breakpoints.mobile}) {
    text-align: left;
  }
`,$m=d(v.span)`
  display: block;
  font-size: clamp(26px, 5.5vw, 44px);
  font-weight: ${A.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 10px;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${A.breakpoints.mobile}) {
    font-size: clamp(30px, 4.5vw, 44px);
    margin-bottom: 12px;
  }
`,Km=d.span`
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-transform: uppercase;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${A.breakpoints.mobile}) {
    font-size: 12px;
  }
`,Jm={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},Wl={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,mass:1}}},Wm={hidden:{opacity:0,y:80,rotateX:-20},visible:{opacity:1,y:0,rotateX:0,transition:{type:"spring",stiffness:80,damping:20,mass:1.2}}},Fm={hidden:{opacity:0,scale:.85,rotateY:-15,filter:"blur(15px)"},visible:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:60,damping:20,mass:1.5,delay:.3}}},Im={hidden:{scaleX:0},visible:{scaleX:1,transition:{type:"spring",stiffness:100,damping:20,delay:.1}}},Pm={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.6}}},th={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:150,damping:20}}},ah=({data:g})=>{const T=R.useRef(null),{scrollYProgress:H}=vp({target:T,offset:["start start","end start"]}),p=bu(H,[0,1],["0%","30%"]),E=bu(H,[0,.5],[1,.9]),C=bu(H,[0,.5],[1,.6]),M=Af(p,{stiffness:100,damping:30}),Y=Af(E,{stiffness:100,damping:30}),N=[{value:"10+",label:"Years"},{value:"65+",label:"Engineers Steered"},{value:"$2M+",label:"Savings"},{value:"15+",label:"Products"}];return u.jsxs(wm,{id:"home",ref:T,children:[u.jsx(Am,{style:{y:M}}),u.jsx(Tm,{children:u.jsxs(Em,{children:[u.jsx(jm,{children:u.jsxs(v.div,{variants:Jm,initial:"hidden",animate:"visible",children:[u.jsxs(Bm,{variants:Wl,children:[u.jsx(Um,{variants:Im}),u.jsx(Nm,{children:"Engineering Leader & Architect"})]}),u.jsx(Gm,{children:u.jsxs(qm,{variants:Wm,children:[u.jsx(_m,{children:g.name.split(" ")[0]}),u.jsx("br",{}),g.name.split(" ").slice(1).join(" ")]})}),u.jsx(Rm,{variants:Wl,children:g.designation}),u.jsx(Ym,{variants:Wl,children:g.headline}),u.jsxs(Xm,{variants:Wl,children:[u.jsxs(Lm,{href:"#contact",onClick:X=>{X.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[u.jsx("span",{children:"Get in Touch"}),u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),u.jsxs(Qm,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[u.jsx("span",{children:"Download Resume"}),u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),u.jsx(Vm,{variants:Pm,initial:"hidden",animate:"visible",children:N.map((X,mt)=>u.jsxs(Zm,{variants:th,children:[u.jsx($m,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:100,damping:15,delay:.7+mt*.1},children:X.value}),u.jsx(Km,{children:X.label})]},mt))})]})}),u.jsx(Mm,{variants:Fm,initial:"hidden",animate:"visible",style:{scale:Y,opacity:C},children:u.jsxs(Dm,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:200,damping:20},children:[u.jsx(Hm,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:.5}}),u.jsx(Jl,{$position:"top",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.6}}),u.jsx(Jl,{$position:"bottom",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.6}}),u.jsx(Jl,{$position:"left",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.9,duration:.6}}),u.jsx(Jl,{$position:"right",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:1.1,duration:.6}}),u.jsx(Om,{}),u.jsx(km,{whileHover:{scale:1.03},transition:{type:"spring",stiffness:300,damping:25},children:u.jsxs(Cm,{children:[u.jsx("source",{srcSet:"/images/profile.webp",type:"image/webp"}),u.jsx("img",{src:"/images/IMG_0832.PNG",alt:`${g.name} - Engineering Leader & Architect`,width:560,height:560,loading:"eager",decoding:"async",fetchPriority:"high"})]})})]})})]})})]})};d.div`
  width: 100%;
  max-width: ${({$wide:g})=>g?A.maxWidth.full:A.maxWidth.wide};
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${A.breakpoints.mobile}) {
    padding: 0 32px;
  }

  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 0 48px;
  }
`;const Lf=ut`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,eh=ut`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,ih=d(v.div)`
  margin-bottom: 64px;
  position: relative;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    margin-bottom: 88px;
  }
`,nh=d.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    gap: 32px;
  }
`,lh=d(v.div)`
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
    animation: ${eh} 1.5s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    width: 52px;
    height: 52px;
    border-radius: var(--radius-xl);
  }
`,rh=d.span`
  font-size: 14px;
  font-weight: ${A.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Lf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-variant-numeric: tabular-nums;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 16px;
  }
`,oh=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,uh=d(v.span)`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-tertiary);
  font-weight: ${A.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 12px;
    letter-spacing: 0.18em;
  }
`,ch=d(v.h2)`
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: ${A.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.1;
  transition: color var(--timing-medium) var(--ease-standard);
  margin: 0;
`,sh=d(v.div)`
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 2px;
  width: 60px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${Lf} 3s ease infinite;
  border-radius: var(--radius-full);
  transform-origin: left;
  
  /* Glass glow effect */
  box-shadow: 0 0 12px -2px rgba(var(--accent-rgb), 0.4);
  
  @media (min-width: ${A.breakpoints.tablet}) {
    width: 80px;
    bottom: -24px;
  }
`,dh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},fh={hidden:{opacity:0,scale:.8,filter:"blur(8px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:200,damping:20}}},gh={hidden:{opacity:0,x:-10,filter:"blur(4px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:150,damping:20}}},ph={hidden:{opacity:0,y:20,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},mh={hidden:{scaleX:0,opacity:0},visible:{scaleX:1,opacity:1,transition:{duration:.6,ease:[.25,.1,.25,1],delay:.3}}},hh={About:"Who I Am",Skills:"Technical Expertise",Experience:"Career Journey",Projects:"Featured Work",Certifications:"Credentials",Testimonials:"What Others Say",Education:"Academic Background",Contact:"Get In Touch"},we=({number:g,title:T,inView:H=!0})=>{const p=hh[T]||"Section";return u.jsxs(ih,{variants:dh,initial:"hidden",animate:H?"visible":"hidden",children:[u.jsxs(nh,{children:[u.jsx(lh,{variants:fh,whileHover:{scale:1.05},whileTap:{scale:.98},children:u.jsx(rh,{children:g})}),u.jsxs(oh,{children:[u.jsx(uh,{variants:gh,children:p}),u.jsx(ch,{variants:ph,children:T})]})]}),u.jsx(sh,{variants:mh})]})},bh=ut`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Qf=ut`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,vh=ut`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
`,Ci=ot`
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
`,Vf=ot`
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
    animation: ${bh} 1.5s ease infinite;
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
  
  ${({$elevated:g})=>g&&ot`
    box-shadow: var(--card-shadow-hover);
  `}
  
  ${({$interactive:g})=>g&&ot`
    ${Vf}
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
  
  ${({$accent:g})=>g&&ot`
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
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 32px;
    border-radius: var(--radius-xl);
  }
`;d(v.div)`
  ${Ci}
  
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  box-shadow: var(--card-shadow);
  
  ${({$subtle:g})=>g&&ot`
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur-secondary));
    -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
    box-shadow: none;
    border-color: var(--card-border);
  `}
  
  @media (min-width: ${A.breakpoints.tablet}) {
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
  ${({$size:g="md"})=>{switch(g){case"sm":return ot`
          padding: 10px 18px;
          font-size: 13px;
        `;case"lg":return ot`
          padding: 18px 36px;
          font-size: 16px;
        `;default:return ot`
          padding: 14px 26px;
          font-size: 15px;
        `}}}
  
  /* Variant styles */
  ${({$variant:g="primary"})=>{switch(g){case"secondary":return ot`
          ${Ci}
          color: var(--text-primary);
          
          &:hover {
            background: var(--glass-bg-hover);
            box-shadow: var(--card-shadow);
          }
        `;case"ghost":return ot`
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          
          &:hover {
            background: var(--glass-bg);
            border-color: var(--border-hover);
            color: var(--text-primary);
          }
        `;default:return ot`
          background: var(--gradient);
          background-size: 200% 200%;
          border: none;
          color: white;
          box-shadow: 0 4px 16px rgba(var(--accent-rgb), 0.3);
          
          &:hover {
            animation: ${Qf} 3s ease infinite;
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
  
  ${({$variant:g="default"})=>{switch(g){case"accent":return ot`
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), rgba(var(--blue-rgb), 0.1));
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent);
        `;case"subtle":return ot`
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
        `;default:return ot`
          ${Ci}
          color: var(--text-primary);
        `}}}
`;d.div`
  height: 1px;
  width: 100%;
  background: var(--border);
  margin: 24px 0;
  
  ${({$gradient:g})=>g&&ot`
    height: 2px;
    background: var(--gradient);
    border-radius: 1px;
  `}
`;d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Ci}
  ${Vf}
  
  ${({$size:g="md"})=>{switch(g){case"sm":return ot`
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          
          svg {
            width: 18px;
            height: 18px;
          }
        `;case"lg":return ot`
          width: 56px;
          height: 56px;
          border-radius: var(--radius-xl);
          
          svg {
            width: 28px;
            height: 28px;
          }
        `;default:return ot`
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
  animation: ${vh} 4s ease-in-out infinite;
  
  ${({$color:g="accent",$intensity:T="normal"})=>{const H=T==="subtle"?.15:T==="strong"?.35:.25;switch(g){case"blue":return ot`
          background: rgba(var(--blue-rgb), ${H});
        `;case"mixed":return ot`
          background: radial-gradient(
            ellipse,
            rgba(var(--accent-rgb), ${H}) 0%,
            rgba(var(--blue-rgb), ${H*.7}) 50%,
            transparent 70%
          );
        `;default:return ot`
          background: rgba(var(--accent-rgb), ${H});
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
  
  ${({$animated:g})=>g&&ot`
    animation: ${Qf} 4s ease infinite;
  `}
`;const Zf=ut`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,yh=ut`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,xh=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Sh=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,zh=d(v.div)`
  margin-bottom: 48px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    margin-bottom: 64px;
  }
`,wh=d(v.div)`
  position: relative;
  padding-left: 36px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding-left: 56px;
  }
`,Ah=d(v.div)`
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
`,Th=d(v.p)`
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: ${A.typography.fontWeight.regular};
  color: var(--text-primary);
  line-height: 1.6;
  letter-spacing: -0.01em;
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
`,Eh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 64px;
  }
`,Of=d(v.div)``,Hf=d(v.h3)`
  font-size: 13px;
  font-weight: ${A.typography.fontWeight.semibold};
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
`,Bf=d(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.85;
  transition: color var(--timing-medium) var(--ease-standard);
`,jh=d(v.div)`
  margin-bottom: 48px;
`,Mh=d(v.h3)`
  font-size: 13px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Dh=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: ${A.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--glass-border);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-xl);
    overflow: hidden;
    transition: background-color var(--timing-medium) var(--ease-standard), 
                border-color var(--timing-medium) var(--ease-standard);
  }
`,kh=d(v.div)`
  position: relative;
  background: var(--bg-primary);
  padding: 36px;
  overflow: hidden;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: background-color var(--timing-medium) var(--ease-standard);
  
  /* Mobile: Individual glass cards */
  @media (max-width: ${A.breakpoints.mobile}) {
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
    animation: ${yh} 1.5s ease infinite;
  }
  
  @media (min-width: ${A.breakpoints.mobile}) {
    padding: 48px 36px;
  }
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 56px 44px;
  }
`,Ch=d(v.h4)`
  font-size: 19px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 18px;
  line-height: 1.35;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
`,Oh=d(v.p)`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
`,Hh=d(v.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding-top: 56px;
  border-top: 1px solid var(--border);
  transition: border-color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${A.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,Bh=d(v.p)`
  font-size: 19px;
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 21px;
  }
`,Uh=d(v.a)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: var(--gradient);
  background-size: 200% 200%;
  color: white;
  font-size: 15px;
  font-weight: ${A.typography.fontWeight.medium};
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
`,Nh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},Gh={hidden:{opacity:0,y:50,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:20,mass:1}}},qh={hidden:{scaleY:0},visible:{scaleY:1,transition:{type:"spring",stiffness:100,damping:20,delay:.2}}},Uf={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:g=>({opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,delay:g*.15}})},_h={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},Rh={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.4,ease:[.25,.46,.45,.94]}}},Yh=({data:g})=>{const T=R.useRef(null),H=xa(T,{once:!0,margin:"-100px"}),p=R.useRef(null),E=xa(p,{once:!0,margin:"-50px"}),C=R.useRef(null),M=xa(C,{once:!0,margin:"-50px"}),Y=R.useRef(null),N=xa(Y,{once:!0,margin:"-50px"}),X=g.content.slice(0,3).map(D=>D.replace(/^🔹\s*/,"").trim()),mt=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}];return u.jsx(xh,{id:"about",ref:T,children:u.jsxs(Sh,{children:[u.jsx(we,{number:"01",title:"About",inView:H}),u.jsx(zh,{ref:p,children:u.jsxs(wh,{initial:"hidden",animate:E?"visible":"hidden",variants:Nh,children:[u.jsx(Ah,{variants:qh}),u.jsx(Th,{variants:Gh,children:X[0]})]})}),u.jsxs(Eh,{ref:C,children:[u.jsxs(Of,{variants:Uf,custom:0,initial:"hidden",animate:M?"visible":"hidden",children:[u.jsx(Hf,{initial:{opacity:0,x:-20},animate:M?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Transformation"}),u.jsx(Bf,{initial:{opacity:0,y:20},animate:M?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:X[1]})]}),u.jsxs(Of,{variants:Uf,custom:1,initial:"hidden",animate:M?"visible":"hidden",children:[u.jsx(Hf,{initial:{opacity:0,x:-20},animate:M?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.15},children:"Philosophy"}),u.jsx(Bf,{initial:{opacity:0,y:20},animate:M?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.25},children:X[2]})]})]}),u.jsxs(jh,{ref:Y,children:[u.jsx(Mh,{initial:{opacity:0,y:20},animate:N?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Key Highlights"}),u.jsx(Dh,{variants:_h,initial:"hidden",animate:N?"visible":"hidden",children:mt.map((D,K)=>u.jsxs(kh,{variants:Rh,children:[u.jsx(Ch,{children:D.title}),u.jsx(Oh,{children:D.text})]},K))})]}),u.jsxs(Hh,{initial:{opacity:0,y:30},animate:H?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[u.jsx(Bh,{children:"Want to know more?"}),u.jsxs(Uh,{href:g.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[u.jsx("span",{children:g.buttonProps.name}),u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]})})},Xh=ut`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,Lh=ut`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Qh=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Vh=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Zh=d(v.div)`
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
`,$h=d(v.div)``,Kh=d(v.h3)`
  font-size: 13px;
  font-weight: ${A.typography.fontWeight.semibold};
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
`,Jh=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Wh=d(v.li)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Fh=d(v.div)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,Ih=d(v.span)`
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
`,Ph=d(v.span)`
  font-size: 13px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  font-weight: ${A.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
`,tb=d(v.div)`
  width: 100%;
  height: 4px;
  background: var(--glass-border);
  border-radius: var(--radius-full);
  overflow: hidden;
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  /* Subtle inner shadow for depth */
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`,ab=d.div`
  height: 100%;
  background: var(--gradient-horizontal);
  border-radius: var(--radius-full);
  transform-origin: left;
  width: ${g=>g.$percentage}%;
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
    animation: ${Lh} 2s ease infinite;
    animation-delay: ${g=>g.$delay+.6}s;
  }
  
  ${g=>g.$animate&&ot`
    animation: ${Xh} 0.6s cubic-bezier(0.33, 1, 0.68, 1) forwards;
    animation-delay: ${g.$delay}s;
  `}
`,eb=({category:g})=>{const T=R.useRef(null),H=xa(T,{once:!0,margin:"-50px"});return u.jsxs($h,{ref:T,initial:{opacity:0,y:30,filter:"blur(4px)"},animate:H?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:30,filter:"blur(4px)"},transition:{type:"spring",stiffness:100,damping:20},children:[u.jsx(Kh,{children:g.category}),u.jsx(Jh,{children:g.skills.map((p,E)=>u.jsxs(Wh,{initial:{opacity:0,x:-20},animate:H?{opacity:1,x:0}:{opacity:0,x:-20},transition:{type:"spring",stiffness:100,damping:20,delay:E*.05},whileHover:{x:8,transition:{type:"spring",stiffness:400,damping:25}},children:[u.jsxs(Fh,{children:[u.jsx(Ih,{children:p.name}),u.jsxs(Ph,{children:[p.percentage,"%"]})]}),u.jsx(tb,{children:u.jsx(ab,{$percentage:p.percentage,$delay:.1+E*.06,$animate:H})})]},p.name))})]})},ib=({data:g})=>{const T=R.useRef(null),H=xa(T,{once:!0,margin:"-100px"});return u.jsx(Qh,{id:"technologyproficiency",ref:T,children:u.jsxs(Vh,{children:[u.jsx(we,{number:"02",title:"Skills",inView:H}),u.jsx(Zh,{children:g.skills.map(p=>u.jsx(eb,{category:p},p.category))})]})})},nb=ut`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0);
  }
  50% {
    box-shadow: 0 0 20px 5px rgba(var(--accent-rgb), 0.15);
  }
`,lb=ut`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,rb=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,ob=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,ub=d(v.div)``,cb=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  transition: border-color var(--timing-medium) var(--ease-standard);
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
  
  @media (min-width: ${A.breakpoints.tablet}) {
    &::before {
      left: -48px;
    }
  }
`,sb=d(v.div)``,db=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color var(--timing-medium) var(--ease-standard);
`,fb=d(v.div)``,gb=d(v.div)``,pb=d(v.h3)`
  font-size: 22px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin-bottom: 4px;
  transition: color var(--timing-medium) var(--ease-standard);
  
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
`,mb=d(v.button)`
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
  background: ${({$isOpen:g})=>g?"var(--accent)":"var(--glass-bg)"};
  backdrop-filter: blur(var(--glass-blur-secondary));
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
  outline: 1.5px solid ${({$isOpen:g})=>g?"var(--accent)":"var(--glass-border)"};
  
  ${({$isOpen:g})=>g&&ot`
    animation: ${nb} 2s ease-in-out infinite;
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
    animation: ${lb} 1.5s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,hb=d(v.span)`
  font-size: 12px;
  font-weight: ${A.typography.fontWeight.medium};
  color: ${({$isOpen:g})=>g?"var(--bg-primary)":"var(--text-secondary)"};
  white-space: nowrap;
  letter-spacing: 0.02em;
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
`,bb=d(v.span)`
  display: inline-flex;
  align-items: center;
`,vb=d(v.p)`
  font-size: 16px;
  color: var(--accent);
  font-weight: ${A.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
`,yb=d(v.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  flex-wrap: wrap;
`,xb=d.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
  font-weight: ${A.typography.fontWeight.medium};
`,Sb=d.span`
  font-size: 14px;
  color: var(--text-secondary);
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
`,zb=d(v.p)`
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
`,wb=d(v.div)`
  overflow: hidden;
  will-change: height, opacity;
`,Ab=d(v.div)`
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  will-change: transform, opacity;
  transition: border-color var(--timing-medium) var(--ease-standard);
`,Tb=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Eb=d(v.li)`
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
`,jb=d.span`
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--accent);
  transition: color var(--timing-medium) var(--ease-standard);
`,Mb=d.span`
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Db={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35,mass:1},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},kb={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.08}}},Cb={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.12}}},Ob={collapsed:{opacity:0,x:-15,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},Hb=({data:g})=>{const[T,H]=R.useState(new Set),p=R.useRef(null),E=xa(p,{once:!0,margin:"-100px"}),C=M=>{H(Y=>{const N=new Set(Y);return N.has(M)?N.delete(M):N.add(M),N})};return u.jsx(rb,{id:"professionalexperience",ref:p,children:u.jsxs(ob,{children:[u.jsx(we,{number:"03",title:"Experience",inView:E}),u.jsx(ub,{children:g.timeline.map((M,Y)=>{const N=T.has(Y);return u.jsxs(cb,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:[u.jsx(sb,{children:u.jsx(db,{children:M.date})}),u.jsxs(fb,{children:[u.jsxs(gb,{children:[u.jsx(pb,{children:u.jsx("a",{href:M.url,target:"_blank",rel:"noopener noreferrer",children:M.title})}),u.jsx(vb,{children:M.subTitle}),M.previously&&u.jsxs(yb,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.1},children:[u.jsx(xb,{children:"Previously:"}),u.jsx(Sb,{children:M.previously})]})]}),u.jsx(zb,{dangerouslySetInnerHTML:{__html:M.descriptionSummary}}),u.jsx(mb,{$isOpen:N,whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},onClick:()=>C(Y),"aria-expanded":N,"aria-label":N?"Show less":"Show more",children:u.jsxs(hb,{$isOpen:N,children:["Show ",u.jsx(Le,{mode:"wait",children:u.jsx(bb,{initial:"hidden",animate:"visible",exit:"exit",children:(N?"Less":"More").split("").map((X,mt)=>u.jsx(v.span,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:mt*.05}},exit:{opacity:0,transition:{delay:(3-mt)*.03}}},children:X},mt))},N?"less":"more")})]})}),u.jsx(Le,{initial:!1,children:N&&u.jsx(wb,{variants:Db,initial:"collapsed",animate:"expanded",exit:"collapsed",children:u.jsx(Ab,{variants:kb,children:u.jsx(Tb,{variants:Cb,initial:"collapsed",animate:"expanded",exit:"collapsed",children:M.achievements?.map((X,mt)=>u.jsxs(Eb,{variants:Ob,children:[u.jsx(jb,{children:X.title}),": ",u.jsx(Mb,{children:X.description})]},mt))})})},"content")})]})]},Y)})})]})})},$f=ut`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Bb=ut`
  0%, 100% {
    box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.2);
  }
`,Ub=ut`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Nb=d.section`
  padding: 64px 24px;
  overflow: hidden;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Gb=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,qb=d(v.div)`
  position: relative;
`,_b=d.div`
  position: relative;
  perspective: 1000px;
`,Rb=d(v.article)`
  border-radius: var(--radius-xl);
  will-change: transform, opacity;
  overflow: hidden;
  position: relative;
  animation: ${Bb} 4s ease-in-out infinite;
  
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
    animation: ${$f} 4s ease infinite;
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
  
  @media (min-width: ${A.breakpoints.tablet}) {
    border-radius: var(--radius-2xl);
    
    &::before, &::after {
      border-radius: var(--radius-2xl);
    }
  }
`,Yb=d(v.div)`
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
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 32px 40px;
  }
`,Xb=d(v.h3)`
  font-size: 20px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.35;
  flex: 1;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 24px;
  }
`,Lb=d(v.button)`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  border: 1.5px solid ${({$isExpanded:g})=>g?"var(--accent)":"var(--glass-border)"};
  background: ${({$isExpanded:g})=>g?"var(--accent-subtle)":"var(--glass-bg)"};
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
    animation: ${Ub} 1.5s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({$isExpanded:g})=>g?"var(--accent)":"var(--text-secondary)"};
    will-change: transform;
    position: relative;
    z-index: 1;
  }
`,Qb=d(v.div)`
  overflow: hidden;
  will-change: height;
`,Vb=d(v.div)`
  padding: 0 32px 32px;
  border-top: 1px solid var(--glass-border);
  padding-top: 28px;
  transition: border-color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 0 40px 36px;
    padding-top: 32px;
  }
`,Zb=d(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 36px;
  }
`,$b=d(v.li)`
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
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 16px;
  }
`,Kb=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 48px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    gap: 36px;
    margin-top: 56px;
  }
`,Nf=d(v.button)`
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
`,Jb=d(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,Wb=d(v.button)`
  width: ${({$isActive:g})=>g?"36px":"12px"};
  height: 12px;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  background: ${({$isActive:g})=>g?"var(--gradient)":"var(--glass-border)"};
  background-size: 200% 200%;
  ${({$isActive:g})=>g&&ot`
    animation: ${$f} 3s ease infinite;
  `}
  will-change: width, background;
  transition: background var(--timing-small) var(--ease-standard);
  
  &:hover {
    background: ${({$isActive:g})=>g?"var(--gradient)":"var(--text-tertiary)"};
  }
`,Fb={enter:g=>({x:g>0?80:-80,opacity:0,scale:.98}),center:{x:0,opacity:1,scale:1,transition:{type:"spring",stiffness:500,damping:35,mass:.8}},exit:g=>({x:g<0?80:-80,opacity:0,scale:.98,transition:{type:"spring",stiffness:500,damping:35,mass:.8}})},Ib={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},Pb={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.1}}},tv={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.15}}},av={collapsed:{opacity:0,x:-20,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},ev=({data:g})=>{const[[T,H],p]=R.useState([0,0]),[E,C]=R.useState(!1),[M,Y]=R.useState(!1),N=R.useRef(null),X=R.useRef(null),mt=R.useRef(0),D=xa(N,{once:!0,margin:"-100px"}),K=R.useCallback(ht=>{if(M)return;const J=T+ht;J>=0&&J<g.content.length&&(Y(!0),p([J,ht]),C(!1),setTimeout(()=>Y(!1),350))},[T,g.content.length,M]),Lt=R.useCallback(ht=>{if(M||ht===T)return;const J=ht>T?1:-1;Y(!0),p([ht,J]),C(!1),setTimeout(()=>Y(!1),350)},[T,M]);R.useEffect(()=>{const ht=X.current;if(!ht)return;const J=zt=>{const vt=Date.now();if(vt-mt.current<300)return;const kt=Math.abs(zt.deltaX)>Math.abs(zt.deltaY)?zt.deltaX:zt.deltaY;if(Math.abs(kt)>20){const ua=T<g.content.length-1,Sa=T>0;(kt>0&&ua||kt<0&&Sa)&&(zt.preventDefault(),zt.stopPropagation(),mt.current=vt,kt>0?K(1):K(-1))}};return ht.addEventListener("wheel",J,{passive:!1}),()=>ht.removeEventListener("wheel",J)},[T,g.content.length,K]);const I=R.useCallback((ht,J)=>{if(M)return;const zt=30,vt=200;J.velocity.x>vt||J.offset.x>zt?T>0&&K(-1):(J.velocity.x<-vt||J.offset.x<-zt)&&T<g.content.length-1&&K(1)},[T,g.content.length,M,K]),Ut=g.content[T];return u.jsx(Nb,{id:"mostproudof",ref:N,children:u.jsxs(Gb,{children:[u.jsx(we,{number:"04",title:"Projects",inView:D}),u.jsxs(qb,{initial:{opacity:0,y:40},animate:D?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:20,delay:.2},children:[u.jsx(_b,{ref:X,children:u.jsx(Le,{initial:!1,custom:H,mode:"wait",children:u.jsxs(Rb,{custom:H,variants:Fb,initial:"enter",animate:"center",exit:"exit",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.1,dragMomentum:!1,onDragEnd:I,transition:{x:{type:"spring",stiffness:500,damping:35,mass:.8},opacity:{duration:.2},scale:{type:"spring",stiffness:500,damping:35,mass:.8}},style:{cursor:"grab",touchAction:"pan-y"},whileDrag:{cursor:"grabbing",scale:1.01},children:[u.jsxs(Yb,{$isExpanded:E,onClick:()=>C(!E),whileHover:{scale:1.01},transition:{type:"spring",stiffness:400,damping:25},children:[u.jsx(Xb,{children:Ut.title}),u.jsx(Lb,{$isExpanded:E,"aria-label":E?"Collapse project details":"Expand project details","aria-expanded":E,animate:{rotate:E?45:0,scale:E?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:u.jsx(v.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:u.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),u.jsx(Le,{initial:!1,children:E&&u.jsx(Qb,{variants:Ib,initial:"collapsed",animate:"expanded",exit:"collapsed",children:u.jsx(Vb,{variants:Pb,children:u.jsx(Zb,{variants:tv,initial:"collapsed",animate:"expanded",exit:"collapsed",children:Ut.content.map((ht,J)=>u.jsx($b,{variants:av,children:ht},J))})})})})]},T)})}),u.jsxs(Kb,{initial:{opacity:0,y:20},animate:D?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[u.jsx(Nf,{onClick:()=>K(-1),disabled:T===0,"aria-label":"Previous project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:u.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),u.jsx(Jb,{role:"tablist","aria-label":"Project navigation",children:g.content.map((ht,J)=>u.jsx(Wb,{$isActive:T===J,onClick:()=>Lt(J),role:"tab","aria-selected":T===J,"aria-label":`Go to project ${J+1}: ${ht.title}`,whileHover:{scale:1.1},whileTap:{scale:.95},animate:{width:T===J?36:12},transition:{type:"spring",stiffness:400,damping:25}},J))}),u.jsx(Nf,{onClick:()=>K(1),disabled:T===g.content.length-1,"aria-label":"Next project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:u.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]})]})})},iv=ut`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,nv=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,lv=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,rv=d(v.div)`
  display: flex;
  flex-direction: column;
`,ov=d(v.div)`
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
`,uv=d(v.div)`
  flex: 1;
`,cv=d(v.h3)`
  font-size: 18px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 6px;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 20px;
  }
`,sv=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
`,dv=d(v.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: ${A.typography.fontWeight.medium};
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
    animation: ${iv} 1.5s ease infinite;
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
`,fv=({data:g})=>{const T=R.useRef(null),H=xa(T,{once:!0,margin:"-100px"}),p=E=>E.toLowerCase().includes("azure")||E.toLowerCase().includes("microsoft")?"Microsoft":E.toLowerCase().includes("aws")?"Amazon Web Services":"";return u.jsx(nv,{id:"certifications",ref:T,children:u.jsxs(lv,{children:[u.jsx(we,{number:"05",title:"Certifications",inView:H}),u.jsx(rv,{children:g.certificateProps.certificateMetaData.map((E,C)=>u.jsxs(ov,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:C*.08},whileHover:{x:12,transition:{type:"spring",stiffness:400,damping:25}},children:[u.jsxs(uv,{children:[u.jsx(cv,{children:E.title}),u.jsx(sv,{children:p(E.title)})]}),u.jsxs(dv,{href:E.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[u.jsx("span",{children:"Verify"}),u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),u.jsx("polyline",{points:"15,3 21,3 21,9"}),u.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]},C))})]})})},Kf=ut`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,gv=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,pv=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,mv=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }
`,hv=d(v.blockquote)`
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
    animation: ${Kf} 3s ease infinite;
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
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 52px;
  }
`,bv=d(v.div)`
  font-size: 56px;
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Kf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 24px;
  font-weight: bold;
  position: relative;
  z-index: 1;
`,vv=d(v.p)`
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 28px;
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 18px;
  }
`,yv=d(v.footer)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  z-index: 1;
`,xv=d(v.cite)`
  font-size: 16px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  font-style: normal;
  transition: color var(--timing-medium) var(--ease-standard);
`,Sv=d(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
`,zv=({data:g})=>{const T=R.useRef(null),H=xa(T,{once:!0,margin:"-100px"});return u.jsx(gv,{id:"testimonials",ref:T,children:u.jsxs(pv,{children:[u.jsx(we,{number:"06",title:"Testimonials",inView:H}),u.jsx(mv,{children:g.quoteProps.quoteMetaData.map((p,E)=>u.jsxs(hv,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:E*.1},whileHover:{y:-8,scale:1.02,transition:{type:"spring",stiffness:300,damping:20}},children:[u.jsx(bv,{children:'"'}),u.jsx(vv,{children:p.quote}),u.jsxs(yv,{children:[u.jsx(xv,{children:p.givenBy}),u.jsx(Sv,{children:p.subTitleGivenBy})]})]},E))})]})})},wv=d.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Av=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Tv=d(v.div)`
  display: flex;
  flex-direction: column;
`,Ev=d(v.div)`
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
`,jv=d(v.span)`
  font-size: 15px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color var(--timing-medium) var(--ease-standard);
  font-weight: ${A.typography.fontWeight.medium};
`,Mv=d(v.div)``,Dv=d(v.h3)`
  font-size: 20px;
  font-weight: ${A.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${A.breakpoints.tablet}) {
    font-size: 22px;
  }
`,kv=d(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Cv=({data:g})=>{const T=R.useRef(null),H=xa(T,{once:!0,margin:"-100px"});return u.jsx(wv,{id:"educationalqualifications",ref:T,children:u.jsxs(Av,{children:[u.jsx(we,{number:"07",title:"Education",inView:H}),u.jsx(Tv,{children:g.timeline.map((p,E)=>u.jsxs(Ev,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:E*.1},whileHover:{x:16,transition:{type:"spring",stiffness:400,damping:25}},children:[u.jsx(jv,{children:p.date}),u.jsxs(Mv,{children:[u.jsx(Dv,{children:p.title}),u.jsx(kv,{children:p.subTitle})]})]},E))})]})})},Ov=ut`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Hv=ut`
  0%, 100% {
    box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.2);
  }
`,Bv=d.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Uv=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Nv=d(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 72px;
  
  @media (min-width: ${A.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`,Gv=d(v.div)``,qv=d(v.h3)`
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: ${A.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  transition: color var(--timing-medium) var(--ease-standard);
`,_v=d(v.p)`
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Rv=d(v.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,Yv=d(v.a)`
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
    animation: ${Ov} 3s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,Xv=d(v.div)`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  animation: ${Hv} 4s ease-in-out infinite;
  
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
`,Lv=d(v.div)`
  position: relative;
  z-index: 1;
`,Qv=d(v.span)`
  display: block;
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  transition: color var(--timing-medium) var(--ease-standard);
`,Vv=d(v.span)`
  font-size: 17px;
  font-weight: ${A.typography.fontWeight.medium};
  color: var(--text-primary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Gf={mail:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[u.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),u.jsx("path",{d:"M22 6L12 13 2 6"})]}),email:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[u.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),u.jsx("path",{d:"M22 6L12 13 2 6"})]}),phone:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:u.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),linkedin:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[u.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),u.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),u.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),location:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[u.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),u.jsx("circle",{cx:"12",cy:"10",r:"3"})]})},Zv=({data:g})=>{const T=R.useRef(null),H=xa(T,{once:!0,margin:"-100px"}),p=C=>Gf[C.toLowerCase()]||Gf.mail,E=C=>({mail:"Email",email:"Email",phone:"Phone",linkedin:"LinkedIn",location:"Location"})[C.toLowerCase()]||C;return u.jsx(Bv,{id:"contact",ref:T,children:u.jsxs(Uv,{children:[u.jsx(we,{number:"08",title:"Contact",inView:H}),u.jsxs(Nv,{children:[u.jsxs(Gv,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:80,damping:18},children:[u.jsx(qv,{children:"Let's work together"}),u.jsx(_v,{children:"Have a project in mind or want to discuss opportunities? I'd love to hear from you."})]}),u.jsx(Rv,{children:g.contactMetaData.filter(C=>C.icon.toLowerCase()!=="phone").map((C,M)=>u.jsxs(Yv,{href:C.href,target:C.href.startsWith("http")?"_blank":void 0,rel:C.href.startsWith("http")?"noopener noreferrer":void 0,initial:{opacity:0,x:30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:18,delay:M*.1},whileHover:{x:12,scale:1.02,transition:{type:"spring",stiffness:400,damping:25}},whileTap:{scale:.98},children:[u.jsx(Xv,{whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:20},children:p(C.icon)}),u.jsxs(Lv,{children:[u.jsx(Qv,{children:E(C.icon)}),u.jsx(Vv,{children:C.content})]})]},M))})]})]})})},$v={sectionTitle:"About Me",content:["🔹  I specialize in crafting multi-tenant, event-driven, and Micro-Services architectures on Azure and AWS, enabling real-time intelligence at scale. My leadership has accelerated delivery velocity by 25% and nurtured high-performing teams of 65+ engineers across 5 Development and 1 Core Support Squad, distributed globally.","An expert in transforming monoliths into cloud-native Micro-Services, designing AI-driven orchestration platforms, and modernizing data pipelines using Spark, Databricks, and real-time analytics.","Passionate about balancing technical depth with business outcomes, aligning architecture roadmaps with OKRs, and embedding security and compliance (SOC2, InfoSec) across the SDLC.",`💡 Key Highlights: 
 ✅ Product & Project Expertise — Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT. 
 
 ✅ Technical Edge — Deep experience leading and mentoring global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, Docker/Kubernetes, and DevOps automation. 
 
 ✅ Business Outcomes — Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution.`],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},Kv={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},Jv={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},Wv={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},Fv={name:"Pranshu Nijhawan",designation:"Designing for Scale, Leading for Impact",headline:"Strategic Engineering Leader with 10+ years of experience architecting scalable SaaS platforms, leading global teams, and driving multimillion-dollar cost optimizations. Expert in cloud-native transformations, data-intensive systems, and multi-tenant architectures that enable real-time intelligence and business growth. Proven track record of reducing operational costs by $2M+, improving delivery velocity by 25%, and mentoring high-performing engineering teams.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},Iv={sectionTitle:"Most Proud Of",content:[{id:1,title:"SearchSphere – Multi-Tenant Search Platform with RAG and Vectorization",content:["Designed and architected a fully configurable multi-tenant search platform using TypeScript, Node.js, and PostgreSQL.","Implemented vectorization and Retrieval Augmented Generation (RAG) to enable intelligent global and dimension-based search capabilities.","Enabled onboarding of new search dimensions dynamically via configuration, eliminating the need for code changes.","Successfully decommissioned Elasticsearch, achieving platform simplification and over $2 million in cost savings.","Built for high scalability, supporting tenant isolation and extensibility without compromising performance."]},{id:2,title:"Zero-Downtime ETL Platform – Scalable Blue/Green Data Processing at Scale",content:["Engineered a highly scalable and fault-tolerant ETL platform using Databricks, Spark, Azure Data Factory, and PostgreSQL.","Designed around a Blue/Green deployment strategy to ensure zero downtime during data ingestion and transformation cycles.","Processed 200+ million records across 100+ tables in under 15 minutes using Change Data Capture (CDC) and dynamic schema allocation techniques.","Enabled seamless schema evolution and pipeline reusability across multiple tenants and data domains.","Delivered a production-grade solution with operational efficiency, reliability, and real-time recovery capabilities."]},{id:3,title:"Orchestron – AI Orchestrated Modular Data Processing & Explosion Platform",content:["Architected a high-performance data processing and explosion platform using .NET, Apache Spark, and Kubernetes.","Designed a modular, plug-and-play architecture with configurable rules to enable seamless data transformation at scale.","Integrated Generative AI Agents to manage orchestration and rule governance, enabling intelligent, adaptive processing workflows.","Achieved dynamic scalability and reusability across domains through containerized deployments and configuration-driven pipelines.","Delivered a flexible and future-proof platform capable of adapting to evolving data models and transformation logic with minimal effort."]},{id:4,title:"Polymorphic Self-Mutating Encryption Algorithm",content:["Created a highly secured Hybrid Encryption Algorithm, a combination of hashing and dynamic key-based Encryption Algorithm.",'Solve the drawback of traditional Hashing technique to always create a unique hash value with an "Always Unique" based mechanism ignoring the need to store a key as followed in Key Based Encryption technique.']},{id:5,title:"Global Dependency Tracer",content:["Created a highly optimized Dependency Trace writer, based on Aspect-Oriented-Programming (AOP) Paradigm.","Architected using .NET Core's built-in Dependency Injection (DI) Containers by injecting dynamic proxies acting as a Middleware for all service calls."]},{id:6,title:"Dynamic Result Library for IQueryable & IEnumerable Collections",content:["Created a highly customizable library for Non-Generic collections IQueryable & IEnumerable based on concepts of Reflection for transforming Custom Data objects into LINQ compatible Lambda Expressions.","Dynamic Filter: Generate lambda expressions for LINQ's where extension method to filter data based on defined properties and values.","Dynamic Sort: Generate LINQ's ordering extensions with lambda expressions to sort the object in any direction (Ascending & Descending).","Dynamic Select: Generate lambda expressions for LINQ's select extension to fetch only the provided properties and filter the response using Custom Middleware Injection in .NET Core's request cycle.","Fully Compatible for EF Core's Translations."]}]},Pv={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect I",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 – Present",descriptionSummary:'At McKinsey, I serve as the Lead Architect for the entire <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a> platform, a flagship <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> product for CPG and retail clients. My role involves bridging deep technical expertise with strategic client engagement, advising senior product and consulting leaders, and driving solution design for high-stakes RFPs and enterprise implementations. I ensure our technical strategy delivers measurable client impact, while leading a global team of 65+ engineers across 5 Development and 1 Core Support Squad in strategic technical delivery.',achievements:[{title:"Design of a Multi-Language Backend Architecture",description:"Defined the long-term architectural roadmap for a complex, data heavy ecosystem where I coordinated the interoperability of a backend that uses multiple languages - Node.js/Fastify for scalable microservices and .NET/C# for high performance batch processing."},{title:"Implementation of a Scalable Blue-Green ETL Platform",description:"Built a scalable ETL platform that uses Databricks, Azure Data Factory and PostgreSQL that switches between two identical production slots, Blue or Green - one slot runs the live service while the other receives the new release. The system loads more than 200 million records from more than 100 tables in under 15 minutes."},{title:"Development of a Micro-Frontend-Based UI Architecture",description:"Led the design of data heavy user interfaces based on Micro Frontend architecture using React, TypeScript, Redux and AG Grid."},{title:"Establishment of a GitOps-Driven Delivery Framework",description:"Established the delivery system - putting GitOps at the center. I designed all infrastructure as plain Terraform code and set up one touch release pipelines in Azure DevOps, Helm besides ArgoCD."},{title:"Advancement of Security-First Practices and Unified Observability",description:'Established a "Security-First" culture by adding Wiz besides SonarQube to CI/CD pipelines and created a single observability rule set with Dynatrace and OpenTelemetry.'},{title:"Leadership Contributions and Career Progression",description:"Got promoted from Senior Software Engineer to Principal Architect in 3.5 years to build a culture where people take responsibility and think about the whole system. Personally guided senior engineers on how to choose system designs, linked product needs to what the code can deliver plus earned strong trust from every stakeholder."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 – March 2022",descriptionSummary:'At Eptura, I transformed <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), re-architecting legacy SaaS into cloud-native systems and designing distributed platforms. This directly enhanced product reliability and scalability for global clients, while I also led engineering squads, driving technical excellence and team growth.',achievements:[{title:"Cloud-Native Transformation for Enhanced Client Uptime",description:"Led re-architecture of legacy SaaS to a cloud-native microservices solution on Azure Kubernetes Service (AKS). Achieved 60% faster recovery and significantly enhanced system uptime, critical for client operations."},{title:"Global Distributed Release Management System",description:"Engineered and deployed a system (Azure IoT Hub, Serverless Functions, Azure CosmosDB) orchestrating synchronized updates across 300M+ IoT devices globally. Ensured seamless and reliable software delivery to a vast client network."},{title:"Led & Mentored Engineering Squads",description:"Directed a team of 20 engineers (4 tech leads) across four product squads. Implemented mentorship, improving team retention by 20% and fostering engineering growth, impacting product quality for clients."}]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 – April 2021",descriptionSummary:"At Nagarro, I delivered full-stack applications for diverse clients, enhancing user experience and streamlining development. My role involved hands-on development and implementing modern software engineering practices to improve efficiency and reliability of client solutions.",achievements:[{title:"High-Performance Full-Stack Applications",description:"Developed full-stack web applications (Angular, .NET Core, PostgreSQL, Ionic Framework) for e-commerce and HR clients."},{title:"CI/CD & IaC for Reliable Client Deployments",description:"Established CI/CD pipelines and Infrastructure as Code (IaC) practices. Reduced deployment failures by 70%, ensuring stable and predictable software releases for client projects."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 – December 2019",descriptionSummary:'During this tenure at Condeco, I focused on core development and optimization of the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), contributing to its scalability and reliability for a rapidly growing customer base.',achievements:[{title:"Scalable Microservices for 3x Customer Growth",description:"Designed and developed microservices (C#, .NET, React, SQL Server) for the workspace SaaS platform. Supported 3x customer scale-up, handling increased user demand."},{title:"Optimized CI/CD & Data Models",description:"Maintained CI/CD pipelines and implemented data model optimizations. Resulted in faster, more reliable software releases and improved system performance for client-facing features."}]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",previously:"Intern",date:"February 2016 – August 2018",descriptionSummary:"At Gartner, I contributed to the development of the ClearForce platform (proprietary survey and analytics tool for HR consulting), focusing on improving data accuracy and automating workflows for clients.",achievements:[{title:"Core SaaS Analytics Tool Development",description:"Contributed backend development for ClearForce (C#, .NET Core, React), improving employee survey data accuracy by 60%. Critical for providing data-driven insights to HR clients."},{title:"Automated SQL Workflows",description:"Developed and automated SQL workflows (SPs, SQL agent jobs). Saved over 240 engineering hours annually in manual data processing, improving data delivery efficiency for clients."}],last:!0}]},t1={sectionTitle:"Technology Proficiency",skills:[{icon:"Architecture",category:"Architecture",skills:[{name:"Microservices Architecture",percentage:100},{name:"Data Lakehouse",percentage:90},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Multi-Tenant Architecture (Database, Schema, Metadata Resolution)",percentage:90},{name:"Event-Driven Architecture (EDA)",percentage:100},{name:"Serverless",percentage:80}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"Angular",percentage:90},{name:"JavaScript",percentage:100},{name:"TypeScript",percentage:100},{name:"Ionic Framework",percentage:60}]},{icon:"Backend",category:"Backend",skills:[{name:"C#",percentage:100},{name:".NET Core",percentage:100},{name:"Node.Js",percentage:80},{name:"Python",percentage:80},{name:"Microservices",percentage:100},{name:"GraphQL",percentage:80}]},{icon:"Database",category:"Database",skills:[{name:"SQL",percentage:100},{name:"NoSQL",percentage:90}]},{icon:"Cloud",category:"Cloud",skills:[{name:"Microsoft Azure",percentage:90},{name:"Amazon Web Services (AWS)",percentage:80}]},{icon:"DataEngineering",category:"Data Engineering",skills:[{name:"Azure Databricks (Apache Spark)",percentage:80},{name:"Azure Datafactory",percentage:70},{name:"Azure Stream Analytics",percentage:70}]}]},a1={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},e1={aboutSection:$v,certifications:Kv,contactMe:Jv,educationalQualifications:Wv,homeSection:Fv,mostProudOf:Iv,professionalExperience:Pv,technologyProficiency:t1,testimonials:a1},Wa=e1;function i1(){const[g,T]=R.useState(!1);return u.jsxs(kp,{children:[u.jsx(Mp,{}),u.jsx(ym,{}),u.jsx(Le,{children:!g&&u.jsx(bm,{onComplete:()=>T(!0)})}),g&&u.jsxs(u.Fragment,{children:[u.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),u.jsx(Rp,{}),u.jsxs("main",{id:"main-content",style:{position:"relative"},role:"main",children:[u.jsx(ah,{data:Wa.homeSection}),u.jsx(Yh,{data:Wa.aboutSection}),u.jsx(ib,{data:Wa.technologyProficiency}),u.jsx(Hb,{data:Wa.professionalExperience}),u.jsx(ev,{data:Wa.mostProudOf}),u.jsx(fv,{data:Wa.certifications}),u.jsx(zv,{data:Wa.testimonials}),u.jsx(Cv,{data:Wa.educationalQualifications}),u.jsx(Zv,{data:Wa.contactMe})]}),u.jsx(Ip,{})]})]})}Ep.createRoot(document.getElementById("root")).render(u.jsx(R.StrictMode,{children:u.jsx(i1,{})}));
