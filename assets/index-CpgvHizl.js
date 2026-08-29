import{r as H,j as o,u as Mt,m as R,a as Ke,b as ou,L as nm,A as Nl,c as Nn,d as Ka,e as Ja,f as m0}from"./vendor-motion-C8MGYtJI.js";import{r as im,a as um}from"./vendor-react-DlBnNAMw.js";import{f as cm,d as p,m as om}from"./vendor-styled-CTMXd9gs.js";var Co={exports:{}},Cn={},Uo={exports:{}},_o={};var Jd;function rm(){return Jd||(Jd=1,(function(s){function y(z,D){var X=z.length;z.push(D);t:for(;0<X;){var ht=X-1>>>1,pt=z[ht];if(0<w(pt,D))z[ht]=D,z[X]=pt,X=ht;else break t}}function T(z){return z.length===0?null:z[0]}function f(z){if(z.length===0)return null;var D=z[0],X=z.pop();if(X!==D){z[0]=X;t:for(var ht=0,pt=z.length,kt=pt>>>1;ht<kt;){var yt=2*(ht+1)-1,it=z[yt],Dt=yt+1,xe=z[Dt];if(0>w(it,X))Dt<pt&&0>w(xe,it)?(z[ht]=xe,z[Dt]=X,ht=Dt):(z[ht]=it,z[yt]=X,ht=yt);else if(Dt<pt&&0>w(xe,X))z[ht]=xe,z[Dt]=X,ht=Dt;else break t}}return D}function w(z,D){var X=z.sortIndex-D.sortIndex;return X!==0?X:z.id-D.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;s.unstable_now=function(){return E.now()}}else{var O=Date,C=O.now();s.unstable_now=function(){return O.now()-C}}var _=[],M=[],N=1,j=null,L=3,Q=!1,Y=!1,P=!1,K=!1,J=typeof setTimeout=="function"?setTimeout:null,we=typeof clearTimeout=="function"?clearTimeout:null,Gt=typeof setImmediate<"u"?setImmediate:null;function $e(z){for(var D=T(M);D!==null;){if(D.callback===null)f(M);else if(D.startTime<=z)f(M),D.sortIndex=D.expirationTime,y(_,D);else break;D=T(M)}}function ja(z){if(P=!1,$e(z),!Y)if(T(_)!==null)Y=!0,be||(be=!0,ne());else{var D=T(M);D!==null&&Ee(ja,D.startTime-z)}}var be=!1,je=-1,me=5,$a=-1;function Rn(){return K?!0:!(s.unstable_now()-$a<me)}function Wa(){if(K=!1,be){var z=s.unstable_now();$a=z;var D=!0;try{t:{Y=!1,P&&(P=!1,we(je),je=-1),Q=!0;var X=L;try{e:{for($e(z),j=T(_);j!==null&&!(j.expirationTime>z&&Rn());){var ht=j.callback;if(typeof ht=="function"){j.callback=null,L=j.priorityLevel;var pt=ht(j.expirationTime<=z);if(z=s.unstable_now(),typeof pt=="function"){j.callback=pt,$e(z),D=!0;break e}j===T(_)&&f(_),$e(z)}else f(_);j=T(_)}if(j!==null)D=!0;else{var kt=T(M);kt!==null&&Ee(ja,kt.startTime-z),D=!1}}break t}finally{j=null,L=X,Q=!1}D=void 0}}finally{D?ne():be=!1}}}var ne;if(typeof Gt=="function")ne=function(){Gt(Wa)};else if(typeof MessageChannel<"u"){var kn=new MessageChannel,Rl=kn.port2;kn.port1.onmessage=Wa,ne=function(){Rl.postMessage(null)}}else ne=function(){J(Wa,0)};function Ee(z,D){je=J(function(){z(s.unstable_now())},D)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return L},s.unstable_next=function(z){switch(L){case 1:case 2:case 3:var D=3;break;default:D=L}var X=L;L=D;try{return z()}finally{L=X}},s.unstable_requestPaint=function(){K=!0},s.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=L;L=z;try{return D()}finally{L=X}},s.unstable_scheduleCallback=function(z,D,X){var ht=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ht+X:ht):X=ht,z){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=X+pt,z={id:N++,callback:D,priorityLevel:z,startTime:X,expirationTime:pt,sortIndex:-1},X>ht?(z.sortIndex=X,y(M,z),T(_)===null&&z===T(M)&&(P?(we(je),je=-1):P=!0,Ee(ja,X-ht))):(z.sortIndex=pt,y(_,z),Y||Q||(Y=!0,be||(be=!0,ne()))),z},s.unstable_shouldYield=Rn,s.unstable_wrapCallback=function(z){var D=L;return function(){var X=L;L=D;try{return z.apply(this,arguments)}finally{L=X}}}})(_o)),_o}var $d;function sm(){return $d||($d=1,Uo.exports=rm()),Uo.exports}var Wd;function fm(){if(Wd)return Cn;Wd=1;var s=sm(),y=im(),T=um();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function E(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function O(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function C(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(E(t)!==t)throw Error(f(188))}function M(t){var e=t.alternate;if(!e){if(e=E(t),e===null)throw Error(f(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return _(n),t;if(i===l)return _(n),e;i=i.sibling}throw Error(f(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,c=n.child;c;){if(c===a){u=!0,a=n,l=i;break}if(c===l){u=!0,l=n,a=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===a){u=!0,a=i,l=n;break}if(c===l){u=!0,l=i,a=n;break}c=c.sibling}if(!u)throw Error(f(189))}}if(a.alternate!==l)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?t:e}function N(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=N(t),e!==null)return e;t=t.sibling}return null}var j=Object.assign,L=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),we=Symbol.for("react.consumer"),Gt=Symbol.for("react.context"),$e=Symbol.for("react.forward_ref"),ja=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),$a=Symbol.for("react.activity"),Rn=Symbol.for("react.memo_cache_sentinel"),Wa=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=Wa&&t[Wa]||t["@@iterator"],typeof t=="function"?t:null)}var kn=Symbol.for("react.client.reference");function Rl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===kn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case J:return"Profiler";case K:return"StrictMode";case ja:return"Suspense";case be:return"SuspenseList";case $a:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Y:return"Portal";case Gt:return t.displayName||"Context";case we:return(t._context.displayName||"Context")+".Consumer";case $e:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case je:return e=t.displayName||null,e!==null?e:Rl(t.type)||"Memo";case me:e=t._payload,t=t._init;try{return Rl(t(e))}catch{}}return null}var Ee=Array.isArray,z=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ht=[],pt=-1;function kt(t){return{current:t}}function yt(t){0>pt||(t.current=ht[pt],ht[pt]=null,pt--)}function it(t,e){pt++,ht[pt]=t.current,t.current=e}var Dt=kt(null),xe=kt(null),We=kt(null),qn=kt(null);function Gn(t,e){switch(it(We,e),it(xe,t),it(Dt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?vd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=vd(e),t=yd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(Dt),it(Dt,t)}function Fa(){yt(Dt),yt(xe),yt(We)}function fu(t){t.memoizedState!==null&&it(qn,t);var e=Dt.current,a=yd(e,t.type);e!==a&&(it(xe,t),it(Dt,a))}function Yn(t){xe.current===t&&(yt(Dt),yt(xe)),qn.current===t&&(yt(qn),En._currentValue=X)}var du,Zo;function Ea(t){if(du===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||"",Zo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+du+t+Zo}var hu=!1;function pu(t,e){if(!t||hu)return"";hu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(b){var v=b}Reflect.construct(t,[],A)}else{try{A.call()}catch(b){v=b}t.call(A.prototype)}}else{try{throw Error()}catch(b){v=b}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(b){if(b&&v&&typeof b.stack=="string")return[b.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var r=u.split(`
`),g=c.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===g.length)for(l=r.length-1,n=g.length-1;1<=l&&0<=n&&r[l]!==g[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==g[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==g[n]){var x=`
`+r[l].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=l&&0<=n);break}}}finally{hu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ea(a):""}function H0(t,e){switch(t.tag){case 26:case 27:case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return t.child!==e&&e!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return pu(t.type,!1);case 11:return pu(t.type.render,!1);case 1:return pu(t.type,!0);case 31:return Ea("Activity");default:return""}}function Ko(t){try{var e="",a=null;do e+=H0(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var mu=Object.prototype.hasOwnProperty,gu=s.unstable_scheduleCallback,vu=s.unstable_cancelCallback,N0=s.unstable_shouldYield,R0=s.unstable_requestPaint,Jt=s.unstable_now,k0=s.unstable_getCurrentPriorityLevel,Jo=s.unstable_ImmediatePriority,$o=s.unstable_UserBlockingPriority,Ln=s.unstable_NormalPriority,q0=s.unstable_LowPriority,Wo=s.unstable_IdlePriority,G0=s.log,Y0=s.unstable_setDisableYieldValue,kl=null,$t=null;function Fe(t){if(typeof G0=="function"&&Y0(t),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(kl,t)}catch{}}var Wt=Math.clz32?Math.clz32:Q0,L0=Math.log,X0=Math.LN2;function Q0(t){return t>>>=0,t===0?32:31-(L0(t)/X0|0)|0}var Xn=256,Qn=262144,Vn=4194304;function Ma(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zn(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=Ma(l):(u&=c,u!==0?n=Ma(u):a||(a=c&~t,a!==0&&(n=Ma(a))))):(c=l&~i,c!==0?n=Ma(c):u!==0?n=Ma(u):a||(a=l&~t,a!==0&&(n=Ma(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function ql(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function V0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fo(){var t=Vn;return Vn<<=1,(Vn&62914560)===0&&(Vn=4194304),t}function yu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Gl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Z0(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var c=t.entanglements,r=t.expirationTimes,g=t.hiddenUpdates;for(a=u&~a;0<a;){var x=31-Wt(a),A=1<<x;c[x]=0,r[x]=-1;var v=g[x];if(v!==null)for(g[x]=null,x=0;x<v.length;x++){var b=v[x];b!==null&&(b.lane&=-536870913)}a&=~A}l!==0&&Io(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Io(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-Wt(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Po(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-Wt(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function tr(t,e){var a=e&-e;return a=(a&42)!==0?1:bu(a),(a&(t.suspendedLanes|e))!==0?0:a}function bu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function xu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function er(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:Yd(t.type))}function ar(t,e){var a=D.p;try{return D.p=t,e()}finally{D.p=a}}var Ie=Math.random().toString(36).slice(2),_t="__reactFiber$"+Ie,Yt="__reactProps$"+Ie,Ia="__reactContainer$"+Ie,Su="__reactEvents$"+Ie,K0="__reactListeners$"+Ie,J0="__reactHandles$"+Ie,lr="__reactResources$"+Ie,Yl="__reactMarker$"+Ie;function zu(t){delete t[_t],delete t[Yt],delete t[Su],delete t[K0],delete t[J0]}function Pa(t){var e=t[_t];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ia]||a[_t]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=wd(t);t!==null;){if(a=t[_t])return a;t=wd(t)}return e}t=a,a=t.parentNode}return null}function tl(t){if(t=t[_t]||t[Ia]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ll(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function el(t){var e=t[lr];return e||(e=t[lr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ot(t){t[Yl]=!0}var nr=new Set,ir={};function Da(t,e){al(t,e),al(t+"Capture",e)}function al(t,e){for(ir[t]=e,t=0;t<e.length;t++)nr.add(e[t])}var $0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ur={},cr={};function W0(t){return mu.call(cr,t)?!0:mu.call(ur,t)?!1:$0.test(t)?cr[t]=!0:(ur[t]=!0,!1)}function Kn(t,e,a){if(W0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Jn(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Me(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function ie(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function or(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function F0(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Au(t){if(!t._valueTracker){var e=or(t)?"checked":"value";t._valueTracker=F0(t,e,""+t[e])}}function rr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=or(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function $n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var I0=/[\n"\\]/g;function ue(t){return t.replace(I0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Tu(t,e,a,l,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ie(e)):t.value!==""+ie(e)&&(t.value=""+ie(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?wu(t,u,ie(e)):a!=null?wu(t,u,ie(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ie(c):t.removeAttribute("name")}function sr(t,e,a,l,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Au(t);return}a=a!=null?""+ie(a):"",e=e!=null?""+ie(e):a,c||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Au(t)}function wu(t,e,a){e==="number"&&$n(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ll(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ie(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function fr(t,e,a){if(e!=null&&(e=""+ie(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ie(a):""}function dr(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(f(92));if(Ee(l)){if(1<l.length)throw Error(f(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=ie(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Au(t)}function nl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var P0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hr(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||P0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function pr(t,e,a){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&hr(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&hr(t,i,e[i])}function ju(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wn(t){return eh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function De(){}var Eu=null;function Mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var il=null,ul=null;function mr(t){var e=tl(t);if(e&&(t=e.stateNode)){var a=t[Yt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Tu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ue(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Yt]||null;if(!n)throw Error(f(90));Tu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&rr(l)}break t;case"textarea":fr(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&ll(t,!!a.multiple,e,!1)}}}var Du=!1;function gr(t,e,a){if(Du)return t(e,a);Du=!0;try{var l=t(e);return l}finally{if(Du=!1,(il!==null||ul!==null)&&(Ri(),il&&(e=il,t=ul,ul=il=null,mr(e),t)))for(e=0;e<t.length;e++)mr(t[e])}}function Xl(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Yt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(f(231,e,typeof a));return a}var Oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if(Oe)try{var Ql={};Object.defineProperty(Ql,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",Ql,Ql),window.removeEventListener("test",Ql,Ql)}catch{Ou=!1}var Pe=null,Cu=null,Fn=null;function vr(){if(Fn)return Fn;var t,e=Cu,a=e.length,l,n="value"in Pe?Pe.value:Pe.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return Fn=n.slice(t,1<l?1-l:void 0)}function In(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pn(){return!0}function yr(){return!1}function Lt(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(a=t[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pn:yr,this.isPropagationStopped=yr,this}return j(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),e}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=Lt(Oa),Vl=j({},Oa,{view:0,detail:0}),ah=Lt(Vl),Uu,_u,Zl,ei=j({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zl&&(Zl&&t.type==="mousemove"?(Uu=t.screenX-Zl.screenX,_u=t.screenY-Zl.screenY):_u=Uu=0,Zl=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:_u}}),br=Lt(ei),lh=j({},ei,{dataTransfer:0}),nh=Lt(lh),ih=j({},Vl,{relatedTarget:0}),Bu=Lt(ih),uh=j({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),ch=Lt(uh),oh=j({},Oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rh=Lt(oh),sh=j({},Oa,{data:0}),xr=Lt(sh),fh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ph(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hh[t])?!!e[t]:!1}function Hu(){return ph}var mh=j({},Vl,{key:function(t){if(t.key){var e=fh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=In(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(t){return t.type==="keypress"?In(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?In(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gh=Lt(mh),vh=j({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sr=Lt(vh),yh=j({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),bh=Lt(yh),xh=j({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sh=Lt(xh),zh=j({},ei,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ah=Lt(zh),Th=j({},Oa,{newState:0,oldState:0}),wh=Lt(Th),jh=[9,13,27,32],Nu=Oe&&"CompositionEvent"in window,Kl=null;Oe&&"documentMode"in document&&(Kl=document.documentMode);var Eh=Oe&&"TextEvent"in window&&!Kl,zr=Oe&&(!Nu||Kl&&8<Kl&&11>=Kl),Ar=" ",Tr=!1;function wr(t,e){switch(t){case"keyup":return jh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cl=!1;function Mh(t,e){switch(t){case"compositionend":return jr(e);case"keypress":return e.which!==32?null:(Tr=!0,Ar);case"textInput":return t=e.data,t===Ar&&Tr?null:t;default:return null}}function Dh(t,e){if(cl)return t==="compositionend"||!Nu&&wr(t,e)?(t=vr(),Fn=Cu=Pe=null,cl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zr&&e.locale!=="ko"?null:e.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Er(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Oh[t.type]:e==="textarea"}function Mr(t,e,a,l){il?ul?ul.push(l):ul=[l]:il=l,e=Qi(e,"onChange"),0<e.length&&(a=new ti("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Jl=null,$l=null;function Ch(t){fd(t,0)}function ai(t){var e=Ll(t);if(rr(e))return t}function Dr(t,e){if(t==="change")return e}var Or=!1;if(Oe){var Ru;if(Oe){var ku="oninput"in document;if(!ku){var Cr=document.createElement("div");Cr.setAttribute("oninput","return;"),ku=typeof Cr.oninput=="function"}Ru=ku}else Ru=!1;Or=Ru&&(!document.documentMode||9<document.documentMode)}function Ur(){Jl&&(Jl.detachEvent("onpropertychange",_r),$l=Jl=null)}function _r(t){if(t.propertyName==="value"&&ai($l)){var e=[];Mr(e,$l,t,Mu(t)),gr(Ch,e)}}function Uh(t,e,a){t==="focusin"?(Ur(),Jl=e,$l=a,Jl.attachEvent("onpropertychange",_r)):t==="focusout"&&Ur()}function _h(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ai($l)}function Bh(t,e){if(t==="click")return ai(e)}function Hh(t,e){if(t==="input"||t==="change")return ai(e)}function Nh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:Nh;function Wl(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!mu.call(e,n)||!Ft(t[n],e[n]))return!1}return!0}function Br(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hr(t,e){var a=Br(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Br(a)}}function Nr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Nr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=$n(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=$n(t.document)}return e}function qu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Rh=Oe&&"documentMode"in document&&11>=document.documentMode,ol=null,Gu=null,Fl=null,Yu=!1;function kr(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yu||ol==null||ol!==$n(l)||(l=ol,"selectionStart"in l&&qu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Fl&&Wl(Fl,l)||(Fl=l,l=Qi(Gu,"onSelect"),0<l.length&&(e=new ti("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=ol)))}function Ca(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var rl={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Lu={},qr={};Oe&&(qr=document.createElement("div").style,"AnimationEvent"in window||(delete rl.animationend.animation,delete rl.animationiteration.animation,delete rl.animationstart.animation),"TransitionEvent"in window||delete rl.transitionend.transition);function Ua(t){if(Lu[t])return Lu[t];if(!rl[t])return t;var e=rl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in qr)return Lu[t]=e[a];return t}var Gr=Ua("animationend"),Yr=Ua("animationiteration"),Lr=Ua("animationstart"),kh=Ua("transitionrun"),qh=Ua("transitionstart"),Gh=Ua("transitioncancel"),Xr=Ua("transitionend"),Qr=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function ge(t,e){Qr.set(t,e),Da(e,[t])}var li=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ce=[],sl=0,Qu=0;function ni(){for(var t=sl,e=Qu=sl=0;e<t;){var a=ce[e];ce[e++]=null;var l=ce[e];ce[e++]=null;var n=ce[e];ce[e++]=null;var i=ce[e];if(ce[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Vr(a,n,i)}}function ii(t,e,a,l){ce[sl++]=t,ce[sl++]=e,ce[sl++]=a,ce[sl++]=l,Qu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Vu(t,e,a,l){return ii(t,e,a,l),ui(t)}function _a(t,e){return ii(t,null,null,e),ui(t)}function Vr(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Wt(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function ui(t){if(50<xn)throw xn=0,to=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var fl={};function Yh(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,e,a,l){return new Yh(t,e,a,l)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ce(t,e){var a=t.alternate;return a===null?(a=It(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Zr(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ci(t,e,a,l,n,i){var u=0;if(l=t,typeof t=="function")Zu(t)&&(u=1);else if(typeof t=="string")u=Zp(t,a,Dt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case $a:return t=It(31,a,e,n),t.elementType=$a,t.lanes=i,t;case P:return Ba(a.children,n,i,e);case K:u=8,n|=24;break;case J:return t=It(12,a,e,n|2),t.elementType=J,t.lanes=i,t;case ja:return t=It(13,a,e,n),t.elementType=ja,t.lanes=i,t;case be:return t=It(19,a,e,n),t.elementType=be,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gt:u=10;break t;case we:u=9;break t;case $e:u=11;break t;case je:u=14;break t;case me:u=16,l=null;break t}u=29,a=Error(f(130,t===null?"null":typeof t,"")),l=null}return e=It(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function Ba(t,e,a,l){return t=It(7,t,l,e),t.lanes=a,t}function Ku(t,e,a){return t=It(6,t,null,e),t.lanes=a,t}function Kr(t){var e=It(18,null,null,0);return e.stateNode=t,e}function Ju(t,e,a){return e=It(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Jr=new WeakMap;function oe(t,e){if(typeof t=="object"&&t!==null){var a=Jr.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Ko(e)},Jr.set(t,e),e)}return{value:t,source:e,stack:Ko(e)}}var dl=[],hl=0,oi=null,Il=0,re=[],se=0,ta=null,Se=1,ze="";function Ue(t,e){dl[hl++]=Il,dl[hl++]=oi,oi=t,Il=e}function $r(t,e,a){re[se++]=Se,re[se++]=ze,re[se++]=ta,ta=t;var l=Se;t=ze;var n=32-Wt(l)-1;l&=~(1<<n),a+=1;var i=32-Wt(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Se=1<<32-Wt(e)+n|a<<n|l,ze=i+t}else Se=1<<i|a<<n|l,ze=t}function $u(t){t.return!==null&&(Ue(t,1),$r(t,1,0))}function Wu(t){for(;t===oi;)oi=dl[--hl],dl[hl]=null,Il=dl[--hl],dl[hl]=null;for(;t===ta;)ta=re[--se],re[se]=null,ze=re[--se],re[se]=null,Se=re[--se],re[se]=null}function Wr(t,e){re[se++]=Se,re[se++]=ze,re[se++]=ta,Se=e.id,ze=e.overflow,ta=t}var Bt=null,mt=null,tt=!1,ea=null,fe=!1,Fu=Error(f(519));function aa(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(oe(e,t)),Fu}function Fr(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[_t]=t,e[Yt]=l,a){case"dialog":W("cancel",e),W("close",e);break;case"iframe":case"object":case"embed":W("load",e);break;case"video":case"audio":for(a=0;a<zn.length;a++)W(zn[a],e);break;case"source":W("error",e);break;case"img":case"image":case"link":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"input":W("invalid",e),sr(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":W("invalid",e);break;case"textarea":W("invalid",e),dr(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||md(e.textContent,a)?(l.popover!=null&&(W("beforetoggle",e),W("toggle",e)),l.onScroll!=null&&W("scroll",e),l.onScrollEnd!=null&&W("scrollend",e),l.onClick!=null&&(e.onclick=De),e=!0):e=!1,e||aa(t,!0)}function Ir(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:fe=!1;return;case 27:case 3:fe=!0;return;default:Bt=Bt.return}}function pl(t){if(t!==Bt)return!1;if(!tt)return Ir(t),tt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||go(t.type,t.memoizedProps)),a=!a),a&&mt&&aa(t),Ir(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));mt=Td(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));mt=Td(t)}else e===27?(e=mt,ga(t.type)?(t=So,So=null,mt=t):mt=e):mt=Bt?he(t.stateNode.nextSibling):null;return!0}function Ha(){mt=Bt=null,tt=!1}function Iu(){var t=ea;return t!==null&&(Zt===null?Zt=t:Zt.push.apply(Zt,t),ea=null),t}function Pl(t){ea===null?ea=[t]:ea.push(t)}var Pu=kt(null),Na=null,_e=null;function la(t,e,a){it(Pu,e._currentValue),e._currentValue=a}function Be(t){t._currentValue=Pu.current,yt(Pu)}function tc(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function ec(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var r=0;r<e.length;r++)if(c.context===e[r]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),tc(i.return,a,t),l||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(f(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),tc(u,a,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ml(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(f(387));if(u=u.memoizedProps,u!==null){var c=n.type;Ft(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===qn.current){if(u=n.alternate,u===null)throw Error(f(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(En):t=[En])}n=n.return}t!==null&&ec(e,t,a,l),e.flags|=262144}function ri(t){for(t=t.firstContext;t!==null;){if(!Ft(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ra(t){Na=t,_e=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return Pr(Na,t)}function si(t,e){return Na===null&&Ra(t),Pr(t,e)}function Pr(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},_e===null){if(t===null)throw Error(f(308));_e=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else _e=_e.next=e;return a}var Lh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Xh=s.unstable_scheduleCallback,Qh=s.unstable_NormalPriority,At={$$typeof:Gt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ac(){return{controller:new Lh,data:new Map,refCount:0}}function tn(t){t.refCount--,t.refCount===0&&Xh(Qh,function(){t.controller.abort()})}var en=null,lc=0,gl=0,vl=null;function Vh(t,e){if(en===null){var a=en=[];lc=0,gl=uo(),vl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return lc++,e.then(ts,ts),e}function ts(){if(--lc===0&&en!==null){vl!==null&&(vl.status="fulfilled");var t=en;en=null,gl=0,vl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Zh(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var es=z.S;z.S=function(t,e){qf=Jt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Vh(t,e),es!==null&&es(t,e)};var ka=kt(null);function nc(){var t=ka.current;return t!==null?t:dt.pooledCache}function fi(t,e){e===null?it(ka,ka.current):it(ka,e.pool)}function as(){var t=nc();return t===null?null:{parent:At._currentValue,pool:t}}var yl=Error(f(460)),ic=Error(f(474)),di=Error(f(542)),hi={then:function(){}};function ls(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ns(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(De,De),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,us(t),t;default:if(typeof e.status=="string")e.then(De,De);else{if(t=dt,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,us(t),t}throw Ga=e,yl}}function qa(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ga=a,yl):a}}var Ga=null;function is(){if(Ga===null)throw Error(f(459));var t=Ga;return Ga=null,t}function us(t){if(t===yl||t===di)throw Error(f(483))}var bl=null,an=0;function pi(t){var e=an;return an+=1,bl===null&&(bl=[]),ns(bl,t,e)}function ln(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function mi(t,e){throw e.$$typeof===L?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function cs(t){function e(h,d){if(t){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function a(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function l(h){for(var d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function n(h,d){return h=Ce(h,d),h.index=0,h.sibling=null,h}function i(h,d,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=67108866,d):m):(h.flags|=67108866,d)):(h.flags|=1048576,d)}function u(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function c(h,d,m,S){return d===null||d.tag!==6?(d=Ku(m,h.mode,S),d.return=h,d):(d=n(d,m),d.return=h,d)}function r(h,d,m,S){var k=m.type;return k===P?x(h,d,m.props.children,S,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===me&&qa(k)===d.type)?(d=n(d,m.props),ln(d,m),d.return=h,d):(d=ci(m.type,m.key,m.props,null,h.mode,S),ln(d,m),d.return=h,d)}function g(h,d,m,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Ju(m,h.mode,S),d.return=h,d):(d=n(d,m.children||[]),d.return=h,d)}function x(h,d,m,S,k){return d===null||d.tag!==7?(d=Ba(m,h.mode,S,k),d.return=h,d):(d=n(d,m),d.return=h,d)}function A(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Ku(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Q:return m=ci(d.type,d.key,d.props,null,h.mode,m),ln(m,d),m.return=h,m;case Y:return d=Ju(d,h.mode,m),d.return=h,d;case me:return d=qa(d),A(h,d,m)}if(Ee(d)||ne(d))return d=Ba(d,h.mode,m,null),d.return=h,d;if(typeof d.then=="function")return A(h,pi(d),m);if(d.$$typeof===Gt)return A(h,si(h,d),m);mi(h,d)}return null}function v(h,d,m,S){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return k!==null?null:c(h,d,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Q:return m.key===k?r(h,d,m,S):null;case Y:return m.key===k?g(h,d,m,S):null;case me:return m=qa(m),v(h,d,m,S)}if(Ee(m)||ne(m))return k!==null?null:x(h,d,m,S,null);if(typeof m.then=="function")return v(h,d,pi(m),S);if(m.$$typeof===Gt)return v(h,d,si(h,m),S);mi(h,m)}return null}function b(h,d,m,S,k){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return h=h.get(m)||null,c(d,h,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:return h=h.get(S.key===null?m:S.key)||null,r(d,h,S,k);case Y:return h=h.get(S.key===null?m:S.key)||null,g(d,h,S,k);case me:return S=qa(S),b(h,d,m,S,k)}if(Ee(S)||ne(S))return h=h.get(m)||null,x(d,h,S,k,null);if(typeof S.then=="function")return b(h,d,m,pi(S),k);if(S.$$typeof===Gt)return b(h,d,m,si(d,S),k);mi(d,S)}return null}function U(h,d,m,S){for(var k=null,et=null,B=d,Z=d=0,I=null;B!==null&&Z<m.length;Z++){B.index>Z?(I=B,B=null):I=B.sibling;var at=v(h,B,m[Z],S);if(at===null){B===null&&(B=I);break}t&&B&&at.alternate===null&&e(h,B),d=i(at,d,Z),et===null?k=at:et.sibling=at,et=at,B=I}if(Z===m.length)return a(h,B),tt&&Ue(h,Z),k;if(B===null){for(;Z<m.length;Z++)B=A(h,m[Z],S),B!==null&&(d=i(B,d,Z),et===null?k=B:et.sibling=B,et=B);return tt&&Ue(h,Z),k}for(B=l(B);Z<m.length;Z++)I=b(B,h,Z,m[Z],S),I!==null&&(t&&I.alternate!==null&&B.delete(I.key===null?Z:I.key),d=i(I,d,Z),et===null?k=I:et.sibling=I,et=I);return t&&B.forEach(function(Sa){return e(h,Sa)}),tt&&Ue(h,Z),k}function G(h,d,m,S){if(m==null)throw Error(f(151));for(var k=null,et=null,B=d,Z=d=0,I=null,at=m.next();B!==null&&!at.done;Z++,at=m.next()){B.index>Z?(I=B,B=null):I=B.sibling;var Sa=v(h,B,at.value,S);if(Sa===null){B===null&&(B=I);break}t&&B&&Sa.alternate===null&&e(h,B),d=i(Sa,d,Z),et===null?k=Sa:et.sibling=Sa,et=Sa,B=I}if(at.done)return a(h,B),tt&&Ue(h,Z),k;if(B===null){for(;!at.done;Z++,at=m.next())at=A(h,at.value,S),at!==null&&(d=i(at,d,Z),et===null?k=at:et.sibling=at,et=at);return tt&&Ue(h,Z),k}for(B=l(B);!at.done;Z++,at=m.next())at=b(B,h,Z,at.value,S),at!==null&&(t&&at.alternate!==null&&B.delete(at.key===null?Z:at.key),d=i(at,d,Z),et===null?k=at:et.sibling=at,et=at);return t&&B.forEach(function(lm){return e(h,lm)}),tt&&Ue(h,Z),k}function ft(h,d,m,S){if(typeof m=="object"&&m!==null&&m.type===P&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Q:t:{for(var k=m.key;d!==null;){if(d.key===k){if(k=m.type,k===P){if(d.tag===7){a(h,d.sibling),S=n(d,m.props.children),S.return=h,h=S;break t}}else if(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===me&&qa(k)===d.type){a(h,d.sibling),S=n(d,m.props),ln(S,m),S.return=h,h=S;break t}a(h,d);break}else e(h,d);d=d.sibling}m.type===P?(S=Ba(m.props.children,h.mode,S,m.key),S.return=h,h=S):(S=ci(m.type,m.key,m.props,null,h.mode,S),ln(S,m),S.return=h,h=S)}return u(h);case Y:t:{for(k=m.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){a(h,d.sibling),S=n(d,m.children||[]),S.return=h,h=S;break t}else{a(h,d);break}else e(h,d);d=d.sibling}S=Ju(m,h.mode,S),S.return=h,h=S}return u(h);case me:return m=qa(m),ft(h,d,m,S)}if(Ee(m))return U(h,d,m,S);if(ne(m)){if(k=ne(m),typeof k!="function")throw Error(f(150));return m=k.call(m),G(h,d,m,S)}if(typeof m.then=="function")return ft(h,d,pi(m),S);if(m.$$typeof===Gt)return ft(h,d,si(h,m),S);mi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,d!==null&&d.tag===6?(a(h,d.sibling),S=n(d,m),S.return=h,h=S):(a(h,d),S=Ku(m,h.mode,S),S.return=h,h=S),u(h)):a(h,d)}return function(h,d,m,S){try{an=0;var k=ft(h,d,m,S);return bl=null,k}catch(B){if(B===yl||B===di)throw B;var et=It(29,B,null,h.mode);return et.lanes=S,et.return=h,et}finally{}}}var Ya=cs(!0),os=cs(!1),na=!1;function uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ua(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(nt&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=ui(t),Vr(t,null,a),e}return ii(t,l,e,a),ui(t)}function nn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Po(t,a)}}function oc(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var rc=!1;function un(){if(rc){var t=vl;if(t!==null)throw t}}function cn(t,e,a,l){rc=!1;var n=t.updateQueue;na=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var r=c,g=r.next;r.next=null,u===null?i=g:u.next=g,u=r;var x=t.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==u&&(c===null?x.firstBaseUpdate=g:c.next=g,x.lastBaseUpdate=r))}if(i!==null){var A=n.baseState;u=0,x=g=r=null,c=i;do{var v=c.lane&-536870913,b=v!==c.lane;if(b?(F&v)===v:(l&v)===v){v!==0&&v===gl&&(rc=!0),x!==null&&(x=x.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var U=t,G=c;v=e;var ft=a;switch(G.tag){case 1:if(U=G.payload,typeof U=="function"){A=U.call(ft,A,v);break t}A=U;break t;case 3:U.flags=U.flags&-65537|128;case 0:if(U=G.payload,v=typeof U=="function"?U.call(ft,A,v):U,v==null)break t;A=j({},A,v);break t;case 2:na=!0}}v=c.callback,v!==null&&(t.flags|=64,b&&(t.flags|=8192),b=n.callbacks,b===null?n.callbacks=[v]:b.push(v))}else b={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(g=x=b,r=A):x=x.next=b,u|=v;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;b=c,c=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);x===null&&(r=A),n.baseState=r,n.firstBaseUpdate=g,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),fa|=u,t.lanes=u,t.memoizedState=A}}function rs(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function ss(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)rs(a[t],e)}var xl=kt(null),gi=kt(0);function fs(t,e){t=Xe,it(gi,t),it(xl,e),Xe=t|e.baseLanes}function sc(){it(gi,Xe),it(xl,xl.current)}function fc(){Xe=gi.current,yt(xl),yt(gi)}var Pt=kt(null),de=null;function ca(t){var e=t.alternate;it(St,St.current&1),it(Pt,t),de===null&&(e===null||xl.current!==null||e.memoizedState!==null)&&(de=t)}function dc(t){it(St,St.current),it(Pt,t),de===null&&(de=t)}function ds(t){t.tag===22?(it(St,St.current),it(Pt,t),de===null&&(de=t)):oa()}function oa(){it(St,St.current),it(Pt,Pt.current)}function te(t){yt(Pt),de===t&&(de=null),yt(St)}var St=kt(0);function vi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||bo(a)||xo(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var He=0,V=null,rt=null,Tt=null,yi=!1,Sl=!1,La=!1,bi=0,on=0,zl=null,Kh=0;function bt(){throw Error(f(321))}function hc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ft(t[a],e[a]))return!1;return!0}function pc(t,e,a,l,n,i){return He=i,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?$s:Dc,La=!1,i=a(l,n),La=!1,Sl&&(i=ps(e,a,l,n)),hs(t),i}function hs(t){z.H=fn;var e=rt!==null&&rt.next!==null;if(He=0,Tt=rt=V=null,yi=!1,on=0,zl=null,e)throw Error(f(300));t===null||wt||(t=t.dependencies,t!==null&&ri(t)&&(wt=!0))}function ps(t,e,a,l){V=t;var n=0;do{if(Sl&&(zl=null),on=0,Sl=!1,25<=n)throw Error(f(301));if(n+=1,Tt=rt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Ws,i=e(a,l)}while(Sl);return i}function Jh(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?rn(e):e,t=t.useState()[0],(rt!==null?rt.memoizedState:null)!==t&&(V.flags|=1024),e}function mc(){var t=bi!==0;return bi=0,t}function gc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function vc(t){if(yi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}yi=!1}He=0,Tt=rt=V=null,Sl=!1,on=bi=0,zl=null}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?V.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function zt(){if(rt===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=Tt===null?V.memoizedState:Tt.next;if(e!==null)Tt=e,rt=t;else{if(t===null)throw V.alternate===null?Error(f(467)):Error(f(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Tt===null?V.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function xi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rn(t){var e=on;return on+=1,zl===null&&(zl=[]),t=ns(zl,t,e),e=V,(Tt===null?e.memoizedState:Tt.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?$s:Dc),t}function Si(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return rn(t);if(t.$$typeof===Gt)return Ht(t)}throw Error(f(438,String(t)))}function yc(t){var e=null,a=V.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=V.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=xi(),V.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=Rn;return e.index++,a}function Ne(t,e){return typeof e=="function"?e(t):e}function zi(t){var e=zt();return bc(e,rt,t)}function bc(t,e,a){var l=t.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,r=null,g=e,x=!1;do{var A=g.lane&-536870913;if(A!==g.lane?(F&A)===A:(He&A)===A){var v=g.revertLane;if(v===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),A===gl&&(x=!0);else if((He&v)===v){g=g.next,v===gl&&(x=!0);continue}else A={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(c=r=A,u=i):r=r.next=A,V.lanes|=v,fa|=v;A=g.action,La&&a(i,A),i=g.hasEagerState?g.eagerState:a(i,A)}else v={lane:A,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(c=r=v,u=i):r=r.next=v,V.lanes|=A,fa|=A;g=g.next}while(g!==null&&g!==e);if(r===null?u=i:r.next=c,!Ft(i,t.memoizedState)&&(wt=!0,x&&(a=vl,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function xc(t){var e=zt(),a=e.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Ft(i,e.memoizedState)||(wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function ms(t,e,a){var l=V,n=zt(),i=tt;if(i){if(a===void 0)throw Error(f(407));a=a()}else a=e();var u=!Ft((rt||n).memoizedState,a);if(u&&(n.memoizedState=a,wt=!0),n=n.queue,Ac(ys.bind(null,l,n,t),[t]),n.getSnapshot!==e||u||Tt!==null&&Tt.memoizedState.tag&1){if(l.flags|=2048,Al(9,{destroy:void 0},vs.bind(null,l,n,a,e),null),dt===null)throw Error(f(349));i||(He&127)!==0||gs(l,e,a)}return a}function gs(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=V.updateQueue,e===null?(e=xi(),V.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function vs(t,e,a,l){e.value=a,e.getSnapshot=l,bs(e)&&xs(t)}function ys(t,e,a){return a(function(){bs(e)&&xs(t)})}function bs(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ft(t,a)}catch{return!0}}function xs(t){var e=_a(t,2);e!==null&&Kt(e,t,2)}function Sc(t){var e=qt();if(typeof t=="function"){var a=t;if(t=a(),La){Fe(!0);try{a()}finally{Fe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ne,lastRenderedState:t},e}function Ss(t,e,a,l){return t.baseState=a,bc(t,rt,typeof l=="function"?l:Ne)}function $h(t,e,a,l,n){if(wi(t))throw Error(f(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,zs(e,i)):(i.next=a.next,e.pending=a.next=i)}}function zs(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=z.T,u={};z.T=u;try{var c=a(n,l),r=z.S;r!==null&&r(u,c),As(t,e,c)}catch(g){zc(t,e,g)}finally{i!==null&&u.types!==null&&(i.types=u.types),z.T=i}}else try{i=a(n,l),As(t,e,i)}catch(g){zc(t,e,g)}}function As(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ts(t,e,l)},function(l){return zc(t,e,l)}):Ts(t,e,a)}function Ts(t,e,a){e.status="fulfilled",e.value=a,ws(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,zs(t,a)))}function zc(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,ws(e),e=e.next;while(e!==l)}t.action=null}function ws(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function js(t,e){return e}function Es(t,e){if(tt){var a=dt.formState;if(a!==null){t:{var l=V;if(tt){if(mt){e:{for(var n=mt,i=fe;n.nodeType!==8;){if(!i){n=null;break e}if(n=he(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){mt=he(n.nextSibling),l=n.data==="F!";break t}}aa(l)}l=!1}l&&(e=a[0])}}return a=qt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:e},a.queue=l,a=Zs.bind(null,V,l),l.dispatch=a,l=Sc(!1),i=Mc.bind(null,V,!1,l.queue),l=qt(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=$h.bind(null,V,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function Ms(t){var e=zt();return Ds(e,rt,t)}function Ds(t,e,a){if(e=bc(t,e,js)[0],t=zi(Ne)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=rn(e)}catch(u){throw u===yl?di:u}else l=e;e=zt();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(V.flags|=2048,Al(9,{destroy:void 0},Wh.bind(null,n,a),null)),[l,i,t]}function Wh(t,e){t.action=e}function Os(t){var e=zt(),a=rt;if(a!==null)return Ds(e,a,t);zt(),e=e.memoizedState,a=zt();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Al(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=V.updateQueue,e===null&&(e=xi(),V.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Cs(){return zt().memoizedState}function Ai(t,e,a,l){var n=qt();V.flags|=t,n.memoizedState=Al(1|e,{destroy:void 0},a,l===void 0?null:l)}function Ti(t,e,a,l){var n=zt();l=l===void 0?null:l;var i=n.memoizedState.inst;rt!==null&&l!==null&&hc(l,rt.memoizedState.deps)?n.memoizedState=Al(e,i,a,l):(V.flags|=t,n.memoizedState=Al(1|e,i,a,l))}function Us(t,e){Ai(8390656,8,t,e)}function Ac(t,e){Ti(2048,8,t,e)}function Fh(t){V.flags|=4;var e=V.updateQueue;if(e===null)e=xi(),V.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function _s(t){var e=zt().memoizedState;return Fh({ref:e,nextImpl:t}),function(){if((nt&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function Bs(t,e){return Ti(4,2,t,e)}function Hs(t,e){return Ti(4,4,t,e)}function Ns(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rs(t,e,a){a=a!=null?a.concat([t]):null,Ti(4,4,Ns.bind(null,e,t),a)}function Tc(){}function ks(t,e){var a=zt();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&hc(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function qs(t,e){var a=zt();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&hc(e,l[1]))return l[0];if(l=t(),La){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[l,e],l}function wc(t,e,a){return a===void 0||(He&1073741824)!==0&&(F&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Yf(),V.lanes|=t,fa|=t,a)}function Gs(t,e,a,l){return Ft(a,e)?a:xl.current!==null?(t=wc(t,a,l),Ft(t,e)||(wt=!0),t):(He&42)===0||(He&1073741824)!==0&&(F&261930)===0?(wt=!0,t.memoizedState=a):(t=Yf(),V.lanes|=t,fa|=t,e)}function Ys(t,e,a,l,n){var i=D.p;D.p=i!==0&&8>i?i:8;var u=z.T,c={};z.T=c,Mc(t,!1,e,a);try{var r=n(),g=z.S;if(g!==null&&g(c,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var x=Zh(r,l);sn(t,e,x,le(t))}else sn(t,e,l,le(t))}catch(A){sn(t,e,{then:function(){},status:"rejected",reason:A},le())}finally{D.p=i,u!==null&&c.types!==null&&(u.types=c.types),z.T=u}}function Ih(){}function jc(t,e,a,l){if(t.tag!==5)throw Error(f(476));var n=Ls(t).queue;Ys(t,n,e,X,a===null?Ih:function(){return Xs(t),a(l)})}function Ls(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ne,lastRenderedState:X},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ne,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Xs(t){var e=Ls(t);e.next===null&&(e=t.alternate.memoizedState),sn(t,e.next.queue,{},le())}function Ec(){return Ht(En)}function Qs(){return zt().memoizedState}function Vs(){return zt().memoizedState}function Ph(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=le();t=ia(a);var l=ua(e,t,a);l!==null&&(Kt(l,e,a),nn(l,e,a)),e={cache:ac()},t.payload=e;return}e=e.return}}function tp(t,e,a){var l=le();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wi(t)?Ks(e,a):(a=Vu(t,e,a,l),a!==null&&(Kt(a,t,l),Js(a,e,l)))}function Zs(t,e,a){var l=le();sn(t,e,a,l)}function sn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wi(t))Ks(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,a);if(n.hasEagerState=!0,n.eagerState=c,Ft(c,u))return ii(t,e,n,0),dt===null&&ni(),!1}catch{}finally{}if(a=Vu(t,e,n,l),a!==null)return Kt(a,t,l),Js(a,e,l),!0}return!1}function Mc(t,e,a,l){if(l={lane:2,revertLane:uo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},wi(t)){if(e)throw Error(f(479))}else e=Vu(t,a,l,2),e!==null&&Kt(e,t,2)}function wi(t){var e=t.alternate;return t===V||e!==null&&e===V}function Ks(t,e){Sl=yi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Js(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Po(t,a)}}var fn={readContext:Ht,use:Si,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt};fn.useEffectEvent=bt;var $s={readContext:Ht,use:Si,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:Us,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Ai(4194308,4,Ns.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Ai(4194308,4,t,e)},useInsertionEffect:function(t,e){Ai(4,2,t,e)},useMemo:function(t,e){var a=qt();e=e===void 0?null:e;var l=t();if(La){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=qt();if(a!==void 0){var n=a(e);if(La){Fe(!0);try{a(e)}finally{Fe(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=tp.bind(null,V,t),[l.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:function(t){t=Sc(t);var e=t.queue,a=Zs.bind(null,V,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Tc,useDeferredValue:function(t,e){var a=qt();return wc(a,t,e)},useTransition:function(){var t=Sc(!1);return t=Ys.bind(null,V,t.queue,!0,!1),qt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=V,n=qt();if(tt){if(a===void 0)throw Error(f(407));a=a()}else{if(a=e(),dt===null)throw Error(f(349));(F&127)!==0||gs(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,Us(ys.bind(null,l,i,t),[t]),l.flags|=2048,Al(9,{destroy:void 0},vs.bind(null,l,i,a,e),null),a},useId:function(){var t=qt(),e=dt.identifierPrefix;if(tt){var a=ze,l=Se;a=(l&~(1<<32-Wt(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=bi++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Kh++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Ec,useFormState:Es,useActionState:Es,useOptimistic:function(t){var e=qt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Mc.bind(null,V,!0,a),a.dispatch=e,[t,e]},useMemoCache:yc,useCacheRefresh:function(){return qt().memoizedState=Ph.bind(null,V)},useEffectEvent:function(t){var e=qt(),a={impl:t};return e.memoizedState=a,function(){if((nt&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},Dc={readContext:Ht,use:Si,useCallback:ks,useContext:Ht,useEffect:Ac,useImperativeHandle:Rs,useInsertionEffect:Bs,useLayoutEffect:Hs,useMemo:qs,useReducer:zi,useRef:Cs,useState:function(){return zi(Ne)},useDebugValue:Tc,useDeferredValue:function(t,e){var a=zt();return Gs(a,rt.memoizedState,t,e)},useTransition:function(){var t=zi(Ne)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:rn(t),e]},useSyncExternalStore:ms,useId:Qs,useHostTransitionStatus:Ec,useFormState:Ms,useActionState:Ms,useOptimistic:function(t,e){var a=zt();return Ss(a,rt,t,e)},useMemoCache:yc,useCacheRefresh:Vs};Dc.useEffectEvent=_s;var Ws={readContext:Ht,use:Si,useCallback:ks,useContext:Ht,useEffect:Ac,useImperativeHandle:Rs,useInsertionEffect:Bs,useLayoutEffect:Hs,useMemo:qs,useReducer:xc,useRef:Cs,useState:function(){return xc(Ne)},useDebugValue:Tc,useDeferredValue:function(t,e){var a=zt();return rt===null?wc(a,t,e):Gs(a,rt.memoizedState,t,e)},useTransition:function(){var t=xc(Ne)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:rn(t),e]},useSyncExternalStore:ms,useId:Qs,useHostTransitionStatus:Ec,useFormState:Os,useActionState:Os,useOptimistic:function(t,e){var a=zt();return rt!==null?Ss(a,rt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:yc,useCacheRefresh:Vs};Ws.useEffectEvent=_s;function Oc(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:j({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Cc={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=le(),n=ia(l);n.payload=e,a!=null&&(n.callback=a),e=ua(t,n,l),e!==null&&(Kt(e,t,l),nn(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=le(),n=ia(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=ua(t,n,l),e!==null&&(Kt(e,t,l),nn(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=le(),l=ia(a);l.tag=2,e!=null&&(l.callback=e),e=ua(t,l,a),e!==null&&(Kt(e,t,a),nn(e,t,a))}};function Fs(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!Wl(a,l)||!Wl(n,i):!0}function Is(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&Cc.enqueueReplaceState(e,e.state,null)}function Xa(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=j({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Ps(t){li(t)}function tf(t){console.error(t)}function ef(t){li(t)}function ji(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function af(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Uc(t,e,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){ji(t,e)},a}function lf(t){return t=ia(t),t.tag=3,t}function nf(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){af(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){af(e,a,l),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function ep(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&ml(e,a,n,!0),a=Pt.current,a!==null){switch(a.tag){case 31:case 13:return de===null?ki():a.alternate===null&&xt===0&&(xt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===hi?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),lo(t,l,n)),!1;case 22:return a.flags|=65536,l===hi?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),lo(t,l,n)),!1}throw Error(f(435,a.tag))}return lo(t,l,n),ki(),!1}if(tt)return e=Pt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==Fu&&(t=Error(f(422),{cause:l}),Pl(oe(t,a)))):(l!==Fu&&(e=Error(f(423),{cause:l}),Pl(oe(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=oe(l,a),n=Uc(t.stateNode,l,n),oc(t,n),xt!==4&&(xt=2)),!1;var i=Error(f(520),{cause:l});if(i=oe(i,a),bn===null?bn=[i]:bn.push(i),xt!==4&&(xt=2),e===null)return!0;l=oe(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=Uc(a.stateNode,l,t),oc(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=lf(n),nf(n,t,a,l),oc(a,n),!1}a=a.return}while(a!==null);return!1}var _c=Error(f(461)),wt=!1;function Nt(t,e,a,l){e.child=t===null?os(e,null,a,l):Ya(e,t.child,a,l)}function uf(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Ra(e),l=pc(t,e,a,u,i,n),c=mc(),t!==null&&!wt?(gc(t,e,n),Re(t,e,n)):(tt&&c&&$u(e),e.flags|=1,Nt(t,e,l,n),e.child)}function cf(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Zu(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,of(t,e,i,l,n)):(t=ci(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Yc(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Wl,a(u,l)&&t.ref===e.ref)return Re(t,e,n)}return e.flags|=1,t=Ce(i,l),t.ref=e.ref,t.return=e,e.child=t}function of(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Wl(i,l)&&t.ref===e.ref)if(wt=!1,e.pendingProps=l=i,Yc(t,n))(t.flags&131072)!==0&&(wt=!0);else return e.lanes=t.lanes,Re(t,e,n)}return Bc(t,e,a,l,n)}function rf(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return sf(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&fi(e,i!==null?i.cachePool:null),i!==null?fs(e,i):sc(),ds(e);else return l=e.lanes=536870912,sf(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(fi(e,i.cachePool),fs(e,i),oa(),e.memoizedState=null):(t!==null&&fi(e,null),sc(),oa());return Nt(t,e,n,a),e.child}function dn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function sf(t,e,a,l,n){var i=nc();return i=i===null?null:{parent:At._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&fi(e,null),sc(),ds(e),t!==null&&ml(t,e,l,!0),e.childLanes=n,null}function Ei(t,e){return e=Di({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function ff(t,e,a){return Ya(e,t.child,null,a),t=Ei(e,e.pendingProps),t.flags|=2,te(e),e.memoizedState=null,t}function ap(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(tt){if(l.mode==="hidden")return t=Ei(e,l),e.lanes=536870912,dn(null,t);if(dc(e),(t=mt)?(t=Ad(t,fe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ta!==null?{id:Se,overflow:ze}:null,retryLane:536870912,hydrationErrors:null},a=Kr(t),a.return=e,e.child=a,Bt=e,mt=null)):t=null,t===null)throw aa(e);return e.lanes=536870912,null}return Ei(e,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(dc(e),n)if(e.flags&256)e.flags&=-257,e=ff(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(wt||ml(t,e,a,!1),n=(a&t.childLanes)!==0,wt||n){if(l=dt,l!==null&&(u=tr(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,_a(t,u),Kt(l,t,u),_c;ki(),e=ff(t,e,a)}else t=i.treeContext,mt=he(u.nextSibling),Bt=e,tt=!0,ea=null,fe=!1,t!==null&&Wr(e,t),e=Ei(e,l),e.flags|=4096;return e}return t=Ce(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Mi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Bc(t,e,a,l,n){return Ra(e),a=pc(t,e,a,l,void 0,n),l=mc(),t!==null&&!wt?(gc(t,e,n),Re(t,e,n)):(tt&&l&&$u(e),e.flags|=1,Nt(t,e,a,n),e.child)}function df(t,e,a,l,n,i){return Ra(e),e.updateQueue=null,a=ps(e,l,a,n),hs(t),l=mc(),t!==null&&!wt?(gc(t,e,i),Re(t,e,i)):(tt&&l&&$u(e),e.flags|=1,Nt(t,e,a,i),e.child)}function hf(t,e,a,l,n){if(Ra(e),e.stateNode===null){var i=fl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ht(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},uc(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ht(u):fl,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Oc(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Cc.enqueueReplaceState(i,i.state,null),cn(e,l,i,n),un(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,r=Xa(a,c);i.props=r;var g=i.context,x=a.contextType;u=fl,typeof x=="object"&&x!==null&&(u=Ht(x));var A=a.getDerivedStateFromProps;x=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||g!==u)&&Is(e,i,l,u),na=!1;var v=e.memoizedState;i.state=v,cn(e,l,i,n),un(),g=e.memoizedState,c||v!==g||na?(typeof A=="function"&&(Oc(e,a,A,l),g=e.memoizedState),(r=na||Fs(e,a,r,l,v,g,u))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=g),i.props=l,i.state=g,i.context=u,l=r):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,cc(t,e),u=e.memoizedProps,x=Xa(a,u),i.props=x,A=e.pendingProps,v=i.context,g=a.contextType,r=fl,typeof g=="object"&&g!==null&&(r=Ht(g)),c=a.getDerivedStateFromProps,(g=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||v!==r)&&Is(e,i,l,r),na=!1,v=e.memoizedState,i.state=v,cn(e,l,i,n),un();var b=e.memoizedState;u!==A||v!==b||na||t!==null&&t.dependencies!==null&&ri(t.dependencies)?(typeof c=="function"&&(Oc(e,a,c,l),b=e.memoizedState),(x=na||Fs(e,a,x,l,v,b,r)||t!==null&&t.dependencies!==null&&ri(t.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,b,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,b,r)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=b),i.props=l,i.state=b,i.context=r,l=x):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Mi(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Ya(e,t.child,null,n),e.child=Ya(e,null,a,n)):Nt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Re(t,e,n),t}function pf(t,e,a,l){return Ha(),e.flags|=256,Nt(t,e,a,l),e.child}var Hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(t){return{baseLanes:t,cachePool:as()}}function Rc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=ae),t}function mf(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(tt){if(n?ca(e):oa(),(t=mt)?(t=Ad(t,fe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ta!==null?{id:Se,overflow:ze}:null,retryLane:536870912,hydrationErrors:null},a=Kr(t),a.return=e,e.child=a,Bt=e,mt=null)):t=null,t===null)throw aa(e);return xo(t)?e.lanes=32:e.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(oa(),n=e.mode,c=Di({mode:"hidden",children:c},n),l=Ba(l,n,a,null),c.return=e,l.return=e,c.sibling=l,e.child=c,l=e.child,l.memoizedState=Nc(a),l.childLanes=Rc(t,u,a),e.memoizedState=Hc,dn(null,l)):(ca(e),kc(e,c))}var r=t.memoizedState;if(r!==null&&(c=r.dehydrated,c!==null)){if(i)e.flags&256?(ca(e),e.flags&=-257,e=qc(t,e,a)):e.memoizedState!==null?(oa(),e.child=t.child,e.flags|=128,e=null):(oa(),c=l.fallback,n=e.mode,l=Di({mode:"visible",children:l.children},n),c=Ba(c,n,a,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,Ya(e,t.child,null,a),l=e.child,l.memoizedState=Nc(a),l.childLanes=Rc(t,u,a),e.memoizedState=Hc,e=dn(null,l));else if(ca(e),xo(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var g=u.dgst;u=g,l=Error(f(419)),l.stack="",l.digest=u,Pl({value:l,source:null,stack:null}),e=qc(t,e,a)}else if(wt||ml(t,e,a,!1),u=(a&t.childLanes)!==0,wt||u){if(u=dt,u!==null&&(l=tr(u,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,_a(t,l),Kt(u,t,l),_c;bo(c)||ki(),e=qc(t,e,a)}else bo(c)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,mt=he(c.nextSibling),Bt=e,tt=!0,ea=null,fe=!1,t!==null&&Wr(e,t),e=kc(e,l.children),e.flags|=4096);return e}return n?(oa(),c=l.fallback,n=e.mode,r=t.child,g=r.sibling,l=Ce(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,g!==null?c=Ce(g,c):(c=Ba(c,n,a,null),c.flags|=2),c.return=e,l.return=e,l.sibling=c,e.child=l,dn(null,l),l=e.child,c=t.child.memoizedState,c===null?c=Nc(a):(n=c.cachePool,n!==null?(r=At._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=as(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=Rc(t,u,a),e.memoizedState=Hc,dn(t.child,l)):(ca(e),a=t.child,t=a.sibling,a=Ce(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function kc(t,e){return e=Di({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Di(t,e){return t=It(22,t,null,e),t.lanes=0,t}function qc(t,e,a){return Ya(e,t.child,null,a),t=kc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gf(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),tc(t.return,e,a)}function Gc(t,e,a,l,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function vf(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=St.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,it(St,u),Nt(t,e,l,a),l=tt?Il:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gf(t,a,e);else if(t.tag===19)gf(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&vi(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),Gc(e,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&vi(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Gc(e,!0,a,null,i,l);break;case"together":Gc(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Re(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),fa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ml(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,a=Ce(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ce(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Yc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ri(t)))}function lp(t,e,a){switch(e.tag){case 3:Gn(e,e.stateNode.containerInfo),la(e,At,t.memoizedState.cache),Ha();break;case 27:case 5:fu(e);break;case 4:Gn(e,e.stateNode.containerInfo);break;case 10:la(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,dc(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(ca(e),e.flags|=128,null):(a&e.child.childLanes)!==0?mf(t,e,a):(ca(e),t=Re(t,e,a),t!==null?t.sibling:null);ca(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(ml(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return vf(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),it(St,St.current),l)break;return null;case 22:return e.lanes=0,rf(t,e,a,e.pendingProps);case 24:la(e,At,t.memoizedState.cache)}return Re(t,e,a)}function yf(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)wt=!0;else{if(!Yc(t,a)&&(e.flags&128)===0)return wt=!1,lp(t,e,a);wt=(t.flags&131072)!==0}else wt=!1,tt&&(e.flags&1048576)!==0&&$r(e,Il,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=qa(e.elementType),e.type=t,typeof t=="function")Zu(t)?(l=Xa(t,l),e.tag=1,e=hf(null,e,t,l,a)):(e.tag=0,e=Bc(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===$e){e.tag=11,e=uf(null,e,t,l,a);break t}else if(n===je){e.tag=14,e=cf(null,e,t,l,a);break t}}throw e=Rl(t)||t,Error(f(306,e,""))}}return e;case 0:return Bc(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=Xa(l,e.pendingProps),hf(t,e,l,n,a);case 3:t:{if(Gn(e,e.stateNode.containerInfo),t===null)throw Error(f(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,cc(t,e),cn(e,l,null,a);var u=e.memoizedState;if(l=u.cache,la(e,At,l),l!==i.cache&&ec(e,[At],a,!0),un(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=pf(t,e,l,a);break t}else if(l!==n){n=oe(Error(f(424)),e),Pl(n),e=pf(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(mt=he(t.firstChild),Bt=e,tt=!0,ea=null,fe=!0,a=os(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ha(),l===n){e=Re(t,e,a);break t}Nt(t,e,l,a)}e=e.child}return e;case 26:return Mi(t,e),t===null?(a=Dd(e.type,null,e.pendingProps,null))?e.memoizedState=a:tt||(a=e.type,t=e.pendingProps,l=Vi(We.current).createElement(a),l[_t]=e,l[Yt]=t,Rt(l,a,t),Ot(l),e.stateNode=l):e.memoizedState=Dd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return fu(e),t===null&&tt&&(l=e.stateNode=jd(e.type,e.pendingProps,We.current),Bt=e,fe=!0,n=mt,ga(e.type)?(So=n,mt=he(l.firstChild)):mt=n),Nt(t,e,e.pendingProps.children,a),Mi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&tt&&((n=l=mt)&&(l=_p(l,e.type,e.pendingProps,fe),l!==null?(e.stateNode=l,Bt=e,mt=he(l.firstChild),fe=!1,n=!0):n=!1),n||aa(e)),fu(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,go(n,i)?l=null:u!==null&&go(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=pc(t,e,Jh,null,null,a),En._currentValue=n),Mi(t,e),Nt(t,e,l,a),e.child;case 6:return t===null&&tt&&((t=a=mt)&&(a=Bp(a,e.pendingProps,fe),a!==null?(e.stateNode=a,Bt=e,mt=null,t=!0):t=!1),t||aa(e)),null;case 13:return mf(t,e,a);case 4:return Gn(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Ya(e,null,l,a):Nt(t,e,l,a),e.child;case 11:return uf(t,e,e.type,e.pendingProps,a);case 7:return Nt(t,e,e.pendingProps,a),e.child;case 8:return Nt(t,e,e.pendingProps.children,a),e.child;case 12:return Nt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,la(e,e.type,l.value),Nt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,Ra(e),n=Ht(n),l=l(n),e.flags|=1,Nt(t,e,l,a),e.child;case 14:return cf(t,e,e.type,e.pendingProps,a);case 15:return of(t,e,e.type,e.pendingProps,a);case 19:return vf(t,e,a);case 31:return ap(t,e,a);case 22:return rf(t,e,a,e.pendingProps);case 24:return Ra(e),l=Ht(At),t===null?(n=nc(),n===null&&(n=dt,i=ac(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},uc(e),la(e,At,n)):((t.lanes&a)!==0&&(cc(t,e),cn(e,null,null,a),un()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),la(e,At,l)):(l=i.cache,la(e,At,l),l!==n.cache&&ec(e,[At],a,!0))),Nt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function ke(t){t.flags|=4}function Lc(t,e,a,l,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Vf())t.flags|=8192;else throw Ga=hi,ic}else t.flags&=-16777217}function bf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Bd(e))if(Vf())t.flags|=8192;else throw Ga=hi,ic}function Oi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Fo():536870912,t.lanes|=e,El|=e)}function hn(t,e){if(!tt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function np(t,e,a){var l=e.pendingProps;switch(Wu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return gt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Be(At),Fa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(pl(e)?ke(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Iu())),gt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(ke(e),i!==null?(gt(e),bf(e,i)):(gt(e),Lc(e,n,null,l,a))):i?i!==t.memoizedState?(ke(e),gt(e),bf(e,i)):(gt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&ke(e),gt(e),Lc(e,n,t,l,a)),null;case 27:if(Yn(e),a=We.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ke(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return gt(e),null}t=Dt.current,pl(e)?Fr(e):(t=jd(n,l,a),e.stateNode=t,ke(e))}return gt(e),null;case 5:if(Yn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ke(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return gt(e),null}if(i=Dt.current,pl(e))Fr(e);else{var u=Vi(We.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[_t]=e,i[Yt]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(Rt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ke(e)}}return gt(e),Lc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&ke(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(f(166));if(t=We.current,pl(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=Bt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[_t]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||md(t.nodeValue,a)),t||aa(e,!0)}else t=Vi(t).createTextNode(l),t[_t]=e,e.stateNode=t}return gt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=pl(e),a!==null){if(t===null){if(!l)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[_t]=e}else Ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;gt(e),t=!1}else a=Iu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(te(e),e):(te(e),null);if((e.flags&128)!==0)throw Error(f(558))}return gt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=pl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(f(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[_t]=e}else Ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;gt(e),n=!1}else n=Iu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(te(e),e):(te(e),null)}return te(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Oi(e,e.updateQueue),gt(e),null);case 4:return Fa(),t===null&&so(e.stateNode.containerInfo),gt(e),null;case 10:return Be(e.type),gt(e),null;case 19:if(yt(St),l=e.memoizedState,l===null)return gt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)hn(l,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=vi(t),i!==null){for(e.flags|=128,hn(l,!1),t=i.updateQueue,e.updateQueue=t,Oi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Zr(a,t),a=a.sibling;return it(St,St.current&1|2),tt&&Ue(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&Jt()>Hi&&(e.flags|=128,n=!0,hn(l,!1),e.lanes=4194304)}else{if(!n)if(t=vi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Oi(e,t),hn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!tt)return gt(e),null}else 2*Jt()-l.renderingStartTime>Hi&&a!==536870912&&(e.flags|=128,n=!0,hn(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Jt(),t.sibling=null,a=St.current,it(St,n?a&1|2:a&1),tt&&Ue(e,l.treeForkCount),t):(gt(e),null);case 22:case 23:return te(e),fc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),a=e.updateQueue,a!==null&&Oi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&yt(ka),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Be(At),gt(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function ip(t,e){switch(Wu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Be(At),Fa(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Yn(e),null;case 31:if(e.memoizedState!==null){if(te(e),e.alternate===null)throw Error(f(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(te(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(St),null;case 4:return Fa(),null;case 10:return Be(e.type),null;case 22:case 23:return te(e),fc(),t!==null&&yt(ka),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Be(At),null;case 25:return null;default:return null}}function xf(t,e){switch(Wu(e),e.tag){case 3:Be(At),Fa();break;case 26:case 27:case 5:Yn(e);break;case 4:Fa();break;case 31:e.memoizedState!==null&&te(e);break;case 13:te(e);break;case 19:yt(St);break;case 10:Be(e.type);break;case 22:case 23:te(e),fc(),t!==null&&yt(ka);break;case 24:Be(At)}}function pn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(c){ct(e,e.return,c)}}function ra(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var r=a,g=c;try{g()}catch(x){ct(n,r,x)}}}l=l.next}while(l!==i)}}catch(x){ct(e,e.return,x)}}function Sf(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{ss(e,a)}catch(l){ct(t,t.return,l)}}}function zf(t,e,a){a.props=Xa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){ct(t,e,l)}}function mn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){ct(t,e,n)}}function Ae(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ct(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ct(t,e,n)}else a.current=null}function Af(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ct(t,t.return,n)}}function Xc(t,e,a){try{var l=t.stateNode;Ep(l,t.type,a,e),l[Yt]=e}catch(n){ct(t,t.return,n)}}function Tf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ga(t.type)||t.tag===4}function Qc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Tf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vc(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=De));else if(l!==4&&(l===27&&ga(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Vc(t,e,a),t=t.sibling;t!==null;)Vc(t,e,a),t=t.sibling}function Ci(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ci(t,e,a),t=t.sibling;t!==null;)Ci(t,e,a),t=t.sibling}function wf(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Rt(e,l,a),e[_t]=t,e[Yt]=a}catch(i){ct(t,t.return,i)}}var qe=!1,jt=!1,Zc=!1,jf=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function up(t,e){if(t=t.containerInfo,po=Ii,t=Rr(t),qu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var u=0,c=-1,r=-1,g=0,x=0,A=t,v=null;e:for(;;){for(var b;A!==a||n!==0&&A.nodeType!==3||(c=u+n),A!==i||l!==0&&A.nodeType!==3||(r=u+l),A.nodeType===3&&(u+=A.nodeValue.length),(b=A.firstChild)!==null;)v=A,A=b;for(;;){if(A===t)break e;if(v===a&&++g===n&&(c=u),v===i&&++x===l&&(r=u),(b=A.nextSibling)!==null)break;A=v,v=A.parentNode}A=b}a=c===-1||r===-1?null:{start:c,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(mo={focusedElem:t,selectionRange:a},Ii=!1,Ct=e;Ct!==null;)if(e=Ct,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ct=t;else for(;Ct!==null;){switch(e=Ct,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var U=Xa(a.type,n);t=l.getSnapshotBeforeUpdate(U,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(G){ct(a,a.return,G)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)yo(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,Ct=t;break}Ct=e.return}}function Ef(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ye(t,a),l&4&&pn(5,a);break;case 1:if(Ye(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){ct(a,a.return,u)}else{var n=Xa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){ct(a,a.return,u)}}l&64&&Sf(a),l&512&&mn(a,a.return);break;case 3:if(Ye(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{ss(t,e)}catch(u){ct(a,a.return,u)}}break;case 27:e===null&&l&4&&wf(a);case 26:case 5:Ye(t,a),e===null&&l&4&&Af(a),l&512&&mn(a,a.return);break;case 12:Ye(t,a);break;case 31:Ye(t,a),l&4&&Of(t,a);break;case 13:Ye(t,a),l&4&&Cf(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=mp.bind(null,a),Hp(t,a))));break;case 22:if(l=a.memoizedState!==null||qe,!l){e=e!==null&&e.memoizedState!==null||jt,n=qe;var i=jt;qe=l,(jt=e)&&!i?Le(t,a,(a.subtreeFlags&8772)!==0):Ye(t,a),qe=n,jt=i}break;case 30:break;default:Ye(t,a)}}function Mf(t){var e=t.alternate;e!==null&&(t.alternate=null,Mf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&zu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vt=null,Xt=!1;function Ge(t,e,a){for(a=a.child;a!==null;)Df(t,e,a),a=a.sibling}function Df(t,e,a){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(kl,a)}catch{}switch(a.tag){case 26:jt||Ae(a,e),Ge(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:jt||Ae(a,e);var l=vt,n=Xt;ga(a.type)&&(vt=a.stateNode,Xt=!1),Ge(t,e,a),Tn(a.stateNode),vt=l,Xt=n;break;case 5:jt||Ae(a,e);case 6:if(l=vt,n=Xt,vt=null,Ge(t,e,a),vt=l,Xt=n,vt!==null)if(Xt)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(a.stateNode)}catch(i){ct(a,e,i)}else try{vt.removeChild(a.stateNode)}catch(i){ct(a,e,i)}break;case 18:vt!==null&&(Xt?(t=vt,Sd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Hl(t)):Sd(vt,a.stateNode));break;case 4:l=vt,n=Xt,vt=a.stateNode.containerInfo,Xt=!0,Ge(t,e,a),vt=l,Xt=n;break;case 0:case 11:case 14:case 15:ra(2,a,e),jt||ra(4,a,e),Ge(t,e,a);break;case 1:jt||(Ae(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&zf(a,e,l)),Ge(t,e,a);break;case 21:Ge(t,e,a);break;case 22:jt=(l=jt)||a.memoizedState!==null,Ge(t,e,a),jt=l;break;default:Ge(t,e,a)}}function Of(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Hl(t)}catch(a){ct(e,e.return,a)}}}function Cf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hl(t)}catch(a){ct(e,e.return,a)}}function cp(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new jf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new jf),e;default:throw Error(f(435,t.tag))}}function Ui(t,e){var a=cp(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=gp.bind(null,t,l);l.then(n,n)}})}function Qt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(ga(c.type)){vt=c.stateNode,Xt=!1;break t}break;case 5:vt=c.stateNode,Xt=!1;break t;case 3:case 4:vt=c.stateNode.containerInfo,Xt=!0;break t}c=c.return}if(vt===null)throw Error(f(160));Df(i,u,n),vt=null,Xt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Uf(e,t),e=e.sibling}var ve=null;function Uf(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qt(e,t),Vt(t),l&4&&(ra(3,t,t.return),pn(3,t),ra(5,t,t.return));break;case 1:Qt(e,t),Vt(t),l&512&&(jt||a===null||Ae(a,a.return)),l&64&&qe&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=ve;if(Qt(e,t),Vt(t),l&512&&(jt||a===null||Ae(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Yl]||i[_t]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Rt(i,l,a),i[_t]=t,Ot(i),l=i;break t;case"link":var u=Ud("link","href",n).get(l+(a.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(c,1);break e}}i=n.createElement(l),Rt(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Ud("meta","content",n).get(l+(a.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(c,1);break e}}i=n.createElement(l),Rt(i,l,a),n.head.appendChild(i);break;default:throw Error(f(468,l))}i[_t]=t,Ot(i),l=i}t.stateNode=l}else _d(n,t.type,t.stateNode);else t.stateNode=Cd(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?_d(n,t.type,t.stateNode):Cd(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Xc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Qt(e,t),Vt(t),l&512&&(jt||a===null||Ae(a,a.return)),a!==null&&l&4&&Xc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Qt(e,t),Vt(t),l&512&&(jt||a===null||Ae(a,a.return)),t.flags&32){n=t.stateNode;try{nl(n,"")}catch(U){ct(t,t.return,U)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Xc(t,n,a!==null?a.memoizedProps:n)),l&1024&&(Zc=!0);break;case 6:if(Qt(e,t),Vt(t),l&4){if(t.stateNode===null)throw Error(f(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(U){ct(t,t.return,U)}}break;case 3:if(Ji=null,n=ve,ve=Zi(e.containerInfo),Qt(e,t),ve=n,Vt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Hl(e.containerInfo)}catch(U){ct(t,t.return,U)}Zc&&(Zc=!1,_f(t));break;case 4:l=ve,ve=Zi(t.stateNode.containerInfo),Qt(e,t),Vt(t),ve=l;break;case 12:Qt(e,t),Vt(t);break;case 31:Qt(e,t),Vt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ui(t,l)));break;case 13:Qt(e,t),Vt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bi=Jt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ui(t,l)));break;case 22:n=t.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,g=qe,x=jt;if(qe=g||n,jt=x||r,Qt(e,t),jt=x,qe=g,Vt(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||r||qe||jt||Qa(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){r=a=e;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=r.stateNode;var A=r.memoizedProps.style,v=A!=null&&A.hasOwnProperty("display")?A.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(U){ct(r,r.return,U)}}}else if(e.tag===6){if(a===null){r=e;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(U){ct(r,r.return,U)}}}else if(e.tag===18){if(a===null){r=e;try{var b=r.stateNode;n?zd(b,!0):zd(r.stateNode,!1)}catch(U){ct(r,r.return,U)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ui(t,a))));break;case 19:Qt(e,t),Vt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ui(t,l)));break;case 30:break;case 21:break;default:Qt(e,t),Vt(t)}}function Vt(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Tf(l)){a=l;break}l=l.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var n=a.stateNode,i=Qc(t);Ci(t,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(nl(u,""),a.flags&=-33);var c=Qc(t);Ci(t,c,u);break;case 3:case 4:var r=a.stateNode.containerInfo,g=Qc(t);Vc(t,g,r);break;default:throw Error(f(161))}}catch(x){ct(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _f(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;_f(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ye(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ef(t,e.alternate,e),e=e.sibling}function Qa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ra(4,e,e.return),Qa(e);break;case 1:Ae(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&zf(e,e.return,a),Qa(e);break;case 27:Tn(e.stateNode);case 26:case 5:Ae(e,e.return),Qa(e);break;case 22:e.memoizedState===null&&Qa(e);break;case 30:Qa(e);break;default:Qa(e)}t=t.sibling}}function Le(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:Le(n,i,a),pn(4,i);break;case 1:if(Le(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){ct(l,l.return,g)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)rs(r[n],c)}catch(g){ct(l,l.return,g)}}a&&u&64&&Sf(i),mn(i,i.return);break;case 27:wf(i);case 26:case 5:Le(n,i,a),a&&l===null&&u&4&&Af(i),mn(i,i.return);break;case 12:Le(n,i,a);break;case 31:Le(n,i,a),a&&u&4&&Of(n,i);break;case 13:Le(n,i,a),a&&u&4&&Cf(n,i);break;case 22:i.memoizedState===null&&Le(n,i,a),mn(i,i.return);break;case 30:break;default:Le(n,i,a)}e=e.sibling}}function Kc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&tn(a))}function Jc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&tn(t))}function ye(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bf(t,e,a,l),e=e.sibling}function Bf(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ye(t,e,a,l),n&2048&&pn(9,e);break;case 1:ye(t,e,a,l);break;case 3:ye(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&tn(t)));break;case 12:if(n&2048){ye(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){ct(e,e.return,r)}}else ye(t,e,a,l);break;case 31:ye(t,e,a,l);break;case 13:ye(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?ye(t,e,a,l):gn(t,e):i._visibility&2?ye(t,e,a,l):(i._visibility|=2,Tl(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Kc(u,e);break;case 24:ye(t,e,a,l),n&2048&&Jc(e.alternate,e);break;default:ye(t,e,a,l)}}function Tl(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=a,r=l,g=u.flags;switch(u.tag){case 0:case 11:case 15:Tl(i,u,c,r,n),pn(8,u);break;case 23:break;case 22:var x=u.stateNode;u.memoizedState!==null?x._visibility&2?Tl(i,u,c,r,n):gn(i,u):(x._visibility|=2,Tl(i,u,c,r,n)),n&&g&2048&&Kc(u.alternate,u);break;case 24:Tl(i,u,c,r,n),n&&g&2048&&Jc(u.alternate,u);break;default:Tl(i,u,c,r,n)}e=e.sibling}}function gn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:gn(a,l),n&2048&&Kc(l.alternate,l);break;case 24:gn(a,l),n&2048&&Jc(l.alternate,l);break;default:gn(a,l)}e=e.sibling}}var vn=8192;function wl(t,e,a){if(t.subtreeFlags&vn)for(t=t.child;t!==null;)Hf(t,e,a),t=t.sibling}function Hf(t,e,a){switch(t.tag){case 26:wl(t,e,a),t.flags&vn&&t.memoizedState!==null&&Kp(a,ve,t.memoizedState,t.memoizedProps);break;case 5:wl(t,e,a);break;case 3:case 4:var l=ve;ve=Zi(t.stateNode.containerInfo),wl(t,e,a),ve=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=vn,vn=16777216,wl(t,e,a),vn=l):wl(t,e,a));break;default:wl(t,e,a)}}function Nf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function yn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Ct=l,kf(l,t)}Nf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rf(t),t=t.sibling}function Rf(t){switch(t.tag){case 0:case 11:case 15:yn(t),t.flags&2048&&ra(9,t,t.return);break;case 3:yn(t);break;case 12:yn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,_i(t)):yn(t);break;default:yn(t)}}function _i(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Ct=l,kf(l,t)}Nf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ra(8,e,e.return),_i(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,_i(e));break;default:_i(e)}t=t.sibling}}function kf(t,e){for(;Ct!==null;){var a=Ct;switch(a.tag){case 0:case 11:case 15:ra(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ct=l;else t:for(a=t;Ct!==null;){l=Ct;var n=l.sibling,i=l.return;if(Mf(l),l===a){Ct=null;break t}if(n!==null){n.return=i,Ct=n;break t}Ct=i}}}var op={getCacheForType:function(t){var e=Ht(At),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Ht(At).controller.signal}},rp=typeof WeakMap=="function"?WeakMap:Map,nt=0,dt=null,$=null,F=0,ut=0,ee=null,sa=!1,jl=!1,$c=!1,Xe=0,xt=0,fa=0,Va=0,Wc=0,ae=0,El=0,bn=null,Zt=null,Fc=!1,Bi=0,qf=0,Hi=1/0,Ni=null,da=null,Et=0,ha=null,Ml=null,Qe=0,Ic=0,Pc=null,Gf=null,xn=0,to=null;function le(){return(nt&2)!==0&&F!==0?F&-F:z.T!==null?uo():er()}function Yf(){if(ae===0)if((F&536870912)===0||tt){var t=Qn;Qn<<=1,(Qn&3932160)===0&&(Qn=262144),ae=t}else ae=536870912;return t=Pt.current,t!==null&&(t.flags|=32),ae}function Kt(t,e,a){(t===dt&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(Dl(t,0),pa(t,F,ae,!1)),Gl(t,a),((nt&2)===0||t!==dt)&&(t===dt&&((nt&2)===0&&(Va|=a),xt===4&&pa(t,F,ae,!1)),Te(t))}function Lf(t,e,a){if((nt&6)!==0)throw Error(f(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||ql(t,e),n=l?dp(t,e):ao(t,e,!0),i=l;do{if(n===0){jl&&!l&&pa(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!sp(a)){n=ao(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=bn;var r=c.current.memoizedState.isDehydrated;if(r&&(Dl(c,u).flags|=256),u=ao(c,u,!1),u!==2){if($c&&!r){c.errorRecoveryDisabledLanes|=i,Va|=i,n=4;break t}i=Zt,Zt=n,i!==null&&(Zt===null?Zt=i:Zt.push.apply(Zt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Dl(t,0),pa(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:pa(l,e,ae,!sa);break t;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(n=Bi+300-Jt(),10<n)){if(pa(l,e,ae,!sa),Zn(l,0,!0)!==0)break t;Qe=e,l.timeoutHandle=bd(Xf.bind(null,l,a,Zt,Ni,Fc,e,ae,Va,El,sa,i,"Throttled",-0,0),n);break t}Xf(l,a,Zt,Ni,Fc,e,ae,Va,El,sa,i,null,-0,0)}}break}while(!0);Te(t)}function Xf(t,e,a,l,n,i,u,c,r,g,x,A,v,b){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:De},Hf(e,i,A);var U=(i&62914560)===i?Bi-Jt():(i&4194048)===i?qf-Jt():0;if(U=Jp(A,U),U!==null){Qe=i,t.cancelPendingCommit=U(Ff.bind(null,t,e,i,a,l,n,u,c,r,x,A,null,v,b)),pa(t,i,u,!g);return}}Ff(t,e,i,a,l,n,u,c,r)}function sp(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Ft(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pa(t,e,a,l){e&=~Wc,e&=~Va,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-Wt(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Io(t,a,e)}function Ri(){return(nt&6)===0?(Sn(0),!1):!0}function eo(){if($!==null){if(ut===0)var t=$.return;else t=$,_e=Na=null,vc(t),bl=null,an=0,t=$;for(;t!==null;)xf(t.alternate,t),t=t.return;$=null}}function Dl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Op(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qe=0,eo(),dt=t,$=a=Ce(t.current,null),F=e,ut=0,ee=null,sa=!1,jl=ql(t,e),$c=!1,El=ae=Wc=Va=fa=xt=0,Zt=bn=null,Fc=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-Wt(l),i=1<<n;e|=t[n],l&=~i}return Xe=e,ni(),a}function Qf(t,e){V=null,z.H=fn,e===yl||e===di?(e=is(),ut=3):e===ic?(e=is(),ut=4):ut=e===_c?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ee=e,$===null&&(xt=1,ji(t,oe(e,t.current)))}function Vf(){var t=Pt.current;return t===null?!0:(F&4194048)===F?de===null:(F&62914560)===F||(F&536870912)!==0?t===de:!1}function Zf(){var t=z.H;return z.H=fn,t===null?fn:t}function Kf(){var t=z.A;return z.A=op,t}function ki(){xt=4,sa||(F&4194048)!==F&&Pt.current!==null||(jl=!0),(fa&134217727)===0&&(Va&134217727)===0||dt===null||pa(dt,F,ae,!1)}function ao(t,e,a){var l=nt;nt|=2;var n=Zf(),i=Kf();(dt!==t||F!==e)&&(Ni=null,Dl(t,e)),e=!1;var u=xt;t:do try{if(ut!==0&&$!==null){var c=$,r=ee;switch(ut){case 8:eo(),u=6;break t;case 3:case 2:case 9:case 6:Pt.current===null&&(e=!0);var g=ut;if(ut=0,ee=null,Ol(t,c,r,g),a&&jl){u=0;break t}break;default:g=ut,ut=0,ee=null,Ol(t,c,r,g)}}fp(),u=xt;break}catch(x){Qf(t,x)}while(!0);return e&&t.shellSuspendCounter++,_e=Na=null,nt=l,z.H=n,z.A=i,$===null&&(dt=null,F=0,ni()),u}function fp(){for(;$!==null;)Jf($)}function dp(t,e){var a=nt;nt|=2;var l=Zf(),n=Kf();dt!==t||F!==e?(Ni=null,Hi=Jt()+500,Dl(t,e)):jl=ql(t,e);t:do try{if(ut!==0&&$!==null){e=$;var i=ee;e:switch(ut){case 1:ut=0,ee=null,Ol(t,e,i,1);break;case 2:case 9:if(ls(i)){ut=0,ee=null,$f(e);break}e=function(){ut!==2&&ut!==9||dt!==t||(ut=7),Te(t)},i.then(e,e);break t;case 3:ut=7;break t;case 4:ut=5;break t;case 7:ls(i)?(ut=0,ee=null,$f(e)):(ut=0,ee=null,Ol(t,e,i,7));break;case 5:var u=null;switch($.tag){case 26:u=$.memoizedState;case 5:case 27:var c=$;if(u?Bd(u):c.stateNode.complete){ut=0,ee=null;var r=c.sibling;if(r!==null)$=r;else{var g=c.return;g!==null?($=g,qi(g)):$=null}break e}}ut=0,ee=null,Ol(t,e,i,5);break;case 6:ut=0,ee=null,Ol(t,e,i,6);break;case 8:eo(),xt=6;break t;default:throw Error(f(462))}}hp();break}catch(x){Qf(t,x)}while(!0);return _e=Na=null,z.H=l,z.A=n,nt=a,$!==null?0:(dt=null,F=0,ni(),xt)}function hp(){for(;$!==null&&!N0();)Jf($)}function Jf(t){var e=yf(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?qi(t):$=e}function $f(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=df(a,e,e.pendingProps,e.type,void 0,F);break;case 11:e=df(a,e,e.pendingProps,e.type.render,e.ref,F);break;case 5:vc(e);default:xf(a,e),e=$=Zr(e,Xe),e=yf(a,e,Xe)}t.memoizedProps=t.pendingProps,e===null?qi(t):$=e}function Ol(t,e,a,l){_e=Na=null,vc(e),bl=null,an=0;var n=e.return;try{if(ep(t,n,e,a,F)){xt=1,ji(t,oe(a,t.current)),$=null;return}}catch(i){if(n!==null)throw $=n,i;xt=1,ji(t,oe(a,t.current)),$=null;return}e.flags&32768?(tt||l===1?t=!0:jl||(F&536870912)!==0?t=!1:(sa=t=!0,(l===2||l===9||l===3||l===6)&&(l=Pt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Wf(e,t)):qi(e)}function qi(t){var e=t;do{if((e.flags&32768)!==0){Wf(e,sa);return}t=e.return;var a=np(e.alternate,e,Xe);if(a!==null){$=a;return}if(e=e.sibling,e!==null){$=e;return}$=e=t}while(e!==null);xt===0&&(xt=5)}function Wf(t,e){do{var a=ip(t.alternate,t);if(a!==null){a.flags&=32767,$=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){$=t;return}$=t=a}while(t!==null);xt=6,$=null}function Ff(t,e,a,l,n,i,u,c,r){t.cancelPendingCommit=null;do Gi();while(Et!==0);if((nt&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(i=e.lanes|e.childLanes,i|=Qu,Z0(t,a,i,u,c,r),t===dt&&($=dt=null,F=0),Ml=e,ha=t,Qe=a,Ic=i,Pc=n,Gf=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vp(Ln,function(){return ad(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,n=D.p,D.p=2,u=nt,nt|=4;try{up(t,e,a)}finally{nt=u,D.p=n,z.T=l}}Et=1,If(),Pf(),td()}}function If(){if(Et===1){Et=0;var t=ha,e=Ml,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=D.p;D.p=2;var n=nt;nt|=4;try{Uf(e,t);var i=mo,u=Rr(t.containerInfo),c=i.focusedElem,r=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Nr(c.ownerDocument.documentElement,c)){if(r!==null&&qu(c)){var g=r.start,x=r.end;if(x===void 0&&(x=g),"selectionStart"in c)c.selectionStart=g,c.selectionEnd=Math.min(x,c.value.length);else{var A=c.ownerDocument||document,v=A&&A.defaultView||window;if(v.getSelection){var b=v.getSelection(),U=c.textContent.length,G=Math.min(r.start,U),ft=r.end===void 0?G:Math.min(r.end,U);!b.extend&&G>ft&&(u=ft,ft=G,G=u);var h=Hr(c,G),d=Hr(c,ft);if(h&&d&&(b.rangeCount!==1||b.anchorNode!==h.node||b.anchorOffset!==h.offset||b.focusNode!==d.node||b.focusOffset!==d.offset)){var m=A.createRange();m.setStart(h.node,h.offset),b.removeAllRanges(),G>ft?(b.addRange(m),b.extend(d.node,d.offset)):(m.setEnd(d.node,d.offset),b.addRange(m))}}}}for(A=[],b=c;b=b.parentNode;)b.nodeType===1&&A.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<A.length;c++){var S=A[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Ii=!!po,mo=po=null}finally{nt=n,D.p=l,z.T=a}}t.current=e,Et=2}}function Pf(){if(Et===2){Et=0;var t=ha,e=Ml,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=D.p;D.p=2;var n=nt;nt|=4;try{Ef(t,e.alternate,e)}finally{nt=n,D.p=l,z.T=a}}Et=3}}function td(){if(Et===4||Et===3){Et=0,R0();var t=ha,e=Ml,a=Qe,l=Gf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Et=5:(Et=0,Ml=ha=null,ed(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(da=null),xu(a),e=e.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=z.T,n=D.p,D.p=2,z.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{z.T=e,D.p=n}}(Qe&3)!==0&&Gi(),Te(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===to?xn++:(xn=0,to=t):xn=0,Sn(0)}}function ed(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,tn(e)))}function Gi(){return If(),Pf(),td(),ad()}function ad(){if(Et!==5)return!1;var t=ha,e=Ic;Ic=0;var a=xu(Qe),l=z.T,n=D.p;try{D.p=32>a?32:a,z.T=null,a=Pc,Pc=null;var i=ha,u=Qe;if(Et=0,Ml=ha=null,Qe=0,(nt&6)!==0)throw Error(f(331));var c=nt;if(nt|=4,Rf(i.current),Bf(i,i.current,u,a),nt=c,Sn(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(kl,i)}catch{}return!0}finally{D.p=n,z.T=l,ed(t,e)}}function ld(t,e,a){e=oe(a,e),e=Uc(t.stateNode,e,2),t=ua(t,e,2),t!==null&&(Gl(t,2),Te(t))}function ct(t,e,a){if(t.tag===3)ld(t,t,a);else for(;e!==null;){if(e.tag===3){ld(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))){t=oe(a,t),a=lf(2),l=ua(e,a,2),l!==null&&(nf(a,l,e,t),Gl(l,2),Te(l));break}}e=e.return}}function lo(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new rp;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||($c=!0,n.add(a),t=pp.bind(null,t,e,a),e.then(t,t))}function pp(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,dt===t&&(F&a)===a&&(xt===4||xt===3&&(F&62914560)===F&&300>Jt()-Bi?(nt&2)===0&&Dl(t,0):Wc|=a,El===F&&(El=0)),Te(t)}function nd(t,e){e===0&&(e=Fo()),t=_a(t,e),t!==null&&(Gl(t,e),Te(t))}function mp(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),nd(t,a)}function gp(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(e),nd(t,a)}function vp(t,e){return gu(t,e)}var Yi=null,Cl=null,no=!1,Li=!1,io=!1,ma=0;function Te(t){t!==Cl&&t.next===null&&(Cl===null?Yi=Cl=t:Cl=Cl.next=t),Li=!0,no||(no=!0,bp())}function Sn(t,e){if(!io&&Li){io=!0;do for(var a=!1,l=Yi;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-Wt(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,od(l,i))}else i=F,i=Zn(l,l===dt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||ql(l,i)||(a=!0,od(l,i));l=l.next}while(a);io=!1}}function yp(){id()}function id(){Li=no=!1;var t=0;ma!==0&&Dp()&&(t=ma);for(var e=Jt(),a=null,l=Yi;l!==null;){var n=l.next,i=ud(l,e);i===0?(l.next=null,a===null?Yi=n:a.next=n,n===null&&(Cl=a)):(a=l,(t!==0||(i&3)!==0)&&(Li=!0)),l=n}Et!==0&&Et!==5||Sn(t),ma!==0&&(ma=0)}function ud(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Wt(i),c=1<<u,r=n[u];r===-1?((c&a)===0||(c&l)!==0)&&(n[u]=V0(c,e)):r<=e&&(t.expiredLanes|=c),i&=~c}if(e=dt,a=F,a=Zn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&vu(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ql(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&vu(l),xu(a)){case 2:case 8:a=$o;break;case 32:a=Ln;break;case 268435456:a=Wo;break;default:a=Ln}return l=cd.bind(null,t),a=gu(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&vu(l),t.callbackPriority=2,t.callbackNode=null,2}function cd(t,e){if(Et!==0&&Et!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gi()&&t.callbackNode!==a)return null;var l=F;return l=Zn(t,t===dt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Lf(t,l,e),ud(t,Jt()),t.callbackNode!=null&&t.callbackNode===a?cd.bind(null,t):null)}function od(t,e){if(Gi())return null;Lf(t,e,!0)}function bp(){Cp(function(){(nt&6)!==0?gu(Jo,yp):id()})}function uo(){if(ma===0){var t=gl;t===0&&(t=Xn,Xn<<=1,(Xn&261888)===0&&(Xn=256)),ma=t}return ma}function rd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wn(""+t)}function sd(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function xp(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=rd((n[Yt]||null).action),u=l.submitter;u&&(e=(e=u[Yt]||null)?rd(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new ti("action","action",null,l,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ma!==0){var r=u?sd(n,u):new FormData(n);jc(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(c.preventDefault(),r=u?sd(n,u):new FormData(n),jc(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var co=0;co<Xu.length;co++){var oo=Xu[co],Sp=oo.toLowerCase(),zp=oo[0].toUpperCase()+oo.slice(1);ge(Sp,"on"+zp)}ge(Gr,"onAnimationEnd"),ge(Yr,"onAnimationIteration"),ge(Lr,"onAnimationStart"),ge("dblclick","onDoubleClick"),ge("focusin","onFocus"),ge("focusout","onBlur"),ge(kh,"onTransitionRun"),ge(qh,"onTransitionStart"),ge(Gh,"onTransitionCancel"),ge(Xr,"onTransitionEnd"),al("onMouseEnter",["mouseout","mouseover"]),al("onMouseLeave",["mouseout","mouseover"]),al("onPointerEnter",["pointerout","pointerover"]),al("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ap=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zn));function fd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var c=l[u],r=c.instance,g=c.currentTarget;if(c=c.listener,r!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=g;try{i(n)}catch(x){li(x)}n.currentTarget=null,i=r}else for(u=0;u<l.length;u++){if(c=l[u],r=c.instance,g=c.currentTarget,c=c.listener,r!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=g;try{i(n)}catch(x){li(x)}n.currentTarget=null,i=r}}}}function W(t,e){var a=e[Su];a===void 0&&(a=e[Su]=new Set);var l=t+"__bubble";a.has(l)||(dd(e,t,2,!1),a.add(l))}function ro(t,e,a){var l=0;e&&(l|=4),dd(a,t,l,e)}var Xi="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[Xi]){t[Xi]=!0,nr.forEach(function(a){a!=="selectionchange"&&(Ap.has(a)||ro(a,!1,t),ro(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xi]||(e[Xi]=!0,ro("selectionchange",!1,e))}}function dd(t,e,a,l){switch(Yd(e)){case 2:var n=Fp;break;case 8:n=Ip;break;default:n=jo}a=n.bind(null,e,a,t),n=void 0,!Ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function fo(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=l.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Pa(c),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){l=i=u;continue t}c=c.parentNode}}l=l.return}gr(function(){var g=i,x=Mu(a),A=[];t:{var v=Qr.get(t);if(v!==void 0){var b=ti,U=t;switch(t){case"keypress":if(In(a)===0)break t;case"keydown":case"keyup":b=gh;break;case"focusin":U="focus",b=Bu;break;case"focusout":U="blur",b=Bu;break;case"beforeblur":case"afterblur":b=Bu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=br;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=bh;break;case Gr:case Yr:case Lr:b=ch;break;case Xr:b=Sh;break;case"scroll":case"scrollend":b=ah;break;case"wheel":b=Ah;break;case"copy":case"cut":case"paste":b=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Sr;break;case"toggle":case"beforetoggle":b=wh}var G=(e&4)!==0,ft=!G&&(t==="scroll"||t==="scrollend"),h=G?v!==null?v+"Capture":null:v;G=[];for(var d=g,m;d!==null;){var S=d;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||h===null||(S=Xl(d,h),S!=null&&G.push(An(d,S,m))),ft)break;d=d.return}0<G.length&&(v=new b(v,U,null,a,x),A.push({event:v,listeners:G}))}}if((e&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",v&&a!==Eu&&(U=a.relatedTarget||a.fromElement)&&(Pa(U)||U[Ia]))break t;if((b||v)&&(v=x.window===x?x:(v=x.ownerDocument)?v.defaultView||v.parentWindow:window,b?(U=a.relatedTarget||a.toElement,b=g,U=U?Pa(U):null,U!==null&&(ft=E(U),G=U.tag,U!==ft||G!==5&&G!==27&&G!==6)&&(U=null)):(b=null,U=g),b!==U)){if(G=br,S="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(G=Sr,S="onPointerLeave",h="onPointerEnter",d="pointer"),ft=b==null?v:Ll(b),m=U==null?v:Ll(U),v=new G(S,d+"leave",b,a,x),v.target=ft,v.relatedTarget=m,S=null,Pa(x)===g&&(G=new G(h,d+"enter",U,a,x),G.target=m,G.relatedTarget=ft,S=G),ft=S,b&&U)e:{for(G=Tp,h=b,d=U,m=0,S=h;S;S=G(S))m++;S=0;for(var k=d;k;k=G(k))S++;for(;0<m-S;)h=G(h),m--;for(;0<S-m;)d=G(d),S--;for(;m--;){if(h===d||d!==null&&h===d.alternate){G=h;break e}h=G(h),d=G(d)}G=null}else G=null;b!==null&&hd(A,v,b,G,!1),U!==null&&ft!==null&&hd(A,ft,U,G,!0)}}t:{if(v=g?Ll(g):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var et=Dr;else if(Er(v))if(Or)et=Hh;else{et=_h;var B=Uh}else b=v.nodeName,!b||b.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?g&&ju(g.elementType)&&(et=Dr):et=Bh;if(et&&(et=et(t,g))){Mr(A,et,a,x);break t}B&&B(t,v,g),t==="focusout"&&g&&v.type==="number"&&g.memoizedProps.value!=null&&wu(v,"number",v.value)}switch(B=g?Ll(g):window,t){case"focusin":(Er(B)||B.contentEditable==="true")&&(ol=B,Gu=g,Fl=null);break;case"focusout":Fl=Gu=ol=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,kr(A,a,x);break;case"selectionchange":if(Rh)break;case"keydown":case"keyup":kr(A,a,x)}var Z;if(Nu)t:{switch(t){case"compositionstart":var I="onCompositionStart";break t;case"compositionend":I="onCompositionEnd";break t;case"compositionupdate":I="onCompositionUpdate";break t}I=void 0}else cl?wr(t,a)&&(I="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(zr&&a.locale!=="ko"&&(cl||I!=="onCompositionStart"?I==="onCompositionEnd"&&cl&&(Z=vr()):(Pe=x,Cu="value"in Pe?Pe.value:Pe.textContent,cl=!0)),B=Qi(g,I),0<B.length&&(I=new xr(I,t,null,a,x),A.push({event:I,listeners:B}),Z?I.data=Z:(Z=jr(a),Z!==null&&(I.data=Z)))),(Z=Eh?Mh(t,a):Dh(t,a))&&(I=Qi(g,"onBeforeInput"),0<I.length&&(B=new xr("onBeforeInput","beforeinput",null,a,x),A.push({event:B,listeners:I}),B.data=Z)),xp(A,t,g,a,x)}fd(A,e)})}function An(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Qi(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Xl(t,a),n!=null&&l.unshift(An(t,n,i)),n=Xl(t,e),n!=null&&l.push(An(t,n,i))),t.tag===3)return l;t=t.return}return[]}function Tp(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function hd(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var c=a,r=c.alternate,g=c.stateNode;if(c=c.tag,r!==null&&r===l)break;c!==5&&c!==26&&c!==27||g===null||(r=g,n?(g=Xl(a,i),g!=null&&u.unshift(An(a,g,r))):n||(g=Xl(a,i),g!=null&&u.push(An(a,g,r)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var wp=/\r\n?/g,jp=/\u0000|\uFFFD/g;function pd(t){return(typeof t=="string"?t:""+t).replace(wp,`
`).replace(jp,"")}function md(t,e){return e=pd(e),pd(t)===e}function st(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||nl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&nl(t,""+l);break;case"className":Jn(t,"class",l);break;case"tabIndex":Jn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(t,a,l);break;case"style":pr(t,l,i);break;case"data":if(e!=="object"){Jn(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Wn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&st(t,e,"name",n.name,n,null),st(t,e,"formEncType",n.formEncType,n,null),st(t,e,"formMethod",n.formMethod,n,null),st(t,e,"formTarget",n.formTarget,n,null)):(st(t,e,"encType",n.encType,n,null),st(t,e,"method",n.method,n,null),st(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Wn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=De);break;case"onScroll":l!=null&&W("scroll",t);break;case"onScrollEnd":l!=null&&W("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Wn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":W("beforetoggle",t),W("toggle",t),Kn(t,"popover",l);break;case"xlinkActuate":Me(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Me(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Me(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Me(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Me(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Me(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Me(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Me(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Me(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=th.get(a)||a,Kn(t,a,l))}}function ho(t,e,a,l,n,i){switch(a){case"style":pr(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=a}}break;case"children":typeof l=="string"?nl(t,l):(typeof l=="number"||typeof l=="bigint")&&nl(t,""+l);break;case"onScroll":l!=null&&W("scroll",t);break;case"onScrollEnd":l!=null&&W("scrollend",t);break;case"onClick":l!=null&&(t.onclick=De);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ir.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Yt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Kn(t,a,l)}}}function Rt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",t),W("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:st(t,e,i,u,a,null)}}n&&st(t,e,"srcSet",a.srcSet,a,null),l&&st(t,e,"src",a.src,a,null);return;case"input":W("invalid",t);var c=i=u=n=null,r=null,g=null;for(l in a)if(a.hasOwnProperty(l)){var x=a[l];if(x!=null)switch(l){case"name":n=x;break;case"type":u=x;break;case"checked":r=x;break;case"defaultChecked":g=x;break;case"value":i=x;break;case"defaultValue":c=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(f(137,e));break;default:st(t,e,l,x,a,null)}}sr(t,i,c,r,g,u,n,!1);return;case"select":W("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:st(t,e,n,c,a,null)}e=i,a=u,t.multiple=!!l,e!=null?ll(t,!!l,e,!1):a!=null&&ll(t,!!l,a,!0);return;case"textarea":W("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(f(91));break;default:st(t,e,u,c,a,null)}dr(t,l,n,i);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(l=a[r],l!=null))switch(r){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:st(t,e,r,l,a,null)}return;case"dialog":W("beforetoggle",t),W("toggle",t),W("cancel",t),W("close",t);break;case"iframe":case"object":W("load",t);break;case"video":case"audio":for(l=0;l<zn.length;l++)W(zn[l],t);break;case"image":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"embed":case"source":case"link":W("error",t),W("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:st(t,e,g,l,a,null)}return;default:if(ju(e)){for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!==void 0&&ho(t,e,x,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&st(t,e,c,l,a,null))}function Ep(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,r=null,g=null,x=null;for(b in a){var A=a[b];if(a.hasOwnProperty(b)&&A!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":r=A;default:l.hasOwnProperty(b)||st(t,e,b,null,l,A)}}for(var v in l){var b=l[v];if(A=a[v],l.hasOwnProperty(v)&&(b!=null||A!=null))switch(v){case"type":i=b;break;case"name":n=b;break;case"checked":g=b;break;case"defaultChecked":x=b;break;case"value":u=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,e));break;default:b!==A&&st(t,e,v,b,l,A)}}Tu(t,u,c,r,g,x,i,n);return;case"select":b=u=c=v=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":b=r;default:l.hasOwnProperty(i)||st(t,e,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":v=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==r&&st(t,e,n,i,l,r)}e=c,a=u,l=b,v!=null?ll(t,!!a,v,!1):!!l!=!!a&&(e!=null?ll(t,!!a,e,!0):ll(t,!!a,a?[]:"",!1));return;case"textarea":b=v=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:st(t,e,c,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":v=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==i&&st(t,e,u,n,l,i)}fr(t,v,b);return;case"option":for(var U in a)if(v=a[U],a.hasOwnProperty(U)&&v!=null&&!l.hasOwnProperty(U))switch(U){case"selected":t.selected=!1;break;default:st(t,e,U,null,l,v)}for(r in l)if(v=l[r],b=a[r],l.hasOwnProperty(r)&&v!==b&&(v!=null||b!=null))switch(r){case"selected":t.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:st(t,e,r,v,l,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in a)v=a[G],a.hasOwnProperty(G)&&v!=null&&!l.hasOwnProperty(G)&&st(t,e,G,null,l,v);for(g in l)if(v=l[g],b=a[g],l.hasOwnProperty(g)&&v!==b&&(v!=null||b!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(f(137,e));break;default:st(t,e,g,v,l,b)}return;default:if(ju(e)){for(var ft in a)v=a[ft],a.hasOwnProperty(ft)&&v!==void 0&&!l.hasOwnProperty(ft)&&ho(t,e,ft,void 0,l,v);for(x in l)v=l[x],b=a[x],!l.hasOwnProperty(x)||v===b||v===void 0&&b===void 0||ho(t,e,x,v,l,b);return}}for(var h in a)v=a[h],a.hasOwnProperty(h)&&v!=null&&!l.hasOwnProperty(h)&&st(t,e,h,null,l,v);for(A in l)v=l[A],b=a[A],!l.hasOwnProperty(A)||v===b||v==null&&b==null||st(t,e,A,v,l,b)}function gd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mp(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&gd(u)){for(u=0,c=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],g=r.startTime;if(g>c)break;var x=r.transferSize,A=r.initiatorType;x&&gd(A)&&(r=r.responseEnd,u+=x*(r<c?1:(c-g)/(r-g)))}if(--l,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var po=null,mo=null;function Vi(t){return t.nodeType===9?t:t.ownerDocument}function vd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function go(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vo=null;function Dp(){var t=window.event;return t&&t.type==="popstate"?t===vo?!1:(vo=t,!0):(vo=null,!1)}var bd=typeof setTimeout=="function"?setTimeout:void 0,Op=typeof clearTimeout=="function"?clearTimeout:void 0,xd=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof xd<"u"?function(t){return xd.resolve(null).then(t).catch(Up)}:bd;function Up(t){setTimeout(function(){throw t})}function ga(t){return t==="head"}function Sd(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),Hl(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Tn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Tn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Yl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&Tn(t.ownerDocument.body);a=n}while(a);Hl(e)}function zd(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function yo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yo(a),zu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _p(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Yl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=he(t.nextSibling),t===null)break}return null}function Bp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=he(t.nextSibling),t===null))return null;return t}function Ad(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=he(t.nextSibling),t===null))return null;return t}function bo(t){return t.data==="$?"||t.data==="$~"}function xo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Hp(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function he(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var So=null;function Td(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return he(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function wd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function jd(t,e,a){switch(e=Vi(a),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function Tn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);zu(t)}var pe=new Map,Ed=new Set;function Zi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ve=D.d;D.d={f:Np,r:Rp,D:kp,C:qp,L:Gp,m:Yp,X:Xp,S:Lp,M:Qp};function Np(){var t=Ve.f(),e=Ri();return t||e}function Rp(t){var e=tl(t);e!==null&&e.tag===5&&e.type==="form"?Xs(e):Ve.r(t)}var Ul=typeof document>"u"?null:document;function Md(t,e,a){var l=Ul;if(l&&typeof e=="string"&&e){var n=ue(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Ed.has(n)||(Ed.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Rt(e,"link",t),Ot(e),l.head.appendChild(e)))}}function kp(t){Ve.D(t),Md("dns-prefetch",t,null)}function qp(t,e){Ve.C(t,e),Md("preconnect",t,e)}function Gp(t,e,a){Ve.L(t,e,a);var l=Ul;if(l&&t&&e){var n='link[rel="preload"][as="'+ue(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ue(a.imageSizes)+'"]')):n+='[href="'+ue(t)+'"]';var i=n;switch(e){case"style":i=_l(t);break;case"script":i=Bl(t)}pe.has(i)||(t=j({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),pe.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(wn(i))||e==="script"&&l.querySelector(jn(i))||(e=l.createElement("link"),Rt(e,"link",t),Ot(e),l.head.appendChild(e)))}}function Yp(t,e){Ve.m(t,e);var a=Ul;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ue(l)+'"][href="'+ue(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(t)}if(!pe.has(i)&&(t=j({rel:"modulepreload",href:t},e),pe.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jn(i)))return}l=a.createElement("link"),Rt(l,"link",t),Ot(l),a.head.appendChild(l)}}}function Lp(t,e,a){Ve.S(t,e,a);var l=Ul;if(l&&t){var n=el(l).hoistableStyles,i=_l(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(wn(i)))c.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":e},a),(a=pe.get(i))&&zo(t,a);var r=u=l.createElement("link");Ot(r),Rt(r,"link",t),r._p=new Promise(function(g,x){r.onload=g,r.onerror=x}),r.addEventListener("load",function(){c.loading|=1}),r.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ki(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function Xp(t,e){Ve.X(t,e);var a=Ul;if(a&&t){var l=el(a).hoistableScripts,n=Bl(t),i=l.get(n);i||(i=a.querySelector(jn(n)),i||(t=j({src:t,async:!0},e),(e=pe.get(n))&&Ao(t,e),i=a.createElement("script"),Ot(i),Rt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Qp(t,e){Ve.M(t,e);var a=Ul;if(a&&t){var l=el(a).hoistableScripts,n=Bl(t),i=l.get(n);i||(i=a.querySelector(jn(n)),i||(t=j({src:t,async:!0,type:"module"},e),(e=pe.get(n))&&Ao(t,e),i=a.createElement("script"),Ot(i),Rt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Dd(t,e,a,l){var n=(n=We.current)?Zi(n):null;if(!n)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=_l(a.href),a=el(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_l(a.href);var i=el(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(wn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),pe.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pe.set(t,a),i||Vp(n,t,a,u.state))),e&&l===null)throw Error(f(528,""));return u}if(e&&l!==null)throw Error(f(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Bl(a),a=el(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function _l(t){return'href="'+ue(t)+'"'}function wn(t){return'link[rel="stylesheet"]['+t+"]"}function Od(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function Vp(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Rt(e,"link",a),Ot(e),t.head.appendChild(e))}function Bl(t){return'[src="'+ue(t)+'"]'}function jn(t){return"script[async]"+t}function Cd(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+ue(a.href)+'"]');if(l)return e.instance=l,Ot(l),l;var n=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ot(l),Rt(l,"style",n),Ki(l,a.precedence,t),e.instance=l;case"stylesheet":n=_l(a.href);var i=t.querySelector(wn(n));if(i)return e.state.loading|=4,e.instance=i,Ot(i),i;l=Od(a),(n=pe.get(n))&&zo(l,n),i=(t.ownerDocument||t).createElement("link"),Ot(i);var u=i;return u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),Rt(i,"link",l),e.state.loading|=4,Ki(i,a.precedence,t),e.instance=i;case"script":return i=Bl(a.src),(n=t.querySelector(jn(i)))?(e.instance=n,Ot(n),n):(l=a,(n=pe.get(i))&&(l=j({},a),Ao(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ot(n),Rt(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Ki(l,a.precedence,t));return e.instance}function Ki(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function zo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ao(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ji=null;function Ud(t,e,a){if(Ji===null){var l=new Map,n=Ji=new Map;n.set(a,l)}else n=Ji,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Yl]||i[_t]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function _d(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Zp(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Bd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Kp(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=_l(l.href),i=e.querySelector(wn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=$i.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,Ot(i);return}i=e.ownerDocument||e,l=Od(l),(n=pe.get(n))&&zo(l,n),i=i.createElement("link"),Ot(i);var u=i;u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),Rt(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=$i.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var To=0;function Jp(t,e){return t.stylesheets&&t.count===0&&Fi(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Fi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&To===0&&(To=62500*Mp());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>To?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function $i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Wi=null;function Fi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wi=new Map,e.forEach($p,t),Wi=null,$i.call(t))}function $p(t,e){if(!(e.state.loading&4)){var a=Wi.get(t);if(a)var l=a.get(null);else{a=new Map,Wi.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=$i.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var En={$$typeof:Gt,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Wp(t,e,a,l,n,i,u,c,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.hiddenUpdates=yu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Hd(t,e,a,l,n,i,u,c,r,g,x,A){return t=new Wp(t,e,a,u,r,g,x,A,c),e=1,i===!0&&(e|=24),i=It(3,null,null,e),t.current=i,i.stateNode=t,e=ac(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},uc(i),t}function Nd(t){return t?(t=fl,t):fl}function Rd(t,e,a,l,n,i){n=Nd(n),l.context===null?l.context=n:l.pendingContext=n,l=ia(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ua(t,l,e),a!==null&&(Kt(a,t,e),nn(a,t,e))}function kd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function wo(t,e){kd(t,e),(t=t.alternate)&&kd(t,e)}function qd(t){if(t.tag===13||t.tag===31){var e=_a(t,67108864);e!==null&&Kt(e,t,67108864),wo(t,67108864)}}function Gd(t){if(t.tag===13||t.tag===31){var e=le();e=bu(e);var a=_a(t,e);a!==null&&Kt(a,t,e),wo(t,e)}}var Ii=!0;function Fp(t,e,a,l){var n=z.T;z.T=null;var i=D.p;try{D.p=2,jo(t,e,a,l)}finally{D.p=i,z.T=n}}function Ip(t,e,a,l){var n=z.T;z.T=null;var i=D.p;try{D.p=8,jo(t,e,a,l)}finally{D.p=i,z.T=n}}function jo(t,e,a,l){if(Ii){var n=Eo(l);if(n===null)fo(t,e,l,Pi,a),Ld(t,l);else if(tm(n,t,e,a,l))l.stopPropagation();else if(Ld(t,l),e&4&&-1<Pp.indexOf(t)){for(;n!==null;){var i=tl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ma(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var r=1<<31-Wt(u);c.entanglements[1]|=r,u&=~r}Te(i),(nt&6)===0&&(Hi=Jt()+500,Sn(0))}}break;case 31:case 13:c=_a(i,2),c!==null&&Kt(c,i,2),Ri(),wo(i,2)}if(i=Eo(l),i===null&&fo(t,e,l,Pi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else fo(t,e,l,null,a)}}function Eo(t){return t=Mu(t),Mo(t)}var Pi=null;function Mo(t){if(Pi=null,t=Pa(t),t!==null){var e=E(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=O(e),t!==null)return t;t=null}else if(a===31){if(t=C(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Pi=t,null}function Yd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k0()){case Jo:return 2;case $o:return 8;case Ln:case q0:return 32;case Wo:return 268435456;default:return 32}default:return 32}}var Do=!1,va=null,ya=null,ba=null,Mn=new Map,Dn=new Map,xa=[],Pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ld(t,e){switch(t){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":Mn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(e.pointerId)}}function On(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=tl(e),e!==null&&qd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function tm(t,e,a,l,n){switch(e){case"focusin":return va=On(va,t,e,a,l,n),!0;case"dragenter":return ya=On(ya,t,e,a,l,n),!0;case"mouseover":return ba=On(ba,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return Mn.set(i,On(Mn.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Dn.set(i,On(Dn.get(i)||null,t,e,a,l,n)),!0}return!1}function Xd(t){var e=Pa(t.target);if(e!==null){var a=E(e);if(a!==null){if(e=a.tag,e===13){if(e=O(a),e!==null){t.blockedOn=e,ar(t.priority,function(){Gd(a)});return}}else if(e===31){if(e=C(a),e!==null){t.blockedOn=e,ar(t.priority,function(){Gd(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Eo(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Eu=l,a.target.dispatchEvent(l),Eu=null}else return e=tl(a),e!==null&&qd(e),t.blockedOn=a,!1;e.shift()}return!0}function Qd(t,e,a){tu(t)&&a.delete(e)}function em(){Do=!1,va!==null&&tu(va)&&(va=null),ya!==null&&tu(ya)&&(ya=null),ba!==null&&tu(ba)&&(ba=null),Mn.forEach(Qd),Dn.forEach(Qd)}function eu(t,e){t.blockedOn===e&&(t.blockedOn=null,Do||(Do=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,em)))}var au=null;function Vd(t){au!==t&&(au=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){au===t&&(au=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(Mo(l||a)===null)continue;break}var i=tl(a);i!==null&&(t.splice(e,3),e-=3,jc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Hl(t){function e(r){return eu(r,t)}va!==null&&eu(va,t),ya!==null&&eu(ya,t),ba!==null&&eu(ba,t),Mn.forEach(e),Dn.forEach(e);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)Xd(a),a.blockedOn===null&&xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Yt]||null;if(typeof i=="function")u||Vd(a);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Yt]||null)c=u.formAction;else if(Mo(n)!==null)continue}else c=u.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),Vd(a)}}}function Zd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Oo(t){this._internalRoot=t}lu.prototype.render=Oo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var a=e.current,l=le();Rd(a,l,t,e,null,null)},lu.prototype.unmount=Oo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rd(t.current,2,null,t,null,null),Ri(),e[Ia]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=er();t={blockedOn:null,target:t,priority:e};for(var a=0;a<xa.length&&e!==0&&e<xa[a].priority;a++);xa.splice(a,0,t),a===0&&Xd(t)}};var Kd=y.version;if(Kd!=="19.2.1")throw Error(f(527,Kd,"19.2.1"));D.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=M(e),t=t!==null?N(t):null,t=t===null?null:t.stateNode,t};var am={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{kl=nu.inject(am),$t=nu}catch{}}return Cn.createRoot=function(t,e){if(!w(t))throw Error(f(299));var a=!1,l="",n=Ps,i=tf,u=ef;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Hd(t,1,!1,null,null,a,l,null,n,i,u,Zd),t[Ia]=e.current,so(t),new Oo(e)},Cn.hydrateRoot=function(t,e,a){if(!w(t))throw Error(f(299));var l=!1,n="",i=Ps,u=tf,c=ef,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),e=Hd(t,1,!0,e,a??null,l,n,r,i,u,c,Zd),e.context=Nd(null),a=e.current,l=le(),l=bu(l),n=ia(l),n.callback=null,ua(a,n,l),a=l,e.current.lanes=a,Gl(e,a),Te(e),t[Ia]=e.current,so(t),new lu(e)},Cn.version="19.2.1",Cn}var Fd;function dm(){if(Fd)return Co.exports;Fd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(y){console.error(y)}}return s(),Co.exports=fm(),Co.exports}var hm=dm();const Bo='-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',lt={display:Bo,body:Bo,mono:Bo},Ho={mobile:"640px",tablet:"1024px",desktop:"1280px"},q={mobile:`@media (min-width: ${Ho.mobile})`,tablet:`@media (min-width: ${Ho.tablet})`,desktop:`@media (min-width: ${Ho.desktop})`,belowTablet:"@media (max-width: 1023px)",belowMobile:"@media (max-width: 639px)",hover:"@media (hover: hover) and (pointer: fine)"},Un={sm:"8px",md:"10px",lg:"14px",xl:"20px",pill:"999px"},ot={out:[.16,1,.3,1],fly:[.76,0,.24,1],swing:[.65,0,.35,1]},pm=Object.fromEntries(Object.entries(ot).map(([s,y])=>[s,`cubic-bezier(${y.join(", ")})`])),Ut={press:.1,feedback:.12,control:.2,hover:.25,surface:.3,fill:.35,scene:.4,frame:.5,enter:.6,enterLong:.7},za=Object.fromEntries(Object.entries(Ut).map(([s,y])=>[s,`${y}s`])),ru={type:"spring",bounce:0,duration:.4},mm={type:"spring",bounce:.2,duration:.4},g0={stiffness:140,damping:30,mass:.4},v0=(s,y=1)=>({stiffness:s,mass:y,damping:2*Math.sqrt(s*y)});function gm(s,y=.998){return s/1e3*y/(1-y)}const vm=cm`
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

    --ease-out: ${pm.out};

    --dur-press: ${za.press};
    --dur-feedback: ${za.feedback};
    --dur-control: ${za.control};
    --dur-hover: ${za.hover};
    --dur-surface: ${za.surface};
    --dur-fill: ${za.fill};
    --dur-scene: ${za.scene};
    --dur-frame: ${za.frame};

    --r-sm: ${Un.sm};
    --r-md: ${Un.md};
    --r-lg: ${Un.lg};
    --r-xl: ${Un.xl};
    --r-pill: ${Un.pill};

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
    font-family: ${lt.body};
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
    font-family: ${lt.display};
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

  .mono { font-family: ${lt.mono}; font-variant-numeric: tabular-nums; }
  .gpu { transform: translateZ(0); backface-visibility: hidden; }
`,y0=H.createContext(void 0),qo="portfolio-theme-mode",ym=()=>{if(typeof window<"u"){const s=localStorage.getItem(qo);return s==="dark"||s==="light"?s:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"dark"},bm=({children:s})=>{const[y,T]=H.useState(ym),[f,w]=H.useState(()=>{if(typeof window<"u"){const O=localStorage.getItem(qo);return O==="dark"||O==="light"}return!1});H.useEffect(()=>{document.documentElement.setAttribute("data-theme",y)},[y]),H.useEffect(()=>{f&&localStorage.setItem(qo,y)},[y,f]);const E=()=>{const O=y==="dark"?"light":"dark";w(!0);const C=()=>{document.documentElement.setAttribute("data-theme",O),T(O)};if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof document.startViewTransition!="function"){C();return}document.startViewTransition(C)};return o.jsx(y0.Provider,{value:{mode:y,toggleTheme:E,isDark:y==="dark"},children:s})},b0=(s,y)=>{const T=y?.offset??0,f=typeof s=="string"?document.getElementById(s.replace("#","")):s instanceof HTMLElement?s:null;f?window.scrollTo({top:f.getBoundingClientRect().top+window.scrollY+T,behavior:"smooth"}):typeof s=="number"&&window.scrollTo({top:s+T,behavior:"smooth"})},x0=H.createContext({scrollTo:b0}),S0=()=>H.useContext(x0);function z0(s,y){if(y==="home"){s("home",{offset:0});return}const T=document.getElementById(y),f=T?.firstElementChild,w=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"))||64,E=window.matchMedia("(min-width: 1024px)").matches?w:0,O=f&&parseFloat(getComputedStyle(f).paddingLeft)||0;if(T&&f&&O>0){const C=f.getBoundingClientRect().top+window.scrollY;s(C-E-O*1.6)}else s(y,{offset:-(E+24)})}const xm=({children:s})=>o.jsx(x0.Provider,{value:{scrollTo:b0},children:s}),Sm=(function(){const y=typeof document<"u"&&document.createElement("link").relList;return y&&y.supports&&y.supports("modulepreload")?"modulepreload":"preload"})(),zm=function(s){return"/"+s},Id={},Am=function(y,T,f){let w=Promise.resolve();if(T&&T.length>0){let _=function(M){return Promise.all(M.map(N=>Promise.resolve(N).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};document.getElementsByTagName("link");const O=document.querySelector("meta[property=csp-nonce]"),C=O?.nonce||O?.getAttribute("nonce");w=_(T.map(M=>{if(M=zm(M),M in Id)return;Id[M]=!0;const N=M.endsWith(".css"),j=N?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${M}"]${j}`))return;const L=document.createElement("link");if(L.rel=N?"stylesheet":Sm,N||(L.as="script"),L.crossOrigin="",L.href=M,C&&L.setAttribute("nonce",C),document.head.appendChild(L),N)return new Promise((Q,Y)=>{L.addEventListener("load",Q),L.addEventListener("error",()=>Y(new Error(`Unable to preload CSS for ${M}`)))})}))}function E(O){const C=new Event("vite:preloadError",{cancelable:!0});if(C.payload=O,window.dispatchEvent(C),!C.defaultPrevented)throw O}return w.then(O=>{for(const C of O||[])C.status==="rejected"&&E(C.reason);return y().catch(E)})};function A0(){const s=H.useContext(y0);if(!s)throw new Error("useTheme must be used within a ThemeProvider");return s}const Tm="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E",wm=p.div`
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
`,jm=p.div`
  position: absolute;
  inset: 0;
  opacity: ${({$ready:s})=>s?1:0};
  transition: opacity var(--dur-scene) var(--ease-out);
`,Em=p.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(90% 60% at 50% -8%, rgba(70, 210, 230, 0.10), transparent 62%);

  [data-theme='light'] & {
    background: radial-gradient(95% 65% at 50% -8%, rgba(10, 150, 172, 0.28), rgba(10, 150, 172, 0.08) 42%, transparent 66%);
  }
`,Mm=p.div`
  position: absolute;
  inset: 0;
  background-image: url('${Tm}');
  background-repeat: repeat;
  background-size: 160px 160px;
  opacity: 0.035;

  [data-theme='light'] & {
    opacity: 0.022;
  }

  @media (prefers-reduced-transparency: reduce) {
    display: none;
  }
`,Dm=p.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(135% 105% at 50% 38%, transparent 60%, rgba(0, 0, 0, 0.6) 100%);

  [data-theme='light'] & {
    display: none;
  }
`,Om=()=>{const s=Mt(),{isDark:y}=A0(),T=!s,[f,w]=H.useState(!1),[E,O]=H.useState(!1),C=H.useRef(null),_=H.useRef(null),M=H.useRef(y);return M.current=y,H.useEffect(()=>{if(!T)return;let N=!1,j=0,L=0;const Q=async()=>{try{const{initSheen:P}=await Am(async()=>{const{initSheen:K}=await import("./sheen-DFdMtLv2.js");return{initSheen:K}},[]);if(N||!C.current)return;_.current=P(C.current,{dark:M.current}),L=requestAnimationFrame(()=>{N||O(!0)})}catch{N||w(!0)}},Y=typeof window.requestIdleCallback=="function";return j=Y?window.requestIdleCallback(Q,{timeout:400}):window.setTimeout(Q,200),()=>{if(N=!0,cancelAnimationFrame(L),Y?window.cancelIdleCallback(j):window.clearTimeout(j),_.current){try{_.current.destroy()}catch{}_.current=null}}},[T]),H.useEffect(()=>{_.current?.setDark(y)},[y]),o.jsxs(wm,{"aria-hidden":!0,children:[T&&o.jsx(jm,{ref:C,$ready:E}),(!T||f)&&o.jsx(Em,{}),o.jsx(Mm,{}),o.jsx(Dm,{})]})},Cm=s=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...s,children:[o.jsx("circle",{cx:"12",cy:"12",r:"4"}),o.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),Um=s=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...s,children:o.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),T0=s=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...s,children:[o.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),o.jsx("path",{d:"M22 6L12 13 2 6"})]}),_m=s=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...s,children:o.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),w0=s=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...s,children:[o.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),o.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),o.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),Bm=s=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...s,children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),Bn=[{id:"steel",fill:"#3E97C9",angle:45.9773,x:142.221,y:138.927,w:737.544,h:737.597,r:48.615},{id:"navy",fill:"#22377D",angle:30.694,x:142.038,y:138.944,w:737.914,h:737.599,r:48.743},{id:"teal",fill:"#098D9D",angle:17.6712,x:142.134,y:139.147,w:737.695,h:737.172,r:48.957}],Pd=[{id:"P",d:"M244 371H405.27C451.92 371 494 414.18 494 461.96C494 515.70 459.83 557 411.50 557H304V624H244V497H399.00C427.90 497 441.16 486.03 441.16 462.89C441.16 444.54 427.15 431 409.06 431H244Z"},{id:"N",d:"M528 371H588L718 544.105V371H778V624H718L588 450.895V624H528Z"}],Hm=.6,No=.1,Nm=.38,Rm=.34,km=.44,qm=.3,Lo=.85,Xo=.65,j0=Xo,Gm=Lo+.4,Ym=.12,Lm=Bn.map((s,y)=>({...s,delay:Lo+(Bn.length-1-y)*j0,from:y===Bn.length-1?0:Bn[y+1].angle})),Xm=Math.round((Lo+j0*(Bn.length-1)+Xo+Ym)*1e3),Qm=p.svg`
  display: block;
  width: 100%;
  height: 100%;
`,Vm=p(R.path)`
  fill: ${({$white:s})=>s?"#FFFFFF":"var(--ink)"};
  transition: fill var(--dur-scene) var(--ease-out);
`,Zm=p(R.path)`
  fill: none;
  stroke: var(--ink);
`,Km=({build:s=!1,className:y})=>{const[T,f]=H.useState(!s);return H.useEffect(()=>{if(!s)return;const w=setTimeout(()=>f(!0),Gm*1e3);return()=>clearTimeout(w)},[s]),o.jsxs(Qm,{className:y,viewBox:"0 0 1024 1018",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[Lm.map(w=>o.jsx(R.rect,{x:w.x,y:w.y,width:w.w,height:w.h,rx:w.r,ry:w.r,fill:w.fill,fillOpacity:.8,initial:s?{opacity:0,rotate:w.from}:!1,animate:{opacity:1,rotate:w.angle},transition:{duration:Xo,ease:ot.swing,delay:w.delay}},w.id)),s&&Pd.map((w,E)=>o.jsx(Zm,{d:w.d,strokeWidth:9,strokeLinejoin:"round",strokeLinecap:"round",initial:{pathLength:0,opacity:1},animate:{pathLength:1,opacity:0},transition:{pathLength:{duration:Hm,ease:ot.out,delay:E*No},opacity:{duration:qm,ease:ot.out,delay:km+E*No}}},`outline-${w.id}`)),Pd.map((w,E)=>o.jsx(Vm,{d:w.d,$white:T,initial:s?{opacity:0}:!1,animate:{opacity:1},transition:{duration:Rm,ease:ot.out,delay:Nm+E*No}},w.id))]})},E0=[{label:"About",href:"about"},{label:"Skills",href:"technologyproficiency"},{label:"Work",href:"professionalexperience"},{label:"Projects",href:"mostproudof"},{label:"Contact",href:"contact"}],M0=["home","about","technologyproficiency","professionalexperience","mostproudof","certifications","testimonials","featured","educationalqualifications","contact"];function Jm(){const s=new Set(E0.map(f=>f.href)),y=new Map;let T="home";for(const f of M0)(f==="home"||s.has(f))&&(T=f),y.set(f,T);return y}function $m(){const[s,y]=H.useState("home");return H.useEffect(()=>{const T=Jm(),f=M0.map(O=>document.getElementById(O)).filter(O=>O!==null),w=new Map,E=new IntersectionObserver(O=>{for(const M of O)w.set(M.target.id,M.isIntersecting?M.intersectionRatio:0);let C="",_=0;for(const[M,N]of w)N>_&&(_=N,C=M);_>0&&y(T.get(C)??C)},{rootMargin:"-45% 0px -45% 0px",threshold:[0,.25,.5,.75,1]});return f.forEach(O=>E.observe(O)),()=>E.disconnect()},[]),s}const Wm=p.nav`
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

  ${q.tablet} {
    top: 0;
    bottom: auto;
    height: var(--nav-h);
    padding: 0;
    display: block;
  }
`,Fm=p.div`
  position: relative;
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  max-width: 100%;

  ${q.tablet} {
    height: var(--nav-h);
    width: 100%;
    max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
    margin-inline: auto;
    padding: 0 var(--gutter);
    gap: 8px;
    justify-content: space-between;
  }

  ${q.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,Im=p(R.div)`
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

  ${q.tablet} {
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
    ${q.tablet} { background: transparent; }
  }
`,Pm=p(R.div)`
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

  ${q.tablet} { display: block; }

  @media (prefers-reduced-transparency: reduce), (prefers-contrast: more) {
    background: var(--bg);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  @media (prefers-contrast: more) {
    border-bottom: 1px solid var(--line-2);
    &::after { display: none; }
  }
`,tg=p(R.a)`
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

  ${q.belowTablet} { width: 36px; height: 36px; }
`,Za=176,Go=32,eg=p.span`
  position: relative;
  display: block;
  width: ${Go}px;
  height: ${Go}px;
  z-index: 1;
`,ag=p(R.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${Za}px;
  height: ${Za}px;
  margin: ${-Za/2}px 0 0 ${-Za/2}px;
  transform-origin: center center;
  pointer-events: none;
`,lg=p(R.div)`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 2px;
  min-width: 0;

  ${q.tablet} {
    flex: 1 1 auto;
    justify-content: center;
  }

  ${q.belowTablet} {
    flex: 0 1 auto;
    min-width: 0;
    justify-content: flex-start;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,ng=p(R.a)`
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

  ${q.belowTablet} {
    padding: 8px 9px;
    font-size: 0.75rem;
  }
`,ig=p(R.span)`
  position: absolute;
  inset: 0;
  border-radius: var(--r-pill);
  background: var(--accent-soft);
  border: 1px solid rgba(var(--accent-rgb), 0.45);
  z-index: 0;
`,ug=p.span`
  position: relative;
  z-index: 1;
`,cg=p(R.button)`
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

  ${q.belowTablet} { width: 36px; height: 36px; }
`,og=p.span`
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
`,iu=ot.out,rg=ot.fly,sg=8,fg=4,t0=Go/Za,dg=.38,hg=({revealed:s=!0})=>{const y=$m(),{scrollTo:T}=S0(),{isDark:f,toggleTheme:w}=A0(),E=Mt(),[O,C]=H.useState(!1);H.useEffect(()=>{const K=()=>C(J=>window.scrollY>(J?fg:sg));return K(),window.addEventListener("scroll",K,{passive:!0}),()=>window.removeEventListener("scroll",K)},[]);const _=H.useRef(null),M=Ke(0),N=Ke(0),j=Ke(t0),[L]=H.useState(()=>!s&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches);H.useLayoutEffect(()=>{const K=_.current;if(!K||!L)return;const J=K.getBoundingClientRect();J.width!==0&&(M.set(window.innerWidth/2-(J.left+J.width/2)),N.set(window.innerHeight/2-(J.top+J.height/2)),j.set(Math.min(Za,window.innerWidth*dg)/Za))},[]),H.useEffect(()=>{if(!s||!L)return;const K={duration:.8,ease:rg},J=ou(M,0,K),we=ou(N,0,K),Gt=ou(j,t0,K);return()=>{J.stop(),we.stop(),Gt.stop()}},[s]);const Q=(K,J)=>{K.preventDefault(),z0(T,J)},Y=0,P=K=>({initial:{opacity:0,y:E?0:8},animate:{opacity:s?1:0,y:s||E?0:8},transition:{duration:Ut.enter,delay:s?Y+K:0,ease:iu}});return o.jsx(Wm,{"aria-label":"Primary",children:o.jsxs(Fm,{children:[o.jsx(Im,{initial:{opacity:0},animate:{opacity:s?1:0},transition:{duration:Ut.enterLong,delay:s?Y:0,ease:iu}}),o.jsx(Pm,{initial:!1,animate:{opacity:O?1:0},transition:{duration:Ut.fill,ease:iu}}),o.jsx(tg,{ref:_,href:"#home",onClick:K=>Q(K,"home"),"aria-label":"Pranshu Nijhawan, back to top",whileHover:{scale:1.06},whileTap:{scale:.94},children:o.jsx(eg,{children:o.jsx(ag,{style:{x:M,y:N,scale:j},children:o.jsx(Km,{build:L})})})}),o.jsx(lg,{...P(.18),children:o.jsx(nm,{children:E0.map(K=>{const J=y===K.href;return o.jsxs(ng,{href:`#${K.href}`,$active:J,"aria-current":J?"true":void 0,onClick:we=>Q(we,K.href),whileTap:{scale:.95},children:[J&&o.jsx(ig,{layoutId:"nav-active",transition:{type:"spring",stiffness:480,damping:38,mass:.9}}),o.jsx(ug,{children:K.label})]},K.href)})})}),o.jsx(cg,{onClick:w,"aria-label":f?"Switch to light mode":"Switch to dark mode",title:f?"Light mode":"Dark mode",whileHover:{scale:1.06},whileTap:{scale:.94},...P(.26),children:o.jsx(og,{children:o.jsx(Nl,{initial:!1,children:o.jsx(R.span,{initial:{opacity:0,rotate:-30,scale:.85},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:30,scale:.85},transition:{opacity:{duration:Ut.control,ease:iu},rotate:ru,scale:ru},children:f?o.jsx(Cm,{}):o.jsx(Um,{})},f?"sun":"moon")})})})]})})},pg="3.0.5",mg=p.footer`
  position: relative;
  z-index: 1;
  padding: 40px 0 calc(96px + env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);
  ${q.tablet} { padding: 48px 0; }
`,gg=p.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  margin-top: 4px;
  padding-inline: var(--gutter);

  ${q.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,vg=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 14px;
`,e0=p.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,yg=p.span`
  font-family: ${lt.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
`,bg=()=>{const s=new Date().getFullYear();return o.jsx(mg,{children:o.jsx(gg,{children:o.jsxs(vg,{children:[o.jsx(e0,{}),o.jsxs(yg,{children:["© ",s," Pranshu Nijhawan • v",pg]}),o.jsx(e0,{})]})})})},a0=p(R.div)`
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
`,xg=p(R.div)`
  position: absolute;
  inset: 0;
  transform-origin: center 56%;
`,su=p(R.div)`
  position: absolute;
  inset: 0;
`,Qo=p(su)`
  will-change: transform, opacity;
`,l0=p(Qo)`
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
`,Sg=p(Qo)`
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
`,zg=p(Qo)`
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
`,Ag=p(su)``,Tg=p(R.span)`
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
`,n0=p(su)`
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
`,wg=p(su)`
  opacity: 0.055;
  background-size: 128px 128px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");

  [data-theme='light'] & { opacity: 0.03; }
`,jg=p(R.span)`
  position: absolute;
  left: 50%;
  bottom: max(28px, env(safe-area-inset-bottom));
  transform: translateX(-50%);
  font-family: ${lt.mono};
  font-size: 0.6875rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
  pointer-events: none;
`,_n=ot.out,Ro=s=>{let y=Math.imul(s^2654435769,2246822507);return y=Math.imul(y^y>>>13,3266489909),((y^y>>>16)>>>0)/4294967296},ko=148,Eg=({onComplete:s})=>{const y=Mt(),T=H.useMemo(()=>Array.from({length:14},(w,E)=>{const C=(E*9301+49297)%233280/233280,_=(E*4099+1)%977/977;return{left:6+Ro(E*3+1+ko)*88,top:18+Ro(E*3+2+ko)*68,size:1.4+Ro(E*3+3+ko)*3.6,delay:C*2.2,dur:5+C*5,drift:12+_*26}}),[]);H.useEffect(()=>{const w=setTimeout(s,y?500:Xm),E=()=>s();return window.addEventListener("keydown",E,{once:!0}),()=>{clearTimeout(w),window.removeEventListener("keydown",E)}},[y,s]);const f={onClick:s,role:"button",tabIndex:0,"aria-label":"Skip intro"};return y?o.jsxs(a0,{...f,initial:{opacity:1},exit:{opacity:0,transition:{duration:.4}},children:[o.jsx(l0,{animate:{opacity:.8}}),o.jsx(n0,{})]}):o.jsxs(a0,{...f,initial:{opacity:1},exit:{opacity:0,transition:{duration:.75,ease:_n}},children:[o.jsxs(xg,{initial:{scale:1.12},animate:{scale:1},transition:{duration:4,ease:_n},children:[o.jsx(l0,{initial:{opacity:0,scale:.7},animate:{opacity:[0,1,.82,1],scale:[.7,1.02,.99,1.02]},transition:{duration:4.2,times:[0,.32,.66,1],ease:"easeInOut",repeat:1/0,repeatType:"mirror"}}),o.jsx(Sg,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:1.8,ease:_n}}),o.jsx(zg,{initial:{opacity:0,scaleX:.6},animate:{opacity:1,scaleX:1},transition:{duration:2,delay:.4,ease:_n}}),o.jsx(Ag,{children:T.map((w,E)=>o.jsx(Tg,{style:{left:`${w.left}%`,top:`${w.top}%`,width:w.size,height:w.size},initial:{opacity:0,y:0},animate:{opacity:[0,.8,0],y:[-w.drift*.3,-w.drift]},transition:{duration:w.dur,delay:w.delay,ease:"easeInOut",repeat:1/0,repeatType:"loop"}},E))})]}),o.jsx(n0,{}),o.jsx(wg,{}),o.jsx(jg,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.7,ease:_n},children:"Tap to skip"})]})},i0=v0(200,.6),u0=v0(200),uu=3,c0=new Map;function D0(s){let y=c0.get(s);return y||(y=typeof s=="string"?R[s]:R.create(s),c0.set(s,y)),y}const Mg=(s,y)=>{switch(s){case"up":return{y};case"down":return{y:-y};case"left":return{x:y};case"right":return{x:-y};default:return{}}},Aa=({children:s,as:y="div",delay:T=0,dist:f=28,dir:w="up",blur:E=!0,amount:O=.3,once:C=!0,className:_,style:M})=>Mt()?H.createElement(y,{className:_,style:M},s):H.createElement(D0(y),{className:_,style:M,initial:{opacity:0,...Mg(w,f),filter:E?"blur(10px)":"blur(0px)"},whileInView:{opacity:1,x:0,y:0,filter:"blur(0px)"},viewport:{once:C,amount:O},transition:{duration:Ut.enterLong,delay:T,ease:ot.out}},s),Yo=({text:s,as:y="span",className:T,delay:f=0,stagger:w=.045,once:E=!0,amount:O=.4})=>{const C=Mt(),_=s.split(" ");if(C)return H.createElement(y,{className:T},s);const M=_.map((N,j)=>o.jsx("span",{"aria-hidden":!0,style:{display:"inline-block",overflow:"hidden",verticalAlign:"top",paddingBottom:"0.12em"},children:o.jsxs(R.span,{style:{display:"inline-block"},variants:{hidden:{y:"110%",opacity:0,filter:"blur(8px)"},visible:{y:"0%",opacity:1,filter:"blur(0px)",transition:{duration:Ut.enterLong,ease:ot.out}}},children:[N,j<_.length-1?" ":""]})},`${N}-${j}`));return H.createElement(D0(y),{className:T,initial:"hidden",whileInView:"visible",viewport:{once:E,amount:O},variants:{hidden:{},visible:{transition:{staggerChildren:w,delayChildren:f}}}},o.jsx("span",{style:Dg,children:s},"sr"),...M)},Dg={position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0 0 0 0)",whiteSpace:"nowrap",border:0},O0=({children:s,strength:y=.35,className:T,...f})=>{const w=Mt(),E=H.useRef(null),O=Ke(0),C=Ke(0),_=Ja(O,i0),M=Ja(C,i0),N=L=>{if(w||!E.current)return;const Q=E.current.getBoundingClientRect();O.set((L.clientX-(Q.left+Q.width/2))*y),C.set((L.clientY-(Q.top+Q.height/2))*y)},j=()=>{O.set(0),C.set(0)};return o.jsx(R.div,{ref:E,className:T,onMouseMove:N,onMouseLeave:j,style:{x:w?0:_,y:w?0:M,display:"inline-block"},...f,children:s})},C0=({children:s,className:y,max:T=9,glare:f=!0})=>{const w=Mt(),E=H.useRef(null),O=Ke(0),C=Ke(0),_=Ke(0),M=Ke(0),N=Ja(O,u0),j=Ja(C,u0),L=Y=>{if(w||!E.current)return;const P=E.current.getBoundingClientRect(),K=(Y.clientX-P.left)/P.width,J=(Y.clientY-P.top)/P.height;C.set((K-.5)*T*2),O.set(-(J-.5)*T*2),_.set((K-.5)*P.width),M.set((J-.5)*P.height)},Q=()=>{O.set(0),C.set(0),_.set(0),M.set(0)};return o.jsxs(R.div,{ref:E,className:y,onMouseMove:L,onMouseLeave:Q,style:{rotateX:w?0:N,rotateY:w?0:j,transformStyle:"preserve-3d",transformPerspective:900,position:"relative"},children:[s,f&&!w&&o.jsx("span",{"aria-hidden":!0,style:{position:"absolute",inset:0,borderRadius:"inherit",overflow:"hidden",pointerEvents:"none"},children:o.jsx(R.span,{style:{position:"absolute",top:`${-100*(uu-1)/2}%`,left:`${-100*(uu-1)/2}%`,width:`${uu*100}%`,height:`${uu*100}%`,background:"radial-gradient(circle at 50% 50%, rgba(var(--accent-rgb),0.18), transparent 18%)",x:_,y:M}})})]})};function Og(s=80){const y=H.useRef(null),T=Mt(),{scrollYProgress:f}=Nn({target:y,offset:["start end","end start"]}),w=Ka(f,[0,1],[s,-s]);return{ref:y,y:T?0:w}}const Cg=({to:s,suffix:y="",prefix:T="",duration:f=1.6,className:w,play:E=!0})=>{const O=Mt(),C=H.useRef(null),_=H.useRef(null),M=m0(C,{once:!0,amount:.6});return H.useEffect(()=>{if(!M||!E)return;const N=_.current;if(!N)return;let j=-1;const L=ou(0,s,{duration:O?.001:f,ease:ot.out,onUpdate:Q=>{const Y=Math.round(Q);Y!==j&&(j=Y,N.textContent=String(Y))}});return()=>L.stop()},[M,E,s,f,O]),o.jsxs("span",{ref:C,className:w,children:[T,o.jsx("span",{ref:_,children:"0"}),y]})},Ug=p.section`
  position: relative;
  z-index: 1;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${q.belowTablet} {
    min-height: auto;
    justify-content: flex-start;
  }
`,_g=p(R.div)`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  padding-top: clamp(120px, 18vh, 200px);
  padding-bottom: clamp(48px, 8vh, 96px);

  ${q.belowTablet} {
    padding-top: clamp(40px, 11vw, 72px);
    padding-bottom: 24px;
  }

  ${q.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,Bg=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;

  ${q.belowTablet} {
    gap: 12px;
  }

  ${q.tablet} {
    grid-template-columns: 1.08fr 0.92fr;
  }
`,Hg=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Ng=p.h1`
  font-family: ${lt.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.045em;
  line-height: 0.88;
  font-size: clamp(54px, 9.5vw, 116px);
  margin-bottom: 26px;
`,o0=p.span`
  display: block;
  overflow: hidden;
  padding-bottom: 0.06em;
`,Rg=p(R.p)`
  font-family: ${lt.display};
  font-weight: 500;
  font-size: clamp(19px, 2.5vw, 27px);
  letter-spacing: -0.02em;
  line-height: 1.12;
  color: var(--ink);
  margin-bottom: 22px;

  em { font-style: normal; color: var(--accent-ink); }
`,kg=p(R.p)`
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
`,qg=p(R.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`,Gg=p(R.a)`
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
  ${q.hover} {
    &:hover svg { transform: translateX(4px); }
  }
`,Yg=p(R.a)`
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
  ${q.hover} {
    &:hover svg { transform: translate(2px, -2px); }
  }
`,Lg=p(R.div)`
  position: relative;
  display: flex;
  justify-content: center;
  ${q.belowTablet} { order: -1; }
`,Xg=p.div`
  position: relative;
  width: min(440px, 78vw);
  aspect-ratio: 1 / 1;
`,Qg=p.div`
  position: absolute;
  inset: 4% 6% 2% 6%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(var(--accent-rgb), 0.13), transparent 72%);
  filter: blur(48px);
  z-index: -1;
`,Vg=p.div`
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
`,Zg=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`,Kg=p.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  padding-bottom: clamp(40px, 7vh, 88px);

  ${q.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,Jg=p(R.ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(28px, 4vw, 60px);
  list-style: none;
  margin: 0;
  padding: 0;

  ${q.mobile} { grid-template-columns: repeat(4, 1fr); }
`,$g=p(R.li)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Wg=p(R.span)`
  height: 2px;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 10px;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 12%, transparent));
`,Fg=p.span`
  font-family: ${lt.display};
  font-weight: 600;
  font-size: clamp(34px, 5vw, 56px);
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1;
`,Ig=p.span`
  font-family: ${lt.mono};
  font-size: 11.5px;
  color: var(--ink-3);
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,Pg=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),tv=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),ev=[{to:10,prefix:"",suffix:"+",label:"Years"},{to:65,prefix:"",suffix:"+",label:"Engineers Led"},{to:2,prefix:"$",suffix:"M+",label:"Savings"},{to:15,prefix:"",suffix:"+",label:"Products"}],av=({data:s,start:y=!0})=>{const T=Mt(),{scrollTo:f}=S0(),{ref:w,y:E}=Og(56),O=H.useRef(null),{scrollYProgress:C}=Nn({target:O,offset:["start start","end start"]}),_=Ka(C,[0,1],[0,-110]),M=Ka(C,[0,.75],[1,0]),[N,...j]=s.name.split(" "),L=j.join(" "),Q=0,Y=ot.out,P=J=>({initial:T?{opacity:0}:{y:"110%"},animate:y?T?{opacity:1}:{y:"0%"}:T?{opacity:0}:{y:"110%"},transition:{duration:.9,delay:y?Q+J:0,ease:ot.out}}),K=J=>({initial:T?{opacity:0}:{opacity:0,y:18,filter:"blur(8px)"},animate:y?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:T?0:18,filter:T?"blur(0px)":"blur(8px)"},transition:{duration:Ut.enterLong,delay:y?Q+J:0,ease:ot.out}});return o.jsxs(Ug,{id:"home",ref:O,children:[o.jsx(_g,{style:T?void 0:{y:_,opacity:M},children:o.jsxs(Bg,{children:[o.jsxs(Hg,{children:[o.jsxs(Ng,{"aria-label":s.name,children:[o.jsx(o0,{"aria-hidden":!0,children:o.jsx(R.span,{style:{display:"block"},...P(.15),children:N})}),o.jsx(o0,{"aria-hidden":!0,children:o.jsx(R.span,{style:{display:"block",color:"var(--accent-ink)"},...P(.27),children:L})})]}),o.jsx(Rg,{...K(.34),children:s.designation}),o.jsxs(kg,{...K(.45),children:["Enterprise Architect of"," ",o.jsx("a",{href:"https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview",target:"_blank",rel:"noopener noreferrer",children:"Periscope"}),"'s"," ",o.jsx("a",{href:"https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance",target:"_blank",rel:"noopener noreferrer",children:"Promotion Advisor"})," ","at"," ",o.jsx("a",{href:"https://www.linkedin.com/company/mckinsey/",target:"_blank",rel:"noopener noreferrer",children:"McKinsey"}),", building agentic AI and high-throughput data platforms."]}),o.jsxs(qg,{...K(.58),children:[o.jsx(O0,{strength:.4,style:{display:"inline-block"},children:o.jsxs(Gg,{href:"#contact",onClick:J=>{J.preventDefault(),z0(f,"contact")},whileHover:{scale:1.04},whileTap:{scale:.97},children:["Get in touch ",o.jsx(Pg,{})]})}),o.jsxs(Yg,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.97},children:[o.jsx(tv,{})," Download resume"]})]})]}),o.jsx(Lg,{ref:w,style:{y:E},children:o.jsx(R.div,{initial:T?{opacity:0}:{opacity:0,scale:.92,filter:"blur(14px)"},animate:y?{opacity:1,scale:1,filter:"blur(0px)"}:{opacity:0},transition:{duration:1,delay:y?Q+.4:0,ease:ot.out},children:o.jsx(C0,{max:6,glare:!1,children:o.jsxs(Xg,{children:[o.jsx(Qg,{}),o.jsx(Vg,{children:o.jsx(Zg,{src:"/images/profile.webp",alt:s.name,width:440,height:440,loading:"eager",decoding:"async"})})]})})})})]})}),o.jsx(Kg,{children:o.jsx(Jg,{initial:T?!1:"hidden",animate:T?void 0:y?"visible":"hidden",variants:{hidden:{},visible:{transition:{staggerChildren:.12,delayChildren:Q+.2}}},children:ev.map(J=>o.jsxs($g,{variants:{hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.6,ease:Y}}},children:[o.jsx(Wg,{variants:{hidden:{scaleX:0},visible:{scaleX:1,transition:{duration:.8,ease:Y}}}}),o.jsx(Fg,{children:o.jsx(Cg,{to:J.to,prefix:J.prefix,suffix:J.suffix,play:y})}),o.jsx(Ig,{children:J.label})]},J.label))})})]})},r0={prose:"var(--maxw-prose)",content:"var(--maxw-content)",wide:"var(--maxw-wide)",full:"var(--maxw-full)"},Ta=p.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,wa=p.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--gutter);
  max-width: calc(${({$max:s="content"})=>r0[s]} + var(--gutter) * 2);

  ${q.desktop} {
    max-width: calc((100vw + ${({$max:s="content"})=>r0[s]} + var(--gutter) * 2) / 2);
  }
`,lv=p.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${lt.mono};
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
`,nv=p.h2`
  font-family: ${lt.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.03em;
  line-height: 0.98;
  font-size: clamp(38px, 7vw, 84px);
`,iv=p.p`
  color: var(--ink-2);
  font-size: clamp(17px, 2.1vw, 21px);
  line-height: 1.6;
  max-width: 60ch;
`,uv=p.span`
  display: block;
  height: 2px;
  width: 64px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-hot));
  transform-origin: left;
`,cv=p(R.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 56px;
  align-items: ${({$align:s})=>s==="center"?"center":"flex-start"};
  text-align: ${({$align:s})=>s==="center"?"center":"left"};
  ${q.tablet} { margin-bottom: 80px; }
`,Je=({title:s,kicker:y,lead:T,align:f="left",leadFull:w=!1})=>{const E=Mt(),O=H.useRef(null),C=m0(O,{margin:"20% 0px 20% 0px"}),{scrollYProgress:_}=Nn({target:O,offset:["start end","end start"]}),M=Ka(_,[0,1],[30,-30]);return o.jsxs(cv,{ref:O,$align:f,style:E?void 0:{y:C?M:0},children:[y&&o.jsx(R.div,{initial:E?!1:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.6},transition:{duration:Ut.frame,ease:ot.out},children:o.jsx(lv,{children:y})}),o.jsx(Yo,{as:nv,text:s}),o.jsx(R.div,{style:{transformOrigin:f==="center"?"center":"left"},initial:E?!1:{scaleX:0,opacity:0},whileInView:{scaleX:1,opacity:1},viewport:{once:!0,amount:.6},transition:{duration:Ut.enterLong,delay:.15,ease:ot.out},children:o.jsx(uv,{})}),T&&o.jsx(R.div,{initial:E?!1:{opacity:0,y:16,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.5},transition:{duration:Ut.enterLong,delay:.2,ease:ot.out},children:o.jsx(iv,{style:{...f==="center"?{marginInline:"auto"}:{},...w?{maxWidth:"none"}:{}},children:T})})]})},ov=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}],rv=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 8px;

  ${q.tablet} {
    grid-template-columns: 0.42fr 0.58fr;
    gap: 80px;
  }
`,sv=p.div`
  ${q.tablet} { position: sticky; top: 120px; height: max-content; }
`,fv=p.span`
  font-family: ${lt.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-ink);
  display: block;
  margin-bottom: 18px;
`,dv=p.p`
  font-family: ${lt.display};
  font-weight: 500;
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--ink);
`,hv=p.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  p {
    font-size: clamp(16px, 1.8vw, 18px);
    line-height: 1.75;
    color: var(--ink-2);
    max-width: 65ch;
  }
`,pv=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 72px;

  ${q.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }
`,Vo=p.div`
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
  ${q.hover} {
    &:hover::before { transform: scaleX(1); }
  }

  ${q.tablet} {
    &:first-child { grid-row: span 2; }
  }
`,mv=p.span`
  font-family: ${lt.mono};
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--accent-ink);
`,gv=p.h3`
  font-family: ${lt.display};
  font-size: clamp(18px, 1.9vw, 21px);
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  line-height: 1.2;

  ${Vo}:first-child & {
    ${q.tablet} { font-size: clamp(22px, 2.6vw, 28px); }
  }
`,vv=p.p`
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ink-3);

  ${Vo}:first-child & {
    ${q.tablet} { font-size: 15.5px; }
  }
`,yv=p.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`,bv=p(R.a)`
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
  ${q.hover} {
    &:hover svg { transform: translateY(2px); }
  }
`,xv=({data:s})=>{const y=s.content.slice(0,3).map(T=>T.replace(/^🔹\s*/,"").trim());return o.jsx(Ta,{id:"about",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(Je,{title:"About",lead:y[0],leadFull:!0}),o.jsxs(rv,{children:[o.jsx(sv,{children:o.jsxs(Aa,{dir:"up",children:[o.jsx(fv,{children:"The throughline"}),o.jsx(dv,{children:"Technical depth, measured in business outcomes."})]})}),o.jsxs(hv,{children:[o.jsx(Aa,{dir:"up",delay:.05,children:o.jsx("p",{children:y[1]})}),o.jsx(Aa,{dir:"up",delay:.12,children:o.jsx("p",{children:y[2]})})]})]}),o.jsx(pv,{children:ov.map((T,f)=>o.jsxs(Aa,{as:Vo,dir:"up",delay:f*.08,children:[o.jsx(mv,{children:String(f+1).padStart(2,"0")}),o.jsx(gv,{children:T.title}),o.jsx(vv,{children:T.text})]},T.title))}),o.jsx(yv,{children:o.jsx(O0,{strength:.3,style:{display:"inline-block"},children:o.jsxs(bv,{href:s.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.04},whileTap:{scale:.97},children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),s.buttonProps.name]})})})]})})},s0=ot.out,Sv=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 5vh, 64px) clamp(48px, 6vw, 96px);
  margin-top: clamp(40px, 6vh, 72px);

  ${q.tablet} { grid-template-columns: repeat(2, 1fr); }
`,zv=p(R.div)`
  display: flex;
  flex-direction: column;
`,Av=p.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px solid var(--line);
`,Tv=p.h3`
  font-family: ${lt.display};
  font-size: clamp(18px, 2vw, 23px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.1;
`,wv=p.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,jv=p.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`,Ev=p.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,Mv=p.span`
  font-size: 14.5px;
  color: var(--ink);
  line-height: 1.25;
`,Dv=p.span`
  font-family: ${lt.mono};
  font-size: 12.5px;
  color: var(--ink-3);
  flex-shrink: 0;
`,Ov=p.div`
  position: relative;
  height: 4px;
  border-radius: 4px;
  background: var(--line);
  overflow: hidden;
`,Cv=p(R.span)`
  position: absolute;
  inset: 0;
  border-radius: 4px;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), var(--accent-ink));
`,Uv=({data:s})=>{const y=Mt();return o.jsx(Ta,{id:"technologyproficiency",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(Je,{title:"Skills",lead:"The stack behind agentic AI systems, billion-row analytics, and platforms that stay up while they scale."}),o.jsx(Sv,{children:s.skills.map(T=>o.jsxs(zv,{initial:y?!1:{opacity:0,y:26},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6,ease:s0},children:[o.jsx(Av,{children:o.jsx(Tv,{children:T.category})}),o.jsx(wv,{children:T.skills.map((f,w)=>o.jsxs(jv,{children:[o.jsxs(Ev,{children:[o.jsx(Mv,{children:f.name}),o.jsxs(Dv,{children:[f.percentage,"%"]})]}),o.jsx(Ov,{children:o.jsx(Cv,{initial:y?{scaleX:f.percentage/100}:{scaleX:0},whileInView:{scaleX:f.percentage/100},viewport:{once:!0,amount:.8},transition:{duration:.9,delay:.1+w*.06,ease:s0}})})]},f.name))})]},T.category))})]})})},_v=p.div`
  position: relative;
  padding-left: 30px;
  ${q.tablet} { padding-left: 220px; }
`,Bv=p.span`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: var(--line);
  ${q.tablet} { left: 188px; }
`,Hv=p(R.span)`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: linear-gradient(var(--accent), var(--accent-hot));
  transform-origin: top;
  ${q.tablet} { left: 188px; }
`,Nv=p(R.div)`
  position: relative;
  padding: 0 0 56px;
  &:last-child { padding-bottom: 0; }
`,Rv=p.span`
  position: absolute;
  top: 7px;
  left: -30px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-elev);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 4px var(--bg), 0 0 14px rgba(var(--accent-rgb), 0.5);
  ${q.tablet} { left: -38px; }
`,kv=p.span`
  font-family: ${lt.mono};
  font-size: 13px;
  color: var(--ink-3);
  letter-spacing: 0.02em;
  display: block;
  margin-bottom: 8px;

  ${q.tablet} {
    position: absolute;
    left: -220px;
    top: 4px;
    width: 168px;
    text-align: right;
    margin-bottom: 0;
  }
`,qv=p.h3`
  font-family: ${lt.display};
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
    ${q.hover} {
      &:hover::after { transform: scaleX(1); }
    }
  }
`,Gv=p.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--accent-ink);
  margin-bottom: 2px;
`,Yv=p.p`
  font-size: 13.5px;
  color: var(--ink-3);
  font-style: italic;
  margin-bottom: 16px;
`,Lv=p.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--ink-2);

  a { color: var(--accent-ink); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--line-2); }
  a:hover { text-decoration-color: var(--accent); }
`,Xv=p.button`
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
`,Qv=p.span`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  vertical-align: bottom;
`,Vv=p(R.span)`
  display: inline-block;
  white-space: nowrap;
`,Zv=p(R.div)`
  display: grid;
  overflow: hidden;
`,Kv=p.div`
  min-height: 0;
  overflow: hidden;
`,Jv=p.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
`,$v=p.li`
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
`,Wv=({data:s})=>{const y=Mt(),T=H.useRef(null),[f,w]=H.useState(new Set),{scrollYProgress:E}=Nn({target:T,offset:["start 60%","end 60%"]}),O=Ka(E,[0,1],[0,1]),C=Ja(O,g0),_=M=>w(N=>{const j=new Set(N);return j.has(M)?j.delete(M):j.add(M),j});return o.jsx(Ta,{id:"professionalexperience",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(Je,{title:"Experience",lead:"A decade across enterprise SaaS, from shipping features to owning platform architecture for global consulting clients."}),o.jsxs(_v,{ref:T,children:[o.jsx(Bv,{}),!y&&o.jsx(Hv,{style:{scaleY:C}}),s.timeline.map((M,N)=>{const j=f.has(N);return o.jsxs(Nv,{initial:y?!1:{opacity:0,x:-24,filter:"blur(6px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:Ut.enter,ease:ot.out},children:[o.jsx(Rv,{}),o.jsx(kv,{children:M.date}),o.jsx(qv,{children:o.jsx("a",{href:M.url,target:"_blank",rel:"noopener noreferrer",children:M.title})}),o.jsx(Gv,{children:M.subTitle}),M.previously&&o.jsxs(Yv,{children:["Previously: ",M.previously]}),o.jsx(Lv,{dangerouslySetInnerHTML:{__html:M.descriptionSummary}}),M.achievements&&M.achievements.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs(Xv,{"data-open":j,onClick:()=>_(N),"aria-expanded":j,children:[o.jsx("span",{children:"Show"}),o.jsx(Qv,{children:o.jsx(Nl,{mode:"popLayout",initial:!1,children:o.jsx(Vv,{initial:{y:"100%",opacity:0},animate:{y:"0%",opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:Ut.surface,ease:ot.out},children:j?"Less":"More"},j?"less":"more")})}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M6 9l6 6 6-6"})})]}),o.jsx(Nl,{initial:!1,children:j&&o.jsx(Zv,{initial:{gridTemplateRows:"0fr",opacity:0},animate:{gridTemplateRows:"1fr",opacity:1},exit:{gridTemplateRows:"0fr",opacity:0},transition:{gridTemplateRows:{duration:.45,ease:ot.out},opacity:{duration:Ut.surface,ease:ot.out}},children:o.jsx(Kv,{children:o.jsx(Jv,{children:M.achievements.map((L,Q)=>o.jsxs($v,{children:[o.jsx("strong",{children:L.title}),": ",L.description]},Q))})})})})]})]},N)})]})]})})};function Fv(s){const y=H.useCallback(w=>{const E=window.matchMedia(s);return E.addEventListener("change",w),()=>E.removeEventListener("change",w)},[s]),T=H.useCallback(()=>window.matchMedia(s).matches,[s]),f=H.useCallback(()=>!1,[]);return H.useSyncExternalStore(y,T,f)}const U0=p.div`
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
  ${q.hover} {
    &:hover::before { transform: scaleX(1); }
  }
`,Iv=p.h3`
  font-family: ${lt.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.12;
  margin-bottom: 20px;
`,Pv=p.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;
`,t1=p.li`
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
`,e1=p.section`
  position: relative;
  --rail: max(var(--gutter), calc((100vw - var(--maxw-wide)) / 2));

  ${q.desktop} {
    --rail: calc((100vw - var(--maxw-wide) - var(--gutter) * 2) / 4 + var(--gutter));
  }
`,a1=p.div`
  position: sticky;
  top: 0;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`,l1=p.div`
  padding-inline: var(--rail);
  margin: 0 0 40px;
  width: 100%;
`,n1=p(R.div)`
  display: flex;
  gap: 26px;
  padding: 0 var(--rail) 8px;
  will-change: transform;

  ${U0} { width: min(440px, 82vw); }
`,i1=p.div`
  margin: 30px var(--rail) 0;
  height: 2px;
  background: var(--line);
  border-radius: 2px;
  overflow: hidden;
`,u1=p(R.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-hot));
  transform-origin: left;
`,c1=p.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,o1=p.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);

  ${q.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,r1=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${q.mobile} { grid-template-columns: repeat(2, 1fr); }
`,_0=({title:s,content:y})=>o.jsxs(U0,{children:[o.jsx(Iv,{children:s}),o.jsx(Pv,{children:y.slice(0,4).map((T,f)=>o.jsx(t1,{children:T},f))})]}),B0="The systems I would put my name on, with the numbers that came with them.",f0=g0,s1=({data:s})=>{const y=H.useRef(null),T=H.useRef(null),[f,w]=H.useState(0),{scrollYProgress:E}=Nn({target:y,offset:["start start","end end"]}),O=Ka(E,[0,1],[0,-f]),C=Ka(E,[0,1],[0,1]),_=Ja(O,f0),M=Ja(C,f0);return H.useLayoutEffect(()=>{const N=()=>{const j=T.current;j&&w(Math.max(0,j.scrollWidth-window.innerWidth+48))};return N(),window.addEventListener("resize",N,{passive:!0}),()=>window.removeEventListener("resize",N)},[]),o.jsx(e1,{id:"mostproudof",ref:y,style:{height:`calc(100dvh + ${f}px)`},children:o.jsxs(a1,{children:[o.jsx(l1,{children:o.jsx(Je,{title:"Most Proud Of",lead:B0})}),o.jsx(n1,{ref:T,style:{x:_},children:s.content.map(N=>o.jsx(_0,{title:N.title,content:N.content},N.id))}),o.jsx("div",{style:{width:"100%"},children:o.jsx(i1,{children:o.jsx(u1,{style:{scaleX:M}})})})]})})},f1=({data:s})=>o.jsx(c1,{id:"mostproudof",children:o.jsxs(o1,{children:[o.jsx(Je,{title:"Most Proud Of",lead:B0}),o.jsx(r1,{children:s.content.map((y,T)=>o.jsx(Aa,{dir:"up",delay:T%2*.06,children:o.jsx(_0,{title:y.title,content:y.content})},y.id))})]})}),d1=({data:s})=>{const y=Mt();return Fv("(min-width: 1024px)")&&!y?o.jsx(s1,{data:s}):o.jsx(f1,{data:s})},h1=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${q.mobile} { grid-template-columns: repeat(3, 1fr); gap: 20px; }
`,p1=p(R.div)`
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
`,m1=p.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${lt.mono};
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--accent-ink);
  margin-bottom: 18px;

  span.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
`,g1=p.h3`
  font-family: ${lt.display};
  font-size: clamp(18px, 1.8vw, 21px);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: var(--ink);
  margin-bottom: auto;
`,v1=p.a`
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
  ${q.hover} {
    &:hover svg { transform: translate(2px, -2px); }
  }
  &:active { transform: scale(0.96); }
`,y1=s=>{const y=s.toLowerCase();return y.includes("azure")||y.includes("microsoft")?"Microsoft":y.includes("aws")?"Amazon Web Services":"Credential"},b1=({data:s})=>{const y=Mt();return o.jsx(Ta,{id:"certifications",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(Je,{title:"Certifications",lead:"Cloud and data credentials across Azure and AWS, kept current."}),o.jsx(h1,{children:s.certificateProps.certificateMetaData.map((T,f)=>o.jsx(C0,{max:9,children:o.jsxs(p1,{initial:y?!1:{opacity:0,y:28,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.3},transition:{duration:Ut.enter,delay:f*.1,ease:ot.out},children:[o.jsxs(m1,{children:[o.jsx("span",{className:"dot"}),y1(T.title)]}),o.jsx(g1,{children:T.title}),o.jsxs(v1,{href:T.buttonProps.link,target:"_blank",rel:"noopener noreferrer",children:["Verify credential",o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),o.jsx("path",{d:"M15 3h6v6M10 14L21 3"})]})]})]})},f))})]})})},cu=ot.out,x1=7e3,S1=28,d0=8,z1={duration:Ut.fill,ease:ot.out},h0=90,A1=80,T1=p.div`
  max-width: 900px;
`,w1=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`,j1=p.span`
  font-family: ${lt.mono};
  font-size: 12.5px;
  letter-spacing: 0.14em;
  color: var(--ink-3);

  em { font-style: normal; color: var(--accent-ink); }
`,E1=p.div`
  display: flex;
  gap: 10px;
`,p0=p(R.button)`
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
`,M1=p.div`
  position: relative;
`,D1=p(R.figure)`
  will-change: transform, opacity;
  cursor: grab;
  &:active { cursor: grabbing; }
`,O1=p.blockquote`
  position: relative;
  padding-left: clamp(22px, 3vw, 38px);
  font-family: ${lt.display};
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
`,C1=p.figcaption`
  margin-top: clamp(30px, 4.5vh, 48px);
  padding-left: clamp(22px, 3vw, 38px);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,U1=p.span`
  font-weight: 600;
  font-size: 16px;
  color: var(--ink);
`,_1=p.span`
  font-size: 14px;
  color: var(--ink-3);

  em {
    font-style: normal;
    font-family: ${lt.mono};
    font-size: 11.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-ink);
  }
`,B1=p.div`
  display: flex;
  gap: 10px;
  margin-top: clamp(34px, 5vh, 48px);
  padding-left: clamp(22px, 3vw, 38px);
`,H1=p(R.button)`
  height: ${d0}px;
  width: ${({$active:s})=>s?S1:d0}px;
  flex-shrink: 0;
  background: ${({$active:s})=>s?"var(--accent)":"var(--line-2)"};
  transition: background var(--dur-feedback) var(--ease-out);

  ${q.hover} {
    &:hover { background: ${({$active:s})=>s?"var(--accent)":"var(--ink-3)"}; }
  }
`,N1=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M15 6l-6 6 6 6"})}),R1=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 6l6 6-6 6"})}),k1=({data:s})=>{const y=Mt(),T=s.quoteProps.quoteMetaData,f=T.length,[w,E]=H.useState({index:0,dir:0,from:0,velocity:0}),[O,C]=H.useState(!1),_=H.useCallback((Q,Y,P=0,K=0)=>{E({index:(Q%f+f)%f,dir:Y,from:P,velocity:K})},[f]),M=H.useCallback(Q=>_(w.index+Q,Q),[_,w.index]);if(H.useEffect(()=>{if(y||f<=1||O)return;const Q=setInterval(()=>E(Y=>({index:(Y.index+1)%f,dir:1,from:0,velocity:0})),x1);return()=>clearInterval(Q)},[y,f,O]),f===0)return null;const N=T[w.index],j=f>1,L={enter:({dir:Q})=>({opacity:0,x:y?0:Q*48,filter:"blur(8px)"}),center:{opacity:1,x:0,filter:"blur(0px)",transition:{x:y?{duration:0}:ru,opacity:{duration:.4,ease:cu},filter:{duration:.4,ease:cu}}},exit:({dir:Q,from:Y,velocity:P})=>({opacity:0,x:y?0:Q>0?Math.min(Y-64,-96):Math.max(Y+64,96),filter:"blur(8px)",transition:{x:y?{duration:0}:{...Math.abs(P)>A1?mm:ru,velocity:P},opacity:{duration:.3,ease:cu},filter:{duration:.3,ease:cu}}})};return o.jsx(Ta,{id:"testimonials",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(Je,{title:"Testimonials",lead:"Words from people I have built alongside."}),o.jsxs(T1,{onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),onFocusCapture:()=>C(!0),onBlurCapture:()=>C(!1),children:[j&&o.jsxs(w1,{children:[o.jsxs(j1,{children:[o.jsx("em",{children:String(w.index+1).padStart(2,"0")})," / ",String(f).padStart(2,"0")]}),o.jsxs(E1,{children:[o.jsx(p0,{onClick:()=>M(-1),"aria-label":"Previous testimonial",whileTap:{scale:.92},children:o.jsx(N1,{})}),o.jsx(p0,{onClick:()=>M(1),"aria-label":"Next testimonial",whileTap:{scale:.92},children:o.jsx(R1,{})})]})]}),o.jsx(M1,{"aria-live":"polite","aria-roledescription":"carousel",children:o.jsx(Nl,{mode:"popLayout",custom:w,initial:!1,children:o.jsxs(D1,{custom:w,variants:L,initial:"enter",animate:"center",exit:"exit",drag:j&&!y?"x":!1,dragConstraints:{left:0,right:0},dragElastic:1,dragMomentum:!1,dragTransition:{bounceStiffness:400,bounceDamping:40},onDragStart:()=>C(!0),onDragEnd:(Q,Y)=>{C(!1);const P=Y.offset.x+gm(Y.velocity.x);P<=-h0?_(w.index+1,1,Y.offset.x,Y.velocity.x):P>=h0&&_(w.index-1,-1,Y.offset.x,Y.velocity.x)},children:[o.jsxs(O1,{children:["“",N.quote,"”"]}),o.jsxs(C1,{children:[o.jsx(U1,{children:N.givenBy}),o.jsxs(_1,{children:[N.subTitleGivenBy,N.source&&o.jsxs(o.Fragment,{children:["  ·  ",o.jsxs("em",{children:["via ",N.source]})]})]})]})]},w.index)})}),j&&o.jsx(B1,{role:"tablist","aria-label":"Select testimonial",children:T.map((Q,Y)=>o.jsx(H1,{layout:!y,transition:z1,style:{borderRadius:999},whileTap:{scaleY:1.6},$active:Y===w.index,onClick:()=>_(Y,Y>w.index?1:-1),role:"tab","aria-selected":Y===w.index,"aria-label":`Testimonial ${Y+1}`},Y))})]})]})})},q1="7253276225333293056",G1=`https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${q1}`,Y1="https://www.linkedin.com/posts/mckinsey-india_mckinseycareer-journeypranshu-ugcPost-7253276225333293056-sdOl/",L1=p.div`
  position: relative;
  max-width: 560px;
  border-radius: var(--r-xl);
  border: 1px solid var(--line);
  background: var(--surface);
  overflow: hidden;
  transition: border-color var(--dur-surface) var(--ease-out), background var(--dur-surface) var(--ease-out);

  &:hover { border-color: var(--line-2); }
`,X1=p.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
`,Q1=p.span`
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
`,V1=p.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,Z1=p.span`
  font-family: ${lt.mono};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
`,K1=p.span`
  font-family: ${lt.display};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
`,J1=p.a`
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
  ${q.hover} {
    &:hover svg { transform: translate(3px, -3px); }
  }
  &:active { transform: scale(0.96); }

  ${q.belowMobile} {
    span { display: none; }
    padding: 8px;
  }
`,$1=p.div`
  position: relative;
  height: 640px;
  background: #ffffff;

  ${q.belowMobile} { height: 600px; }
`,W1=p.iframe`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  opacity: ${({$loaded:s})=>s?1:0};
  transition: opacity var(--dur-frame) var(--ease-out);
`,F1=om`
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
`,I1=p(R.div)`
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
`,P1=p.div`
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
    animation: ${({$reduce:s})=>s?"none":F1} 1.4s linear infinite;
  }
`,ty=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M7 17L17 7M9 7h8v8"})}),ey=()=>{const s=Mt(),y=H.useRef(null),[T,f]=H.useState(!1),[w,E]=H.useState(!1);return H.useEffect(()=>{const O=y.current;if(!O)return;const C=new IntersectionObserver(([_])=>{_.isIntersecting&&(f(!0),C.disconnect())},{rootMargin:"400px 0px"});return C.observe(O),()=>C.disconnect()},[]),o.jsx(Ta,{id:"featured",children:o.jsxs(wa,{$max:"content",children:[o.jsx(Je,{title:"Featured",lead:"McKinsey India on my journey building AI-driven, forward-thinking solutions for clients across industries."}),o.jsx(Aa,{dir:"up",children:o.jsxs(L1,{children:[o.jsxs(X1,{children:[o.jsx(Q1,{children:o.jsx(w0,{})}),o.jsxs(V1,{children:[o.jsx(Z1,{children:"Featured on LinkedIn"}),o.jsx(K1,{children:"McKinsey India"})]}),o.jsxs(J1,{href:Y1,target:"_blank",rel:"noopener noreferrer","aria-label":"View the McKinsey India post on LinkedIn",children:[o.jsx("span",{children:"View post"}),o.jsx(ty,{})]})]}),o.jsxs($1,{ref:y,children:[T&&o.jsx(W1,{src:G1,title:"McKinsey India feature on Pranshu Nijhawan's career journey",loading:"lazy",allowFullScreen:!0,$loaded:w,onLoad:()=>E(!0)}),o.jsx(Nl,{children:!w&&o.jsx(I1,{$reduce:!!s,"aria-hidden":!0,initial:!1,exit:{opacity:0},transition:{duration:Ut.surface,ease:ot.out},children:o.jsx(P1,{$reduce:!!s})},"skeleton")})]})]})})]})})},ay=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid var(--line);

  ${q.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 56px;
  }
`,ly=p(R.div)`
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ny=p.span`
  font-family: ${lt.mono};
  font-size: 13px;
  color: var(--accent-ink);
  letter-spacing: 0.02em;
`,iy=p.h3`
  font-family: ${lt.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.15;
`,uy=p.p`
  font-size: 15px;
  color: var(--ink-2);
  line-height: 1.5;
`,cy=({data:s})=>{const y=Mt();return o.jsx(Ta,{id:"educationalqualifications",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(Je,{title:"Education"}),o.jsx(ay,{children:s.timeline.map((T,f)=>o.jsxs(ly,{initial:y?!1:{opacity:0,y:22,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.55,delay:f%2*.08,ease:ot.out},children:[o.jsx(ny,{children:T.date}),o.jsx(iy,{children:T.title}),o.jsx(uy,{children:T.subTitle})]},f))})]})})},oy=p.h2`
  font-family: ${lt.display};
  font-weight: 600;
  font-size: clamp(40px, 7.5vw, 88px);
  letter-spacing: -0.035em;
  line-height: 0.96;
  color: var(--ink);
  margin-bottom: 26px;

  em { font-style: normal; color: var(--accent-ink); }
`,ry=p.p`
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.6;
  color: var(--ink-2);
  max-width: 50ch;
  margin-bottom: 64px;
`,sy=p.div`
  border-top: 1px solid var(--line);
`,Hn=p(R.a)`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 26px 4px;
  border-bottom: 1px solid var(--line);
  transition: background-color var(--dur-press) var(--ease-out);

  &:active { background-color: var(--surface-2); }
`,fy=p.span`
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

  ${q.hover} {
    ${Hn}:hover & { transform: translateX(12px); }
  }
`,dy=p.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
  flex: 1;
  transition: transform var(--dur-control) var(--ease-out);

  ${q.hover} {
    ${Hn}:hover & { transform: translateX(12px); }
  }
`,hy=p.span`
  font-family: ${lt.mono};
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
`,py=p.span`
  font-family: ${lt.display};
  font-size: clamp(18px, 2.4vw, 24px);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,my=p.span`
  flex-shrink: 0;
  color: var(--ink-3);
  transition: transform var(--dur-surface) var(--ease-out), color var(--dur-surface) var(--ease-out);
  svg { width: 20px; height: 20px; }

  ${Hn}:hover & { color: var(--accent-ink); }
  ${q.hover} {
    ${Hn}:hover & { transform: translate(4px, -4px); }
  }
`,gy={email:o.jsx(T0,{}),phone:o.jsx(_m,{}),linkedin:o.jsx(w0,{}),location:o.jsx(Bm,{})},vy=({data:s})=>{const y=Mt();return o.jsx(Ta,{id:"contact",children:o.jsxs(wa,{$max:"wide",children:[o.jsx(Aa,{dir:"up",children:o.jsxs(oy,{children:[o.jsx(Yo,{text:"Let's build something"}),o.jsx("br",{}),o.jsx("em",{children:o.jsx(Yo,{text:"that scales.",delay:.15})})]})}),o.jsx(Aa,{dir:"up",delay:.1,children:o.jsx(ry,{children:"Architecture, agentic AI, or platform performance. If it needs to work at scale, I want to hear about it."})}),o.jsx(sy,{children:s.contactMetaData.map((T,f)=>{const w=T.icon.toLowerCase(),E=T.href.startsWith("http");return o.jsxs(Hn,{href:T.href,target:E?"_blank":void 0,rel:E?"noopener noreferrer":void 0,initial:y?!1:{opacity:0,y:20,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:Ut.frame,delay:f*.07,ease:ot.out},children:[o.jsx(fy,{children:gy[w]??o.jsx(T0,{})}),o.jsxs(dy,{children:[o.jsx(hy,{children:w==="email"?"Email":T.icon}),o.jsx(py,{children:T.content})]}),o.jsx(my,{children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M7 17L17 7M9 7h8v8"})})})]},f)})})]})})},yy={content:["🔹  I own the architecture of Promotion Advisor end to end, McKinsey Periscope's flagship multi-tenant SaaS: the planning application, the Analytics Engine, and the agentic layer. That includes the security model, the GitOps configuration framework, polyglot persistence, ETL, the reporting engine, and the external API surface.","My recent work is agentic architecture across an MCP mesh. I co-built Platform AI, Periscope's enterprise agent platform, then built Cortex so business logic stays compiled and deterministic rather than authored in prompts, and the Context-Scoped Catalog so tool discovery stays accurate however large the tool fleet grows.","Underneath that I build the data systems: billion-row sub-second analytics on ClickHouse, sub-2 second response on 2M+ records, and semantic vectorized lookup over JSONB. I also coached org-wide Cursor and AI-assisted engineering for a 37% capacity increase, and led the shift to Spec-Driven Development and an AI-led SDLC."],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},by={certificateProps:{certificateMetaData:[{buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},xy={contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},Sy={timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010"}]},zy={name:"Pranshu Nijhawan",designation:"Architecting Agentic AI. Engineering at Scale."},Ay={content:[{id:1,title:"Platform AI: Periscope's Enterprise Agent Platform",content:["Co-built the agent platform that every product agent across Periscope now deploys through.","A GitOps Agent Definition Manager versions each agent as Git artifacts composed from skills, agent files, and scripts, not prompt text in a low-code editor.","A LangChain harness on Kubernetes runs one agent loop for all product agents, behind a Tenant MCP gateway that owns authentication, tool discovery, and quota.","Caller identity survives every hop, so an agent executes strictly inside the permissions of the prompting user."]},{id:2,title:"Cortex: Deterministic Business Logic for Agents",content:["Built a stateless engine that compiles configurable business rules into deterministic executable binaries.","Rules compose from three atomic operations (acquire, derive, assert) into playbooks, version-controlled through GitOps.","A purpose-built TypeScript compiler parses the typed YAML, so business rules stay unit-testable and reusable across agents.","Agent output is reproducible and auditable instead of dependent on what a prompt happened to say."]},{id:3,title:"Context-Scoped Catalog: Tool Selection at Fleet Scale",content:["Solved context pollution: an agent cannot reach a large tool estate if every tool is bound up front.","Designed the selection algorithm, which pins the tools an agent declares, shortlists the rest with a free BM25 lexical pass, then uses a cheap router model to separate near-duplicate actions.","Scoped the catalog per tenant and structured it hierarchically, which makes version gating exact and routing deterministic.","Context stays bounded and tool discovery stays accurate however large the fleet grows."]},{id:4,title:"Periscope Reporting Engine: Billion-Row Analytics on ClickHouse",content:["Built the reporting engine as a configurable runtime-query architecture, so users compose their own reports.","Aggregations resolve at request time against a governed ontology through a dynamic Query Builder, which removes the batch-prep step and the analytics-team dependency for each new measure.","Modeled the store on Projections and Dictionaries for billion-row sub-second interactive queries.","Separately designed the multi-dimensional promotion conflict detection algorithm, progressive candidate narrowing over sorted item arrays: sub-2 second response at 20 concurrent users across 2M promotions, 5,000x faster on large item groups."]},{id:5,title:"AI-Assisted Engineering and the Agent Library",content:["Drove org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit), which raised team capacity 37%.","Built 10+ production agents for architecture diagrams, ADR and APR authorship, and technical communications.","Built an SDD Agent that runs an 11-dimension anti-hallucination audit on every spec before it reaches implementation.","Built the Repo Mastery Agent, the code knowledge base coding agents ground against, which replaced a heavy Graph RAG documentation system with a Registry Pattern over vector binaries and explicit dependency relations."]}]},Ty={timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 - Present",descriptionSummary:`At McKinsey I am the sole architecture owner of <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a>, a flagship multi-tenant SaaS in the <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> suite for CPG and retail clients. I co-built Platform AI, Periscope's enterprise agent platform, and designed the agentic layer that runs on it. I lead 65+ engineers across five development squads and a core support squad, and partner with senior consulting leaders on high-stakes RFPs and enterprise implementations.`,achievements:[{title:"Platform Architecture Ownership",description:"Own the architecture of Promotion Advisor end to end: the planning application (React, TypeScript, Node.js, GraphQL, C# / .NET microservices), the Analytics Engine (Databricks, PySpark, DBT, PostgreSQL), and the agentic layer. Accountable for the configuration framework (GitOps-based, zero-downtime configuration delivery), the security model, polyglot persistence (PostgreSQL, Redis, Databricks Delta tables, ClickHouse), ETL, the Periscope Reporting Engine, and the external API surface."},{title:"Platform AI: Enterprise Agent Platform",description:"Co-built Platform AI, Periscope's enterprise agent platform: a GitOps Agent Definition Manager that versions every agent as Git artifacts, not prompt text; a LangChain harness on Kubernetes running one agent loop for all product agents; and a Tenant MCP gateway owning authentication, tool discovery, and quota. Caller identity survives every hop."},{title:"Cortex: Deterministic Business-Logic Engine",description:"Built Cortex, a stateless engine that runs business logic written as configuration. Rules compose from three operations (acquire, derive, assert) into playbooks; a purpose-built TypeScript compiler parses the typed YAML into executable binaries. Business rules stay deterministic and unit-testable, so agent output is reproducible and auditable."},{title:"Context-Scoped Catalog: Tool Selection at Fleet Scale",description:"Solved context pollution: an agent cannot reach a large tool estate if every tool is bound up front. Designed the selection algorithm (pinned tools, a free BM25 shortlist, then a cheap router model for the near-duplicates) and scoped the catalog per tenant, which makes version gating exact and routing deterministic. Version-mismatch failures dropped to zero, and a new solution registers without per-tool wiring."},{title:"Periscope Reporting Engine on ClickHouse & Real-Time Conflict Detection",description:"Built the Periscope Reporting Engine on ClickHouse (Projections, Dictionaries, billion-row sub-second queries): users compose their own reports and every aggregation resolves at request time against a governed ontology through a dynamic Query Builder, which removes the batch-prep step and the analytics-team dependency for each new measure. Also designed the multi-dimensional promotion conflict detection algorithm, progressive candidate narrowing over sorted item arrays: sub-2s at 20 concurrent users across 2M promotions, 5,000x faster on large item groups."},{title:"AI-Assisted Engineering & Agent Tooling",description:"Drove org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit), which raised team capacity 37%. Built the agent library behind it: 10+ production agents for architecture diagrams, ADR and APR authorship, and technical communications, plus an SDD Agent that runs an 11-dimension anti-hallucination audit per spec. The Repo Mastery Agent replaced a heavy Graph RAG documentation system with a Registry Pattern over vector binaries and explicit dependency relations."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 - March 2022",descriptionSummary:'At Eptura I re-architected a single-tenant workspace SaaS, <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), to cloud-native microservices on AKS and built a global IoT release orchestrator that pushes firmware to 300M+ devices. Directed 20 engineers across four squads.',achievements:[{title:"Cloud-Native Re-Architecture",description:"Migrated legacy single-tenant SaaS to cloud-native microservices on Azure Kubernetes Service (AKS): 60% faster incident recovery, and single-tenant scaling bottlenecks eliminated."},{title:"Global IoT Release Orchestration",description:"Built a release orchestration system (Azure IoT Hub, Azure Functions, Azure CosmosDB) that delivers firmware updates to 300M+ IoT devices worldwide with zero-downtime rollouts."},{title:"Engineering Leadership",description:"Directed 20 engineers (4 tech leads) across four squads. Established a structured mentorship program: +20% retention and faster engineering progression."}]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 - April 2021",descriptionSummary:"At Nagarro I shipped full-stack web and mobile applications for e-commerce and HR enterprise clients on Angular, .NET Core, PostgreSQL, and Ionic. CI/CD and IaC practices cut deployment failures by 70% across client projects.",achievements:[{title:"Full-Stack Web + Mobile Delivery",description:"Delivered production web and mobile apps on Angular, .NET Core, PostgreSQL, and Ionic Framework for e-commerce and HR clients at 99.5%+ uptime."},{title:"CI/CD & Infrastructure as Code",description:"Established CI/CD pipelines and IaC practices: 70% reduction in deployment failures across client projects."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 - December 2019",descriptionSummary:'At Condeco I built C# / .NET / React / SQL Server microservices for the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> workspace SaaS that carried 3x customer growth without reliability regressions. Cut build times 40% and core query latency 3x through data model refactoring.',achievements:[{title:"Microservices for 3x Customer Scale",description:"Designed and shipped C# / .NET / React / SQL Server microservices that carried 3x customer growth without reliability regressions."},{title:"CI/CD & Data Model Optimization",description:"Cut build times 40% and refactored core data models to reduce average query latency 3x."}]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",previously:"Intern",date:"February 2016 - August 2018",descriptionSummary:"At Gartner I built backend features on C# / .NET Core / React for an HR analytics SaaS, which improved survey data accuracy 60% for consulting clients. Automated SQL workflows saved 240+ engineering hours annually.",achievements:[{title:"SaaS Analytics Backend",description:"Built backend features on C# / .NET Core / React for the HR analytics platform, which improved employee survey data accuracy 60% for consulting clients."},{title:"SQL Workflow Automation",description:"Automated SQL workflows (stored procedures, SQL Agent jobs): saved 240+ engineering hours annually."}]}]},wy={skills:[{category:"AI & Agentic Engineering",skills:[{name:"Multi-Agent Orchestration",percentage:100},{name:"MCP (servers and clients)",percentage:100},{name:"Tool Discovery & Routing",percentage:100},{name:"Context Engineering",percentage:95},{name:"Cursor (Rules / Skills / Agents / Hooks / SDK)",percentage:100},{name:"Spec-Driven Development (OpenSpec, SpecKit)",percentage:100}]},{category:"Architecture",skills:[{name:"Multi-Tenant SaaS Architecture",percentage:100},{name:"Microservices & Distributed Systems",percentage:100},{name:"Configuration-Driven Architecture",percentage:100},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Polyglot Persistence",percentage:95},{name:"ADR / APR Authorship",percentage:95}]},{category:"Backend",skills:[{name:"TypeScript / Node.js / Fastify",percentage:100},{name:"C# / .NET Core",percentage:100},{name:"GraphQL & REST APIs",percentage:95},{name:"Python",percentage:90}]},{category:"Frontend",skills:[{name:"React",percentage:100},{name:"TypeScript",percentage:100},{name:"Angular",percentage:90},{name:"Micro-Frontends",percentage:90}]},{category:"Data & Storage",skills:[{name:"PostgreSQL",percentage:100},{name:"ClickHouse",percentage:95},{name:"SQL Server",percentage:95},{name:"Redis",percentage:90}]},{category:"Cloud & Infrastructure",skills:[{name:"Microsoft Azure",percentage:95},{name:"Kubernetes (AKS)",percentage:90},{name:"Terraform & GitOps",percentage:90},{name:"Amazon Web Services (AWS)",percentage:85}]},{category:"Data Engineering & Real-Time Analytics",skills:[{name:"ClickHouse Analytics (Projections, Dictionaries)",percentage:95},{name:"Real-Time Analytics & Query Engines",percentage:95},{name:"Databricks (PySpark)",percentage:90},{name:"DBT & Blue-Green ETL",percentage:90}]},{category:"Security & Compliance",skills:[{name:"Two-Layer FAC + DAC Architecture",percentage:100},{name:"Casbin RBAC / ABAC",percentage:95},{name:"SOC2 / Secure SDLC",percentage:90}]}]},jy={quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},Ey={aboutSection:yy,certifications:by,contactMe:xy,educationalQualifications:Sy,homeSection:zy,mostProudOf:Ay,professionalExperience:Ty,technologyProficiency:wy,testimonials:jy},Ze=Ey;function My(){const[s,y]=H.useState(!1);return o.jsxs(bm,{children:[o.jsx(vm,{}),o.jsxs(xm,{children:[o.jsx(Om,{}),o.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),o.jsx(hg,{revealed:s}),o.jsxs("main",{id:"main-content",style:{position:"relative",zIndex:1},role:"main",children:[o.jsx(av,{data:Ze.homeSection,start:s}),o.jsx(xv,{data:Ze.aboutSection}),o.jsx(Uv,{data:Ze.technologyProficiency}),o.jsx(Wv,{data:Ze.professionalExperience}),o.jsx(d1,{data:Ze.mostProudOf}),o.jsx(b1,{data:Ze.certifications}),o.jsx(k1,{data:Ze.testimonials}),o.jsx(ey,{}),o.jsx(cy,{data:Ze.educationalQualifications}),o.jsx(vy,{data:Ze.contactMe})]}),o.jsx(bg,{}),o.jsx(Nl,{children:!s&&o.jsx(Eg,{onComplete:()=>y(!0)},"intro")})]})]})}"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);hm.createRoot(document.getElementById("root")).render(o.jsx(H.StrictMode,{children:o.jsx(My,{})}));
