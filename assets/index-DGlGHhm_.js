import{r as O,j as u,m as v,L as wg,A as Di,u as Ef,a as zg,b as jf,c as Mf,d as ye}from"./vendor-motion-NN0UiyF0.js";import{r as Tg,a as Ag}from"./vendor-react-DlBnNAMw.js";import{f as Eg,m as rt,d as p,l as st}from"./vendor-styled-TQ_oEx1d.js";(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))d(j);new MutationObserver(j=>{for(const M of j)if(M.type==="childList")for(const B of M.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&d(B)}).observe(document,{childList:!0,subtree:!0});function E(j){const M={};return j.integrity&&(M.integrity=j.integrity),j.referrerPolicy&&(M.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?M.credentials="include":j.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function d(j){if(j.ep)return;j.ep=!0;const M=E(j);fetch(j.href,M)}})();var bu={exports:{}},En={},vu={exports:{}},yu={};var kf;function jg(){return kf||(kf=1,(function(s){function A(z,D){var G=z.length;z.push(D);t:for(;0<G;){var pt=G-1>>>1,gt=z[pt];if(0<j(gt,D))z[pt]=D,z[G]=gt,G=pt;else break t}}function E(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var D=z[0],G=z.pop();if(G!==D){z[0]=G;t:for(var pt=0,gt=z.length,Yt=gt>>>1;pt<Yt;){var yt=2*(pt+1)-1,tt=z[yt],Ct=yt+1,Ee=z[Ct];if(0>j(tt,G))Ct<gt&&0>j(Ee,tt)?(z[pt]=Ee,z[Ct]=G,pt=Ct):(z[pt]=tt,z[yt]=G,pt=yt);else if(Ct<gt&&0>j(Ee,G))z[pt]=Ee,z[Ct]=G,pt=Ct;else break t}}return D}function j(z,D){var G=z.sortIndex-D.sortIndex;return G!==0?G:z.id-D.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;s.unstable_now=function(){return M.now()}}else{var B=Date,F=B.now();s.unstable_now=function(){return B.now()-F}}var _=[],K=[],$=1,k=null,P=3,Lt=!1,L=!1,Dt=!1,xe=!1,vt=typeof setTimeout=="function"?setTimeout:null,ot=typeof clearTimeout=="function"?clearTimeout:null,ft=typeof setImmediate<"u"?setImmediate:null;function Mt(z){for(var D=E(K);D!==null;){if(D.callback===null)d(K);else if(D.startTime<=z)d(K),D.sortIndex=D.expirationTime,A(_,D);else break;D=E(K)}}function Ut(z){if(Dt=!1,Mt(z),!L)if(E(_)!==null)L=!0,oe||(oe=!0,ue());else{var D=E(K);D!==null&&Ce(Ut,D.startTime-z)}}var oe=!1,Se=-1,we=5,Xa=-1;function jn(){return xe?!0:!(s.unstable_now()-Xa<we)}function Qa(){if(xe=!1,oe){var z=s.unstable_now();Xa=z;var D=!0;try{t:{L=!1,Dt&&(Dt=!1,ot(Se),Se=-1),Lt=!0;var G=P;try{e:{for(Mt(z),k=E(_);k!==null&&!(k.expirationTime>z&&jn());){var pt=k.callback;if(typeof pt=="function"){k.callback=null,P=k.priorityLevel;var gt=pt(k.expirationTime<=z);if(z=s.unstable_now(),typeof gt=="function"){k.callback=gt,Mt(z),D=!0;break e}k===E(_)&&d(_),Mt(z)}else d(_);k=E(_)}if(k!==null)D=!0;else{var Yt=E(K);Yt!==null&&Ce(Ut,Yt.startTime-z),D=!1}}break t}finally{k=null,P=G,Lt=!1}D=void 0}}finally{D?ue():oe=!1}}}var ue;if(typeof ft=="function")ue=function(){ft(Qa)};else if(typeof MessageChannel<"u"){var Mn=new MessageChannel,Hi=Mn.port2;Mn.port1.onmessage=Qa,ue=function(){Hi.postMessage(null)}}else ue=function(){vt(Qa,0)};function Ce(z,D){Se=vt(function(){z(s.unstable_now())},D)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return P},s.unstable_next=function(z){switch(P){case 1:case 2:case 3:var D=3;break;default:D=P}var G=P;P=D;try{return z()}finally{P=G}},s.unstable_requestPaint=function(){xe=!0},s.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=P;P=z;try{return D()}finally{P=G}},s.unstable_scheduleCallback=function(z,D,G){var pt=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?pt+G:pt):G=pt,z){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=G+gt,z={id:$++,callback:D,priorityLevel:z,startTime:G,expirationTime:gt,sortIndex:-1},G>pt?(z.sortIndex=G,A(K,z),E(_)===null&&z===E(K)&&(Dt?(ot(Se),Se=-1):Dt=!0,Ce(Ut,G-pt))):(z.sortIndex=gt,A(_,z),L||Lt||(L=!0,oe||(oe=!0,ue()))),z},s.unstable_shouldYield=jn,s.unstable_wrapCallback=function(z){var D=P;return function(){var G=P;P=D;try{return z.apply(this,arguments)}finally{P=G}}}})(yu)),yu}var Df;function Mg(){return Df||(Df=1,vu.exports=jg()),vu.exports}var Cf;function kg(){if(Cf)return En;Cf=1;var s=Mg(),A=Tg(),E=Ag();function d(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function M(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function B(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function F(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(M(t)!==t)throw Error(d(188))}function K(t){var e=t.alternate;if(!e){if(e=M(t),e===null)throw Error(d(188));return e!==t?null:t}for(var a=t,i=e;;){var n=a.return;if(n===null)break;var l=n.alternate;if(l===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===a)return _(n),t;if(l===i)return _(n),e;l=l.sibling}throw Error(d(188))}if(a.return!==i.return)a=n,i=l;else{for(var r=!1,o=n.child;o;){if(o===a){r=!0,a=n,i=l;break}if(o===i){r=!0,i=n,a=l;break}o=o.sibling}if(!r){for(o=l.child;o;){if(o===a){r=!0,a=l,i=n;break}if(o===i){r=!0,i=l,a=n;break}o=o.sibling}if(!r)throw Error(d(189))}}if(a.alternate!==i)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?t:e}function $(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=$(t),e!==null)return e;t=t.sibling}return null}var k=Object.assign,P=Symbol.for("react.element"),Lt=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),xe=Symbol.for("react.strict_mode"),vt=Symbol.for("react.profiler"),ot=Symbol.for("react.consumer"),ft=Symbol.for("react.context"),Mt=Symbol.for("react.forward_ref"),Ut=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),Se=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Xa=Symbol.for("react.activity"),jn=Symbol.for("react.memo_cache_sentinel"),Qa=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=Qa&&t[Qa]||t["@@iterator"],typeof t=="function"?t:null)}var Mn=Symbol.for("react.client.reference");function Hi(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Dt:return"Fragment";case vt:return"Profiler";case xe:return"StrictMode";case Ut:return"Suspense";case oe:return"SuspenseList";case Xa:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case ft:return t.displayName||"Context";case ot:return(t._context.displayName||"Context")+".Consumer";case Mt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Se:return e=t.displayName||null,e!==null?e:Hi(t.type)||"Memo";case we:e=t._payload,t=t._init;try{return Hi(t(e))}catch{}}return null}var Ce=Array.isArray,z=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},pt=[],gt=-1;function Yt(t){return{current:t}}function yt(t){0>gt||(t.current=pt[gt],pt[gt]=null,gt--)}function tt(t,e){gt++,pt[gt]=t.current,t.current=e}var Ct=Yt(null),Ee=Yt(null),Fe=Yt(null),kn=Yt(null);function Dn(t,e){switch(tt(Fe,e),tt(Ee,t),tt(Ct,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Kd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Kd(e),t=Jd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(Ct),tt(Ct,t)}function Va(){yt(Ct),yt(Ee),yt(Fe)}function Fl(t){t.memoizedState!==null&&tt(kn,t);var e=Ct.current,a=Jd(e,t.type);e!==a&&(tt(Ee,t),tt(Ct,a))}function Cn(t){Ee.current===t&&(yt(Ct),yt(Ee)),kn.current===t&&(yt(kn),wn._currentValue=G)}var Il,Tu;function Ta(t){if(Il===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Il=e&&e[1]||"",Tu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Il+t+Tu}var Pl=!1;function tr(t,e){if(!t||Pl)return"";Pl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(y){var b=y}Reflect.construct(t,[],T)}else{try{T.call()}catch(y){b=y}t.call(T.prototype)}}else{try{throw Error()}catch(y){b=y}(T=t())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(y){if(y&&b&&typeof y.stack=="string")return[y.stack,b.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),r=l[0],o=l[1];if(r&&o){var c=r.split(`
`),h=o.split(`
`);for(n=i=0;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(i===c.length||n===h.length)for(i=c.length-1,n=h.length-1;1<=i&&0<=n&&c[i]!==h[n];)n--;for(;1<=i&&0<=n;i--,n--)if(c[i]!==h[n]){if(i!==1||n!==1)do if(i--,n--,0>n||c[i]!==h[n]){var x=`
`+c[i].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=i&&0<=n);break}}}finally{Pl=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ta(a):""}function Pf(t,e){switch(t.tag){case 26:case 27:case 5:return Ta(t.type);case 16:return Ta("Lazy");case 13:return t.child!==e&&e!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return tr(t.type,!1);case 11:return tr(t.type.render,!1);case 1:return tr(t.type,!0);case 31:return Ta("Activity");default:return""}}function Au(t){try{var e="",a=null;do e+=Pf(t,a),a=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var er=Object.prototype.hasOwnProperty,ar=s.unstable_scheduleCallback,ir=s.unstable_cancelCallback,t0=s.unstable_shouldYield,e0=s.unstable_requestPaint,Ft=s.unstable_now,a0=s.unstable_getCurrentPriorityLevel,Eu=s.unstable_ImmediatePriority,ju=s.unstable_UserBlockingPriority,Hn=s.unstable_NormalPriority,i0=s.unstable_LowPriority,Mu=s.unstable_IdlePriority,n0=s.log,l0=s.unstable_setDisableYieldValue,Oi=null,It=null;function Ie(t){if(typeof n0=="function"&&l0(t),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(Oi,t)}catch{}}var Pt=Math.clz32?Math.clz32:u0,r0=Math.log,o0=Math.LN2;function u0(t){return t>>>=0,t===0?32:31-(r0(t)/o0|0)|0}var On=256,Bn=262144,Un=4194304;function Aa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nn(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var n=0,l=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~l,i!==0?n=Aa(i):(r&=o,r!==0?n=Aa(r):a||(a=o&~t,a!==0&&(n=Aa(a))))):(o=i&~l,o!==0?n=Aa(o):r!==0?n=Aa(r):a||(a=i&~t,a!==0&&(n=Aa(a)))),n===0?0:e!==0&&e!==n&&(e&l)===0&&(l=n&-n,a=e&-e,l>=a||l===32&&(a&4194048)!==0)?e:n}function Bi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function s0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ku(){var t=Un;return Un<<=1,(Un&62914560)===0&&(Un=4194304),t}function nr(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ui(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function c0(t,e,a,i,n,l){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,c=t.expirationTimes,h=t.hiddenUpdates;for(a=r&~a;0<a;){var x=31-Pt(a),T=1<<x;o[x]=0,c[x]=-1;var b=h[x];if(b!==null)for(h[x]=null,x=0;x<b.length;x++){var y=b[x];y!==null&&(y.lane&=-536870913)}a&=~T}i!==0&&Du(t,i,0),l!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=l&~(r&~e))}function Du(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Pt(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&261930}function Cu(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-Pt(a),n=1<<i;n&e|t[i]&e&&(t[i]|=e),a&=~n}}function Hu(t,e){var a=e&-e;return a=(a&42)!==0?1:lr(a),(a&(t.suspendedLanes|e))!==0?0:a}function lr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ou(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:yf(t.type))}function Bu(t,e){var a=D.p;try{return D.p=t,e()}finally{D.p=a}}var Pe=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Pe,Qt="__reactProps$"+Pe,$a="__reactContainer$"+Pe,or="__reactEvents$"+Pe,d0="__reactListeners$"+Pe,f0="__reactHandles$"+Pe,Uu="__reactResources$"+Pe,Ni="__reactMarker$"+Pe;function ur(t){delete t[Nt],delete t[Qt],delete t[or],delete t[d0],delete t[f0]}function Za(t){var e=t[Nt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[$a]||a[Nt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=af(t);t!==null;){if(a=t[Nt])return a;t=af(t)}return e}t=a,a=t.parentNode}return null}function Ka(t){if(t=t[Nt]||t[$a]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Gi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(d(33))}function Ja(t){var e=t[Uu];return e||(e=t[Uu]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ht(t){t[Ni]=!0}var Nu=new Set,Gu={};function Ea(t,e){Wa(t,e),Wa(t+"Capture",e)}function Wa(t,e){for(Gu[t]=e,t=0;t<e.length;t++)Nu.add(e[t])}var p0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_u={},qu={};function g0(t){return er.call(qu,t)?!0:er.call(_u,t)?!1:p0.test(t)?qu[t]=!0:(_u[t]=!0,!1)}function Gn(t,e,a){if(g0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function _n(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function He(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}function se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ru(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m0(t,e,a){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,l=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,l.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sr(t){if(!t._valueTracker){var e=Ru(t)?"checked":"value";t._valueTracker=m0(t,e,""+t[e])}}function Lu(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=Ru(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function qn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var h0=/[\n"\\]/g;function ce(t){return t.replace(h0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function cr(t,e,a,i,n,l,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+se(e)):t.value!==""+se(e)&&(t.value=""+se(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?dr(t,r,se(e)):a!=null?dr(t,r,se(a)):i!=null&&t.removeAttribute("value"),n==null&&l!=null&&(t.defaultChecked=!!l),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+se(o):t.removeAttribute("name")}function Yu(t,e,a,i,n,l,r,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){sr(t);return}a=a!=null?""+se(a):"",e=e!=null?""+se(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),sr(t)}function dr(t,e,a){e==="number"&&qn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fa(t,e,a,i){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&i&&(t[a].defaultSelected=!0)}else{for(a=""+se(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Xu(t,e,a){if(e!=null&&(e=""+se(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+se(a):""}function Qu(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(d(92));if(Ce(i)){if(1<i.length)throw Error(d(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=se(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i),sr(t)}function Ia(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var b0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vu(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||b0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function $u(t,e,a){if(e!=null&&typeof e!="object")throw Error(d(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var n in e)i=e[n],e.hasOwnProperty(n)&&a[n]!==i&&Vu(t,n,i)}else for(var l in e)e.hasOwnProperty(l)&&Vu(t,l,e[l])}function fr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var v0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),y0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(t){return y0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oe(){}var pr=null;function gr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pa=null,ti=null;function Zu(t){var e=Ka(t);if(e&&(t=e.stateNode)){var a=t[Qt]||null;t:switch(t=e.stateNode,e.type){case"input":if(cr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ce(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var n=i[Qt]||null;if(!n)throw Error(d(90));cr(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&Lu(i)}break t;case"textarea":Xu(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Fa(t,!!a.multiple,e,!1)}}}var mr=!1;function Ku(t,e,a){if(mr)return t(e,a);mr=!0;try{var i=t(e);return i}finally{if(mr=!1,(Pa!==null||ti!==null)&&(jl(),Pa&&(e=Pa,t=ti,ti=Pa=null,Zu(e),t)))for(e=0;e<t.length;e++)Zu(t[e])}}function _i(t,e){var a=t.stateNode;if(a===null)return null;var i=a[Qt]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(d(231,e,typeof a));return a}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hr=!1;if(Be)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){hr=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{hr=!1}var ta=null,br=null,Ln=null;function Ju(){if(Ln)return Ln;var t,e=br,a=e.length,i,n="value"in ta?ta.value:ta.textContent,l=n.length;for(t=0;t<a&&e[t]===n[t];t++);var r=a-t;for(i=1;i<=r&&e[a-i]===n[l-i];i++);return Ln=n.slice(t,1<i?1-i:void 0)}function Yn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xn(){return!0}function Wu(){return!1}function Vt(t){function e(a,i,n,l,r){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Xn:Wu,this.isPropagationStopped=Wu,this}return k(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),e}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qn=Vt(ja),Ri=k({},ja,{view:0,detail:0}),x0=Vt(Ri),vr,yr,Li,Vn=k({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Li&&(Li&&t.type==="mousemove"?(vr=t.screenX-Li.screenX,yr=t.screenY-Li.screenY):yr=vr=0,Li=t),vr)},movementY:function(t){return"movementY"in t?t.movementY:yr}}),Fu=Vt(Vn),S0=k({},Vn,{dataTransfer:0}),w0=Vt(S0),z0=k({},Ri,{relatedTarget:0}),xr=Vt(z0),T0=k({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),A0=Vt(T0),E0=k({},ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),j0=Vt(E0),M0=k({},ja,{data:0}),Iu=Vt(M0),k0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=C0[t])?!!e[t]:!1}function Sr(){return H0}var O0=k({},Ri,{key:function(t){if(t.key){var e=k0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?D0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(t){return t.type==="keypress"?Yn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B0=Vt(O0),U0=k({},Vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=Vt(U0),N0=k({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr}),G0=Vt(N0),_0=k({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=Vt(_0),R0=k({},Vn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L0=Vt(R0),Y0=k({},ja,{newState:0,oldState:0}),X0=Vt(Y0),Q0=[9,13,27,32],wr=Be&&"CompositionEvent"in window,Yi=null;Be&&"documentMode"in document&&(Yi=document.documentMode);var V0=Be&&"TextEvent"in window&&!Yi,ts=Be&&(!wr||Yi&&8<Yi&&11>=Yi),es=" ",as=!1;function is(t,e){switch(t){case"keyup":return Q0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ns(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ei=!1;function $0(t,e){switch(t){case"compositionend":return ns(e);case"keypress":return e.which!==32?null:(as=!0,es);case"textInput":return t=e.data,t===es&&as?null:t;default:return null}}function Z0(t,e){if(ei)return t==="compositionend"||!wr&&is(t,e)?(t=Ju(),Ln=br=ta=null,ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ts&&e.locale!=="ko"?null:e.data;default:return null}}var K0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ls(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K0[t.type]:e==="textarea"}function rs(t,e,a,i){Pa?ti?ti.push(i):ti=[i]:Pa=i,e=Bl(e,"onChange"),0<e.length&&(a=new Qn("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Xi=null,Qi=null;function J0(t){Yd(t,0)}function $n(t){var e=Gi(t);if(Lu(e))return t}function os(t,e){if(t==="change")return e}var us=!1;if(Be){var zr;if(Be){var Tr="oninput"in document;if(!Tr){var ss=document.createElement("div");ss.setAttribute("oninput","return;"),Tr=typeof ss.oninput=="function"}zr=Tr}else zr=!1;us=zr&&(!document.documentMode||9<document.documentMode)}function cs(){Xi&&(Xi.detachEvent("onpropertychange",ds),Qi=Xi=null)}function ds(t){if(t.propertyName==="value"&&$n(Qi)){var e=[];rs(e,Qi,t,gr(t)),Ku(J0,e)}}function W0(t,e,a){t==="focusin"?(cs(),Xi=e,Qi=a,Xi.attachEvent("onpropertychange",ds)):t==="focusout"&&cs()}function F0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $n(Qi)}function I0(t,e){if(t==="click")return $n(e)}function P0(t,e){if(t==="input"||t==="change")return $n(e)}function tp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var te=typeof Object.is=="function"?Object.is:tp;function Vi(t,e){if(te(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!er.call(e,n)||!te(t[n],e[n]))return!1}return!0}function fs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ps(t,e){var a=fs(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=fs(a)}}function gs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ms(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=qn(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=qn(t.document)}return e}function Ar(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var ep=Be&&"documentMode"in document&&11>=document.documentMode,ai=null,Er=null,$i=null,jr=!1;function hs(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jr||ai==null||ai!==qn(i)||(i=ai,"selectionStart"in i&&Ar(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$i&&Vi($i,i)||($i=i,i=Bl(Er,"onSelect"),0<i.length&&(e=new Qn("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=ai)))}function Ma(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var ii={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Mr={},bs={};Be&&(bs=document.createElement("div").style,"AnimationEvent"in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),"TransitionEvent"in window||delete ii.transitionend.transition);function ka(t){if(Mr[t])return Mr[t];if(!ii[t])return t;var e=ii[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in bs)return Mr[t]=e[a];return t}var vs=ka("animationend"),ys=ka("animationiteration"),xs=ka("animationstart"),ap=ka("transitionrun"),ip=ka("transitionstart"),np=ka("transitioncancel"),Ss=ka("transitionend"),ws=new Map,kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kr.push("scrollEnd");function ze(t,e){ws.set(t,e),Ea(e,[t])}var Zn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},de=[],ni=0,Dr=0;function Kn(){for(var t=ni,e=Dr=ni=0;e<t;){var a=de[e];de[e++]=null;var i=de[e];de[e++]=null;var n=de[e];de[e++]=null;var l=de[e];if(de[e++]=null,i!==null&&n!==null){var r=i.pending;r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n}l!==0&&zs(a,n,l)}}function Jn(t,e,a,i){de[ni++]=t,de[ni++]=e,de[ni++]=a,de[ni++]=i,Dr|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Cr(t,e,a,i){return Jn(t,e,a,i),Wn(t)}function Da(t,e){return Jn(t,null,null,e),Wn(t)}function zs(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var n=!1,l=t.return;l!==null;)l.childLanes|=a,i=l.alternate,i!==null&&(i.childLanes|=a),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(n=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,n&&e!==null&&(n=31-Pt(a),t=l.hiddenUpdates,i=t[n],i===null?t[n]=[e]:i.push(e),e.lane=a|536870912),l):null}function Wn(t){if(50<mn)throw mn=0,Lo=null,Error(d(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var li={};function lp(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ee(t,e,a,i){return new lp(t,e,a,i)}function Hr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ue(t,e){var a=t.alternate;return a===null?(a=ee(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ts(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Fn(t,e,a,i,n,l){var r=0;if(i=t,typeof t=="function")Hr(t)&&(r=1);else if(typeof t=="string")r=cg(t,a,Ct.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Xa:return t=ee(31,a,e,n),t.elementType=Xa,t.lanes=l,t;case Dt:return Ca(a.children,n,l,e);case xe:r=8,n|=24;break;case vt:return t=ee(12,a,e,n|2),t.elementType=vt,t.lanes=l,t;case Ut:return t=ee(13,a,e,n),t.elementType=Ut,t.lanes=l,t;case oe:return t=ee(19,a,e,n),t.elementType=oe,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ft:r=10;break t;case ot:r=9;break t;case Mt:r=11;break t;case Se:r=14;break t;case we:r=16,i=null;break t}r=29,a=Error(d(130,t===null?"null":typeof t,"")),i=null}return e=ee(r,a,e,n),e.elementType=t,e.type=i,e.lanes=l,e}function Ca(t,e,a,i){return t=ee(7,t,i,e),t.lanes=a,t}function Or(t,e,a){return t=ee(6,t,null,e),t.lanes=a,t}function As(t){var e=ee(18,null,null,0);return e.stateNode=t,e}function Br(t,e,a){return e=ee(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Es=new WeakMap;function fe(t,e){if(typeof t=="object"&&t!==null){var a=Es.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Au(e)},Es.set(t,e),e)}return{value:t,source:e,stack:Au(e)}}var ri=[],oi=0,In=null,Zi=0,pe=[],ge=0,ea=null,je=1,Me="";function Ne(t,e){ri[oi++]=Zi,ri[oi++]=In,In=t,Zi=e}function js(t,e,a){pe[ge++]=je,pe[ge++]=Me,pe[ge++]=ea,ea=t;var i=je;t=Me;var n=32-Pt(i)-1;i&=~(1<<n),a+=1;var l=32-Pt(e)+n;if(30<l){var r=n-n%5;l=(i&(1<<r)-1).toString(32),i>>=r,n-=r,je=1<<32-Pt(e)+n|a<<n|i,Me=l+t}else je=1<<l|a<<n|i,Me=t}function Ur(t){t.return!==null&&(Ne(t,1),js(t,1,0))}function Nr(t){for(;t===In;)In=ri[--oi],ri[oi]=null,Zi=ri[--oi],ri[oi]=null;for(;t===ea;)ea=pe[--ge],pe[ge]=null,Me=pe[--ge],pe[ge]=null,je=pe[--ge],pe[ge]=null}function Ms(t,e){pe[ge++]=je,pe[ge++]=Me,pe[ge++]=ea,je=e.id,Me=e.overflow,ea=t}var Gt=null,mt=null,Z=!1,aa=null,me=!1,Gr=Error(d(519));function ia(t){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ki(fe(e,t)),Gr}function ks(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[Nt]=t,e[Qt]=i,a){case"dialog":X("cancel",e),X("close",e);break;case"iframe":case"object":case"embed":X("load",e);break;case"video":case"audio":for(a=0;a<bn.length;a++)X(bn[a],e);break;case"source":X("error",e);break;case"img":case"image":case"link":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"input":X("invalid",e),Yu(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":X("invalid",e);break;case"textarea":X("invalid",e),Qu(e,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||$d(e.textContent,a)?(i.popover!=null&&(X("beforetoggle",e),X("toggle",e)),i.onScroll!=null&&X("scroll",e),i.onScrollEnd!=null&&X("scrollend",e),i.onClick!=null&&(e.onclick=Oe),e=!0):e=!1,e||ia(t,!0)}function Ds(t){for(Gt=t.return;Gt;)switch(Gt.tag){case 5:case 31:case 13:me=!1;return;case 27:case 3:me=!0;return;default:Gt=Gt.return}}function ui(t){if(t!==Gt)return!1;if(!Z)return Ds(t),Z=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||au(t.type,t.memoizedProps)),a=!a),a&&mt&&ia(t),Ds(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));mt=ef(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));mt=ef(t)}else e===27?(e=mt,ba(t.type)?(t=ou,ou=null,mt=t):mt=e):mt=Gt?be(t.stateNode.nextSibling):null;return!0}function Ha(){mt=Gt=null,Z=!1}function _r(){var t=aa;return t!==null&&(Jt===null?Jt=t:Jt.push.apply(Jt,t),aa=null),t}function Ki(t){aa===null?aa=[t]:aa.push(t)}var qr=Yt(null),Oa=null,Ge=null;function na(t,e,a){tt(qr,e._currentValue),e._currentValue=a}function _e(t){t._currentValue=qr.current,yt(qr)}function Rr(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function Lr(t,e,a,i){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var l=n.dependencies;if(l!==null){var r=n.child;l=l.firstContext;t:for(;l!==null;){var o=l;l=n;for(var c=0;c<e.length;c++)if(o.context===e[c]){l.lanes|=a,o=l.alternate,o!==null&&(o.lanes|=a),Rr(l.return,a,t),i||(r=null);break t}l=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(d(341));r.lanes|=a,l=r.alternate,l!==null&&(l.lanes|=a),Rr(r,a,t),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function si(t,e,a,i){t=null;for(var n=e,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(d(387));if(r=r.memoizedProps,r!==null){var o=n.type;te(n.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(n===kn.current){if(r=n.alternate,r===null)throw Error(d(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(wn):t=[wn])}n=n.return}t!==null&&Lr(e,t,a,i),e.flags|=262144}function Pn(t){for(t=t.firstContext;t!==null;){if(!te(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ba(t){Oa=t,Ge=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function _t(t){return Cs(Oa,t)}function tl(t,e){return Oa===null&&Ba(t),Cs(t,e)}function Cs(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ge===null){if(t===null)throw Error(d(308));Ge=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ge=Ge.next=e;return a}var rp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},op=s.unstable_scheduleCallback,up=s.unstable_NormalPriority,Tt={$$typeof:ft,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yr(){return{controller:new rp,data:new Map,refCount:0}}function Ji(t){t.refCount--,t.refCount===0&&op(up,function(){t.controller.abort()})}var Wi=null,Xr=0,ci=0,di=null;function sp(t,e){if(Wi===null){var a=Wi=[];Xr=0,ci=Zo(),di={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Xr++,e.then(Hs,Hs),e}function Hs(){if(--Xr===0&&Wi!==null){di!==null&&(di.status="fulfilled");var t=Wi;Wi=null,ci=0,di=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function cp(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var Os=z.S;z.S=function(t,e){hd=Ft(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&sp(t,e),Os!==null&&Os(t,e)};var Ua=Yt(null);function Qr(){var t=Ua.current;return t!==null?t:ut.pooledCache}function el(t,e){e===null?tt(Ua,Ua.current):tt(Ua,e.pool)}function Bs(){var t=Qr();return t===null?null:{parent:Tt._currentValue,pool:t}}var fi=Error(d(460)),Vr=Error(d(474)),al=Error(d(542)),il={then:function(){}};function Us(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ns(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Oe,Oe),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,_s(t),t;default:if(typeof e.status=="string")e.then(Oe,Oe);else{if(t=ut,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=i}},function(i){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,_s(t),t}throw Ga=e,fi}}function Na(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ga=a,fi):a}}var Ga=null;function Gs(){if(Ga===null)throw Error(d(459));var t=Ga;return Ga=null,t}function _s(t){if(t===fi||t===al)throw Error(d(483))}var pi=null,Fi=0;function nl(t){var e=Fi;return Fi+=1,pi===null&&(pi=[]),Ns(pi,t,e)}function Ii(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ll(t,e){throw e.$$typeof===P?Error(d(525)):(t=Object.prototype.toString.call(e),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function qs(t){function e(g,f){if(t){var m=g.deletions;m===null?(g.deletions=[f],g.flags|=16):m.push(f)}}function a(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function i(g){for(var f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function n(g,f){return g=Ue(g,f),g.index=0,g.sibling=null,g}function l(g,f,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<f?(g.flags|=67108866,f):m):(g.flags|=67108866,f)):(g.flags|=1048576,f)}function r(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function o(g,f,m,S){return f===null||f.tag!==6?(f=Or(m,g.mode,S),f.return=g,f):(f=n(f,m),f.return=g,f)}function c(g,f,m,S){var U=m.type;return U===Dt?x(g,f,m.props.children,S,m.key):f!==null&&(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===we&&Na(U)===f.type)?(f=n(f,m.props),Ii(f,m),f.return=g,f):(f=Fn(m.type,m.key,m.props,null,g.mode,S),Ii(f,m),f.return=g,f)}function h(g,f,m,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Br(m,g.mode,S),f.return=g,f):(f=n(f,m.children||[]),f.return=g,f)}function x(g,f,m,S,U){return f===null||f.tag!==7?(f=Ca(m,g.mode,S,U),f.return=g,f):(f=n(f,m),f.return=g,f)}function T(g,f,m){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Or(""+f,g.mode,m),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Lt:return m=Fn(f.type,f.key,f.props,null,g.mode,m),Ii(m,f),m.return=g,m;case L:return f=Br(f,g.mode,m),f.return=g,f;case we:return f=Na(f),T(g,f,m)}if(Ce(f)||ue(f))return f=Ca(f,g.mode,m,null),f.return=g,f;if(typeof f.then=="function")return T(g,nl(f),m);if(f.$$typeof===ft)return T(g,tl(g,f),m);ll(g,f)}return null}function b(g,f,m,S){var U=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return U!==null?null:o(g,f,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Lt:return m.key===U?c(g,f,m,S):null;case L:return m.key===U?h(g,f,m,S):null;case we:return m=Na(m),b(g,f,m,S)}if(Ce(m)||ue(m))return U!==null?null:x(g,f,m,S,null);if(typeof m.then=="function")return b(g,f,nl(m),S);if(m.$$typeof===ft)return b(g,f,tl(g,m),S);ll(g,m)}return null}function y(g,f,m,S,U){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return g=g.get(m)||null,o(f,g,""+S,U);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Lt:return g=g.get(S.key===null?m:S.key)||null,c(f,g,S,U);case L:return g=g.get(S.key===null?m:S.key)||null,h(f,g,S,U);case we:return S=Na(S),y(g,f,m,S,U)}if(Ce(S)||ue(S))return g=g.get(m)||null,x(f,g,S,U,null);if(typeof S.then=="function")return y(g,f,m,nl(S),U);if(S.$$typeof===ft)return y(g,f,m,tl(f,S),U);ll(f,S)}return null}function C(g,f,m,S){for(var U=null,J=null,H=f,R=f=0,V=null;H!==null&&R<m.length;R++){H.index>R?(V=H,H=null):V=H.sibling;var W=b(g,H,m[R],S);if(W===null){H===null&&(H=V);break}t&&H&&W.alternate===null&&e(g,H),f=l(W,f,R),J===null?U=W:J.sibling=W,J=W,H=V}if(R===m.length)return a(g,H),Z&&Ne(g,R),U;if(H===null){for(;R<m.length;R++)H=T(g,m[R],S),H!==null&&(f=l(H,f,R),J===null?U=H:J.sibling=H,J=H);return Z&&Ne(g,R),U}for(H=i(H);R<m.length;R++)V=y(H,g,R,m[R],S),V!==null&&(t&&V.alternate!==null&&H.delete(V.key===null?R:V.key),f=l(V,f,R),J===null?U=V:J.sibling=V,J=V);return t&&H.forEach(function(wa){return e(g,wa)}),Z&&Ne(g,R),U}function N(g,f,m,S){if(m==null)throw Error(d(151));for(var U=null,J=null,H=f,R=f=0,V=null,W=m.next();H!==null&&!W.done;R++,W=m.next()){H.index>R?(V=H,H=null):V=H.sibling;var wa=b(g,H,W.value,S);if(wa===null){H===null&&(H=V);break}t&&H&&wa.alternate===null&&e(g,H),f=l(wa,f,R),J===null?U=wa:J.sibling=wa,J=wa,H=V}if(W.done)return a(g,H),Z&&Ne(g,R),U;if(H===null){for(;!W.done;R++,W=m.next())W=T(g,W.value,S),W!==null&&(f=l(W,f,R),J===null?U=W:J.sibling=W,J=W);return Z&&Ne(g,R),U}for(H=i(H);!W.done;R++,W=m.next())W=y(H,g,R,W.value,S),W!==null&&(t&&W.alternate!==null&&H.delete(W.key===null?R:W.key),f=l(W,f,R),J===null?U=W:J.sibling=W,J=W);return t&&H.forEach(function(Sg){return e(g,Sg)}),Z&&Ne(g,R),U}function lt(g,f,m,S){if(typeof m=="object"&&m!==null&&m.type===Dt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Lt:t:{for(var U=m.key;f!==null;){if(f.key===U){if(U=m.type,U===Dt){if(f.tag===7){a(g,f.sibling),S=n(f,m.props.children),S.return=g,g=S;break t}}else if(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===we&&Na(U)===f.type){a(g,f.sibling),S=n(f,m.props),Ii(S,m),S.return=g,g=S;break t}a(g,f);break}else e(g,f);f=f.sibling}m.type===Dt?(S=Ca(m.props.children,g.mode,S,m.key),S.return=g,g=S):(S=Fn(m.type,m.key,m.props,null,g.mode,S),Ii(S,m),S.return=g,g=S)}return r(g);case L:t:{for(U=m.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){a(g,f.sibling),S=n(f,m.children||[]),S.return=g,g=S;break t}else{a(g,f);break}else e(g,f);f=f.sibling}S=Br(m,g.mode,S),S.return=g,g=S}return r(g);case we:return m=Na(m),lt(g,f,m,S)}if(Ce(m))return C(g,f,m,S);if(ue(m)){if(U=ue(m),typeof U!="function")throw Error(d(150));return m=U.call(m),N(g,f,m,S)}if(typeof m.then=="function")return lt(g,f,nl(m),S);if(m.$$typeof===ft)return lt(g,f,tl(g,m),S);ll(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,f!==null&&f.tag===6?(a(g,f.sibling),S=n(f,m),S.return=g,g=S):(a(g,f),S=Or(m,g.mode,S),S.return=g,g=S),r(g)):a(g,f)}return function(g,f,m,S){try{Fi=0;var U=lt(g,f,m,S);return pi=null,U}catch(H){if(H===fi||H===al)throw H;var J=ee(29,H,null,g.mode);return J.lanes=S,J.return=g,J}finally{}}}var _a=qs(!0),Rs=qs(!1),la=!1;function $r(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function oa(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(I&2)!==0){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,e=Wn(t),zs(t,null,a),e}return Jn(t,i,e,a),Wn(t)}function Pi(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,Cu(t,a)}}function Kr(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?n=l=r:l=l.next=r,a=a.next}while(a!==null);l===null?n=l=e:l=l.next=e}else n=l=e;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Jr=!1;function tn(){if(Jr){var t=di;if(t!==null)throw t}}function en(t,e,a,i){Jr=!1;var n=t.updateQueue;la=!1;var l=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var c=o,h=c.next;c.next=null,r===null?l=h:r.next=h,r=c;var x=t.alternate;x!==null&&(x=x.updateQueue,o=x.lastBaseUpdate,o!==r&&(o===null?x.firstBaseUpdate=h:o.next=h,x.lastBaseUpdate=c))}if(l!==null){var T=n.baseState;r=0,x=h=c=null,o=l;do{var b=o.lane&-536870913,y=b!==o.lane;if(y?(Q&b)===b:(i&b)===b){b!==0&&b===ci&&(Jr=!0),x!==null&&(x=x.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var C=t,N=o;b=e;var lt=a;switch(N.tag){case 1:if(C=N.payload,typeof C=="function"){T=C.call(lt,T,b);break t}T=C;break t;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,b=typeof C=="function"?C.call(lt,T,b):C,b==null)break t;T=k({},T,b);break t;case 2:la=!0}}b=o.callback,b!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[b]:y.push(b))}else y={lane:b,tag:o.tag,payload:o.payload,callback:o.callback,next:null},x===null?(h=x=y,c=T):x=x.next=y,r|=b;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;y=o,o=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);x===null&&(c=T),n.baseState=c,n.firstBaseUpdate=h,n.lastBaseUpdate=x,l===null&&(n.shared.lanes=0),fa|=r,t.lanes=r,t.memoizedState=T}}function Ls(t,e){if(typeof t!="function")throw Error(d(191,t));t.call(e)}function Ys(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ls(a[t],e)}var gi=Yt(null),rl=Yt(0);function Xs(t,e){t=Ze,tt(rl,t),tt(gi,e),Ze=t|e.baseLanes}function Wr(){tt(rl,Ze),tt(gi,gi.current)}function Fr(){Ze=rl.current,yt(gi),yt(rl)}var ae=Yt(null),he=null;function ua(t){var e=t.alternate;tt(wt,wt.current&1),tt(ae,t),he===null&&(e===null||gi.current!==null||e.memoizedState!==null)&&(he=t)}function Ir(t){tt(wt,wt.current),tt(ae,t),he===null&&(he=t)}function Qs(t){t.tag===22?(tt(wt,wt.current),tt(ae,t),he===null&&(he=t)):sa()}function sa(){tt(wt,wt.current),tt(ae,ae.current)}function ie(t){yt(ae),he===t&&(he=null),yt(wt)}var wt=Yt(0);function ol(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lu(a)||ru(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qe=0,q=null,it=null,At=null,ul=!1,mi=!1,qa=!1,sl=0,an=0,hi=null,dp=0;function xt(){throw Error(d(321))}function Pr(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!te(t[a],e[a]))return!1;return!0}function to(t,e,a,i,n,l){return qe=l,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?jc:ho,qa=!1,l=a(i,n),qa=!1,mi&&(l=$s(e,a,i,n)),Vs(t),l}function Vs(t){z.H=rn;var e=it!==null&&it.next!==null;if(qe=0,At=it=q=null,ul=!1,an=0,hi=null,e)throw Error(d(300));t===null||Et||(t=t.dependencies,t!==null&&Pn(t)&&(Et=!0))}function $s(t,e,a,i){q=t;var n=0;do{if(mi&&(hi=null),an=0,mi=!1,25<=n)throw Error(d(301));if(n+=1,At=it=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}z.H=Mc,l=e(a,i)}while(mi);return l}function fp(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?nn(e):e,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(q.flags|=1024),e}function eo(){var t=sl!==0;return sl=0,t}function ao(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function io(t){if(ul){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ul=!1}qe=0,At=it=q=null,mi=!1,an=sl=0,hi=null}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?q.memoizedState=At=t:At=At.next=t,At}function zt(){if(it===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=At===null?q.memoizedState:At.next;if(e!==null)At=e,it=t;else{if(t===null)throw q.alternate===null?Error(d(467)):Error(d(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},At===null?q.memoizedState=At=t:At=At.next=t}return At}function cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(t){var e=an;return an+=1,hi===null&&(hi=[]),t=Ns(hi,t,e),e=q,(At===null?e.memoizedState:At.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?jc:ho),t}function dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nn(t);if(t.$$typeof===ft)return _t(t)}throw Error(d(438,String(t)))}function no(t){var e=null,a=q.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=q.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=cl(),q.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=jn;return e.index++,a}function Re(t,e){return typeof e=="function"?e(t):e}function fl(t){var e=zt();return lo(e,it,t)}function lo(t,e,a){var i=t.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=a;var n=t.baseQueue,l=i.pending;if(l!==null){if(n!==null){var r=n.next;n.next=l.next,l.next=r}e.baseQueue=n=l,i.pending=null}if(l=t.baseState,n===null)t.memoizedState=l;else{e=n.next;var o=r=null,c=null,h=e,x=!1;do{var T=h.lane&-536870913;if(T!==h.lane?(Q&T)===T:(qe&T)===T){var b=h.revertLane;if(b===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),T===ci&&(x=!0);else if((qe&b)===b){h=h.next,b===ci&&(x=!0);continue}else T={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(o=c=T,r=l):c=c.next=T,q.lanes|=b,fa|=b;T=h.action,qa&&a(l,T),l=h.hasEagerState?h.eagerState:a(l,T)}else b={lane:T,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(o=c=b,r=l):c=c.next=b,q.lanes|=T,fa|=T;h=h.next}while(h!==null&&h!==e);if(c===null?r=l:c.next=o,!te(l,t.memoizedState)&&(Et=!0,x&&(a=di,a!==null)))throw a;t.memoizedState=l,t.baseState=r,t.baseQueue=c,i.lastRenderedState=l}return n===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function ro(t){var e=zt(),a=e.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var i=a.dispatch,n=a.pending,l=e.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do l=t(l,r.action),r=r.next;while(r!==n);te(l,e.memoizedState)||(Et=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),a.lastRenderedState=l}return[l,i]}function Zs(t,e,a){var i=q,n=zt(),l=Z;if(l){if(a===void 0)throw Error(d(407));a=a()}else a=e();var r=!te((it||n).memoizedState,a);if(r&&(n.memoizedState=a,Et=!0),n=n.queue,so(Ws.bind(null,i,n,t),[t]),n.getSnapshot!==e||r||At!==null&&At.memoizedState.tag&1){if(i.flags|=2048,bi(9,{destroy:void 0},Js.bind(null,i,n,a,e),null),ut===null)throw Error(d(349));l||(qe&127)!==0||Ks(i,e,a)}return a}function Ks(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=q.updateQueue,e===null?(e=cl(),q.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Js(t,e,a,i){e.value=a,e.getSnapshot=i,Fs(e)&&Is(t)}function Ws(t,e,a){return a(function(){Fs(e)&&Is(t)})}function Fs(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!te(t,a)}catch{return!0}}function Is(t){var e=Da(t,2);e!==null&&Wt(e,t,2)}function oo(t){var e=Xt();if(typeof t=="function"){var a=t;if(t=a(),qa){Ie(!0);try{a()}finally{Ie(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:t},e}function Ps(t,e,a,i){return t.baseState=a,lo(t,it,typeof i=="function"?i:Re)}function pp(t,e,a,i,n){if(ml(t))throw Error(d(485));if(t=e.action,t!==null){var l={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};z.T!==null?a(!0):l.isTransition=!1,i(l),a=e.pending,a===null?(l.next=e.pending=l,tc(e,l)):(l.next=a.next,e.pending=a.next=l)}}function tc(t,e){var a=e.action,i=e.payload,n=t.state;if(e.isTransition){var l=z.T,r={};z.T=r;try{var o=a(n,i),c=z.S;c!==null&&c(r,o),ec(t,e,o)}catch(h){uo(t,e,h)}finally{l!==null&&r.types!==null&&(l.types=r.types),z.T=l}}else try{l=a(n,i),ec(t,e,l)}catch(h){uo(t,e,h)}}function ec(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){ac(t,e,i)},function(i){return uo(t,e,i)}):ac(t,e,a)}function ac(t,e,a){e.status="fulfilled",e.value=a,ic(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,tc(t,a)))}function uo(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,ic(e),e=e.next;while(e!==i)}t.action=null}function ic(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function nc(t,e){return e}function lc(t,e){if(Z){var a=ut.formState;if(a!==null){t:{var i=q;if(Z){if(mt){e:{for(var n=mt,l=me;n.nodeType!==8;){if(!l){n=null;break e}if(n=be(n.nextSibling),n===null){n=null;break e}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){mt=be(n.nextSibling),i=n.data==="F!";break t}}ia(i)}i=!1}i&&(e=a[0])}}return a=Xt(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nc,lastRenderedState:e},a.queue=i,a=Tc.bind(null,q,i),i.dispatch=a,i=oo(!1),l=mo.bind(null,q,!1,i.queue),i=Xt(),n={state:e,dispatch:null,action:t,pending:null},i.queue=n,a=pp.bind(null,q,n,l,a),n.dispatch=a,i.memoizedState=t,[e,a,!1]}function rc(t){var e=zt();return oc(e,it,t)}function oc(t,e,a){if(e=lo(t,e,nc)[0],t=fl(Re)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=nn(e)}catch(r){throw r===fi?al:r}else i=e;e=zt();var n=e.queue,l=n.dispatch;return a!==e.memoizedState&&(q.flags|=2048,bi(9,{destroy:void 0},gp.bind(null,n,a),null)),[i,l,t]}function gp(t,e){t.action=e}function uc(t){var e=zt(),a=it;if(a!==null)return oc(e,a,t);zt(),e=e.memoizedState,a=zt();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function bi(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=q.updateQueue,e===null&&(e=cl(),q.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function sc(){return zt().memoizedState}function pl(t,e,a,i){var n=Xt();q.flags|=t,n.memoizedState=bi(1|e,{destroy:void 0},a,i===void 0?null:i)}function gl(t,e,a,i){var n=zt();i=i===void 0?null:i;var l=n.memoizedState.inst;it!==null&&i!==null&&Pr(i,it.memoizedState.deps)?n.memoizedState=bi(e,l,a,i):(q.flags|=t,n.memoizedState=bi(1|e,l,a,i))}function cc(t,e){pl(8390656,8,t,e)}function so(t,e){gl(2048,8,t,e)}function mp(t){q.flags|=4;var e=q.updateQueue;if(e===null)e=cl(),q.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function dc(t){var e=zt().memoizedState;return mp({ref:e,nextImpl:t}),function(){if((I&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function fc(t,e){return gl(4,2,t,e)}function pc(t,e){return gl(4,4,t,e)}function gc(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mc(t,e,a){a=a!=null?a.concat([t]):null,gl(4,4,gc.bind(null,e,t),a)}function co(){}function hc(t,e){var a=zt();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&Pr(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function bc(t,e){var a=zt();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&Pr(e,i[1]))return i[0];if(i=t(),qa){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[i,e],i}function fo(t,e,a){return a===void 0||(qe&1073741824)!==0&&(Q&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=vd(),q.lanes|=t,fa|=t,a)}function vc(t,e,a,i){return te(a,e)?a:gi.current!==null?(t=fo(t,a,i),te(t,e)||(Et=!0),t):(qe&42)===0||(qe&1073741824)!==0&&(Q&261930)===0?(Et=!0,t.memoizedState=a):(t=vd(),q.lanes|=t,fa|=t,e)}function yc(t,e,a,i,n){var l=D.p;D.p=l!==0&&8>l?l:8;var r=z.T,o={};z.T=o,mo(t,!1,e,a);try{var c=n(),h=z.S;if(h!==null&&h(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var x=cp(c,i);ln(t,e,x,re(t))}else ln(t,e,i,re(t))}catch(T){ln(t,e,{then:function(){},status:"rejected",reason:T},re())}finally{D.p=l,r!==null&&o.types!==null&&(r.types=o.types),z.T=r}}function hp(){}function po(t,e,a,i){if(t.tag!==5)throw Error(d(476));var n=xc(t).queue;yc(t,n,e,G,a===null?hp:function(){return Sc(t),a(i)})}function xc(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:G},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Sc(t){var e=xc(t);e.next===null&&(e=t.alternate.memoizedState),ln(t,e.next.queue,{},re())}function go(){return _t(wn)}function wc(){return zt().memoizedState}function zc(){return zt().memoizedState}function bp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=re();t=ra(a);var i=oa(e,t,a);i!==null&&(Wt(i,e,a),Pi(i,e,a)),e={cache:Yr()},t.payload=e;return}e=e.return}}function vp(t,e,a){var i=re();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ml(t)?Ac(e,a):(a=Cr(t,e,a,i),a!==null&&(Wt(a,t,i),Ec(a,e,i)))}function Tc(t,e,a){var i=re();ln(t,e,a,i)}function ln(t,e,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ml(t))Ac(e,n);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var r=e.lastRenderedState,o=l(r,a);if(n.hasEagerState=!0,n.eagerState=o,te(o,r))return Jn(t,e,n,0),ut===null&&Kn(),!1}catch{}finally{}if(a=Cr(t,e,n,i),a!==null)return Wt(a,t,i),Ec(a,e,i),!0}return!1}function mo(t,e,a,i){if(i={lane:2,revertLane:Zo(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ml(t)){if(e)throw Error(d(479))}else e=Cr(t,a,i,2),e!==null&&Wt(e,t,2)}function ml(t){var e=t.alternate;return t===q||e!==null&&e===q}function Ac(t,e){mi=ul=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Ec(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,Cu(t,a)}}var rn={readContext:_t,use:dl,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt};rn.useEffectEvent=xt;var jc={readContext:_t,use:dl,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:cc,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,pl(4194308,4,gc.bind(null,e,t),a)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){pl(4,2,t,e)},useMemo:function(t,e){var a=Xt();e=e===void 0?null:e;var i=t();if(qa){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=Xt();if(a!==void 0){var n=a(e);if(qa){Ie(!0);try{a(e)}finally{Ie(!1)}}}else n=e;return i.memoizedState=i.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},i.queue=t,t=t.dispatch=vp.bind(null,q,t),[i.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:function(t){t=oo(t);var e=t.queue,a=Tc.bind(null,q,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:co,useDeferredValue:function(t,e){var a=Xt();return fo(a,t,e)},useTransition:function(){var t=oo(!1);return t=yc.bind(null,q,t.queue,!0,!1),Xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=q,n=Xt();if(Z){if(a===void 0)throw Error(d(407));a=a()}else{if(a=e(),ut===null)throw Error(d(349));(Q&127)!==0||Ks(i,e,a)}n.memoizedState=a;var l={value:a,getSnapshot:e};return n.queue=l,cc(Ws.bind(null,i,l,t),[t]),i.flags|=2048,bi(9,{destroy:void 0},Js.bind(null,i,l,a,e),null),a},useId:function(){var t=Xt(),e=ut.identifierPrefix;if(Z){var a=Me,i=je;a=(i&~(1<<32-Pt(i)-1)).toString(32)+a,e="_"+e+"R_"+a,a=sl++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=dp++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:go,useFormState:lc,useActionState:lc,useOptimistic:function(t){var e=Xt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=mo.bind(null,q,!0,a),a.dispatch=e,[t,e]},useMemoCache:no,useCacheRefresh:function(){return Xt().memoizedState=bp.bind(null,q)},useEffectEvent:function(t){var e=Xt(),a={impl:t};return e.memoizedState=a,function(){if((I&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},ho={readContext:_t,use:dl,useCallback:hc,useContext:_t,useEffect:so,useImperativeHandle:mc,useInsertionEffect:fc,useLayoutEffect:pc,useMemo:bc,useReducer:fl,useRef:sc,useState:function(){return fl(Re)},useDebugValue:co,useDeferredValue:function(t,e){var a=zt();return vc(a,it.memoizedState,t,e)},useTransition:function(){var t=fl(Re)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:Zs,useId:wc,useHostTransitionStatus:go,useFormState:rc,useActionState:rc,useOptimistic:function(t,e){var a=zt();return Ps(a,it,t,e)},useMemoCache:no,useCacheRefresh:zc};ho.useEffectEvent=dc;var Mc={readContext:_t,use:dl,useCallback:hc,useContext:_t,useEffect:so,useImperativeHandle:mc,useInsertionEffect:fc,useLayoutEffect:pc,useMemo:bc,useReducer:ro,useRef:sc,useState:function(){return ro(Re)},useDebugValue:co,useDeferredValue:function(t,e){var a=zt();return it===null?fo(a,t,e):vc(a,it.memoizedState,t,e)},useTransition:function(){var t=ro(Re)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:Zs,useId:wc,useHostTransitionStatus:go,useFormState:uc,useActionState:uc,useOptimistic:function(t,e){var a=zt();return it!==null?Ps(a,it,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:no,useCacheRefresh:zc};Mc.useEffectEvent=dc;function bo(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:k({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vo={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=re(),n=ra(i);n.payload=e,a!=null&&(n.callback=a),e=oa(t,n,i),e!==null&&(Wt(e,t,i),Pi(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=re(),n=ra(i);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=oa(t,n,i),e!==null&&(Wt(e,t,i),Pi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=re(),i=ra(a);i.tag=2,e!=null&&(i.callback=e),e=oa(t,i,a),e!==null&&(Wt(e,t,a),Pi(e,t,a))}};function kc(t,e,a,i,n,l,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,l,r):e.prototype&&e.prototype.isPureReactComponent?!Vi(a,i)||!Vi(n,l):!0}function Dc(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&vo.enqueueReplaceState(e,e.state,null)}function Ra(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=k({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Cc(t){Zn(t)}function Hc(t){console.error(t)}function Oc(t){Zn(t)}function hl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Bc(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function yo(t,e,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){hl(t,e)},a}function Uc(t){return t=ra(t),t.tag=3,t}function Nc(t,e,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var l=i.value;t.payload=function(){return n(l)},t.callback=function(){Bc(e,a,i)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Bc(e,a,i),typeof n!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function yp(t,e,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&si(e,a,n,!0),a=ae.current,a!==null){switch(a.tag){case 31:case 13:return he===null?Ml():a.alternate===null&&St===0&&(St=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===il?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),Qo(t,i,n)),!1;case 22:return a.flags|=65536,i===il?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),Qo(t,i,n)),!1}throw Error(d(435,a.tag))}return Qo(t,i,n),Ml(),!1}if(Z)return e=ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,i!==Gr&&(t=Error(d(422),{cause:i}),Ki(fe(t,a)))):(i!==Gr&&(e=Error(d(423),{cause:i}),Ki(fe(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,i=fe(i,a),n=yo(t.stateNode,i,n),Kr(t,n),St!==4&&(St=2)),!1;var l=Error(d(520),{cause:i});if(l=fe(l,a),gn===null?gn=[l]:gn.push(l),St!==4&&(St=2),e===null)return!0;i=fe(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=yo(a.stateNode,i,t),Kr(a,t),!1;case 1:if(e=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(pa===null||!pa.has(l))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Uc(n),Nc(n,t,a,i),Kr(a,n),!1}a=a.return}while(a!==null);return!1}var xo=Error(d(461)),Et=!1;function qt(t,e,a,i){e.child=t===null?Rs(e,null,a,i):_a(e,t.child,a,i)}function Gc(t,e,a,i,n){a=a.render;var l=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ba(e),i=to(t,e,a,r,l,n),o=eo(),t!==null&&!Et?(ao(t,e,n),Le(t,e,n)):(Z&&o&&Ur(e),e.flags|=1,qt(t,e,i,n),e.child)}function _c(t,e,a,i,n){if(t===null){var l=a.type;return typeof l=="function"&&!Hr(l)&&l.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=l,qc(t,e,l,i,n)):(t=Fn(a.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!Mo(t,n)){var r=l.memoizedProps;if(a=a.compare,a=a!==null?a:Vi,a(r,i)&&t.ref===e.ref)return Le(t,e,n)}return e.flags|=1,t=Ue(l,i),t.ref=e.ref,t.return=e,e.child=t}function qc(t,e,a,i,n){if(t!==null){var l=t.memoizedProps;if(Vi(l,i)&&t.ref===e.ref)if(Et=!1,e.pendingProps=i=l,Mo(t,n))(t.flags&131072)!==0&&(Et=!0);else return e.lanes=t.lanes,Le(t,e,n)}return So(t,e,a,i,n)}function Rc(t,e,a,i){var n=i.children,l=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,t!==null){for(i=e.child=t.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~l}else i=0,e.child=null;return Lc(t,e,l,a,i)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&el(e,l!==null?l.cachePool:null),l!==null?Xs(e,l):Wr(),Qs(e);else return i=e.lanes=536870912,Lc(t,e,l!==null?l.baseLanes|a:a,a,i)}else l!==null?(el(e,l.cachePool),Xs(e,l),sa(),e.memoizedState=null):(t!==null&&el(e,null),Wr(),sa());return qt(t,e,n,a),e.child}function on(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Lc(t,e,a,i,n){var l=Qr();return l=l===null?null:{parent:Tt._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&el(e,null),Wr(),Qs(e),t!==null&&si(t,e,i,!0),e.childLanes=n,null}function bl(t,e){return e=yl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Yc(t,e,a){return _a(e,t.child,null,a),t=bl(e,e.pendingProps),t.flags|=2,ie(e),e.memoizedState=null,t}function xp(t,e,a){var i=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Z){if(i.mode==="hidden")return t=bl(e,i),e.lanes=536870912,on(null,t);if(Ir(e),(t=mt)?(t=tf(t,me),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ea!==null?{id:je,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},a=As(t),a.return=e,e.child=a,Gt=e,mt=null)):t=null,t===null)throw ia(e);return e.lanes=536870912,null}return bl(e,i)}var l=t.memoizedState;if(l!==null){var r=l.dehydrated;if(Ir(e),n)if(e.flags&256)e.flags&=-257,e=Yc(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(d(558));else if(Et||si(t,e,a,!1),n=(a&t.childLanes)!==0,Et||n){if(i=ut,i!==null&&(r=Hu(i,a),r!==0&&r!==l.retryLane))throw l.retryLane=r,Da(t,r),Wt(i,t,r),xo;Ml(),e=Yc(t,e,a)}else t=l.treeContext,mt=be(r.nextSibling),Gt=e,Z=!0,aa=null,me=!1,t!==null&&Ms(e,t),e=bl(e,i),e.flags|=4096;return e}return t=Ue(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function vl(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function So(t,e,a,i,n){return Ba(e),a=to(t,e,a,i,void 0,n),i=eo(),t!==null&&!Et?(ao(t,e,n),Le(t,e,n)):(Z&&i&&Ur(e),e.flags|=1,qt(t,e,a,n),e.child)}function Xc(t,e,a,i,n,l){return Ba(e),e.updateQueue=null,a=$s(e,i,a,n),Vs(t),i=eo(),t!==null&&!Et?(ao(t,e,l),Le(t,e,l)):(Z&&i&&Ur(e),e.flags|=1,qt(t,e,a,l),e.child)}function Qc(t,e,a,i,n){if(Ba(e),e.stateNode===null){var l=li,r=a.contextType;typeof r=="object"&&r!==null&&(l=_t(r)),l=new a(i,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=vo,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=i,l.state=e.memoizedState,l.refs={},$r(e),r=a.contextType,l.context=typeof r=="object"&&r!==null?_t(r):li,l.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(bo(e,a,r,i),l.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&vo.enqueueReplaceState(l,l.state,null),en(e,i,l,n),tn(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){l=e.stateNode;var o=e.memoizedProps,c=Ra(a,o);l.props=c;var h=l.context,x=a.contextType;r=li,typeof x=="object"&&x!==null&&(r=_t(x));var T=a.getDerivedStateFromProps;x=typeof T=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||h!==r)&&Dc(e,l,i,r),la=!1;var b=e.memoizedState;l.state=b,en(e,i,l,n),tn(),h=e.memoizedState,o||b!==h||la?(typeof T=="function"&&(bo(e,a,T,i),h=e.memoizedState),(c=la||kc(e,a,c,i,b,h,r))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=h),l.props=i,l.state=h,l.context=r,i=c):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Zr(t,e),r=e.memoizedProps,x=Ra(a,r),l.props=x,T=e.pendingProps,b=l.context,h=a.contextType,c=li,typeof h=="object"&&h!==null&&(c=_t(h)),o=a.getDerivedStateFromProps,(h=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==T||b!==c)&&Dc(e,l,i,c),la=!1,b=e.memoizedState,l.state=b,en(e,i,l,n),tn();var y=e.memoizedState;r!==T||b!==y||la||t!==null&&t.dependencies!==null&&Pn(t.dependencies)?(typeof o=="function"&&(bo(e,a,o,i),y=e.memoizedState),(x=la||kc(e,a,x,i,b,y,c)||t!==null&&t.dependencies!==null&&Pn(t.dependencies))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,y,c)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),l.props=i,l.state=y,l.context=c,i=x):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),i=!1)}return l=i,vl(t,e),i=(e.flags&128)!==0,l||i?(l=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&i?(e.child=_a(e,t.child,null,n),e.child=_a(e,null,a,n)):qt(t,e,a,n),e.memoizedState=l.state,t=e.child):t=Le(t,e,n),t}function Vc(t,e,a,i){return Ha(),e.flags|=256,qt(t,e,a,i),e.child}var wo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zo(t){return{baseLanes:t,cachePool:Bs()}}function To(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=le),t}function $c(t,e,a){var i=e.pendingProps,n=!1,l=(e.flags&128)!==0,r;if((r=l)||(r=t!==null&&t.memoizedState===null?!1:(wt.current&2)!==0),r&&(n=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(Z){if(n?ua(e):sa(),(t=mt)?(t=tf(t,me),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ea!==null?{id:je,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},a=As(t),a.return=e,e.child=a,Gt=e,mt=null)):t=null,t===null)throw ia(e);return ru(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,n?(sa(),n=e.mode,o=yl({mode:"hidden",children:o},n),i=Ca(i,n,a,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=zo(a),i.childLanes=To(t,r,a),e.memoizedState=wo,on(null,i)):(ua(e),Ao(e,o))}var c=t.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(l)e.flags&256?(ua(e),e.flags&=-257,e=Eo(t,e,a)):e.memoizedState!==null?(sa(),e.child=t.child,e.flags|=128,e=null):(sa(),o=i.fallback,n=e.mode,i=yl({mode:"visible",children:i.children},n),o=Ca(o,n,a,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,_a(e,t.child,null,a),i=e.child,i.memoizedState=zo(a),i.childLanes=To(t,r,a),e.memoizedState=wo,e=on(null,i));else if(ua(e),ru(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var h=r.dgst;r=h,i=Error(d(419)),i.stack="",i.digest=r,Ki({value:i,source:null,stack:null}),e=Eo(t,e,a)}else if(Et||si(t,e,a,!1),r=(a&t.childLanes)!==0,Et||r){if(r=ut,r!==null&&(i=Hu(r,a),i!==0&&i!==c.retryLane))throw c.retryLane=i,Da(t,i),Wt(r,t,i),xo;lu(o)||Ml(),e=Eo(t,e,a)}else lu(o)?(e.flags|=192,e.child=t.child,e=null):(t=c.treeContext,mt=be(o.nextSibling),Gt=e,Z=!0,aa=null,me=!1,t!==null&&Ms(e,t),e=Ao(e,i.children),e.flags|=4096);return e}return n?(sa(),o=i.fallback,n=e.mode,c=t.child,h=c.sibling,i=Ue(c,{mode:"hidden",children:i.children}),i.subtreeFlags=c.subtreeFlags&65011712,h!==null?o=Ue(h,o):(o=Ca(o,n,a,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,on(null,i),i=e.child,o=t.child.memoizedState,o===null?o=zo(a):(n=o.cachePool,n!==null?(c=Tt._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Bs(),o={baseLanes:o.baseLanes|a,cachePool:n}),i.memoizedState=o,i.childLanes=To(t,r,a),e.memoizedState=wo,on(t.child,i)):(ua(e),a=t.child,t=a.sibling,a=Ue(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function Ao(t,e){return e=yl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function yl(t,e){return t=ee(22,t,null,e),t.lanes=0,t}function Eo(t,e,a){return _a(e,t.child,null,a),t=Ao(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zc(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Rr(t.return,e,a)}function jo(t,e,a,i,n,l){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:l}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=a,r.tailMode=n,r.treeForkCount=l)}function Kc(t,e,a){var i=e.pendingProps,n=i.revealOrder,l=i.tail;i=i.children;var r=wt.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,tt(wt,r),qt(t,e,i,a),i=Z?Zi:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zc(t,a,e);else if(t.tag===19)Zc(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&ol(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),jo(e,!1,n,a,l,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ol(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}jo(e,!0,a,null,l,i);break;case"together":jo(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Le(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),fa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(si(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(d(153));if(e.child!==null){for(t=e.child,a=Ue(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ue(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Mo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Pn(t)))}function Sp(t,e,a){switch(e.tag){case 3:Dn(e,e.stateNode.containerInfo),na(e,Tt,t.memoizedState.cache),Ha();break;case 27:case 5:Fl(e);break;case 4:Dn(e,e.stateNode.containerInfo);break;case 10:na(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ir(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(ua(e),e.flags|=128,null):(a&e.child.childLanes)!==0?$c(t,e,a):(ua(e),t=Le(t,e,a),t!==null?t.sibling:null);ua(e);break;case 19:var n=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(si(t,e,a,!1),i=(a&e.childLanes)!==0),n){if(i)return Kc(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(wt,wt.current),i)break;return null;case 22:return e.lanes=0,Rc(t,e,a,e.pendingProps);case 24:na(e,Tt,t.memoizedState.cache)}return Le(t,e,a)}function Jc(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Et=!0;else{if(!Mo(t,a)&&(e.flags&128)===0)return Et=!1,Sp(t,e,a);Et=(t.flags&131072)!==0}else Et=!1,Z&&(e.flags&1048576)!==0&&js(e,Zi,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=Na(e.elementType),e.type=t,typeof t=="function")Hr(t)?(i=Ra(t,i),e.tag=1,e=Qc(null,e,t,i,a)):(e.tag=0,e=So(null,e,t,i,a));else{if(t!=null){var n=t.$$typeof;if(n===Mt){e.tag=11,e=Gc(null,e,t,i,a);break t}else if(n===Se){e.tag=14,e=_c(null,e,t,i,a);break t}}throw e=Hi(t)||t,Error(d(306,e,""))}}return e;case 0:return So(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,n=Ra(i,e.pendingProps),Qc(t,e,i,n,a);case 3:t:{if(Dn(e,e.stateNode.containerInfo),t===null)throw Error(d(387));i=e.pendingProps;var l=e.memoizedState;n=l.element,Zr(t,e),en(e,i,null,a);var r=e.memoizedState;if(i=r.cache,na(e,Tt,i),i!==l.cache&&Lr(e,[Tt],a,!0),tn(),i=r.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Vc(t,e,i,a);break t}else if(i!==n){n=fe(Error(d(424)),e),Ki(n),e=Vc(t,e,i,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(mt=be(t.firstChild),Gt=e,Z=!0,aa=null,me=!0,a=Rs(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ha(),i===n){e=Le(t,e,a);break t}qt(t,e,i,a)}e=e.child}return e;case 26:return vl(t,e),t===null?(a=of(e.type,null,e.pendingProps,null))?e.memoizedState=a:Z||(a=e.type,t=e.pendingProps,i=Ul(Fe.current).createElement(a),i[Nt]=e,i[Qt]=t,Rt(i,a,t),Ht(i),e.stateNode=i):e.memoizedState=of(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Fl(e),t===null&&Z&&(i=e.stateNode=nf(e.type,e.pendingProps,Fe.current),Gt=e,me=!0,n=mt,ba(e.type)?(ou=n,mt=be(i.firstChild)):mt=n),qt(t,e,e.pendingProps.children,a),vl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Z&&((n=i=mt)&&(i=Fp(i,e.type,e.pendingProps,me),i!==null?(e.stateNode=i,Gt=e,mt=be(i.firstChild),me=!1,n=!0):n=!1),n||ia(e)),Fl(e),n=e.type,l=e.pendingProps,r=t!==null?t.memoizedProps:null,i=l.children,au(n,l)?i=null:r!==null&&au(n,r)&&(e.flags|=32),e.memoizedState!==null&&(n=to(t,e,fp,null,null,a),wn._currentValue=n),vl(t,e),qt(t,e,i,a),e.child;case 6:return t===null&&Z&&((t=a=mt)&&(a=Ip(a,e.pendingProps,me),a!==null?(e.stateNode=a,Gt=e,mt=null,t=!0):t=!1),t||ia(e)),null;case 13:return $c(t,e,a);case 4:return Dn(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_a(e,null,i,a):qt(t,e,i,a),e.child;case 11:return Gc(t,e,e.type,e.pendingProps,a);case 7:return qt(t,e,e.pendingProps,a),e.child;case 8:return qt(t,e,e.pendingProps.children,a),e.child;case 12:return qt(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,na(e,e.type,i.value),qt(t,e,i.children,a),e.child;case 9:return n=e.type._context,i=e.pendingProps.children,Ba(e),n=_t(n),i=i(n),e.flags|=1,qt(t,e,i,a),e.child;case 14:return _c(t,e,e.type,e.pendingProps,a);case 15:return qc(t,e,e.type,e.pendingProps,a);case 19:return Kc(t,e,a);case 31:return xp(t,e,a);case 22:return Rc(t,e,a,e.pendingProps);case 24:return Ba(e),i=_t(Tt),t===null?(n=Qr(),n===null&&(n=ut,l=Yr(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=a),n=l),e.memoizedState={parent:i,cache:n},$r(e),na(e,Tt,n)):((t.lanes&a)!==0&&(Zr(t,e),en(e,null,null,a),tn()),n=t.memoizedState,l=e.memoizedState,n.parent!==i?(n={parent:i,cache:i},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),na(e,Tt,i)):(i=l.cache,na(e,Tt,i),i!==n.cache&&Lr(e,[Tt],a,!0))),qt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function Ye(t){t.flags|=4}function ko(t,e,a,i,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(wd())t.flags|=8192;else throw Ga=il,Vr}else t.flags&=-16777217}function Wc(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ff(e))if(wd())t.flags|=8192;else throw Ga=il,Vr}function xl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ku():536870912,t.lanes|=e,Si|=e)}function un(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function wp(t,e,a){var i=e.pendingProps;switch(Nr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return ht(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),_e(Tt),Va(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ui(e)?Ye(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,_r())),ht(e),null;case 26:var n=e.type,l=e.memoizedState;return t===null?(Ye(e),l!==null?(ht(e),Wc(e,l)):(ht(e),ko(e,n,null,i,a))):l?l!==t.memoizedState?(Ye(e),ht(e),Wc(e,l)):(ht(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Ye(e),ht(e),ko(e,n,t,i,a)),null;case 27:if(Cn(e),a=Fe.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ye(e);else{if(!i){if(e.stateNode===null)throw Error(d(166));return ht(e),null}t=Ct.current,ui(e)?ks(e):(t=nf(n,i,a),e.stateNode=t,Ye(e))}return ht(e),null;case 5:if(Cn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ye(e);else{if(!i){if(e.stateNode===null)throw Error(d(166));return ht(e),null}if(l=Ct.current,ui(e))ks(e);else{var r=Ul(Fe.current);switch(l){case 1:l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=r.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?r.createElement(n,{is:i.is}):r.createElement(n)}}l[Nt]=e,l[Qt]=i;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)l.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=l;t:switch(Rt(l,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ye(e)}}return ht(e),ko(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ye(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(d(166));if(t=Fe.current,ui(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,n=Gt,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}t[Nt]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||$d(t.nodeValue,a)),t||ia(e,!0)}else t=Ul(t).createTextNode(i),t[Nt]=e,e.stateNode=t}return ht(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(i=ui(e),a!==null){if(t===null){if(!i)throw Error(d(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[Nt]=e}else Ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ht(e),t=!1}else a=_r(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ie(e),e):(ie(e),null);if((e.flags&128)!==0)throw Error(d(558))}return ht(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ui(e),i!==null&&i.dehydrated!==null){if(t===null){if(!n)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Nt]=e}else Ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ht(e),n=!1}else n=_r(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ie(e),e):(ie(e),null)}return ie(e),(e.flags&128)!==0?(e.lanes=a,e):(a=i!==null,t=t!==null&&t.memoizedState!==null,a&&(i=e.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==n&&(i.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),xl(e,e.updateQueue),ht(e),null);case 4:return Va(),t===null&&Fo(e.stateNode.containerInfo),ht(e),null;case 10:return _e(e.type),ht(e),null;case 19:if(yt(wt),i=e.memoizedState,i===null)return ht(e),null;if(n=(e.flags&128)!==0,l=i.rendering,l===null)if(n)un(i,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=ol(t),l!==null){for(e.flags|=128,un(i,!1),t=l.updateQueue,e.updateQueue=t,xl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Ts(a,t),a=a.sibling;return tt(wt,wt.current&1|2),Z&&Ne(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Ft()>Al&&(e.flags|=128,n=!0,un(i,!1),e.lanes=4194304)}else{if(!n)if(t=ol(l),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,xl(e,t),un(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return ht(e),null}else 2*Ft()-i.renderingStartTime>Al&&a!==536870912&&(e.flags|=128,n=!0,un(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(t=i.last,t!==null?t.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ft(),t.sibling=null,a=wt.current,tt(wt,n?a&1|2:a&1),Z&&Ne(e,i.treeForkCount),t):(ht(e),null);case 22:case 23:return ie(e),Fr(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),a=e.updateQueue,a!==null&&xl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&yt(Ua),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),_e(Tt),ht(e),null;case 25:return null;case 30:return null}throw Error(d(156,e.tag))}function zp(t,e){switch(Nr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _e(Tt),Va(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Cn(e),null;case 31:if(e.memoizedState!==null){if(ie(e),e.alternate===null)throw Error(d(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ie(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(d(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(wt),null;case 4:return Va(),null;case 10:return _e(e.type),null;case 22:case 23:return ie(e),Fr(),t!==null&&yt(Ua),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return _e(Tt),null;case 25:return null;default:return null}}function Fc(t,e){switch(Nr(e),e.tag){case 3:_e(Tt),Va();break;case 26:case 27:case 5:Cn(e);break;case 4:Va();break;case 31:e.memoizedState!==null&&ie(e);break;case 13:ie(e);break;case 19:yt(wt);break;case 10:_e(e.type);break;case 22:case 23:ie(e),Fr(),t!==null&&yt(Ua);break;case 24:_e(Tt)}}function sn(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&t)===t){i=void 0;var l=a.create,r=a.inst;i=l(),r.destroy=i}a=a.next}while(a!==n)}}catch(o){at(e,e.return,o)}}function ca(t,e,a){try{var i=e.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var l=n.next;i=l;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=e;var c=a,h=o;try{h()}catch(x){at(n,c,x)}}}i=i.next}while(i!==l)}}catch(x){at(e,e.return,x)}}function Ic(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Ys(e,a)}catch(i){at(t,t.return,i)}}}function Pc(t,e,a){a.props=Ra(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){at(t,e,i)}}function cn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(n){at(t,e,n)}}function ke(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){at(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){at(t,e,n)}else a.current=null}function td(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){at(t,t.return,n)}}function Do(t,e,a){try{var i=t.stateNode;Vp(i,t.type,a,e),i[Qt]=e}catch(n){at(t,t.return,n)}}function ed(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ba(t.type)||t.tag===4}function Co(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ed(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ho(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Oe));else if(i!==4&&(i===27&&ba(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Ho(t,e,a),t=t.sibling;t!==null;)Ho(t,e,a),t=t.sibling}function Sl(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sl(t,e,a),t=t.sibling;t!==null;)Sl(t,e,a),t=t.sibling}function ad(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Rt(e,i,a),e[Nt]=t,e[Qt]=a}catch(l){at(t,t.return,l)}}var Xe=!1,jt=!1,Oo=!1,id=typeof WeakSet=="function"?WeakSet:Set,Ot=null;function Tp(t,e){if(t=t.containerInfo,tu=Yl,t=ms(t),Ar(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break t}var r=0,o=-1,c=-1,h=0,x=0,T=t,b=null;e:for(;;){for(var y;T!==a||n!==0&&T.nodeType!==3||(o=r+n),T!==l||i!==0&&T.nodeType!==3||(c=r+i),T.nodeType===3&&(r+=T.nodeValue.length),(y=T.firstChild)!==null;)b=T,T=y;for(;;){if(T===t)break e;if(b===a&&++h===n&&(o=r),b===l&&++x===i&&(c=r),(y=T.nextSibling)!==null)break;T=b,b=T.parentNode}T=y}a=o===-1||c===-1?null:{start:o,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(eu={focusedElem:t,selectionRange:a},Yl=!1,Ot=e;Ot!==null;)if(e=Ot,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ot=t;else for(;Ot!==null;){switch(e=Ot,l=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,a=e,n=l.memoizedProps,l=l.memoizedState,i=a.stateNode;try{var C=Ra(a.type,n);t=i.getSnapshotBeforeUpdate(C,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(N){at(a,a.return,N)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)nu(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=e.sibling,t!==null){t.return=e.return,Ot=t;break}Ot=e.return}}function nd(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ve(t,a),i&4&&sn(5,a);break;case 1:if(Ve(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){at(a,a.return,r)}else{var n=Ra(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){at(a,a.return,r)}}i&64&&Ic(a),i&512&&cn(a,a.return);break;case 3:if(Ve(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Ys(t,e)}catch(r){at(a,a.return,r)}}break;case 27:e===null&&i&4&&ad(a);case 26:case 5:Ve(t,a),e===null&&i&4&&td(a),i&512&&cn(a,a.return);break;case 12:Ve(t,a);break;case 31:Ve(t,a),i&4&&od(t,a);break;case 13:Ve(t,a),i&4&&ud(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Op.bind(null,a),Pp(t,a))));break;case 22:if(i=a.memoizedState!==null||Xe,!i){e=e!==null&&e.memoizedState!==null||jt,n=Xe;var l=jt;Xe=i,(jt=e)&&!l?$e(t,a,(a.subtreeFlags&8772)!==0):Ve(t,a),Xe=n,jt=l}break;case 30:break;default:Ve(t,a)}}function ld(t){var e=t.alternate;e!==null&&(t.alternate=null,ld(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ur(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var bt=null,$t=!1;function Qe(t,e,a){for(a=a.child;a!==null;)rd(t,e,a),a=a.sibling}function rd(t,e,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Oi,a)}catch{}switch(a.tag){case 26:jt||ke(a,e),Qe(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:jt||ke(a,e);var i=bt,n=$t;ba(a.type)&&(bt=a.stateNode,$t=!1),Qe(t,e,a),yn(a.stateNode),bt=i,$t=n;break;case 5:jt||ke(a,e);case 6:if(i=bt,n=$t,bt=null,Qe(t,e,a),bt=i,$t=n,bt!==null)if($t)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(a.stateNode)}catch(l){at(a,e,l)}else try{bt.removeChild(a.stateNode)}catch(l){at(a,e,l)}break;case 18:bt!==null&&($t?(t=bt,Id(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ki(t)):Id(bt,a.stateNode));break;case 4:i=bt,n=$t,bt=a.stateNode.containerInfo,$t=!0,Qe(t,e,a),bt=i,$t=n;break;case 0:case 11:case 14:case 15:ca(2,a,e),jt||ca(4,a,e),Qe(t,e,a);break;case 1:jt||(ke(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Pc(a,e,i)),Qe(t,e,a);break;case 21:Qe(t,e,a);break;case 22:jt=(i=jt)||a.memoizedState!==null,Qe(t,e,a),jt=i;break;default:Qe(t,e,a)}}function od(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ki(t)}catch(a){at(e,e.return,a)}}}function ud(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ki(t)}catch(a){at(e,e.return,a)}}function Ap(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new id),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new id),e;default:throw Error(d(435,t.tag))}}function wl(t,e){var a=Ap(t);e.forEach(function(i){if(!a.has(i)){a.add(i);var n=Bp.bind(null,t,i);i.then(n,n)}})}function Zt(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],l=t,r=e,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(ba(o.type)){bt=o.stateNode,$t=!1;break t}break;case 5:bt=o.stateNode,$t=!1;break t;case 3:case 4:bt=o.stateNode.containerInfo,$t=!0;break t}o=o.return}if(bt===null)throw Error(d(160));rd(l,r,n),bt=null,$t=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)sd(e,t),e=e.sibling}var Te=null;function sd(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zt(e,t),Kt(t),i&4&&(ca(3,t,t.return),sn(3,t),ca(5,t,t.return));break;case 1:Zt(e,t),Kt(t),i&512&&(jt||a===null||ke(a,a.return)),i&64&&Xe&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=Te;if(Zt(e,t),Kt(t),i&512&&(jt||a===null||ke(a,a.return)),i&4){var l=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(i){case"title":l=n.getElementsByTagName("title")[0],(!l||l[Ni]||l[Nt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(i),n.head.insertBefore(l,n.querySelector("head > title"))),Rt(l,i,a),l[Nt]=t,Ht(l),i=l;break t;case"link":var r=cf("link","href",n).get(i+(a.href||""));if(r){for(var o=0;o<r.length;o++)if(l=r[o],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(o,1);break e}}l=n.createElement(i),Rt(l,i,a),n.head.appendChild(l);break;case"meta":if(r=cf("meta","content",n).get(i+(a.content||""))){for(o=0;o<r.length;o++)if(l=r[o],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(o,1);break e}}l=n.createElement(i),Rt(l,i,a),n.head.appendChild(l);break;default:throw Error(d(468,i))}l[Nt]=t,Ht(l),i=l}t.stateNode=i}else df(n,t.type,t.stateNode);else t.stateNode=sf(n,i,t.memoizedProps);else l!==i?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,i===null?df(n,t.type,t.stateNode):sf(n,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Do(t,t.memoizedProps,a.memoizedProps)}break;case 27:Zt(e,t),Kt(t),i&512&&(jt||a===null||ke(a,a.return)),a!==null&&i&4&&Do(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Zt(e,t),Kt(t),i&512&&(jt||a===null||ke(a,a.return)),t.flags&32){n=t.stateNode;try{Ia(n,"")}catch(C){at(t,t.return,C)}}i&4&&t.stateNode!=null&&(n=t.memoizedProps,Do(t,n,a!==null?a.memoizedProps:n)),i&1024&&(Oo=!0);break;case 6:if(Zt(e,t),Kt(t),i&4){if(t.stateNode===null)throw Error(d(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(C){at(t,t.return,C)}}break;case 3:if(_l=null,n=Te,Te=Nl(e.containerInfo),Zt(e,t),Te=n,Kt(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{ki(e.containerInfo)}catch(C){at(t,t.return,C)}Oo&&(Oo=!1,cd(t));break;case 4:i=Te,Te=Nl(t.stateNode.containerInfo),Zt(e,t),Kt(t),Te=i;break;case 12:Zt(e,t),Kt(t);break;case 31:Zt(e,t),Kt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,wl(t,i)));break;case 13:Zt(e,t),Kt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tl=Ft()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,wl(t,i)));break;case 22:n=t.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,h=Xe,x=jt;if(Xe=h||n,jt=x||c,Zt(e,t),jt=x,Xe=h,Kt(t),i&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||c||Xe||jt||La(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){c=a=e;try{if(l=c.stateNode,n)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=c.stateNode;var T=c.memoizedProps.style,b=T!=null&&T.hasOwnProperty("display")?T.display:null;o.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(C){at(c,c.return,C)}}}else if(e.tag===6){if(a===null){c=e;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(C){at(c,c.return,C)}}}else if(e.tag===18){if(a===null){c=e;try{var y=c.stateNode;n?Pd(y,!0):Pd(c.stateNode,!1)}catch(C){at(c,c.return,C)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,wl(t,a))));break;case 19:Zt(e,t),Kt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,wl(t,i)));break;case 30:break;case 21:break;default:Zt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if(ed(i)){a=i;break}i=i.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var n=a.stateNode,l=Co(t);Sl(t,l,n);break;case 5:var r=a.stateNode;a.flags&32&&(Ia(r,""),a.flags&=-33);var o=Co(t);Sl(t,o,r);break;case 3:case 4:var c=a.stateNode.containerInfo,h=Co(t);Ho(t,h,c);break;default:throw Error(d(161))}}catch(x){at(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;cd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ve(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)nd(t,e.alternate,e),e=e.sibling}function La(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ca(4,e,e.return),La(e);break;case 1:ke(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Pc(e,e.return,a),La(e);break;case 27:yn(e.stateNode);case 26:case 5:ke(e,e.return),La(e);break;case 22:e.memoizedState===null&&La(e);break;case 30:La(e);break;default:La(e)}t=t.sibling}}function $e(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,n=t,l=e,r=l.flags;switch(l.tag){case 0:case 11:case 15:$e(n,l,a),sn(4,l);break;case 1:if($e(n,l,a),i=l,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){at(i,i.return,h)}if(i=l,n=i.updateQueue,n!==null){var o=i.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Ls(c[n],o)}catch(h){at(i,i.return,h)}}a&&r&64&&Ic(l),cn(l,l.return);break;case 27:ad(l);case 26:case 5:$e(n,l,a),a&&i===null&&r&4&&td(l),cn(l,l.return);break;case 12:$e(n,l,a);break;case 31:$e(n,l,a),a&&r&4&&od(n,l);break;case 13:$e(n,l,a),a&&r&4&&ud(n,l);break;case 22:l.memoizedState===null&&$e(n,l,a),cn(l,l.return);break;case 30:break;default:$e(n,l,a)}e=e.sibling}}function Bo(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ji(a))}function Uo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ji(t))}function Ae(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dd(t,e,a,i),e=e.sibling}function dd(t,e,a,i){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ae(t,e,a,i),n&2048&&sn(9,e);break;case 1:Ae(t,e,a,i);break;case 3:Ae(t,e,a,i),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ji(t)));break;case 12:if(n&2048){Ae(t,e,a,i),t=e.stateNode;try{var l=e.memoizedProps,r=l.id,o=l.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){at(e,e.return,c)}}else Ae(t,e,a,i);break;case 31:Ae(t,e,a,i);break;case 13:Ae(t,e,a,i);break;case 23:break;case 22:l=e.stateNode,r=e.alternate,e.memoizedState!==null?l._visibility&2?Ae(t,e,a,i):dn(t,e):l._visibility&2?Ae(t,e,a,i):(l._visibility|=2,vi(t,e,a,i,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Bo(r,e);break;case 24:Ae(t,e,a,i),n&2048&&Uo(e.alternate,e);break;default:Ae(t,e,a,i)}}function vi(t,e,a,i,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=t,r=e,o=a,c=i,h=r.flags;switch(r.tag){case 0:case 11:case 15:vi(l,r,o,c,n),sn(8,r);break;case 23:break;case 22:var x=r.stateNode;r.memoizedState!==null?x._visibility&2?vi(l,r,o,c,n):dn(l,r):(x._visibility|=2,vi(l,r,o,c,n)),n&&h&2048&&Bo(r.alternate,r);break;case 24:vi(l,r,o,c,n),n&&h&2048&&Uo(r.alternate,r);break;default:vi(l,r,o,c,n)}e=e.sibling}}function dn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,n=i.flags;switch(i.tag){case 22:dn(a,i),n&2048&&Bo(i.alternate,i);break;case 24:dn(a,i),n&2048&&Uo(i.alternate,i);break;default:dn(a,i)}e=e.sibling}}var fn=8192;function yi(t,e,a){if(t.subtreeFlags&fn)for(t=t.child;t!==null;)fd(t,e,a),t=t.sibling}function fd(t,e,a){switch(t.tag){case 26:yi(t,e,a),t.flags&fn&&t.memoizedState!==null&&dg(a,Te,t.memoizedState,t.memoizedProps);break;case 5:yi(t,e,a);break;case 3:case 4:var i=Te;Te=Nl(t.stateNode.containerInfo),yi(t,e,a),Te=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=fn,fn=16777216,yi(t,e,a),fn=i):yi(t,e,a));break;default:yi(t,e,a)}}function pd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function pn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Ot=i,md(i,t)}pd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gd(t),t=t.sibling}function gd(t){switch(t.tag){case 0:case 11:case 15:pn(t),t.flags&2048&&ca(9,t,t.return);break;case 3:pn(t);break;case 12:pn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,zl(t)):pn(t);break;default:pn(t)}}function zl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Ot=i,md(i,t)}pd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ca(8,e,e.return),zl(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,zl(e));break;default:zl(e)}t=t.sibling}}function md(t,e){for(;Ot!==null;){var a=Ot;switch(a.tag){case 0:case 11:case 15:ca(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ji(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Ot=i;else t:for(a=t;Ot!==null;){i=Ot;var n=i.sibling,l=i.return;if(ld(i),i===a){Ot=null;break t}if(n!==null){n.return=l,Ot=n;break t}Ot=l}}}var Ep={getCacheForType:function(t){var e=_t(Tt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return _t(Tt).controller.signal}},jp=typeof WeakMap=="function"?WeakMap:Map,I=0,ut=null,Y=null,Q=0,et=0,ne=null,da=!1,xi=!1,No=!1,Ze=0,St=0,fa=0,Ya=0,Go=0,le=0,Si=0,gn=null,Jt=null,_o=!1,Tl=0,hd=0,Al=1/0,El=null,pa=null,kt=0,ga=null,wi=null,Ke=0,qo=0,Ro=null,bd=null,mn=0,Lo=null;function re(){return(I&2)!==0&&Q!==0?Q&-Q:z.T!==null?Zo():Ou()}function vd(){if(le===0)if((Q&536870912)===0||Z){var t=Bn;Bn<<=1,(Bn&3932160)===0&&(Bn=262144),le=t}else le=536870912;return t=ae.current,t!==null&&(t.flags|=32),le}function Wt(t,e,a){(t===ut&&(et===2||et===9)||t.cancelPendingCommit!==null)&&(zi(t,0),ma(t,Q,le,!1)),Ui(t,a),((I&2)===0||t!==ut)&&(t===ut&&((I&2)===0&&(Ya|=a),St===4&&ma(t,Q,le,!1)),De(t))}function yd(t,e,a){if((I&6)!==0)throw Error(d(327));var i=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Bi(t,e),n=i?Dp(t,e):Xo(t,e,!0),l=i;do{if(n===0){xi&&!i&&ma(t,e,0,!1);break}else{if(a=t.current.alternate,l&&!Mp(a)){n=Xo(t,e,!1),l=!1;continue}if(n===2){if(l=e,t.errorRecoveryDisabledLanes&l)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var o=t;n=gn;var c=o.current.memoizedState.isDehydrated;if(c&&(zi(o,r).flags|=256),r=Xo(o,r,!1),r!==2){if(No&&!c){o.errorRecoveryDisabledLanes|=l,Ya|=l,n=4;break t}l=Jt,Jt=n,l!==null&&(Jt===null?Jt=l:Jt.push.apply(Jt,l))}n=r}if(l=!1,n!==2)continue}}if(n===1){zi(t,0),ma(t,e,0,!0);break}t:{switch(i=t,l=n,l){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e)break;case 6:ma(i,e,le,!da);break t;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(n=Tl+300-Ft(),10<n)){if(ma(i,e,le,!da),Nn(i,0,!0)!==0)break t;Ke=e,i.timeoutHandle=Wd(xd.bind(null,i,a,Jt,El,_o,e,le,Ya,Si,da,l,"Throttled",-0,0),n);break t}xd(i,a,Jt,El,_o,e,le,Ya,Si,da,l,null,-0,0)}}break}while(!0);De(t)}function xd(t,e,a,i,n,l,r,o,c,h,x,T,b,y){if(t.timeoutHandle=-1,T=e.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oe},fd(e,l,T);var C=(l&62914560)===l?Tl-Ft():(l&4194048)===l?hd-Ft():0;if(C=fg(T,C),C!==null){Ke=l,t.cancelPendingCommit=C(Md.bind(null,t,e,l,a,i,n,r,o,c,x,T,null,b,y)),ma(t,l,r,!h);return}}Md(t,e,l,a,i,n,r,o,c)}function Mp(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],l=n.getSnapshot;n=n.value;try{if(!te(l(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ma(t,e,a,i){e&=~Go,e&=~Ya,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var n=e;0<n;){var l=31-Pt(n),r=1<<l;i[l]=-1,n&=~r}a!==0&&Du(t,a,e)}function jl(){return(I&6)===0?(hn(0),!1):!0}function Yo(){if(Y!==null){if(et===0)var t=Y.return;else t=Y,Ge=Oa=null,io(t),pi=null,Fi=0,t=Y;for(;t!==null;)Fc(t.alternate,t),t=t.return;Y=null}}function zi(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Kp(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ke=0,Yo(),ut=t,Y=a=Ue(t.current,null),Q=e,et=0,ne=null,da=!1,xi=Bi(t,e),No=!1,Si=le=Go=Ya=fa=St=0,Jt=gn=null,_o=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var n=31-Pt(i),l=1<<n;e|=t[n],i&=~l}return Ze=e,Kn(),a}function Sd(t,e){q=null,z.H=rn,e===fi||e===al?(e=Gs(),et=3):e===Vr?(e=Gs(),et=4):et=e===xo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ne=e,Y===null&&(St=1,hl(t,fe(e,t.current)))}function wd(){var t=ae.current;return t===null?!0:(Q&4194048)===Q?he===null:(Q&62914560)===Q||(Q&536870912)!==0?t===he:!1}function zd(){var t=z.H;return z.H=rn,t===null?rn:t}function Td(){var t=z.A;return z.A=Ep,t}function Ml(){St=4,da||(Q&4194048)!==Q&&ae.current!==null||(xi=!0),(fa&134217727)===0&&(Ya&134217727)===0||ut===null||ma(ut,Q,le,!1)}function Xo(t,e,a){var i=I;I|=2;var n=zd(),l=Td();(ut!==t||Q!==e)&&(El=null,zi(t,e)),e=!1;var r=St;t:do try{if(et!==0&&Y!==null){var o=Y,c=ne;switch(et){case 8:Yo(),r=6;break t;case 3:case 2:case 9:case 6:ae.current===null&&(e=!0);var h=et;if(et=0,ne=null,Ti(t,o,c,h),a&&xi){r=0;break t}break;default:h=et,et=0,ne=null,Ti(t,o,c,h)}}kp(),r=St;break}catch(x){Sd(t,x)}while(!0);return e&&t.shellSuspendCounter++,Ge=Oa=null,I=i,z.H=n,z.A=l,Y===null&&(ut=null,Q=0,Kn()),r}function kp(){for(;Y!==null;)Ad(Y)}function Dp(t,e){var a=I;I|=2;var i=zd(),n=Td();ut!==t||Q!==e?(El=null,Al=Ft()+500,zi(t,e)):xi=Bi(t,e);t:do try{if(et!==0&&Y!==null){e=Y;var l=ne;e:switch(et){case 1:et=0,ne=null,Ti(t,e,l,1);break;case 2:case 9:if(Us(l)){et=0,ne=null,Ed(e);break}e=function(){et!==2&&et!==9||ut!==t||(et=7),De(t)},l.then(e,e);break t;case 3:et=7;break t;case 4:et=5;break t;case 7:Us(l)?(et=0,ne=null,Ed(e)):(et=0,ne=null,Ti(t,e,l,7));break;case 5:var r=null;switch(Y.tag){case 26:r=Y.memoizedState;case 5:case 27:var o=Y;if(r?ff(r):o.stateNode.complete){et=0,ne=null;var c=o.sibling;if(c!==null)Y=c;else{var h=o.return;h!==null?(Y=h,kl(h)):Y=null}break e}}et=0,ne=null,Ti(t,e,l,5);break;case 6:et=0,ne=null,Ti(t,e,l,6);break;case 8:Yo(),St=6;break t;default:throw Error(d(462))}}Cp();break}catch(x){Sd(t,x)}while(!0);return Ge=Oa=null,z.H=i,z.A=n,I=a,Y!==null?0:(ut=null,Q=0,Kn(),St)}function Cp(){for(;Y!==null&&!t0();)Ad(Y)}function Ad(t){var e=Jc(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?kl(t):Y=e}function Ed(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Xc(a,e,e.pendingProps,e.type,void 0,Q);break;case 11:e=Xc(a,e,e.pendingProps,e.type.render,e.ref,Q);break;case 5:io(e);default:Fc(a,e),e=Y=Ts(e,Ze),e=Jc(a,e,Ze)}t.memoizedProps=t.pendingProps,e===null?kl(t):Y=e}function Ti(t,e,a,i){Ge=Oa=null,io(e),pi=null,Fi=0;var n=e.return;try{if(yp(t,n,e,a,Q)){St=1,hl(t,fe(a,t.current)),Y=null;return}}catch(l){if(n!==null)throw Y=n,l;St=1,hl(t,fe(a,t.current)),Y=null;return}e.flags&32768?(Z||i===1?t=!0:xi||(Q&536870912)!==0?t=!1:(da=t=!0,(i===2||i===9||i===3||i===6)&&(i=ae.current,i!==null&&i.tag===13&&(i.flags|=16384))),jd(e,t)):kl(e)}function kl(t){var e=t;do{if((e.flags&32768)!==0){jd(e,da);return}t=e.return;var a=wp(e.alternate,e,Ze);if(a!==null){Y=a;return}if(e=e.sibling,e!==null){Y=e;return}Y=e=t}while(e!==null);St===0&&(St=5)}function jd(t,e){do{var a=zp(t.alternate,t);if(a!==null){a.flags&=32767,Y=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Y=t;return}Y=t=a}while(t!==null);St=6,Y=null}function Md(t,e,a,i,n,l,r,o,c){t.cancelPendingCommit=null;do Dl();while(kt!==0);if((I&6)!==0)throw Error(d(327));if(e!==null){if(e===t.current)throw Error(d(177));if(l=e.lanes|e.childLanes,l|=Dr,c0(t,a,l,r,o,c),t===ut&&(Y=ut=null,Q=0),wi=e,ga=t,Ke=a,qo=l,Ro=n,bd=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Up(Hn,function(){return Od(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,n=D.p,D.p=2,r=I,I|=4;try{Tp(t,e,a)}finally{I=r,D.p=n,z.T=i}}kt=1,kd(),Dd(),Cd()}}function kd(){if(kt===1){kt=0;var t=ga,e=wi,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var i=D.p;D.p=2;var n=I;I|=4;try{sd(e,t);var l=eu,r=ms(t.containerInfo),o=l.focusedElem,c=l.selectionRange;if(r!==o&&o&&o.ownerDocument&&gs(o.ownerDocument.documentElement,o)){if(c!==null&&Ar(o)){var h=c.start,x=c.end;if(x===void 0&&(x=h),"selectionStart"in o)o.selectionStart=h,o.selectionEnd=Math.min(x,o.value.length);else{var T=o.ownerDocument||document,b=T&&T.defaultView||window;if(b.getSelection){var y=b.getSelection(),C=o.textContent.length,N=Math.min(c.start,C),lt=c.end===void 0?N:Math.min(c.end,C);!y.extend&&N>lt&&(r=lt,lt=N,N=r);var g=ps(o,N),f=ps(o,lt);if(g&&f&&(y.rangeCount!==1||y.anchorNode!==g.node||y.anchorOffset!==g.offset||y.focusNode!==f.node||y.focusOffset!==f.offset)){var m=T.createRange();m.setStart(g.node,g.offset),y.removeAllRanges(),N>lt?(y.addRange(m),y.extend(f.node,f.offset)):(m.setEnd(f.node,f.offset),y.addRange(m))}}}}for(T=[],y=o;y=y.parentNode;)y.nodeType===1&&T.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<T.length;o++){var S=T[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Yl=!!tu,eu=tu=null}finally{I=n,D.p=i,z.T=a}}t.current=e,kt=2}}function Dd(){if(kt===2){kt=0;var t=ga,e=wi,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var i=D.p;D.p=2;var n=I;I|=4;try{nd(t,e.alternate,e)}finally{I=n,D.p=i,z.T=a}}kt=3}}function Cd(){if(kt===4||kt===3){kt=0,e0();var t=ga,e=wi,a=Ke,i=bd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?kt=5:(kt=0,wi=ga=null,Hd(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(pa=null),rr(a),e=e.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Oi,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=z.T,n=D.p,D.p=2,z.T=null;try{for(var l=t.onRecoverableError,r=0;r<i.length;r++){var o=i[r];l(o.value,{componentStack:o.stack})}}finally{z.T=e,D.p=n}}(Ke&3)!==0&&Dl(),De(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===Lo?mn++:(mn=0,Lo=t):mn=0,hn(0)}}function Hd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ji(e)))}function Dl(){return kd(),Dd(),Cd(),Od()}function Od(){if(kt!==5)return!1;var t=ga,e=qo;qo=0;var a=rr(Ke),i=z.T,n=D.p;try{D.p=32>a?32:a,z.T=null,a=Ro,Ro=null;var l=ga,r=Ke;if(kt=0,wi=ga=null,Ke=0,(I&6)!==0)throw Error(d(331));var o=I;if(I|=4,gd(l.current),dd(l,l.current,r,a),I=o,hn(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Oi,l)}catch{}return!0}finally{D.p=n,z.T=i,Hd(t,e)}}function Bd(t,e,a){e=fe(a,e),e=yo(t.stateNode,e,2),t=oa(t,e,2),t!==null&&(Ui(t,2),De(t))}function at(t,e,a){if(t.tag===3)Bd(t,t,a);else for(;e!==null;){if(e.tag===3){Bd(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))){t=fe(a,t),a=Uc(2),i=oa(e,a,2),i!==null&&(Nc(a,i,e,t),Ui(i,2),De(i));break}}e=e.return}}function Qo(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new jp;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(a)||(No=!0,n.add(a),t=Hp.bind(null,t,e,a),e.then(t,t))}function Hp(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ut===t&&(Q&a)===a&&(St===4||St===3&&(Q&62914560)===Q&&300>Ft()-Tl?(I&2)===0&&zi(t,0):Go|=a,Si===Q&&(Si=0)),De(t)}function Ud(t,e){e===0&&(e=ku()),t=Da(t,e),t!==null&&(Ui(t,e),De(t))}function Op(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Ud(t,a)}function Bp(t,e){var a=0;switch(t.tag){case 31:case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(e),Ud(t,a)}function Up(t,e){return ar(t,e)}var Cl=null,Ai=null,Vo=!1,Hl=!1,$o=!1,ha=0;function De(t){t!==Ai&&t.next===null&&(Ai===null?Cl=Ai=t:Ai=Ai.next=t),Hl=!0,Vo||(Vo=!0,Gp())}function hn(t,e){if(!$o&&Hl){$o=!0;do for(var a=!1,i=Cl;i!==null;){if(t!==0){var n=i.pendingLanes;if(n===0)var l=0;else{var r=i.suspendedLanes,o=i.pingedLanes;l=(1<<31-Pt(42|t)+1)-1,l&=n&~(r&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,qd(i,l))}else l=Q,l=Nn(i,i===ut?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Bi(i,l)||(a=!0,qd(i,l));i=i.next}while(a);$o=!1}}function Np(){Nd()}function Nd(){Hl=Vo=!1;var t=0;ha!==0&&Zp()&&(t=ha);for(var e=Ft(),a=null,i=Cl;i!==null;){var n=i.next,l=Gd(i,e);l===0?(i.next=null,a===null?Cl=n:a.next=n,n===null&&(Ai=a)):(a=i,(t!==0||(l&3)!==0)&&(Hl=!0)),i=n}kt!==0&&kt!==5||hn(t),ha!==0&&(ha=0)}function Gd(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var r=31-Pt(l),o=1<<r,c=n[r];c===-1?((o&a)===0||(o&i)!==0)&&(n[r]=s0(o,e)):c<=e&&(t.expiredLanes|=o),l&=~o}if(e=ut,a=Q,a=Nn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(et===2||et===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&ir(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bi(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&ir(i),rr(a)){case 2:case 8:a=ju;break;case 32:a=Hn;break;case 268435456:a=Mu;break;default:a=Hn}return i=_d.bind(null,t),a=ar(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&ir(i),t.callbackPriority=2,t.callbackNode=null,2}function _d(t,e){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Dl()&&t.callbackNode!==a)return null;var i=Q;return i=Nn(t,t===ut?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(yd(t,i,e),Gd(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?_d.bind(null,t):null)}function qd(t,e){if(Dl())return null;yd(t,e,!0)}function Gp(){Jp(function(){(I&6)!==0?ar(Eu,Np):Nd()})}function Zo(){if(ha===0){var t=ci;t===0&&(t=On,On<<=1,(On&261888)===0&&(On=256)),ha=t}return ha}function Rd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rn(""+t)}function Ld(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function _p(t,e,a,i,n){if(e==="submit"&&a&&a.stateNode===n){var l=Rd((n[Qt]||null).action),r=i.submitter;r&&(e=(e=r[Qt]||null)?Rd(e.formAction):r.getAttribute("formAction"),e!==null&&(l=e,r=null));var o=new Qn("action","action",null,i,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ha!==0){var c=r?Ld(n,r):new FormData(n);po(a,{pending:!0,data:c,method:n.method,action:l},null,c)}}else typeof l=="function"&&(o.preventDefault(),c=r?Ld(n,r):new FormData(n),po(a,{pending:!0,data:c,method:n.method,action:l},l,c))},currentTarget:n}]})}}for(var Ko=0;Ko<kr.length;Ko++){var Jo=kr[Ko],qp=Jo.toLowerCase(),Rp=Jo[0].toUpperCase()+Jo.slice(1);ze(qp,"on"+Rp)}ze(vs,"onAnimationEnd"),ze(ys,"onAnimationIteration"),ze(xs,"onAnimationStart"),ze("dblclick","onDoubleClick"),ze("focusin","onFocus"),ze("focusout","onBlur"),ze(ap,"onTransitionRun"),ze(ip,"onTransitionStart"),ze(np,"onTransitionCancel"),ze(Ss,"onTransitionEnd"),Wa("onMouseEnter",["mouseout","mouseover"]),Wa("onMouseLeave",["mouseout","mouseover"]),Wa("onPointerEnter",["pointerout","pointerover"]),Wa("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));function Yd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],n=i.event;i=i.listeners;t:{var l=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],c=o.instance,h=o.currentTarget;if(o=o.listener,c!==l&&n.isPropagationStopped())break t;l=o,n.currentTarget=h;try{l(n)}catch(x){Zn(x)}n.currentTarget=null,l=c}else for(r=0;r<i.length;r++){if(o=i[r],c=o.instance,h=o.currentTarget,o=o.listener,c!==l&&n.isPropagationStopped())break t;l=o,n.currentTarget=h;try{l(n)}catch(x){Zn(x)}n.currentTarget=null,l=c}}}}function X(t,e){var a=e[or];a===void 0&&(a=e[or]=new Set);var i=t+"__bubble";a.has(i)||(Xd(e,t,2,!1),a.add(i))}function Wo(t,e,a){var i=0;e&&(i|=4),Xd(a,t,i,e)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[Ol]){t[Ol]=!0,Nu.forEach(function(a){a!=="selectionchange"&&(Lp.has(a)||Wo(a,!1,t),Wo(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ol]||(e[Ol]=!0,Wo("selectionchange",!1,e))}}function Xd(t,e,a,i){switch(yf(e)){case 2:var n=mg;break;case 8:n=hg;break;default:n=fu}a=n.bind(null,e,a,t),n=void 0,!hr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Io(t,e,a,i,n){var l=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=i.return;r!==null;){var c=r.tag;if((c===3||c===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=Za(o),r===null)return;if(c=r.tag,c===5||c===6||c===26||c===27){i=l=r;continue t}o=o.parentNode}}i=i.return}Ku(function(){var h=l,x=gr(a),T=[];t:{var b=ws.get(t);if(b!==void 0){var y=Qn,C=t;switch(t){case"keypress":if(Yn(a)===0)break t;case"keydown":case"keyup":y=B0;break;case"focusin":C="focus",y=xr;break;case"focusout":C="blur",y=xr;break;case"beforeblur":case"afterblur":y=xr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=G0;break;case vs:case ys:case xs:y=A0;break;case Ss:y=q0;break;case"scroll":case"scrollend":y=x0;break;case"wheel":y=L0;break;case"copy":case"cut":case"paste":y=j0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Pu;break;case"toggle":case"beforetoggle":y=X0}var N=(e&4)!==0,lt=!N&&(t==="scroll"||t==="scrollend"),g=N?b!==null?b+"Capture":null:b;N=[];for(var f=h,m;f!==null;){var S=f;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||g===null||(S=_i(f,g),S!=null&&N.push(vn(f,S,m))),lt)break;f=f.return}0<N.length&&(b=new y(b,C,null,a,x),T.push({event:b,listeners:N}))}}if((e&7)===0){t:{if(b=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",b&&a!==pr&&(C=a.relatedTarget||a.fromElement)&&(Za(C)||C[$a]))break t;if((y||b)&&(b=x.window===x?x:(b=x.ownerDocument)?b.defaultView||b.parentWindow:window,y?(C=a.relatedTarget||a.toElement,y=h,C=C?Za(C):null,C!==null&&(lt=M(C),N=C.tag,C!==lt||N!==5&&N!==27&&N!==6)&&(C=null)):(y=null,C=h),y!==C)){if(N=Fu,S="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(N=Pu,S="onPointerLeave",g="onPointerEnter",f="pointer"),lt=y==null?b:Gi(y),m=C==null?b:Gi(C),b=new N(S,f+"leave",y,a,x),b.target=lt,b.relatedTarget=m,S=null,Za(x)===h&&(N=new N(g,f+"enter",C,a,x),N.target=m,N.relatedTarget=lt,S=N),lt=S,y&&C)e:{for(N=Yp,g=y,f=C,m=0,S=g;S;S=N(S))m++;S=0;for(var U=f;U;U=N(U))S++;for(;0<m-S;)g=N(g),m--;for(;0<S-m;)f=N(f),S--;for(;m--;){if(g===f||f!==null&&g===f.alternate){N=g;break e}g=N(g),f=N(f)}N=null}else N=null;y!==null&&Qd(T,b,y,N,!1),C!==null&&lt!==null&&Qd(T,lt,C,N,!0)}}t:{if(b=h?Gi(h):window,y=b.nodeName&&b.nodeName.toLowerCase(),y==="select"||y==="input"&&b.type==="file")var J=os;else if(ls(b))if(us)J=P0;else{J=F0;var H=W0}else y=b.nodeName,!y||y.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?h&&fr(h.elementType)&&(J=os):J=I0;if(J&&(J=J(t,h))){rs(T,J,a,x);break t}H&&H(t,b,h),t==="focusout"&&h&&b.type==="number"&&h.memoizedProps.value!=null&&dr(b,"number",b.value)}switch(H=h?Gi(h):window,t){case"focusin":(ls(H)||H.contentEditable==="true")&&(ai=H,Er=h,$i=null);break;case"focusout":$i=Er=ai=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,hs(T,a,x);break;case"selectionchange":if(ep)break;case"keydown":case"keyup":hs(T,a,x)}var R;if(wr)t:{switch(t){case"compositionstart":var V="onCompositionStart";break t;case"compositionend":V="onCompositionEnd";break t;case"compositionupdate":V="onCompositionUpdate";break t}V=void 0}else ei?is(t,a)&&(V="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(V="onCompositionStart");V&&(ts&&a.locale!=="ko"&&(ei||V!=="onCompositionStart"?V==="onCompositionEnd"&&ei&&(R=Ju()):(ta=x,br="value"in ta?ta.value:ta.textContent,ei=!0)),H=Bl(h,V),0<H.length&&(V=new Iu(V,t,null,a,x),T.push({event:V,listeners:H}),R?V.data=R:(R=ns(a),R!==null&&(V.data=R)))),(R=V0?$0(t,a):Z0(t,a))&&(V=Bl(h,"onBeforeInput"),0<V.length&&(H=new Iu("onBeforeInput","beforeinput",null,a,x),T.push({event:H,listeners:V}),H.data=R)),_p(T,t,h,a,x)}Yd(T,e)})}function vn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Bl(t,e){for(var a=e+"Capture",i=[];t!==null;){var n=t,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=_i(t,a),n!=null&&i.unshift(vn(t,n,l)),n=_i(t,e),n!=null&&i.push(vn(t,n,l))),t.tag===3)return i;t=t.return}return[]}function Yp(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Qd(t,e,a,i,n){for(var l=e._reactName,r=[];a!==null&&a!==i;){var o=a,c=o.alternate,h=o.stateNode;if(o=o.tag,c!==null&&c===i)break;o!==5&&o!==26&&o!==27||h===null||(c=h,n?(h=_i(a,l),h!=null&&r.unshift(vn(a,h,c))):n||(h=_i(a,l),h!=null&&r.push(vn(a,h,c)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var Xp=/\r\n?/g,Qp=/\u0000|\uFFFD/g;function Vd(t){return(typeof t=="string"?t:""+t).replace(Xp,`
`).replace(Qp,"")}function $d(t,e){return e=Vd(e),Vd(t)===e}function nt(t,e,a,i,n,l){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Ia(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Ia(t,""+i);break;case"className":_n(t,"class",i);break;case"tabIndex":_n(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(t,a,i);break;case"style":$u(t,i,l);break;case"data":if(e!=="object"){_n(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Rn(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(e!=="input"&&nt(t,e,"name",n.name,n,null),nt(t,e,"formEncType",n.formEncType,n,null),nt(t,e,"formMethod",n.formMethod,n,null),nt(t,e,"formTarget",n.formTarget,n,null)):(nt(t,e,"encType",n.encType,n,null),nt(t,e,"method",n.method,n,null),nt(t,e,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Rn(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=Oe);break;case"onScroll":i!=null&&X("scroll",t);break;case"onScrollEnd":i!=null&&X("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=Rn(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":X("beforetoggle",t),X("toggle",t),Gn(t,"popover",i);break;case"xlinkActuate":He(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":He(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":He(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":He(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":He(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":He(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":He(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":He(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":He(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Gn(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=v0.get(a)||a,Gn(t,a,i))}}function Po(t,e,a,i,n,l){switch(a){case"style":$u(t,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=a}}break;case"children":typeof i=="string"?Ia(t,i):(typeof i=="number"||typeof i=="bigint")&&Ia(t,""+i);break;case"onScroll":i!=null&&X("scroll",t);break;case"onScrollEnd":i!=null&&X("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Oe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gu.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),l=t[Qt]||null,l=l!=null?l[a]:null,typeof l=="function"&&t.removeEventListener(e,l,n),typeof i=="function")){typeof l!="function"&&l!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,n);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):Gn(t,a,i)}}}function Rt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",t),X("load",t);var i=!1,n=!1,l;for(l in a)if(a.hasOwnProperty(l)){var r=a[l];if(r!=null)switch(l){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:nt(t,e,l,r,a,null)}}n&&nt(t,e,"srcSet",a.srcSet,a,null),i&&nt(t,e,"src",a.src,a,null);return;case"input":X("invalid",t);var o=l=r=n=null,c=null,h=null;for(i in a)if(a.hasOwnProperty(i)){var x=a[i];if(x!=null)switch(i){case"name":n=x;break;case"type":r=x;break;case"checked":c=x;break;case"defaultChecked":h=x;break;case"value":l=x;break;case"defaultValue":o=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,e));break;default:nt(t,e,i,x,a,null)}}Yu(t,l,o,c,h,r,n,!1);return;case"select":X("invalid",t),i=r=l=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":l=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:nt(t,e,n,o,a,null)}e=l,a=r,t.multiple=!!i,e!=null?Fa(t,!!i,e,!1):a!=null&&Fa(t,!!i,a,!0);return;case"textarea":X("invalid",t),l=n=i=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":n=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:nt(t,e,r,o,a,null)}Qu(t,i,n,l);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(i=a[c],i!=null))switch(c){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:nt(t,e,c,i,a,null)}return;case"dialog":X("beforetoggle",t),X("toggle",t),X("cancel",t),X("close",t);break;case"iframe":case"object":X("load",t);break;case"video":case"audio":for(i=0;i<bn.length;i++)X(bn[i],t);break;case"image":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"embed":case"source":case"link":X("error",t),X("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(i=a[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:nt(t,e,h,i,a,null)}return;default:if(fr(e)){for(x in a)a.hasOwnProperty(x)&&(i=a[x],i!==void 0&&Po(t,e,x,i,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(i=a[o],i!=null&&nt(t,e,o,i,a,null))}function Vp(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,r=null,o=null,c=null,h=null,x=null;for(y in a){var T=a[y];if(a.hasOwnProperty(y)&&T!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":c=T;default:i.hasOwnProperty(y)||nt(t,e,y,null,i,T)}}for(var b in i){var y=i[b];if(T=a[b],i.hasOwnProperty(b)&&(y!=null||T!=null))switch(b){case"type":l=y;break;case"name":n=y;break;case"checked":h=y;break;case"defaultChecked":x=y;break;case"value":r=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,e));break;default:y!==T&&nt(t,e,b,y,i,T)}}cr(t,r,o,c,h,x,l,n);return;case"select":y=r=o=b=null;for(l in a)if(c=a[l],a.hasOwnProperty(l)&&c!=null)switch(l){case"value":break;case"multiple":y=c;default:i.hasOwnProperty(l)||nt(t,e,l,null,i,c)}for(n in i)if(l=i[n],c=a[n],i.hasOwnProperty(n)&&(l!=null||c!=null))switch(n){case"value":b=l;break;case"defaultValue":o=l;break;case"multiple":r=l;default:l!==c&&nt(t,e,n,l,i,c)}e=o,a=r,i=y,b!=null?Fa(t,!!a,b,!1):!!i!=!!a&&(e!=null?Fa(t,!!a,e,!0):Fa(t,!!a,a?[]:"",!1));return;case"textarea":y=b=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:nt(t,e,o,null,i,n)}for(r in i)if(n=i[r],l=a[r],i.hasOwnProperty(r)&&(n!=null||l!=null))switch(r){case"value":b=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==l&&nt(t,e,r,n,i,l)}Xu(t,b,y);return;case"option":for(var C in a)if(b=a[C],a.hasOwnProperty(C)&&b!=null&&!i.hasOwnProperty(C))switch(C){case"selected":t.selected=!1;break;default:nt(t,e,C,null,i,b)}for(c in i)if(b=i[c],y=a[c],i.hasOwnProperty(c)&&b!==y&&(b!=null||y!=null))switch(c){case"selected":t.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:nt(t,e,c,b,i,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in a)b=a[N],a.hasOwnProperty(N)&&b!=null&&!i.hasOwnProperty(N)&&nt(t,e,N,null,i,b);for(h in i)if(b=i[h],y=a[h],i.hasOwnProperty(h)&&b!==y&&(b!=null||y!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,e));break;default:nt(t,e,h,b,i,y)}return;default:if(fr(e)){for(var lt in a)b=a[lt],a.hasOwnProperty(lt)&&b!==void 0&&!i.hasOwnProperty(lt)&&Po(t,e,lt,void 0,i,b);for(x in i)b=i[x],y=a[x],!i.hasOwnProperty(x)||b===y||b===void 0&&y===void 0||Po(t,e,x,b,i,y);return}}for(var g in a)b=a[g],a.hasOwnProperty(g)&&b!=null&&!i.hasOwnProperty(g)&&nt(t,e,g,null,i,b);for(T in i)b=i[T],y=a[T],!i.hasOwnProperty(T)||b===y||b==null&&y==null||nt(t,e,T,b,i,y)}function Zd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $p(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],l=n.transferSize,r=n.initiatorType,o=n.duration;if(l&&o&&Zd(r)){for(r=0,o=n.responseEnd,i+=1;i<a.length;i++){var c=a[i],h=c.startTime;if(h>o)break;var x=c.transferSize,T=c.initiatorType;x&&Zd(T)&&(c=c.responseEnd,r+=x*(c<o?1:(o-h)/(c-h)))}if(--i,e+=8*(l+r)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var tu=null,eu=null;function Ul(t){return t.nodeType===9?t:t.ownerDocument}function Kd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function au(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var iu=null;function Zp(){var t=window.event;return t&&t.type==="popstate"?t===iu?!1:(iu=t,!0):(iu=null,!1)}var Wd=typeof setTimeout=="function"?setTimeout:void 0,Kp=typeof clearTimeout=="function"?clearTimeout:void 0,Fd=typeof Promise=="function"?Promise:void 0,Jp=typeof queueMicrotask=="function"?queueMicrotask:typeof Fd<"u"?function(t){return Fd.resolve(null).then(t).catch(Wp)}:Wd;function Wp(t){setTimeout(function(){throw t})}function ba(t){return t==="head"}function Id(t,e){var a=e,i=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){t.removeChild(n),ki(e);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")yn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yn(a);for(var l=a.firstChild;l;){var r=l.nextSibling,o=l.nodeName;l[Ni]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=r}}else a==="body"&&yn(t.ownerDocument.body);a=n}while(a);ki(e)}function Pd(t,e){var a=t;t=0;do{var i=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=i}while(a)}function nu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nu(a),ur(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Fp(t,e,a,i){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ni])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=be(t.nextSibling),t===null)break}return null}function Ip(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=be(t.nextSibling),t===null))return null;return t}function tf(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=be(t.nextSibling),t===null))return null;return t}function lu(t){return t.data==="$?"||t.data==="$~"}function ru(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Pp(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function be(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var ou=null;function ef(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return be(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function af(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function nf(t,e,a){switch(e=Ul(a),t){case"html":if(t=e.documentElement,!t)throw Error(d(452));return t;case"head":if(t=e.head,!t)throw Error(d(453));return t;case"body":if(t=e.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function yn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ur(t)}var ve=new Map,lf=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Je=D.d;D.d={f:tg,r:eg,D:ag,C:ig,L:ng,m:lg,X:og,S:rg,M:ug};function tg(){var t=Je.f(),e=jl();return t||e}function eg(t){var e=Ka(t);e!==null&&e.tag===5&&e.type==="form"?Sc(e):Je.r(t)}var Ei=typeof document>"u"?null:document;function rf(t,e,a){var i=Ei;if(i&&typeof e=="string"&&e){var n=ce(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),lf.has(n)||(lf.add(n),t={rel:t,crossOrigin:a,href:e},i.querySelector(n)===null&&(e=i.createElement("link"),Rt(e,"link",t),Ht(e),i.head.appendChild(e)))}}function ag(t){Je.D(t),rf("dns-prefetch",t,null)}function ig(t,e){Je.C(t,e),rf("preconnect",t,e)}function ng(t,e,a){Je.L(t,e,a);var i=Ei;if(i&&t&&e){var n='link[rel="preload"][as="'+ce(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ce(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ce(a.imageSizes)+'"]')):n+='[href="'+ce(t)+'"]';var l=n;switch(e){case"style":l=ji(t);break;case"script":l=Mi(t)}ve.has(l)||(t=k({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ve.set(l,t),i.querySelector(n)!==null||e==="style"&&i.querySelector(xn(l))||e==="script"&&i.querySelector(Sn(l))||(e=i.createElement("link"),Rt(e,"link",t),Ht(e),i.head.appendChild(e)))}}function lg(t,e){Je.m(t,e);var a=Ei;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ce(i)+'"][href="'+ce(t)+'"]',l=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Mi(t)}if(!ve.has(l)&&(t=k({rel:"modulepreload",href:t},e),ve.set(l,t),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sn(l)))return}i=a.createElement("link"),Rt(i,"link",t),Ht(i),a.head.appendChild(i)}}}function rg(t,e,a){Je.S(t,e,a);var i=Ei;if(i&&t){var n=Ja(i).hoistableStyles,l=ji(t);e=e||"default";var r=n.get(l);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(xn(l)))o.loading=5;else{t=k({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ve.get(l))&&uu(t,a);var c=r=i.createElement("link");Ht(c),Rt(c,"link",t),c._p=new Promise(function(h,x){c.onload=h,c.onerror=x}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Gl(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(l,r)}}}function og(t,e){Je.X(t,e);var a=Ei;if(a&&t){var i=Ja(a).hoistableScripts,n=Mi(t),l=i.get(n);l||(l=a.querySelector(Sn(n)),l||(t=k({src:t,async:!0},e),(e=ve.get(n))&&su(t,e),l=a.createElement("script"),Ht(l),Rt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function ug(t,e){Je.M(t,e);var a=Ei;if(a&&t){var i=Ja(a).hoistableScripts,n=Mi(t),l=i.get(n);l||(l=a.querySelector(Sn(n)),l||(t=k({src:t,async:!0,type:"module"},e),(e=ve.get(n))&&su(t,e),l=a.createElement("script"),Ht(l),Rt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function of(t,e,a,i){var n=(n=Fe.current)?Nl(n):null;if(!n)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=ji(a.href),a=Ja(n).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ji(a.href);var l=Ja(n).hoistableStyles,r=l.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,r),(l=n.querySelector(xn(t)))&&!l._p&&(r.instance=l,r.state.loading=5),ve.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ve.set(t,a),l||sg(n,t,a,r.state))),e&&i===null)throw Error(d(528,""));return r}if(e&&i!==null)throw Error(d(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Mi(a),a=Ja(n).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function ji(t){return'href="'+ce(t)+'"'}function xn(t){return'link[rel="stylesheet"]['+t+"]"}function uf(t){return k({},t,{"data-precedence":t.precedence,precedence:null})}function sg(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Rt(e,"link",a),Ht(e),t.head.appendChild(e))}function Mi(t){return'[src="'+ce(t)+'"]'}function Sn(t){return"script[async]"+t}function sf(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+ce(a.href)+'"]');if(i)return e.instance=i,Ht(i),i;var n=k({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Ht(i),Rt(i,"style",n),Gl(i,a.precedence,t),e.instance=i;case"stylesheet":n=ji(a.href);var l=t.querySelector(xn(n));if(l)return e.state.loading|=4,e.instance=l,Ht(l),l;i=uf(a),(n=ve.get(n))&&uu(i,n),l=(t.ownerDocument||t).createElement("link"),Ht(l);var r=l;return r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Rt(l,"link",i),e.state.loading|=4,Gl(l,a.precedence,t),e.instance=l;case"script":return l=Mi(a.src),(n=t.querySelector(Sn(l)))?(e.instance=n,Ht(n),n):(i=a,(n=ve.get(l))&&(i=k({},a),su(i,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ht(n),Rt(n,"link",i),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,Gl(i,a.precedence,t));return e.instance}function Gl(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,l=n,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)l=o;else if(l!==n)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function uu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function su(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var _l=null;function cf(t,e,a){if(_l===null){var i=new Map,n=_l=new Map;n.set(a,i)}else n=_l,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var l=a[n];if(!(l[Ni]||l[Nt]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(l):i.set(r,[l])}}return i}function df(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function cg(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ff(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dg(t,e,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=ji(i.href),l=e.querySelector(xn(n));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=ql.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=l,Ht(l);return}l=e.ownerDocument||e,i=uf(i),(n=ve.get(n))&&uu(i,n),l=l.createElement("link"),Ht(l);var r=l;r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Rt(l,"link",i),a.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ql.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var cu=0;function fg(t,e){return t.stylesheets&&t.count===0&&Ll(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var i=setTimeout(function(){if(t.stylesheets&&Ll(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+e);0<t.imgBytes&&cu===0&&(cu=62500*$p());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ll(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>cu?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ll(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Rl=null;function Ll(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Rl=new Map,e.forEach(pg,t),Rl=null,ql.call(t))}function pg(t,e){if(!(e.state.loading&4)){var a=Rl.get(t);if(a)var i=a.get(null);else{a=new Map,Rl.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var r=n[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),i=r)}i&&a.set(null,i)}n=e.instance,r=n.getAttribute("data-precedence"),l=a.get(r)||i,l===i&&a.set(null,n),a.set(r,n),this.count++,i=ql.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),l?l.parentNode.insertBefore(n,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var wn={$$typeof:ft,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function gg(t,e,a,i,n,l,r,o,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.hiddenUpdates=nr(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function pf(t,e,a,i,n,l,r,o,c,h,x,T){return t=new gg(t,e,a,r,c,h,x,T,o),e=1,l===!0&&(e|=24),l=ee(3,null,null,e),t.current=l,l.stateNode=t,e=Yr(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:i,isDehydrated:a,cache:e},$r(l),t}function gf(t){return t?(t=li,t):li}function mf(t,e,a,i,n,l){n=gf(n),i.context===null?i.context=n:i.pendingContext=n,i=ra(e),i.payload={element:a},l=l===void 0?null:l,l!==null&&(i.callback=l),a=oa(t,i,e),a!==null&&(Wt(a,t,e),Pi(a,t,e))}function hf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function du(t,e){hf(t,e),(t=t.alternate)&&hf(t,e)}function bf(t){if(t.tag===13||t.tag===31){var e=Da(t,67108864);e!==null&&Wt(e,t,67108864),du(t,67108864)}}function vf(t){if(t.tag===13||t.tag===31){var e=re();e=lr(e);var a=Da(t,e);a!==null&&Wt(a,t,e),du(t,e)}}var Yl=!0;function mg(t,e,a,i){var n=z.T;z.T=null;var l=D.p;try{D.p=2,fu(t,e,a,i)}finally{D.p=l,z.T=n}}function hg(t,e,a,i){var n=z.T;z.T=null;var l=D.p;try{D.p=8,fu(t,e,a,i)}finally{D.p=l,z.T=n}}function fu(t,e,a,i){if(Yl){var n=pu(i);if(n===null)Io(t,e,i,Xl,a),xf(t,i);else if(vg(n,t,e,a,i))i.stopPropagation();else if(xf(t,i),e&4&&-1<bg.indexOf(t)){for(;n!==null;){var l=Ka(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Aa(l.pendingLanes);if(r!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var c=1<<31-Pt(r);o.entanglements[1]|=c,r&=~c}De(l),(I&6)===0&&(Al=Ft()+500,hn(0))}}break;case 31:case 13:o=Da(l,2),o!==null&&Wt(o,l,2),jl(),du(l,2)}if(l=pu(i),l===null&&Io(t,e,i,Xl,a),l===n)break;n=l}n!==null&&i.stopPropagation()}else Io(t,e,i,null,a)}}function pu(t){return t=gr(t),gu(t)}var Xl=null;function gu(t){if(Xl=null,t=Za(t),t!==null){var e=M(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=B(e),t!==null)return t;t=null}else if(a===31){if(t=F(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Xl=t,null}function yf(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(a0()){case Eu:return 2;case ju:return 8;case Hn:case i0:return 32;case Mu:return 268435456;default:return 32}default:return 32}}var mu=!1,va=null,ya=null,xa=null,zn=new Map,Tn=new Map,Sa=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xf(t,e){switch(t){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":zn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(e.pointerId)}}function An(t,e,a,i,n,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:l,targetContainers:[n]},e!==null&&(e=Ka(e),e!==null&&bf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function vg(t,e,a,i,n){switch(e){case"focusin":return va=An(va,t,e,a,i,n),!0;case"dragenter":return ya=An(ya,t,e,a,i,n),!0;case"mouseover":return xa=An(xa,t,e,a,i,n),!0;case"pointerover":var l=n.pointerId;return zn.set(l,An(zn.get(l)||null,t,e,a,i,n)),!0;case"gotpointercapture":return l=n.pointerId,Tn.set(l,An(Tn.get(l)||null,t,e,a,i,n)),!0}return!1}function Sf(t){var e=Za(t.target);if(e!==null){var a=M(e);if(a!==null){if(e=a.tag,e===13){if(e=B(a),e!==null){t.blockedOn=e,Bu(t.priority,function(){vf(a)});return}}else if(e===31){if(e=F(a),e!==null){t.blockedOn=e,Bu(t.priority,function(){vf(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=pu(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);pr=i,a.target.dispatchEvent(i),pr=null}else return e=Ka(a),e!==null&&bf(e),t.blockedOn=a,!1;e.shift()}return!0}function wf(t,e,a){Ql(t)&&a.delete(e)}function yg(){mu=!1,va!==null&&Ql(va)&&(va=null),ya!==null&&Ql(ya)&&(ya=null),xa!==null&&Ql(xa)&&(xa=null),zn.forEach(wf),Tn.forEach(wf)}function Vl(t,e){t.blockedOn===e&&(t.blockedOn=null,mu||(mu=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,yg)))}var $l=null;function zf(t){$l!==t&&($l=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){$l===t&&($l=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],n=t[e+2];if(typeof i!="function"){if(gu(i||a)===null)continue;break}var l=Ka(a);l!==null&&(t.splice(e,3),e-=3,po(l,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function ki(t){function e(c){return Vl(c,t)}va!==null&&Vl(va,t),ya!==null&&Vl(ya,t),xa!==null&&Vl(xa,t),zn.forEach(e),Tn.forEach(e);for(var a=0;a<Sa.length;a++){var i=Sa[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Sa.length&&(a=Sa[0],a.blockedOn===null);)Sf(a),a.blockedOn===null&&Sa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],l=a[i+1],r=n[Qt]||null;if(typeof l=="function")r||zf(a);else if(r){var o=null;if(l&&l.hasAttribute("formAction")){if(n=l,r=l[Qt]||null)o=r.formAction;else if(gu(n)!==null)continue}else o=r.action;typeof o=="function"?a[i+1]=o:(a.splice(i,3),i-=3),zf(a)}}}function Tf(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function hu(t){this._internalRoot=t}Zl.prototype.render=hu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(d(409));var a=e.current,i=re();mf(a,i,t,e,null,null)},Zl.prototype.unmount=hu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mf(t.current,2,null,t,null,null),jl(),e[$a]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ou();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Sa.length&&e!==0&&e<Sa[a].priority;a++);Sa.splice(a,0,t),a===0&&Sf(t)}};var Af=A.version;if(Af!=="19.2.1")throw Error(d(527,Af,"19.2.1"));D.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=K(e),t=t!==null?$(t):null,t=t===null?null:t.stateNode,t};var xg={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Oi=Kl.inject(xg),It=Kl}catch{}}return En.createRoot=function(t,e){if(!j(t))throw Error(d(299));var a=!1,i="",n=Cc,l=Hc,r=Oc;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pf(t,1,!1,null,null,a,i,null,n,l,r,Tf),t[$a]=e.current,Fo(t),new hu(e)},En.hydrateRoot=function(t,e,a){if(!j(t))throw Error(d(299));var i=!1,n="",l=Cc,r=Hc,o=Oc,c=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),e=pf(t,1,!0,e,a??null,i,n,c,l,r,o,Tf),e.context=gf(null),a=e.current,i=re(),i=lr(i),n=ra(i),n.callback=null,oa(a,n,i),a=i,e.current.lanes=a,Ui(e,a),De(e),t[$a]=e.current,Fo(t),new Zl(e)},En.version="19.2.1",En}var Hf;function Dg(){if(Hf)return bu.exports;Hf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(A){console.error(A)}}return s(),bu.exports=kg(),bu.exports}var Cg=Dg();const Bt={blur:{primary:"40px",secondary:"24px",subtle:"12px",heavy:"60px"},saturation:{normal:"180%"},radius:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2xl":"24px",full:"9999px"},timing:{micro:"100ms",small:"200ms",medium:"300ms",large:"500ms"},easing:{standard:"cubic-bezier(0.4, 0, 0.2, 1)",emphasized:"cubic-bezier(0.0, 0, 0.2, 1)"}},ct={bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgTertiary:"#111111",bgCard:"rgba(255, 255, 255, 0.02)",textPrimary:"rgba(255, 255, 255, 0.87)",textSecondary:"rgba(255, 255, 255, 0.60)",textTertiary:"rgba(255, 255, 255, 0.38)",accent:"#2A9D8F",accentHover:"#3BB4A5",accentSubtle:"rgba(42, 157, 143, 0.15)",accentRgb:"42, 157, 143",blue:"#4361A5",blueRgb:"67, 97, 165",lightBlue:"#7BA7D9",cyan:"#3BB4B1",border:"rgba(255, 255, 255, 0.08)",borderHover:"rgba(255, 255, 255, 0.15)",gradient:"linear-gradient(135deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientHorizontal:"linear-gradient(90deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientSubtle:"linear-gradient(135deg, rgba(42, 157, 143, 0.15) 0%, rgba(67, 97, 165, 0.15) 100%)",glassBg:"rgba(255, 255, 255, 0.06)",glassBgHover:"rgba(255, 255, 255, 0.10)",glassBorder:"rgba(255, 255, 255, 0.10)",glassHighlight:"rgba(255, 255, 255, 0.15)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.32)",specularHighlight:"rgba(255, 255, 255, 0.25)"},dt={bgPrimary:"#ffffff",bgSecondary:"#f5f5f7",bgTertiary:"#e8e8ed",bgCard:"rgba(0, 0, 0, 0.02)",textPrimary:"rgba(0, 0, 0, 0.87)",textSecondary:"rgba(0, 0, 0, 0.60)",textTertiary:"rgba(0, 0, 0, 0.38)",accent:"#238076",accentHover:"#1a6b63",accentSubtle:"rgba(42, 157, 143, 0.12)",accentRgb:"35, 128, 118",blue:"#3a5491",blueRgb:"58, 84, 145",lightBlue:"#5a8cc7",cyan:"#2f9d9a",border:"rgba(0, 0, 0, 0.06)",borderHover:"rgba(0, 0, 0, 0.12)",gradient:"linear-gradient(135deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientHorizontal:"linear-gradient(90deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientSubtle:"linear-gradient(135deg, rgba(42, 157, 143, 0.1) 0%, rgba(67, 97, 165, 0.1) 100%)",glassBg:"rgba(255, 255, 255, 0.72)",glassBgHover:"rgba(255, 255, 255, 0.85)",glassBorder:"rgba(0, 0, 0, 0.08)",glassHighlight:"rgba(255, 255, 255, 0.9)",glassShadow:"0 8px 32px rgba(0, 0, 0, 0.08)",specularHighlight:"rgba(255, 255, 255, 0.8)"},Hg={fontWeight:{regular:400,medium:500,semibold:600,bold:700}},w={typography:Hg,breakpoints:{mobile:"640px",tablet:"1024px",desktop:"1280px"},zIndex:{sticky:100},maxWidth:{wide:"1200px",full:"1440px"}},Og=Eg`
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
`,Yf=O.createContext(void 0),wu="portfolio-theme-mode",Bg=()=>{if(typeof window<"u"){const s=localStorage.getItem(wu),A=window.matchMedia("(prefers-color-scheme: dark)").matches;return s==="dark"||s==="light"?s:A?"dark":"light"}return"dark"},Ug=({children:s})=>{const[A,E]=O.useState(Bg),[d,j]=O.useState(()=>{if(typeof window<"u"){const B=localStorage.getItem(wu);return B==="dark"||B==="light"}return!1});O.useEffect(()=>{document.documentElement.setAttribute("data-theme",A),requestAnimationFrame(()=>{document.body.classList.remove("no-transition")})},[A]),O.useEffect(()=>{document.body.classList.add("no-transition");const B=requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.body.classList.remove("no-transition")})});return()=>cancelAnimationFrame(B)},[]),O.useEffect(()=>{d&&localStorage.setItem(wu,A)},[A,d]);const M=()=>{j(!0),E(B=>B==="dark"?"light":"dark")};return u.jsx(Yf.Provider,{value:{mode:A,toggleTheme:M,isDark:A==="dark"},children:s})},Xf=rt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,Ng=rt`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.8; }
`,Gg=p.div`
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
`,_g=p(v.nav)`
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
`,qg=p(v.a)`
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
    animation: ${Xf} 1.5s ease infinite;
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
`,Rg=p.img`
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
`,Lg=p.div`
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
`,Yg=p(v.a)`
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
  
  ${({$isActive:s})=>s&&st`
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
`,Qg=p(v.div)`
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
`,Vg=p.div`
  position: relative;
`,$g=p(v.button)`
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
    animation: ${Xf} 1.5s ease infinite;
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
`,Zg=p(v.div)`
  position: absolute;
  inset: -4px;
  border-radius: 20px;
  border: 2px solid var(--accent);
  pointer-events: none;
  animation: ${Ng} 2s ease-in-out infinite;
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
`,Kg=p.div`
  position: absolute;
  top: -6px;
  right: 18px;
  width: 12px;
  height: 12px;
  background: ${({$isDark:s})=>s?"rgba(20, 25, 35, 0.98)":"rgba(255, 255, 255, 0.98)"};
  border-left: 1px solid var(--accent);
  border-top: 1px solid var(--accent);
  transform: rotate(45deg);
  
  @media (max-width: ${w.breakpoints.tablet}) {
    top: auto;
    bottom: -6px;
    transform: rotate(225deg);
  }
`,Jg=p(v.div)`
  position: absolute;
  top: calc(100% + 12px);
  right: -8px;
  padding: 12px 16px;
  border-radius: 12px;
  background: ${({$isDark:s})=>s?"rgba(20, 25, 35, 0.98)":"rgba(255, 255, 255, 0.98)"};
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  border: 1px solid var(--accent);
  box-shadow: ${({$isDark:s})=>s?"0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(42, 157, 143, 0.3), 0 0 30px rgba(42, 157, 143, 0.2)":"0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(42, 157, 143, 0.3), 0 0 30px rgba(42, 157, 143, 0.1)"};
  white-space: nowrap;
  z-index: 100;
  
  @media (max-width: ${w.breakpoints.tablet}) {
    top: auto;
    bottom: calc(100% + 12px);
    right: -8px;
  }
`,Wg=p.span`
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
`,Fg=p.span`
  display: block;
  font-size: 11px;
  color: var(--text-tertiary);
  margin-top: 4px;
`,Qf=[{label:"About",href:"#about"},{label:"Skills",href:"#technologyproficiency"},{label:"Experience",href:"#professionalexperience"},{label:"Projects",href:"#mostproudof"},{label:"Contact",href:"#contact"}];function Ig(){const s=Qf.map(E=>E.href.replace("#",""));if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-100)return s[s.length-1];for(const E of[...s].reverse()){const d=document.getElementById(E);if(d&&d.getBoundingClientRect().top<=150)return E}return""}function Pg(){const s=O.useCallback(d=>(window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)),[]),A=O.useCallback(()=>Ig(),[]),E=O.useCallback(()=>"",[]);return O.useSyncExternalStore(s,A,E)}function Vf(s,A){s.preventDefault();const E=document.getElementById(A);E&&E.scrollIntoView({behavior:"smooth",block:"start"})}const tm=()=>u.jsx(qg,{href:"#home",onClick:s=>Vf(s,"home"),whileHover:{scale:1.05},whileTap:{scale:.95},children:u.jsxs("picture",{children:[u.jsx("source",{srcSet:"/images/logo-100.webp",type:"image/webp"}),u.jsx(Rg,{src:"/images/logo-optimized.png",alt:"PN",width:28,height:28,loading:"eager",decoding:"async"})]})}),em=({activeSection:s,hoveredItem:A,setHoveredItem:E})=>u.jsx(Lg,{children:u.jsx(wg,{children:Qf.map(d=>{const j=s===d.href.replace("#",""),M=A===d.label;return u.jsxs(Yg,{href:d.href,$isActive:j,$isHovered:M,"aria-current":j?"page":void 0,onClick:B=>Vf(B,d.href.replace("#","")),onMouseEnter:()=>E(d.label),onMouseLeave:()=>E(null),whileTap:{scale:.98},children:[u.jsx(Di,{children:M&&!j&&u.jsx(Xg,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15}})}),j&&u.jsx(Qg,{layoutId:"nav-active-pill",transition:{type:"spring",stiffness:500,damping:35,mass:1}}),u.jsx("span",{style:{position:"relative",zIndex:1},children:d.label})]},d.label)})})});function am(){const s=O.useContext(Yf);if(!s)throw new Error("useTheme must be used within a ThemeProvider");return s}const xu="portfolio-theme-hint-seen";function im(){const[s,A]=O.useState(!1);O.useEffect(()=>{if(!localStorage.getItem(xu)){const j=setTimeout(()=>{A(!0)},1500);return()=>clearTimeout(j)}},[]),O.useEffect(()=>{if(s){const d=setTimeout(()=>{A(!1),localStorage.setItem(xu,"true")},8e3);return()=>clearTimeout(d)}},[s]);const E=O.useCallback(()=>{s&&(A(!1),localStorage.setItem(xu,"true"))},[s]);return{showThemeHint:s,dismissHint:E}}const nm=()=>u.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.3},children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"sunGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),u.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),u.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),u.jsx("circle",{cx:"12",cy:"12",r:"5",stroke:"url(#sunGradient)"}),u.jsx("path",{stroke:"url(#sunGradient)",d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]},"sun"),lm=()=>u.jsxs(v.svg,{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.3},children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"moonGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#2A9D8F"}),u.jsx("stop",{offset:"50%",stopColor:"#3BB4B1"}),u.jsx("stop",{offset:"100%",stopColor:"#4361A5"})]})}),u.jsx("path",{stroke:"url(#moonGradient)",d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})]},"moon"),rm=()=>{const{isDark:s,toggleTheme:A}=am(),{showThemeHint:E,dismissHint:d}=im(),j=()=>{A(),d()};return u.jsxs(Vg,{children:[u.jsx(Di,{children:E&&u.jsxs(u.Fragment,{children:[u.jsx(Zg,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3}}),u.jsxs(Jg,{$isDark:s,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3,delay:.1},children:[u.jsx(Kg,{$isDark:s}),u.jsxs(Wg,{children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"}),u.jsx("circle",{cx:"12",cy:"12",r:"4"})]}),"Toggle Theme"]}),u.jsx(Fg,{children:"Click to switch between light & dark"})]})]})}),u.jsx($g,{onClick:j,whileHover:{scale:1.05},whileTap:{scale:.95},title:s?"Switch to light mode":"Switch to dark mode","aria-label":s?"Switch to light mode":"Switch to dark mode",role:"button",children:u.jsx(Di,{mode:"wait",children:s?u.jsx(nm,{}):u.jsx(lm,{})})})]})},om=()=>{const s=Pg(),[A,E]=O.useState(null);return u.jsx(Gg,{children:u.jsxs(_g,{"aria-label":"Main navigation",initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:[.25,.1,.25,1],delay:.2},children:[u.jsx(tm,{}),u.jsx(em,{activeSection:s,hoveredItem:A,setHoveredItem:E}),u.jsx(rm,{})]})})},um="2.0.9",zu=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,sm=rt`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`,cm=p(v.footer)`
  padding: 48px 24px;
  padding-bottom: 100px;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 56px 80px;
    padding-bottom: 56px;
  }
`,dm=p.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 1px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${zu} 3s ease infinite;
  opacity: 0.6;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 140px;
  }
`,fm=p(v.div)`
  max-width: ${w.maxWidth.wide};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,pm=p(v.p)`
  font-size: 13px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
  letter-spacing: 0.01em;
  line-height: 1.6;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 14px;
  }
`,gm=p(v.span)`
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
`,mm=p.span`
  font-size: 13px;
  display: inline-block;
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${sm} 1.8s ease-in-out infinite, ${zu} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 14px;
  }
`,hm=p.span`
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${zu} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${w.typography.fontWeight.semibold};
`,bm=p(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    margin-top: 24px;
  }
`,Of=p.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,vm=p(v.span)`
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
`,ym=()=>u.jsxs(cm,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:[u.jsx(dm,{}),u.jsxs(fm,{children:[u.jsxs(pm,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:["Designed & Built With",u.jsx(gm,{whileHover:{scale:1.2},transition:{type:"spring",stiffness:400,damping:15},children:u.jsx(mm,{children:"♥"})}),"By ",u.jsx(hm,{children:"Pranshu"})," • © 2025"]}),u.jsxs(bm,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2,duration:.5},children:[u.jsx(Of,{}),u.jsxs(vm,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:400,damping:20},children:["v",um]}),u.jsx(Of,{})]})]})]}),xm=rt`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`,Sm=rt`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`,wm=p(v.div)`
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
`,zm=p(v.div)`
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
`,Am=p(v.div)`
  position: absolute;
  width: ${({$size:s})=>s}px;
  height: ${({$size:s})=>s}px;
  border-radius: 50%;
  background: ${({$color:s})=>s};
  filter: blur(1px);
`,Em=p(v.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,jm=p(v.div)`
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
`,Mm=p(v.div)`
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
`,km=p(v.div)`
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
`,Su=p(v.div)`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px solid rgba(42, 157, 143, 0.3);
  animation: ${Sm} 2s ease-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`,Dm=p(v.img)`
  width: 90px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 25px rgba(42, 157, 143, 0.5));
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 110px;
  }
`,Cm=p(v.div)`
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
    animation: ${xm} 2s ease-in-out infinite;
  }
`,Hm={initial:{opacity:1},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2,ease:"easeOut"}}},Om={initial:{opacity:0,scale:1.5},animate:{opacity:1,scale:1,transition:{duration:1.5}},exit:{opacity:0,scale:.95,transition:{duration:.2}}},Bm={initial:{},animate:{},exit:{scale:.9,opacity:0,transition:{duration:.2,ease:"easeOut"}}},Um={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},Nm={initial:{opacity:0,scale:0,rotate:-180},animate:{opacity:1,scale:1,rotate:0,transition:{type:"spring",stiffness:100,damping:15,delay:.2}}},Gm={initial:{opacity:0,scale:.3,rotateY:-90,filter:"blur(10px)"},animate:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:12,delay:.4}}};function _m(s){return()=>(s=(s*9301+49297)%233280,s/233280)}function qm(s,A){const E=_m(A),d=["rgba(42, 157, 143, 0.4)","rgba(59, 180, 177, 0.3)","rgba(67, 97, 165, 0.3)"];return Array.from({length:s},(j,M)=>({id:M,x:E()*100,y:E()*100,size:E()*4+2,color:d[M%3],duration:E()*3+2,delay:E()*2,repeatDelay:E()*2}))}const Rm=({onComplete:s})=>{const[A,E]=O.useState("animate"),d=O.useMemo(()=>qm(20,42),[]);return O.useEffect(()=>{const j=setTimeout(()=>{E("exit")},2200);return()=>clearTimeout(j)},[]),O.useEffect(()=>{A==="exit"&&s()},[A,s]),u.jsxs(wm,{variants:Hm,initial:"initial",animate:A,children:[u.jsx(zm,{variants:Om,initial:"initial",animate:A}),u.jsx(Tm,{initial:{opacity:1},animate:{opacity:A==="exit"?0:1},transition:{duration:.2},children:d.map(j=>u.jsx(Am,{$size:j.size,$color:j.color,style:{left:`${j.x}%`,top:`${j.y}%`},initial:{opacity:0,scale:0},animate:{opacity:[0,.8,0],scale:[0,1,0],y:[0,-100]},transition:{duration:j.duration,delay:j.delay,repeat:1/0,repeatDelay:j.repeatDelay}},j.id))}),u.jsx(Em,{variants:Bm,initial:"initial",animate:A,children:u.jsxs(jm,{children:[u.jsx(Mm,{variants:Um,initial:"initial",animate:"animate"}),u.jsx(Su,{}),u.jsx(Su,{}),u.jsx(Su,{}),u.jsx(km,{variants:Nm,initial:"initial",animate:"animate"}),u.jsxs("picture",{children:[u.jsx("source",{srcSet:"/images/logo-optimized.webp",type:"image/webp"}),u.jsx(Dm,{src:"/images/logo-optimized.png",alt:"PN",width:80,height:80,loading:"eager",decoding:"async",variants:Gm,initial:"initial",animate:"animate"})]}),u.jsx(Cm,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:.5}})]})})]})},Lm=p.canvas`
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
`,Bf=[{r:42,g:157,b:143},{r:59,g:180,b:177},{r:67,g:97,b:165},{r:123,g:167,b:217}],Ym=()=>{const s=O.useRef(null),A=O.useRef([]),E=O.useRef(0),d=O.useRef({x:window.innerWidth/2,y:window.innerHeight/2});return O.useEffect(()=>{const j=s.current;if(!j)return;const M=j.getContext("2d");if(!M)return;const B=()=>{const k=window.devicePixelRatio||1;j.width=window.innerWidth*k,j.height=window.innerHeight*k,j.style.width=`${window.innerWidth}px`,j.style.height=`${window.innerHeight}px`,M.scale(k,k)};B(),window.addEventListener("resize",B);const F=4;A.current=[];for(let k=0;k<F;k++)A.current.push({x:window.innerWidth/2,y:window.innerHeight/2,size:60+k*20,color:Bf[k%Bf.length],speed:.1-k*.015,offset:k*.4});let _=0;const K=()=>{_+=.016,M.clearRect(0,0,j.width,j.height);const k=A.current,P=d.current;for(let Lt=k.length-1;Lt>=0;Lt--){const L=k[Lt],Dt=Math.sin(_*1.5+L.offset*4)*15,xe=Math.cos(_*1.5+L.offset*4)*15;L.x+=(P.x+Dt-L.x)*L.speed,L.y+=(P.y+xe-L.y)*L.speed;const vt=L.size+Math.sin(_*1.2+L.offset*2)*8,ot=M.createRadialGradient(L.x,L.y,0,L.x,L.y,vt),{r:ft,g:Mt,b:Ut}=L.color;ot.addColorStop(0,`rgba(${ft}, ${Mt}, ${Ut}, 0.25)`),ot.addColorStop(.4,`rgba(${ft}, ${Mt}, ${Ut}, 0.1)`),ot.addColorStop(.7,`rgba(${ft}, ${Mt}, ${Ut}, 0.03)`),ot.addColorStop(1,`rgba(${ft}, ${Mt}, ${Ut}, 0)`),M.beginPath(),M.arc(L.x,L.y,vt,0,Math.PI*2),M.fillStyle=ot,M.fill()}E.current=requestAnimationFrame(K)},$=k=>{d.current={x:k.clientX,y:k.clientY}};return window.addEventListener("mousemove",$),E.current=requestAnimationFrame(K),()=>{window.removeEventListener("resize",B),window.removeEventListener("mousemove",$),cancelAnimationFrame(E.current)}},[]),u.jsx(Lm,{ref:s})},Xm=p(v.div)`
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
`,Qm=()=>{const[s,A]=O.useState(!1),[E,d]=O.useState(!1),j=Ef(0),M=Ef(0),B=O.useCallback($=>{j.set($.clientX),M.set($.clientY),s||A(!0)},[j,M,s]),F=O.useCallback(()=>{A(!0)},[]),_=O.useCallback(()=>{A(!1)},[]),K=O.useCallback($=>{const k=$.target;if(k.closest("nav")!==null){d(!1);return}if(k.tagName==="A"||k.closest("a")!==null){d(!0);return}const L=k.tagName==="INPUT"||k.tagName==="TEXTAREA",Dt=k.contentEditable==="true",vt=["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","PRE","CODE","EM","STRONG","B","I","U"].includes(k.tagName),ot=Array.from(k.childNodes).some(Mt=>Mt.nodeType===Node.TEXT_NODE&&Mt.textContent?.trim());d(L||Dt||vt&&ot)},[]);return O.useEffect(()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0)return;document.addEventListener("mousemove",B),document.addEventListener("mouseenter",F),document.addEventListener("mouseleave",_),document.addEventListener("mouseover",K);const k=document.createElement("style");return k.id="custom-cursor-styles",k.textContent=`
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
    `,document.head.appendChild(k),()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseenter",F),document.removeEventListener("mouseleave",_),document.removeEventListener("mouseover",K);const P=document.getElementById("custom-cursor-styles");P&&P.remove()}},[B,F,_,K]),typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0)?null:u.jsx(Xm,{style:{x:j,y:M,translateX:"-50%",translateY:"-50%"},animate:{opacity:s&&!E?1:0,scale:s&&!E?1:0},transition:{duration:.15}})},Vm=rt`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,$m=rt`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(3deg); }
`,Zm=rt`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
`,$f=rt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Km=p.section`
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
`,Jm=p(v.div)`
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
`,Wm=p.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,Fm=p.div`
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
`,Im=p.div`
  perspective: 1000px;
`,Pm=p(v.div)`
  display: flex;
  justify-content: center;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`,th=p(v.div)`
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
`,eh=p(v.div)`
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
`,ah=p.picture`
  width: 100%;
  height: 100%;
  display: block;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`,ih=p.div`
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
    animation: ${Vm} 6s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
  }
`,Jl=p(v.div)`
  position: absolute;
  border-radius: var(--radius-lg);
  z-index: -2;
  animation: ${$m} 5s ease-in-out infinite;
  will-change: transform;
  
  ${({$position:s})=>{switch(s){case"top":return`
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
`,nh=p(v.div)`
  position: absolute;
  inset: -60px;
  background: radial-gradient(
    ellipse at center,
    rgba(var(--accent-rgb), 0.2) 0%,
    rgba(var(--blue-rgb), 0.12) 35%,
    transparent 65%
  );
  z-index: -3;
  animation: ${Zm} 3s ease-in-out infinite;
  filter: blur(30px);
  will-change: transform, opacity;
`,lh=p(v.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;
`,rh=p(v.span)`
  width: 40px;
  height: 2px;
  background: var(--gradient-horizontal);
  border-radius: var(--radius-full);
  transform-origin: left;
`,oh=p(v.span)`
  font-size: 13px;
  font-weight: ${w.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${$f} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,uh=p(v.div)`
  overflow: hidden;
  margin-bottom: 24px;
`,sh=p(v.h1)`
  font-size: clamp(52px, 9vw, 96px);
  font-weight: ${w.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.04em;
  line-height: 0.92;
  transition: color var(--timing-medium) var(--ease-standard);
  will-change: transform;
`,ch=p(v.span)`
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
`,dh=p(v.p)`
  font-size: clamp(17px, 2.2vw, 22px);
  font-weight: ${w.typography.fontWeight.regular};
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 20px;
  transition: color var(--timing-medium) var(--ease-standard);
`,fh=p(v.p)`
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--text-tertiary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color var(--timing-medium) var(--ease-standard);
  max-width: 680px;
`,ph=p(v.div)`
  display: flex;
  gap: 14px;
  flex-wrap: nowrap;
  margin-bottom: 56px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`,gh=p(v.a)`
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
`,mh=p(v.a)`
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
    animation: ${$f} 3s ease infinite;
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
`,hh=p(v.div)`
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
`,bh=p(v.div)`
  text-align: center;
  
  @media (min-width: ${w.breakpoints.mobile}) {
    text-align: left;
  }
`,vh=p(v.span)`
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
`,yh=p.span`
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-transform: uppercase;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.mobile}) {
    font-size: 12px;
  }
`;function xh(s){const A=O.useCallback(j=>{const M=window.matchMedia(s);return M.addEventListener("change",j),()=>M.removeEventListener("change",j)},[s]),E=O.useCallback(()=>window.matchMedia(s).matches,[s]),d=O.useCallback(()=>!1,[]);return O.useSyncExternalStore(A,E,d)}function Sh(s=1024){return xh(`(max-width: ${s}px)`)}function wh(){const s=O.useRef(null),A=Sh(1024),{scrollYProgress:E}=zg({target:s,offset:["start start","end start"]}),d=jf(E,[0,1],["0%","30%"]),j=jf(E,[0,.5],A?[.9,1]:[1,.95]),M=Mf(d,{stiffness:100,damping:30}),B=Mf(j,{stiffness:100,damping:30});return{containerRef:s,backgroundY:M,imageScale:B}}const zh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},Wl={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,mass:1}}},Th={hidden:{opacity:0,y:80,rotateX:-20},visible:{opacity:1,y:0,rotateX:0,transition:{type:"spring",stiffness:80,damping:20,mass:1.2}}},Ah={hidden:{opacity:0,scale:.85,rotateY:-15,filter:"blur(15px)"},visible:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:60,damping:20,mass:1.5,delay:.3}}},Eh={hidden:{scaleX:0},visible:{scaleX:1,transition:{type:"spring",stiffness:100,damping:20,delay:.1}}},jh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.6}}},Mh={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:150,damping:20}}},kh=[{value:"10+",label:"Years"},{value:"65+",label:"Engineers Led"},{value:"$2M+",label:"Savings"},{value:"15+",label:"Products"}],Uf=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),Dh=s=>{s.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})},Ch=({data:s})=>{const A=s.name.split(" ")[0],E=s.name.split(" ").slice(1).join(" ");return u.jsx(Im,{children:u.jsxs(v.div,{variants:zh,initial:"hidden",animate:"visible",children:[u.jsxs(lh,{variants:Wl,children:[u.jsx(rh,{variants:Eh}),u.jsx(oh,{children:"Engineering Leader & Architect"})]}),u.jsx(uh,{children:u.jsxs(sh,{variants:Th,children:[u.jsx(ch,{children:A}),u.jsx("br",{}),E]})}),u.jsx(dh,{variants:Wl,children:s.designation}),u.jsx(fh,{variants:Wl,children:s.headline}),u.jsxs(ph,{variants:Wl,children:[u.jsxs(gh,{href:"#contact",onClick:Dh,whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[u.jsx("span",{children:"Get in Touch"}),u.jsx(Uf,{})]}),u.jsxs(mh,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[u.jsx("span",{children:"Download Resume"}),u.jsx(Uf,{})]})]}),u.jsx(hh,{variants:jh,initial:"hidden",animate:"visible",children:kh.map((d,j)=>u.jsxs(bh,{variants:Mh,children:[u.jsx(vh,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:100,damping:15,delay:.7+j*.1},children:d.value}),u.jsx(yh,{children:d.label})]},j))})]})})},Hh=({name:s,imageScale:A})=>u.jsx(Pm,{variants:Ah,initial:"hidden",animate:"visible",style:{scale:A},children:u.jsxs(th,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:200,damping:20},children:[u.jsx(nh,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:.5}}),u.jsx(Jl,{$position:"top",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.6}}),u.jsx(Jl,{$position:"bottom",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.6}}),u.jsx(Jl,{$position:"left",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.9,duration:.6}}),u.jsx(Jl,{$position:"right",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:1.1,duration:.6}}),u.jsx(ih,{}),u.jsx(eh,{whileHover:{scale:1.03},transition:{type:"spring",stiffness:300,damping:25},children:u.jsxs(ah,{children:[u.jsx("source",{srcSet:"/images/profile.webp",type:"image/webp"}),u.jsx("img",{src:"/images/IMG_1153.JPG",alt:`${s} - Engineering Leader & Architect`,width:560,height:560,loading:"eager",decoding:"async",fetchPriority:"high"})]})})]})}),Oh=({data:s})=>{const{containerRef:A,backgroundY:E,imageScale:d}=wh();return u.jsxs(Km,{id:"home",ref:A,children:[u.jsx(Jm,{style:{y:E}}),u.jsx(Wm,{children:u.jsxs(Fm,{children:[u.jsx(Ch,{data:s}),u.jsx(Hh,{name:s.name,imageScale:d})]})})]})};p.div`
  width: 100%;
  max-width: ${({$wide:s})=>s?w.maxWidth.full:w.maxWidth.wide};
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${w.breakpoints.mobile}) {
    padding: 0 32px;
  }

  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 0 48px;
  }
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
`,Bh=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Uh=p(v.div)`
  margin-bottom: 64px;
  position: relative;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    margin-bottom: 88px;
  }
`,Nh=p.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    gap: 32px;
  }
`,Gh=p(v.div)`
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
    animation: ${Bh} 1.5s ease infinite;
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
`,_h=p.span`
  font-size: 14px;
  font-weight: ${w.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Zf} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-variant-numeric: tabular-nums;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 16px;
  }
`,qh=p.div`
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
`,Yh=p(v.div)`
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 2px;
  width: 60px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${Zf} 3s ease infinite;
  border-radius: var(--radius-full);
  transform-origin: left;
  
  /* Glass glow effect */
  box-shadow: 0 0 12px -2px rgba(var(--accent-rgb), 0.4);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    width: 80px;
    bottom: -24px;
  }
`,Xh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},Qh={hidden:{opacity:0,scale:.8,filter:"blur(8px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:200,damping:20}}},Vh={hidden:{opacity:0,x:-10,filter:"blur(4px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:150,damping:20}}},$h={hidden:{opacity:0,y:20,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},Zh={hidden:{scaleX:0,opacity:0},visible:{scaleX:1,opacity:1,transition:{duration:.6,ease:[.25,.1,.25,1],delay:.3}}},Kh={About:"Who I Am",Skills:"Technical Expertise",Experience:"Career Journey",Projects:"Featured Work",Certifications:"Credentials",Testimonials:"What Others Say",Education:"Academic Background",Contact:"Get In Touch"},za=({number:s,title:A,inView:E=!0})=>{const d=Kh[A]||"Section";return u.jsxs(Uh,{variants:Xh,initial:"hidden",animate:E?"visible":"hidden",children:[u.jsxs(Nh,{children:[u.jsx(Gh,{variants:Qh,whileHover:{scale:1.05},whileTap:{scale:.98},children:u.jsx(_h,{children:s})}),u.jsxs(qh,{children:[u.jsx(Rh,{variants:Vh,children:d}),u.jsx(Lh,{variants:$h,children:A})]})]}),u.jsx(Yh,{variants:Zh})]})},Jh=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Kf=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Wh=rt`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
`,Ci=st`
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
`,Jf=st`
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
    animation: ${Jh} 1.5s ease infinite;
  }
`;p(v.div)`
  ${Ci}
  
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--card-shadow);
  transition: 
    background var(--timing-medium) var(--ease-standard),
    box-shadow var(--timing-medium) var(--ease-standard),
    transform var(--timing-small) var(--ease-standard),
    border-color var(--timing-small) var(--ease-standard);
  
  ${({$elevated:s})=>s&&st`
    box-shadow: var(--card-shadow-hover);
  `}
  
  ${({$interactive:s})=>s&&st`
    ${Jf}
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
  
  ${({$accent:s})=>s&&st`
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
  ${Ci}
  
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  box-shadow: var(--card-shadow);
  
  ${({$subtle:s})=>s&&st`
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
  ${({$size:s="md"})=>{switch(s){case"sm":return st`
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
  ${({$variant:s="primary"})=>{switch(s){case"secondary":return st`
          ${Ci}
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
            animation: ${Kf} 3s ease infinite;
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
  
  ${({$variant:s="default"})=>{switch(s){case"accent":return st`
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), rgba(var(--blue-rgb), 0.1));
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent);
        `;case"subtle":return st`
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
        `;default:return st`
          ${Ci}
          color: var(--text-primary);
        `}}}
`;p.div`
  height: 1px;
  width: 100%;
  background: var(--border);
  margin: 24px 0;
  
  ${({$gradient:s})=>s&&st`
    height: 2px;
    background: var(--gradient);
    border-radius: 1px;
  `}
`;p(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Ci}
  ${Jf}
  
  ${({$size:s="md"})=>{switch(s){case"sm":return st`
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
  animation: ${Wh} 4s ease-in-out infinite;
  
  ${({$color:s="accent",$intensity:A="normal"})=>{const E=A==="subtle"?.15:A==="strong"?.35:.25;switch(s){case"blue":return st`
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
  
  ${({$animated:s})=>s&&st`
    animation: ${Kf} 4s ease infinite;
  `}
`;const Wf=rt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Fh=rt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,Ih=p.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Ph=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,tb=p(v.div)`
  margin-bottom: 48px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    margin-bottom: 64px;
  }
`,eb=p(v.div)`
  position: relative;
  padding-left: 36px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding-left: 56px;
  }
`,ab=p(v.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient);
  background-size: 100% 200%;
  animation: ${Wf} 3s ease infinite;
  border-radius: var(--radius-full);
  transform-origin: top;
  box-shadow: 0 0 16px -2px rgba(var(--accent-rgb), 0.4);
`,ib=p(v.p)`
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: ${w.typography.fontWeight.regular};
  color: var(--text-primary);
  line-height: 1.6;
  letter-spacing: -0.01em;
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
`,nb=p(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 64px;
  }
`,Nf=p(v.div)``,Gf=p(v.h3)`
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
`,lb=p(v.div)`
  margin-bottom: 48px;
`,rb=p(v.h3)`
  font-size: 13px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  transition: color var(--timing-medium) var(--ease-standard);
`,ob=p(v.div)`
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
`,ub=p(v.div)`
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
    animation: ${Fh} 1.5s ease infinite;
  }
  
  @media (min-width: ${w.breakpoints.mobile}) {
    padding: 48px 36px;
  }
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 56px 44px;
  }
`,sb=p(v.h4)`
  font-size: 19px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 18px;
  line-height: 1.35;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
`,cb=p(v.p)`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color var(--timing-medium) var(--ease-standard);
  position: relative;
  z-index: 1;
`,db=p(v.div)`
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
`,fb=p(v.p)`
  font-size: 19px;
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 21px;
  }
`,pb=p(v.a)`
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
    animation: ${Wf} 3s ease infinite;
    box-shadow: 0 8px 32px rgba(var(--accent-rgb), 0.4);
  }
  
  &:hover::before { transform: translateX(100%); }
  
  svg {
    width: 18px;
    height: 18px;
    transition: transform var(--timing-small) var(--ease-standard);
  }
  
  &:hover svg { transform: translateX(5px); }
`,gb={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},mb={hidden:{opacity:0,y:50,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:20,mass:1}}},hb={hidden:{scaleY:0},visible:{scaleY:1,transition:{type:"spring",stiffness:100,damping:20,delay:.2}}},qf={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:s=>({opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,delay:s*.15}})},bb={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},vb={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.4,ease:[.25,.46,.45,.94]}}},yb=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}],xb=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),Sb=({data:s})=>{const A=O.useRef(null),E=ye(A,{once:!0,margin:"-100px"}),d=O.useRef(null),j=ye(d,{once:!0,margin:"-50px"}),M=O.useRef(null),B=ye(M,{once:!0,margin:"-50px"}),F=O.useRef(null),_=ye(F,{once:!0,margin:"-50px"}),K=s.content.slice(0,3).map($=>$.replace(/^🔹\s*/,"").trim());return u.jsx(Ih,{id:"about",ref:A,children:u.jsxs(Ph,{children:[u.jsx(za,{number:"01",title:"About",inView:E}),u.jsx(tb,{ref:d,children:u.jsxs(eb,{initial:"hidden",animate:j?"visible":"hidden",variants:gb,children:[u.jsx(ab,{variants:hb}),u.jsx(ib,{variants:mb,children:K[0]})]})}),u.jsxs(nb,{ref:M,children:[u.jsxs(Nf,{variants:qf,custom:0,initial:"hidden",animate:B?"visible":"hidden",children:[u.jsx(Gf,{initial:{opacity:0,x:-20},animate:B?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Transformation"}),u.jsx(_f,{initial:{opacity:0,y:20},animate:B?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:K[1]})]}),u.jsxs(Nf,{variants:qf,custom:1,initial:"hidden",animate:B?"visible":"hidden",children:[u.jsx(Gf,{initial:{opacity:0,x:-20},animate:B?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.15},children:"Philosophy"}),u.jsx(_f,{initial:{opacity:0,y:20},animate:B?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.25},children:K[2]})]})]}),u.jsxs(lb,{ref:F,children:[u.jsx(rb,{initial:{opacity:0,y:20},animate:_?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Key Highlights"}),u.jsx(ob,{variants:bb,initial:"hidden",animate:_?"visible":"hidden",children:yb.map(($,k)=>u.jsxs(ub,{variants:vb,children:[u.jsx(sb,{children:$.title}),u.jsx(cb,{children:$.text})]},k))})]}),u.jsxs(db,{initial:{opacity:0,y:30},animate:E?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[u.jsx(fb,{children:"Want to know more?"}),u.jsxs(pb,{href:s.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[u.jsx("span",{children:s.buttonProps.name}),u.jsx(xb,{})]})]})]})})},wb=rt`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,zb=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Tb=p.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Ab=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,Eb=p(v.div)`
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
`,jb=p(v.div)``,Mb=p(v.h3)`
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
`,kb=p(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Db=p(v.li)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Cb=p(v.div)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,Hb=p(v.span)`
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
`,Ob=p(v.span)`
  font-size: 13px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  font-weight: ${w.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
`,Bb=p(v.div)`
  width: 100%;
  height: 4px;
  background: var(--glass-border);
  border-radius: var(--radius-full);
  overflow: hidden;
  transition: background-color var(--timing-medium) var(--ease-standard);
  position: relative;
  
  /* Subtle inner shadow for depth */
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`,Ub=p.div`
  height: 100%;
  background: var(--gradient-horizontal);
  border-radius: var(--radius-full);
  transform-origin: left;
  width: ${s=>s.$percentage}%;
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
    animation: ${zb} 2s ease infinite;
    animation-delay: ${s=>s.$delay+.6}s;
  }
  
  ${s=>s.$animate&&st`
    animation: ${wb} 0.6s cubic-bezier(0.33, 1, 0.68, 1) forwards;
    animation-delay: ${s.$delay}s;
  `}
`,Nb=({category:s})=>{const A=O.useRef(null),E=ye(A,{once:!0,margin:"-50px"});return u.jsxs(jb,{ref:A,initial:{opacity:0,y:30,filter:"blur(4px)"},animate:E?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:30,filter:"blur(4px)"},transition:{type:"spring",stiffness:100,damping:20},children:[u.jsx(Mb,{children:s.category}),u.jsx(kb,{children:s.skills.map((d,j)=>u.jsxs(Db,{initial:{opacity:0,x:-20},animate:E?{opacity:1,x:0}:{opacity:0,x:-20},transition:{type:"spring",stiffness:100,damping:20,delay:j*.05},whileHover:{x:8,transition:{type:"spring",stiffness:400,damping:25}},children:[u.jsxs(Cb,{children:[u.jsx(Hb,{children:d.name}),u.jsxs(Ob,{children:[d.percentage,"%"]})]}),u.jsx(Bb,{children:u.jsx(Ub,{$percentage:d.percentage,$delay:.1+j*.06,$animate:E})})]},d.name))})]})},Gb=({data:s})=>{const A=O.useRef(null),E=ye(A,{once:!0,margin:"-100px"});return u.jsx(Tb,{id:"technologyproficiency",ref:A,children:u.jsxs(Ab,{children:[u.jsx(za,{number:"02",title:"Skills",inView:E}),u.jsx(Eb,{children:s.skills.map(d=>u.jsx(Nb,{category:d},d.category))})]})})},_b=rt`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0);
  }
  50% {
    box-shadow: 0 0 20px 5px rgba(var(--accent-rgb), 0.15);
  }
`,qb=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Rb=p.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Lb=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,Yb=p(v.div)``,Xb=p(v.div)`
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
`,Qb=p(v.div)``,Vb=p(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color var(--timing-medium) var(--ease-standard);
`,$b=p(v.div)``,Zb=p(v.div)``,Kb=p.h3`
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
`,Jb=p(v.button)`
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
  background: ${({$isOpen:s})=>s?"var(--accent)":"var(--glass-bg)"};
  backdrop-filter: blur(var(--glass-blur-secondary));
  -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
  outline: 1.5px solid ${({$isOpen:s})=>s?"var(--accent)":"var(--glass-border)"};
  
  ${({$isOpen:s})=>s&&st`
    animation: ${_b} 2s ease-in-out infinite;
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
    animation: ${qb} 1.5s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,Wb=p(v.span)`
  font-size: 12px;
  font-weight: ${w.typography.fontWeight.medium};
  color: ${({$isOpen:s})=>s?"var(--bg-primary)":"var(--text-secondary)"};
  white-space: nowrap;
  letter-spacing: 0.02em;
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
`,Fb=p(v.span)`
  display: inline-flex;
  align-items: center;
`,Ib=p(v.p)`
  font-size: 16px;
  color: var(--accent);
  font-weight: ${w.typography.fontWeight.medium};
  transition: color var(--timing-medium) var(--ease-standard);
`,Pb=p(v.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  flex-wrap: wrap;
`,tv=p.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
  font-weight: ${w.typography.fontWeight.medium};
`,ev=p.span`
  font-size: 14px;
  color: var(--text-secondary);
  font-style: italic;
  transition: color var(--timing-medium) var(--ease-standard);
`,av=p(v.p)`
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
`,iv=p.div`
  display: grid;
  grid-template-rows: ${({$isExpanded:s})=>s?"1fr":"0fr"};
  transition: grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1);
`,nv=p.div`
  min-height: 0;
  overflow: hidden;
`,lv=p.div`
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  opacity: ${({$isExpanded:s})=>s?1:0};
  transform: translateY(${({$isExpanded:s})=>s?"0":"-4px"});
  transition: opacity 0.25s ease, transform 0.25s ease, border-color var(--timing-medium) var(--ease-standard);
`,rv=p.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: ${({$isExpanded:s})=>s?1:0};
  transition: opacity 0.3s ease;
`,ov=p.li`
  font-size: 15px;
  line-height: 1.75;
  padding-left: 20px;
  position: relative;
  opacity: ${({$isExpanded:s})=>s?1:0};
  transform: translateY(${({$isExpanded:s})=>s?"0":"8px"});
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition-delay: ${({$index:s,$isExpanded:A})=>A?`${s*.05}s`:"0s"};
  
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
`,uv=p.span`
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--accent);
`,sv=p.span`
  color: var(--text-secondary);
`,cv=({data:s})=>{const[A,E]=O.useState(new Set),d=O.useRef(null),j=ye(d,{once:!0,margin:"-100px"}),M=B=>{E(F=>{const _=new Set(F);return _.has(B)?_.delete(B):_.add(B),_})};return u.jsx(Rb,{id:"professionalexperience",ref:d,children:u.jsxs(Lb,{children:[u.jsx(za,{number:"03",title:"Experience",inView:j}),u.jsx(Yb,{children:s.timeline.map((B,F)=>{const _=A.has(F);return u.jsxs(Xb,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:[u.jsx(Qb,{children:u.jsx(Vb,{children:B.date})}),u.jsxs($b,{children:[u.jsxs(Zb,{children:[u.jsx(Kb,{children:u.jsx("a",{href:B.url,target:"_blank",rel:"noopener noreferrer",children:B.title})}),u.jsx(Ib,{children:B.subTitle}),B.previously&&u.jsxs(Pb,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.1},children:[u.jsx(tv,{children:"Previously:"}),u.jsx(ev,{children:B.previously})]})]}),u.jsx(av,{dangerouslySetInnerHTML:{__html:B.descriptionSummary}}),u.jsx(Jb,{$isOpen:_,whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},onClick:()=>M(F),"aria-expanded":_,"aria-label":_?"Show less":"Show more",children:u.jsxs(Wb,{$isOpen:_,children:["Show ",u.jsx(Di,{mode:"wait",children:u.jsx(Fb,{initial:"hidden",animate:"visible",exit:"exit",children:(_?"Less":"More").split("").map((K,$)=>u.jsx(v.span,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:$*.05}},exit:{opacity:0,transition:{delay:(3-$)*.03}}},children:K},$))},_?"less":"more")})]})}),u.jsx(iv,{$isExpanded:_,children:u.jsx(nv,{children:u.jsx(lv,{$isExpanded:_,children:u.jsx(rv,{$isExpanded:_,children:B.achievements?.map((K,$)=>u.jsxs(ov,{$index:$,$isExpanded:_,children:[u.jsx(uv,{children:K.title}),": ",u.jsx(sv,{children:K.description})]},$))})})})})]})]},F)})})]})})},Ff=rt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,dv=rt`
  0%, 100% { box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.1); }
  50% { box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.2); }
`,fv=rt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,pv=p.section`
  padding: 64px 24px;
  overflow: hidden;
  background: var(--bg-primary);
  position: relative;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,gv=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,mv=p(v.div)`
  position: relative;
`,hv=p.div`
  position: relative;
  perspective: 1000px;
`,bv=p(v.article)`
  border-radius: var(--radius-xl);
  will-change: transform, opacity;
  overflow: hidden;
  position: relative;
  animation: ${dv} 4s ease-in-out infinite;
  
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
    animation: ${Ff} 4s ease infinite;
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
`,vv=p(v.div)`
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
`,yv=p(v.h3)`
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
`,xv=p(v.button)`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  border: 1.5px solid ${({$isExpanded:s})=>s?"var(--accent)":"var(--glass-border)"};
  background: ${({$isExpanded:s})=>s?"var(--accent-subtle)":"var(--glass-bg)"};
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
    animation: ${fv} 1.5s ease infinite;
  }
  
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({$isExpanded:s})=>s?"var(--accent)":"var(--text-secondary)"};
    will-change: transform;
    position: relative;
    z-index: 1;
  }
`,Sv=p.div`
  display: grid;
  grid-template-rows: ${({$isExpanded:s})=>s?"1fr":"0fr"};
  transition: grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1);
`,wv=p(v.div)`
  min-height: 0;
  overflow: hidden;
`,zv=p(v.div)`
  padding: 0 32px 32px;
  border-top: 1px solid var(--glass-border);
  padding-top: 28px;
  transition: border-color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 0 40px 36px;
    padding-top: 32px;
  }
`,Tv=p(v.ul)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 36px;
  }
`,Av=p(v.li)`
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
`,Ev=p(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 48px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    gap: 36px;
    margin-top: 56px;
  }
`,Rf=p(v.button)`
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
`,jv=p(v.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,Mv=p(v.button)`
  width: ${({$isActive:s})=>s?"36px":"12px"};
  height: 12px;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  background: ${({$isActive:s})=>s?"var(--gradient)":"var(--glass-border)"};
  background-size: 200% 200%;
  ${({$isActive:s})=>s&&st`
    animation: ${Ff} 3s ease infinite;
  `}
  will-change: width, background;
  transition: background var(--timing-small) var(--ease-standard);
  
  &:hover {
    background: ${({$isActive:s})=>s?"var(--gradient)":"var(--text-tertiary)"};
  }
`,kv={enter:s=>({x:s>0?80:-80,opacity:0,scale:.98}),center:{x:0,opacity:1,scale:1,transition:{type:"spring",stiffness:500,damping:35,mass:.8}},exit:s=>({x:s<0?80:-80,opacity:0,scale:.98,transition:{type:"spring",stiffness:500,damping:35,mass:.8}})},Dv={collapsed:{opacity:0},expanded:{opacity:1,transition:{duration:.25,ease:[.4,0,.2,1],delay:.1}}},Cv={collapsed:{opacity:0,y:-6},expanded:{opacity:1,y:0,transition:{duration:.3,ease:[.4,0,.2,1]}}},Hv={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.025,delayChildren:.08}}},Ov={collapsed:{opacity:0,x:-8},expanded:{opacity:1,x:0,transition:{duration:.2,ease:[.4,0,.2,1]}}};function Bv({totalItems:s,animationDuration:A=350,wheelThreshold:E=20,swipeThreshold:d=30,velocityThreshold:j=200}){const[[M,B],F]=O.useState([0,0]),[_,K]=O.useState(!1),[$,k]=O.useState(!1),P=O.useRef(null),Lt=O.useRef(0),L=O.useCallback(vt=>{if($)return;const ot=M+vt;ot>=0&&ot<s&&(k(!0),F([ot,vt]),K(!1),setTimeout(()=>k(!1),A))},[M,s,$,A]),Dt=O.useCallback(vt=>{if($||vt===M)return;const ot=vt>M?1:-1;k(!0),F([vt,ot]),K(!1),setTimeout(()=>k(!1),A)},[M,$,A]);O.useEffect(()=>{const vt=P.current;if(!vt)return;const ot=ft=>{const Mt=Date.now();if(Mt-Lt.current<300)return;const Ut=Math.abs(ft.deltaX)>Math.abs(ft.deltaY)?ft.deltaX:ft.deltaY;if(Math.abs(Ut)>E){const oe=M<s-1,Se=M>0;(Ut>0&&oe||Ut<0&&Se)&&(ft.preventDefault(),ft.stopPropagation(),Lt.current=Mt,Ut>0?L(1):L(-1))}};return vt.addEventListener("wheel",ot,{passive:!1}),()=>vt.removeEventListener("wheel",ot)},[M,s,L,E]);const xe=O.useCallback((vt,ot)=>{$||(ot.velocity.x>j||ot.offset.x>d?M>0&&L(-1):(ot.velocity.x<-j||ot.offset.x<-d)&&M<s-1&&L(1))},[M,s,$,L,d,j]);return{activeIndex:M,direction:B,isAnimating:$,cardRef:P,paginate:L,goToSlide:Dt,handleDragEnd:xe,setIsExpanded:K,isExpanded:_}}const Uv=({title:s,content:A,isExpanded:E,onToggle:d})=>u.jsxs(u.Fragment,{children:[u.jsxs(vv,{$isExpanded:E,onClick:d,whileHover:{scale:1.01},transition:{type:"spring",stiffness:400,damping:25},children:[u.jsx(yv,{children:s}),u.jsx(xv,{$isExpanded:E,"aria-label":E?"Collapse project details":"Expand project details","aria-expanded":E,animate:{rotate:E?45:0,scale:E?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:u.jsx(v.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:u.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),u.jsx(Sv,{$isExpanded:E,children:u.jsx(wv,{initial:"collapsed",animate:E?"expanded":"collapsed",variants:Dv,children:u.jsx(zv,{initial:"collapsed",animate:E?"expanded":"collapsed",variants:Cv,children:u.jsx(Tv,{variants:Hv,initial:"collapsed",animate:E?"expanded":"collapsed",children:A.map((j,M)=>u.jsx(Av,{variants:Ov,children:j},M))})})})})]}),Nv=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:u.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),Gv=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:u.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),_v=({activeIndex:s,totalItems:A,isInView:E,onPaginate:d,onGoToSlide:j,projectTitles:M})=>u.jsxs(Ev,{initial:{opacity:0,y:20},animate:E?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[u.jsx(Rf,{onClick:()=>d(-1),disabled:s===0,"aria-label":"Previous project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:u.jsx(Nv,{})}),u.jsx(jv,{role:"tablist","aria-label":"Project navigation",children:M.map((B,F)=>u.jsx(Mv,{$isActive:s===F,onClick:()=>j(F),role:"tab","aria-selected":s===F,"aria-label":`Go to project ${F+1}: ${B}`,whileHover:{scale:1.1},whileTap:{scale:.95},animate:{width:s===F?36:12},transition:{type:"spring",stiffness:400,damping:25}},F))}),u.jsx(Rf,{onClick:()=>d(1),disabled:s===A-1,"aria-label":"Next project",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:u.jsx(Gv,{})})]}),qv=({data:s})=>{const A=O.useRef(null),E=ye(A,{once:!0,margin:"-100px"}),{activeIndex:d,direction:j,cardRef:M,paginate:B,goToSlide:F,handleDragEnd:_,isExpanded:K,setIsExpanded:$}=Bv({totalItems:s.content.length}),k=s.content[d];return u.jsx(pv,{id:"mostproudof",ref:A,children:u.jsxs(gv,{children:[u.jsx(za,{number:"04",title:"Projects",inView:E}),u.jsxs(mv,{initial:{opacity:0,y:40},animate:E?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:20,delay:.2},children:[u.jsx(hv,{ref:M,children:u.jsx(Di,{initial:!1,custom:j,mode:"wait",children:u.jsx(bv,{custom:j,variants:kv,initial:"enter",animate:"center",exit:"exit",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.1,dragMomentum:!1,onDragEnd:_,transition:{x:{type:"spring",stiffness:500,damping:35,mass:.8},opacity:{duration:.2},scale:{type:"spring",stiffness:500,damping:35,mass:.8}},style:{cursor:"grab",touchAction:"pan-y"},whileDrag:{cursor:"grabbing",scale:1.01},children:u.jsx(Uv,{title:k.title,content:k.content,isExpanded:K,onToggle:()=>$(!K)})},d)})}),u.jsx(_v,{activeIndex:d,totalItems:s.content.length,isInView:E,onPaginate:B,onGoToSlide:F,projectTitles:s.content.map(P=>P.title)})]})]})})},Rv=rt`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Lv=p.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Yv=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,Xv=p(v.div)`
  display: flex;
  flex-direction: column;
`,Qv=p(v.div)`
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
`,Vv=p(v.div)`
  flex: 1;
`,$v=p(v.h3)`
  font-size: 18px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 6px;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 20px;
  }
`,Zv=p(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Kv=p(v.a)`
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
    animation: ${Rv} 1.5s ease infinite;
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
`,Jv=({data:s})=>{const A=O.useRef(null),E=ye(A,{once:!0,margin:"-100px"}),d=j=>j.toLowerCase().includes("azure")||j.toLowerCase().includes("microsoft")?"Microsoft":j.toLowerCase().includes("aws")?"Amazon Web Services":"";return u.jsx(Lv,{id:"certifications",ref:A,children:u.jsxs(Yv,{children:[u.jsx(za,{number:"05",title:"Certifications",inView:E}),u.jsx(Xv,{children:s.certificateProps.certificateMetaData.map((j,M)=>u.jsxs(Qv,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:M*.08},whileHover:{x:12,transition:{type:"spring",stiffness:400,damping:25}},children:[u.jsxs(Vv,{children:[u.jsx($v,{children:j.title}),u.jsx(Zv,{children:d(j.title)})]}),u.jsxs(Kv,{href:j.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[u.jsx("span",{children:"Verify"}),u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),u.jsx("polyline",{points:"15,3 21,3 21,9"}),u.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]},M))})]})})},If=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Wv=p.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,Fv=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,Iv=p(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }
`,Pv=p(v.blockquote)`
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
    animation: ${If} 3s ease infinite;
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
`,t1=p(v.div)`
  font-size: 56px;
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${If} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 24px;
  font-weight: bold;
  position: relative;
  z-index: 1;
`,e1=p(v.p)`
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
`,a1=p(v.footer)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  z-index: 1;
`,i1=p(v.cite)`
  font-size: 16px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  font-style: normal;
  transition: color var(--timing-medium) var(--ease-standard);
`,n1=p(v.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color var(--timing-medium) var(--ease-standard);
`,l1=({data:s})=>{const A=O.useRef(null),E=ye(A,{once:!0,margin:"-100px"});return u.jsx(Wv,{id:"testimonials",ref:A,children:u.jsxs(Fv,{children:[u.jsx(za,{number:"06",title:"Testimonials",inView:E}),u.jsx(Iv,{children:s.quoteProps.quoteMetaData.map((d,j)=>u.jsxs(Pv,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:j*.1},whileHover:{y:-8,scale:1.02,transition:{type:"spring",stiffness:300,damping:20}},children:[u.jsx(t1,{children:'"'}),u.jsx(e1,{children:d.quote}),u.jsxs(a1,{children:[u.jsx(i1,{children:d.givenBy}),u.jsx(n1,{children:d.subTitleGivenBy})]})]},j))})]})})},r1=p.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,o1=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,u1=p(v.div)`
  display: flex;
  flex-direction: column;
`,s1=p(v.div)`
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
`,c1=p(v.span)`
  font-size: 15px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color var(--timing-medium) var(--ease-standard);
  font-weight: ${w.typography.fontWeight.medium};
`,d1=p(v.div)``,f1=p(v.h3)`
  font-size: 20px;
  font-weight: ${w.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
  transition: color var(--timing-medium) var(--ease-standard);
  
  @media (min-width: ${w.breakpoints.tablet}) {
    font-size: 22px;
  }
`,p1=p(v.p)`
  font-size: 16px;
  color: var(--text-secondary);
  transition: color var(--timing-medium) var(--ease-standard);
`,g1=({data:s})=>{const A=O.useRef(null),E=ye(A,{once:!0,margin:"-100px"});return u.jsx(r1,{id:"educationalqualifications",ref:A,children:u.jsxs(o1,{children:[u.jsx(za,{number:"07",title:"Education",inView:E}),u.jsx(u1,{children:s.timeline.map((d,j)=>u.jsxs(s1,{initial:{opacity:0,x:-30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:20,delay:j*.1},whileHover:{x:16,transition:{type:"spring",stiffness:400,damping:25}},children:[u.jsx(c1,{children:d.date}),u.jsxs(d1,{children:[u.jsx(f1,{children:d.title}),u.jsx(p1,{children:d.subTitle})]})]},j))})]})})},m1=rt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,h1=rt`
  0%, 100% {
    box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.2);
  }
`,b1=p.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,v1=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,y1=p(v.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 72px;
  
  @media (min-width: ${w.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`,x1=p(v.div)``,S1=p(v.h3)`
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: ${w.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  transition: color var(--timing-medium) var(--ease-standard);
`,w1=p(v.p)`
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color var(--timing-medium) var(--ease-standard);
`,z1=p(v.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,T1=p(v.a)`
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
    animation: ${m1} 3s ease infinite;
  }
  
  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,A1=p(v.div)`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  animation: ${h1} 4s ease-in-out infinite;
  
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
`,E1=p(v.div)`
  position: relative;
  z-index: 1;
`,j1=p(v.span)`
  display: block;
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  transition: color var(--timing-medium) var(--ease-standard);
`,M1=p(v.span)`
  font-size: 17px;
  font-weight: ${w.typography.fontWeight.medium};
  color: var(--text-primary);
  transition: color var(--timing-medium) var(--ease-standard);
`,Lf={mail:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[u.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),u.jsx("path",{d:"M22 6L12 13 2 6"})]}),email:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[u.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),u.jsx("path",{d:"M22 6L12 13 2 6"})]}),phone:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:u.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),linkedin:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[u.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),u.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),u.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),location:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[u.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),u.jsx("circle",{cx:"12",cy:"10",r:"3"})]})},k1=({data:s})=>{const A=O.useRef(null),E=ye(A,{once:!0,margin:"-100px"}),d=M=>Lf[M.toLowerCase()]||Lf.mail,j=M=>({mail:"Email",email:"Email",phone:"Phone",linkedin:"LinkedIn",location:"Location"})[M.toLowerCase()]||M;return u.jsx(b1,{id:"contact",ref:A,children:u.jsxs(v1,{children:[u.jsx(za,{number:"08",title:"Contact",inView:E}),u.jsxs(y1,{children:[u.jsxs(x1,{initial:{opacity:0,y:40,filter:"blur(4px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:80,damping:18},children:[u.jsx(S1,{children:"Let's work together"}),u.jsx(w1,{children:"Have a project in mind or want to discuss opportunities? I'd love to hear from you."})]}),u.jsx(z1,{children:s.contactMetaData.filter(M=>M.icon.toLowerCase()!=="phone").map((M,B)=>u.jsxs(T1,{href:M.href,target:M.href.startsWith("http")?"_blank":void 0,rel:M.href.startsWith("http")?"noopener noreferrer":void 0,initial:{opacity:0,x:30,filter:"blur(4px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},transition:{type:"spring",stiffness:100,damping:18,delay:B*.1},whileHover:{x:12,scale:1.02,transition:{type:"spring",stiffness:400,damping:25}},whileTap:{scale:.98},children:[u.jsx(A1,{whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:20},children:d(M.icon)}),u.jsxs(E1,{children:[u.jsx(j1,{children:j(M.icon)}),u.jsx(M1,{children:M.content})]})]},B))})]})]})})},D1={sectionTitle:"About Me",content:["🔹  I specialize in crafting multi-tenant, event-driven, and Micro-Services architectures on Azure and AWS, enabling real-time intelligence at scale. My leadership has accelerated delivery velocity by 25% and nurtured high-performing teams of 65+ engineers across 5 Development and 1 Core Support Squad, distributed globally.","An expert in transforming monoliths into cloud-native Micro-Services, designing AI-driven orchestration platforms, and modernizing data pipelines using Spark, Databricks, and real-time analytics.","Passionate about balancing technical depth with business outcomes, aligning architecture roadmaps with OKRs, and embedding security and compliance (SOC2, InfoSec) across the SDLC.",`💡 Key Highlights: 
 ✅ Product & Project Expertise — Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT. 
 
 ✅ Technical Edge — Deep experience leading and mentoring global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, Docker/Kubernetes, and DevOps automation. 
 
 ✅ Business Outcomes — Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution.`],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},C1={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},H1={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},O1={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},B1={name:"Pranshu Nijhawan",designation:"Designing for Scale, Leading for Impact",headline:"Strategic Engineering Leader with 10+ years of experience architecting scalable SaaS platforms, leading global teams, and driving multimillion-dollar cost optimizations. Expert in cloud-native transformations, data-intensive systems, and multi-tenant architectures that enable real-time intelligence and business growth. Proven track record of reducing operational costs by $2M+, improving delivery velocity by 25%, and mentoring high-performing engineering teams.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},U1={sectionTitle:"Most Proud Of",content:[{id:1,title:"SearchSphere – Multi-Tenant Search Platform with RAG and Vectorization",content:["Designed and architected a fully configurable multi-tenant search platform using TypeScript, Node.js, and PostgreSQL.","Implemented vectorization and Retrieval Augmented Generation (RAG) to enable intelligent global and dimension-based search capabilities.","Enabled onboarding of new search dimensions dynamically via configuration, eliminating the need for code changes.","Successfully decommissioned Elasticsearch, achieving platform simplification and over $2 million in cost savings.","Built for high scalability, supporting tenant isolation and extensibility without compromising performance."]},{id:2,title:"Zero-Downtime ETL Platform – Scalable Blue/Green Data Processing at Scale",content:["Engineered a highly scalable and fault-tolerant ETL platform using Databricks, Spark, Azure Data Factory, and PostgreSQL.","Designed around a Blue/Green deployment strategy to ensure zero downtime during data ingestion and transformation cycles.","Processed 200+ million records across 100+ tables in under 15 minutes using Change Data Capture (CDC) and dynamic schema allocation techniques.","Enabled seamless schema evolution and pipeline reusability across multiple tenants and data domains.","Delivered a production-grade solution with operational efficiency, reliability, and real-time recovery capabilities."]},{id:3,title:"Orchestron – AI Orchestrated Modular Data Processing & Explosion Platform",content:["Architected a high-performance data processing and explosion platform using .NET, Apache Spark, and Kubernetes.","Designed a modular, plug-and-play architecture with configurable rules to enable seamless data transformation at scale.","Integrated Generative AI Agents to manage orchestration and rule governance, enabling intelligent, adaptive processing workflows.","Achieved dynamic scalability and reusability across domains through containerized deployments and configuration-driven pipelines.","Delivered a flexible and future-proof platform capable of adapting to evolving data models and transformation logic with minimal effort."]},{id:4,title:"Polymorphic Self-Mutating Encryption Algorithm",content:["Created a highly secured Hybrid Encryption Algorithm, a combination of hashing and dynamic key-based Encryption Algorithm.",'Solve the drawback of traditional Hashing technique to always create a unique hash value with an "Always Unique" based mechanism ignoring the need to store a key as followed in Key Based Encryption technique.']},{id:5,title:"Global Dependency Tracer",content:["Created a highly optimized Dependency Trace writer, based on Aspect-Oriented-Programming (AOP) Paradigm.","Architected using .NET Core's built-in Dependency Injection (DI) Containers by injecting dynamic proxies acting as a Middleware for all service calls."]},{id:6,title:"Dynamic Result Library for IQueryable & IEnumerable Collections",content:["Created a highly customizable library for Non-Generic collections IQueryable & IEnumerable based on concepts of Reflection for transforming Custom Data objects into LINQ compatible Lambda Expressions.","Dynamic Filter: Generate lambda expressions for LINQ's where extension method to filter data based on defined properties and values.","Dynamic Sort: Generate LINQ's ordering extensions with lambda expressions to sort the object in any direction (Ascending & Descending).","Dynamic Select: Generate lambda expressions for LINQ's select extension to fetch only the provided properties and filter the response using Custom Middleware Injection in .NET Core's request cycle.","Fully Compatible for EF Core's Translations."]}]},N1={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect I",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 – Present",descriptionSummary:'At McKinsey, I serve as the Lead Architect for the entire <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a> platform, a flagship <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> product for CPG and retail clients. My role involves bridging deep technical expertise with strategic client engagement, advising senior product and consulting leaders, and driving solution design for high-stakes RFPs and enterprise implementations. I ensure our technical strategy delivers measurable client impact, while leading a global team of 65+ engineers across 5 Development and 1 Core Support Squad in strategic technical delivery.',achievements:[{title:"Design of a Multi-Language Backend Architecture",description:"Defined the long-term architectural roadmap for a complex, data heavy ecosystem where I coordinated the interoperability of a backend that uses multiple languages - Node.js/Fastify for scalable microservices and .NET/C# for high performance batch processing."},{title:"Implementation of a Scalable Blue-Green ETL Platform",description:"Built a scalable ETL platform that uses Databricks, Azure Data Factory and PostgreSQL that switches between two identical production slots, Blue or Green - one slot runs the live service while the other receives the new release. The system loads more than 200 million records from more than 100 tables in under 15 minutes."},{title:"Development of a Micro-Frontend-Based UI Architecture",description:"Led the design of data heavy user interfaces based on Micro Frontend architecture using React, TypeScript, Redux and AG Grid."},{title:"Establishment of a GitOps-Driven Delivery Framework",description:"Established the delivery system - putting GitOps at the center. I designed all infrastructure as plain Terraform code and set up one touch release pipelines in Azure DevOps, Helm besides ArgoCD."},{title:"Advancement of Security-First Practices and Unified Observability",description:'Established a "Security-First" culture by adding Wiz besides SonarQube to CI/CD pipelines and created a single observability rule set with Dynatrace and OpenTelemetry.'},{title:"Leadership Contributions and Career Progression",description:"Got promoted from Senior Software Engineer to Principal Architect in 3.5 years to build a culture where people take responsibility and think about the whole system. Personally guided senior engineers on how to choose system designs, linked product needs to what the code can deliver plus earned strong trust from every stakeholder."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 – March 2022",descriptionSummary:'At Eptura, I transformed <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), re-architecting legacy SaaS into cloud-native systems and designing distributed platforms. This directly enhanced product reliability and scalability for global clients, while I also led engineering squads, driving technical excellence and team growth.',achievements:[{title:"Cloud-Native Transformation for Enhanced Client Uptime",description:"Led re-architecture of legacy SaaS to a cloud-native microservices solution on Azure Kubernetes Service (AKS). Achieved 60% faster recovery and significantly enhanced system uptime, critical for client operations."},{title:"Global Distributed Release Management System",description:"Engineered and deployed a system (Azure IoT Hub, Serverless Functions, Azure CosmosDB) orchestrating synchronized updates across 300M+ IoT devices globally. Ensured seamless and reliable software delivery to a vast client network."},{title:"Led & Mentored Engineering Squads",description:"Directed a team of 20 engineers (4 tech leads) across four product squads. Implemented mentorship, improving team retention by 20% and fostering engineering growth, impacting product quality for clients."}]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 – April 2021",descriptionSummary:"At Nagarro, I delivered full-stack applications for diverse clients, enhancing user experience and streamlining development. My role involved hands-on development and implementing modern software engineering practices to improve efficiency and reliability of client solutions.",achievements:[{title:"High-Performance Full-Stack Applications",description:"Developed full-stack web applications (Angular, .NET Core, PostgreSQL, Ionic Framework) for e-commerce and HR clients."},{title:"CI/CD & IaC for Reliable Client Deployments",description:"Established CI/CD pipelines and Infrastructure as Code (IaC) practices. Reduced deployment failures by 70%, ensuring stable and predictable software releases for client projects."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 – December 2019",descriptionSummary:'During this tenure at Condeco, I focused on core development and optimization of the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), contributing to its scalability and reliability for a rapidly growing customer base.',achievements:[{title:"Scalable Microservices for 3x Customer Growth",description:"Designed and developed microservices (C#, .NET, React, SQL Server) for the workspace SaaS platform. Supported 3x customer scale-up, handling increased user demand."},{title:"Optimized CI/CD & Data Models",description:"Maintained CI/CD pipelines and implemented data model optimizations. Resulted in faster, more reliable software releases and improved system performance for client-facing features."}]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",previously:"Intern",date:"February 2016 – August 2018",descriptionSummary:"At Gartner, I contributed to the development of the ClearForce platform (proprietary survey and analytics tool for HR consulting), focusing on improving data accuracy and automating workflows for clients.",achievements:[{title:"Core SaaS Analytics Tool Development",description:"Contributed backend development for ClearForce (C#, .NET Core, React), improving employee survey data accuracy by 60%. Critical for providing data-driven insights to HR clients."},{title:"Automated SQL Workflows",description:"Developed and automated SQL workflows (SPs, SQL agent jobs). Saved over 240 engineering hours annually in manual data processing, improving data delivery efficiency for clients."}],last:!0}]},G1={sectionTitle:"Technology Proficiency",skills:[{icon:"Architecture",category:"Architecture",skills:[{name:"Microservices Architecture",percentage:100},{name:"Data Lakehouse",percentage:90},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Multi-Tenant Architecture (Database, Schema, Metadata Resolution)",percentage:90},{name:"Event-Driven Architecture (EDA)",percentage:100},{name:"Serverless",percentage:80}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"Angular",percentage:90},{name:"JavaScript",percentage:100},{name:"TypeScript",percentage:100},{name:"Ionic Framework",percentage:60}]},{icon:"Backend",category:"Backend",skills:[{name:"C#",percentage:100},{name:".NET Core",percentage:100},{name:"Node.Js",percentage:80},{name:"Python",percentage:80},{name:"Microservices",percentage:100},{name:"GraphQL",percentage:80}]},{icon:"Database",category:"Database",skills:[{name:"SQL",percentage:100},{name:"NoSQL",percentage:90}]},{icon:"Cloud",category:"Cloud",skills:[{name:"Microsoft Azure",percentage:90},{name:"Amazon Web Services (AWS)",percentage:80}]},{icon:"DataEngineering",category:"Data Engineering",skills:[{name:"Azure Databricks (Apache Spark)",percentage:80},{name:"Azure Datafactory",percentage:70},{name:"Azure Stream Analytics",percentage:70}]}]},_1={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},q1={aboutSection:D1,certifications:C1,contactMe:H1,educationalQualifications:O1,homeSection:B1,mostProudOf:U1,professionalExperience:N1,technologyProficiency:G1,testimonials:_1},We=q1;function R1(){const[s,A]=O.useState(!1);return u.jsxs(Ug,{children:[u.jsx(Og,{}),u.jsx(Qm,{}),u.jsx(Ym,{}),u.jsx(Di,{children:!s&&u.jsx(Rm,{onComplete:()=>A(!0)})}),s&&u.jsxs(u.Fragment,{children:[u.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),u.jsx(om,{}),u.jsxs("main",{id:"main-content",style:{position:"relative"},role:"main",children:[u.jsx(Oh,{data:We.homeSection}),u.jsx(Sb,{data:We.aboutSection}),u.jsx(Gb,{data:We.technologyProficiency}),u.jsx(cv,{data:We.professionalExperience}),u.jsx(qv,{data:We.mostProudOf}),u.jsx(Jv,{data:We.certifications}),u.jsx(l1,{data:We.testimonials}),u.jsx(g1,{data:We.educationalQualifications}),u.jsx(k1,{data:We.contactMe})]}),u.jsx(ym,{})]})]})}Cg.createRoot(document.getElementById("root")).render(u.jsx(O.StrictMode,{children:u.jsx(R1,{})}));
