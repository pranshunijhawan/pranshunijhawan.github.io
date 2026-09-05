import{r as B,j as c,u as Mt,m as q,a as Ke,b as ru,L as gm,A as Rl,c as Rn,d as Ka,e as Ja,f as A0}from"./vendor-motion-C8MGYtJI.js";import{r as vm,a as ym}from"./vendor-react-DlBnNAMw.js";import{f as bm,d as p,m as kn}from"./vendor-styled-CTMXd9gs.js";var Uo={exports:{}},Hn={},Bo={exports:{}},No={};var Pd;function xm(){return Pd||(Pd=1,(function(f){function y(z,O){var X=z.length;z.push(O);t:for(;0<X;){var dt=X-1>>>1,ht=z[dt];if(0<j(ht,O))z[dt]=O,z[X]=ht,X=dt;else break t}}function T(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var O=z[0],X=z.pop();if(X!==O){z[0]=X;t:for(var dt=0,ht=z.length,kt=ht>>>1;dt<kt;){var yt=2*(dt+1)-1,it=z[yt],Dt=yt+1,xe=z[Dt];if(0>j(it,X))Dt<ht&&0>j(xe,it)?(z[dt]=xe,z[Dt]=X,dt=Dt):(z[dt]=it,z[yt]=X,dt=yt);else if(Dt<ht&&0>j(xe,X))z[dt]=xe,z[Dt]=X,dt=Dt;else break t}}return O}function j(z,O){var X=z.sortIndex-O.sortIndex;return X!==0?X:z.id-O.id}if(f.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;f.unstable_now=function(){return E.now()}}else{var M=Date,C=M.now();f.unstable_now=function(){return M.now()-C}}var _=[],D=[],N=1,w=null,Y=3,Q=!1,G=!1,P=!1,K=!1,J=typeof setTimeout=="function"?setTimeout:null,je=typeof clearTimeout=="function"?clearTimeout:null,Lt=typeof setImmediate<"u"?setImmediate:null;function $e(z){for(var O=T(D);O!==null;){if(O.callback===null)r(D);else if(O.startTime<=z)r(D),O.sortIndex=O.expirationTime,y(_,O);else break;O=T(D)}}function Ea(z){if(P=!1,$e(z),!G)if(T(_)!==null)G=!0,be||(be=!0,ne());else{var O=T(D);O!==null&&we(Ea,O.startTime-z)}}var be=!1,Ee=-1,me=5,$a=-1;function qn(){return K?!0:!(f.unstable_now()-$a<me)}function Wa(){if(K=!1,be){var z=f.unstable_now();$a=z;var O=!0;try{t:{G=!1,P&&(P=!1,je(Ee),Ee=-1),Q=!0;var X=Y;try{e:{for($e(z),w=T(_);w!==null&&!(w.expirationTime>z&&qn());){var dt=w.callback;if(typeof dt=="function"){w.callback=null,Y=w.priorityLevel;var ht=dt(w.expirationTime<=z);if(z=f.unstable_now(),typeof ht=="function"){w.callback=ht,$e(z),O=!0;break e}w===T(_)&&r(_),$e(z)}else r(_);w=T(_)}if(w!==null)O=!0;else{var kt=T(D);kt!==null&&we(Ea,kt.startTime-z),O=!1}}break t}finally{w=null,Y=X,Q=!1}O=void 0}}finally{O?ne():be=!1}}}var ne;if(typeof Lt=="function")ne=function(){Lt(Wa)};else if(typeof MessageChannel<"u"){var Ln=new MessageChannel,kl=Ln.port2;Ln.port1.onmessage=Wa,ne=function(){kl.postMessage(null)}}else ne=function(){J(Wa,0)};function we(z,O){Ee=J(function(){z(f.unstable_now())},O)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(z){z.callback=null},f.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<z?Math.floor(1e3/z):5},f.unstable_getCurrentPriorityLevel=function(){return Y},f.unstable_next=function(z){switch(Y){case 1:case 2:case 3:var O=3;break;default:O=Y}var X=Y;Y=O;try{return z()}finally{Y=X}},f.unstable_requestPaint=function(){K=!0},f.unstable_runWithPriority=function(z,O){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=Y;Y=z;try{return O()}finally{Y=X}},f.unstable_scheduleCallback=function(z,O,X){var dt=f.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?dt+X:dt):X=dt,z){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=X+ht,z={id:N++,callback:O,priorityLevel:z,startTime:X,expirationTime:ht,sortIndex:-1},X>dt?(z.sortIndex=X,y(D,z),T(_)===null&&z===T(D)&&(P?(je(Ee),Ee=-1):P=!0,we(Ea,X-dt))):(z.sortIndex=ht,y(_,z),G||Q||(G=!0,be||(be=!0,ne()))),z},f.unstable_shouldYield=qn,f.unstable_wrapCallback=function(z){var O=Y;return function(){var X=Y;Y=O;try{return z.apply(this,arguments)}finally{Y=X}}}})(No)),No}var t0;function Sm(){return t0||(t0=1,Bo.exports=xm()),Bo.exports}var e0;function zm(){if(e0)return Hn;e0=1;var f=Sm(),y=vm(),T=ym();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function E(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function M(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function C(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(E(t)!==t)throw Error(r(188))}function D(t){var e=t.alternate;if(!e){if(e=E(t),e===null)throw Error(r(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return _(n),t;if(i===l)return _(n),e;i=i.sibling}throw Error(r(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,o=n.child;o;){if(o===a){u=!0,a=n,l=i;break}if(o===l){u=!0,l=n,a=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===a){u=!0,a=i,l=n;break}if(o===l){u=!0,l=i,a=n;break}o=o.sibling}if(!u)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:e}function N(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=N(t),e!==null)return e;t=t.sibling}return null}var w=Object.assign,Y=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),je=Symbol.for("react.consumer"),Lt=Symbol.for("react.context"),$e=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),Ee=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),$a=Symbol.for("react.activity"),qn=Symbol.for("react.memo_cache_sentinel"),Wa=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=Wa&&t[Wa]||t["@@iterator"],typeof t=="function"?t:null)}var Ln=Symbol.for("react.client.reference");function kl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ln?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case J:return"Profiler";case K:return"StrictMode";case Ea:return"Suspense";case be:return"SuspenseList";case $a:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case G:return"Portal";case Lt:return t.displayName||"Context";case je:return(t._context.displayName||"Context")+".Consumer";case $e:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ee:return e=t.displayName||null,e!==null?e:kl(t.type)||"Memo";case me:e=t._payload,t=t._init;try{return kl(t(e))}catch{}}return null}var we=Array.isArray,z=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},dt=[],ht=-1;function kt(t){return{current:t}}function yt(t){0>ht||(t.current=dt[ht],dt[ht]=null,ht--)}function it(t,e){ht++,dt[ht]=t.current,t.current=e}var Dt=kt(null),xe=kt(null),We=kt(null),Gn=kt(null);function Yn(t,e){switch(it(We,e),it(xe,t),it(Dt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?zd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=zd(e),t=Ad(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(Dt),it(Dt,t)}function Fa(){yt(Dt),yt(xe),yt(We)}function pu(t){t.memoizedState!==null&&it(Gn,t);var e=Dt.current,a=Ad(e,t.type);e!==a&&(it(xe,t),it(Dt,a))}function Xn(t){xe.current===t&&(yt(Dt),yt(xe)),Gn.current===t&&(yt(Gn),Mn._currentValue=X)}var mu,Fo;function wa(t){if(mu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);mu=e&&e[1]||"",Fo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mu+t+Fo}var gu=!1;function vu(t,e){if(!t||gu)return"";gu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(b){var v=b}Reflect.construct(t,[],A)}else{try{A.call()}catch(b){v=b}t.call(A.prototype)}}else{try{throw Error()}catch(b){v=b}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(b){if(b&&v&&typeof b.stack=="string")return[b.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var s=u.split(`
`),g=o.split(`
`);for(n=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(l===s.length||n===g.length)for(l=s.length-1,n=g.length-1;1<=l&&0<=n&&s[l]!==g[n];)n--;for(;1<=l&&0<=n;l--,n--)if(s[l]!==g[n]){if(l!==1||n!==1)do if(l--,n--,0>n||s[l]!==g[n]){var x=`
`+s[l].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=l&&0<=n);break}}}finally{gu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?wa(a):""}function K0(t,e){switch(t.tag){case 26:case 27:case 5:return wa(t.type);case 16:return wa("Lazy");case 13:return t.child!==e&&e!==null?wa("Suspense Fallback"):wa("Suspense");case 19:return wa("SuspenseList");case 0:case 15:return vu(t.type,!1);case 11:return vu(t.type.render,!1);case 1:return vu(t.type,!0);case 31:return wa("Activity");default:return""}}function Io(t){try{var e="",a=null;do e+=K0(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var yu=Object.prototype.hasOwnProperty,bu=f.unstable_scheduleCallback,xu=f.unstable_cancelCallback,J0=f.unstable_shouldYield,$0=f.unstable_requestPaint,Jt=f.unstable_now,W0=f.unstable_getCurrentPriorityLevel,Po=f.unstable_ImmediatePriority,ts=f.unstable_UserBlockingPriority,Qn=f.unstable_NormalPriority,F0=f.unstable_LowPriority,es=f.unstable_IdlePriority,I0=f.log,P0=f.unstable_setDisableYieldValue,ql=null,$t=null;function Fe(t){if(typeof I0=="function"&&P0(t),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(ql,t)}catch{}}var Wt=Math.clz32?Math.clz32:ah,th=Math.log,eh=Math.LN2;function ah(t){return t>>>=0,t===0?32:31-(th(t)/eh|0)|0}var Vn=256,Zn=262144,Kn=4194304;function Ma(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Jn(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=Ma(l):(u&=o,u!==0?n=Ma(u):a||(a=o&~t,a!==0&&(n=Ma(a))))):(o=l&~i,o!==0?n=Ma(o):u!==0?n=Ma(u):a||(a=l&~t,a!==0&&(n=Ma(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Ll(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function lh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function as(){var t=Kn;return Kn<<=1,(Kn&62914560)===0&&(Kn=4194304),t}function Su(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Gl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nh(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,s=t.expirationTimes,g=t.hiddenUpdates;for(a=u&~a;0<a;){var x=31-Wt(a),A=1<<x;o[x]=0,s[x]=-1;var v=g[x];if(v!==null)for(g[x]=null,x=0;x<v.length;x++){var b=v[x];b!==null&&(b.lane&=-536870913)}a&=~A}l!==0&&ls(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function ls(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-Wt(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function ns(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-Wt(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function is(t,e){var a=e&-e;return a=(a&42)!==0?1:zu(a),(a&(t.suspendedLanes|e))!==0?0:a}function zu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Au(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function us(){var t=O.p;return t!==0?t:(t=window.event,t===void 0?32:Zd(t.type))}function cs(t,e){var a=O.p;try{return O.p=t,e()}finally{O.p=a}}var Ie=Math.random().toString(36).slice(2),_t="__reactFiber$"+Ie,Gt="__reactProps$"+Ie,Ia="__reactContainer$"+Ie,Tu="__reactEvents$"+Ie,ih="__reactListeners$"+Ie,uh="__reactHandles$"+Ie,os="__reactResources$"+Ie,Yl="__reactMarker$"+Ie;function ju(t){delete t[_t],delete t[Gt],delete t[Tu],delete t[ih],delete t[uh]}function Pa(t){var e=t[_t];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ia]||a[_t]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Od(t);t!==null;){if(a=t[_t])return a;t=Od(t)}return e}t=a,a=t.parentNode}return null}function tl(t){if(t=t[_t]||t[Ia]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Xl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function el(t){var e=t[os];return e||(e=t[os]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ot(t){t[Yl]=!0}var ss=new Set,rs={};function Da(t,e){al(t,e),al(t+"Capture",e)}function al(t,e){for(rs[t]=e,t=0;t<e.length;t++)ss.add(e[t])}var ch=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fs={},ds={};function oh(t){return yu.call(ds,t)?!0:yu.call(fs,t)?!1:ch.test(t)?ds[t]=!0:(fs[t]=!0,!1)}function $n(t,e,a){if(oh(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Wn(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Me(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function ie(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sh(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eu(t){if(!t._valueTracker){var e=hs(t)?"checked":"value";t._valueTracker=sh(t,e,""+t[e])}}function ps(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=hs(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function Fn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rh=/[\n"\\]/g;function ue(t){return t.replace(rh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function wu(t,e,a,l,n,i,u,o){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ie(e)):t.value!==""+ie(e)&&(t.value=""+ie(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Mu(t,u,ie(e)):a!=null?Mu(t,u,ie(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+ie(o):t.removeAttribute("name")}function ms(t,e,a,l,n,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Eu(t);return}a=a!=null?""+ie(a):"",e=e!=null?""+ie(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=o?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Eu(t)}function Mu(t,e,a){e==="number"&&Fn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ll(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ie(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function gs(t,e,a){if(e!=null&&(e=""+ie(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ie(a):""}function vs(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(r(92));if(we(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=ie(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Eu(t)}function nl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var fh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ys(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||fh.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function bs(t,e,a){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&ys(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&ys(t,i,e[i])}function Du(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function In(t){return hh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function De(){}var Ou=null;function Cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var il=null,ul=null;function xs(t){var e=tl(t);if(e&&(t=e.stateNode)){var a=t[Gt]||null;t:switch(t=e.stateNode,e.type){case"input":if(wu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ue(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Gt]||null;if(!n)throw Error(r(90));wu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&ps(l)}break t;case"textarea":gs(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&ll(t,!!a.multiple,e,!1)}}}var Hu=!1;function Ss(t,e,a){if(Hu)return t(e,a);Hu=!0;try{var l=t(e);return l}finally{if(Hu=!1,(il!==null||ul!==null)&&(qi(),il&&(e=il,t=ul,ul=il=null,xs(e),t)))for(e=0;e<t.length;e++)xs(t[e])}}function Ql(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Gt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,e,typeof a));return a}var Oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(Oe)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{_u=!1}var Pe=null,Uu=null,Pn=null;function zs(){if(Pn)return Pn;var t,e=Uu,a=e.length,l,n="value"in Pe?Pe.value:Pe.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return Pn=n.slice(t,1<l?1-l:void 0)}function ti(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ei(){return!0}function As(){return!1}function Yt(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ei:As,this.isPropagationStopped=As,this}return w(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),e}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ai=Yt(Oa),Zl=w({},Oa,{view:0,detail:0}),ph=Yt(Zl),Bu,Nu,Kl,li=w({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kl&&(Kl&&t.type==="mousemove"?(Bu=t.screenX-Kl.screenX,Nu=t.screenY-Kl.screenY):Nu=Bu=0,Kl=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:Nu}}),Ts=Yt(li),mh=w({},li,{dataTransfer:0}),gh=Yt(mh),vh=w({},Zl,{relatedTarget:0}),Ru=Yt(vh),yh=w({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),bh=Yt(yh),xh=w({},Oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sh=Yt(xh),zh=w({},Oa,{data:0}),js=Yt(zh),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jh[t])?!!e[t]:!1}function ku(){return Eh}var wh=w({},Zl,{key:function(t){if(t.key){var e=Ah[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ti(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Th[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(t){return t.type==="keypress"?ti(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ti(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mh=Yt(wh),Dh=w({},li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Es=Yt(Dh),Oh=w({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),Ch=Yt(Oh),Hh=w({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),_h=Yt(Hh),Uh=w({},li,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bh=Yt(Uh),Nh=w({},Oa,{newState:0,oldState:0}),Rh=Yt(Nh),kh=[9,13,27,32],qu=Oe&&"CompositionEvent"in window,Jl=null;Oe&&"documentMode"in document&&(Jl=document.documentMode);var qh=Oe&&"TextEvent"in window&&!Jl,ws=Oe&&(!qu||Jl&&8<Jl&&11>=Jl),Ms=" ",Ds=!1;function Os(t,e){switch(t){case"keyup":return kh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cl=!1;function Lh(t,e){switch(t){case"compositionend":return Cs(e);case"keypress":return e.which!==32?null:(Ds=!0,Ms);case"textInput":return t=e.data,t===Ms&&Ds?null:t;default:return null}}function Gh(t,e){if(cl)return t==="compositionend"||!qu&&Os(t,e)?(t=zs(),Pn=Uu=Pe=null,cl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ws&&e.locale!=="ko"?null:e.data;default:return null}}var Yh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yh[t.type]:e==="textarea"}function _s(t,e,a,l){il?ul?ul.push(l):ul=[l]:il=l,e=Zi(e,"onChange"),0<e.length&&(a=new ai("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var $l=null,Wl=null;function Xh(t){gd(t,0)}function ni(t){var e=Xl(t);if(ps(e))return t}function Us(t,e){if(t==="change")return e}var Bs=!1;if(Oe){var Lu;if(Oe){var Gu="oninput"in document;if(!Gu){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),Gu=typeof Ns.oninput=="function"}Lu=Gu}else Lu=!1;Bs=Lu&&(!document.documentMode||9<document.documentMode)}function Rs(){$l&&($l.detachEvent("onpropertychange",ks),Wl=$l=null)}function ks(t){if(t.propertyName==="value"&&ni(Wl)){var e=[];_s(e,Wl,t,Cu(t)),Ss(Xh,e)}}function Qh(t,e,a){t==="focusin"?(Rs(),$l=e,Wl=a,$l.attachEvent("onpropertychange",ks)):t==="focusout"&&Rs()}function Vh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ni(Wl)}function Zh(t,e){if(t==="click")return ni(e)}function Kh(t,e){if(t==="input"||t==="change")return ni(e)}function Jh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:Jh;function Fl(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!yu.call(e,n)||!Ft(t[n],e[n]))return!1}return!0}function qs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ls(t,e){var a=qs(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qs(a)}}function Gs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ys(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Fn(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Fn(t.document)}return e}function Yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var $h=Oe&&"documentMode"in document&&11>=document.documentMode,ol=null,Xu=null,Il=null,Qu=!1;function Xs(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qu||ol==null||ol!==Fn(l)||(l=ol,"selectionStart"in l&&Yu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Il&&Fl(Il,l)||(Il=l,l=Zi(Xu,"onSelect"),0<l.length&&(e=new ai("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=ol)))}function Ca(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var sl={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Vu={},Qs={};Oe&&(Qs=document.createElement("div").style,"AnimationEvent"in window||(delete sl.animationend.animation,delete sl.animationiteration.animation,delete sl.animationstart.animation),"TransitionEvent"in window||delete sl.transitionend.transition);function Ha(t){if(Vu[t])return Vu[t];if(!sl[t])return t;var e=sl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Qs)return Vu[t]=e[a];return t}var Vs=Ha("animationend"),Zs=Ha("animationiteration"),Ks=Ha("animationstart"),Wh=Ha("transitionrun"),Fh=Ha("transitionstart"),Ih=Ha("transitioncancel"),Js=Ha("transitionend"),$s=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function ge(t,e){$s.set(t,e),Da(e,[t])}var ii=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ce=[],rl=0,Ku=0;function ui(){for(var t=rl,e=Ku=rl=0;e<t;){var a=ce[e];ce[e++]=null;var l=ce[e];ce[e++]=null;var n=ce[e];ce[e++]=null;var i=ce[e];if(ce[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Ws(a,n,i)}}function ci(t,e,a,l){ce[rl++]=t,ce[rl++]=e,ce[rl++]=a,ce[rl++]=l,Ku|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ju(t,e,a,l){return ci(t,e,a,l),oi(t)}function _a(t,e){return ci(t,null,null,e),oi(t)}function Ws(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Wt(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function oi(t){if(50<Sn)throw Sn=0,lo=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var fl={};function Ph(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,e,a,l){return new Ph(t,e,a,l)}function $u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ce(t,e){var a=t.alternate;return a===null?(a=It(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fs(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function si(t,e,a,l,n,i){var u=0;if(l=t,typeof t=="function")$u(t)&&(u=1);else if(typeof t=="string")u=nm(t,a,Dt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case $a:return t=It(31,a,e,n),t.elementType=$a,t.lanes=i,t;case P:return Ua(a.children,n,i,e);case K:u=8,n|=24;break;case J:return t=It(12,a,e,n|2),t.elementType=J,t.lanes=i,t;case Ea:return t=It(13,a,e,n),t.elementType=Ea,t.lanes=i,t;case be:return t=It(19,a,e,n),t.elementType=be,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lt:u=10;break t;case je:u=9;break t;case $e:u=11;break t;case Ee:u=14;break t;case me:u=16,l=null;break t}u=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return e=It(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function Ua(t,e,a,l){return t=It(7,t,l,e),t.lanes=a,t}function Wu(t,e,a){return t=It(6,t,null,e),t.lanes=a,t}function Is(t){var e=It(18,null,null,0);return e.stateNode=t,e}function Fu(t,e,a){return e=It(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ps=new WeakMap;function oe(t,e){if(typeof t=="object"&&t!==null){var a=Ps.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Io(e)},Ps.set(t,e),e)}return{value:t,source:e,stack:Io(e)}}var dl=[],hl=0,ri=null,Pl=0,se=[],re=0,ta=null,Se=1,ze="";function He(t,e){dl[hl++]=Pl,dl[hl++]=ri,ri=t,Pl=e}function tr(t,e,a){se[re++]=Se,se[re++]=ze,se[re++]=ta,ta=t;var l=Se;t=ze;var n=32-Wt(l)-1;l&=~(1<<n),a+=1;var i=32-Wt(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Se=1<<32-Wt(e)+n|a<<n|l,ze=i+t}else Se=1<<i|a<<n|l,ze=t}function Iu(t){t.return!==null&&(He(t,1),tr(t,1,0))}function Pu(t){for(;t===ri;)ri=dl[--hl],dl[hl]=null,Pl=dl[--hl],dl[hl]=null;for(;t===ta;)ta=se[--re],se[re]=null,ze=se[--re],se[re]=null,Se=se[--re],se[re]=null}function er(t,e){se[re++]=Se,se[re++]=ze,se[re++]=ta,Se=e.id,ze=e.overflow,ta=t}var Ut=null,pt=null,tt=!1,ea=null,fe=!1,tc=Error(r(519));function aa(t){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tn(oe(e,t)),tc}function ar(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[_t]=t,e[Gt]=l,a){case"dialog":W("cancel",e),W("close",e);break;case"iframe":case"object":case"embed":W("load",e);break;case"video":case"audio":for(a=0;a<An.length;a++)W(An[a],e);break;case"source":W("error",e);break;case"img":case"image":case"link":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"input":W("invalid",e),ms(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":W("invalid",e);break;case"textarea":W("invalid",e),vs(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||xd(e.textContent,a)?(l.popover!=null&&(W("beforetoggle",e),W("toggle",e)),l.onScroll!=null&&W("scroll",e),l.onScrollEnd!=null&&W("scrollend",e),l.onClick!=null&&(e.onclick=De),e=!0):e=!1,e||aa(t,!0)}function lr(t){for(Ut=t.return;Ut;)switch(Ut.tag){case 5:case 31:case 13:fe=!1;return;case 27:case 3:fe=!0;return;default:Ut=Ut.return}}function pl(t){if(t!==Ut)return!1;if(!tt)return lr(t),tt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bo(t.type,t.memoizedProps)),a=!a),a&&pt&&aa(t),lr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));pt=Dd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));pt=Dd(t)}else e===27?(e=pt,ga(t.type)?(t=To,To=null,pt=t):pt=e):pt=Ut?he(t.stateNode.nextSibling):null;return!0}function Ba(){pt=Ut=null,tt=!1}function ec(){var t=ea;return t!==null&&(Zt===null?Zt=t:Zt.push.apply(Zt,t),ea=null),t}function tn(t){ea===null?ea=[t]:ea.push(t)}var ac=kt(null),Na=null,_e=null;function la(t,e,a){it(ac,e._currentValue),e._currentValue=a}function Ue(t){t._currentValue=ac.current,yt(ac)}function lc(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function nc(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var o=i;i=n;for(var s=0;s<e.length;s++)if(o.context===e[s]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),lc(i.return,a,t),l||(u=null);break t}i=o.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(r(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),lc(u,a,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ml(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(r(387));if(u=u.memoizedProps,u!==null){var o=n.type;Ft(n.pendingProps.value,u.value)||(t!==null?t.push(o):t=[o])}}else if(n===Gn.current){if(u=n.alternate,u===null)throw Error(r(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Mn):t=[Mn])}n=n.return}t!==null&&nc(e,t,a,l),e.flags|=262144}function fi(t){for(t=t.firstContext;t!==null;){if(!Ft(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ra(t){Na=t,_e=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bt(t){return nr(Na,t)}function di(t,e){return Na===null&&Ra(t),nr(t,e)}function nr(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},_e===null){if(t===null)throw Error(r(308));_e=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else _e=_e.next=e;return a}var tp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},ep=f.unstable_scheduleCallback,ap=f.unstable_NormalPriority,At={$$typeof:Lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ic(){return{controller:new tp,data:new Map,refCount:0}}function en(t){t.refCount--,t.refCount===0&&ep(ap,function(){t.controller.abort()})}var an=null,uc=0,gl=0,vl=null;function lp(t,e){if(an===null){var a=an=[];uc=0,gl=so(),vl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return uc++,e.then(ir,ir),e}function ir(){if(--uc===0&&an!==null){vl!==null&&(vl.status="fulfilled");var t=an;an=null,gl=0,vl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function np(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var ur=z.S;z.S=function(t,e){Qf=Jt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&lp(t,e),ur!==null&&ur(t,e)};var ka=kt(null);function cc(){var t=ka.current;return t!==null?t:ft.pooledCache}function hi(t,e){e===null?it(ka,ka.current):it(ka,e.pool)}function cr(){var t=cc();return t===null?null:{parent:At._currentValue,pool:t}}var yl=Error(r(460)),oc=Error(r(474)),pi=Error(r(542)),mi={then:function(){}};function or(t){return t=t.status,t==="fulfilled"||t==="rejected"}function sr(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(De,De),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,fr(t),t;default:if(typeof e.status=="string")e.then(De,De);else{if(t=ft,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,fr(t),t}throw La=e,yl}}function qa(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(La=a,yl):a}}var La=null;function rr(){if(La===null)throw Error(r(459));var t=La;return La=null,t}function fr(t){if(t===yl||t===pi)throw Error(r(483))}var bl=null,ln=0;function gi(t){var e=ln;return ln+=1,bl===null&&(bl=[]),sr(bl,t,e)}function nn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function vi(t,e){throw e.$$typeof===Y?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function dr(t){function e(h,d){if(t){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function a(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function l(h){for(var d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function n(h,d){return h=Ce(h,d),h.index=0,h.sibling=null,h}function i(h,d,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=67108866,d):m):(h.flags|=67108866,d)):(h.flags|=1048576,d)}function u(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function o(h,d,m,S){return d===null||d.tag!==6?(d=Wu(m,h.mode,S),d.return=h,d):(d=n(d,m),d.return=h,d)}function s(h,d,m,S){var R=m.type;return R===P?x(h,d,m.props.children,S,m.key):d!==null&&(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===me&&qa(R)===d.type)?(d=n(d,m.props),nn(d,m),d.return=h,d):(d=si(m.type,m.key,m.props,null,h.mode,S),nn(d,m),d.return=h,d)}function g(h,d,m,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Fu(m,h.mode,S),d.return=h,d):(d=n(d,m.children||[]),d.return=h,d)}function x(h,d,m,S,R){return d===null||d.tag!==7?(d=Ua(m,h.mode,S,R),d.return=h,d):(d=n(d,m),d.return=h,d)}function A(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Wu(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Q:return m=si(d.type,d.key,d.props,null,h.mode,m),nn(m,d),m.return=h,m;case G:return d=Fu(d,h.mode,m),d.return=h,d;case me:return d=qa(d),A(h,d,m)}if(we(d)||ne(d))return d=Ua(d,h.mode,m,null),d.return=h,d;if(typeof d.then=="function")return A(h,gi(d),m);if(d.$$typeof===Lt)return A(h,di(h,d),m);vi(h,d)}return null}function v(h,d,m,S){var R=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return R!==null?null:o(h,d,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Q:return m.key===R?s(h,d,m,S):null;case G:return m.key===R?g(h,d,m,S):null;case me:return m=qa(m),v(h,d,m,S)}if(we(m)||ne(m))return R!==null?null:x(h,d,m,S,null);if(typeof m.then=="function")return v(h,d,gi(m),S);if(m.$$typeof===Lt)return v(h,d,di(h,m),S);vi(h,m)}return null}function b(h,d,m,S,R){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return h=h.get(m)||null,o(d,h,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:return h=h.get(S.key===null?m:S.key)||null,s(d,h,S,R);case G:return h=h.get(S.key===null?m:S.key)||null,g(d,h,S,R);case me:return S=qa(S),b(h,d,m,S,R)}if(we(S)||ne(S))return h=h.get(m)||null,x(d,h,S,R,null);if(typeof S.then=="function")return b(h,d,m,gi(S),R);if(S.$$typeof===Lt)return b(h,d,m,di(d,S),R);vi(d,S)}return null}function H(h,d,m,S){for(var R=null,et=null,U=d,Z=d=0,I=null;U!==null&&Z<m.length;Z++){U.index>Z?(I=U,U=null):I=U.sibling;var at=v(h,U,m[Z],S);if(at===null){U===null&&(U=I);break}t&&U&&at.alternate===null&&e(h,U),d=i(at,d,Z),et===null?R=at:et.sibling=at,et=at,U=I}if(Z===m.length)return a(h,U),tt&&He(h,Z),R;if(U===null){for(;Z<m.length;Z++)U=A(h,m[Z],S),U!==null&&(d=i(U,d,Z),et===null?R=U:et.sibling=U,et=U);return tt&&He(h,Z),R}for(U=l(U);Z<m.length;Z++)I=b(U,h,Z,m[Z],S),I!==null&&(t&&I.alternate!==null&&U.delete(I.key===null?Z:I.key),d=i(I,d,Z),et===null?R=I:et.sibling=I,et=I);return t&&U.forEach(function(Sa){return e(h,Sa)}),tt&&He(h,Z),R}function L(h,d,m,S){if(m==null)throw Error(r(151));for(var R=null,et=null,U=d,Z=d=0,I=null,at=m.next();U!==null&&!at.done;Z++,at=m.next()){U.index>Z?(I=U,U=null):I=U.sibling;var Sa=v(h,U,at.value,S);if(Sa===null){U===null&&(U=I);break}t&&U&&Sa.alternate===null&&e(h,U),d=i(Sa,d,Z),et===null?R=Sa:et.sibling=Sa,et=Sa,U=I}if(at.done)return a(h,U),tt&&He(h,Z),R;if(U===null){for(;!at.done;Z++,at=m.next())at=A(h,at.value,S),at!==null&&(d=i(at,d,Z),et===null?R=at:et.sibling=at,et=at);return tt&&He(h,Z),R}for(U=l(U);!at.done;Z++,at=m.next())at=b(U,h,Z,at.value,S),at!==null&&(t&&at.alternate!==null&&U.delete(at.key===null?Z:at.key),d=i(at,d,Z),et===null?R=at:et.sibling=at,et=at);return t&&U.forEach(function(mm){return e(h,mm)}),tt&&He(h,Z),R}function rt(h,d,m,S){if(typeof m=="object"&&m!==null&&m.type===P&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Q:t:{for(var R=m.key;d!==null;){if(d.key===R){if(R=m.type,R===P){if(d.tag===7){a(h,d.sibling),S=n(d,m.props.children),S.return=h,h=S;break t}}else if(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===me&&qa(R)===d.type){a(h,d.sibling),S=n(d,m.props),nn(S,m),S.return=h,h=S;break t}a(h,d);break}else e(h,d);d=d.sibling}m.type===P?(S=Ua(m.props.children,h.mode,S,m.key),S.return=h,h=S):(S=si(m.type,m.key,m.props,null,h.mode,S),nn(S,m),S.return=h,h=S)}return u(h);case G:t:{for(R=m.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){a(h,d.sibling),S=n(d,m.children||[]),S.return=h,h=S;break t}else{a(h,d);break}else e(h,d);d=d.sibling}S=Fu(m,h.mode,S),S.return=h,h=S}return u(h);case me:return m=qa(m),rt(h,d,m,S)}if(we(m))return H(h,d,m,S);if(ne(m)){if(R=ne(m),typeof R!="function")throw Error(r(150));return m=R.call(m),L(h,d,m,S)}if(typeof m.then=="function")return rt(h,d,gi(m),S);if(m.$$typeof===Lt)return rt(h,d,di(h,m),S);vi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,d!==null&&d.tag===6?(a(h,d.sibling),S=n(d,m),S.return=h,h=S):(a(h,d),S=Wu(m,h.mode,S),S.return=h,h=S),u(h)):a(h,d)}return function(h,d,m,S){try{ln=0;var R=rt(h,d,m,S);return bl=null,R}catch(U){if(U===yl||U===pi)throw U;var et=It(29,U,null,h.mode);return et.lanes=S,et.return=h,et}finally{}}}var Ga=dr(!0),hr=dr(!1),na=!1;function sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ua(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(nt&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=oi(t),Ws(t,null,a),e}return ci(t,l,e,a),oi(t)}function un(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,ns(t,a)}}function fc(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var dc=!1;function cn(){if(dc){var t=vl;if(t!==null)throw t}}function on(t,e,a,l){dc=!1;var n=t.updateQueue;na=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var s=o,g=s.next;s.next=null,u===null?i=g:u.next=g,u=s;var x=t.alternate;x!==null&&(x=x.updateQueue,o=x.lastBaseUpdate,o!==u&&(o===null?x.firstBaseUpdate=g:o.next=g,x.lastBaseUpdate=s))}if(i!==null){var A=n.baseState;u=0,x=g=s=null,o=i;do{var v=o.lane&-536870913,b=v!==o.lane;if(b?(F&v)===v:(l&v)===v){v!==0&&v===gl&&(dc=!0),x!==null&&(x=x.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var H=t,L=o;v=e;var rt=a;switch(L.tag){case 1:if(H=L.payload,typeof H=="function"){A=H.call(rt,A,v);break t}A=H;break t;case 3:H.flags=H.flags&-65537|128;case 0:if(H=L.payload,v=typeof H=="function"?H.call(rt,A,v):H,v==null)break t;A=w({},A,v);break t;case 2:na=!0}}v=o.callback,v!==null&&(t.flags|=64,b&&(t.flags|=8192),b=n.callbacks,b===null?n.callbacks=[v]:b.push(v))}else b={lane:v,tag:o.tag,payload:o.payload,callback:o.callback,next:null},x===null?(g=x=b,s=A):x=x.next=b,u|=v;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;b=o,o=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);x===null&&(s=A),n.baseState=s,n.firstBaseUpdate=g,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),fa|=u,t.lanes=u,t.memoizedState=A}}function pr(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function mr(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pr(a[t],e)}var xl=kt(null),yi=kt(0);function gr(t,e){t=Xe,it(yi,t),it(xl,e),Xe=t|e.baseLanes}function hc(){it(yi,Xe),it(xl,xl.current)}function pc(){Xe=yi.current,yt(xl),yt(yi)}var Pt=kt(null),de=null;function ca(t){var e=t.alternate;it(St,St.current&1),it(Pt,t),de===null&&(e===null||xl.current!==null||e.memoizedState!==null)&&(de=t)}function mc(t){it(St,St.current),it(Pt,t),de===null&&(de=t)}function vr(t){t.tag===22?(it(St,St.current),it(Pt,t),de===null&&(de=t)):oa()}function oa(){it(St,St.current),it(Pt,Pt.current)}function te(t){yt(Pt),de===t&&(de=null),yt(St)}var St=kt(0);function bi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||zo(a)||Ao(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Be=0,V=null,ot=null,Tt=null,xi=!1,Sl=!1,Ya=!1,Si=0,sn=0,zl=null,ip=0;function bt(){throw Error(r(321))}function gc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ft(t[a],e[a]))return!1;return!0}function vc(t,e,a,l,n,i){return Be=i,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?tf:Hc,Ya=!1,i=a(l,n),Ya=!1,Sl&&(i=br(e,a,l,n)),yr(t),i}function yr(t){z.H=dn;var e=ot!==null&&ot.next!==null;if(Be=0,Tt=ot=V=null,xi=!1,sn=0,zl=null,e)throw Error(r(300));t===null||jt||(t=t.dependencies,t!==null&&fi(t)&&(jt=!0))}function br(t,e,a,l){V=t;var n=0;do{if(Sl&&(zl=null),sn=0,Sl=!1,25<=n)throw Error(r(301));if(n+=1,Tt=ot=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=ef,i=e(a,l)}while(Sl);return i}function up(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?rn(e):e,t=t.useState()[0],(ot!==null?ot.memoizedState:null)!==t&&(V.flags|=1024),e}function yc(){var t=Si!==0;return Si=0,t}function bc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function xc(t){if(xi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}xi=!1}Be=0,Tt=ot=V=null,Sl=!1,sn=Si=0,zl=null}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?V.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function zt(){if(ot===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=Tt===null?V.memoizedState:Tt.next;if(e!==null)Tt=e,ot=t;else{if(t===null)throw V.alternate===null?Error(r(467)):Error(r(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},Tt===null?V.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rn(t){var e=sn;return sn+=1,zl===null&&(zl=[]),t=sr(zl,t,e),e=V,(Tt===null?e.memoizedState:Tt.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?tf:Hc),t}function Ai(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return rn(t);if(t.$$typeof===Lt)return Bt(t)}throw Error(r(438,String(t)))}function Sc(t){var e=null,a=V.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=V.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=zi(),V.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=qn;return e.index++,a}function Ne(t,e){return typeof e=="function"?e(t):e}function Ti(t){var e=zt();return zc(e,ot,t)}function zc(t,e,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var o=u=null,s=null,g=e,x=!1;do{var A=g.lane&-536870913;if(A!==g.lane?(F&A)===A:(Be&A)===A){var v=g.revertLane;if(v===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),A===gl&&(x=!0);else if((Be&v)===v){g=g.next,v===gl&&(x=!0);continue}else A={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},s===null?(o=s=A,u=i):s=s.next=A,V.lanes|=v,fa|=v;A=g.action,Ya&&a(i,A),i=g.hasEagerState?g.eagerState:a(i,A)}else v={lane:A,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},s===null?(o=s=v,u=i):s=s.next=v,V.lanes|=A,fa|=A;g=g.next}while(g!==null&&g!==e);if(s===null?u=i:s.next=o,!Ft(i,t.memoizedState)&&(jt=!0,x&&(a=vl,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=s,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ac(t){var e=zt(),a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Ft(i,e.memoizedState)||(jt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function xr(t,e,a){var l=V,n=zt(),i=tt;if(i){if(a===void 0)throw Error(r(407));a=a()}else a=e();var u=!Ft((ot||n).memoizedState,a);if(u&&(n.memoizedState=a,jt=!0),n=n.queue,Ec(Ar.bind(null,l,n,t),[t]),n.getSnapshot!==e||u||Tt!==null&&Tt.memoizedState.tag&1){if(l.flags|=2048,Al(9,{destroy:void 0},zr.bind(null,l,n,a,e),null),ft===null)throw Error(r(349));i||(Be&127)!==0||Sr(l,e,a)}return a}function Sr(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=V.updateQueue,e===null?(e=zi(),V.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function zr(t,e,a,l){e.value=a,e.getSnapshot=l,Tr(e)&&jr(t)}function Ar(t,e,a){return a(function(){Tr(e)&&jr(t)})}function Tr(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ft(t,a)}catch{return!0}}function jr(t){var e=_a(t,2);e!==null&&Kt(e,t,2)}function Tc(t){var e=qt();if(typeof t=="function"){var a=t;if(t=a(),Ya){Fe(!0);try{a()}finally{Fe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ne,lastRenderedState:t},e}function Er(t,e,a,l){return t.baseState=a,zc(t,ot,typeof l=="function"?l:Ne)}function cp(t,e,a,l,n){if(wi(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,wr(e,i)):(i.next=a.next,e.pending=a.next=i)}}function wr(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=z.T,u={};z.T=u;try{var o=a(n,l),s=z.S;s!==null&&s(u,o),Mr(t,e,o)}catch(g){jc(t,e,g)}finally{i!==null&&u.types!==null&&(i.types=u.types),z.T=i}}else try{i=a(n,l),Mr(t,e,i)}catch(g){jc(t,e,g)}}function Mr(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Dr(t,e,l)},function(l){return jc(t,e,l)}):Dr(t,e,a)}function Dr(t,e,a){e.status="fulfilled",e.value=a,Or(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,wr(t,a)))}function jc(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,Or(e),e=e.next;while(e!==l)}t.action=null}function Or(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Cr(t,e){return e}function Hr(t,e){if(tt){var a=ft.formState;if(a!==null){t:{var l=V;if(tt){if(pt){e:{for(var n=pt,i=fe;n.nodeType!==8;){if(!i){n=null;break e}if(n=he(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){pt=he(n.nextSibling),l=n.data==="F!";break t}}aa(l)}l=!1}l&&(e=a[0])}}return a=qt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:e},a.queue=l,a=Fr.bind(null,V,l),l.dispatch=a,l=Tc(!1),i=Cc.bind(null,V,!1,l.queue),l=qt(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=cp.bind(null,V,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function _r(t){var e=zt();return Ur(e,ot,t)}function Ur(t,e,a){if(e=zc(t,e,Cr)[0],t=Ti(Ne)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=rn(e)}catch(u){throw u===yl?pi:u}else l=e;e=zt();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(V.flags|=2048,Al(9,{destroy:void 0},op.bind(null,n,a),null)),[l,i,t]}function op(t,e){t.action=e}function Br(t){var e=zt(),a=ot;if(a!==null)return Ur(e,a,t);zt(),e=e.memoizedState,a=zt();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Al(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=V.updateQueue,e===null&&(e=zi(),V.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Nr(){return zt().memoizedState}function ji(t,e,a,l){var n=qt();V.flags|=t,n.memoizedState=Al(1|e,{destroy:void 0},a,l===void 0?null:l)}function Ei(t,e,a,l){var n=zt();l=l===void 0?null:l;var i=n.memoizedState.inst;ot!==null&&l!==null&&gc(l,ot.memoizedState.deps)?n.memoizedState=Al(e,i,a,l):(V.flags|=t,n.memoizedState=Al(1|e,i,a,l))}function Rr(t,e){ji(8390656,8,t,e)}function Ec(t,e){Ei(2048,8,t,e)}function sp(t){V.flags|=4;var e=V.updateQueue;if(e===null)e=zi(),V.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function kr(t){var e=zt().memoizedState;return sp({ref:e,nextImpl:t}),function(){if((nt&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function qr(t,e){return Ei(4,2,t,e)}function Lr(t,e){return Ei(4,4,t,e)}function Gr(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yr(t,e,a){a=a!=null?a.concat([t]):null,Ei(4,4,Gr.bind(null,e,t),a)}function wc(){}function Xr(t,e){var a=zt();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&gc(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function Qr(t,e){var a=zt();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&gc(e,l[1]))return l[0];if(l=t(),Ya){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[l,e],l}function Mc(t,e,a){return a===void 0||(Be&1073741824)!==0&&(F&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Zf(),V.lanes|=t,fa|=t,a)}function Vr(t,e,a,l){return Ft(a,e)?a:xl.current!==null?(t=Mc(t,a,l),Ft(t,e)||(jt=!0),t):(Be&42)===0||(Be&1073741824)!==0&&(F&261930)===0?(jt=!0,t.memoizedState=a):(t=Zf(),V.lanes|=t,fa|=t,e)}function Zr(t,e,a,l,n){var i=O.p;O.p=i!==0&&8>i?i:8;var u=z.T,o={};z.T=o,Cc(t,!1,e,a);try{var s=n(),g=z.S;if(g!==null&&g(o,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var x=np(s,l);fn(t,e,x,le(t))}else fn(t,e,l,le(t))}catch(A){fn(t,e,{then:function(){},status:"rejected",reason:A},le())}finally{O.p=i,u!==null&&o.types!==null&&(u.types=o.types),z.T=u}}function rp(){}function Dc(t,e,a,l){if(t.tag!==5)throw Error(r(476));var n=Kr(t).queue;Zr(t,n,e,X,a===null?rp:function(){return Jr(t),a(l)})}function Kr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ne,lastRenderedState:X},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ne,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Jr(t){var e=Kr(t);e.next===null&&(e=t.alternate.memoizedState),fn(t,e.next.queue,{},le())}function Oc(){return Bt(Mn)}function $r(){return zt().memoizedState}function Wr(){return zt().memoizedState}function fp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=le();t=ia(a);var l=ua(e,t,a);l!==null&&(Kt(l,e,a),un(l,e,a)),e={cache:ic()},t.payload=e;return}e=e.return}}function dp(t,e,a){var l=le();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wi(t)?Ir(e,a):(a=Ju(t,e,a,l),a!==null&&(Kt(a,t,l),Pr(a,e,l)))}function Fr(t,e,a){var l=le();fn(t,e,a,l)}function fn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wi(t))Ir(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,o=i(u,a);if(n.hasEagerState=!0,n.eagerState=o,Ft(o,u))return ci(t,e,n,0),ft===null&&ui(),!1}catch{}finally{}if(a=Ju(t,e,n,l),a!==null)return Kt(a,t,l),Pr(a,e,l),!0}return!1}function Cc(t,e,a,l){if(l={lane:2,revertLane:so(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},wi(t)){if(e)throw Error(r(479))}else e=Ju(t,a,l,2),e!==null&&Kt(e,t,2)}function wi(t){var e=t.alternate;return t===V||e!==null&&e===V}function Ir(t,e){Sl=xi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Pr(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,ns(t,a)}}var dn={readContext:Bt,use:Ai,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt};dn.useEffectEvent=bt;var tf={readContext:Bt,use:Ai,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:Rr,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,ji(4194308,4,Gr.bind(null,e,t),a)},useLayoutEffect:function(t,e){return ji(4194308,4,t,e)},useInsertionEffect:function(t,e){ji(4,2,t,e)},useMemo:function(t,e){var a=qt();e=e===void 0?null:e;var l=t();if(Ya){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=qt();if(a!==void 0){var n=a(e);if(Ya){Fe(!0);try{a(e)}finally{Fe(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=dp.bind(null,V,t),[l.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:function(t){t=Tc(t);var e=t.queue,a=Fr.bind(null,V,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:wc,useDeferredValue:function(t,e){var a=qt();return Mc(a,t,e)},useTransition:function(){var t=Tc(!1);return t=Zr.bind(null,V,t.queue,!0,!1),qt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=V,n=qt();if(tt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=e(),ft===null)throw Error(r(349));(F&127)!==0||Sr(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,Rr(Ar.bind(null,l,i,t),[t]),l.flags|=2048,Al(9,{destroy:void 0},zr.bind(null,l,i,a,e),null),a},useId:function(){var t=qt(),e=ft.identifierPrefix;if(tt){var a=ze,l=Se;a=(l&~(1<<32-Wt(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=Si++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=ip++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Oc,useFormState:Hr,useActionState:Hr,useOptimistic:function(t){var e=qt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Cc.bind(null,V,!0,a),a.dispatch=e,[t,e]},useMemoCache:Sc,useCacheRefresh:function(){return qt().memoizedState=fp.bind(null,V)},useEffectEvent:function(t){var e=qt(),a={impl:t};return e.memoizedState=a,function(){if((nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Hc={readContext:Bt,use:Ai,useCallback:Xr,useContext:Bt,useEffect:Ec,useImperativeHandle:Yr,useInsertionEffect:qr,useLayoutEffect:Lr,useMemo:Qr,useReducer:Ti,useRef:Nr,useState:function(){return Ti(Ne)},useDebugValue:wc,useDeferredValue:function(t,e){var a=zt();return Vr(a,ot.memoizedState,t,e)},useTransition:function(){var t=Ti(Ne)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:rn(t),e]},useSyncExternalStore:xr,useId:$r,useHostTransitionStatus:Oc,useFormState:_r,useActionState:_r,useOptimistic:function(t,e){var a=zt();return Er(a,ot,t,e)},useMemoCache:Sc,useCacheRefresh:Wr};Hc.useEffectEvent=kr;var ef={readContext:Bt,use:Ai,useCallback:Xr,useContext:Bt,useEffect:Ec,useImperativeHandle:Yr,useInsertionEffect:qr,useLayoutEffect:Lr,useMemo:Qr,useReducer:Ac,useRef:Nr,useState:function(){return Ac(Ne)},useDebugValue:wc,useDeferredValue:function(t,e){var a=zt();return ot===null?Mc(a,t,e):Vr(a,ot.memoizedState,t,e)},useTransition:function(){var t=Ac(Ne)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:rn(t),e]},useSyncExternalStore:xr,useId:$r,useHostTransitionStatus:Oc,useFormState:Br,useActionState:Br,useOptimistic:function(t,e){var a=zt();return ot!==null?Er(a,ot,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Sc,useCacheRefresh:Wr};ef.useEffectEvent=kr;function _c(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:w({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Uc={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=le(),n=ia(l);n.payload=e,a!=null&&(n.callback=a),e=ua(t,n,l),e!==null&&(Kt(e,t,l),un(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=le(),n=ia(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=ua(t,n,l),e!==null&&(Kt(e,t,l),un(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=le(),l=ia(a);l.tag=2,e!=null&&(l.callback=e),e=ua(t,l,a),e!==null&&(Kt(e,t,a),un(e,t,a))}};function af(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!Fl(a,l)||!Fl(n,i):!0}function lf(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&Uc.enqueueReplaceState(e,e.state,null)}function Xa(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=w({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function nf(t){ii(t)}function uf(t){console.error(t)}function cf(t){ii(t)}function Mi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function of(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Bc(t,e,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Mi(t,e)},a}function sf(t){return t=ia(t),t.tag=3,t}function rf(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){of(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){of(e,a,l),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function hp(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&ml(e,a,n,!0),a=Pt.current,a!==null){switch(a.tag){case 31:case 13:return de===null?Li():a.alternate===null&&xt===0&&(xt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===mi?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),uo(t,l,n)),!1;case 22:return a.flags|=65536,l===mi?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),uo(t,l,n)),!1}throw Error(r(435,a.tag))}return uo(t,l,n),Li(),!1}if(tt)return e=Pt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==tc&&(t=Error(r(422),{cause:l}),tn(oe(t,a)))):(l!==tc&&(e=Error(r(423),{cause:l}),tn(oe(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=oe(l,a),n=Bc(t.stateNode,l,n),fc(t,n),xt!==4&&(xt=2)),!1;var i=Error(r(520),{cause:l});if(i=oe(i,a),xn===null?xn=[i]:xn.push(i),xt!==4&&(xt=2),e===null)return!0;l=oe(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=Bc(a.stateNode,l,t),fc(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=sf(n),rf(n,t,a,l),fc(a,n),!1}a=a.return}while(a!==null);return!1}var Nc=Error(r(461)),jt=!1;function Nt(t,e,a,l){e.child=t===null?hr(e,null,a,l):Ga(e,t.child,a,l)}function ff(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var u={};for(var o in l)o!=="ref"&&(u[o]=l[o])}else u=l;return Ra(e),l=vc(t,e,a,u,i,n),o=yc(),t!==null&&!jt?(bc(t,e,n),Re(t,e,n)):(tt&&o&&Iu(e),e.flags|=1,Nt(t,e,l,n),e.child)}function df(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!$u(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,hf(t,e,i,l,n)):(t=si(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Qc(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Fl,a(u,l)&&t.ref===e.ref)return Re(t,e,n)}return e.flags|=1,t=Ce(i,l),t.ref=e.ref,t.return=e,e.child=t}function hf(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Fl(i,l)&&t.ref===e.ref)if(jt=!1,e.pendingProps=l=i,Qc(t,n))(t.flags&131072)!==0&&(jt=!0);else return e.lanes=t.lanes,Re(t,e,n)}return Rc(t,e,a,l,n)}function pf(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return mf(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&hi(e,i!==null?i.cachePool:null),i!==null?gr(e,i):hc(),vr(e);else return l=e.lanes=536870912,mf(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(hi(e,i.cachePool),gr(e,i),oa(),e.memoizedState=null):(t!==null&&hi(e,null),hc(),oa());return Nt(t,e,n,a),e.child}function hn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function mf(t,e,a,l,n){var i=cc();return i=i===null?null:{parent:At._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&hi(e,null),hc(),vr(e),t!==null&&ml(t,e,l,!0),e.childLanes=n,null}function Di(t,e){return e=Ci({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function gf(t,e,a){return Ga(e,t.child,null,a),t=Di(e,e.pendingProps),t.flags|=2,te(e),e.memoizedState=null,t}function pp(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(tt){if(l.mode==="hidden")return t=Di(e,l),e.lanes=536870912,hn(null,t);if(mc(e),(t=pt)?(t=Md(t,fe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ta!==null?{id:Se,overflow:ze}:null,retryLane:536870912,hydrationErrors:null},a=Is(t),a.return=e,e.child=a,Ut=e,pt=null)):t=null,t===null)throw aa(e);return e.lanes=536870912,null}return Di(e,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(mc(e),n)if(e.flags&256)e.flags&=-257,e=gf(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(r(558));else if(jt||ml(t,e,a,!1),n=(a&t.childLanes)!==0,jt||n){if(l=ft,l!==null&&(u=is(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,_a(t,u),Kt(l,t,u),Nc;Li(),e=gf(t,e,a)}else t=i.treeContext,pt=he(u.nextSibling),Ut=e,tt=!0,ea=null,fe=!1,t!==null&&er(e,t),e=Di(e,l),e.flags|=4096;return e}return t=Ce(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Oi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Rc(t,e,a,l,n){return Ra(e),a=vc(t,e,a,l,void 0,n),l=yc(),t!==null&&!jt?(bc(t,e,n),Re(t,e,n)):(tt&&l&&Iu(e),e.flags|=1,Nt(t,e,a,n),e.child)}function vf(t,e,a,l,n,i){return Ra(e),e.updateQueue=null,a=br(e,l,a,n),yr(t),l=yc(),t!==null&&!jt?(bc(t,e,i),Re(t,e,i)):(tt&&l&&Iu(e),e.flags|=1,Nt(t,e,a,i),e.child)}function yf(t,e,a,l,n){if(Ra(e),e.stateNode===null){var i=fl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Bt(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Uc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},sc(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?Bt(u):fl,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(_c(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Uc.enqueueReplaceState(i,i.state,null),on(e,l,i,n),cn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var o=e.memoizedProps,s=Xa(a,o);i.props=s;var g=i.context,x=a.contextType;u=fl,typeof x=="object"&&x!==null&&(u=Bt(x));var A=a.getDerivedStateFromProps;x=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||g!==u)&&lf(e,i,l,u),na=!1;var v=e.memoizedState;i.state=v,on(e,l,i,n),cn(),g=e.memoizedState,o||v!==g||na?(typeof A=="function"&&(_c(e,a,A,l),g=e.memoizedState),(s=na||af(e,a,s,l,v,g,u))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=g),i.props=l,i.state=g,i.context=u,l=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,rc(t,e),u=e.memoizedProps,x=Xa(a,u),i.props=x,A=e.pendingProps,v=i.context,g=a.contextType,s=fl,typeof g=="object"&&g!==null&&(s=Bt(g)),o=a.getDerivedStateFromProps,(g=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||v!==s)&&lf(e,i,l,s),na=!1,v=e.memoizedState,i.state=v,on(e,l,i,n),cn();var b=e.memoizedState;u!==A||v!==b||na||t!==null&&t.dependencies!==null&&fi(t.dependencies)?(typeof o=="function"&&(_c(e,a,o,l),b=e.memoizedState),(x=na||af(e,a,x,l,v,b,s)||t!==null&&t.dependencies!==null&&fi(t.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,b,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,b,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=b),i.props=l,i.state=b,i.context=s,l=x):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Oi(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Ga(e,t.child,null,n),e.child=Ga(e,null,a,n)):Nt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Re(t,e,n),t}function bf(t,e,a,l){return Ba(),e.flags|=256,Nt(t,e,a,l),e.child}var kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qc(t){return{baseLanes:t,cachePool:cr()}}function Lc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=ae),t}function xf(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(tt){if(n?ca(e):oa(),(t=pt)?(t=Md(t,fe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ta!==null?{id:Se,overflow:ze}:null,retryLane:536870912,hydrationErrors:null},a=Is(t),a.return=e,e.child=a,Ut=e,pt=null)):t=null,t===null)throw aa(e);return Ao(t)?e.lanes=32:e.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(oa(),n=e.mode,o=Ci({mode:"hidden",children:o},n),l=Ua(l,n,a,null),o.return=e,l.return=e,o.sibling=l,e.child=o,l=e.child,l.memoizedState=qc(a),l.childLanes=Lc(t,u,a),e.memoizedState=kc,hn(null,l)):(ca(e),Gc(e,o))}var s=t.memoizedState;if(s!==null&&(o=s.dehydrated,o!==null)){if(i)e.flags&256?(ca(e),e.flags&=-257,e=Yc(t,e,a)):e.memoizedState!==null?(oa(),e.child=t.child,e.flags|=128,e=null):(oa(),o=l.fallback,n=e.mode,l=Ci({mode:"visible",children:l.children},n),o=Ua(o,n,a,null),o.flags|=2,l.return=e,o.return=e,l.sibling=o,e.child=l,Ga(e,t.child,null,a),l=e.child,l.memoizedState=qc(a),l.childLanes=Lc(t,u,a),e.memoizedState=kc,e=hn(null,l));else if(ca(e),Ao(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var g=u.dgst;u=g,l=Error(r(419)),l.stack="",l.digest=u,tn({value:l,source:null,stack:null}),e=Yc(t,e,a)}else if(jt||ml(t,e,a,!1),u=(a&t.childLanes)!==0,jt||u){if(u=ft,u!==null&&(l=is(u,a),l!==0&&l!==s.retryLane))throw s.retryLane=l,_a(t,l),Kt(u,t,l),Nc;zo(o)||Li(),e=Yc(t,e,a)}else zo(o)?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,pt=he(o.nextSibling),Ut=e,tt=!0,ea=null,fe=!1,t!==null&&er(e,t),e=Gc(e,l.children),e.flags|=4096);return e}return n?(oa(),o=l.fallback,n=e.mode,s=t.child,g=s.sibling,l=Ce(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,g!==null?o=Ce(g,o):(o=Ua(o,n,a,null),o.flags|=2),o.return=e,l.return=e,l.sibling=o,e.child=l,hn(null,l),l=e.child,o=t.child.memoizedState,o===null?o=qc(a):(n=o.cachePool,n!==null?(s=At._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=cr(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=Lc(t,u,a),e.memoizedState=kc,hn(t.child,l)):(ca(e),a=t.child,t=a.sibling,a=Ce(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function Gc(t,e){return e=Ci({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ci(t,e){return t=It(22,t,null,e),t.lanes=0,t}function Yc(t,e,a){return Ga(e,t.child,null,a),t=Gc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sf(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),lc(t.return,e,a)}function Xc(t,e,a,l,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function zf(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=St.current,o=(u&2)!==0;if(o?(u=u&1|2,e.flags|=128):u&=1,it(St,u),Nt(t,e,l,a),l=tt?Pl:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sf(t,a,e);else if(t.tag===19)Sf(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&bi(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),Xc(e,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&bi(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Xc(e,!0,a,null,i,l);break;case"together":Xc(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Re(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),fa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ml(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,a=Ce(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ce(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Qc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&fi(t)))}function mp(t,e,a){switch(e.tag){case 3:Yn(e,e.stateNode.containerInfo),la(e,At,t.memoizedState.cache),Ba();break;case 27:case 5:pu(e);break;case 4:Yn(e,e.stateNode.containerInfo);break;case 10:la(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,mc(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(ca(e),e.flags|=128,null):(a&e.child.childLanes)!==0?xf(t,e,a):(ca(e),t=Re(t,e,a),t!==null?t.sibling:null);ca(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(ml(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return zf(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),it(St,St.current),l)break;return null;case 22:return e.lanes=0,pf(t,e,a,e.pendingProps);case 24:la(e,At,t.memoizedState.cache)}return Re(t,e,a)}function Af(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)jt=!0;else{if(!Qc(t,a)&&(e.flags&128)===0)return jt=!1,mp(t,e,a);jt=(t.flags&131072)!==0}else jt=!1,tt&&(e.flags&1048576)!==0&&tr(e,Pl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=qa(e.elementType),e.type=t,typeof t=="function")$u(t)?(l=Xa(t,l),e.tag=1,e=yf(null,e,t,l,a)):(e.tag=0,e=Rc(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===$e){e.tag=11,e=ff(null,e,t,l,a);break t}else if(n===Ee){e.tag=14,e=df(null,e,t,l,a);break t}}throw e=kl(t)||t,Error(r(306,e,""))}}return e;case 0:return Rc(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=Xa(l,e.pendingProps),yf(t,e,l,n,a);case 3:t:{if(Yn(e,e.stateNode.containerInfo),t===null)throw Error(r(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,rc(t,e),on(e,l,null,a);var u=e.memoizedState;if(l=u.cache,la(e,At,l),l!==i.cache&&nc(e,[At],a,!0),cn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=bf(t,e,l,a);break t}else if(l!==n){n=oe(Error(r(424)),e),tn(n),e=bf(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(pt=he(t.firstChild),Ut=e,tt=!0,ea=null,fe=!0,a=hr(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ba(),l===n){e=Re(t,e,a);break t}Nt(t,e,l,a)}e=e.child}return e;case 26:return Oi(t,e),t===null?(a=Ud(e.type,null,e.pendingProps,null))?e.memoizedState=a:tt||(a=e.type,t=e.pendingProps,l=Ki(We.current).createElement(a),l[_t]=e,l[Gt]=t,Rt(l,a,t),Ot(l),e.stateNode=l):e.memoizedState=Ud(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return pu(e),t===null&&tt&&(l=e.stateNode=Cd(e.type,e.pendingProps,We.current),Ut=e,fe=!0,n=pt,ga(e.type)?(To=n,pt=he(l.firstChild)):pt=n),Nt(t,e,e.pendingProps.children,a),Oi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&tt&&((n=l=pt)&&(l=Vp(l,e.type,e.pendingProps,fe),l!==null?(e.stateNode=l,Ut=e,pt=he(l.firstChild),fe=!1,n=!0):n=!1),n||aa(e)),pu(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,bo(n,i)?l=null:u!==null&&bo(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=vc(t,e,up,null,null,a),Mn._currentValue=n),Oi(t,e),Nt(t,e,l,a),e.child;case 6:return t===null&&tt&&((t=a=pt)&&(a=Zp(a,e.pendingProps,fe),a!==null?(e.stateNode=a,Ut=e,pt=null,t=!0):t=!1),t||aa(e)),null;case 13:return xf(t,e,a);case 4:return Yn(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Ga(e,null,l,a):Nt(t,e,l,a),e.child;case 11:return ff(t,e,e.type,e.pendingProps,a);case 7:return Nt(t,e,e.pendingProps,a),e.child;case 8:return Nt(t,e,e.pendingProps.children,a),e.child;case 12:return Nt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,la(e,e.type,l.value),Nt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,Ra(e),n=Bt(n),l=l(n),e.flags|=1,Nt(t,e,l,a),e.child;case 14:return df(t,e,e.type,e.pendingProps,a);case 15:return hf(t,e,e.type,e.pendingProps,a);case 19:return zf(t,e,a);case 31:return pp(t,e,a);case 22:return pf(t,e,a,e.pendingProps);case 24:return Ra(e),l=Bt(At),t===null?(n=cc(),n===null&&(n=ft,i=ic(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},sc(e),la(e,At,n)):((t.lanes&a)!==0&&(rc(t,e),on(e,null,null,a),cn()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),la(e,At,l)):(l=i.cache,la(e,At,l),l!==n.cache&&nc(e,[At],a,!0))),Nt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function ke(t){t.flags|=4}function Vc(t,e,a,l,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Wf())t.flags|=8192;else throw La=mi,oc}else t.flags&=-16777217}function Tf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!qd(e))if(Wf())t.flags|=8192;else throw La=mi,oc}function Hi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?as():536870912,t.lanes|=e,wl|=e)}function pn(t,e){if(!tt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function gp(t,e,a){var l=e.pendingProps;switch(Pu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ue(At),Fa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(pl(e)?ke(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ec())),mt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(ke(e),i!==null?(mt(e),Tf(e,i)):(mt(e),Vc(e,n,null,l,a))):i?i!==t.memoizedState?(ke(e),mt(e),Tf(e,i)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&ke(e),mt(e),Vc(e,n,t,l,a)),null;case 27:if(Xn(e),a=We.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ke(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return mt(e),null}t=Dt.current,pl(e)?ar(e):(t=Cd(n,l,a),e.stateNode=t,ke(e))}return mt(e),null;case 5:if(Xn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ke(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return mt(e),null}if(i=Dt.current,pl(e))ar(e);else{var u=Ki(We.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[_t]=e,i[Gt]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(Rt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ke(e)}}return mt(e),Vc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&ke(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(r(166));if(t=We.current,pl(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=Ut,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[_t]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||xd(t.nodeValue,a)),t||aa(e,!0)}else t=Ki(t).createTextNode(l),t[_t]=e,e.stateNode=t}return mt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=pl(e),a!==null){if(t===null){if(!l)throw Error(r(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[_t]=e}else Ba(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else a=ec(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(te(e),e):(te(e),null);if((e.flags&128)!==0)throw Error(r(558))}return mt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=pl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(r(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[_t]=e}else Ba(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),n=!1}else n=ec(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(te(e),e):(te(e),null)}return te(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Hi(e,e.updateQueue),mt(e),null);case 4:return Fa(),t===null&&po(e.stateNode.containerInfo),mt(e),null;case 10:return Ue(e.type),mt(e),null;case 19:if(yt(St),l=e.memoizedState,l===null)return mt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)pn(l,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=bi(t),i!==null){for(e.flags|=128,pn(l,!1),t=i.updateQueue,e.updateQueue=t,Hi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Fs(a,t),a=a.sibling;return it(St,St.current&1|2),tt&&He(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&Jt()>Ri&&(e.flags|=128,n=!0,pn(l,!1),e.lanes=4194304)}else{if(!n)if(t=bi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Hi(e,t),pn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!tt)return mt(e),null}else 2*Jt()-l.renderingStartTime>Ri&&a!==536870912&&(e.flags|=128,n=!0,pn(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Jt(),t.sibling=null,a=St.current,it(St,n?a&1|2:a&1),tt&&He(e,l.treeForkCount),t):(mt(e),null);case 22:case 23:return te(e),pc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),a=e.updateQueue,a!==null&&Hi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&yt(ka),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ue(At),mt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function vp(t,e){switch(Pu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ue(At),Fa(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Xn(e),null;case 31:if(e.memoizedState!==null){if(te(e),e.alternate===null)throw Error(r(340));Ba()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(te(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Ba()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(St),null;case 4:return Fa(),null;case 10:return Ue(e.type),null;case 22:case 23:return te(e),pc(),t!==null&&yt(ka),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ue(At),null;case 25:return null;default:return null}}function jf(t,e){switch(Pu(e),e.tag){case 3:Ue(At),Fa();break;case 26:case 27:case 5:Xn(e);break;case 4:Fa();break;case 31:e.memoizedState!==null&&te(e);break;case 13:te(e);break;case 19:yt(St);break;case 10:Ue(e.type);break;case 22:case 23:te(e),pc(),t!==null&&yt(ka);break;case 24:Ue(At)}}function mn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(o){ct(e,e.return,o)}}function sa(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,n=e;var s=a,g=o;try{g()}catch(x){ct(n,s,x)}}}l=l.next}while(l!==i)}}catch(x){ct(e,e.return,x)}}function Ef(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{mr(e,a)}catch(l){ct(t,t.return,l)}}}function wf(t,e,a){a.props=Xa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){ct(t,e,l)}}function gn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){ct(t,e,n)}}function Ae(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ct(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ct(t,e,n)}else a.current=null}function Mf(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ct(t,t.return,n)}}function Zc(t,e,a){try{var l=t.stateNode;qp(l,t.type,a,e),l[Gt]=e}catch(n){ct(t,t.return,n)}}function Df(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ga(t.type)||t.tag===4}function Kc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Df(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=De));else if(l!==4&&(l===27&&ga(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Jc(t,e,a),t=t.sibling;t!==null;)Jc(t,e,a),t=t.sibling}function _i(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(_i(t,e,a),t=t.sibling;t!==null;)_i(t,e,a),t=t.sibling}function Of(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Rt(e,l,a),e[_t]=t,e[Gt]=a}catch(i){ct(t,t.return,i)}}var qe=!1,Et=!1,$c=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function yp(t,e){if(t=t.containerInfo,vo=tu,t=Ys(t),Yu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var u=0,o=-1,s=-1,g=0,x=0,A=t,v=null;e:for(;;){for(var b;A!==a||n!==0&&A.nodeType!==3||(o=u+n),A!==i||l!==0&&A.nodeType!==3||(s=u+l),A.nodeType===3&&(u+=A.nodeValue.length),(b=A.firstChild)!==null;)v=A,A=b;for(;;){if(A===t)break e;if(v===a&&++g===n&&(o=u),v===i&&++x===l&&(s=u),(b=A.nextSibling)!==null)break;A=v,v=A.parentNode}A=b}a=o===-1||s===-1?null:{start:o,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(yo={focusedElem:t,selectionRange:a},tu=!1,Ct=e;Ct!==null;)if(e=Ct,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ct=t;else for(;Ct!==null;){switch(e=Ct,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var H=Xa(a.type,n);t=l.getSnapshotBeforeUpdate(H,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(L){ct(a,a.return,L)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)So(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":So(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Ct=t;break}Ct=e.return}}function Hf(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ge(t,a),l&4&&mn(5,a);break;case 1:if(Ge(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){ct(a,a.return,u)}else{var n=Xa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){ct(a,a.return,u)}}l&64&&Ef(a),l&512&&gn(a,a.return);break;case 3:if(Ge(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{mr(t,e)}catch(u){ct(a,a.return,u)}}break;case 27:e===null&&l&4&&Of(a);case 26:case 5:Ge(t,a),e===null&&l&4&&Mf(a),l&512&&gn(a,a.return);break;case 12:Ge(t,a);break;case 31:Ge(t,a),l&4&&Bf(t,a);break;case 13:Ge(t,a),l&4&&Nf(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=wp.bind(null,a),Kp(t,a))));break;case 22:if(l=a.memoizedState!==null||qe,!l){e=e!==null&&e.memoizedState!==null||Et,n=qe;var i=Et;qe=l,(Et=e)&&!i?Ye(t,a,(a.subtreeFlags&8772)!==0):Ge(t,a),qe=n,Et=i}break;case 30:break;default:Ge(t,a)}}function _f(t){var e=t.alternate;e!==null&&(t.alternate=null,_f(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ju(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vt=null,Xt=!1;function Le(t,e,a){for(a=a.child;a!==null;)Uf(t,e,a),a=a.sibling}function Uf(t,e,a){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(ql,a)}catch{}switch(a.tag){case 26:Et||Ae(a,e),Le(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Et||Ae(a,e);var l=vt,n=Xt;ga(a.type)&&(vt=a.stateNode,Xt=!1),Le(t,e,a),jn(a.stateNode),vt=l,Xt=n;break;case 5:Et||Ae(a,e);case 6:if(l=vt,n=Xt,vt=null,Le(t,e,a),vt=l,Xt=n,vt!==null)if(Xt)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(a.stateNode)}catch(i){ct(a,e,i)}else try{vt.removeChild(a.stateNode)}catch(i){ct(a,e,i)}break;case 18:vt!==null&&(Xt?(t=vt,Ed(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Bl(t)):Ed(vt,a.stateNode));break;case 4:l=vt,n=Xt,vt=a.stateNode.containerInfo,Xt=!0,Le(t,e,a),vt=l,Xt=n;break;case 0:case 11:case 14:case 15:sa(2,a,e),Et||sa(4,a,e),Le(t,e,a);break;case 1:Et||(Ae(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&wf(a,e,l)),Le(t,e,a);break;case 21:Le(t,e,a);break;case 22:Et=(l=Et)||a.memoizedState!==null,Le(t,e,a),Et=l;break;default:Le(t,e,a)}}function Bf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Bl(t)}catch(a){ct(e,e.return,a)}}}function Nf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bl(t)}catch(a){ct(e,e.return,a)}}function bp(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Cf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Cf),e;default:throw Error(r(435,t.tag))}}function Ui(t,e){var a=bp(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=Mp.bind(null,t,l);l.then(n,n)}})}function Qt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,u=e,o=u;t:for(;o!==null;){switch(o.tag){case 27:if(ga(o.type)){vt=o.stateNode,Xt=!1;break t}break;case 5:vt=o.stateNode,Xt=!1;break t;case 3:case 4:vt=o.stateNode.containerInfo,Xt=!0;break t}o=o.return}if(vt===null)throw Error(r(160));Uf(i,u,n),vt=null,Xt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Rf(e,t),e=e.sibling}var ve=null;function Rf(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qt(e,t),Vt(t),l&4&&(sa(3,t,t.return),mn(3,t),sa(5,t,t.return));break;case 1:Qt(e,t),Vt(t),l&512&&(Et||a===null||Ae(a,a.return)),l&64&&qe&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=ve;if(Qt(e,t),Vt(t),l&512&&(Et||a===null||Ae(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Yl]||i[_t]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Rt(i,l,a),i[_t]=t,Ot(i),l=i;break t;case"link":var u=Rd("link","href",n).get(l+(a.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(o,1);break e}}i=n.createElement(l),Rt(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Rd("meta","content",n).get(l+(a.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(o,1);break e}}i=n.createElement(l),Rt(i,l,a),n.head.appendChild(i);break;default:throw Error(r(468,l))}i[_t]=t,Ot(i),l=i}t.stateNode=l}else kd(n,t.type,t.stateNode);else t.stateNode=Nd(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?kd(n,t.type,t.stateNode):Nd(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Zc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Qt(e,t),Vt(t),l&512&&(Et||a===null||Ae(a,a.return)),a!==null&&l&4&&Zc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Qt(e,t),Vt(t),l&512&&(Et||a===null||Ae(a,a.return)),t.flags&32){n=t.stateNode;try{nl(n,"")}catch(H){ct(t,t.return,H)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Zc(t,n,a!==null?a.memoizedProps:n)),l&1024&&($c=!0);break;case 6:if(Qt(e,t),Vt(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(H){ct(t,t.return,H)}}break;case 3:if(Wi=null,n=ve,ve=Ji(e.containerInfo),Qt(e,t),ve=n,Vt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Bl(e.containerInfo)}catch(H){ct(t,t.return,H)}$c&&($c=!1,kf(t));break;case 4:l=ve,ve=Ji(t.stateNode.containerInfo),Qt(e,t),Vt(t),ve=l;break;case 12:Qt(e,t),Vt(t);break;case 31:Qt(e,t),Vt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ui(t,l)));break;case 13:Qt(e,t),Vt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ni=Jt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ui(t,l)));break;case 22:n=t.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,g=qe,x=Et;if(qe=g||n,Et=x||s,Qt(e,t),Et=x,qe=g,Vt(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||s||qe||Et||Qa(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){s=a=e;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=s.stateNode;var A=s.memoizedProps.style,v=A!=null&&A.hasOwnProperty("display")?A.display:null;o.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(H){ct(s,s.return,H)}}}else if(e.tag===6){if(a===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(H){ct(s,s.return,H)}}}else if(e.tag===18){if(a===null){s=e;try{var b=s.stateNode;n?wd(b,!0):wd(s.stateNode,!1)}catch(H){ct(s,s.return,H)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ui(t,a))));break;case 19:Qt(e,t),Vt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ui(t,l)));break;case 30:break;case 21:break;default:Qt(e,t),Vt(t)}}function Vt(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Df(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var n=a.stateNode,i=Kc(t);_i(t,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(nl(u,""),a.flags&=-33);var o=Kc(t);_i(t,o,u);break;case 3:case 4:var s=a.stateNode.containerInfo,g=Kc(t);Jc(t,g,s);break;default:throw Error(r(161))}}catch(x){ct(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;kf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ge(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Hf(t,e.alternate,e),e=e.sibling}function Qa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:sa(4,e,e.return),Qa(e);break;case 1:Ae(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&wf(e,e.return,a),Qa(e);break;case 27:jn(e.stateNode);case 26:case 5:Ae(e,e.return),Qa(e);break;case 22:e.memoizedState===null&&Qa(e);break;case 30:Qa(e);break;default:Qa(e)}t=t.sibling}}function Ye(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ye(n,i,a),mn(4,i);break;case 1:if(Ye(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){ct(l,l.return,g)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)pr(s[n],o)}catch(g){ct(l,l.return,g)}}a&&u&64&&Ef(i),gn(i,i.return);break;case 27:Of(i);case 26:case 5:Ye(n,i,a),a&&l===null&&u&4&&Mf(i),gn(i,i.return);break;case 12:Ye(n,i,a);break;case 31:Ye(n,i,a),a&&u&4&&Bf(n,i);break;case 13:Ye(n,i,a),a&&u&4&&Nf(n,i);break;case 22:i.memoizedState===null&&Ye(n,i,a),gn(i,i.return);break;case 30:break;default:Ye(n,i,a)}e=e.sibling}}function Wc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&en(a))}function Fc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&en(t))}function ye(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qf(t,e,a,l),e=e.sibling}function qf(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ye(t,e,a,l),n&2048&&mn(9,e);break;case 1:ye(t,e,a,l);break;case 3:ye(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&en(t)));break;case 12:if(n&2048){ye(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){ct(e,e.return,s)}}else ye(t,e,a,l);break;case 31:ye(t,e,a,l);break;case 13:ye(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?ye(t,e,a,l):vn(t,e):i._visibility&2?ye(t,e,a,l):(i._visibility|=2,Tl(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Wc(u,e);break;case 24:ye(t,e,a,l),n&2048&&Fc(e.alternate,e);break;default:ye(t,e,a,l)}}function Tl(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,o=a,s=l,g=u.flags;switch(u.tag){case 0:case 11:case 15:Tl(i,u,o,s,n),mn(8,u);break;case 23:break;case 22:var x=u.stateNode;u.memoizedState!==null?x._visibility&2?Tl(i,u,o,s,n):vn(i,u):(x._visibility|=2,Tl(i,u,o,s,n)),n&&g&2048&&Wc(u.alternate,u);break;case 24:Tl(i,u,o,s,n),n&&g&2048&&Fc(u.alternate,u);break;default:Tl(i,u,o,s,n)}e=e.sibling}}function vn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:vn(a,l),n&2048&&Wc(l.alternate,l);break;case 24:vn(a,l),n&2048&&Fc(l.alternate,l);break;default:vn(a,l)}e=e.sibling}}var yn=8192;function jl(t,e,a){if(t.subtreeFlags&yn)for(t=t.child;t!==null;)Lf(t,e,a),t=t.sibling}function Lf(t,e,a){switch(t.tag){case 26:jl(t,e,a),t.flags&yn&&t.memoizedState!==null&&im(a,ve,t.memoizedState,t.memoizedProps);break;case 5:jl(t,e,a);break;case 3:case 4:var l=ve;ve=Ji(t.stateNode.containerInfo),jl(t,e,a),ve=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=yn,yn=16777216,jl(t,e,a),yn=l):jl(t,e,a));break;default:jl(t,e,a)}}function Gf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function bn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Ct=l,Xf(l,t)}Gf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yf(t),t=t.sibling}function Yf(t){switch(t.tag){case 0:case 11:case 15:bn(t),t.flags&2048&&sa(9,t,t.return);break;case 3:bn(t);break;case 12:bn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Bi(t)):bn(t);break;default:bn(t)}}function Bi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Ct=l,Xf(l,t)}Gf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:sa(8,e,e.return),Bi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Bi(e));break;default:Bi(e)}t=t.sibling}}function Xf(t,e){for(;Ct!==null;){var a=Ct;switch(a.tag){case 0:case 11:case 15:sa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:en(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ct=l;else t:for(a=t;Ct!==null;){l=Ct;var n=l.sibling,i=l.return;if(_f(l),l===a){Ct=null;break t}if(n!==null){n.return=i,Ct=n;break t}Ct=i}}}var xp={getCacheForType:function(t){var e=Bt(At),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Bt(At).controller.signal}},Sp=typeof WeakMap=="function"?WeakMap:Map,nt=0,ft=null,$=null,F=0,ut=0,ee=null,ra=!1,El=!1,Ic=!1,Xe=0,xt=0,fa=0,Va=0,Pc=0,ae=0,wl=0,xn=null,Zt=null,to=!1,Ni=0,Qf=0,Ri=1/0,ki=null,da=null,wt=0,ha=null,Ml=null,Qe=0,eo=0,ao=null,Vf=null,Sn=0,lo=null;function le(){return(nt&2)!==0&&F!==0?F&-F:z.T!==null?so():us()}function Zf(){if(ae===0)if((F&536870912)===0||tt){var t=Zn;Zn<<=1,(Zn&3932160)===0&&(Zn=262144),ae=t}else ae=536870912;return t=Pt.current,t!==null&&(t.flags|=32),ae}function Kt(t,e,a){(t===ft&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(Dl(t,0),pa(t,F,ae,!1)),Gl(t,a),((nt&2)===0||t!==ft)&&(t===ft&&((nt&2)===0&&(Va|=a),xt===4&&pa(t,F,ae,!1)),Te(t))}function Kf(t,e,a){if((nt&6)!==0)throw Error(r(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Ll(t,e),n=l?Tp(t,e):io(t,e,!0),i=l;do{if(n===0){El&&!l&&pa(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!zp(a)){n=io(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var o=t;n=xn;var s=o.current.memoizedState.isDehydrated;if(s&&(Dl(o,u).flags|=256),u=io(o,u,!1),u!==2){if(Ic&&!s){o.errorRecoveryDisabledLanes|=i,Va|=i,n=4;break t}i=Zt,Zt=n,i!==null&&(Zt===null?Zt=i:Zt.push.apply(Zt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Dl(t,0),pa(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:pa(l,e,ae,!ra);break t;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(n=Ni+300-Jt(),10<n)){if(pa(l,e,ae,!ra),Jn(l,0,!0)!==0)break t;Qe=e,l.timeoutHandle=Td(Jf.bind(null,l,a,Zt,ki,to,e,ae,Va,wl,ra,i,"Throttled",-0,0),n);break t}Jf(l,a,Zt,ki,to,e,ae,Va,wl,ra,i,null,-0,0)}}break}while(!0);Te(t)}function Jf(t,e,a,l,n,i,u,o,s,g,x,A,v,b){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:De},Lf(e,i,A);var H=(i&62914560)===i?Ni-Jt():(i&4194048)===i?Qf-Jt():0;if(H=um(A,H),H!==null){Qe=i,t.cancelPendingCommit=H(ad.bind(null,t,e,i,a,l,n,u,o,s,x,A,null,v,b)),pa(t,i,u,!g);return}}ad(t,e,i,a,l,n,u,o,s)}function zp(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Ft(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pa(t,e,a,l){e&=~Pc,e&=~Va,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-Wt(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&ls(t,a,e)}function qi(){return(nt&6)===0?(zn(0),!1):!0}function no(){if($!==null){if(ut===0)var t=$.return;else t=$,_e=Na=null,xc(t),bl=null,ln=0,t=$;for(;t!==null;)jf(t.alternate,t),t=t.return;$=null}}function Dl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Yp(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qe=0,no(),ft=t,$=a=Ce(t.current,null),F=e,ut=0,ee=null,ra=!1,El=Ll(t,e),Ic=!1,wl=ae=Pc=Va=fa=xt=0,Zt=xn=null,to=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-Wt(l),i=1<<n;e|=t[n],l&=~i}return Xe=e,ui(),a}function $f(t,e){V=null,z.H=dn,e===yl||e===pi?(e=rr(),ut=3):e===oc?(e=rr(),ut=4):ut=e===Nc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ee=e,$===null&&(xt=1,Mi(t,oe(e,t.current)))}function Wf(){var t=Pt.current;return t===null?!0:(F&4194048)===F?de===null:(F&62914560)===F||(F&536870912)!==0?t===de:!1}function Ff(){var t=z.H;return z.H=dn,t===null?dn:t}function If(){var t=z.A;return z.A=xp,t}function Li(){xt=4,ra||(F&4194048)!==F&&Pt.current!==null||(El=!0),(fa&134217727)===0&&(Va&134217727)===0||ft===null||pa(ft,F,ae,!1)}function io(t,e,a){var l=nt;nt|=2;var n=Ff(),i=If();(ft!==t||F!==e)&&(ki=null,Dl(t,e)),e=!1;var u=xt;t:do try{if(ut!==0&&$!==null){var o=$,s=ee;switch(ut){case 8:no(),u=6;break t;case 3:case 2:case 9:case 6:Pt.current===null&&(e=!0);var g=ut;if(ut=0,ee=null,Ol(t,o,s,g),a&&El){u=0;break t}break;default:g=ut,ut=0,ee=null,Ol(t,o,s,g)}}Ap(),u=xt;break}catch(x){$f(t,x)}while(!0);return e&&t.shellSuspendCounter++,_e=Na=null,nt=l,z.H=n,z.A=i,$===null&&(ft=null,F=0,ui()),u}function Ap(){for(;$!==null;)Pf($)}function Tp(t,e){var a=nt;nt|=2;var l=Ff(),n=If();ft!==t||F!==e?(ki=null,Ri=Jt()+500,Dl(t,e)):El=Ll(t,e);t:do try{if(ut!==0&&$!==null){e=$;var i=ee;e:switch(ut){case 1:ut=0,ee=null,Ol(t,e,i,1);break;case 2:case 9:if(or(i)){ut=0,ee=null,td(e);break}e=function(){ut!==2&&ut!==9||ft!==t||(ut=7),Te(t)},i.then(e,e);break t;case 3:ut=7;break t;case 4:ut=5;break t;case 7:or(i)?(ut=0,ee=null,td(e)):(ut=0,ee=null,Ol(t,e,i,7));break;case 5:var u=null;switch($.tag){case 26:u=$.memoizedState;case 5:case 27:var o=$;if(u?qd(u):o.stateNode.complete){ut=0,ee=null;var s=o.sibling;if(s!==null)$=s;else{var g=o.return;g!==null?($=g,Gi(g)):$=null}break e}}ut=0,ee=null,Ol(t,e,i,5);break;case 6:ut=0,ee=null,Ol(t,e,i,6);break;case 8:no(),xt=6;break t;default:throw Error(r(462))}}jp();break}catch(x){$f(t,x)}while(!0);return _e=Na=null,z.H=l,z.A=n,nt=a,$!==null?0:(ft=null,F=0,ui(),xt)}function jp(){for(;$!==null&&!J0();)Pf($)}function Pf(t){var e=Af(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?Gi(t):$=e}function td(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=vf(a,e,e.pendingProps,e.type,void 0,F);break;case 11:e=vf(a,e,e.pendingProps,e.type.render,e.ref,F);break;case 5:xc(e);default:jf(a,e),e=$=Fs(e,Xe),e=Af(a,e,Xe)}t.memoizedProps=t.pendingProps,e===null?Gi(t):$=e}function Ol(t,e,a,l){_e=Na=null,xc(e),bl=null,ln=0;var n=e.return;try{if(hp(t,n,e,a,F)){xt=1,Mi(t,oe(a,t.current)),$=null;return}}catch(i){if(n!==null)throw $=n,i;xt=1,Mi(t,oe(a,t.current)),$=null;return}e.flags&32768?(tt||l===1?t=!0:El||(F&536870912)!==0?t=!1:(ra=t=!0,(l===2||l===9||l===3||l===6)&&(l=Pt.current,l!==null&&l.tag===13&&(l.flags|=16384))),ed(e,t)):Gi(e)}function Gi(t){var e=t;do{if((e.flags&32768)!==0){ed(e,ra);return}t=e.return;var a=gp(e.alternate,e,Xe);if(a!==null){$=a;return}if(e=e.sibling,e!==null){$=e;return}$=e=t}while(e!==null);xt===0&&(xt=5)}function ed(t,e){do{var a=vp(t.alternate,t);if(a!==null){a.flags&=32767,$=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){$=t;return}$=t=a}while(t!==null);xt=6,$=null}function ad(t,e,a,l,n,i,u,o,s){t.cancelPendingCommit=null;do Yi();while(wt!==0);if((nt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Ku,nh(t,a,i,u,o,s),t===ft&&($=ft=null,F=0),Ml=e,ha=t,Qe=a,eo=i,ao=n,Vf=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Dp(Qn,function(){return cd(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,n=O.p,O.p=2,u=nt,nt|=4;try{yp(t,e,a)}finally{nt=u,O.p=n,z.T=l}}wt=1,ld(),nd(),id()}}function ld(){if(wt===1){wt=0;var t=ha,e=Ml,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=O.p;O.p=2;var n=nt;nt|=4;try{Rf(e,t);var i=yo,u=Ys(t.containerInfo),o=i.focusedElem,s=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&Gs(o.ownerDocument.documentElement,o)){if(s!==null&&Yu(o)){var g=s.start,x=s.end;if(x===void 0&&(x=g),"selectionStart"in o)o.selectionStart=g,o.selectionEnd=Math.min(x,o.value.length);else{var A=o.ownerDocument||document,v=A&&A.defaultView||window;if(v.getSelection){var b=v.getSelection(),H=o.textContent.length,L=Math.min(s.start,H),rt=s.end===void 0?L:Math.min(s.end,H);!b.extend&&L>rt&&(u=rt,rt=L,L=u);var h=Ls(o,L),d=Ls(o,rt);if(h&&d&&(b.rangeCount!==1||b.anchorNode!==h.node||b.anchorOffset!==h.offset||b.focusNode!==d.node||b.focusOffset!==d.offset)){var m=A.createRange();m.setStart(h.node,h.offset),b.removeAllRanges(),L>rt?(b.addRange(m),b.extend(d.node,d.offset)):(m.setEnd(d.node,d.offset),b.addRange(m))}}}}for(A=[],b=o;b=b.parentNode;)b.nodeType===1&&A.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<A.length;o++){var S=A[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}tu=!!vo,yo=vo=null}finally{nt=n,O.p=l,z.T=a}}t.current=e,wt=2}}function nd(){if(wt===2){wt=0;var t=ha,e=Ml,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=O.p;O.p=2;var n=nt;nt|=4;try{Hf(t,e.alternate,e)}finally{nt=n,O.p=l,z.T=a}}wt=3}}function id(){if(wt===4||wt===3){wt=0,$0();var t=ha,e=Ml,a=Qe,l=Vf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?wt=5:(wt=0,Ml=ha=null,ud(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(da=null),Au(a),e=e.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(ql,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=z.T,n=O.p,O.p=2,z.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var o=l[u];i(o.value,{componentStack:o.stack})}}finally{z.T=e,O.p=n}}(Qe&3)!==0&&Yi(),Te(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===lo?Sn++:(Sn=0,lo=t):Sn=0,zn(0)}}function ud(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,en(e)))}function Yi(){return ld(),nd(),id(),cd()}function cd(){if(wt!==5)return!1;var t=ha,e=eo;eo=0;var a=Au(Qe),l=z.T,n=O.p;try{O.p=32>a?32:a,z.T=null,a=ao,ao=null;var i=ha,u=Qe;if(wt=0,Ml=ha=null,Qe=0,(nt&6)!==0)throw Error(r(331));var o=nt;if(nt|=4,Yf(i.current),qf(i,i.current,u,a),nt=o,zn(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(ql,i)}catch{}return!0}finally{O.p=n,z.T=l,ud(t,e)}}function od(t,e,a){e=oe(a,e),e=Bc(t.stateNode,e,2),t=ua(t,e,2),t!==null&&(Gl(t,2),Te(t))}function ct(t,e,a){if(t.tag===3)od(t,t,a);else for(;e!==null;){if(e.tag===3){od(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))){t=oe(a,t),a=sf(2),l=ua(e,a,2),l!==null&&(rf(a,l,e,t),Gl(l,2),Te(l));break}}e=e.return}}function uo(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Sp;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Ic=!0,n.add(a),t=Ep.bind(null,t,e,a),e.then(t,t))}function Ep(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ft===t&&(F&a)===a&&(xt===4||xt===3&&(F&62914560)===F&&300>Jt()-Ni?(nt&2)===0&&Dl(t,0):Pc|=a,wl===F&&(wl=0)),Te(t)}function sd(t,e){e===0&&(e=as()),t=_a(t,e),t!==null&&(Gl(t,e),Te(t))}function wp(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),sd(t,a)}function Mp(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(e),sd(t,a)}function Dp(t,e){return bu(t,e)}var Xi=null,Cl=null,co=!1,Qi=!1,oo=!1,ma=0;function Te(t){t!==Cl&&t.next===null&&(Cl===null?Xi=Cl=t:Cl=Cl.next=t),Qi=!0,co||(co=!0,Cp())}function zn(t,e){if(!oo&&Qi){oo=!0;do for(var a=!1,l=Xi;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-Wt(42|t)+1)-1,i&=n&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,hd(l,i))}else i=F,i=Jn(l,l===ft?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ll(l,i)||(a=!0,hd(l,i));l=l.next}while(a);oo=!1}}function Op(){rd()}function rd(){Qi=co=!1;var t=0;ma!==0&&Gp()&&(t=ma);for(var e=Jt(),a=null,l=Xi;l!==null;){var n=l.next,i=fd(l,e);i===0?(l.next=null,a===null?Xi=n:a.next=n,n===null&&(Cl=a)):(a=l,(t!==0||(i&3)!==0)&&(Qi=!0)),l=n}wt!==0&&wt!==5||zn(t),ma!==0&&(ma=0)}function fd(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Wt(i),o=1<<u,s=n[u];s===-1?((o&a)===0||(o&l)!==0)&&(n[u]=lh(o,e)):s<=e&&(t.expiredLanes|=o),i&=~o}if(e=ft,a=F,a=Jn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&xu(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ll(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&xu(l),Au(a)){case 2:case 8:a=ts;break;case 32:a=Qn;break;case 268435456:a=es;break;default:a=Qn}return l=dd.bind(null,t),a=bu(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&xu(l),t.callbackPriority=2,t.callbackNode=null,2}function dd(t,e){if(wt!==0&&wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yi()&&t.callbackNode!==a)return null;var l=F;return l=Jn(t,t===ft?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Kf(t,l,e),fd(t,Jt()),t.callbackNode!=null&&t.callbackNode===a?dd.bind(null,t):null)}function hd(t,e){if(Yi())return null;Kf(t,e,!0)}function Cp(){Xp(function(){(nt&6)!==0?bu(Po,Op):rd()})}function so(){if(ma===0){var t=gl;t===0&&(t=Vn,Vn<<=1,(Vn&261888)===0&&(Vn=256)),ma=t}return ma}function pd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:In(""+t)}function md(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Hp(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=pd((n[Gt]||null).action),u=l.submitter;u&&(e=(e=u[Gt]||null)?pd(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var o=new ai("action","action",null,l,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ma!==0){var s=u?md(n,u):new FormData(n);Dc(a,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(o.preventDefault(),s=u?md(n,u):new FormData(n),Dc(a,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var ro=0;ro<Zu.length;ro++){var fo=Zu[ro],_p=fo.toLowerCase(),Up=fo[0].toUpperCase()+fo.slice(1);ge(_p,"on"+Up)}ge(Vs,"onAnimationEnd"),ge(Zs,"onAnimationIteration"),ge(Ks,"onAnimationStart"),ge("dblclick","onDoubleClick"),ge("focusin","onFocus"),ge("focusout","onBlur"),ge(Wh,"onTransitionRun"),ge(Fh,"onTransitionStart"),ge(Ih,"onTransitionCancel"),ge(Js,"onTransitionEnd"),al("onMouseEnter",["mouseout","mouseover"]),al("onMouseLeave",["mouseout","mouseover"]),al("onPointerEnter",["pointerout","pointerover"]),al("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(An));function gd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var o=l[u],s=o.instance,g=o.currentTarget;if(o=o.listener,s!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=g;try{i(n)}catch(x){ii(x)}n.currentTarget=null,i=s}else for(u=0;u<l.length;u++){if(o=l[u],s=o.instance,g=o.currentTarget,o=o.listener,s!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=g;try{i(n)}catch(x){ii(x)}n.currentTarget=null,i=s}}}}function W(t,e){var a=e[Tu];a===void 0&&(a=e[Tu]=new Set);var l=t+"__bubble";a.has(l)||(vd(e,t,2,!1),a.add(l))}function ho(t,e,a){var l=0;e&&(l|=4),vd(a,t,l,e)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[Vi]){t[Vi]=!0,ss.forEach(function(a){a!=="selectionchange"&&(Bp.has(a)||ho(a,!1,t),ho(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vi]||(e[Vi]=!0,ho("selectionchange",!1,e))}}function vd(t,e,a,l){switch(Zd(e)){case 2:var n=sm;break;case 8:n=rm;break;default:n=Do}a=n.bind(null,e,a,t),n=void 0,!_u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function mo(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var o=l.stateNode.containerInfo;if(o===n)break;if(u===4)for(u=l.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;o!==null;){if(u=Pa(o),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){l=i=u;continue t}o=o.parentNode}}l=l.return}Ss(function(){var g=i,x=Cu(a),A=[];t:{var v=$s.get(t);if(v!==void 0){var b=ai,H=t;switch(t){case"keypress":if(ti(a)===0)break t;case"keydown":case"keyup":b=Mh;break;case"focusin":H="focus",b=Ru;break;case"focusout":H="blur",b=Ru;break;case"beforeblur":case"afterblur":b=Ru;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=gh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ch;break;case Vs:case Zs:case Ks:b=bh;break;case Js:b=_h;break;case"scroll":case"scrollend":b=ph;break;case"wheel":b=Bh;break;case"copy":case"cut":case"paste":b=Sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Es;break;case"toggle":case"beforetoggle":b=Rh}var L=(e&4)!==0,rt=!L&&(t==="scroll"||t==="scrollend"),h=L?v!==null?v+"Capture":null:v;L=[];for(var d=g,m;d!==null;){var S=d;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||h===null||(S=Ql(d,h),S!=null&&L.push(Tn(d,S,m))),rt)break;d=d.return}0<L.length&&(v=new b(v,H,null,a,x),A.push({event:v,listeners:L}))}}if((e&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",v&&a!==Ou&&(H=a.relatedTarget||a.fromElement)&&(Pa(H)||H[Ia]))break t;if((b||v)&&(v=x.window===x?x:(v=x.ownerDocument)?v.defaultView||v.parentWindow:window,b?(H=a.relatedTarget||a.toElement,b=g,H=H?Pa(H):null,H!==null&&(rt=E(H),L=H.tag,H!==rt||L!==5&&L!==27&&L!==6)&&(H=null)):(b=null,H=g),b!==H)){if(L=Ts,S="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(L=Es,S="onPointerLeave",h="onPointerEnter",d="pointer"),rt=b==null?v:Xl(b),m=H==null?v:Xl(H),v=new L(S,d+"leave",b,a,x),v.target=rt,v.relatedTarget=m,S=null,Pa(x)===g&&(L=new L(h,d+"enter",H,a,x),L.target=m,L.relatedTarget=rt,S=L),rt=S,b&&H)e:{for(L=Np,h=b,d=H,m=0,S=h;S;S=L(S))m++;S=0;for(var R=d;R;R=L(R))S++;for(;0<m-S;)h=L(h),m--;for(;0<S-m;)d=L(d),S--;for(;m--;){if(h===d||d!==null&&h===d.alternate){L=h;break e}h=L(h),d=L(d)}L=null}else L=null;b!==null&&yd(A,v,b,L,!1),H!==null&&rt!==null&&yd(A,rt,H,L,!0)}}t:{if(v=g?Xl(g):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var et=Us;else if(Hs(v))if(Bs)et=Kh;else{et=Vh;var U=Qh}else b=v.nodeName,!b||b.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?g&&Du(g.elementType)&&(et=Us):et=Zh;if(et&&(et=et(t,g))){_s(A,et,a,x);break t}U&&U(t,v,g),t==="focusout"&&g&&v.type==="number"&&g.memoizedProps.value!=null&&Mu(v,"number",v.value)}switch(U=g?Xl(g):window,t){case"focusin":(Hs(U)||U.contentEditable==="true")&&(ol=U,Xu=g,Il=null);break;case"focusout":Il=Xu=ol=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Xs(A,a,x);break;case"selectionchange":if($h)break;case"keydown":case"keyup":Xs(A,a,x)}var Z;if(qu)t:{switch(t){case"compositionstart":var I="onCompositionStart";break t;case"compositionend":I="onCompositionEnd";break t;case"compositionupdate":I="onCompositionUpdate";break t}I=void 0}else cl?Os(t,a)&&(I="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(ws&&a.locale!=="ko"&&(cl||I!=="onCompositionStart"?I==="onCompositionEnd"&&cl&&(Z=zs()):(Pe=x,Uu="value"in Pe?Pe.value:Pe.textContent,cl=!0)),U=Zi(g,I),0<U.length&&(I=new js(I,t,null,a,x),A.push({event:I,listeners:U}),Z?I.data=Z:(Z=Cs(a),Z!==null&&(I.data=Z)))),(Z=qh?Lh(t,a):Gh(t,a))&&(I=Zi(g,"onBeforeInput"),0<I.length&&(U=new js("onBeforeInput","beforeinput",null,a,x),A.push({event:U,listeners:I}),U.data=Z)),Hp(A,t,g,a,x)}gd(A,e)})}function Tn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Zi(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ql(t,a),n!=null&&l.unshift(Tn(t,n,i)),n=Ql(t,e),n!=null&&l.push(Tn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function Np(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function yd(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var o=a,s=o.alternate,g=o.stateNode;if(o=o.tag,s!==null&&s===l)break;o!==5&&o!==26&&o!==27||g===null||(s=g,n?(g=Ql(a,i),g!=null&&u.unshift(Tn(a,g,s))):n||(g=Ql(a,i),g!=null&&u.push(Tn(a,g,s)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var Rp=/\r\n?/g,kp=/\u0000|\uFFFD/g;function bd(t){return(typeof t=="string"?t:""+t).replace(Rp,`
`).replace(kp,"")}function xd(t,e){return e=bd(e),bd(t)===e}function st(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||nl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&nl(t,""+l);break;case"className":Wn(t,"class",l);break;case"tabIndex":Wn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Wn(t,a,l);break;case"style":bs(t,l,i);break;case"data":if(e!=="object"){Wn(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=In(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&st(t,e,"name",n.name,n,null),st(t,e,"formEncType",n.formEncType,n,null),st(t,e,"formMethod",n.formMethod,n,null),st(t,e,"formTarget",n.formTarget,n,null)):(st(t,e,"encType",n.encType,n,null),st(t,e,"method",n.method,n,null),st(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=In(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=De);break;case"onScroll":l!=null&&W("scroll",t);break;case"onScrollEnd":l!=null&&W("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=In(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":W("beforetoggle",t),W("toggle",t),$n(t,"popover",l);break;case"xlinkActuate":Me(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Me(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Me(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Me(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Me(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Me(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Me(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Me(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Me(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$n(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dh.get(a)||a,$n(t,a,l))}}function go(t,e,a,l,n,i){switch(a){case"style":bs(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?nl(t,l):(typeof l=="number"||typeof l=="bigint")&&nl(t,""+l);break;case"onScroll":l!=null&&W("scroll",t);break;case"onScrollEnd":l!=null&&W("scrollend",t);break;case"onClick":l!=null&&(t.onclick=De);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Gt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):$n(t,a,l)}}}function Rt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",t),W("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:st(t,e,i,u,a,null)}}n&&st(t,e,"srcSet",a.srcSet,a,null),l&&st(t,e,"src",a.src,a,null);return;case"input":W("invalid",t);var o=i=u=n=null,s=null,g=null;for(l in a)if(a.hasOwnProperty(l)){var x=a[l];if(x!=null)switch(l){case"name":n=x;break;case"type":u=x;break;case"checked":s=x;break;case"defaultChecked":g=x;break;case"value":i=x;break;case"defaultValue":o=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(137,e));break;default:st(t,e,l,x,a,null)}}ms(t,i,o,s,g,u,n,!1);return;case"select":W("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":l=o;default:st(t,e,n,o,a,null)}e=i,a=u,t.multiple=!!l,e!=null?ll(t,!!l,e,!1):a!=null&&ll(t,!!l,a,!0);return;case"textarea":W("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:st(t,e,u,o,a,null)}vs(t,l,n,i);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(l=a[s],l!=null))switch(s){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:st(t,e,s,l,a,null)}return;case"dialog":W("beforetoggle",t),W("toggle",t),W("cancel",t),W("close",t);break;case"iframe":case"object":W("load",t);break;case"video":case"audio":for(l=0;l<An.length;l++)W(An[l],t);break;case"image":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"embed":case"source":case"link":W("error",t),W("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:st(t,e,g,l,a,null)}return;default:if(Du(e)){for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!==void 0&&go(t,e,x,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&st(t,e,o,l,a,null))}function qp(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,o=null,s=null,g=null,x=null;for(b in a){var A=a[b];if(a.hasOwnProperty(b)&&A!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":s=A;default:l.hasOwnProperty(b)||st(t,e,b,null,l,A)}}for(var v in l){var b=l[v];if(A=a[v],l.hasOwnProperty(v)&&(b!=null||A!=null))switch(v){case"type":i=b;break;case"name":n=b;break;case"checked":g=b;break;case"defaultChecked":x=b;break;case"value":u=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(137,e));break;default:b!==A&&st(t,e,v,b,l,A)}}wu(t,u,o,s,g,x,i,n);return;case"select":b=u=o=v=null;for(i in a)if(s=a[i],a.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":b=s;default:l.hasOwnProperty(i)||st(t,e,i,null,l,s)}for(n in l)if(i=l[n],s=a[n],l.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":v=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==s&&st(t,e,n,i,l,s)}e=o,a=u,l=b,v!=null?ll(t,!!a,v,!1):!!l!=!!a&&(e!=null?ll(t,!!a,e,!0):ll(t,!!a,a?[]:"",!1));return;case"textarea":b=v=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:st(t,e,o,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":v=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&st(t,e,u,n,l,i)}gs(t,v,b);return;case"option":for(var H in a)if(v=a[H],a.hasOwnProperty(H)&&v!=null&&!l.hasOwnProperty(H))switch(H){case"selected":t.selected=!1;break;default:st(t,e,H,null,l,v)}for(s in l)if(v=l[s],b=a[s],l.hasOwnProperty(s)&&v!==b&&(v!=null||b!=null))switch(s){case"selected":t.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:st(t,e,s,v,l,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in a)v=a[L],a.hasOwnProperty(L)&&v!=null&&!l.hasOwnProperty(L)&&st(t,e,L,null,l,v);for(g in l)if(v=l[g],b=a[g],l.hasOwnProperty(g)&&v!==b&&(v!=null||b!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(137,e));break;default:st(t,e,g,v,l,b)}return;default:if(Du(e)){for(var rt in a)v=a[rt],a.hasOwnProperty(rt)&&v!==void 0&&!l.hasOwnProperty(rt)&&go(t,e,rt,void 0,l,v);for(x in l)v=l[x],b=a[x],!l.hasOwnProperty(x)||v===b||v===void 0&&b===void 0||go(t,e,x,v,l,b);return}}for(var h in a)v=a[h],a.hasOwnProperty(h)&&v!=null&&!l.hasOwnProperty(h)&&st(t,e,h,null,l,v);for(A in l)v=l[A],b=a[A],!l.hasOwnProperty(A)||v===b||v==null&&b==null||st(t,e,A,v,l,b)}function Sd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lp(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,o=n.duration;if(i&&o&&Sd(u)){for(u=0,o=n.responseEnd,l+=1;l<a.length;l++){var s=a[l],g=s.startTime;if(g>o)break;var x=s.transferSize,A=s.initiatorType;x&&Sd(A)&&(s=s.responseEnd,u+=x*(s<o?1:(o-g)/(s-g)))}if(--l,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var vo=null,yo=null;function Ki(t){return t.nodeType===9?t:t.ownerDocument}function zd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ad(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function bo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xo=null;function Gp(){var t=window.event;return t&&t.type==="popstate"?t===xo?!1:(xo=t,!0):(xo=null,!1)}var Td=typeof setTimeout=="function"?setTimeout:void 0,Yp=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,Xp=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(t){return jd.resolve(null).then(t).catch(Qp)}:Td;function Qp(t){setTimeout(function(){throw t})}function ga(t){return t==="head"}function Ed(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),Bl(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")jn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,jn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,o=i.nodeName;i[Yl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&jn(t.ownerDocument.body);a=n}while(a);Bl(e)}function wd(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function So(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":So(a),ju(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Vp(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Yl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=he(t.nextSibling),t===null)break}return null}function Zp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=he(t.nextSibling),t===null))return null;return t}function Md(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=he(t.nextSibling),t===null))return null;return t}function zo(t){return t.data==="$?"||t.data==="$~"}function Ao(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Kp(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function he(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var To=null;function Dd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return he(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Od(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Cd(t,e,a){switch(e=Ki(a),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function jn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ju(t)}var pe=new Map,Hd=new Set;function Ji(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ve=O.d;O.d={f:Jp,r:$p,D:Wp,C:Fp,L:Ip,m:Pp,X:em,S:tm,M:am};function Jp(){var t=Ve.f(),e=qi();return t||e}function $p(t){var e=tl(t);e!==null&&e.tag===5&&e.type==="form"?Jr(e):Ve.r(t)}var Hl=typeof document>"u"?null:document;function _d(t,e,a){var l=Hl;if(l&&typeof e=="string"&&e){var n=ue(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Hd.has(n)||(Hd.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Rt(e,"link",t),Ot(e),l.head.appendChild(e)))}}function Wp(t){Ve.D(t),_d("dns-prefetch",t,null)}function Fp(t,e){Ve.C(t,e),_d("preconnect",t,e)}function Ip(t,e,a){Ve.L(t,e,a);var l=Hl;if(l&&t&&e){var n='link[rel="preload"][as="'+ue(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ue(a.imageSizes)+'"]')):n+='[href="'+ue(t)+'"]';var i=n;switch(e){case"style":i=_l(t);break;case"script":i=Ul(t)}pe.has(i)||(t=w({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),pe.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(En(i))||e==="script"&&l.querySelector(wn(i))||(e=l.createElement("link"),Rt(e,"link",t),Ot(e),l.head.appendChild(e)))}}function Pp(t,e){Ve.m(t,e);var a=Hl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ue(l)+'"][href="'+ue(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ul(t)}if(!pe.has(i)&&(t=w({rel:"modulepreload",href:t},e),pe.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wn(i)))return}l=a.createElement("link"),Rt(l,"link",t),Ot(l),a.head.appendChild(l)}}}function tm(t,e,a){Ve.S(t,e,a);var l=Hl;if(l&&t){var n=el(l).hoistableStyles,i=_l(t);e=e||"default";var u=n.get(i);if(!u){var o={loading:0,preload:null};if(u=l.querySelector(En(i)))o.loading=5;else{t=w({rel:"stylesheet",href:t,"data-precedence":e},a),(a=pe.get(i))&&jo(t,a);var s=u=l.createElement("link");Ot(s),Rt(s,"link",t),s._p=new Promise(function(g,x){s.onload=g,s.onerror=x}),s.addEventListener("load",function(){o.loading|=1}),s.addEventListener("error",function(){o.loading|=2}),o.loading|=4,$i(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:o},n.set(i,u)}}}function em(t,e){Ve.X(t,e);var a=Hl;if(a&&t){var l=el(a).hoistableScripts,n=Ul(t),i=l.get(n);i||(i=a.querySelector(wn(n)),i||(t=w({src:t,async:!0},e),(e=pe.get(n))&&Eo(t,e),i=a.createElement("script"),Ot(i),Rt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function am(t,e){Ve.M(t,e);var a=Hl;if(a&&t){var l=el(a).hoistableScripts,n=Ul(t),i=l.get(n);i||(i=a.querySelector(wn(n)),i||(t=w({src:t,async:!0,type:"module"},e),(e=pe.get(n))&&Eo(t,e),i=a.createElement("script"),Ot(i),Rt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Ud(t,e,a,l){var n=(n=We.current)?Ji(n):null;if(!n)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=_l(a.href),a=el(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_l(a.href);var i=el(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(En(t)))&&!i._p&&(u.instance=i,u.state.loading=5),pe.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pe.set(t,a),i||lm(n,t,a,u.state))),e&&l===null)throw Error(r(528,""));return u}if(e&&l!==null)throw Error(r(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ul(a),a=el(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _l(t){return'href="'+ue(t)+'"'}function En(t){return'link[rel="stylesheet"]['+t+"]"}function Bd(t){return w({},t,{"data-precedence":t.precedence,precedence:null})}function lm(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Rt(e,"link",a),Ot(e),t.head.appendChild(e))}function Ul(t){return'[src="'+ue(t)+'"]'}function wn(t){return"script[async]"+t}function Nd(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+ue(a.href)+'"]');if(l)return e.instance=l,Ot(l),l;var n=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ot(l),Rt(l,"style",n),$i(l,a.precedence,t),e.instance=l;case"stylesheet":n=_l(a.href);var i=t.querySelector(En(n));if(i)return e.state.loading|=4,e.instance=i,Ot(i),i;l=Bd(a),(n=pe.get(n))&&jo(l,n),i=(t.ownerDocument||t).createElement("link"),Ot(i);var u=i;return u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),Rt(i,"link",l),e.state.loading|=4,$i(i,a.precedence,t),e.instance=i;case"script":return i=Ul(a.src),(n=t.querySelector(wn(i)))?(e.instance=n,Ot(n),n):(l=a,(n=pe.get(i))&&(l=w({},a),Eo(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ot(n),Rt(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,$i(l,a.precedence,t));return e.instance}function $i(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var o=l[u];if(o.dataset.precedence===e)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function jo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Eo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Wi=null;function Rd(t,e,a){if(Wi===null){var l=new Map,n=Wi=new Map;n.set(a,l)}else n=Wi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Yl]||i[_t]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var o=l.get(u);o?o.push(i):l.set(u,[i])}}return l}function kd(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function nm(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function qd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function im(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=_l(l.href),i=e.querySelector(En(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Fi.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,Ot(i);return}i=e.ownerDocument||e,l=Bd(l),(n=pe.get(n))&&jo(l,n),i=i.createElement("link"),Ot(i);var u=i;u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),Rt(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Fi.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var wo=0;function um(t,e){return t.stylesheets&&t.count===0&&Pi(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Pi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&wo===0&&(wo=62500*Lp());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>wo?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Fi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ii=null;function Pi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ii=new Map,e.forEach(cm,t),Ii=null,Fi.call(t))}function cm(t,e){if(!(e.state.loading&4)){var a=Ii.get(t);if(a)var l=a.get(null);else{a=new Map,Ii.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Fi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Mn={$$typeof:Lt,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function om(t,e,a,l,n,i,u,o,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Su(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.hiddenUpdates=Su(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Ld(t,e,a,l,n,i,u,o,s,g,x,A){return t=new om(t,e,a,u,s,g,x,A,o),e=1,i===!0&&(e|=24),i=It(3,null,null,e),t.current=i,i.stateNode=t,e=ic(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},sc(i),t}function Gd(t){return t?(t=fl,t):fl}function Yd(t,e,a,l,n,i){n=Gd(n),l.context===null?l.context=n:l.pendingContext=n,l=ia(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ua(t,l,e),a!==null&&(Kt(a,t,e),un(a,t,e))}function Xd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Mo(t,e){Xd(t,e),(t=t.alternate)&&Xd(t,e)}function Qd(t){if(t.tag===13||t.tag===31){var e=_a(t,67108864);e!==null&&Kt(e,t,67108864),Mo(t,67108864)}}function Vd(t){if(t.tag===13||t.tag===31){var e=le();e=zu(e);var a=_a(t,e);a!==null&&Kt(a,t,e),Mo(t,e)}}var tu=!0;function sm(t,e,a,l){var n=z.T;z.T=null;var i=O.p;try{O.p=2,Do(t,e,a,l)}finally{O.p=i,z.T=n}}function rm(t,e,a,l){var n=z.T;z.T=null;var i=O.p;try{O.p=8,Do(t,e,a,l)}finally{O.p=i,z.T=n}}function Do(t,e,a,l){if(tu){var n=Oo(l);if(n===null)mo(t,e,l,eu,a),Kd(t,l);else if(dm(n,t,e,a,l))l.stopPropagation();else if(Kd(t,l),e&4&&-1<fm.indexOf(t)){for(;n!==null;){var i=tl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ma(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var s=1<<31-Wt(u);o.entanglements[1]|=s,u&=~s}Te(i),(nt&6)===0&&(Ri=Jt()+500,zn(0))}}break;case 31:case 13:o=_a(i,2),o!==null&&Kt(o,i,2),qi(),Mo(i,2)}if(i=Oo(l),i===null&&mo(t,e,l,eu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else mo(t,e,l,null,a)}}function Oo(t){return t=Cu(t),Co(t)}var eu=null;function Co(t){if(eu=null,t=Pa(t),t!==null){var e=E(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=M(e),t!==null)return t;t=null}else if(a===31){if(t=C(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return eu=t,null}function Zd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W0()){case Po:return 2;case ts:return 8;case Qn:case F0:return 32;case es:return 268435456;default:return 32}default:return 32}}var Ho=!1,va=null,ya=null,ba=null,Dn=new Map,On=new Map,xa=[],fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kd(t,e){switch(t){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":Dn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(e.pointerId)}}function Cn(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=tl(e),e!==null&&Qd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function dm(t,e,a,l,n){switch(e){case"focusin":return va=Cn(va,t,e,a,l,n),!0;case"dragenter":return ya=Cn(ya,t,e,a,l,n),!0;case"mouseover":return ba=Cn(ba,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return Dn.set(i,Cn(Dn.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,On.set(i,Cn(On.get(i)||null,t,e,a,l,n)),!0}return!1}function Jd(t){var e=Pa(t.target);if(e!==null){var a=E(e);if(a!==null){if(e=a.tag,e===13){if(e=M(a),e!==null){t.blockedOn=e,cs(t.priority,function(){Vd(a)});return}}else if(e===31){if(e=C(a),e!==null){t.blockedOn=e,cs(t.priority,function(){Vd(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Oo(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Ou=l,a.target.dispatchEvent(l),Ou=null}else return e=tl(a),e!==null&&Qd(e),t.blockedOn=a,!1;e.shift()}return!0}function $d(t,e,a){au(t)&&a.delete(e)}function hm(){Ho=!1,va!==null&&au(va)&&(va=null),ya!==null&&au(ya)&&(ya=null),ba!==null&&au(ba)&&(ba=null),Dn.forEach($d),On.forEach($d)}function lu(t,e){t.blockedOn===e&&(t.blockedOn=null,Ho||(Ho=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,hm)))}var nu=null;function Wd(t){nu!==t&&(nu=t,f.unstable_scheduleCallback(f.unstable_NormalPriority,function(){nu===t&&(nu=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(Co(l||a)===null)continue;break}var i=tl(a);i!==null&&(t.splice(e,3),e-=3,Dc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Bl(t){function e(s){return lu(s,t)}va!==null&&lu(va,t),ya!==null&&lu(ya,t),ba!==null&&lu(ba,t),Dn.forEach(e),On.forEach(e);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)Jd(a),a.blockedOn===null&&xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Gt]||null;if(typeof i=="function")u||Wd(a);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Gt]||null)o=u.formAction;else if(Co(n)!==null)continue}else o=u.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),Wd(a)}}}function Fd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function _o(t){this._internalRoot=t}iu.prototype.render=_o.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var a=e.current,l=le();Yd(a,l,t,e,null,null)},iu.prototype.unmount=_o.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yd(t.current,2,null,t,null,null),qi(),e[Ia]=null}};function iu(t){this._internalRoot=t}iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=us();t={blockedOn:null,target:t,priority:e};for(var a=0;a<xa.length&&e!==0&&e<xa[a].priority;a++);xa.splice(a,0,t),a===0&&Jd(t)}};var Id=y.version;if(Id!=="19.2.1")throw Error(r(527,Id,"19.2.1"));O.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=D(e),t=t!==null?N(t):null,t=t===null?null:t.stateNode,t};var pm={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{ql=uu.inject(pm),$t=uu}catch{}}return Hn.createRoot=function(t,e){if(!j(t))throw Error(r(299));var a=!1,l="",n=nf,i=uf,u=cf;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Ld(t,1,!1,null,null,a,l,null,n,i,u,Fd),t[Ia]=e.current,po(t),new _o(e)},Hn.hydrateRoot=function(t,e,a){if(!j(t))throw Error(r(299));var l=!1,n="",i=nf,u=uf,o=cf,s=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),e=Ld(t,1,!0,e,a??null,l,n,s,i,u,o,Fd),e.context=Gd(null),a=e.current,l=le(),l=zu(l),n=ia(l),n.callback=null,ua(a,n,l),a=l,e.current.lanes=a,Gl(e,a),Te(e),t[Ia]=e.current,po(t),new iu(e)},Hn.version="19.2.1",Hn}var a0;function Am(){if(a0)return Uo.exports;a0=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(y){console.error(y)}}return f(),Uo.exports=zm(),Uo.exports}var Tm=Am();const Ro='-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',lt={display:Ro,body:Ro,mono:Ro},ko={mobile:"640px",tablet:"1024px",desktop:"1280px"},k={mobile:`@media (min-width: ${ko.mobile})`,tablet:`@media (min-width: ${ko.tablet})`,desktop:`@media (min-width: ${ko.desktop})`,belowTablet:"@media (max-width: 1023px)",belowMobile:"@media (max-width: 639px)",hover:"@media (hover: hover) and (pointer: fine)"},_n={sm:"8px",md:"10px",lg:"14px",xl:"20px",pill:"999px"},gt={out:[.16,1,.3,1],fly:[.76,0,.24,1],glide:[.4,0,.2,1]},Nl=Object.fromEntries(Object.entries(gt).map(([f,y])=>[f,`cubic-bezier(${y.join(", ")})`])),Ht={press:.1,feedback:.12,control:.2,hover:.25,surface:.3,fill:.35,scene:.4,frame:.5,enter:.6,enterLong:.7},za=Object.fromEntries(Object.entries(Ht).map(([f,y])=>[f,`${y}s`])),du={type:"spring",bounce:0,duration:.4},jm={type:"spring",bounce:.2,duration:.4},T0={stiffness:140,damping:30,mass:.4},j0=(f,y=1)=>({stiffness:f,mass:y,damping:2*Math.sqrt(f*y)});function Em(f,y=.998){return f/1e3*y/(1-y)}const wm=bm`
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

    /* The three stops of the mark's stroke, top to bottom. */
    --brand-steel: #3E97C9;
    --brand-teal: #098D9D;
    --brand-navy: #22377D;
    --grad-brand: linear-gradient(90deg, var(--brand-steel), var(--brand-teal), var(--brand-navy));
    --grad-brand-v: linear-gradient(180deg, var(--brand-steel), var(--brand-teal), var(--brand-navy));

    --accent: var(--brand-steel);
    /* Lifted off the stroke colour: text needs more light than a line does over --bg. */
    --accent-ink: #5CB0E0;
    --accent-rgb: 62, 151, 201;
    --accent-soft: rgba(62, 151, 201, 0.16);

    --shadow-1: 0 2px 10px rgba(0, 0, 0, 0.55);
    --shadow-2: 0 22px 60px -18px rgba(0, 0, 0, 0.80);

    --ease-out: ${Nl.out};

    --dur-press: ${za.press};
    --dur-feedback: ${za.feedback};
    --dur-control: ${za.control};
    --dur-hover: ${za.hover};
    --dur-surface: ${za.surface};
    --dur-fill: ${za.fill};
    --dur-scene: ${za.scene};
    --dur-frame: ${za.frame};

    --r-sm: ${_n.sm};
    --r-md: ${_n.md};
    --r-lg: ${_n.lg};
    --r-xl: ${_n.xl};
    --r-pill: ${_n.pill};

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

    --accent: var(--brand-steel);
    /* The steel itself is 2.7:1 on the light ground; this is the nearest hue at 5:1. */
    --accent-ink: #1E6A9C;
    --accent-rgb: 62, 151, 201;
    --accent-soft: rgba(62, 151, 201, 0.14);

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
      --accent-ink: #9AD0F5;
      --accent-soft: rgba(62, 151, 201, 0.30);
    }

    [data-theme="light"] {
      --surface: rgba(15, 16, 20, 0.06);
      --surface-2: rgba(15, 16, 20, 0.12);
      --ink-2: rgba(21, 22, 26, 0.94);
      --ink-3: rgba(21, 22, 26, 0.90);
      --line: rgba(21, 22, 26, 0.34);
      --line-2: rgba(21, 22, 26, 0.56);
      --accent-ink: #144D74;
      --accent-soft: rgba(62, 151, 201, 0.24);
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

  ::selection { background: var(--accent); color: #071A2B; }
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
`,E0=B.createContext(void 0),Vo="portfolio-theme-mode",Mm=()=>{if(typeof window<"u"){const f=localStorage.getItem(Vo);return f==="dark"||f==="light"?f:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"dark"},Dm=({children:f})=>{const[y,T]=B.useState(Mm),[r,j]=B.useState(()=>{if(typeof window<"u"){const M=localStorage.getItem(Vo);return M==="dark"||M==="light"}return!1});B.useEffect(()=>{document.documentElement.setAttribute("data-theme",y)},[y]),B.useEffect(()=>{r&&localStorage.setItem(Vo,y)},[y,r]);const E=()=>{const M=y==="dark"?"light":"dark";j(!0);const C=()=>{document.documentElement.setAttribute("data-theme",M),T(M)};if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof document.startViewTransition!="function"){C();return}document.startViewTransition(C)};return c.jsx(E0.Provider,{value:{mode:y,toggleTheme:E,isDark:y==="dark"},children:f})},w0=(f,y)=>{const T=y?.offset??0,r=typeof f=="string"?document.getElementById(f.replace("#","")):f instanceof HTMLElement?f:null;r?window.scrollTo({top:r.getBoundingClientRect().top+window.scrollY+T,behavior:"smooth"}):typeof f=="number"&&window.scrollTo({top:f+T,behavior:"smooth"})},M0=B.createContext({scrollTo:w0}),D0=()=>B.useContext(M0);function O0(f,y){if(y==="home"){f("home",{offset:0});return}const T=document.getElementById(y),r=T?.firstElementChild,j=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"))||64,E=window.matchMedia("(min-width: 1024px)").matches?j:0,M=r&&parseFloat(getComputedStyle(r).paddingLeft)||0;if(T&&r&&M>0){const C=r.getBoundingClientRect().top+window.scrollY;f(C-E-M*1.6)}else f(y,{offset:-(E+24)})}const Om=({children:f})=>c.jsx(M0.Provider,{value:{scrollTo:w0},children:f}),Cm=(function(){const y=typeof document<"u"&&document.createElement("link").relList;return y&&y.supports&&y.supports("modulepreload")?"modulepreload":"preload"})(),Hm=function(f){return"/"+f},l0={},_m=function(y,T,r){let j=Promise.resolve();if(T&&T.length>0){let _=function(D){return Promise.all(D.map(N=>Promise.resolve(N).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const M=document.querySelector("meta[property=csp-nonce]"),C=M?.nonce||M?.getAttribute("nonce");j=_(T.map(D=>{if(D=Hm(D),D in l0)return;l0[D]=!0;const N=D.endsWith(".css"),w=N?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${D}"]${w}`))return;const Y=document.createElement("link");if(Y.rel=N?"stylesheet":Cm,N||(Y.as="script"),Y.crossOrigin="",Y.href=D,C&&Y.setAttribute("nonce",C),document.head.appendChild(Y),N)return new Promise((Q,G)=>{Y.addEventListener("load",Q),Y.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${D}`)))})}))}function E(M){const C=new Event("vite:preloadError",{cancelable:!0});if(C.payload=M,window.dispatchEvent(C),!C.defaultPrevented)throw M}return j.then(M=>{for(const C of M||[])C.status==="rejected"&&E(C.reason);return y().catch(E)})};function C0(){const f=B.useContext(E0);if(!f)throw new Error("useTheme must be used within a ThemeProvider");return f}const Um="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E",Bm=p.div`
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
`,Nm=p.div`
  position: absolute;
  inset: 0;
  opacity: ${({$ready:f})=>f?1:0};
  transition: opacity var(--dur-scene) var(--ease-out);
`,Rm=p.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(90% 60% at 50% -8%, rgba(92, 176, 224, 0.10), transparent 62%);

  [data-theme='light'] & {
    background: radial-gradient(95% 65% at 50% -8%, rgba(62, 151, 201, 0.28), rgba(62, 151, 201, 0.08) 42%, transparent 66%);
  }
`,km=p.div`
  position: absolute;
  inset: 0;
  background-image: url('${Um}');
  background-repeat: repeat;
  background-size: 160px 160px;
  opacity: 0.035;

  [data-theme='light'] & {
    opacity: 0.022;
  }

  @media (prefers-reduced-transparency: reduce) {
    display: none;
  }
`,qm=p.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(135% 105% at 50% 38%, transparent 60%, rgba(0, 0, 0, 0.6) 100%);

  [data-theme='light'] & {
    display: none;
  }
`,Lm=()=>{const f=Mt(),{isDark:y}=C0(),T=!f,[r,j]=B.useState(!1),[E,M]=B.useState(!1),C=B.useRef(null),_=B.useRef(null),D=B.useRef(y);return D.current=y,B.useEffect(()=>{if(!T)return;let N=!1,w=0,Y=0;const Q=async()=>{try{const{initSheen:P}=await _m(async()=>{const{initSheen:K}=await import("./sheen-CZbnJztb.js");return{initSheen:K}},[]);if(N||!C.current)return;_.current=P(C.current,{dark:D.current}),Y=requestAnimationFrame(()=>{N||M(!0)})}catch{N||j(!0)}},G=typeof window.requestIdleCallback=="function";return w=G?window.requestIdleCallback(Q,{timeout:400}):window.setTimeout(Q,200),()=>{if(N=!0,cancelAnimationFrame(Y),G?window.cancelIdleCallback(w):window.clearTimeout(w),_.current){try{_.current.destroy()}catch{}_.current=null}}},[T]),B.useEffect(()=>{_.current?.setDark(y)},[y]),c.jsxs(Bm,{"aria-hidden":!0,children:[T&&c.jsx(Nm,{ref:C,$ready:E}),(!T||r)&&c.jsx(Rm,{}),c.jsx(km,{}),c.jsx(qm,{})]})},Gm=f=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...f,children:[c.jsx("circle",{cx:"12",cy:"12",r:"4"}),c.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),Ym=f=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...f,children:c.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),H0=f=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...f,children:[c.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),c.jsx("path",{d:"M22 6L12 13 2 6"})]}),Xm=f=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...f,children:c.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),_0=f=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...f,children:[c.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),c.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),c.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),Qm=f=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...f,children:[c.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),c.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n0="0 0 687.7 800.5",i0="translate(343.85 403.85) scale(1.2)",Vm="translate(-353.27 -392.3) scale(.68)",Zm="translate(244 655.22) scale(.0775658)",qo="M-236 -330H236Q280 -330 280 -286V20Q280 200 26 318Q0 330 -26 318Q-280 200 -280 20V-286Q-280 -330 -236 -330Z",Km="M-217 -295H217Q245 -295 245 -267V20C245 145 135.5 228.54 11.25 286.26Q0 291.49 -11.25 286.26C-135.5 228.54 -245 145 -245 20V-267Q-245 -295 -217 -295Z",Lo=["#3E97C9","#098D9D","#22377D"],Un={P:"M0 371H161C214 371 257 411 257 461C257 511 214 551 161 551H60V624H0V491H155C178 491 197 478 197 461C197 444 178 431 155 431H0Z",N:"M0 371H60L190 544.1V371H250V624H190L60 450.9V624H0Z",R:"M0 371H161C214 371 257 411 257 461C257 511 214 551 161 551H60V624H0V491H155C178 491 197 478 197 461C197 444 178 431 155 431H0ZM106 551H166L231 624H171Z",A:"M0 624L115 371H175L290 624H230L210 580H80L60 624ZM145 437L182.7 520H107.3Z",S:"M145.69 425.13A62 48.25 0 1 0 92 497.5A62 48.25 0 1 1 38.31 569.88",H:"M0 371H60V462H190V371H250V624H190V522H60V624H0Z",U:"M0 371H60V499A65 65 0 0 0 190 499V371H250V499A125 125 0 0 1 0 499Z",Dot:"M0 564H60V624H0Z",I:"M0 371H60V624H0Z",J:"M130 371H190V529A95 95 0 0 1 0 529H60A35 35 0 0 0 130 529Z",W:"M0 371H60L128.6 544.6L170 430H230L271.4 544.6L340 371H400L300 624H240L200 513.2L160 624H100Z"},Jm=[{g:"P",x:0},{g:"R",x:521.13},{g:"A",x:1021.76},{g:"N",x:1581.39},{g:"S",x:2096.02},{g:"H",x:2543.65},{g:"U",x:3063.28},{g:"Dot",x:3496},{g:"N",x:3738.76},{g:"I",x:4194.92},{g:"J",x:4461.08},{g:"H",x:4857.24},{g:"A",x:5313.4},{g:"W",x:5709.56},{g:"A",x:6215.72},{g:"N",x:6711.88}],U0=[{id:"P",x:244},{id:"N",x:534}],$m=.8,Wm=.35,Fm=.22,Im=.7,Pm=.6,tg=.35,B0=.35,N0=.1,fu=.5,Zo=.3,R0=.9,k0=.35,eg=.15,ag=B0+N0*(U0.length-1)+fu+Zo,lg=Math.round((Math.max(ag,R0+k0)+eg)*1e3),Go=kn`from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; }`,Yo=kn`from { opacity: 0; } to { opacity: var(--o, 1); }`,ng=kn`from { opacity: 1; } to { opacity: 0; }`,ig=kn`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`,ug=p.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`,u0=p.span`
  position: absolute;
  inset: 0;
  display: block;
  ${({$lift:f})=>f&&"will-change: opacity;"}
`,c0=p.svg`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
`,cg=p(ug)`
  .ground { fill: #000; }
  .bevel-hi { opacity: 0.45; }
  .bevel-lo { opacity: 0.35; }
  .trace, .stroke-glyph { fill: none; stroke: #FFF; stroke-linecap: round; stroke-linejoin: round; }
  .trace { stroke-width: 9; }
  .outline, .inner, .trace { stroke-dasharray: 1; }

  &[data-build='true'] {
    .outline {
      animation: ${Go} ${$m}s ${Nl.glide} both;
    }
    .ground {
      animation: ${Yo} ${Wm}s ${Nl.out} both;
    }
    .inner {
      animation: ${Go} ${Im}s ${Nl.glide} ${Fm}s both;
    }
    .bevel-hi, .bevel-lo {
      animation: ${Yo} ${tg}s linear ${Pm}s both;
    }
    .bevel-hi { --o: 0.45; }
    .bevel-lo { --o: 0.35; }

    /* Linear on both halves of the handover: an eased pair sags in the middle, leaving a
       dip where neither the outline nor the fill is fully carrying the letter. */
    .trace {
      animation:
        ${Go} ${fu}s ${Nl.glide} var(--at) both,
        ${ng} ${Zo}s linear calc(var(--at) + ${fu}s) both;
    }
    .body {
      animation: ${Yo} ${Zo}s linear calc(var(--at) + ${fu}s) both;
    }
    .name {
      animation: ${ig} ${k0}s ${Nl.out} ${R0}s both;
    }
  }
`,og=f=>f,sg=({build:f=!1,className:y})=>{const T=B.useId().replace(/[^a-zA-Z0-9_-]/g,""),r=E=>`${T}-${E}`,j=E=>`url(#${r(E)})`;return c.jsxs(cg,{className:y,"data-build":f,children:[c.jsx(u0,{children:c.jsxs(c0,{viewBox:n0,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:r("brand"),gradientUnits:"userSpaceOnUse",x1:"0",y1:"-330",x2:"0",y2:"324",children:[c.jsx("stop",{offset:"0",stopColor:Lo[0]}),c.jsx("stop",{offset:".5",stopColor:Lo[1]}),c.jsx("stop",{offset:"1",stopColor:Lo[2]})]}),c.jsxs("linearGradient",{id:r("fade"),gradientUnits:"userSpaceOnUse",x1:"0",y1:"10",x2:"0",y2:"160",children:[c.jsx("stop",{offset:"0",stopColor:"#FFF"}),c.jsx("stop",{offset:"1",stopColor:"#000"})]}),c.jsx("path",{id:r("shield"),d:qo}),c.jsx("clipPath",{id:r("clip"),children:c.jsx("use",{href:`#${r("shield")}`})}),c.jsx("mask",{id:r("fadeMask"),children:c.jsx("rect",{x:"-300",y:"-340",width:"600",height:"700",fill:j("fade")})}),c.jsxs("mask",{id:r("hi"),children:[c.jsx("use",{href:`#${r("shield")}`,fill:"none",stroke:"#FFF",strokeWidth:"16"}),c.jsx("use",{href:`#${r("shield")}`,fill:"none",stroke:"#000",strokeWidth:"16",y:"1.2"})]}),c.jsxs("mask",{id:r("lo"),children:[c.jsx("use",{href:`#${r("shield")}`,fill:"none",stroke:"#FFF",strokeWidth:"16"}),c.jsx("use",{href:`#${r("shield")}`,fill:"none",stroke:"#000",strokeWidth:"16",y:"-1.2"})]})]}),c.jsxs("g",{transform:i0,children:[c.jsxs("g",{clipPath:j("clip"),children:[c.jsx("path",{className:"ground",d:qo}),c.jsx("path",{className:"outline",d:qo,pathLength:1,fill:"none",stroke:j("brand"),strokeWidth:"16"}),c.jsx("use",{className:"bevel-hi",href:`#${r("shield")}`,fill:"none",stroke:"#FFF",strokeWidth:"16",mask:j("hi")}),c.jsx("use",{className:"bevel-lo",href:`#${r("shield")}`,fill:"none",stroke:"#000",strokeWidth:"16",mask:j("lo")})]}),c.jsx("path",{className:"inner",d:Km,pathLength:1,fill:"none",stroke:j("brand"),strokeWidth:"4.6",mask:j("fadeMask")})]})]})}),c.jsx(u0,{$lift:f,children:c.jsx(c0,{viewBox:n0,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:c.jsx("g",{transform:i0,children:c.jsxs("g",{fill:"#FFF",fillRule:"evenodd",transform:Vm,children:[U0.map((E,M)=>f?c.jsxs("g",{transform:`translate(${E.x} 0)`,style:og({"--at":`${B0+M*N0}s`}),children:[c.jsx("path",{className:"trace",d:Un[E.id],pathLength:1}),c.jsx("path",{className:"body",d:Un[E.id],stroke:"#FFF",strokeWidth:"4"})]},E.id):c.jsx("path",{d:Un[E.id],transform:`translate(${E.x} 0)`,stroke:"#FFF",strokeWidth:"4"},E.id)),c.jsx("g",{className:"name",children:c.jsx("g",{transform:Zm,children:Jm.map((E,M)=>E.g==="S"?c.jsx("path",{className:"stroke-glyph",d:Un.S,strokeWidth:"60",transform:`translate(${E.x} 0)`},M):c.jsx("path",{d:Un[E.g],transform:`translate(${E.x} 0)`},M))})})]})})})})]})},q0=[{label:"About",href:"about"},{label:"Skills",href:"technologyproficiency"},{label:"Work",href:"professionalexperience"},{label:"Projects",href:"mostproudof"},{label:"Contact",href:"contact"}],L0=["home","about","technologyproficiency","professionalexperience","mostproudof","certifications","testimonials","featured","educationalqualifications","contact"];function rg(){const f=new Set(q0.map(r=>r.href)),y=new Map;let T="home";for(const r of L0)(r==="home"||f.has(r))&&(T=r),y.set(r,T);return y}function fg(){const[f,y]=B.useState("home");return B.useEffect(()=>{const T=rg(),r=L0.map(M=>document.getElementById(M)).filter(M=>M!==null),j=new Map,E=new IntersectionObserver(M=>{for(const D of M)j.set(D.target.id,D.isIntersecting?D.intersectionRatio:0);let C="",_=0;for(const[D,N]of j)N>_&&(_=N,C=D);_>0&&y(T.get(C)??C)},{rootMargin:"-45% 0px -45% 0px",threshold:[0,.25,.5,.75,1]});return r.forEach(M=>E.observe(M)),()=>E.disconnect()},[]),f}const dg=p.nav`
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
`,hg=p.div`
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
`,pg=p(q.div)`
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
`,mg=p(q.div)`
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
`,gg=p(q.a)`
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
`,Za=176,Ko=32,vg=p.span`
  position: relative;
  display: block;
  width: ${Ko}px;
  height: ${Ko}px;
  z-index: 1;
`,yg=p(q.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${Za}px;
  height: ${Za}px;
  margin: ${-Za/2}px 0 0 ${-Za/2}px;
  transform-origin: center center;
  pointer-events: none;
`,bg=p(q.div)`
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
`,xg=p(q.a)`
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
  color: ${({$active:f})=>f?"var(--accent-ink)":"var(--ink-2)"};
  transition: color var(--dur-feedback) var(--ease-out);

  &:hover { color: ${({$active:f})=>f?"var(--accent-ink)":"var(--ink)"}; }

  ${k.belowTablet} {
    padding: 8px 9px;
    font-size: 0.75rem;
  }
`,Sg=p(q.span)`
  position: absolute;
  inset: 0;
  border-radius: var(--r-pill);
  background: var(--accent-soft);
  border: 1px solid rgba(var(--accent-rgb), 0.45);
  z-index: 0;
`,zg=p.span`
  position: relative;
  z-index: 1;
`,Ag=p(q.button)`
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
`,Tg=p.span`
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
`,cu=gt.out,jg=gt.fly,Eg=8,wg=4,o0=Ko/Za,Mg=.38,Dg=({revealed:f=!0})=>{const y=fg(),{scrollTo:T}=D0(),{isDark:r,toggleTheme:j}=C0(),E=Mt(),[M,C]=B.useState(!1);B.useEffect(()=>{const K=()=>C(J=>window.scrollY>(J?wg:Eg));return K(),window.addEventListener("scroll",K,{passive:!0}),()=>window.removeEventListener("scroll",K)},[]);const _=B.useRef(null),D=Ke(0),N=Ke(0),w=Ke(o0),[Y]=B.useState(()=>!f&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches);B.useLayoutEffect(()=>{const K=_.current;if(!K||!Y)return;const J=K.getBoundingClientRect();J.width!==0&&(D.set(window.innerWidth/2-(J.left+J.width/2)),N.set(window.innerHeight/2-(J.top+J.height/2)),w.set(Math.min(Za,window.innerWidth*Mg)/Za))},[]),B.useEffect(()=>{if(!f||!Y)return;const K={duration:.8,ease:jg},J=ru(D,0,K),je=ru(N,0,K),Lt=ru(w,o0,K);return()=>{J.stop(),je.stop(),Lt.stop()}},[f]);const Q=(K,J)=>{K.preventDefault(),O0(T,J)},G=0,P=K=>({initial:{opacity:0,y:E?0:8},animate:{opacity:f?1:0,y:f||E?0:8},transition:{duration:Ht.enter,delay:f?G+K:0,ease:cu}});return c.jsx(dg,{"aria-label":"Primary",children:c.jsxs(hg,{children:[c.jsx(pg,{initial:{opacity:0},animate:{opacity:f?1:0},transition:{duration:Ht.enterLong,delay:f?G:0,ease:cu}}),c.jsx(mg,{initial:!1,animate:{opacity:M?1:0},transition:{duration:Ht.fill,ease:cu}}),c.jsx(gg,{ref:_,href:"#home",onClick:K=>Q(K,"home"),"aria-label":"Pranshu Nijhawan, back to top",whileHover:{scale:1.06},whileTap:{scale:.94},children:c.jsx(vg,{children:c.jsx(yg,{style:{x:D,y:N,scale:w},children:c.jsx(sg,{build:Y})})})}),c.jsx(bg,{...P(.18),children:c.jsx(gm,{children:q0.map(K=>{const J=y===K.href;return c.jsxs(xg,{href:`#${K.href}`,$active:J,"aria-current":J?"true":void 0,onClick:je=>Q(je,K.href),whileTap:{scale:.95},children:[J&&c.jsx(Sg,{layoutId:"nav-active",transition:{type:"spring",stiffness:480,damping:38,mass:.9}}),c.jsx(zg,{children:K.label})]},K.href)})})}),c.jsx(Ag,{onClick:j,"aria-label":r?"Switch to light mode":"Switch to dark mode",title:r?"Light mode":"Dark mode",whileHover:{scale:1.06},whileTap:{scale:.94},...P(.26),children:c.jsx(Tg,{children:c.jsx(Rl,{initial:!1,children:c.jsx(q.span,{initial:{opacity:0,rotate:-30,scale:.85},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:30,scale:.85},transition:{opacity:{duration:Ht.control,ease:cu},rotate:du,scale:du},children:r?c.jsx(Gm,{}):c.jsx(Ym,{})},r?"sun":"moon")})})})]})})},Og="3.0.8",Cg=p.footer`
  position: relative;
  z-index: 1;
  padding: 40px 0 calc(96px + env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);
  ${k.tablet} { padding: 48px 0; }
`,Hg=p.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  margin-top: 4px;
  padding-inline: var(--gutter);

  ${k.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,_g=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 14px;
`,s0=p.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,Ug=p.span`
  font-family: ${lt.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
`,Bg=()=>{const f=new Date().getFullYear();return c.jsx(Cg,{children:c.jsx(Hg,{children:c.jsxs(_g,{children:[c.jsx(s0,{}),c.jsxs(Ug,{children:["© ",f," Pranshu Nijhawan • v",Og]}),c.jsx(s0,{})]})})})},r0=p(q.div)`
  position: fixed;
  inset: 0;
  z-index: 60;
  background: var(--bg);
  overflow: hidden;
  cursor: pointer;

  [data-theme='light'] & {
    background:
      radial-gradient(72% 60% at 50% 54%, rgba(62, 151, 201, 0.10) 0%, transparent 70%),
      var(--bg);
  }
`,Ng=p(q.div)`
  position: absolute;
  inset: 0;
  transform-origin: center 56%;
`,hu=p(q.div)`
  position: absolute;
  inset: 0;
`,$o=p(hu)`
  will-change: transform, opacity;
`,f0=p($o)`
  background: radial-gradient(58% 46% at 50% 58%,
    rgba(62, 151, 201, 0.550) 0%,
    rgba(58, 140, 196, 0.470) 8%,
    rgba(54, 128, 190, 0.395) 16%,
    rgba(50, 114, 183, 0.325) 24%,
    rgba(45, 98, 172, 0.260) 34%,
    rgba(41, 86, 162, 0.190) 42%,
    rgba(37, 70, 148, 0.120) 52%,
    rgba(35, 62, 140, 0.075) 60%,
    rgba(34, 58, 135, 0.046) 66%,
    rgba(34, 56, 131, 0.024) 71%,
    rgba(34, 55, 127, 0.009) 76%,
    rgba(34, 54, 125, 0.002) 82%,
    transparent 90%);

  [data-theme='light'] & {
    background: radial-gradient(50% 42% at 50% 56%,
      rgba(62, 151, 201, 0.260) 0%,
      rgba(60, 149, 200, 0.223) 10%,
      rgba(58, 146, 199, 0.187) 20%,
      rgba(56, 143, 198, 0.148) 31%,
      rgba(62, 151, 201, 0.100) 42%,
      rgba(56, 140, 196, 0.066) 52%,
      rgba(50, 128, 190, 0.038) 61%,
      rgba(46, 118, 184, 0.018) 68%,
      rgba(43, 110, 178, 0.006) 75%,
      transparent 84%);
  }
`,Rg=p($o)`
  background: radial-gradient(38% 70% at 50% -6%,
    rgba(150, 208, 240, 0.200) 0%,
    rgba(126, 190, 227, 0.155) 12%,
    rgba(101, 166, 213, 0.113) 22%,
    rgba(80, 140, 200, 0.078) 31%,
    rgba(70, 124, 188, 0.050) 40%,
    rgba(62, 110, 177, 0.029) 48%,
    rgba(56, 99, 168, 0.014) 55%,
    rgba(52, 91, 161, 0.004) 62%,
    transparent 70%);

  [data-theme='light'] & { opacity: 0.35; }
`,kg=p($o)`
  background: radial-gradient(70% 16% at 50% 70%,
    rgba(62, 151, 201, 0.220) 0%,
    rgba(58, 145, 198, 0.180) 12%,
    rgba(54, 136, 193, 0.143) 23%,
    rgba(50, 126, 187, 0.108) 33%,
    rgba(46, 114, 180, 0.077) 43%,
    rgba(42, 102, 172, 0.051) 52%,
    rgba(38, 90, 163, 0.030) 60%,
    rgba(35, 78, 154, 0.014) 68%,
    rgba(33, 68, 146, 0.004) 76%,
    transparent 86%);

  [data-theme='light'] & { opacity: 0.5; }
`,qg=p(hu)``,Lg=p(q.span)`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle,
    rgba(190, 224, 245, 0.90) 0%,
    rgba(190, 224, 245, 0.58) 30%,
    rgba(190, 224, 245, 0.28) 52%,
    rgba(190, 224, 245, 0.09) 72%,
    rgba(190, 224, 245, 0) 100%);

  [data-theme='light'] & {
    background: radial-gradient(circle,
      rgba(62, 151, 201, 0.55) 0%,
      rgba(62, 151, 201, 0.35) 30%,
      rgba(62, 151, 201, 0.17) 52%,
      rgba(62, 151, 201, 0.05) 72%,
      rgba(62, 151, 201, 0) 100%);
  }
`,d0=p(hu)`
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
`,Gg=p(hu)`
  opacity: 0.055;
  background-size: 128px 128px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");

  [data-theme='light'] & { opacity: 0.03; }
`,Yg=p(q.span)`
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
`,Bn=gt.out,Xo=f=>{let y=Math.imul(f^2654435769,2246822507);return y=Math.imul(y^y>>>13,3266489909),((y^y>>>16)>>>0)/4294967296},Qo=148,Xg=({onComplete:f})=>{const y=Mt(),T=B.useMemo(()=>Array.from({length:14},(j,E)=>{const C=(E*9301+49297)%233280/233280,_=(E*4099+1)%977/977;return{left:6+Xo(E*3+1+Qo)*88,top:18+Xo(E*3+2+Qo)*68,size:1.4+Xo(E*3+3+Qo)*3.6,delay:C*2.2,dur:5+C*5,drift:12+_*26}}),[]);B.useEffect(()=>{const j=setTimeout(f,y?500:lg),E=()=>f();return window.addEventListener("keydown",E,{once:!0}),()=>{clearTimeout(j),window.removeEventListener("keydown",E)}},[y,f]);const r={onClick:f,role:"button",tabIndex:0,"aria-label":"Skip intro"};return y?c.jsxs(r0,{...r,initial:{opacity:1},exit:{opacity:0,transition:{duration:.4}},children:[c.jsx(f0,{animate:{opacity:.8}}),c.jsx(d0,{})]}):c.jsxs(r0,{...r,initial:{opacity:1},exit:{opacity:0,transition:{duration:.75,ease:Bn}},children:[c.jsxs(Ng,{initial:{scale:1.12},animate:{scale:1},transition:{duration:4,ease:Bn},children:[c.jsx(f0,{initial:{opacity:0,scale:.7},animate:{opacity:[0,1,.82,1],scale:[.7,1.02,.99,1.02]},transition:{duration:4.2,times:[0,.32,.66,1],ease:"easeInOut",repeat:1/0,repeatType:"mirror"}}),c.jsx(Rg,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:1.8,ease:Bn}}),c.jsx(kg,{initial:{opacity:0,scaleX:.6},animate:{opacity:1,scaleX:1},transition:{duration:2,delay:.4,ease:Bn}}),c.jsx(qg,{children:T.map((j,E)=>c.jsx(Lg,{style:{left:`${j.left}%`,top:`${j.top}%`,width:j.size,height:j.size},initial:{opacity:0,y:0},animate:{opacity:[0,.8,0],y:[-j.drift*.3,-j.drift]},transition:{duration:j.dur,delay:j.delay,ease:"easeInOut",repeat:1/0,repeatType:"loop"}},E))})]}),c.jsx(d0,{}),c.jsx(Gg,{}),c.jsx(Yg,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.7,ease:Bn},children:"Tap to skip"})]})},h0=j0(200,.6),p0=j0(200),ou=3,m0=new Map;function G0(f){let y=m0.get(f);return y||(y=typeof f=="string"?q[f]:q.create(f),m0.set(f,y)),y}const Qg=(f,y)=>{switch(f){case"up":return{y};case"down":return{y:-y};case"left":return{x:y};case"right":return{x:-y};default:return{}}},Aa=({children:f,as:y="div",delay:T=0,dist:r=28,dir:j="up",blur:E=!0,amount:M=.3,once:C=!0,className:_,style:D})=>Mt()?B.createElement(y,{className:_,style:D},f):B.createElement(G0(y),{className:_,style:D,initial:{opacity:0,...Qg(j,r),filter:E?"blur(10px)":"blur(0px)"},whileInView:{opacity:1,x:0,y:0,filter:"blur(0px)"},viewport:{once:C,amount:M},transition:{duration:Ht.enterLong,delay:T,ease:gt.out}},f),Jo=({text:f,as:y="span",className:T,delay:r=0,stagger:j=.045,once:E=!0,amount:M=.4})=>{const C=Mt(),_=f.split(" ");if(C)return B.createElement(y,{className:T},f);const D=_.map((N,w)=>c.jsx("span",{"aria-hidden":!0,style:{display:"inline-block",overflow:"hidden",verticalAlign:"top",paddingBottom:"0.12em"},children:c.jsxs(q.span,{style:{display:"inline-block"},variants:{hidden:{y:"110%",opacity:0,filter:"blur(8px)"},visible:{y:"0%",opacity:1,filter:"blur(0px)",transition:{duration:Ht.enterLong,ease:gt.out}}},children:[N,w<_.length-1?" ":""]})},`${N}-${w}`));return B.createElement(G0(y),{className:T,initial:"hidden",whileInView:"visible",viewport:{once:E,amount:M},variants:{hidden:{},visible:{transition:{staggerChildren:j,delayChildren:r}}}},c.jsx("span",{style:Vg,children:f},"sr"),...D)},Vg={position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0 0 0 0)",whiteSpace:"nowrap",border:0},Y0=({children:f,strength:y=.35,className:T,...r})=>{const j=Mt(),E=B.useRef(null),M=Ke(0),C=Ke(0),_=Ja(M,h0),D=Ja(C,h0),N=Y=>{if(j||!E.current)return;const Q=E.current.getBoundingClientRect();M.set((Y.clientX-(Q.left+Q.width/2))*y),C.set((Y.clientY-(Q.top+Q.height/2))*y)},w=()=>{M.set(0),C.set(0)};return c.jsx(q.div,{ref:E,className:T,onMouseMove:N,onMouseLeave:w,style:{x:j?0:_,y:j?0:D,display:"inline-block"},...r,children:f})},X0=({children:f,className:y,max:T=9,glare:r=!0})=>{const j=Mt(),E=B.useRef(null),M=Ke(0),C=Ke(0),_=Ke(0),D=Ke(0),N=Ja(M,p0),w=Ja(C,p0),Y=G=>{if(j||!E.current)return;const P=E.current.getBoundingClientRect(),K=(G.clientX-P.left)/P.width,J=(G.clientY-P.top)/P.height;C.set((K-.5)*T*2),M.set(-(J-.5)*T*2),_.set((K-.5)*P.width),D.set((J-.5)*P.height)},Q=()=>{M.set(0),C.set(0),_.set(0),D.set(0)};return c.jsxs(q.div,{ref:E,className:y,onMouseMove:Y,onMouseLeave:Q,style:{rotateX:j?0:N,rotateY:j?0:w,transformStyle:"preserve-3d",transformPerspective:900,position:"relative"},children:[f,r&&!j&&c.jsx("span",{"aria-hidden":!0,style:{position:"absolute",inset:0,borderRadius:"inherit",overflow:"hidden",pointerEvents:"none"},children:c.jsx(q.span,{style:{position:"absolute",top:`${-100*(ou-1)/2}%`,left:`${-100*(ou-1)/2}%`,width:`${ou*100}%`,height:`${ou*100}%`,background:"radial-gradient(circle at 50% 50%, rgba(var(--accent-rgb),0.18), transparent 18%)",x:_,y:D}})})]})};function Zg(f=80){const y=B.useRef(null),T=Mt(),{scrollYProgress:r}=Rn({target:y,offset:["start end","end start"]}),j=Ka(r,[0,1],[f,-f]);return{ref:y,y:T?0:j}}const Kg=({to:f,suffix:y="",prefix:T="",duration:r=1.6,className:j,play:E=!0})=>{const M=Mt(),C=B.useRef(null),_=B.useRef(null),D=A0(C,{once:!0,amount:.6});return B.useEffect(()=>{if(!D||!E)return;const N=_.current;if(!N)return;let w=-1;const Y=ru(0,f,{duration:M?.001:r,ease:gt.out,onUpdate:Q=>{const G=Math.round(Q);G!==w&&(w=G,N.textContent=String(G))}});return()=>Y.stop()},[D,E,f,r,M]),c.jsxs("span",{ref:C,className:j,children:[T,c.jsx("span",{ref:_,children:"0"}),y]})},Jg=p.section`
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
`,$g=p(q.div)`
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
`,Wg=p.div`
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
`,Fg=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Ig=p.h1`
  font-family: ${lt.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.045em;
  line-height: 0.88;
  font-size: clamp(54px, 9.5vw, 116px);
  margin-bottom: 26px;
`,g0=p.span`
  display: block;
  overflow: hidden;
  padding-bottom: 0.06em;
`,Pg=p(q.p)`
  font-family: ${lt.display};
  font-weight: 500;
  font-size: clamp(19px, 2.5vw, 27px);
  letter-spacing: -0.02em;
  line-height: 1.12;
  color: var(--ink);
  margin-bottom: 22px;

  em { font-style: normal; color: var(--accent-ink); }
`,t1=p(q.p)`
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
`,e1=p(q.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`,a1=p(q.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 26px;
  border-radius: var(--r-pill);
  background: var(--accent);
  color: #071A2B;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
  box-shadow: 0 10px 30px -10px rgba(var(--accent-rgb), 0.6);

  [data-theme='light'] & { color: #fff; }

  svg { width: 17px; height: 17px; transition: transform var(--dur-surface) var(--ease-out); }
  ${k.hover} {
    &:hover svg { transform: translateX(4px); }
  }
`,l1=p(q.a)`
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
`,n1=p(q.div)`
  position: relative;
  display: flex;
  justify-content: center;
  ${k.belowTablet} { order: -1; }
`,i1=p.div`
  position: relative;
  width: min(440px, 78vw);
  aspect-ratio: 1 / 1;
`,u1=p.div`
  position: absolute;
  inset: 4% 6% 2% 6%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(var(--accent-rgb), 0.13), transparent 72%);
  filter: blur(48px);
  z-index: -1;
`,c1=p.div`
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
`,o1=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`,s1=p.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  padding-bottom: clamp(40px, 7vh, 88px);

  ${k.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,r1=p(q.ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(28px, 4vw, 60px);
  list-style: none;
  margin: 0;
  padding: 0;

  ${k.mobile} { grid-template-columns: repeat(4, 1fr); }
`,f1=p(q.li)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,d1=p(q.span)`
  height: 2px;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 10px;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 12%, transparent));
`,h1=p.span`
  font-family: ${lt.display};
  font-weight: 600;
  font-size: clamp(34px, 5vw, 56px);
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1;
`,p1=p.span`
  font-family: ${lt.mono};
  font-size: 11.5px;
  color: var(--ink-3);
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,m1=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),g1=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),v1=[{to:10,prefix:"",suffix:"+",label:"Years"},{to:65,prefix:"",suffix:"+",label:"Engineers Led"},{to:2,prefix:"$",suffix:"M+",label:"Savings"},{to:15,prefix:"",suffix:"+",label:"Products"}],y1=({data:f,start:y=!0})=>{const T=Mt(),{scrollTo:r}=D0(),{ref:j,y:E}=Zg(56),M=B.useRef(null),{scrollYProgress:C}=Rn({target:M,offset:["start start","end start"]}),_=Ka(C,[0,1],[0,-110]),D=Ka(C,[0,.75],[1,0]),[N,...w]=f.name.split(" "),Y=w.join(" "),Q=0,G=gt.out,P=J=>({initial:T?{opacity:0}:{y:"110%"},animate:y?T?{opacity:1}:{y:"0%"}:T?{opacity:0}:{y:"110%"},transition:{duration:.9,delay:y?Q+J:0,ease:gt.out}}),K=J=>({initial:T?{opacity:0}:{opacity:0,y:18,filter:"blur(8px)"},animate:y?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:T?0:18,filter:T?"blur(0px)":"blur(8px)"},transition:{duration:Ht.enterLong,delay:y?Q+J:0,ease:gt.out}});return c.jsxs(Jg,{id:"home",ref:M,children:[c.jsx($g,{style:T?void 0:{y:_,opacity:D},children:c.jsxs(Wg,{children:[c.jsxs(Fg,{children:[c.jsxs(Ig,{"aria-label":f.name,children:[c.jsx(g0,{"aria-hidden":!0,children:c.jsx(q.span,{style:{display:"block"},...P(.15),children:N})}),c.jsx(g0,{"aria-hidden":!0,children:c.jsx(q.span,{style:{display:"block",color:"var(--accent-ink)"},...P(.27),children:Y})})]}),c.jsx(Pg,{...K(.34),children:f.designation}),c.jsxs(t1,{...K(.45),children:["Enterprise Architect of"," ",c.jsx("a",{href:"https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview",target:"_blank",rel:"noopener noreferrer",children:"Periscope"}),"'s"," ",c.jsx("a",{href:"https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance",target:"_blank",rel:"noopener noreferrer",children:"Promotion Advisor"})," ","at"," ",c.jsx("a",{href:"https://www.linkedin.com/company/mckinsey/",target:"_blank",rel:"noopener noreferrer",children:"McKinsey"}),", building agentic AI and high-throughput data platforms."]}),c.jsxs(e1,{...K(.58),children:[c.jsx(Y0,{strength:.4,style:{display:"inline-block"},children:c.jsxs(a1,{href:"#contact",onClick:J=>{J.preventDefault(),O0(r,"contact")},whileHover:{scale:1.04},whileTap:{scale:.97},children:["Get in touch ",c.jsx(m1,{})]})}),c.jsxs(l1,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.97},children:[c.jsx(g1,{})," Download resume"]})]})]}),c.jsx(n1,{ref:j,style:{y:E},children:c.jsx(q.div,{initial:T?{opacity:0}:{opacity:0,scale:.92,filter:"blur(14px)"},animate:y?{opacity:1,scale:1,filter:"blur(0px)"}:{opacity:0},transition:{duration:1,delay:y?Q+.4:0,ease:gt.out},children:c.jsx(X0,{max:6,glare:!1,children:c.jsxs(i1,{children:[c.jsx(u1,{}),c.jsx(c1,{children:c.jsx(o1,{src:"/images/profile.webp",alt:f.name,width:440,height:440,loading:"eager",decoding:"async"})})]})})})})]})}),c.jsx(s1,{children:c.jsx(r1,{initial:T?!1:"hidden",animate:T?void 0:y?"visible":"hidden",variants:{hidden:{},visible:{transition:{staggerChildren:.12,delayChildren:Q+.2}}},children:v1.map(J=>c.jsxs(f1,{variants:{hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.6,ease:G}}},children:[c.jsx(d1,{variants:{hidden:{scaleX:0},visible:{scaleX:1,transition:{duration:.8,ease:G}}}}),c.jsx(h1,{children:c.jsx(Kg,{to:J.to,prefix:J.prefix,suffix:J.suffix,play:y})}),c.jsx(p1,{children:J.label})]},J.label))})})]})},v0={prose:"var(--maxw-prose)",content:"var(--maxw-content)",wide:"var(--maxw-wide)",full:"var(--maxw-full)"},Ta=p.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,ja=p.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--gutter);
  max-width: calc(${({$max:f="content"})=>v0[f]} + var(--gutter) * 2);

  ${k.desktop} {
    max-width: calc((100vw + ${({$max:f="content"})=>v0[f]} + var(--gutter) * 2) / 2);
  }
`,b1=p.span`
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
`,x1=p.h2`
  font-family: ${lt.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.03em;
  line-height: 0.98;
  font-size: clamp(38px, 7vw, 84px);
`,S1=p.p`
  color: var(--ink-2);
  font-size: clamp(17px, 2.1vw, 21px);
  line-height: 1.6;
  max-width: 60ch;
`,z1=p.span`
  display: block;
  height: 2px;
  width: 64px;
  border-radius: 2px;
  background: var(--grad-brand);
  transform-origin: left;
`,A1=p(q.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 56px;
  align-items: ${({$align:f})=>f==="center"?"center":"flex-start"};
  text-align: ${({$align:f})=>f==="center"?"center":"left"};
  ${k.tablet} { margin-bottom: 80px; }
`,Je=({title:f,kicker:y,lead:T,align:r="left",leadFull:j=!1})=>{const E=Mt(),M=B.useRef(null),C=A0(M,{margin:"20% 0px 20% 0px"}),{scrollYProgress:_}=Rn({target:M,offset:["start end","end start"]}),D=Ka(_,[0,1],[30,-30]);return c.jsxs(A1,{ref:M,$align:r,style:E?void 0:{y:C?D:0},children:[y&&c.jsx(q.div,{initial:E?!1:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.6},transition:{duration:Ht.frame,ease:gt.out},children:c.jsx(b1,{children:y})}),c.jsx(Jo,{as:x1,text:f}),c.jsx(q.div,{style:{transformOrigin:r==="center"?"center":"left"},initial:E?!1:{scaleX:0,opacity:0},whileInView:{scaleX:1,opacity:1},viewport:{once:!0,amount:.6},transition:{duration:Ht.enterLong,delay:.15,ease:gt.out},children:c.jsx(z1,{})}),T&&c.jsx(q.div,{initial:E?!1:{opacity:0,y:16,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.5},transition:{duration:Ht.enterLong,delay:.2,ease:gt.out},children:c.jsx(S1,{style:{...r==="center"?{marginInline:"auto"}:{},...j?{maxWidth:"none"}:{}},children:T})})]})},T1=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}],j1=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 8px;

  ${k.tablet} {
    grid-template-columns: 0.42fr 0.58fr;
    gap: 80px;
  }
`,E1=p.div`
  ${k.tablet} { position: sticky; top: 120px; height: max-content; }
`,w1=p.span`
  font-family: ${lt.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-ink);
  display: block;
  margin-bottom: 18px;
`,M1=p.p`
  font-family: ${lt.display};
  font-weight: 500;
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--ink);
`,D1=p.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  p {
    font-size: clamp(16px, 1.8vw, 18px);
    line-height: 1.75;
    color: var(--ink-2);
    max-width: 65ch;
  }
`,O1=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 72px;

  ${k.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }
`,Wo=p.div`
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
    background: var(--grad-brand);
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
`,C1=p.span`
  font-family: ${lt.mono};
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--accent-ink);
`,H1=p.h3`
  font-family: ${lt.display};
  font-size: clamp(18px, 1.9vw, 21px);
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  line-height: 1.2;

  ${Wo}:first-child & {
    ${k.tablet} { font-size: clamp(22px, 2.6vw, 28px); }
  }
`,_1=p.p`
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ink-3);

  ${Wo}:first-child & {
    ${k.tablet} { font-size: 15.5px; }
  }
`,U1=p.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`,B1=p(q.a)`
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
`,N1=({data:f})=>{const y=f.content.slice(0,3).map(T=>T.replace(/^🔹\s*/,"").trim());return c.jsx(Ta,{id:"about",children:c.jsxs(ja,{$max:"wide",children:[c.jsx(Je,{title:"About",lead:y[0],leadFull:!0}),c.jsxs(j1,{children:[c.jsx(E1,{children:c.jsxs(Aa,{dir:"up",children:[c.jsx(w1,{children:"The throughline"}),c.jsx(M1,{children:"Technical depth, measured in business outcomes."})]})}),c.jsxs(D1,{children:[c.jsx(Aa,{dir:"up",delay:.05,children:c.jsx("p",{children:y[1]})}),c.jsx(Aa,{dir:"up",delay:.12,children:c.jsx("p",{children:y[2]})})]})]}),c.jsx(O1,{children:T1.map((T,r)=>c.jsxs(Aa,{as:Wo,dir:"up",delay:r*.08,children:[c.jsx(C1,{children:String(r+1).padStart(2,"0")}),c.jsx(H1,{children:T.title}),c.jsx(_1,{children:T.text})]},T.title))}),c.jsx(U1,{children:c.jsx(Y0,{strength:.3,style:{display:"inline-block"},children:c.jsxs(B1,{href:f.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.04},whileTap:{scale:.97},children:[c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),f.buttonProps.name]})})})]})})},y0=gt.out,R1=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 5vh, 64px) clamp(48px, 6vw, 96px);
  margin-top: clamp(40px, 6vh, 72px);

  ${k.tablet} { grid-template-columns: repeat(2, 1fr); }
`,k1=p(q.div)`
  display: flex;
  flex-direction: column;
`,q1=p.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px solid var(--line);
`,L1=p.h3`
  font-family: ${lt.display};
  font-size: clamp(18px, 2vw, 23px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.1;
`,G1=p.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Y1=p.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`,X1=p.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,Q1=p.span`
  font-size: 14.5px;
  color: var(--ink);
  line-height: 1.25;
`,V1=p.span`
  font-family: ${lt.mono};
  font-size: 12.5px;
  color: var(--ink-3);
  flex-shrink: 0;
`,Z1=p.div`
  position: relative;
  height: 4px;
  border-radius: 4px;
  background: var(--line);
  overflow: hidden;
`,K1=p(q.span)`
  position: absolute;
  inset: 0;
  border-radius: 4px;
  transform-origin: left center;
  background: var(--grad-brand);
`,J1=({data:f})=>{const y=Mt();return c.jsx(Ta,{id:"technologyproficiency",children:c.jsxs(ja,{$max:"wide",children:[c.jsx(Je,{title:"Skills",lead:"The stack behind agentic AI systems, billion-row analytics, and platforms that stay up while they scale."}),c.jsx(R1,{children:f.skills.map(T=>c.jsxs(k1,{initial:y?!1:{opacity:0,y:26},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6,ease:y0},children:[c.jsx(q1,{children:c.jsx(L1,{children:T.category})}),c.jsx(G1,{children:T.skills.map((r,j)=>c.jsxs(Y1,{children:[c.jsxs(X1,{children:[c.jsx(Q1,{children:r.name}),c.jsxs(V1,{children:[r.percentage,"%"]})]}),c.jsx(Z1,{children:c.jsx(K1,{initial:y?{scaleX:r.percentage/100}:{scaleX:0},whileInView:{scaleX:r.percentage/100},viewport:{once:!0,amount:.8},transition:{duration:.9,delay:.1+j*.06,ease:y0}})})]},r.name))})]},T.category))})]})})},$1=p.div`
  position: relative;
  padding-left: 30px;
  ${k.tablet} { padding-left: 220px; }
`,W1=p.span`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: var(--line);
  ${k.tablet} { left: 188px; }
`,F1=p(q.span)`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: var(--grad-brand-v);
  transform-origin: top;
  ${k.tablet} { left: 188px; }
`,I1=p(q.div)`
  position: relative;
  padding: 0 0 56px;
  &:last-child { padding-bottom: 0; }
`,P1=p.span`
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
`,tv=p.span`
  font-family: ${lt.mono};
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
`,ev=p.h3`
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
    ${k.hover} {
      &:hover::after { transform: scaleX(1); }
    }
  }
`,av=p.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--accent-ink);
  margin-bottom: 2px;
`,lv=p.p`
  font-size: 13.5px;
  color: var(--ink-3);
  font-style: italic;
  margin-bottom: 16px;
`,nv=p.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--ink-2);

  a { color: var(--accent-ink); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--line-2); }
  a:hover { text-decoration-color: var(--accent); }
`,iv=p.button`
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
`,uv=p.span`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  vertical-align: bottom;
`,cv=p(q.span)`
  display: inline-block;
  white-space: nowrap;
`,ov=p(q.div)`
  display: grid;
  overflow: hidden;
`,sv=p.div`
  min-height: 0;
  overflow: hidden;
`,rv=p.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
`,fv=p.li`
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
`,dv=({data:f})=>{const y=Mt(),T=B.useRef(null),[r,j]=B.useState(new Set),{scrollYProgress:E}=Rn({target:T,offset:["start 60%","end 60%"]}),M=Ka(E,[0,1],[0,1]),C=Ja(M,T0),_=D=>j(N=>{const w=new Set(N);return w.has(D)?w.delete(D):w.add(D),w});return c.jsx(Ta,{id:"professionalexperience",children:c.jsxs(ja,{$max:"wide",children:[c.jsx(Je,{title:"Experience",lead:"A decade across enterprise SaaS, from shipping features to owning platform architecture for global consulting clients."}),c.jsxs($1,{ref:T,children:[c.jsx(W1,{}),!y&&c.jsx(F1,{style:{scaleY:C}}),f.timeline.map((D,N)=>{const w=r.has(N);return c.jsxs(I1,{initial:y?!1:{opacity:0,x:-24,filter:"blur(6px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:Ht.enter,ease:gt.out},children:[c.jsx(P1,{}),c.jsx(tv,{children:D.date}),c.jsx(ev,{children:c.jsx("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",children:D.title})}),c.jsx(av,{children:D.subTitle}),D.previously&&c.jsxs(lv,{children:["Previously: ",D.previously]}),c.jsx(nv,{dangerouslySetInnerHTML:{__html:D.descriptionSummary}}),D.achievements&&D.achievements.length>0&&c.jsxs(c.Fragment,{children:[c.jsxs(iv,{"data-open":w,onClick:()=>_(N),"aria-expanded":w,children:[c.jsx("span",{children:"Show"}),c.jsx(uv,{children:c.jsx(Rl,{mode:"popLayout",initial:!1,children:c.jsx(cv,{initial:{y:"100%",opacity:0},animate:{y:"0%",opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:Ht.surface,ease:gt.out},children:w?"Less":"More"},w?"less":"more")})}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M6 9l6 6 6-6"})})]}),c.jsx(Rl,{initial:!1,children:w&&c.jsx(ov,{initial:{gridTemplateRows:"0fr",opacity:0},animate:{gridTemplateRows:"1fr",opacity:1},exit:{gridTemplateRows:"0fr",opacity:0},transition:{gridTemplateRows:{duration:.45,ease:gt.out},opacity:{duration:Ht.surface,ease:gt.out}},children:c.jsx(sv,{children:c.jsx(rv,{children:D.achievements.map((Y,Q)=>c.jsxs(fv,{children:[c.jsx("strong",{children:Y.title}),": ",Y.description]},Q))})})})})]})]},N)})]})]})})};function hv(f){const y=B.useCallback(j=>{const E=window.matchMedia(f);return E.addEventListener("change",j),()=>E.removeEventListener("change",j)},[f]),T=B.useCallback(()=>window.matchMedia(f).matches,[f]),r=B.useCallback(()=>!1,[]);return B.useSyncExternalStore(y,T,r)}const Q0=p.div`
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
    background: var(--grad-brand);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--dur-hover) var(--ease-out);
  }
  ${k.hover} {
    &:hover::before { transform: scaleX(1); }
  }
`,pv=p.h3`
  font-family: ${lt.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.12;
  margin-bottom: 20px;
`,mv=p.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;
`,gv=p.li`
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
`,vv=p.section`
  position: relative;
  --rail: max(var(--gutter), calc((100vw - var(--maxw-wide)) / 2));

  ${k.desktop} {
    --rail: calc((100vw - var(--maxw-wide) - var(--gutter) * 2) / 4 + var(--gutter));
  }
`,yv=p.div`
  position: sticky;
  top: 0;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`,bv=p.div`
  padding-inline: var(--rail);
  margin: 0 0 40px;
  width: 100%;
`,xv=p(q.div)`
  display: flex;
  gap: 26px;
  padding: 0 var(--rail) 8px;
  will-change: transform;

  ${Q0} { width: min(440px, 82vw); }
`,Sv=p.div`
  margin: 30px var(--rail) 0;
  height: 2px;
  background: var(--line);
  border-radius: 2px;
  overflow: hidden;
`,zv=p(q.div)`
  height: 100%;
  background: var(--grad-brand);
  transform-origin: left;
`,Av=p.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,Tv=p.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);

  ${k.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,jv=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${k.mobile} { grid-template-columns: repeat(2, 1fr); }
`,V0=({title:f,content:y})=>c.jsxs(Q0,{children:[c.jsx(pv,{children:f}),c.jsx(mv,{children:y.slice(0,4).map((T,r)=>c.jsx(gv,{children:T},r))})]}),Z0="The systems I would put my name on, with the numbers that came with them.",b0=T0,Ev=({data:f})=>{const y=B.useRef(null),T=B.useRef(null),[r,j]=B.useState(0),{scrollYProgress:E}=Rn({target:y,offset:["start start","end end"]}),M=Ka(E,[0,1],[0,-r]),C=Ka(E,[0,1],[0,1]),_=Ja(M,b0),D=Ja(C,b0);return B.useLayoutEffect(()=>{const N=()=>{const w=T.current;w&&j(Math.max(0,w.scrollWidth-window.innerWidth+48))};return N(),window.addEventListener("resize",N,{passive:!0}),()=>window.removeEventListener("resize",N)},[]),c.jsx(vv,{id:"mostproudof",ref:y,style:{height:`calc(100dvh + ${r}px)`},children:c.jsxs(yv,{children:[c.jsx(bv,{children:c.jsx(Je,{title:"Most Proud Of",lead:Z0})}),c.jsx(xv,{ref:T,style:{x:_},children:f.content.map(N=>c.jsx(V0,{title:N.title,content:N.content},N.id))}),c.jsx("div",{style:{width:"100%"},children:c.jsx(Sv,{children:c.jsx(zv,{style:{scaleX:D}})})})]})})},wv=({data:f})=>c.jsx(Av,{id:"mostproudof",children:c.jsxs(Tv,{children:[c.jsx(Je,{title:"Most Proud Of",lead:Z0}),c.jsx(jv,{children:f.content.map((y,T)=>c.jsx(Aa,{dir:"up",delay:T%2*.06,children:c.jsx(V0,{title:y.title,content:y.content})},y.id))})]})}),Mv=({data:f})=>{const y=Mt();return hv("(min-width: 1024px)")&&!y?c.jsx(Ev,{data:f}):c.jsx(wv,{data:f})},Dv=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${k.mobile} { grid-template-columns: repeat(3, 1fr); gap: 20px; }
`,Ov=p(q.div)`
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
`,Cv=p.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${lt.mono};
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--accent-ink);
  margin-bottom: 18px;

  span.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
`,Hv=p.h3`
  font-family: ${lt.display};
  font-size: clamp(18px, 1.8vw, 21px);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: var(--ink);
  margin-bottom: auto;
`,_v=p.a`
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
`,Uv=f=>{const y=f.toLowerCase();return y.includes("azure")||y.includes("microsoft")?"Microsoft":y.includes("aws")?"Amazon Web Services":"Credential"},Bv=({data:f})=>{const y=Mt();return c.jsx(Ta,{id:"certifications",children:c.jsxs(ja,{$max:"wide",children:[c.jsx(Je,{title:"Certifications",lead:"Cloud and data credentials across Azure and AWS, kept current."}),c.jsx(Dv,{children:f.certificateProps.certificateMetaData.map((T,r)=>c.jsx(X0,{max:9,children:c.jsxs(Ov,{initial:y?!1:{opacity:0,y:28,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.3},transition:{duration:Ht.enter,delay:r*.1,ease:gt.out},children:[c.jsxs(Cv,{children:[c.jsx("span",{className:"dot"}),Uv(T.title)]}),c.jsx(Hv,{children:T.title}),c.jsxs(_v,{href:T.buttonProps.link,target:"_blank",rel:"noopener noreferrer",children:["Verify credential",c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),c.jsx("path",{d:"M15 3h6v6M10 14L21 3"})]})]})]})},r))})]})})},su=gt.out,Nv=7e3,Rv=28,x0=8,kv={duration:Ht.fill,ease:gt.out},S0=90,qv=80,Lv=p.div`
  max-width: 900px;
`,Gv=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`,Yv=p.span`
  font-family: ${lt.mono};
  font-size: 12.5px;
  letter-spacing: 0.14em;
  color: var(--ink-3);

  em { font-style: normal; color: var(--accent-ink); }
`,Xv=p.div`
  display: flex;
  gap: 10px;
`,z0=p(q.button)`
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
`,Qv=p.div`
  position: relative;
`,Vv=p(q.figure)`
  will-change: transform, opacity;
  cursor: grab;
  &:active { cursor: grabbing; }
`,Zv=p.blockquote`
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
    background: var(--grad-brand-v);
  }
`,Kv=p.figcaption`
  margin-top: clamp(30px, 4.5vh, 48px);
  padding-left: clamp(22px, 3vw, 38px);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Jv=p.span`
  font-weight: 600;
  font-size: 16px;
  color: var(--ink);
`,$v=p.span`
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
`,Wv=p.div`
  display: flex;
  gap: 10px;
  margin-top: clamp(34px, 5vh, 48px);
  padding-left: clamp(22px, 3vw, 38px);
`,Fv=p(q.button)`
  height: ${x0}px;
  width: ${({$active:f})=>f?Rv:x0}px;
  flex-shrink: 0;
  background: ${({$active:f})=>f?"var(--accent)":"var(--line-2)"};
  transition: background var(--dur-feedback) var(--ease-out);

  ${k.hover} {
    &:hover { background: ${({$active:f})=>f?"var(--accent)":"var(--ink-3)"}; }
  }
`,Iv=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M15 6l-6 6 6 6"})}),Pv=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M9 6l6 6-6 6"})}),t2=({data:f})=>{const y=Mt(),T=f.quoteProps.quoteMetaData,r=T.length,[j,E]=B.useState({index:0,dir:0,from:0,velocity:0}),[M,C]=B.useState(!1),_=B.useCallback((Q,G,P=0,K=0)=>{E({index:(Q%r+r)%r,dir:G,from:P,velocity:K})},[r]),D=B.useCallback(Q=>_(j.index+Q,Q),[_,j.index]);if(B.useEffect(()=>{if(y||r<=1||M)return;const Q=setInterval(()=>E(G=>({index:(G.index+1)%r,dir:1,from:0,velocity:0})),Nv);return()=>clearInterval(Q)},[y,r,M]),r===0)return null;const N=T[j.index],w=r>1,Y={enter:({dir:Q})=>({opacity:0,x:y?0:Q*48,filter:"blur(8px)"}),center:{opacity:1,x:0,filter:"blur(0px)",transition:{x:y?{duration:0}:du,opacity:{duration:.4,ease:su},filter:{duration:.4,ease:su}}},exit:({dir:Q,from:G,velocity:P})=>({opacity:0,x:y?0:Q>0?Math.min(G-64,-96):Math.max(G+64,96),filter:"blur(8px)",transition:{x:y?{duration:0}:{...Math.abs(P)>qv?jm:du,velocity:P},opacity:{duration:.3,ease:su},filter:{duration:.3,ease:su}}})};return c.jsx(Ta,{id:"testimonials",children:c.jsxs(ja,{$max:"wide",children:[c.jsx(Je,{title:"Testimonials",lead:"Words from people I have built alongside."}),c.jsxs(Lv,{onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),onFocusCapture:()=>C(!0),onBlurCapture:()=>C(!1),children:[w&&c.jsxs(Gv,{children:[c.jsxs(Yv,{children:[c.jsx("em",{children:String(j.index+1).padStart(2,"0")})," / ",String(r).padStart(2,"0")]}),c.jsxs(Xv,{children:[c.jsx(z0,{onClick:()=>D(-1),"aria-label":"Previous testimonial",whileTap:{scale:.92},children:c.jsx(Iv,{})}),c.jsx(z0,{onClick:()=>D(1),"aria-label":"Next testimonial",whileTap:{scale:.92},children:c.jsx(Pv,{})})]})]}),c.jsx(Qv,{"aria-live":"polite","aria-roledescription":"carousel",children:c.jsx(Rl,{mode:"popLayout",custom:j,initial:!1,children:c.jsxs(Vv,{custom:j,variants:Y,initial:"enter",animate:"center",exit:"exit",drag:w&&!y?"x":!1,dragConstraints:{left:0,right:0},dragElastic:1,dragMomentum:!1,dragTransition:{bounceStiffness:400,bounceDamping:40},onDragStart:()=>C(!0),onDragEnd:(Q,G)=>{C(!1);const P=G.offset.x+Em(G.velocity.x);P<=-S0?_(j.index+1,1,G.offset.x,G.velocity.x):P>=S0&&_(j.index-1,-1,G.offset.x,G.velocity.x)},children:[c.jsxs(Zv,{children:["“",N.quote,"”"]}),c.jsxs(Kv,{children:[c.jsx(Jv,{children:N.givenBy}),c.jsxs($v,{children:[N.subTitleGivenBy,N.source&&c.jsxs(c.Fragment,{children:["  ·  ",c.jsxs("em",{children:["via ",N.source]})]})]})]})]},j.index)})}),w&&c.jsx(Wv,{role:"tablist","aria-label":"Select testimonial",children:T.map((Q,G)=>c.jsx(Fv,{layout:!y,transition:kv,style:{borderRadius:999},whileTap:{scaleY:1.6},$active:G===j.index,onClick:()=>_(G,G>j.index?1:-1),role:"tab","aria-selected":G===j.index,"aria-label":`Testimonial ${G+1}`},G))})]})]})})},e2="7253276225333293056",a2=`https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${e2}`,l2="https://www.linkedin.com/posts/mckinsey-india_mckinseycareer-journeypranshu-ugcPost-7253276225333293056-sdOl/",n2=p.div`
  position: relative;
  max-width: 560px;
  border-radius: var(--r-xl);
  border: 1px solid var(--line);
  background: var(--surface);
  overflow: hidden;
  transition: border-color var(--dur-surface) var(--ease-out), background var(--dur-surface) var(--ease-out);

  &:hover { border-color: var(--line-2); }
`,i2=p.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
`,u2=p.span`
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
`,c2=p.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,o2=p.span`
  font-family: ${lt.mono};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
`,s2=p.span`
  font-family: ${lt.display};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
`,r2=p.a`
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
`,f2=p.div`
  position: relative;
  height: 640px;
  background: #ffffff;

  ${k.belowMobile} { height: 600px; }
`,d2=p.iframe`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  opacity: ${({$loaded:f})=>f?1:0};
  transition: opacity var(--dur-frame) var(--ease-out);
`,h2=kn`
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
`,p2=p(q.div)`
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
`,m2=p.div`
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
    animation: ${({$reduce:f})=>f?"none":h2} 1.4s linear infinite;
  }
`,g2=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M7 17L17 7M9 7h8v8"})}),v2=()=>{const f=Mt(),y=B.useRef(null),[T,r]=B.useState(!1),[j,E]=B.useState(!1);return B.useEffect(()=>{const M=y.current;if(!M)return;const C=new IntersectionObserver(([_])=>{_.isIntersecting&&(r(!0),C.disconnect())},{rootMargin:"400px 0px"});return C.observe(M),()=>C.disconnect()},[]),c.jsx(Ta,{id:"featured",children:c.jsxs(ja,{$max:"content",children:[c.jsx(Je,{title:"Featured",lead:"McKinsey India on my journey building AI-driven, forward-thinking solutions for clients across industries."}),c.jsx(Aa,{dir:"up",children:c.jsxs(n2,{children:[c.jsxs(i2,{children:[c.jsx(u2,{children:c.jsx(_0,{})}),c.jsxs(c2,{children:[c.jsx(o2,{children:"Featured on LinkedIn"}),c.jsx(s2,{children:"McKinsey India"})]}),c.jsxs(r2,{href:l2,target:"_blank",rel:"noopener noreferrer","aria-label":"View the McKinsey India post on LinkedIn",children:[c.jsx("span",{children:"View post"}),c.jsx(g2,{})]})]}),c.jsxs(f2,{ref:y,children:[T&&c.jsx(d2,{src:a2,title:"McKinsey India feature on Pranshu Nijhawan's career journey",loading:"lazy",allowFullScreen:!0,$loaded:j,onLoad:()=>E(!0)}),c.jsx(Rl,{children:!j&&c.jsx(p2,{$reduce:!!f,"aria-hidden":!0,initial:!1,exit:{opacity:0},transition:{duration:Ht.surface,ease:gt.out},children:c.jsx(m2,{$reduce:!!f})},"skeleton")})]})]})})]})})},y2=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid var(--line);

  ${k.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 56px;
  }
`,b2=p(q.div)`
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 8px;
`,x2=p.span`
  font-family: ${lt.mono};
  font-size: 13px;
  color: var(--accent-ink);
  letter-spacing: 0.02em;
`,S2=p.h3`
  font-family: ${lt.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.15;
`,z2=p.p`
  font-size: 15px;
  color: var(--ink-2);
  line-height: 1.5;
`,A2=({data:f})=>{const y=Mt();return c.jsx(Ta,{id:"educationalqualifications",children:c.jsxs(ja,{$max:"wide",children:[c.jsx(Je,{title:"Education"}),c.jsx(y2,{children:f.timeline.map((T,r)=>c.jsxs(b2,{initial:y?!1:{opacity:0,y:22,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.55,delay:r%2*.08,ease:gt.out},children:[c.jsx(x2,{children:T.date}),c.jsx(S2,{children:T.title}),c.jsx(z2,{children:T.subTitle})]},r))})]})})},T2=p.h2`
  font-family: ${lt.display};
  font-weight: 600;
  font-size: clamp(40px, 7.5vw, 88px);
  letter-spacing: -0.035em;
  line-height: 0.96;
  color: var(--ink);
  margin-bottom: 26px;

  em { font-style: normal; color: var(--accent-ink); }
`,j2=p.p`
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.6;
  color: var(--ink-2);
  max-width: 50ch;
  margin-bottom: 64px;
`,E2=p.div`
  border-top: 1px solid var(--line);
`,Nn=p(q.a)`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 26px 4px;
  border-bottom: 1px solid var(--line);
  transition: background-color var(--dur-press) var(--ease-out);

  &:active { background-color: var(--surface-2); }
`,w2=p.span`
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
    ${Nn}:hover & { transform: translateX(12px); }
  }
`,M2=p.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
  flex: 1;
  transition: transform var(--dur-control) var(--ease-out);

  ${k.hover} {
    ${Nn}:hover & { transform: translateX(12px); }
  }
`,D2=p.span`
  font-family: ${lt.mono};
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
`,O2=p.span`
  font-family: ${lt.display};
  font-size: clamp(18px, 2.4vw, 24px);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,C2=p.span`
  flex-shrink: 0;
  color: var(--ink-3);
  transition: transform var(--dur-surface) var(--ease-out), color var(--dur-surface) var(--ease-out);
  svg { width: 20px; height: 20px; }

  ${Nn}:hover & { color: var(--accent-ink); }
  ${k.hover} {
    ${Nn}:hover & { transform: translate(4px, -4px); }
  }
`,H2={email:c.jsx(H0,{}),phone:c.jsx(Xm,{}),linkedin:c.jsx(_0,{}),location:c.jsx(Qm,{})},_2=({data:f})=>{const y=Mt();return c.jsx(Ta,{id:"contact",children:c.jsxs(ja,{$max:"wide",children:[c.jsx(Aa,{dir:"up",children:c.jsxs(T2,{children:[c.jsx(Jo,{text:"Let's build something"}),c.jsx("br",{}),c.jsx("em",{children:c.jsx(Jo,{text:"that scales.",delay:.15})})]})}),c.jsx(Aa,{dir:"up",delay:.1,children:c.jsx(j2,{children:"Architecture, agentic AI, or platform performance. If it needs to work at scale, I want to hear about it."})}),c.jsx(E2,{children:f.contactMetaData.map((T,r)=>{const j=T.icon.toLowerCase(),E=T.href.startsWith("http");return c.jsxs(Nn,{href:T.href,target:E?"_blank":void 0,rel:E?"noopener noreferrer":void 0,initial:y?!1:{opacity:0,y:20,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:Ht.frame,delay:r*.07,ease:gt.out},children:[c.jsx(w2,{children:H2[j]??c.jsx(H0,{})}),c.jsxs(M2,{children:[c.jsx(D2,{children:j==="email"?"Email":T.icon}),c.jsx(O2,{children:T.content})]}),c.jsx(C2,{children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M7 17L17 7M9 7h8v8"})})})]},r)})})]})})},U2={content:["🔹  I own the architecture of Promotion Advisor end to end, McKinsey Periscope's flagship multi-tenant SaaS: the planning application, the Analytics Engine, and the agentic layer. That includes the security model, the GitOps configuration framework, polyglot persistence, ETL, the reporting engine, and the external API surface.","My recent work is agentic architecture across an MCP mesh. I co-built Platform AI, Periscope's enterprise agent platform, then built Cortex so business logic stays compiled and deterministic rather than authored in prompts, and the Context-Scoped Catalog so tool discovery stays accurate however large the tool fleet grows.","Underneath that I build the data systems: billion-row sub-second analytics on ClickHouse, sub-2 second response on 2M+ records, and semantic vectorized lookup over JSONB. I also coached org-wide Cursor and AI-assisted engineering for a 37% capacity increase, and led the shift to Spec-Driven Development and an AI-led SDLC."],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},B2={certificateProps:{certificateMetaData:[{buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},N2={contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},R2={timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010"}]},k2={name:"Pranshu Nijhawan",designation:"Architecting Agentic AI. Engineering at Scale."},q2={content:[{id:1,title:"Platform AI: Periscope's Enterprise Agent Platform",content:["Co-built the agent platform that every product agent across Periscope now deploys through.","A GitOps Agent Definition Manager versions each agent as Git artifacts composed from skills, agent files, and scripts, not prompt text in a low-code editor.","A LangChain harness on Kubernetes runs one agent loop for all product agents, behind a Tenant MCP gateway that owns authentication, tool discovery, and quota.","Caller identity survives every hop, so an agent executes strictly inside the permissions of the prompting user."]},{id:2,title:"Cortex: Deterministic Business Logic for Agents",content:["Built a stateless engine that compiles configurable business rules into deterministic executable binaries.","Rules compose from three atomic operations (acquire, derive, assert) into playbooks, version-controlled through GitOps.","A purpose-built TypeScript compiler parses the typed YAML, so business rules stay unit-testable and reusable across agents.","Agent output is reproducible and auditable instead of dependent on what a prompt happened to say."]},{id:3,title:"Context-Scoped Catalog: Tool Selection at Fleet Scale",content:["Solved context pollution: an agent cannot reach a large tool estate if every tool is bound up front.","Designed the selection algorithm, which pins the tools an agent declares, shortlists the rest with a free BM25 lexical pass, then uses a cheap router model to separate near-duplicate actions.","Scoped the catalog per tenant and structured it hierarchically, which makes version gating exact and routing deterministic.","Context stays bounded and tool discovery stays accurate however large the fleet grows."]},{id:4,title:"Periscope Reporting Engine: Billion-Row Analytics on ClickHouse",content:["Built the reporting engine as a configurable runtime-query architecture, so users compose their own reports.","Aggregations resolve at request time against a governed ontology through a dynamic Query Builder, which removes the batch-prep step and the analytics-team dependency for each new measure.","Modeled the store on Projections and Dictionaries for billion-row sub-second interactive queries.","Separately designed the multi-dimensional promotion conflict detection algorithm, progressive candidate narrowing over sorted item arrays: sub-2 second response at 20 concurrent users across 2M promotions, 5,000x faster on large item groups."]},{id:5,title:"AI-Assisted Engineering and the Agent Library",content:["Drove org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit), which raised team capacity 37%.","Built 10+ production agents for architecture diagrams, ADR and APR authorship, and technical communications.","Built an SDD Agent that runs an 11-dimension anti-hallucination audit on every spec before it reaches implementation.","Built the Repo Mastery Agent, the code knowledge base coding agents ground against, which replaced a heavy Graph RAG documentation system with a Registry Pattern over vector binaries and explicit dependency relations."]}]},L2={timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 - Present",descriptionSummary:`At McKinsey I am the sole architecture owner of <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a>, a flagship multi-tenant SaaS in the <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> suite for CPG and retail clients. I co-built Platform AI, Periscope's enterprise agent platform, and designed the agentic layer that runs on it. I lead 65+ engineers across five development squads and a core support squad, and partner with senior consulting leaders on high-stakes RFPs and enterprise implementations.`,achievements:[{title:"Platform Architecture Ownership",description:"Own the architecture of Promotion Advisor end to end: the planning application (React, TypeScript, Node.js, GraphQL, C# / .NET microservices), the Analytics Engine (Databricks, PySpark, DBT, PostgreSQL), and the agentic layer. Accountable for the configuration framework (GitOps-based, zero-downtime configuration delivery), the security model, polyglot persistence (PostgreSQL, Redis, Databricks Delta tables, ClickHouse), ETL, the Periscope Reporting Engine, and the external API surface."},{title:"Platform AI: Enterprise Agent Platform",description:"Co-built Platform AI, Periscope's enterprise agent platform: a GitOps Agent Definition Manager that versions every agent as Git artifacts, not prompt text; a LangChain harness on Kubernetes running one agent loop for all product agents; and a Tenant MCP gateway owning authentication, tool discovery, and quota. Caller identity survives every hop."},{title:"Cortex: Deterministic Business-Logic Engine",description:"Built Cortex, a stateless engine that runs business logic written as configuration. Rules compose from three operations (acquire, derive, assert) into playbooks; a purpose-built TypeScript compiler parses the typed YAML into executable binaries. Business rules stay deterministic and unit-testable, so agent output is reproducible and auditable."},{title:"Context-Scoped Catalog: Tool Selection at Fleet Scale",description:"Solved context pollution: an agent cannot reach a large tool estate if every tool is bound up front. Designed the selection algorithm (pinned tools, a free BM25 shortlist, then a cheap router model for the near-duplicates) and scoped the catalog per tenant, which makes version gating exact and routing deterministic. Version-mismatch failures dropped to zero, and a new solution registers without per-tool wiring."},{title:"Periscope Reporting Engine on ClickHouse & Real-Time Conflict Detection",description:"Built the Periscope Reporting Engine on ClickHouse (Projections, Dictionaries, billion-row sub-second queries): users compose their own reports and every aggregation resolves at request time against a governed ontology through a dynamic Query Builder, which removes the batch-prep step and the analytics-team dependency for each new measure. Also designed the multi-dimensional promotion conflict detection algorithm, progressive candidate narrowing over sorted item arrays: sub-2s at 20 concurrent users across 2M promotions, 5,000x faster on large item groups."},{title:"AI-Assisted Engineering & Agent Tooling",description:"Drove org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit), which raised team capacity 37%. Built the agent library behind it: 10+ production agents for architecture diagrams, ADR and APR authorship, and technical communications, plus an SDD Agent that runs an 11-dimension anti-hallucination audit per spec. The Repo Mastery Agent replaced a heavy Graph RAG documentation system with a Registry Pattern over vector binaries and explicit dependency relations."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 - March 2022",descriptionSummary:'At Eptura I re-architected a single-tenant workspace SaaS, <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), to cloud-native microservices on AKS and built a global IoT release orchestrator that pushes firmware to 300M+ devices. Directed 20 engineers across four squads.',achievements:[{title:"Cloud-Native Re-Architecture",description:"Migrated legacy single-tenant SaaS to cloud-native microservices on Azure Kubernetes Service (AKS): 60% faster incident recovery, and single-tenant scaling bottlenecks eliminated."},{title:"Global IoT Release Orchestration",description:"Built a release orchestration system (Azure IoT Hub, Azure Functions, Azure CosmosDB) that delivers firmware updates to 300M+ IoT devices worldwide with zero-downtime rollouts."},{title:"Engineering Leadership",description:"Directed 20 engineers (4 tech leads) across four squads. Established a structured mentorship program: +20% retention and faster engineering progression."}]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 - April 2021",descriptionSummary:"At Nagarro I shipped full-stack web and mobile applications for e-commerce and HR enterprise clients on Angular, .NET Core, PostgreSQL, and Ionic. CI/CD and IaC practices cut deployment failures by 70% across client projects.",achievements:[{title:"Full-Stack Web + Mobile Delivery",description:"Delivered production web and mobile apps on Angular, .NET Core, PostgreSQL, and Ionic Framework for e-commerce and HR clients at 99.5%+ uptime."},{title:"CI/CD & Infrastructure as Code",description:"Established CI/CD pipelines and IaC practices: 70% reduction in deployment failures across client projects."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 - December 2019",descriptionSummary:'At Condeco I built C# / .NET / React / SQL Server microservices for the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> workspace SaaS that carried 3x customer growth without reliability regressions. Cut build times 40% and core query latency 3x through data model refactoring.',achievements:[{title:"Microservices for 3x Customer Scale",description:"Designed and shipped C# / .NET / React / SQL Server microservices that carried 3x customer growth without reliability regressions."},{title:"CI/CD & Data Model Optimization",description:"Cut build times 40% and refactored core data models to reduce average query latency 3x."}]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",previously:"Intern",date:"February 2016 - August 2018",descriptionSummary:"At Gartner I built backend features on C# / .NET Core / React for an HR analytics SaaS, which improved survey data accuracy 60% for consulting clients. Automated SQL workflows saved 240+ engineering hours annually.",achievements:[{title:"SaaS Analytics Backend",description:"Built backend features on C# / .NET Core / React for the HR analytics platform, which improved employee survey data accuracy 60% for consulting clients."},{title:"SQL Workflow Automation",description:"Automated SQL workflows (stored procedures, SQL Agent jobs): saved 240+ engineering hours annually."}]}]},G2={skills:[{category:"AI & Agentic Engineering",skills:[{name:"Multi-Agent Orchestration",percentage:100},{name:"MCP (servers and clients)",percentage:100},{name:"Tool Discovery & Routing",percentage:100},{name:"Context Engineering",percentage:95},{name:"Cursor (Rules / Skills / Agents / Hooks / SDK)",percentage:100},{name:"Spec-Driven Development (OpenSpec, SpecKit)",percentage:100}]},{category:"Architecture",skills:[{name:"Multi-Tenant SaaS Architecture",percentage:100},{name:"Microservices & Distributed Systems",percentage:100},{name:"Configuration-Driven Architecture",percentage:100},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Polyglot Persistence",percentage:95},{name:"ADR / APR Authorship",percentage:95}]},{category:"Backend",skills:[{name:"TypeScript / Node.js / Fastify",percentage:100},{name:"C# / .NET Core",percentage:100},{name:"GraphQL & REST APIs",percentage:95},{name:"Python",percentage:90}]},{category:"Frontend",skills:[{name:"React",percentage:100},{name:"TypeScript",percentage:100},{name:"Angular",percentage:90},{name:"Micro-Frontends",percentage:90}]},{category:"Data & Storage",skills:[{name:"PostgreSQL",percentage:100},{name:"ClickHouse",percentage:95},{name:"SQL Server",percentage:95},{name:"Redis",percentage:90}]},{category:"Cloud & Infrastructure",skills:[{name:"Microsoft Azure",percentage:95},{name:"Kubernetes (AKS)",percentage:90},{name:"Terraform & GitOps",percentage:90},{name:"Amazon Web Services (AWS)",percentage:85}]},{category:"Data Engineering & Real-Time Analytics",skills:[{name:"ClickHouse Analytics (Projections, Dictionaries)",percentage:95},{name:"Real-Time Analytics & Query Engines",percentage:95},{name:"Databricks (PySpark)",percentage:90},{name:"DBT & Blue-Green ETL",percentage:90}]},{category:"Security & Compliance",skills:[{name:"Two-Layer FAC + DAC Architecture",percentage:100},{name:"Casbin RBAC / ABAC",percentage:95},{name:"SOC2 / Secure SDLC",percentage:90}]}]},Y2={quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},X2={aboutSection:U2,certifications:B2,contactMe:N2,educationalQualifications:R2,homeSection:k2,mostProudOf:q2,professionalExperience:L2,technologyProficiency:G2,testimonials:Y2},Ze=X2;function Q2(){const[f,y]=B.useState(!1);return c.jsxs(Dm,{children:[c.jsx(wm,{}),c.jsxs(Om,{children:[c.jsx(Lm,{}),c.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),c.jsx(Dg,{revealed:f}),c.jsxs("main",{id:"main-content",style:{position:"relative",zIndex:1},role:"main",children:[c.jsx(y1,{data:Ze.homeSection,start:f}),c.jsx(N1,{data:Ze.aboutSection}),c.jsx(J1,{data:Ze.technologyProficiency}),c.jsx(dv,{data:Ze.professionalExperience}),c.jsx(Mv,{data:Ze.mostProudOf}),c.jsx(Bv,{data:Ze.certifications}),c.jsx(t2,{data:Ze.testimonials}),c.jsx(v2,{}),c.jsx(A2,{data:Ze.educationalQualifications}),c.jsx(_2,{data:Ze.contactMe})]}),c.jsx(Bg,{}),c.jsx(Rl,{children:!f&&c.jsx(Xg,{onComplete:()=>y(!0)},"intro")})]})]})}"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);Tm.createRoot(document.getElementById("root")).render(c.jsx(B.StrictMode,{children:c.jsx(Q2,{})}));
