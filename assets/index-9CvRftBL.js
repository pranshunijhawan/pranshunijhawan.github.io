import{r as H,j as o,u as Ct,m as G,a as Me,b as Nl,L as $p,A as Rl,c as Nn,d as Za,e as Ka,f as c0}from"./vendor-motion-C8MGYtJI.js";import{r as Wp,a as Fp}from"./vendor-react-DlBnNAMw.js";import{f as Ip,d as m,m as Pp}from"./vendor-styled-CTMXd9gs.js";var Do={exports:{}},Un={},Co={exports:{}},Oo={};var Xd;function tm(){return Xd||(Xd=1,(function(s){function y(z,D){var Q=z.length;z.push(D);t:for(;0<Q;){var dt=Q-1>>>1,ht=z[dt];if(0<w(ht,D))z[dt]=D,z[Q]=ht,Q=dt;else break t}}function T(z){return z.length===0?null:z[0]}function f(z){if(z.length===0)return null;var D=z[0],Q=z.pop();if(Q!==D){z[0]=Q;t:for(var dt=0,ht=z.length,Yt=ht>>>1;dt<Yt;){var bt=2*(dt+1)-1,nt=z[bt],Ut=bt+1,Ae=z[Ut];if(0>w(nt,Q))Ut<ht&&0>w(Ae,nt)?(z[dt]=Ae,z[Ut]=Q,dt=Ut):(z[dt]=nt,z[bt]=Q,dt=bt);else if(Ut<ht&&0>w(Ae,Q))z[dt]=Ae,z[Ut]=Q,dt=Ut;else break t}}return D}function w(z,D){var Q=z.sortIndex-D.sortIndex;return Q!==0?Q:z.id-D.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;s.unstable_now=function(){return E.now()}}else{var C=Date,O=C.now();s.unstable_now=function(){return C.now()-O}}var B=[],M=[],N=1,j=null,X=3,L=!1,q=!1,F=!1,Tt=!1,vt=typeof setTimeout=="function"?setTimeout:null,lt=typeof clearTimeout=="function"?clearTimeout:null,st=typeof setImmediate<"u"?setImmediate:null;function Ot(z){for(var D=T(M);D!==null;){if(D.callback===null)f(M);else if(D.startTime<=z)f(M),D.sortIndex=D.expirationTime,y(B,D);else break;D=T(M)}}function ye(z){if(F=!1,Ot(z),!q)if(T(B)!==null)q=!0,ue||(ue=!0,ce());else{var D=T(M);D!==null&&Ce(ye,D.startTime-z)}}var ue=!1,De=-1,be=5,Ja=-1;function Rn(){return Tt?!0:!(s.unstable_now()-Ja<be)}function $a(){if(Tt=!1,ue){var z=s.unstable_now();Ja=z;var D=!0;try{t:{q=!1,F&&(F=!1,lt(De),De=-1),L=!0;var Q=X;try{e:{for(Ot(z),j=T(B);j!==null&&!(j.expirationTime>z&&Rn());){var dt=j.callback;if(typeof dt=="function"){j.callback=null,X=j.priorityLevel;var ht=dt(j.expirationTime<=z);if(z=s.unstable_now(),typeof ht=="function"){j.callback=ht,Ot(z),D=!0;break e}j===T(B)&&f(B),Ot(z)}else f(B);j=T(B)}if(j!==null)D=!0;else{var Yt=T(M);Yt!==null&&Ce(ye,Yt.startTime-z),D=!1}}break t}finally{j=null,X=Q,L=!1}D=void 0}}finally{D?ce():ue=!1}}}var ce;if(typeof st=="function")ce=function(){st($a)};else if(typeof MessageChannel<"u"){var qn=new MessageChannel,ql=qn.port2;qn.port1.onmessage=$a,ce=function(){ql.postMessage(null)}}else ce=function(){vt($a,0)};function Ce(z,D){De=vt(function(){z(s.unstable_now())},D)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return X},s.unstable_next=function(z){switch(X){case 1:case 2:case 3:var D=3;break;default:D=X}var Q=X;X=D;try{return z()}finally{X=Q}},s.unstable_requestPaint=function(){Tt=!0},s.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=X;X=z;try{return D()}finally{X=Q}},s.unstable_scheduleCallback=function(z,D,Q){var dt=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?dt+Q:dt):Q=dt,z){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=Q+ht,z={id:N++,callback:D,priorityLevel:z,startTime:Q,expirationTime:ht,sortIndex:-1},Q>dt?(z.sortIndex=Q,y(M,z),T(B)===null&&z===T(M)&&(F?(lt(De),De=-1):F=!0,Ce(ye,Q-dt))):(z.sortIndex=ht,y(B,z),q||L||(q=!0,ue||(ue=!0,ce()))),z},s.unstable_shouldYield=Rn,s.unstable_wrapCallback=function(z){var D=X;return function(){var Q=X;X=D;try{return z.apply(this,arguments)}finally{X=Q}}}})(Oo)),Oo}var Ld;function em(){return Ld||(Ld=1,Co.exports=tm()),Co.exports}var Qd;function am(){if(Qd)return Un;Qd=1;var s=em(),y=Wp(),T=Fp();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function E(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function C(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function B(t){if(E(t)!==t)throw Error(f(188))}function M(t){var e=t.alternate;if(!e){if(e=E(t),e===null)throw Error(f(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return B(n),t;if(i===l)return B(n),e;i=i.sibling}throw Error(f(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,c=n.child;c;){if(c===a){u=!0,a=n,l=i;break}if(c===l){u=!0,l=n,a=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===a){u=!0,a=i,l=n;break}if(c===l){u=!0,l=i,a=n;break}c=c.sibling}if(!u)throw Error(f(189))}}if(a.alternate!==l)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?t:e}function N(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=N(t),e!==null)return e;t=t.sibling}return null}var j=Object.assign,X=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Tt=Symbol.for("react.strict_mode"),vt=Symbol.for("react.profiler"),lt=Symbol.for("react.consumer"),st=Symbol.for("react.context"),Ot=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),Ja=Symbol.for("react.activity"),Rn=Symbol.for("react.memo_cache_sentinel"),$a=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=$a&&t[$a]||t["@@iterator"],typeof t=="function"?t:null)}var qn=Symbol.for("react.client.reference");function ql(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===qn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case vt:return"Profiler";case Tt:return"StrictMode";case ye:return"Suspense";case ue:return"SuspenseList";case Ja:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case q:return"Portal";case st:return t.displayName||"Context";case lt:return(t._context.displayName||"Context")+".Consumer";case Ot:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case De:return e=t.displayName||null,e!==null?e:ql(t.type)||"Memo";case be:e=t._payload,t=t._init;try{return ql(t(e))}catch{}}return null}var Ce=Array.isArray,z=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},dt=[],ht=-1;function Yt(t){return{current:t}}function bt(t){0>ht||(t.current=dt[ht],dt[ht]=null,ht--)}function nt(t,e){ht++,dt[ht]=t.current,t.current=e}var Ut=Yt(null),Ae=Yt(null),Fe=Yt(null),kn=Yt(null);function Gn(t,e){switch(nt(Fe,e),nt(Ae,t),nt(Ut,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?fd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=fd(e),t=dd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}bt(Ut),nt(Ut,t)}function Wa(){bt(Ut),bt(Ae),bt(Fe)}function ru(t){t.memoizedState!==null&&nt(kn,t);var e=Ut.current,a=dd(e,t.type);e!==a&&(nt(Ae,t),nt(Ut,a))}function Yn(t){Ae.current===t&&(bt(Ut),bt(Ae)),kn.current===t&&(bt(kn),Mn._currentValue=Q)}var su,Go;function Ea(t){if(su===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||"",Go=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+su+t+Go}var fu=!1;function du(t,e){if(!t||fu)return"";fu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(b){var v=b}Reflect.construct(t,[],A)}else{try{A.call()}catch(b){v=b}t.call(A.prototype)}}else{try{throw Error()}catch(b){v=b}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(b){if(b&&v&&typeof b.stack=="string")return[b.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var r=u.split(`
`),g=c.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===g.length)for(l=r.length-1,n=g.length-1;1<=l&&0<=n&&r[l]!==g[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==g[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==g[n]){var x=`
`+r[l].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=l&&0<=n);break}}}finally{fu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ea(a):""}function w0(t,e){switch(t.tag){case 26:case 27:case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return t.child!==e&&e!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return du(t.type,!1);case 11:return du(t.type.render,!1);case 1:return du(t.type,!0);case 31:return Ea("Activity");default:return""}}function Yo(t){try{var e="",a=null;do e+=w0(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var hu=Object.prototype.hasOwnProperty,pu=s.unstable_scheduleCallback,mu=s.unstable_cancelCallback,E0=s.unstable_shouldYield,M0=s.unstable_requestPaint,Wt=s.unstable_now,D0=s.unstable_getCurrentPriorityLevel,Xo=s.unstable_ImmediatePriority,Lo=s.unstable_UserBlockingPriority,Xn=s.unstable_NormalPriority,C0=s.unstable_LowPriority,Qo=s.unstable_IdlePriority,O0=s.log,U0=s.unstable_setDisableYieldValue,kl=null,Ft=null;function Ie(t){if(typeof O0=="function"&&U0(t),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(kl,t)}catch{}}var It=Math.clz32?Math.clz32:H0,B0=Math.log,_0=Math.LN2;function H0(t){return t>>>=0,t===0?32:31-(B0(t)/_0|0)|0}var Ln=256,Qn=262144,Vn=4194304;function Ma(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zn(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=Ma(l):(u&=c,u!==0?n=Ma(u):a||(a=c&~t,a!==0&&(n=Ma(a))))):(c=l&~i,c!==0?n=Ma(c):u!==0?n=Ma(u):a||(a=l&~t,a!==0&&(n=Ma(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Gl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function N0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vo(){var t=Vn;return Vn<<=1,(Vn&62914560)===0&&(Vn=4194304),t}function gu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Yl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function R0(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var c=t.entanglements,r=t.expirationTimes,g=t.hiddenUpdates;for(a=u&~a;0<a;){var x=31-It(a),A=1<<x;c[x]=0,r[x]=-1;var v=g[x];if(v!==null)for(g[x]=null,x=0;x<v.length;x++){var b=v[x];b!==null&&(b.lane&=-536870913)}a&=~A}l!==0&&Zo(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Zo(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-It(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Ko(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-It(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function Jo(t,e){var a=e&-e;return a=(a&42)!==0?1:vu(a),(a&(t.suspendedLanes|e))!==0?0:a}function vu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $o(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:Hd(t.type))}function Wo(t,e){var a=D.p;try{return D.p=t,e()}finally{D.p=a}}var Pe=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Pe,Lt="__reactProps$"+Pe,Fa="__reactContainer$"+Pe,bu="__reactEvents$"+Pe,q0="__reactListeners$"+Pe,k0="__reactHandles$"+Pe,Fo="__reactResources$"+Pe,Xl="__reactMarker$"+Pe;function xu(t){delete t[Nt],delete t[Lt],delete t[bu],delete t[q0],delete t[k0]}function Ia(t){var e=t[Nt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Fa]||a[Nt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=bd(t);t!==null;){if(a=t[Nt])return a;t=bd(t)}return e}t=a,a=t.parentNode}return null}function Pa(t){if(t=t[Nt]||t[Fa]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ll(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function tl(t){var e=t[Fo];return e||(e=t[Fo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Bt(t){t[Xl]=!0}var Io=new Set,Po={};function Da(t,e){el(t,e),el(t+"Capture",e)}function el(t,e){for(Po[t]=e,t=0;t<e.length;t++)Io.add(e[t])}var G0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tr={},er={};function Y0(t){return hu.call(er,t)?!0:hu.call(tr,t)?!1:G0.test(t)?er[t]=!0:(tr[t]=!0,!1)}function Kn(t,e,a){if(Y0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Jn(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Oe(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ar(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function X0(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Su(t){if(!t._valueTracker){var e=ar(t)?"checked":"value";t._valueTracker=X0(t,e,""+t[e])}}function lr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=ar(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function $n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var L0=/[\n"\\]/g;function re(t){return t.replace(L0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function zu(t,e,a,l,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+oe(e)):t.value!==""+oe(e)&&(t.value=""+oe(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Au(t,u,oe(e)):a!=null?Au(t,u,oe(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+oe(c):t.removeAttribute("name")}function nr(t,e,a,l,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Su(t);return}a=a!=null?""+oe(a):"",e=e!=null?""+oe(e):a,c||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Su(t)}function Au(t,e,a){e==="number"&&$n(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function al(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+oe(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function ir(t,e,a){if(e!=null&&(e=""+oe(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+oe(a):""}function ur(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(f(92));if(Ce(l)){if(1<l.length)throw Error(f(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=oe(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Su(t)}function ll(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Q0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cr(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Q0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function or(t,e,a){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&cr(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&cr(t,i,e[i])}function Tu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Z0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wn(t){return Z0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ue(){}var ju=null;function wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nl=null,il=null;function rr(t){var e=Pa(t);if(e&&(t=e.stateNode)){var a=t[Lt]||null;t:switch(t=e.stateNode,e.type){case"input":if(zu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+re(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Lt]||null;if(!n)throw Error(f(90));zu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&lr(l)}break t;case"textarea":ir(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&al(t,!!a.multiple,e,!1)}}}var Eu=!1;function sr(t,e,a){if(Eu)return t(e,a);Eu=!0;try{var l=t(e);return l}finally{if(Eu=!1,(nl!==null||il!==null)&&(Ri(),nl&&(e=nl,t=il,il=nl=null,rr(e),t)))for(e=0;e<t.length;e++)rr(t[e])}}function Ql(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Lt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(f(231,e,typeof a));return a}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(Be)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{Mu=!1}var ta=null,Du=null,Fn=null;function fr(){if(Fn)return Fn;var t,e=Du,a=e.length,l,n="value"in ta?ta.value:ta.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return Fn=n.slice(t,1<l?1-l:void 0)}function In(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pn(){return!0}function dr(){return!1}function Qt(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(a=t[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pn:dr,this.isPropagationStopped=dr,this}return j(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=Qt(Ca),Zl=j({},Ca,{view:0,detail:0}),K0=Qt(Zl),Cu,Ou,Kl,ei=j({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kl&&(Kl&&t.type==="mousemove"?(Cu=t.screenX-Kl.screenX,Ou=t.screenY-Kl.screenY):Ou=Cu=0,Kl=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),hr=Qt(ei),J0=j({},ei,{dataTransfer:0}),$0=Qt(J0),W0=j({},Zl,{relatedTarget:0}),Uu=Qt(W0),F0=j({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),I0=Qt(F0),P0=j({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),th=Qt(P0),eh=j({},Ca,{data:0}),pr=Qt(eh),ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ih(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nh[t])?!!e[t]:!1}function Bu(){return ih}var uh=j({},Zl,{key:function(t){if(t.key){var e=ah[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=In(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(t){return t.type==="keypress"?In(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?In(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ch=Qt(uh),oh=j({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mr=Qt(oh),rh=j({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),sh=Qt(rh),fh=j({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=Qt(fh),hh=j({},ei,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ph=Qt(hh),mh=j({},Ca,{newState:0,oldState:0}),gh=Qt(mh),vh=[9,13,27,32],_u=Be&&"CompositionEvent"in window,Jl=null;Be&&"documentMode"in document&&(Jl=document.documentMode);var yh=Be&&"TextEvent"in window&&!Jl,gr=Be&&(!_u||Jl&&8<Jl&&11>=Jl),vr=" ",yr=!1;function br(t,e){switch(t){case"keyup":return vh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ul=!1;function bh(t,e){switch(t){case"compositionend":return xr(e);case"keypress":return e.which!==32?null:(yr=!0,vr);case"textInput":return t=e.data,t===vr&&yr?null:t;default:return null}}function xh(t,e){if(ul)return t==="compositionend"||!_u&&br(t,e)?(t=fr(),Fn=Du=ta=null,ul=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gr&&e.locale!=="ko"?null:e.data;default:return null}}var Sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sh[t.type]:e==="textarea"}function zr(t,e,a,l){nl?il?il.push(l):il=[l]:nl=l,e=Qi(e,"onChange"),0<e.length&&(a=new ti("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var $l=null,Wl=null;function zh(t){id(t,0)}function ai(t){var e=Ll(t);if(lr(e))return t}function Ar(t,e){if(t==="change")return e}var Tr=!1;if(Be){var Hu;if(Be){var Nu="oninput"in document;if(!Nu){var jr=document.createElement("div");jr.setAttribute("oninput","return;"),Nu=typeof jr.oninput=="function"}Hu=Nu}else Hu=!1;Tr=Hu&&(!document.documentMode||9<document.documentMode)}function wr(){$l&&($l.detachEvent("onpropertychange",Er),Wl=$l=null)}function Er(t){if(t.propertyName==="value"&&ai(Wl)){var e=[];zr(e,Wl,t,wu(t)),sr(zh,e)}}function Ah(t,e,a){t==="focusin"?(wr(),$l=e,Wl=a,$l.attachEvent("onpropertychange",Er)):t==="focusout"&&wr()}function Th(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ai(Wl)}function jh(t,e){if(t==="click")return ai(e)}function wh(t,e){if(t==="input"||t==="change")return ai(e)}function Eh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pt=typeof Object.is=="function"?Object.is:Eh;function Fl(t,e){if(Pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!hu.call(e,n)||!Pt(t[n],e[n]))return!1}return!0}function Mr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dr(t,e){var a=Mr(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mr(a)}}function Cr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Or(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=$n(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=$n(t.document)}return e}function Ru(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Mh=Be&&"documentMode"in document&&11>=document.documentMode,cl=null,qu=null,Il=null,ku=!1;function Ur(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ku||cl==null||cl!==$n(l)||(l=cl,"selectionStart"in l&&Ru(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Il&&Fl(Il,l)||(Il=l,l=Qi(qu,"onSelect"),0<l.length&&(e=new ti("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=cl)))}function Oa(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var ol={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},Gu={},Br={};Be&&(Br=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function Ua(t){if(Gu[t])return Gu[t];if(!ol[t])return t;var e=ol[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Br)return Gu[t]=e[a];return t}var _r=Ua("animationend"),Hr=Ua("animationiteration"),Nr=Ua("animationstart"),Dh=Ua("transitionrun"),Ch=Ua("transitionstart"),Oh=Ua("transitioncancel"),Rr=Ua("transitionend"),qr=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function xe(t,e){qr.set(t,e),Da(e,[t])}var li=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},se=[],rl=0,Xu=0;function ni(){for(var t=rl,e=Xu=rl=0;e<t;){var a=se[e];se[e++]=null;var l=se[e];se[e++]=null;var n=se[e];se[e++]=null;var i=se[e];if(se[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&kr(a,n,i)}}function ii(t,e,a,l){se[rl++]=t,se[rl++]=e,se[rl++]=a,se[rl++]=l,Xu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Lu(t,e,a,l){return ii(t,e,a,l),ui(t)}function Ba(t,e){return ii(t,null,null,e),ui(t)}function kr(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-It(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function ui(t){if(50<Sn)throw Sn=0,Ic=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var sl={};function Uh(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function te(t,e,a,l){return new Uh(t,e,a,l)}function Qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _e(t,e){var a=t.alternate;return a===null?(a=te(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Gr(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ci(t,e,a,l,n,i){var u=0;if(l=t,typeof t=="function")Qu(t)&&(u=1);else if(typeof t=="string")u=Rp(t,a,Ut.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ja:return t=te(31,a,e,n),t.elementType=Ja,t.lanes=i,t;case F:return _a(a.children,n,i,e);case Tt:u=8,n|=24;break;case vt:return t=te(12,a,e,n|2),t.elementType=vt,t.lanes=i,t;case ye:return t=te(13,a,e,n),t.elementType=ye,t.lanes=i,t;case ue:return t=te(19,a,e,n),t.elementType=ue,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case st:u=10;break t;case lt:u=9;break t;case Ot:u=11;break t;case De:u=14;break t;case be:u=16,l=null;break t}u=29,a=Error(f(130,t===null?"null":typeof t,"")),l=null}return e=te(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function _a(t,e,a,l){return t=te(7,t,l,e),t.lanes=a,t}function Vu(t,e,a){return t=te(6,t,null,e),t.lanes=a,t}function Yr(t){var e=te(18,null,null,0);return e.stateNode=t,e}function Zu(t,e,a){return e=te(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Xr=new WeakMap;function fe(t,e){if(typeof t=="object"&&t!==null){var a=Xr.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Yo(e)},Xr.set(t,e),e)}return{value:t,source:e,stack:Yo(e)}}var fl=[],dl=0,oi=null,Pl=0,de=[],he=0,ea=null,Te=1,je="";function He(t,e){fl[dl++]=Pl,fl[dl++]=oi,oi=t,Pl=e}function Lr(t,e,a){de[he++]=Te,de[he++]=je,de[he++]=ea,ea=t;var l=Te;t=je;var n=32-It(l)-1;l&=~(1<<n),a+=1;var i=32-It(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Te=1<<32-It(e)+n|a<<n|l,je=i+t}else Te=1<<i|a<<n|l,je=t}function Ku(t){t.return!==null&&(He(t,1),Lr(t,1,0))}function Ju(t){for(;t===oi;)oi=fl[--dl],fl[dl]=null,Pl=fl[--dl],fl[dl]=null;for(;t===ea;)ea=de[--he],de[he]=null,je=de[--he],de[he]=null,Te=de[--he],de[he]=null}function Qr(t,e){de[he++]=Te,de[he++]=je,de[he++]=ea,Te=e.id,je=e.overflow,ea=t}var Rt=null,pt=null,I=!1,aa=null,pe=!1,$u=Error(f(519));function la(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tn(fe(e,t)),$u}function Vr(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Nt]=t,e[Lt]=l,a){case"dialog":J("cancel",e),J("close",e);break;case"iframe":case"object":case"embed":J("load",e);break;case"video":case"audio":for(a=0;a<An.length;a++)J(An[a],e);break;case"source":J("error",e);break;case"img":case"image":case"link":J("error",e),J("load",e);break;case"details":J("toggle",e);break;case"input":J("invalid",e),nr(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":J("invalid",e);break;case"textarea":J("invalid",e),ur(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||rd(e.textContent,a)?(l.popover!=null&&(J("beforetoggle",e),J("toggle",e)),l.onScroll!=null&&J("scroll",e),l.onScrollEnd!=null&&J("scrollend",e),l.onClick!=null&&(e.onclick=Ue),e=!0):e=!1,e||la(t,!0)}function Zr(t){for(Rt=t.return;Rt;)switch(Rt.tag){case 5:case 31:case 13:pe=!1;return;case 27:case 3:pe=!0;return;default:Rt=Rt.return}}function hl(t){if(t!==Rt)return!1;if(!I)return Zr(t),I=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||po(t.type,t.memoizedProps)),a=!a),a&&pt&&la(t),Zr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));pt=yd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));pt=yd(t)}else e===27?(e=pt,va(t.type)?(t=bo,bo=null,pt=t):pt=e):pt=Rt?ge(t.stateNode.nextSibling):null;return!0}function Ha(){pt=Rt=null,I=!1}function Wu(){var t=aa;return t!==null&&(Jt===null?Jt=t:Jt.push.apply(Jt,t),aa=null),t}function tn(t){aa===null?aa=[t]:aa.push(t)}var Fu=Yt(null),Na=null,Ne=null;function na(t,e,a){nt(Fu,e._currentValue),e._currentValue=a}function Re(t){t._currentValue=Fu.current,bt(Fu)}function Iu(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Pu(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var r=0;r<e.length;r++)if(c.context===e[r]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Iu(i.return,a,t),l||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(f(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Iu(u,a,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function pl(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(f(387));if(u=u.memoizedProps,u!==null){var c=n.type;Pt(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===kn.current){if(u=n.alternate,u===null)throw Error(f(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Mn):t=[Mn])}n=n.return}t!==null&&Pu(e,t,a,l),e.flags|=262144}function ri(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ra(t){Na=t,Ne=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qt(t){return Kr(Na,t)}function si(t,e){return Na===null&&Ra(t),Kr(t,e)}function Kr(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ne===null){if(t===null)throw Error(f(308));Ne=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ne=Ne.next=e;return a}var Bh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},_h=s.unstable_scheduleCallback,Hh=s.unstable_NormalPriority,jt={$$typeof:st,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tc(){return{controller:new Bh,data:new Map,refCount:0}}function en(t){t.refCount--,t.refCount===0&&_h(Hh,function(){t.controller.abort()})}var an=null,ec=0,ml=0,gl=null;function Nh(t,e){if(an===null){var a=an=[];ec=0,ml=no(),gl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ec++,e.then(Jr,Jr),e}function Jr(){if(--ec===0&&an!==null){gl!==null&&(gl.status="fulfilled");var t=an;an=null,ml=0,gl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Rh(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var $r=z.S;z.S=function(t,e){Bf=Wt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Nh(t,e),$r!==null&&$r(t,e)};var qa=Yt(null);function ac(){var t=qa.current;return t!==null?t:ft.pooledCache}function fi(t,e){e===null?nt(qa,qa.current):nt(qa,e.pool)}function Wr(){var t=ac();return t===null?null:{parent:jt._currentValue,pool:t}}var vl=Error(f(460)),lc=Error(f(474)),di=Error(f(542)),hi={then:function(){}};function Fr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ir(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Ue,Ue),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ts(t),t;default:if(typeof e.status=="string")e.then(Ue,Ue);else{if(t=ft,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ts(t),t}throw Ga=e,vl}}function ka(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ga=a,vl):a}}var Ga=null;function Pr(){if(Ga===null)throw Error(f(459));var t=Ga;return Ga=null,t}function ts(t){if(t===vl||t===di)throw Error(f(483))}var yl=null,ln=0;function pi(t){var e=ln;return ln+=1,yl===null&&(yl=[]),Ir(yl,t,e)}function nn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function mi(t,e){throw e.$$typeof===X?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function es(t){function e(h,d){if(t){var p=h.deletions;p===null?(h.deletions=[d],h.flags|=16):p.push(d)}}function a(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function l(h){for(var d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function n(h,d){return h=_e(h,d),h.index=0,h.sibling=null,h}function i(h,d,p){return h.index=p,t?(p=h.alternate,p!==null?(p=p.index,p<d?(h.flags|=67108866,d):p):(h.flags|=67108866,d)):(h.flags|=1048576,d)}function u(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function c(h,d,p,S){return d===null||d.tag!==6?(d=Vu(p,h.mode,S),d.return=h,d):(d=n(d,p),d.return=h,d)}function r(h,d,p,S){var R=p.type;return R===F?x(h,d,p.props.children,S,p.key):d!==null&&(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===be&&ka(R)===d.type)?(d=n(d,p.props),nn(d,p),d.return=h,d):(d=ci(p.type,p.key,p.props,null,h.mode,S),nn(d,p),d.return=h,d)}function g(h,d,p,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Zu(p,h.mode,S),d.return=h,d):(d=n(d,p.children||[]),d.return=h,d)}function x(h,d,p,S,R){return d===null||d.tag!==7?(d=_a(p,h.mode,S,R),d.return=h,d):(d=n(d,p),d.return=h,d)}function A(h,d,p){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Vu(""+d,h.mode,p),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case L:return p=ci(d.type,d.key,d.props,null,h.mode,p),nn(p,d),p.return=h,p;case q:return d=Zu(d,h.mode,p),d.return=h,d;case be:return d=ka(d),A(h,d,p)}if(Ce(d)||ce(d))return d=_a(d,h.mode,p,null),d.return=h,d;if(typeof d.then=="function")return A(h,pi(d),p);if(d.$$typeof===st)return A(h,si(h,d),p);mi(h,d)}return null}function v(h,d,p,S){var R=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return R!==null?null:c(h,d,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case L:return p.key===R?r(h,d,p,S):null;case q:return p.key===R?g(h,d,p,S):null;case be:return p=ka(p),v(h,d,p,S)}if(Ce(p)||ce(p))return R!==null?null:x(h,d,p,S,null);if(typeof p.then=="function")return v(h,d,pi(p),S);if(p.$$typeof===st)return v(h,d,si(h,p),S);mi(h,p)}return null}function b(h,d,p,S,R){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return h=h.get(p)||null,c(d,h,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case L:return h=h.get(S.key===null?p:S.key)||null,r(d,h,S,R);case q:return h=h.get(S.key===null?p:S.key)||null,g(d,h,S,R);case be:return S=ka(S),b(h,d,p,S,R)}if(Ce(S)||ce(S))return h=h.get(p)||null,x(d,h,S,R,null);if(typeof S.then=="function")return b(h,d,p,pi(S),R);if(S.$$typeof===st)return b(h,d,p,si(d,S),R);mi(d,S)}return null}function U(h,d,p,S){for(var R=null,P=null,_=d,Z=d=0,W=null;_!==null&&Z<p.length;Z++){_.index>Z?(W=_,_=null):W=_.sibling;var tt=v(h,_,p[Z],S);if(tt===null){_===null&&(_=W);break}t&&_&&tt.alternate===null&&e(h,_),d=i(tt,d,Z),P===null?R=tt:P.sibling=tt,P=tt,_=W}if(Z===p.length)return a(h,_),I&&He(h,Z),R;if(_===null){for(;Z<p.length;Z++)_=A(h,p[Z],S),_!==null&&(d=i(_,d,Z),P===null?R=_:P.sibling=_,P=_);return I&&He(h,Z),R}for(_=l(_);Z<p.length;Z++)W=b(_,h,Z,p[Z],S),W!==null&&(t&&W.alternate!==null&&_.delete(W.key===null?Z:W.key),d=i(W,d,Z),P===null?R=W:P.sibling=W,P=W);return t&&_.forEach(function(za){return e(h,za)}),I&&He(h,Z),R}function Y(h,d,p,S){if(p==null)throw Error(f(151));for(var R=null,P=null,_=d,Z=d=0,W=null,tt=p.next();_!==null&&!tt.done;Z++,tt=p.next()){_.index>Z?(W=_,_=null):W=_.sibling;var za=v(h,_,tt.value,S);if(za===null){_===null&&(_=W);break}t&&_&&za.alternate===null&&e(h,_),d=i(za,d,Z),P===null?R=za:P.sibling=za,P=za,_=W}if(tt.done)return a(h,_),I&&He(h,Z),R;if(_===null){for(;!tt.done;Z++,tt=p.next())tt=A(h,tt.value,S),tt!==null&&(d=i(tt,d,Z),P===null?R=tt:P.sibling=tt,P=tt);return I&&He(h,Z),R}for(_=l(_);!tt.done;Z++,tt=p.next())tt=b(_,h,Z,tt.value,S),tt!==null&&(t&&tt.alternate!==null&&_.delete(tt.key===null?Z:tt.key),d=i(tt,d,Z),P===null?R=tt:P.sibling=tt,P=tt);return t&&_.forEach(function(Jp){return e(h,Jp)}),I&&He(h,Z),R}function rt(h,d,p,S){if(typeof p=="object"&&p!==null&&p.type===F&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case L:t:{for(var R=p.key;d!==null;){if(d.key===R){if(R=p.type,R===F){if(d.tag===7){a(h,d.sibling),S=n(d,p.props.children),S.return=h,h=S;break t}}else if(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===be&&ka(R)===d.type){a(h,d.sibling),S=n(d,p.props),nn(S,p),S.return=h,h=S;break t}a(h,d);break}else e(h,d);d=d.sibling}p.type===F?(S=_a(p.props.children,h.mode,S,p.key),S.return=h,h=S):(S=ci(p.type,p.key,p.props,null,h.mode,S),nn(S,p),S.return=h,h=S)}return u(h);case q:t:{for(R=p.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){a(h,d.sibling),S=n(d,p.children||[]),S.return=h,h=S;break t}else{a(h,d);break}else e(h,d);d=d.sibling}S=Zu(p,h.mode,S),S.return=h,h=S}return u(h);case be:return p=ka(p),rt(h,d,p,S)}if(Ce(p))return U(h,d,p,S);if(ce(p)){if(R=ce(p),typeof R!="function")throw Error(f(150));return p=R.call(p),Y(h,d,p,S)}if(typeof p.then=="function")return rt(h,d,pi(p),S);if(p.$$typeof===st)return rt(h,d,si(h,p),S);mi(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,d!==null&&d.tag===6?(a(h,d.sibling),S=n(d,p),S.return=h,h=S):(a(h,d),S=Vu(p,h.mode,S),S.return=h,h=S),u(h)):a(h,d)}return function(h,d,p,S){try{ln=0;var R=rt(h,d,p,S);return yl=null,R}catch(_){if(_===vl||_===di)throw _;var P=te(29,_,null,h.mode);return P.lanes=S,P.return=h,P}finally{}}}var Ya=es(!0),as=es(!1),ia=!1;function nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ic(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ca(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(at&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=ui(t),kr(t,null,a),e}return ii(t,l,e,a),ui(t)}function un(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Ko(t,a)}}function uc(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var cc=!1;function cn(){if(cc){var t=gl;if(t!==null)throw t}}function on(t,e,a,l){cc=!1;var n=t.updateQueue;ia=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var r=c,g=r.next;r.next=null,u===null?i=g:u.next=g,u=r;var x=t.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==u&&(c===null?x.firstBaseUpdate=g:c.next=g,x.lastBaseUpdate=r))}if(i!==null){var A=n.baseState;u=0,x=g=r=null,c=i;do{var v=c.lane&-536870913,b=v!==c.lane;if(b?($&v)===v:(l&v)===v){v!==0&&v===ml&&(cc=!0),x!==null&&(x=x.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var U=t,Y=c;v=e;var rt=a;switch(Y.tag){case 1:if(U=Y.payload,typeof U=="function"){A=U.call(rt,A,v);break t}A=U;break t;case 3:U.flags=U.flags&-65537|128;case 0:if(U=Y.payload,v=typeof U=="function"?U.call(rt,A,v):U,v==null)break t;A=j({},A,v);break t;case 2:ia=!0}}v=c.callback,v!==null&&(t.flags|=64,b&&(t.flags|=8192),b=n.callbacks,b===null?n.callbacks=[v]:b.push(v))}else b={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(g=x=b,r=A):x=x.next=b,u|=v;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;b=c,c=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);x===null&&(r=A),n.baseState=r,n.firstBaseUpdate=g,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),da|=u,t.lanes=u,t.memoizedState=A}}function ls(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function ns(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ls(a[t],e)}var bl=Yt(null),gi=Yt(0);function is(t,e){t=Ze,nt(gi,t),nt(bl,e),Ze=t|e.baseLanes}function oc(){nt(gi,Ze),nt(bl,bl.current)}function rc(){Ze=gi.current,bt(bl),bt(gi)}var ee=Yt(null),me=null;function oa(t){var e=t.alternate;nt(zt,zt.current&1),nt(ee,t),me===null&&(e===null||bl.current!==null||e.memoizedState!==null)&&(me=t)}function sc(t){nt(zt,zt.current),nt(ee,t),me===null&&(me=t)}function us(t){t.tag===22?(nt(zt,zt.current),nt(ee,t),me===null&&(me=t)):ra()}function ra(){nt(zt,zt.current),nt(ee,ee.current)}function ae(t){bt(ee),me===t&&(me=null),bt(zt)}var zt=Yt(0);function vi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vo(a)||yo(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qe=0,V=null,ct=null,wt=null,yi=!1,xl=!1,Xa=!1,bi=0,rn=0,Sl=null,qh=0;function xt(){throw Error(f(321))}function fc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Pt(t[a],e[a]))return!1;return!0}function dc(t,e,a,l,n,i){return qe=i,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?Ls:Ec,Xa=!1,i=a(l,n),Xa=!1,xl&&(i=os(e,a,l,n)),cs(t),i}function cs(t){z.H=dn;var e=ct!==null&&ct.next!==null;if(qe=0,wt=ct=V=null,yi=!1,rn=0,Sl=null,e)throw Error(f(300));t===null||Et||(t=t.dependencies,t!==null&&ri(t)&&(Et=!0))}function os(t,e,a,l){V=t;var n=0;do{if(xl&&(Sl=null),rn=0,xl=!1,25<=n)throw Error(f(301));if(n+=1,wt=ct=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Qs,i=e(a,l)}while(xl);return i}function kh(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?sn(e):e,t=t.useState()[0],(ct!==null?ct.memoizedState:null)!==t&&(V.flags|=1024),e}function hc(){var t=bi!==0;return bi=0,t}function pc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function mc(t){if(yi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}yi=!1}qe=0,wt=ct=V=null,xl=!1,rn=bi=0,Sl=null}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?V.memoizedState=wt=t:wt=wt.next=t,wt}function At(){if(ct===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=wt===null?V.memoizedState:wt.next;if(e!==null)wt=e,ct=t;else{if(t===null)throw V.alternate===null?Error(f(467)):Error(f(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},wt===null?V.memoizedState=wt=t:wt=wt.next=t}return wt}function xi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sn(t){var e=rn;return rn+=1,Sl===null&&(Sl=[]),t=Ir(Sl,t,e),e=V,(wt===null?e.memoizedState:wt.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?Ls:Ec),t}function Si(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sn(t);if(t.$$typeof===st)return qt(t)}throw Error(f(438,String(t)))}function gc(t){var e=null,a=V.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=V.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=xi(),V.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=Rn;return e.index++,a}function ke(t,e){return typeof e=="function"?e(t):e}function zi(t){var e=At();return vc(e,ct,t)}function vc(t,e,a){var l=t.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,r=null,g=e,x=!1;do{var A=g.lane&-536870913;if(A!==g.lane?($&A)===A:(qe&A)===A){var v=g.revertLane;if(v===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),A===ml&&(x=!0);else if((qe&v)===v){g=g.next,v===ml&&(x=!0);continue}else A={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(c=r=A,u=i):r=r.next=A,V.lanes|=v,da|=v;A=g.action,Xa&&a(i,A),i=g.hasEagerState?g.eagerState:a(i,A)}else v={lane:A,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(c=r=v,u=i):r=r.next=v,V.lanes|=A,da|=A;g=g.next}while(g!==null&&g!==e);if(r===null?u=i:r.next=c,!Pt(i,t.memoizedState)&&(Et=!0,x&&(a=gl,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function yc(t){var e=At(),a=e.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Pt(i,e.memoizedState)||(Et=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function rs(t,e,a){var l=V,n=At(),i=I;if(i){if(a===void 0)throw Error(f(407));a=a()}else a=e();var u=!Pt((ct||n).memoizedState,a);if(u&&(n.memoizedState=a,Et=!0),n=n.queue,Sc(ds.bind(null,l,n,t),[t]),n.getSnapshot!==e||u||wt!==null&&wt.memoizedState.tag&1){if(l.flags|=2048,zl(9,{destroy:void 0},fs.bind(null,l,n,a,e),null),ft===null)throw Error(f(349));i||(qe&127)!==0||ss(l,e,a)}return a}function ss(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=V.updateQueue,e===null?(e=xi(),V.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function fs(t,e,a,l){e.value=a,e.getSnapshot=l,hs(e)&&ps(t)}function ds(t,e,a){return a(function(){hs(e)&&ps(t)})}function hs(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Pt(t,a)}catch{return!0}}function ps(t){var e=Ba(t,2);e!==null&&$t(e,t,2)}function bc(t){var e=Xt();if(typeof t=="function"){var a=t;if(t=a(),Xa){Ie(!0);try{a()}finally{Ie(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:t},e}function ms(t,e,a,l){return t.baseState=a,vc(t,ct,typeof l=="function"?l:ke)}function Gh(t,e,a,l,n){if(ji(t))throw Error(f(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,gs(e,i)):(i.next=a.next,e.pending=a.next=i)}}function gs(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=z.T,u={};z.T=u;try{var c=a(n,l),r=z.S;r!==null&&r(u,c),vs(t,e,c)}catch(g){xc(t,e,g)}finally{i!==null&&u.types!==null&&(i.types=u.types),z.T=i}}else try{i=a(n,l),vs(t,e,i)}catch(g){xc(t,e,g)}}function vs(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ys(t,e,l)},function(l){return xc(t,e,l)}):ys(t,e,a)}function ys(t,e,a){e.status="fulfilled",e.value=a,bs(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,gs(t,a)))}function xc(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,bs(e),e=e.next;while(e!==l)}t.action=null}function bs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function xs(t,e){return e}function Ss(t,e){if(I){var a=ft.formState;if(a!==null){t:{var l=V;if(I){if(pt){e:{for(var n=pt,i=pe;n.nodeType!==8;){if(!i){n=null;break e}if(n=ge(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){pt=ge(n.nextSibling),l=n.data==="F!";break t}}la(l)}l=!1}l&&(e=a[0])}}return a=Xt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:e},a.queue=l,a=Gs.bind(null,V,l),l.dispatch=a,l=bc(!1),i=wc.bind(null,V,!1,l.queue),l=Xt(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=Gh.bind(null,V,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function zs(t){var e=At();return As(e,ct,t)}function As(t,e,a){if(e=vc(t,e,xs)[0],t=zi(ke)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=sn(e)}catch(u){throw u===vl?di:u}else l=e;e=At();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(V.flags|=2048,zl(9,{destroy:void 0},Yh.bind(null,n,a),null)),[l,i,t]}function Yh(t,e){t.action=e}function Ts(t){var e=At(),a=ct;if(a!==null)return As(e,a,t);At(),e=e.memoizedState,a=At();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function zl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=V.updateQueue,e===null&&(e=xi(),V.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function js(){return At().memoizedState}function Ai(t,e,a,l){var n=Xt();V.flags|=t,n.memoizedState=zl(1|e,{destroy:void 0},a,l===void 0?null:l)}function Ti(t,e,a,l){var n=At();l=l===void 0?null:l;var i=n.memoizedState.inst;ct!==null&&l!==null&&fc(l,ct.memoizedState.deps)?n.memoizedState=zl(e,i,a,l):(V.flags|=t,n.memoizedState=zl(1|e,i,a,l))}function ws(t,e){Ai(8390656,8,t,e)}function Sc(t,e){Ti(2048,8,t,e)}function Xh(t){V.flags|=4;var e=V.updateQueue;if(e===null)e=xi(),V.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function Es(t){var e=At().memoizedState;return Xh({ref:e,nextImpl:t}),function(){if((at&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function Ms(t,e){return Ti(4,2,t,e)}function Ds(t,e){return Ti(4,4,t,e)}function Cs(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Os(t,e,a){a=a!=null?a.concat([t]):null,Ti(4,4,Cs.bind(null,e,t),a)}function zc(){}function Us(t,e){var a=At();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&fc(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function Bs(t,e){var a=At();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&fc(e,l[1]))return l[0];if(l=t(),Xa){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[l,e],l}function Ac(t,e,a){return a===void 0||(qe&1073741824)!==0&&($&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Hf(),V.lanes|=t,da|=t,a)}function _s(t,e,a,l){return Pt(a,e)?a:bl.current!==null?(t=Ac(t,a,l),Pt(t,e)||(Et=!0),t):(qe&42)===0||(qe&1073741824)!==0&&($&261930)===0?(Et=!0,t.memoizedState=a):(t=Hf(),V.lanes|=t,da|=t,e)}function Hs(t,e,a,l,n){var i=D.p;D.p=i!==0&&8>i?i:8;var u=z.T,c={};z.T=c,wc(t,!1,e,a);try{var r=n(),g=z.S;if(g!==null&&g(c,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var x=Rh(r,l);fn(t,e,x,ie(t))}else fn(t,e,l,ie(t))}catch(A){fn(t,e,{then:function(){},status:"rejected",reason:A},ie())}finally{D.p=i,u!==null&&c.types!==null&&(u.types=c.types),z.T=u}}function Lh(){}function Tc(t,e,a,l){if(t.tag!==5)throw Error(f(476));var n=Ns(t).queue;Hs(t,n,e,Q,a===null?Lh:function(){return Rs(t),a(l)})}function Ns(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:Q},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Rs(t){var e=Ns(t);e.next===null&&(e=t.alternate.memoizedState),fn(t,e.next.queue,{},ie())}function jc(){return qt(Mn)}function qs(){return At().memoizedState}function ks(){return At().memoizedState}function Qh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ie();t=ua(a);var l=ca(e,t,a);l!==null&&($t(l,e,a),un(l,e,a)),e={cache:tc()},t.payload=e;return}e=e.return}}function Vh(t,e,a){var l=ie();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ji(t)?Ys(e,a):(a=Lu(t,e,a,l),a!==null&&($t(a,t,l),Xs(a,e,l)))}function Gs(t,e,a){var l=ie();fn(t,e,a,l)}function fn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ji(t))Ys(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,a);if(n.hasEagerState=!0,n.eagerState=c,Pt(c,u))return ii(t,e,n,0),ft===null&&ni(),!1}catch{}finally{}if(a=Lu(t,e,n,l),a!==null)return $t(a,t,l),Xs(a,e,l),!0}return!1}function wc(t,e,a,l){if(l={lane:2,revertLane:no(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ji(t)){if(e)throw Error(f(479))}else e=Lu(t,a,l,2),e!==null&&$t(e,t,2)}function ji(t){var e=t.alternate;return t===V||e!==null&&e===V}function Ys(t,e){xl=yi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Xs(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Ko(t,a)}}var dn={readContext:qt,use:Si,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt};dn.useEffectEvent=xt;var Ls={readContext:qt,use:Si,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:ws,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Ai(4194308,4,Cs.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Ai(4194308,4,t,e)},useInsertionEffect:function(t,e){Ai(4,2,t,e)},useMemo:function(t,e){var a=Xt();e=e===void 0?null:e;var l=t();if(Xa){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Xt();if(a!==void 0){var n=a(e);if(Xa){Ie(!0);try{a(e)}finally{Ie(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Vh.bind(null,V,t),[l.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:function(t){t=bc(t);var e=t.queue,a=Gs.bind(null,V,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:zc,useDeferredValue:function(t,e){var a=Xt();return Ac(a,t,e)},useTransition:function(){var t=bc(!1);return t=Hs.bind(null,V,t.queue,!0,!1),Xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=V,n=Xt();if(I){if(a===void 0)throw Error(f(407));a=a()}else{if(a=e(),ft===null)throw Error(f(349));($&127)!==0||ss(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,ws(ds.bind(null,l,i,t),[t]),l.flags|=2048,zl(9,{destroy:void 0},fs.bind(null,l,i,a,e),null),a},useId:function(){var t=Xt(),e=ft.identifierPrefix;if(I){var a=je,l=Te;a=(l&~(1<<32-It(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=bi++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=qh++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:jc,useFormState:Ss,useActionState:Ss,useOptimistic:function(t){var e=Xt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=wc.bind(null,V,!0,a),a.dispatch=e,[t,e]},useMemoCache:gc,useCacheRefresh:function(){return Xt().memoizedState=Qh.bind(null,V)},useEffectEvent:function(t){var e=Xt(),a={impl:t};return e.memoizedState=a,function(){if((at&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},Ec={readContext:qt,use:Si,useCallback:Us,useContext:qt,useEffect:Sc,useImperativeHandle:Os,useInsertionEffect:Ms,useLayoutEffect:Ds,useMemo:Bs,useReducer:zi,useRef:js,useState:function(){return zi(ke)},useDebugValue:zc,useDeferredValue:function(t,e){var a=At();return _s(a,ct.memoizedState,t,e)},useTransition:function(){var t=zi(ke)[0],e=At().memoizedState;return[typeof t=="boolean"?t:sn(t),e]},useSyncExternalStore:rs,useId:qs,useHostTransitionStatus:jc,useFormState:zs,useActionState:zs,useOptimistic:function(t,e){var a=At();return ms(a,ct,t,e)},useMemoCache:gc,useCacheRefresh:ks};Ec.useEffectEvent=Es;var Qs={readContext:qt,use:Si,useCallback:Us,useContext:qt,useEffect:Sc,useImperativeHandle:Os,useInsertionEffect:Ms,useLayoutEffect:Ds,useMemo:Bs,useReducer:yc,useRef:js,useState:function(){return yc(ke)},useDebugValue:zc,useDeferredValue:function(t,e){var a=At();return ct===null?Ac(a,t,e):_s(a,ct.memoizedState,t,e)},useTransition:function(){var t=yc(ke)[0],e=At().memoizedState;return[typeof t=="boolean"?t:sn(t),e]},useSyncExternalStore:rs,useId:qs,useHostTransitionStatus:jc,useFormState:Ts,useActionState:Ts,useOptimistic:function(t,e){var a=At();return ct!==null?ms(a,ct,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:gc,useCacheRefresh:ks};Qs.useEffectEvent=Es;function Mc(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:j({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Dc={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=ie(),n=ua(l);n.payload=e,a!=null&&(n.callback=a),e=ca(t,n,l),e!==null&&($t(e,t,l),un(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=ie(),n=ua(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=ca(t,n,l),e!==null&&($t(e,t,l),un(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ie(),l=ua(a);l.tag=2,e!=null&&(l.callback=e),e=ca(t,l,a),e!==null&&($t(e,t,a),un(e,t,a))}};function Vs(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!Fl(a,l)||!Fl(n,i):!0}function Zs(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function La(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=j({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Ks(t){li(t)}function Js(t){console.error(t)}function $s(t){li(t)}function wi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Ws(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Cc(t,e,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){wi(t,e)},a}function Fs(t){return t=ua(t),t.tag=3,t}function Is(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){Ws(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Ws(e,a,l),typeof n!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Zh(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&pl(e,a,n,!0),a=ee.current,a!==null){switch(a.tag){case 31:case 13:return me===null?qi():a.alternate===null&&St===0&&(St=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===hi?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),eo(t,l,n)),!1;case 22:return a.flags|=65536,l===hi?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),eo(t,l,n)),!1}throw Error(f(435,a.tag))}return eo(t,l,n),qi(),!1}if(I)return e=ee.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==$u&&(t=Error(f(422),{cause:l}),tn(fe(t,a)))):(l!==$u&&(e=Error(f(423),{cause:l}),tn(fe(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=fe(l,a),n=Cc(t.stateNode,l,n),uc(t,n),St!==4&&(St=2)),!1;var i=Error(f(520),{cause:l});if(i=fe(i,a),xn===null?xn=[i]:xn.push(i),St!==4&&(St=2),e===null)return!0;l=fe(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=Cc(a.stateNode,l,t),uc(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ha===null||!ha.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Fs(n),Is(n,t,a,l),uc(a,n),!1}a=a.return}while(a!==null);return!1}var Oc=Error(f(461)),Et=!1;function kt(t,e,a,l){e.child=t===null?as(e,null,a,l):Ya(e,t.child,a,l)}function Ps(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Ra(e),l=dc(t,e,a,u,i,n),c=hc(),t!==null&&!Et?(pc(t,e,n),Ge(t,e,n)):(I&&c&&Ku(e),e.flags|=1,kt(t,e,l,n),e.child)}function tf(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Qu(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,ef(t,e,i,l,n)):(t=ci(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!kc(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Fl,a(u,l)&&t.ref===e.ref)return Ge(t,e,n)}return e.flags|=1,t=_e(i,l),t.ref=e.ref,t.return=e,e.child=t}function ef(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Fl(i,l)&&t.ref===e.ref)if(Et=!1,e.pendingProps=l=i,kc(t,n))(t.flags&131072)!==0&&(Et=!0);else return e.lanes=t.lanes,Ge(t,e,n)}return Uc(t,e,a,l,n)}function af(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return lf(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&fi(e,i!==null?i.cachePool:null),i!==null?is(e,i):oc(),us(e);else return l=e.lanes=536870912,lf(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(fi(e,i.cachePool),is(e,i),ra(),e.memoizedState=null):(t!==null&&fi(e,null),oc(),ra());return kt(t,e,n,a),e.child}function hn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function lf(t,e,a,l,n){var i=ac();return i=i===null?null:{parent:jt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&fi(e,null),oc(),us(e),t!==null&&pl(t,e,l,!0),e.childLanes=n,null}function Ei(t,e){return e=Di({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function nf(t,e,a){return Ya(e,t.child,null,a),t=Ei(e,e.pendingProps),t.flags|=2,ae(e),e.memoizedState=null,t}function Kh(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(I){if(l.mode==="hidden")return t=Ei(e,l),e.lanes=536870912,hn(null,t);if(sc(e),(t=pt)?(t=vd(t,pe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ea!==null?{id:Te,overflow:je}:null,retryLane:536870912,hydrationErrors:null},a=Yr(t),a.return=e,e.child=a,Rt=e,pt=null)):t=null,t===null)throw la(e);return e.lanes=536870912,null}return Ei(e,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(sc(e),n)if(e.flags&256)e.flags&=-257,e=nf(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(Et||pl(t,e,a,!1),n=(a&t.childLanes)!==0,Et||n){if(l=ft,l!==null&&(u=Jo(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ba(t,u),$t(l,t,u),Oc;qi(),e=nf(t,e,a)}else t=i.treeContext,pt=ge(u.nextSibling),Rt=e,I=!0,aa=null,pe=!1,t!==null&&Qr(e,t),e=Ei(e,l),e.flags|=4096;return e}return t=_e(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Mi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Uc(t,e,a,l,n){return Ra(e),a=dc(t,e,a,l,void 0,n),l=hc(),t!==null&&!Et?(pc(t,e,n),Ge(t,e,n)):(I&&l&&Ku(e),e.flags|=1,kt(t,e,a,n),e.child)}function uf(t,e,a,l,n,i){return Ra(e),e.updateQueue=null,a=os(e,l,a,n),cs(t),l=hc(),t!==null&&!Et?(pc(t,e,i),Ge(t,e,i)):(I&&l&&Ku(e),e.flags|=1,kt(t,e,a,i),e.child)}function cf(t,e,a,l,n){if(Ra(e),e.stateNode===null){var i=sl,u=a.contextType;typeof u=="object"&&u!==null&&(i=qt(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Dc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},nc(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?qt(u):sl,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Mc(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Dc.enqueueReplaceState(i,i.state,null),on(e,l,i,n),cn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,r=La(a,c);i.props=r;var g=i.context,x=a.contextType;u=sl,typeof x=="object"&&x!==null&&(u=qt(x));var A=a.getDerivedStateFromProps;x=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||g!==u)&&Zs(e,i,l,u),ia=!1;var v=e.memoizedState;i.state=v,on(e,l,i,n),cn(),g=e.memoizedState,c||v!==g||ia?(typeof A=="function"&&(Mc(e,a,A,l),g=e.memoizedState),(r=ia||Vs(e,a,r,l,v,g,u))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=g),i.props=l,i.state=g,i.context=u,l=r):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,ic(t,e),u=e.memoizedProps,x=La(a,u),i.props=x,A=e.pendingProps,v=i.context,g=a.contextType,r=sl,typeof g=="object"&&g!==null&&(r=qt(g)),c=a.getDerivedStateFromProps,(g=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||v!==r)&&Zs(e,i,l,r),ia=!1,v=e.memoizedState,i.state=v,on(e,l,i,n),cn();var b=e.memoizedState;u!==A||v!==b||ia||t!==null&&t.dependencies!==null&&ri(t.dependencies)?(typeof c=="function"&&(Mc(e,a,c,l),b=e.memoizedState),(x=ia||Vs(e,a,x,l,v,b,r)||t!==null&&t.dependencies!==null&&ri(t.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,b,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,b,r)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=b),i.props=l,i.state=b,i.context=r,l=x):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Mi(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Ya(e,t.child,null,n),e.child=Ya(e,null,a,n)):kt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Ge(t,e,n),t}function of(t,e,a,l){return Ha(),e.flags|=256,kt(t,e,a,l),e.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(t){return{baseLanes:t,cachePool:Wr()}}function Hc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=ne),t}function rf(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(zt.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(I){if(n?oa(e):ra(),(t=pt)?(t=vd(t,pe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ea!==null?{id:Te,overflow:je}:null,retryLane:536870912,hydrationErrors:null},a=Yr(t),a.return=e,e.child=a,Rt=e,pt=null)):t=null,t===null)throw la(e);return yo(t)?e.lanes=32:e.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(ra(),n=e.mode,c=Di({mode:"hidden",children:c},n),l=_a(l,n,a,null),c.return=e,l.return=e,c.sibling=l,e.child=c,l=e.child,l.memoizedState=_c(a),l.childLanes=Hc(t,u,a),e.memoizedState=Bc,hn(null,l)):(oa(e),Nc(e,c))}var r=t.memoizedState;if(r!==null&&(c=r.dehydrated,c!==null)){if(i)e.flags&256?(oa(e),e.flags&=-257,e=Rc(t,e,a)):e.memoizedState!==null?(ra(),e.child=t.child,e.flags|=128,e=null):(ra(),c=l.fallback,n=e.mode,l=Di({mode:"visible",children:l.children},n),c=_a(c,n,a,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,Ya(e,t.child,null,a),l=e.child,l.memoizedState=_c(a),l.childLanes=Hc(t,u,a),e.memoizedState=Bc,e=hn(null,l));else if(oa(e),yo(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var g=u.dgst;u=g,l=Error(f(419)),l.stack="",l.digest=u,tn({value:l,source:null,stack:null}),e=Rc(t,e,a)}else if(Et||pl(t,e,a,!1),u=(a&t.childLanes)!==0,Et||u){if(u=ft,u!==null&&(l=Jo(u,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,Ba(t,l),$t(u,t,l),Oc;vo(c)||qi(),e=Rc(t,e,a)}else vo(c)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,pt=ge(c.nextSibling),Rt=e,I=!0,aa=null,pe=!1,t!==null&&Qr(e,t),e=Nc(e,l.children),e.flags|=4096);return e}return n?(ra(),c=l.fallback,n=e.mode,r=t.child,g=r.sibling,l=_e(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,g!==null?c=_e(g,c):(c=_a(c,n,a,null),c.flags|=2),c.return=e,l.return=e,l.sibling=c,e.child=l,hn(null,l),l=e.child,c=t.child.memoizedState,c===null?c=_c(a):(n=c.cachePool,n!==null?(r=jt._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Wr(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=Hc(t,u,a),e.memoizedState=Bc,hn(t.child,l)):(oa(e),a=t.child,t=a.sibling,a=_e(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function Nc(t,e){return e=Di({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Di(t,e){return t=te(22,t,null,e),t.lanes=0,t}function Rc(t,e,a){return Ya(e,t.child,null,a),t=Nc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sf(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Iu(t.return,e,a)}function qc(t,e,a,l,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function ff(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=zt.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,nt(zt,u),kt(t,e,l,a),l=I?Pl:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sf(t,a,e);else if(t.tag===19)sf(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&vi(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),qc(e,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&vi(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}qc(e,!0,a,null,i,l);break;case"together":qc(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Ge(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),da|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(pl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,a=_e(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=_e(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function kc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ri(t)))}function Jh(t,e,a){switch(e.tag){case 3:Gn(e,e.stateNode.containerInfo),na(e,jt,t.memoizedState.cache),Ha();break;case 27:case 5:ru(e);break;case 4:Gn(e,e.stateNode.containerInfo);break;case 10:na(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,sc(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(oa(e),e.flags|=128,null):(a&e.child.childLanes)!==0?rf(t,e,a):(oa(e),t=Ge(t,e,a),t!==null?t.sibling:null);oa(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(pl(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return ff(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),nt(zt,zt.current),l)break;return null;case 22:return e.lanes=0,af(t,e,a,e.pendingProps);case 24:na(e,jt,t.memoizedState.cache)}return Ge(t,e,a)}function df(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Et=!0;else{if(!kc(t,a)&&(e.flags&128)===0)return Et=!1,Jh(t,e,a);Et=(t.flags&131072)!==0}else Et=!1,I&&(e.flags&1048576)!==0&&Lr(e,Pl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=ka(e.elementType),e.type=t,typeof t=="function")Qu(t)?(l=La(t,l),e.tag=1,e=cf(null,e,t,l,a)):(e.tag=0,e=Uc(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===Ot){e.tag=11,e=Ps(null,e,t,l,a);break t}else if(n===De){e.tag=14,e=tf(null,e,t,l,a);break t}}throw e=ql(t)||t,Error(f(306,e,""))}}return e;case 0:return Uc(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=La(l,e.pendingProps),cf(t,e,l,n,a);case 3:t:{if(Gn(e,e.stateNode.containerInfo),t===null)throw Error(f(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,ic(t,e),on(e,l,null,a);var u=e.memoizedState;if(l=u.cache,na(e,jt,l),l!==i.cache&&Pu(e,[jt],a,!0),cn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=of(t,e,l,a);break t}else if(l!==n){n=fe(Error(f(424)),e),tn(n),e=of(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(pt=ge(t.firstChild),Rt=e,I=!0,aa=null,pe=!0,a=as(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ha(),l===n){e=Ge(t,e,a);break t}kt(t,e,l,a)}e=e.child}return e;case 26:return Mi(t,e),t===null?(a=Ad(e.type,null,e.pendingProps,null))?e.memoizedState=a:I||(a=e.type,t=e.pendingProps,l=Vi(Fe.current).createElement(a),l[Nt]=e,l[Lt]=t,Gt(l,a,t),Bt(l),e.stateNode=l):e.memoizedState=Ad(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ru(e),t===null&&I&&(l=e.stateNode=xd(e.type,e.pendingProps,Fe.current),Rt=e,pe=!0,n=pt,va(e.type)?(bo=n,pt=ge(l.firstChild)):pt=n),kt(t,e,e.pendingProps.children,a),Mi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&I&&((n=l=pt)&&(l=Tp(l,e.type,e.pendingProps,pe),l!==null?(e.stateNode=l,Rt=e,pt=ge(l.firstChild),pe=!1,n=!0):n=!1),n||la(e)),ru(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,po(n,i)?l=null:u!==null&&po(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=dc(t,e,kh,null,null,a),Mn._currentValue=n),Mi(t,e),kt(t,e,l,a),e.child;case 6:return t===null&&I&&((t=a=pt)&&(a=jp(a,e.pendingProps,pe),a!==null?(e.stateNode=a,Rt=e,pt=null,t=!0):t=!1),t||la(e)),null;case 13:return rf(t,e,a);case 4:return Gn(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Ya(e,null,l,a):kt(t,e,l,a),e.child;case 11:return Ps(t,e,e.type,e.pendingProps,a);case 7:return kt(t,e,e.pendingProps,a),e.child;case 8:return kt(t,e,e.pendingProps.children,a),e.child;case 12:return kt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,na(e,e.type,l.value),kt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,Ra(e),n=qt(n),l=l(n),e.flags|=1,kt(t,e,l,a),e.child;case 14:return tf(t,e,e.type,e.pendingProps,a);case 15:return ef(t,e,e.type,e.pendingProps,a);case 19:return ff(t,e,a);case 31:return Kh(t,e,a);case 22:return af(t,e,a,e.pendingProps);case 24:return Ra(e),l=qt(jt),t===null?(n=ac(),n===null&&(n=ft,i=tc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},nc(e),na(e,jt,n)):((t.lanes&a)!==0&&(ic(t,e),on(e,null,null,a),cn()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),na(e,jt,l)):(l=i.cache,na(e,jt,l),l!==n.cache&&Pu(e,[jt],a,!0))),kt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Ye(t){t.flags|=4}function Gc(t,e,a,l,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(kf())t.flags|=8192;else throw Ga=hi,lc}else t.flags&=-16777217}function hf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Md(e))if(kf())t.flags|=8192;else throw Ga=hi,lc}function Ci(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Vo():536870912,t.lanes|=e,wl|=e)}function pn(t,e){if(!I)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function $h(t,e,a){var l=e.pendingProps;switch(Ju(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Re(jt),Wa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(hl(e)?Ye(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Wu())),mt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Ye(e),i!==null?(mt(e),hf(e,i)):(mt(e),Gc(e,n,null,l,a))):i?i!==t.memoizedState?(Ye(e),mt(e),hf(e,i)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ye(e),mt(e),Gc(e,n,t,l,a)),null;case 27:if(Yn(e),a=Fe.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ye(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return mt(e),null}t=Ut.current,hl(e)?Vr(e):(t=xd(n,l,a),e.stateNode=t,Ye(e))}return mt(e),null;case 5:if(Yn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ye(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return mt(e),null}if(i=Ut.current,hl(e))Vr(e);else{var u=Vi(Fe.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Nt]=e,i[Lt]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(Gt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ye(e)}}return mt(e),Gc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Ye(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(f(166));if(t=Fe.current,hl(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=Rt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[Nt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||rd(t.nodeValue,a)),t||la(e,!0)}else t=Vi(t).createTextNode(l),t[Nt]=e,e.stateNode=t}return mt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=hl(e),a!==null){if(t===null){if(!l)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[Nt]=e}else Ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else a=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ae(e),e):(ae(e),null);if((e.flags&128)!==0)throw Error(f(558))}return mt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=hl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(f(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[Nt]=e}else Ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),n=!1}else n=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ae(e),e):(ae(e),null)}return ae(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Ci(e,e.updateQueue),mt(e),null);case 4:return Wa(),t===null&&oo(e.stateNode.containerInfo),mt(e),null;case 10:return Re(e.type),mt(e),null;case 19:if(bt(zt),l=e.memoizedState,l===null)return mt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)pn(l,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=vi(t),i!==null){for(e.flags|=128,pn(l,!1),t=i.updateQueue,e.updateQueue=t,Ci(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Gr(a,t),a=a.sibling;return nt(zt,zt.current&1|2),I&&He(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&Wt()>Hi&&(e.flags|=128,n=!0,pn(l,!1),e.lanes=4194304)}else{if(!n)if(t=vi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Ci(e,t),pn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!I)return mt(e),null}else 2*Wt()-l.renderingStartTime>Hi&&a!==536870912&&(e.flags|=128,n=!0,pn(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Wt(),t.sibling=null,a=zt.current,nt(zt,n?a&1|2:a&1),I&&He(e,l.treeForkCount),t):(mt(e),null);case 22:case 23:return ae(e),rc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),a=e.updateQueue,a!==null&&Ci(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&bt(qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Re(jt),mt(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function Wh(t,e){switch(Ju(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Re(jt),Wa(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Yn(e),null;case 31:if(e.memoizedState!==null){if(ae(e),e.alternate===null)throw Error(f(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ae(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return bt(zt),null;case 4:return Wa(),null;case 10:return Re(e.type),null;case 22:case 23:return ae(e),rc(),t!==null&&bt(qa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Re(jt),null;case 25:return null;default:return null}}function pf(t,e){switch(Ju(e),e.tag){case 3:Re(jt),Wa();break;case 26:case 27:case 5:Yn(e);break;case 4:Wa();break;case 31:e.memoizedState!==null&&ae(e);break;case 13:ae(e);break;case 19:bt(zt);break;case 10:Re(e.type);break;case 22:case 23:ae(e),rc(),t!==null&&bt(qa);break;case 24:Re(jt)}}function mn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(c){ut(e,e.return,c)}}function sa(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var r=a,g=c;try{g()}catch(x){ut(n,r,x)}}}l=l.next}while(l!==i)}}catch(x){ut(e,e.return,x)}}function mf(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{ns(e,a)}catch(l){ut(t,t.return,l)}}}function gf(t,e,a){a.props=La(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){ut(t,e,l)}}function gn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){ut(t,e,n)}}function we(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ut(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ut(t,e,n)}else a.current=null}function vf(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ut(t,t.return,n)}}function Yc(t,e,a){try{var l=t.stateNode;yp(l,t.type,a,e),l[Lt]=e}catch(n){ut(t,t.return,n)}}function yf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&va(t.type)||t.tag===4}function Xc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||yf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lc(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Ue));else if(l!==4&&(l===27&&va(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Lc(t,e,a),t=t.sibling;t!==null;)Lc(t,e,a),t=t.sibling}function Oi(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Oi(t,e,a),t=t.sibling;t!==null;)Oi(t,e,a),t=t.sibling}function bf(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gt(e,l,a),e[Nt]=t,e[Lt]=a}catch(i){ut(t,t.return,i)}}var Xe=!1,Mt=!1,Qc=!1,xf=typeof WeakSet=="function"?WeakSet:Set,_t=null;function Fh(t,e){if(t=t.containerInfo,fo=Ii,t=Or(t),Ru(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var u=0,c=-1,r=-1,g=0,x=0,A=t,v=null;e:for(;;){for(var b;A!==a||n!==0&&A.nodeType!==3||(c=u+n),A!==i||l!==0&&A.nodeType!==3||(r=u+l),A.nodeType===3&&(u+=A.nodeValue.length),(b=A.firstChild)!==null;)v=A,A=b;for(;;){if(A===t)break e;if(v===a&&++g===n&&(c=u),v===i&&++x===l&&(r=u),(b=A.nextSibling)!==null)break;A=v,v=A.parentNode}A=b}a=c===-1||r===-1?null:{start:c,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(ho={focusedElem:t,selectionRange:a},Ii=!1,_t=e;_t!==null;)if(e=_t,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_t=t;else for(;_t!==null;){switch(e=_t,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var U=La(a.type,n);t=l.getSnapshotBeforeUpdate(U,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(Y){ut(a,a.return,Y)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)go(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":go(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,_t=t;break}_t=e.return}}function Sf(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Qe(t,a),l&4&&mn(5,a);break;case 1:if(Qe(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){ut(a,a.return,u)}else{var n=La(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){ut(a,a.return,u)}}l&64&&mf(a),l&512&&gn(a,a.return);break;case 3:if(Qe(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{ns(t,e)}catch(u){ut(a,a.return,u)}}break;case 27:e===null&&l&4&&bf(a);case 26:case 5:Qe(t,a),e===null&&l&4&&vf(a),l&512&&gn(a,a.return);break;case 12:Qe(t,a);break;case 31:Qe(t,a),l&4&&Tf(t,a);break;case 13:Qe(t,a),l&4&&jf(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=up.bind(null,a),wp(t,a))));break;case 22:if(l=a.memoizedState!==null||Xe,!l){e=e!==null&&e.memoizedState!==null||Mt,n=Xe;var i=Mt;Xe=l,(Mt=e)&&!i?Ve(t,a,(a.subtreeFlags&8772)!==0):Qe(t,a),Xe=n,Mt=i}break;case 30:break;default:Qe(t,a)}}function zf(t){var e=t.alternate;e!==null&&(t.alternate=null,zf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&xu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var yt=null,Vt=!1;function Le(t,e,a){for(a=a.child;a!==null;)Af(t,e,a),a=a.sibling}function Af(t,e,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(kl,a)}catch{}switch(a.tag){case 26:Mt||we(a,e),Le(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mt||we(a,e);var l=yt,n=Vt;va(a.type)&&(yt=a.stateNode,Vt=!1),Le(t,e,a),jn(a.stateNode),yt=l,Vt=n;break;case 5:Mt||we(a,e);case 6:if(l=yt,n=Vt,yt=null,Le(t,e,a),yt=l,Vt=n,yt!==null)if(Vt)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(a.stateNode)}catch(i){ut(a,e,i)}else try{yt.removeChild(a.stateNode)}catch(i){ut(a,e,i)}break;case 18:yt!==null&&(Vt?(t=yt,md(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_l(t)):md(yt,a.stateNode));break;case 4:l=yt,n=Vt,yt=a.stateNode.containerInfo,Vt=!0,Le(t,e,a),yt=l,Vt=n;break;case 0:case 11:case 14:case 15:sa(2,a,e),Mt||sa(4,a,e),Le(t,e,a);break;case 1:Mt||(we(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&gf(a,e,l)),Le(t,e,a);break;case 21:Le(t,e,a);break;case 22:Mt=(l=Mt)||a.memoizedState!==null,Le(t,e,a),Mt=l;break;default:Le(t,e,a)}}function Tf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_l(t)}catch(a){ut(e,e.return,a)}}}function jf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_l(t)}catch(a){ut(e,e.return,a)}}function Ih(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new xf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new xf),e;default:throw Error(f(435,t.tag))}}function Ui(t,e){var a=Ih(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=cp.bind(null,t,l);l.then(n,n)}})}function Zt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(va(c.type)){yt=c.stateNode,Vt=!1;break t}break;case 5:yt=c.stateNode,Vt=!1;break t;case 3:case 4:yt=c.stateNode.containerInfo,Vt=!0;break t}c=c.return}if(yt===null)throw Error(f(160));Af(i,u,n),yt=null,Vt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)wf(e,t),e=e.sibling}var Se=null;function wf(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zt(e,t),Kt(t),l&4&&(sa(3,t,t.return),mn(3,t),sa(5,t,t.return));break;case 1:Zt(e,t),Kt(t),l&512&&(Mt||a===null||we(a,a.return)),l&64&&Xe&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Se;if(Zt(e,t),Kt(t),l&512&&(Mt||a===null||we(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Xl]||i[Nt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Gt(i,l,a),i[Nt]=t,Bt(i),l=i;break t;case"link":var u=wd("link","href",n).get(l+(a.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(c,1);break e}}i=n.createElement(l),Gt(i,l,a),n.head.appendChild(i);break;case"meta":if(u=wd("meta","content",n).get(l+(a.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(c,1);break e}}i=n.createElement(l),Gt(i,l,a),n.head.appendChild(i);break;default:throw Error(f(468,l))}i[Nt]=t,Bt(i),l=i}t.stateNode=l}else Ed(n,t.type,t.stateNode);else t.stateNode=jd(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Ed(n,t.type,t.stateNode):jd(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Yc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Zt(e,t),Kt(t),l&512&&(Mt||a===null||we(a,a.return)),a!==null&&l&4&&Yc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Zt(e,t),Kt(t),l&512&&(Mt||a===null||we(a,a.return)),t.flags&32){n=t.stateNode;try{ll(n,"")}catch(U){ut(t,t.return,U)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Yc(t,n,a!==null?a.memoizedProps:n)),l&1024&&(Qc=!0);break;case 6:if(Zt(e,t),Kt(t),l&4){if(t.stateNode===null)throw Error(f(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(U){ut(t,t.return,U)}}break;case 3:if(Ji=null,n=Se,Se=Zi(e.containerInfo),Zt(e,t),Se=n,Kt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{_l(e.containerInfo)}catch(U){ut(t,t.return,U)}Qc&&(Qc=!1,Ef(t));break;case 4:l=Se,Se=Zi(t.stateNode.containerInfo),Zt(e,t),Kt(t),Se=l;break;case 12:Zt(e,t),Kt(t);break;case 31:Zt(e,t),Kt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ui(t,l)));break;case 13:Zt(e,t),Kt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_i=Wt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ui(t,l)));break;case 22:n=t.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,g=Xe,x=Mt;if(Xe=g||n,Mt=x||r,Zt(e,t),Mt=x,Xe=g,Kt(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||r||Xe||Mt||Qa(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){r=a=e;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=r.stateNode;var A=r.memoizedProps.style,v=A!=null&&A.hasOwnProperty("display")?A.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(U){ut(r,r.return,U)}}}else if(e.tag===6){if(a===null){r=e;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(U){ut(r,r.return,U)}}}else if(e.tag===18){if(a===null){r=e;try{var b=r.stateNode;n?gd(b,!0):gd(r.stateNode,!1)}catch(U){ut(r,r.return,U)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ui(t,a))));break;case 19:Zt(e,t),Kt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ui(t,l)));break;case 30:break;case 21:break;default:Zt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(yf(l)){a=l;break}l=l.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var n=a.stateNode,i=Xc(t);Oi(t,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(ll(u,""),a.flags&=-33);var c=Xc(t);Oi(t,c,u);break;case 3:case 4:var r=a.stateNode.containerInfo,g=Xc(t);Lc(t,g,r);break;default:throw Error(f(161))}}catch(x){ut(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ef(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ef(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Qe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Sf(t,e.alternate,e),e=e.sibling}function Qa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:sa(4,e,e.return),Qa(e);break;case 1:we(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&gf(e,e.return,a),Qa(e);break;case 27:jn(e.stateNode);case 26:case 5:we(e,e.return),Qa(e);break;case 22:e.memoizedState===null&&Qa(e);break;case 30:Qa(e);break;default:Qa(e)}t=t.sibling}}function Ve(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ve(n,i,a),mn(4,i);break;case 1:if(Ve(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){ut(l,l.return,g)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)ls(r[n],c)}catch(g){ut(l,l.return,g)}}a&&u&64&&mf(i),gn(i,i.return);break;case 27:bf(i);case 26:case 5:Ve(n,i,a),a&&l===null&&u&4&&vf(i),gn(i,i.return);break;case 12:Ve(n,i,a);break;case 31:Ve(n,i,a),a&&u&4&&Tf(n,i);break;case 13:Ve(n,i,a),a&&u&4&&jf(n,i);break;case 22:i.memoizedState===null&&Ve(n,i,a),gn(i,i.return);break;case 30:break;default:Ve(n,i,a)}e=e.sibling}}function Vc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&en(a))}function Zc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&en(t))}function ze(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mf(t,e,a,l),e=e.sibling}function Mf(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ze(t,e,a,l),n&2048&&mn(9,e);break;case 1:ze(t,e,a,l);break;case 3:ze(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&en(t)));break;case 12:if(n&2048){ze(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){ut(e,e.return,r)}}else ze(t,e,a,l);break;case 31:ze(t,e,a,l);break;case 13:ze(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?ze(t,e,a,l):vn(t,e):i._visibility&2?ze(t,e,a,l):(i._visibility|=2,Al(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Vc(u,e);break;case 24:ze(t,e,a,l),n&2048&&Zc(e.alternate,e);break;default:ze(t,e,a,l)}}function Al(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=a,r=l,g=u.flags;switch(u.tag){case 0:case 11:case 15:Al(i,u,c,r,n),mn(8,u);break;case 23:break;case 22:var x=u.stateNode;u.memoizedState!==null?x._visibility&2?Al(i,u,c,r,n):vn(i,u):(x._visibility|=2,Al(i,u,c,r,n)),n&&g&2048&&Vc(u.alternate,u);break;case 24:Al(i,u,c,r,n),n&&g&2048&&Zc(u.alternate,u);break;default:Al(i,u,c,r,n)}e=e.sibling}}function vn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:vn(a,l),n&2048&&Vc(l.alternate,l);break;case 24:vn(a,l),n&2048&&Zc(l.alternate,l);break;default:vn(a,l)}e=e.sibling}}var yn=8192;function Tl(t,e,a){if(t.subtreeFlags&yn)for(t=t.child;t!==null;)Df(t,e,a),t=t.sibling}function Df(t,e,a){switch(t.tag){case 26:Tl(t,e,a),t.flags&yn&&t.memoizedState!==null&&qp(a,Se,t.memoizedState,t.memoizedProps);break;case 5:Tl(t,e,a);break;case 3:case 4:var l=Se;Se=Zi(t.stateNode.containerInfo),Tl(t,e,a),Se=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=yn,yn=16777216,Tl(t,e,a),yn=l):Tl(t,e,a));break;default:Tl(t,e,a)}}function Cf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function bn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];_t=l,Uf(l,t)}Cf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Of(t),t=t.sibling}function Of(t){switch(t.tag){case 0:case 11:case 15:bn(t),t.flags&2048&&sa(9,t,t.return);break;case 3:bn(t);break;case 12:bn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Bi(t)):bn(t);break;default:bn(t)}}function Bi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];_t=l,Uf(l,t)}Cf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:sa(8,e,e.return),Bi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Bi(e));break;default:Bi(e)}t=t.sibling}}function Uf(t,e){for(;_t!==null;){var a=_t;switch(a.tag){case 0:case 11:case 15:sa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:en(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,_t=l;else t:for(a=t;_t!==null;){l=_t;var n=l.sibling,i=l.return;if(zf(l),l===a){_t=null;break t}if(n!==null){n.return=i,_t=n;break t}_t=i}}}var Ph={getCacheForType:function(t){var e=qt(jt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return qt(jt).controller.signal}},tp=typeof WeakMap=="function"?WeakMap:Map,at=0,ft=null,K=null,$=0,it=0,le=null,fa=!1,jl=!1,Kc=!1,Ze=0,St=0,da=0,Va=0,Jc=0,ne=0,wl=0,xn=null,Jt=null,$c=!1,_i=0,Bf=0,Hi=1/0,Ni=null,ha=null,Dt=0,pa=null,El=null,Ke=0,Wc=0,Fc=null,_f=null,Sn=0,Ic=null;function ie(){return(at&2)!==0&&$!==0?$&-$:z.T!==null?no():$o()}function Hf(){if(ne===0)if(($&536870912)===0||I){var t=Qn;Qn<<=1,(Qn&3932160)===0&&(Qn=262144),ne=t}else ne=536870912;return t=ee.current,t!==null&&(t.flags|=32),ne}function $t(t,e,a){(t===ft&&(it===2||it===9)||t.cancelPendingCommit!==null)&&(Ml(t,0),ma(t,$,ne,!1)),Yl(t,a),((at&2)===0||t!==ft)&&(t===ft&&((at&2)===0&&(Va|=a),St===4&&ma(t,$,ne,!1)),Ee(t))}function Nf(t,e,a){if((at&6)!==0)throw Error(f(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Gl(t,e),n=l?lp(t,e):to(t,e,!0),i=l;do{if(n===0){jl&&!l&&ma(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!ep(a)){n=to(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=xn;var r=c.current.memoizedState.isDehydrated;if(r&&(Ml(c,u).flags|=256),u=to(c,u,!1),u!==2){if(Kc&&!r){c.errorRecoveryDisabledLanes|=i,Va|=i,n=4;break t}i=Jt,Jt=n,i!==null&&(Jt===null?Jt=i:Jt.push.apply(Jt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ml(t,0),ma(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:ma(l,e,ne,!fa);break t;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(n=_i+300-Wt(),10<n)){if(ma(l,e,ne,!fa),Zn(l,0,!0)!==0)break t;Ke=e,l.timeoutHandle=hd(Rf.bind(null,l,a,Jt,Ni,$c,e,ne,Va,wl,fa,i,"Throttled",-0,0),n);break t}Rf(l,a,Jt,Ni,$c,e,ne,Va,wl,fa,i,null,-0,0)}}break}while(!0);Ee(t)}function Rf(t,e,a,l,n,i,u,c,r,g,x,A,v,b){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ue},Df(e,i,A);var U=(i&62914560)===i?_i-Wt():(i&4194048)===i?Bf-Wt():0;if(U=kp(A,U),U!==null){Ke=i,t.cancelPendingCommit=U(Vf.bind(null,t,e,i,a,l,n,u,c,r,x,A,null,v,b)),ma(t,i,u,!g);return}}Vf(t,e,i,a,l,n,u,c,r)}function ep(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Pt(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ma(t,e,a,l){e&=~Jc,e&=~Va,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-It(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Zo(t,a,e)}function Ri(){return(at&6)===0?(zn(0),!1):!0}function Pc(){if(K!==null){if(it===0)var t=K.return;else t=K,Ne=Na=null,mc(t),yl=null,ln=0,t=K;for(;t!==null;)pf(t.alternate,t),t=t.return;K=null}}function Ml(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Sp(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ke=0,Pc(),ft=t,K=a=_e(t.current,null),$=e,it=0,le=null,fa=!1,jl=Gl(t,e),Kc=!1,wl=ne=Jc=Va=da=St=0,Jt=xn=null,$c=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-It(l),i=1<<n;e|=t[n],l&=~i}return Ze=e,ni(),a}function qf(t,e){V=null,z.H=dn,e===vl||e===di?(e=Pr(),it=3):e===lc?(e=Pr(),it=4):it=e===Oc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,le=e,K===null&&(St=1,wi(t,fe(e,t.current)))}function kf(){var t=ee.current;return t===null?!0:($&4194048)===$?me===null:($&62914560)===$||($&536870912)!==0?t===me:!1}function Gf(){var t=z.H;return z.H=dn,t===null?dn:t}function Yf(){var t=z.A;return z.A=Ph,t}function qi(){St=4,fa||($&4194048)!==$&&ee.current!==null||(jl=!0),(da&134217727)===0&&(Va&134217727)===0||ft===null||ma(ft,$,ne,!1)}function to(t,e,a){var l=at;at|=2;var n=Gf(),i=Yf();(ft!==t||$!==e)&&(Ni=null,Ml(t,e)),e=!1;var u=St;t:do try{if(it!==0&&K!==null){var c=K,r=le;switch(it){case 8:Pc(),u=6;break t;case 3:case 2:case 9:case 6:ee.current===null&&(e=!0);var g=it;if(it=0,le=null,Dl(t,c,r,g),a&&jl){u=0;break t}break;default:g=it,it=0,le=null,Dl(t,c,r,g)}}ap(),u=St;break}catch(x){qf(t,x)}while(!0);return e&&t.shellSuspendCounter++,Ne=Na=null,at=l,z.H=n,z.A=i,K===null&&(ft=null,$=0,ni()),u}function ap(){for(;K!==null;)Xf(K)}function lp(t,e){var a=at;at|=2;var l=Gf(),n=Yf();ft!==t||$!==e?(Ni=null,Hi=Wt()+500,Ml(t,e)):jl=Gl(t,e);t:do try{if(it!==0&&K!==null){e=K;var i=le;e:switch(it){case 1:it=0,le=null,Dl(t,e,i,1);break;case 2:case 9:if(Fr(i)){it=0,le=null,Lf(e);break}e=function(){it!==2&&it!==9||ft!==t||(it=7),Ee(t)},i.then(e,e);break t;case 3:it=7;break t;case 4:it=5;break t;case 7:Fr(i)?(it=0,le=null,Lf(e)):(it=0,le=null,Dl(t,e,i,7));break;case 5:var u=null;switch(K.tag){case 26:u=K.memoizedState;case 5:case 27:var c=K;if(u?Md(u):c.stateNode.complete){it=0,le=null;var r=c.sibling;if(r!==null)K=r;else{var g=c.return;g!==null?(K=g,ki(g)):K=null}break e}}it=0,le=null,Dl(t,e,i,5);break;case 6:it=0,le=null,Dl(t,e,i,6);break;case 8:Pc(),St=6;break t;default:throw Error(f(462))}}np();break}catch(x){qf(t,x)}while(!0);return Ne=Na=null,z.H=l,z.A=n,at=a,K!==null?0:(ft=null,$=0,ni(),St)}function np(){for(;K!==null&&!E0();)Xf(K)}function Xf(t){var e=df(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?ki(t):K=e}function Lf(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=uf(a,e,e.pendingProps,e.type,void 0,$);break;case 11:e=uf(a,e,e.pendingProps,e.type.render,e.ref,$);break;case 5:mc(e);default:pf(a,e),e=K=Gr(e,Ze),e=df(a,e,Ze)}t.memoizedProps=t.pendingProps,e===null?ki(t):K=e}function Dl(t,e,a,l){Ne=Na=null,mc(e),yl=null,ln=0;var n=e.return;try{if(Zh(t,n,e,a,$)){St=1,wi(t,fe(a,t.current)),K=null;return}}catch(i){if(n!==null)throw K=n,i;St=1,wi(t,fe(a,t.current)),K=null;return}e.flags&32768?(I||l===1?t=!0:jl||($&536870912)!==0?t=!1:(fa=t=!0,(l===2||l===9||l===3||l===6)&&(l=ee.current,l!==null&&l.tag===13&&(l.flags|=16384))),Qf(e,t)):ki(e)}function ki(t){var e=t;do{if((e.flags&32768)!==0){Qf(e,fa);return}t=e.return;var a=$h(e.alternate,e,Ze);if(a!==null){K=a;return}if(e=e.sibling,e!==null){K=e;return}K=e=t}while(e!==null);St===0&&(St=5)}function Qf(t,e){do{var a=Wh(t.alternate,t);if(a!==null){a.flags&=32767,K=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){K=t;return}K=t=a}while(t!==null);St=6,K=null}function Vf(t,e,a,l,n,i,u,c,r){t.cancelPendingCommit=null;do Gi();while(Dt!==0);if((at&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(i=e.lanes|e.childLanes,i|=Xu,R0(t,a,i,u,c,r),t===ft&&(K=ft=null,$=0),El=e,pa=t,Ke=a,Wc=i,Fc=n,_f=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,op(Xn,function(){return Wf(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,n=D.p,D.p=2,u=at,at|=4;try{Fh(t,e,a)}finally{at=u,D.p=n,z.T=l}}Dt=1,Zf(),Kf(),Jf()}}function Zf(){if(Dt===1){Dt=0;var t=pa,e=El,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=D.p;D.p=2;var n=at;at|=4;try{wf(e,t);var i=ho,u=Or(t.containerInfo),c=i.focusedElem,r=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Cr(c.ownerDocument.documentElement,c)){if(r!==null&&Ru(c)){var g=r.start,x=r.end;if(x===void 0&&(x=g),"selectionStart"in c)c.selectionStart=g,c.selectionEnd=Math.min(x,c.value.length);else{var A=c.ownerDocument||document,v=A&&A.defaultView||window;if(v.getSelection){var b=v.getSelection(),U=c.textContent.length,Y=Math.min(r.start,U),rt=r.end===void 0?Y:Math.min(r.end,U);!b.extend&&Y>rt&&(u=rt,rt=Y,Y=u);var h=Dr(c,Y),d=Dr(c,rt);if(h&&d&&(b.rangeCount!==1||b.anchorNode!==h.node||b.anchorOffset!==h.offset||b.focusNode!==d.node||b.focusOffset!==d.offset)){var p=A.createRange();p.setStart(h.node,h.offset),b.removeAllRanges(),Y>rt?(b.addRange(p),b.extend(d.node,d.offset)):(p.setEnd(d.node,d.offset),b.addRange(p))}}}}for(A=[],b=c;b=b.parentNode;)b.nodeType===1&&A.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<A.length;c++){var S=A[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Ii=!!fo,ho=fo=null}finally{at=n,D.p=l,z.T=a}}t.current=e,Dt=2}}function Kf(){if(Dt===2){Dt=0;var t=pa,e=El,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=D.p;D.p=2;var n=at;at|=4;try{Sf(t,e.alternate,e)}finally{at=n,D.p=l,z.T=a}}Dt=3}}function Jf(){if(Dt===4||Dt===3){Dt=0,M0();var t=pa,e=El,a=Ke,l=_f;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Dt=5:(Dt=0,El=pa=null,$f(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ha=null),yu(a),e=e.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=z.T,n=D.p,D.p=2,z.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{z.T=e,D.p=n}}(Ke&3)!==0&&Gi(),Ee(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===Ic?Sn++:(Sn=0,Ic=t):Sn=0,zn(0)}}function $f(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,en(e)))}function Gi(){return Zf(),Kf(),Jf(),Wf()}function Wf(){if(Dt!==5)return!1;var t=pa,e=Wc;Wc=0;var a=yu(Ke),l=z.T,n=D.p;try{D.p=32>a?32:a,z.T=null,a=Fc,Fc=null;var i=pa,u=Ke;if(Dt=0,El=pa=null,Ke=0,(at&6)!==0)throw Error(f(331));var c=at;if(at|=4,Of(i.current),Mf(i,i.current,u,a),at=c,zn(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(kl,i)}catch{}return!0}finally{D.p=n,z.T=l,$f(t,e)}}function Ff(t,e,a){e=fe(a,e),e=Cc(t.stateNode,e,2),t=ca(t,e,2),t!==null&&(Yl(t,2),Ee(t))}function ut(t,e,a){if(t.tag===3)Ff(t,t,a);else for(;e!==null;){if(e.tag===3){Ff(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ha===null||!ha.has(l))){t=fe(a,t),a=Fs(2),l=ca(e,a,2),l!==null&&(Is(a,l,e,t),Yl(l,2),Ee(l));break}}e=e.return}}function eo(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new tp;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Kc=!0,n.add(a),t=ip.bind(null,t,e,a),e.then(t,t))}function ip(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ft===t&&($&a)===a&&(St===4||St===3&&($&62914560)===$&&300>Wt()-_i?(at&2)===0&&Ml(t,0):Jc|=a,wl===$&&(wl=0)),Ee(t)}function If(t,e){e===0&&(e=Vo()),t=Ba(t,e),t!==null&&(Yl(t,e),Ee(t))}function up(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),If(t,a)}function cp(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(e),If(t,a)}function op(t,e){return pu(t,e)}var Yi=null,Cl=null,ao=!1,Xi=!1,lo=!1,ga=0;function Ee(t){t!==Cl&&t.next===null&&(Cl===null?Yi=Cl=t:Cl=Cl.next=t),Xi=!0,ao||(ao=!0,sp())}function zn(t,e){if(!lo&&Xi){lo=!0;do for(var a=!1,l=Yi;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-It(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,ad(l,i))}else i=$,i=Zn(l,l===ft?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Gl(l,i)||(a=!0,ad(l,i));l=l.next}while(a);lo=!1}}function rp(){Pf()}function Pf(){Xi=ao=!1;var t=0;ga!==0&&xp()&&(t=ga);for(var e=Wt(),a=null,l=Yi;l!==null;){var n=l.next,i=td(l,e);i===0?(l.next=null,a===null?Yi=n:a.next=n,n===null&&(Cl=a)):(a=l,(t!==0||(i&3)!==0)&&(Xi=!0)),l=n}Dt!==0&&Dt!==5||zn(t),ga!==0&&(ga=0)}function td(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-It(i),c=1<<u,r=n[u];r===-1?((c&a)===0||(c&l)!==0)&&(n[u]=N0(c,e)):r<=e&&(t.expiredLanes|=c),i&=~c}if(e=ft,a=$,a=Zn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(it===2||it===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&mu(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Gl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&mu(l),yu(a)){case 2:case 8:a=Lo;break;case 32:a=Xn;break;case 268435456:a=Qo;break;default:a=Xn}return l=ed.bind(null,t),a=pu(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&mu(l),t.callbackPriority=2,t.callbackNode=null,2}function ed(t,e){if(Dt!==0&&Dt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gi()&&t.callbackNode!==a)return null;var l=$;return l=Zn(t,t===ft?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Nf(t,l,e),td(t,Wt()),t.callbackNode!=null&&t.callbackNode===a?ed.bind(null,t):null)}function ad(t,e){if(Gi())return null;Nf(t,e,!0)}function sp(){zp(function(){(at&6)!==0?pu(Xo,rp):Pf()})}function no(){if(ga===0){var t=ml;t===0&&(t=Ln,Ln<<=1,(Ln&261888)===0&&(Ln=256)),ga=t}return ga}function ld(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wn(""+t)}function nd(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function fp(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=ld((n[Lt]||null).action),u=l.submitter;u&&(e=(e=u[Lt]||null)?ld(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new ti("action","action",null,l,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var r=u?nd(n,u):new FormData(n);Tc(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(c.preventDefault(),r=u?nd(n,u):new FormData(n),Tc(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var io=0;io<Yu.length;io++){var uo=Yu[io],dp=uo.toLowerCase(),hp=uo[0].toUpperCase()+uo.slice(1);xe(dp,"on"+hp)}xe(_r,"onAnimationEnd"),xe(Hr,"onAnimationIteration"),xe(Nr,"onAnimationStart"),xe("dblclick","onDoubleClick"),xe("focusin","onFocus"),xe("focusout","onBlur"),xe(Dh,"onTransitionRun"),xe(Ch,"onTransitionStart"),xe(Oh,"onTransitionCancel"),xe(Rr,"onTransitionEnd"),el("onMouseEnter",["mouseout","mouseover"]),el("onMouseLeave",["mouseout","mouseover"]),el("onPointerEnter",["pointerout","pointerover"]),el("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(An));function id(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var c=l[u],r=c.instance,g=c.currentTarget;if(c=c.listener,r!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=g;try{i(n)}catch(x){li(x)}n.currentTarget=null,i=r}else for(u=0;u<l.length;u++){if(c=l[u],r=c.instance,g=c.currentTarget,c=c.listener,r!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=g;try{i(n)}catch(x){li(x)}n.currentTarget=null,i=r}}}}function J(t,e){var a=e[bu];a===void 0&&(a=e[bu]=new Set);var l=t+"__bubble";a.has(l)||(ud(e,t,2,!1),a.add(l))}function co(t,e,a){var l=0;e&&(l|=4),ud(a,t,l,e)}var Li="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[Li]){t[Li]=!0,Io.forEach(function(a){a!=="selectionchange"&&(pp.has(a)||co(a,!1,t),co(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Li]||(e[Li]=!0,co("selectionchange",!1,e))}}function ud(t,e,a,l){switch(Hd(e)){case 2:var n=Xp;break;case 8:n=Lp;break;default:n=To}a=n.bind(null,e,a,t),n=void 0,!Mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function ro(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=l.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Ia(c),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){l=i=u;continue t}c=c.parentNode}}l=l.return}sr(function(){var g=i,x=wu(a),A=[];t:{var v=qr.get(t);if(v!==void 0){var b=ti,U=t;switch(t){case"keypress":if(In(a)===0)break t;case"keydown":case"keyup":b=ch;break;case"focusin":U="focus",b=Uu;break;case"focusout":U="blur",b=Uu;break;case"beforeblur":case"afterblur":b=Uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=hr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=sh;break;case _r:case Hr:case Nr:b=I0;break;case Rr:b=dh;break;case"scroll":case"scrollend":b=K0;break;case"wheel":b=ph;break;case"copy":case"cut":case"paste":b=th;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=mr;break;case"toggle":case"beforetoggle":b=gh}var Y=(e&4)!==0,rt=!Y&&(t==="scroll"||t==="scrollend"),h=Y?v!==null?v+"Capture":null:v;Y=[];for(var d=g,p;d!==null;){var S=d;if(p=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||p===null||h===null||(S=Ql(d,h),S!=null&&Y.push(Tn(d,S,p))),rt)break;d=d.return}0<Y.length&&(v=new b(v,U,null,a,x),A.push({event:v,listeners:Y}))}}if((e&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",v&&a!==ju&&(U=a.relatedTarget||a.fromElement)&&(Ia(U)||U[Fa]))break t;if((b||v)&&(v=x.window===x?x:(v=x.ownerDocument)?v.defaultView||v.parentWindow:window,b?(U=a.relatedTarget||a.toElement,b=g,U=U?Ia(U):null,U!==null&&(rt=E(U),Y=U.tag,U!==rt||Y!==5&&Y!==27&&Y!==6)&&(U=null)):(b=null,U=g),b!==U)){if(Y=hr,S="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(Y=mr,S="onPointerLeave",h="onPointerEnter",d="pointer"),rt=b==null?v:Ll(b),p=U==null?v:Ll(U),v=new Y(S,d+"leave",b,a,x),v.target=rt,v.relatedTarget=p,S=null,Ia(x)===g&&(Y=new Y(h,d+"enter",U,a,x),Y.target=p,Y.relatedTarget=rt,S=Y),rt=S,b&&U)e:{for(Y=mp,h=b,d=U,p=0,S=h;S;S=Y(S))p++;S=0;for(var R=d;R;R=Y(R))S++;for(;0<p-S;)h=Y(h),p--;for(;0<S-p;)d=Y(d),S--;for(;p--;){if(h===d||d!==null&&h===d.alternate){Y=h;break e}h=Y(h),d=Y(d)}Y=null}else Y=null;b!==null&&cd(A,v,b,Y,!1),U!==null&&rt!==null&&cd(A,rt,U,Y,!0)}}t:{if(v=g?Ll(g):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var P=Ar;else if(Sr(v))if(Tr)P=wh;else{P=Th;var _=Ah}else b=v.nodeName,!b||b.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?g&&Tu(g.elementType)&&(P=Ar):P=jh;if(P&&(P=P(t,g))){zr(A,P,a,x);break t}_&&_(t,v,g),t==="focusout"&&g&&v.type==="number"&&g.memoizedProps.value!=null&&Au(v,"number",v.value)}switch(_=g?Ll(g):window,t){case"focusin":(Sr(_)||_.contentEditable==="true")&&(cl=_,qu=g,Il=null);break;case"focusout":Il=qu=cl=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,Ur(A,a,x);break;case"selectionchange":if(Mh)break;case"keydown":case"keyup":Ur(A,a,x)}var Z;if(_u)t:{switch(t){case"compositionstart":var W="onCompositionStart";break t;case"compositionend":W="onCompositionEnd";break t;case"compositionupdate":W="onCompositionUpdate";break t}W=void 0}else ul?br(t,a)&&(W="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(gr&&a.locale!=="ko"&&(ul||W!=="onCompositionStart"?W==="onCompositionEnd"&&ul&&(Z=fr()):(ta=x,Du="value"in ta?ta.value:ta.textContent,ul=!0)),_=Qi(g,W),0<_.length&&(W=new pr(W,t,null,a,x),A.push({event:W,listeners:_}),Z?W.data=Z:(Z=xr(a),Z!==null&&(W.data=Z)))),(Z=yh?bh(t,a):xh(t,a))&&(W=Qi(g,"onBeforeInput"),0<W.length&&(_=new pr("onBeforeInput","beforeinput",null,a,x),A.push({event:_,listeners:W}),_.data=Z)),fp(A,t,g,a,x)}id(A,e)})}function Tn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Qi(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ql(t,a),n!=null&&l.unshift(Tn(t,n,i)),n=Ql(t,e),n!=null&&l.push(Tn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function mp(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function cd(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var c=a,r=c.alternate,g=c.stateNode;if(c=c.tag,r!==null&&r===l)break;c!==5&&c!==26&&c!==27||g===null||(r=g,n?(g=Ql(a,i),g!=null&&u.unshift(Tn(a,g,r))):n||(g=Ql(a,i),g!=null&&u.push(Tn(a,g,r)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var gp=/\r\n?/g,vp=/\u0000|\uFFFD/g;function od(t){return(typeof t=="string"?t:""+t).replace(gp,`
`).replace(vp,"")}function rd(t,e){return e=od(e),od(t)===e}function ot(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||ll(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&ll(t,""+l);break;case"className":Jn(t,"class",l);break;case"tabIndex":Jn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(t,a,l);break;case"style":or(t,l,i);break;case"data":if(e!=="object"){Jn(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Wn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&ot(t,e,"name",n.name,n,null),ot(t,e,"formEncType",n.formEncType,n,null),ot(t,e,"formMethod",n.formMethod,n,null),ot(t,e,"formTarget",n.formTarget,n,null)):(ot(t,e,"encType",n.encType,n,null),ot(t,e,"method",n.method,n,null),ot(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Wn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Ue);break;case"onScroll":l!=null&&J("scroll",t);break;case"onScrollEnd":l!=null&&J("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Wn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":J("beforetoggle",t),J("toggle",t),Kn(t,"popover",l);break;case"xlinkActuate":Oe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Oe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Oe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Oe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Oe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Oe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=V0.get(a)||a,Kn(t,a,l))}}function so(t,e,a,l,n,i){switch(a){case"style":or(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=a}}break;case"children":typeof l=="string"?ll(t,l):(typeof l=="number"||typeof l=="bigint")&&ll(t,""+l);break;case"onScroll":l!=null&&J("scroll",t);break;case"onScrollEnd":l!=null&&J("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ue);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Po.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Lt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Kn(t,a,l)}}}function Gt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",t),J("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ot(t,e,i,u,a,null)}}n&&ot(t,e,"srcSet",a.srcSet,a,null),l&&ot(t,e,"src",a.src,a,null);return;case"input":J("invalid",t);var c=i=u=n=null,r=null,g=null;for(l in a)if(a.hasOwnProperty(l)){var x=a[l];if(x!=null)switch(l){case"name":n=x;break;case"type":u=x;break;case"checked":r=x;break;case"defaultChecked":g=x;break;case"value":i=x;break;case"defaultValue":c=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(f(137,e));break;default:ot(t,e,l,x,a,null)}}nr(t,i,c,r,g,u,n,!1);return;case"select":J("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:ot(t,e,n,c,a,null)}e=i,a=u,t.multiple=!!l,e!=null?al(t,!!l,e,!1):a!=null&&al(t,!!l,a,!0);return;case"textarea":J("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(f(91));break;default:ot(t,e,u,c,a,null)}ur(t,l,n,i);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(l=a[r],l!=null))switch(r){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ot(t,e,r,l,a,null)}return;case"dialog":J("beforetoggle",t),J("toggle",t),J("cancel",t),J("close",t);break;case"iframe":case"object":J("load",t);break;case"video":case"audio":for(l=0;l<An.length;l++)J(An[l],t);break;case"image":J("error",t),J("load",t);break;case"details":J("toggle",t);break;case"embed":case"source":case"link":J("error",t),J("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ot(t,e,g,l,a,null)}return;default:if(Tu(e)){for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!==void 0&&so(t,e,x,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&ot(t,e,c,l,a,null))}function yp(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,r=null,g=null,x=null;for(b in a){var A=a[b];if(a.hasOwnProperty(b)&&A!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":r=A;default:l.hasOwnProperty(b)||ot(t,e,b,null,l,A)}}for(var v in l){var b=l[v];if(A=a[v],l.hasOwnProperty(v)&&(b!=null||A!=null))switch(v){case"type":i=b;break;case"name":n=b;break;case"checked":g=b;break;case"defaultChecked":x=b;break;case"value":u=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,e));break;default:b!==A&&ot(t,e,v,b,l,A)}}zu(t,u,c,r,g,x,i,n);return;case"select":b=u=c=v=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":b=r;default:l.hasOwnProperty(i)||ot(t,e,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":v=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==r&&ot(t,e,n,i,l,r)}e=c,a=u,l=b,v!=null?al(t,!!a,v,!1):!!l!=!!a&&(e!=null?al(t,!!a,e,!0):al(t,!!a,a?[]:"",!1));return;case"textarea":b=v=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ot(t,e,c,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":v=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==i&&ot(t,e,u,n,l,i)}ir(t,v,b);return;case"option":for(var U in a)if(v=a[U],a.hasOwnProperty(U)&&v!=null&&!l.hasOwnProperty(U))switch(U){case"selected":t.selected=!1;break;default:ot(t,e,U,null,l,v)}for(r in l)if(v=l[r],b=a[r],l.hasOwnProperty(r)&&v!==b&&(v!=null||b!=null))switch(r){case"selected":t.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:ot(t,e,r,v,l,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in a)v=a[Y],a.hasOwnProperty(Y)&&v!=null&&!l.hasOwnProperty(Y)&&ot(t,e,Y,null,l,v);for(g in l)if(v=l[g],b=a[g],l.hasOwnProperty(g)&&v!==b&&(v!=null||b!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(f(137,e));break;default:ot(t,e,g,v,l,b)}return;default:if(Tu(e)){for(var rt in a)v=a[rt],a.hasOwnProperty(rt)&&v!==void 0&&!l.hasOwnProperty(rt)&&so(t,e,rt,void 0,l,v);for(x in l)v=l[x],b=a[x],!l.hasOwnProperty(x)||v===b||v===void 0&&b===void 0||so(t,e,x,v,l,b);return}}for(var h in a)v=a[h],a.hasOwnProperty(h)&&v!=null&&!l.hasOwnProperty(h)&&ot(t,e,h,null,l,v);for(A in l)v=l[A],b=a[A],!l.hasOwnProperty(A)||v===b||v==null&&b==null||ot(t,e,A,v,l,b)}function sd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bp(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&sd(u)){for(u=0,c=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],g=r.startTime;if(g>c)break;var x=r.transferSize,A=r.initiatorType;x&&sd(A)&&(r=r.responseEnd,u+=x*(r<c?1:(c-g)/(r-g)))}if(--l,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var fo=null,ho=null;function Vi(t){return t.nodeType===9?t:t.ownerDocument}function fd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function po(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mo=null;function xp(){var t=window.event;return t&&t.type==="popstate"?t===mo?!1:(mo=t,!0):(mo=null,!1)}var hd=typeof setTimeout=="function"?setTimeout:void 0,Sp=typeof clearTimeout=="function"?clearTimeout:void 0,pd=typeof Promise=="function"?Promise:void 0,zp=typeof queueMicrotask=="function"?queueMicrotask:typeof pd<"u"?function(t){return pd.resolve(null).then(t).catch(Ap)}:hd;function Ap(t){setTimeout(function(){throw t})}function va(t){return t==="head"}function md(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),_l(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")jn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,jn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Xl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&jn(t.ownerDocument.body);a=n}while(a);_l(e)}function gd(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function go(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":go(a),xu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Tp(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Xl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=ge(t.nextSibling),t===null)break}return null}function jp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ge(t.nextSibling),t===null))return null;return t}function vd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ge(t.nextSibling),t===null))return null;return t}function vo(t){return t.data==="$?"||t.data==="$~"}function yo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function wp(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ge(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var bo=null;function yd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return ge(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function bd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function xd(t,e,a){switch(e=Vi(a),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function jn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);xu(t)}var ve=new Map,Sd=new Set;function Zi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Je=D.d;D.d={f:Ep,r:Mp,D:Dp,C:Cp,L:Op,m:Up,X:_p,S:Bp,M:Hp};function Ep(){var t=Je.f(),e=Ri();return t||e}function Mp(t){var e=Pa(t);e!==null&&e.tag===5&&e.type==="form"?Rs(e):Je.r(t)}var Ol=typeof document>"u"?null:document;function zd(t,e,a){var l=Ol;if(l&&typeof e=="string"&&e){var n=re(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Sd.has(n)||(Sd.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Gt(e,"link",t),Bt(e),l.head.appendChild(e)))}}function Dp(t){Je.D(t),zd("dns-prefetch",t,null)}function Cp(t,e){Je.C(t,e),zd("preconnect",t,e)}function Op(t,e,a){Je.L(t,e,a);var l=Ol;if(l&&t&&e){var n='link[rel="preload"][as="'+re(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+re(a.imageSizes)+'"]')):n+='[href="'+re(t)+'"]';var i=n;switch(e){case"style":i=Ul(t);break;case"script":i=Bl(t)}ve.has(i)||(t=j({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ve.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(wn(i))||e==="script"&&l.querySelector(En(i))||(e=l.createElement("link"),Gt(e,"link",t),Bt(e),l.head.appendChild(e)))}}function Up(t,e){Je.m(t,e);var a=Ol;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+re(l)+'"][href="'+re(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(t)}if(!ve.has(i)&&(t=j({rel:"modulepreload",href:t},e),ve.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(En(i)))return}l=a.createElement("link"),Gt(l,"link",t),Bt(l),a.head.appendChild(l)}}}function Bp(t,e,a){Je.S(t,e,a);var l=Ol;if(l&&t){var n=tl(l).hoistableStyles,i=Ul(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(wn(i)))c.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ve.get(i))&&xo(t,a);var r=u=l.createElement("link");Bt(r),Gt(r,"link",t),r._p=new Promise(function(g,x){r.onload=g,r.onerror=x}),r.addEventListener("load",function(){c.loading|=1}),r.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ki(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function _p(t,e){Je.X(t,e);var a=Ol;if(a&&t){var l=tl(a).hoistableScripts,n=Bl(t),i=l.get(n);i||(i=a.querySelector(En(n)),i||(t=j({src:t,async:!0},e),(e=ve.get(n))&&So(t,e),i=a.createElement("script"),Bt(i),Gt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Hp(t,e){Je.M(t,e);var a=Ol;if(a&&t){var l=tl(a).hoistableScripts,n=Bl(t),i=l.get(n);i||(i=a.querySelector(En(n)),i||(t=j({src:t,async:!0,type:"module"},e),(e=ve.get(n))&&So(t,e),i=a.createElement("script"),Bt(i),Gt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Ad(t,e,a,l){var n=(n=Fe.current)?Zi(n):null;if(!n)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Ul(a.href),a=tl(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ul(a.href);var i=tl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(wn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),ve.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ve.set(t,a),i||Np(n,t,a,u.state))),e&&l===null)throw Error(f(528,""));return u}if(e&&l!==null)throw Error(f(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Bl(a),a=tl(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function Ul(t){return'href="'+re(t)+'"'}function wn(t){return'link[rel="stylesheet"]['+t+"]"}function Td(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function Np(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Gt(e,"link",a),Bt(e),t.head.appendChild(e))}function Bl(t){return'[src="'+re(t)+'"]'}function En(t){return"script[async]"+t}function jd(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+re(a.href)+'"]');if(l)return e.instance=l,Bt(l),l;var n=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Bt(l),Gt(l,"style",n),Ki(l,a.precedence,t),e.instance=l;case"stylesheet":n=Ul(a.href);var i=t.querySelector(wn(n));if(i)return e.state.loading|=4,e.instance=i,Bt(i),i;l=Td(a),(n=ve.get(n))&&xo(l,n),i=(t.ownerDocument||t).createElement("link"),Bt(i);var u=i;return u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),Gt(i,"link",l),e.state.loading|=4,Ki(i,a.precedence,t),e.instance=i;case"script":return i=Bl(a.src),(n=t.querySelector(En(i)))?(e.instance=n,Bt(n),n):(l=a,(n=ve.get(i))&&(l=j({},a),So(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Bt(n),Gt(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Ki(l,a.precedence,t));return e.instance}function Ki(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function xo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function So(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ji=null;function wd(t,e,a){if(Ji===null){var l=new Map,n=Ji=new Map;n.set(a,l)}else n=Ji,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Xl]||i[Nt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function Ed(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Rp(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Md(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qp(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ul(l.href),i=e.querySelector(wn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=$i.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,Bt(i);return}i=e.ownerDocument||e,l=Td(l),(n=ve.get(n))&&xo(l,n),i=i.createElement("link"),Bt(i);var u=i;u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),Gt(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=$i.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var zo=0;function kp(t,e){return t.stylesheets&&t.count===0&&Fi(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Fi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&zo===0&&(zo=62500*bp());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>zo?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function $i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Wi=null;function Fi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wi=new Map,e.forEach(Gp,t),Wi=null,$i.call(t))}function Gp(t,e){if(!(e.state.loading&4)){var a=Wi.get(t);if(a)var l=a.get(null);else{a=new Map,Wi.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=$i.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Mn={$$typeof:st,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function Yp(t,e,a,l,n,i,u,c,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.hiddenUpdates=gu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Dd(t,e,a,l,n,i,u,c,r,g,x,A){return t=new Yp(t,e,a,u,r,g,x,A,c),e=1,i===!0&&(e|=24),i=te(3,null,null,e),t.current=i,i.stateNode=t,e=tc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},nc(i),t}function Cd(t){return t?(t=sl,t):sl}function Od(t,e,a,l,n,i){n=Cd(n),l.context===null?l.context=n:l.pendingContext=n,l=ua(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ca(t,l,e),a!==null&&($t(a,t,e),un(a,t,e))}function Ud(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Ao(t,e){Ud(t,e),(t=t.alternate)&&Ud(t,e)}function Bd(t){if(t.tag===13||t.tag===31){var e=Ba(t,67108864);e!==null&&$t(e,t,67108864),Ao(t,67108864)}}function _d(t){if(t.tag===13||t.tag===31){var e=ie();e=vu(e);var a=Ba(t,e);a!==null&&$t(a,t,e),Ao(t,e)}}var Ii=!0;function Xp(t,e,a,l){var n=z.T;z.T=null;var i=D.p;try{D.p=2,To(t,e,a,l)}finally{D.p=i,z.T=n}}function Lp(t,e,a,l){var n=z.T;z.T=null;var i=D.p;try{D.p=8,To(t,e,a,l)}finally{D.p=i,z.T=n}}function To(t,e,a,l){if(Ii){var n=jo(l);if(n===null)ro(t,e,l,Pi,a),Nd(t,l);else if(Vp(n,t,e,a,l))l.stopPropagation();else if(Nd(t,l),e&4&&-1<Qp.indexOf(t)){for(;n!==null;){var i=Pa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ma(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var r=1<<31-It(u);c.entanglements[1]|=r,u&=~r}Ee(i),(at&6)===0&&(Hi=Wt()+500,zn(0))}}break;case 31:case 13:c=Ba(i,2),c!==null&&$t(c,i,2),Ri(),Ao(i,2)}if(i=jo(l),i===null&&ro(t,e,l,Pi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else ro(t,e,l,null,a)}}function jo(t){return t=wu(t),wo(t)}var Pi=null;function wo(t){if(Pi=null,t=Ia(t),t!==null){var e=E(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=C(e),t!==null)return t;t=null}else if(a===31){if(t=O(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Pi=t,null}function Hd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(D0()){case Xo:return 2;case Lo:return 8;case Xn:case C0:return 32;case Qo:return 268435456;default:return 32}default:return 32}}var Eo=!1,ya=null,ba=null,xa=null,Dn=new Map,Cn=new Map,Sa=[],Qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nd(t,e){switch(t){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":Dn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(e.pointerId)}}function On(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Pa(e),e!==null&&Bd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Vp(t,e,a,l,n){switch(e){case"focusin":return ya=On(ya,t,e,a,l,n),!0;case"dragenter":return ba=On(ba,t,e,a,l,n),!0;case"mouseover":return xa=On(xa,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return Dn.set(i,On(Dn.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Cn.set(i,On(Cn.get(i)||null,t,e,a,l,n)),!0}return!1}function Rd(t){var e=Ia(t.target);if(e!==null){var a=E(e);if(a!==null){if(e=a.tag,e===13){if(e=C(a),e!==null){t.blockedOn=e,Wo(t.priority,function(){_d(a)});return}}else if(e===31){if(e=O(a),e!==null){t.blockedOn=e,Wo(t.priority,function(){_d(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=jo(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ju=l,a.target.dispatchEvent(l),ju=null}else return e=Pa(a),e!==null&&Bd(e),t.blockedOn=a,!1;e.shift()}return!0}function qd(t,e,a){tu(t)&&a.delete(e)}function Zp(){Eo=!1,ya!==null&&tu(ya)&&(ya=null),ba!==null&&tu(ba)&&(ba=null),xa!==null&&tu(xa)&&(xa=null),Dn.forEach(qd),Cn.forEach(qd)}function eu(t,e){t.blockedOn===e&&(t.blockedOn=null,Eo||(Eo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Zp)))}var au=null;function kd(t){au!==t&&(au=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){au===t&&(au=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(wo(l||a)===null)continue;break}var i=Pa(a);i!==null&&(t.splice(e,3),e-=3,Tc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function _l(t){function e(r){return eu(r,t)}ya!==null&&eu(ya,t),ba!==null&&eu(ba,t),xa!==null&&eu(xa,t),Dn.forEach(e),Cn.forEach(e);for(var a=0;a<Sa.length;a++){var l=Sa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Sa.length&&(a=Sa[0],a.blockedOn===null);)Rd(a),a.blockedOn===null&&Sa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Lt]||null;if(typeof i=="function")u||kd(a);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Lt]||null)c=u.formAction;else if(wo(n)!==null)continue}else c=u.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),kd(a)}}}function Gd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Mo(t){this._internalRoot=t}lu.prototype.render=Mo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var a=e.current,l=ie();Od(a,l,t,e,null,null)},lu.prototype.unmount=Mo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Od(t.current,2,null,t,null,null),Ri(),e[Fa]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=$o();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Sa.length&&e!==0&&e<Sa[a].priority;a++);Sa.splice(a,0,t),a===0&&Rd(t)}};var Yd=y.version;if(Yd!=="19.2.1")throw Error(f(527,Yd,"19.2.1"));D.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=M(e),t=t!==null?N(t):null,t=t===null?null:t.stateNode,t};var Kp={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{kl=nu.inject(Kp),Ft=nu}catch{}}return Un.createRoot=function(t,e){if(!w(t))throw Error(f(299));var a=!1,l="",n=Ks,i=Js,u=$s;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Dd(t,1,!1,null,null,a,l,null,n,i,u,Gd),t[Fa]=e.current,oo(t),new Mo(e)},Un.hydrateRoot=function(t,e,a){if(!w(t))throw Error(f(299));var l=!1,n="",i=Ks,u=Js,c=$s,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),e=Dd(t,1,!0,e,a??null,l,n,r,i,u,c,Gd),e.context=Cd(null),a=e.current,l=ie(),l=vu(l),n=ua(l),n.callback=null,ca(a,n,l),a=l,e.current.lanes=a,Yl(e,a),Ee(e),t[Fa]=e.current,oo(t),new lu(e)},Un.version="19.2.1",Un}var Vd;function lm(){if(Vd)return Do.exports;Vd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(y){console.error(y)}}return s(),Do.exports=am(),Do.exports}var nm=lm();const Uo='-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',et={display:Uo,body:Uo,mono:Uo},Bo={mobile:"640px",tablet:"1024px",desktop:"1280px"},k={mobile:`@media (min-width: ${Bo.mobile})`,tablet:`@media (min-width: ${Bo.tablet})`,desktop:`@media (min-width: ${Bo.desktop})`,belowTablet:"@media (max-width: 1023px)",belowMobile:"@media (max-width: 639px)",hover:"@media (hover: hover) and (pointer: fine)"},Bn={sm:"8px",md:"10px",lg:"14px",xl:"20px",pill:"999px"},gt={out:[.16,1,.3,1],fly:[.76,0,.24,1]},im=Object.fromEntries(Object.entries(gt).map(([s,y])=>[s,`cubic-bezier(${y.join(", ")})`])),Ht={press:.1,feedback:.12,control:.2,hover:.25,surface:.3,fill:.35,scene:.4,frame:.5,enter:.6,enterLong:.7},Aa=Object.fromEntries(Object.entries(Ht).map(([s,y])=>[s,`${y}s`])),cu={type:"spring",bounce:0,duration:.4},um={type:"spring",bounce:.2,duration:.4},o0={stiffness:140,damping:30,mass:.4},r0=(s,y=1)=>({stiffness:s,mass:y,damping:2*Math.sqrt(s*y)});function cm(s,y=.998){return s/1e3*y/(1-y)}const om=Ip`
  :root {
    --bg: #000000;
    --bg-elev: #0A0C0E;
    --surface: rgba(255, 255, 255, 0.030);
    --surface-2: rgba(255, 255, 255, 0.062);
    --ink: #F4F7FA;
    --ink-2: rgba(244, 247, 250, 0.62);
    /* 0.58 is the quietest alpha still clearing 4.5:1 over --bg and --surface. */
    --ink-3: rgba(244, 247, 250, 0.58);
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

    --ease-out: ${im.out};

    --dur-press: ${Aa.press};
    --dur-feedback: ${Aa.feedback};
    --dur-control: ${Aa.control};
    --dur-hover: ${Aa.hover};
    --dur-surface: ${Aa.surface};
    --dur-fill: ${Aa.fill};
    --dur-scene: ${Aa.scene};
    --dur-frame: ${Aa.frame};

    --r-sm: ${Bn.sm};
    --r-md: ${Bn.md};
    --r-lg: ${Bn.lg};
    --r-xl: ${Bn.xl};
    --r-pill: ${Bn.pill};

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
    /* Higher than dark's 0.58: dark ink on a light ground needs more alpha for 4.5:1. */
    --ink-3: rgba(21, 22, 26, 0.62);
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

    color-scheme: light;
  }

  /* Near-solid grounds and defined edges; translucency stops carrying the hierarchy. */
  @media (prefers-contrast: more) {
    :root {
      --surface: rgba(255, 255, 255, 0.10);
      --surface-2: rgba(255, 255, 255, 0.18);
      --ink-2: rgba(244, 247, 250, 0.92);
      --ink-3: rgba(244, 247, 250, 0.88);
      --line: rgba(255, 255, 255, 0.30);
      --line-2: rgba(255, 255, 255, 0.52);
      --accent-ink: #4FD8EC;
      --accent-soft: rgba(15, 163, 184, 0.30);
    }

    [data-theme="light"] {
      --surface: rgba(15, 16, 20, 0.06);
      --surface-2: rgba(15, 16, 20, 0.12);
      --ink-2: rgba(21, 22, 26, 0.94);
      --ink-3: rgba(21, 22, 26, 0.90);
      --line: rgba(21, 22, 26, 0.34);
      --line-2: rgba(21, 22, 26, 0.56);
      --accent-ink: #06616F;
      --accent-soft: rgba(15, 163, 184, 0.24);
    }
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  /* Everything downstream is sized in rem off this, so the browser's text-size
     setting scales the whole type scale instead of being overridden by it. */
  html {
    position: relative;
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overscroll-behavior: none;
    scroll-behavior: auto;
  }

  body {
    font-family: ${et.body};
    font-optical-sizing: auto;
    background-color: var(--bg);
    color: var(--ink);
    line-height: 1.6;
    font-size: 1.0625rem;
    font-weight: 400;
    min-height: 100vh;
    position: relative;
    overscroll-behavior: none;
    -webkit-tap-highlight-color: transparent;
  }

  #root { position: relative; min-height: 100vh; isolation: isolate; }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${et.display};
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

  /* Fast enough to read as a response to the press rather than a delayed report of it.
     The theme change does not rely on this: index.html suppresses it mid-transition. */
  a, button {
    transition:
      background-color var(--dur-feedback) var(--ease-out),
      border-color var(--dur-feedback) var(--ease-out),
      color var(--dur-feedback) var(--ease-out);
  }

  /* Theme cross-fade rules are inlined in index.html, outside this runtime sheet. */

  ::-webkit-scrollbar { width: 0; height: 0; display: none; }
  * { scrollbar-width: none; }
  body { -ms-overflow-style: none; }

  :focus { outline: none; }
  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--accent);
    border-radius: var(--r-sm);
  }

  /* Transform, not top: this arrives on Tab, so it must not wait on a layout pass. */
  .skip-link {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, -150%);
    background: var(--bg-elev);
    color: var(--ink);
    padding: 12px 22px;
    border-radius: var(--r-pill);
    border: 1px solid var(--line-2);
    font-weight: 600;
    font-size: 14px;
    z-index: 10001;
    transition: transform var(--dur-control) var(--ease-out);
    &:focus { transform: translate(-50%, 18px); }
  }

  section[id] { scroll-margin-top: 96px; }
  #home { scroll-margin-top: 0; }

  /* Gentler, not off. Movement and size go; opacity and colour survive, because they
     are how a hover, a press and a focus report that the input landed. */
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-property:
        opacity, color, background-color, border-color, box-shadow, fill, stroke !important;
      transition-duration: var(--dur-control) !important;
    }
  }

  .mono { font-family: ${et.mono}; font-variant-numeric: tabular-nums; }
  .gpu { transform: translateZ(0); backface-visibility: hidden; }
`,s0=H.createContext(void 0),No="portfolio-theme-mode",rm=()=>{if(typeof window<"u"){const s=localStorage.getItem(No);return s==="dark"||s==="light"?s:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"dark"},sm=({children:s})=>{const[y,T]=H.useState(rm),[f,w]=H.useState(()=>{if(typeof window<"u"){const C=localStorage.getItem(No);return C==="dark"||C==="light"}return!1});H.useEffect(()=>{document.documentElement.setAttribute("data-theme",y)},[y]),H.useEffect(()=>{f&&localStorage.setItem(No,y)},[y,f]);const E=()=>{const C=y==="dark"?"light":"dark";w(!0);const O=()=>{document.documentElement.setAttribute("data-theme",C),T(C)};if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof document.startViewTransition!="function"){O();return}document.startViewTransition(O)};return o.jsx(s0.Provider,{value:{mode:y,toggleTheme:E,isDark:y==="dark"},children:s})},f0=(s,y)=>{const T=y?.offset??0,f=typeof s=="string"?document.getElementById(s.replace("#","")):s instanceof HTMLElement?s:null;f?window.scrollTo({top:f.getBoundingClientRect().top+window.scrollY+T,behavior:"smooth"}):typeof s=="number"&&window.scrollTo({top:s+T,behavior:"smooth"})},d0=H.createContext({scrollTo:f0}),h0=()=>H.useContext(d0);function p0(s,y){if(y==="home"){s("home",{offset:0});return}const T=document.getElementById(y),f=T?.firstElementChild,w=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"))||64,E=window.matchMedia("(min-width: 1024px)").matches?w:0,C=f&&parseFloat(getComputedStyle(f).paddingLeft)||0;if(T&&f&&C>0){const O=f.getBoundingClientRect().top+window.scrollY;s(O-E-C*1.6)}else s(y,{offset:-(E+24)})}const fm=({children:s})=>o.jsx(d0.Provider,{value:{scrollTo:f0},children:s}),dm=(function(){const y=typeof document<"u"&&document.createElement("link").relList;return y&&y.supports&&y.supports("modulepreload")?"modulepreload":"preload"})(),hm=function(s){return"/"+s},Zd={},pm=function(y,T,f){let w=Promise.resolve();if(T&&T.length>0){let B=function(M){return Promise.all(M.map(N=>Promise.resolve(N).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};document.getElementsByTagName("link");const C=document.querySelector("meta[property=csp-nonce]"),O=C?.nonce||C?.getAttribute("nonce");w=B(T.map(M=>{if(M=hm(M),M in Zd)return;Zd[M]=!0;const N=M.endsWith(".css"),j=N?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${M}"]${j}`))return;const X=document.createElement("link");if(X.rel=N?"stylesheet":dm,N||(X.as="script"),X.crossOrigin="",X.href=M,O&&X.setAttribute("nonce",O),document.head.appendChild(X),N)return new Promise((L,q)=>{X.addEventListener("load",L),X.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${M}`)))})}))}function E(C){const O=new Event("vite:preloadError",{cancelable:!0});if(O.payload=C,window.dispatchEvent(O),!O.defaultPrevented)throw C}return w.then(C=>{for(const O of C||[])O.status==="rejected"&&E(O.reason);return y().catch(E)})};function m0(){const s=H.useContext(s0);if(!s)throw new Error("useTheme must be used within a ThemeProvider");return s}const mm="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E",gm=m.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: #000000;

  [data-theme='light'] & {
    background: transparent;
  }

  /* A drifting field under translucent chrome is exactly what high contrast is asking
     us to remove, so the whole scene collapses to the flat page ground. */
  @media (prefers-contrast: more) {
    background: var(--bg);
    [data-theme='light'] & { background: var(--bg); }
    > * { display: none; }
  }
`,vm=m.div`
  position: absolute;
  inset: 0;
  opacity: ${({$ready:s})=>s?1:0};
  transition: opacity var(--dur-scene) var(--ease-out);
`,ym=m.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(90% 60% at 50% -8%, rgba(70, 210, 230, 0.10), transparent 62%);

  [data-theme='light'] & {
    background: radial-gradient(95% 65% at 50% -8%, rgba(10, 150, 172, 0.28), rgba(10, 150, 172, 0.08) 42%, transparent 66%);
  }
`,bm=m.div`
  position: absolute;
  inset: 0;
  background-image: url('${mm}');
  background-repeat: repeat;
  background-size: 160px 160px;
  opacity: 0.035;

  [data-theme='light'] & {
    opacity: 0.022;
  }

  @media (prefers-reduced-transparency: reduce) {
    display: none;
  }
`,xm=m.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(135% 105% at 50% 38%, transparent 60%, rgba(0, 0, 0, 0.6) 100%);

  [data-theme='light'] & {
    display: none;
  }
`,Sm=()=>{const s=Ct(),{isDark:y}=m0(),T=!s,[f,w]=H.useState(!1),[E,C]=H.useState(!1),O=H.useRef(null),B=H.useRef(null),M=H.useRef(y);return M.current=y,H.useEffect(()=>{if(!T)return;let N=!1,j=0,X=0;const L=async()=>{try{const{initSheen:F}=await pm(async()=>{const{initSheen:Tt}=await import("./sheen-DFdMtLv2.js");return{initSheen:Tt}},[]);if(N||!O.current)return;B.current=F(O.current,{dark:M.current}),X=requestAnimationFrame(()=>{N||C(!0)})}catch{N||w(!0)}},q=typeof window.requestIdleCallback=="function";return j=q?window.requestIdleCallback(L,{timeout:400}):window.setTimeout(L,200),()=>{if(N=!0,cancelAnimationFrame(X),q?window.cancelIdleCallback(j):window.clearTimeout(j),B.current){try{B.current.destroy()}catch{}B.current=null}}},[T]),H.useEffect(()=>{B.current?.setDark(y)},[y]),o.jsxs(gm,{"aria-hidden":!0,children:[T&&o.jsx(vm,{ref:O,$ready:E}),(!T||f)&&o.jsx(ym,{}),o.jsx(bm,{}),o.jsx(xm,{})]})},zm=s=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...s,children:[o.jsx("circle",{cx:"12",cy:"12",r:"4"}),o.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),Am=s=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...s,children:o.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),g0=s=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...s,children:[o.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),o.jsx("path",{d:"M22 6L12 13 2 6"})]}),Tm=s=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...s,children:o.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),v0=s=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...s,children:[o.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),o.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),o.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),jm=s=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...s,children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),y0=[{label:"About",href:"about"},{label:"Skills",href:"technologyproficiency"},{label:"Work",href:"professionalexperience"},{label:"Projects",href:"mostproudof"},{label:"Contact",href:"contact"}],b0=["home","about","technologyproficiency","professionalexperience","mostproudof","certifications","testimonials","featured","educationalqualifications","contact"];function wm(){const s=new Set(y0.map(f=>f.href)),y=new Map;let T="home";for(const f of b0)(f==="home"||s.has(f))&&(T=f),y.set(f,T);return y}function Em(){const[s,y]=H.useState("home");return H.useEffect(()=>{const T=wm(),f=b0.map(C=>document.getElementById(C)).filter(C=>C!==null),w=new Map,E=new IntersectionObserver(C=>{for(const M of C)w.set(M.target.id,M.isIntersecting?M.intersectionRatio:0);let O="",B=0;for(const[M,N]of w)N>B&&(B=N,O=M);B>0&&y(T.get(O)??O)},{rootMargin:"-45% 0px -45% 0px",threshold:[0,.25,.5,.75,1]});return f.forEach(C=>E.observe(C)),()=>E.disconnect()},[]),s}const Mm=m.nav`
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

  ${k.tablet} {
    top: 0;
    bottom: auto;
    height: var(--nav-h);
    padding: 0;
    display: block;
  }
`,Dm=m.div`
  position: relative;
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  max-width: 100%;

  ${k.tablet} {
    height: var(--nav-h);
    width: 100%;
    max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
    margin-inline: auto;
    padding: 0 var(--gutter);
    gap: 8px;
    justify-content: space-between;
  }

  ${k.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,Cm=m(G.div)`
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

  ${k.tablet} {
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

  @media (prefers-reduced-transparency: reduce), (prefers-contrast: more) {
    background: var(--bg-elev);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    ${k.tablet} { background: transparent; }
  }
`,Om=m(G.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(50% - 50vw);
  right: calc(50% - 50vw);
  z-index: 0;
  pointer-events: none;
  display: none;
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  backdrop-filter: blur(20px) saturate(120%);
  -webkit-backdrop-filter: blur(20px) saturate(120%);
  will-change: opacity;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 18px;
    background: linear-gradient(to bottom, color-mix(in srgb, var(--bg) 62%, transparent), transparent);
  }

  [data-theme='light'] & {
    background: color-mix(in srgb, var(--bg) 88%, transparent);
    backdrop-filter: blur(20px) saturate(112%);
    -webkit-backdrop-filter: blur(20px) saturate(112%);
  }

  ${k.tablet} { display: block; }

  @media (prefers-reduced-transparency: reduce), (prefers-contrast: more) {
    background: var(--bg);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  @media (prefers-contrast: more) {
    border-bottom: 1px solid var(--line-2);
    &::after { display: none; }
  }
`,Um=m(G.a)`
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
    transition: opacity var(--dur-hover) var(--ease-out);
  }
  &:hover::after { opacity: 1; }

  ${k.belowTablet} { width: 36px; height: 36px; }
`,Bm=m(G.img)`
  width: 32px;
  height: 32px;
  object-fit: contain;
  position: relative;
  z-index: 1;
  transform-origin: center center;
  /* No CSS filter/will-change: Safari rasterizes a filtered transformed <img> blurrily. */
`,_m=m(G.div)`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 2px;
  min-width: 0;

  ${k.tablet} {
    flex: 1 1 auto;
    justify-content: center;
  }

  ${k.belowTablet} {
    flex: 0 1 auto;
    min-width: 0;
    justify-content: flex-start;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,Hm=m(G.a)`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 9px 14px;
  border-radius: var(--r-pill);
  font-size: 0.84375rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
  scroll-snap-align: center;
  color: ${({$active:s})=>s?"var(--accent-ink)":"var(--ink-2)"};
  transition: color var(--dur-feedback) var(--ease-out);

  &:hover { color: ${({$active:s})=>s?"var(--accent-ink)":"var(--ink)"}; }

  ${k.belowTablet} {
    padding: 8px 9px;
    font-size: 0.75rem;
  }
`,Nm=m(G.span)`
  position: absolute;
  inset: 0;
  border-radius: var(--r-pill);
  background: var(--accent-soft);
  border: 1px solid rgba(var(--accent-rgb), 0.45);
  z-index: 0;
`,Rm=m.span`
  position: relative;
  z-index: 1;
`,qm=m(G.button)`
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
    transition: opacity var(--dur-hover) var(--ease-out);
  }
  &:hover::after { opacity: 1; }

  svg { width: 19px; height: 19px; }

  ${k.belowTablet} { width: 36px; height: 36px; }
`,km=m.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: 19px;
  height: 19px;

  > span {
    position: absolute;
    inset: 0;
    display: inline-flex;
  }
`,Hl=gt.out,Gm=gt.fly,Ym=8,Xm=4,Lm=({revealed:s=!0})=>{const y=Em(),{scrollTo:T}=h0(),{isDark:f,toggleTheme:w}=m0(),E=Ct(),[C,O]=H.useState(!1);H.useEffect(()=>{const lt=()=>O(st=>window.scrollY>(st?Xm:Ym));return lt(),window.addEventListener("scroll",lt,{passive:!0}),()=>window.removeEventListener("scroll",lt)},[]);const B=H.useRef(null),M=H.useRef(null),N=H.useRef(1),j=Me(0),X=Me(0),L=Me(1),q=Me(0);H.useLayoutEffect(()=>{const lt=B.current,st=M.current;if(!lt||!st)return;if(E||s){j.set(0),X.set(0),L.set(1),q.set(1);return}const Ot=lt.getBoundingClientRect(),ye=st.offsetWidth||26;if(Ot.width===0){q.set(1);return}const ue=Math.min(150,window.innerWidth*.34);N.current=ue/ye,j.set(window.innerWidth/2-(Ot.left+Ot.width/2)),X.set(window.innerHeight/2-(Ot.top+Ot.height/2)),L.set(N.current*.86),q.set(0)},[]),H.useEffect(()=>{if(E||s){q.set(1);return}const lt=Nl(q,1,{duration:1,ease:Hl}),st=Nl(L,N.current,{duration:1.4,ease:Hl});return()=>{lt.stop(),st.stop()}},[]),H.useEffect(()=>{if(!s||E)return;const lt={duration:.8,ease:Gm},st=Nl(j,0,lt),Ot=Nl(X,0,lt),ye=Nl(L,1,lt);return()=>{st.stop(),Ot.stop(),ye.stop()}},[s]);const F=(lt,st)=>{lt.preventDefault(),p0(T,st)},Tt=0,vt=lt=>({initial:{opacity:0,y:E?0:8},animate:{opacity:s?1:0,y:s||E?0:8},transition:{duration:Ht.enter,delay:s?Tt+lt:0,ease:Hl}});return o.jsx(Mm,{"aria-label":"Primary",children:o.jsxs(Dm,{children:[o.jsx(Cm,{initial:{opacity:0},animate:{opacity:s?1:0},transition:{duration:Ht.enterLong,delay:s?Tt:0,ease:Hl}}),o.jsx(Om,{initial:!1,animate:{opacity:C?1:0},transition:{duration:Ht.fill,ease:Hl}}),o.jsx(Um,{ref:B,href:"#home",onClick:lt=>F(lt,"home"),"aria-label":"Pranshu Nijhawan, back to top",whileHover:{scale:1.06},whileTap:{scale:.94},children:o.jsx(Bm,{ref:M,"data-brand-logo":!0,src:"/images/logo-optimized.webp",alt:"Pranshu Nijhawan logo",width:26,height:26,style:{x:j,y:X,scale:L,opacity:q}})}),o.jsx(_m,{...vt(.18),children:o.jsx($p,{children:y0.map(lt=>{const st=y===lt.href;return o.jsxs(Hm,{href:`#${lt.href}`,$active:st,"aria-current":st?"true":void 0,onClick:Ot=>F(Ot,lt.href),whileTap:{scale:.95},children:[st&&o.jsx(Nm,{layoutId:"nav-active",transition:{type:"spring",stiffness:480,damping:38,mass:.9}}),o.jsx(Rm,{children:lt.label})]},lt.href)})})}),o.jsx(qm,{onClick:w,"aria-label":f?"Switch to light mode":"Switch to dark mode",title:f?"Light mode":"Dark mode",whileHover:{scale:1.06},whileTap:{scale:.94},...vt(.26),children:o.jsx(km,{children:o.jsx(Rl,{initial:!1,children:o.jsx(G.span,{initial:{opacity:0,rotate:-30,scale:.85},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:30,scale:.85},transition:{opacity:{duration:Ht.control,ease:Hl},rotate:cu,scale:cu},children:f?o.jsx(zm,{}):o.jsx(Am,{})},f?"sun":"moon")})})})]})})},Qm="3.0.4",Vm=m.footer`
  position: relative;
  z-index: 1;
  padding: 40px 0 calc(96px + env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);
  ${k.tablet} { padding: 48px 0; }
`,Zm=m.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  margin-top: 4px;
  padding-inline: var(--gutter);

  ${k.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,Km=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 14px;
`,Kd=m.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,Jm=m.span`
  font-family: ${et.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
`,$m=()=>{const s=new Date().getFullYear();return o.jsx(Vm,{children:o.jsx(Zm,{children:o.jsxs(Km,{children:[o.jsx(Kd,{}),o.jsxs(Jm,{children:["© ",s," Pranshu Nijhawan • v",Qm]}),o.jsx(Kd,{})]})})})},Jd=m(G.div)`
  position: fixed;
  inset: 0;
  z-index: 60;
  background: var(--bg);
  overflow: hidden;
  cursor: pointer;

  [data-theme='light'] & {
    background:
      radial-gradient(72% 60% at 50% 54%, rgba(22, 192, 212, 0.10) 0%, transparent 70%),
      var(--bg);
  }
`,Wm=m(G.div)`
  position: absolute;
  inset: 0;
  transform-origin: center 56%;
`,ou=m(G.div)`
  position: absolute;
  inset: 0;
`,qo=m(ou)`
  will-change: transform, opacity;
`,$d=m(qo)`
  background: radial-gradient(58% 46% at 50% 58%,
    rgba(22, 192, 212, 0.550) 0%,
    rgba(24, 170, 205, 0.470) 8%,
    rgba(26, 148, 197, 0.395) 16%,
    rgba(29, 124, 186, 0.325) 24%,
    rgba(34, 96, 168, 0.260) 34%,
    rgba(37, 82, 157, 0.190) 42%,
    rgba(43, 63, 143, 0.120) 52%,
    rgba(44, 58, 136, 0.075) 60%,
    rgba(45, 54, 130, 0.046) 66%,
    rgba(45, 52, 126, 0.024) 71%,
    rgba(45, 51, 122, 0.009) 76%,
    rgba(45, 50, 120, 0.002) 82%,
    transparent 90%);

  [data-theme='light'] & {
    background: radial-gradient(50% 42% at 50% 56%,
      rgba(22, 192, 212, 0.260) 0%,
      rgba(22, 190, 211, 0.223) 10%,
      rgba(22, 187, 210, 0.187) 20%,
      rgba(22, 185, 209, 0.148) 31%,
      rgba(22, 192, 212, 0.100) 42%,
      rgba(24, 180, 205, 0.066) 52%,
      rgba(26, 168, 198, 0.038) 61%,
      rgba(28, 158, 192, 0.018) 68%,
      rgba(30, 150, 188, 0.006) 75%,
      transparent 84%);
  }
`,Fm=m(qo)`
  background: radial-gradient(38% 70% at 50% -6%,
    rgba(150, 220, 240, 0.200) 0%,
    rgba(126, 197, 227, 0.155) 12%,
    rgba(101, 170, 213, 0.113) 22%,
    rgba(80, 140, 200, 0.078) 31%,
    rgba(70, 124, 188, 0.050) 40%,
    rgba(62, 110, 177, 0.029) 48%,
    rgba(56, 99, 168, 0.014) 55%,
    rgba(52, 91, 161, 0.004) 62%,
    transparent 70%);

  [data-theme='light'] & { opacity: 0.35; }
`,Im=m(qo)`
  background: radial-gradient(70% 16% at 50% 70%,
    rgba(22, 192, 212, 0.220) 0%,
    rgba(22, 186, 209, 0.180) 12%,
    rgba(23, 176, 204, 0.143) 23%,
    rgba(24, 164, 198, 0.108) 33%,
    rgba(26, 150, 190, 0.077) 43%,
    rgba(28, 136, 182, 0.051) 52%,
    rgba(30, 122, 174, 0.030) 60%,
    rgba(32, 110, 167, 0.014) 68%,
    rgba(34, 100, 160, 0.004) 76%,
    transparent 86%);

  [data-theme='light'] & { opacity: 0.5; }
`,Pm=m(ou)``,tg=m(G.span)`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle,
    rgba(190, 235, 245, 0.90) 0%,
    rgba(190, 235, 245, 0.58) 30%,
    rgba(190, 235, 245, 0.28) 52%,
    rgba(190, 235, 245, 0.09) 72%,
    rgba(190, 235, 245, 0) 100%);

  [data-theme='light'] & {
    background: radial-gradient(circle,
      rgba(22, 192, 212, 0.55) 0%,
      rgba(22, 192, 212, 0.35) 30%,
      rgba(22, 192, 212, 0.17) 52%,
      rgba(22, 192, 212, 0.05) 72%,
      rgba(22, 192, 212, 0) 100%);
  }
`,Wd=m(ou)`
  background: radial-gradient(circle at 50% 54%,
    transparent 34%,
    rgba(0, 0, 0, 0.045) 44%,
    rgba(0, 0, 0, 0.110) 52%,
    rgba(0, 0, 0, 0.195) 60%,
    rgba(0, 0, 0, 0.295) 68%,
    rgba(0, 0, 0, 0.400) 74%,
    rgba(0, 0, 0, 0.500) 78%,
    rgba(0, 0, 0, 0.578) 84%,
    rgba(0, 0, 0, 0.650) 91%,
    rgba(0, 0, 0, 0.720) 100%);

  [data-theme='light'] & {
    background: radial-gradient(circle at 50% 54%,
      transparent 50%,
      rgba(15, 18, 26, 0.008) 62%,
      rgba(15, 18, 26, 0.020) 72%,
      rgba(15, 18, 26, 0.040) 84%,
      rgba(15, 18, 26, 0.060) 93%,
      rgba(15, 18, 26, 0.080) 100%);
  }
`,eg=m(ou)`
  opacity: 0.055;
  background-size: 128px 128px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");

  [data-theme='light'] & { opacity: 0.03; }
`,ag=m(G.span)`
  position: absolute;
  left: 50%;
  bottom: max(28px, env(safe-area-inset-bottom));
  transform: translateX(-50%);
  font-family: ${et.mono};
  font-size: 0.6875rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
  pointer-events: none;
`,_n=gt.out,_o=s=>{let y=Math.imul(s^2654435769,2246822507);return y=Math.imul(y^y>>>13,3266489909),((y^y>>>16)>>>0)/4294967296},Ho=148,lg=({onComplete:s})=>{const y=Ct(),T=H.useMemo(()=>Array.from({length:14},(w,E)=>{const O=(E*9301+49297)%233280/233280,B=(E*4099+1)%977/977;return{left:6+_o(E*3+1+Ho)*88,top:18+_o(E*3+2+Ho)*68,size:1.4+_o(E*3+3+Ho)*3.6,delay:O*2.2,dur:5+O*5,drift:12+B*26}}),[]);H.useEffect(()=>{const w=setTimeout(s,y?500:1600),E=()=>s();return window.addEventListener("keydown",E,{once:!0}),()=>{clearTimeout(w),window.removeEventListener("keydown",E)}},[y,s]);const f={onClick:s,role:"button",tabIndex:0,"aria-label":"Skip intro"};return y?o.jsxs(Jd,{...f,initial:{opacity:1},exit:{opacity:0,transition:{duration:.4}},children:[o.jsx($d,{animate:{opacity:.8}}),o.jsx(Wd,{})]}):o.jsxs(Jd,{...f,initial:{opacity:1},exit:{opacity:0,transition:{duration:.75,ease:_n}},children:[o.jsxs(Wm,{initial:{scale:1.12},animate:{scale:1},transition:{duration:4,ease:_n},children:[o.jsx($d,{initial:{opacity:0,scale:.7},animate:{opacity:[0,1,.82,1],scale:[.7,1.02,.99,1.02]},transition:{duration:4.2,times:[0,.32,.66,1],ease:"easeInOut",repeat:1/0,repeatType:"mirror"}}),o.jsx(Fm,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:1.8,ease:_n}}),o.jsx(Im,{initial:{opacity:0,scaleX:.6},animate:{opacity:1,scaleX:1},transition:{duration:2,delay:.4,ease:_n}}),o.jsx(Pm,{children:T.map((w,E)=>o.jsx(tg,{style:{left:`${w.left}%`,top:`${w.top}%`,width:w.size,height:w.size},initial:{opacity:0,y:0},animate:{opacity:[0,.8,0],y:[-w.drift*.3,-w.drift]},transition:{duration:w.dur,delay:w.delay,ease:"easeInOut",repeat:1/0,repeatType:"loop"}},E))})]}),o.jsx(Wd,{}),o.jsx(eg,{}),o.jsx(ag,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.7,ease:_n},children:"Tap to skip"})]})},Fd=r0(200,.6),Id=r0(200),iu=3,Pd=new Map;function x0(s){let y=Pd.get(s);return y||(y=typeof s=="string"?G[s]:G.create(s),Pd.set(s,y)),y}const ng=(s,y)=>{switch(s){case"up":return{y};case"down":return{y:-y};case"left":return{x:y};case"right":return{x:-y};default:return{}}},Ta=({children:s,as:y="div",delay:T=0,dist:f=28,dir:w="up",blur:E=!0,amount:C=.3,once:O=!0,className:B,style:M})=>Ct()?H.createElement(y,{className:B,style:M},s):H.createElement(x0(y),{className:B,style:M,initial:{opacity:0,...ng(w,f),filter:E?"blur(10px)":"blur(0px)"},whileInView:{opacity:1,x:0,y:0,filter:"blur(0px)"},viewport:{once:O,amount:C},transition:{duration:Ht.enterLong,delay:T,ease:gt.out}},s),Ro=({text:s,as:y="span",className:T,delay:f=0,stagger:w=.045,once:E=!0,amount:C=.4})=>{const O=Ct(),B=s.split(" ");if(O)return H.createElement(y,{className:T},s);const M=B.map((N,j)=>o.jsx("span",{"aria-hidden":!0,style:{display:"inline-block",overflow:"hidden",verticalAlign:"top",paddingBottom:"0.12em"},children:o.jsxs(G.span,{style:{display:"inline-block"},variants:{hidden:{y:"110%",opacity:0,filter:"blur(8px)"},visible:{y:"0%",opacity:1,filter:"blur(0px)",transition:{duration:Ht.enterLong,ease:gt.out}}},children:[N,j<B.length-1?" ":""]})},`${N}-${j}`));return H.createElement(x0(y),{className:T,initial:"hidden",whileInView:"visible",viewport:{once:E,amount:C},variants:{hidden:{},visible:{transition:{staggerChildren:w,delayChildren:f}}}},o.jsx("span",{style:ig,children:s},"sr"),...M)},ig={position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0 0 0 0)",whiteSpace:"nowrap",border:0},S0=({children:s,strength:y=.35,className:T,...f})=>{const w=Ct(),E=H.useRef(null),C=Me(0),O=Me(0),B=Ka(C,Fd),M=Ka(O,Fd),N=X=>{if(w||!E.current)return;const L=E.current.getBoundingClientRect();C.set((X.clientX-(L.left+L.width/2))*y),O.set((X.clientY-(L.top+L.height/2))*y)},j=()=>{C.set(0),O.set(0)};return o.jsx(G.div,{ref:E,className:T,onMouseMove:N,onMouseLeave:j,style:{x:w?0:B,y:w?0:M,display:"inline-block"},...f,children:s})},z0=({children:s,className:y,max:T=9,glare:f=!0})=>{const w=Ct(),E=H.useRef(null),C=Me(0),O=Me(0),B=Me(0),M=Me(0),N=Ka(C,Id),j=Ka(O,Id),X=q=>{if(w||!E.current)return;const F=E.current.getBoundingClientRect(),Tt=(q.clientX-F.left)/F.width,vt=(q.clientY-F.top)/F.height;O.set((Tt-.5)*T*2),C.set(-(vt-.5)*T*2),B.set((Tt-.5)*F.width),M.set((vt-.5)*F.height)},L=()=>{C.set(0),O.set(0),B.set(0),M.set(0)};return o.jsxs(G.div,{ref:E,className:y,onMouseMove:X,onMouseLeave:L,style:{rotateX:w?0:N,rotateY:w?0:j,transformStyle:"preserve-3d",transformPerspective:900,position:"relative"},children:[s,f&&!w&&o.jsx("span",{"aria-hidden":!0,style:{position:"absolute",inset:0,borderRadius:"inherit",overflow:"hidden",pointerEvents:"none"},children:o.jsx(G.span,{style:{position:"absolute",top:`${-100*(iu-1)/2}%`,left:`${-100*(iu-1)/2}%`,width:`${iu*100}%`,height:`${iu*100}%`,background:"radial-gradient(circle at 50% 50%, rgba(var(--accent-rgb),0.18), transparent 18%)",x:B,y:M}})})]})};function ug(s=80){const y=H.useRef(null),T=Ct(),{scrollYProgress:f}=Nn({target:y,offset:["start end","end start"]}),w=Za(f,[0,1],[s,-s]);return{ref:y,y:T?0:w}}const cg=({to:s,suffix:y="",prefix:T="",duration:f=1.6,className:w,play:E=!0})=>{const C=Ct(),O=H.useRef(null),B=H.useRef(null),M=c0(O,{once:!0,amount:.6});return H.useEffect(()=>{if(!M||!E)return;const N=B.current;if(!N)return;let j=-1;const X=Nl(0,s,{duration:C?.001:f,ease:gt.out,onUpdate:L=>{const q=Math.round(L);q!==j&&(j=q,N.textContent=String(q))}});return()=>X.stop()},[M,E,s,f,C]),o.jsxs("span",{ref:O,className:w,children:[T,o.jsx("span",{ref:B,children:"0"}),y]})},og=m.section`
  position: relative;
  z-index: 1;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${k.belowTablet} {
    min-height: auto;
    justify-content: flex-start;
  }
`,rg=m(G.div)`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  padding-top: clamp(120px, 18vh, 200px);
  padding-bottom: clamp(48px, 8vh, 96px);

  ${k.belowTablet} {
    padding-top: clamp(40px, 11vw, 72px);
    padding-bottom: 24px;
  }

  ${k.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,sg=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;

  ${k.belowTablet} {
    gap: 12px;
  }

  ${k.tablet} {
    grid-template-columns: 1.08fr 0.92fr;
  }
`,fg=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,dg=m.h1`
  font-family: ${et.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.045em;
  line-height: 0.88;
  font-size: clamp(54px, 9.5vw, 116px);
  margin-bottom: 26px;
`,t0=m.span`
  display: block;
  overflow: hidden;
  padding-bottom: 0.06em;
`,hg=m(G.p)`
  font-family: ${et.display};
  font-weight: 500;
  font-size: clamp(19px, 2.5vw, 27px);
  letter-spacing: -0.02em;
  line-height: 1.12;
  color: var(--ink);
  margin-bottom: 22px;

  em { font-style: normal; color: var(--accent-ink); }
`,pg=m(G.p)`
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
    transition: color var(--dur-surface) var(--ease-out), text-decoration-color var(--dur-surface) var(--ease-out);
  }
  a:hover { color: var(--accent-ink); text-decoration-color: var(--accent); }
`,mg=m(G.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`,gg=m(G.a)`
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

  svg { width: 17px; height: 17px; transition: transform var(--dur-surface) var(--ease-out); }
  ${k.hover} {
    &:hover svg { transform: translateX(4px); }
  }
`,vg=m(G.a)`
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

  svg { width: 16px; height: 16px; opacity: 0.7; transition: transform var(--dur-surface) var(--ease-out); }
  &:hover { border-color: var(--ink-3); }
  ${k.hover} {
    &:hover svg { transform: translate(2px, -2px); }
  }
`,yg=m(G.div)`
  position: relative;
  display: flex;
  justify-content: center;
  ${k.belowTablet} { order: -1; }
`,bg=m.div`
  position: relative;
  width: min(440px, 78vw);
  aspect-ratio: 1 / 1;
`,xg=m.div`
  position: absolute;
  inset: 4% 6% 2% 6%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(var(--accent-rgb), 0.13), transparent 72%);
  filter: blur(48px);
  z-index: -1;
`,Sg=m.div`
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
`,zg=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`,Ag=m.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  padding-bottom: clamp(40px, 7vh, 88px);

  ${k.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,Tg=m(G.ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(28px, 4vw, 60px);
  list-style: none;
  margin: 0;
  padding: 0;

  ${k.mobile} { grid-template-columns: repeat(4, 1fr); }
`,jg=m(G.li)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,wg=m(G.span)`
  height: 2px;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 10px;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 12%, transparent));
`,Eg=m.span`
  font-family: ${et.display};
  font-weight: 600;
  font-size: clamp(34px, 5vw, 56px);
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1;
`,Mg=m.span`
  font-family: ${et.mono};
  font-size: 11.5px;
  color: var(--ink-3);
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,Dg=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),Cg=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),Og=[{to:10,prefix:"",suffix:"+",label:"Years"},{to:65,prefix:"",suffix:"+",label:"Engineers Led"},{to:2,prefix:"$",suffix:"M+",label:"Savings"},{to:15,prefix:"",suffix:"+",label:"Products"}],Ug=({data:s,start:y=!0})=>{const T=Ct(),{scrollTo:f}=h0(),{ref:w,y:E}=ug(56),C=H.useRef(null),{scrollYProgress:O}=Nn({target:C,offset:["start start","end start"]}),B=Za(O,[0,1],[0,-110]),M=Za(O,[0,.75],[1,0]),[N,...j]=s.name.split(" "),X=j.join(" "),L=0,q=gt.out,F=vt=>({initial:T?{opacity:0}:{y:"110%"},animate:y?T?{opacity:1}:{y:"0%"}:T?{opacity:0}:{y:"110%"},transition:{duration:.9,delay:y?L+vt:0,ease:gt.out}}),Tt=vt=>({initial:T?{opacity:0}:{opacity:0,y:18,filter:"blur(8px)"},animate:y?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:T?0:18,filter:T?"blur(0px)":"blur(8px)"},transition:{duration:Ht.enterLong,delay:y?L+vt:0,ease:gt.out}});return o.jsxs(og,{id:"home",ref:C,children:[o.jsx(rg,{style:T?void 0:{y:B,opacity:M},children:o.jsxs(sg,{children:[o.jsxs(fg,{children:[o.jsxs(dg,{"aria-label":s.name,children:[o.jsx(t0,{"aria-hidden":!0,children:o.jsx(G.span,{style:{display:"block"},...F(.15),children:N})}),o.jsx(t0,{"aria-hidden":!0,children:o.jsx(G.span,{style:{display:"block",color:"var(--accent-ink)"},...F(.27),children:X})})]}),o.jsx(hg,{...Tt(.34),children:s.designation}),o.jsxs(pg,{...Tt(.45),children:["Enterprise Architect of"," ",o.jsx("a",{href:"https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview",target:"_blank",rel:"noopener noreferrer",children:"Periscope"}),"'s"," ",o.jsx("a",{href:"https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance",target:"_blank",rel:"noopener noreferrer",children:"Promotion Advisor"})," ","at"," ",o.jsx("a",{href:"https://www.linkedin.com/company/mckinsey/",target:"_blank",rel:"noopener noreferrer",children:"McKinsey"}),", building agentic AI and high-throughput data platforms."]}),o.jsxs(mg,{...Tt(.58),children:[o.jsx(S0,{strength:.4,style:{display:"inline-block"},children:o.jsxs(gg,{href:"#contact",onClick:vt=>{vt.preventDefault(),p0(f,"contact")},whileHover:{scale:1.04},whileTap:{scale:.97},children:["Get in touch ",o.jsx(Dg,{})]})}),o.jsxs(vg,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.97},children:[o.jsx(Cg,{})," Download resume"]})]})]}),o.jsx(yg,{ref:w,style:{y:E},children:o.jsx(G.div,{initial:T?{opacity:0}:{opacity:0,scale:.92,filter:"blur(14px)"},animate:y?{opacity:1,scale:1,filter:"blur(0px)"}:{opacity:0},transition:{duration:1,delay:y?L+.4:0,ease:gt.out},children:o.jsx(z0,{max:6,glare:!1,children:o.jsxs(bg,{children:[o.jsx(xg,{}),o.jsx(Sg,{children:o.jsx(zg,{src:"/images/profile.webp",alt:s.name,width:440,height:440,loading:"eager",decoding:"async"})})]})})})})]})}),o.jsx(Ag,{children:o.jsx(Tg,{initial:T?!1:"hidden",animate:T?void 0:y?"visible":"hidden",variants:{hidden:{},visible:{transition:{staggerChildren:.12,delayChildren:L+.2}}},children:Og.map(vt=>o.jsxs(jg,{variants:{hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.6,ease:q}}},children:[o.jsx(wg,{variants:{hidden:{scaleX:0},visible:{scaleX:1,transition:{duration:.8,ease:q}}}}),o.jsx(Eg,{children:o.jsx(cg,{to:vt.to,prefix:vt.prefix,suffix:vt.suffix,play:y})}),o.jsx(Mg,{children:vt.label})]},vt.label))})})]})},e0={prose:"var(--maxw-prose)",content:"var(--maxw-content)",wide:"var(--maxw-wide)",full:"var(--maxw-full)"},ja=m.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,wa=m.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--gutter);
  max-width: calc(${({$max:s="content"})=>e0[s]} + var(--gutter) * 2);

  ${k.desktop} {
    max-width: calc((100vw + ${({$max:s="content"})=>e0[s]} + var(--gutter) * 2) / 2);
  }
`,Bg=m.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${et.mono};
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
`,_g=m.h2`
  font-family: ${et.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.03em;
  line-height: 0.98;
  font-size: clamp(38px, 7vw, 84px);
`,Hg=m.p`
  color: var(--ink-2);
  font-size: clamp(17px, 2.1vw, 21px);
  line-height: 1.6;
  max-width: 60ch;
`,Ng=m.span`
  display: block;
  height: 2px;
  width: 64px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-hot));
  transform-origin: left;
`,Rg=m(G.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 56px;
  align-items: ${({$align:s})=>s==="center"?"center":"flex-start"};
  text-align: ${({$align:s})=>s==="center"?"center":"left"};
  ${k.tablet} { margin-bottom: 80px; }
`,We=({title:s,kicker:y,lead:T,align:f="left",leadFull:w=!1})=>{const E=Ct(),C=H.useRef(null),O=c0(C,{margin:"20% 0px 20% 0px"}),{scrollYProgress:B}=Nn({target:C,offset:["start end","end start"]}),M=Za(B,[0,1],[30,-30]);return o.jsxs(Rg,{ref:C,$align:f,style:E?void 0:{y:O?M:0},children:[y&&o.jsx(G.div,{initial:E?!1:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.6},transition:{duration:Ht.frame,ease:gt.out},children:o.jsx(Bg,{children:y})}),o.jsx(Ro,{as:_g,text:s}),o.jsx(G.div,{style:{transformOrigin:f==="center"?"center":"left"},initial:E?!1:{scaleX:0,opacity:0},whileInView:{scaleX:1,opacity:1},viewport:{once:!0,amount:.6},transition:{duration:Ht.enterLong,delay:.15,ease:gt.out},children:o.jsx(Ng,{})}),T&&o.jsx(G.div,{initial:E?!1:{opacity:0,y:16,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.5},transition:{duration:Ht.enterLong,delay:.2,ease:gt.out},children:o.jsx(Hg,{style:{...f==="center"?{marginInline:"auto"}:{},...w?{maxWidth:"none"}:{}},children:T})})]})},qg=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}],kg=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 8px;

  ${k.tablet} {
    grid-template-columns: 0.42fr 0.58fr;
    gap: 80px;
  }
`,Gg=m.div`
  ${k.tablet} { position: sticky; top: 120px; height: max-content; }
`,Yg=m.span`
  font-family: ${et.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-ink);
  display: block;
  margin-bottom: 18px;
`,Xg=m.p`
  font-family: ${et.display};
  font-weight: 500;
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--ink);
`,Lg=m.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  p {
    font-size: clamp(16px, 1.8vw, 18px);
    line-height: 1.75;
    color: var(--ink-2);
    max-width: 65ch;
  }
`,Qg=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 72px;

  ${k.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }
`,ko=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: var(--r-xl);
  border: 1px solid var(--line);
  background: var(--surface);
  padding: 30px 28px;
  overflow: hidden;
  transition: border-color var(--dur-surface) var(--ease-out), background var(--dur-surface) var(--ease-out);

  &:hover { border-color: var(--line-2); background: var(--surface-2); }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent-hot));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--dur-hover) var(--ease-out);
  }
  ${k.hover} {
    &:hover::before { transform: scaleX(1); }
  }

  ${k.tablet} {
    &:first-child { grid-row: span 2; }
  }
`,Vg=m.span`
  font-family: ${et.mono};
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--accent-ink);
`,Zg=m.h3`
  font-family: ${et.display};
  font-size: clamp(18px, 1.9vw, 21px);
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  line-height: 1.2;

  ${ko}:first-child & {
    ${k.tablet} { font-size: clamp(22px, 2.6vw, 28px); }
  }
`,Kg=m.p`
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ink-3);

  ${ko}:first-child & {
    ${k.tablet} { font-size: 15.5px; }
  }
`,Jg=m.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`,$g=m(G.a)`
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

  svg { width: 16px; height: 16px; color: var(--accent-ink); transition: transform var(--dur-surface) var(--ease-out); }
  &:hover { border-color: var(--accent); }
  ${k.hover} {
    &:hover svg { transform: translateY(2px); }
  }
`,Wg=({data:s})=>{const y=s.content.slice(0,3).map(T=>T.replace(/^🔹\s*/,"").trim());return o.jsx(ja,{id:"about",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(We,{title:"About",lead:y[0],leadFull:!0}),o.jsxs(kg,{children:[o.jsx(Gg,{children:o.jsxs(Ta,{dir:"up",children:[o.jsx(Yg,{children:"The throughline"}),o.jsx(Xg,{children:"Technical depth, measured in business outcomes."})]})}),o.jsxs(Lg,{children:[o.jsx(Ta,{dir:"up",delay:.05,children:o.jsx("p",{children:y[1]})}),o.jsx(Ta,{dir:"up",delay:.12,children:o.jsx("p",{children:y[2]})})]})]}),o.jsx(Qg,{children:qg.map((T,f)=>o.jsxs(Ta,{as:ko,dir:"up",delay:f*.08,children:[o.jsx(Vg,{children:String(f+1).padStart(2,"0")}),o.jsx(Zg,{children:T.title}),o.jsx(Kg,{children:T.text})]},T.title))}),o.jsx(Jg,{children:o.jsx(S0,{strength:.3,style:{display:"inline-block"},children:o.jsxs($g,{href:s.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.04},whileTap:{scale:.97},children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),s.buttonProps.name]})})})]})})},a0=gt.out,Fg=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 5vh, 64px) clamp(48px, 6vw, 96px);
  margin-top: clamp(40px, 6vh, 72px);

  ${k.tablet} { grid-template-columns: repeat(2, 1fr); }
`,Ig=m(G.div)`
  display: flex;
  flex-direction: column;
`,Pg=m.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px solid var(--line);
`,tv=m.h3`
  font-family: ${et.display};
  font-size: clamp(18px, 2vw, 23px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.1;
`,ev=m.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,av=m.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`,lv=m.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,nv=m.span`
  font-size: 14.5px;
  color: var(--ink);
  line-height: 1.25;
`,iv=m.span`
  font-family: ${et.mono};
  font-size: 12.5px;
  color: var(--ink-3);
  flex-shrink: 0;
`,uv=m.div`
  position: relative;
  height: 4px;
  border-radius: 4px;
  background: var(--line);
  overflow: hidden;
`,cv=m(G.span)`
  position: absolute;
  inset: 0;
  border-radius: 4px;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), var(--accent-ink));
`,ov=({data:s})=>{const y=Ct();return o.jsx(ja,{id:"technologyproficiency",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(We,{title:"Skills",lead:"The stack behind agentic AI systems, billion-row analytics, and platforms that stay up while they scale."}),o.jsx(Fg,{children:s.skills.map(T=>o.jsxs(Ig,{initial:y?!1:{opacity:0,y:26},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6,ease:a0},children:[o.jsx(Pg,{children:o.jsx(tv,{children:T.category})}),o.jsx(ev,{children:T.skills.map((f,w)=>o.jsxs(av,{children:[o.jsxs(lv,{children:[o.jsx(nv,{children:f.name}),o.jsxs(iv,{children:[f.percentage,"%"]})]}),o.jsx(uv,{children:o.jsx(cv,{initial:y?{scaleX:f.percentage/100}:{scaleX:0},whileInView:{scaleX:f.percentage/100},viewport:{once:!0,amount:.8},transition:{duration:.9,delay:.1+w*.06,ease:a0}})})]},f.name))})]},T.category))})]})})},rv=m.div`
  position: relative;
  padding-left: 30px;
  ${k.tablet} { padding-left: 220px; }
`,sv=m.span`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: var(--line);
  ${k.tablet} { left: 188px; }
`,fv=m(G.span)`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: linear-gradient(var(--accent), var(--accent-hot));
  transform-origin: top;
  ${k.tablet} { left: 188px; }
`,dv=m(G.div)`
  position: relative;
  padding: 0 0 56px;
  &:last-child { padding-bottom: 0; }
`,hv=m.span`
  position: absolute;
  top: 7px;
  left: -30px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-elev);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 4px var(--bg), 0 0 14px rgba(var(--accent-rgb), 0.5);
  ${k.tablet} { left: -38px; }
`,pv=m.span`
  font-family: ${et.mono};
  font-size: 13px;
  color: var(--ink-3);
  letter-spacing: 0.02em;
  display: block;
  margin-bottom: 8px;

  ${k.tablet} {
    position: absolute;
    left: -220px;
    top: 4px;
    width: 168px;
    text-align: right;
    margin-bottom: 0;
  }
`,mv=m.h3`
  font-family: ${et.display};
  font-size: clamp(22px, 3vw, 28px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 4px;

  /* scaleX on a pseudo-element rather than background-size, matching the rule in
     About and MostProudOf. Same effect, composited instead of repainted. */
  a {
    position: relative;
    color: var(--ink);
    transition: color var(--dur-surface) var(--ease-out);

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      background: var(--accent);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--dur-surface) var(--ease-out);
    }
    &:hover { color: var(--accent-ink); }
    ${k.hover} {
      &:hover::after { transform: scaleX(1); }
    }
  }
`,gv=m.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--accent-ink);
  margin-bottom: 2px;
`,vv=m.p`
  font-size: 13.5px;
  color: var(--ink-3);
  font-style: italic;
  margin-bottom: 16px;
`,yv=m.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--ink-2);

  a { color: var(--accent-ink); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--line-2); }
  a:hover { text-decoration-color: var(--accent); }
`,bv=m.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  padding: 9px 16px;
  border-radius: var(--r-pill);
  border: 1px solid var(--line-2);
  background: var(--surface);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--ink-2);
  transition: border-color var(--dur-feedback) var(--ease-out), color var(--dur-feedback) var(--ease-out),
    transform var(--dur-press) var(--ease-out);

  &:hover { color: var(--ink); border-color: var(--accent); }
  &:active { transform: scale(0.96); }
  svg { width: 14px; height: 14px; transition: transform var(--dur-surface) var(--ease-out); }
  &[data-open='true'] svg { transform: rotate(180deg); }
`,xv=m.span`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  vertical-align: bottom;
`,Sv=m(G.span)`
  display: inline-block;
  white-space: nowrap;
`,zv=m(G.div)`
  display: grid;
  overflow: hidden;
`,Av=m.div`
  min-height: 0;
  overflow: hidden;
`,Tv=m.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
`,jv=m.li`
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
`,wv=({data:s})=>{const y=Ct(),T=H.useRef(null),[f,w]=H.useState(new Set),{scrollYProgress:E}=Nn({target:T,offset:["start 60%","end 60%"]}),C=Za(E,[0,1],[0,1]),O=Ka(C,o0),B=M=>w(N=>{const j=new Set(N);return j.has(M)?j.delete(M):j.add(M),j});return o.jsx(ja,{id:"professionalexperience",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(We,{title:"Experience",lead:"A decade across enterprise SaaS, from shipping features to owning platform architecture for global consulting clients."}),o.jsxs(rv,{ref:T,children:[o.jsx(sv,{}),!y&&o.jsx(fv,{style:{scaleY:O}}),s.timeline.map((M,N)=>{const j=f.has(N);return o.jsxs(dv,{initial:y?!1:{opacity:0,x:-24,filter:"blur(6px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:Ht.enter,ease:gt.out},children:[o.jsx(hv,{}),o.jsx(pv,{children:M.date}),o.jsx(mv,{children:o.jsx("a",{href:M.url,target:"_blank",rel:"noopener noreferrer",children:M.title})}),o.jsx(gv,{children:M.subTitle}),M.previously&&o.jsxs(vv,{children:["Previously: ",M.previously]}),o.jsx(yv,{dangerouslySetInnerHTML:{__html:M.descriptionSummary}}),M.achievements&&M.achievements.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs(bv,{"data-open":j,onClick:()=>B(N),"aria-expanded":j,children:[o.jsx("span",{children:"Show"}),o.jsx(xv,{children:o.jsx(Rl,{mode:"popLayout",initial:!1,children:o.jsx(Sv,{initial:{y:"100%",opacity:0},animate:{y:"0%",opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:Ht.surface,ease:gt.out},children:j?"Less":"More"},j?"less":"more")})}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M6 9l6 6 6-6"})})]}),o.jsx(Rl,{initial:!1,children:j&&o.jsx(zv,{initial:{gridTemplateRows:"0fr",opacity:0},animate:{gridTemplateRows:"1fr",opacity:1},exit:{gridTemplateRows:"0fr",opacity:0},transition:{gridTemplateRows:{duration:.45,ease:gt.out},opacity:{duration:Ht.surface,ease:gt.out}},children:o.jsx(Av,{children:o.jsx(Tv,{children:M.achievements.map((X,L)=>o.jsxs(jv,{children:[o.jsx("strong",{children:X.title}),": ",X.description]},L))})})})})]})]},N)})]})]})})};function Ev(s){const y=H.useCallback(w=>{const E=window.matchMedia(s);return E.addEventListener("change",w),()=>E.removeEventListener("change",w)},[s]),T=H.useCallback(()=>window.matchMedia(s).matches,[s]),f=H.useCallback(()=>!1,[]);return H.useSyncExternalStore(y,T,f)}const A0=m.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: var(--r-xl);
  border: 1px solid var(--line);
  background: var(--surface);
  padding: 38px 34px;
  overflow: hidden;
  transition: border-color var(--dur-surface) var(--ease-out), background var(--dur-surface) var(--ease-out);

  &:hover { border-color: var(--line-2); background: var(--surface-2); }

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent-hot));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--dur-hover) var(--ease-out);
  }
  ${k.hover} {
    &:hover::before { transform: scaleX(1); }
  }
`,Mv=m.h3`
  font-family: ${et.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.12;
  margin-bottom: 20px;
`,Dv=m.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;
`,Cv=m.li`
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
`,Ov=m.section`
  position: relative;
  --rail: max(var(--gutter), calc((100vw - var(--maxw-wide)) / 2));

  ${k.desktop} {
    --rail: calc((100vw - var(--maxw-wide) - var(--gutter) * 2) / 4 + var(--gutter));
  }
`,Uv=m.div`
  position: sticky;
  top: 0;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`,Bv=m.div`
  padding-inline: var(--rail);
  margin: 0 0 40px;
  width: 100%;
`,_v=m(G.div)`
  display: flex;
  gap: 26px;
  padding: 0 var(--rail) 8px;
  will-change: transform;

  ${A0} { width: min(440px, 82vw); }
`,Hv=m.div`
  margin: 30px var(--rail) 0;
  height: 2px;
  background: var(--line);
  border-radius: 2px;
  overflow: hidden;
`,Nv=m(G.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-hot));
  transform-origin: left;
`,Rv=m.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,qv=m.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);

  ${k.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,kv=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${k.mobile} { grid-template-columns: repeat(2, 1fr); }
`,T0=({title:s,content:y})=>o.jsxs(A0,{children:[o.jsx(Mv,{children:s}),o.jsx(Dv,{children:y.slice(0,4).map((T,f)=>o.jsx(Cv,{children:T},f))})]}),j0="The systems I would put my name on, with the numbers that came with them.",l0=o0,Gv=({data:s})=>{const y=H.useRef(null),T=H.useRef(null),[f,w]=H.useState(0),{scrollYProgress:E}=Nn({target:y,offset:["start start","end end"]}),C=Za(E,[0,1],[0,-f]),O=Za(E,[0,1],[0,1]),B=Ka(C,l0),M=Ka(O,l0);return H.useLayoutEffect(()=>{const N=()=>{const j=T.current;j&&w(Math.max(0,j.scrollWidth-window.innerWidth+48))};return N(),window.addEventListener("resize",N,{passive:!0}),()=>window.removeEventListener("resize",N)},[]),o.jsx(Ov,{id:"mostproudof",ref:y,style:{height:`calc(100dvh + ${f}px)`},children:o.jsxs(Uv,{children:[o.jsx(Bv,{children:o.jsx(We,{title:"Most Proud Of",lead:j0})}),o.jsx(_v,{ref:T,style:{x:B},children:s.content.map(N=>o.jsx(T0,{title:N.title,content:N.content},N.id))}),o.jsx("div",{style:{width:"100%"},children:o.jsx(Hv,{children:o.jsx(Nv,{style:{scaleX:M}})})})]})})},Yv=({data:s})=>o.jsx(Rv,{id:"mostproudof",children:o.jsxs(qv,{children:[o.jsx(We,{title:"Most Proud Of",lead:j0}),o.jsx(kv,{children:s.content.map((y,T)=>o.jsx(Ta,{dir:"up",delay:T%2*.06,children:o.jsx(T0,{title:y.title,content:y.content})},y.id))})]})}),Xv=({data:s})=>{const y=Ct();return Ev("(min-width: 1024px)")&&!y?o.jsx(Gv,{data:s}):o.jsx(Yv,{data:s})},Lv=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${k.mobile} { grid-template-columns: repeat(3, 1fr); gap: 20px; }
`,Qv=m(G.div)`
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
  transition: border-color var(--dur-surface) var(--ease-out), background var(--dur-surface) var(--ease-out);

  &:hover { border-color: var(--line-2); background: var(--surface-2); }
`,Vv=m.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${et.mono};
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--accent-ink);
  margin-bottom: 18px;

  span.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
`,Zv=m.h3`
  font-family: ${et.display};
  font-size: clamp(18px, 1.8vw, 21px);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: var(--ink);
  margin-bottom: auto;
`,Kv=m.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 26px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--ink-2);
  width: max-content;
  transition: transform var(--dur-press) var(--ease-out);

  svg { width: 15px; height: 15px; transition: transform var(--dur-surface) var(--ease-out); }
  &:hover { color: var(--accent-ink); }
  ${k.hover} {
    &:hover svg { transform: translate(2px, -2px); }
  }
  &:active { transform: scale(0.96); }
`,Jv=s=>{const y=s.toLowerCase();return y.includes("azure")||y.includes("microsoft")?"Microsoft":y.includes("aws")?"Amazon Web Services":"Credential"},$v=({data:s})=>{const y=Ct();return o.jsx(ja,{id:"certifications",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(We,{title:"Certifications",lead:"Cloud and data credentials across Azure and AWS, kept current."}),o.jsx(Lv,{children:s.certificateProps.certificateMetaData.map((T,f)=>o.jsx(z0,{max:9,children:o.jsxs(Qv,{initial:y?!1:{opacity:0,y:28,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.3},transition:{duration:Ht.enter,delay:f*.1,ease:gt.out},children:[o.jsxs(Vv,{children:[o.jsx("span",{className:"dot"}),Jv(T.title)]}),o.jsx(Zv,{children:T.title}),o.jsxs(Kv,{href:T.buttonProps.link,target:"_blank",rel:"noopener noreferrer",children:["Verify credential",o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),o.jsx("path",{d:"M15 3h6v6M10 14L21 3"})]})]})]})},f))})]})})},uu=gt.out,Wv=7e3,Fv=28,n0=8,Iv={duration:Ht.fill,ease:gt.out},i0=90,Pv=80,t1=m.div`
  max-width: 900px;
`,e1=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`,a1=m.span`
  font-family: ${et.mono};
  font-size: 12.5px;
  letter-spacing: 0.14em;
  color: var(--ink-3);

  em { font-style: normal; color: var(--accent-ink); }
`,l1=m.div`
  display: flex;
  gap: 10px;
`,u0=m(G.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--r-pill);
  border: 1px solid var(--line-2);
  background: var(--surface);
  color: var(--ink-2);
  transition: color var(--dur-hover) var(--ease-out), border-color var(--dur-hover) var(--ease-out), background var(--dur-hover) var(--ease-out);

  svg { width: 18px; height: 18px; }
  &:hover { color: var(--ink); border-color: var(--accent); background: var(--accent-soft); }
`,n1=m.div`
  position: relative;
`,i1=m(G.figure)`
  will-change: transform, opacity;
  cursor: grab;
  &:active { cursor: grabbing; }
`,u1=m.blockquote`
  position: relative;
  padding-left: clamp(22px, 3vw, 38px);
  font-family: ${et.display};
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
`,c1=m.figcaption`
  margin-top: clamp(30px, 4.5vh, 48px);
  padding-left: clamp(22px, 3vw, 38px);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,o1=m.span`
  font-weight: 600;
  font-size: 16px;
  color: var(--ink);
`,r1=m.span`
  font-size: 14px;
  color: var(--ink-3);

  em {
    font-style: normal;
    font-family: ${et.mono};
    font-size: 11.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-ink);
  }
`,s1=m.div`
  display: flex;
  gap: 10px;
  margin-top: clamp(34px, 5vh, 48px);
  padding-left: clamp(22px, 3vw, 38px);
`,f1=m(G.button)`
  height: ${n0}px;
  width: ${({$active:s})=>s?Fv:n0}px;
  flex-shrink: 0;
  background: ${({$active:s})=>s?"var(--accent)":"var(--line-2)"};
  transition: background var(--dur-feedback) var(--ease-out);

  ${k.hover} {
    &:hover { background: ${({$active:s})=>s?"var(--accent)":"var(--ink-3)"}; }
  }
`,d1=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M15 6l-6 6 6 6"})}),h1=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 6l6 6-6 6"})}),p1=({data:s})=>{const y=Ct(),T=s.quoteProps.quoteMetaData,f=T.length,[w,E]=H.useState({index:0,dir:0,from:0,velocity:0}),[C,O]=H.useState(!1),B=H.useCallback((L,q,F=0,Tt=0)=>{E({index:(L%f+f)%f,dir:q,from:F,velocity:Tt})},[f]),M=H.useCallback(L=>B(w.index+L,L),[B,w.index]);if(H.useEffect(()=>{if(y||f<=1||C)return;const L=setInterval(()=>E(q=>({index:(q.index+1)%f,dir:1,from:0,velocity:0})),Wv);return()=>clearInterval(L)},[y,f,C]),f===0)return null;const N=T[w.index],j=f>1,X={enter:({dir:L})=>({opacity:0,x:y?0:L*48,filter:"blur(8px)"}),center:{opacity:1,x:0,filter:"blur(0px)",transition:{x:y?{duration:0}:cu,opacity:{duration:.4,ease:uu},filter:{duration:.4,ease:uu}}},exit:({dir:L,from:q,velocity:F})=>({opacity:0,x:y?0:L>0?Math.min(q-64,-96):Math.max(q+64,96),filter:"blur(8px)",transition:{x:y?{duration:0}:{...Math.abs(F)>Pv?um:cu,velocity:F},opacity:{duration:.3,ease:uu},filter:{duration:.3,ease:uu}}})};return o.jsx(ja,{id:"testimonials",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(We,{title:"Testimonials",lead:"Words from people I have built alongside."}),o.jsxs(t1,{onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1),onFocusCapture:()=>O(!0),onBlurCapture:()=>O(!1),children:[j&&o.jsxs(e1,{children:[o.jsxs(a1,{children:[o.jsx("em",{children:String(w.index+1).padStart(2,"0")})," / ",String(f).padStart(2,"0")]}),o.jsxs(l1,{children:[o.jsx(u0,{onClick:()=>M(-1),"aria-label":"Previous testimonial",whileTap:{scale:.92},children:o.jsx(d1,{})}),o.jsx(u0,{onClick:()=>M(1),"aria-label":"Next testimonial",whileTap:{scale:.92},children:o.jsx(h1,{})})]})]}),o.jsx(n1,{"aria-live":"polite","aria-roledescription":"carousel",children:o.jsx(Rl,{mode:"popLayout",custom:w,initial:!1,children:o.jsxs(i1,{custom:w,variants:X,initial:"enter",animate:"center",exit:"exit",drag:j&&!y?"x":!1,dragConstraints:{left:0,right:0},dragElastic:1,dragMomentum:!1,dragTransition:{bounceStiffness:400,bounceDamping:40},onDragStart:()=>O(!0),onDragEnd:(L,q)=>{O(!1);const F=q.offset.x+cm(q.velocity.x);F<=-i0?B(w.index+1,1,q.offset.x,q.velocity.x):F>=i0&&B(w.index-1,-1,q.offset.x,q.velocity.x)},children:[o.jsxs(u1,{children:["“",N.quote,"”"]}),o.jsxs(c1,{children:[o.jsx(o1,{children:N.givenBy}),o.jsxs(r1,{children:[N.subTitleGivenBy,N.source&&o.jsxs(o.Fragment,{children:["  ·  ",o.jsxs("em",{children:["via ",N.source]})]})]})]})]},w.index)})}),j&&o.jsx(s1,{role:"tablist","aria-label":"Select testimonial",children:T.map((L,q)=>o.jsx(f1,{layout:!y,transition:Iv,style:{borderRadius:999},whileTap:{scaleY:1.6},$active:q===w.index,onClick:()=>B(q,q>w.index?1:-1),role:"tab","aria-selected":q===w.index,"aria-label":`Testimonial ${q+1}`},q))})]})]})})},m1="7253276225333293056",g1=`https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${m1}`,v1="https://www.linkedin.com/posts/mckinsey-india_mckinseycareer-journeypranshu-ugcPost-7253276225333293056-sdOl/",y1=m.div`
  position: relative;
  max-width: 560px;
  border-radius: var(--r-xl);
  border: 1px solid var(--line);
  background: var(--surface);
  overflow: hidden;
  transition: border-color var(--dur-surface) var(--ease-out), background var(--dur-surface) var(--ease-out);

  &:hover { border-color: var(--line-2); }
`,b1=m.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
`,x1=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--r-md);
  background: var(--accent-soft);
  color: var(--accent-ink);
  flex-shrink: 0;
  svg { width: 20px; height: 20px; }
`,S1=m.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,z1=m.span`
  font-family: ${et.mono};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
`,A1=m.span`
  font-family: ${et.display};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
`,T1=m.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent-ink);
  padding: 8px 14px;
  border-radius: var(--r-pill);
  border: 1px solid var(--line-2);
  background: var(--surface);
  transition: border-color var(--dur-feedback) var(--ease-out), background var(--dur-feedback) var(--ease-out),
    transform var(--dur-press) var(--ease-out);

  svg { width: 14px; height: 14px; transition: transform var(--dur-surface) var(--ease-out); }
  &:hover { border-color: var(--accent); background: var(--accent-soft); }
  ${k.hover} {
    &:hover svg { transform: translate(3px, -3px); }
  }
  &:active { transform: scale(0.96); }

  ${k.belowMobile} {
    span { display: none; }
    padding: 8px;
  }
`,j1=m.div`
  position: relative;
  height: 640px;
  background: #ffffff;

  ${k.belowMobile} { height: 600px; }
`,w1=m.iframe`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  opacity: ${({$loaded:s})=>s?1:0};
  transition: opacity var(--dur-frame) var(--ease-out);
`,E1=Pp`
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
`,M1=m(G.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 22px;
  background: #ffffff;
  pointer-events: none;

  &::before {
    content: '';
    height: 44px;
    border-radius: var(--r-md);
    background: #eef1f4;
  }
`,D1=m.div`
  position: relative;
  flex: 1;
  border-radius: var(--r-md);
  background: #eef1f4;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(100deg, transparent 30%, #f6f8fa 50%, transparent 70%);
    animation: ${({$reduce:s})=>s?"none":E1} 1.4s linear infinite;
  }
`,C1=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M7 17L17 7M9 7h8v8"})}),O1=()=>{const s=Ct(),y=H.useRef(null),[T,f]=H.useState(!1),[w,E]=H.useState(!1);return H.useEffect(()=>{const C=y.current;if(!C)return;const O=new IntersectionObserver(([B])=>{B.isIntersecting&&(f(!0),O.disconnect())},{rootMargin:"400px 0px"});return O.observe(C),()=>O.disconnect()},[]),o.jsx(ja,{id:"featured",children:o.jsxs(wa,{$max:"content",children:[o.jsx(We,{title:"Featured",lead:"McKinsey India on my journey building AI-driven, forward-thinking solutions for clients across industries."}),o.jsx(Ta,{dir:"up",children:o.jsxs(y1,{children:[o.jsxs(b1,{children:[o.jsx(x1,{children:o.jsx(v0,{})}),o.jsxs(S1,{children:[o.jsx(z1,{children:"Featured on LinkedIn"}),o.jsx(A1,{children:"McKinsey India"})]}),o.jsxs(T1,{href:v1,target:"_blank",rel:"noopener noreferrer","aria-label":"View the McKinsey India post on LinkedIn",children:[o.jsx("span",{children:"View post"}),o.jsx(C1,{})]})]}),o.jsxs(j1,{ref:y,children:[T&&o.jsx(w1,{src:g1,title:"McKinsey India feature on Pranshu Nijhawan's career journey",loading:"lazy",allowFullScreen:!0,$loaded:w,onLoad:()=>E(!0)}),o.jsx(Rl,{children:!w&&o.jsx(M1,{$reduce:!!s,"aria-hidden":!0,initial:!1,exit:{opacity:0},transition:{duration:Ht.surface,ease:gt.out},children:o.jsx(D1,{$reduce:!!s})},"skeleton")})]})]})})]})})},U1=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid var(--line);

  ${k.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 56px;
  }
`,B1=m(G.div)`
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 8px;
`,_1=m.span`
  font-family: ${et.mono};
  font-size: 13px;
  color: var(--accent-ink);
  letter-spacing: 0.02em;
`,H1=m.h3`
  font-family: ${et.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.15;
`,N1=m.p`
  font-size: 15px;
  color: var(--ink-2);
  line-height: 1.5;
`,R1=({data:s})=>{const y=Ct();return o.jsx(ja,{id:"educationalqualifications",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(We,{title:"Education"}),o.jsx(U1,{children:s.timeline.map((T,f)=>o.jsxs(B1,{initial:y?!1:{opacity:0,y:22,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.55,delay:f%2*.08,ease:gt.out},children:[o.jsx(_1,{children:T.date}),o.jsx(H1,{children:T.title}),o.jsx(N1,{children:T.subTitle})]},f))})]})})},q1=m.h2`
  font-family: ${et.display};
  font-weight: 600;
  font-size: clamp(40px, 7.5vw, 88px);
  letter-spacing: -0.035em;
  line-height: 0.96;
  color: var(--ink);
  margin-bottom: 26px;

  em { font-style: normal; color: var(--accent-ink); }
`,k1=m.p`
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.6;
  color: var(--ink-2);
  max-width: 50ch;
  margin-bottom: 64px;
`,G1=m.div`
  border-top: 1px solid var(--line);
`,Hn=m(G.a)`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 26px 4px;
  border-bottom: 1px solid var(--line);
  transition: background-color var(--dur-press) var(--ease-out);

  &:active { background-color: var(--surface-2); }
`,Y1=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--r-md);
  background: var(--accent-soft);
  color: var(--accent-ink);
  flex-shrink: 0;
  transition: transform var(--dur-control) var(--ease-out);
  svg { width: 22px; height: 22px; }

  ${k.hover} {
    ${Hn}:hover & { transform: translateX(12px); }
  }
`,X1=m.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
  flex: 1;
  transition: transform var(--dur-control) var(--ease-out);

  ${k.hover} {
    ${Hn}:hover & { transform: translateX(12px); }
  }
`,L1=m.span`
  font-family: ${et.mono};
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
`,Q1=m.span`
  font-family: ${et.display};
  font-size: clamp(18px, 2.4vw, 24px);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,V1=m.span`
  flex-shrink: 0;
  color: var(--ink-3);
  transition: transform var(--dur-surface) var(--ease-out), color var(--dur-surface) var(--ease-out);
  svg { width: 20px; height: 20px; }

  ${Hn}:hover & { color: var(--accent-ink); }
  ${k.hover} {
    ${Hn}:hover & { transform: translate(4px, -4px); }
  }
`,Z1={email:o.jsx(g0,{}),phone:o.jsx(Tm,{}),linkedin:o.jsx(v0,{}),location:o.jsx(jm,{})},K1=({data:s})=>{const y=Ct();return o.jsx(ja,{id:"contact",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(Ta,{dir:"up",children:o.jsxs(q1,{children:[o.jsx(Ro,{text:"Let's build something"}),o.jsx("br",{}),o.jsx("em",{children:o.jsx(Ro,{text:"that scales.",delay:.15})})]})}),o.jsx(Ta,{dir:"up",delay:.1,children:o.jsx(k1,{children:"Architecture, agentic AI, or platform performance. If it needs to work at scale, I want to hear about it."})}),o.jsx(G1,{children:s.contactMetaData.map((T,f)=>{const w=T.icon.toLowerCase(),E=T.href.startsWith("http");return o.jsxs(Hn,{href:T.href,target:E?"_blank":void 0,rel:E?"noopener noreferrer":void 0,initial:y?!1:{opacity:0,y:20,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:Ht.frame,delay:f*.07,ease:gt.out},children:[o.jsx(Y1,{children:Z1[w]??o.jsx(g0,{})}),o.jsxs(X1,{children:[o.jsx(L1,{children:w==="email"?"Email":T.icon}),o.jsx(Q1,{children:T.content})]}),o.jsx(V1,{children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M7 17L17 7M9 7h8v8"})})})]},f)})})]})})},J1={content:["🔹  I own the architecture of Promotion Advisor end to end, McKinsey Periscope's flagship multi-tenant SaaS: the planning application, the Analytics Engine, and the agentic layer. That includes the security model, the GitOps configuration framework, polyglot persistence, ETL, the reporting engine, and the external API surface.","My recent work is agentic architecture across an MCP mesh. I co-built Platform AI, Periscope's enterprise agent platform, then built Cortex so business logic stays compiled and deterministic rather than authored in prompts, and the Context-Scoped Catalog so tool discovery stays accurate however large the tool fleet grows.","Underneath that I build the data systems: billion-row sub-second analytics on ClickHouse, sub-2 second response on 2M+ records, and semantic vectorized lookup over JSONB. I also coached org-wide Cursor and AI-assisted engineering for a 37% capacity increase, and led the shift to Spec-Driven Development and an AI-led SDLC."],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},$1={certificateProps:{certificateMetaData:[{buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},W1={contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},F1={timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010"}]},I1={name:"Pranshu Nijhawan",designation:"Architecting Agentic AI. Engineering at Scale."},P1={content:[{id:1,title:"Platform AI: Periscope's Enterprise Agent Platform",content:["Co-built the agent platform that every product agent across Periscope now deploys through.","A GitOps Agent Definition Manager versions each agent as Git artifacts composed from skills, agent files, and scripts, not prompt text in a low-code editor.","A LangChain harness on Kubernetes runs one agent loop for all product agents, behind a Tenant MCP gateway that owns authentication, tool discovery, and quota.","Caller identity survives every hop, so an agent executes strictly inside the permissions of the prompting user."]},{id:2,title:"Cortex: Deterministic Business Logic for Agents",content:["Built a stateless engine that compiles configurable business rules into deterministic executable binaries.","Rules compose from three atomic operations (acquire, derive, assert) into playbooks, version-controlled through GitOps.","A purpose-built TypeScript compiler parses the typed YAML, so business rules stay unit-testable and reusable across agents.","Agent output is reproducible and auditable instead of dependent on what a prompt happened to say."]},{id:3,title:"Context-Scoped Catalog: Tool Selection at Fleet Scale",content:["Solved context pollution: an agent cannot reach a large tool estate if every tool is bound up front.","Designed the selection algorithm, which pins the tools an agent declares, shortlists the rest with a free BM25 lexical pass, then uses a cheap router model to separate near-duplicate actions.","Scoped the catalog per tenant and structured it hierarchically, which makes version gating exact and routing deterministic.","Context stays bounded and tool discovery stays accurate however large the fleet grows."]},{id:4,title:"Periscope Reporting Engine: Billion-Row Analytics on ClickHouse",content:["Built the reporting engine as a configurable runtime-query architecture, so users compose their own reports.","Aggregations resolve at request time against a governed ontology through a dynamic Query Builder, which removes the batch-prep step and the analytics-team dependency for each new measure.","Modeled the store on Projections and Dictionaries for billion-row sub-second interactive queries.","Separately designed the multi-dimensional promotion conflict detection algorithm, progressive candidate narrowing over sorted item arrays: sub-2 second response at 20 concurrent users across 2M promotions, 5,000x faster on large item groups."]},{id:5,title:"AI-Assisted Engineering and the Agent Library",content:["Drove org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit), which raised team capacity 37%.","Built 10+ production agents for architecture diagrams, ADR and APR authorship, and technical communications.","Built an SDD Agent that runs an 11-dimension anti-hallucination audit on every spec before it reaches implementation.","Built the Repo Mastery Agent, the code knowledge base coding agents ground against, which replaced a heavy Graph RAG documentation system with a Registry Pattern over vector binaries and explicit dependency relations."]}]},ty={timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 - Present",descriptionSummary:`At McKinsey I am the sole architecture owner of <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a>, a flagship multi-tenant SaaS in the <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> suite for CPG and retail clients. I co-built Platform AI, Periscope's enterprise agent platform, and designed the agentic layer that runs on it. I lead 65+ engineers across five development squads and a core support squad, and partner with senior consulting leaders on high-stakes RFPs and enterprise implementations.`,achievements:[{title:"Platform Architecture Ownership",description:"Own the architecture of Promotion Advisor end to end: the planning application (React, TypeScript, Node.js, GraphQL, C# / .NET microservices), the Analytics Engine (Databricks, PySpark, DBT, PostgreSQL), and the agentic layer. Accountable for the configuration framework (GitOps-based, zero-downtime configuration delivery), the security model, polyglot persistence (PostgreSQL, Redis, Databricks Delta tables, ClickHouse), ETL, the Periscope Reporting Engine, and the external API surface."},{title:"Platform AI: Enterprise Agent Platform",description:"Co-built Platform AI, Periscope's enterprise agent platform: a GitOps Agent Definition Manager that versions every agent as Git artifacts, not prompt text; a LangChain harness on Kubernetes running one agent loop for all product agents; and a Tenant MCP gateway owning authentication, tool discovery, and quota. Caller identity survives every hop."},{title:"Cortex: Deterministic Business-Logic Engine",description:"Built Cortex, a stateless engine that runs business logic written as configuration. Rules compose from three operations (acquire, derive, assert) into playbooks; a purpose-built TypeScript compiler parses the typed YAML into executable binaries. Business rules stay deterministic and unit-testable, so agent output is reproducible and auditable."},{title:"Context-Scoped Catalog: Tool Selection at Fleet Scale",description:"Solved context pollution: an agent cannot reach a large tool estate if every tool is bound up front. Designed the selection algorithm (pinned tools, a free BM25 shortlist, then a cheap router model for the near-duplicates) and scoped the catalog per tenant, which makes version gating exact and routing deterministic. Version-mismatch failures dropped to zero, and a new solution registers without per-tool wiring."},{title:"Periscope Reporting Engine on ClickHouse & Real-Time Conflict Detection",description:"Built the Periscope Reporting Engine on ClickHouse (Projections, Dictionaries, billion-row sub-second queries): users compose their own reports and every aggregation resolves at request time against a governed ontology through a dynamic Query Builder, which removes the batch-prep step and the analytics-team dependency for each new measure. Also designed the multi-dimensional promotion conflict detection algorithm, progressive candidate narrowing over sorted item arrays: sub-2s at 20 concurrent users across 2M promotions, 5,000x faster on large item groups."},{title:"AI-Assisted Engineering & Agent Tooling",description:"Drove org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit), which raised team capacity 37%. Built the agent library behind it: 10+ production agents for architecture diagrams, ADR and APR authorship, and technical communications, plus an SDD Agent that runs an 11-dimension anti-hallucination audit per spec. The Repo Mastery Agent replaced a heavy Graph RAG documentation system with a Registry Pattern over vector binaries and explicit dependency relations."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 - March 2022",descriptionSummary:'At Eptura I re-architected a single-tenant workspace SaaS, <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), to cloud-native microservices on AKS and built a global IoT release orchestrator that pushes firmware to 300M+ devices. Directed 20 engineers across four squads.',achievements:[{title:"Cloud-Native Re-Architecture",description:"Migrated legacy single-tenant SaaS to cloud-native microservices on Azure Kubernetes Service (AKS): 60% faster incident recovery, and single-tenant scaling bottlenecks eliminated."},{title:"Global IoT Release Orchestration",description:"Built a release orchestration system (Azure IoT Hub, Azure Functions, Azure CosmosDB) that delivers firmware updates to 300M+ IoT devices worldwide with zero-downtime rollouts."},{title:"Engineering Leadership",description:"Directed 20 engineers (4 tech leads) across four squads. Established a structured mentorship program: +20% retention and faster engineering progression."}]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 - April 2021",descriptionSummary:"At Nagarro I shipped full-stack web and mobile applications for e-commerce and HR enterprise clients on Angular, .NET Core, PostgreSQL, and Ionic. CI/CD and IaC practices cut deployment failures by 70% across client projects.",achievements:[{title:"Full-Stack Web + Mobile Delivery",description:"Delivered production web and mobile apps on Angular, .NET Core, PostgreSQL, and Ionic Framework for e-commerce and HR clients at 99.5%+ uptime."},{title:"CI/CD & Infrastructure as Code",description:"Established CI/CD pipelines and IaC practices: 70% reduction in deployment failures across client projects."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 - December 2019",descriptionSummary:'At Condeco I built C# / .NET / React / SQL Server microservices for the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> workspace SaaS that carried 3x customer growth without reliability regressions. Cut build times 40% and core query latency 3x through data model refactoring.',achievements:[{title:"Microservices for 3x Customer Scale",description:"Designed and shipped C# / .NET / React / SQL Server microservices that carried 3x customer growth without reliability regressions."},{title:"CI/CD & Data Model Optimization",description:"Cut build times 40% and refactored core data models to reduce average query latency 3x."}]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",previously:"Intern",date:"February 2016 - August 2018",descriptionSummary:"At Gartner I built backend features on C# / .NET Core / React for an HR analytics SaaS, which improved survey data accuracy 60% for consulting clients. Automated SQL workflows saved 240+ engineering hours annually.",achievements:[{title:"SaaS Analytics Backend",description:"Built backend features on C# / .NET Core / React for the HR analytics platform, which improved employee survey data accuracy 60% for consulting clients."},{title:"SQL Workflow Automation",description:"Automated SQL workflows (stored procedures, SQL Agent jobs): saved 240+ engineering hours annually."}]}]},ey={skills:[{category:"AI & Agentic Engineering",skills:[{name:"Multi-Agent Orchestration",percentage:100},{name:"MCP (servers and clients)",percentage:100},{name:"Tool Discovery & Routing",percentage:100},{name:"Context Engineering",percentage:95},{name:"Cursor (Rules / Skills / Agents / Hooks / SDK)",percentage:100},{name:"Spec-Driven Development (OpenSpec, SpecKit)",percentage:100}]},{category:"Architecture",skills:[{name:"Multi-Tenant SaaS Architecture",percentage:100},{name:"Microservices & Distributed Systems",percentage:100},{name:"Configuration-Driven Architecture",percentage:100},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Polyglot Persistence",percentage:95},{name:"ADR / APR Authorship",percentage:95}]},{category:"Backend",skills:[{name:"TypeScript / Node.js / Fastify",percentage:100},{name:"C# / .NET Core",percentage:100},{name:"GraphQL & REST APIs",percentage:95},{name:"Python",percentage:90}]},{category:"Frontend",skills:[{name:"React",percentage:100},{name:"TypeScript",percentage:100},{name:"Angular",percentage:90},{name:"Micro-Frontends",percentage:90}]},{category:"Data & Storage",skills:[{name:"PostgreSQL",percentage:100},{name:"ClickHouse",percentage:95},{name:"SQL Server",percentage:95},{name:"Redis",percentage:90}]},{category:"Cloud & Infrastructure",skills:[{name:"Microsoft Azure",percentage:95},{name:"Kubernetes (AKS)",percentage:90},{name:"Terraform & GitOps",percentage:90},{name:"Amazon Web Services (AWS)",percentage:85}]},{category:"Data Engineering & Real-Time Analytics",skills:[{name:"ClickHouse Analytics (Projections, Dictionaries)",percentage:95},{name:"Real-Time Analytics & Query Engines",percentage:95},{name:"Databricks (PySpark)",percentage:90},{name:"DBT & Blue-Green ETL",percentage:90}]},{category:"Security & Compliance",skills:[{name:"Two-Layer FAC + DAC Architecture",percentage:100},{name:"Casbin RBAC / ABAC",percentage:95},{name:"SOC2 / Secure SDLC",percentage:90}]}]},ay={quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},ly={aboutSection:J1,certifications:$1,contactMe:W1,educationalQualifications:F1,homeSection:I1,mostProudOf:P1,professionalExperience:ty,technologyProficiency:ey,testimonials:ay},$e=ly;function ny(){const[s,y]=H.useState(!1);return o.jsxs(sm,{children:[o.jsx(om,{}),o.jsxs(fm,{children:[o.jsx(Sm,{}),o.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),o.jsx(Lm,{revealed:s}),o.jsxs("main",{id:"main-content",style:{position:"relative",zIndex:1},role:"main",children:[o.jsx(Ug,{data:$e.homeSection,start:s}),o.jsx(Wg,{data:$e.aboutSection}),o.jsx(ov,{data:$e.technologyProficiency}),o.jsx(wv,{data:$e.professionalExperience}),o.jsx(Xv,{data:$e.mostProudOf}),o.jsx($v,{data:$e.certifications}),o.jsx(p1,{data:$e.testimonials}),o.jsx(O1,{}),o.jsx(R1,{data:$e.educationalQualifications}),o.jsx(K1,{data:$e.contactMe})]}),o.jsx($m,{}),o.jsx(Rl,{children:!s&&o.jsx(lg,{onComplete:()=>y(!0)},"intro")})]})]})}"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);nm.createRoot(document.getElementById("root")).render(o.jsx(H.StrictMode,{children:o.jsx(ny,{})}));
