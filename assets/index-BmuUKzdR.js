import{r as L,j as s,u as Ot,m as Y,a as Me,b as Na,L as Rp,A as ac,c as Nn,d as zl,e as On,f as Lp}from"./vendor-motion-C8MGYtJI.js";import{r as qp,a as Yp}from"./vendor-react-DlBnNAMw.js";import{f as Qp,d as x}from"./vendor-styled-D8mjEXd4.js";(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))r(b);new MutationObserver(b=>{for(const E of b)if(E.type==="childList")for(const M of E.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&r(M)}).observe(document,{childList:!0,subtree:!0});function m(b){const E={};return b.integrity&&(E.integrity=b.integrity),b.referrerPolicy&&(E.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?E.credentials="include":b.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function r(b){if(b.ep)return;b.ep=!0;const E=m(b);fetch(b.href,E)}})();var Ao={exports:{}},jn={},To={exports:{}},Eo={};var Hd;function Gp(){return Hd||(Hd=1,(function(o){function h(A,U){var G=A.length;A.push(U);t:for(;0<G;){var mt=G-1>>>1,vt=A[mt];if(0<b(vt,U))A[mt]=U,A[G]=vt,G=mt;else break t}}function m(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var U=A[0],G=A.pop();if(G!==U){A[0]=G;t:for(var mt=0,vt=A.length,Qt=vt>>>1;mt<Qt;){var xt=2*(mt+1)-1,ct=A[xt],Nt=xt+1,ze=A[Nt];if(0>b(ct,G))Nt<vt&&0>b(ze,ct)?(A[mt]=ze,A[Nt]=G,mt=Nt):(A[mt]=ct,A[xt]=G,mt=xt);else if(Nt<vt&&0>b(ze,G))A[mt]=ze,A[Nt]=G,mt=Nt;else break t}}return U}function b(A,U){var G=A.sortIndex-U.sortIndex;return G!==0?G:A.id-U.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;o.unstable_now=function(){return E.now()}}else{var M=Date,O=M.now();o.unstable_now=function(){return M.now()-O}}var N=[],D=[],Q=1,j=null,C=3,k=!1,_=!1,I=!1,lt=!1,tt=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,et=typeof setImmediate<"u"?setImmediate:null;function ht(A){for(var U=m(D);U!==null;){if(U.callback===null)r(D);else if(U.startTime<=A)r(D),U.sortIndex=U.expirationTime,h(N,U);else break;U=m(D)}}function Bt(A){if(I=!1,ht(A),!_)if(m(N)!==null)_=!0,Tt||(Tt=!0,ue());else{var U=m(D);U!==null&&je(Bt,U.startTime-A)}}var Tt=!1,ye=-1,$t=5,Je=-1;function Un(){return lt?!0:!(o.unstable_now()-Je<$t)}function Zl(){if(lt=!1,Tt){var A=o.unstable_now();Je=A;var U=!0;try{t:{_=!1,I&&(I=!1,X(ye),ye=-1),k=!0;var G=C;try{e:{for(ht(A),j=m(N);j!==null&&!(j.expirationTime>A&&Un());){var mt=j.callback;if(typeof mt=="function"){j.callback=null,C=j.priorityLevel;var vt=mt(j.expirationTime<=A);if(A=o.unstable_now(),typeof vt=="function"){j.callback=vt,ht(A),U=!0;break e}j===m(N)&&r(N),ht(A)}else r(N);j=m(N)}if(j!==null)U=!0;else{var Qt=m(D);Qt!==null&&je(Bt,Qt.startTime-A),U=!1}}break t}finally{j=null,C=G,k=!1}U=void 0}}finally{U?ue():Tt=!1}}}var ue;if(typeof et=="function")ue=function(){et(Zl)};else if(typeof MessageChannel<"u"){var Hn=new MessageChannel,Ha=Hn.port2;Hn.port1.onmessage=Zl,ue=function(){Ha.postMessage(null)}}else ue=function(){tt(Zl,0)};function je(A,U){ye=tt(function(){A(o.unstable_now())},U)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(A){A.callback=null},o.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$t=0<A?Math.floor(1e3/A):5},o.unstable_getCurrentPriorityLevel=function(){return C},o.unstable_next=function(A){switch(C){case 1:case 2:case 3:var U=3;break;default:U=C}var G=C;C=U;try{return A()}finally{C=G}},o.unstable_requestPaint=function(){lt=!0},o.unstable_runWithPriority=function(A,U){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var G=C;C=A;try{return U()}finally{C=G}},o.unstable_scheduleCallback=function(A,U,G){var mt=o.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?mt+G:mt):G=mt,A){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=G+vt,A={id:Q++,callback:U,priorityLevel:A,startTime:G,expirationTime:vt,sortIndex:-1},G>mt?(A.sortIndex=G,h(D,A),m(N)===null&&A===m(D)&&(I?(X(ye),ye=-1):I=!0,je(Bt,G-mt))):(A.sortIndex=vt,h(N,A),_||k||(_=!0,Tt||(Tt=!0,ue()))),A},o.unstable_shouldYield=Un,o.unstable_wrapCallback=function(A){var U=C;return function(){var G=C;C=U;try{return A.apply(this,arguments)}finally{C=G}}}})(Eo)),Eo}var Bd;function kp(){return Bd||(Bd=1,To.exports=Gp()),To.exports}var _d;function Xp(){if(_d)return jn;_d=1;var o=kp(),h=qp(),m=Yp();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function E(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function M(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function N(t){if(E(t)!==t)throw Error(r(188))}function D(t){var e=t.alternate;if(!e){if(e=E(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return N(n),t;if(i===a)return N(n),e;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=n,a=i;else{for(var c=!1,u=n.child;u;){if(u===l){c=!0,l=n,a=i;break}if(u===a){c=!0,a=n,l=i;break}u=u.sibling}if(!c){for(u=i.child;u;){if(u===l){c=!0,l=i,a=n;break}if(u===a){c=!0,a=i,l=n;break}u=u.sibling}if(!c)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function Q(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Q(t),e!==null)return e;t=t.sibling}return null}var j=Object.assign,C=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),lt=Symbol.for("react.strict_mode"),tt=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),et=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),Bt=Symbol.for("react.suspense"),Tt=Symbol.for("react.suspense_list"),ye=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Je=Symbol.for("react.activity"),Un=Symbol.for("react.memo_cache_sentinel"),Zl=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=Zl&&t[Zl]||t["@@iterator"],typeof t=="function"?t:null)}var Hn=Symbol.for("react.client.reference");function Ha(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Hn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case tt:return"Profiler";case lt:return"StrictMode";case Bt:return"Suspense";case Tt:return"SuspenseList";case Je:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case _:return"Portal";case et:return t.displayName||"Context";case X:return(t._context.displayName||"Context")+".Consumer";case ht:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ye:return e=t.displayName||null,e!==null?e:Ha(t.type)||"Memo";case $t:e=t._payload,t=t._init;try{return Ha(t(e))}catch{}}return null}var je=Array.isArray,A=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},mt=[],vt=-1;function Qt(t){return{current:t}}function xt(t){0>vt||(t.current=mt[vt],mt[vt]=null,vt--)}function ct(t,e){vt++,mt[vt]=t.current,t.current=e}var Nt=Qt(null),ze=Qt(null),We=Qt(null),Bn=Qt(null);function _n(t,e){switch(ct(We,e),ct(ze,t),ct(Nt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?ad(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=ad(e),t=nd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xt(Nt),ct(Nt,t)}function Kl(){xt(Nt),xt(ze),xt(We)}function nc(t){t.memoizedState!==null&&ct(Bn,t);var e=Nt.current,l=nd(e,t.type);e!==l&&(ct(ze,t),ct(Nt,l))}function Rn(t){ze.current===t&&(xt(Nt),xt(ze)),Bn.current===t&&(xt(Bn),An._currentValue=G)}var ic,No;function Al(t){if(ic===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);ic=e&&e[1]||"",No=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ic+t+No}var cc=!1;function uc(t,e){if(!t||cc)return"";cc=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(S){var y=S}Reflect.construct(t,[],T)}else{try{T.call()}catch(S){y=S}t.call(T.prototype)}}else{try{throw Error()}catch(S){y=S}(T=t())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(S){if(S&&y&&typeof S.stack=="string")return[S.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],u=i[1];if(c&&u){var f=c.split(`
`),g=u.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===g.length)for(a=f.length-1,n=g.length-1;1<=a&&0<=n&&f[a]!==g[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==g[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==g[n]){var z=`
`+f[a].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=a&&0<=n);break}}}finally{cc=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Al(l):""}function ph(t,e){switch(t.tag){case 26:case 27:case 5:return Al(t.type);case 16:return Al("Lazy");case 13:return t.child!==e&&e!==null?Al("Suspense Fallback"):Al("Suspense");case 19:return Al("SuspenseList");case 0:case 15:return uc(t.type,!1);case 11:return uc(t.type.render,!1);case 1:return uc(t.type,!0);case 31:return Al("Activity");default:return""}}function Uo(t){try{var e="",l=null;do e+=ph(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var oc=Object.prototype.hasOwnProperty,sc=o.unstable_scheduleCallback,rc=o.unstable_cancelCallback,mh=o.unstable_shouldYield,vh=o.unstable_requestPaint,Ft=o.unstable_now,gh=o.unstable_getCurrentPriorityLevel,Ho=o.unstable_ImmediatePriority,Bo=o.unstable_UserBlockingPriority,Ln=o.unstable_NormalPriority,yh=o.unstable_LowPriority,_o=o.unstable_IdlePriority,bh=o.log,xh=o.unstable_setDisableYieldValue,Ba=null,It=null;function $e(t){if(typeof bh=="function"&&xh(t),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(Ba,t)}catch{}}var Pt=Math.clz32?Math.clz32:wh,Sh=Math.log,zh=Math.LN2;function wh(t){return t>>>=0,t===0?32:31-(Sh(t)/zh|0)|0}var qn=256,Yn=262144,Qn=4194304;function Tl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Gn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?n=Tl(a):(c&=u,c!==0?n=Tl(c):l||(l=u&~t,l!==0&&(n=Tl(l))))):(u=a&~i,u!==0?n=Tl(u):c!==0?n=Tl(c):l||(l=a&~t,l!==0&&(n=Tl(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function _a(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ah(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ro(){var t=Qn;return Qn<<=1,(Qn&62914560)===0&&(Qn=4194304),t}function fc(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Ra(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Th(t,e,l,a,n,i){var c=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var u=t.entanglements,f=t.expirationTimes,g=t.hiddenUpdates;for(l=c&~l;0<l;){var z=31-Pt(l),T=1<<z;u[z]=0,f[z]=-1;var y=g[z];if(y!==null)for(g[z]=null,z=0;z<y.length;z++){var S=y[z];S!==null&&(S.lane&=-536870913)}l&=~T}a!==0&&Lo(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(c&~e))}function Lo(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Pt(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function qo(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Pt(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Yo(t,e){var l=e&-e;return l=(l&42)!==0?1:dc(l),(l&(t.suspendedLanes|e))!==0?0:l}function dc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function hc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qo(){var t=U.p;return t!==0?t:(t=window.event,t===void 0?32:Md(t.type))}function Go(t,e){var l=U.p;try{return U.p=t,e()}finally{U.p=l}}var Fe=Math.random().toString(36).slice(2),_t="__reactFiber$"+Fe,kt="__reactProps$"+Fe,Jl="__reactContainer$"+Fe,pc="__reactEvents$"+Fe,Eh="__reactListeners$"+Fe,Mh="__reactHandles$"+Fe,ko="__reactResources$"+Fe,La="__reactMarker$"+Fe;function mc(t){delete t[_t],delete t[kt],delete t[pc],delete t[Eh],delete t[Mh]}function Wl(t){var e=t[_t];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Jl]||l[_t]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=fd(t);t!==null;){if(l=t[_t])return l;t=fd(t)}return e}t=l,l=t.parentNode}return null}function $l(t){if(t=t[_t]||t[Jl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function qa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Fl(t){var e=t[ko];return e||(e=t[ko]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ut(t){t[La]=!0}var Xo=new Set,Vo={};function El(t,e){Il(t,e),Il(t+"Capture",e)}function Il(t,e){for(Vo[t]=e,t=0;t<e.length;t++)Xo.add(e[t])}var jh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zo={},Ko={};function Dh(t){return oc.call(Ko,t)?!0:oc.call(Zo,t)?!1:jh.test(t)?Ko[t]=!0:(Zo[t]=!0,!1)}function kn(t,e,l){if(Dh(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Xn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function De(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ch(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vc(t){if(!t._valueTracker){var e=Jo(t)?"checked":"value";t._valueTracker=Ch(t,e,""+t[e])}}function Wo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Jo(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Vn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Oh=/[\n"\\]/g;function se(t){return t.replace(Oh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function gc(t,e,l,a,n,i,c,u){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+oe(e)):t.value!==""+oe(e)&&(t.value=""+oe(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?yc(t,c,oe(e)):l!=null?yc(t,c,oe(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.name=""+oe(u):t.removeAttribute("name")}function $o(t,e,l,a,n,i,c,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){vc(t);return}l=l!=null?""+oe(l):"",e=e!=null?""+oe(e):l,u||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=u?t.checked:!!a,t.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),vc(t)}function yc(t,e,l){e==="number"&&Vn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Pl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+oe(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Fo(t,e,l){if(e!=null&&(e=""+oe(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+oe(l):""}function Io(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(je(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=oe(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),vc(t)}function ta(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Nh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Po(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Nh.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function ts(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Po(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&Po(t,i,e[i])}function bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(t){return Hh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ce(){}var xc=null;function Sc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ea=null,la=null;function es(t){var e=$l(t);if(e&&(t=e.stateNode)){var l=t[kt]||null;t:switch(t=e.stateNode,e.type){case"input":if(gc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+se(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[kt]||null;if(!n)throw Error(r(90));gc(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Wo(a)}break t;case"textarea":Fo(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Pl(t,!!l.multiple,e,!1)}}}var zc=!1;function ls(t,e,l){if(zc)return t(e,l);zc=!0;try{var a=t(e);return a}finally{if(zc=!1,(ea!==null||la!==null)&&(Ui(),ea&&(e=ea,t=la,la=ea=null,es(e),t)))for(e=0;e<t.length;e++)es(t[e])}}function Ya(t,e){var l=t.stateNode;if(l===null)return null;var a=l[kt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var Oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wc=!1;if(Oe)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){wc=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{wc=!1}var Ie=null,Ac=null,Kn=null;function as(){if(Kn)return Kn;var t,e=Ac,l=e.length,a,n="value"in Ie?Ie.value:Ie.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var c=l-t;for(a=1;a<=c&&e[l-a]===n[i-a];a++);return Kn=n.slice(t,1<a?1-a:void 0)}function Jn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wn(){return!0}function ns(){return!1}function Xt(t){function e(l,a,n,i,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(l=t[u],this[u]=l?l(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wn:ns,this.isPropagationStopped=ns,this}return j(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),e}var Ml={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=Xt(Ml),Ga=j({},Ml,{view:0,detail:0}),Bh=Xt(Ga),Tc,Ec,ka,Fn=j({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ka&&(ka&&t.type==="mousemove"?(Tc=t.screenX-ka.screenX,Ec=t.screenY-ka.screenY):Ec=Tc=0,ka=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),is=Xt(Fn),_h=j({},Fn,{dataTransfer:0}),Rh=Xt(_h),Lh=j({},Ga,{relatedTarget:0}),Mc=Xt(Lh),qh=j({},Ml,{animationName:0,elapsedTime:0,pseudoElement:0}),Yh=Xt(qh),Qh=j({},Ml,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gh=Xt(Qh),kh=j({},Ml,{data:0}),cs=Xt(kh),Xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zh[t])?!!e[t]:!1}function jc(){return Kh}var Jh=j({},Ga,{key:function(t){if(t.key){var e=Xh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(t){return t.type==="keypress"?Jn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wh=Xt(Jh),$h=j({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),us=Xt($h),Fh=j({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),Ih=Xt(Fh),Ph=j({},Ml,{propertyName:0,elapsedTime:0,pseudoElement:0}),t0=Xt(Ph),e0=j({},Fn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),l0=Xt(e0),a0=j({},Ml,{newState:0,oldState:0}),n0=Xt(a0),i0=[9,13,27,32],Dc=Oe&&"CompositionEvent"in window,Xa=null;Oe&&"documentMode"in document&&(Xa=document.documentMode);var c0=Oe&&"TextEvent"in window&&!Xa,os=Oe&&(!Dc||Xa&&8<Xa&&11>=Xa),ss=" ",rs=!1;function fs(t,e){switch(t){case"keyup":return i0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var aa=!1;function u0(t,e){switch(t){case"compositionend":return ds(e);case"keypress":return e.which!==32?null:(rs=!0,ss);case"textInput":return t=e.data,t===ss&&rs?null:t;default:return null}}function o0(t,e){if(aa)return t==="compositionend"||!Dc&&fs(t,e)?(t=as(),Kn=Ac=Ie=null,aa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return os&&e.locale!=="ko"?null:e.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!s0[t.type]:e==="textarea"}function ps(t,e,l,a){ea?la?la.push(a):la=[a]:ea=a,e=Yi(e,"onChange"),0<e.length&&(l=new $n("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Va=null,Za=null;function r0(t){Ff(t,0)}function In(t){var e=qa(t);if(Wo(e))return t}function ms(t,e){if(t==="change")return e}var vs=!1;if(Oe){var Cc;if(Oe){var Oc="oninput"in document;if(!Oc){var gs=document.createElement("div");gs.setAttribute("oninput","return;"),Oc=typeof gs.oninput=="function"}Cc=Oc}else Cc=!1;vs=Cc&&(!document.documentMode||9<document.documentMode)}function ys(){Va&&(Va.detachEvent("onpropertychange",bs),Za=Va=null)}function bs(t){if(t.propertyName==="value"&&In(Za)){var e=[];ps(e,Za,t,Sc(t)),ls(r0,e)}}function f0(t,e,l){t==="focusin"?(ys(),Va=e,Za=l,Va.attachEvent("onpropertychange",bs)):t==="focusout"&&ys()}function d0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return In(Za)}function h0(t,e){if(t==="click")return In(e)}function p0(t,e){if(t==="input"||t==="change")return In(e)}function m0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var te=typeof Object.is=="function"?Object.is:m0;function Ka(t,e){if(te(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!oc.call(e,n)||!te(t[n],e[n]))return!1}return!0}function xs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ss(t,e){var l=xs(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=xs(l)}}function zs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ws(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Vn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Vn(t.document)}return e}function Nc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var v0=Oe&&"documentMode"in document&&11>=document.documentMode,na=null,Uc=null,Ja=null,Hc=!1;function As(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Hc||na==null||na!==Vn(a)||(a=na,"selectionStart"in a&&Nc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ja&&Ka(Ja,a)||(Ja=a,a=Yi(Uc,"onSelect"),0<a.length&&(e=new $n("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=na)))}function jl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ia={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionrun:jl("Transition","TransitionRun"),transitionstart:jl("Transition","TransitionStart"),transitioncancel:jl("Transition","TransitionCancel"),transitionend:jl("Transition","TransitionEnd")},Bc={},Ts={};Oe&&(Ts=document.createElement("div").style,"AnimationEvent"in window||(delete ia.animationend.animation,delete ia.animationiteration.animation,delete ia.animationstart.animation),"TransitionEvent"in window||delete ia.transitionend.transition);function Dl(t){if(Bc[t])return Bc[t];if(!ia[t])return t;var e=ia[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Ts)return Bc[t]=e[l];return t}var Es=Dl("animationend"),Ms=Dl("animationiteration"),js=Dl("animationstart"),g0=Dl("transitionrun"),y0=Dl("transitionstart"),b0=Dl("transitioncancel"),Ds=Dl("transitionend"),Cs=new Map,_c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_c.push("scrollEnd");function be(t,e){Cs.set(t,e),El(e,[t])}var Pn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},re=[],ca=0,Rc=0;function ti(){for(var t=ca,e=Rc=ca=0;e<t;){var l=re[e];re[e++]=null;var a=re[e];re[e++]=null;var n=re[e];re[e++]=null;var i=re[e];if(re[e++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}i!==0&&Os(l,n,i)}}function ei(t,e,l,a){re[ca++]=t,re[ca++]=e,re[ca++]=l,re[ca++]=a,Rc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Lc(t,e,l,a){return ei(t,e,l,a),li(t)}function Cl(t,e){return ei(t,null,null,e),li(t)}function Os(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Pt(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function li(t){if(50<gn)throw gn=0,Ku=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ua={};function x0(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ee(t,e,l,a){return new x0(t,e,l,a)}function qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ne(t,e){var l=t.alternate;return l===null?(l=ee(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Ns(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ai(t,e,l,a,n,i){var c=0;if(a=t,typeof t=="function")qc(t)&&(c=1);else if(typeof t=="string")c=Tp(t,l,Nt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Je:return t=ee(31,l,e,n),t.elementType=Je,t.lanes=i,t;case I:return Ol(l.children,n,i,e);case lt:c=8,n|=24;break;case tt:return t=ee(12,l,e,n|2),t.elementType=tt,t.lanes=i,t;case Bt:return t=ee(13,l,e,n),t.elementType=Bt,t.lanes=i,t;case Tt:return t=ee(19,l,e,n),t.elementType=Tt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case et:c=10;break t;case X:c=9;break t;case ht:c=11;break t;case ye:c=14;break t;case $t:c=16,a=null;break t}c=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=ee(c,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function Ol(t,e,l,a){return t=ee(7,t,a,e),t.lanes=l,t}function Yc(t,e,l){return t=ee(6,t,null,e),t.lanes=l,t}function Us(t){var e=ee(18,null,null,0);return e.stateNode=t,e}function Qc(t,e,l){return e=ee(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Hs=new WeakMap;function fe(t,e){if(typeof t=="object"&&t!==null){var l=Hs.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Uo(e)},Hs.set(t,e),e)}return{value:t,source:e,stack:Uo(e)}}var oa=[],sa=0,ni=null,Wa=0,de=[],he=0,Pe=null,we=1,Ae="";function Ue(t,e){oa[sa++]=Wa,oa[sa++]=ni,ni=t,Wa=e}function Bs(t,e,l){de[he++]=we,de[he++]=Ae,de[he++]=Pe,Pe=t;var a=we;t=Ae;var n=32-Pt(a)-1;a&=~(1<<n),l+=1;var i=32-Pt(e)+n;if(30<i){var c=n-n%5;i=(a&(1<<c)-1).toString(32),a>>=c,n-=c,we=1<<32-Pt(e)+n|l<<n|a,Ae=i+t}else we=1<<i|l<<n|a,Ae=t}function Gc(t){t.return!==null&&(Ue(t,1),Bs(t,1,0))}function kc(t){for(;t===ni;)ni=oa[--sa],oa[sa]=null,Wa=oa[--sa],oa[sa]=null;for(;t===Pe;)Pe=de[--he],de[he]=null,Ae=de[--he],de[he]=null,we=de[--he],de[he]=null}function _s(t,e){de[he++]=we,de[he++]=Ae,de[he++]=Pe,we=e.id,Ae=e.overflow,Pe=t}var Rt=null,gt=null,P=!1,tl=null,pe=!1,Xc=Error(r(519));function el(t){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $a(fe(e,t)),Xc}function Rs(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[_t]=t,e[kt]=a,l){case"dialog":W("cancel",e),W("close",e);break;case"iframe":case"object":case"embed":W("load",e);break;case"video":case"audio":for(l=0;l<bn.length;l++)W(bn[l],e);break;case"source":W("error",e);break;case"img":case"image":case"link":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"input":W("invalid",e),$o(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":W("invalid",e);break;case"textarea":W("invalid",e),Io(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||ed(e.textContent,l)?(a.popover!=null&&(W("beforetoggle",e),W("toggle",e)),a.onScroll!=null&&W("scroll",e),a.onScrollEnd!=null&&W("scrollend",e),a.onClick!=null&&(e.onclick=Ce),e=!0):e=!1,e||el(t,!0)}function Ls(t){for(Rt=t.return;Rt;)switch(Rt.tag){case 5:case 31:case 13:pe=!1;return;case 27:case 3:pe=!0;return;default:Rt=Rt.return}}function ra(t){if(t!==Rt)return!1;if(!P)return Ls(t),P=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||oo(t.type,t.memoizedProps)),l=!l),l&&gt&&el(t),Ls(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));gt=rd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));gt=rd(t)}else e===27?(e=gt,ml(t.type)?(t=po,po=null,gt=t):gt=e):gt=Rt?ve(t.stateNode.nextSibling):null;return!0}function Nl(){gt=Rt=null,P=!1}function Vc(){var t=tl;return t!==null&&(Jt===null?Jt=t:Jt.push.apply(Jt,t),tl=null),t}function $a(t){tl===null?tl=[t]:tl.push(t)}var Zc=Qt(null),Ul=null,He=null;function ll(t,e,l){ct(Zc,e._currentValue),e._currentValue=l}function Be(t){t._currentValue=Zc.current,xt(Zc)}function Kc(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Jc(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;t:for(;i!==null;){var u=i;i=n;for(var f=0;f<e.length;f++)if(u.context===e[f]){i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Kc(i.return,l,t),a||(c=null);break t}i=u.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(r(341));c.lanes|=l,i=c.alternate,i!==null&&(i.lanes|=l),Kc(c,l,t),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===t){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function fa(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(r(387));if(c=c.memoizedProps,c!==null){var u=n.type;te(n.pendingProps.value,c.value)||(t!==null?t.push(u):t=[u])}}else if(n===Bn.current){if(c=n.alternate,c===null)throw Error(r(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(An):t=[An])}n=n.return}t!==null&&Jc(e,t,l,a),e.flags|=262144}function ii(t){for(t=t.firstContext;t!==null;){if(!te(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Hl(t){Ul=t,He=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Lt(t){return qs(Ul,t)}function ci(t,e){return Ul===null&&Hl(t),qs(t,e)}function qs(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},He===null){if(t===null)throw Error(r(308));He=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else He=He.next=e;return l}var S0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},z0=o.unstable_scheduleCallback,w0=o.unstable_NormalPriority,Et={$$typeof:et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wc(){return{controller:new S0,data:new Map,refCount:0}}function Fa(t){t.refCount--,t.refCount===0&&z0(w0,function(){t.controller.abort()})}var Ia=null,$c=0,da=0,ha=null;function A0(t,e){if(Ia===null){var l=Ia=[];$c=0,da=Pu(),ha={status:"pending",value:void 0,then:function(a){l.push(a)}}}return $c++,e.then(Ys,Ys),e}function Ys(){if(--$c===0&&Ia!==null){ha!==null&&(ha.status="fulfilled");var t=Ia;Ia=null,da=0,ha=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function T0(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Qs=A.S;A.S=function(t,e){Tf=Ft(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&A0(t,e),Qs!==null&&Qs(t,e)};var Bl=Qt(null);function Fc(){var t=Bl.current;return t!==null?t:pt.pooledCache}function ui(t,e){e===null?ct(Bl,Bl.current):ct(Bl,e.pool)}function Gs(){var t=Fc();return t===null?null:{parent:Et._currentValue,pool:t}}var pa=Error(r(460)),Ic=Error(r(474)),oi=Error(r(542)),si={then:function(){}};function ks(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xs(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ce,Ce),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zs(t),t;default:if(typeof e.status=="string")e.then(Ce,Ce);else{if(t=pt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zs(t),t}throw Rl=e,pa}}function _l(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Rl=l,pa):l}}var Rl=null;function Vs(){if(Rl===null)throw Error(r(459));var t=Rl;return Rl=null,t}function Zs(t){if(t===pa||t===oi)throw Error(r(483))}var ma=null,Pa=0;function ri(t){var e=Pa;return Pa+=1,ma===null&&(ma=[]),Xs(ma,t,e)}function tn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function fi(t,e){throw e.$$typeof===C?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ks(t){function e(p,d){if(t){var v=p.deletions;v===null?(p.deletions=[d],p.flags|=16):v.push(d)}}function l(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function a(p){for(var d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function n(p,d){return p=Ne(p,d),p.index=0,p.sibling=null,p}function i(p,d,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<d?(p.flags|=67108866,d):v):(p.flags|=67108866,d)):(p.flags|=1048576,d)}function c(p){return t&&p.alternate===null&&(p.flags|=67108866),p}function u(p,d,v,w){return d===null||d.tag!==6?(d=Yc(v,p.mode,w),d.return=p,d):(d=n(d,v),d.return=p,d)}function f(p,d,v,w){var R=v.type;return R===I?z(p,d,v.props.children,w,v.key):d!==null&&(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===$t&&_l(R)===d.type)?(d=n(d,v.props),tn(d,v),d.return=p,d):(d=ai(v.type,v.key,v.props,null,p.mode,w),tn(d,v),d.return=p,d)}function g(p,d,v,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=Qc(v,p.mode,w),d.return=p,d):(d=n(d,v.children||[]),d.return=p,d)}function z(p,d,v,w,R){return d===null||d.tag!==7?(d=Ol(v,p.mode,w,R),d.return=p,d):(d=n(d,v),d.return=p,d)}function T(p,d,v){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Yc(""+d,p.mode,v),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case k:return v=ai(d.type,d.key,d.props,null,p.mode,v),tn(v,d),v.return=p,v;case _:return d=Qc(d,p.mode,v),d.return=p,d;case $t:return d=_l(d),T(p,d,v)}if(je(d)||ue(d))return d=Ol(d,p.mode,v,null),d.return=p,d;if(typeof d.then=="function")return T(p,ri(d),v);if(d.$$typeof===et)return T(p,ci(p,d),v);fi(p,d)}return null}function y(p,d,v,w){var R=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return R!==null?null:u(p,d,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case k:return v.key===R?f(p,d,v,w):null;case _:return v.key===R?g(p,d,v,w):null;case $t:return v=_l(v),y(p,d,v,w)}if(je(v)||ue(v))return R!==null?null:z(p,d,v,w,null);if(typeof v.then=="function")return y(p,d,ri(v),w);if(v.$$typeof===et)return y(p,d,ci(p,v),w);fi(p,v)}return null}function S(p,d,v,w,R){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return p=p.get(v)||null,u(d,p,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case k:return p=p.get(w.key===null?v:w.key)||null,f(d,p,w,R);case _:return p=p.get(w.key===null?v:w.key)||null,g(d,p,w,R);case $t:return w=_l(w),S(p,d,v,w,R)}if(je(w)||ue(w))return p=p.get(v)||null,z(d,p,w,R,null);if(typeof w.then=="function")return S(p,d,v,ri(w),R);if(w.$$typeof===et)return S(p,d,v,ci(d,w),R);fi(d,w)}return null}function H(p,d,v,w){for(var R=null,at=null,B=d,K=d=0,F=null;B!==null&&K<v.length;K++){B.index>K?(F=B,B=null):F=B.sibling;var nt=y(p,B,v[K],w);if(nt===null){B===null&&(B=F);break}t&&B&&nt.alternate===null&&e(p,B),d=i(nt,d,K),at===null?R=nt:at.sibling=nt,at=nt,B=F}if(K===v.length)return l(p,B),P&&Ue(p,K),R;if(B===null){for(;K<v.length;K++)B=T(p,v[K],w),B!==null&&(d=i(B,d,K),at===null?R=B:at.sibling=B,at=B);return P&&Ue(p,K),R}for(B=a(B);K<v.length;K++)F=S(B,p,K,v[K],w),F!==null&&(t&&F.alternate!==null&&B.delete(F.key===null?K:F.key),d=i(F,d,K),at===null?R=F:at.sibling=F,at=F);return t&&B.forEach(function(xl){return e(p,xl)}),P&&Ue(p,K),R}function q(p,d,v,w){if(v==null)throw Error(r(151));for(var R=null,at=null,B=d,K=d=0,F=null,nt=v.next();B!==null&&!nt.done;K++,nt=v.next()){B.index>K?(F=B,B=null):F=B.sibling;var xl=y(p,B,nt.value,w);if(xl===null){B===null&&(B=F);break}t&&B&&xl.alternate===null&&e(p,B),d=i(xl,d,K),at===null?R=xl:at.sibling=xl,at=xl,B=F}if(nt.done)return l(p,B),P&&Ue(p,K),R;if(B===null){for(;!nt.done;K++,nt=v.next())nt=T(p,nt.value,w),nt!==null&&(d=i(nt,d,K),at===null?R=nt:at.sibling=nt,at=nt);return P&&Ue(p,K),R}for(B=a(B);!nt.done;K++,nt=v.next())nt=S(B,p,K,nt.value,w),nt!==null&&(t&&nt.alternate!==null&&B.delete(nt.key===null?K:nt.key),d=i(nt,d,K),at===null?R=nt:at.sibling=nt,at=nt);return t&&B.forEach(function(_p){return e(p,_p)}),P&&Ue(p,K),R}function dt(p,d,v,w){if(typeof v=="object"&&v!==null&&v.type===I&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case k:t:{for(var R=v.key;d!==null;){if(d.key===R){if(R=v.type,R===I){if(d.tag===7){l(p,d.sibling),w=n(d,v.props.children),w.return=p,p=w;break t}}else if(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===$t&&_l(R)===d.type){l(p,d.sibling),w=n(d,v.props),tn(w,v),w.return=p,p=w;break t}l(p,d);break}else e(p,d);d=d.sibling}v.type===I?(w=Ol(v.props.children,p.mode,w,v.key),w.return=p,p=w):(w=ai(v.type,v.key,v.props,null,p.mode,w),tn(w,v),w.return=p,p=w)}return c(p);case _:t:{for(R=v.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){l(p,d.sibling),w=n(d,v.children||[]),w.return=p,p=w;break t}else{l(p,d);break}else e(p,d);d=d.sibling}w=Qc(v,p.mode,w),w.return=p,p=w}return c(p);case $t:return v=_l(v),dt(p,d,v,w)}if(je(v))return H(p,d,v,w);if(ue(v)){if(R=ue(v),typeof R!="function")throw Error(r(150));return v=R.call(v),q(p,d,v,w)}if(typeof v.then=="function")return dt(p,d,ri(v),w);if(v.$$typeof===et)return dt(p,d,ci(p,v),w);fi(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,d!==null&&d.tag===6?(l(p,d.sibling),w=n(d,v),w.return=p,p=w):(l(p,d),w=Yc(v,p.mode,w),w.return=p,p=w),c(p)):l(p,d)}return function(p,d,v,w){try{Pa=0;var R=dt(p,d,v,w);return ma=null,R}catch(B){if(B===pa||B===oi)throw B;var at=ee(29,B,null,p.mode);return at.lanes=w,at.return=p,at}finally{}}}var Ll=Ks(!0),Js=Ks(!1),al=!1;function Pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function nl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function il(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(it&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=li(t),Os(t,null,l),e}return ei(t,a,e,l),li(t)}function en(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,qo(t,l)}}function eu(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var lu=!1;function ln(){if(lu){var t=ha;if(t!==null)throw t}}function an(t,e,l,a){lu=!1;var n=t.updateQueue;al=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var f=u,g=f.next;f.next=null,c===null?i=g:c.next=g,c=f;var z=t.alternate;z!==null&&(z=z.updateQueue,u=z.lastBaseUpdate,u!==c&&(u===null?z.firstBaseUpdate=g:u.next=g,z.lastBaseUpdate=f))}if(i!==null){var T=n.baseState;c=0,z=g=f=null,u=i;do{var y=u.lane&-536870913,S=y!==u.lane;if(S?($&y)===y:(a&y)===y){y!==0&&y===da&&(lu=!0),z!==null&&(z=z.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});t:{var H=t,q=u;y=e;var dt=l;switch(q.tag){case 1:if(H=q.payload,typeof H=="function"){T=H.call(dt,T,y);break t}T=H;break t;case 3:H.flags=H.flags&-65537|128;case 0:if(H=q.payload,y=typeof H=="function"?H.call(dt,T,y):H,y==null)break t;T=j({},T,y);break t;case 2:al=!0}}y=u.callback,y!==null&&(t.flags|=64,S&&(t.flags|=8192),S=n.callbacks,S===null?n.callbacks=[y]:S.push(y))}else S={lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},z===null?(g=z=S,f=T):z=z.next=S,c|=y;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;S=u,u=S.next,S.next=null,n.lastBaseUpdate=S,n.shared.pending=null}}while(!0);z===null&&(f=T),n.baseState=f,n.firstBaseUpdate=g,n.lastBaseUpdate=z,i===null&&(n.shared.lanes=0),rl|=c,t.lanes=c,t.memoizedState=T}}function Ws(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function $s(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Ws(l[t],e)}var va=Qt(null),di=Qt(0);function Fs(t,e){t=Xe,ct(di,t),ct(va,e),Xe=t|e.baseLanes}function au(){ct(di,Xe),ct(va,va.current)}function nu(){Xe=di.current,xt(va),xt(di)}var le=Qt(null),me=null;function cl(t){var e=t.alternate;ct(wt,wt.current&1),ct(le,t),me===null&&(e===null||va.current!==null||e.memoizedState!==null)&&(me=t)}function iu(t){ct(wt,wt.current),ct(le,t),me===null&&(me=t)}function Is(t){t.tag===22?(ct(wt,wt.current),ct(le,t),me===null&&(me=t)):ul()}function ul(){ct(wt,wt.current),ct(le,le.current)}function ae(t){xt(le),me===t&&(me=null),xt(wt)}var wt=Qt(0);function hi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||fo(l)||ho(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _e=0,V=null,rt=null,Mt=null,pi=!1,ga=!1,ql=!1,mi=0,nn=0,ya=null,E0=0;function St(){throw Error(r(321))}function cu(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!te(t[l],e[l]))return!1;return!0}function uu(t,e,l,a,n,i){return _e=i,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,A.H=t===null||t.memoizedState===null?Br:zu,ql=!1,i=l(a,n),ql=!1,ga&&(i=tr(e,l,a,n)),Ps(t),i}function Ps(t){A.H=on;var e=rt!==null&&rt.next!==null;if(_e=0,Mt=rt=V=null,pi=!1,nn=0,ya=null,e)throw Error(r(300));t===null||jt||(t=t.dependencies,t!==null&&ii(t)&&(jt=!0))}function tr(t,e,l,a){V=t;var n=0;do{if(ga&&(ya=null),nn=0,ga=!1,25<=n)throw Error(r(301));if(n+=1,Mt=rt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}A.H=_r,i=e(l,a)}while(ga);return i}function M0(){var t=A.H,e=t.useState()[0];return e=typeof e.then=="function"?cn(e):e,t=t.useState()[0],(rt!==null?rt.memoizedState:null)!==t&&(V.flags|=1024),e}function ou(){var t=mi!==0;return mi=0,t}function su(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function ru(t){if(pi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}pi=!1}_e=0,Mt=rt=V=null,ga=!1,nn=mi=0,ya=null}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?V.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function At(){if(rt===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=Mt===null?V.memoizedState:Mt.next;if(e!==null)Mt=e,rt=t;else{if(t===null)throw V.alternate===null?Error(r(467)):Error(r(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Mt===null?V.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cn(t){var e=nn;return nn+=1,ya===null&&(ya=[]),t=Xs(ya,t,e),e=V,(Mt===null?e.memoizedState:Mt.next)===null&&(e=e.alternate,A.H=e===null||e.memoizedState===null?Br:zu),t}function gi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return cn(t);if(t.$$typeof===et)return Lt(t)}throw Error(r(438,String(t)))}function fu(t){var e=null,l=V.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=V.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=vi(),V.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Un;return e.index++,l}function Re(t,e){return typeof e=="function"?e(t):e}function yi(t){var e=At();return du(e,rt,t)}function du(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var u=c=null,f=null,g=e,z=!1;do{var T=g.lane&-536870913;if(T!==g.lane?($&T)===T:(_e&T)===T){var y=g.revertLane;if(y===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),T===da&&(z=!0);else if((_e&y)===y){g=g.next,y===da&&(z=!0);continue}else T={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},f===null?(u=f=T,c=i):f=f.next=T,V.lanes|=y,rl|=y;T=g.action,ql&&l(i,T),i=g.hasEagerState?g.eagerState:l(i,T)}else y={lane:T,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},f===null?(u=f=y,c=i):f=f.next=y,V.lanes|=T,rl|=T;g=g.next}while(g!==null&&g!==e);if(f===null?c=i:f.next=u,!te(i,t.memoizedState)&&(jt=!0,z&&(l=ha,l!==null)))throw l;t.memoizedState=i,t.baseState=c,t.baseQueue=f,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function hu(t){var e=At(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do i=t(i,c.action),c=c.next;while(c!==n);te(i,e.memoizedState)||(jt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function er(t,e,l){var a=V,n=At(),i=P;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=e();var c=!te((rt||n).memoizedState,l);if(c&&(n.memoizedState=l,jt=!0),n=n.queue,vu(nr.bind(null,a,n,t),[t]),n.getSnapshot!==e||c||Mt!==null&&Mt.memoizedState.tag&1){if(a.flags|=2048,ba(9,{destroy:void 0},ar.bind(null,a,n,l,e),null),pt===null)throw Error(r(349));i||(_e&127)!==0||lr(a,e,l)}return l}function lr(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=V.updateQueue,e===null?(e=vi(),V.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function ar(t,e,l,a){e.value=l,e.getSnapshot=a,ir(e)&&cr(t)}function nr(t,e,l){return l(function(){ir(e)&&cr(t)})}function ir(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!te(t,l)}catch{return!0}}function cr(t){var e=Cl(t,2);e!==null&&Wt(e,t,2)}function pu(t){var e=Gt();if(typeof t=="function"){var l=t;if(t=l(),ql){$e(!0);try{l()}finally{$e(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:t},e}function ur(t,e,l,a){return t.baseState=l,du(t,rt,typeof a=="function"?a:Re)}function j0(t,e,l,a,n){if(Si(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};A.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,or(e,i)):(i.next=l.next,e.pending=l.next=i)}}function or(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=A.T,c={};A.T=c;try{var u=l(n,a),f=A.S;f!==null&&f(c,u),sr(t,e,u)}catch(g){mu(t,e,g)}finally{i!==null&&c.types!==null&&(i.types=c.types),A.T=i}}else try{i=l(n,a),sr(t,e,i)}catch(g){mu(t,e,g)}}function sr(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){rr(t,e,a)},function(a){return mu(t,e,a)}):rr(t,e,l)}function rr(t,e,l){e.status="fulfilled",e.value=l,fr(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,or(t,l)))}function mu(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,fr(e),e=e.next;while(e!==a)}t.action=null}function fr(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function dr(t,e){return e}function hr(t,e){if(P){var l=pt.formState;if(l!==null){t:{var a=V;if(P){if(gt){e:{for(var n=gt,i=pe;n.nodeType!==8;){if(!i){n=null;break e}if(n=ve(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){gt=ve(n.nextSibling),a=n.data==="F!";break t}}el(a)}a=!1}a&&(e=l[0])}}return l=Gt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},l.queue=a,l=Nr.bind(null,V,a),a.dispatch=l,a=pu(!1),i=Su.bind(null,V,!1,a.queue),a=Gt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=j0.bind(null,V,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function pr(t){var e=At();return mr(e,rt,t)}function mr(t,e,l){if(e=du(t,e,dr)[0],t=yi(Re)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=cn(e)}catch(c){throw c===pa?oi:c}else a=e;e=At();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(V.flags|=2048,ba(9,{destroy:void 0},D0.bind(null,n,l),null)),[a,i,t]}function D0(t,e){t.action=e}function vr(t){var e=At(),l=rt;if(l!==null)return mr(e,l,t);At(),e=e.memoizedState,l=At();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ba(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=V.updateQueue,e===null&&(e=vi(),V.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function gr(){return At().memoizedState}function bi(t,e,l,a){var n=Gt();V.flags|=t,n.memoizedState=ba(1|e,{destroy:void 0},l,a===void 0?null:a)}function xi(t,e,l,a){var n=At();a=a===void 0?null:a;var i=n.memoizedState.inst;rt!==null&&a!==null&&cu(a,rt.memoizedState.deps)?n.memoizedState=ba(e,i,l,a):(V.flags|=t,n.memoizedState=ba(1|e,i,l,a))}function yr(t,e){bi(8390656,8,t,e)}function vu(t,e){xi(2048,8,t,e)}function C0(t){V.flags|=4;var e=V.updateQueue;if(e===null)e=vi(),V.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function br(t){var e=At().memoizedState;return C0({ref:e,nextImpl:t}),function(){if((it&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function xr(t,e){return xi(4,2,t,e)}function Sr(t,e){return xi(4,4,t,e)}function zr(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wr(t,e,l){l=l!=null?l.concat([t]):null,xi(4,4,zr.bind(null,e,t),l)}function gu(){}function Ar(t,e){var l=At();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&cu(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Tr(t,e){var l=At();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&cu(e,a[1]))return a[0];if(a=t(),ql){$e(!0);try{t()}finally{$e(!1)}}return l.memoizedState=[a,e],a}function yu(t,e,l){return l===void 0||(_e&1073741824)!==0&&($&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=Mf(),V.lanes|=t,rl|=t,l)}function Er(t,e,l,a){return te(l,e)?l:va.current!==null?(t=yu(t,l,a),te(t,e)||(jt=!0),t):(_e&42)===0||(_e&1073741824)!==0&&($&261930)===0?(jt=!0,t.memoizedState=l):(t=Mf(),V.lanes|=t,rl|=t,e)}function Mr(t,e,l,a,n){var i=U.p;U.p=i!==0&&8>i?i:8;var c=A.T,u={};A.T=u,Su(t,!1,e,l);try{var f=n(),g=A.S;if(g!==null&&g(u,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var z=T0(f,a);un(t,e,z,ce(t))}else un(t,e,a,ce(t))}catch(T){un(t,e,{then:function(){},status:"rejected",reason:T},ce())}finally{U.p=i,c!==null&&u.types!==null&&(c.types=u.types),A.T=c}}function O0(){}function bu(t,e,l,a){if(t.tag!==5)throw Error(r(476));var n=jr(t).queue;Mr(t,n,e,G,l===null?O0:function(){return Dr(t),l(a)})}function jr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:G},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Dr(t){var e=jr(t);e.next===null&&(e=t.alternate.memoizedState),un(t,e.next.queue,{},ce())}function xu(){return Lt(An)}function Cr(){return At().memoizedState}function Or(){return At().memoizedState}function N0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ce();t=nl(l);var a=il(e,t,l);a!==null&&(Wt(a,e,l),en(a,e,l)),e={cache:Wc()},t.payload=e;return}e=e.return}}function U0(t,e,l){var a=ce();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Si(t)?Ur(e,l):(l=Lc(t,e,l,a),l!==null&&(Wt(l,t,a),Hr(l,e,a)))}function Nr(t,e,l){var a=ce();un(t,e,l,a)}function un(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Si(t))Ur(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var c=e.lastRenderedState,u=i(c,l);if(n.hasEagerState=!0,n.eagerState=u,te(u,c))return ei(t,e,n,0),pt===null&&ti(),!1}catch{}finally{}if(l=Lc(t,e,n,a),l!==null)return Wt(l,t,a),Hr(l,e,a),!0}return!1}function Su(t,e,l,a){if(a={lane:2,revertLane:Pu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Si(t)){if(e)throw Error(r(479))}else e=Lc(t,l,a,2),e!==null&&Wt(e,t,2)}function Si(t){var e=t.alternate;return t===V||e!==null&&e===V}function Ur(t,e){ga=pi=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Hr(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,qo(t,l)}}var on={readContext:Lt,use:gi,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St};on.useEffectEvent=St;var Br={readContext:Lt,use:gi,useCallback:function(t,e){return Gt().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:yr,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,bi(4194308,4,zr.bind(null,e,t),l)},useLayoutEffect:function(t,e){return bi(4194308,4,t,e)},useInsertionEffect:function(t,e){bi(4,2,t,e)},useMemo:function(t,e){var l=Gt();e=e===void 0?null:e;var a=t();if(ql){$e(!0);try{t()}finally{$e(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Gt();if(l!==void 0){var n=l(e);if(ql){$e(!0);try{l(e)}finally{$e(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=U0.bind(null,V,t),[a.memoizedState,t]},useRef:function(t){var e=Gt();return t={current:t},e.memoizedState=t},useState:function(t){t=pu(t);var e=t.queue,l=Nr.bind(null,V,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:gu,useDeferredValue:function(t,e){var l=Gt();return yu(l,t,e)},useTransition:function(){var t=pu(!1);return t=Mr.bind(null,V,t.queue,!0,!1),Gt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=V,n=Gt();if(P){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),pt===null)throw Error(r(349));($&127)!==0||lr(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,yr(nr.bind(null,a,i,t),[t]),a.flags|=2048,ba(9,{destroy:void 0},ar.bind(null,a,i,l,e),null),l},useId:function(){var t=Gt(),e=pt.identifierPrefix;if(P){var l=Ae,a=we;l=(a&~(1<<32-Pt(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=mi++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=E0++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:xu,useFormState:hr,useActionState:hr,useOptimistic:function(t){var e=Gt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Su.bind(null,V,!0,l),l.dispatch=e,[t,e]},useMemoCache:fu,useCacheRefresh:function(){return Gt().memoizedState=N0.bind(null,V)},useEffectEvent:function(t){var e=Gt(),l={impl:t};return e.memoizedState=l,function(){if((it&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},zu={readContext:Lt,use:gi,useCallback:Ar,useContext:Lt,useEffect:vu,useImperativeHandle:wr,useInsertionEffect:xr,useLayoutEffect:Sr,useMemo:Tr,useReducer:yi,useRef:gr,useState:function(){return yi(Re)},useDebugValue:gu,useDeferredValue:function(t,e){var l=At();return Er(l,rt.memoizedState,t,e)},useTransition:function(){var t=yi(Re)[0],e=At().memoizedState;return[typeof t=="boolean"?t:cn(t),e]},useSyncExternalStore:er,useId:Cr,useHostTransitionStatus:xu,useFormState:pr,useActionState:pr,useOptimistic:function(t,e){var l=At();return ur(l,rt,t,e)},useMemoCache:fu,useCacheRefresh:Or};zu.useEffectEvent=br;var _r={readContext:Lt,use:gi,useCallback:Ar,useContext:Lt,useEffect:vu,useImperativeHandle:wr,useInsertionEffect:xr,useLayoutEffect:Sr,useMemo:Tr,useReducer:hu,useRef:gr,useState:function(){return hu(Re)},useDebugValue:gu,useDeferredValue:function(t,e){var l=At();return rt===null?yu(l,t,e):Er(l,rt.memoizedState,t,e)},useTransition:function(){var t=hu(Re)[0],e=At().memoizedState;return[typeof t=="boolean"?t:cn(t),e]},useSyncExternalStore:er,useId:Cr,useHostTransitionStatus:xu,useFormState:vr,useActionState:vr,useOptimistic:function(t,e){var l=At();return rt!==null?ur(l,rt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:fu,useCacheRefresh:Or};_r.useEffectEvent=br;function wu(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:j({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Au={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ce(),n=nl(a);n.payload=e,l!=null&&(n.callback=l),e=il(t,n,a),e!==null&&(Wt(e,t,a),en(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ce(),n=nl(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=il(t,n,a),e!==null&&(Wt(e,t,a),en(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ce(),a=nl(l);a.tag=2,e!=null&&(a.callback=e),e=il(t,a,l),e!==null&&(Wt(e,t,l),en(e,t,l))}};function Rr(t,e,l,a,n,i,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,c):e.prototype&&e.prototype.isPureReactComponent?!Ka(l,a)||!Ka(n,i):!0}function Lr(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function Yl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=j({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function qr(t){Pn(t)}function Yr(t){console.error(t)}function Qr(t){Pn(t)}function zi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Gr(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Tu(t,e,l){return l=nl(l),l.tag=3,l.payload={element:null},l.callback=function(){zi(t,e)},l}function kr(t){return t=nl(t),t.tag=3,t}function Xr(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Gr(e,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){Gr(e,l,a),typeof n!="function"&&(fl===null?fl=new Set([this]):fl.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function H0(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&fa(e,l,n,!0),l=le.current,l!==null){switch(l.tag){case 31:case 13:return me===null?Hi():l.alternate===null&&zt===0&&(zt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===si?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),$u(t,a,n)),!1;case 22:return l.flags|=65536,a===si?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),$u(t,a,n)),!1}throw Error(r(435,l.tag))}return $u(t,a,n),Hi(),!1}if(P)return e=le.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Xc&&(t=Error(r(422),{cause:a}),$a(fe(t,l)))):(a!==Xc&&(e=Error(r(423),{cause:a}),$a(fe(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=fe(a,l),n=Tu(t.stateNode,a,n),eu(t,n),zt!==4&&(zt=2)),!1;var i=Error(r(520),{cause:a});if(i=fe(i,l),vn===null?vn=[i]:vn.push(i),zt!==4&&(zt=2),e===null)return!0;a=fe(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=Tu(l.stateNode,a,t),eu(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(fl===null||!fl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=kr(n),Xr(n,t,l,a),eu(l,n),!1}l=l.return}while(l!==null);return!1}var Eu=Error(r(461)),jt=!1;function qt(t,e,l,a){e.child=t===null?Js(e,null,l,a):Ll(e,t.child,l,a)}function Vr(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var c={};for(var u in a)u!=="ref"&&(c[u]=a[u])}else c=a;return Hl(e),a=uu(t,e,l,c,i,n),u=ou(),t!==null&&!jt?(su(t,e,n),Le(t,e,n)):(P&&u&&Gc(e),e.flags|=1,qt(t,e,a,n),e.child)}function Zr(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!qc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Kr(t,e,i,a,n)):(t=ai(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Hu(t,n)){var c=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ka,l(c,a)&&t.ref===e.ref)return Le(t,e,n)}return e.flags|=1,t=Ne(i,a),t.ref=e.ref,t.return=e,e.child=t}function Kr(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Ka(i,a)&&t.ref===e.ref)if(jt=!1,e.pendingProps=a=i,Hu(t,n))(t.flags&131072)!==0&&(jt=!0);else return e.lanes=t.lanes,Le(t,e,n)}return Mu(t,e,l,a,n)}function Jr(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return Wr(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ui(e,i!==null?i.cachePool:null),i!==null?Fs(e,i):au(),Is(e);else return a=e.lanes=536870912,Wr(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(ui(e,i.cachePool),Fs(e,i),ul(),e.memoizedState=null):(t!==null&&ui(e,null),au(),ul());return qt(t,e,n,l),e.child}function sn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Wr(t,e,l,a,n){var i=Fc();return i=i===null?null:{parent:Et._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&ui(e,null),au(),Is(e),t!==null&&fa(t,e,a,!0),e.childLanes=n,null}function wi(t,e){return e=Ti({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function $r(t,e,l){return Ll(e,t.child,null,l),t=wi(e,e.pendingProps),t.flags|=2,ae(e),e.memoizedState=null,t}function B0(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(P){if(a.mode==="hidden")return t=wi(e,a),e.lanes=536870912,sn(null,t);if(iu(e),(t=gt)?(t=sd(t,pe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Pe!==null?{id:we,overflow:Ae}:null,retryLane:536870912,hydrationErrors:null},l=Us(t),l.return=e,e.child=l,Rt=e,gt=null)):t=null,t===null)throw el(e);return e.lanes=536870912,null}return wi(e,a)}var i=t.memoizedState;if(i!==null){var c=i.dehydrated;if(iu(e),n)if(e.flags&256)e.flags&=-257,e=$r(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(r(558));else if(jt||fa(t,e,l,!1),n=(l&t.childLanes)!==0,jt||n){if(a=pt,a!==null&&(c=Yo(a,l),c!==0&&c!==i.retryLane))throw i.retryLane=c,Cl(t,c),Wt(a,t,c),Eu;Hi(),e=$r(t,e,l)}else t=i.treeContext,gt=ve(c.nextSibling),Rt=e,P=!0,tl=null,pe=!1,t!==null&&_s(e,t),e=wi(e,a),e.flags|=4096;return e}return t=Ne(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ai(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Mu(t,e,l,a,n){return Hl(e),l=uu(t,e,l,a,void 0,n),a=ou(),t!==null&&!jt?(su(t,e,n),Le(t,e,n)):(P&&a&&Gc(e),e.flags|=1,qt(t,e,l,n),e.child)}function Fr(t,e,l,a,n,i){return Hl(e),e.updateQueue=null,l=tr(e,a,l,n),Ps(t),a=ou(),t!==null&&!jt?(su(t,e,i),Le(t,e,i)):(P&&a&&Gc(e),e.flags|=1,qt(t,e,l,i),e.child)}function Ir(t,e,l,a,n){if(Hl(e),e.stateNode===null){var i=ua,c=l.contextType;typeof c=="object"&&c!==null&&(i=Lt(c)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Au,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Pc(e),c=l.contextType,i.context=typeof c=="object"&&c!==null?Lt(c):ua,i.state=e.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(wu(e,l,c,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Au.enqueueReplaceState(i,i.state,null),an(e,a,i,n),ln(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var u=e.memoizedProps,f=Yl(l,u);i.props=f;var g=i.context,z=l.contextType;c=ua,typeof z=="object"&&z!==null&&(c=Lt(z));var T=l.getDerivedStateFromProps;z=typeof T=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||g!==c)&&Lr(e,i,a,c),al=!1;var y=e.memoizedState;i.state=y,an(e,a,i,n),ln(),g=e.memoizedState,u||y!==g||al?(typeof T=="function"&&(wu(e,l,T,a),g=e.memoizedState),(f=al||Rr(e,l,f,a,y,g,c))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=g),i.props=a,i.state=g,i.context=c,a=f):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,tu(t,e),c=e.memoizedProps,z=Yl(l,c),i.props=z,T=e.pendingProps,y=i.context,g=l.contextType,f=ua,typeof g=="object"&&g!==null&&(f=Lt(g)),u=l.getDerivedStateFromProps,(g=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==T||y!==f)&&Lr(e,i,a,f),al=!1,y=e.memoizedState,i.state=y,an(e,a,i,n),ln();var S=e.memoizedState;c!==T||y!==S||al||t!==null&&t.dependencies!==null&&ii(t.dependencies)?(typeof u=="function"&&(wu(e,l,u,a),S=e.memoizedState),(z=al||Rr(e,l,z,a,y,S,f)||t!==null&&t.dependencies!==null&&ii(t.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,S,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,S,f)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=S),i.props=a,i.state=S,i.context=f,a=z):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Ai(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Ll(e,t.child,null,n),e.child=Ll(e,null,l,n)):qt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Le(t,e,n),t}function Pr(t,e,l,a){return Nl(),e.flags|=256,qt(t,e,l,a),e.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Du(t){return{baseLanes:t,cachePool:Gs()}}function Cu(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=ie),t}function tf(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,c;if((c=i)||(c=t!==null&&t.memoizedState===null?!1:(wt.current&2)!==0),c&&(n=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(P){if(n?cl(e):ul(),(t=gt)?(t=sd(t,pe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Pe!==null?{id:we,overflow:Ae}:null,retryLane:536870912,hydrationErrors:null},l=Us(t),l.return=e,e.child=l,Rt=e,gt=null)):t=null,t===null)throw el(e);return ho(t)?e.lanes=32:e.lanes=536870912,null}var u=a.children;return a=a.fallback,n?(ul(),n=e.mode,u=Ti({mode:"hidden",children:u},n),a=Ol(a,n,l,null),u.return=e,a.return=e,u.sibling=a,e.child=u,a=e.child,a.memoizedState=Du(l),a.childLanes=Cu(t,c,l),e.memoizedState=ju,sn(null,a)):(cl(e),Ou(e,u))}var f=t.memoizedState;if(f!==null&&(u=f.dehydrated,u!==null)){if(i)e.flags&256?(cl(e),e.flags&=-257,e=Nu(t,e,l)):e.memoizedState!==null?(ul(),e.child=t.child,e.flags|=128,e=null):(ul(),u=a.fallback,n=e.mode,a=Ti({mode:"visible",children:a.children},n),u=Ol(u,n,l,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,Ll(e,t.child,null,l),a=e.child,a.memoizedState=Du(l),a.childLanes=Cu(t,c,l),e.memoizedState=ju,e=sn(null,a));else if(cl(e),ho(u)){if(c=u.nextSibling&&u.nextSibling.dataset,c)var g=c.dgst;c=g,a=Error(r(419)),a.stack="",a.digest=c,$a({value:a,source:null,stack:null}),e=Nu(t,e,l)}else if(jt||fa(t,e,l,!1),c=(l&t.childLanes)!==0,jt||c){if(c=pt,c!==null&&(a=Yo(c,l),a!==0&&a!==f.retryLane))throw f.retryLane=a,Cl(t,a),Wt(c,t,a),Eu;fo(u)||Hi(),e=Nu(t,e,l)}else fo(u)?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,gt=ve(u.nextSibling),Rt=e,P=!0,tl=null,pe=!1,t!==null&&_s(e,t),e=Ou(e,a.children),e.flags|=4096);return e}return n?(ul(),u=a.fallback,n=e.mode,f=t.child,g=f.sibling,a=Ne(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,g!==null?u=Ne(g,u):(u=Ol(u,n,l,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,sn(null,a),a=e.child,u=t.child.memoizedState,u===null?u=Du(l):(n=u.cachePool,n!==null?(f=Et._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Gs(),u={baseLanes:u.baseLanes|l,cachePool:n}),a.memoizedState=u,a.childLanes=Cu(t,c,l),e.memoizedState=ju,sn(t.child,a)):(cl(e),l=t.child,t=l.sibling,l=Ne(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=l,e.memoizedState=null,l)}function Ou(t,e){return e=Ti({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ti(t,e){return t=ee(22,t,null,e),t.lanes=0,t}function Nu(t,e,l){return Ll(e,t.child,null,l),t=Ou(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ef(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Kc(t.return,e,l)}function Uu(t,e,l,a,n,i){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=n,c.treeForkCount=i)}function lf(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var c=wt.current,u=(c&2)!==0;if(u?(c=c&1|2,e.flags|=128):c&=1,ct(wt,c),qt(t,e,a,l),a=P?Wa:0,!u&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ef(t,l,e);else if(t.tag===19)ef(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&hi(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),Uu(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&hi(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}Uu(e,!0,l,null,i,a);break;case"together":Uu(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Le(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),rl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(fa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=Ne(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ne(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Hu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ii(t)))}function _0(t,e,l){switch(e.tag){case 3:_n(e,e.stateNode.containerInfo),ll(e,Et,t.memoizedState.cache),Nl();break;case 27:case 5:nc(e);break;case 4:_n(e,e.stateNode.containerInfo);break;case 10:ll(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,iu(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(cl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?tf(t,e,l):(cl(e),t=Le(t,e,l),t!==null?t.sibling:null);cl(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(fa(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return lf(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ct(wt,wt.current),a)break;return null;case 22:return e.lanes=0,Jr(t,e,l,e.pendingProps);case 24:ll(e,Et,t.memoizedState.cache)}return Le(t,e,l)}function af(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)jt=!0;else{if(!Hu(t,l)&&(e.flags&128)===0)return jt=!1,_0(t,e,l);jt=(t.flags&131072)!==0}else jt=!1,P&&(e.flags&1048576)!==0&&Bs(e,Wa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=_l(e.elementType),e.type=t,typeof t=="function")qc(t)?(a=Yl(t,a),e.tag=1,e=Ir(null,e,t,a,l)):(e.tag=0,e=Mu(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===ht){e.tag=11,e=Vr(null,e,t,a,l);break t}else if(n===ye){e.tag=14,e=Zr(null,e,t,a,l);break t}}throw e=Ha(t)||t,Error(r(306,e,""))}}return e;case 0:return Mu(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Yl(a,e.pendingProps),Ir(t,e,a,n,l);case 3:t:{if(_n(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,tu(t,e),an(e,a,null,l);var c=e.memoizedState;if(a=c.cache,ll(e,Et,a),a!==i.cache&&Jc(e,[Et],l,!0),ln(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Pr(t,e,a,l);break t}else if(a!==n){n=fe(Error(r(424)),e),$a(n),e=Pr(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gt=ve(t.firstChild),Rt=e,P=!0,tl=null,pe=!0,l=Js(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Nl(),a===n){e=Le(t,e,l);break t}qt(t,e,a,l)}e=e.child}return e;case 26:return Ai(t,e),t===null?(l=md(e.type,null,e.pendingProps,null))?e.memoizedState=l:P||(l=e.type,t=e.pendingProps,a=Qi(We.current).createElement(l),a[_t]=e,a[kt]=t,Yt(a,l,t),Ut(a),e.stateNode=a):e.memoizedState=md(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return nc(e),t===null&&P&&(a=e.stateNode=dd(e.type,e.pendingProps,We.current),Rt=e,pe=!0,n=gt,ml(e.type)?(po=n,gt=ve(a.firstChild)):gt=n),qt(t,e,e.pendingProps.children,l),Ai(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&P&&((n=a=gt)&&(a=dp(a,e.type,e.pendingProps,pe),a!==null?(e.stateNode=a,Rt=e,gt=ve(a.firstChild),pe=!1,n=!0):n=!1),n||el(e)),nc(e),n=e.type,i=e.pendingProps,c=t!==null?t.memoizedProps:null,a=i.children,oo(n,i)?a=null:c!==null&&oo(n,c)&&(e.flags|=32),e.memoizedState!==null&&(n=uu(t,e,M0,null,null,l),An._currentValue=n),Ai(t,e),qt(t,e,a,l),e.child;case 6:return t===null&&P&&((t=l=gt)&&(l=hp(l,e.pendingProps,pe),l!==null?(e.stateNode=l,Rt=e,gt=null,t=!0):t=!1),t||el(e)),null;case 13:return tf(t,e,l);case 4:return _n(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Ll(e,null,a,l):qt(t,e,a,l),e.child;case 11:return Vr(t,e,e.type,e.pendingProps,l);case 7:return qt(t,e,e.pendingProps,l),e.child;case 8:return qt(t,e,e.pendingProps.children,l),e.child;case 12:return qt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,ll(e,e.type,a.value),qt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Hl(e),n=Lt(n),a=a(n),e.flags|=1,qt(t,e,a,l),e.child;case 14:return Zr(t,e,e.type,e.pendingProps,l);case 15:return Kr(t,e,e.type,e.pendingProps,l);case 19:return lf(t,e,l);case 31:return B0(t,e,l);case 22:return Jr(t,e,l,e.pendingProps);case 24:return Hl(e),a=Lt(Et),t===null?(n=Fc(),n===null&&(n=pt,i=Wc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Pc(e),ll(e,Et,n)):((t.lanes&l)!==0&&(tu(t,e),an(e,null,null,l),ln()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ll(e,Et,a)):(a=i.cache,ll(e,Et,a),a!==n.cache&&Jc(e,[Et],l,!0))),qt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function qe(t){t.flags|=4}function Bu(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Of())t.flags|=8192;else throw Rl=si,Ic}else t.flags&=-16777217}function nf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xd(e))if(Of())t.flags|=8192;else throw Rl=si,Ic}function Ei(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ro():536870912,t.lanes|=e,wa|=e)}function rn(t,e){if(!P)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function R0(t,e,l){var a=e.pendingProps;switch(kc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return yt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Be(Et),Kl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ra(e)?qe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Vc())),yt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(qe(e),i!==null?(yt(e),nf(e,i)):(yt(e),Bu(e,n,null,a,l))):i?i!==t.memoizedState?(qe(e),yt(e),nf(e,i)):(yt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&qe(e),yt(e),Bu(e,n,t,a,l)),null;case 27:if(Rn(e),l=We.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&qe(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return yt(e),null}t=Nt.current,ra(e)?Rs(e):(t=dd(n,a,l),e.stateNode=t,qe(e))}return yt(e),null;case 5:if(Rn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&qe(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return yt(e),null}if(i=Nt.current,ra(e))Rs(e);else{var c=Qi(We.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(n,{is:a.is}):c.createElement(n)}}i[_t]=e,i[kt]=a;t:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break t;for(;c.sibling===null;){if(c.return===null||c.return===e)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=i;t:switch(Yt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&qe(e)}}return yt(e),Bu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&qe(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=We.current,ra(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Rt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[_t]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||ed(t.nodeValue,l)),t||el(e,!0)}else t=Qi(t).createTextNode(a),t[_t]=e,e.stateNode=t}return yt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=ra(e),l!==null){if(t===null){if(!a)throw Error(r(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[_t]=e}else Nl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;yt(e),t=!1}else l=Vc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(ae(e),e):(ae(e),null);if((e.flags&128)!==0)throw Error(r(558))}return yt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ra(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(r(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[_t]=e}else Nl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;yt(e),n=!1}else n=Vc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ae(e),e):(ae(e),null)}return ae(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Ei(e,e.updateQueue),yt(e),null);case 4:return Kl(),t===null&&ao(e.stateNode.containerInfo),yt(e),null;case 10:return Be(e.type),yt(e),null;case 19:if(xt(wt),a=e.memoizedState,a===null)return yt(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)rn(a,!1);else{if(zt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=hi(t),i!==null){for(e.flags|=128,rn(a,!1),t=i.updateQueue,e.updateQueue=t,Ei(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Ns(l,t),l=l.sibling;return ct(wt,wt.current&1|2),P&&Ue(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Ft()>Oi&&(e.flags|=128,n=!0,rn(a,!1),e.lanes=4194304)}else{if(!n)if(t=hi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Ei(e,t),rn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!P)return yt(e),null}else 2*Ft()-a.renderingStartTime>Oi&&l!==536870912&&(e.flags|=128,n=!0,rn(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ft(),t.sibling=null,l=wt.current,ct(wt,n?l&1|2:l&1),P&&Ue(e,a.treeForkCount),t):(yt(e),null);case 22:case 23:return ae(e),nu(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),l=e.updateQueue,l!==null&&Ei(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&xt(Bl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Be(Et),yt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function L0(t,e){switch(kc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Be(Et),Kl(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Rn(e),null;case 31:if(e.memoizedState!==null){if(ae(e),e.alternate===null)throw Error(r(340));Nl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ae(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Nl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(wt),null;case 4:return Kl(),null;case 10:return Be(e.type),null;case 22:case 23:return ae(e),nu(),t!==null&&xt(Bl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Be(Et),null;case 25:return null;default:return null}}function cf(t,e){switch(kc(e),e.tag){case 3:Be(Et),Kl();break;case 26:case 27:case 5:Rn(e);break;case 4:Kl();break;case 31:e.memoizedState!==null&&ae(e);break;case 13:ae(e);break;case 19:xt(wt);break;case 10:Be(e.type);break;case 22:case 23:ae(e),nu(),t!==null&&xt(Bl);break;case 24:Be(Et)}}function fn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,c=l.inst;a=i(),c.destroy=a}l=l.next}while(l!==n)}}catch(u){ot(e,e.return,u)}}function ol(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var c=a.inst,u=c.destroy;if(u!==void 0){c.destroy=void 0,n=e;var f=l,g=u;try{g()}catch(z){ot(n,f,z)}}}a=a.next}while(a!==i)}}catch(z){ot(e,e.return,z)}}function uf(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{$s(e,l)}catch(a){ot(t,t.return,a)}}}function of(t,e,l){l.props=Yl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){ot(t,e,a)}}function dn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){ot(t,e,n)}}function Te(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ot(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ot(t,e,n)}else l.current=null}function sf(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ot(t,t.return,n)}}function _u(t,e,l){try{var a=t.stateNode;cp(a,t.type,l,e),a[kt]=e}catch(n){ot(t,t.return,n)}}function rf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ml(t.type)||t.tag===4}function Ru(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||rf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ml(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lu(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ce));else if(a!==4&&(a===27&&ml(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Lu(t,e,l),t=t.sibling;t!==null;)Lu(t,e,l),t=t.sibling}function Mi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&ml(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Mi(t,e,l),t=t.sibling;t!==null;)Mi(t,e,l),t=t.sibling}function ff(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Yt(e,a,l),e[_t]=t,e[kt]=l}catch(i){ot(t,t.return,i)}}var Ye=!1,Dt=!1,qu=!1,df=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function q0(t,e){if(t=t.containerInfo,co=Ji,t=ws(t),Nc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var c=0,u=-1,f=-1,g=0,z=0,T=t,y=null;e:for(;;){for(var S;T!==l||n!==0&&T.nodeType!==3||(u=c+n),T!==i||a!==0&&T.nodeType!==3||(f=c+a),T.nodeType===3&&(c+=T.nodeValue.length),(S=T.firstChild)!==null;)y=T,T=S;for(;;){if(T===t)break e;if(y===l&&++g===n&&(u=c),y===i&&++z===a&&(f=c),(S=T.nextSibling)!==null)break;T=y,y=T.parentNode}T=S}l=u===-1||f===-1?null:{start:u,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(uo={focusedElem:t,selectionRange:l},Ji=!1,Ht=e;Ht!==null;)if(e=Ht,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ht=t;else for(;Ht!==null;){switch(e=Ht,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var H=Yl(l.type,n);t=a.getSnapshotBeforeUpdate(H,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(q){ot(l,l.return,q)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)ro(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ro(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Ht=t;break}Ht=e.return}}function hf(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Ge(t,l),a&4&&fn(5,l);break;case 1:if(Ge(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(c){ot(l,l.return,c)}else{var n=Yl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){ot(l,l.return,c)}}a&64&&uf(l),a&512&&dn(l,l.return);break;case 3:if(Ge(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{$s(t,e)}catch(c){ot(l,l.return,c)}}break;case 27:e===null&&a&4&&ff(l);case 26:case 5:Ge(t,l),e===null&&a&4&&sf(l),a&512&&dn(l,l.return);break;case 12:Ge(t,l);break;case 31:Ge(t,l),a&4&&vf(t,l);break;case 13:Ge(t,l),a&4&&gf(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=J0.bind(null,l),pp(t,l))));break;case 22:if(a=l.memoizedState!==null||Ye,!a){e=e!==null&&e.memoizedState!==null||Dt,n=Ye;var i=Dt;Ye=a,(Dt=e)&&!i?ke(t,l,(l.subtreeFlags&8772)!==0):Ge(t,l),Ye=n,Dt=i}break;case 30:break;default:Ge(t,l)}}function pf(t){var e=t.alternate;e!==null&&(t.alternate=null,pf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&mc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var bt=null,Vt=!1;function Qe(t,e,l){for(l=l.child;l!==null;)mf(t,e,l),l=l.sibling}function mf(t,e,l){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Ba,l)}catch{}switch(l.tag){case 26:Dt||Te(l,e),Qe(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Dt||Te(l,e);var a=bt,n=Vt;ml(l.type)&&(bt=l.stateNode,Vt=!1),Qe(t,e,l),Sn(l.stateNode),bt=a,Vt=n;break;case 5:Dt||Te(l,e);case 6:if(a=bt,n=Vt,bt=null,Qe(t,e,l),bt=a,Vt=n,bt!==null)if(Vt)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(l.stateNode)}catch(i){ot(l,e,i)}else try{bt.removeChild(l.stateNode)}catch(i){ot(l,e,i)}break;case 18:bt!==null&&(Vt?(t=bt,ud(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Oa(t)):ud(bt,l.stateNode));break;case 4:a=bt,n=Vt,bt=l.stateNode.containerInfo,Vt=!0,Qe(t,e,l),bt=a,Vt=n;break;case 0:case 11:case 14:case 15:ol(2,l,e),Dt||ol(4,l,e),Qe(t,e,l);break;case 1:Dt||(Te(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&of(l,e,a)),Qe(t,e,l);break;case 21:Qe(t,e,l);break;case 22:Dt=(a=Dt)||l.memoizedState!==null,Qe(t,e,l),Dt=a;break;default:Qe(t,e,l)}}function vf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Oa(t)}catch(l){ot(e,e.return,l)}}}function gf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Oa(t)}catch(l){ot(e,e.return,l)}}function Y0(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new df),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new df),e;default:throw Error(r(435,t.tag))}}function ji(t,e){var l=Y0(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=W0.bind(null,t,a);a.then(n,n)}})}function Zt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,c=e,u=c;t:for(;u!==null;){switch(u.tag){case 27:if(ml(u.type)){bt=u.stateNode,Vt=!1;break t}break;case 5:bt=u.stateNode,Vt=!1;break t;case 3:case 4:bt=u.stateNode.containerInfo,Vt=!0;break t}u=u.return}if(bt===null)throw Error(r(160));mf(i,c,n),bt=null,Vt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)yf(e,t),e=e.sibling}var xe=null;function yf(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zt(e,t),Kt(t),a&4&&(ol(3,t,t.return),fn(3,t),ol(5,t,t.return));break;case 1:Zt(e,t),Kt(t),a&512&&(Dt||l===null||Te(l,l.return)),a&64&&Ye&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=xe;if(Zt(e,t),Kt(t),a&512&&(Dt||l===null||Te(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[La]||i[_t]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Yt(i,a,l),i[_t]=t,Ut(i),a=i;break t;case"link":var c=yd("link","href",n).get(a+(l.href||""));if(c){for(var u=0;u<c.length;u++)if(i=c[u],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(u,1);break e}}i=n.createElement(a),Yt(i,a,l),n.head.appendChild(i);break;case"meta":if(c=yd("meta","content",n).get(a+(l.content||""))){for(u=0;u<c.length;u++)if(i=c[u],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(u,1);break e}}i=n.createElement(a),Yt(i,a,l),n.head.appendChild(i);break;default:throw Error(r(468,a))}i[_t]=t,Ut(i),a=i}t.stateNode=a}else bd(n,t.type,t.stateNode);else t.stateNode=gd(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?bd(n,t.type,t.stateNode):gd(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&_u(t,t.memoizedProps,l.memoizedProps)}break;case 27:Zt(e,t),Kt(t),a&512&&(Dt||l===null||Te(l,l.return)),l!==null&&a&4&&_u(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Zt(e,t),Kt(t),a&512&&(Dt||l===null||Te(l,l.return)),t.flags&32){n=t.stateNode;try{ta(n,"")}catch(H){ot(t,t.return,H)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,_u(t,n,l!==null?l.memoizedProps:n)),a&1024&&(qu=!0);break;case 6:if(Zt(e,t),Kt(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(H){ot(t,t.return,H)}}break;case 3:if(Xi=null,n=xe,xe=Gi(e.containerInfo),Zt(e,t),xe=n,Kt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Oa(e.containerInfo)}catch(H){ot(t,t.return,H)}qu&&(qu=!1,bf(t));break;case 4:a=xe,xe=Gi(t.stateNode.containerInfo),Zt(e,t),Kt(t),xe=a;break;case 12:Zt(e,t),Kt(t);break;case 31:Zt(e,t),Kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ji(t,a)));break;case 13:Zt(e,t),Kt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ci=Ft()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ji(t,a)));break;case 22:n=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,g=Ye,z=Dt;if(Ye=g||n,Dt=z||f,Zt(e,t),Dt=z,Ye=g,Kt(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||f||Ye||Dt||Ql(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){f=l=e;try{if(i=f.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{u=f.stateNode;var T=f.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(H){ot(f,f.return,H)}}}else if(e.tag===6){if(l===null){f=e;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(H){ot(f,f.return,H)}}}else if(e.tag===18){if(l===null){f=e;try{var S=f.stateNode;n?od(S,!0):od(f.stateNode,!1)}catch(H){ot(f,f.return,H)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,ji(t,l))));break;case 19:Zt(e,t),Kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ji(t,a)));break;case 30:break;case 21:break;default:Zt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(rf(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var n=l.stateNode,i=Ru(t);Mi(t,i,n);break;case 5:var c=l.stateNode;l.flags&32&&(ta(c,""),l.flags&=-33);var u=Ru(t);Mi(t,u,c);break;case 3:case 4:var f=l.stateNode.containerInfo,g=Ru(t);Lu(t,g,f);break;default:throw Error(r(161))}}catch(z){ot(t,t.return,z)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;bf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ge(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)hf(t,e.alternate,e),e=e.sibling}function Ql(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ol(4,e,e.return),Ql(e);break;case 1:Te(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&of(e,e.return,l),Ql(e);break;case 27:Sn(e.stateNode);case 26:case 5:Te(e,e.return),Ql(e);break;case 22:e.memoizedState===null&&Ql(e);break;case 30:Ql(e);break;default:Ql(e)}t=t.sibling}}function ke(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,c=i.flags;switch(i.tag){case 0:case 11:case 15:ke(n,i,l),fn(4,i);break;case 1:if(ke(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){ot(a,a.return,g)}if(a=i,n=a.updateQueue,n!==null){var u=a.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Ws(f[n],u)}catch(g){ot(a,a.return,g)}}l&&c&64&&uf(i),dn(i,i.return);break;case 27:ff(i);case 26:case 5:ke(n,i,l),l&&a===null&&c&4&&sf(i),dn(i,i.return);break;case 12:ke(n,i,l);break;case 31:ke(n,i,l),l&&c&4&&vf(n,i);break;case 13:ke(n,i,l),l&&c&4&&gf(n,i);break;case 22:i.memoizedState===null&&ke(n,i,l),dn(i,i.return);break;case 30:break;default:ke(n,i,l)}e=e.sibling}}function Yu(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Fa(l))}function Qu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Fa(t))}function Se(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xf(t,e,l,a),e=e.sibling}function xf(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Se(t,e,l,a),n&2048&&fn(9,e);break;case 1:Se(t,e,l,a);break;case 3:Se(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Fa(t)));break;case 12:if(n&2048){Se(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,c=i.id,u=i.onPostCommit;typeof u=="function"&&u(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){ot(e,e.return,f)}}else Se(t,e,l,a);break;case 31:Se(t,e,l,a);break;case 13:Se(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,c=e.alternate,e.memoizedState!==null?i._visibility&2?Se(t,e,l,a):hn(t,e):i._visibility&2?Se(t,e,l,a):(i._visibility|=2,xa(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Yu(c,e);break;case 24:Se(t,e,l,a),n&2048&&Qu(e.alternate,e);break;default:Se(t,e,l,a)}}function xa(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,c=e,u=l,f=a,g=c.flags;switch(c.tag){case 0:case 11:case 15:xa(i,c,u,f,n),fn(8,c);break;case 23:break;case 22:var z=c.stateNode;c.memoizedState!==null?z._visibility&2?xa(i,c,u,f,n):hn(i,c):(z._visibility|=2,xa(i,c,u,f,n)),n&&g&2048&&Yu(c.alternate,c);break;case 24:xa(i,c,u,f,n),n&&g&2048&&Qu(c.alternate,c);break;default:xa(i,c,u,f,n)}e=e.sibling}}function hn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:hn(l,a),n&2048&&Yu(a.alternate,a);break;case 24:hn(l,a),n&2048&&Qu(a.alternate,a);break;default:hn(l,a)}e=e.sibling}}var pn=8192;function Sa(t,e,l){if(t.subtreeFlags&pn)for(t=t.child;t!==null;)Sf(t,e,l),t=t.sibling}function Sf(t,e,l){switch(t.tag){case 26:Sa(t,e,l),t.flags&pn&&t.memoizedState!==null&&Ep(l,xe,t.memoizedState,t.memoizedProps);break;case 5:Sa(t,e,l);break;case 3:case 4:var a=xe;xe=Gi(t.stateNode.containerInfo),Sa(t,e,l),xe=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=pn,pn=16777216,Sa(t,e,l),pn=a):Sa(t,e,l));break;default:Sa(t,e,l)}}function zf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function mn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ht=a,Af(a,t)}zf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wf(t),t=t.sibling}function wf(t){switch(t.tag){case 0:case 11:case 15:mn(t),t.flags&2048&&ol(9,t,t.return);break;case 3:mn(t);break;case 12:mn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Di(t)):mn(t);break;default:mn(t)}}function Di(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ht=a,Af(a,t)}zf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ol(8,e,e.return),Di(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Di(e));break;default:Di(e)}t=t.sibling}}function Af(t,e){for(;Ht!==null;){var l=Ht;switch(l.tag){case 0:case 11:case 15:ol(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Fa(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ht=a;else t:for(l=t;Ht!==null;){a=Ht;var n=a.sibling,i=a.return;if(pf(a),a===l){Ht=null;break t}if(n!==null){n.return=i,Ht=n;break t}Ht=i}}}var Q0={getCacheForType:function(t){var e=Lt(Et),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Lt(Et).controller.signal}},G0=typeof WeakMap=="function"?WeakMap:Map,it=0,pt=null,J=null,$=0,ut=0,ne=null,sl=!1,za=!1,Gu=!1,Xe=0,zt=0,rl=0,Gl=0,ku=0,ie=0,wa=0,vn=null,Jt=null,Xu=!1,Ci=0,Tf=0,Oi=1/0,Ni=null,fl=null,Ct=0,dl=null,Aa=null,Ve=0,Vu=0,Zu=null,Ef=null,gn=0,Ku=null;function ce(){return(it&2)!==0&&$!==0?$&-$:A.T!==null?Pu():Qo()}function Mf(){if(ie===0)if(($&536870912)===0||P){var t=Yn;Yn<<=1,(Yn&3932160)===0&&(Yn=262144),ie=t}else ie=536870912;return t=le.current,t!==null&&(t.flags|=32),ie}function Wt(t,e,l){(t===pt&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(Ta(t,0),hl(t,$,ie,!1)),Ra(t,l),((it&2)===0||t!==pt)&&(t===pt&&((it&2)===0&&(Gl|=l),zt===4&&hl(t,$,ie,!1)),Ee(t))}function jf(t,e,l){if((it&6)!==0)throw Error(r(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||_a(t,e),n=a?V0(t,e):Wu(t,e,!0),i=a;do{if(n===0){za&&!a&&hl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!k0(l)){n=Wu(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var u=t;n=vn;var f=u.current.memoizedState.isDehydrated;if(f&&(Ta(u,c).flags|=256),c=Wu(u,c,!1),c!==2){if(Gu&&!f){u.errorRecoveryDisabledLanes|=i,Gl|=i,n=4;break t}i=Jt,Jt=n,i!==null&&(Jt===null?Jt=i:Jt.push.apply(Jt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Ta(t,0),hl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:hl(a,e,ie,!sl);break t;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(n=Ci+300-Ft(),10<n)){if(hl(a,e,ie,!sl),Gn(a,0,!0)!==0)break t;Ve=e,a.timeoutHandle=id(Df.bind(null,a,l,Jt,Ni,Xu,e,ie,Gl,wa,sl,i,"Throttled",-0,0),n);break t}Df(a,l,Jt,Ni,Xu,e,ie,Gl,wa,sl,i,null,-0,0)}}break}while(!0);Ee(t)}function Df(t,e,l,a,n,i,c,u,f,g,z,T,y,S){if(t.timeoutHandle=-1,T=e.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ce},Sf(e,i,T);var H=(i&62914560)===i?Ci-Ft():(i&4194048)===i?Tf-Ft():0;if(H=Mp(T,H),H!==null){Ve=i,t.cancelPendingCommit=H(Rf.bind(null,t,e,i,l,a,n,c,u,f,z,T,null,y,S)),hl(t,i,c,!g);return}}Rf(t,e,i,l,a,n,c,u,f)}function k0(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!te(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hl(t,e,l,a){e&=~ku,e&=~Gl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-Pt(n),c=1<<i;a[i]=-1,n&=~c}l!==0&&Lo(t,l,e)}function Ui(){return(it&6)===0?(yn(0),!1):!0}function Ju(){if(J!==null){if(ut===0)var t=J.return;else t=J,He=Ul=null,ru(t),ma=null,Pa=0,t=J;for(;t!==null;)cf(t.alternate,t),t=t.return;J=null}}function Ta(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,sp(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Ve=0,Ju(),pt=t,J=l=Ne(t.current,null),$=e,ut=0,ne=null,sl=!1,za=_a(t,e),Gu=!1,wa=ie=ku=Gl=rl=zt=0,Jt=vn=null,Xu=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-Pt(a),i=1<<n;e|=t[n],a&=~i}return Xe=e,ti(),l}function Cf(t,e){V=null,A.H=on,e===pa||e===oi?(e=Vs(),ut=3):e===Ic?(e=Vs(),ut=4):ut=e===Eu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ne=e,J===null&&(zt=1,zi(t,fe(e,t.current)))}function Of(){var t=le.current;return t===null?!0:($&4194048)===$?me===null:($&62914560)===$||($&536870912)!==0?t===me:!1}function Nf(){var t=A.H;return A.H=on,t===null?on:t}function Uf(){var t=A.A;return A.A=Q0,t}function Hi(){zt=4,sl||($&4194048)!==$&&le.current!==null||(za=!0),(rl&134217727)===0&&(Gl&134217727)===0||pt===null||hl(pt,$,ie,!1)}function Wu(t,e,l){var a=it;it|=2;var n=Nf(),i=Uf();(pt!==t||$!==e)&&(Ni=null,Ta(t,e)),e=!1;var c=zt;t:do try{if(ut!==0&&J!==null){var u=J,f=ne;switch(ut){case 8:Ju(),c=6;break t;case 3:case 2:case 9:case 6:le.current===null&&(e=!0);var g=ut;if(ut=0,ne=null,Ea(t,u,f,g),l&&za){c=0;break t}break;default:g=ut,ut=0,ne=null,Ea(t,u,f,g)}}X0(),c=zt;break}catch(z){Cf(t,z)}while(!0);return e&&t.shellSuspendCounter++,He=Ul=null,it=a,A.H=n,A.A=i,J===null&&(pt=null,$=0,ti()),c}function X0(){for(;J!==null;)Hf(J)}function V0(t,e){var l=it;it|=2;var a=Nf(),n=Uf();pt!==t||$!==e?(Ni=null,Oi=Ft()+500,Ta(t,e)):za=_a(t,e);t:do try{if(ut!==0&&J!==null){e=J;var i=ne;e:switch(ut){case 1:ut=0,ne=null,Ea(t,e,i,1);break;case 2:case 9:if(ks(i)){ut=0,ne=null,Bf(e);break}e=function(){ut!==2&&ut!==9||pt!==t||(ut=7),Ee(t)},i.then(e,e);break t;case 3:ut=7;break t;case 4:ut=5;break t;case 7:ks(i)?(ut=0,ne=null,Bf(e)):(ut=0,ne=null,Ea(t,e,i,7));break;case 5:var c=null;switch(J.tag){case 26:c=J.memoizedState;case 5:case 27:var u=J;if(c?xd(c):u.stateNode.complete){ut=0,ne=null;var f=u.sibling;if(f!==null)J=f;else{var g=u.return;g!==null?(J=g,Bi(g)):J=null}break e}}ut=0,ne=null,Ea(t,e,i,5);break;case 6:ut=0,ne=null,Ea(t,e,i,6);break;case 8:Ju(),zt=6;break t;default:throw Error(r(462))}}Z0();break}catch(z){Cf(t,z)}while(!0);return He=Ul=null,A.H=a,A.A=n,it=l,J!==null?0:(pt=null,$=0,ti(),zt)}function Z0(){for(;J!==null&&!mh();)Hf(J)}function Hf(t){var e=af(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?Bi(t):J=e}function Bf(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Fr(l,e,e.pendingProps,e.type,void 0,$);break;case 11:e=Fr(l,e,e.pendingProps,e.type.render,e.ref,$);break;case 5:ru(e);default:cf(l,e),e=J=Ns(e,Xe),e=af(l,e,Xe)}t.memoizedProps=t.pendingProps,e===null?Bi(t):J=e}function Ea(t,e,l,a){He=Ul=null,ru(e),ma=null,Pa=0;var n=e.return;try{if(H0(t,n,e,l,$)){zt=1,zi(t,fe(l,t.current)),J=null;return}}catch(i){if(n!==null)throw J=n,i;zt=1,zi(t,fe(l,t.current)),J=null;return}e.flags&32768?(P||a===1?t=!0:za||($&536870912)!==0?t=!1:(sl=t=!0,(a===2||a===9||a===3||a===6)&&(a=le.current,a!==null&&a.tag===13&&(a.flags|=16384))),_f(e,t)):Bi(e)}function Bi(t){var e=t;do{if((e.flags&32768)!==0){_f(e,sl);return}t=e.return;var l=R0(e.alternate,e,Xe);if(l!==null){J=l;return}if(e=e.sibling,e!==null){J=e;return}J=e=t}while(e!==null);zt===0&&(zt=5)}function _f(t,e){do{var l=L0(t.alternate,t);if(l!==null){l.flags&=32767,J=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){J=t;return}J=t=l}while(t!==null);zt=6,J=null}function Rf(t,e,l,a,n,i,c,u,f){t.cancelPendingCommit=null;do _i();while(Ct!==0);if((it&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Rc,Th(t,l,i,c,u,f),t===pt&&(J=pt=null,$=0),Aa=e,dl=t,Ve=l,Vu=i,Zu=n,Ef=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$0(Ln,function(){return Gf(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=A.T,A.T=null,n=U.p,U.p=2,c=it,it|=4;try{q0(t,e,l)}finally{it=c,U.p=n,A.T=a}}Ct=1,Lf(),qf(),Yf()}}function Lf(){if(Ct===1){Ct=0;var t=dl,e=Aa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=A.T,A.T=null;var a=U.p;U.p=2;var n=it;it|=4;try{yf(e,t);var i=uo,c=ws(t.containerInfo),u=i.focusedElem,f=i.selectionRange;if(c!==u&&u&&u.ownerDocument&&zs(u.ownerDocument.documentElement,u)){if(f!==null&&Nc(u)){var g=f.start,z=f.end;if(z===void 0&&(z=g),"selectionStart"in u)u.selectionStart=g,u.selectionEnd=Math.min(z,u.value.length);else{var T=u.ownerDocument||document,y=T&&T.defaultView||window;if(y.getSelection){var S=y.getSelection(),H=u.textContent.length,q=Math.min(f.start,H),dt=f.end===void 0?q:Math.min(f.end,H);!S.extend&&q>dt&&(c=dt,dt=q,q=c);var p=Ss(u,q),d=Ss(u,dt);if(p&&d&&(S.rangeCount!==1||S.anchorNode!==p.node||S.anchorOffset!==p.offset||S.focusNode!==d.node||S.focusOffset!==d.offset)){var v=T.createRange();v.setStart(p.node,p.offset),S.removeAllRanges(),q>dt?(S.addRange(v),S.extend(d.node,d.offset)):(v.setEnd(d.node,d.offset),S.addRange(v))}}}}for(T=[],S=u;S=S.parentNode;)S.nodeType===1&&T.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<T.length;u++){var w=T[u];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}Ji=!!co,uo=co=null}finally{it=n,U.p=a,A.T=l}}t.current=e,Ct=2}}function qf(){if(Ct===2){Ct=0;var t=dl,e=Aa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=A.T,A.T=null;var a=U.p;U.p=2;var n=it;it|=4;try{hf(t,e.alternate,e)}finally{it=n,U.p=a,A.T=l}}Ct=3}}function Yf(){if(Ct===4||Ct===3){Ct=0,vh();var t=dl,e=Aa,l=Ve,a=Ef;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ct=5:(Ct=0,Aa=dl=null,Qf(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(fl=null),hc(l),e=e.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Ba,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=A.T,n=U.p,U.p=2,A.T=null;try{for(var i=t.onRecoverableError,c=0;c<a.length;c++){var u=a[c];i(u.value,{componentStack:u.stack})}}finally{A.T=e,U.p=n}}(Ve&3)!==0&&_i(),Ee(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===Ku?gn++:(gn=0,Ku=t):gn=0,yn(0)}}function Qf(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Fa(e)))}function _i(){return Lf(),qf(),Yf(),Gf()}function Gf(){if(Ct!==5)return!1;var t=dl,e=Vu;Vu=0;var l=hc(Ve),a=A.T,n=U.p;try{U.p=32>l?32:l,A.T=null,l=Zu,Zu=null;var i=dl,c=Ve;if(Ct=0,Aa=dl=null,Ve=0,(it&6)!==0)throw Error(r(331));var u=it;if(it|=4,wf(i.current),xf(i,i.current,c,l),it=u,yn(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Ba,i)}catch{}return!0}finally{U.p=n,A.T=a,Qf(t,e)}}function kf(t,e,l){e=fe(l,e),e=Tu(t.stateNode,e,2),t=il(t,e,2),t!==null&&(Ra(t,2),Ee(t))}function ot(t,e,l){if(t.tag===3)kf(t,t,l);else for(;e!==null;){if(e.tag===3){kf(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(fl===null||!fl.has(a))){t=fe(l,t),l=kr(2),a=il(e,l,2),a!==null&&(Xr(l,a,e,t),Ra(a,2),Ee(a));break}}e=e.return}}function $u(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new G0;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Gu=!0,n.add(l),t=K0.bind(null,t,e,l),e.then(t,t))}function K0(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,pt===t&&($&l)===l&&(zt===4||zt===3&&($&62914560)===$&&300>Ft()-Ci?(it&2)===0&&Ta(t,0):ku|=l,wa===$&&(wa=0)),Ee(t)}function Xf(t,e){e===0&&(e=Ro()),t=Cl(t,e),t!==null&&(Ra(t,e),Ee(t))}function J0(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Xf(t,l)}function W0(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),Xf(t,l)}function $0(t,e){return sc(t,e)}var Ri=null,Ma=null,Fu=!1,Li=!1,Iu=!1,pl=0;function Ee(t){t!==Ma&&t.next===null&&(Ma===null?Ri=Ma=t:Ma=Ma.next=t),Li=!0,Fu||(Fu=!0,I0())}function yn(t,e){if(!Iu&&Li){Iu=!0;do for(var l=!1,a=Ri;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var c=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-Pt(42|t)+1)-1,i&=n&~(c&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Jf(a,i))}else i=$,i=Gn(a,a===pt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||_a(a,i)||(l=!0,Jf(a,i));a=a.next}while(l);Iu=!1}}function F0(){Vf()}function Vf(){Li=Fu=!1;var t=0;pl!==0&&op()&&(t=pl);for(var e=Ft(),l=null,a=Ri;a!==null;){var n=a.next,i=Zf(a,e);i===0?(a.next=null,l===null?Ri=n:l.next=n,n===null&&(Ma=l)):(l=a,(t!==0||(i&3)!==0)&&(Li=!0)),a=n}Ct!==0&&Ct!==5||yn(t),pl!==0&&(pl=0)}function Zf(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var c=31-Pt(i),u=1<<c,f=n[c];f===-1?((u&l)===0||(u&a)!==0)&&(n[c]=Ah(u,e)):f<=e&&(t.expiredLanes|=u),i&=~u}if(e=pt,l=$,l=Gn(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&rc(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||_a(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&rc(a),hc(l)){case 2:case 8:l=Bo;break;case 32:l=Ln;break;case 268435456:l=_o;break;default:l=Ln}return a=Kf.bind(null,t),l=sc(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&rc(a),t.callbackPriority=2,t.callbackNode=null,2}function Kf(t,e){if(Ct!==0&&Ct!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(_i()&&t.callbackNode!==l)return null;var a=$;return a=Gn(t,t===pt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(jf(t,a,e),Zf(t,Ft()),t.callbackNode!=null&&t.callbackNode===l?Kf.bind(null,t):null)}function Jf(t,e){if(_i())return null;jf(t,e,!0)}function I0(){rp(function(){(it&6)!==0?sc(Ho,F0):Vf()})}function Pu(){if(pl===0){var t=da;t===0&&(t=qn,qn<<=1,(qn&261888)===0&&(qn=256)),pl=t}return pl}function Wf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zn(""+t)}function $f(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function P0(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=Wf((n[kt]||null).action),c=a.submitter;c&&(e=(e=c[kt]||null)?Wf(e.formAction):c.getAttribute("formAction"),e!==null&&(i=e,c=null));var u=new $n("action","action",null,a,n);t.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(pl!==0){var f=c?$f(n,c):new FormData(n);bu(l,{pending:!0,data:f,method:n.method,action:i},null,f)}}else typeof i=="function"&&(u.preventDefault(),f=c?$f(n,c):new FormData(n),bu(l,{pending:!0,data:f,method:n.method,action:i},i,f))},currentTarget:n}]})}}for(var to=0;to<_c.length;to++){var eo=_c[to],tp=eo.toLowerCase(),ep=eo[0].toUpperCase()+eo.slice(1);be(tp,"on"+ep)}be(Es,"onAnimationEnd"),be(Ms,"onAnimationIteration"),be(js,"onAnimationStart"),be("dblclick","onDoubleClick"),be("focusin","onFocus"),be("focusout","onBlur"),be(g0,"onTransitionRun"),be(y0,"onTransitionStart"),be(b0,"onTransitionCancel"),be(Ds,"onTransitionEnd"),Il("onMouseEnter",["mouseout","mouseover"]),Il("onMouseLeave",["mouseout","mouseover"]),Il("onPointerEnter",["pointerout","pointerover"]),Il("onPointerLeave",["pointerout","pointerover"]),El("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),El("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),El("onBeforeInput",["compositionend","keypress","textInput","paste"]),El("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),El("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),El("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));function Ff(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var c=a.length-1;0<=c;c--){var u=a[c],f=u.instance,g=u.currentTarget;if(u=u.listener,f!==i&&n.isPropagationStopped())break t;i=u,n.currentTarget=g;try{i(n)}catch(z){Pn(z)}n.currentTarget=null,i=f}else for(c=0;c<a.length;c++){if(u=a[c],f=u.instance,g=u.currentTarget,u=u.listener,f!==i&&n.isPropagationStopped())break t;i=u,n.currentTarget=g;try{i(n)}catch(z){Pn(z)}n.currentTarget=null,i=f}}}}function W(t,e){var l=e[pc];l===void 0&&(l=e[pc]=new Set);var a=t+"__bubble";l.has(a)||(If(e,t,2,!1),l.add(a))}function lo(t,e,l){var a=0;e&&(a|=4),If(l,t,a,e)}var qi="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[qi]){t[qi]=!0,Xo.forEach(function(l){l!=="selectionchange"&&(lp.has(l)||lo(l,!1,t),lo(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qi]||(e[qi]=!0,lo("selectionchange",!1,e))}}function If(t,e,l,a){switch(Md(e)){case 2:var n=Cp;break;case 8:n=Op;break;default:n=bo}l=n.bind(null,e,l,t),n=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function no(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var u=a.stateNode.containerInfo;if(u===n)break;if(c===4)for(c=a.return;c!==null;){var f=c.tag;if((f===3||f===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;u!==null;){if(c=Wl(u),c===null)return;if(f=c.tag,f===5||f===6||f===26||f===27){a=i=c;continue t}u=u.parentNode}}a=a.return}ls(function(){var g=i,z=Sc(l),T=[];t:{var y=Cs.get(t);if(y!==void 0){var S=$n,H=t;switch(t){case"keypress":if(Jn(l)===0)break t;case"keydown":case"keyup":S=Wh;break;case"focusin":H="focus",S=Mc;break;case"focusout":H="blur",S=Mc;break;case"beforeblur":case"afterblur":S=Mc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ih;break;case Es:case Ms:case js:S=Yh;break;case Ds:S=t0;break;case"scroll":case"scrollend":S=Bh;break;case"wheel":S=l0;break;case"copy":case"cut":case"paste":S=Gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=us;break;case"toggle":case"beforetoggle":S=n0}var q=(e&4)!==0,dt=!q&&(t==="scroll"||t==="scrollend"),p=q?y!==null?y+"Capture":null:y;q=[];for(var d=g,v;d!==null;){var w=d;if(v=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||v===null||p===null||(w=Ya(d,p),w!=null&&q.push(xn(d,w,v))),dt)break;d=d.return}0<q.length&&(y=new S(y,H,null,l,z),T.push({event:y,listeners:q}))}}if((e&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&l!==xc&&(H=l.relatedTarget||l.fromElement)&&(Wl(H)||H[Jl]))break t;if((S||y)&&(y=z.window===z?z:(y=z.ownerDocument)?y.defaultView||y.parentWindow:window,S?(H=l.relatedTarget||l.toElement,S=g,H=H?Wl(H):null,H!==null&&(dt=E(H),q=H.tag,H!==dt||q!==5&&q!==27&&q!==6)&&(H=null)):(S=null,H=g),S!==H)){if(q=is,w="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(q=us,w="onPointerLeave",p="onPointerEnter",d="pointer"),dt=S==null?y:qa(S),v=H==null?y:qa(H),y=new q(w,d+"leave",S,l,z),y.target=dt,y.relatedTarget=v,w=null,Wl(z)===g&&(q=new q(p,d+"enter",H,l,z),q.target=v,q.relatedTarget=dt,w=q),dt=w,S&&H)e:{for(q=ap,p=S,d=H,v=0,w=p;w;w=q(w))v++;w=0;for(var R=d;R;R=q(R))w++;for(;0<v-w;)p=q(p),v--;for(;0<w-v;)d=q(d),w--;for(;v--;){if(p===d||d!==null&&p===d.alternate){q=p;break e}p=q(p),d=q(d)}q=null}else q=null;S!==null&&Pf(T,y,S,q,!1),H!==null&&dt!==null&&Pf(T,dt,H,q,!0)}}t:{if(y=g?qa(g):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var at=ms;else if(hs(y))if(vs)at=p0;else{at=d0;var B=f0}else S=y.nodeName,!S||S.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?g&&bc(g.elementType)&&(at=ms):at=h0;if(at&&(at=at(t,g))){ps(T,at,l,z);break t}B&&B(t,y,g),t==="focusout"&&g&&y.type==="number"&&g.memoizedProps.value!=null&&yc(y,"number",y.value)}switch(B=g?qa(g):window,t){case"focusin":(hs(B)||B.contentEditable==="true")&&(na=B,Uc=g,Ja=null);break;case"focusout":Ja=Uc=na=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,As(T,l,z);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":As(T,l,z)}var K;if(Dc)t:{switch(t){case"compositionstart":var F="onCompositionStart";break t;case"compositionend":F="onCompositionEnd";break t;case"compositionupdate":F="onCompositionUpdate";break t}F=void 0}else aa?fs(t,l)&&(F="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(F="onCompositionStart");F&&(os&&l.locale!=="ko"&&(aa||F!=="onCompositionStart"?F==="onCompositionEnd"&&aa&&(K=as()):(Ie=z,Ac="value"in Ie?Ie.value:Ie.textContent,aa=!0)),B=Yi(g,F),0<B.length&&(F=new cs(F,t,null,l,z),T.push({event:F,listeners:B}),K?F.data=K:(K=ds(l),K!==null&&(F.data=K)))),(K=c0?u0(t,l):o0(t,l))&&(F=Yi(g,"onBeforeInput"),0<F.length&&(B=new cs("onBeforeInput","beforeinput",null,l,z),T.push({event:B,listeners:F}),B.data=K)),P0(T,t,g,l,z)}Ff(T,e)})}function xn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Yi(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ya(t,l),n!=null&&a.unshift(xn(t,n,i)),n=Ya(t,e),n!=null&&a.push(xn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function ap(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pf(t,e,l,a,n){for(var i=e._reactName,c=[];l!==null&&l!==a;){var u=l,f=u.alternate,g=u.stateNode;if(u=u.tag,f!==null&&f===a)break;u!==5&&u!==26&&u!==27||g===null||(f=g,n?(g=Ya(l,i),g!=null&&c.unshift(xn(l,g,f))):n||(g=Ya(l,i),g!=null&&c.push(xn(l,g,f)))),l=l.return}c.length!==0&&t.push({event:e,listeners:c})}var np=/\r\n?/g,ip=/\u0000|\uFFFD/g;function td(t){return(typeof t=="string"?t:""+t).replace(np,`
`).replace(ip,"")}function ed(t,e){return e=td(e),td(t)===e}function ft(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ta(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ta(t,""+a);break;case"className":Xn(t,"class",a);break;case"tabIndex":Xn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(t,l,a);break;case"style":ts(t,a,i);break;case"data":if(e!=="object"){Xn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Zn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&ft(t,e,"name",n.name,n,null),ft(t,e,"formEncType",n.formEncType,n,null),ft(t,e,"formMethod",n.formMethod,n,null),ft(t,e,"formTarget",n.formTarget,n,null)):(ft(t,e,"encType",n.encType,n,null),ft(t,e,"method",n.method,n,null),ft(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Zn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Ce);break;case"onScroll":a!=null&&W("scroll",t);break;case"onScrollEnd":a!=null&&W("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Zn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":W("beforetoggle",t),W("toggle",t),kn(t,"popover",a);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":kn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Uh.get(l)||l,kn(t,l,a))}}function io(t,e,l,a,n,i){switch(l){case"style":ts(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?ta(t,a):(typeof a=="number"||typeof a=="bigint")&&ta(t,""+a);break;case"onScroll":a!=null&&W("scroll",t);break;case"onScrollEnd":a!=null&&W("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ce);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vo.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[kt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):kn(t,l,a)}}}function Yt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",t),W("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:ft(t,e,i,c,l,null)}}n&&ft(t,e,"srcSet",l.srcSet,l,null),a&&ft(t,e,"src",l.src,l,null);return;case"input":W("invalid",t);var u=i=c=n=null,f=null,g=null;for(a in l)if(l.hasOwnProperty(a)){var z=l[a];if(z!=null)switch(a){case"name":n=z;break;case"type":c=z;break;case"checked":f=z;break;case"defaultChecked":g=z;break;case"value":i=z;break;case"defaultValue":u=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,e));break;default:ft(t,e,a,z,l,null)}}$o(t,i,u,f,g,c,n,!1);return;case"select":W("invalid",t),a=c=i=null;for(n in l)if(l.hasOwnProperty(n)&&(u=l[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":c=u;break;case"multiple":a=u;default:ft(t,e,n,u,l,null)}e=i,l=c,t.multiple=!!a,e!=null?Pl(t,!!a,e,!1):l!=null&&Pl(t,!!a,l,!0);return;case"textarea":W("invalid",t),i=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(u=l[c],u!=null))switch(c){case"value":a=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:ft(t,e,c,u,l,null)}Io(t,a,n,i);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(a=l[f],a!=null))switch(f){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ft(t,e,f,a,l,null)}return;case"dialog":W("beforetoggle",t),W("toggle",t),W("cancel",t),W("close",t);break;case"iframe":case"object":W("load",t);break;case"video":case"audio":for(a=0;a<bn.length;a++)W(bn[a],t);break;case"image":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"embed":case"source":case"link":W("error",t),W("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in l)if(l.hasOwnProperty(g)&&(a=l[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:ft(t,e,g,a,l,null)}return;default:if(bc(e)){for(z in l)l.hasOwnProperty(z)&&(a=l[z],a!==void 0&&io(t,e,z,a,l,void 0));return}}for(u in l)l.hasOwnProperty(u)&&(a=l[u],a!=null&&ft(t,e,u,a,l,null))}function cp(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,u=null,f=null,g=null,z=null;for(S in l){var T=l[S];if(l.hasOwnProperty(S)&&T!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":f=T;default:a.hasOwnProperty(S)||ft(t,e,S,null,a,T)}}for(var y in a){var S=a[y];if(T=l[y],a.hasOwnProperty(y)&&(S!=null||T!=null))switch(y){case"type":i=S;break;case"name":n=S;break;case"checked":g=S;break;case"defaultChecked":z=S;break;case"value":c=S;break;case"defaultValue":u=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(r(137,e));break;default:S!==T&&ft(t,e,y,S,a,T)}}gc(t,c,u,f,g,z,i,n);return;case"select":S=c=u=y=null;for(i in l)if(f=l[i],l.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":S=f;default:a.hasOwnProperty(i)||ft(t,e,i,null,a,f)}for(n in a)if(i=a[n],f=l[n],a.hasOwnProperty(n)&&(i!=null||f!=null))switch(n){case"value":y=i;break;case"defaultValue":u=i;break;case"multiple":c=i;default:i!==f&&ft(t,e,n,i,a,f)}e=u,l=c,a=S,y!=null?Pl(t,!!l,y,!1):!!a!=!!l&&(e!=null?Pl(t,!!l,e,!0):Pl(t,!!l,l?[]:"",!1));return;case"textarea":S=y=null;for(u in l)if(n=l[u],l.hasOwnProperty(u)&&n!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ft(t,e,u,null,a,n)}for(c in a)if(n=a[c],i=l[c],a.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":y=n;break;case"defaultValue":S=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&ft(t,e,c,n,a,i)}Fo(t,y,S);return;case"option":for(var H in l)if(y=l[H],l.hasOwnProperty(H)&&y!=null&&!a.hasOwnProperty(H))switch(H){case"selected":t.selected=!1;break;default:ft(t,e,H,null,a,y)}for(f in a)if(y=a[f],S=l[f],a.hasOwnProperty(f)&&y!==S&&(y!=null||S!=null))switch(f){case"selected":t.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:ft(t,e,f,y,a,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in l)y=l[q],l.hasOwnProperty(q)&&y!=null&&!a.hasOwnProperty(q)&&ft(t,e,q,null,a,y);for(g in a)if(y=a[g],S=l[g],a.hasOwnProperty(g)&&y!==S&&(y!=null||S!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(r(137,e));break;default:ft(t,e,g,y,a,S)}return;default:if(bc(e)){for(var dt in l)y=l[dt],l.hasOwnProperty(dt)&&y!==void 0&&!a.hasOwnProperty(dt)&&io(t,e,dt,void 0,a,y);for(z in a)y=a[z],S=l[z],!a.hasOwnProperty(z)||y===S||y===void 0&&S===void 0||io(t,e,z,y,a,S);return}}for(var p in l)y=l[p],l.hasOwnProperty(p)&&y!=null&&!a.hasOwnProperty(p)&&ft(t,e,p,null,a,y);for(T in a)y=a[T],S=l[T],!a.hasOwnProperty(T)||y===S||y==null&&S==null||ft(t,e,T,y,a,S)}function ld(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function up(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,c=n.initiatorType,u=n.duration;if(i&&u&&ld(c)){for(c=0,u=n.responseEnd,a+=1;a<l.length;a++){var f=l[a],g=f.startTime;if(g>u)break;var z=f.transferSize,T=f.initiatorType;z&&ld(T)&&(f=f.responseEnd,c+=z*(f<u?1:(u-g)/(f-g)))}if(--a,e+=8*(i+c)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var co=null,uo=null;function Qi(t){return t.nodeType===9?t:t.ownerDocument}function ad(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function oo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var so=null;function op(){var t=window.event;return t&&t.type==="popstate"?t===so?!1:(so=t,!0):(so=null,!1)}var id=typeof setTimeout=="function"?setTimeout:void 0,sp=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,rp=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(t){return cd.resolve(null).then(t).catch(fp)}:id;function fp(t){setTimeout(function(){throw t})}function ml(t){return t==="head"}function ud(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Oa(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Sn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Sn(l);for(var i=l.firstChild;i;){var c=i.nextSibling,u=i.nodeName;i[La]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=c}}else l==="body"&&Sn(t.ownerDocument.body);l=n}while(l);Oa(e)}function od(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function ro(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":ro(l),mc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function dp(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[La])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=ve(t.nextSibling),t===null)break}return null}function hp(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=ve(t.nextSibling),t===null))return null;return t}function sd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ve(t.nextSibling),t===null))return null;return t}function fo(t){return t.data==="$?"||t.data==="$~"}function ho(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function pp(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function ve(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var po=null;function rd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return ve(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function fd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function dd(t,e,l){switch(e=Qi(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Sn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);mc(t)}var ge=new Map,hd=new Set;function Gi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ze=U.d;U.d={f:mp,r:vp,D:gp,C:yp,L:bp,m:xp,X:zp,S:Sp,M:wp};function mp(){var t=Ze.f(),e=Ui();return t||e}function vp(t){var e=$l(t);e!==null&&e.tag===5&&e.type==="form"?Dr(e):Ze.r(t)}var ja=typeof document>"u"?null:document;function pd(t,e,l){var a=ja;if(a&&typeof e=="string"&&e){var n=se(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),hd.has(n)||(hd.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Yt(e,"link",t),Ut(e),a.head.appendChild(e)))}}function gp(t){Ze.D(t),pd("dns-prefetch",t,null)}function yp(t,e){Ze.C(t,e),pd("preconnect",t,e)}function bp(t,e,l){Ze.L(t,e,l);var a=ja;if(a&&t&&e){var n='link[rel="preload"][as="'+se(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+se(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+se(l.imageSizes)+'"]')):n+='[href="'+se(t)+'"]';var i=n;switch(e){case"style":i=Da(t);break;case"script":i=Ca(t)}ge.has(i)||(t=j({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),ge.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(zn(i))||e==="script"&&a.querySelector(wn(i))||(e=a.createElement("link"),Yt(e,"link",t),Ut(e),a.head.appendChild(e)))}}function xp(t,e){Ze.m(t,e);var l=ja;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+se(a)+'"][href="'+se(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ca(t)}if(!ge.has(i)&&(t=j({rel:"modulepreload",href:t},e),ge.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(wn(i)))return}a=l.createElement("link"),Yt(a,"link",t),Ut(a),l.head.appendChild(a)}}}function Sp(t,e,l){Ze.S(t,e,l);var a=ja;if(a&&t){var n=Fl(a).hoistableStyles,i=Da(t);e=e||"default";var c=n.get(i);if(!c){var u={loading:0,preload:null};if(c=a.querySelector(zn(i)))u.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":e},l),(l=ge.get(i))&&mo(t,l);var f=c=a.createElement("link");Ut(f),Yt(f,"link",t),f._p=new Promise(function(g,z){f.onload=g,f.onerror=z}),f.addEventListener("load",function(){u.loading|=1}),f.addEventListener("error",function(){u.loading|=2}),u.loading|=4,ki(c,e,a)}c={type:"stylesheet",instance:c,count:1,state:u},n.set(i,c)}}}function zp(t,e){Ze.X(t,e);var l=ja;if(l&&t){var a=Fl(l).hoistableScripts,n=Ca(t),i=a.get(n);i||(i=l.querySelector(wn(n)),i||(t=j({src:t,async:!0},e),(e=ge.get(n))&&vo(t,e),i=l.createElement("script"),Ut(i),Yt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function wp(t,e){Ze.M(t,e);var l=ja;if(l&&t){var a=Fl(l).hoistableScripts,n=Ca(t),i=a.get(n);i||(i=l.querySelector(wn(n)),i||(t=j({src:t,async:!0,type:"module"},e),(e=ge.get(n))&&vo(t,e),i=l.createElement("script"),Ut(i),Yt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function md(t,e,l,a){var n=(n=We.current)?Gi(n):null;if(!n)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Da(l.href),l=Fl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Da(l.href);var i=Fl(n).hoistableStyles,c=i.get(t);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,c),(i=n.querySelector(zn(t)))&&!i._p&&(c.instance=i,c.state.loading=5),ge.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ge.set(t,l),i||Ap(n,t,l,c.state))),e&&a===null)throw Error(r(528,""));return c}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ca(l),l=Fl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Da(t){return'href="'+se(t)+'"'}function zn(t){return'link[rel="stylesheet"]['+t+"]"}function vd(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function Ap(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Yt(e,"link",l),Ut(e),t.head.appendChild(e))}function Ca(t){return'[src="'+se(t)+'"]'}function wn(t){return"script[async]"+t}function gd(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+se(l.href)+'"]');if(a)return e.instance=a,Ut(a),a;var n=j({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Ut(a),Yt(a,"style",n),ki(a,l.precedence,t),e.instance=a;case"stylesheet":n=Da(l.href);var i=t.querySelector(zn(n));if(i)return e.state.loading|=4,e.instance=i,Ut(i),i;a=vd(l),(n=ge.get(n))&&mo(a,n),i=(t.ownerDocument||t).createElement("link"),Ut(i);var c=i;return c._p=new Promise(function(u,f){c.onload=u,c.onerror=f}),Yt(i,"link",a),e.state.loading|=4,ki(i,l.precedence,t),e.instance=i;case"script":return i=Ca(l.src),(n=t.querySelector(wn(i)))?(e.instance=n,Ut(n),n):(a=l,(n=ge.get(i))&&(a=j({},l),vo(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ut(n),Yt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,ki(a,l.precedence,t));return e.instance}function ki(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,c=0;c<a.length;c++){var u=a[c];if(u.dataset.precedence===e)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function mo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function vo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Xi=null;function yd(t,e,l){if(Xi===null){var a=new Map,n=Xi=new Map;n.set(l,a)}else n=Xi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[La]||i[_t]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(e)||"";c=t+c;var u=a.get(c);u?u.push(i):a.set(c,[i])}}return a}function bd(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Tp(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function xd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ep(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Da(a.href),i=e.querySelector(zn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Vi.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,Ut(i);return}i=e.ownerDocument||e,a=vd(a),(n=ge.get(n))&&mo(a,n),i=i.createElement("link"),Ut(i);var c=i;c._p=new Promise(function(u,f){c.onload=u,c.onerror=f}),Yt(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Vi.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var go=0;function Mp(t,e){return t.stylesheets&&t.count===0&&Ki(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Ki(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&go===0&&(go=62500*up());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ki(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>go?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Vi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ki(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Zi=null;function Ki(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zi=new Map,e.forEach(jp,t),Zi=null,Vi.call(t))}function jp(t,e){if(!(e.state.loading&4)){var l=Zi.get(t);if(l)var a=l.get(null);else{l=new Map,Zi.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=e.instance,c=n.getAttribute("data-precedence"),i=l.get(c)||a,i===a&&l.set(null,n),l.set(c,n),this.count++,a=Vi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var An={$$typeof:et,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Dp(t,e,l,a,n,i,c,u,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.hiddenUpdates=fc(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Sd(t,e,l,a,n,i,c,u,f,g,z,T){return t=new Dp(t,e,l,c,f,g,z,T,u),e=1,i===!0&&(e|=24),i=ee(3,null,null,e),t.current=i,i.stateNode=t,e=Wc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Pc(i),t}function zd(t){return t?(t=ua,t):ua}function wd(t,e,l,a,n,i){n=zd(n),a.context===null?a.context=n:a.pendingContext=n,a=nl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=il(t,a,e),l!==null&&(Wt(l,t,e),en(l,t,e))}function Ad(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function yo(t,e){Ad(t,e),(t=t.alternate)&&Ad(t,e)}function Td(t){if(t.tag===13||t.tag===31){var e=Cl(t,67108864);e!==null&&Wt(e,t,67108864),yo(t,67108864)}}function Ed(t){if(t.tag===13||t.tag===31){var e=ce();e=dc(e);var l=Cl(t,e);l!==null&&Wt(l,t,e),yo(t,e)}}var Ji=!0;function Cp(t,e,l,a){var n=A.T;A.T=null;var i=U.p;try{U.p=2,bo(t,e,l,a)}finally{U.p=i,A.T=n}}function Op(t,e,l,a){var n=A.T;A.T=null;var i=U.p;try{U.p=8,bo(t,e,l,a)}finally{U.p=i,A.T=n}}function bo(t,e,l,a){if(Ji){var n=xo(a);if(n===null)no(t,e,a,Wi,l),jd(t,a);else if(Up(n,t,e,l,a))a.stopPropagation();else if(jd(t,a),e&4&&-1<Np.indexOf(t)){for(;n!==null;){var i=$l(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Tl(i.pendingLanes);if(c!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;c;){var f=1<<31-Pt(c);u.entanglements[1]|=f,c&=~f}Ee(i),(it&6)===0&&(Oi=Ft()+500,yn(0))}}break;case 31:case 13:u=Cl(i,2),u!==null&&Wt(u,i,2),Ui(),yo(i,2)}if(i=xo(a),i===null&&no(t,e,a,Wi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else no(t,e,a,null,l)}}function xo(t){return t=Sc(t),So(t)}var Wi=null;function So(t){if(Wi=null,t=Wl(t),t!==null){var e=E(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=M(e),t!==null)return t;t=null}else if(l===31){if(t=O(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Wi=t,null}function Md(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gh()){case Ho:return 2;case Bo:return 8;case Ln:case yh:return 32;case _o:return 268435456;default:return 32}default:return 32}}var zo=!1,vl=null,gl=null,yl=null,Tn=new Map,En=new Map,bl=[],Np="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jd(t,e){switch(t){case"focusin":case"focusout":vl=null;break;case"dragenter":case"dragleave":gl=null;break;case"mouseover":case"mouseout":yl=null;break;case"pointerover":case"pointerout":Tn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(e.pointerId)}}function Mn(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=$l(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Up(t,e,l,a,n){switch(e){case"focusin":return vl=Mn(vl,t,e,l,a,n),!0;case"dragenter":return gl=Mn(gl,t,e,l,a,n),!0;case"mouseover":return yl=Mn(yl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return Tn.set(i,Mn(Tn.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,En.set(i,Mn(En.get(i)||null,t,e,l,a,n)),!0}return!1}function Dd(t){var e=Wl(t.target);if(e!==null){var l=E(e);if(l!==null){if(e=l.tag,e===13){if(e=M(l),e!==null){t.blockedOn=e,Go(t.priority,function(){Ed(l)});return}}else if(e===31){if(e=O(l),e!==null){t.blockedOn=e,Go(t.priority,function(){Ed(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=xo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);xc=a,l.target.dispatchEvent(a),xc=null}else return e=$l(l),e!==null&&Td(e),t.blockedOn=l,!1;e.shift()}return!0}function Cd(t,e,l){$i(t)&&l.delete(e)}function Hp(){zo=!1,vl!==null&&$i(vl)&&(vl=null),gl!==null&&$i(gl)&&(gl=null),yl!==null&&$i(yl)&&(yl=null),Tn.forEach(Cd),En.forEach(Cd)}function Fi(t,e){t.blockedOn===e&&(t.blockedOn=null,zo||(zo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Hp)))}var Ii=null;function Od(t){Ii!==t&&(Ii=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ii===t&&(Ii=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(So(a||l)===null)continue;break}var i=$l(l);i!==null&&(t.splice(e,3),e-=3,bu(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Oa(t){function e(f){return Fi(f,t)}vl!==null&&Fi(vl,t),gl!==null&&Fi(gl,t),yl!==null&&Fi(yl,t),Tn.forEach(e),En.forEach(e);for(var l=0;l<bl.length;l++){var a=bl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<bl.length&&(l=bl[0],l.blockedOn===null);)Dd(l),l.blockedOn===null&&bl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],c=n[kt]||null;if(typeof i=="function")c||Od(l);else if(c){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[kt]||null)u=c.formAction;else if(So(n)!==null)continue}else u=c.action;typeof u=="function"?l[a+1]=u:(l.splice(a,3),a-=3),Od(l)}}}function Nd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function wo(t){this._internalRoot=t}Pi.prototype.render=wo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=ce();wd(l,a,t,e,null,null)},Pi.prototype.unmount=wo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wd(t.current,2,null,t,null,null),Ui(),e[Jl]=null}};function Pi(t){this._internalRoot=t}Pi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qo();t={blockedOn:null,target:t,priority:e};for(var l=0;l<bl.length&&e!==0&&e<bl[l].priority;l++);bl.splice(l,0,t),l===0&&Dd(t)}};var Ud=h.version;if(Ud!=="19.2.1")throw Error(r(527,Ud,"19.2.1"));U.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=D(e),t=t!==null?Q(t):null,t=t===null?null:t.stateNode,t};var Bp={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Ba=tc.inject(Bp),It=tc}catch{}}return jn.createRoot=function(t,e){if(!b(t))throw Error(r(299));var l=!1,a="",n=qr,i=Yr,c=Qr;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=Sd(t,1,!1,null,null,l,a,null,n,i,c,Nd),t[Jl]=e.current,ao(t),new wo(e)},jn.hydrateRoot=function(t,e,l){if(!b(t))throw Error(r(299));var a=!1,n="",i=qr,c=Yr,u=Qr,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),e=Sd(t,1,!0,e,l??null,a,n,f,i,c,u,Nd),e.context=zd(null),l=e.current,a=ce(),a=dc(a),n=nl(a),n.callback=null,il(l,n,a),l=a,e.current.lanes=l,Ra(e,l),Ee(e),t[Jl]=e.current,ao(t),new Pi(e)},jn.version="19.2.1",jn}var Rd;function Vp(){if(Rd)return Ao.exports;Rd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(h){console.error(h)}}return o(),Ao.exports=Xp(),Ao.exports}var Zp=Vp();const Mo='"Space Grotesk Variable", "Space Grotesk", system-ui, sans-serif',st={display:Mo,body:Mo,mono:Mo},lc={mobile:"640px",tablet:"1024px",desktop:"1280px"},Z={mobile:`@media (min-width: ${lc.mobile})`,tablet:`@media (min-width: ${lc.tablet})`,desktop:`@media (min-width: ${lc.desktop})`,belowTablet:"@media (max-width: 1023px)",belowMobile:"@media (max-width: 639px)"},Dn={sm:"8px",md:"10px",lg:"14px",xl:"20px",pill:"999px"},jo={out:"cubic-bezier(0.16, 1, 0.3, 1)",outStrong:"cubic-bezier(0.23, 1, 0.32, 1)",inOut:"cubic-bezier(0.77, 0, 0.175, 1)"},Kp={breakpoints:lc},Jp=Qp`
  /* ============================================
     TOKENS - Dark (default)
     ============================================ */
  :root {
    --bg: #000000;            /* pitch black */
    --bg-elev: #0A0C0E;       /* raised panels */
    --surface: rgba(255, 255, 255, 0.030);
    --surface-2: rgba(255, 255, 255, 0.062);
    --ink: #F4F7FA;
    --ink-2: rgba(244, 247, 250, 0.62);
    --ink-3: rgba(244, 247, 250, 0.38);
    --line: rgba(255, 255, 255, 0.085);
    --line-2: rgba(255, 255, 255, 0.16);

    --accent: #0FA3B8;        /* brand teal-cyan (from the PN logo), darkened to read on both themes */
    --accent-hot: #3E9BE0;    /* brand blue - gradient partner (teal -> blue) */
    --accent-deep: #2B3F8F;   /* brand indigo - deepest logo layer */
    --accent-ink: #14B0C6;    /* slightly brighter teal for text on black */
    --accent-rgb: 15, 163, 184;
    --accent-soft: rgba(15, 163, 184, 0.16);

    --shadow-1: 0 2px 10px rgba(0, 0, 0, 0.55);
    --shadow-2: 0 22px 60px -18px rgba(0, 0, 0, 0.80);
    --scene-opacity: 0.60;

    /* motion */
    --ease-out: ${jo.out};
    --ease-out-strong: ${jo.outStrong};
    --ease-in-out: ${jo.inOut};

    /* radius */
    --r-sm: ${Dn.sm};
    --r-md: ${Dn.md};
    --r-lg: ${Dn.lg};
    --r-xl: ${Dn.xl};
    --r-pill: ${Dn.pill};

    /* layout - Apple-style balanced content well */
    --gutter: clamp(22px, 6vw, 48px);
    --maxw-prose: 720px;
    --maxw-content: 980px;
    --maxw-wide: 1200px;
    --maxw-full: 1320px;
    --nav-h: 64px;

    color-scheme: dark;
  }

  /* ============================================
     TOKENS - Light
     ============================================ */
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

    --accent: #0FA3B8;        /* same brand teal as dark mode */
    --accent-hot: #2563B0;    /* brand blue */
    --accent-deep: #2B3F8F;   /* brand indigo */
    --accent-ink: #0C8294;    /* darker teal for accented text on light */
    --accent-rgb: 15, 163, 184;
    --accent-soft: rgba(15, 163, 184, 0.14);

    --shadow-1: 0 2px 8px rgba(15, 16, 20, 0.08);
    --shadow-2: 0 18px 50px -16px rgba(15, 16, 20, 0.18);
    --scene-opacity: 0.32;

    color-scheme: light;
  }

  /* ============================================
     RESET
     ============================================ */
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overscroll-behavior: none;
    /* Lenis drives scrolling; keep native smooth off to avoid double easing */
    scroll-behavior: auto;
  }

  /* Lenis */
  html.lenis, html.lenis body { height: auto; }
  .lenis.lenis-smooth { scroll-behavior: auto !important; }
  .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
  .lenis.lenis-stopped { overflow: hidden; }

  body {
    font-family: ${st.body};
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
    font-family: ${st.display};
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

  /* Theme-change transition (color props only, kept short) */
  body, header, section, footer, a, button, h1, h2, h3, h4, p, span, li, div {
    transition:
      background-color 0.4s var(--ease-out),
      border-color 0.4s var(--ease-out),
      color 0.4s var(--ease-out);
  }
  .no-transition, .no-transition * { transition: none !important; }

  /* ============================================
     SCROLLBAR - hidden, scroll still works
     ============================================ */
  ::-webkit-scrollbar { width: 0; height: 0; display: none; }
  * { scrollbar-width: none; }
  body { -ms-overflow-style: none; }

  /* ============================================
     FOCUS - visible, on-brand
     ============================================ */
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

  /* scroll offset so anchored sections clear the top nav on desktop */
  section[id] { scroll-margin-top: 96px; }
  #home { scroll-margin-top: 0; }

  /* ============================================
     ACCESSIBILITY - reduced motion
     ============================================ */
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }

  /* utility */
  .mono { font-family: ${st.mono}; font-variant-numeric: tabular-nums; }
  .gpu { transform: translateZ(0); backface-visibility: hidden; }
`,Pd=L.createContext(void 0),Do="portfolio-theme-mode",Wp=()=>{if(typeof window<"u"){const o=localStorage.getItem(Do),h=window.matchMedia("(prefers-color-scheme: dark)").matches;return o==="dark"||o==="light"?o:h?"dark":"light"}return"dark"},$p=({children:o})=>{const[h,m]=L.useState(Wp),[r,b]=L.useState(()=>{if(typeof window<"u"){const M=localStorage.getItem(Do);return M==="dark"||M==="light"}return!1});L.useEffect(()=>{document.documentElement.setAttribute("data-theme",h),requestAnimationFrame(()=>{document.body.classList.remove("no-transition")})},[h]),L.useEffect(()=>{document.body.classList.add("no-transition");const M=requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.body.classList.remove("no-transition")})});return()=>cancelAnimationFrame(M)},[]),L.useEffect(()=>{r&&localStorage.setItem(Do,h)},[h,r]);const E=()=>{b(!0),m(M=>M==="dark"?"light":"dark")};return s.jsx(Pd.Provider,{value:{mode:h,toggleTheme:E,isDark:h==="dark"},children:o})};var Ld="1.3.23";function th(o,h,m){return Math.max(o,Math.min(h,m))}function Fp(o,h,m){return(1-m)*o+m*h}function Ip(o,h,m,r){return Fp(o,h,1-Math.exp(-m*r))}function Pp(o,h){return(o%h+h)%h}var tm=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(o){if(!this.isRunning)return;let h=!1;if(this.duration&&this.easing){this.currentTime+=o;const m=th(0,this.currentTime/this.duration,1);h=m>=1;const r=h?1:this.easing(m);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Ip(this.value,this.to,this.lerp*60,o),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,h=!0)):(this.value=this.to,h=!0);h&&this.stop(),this.onUpdate?.(this.value,h)}stop(){this.isRunning=!1}fromTo(o,h,{lerp:m,duration:r,easing:b,onStart:E,onUpdate:M}){this.from=this.value=o,this.to=h,this.lerp=m,this.duration=r,this.easing=b,this.currentTime=0,this.isRunning=!0,E?.(),this.onUpdate=M}};function em(o,h){let m;return function(...r){clearTimeout(m),m=setTimeout(()=>{m=void 0,o.apply(this,r)},h)}}var lm=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(o,h,{autoResize:m=!0,debounce:r=250}={}){this.wrapper=o,this.content=h,m&&(this.debouncedResize=em(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},eh=class{events={};emit(o,...h){const m=this.events[o]||[];for(let r=0,b=m.length;r<b;r++)m[r]?.(...h)}on(o,h){return this.events[o]?this.events[o].push(h):this.events[o]=[h],()=>{this.events[o]=this.events[o]?.filter(m=>h!==m)}}off(o,h){this.events[o]=this.events[o]?.filter(m=>h!==m)}destroy(){this.events={}}};const am=100/6,Sl={passive:!1};function qd(o,h){return o===1?am:o===2?h:1}var nm=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new eh;constructor(o,h={wheelMultiplier:1,touchMultiplier:1}){this.element=o,this.options=h,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Sl),this.element.addEventListener("touchstart",this.onTouchStart,Sl),this.element.addEventListener("touchmove",this.onTouchMove,Sl),this.element.addEventListener("touchend",this.onTouchEnd,Sl)}on(o,h){return this.emitter.on(o,h)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Sl),this.element.removeEventListener("touchstart",this.onTouchStart,Sl),this.element.removeEventListener("touchmove",this.onTouchMove,Sl),this.element.removeEventListener("touchend",this.onTouchEnd,Sl)}onTouchStart=o=>{const{clientX:h,clientY:m}=o.targetTouches?o.targetTouches[0]:o;this.touchStart.x=h,this.touchStart.y=m,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:o})};onTouchMove=o=>{const{clientX:h,clientY:m}=o.targetTouches?o.targetTouches[0]:o,r=-(h-this.touchStart.x)*this.options.touchMultiplier,b=-(m-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=h,this.touchStart.y=m,this.lastDelta={x:r,y:b},this.emitter.emit("scroll",{deltaX:r,deltaY:b,event:o})};onTouchEnd=o=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:o})};onWheel=o=>{let{deltaX:h,deltaY:m,deltaMode:r}=o;const b=qd(r,this.window.width),E=qd(r,this.window.height);h*=b,m*=E,h*=this.options.wheelMultiplier,m*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:h,deltaY:m,event:o})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Yd=o=>Math.min(1,1.001-2**(-10*o));var im=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new tm;emitter=new eh;dimensions;virtualScroll;constructor({wrapper:o=window,content:h=document.documentElement,eventsTarget:m=o,smoothWheel:r=!0,syncTouch:b=!1,syncTouchLerp:E=.075,touchInertiaExponent:M=1.7,duration:O,easing:N,lerp:D=.1,infinite:Q=!1,orientation:j="vertical",gestureOrientation:C=j==="horizontal"?"both":"vertical",touchMultiplier:k=1,wheelMultiplier:_=1,autoResize:I=!0,prevent:lt,virtualScroll:tt,overscroll:X=!0,autoRaf:et=!1,anchors:ht=!1,autoToggle:Bt=!1,allowNestedScroll:Tt=!1,__experimental__naiveDimensions:ye=!1,naiveDimensions:$t=ye,stopInertiaOnNavigate:Je=!1}={}){window.lenisVersion=Ld,window.lenis||(window.lenis={}),window.lenis.version=Ld,j==="horizontal"&&(window.lenis.horizontal=!0),b===!0&&(window.lenis.touch=!0),(!o||o===document.documentElement)&&(o=window),typeof O=="number"&&typeof N!="function"?N=Yd:typeof N=="function"&&typeof O!="number"&&(O=1),this.options={wrapper:o,content:h,eventsTarget:m,smoothWheel:r,syncTouch:b,syncTouchLerp:E,touchInertiaExponent:M,duration:O,easing:N,lerp:D,infinite:Q,gestureOrientation:C,orientation:j,touchMultiplier:k,wheelMultiplier:_,autoResize:I,prevent:lt,virtualScroll:tt,overscroll:X,autoRaf:et,anchors:ht,autoToggle:Bt,allowNestedScroll:Tt,naiveDimensions:$t,stopInertiaOnNavigate:Je},this.dimensions=new lm(o,h,{autoResize:I}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new nm(m,{touchMultiplier:k,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(o,h){return this.emitter.on(o,h)}off(o,h){return this.emitter.off(o,h)}onScrollEnd=o=>{o instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&o.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const o=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[o]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=o=>{o.propertyName?.includes("overflow")&&o.target===this.rootElement&&this.checkOverflow()};setScroll(o){this.isHorizontal?this.options.wrapper.scrollTo({left:o,behavior:"instant"}):this.options.wrapper.scrollTo({top:o,behavior:"instant"})}onClick=o=>{const h=o.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.href).map(r=>new URL(r.href)),m=new URL(window.location.href);if(this.options.anchors){const r=h.find(b=>m.host===b.host&&m.pathname===b.pathname&&b.hash);if(r){const b=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,E=`#${r.hash.split("#")[1]}`;this.scrollTo(E,b);return}}if(this.options.stopInertiaOnNavigate&&h.some(r=>m.host===r.host&&m.pathname!==r.pathname)){this.reset();return}};onPointerDown=o=>{o.button===1&&this.reset()};onVirtualScroll=o=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(o)===!1)return;const{deltaX:h,deltaY:m,event:r}=o;if(this.emitter.emit("virtual-scroll",{deltaX:h,deltaY:m,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const b=r.type.includes("touch"),E=r.type.includes("wheel");this.isTouching=r.type==="touchstart"||r.type==="touchmove";const M=h===0&&m===0;if(this.options.syncTouch&&b&&r.type==="touchstart"&&M&&!this.isStopped&&!this.isLocked){this.reset();return}const O=this.options.gestureOrientation==="vertical"&&m===0||this.options.gestureOrientation==="horizontal"&&h===0;if(M||O)return;let N=r.composedPath();N=N.slice(0,N.indexOf(this.rootElement));const D=this.options.prevent,Q=Math.abs(h)>=Math.abs(m)?"horizontal":"vertical";if(N.find(_=>_ instanceof HTMLElement&&(typeof D=="function"&&D?.(_)||_.hasAttribute?.("data-lenis-prevent")||Q==="vertical"&&_.hasAttribute?.("data-lenis-prevent-vertical")||Q==="horizontal"&&_.hasAttribute?.("data-lenis-prevent-horizontal")||b&&_.hasAttribute?.("data-lenis-prevent-touch")||E&&_.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:h,deltaY:m}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&b||this.options.smoothWheel&&E)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let j=m;this.options.gestureOrientation==="both"?j=Math.abs(m)>Math.abs(h)?m:h:this.options.gestureOrientation==="horizontal"&&(j=h),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&m>0||this.animatedScroll===this.limit&&m<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const C=b&&this.options.syncTouch,k=b&&r.type==="touchend";k&&(j=Math.sign(j)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+j,{programmatic:!1,...C?{lerp:k?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const o=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-o,this.direction=Math.sign(this.animatedScroll-o),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=o=>{const h=o-(this.time||o);this.time=o,this.animate.advance(h*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(o,{offset:h=0,immediate:m=!1,lock:r=!1,programmatic:b=!0,lerp:E=b?this.options.lerp:void 0,duration:M=b?this.options.duration:void 0,easing:O=b?this.options.easing:void 0,onStart:N,onComplete:D,force:Q=!1,userData:j}={}){if((this.isStopped||this.isLocked)&&!Q)return;let C=o,k=h;if(typeof C=="string"&&["top","left","start","#"].includes(C))C=0;else if(typeof C=="string"&&["bottom","right","end"].includes(C))C=this.limit;else{let _=null;if(typeof C=="string"?(_=document.querySelector(C),_||(C==="#top"?C=0:console.warn("Lenis: Target not found",C))):C instanceof HTMLElement&&C?.nodeType&&(_=C),_){if(this.options.wrapper!==window){const ht=this.rootElement.getBoundingClientRect();k-=this.isHorizontal?ht.left:ht.top}const I=_.getBoundingClientRect(),lt=getComputedStyle(_),tt=this.isHorizontal?Number.parseFloat(lt.scrollMarginLeft):Number.parseFloat(lt.scrollMarginTop),X=getComputedStyle(this.rootElement),et=this.isHorizontal?Number.parseFloat(X.scrollPaddingLeft):Number.parseFloat(X.scrollPaddingTop);C=(this.isHorizontal?I.left:I.top)+this.animatedScroll-(Number.isNaN(tt)?0:tt)-(Number.isNaN(et)?0:et)}}if(typeof C=="number"){if(C+=k,this.options.infinite){if(b){this.targetScroll=this.animatedScroll=this.scroll;const _=C-this.animatedScroll;_>this.limit/2?C-=this.limit:_<-this.limit/2&&(C+=this.limit)}}else C=th(0,C,this.limit);if(C===this.targetScroll){N?.(this),D?.(this);return}if(this.userData=j??{},m){this.animatedScroll=this.targetScroll=C,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),D?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}b||(this.targetScroll=C),typeof M=="number"&&typeof O!="function"?O=Yd:typeof O=="function"&&typeof M!="number"&&(M=1),this.animate.fromTo(this.animatedScroll,C,{duration:M,easing:O,lerp:E,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",N?.(this)},onUpdate:(_,I)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),b&&(this.targetScroll=_),I||this.emit(),I&&(this.reset(),this.emit(),D?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(o,{deltaX:h,deltaY:m}){const r=Date.now();o._lenis||(o._lenis={});const b=o._lenis;let E,M,O,N,D,Q,j,C,k,_;if(r-(b.time??0)>2e3){b.time=Date.now();const Tt=window.getComputedStyle(o);if(b.computedStyle=Tt,E=["auto","overlay","scroll"].includes(Tt.overflowX),M=["auto","overlay","scroll"].includes(Tt.overflowY),D=["auto"].includes(Tt.overscrollBehaviorX),Q=["auto"].includes(Tt.overscrollBehaviorY),b.hasOverflowX=E,b.hasOverflowY=M,!(E||M))return!1;j=o.scrollWidth,C=o.scrollHeight,k=o.clientWidth,_=o.clientHeight,O=j>k,N=C>_,b.isScrollableX=O,b.isScrollableY=N,b.scrollWidth=j,b.scrollHeight=C,b.clientWidth=k,b.clientHeight=_,b.hasOverscrollBehaviorX=D,b.hasOverscrollBehaviorY=Q}else O=b.isScrollableX,N=b.isScrollableY,E=b.hasOverflowX,M=b.hasOverflowY,j=b.scrollWidth,C=b.scrollHeight,k=b.clientWidth,_=b.clientHeight,D=b.hasOverscrollBehaviorX,Q=b.hasOverscrollBehaviorY;if(!(E&&O||M&&N))return!1;const I=Math.abs(h)>=Math.abs(m)?"horizontal":"vertical";let lt,tt,X,et,ht,Bt;if(I==="horizontal")lt=Math.round(o.scrollLeft),tt=j-k,X=h,et=E,ht=O,Bt=D;else if(I==="vertical")lt=Math.round(o.scrollTop),tt=C-_,X=m,et=M,ht=N,Bt=Q;else return!1;return!Bt&&(lt>=tt||lt<=0)?!0:(X>0?lt<tt:lt>0)&&et&&ht}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const o=this.options.wrapper;return this.isHorizontal?o.scrollX??o.scrollLeft:o.scrollY??o.scrollTop}get scroll(){return this.options.infinite?Pp(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(o){this._isScrolling!==o&&(this._isScrolling=o,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(o){this._isStopped!==o&&(this._isStopped=o,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(o){this._isLocked!==o&&(this._isLocked=o,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let o="lenis";return this.options.autoToggle&&(o+=" lenis-autoToggle"),this.isStopped&&(o+=" lenis-stopped"),this.isLocked&&(o+=" lenis-locked"),this.isScrolling&&(o+=" lenis-scrolling"),this.isScrolling==="smooth"&&(o+=" lenis-smooth"),o}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(o=>{this.rootElement.classList.add(o)})}cleanUpClassName(){for(const o of Array.from(this.rootElement.classList))(o==="lenis"||o.startsWith("lenis-"))&&this.rootElement.classList.remove(o)}};const lh=L.createContext({scrollTo:()=>{}}),Oo=()=>L.useContext(lh);function ah(o,h){if(h==="home"){o("home",{offset:0});return}const m=document.getElementById(h),r=m?.firstElementChild,b=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"))||64,E=window.matchMedia("(min-width: 1024px)").matches?b:0,M=r&&parseFloat(getComputedStyle(r).paddingLeft)||0;if(m&&r&&M>0){const O=r.getBoundingClientRect().top+window.scrollY;o(O-E-M*1.6)}else o(h,{offset:-(E+24)})}const cm=({children:o})=>{const h=Ot(),m=L.useRef(null),[r]=L.useState(()=>({scrollTo:(b,E)=>{const M=typeof b=="string"?document.getElementById(b.replace("#","")):b instanceof HTMLElement?b:null,O=m.current;O?O.scrollTo(M??(typeof b=="number"?b:0),{offset:E?.offset??0,duration:1.2}):M?M.scrollIntoView({behavior:"smooth",block:"start"}):typeof b=="number"&&window.scrollTo({top:b+(E?.offset??0),behavior:"smooth"})}}));return L.useEffect(()=>{if(h)return;const b=new im({duration:1.05,easing:O=>Math.min(1,1.001-Math.pow(2,-10*O)),smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.6});m.current=b;let E=0;const M=O=>{b.raf(O),E=requestAnimationFrame(M)};return E=requestAnimationFrame(M),()=>{cancelAnimationFrame(E),b.destroy(),m.current=null}},[h]),s.jsx(lh.Provider,{value:r,children:o})},um="modulepreload",om=function(o){return"/"+o},Qd={},sm=function(h,m,r){let b=Promise.resolve();if(m&&m.length>0){let N=function(D){return Promise.all(D.map(Q=>Promise.resolve(Q).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};document.getElementsByTagName("link");const M=document.querySelector("meta[property=csp-nonce]"),O=M?.nonce||M?.getAttribute("nonce");b=N(m.map(D=>{if(D=om(D),D in Qd)return;Qd[D]=!0;const Q=D.endsWith(".css"),j=Q?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${D}"]${j}`))return;const C=document.createElement("link");if(C.rel=Q?"stylesheet":um,Q||(C.as="script"),C.crossOrigin="",C.href=D,O&&C.setAttribute("nonce",O),document.head.appendChild(C),Q)return new Promise((k,_)=>{C.addEventListener("load",k),C.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${D}`)))})}))}function E(M){const O=new Event("vite:preloadError",{cancelable:!0});if(O.payload=M,window.dispatchEvent(O),!O.defaultPrevented)throw M}return b.then(M=>{for(const O of M||[])O.status==="rejected"&&E(O.reason);return h().catch(E)})};function nh(){const o=L.useContext(Pd);if(!o)throw new Error("useTheme must be used within a ThemeProvider");return o}const rm="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E",fm=x.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: #000000;

  [data-theme='light'] & {
    background: transparent;
  }
`,dm=x.div`
  position: absolute;
  inset: 0;
`,hm=x.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(90% 60% at 50% -8%, rgba(70, 210, 230, 0.10), transparent 62%);

  [data-theme='light'] & {
    background: radial-gradient(95% 65% at 50% -8%, rgba(10, 150, 172, 0.28), rgba(10, 150, 172, 0.08) 42%, transparent 66%);
  }
`,pm=x.div`
  position: absolute;
  inset: 0;
  background-image: url('${rm}');
  background-repeat: repeat;
  background-size: 160px 160px;
  opacity: 0.035;

  [data-theme='light'] & {
    opacity: 0.022;
  }

  @media (prefers-reduced-transparency: reduce) {
    display: none;
  }
`,mm=x.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(135% 105% at 50% 38%, transparent 60%, rgba(0, 0, 0, 0.6) 100%);

  [data-theme='light'] & {
    display: none;
  }
`,Gd="(min-width: 768px)",vm=()=>{const o=Ot(),{isDark:h}=nh(),[m,r]=L.useState(()=>typeof window<"u"&&window.matchMedia(Gd).matches);L.useEffect(()=>{const N=window.matchMedia(Gd),D=()=>r(N.matches);return N.addEventListener("change",D),()=>N.removeEventListener("change",D)},[]);const b=!o&&m,E=L.useRef(null),M=L.useRef(null),O=L.useRef(h);return O.current=h,L.useEffect(()=>{if(!b||!E.current)return;let D=!1;return(async()=>{try{const{initSheen:Q}=await sm(async()=>{const{initSheen:j}=await import("./sheen-Cc-WMF6n.js");return{initSheen:j}},[]);if(D||!E.current)return;M.current=Q(E.current,{dark:O.current})}catch{}})(),()=>{if(D=!0,M.current){try{M.current.destroy()}catch{}M.current=null}}},[b]),L.useEffect(()=>{M.current?.setDark(h)},[h]),s.jsxs(fm,{"aria-hidden":!0,children:[b?s.jsx(dm,{ref:E}):s.jsx(hm,{}),s.jsx(pm,{}),s.jsx(mm,{})]})};x.section`
  padding: 64px 24px;
  background: ${({$variant:o="primary"})=>o==="secondary"?"var(--bg-secondary)":"var(--bg-primary)"};
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${Kp.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`;x.div`
  max-width: 1200px;
  margin: 0 auto;
`;const gm=o=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...o,children:[s.jsx("circle",{cx:"12",cy:"12",r:"4"}),s.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),ym=o=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...o,children:s.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),ih=o=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...o,children:[s.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),s.jsx("path",{d:"M22 6L12 13 2 6"})]}),bm=o=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...o,children:s.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),xm=o=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...o,children:[s.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),s.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),s.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),Sm=o=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...o,children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),ch=[{label:"About",href:"about"},{label:"Skills",href:"technologyproficiency"},{label:"Work",href:"professionalexperience"},{label:"Projects",href:"mostproudof"},{label:"Contact",href:"contact"}];function zm(){const[o,h]=L.useState("home");return L.useEffect(()=>{const r=["home",...ch.map(M=>M.href)].map(M=>document.getElementById(M)).filter(M=>M!==null),b=new Map,E=new IntersectionObserver(M=>{for(const D of M)b.set(D.target.id,D.isIntersecting?D.intersectionRatio:0);let O=o,N=0;for(const[D,Q]of b)Q>N&&(N=Q,O=D);N>0&&h(O)},{rootMargin:"-45% 0px -45% 0px",threshold:[0,.25,.5,.75,1]});return r.forEach(M=>E.observe(M)),()=>E.disconnect()},[]),o}const wm=x.nav`
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  pointer-events: none;

  /* mobile: bottom dock */
  bottom: max(14px, env(safe-area-inset-bottom));
  top: auto;
  display: flex;
  justify-content: center;
  padding: 0 12px;

  ${Z.tablet} {
    top: 0;
    bottom: auto;
    height: var(--nav-h);
    padding: 0;
    display: block;
  }
`,Am=x.div`
  position: relative;
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  max-width: 100%;

  ${Z.tablet} {
    height: var(--nav-h);
    width: 100%;
    max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
    margin-inline: auto;
    padding: 0 var(--gutter);
    gap: 8px;
    justify-content: space-between;
  }

  /* halve the left/right whitespace on desktop */
  ${Z.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,Tm=x(Y.div)`
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

  /* On tablet+ the visible bar is the separate BarFill layer (its opacity is
     animated on scroll). The mobile pill keeps the styles above. */
  ${Z.tablet} {
    background: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;

    /* the light base fill above has higher specificity, so reset it here too,
       otherwise the desktop bar stays opaque at the top in light mode. */
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
    ${Z.tablet} { background: transparent; }
  }
`,Em=x(Y.div)`
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

  ${Z.tablet} { display: block; }

  @media (prefers-reduced-transparency: reduce) {
    background: var(--bg);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,Mm=x(Y.a)`
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

  ${Z.belowTablet} { width: 36px; height: 36px; }
`,jm=x(Y.img)`
  width: 32px;
  height: 32px;
  object-fit: contain;
  position: relative;
  z-index: 1;
  transform-origin: center center;
  will-change: transform, opacity;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45));
`,Dm=x(Y.div)`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 2px;
  min-width: 0;

  ${Z.tablet} {
    /* centered between brand and toggle */
    flex: 1 1 auto;
    justify-content: center;
  }

  ${Z.belowTablet} {
    flex: 0 1 auto;
    min-width: 0;
    justify-content: flex-start;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,Cm=x(Y.a)`
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
  color: ${({$active:o})=>o?"var(--accent-ink)":"var(--ink-2)"};
  transition: color 0.25s var(--ease-out);

  &:hover { color: ${({$active:o})=>o?"var(--accent-ink)":"var(--ink)"}; }

  ${Z.belowTablet} {
    padding: 8px 9px;
    font-size: 12px;
  }
`,Om=x(Y.span)`
  position: absolute;
  inset: 0;
  border-radius: var(--r-pill);
  background: var(--accent-soft);
  border: 1px solid rgba(var(--accent-rgb), 0.45);
  z-index: 0;
`,Nm=x.span`
  position: relative;
  z-index: 1;
`;x.span`
  display: none;
`;const Um=x(Y.button)`
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

  ${Z.belowTablet} { width: 36px; height: 36px; }
`,Cn=[.16,1,.3,1],Hm=[.76,0,.24,1],Bm=({revealed:o=!0})=>{const h=zm(),{scrollTo:m}=Oo(),{isDark:r,toggleTheme:b}=nh(),E=Ot(),[M,O]=L.useState(!1);L.useEffect(()=>{const X=()=>O(window.scrollY>8);return X(),window.addEventListener("scroll",X,{passive:!0}),()=>window.removeEventListener("scroll",X)},[]);const N=L.useRef(null),D=L.useRef(null),Q=L.useRef(1),j=Me(0),C=Me(0),k=Me(1),_=Me(0);L.useLayoutEffect(()=>{const X=N.current,et=D.current;if(!X||!et)return;if(E||o){j.set(0),C.set(0),k.set(1),_.set(1);return}const ht=X.getBoundingClientRect(),Bt=et.offsetWidth||26;if(ht.width===0){_.set(1);return}const Tt=Math.min(150,window.innerWidth*.34);Q.current=Tt/Bt,j.set(window.innerWidth/2-(ht.left+ht.width/2)),C.set(window.innerHeight/2-(ht.top+ht.height/2)),k.set(Q.current*.86),_.set(0)},[]),L.useEffect(()=>{if(E||o){_.set(1);return}const X=Na(_,1,{duration:1,ease:Cn}),et=Na(k,Q.current,{duration:1.4,ease:Cn});return()=>{X.stop(),et.stop()}},[]),L.useEffect(()=>{if(!o||E)return;const X={duration:1,ease:Hm},et=Na(j,0,X),ht=Na(C,0,X),Bt=Na(k,1,X);return()=>{et.stop(),ht.stop(),Bt.stop()}},[o]);const I=(X,et)=>{X.preventDefault(),ah(m,et)},lt=E?0:.85,tt=X=>({initial:{opacity:0,y:E?0:8},animate:{opacity:o?1:0,y:o||E?0:8},transition:{duration:.6,delay:o?lt+X:0,ease:Cn}});return s.jsx(wm,{"aria-label":"Primary",children:s.jsxs(Am,{children:[s.jsx(Tm,{initial:{opacity:0},animate:{opacity:o?1:0},transition:{duration:.7,delay:o?lt:0,ease:Cn}}),s.jsx(Em,{initial:!1,animate:{opacity:M?1:0},transition:{duration:.35,ease:Cn}}),s.jsx(Mm,{ref:N,href:"#home",onClick:X=>I(X,"home"),"aria-label":"Pranshu Nijhawan, back to top",whileHover:{scale:1.06},whileTap:{scale:.94},children:s.jsx(jm,{ref:D,"data-brand-logo":!0,src:"/images/logo-optimized.webp",alt:"Pranshu Nijhawan logo",width:26,height:26,style:{x:j,y:C,scale:k,opacity:_}})}),s.jsx(Dm,{...tt(.18),children:s.jsx(Rp,{children:ch.map(X=>{const et=h===X.href;return s.jsxs(Cm,{href:`#${X.href}`,$active:et,"aria-current":et?"true":void 0,onClick:ht=>I(ht,X.href),whileTap:{scale:.95},children:[et&&s.jsx(Om,{layoutId:"nav-active",transition:{type:"spring",stiffness:480,damping:38,mass:.9}}),s.jsx(Nm,{children:X.label})]},X.href)})})}),s.jsx(Um,{onClick:b,"aria-label":r?"Switch to light mode":"Switch to dark mode",title:r?"Light mode":"Dark mode",whileHover:{scale:1.06},whileTap:{scale:.94},...tt(.26),children:s.jsx(ac,{mode:"wait",initial:!1,children:s.jsx(Y.span,{initial:{opacity:0,rotate:-45,scale:.6},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:45,scale:.6},transition:{duration:.25,ease:[.16,1,.3,1]},style:{display:"inline-flex"},children:r?s.jsx(gm,{}):s.jsx(ym,{})},r?"sun":"moon")})})]})})},_m="3.0.0",Rm=x.footer`
  position: relative;
  z-index: 1;
  padding: 40px 0 calc(96px + env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);
  ${Z.tablet} { padding: 48px 0; }
`,Lm=x.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  display: flex;
  flex-direction: column;
  gap: 28px;

  ${Z.tablet} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  ${Z.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,qm=x.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  margin-top: 4px;
  padding-inline: var(--gutter);

  ${Z.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,Ym=x.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Qm=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Gm=x.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
`,km=x.span`
  font-family: ${st.display};
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: var(--ink);
`,Xm=x.span`
  font-size: 14px;
  color: var(--ink-3);
`,Vm=x.div`
  display: flex;
  align-items: center;
  gap: 22px;
`,kd=x.a`
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-2);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s var(--ease-out);
  }
  &:hover { color: var(--ink); }
  &:hover::after { transform: scaleX(1); }
`,Zm=x(Y.button)`
  font-family: ${st.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-2);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  &:hover { color: var(--accent-ink); }
`,Km=x.p`
  font-size: 13px;
  color: var(--ink-3);
  ${Z.tablet} { text-align: right; }
`,Jm=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 14px;
`,Xd=x.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,Wm=x.span`
  font-family: ${st.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
`,$m=()=>{const{scrollTo:o}=Oo(),h=new Date().getFullYear();return s.jsxs(Rm,{children:[s.jsxs(Lm,{children:[s.jsxs(Ym,{children:[s.jsxs(Qm,{children:[s.jsx(Gm,{src:"/images/logo-optimized.webp",alt:"Pranshu Nijhawan logo",width:34,height:34}),s.jsx(km,{children:"Pranshu Nijhawan"})]}),s.jsx(Xm,{children:"Principal Architect, Agentic AI & Scale"})]}),s.jsxs(Vm,{children:[s.jsx(kd,{href:"https://www.linkedin.com/in/pranshunijhawan/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),s.jsx(kd,{href:"mailto:mail@pranshunijhawan.dev",children:"Email"}),s.jsxs(Zm,{onClick:()=>o("home"),whileHover:{scale:1.04},whileTap:{scale:.96},children:["Top",s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M12 19V5M5 12l7-7 7 7"})})]})]})]}),s.jsxs(qm,{children:[s.jsxs(Km,{children:["© ",h," Pranshu Nijhawan."]}),s.jsxs(Jm,{children:[s.jsx(Xd,{}),s.jsxs(Wm,{children:["v",_m]}),s.jsx(Xd,{})]})]})]})},Vd=x(Y.div)`
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
`,Fm=x(Y.div)`
  position: absolute;
  inset: 0;
  transform-origin: center 56%;
`,Ua=x(Y.div)`
  position: absolute;
  inset: 0;
  will-change: transform, opacity;
`,Zd=x(Ua)`
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
`,Im=x(Ua)`
  background: radial-gradient(38% 70% at 50% -6%,
    rgba(150, 220, 240, 0.18) 0%,
    rgba(80, 140, 200, 0.08) 30%,
    transparent 62%);
  mix-blend-mode: screen;

  [data-theme='light'] & {
    mix-blend-mode: normal;
    opacity: 0.35;
  }
`,Pm=x(Ua)`
  background: radial-gradient(70% 16% at 50% 70%,
    rgba(22, 192, 212, 0.22) 0%,
    transparent 70%);
  filter: blur(12px);

  [data-theme='light'] & { opacity: 0.5; }
`,tv=x(Ua)``,ev=x(Y.span)`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(190, 235, 245, 0.9), rgba(190, 235, 245, 0) 70%);

  [data-theme='light'] & {
    background: radial-gradient(circle, rgba(22, 192, 212, 0.55), rgba(22, 192, 212, 0) 70%);
  }
`,Kd=x(Ua)`
  background: radial-gradient(circle at 50% 54%, transparent 34%, rgba(0, 0, 0, 0.5) 78%, rgba(0, 0, 0, 0.72) 100%);

  [data-theme='light'] & {
    background: radial-gradient(circle at 50% 54%,
      transparent 50%,
      rgba(15, 18, 26, 0.04) 84%,
      rgba(15, 18, 26, 0.08) 100%);
  }
`,lv=x(Ua)`
  opacity: 0.05;
  mix-blend-mode: overlay;

  [data-theme='light'] & { opacity: 0.025; }
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
`,ec=[.16,1,.3,1],av=({onComplete:o})=>{const h=Ot(),m=L.useMemo(()=>Array.from({length:14},(r,b)=>{const M=(b*9301+49297)%233280/233280,O=(b*4099+1)%977/977;return{left:8+M*84,top:24+O*62,size:1.5+O*3.5,delay:M*2.2,dur:5+M*5,drift:12+O*26}}),[]);return L.useEffect(()=>{const r=setTimeout(o,h?700:2800);return()=>clearTimeout(r)},[h,o]),h?s.jsxs(Vd,{initial:{opacity:1},exit:{opacity:0,transition:{duration:.4}},children:[s.jsx(Zd,{animate:{opacity:.8}}),s.jsx(Kd,{})]}):s.jsxs(Vd,{initial:{opacity:1},exit:{opacity:0,transition:{duration:.75,ease:ec}},children:[s.jsxs(Fm,{initial:{scale:1.12},animate:{scale:1},transition:{duration:4,ease:ec},children:[s.jsx(Zd,{initial:{opacity:0,scale:.7},animate:{opacity:[0,1,.82,1],scale:[.7,1.02,.99,1.02]},transition:{duration:4.2,times:[0,.32,.66,1],ease:"easeInOut",repeat:1/0,repeatType:"mirror"}}),s.jsx(Im,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:1.8,ease:ec}}),s.jsx(Pm,{initial:{opacity:0,scaleX:.6},animate:{opacity:1,scaleX:1},transition:{duration:2,delay:.4,ease:ec}}),s.jsx(tv,{children:m.map((r,b)=>s.jsx(ev,{style:{left:`${r.left}%`,top:`${r.top}%`,width:r.size,height:r.size},initial:{opacity:0,y:0},animate:{opacity:[0,.8,0],y:[-r.drift*.3,-r.drift]},transition:{duration:r.dur,delay:r.delay,ease:"easeInOut",repeat:1/0,repeatType:"loop"}},b))})]}),s.jsx(Kd,{}),s.jsx(lv,{})]})},Jd=new Map;function uh(o){let h=Jd.get(o);return h||(h=typeof o=="string"?Y[o]:Y(o),Jd.set(o,h)),h}const nv=(o,h)=>{switch(o){case"up":return{y:h};case"down":return{y:-h};case"left":return{x:h};case"right":return{x:-h};default:return{}}},kl=({children:o,as:h="div",delay:m=0,dist:r=28,dir:b="up",blur:E=!0,amount:M=.3,once:O=!0,className:N,style:D})=>Ot()?L.createElement(h,{className:N,style:D},o):L.createElement(uh(h),{className:N,style:D,initial:{opacity:0,...nv(b,r),filter:E?"blur(10px)":"blur(0px)"},whileInView:{opacity:1,x:0,y:0,filter:"blur(0px)"},viewport:{once:O,amount:M},transition:{duration:.7,delay:m,ease:[.16,1,.3,1]}},o),Co=({text:o,as:h="span",className:m,delay:r=0,stagger:b=.045,once:E=!0,amount:M=.4})=>{const O=Ot(),N=o.split(" ");if(O)return L.createElement(h,{className:m},o);const D=N.map((Q,j)=>s.jsx("span",{"aria-hidden":!0,style:{display:"inline-block",overflow:"hidden",verticalAlign:"top",paddingBottom:"0.12em"},children:s.jsxs(Y.span,{style:{display:"inline-block",willChange:"transform"},variants:{hidden:{y:"110%",opacity:0,filter:"blur(8px)"},visible:{y:"0%",opacity:1,filter:"blur(0px)",transition:{duration:.75,ease:[.16,1,.3,1]}}},children:[Q,j<N.length-1?" ":""]})},`${Q}-${j}`));return L.createElement(uh(h),{className:m,initial:"hidden",whileInView:"visible",viewport:{once:E,amount:M},variants:{hidden:{},visible:{transition:{staggerChildren:b,delayChildren:r}}},"aria-label":o},D)},oh=({children:o,strength:h=.35,className:m,...r})=>{const b=Ot(),E=L.useRef(null),M=Me(0),O=Me(0),N=On(M,{stiffness:200,damping:18,mass:.6}),D=On(O,{stiffness:200,damping:18,mass:.6}),Q=C=>{if(b||!E.current)return;const k=E.current.getBoundingClientRect();M.set((C.clientX-(k.left+k.width/2))*h),O.set((C.clientY-(k.top+k.height/2))*h)},j=()=>{M.set(0),O.set(0)};return s.jsx(Y.div,{ref:E,className:m,onMouseMove:Q,onMouseLeave:j,style:{x:b?0:N,y:b?0:D,display:"inline-block"},...r,children:o})},sh=({children:o,className:h,max:m=9,glare:r=!0})=>{const b=Ot(),E=L.useRef(null),M=Me(0),O=Me(0),N=Me(50),D=Me(50),Q=On(M,{stiffness:200,damping:20}),j=On(O,{stiffness:200,damping:20}),C=I=>{if(b||!E.current)return;const lt=E.current.getBoundingClientRect(),tt=(I.clientX-lt.left)/lt.width,X=(I.clientY-lt.top)/lt.height;O.set((tt-.5)*m*2),M.set(-(X-.5)*m*2),N.set(tt*100),D.set(X*100)},k=()=>{M.set(0),O.set(0),N.set(50),D.set(50)},_=zl([N,D],([I,lt])=>`radial-gradient(circle at ${I}% ${lt}%, rgba(var(--accent-rgb),0.18), transparent 55%)`);return s.jsxs(Y.div,{ref:E,className:h,onMouseMove:C,onMouseLeave:k,style:{rotateX:b?0:Q,rotateY:b?0:j,transformStyle:"preserve-3d",transformPerspective:900,position:"relative"},children:[o,r&&!b&&s.jsx(Y.span,{"aria-hidden":!0,style:{position:"absolute",inset:0,borderRadius:"inherit",background:_,pointerEvents:"none",mixBlendMode:"screen"}})]})};function iv(o=80){const h=L.useRef(null),m=Ot(),{scrollYProgress:r}=Nn({target:h,offset:["start end","end start"]}),b=zl(r,[0,1],[o,-o]);return{ref:h,y:m?0:b}}const cv=({to:o,suffix:h="",prefix:m="",duration:r=1.6,className:b,play:E=!0})=>{const M=Ot(),O=L.useRef(null),N=Lp(O,{once:!0,amount:.6}),[D,Q]=L.useState(0);return L.useEffect(()=>{if(!N||!E)return;const j=Na(0,o,{duration:M?.001:r,ease:[.16,1,.3,1],onUpdate:C=>Q(C)});return()=>j.stop()},[N,E,o,r,M]),s.jsxs("span",{ref:O,className:b,children:[m,Math.round(D),h]})},uv=x.section`
  position: relative;
  z-index: 1;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${Z.belowTablet} {
    min-height: auto;
    justify-content: flex-start;
  }
`,ov=x(Y.div)`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  padding-top: clamp(120px, 18vh, 200px);
  padding-bottom: clamp(48px, 8vh, 96px);

  ${Z.belowTablet} {
    padding-top: var(--gutter);
    padding-bottom: 24px;
  }

  /* halve the left/right whitespace on desktop */
  ${Z.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,sv=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;

  ${Z.belowTablet} {
    gap: 12px;
  }

  ${Z.tablet} {
    grid-template-columns: 1.08fr 0.92fr;
  }
`,rv=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,fv=x.h1`
  font-family: ${st.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.045em;
  line-height: 0.88;
  font-size: clamp(54px, 9.5vw, 116px);
  margin-bottom: 26px;
`,Wd=x.span`
  display: block;
  overflow: hidden;
  padding-bottom: 0.06em;
`,dv=x(Y.p)`
  font-family: ${st.display};
  font-weight: 500;
  font-size: clamp(19px, 2.5vw, 27px);
  letter-spacing: -0.02em;
  line-height: 1.12;
  color: var(--ink);
  margin-bottom: 22px;

  em { font-style: normal; color: var(--accent-ink); }
`,hv=x(Y.p)`
  font-size: 17px;
  line-height: 1.62;
  color: var(--ink-2);
  max-width: 46ch;
  margin-bottom: 40px;
`,pv=x(Y.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`,mv=x(Y.a)`
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

  svg { width: 17px; height: 17px; transition: transform 0.3s var(--ease-out); }
  &:hover svg { transform: translateX(4px); }
`,vv=x(Y.a)`
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
`,gv=x(Y.div)`
  position: relative;
  display: flex;
  justify-content: center;
  ${Z.belowTablet} { order: -1; }
`,yv=x.div`
  position: relative;
  width: min(440px, 78vw);
  aspect-ratio: 4 / 5;
`,bv=x.div`
  position: absolute;
  inset: 4% 6% 2% 6%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(var(--accent-rgb), 0.13), transparent 72%);
  filter: blur(48px);
  z-index: -1;
`,xv=x.div`
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
`,Sv=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`,zv=x.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  padding-bottom: clamp(40px, 7vh, 88px);

  /* halve the left/right whitespace on desktop */
  ${Z.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,wv=x(Y.dl)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(28px, 4vw, 60px);

  ${Z.mobile} { grid-template-columns: repeat(4, 1fr); }
`,Av=x(Y.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Tv=x(Y.span)`
  height: 2px;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 10px;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 12%, transparent));
`,Ev=x.dd`
  font-family: ${st.display};
  font-weight: 600;
  font-size: clamp(34px, 5vw, 56px);
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1;
`,Mv=x.dt`
  font-family: ${st.mono};
  font-size: 11.5px;
  color: var(--ink-3);
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,jv=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),Dv=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),Cv=[{to:10,prefix:"",suffix:"+",label:"Years"},{to:65,prefix:"",suffix:"+",label:"Engineers Led"},{to:2,prefix:"$",suffix:"M+",label:"Savings"},{to:15,prefix:"",suffix:"+",label:"Products"}],Ov=({data:o,start:h=!0})=>{const m=Ot(),{scrollTo:r}=Oo(),{ref:b,y:E}=iv(56),M=L.useRef(null),{scrollYProgress:O}=Nn({target:M,offset:["start start","end start"]}),N=zl(O,[0,1],[0,-110]),D=zl(O,[0,.75],[1,0]),[Q,...j]=o.name.split(" "),C=j.join(" "),k=m?0:.85,_=[.16,1,.3,1],I=tt=>({initial:m?{opacity:0}:{y:"110%"},animate:h?m?{opacity:1}:{y:"0%"}:m?{opacity:0}:{y:"110%"},transition:{duration:.9,delay:h?k+tt:0,ease:[.16,1,.3,1]}}),lt=tt=>({initial:m?{opacity:0}:{opacity:0,y:18,filter:"blur(8px)"},animate:h?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:m?0:18,filter:m?"blur(0px)":"blur(8px)"},transition:{duration:.7,delay:h?k+tt:0,ease:[.16,1,.3,1]}});return s.jsxs(uv,{id:"home",ref:M,children:[s.jsx(ov,{style:m?void 0:{y:N,opacity:D},children:s.jsxs(sv,{children:[s.jsxs(rv,{children:[s.jsxs(fv,{"aria-label":o.name,children:[s.jsx(Wd,{"aria-hidden":!0,children:s.jsx(Y.span,{style:{display:"block"},...I(.15),children:Q})}),s.jsx(Wd,{"aria-hidden":!0,children:s.jsx(Y.span,{style:{display:"block",color:"var(--accent-ink)"},...I(.27),children:C})})]}),s.jsx(dv,{...lt(.34),children:o.designation}),s.jsx(hv,{...lt(.45),children:"Enterprise Architect of McKinsey Periscope's Promotion Advisor, building agentic AI and high-throughput data platforms."}),s.jsxs(pv,{...lt(.58),children:[s.jsx(oh,{strength:.4,style:{display:"inline-block"},children:s.jsxs(mv,{href:"#contact",onClick:tt=>{tt.preventDefault(),ah(r,"contact")},whileHover:{scale:1.04},whileTap:{scale:.97},children:["Get in touch ",s.jsx(jv,{})]})}),s.jsxs(vv,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.97},children:[s.jsx(Dv,{})," Download resume"]})]})]}),s.jsx(gv,{ref:b,style:{y:E},children:s.jsx(Y.div,{initial:m?{opacity:0}:{opacity:0,scale:.92,filter:"blur(14px)"},animate:h?{opacity:1,scale:1,filter:"blur(0px)"}:{opacity:0},transition:{duration:1,delay:h?k+.4:0,ease:[.16,1,.3,1]},children:s.jsx(sh,{max:6,glare:!1,children:s.jsxs(yv,{children:[s.jsx(bv,{}),s.jsx(xv,{children:s.jsx(Sv,{src:"/images/profile.webp",alt:o.name,width:440,height:550,loading:"eager",decoding:"async",fetchPriority:"high"})})]})})})})]})}),s.jsx(zv,{children:s.jsx(wv,{initial:m?!1:"hidden",animate:m?void 0:h?"visible":"hidden",variants:{hidden:{},visible:{transition:{staggerChildren:.12,delayChildren:k+.2}}},children:Cv.map(tt=>s.jsxs(Av,{variants:{hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.6,ease:_}}},children:[s.jsx(Tv,{variants:{hidden:{scaleX:0},visible:{scaleX:1,transition:{duration:.8,ease:_}}}}),s.jsx(Ev,{children:s.jsx(cv,{to:tt.to,prefix:tt.prefix,suffix:tt.suffix,play:h})}),s.jsx(Mv,{children:tt.label})]},tt.label))})})]})},$d={prose:"var(--maxw-prose)",content:"var(--maxw-content)",wide:"var(--maxw-wide)",full:"var(--maxw-full)"},Xl=x.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,Vl=x.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--gutter);
  max-width: calc(${({$max:o="content"})=>$d[o]} + var(--gutter) * 2);

  /* halve the left/right whitespace on desktop */
  ${Z.desktop} {
    max-width: calc((100vw + ${({$max:o="content"})=>$d[o]} + var(--gutter) * 2) / 2);
  }
`,Nv=x.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${st.mono};
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
`,Uv=x.h2`
  font-family: ${st.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.03em;
  line-height: 0.98;
  font-size: clamp(38px, 7vw, 84px);
`,Hv=x.p`
  color: var(--ink-2);
  font-size: clamp(17px, 2.1vw, 21px);
  line-height: 1.6;
  max-width: 60ch;
`,Bv=x.span`
  display: block;
  height: 2px;
  width: 64px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-hot));
  transform-origin: left;
`,_v=x(Y.div)`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 56px;
  align-items: ${({$align:o})=>o==="center"?"center":"flex-start"};
  text-align: ${({$align:o})=>o==="center"?"center":"left"};
  ${Z.tablet} { margin-bottom: 80px; }
`,wl=({title:o,kicker:h,lead:m,align:r="left"})=>{const b=Ot(),E=L.useRef(null),{scrollYProgress:M}=Nn({target:E,offset:["start end","end start"]}),O=zl(M,[0,1],[b?0:30,b?0:-30]);return s.jsxs(_v,{ref:E,$align:r,style:b?void 0:{y:O},children:[h&&s.jsx(Y.div,{initial:b?!1:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.6},transition:{duration:.5,ease:[.16,1,.3,1]},children:s.jsx(Nv,{children:h})}),s.jsx(Co,{as:Uv,text:o}),s.jsx(Y.div,{style:{transformOrigin:r==="center"?"center":"left"},initial:b?!1:{scaleX:0,opacity:0},whileInView:{scaleX:1,opacity:1},viewport:{once:!0,amount:.6},transition:{duration:.7,delay:.15,ease:[.16,1,.3,1]},children:s.jsx(Bv,{})}),m&&s.jsx(Y.div,{initial:b?!1:{opacity:0,y:16,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.5},transition:{duration:.7,delay:.2,ease:[.16,1,.3,1]},children:s.jsx(Hv,{style:r==="center"?{marginInline:"auto"}:void 0,children:m})})]})},Rv=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}],Lv=x(Xl)`
  background:
    radial-gradient(120% 80% at 100% 0%, rgba(var(--accent-rgb), 0.06), transparent 60%);
`,qv=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 8px;

  ${Z.tablet} {
    grid-template-columns: 0.42fr 0.58fr;
    gap: 80px;
  }
`,Yv=x.div`
  ${Z.tablet} { position: sticky; top: 120px; height: max-content; }
`,Qv=x.span`
  font-family: ${st.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-ink);
  display: block;
  margin-bottom: 18px;
`,Gv=x.p`
  font-family: ${st.display};
  font-weight: 500;
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--ink);
`,kv=x.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  p {
    font-size: clamp(16px, 1.8vw, 18px);
    line-height: 1.75;
    color: var(--ink-2);
    max-width: 65ch;
  }
`,Xv=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  margin-top: 72px;
  border-top: 1px solid var(--line);

  ${Z.mobile} { grid-template-columns: repeat(3, 1fr); }
`,Vv=x.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${Z.mobile} {
    padding: 36px 28px 36px 0;
    border-right: 1px solid var(--line);
    &:last-child { border-right: none; padding-right: 0; }
    &:not(:first-child) { padding-left: 28px; }
  }
  ${Z.belowMobile} { border-bottom: 1px solid var(--line); }
`,Zv=x.h3`
  font-family: ${st.display};
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
`,Kv=x.p`
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ink-3);
`,Jv=x.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`,Wv=x(Y.a)`
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
`,$v=({data:o})=>{const h=o.content.slice(0,3).map(m=>m.replace(/^🔹\s*/,"").trim());return s.jsx(Lv,{id:"about",children:s.jsxs(Vl,{$max:"wide",children:[s.jsx(wl,{title:"About",lead:h[0]}),s.jsxs(qv,{children:[s.jsx(Yv,{children:s.jsxs(kl,{dir:"up",children:[s.jsx(Qv,{children:"The throughline"}),s.jsx(Gv,{children:"Technical depth, measured in business outcomes."})]})}),s.jsxs(kv,{children:[s.jsx(kl,{dir:"up",delay:.05,children:s.jsx("p",{children:h[1]})}),s.jsx(kl,{dir:"up",delay:.12,children:s.jsx("p",{children:h[2]})})]})]}),s.jsx(Xv,{children:Rv.map((m,r)=>s.jsxs(kl,{as:Vv,dir:"up",delay:r*.08,children:[s.jsx(Zv,{children:m.title}),s.jsx(Kv,{children:m.text})]},m.title))}),s.jsx(Jv,{children:s.jsx(oh,{strength:.3,style:{display:"inline-block"},children:s.jsxs(Wv,{href:o.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.04},whileTap:{scale:.97},children:[s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),o.buttonProps.name]})})})]})})},Fd=[.16,1,.3,1],Fv=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 5vh, 64px) clamp(48px, 6vw, 96px);
  margin-top: clamp(40px, 6vh, 72px);

  ${Z.tablet} { grid-template-columns: repeat(2, 1fr); }
`,Iv=x(Y.div)`
  display: flex;
  flex-direction: column;
`,Pv=x.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px solid var(--line);
`,tg=x.h3`
  font-family: ${st.display};
  font-size: clamp(18px, 2vw, 23px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.1;
`,eg=x.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,lg=x.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`,ag=x.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,ng=x.span`
  font-size: 14.5px;
  color: var(--ink);
  line-height: 1.25;
`,ig=x.span`
  font-family: ${st.mono};
  font-size: 12.5px;
  color: var(--ink-3);
  flex-shrink: 0;
`,cg=x.div`
  position: relative;
  height: 4px;
  border-radius: 4px;
  background: var(--line);
  overflow: hidden;
`,ug=x(Y.span)`
  position: absolute;
  inset: 0;
  border-radius: 4px;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), var(--accent-ink));
`,og=({data:o})=>{const h=Ot();return s.jsx(Xl,{id:"technologyproficiency",children:s.jsxs(Vl,{$max:"wide",children:[s.jsx(wl,{title:"Skills",lead:"The stack behind agentic AI systems, billion-row analytics, and platforms that stay up while they scale."}),s.jsx(Fv,{children:o.skills.map(m=>s.jsxs(Iv,{initial:h?!1:{opacity:0,y:26},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6,ease:Fd},children:[s.jsx(Pv,{children:s.jsx(tg,{children:m.category})}),s.jsx(eg,{children:m.skills.map((r,b)=>s.jsxs(lg,{children:[s.jsxs(ag,{children:[s.jsx(ng,{children:r.name}),s.jsxs(ig,{children:[r.percentage,"%"]})]}),s.jsx(cg,{children:s.jsx(ug,{initial:h?{scaleX:r.percentage/100}:{scaleX:0},whileInView:{scaleX:r.percentage/100},viewport:{once:!0,amount:.8},transition:{duration:.9,delay:.1+b*.06,ease:Fd}})})]},r.name))})]},m.category))})]})})},sg=x.div`
  position: relative;
  padding-left: 30px;
  ${Z.tablet} { padding-left: 220px; }
`,rg=x.span`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: var(--line);
  ${Z.tablet} { left: 188px; }
`,fg=x(Y.span)`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: linear-gradient(var(--accent), var(--accent-hot));
  transform-origin: top;
  ${Z.tablet} { left: 188px; }
`,dg=x(Y.div)`
  position: relative;
  padding: 0 0 56px;
  &:last-child { padding-bottom: 0; }
`,hg=x.span`
  position: absolute;
  top: 7px;
  left: -30px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-elev);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 4px var(--bg), 0 0 14px rgba(var(--accent-rgb), 0.5);
  ${Z.tablet} { left: -38px; }
`,pg=x.span`
  font-family: ${st.mono};
  font-size: 13px;
  color: var(--ink-3);
  letter-spacing: 0.02em;
  display: block;
  margin-bottom: 8px;

  ${Z.tablet} {
    position: absolute;
    left: -220px;
    top: 4px;
    width: 168px;
    text-align: right;
    margin-bottom: 0;
  }
`,mg=x.h3`
  font-family: ${st.display};
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
`,vg=x.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--accent-ink);
  margin-bottom: 2px;
`,gg=x.p`
  font-size: 13.5px;
  color: var(--ink-3);
  font-style: italic;
  margin-bottom: 16px;
`,yg=x.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--ink-2);

  a { color: var(--accent-ink); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--line-2); }
  a:hover { text-decoration-color: var(--accent); }
`,bg=x.button`
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
`,xg=x.span`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  vertical-align: bottom;
`,Sg=x(Y.span)`
  display: inline-block;
  white-space: nowrap;
`,zg=x(Y.div)`
  display: grid;
  overflow: hidden;
`,wg=x.div`
  min-height: 0;
  overflow: hidden;
`,Ag=x.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
`,Tg=x.li`
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
`,Eg=({data:o})=>{const h=Ot(),m=L.useRef(null),[r,b]=L.useState(new Set),{scrollYProgress:E}=Nn({target:m,offset:["start 60%","end 60%"]}),M=zl(E,[0,1],[0,1]),O=On(M,{stiffness:140,damping:30,mass:.4}),N=D=>b(Q=>{const j=new Set(Q);return j.has(D)?j.delete(D):j.add(D),j});return s.jsx(Xl,{id:"professionalexperience",children:s.jsxs(Vl,{$max:"wide",children:[s.jsx(wl,{title:"Experience",lead:"A decade across enterprise SaaS, from shipping features to owning platform architecture for global consulting clients."}),s.jsxs(sg,{ref:m,children:[s.jsx(rg,{}),!h&&s.jsx(fg,{style:{scaleY:O}}),o.timeline.map((D,Q)=>{const j=r.has(Q);return s.jsxs(dg,{initial:h?!1:{opacity:0,x:-24,filter:"blur(6px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.6,ease:[.16,1,.3,1]},children:[s.jsx(hg,{}),s.jsx(pg,{children:D.date}),s.jsx(mg,{children:s.jsx("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",children:D.title})}),s.jsx(vg,{children:D.subTitle}),D.previously&&s.jsxs(gg,{children:["Previously: ",D.previously]}),s.jsx(yg,{dangerouslySetInnerHTML:{__html:D.descriptionSummary}}),D.achievements&&D.achievements.length>0&&s.jsxs(s.Fragment,{children:[s.jsxs(bg,{"data-open":j,onClick:()=>N(Q),"aria-expanded":j,children:[s.jsx("span",{children:"Show"}),s.jsx(xg,{children:s.jsx(ac,{mode:"popLayout",initial:!1,children:s.jsx(Sg,{initial:{y:"100%",opacity:0},animate:{y:"0%",opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.3,ease:[.16,1,.3,1]},children:j?"Less":"More"},j?"less":"more")})}),s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M6 9l6 6 6-6"})})]}),s.jsx(ac,{initial:!1,children:j&&s.jsx(zg,{initial:{gridTemplateRows:"0fr",opacity:0},animate:{gridTemplateRows:"1fr",opacity:1},exit:{gridTemplateRows:"0fr",opacity:0},transition:{gridTemplateRows:{duration:.45,ease:[.16,1,.3,1]},opacity:{duration:.3,ease:[.16,1,.3,1]}},children:s.jsx(wg,{children:s.jsx(Ag,{children:D.achievements.map((C,k)=>s.jsxs(Tg,{children:[s.jsx("strong",{children:C.title}),": ",C.description]},k))})})})})]})]},Q)})]})]})})};function Mg(o){const h=L.useCallback(b=>{const E=window.matchMedia(o);return E.addEventListener("change",b),()=>E.removeEventListener("change",b)},[o]),m=L.useCallback(()=>window.matchMedia(o).matches,[o]),r=L.useCallback(()=>!1,[]);return L.useSyncExternalStore(h,m,r)}const rh=x.div`
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
`,jg=x.h3`
  font-family: ${st.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.12;
  margin-bottom: 20px;
`,Dg=x.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;
`,Cg=x.li`
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
`,Og=x.section`
  position: relative;
  --rail: max(var(--gutter), calc((100vw - var(--maxw-wide)) / 2));

  /* match the halved left/right whitespace used app-wide on desktop */
  ${Z.desktop} {
    --rail: calc((100vw - var(--maxw-wide) - var(--gutter) * 2) / 4 + var(--gutter));
  }
`,Ng=x.div`
  position: sticky;
  top: 0;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`,Ug=x.div`
  padding-inline: var(--rail);
  margin: 0 0 40px;
  width: 100%;
`,Hg=x(Y.div)`
  display: flex;
  gap: 26px;
  padding: 0 var(--rail) 8px;
  will-change: transform;

  ${rh} { width: min(440px, 82vw); }
`,Bg=x.div`
  margin: 30px var(--rail) 0;
  height: 2px;
  background: var(--line);
  border-radius: 2px;
  overflow: hidden;
`,_g=x(Y.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-hot));
  transform-origin: left;
`,Rg=x.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,Lg=x.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);

  /* halve the left/right whitespace on desktop */
  ${Z.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,qg=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${Z.mobile} { grid-template-columns: repeat(2, 1fr); }
`,fh=({title:o,content:h})=>s.jsxs(rh,{children:[s.jsx(jg,{children:o}),s.jsx(Dg,{children:h.slice(0,4).map((m,r)=>s.jsx(Cg,{children:m},r))})]}),dh="The systems I would put my name on, with the numbers that came with them.",Yg=({data:o})=>{const h=L.useRef(null),m=L.useRef(null),[r,b]=L.useState(0),{scrollYProgress:E}=Nn({target:h,offset:["start start","end end"]}),M=zl(E,[0,1],[0,-r]),O=zl(E,[0,1],[0,1]);return L.useEffect(()=>{const N=()=>{const D=m.current;D&&b(Math.max(0,D.scrollWidth-window.innerWidth+48))};return N(),window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]),s.jsx(Og,{id:"mostproudof",ref:h,style:{height:`calc(100dvh + ${r}px)`},children:s.jsxs(Ng,{children:[s.jsx(Ug,{children:s.jsx(wl,{title:"Most Proud Of",lead:dh})}),s.jsx(Hg,{ref:m,style:{x:M},children:o.content.map(N=>s.jsx(fh,{title:N.title,content:N.content},N.id))}),s.jsx("div",{style:{width:"100%"},children:s.jsx(Bg,{children:s.jsx(_g,{style:{scaleX:O}})})})]})})},Qg=({data:o})=>s.jsx(Rg,{id:"mostproudof",children:s.jsxs(Lg,{children:[s.jsx(wl,{title:"Most Proud Of",lead:dh}),s.jsx(qg,{children:o.content.map((h,m)=>s.jsx(kl,{dir:"up",delay:m%2*.06,children:s.jsx(fh,{title:h.title,content:h.content})},h.id))})]})}),Gg=({data:o})=>{const h=Ot();return Mg("(min-width: 1024px)")&&!h?s.jsx(Yg,{data:o}):s.jsx(Qg,{data:o})},kg=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${Z.mobile} { grid-template-columns: repeat(3, 1fr); gap: 20px; }
`,Xg=x(Y.div)`
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
`,Vg=x.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${st.mono};
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--accent-ink);
  margin-bottom: 18px;

  span.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
`,Zg=x.h3`
  font-family: ${st.display};
  font-size: clamp(18px, 1.8vw, 21px);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: var(--ink);
  margin-bottom: auto;
`,Kg=x.a`
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
`,Jg=o=>{const h=o.toLowerCase();return h.includes("azure")||h.includes("microsoft")?"Microsoft":h.includes("aws")?"Amazon Web Services":"Credential"},Wg=({data:o})=>{const h=Ot();return s.jsx(Xl,{id:"certifications",children:s.jsxs(Vl,{$max:"wide",children:[s.jsx(wl,{title:"Certifications",lead:"Cloud and data credentials across Azure and AWS, kept current."}),s.jsx(kg,{children:o.certificateProps.certificateMetaData.map((m,r)=>s.jsx(sh,{max:9,children:s.jsxs(Xg,{initial:h?!1:{opacity:0,y:28,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.3},transition:{duration:.6,delay:r*.1,ease:[.16,1,.3,1]},children:[s.jsxs(Vg,{children:[s.jsx("span",{className:"dot"}),Jg(m.title)]}),s.jsx(Zg,{children:m.title}),s.jsxs(Kg,{href:m.buttonProps.link,target:"_blank",rel:"noopener noreferrer",children:["Verify credential",s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),s.jsx("path",{d:"M15 3h6v6M10 14L21 3"})]})]})]})},r))})]})})},Id=[.16,1,.3,1],$g=x.div`
  max-width: 900px;
`,Fg=x(Y.blockquote)`
  position: relative;
  padding-left: clamp(22px, 3vw, 38px);
  font-family: ${st.display};
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
`,Ig=x(Y.figcaption)`
  margin-top: clamp(30px, 4.5vh, 48px);
  padding-left: clamp(22px, 3vw, 38px);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Pg=x.span`
  font-weight: 600;
  font-size: 16px;
  color: var(--ink);
`,t1=x.span`
  font-size: 14px;
  color: var(--ink-3);

  em {
    font-style: normal;
    font-family: ${st.mono};
    font-size: 11.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-ink);
  }
`,e1=({data:o})=>{const h=Ot(),m=o.quoteProps.quoteMetaData[0];return m?s.jsx(Xl,{id:"testimonials",children:s.jsxs(Vl,{$max:"wide",children:[s.jsx(wl,{title:"Testimonials",lead:"Words from people I have built alongside."}),s.jsxs($g,{children:[s.jsxs(Fg,{initial:h?!1:{opacity:0,y:22,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.8,ease:Id},children:["“",m.quote,"”"]}),s.jsxs(Ig,{initial:h?!1:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.6},transition:{duration:.6,delay:.15,ease:Id},children:[s.jsx(Pg,{children:m.givenBy}),s.jsxs(t1,{children:[m.subTitleGivenBy,m.source&&s.jsxs(s.Fragment,{children:["  ·  ",s.jsxs("em",{children:["via ",m.source]})]})]})]})]})]})}):null},l1=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid var(--line);

  ${Z.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 56px;
  }
`,a1=x(Y.div)`
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 8px;
`,n1=x.span`
  font-family: ${st.mono};
  font-size: 13px;
  color: var(--accent-ink);
  letter-spacing: 0.02em;
`,i1=x.h3`
  font-family: ${st.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.15;
`,c1=x.p`
  font-size: 15px;
  color: var(--ink-2);
  line-height: 1.5;
`,u1=({data:o})=>{const h=Ot();return s.jsx(Xl,{id:"educationalqualifications",children:s.jsxs(Vl,{$max:"wide",children:[s.jsx(wl,{title:"Education"}),s.jsx(l1,{children:o.timeline.map((m,r)=>s.jsxs(a1,{initial:h?!1:{opacity:0,y:22,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.55,delay:r%2*.08,ease:[.16,1,.3,1]},children:[s.jsx(n1,{children:m.date}),s.jsx(i1,{children:m.title}),s.jsx(c1,{children:m.subTitle})]},r))})]})})},o1=x.h2`
  font-family: ${st.display};
  font-weight: 600;
  font-size: clamp(40px, 7.5vw, 88px);
  letter-spacing: -0.035em;
  line-height: 0.96;
  color: var(--ink);
  margin-bottom: 26px;

  em { font-style: normal; color: var(--accent-ink); }
`,s1=x.p`
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.6;
  color: var(--ink-2);
  max-width: 50ch;
  margin-bottom: 64px;
`,r1=x.div`
  border-top: 1px solid var(--line);
`,hh=x(Y.a)`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 26px 4px;
  border-bottom: 1px solid var(--line);
  transition: padding-left 0.35s var(--ease-out);

  &:hover { padding-left: 16px; }
`,f1=x.span`
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
`,d1=x.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
  flex: 1;
`,h1=x.span`
  font-family: ${st.mono};
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
`,p1=x.span`
  font-family: ${st.display};
  font-size: clamp(18px, 2.4vw, 24px);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,m1=x.span`
  flex-shrink: 0;
  color: var(--ink-3);
  transition: transform 0.3s var(--ease-out), color 0.3s var(--ease-out);
  svg { width: 20px; height: 20px; }

  ${hh}:hover & { color: var(--accent-ink); transform: translate(4px, -4px); }
`,v1={email:s.jsx(ih,{}),phone:s.jsx(bm,{}),linkedin:s.jsx(xm,{}),location:s.jsx(Sm,{})},g1=({data:o})=>{const h=Ot();return s.jsx(Xl,{id:"contact",children:s.jsxs(Vl,{$max:"wide",children:[s.jsx(kl,{dir:"up",children:s.jsxs(o1,{children:[s.jsx(Co,{text:"Let's build something"}),s.jsx("br",{}),s.jsx("em",{children:s.jsx(Co,{text:"that scales.",delay:.15})})]})}),s.jsx(kl,{dir:"up",delay:.1,children:s.jsx(s1,{children:"Architecture, agentic AI, or platform performance. If it needs to work at scale, I want to hear about it."})}),s.jsx(r1,{children:o.contactMetaData.map((m,r)=>{const b=m.icon.toLowerCase(),E=m.href.startsWith("http");return s.jsxs(hh,{href:m.href,target:E?"_blank":void 0,rel:E?"noopener noreferrer":void 0,initial:h?!1:{opacity:0,y:20,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.5,delay:r*.07,ease:[.16,1,.3,1]},children:[s.jsx(f1,{children:v1[b]??s.jsx(ih,{})}),s.jsxs(d1,{children:[s.jsx(h1,{children:b==="email"?"Email":m.icon}),s.jsx(p1,{children:m.content})]}),s.jsx(m1,{children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M7 17L17 7M9 7h8v8"})})})]},r)})})]})})},y1={sectionTitle:"About Me",content:["🔹  I architect systems that process 200M+ records across 100+ tables in under 15 minutes — with zero downtime. Currently the Enterprise Architect of Promotion Advisor, McKinsey Periscope's flagship multi-tenant SaaS, where I lead end-to-end technical strategy across agentic AI, cloud-native platforms, and high-throughput data infrastructure for 65+ engineers and global enterprise CPG and retail clients.","An expert in designing multi-agent AI architectures (MCP connectors, evaluation harnesses, instruction-set ownership), transforming legacy monoliths into cloud-native microservices on Kubernetes, and modernizing data pipelines with Databricks, ClickHouse, and PostgreSQL — delivering billion-row sub-second analytics and sub-2 second response times on 2M+ record datasets.","Passionate about Spec-Driven Development and the AI-led SDLC. Coached org-wide adoption of Cursor and SDD frameworks (OpenSpec, SpecKit, BMad), delivering a 37% capacity increase. I balance technical depth with measurable business outcomes — embedding security-first practices (SOC2, Casbin, two-layer FAC + DAC) and FinOps discipline across the SDLC, and aligning architecture roadmaps with OKRs."],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},b1={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},x1={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},S1={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},z1={name:"Pranshu Nijhawan",designation:"Architecting Agentic AI. Engineering at Scale.",headline:"Principal Architect with 10+ years in enterprise SaaS, currently the Enterprise Architect of McKinsey Periscope's flagship multi-tenant Promotion Advisor platform across 65+ engineers. I architect agentic AI systems (MCP, multi-agent orchestration, evaluation harnesses), high-performance data platforms (sub-2 second response on 2M+ records, billion-row ClickHouse analytics), and two-layer security (FAC + DAC with Casbin) — while coaching org-wide AI-assisted engineering that delivered a 37% capacity increase and spearheading Spec-Driven Development to evolve the organization toward an AI-led SDLC.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},w1={sectionTitle:"Most Proud Of",content:[{id:1,title:"Multi-Agent AI Architecture for Promotion Advisor (Periscope)",content:["Built a multi-agent architecture for McKinsey's flagship Promotion Advisor SaaS, with MCP (Model Context Protocol) connectors, externalized instruction sets owned by product teams, and evaluation harnesses for continuous quality.","Read-replica isolation with data-access control enforced at the SQL layer ensured agentic workflows could never cross tenant or authorization boundaries.","Cut business-rule changes from multi-day deploys to hour-level config updates, dramatically accelerating client-driven iteration cycles.","Established the architectural pattern for product teams to self-serve new agentic capabilities without architectural review."]},{id:2,title:"Spec-Driven Development Agents & AI-Led SDLC",content:["Introduced org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit, BMad) across greenfield and brownfield product development.","Developed the 'Spec-Driven Development Agent' and 'Repo Mastery Agent' — autonomous systems enforcing 11-dimension anti-hallucination audits and 100/100 Spec Quality Scores.","Established the abstraction and technical detail required for Devs, Product Managers, and QAs to seamlessly collaborate on a shared spec.","Coaching delivered a 37% capacity increase across the engineering organization, evolving the SDLC toward an AI-led model.","Built and deployed 10+ production agents (Architecture Diagram Generators, ADR / APR Writers, automated Technical Communications)."]},{id:3,title:"Real-Time Conflict Engine — 5,000x Algorithmic Speedup",content:["Built real-time multi-dimensional conflict detection on PostgreSQL using progressive candidate narrowing for the Promotion Advisor platform.","Delivered sub-2 second response times on 2M+ record datasets with multi-dimensional eligibility rules.","Achieved a 5,000x algorithmic improvement over the prior implementation through query restructuring and index strategy.","Unlocked interactive what-if analysis for consulting clients that was previously a batch-only workflow."]},{id:4,title:"ClickHouse Analytics Platform — Billion-Row Sub-Second Queries",content:["Architected the platform's ClickHouse analytics layer for billion-row sub-second queries powering interactive dashboards.","Optimized the data model with Projections and Dictionaries; built a dynamic Query Builder Engine for runtime-composed analytical queries.","Delivered 6.6–12.6x cost efficiency versus Databricks SQL Serverless on equivalent workloads.","Achieved ~11x compression versus Delta Lake on the same datasets, materially reducing storage and scan costs."]},{id:5,title:"Two-Layer Authorization Engine (FAC + DAC) with Casbin",content:["Designed a two-layer authorization architecture so unauthorized data never leaves the database.","Layer 1 — Feature Access Control: enforces capability-level permissions at the GraphQL resolver middleware.","Layer 2 — Data Access Control: integrates Casbin at the SQL layer, dynamically rewriting queries based on identity, tenant, and role.","Replaced ad-hoc per-query permission checks with a single declarative policy surface auditable across the platform."]},{id:6,title:"Analytics Cost Migration — $172K Annual Savings",content:["Migrated heavy analytics workloads from variable-cost Databricks compute to fixed-cost PostgreSQL.","Cut annual analytics infrastructure spend by $172K (a 23–50% reduction depending on the workload profile).","Re-architected query patterns and data models to make PostgreSQL competitive with Databricks SQL on the migrated workloads.","Delivered FinOps wins without compromising analytical capability or query latency for end users."]},{id:7,title:"Zero-Downtime ETL Platform — Blue/Green Data Processing at Scale",content:["Engineered a highly scalable and fault-tolerant ETL platform using Databricks, Spark, Azure Data Factory, and PostgreSQL.","Designed around a Blue/Green deployment strategy to ensure zero downtime during data ingestion and transformation cycles.","Processed 200+ million records across 100+ tables in under 15 minutes using Change Data Capture (CDC) and dynamic schema allocation.","Enabled seamless schema evolution and pipeline reusability across multiple tenants and data domains."]}]},A1={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect I",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 – Present",descriptionSummary:`At McKinsey, I serve as the Enterprise Architect of <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a>, a flagship multi-tenant SaaS in the <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> suite for CPG and retail clients. I built the platform's multi-agent AI architecture, coached org-wide AI-assisted engineering that delivered a 37% capacity increase, and spearheaded Spec-Driven Development to evolve the organization toward an AI-led SDLC — while leading 65+ engineers across 5 Development and 1 Core Support Squad and partnering with senior consulting leaders on high-stakes RFPs and enterprise implementations.`,achievements:[{title:"Agentic AI Architecture",description:"Built a multi-agent architecture for the platform using MCP (Model Context Protocol) connectors, externalized instruction sets owned by product teams, evaluation harnesses, and read-replica isolation with data-access control enforced at the SQL layer. Cut business-rule changes from multi-day deploys to hour-level config updates."},{title:"Spec-Driven Development & AI-Led SDLC",description:"Introduced org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit) across greenfield and brownfield product development. Developed the 'Spec-Driven Development Agent' and 'Repo Mastery Agent' — autonomous systems enforcing 11-dimension anti-hallucination audits and 100/100 Spec Quality Scores — establishing the abstraction and technical detail required for Devs, Product Managers, and QAs to seamlessly collaborate on a shared spec."},{title:"Enterprise Agent Skills Library",description:"Built a comprehensive library of autonomous, self-contained AI agents leveraging embedded design systems, deterministic validation checklists, and MCP tools. Deployed 10+ production agents across enterprise products, including Architecture Diagram Generators, ADR/APR Writers, and automated Technical Communications."},{title:"Real-Time Conflict Engine — 5,000x Speedup",description:"Built real-time multi-dimensional conflict detection on PostgreSQL using progressive candidate narrowing. Delivered sub-2 second response times on 2M+ records, achieving a 5,000x algorithmic improvement over the prior implementation."},{title:"ClickHouse Analytics Platform",description:"Built the platform's ClickHouse analytics layer for billion-row sub-second queries. Optimized the data model with Projections and Dictionaries and built a dynamic Query Builder Engine. Delivered 6.6–12.6x cost efficiency vs Databricks SQL Serverless and ~11x compression vs Delta Lake."},{title:"Analytics Cost Migration — $172K/Year Savings",description:"Migrated heavy analytics workloads from variable-cost Databricks compute to fixed-cost PostgreSQL. Cut annual analytics infrastructure spend by $172K (a 23–50% reduction depending on the workload)."},{title:"Two-Layer Authorization Engine (FAC + DAC)",description:"Built a two-layer authorization engine. Layer 1 (Feature Access Control) enforces at the GraphQL resolver middleware. Layer 2 (Data Access Control) integrates Casbin at the SQL layer, dynamically rewriting queries so unauthorized data never leaves the database."},{title:"NL-to-SQL ML Prototyping",description:"Trained a custom encoder-decoder transformer (BPE tokenizer, PyTorch) and fine-tuned T5 on synthetic NL-to-SQL datasets generated from production PostgreSQL schemas."},{title:"Engineering Standards & FinOps",description:"Institutionalized cross-product standards by publishing the C4 Architecture Handbook, deploying a serverless Azure cost attribution dashboard via GitHub Actions, and building an automated external API documentation pipeline with Git changelog guardrails."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 – March 2022",descriptionSummary:'At Eptura, I re-architected a single-tenant workspace SaaS — <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software) — to cloud-native microservices on AKS and built a global IoT release orchestrator synchronizing 300M+ devices. Directed 20 engineers across 4 squads, driving technical excellence and team growth.',achievements:[{title:"Cloud-Native Re-Architecture",description:"Migrated legacy single-tenant SaaS to cloud-native microservices on Azure Kubernetes Service (AKS). Delivered 60% faster incident recovery and eliminated single-tenant scaling bottlenecks critical for client operations."},{title:"Global IoT Release Orchestration",description:"Built a release orchestration system (Azure IoT Hub, Azure Functions, Azure CosmosDB) synchronizing firmware updates across 300M+ IoT devices globally with zero-downtime rollouts."},{title:"Engineering Leadership",description:"Directed 20 engineers (4 tech leads) across four squads. Established a structured mentorship program: +20% retention and accelerated engineering progression."}]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 – April 2021",descriptionSummary:"At Nagarro, I shipped full-stack web and mobile applications for e-commerce and HR enterprise clients on Angular, .NET Core, PostgreSQL, and Ionic. Established CI/CD and IaC practices that cut deployment failures by 70% across client projects.",achievements:[{title:"Full-Stack Web + Mobile Delivery",description:"Shipped production apps on Angular, .NET Core, PostgreSQL, and Ionic Framework for e-commerce and HR clients with 99.5%+ uptime across web and mobile."},{title:"CI/CD & Infrastructure as Code",description:"Established CI/CD pipelines and IaC practices: 70% reduction in deployment failures across client projects, ensuring stable and predictable software releases."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 – December 2019",descriptionSummary:'At Condeco, I shipped C# / .NET / React / SQL Server microservices for the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> workspace SaaS that sustained 3x customer growth without reliability regressions. Cut build times by 40% and core query latency by 3x through data model refactoring.',achievements:[{title:"Microservices for 3x Customer Scale",description:"Designed and shipped C# / .NET / React / SQL Server microservices, sustaining 3x customer scale-up without reliability regressions for the workspace SaaS platform."},{title:"CI/CD & Data Model Optimization",description:"Cut build times by 40% and refactored core data models to reduce average query latency by 3x, resulting in faster, more reliable releases and improved client-facing performance."}]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",previously:"Intern",date:"February 2016 – August 2018",descriptionSummary:"At Gartner, I shipped backend features on C# / .NET Core / React for an HR analytics SaaS, improving survey data accuracy by 60% for consulting clients. Automated SQL workflows saved 240+ engineering hours annually.",achievements:[{title:"SaaS Analytics Backend",description:"Shipped backend features on C# / .NET Core / React for the HR analytics platform, improving employee survey data accuracy by 60% for consulting clients."},{title:"SQL Workflow Automation",description:"Developed and automated SQL workflows (stored procedures, SQL Agent jobs): saved 240+ engineering hours annually in manual data processing and improved data delivery efficiency for clients."}],last:!0}]},T1={sectionTitle:"Technology Proficiency",skills:[{icon:"AI",category:"AI & Agentic Engineering",skills:[{name:"Multi-Agent Orchestration",percentage:100},{name:"MCP (Model Context Protocol)",percentage:100},{name:"Cursor (Rules / Skills / Agents / Hooks / SDK)",percentage:100},{name:"Spec-Driven Development (OpenSpec, SpecKit, BMad)",percentage:100},{name:"RAG & Evaluation Frameworks",percentage:90},{name:"PyTorch / T5 Fine-tuning, NL-to-SQL",percentage:80}]},{icon:"Architecture",category:"Architecture",skills:[{name:"Multi-Tenant SaaS Architecture",percentage:100},{name:"Microservices & Event-Driven Architecture",percentage:100},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Distributed Systems",percentage:100},{name:"C4 Modeling & ADR / APR Authorship",percentage:95},{name:"Serverless",percentage:80}]},{icon:"Backend",category:"Backend",skills:[{name:"TypeScript / Node.js / Fastify",percentage:100},{name:"C# / .NET Core",percentage:100},{name:"Python",percentage:90},{name:"GraphQL",percentage:90},{name:"REST APIs",percentage:100}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"TypeScript",percentage:100},{name:"Angular",percentage:90},{name:"Micro-Frontends",percentage:90},{name:"Ionic Framework",percentage:60}]},{icon:"Database",category:"Data & Storage",skills:[{name:"PostgreSQL",percentage:100},{name:"ClickHouse",percentage:95},{name:"SQL Server",percentage:95},{name:"NoSQL (CosmosDB, DynamoDB)",percentage:85}]},{icon:"Cloud",category:"Cloud & Infrastructure",skills:[{name:"Microsoft Azure",percentage:95},{name:"Amazon Web Services (AWS)",percentage:85},{name:"Kubernetes (AKS)",percentage:90},{name:"Terraform / ArgoCD / Helm (GitOps)",percentage:90}]},{icon:"DataEngineering",category:"Data Engineering & Real-Time Analytics",skills:[{name:"Databricks (PySpark, SparkSQL)",percentage:90},{name:"ClickHouse Analytics (Projections, Dictionaries)",percentage:95},{name:"Real-Time Analytics & Query Engines",percentage:95},{name:"Blue-Green ETL & Data Modeling",percentage:90}]},{icon:"Security",category:"Security & Compliance",skills:[{name:"Two-Layer FAC + DAC Architecture",percentage:100},{name:"Casbin RBAC / ABAC",percentage:95},{name:"SOC2 / Secure SDLC",percentage:90},{name:"Wiz / SonarQube / OpenTelemetry",percentage:85}]}]},E1={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},M1={aboutSection:y1,certifications:b1,contactMe:x1,educationalQualifications:S1,homeSection:z1,mostProudOf:w1,professionalExperience:A1,technologyProficiency:T1,testimonials:E1},Ke=M1;function j1(){const[o,h]=L.useState(!1);return s.jsxs($p,{children:[s.jsx(Jp,{}),s.jsxs(cm,{children:[s.jsx(vm,{}),s.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),s.jsx(Bm,{revealed:o}),s.jsxs("main",{id:"main-content",style:{position:"relative",zIndex:1},role:"main",children:[s.jsx(Ov,{data:Ke.homeSection,start:o}),s.jsx($v,{data:Ke.aboutSection}),s.jsx(og,{data:Ke.technologyProficiency}),s.jsx(Eg,{data:Ke.professionalExperience}),s.jsx(Gg,{data:Ke.mostProudOf}),s.jsx(Wg,{data:Ke.certifications}),s.jsx(e1,{data:Ke.testimonials}),s.jsx(u1,{data:Ke.educationalQualifications}),s.jsx(g1,{data:Ke.contactMe})]}),s.jsx($m,{}),s.jsx(ac,{children:!o&&s.jsx(av,{onComplete:()=>h(!0)},"intro")})]})]})}"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);Zp.createRoot(document.getElementById("root")).render(s.jsx(L.StrictMode,{children:s.jsx(j1,{})}));
