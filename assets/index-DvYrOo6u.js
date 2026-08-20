import{r as H,j as o,u as Dt,m as Y,a as Ee,b as Oa,L as Bp,A as Dn,c as On,d as zl,e as Cn,f as _p}from"./vendor-motion-C8MGYtJI.js";import{r as Hp,a as Np}from"./vendor-react-DlBnNAMw.js";import{f as Rp,d as g,m as qp}from"./vendor-styled-CTMXd9gs.js";var zo={exports:{}},En={},Ao={exports:{}},To={};var _d;function Yp(){return _d||(_d=1,(function(d){function x(z,C){var G=z.length;z.push(C);t:for(;0<G;){var dt=G-1>>>1,ht=z[dt];if(0<M(ht,C))z[dt]=C,z[G]=ht,G=dt;else break t}}function T(z){return z.length===0?null:z[0]}function f(z){if(z.length===0)return null;var C=z[0],G=z.pop();if(G!==C){z[0]=G;t:for(var dt=0,ht=z.length,Yt=ht>>>1;dt<Yt;){var yt=2*(dt+1)-1,nt=z[yt],Ot=yt+1,Se=z[Ot];if(0>M(nt,G))Ot<ht&&0>M(Se,nt)?(z[dt]=Se,z[Ot]=G,dt=Ot):(z[dt]=nt,z[yt]=G,dt=yt);else if(Ot<ht&&0>M(Se,G))z[dt]=Se,z[Ot]=G,dt=Ot;else break t}}return C}function M(z,C){var G=z.sortIndex-C.sortIndex;return G!==0?G:z.id-C.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;d.unstable_now=function(){return D.now()}}else{var E=Date,U=E.now();d.unstable_now=function(){return E.now()-U}}var B=[],w=[],k=1,j=null,q=3,$=!1,Q=!1,Z=!1,At=!1,gt=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,rt=typeof setImmediate<"u"?setImmediate:null;function Ct(z){for(var C=T(w);C!==null;){if(C.callback===null)f(w);else if(C.startTime<=z)f(w),C.sortIndex=C.expirationTime,x(B,C);else break;C=T(w)}}function ge(z){if(Z=!1,Ct(z),!Q)if(T(B)!==null)Q=!0,ne||(ne=!0,ie());else{var C=T(w);C!==null&&Me(ge,C.startTime-z)}}var ne=!1,we=-1,ve=5,Ll=-1;function Un(){return At?!0:!(d.unstable_now()-Ll<ve)}function Vl(){if(At=!1,ne){var z=d.unstable_now();Ll=z;var C=!0;try{t:{Q=!1,Z&&(Z=!1,P(we),we=-1),$=!0;var G=q;try{e:{for(Ct(z),j=T(B);j!==null&&!(j.expirationTime>z&&Un());){var dt=j.callback;if(typeof dt=="function"){j.callback=null,q=j.priorityLevel;var ht=dt(j.expirationTime<=z);if(z=d.unstable_now(),typeof ht=="function"){j.callback=ht,Ct(z),C=!0;break e}j===T(B)&&f(B),Ct(z)}else f(B);j=T(B)}if(j!==null)C=!0;else{var Yt=T(w);Yt!==null&&Me(ge,Yt.startTime-z),C=!1}}break t}finally{j=null,q=G,$=!1}C=void 0}}finally{C?ie():ne=!1}}}var ie;if(typeof rt=="function")ie=function(){rt(Vl)};else if(typeof MessageChannel<"u"){var Bn=new MessageChannel,Ua=Bn.port2;Bn.port1.onmessage=Vl,ie=function(){Ua.postMessage(null)}}else ie=function(){gt(Vl,0)};function Me(z,C){we=gt(function(){z(d.unstable_now())},C)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(z){z.callback=null},d.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<z?Math.floor(1e3/z):5},d.unstable_getCurrentPriorityLevel=function(){return q},d.unstable_next=function(z){switch(q){case 1:case 2:case 3:var C=3;break;default:C=q}var G=q;q=C;try{return z()}finally{q=G}},d.unstable_requestPaint=function(){At=!0},d.unstable_runWithPriority=function(z,C){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=q;q=z;try{return C()}finally{q=G}},d.unstable_scheduleCallback=function(z,C,G){var dt=d.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?dt+G:dt):G=dt,z){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=G+ht,z={id:k++,callback:C,priorityLevel:z,startTime:G,expirationTime:ht,sortIndex:-1},G>dt?(z.sortIndex=G,x(w,z),T(B)===null&&z===T(w)&&(Z?(P(we),we=-1):Z=!0,Me(ge,G-dt))):(z.sortIndex=ht,x(B,z),Q||$||(Q=!0,ne||(ne=!0,ie()))),z},d.unstable_shouldYield=Un,d.unstable_wrapCallback=function(z){var C=q;return function(){var G=q;q=C;try{return z.apply(this,arguments)}finally{q=G}}}})(To)),To}var Hd;function Gp(){return Hd||(Hd=1,Ao.exports=Yp()),Ao.exports}var Nd;function kp(){if(Nd)return En;Nd=1;var d=Gp(),x=Hp(),T=Np();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function D(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function E(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function U(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function B(t){if(D(t)!==t)throw Error(f(188))}function w(t){var e=t.alternate;if(!e){if(e=D(t),e===null)throw Error(f(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return B(n),t;if(i===a)return B(n),e;i=i.sibling}throw Error(f(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(f(189))}}if(l.alternate!==a)throw Error(f(190))}if(l.tag!==3)throw Error(f(188));return l.stateNode.current===l?t:e}function k(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=k(t),e!==null)return e;t=t.sibling}return null}var j=Object.assign,q=Symbol.for("react.element"),$=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),At=Symbol.for("react.strict_mode"),gt=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),rt=Symbol.for("react.context"),Ct=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),Ll=Symbol.for("react.activity"),Un=Symbol.for("react.memo_cache_sentinel"),Vl=Symbol.iterator;function ie(t){return t===null||typeof t!="object"?null:(t=Vl&&t[Vl]||t["@@iterator"],typeof t=="function"?t:null)}var Bn=Symbol.for("react.client.reference");function Ua(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Bn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Z:return"Fragment";case gt:return"Profiler";case At:return"StrictMode";case ge:return"Suspense";case ne:return"SuspenseList";case Ll:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Q:return"Portal";case rt:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case Ct:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case we:return e=t.displayName||null,e!==null?e:Ua(t.type)||"Memo";case ve:e=t._payload,t=t._init;try{return Ua(t(e))}catch{}}return null}var Me=Array.isArray,z=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},dt=[],ht=-1;function Yt(t){return{current:t}}function yt(t){0>ht||(t.current=dt[ht],dt[ht]=null,ht--)}function nt(t,e){ht++,dt[ht]=t.current,t.current=e}var Ot=Yt(null),Se=Yt(null),$e=Yt(null),_n=Yt(null);function Hn(t,e){switch(nt($e,e),nt(Se,t),nt(Ot,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?ad(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=ad(e),t=nd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(Ot),nt(Ot,t)}function Zl(){yt(Ot),yt(Se),yt($e)}function lu(t){t.memoizedState!==null&&nt(_n,t);var e=Ot.current,l=nd(e,t.type);e!==l&&(nt(Se,t),nt(Ot,l))}function Nn(t){Se.current===t&&(yt(Ot),yt(Se)),_n.current===t&&(yt(_n),zn._currentValue=G)}var au,Uo;function jl(t){if(au===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||"",Uo=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+au+t+Uo}var nu=!1;function iu(t,e){if(!t||nu)return"";nu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(y){var v=y}Reflect.construct(t,[],A)}else{try{A.call()}catch(y){v=y}t.call(A.prototype)}}else{try{throw Error()}catch(y){v=y}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(y){if(y&&v&&typeof y.stack=="string")return[y.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),m=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===m.length)for(a=s.length-1,n=m.length-1;1<=a&&0<=n&&s[a]!==m[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==m[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==m[n]){var b=`
`+s[a].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=a&&0<=n);break}}}finally{nu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?jl(l):""}function f0(t,e){switch(t.tag){case 26:case 27:case 5:return jl(t.type);case 16:return jl("Lazy");case 13:return t.child!==e&&e!==null?jl("Suspense Fallback"):jl("Suspense");case 19:return jl("SuspenseList");case 0:case 15:return iu(t.type,!1);case 11:return iu(t.type.render,!1);case 1:return iu(t.type,!0);case 31:return jl("Activity");default:return""}}function Bo(t){try{var e="",l=null;do e+=f0(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var uu=Object.prototype.hasOwnProperty,cu=d.unstable_scheduleCallback,ou=d.unstable_cancelCallback,r0=d.unstable_shouldYield,d0=d.unstable_requestPaint,Jt=d.unstable_now,h0=d.unstable_getCurrentPriorityLevel,_o=d.unstable_ImmediatePriority,Ho=d.unstable_UserBlockingPriority,Rn=d.unstable_NormalPriority,p0=d.unstable_LowPriority,No=d.unstable_IdlePriority,m0=d.log,g0=d.unstable_setDisableYieldValue,Ba=null,$t=null;function We(t){if(typeof m0=="function"&&g0(t),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(Ba,t)}catch{}}var Wt=Math.clz32?Math.clz32:b0,v0=Math.log,y0=Math.LN2;function b0(t){return t>>>=0,t===0?32:31-(v0(t)/y0|0)|0}var qn=256,Yn=262144,Gn=4194304;function El(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function kn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=El(a):(u&=c,u!==0?n=El(u):l||(l=c&~t,l!==0&&(n=El(l))))):(c=a&~i,c!==0?n=El(c):u!==0?n=El(u):l||(l=a&~t,l!==0&&(n=El(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function _a(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function x0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ro(){var t=Gn;return Gn<<=1,(Gn&62914560)===0&&(Gn=4194304),t}function su(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Ha(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function S0(t,e,l,a,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,m=t.hiddenUpdates;for(l=u&~l;0<l;){var b=31-Wt(l),A=1<<b;c[b]=0,s[b]=-1;var v=m[b];if(v!==null)for(m[b]=null,b=0;b<v.length;b++){var y=v[b];y!==null&&(y.lane&=-536870913)}l&=~A}a!==0&&qo(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function qo(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Wt(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Yo(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Wt(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Go(t,e){var l=e&-e;return l=(l&42)!==0?1:fu(l),(l&(t.suspendedLanes|e))!==0?0:l}function fu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ru(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ko(){var t=C.p;return t!==0?t:(t=window.event,t===void 0?32:wd(t.type))}function Qo(t,e){var l=C.p;try{return C.p=t,e()}finally{C.p=l}}var Fe=Math.random().toString(36).slice(2),_t="__reactFiber$"+Fe,kt="__reactProps$"+Fe,Kl="__reactContainer$"+Fe,du="__reactEvents$"+Fe,z0="__reactListeners$"+Fe,A0="__reactHandles$"+Fe,Xo="__reactResources$"+Fe,Na="__reactMarker$"+Fe;function hu(t){delete t[_t],delete t[kt],delete t[du],delete t[z0],delete t[A0]}function Jl(t){var e=t[_t];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Kl]||l[_t]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=rd(t);t!==null;){if(l=t[_t])return l;t=rd(t)}return e}t=l,l=t.parentNode}return null}function $l(t){if(t=t[_t]||t[Kl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ra(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function Wl(t){var e=t[Xo];return e||(e=t[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ut(t){t[Na]=!0}var Lo=new Set,Vo={};function wl(t,e){Fl(t,e),Fl(t+"Capture",e)}function Fl(t,e){for(Vo[t]=e,t=0;t<e.length;t++)Lo.add(e[t])}var T0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zo={},Ko={};function j0(t){return uu.call(Ko,t)?!0:uu.call(Zo,t)?!1:T0.test(t)?Ko[t]=!0:(Zo[t]=!0,!1)}function Qn(t,e,l){if(j0(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Xn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function De(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E0(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pu(t){if(!t._valueTracker){var e=Jo(t)?"checked":"value";t._valueTracker=E0(t,e,""+t[e])}}function $o(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Jo(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Ln(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var w0=/[\n"\\]/g;function ce(t){return t.replace(w0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function mu(t,e,l,a,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ue(e)):t.value!==""+ue(e)&&(t.value=""+ue(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?gu(t,u,ue(e)):l!=null?gu(t,u,ue(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ue(c):t.removeAttribute("name")}function Wo(t,e,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){pu(t);return}l=l!=null?""+ue(l):"",e=e!=null?""+ue(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),pu(t)}function gu(t,e,l){e==="number"&&Ln(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Il(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+ue(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Fo(t,e,l){if(e!=null&&(e=""+ue(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ue(l):""}function Io(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(f(92));if(Me(a)){if(1<a.length)throw Error(f(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=ue(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),pu(t)}function Pl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var M0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Po(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||M0.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function ts(t,e,l){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Po(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&Po(t,i,e[i])}function vu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),C0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vn(t){return C0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ce(){}var yu=null;function bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ta=null,ea=null;function es(t){var e=$l(t);if(e&&(t=e.stateNode)){var l=t[kt]||null;t:switch(t=e.stateNode,e.type){case"input":if(mu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ce(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[kt]||null;if(!n)throw Error(f(90));mu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&$o(a)}break t;case"textarea":Fo(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Il(t,!!l.multiple,e,!1)}}}var xu=!1;function ls(t,e,l){if(xu)return t(e,l);xu=!0;try{var a=t(e);return a}finally{if(xu=!1,(ta!==null||ea!==null)&&(Ui(),ta&&(e=ta,t=ea,ea=ta=null,es(e),t)))for(e=0;e<t.length;e++)es(t[e])}}function qa(t,e){var l=t.stateNode;if(l===null)return null;var a=l[kt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(f(231,e,typeof l));return l}var Oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Oe)try{var Ya={};Object.defineProperty(Ya,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Ya,Ya),window.removeEventListener("test",Ya,Ya)}catch{Su=!1}var Ie=null,zu=null,Zn=null;function as(){if(Zn)return Zn;var t,e=zu,l=e.length,a,n="value"in Ie?Ie.value:Ie.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===n[i-a];a++);return Zn=n.slice(t,1<a?1-a:void 0)}function Kn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jn(){return!0}function ns(){return!1}function Qt(t){function e(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jn:ns,this.isPropagationStopped=ns,this}return j(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),e}var Ml={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=Qt(Ml),Ga=j({},Ml,{view:0,detail:0}),O0=Qt(Ga),Au,Tu,ka,Wn=j({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ka&&(ka&&t.type==="mousemove"?(Au=t.screenX-ka.screenX,Tu=t.screenY-ka.screenY):Tu=Au=0,ka=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),is=Qt(Wn),U0=j({},Wn,{dataTransfer:0}),B0=Qt(U0),_0=j({},Ga,{relatedTarget:0}),ju=Qt(_0),H0=j({},Ml,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=Qt(H0),R0=j({},Ml,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q0=Qt(R0),Y0=j({},Ml,{data:0}),us=Qt(Y0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q0[t])?!!e[t]:!1}function Eu(){return X0}var L0=j({},Ga,{key:function(t){if(t.key){var e=G0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(t){return t.type==="keypress"?Kn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V0=Qt(L0),Z0=j({},Wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cs=Qt(Z0),K0=j({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),J0=Qt(K0),$0=j({},Ml,{propertyName:0,elapsedTime:0,pseudoElement:0}),W0=Qt($0),F0=j({},Wn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),I0=Qt(F0),P0=j({},Ml,{newState:0,oldState:0}),th=Qt(P0),eh=[9,13,27,32],wu=Oe&&"CompositionEvent"in window,Qa=null;Oe&&"documentMode"in document&&(Qa=document.documentMode);var lh=Oe&&"TextEvent"in window&&!Qa,os=Oe&&(!wu||Qa&&8<Qa&&11>=Qa),ss=" ",fs=!1;function rs(t,e){switch(t){case"keyup":return eh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var la=!1;function ah(t,e){switch(t){case"compositionend":return ds(e);case"keypress":return e.which!==32?null:(fs=!0,ss);case"textInput":return t=e.data,t===ss&&fs?null:t;default:return null}}function nh(t,e){if(la)return t==="compositionend"||!wu&&rs(t,e)?(t=as(),Zn=zu=Ie=null,la=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return os&&e.locale!=="ko"?null:e.data;default:return null}}var ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ih[t.type]:e==="textarea"}function ps(t,e,l,a){ta?ea?ea.push(a):ea=[a]:ta=a,e=Yi(e,"onChange"),0<e.length&&(l=new $n("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Xa=null,La=null;function uh(t){Fr(t,0)}function Fn(t){var e=Ra(t);if($o(e))return t}function ms(t,e){if(t==="change")return e}var gs=!1;if(Oe){var Mu;if(Oe){var Du="oninput"in document;if(!Du){var vs=document.createElement("div");vs.setAttribute("oninput","return;"),Du=typeof vs.oninput=="function"}Mu=Du}else Mu=!1;gs=Mu&&(!document.documentMode||9<document.documentMode)}function ys(){Xa&&(Xa.detachEvent("onpropertychange",bs),La=Xa=null)}function bs(t){if(t.propertyName==="value"&&Fn(La)){var e=[];ps(e,La,t,bu(t)),ls(uh,e)}}function ch(t,e,l){t==="focusin"?(ys(),Xa=e,La=l,Xa.attachEvent("onpropertychange",bs)):t==="focusout"&&ys()}function oh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fn(La)}function sh(t,e){if(t==="click")return Fn(e)}function fh(t,e){if(t==="input"||t==="change")return Fn(e)}function rh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:rh;function Va(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!uu.call(e,n)||!Ft(t[n],e[n]))return!1}return!0}function xs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ss(t,e){var l=xs(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=xs(l)}}function zs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function As(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ln(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Ln(t.document)}return e}function Cu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var dh=Oe&&"documentMode"in document&&11>=document.documentMode,aa=null,Ou=null,Za=null,Uu=!1;function Ts(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Uu||aa==null||aa!==Ln(a)||(a=aa,"selectionStart"in a&&Cu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Za&&Va(Za,a)||(Za=a,a=Yi(Ou,"onSelect"),0<a.length&&(e=new $n("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=aa)))}function Dl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var na={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionrun:Dl("Transition","TransitionRun"),transitionstart:Dl("Transition","TransitionStart"),transitioncancel:Dl("Transition","TransitionCancel"),transitionend:Dl("Transition","TransitionEnd")},Bu={},js={};Oe&&(js=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function Cl(t){if(Bu[t])return Bu[t];if(!na[t])return t;var e=na[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in js)return Bu[t]=e[l];return t}var Es=Cl("animationend"),ws=Cl("animationiteration"),Ms=Cl("animationstart"),hh=Cl("transitionrun"),ph=Cl("transitionstart"),mh=Cl("transitioncancel"),Ds=Cl("transitionend"),Cs=new Map,_u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_u.push("scrollEnd");function ye(t,e){Cs.set(t,e),wl(e,[t])}var In=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oe=[],ia=0,Hu=0;function Pn(){for(var t=ia,e=Hu=ia=0;e<t;){var l=oe[e];oe[e++]=null;var a=oe[e];oe[e++]=null;var n=oe[e];oe[e++]=null;var i=oe[e];if(oe[e++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Os(l,n,i)}}function ti(t,e,l,a){oe[ia++]=t,oe[ia++]=e,oe[ia++]=l,oe[ia++]=a,Hu|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Nu(t,e,l,a){return ti(t,e,l,a),ei(t)}function Ol(t,e){return ti(t,null,null,e),ei(t)}function Os(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Wt(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function ei(t){if(50<mn)throw mn=0,Vc=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ua={};function gh(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,e,l,a){return new gh(t,e,l,a)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ue(t,e){var l=t.alternate;return l===null?(l=It(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Us(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function li(t,e,l,a,n,i){var u=0;if(a=t,typeof t=="function")Ru(t)&&(u=1);else if(typeof t=="string")u=Sp(t,l,Ot.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ll:return t=It(31,l,e,n),t.elementType=Ll,t.lanes=i,t;case Z:return Ul(l.children,n,i,e);case At:u=8,n|=24;break;case gt:return t=It(12,l,e,n|2),t.elementType=gt,t.lanes=i,t;case ge:return t=It(13,l,e,n),t.elementType=ge,t.lanes=i,t;case ne:return t=It(19,l,e,n),t.elementType=ne,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rt:u=10;break t;case P:u=9;break t;case Ct:u=11;break t;case we:u=14;break t;case ve:u=16,a=null;break t}u=29,l=Error(f(130,t===null?"null":typeof t,"")),a=null}return e=It(u,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function Ul(t,e,l,a){return t=It(7,t,a,e),t.lanes=l,t}function qu(t,e,l){return t=It(6,t,null,e),t.lanes=l,t}function Bs(t){var e=It(18,null,null,0);return e.stateNode=t,e}function Yu(t,e,l){return e=It(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var _s=new WeakMap;function se(t,e){if(typeof t=="object"&&t!==null){var l=_s.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Bo(e)},_s.set(t,e),e)}return{value:t,source:e,stack:Bo(e)}}var ca=[],oa=0,ai=null,Ka=0,fe=[],re=0,Pe=null,ze=1,Ae="";function Be(t,e){ca[oa++]=Ka,ca[oa++]=ai,ai=t,Ka=e}function Hs(t,e,l){fe[re++]=ze,fe[re++]=Ae,fe[re++]=Pe,Pe=t;var a=ze;t=Ae;var n=32-Wt(a)-1;a&=~(1<<n),l+=1;var i=32-Wt(e)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,ze=1<<32-Wt(e)+n|l<<n|a,Ae=i+t}else ze=1<<i|l<<n|a,Ae=t}function Gu(t){t.return!==null&&(Be(t,1),Hs(t,1,0))}function ku(t){for(;t===ai;)ai=ca[--oa],ca[oa]=null,Ka=ca[--oa],ca[oa]=null;for(;t===Pe;)Pe=fe[--re],fe[re]=null,Ae=fe[--re],fe[re]=null,ze=fe[--re],fe[re]=null}function Ns(t,e){fe[re++]=ze,fe[re++]=Ae,fe[re++]=Pe,ze=e.id,Ae=e.overflow,Pe=t}var Ht=null,pt=null,I=!1,tl=null,de=!1,Qu=Error(f(519));function el(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ja(se(e,t)),Qu}function Rs(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[_t]=t,e[kt]=a,l){case"dialog":J("cancel",e),J("close",e);break;case"iframe":case"object":case"embed":J("load",e);break;case"video":case"audio":for(l=0;l<vn.length;l++)J(vn[l],e);break;case"source":J("error",e);break;case"img":case"image":case"link":J("error",e),J("load",e);break;case"details":J("toggle",e);break;case"input":J("invalid",e),Wo(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":J("invalid",e);break;case"textarea":J("invalid",e),Io(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||ed(e.textContent,l)?(a.popover!=null&&(J("beforetoggle",e),J("toggle",e)),a.onScroll!=null&&J("scroll",e),a.onScrollEnd!=null&&J("scrollend",e),a.onClick!=null&&(e.onclick=Ce),e=!0):e=!1,e||el(t,!0)}function qs(t){for(Ht=t.return;Ht;)switch(Ht.tag){case 5:case 31:case 13:de=!1;return;case 27:case 3:de=!0;return;default:Ht=Ht.return}}function sa(t){if(t!==Ht)return!1;if(!I)return qs(t),I=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||uo(t.type,t.memoizedProps)),l=!l),l&&pt&&el(t),qs(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));pt=fd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));pt=fd(t)}else e===27?(e=pt,ml(t.type)?(t=ro,ro=null,pt=t):pt=e):pt=Ht?pe(t.stateNode.nextSibling):null;return!0}function Bl(){pt=Ht=null,I=!1}function Xu(){var t=tl;return t!==null&&(Zt===null?Zt=t:Zt.push.apply(Zt,t),tl=null),t}function Ja(t){tl===null?tl=[t]:tl.push(t)}var Lu=Yt(null),_l=null,_e=null;function ll(t,e,l){nt(Lu,e._currentValue),e._currentValue=l}function He(t){t._currentValue=Lu.current,yt(Lu)}function Vu(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Zu(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var s=0;s<e.length;s++)if(c.context===e[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Vu(i.return,l,t),a||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(f(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Vu(u,l,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function fa(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(f(387));if(u=u.memoizedProps,u!==null){var c=n.type;Ft(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===_n.current){if(u=n.alternate,u===null)throw Error(f(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(zn):t=[zn])}n=n.return}t!==null&&Zu(e,t,l,a),e.flags|=262144}function ni(t){for(t=t.firstContext;t!==null;){if(!Ft(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Hl(t){_l=t,_e=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nt(t){return Ys(_l,t)}function ii(t,e){return _l===null&&Hl(t),Ys(t,e)}function Ys(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},_e===null){if(t===null)throw Error(f(308));_e=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else _e=_e.next=e;return l}var vh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},yh=d.unstable_scheduleCallback,bh=d.unstable_NormalPriority,Tt={$$typeof:rt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new vh,data:new Map,refCount:0}}function $a(t){t.refCount--,t.refCount===0&&yh(bh,function(){t.controller.abort()})}var Wa=null,Ju=0,ra=0,da=null;function xh(t,e){if(Wa===null){var l=Wa=[];Ju=0,ra=Fc(),da={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ju++,e.then(Gs,Gs),e}function Gs(){if(--Ju===0&&Wa!==null){da!==null&&(da.status="fulfilled");var t=Wa;Wa=null,ra=0,da=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Sh(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var ks=z.S;z.S=function(t,e){jr=Jt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&xh(t,e),ks!==null&&ks(t,e)};var Nl=Yt(null);function $u(){var t=Nl.current;return t!==null?t:ft.pooledCache}function ui(t,e){e===null?nt(Nl,Nl.current):nt(Nl,e.pool)}function Qs(){var t=$u();return t===null?null:{parent:Tt._currentValue,pool:t}}var ha=Error(f(460)),Wu=Error(f(474)),ci=Error(f(542)),oi={then:function(){}};function Xs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ls(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ce,Ce),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zs(t),t;default:if(typeof e.status=="string")e.then(Ce,Ce);else{if(t=ft,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zs(t),t}throw ql=e,ha}}function Rl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ql=l,ha):l}}var ql=null;function Vs(){if(ql===null)throw Error(f(459));var t=ql;return ql=null,t}function Zs(t){if(t===ha||t===ci)throw Error(f(483))}var pa=null,Fa=0;function si(t){var e=Fa;return Fa+=1,pa===null&&(pa=[]),Ls(pa,t,e)}function Ia(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function fi(t,e){throw e.$$typeof===q?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ks(t){function e(h,r){if(t){var p=h.deletions;p===null?(h.deletions=[r],h.flags|=16):p.push(r)}}function l(h,r){if(!t)return null;for(;r!==null;)e(h,r),r=r.sibling;return null}function a(h){for(var r=new Map;h!==null;)h.key!==null?r.set(h.key,h):r.set(h.index,h),h=h.sibling;return r}function n(h,r){return h=Ue(h,r),h.index=0,h.sibling=null,h}function i(h,r,p){return h.index=p,t?(p=h.alternate,p!==null?(p=p.index,p<r?(h.flags|=67108866,r):p):(h.flags|=67108866,r)):(h.flags|=1048576,r)}function u(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function c(h,r,p,S){return r===null||r.tag!==6?(r=qu(p,h.mode,S),r.return=h,r):(r=n(r,p),r.return=h,r)}function s(h,r,p,S){var N=p.type;return N===Z?b(h,r,p.props.children,S,p.key):r!==null&&(r.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ve&&Rl(N)===r.type)?(r=n(r,p.props),Ia(r,p),r.return=h,r):(r=li(p.type,p.key,p.props,null,h.mode,S),Ia(r,p),r.return=h,r)}function m(h,r,p,S){return r===null||r.tag!==4||r.stateNode.containerInfo!==p.containerInfo||r.stateNode.implementation!==p.implementation?(r=Yu(p,h.mode,S),r.return=h,r):(r=n(r,p.children||[]),r.return=h,r)}function b(h,r,p,S,N){return r===null||r.tag!==7?(r=Ul(p,h.mode,S,N),r.return=h,r):(r=n(r,p),r.return=h,r)}function A(h,r,p){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=qu(""+r,h.mode,p),r.return=h,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case $:return p=li(r.type,r.key,r.props,null,h.mode,p),Ia(p,r),p.return=h,p;case Q:return r=Yu(r,h.mode,p),r.return=h,r;case ve:return r=Rl(r),A(h,r,p)}if(Me(r)||ie(r))return r=Ul(r,h.mode,p,null),r.return=h,r;if(typeof r.then=="function")return A(h,si(r),p);if(r.$$typeof===rt)return A(h,ii(h,r),p);fi(h,r)}return null}function v(h,r,p,S){var N=r!==null?r.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return N!==null?null:c(h,r,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $:return p.key===N?s(h,r,p,S):null;case Q:return p.key===N?m(h,r,p,S):null;case ve:return p=Rl(p),v(h,r,p,S)}if(Me(p)||ie(p))return N!==null?null:b(h,r,p,S,null);if(typeof p.then=="function")return v(h,r,si(p),S);if(p.$$typeof===rt)return v(h,r,ii(h,p),S);fi(h,p)}return null}function y(h,r,p,S,N){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return h=h.get(p)||null,c(r,h,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $:return h=h.get(S.key===null?p:S.key)||null,s(r,h,S,N);case Q:return h=h.get(S.key===null?p:S.key)||null,m(r,h,S,N);case ve:return S=Rl(S),y(h,r,p,S,N)}if(Me(S)||ie(S))return h=h.get(p)||null,b(r,h,S,N,null);if(typeof S.then=="function")return y(h,r,p,si(S),N);if(S.$$typeof===rt)return y(h,r,p,ii(r,S),N);fi(r,S)}return null}function O(h,r,p,S){for(var N=null,tt=null,_=r,V=r=0,F=null;_!==null&&V<p.length;V++){_.index>V?(F=_,_=null):F=_.sibling;var et=v(h,_,p[V],S);if(et===null){_===null&&(_=F);break}t&&_&&et.alternate===null&&e(h,_),r=i(et,r,V),tt===null?N=et:tt.sibling=et,tt=et,_=F}if(V===p.length)return l(h,_),I&&Be(h,V),N;if(_===null){for(;V<p.length;V++)_=A(h,p[V],S),_!==null&&(r=i(_,r,V),tt===null?N=_:tt.sibling=_,tt=_);return I&&Be(h,V),N}for(_=a(_);V<p.length;V++)F=y(_,h,V,p[V],S),F!==null&&(t&&F.alternate!==null&&_.delete(F.key===null?V:F.key),r=i(F,r,V),tt===null?N=F:tt.sibling=F,tt=F);return t&&_.forEach(function(xl){return e(h,xl)}),I&&Be(h,V),N}function R(h,r,p,S){if(p==null)throw Error(f(151));for(var N=null,tt=null,_=r,V=r=0,F=null,et=p.next();_!==null&&!et.done;V++,et=p.next()){_.index>V?(F=_,_=null):F=_.sibling;var xl=v(h,_,et.value,S);if(xl===null){_===null&&(_=F);break}t&&_&&xl.alternate===null&&e(h,_),r=i(xl,r,V),tt===null?N=xl:tt.sibling=xl,tt=xl,_=F}if(et.done)return l(h,_),I&&Be(h,V),N;if(_===null){for(;!et.done;V++,et=p.next())et=A(h,et.value,S),et!==null&&(r=i(et,r,V),tt===null?N=et:tt.sibling=et,tt=et);return I&&Be(h,V),N}for(_=a(_);!et.done;V++,et=p.next())et=y(_,h,V,et.value,S),et!==null&&(t&&et.alternate!==null&&_.delete(et.key===null?V:et.key),r=i(et,r,V),tt===null?N=et:tt.sibling=et,tt=et);return t&&_.forEach(function(Up){return e(h,Up)}),I&&Be(h,V),N}function st(h,r,p,S){if(typeof p=="object"&&p!==null&&p.type===Z&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case $:t:{for(var N=p.key;r!==null;){if(r.key===N){if(N=p.type,N===Z){if(r.tag===7){l(h,r.sibling),S=n(r,p.props.children),S.return=h,h=S;break t}}else if(r.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ve&&Rl(N)===r.type){l(h,r.sibling),S=n(r,p.props),Ia(S,p),S.return=h,h=S;break t}l(h,r);break}else e(h,r);r=r.sibling}p.type===Z?(S=Ul(p.props.children,h.mode,S,p.key),S.return=h,h=S):(S=li(p.type,p.key,p.props,null,h.mode,S),Ia(S,p),S.return=h,h=S)}return u(h);case Q:t:{for(N=p.key;r!==null;){if(r.key===N)if(r.tag===4&&r.stateNode.containerInfo===p.containerInfo&&r.stateNode.implementation===p.implementation){l(h,r.sibling),S=n(r,p.children||[]),S.return=h,h=S;break t}else{l(h,r);break}else e(h,r);r=r.sibling}S=Yu(p,h.mode,S),S.return=h,h=S}return u(h);case ve:return p=Rl(p),st(h,r,p,S)}if(Me(p))return O(h,r,p,S);if(ie(p)){if(N=ie(p),typeof N!="function")throw Error(f(150));return p=N.call(p),R(h,r,p,S)}if(typeof p.then=="function")return st(h,r,si(p),S);if(p.$$typeof===rt)return st(h,r,ii(h,p),S);fi(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,r!==null&&r.tag===6?(l(h,r.sibling),S=n(r,p),S.return=h,h=S):(l(h,r),S=qu(p,h.mode,S),S.return=h,h=S),u(h)):l(h,r)}return function(h,r,p,S){try{Fa=0;var N=st(h,r,p,S);return pa=null,N}catch(_){if(_===ha||_===ci)throw _;var tt=It(29,_,null,h.mode);return tt.lanes=S,tt.return=h,tt}finally{}}}var Yl=Ks(!0),Js=Ks(!1),al=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function nl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function il(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(lt&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=ei(t),Os(t,null,l),e}return ti(t,a,e,l),ei(t)}function Pa(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Yo(t,l)}}function Pu(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var tc=!1;function tn(){if(tc){var t=da;if(t!==null)throw t}}function en(t,e,l,a){tc=!1;var n=t.updateQueue;al=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,m=s.next;s.next=null,u===null?i=m:u.next=m,u=s;var b=t.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==u&&(c===null?b.firstBaseUpdate=m:c.next=m,b.lastBaseUpdate=s))}if(i!==null){var A=n.baseState;u=0,b=m=s=null,c=i;do{var v=c.lane&-536870913,y=v!==c.lane;if(y?(W&v)===v:(a&v)===v){v!==0&&v===ra&&(tc=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var O=t,R=c;v=e;var st=l;switch(R.tag){case 1:if(O=R.payload,typeof O=="function"){A=O.call(st,A,v);break t}A=O;break t;case 3:O.flags=O.flags&-65537|128;case 0:if(O=R.payload,v=typeof O=="function"?O.call(st,A,v):O,v==null)break t;A=j({},A,v);break t;case 2:al=!0}}v=c.callback,v!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[v]:y.push(v))}else y={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(m=b=y,s=A):b=b.next=y,u|=v;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);b===null&&(s=A),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),fl|=u,t.lanes=u,t.memoizedState=A}}function $s(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function Ws(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)$s(l[t],e)}var ma=Yt(null),ri=Yt(0);function Fs(t,e){t=Le,nt(ri,t),nt(ma,e),Le=t|e.baseLanes}function ec(){nt(ri,Le),nt(ma,ma.current)}function lc(){Le=ri.current,yt(ma),yt(ri)}var Pt=Yt(null),he=null;function ul(t){var e=t.alternate;nt(St,St.current&1),nt(Pt,t),he===null&&(e===null||ma.current!==null||e.memoizedState!==null)&&(he=t)}function ac(t){nt(St,St.current),nt(Pt,t),he===null&&(he=t)}function Is(t){t.tag===22?(nt(St,St.current),nt(Pt,t),he===null&&(he=t)):cl()}function cl(){nt(St,St.current),nt(Pt,Pt.current)}function te(t){yt(Pt),he===t&&(he=null),yt(St)}var St=Yt(0);function di(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||so(l)||fo(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ne=0,X=null,ct=null,jt=null,hi=!1,ga=!1,Gl=!1,pi=0,ln=0,va=null,zh=0;function bt(){throw Error(f(321))}function nc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Ft(t[l],e[l]))return!1;return!0}function ic(t,e,l,a,n,i){return Ne=i,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?Nf:xc,Gl=!1,i=l(a,n),Gl=!1,ga&&(i=tf(e,l,a,n)),Ps(t),i}function Ps(t){z.H=un;var e=ct!==null&&ct.next!==null;if(Ne=0,jt=ct=X=null,hi=!1,ln=0,va=null,e)throw Error(f(300));t===null||Et||(t=t.dependencies,t!==null&&ni(t)&&(Et=!0))}function tf(t,e,l,a){X=t;var n=0;do{if(ga&&(va=null),ln=0,ga=!1,25<=n)throw Error(f(301));if(n+=1,jt=ct=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Rf,i=e(l,a)}while(ga);return i}function Ah(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?an(e):e,t=t.useState()[0],(ct!==null?ct.memoizedState:null)!==t&&(X.flags|=1024),e}function uc(){var t=pi!==0;return pi=0,t}function cc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function oc(t){if(hi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}hi=!1}Ne=0,jt=ct=X=null,ga=!1,ln=pi=0,va=null}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?X.memoizedState=jt=t:jt=jt.next=t,jt}function zt(){if(ct===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=jt===null?X.memoizedState:jt.next;if(e!==null)jt=e,ct=t;else{if(t===null)throw X.alternate===null?Error(f(467)):Error(f(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},jt===null?X.memoizedState=jt=t:jt=jt.next=t}return jt}function mi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function an(t){var e=ln;return ln+=1,va===null&&(va=[]),t=Ls(va,t,e),e=X,(jt===null?e.memoizedState:jt.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?Nf:xc),t}function gi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return an(t);if(t.$$typeof===rt)return Nt(t)}throw Error(f(438,String(t)))}function sc(t){var e=null,l=X.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=X.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=mi(),X.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Un;return e.index++,l}function Re(t,e){return typeof e=="function"?e(t):e}function vi(t){var e=zt();return fc(e,ct,t)}function fc(t,e,l){var a=t.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,s=null,m=e,b=!1;do{var A=m.lane&-536870913;if(A!==m.lane?(W&A)===A:(Ne&A)===A){var v=m.revertLane;if(v===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),A===ra&&(b=!0);else if((Ne&v)===v){m=m.next,v===ra&&(b=!0);continue}else A={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=A,u=i):s=s.next=A,X.lanes|=v,fl|=v;A=m.action,Gl&&l(i,A),i=m.hasEagerState?m.eagerState:l(i,A)}else v={lane:A,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=v,u=i):s=s.next=v,X.lanes|=A,fl|=A;m=m.next}while(m!==null&&m!==e);if(s===null?u=i:s.next=c,!Ft(i,t.memoizedState)&&(Et=!0,b&&(l=da,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function rc(t){var e=zt(),l=e.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Ft(i,e.memoizedState)||(Et=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function ef(t,e,l){var a=X,n=zt(),i=I;if(i){if(l===void 0)throw Error(f(407));l=l()}else l=e();var u=!Ft((ct||n).memoizedState,l);if(u&&(n.memoizedState=l,Et=!0),n=n.queue,pc(nf.bind(null,a,n,t),[t]),n.getSnapshot!==e||u||jt!==null&&jt.memoizedState.tag&1){if(a.flags|=2048,ya(9,{destroy:void 0},af.bind(null,a,n,l,e),null),ft===null)throw Error(f(349));i||(Ne&127)!==0||lf(a,e,l)}return l}function lf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=X.updateQueue,e===null?(e=mi(),X.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function af(t,e,l,a){e.value=l,e.getSnapshot=a,uf(e)&&cf(t)}function nf(t,e,l){return l(function(){uf(e)&&cf(t)})}function uf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Ft(t,l)}catch{return!0}}function cf(t){var e=Ol(t,2);e!==null&&Kt(e,t,2)}function dc(t){var e=Gt();if(typeof t=="function"){var l=t;if(t=l(),Gl){We(!0);try{l()}finally{We(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:t},e}function of(t,e,l,a){return t.baseState=l,fc(t,ct,typeof a=="function"?a:Re)}function Th(t,e,l,a,n){if(xi(t))throw Error(f(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,sf(e,i)):(i.next=l.next,e.pending=l.next=i)}}function sf(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=z.T,u={};z.T=u;try{var c=l(n,a),s=z.S;s!==null&&s(u,c),ff(t,e,c)}catch(m){hc(t,e,m)}finally{i!==null&&u.types!==null&&(i.types=u.types),z.T=i}}else try{i=l(n,a),ff(t,e,i)}catch(m){hc(t,e,m)}}function ff(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){rf(t,e,a)},function(a){return hc(t,e,a)}):rf(t,e,l)}function rf(t,e,l){e.status="fulfilled",e.value=l,df(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,sf(t,l)))}function hc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,df(e),e=e.next;while(e!==a)}t.action=null}function df(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function hf(t,e){return e}function pf(t,e){if(I){var l=ft.formState;if(l!==null){t:{var a=X;if(I){if(pt){e:{for(var n=pt,i=de;n.nodeType!==8;){if(!i){n=null;break e}if(n=pe(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){pt=pe(n.nextSibling),a=n.data==="F!";break t}}el(a)}a=!1}a&&(e=l[0])}}return l=Gt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hf,lastRenderedState:e},l.queue=a,l=Bf.bind(null,X,a),a.dispatch=l,a=dc(!1),i=bc.bind(null,X,!1,a.queue),a=Gt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Th.bind(null,X,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function mf(t){var e=zt();return gf(e,ct,t)}function gf(t,e,l){if(e=fc(t,e,hf)[0],t=vi(Re)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=an(e)}catch(u){throw u===ha?ci:u}else a=e;e=zt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(X.flags|=2048,ya(9,{destroy:void 0},jh.bind(null,n,l),null)),[a,i,t]}function jh(t,e){t.action=e}function vf(t){var e=zt(),l=ct;if(l!==null)return gf(e,l,t);zt(),e=e.memoizedState,l=zt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ya(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=X.updateQueue,e===null&&(e=mi(),X.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function yf(){return zt().memoizedState}function yi(t,e,l,a){var n=Gt();X.flags|=t,n.memoizedState=ya(1|e,{destroy:void 0},l,a===void 0?null:a)}function bi(t,e,l,a){var n=zt();a=a===void 0?null:a;var i=n.memoizedState.inst;ct!==null&&a!==null&&nc(a,ct.memoizedState.deps)?n.memoizedState=ya(e,i,l,a):(X.flags|=t,n.memoizedState=ya(1|e,i,l,a))}function bf(t,e){yi(8390656,8,t,e)}function pc(t,e){bi(2048,8,t,e)}function Eh(t){X.flags|=4;var e=X.updateQueue;if(e===null)e=mi(),X.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function xf(t){var e=zt().memoizedState;return Eh({ref:e,nextImpl:t}),function(){if((lt&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function Sf(t,e){return bi(4,2,t,e)}function zf(t,e){return bi(4,4,t,e)}function Af(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tf(t,e,l){l=l!=null?l.concat([t]):null,bi(4,4,Af.bind(null,e,t),l)}function mc(){}function jf(t,e){var l=zt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&nc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Ef(t,e){var l=zt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&nc(e,a[1]))return a[0];if(a=t(),Gl){We(!0);try{t()}finally{We(!1)}}return l.memoizedState=[a,e],a}function gc(t,e,l){return l===void 0||(Ne&1073741824)!==0&&(W&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=wr(),X.lanes|=t,fl|=t,l)}function wf(t,e,l,a){return Ft(l,e)?l:ma.current!==null?(t=gc(t,l,a),Ft(t,e)||(Et=!0),t):(Ne&42)===0||(Ne&1073741824)!==0&&(W&261930)===0?(Et=!0,t.memoizedState=l):(t=wr(),X.lanes|=t,fl|=t,e)}function Mf(t,e,l,a,n){var i=C.p;C.p=i!==0&&8>i?i:8;var u=z.T,c={};z.T=c,bc(t,!1,e,l);try{var s=n(),m=z.S;if(m!==null&&m(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var b=Sh(s,a);nn(t,e,b,ae(t))}else nn(t,e,a,ae(t))}catch(A){nn(t,e,{then:function(){},status:"rejected",reason:A},ae())}finally{C.p=i,u!==null&&c.types!==null&&(u.types=c.types),z.T=u}}function wh(){}function vc(t,e,l,a){if(t.tag!==5)throw Error(f(476));var n=Df(t).queue;Mf(t,n,e,G,l===null?wh:function(){return Cf(t),l(a)})}function Df(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:G},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Cf(t){var e=Df(t);e.next===null&&(e=t.alternate.memoizedState),nn(t,e.next.queue,{},ae())}function yc(){return Nt(zn)}function Of(){return zt().memoizedState}function Uf(){return zt().memoizedState}function Mh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ae();t=nl(l);var a=il(e,t,l);a!==null&&(Kt(a,e,l),Pa(a,e,l)),e={cache:Ku()},t.payload=e;return}e=e.return}}function Dh(t,e,l){var a=ae();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},xi(t)?_f(e,l):(l=Nu(t,e,l,a),l!==null&&(Kt(l,t,a),Hf(l,e,a)))}function Bf(t,e,l){var a=ae();nn(t,e,l,a)}function nn(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(xi(t))_f(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,Ft(c,u))return ti(t,e,n,0),ft===null&&Pn(),!1}catch{}finally{}if(l=Nu(t,e,n,a),l!==null)return Kt(l,t,a),Hf(l,e,a),!0}return!1}function bc(t,e,l,a){if(a={lane:2,revertLane:Fc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xi(t)){if(e)throw Error(f(479))}else e=Nu(t,l,a,2),e!==null&&Kt(e,t,2)}function xi(t){var e=t.alternate;return t===X||e!==null&&e===X}function _f(t,e){ga=hi=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Hf(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Yo(t,l)}}var un={readContext:Nt,use:gi,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt};un.useEffectEvent=bt;var Nf={readContext:Nt,use:gi,useCallback:function(t,e){return Gt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:bf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,yi(4194308,4,Af.bind(null,e,t),l)},useLayoutEffect:function(t,e){return yi(4194308,4,t,e)},useInsertionEffect:function(t,e){yi(4,2,t,e)},useMemo:function(t,e){var l=Gt();e=e===void 0?null:e;var a=t();if(Gl){We(!0);try{t()}finally{We(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Gt();if(l!==void 0){var n=l(e);if(Gl){We(!0);try{l(e)}finally{We(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=Dh.bind(null,X,t),[a.memoizedState,t]},useRef:function(t){var e=Gt();return t={current:t},e.memoizedState=t},useState:function(t){t=dc(t);var e=t.queue,l=Bf.bind(null,X,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:mc,useDeferredValue:function(t,e){var l=Gt();return gc(l,t,e)},useTransition:function(){var t=dc(!1);return t=Mf.bind(null,X,t.queue,!0,!1),Gt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=X,n=Gt();if(I){if(l===void 0)throw Error(f(407));l=l()}else{if(l=e(),ft===null)throw Error(f(349));(W&127)!==0||lf(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,bf(nf.bind(null,a,i,t),[t]),a.flags|=2048,ya(9,{destroy:void 0},af.bind(null,a,i,l,e),null),l},useId:function(){var t=Gt(),e=ft.identifierPrefix;if(I){var l=Ae,a=ze;l=(a&~(1<<32-Wt(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=pi++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=zh++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:yc,useFormState:pf,useActionState:pf,useOptimistic:function(t){var e=Gt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=bc.bind(null,X,!0,l),l.dispatch=e,[t,e]},useMemoCache:sc,useCacheRefresh:function(){return Gt().memoizedState=Mh.bind(null,X)},useEffectEvent:function(t){var e=Gt(),l={impl:t};return e.memoizedState=l,function(){if((lt&2)!==0)throw Error(f(440));return l.impl.apply(void 0,arguments)}}},xc={readContext:Nt,use:gi,useCallback:jf,useContext:Nt,useEffect:pc,useImperativeHandle:Tf,useInsertionEffect:Sf,useLayoutEffect:zf,useMemo:Ef,useReducer:vi,useRef:yf,useState:function(){return vi(Re)},useDebugValue:mc,useDeferredValue:function(t,e){var l=zt();return wf(l,ct.memoizedState,t,e)},useTransition:function(){var t=vi(Re)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:an(t),e]},useSyncExternalStore:ef,useId:Of,useHostTransitionStatus:yc,useFormState:mf,useActionState:mf,useOptimistic:function(t,e){var l=zt();return of(l,ct,t,e)},useMemoCache:sc,useCacheRefresh:Uf};xc.useEffectEvent=xf;var Rf={readContext:Nt,use:gi,useCallback:jf,useContext:Nt,useEffect:pc,useImperativeHandle:Tf,useInsertionEffect:Sf,useLayoutEffect:zf,useMemo:Ef,useReducer:rc,useRef:yf,useState:function(){return rc(Re)},useDebugValue:mc,useDeferredValue:function(t,e){var l=zt();return ct===null?gc(l,t,e):wf(l,ct.memoizedState,t,e)},useTransition:function(){var t=rc(Re)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:an(t),e]},useSyncExternalStore:ef,useId:Of,useHostTransitionStatus:yc,useFormState:vf,useActionState:vf,useOptimistic:function(t,e){var l=zt();return ct!==null?of(l,ct,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:sc,useCacheRefresh:Uf};Rf.useEffectEvent=xf;function Sc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:j({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var zc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ae(),n=nl(a);n.payload=e,l!=null&&(n.callback=l),e=il(t,n,a),e!==null&&(Kt(e,t,a),Pa(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ae(),n=nl(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=il(t,n,a),e!==null&&(Kt(e,t,a),Pa(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ae(),a=nl(l);a.tag=2,e!=null&&(a.callback=e),e=il(t,a,l),e!==null&&(Kt(e,t,l),Pa(e,t,l))}};function qf(t,e,l,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):e.prototype&&e.prototype.isPureReactComponent?!Va(l,a)||!Va(n,i):!0}function Yf(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&zc.enqueueReplaceState(e,e.state,null)}function kl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=j({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Gf(t){In(t)}function kf(t){console.error(t)}function Qf(t){In(t)}function Si(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Xf(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ac(t,e,l){return l=nl(l),l.tag=3,l.payload={element:null},l.callback=function(){Si(t,e)},l}function Lf(t){return t=nl(t),t.tag=3,t}function Vf(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Xf(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Xf(e,l,a),typeof n!="function"&&(rl===null?rl=new Set([this]):rl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Ch(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&fa(e,l,n,!0),l=Pt.current,l!==null){switch(l.tag){case 31:case 13:return he===null?Bi():l.alternate===null&&xt===0&&(xt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===oi?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Jc(t,a,n)),!1;case 22:return l.flags|=65536,a===oi?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Jc(t,a,n)),!1}throw Error(f(435,l.tag))}return Jc(t,a,n),Bi(),!1}if(I)return e=Pt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Qu&&(t=Error(f(422),{cause:a}),Ja(se(t,l)))):(a!==Qu&&(e=Error(f(423),{cause:a}),Ja(se(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=se(a,l),n=Ac(t.stateNode,a,n),Pu(t,n),xt!==4&&(xt=2)),!1;var i=Error(f(520),{cause:a});if(i=se(i,l),pn===null?pn=[i]:pn.push(i),xt!==4&&(xt=2),e===null)return!0;a=se(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=Ac(l.stateNode,a,t),Pu(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(rl===null||!rl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Lf(n),Vf(n,t,l,a),Pu(l,n),!1}l=l.return}while(l!==null);return!1}var Tc=Error(f(461)),Et=!1;function Rt(t,e,l,a){e.child=t===null?Js(e,null,l,a):Yl(e,t.child,l,a)}function Zf(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return Hl(e),a=ic(t,e,l,u,i,n),c=uc(),t!==null&&!Et?(cc(t,e,n),qe(t,e,n)):(I&&c&&Gu(e),e.flags|=1,Rt(t,e,a,n),e.child)}function Kf(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Ru(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Jf(t,e,i,a,n)):(t=li(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Uc(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Va,l(u,a)&&t.ref===e.ref)return qe(t,e,n)}return e.flags|=1,t=Ue(i,a),t.ref=e.ref,t.return=e,e.child=t}function Jf(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Va(i,a)&&t.ref===e.ref)if(Et=!1,e.pendingProps=a=i,Uc(t,n))(t.flags&131072)!==0&&(Et=!0);else return e.lanes=t.lanes,qe(t,e,n)}return jc(t,e,l,a,n)}function $f(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return Wf(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ui(e,i!==null?i.cachePool:null),i!==null?Fs(e,i):ec(),Is(e);else return a=e.lanes=536870912,Wf(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(ui(e,i.cachePool),Fs(e,i),cl(),e.memoizedState=null):(t!==null&&ui(e,null),ec(),cl());return Rt(t,e,n,l),e.child}function cn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Wf(t,e,l,a,n){var i=$u();return i=i===null?null:{parent:Tt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&ui(e,null),ec(),Is(e),t!==null&&fa(t,e,a,!0),e.childLanes=n,null}function zi(t,e){return e=Ti({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Ff(t,e,l){return Yl(e,t.child,null,l),t=zi(e,e.pendingProps),t.flags|=2,te(e),e.memoizedState=null,t}function Oh(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(I){if(a.mode==="hidden")return t=zi(e,a),e.lanes=536870912,cn(null,t);if(ac(e),(t=pt)?(t=sd(t,de),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Pe!==null?{id:ze,overflow:Ae}:null,retryLane:536870912,hydrationErrors:null},l=Bs(t),l.return=e,e.child=l,Ht=e,pt=null)):t=null,t===null)throw el(e);return e.lanes=536870912,null}return zi(e,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(ac(e),n)if(e.flags&256)e.flags&=-257,e=Ff(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(Et||fa(t,e,l,!1),n=(l&t.childLanes)!==0,Et||n){if(a=ft,a!==null&&(u=Go(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ol(t,u),Kt(a,t,u),Tc;Bi(),e=Ff(t,e,l)}else t=i.treeContext,pt=pe(u.nextSibling),Ht=e,I=!0,tl=null,de=!1,t!==null&&Ns(e,t),e=zi(e,a),e.flags|=4096;return e}return t=Ue(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ai(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(f(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function jc(t,e,l,a,n){return Hl(e),l=ic(t,e,l,a,void 0,n),a=uc(),t!==null&&!Et?(cc(t,e,n),qe(t,e,n)):(I&&a&&Gu(e),e.flags|=1,Rt(t,e,l,n),e.child)}function If(t,e,l,a,n,i){return Hl(e),e.updateQueue=null,l=tf(e,a,l,n),Ps(t),a=uc(),t!==null&&!Et?(cc(t,e,i),qe(t,e,i)):(I&&a&&Gu(e),e.flags|=1,Rt(t,e,l,i),e.child)}function Pf(t,e,l,a,n){if(Hl(e),e.stateNode===null){var i=ua,u=l.contextType;typeof u=="object"&&u!==null&&(i=Nt(u)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Fu(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?Nt(u):ua,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Sc(e,l,u,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&zc.enqueueReplaceState(i,i.state,null),en(e,a,i,n),tn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,s=kl(l,c);i.props=s;var m=i.context,b=l.contextType;u=ua,typeof b=="object"&&b!==null&&(u=Nt(b));var A=l.getDerivedStateFromProps;b=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||m!==u)&&Yf(e,i,a,u),al=!1;var v=e.memoizedState;i.state=v,en(e,a,i,n),tn(),m=e.memoizedState,c||v!==m||al?(typeof A=="function"&&(Sc(e,l,A,a),m=e.memoizedState),(s=al||qf(e,l,s,a,v,m,u))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=m),i.props=a,i.state=m,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Iu(t,e),u=e.memoizedProps,b=kl(l,u),i.props=b,A=e.pendingProps,v=i.context,m=l.contextType,s=ua,typeof m=="object"&&m!==null&&(s=Nt(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||v!==s)&&Yf(e,i,a,s),al=!1,v=e.memoizedState,i.state=v,en(e,a,i,n),tn();var y=e.memoizedState;u!==A||v!==y||al||t!==null&&t.dependencies!==null&&ni(t.dependencies)?(typeof c=="function"&&(Sc(e,l,c,a),y=e.memoizedState),(b=al||qf(e,l,b,a,v,y,s)||t!==null&&t.dependencies!==null&&ni(t.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=y),i.props=a,i.state=y,i.context=s,a=b):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Ai(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Yl(e,t.child,null,n),e.child=Yl(e,null,l,n)):Rt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=qe(t,e,n),t}function tr(t,e,l,a){return Bl(),e.flags|=256,Rt(t,e,l,a),e.child}var Ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(t){return{baseLanes:t,cachePool:Qs()}}function Mc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=le),t}function er(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(I){if(n?ul(e):cl(),(t=pt)?(t=sd(t,de),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Pe!==null?{id:ze,overflow:Ae}:null,retryLane:536870912,hydrationErrors:null},l=Bs(t),l.return=e,e.child=l,Ht=e,pt=null)):t=null,t===null)throw el(e);return fo(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(cl(),n=e.mode,c=Ti({mode:"hidden",children:c},n),a=Ul(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=wc(l),a.childLanes=Mc(t,u,l),e.memoizedState=Ec,cn(null,a)):(ul(e),Dc(e,c))}var s=t.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)e.flags&256?(ul(e),e.flags&=-257,e=Cc(t,e,l)):e.memoizedState!==null?(cl(),e.child=t.child,e.flags|=128,e=null):(cl(),c=a.fallback,n=e.mode,a=Ti({mode:"visible",children:a.children},n),c=Ul(c,n,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,Yl(e,t.child,null,l),a=e.child,a.memoizedState=wc(l),a.childLanes=Mc(t,u,l),e.memoizedState=Ec,e=cn(null,a));else if(ul(e),fo(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var m=u.dgst;u=m,a=Error(f(419)),a.stack="",a.digest=u,Ja({value:a,source:null,stack:null}),e=Cc(t,e,l)}else if(Et||fa(t,e,l,!1),u=(l&t.childLanes)!==0,Et||u){if(u=ft,u!==null&&(a=Go(u,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ol(t,a),Kt(u,t,a),Tc;so(c)||Bi(),e=Cc(t,e,l)}else so(c)?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,pt=pe(c.nextSibling),Ht=e,I=!0,tl=null,de=!1,t!==null&&Ns(e,t),e=Dc(e,a.children),e.flags|=4096);return e}return n?(cl(),c=a.fallback,n=e.mode,s=t.child,m=s.sibling,a=Ue(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,m!==null?c=Ue(m,c):(c=Ul(c,n,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,cn(null,a),a=e.child,c=t.child.memoizedState,c===null?c=wc(l):(n=c.cachePool,n!==null?(s=Tt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Qs(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=Mc(t,u,l),e.memoizedState=Ec,cn(t.child,a)):(ul(e),l=t.child,t=l.sibling,l=Ue(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function Dc(t,e){return e=Ti({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ti(t,e){return t=It(22,t,null,e),t.lanes=0,t}function Cc(t,e,l){return Yl(e,t.child,null,l),t=Dc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lr(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Vu(t.return,e,l)}function Oc(t,e,l,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function ar(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=St.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,nt(St,u),Rt(t,e,a,l),a=I?Ka:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lr(t,l,e);else if(t.tag===19)lr(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&di(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),Oc(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&di(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}Oc(e,!0,l,null,i,a);break;case"together":Oc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function qe(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),fl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(fa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,l=Ue(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ue(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Uc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ni(t)))}function Uh(t,e,l){switch(e.tag){case 3:Hn(e,e.stateNode.containerInfo),ll(e,Tt,t.memoizedState.cache),Bl();break;case 27:case 5:lu(e);break;case 4:Hn(e,e.stateNode.containerInfo);break;case 10:ll(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ac(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(ul(e),e.flags|=128,null):(l&e.child.childLanes)!==0?er(t,e,l):(ul(e),t=qe(t,e,l),t!==null?t.sibling:null);ul(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(fa(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return ar(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),nt(St,St.current),a)break;return null;case 22:return e.lanes=0,$f(t,e,l,e.pendingProps);case 24:ll(e,Tt,t.memoizedState.cache)}return qe(t,e,l)}function nr(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Et=!0;else{if(!Uc(t,l)&&(e.flags&128)===0)return Et=!1,Uh(t,e,l);Et=(t.flags&131072)!==0}else Et=!1,I&&(e.flags&1048576)!==0&&Hs(e,Ka,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Rl(e.elementType),e.type=t,typeof t=="function")Ru(t)?(a=kl(t,a),e.tag=1,e=Pf(null,e,t,a,l)):(e.tag=0,e=jc(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===Ct){e.tag=11,e=Zf(null,e,t,a,l);break t}else if(n===we){e.tag=14,e=Kf(null,e,t,a,l);break t}}throw e=Ua(t)||t,Error(f(306,e,""))}}return e;case 0:return jc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=kl(a,e.pendingProps),Pf(t,e,a,n,l);case 3:t:{if(Hn(e,e.stateNode.containerInfo),t===null)throw Error(f(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,Iu(t,e),en(e,a,null,l);var u=e.memoizedState;if(a=u.cache,ll(e,Tt,a),a!==i.cache&&Zu(e,[Tt],l,!0),tn(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=tr(t,e,a,l);break t}else if(a!==n){n=se(Error(f(424)),e),Ja(n),e=tr(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(pt=pe(t.firstChild),Ht=e,I=!0,tl=null,de=!0,l=Js(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Bl(),a===n){e=qe(t,e,l);break t}Rt(t,e,a,l)}e=e.child}return e;case 26:return Ai(t,e),t===null?(l=md(e.type,null,e.pendingProps,null))?e.memoizedState=l:I||(l=e.type,t=e.pendingProps,a=Gi($e.current).createElement(l),a[_t]=e,a[kt]=t,qt(a,l,t),Ut(a),e.stateNode=a):e.memoizedState=md(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return lu(e),t===null&&I&&(a=e.stateNode=dd(e.type,e.pendingProps,$e.current),Ht=e,de=!0,n=pt,ml(e.type)?(ro=n,pt=pe(a.firstChild)):pt=n),Rt(t,e,e.pendingProps.children,l),Ai(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&I&&((n=a=pt)&&(a=op(a,e.type,e.pendingProps,de),a!==null?(e.stateNode=a,Ht=e,pt=pe(a.firstChild),de=!1,n=!0):n=!1),n||el(e)),lu(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,uo(n,i)?a=null:u!==null&&uo(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=ic(t,e,Ah,null,null,l),zn._currentValue=n),Ai(t,e),Rt(t,e,a,l),e.child;case 6:return t===null&&I&&((t=l=pt)&&(l=sp(l,e.pendingProps,de),l!==null?(e.stateNode=l,Ht=e,pt=null,t=!0):t=!1),t||el(e)),null;case 13:return er(t,e,l);case 4:return Hn(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Yl(e,null,a,l):Rt(t,e,a,l),e.child;case 11:return Zf(t,e,e.type,e.pendingProps,l);case 7:return Rt(t,e,e.pendingProps,l),e.child;case 8:return Rt(t,e,e.pendingProps.children,l),e.child;case 12:return Rt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,ll(e,e.type,a.value),Rt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Hl(e),n=Nt(n),a=a(n),e.flags|=1,Rt(t,e,a,l),e.child;case 14:return Kf(t,e,e.type,e.pendingProps,l);case 15:return Jf(t,e,e.type,e.pendingProps,l);case 19:return ar(t,e,l);case 31:return Oh(t,e,l);case 22:return $f(t,e,l,e.pendingProps);case 24:return Hl(e),a=Nt(Tt),t===null?(n=$u(),n===null&&(n=ft,i=Ku(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Fu(e),ll(e,Tt,n)):((t.lanes&l)!==0&&(Iu(t,e),en(e,null,null,l),tn()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ll(e,Tt,a)):(a=i.cache,ll(e,Tt,a),a!==n.cache&&Zu(e,[Tt],l,!0))),Rt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Ye(t){t.flags|=4}function Bc(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Or())t.flags|=8192;else throw ql=oi,Wu}else t.flags&=-16777217}function ir(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xd(e))if(Or())t.flags|=8192;else throw ql=oi,Wu}function ji(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ro():536870912,t.lanes|=e,za|=e)}function on(t,e){if(!I)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Bh(t,e,l){var a=e.pendingProps;switch(ku(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),He(Tt),Zl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(sa(e)?Ye(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Xu())),mt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Ye(e),i!==null?(mt(e),ir(e,i)):(mt(e),Bc(e,n,null,a,l))):i?i!==t.memoizedState?(Ye(e),mt(e),ir(e,i)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ye(e),mt(e),Bc(e,n,t,a,l)),null;case 27:if(Nn(e),l=$e.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(!a){if(e.stateNode===null)throw Error(f(166));return mt(e),null}t=Ot.current,sa(e)?Rs(e):(t=dd(n,a,l),e.stateNode=t,Ye(e))}return mt(e),null;case 5:if(Nn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(!a){if(e.stateNode===null)throw Error(f(166));return mt(e),null}if(i=Ot.current,sa(e))Rs(e);else{var u=Gi($e.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[_t]=e,i[kt]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(qt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ye(e)}}return mt(e),Bc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(f(166));if(t=$e.current,sa(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Ht,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[_t]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||ed(t.nodeValue,l)),t||el(e,!0)}else t=Gi(t).createTextNode(a),t[_t]=e,e.stateNode=t}return mt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=sa(e),l!==null){if(t===null){if(!a)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[_t]=e}else Bl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else l=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(te(e),e):(te(e),null);if((e.flags&128)!==0)throw Error(f(558))}return mt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=sa(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(f(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[_t]=e}else Bl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),n=!1}else n=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(te(e),e):(te(e),null)}return te(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),ji(e,e.updateQueue),mt(e),null);case 4:return Zl(),t===null&&eo(e.stateNode.containerInfo),mt(e),null;case 10:return He(e.type),mt(e),null;case 19:if(yt(St),a=e.memoizedState,a===null)return mt(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)on(a,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=di(t),i!==null){for(e.flags|=128,on(a,!1),t=i.updateQueue,e.updateQueue=t,ji(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Us(l,t),l=l.sibling;return nt(St,St.current&1|2),I&&Be(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Jt()>Ci&&(e.flags|=128,n=!0,on(a,!1),e.lanes=4194304)}else{if(!n)if(t=di(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,ji(e,t),on(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!I)return mt(e),null}else 2*Jt()-a.renderingStartTime>Ci&&l!==536870912&&(e.flags|=128,n=!0,on(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Jt(),t.sibling=null,l=St.current,nt(St,n?l&1|2:l&1),I&&Be(e,a.treeForkCount),t):(mt(e),null);case 22:case 23:return te(e),lc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),l=e.updateQueue,l!==null&&ji(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&yt(Nl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),He(Tt),mt(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function _h(t,e){switch(ku(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return He(Tt),Zl(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Nn(e),null;case 31:if(e.memoizedState!==null){if(te(e),e.alternate===null)throw Error(f(340));Bl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(te(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Bl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(St),null;case 4:return Zl(),null;case 10:return He(e.type),null;case 22:case 23:return te(e),lc(),t!==null&&yt(Nl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return He(Tt),null;case 25:return null;default:return null}}function ur(t,e){switch(ku(e),e.tag){case 3:He(Tt),Zl();break;case 26:case 27:case 5:Nn(e);break;case 4:Zl();break;case 31:e.memoizedState!==null&&te(e);break;case 13:te(e);break;case 19:yt(St);break;case 10:He(e.type);break;case 22:case 23:te(e),lc(),t!==null&&yt(Nl);break;case 24:He(Tt)}}function sn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){ut(e,e.return,c)}}function ol(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var s=l,m=c;try{m()}catch(b){ut(n,s,b)}}}a=a.next}while(a!==i)}}catch(b){ut(e,e.return,b)}}function cr(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Ws(e,l)}catch(a){ut(t,t.return,a)}}}function or(t,e,l){l.props=kl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){ut(t,e,a)}}function fn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){ut(t,e,n)}}function Te(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ut(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ut(t,e,n)}else l.current=null}function sr(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ut(t,t.return,n)}}function _c(t,e,l){try{var a=t.stateNode;lp(a,t.type,l,e),a[kt]=e}catch(n){ut(t,t.return,n)}}function fr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ml(t.type)||t.tag===4}function Hc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||fr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ml(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ce));else if(a!==4&&(a===27&&ml(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Nc(t,e,l),t=t.sibling;t!==null;)Nc(t,e,l),t=t.sibling}function Ei(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&ml(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Ei(t,e,l),t=t.sibling;t!==null;)Ei(t,e,l),t=t.sibling}function rr(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qt(e,a,l),e[_t]=t,e[kt]=l}catch(i){ut(t,t.return,i)}}var Ge=!1,wt=!1,Rc=!1,dr=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function Hh(t,e){if(t=t.containerInfo,no=Ki,t=As(t),Cu(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var u=0,c=-1,s=-1,m=0,b=0,A=t,v=null;e:for(;;){for(var y;A!==l||n!==0&&A.nodeType!==3||(c=u+n),A!==i||a!==0&&A.nodeType!==3||(s=u+a),A.nodeType===3&&(u+=A.nodeValue.length),(y=A.firstChild)!==null;)v=A,A=y;for(;;){if(A===t)break e;if(v===l&&++m===n&&(c=u),v===i&&++b===a&&(s=u),(y=A.nextSibling)!==null)break;A=v,v=A.parentNode}A=y}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(io={focusedElem:t,selectionRange:l},Ki=!1,Bt=e;Bt!==null;)if(e=Bt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Bt=t;else for(;Bt!==null;){switch(e=Bt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var O=kl(l.type,n);t=a.getSnapshotBeforeUpdate(O,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(R){ut(l,l.return,R)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)oo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":oo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,Bt=t;break}Bt=e.return}}function hr(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Qe(t,l),a&4&&sn(5,l);break;case 1:if(Qe(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){ut(l,l.return,u)}else{var n=kl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){ut(l,l.return,u)}}a&64&&cr(l),a&512&&fn(l,l.return);break;case 3:if(Qe(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Ws(t,e)}catch(u){ut(l,l.return,u)}}break;case 27:e===null&&a&4&&rr(l);case 26:case 5:Qe(t,l),e===null&&a&4&&sr(l),a&512&&fn(l,l.return);break;case 12:Qe(t,l);break;case 31:Qe(t,l),a&4&&gr(t,l);break;case 13:Qe(t,l),a&4&&vr(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=Lh.bind(null,l),fp(t,l))));break;case 22:if(a=l.memoizedState!==null||Ge,!a){e=e!==null&&e.memoizedState!==null||wt,n=Ge;var i=wt;Ge=a,(wt=e)&&!i?Xe(t,l,(l.subtreeFlags&8772)!==0):Qe(t,l),Ge=n,wt=i}break;case 30:break;default:Qe(t,l)}}function pr(t){var e=t.alternate;e!==null&&(t.alternate=null,pr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&hu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vt=null,Xt=!1;function ke(t,e,l){for(l=l.child;l!==null;)mr(t,e,l),l=l.sibling}function mr(t,e,l){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Ba,l)}catch{}switch(l.tag){case 26:wt||Te(l,e),ke(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:wt||Te(l,e);var a=vt,n=Xt;ml(l.type)&&(vt=l.stateNode,Xt=!1),ke(t,e,l),bn(l.stateNode),vt=a,Xt=n;break;case 5:wt||Te(l,e);case 6:if(a=vt,n=Xt,vt=null,ke(t,e,l),vt=a,Xt=n,vt!==null)if(Xt)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(l.stateNode)}catch(i){ut(l,e,i)}else try{vt.removeChild(l.stateNode)}catch(i){ut(l,e,i)}break;case 18:vt!==null&&(Xt?(t=vt,cd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Ca(t)):cd(vt,l.stateNode));break;case 4:a=vt,n=Xt,vt=l.stateNode.containerInfo,Xt=!0,ke(t,e,l),vt=a,Xt=n;break;case 0:case 11:case 14:case 15:ol(2,l,e),wt||ol(4,l,e),ke(t,e,l);break;case 1:wt||(Te(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&or(l,e,a)),ke(t,e,l);break;case 21:ke(t,e,l);break;case 22:wt=(a=wt)||l.memoizedState!==null,ke(t,e,l),wt=a;break;default:ke(t,e,l)}}function gr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ca(t)}catch(l){ut(e,e.return,l)}}}function vr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ca(t)}catch(l){ut(e,e.return,l)}}function Nh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new dr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new dr),e;default:throw Error(f(435,t.tag))}}function wi(t,e){var l=Nh(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=Vh.bind(null,t,a);a.then(n,n)}})}function Lt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(ml(c.type)){vt=c.stateNode,Xt=!1;break t}break;case 5:vt=c.stateNode,Xt=!1;break t;case 3:case 4:vt=c.stateNode.containerInfo,Xt=!0;break t}c=c.return}if(vt===null)throw Error(f(160));mr(i,u,n),vt=null,Xt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)yr(e,t),e=e.sibling}var be=null;function yr(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Lt(e,t),Vt(t),a&4&&(ol(3,t,t.return),sn(3,t),ol(5,t,t.return));break;case 1:Lt(e,t),Vt(t),a&512&&(wt||l===null||Te(l,l.return)),a&64&&Ge&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=be;if(Lt(e,t),Vt(t),a&512&&(wt||l===null||Te(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Na]||i[_t]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),qt(i,a,l),i[_t]=t,Ut(i),a=i;break t;case"link":var u=yd("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break e}}i=n.createElement(a),qt(i,a,l),n.head.appendChild(i);break;case"meta":if(u=yd("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break e}}i=n.createElement(a),qt(i,a,l),n.head.appendChild(i);break;default:throw Error(f(468,a))}i[_t]=t,Ut(i),a=i}t.stateNode=a}else bd(n,t.type,t.stateNode);else t.stateNode=vd(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?bd(n,t.type,t.stateNode):vd(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&_c(t,t.memoizedProps,l.memoizedProps)}break;case 27:Lt(e,t),Vt(t),a&512&&(wt||l===null||Te(l,l.return)),l!==null&&a&4&&_c(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Lt(e,t),Vt(t),a&512&&(wt||l===null||Te(l,l.return)),t.flags&32){n=t.stateNode;try{Pl(n,"")}catch(O){ut(t,t.return,O)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,_c(t,n,l!==null?l.memoizedProps:n)),a&1024&&(Rc=!0);break;case 6:if(Lt(e,t),Vt(t),a&4){if(t.stateNode===null)throw Error(f(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(O){ut(t,t.return,O)}}break;case 3:if(Xi=null,n=be,be=ki(e.containerInfo),Lt(e,t),be=n,Vt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ca(e.containerInfo)}catch(O){ut(t,t.return,O)}Rc&&(Rc=!1,br(t));break;case 4:a=be,be=ki(t.stateNode.containerInfo),Lt(e,t),Vt(t),be=a;break;case 12:Lt(e,t),Vt(t);break;case 31:Lt(e,t),Vt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wi(t,a)));break;case 13:Lt(e,t),Vt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Di=Jt()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wi(t,a)));break;case 22:n=t.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,m=Ge,b=wt;if(Ge=m||n,wt=b||s,Lt(e,t),wt=b,Ge=m,Vt(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||s||Ge||wt||Ql(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){s=l=e;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var A=s.memoizedProps.style,v=A!=null&&A.hasOwnProperty("display")?A.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(O){ut(s,s.return,O)}}}else if(e.tag===6){if(l===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(O){ut(s,s.return,O)}}}else if(e.tag===18){if(l===null){s=e;try{var y=s.stateNode;n?od(y,!0):od(s.stateNode,!1)}catch(O){ut(s,s.return,O)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,wi(t,l))));break;case 19:Lt(e,t),Vt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wi(t,a)));break;case 30:break;case 21:break;default:Lt(e,t),Vt(t)}}function Vt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(fr(a)){l=a;break}a=a.return}if(l==null)throw Error(f(160));switch(l.tag){case 27:var n=l.stateNode,i=Hc(t);Ei(t,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Pl(u,""),l.flags&=-33);var c=Hc(t);Ei(t,c,u);break;case 3:case 4:var s=l.stateNode.containerInfo,m=Hc(t);Nc(t,m,s);break;default:throw Error(f(161))}}catch(b){ut(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function br(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;br(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Qe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)hr(t,e.alternate,e),e=e.sibling}function Ql(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ol(4,e,e.return),Ql(e);break;case 1:Te(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&or(e,e.return,l),Ql(e);break;case 27:bn(e.stateNode);case 26:case 5:Te(e,e.return),Ql(e);break;case 22:e.memoizedState===null&&Ql(e);break;case 30:Ql(e);break;default:Ql(e)}t=t.sibling}}function Xe(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:Xe(n,i,l),sn(4,i);break;case 1:if(Xe(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){ut(a,a.return,m)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)$s(s[n],c)}catch(m){ut(a,a.return,m)}}l&&u&64&&cr(i),fn(i,i.return);break;case 27:rr(i);case 26:case 5:Xe(n,i,l),l&&a===null&&u&4&&sr(i),fn(i,i.return);break;case 12:Xe(n,i,l);break;case 31:Xe(n,i,l),l&&u&4&&gr(n,i);break;case 13:Xe(n,i,l),l&&u&4&&vr(n,i);break;case 22:i.memoizedState===null&&Xe(n,i,l),fn(i,i.return);break;case 30:break;default:Xe(n,i,l)}e=e.sibling}}function qc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&$a(l))}function Yc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&$a(t))}function xe(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xr(t,e,l,a),e=e.sibling}function xr(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:xe(t,e,l,a),n&2048&&sn(9,e);break;case 1:xe(t,e,l,a);break;case 3:xe(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&$a(t)));break;case 12:if(n&2048){xe(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){ut(e,e.return,s)}}else xe(t,e,l,a);break;case 31:xe(t,e,l,a);break;case 13:xe(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?xe(t,e,l,a):rn(t,e):i._visibility&2?xe(t,e,l,a):(i._visibility|=2,ba(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&qc(u,e);break;case 24:xe(t,e,l,a),n&2048&&Yc(e.alternate,e);break;default:xe(t,e,l,a)}}function ba(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=l,s=a,m=u.flags;switch(u.tag){case 0:case 11:case 15:ba(i,u,c,s,n),sn(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?ba(i,u,c,s,n):rn(i,u):(b._visibility|=2,ba(i,u,c,s,n)),n&&m&2048&&qc(u.alternate,u);break;case 24:ba(i,u,c,s,n),n&&m&2048&&Yc(u.alternate,u);break;default:ba(i,u,c,s,n)}e=e.sibling}}function rn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:rn(l,a),n&2048&&qc(a.alternate,a);break;case 24:rn(l,a),n&2048&&Yc(a.alternate,a);break;default:rn(l,a)}e=e.sibling}}var dn=8192;function xa(t,e,l){if(t.subtreeFlags&dn)for(t=t.child;t!==null;)Sr(t,e,l),t=t.sibling}function Sr(t,e,l){switch(t.tag){case 26:xa(t,e,l),t.flags&dn&&t.memoizedState!==null&&zp(l,be,t.memoizedState,t.memoizedProps);break;case 5:xa(t,e,l);break;case 3:case 4:var a=be;be=ki(t.stateNode.containerInfo),xa(t,e,l),be=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=dn,dn=16777216,xa(t,e,l),dn=a):xa(t,e,l));break;default:xa(t,e,l)}}function zr(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function hn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Bt=a,Tr(a,t)}zr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ar(t),t=t.sibling}function Ar(t){switch(t.tag){case 0:case 11:case 15:hn(t),t.flags&2048&&ol(9,t,t.return);break;case 3:hn(t);break;case 12:hn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Mi(t)):hn(t);break;default:hn(t)}}function Mi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Bt=a,Tr(a,t)}zr(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ol(8,e,e.return),Mi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Mi(e));break;default:Mi(e)}t=t.sibling}}function Tr(t,e){for(;Bt!==null;){var l=Bt;switch(l.tag){case 0:case 11:case 15:ol(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:$a(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Bt=a;else t:for(l=t;Bt!==null;){a=Bt;var n=a.sibling,i=a.return;if(pr(a),a===l){Bt=null;break t}if(n!==null){n.return=i,Bt=n;break t}Bt=i}}}var Rh={getCacheForType:function(t){var e=Nt(Tt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Nt(Tt).controller.signal}},qh=typeof WeakMap=="function"?WeakMap:Map,lt=0,ft=null,K=null,W=0,it=0,ee=null,sl=!1,Sa=!1,Gc=!1,Le=0,xt=0,fl=0,Xl=0,kc=0,le=0,za=0,pn=null,Zt=null,Qc=!1,Di=0,jr=0,Ci=1/0,Oi=null,rl=null,Mt=0,dl=null,Aa=null,Ve=0,Xc=0,Lc=null,Er=null,mn=0,Vc=null;function ae(){return(lt&2)!==0&&W!==0?W&-W:z.T!==null?Fc():ko()}function wr(){if(le===0)if((W&536870912)===0||I){var t=Yn;Yn<<=1,(Yn&3932160)===0&&(Yn=262144),le=t}else le=536870912;return t=Pt.current,t!==null&&(t.flags|=32),le}function Kt(t,e,l){(t===ft&&(it===2||it===9)||t.cancelPendingCommit!==null)&&(Ta(t,0),hl(t,W,le,!1)),Ha(t,l),((lt&2)===0||t!==ft)&&(t===ft&&((lt&2)===0&&(Xl|=l),xt===4&&hl(t,W,le,!1)),je(t))}function Mr(t,e,l){if((lt&6)!==0)throw Error(f(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||_a(t,e),n=a?kh(t,e):Kc(t,e,!0),i=a;do{if(n===0){Sa&&!a&&hl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!Yh(l)){n=Kc(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=pn;var s=c.current.memoizedState.isDehydrated;if(s&&(Ta(c,u).flags|=256),u=Kc(c,u,!1),u!==2){if(Gc&&!s){c.errorRecoveryDisabledLanes|=i,Xl|=i,n=4;break t}i=Zt,Zt=n,i!==null&&(Zt===null?Zt=i:Zt.push.apply(Zt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ta(t,0),hl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:hl(a,e,le,!sl);break t;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(n=Di+300-Jt(),10<n)){if(hl(a,e,le,!sl),kn(a,0,!0)!==0)break t;Ve=e,a.timeoutHandle=id(Dr.bind(null,a,l,Zt,Oi,Qc,e,le,Xl,za,sl,i,"Throttled",-0,0),n);break t}Dr(a,l,Zt,Oi,Qc,e,le,Xl,za,sl,i,null,-0,0)}}break}while(!0);je(t)}function Dr(t,e,l,a,n,i,u,c,s,m,b,A,v,y){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ce},Sr(e,i,A);var O=(i&62914560)===i?Di-Jt():(i&4194048)===i?jr-Jt():0;if(O=Ap(A,O),O!==null){Ve=i,t.cancelPendingCommit=O(Rr.bind(null,t,e,i,l,a,n,u,c,s,b,A,null,v,y)),hl(t,i,u,!m);return}}Rr(t,e,i,l,a,n,u,c,s)}function Yh(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!Ft(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hl(t,e,l,a){e&=~kc,e&=~Xl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-Wt(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&qo(t,l,e)}function Ui(){return(lt&6)===0?(gn(0),!1):!0}function Zc(){if(K!==null){if(it===0)var t=K.return;else t=K,_e=_l=null,oc(t),pa=null,Fa=0,t=K;for(;t!==null;)ur(t.alternate,t),t=t.return;K=null}}function Ta(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,ip(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Ve=0,Zc(),ft=t,K=l=Ue(t.current,null),W=e,it=0,ee=null,sl=!1,Sa=_a(t,e),Gc=!1,za=le=kc=Xl=fl=xt=0,Zt=pn=null,Qc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-Wt(a),i=1<<n;e|=t[n],a&=~i}return Le=e,Pn(),l}function Cr(t,e){X=null,z.H=un,e===ha||e===ci?(e=Vs(),it=3):e===Wu?(e=Vs(),it=4):it=e===Tc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ee=e,K===null&&(xt=1,Si(t,se(e,t.current)))}function Or(){var t=Pt.current;return t===null?!0:(W&4194048)===W?he===null:(W&62914560)===W||(W&536870912)!==0?t===he:!1}function Ur(){var t=z.H;return z.H=un,t===null?un:t}function Br(){var t=z.A;return z.A=Rh,t}function Bi(){xt=4,sl||(W&4194048)!==W&&Pt.current!==null||(Sa=!0),(fl&134217727)===0&&(Xl&134217727)===0||ft===null||hl(ft,W,le,!1)}function Kc(t,e,l){var a=lt;lt|=2;var n=Ur(),i=Br();(ft!==t||W!==e)&&(Oi=null,Ta(t,e)),e=!1;var u=xt;t:do try{if(it!==0&&K!==null){var c=K,s=ee;switch(it){case 8:Zc(),u=6;break t;case 3:case 2:case 9:case 6:Pt.current===null&&(e=!0);var m=it;if(it=0,ee=null,ja(t,c,s,m),l&&Sa){u=0;break t}break;default:m=it,it=0,ee=null,ja(t,c,s,m)}}Gh(),u=xt;break}catch(b){Cr(t,b)}while(!0);return e&&t.shellSuspendCounter++,_e=_l=null,lt=a,z.H=n,z.A=i,K===null&&(ft=null,W=0,Pn()),u}function Gh(){for(;K!==null;)_r(K)}function kh(t,e){var l=lt;lt|=2;var a=Ur(),n=Br();ft!==t||W!==e?(Oi=null,Ci=Jt()+500,Ta(t,e)):Sa=_a(t,e);t:do try{if(it!==0&&K!==null){e=K;var i=ee;e:switch(it){case 1:it=0,ee=null,ja(t,e,i,1);break;case 2:case 9:if(Xs(i)){it=0,ee=null,Hr(e);break}e=function(){it!==2&&it!==9||ft!==t||(it=7),je(t)},i.then(e,e);break t;case 3:it=7;break t;case 4:it=5;break t;case 7:Xs(i)?(it=0,ee=null,Hr(e)):(it=0,ee=null,ja(t,e,i,7));break;case 5:var u=null;switch(K.tag){case 26:u=K.memoizedState;case 5:case 27:var c=K;if(u?xd(u):c.stateNode.complete){it=0,ee=null;var s=c.sibling;if(s!==null)K=s;else{var m=c.return;m!==null?(K=m,_i(m)):K=null}break e}}it=0,ee=null,ja(t,e,i,5);break;case 6:it=0,ee=null,ja(t,e,i,6);break;case 8:Zc(),xt=6;break t;default:throw Error(f(462))}}Qh();break}catch(b){Cr(t,b)}while(!0);return _e=_l=null,z.H=a,z.A=n,lt=l,K!==null?0:(ft=null,W=0,Pn(),xt)}function Qh(){for(;K!==null&&!r0();)_r(K)}function _r(t){var e=nr(t.alternate,t,Le);t.memoizedProps=t.pendingProps,e===null?_i(t):K=e}function Hr(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=If(l,e,e.pendingProps,e.type,void 0,W);break;case 11:e=If(l,e,e.pendingProps,e.type.render,e.ref,W);break;case 5:oc(e);default:ur(l,e),e=K=Us(e,Le),e=nr(l,e,Le)}t.memoizedProps=t.pendingProps,e===null?_i(t):K=e}function ja(t,e,l,a){_e=_l=null,oc(e),pa=null,Fa=0;var n=e.return;try{if(Ch(t,n,e,l,W)){xt=1,Si(t,se(l,t.current)),K=null;return}}catch(i){if(n!==null)throw K=n,i;xt=1,Si(t,se(l,t.current)),K=null;return}e.flags&32768?(I||a===1?t=!0:Sa||(W&536870912)!==0?t=!1:(sl=t=!0,(a===2||a===9||a===3||a===6)&&(a=Pt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Nr(e,t)):_i(e)}function _i(t){var e=t;do{if((e.flags&32768)!==0){Nr(e,sl);return}t=e.return;var l=Bh(e.alternate,e,Le);if(l!==null){K=l;return}if(e=e.sibling,e!==null){K=e;return}K=e=t}while(e!==null);xt===0&&(xt=5)}function Nr(t,e){do{var l=_h(t.alternate,t);if(l!==null){l.flags&=32767,K=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){K=t;return}K=t=l}while(t!==null);xt=6,K=null}function Rr(t,e,l,a,n,i,u,c,s){t.cancelPendingCommit=null;do Hi();while(Mt!==0);if((lt&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(i=e.lanes|e.childLanes,i|=Hu,S0(t,l,i,u,c,s),t===ft&&(K=ft=null,W=0),Aa=e,dl=t,Ve=l,Xc=i,Lc=n,Er=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Zh(Rn,function(){return Qr(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,n=C.p,C.p=2,u=lt,lt|=4;try{Hh(t,e,l)}finally{lt=u,C.p=n,z.T=a}}Mt=1,qr(),Yr(),Gr()}}function qr(){if(Mt===1){Mt=0;var t=dl,e=Aa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=z.T,z.T=null;var a=C.p;C.p=2;var n=lt;lt|=4;try{yr(e,t);var i=io,u=As(t.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&zs(c.ownerDocument.documentElement,c)){if(s!==null&&Cu(c)){var m=s.start,b=s.end;if(b===void 0&&(b=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(b,c.value.length);else{var A=c.ownerDocument||document,v=A&&A.defaultView||window;if(v.getSelection){var y=v.getSelection(),O=c.textContent.length,R=Math.min(s.start,O),st=s.end===void 0?R:Math.min(s.end,O);!y.extend&&R>st&&(u=st,st=R,R=u);var h=Ss(c,R),r=Ss(c,st);if(h&&r&&(y.rangeCount!==1||y.anchorNode!==h.node||y.anchorOffset!==h.offset||y.focusNode!==r.node||y.focusOffset!==r.offset)){var p=A.createRange();p.setStart(h.node,h.offset),y.removeAllRanges(),R>st?(y.addRange(p),y.extend(r.node,r.offset)):(p.setEnd(r.node,r.offset),y.addRange(p))}}}}for(A=[],y=c;y=y.parentNode;)y.nodeType===1&&A.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<A.length;c++){var S=A[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Ki=!!no,io=no=null}finally{lt=n,C.p=a,z.T=l}}t.current=e,Mt=2}}function Yr(){if(Mt===2){Mt=0;var t=dl,e=Aa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=z.T,z.T=null;var a=C.p;C.p=2;var n=lt;lt|=4;try{hr(t,e.alternate,e)}finally{lt=n,C.p=a,z.T=l}}Mt=3}}function Gr(){if(Mt===4||Mt===3){Mt=0,d0();var t=dl,e=Aa,l=Ve,a=Er;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Mt=5:(Mt=0,Aa=dl=null,kr(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(rl=null),ru(l),e=e.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Ba,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=z.T,n=C.p,C.p=2,z.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{z.T=e,C.p=n}}(Ve&3)!==0&&Hi(),je(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===Vc?mn++:(mn=0,Vc=t):mn=0,gn(0)}}function kr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,$a(e)))}function Hi(){return qr(),Yr(),Gr(),Qr()}function Qr(){if(Mt!==5)return!1;var t=dl,e=Xc;Xc=0;var l=ru(Ve),a=z.T,n=C.p;try{C.p=32>l?32:l,z.T=null,l=Lc,Lc=null;var i=dl,u=Ve;if(Mt=0,Aa=dl=null,Ve=0,(lt&6)!==0)throw Error(f(331));var c=lt;if(lt|=4,Ar(i.current),xr(i,i.current,u,l),lt=c,gn(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Ba,i)}catch{}return!0}finally{C.p=n,z.T=a,kr(t,e)}}function Xr(t,e,l){e=se(l,e),e=Ac(t.stateNode,e,2),t=il(t,e,2),t!==null&&(Ha(t,2),je(t))}function ut(t,e,l){if(t.tag===3)Xr(t,t,l);else for(;e!==null;){if(e.tag===3){Xr(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(rl===null||!rl.has(a))){t=se(l,t),l=Lf(2),a=il(e,l,2),a!==null&&(Vf(l,a,e,t),Ha(a,2),je(a));break}}e=e.return}}function Jc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new qh;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Gc=!0,n.add(l),t=Xh.bind(null,t,e,l),e.then(t,t))}function Xh(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,ft===t&&(W&l)===l&&(xt===4||xt===3&&(W&62914560)===W&&300>Jt()-Di?(lt&2)===0&&Ta(t,0):kc|=l,za===W&&(za=0)),je(t)}function Lr(t,e){e===0&&(e=Ro()),t=Ol(t,e),t!==null&&(Ha(t,e),je(t))}function Lh(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Lr(t,l)}function Vh(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(f(314))}a!==null&&a.delete(e),Lr(t,l)}function Zh(t,e){return cu(t,e)}var Ni=null,Ea=null,$c=!1,Ri=!1,Wc=!1,pl=0;function je(t){t!==Ea&&t.next===null&&(Ea===null?Ni=Ea=t:Ea=Ea.next=t),Ri=!0,$c||($c=!0,Jh())}function gn(t,e){if(!Wc&&Ri){Wc=!0;do for(var l=!1,a=Ni;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-Wt(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Jr(a,i))}else i=W,i=kn(a,a===ft?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||_a(a,i)||(l=!0,Jr(a,i));a=a.next}while(l);Wc=!1}}function Kh(){Vr()}function Vr(){Ri=$c=!1;var t=0;pl!==0&&np()&&(t=pl);for(var e=Jt(),l=null,a=Ni;a!==null;){var n=a.next,i=Zr(a,e);i===0?(a.next=null,l===null?Ni=n:l.next=n,n===null&&(Ea=l)):(l=a,(t!==0||(i&3)!==0)&&(Ri=!0)),a=n}Mt!==0&&Mt!==5||gn(t),pl!==0&&(pl=0)}function Zr(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Wt(i),c=1<<u,s=n[u];s===-1?((c&l)===0||(c&a)!==0)&&(n[u]=x0(c,e)):s<=e&&(t.expiredLanes|=c),i&=~c}if(e=ft,l=W,l=kn(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(it===2||it===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ou(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||_a(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ou(a),ru(l)){case 2:case 8:l=Ho;break;case 32:l=Rn;break;case 268435456:l=No;break;default:l=Rn}return a=Kr.bind(null,t),l=cu(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ou(a),t.callbackPriority=2,t.callbackNode=null,2}function Kr(t,e){if(Mt!==0&&Mt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Hi()&&t.callbackNode!==l)return null;var a=W;return a=kn(t,t===ft?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Mr(t,a,e),Zr(t,Jt()),t.callbackNode!=null&&t.callbackNode===l?Kr.bind(null,t):null)}function Jr(t,e){if(Hi())return null;Mr(t,e,!0)}function Jh(){up(function(){(lt&6)!==0?cu(_o,Kh):Vr()})}function Fc(){if(pl===0){var t=ra;t===0&&(t=qn,qn<<=1,(qn&261888)===0&&(qn=256)),pl=t}return pl}function $r(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vn(""+t)}function Wr(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function $h(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=$r((n[kt]||null).action),u=a.submitter;u&&(e=(e=u[kt]||null)?$r(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new $n("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(pl!==0){var s=u?Wr(n,u):new FormData(n);vc(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?Wr(n,u):new FormData(n),vc(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var Ic=0;Ic<_u.length;Ic++){var Pc=_u[Ic],Wh=Pc.toLowerCase(),Fh=Pc[0].toUpperCase()+Pc.slice(1);ye(Wh,"on"+Fh)}ye(Es,"onAnimationEnd"),ye(ws,"onAnimationIteration"),ye(Ms,"onAnimationStart"),ye("dblclick","onDoubleClick"),ye("focusin","onFocus"),ye("focusout","onBlur"),ye(hh,"onTransitionRun"),ye(ph,"onTransitionStart"),ye(mh,"onTransitionCancel"),ye(Ds,"onTransitionEnd"),Fl("onMouseEnter",["mouseout","mouseover"]),Fl("onMouseLeave",["mouseout","mouseover"]),Fl("onPointerEnter",["pointerout","pointerover"]),Fl("onPointerLeave",["pointerout","pointerover"]),wl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wl("onBeforeInput",["compositionend","keypress","textInput","paste"]),wl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ih=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn));function Fr(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var u=a.length-1;0<=u;u--){var c=a[u],s=c.instance,m=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=m;try{i(n)}catch(b){In(b)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(c=a[u],s=c.instance,m=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=m;try{i(n)}catch(b){In(b)}n.currentTarget=null,i=s}}}}function J(t,e){var l=e[du];l===void 0&&(l=e[du]=new Set);var a=t+"__bubble";l.has(a)||(Ir(e,t,2,!1),l.add(a))}function to(t,e,l){var a=0;e&&(a|=4),Ir(l,t,a,e)}var qi="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[qi]){t[qi]=!0,Lo.forEach(function(l){l!=="selectionchange"&&(Ih.has(l)||to(l,!1,t),to(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qi]||(e[qi]=!0,to("selectionchange",!1,e))}}function Ir(t,e,l,a){switch(wd(e)){case 2:var n=Ep;break;case 8:n=wp;break;default:n=vo}l=n.bind(null,e,l,t),n=void 0,!Su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function lo(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Jl(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue t}c=c.parentNode}}a=a.return}ls(function(){var m=i,b=bu(l),A=[];t:{var v=Cs.get(t);if(v!==void 0){var y=$n,O=t;switch(t){case"keypress":if(Kn(l)===0)break t;case"keydown":case"keyup":y=V0;break;case"focusin":O="focus",y=ju;break;case"focusout":O="blur",y=ju;break;case"beforeblur":case"afterblur":y=ju;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=J0;break;case Es:case ws:case Ms:y=N0;break;case Ds:y=W0;break;case"scroll":case"scrollend":y=O0;break;case"wheel":y=I0;break;case"copy":case"cut":case"paste":y=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=cs;break;case"toggle":case"beforetoggle":y=th}var R=(e&4)!==0,st=!R&&(t==="scroll"||t==="scrollend"),h=R?v!==null?v+"Capture":null:v;R=[];for(var r=m,p;r!==null;){var S=r;if(p=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||p===null||h===null||(S=qa(r,h),S!=null&&R.push(yn(r,S,p))),st)break;r=r.return}0<R.length&&(v=new y(v,O,null,l,b),A.push({event:v,listeners:R}))}}if((e&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",v&&l!==yu&&(O=l.relatedTarget||l.fromElement)&&(Jl(O)||O[Kl]))break t;if((y||v)&&(v=b.window===b?b:(v=b.ownerDocument)?v.defaultView||v.parentWindow:window,y?(O=l.relatedTarget||l.toElement,y=m,O=O?Jl(O):null,O!==null&&(st=D(O),R=O.tag,O!==st||R!==5&&R!==27&&R!==6)&&(O=null)):(y=null,O=m),y!==O)){if(R=is,S="onMouseLeave",h="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(R=cs,S="onPointerLeave",h="onPointerEnter",r="pointer"),st=y==null?v:Ra(y),p=O==null?v:Ra(O),v=new R(S,r+"leave",y,l,b),v.target=st,v.relatedTarget=p,S=null,Jl(b)===m&&(R=new R(h,r+"enter",O,l,b),R.target=p,R.relatedTarget=st,S=R),st=S,y&&O)e:{for(R=Ph,h=y,r=O,p=0,S=h;S;S=R(S))p++;S=0;for(var N=r;N;N=R(N))S++;for(;0<p-S;)h=R(h),p--;for(;0<S-p;)r=R(r),S--;for(;p--;){if(h===r||r!==null&&h===r.alternate){R=h;break e}h=R(h),r=R(r)}R=null}else R=null;y!==null&&Pr(A,v,y,R,!1),O!==null&&st!==null&&Pr(A,st,O,R,!0)}}t:{if(v=m?Ra(m):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var tt=ms;else if(hs(v))if(gs)tt=fh;else{tt=oh;var _=ch}else y=v.nodeName,!y||y.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?m&&vu(m.elementType)&&(tt=ms):tt=sh;if(tt&&(tt=tt(t,m))){ps(A,tt,l,b);break t}_&&_(t,v,m),t==="focusout"&&m&&v.type==="number"&&m.memoizedProps.value!=null&&gu(v,"number",v.value)}switch(_=m?Ra(m):window,t){case"focusin":(hs(_)||_.contentEditable==="true")&&(aa=_,Ou=m,Za=null);break;case"focusout":Za=Ou=aa=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Ts(A,l,b);break;case"selectionchange":if(dh)break;case"keydown":case"keyup":Ts(A,l,b)}var V;if(wu)t:{switch(t){case"compositionstart":var F="onCompositionStart";break t;case"compositionend":F="onCompositionEnd";break t;case"compositionupdate":F="onCompositionUpdate";break t}F=void 0}else la?rs(t,l)&&(F="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(F="onCompositionStart");F&&(os&&l.locale!=="ko"&&(la||F!=="onCompositionStart"?F==="onCompositionEnd"&&la&&(V=as()):(Ie=b,zu="value"in Ie?Ie.value:Ie.textContent,la=!0)),_=Yi(m,F),0<_.length&&(F=new us(F,t,null,l,b),A.push({event:F,listeners:_}),V?F.data=V:(V=ds(l),V!==null&&(F.data=V)))),(V=lh?ah(t,l):nh(t,l))&&(F=Yi(m,"onBeforeInput"),0<F.length&&(_=new us("onBeforeInput","beforeinput",null,l,b),A.push({event:_,listeners:F}),_.data=V)),$h(A,t,m,l,b)}Fr(A,e)})}function yn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Yi(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=qa(t,l),n!=null&&a.unshift(yn(t,n,i)),n=qa(t,e),n!=null&&a.push(yn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function Ph(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pr(t,e,l,a,n){for(var i=e._reactName,u=[];l!==null&&l!==a;){var c=l,s=c.alternate,m=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||m===null||(s=m,n?(m=qa(l,i),m!=null&&u.unshift(yn(l,m,s))):n||(m=qa(l,i),m!=null&&u.push(yn(l,m,s)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var tp=/\r\n?/g,ep=/\u0000|\uFFFD/g;function td(t){return(typeof t=="string"?t:""+t).replace(tp,`
`).replace(ep,"")}function ed(t,e){return e=td(e),td(t)===e}function ot(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Pl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Pl(t,""+a);break;case"className":Xn(t,"class",a);break;case"tabIndex":Xn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(t,l,a);break;case"style":ts(t,a,i);break;case"data":if(e!=="object"){Xn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Vn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&ot(t,e,"name",n.name,n,null),ot(t,e,"formEncType",n.formEncType,n,null),ot(t,e,"formMethod",n.formMethod,n,null),ot(t,e,"formTarget",n.formTarget,n,null)):(ot(t,e,"encType",n.encType,n,null),ot(t,e,"method",n.method,n,null),ot(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Vn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Ce);break;case"onScroll":a!=null&&J("scroll",t);break;case"onScrollEnd":a!=null&&J("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Vn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":J("beforetoggle",t),J("toggle",t),Qn(t,"popover",a);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Qn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=D0.get(l)||l,Qn(t,l,a))}}function ao(t,e,l,a,n,i){switch(l){case"style":ts(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(f(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Pl(t,a):(typeof a=="number"||typeof a=="bigint")&&Pl(t,""+a);break;case"onScroll":a!=null&&J("scroll",t);break;case"onScrollEnd":a!=null&&J("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ce);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vo.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[kt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Qn(t,l,a)}}}function qt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",t),J("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ot(t,e,i,u,l,null)}}n&&ot(t,e,"srcSet",l.srcSet,l,null),a&&ot(t,e,"src",l.src,l,null);return;case"input":J("invalid",t);var c=i=u=n=null,s=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var b=l[a];if(b!=null)switch(a){case"name":n=b;break;case"type":u=b;break;case"checked":s=b;break;case"defaultChecked":m=b;break;case"value":i=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,e));break;default:ot(t,e,a,b,l,null)}}Wo(t,i,c,s,m,u,n,!1);return;case"select":J("invalid",t),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:ot(t,e,n,c,l,null)}e=i,l=u,t.multiple=!!a,e!=null?Il(t,!!a,e,!1):l!=null&&Il(t,!!a,l,!0);return;case"textarea":J("invalid",t),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(f(91));break;default:ot(t,e,u,c,l,null)}Io(t,a,n,i);return;case"option":for(s in l)if(l.hasOwnProperty(s)&&(a=l[s],a!=null))switch(s){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ot(t,e,s,a,l,null)}return;case"dialog":J("beforetoggle",t),J("toggle",t),J("cancel",t),J("close",t);break;case"iframe":case"object":J("load",t);break;case"video":case"audio":for(a=0;a<vn.length;a++)J(vn[a],t);break;case"image":J("error",t),J("load",t);break;case"details":J("toggle",t);break;case"embed":case"source":case"link":J("error",t),J("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ot(t,e,m,a,l,null)}return;default:if(vu(e)){for(b in l)l.hasOwnProperty(b)&&(a=l[b],a!==void 0&&ao(t,e,b,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&ot(t,e,c,a,l,null))}function lp(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,m=null,b=null;for(y in l){var A=l[y];if(l.hasOwnProperty(y)&&A!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":s=A;default:a.hasOwnProperty(y)||ot(t,e,y,null,a,A)}}for(var v in a){var y=a[v];if(A=l[v],a.hasOwnProperty(v)&&(y!=null||A!=null))switch(v){case"type":i=y;break;case"name":n=y;break;case"checked":m=y;break;case"defaultChecked":b=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,e));break;default:y!==A&&ot(t,e,v,y,a,A)}}mu(t,u,c,s,m,b,i,n);return;case"select":y=u=c=v=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":y=s;default:a.hasOwnProperty(i)||ot(t,e,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":v=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&ot(t,e,n,i,a,s)}e=c,l=u,a=y,v!=null?Il(t,!!l,v,!1):!!a!=!!l&&(e!=null?Il(t,!!l,e,!0):Il(t,!!l,l?[]:"",!1));return;case"textarea":y=v=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ot(t,e,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":v=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==i&&ot(t,e,u,n,a,i)}Fo(t,v,y);return;case"option":for(var O in l)if(v=l[O],l.hasOwnProperty(O)&&v!=null&&!a.hasOwnProperty(O))switch(O){case"selected":t.selected=!1;break;default:ot(t,e,O,null,a,v)}for(s in a)if(v=a[s],y=l[s],a.hasOwnProperty(s)&&v!==y&&(v!=null||y!=null))switch(s){case"selected":t.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:ot(t,e,s,v,a,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in l)v=l[R],l.hasOwnProperty(R)&&v!=null&&!a.hasOwnProperty(R)&&ot(t,e,R,null,a,v);for(m in a)if(v=a[m],y=l[m],a.hasOwnProperty(m)&&v!==y&&(v!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(f(137,e));break;default:ot(t,e,m,v,a,y)}return;default:if(vu(e)){for(var st in l)v=l[st],l.hasOwnProperty(st)&&v!==void 0&&!a.hasOwnProperty(st)&&ao(t,e,st,void 0,a,v);for(b in a)v=a[b],y=l[b],!a.hasOwnProperty(b)||v===y||v===void 0&&y===void 0||ao(t,e,b,v,a,y);return}}for(var h in l)v=l[h],l.hasOwnProperty(h)&&v!=null&&!a.hasOwnProperty(h)&&ot(t,e,h,null,a,v);for(A in a)v=a[A],y=l[A],!a.hasOwnProperty(A)||v===y||v==null&&y==null||ot(t,e,A,v,a,y)}function ld(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ap(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&ld(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],m=s.startTime;if(m>c)break;var b=s.transferSize,A=s.initiatorType;b&&ld(A)&&(s=s.responseEnd,u+=b*(s<c?1:(c-m)/(s-m)))}if(--a,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var no=null,io=null;function Gi(t){return t.nodeType===9?t:t.ownerDocument}function ad(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function uo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var co=null;function np(){var t=window.event;return t&&t.type==="popstate"?t===co?!1:(co=t,!0):(co=null,!1)}var id=typeof setTimeout=="function"?setTimeout:void 0,ip=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,up=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(t){return ud.resolve(null).then(t).catch(cp)}:id;function cp(t){setTimeout(function(){throw t})}function ml(t){return t==="head"}function cd(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Ca(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")bn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,bn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Na]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&bn(t.ownerDocument.body);l=n}while(l);Ca(e)}function od(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function oo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":oo(l),hu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function op(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Na])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=pe(t.nextSibling),t===null)break}return null}function sp(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=pe(t.nextSibling),t===null))return null;return t}function sd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=pe(t.nextSibling),t===null))return null;return t}function so(t){return t.data==="$?"||t.data==="$~"}function fo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function fp(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function pe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var ro=null;function fd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return pe(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function rd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function dd(t,e,l){switch(e=Gi(l),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function bn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);hu(t)}var me=new Map,hd=new Set;function ki(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ze=C.d;C.d={f:rp,r:dp,D:hp,C:pp,L:mp,m:gp,X:yp,S:vp,M:bp};function rp(){var t=Ze.f(),e=Ui();return t||e}function dp(t){var e=$l(t);e!==null&&e.tag===5&&e.type==="form"?Cf(e):Ze.r(t)}var wa=typeof document>"u"?null:document;function pd(t,e,l){var a=wa;if(a&&typeof e=="string"&&e){var n=ce(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),hd.has(n)||(hd.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),qt(e,"link",t),Ut(e),a.head.appendChild(e)))}}function hp(t){Ze.D(t),pd("dns-prefetch",t,null)}function pp(t,e){Ze.C(t,e),pd("preconnect",t,e)}function mp(t,e,l){Ze.L(t,e,l);var a=wa;if(a&&t&&e){var n='link[rel="preload"][as="'+ce(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ce(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ce(l.imageSizes)+'"]')):n+='[href="'+ce(t)+'"]';var i=n;switch(e){case"style":i=Ma(t);break;case"script":i=Da(t)}me.has(i)||(t=j({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),me.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(xn(i))||e==="script"&&a.querySelector(Sn(i))||(e=a.createElement("link"),qt(e,"link",t),Ut(e),a.head.appendChild(e)))}}function gp(t,e){Ze.m(t,e);var l=wa;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ce(a)+'"][href="'+ce(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Da(t)}if(!me.has(i)&&(t=j({rel:"modulepreload",href:t},e),me.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Sn(i)))return}a=l.createElement("link"),qt(a,"link",t),Ut(a),l.head.appendChild(a)}}}function vp(t,e,l){Ze.S(t,e,l);var a=wa;if(a&&t){var n=Wl(a).hoistableStyles,i=Ma(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(xn(i)))c.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":e},l),(l=me.get(i))&&ho(t,l);var s=u=a.createElement("link");Ut(s),qt(s,"link",t),s._p=new Promise(function(m,b){s.onload=m,s.onerror=b}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Qi(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function yp(t,e){Ze.X(t,e);var l=wa;if(l&&t){var a=Wl(l).hoistableScripts,n=Da(t),i=a.get(n);i||(i=l.querySelector(Sn(n)),i||(t=j({src:t,async:!0},e),(e=me.get(n))&&po(t,e),i=l.createElement("script"),Ut(i),qt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function bp(t,e){Ze.M(t,e);var l=wa;if(l&&t){var a=Wl(l).hoistableScripts,n=Da(t),i=a.get(n);i||(i=l.querySelector(Sn(n)),i||(t=j({src:t,async:!0,type:"module"},e),(e=me.get(n))&&po(t,e),i=l.createElement("script"),Ut(i),qt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function md(t,e,l,a){var n=(n=$e.current)?ki(n):null;if(!n)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ma(l.href),l=Wl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ma(l.href);var i=Wl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(xn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),me.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},me.set(t,l),i||xp(n,t,l,u.state))),e&&a===null)throw Error(f(528,""));return u}if(e&&a!==null)throw Error(f(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Da(l),l=Wl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function Ma(t){return'href="'+ce(t)+'"'}function xn(t){return'link[rel="stylesheet"]['+t+"]"}function gd(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function xp(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),qt(e,"link",l),Ut(e),t.head.appendChild(e))}function Da(t){return'[src="'+ce(t)+'"]'}function Sn(t){return"script[async]"+t}function vd(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ce(l.href)+'"]');if(a)return e.instance=a,Ut(a),a;var n=j({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Ut(a),qt(a,"style",n),Qi(a,l.precedence,t),e.instance=a;case"stylesheet":n=Ma(l.href);var i=t.querySelector(xn(n));if(i)return e.state.loading|=4,e.instance=i,Ut(i),i;a=gd(l),(n=me.get(n))&&ho(a,n),i=(t.ownerDocument||t).createElement("link"),Ut(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),qt(i,"link",a),e.state.loading|=4,Qi(i,l.precedence,t),e.instance=i;case"script":return i=Da(l.src),(n=t.querySelector(Sn(i)))?(e.instance=n,Ut(n),n):(a=l,(n=me.get(i))&&(a=j({},l),po(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ut(n),qt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Qi(a,l.precedence,t));return e.instance}function Qi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function ho(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function po(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Xi=null;function yd(t,e,l){if(Xi===null){var a=new Map,n=Xi=new Map;n.set(l,a)}else n=Xi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[Na]||i[_t]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function bd(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Sp(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function xd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function zp(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ma(a.href),i=e.querySelector(xn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Li.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,Ut(i);return}i=e.ownerDocument||e,a=gd(a),(n=me.get(n))&&ho(a,n),i=i.createElement("link"),Ut(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),qt(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Li.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var mo=0;function Ap(t,e){return t.stylesheets&&t.count===0&&Zi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Zi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&mo===0&&(mo=62500*ap());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Zi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>mo?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Li(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vi=null;function Zi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vi=new Map,e.forEach(Tp,t),Vi=null,Li.call(t))}function Tp(t,e){if(!(e.state.loading&4)){var l=Vi.get(t);if(l)var a=l.get(null);else{l=new Map,Vi.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Li.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var zn={$$typeof:rt,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function jp(t,e,l,a,n,i,u,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=su(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.hiddenUpdates=su(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Sd(t,e,l,a,n,i,u,c,s,m,b,A){return t=new jp(t,e,l,u,s,m,b,A,c),e=1,i===!0&&(e|=24),i=It(3,null,null,e),t.current=i,i.stateNode=t,e=Ku(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Fu(i),t}function zd(t){return t?(t=ua,t):ua}function Ad(t,e,l,a,n,i){n=zd(n),a.context===null?a.context=n:a.pendingContext=n,a=nl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=il(t,a,e),l!==null&&(Kt(l,t,e),Pa(l,t,e))}function Td(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function go(t,e){Td(t,e),(t=t.alternate)&&Td(t,e)}function jd(t){if(t.tag===13||t.tag===31){var e=Ol(t,67108864);e!==null&&Kt(e,t,67108864),go(t,67108864)}}function Ed(t){if(t.tag===13||t.tag===31){var e=ae();e=fu(e);var l=Ol(t,e);l!==null&&Kt(l,t,e),go(t,e)}}var Ki=!0;function Ep(t,e,l,a){var n=z.T;z.T=null;var i=C.p;try{C.p=2,vo(t,e,l,a)}finally{C.p=i,z.T=n}}function wp(t,e,l,a){var n=z.T;z.T=null;var i=C.p;try{C.p=8,vo(t,e,l,a)}finally{C.p=i,z.T=n}}function vo(t,e,l,a){if(Ki){var n=yo(a);if(n===null)lo(t,e,a,Ji,l),Md(t,a);else if(Dp(n,t,e,l,a))a.stopPropagation();else if(Md(t,a),e&4&&-1<Mp.indexOf(t)){for(;n!==null;){var i=$l(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=El(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-Wt(u);c.entanglements[1]|=s,u&=~s}je(i),(lt&6)===0&&(Ci=Jt()+500,gn(0))}}break;case 31:case 13:c=Ol(i,2),c!==null&&Kt(c,i,2),Ui(),go(i,2)}if(i=yo(a),i===null&&lo(t,e,a,Ji,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else lo(t,e,a,null,l)}}function yo(t){return t=bu(t),bo(t)}var Ji=null;function bo(t){if(Ji=null,t=Jl(t),t!==null){var e=D(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=E(e),t!==null)return t;t=null}else if(l===31){if(t=U(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ji=t,null}function wd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(h0()){case _o:return 2;case Ho:return 8;case Rn:case p0:return 32;case No:return 268435456;default:return 32}default:return 32}}var xo=!1,gl=null,vl=null,yl=null,An=new Map,Tn=new Map,bl=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Md(t,e){switch(t){case"focusin":case"focusout":gl=null;break;case"dragenter":case"dragleave":vl=null;break;case"mouseover":case"mouseout":yl=null;break;case"pointerover":case"pointerout":An.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(e.pointerId)}}function jn(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=$l(e),e!==null&&jd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Dp(t,e,l,a,n){switch(e){case"focusin":return gl=jn(gl,t,e,l,a,n),!0;case"dragenter":return vl=jn(vl,t,e,l,a,n),!0;case"mouseover":return yl=jn(yl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return An.set(i,jn(An.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Tn.set(i,jn(Tn.get(i)||null,t,e,l,a,n)),!0}return!1}function Dd(t){var e=Jl(t.target);if(e!==null){var l=D(e);if(l!==null){if(e=l.tag,e===13){if(e=E(l),e!==null){t.blockedOn=e,Qo(t.priority,function(){Ed(l)});return}}else if(e===31){if(e=U(l),e!==null){t.blockedOn=e,Qo(t.priority,function(){Ed(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=yo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);yu=a,l.target.dispatchEvent(a),yu=null}else return e=$l(l),e!==null&&jd(e),t.blockedOn=l,!1;e.shift()}return!0}function Cd(t,e,l){$i(t)&&l.delete(e)}function Cp(){xo=!1,gl!==null&&$i(gl)&&(gl=null),vl!==null&&$i(vl)&&(vl=null),yl!==null&&$i(yl)&&(yl=null),An.forEach(Cd),Tn.forEach(Cd)}function Wi(t,e){t.blockedOn===e&&(t.blockedOn=null,xo||(xo=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Cp)))}var Fi=null;function Od(t){Fi!==t&&(Fi=t,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){Fi===t&&(Fi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(bo(a||l)===null)continue;break}var i=$l(l);i!==null&&(t.splice(e,3),e-=3,vc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ca(t){function e(s){return Wi(s,t)}gl!==null&&Wi(gl,t),vl!==null&&Wi(vl,t),yl!==null&&Wi(yl,t),An.forEach(e),Tn.forEach(e);for(var l=0;l<bl.length;l++){var a=bl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<bl.length&&(l=bl[0],l.blockedOn===null);)Dd(l),l.blockedOn===null&&bl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[kt]||null;if(typeof i=="function")u||Od(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[kt]||null)c=u.formAction;else if(bo(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),Od(l)}}}function Ud(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function So(t){this._internalRoot=t}Ii.prototype.render=So.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var l=e.current,a=ae();Ad(l,a,t,e,null,null)},Ii.prototype.unmount=So.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ad(t.current,2,null,t,null,null),Ui(),e[Kl]=null}};function Ii(t){this._internalRoot=t}Ii.prototype.unstable_scheduleHydration=function(t){if(t){var e=ko();t={blockedOn:null,target:t,priority:e};for(var l=0;l<bl.length&&e!==0&&e<bl[l].priority;l++);bl.splice(l,0,t),l===0&&Dd(t)}};var Bd=x.version;if(Bd!=="19.2.1")throw Error(f(527,Bd,"19.2.1"));C.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=w(e),t=t!==null?k(t):null,t=t===null?null:t.stateNode,t};var Op={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Ba=Pi.inject(Op),$t=Pi}catch{}}return En.createRoot=function(t,e){if(!M(t))throw Error(f(299));var l=!1,a="",n=Gf,i=kf,u=Qf;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Sd(t,1,!1,null,null,l,a,null,n,i,u,Ud),t[Kl]=e.current,eo(t),new So(e)},En.hydrateRoot=function(t,e,l){if(!M(t))throw Error(f(299));var a=!1,n="",i=Gf,u=kf,c=Qf,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),e=Sd(t,1,!0,e,l??null,a,n,s,i,u,c,Ud),e.context=zd(null),l=e.current,a=ae(),a=fu(a),n=nl(a),n.callback=null,il(l,n,a),l=a,e.current.lanes=l,Ha(e,l),je(e),t[Kl]=e.current,eo(t),new Ii(e)},En.version="19.2.1",En}var Rd;function Qp(){if(Rd)return zo.exports;Rd=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(x){console.error(x)}}return d(),zo.exports=kp(),zo.exports}var Xp=Qp();const jo='-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',at={display:jo,body:jo,mono:jo},Eo={mobile:"640px",tablet:"1024px",desktop:"1280px"},L={mobile:`@media (min-width: ${Eo.mobile})`,tablet:`@media (min-width: ${Eo.tablet})`,desktop:`@media (min-width: ${Eo.desktop})`,belowTablet:"@media (max-width: 1023px)",belowMobile:"@media (max-width: 639px)"},wn={sm:"8px",md:"10px",lg:"14px",xl:"20px",pill:"999px"},wo={out:"cubic-bezier(0.16, 1, 0.3, 1)",outStrong:"cubic-bezier(0.23, 1, 0.32, 1)",inOut:"cubic-bezier(0.77, 0, 0.175, 1)"},Lp=Rp`
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
    --scene-opacity: 0.60;

    --ease-out: ${wo.out};
    --ease-out-strong: ${wo.outStrong};
    --ease-in-out: ${wo.inOut};

    --r-sm: ${wn.sm};
    --r-md: ${wn.md};
    --r-lg: ${wn.lg};
    --r-xl: ${wn.xl};
    --r-pill: ${wn.pill};

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
    --scene-opacity: 0.32;

    color-scheme: light;
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  html {
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overscroll-behavior: none;
    scroll-behavior: auto;
  }

  body {
    font-family: ${at.body};
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
    font-family: ${at.display};
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

  a, button {
    transition:
      background-color 0.4s var(--ease-out),
      border-color 0.4s var(--ease-out),
      color 0.4s var(--ease-out);
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

  section[id] { scroll-margin-top: 96px; }
  #home { scroll-margin-top: 0; }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }

  .mono { font-family: ${at.mono}; font-variant-numeric: tabular-nums; }
  .gpu { transform: translateZ(0); backface-visibility: hidden; }
`,Jd=H.createContext(void 0),Mo="portfolio-theme-mode",Vp=()=>{if(typeof window<"u"){const d=localStorage.getItem(Mo);return d==="dark"||d==="light"?d:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"dark"},Zp=({children:d})=>{const[x,T]=H.useState(Vp),[f,M]=H.useState(()=>{if(typeof window<"u"){const E=localStorage.getItem(Mo);return E==="dark"||E==="light"}return!1});H.useEffect(()=>{document.documentElement.setAttribute("data-theme",x)},[x]),H.useEffect(()=>{f&&localStorage.setItem(Mo,x)},[x,f]);const D=()=>{const E=x==="dark"?"light":"dark";M(!0);const U=()=>{document.documentElement.setAttribute("data-theme",E),T(E)};if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof document.startViewTransition!="function"){U();return}document.startViewTransition(U)};return o.jsx(Jd.Provider,{value:{mode:x,toggleTheme:D,isDark:x==="dark"},children:d})},$d=(d,x)=>{const T=x?.offset??0,f=typeof d=="string"?document.getElementById(d.replace("#","")):d instanceof HTMLElement?d:null;f?window.scrollTo({top:f.getBoundingClientRect().top+window.scrollY+T,behavior:"smooth"}):typeof d=="number"&&window.scrollTo({top:d+T,behavior:"smooth"})},Wd=H.createContext({scrollTo:$d}),Fd=()=>H.useContext(Wd);function Id(d,x){if(x==="home"){d("home",{offset:0});return}const T=document.getElementById(x),f=T?.firstElementChild,M=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"))||64,D=window.matchMedia("(min-width: 1024px)").matches?M:0,E=f&&parseFloat(getComputedStyle(f).paddingLeft)||0;if(T&&f&&E>0){const U=f.getBoundingClientRect().top+window.scrollY;d(U-D-E*1.6)}else d(x,{offset:-(D+24)})}const Kp=({children:d})=>o.jsx(Wd.Provider,{value:{scrollTo:$d},children:d}),Jp=(function(){const x=typeof document<"u"&&document.createElement("link").relList;return x&&x.supports&&x.supports("modulepreload")?"modulepreload":"preload"})(),$p=function(d){return"/"+d},qd={},Wp=function(x,T,f){let M=Promise.resolve();if(T&&T.length>0){let B=function(w){return Promise.all(w.map(k=>Promise.resolve(k).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};document.getElementsByTagName("link");const E=document.querySelector("meta[property=csp-nonce]"),U=E?.nonce||E?.getAttribute("nonce");M=B(T.map(w=>{if(w=$p(w),w in qd)return;qd[w]=!0;const k=w.endsWith(".css"),j=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${w}"]${j}`))return;const q=document.createElement("link");if(q.rel=k?"stylesheet":Jp,k||(q.as="script"),q.crossOrigin="",q.href=w,U&&q.setAttribute("nonce",U),document.head.appendChild(q),k)return new Promise(($,Q)=>{q.addEventListener("load",$),q.addEventListener("error",()=>Q(new Error(`Unable to preload CSS for ${w}`)))})}))}function D(E){const U=new Event("vite:preloadError",{cancelable:!0});if(U.payload=E,window.dispatchEvent(U),!U.defaultPrevented)throw E}return M.then(E=>{for(const U of E||[])U.status==="rejected"&&D(U.reason);return x().catch(D)})};function Pd(){const d=H.useContext(Jd);if(!d)throw new Error("useTheme must be used within a ThemeProvider");return d}const Fp="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E",Ip=g.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: #000000;

  [data-theme='light'] & {
    background: transparent;
  }
`,Pp=g.div`
  position: absolute;
  inset: 0;
`,tm=g.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(90% 60% at 50% -8%, rgba(70, 210, 230, 0.10), transparent 62%);

  [data-theme='light'] & {
    background: radial-gradient(95% 65% at 50% -8%, rgba(10, 150, 172, 0.28), rgba(10, 150, 172, 0.08) 42%, transparent 66%);
  }
`,em=g.div`
  position: absolute;
  inset: 0;
  background-image: url('${Fp}');
  background-repeat: repeat;
  background-size: 160px 160px;
  opacity: 0.035;

  [data-theme='light'] & {
    opacity: 0.022;
  }

  @media (prefers-reduced-transparency: reduce) {
    display: none;
  }
`,lm=g.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(135% 105% at 50% 38%, transparent 60%, rgba(0, 0, 0, 0.6) 100%);

  [data-theme='light'] & {
    display: none;
  }
`,am=()=>{const d=Dt(),{isDark:x}=Pd(),T=!d,[f,M]=H.useState(!1),D=H.useRef(null),E=H.useRef(null),U=H.useRef(x);return U.current=x,H.useEffect(()=>{if(!T)return;let B=!1,w=0;const k=async()=>{try{const{initSheen:q}=await Wp(async()=>{const{initSheen:$}=await import("./sheen-DFdMtLv2.js");return{initSheen:$}},[]);if(B||!D.current)return;E.current=q(D.current,{dark:U.current})}catch{B||M(!0)}},j=typeof window.requestIdleCallback=="function";return w=j?window.requestIdleCallback(k,{timeout:400}):window.setTimeout(k,200),()=>{if(B=!0,j?window.cancelIdleCallback(w):window.clearTimeout(w),E.current){try{E.current.destroy()}catch{}E.current=null}}},[T]),H.useEffect(()=>{E.current?.setDark(x)},[x]),o.jsxs(Ip,{"aria-hidden":!0,children:[T&&o.jsx(Pp,{ref:D}),(!T||f)&&o.jsx(tm,{}),o.jsx(em,{}),o.jsx(lm,{})]})},nm=d=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...d,children:[o.jsx("circle",{cx:"12",cy:"12",r:"4"}),o.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),im=d=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...d,children:o.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),t0=d=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...d,children:[o.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),o.jsx("path",{d:"M22 6L12 13 2 6"})]}),um=d=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...d,children:o.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),e0=d=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...d,children:[o.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),o.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),o.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),cm=d=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...d,children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),l0=[{label:"About",href:"about"},{label:"Skills",href:"technologyproficiency"},{label:"Work",href:"professionalexperience"},{label:"Projects",href:"mostproudof"},{label:"Contact",href:"contact"}];function om(){const[d,x]=H.useState("home");return H.useEffect(()=>{const f=["home",...l0.map(E=>E.href)].map(E=>document.getElementById(E)).filter(E=>E!==null),M=new Map,D=new IntersectionObserver(E=>{for(const w of E)M.set(w.target.id,w.isIntersecting?w.intersectionRatio:0);let U="",B=0;for(const[w,k]of M)k>B&&(B=k,U=w);B>0&&x(U)},{rootMargin:"-45% 0px -45% 0px",threshold:[0,.25,.5,.75,1]});return f.forEach(E=>D.observe(E)),()=>D.disconnect()},[]),d}const sm=g.nav`
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

  ${L.tablet} {
    top: 0;
    bottom: auto;
    height: var(--nav-h);
    padding: 0;
    display: block;
  }
`,fm=g.div`
  position: relative;
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  max-width: 100%;

  ${L.tablet} {
    height: var(--nav-h);
    width: 100%;
    max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
    margin-inline: auto;
    padding: 0 var(--gutter);
    gap: 8px;
    justify-content: space-between;
  }

  ${L.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,rm=g(Y.div)`
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

  ${L.tablet} {
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

  @media (prefers-reduced-transparency: reduce) {
    background: var(--bg-elev);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    ${L.tablet} { background: transparent; }
  }
`,dm=g(Y.div)`
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

  ${L.tablet} { display: block; }

  @media (prefers-reduced-transparency: reduce) {
    background: var(--bg);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,hm=g(Y.a)`
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

  ${L.belowTablet} { width: 36px; height: 36px; }
`,pm=g(Y.img)`
  width: 32px;
  height: 32px;
  object-fit: contain;
  position: relative;
  z-index: 1;
  transform-origin: center center;
  /* No CSS filter/will-change: Safari rasterizes a filtered transformed <img> blurrily. */
`,mm=g(Y.div)`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 2px;
  min-width: 0;

  ${L.tablet} {
    flex: 1 1 auto;
    justify-content: center;
  }

  ${L.belowTablet} {
    flex: 0 1 auto;
    min-width: 0;
    justify-content: flex-start;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,gm=g(Y.a)`
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
  color: ${({$active:d})=>d?"var(--accent-ink)":"var(--ink-2)"};
  transition: color 0.25s var(--ease-out);

  &:hover { color: ${({$active:d})=>d?"var(--accent-ink)":"var(--ink)"}; }

  ${L.belowTablet} {
    padding: 8px 9px;
    font-size: 12px;
  }
`,vm=g(Y.span)`
  position: absolute;
  inset: 0;
  border-radius: var(--r-pill);
  background: var(--accent-soft);
  border: 1px solid rgba(var(--accent-rgb), 0.45);
  z-index: 0;
`,ym=g.span`
  position: relative;
  z-index: 1;
`,bm=g(Y.button)`
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

  ${L.belowTablet} { width: 36px; height: 36px; }
`,Mn=[.16,1,.3,1],xm=[.76,0,.24,1],Sm=({revealed:d=!0})=>{const x=om(),{scrollTo:T}=Fd(),{isDark:f,toggleTheme:M}=Pd(),D=Dt(),[E,U]=H.useState(!1);H.useEffect(()=>{const P=()=>U(window.scrollY>8);return P(),window.addEventListener("scroll",P,{passive:!0}),()=>window.removeEventListener("scroll",P)},[]);const B=H.useRef(null),w=H.useRef(null),k=H.useRef(1),j=Ee(0),q=Ee(0),$=Ee(1),Q=Ee(0);H.useLayoutEffect(()=>{const P=B.current,rt=w.current;if(!P||!rt)return;if(D||d){j.set(0),q.set(0),$.set(1),Q.set(1);return}const Ct=P.getBoundingClientRect(),ge=rt.offsetWidth||26;if(Ct.width===0){Q.set(1);return}const ne=Math.min(150,window.innerWidth*.34);k.current=ne/ge,j.set(window.innerWidth/2-(Ct.left+Ct.width/2)),q.set(window.innerHeight/2-(Ct.top+Ct.height/2)),$.set(k.current*.86),Q.set(0)},[]),H.useEffect(()=>{if(D||d){Q.set(1);return}const P=Oa(Q,1,{duration:1,ease:Mn}),rt=Oa($,k.current,{duration:1.4,ease:Mn});return()=>{P.stop(),rt.stop()}},[]),H.useEffect(()=>{if(!d||D)return;const P={duration:.8,ease:xm},rt=Oa(j,0,P),Ct=Oa(q,0,P),ge=Oa($,1,P);return()=>{rt.stop(),Ct.stop(),ge.stop()}},[d]);const Z=(P,rt)=>{P.preventDefault(),Id(T,rt)},At=0,gt=P=>({initial:{opacity:0,y:D?0:8},animate:{opacity:d?1:0,y:d||D?0:8},transition:{duration:.6,delay:d?At+P:0,ease:Mn}});return o.jsx(sm,{"aria-label":"Primary",children:o.jsxs(fm,{children:[o.jsx(rm,{initial:{opacity:0},animate:{opacity:d?1:0},transition:{duration:.7,delay:d?At:0,ease:Mn}}),o.jsx(dm,{initial:!1,animate:{opacity:E?1:0},transition:{duration:.35,ease:Mn}}),o.jsx(hm,{ref:B,href:"#home",onClick:P=>Z(P,"home"),"aria-label":"Pranshu Nijhawan, back to top",whileHover:{scale:1.06},whileTap:{scale:.94},children:o.jsx(pm,{ref:w,"data-brand-logo":!0,src:"/images/logo-optimized.webp",alt:"Pranshu Nijhawan logo",width:26,height:26,style:{x:j,y:q,scale:$,opacity:Q}})}),o.jsx(mm,{...gt(.18),children:o.jsx(Bp,{children:l0.map(P=>{const rt=x===P.href;return o.jsxs(gm,{href:`#${P.href}`,$active:rt,"aria-current":rt?"true":void 0,onClick:Ct=>Z(Ct,P.href),whileTap:{scale:.95},children:[rt&&o.jsx(vm,{layoutId:"nav-active",transition:{type:"spring",stiffness:480,damping:38,mass:.9}}),o.jsx(ym,{children:P.label})]},P.href)})})}),o.jsx(bm,{onClick:M,"aria-label":f?"Switch to light mode":"Switch to dark mode",title:f?"Light mode":"Dark mode",whileHover:{scale:1.06},whileTap:{scale:.94},...gt(.26),children:o.jsx(Dn,{mode:"wait",initial:!1,children:o.jsx(Y.span,{initial:{opacity:0,rotate:-45,scale:.6},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:45,scale:.6},transition:{duration:.25,ease:[.16,1,.3,1]},style:{display:"inline-flex"},children:f?o.jsx(nm,{}):o.jsx(im,{})},f?"sun":"moon")})})]})})},zm="3.0.3",Am=g.footer`
  position: relative;
  z-index: 1;
  padding: 40px 0 calc(96px + env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);
  ${L.tablet} { padding: 48px 0; }
`,Tm=g.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  margin-top: 4px;
  padding-inline: var(--gutter);

  ${L.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,jm=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 14px;
`,Yd=g.span`
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.4;
`,Em=g.span`
  font-family: ${at.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
`,wm=()=>{const d=new Date().getFullYear();return o.jsx(Am,{children:o.jsx(Tm,{children:o.jsxs(jm,{children:[o.jsx(Yd,{}),o.jsxs(Em,{children:["© ",d," Pranshu Nijhawan • v",zm]}),o.jsx(Yd,{})]})})})},Gd=g(Y.div)`
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
`,Mm=g(Y.div)`
  position: absolute;
  inset: 0;
  transform-origin: center 56%;
`,eu=g(Y.div)`
  position: absolute;
  inset: 0;
`,Co=g(eu)`
  will-change: transform, opacity;
`,kd=g(Co)`
  background: radial-gradient(58% 46% at 50% 58%,
    rgba(22, 192, 212, 0.55) 0%,
    rgba(34, 96, 168, 0.26) 34%,
    rgba(43, 63, 143, 0.12) 52%,
    transparent 72%);

  [data-theme='light'] & {
    background: radial-gradient(50% 42% at 50% 56%,
      rgba(22, 192, 212, 0.26) 0%,
      rgba(22, 192, 212, 0.10) 42%,
      transparent 72%);
  }
`,Dm=g(Co)`
  background: radial-gradient(38% 70% at 50% -6%,
    rgba(150, 220, 240, 0.18) 0%,
    rgba(80, 140, 200, 0.08) 30%,
    transparent 62%);
  mix-blend-mode: screen;

  [data-theme='light'] & {
    mix-blend-mode: normal;
    opacity: 0.35;
  }
`,Cm=g(Co)`
  background: radial-gradient(70% 16% at 50% 70%,
    rgba(22, 192, 212, 0.22) 0%,
    transparent 70%);

  [data-theme='light'] & { opacity: 0.5; }
`,Om=g(eu)``,Um=g(Y.span)`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(190, 235, 245, 0.9), rgba(190, 235, 245, 0) 70%);

  [data-theme='light'] & {
    background: radial-gradient(circle, rgba(22, 192, 212, 0.55), rgba(22, 192, 212, 0) 70%);
  }
`,Qd=g(eu)`
  background: radial-gradient(circle at 50% 54%, transparent 34%, rgba(0, 0, 0, 0.5) 78%, rgba(0, 0, 0, 0.72) 100%);

  [data-theme='light'] & {
    background: radial-gradient(circle at 50% 54%,
      transparent 50%,
      rgba(15, 18, 26, 0.04) 84%,
      rgba(15, 18, 26, 0.08) 100%);
  }
`,Bm=g(eu)`
  opacity: 0.05;
  mix-blend-mode: overlay;

  [data-theme='light'] & { opacity: 0.025; }
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
`,tu=[.16,1,.3,1],_m=({onComplete:d})=>{const x=Dt(),T=H.useMemo(()=>Array.from({length:14},(f,M)=>{const E=(M*9301+49297)%233280/233280,U=(M*4099+1)%977/977;return{left:8+E*84,top:24+U*62,size:1.5+U*3.5,delay:E*2.2,dur:5+E*5,drift:12+U*26}}),[]);return H.useEffect(()=>{const f=setTimeout(d,x?500:1600);return()=>clearTimeout(f)},[x,d]),x?o.jsxs(Gd,{initial:{opacity:1},exit:{opacity:0,transition:{duration:.4}},children:[o.jsx(kd,{animate:{opacity:.8}}),o.jsx(Qd,{})]}):o.jsxs(Gd,{initial:{opacity:1},exit:{opacity:0,transition:{duration:.75,ease:tu}},children:[o.jsxs(Mm,{initial:{scale:1.12},animate:{scale:1},transition:{duration:4,ease:tu},children:[o.jsx(kd,{initial:{opacity:0,scale:.7},animate:{opacity:[0,1,.82,1],scale:[.7,1.02,.99,1.02]},transition:{duration:4.2,times:[0,.32,.66,1],ease:"easeInOut",repeat:1/0,repeatType:"mirror"}}),o.jsx(Dm,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:1.8,ease:tu}}),o.jsx(Cm,{initial:{opacity:0,scaleX:.6},animate:{opacity:1,scaleX:1},transition:{duration:2,delay:.4,ease:tu}}),o.jsx(Om,{children:T.map((f,M)=>o.jsx(Um,{style:{left:`${f.left}%`,top:`${f.top}%`,width:f.size,height:f.size},initial:{opacity:0,y:0},animate:{opacity:[0,.8,0],y:[-f.drift*.3,-f.drift]},transition:{duration:f.dur,delay:f.delay,ease:"easeInOut",repeat:1/0,repeatType:"loop"}},M))})]}),o.jsx(Qd,{}),o.jsx(Bm,{})]})},Xd=new Map;function a0(d){let x=Xd.get(d);return x||(x=typeof d=="string"?Y[d]:Y.create(d),Xd.set(d,x)),x}const Hm=(d,x)=>{switch(d){case"up":return{y:x};case"down":return{y:-x};case"left":return{x};case"right":return{x:-x};default:return{}}},Sl=({children:d,as:x="div",delay:T=0,dist:f=28,dir:M="up",blur:D=!0,amount:E=.3,once:U=!0,className:B,style:w})=>Dt()?H.createElement(x,{className:B,style:w},d):H.createElement(a0(x),{className:B,style:w,initial:{opacity:0,...Hm(M,f),filter:D?"blur(10px)":"blur(0px)"},whileInView:{opacity:1,x:0,y:0,filter:"blur(0px)"},viewport:{once:U,amount:E},transition:{duration:.7,delay:T,ease:[.16,1,.3,1]}},d),Do=({text:d,as:x="span",className:T,delay:f=0,stagger:M=.045,once:D=!0,amount:E=.4})=>{const U=Dt(),B=d.split(" ");if(U)return H.createElement(x,{className:T},d);const w=B.map((k,j)=>o.jsx("span",{"aria-hidden":!0,style:{display:"inline-block",overflow:"hidden",verticalAlign:"top",paddingBottom:"0.12em"},children:o.jsxs(Y.span,{style:{display:"inline-block",willChange:"transform"},variants:{hidden:{y:"110%",opacity:0,filter:"blur(8px)"},visible:{y:"0%",opacity:1,filter:"blur(0px)",transition:{duration:.75,ease:[.16,1,.3,1]}}},children:[k,j<B.length-1?" ":""]})},`${k}-${j}`));return H.createElement(a0(x),{className:T,initial:"hidden",whileInView:"visible",viewport:{once:D,amount:E},variants:{hidden:{},visible:{transition:{staggerChildren:M,delayChildren:f}}}},o.jsx("span",{style:Nm,children:d},"sr"),...w)},Nm={position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0 0 0 0)",whiteSpace:"nowrap",border:0},n0=({children:d,strength:x=.35,className:T,...f})=>{const M=Dt(),D=H.useRef(null),E=Ee(0),U=Ee(0),B=Cn(E,{stiffness:200,damping:18,mass:.6}),w=Cn(U,{stiffness:200,damping:18,mass:.6}),k=q=>{if(M||!D.current)return;const $=D.current.getBoundingClientRect();E.set((q.clientX-($.left+$.width/2))*x),U.set((q.clientY-($.top+$.height/2))*x)},j=()=>{E.set(0),U.set(0)};return o.jsx(Y.div,{ref:D,className:T,onMouseMove:k,onMouseLeave:j,style:{x:M?0:B,y:M?0:w,display:"inline-block"},...f,children:d})},i0=({children:d,className:x,max:T=9,glare:f=!0})=>{const M=Dt(),D=H.useRef(null),E=Ee(0),U=Ee(0),B=Ee(50),w=Ee(50),k=Cn(E,{stiffness:200,damping:20}),j=Cn(U,{stiffness:200,damping:20}),q=Z=>{if(M||!D.current)return;const At=D.current.getBoundingClientRect(),gt=(Z.clientX-At.left)/At.width,P=(Z.clientY-At.top)/At.height;U.set((gt-.5)*T*2),E.set(-(P-.5)*T*2),B.set(gt*100),w.set(P*100)},$=()=>{E.set(0),U.set(0),B.set(50),w.set(50)},Q=zl([B,w],([Z,At])=>`radial-gradient(circle at ${Z}% ${At}%, rgba(var(--accent-rgb),0.18), transparent 55%)`);return o.jsxs(Y.div,{ref:D,className:x,onMouseMove:q,onMouseLeave:$,style:{rotateX:M?0:k,rotateY:M?0:j,transformStyle:"preserve-3d",transformPerspective:900,position:"relative"},children:[d,f&&!M&&o.jsx(Y.span,{"aria-hidden":!0,style:{position:"absolute",inset:0,borderRadius:"inherit",background:Q,pointerEvents:"none",mixBlendMode:"screen"}})]})};function Rm(d=80){const x=H.useRef(null),T=Dt(),{scrollYProgress:f}=On({target:x,offset:["start end","end start"]}),M=zl(f,[0,1],[d,-d]);return{ref:x,y:T?0:M}}const qm=({to:d,suffix:x="",prefix:T="",duration:f=1.6,className:M,play:D=!0})=>{const E=Dt(),U=H.useRef(null),B=H.useRef(null),w=_p(U,{once:!0,amount:.6});return H.useEffect(()=>{if(!w||!D)return;const k=B.current;if(!k)return;let j=-1;const q=Oa(0,d,{duration:E?.001:f,ease:[.16,1,.3,1],onUpdate:$=>{const Q=Math.round($);Q!==j&&(j=Q,k.textContent=String(Q))}});return()=>q.stop()},[w,D,d,f,E]),o.jsxs("span",{ref:U,className:M,children:[T,o.jsx("span",{ref:B,children:"0"}),x]})},Ym=g.section`
  position: relative;
  z-index: 1;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${L.belowTablet} {
    min-height: auto;
    justify-content: flex-start;
  }
`,Gm=g(Y.div)`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  padding-top: clamp(120px, 18vh, 200px);
  padding-bottom: clamp(48px, 8vh, 96px);

  ${L.belowTablet} {
    padding-top: clamp(40px, 11vw, 72px);
    padding-bottom: 24px;
  }

  ${L.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,km=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;

  ${L.belowTablet} {
    gap: 12px;
  }

  ${L.tablet} {
    grid-template-columns: 1.08fr 0.92fr;
  }
`,Qm=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Xm=g.h1`
  font-family: ${at.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.045em;
  line-height: 0.88;
  font-size: clamp(54px, 9.5vw, 116px);
  margin-bottom: 26px;
`,Ld=g.span`
  display: block;
  overflow: hidden;
  padding-bottom: 0.06em;
`,Lm=g(Y.p)`
  font-family: ${at.display};
  font-weight: 500;
  font-size: clamp(19px, 2.5vw, 27px);
  letter-spacing: -0.02em;
  line-height: 1.12;
  color: var(--ink);
  margin-bottom: 22px;

  em { font-style: normal; color: var(--accent-ink); }
`,Vm=g(Y.p)`
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
    transition: color 0.3s var(--ease-out), text-decoration-color 0.3s var(--ease-out);
  }
  a:hover { color: var(--accent-ink); text-decoration-color: var(--accent); }
`,Zm=g(Y.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`,Km=g(Y.a)`
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

  svg { width: 17px; height: 17px; transition: transform 0.3s var(--ease-out); }
  &:hover svg { transform: translateX(4px); }
`,Jm=g(Y.a)`
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
`,$m=g(Y.div)`
  position: relative;
  display: flex;
  justify-content: center;
  ${L.belowTablet} { order: -1; }
`,Wm=g.div`
  position: relative;
  width: min(440px, 78vw);
  aspect-ratio: 1 / 1;
`,Fm=g.div`
  position: absolute;
  inset: 4% 6% 2% 6%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(var(--accent-rgb), 0.13), transparent 72%);
  filter: blur(48px);
  z-index: -1;
`,Im=g.div`
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
`,Pm=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`,tg=g.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
  padding-bottom: clamp(40px, 7vh, 88px);

  ${L.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,eg=g(Y.ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(28px, 4vw, 60px);
  list-style: none;
  margin: 0;
  padding: 0;

  ${L.mobile} { grid-template-columns: repeat(4, 1fr); }
`,lg=g(Y.li)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ag=g(Y.span)`
  height: 2px;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 10px;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 12%, transparent));
`,ng=g.span`
  font-family: ${at.display};
  font-weight: 600;
  font-size: clamp(34px, 5vw, 56px);
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1;
`,ig=g.span`
  font-family: ${at.mono};
  font-size: 11.5px;
  color: var(--ink-3);
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,ug=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})}),cg=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),og=[{to:10,prefix:"",suffix:"+",label:"Years"},{to:65,prefix:"",suffix:"+",label:"Engineers Led"},{to:2,prefix:"$",suffix:"M+",label:"Savings"},{to:15,prefix:"",suffix:"+",label:"Products"}],sg=({data:d,start:x=!0})=>{const T=Dt(),{scrollTo:f}=Fd(),{ref:M,y:D}=Rm(56),E=H.useRef(null),{scrollYProgress:U}=On({target:E,offset:["start start","end start"]}),B=zl(U,[0,1],[0,-110]),w=zl(U,[0,.75],[1,0]),[k,...j]=d.name.split(" "),q=j.join(" "),$=0,Q=[.16,1,.3,1],Z=gt=>({initial:T?{opacity:0}:{y:"110%"},animate:x?T?{opacity:1}:{y:"0%"}:T?{opacity:0}:{y:"110%"},transition:{duration:.9,delay:x?$+gt:0,ease:[.16,1,.3,1]}}),At=gt=>({initial:T?{opacity:0}:{opacity:0,y:18,filter:"blur(8px)"},animate:x?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:T?0:18,filter:T?"blur(0px)":"blur(8px)"},transition:{duration:.7,delay:x?$+gt:0,ease:[.16,1,.3,1]}});return o.jsxs(Ym,{id:"home",ref:E,children:[o.jsx(Gm,{style:T?void 0:{y:B,opacity:w},children:o.jsxs(km,{children:[o.jsxs(Qm,{children:[o.jsxs(Xm,{"aria-label":d.name,children:[o.jsx(Ld,{"aria-hidden":!0,children:o.jsx(Y.span,{style:{display:"block"},...Z(.15),children:k})}),o.jsx(Ld,{"aria-hidden":!0,children:o.jsx(Y.span,{style:{display:"block",color:"var(--accent-ink)"},...Z(.27),children:q})})]}),o.jsx(Lm,{...At(.34),children:d.designation}),o.jsxs(Vm,{...At(.45),children:["Enterprise Architect of"," ",o.jsx("a",{href:"https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview",target:"_blank",rel:"noopener noreferrer",children:"Periscope"}),"'s"," ",o.jsx("a",{href:"https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance",target:"_blank",rel:"noopener noreferrer",children:"Promotion Advisor"})," ","at"," ",o.jsx("a",{href:"https://www.linkedin.com/company/mckinsey/",target:"_blank",rel:"noopener noreferrer",children:"McKinsey"}),", building agentic AI and high-throughput data platforms."]}),o.jsxs(Zm,{...At(.58),children:[o.jsx(n0,{strength:.4,style:{display:"inline-block"},children:o.jsxs(Km,{href:"#contact",onClick:gt=>{gt.preventDefault(),Id(f,"contact")},whileHover:{scale:1.04},whileTap:{scale:.97},children:["Get in touch ",o.jsx(ug,{})]})}),o.jsxs(Jm,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.97},children:[o.jsx(cg,{})," Download resume"]})]})]}),o.jsx($m,{ref:M,style:{y:D},children:o.jsx(Y.div,{initial:T?{opacity:0}:{opacity:0,scale:.92,filter:"blur(14px)"},animate:x?{opacity:1,scale:1,filter:"blur(0px)"}:{opacity:0},transition:{duration:1,delay:x?$+.4:0,ease:[.16,1,.3,1]},children:o.jsx(i0,{max:6,glare:!1,children:o.jsxs(Wm,{children:[o.jsx(Fm,{}),o.jsx(Im,{children:o.jsx(Pm,{src:"/images/profile.webp",alt:d.name,width:440,height:440,loading:"eager",decoding:"async"})})]})})})})]})}),o.jsx(tg,{children:o.jsx(eg,{initial:T?!1:"hidden",animate:T?void 0:x?"visible":"hidden",variants:{hidden:{},visible:{transition:{staggerChildren:.12,delayChildren:$+.2}}},children:og.map(gt=>o.jsxs(lg,{variants:{hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.6,ease:Q}}},children:[o.jsx(ag,{variants:{hidden:{scaleX:0},visible:{scaleX:1,transition:{duration:.8,ease:Q}}}}),o.jsx(ng,{children:o.jsx(qm,{to:gt.to,prefix:gt.prefix,suffix:gt.suffix,play:x})}),o.jsx(ig,{children:gt.label})]},gt.label))})})]})},Vd={prose:"var(--maxw-prose)",content:"var(--maxw-content)",wide:"var(--maxw-wide)",full:"var(--maxw-full)"},Al=g.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,Tl=g.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--gutter);
  max-width: calc(${({$max:d="content"})=>Vd[d]} + var(--gutter) * 2);

  ${L.desktop} {
    max-width: calc((100vw + ${({$max:d="content"})=>Vd[d]} + var(--gutter) * 2) / 2);
  }
`,fg=g.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${at.mono};
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
`,rg=g.h2`
  font-family: ${at.display};
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.03em;
  line-height: 0.98;
  font-size: clamp(38px, 7vw, 84px);
`,dg=g.p`
  color: var(--ink-2);
  font-size: clamp(17px, 2.1vw, 21px);
  line-height: 1.6;
  max-width: 60ch;
`,hg=g.span`
  display: block;
  height: 2px;
  width: 64px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-hot));
  transform-origin: left;
`,pg=g(Y.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 56px;
  align-items: ${({$align:d})=>d==="center"?"center":"flex-start"};
  text-align: ${({$align:d})=>d==="center"?"center":"left"};
  ${L.tablet} { margin-bottom: 80px; }
`,Je=({title:d,kicker:x,lead:T,align:f="left",leadFull:M=!1})=>{const D=Dt(),E=H.useRef(null),{scrollYProgress:U}=On({target:E,offset:["start end","end start"]}),B=zl(U,[0,1],[D?0:30,D?0:-30]);return o.jsxs(pg,{ref:E,$align:f,style:D?void 0:{y:B},children:[x&&o.jsx(Y.div,{initial:D?!1:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.6},transition:{duration:.5,ease:[.16,1,.3,1]},children:o.jsx(fg,{children:x})}),o.jsx(Do,{as:rg,text:d}),o.jsx(Y.div,{style:{transformOrigin:f==="center"?"center":"left"},initial:D?!1:{scaleX:0,opacity:0},whileInView:{scaleX:1,opacity:1},viewport:{once:!0,amount:.6},transition:{duration:.7,delay:.15,ease:[.16,1,.3,1]},children:o.jsx(hg,{})}),T&&o.jsx(Y.div,{initial:D?!1:{opacity:0,y:16,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.5},transition:{duration:.7,delay:.2,ease:[.16,1,.3,1]},children:o.jsx(dg,{style:{...f==="center"?{marginInline:"auto"}:{},...M?{maxWidth:"none"}:{}},children:T})})]})},mg=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}],gg=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 8px;

  ${L.tablet} {
    grid-template-columns: 0.42fr 0.58fr;
    gap: 80px;
  }
`,vg=g.div`
  ${L.tablet} { position: sticky; top: 120px; height: max-content; }
`,yg=g.span`
  font-family: ${at.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-ink);
  display: block;
  margin-bottom: 18px;
`,bg=g.p`
  font-family: ${at.display};
  font-weight: 500;
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--ink);
`,xg=g.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  p {
    font-size: clamp(16px, 1.8vw, 18px);
    line-height: 1.75;
    color: var(--ink-2);
    max-width: 65ch;
  }
`,Sg=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 72px;

  ${L.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }
`,Oo=g.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: var(--r-xl);
  border: 1px solid var(--line);
  background: var(--surface);
  padding: 30px 28px;
  overflow: hidden;
  transition: border-color 0.3s var(--ease-out), background 0.3s var(--ease-out);

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
    transition: transform 0.45s var(--ease-out);
  }
  &:hover::before { transform: scaleX(1); }

  ${L.tablet} {
    &:first-child { grid-row: span 2; }
  }
`,zg=g.span`
  font-family: ${at.mono};
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--accent-ink);
`,Ag=g.h3`
  font-family: ${at.display};
  font-size: clamp(18px, 1.9vw, 21px);
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  line-height: 1.2;

  ${Oo}:first-child & {
    ${L.tablet} { font-size: clamp(22px, 2.6vw, 28px); }
  }
`,Tg=g.p`
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ink-3);

  ${Oo}:first-child & {
    ${L.tablet} { font-size: 15.5px; }
  }
`,jg=g.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`,Eg=g(Y.a)`
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
`,wg=({data:d})=>{const x=d.content.slice(0,3).map(T=>T.replace(/^🔹\s*/,"").trim());return o.jsx(Al,{id:"about",children:o.jsxs(Tl,{$max:"wide",children:[o.jsx(Je,{title:"About",lead:x[0],leadFull:!0}),o.jsxs(gg,{children:[o.jsx(vg,{children:o.jsxs(Sl,{dir:"up",children:[o.jsx(yg,{children:"The throughline"}),o.jsx(bg,{children:"Technical depth, measured in business outcomes."})]})}),o.jsxs(xg,{children:[o.jsx(Sl,{dir:"up",delay:.05,children:o.jsx("p",{children:x[1]})}),o.jsx(Sl,{dir:"up",delay:.12,children:o.jsx("p",{children:x[2]})})]})]}),o.jsx(Sg,{children:mg.map((T,f)=>o.jsxs(Sl,{as:Oo,dir:"up",delay:f*.08,children:[o.jsx(zg,{children:String(f+1).padStart(2,"0")}),o.jsx(Ag,{children:T.title}),o.jsx(Tg,{children:T.text})]},T.title))}),o.jsx(jg,{children:o.jsx(n0,{strength:.3,style:{display:"inline-block"},children:o.jsxs(Eg,{href:d.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.04},whileTap:{scale:.97},children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 3v12M7 10l5 5 5-5M5 21h14"})}),d.buttonProps.name]})})})]})})},Zd=[.16,1,.3,1],Mg=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 5vh, 64px) clamp(48px, 6vw, 96px);
  margin-top: clamp(40px, 6vh, 72px);

  ${L.tablet} { grid-template-columns: repeat(2, 1fr); }
`,Dg=g(Y.div)`
  display: flex;
  flex-direction: column;
`,Cg=g.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px solid var(--line);
`,Og=g.h3`
  font-family: ${at.display};
  font-size: clamp(18px, 2vw, 23px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.1;
`,Ug=g.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Bg=g.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`,_g=g.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,Hg=g.span`
  font-size: 14.5px;
  color: var(--ink);
  line-height: 1.25;
`,Ng=g.span`
  font-family: ${at.mono};
  font-size: 12.5px;
  color: var(--ink-3);
  flex-shrink: 0;
`,Rg=g.div`
  position: relative;
  height: 4px;
  border-radius: 4px;
  background: var(--line);
  overflow: hidden;
`,qg=g(Y.span)`
  position: absolute;
  inset: 0;
  border-radius: 4px;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), var(--accent-ink));
`,Yg=({data:d})=>{const x=Dt();return o.jsx(Al,{id:"technologyproficiency",children:o.jsxs(Tl,{$max:"wide",children:[o.jsx(Je,{title:"Skills",lead:"The stack behind agentic AI systems, billion-row analytics, and platforms that stay up while they scale."}),o.jsx(Mg,{children:d.skills.map(T=>o.jsxs(Dg,{initial:x?!1:{opacity:0,y:26},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6,ease:Zd},children:[o.jsx(Cg,{children:o.jsx(Og,{children:T.category})}),o.jsx(Ug,{children:T.skills.map((f,M)=>o.jsxs(Bg,{children:[o.jsxs(_g,{children:[o.jsx(Hg,{children:f.name}),o.jsxs(Ng,{children:[f.percentage,"%"]})]}),o.jsx(Rg,{children:o.jsx(qg,{initial:x?{scaleX:f.percentage/100}:{scaleX:0},whileInView:{scaleX:f.percentage/100},viewport:{once:!0,amount:.8},transition:{duration:.9,delay:.1+M*.06,ease:Zd}})})]},f.name))})]},T.category))})]})})},Gg=g.div`
  position: relative;
  padding-left: 30px;
  ${L.tablet} { padding-left: 220px; }
`,kg=g.span`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: var(--line);
  ${L.tablet} { left: 188px; }
`,Qg=g(Y.span)`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 2px;
  background: linear-gradient(var(--accent), var(--accent-hot));
  transform-origin: top;
  ${L.tablet} { left: 188px; }
`,Xg=g(Y.div)`
  position: relative;
  padding: 0 0 56px;
  &:last-child { padding-bottom: 0; }
`,Lg=g.span`
  position: absolute;
  top: 7px;
  left: -30px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-elev);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 4px var(--bg), 0 0 14px rgba(var(--accent-rgb), 0.5);
  ${L.tablet} { left: -38px; }
`,Vg=g.span`
  font-family: ${at.mono};
  font-size: 13px;
  color: var(--ink-3);
  letter-spacing: 0.02em;
  display: block;
  margin-bottom: 8px;

  ${L.tablet} {
    position: absolute;
    left: -220px;
    top: 4px;
    width: 168px;
    text-align: right;
    margin-bottom: 0;
  }
`,Zg=g.h3`
  font-family: ${at.display};
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
`,Kg=g.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--accent-ink);
  margin-bottom: 2px;
`,Jg=g.p`
  font-size: 13.5px;
  color: var(--ink-3);
  font-style: italic;
  margin-bottom: 16px;
`,$g=g.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--ink-2);

  a { color: var(--accent-ink); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--line-2); }
  a:hover { text-decoration-color: var(--accent); }
`,Wg=g.button`
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
`,Fg=g.span`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  vertical-align: bottom;
`,Ig=g(Y.span)`
  display: inline-block;
  white-space: nowrap;
`,Pg=g(Y.div)`
  display: grid;
  overflow: hidden;
`,tv=g.div`
  min-height: 0;
  overflow: hidden;
`,ev=g.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
`,lv=g.li`
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
`,av=({data:d})=>{const x=Dt(),T=H.useRef(null),[f,M]=H.useState(new Set),{scrollYProgress:D}=On({target:T,offset:["start 60%","end 60%"]}),E=zl(D,[0,1],[0,1]),U=Cn(E,{stiffness:140,damping:30,mass:.4}),B=w=>M(k=>{const j=new Set(k);return j.has(w)?j.delete(w):j.add(w),j});return o.jsx(Al,{id:"professionalexperience",children:o.jsxs(Tl,{$max:"wide",children:[o.jsx(Je,{title:"Experience",lead:"A decade across enterprise SaaS, from shipping features to owning platform architecture for global consulting clients."}),o.jsxs(Gg,{ref:T,children:[o.jsx(kg,{}),!x&&o.jsx(Qg,{style:{scaleY:U}}),d.timeline.map((w,k)=>{const j=f.has(k);return o.jsxs(Xg,{initial:x?!1:{opacity:0,x:-24,filter:"blur(6px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.6,ease:[.16,1,.3,1]},children:[o.jsx(Lg,{}),o.jsx(Vg,{children:w.date}),o.jsx(Zg,{children:o.jsx("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",children:w.title})}),o.jsx(Kg,{children:w.subTitle}),w.previously&&o.jsxs(Jg,{children:["Previously: ",w.previously]}),o.jsx($g,{dangerouslySetInnerHTML:{__html:w.descriptionSummary}}),w.achievements&&w.achievements.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs(Wg,{"data-open":j,onClick:()=>B(k),"aria-expanded":j,children:[o.jsx("span",{children:"Show"}),o.jsx(Fg,{children:o.jsx(Dn,{mode:"popLayout",initial:!1,children:o.jsx(Ig,{initial:{y:"100%",opacity:0},animate:{y:"0%",opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.3,ease:[.16,1,.3,1]},children:j?"Less":"More"},j?"less":"more")})}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M6 9l6 6 6-6"})})]}),o.jsx(Dn,{initial:!1,children:j&&o.jsx(Pg,{initial:{gridTemplateRows:"0fr",opacity:0},animate:{gridTemplateRows:"1fr",opacity:1},exit:{gridTemplateRows:"0fr",opacity:0},transition:{gridTemplateRows:{duration:.45,ease:[.16,1,.3,1]},opacity:{duration:.3,ease:[.16,1,.3,1]}},children:o.jsx(tv,{children:o.jsx(ev,{children:w.achievements.map((q,$)=>o.jsxs(lv,{children:[o.jsx("strong",{children:q.title}),": ",q.description]},$))})})})})]})]},k)})]})]})})};function nv(d){const x=H.useCallback(M=>{const D=window.matchMedia(d);return D.addEventListener("change",M),()=>D.removeEventListener("change",M)},[d]),T=H.useCallback(()=>window.matchMedia(d).matches,[d]),f=H.useCallback(()=>!1,[]);return H.useSyncExternalStore(x,T,f)}const u0=g.div`
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
`,iv=g.h3`
  font-family: ${at.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.12;
  margin-bottom: 20px;
`,uv=g.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;
`,cv=g.li`
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
`,ov=g.section`
  position: relative;
  --rail: max(var(--gutter), calc((100vw - var(--maxw-wide)) / 2));

  ${L.desktop} {
    --rail: calc((100vw - var(--maxw-wide) - var(--gutter) * 2) / 4 + var(--gutter));
  }
`,sv=g.div`
  position: sticky;
  top: 0;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`,fv=g.div`
  padding-inline: var(--rail);
  margin: 0 0 40px;
  width: 100%;
`,rv=g(Y.div)`
  display: flex;
  gap: 26px;
  padding: 0 var(--rail) 8px;
  will-change: transform;

  ${u0} { width: min(440px, 82vw); }
`,dv=g.div`
  margin: 30px var(--rail) 0;
  height: 2px;
  background: var(--line);
  border-radius: 2px;
  overflow: hidden;
`,hv=g(Y.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-hot));
  transform-origin: left;
`,pv=g.section`
  position: relative;
  z-index: 1;
  padding-block: clamp(110px, 16vh, 200px);
`,mv=g.div`
  width: 100%;
  max-width: calc(var(--maxw-wide) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);

  ${L.desktop} {
    max-width: calc((100vw + var(--maxw-wide) + var(--gutter) * 2) / 2);
  }
`,gv=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${L.mobile} { grid-template-columns: repeat(2, 1fr); }
`,c0=({title:d,content:x})=>o.jsxs(u0,{children:[o.jsx(iv,{children:d}),o.jsx(uv,{children:x.slice(0,4).map((T,f)=>o.jsx(cv,{children:T},f))})]}),o0="The systems I would put my name on, with the numbers that came with them.",vv=({data:d})=>{const x=H.useRef(null),T=H.useRef(null),[f,M]=H.useState(0),{scrollYProgress:D}=On({target:x,offset:["start start","end end"]}),E=zl(D,[0,1],[0,-f]),U=zl(D,[0,1],[0,1]);return H.useLayoutEffect(()=>{const B=()=>{const w=T.current;w&&M(Math.max(0,w.scrollWidth-window.innerWidth+48))};return B(),window.addEventListener("resize",B,{passive:!0}),()=>window.removeEventListener("resize",B)},[]),o.jsx(ov,{id:"mostproudof",ref:x,style:{height:`calc(100dvh + ${f}px)`},children:o.jsxs(sv,{children:[o.jsx(fv,{children:o.jsx(Je,{title:"Most Proud Of",lead:o0})}),o.jsx(rv,{ref:T,style:{x:E},children:d.content.map(B=>o.jsx(c0,{title:B.title,content:B.content},B.id))}),o.jsx("div",{style:{width:"100%"},children:o.jsx(dv,{children:o.jsx(hv,{style:{scaleX:U}})})})]})})},yv=({data:d})=>o.jsx(pv,{id:"mostproudof",children:o.jsxs(mv,{children:[o.jsx(Je,{title:"Most Proud Of",lead:o0}),o.jsx(gv,{children:d.content.map((x,T)=>o.jsx(Sl,{dir:"up",delay:T%2*.06,children:o.jsx(c0,{title:x.title,content:x.content})},x.id))})]})}),bv=({data:d})=>{const x=Dt();return nv("(min-width: 1024px)")&&!x?o.jsx(vv,{data:d}):o.jsx(yv,{data:d})},xv=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  ${L.mobile} { grid-template-columns: repeat(3, 1fr); gap: 20px; }
`,Sv=g(Y.div)`
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
`,zv=g.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${at.mono};
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--accent-ink);
  margin-bottom: 18px;

  span.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
`,Av=g.h3`
  font-family: ${at.display};
  font-size: clamp(18px, 1.8vw, 21px);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: var(--ink);
  margin-bottom: auto;
`,Tv=g.a`
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
`,jv=d=>{const x=d.toLowerCase();return x.includes("azure")||x.includes("microsoft")?"Microsoft":x.includes("aws")?"Amazon Web Services":"Credential"},Ev=({data:d})=>{const x=Dt();return o.jsx(Al,{id:"certifications",children:o.jsxs(Tl,{$max:"wide",children:[o.jsx(Je,{title:"Certifications",lead:"Cloud and data credentials across Azure and AWS, kept current."}),o.jsx(xv,{children:d.certificateProps.certificateMetaData.map((T,f)=>o.jsx(i0,{max:9,children:o.jsxs(Sv,{initial:x?!1:{opacity:0,y:28,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.3},transition:{duration:.6,delay:f*.1,ease:[.16,1,.3,1]},children:[o.jsxs(zv,{children:[o.jsx("span",{className:"dot"}),jv(T.title)]}),o.jsx(Av,{children:T.title}),o.jsxs(Tv,{href:T.buttonProps.link,target:"_blank",rel:"noopener noreferrer",children:["Verify credential",o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),o.jsx("path",{d:"M15 3h6v6M10 14L21 3"})]})]})]})},f))})]})})},wv=[.16,1,.3,1],Mv=7e3,Dv=g.div`
  max-width: 900px;
`,Cv=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`,Ov=g.span`
  font-family: ${at.mono};
  font-size: 12.5px;
  letter-spacing: 0.14em;
  color: var(--ink-3);

  em { font-style: normal; color: var(--accent-ink); }
`,Uv=g.div`
  display: flex;
  gap: 10px;
`,Kd=g(Y.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--r-pill);
  border: 1px solid var(--line-2);
  background: var(--surface);
  color: var(--ink-2);
  transition: color 0.25s var(--ease-out), border-color 0.25s var(--ease-out), background 0.25s var(--ease-out);

  svg { width: 18px; height: 18px; }
  &:hover { color: var(--ink); border-color: var(--accent); background: var(--accent-soft); }
`,Bv=g.div`
  position: relative;
`,_v=g(Y.figure)`
  will-change: transform, opacity;
  cursor: grab;
  &:active { cursor: grabbing; }
`,Hv=g.blockquote`
  position: relative;
  padding-left: clamp(22px, 3vw, 38px);
  font-family: ${at.display};
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
`,Nv=g.figcaption`
  margin-top: clamp(30px, 4.5vh, 48px);
  padding-left: clamp(22px, 3vw, 38px);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Rv=g.span`
  font-weight: 600;
  font-size: 16px;
  color: var(--ink);
`,qv=g.span`
  font-size: 14px;
  color: var(--ink-3);

  em {
    font-style: normal;
    font-family: ${at.mono};
    font-size: 11.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-ink);
  }
`,Yv=g.div`
  display: flex;
  gap: 10px;
  margin-top: clamp(34px, 5vh, 48px);
  padding-left: clamp(22px, 3vw, 38px);
`,Gv=g.button`
  height: 8px;
  width: ${({$active:d})=>d?"28px":"8px"};
  border-radius: var(--r-pill);
  background: ${({$active:d})=>d?"var(--accent)":"var(--line-2)"};
  transition: width 0.35s var(--ease-out), background 0.25s var(--ease-out);

  &:hover { background: ${({$active:d})=>d?"var(--accent)":"var(--ink-3)"}; }
`,kv=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M15 6l-6 6 6 6"})}),Qv=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 6l6 6-6 6"})}),Xv=({data:d})=>{const x=Dt(),T=d.quoteProps.quoteMetaData,f=T.length,[[M,D],E]=H.useState([0,0]),[U,B]=H.useState(!1),w=H.useCallback((Q,Z)=>{E([(Q%f+f)%f,Z])},[f]),k=H.useCallback(Q=>w(M+Q,Q),[w,M]);if(H.useEffect(()=>{if(x||f<=1||U)return;const Q=setInterval(()=>E(([Z])=>[(Z+1)%f,1]),Mv);return()=>clearInterval(Q)},[x,f,U]),f===0)return null;const j=T[M],q=f>1,$={enter:Q=>({opacity:0,x:x?0:Q*40,filter:"blur(8px)"}),center:{opacity:1,x:0,filter:"blur(0px)"},exit:Q=>({opacity:0,x:x?0:-Q*40,filter:"blur(8px)"})};return o.jsx(Al,{id:"testimonials",children:o.jsxs(Tl,{$max:"wide",children:[o.jsx(Je,{title:"Testimonials",lead:"Words from people I have built alongside."}),o.jsxs(Dv,{onMouseEnter:()=>B(!0),onMouseLeave:()=>B(!1),onFocusCapture:()=>B(!0),onBlurCapture:()=>B(!1),children:[q&&o.jsxs(Cv,{children:[o.jsxs(Ov,{children:[o.jsx("em",{children:String(M+1).padStart(2,"0")})," / ",String(f).padStart(2,"0")]}),o.jsxs(Uv,{children:[o.jsx(Kd,{onClick:()=>k(-1),"aria-label":"Previous testimonial",whileTap:{scale:.92},children:o.jsx(kv,{})}),o.jsx(Kd,{onClick:()=>k(1),"aria-label":"Next testimonial",whileTap:{scale:.92},children:o.jsx(Qv,{})})]})]}),o.jsx(Bv,{"aria-live":"polite","aria-roledescription":"carousel",children:o.jsx(Dn,{mode:"wait",custom:D,initial:!1,children:o.jsxs(_v,{custom:D,variants:$,initial:"enter",animate:"center",exit:"exit",transition:{duration:.55,ease:wv},drag:q&&!x?"x":!1,dragConstraints:{left:0,right:0},dragElastic:.18,onDragEnd:(Q,Z)=>{Z.offset.x<-60?k(1):Z.offset.x>60&&k(-1)},children:[o.jsxs(Hv,{children:["“",j.quote,"”"]}),o.jsxs(Nv,{children:[o.jsx(Rv,{children:j.givenBy}),o.jsxs(qv,{children:[j.subTitleGivenBy,j.source&&o.jsxs(o.Fragment,{children:["  ·  ",o.jsxs("em",{children:["via ",j.source]})]})]})]})]},M)})}),q&&o.jsx(Yv,{role:"tablist","aria-label":"Select testimonial",children:T.map((Q,Z)=>o.jsx(Gv,{$active:Z===M,onClick:()=>w(Z,Z>M?1:-1),role:"tab","aria-selected":Z===M,"aria-label":`Testimonial ${Z+1}`},Z))})]})]})})},Lv="7253276225333293056",Vv=`https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${Lv}`,Zv="https://www.linkedin.com/posts/mckinsey-india_mckinseycareer-journeypranshu-ugcPost-7253276225333293056-sdOl/",Kv=g.div`
  position: relative;
  max-width: 560px;
  border-radius: var(--r-xl);
  border: 1px solid var(--line);
  background: var(--surface);
  overflow: hidden;
  transition: border-color 0.3s var(--ease-out), background 0.3s var(--ease-out);

  &:hover { border-color: var(--line-2); }
`,Jv=g.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
`,$v=g.span`
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
`,Wv=g.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,Fv=g.span`
  font-family: ${at.mono};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
`,Iv=g.span`
  font-family: ${at.display};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
`,Pv=g.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-ink);
  padding: 8px 14px;
  border-radius: var(--r-pill);
  border: 1px solid var(--line-2);
  background: var(--surface);
  transition: border-color 0.3s var(--ease-out), background 0.3s var(--ease-out);

  svg { width: 14px; height: 14px; transition: transform 0.3s var(--ease-out); }
  &:hover { border-color: var(--accent); background: var(--accent-soft); }
  &:hover svg { transform: translate(3px, -3px); }

  ${L.belowMobile} {
    span { display: none; }
    padding: 8px;
  }
`,t1=g.div`
  position: relative;
  height: 640px;
  background: #ffffff;

  ${L.belowMobile} { height: 600px; }
`,e1=g.iframe`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  opacity: ${({$loaded:d})=>d?1:0};
  transition: opacity 0.5s var(--ease-out);
`,l1=qp`
  0% { background-position: -460px 0; }
  100% { background-position: 460px 0; }
`,a1=g.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 22px;
  background: #ffffff;

  &::before {
    content: '';
    height: 44px;
    border-radius: var(--r-md);
    background: #eef1f4;
  }
  &::after {
    content: '';
    flex: 1;
    border-radius: var(--r-md);
    background:
      ${({$reduce:d})=>d?"#eef1f4":"linear-gradient(100deg, #eef1f4 30%, #f6f8fa 50%, #eef1f4 70%)"};
    background-size: 920px 100%;
    animation: ${({$reduce:d})=>d?"none":l1} 1.4s ease-in-out infinite;
  }
`,n1=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M7 17L17 7M9 7h8v8"})}),i1=()=>{const d=Dt(),x=H.useRef(null),[T,f]=H.useState(!1),[M,D]=H.useState(!1);return H.useEffect(()=>{const E=x.current;if(!E)return;const U=new IntersectionObserver(([B])=>{B.isIntersecting&&(f(!0),U.disconnect())},{rootMargin:"400px 0px"});return U.observe(E),()=>U.disconnect()},[]),o.jsx(Al,{id:"featured",children:o.jsxs(Tl,{$max:"content",children:[o.jsx(Je,{title:"Featured",lead:"McKinsey India on my journey building AI-driven, forward-thinking solutions for clients across industries."}),o.jsx(Sl,{dir:"up",children:o.jsxs(Kv,{children:[o.jsxs(Jv,{children:[o.jsx($v,{children:o.jsx(e0,{})}),o.jsxs(Wv,{children:[o.jsx(Fv,{children:"Featured on LinkedIn"}),o.jsx(Iv,{children:"McKinsey India"})]}),o.jsxs(Pv,{href:Zv,target:"_blank",rel:"noopener noreferrer","aria-label":"View the McKinsey India post on LinkedIn",children:[o.jsx("span",{children:"View post"}),o.jsx(n1,{})]})]}),o.jsxs(t1,{ref:x,children:[T&&o.jsx(e1,{src:Vv,title:"McKinsey India feature on Pranshu Nijhawan's career journey",loading:"lazy",allowFullScreen:!0,$loaded:M,onLoad:()=>D(!0)}),!M&&o.jsx(a1,{$reduce:!!d,"aria-hidden":!0})]})]})})]})})},u1=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid var(--line);

  ${L.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 56px;
  }
`,c1=g(Y.div)`
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 8px;
`,o1=g.span`
  font-family: ${at.mono};
  font-size: 13px;
  color: var(--accent-ink);
  letter-spacing: 0.02em;
`,s1=g.h3`
  font-family: ${at.display};
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.15;
`,f1=g.p`
  font-size: 15px;
  color: var(--ink-2);
  line-height: 1.5;
`,r1=({data:d})=>{const x=Dt();return o.jsx(Al,{id:"educationalqualifications",children:o.jsxs(Tl,{$max:"wide",children:[o.jsx(Je,{title:"Education"}),o.jsx(u1,{children:d.timeline.map((T,f)=>o.jsxs(c1,{initial:x?!1:{opacity:0,y:22,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.55,delay:f%2*.08,ease:[.16,1,.3,1]},children:[o.jsx(o1,{children:T.date}),o.jsx(s1,{children:T.title}),o.jsx(f1,{children:T.subTitle})]},f))})]})})},d1=g.h2`
  font-family: ${at.display};
  font-weight: 600;
  font-size: clamp(40px, 7.5vw, 88px);
  letter-spacing: -0.035em;
  line-height: 0.96;
  color: var(--ink);
  margin-bottom: 26px;

  em { font-style: normal; color: var(--accent-ink); }
`,h1=g.p`
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.6;
  color: var(--ink-2);
  max-width: 50ch;
  margin-bottom: 64px;
`,p1=g.div`
  border-top: 1px solid var(--line);
`,s0=g(Y.a)`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 26px 4px;
  border-bottom: 1px solid var(--line);
  transition: padding-left 0.35s var(--ease-out);

  &:hover { padding-left: 16px; }
`,m1=g.span`
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
`,g1=g.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
  flex: 1;
`,v1=g.span`
  font-family: ${at.mono};
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
`,y1=g.span`
  font-family: ${at.display};
  font-size: clamp(18px, 2.4vw, 24px);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,b1=g.span`
  flex-shrink: 0;
  color: var(--ink-3);
  transition: transform 0.3s var(--ease-out), color 0.3s var(--ease-out);
  svg { width: 20px; height: 20px; }

  ${s0}:hover & { color: var(--accent-ink); transform: translate(4px, -4px); }
`,x1={email:o.jsx(t0,{}),phone:o.jsx(um,{}),linkedin:o.jsx(e0,{}),location:o.jsx(cm,{})},S1=({data:d})=>{const x=Dt();return o.jsx(Al,{id:"contact",children:o.jsxs(Tl,{$max:"wide",children:[o.jsx(Sl,{dir:"up",children:o.jsxs(d1,{children:[o.jsx(Do,{text:"Let's build something"}),o.jsx("br",{}),o.jsx("em",{children:o.jsx(Do,{text:"that scales.",delay:.15})})]})}),o.jsx(Sl,{dir:"up",delay:.1,children:o.jsx(h1,{children:"Architecture, agentic AI, or platform performance. If it needs to work at scale, I want to hear about it."})}),o.jsx(p1,{children:d.contactMetaData.map((T,f)=>{const M=T.icon.toLowerCase(),D=T.href.startsWith("http");return o.jsxs(s0,{href:T.href,target:D?"_blank":void 0,rel:D?"noopener noreferrer":void 0,initial:x?!1:{opacity:0,y:20,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.4},transition:{duration:.5,delay:f*.07,ease:[.16,1,.3,1]},children:[o.jsx(m1,{children:x1[M]??o.jsx(t0,{})}),o.jsxs(g1,{children:[o.jsx(v1,{children:M==="email"?"Email":T.icon}),o.jsx(y1,{children:T.content})]}),o.jsx(b1,{children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M7 17L17 7M9 7h8v8"})})})]},f)})})]})})},z1={sectionTitle:"About Me",content:["🔹  I own the architecture of Promotion Advisor end to end, McKinsey Periscope's flagship multi-tenant SaaS: the planning application, the Analytics Engine, and the agentic layer. That includes the security model, the GitOps configuration framework, polyglot persistence, ETL, the reporting engine, and the external API surface.","My recent work is agentic architecture across an MCP mesh. I co-built Platform AI, Periscope's enterprise agent platform, then built Cortex so business logic stays compiled and deterministic rather than authored in prompts, and the Context-Scoped Catalog so tool discovery stays accurate however large the tool fleet grows.","Underneath that I build the data systems: billion-row sub-second analytics on ClickHouse, sub-2 second response on 2M+ records, and semantic vectorized lookup over JSONB. I also coached org-wide Cursor and AI-assisted engineering for a 37% capacity increase, and led the shift to Spec-Driven Development and an AI-led SDLC."],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},A1={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},T1={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},j1={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},E1={name:"Pranshu Nijhawan",designation:"Architecting Agentic AI. Engineering at Scale.",headline:"Principal Architect with 10+ years in enterprise SaaS, and the sole architecture owner of Promotion Advisor, a flagship multi-tenant SaaS in McKinsey's Periscope suite. I co-built Periscope's enterprise agent platform and designed the agentic layer that runs on it: Cortex for deterministic business logic, and a context-scoped catalog for tool selection at fleet scale. I lead 65+ engineers across five delivery squads and a core support squad.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},w1={sectionTitle:"Most Proud Of",content:[{id:1,title:"Platform AI: Periscope's Enterprise Agent Platform",content:["Co-built the agent platform that every product agent across Periscope now deploys through.","A GitOps Agent Definition Manager versions each agent as Git artifacts composed from skills, agent files, and scripts, not prompt text in a low-code editor.","A LangChain harness on Kubernetes runs one agent loop for all product agents, behind a Tenant MCP gateway that owns authentication, tool discovery, and quota.","Caller identity survives every hop, so an agent executes strictly inside the permissions of the prompting user."]},{id:2,title:"Cortex: Deterministic Business Logic for Agents",content:["Built a stateless engine that compiles configurable business rules into deterministic executable binaries.","Rules compose from three atomic operations (acquire, derive, assert) into playbooks, version-controlled through GitOps.","A purpose-built TypeScript compiler parses the typed YAML, so business rules stay unit-testable and reusable across agents.","Agent output is reproducible and auditable instead of dependent on what a prompt happened to say."]},{id:3,title:"Context-Scoped Catalog: Tool Selection at Fleet Scale",content:["Solved context pollution: an agent cannot reach a large tool estate if every tool is bound up front.","Designed the selection algorithm, which pins the tools an agent declares, shortlists the rest with a free BM25 lexical pass, then uses a cheap router model to separate near-duplicate actions.","Scoped the catalog per tenant and structured it hierarchically, which makes version gating exact and routing deterministic.","Context stays bounded and tool discovery stays accurate however large the fleet grows."]},{id:4,title:"Periscope Reporting Engine: Billion-Row Analytics on ClickHouse",content:["Built the reporting engine as a configurable runtime-query architecture, so users compose their own reports.","Aggregations resolve at request time against a governed ontology through a dynamic Query Builder, which removes the batch-prep step and the analytics-team dependency for each new measure.","Modeled the store on Projections and Dictionaries for billion-row sub-second interactive queries.","Separately designed the multi-dimensional promotion conflict detection algorithm, progressive candidate narrowing over sorted item arrays: sub-2 second response at 20 concurrent users across 2M promotions, 5,000x faster on large item groups."]},{id:5,title:"AI-Assisted Engineering and the Agent Library",content:["Drove org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit), which raised team capacity 37%.","Built 10+ production agents for architecture diagrams, ADR and APR authorship, and technical communications.","Built an SDD Agent that runs an 11-dimension anti-hallucination audit on every spec before it reaches implementation.","Built the Repo Mastery Agent, the code knowledge base coding agents ground against, which replaced a heavy Graph RAG documentation system with a Registry Pattern over vector binaries and explicit dependency relations."]}]},M1={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 - Present",descriptionSummary:`At McKinsey I am the sole architecture owner of <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a>, a flagship multi-tenant SaaS in the <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> suite for CPG and retail clients. I co-built Platform AI, Periscope's enterprise agent platform, and designed the agentic layer that runs on it. I lead 65+ engineers across five development squads and a core support squad, and partner with senior consulting leaders on high-stakes RFPs and enterprise implementations.`,achievements:[{title:"Platform Architecture Ownership",description:"Own the architecture of Promotion Advisor end to end: the planning application (React, TypeScript, Node.js, GraphQL, C# / .NET microservices), the Analytics Engine (Databricks, PySpark, DBT, PostgreSQL), and the agentic layer. Accountable for the configuration framework (GitOps-based, zero-downtime configuration delivery), the security model, polyglot persistence (PostgreSQL, Redis, Databricks Delta tables, ClickHouse), ETL, the Periscope Reporting Engine, and the external API surface."},{title:"Platform AI: Enterprise Agent Platform",description:"Co-built Platform AI, Periscope's enterprise agent platform: a GitOps Agent Definition Manager that versions every agent as Git artifacts, not prompt text; a LangChain harness on Kubernetes running one agent loop for all product agents; and a Tenant MCP gateway owning authentication, tool discovery, and quota. Caller identity survives every hop."},{title:"Cortex: Deterministic Business-Logic Engine",description:"Built Cortex, a stateless engine that runs business logic written as configuration. Rules compose from three operations (acquire, derive, assert) into playbooks; a purpose-built TypeScript compiler parses the typed YAML into executable binaries. Business rules stay deterministic and unit-testable, so agent output is reproducible and auditable."},{title:"Context-Scoped Catalog: Tool Selection at Fleet Scale",description:"Solved context pollution: an agent cannot reach a large tool estate if every tool is bound up front. Designed the selection algorithm (pinned tools, a free BM25 shortlist, then a cheap router model for the near-duplicates) and scoped the catalog per tenant, which makes version gating exact and routing deterministic. Version-mismatch failures dropped to zero, and a new solution registers without per-tool wiring."},{title:"Periscope Reporting Engine on ClickHouse & Real-Time Conflict Detection",description:"Built the Periscope Reporting Engine on ClickHouse (Projections, Dictionaries, billion-row sub-second queries): users compose their own reports and every aggregation resolves at request time against a governed ontology through a dynamic Query Builder, which removes the batch-prep step and the analytics-team dependency for each new measure. Also designed the multi-dimensional promotion conflict detection algorithm, progressive candidate narrowing over sorted item arrays: sub-2s at 20 concurrent users across 2M promotions, 5,000x faster on large item groups."},{title:"AI-Assisted Engineering & Agent Tooling",description:"Drove org-wide adoption of Cursor and Spec-Driven Development (OpenSpec, SpecKit), which raised team capacity 37%. Built the agent library behind it: 10+ production agents for architecture diagrams, ADR and APR authorship, and technical communications, plus an SDD Agent that runs an 11-dimension anti-hallucination audit per spec. The Repo Mastery Agent replaced a heavy Graph RAG documentation system with a Registry Pattern over vector binaries and explicit dependency relations."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 - March 2022",descriptionSummary:'At Eptura I re-architected a single-tenant workspace SaaS, <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), to cloud-native microservices on AKS and built a global IoT release orchestrator that pushes firmware to 300M+ devices. Directed 20 engineers across four squads.',achievements:[{title:"Cloud-Native Re-Architecture",description:"Migrated legacy single-tenant SaaS to cloud-native microservices on Azure Kubernetes Service (AKS): 60% faster incident recovery, and single-tenant scaling bottlenecks eliminated."},{title:"Global IoT Release Orchestration",description:"Built a release orchestration system (Azure IoT Hub, Azure Functions, Azure CosmosDB) that delivers firmware updates to 300M+ IoT devices worldwide with zero-downtime rollouts."},{title:"Engineering Leadership",description:"Directed 20 engineers (4 tech leads) across four squads. Established a structured mentorship program: +20% retention and faster engineering progression."}]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 - April 2021",descriptionSummary:"At Nagarro I shipped full-stack web and mobile applications for e-commerce and HR enterprise clients on Angular, .NET Core, PostgreSQL, and Ionic. CI/CD and IaC practices cut deployment failures by 70% across client projects.",achievements:[{title:"Full-Stack Web + Mobile Delivery",description:"Delivered production web and mobile apps on Angular, .NET Core, PostgreSQL, and Ionic Framework for e-commerce and HR clients at 99.5%+ uptime."},{title:"CI/CD & Infrastructure as Code",description:"Established CI/CD pipelines and IaC practices: 70% reduction in deployment failures across client projects."}]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 - December 2019",descriptionSummary:'At Condeco I built C# / .NET / React / SQL Server microservices for the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> workspace SaaS that carried 3x customer growth without reliability regressions. Cut build times 40% and core query latency 3x through data model refactoring.',achievements:[{title:"Microservices for 3x Customer Scale",description:"Designed and shipped C# / .NET / React / SQL Server microservices that carried 3x customer growth without reliability regressions."},{title:"CI/CD & Data Model Optimization",description:"Cut build times 40% and refactored core data models to reduce average query latency 3x."}]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",previously:"Intern",date:"February 2016 - August 2018",descriptionSummary:"At Gartner I built backend features on C# / .NET Core / React for an HR analytics SaaS, which improved survey data accuracy 60% for consulting clients. Automated SQL workflows saved 240+ engineering hours annually.",achievements:[{title:"SaaS Analytics Backend",description:"Built backend features on C# / .NET Core / React for the HR analytics platform, which improved employee survey data accuracy 60% for consulting clients."},{title:"SQL Workflow Automation",description:"Automated SQL workflows (stored procedures, SQL Agent jobs): saved 240+ engineering hours annually."}],last:!0}]},D1={sectionTitle:"Technology Proficiency",skills:[{icon:"AI",category:"AI & Agentic Engineering",skills:[{name:"Multi-Agent Orchestration",percentage:100},{name:"MCP (servers and clients)",percentage:100},{name:"Tool Discovery & Routing",percentage:100},{name:"Context Engineering",percentage:95},{name:"Cursor (Rules / Skills / Agents / Hooks / SDK)",percentage:100},{name:"Spec-Driven Development (OpenSpec, SpecKit)",percentage:100}]},{icon:"Architecture",category:"Architecture",skills:[{name:"Multi-Tenant SaaS Architecture",percentage:100},{name:"Microservices & Distributed Systems",percentage:100},{name:"Configuration-Driven Architecture",percentage:100},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Polyglot Persistence",percentage:95},{name:"ADR / APR Authorship",percentage:95}]},{icon:"Backend",category:"Backend",skills:[{name:"TypeScript / Node.js / Fastify",percentage:100},{name:"C# / .NET Core",percentage:100},{name:"GraphQL & REST APIs",percentage:95},{name:"Python",percentage:90}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"TypeScript",percentage:100},{name:"Angular",percentage:90},{name:"Micro-Frontends",percentage:90}]},{icon:"Database",category:"Data & Storage",skills:[{name:"PostgreSQL",percentage:100},{name:"ClickHouse",percentage:95},{name:"SQL Server",percentage:95},{name:"Redis",percentage:90}]},{icon:"Cloud",category:"Cloud & Infrastructure",skills:[{name:"Microsoft Azure",percentage:95},{name:"Kubernetes (AKS)",percentage:90},{name:"Terraform & GitOps",percentage:90},{name:"Amazon Web Services (AWS)",percentage:85}]},{icon:"DataEngineering",category:"Data Engineering & Real-Time Analytics",skills:[{name:"ClickHouse Analytics (Projections, Dictionaries)",percentage:95},{name:"Real-Time Analytics & Query Engines",percentage:95},{name:"Databricks (PySpark)",percentage:90},{name:"DBT & Blue-Green ETL",percentage:90}]},{icon:"Security",category:"Security & Compliance",skills:[{name:"Two-Layer FAC + DAC Architecture",percentage:100},{name:"Casbin RBAC / ABAC",percentage:95},{name:"SOC2 / Secure SDLC",percentage:90}]}]},C1={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},O1={aboutSection:z1,certifications:A1,contactMe:T1,educationalQualifications:j1,homeSection:E1,mostProudOf:w1,professionalExperience:M1,technologyProficiency:D1,testimonials:C1},Ke=O1;function U1(){const[d,x]=H.useState(!1);return o.jsxs(Zp,{children:[o.jsx(Lp,{}),o.jsxs(Kp,{children:[o.jsx(am,{}),o.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),o.jsx(Sm,{revealed:d}),o.jsxs("main",{id:"main-content",style:{position:"relative",zIndex:1},role:"main",children:[o.jsx(sg,{data:Ke.homeSection,start:d}),o.jsx(wg,{data:Ke.aboutSection}),o.jsx(Yg,{data:Ke.technologyProficiency}),o.jsx(av,{data:Ke.professionalExperience}),o.jsx(bv,{data:Ke.mostProudOf}),o.jsx(Ev,{data:Ke.certifications}),o.jsx(Xv,{data:Ke.testimonials}),o.jsx(i1,{}),o.jsx(r1,{data:Ke.educationalQualifications}),o.jsx(S1,{data:Ke.contactMe})]}),o.jsx(wm,{}),o.jsx(Dn,{children:!d&&o.jsx(_m,{onComplete:()=>x(!0)},"intro")})]})]})}"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);Xp.createRoot(document.getElementById("root")).render(o.jsx(H.StrictMode,{children:o.jsx(U1,{})}));
