(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function r(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(c){if(c.ep)return;c.ep=!0;const d=r(c);fetch(c.href,d)}})();function SS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Xc={exports:{}},Qs={};var Lg;function TS(){if(Lg)return Qs;Lg=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(o,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var p in c)p!=="key"&&(d[p]=c[p])}else d=c;return c=d.ref,{$$typeof:n,type:o,key:f,ref:c!==void 0?c:null,props:d}}return Qs.Fragment=a,Qs.jsx=r,Qs.jsxs=r,Qs}var Ug;function AS(){return Ug||(Ug=1,Xc.exports=TS()),Xc.exports}var x=AS(),$c={exports:{}},lt={};var Hg;function wS(){if(Hg)return lt;Hg=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function M(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,K={};function q(A,B,J){this.props=A,this.context=B,this.refs=K,this.updater=J||N}q.prototype.isReactComponent={},q.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")},q.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function Q(){}Q.prototype=q.prototype;function G(A,B,J){this.props=A,this.context=B,this.refs=K,this.updater=J||N}var W=G.prototype=new Q;W.constructor=G,Y(W,q.prototype),W.isPureReactComponent=!0;var P=Array.isArray;function Z(){}var H={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function xt(A,B,J){var F=J.ref;return{$$typeof:n,type:A,key:B,ref:F!==void 0?F:null,props:J}}function Bt(A,B){return xt(A.type,B,A.props)}function Yt(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function Ft(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(J){return B[J]})}var en=/\/+/g;function be(A,B){return typeof A=="object"&&A!==null&&A.key!=null?Ft(""+A.key):B.toString(36)}function pe(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(Z,Z):(A.status="pending",A.then(function(B){A.status==="pending"&&(A.status="fulfilled",A.value=B)},function(B){A.status==="pending"&&(A.status="rejected",A.reason=B)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function k(A,B,J,F,rt){var ut=typeof A;(ut==="undefined"||ut==="boolean")&&(A=null);var vt=!1;if(A===null)vt=!0;else switch(ut){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(A.$$typeof){case n:case a:vt=!0;break;case y:return vt=A._init,k(vt(A._payload),B,J,F,rt)}}if(vt)return rt=rt(A),vt=F===""?"."+be(A,0):F,P(rt)?(J="",vt!=null&&(J=vt.replace(en,"$&/")+"/"),k(rt,B,J,"",function(xn){return xn})):rt!=null&&(Yt(rt)&&(rt=Bt(rt,J+(rt.key==null||A&&A.key===rt.key?"":(""+rt.key).replace(en,"$&/")+"/")+vt)),B.push(rt)),1;vt=0;var qt=F===""?".":F+":";if(P(A))for(var Ct=0;Ct<A.length;Ct++)F=A[Ct],ut=qt+be(F,Ct),vt+=k(F,B,J,ut,rt);else if(Ct=M(A),typeof Ct=="function")for(A=Ct.call(A),Ct=0;!(F=A.next()).done;)F=F.value,ut=qt+be(F,Ct++),vt+=k(F,B,J,ut,rt);else if(ut==="object"){if(typeof A.then=="function")return k(pe(A),B,J,F,rt);throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return vt}function $(A,B,J){if(A==null)return A;var F=[],rt=0;return k(A,F,"","",function(ut){return B.call(J,ut,rt++)}),F}function et(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(J){(A._status===0||A._status===-1)&&(A._status=1,A._result=J)},function(J){(A._status===0||A._status===-1)&&(A._status=2,A._result=J)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var ot=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},ht={map:$,forEach:function(A,B,J){$(A,function(){B.apply(this,arguments)},J)},count:function(A){var B=0;return $(A,function(){B++}),B},toArray:function(A){return $(A,function(B){return B})||[]},only:function(A){if(!Yt(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return lt.Activity=b,lt.Children=ht,lt.Component=q,lt.Fragment=r,lt.Profiler=c,lt.PureComponent=G,lt.StrictMode=o,lt.Suspense=g,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,lt.__COMPILER_RUNTIME={__proto__:null,c:function(A){return H.H.useMemoCache(A)}},lt.cache=function(A){return function(){return A.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(A,B,J){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var F=Y({},A.props),rt=A.key;if(B!=null)for(ut in B.key!==void 0&&(rt=""+B.key),B)!I.call(B,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&B.ref===void 0||(F[ut]=B[ut]);var ut=arguments.length-2;if(ut===1)F.children=J;else if(1<ut){for(var vt=Array(ut),qt=0;qt<ut;qt++)vt[qt]=arguments[qt+2];F.children=vt}return xt(A.type,rt,F)},lt.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:d,_context:A},A},lt.createElement=function(A,B,J){var F,rt={},ut=null;if(B!=null)for(F in B.key!==void 0&&(ut=""+B.key),B)I.call(B,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(rt[F]=B[F]);var vt=arguments.length-2;if(vt===1)rt.children=J;else if(1<vt){for(var qt=Array(vt),Ct=0;Ct<vt;Ct++)qt[Ct]=arguments[Ct+2];rt.children=qt}if(A&&A.defaultProps)for(F in vt=A.defaultProps,vt)rt[F]===void 0&&(rt[F]=vt[F]);return xt(A,ut,rt)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(A){return{$$typeof:p,render:A}},lt.isValidElement=Yt,lt.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:et}},lt.memo=function(A,B){return{$$typeof:m,type:A,compare:B===void 0?null:B}},lt.startTransition=function(A){var B=H.T,J={};H.T=J;try{var F=A(),rt=H.S;rt!==null&&rt(J,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(Z,ot)}catch(ut){ot(ut)}finally{B!==null&&J.types!==null&&(B.types=J.types),H.T=B}},lt.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},lt.use=function(A){return H.H.use(A)},lt.useActionState=function(A,B,J){return H.H.useActionState(A,B,J)},lt.useCallback=function(A,B){return H.H.useCallback(A,B)},lt.useContext=function(A){return H.H.useContext(A)},lt.useDebugValue=function(){},lt.useDeferredValue=function(A,B){return H.H.useDeferredValue(A,B)},lt.useEffect=function(A,B){return H.H.useEffect(A,B)},lt.useEffectEvent=function(A){return H.H.useEffectEvent(A)},lt.useId=function(){return H.H.useId()},lt.useImperativeHandle=function(A,B,J){return H.H.useImperativeHandle(A,B,J)},lt.useInsertionEffect=function(A,B){return H.H.useInsertionEffect(A,B)},lt.useLayoutEffect=function(A,B){return H.H.useLayoutEffect(A,B)},lt.useMemo=function(A,B){return H.H.useMemo(A,B)},lt.useOptimistic=function(A,B){return H.H.useOptimistic(A,B)},lt.useReducer=function(A,B,J){return H.H.useReducer(A,B,J)},lt.useRef=function(A){return H.H.useRef(A)},lt.useState=function(A){return H.H.useState(A)},lt.useSyncExternalStore=function(A,B,J){return H.H.useSyncExternalStore(A,B,J)},lt.useTransition=function(){return H.H.useTransition()},lt.version="19.2.1",lt}var Gg;function Zf(){return Gg||(Gg=1,$c.exports=wS()),$c.exports}var X=Zf();const Yn=SS(X);var Qc={exports:{}},Ks={},Kc={exports:{}},Zc={};var Yg;function ES(){return Yg||(Yg=1,(function(n){function a(k,$){var et=k.length;k.push($);t:for(;0<et;){var ot=et-1>>>1,ht=k[ot];if(0<c(ht,$))k[ot]=$,k[et]=ht,et=ot;else break t}}function r(k){return k.length===0?null:k[0]}function o(k){if(k.length===0)return null;var $=k[0],et=k.pop();if(et!==$){k[0]=et;t:for(var ot=0,ht=k.length,A=ht>>>1;ot<A;){var B=2*(ot+1)-1,J=k[B],F=B+1,rt=k[F];if(0>c(J,et))F<ht&&0>c(rt,J)?(k[ot]=rt,k[F]=et,ot=F):(k[ot]=J,k[B]=et,ot=B);else if(F<ht&&0>c(rt,et))k[ot]=rt,k[F]=et,ot=F;else break t}}return $}function c(k,$){var et=k.sortIndex-$.sortIndex;return et!==0?et:k.id-$.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var g=[],m=[],y=1,b=null,S=3,M=!1,N=!1,Y=!1,K=!1,q=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function W(k){for(var $=r(m);$!==null;){if($.callback===null)o(m);else if($.startTime<=k)o(m),$.sortIndex=$.expirationTime,a(g,$);else break;$=r(m)}}function P(k){if(Y=!1,W(k),!N)if(r(g)!==null)N=!0,Z||(Z=!0,Ft());else{var $=r(m);$!==null&&pe(P,$.startTime-k)}}var Z=!1,H=-1,I=5,xt=-1;function Bt(){return K?!0:!(n.unstable_now()-xt<I)}function Yt(){if(K=!1,Z){var k=n.unstable_now();xt=k;var $=!0;try{t:{N=!1,Y&&(Y=!1,Q(H),H=-1),M=!0;var et=S;try{e:{for(W(k),b=r(g);b!==null&&!(b.expirationTime>k&&Bt());){var ot=b.callback;if(typeof ot=="function"){b.callback=null,S=b.priorityLevel;var ht=ot(b.expirationTime<=k);if(k=n.unstable_now(),typeof ht=="function"){b.callback=ht,W(k),$=!0;break e}b===r(g)&&o(g),W(k)}else o(g);b=r(g)}if(b!==null)$=!0;else{var A=r(m);A!==null&&pe(P,A.startTime-k),$=!1}}break t}finally{b=null,S=et,M=!1}$=void 0}}finally{$?Ft():Z=!1}}}var Ft;if(typeof G=="function")Ft=function(){G(Yt)};else if(typeof MessageChannel<"u"){var en=new MessageChannel,be=en.port2;en.port1.onmessage=Yt,Ft=function(){be.postMessage(null)}}else Ft=function(){q(Yt,0)};function pe(k,$){H=q(function(){k(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(k){k.callback=null},n.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<k?Math.floor(1e3/k):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(k){switch(S){case 1:case 2:case 3:var $=3;break;default:$=S}var et=S;S=$;try{return k()}finally{S=et}},n.unstable_requestPaint=function(){K=!0},n.unstable_runWithPriority=function(k,$){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var et=S;S=k;try{return $()}finally{S=et}},n.unstable_scheduleCallback=function(k,$,et){var ot=n.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?ot+et:ot):et=ot,k){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=et+ht,k={id:y++,callback:$,priorityLevel:k,startTime:et,expirationTime:ht,sortIndex:-1},et>ot?(k.sortIndex=et,a(m,k),r(g)===null&&k===r(m)&&(Y?(Q(H),H=-1):Y=!0,pe(P,et-ot))):(k.sortIndex=ht,a(g,k),N||M||(N=!0,Z||(Z=!0,Ft()))),k},n.unstable_shouldYield=Bt,n.unstable_wrapCallback=function(k){var $=S;return function(){var et=S;S=$;try{return k.apply(this,arguments)}finally{S=et}}}})(Zc)),Zc}var qg;function CS(){return qg||(qg=1,Kc.exports=ES()),Kc.exports}var Pc={exports:{}},me={};var Xg;function MS(){if(Xg)return me;Xg=1;var n=Zf();function a(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(a(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(g,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:g,containerInfo:m,implementation:y}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,me.createPortal=function(g,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(a(299));return d(g,m,null,y)},me.flushSync=function(g){var m=f.T,y=o.p;try{if(f.T=null,o.p=2,g)return g()}finally{f.T=m,o.p=y,o.d.f()}},me.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(g,m))},me.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},me.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var y=m.as,b=p(y,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?o.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:M}):y==="script"&&o.d.X(g,{crossOrigin:b,integrity:S,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},me.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);o.d.M(g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(g)},me.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=p(y,m.crossOrigin);o.d.L(g,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},me.preloadModule=function(g,m){if(typeof g=="string")if(m){var y=p(m.as,m.crossOrigin);o.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(g)},me.requestFormReset=function(g){o.d.r(g)},me.unstable_batchedUpdates=function(g,m){return g(m)},me.useFormState=function(g,m,y){return f.H.useFormState(g,m,y)},me.useFormStatus=function(){return f.H.useHostTransitionStatus()},me.version="19.2.1",me}var $g;function DS(){if($g)return Pc.exports;$g=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Pc.exports=MS(),Pc.exports}var Qg;function zS(){if(Qg)return Ks;Qg=1;var n=CS(),a=Zf(),r=DS();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(o(188))}function m(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(o(188));return e!==t?null:t}for(var i=t,s=e;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(s=l.return,s!==null){i=s;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return g(l),t;if(u===s)return g(l),e;u=u.sibling}throw Error(o(188))}if(i.return!==s.return)i=l,s=u;else{for(var h=!1,v=l.child;v;){if(v===i){h=!0,i=l,s=u;break}if(v===s){h=!0,s=l,i=u;break}v=v.sibling}if(!h){for(v=u.child;v;){if(v===i){h=!0,i=u,s=l;break}if(v===s){h=!0,s=u,i=l;break}v=v.sibling}if(!h)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?t:e}function y(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=y(t),e!==null)return e;t=t.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),G=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),xt=Symbol.for("react.activity"),Bt=Symbol.for("react.memo_cache_sentinel"),Yt=Symbol.iterator;function Ft(t){return t===null||typeof t!="object"?null:(t=Yt&&t[Yt]||t["@@iterator"],typeof t=="function"?t:null)}var en=Symbol.for("react.client.reference");function be(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===en?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Y:return"Fragment";case q:return"Profiler";case K:return"StrictMode";case P:return"Suspense";case Z:return"SuspenseList";case xt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case N:return"Portal";case G:return t.displayName||"Context";case Q:return(t._context.displayName||"Context")+".Consumer";case W:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return e=t.displayName||null,e!==null?e:be(t.type)||"Memo";case I:e=t._payload,t=t._init;try{return be(t(e))}catch{}}return null}var pe=Array.isArray,k=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},ot=[],ht=-1;function A(t){return{current:t}}function B(t){0>ht||(t.current=ot[ht],ot[ht]=null,ht--)}function J(t,e){ht++,ot[ht]=t.current,t.current=e}var F=A(null),rt=A(null),ut=A(null),vt=A(null);function qt(t,e){switch(J(ut,e),J(rt,t),J(F,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?og(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=og(e),t=lg(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}B(F),J(F,t)}function Ct(){B(F),B(rt),B(ut)}function xn(t){t.memoizedState!==null&&J(vt,t);var e=F.current,i=lg(e,t.type);e!==i&&(J(rt,t),J(F,i))}function Sn(t){rt.current===t&&(B(F),B(rt)),vt.current===t&&(B(vt),Ys._currentValue=et)}var He,Nd;function Si(t){if(He===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);He=e&&e[1]||"",Nd=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+He+t+Nd}var Ml=!1;function Dl(t,e){if(!t||Ml)return"";Ml=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(R){var j=R}Reflect.construct(t,[],U)}else{try{U.call()}catch(R){j=R}t.call(U.prototype)}}else{try{throw Error()}catch(R){j=R}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(R){if(R&&j&&typeof R.stack=="string")return[R.stack,j.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),h=u[0],v=u[1];if(h&&v){var T=h.split(`
`),z=v.split(`
`);for(l=s=0;s<T.length&&!T[s].includes("DetermineComponentFrameRoot");)s++;for(;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;if(s===T.length||l===z.length)for(s=T.length-1,l=z.length-1;1<=s&&0<=l&&T[s]!==z[l];)l--;for(;1<=s&&0<=l;s--,l--)if(T[s]!==z[l]){if(s!==1||l!==1)do if(s--,l--,0>l||T[s]!==z[l]){var _=`
`+T[s].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=s&&0<=l);break}}}finally{Ml=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Si(i):""}function F1(t,e){switch(t.tag){case 26:case 27:case 5:return Si(t.type);case 16:return Si("Lazy");case 13:return t.child!==e&&e!==null?Si("Suspense Fallback"):Si("Suspense");case 19:return Si("SuspenseList");case 0:case 15:return Dl(t.type,!1);case 11:return Dl(t.type.render,!1);case 1:return Dl(t.type,!0);case 31:return Si("Activity");default:return""}}function Ld(t){try{var e="",i=null;do e+=F1(t,i),i=t,t=t.return;while(t);return e}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var zl=Object.prototype.hasOwnProperty,jl=n.unstable_scheduleCallback,Rl=n.unstable_cancelCallback,I1=n.unstable_shouldYield,tb=n.unstable_requestPaint,ze=n.unstable_now,eb=n.unstable_getCurrentPriorityLevel,Ud=n.unstable_ImmediatePriority,Hd=n.unstable_UserBlockingPriority,vr=n.unstable_NormalPriority,nb=n.unstable_LowPriority,Gd=n.unstable_IdlePriority,ib=n.log,ab=n.unstable_setDisableYieldValue,ts=null,je=null;function Xn(t){if(typeof ib=="function"&&ab(t),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(ts,t)}catch{}}var Re=Math.clz32?Math.clz32:ob,sb=Math.log,rb=Math.LN2;function ob(t){return t>>>=0,t===0?32:31-(sb(t)/rb|0)|0}var br=256,xr=262144,Sr=4194304;function Ti(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Tr(t,e,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes;t=t.warmLanes;var v=s&134217727;return v!==0?(s=v&~u,s!==0?l=Ti(s):(h&=v,h!==0?l=Ti(h):i||(i=v&~t,i!==0&&(l=Ti(i))))):(v=s&~u,v!==0?l=Ti(v):h!==0?l=Ti(h):i||(i=s&~t,i!==0&&(l=Ti(i)))),l===0?0:e!==0&&e!==l&&(e&u)===0&&(u=l&-l,i=e&-e,u>=i||u===32&&(i&4194048)!==0)?e:l}function es(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function lb(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yd(){var t=Sr;return Sr<<=1,(Sr&62914560)===0&&(Sr=4194304),t}function Ol(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function ns(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ub(t,e,i,s,l,u){var h=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var v=t.entanglements,T=t.expirationTimes,z=t.hiddenUpdates;for(i=h&~i;0<i;){var _=31-Re(i),U=1<<_;v[_]=0,T[_]=-1;var j=z[_];if(j!==null)for(z[_]=null,_=0;_<j.length;_++){var R=j[_];R!==null&&(R.lane&=-536870913)}i&=~U}s!==0&&qd(t,s,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(h&~e))}function qd(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var s=31-Re(e);t.entangledLanes|=e,t.entanglements[s]=t.entanglements[s]|1073741824|i&261930}function Xd(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var s=31-Re(i),l=1<<s;l&e|t[s]&e&&(t[s]|=e),i&=~l}}function $d(t,e){var i=e&-e;return i=(i&42)!==0?1:Vl(i),(i&(t.suspendedLanes|e))!==0?0:i}function Vl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _l(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qd(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:Rg(t.type))}function Kd(t,e){var i=$.p;try{return $.p=t,e()}finally{$.p=i}}var $n=Math.random().toString(36).slice(2),le="__reactFiber$"+$n,xe="__reactProps$"+$n,Zi="__reactContainer$"+$n,kl="__reactEvents$"+$n,cb="__reactListeners$"+$n,fb="__reactHandles$"+$n,Zd="__reactResources$"+$n,is="__reactMarker$"+$n;function Bl(t){delete t[le],delete t[xe],delete t[kl],delete t[cb],delete t[fb]}function Pi(t){var e=t[le];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Zi]||i[le]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=mg(t);t!==null;){if(i=t[le])return i;t=mg(t)}return e}t=i,i=t.parentNode}return null}function Ji(t){if(t=t[le]||t[Zi]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function as(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function Wi(t){var e=t[Zd];return e||(e=t[Zd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ee(t){t[is]=!0}var Pd=new Set,Jd={};function Ai(t,e){Fi(t,e),Fi(t+"Capture",e)}function Fi(t,e){for(Jd[t]=e,t=0;t<e.length;t++)Pd.add(e[t])}var db=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wd={},Fd={};function hb(t){return zl.call(Fd,t)?!0:zl.call(Wd,t)?!1:db.test(t)?Fd[t]=!0:(Wd[t]=!0,!1)}function Ar(t,e,i){if(hb(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var s=e.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+i)}}function wr(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+i)}}function Tn(t,e,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,""+s)}}function Ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Id(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pb(t,e,i){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,u=s.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(h){i=""+h,u.call(this,h)}}),Object.defineProperty(t,e,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Nl(t){if(!t._valueTracker){var e=Id(t)?"checked":"value";t._valueTracker=pb(t,e,""+t[e])}}function th(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),s="";return t&&(s=Id(t)?t.checked?"true":"false":t.value),t=s,t!==i?(e.setValue(t),!0):!1}function Er(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var mb=/[\n"\\]/g;function Ye(t){return t.replace(mb,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ll(t,e,i,s,l,u,h,v){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ge(e)):t.value!==""+Ge(e)&&(t.value=""+Ge(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?Ul(t,h,Ge(e)):i!=null?Ul(t,h,Ge(i)):s!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+Ge(v):t.removeAttribute("name")}function eh(t,e,i,s,l,u,h,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Nl(t);return}i=i!=null?""+Ge(i):"",e=e!=null?""+Ge(e):i,v||e===t.value||(t.value=e),t.defaultValue=e}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=v?t.checked:!!s,t.defaultChecked=!!s,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h),Nl(t)}function Ul(t,e,i){e==="number"&&Er(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Ii(t,e,i,s){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&s&&(t[i].defaultSelected=!0)}else{for(i=""+Ge(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function nh(t,e,i){if(e!=null&&(e=""+Ge(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Ge(i):""}function ih(t,e,i,s){if(e==null){if(s!=null){if(i!=null)throw Error(o(92));if(pe(s)){if(1<s.length)throw Error(o(93));s=s[0]}i=s}i==null&&(i=""),e=i}i=Ge(e),t.defaultValue=i,s=t.textContent,s===i&&s!==""&&s!==null&&(t.value=s),Nl(t)}function ta(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var gb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ah(t,e,i){var s=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":s?t.setProperty(e,i):typeof i!="number"||i===0||gb.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function sh(t,e,i){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||e!=null&&e.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var l in e)s=e[l],e.hasOwnProperty(l)&&i[l]!==s&&ah(t,l,s)}else for(var u in e)e.hasOwnProperty(u)&&ah(t,u,e[u])}function Hl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cr(t){return vb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function An(){}var Gl=null;function Yl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ea=null,na=null;function rh(t){var e=Ji(t);if(e&&(t=e.stateNode)){var i=t[xe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ll(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Ye(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var s=i[e];if(s!==t&&s.form===t.form){var l=s[xe]||null;if(!l)throw Error(o(90));Ll(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)s=i[e],s.form===t.form&&th(s)}break t;case"textarea":nh(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&Ii(t,!!i.multiple,e,!1)}}}var ql=!1;function oh(t,e,i){if(ql)return t(e,i);ql=!0;try{var s=t(e);return s}finally{if(ql=!1,(ea!==null||na!==null)&&(po(),ea&&(e=ea,t=na,na=ea=null,rh(e),t)))for(e=0;e<t.length;e++)rh(t[e])}}function ss(t,e){var i=t.stateNode;if(i===null)return null;var s=i[xe]||null;if(s===null)return null;i=s[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(o(231,e,typeof i));return i}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=!1;if(wn)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{Xl=!1}var Qn=null,$l=null,Mr=null;function lh(){if(Mr)return Mr;var t,e=$l,i=e.length,s,l="value"in Qn?Qn.value:Qn.textContent,u=l.length;for(t=0;t<i&&e[t]===l[t];t++);var h=i-t;for(s=1;s<=h&&e[i-s]===l[u-s];s++);return Mr=l.slice(t,1<s?1-s:void 0)}function Dr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zr(){return!0}function uh(){return!1}function Se(t){function e(i,s,l,u,h){this._reactName=i,this._targetInst=l,this.type=s,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(i=t[v],this[v]=i?i(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?zr:uh,this.isPropagationStopped=uh,this}return b(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),e}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jr=Se(wi),os=b({},wi,{view:0,detail:0}),bb=Se(os),Ql,Kl,ls,Rr=b({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ls&&(ls&&t.type==="mousemove"?(Ql=t.screenX-ls.screenX,Kl=t.screenY-ls.screenY):Kl=Ql=0,ls=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),ch=Se(Rr),xb=b({},Rr,{dataTransfer:0}),Sb=Se(xb),Tb=b({},os,{relatedTarget:0}),Zl=Se(Tb),Ab=b({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),wb=Se(Ab),Eb=b({},wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cb=Se(Eb),Mb=b({},wi,{data:0}),fh=Se(Mb),Db={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jb[t])?!!e[t]:!1}function Pl(){return Rb}var Ob=b({},os,{key:function(t){if(t.key){var e=Db[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(t){return t.type==="keypress"?Dr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vb=Se(Ob),_b=b({},Rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dh=Se(_b),kb=b({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),Bb=Se(kb),Nb=b({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lb=Se(Nb),Ub=b({},Rr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hb=Se(Ub),Gb=b({},wi,{newState:0,oldState:0}),Yb=Se(Gb),qb=[9,13,27,32],Jl=wn&&"CompositionEvent"in window,us=null;wn&&"documentMode"in document&&(us=document.documentMode);var Xb=wn&&"TextEvent"in window&&!us,hh=wn&&(!Jl||us&&8<us&&11>=us),ph=" ",mh=!1;function gh(t,e){switch(t){case"keyup":return qb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ia=!1;function $b(t,e){switch(t){case"compositionend":return yh(e);case"keypress":return e.which!==32?null:(mh=!0,ph);case"textInput":return t=e.data,t===ph&&mh?null:t;default:return null}}function Qb(t,e){if(ia)return t==="compositionend"||!Jl&&gh(t,e)?(t=lh(),Mr=$l=Qn=null,ia=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hh&&e.locale!=="ko"?null:e.data;default:return null}}var Kb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kb[t.type]:e==="textarea"}function bh(t,e,i,s){ea?na?na.push(s):na=[s]:ea=s,e=So(e,"onChange"),0<e.length&&(i=new jr("onChange","change",null,i,s),t.push({event:i,listeners:e}))}var cs=null,fs=null;function Zb(t){eg(t,0)}function Or(t){var e=as(t);if(th(e))return t}function xh(t,e){if(t==="change")return e}var Sh=!1;if(wn){var Wl;if(wn){var Fl="oninput"in document;if(!Fl){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Fl=typeof Th.oninput=="function"}Wl=Fl}else Wl=!1;Sh=Wl&&(!document.documentMode||9<document.documentMode)}function Ah(){cs&&(cs.detachEvent("onpropertychange",wh),fs=cs=null)}function wh(t){if(t.propertyName==="value"&&Or(fs)){var e=[];bh(e,fs,t,Yl(t)),oh(Zb,e)}}function Pb(t,e,i){t==="focusin"?(Ah(),cs=e,fs=i,cs.attachEvent("onpropertychange",wh)):t==="focusout"&&Ah()}function Jb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Or(fs)}function Wb(t,e){if(t==="click")return Or(e)}function Fb(t,e){if(t==="input"||t==="change")return Or(e)}function Ib(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Oe=typeof Object.is=="function"?Object.is:Ib;function ds(t,e){if(Oe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),s=Object.keys(e);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var l=i[s];if(!zl.call(e,l)||!Oe(t[l],e[l]))return!1}return!0}function Eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ch(t,e){var i=Eh(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=e&&s>=e)return{node:i,offset:e-t};t=s}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Eh(i)}}function Mh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Er(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Er(t.document)}return e}function Il(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var tx=wn&&"documentMode"in document&&11>=document.documentMode,aa=null,tu=null,hs=null,eu=!1;function zh(t,e,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;eu||aa==null||aa!==Er(s)||(s=aa,"selectionStart"in s&&Il(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),hs&&ds(hs,s)||(hs=s,s=So(tu,"onSelect"),0<s.length&&(e=new jr("onSelect","select",null,e,i),t.push({event:e,listeners:s}),e.target=aa)))}function Ei(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var sa={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionrun:Ei("Transition","TransitionRun"),transitionstart:Ei("Transition","TransitionStart"),transitioncancel:Ei("Transition","TransitionCancel"),transitionend:Ei("Transition","TransitionEnd")},nu={},jh={};wn&&(jh=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function Ci(t){if(nu[t])return nu[t];if(!sa[t])return t;var e=sa[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in jh)return nu[t]=e[i];return t}var Rh=Ci("animationend"),Oh=Ci("animationiteration"),Vh=Ci("animationstart"),ex=Ci("transitionrun"),nx=Ci("transitionstart"),ix=Ci("transitioncancel"),_h=Ci("transitionend"),kh=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function nn(t,e){kh.set(t,e),Ai(e,[t])}var Vr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},qe=[],ra=0,au=0;function _r(){for(var t=ra,e=au=ra=0;e<t;){var i=qe[e];qe[e++]=null;var s=qe[e];qe[e++]=null;var l=qe[e];qe[e++]=null;var u=qe[e];if(qe[e++]=null,s!==null&&l!==null){var h=s.pending;h===null?l.next=l:(l.next=h.next,h.next=l),s.pending=l}u!==0&&Bh(i,l,u)}}function kr(t,e,i,s){qe[ra++]=t,qe[ra++]=e,qe[ra++]=i,qe[ra++]=s,au|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function su(t,e,i,s){return kr(t,e,i,s),Br(t)}function Mi(t,e){return kr(t,null,null,e),Br(t)}function Bh(t,e,i){t.lanes|=i;var s=t.alternate;s!==null&&(s.lanes|=i);for(var l=!1,u=t.return;u!==null;)u.childLanes|=i,s=u.alternate,s!==null&&(s.childLanes|=i),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&e!==null&&(l=31-Re(i),t=u.hiddenUpdates,s=t[l],s===null?t[l]=[e]:s.push(e),e.lane=i|536870912),u):null}function Br(t){if(50<ks)throw ks=0,pc=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var oa={};function ax(t,e,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(t,e,i,s){return new ax(t,e,i,s)}function ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function En(t,e){var i=t.alternate;return i===null?(i=Ve(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Nh(t,e){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Nr(t,e,i,s,l,u){var h=0;if(s=t,typeof t=="function")ru(t)&&(h=1);else if(typeof t=="string")h=uS(t,i,F.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case xt:return t=Ve(31,i,e,l),t.elementType=xt,t.lanes=u,t;case Y:return Di(i.children,l,u,e);case K:h=8,l|=24;break;case q:return t=Ve(12,i,e,l|2),t.elementType=q,t.lanes=u,t;case P:return t=Ve(13,i,e,l),t.elementType=P,t.lanes=u,t;case Z:return t=Ve(19,i,e,l),t.elementType=Z,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:h=10;break t;case Q:h=9;break t;case W:h=11;break t;case H:h=14;break t;case I:h=16,s=null;break t}h=29,i=Error(o(130,t===null?"null":typeof t,"")),s=null}return e=Ve(h,i,e,l),e.elementType=t,e.type=s,e.lanes=u,e}function Di(t,e,i,s){return t=Ve(7,t,s,e),t.lanes=i,t}function ou(t,e,i){return t=Ve(6,t,null,e),t.lanes=i,t}function Lh(t){var e=Ve(18,null,null,0);return e.stateNode=t,e}function lu(t,e,i){return e=Ve(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Uh=new WeakMap;function Xe(t,e){if(typeof t=="object"&&t!==null){var i=Uh.get(t);return i!==void 0?i:(e={value:t,source:e,stack:Ld(e)},Uh.set(t,e),e)}return{value:t,source:e,stack:Ld(e)}}var la=[],ua=0,Lr=null,ps=0,$e=[],Qe=0,Kn=null,dn=1,hn="";function Cn(t,e){la[ua++]=ps,la[ua++]=Lr,Lr=t,ps=e}function Hh(t,e,i){$e[Qe++]=dn,$e[Qe++]=hn,$e[Qe++]=Kn,Kn=t;var s=dn;t=hn;var l=32-Re(s)-1;s&=~(1<<l),i+=1;var u=32-Re(e)+l;if(30<u){var h=l-l%5;u=(s&(1<<h)-1).toString(32),s>>=h,l-=h,dn=1<<32-Re(e)+l|i<<l|s,hn=u+t}else dn=1<<u|i<<l|s,hn=t}function uu(t){t.return!==null&&(Cn(t,1),Hh(t,1,0))}function cu(t){for(;t===Lr;)Lr=la[--ua],la[ua]=null,ps=la[--ua],la[ua]=null;for(;t===Kn;)Kn=$e[--Qe],$e[Qe]=null,hn=$e[--Qe],$e[Qe]=null,dn=$e[--Qe],$e[Qe]=null}function Gh(t,e){$e[Qe++]=dn,$e[Qe++]=hn,$e[Qe++]=Kn,dn=e.id,hn=e.overflow,Kn=t}var ue=null,Vt=null,bt=!1,Zn=null,Ke=!1,fu=Error(o(519));function Pn(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ms(Xe(e,t)),fu}function Yh(t){var e=t.stateNode,i=t.type,s=t.memoizedProps;switch(e[le]=t,e[xe]=s,i){case"dialog":mt("cancel",e),mt("close",e);break;case"iframe":case"object":case"embed":mt("load",e);break;case"video":case"audio":for(i=0;i<Ns.length;i++)mt(Ns[i],e);break;case"source":mt("error",e);break;case"img":case"image":case"link":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"input":mt("invalid",e),eh(e,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":mt("invalid",e);break;case"textarea":mt("invalid",e),ih(e,s.value,s.defaultValue,s.children)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||s.suppressHydrationWarning===!0||sg(e.textContent,i)?(s.popover!=null&&(mt("beforetoggle",e),mt("toggle",e)),s.onScroll!=null&&mt("scroll",e),s.onScrollEnd!=null&&mt("scrollend",e),s.onClick!=null&&(e.onclick=An),e=!0):e=!1,e||Pn(t,!0)}function qh(t){for(ue=t.return;ue;)switch(ue.tag){case 5:case 31:case 13:Ke=!1;return;case 27:case 3:Ke=!0;return;default:ue=ue.return}}function ca(t){if(t!==ue)return!1;if(!bt)return qh(t),bt=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||zc(t.type,t.memoizedProps)),i=!i),i&&Vt&&Pn(t),qh(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Vt=pg(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Vt=pg(t)}else e===27?(e=Vt,ui(t.type)?(t=_c,_c=null,Vt=t):Vt=e):Vt=ue?Pe(t.stateNode.nextSibling):null;return!0}function zi(){Vt=ue=null,bt=!1}function du(){var t=Zn;return t!==null&&(Ee===null?Ee=t:Ee.push.apply(Ee,t),Zn=null),t}function ms(t){Zn===null?Zn=[t]:Zn.push(t)}var hu=A(null),ji=null,Mn=null;function Jn(t,e,i){J(hu,e._currentValue),e._currentValue=i}function Dn(t){t._currentValue=hu.current,B(hu)}function pu(t,e,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,s!==null&&(s.childLanes|=e)):s!==null&&(s.childLanes&e)!==e&&(s.childLanes|=e),t===i)break;t=t.return}}function mu(t,e,i,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var h=l.child;u=u.firstContext;t:for(;u!==null;){var v=u;u=l;for(var T=0;T<e.length;T++)if(v.context===e[T]){u.lanes|=i,v=u.alternate,v!==null&&(v.lanes|=i),pu(u.return,i,t),s||(h=null);break t}u=v.next}}else if(l.tag===18){if(h=l.return,h===null)throw Error(o(341));h.lanes|=i,u=h.alternate,u!==null&&(u.lanes|=i),pu(h,i,t),h=null}else h=l.child;if(h!==null)h.return=l;else for(h=l;h!==null;){if(h===t){h=null;break}if(l=h.sibling,l!==null){l.return=h.return,h=l;break}h=h.return}l=h}}function fa(t,e,i,s){t=null;for(var l=e,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var h=l.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var v=l.type;Oe(l.pendingProps.value,h.value)||(t!==null?t.push(v):t=[v])}}else if(l===vt.current){if(h=l.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ys):t=[Ys])}l=l.return}t!==null&&mu(e,t,i,s),e.flags|=262144}function Ur(t){for(t=t.firstContext;t!==null;){if(!Oe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ri(t){ji=t,Mn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ce(t){return Xh(ji,t)}function Hr(t,e){return ji===null&&Ri(t),Xh(t,e)}function Xh(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},Mn===null){if(t===null)throw Error(o(308));Mn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Mn=Mn.next=e;return i}var sx=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,s){t.push(s)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},rx=n.unstable_scheduleCallback,ox=n.unstable_NormalPriority,Qt={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new sx,data:new Map,refCount:0}}function gs(t){t.refCount--,t.refCount===0&&rx(ox,function(){t.controller.abort()})}var ys=null,yu=0,da=0,ha=null;function lx(t,e){if(ys===null){var i=ys=[];yu=0,da=xc(),ha={status:"pending",value:void 0,then:function(s){i.push(s)}}}return yu++,e.then($h,$h),e}function $h(){if(--yu===0&&ys!==null){ha!==null&&(ha.status="fulfilled");var t=ys;ys=null,da=0,ha=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function ux(t,e){var i=[],s={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){s.status="fulfilled",s.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(s.status="rejected",s.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),s}var Qh=k.S;k.S=function(t,e){zm=ze(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&lx(t,e),Qh!==null&&Qh(t,e)};var Oi=A(null);function vu(){var t=Oi.current;return t!==null?t:Ot.pooledCache}function Gr(t,e){e===null?J(Oi,Oi.current):J(Oi,e.pool)}function Kh(){var t=vu();return t===null?null:{parent:Qt._currentValue,pool:t}}var pa=Error(o(460)),bu=Error(o(474)),Yr=Error(o(542)),qr={then:function(){}};function Zh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ph(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(An,An),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Wh(t),t;default:if(typeof e.status=="string")e.then(An,An);else{if(t=Ot,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(s){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=s}},function(s){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=s}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Wh(t),t}throw _i=e,pa}}function Vi(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(_i=i,pa):i}}var _i=null;function Jh(){if(_i===null)throw Error(o(459));var t=_i;return _i=null,t}function Wh(t){if(t===pa||t===Yr)throw Error(o(483))}var ma=null,vs=0;function Xr(t){var e=vs;return vs+=1,ma===null&&(ma=[]),Ph(ma,t,e)}function bs(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function $r(t,e){throw e.$$typeof===S?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Fh(t){function e(E,w){if(t){var D=E.deletions;D===null?(E.deletions=[w],E.flags|=16):D.push(w)}}function i(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function s(E){for(var w=new Map;E!==null;)E.key!==null?w.set(E.key,E):w.set(E.index,E),E=E.sibling;return w}function l(E,w){return E=En(E,w),E.index=0,E.sibling=null,E}function u(E,w,D){return E.index=D,t?(D=E.alternate,D!==null?(D=D.index,D<w?(E.flags|=67108866,w):D):(E.flags|=67108866,w)):(E.flags|=1048576,w)}function h(E){return t&&E.alternate===null&&(E.flags|=67108866),E}function v(E,w,D,L){return w===null||w.tag!==6?(w=ou(D,E.mode,L),w.return=E,w):(w=l(w,D),w.return=E,w)}function T(E,w,D,L){var it=D.type;return it===Y?_(E,w,D.props.children,L,D.key):w!==null&&(w.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===I&&Vi(it)===w.type)?(w=l(w,D.props),bs(w,D),w.return=E,w):(w=Nr(D.type,D.key,D.props,null,E.mode,L),bs(w,D),w.return=E,w)}function z(E,w,D,L){return w===null||w.tag!==4||w.stateNode.containerInfo!==D.containerInfo||w.stateNode.implementation!==D.implementation?(w=lu(D,E.mode,L),w.return=E,w):(w=l(w,D.children||[]),w.return=E,w)}function _(E,w,D,L,it){return w===null||w.tag!==7?(w=Di(D,E.mode,L,it),w.return=E,w):(w=l(w,D),w.return=E,w)}function U(E,w,D){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=ou(""+w,E.mode,D),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case M:return D=Nr(w.type,w.key,w.props,null,E.mode,D),bs(D,w),D.return=E,D;case N:return w=lu(w,E.mode,D),w.return=E,w;case I:return w=Vi(w),U(E,w,D)}if(pe(w)||Ft(w))return w=Di(w,E.mode,D,null),w.return=E,w;if(typeof w.then=="function")return U(E,Xr(w),D);if(w.$$typeof===G)return U(E,Hr(E,w),D);$r(E,w)}return null}function j(E,w,D,L){var it=w!==null?w.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return it!==null?null:v(E,w,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case M:return D.key===it?T(E,w,D,L):null;case N:return D.key===it?z(E,w,D,L):null;case I:return D=Vi(D),j(E,w,D,L)}if(pe(D)||Ft(D))return it!==null?null:_(E,w,D,L,null);if(typeof D.then=="function")return j(E,w,Xr(D),L);if(D.$$typeof===G)return j(E,w,Hr(E,D),L);$r(E,D)}return null}function R(E,w,D,L,it){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return E=E.get(D)||null,v(w,E,""+L,it);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case M:return E=E.get(L.key===null?D:L.key)||null,T(w,E,L,it);case N:return E=E.get(L.key===null?D:L.key)||null,z(w,E,L,it);case I:return L=Vi(L),R(E,w,D,L,it)}if(pe(L)||Ft(L))return E=E.get(D)||null,_(w,E,L,it,null);if(typeof L.then=="function")return R(E,w,D,Xr(L),it);if(L.$$typeof===G)return R(E,w,D,Hr(w,L),it);$r(w,L)}return null}function tt(E,w,D,L){for(var it=null,St=null,nt=w,ft=w=0,yt=null;nt!==null&&ft<D.length;ft++){nt.index>ft?(yt=nt,nt=null):yt=nt.sibling;var Tt=j(E,nt,D[ft],L);if(Tt===null){nt===null&&(nt=yt);break}t&&nt&&Tt.alternate===null&&e(E,nt),w=u(Tt,w,ft),St===null?it=Tt:St.sibling=Tt,St=Tt,nt=yt}if(ft===D.length)return i(E,nt),bt&&Cn(E,ft),it;if(nt===null){for(;ft<D.length;ft++)nt=U(E,D[ft],L),nt!==null&&(w=u(nt,w,ft),St===null?it=nt:St.sibling=nt,St=nt);return bt&&Cn(E,ft),it}for(nt=s(nt);ft<D.length;ft++)yt=R(nt,E,ft,D[ft],L),yt!==null&&(t&&yt.alternate!==null&&nt.delete(yt.key===null?ft:yt.key),w=u(yt,w,ft),St===null?it=yt:St.sibling=yt,St=yt);return t&&nt.forEach(function(pi){return e(E,pi)}),bt&&Cn(E,ft),it}function at(E,w,D,L){if(D==null)throw Error(o(151));for(var it=null,St=null,nt=w,ft=w=0,yt=null,Tt=D.next();nt!==null&&!Tt.done;ft++,Tt=D.next()){nt.index>ft?(yt=nt,nt=null):yt=nt.sibling;var pi=j(E,nt,Tt.value,L);if(pi===null){nt===null&&(nt=yt);break}t&&nt&&pi.alternate===null&&e(E,nt),w=u(pi,w,ft),St===null?it=pi:St.sibling=pi,St=pi,nt=yt}if(Tt.done)return i(E,nt),bt&&Cn(E,ft),it;if(nt===null){for(;!Tt.done;ft++,Tt=D.next())Tt=U(E,Tt.value,L),Tt!==null&&(w=u(Tt,w,ft),St===null?it=Tt:St.sibling=Tt,St=Tt);return bt&&Cn(E,ft),it}for(nt=s(nt);!Tt.done;ft++,Tt=D.next())Tt=R(nt,E,ft,Tt.value,L),Tt!==null&&(t&&Tt.alternate!==null&&nt.delete(Tt.key===null?ft:Tt.key),w=u(Tt,w,ft),St===null?it=Tt:St.sibling=Tt,St=Tt);return t&&nt.forEach(function(xS){return e(E,xS)}),bt&&Cn(E,ft),it}function Rt(E,w,D,L){if(typeof D=="object"&&D!==null&&D.type===Y&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case M:t:{for(var it=D.key;w!==null;){if(w.key===it){if(it=D.type,it===Y){if(w.tag===7){i(E,w.sibling),L=l(w,D.props.children),L.return=E,E=L;break t}}else if(w.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===I&&Vi(it)===w.type){i(E,w.sibling),L=l(w,D.props),bs(L,D),L.return=E,E=L;break t}i(E,w);break}else e(E,w);w=w.sibling}D.type===Y?(L=Di(D.props.children,E.mode,L,D.key),L.return=E,E=L):(L=Nr(D.type,D.key,D.props,null,E.mode,L),bs(L,D),L.return=E,E=L)}return h(E);case N:t:{for(it=D.key;w!==null;){if(w.key===it)if(w.tag===4&&w.stateNode.containerInfo===D.containerInfo&&w.stateNode.implementation===D.implementation){i(E,w.sibling),L=l(w,D.children||[]),L.return=E,E=L;break t}else{i(E,w);break}else e(E,w);w=w.sibling}L=lu(D,E.mode,L),L.return=E,E=L}return h(E);case I:return D=Vi(D),Rt(E,w,D,L)}if(pe(D))return tt(E,w,D,L);if(Ft(D)){if(it=Ft(D),typeof it!="function")throw Error(o(150));return D=it.call(D),at(E,w,D,L)}if(typeof D.then=="function")return Rt(E,w,Xr(D),L);if(D.$$typeof===G)return Rt(E,w,Hr(E,D),L);$r(E,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,w!==null&&w.tag===6?(i(E,w.sibling),L=l(w,D),L.return=E,E=L):(i(E,w),L=ou(D,E.mode,L),L.return=E,E=L),h(E)):i(E,w)}return function(E,w,D,L){try{vs=0;var it=Rt(E,w,D,L);return ma=null,it}catch(nt){if(nt===pa||nt===Yr)throw nt;var St=Ve(29,nt,null,E.mode);return St.lanes=L,St.return=E,St}finally{}}}var ki=Fh(!0),Ih=Fh(!1),Wn=!1;function xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function In(t,e,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(At&2)!==0){var l=s.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),s.pending=e,e=Br(t),Bh(t,null,i),e}return kr(t,s,e,i),Br(t)}function xs(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var s=e.lanes;s&=t.pendingLanes,i|=s,e.lanes=i,Xd(t,i)}}function Tu(t,e){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var h={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?l=u=h:u=u.next=h,i=i.next}while(i!==null);u===null?l=u=e:u=u.next=e}else l=u=e;i={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var Au=!1;function Ss(){if(Au){var t=ha;if(t!==null)throw t}}function Ts(t,e,i,s){Au=!1;var l=t.updateQueue;Wn=!1;var u=l.firstBaseUpdate,h=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var T=v,z=T.next;T.next=null,h===null?u=z:h.next=z,h=T;var _=t.alternate;_!==null&&(_=_.updateQueue,v=_.lastBaseUpdate,v!==h&&(v===null?_.firstBaseUpdate=z:v.next=z,_.lastBaseUpdate=T))}if(u!==null){var U=l.baseState;h=0,_=z=T=null,v=u;do{var j=v.lane&-536870913,R=j!==v.lane;if(R?(gt&j)===j:(s&j)===j){j!==0&&j===da&&(Au=!0),_!==null&&(_=_.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var tt=t,at=v;j=e;var Rt=i;switch(at.tag){case 1:if(tt=at.payload,typeof tt=="function"){U=tt.call(Rt,U,j);break t}U=tt;break t;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=at.payload,j=typeof tt=="function"?tt.call(Rt,U,j):tt,j==null)break t;U=b({},U,j);break t;case 2:Wn=!0}}j=v.callback,j!==null&&(t.flags|=64,R&&(t.flags|=8192),R=l.callbacks,R===null?l.callbacks=[j]:R.push(j))}else R={lane:j,tag:v.tag,payload:v.payload,callback:v.callback,next:null},_===null?(z=_=R,T=U):_=_.next=R,h|=j;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;R=v,v=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);_===null&&(T=U),l.baseState=T,l.firstBaseUpdate=z,l.lastBaseUpdate=_,u===null&&(l.shared.lanes=0),ai|=h,t.lanes=h,t.memoizedState=U}}function tp(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function ep(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)tp(i[t],e)}var ga=A(null),Qr=A(0);function np(t,e){t=Nn,J(Qr,t),J(ga,e),Nn=t|e.baseLanes}function wu(){J(Qr,Nn),J(ga,ga.current)}function Eu(){Nn=Qr.current,B(ga),B(Qr)}var _e=A(null),Ze=null;function ti(t){var e=t.alternate;J(Xt,Xt.current&1),J(_e,t),Ze===null&&(e===null||ga.current!==null||e.memoizedState!==null)&&(Ze=t)}function Cu(t){J(Xt,Xt.current),J(_e,t),Ze===null&&(Ze=t)}function ip(t){t.tag===22?(J(Xt,Xt.current),J(_e,t),Ze===null&&(Ze=t)):ei()}function ei(){J(Xt,Xt.current),J(_e,_e.current)}function ke(t){B(_e),Ze===t&&(Ze=null),B(Xt)}var Xt=A(0);function Kr(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Oc(i)||Vc(i)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zn=0,ct=null,zt=null,Kt=null,Zr=!1,ya=!1,Bi=!1,Pr=0,As=0,va=null,cx=0;function Ut(){throw Error(o(321))}function Mu(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Oe(t[i],e[i]))return!1;return!0}function Du(t,e,i,s,l,u){return zn=u,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,k.H=t===null||t.memoizedState===null?Hp:qu,Bi=!1,u=i(s,l),Bi=!1,ya&&(u=sp(e,i,s,l)),ap(t),u}function ap(t){k.H=Cs;var e=zt!==null&&zt.next!==null;if(zn=0,Kt=zt=ct=null,Zr=!1,As=0,va=null,e)throw Error(o(300));t===null||Zt||(t=t.dependencies,t!==null&&Ur(t)&&(Zt=!0))}function sp(t,e,i,s){ct=t;var l=0;do{if(ya&&(va=null),As=0,ya=!1,25<=l)throw Error(o(301));if(l+=1,Kt=zt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}k.H=Gp,u=e(i,s)}while(ya);return u}function fx(){var t=k.H,e=t.useState()[0];return e=typeof e.then=="function"?ws(e):e,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(ct.flags|=1024),e}function zu(){var t=Pr!==0;return Pr=0,t}function ju(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function Ru(t){if(Zr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Zr=!1}zn=0,Kt=zt=ct=null,ya=!1,As=Pr=0,va=null}function ye(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?ct.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function $t(){if(zt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Kt===null?ct.memoizedState:Kt.next;if(e!==null)Kt=e,zt=t;else{if(t===null)throw ct.alternate===null?Error(o(467)):Error(o(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Kt===null?ct.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function Jr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ws(t){var e=As;return As+=1,va===null&&(va=[]),t=Ph(va,t,e),e=ct,(Kt===null?e.memoizedState:Kt.next)===null&&(e=e.alternate,k.H=e===null||e.memoizedState===null?Hp:qu),t}function Wr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ws(t);if(t.$$typeof===G)return ce(t)}throw Error(o(438,String(t)))}function Ou(t){var e=null,i=ct.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var s=ct.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(e={data:s.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Jr(),ct.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),s=0;s<t;s++)i[s]=Bt;return e.index++,i}function jn(t,e){return typeof e=="function"?e(t):e}function Fr(t){var e=$t();return Vu(e,zt,t)}function Vu(t,e,i){var s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=i;var l=t.baseQueue,u=s.pending;if(u!==null){if(l!==null){var h=l.next;l.next=u.next,u.next=h}e.baseQueue=l=u,s.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{e=l.next;var v=h=null,T=null,z=e,_=!1;do{var U=z.lane&-536870913;if(U!==z.lane?(gt&U)===U:(zn&U)===U){var j=z.revertLane;if(j===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),U===da&&(_=!0);else if((zn&j)===j){z=z.next,j===da&&(_=!0);continue}else U={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},T===null?(v=T=U,h=u):T=T.next=U,ct.lanes|=j,ai|=j;U=z.action,Bi&&i(u,U),u=z.hasEagerState?z.eagerState:i(u,U)}else j={lane:U,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},T===null?(v=T=j,h=u):T=T.next=j,ct.lanes|=U,ai|=U;z=z.next}while(z!==null&&z!==e);if(T===null?h=u:T.next=v,!Oe(u,t.memoizedState)&&(Zt=!0,_&&(i=ha,i!==null)))throw i;t.memoizedState=u,t.baseState=h,t.baseQueue=T,s.lastRenderedState=u}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function _u(t){var e=$t(),i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var s=i.dispatch,l=i.pending,u=e.memoizedState;if(l!==null){i.pending=null;var h=l=l.next;do u=t(u,h.action),h=h.next;while(h!==l);Oe(u,e.memoizedState)||(Zt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),i.lastRenderedState=u}return[u,s]}function rp(t,e,i){var s=ct,l=$t(),u=bt;if(u){if(i===void 0)throw Error(o(407));i=i()}else i=e();var h=!Oe((zt||l).memoizedState,i);if(h&&(l.memoizedState=i,Zt=!0),l=l.queue,Nu(up.bind(null,s,l,t),[t]),l.getSnapshot!==e||h||Kt!==null&&Kt.memoizedState.tag&1){if(s.flags|=2048,ba(9,{destroy:void 0},lp.bind(null,s,l,i,e),null),Ot===null)throw Error(o(349));u||(zn&127)!==0||op(s,e,i)}return i}function op(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=ct.updateQueue,e===null?(e=Jr(),ct.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function lp(t,e,i,s){e.value=i,e.getSnapshot=s,cp(e)&&fp(t)}function up(t,e,i){return i(function(){cp(e)&&fp(t)})}function cp(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Oe(t,i)}catch{return!0}}function fp(t){var e=Mi(t,2);e!==null&&Ce(e,t,2)}function ku(t){var e=ye();if(typeof t=="function"){var i=t;if(t=i(),Bi){Xn(!0);try{i()}finally{Xn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:t},e}function dp(t,e,i,s){return t.baseState=i,Vu(t,zt,typeof s=="function"?s:jn)}function dx(t,e,i,s,l){if(eo(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};k.T!==null?i(!0):u.isTransition=!1,s(u),i=e.pending,i===null?(u.next=e.pending=u,hp(e,u)):(u.next=i.next,e.pending=i.next=u)}}function hp(t,e){var i=e.action,s=e.payload,l=t.state;if(e.isTransition){var u=k.T,h={};k.T=h;try{var v=i(l,s),T=k.S;T!==null&&T(h,v),pp(t,e,v)}catch(z){Bu(t,e,z)}finally{u!==null&&h.types!==null&&(u.types=h.types),k.T=u}}else try{u=i(l,s),pp(t,e,u)}catch(z){Bu(t,e,z)}}function pp(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){mp(t,e,s)},function(s){return Bu(t,e,s)}):mp(t,e,i)}function mp(t,e,i){e.status="fulfilled",e.value=i,gp(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,hp(t,i)))}function Bu(t,e,i){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do e.status="rejected",e.reason=i,gp(e),e=e.next;while(e!==s)}t.action=null}function gp(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function yp(t,e){return e}function vp(t,e){if(bt){var i=Ot.formState;if(i!==null){t:{var s=ct;if(bt){if(Vt){e:{for(var l=Vt,u=Ke;l.nodeType!==8;){if(!u){l=null;break e}if(l=Pe(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Vt=Pe(l.nextSibling),s=l.data==="F!";break t}}Pn(s)}s=!1}s&&(e=i[0])}}return i=ye(),i.memoizedState=i.baseState=e,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yp,lastRenderedState:e},i.queue=s,i=Np.bind(null,ct,s),s.dispatch=i,s=ku(!1),u=Yu.bind(null,ct,!1,s.queue),s=ye(),l={state:e,dispatch:null,action:t,pending:null},s.queue=l,i=dx.bind(null,ct,l,u,i),l.dispatch=i,s.memoizedState=t,[e,i,!1]}function bp(t){var e=$t();return xp(e,zt,t)}function xp(t,e,i){if(e=Vu(t,e,yp)[0],t=Fr(jn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var s=ws(e)}catch(h){throw h===pa?Yr:h}else s=e;e=$t();var l=e.queue,u=l.dispatch;return i!==e.memoizedState&&(ct.flags|=2048,ba(9,{destroy:void 0},hx.bind(null,l,i),null)),[s,u,t]}function hx(t,e){t.action=e}function Sp(t){var e=$t(),i=zt;if(i!==null)return xp(e,i,t);$t(),e=e.memoizedState,i=$t();var s=i.queue.dispatch;return i.memoizedState=t,[e,s,!1]}function ba(t,e,i,s){return t={tag:t,create:i,deps:s,inst:e,next:null},e=ct.updateQueue,e===null&&(e=Jr(),ct.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,e.lastEffect=t),t}function Tp(){return $t().memoizedState}function Ir(t,e,i,s){var l=ye();ct.flags|=t,l.memoizedState=ba(1|e,{destroy:void 0},i,s===void 0?null:s)}function to(t,e,i,s){var l=$t();s=s===void 0?null:s;var u=l.memoizedState.inst;zt!==null&&s!==null&&Mu(s,zt.memoizedState.deps)?l.memoizedState=ba(e,u,i,s):(ct.flags|=t,l.memoizedState=ba(1|e,u,i,s))}function Ap(t,e){Ir(8390656,8,t,e)}function Nu(t,e){to(2048,8,t,e)}function px(t){ct.flags|=4;var e=ct.updateQueue;if(e===null)e=Jr(),ct.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function wp(t){var e=$t().memoizedState;return px({ref:e,nextImpl:t}),function(){if((At&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function Ep(t,e){return to(4,2,t,e)}function Cp(t,e){return to(4,4,t,e)}function Mp(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dp(t,e,i){i=i!=null?i.concat([t]):null,to(4,4,Mp.bind(null,e,t),i)}function Lu(){}function zp(t,e){var i=$t();e=e===void 0?null:e;var s=i.memoizedState;return e!==null&&Mu(e,s[1])?s[0]:(i.memoizedState=[t,e],t)}function jp(t,e){var i=$t();e=e===void 0?null:e;var s=i.memoizedState;if(e!==null&&Mu(e,s[1]))return s[0];if(s=t(),Bi){Xn(!0);try{t()}finally{Xn(!1)}}return i.memoizedState=[s,e],s}function Uu(t,e,i){return i===void 0||(zn&1073741824)!==0&&(gt&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=Rm(),ct.lanes|=t,ai|=t,i)}function Rp(t,e,i,s){return Oe(i,e)?i:ga.current!==null?(t=Uu(t,i,s),Oe(t,e)||(Zt=!0),t):(zn&42)===0||(zn&1073741824)!==0&&(gt&261930)===0?(Zt=!0,t.memoizedState=i):(t=Rm(),ct.lanes|=t,ai|=t,e)}function Op(t,e,i,s,l){var u=$.p;$.p=u!==0&&8>u?u:8;var h=k.T,v={};k.T=v,Yu(t,!1,e,i);try{var T=l(),z=k.S;if(z!==null&&z(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var _=ux(T,s);Es(t,e,_,Le(t))}else Es(t,e,s,Le(t))}catch(U){Es(t,e,{then:function(){},status:"rejected",reason:U},Le())}finally{$.p=u,h!==null&&v.types!==null&&(h.types=v.types),k.T=h}}function mx(){}function Hu(t,e,i,s){if(t.tag!==5)throw Error(o(476));var l=Vp(t).queue;Op(t,l,e,et,i===null?mx:function(){return _p(t),i(s)})}function Vp(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:et},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function _p(t){var e=Vp(t);e.next===null&&(e=t.alternate.memoizedState),Es(t,e.next.queue,{},Le())}function Gu(){return ce(Ys)}function kp(){return $t().memoizedState}function Bp(){return $t().memoizedState}function gx(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=Le();t=Fn(i);var s=In(e,t,i);s!==null&&(Ce(s,e,i),xs(s,e,i)),e={cache:gu()},t.payload=e;return}e=e.return}}function yx(t,e,i){var s=Le();i={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},eo(t)?Lp(e,i):(i=su(t,e,i,s),i!==null&&(Ce(i,t,s),Up(i,e,s)))}function Np(t,e,i){var s=Le();Es(t,e,i,s)}function Es(t,e,i,s){var l={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(eo(t))Lp(e,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var h=e.lastRenderedState,v=u(h,i);if(l.hasEagerState=!0,l.eagerState=v,Oe(v,h))return kr(t,e,l,0),Ot===null&&_r(),!1}catch{}finally{}if(i=su(t,e,l,s),i!==null)return Ce(i,t,s),Up(i,e,s),!0}return!1}function Yu(t,e,i,s){if(s={lane:2,revertLane:xc(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},eo(t)){if(e)throw Error(o(479))}else e=su(t,i,s,2),e!==null&&Ce(e,t,2)}function eo(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Lp(t,e){ya=Zr=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Up(t,e,i){if((i&4194048)!==0){var s=e.lanes;s&=t.pendingLanes,i|=s,e.lanes=i,Xd(t,i)}}var Cs={readContext:ce,use:Wr,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut};Cs.useEffectEvent=Ut;var Hp={readContext:ce,use:Wr,useCallback:function(t,e){return ye().memoizedState=[t,e===void 0?null:e],t},useContext:ce,useEffect:Ap,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,Ir(4194308,4,Mp.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Ir(4194308,4,t,e)},useInsertionEffect:function(t,e){Ir(4,2,t,e)},useMemo:function(t,e){var i=ye();e=e===void 0?null:e;var s=t();if(Bi){Xn(!0);try{t()}finally{Xn(!1)}}return i.memoizedState=[s,e],s},useReducer:function(t,e,i){var s=ye();if(i!==void 0){var l=i(e);if(Bi){Xn(!0);try{i(e)}finally{Xn(!1)}}}else l=e;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=yx.bind(null,ct,t),[s.memoizedState,t]},useRef:function(t){var e=ye();return t={current:t},e.memoizedState=t},useState:function(t){t=ku(t);var e=t.queue,i=Np.bind(null,ct,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Lu,useDeferredValue:function(t,e){var i=ye();return Uu(i,t,e)},useTransition:function(){var t=ku(!1);return t=Op.bind(null,ct,t.queue,!0,!1),ye().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var s=ct,l=ye();if(bt){if(i===void 0)throw Error(o(407));i=i()}else{if(i=e(),Ot===null)throw Error(o(349));(gt&127)!==0||op(s,e,i)}l.memoizedState=i;var u={value:i,getSnapshot:e};return l.queue=u,Ap(up.bind(null,s,u,t),[t]),s.flags|=2048,ba(9,{destroy:void 0},lp.bind(null,s,u,i,e),null),i},useId:function(){var t=ye(),e=Ot.identifierPrefix;if(bt){var i=hn,s=dn;i=(s&~(1<<32-Re(s)-1)).toString(32)+i,e="_"+e+"R_"+i,i=Pr++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=cx++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Gu,useFormState:vp,useActionState:vp,useOptimistic:function(t){var e=ye();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Yu.bind(null,ct,!0,i),i.dispatch=e,[t,e]},useMemoCache:Ou,useCacheRefresh:function(){return ye().memoizedState=gx.bind(null,ct)},useEffectEvent:function(t){var e=ye(),i={impl:t};return e.memoizedState=i,function(){if((At&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}},qu={readContext:ce,use:Wr,useCallback:zp,useContext:ce,useEffect:Nu,useImperativeHandle:Dp,useInsertionEffect:Ep,useLayoutEffect:Cp,useMemo:jp,useReducer:Fr,useRef:Tp,useState:function(){return Fr(jn)},useDebugValue:Lu,useDeferredValue:function(t,e){var i=$t();return Rp(i,zt.memoizedState,t,e)},useTransition:function(){var t=Fr(jn)[0],e=$t().memoizedState;return[typeof t=="boolean"?t:ws(t),e]},useSyncExternalStore:rp,useId:kp,useHostTransitionStatus:Gu,useFormState:bp,useActionState:bp,useOptimistic:function(t,e){var i=$t();return dp(i,zt,t,e)},useMemoCache:Ou,useCacheRefresh:Bp};qu.useEffectEvent=wp;var Gp={readContext:ce,use:Wr,useCallback:zp,useContext:ce,useEffect:Nu,useImperativeHandle:Dp,useInsertionEffect:Ep,useLayoutEffect:Cp,useMemo:jp,useReducer:_u,useRef:Tp,useState:function(){return _u(jn)},useDebugValue:Lu,useDeferredValue:function(t,e){var i=$t();return zt===null?Uu(i,t,e):Rp(i,zt.memoizedState,t,e)},useTransition:function(){var t=_u(jn)[0],e=$t().memoizedState;return[typeof t=="boolean"?t:ws(t),e]},useSyncExternalStore:rp,useId:kp,useHostTransitionStatus:Gu,useFormState:Sp,useActionState:Sp,useOptimistic:function(t,e){var i=$t();return zt!==null?dp(i,zt,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Ou,useCacheRefresh:Bp};Gp.useEffectEvent=wp;function Xu(t,e,i,s){e=t.memoizedState,i=i(s,e),i=i==null?e:b({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var $u={enqueueSetState:function(t,e,i){t=t._reactInternals;var s=Le(),l=Fn(s);l.payload=e,i!=null&&(l.callback=i),e=In(t,l,s),e!==null&&(Ce(e,t,s),xs(e,t,s))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var s=Le(),l=Fn(s);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=In(t,l,s),e!==null&&(Ce(e,t,s),xs(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=Le(),s=Fn(i);s.tag=2,e!=null&&(s.callback=e),e=In(t,s,i),e!==null&&(Ce(e,t,i),xs(e,t,i))}};function Yp(t,e,i,s,l,u,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,h):e.prototype&&e.prototype.isPureReactComponent?!ds(i,s)||!ds(l,u):!0}function qp(t,e,i,s){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,s),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,s),e.state!==t&&$u.enqueueReplaceState(e,e.state,null)}function Ni(t,e){var i=e;if("ref"in e){i={};for(var s in e)s!=="ref"&&(i[s]=e[s])}if(t=t.defaultProps){i===e&&(i=b({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Xp(t){Vr(t)}function $p(t){console.error(t)}function Qp(t){Vr(t)}function no(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(s){setTimeout(function(){throw s})}}function Kp(t,e,i){try{var s=t.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Qu(t,e,i){return i=Fn(i),i.tag=3,i.payload={element:null},i.callback=function(){no(t,e)},i}function Zp(t){return t=Fn(t),t.tag=3,t}function Pp(t,e,i,s){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var u=s.value;t.payload=function(){return l(u)},t.callback=function(){Kp(e,i,s)}}var h=i.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){Kp(e,i,s),typeof l!="function"&&(si===null?si=new Set([this]):si.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})})}function vx(t,e,i,s,l){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(e=i.alternate,e!==null&&fa(e,i,l,!0),i=_e.current,i!==null){switch(i.tag){case 31:case 13:return Ze===null?mo():i.alternate===null&&Ht===0&&(Ht=3),i.flags&=-257,i.flags|=65536,i.lanes=l,s===qr?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([s]):e.add(s),yc(t,s,l)),!1;case 22:return i.flags|=65536,s===qr?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([s]):i.add(s)),yc(t,s,l)),!1}throw Error(o(435,i.tag))}return yc(t,s,l),mo(),!1}if(bt)return e=_e.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,s!==fu&&(t=Error(o(422),{cause:s}),ms(Xe(t,i)))):(s!==fu&&(e=Error(o(423),{cause:s}),ms(Xe(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=Xe(s,i),l=Qu(t.stateNode,s,l),Tu(t,l),Ht!==4&&(Ht=2)),!1;var u=Error(o(520),{cause:s});if(u=Xe(u,i),_s===null?_s=[u]:_s.push(u),Ht!==4&&(Ht=2),e===null)return!0;s=Xe(s,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Qu(i.stateNode,s,t),Tu(i,t),!1;case 1:if(e=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(si===null||!si.has(u))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Zp(l),Pp(l,t,i,s),Tu(i,l),!1}i=i.return}while(i!==null);return!1}var Ku=Error(o(461)),Zt=!1;function fe(t,e,i,s){e.child=t===null?Ih(e,null,i,s):ki(e,t.child,i,s)}function Jp(t,e,i,s,l){i=i.render;var u=e.ref;if("ref"in s){var h={};for(var v in s)v!=="ref"&&(h[v]=s[v])}else h=s;return Ri(e),s=Du(t,e,i,h,u,l),v=zu(),t!==null&&!Zt?(ju(t,e,l),Rn(t,e,l)):(bt&&v&&uu(e),e.flags|=1,fe(t,e,s,l),e.child)}function Wp(t,e,i,s,l){if(t===null){var u=i.type;return typeof u=="function"&&!ru(u)&&u.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=u,Fp(t,e,u,s,l)):(t=Nr(i.type,null,s,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!ec(t,l)){var h=u.memoizedProps;if(i=i.compare,i=i!==null?i:ds,i(h,s)&&t.ref===e.ref)return Rn(t,e,l)}return e.flags|=1,t=En(u,s),t.ref=e.ref,t.return=e,e.child=t}function Fp(t,e,i,s,l){if(t!==null){var u=t.memoizedProps;if(ds(u,s)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=s=u,ec(t,l))(t.flags&131072)!==0&&(Zt=!0);else return e.lanes=t.lanes,Rn(t,e,l)}return Zu(t,e,i,s,l)}function Ip(t,e,i,s){var l=s.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,t!==null){for(s=e.child=t.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~u}else s=0,e.child=null;return tm(t,e,u,i,s)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gr(e,u!==null?u.cachePool:null),u!==null?np(e,u):wu(),ip(e);else return s=e.lanes=536870912,tm(t,e,u!==null?u.baseLanes|i:i,i,s)}else u!==null?(Gr(e,u.cachePool),np(e,u),ei(),e.memoizedState=null):(t!==null&&Gr(e,null),wu(),ei());return fe(t,e,l,i),e.child}function Ms(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function tm(t,e,i,s,l){var u=vu();return u=u===null?null:{parent:Qt._currentValue,pool:u},e.memoizedState={baseLanes:i,cachePool:u},t!==null&&Gr(e,null),wu(),ip(e),t!==null&&fa(t,e,s,!0),e.childLanes=l,null}function io(t,e){return e=so({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function em(t,e,i){return ki(e,t.child,null,i),t=io(e,e.pendingProps),t.flags|=2,ke(e),e.memoizedState=null,t}function bx(t,e,i){var s=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(bt){if(s.mode==="hidden")return t=io(e,s),e.lanes=536870912,Ms(null,t);if(Cu(e),(t=Vt)?(t=hg(t,Ke),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Kn!==null?{id:dn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},i=Lh(t),i.return=e,e.child=i,ue=e,Vt=null)):t=null,t===null)throw Pn(e);return e.lanes=536870912,null}return io(e,s)}var u=t.memoizedState;if(u!==null){var h=u.dehydrated;if(Cu(e),l)if(e.flags&256)e.flags&=-257,e=em(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(Zt||fa(t,e,i,!1),l=(i&t.childLanes)!==0,Zt||l){if(s=Ot,s!==null&&(h=$d(s,i),h!==0&&h!==u.retryLane))throw u.retryLane=h,Mi(t,h),Ce(s,t,h),Ku;mo(),e=em(t,e,i)}else t=u.treeContext,Vt=Pe(h.nextSibling),ue=e,bt=!0,Zn=null,Ke=!1,t!==null&&Gh(e,t),e=io(e,s),e.flags|=4096;return e}return t=En(t.child,{mode:s.mode,children:s.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ao(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Zu(t,e,i,s,l){return Ri(e),i=Du(t,e,i,s,void 0,l),s=zu(),t!==null&&!Zt?(ju(t,e,l),Rn(t,e,l)):(bt&&s&&uu(e),e.flags|=1,fe(t,e,i,l),e.child)}function nm(t,e,i,s,l,u){return Ri(e),e.updateQueue=null,i=sp(e,s,i,l),ap(t),s=zu(),t!==null&&!Zt?(ju(t,e,u),Rn(t,e,u)):(bt&&s&&uu(e),e.flags|=1,fe(t,e,i,u),e.child)}function im(t,e,i,s,l){if(Ri(e),e.stateNode===null){var u=oa,h=i.contextType;typeof h=="object"&&h!==null&&(u=ce(h)),u=new i(s,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=$u,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=s,u.state=e.memoizedState,u.refs={},xu(e),h=i.contextType,u.context=typeof h=="object"&&h!==null?ce(h):oa,u.state=e.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Xu(e,i,h,s),u.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&$u.enqueueReplaceState(u,u.state,null),Ts(e,s,u,l),Ss(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),s=!0}else if(t===null){u=e.stateNode;var v=e.memoizedProps,T=Ni(i,v);u.props=T;var z=u.context,_=i.contextType;h=oa,typeof _=="object"&&_!==null&&(h=ce(_));var U=i.getDerivedStateFromProps;_=typeof U=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,_||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||z!==h)&&qp(e,u,s,h),Wn=!1;var j=e.memoizedState;u.state=j,Ts(e,s,u,l),Ss(),z=e.memoizedState,v||j!==z||Wn?(typeof U=="function"&&(Xu(e,i,U,s),z=e.memoizedState),(T=Wn||Yp(e,i,T,s,j,z,h))?(_||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=s,e.memoizedState=z),u.props=s,u.state=z,u.context=h,s=T):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),s=!1)}else{u=e.stateNode,Su(t,e),h=e.memoizedProps,_=Ni(i,h),u.props=_,U=e.pendingProps,j=u.context,z=i.contextType,T=oa,typeof z=="object"&&z!==null&&(T=ce(z)),v=i.getDerivedStateFromProps,(z=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==U||j!==T)&&qp(e,u,s,T),Wn=!1,j=e.memoizedState,u.state=j,Ts(e,s,u,l),Ss();var R=e.memoizedState;h!==U||j!==R||Wn||t!==null&&t.dependencies!==null&&Ur(t.dependencies)?(typeof v=="function"&&(Xu(e,i,v,s),R=e.memoizedState),(_=Wn||Yp(e,i,_,s,j,R,T)||t!==null&&t.dependencies!==null&&Ur(t.dependencies))?(z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,R,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,R,T)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=1024),e.memoizedProps=s,e.memoizedState=R),u.props=s,u.state=R,u.context=T,s=_):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=1024),s=!1)}return u=s,ao(t,e),s=(e.flags&128)!==0,u||s?(u=e.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&s?(e.child=ki(e,t.child,null,l),e.child=ki(e,null,i,l)):fe(t,e,i,l),e.memoizedState=u.state,t=e.child):t=Rn(t,e,l),t}function am(t,e,i,s){return zi(),e.flags|=256,fe(t,e,i,s),e.child}var Pu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ju(t){return{baseLanes:t,cachePool:Kh()}}function Wu(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=Ne),t}function sm(t,e,i){var s=e.pendingProps,l=!1,u=(e.flags&128)!==0,h;if((h=u)||(h=t!==null&&t.memoizedState===null?!1:(Xt.current&2)!==0),h&&(l=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(bt){if(l?ti(e):ei(),(t=Vt)?(t=hg(t,Ke),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Kn!==null?{id:dn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},i=Lh(t),i.return=e,e.child=i,ue=e,Vt=null)):t=null,t===null)throw Pn(e);return Vc(t)?e.lanes=32:e.lanes=536870912,null}var v=s.children;return s=s.fallback,l?(ei(),l=e.mode,v=so({mode:"hidden",children:v},l),s=Di(s,l,i,null),v.return=e,s.return=e,v.sibling=s,e.child=v,s=e.child,s.memoizedState=Ju(i),s.childLanes=Wu(t,h,i),e.memoizedState=Pu,Ms(null,s)):(ti(e),Fu(e,v))}var T=t.memoizedState;if(T!==null&&(v=T.dehydrated,v!==null)){if(u)e.flags&256?(ti(e),e.flags&=-257,e=Iu(t,e,i)):e.memoizedState!==null?(ei(),e.child=t.child,e.flags|=128,e=null):(ei(),v=s.fallback,l=e.mode,s=so({mode:"visible",children:s.children},l),v=Di(v,l,i,null),v.flags|=2,s.return=e,v.return=e,s.sibling=v,e.child=s,ki(e,t.child,null,i),s=e.child,s.memoizedState=Ju(i),s.childLanes=Wu(t,h,i),e.memoizedState=Pu,e=Ms(null,s));else if(ti(e),Vc(v)){if(h=v.nextSibling&&v.nextSibling.dataset,h)var z=h.dgst;h=z,s=Error(o(419)),s.stack="",s.digest=h,ms({value:s,source:null,stack:null}),e=Iu(t,e,i)}else if(Zt||fa(t,e,i,!1),h=(i&t.childLanes)!==0,Zt||h){if(h=Ot,h!==null&&(s=$d(h,i),s!==0&&s!==T.retryLane))throw T.retryLane=s,Mi(t,s),Ce(h,t,s),Ku;Oc(v)||mo(),e=Iu(t,e,i)}else Oc(v)?(e.flags|=192,e.child=t.child,e=null):(t=T.treeContext,Vt=Pe(v.nextSibling),ue=e,bt=!0,Zn=null,Ke=!1,t!==null&&Gh(e,t),e=Fu(e,s.children),e.flags|=4096);return e}return l?(ei(),v=s.fallback,l=e.mode,T=t.child,z=T.sibling,s=En(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&65011712,z!==null?v=En(z,v):(v=Di(v,l,i,null),v.flags|=2),v.return=e,s.return=e,s.sibling=v,e.child=s,Ms(null,s),s=e.child,v=t.child.memoizedState,v===null?v=Ju(i):(l=v.cachePool,l!==null?(T=Qt._currentValue,l=l.parent!==T?{parent:T,pool:T}:l):l=Kh(),v={baseLanes:v.baseLanes|i,cachePool:l}),s.memoizedState=v,s.childLanes=Wu(t,h,i),e.memoizedState=Pu,Ms(t.child,s)):(ti(e),i=t.child,t=i.sibling,i=En(i,{mode:"visible",children:s.children}),i.return=e,i.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=i,e.memoizedState=null,i)}function Fu(t,e){return e=so({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function so(t,e){return t=Ve(22,t,null,e),t.lanes=0,t}function Iu(t,e,i){return ki(e,t.child,null,i),t=Fu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rm(t,e,i){t.lanes|=e;var s=t.alternate;s!==null&&(s.lanes|=e),pu(t.return,e,i)}function tc(t,e,i,s,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:l,treeForkCount:u}:(h.isBackwards=e,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=i,h.tailMode=l,h.treeForkCount=u)}function om(t,e,i){var s=e.pendingProps,l=s.revealOrder,u=s.tail;s=s.children;var h=Xt.current,v=(h&2)!==0;if(v?(h=h&1|2,e.flags|=128):h&=1,J(Xt,h),fe(t,e,s,i),s=bt?ps:0,!v&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rm(t,i,e);else if(t.tag===19)rm(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"forwards":for(i=e.child,l=null;i!==null;)t=i.alternate,t!==null&&Kr(t)===null&&(l=i),i=i.sibling;i=l,i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),tc(e,!1,l,i,u,s);break;case"backwards":case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Kr(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}tc(e,!0,i,null,u,s);break;case"together":tc(e,!1,null,null,void 0,s);break;default:e.memoizedState=null}return e.child}function Rn(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),ai|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(fa(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,i=En(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=En(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function ec(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ur(t)))}function xx(t,e,i){switch(e.tag){case 3:qt(e,e.stateNode.containerInfo),Jn(e,Qt,t.memoizedState.cache),zi();break;case 27:case 5:xn(e);break;case 4:qt(e,e.stateNode.containerInfo);break;case 10:Jn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Cu(e),null;break;case 13:var s=e.memoizedState;if(s!==null)return s.dehydrated!==null?(ti(e),e.flags|=128,null):(i&e.child.childLanes)!==0?sm(t,e,i):(ti(e),t=Rn(t,e,i),t!==null?t.sibling:null);ti(e);break;case 19:var l=(t.flags&128)!==0;if(s=(i&e.childLanes)!==0,s||(fa(t,e,i,!1),s=(i&e.childLanes)!==0),l){if(s)return om(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(Xt,Xt.current),s)break;return null;case 22:return e.lanes=0,Ip(t,e,i,e.pendingProps);case 24:Jn(e,Qt,t.memoizedState.cache)}return Rn(t,e,i)}function lm(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)Zt=!0;else{if(!ec(t,i)&&(e.flags&128)===0)return Zt=!1,xx(t,e,i);Zt=(t.flags&131072)!==0}else Zt=!1,bt&&(e.flags&1048576)!==0&&Hh(e,ps,e.index);switch(e.lanes=0,e.tag){case 16:t:{var s=e.pendingProps;if(t=Vi(e.elementType),e.type=t,typeof t=="function")ru(t)?(s=Ni(t,s),e.tag=1,e=im(null,e,t,s,i)):(e.tag=0,e=Zu(null,e,t,s,i));else{if(t!=null){var l=t.$$typeof;if(l===W){e.tag=11,e=Jp(null,e,t,s,i);break t}else if(l===H){e.tag=14,e=Wp(null,e,t,s,i);break t}}throw e=be(t)||t,Error(o(306,e,""))}}return e;case 0:return Zu(t,e,e.type,e.pendingProps,i);case 1:return s=e.type,l=Ni(s,e.pendingProps),im(t,e,s,l,i);case 3:t:{if(qt(e,e.stateNode.containerInfo),t===null)throw Error(o(387));s=e.pendingProps;var u=e.memoizedState;l=u.element,Su(t,e),Ts(e,s,null,i);var h=e.memoizedState;if(s=h.cache,Jn(e,Qt,s),s!==u.cache&&mu(e,[Qt],i,!0),Ss(),s=h.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=am(t,e,s,i);break t}else if(s!==l){l=Xe(Error(o(424)),e),ms(l),e=am(t,e,s,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Vt=Pe(t.firstChild),ue=e,bt=!0,Zn=null,Ke=!0,i=Ih(e,null,s,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(zi(),s===l){e=Rn(t,e,i);break t}fe(t,e,s,i)}e=e.child}return e;case 26:return ao(t,e),t===null?(i=bg(e.type,null,e.pendingProps,null))?e.memoizedState=i:bt||(i=e.type,t=e.pendingProps,s=To(ut.current).createElement(i),s[le]=e,s[xe]=t,de(s,i,t),ee(s),e.stateNode=s):e.memoizedState=bg(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return xn(e),t===null&&bt&&(s=e.stateNode=gg(e.type,e.pendingProps,ut.current),ue=e,Ke=!0,l=Vt,ui(e.type)?(_c=l,Vt=Pe(s.firstChild)):Vt=l),fe(t,e,e.pendingProps.children,i),ao(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&bt&&((l=s=Vt)&&(s=Jx(s,e.type,e.pendingProps,Ke),s!==null?(e.stateNode=s,ue=e,Vt=Pe(s.firstChild),Ke=!1,l=!0):l=!1),l||Pn(e)),xn(e),l=e.type,u=e.pendingProps,h=t!==null?t.memoizedProps:null,s=u.children,zc(l,u)?s=null:h!==null&&zc(l,h)&&(e.flags|=32),e.memoizedState!==null&&(l=Du(t,e,fx,null,null,i),Ys._currentValue=l),ao(t,e),fe(t,e,s,i),e.child;case 6:return t===null&&bt&&((t=i=Vt)&&(i=Wx(i,e.pendingProps,Ke),i!==null?(e.stateNode=i,ue=e,Vt=null,t=!0):t=!1),t||Pn(e)),null;case 13:return sm(t,e,i);case 4:return qt(e,e.stateNode.containerInfo),s=e.pendingProps,t===null?e.child=ki(e,null,s,i):fe(t,e,s,i),e.child;case 11:return Jp(t,e,e.type,e.pendingProps,i);case 7:return fe(t,e,e.pendingProps,i),e.child;case 8:return fe(t,e,e.pendingProps.children,i),e.child;case 12:return fe(t,e,e.pendingProps.children,i),e.child;case 10:return s=e.pendingProps,Jn(e,e.type,s.value),fe(t,e,s.children,i),e.child;case 9:return l=e.type._context,s=e.pendingProps.children,Ri(e),l=ce(l),s=s(l),e.flags|=1,fe(t,e,s,i),e.child;case 14:return Wp(t,e,e.type,e.pendingProps,i);case 15:return Fp(t,e,e.type,e.pendingProps,i);case 19:return om(t,e,i);case 31:return bx(t,e,i);case 22:return Ip(t,e,i,e.pendingProps);case 24:return Ri(e),s=ce(Qt),t===null?(l=vu(),l===null&&(l=Ot,u=gu(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=i),l=u),e.memoizedState={parent:s,cache:l},xu(e),Jn(e,Qt,l)):((t.lanes&i)!==0&&(Su(t,e),Ts(e,null,null,i),Ss()),l=t.memoizedState,u=e.memoizedState,l.parent!==s?(l={parent:s,cache:s},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Jn(e,Qt,s)):(s=u.cache,Jn(e,Qt,s),s!==l.cache&&mu(e,[Qt],i,!0))),fe(t,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function On(t){t.flags|=4}function nc(t,e,i,s,l){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(km())t.flags|=8192;else throw _i=qr,bu}else t.flags&=-16777217}function um(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wg(e))if(km())t.flags|=8192;else throw _i=qr,bu}function ro(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Yd():536870912,t.lanes|=e,Aa|=e)}function Ds(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags&65011712,s|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=i,e}function Sx(t,e,i){var s=e.pendingProps;switch(cu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return _t(e),null;case 3:return i=e.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),Dn(Qt),Ct(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ca(e)?On(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,du())),_t(e),null;case 26:var l=e.type,u=e.memoizedState;return t===null?(On(e),u!==null?(_t(e),um(e,u)):(_t(e),nc(e,l,null,s,i))):u?u!==t.memoizedState?(On(e),_t(e),um(e,u)):(_t(e),e.flags&=-16777217):(t=t.memoizedProps,t!==s&&On(e),_t(e),nc(e,l,t,s,i)),null;case 27:if(Sn(e),i=ut.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==s&&On(e);else{if(!s){if(e.stateNode===null)throw Error(o(166));return _t(e),null}t=F.current,ca(e)?Yh(e):(t=gg(l,s,i),e.stateNode=t,On(e))}return _t(e),null;case 5:if(Sn(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==s&&On(e);else{if(!s){if(e.stateNode===null)throw Error(o(166));return _t(e),null}if(u=F.current,ca(e))Yh(e);else{var h=To(ut.current);switch(u){case 1:u=h.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=h.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=h.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=h.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=h.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?h.createElement("select",{is:s.is}):h.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?h.createElement(l,{is:s.is}):h.createElement(l)}}u[le]=e,u[xe]=s;t:for(h=e.child;h!==null;){if(h.tag===5||h.tag===6)u.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break t;for(;h.sibling===null;){if(h.return===null||h.return===e)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}e.stateNode=u;t:switch(de(u,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&On(e)}}return _t(e),nc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==s&&On(e);else{if(typeof s!="string"&&e.stateNode===null)throw Error(o(166));if(t=ut.current,ca(e)){if(t=e.stateNode,i=e.memoizedProps,s=null,l=ue,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[le]=e,t=!!(t.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||sg(t.nodeValue,i)),t||Pn(e,!0)}else t=To(t).createTextNode(s),t[le]=e,e.stateNode=t}return _t(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(s=ca(e),i!==null){if(t===null){if(!s)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[le]=e}else zi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_t(e),t=!1}else i=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(ke(e),e):(ke(e),null);if((e.flags&128)!==0)throw Error(o(558))}return _t(e),null;case 13:if(s=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ca(e),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[le]=e}else zi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_t(e),l=!1}else l=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(ke(e),e):(ke(e),null)}return ke(e),(e.flags&128)!==0?(e.lanes=i,e):(i=s!==null,t=t!==null&&t.memoizedState!==null,i&&(s=e.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==l&&(s.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),ro(e,e.updateQueue),_t(e),null);case 4:return Ct(),t===null&&wc(e.stateNode.containerInfo),_t(e),null;case 10:return Dn(e.type),_t(e),null;case 19:if(B(Xt),s=e.memoizedState,s===null)return _t(e),null;if(l=(e.flags&128)!==0,u=s.rendering,u===null)if(l)Ds(s,!1);else{if(Ht!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Kr(t),u!==null){for(e.flags|=128,Ds(s,!1),t=u.updateQueue,e.updateQueue=t,ro(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)Nh(i,t),i=i.sibling;return J(Xt,Xt.current&1|2),bt&&Cn(e,s.treeForkCount),e.child}t=t.sibling}s.tail!==null&&ze()>fo&&(e.flags|=128,l=!0,Ds(s,!1),e.lanes=4194304)}else{if(!l)if(t=Kr(u),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,ro(e,t),Ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!bt)return _t(e),null}else 2*ze()-s.renderingStartTime>fo&&i!==536870912&&(e.flags|=128,l=!0,Ds(s,!1),e.lanes=4194304);s.isBackwards?(u.sibling=e.child,e.child=u):(t=s.last,t!==null?t.sibling=u:e.child=u,s.last=u)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ze(),t.sibling=null,i=Xt.current,J(Xt,l?i&1|2:i&1),bt&&Cn(e,s.treeForkCount),t):(_t(e),null);case 22:case 23:return ke(e),Eu(),s=e.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(e.flags|=8192):s&&(e.flags|=8192),s?(i&536870912)!==0&&(e.flags&128)===0&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),i=e.updateQueue,i!==null&&ro(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),s=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),s!==i&&(e.flags|=2048),t!==null&&B(Oi),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Dn(Qt),_t(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function Tx(t,e){switch(cu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Dn(Qt),Ct(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Sn(e),null;case 31:if(e.memoizedState!==null){if(ke(e),e.alternate===null)throw Error(o(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ke(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return B(Xt),null;case 4:return Ct(),null;case 10:return Dn(e.type),null;case 22:case 23:return ke(e),Eu(),t!==null&&B(Oi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Dn(Qt),null;case 25:return null;default:return null}}function cm(t,e){switch(cu(e),e.tag){case 3:Dn(Qt),Ct();break;case 26:case 27:case 5:Sn(e);break;case 4:Ct();break;case 31:e.memoizedState!==null&&ke(e);break;case 13:ke(e);break;case 19:B(Xt);break;case 10:Dn(e.type);break;case 22:case 23:ke(e),Eu(),t!==null&&B(Oi);break;case 24:Dn(Qt)}}function zs(t,e){try{var i=e.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var l=s.next;i=l;do{if((i.tag&t)===t){s=void 0;var u=i.create,h=i.inst;s=u(),h.destroy=s}i=i.next}while(i!==l)}}catch(v){Dt(e,e.return,v)}}function ni(t,e,i){try{var s=e.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){var h=s.inst,v=h.destroy;if(v!==void 0){h.destroy=void 0,l=e;var T=i,z=v;try{z()}catch(_){Dt(l,T,_)}}}s=s.next}while(s!==u)}}catch(_){Dt(e,e.return,_)}}function fm(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{ep(e,i)}catch(s){Dt(t,t.return,s)}}}function dm(t,e,i){i.props=Ni(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(s){Dt(t,e,s)}}function js(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof i=="function"?t.refCleanup=i(s):i.current=s}}catch(l){Dt(t,e,l)}}function pn(t,e){var i=t.ref,s=t.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(l){Dt(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Dt(t,e,l)}else i.current=null}function hm(t){var e=t.type,i=t.memoizedProps,s=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break t;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(l){Dt(t,t.return,l)}}function ic(t,e,i){try{var s=t.stateNode;Xx(s,t.type,i,e),s[xe]=e}catch(l){Dt(t,t.return,l)}}function pm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ui(t.type)||t.tag===4}function ac(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||pm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ui(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sc(t,e,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(t),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=An));else if(s!==4&&(s===27&&ui(t.type)&&(i=t.stateNode,e=null),t=t.child,t!==null))for(sc(t,e,i),t=t.sibling;t!==null;)sc(t,e,i),t=t.sibling}function oo(t,e,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(s!==4&&(s===27&&ui(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(oo(t,e,i),t=t.sibling;t!==null;)oo(t,e,i),t=t.sibling}function mm(t){var e=t.stateNode,i=t.memoizedProps;try{for(var s=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);de(e,s,i),e[le]=t,e[xe]=i}catch(u){Dt(t,t.return,u)}}var Vn=!1,Pt=!1,rc=!1,gm=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Ax(t,e){if(t=t.containerInfo,Mc=zo,t=Dh(t),Il(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var l=s.anchorOffset,u=s.focusNode;s=s.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break t}var h=0,v=-1,T=-1,z=0,_=0,U=t,j=null;e:for(;;){for(var R;U!==i||l!==0&&U.nodeType!==3||(v=h+l),U!==u||s!==0&&U.nodeType!==3||(T=h+s),U.nodeType===3&&(h+=U.nodeValue.length),(R=U.firstChild)!==null;)j=U,U=R;for(;;){if(U===t)break e;if(j===i&&++z===l&&(v=h),j===u&&++_===s&&(T=h),(R=U.nextSibling)!==null)break;U=j,j=U.parentNode}U=R}i=v===-1||T===-1?null:{start:v,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(Dc={focusedElem:t,selectionRange:i},zo=!1,ne=e;ne!==null;)if(e=ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ne=t;else for(;ne!==null;){switch(e=ne,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)l=t[i],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,i=e,l=u.memoizedProps,u=u.memoizedState,s=i.stateNode;try{var tt=Ni(i.type,l);t=s.getSnapshotBeforeUpdate(tt,u),s.__reactInternalSnapshotBeforeUpdate=t}catch(at){Dt(i,i.return,at)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,i=t.nodeType,i===9)Rc(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,ne=t;break}ne=e.return}}function ym(t,e,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:kn(t,i),s&4&&zs(5,i);break;case 1:if(kn(t,i),s&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(h){Dt(i,i.return,h)}else{var l=Ni(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(h){Dt(i,i.return,h)}}s&64&&fm(i),s&512&&js(i,i.return);break;case 3:if(kn(t,i),s&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{ep(t,e)}catch(h){Dt(i,i.return,h)}}break;case 27:e===null&&s&4&&mm(i);case 26:case 5:kn(t,i),e===null&&s&4&&hm(i),s&512&&js(i,i.return);break;case 12:kn(t,i);break;case 31:kn(t,i),s&4&&xm(t,i);break;case 13:kn(t,i),s&4&&Sm(t,i),s&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Ox.bind(null,i),Fx(t,i))));break;case 22:if(s=i.memoizedState!==null||Vn,!s){e=e!==null&&e.memoizedState!==null||Pt,l=Vn;var u=Pt;Vn=s,(Pt=e)&&!u?Bn(t,i,(i.subtreeFlags&8772)!==0):kn(t,i),Vn=l,Pt=u}break;case 30:break;default:kn(t,i)}}function vm(t){var e=t.alternate;e!==null&&(t.alternate=null,vm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Bl(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nt=null,Te=!1;function _n(t,e,i){for(i=i.child;i!==null;)bm(t,e,i),i=i.sibling}function bm(t,e,i){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(ts,i)}catch{}switch(i.tag){case 26:Pt||pn(i,e),_n(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Pt||pn(i,e);var s=Nt,l=Te;ui(i.type)&&(Nt=i.stateNode,Te=!1),_n(t,e,i),Us(i.stateNode),Nt=s,Te=l;break;case 5:Pt||pn(i,e);case 6:if(s=Nt,l=Te,Nt=null,_n(t,e,i),Nt=s,Te=l,Nt!==null)if(Te)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(i.stateNode)}catch(u){Dt(i,e,u)}else try{Nt.removeChild(i.stateNode)}catch(u){Dt(i,e,u)}break;case 18:Nt!==null&&(Te?(t=Nt,fg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Ra(t)):fg(Nt,i.stateNode));break;case 4:s=Nt,l=Te,Nt=i.stateNode.containerInfo,Te=!0,_n(t,e,i),Nt=s,Te=l;break;case 0:case 11:case 14:case 15:ni(2,i,e),Pt||ni(4,i,e),_n(t,e,i);break;case 1:Pt||(pn(i,e),s=i.stateNode,typeof s.componentWillUnmount=="function"&&dm(i,e,s)),_n(t,e,i);break;case 21:_n(t,e,i);break;case 22:Pt=(s=Pt)||i.memoizedState!==null,_n(t,e,i),Pt=s;break;default:_n(t,e,i)}}function xm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ra(t)}catch(i){Dt(e,e.return,i)}}}function Sm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ra(t)}catch(i){Dt(e,e.return,i)}}function wx(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new gm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new gm),e;default:throw Error(o(435,t.tag))}}function lo(t,e){var i=wx(t);e.forEach(function(s){if(!i.has(s)){i.add(s);var l=Vx.bind(null,t,s);s.then(l,l)}})}function Ae(t,e){var i=e.deletions;if(i!==null)for(var s=0;s<i.length;s++){var l=i[s],u=t,h=e,v=h;t:for(;v!==null;){switch(v.tag){case 27:if(ui(v.type)){Nt=v.stateNode,Te=!1;break t}break;case 5:Nt=v.stateNode,Te=!1;break t;case 3:case 4:Nt=v.stateNode.containerInfo,Te=!0;break t}v=v.return}if(Nt===null)throw Error(o(160));bm(u,h,l),Nt=null,Te=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Tm(e,t),e=e.sibling}var an=null;function Tm(t,e){var i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ae(e,t),we(t),s&4&&(ni(3,t,t.return),zs(3,t),ni(5,t,t.return));break;case 1:Ae(e,t),we(t),s&512&&(Pt||i===null||pn(i,i.return)),s&64&&Vn&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var l=an;if(Ae(e,t),we(t),s&512&&(Pt||i===null||pn(i,i.return)),s&4){var u=i!==null?i.memoizedState:null;if(s=t.memoizedState,i===null)if(s===null)if(t.stateNode===null){t:{s=t.type,i=t.memoizedProps,l=l.ownerDocument||l;e:switch(s){case"title":u=l.getElementsByTagName("title")[0],(!u||u[is]||u[le]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(s),l.head.insertBefore(u,l.querySelector("head > title"))),de(u,s,i),u[le]=t,ee(u),s=u;break t;case"link":var h=Tg("link","href",l).get(s+(i.href||""));if(h){for(var v=0;v<h.length;v++)if(u=h[v],u.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&u.getAttribute("rel")===(i.rel==null?null:i.rel)&&u.getAttribute("title")===(i.title==null?null:i.title)&&u.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){h.splice(v,1);break e}}u=l.createElement(s),de(u,s,i),l.head.appendChild(u);break;case"meta":if(h=Tg("meta","content",l).get(s+(i.content||""))){for(v=0;v<h.length;v++)if(u=h[v],u.getAttribute("content")===(i.content==null?null:""+i.content)&&u.getAttribute("name")===(i.name==null?null:i.name)&&u.getAttribute("property")===(i.property==null?null:i.property)&&u.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&u.getAttribute("charset")===(i.charSet==null?null:i.charSet)){h.splice(v,1);break e}}u=l.createElement(s),de(u,s,i),l.head.appendChild(u);break;default:throw Error(o(468,s))}u[le]=t,ee(u),s=u}t.stateNode=s}else Ag(l,t.type,t.stateNode);else t.stateNode=Sg(l,s,t.memoizedProps);else u!==s?(u===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):u.count--,s===null?Ag(l,t.type,t.stateNode):Sg(l,s,t.memoizedProps)):s===null&&t.stateNode!==null&&ic(t,t.memoizedProps,i.memoizedProps)}break;case 27:Ae(e,t),we(t),s&512&&(Pt||i===null||pn(i,i.return)),i!==null&&s&4&&ic(t,t.memoizedProps,i.memoizedProps);break;case 5:if(Ae(e,t),we(t),s&512&&(Pt||i===null||pn(i,i.return)),t.flags&32){l=t.stateNode;try{ta(l,"")}catch(tt){Dt(t,t.return,tt)}}s&4&&t.stateNode!=null&&(l=t.memoizedProps,ic(t,l,i!==null?i.memoizedProps:l)),s&1024&&(rc=!0);break;case 6:if(Ae(e,t),we(t),s&4){if(t.stateNode===null)throw Error(o(162));s=t.memoizedProps,i=t.stateNode;try{i.nodeValue=s}catch(tt){Dt(t,t.return,tt)}}break;case 3:if(Eo=null,l=an,an=Ao(e.containerInfo),Ae(e,t),an=l,we(t),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(tt){Dt(t,t.return,tt)}rc&&(rc=!1,Am(t));break;case 4:s=an,an=Ao(t.stateNode.containerInfo),Ae(e,t),we(t),an=s;break;case 12:Ae(e,t),we(t);break;case 31:Ae(e,t),we(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,lo(t,s)));break;case 13:Ae(e,t),we(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(co=ze()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,lo(t,s)));break;case 22:l=t.memoizedState!==null;var T=i!==null&&i.memoizedState!==null,z=Vn,_=Pt;if(Vn=z||l,Pt=_||T,Ae(e,t),Pt=_,Vn=z,we(t),s&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(i===null||T||Vn||Pt||Li(t)),i=null,e=t;;){if(e.tag===5||e.tag===26){if(i===null){T=i=e;try{if(u=T.stateNode,l)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{v=T.stateNode;var U=T.memoizedProps.style,j=U!=null&&U.hasOwnProperty("display")?U.display:null;v.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(tt){Dt(T,T.return,tt)}}}else if(e.tag===6){if(i===null){T=e;try{T.stateNode.nodeValue=l?"":T.memoizedProps}catch(tt){Dt(T,T.return,tt)}}}else if(e.tag===18){if(i===null){T=e;try{var R=T.stateNode;l?dg(R,!0):dg(T.stateNode,!1)}catch(tt){Dt(T,T.return,tt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}s&4&&(s=t.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,lo(t,i))));break;case 19:Ae(e,t),we(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,lo(t,s)));break;case 30:break;case 21:break;default:Ae(e,t),we(t)}}function we(t){var e=t.flags;if(e&2){try{for(var i,s=t.return;s!==null;){if(pm(s)){i=s;break}s=s.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var l=i.stateNode,u=ac(t);oo(t,u,l);break;case 5:var h=i.stateNode;i.flags&32&&(ta(h,""),i.flags&=-33);var v=ac(t);oo(t,v,h);break;case 3:case 4:var T=i.stateNode.containerInfo,z=ac(t);sc(t,z,T);break;default:throw Error(o(161))}}catch(_){Dt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Am(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Am(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function kn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)ym(t,e.alternate,e),e=e.sibling}function Li(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ni(4,e,e.return),Li(e);break;case 1:pn(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&dm(e,e.return,i),Li(e);break;case 27:Us(e.stateNode);case 26:case 5:pn(e,e.return),Li(e);break;case 22:e.memoizedState===null&&Li(e);break;case 30:Li(e);break;default:Li(e)}t=t.sibling}}function Bn(t,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var s=e.alternate,l=t,u=e,h=u.flags;switch(u.tag){case 0:case 11:case 15:Bn(l,u,i),zs(4,u);break;case 1:if(Bn(l,u,i),s=u,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(z){Dt(s,s.return,z)}if(s=u,l=s.updateQueue,l!==null){var v=s.stateNode;try{var T=l.shared.hiddenCallbacks;if(T!==null)for(l.shared.hiddenCallbacks=null,l=0;l<T.length;l++)tp(T[l],v)}catch(z){Dt(s,s.return,z)}}i&&h&64&&fm(u),js(u,u.return);break;case 27:mm(u);case 26:case 5:Bn(l,u,i),i&&s===null&&h&4&&hm(u),js(u,u.return);break;case 12:Bn(l,u,i);break;case 31:Bn(l,u,i),i&&h&4&&xm(l,u);break;case 13:Bn(l,u,i),i&&h&4&&Sm(l,u);break;case 22:u.memoizedState===null&&Bn(l,u,i),js(u,u.return);break;case 30:break;default:Bn(l,u,i)}e=e.sibling}}function oc(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&gs(i))}function lc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&gs(t))}function sn(t,e,i,s){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wm(t,e,i,s),e=e.sibling}function wm(t,e,i,s){var l=e.flags;switch(e.tag){case 0:case 11:case 15:sn(t,e,i,s),l&2048&&zs(9,e);break;case 1:sn(t,e,i,s);break;case 3:sn(t,e,i,s),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&gs(t)));break;case 12:if(l&2048){sn(t,e,i,s),t=e.stateNode;try{var u=e.memoizedProps,h=u.id,v=u.onPostCommit;typeof v=="function"&&v(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(T){Dt(e,e.return,T)}}else sn(t,e,i,s);break;case 31:sn(t,e,i,s);break;case 13:sn(t,e,i,s);break;case 23:break;case 22:u=e.stateNode,h=e.alternate,e.memoizedState!==null?u._visibility&2?sn(t,e,i,s):Rs(t,e):u._visibility&2?sn(t,e,i,s):(u._visibility|=2,xa(t,e,i,s,(e.subtreeFlags&10256)!==0||!1)),l&2048&&oc(h,e);break;case 24:sn(t,e,i,s),l&2048&&lc(e.alternate,e);break;default:sn(t,e,i,s)}}function xa(t,e,i,s,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,h=e,v=i,T=s,z=h.flags;switch(h.tag){case 0:case 11:case 15:xa(u,h,v,T,l),zs(8,h);break;case 23:break;case 22:var _=h.stateNode;h.memoizedState!==null?_._visibility&2?xa(u,h,v,T,l):Rs(u,h):(_._visibility|=2,xa(u,h,v,T,l)),l&&z&2048&&oc(h.alternate,h);break;case 24:xa(u,h,v,T,l),l&&z&2048&&lc(h.alternate,h);break;default:xa(u,h,v,T,l)}e=e.sibling}}function Rs(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,s=e,l=s.flags;switch(s.tag){case 22:Rs(i,s),l&2048&&oc(s.alternate,s);break;case 24:Rs(i,s),l&2048&&lc(s.alternate,s);break;default:Rs(i,s)}e=e.sibling}}var Os=8192;function Sa(t,e,i){if(t.subtreeFlags&Os)for(t=t.child;t!==null;)Em(t,e,i),t=t.sibling}function Em(t,e,i){switch(t.tag){case 26:Sa(t,e,i),t.flags&Os&&t.memoizedState!==null&&cS(i,an,t.memoizedState,t.memoizedProps);break;case 5:Sa(t,e,i);break;case 3:case 4:var s=an;an=Ao(t.stateNode.containerInfo),Sa(t,e,i),an=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Os,Os=16777216,Sa(t,e,i),Os=s):Sa(t,e,i));break;default:Sa(t,e,i)}}function Cm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Vs(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var s=e[i];ne=s,Dm(s,t)}Cm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mm(t),t=t.sibling}function Mm(t){switch(t.tag){case 0:case 11:case 15:Vs(t),t.flags&2048&&ni(9,t,t.return);break;case 3:Vs(t);break;case 12:Vs(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,uo(t)):Vs(t);break;default:Vs(t)}}function uo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var s=e[i];ne=s,Dm(s,t)}Cm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ni(8,e,e.return),uo(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,uo(e));break;default:uo(e)}t=t.sibling}}function Dm(t,e){for(;ne!==null;){var i=ne;switch(i.tag){case 0:case 11:case 15:ni(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:gs(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,ne=s;else t:for(i=t;ne!==null;){s=ne;var l=s.sibling,u=s.return;if(vm(s),s===i){ne=null;break t}if(l!==null){l.return=u,ne=l;break t}ne=u}}}var Ex={getCacheForType:function(t){var e=ce(Qt),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return ce(Qt).controller.signal}},Cx=typeof WeakMap=="function"?WeakMap:Map,At=0,Ot=null,pt=null,gt=0,Mt=0,Be=null,ii=!1,Ta=!1,uc=!1,Nn=0,Ht=0,ai=0,Ui=0,cc=0,Ne=0,Aa=0,_s=null,Ee=null,fc=!1,co=0,zm=0,fo=1/0,ho=null,si=null,It=0,ri=null,wa=null,Ln=0,dc=0,hc=null,jm=null,ks=0,pc=null;function Le(){return(At&2)!==0&&gt!==0?gt&-gt:k.T!==null?xc():Qd()}function Rm(){if(Ne===0)if((gt&536870912)===0||bt){var t=xr;xr<<=1,(xr&3932160)===0&&(xr=262144),Ne=t}else Ne=536870912;return t=_e.current,t!==null&&(t.flags|=32),Ne}function Ce(t,e,i){(t===Ot&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(Ea(t,0),oi(t,gt,Ne,!1)),ns(t,i),((At&2)===0||t!==Ot)&&(t===Ot&&((At&2)===0&&(Ui|=i),Ht===4&&oi(t,gt,Ne,!1)),mn(t))}function Om(t,e,i){if((At&6)!==0)throw Error(o(327));var s=!i&&(e&127)===0&&(e&t.expiredLanes)===0||es(t,e),l=s?zx(t,e):gc(t,e,!0),u=s;do{if(l===0){Ta&&!s&&oi(t,e,0,!1);break}else{if(i=t.current.alternate,u&&!Mx(i)){l=gc(t,e,!1),u=!1;continue}if(l===2){if(u=e,t.errorRecoveryDisabledLanes&u)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var v=t;l=_s;var T=v.current.memoizedState.isDehydrated;if(T&&(Ea(v,h).flags|=256),h=gc(v,h,!1),h!==2){if(uc&&!T){v.errorRecoveryDisabledLanes|=u,Ui|=u,l=4;break t}u=Ee,Ee=l,u!==null&&(Ee===null?Ee=u:Ee.push.apply(Ee,u))}l=h}if(u=!1,l!==2)continue}}if(l===1){Ea(t,0),oi(t,e,0,!0);break}t:{switch(s=t,u=l,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:oi(s,e,Ne,!ii);break t;case 2:Ee=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=co+300-ze(),10<l)){if(oi(s,e,Ne,!ii),Tr(s,0,!0)!==0)break t;Ln=e,s.timeoutHandle=ug(Vm.bind(null,s,i,Ee,ho,fc,e,Ne,Ui,Aa,ii,u,"Throttled",-0,0),l);break t}Vm(s,i,Ee,ho,fc,e,Ne,Ui,Aa,ii,u,null,-0,0)}}break}while(!0);mn(t)}function Vm(t,e,i,s,l,u,h,v,T,z,_,U,j,R){if(t.timeoutHandle=-1,U=e.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},Em(e,u,U);var tt=(u&62914560)===u?co-ze():(u&4194048)===u?zm-ze():0;if(tt=fS(U,tt),tt!==null){Ln=u,t.cancelPendingCommit=tt(Gm.bind(null,t,e,u,i,s,l,h,v,T,_,U,null,j,R)),oi(t,u,h,!z);return}}Gm(t,e,u,i,s,l,h,v,T)}function Mx(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var l=i[s],u=l.getSnapshot;l=l.value;try{if(!Oe(u(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function oi(t,e,i,s){e&=~cc,e&=~Ui,t.suspendedLanes|=e,t.pingedLanes&=~e,s&&(t.warmLanes|=e),s=t.expirationTimes;for(var l=e;0<l;){var u=31-Re(l),h=1<<u;s[u]=-1,l&=~h}i!==0&&qd(t,i,e)}function po(){return(At&6)===0?(Bs(0),!1):!0}function mc(){if(pt!==null){if(Mt===0)var t=pt.return;else t=pt,Mn=ji=null,Ru(t),ma=null,vs=0,t=pt;for(;t!==null;)cm(t.alternate,t),t=t.return;pt=null}}function Ea(t,e){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,Kx(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Ln=0,mc(),Ot=t,pt=i=En(t.current,null),gt=e,Mt=0,Be=null,ii=!1,Ta=es(t,e),uc=!1,Aa=Ne=cc=Ui=ai=Ht=0,Ee=_s=null,fc=!1,(e&8)!==0&&(e|=e&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=e;0<s;){var l=31-Re(s),u=1<<l;e|=t[l],s&=~u}return Nn=e,_r(),i}function _m(t,e){ct=null,k.H=Cs,e===pa||e===Yr?(e=Jh(),Mt=3):e===bu?(e=Jh(),Mt=4):Mt=e===Ku?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Be=e,pt===null&&(Ht=1,no(t,Xe(e,t.current)))}function km(){var t=_e.current;return t===null?!0:(gt&4194048)===gt?Ze===null:(gt&62914560)===gt||(gt&536870912)!==0?t===Ze:!1}function Bm(){var t=k.H;return k.H=Cs,t===null?Cs:t}function Nm(){var t=k.A;return k.A=Ex,t}function mo(){Ht=4,ii||(gt&4194048)!==gt&&_e.current!==null||(Ta=!0),(ai&134217727)===0&&(Ui&134217727)===0||Ot===null||oi(Ot,gt,Ne,!1)}function gc(t,e,i){var s=At;At|=2;var l=Bm(),u=Nm();(Ot!==t||gt!==e)&&(ho=null,Ea(t,e)),e=!1;var h=Ht;t:do try{if(Mt!==0&&pt!==null){var v=pt,T=Be;switch(Mt){case 8:mc(),h=6;break t;case 3:case 2:case 9:case 6:_e.current===null&&(e=!0);var z=Mt;if(Mt=0,Be=null,Ca(t,v,T,z),i&&Ta){h=0;break t}break;default:z=Mt,Mt=0,Be=null,Ca(t,v,T,z)}}Dx(),h=Ht;break}catch(_){_m(t,_)}while(!0);return e&&t.shellSuspendCounter++,Mn=ji=null,At=s,k.H=l,k.A=u,pt===null&&(Ot=null,gt=0,_r()),h}function Dx(){for(;pt!==null;)Lm(pt)}function zx(t,e){var i=At;At|=2;var s=Bm(),l=Nm();Ot!==t||gt!==e?(ho=null,fo=ze()+500,Ea(t,e)):Ta=es(t,e);t:do try{if(Mt!==0&&pt!==null){e=pt;var u=Be;e:switch(Mt){case 1:Mt=0,Be=null,Ca(t,e,u,1);break;case 2:case 9:if(Zh(u)){Mt=0,Be=null,Um(e);break}e=function(){Mt!==2&&Mt!==9||Ot!==t||(Mt=7),mn(t)},u.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Zh(u)?(Mt=0,Be=null,Um(e)):(Mt=0,Be=null,Ca(t,e,u,7));break;case 5:var h=null;switch(pt.tag){case 26:h=pt.memoizedState;case 5:case 27:var v=pt;if(h?wg(h):v.stateNode.complete){Mt=0,Be=null;var T=v.sibling;if(T!==null)pt=T;else{var z=v.return;z!==null?(pt=z,go(z)):pt=null}break e}}Mt=0,Be=null,Ca(t,e,u,5);break;case 6:Mt=0,Be=null,Ca(t,e,u,6);break;case 8:mc(),Ht=6;break t;default:throw Error(o(462))}}jx();break}catch(_){_m(t,_)}while(!0);return Mn=ji=null,k.H=s,k.A=l,At=i,pt!==null?0:(Ot=null,gt=0,_r(),Ht)}function jx(){for(;pt!==null&&!I1();)Lm(pt)}function Lm(t){var e=lm(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?go(t):pt=e}function Um(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=nm(i,e,e.pendingProps,e.type,void 0,gt);break;case 11:e=nm(i,e,e.pendingProps,e.type.render,e.ref,gt);break;case 5:Ru(e);default:cm(i,e),e=pt=Nh(e,Nn),e=lm(i,e,Nn)}t.memoizedProps=t.pendingProps,e===null?go(t):pt=e}function Ca(t,e,i,s){Mn=ji=null,Ru(e),ma=null,vs=0;var l=e.return;try{if(vx(t,l,e,i,gt)){Ht=1,no(t,Xe(i,t.current)),pt=null;return}}catch(u){if(l!==null)throw pt=l,u;Ht=1,no(t,Xe(i,t.current)),pt=null;return}e.flags&32768?(bt||s===1?t=!0:Ta||(gt&536870912)!==0?t=!1:(ii=t=!0,(s===2||s===9||s===3||s===6)&&(s=_e.current,s!==null&&s.tag===13&&(s.flags|=16384))),Hm(e,t)):go(e)}function go(t){var e=t;do{if((e.flags&32768)!==0){Hm(e,ii);return}t=e.return;var i=Sx(e.alternate,e,Nn);if(i!==null){pt=i;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);Ht===0&&(Ht=5)}function Hm(t,e){do{var i=Tx(t.alternate,t);if(i!==null){i.flags&=32767,pt=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){pt=t;return}pt=t=i}while(t!==null);Ht=6,pt=null}function Gm(t,e,i,s,l,u,h,v,T){t.cancelPendingCommit=null;do yo();while(It!==0);if((At&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(u=e.lanes|e.childLanes,u|=au,ub(t,i,u,h,v,T),t===Ot&&(pt=Ot=null,gt=0),wa=e,ri=t,Ln=i,dc=u,hc=l,jm=s,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_x(vr,function(){return Qm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||s){s=k.T,k.T=null,l=$.p,$.p=2,h=At,At|=4;try{Ax(t,e,i)}finally{At=h,$.p=l,k.T=s}}It=1,Ym(),qm(),Xm()}}function Ym(){if(It===1){It=0;var t=ri,e=wa,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=k.T,k.T=null;var s=$.p;$.p=2;var l=At;At|=4;try{Tm(e,t);var u=Dc,h=Dh(t.containerInfo),v=u.focusedElem,T=u.selectionRange;if(h!==v&&v&&v.ownerDocument&&Mh(v.ownerDocument.documentElement,v)){if(T!==null&&Il(v)){var z=T.start,_=T.end;if(_===void 0&&(_=z),"selectionStart"in v)v.selectionStart=z,v.selectionEnd=Math.min(_,v.value.length);else{var U=v.ownerDocument||document,j=U&&U.defaultView||window;if(j.getSelection){var R=j.getSelection(),tt=v.textContent.length,at=Math.min(T.start,tt),Rt=T.end===void 0?at:Math.min(T.end,tt);!R.extend&&at>Rt&&(h=Rt,Rt=at,at=h);var E=Ch(v,at),w=Ch(v,Rt);if(E&&w&&(R.rangeCount!==1||R.anchorNode!==E.node||R.anchorOffset!==E.offset||R.focusNode!==w.node||R.focusOffset!==w.offset)){var D=U.createRange();D.setStart(E.node,E.offset),R.removeAllRanges(),at>Rt?(R.addRange(D),R.extend(w.node,w.offset)):(D.setEnd(w.node,w.offset),R.addRange(D))}}}}for(U=[],R=v;R=R.parentNode;)R.nodeType===1&&U.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<U.length;v++){var L=U[v];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}zo=!!Mc,Dc=Mc=null}finally{At=l,$.p=s,k.T=i}}t.current=e,It=2}}function qm(){if(It===2){It=0;var t=ri,e=wa,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=k.T,k.T=null;var s=$.p;$.p=2;var l=At;At|=4;try{ym(t,e.alternate,e)}finally{At=l,$.p=s,k.T=i}}It=3}}function Xm(){if(It===4||It===3){It=0,tb();var t=ri,e=wa,i=Ln,s=jm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?It=5:(It=0,wa=ri=null,$m(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(si=null),_l(i),e=e.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(ts,e,void 0,(e.current.flags&128)===128)}catch{}if(s!==null){e=k.T,l=$.p,$.p=2,k.T=null;try{for(var u=t.onRecoverableError,h=0;h<s.length;h++){var v=s[h];u(v.value,{componentStack:v.stack})}}finally{k.T=e,$.p=l}}(Ln&3)!==0&&yo(),mn(t),l=t.pendingLanes,(i&261930)!==0&&(l&42)!==0?t===pc?ks++:(ks=0,pc=t):ks=0,Bs(0)}}function $m(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,gs(e)))}function yo(){return Ym(),qm(),Xm(),Qm()}function Qm(){if(It!==5)return!1;var t=ri,e=dc;dc=0;var i=_l(Ln),s=k.T,l=$.p;try{$.p=32>i?32:i,k.T=null,i=hc,hc=null;var u=ri,h=Ln;if(It=0,wa=ri=null,Ln=0,(At&6)!==0)throw Error(o(331));var v=At;if(At|=4,Mm(u.current),wm(u,u.current,h,i),At=v,Bs(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(ts,u)}catch{}return!0}finally{$.p=l,k.T=s,$m(t,e)}}function Km(t,e,i){e=Xe(i,e),e=Qu(t.stateNode,e,2),t=In(t,e,2),t!==null&&(ns(t,2),mn(t))}function Dt(t,e,i){if(t.tag===3)Km(t,t,i);else for(;e!==null;){if(e.tag===3){Km(e,t,i);break}else if(e.tag===1){var s=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(si===null||!si.has(s))){t=Xe(i,t),i=Zp(2),s=In(e,i,2),s!==null&&(Pp(i,s,e,t),ns(s,2),mn(s));break}}e=e.return}}function yc(t,e,i){var s=t.pingCache;if(s===null){s=t.pingCache=new Cx;var l=new Set;s.set(e,l)}else l=s.get(e),l===void 0&&(l=new Set,s.set(e,l));l.has(i)||(uc=!0,l.add(i),t=Rx.bind(null,t,e,i),e.then(t,t))}function Rx(t,e,i){var s=t.pingCache;s!==null&&s.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ot===t&&(gt&i)===i&&(Ht===4||Ht===3&&(gt&62914560)===gt&&300>ze()-co?(At&2)===0&&Ea(t,0):cc|=i,Aa===gt&&(Aa=0)),mn(t)}function Zm(t,e){e===0&&(e=Yd()),t=Mi(t,e),t!==null&&(ns(t,e),mn(t))}function Ox(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),Zm(t,i)}function Vx(t,e){var i=0;switch(t.tag){case 31:case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(e),Zm(t,i)}function _x(t,e){return jl(t,e)}var vo=null,Ma=null,vc=!1,bo=!1,bc=!1,li=0;function mn(t){t!==Ma&&t.next===null&&(Ma===null?vo=Ma=t:Ma=Ma.next=t),bo=!0,vc||(vc=!0,Bx())}function Bs(t,e){if(!bc&&bo){bc=!0;do for(var i=!1,s=vo;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var u=0;else{var h=s.suspendedLanes,v=s.pingedLanes;u=(1<<31-Re(42|t)+1)-1,u&=l&~(h&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,Fm(s,u))}else u=gt,u=Tr(s,s===Ot?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||es(s,u)||(i=!0,Fm(s,u));s=s.next}while(i);bc=!1}}function kx(){Pm()}function Pm(){bo=vc=!1;var t=0;li!==0&&Qx()&&(t=li);for(var e=ze(),i=null,s=vo;s!==null;){var l=s.next,u=Jm(s,e);u===0?(s.next=null,i===null?vo=l:i.next=l,l===null&&(Ma=i)):(i=s,(t!==0||(u&3)!==0)&&(bo=!0)),s=l}It!==0&&It!==5||Bs(t),li!==0&&(li=0)}function Jm(t,e){for(var i=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var h=31-Re(u),v=1<<h,T=l[h];T===-1?((v&i)===0||(v&s)!==0)&&(l[h]=lb(v,e)):T<=e&&(t.expiredLanes|=v),u&=~v}if(e=Ot,i=gt,i=Tr(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,i===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Rl(s),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||es(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(s!==null&&Rl(s),_l(i)){case 2:case 8:i=Hd;break;case 32:i=vr;break;case 268435456:i=Gd;break;default:i=vr}return s=Wm.bind(null,t),i=jl(i,s),t.callbackPriority=e,t.callbackNode=i,e}return s!==null&&s!==null&&Rl(s),t.callbackPriority=2,t.callbackNode=null,2}function Wm(t,e){if(It!==0&&It!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(yo()&&t.callbackNode!==i)return null;var s=gt;return s=Tr(t,t===Ot?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Om(t,s,e),Jm(t,ze()),t.callbackNode!=null&&t.callbackNode===i?Wm.bind(null,t):null)}function Fm(t,e){if(yo())return null;Om(t,e,!0)}function Bx(){Zx(function(){(At&6)!==0?jl(Ud,kx):Pm()})}function xc(){if(li===0){var t=da;t===0&&(t=br,br<<=1,(br&261888)===0&&(br=256)),li=t}return li}function Im(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Cr(""+t)}function tg(t,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,t.id&&i.setAttribute("form",t.id),e.parentNode.insertBefore(i,e),t=new FormData(t),i.parentNode.removeChild(i),t}function Nx(t,e,i,s,l){if(e==="submit"&&i&&i.stateNode===l){var u=Im((l[xe]||null).action),h=s.submitter;h&&(e=(e=h[xe]||null)?Im(e.formAction):h.getAttribute("formAction"),e!==null&&(u=e,h=null));var v=new jr("action","action",null,s,l);t.push({event:v,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(li!==0){var T=h?tg(l,h):new FormData(l);Hu(i,{pending:!0,data:T,method:l.method,action:u},null,T)}}else typeof u=="function"&&(v.preventDefault(),T=h?tg(l,h):new FormData(l),Hu(i,{pending:!0,data:T,method:l.method,action:u},u,T))},currentTarget:l}]})}}for(var Sc=0;Sc<iu.length;Sc++){var Tc=iu[Sc],Lx=Tc.toLowerCase(),Ux=Tc[0].toUpperCase()+Tc.slice(1);nn(Lx,"on"+Ux)}nn(Rh,"onAnimationEnd"),nn(Oh,"onAnimationIteration"),nn(Vh,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(ex,"onTransitionRun"),nn(nx,"onTransitionStart"),nn(ix,"onTransitionCancel"),nn(_h,"onTransitionEnd"),Fi("onMouseEnter",["mouseout","mouseover"]),Fi("onMouseLeave",["mouseout","mouseover"]),Fi("onPointerEnter",["pointerout","pointerover"]),Fi("onPointerLeave",["pointerout","pointerover"]),Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ns));function eg(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],l=s.event;s=s.listeners;t:{var u=void 0;if(e)for(var h=s.length-1;0<=h;h--){var v=s[h],T=v.instance,z=v.currentTarget;if(v=v.listener,T!==u&&l.isPropagationStopped())break t;u=v,l.currentTarget=z;try{u(l)}catch(_){Vr(_)}l.currentTarget=null,u=T}else for(h=0;h<s.length;h++){if(v=s[h],T=v.instance,z=v.currentTarget,v=v.listener,T!==u&&l.isPropagationStopped())break t;u=v,l.currentTarget=z;try{u(l)}catch(_){Vr(_)}l.currentTarget=null,u=T}}}}function mt(t,e){var i=e[kl];i===void 0&&(i=e[kl]=new Set);var s=t+"__bubble";i.has(s)||(ng(e,t,2,!1),i.add(s))}function Ac(t,e,i){var s=0;e&&(s|=4),ng(i,t,s,e)}var xo="_reactListening"+Math.random().toString(36).slice(2);function wc(t){if(!t[xo]){t[xo]=!0,Pd.forEach(function(i){i!=="selectionchange"&&(Hx.has(i)||Ac(i,!1,t),Ac(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xo]||(e[xo]=!0,Ac("selectionchange",!1,e))}}function ng(t,e,i,s){switch(Rg(e)){case 2:var l=pS;break;case 8:l=mS;break;default:l=Uc}i=l.bind(null,e,i,t),l=void 0,!Xl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function Ec(t,e,i,s,l){var u=s;if((e&1)===0&&(e&2)===0&&s!==null)t:for(;;){if(s===null)return;var h=s.tag;if(h===3||h===4){var v=s.stateNode.containerInfo;if(v===l)break;if(h===4)for(h=s.return;h!==null;){var T=h.tag;if((T===3||T===4)&&h.stateNode.containerInfo===l)return;h=h.return}for(;v!==null;){if(h=Pi(v),h===null)return;if(T=h.tag,T===5||T===6||T===26||T===27){s=u=h;continue t}v=v.parentNode}}s=s.return}oh(function(){var z=u,_=Yl(i),U=[];t:{var j=kh.get(t);if(j!==void 0){var R=jr,tt=t;switch(t){case"keypress":if(Dr(i)===0)break t;case"keydown":case"keyup":R=Vb;break;case"focusin":tt="focus",R=Zl;break;case"focusout":tt="blur",R=Zl;break;case"beforeblur":case"afterblur":R=Zl;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Sb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Bb;break;case Rh:case Oh:case Vh:R=wb;break;case _h:R=Lb;break;case"scroll":case"scrollend":R=bb;break;case"wheel":R=Hb;break;case"copy":case"cut":case"paste":R=Cb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=dh;break;case"toggle":case"beforetoggle":R=Yb}var at=(e&4)!==0,Rt=!at&&(t==="scroll"||t==="scrollend"),E=at?j!==null?j+"Capture":null:j;at=[];for(var w=z,D;w!==null;){var L=w;if(D=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||D===null||E===null||(L=ss(w,E),L!=null&&at.push(Ls(w,L,D))),Rt)break;w=w.return}0<at.length&&(j=new R(j,tt,null,i,_),U.push({event:j,listeners:at}))}}if((e&7)===0){t:{if(j=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",j&&i!==Gl&&(tt=i.relatedTarget||i.fromElement)&&(Pi(tt)||tt[Zi]))break t;if((R||j)&&(j=_.window===_?_:(j=_.ownerDocument)?j.defaultView||j.parentWindow:window,R?(tt=i.relatedTarget||i.toElement,R=z,tt=tt?Pi(tt):null,tt!==null&&(Rt=d(tt),at=tt.tag,tt!==Rt||at!==5&&at!==27&&at!==6)&&(tt=null)):(R=null,tt=z),R!==tt)){if(at=ch,L="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(at=dh,L="onPointerLeave",E="onPointerEnter",w="pointer"),Rt=R==null?j:as(R),D=tt==null?j:as(tt),j=new at(L,w+"leave",R,i,_),j.target=Rt,j.relatedTarget=D,L=null,Pi(_)===z&&(at=new at(E,w+"enter",tt,i,_),at.target=D,at.relatedTarget=Rt,L=at),Rt=L,R&&tt)e:{for(at=Gx,E=R,w=tt,D=0,L=E;L;L=at(L))D++;L=0;for(var it=w;it;it=at(it))L++;for(;0<D-L;)E=at(E),D--;for(;0<L-D;)w=at(w),L--;for(;D--;){if(E===w||w!==null&&E===w.alternate){at=E;break e}E=at(E),w=at(w)}at=null}else at=null;R!==null&&ig(U,j,R,at,!1),tt!==null&&Rt!==null&&ig(U,Rt,tt,at,!0)}}t:{if(j=z?as(z):window,R=j.nodeName&&j.nodeName.toLowerCase(),R==="select"||R==="input"&&j.type==="file")var St=xh;else if(vh(j))if(Sh)St=Fb;else{St=Jb;var nt=Pb}else R=j.nodeName,!R||R.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?z&&Hl(z.elementType)&&(St=xh):St=Wb;if(St&&(St=St(t,z))){bh(U,St,i,_);break t}nt&&nt(t,j,z),t==="focusout"&&z&&j.type==="number"&&z.memoizedProps.value!=null&&Ul(j,"number",j.value)}switch(nt=z?as(z):window,t){case"focusin":(vh(nt)||nt.contentEditable==="true")&&(aa=nt,tu=z,hs=null);break;case"focusout":hs=tu=aa=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,zh(U,i,_);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":zh(U,i,_)}var ft;if(Jl)t:{switch(t){case"compositionstart":var yt="onCompositionStart";break t;case"compositionend":yt="onCompositionEnd";break t;case"compositionupdate":yt="onCompositionUpdate";break t}yt=void 0}else ia?gh(t,i)&&(yt="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(yt="onCompositionStart");yt&&(hh&&i.locale!=="ko"&&(ia||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&ia&&(ft=lh()):(Qn=_,$l="value"in Qn?Qn.value:Qn.textContent,ia=!0)),nt=So(z,yt),0<nt.length&&(yt=new fh(yt,t,null,i,_),U.push({event:yt,listeners:nt}),ft?yt.data=ft:(ft=yh(i),ft!==null&&(yt.data=ft)))),(ft=Xb?$b(t,i):Qb(t,i))&&(yt=So(z,"onBeforeInput"),0<yt.length&&(nt=new fh("onBeforeInput","beforeinput",null,i,_),U.push({event:nt,listeners:yt}),nt.data=ft)),Nx(U,t,z,i,_)}eg(U,e)})}function Ls(t,e,i){return{instance:t,listener:e,currentTarget:i}}function So(t,e){for(var i=e+"Capture",s=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=ss(t,i),l!=null&&s.unshift(Ls(t,l,u)),l=ss(t,e),l!=null&&s.push(Ls(t,l,u))),t.tag===3)return s;t=t.return}return[]}function Gx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ig(t,e,i,s,l){for(var u=e._reactName,h=[];i!==null&&i!==s;){var v=i,T=v.alternate,z=v.stateNode;if(v=v.tag,T!==null&&T===s)break;v!==5&&v!==26&&v!==27||z===null||(T=z,l?(z=ss(i,u),z!=null&&h.unshift(Ls(i,z,T))):l||(z=ss(i,u),z!=null&&h.push(Ls(i,z,T)))),i=i.return}h.length!==0&&t.push({event:e,listeners:h})}var Yx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function ag(t){return(typeof t=="string"?t:""+t).replace(Yx,`
`).replace(qx,"")}function sg(t,e){return e=ag(e),ag(t)===e}function jt(t,e,i,s,l,u){switch(i){case"children":typeof s=="string"?e==="body"||e==="textarea"&&s===""||ta(t,s):(typeof s=="number"||typeof s=="bigint")&&e!=="body"&&ta(t,""+s);break;case"className":wr(t,"class",s);break;case"tabIndex":wr(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":wr(t,i,s);break;case"style":sh(t,s,u);break;case"data":if(e!=="object"){wr(t,"data",s);break}case"src":case"href":if(s===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Cr(""+s),t.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(e!=="input"&&jt(t,e,"name",l.name,l,null),jt(t,e,"formEncType",l.formEncType,l,null),jt(t,e,"formMethod",l.formMethod,l,null),jt(t,e,"formTarget",l.formTarget,l,null)):(jt(t,e,"encType",l.encType,l,null),jt(t,e,"method",l.method,l,null),jt(t,e,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Cr(""+s),t.setAttribute(i,s);break;case"onClick":s!=null&&(t.onclick=An);break;case"onScroll":s!=null&&mt("scroll",t);break;case"onScrollEnd":s!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(l.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}i=Cr(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""+s):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":s===!0?t.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(i,s):t.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(i):t.setAttribute(i,s);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Ar(t,"popover",s);break;case"xlinkActuate":Tn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Tn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Tn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Tn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Tn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Tn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ar(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=yb.get(i)||i,Ar(t,i,s))}}function Cc(t,e,i,s,l,u){switch(i){case"style":sh(t,s,u);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(l.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"children":typeof s=="string"?ta(t,s):(typeof s=="number"||typeof s=="bigint")&&ta(t,""+s);break;case"onScroll":s!=null&&mt("scroll",t);break;case"onScrollEnd":s!=null&&mt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=An);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jd.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),e=i.slice(2,l?i.length-7:void 0),u=t[xe]||null,u=u!=null?u[i]:null,typeof u=="function"&&t.removeEventListener(e,u,l),typeof s=="function")){typeof u!="function"&&u!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(e,s,l);break t}i in t?t[i]=s:s===!0?t.setAttribute(i,""):Ar(t,i,s)}}}function de(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var s=!1,l=!1,u;for(u in i)if(i.hasOwnProperty(u)){var h=i[u];if(h!=null)switch(u){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:jt(t,e,u,h,i,null)}}l&&jt(t,e,"srcSet",i.srcSet,i,null),s&&jt(t,e,"src",i.src,i,null);return;case"input":mt("invalid",t);var v=u=h=l=null,T=null,z=null;for(s in i)if(i.hasOwnProperty(s)){var _=i[s];if(_!=null)switch(s){case"name":l=_;break;case"type":h=_;break;case"checked":T=_;break;case"defaultChecked":z=_;break;case"value":u=_;break;case"defaultValue":v=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,e));break;default:jt(t,e,s,_,i,null)}}eh(t,u,v,T,z,h,l,!1);return;case"select":mt("invalid",t),s=h=u=null;for(l in i)if(i.hasOwnProperty(l)&&(v=i[l],v!=null))switch(l){case"value":u=v;break;case"defaultValue":h=v;break;case"multiple":s=v;default:jt(t,e,l,v,i,null)}e=u,i=h,t.multiple=!!s,e!=null?Ii(t,!!s,e,!1):i!=null&&Ii(t,!!s,i,!0);return;case"textarea":mt("invalid",t),u=l=s=null;for(h in i)if(i.hasOwnProperty(h)&&(v=i[h],v!=null))switch(h){case"value":s=v;break;case"defaultValue":l=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:jt(t,e,h,v,i,null)}ih(t,s,l,u);return;case"option":for(T in i)if(i.hasOwnProperty(T)&&(s=i[T],s!=null))switch(T){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:jt(t,e,T,s,i,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(s=0;s<Ns.length;s++)mt(Ns[s],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in i)if(i.hasOwnProperty(z)&&(s=i[z],s!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:jt(t,e,z,s,i,null)}return;default:if(Hl(e)){for(_ in i)i.hasOwnProperty(_)&&(s=i[_],s!==void 0&&Cc(t,e,_,s,i,void 0));return}}for(v in i)i.hasOwnProperty(v)&&(s=i[v],s!=null&&jt(t,e,v,s,i,null))}function Xx(t,e,i,s){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,h=null,v=null,T=null,z=null,_=null;for(R in i){var U=i[R];if(i.hasOwnProperty(R)&&U!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":T=U;default:s.hasOwnProperty(R)||jt(t,e,R,null,s,U)}}for(var j in s){var R=s[j];if(U=i[j],s.hasOwnProperty(j)&&(R!=null||U!=null))switch(j){case"type":u=R;break;case"name":l=R;break;case"checked":z=R;break;case"defaultChecked":_=R;break;case"value":h=R;break;case"defaultValue":v=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,e));break;default:R!==U&&jt(t,e,j,R,s,U)}}Ll(t,h,v,T,z,_,u,l);return;case"select":R=h=v=j=null;for(u in i)if(T=i[u],i.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":R=T;default:s.hasOwnProperty(u)||jt(t,e,u,null,s,T)}for(l in s)if(u=s[l],T=i[l],s.hasOwnProperty(l)&&(u!=null||T!=null))switch(l){case"value":j=u;break;case"defaultValue":v=u;break;case"multiple":h=u;default:u!==T&&jt(t,e,l,u,s,T)}e=v,i=h,s=R,j!=null?Ii(t,!!i,j,!1):!!s!=!!i&&(e!=null?Ii(t,!!i,e,!0):Ii(t,!!i,i?[]:"",!1));return;case"textarea":R=j=null;for(v in i)if(l=i[v],i.hasOwnProperty(v)&&l!=null&&!s.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:jt(t,e,v,null,s,l)}for(h in s)if(l=s[h],u=i[h],s.hasOwnProperty(h)&&(l!=null||u!=null))switch(h){case"value":j=l;break;case"defaultValue":R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==u&&jt(t,e,h,l,s,u)}nh(t,j,R);return;case"option":for(var tt in i)if(j=i[tt],i.hasOwnProperty(tt)&&j!=null&&!s.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:jt(t,e,tt,null,s,j)}for(T in s)if(j=s[T],R=i[T],s.hasOwnProperty(T)&&j!==R&&(j!=null||R!=null))switch(T){case"selected":t.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:jt(t,e,T,j,s,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in i)j=i[at],i.hasOwnProperty(at)&&j!=null&&!s.hasOwnProperty(at)&&jt(t,e,at,null,s,j);for(z in s)if(j=s[z],R=i[z],s.hasOwnProperty(z)&&j!==R&&(j!=null||R!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,e));break;default:jt(t,e,z,j,s,R)}return;default:if(Hl(e)){for(var Rt in i)j=i[Rt],i.hasOwnProperty(Rt)&&j!==void 0&&!s.hasOwnProperty(Rt)&&Cc(t,e,Rt,void 0,s,j);for(_ in s)j=s[_],R=i[_],!s.hasOwnProperty(_)||j===R||j===void 0&&R===void 0||Cc(t,e,_,j,s,R);return}}for(var E in i)j=i[E],i.hasOwnProperty(E)&&j!=null&&!s.hasOwnProperty(E)&&jt(t,e,E,null,s,j);for(U in s)j=s[U],R=i[U],!s.hasOwnProperty(U)||j===R||j==null&&R==null||jt(t,e,U,j,s,R)}function rg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $x(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),s=0;s<i.length;s++){var l=i[s],u=l.transferSize,h=l.initiatorType,v=l.duration;if(u&&v&&rg(h)){for(h=0,v=l.responseEnd,s+=1;s<i.length;s++){var T=i[s],z=T.startTime;if(z>v)break;var _=T.transferSize,U=T.initiatorType;_&&rg(U)&&(T=T.responseEnd,h+=_*(T<v?1:(v-z)/(T-z)))}if(--s,e+=8*(u+h)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Mc=null,Dc=null;function To(t){return t.nodeType===9?t:t.ownerDocument}function og(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lg(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jc=null;function Qx(){var t=window.event;return t&&t.type==="popstate"?t===jc?!1:(jc=t,!0):(jc=null,!1)}var ug=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(t){return cg.resolve(null).then(t).catch(Px)}:ug;function Px(t){setTimeout(function(){throw t})}function ui(t){return t==="head"}function fg(t,e){var i=e,s=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(s===0){t.removeChild(l),Ra(e);return}s--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")s++;else if(i==="html")Us(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Us(i);for(var u=i.firstChild;u;){var h=u.nextSibling,v=u.nodeName;u[is]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=h}}else i==="body"&&Us(t.ownerDocument.body);i=l}while(i);Ra(e)}function dg(t,e){var i=t;t=0;do{var s=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=s}while(i)}function Rc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Rc(i),Bl(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Jx(t,e,i,s){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[is])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Pe(t.nextSibling),t===null)break}return null}function Wx(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Pe(t.nextSibling),t===null))return null;return t}function hg(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Pe(t.nextSibling),t===null))return null;return t}function Oc(t){return t.data==="$?"||t.data==="$~"}function Vc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Fx(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var s=function(){e(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Pe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var _c=null;function pg(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return Pe(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function mg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function gg(t,e,i){switch(e=To(i),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Us(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Bl(t)}var Je=new Map,yg=new Set;function Ao(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Un=$.d;$.d={f:Ix,r:tS,D:eS,C:nS,L:iS,m:aS,X:rS,S:sS,M:oS};function Ix(){var t=Un.f(),e=po();return t||e}function tS(t){var e=Ji(t);e!==null&&e.tag===5&&e.type==="form"?_p(e):Un.r(t)}var Da=typeof document>"u"?null:document;function vg(t,e,i){var s=Da;if(s&&typeof e=="string"&&e){var l=Ye(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),yg.has(l)||(yg.add(l),t={rel:t,crossOrigin:i,href:e},s.querySelector(l)===null&&(e=s.createElement("link"),de(e,"link",t),ee(e),s.head.appendChild(e)))}}function eS(t){Un.D(t),vg("dns-prefetch",t,null)}function nS(t,e){Un.C(t,e),vg("preconnect",t,e)}function iS(t,e,i){Un.L(t,e,i);var s=Da;if(s&&t&&e){var l='link[rel="preload"][as="'+Ye(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+Ye(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+Ye(i.imageSizes)+'"]')):l+='[href="'+Ye(t)+'"]';var u=l;switch(e){case"style":u=za(t);break;case"script":u=ja(t)}Je.has(u)||(t=b({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),Je.set(u,t),s.querySelector(l)!==null||e==="style"&&s.querySelector(Hs(u))||e==="script"&&s.querySelector(Gs(u))||(e=s.createElement("link"),de(e,"link",t),ee(e),s.head.appendChild(e)))}}function aS(t,e){Un.m(t,e);var i=Da;if(i&&t){var s=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Ye(s)+'"][href="'+Ye(t)+'"]',u=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ja(t)}if(!Je.has(u)&&(t=b({rel:"modulepreload",href:t},e),Je.set(u,t),i.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Gs(u)))return}s=i.createElement("link"),de(s,"link",t),ee(s),i.head.appendChild(s)}}}function sS(t,e,i){Un.S(t,e,i);var s=Da;if(s&&t){var l=Wi(s).hoistableStyles,u=za(t);e=e||"default";var h=l.get(u);if(!h){var v={loading:0,preload:null};if(h=s.querySelector(Hs(u)))v.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":e},i),(i=Je.get(u))&&kc(t,i);var T=h=s.createElement("link");ee(T),de(T,"link",t),T._p=new Promise(function(z,_){T.onload=z,T.onerror=_}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,wo(h,e,s)}h={type:"stylesheet",instance:h,count:1,state:v},l.set(u,h)}}}function rS(t,e){Un.X(t,e);var i=Da;if(i&&t){var s=Wi(i).hoistableScripts,l=ja(t),u=s.get(l);u||(u=i.querySelector(Gs(l)),u||(t=b({src:t,async:!0},e),(e=Je.get(l))&&Bc(t,e),u=i.createElement("script"),ee(u),de(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function oS(t,e){Un.M(t,e);var i=Da;if(i&&t){var s=Wi(i).hoistableScripts,l=ja(t),u=s.get(l);u||(u=i.querySelector(Gs(l)),u||(t=b({src:t,async:!0,type:"module"},e),(e=Je.get(l))&&Bc(t,e),u=i.createElement("script"),ee(u),de(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function bg(t,e,i,s){var l=(l=ut.current)?Ao(l):null;if(!l)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=za(i.href),i=Wi(l).hoistableStyles,s=i.get(e),s||(s={type:"style",instance:null,count:0,state:null},i.set(e,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=za(i.href);var u=Wi(l).hoistableStyles,h=u.get(t);if(h||(l=l.ownerDocument||l,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,h),(u=l.querySelector(Hs(t)))&&!u._p&&(h.instance=u,h.state.loading=5),Je.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Je.set(t,i),u||lS(l,t,i,h.state))),e&&s===null)throw Error(o(528,""));return h}if(e&&s!==null)throw Error(o(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ja(i),i=Wi(l).hoistableScripts,s=i.get(e),s||(s={type:"script",instance:null,count:0,state:null},i.set(e,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function za(t){return'href="'+Ye(t)+'"'}function Hs(t){return'link[rel="stylesheet"]['+t+"]"}function xg(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function lS(t,e,i,s){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?s.loading=1:(e=t.createElement("link"),s.preload=e,e.addEventListener("load",function(){return s.loading|=1}),e.addEventListener("error",function(){return s.loading|=2}),de(e,"link",i),ee(e),t.head.appendChild(e))}function ja(t){return'[src="'+Ye(t)+'"]'}function Gs(t){return"script[async]"+t}function Sg(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var s=t.querySelector('style[data-href~="'+Ye(i.href)+'"]');if(s)return e.instance=s,ee(s),s;var l=b({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),ee(s),de(s,"style",l),wo(s,i.precedence,t),e.instance=s;case"stylesheet":l=za(i.href);var u=t.querySelector(Hs(l));if(u)return e.state.loading|=4,e.instance=u,ee(u),u;s=xg(i),(l=Je.get(l))&&kc(s,l),u=(t.ownerDocument||t).createElement("link"),ee(u);var h=u;return h._p=new Promise(function(v,T){h.onload=v,h.onerror=T}),de(u,"link",s),e.state.loading|=4,wo(u,i.precedence,t),e.instance=u;case"script":return u=ja(i.src),(l=t.querySelector(Gs(u)))?(e.instance=l,ee(l),l):(s=i,(l=Je.get(u))&&(s=b({},i),Bc(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),ee(l),de(l,"link",s),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(s=e.instance,e.state.loading|=4,wo(s,i.precedence,t));return e.instance}function wo(t,e,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,u=l,h=0;h<s.length;h++){var v=s[h];if(v.dataset.precedence===e)u=v;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function kc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Bc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Eo=null;function Tg(t,e,i){if(Eo===null){var s=new Map,l=Eo=new Map;l.set(i,s)}else l=Eo,s=l.get(i),s||(s=new Map,l.set(i,s));if(s.has(t))return s;for(s.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var u=i[l];if(!(u[is]||u[le]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(e)||"";h=t+h;var v=s.get(h);v?v.push(u):s.set(h,[u])}}return s}function Ag(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function uS(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cS(t,e,i,s){if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=za(s.href),u=e.querySelector(Hs(l));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Co.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=u,ee(u);return}u=e.ownerDocument||e,s=xg(s),(l=Je.get(l))&&kc(s,l),u=u.createElement("link"),ee(u);var h=u;h._p=new Promise(function(v,T){h.onload=v,h.onerror=T}),de(u,"link",s),i.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Co.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Nc=0;function fS(t,e){return t.stylesheets&&t.count===0&&Do(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var s=setTimeout(function(){if(t.stylesheets&&Do(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Nc===0&&(Nc=62500*$x());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Do(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Nc?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function Co(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Do(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mo=null;function Do(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mo=new Map,e.forEach(dS,t),Mo=null,Co.call(t))}function dS(t,e){if(!(e.state.loading&4)){var i=Mo.get(t);if(i)var s=i.get(null);else{i=new Map,Mo.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var h=l[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(i.set(h.dataset.precedence,h),s=h)}s&&i.set(null,s)}l=e.instance,h=l.getAttribute("data-precedence"),u=i.get(h)||s,u===s&&i.set(null,l),i.set(h,l),this.count++,s=Co.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Ys={$$typeof:G,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function hS(t,e,i,s,l,u,h,v,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ol(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.hiddenUpdates=Ol(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Eg(t,e,i,s,l,u,h,v,T,z,_,U){return t=new hS(t,e,i,h,T,z,_,U,v),e=1,u===!0&&(e|=24),u=Ve(3,null,null,e),t.current=u,u.stateNode=t,e=gu(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:s,isDehydrated:i,cache:e},xu(u),t}function Cg(t){return t?(t=oa,t):oa}function Mg(t,e,i,s,l,u){l=Cg(l),s.context===null?s.context=l:s.pendingContext=l,s=Fn(e),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=In(t,s,e),i!==null&&(Ce(i,t,e),xs(i,t,e))}function Dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Lc(t,e){Dg(t,e),(t=t.alternate)&&Dg(t,e)}function zg(t){if(t.tag===13||t.tag===31){var e=Mi(t,67108864);e!==null&&Ce(e,t,67108864),Lc(t,67108864)}}function jg(t){if(t.tag===13||t.tag===31){var e=Le();e=Vl(e);var i=Mi(t,e);i!==null&&Ce(i,t,e),Lc(t,e)}}var zo=!0;function pS(t,e,i,s){var l=k.T;k.T=null;var u=$.p;try{$.p=2,Uc(t,e,i,s)}finally{$.p=u,k.T=l}}function mS(t,e,i,s){var l=k.T;k.T=null;var u=$.p;try{$.p=8,Uc(t,e,i,s)}finally{$.p=u,k.T=l}}function Uc(t,e,i,s){if(zo){var l=Hc(s);if(l===null)Ec(t,e,s,jo,i),Og(t,s);else if(yS(l,t,e,i,s))s.stopPropagation();else if(Og(t,s),e&4&&-1<gS.indexOf(t)){for(;l!==null;){var u=Ji(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=Ti(u.pendingLanes);if(h!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;h;){var T=1<<31-Re(h);v.entanglements[1]|=T,h&=~T}mn(u),(At&6)===0&&(fo=ze()+500,Bs(0))}}break;case 31:case 13:v=Mi(u,2),v!==null&&Ce(v,u,2),po(),Lc(u,2)}if(u=Hc(s),u===null&&Ec(t,e,s,jo,i),u===l)break;l=u}l!==null&&s.stopPropagation()}else Ec(t,e,s,null,i)}}function Hc(t){return t=Yl(t),Gc(t)}var jo=null;function Gc(t){if(jo=null,t=Pi(t),t!==null){var e=d(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=f(e),t!==null)return t;t=null}else if(i===31){if(t=p(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return jo=t,null}function Rg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(eb()){case Ud:return 2;case Hd:return 8;case vr:case nb:return 32;case Gd:return 268435456;default:return 32}default:return 32}}var Yc=!1,ci=null,fi=null,di=null,qs=new Map,Xs=new Map,hi=[],gS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Og(t,e){switch(t){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(e.pointerId)}}function $s(t,e,i,s,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:i,eventSystemFlags:s,nativeEvent:u,targetContainers:[l]},e!==null&&(e=Ji(e),e!==null&&zg(e)),t):(t.eventSystemFlags|=s,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function yS(t,e,i,s,l){switch(e){case"focusin":return ci=$s(ci,t,e,i,s,l),!0;case"dragenter":return fi=$s(fi,t,e,i,s,l),!0;case"mouseover":return di=$s(di,t,e,i,s,l),!0;case"pointerover":var u=l.pointerId;return qs.set(u,$s(qs.get(u)||null,t,e,i,s,l)),!0;case"gotpointercapture":return u=l.pointerId,Xs.set(u,$s(Xs.get(u)||null,t,e,i,s,l)),!0}return!1}function Vg(t){var e=Pi(t.target);if(e!==null){var i=d(e);if(i!==null){if(e=i.tag,e===13){if(e=f(i),e!==null){t.blockedOn=e,Kd(t.priority,function(){jg(i)});return}}else if(e===31){if(e=p(i),e!==null){t.blockedOn=e,Kd(t.priority,function(){jg(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Hc(t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);Gl=s,i.target.dispatchEvent(s),Gl=null}else return e=Ji(i),e!==null&&zg(e),t.blockedOn=i,!1;e.shift()}return!0}function _g(t,e,i){Ro(t)&&i.delete(e)}function vS(){Yc=!1,ci!==null&&Ro(ci)&&(ci=null),fi!==null&&Ro(fi)&&(fi=null),di!==null&&Ro(di)&&(di=null),qs.forEach(_g),Xs.forEach(_g)}function Oo(t,e){t.blockedOn===e&&(t.blockedOn=null,Yc||(Yc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,vS)))}var Vo=null;function kg(t){Vo!==t&&(Vo=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Vo===t&&(Vo=null);for(var e=0;e<t.length;e+=3){var i=t[e],s=t[e+1],l=t[e+2];if(typeof s!="function"){if(Gc(s||i)===null)continue;break}var u=Ji(i);u!==null&&(t.splice(e,3),e-=3,Hu(u,{pending:!0,data:l,method:i.method,action:s},s,l))}}))}function Ra(t){function e(T){return Oo(T,t)}ci!==null&&Oo(ci,t),fi!==null&&Oo(fi,t),di!==null&&Oo(di,t),qs.forEach(e),Xs.forEach(e);for(var i=0;i<hi.length;i++){var s=hi[i];s.blockedOn===t&&(s.blockedOn=null)}for(;0<hi.length&&(i=hi[0],i.blockedOn===null);)Vg(i),i.blockedOn===null&&hi.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var l=i[s],u=i[s+1],h=l[xe]||null;if(typeof u=="function")h||kg(i);else if(h){var v=null;if(u&&u.hasAttribute("formAction")){if(l=u,h=u[xe]||null)v=h.formAction;else if(Gc(l)!==null)continue}else v=h.action;typeof v=="function"?i[s+1]=v:(i.splice(s,3),s-=3),kg(i)}}}function Bg(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(h){return l=h})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),s||setTimeout(i,20)}function i(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function qc(t){this._internalRoot=t}_o.prototype.render=qc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var i=e.current,s=Le();Mg(i,s,t,e,null,null)},_o.prototype.unmount=qc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mg(t.current,2,null,t,null,null),po(),e[Zi]=null}};function _o(t){this._internalRoot=t}_o.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qd();t={blockedOn:null,target:t,priority:e};for(var i=0;i<hi.length&&e!==0&&e<hi[i].priority;i++);hi.splice(i,0,t),i===0&&Vg(t)}};var Ng=a.version;if(Ng!=="19.2.1")throw Error(o(527,Ng,"19.2.1"));$.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=m(e),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var bS={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{ts=ko.inject(bS),je=ko}catch{}}return Ks.createRoot=function(t,e){if(!c(t))throw Error(o(299));var i=!1,s="",l=Xp,u=$p,h=Qp;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError)),e=Eg(t,1,!1,null,null,i,s,null,l,u,h,Bg),t[Zi]=e.current,wc(t),new qc(e)},Ks.hydrateRoot=function(t,e,i){if(!c(t))throw Error(o(299));var s=!1,l="",u=Xp,h=$p,v=Qp,T=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.formState!==void 0&&(T=i.formState)),e=Eg(t,1,!0,e,i??null,s,l,T,u,h,v,Bg),e.context=Cg(null),i=e.current,s=Le(),s=Vl(s),l=Fn(s),l.callback=null,In(i,l,s),i=s,e.current.lanes=i,ns(e,i),mn(e),t[Zi]=e.current,wc(t),new _o(e)},Ks.version="19.2.1",Ks}var Kg;function jS(){if(Kg)return Qc.exports;Kg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Qc.exports=zS(),Qc.exports}var RS=jS(),ge=function(){return ge=Object.assign||function(a){for(var r,o=1,c=arguments.length;o<c;o++){r=arguments[o];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(a[d]=r[d])}return a},ge.apply(this,arguments)};function Ga(n,a,r){if(r||arguments.length===2)for(var o=0,c=a.length,d;o<c;o++)(d||!(o in a))&&(d||(d=Array.prototype.slice.call(a,0,o)),d[o]=a[o]);return n.concat(d||Array.prototype.slice.call(a))}var kt="-ms-",Fs="-moz-",wt="-webkit-",Ny="comm",ml="rule",Pf="decl",OS="@import",Ly="@keyframes",VS="@layer",Uy=Math.abs,Jf=String.fromCharCode,vf=Object.assign;function _S(n,a){return se(n,0)^45?(((a<<2^se(n,0))<<2^se(n,1))<<2^se(n,2))<<2^se(n,3):0}function Hy(n){return n.trim()}function Gn(n,a){return(n=a.exec(n))?n[0]:n}function dt(n,a,r){return n.replace(a,r)}function $o(n,a,r){return n.indexOf(a,r)}function se(n,a){return n.charCodeAt(a)|0}function Ya(n,a,r){return n.slice(a,r)}function gn(n){return n.length}function Gy(n){return n.length}function Js(n,a){return a.push(n),n}function kS(n,a){return n.map(a).join("")}function Zg(n,a){return n.filter(function(r){return!Gn(r,a)})}var gl=1,qa=1,Yy=0,tn=0,Wt=0,Pa="";function yl(n,a,r,o,c,d,f,p){return{value:n,root:a,parent:r,type:o,props:c,children:d,line:gl,column:qa,length:f,return:"",siblings:p}}function mi(n,a){return vf(yl("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},a)}function Oa(n){for(;n.root;)n=mi(n.root,{children:[n]});Js(n,n.siblings)}function BS(){return Wt}function NS(){return Wt=tn>0?se(Pa,--tn):0,qa--,Wt===10&&(qa=1,gl--),Wt}function cn(){return Wt=tn<Yy?se(Pa,tn++):0,qa++,Wt===10&&(qa=1,gl++),Wt}function $i(){return se(Pa,tn)}function Qo(){return tn}function vl(n,a){return Ya(Pa,n,a)}function bf(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function LS(n){return gl=qa=1,Yy=gn(Pa=n),tn=0,[]}function US(n){return Pa="",n}function Jc(n){return Hy(vl(tn-1,xf(n===91?n+2:n===40?n+1:n)))}function HS(n){for(;(Wt=$i())&&Wt<33;)cn();return bf(n)>2||bf(Wt)>3?"":" "}function GS(n,a){for(;--a&&cn()&&!(Wt<48||Wt>102||Wt>57&&Wt<65||Wt>70&&Wt<97););return vl(n,Qo()+(a<6&&$i()==32&&cn()==32))}function xf(n){for(;cn();)switch(Wt){case n:return tn;case 34:case 39:n!==34&&n!==39&&xf(Wt);break;case 40:n===41&&xf(n);break;case 92:cn();break}return tn}function YS(n,a){for(;cn()&&n+Wt!==57;)if(n+Wt===84&&$i()===47)break;return"/*"+vl(a,tn-1)+"*"+Jf(n===47?n:cn())}function qS(n){for(;!bf($i());)cn();return vl(n,tn)}function XS(n){return US(Ko("",null,null,null,[""],n=LS(n),0,[0],n))}function Ko(n,a,r,o,c,d,f,p,g){for(var m=0,y=0,b=f,S=0,M=0,N=0,Y=1,K=1,q=1,Q=0,G="",W=c,P=d,Z=o,H=G;K;)switch(N=Q,Q=cn()){case 40:if(N!=108&&se(H,b-1)==58){$o(H+=dt(Jc(Q),"&","&\f"),"&\f",Uy(m?p[m-1]:0))!=-1&&(q=-1);break}case 34:case 39:case 91:H+=Jc(Q);break;case 9:case 10:case 13:case 32:H+=HS(N);break;case 92:H+=GS(Qo()-1,7);continue;case 47:switch($i()){case 42:case 47:Js($S(YS(cn(),Qo()),a,r,g),g);break;default:H+="/"}break;case 123*Y:p[m++]=gn(H)*q;case 125*Y:case 59:case 0:switch(Q){case 0:case 125:K=0;case 59+y:q==-1&&(H=dt(H,/\f/g,"")),M>0&&gn(H)-b&&Js(M>32?Jg(H+";",o,r,b-1,g):Jg(dt(H," ","")+";",o,r,b-2,g),g);break;case 59:H+=";";default:if(Js(Z=Pg(H,a,r,m,y,c,p,G,W=[],P=[],b,d),d),Q===123)if(y===0)Ko(H,a,Z,Z,W,d,b,p,P);else switch(S===99&&se(H,3)===110?100:S){case 100:case 108:case 109:case 115:Ko(n,Z,Z,o&&Js(Pg(n,Z,Z,0,0,c,p,G,c,W=[],b,P),P),c,P,b,p,o?W:P);break;default:Ko(H,Z,Z,Z,[""],P,0,p,P)}}m=y=M=0,Y=q=1,G=H="",b=f;break;case 58:b=1+gn(H),M=N;default:if(Y<1){if(Q==123)--Y;else if(Q==125&&Y++==0&&NS()==125)continue}switch(H+=Jf(Q),Q*Y){case 38:q=y>0?1:(H+="\f",-1);break;case 44:p[m++]=(gn(H)-1)*q,q=1;break;case 64:$i()===45&&(H+=Jc(cn())),S=$i(),y=b=gn(G=H+=qS(Qo())),Q++;break;case 45:N===45&&gn(H)==2&&(Y=0)}}return d}function Pg(n,a,r,o,c,d,f,p,g,m,y,b){for(var S=c-1,M=c===0?d:[""],N=Gy(M),Y=0,K=0,q=0;Y<o;++Y)for(var Q=0,G=Ya(n,S+1,S=Uy(K=f[Y])),W=n;Q<N;++Q)(W=Hy(K>0?M[Q]+" "+G:dt(G,/&\f/g,M[Q])))&&(g[q++]=W);return yl(n,a,r,c===0?ml:p,g,m,y,b)}function $S(n,a,r,o){return yl(n,a,r,Ny,Jf(BS()),Ya(n,2,-2),0,o)}function Jg(n,a,r,o,c){return yl(n,a,r,Pf,Ya(n,0,o),Ya(n,o+1,-1),o,c)}function qy(n,a,r){switch(_S(n,a)){case 5103:return wt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return wt+n+n;case 4789:return Fs+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return wt+n+Fs+n+kt+n+n;case 5936:switch(se(n,a+11)){case 114:return wt+n+kt+dt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return wt+n+kt+dt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return wt+n+kt+dt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return wt+n+kt+n+n;case 6165:return wt+n+kt+"flex-"+n+n;case 5187:return wt+n+dt(n,/(\w+).+(:[^]+)/,wt+"box-$1$2"+kt+"flex-$1$2")+n;case 5443:return wt+n+kt+"flex-item-"+dt(n,/flex-|-self/g,"")+(Gn(n,/flex-|baseline/)?"":kt+"grid-row-"+dt(n,/flex-|-self/g,""))+n;case 4675:return wt+n+kt+"flex-line-pack"+dt(n,/align-content|flex-|-self/g,"")+n;case 5548:return wt+n+kt+dt(n,"shrink","negative")+n;case 5292:return wt+n+kt+dt(n,"basis","preferred-size")+n;case 6060:return wt+"box-"+dt(n,"-grow","")+wt+n+kt+dt(n,"grow","positive")+n;case 4554:return wt+dt(n,/([^-])(transform)/g,"$1"+wt+"$2")+n;case 6187:return dt(dt(dt(n,/(zoom-|grab)/,wt+"$1"),/(image-set)/,wt+"$1"),n,"")+n;case 5495:case 3959:return dt(n,/(image-set\([^]*)/,wt+"$1$`$1");case 4968:return dt(dt(n,/(.+:)(flex-)?(.*)/,wt+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+wt+n+n;case 4200:if(!Gn(n,/flex-|baseline/))return kt+"grid-column-align"+Ya(n,a)+n;break;case 2592:case 3360:return kt+dt(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(o,c){return a=c,Gn(o.props,/grid-\w+-end/)})?~$o(n+(r=r[a].value),"span",0)?n:kt+dt(n,"-start","")+n+kt+"grid-row-span:"+(~$o(r,"span",0)?Gn(r,/\d+/):+Gn(r,/\d+/)-+Gn(n,/\d+/))+";":kt+dt(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(o){return Gn(o.props,/grid-\w+-start/)})?n:kt+dt(dt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return dt(n,/(.+)-inline(.+)/,wt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(n)-1-a>6)switch(se(n,a+1)){case 109:if(se(n,a+4)!==45)break;case 102:return dt(n,/(.+:)(.+)-([^]+)/,"$1"+wt+"$2-$3$1"+Fs+(se(n,a+3)==108?"$3":"$2-$3"))+n;case 115:return~$o(n,"stretch",0)?qy(dt(n,"stretch","fill-available"),a,r)+n:n}break;case 5152:case 5920:return dt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,d,f,p,g,m){return kt+c+":"+d+m+(f?kt+c+"-span:"+(p?g:+g-+d)+m:"")+n});case 4949:if(se(n,a+6)===121)return dt(n,":",":"+wt)+n;break;case 6444:switch(se(n,se(n,14)===45?18:11)){case 120:return dt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+wt+(se(n,14)===45?"inline-":"")+"box$3$1"+wt+"$2$3$1"+kt+"$2box$3")+n;case 100:return dt(n,":",":"+kt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return dt(n,"scroll-","scroll-snap-")+n}return n}function al(n,a){for(var r="",o=0;o<n.length;o++)r+=a(n[o],o,n,a)||"";return r}function QS(n,a,r,o){switch(n.type){case VS:if(n.children.length)break;case OS:case Pf:return n.return=n.return||n.value;case Ny:return"";case Ly:return n.return=n.value+"{"+al(n.children,o)+"}";case ml:if(!gn(n.value=n.props.join(",")))return""}return gn(r=al(n.children,o))?n.return=n.value+"{"+r+"}":""}function KS(n){var a=Gy(n);return function(r,o,c,d){for(var f="",p=0;p<a;p++)f+=n[p](r,o,c,d)||"";return f}}function ZS(n){return function(a){a.root||(a=a.return)&&n(a)}}function PS(n,a,r,o){if(n.length>-1&&!n.return)switch(n.type){case Pf:n.return=qy(n.value,n.length,r);return;case Ly:return al([mi(n,{value:dt(n.value,"@","@"+wt)})],o);case ml:if(n.length)return kS(r=n.props,function(c){switch(Gn(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Oa(mi(n,{props:[dt(c,/:(read-\w+)/,":"+Fs+"$1")]})),Oa(mi(n,{props:[c]})),vf(n,{props:Zg(r,o)});break;case"::placeholder":Oa(mi(n,{props:[dt(c,/:(plac\w+)/,":"+wt+"input-$1")]})),Oa(mi(n,{props:[dt(c,/:(plac\w+)/,":"+Fs+"$1")]})),Oa(mi(n,{props:[dt(c,/:(plac\w+)/,kt+"input-$1")]})),Oa(mi(n,{props:[c]})),vf(n,{props:Zg(r,o)});break}return""})}}var JS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},Xa=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",Xy="active",$y="data-styled-version",bl="6.1.19",Wf=`/*!sc*/
`,sl=typeof window<"u"&&typeof document<"u",WS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),FS={},xl=Object.freeze([]),$a=Object.freeze({});function Qy(n,a,r){return r===void 0&&(r=$a),n.theme!==r.theme&&n.theme||a||r.theme}var Ky=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),IS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,t2=/(^-|-$)/g;function Wg(n){return n.replace(IS,"-").replace(t2,"")}var e2=/(a)(d)/gi,Bo=52,Fg=function(n){return String.fromCharCode(n+(n>25?39:97))};function Sf(n){var a,r="";for(a=Math.abs(n);a>Bo;a=a/Bo|0)r=Fg(a%Bo)+r;return(Fg(a%Bo)+r).replace(e2,"$1-$2")}var Wc,Zy=5381,Va=function(n,a){for(var r=a.length;r;)n=33*n^a.charCodeAt(--r);return n},Py=function(n){return Va(Zy,n)};function Ff(n){return Sf(Py(n)>>>0)}function n2(n){return n.displayName||n.name||"Component"}function Fc(n){return typeof n=="string"&&!0}var Jy=typeof Symbol=="function"&&Symbol.for,Wy=Jy?Symbol.for("react.memo"):60115,i2=Jy?Symbol.for("react.forward_ref"):60112,a2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},r2=((Wc={})[i2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wc[Wy]=Fy,Wc);function Ig(n){return("type"in(a=n)&&a.type.$$typeof)===Wy?Fy:"$$typeof"in n?r2[n.$$typeof]:a2;var a}var o2=Object.defineProperty,l2=Object.getOwnPropertyNames,t0=Object.getOwnPropertySymbols,u2=Object.getOwnPropertyDescriptor,c2=Object.getPrototypeOf,e0=Object.prototype;function Iy(n,a,r){if(typeof a!="string"){if(e0){var o=c2(a);o&&o!==e0&&Iy(n,o,r)}var c=l2(a);t0&&(c=c.concat(t0(a)));for(var d=Ig(n),f=Ig(a),p=0;p<c.length;++p){var g=c[p];if(!(g in s2||r&&r[g]||f&&g in f||d&&g in d)){var m=u2(a,g);try{o2(n,g,m)}catch{}}}}return n}function Qa(n){return typeof n=="function"}function If(n){return typeof n=="object"&&"styledComponentId"in n}function Yi(n,a){return n&&a?"".concat(n," ").concat(a):n||a||""}function rl(n,a){if(n.length===0)return"";for(var r=n[0],o=1;o<n.length;o++)r+=n[o];return r}function ar(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Tf(n,a,r){if(r===void 0&&(r=!1),!r&&!ar(n)&&!Array.isArray(n))return a;if(Array.isArray(a))for(var o=0;o<a.length;o++)n[o]=Tf(n[o],a[o]);else if(ar(a))for(var o in a)n[o]=Tf(n[o],a[o]);return n}function td(n,a){Object.defineProperty(n,"toString",{value:a})}function dr(n){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var f2=(function(){function n(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return n.prototype.indexOfGroup=function(a){for(var r=0,o=0;o<a;o++)r+=this.groupSizes[o];return r},n.prototype.insertRules=function(a,r){if(a>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,d=c;a>=d;)if((d<<=1)<0)throw dr(16,"".concat(a));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var f=c;f<d;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(a+1),g=(f=0,r.length);f<g;f++)this.tag.insertRule(p,r[f])&&(this.groupSizes[a]++,p++)},n.prototype.clearGroup=function(a){if(a<this.length){var r=this.groupSizes[a],o=this.indexOfGroup(a),c=o+r;this.groupSizes[a]=0;for(var d=o;d<c;d++)this.tag.deleteRule(o)}},n.prototype.getGroup=function(a){var r="";if(a>=this.length||this.groupSizes[a]===0)return r;for(var o=this.groupSizes[a],c=this.indexOfGroup(a),d=c+o,f=c;f<d;f++)r+="".concat(this.tag.getRule(f)).concat(Wf);return r},n})(),Zo=new Map,ol=new Map,Po=1,No=function(n){if(Zo.has(n))return Zo.get(n);for(;ol.has(Po);)Po++;var a=Po++;return Zo.set(n,a),ol.set(a,n),a},d2=function(n,a){Po=a+1,Zo.set(n,a),ol.set(a,n)},h2="style[".concat(Xa,"][").concat($y,'="').concat(bl,'"]'),p2=new RegExp("^".concat(Xa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),m2=function(n,a,r){for(var o,c=r.split(","),d=0,f=c.length;d<f;d++)(o=c[d])&&n.registerName(a,o)},g2=function(n,a){for(var r,o=((r=a.textContent)!==null&&r!==void 0?r:"").split(Wf),c=[],d=0,f=o.length;d<f;d++){var p=o[d].trim();if(p){var g=p.match(p2);if(g){var m=0|parseInt(g[1],10),y=g[2];m!==0&&(d2(y,m),m2(n,y,g[3]),n.getTag().insertRules(m,c)),c.length=0}else c.push(p)}}},n0=function(n){for(var a=document.querySelectorAll(h2),r=0,o=a.length;r<o;r++){var c=a[r];c&&c.getAttribute(Xa)!==Xy&&(g2(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function y2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var tv=function(n){var a=document.head,r=n||a,o=document.createElement("style"),c=(function(p){var g=Array.from(p.querySelectorAll("style[".concat(Xa,"]")));return g[g.length-1]})(r),d=c!==void 0?c.nextSibling:null;o.setAttribute(Xa,Xy),o.setAttribute($y,bl);var f=y2();return f&&o.setAttribute("nonce",f),r.insertBefore(o,d),o},v2=(function(){function n(a){this.element=tv(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,c=0,d=o.length;c<d;c++){var f=o[c];if(f.ownerNode===r)return f}throw dr(17)})(this.element),this.length=0}return n.prototype.insertRule=function(a,r){try{return this.sheet.insertRule(r,a),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},n.prototype.getRule=function(a){var r=this.sheet.cssRules[a];return r&&r.cssText?r.cssText:""},n})(),b2=(function(){function n(a){this.element=tv(a),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(a,r){if(a<=this.length&&a>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[a]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},n.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},n})(),x2=(function(){function n(a){this.rules=[],this.length=0}return n.prototype.insertRule=function(a,r){return a<=this.length&&(this.rules.splice(a,0,r),this.length++,!0)},n.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},n.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},n})(),i0=sl,S2={isServer:!sl,useCSSOMInjection:!WS},ll=(function(){function n(a,r,o){a===void 0&&(a=$a),r===void 0&&(r={});var c=this;this.options=ge(ge({},S2),a),this.gs=r,this.names=new Map(o),this.server=!!a.isServer,!this.server&&sl&&i0&&(i0=!1,n0(this)),td(this,function(){return(function(d){for(var f=d.getTag(),p=f.length,g="",m=function(b){var S=(function(q){return ol.get(q)})(b);if(S===void 0)return"continue";var M=d.names.get(S),N=f.getGroup(b);if(M===void 0||!M.size||N.length===0)return"continue";var Y="".concat(Xa,".g").concat(b,'[id="').concat(S,'"]'),K="";M!==void 0&&M.forEach(function(q){q.length>0&&(K+="".concat(q,","))}),g+="".concat(N).concat(Y,'{content:"').concat(K,'"}').concat(Wf)},y=0;y<p;y++)m(y);return g})(c)})}return n.registerId=function(a){return No(a)},n.prototype.rehydrate=function(){!this.server&&sl&&n0(this)},n.prototype.reconstructWithOptions=function(a,r){return r===void 0&&(r=!0),new n(ge(ge({},this.options),a),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(r){var o=r.useCSSOMInjection,c=r.target;return r.isServer?new x2(c):o?new v2(c):new b2(c)})(this.options),new f2(a)));var a},n.prototype.hasNameForId=function(a,r){return this.names.has(a)&&this.names.get(a).has(r)},n.prototype.registerName=function(a,r){if(No(a),this.names.has(a))this.names.get(a).add(r);else{var o=new Set;o.add(r),this.names.set(a,o)}},n.prototype.insertRules=function(a,r,o){this.registerName(a,r),this.getTag().insertRules(No(a),o)},n.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},n.prototype.clearRules=function(a){this.getTag().clearGroup(No(a)),this.clearNames(a)},n.prototype.clearTag=function(){this.tag=void 0},n})(),T2=/&/g,A2=/^\s*\/\/.*$/gm;function ev(n,a){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(a," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(a," ")),r.props=r.props.map(function(o){return"".concat(a," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=ev(r.children,a)),r})}function w2(n){var a,r,o,c=$a,d=c.options,f=d===void 0?$a:d,p=c.plugins,g=p===void 0?xl:p,m=function(S,M,N){return N.startsWith(r)&&N.endsWith(r)&&N.replaceAll(r,"").length>0?".".concat(a):S},y=g.slice();y.push(function(S){S.type===ml&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(T2,r).replace(o,m))}),f.prefix&&y.push(PS),y.push(QS);var b=function(S,M,N,Y){M===void 0&&(M=""),N===void 0&&(N=""),Y===void 0&&(Y="&"),a=Y,r=M,o=new RegExp("\\".concat(r,"\\b"),"g");var K=S.replace(A2,""),q=XS(N||M?"".concat(N," ").concat(M," { ").concat(K," }"):K);f.namespace&&(q=ev(q,f.namespace));var Q=[];return al(q,KS(y.concat(ZS(function(G){return Q.push(G)})))),Q};return b.hash=g.length?g.reduce(function(S,M){return M.name||dr(15),Va(S,M.name)},Zy).toString():"",b}var E2=new ll,Af=w2(),nv=Yn.createContext({shouldForwardProp:void 0,styleSheet:E2,stylis:Af});nv.Consumer;Yn.createContext(void 0);function wf(){return X.useContext(nv)}var iv=(function(){function n(a,r){var o=this;this.inject=function(c,d){d===void 0&&(d=Af);var f=o.name+d.hash;c.hasNameForId(o.id,f)||c.insertRules(o.id,f,d(o.rules,f,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=r,td(this,function(){throw dr(12,String(o.name))})}return n.prototype.getName=function(a){return a===void 0&&(a=Af),this.name+a.hash},n})(),C2=function(n){return n>="A"&&n<="Z"};function a0(n){for(var a="",r=0;r<n.length;r++){var o=n[r];if(r===1&&o==="-"&&n[0]==="-")return n;C2(o)?a+="-"+o.toLowerCase():a+=o}return a.startsWith("ms-")?"-"+a:a}var av=function(n){return n==null||n===!1||n===""},sv=function(n){var a,r,o=[];for(var c in n){var d=n[c];n.hasOwnProperty(c)&&!av(d)&&(Array.isArray(d)&&d.isCss||Qa(d)?o.push("".concat(a0(c),":"),d,";"):ar(d)?o.push.apply(o,Ga(Ga(["".concat(c," {")],sv(d),!1),["}"],!1)):o.push("".concat(a0(c),": ").concat((a=c,(r=d)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||a in JS||a.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function yi(n,a,r,o){if(av(n))return[];if(If(n))return[".".concat(n.styledComponentId)];if(Qa(n)){if(!Qa(d=n)||d.prototype&&d.prototype.isReactComponent||!a)return[n];var c=n(a);return yi(c,a,r,o)}var d;return n instanceof iv?r?(n.inject(r,o),[n.getName(o)]):[n]:ar(n)?sv(n):Array.isArray(n)?Array.prototype.concat.apply(xl,n.map(function(f){return yi(f,a,r,o)})):[n.toString()]}function rv(n){for(var a=0;a<n.length;a+=1){var r=n[a];if(Qa(r)&&!If(r))return!1}return!0}var M2=Py(bl),D2=(function(){function n(a,r,o){this.rules=a,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&rv(a),this.componentId=r,this.baseHash=Va(M2,r),this.baseStyle=o,ll.registerId(r)}return n.prototype.generateAndInjectStyles=function(a,r,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))c=Yi(c,this.staticRulesId);else{var d=rl(yi(this.rules,a,r,o)),f=Sf(Va(this.baseHash,d)>>>0);if(!r.hasNameForId(this.componentId,f)){var p=o(d,".".concat(f),void 0,this.componentId);r.insertRules(this.componentId,f,p)}c=Yi(c,f),this.staticRulesId=f}else{for(var g=Va(this.baseHash,o.hash),m="",y=0;y<this.rules.length;y++){var b=this.rules[y];if(typeof b=="string")m+=b;else if(b){var S=rl(yi(b,a,r,o));g=Va(g,S+y),m+=S}}if(m){var M=Sf(g>>>0);r.hasNameForId(this.componentId,M)||r.insertRules(this.componentId,M,o(m,".".concat(M),void 0,this.componentId)),c=Yi(c,M)}}return c},n})(),ed=Yn.createContext(void 0);ed.Consumer;var Ic={};function z2(n,a,r){var o=If(n),c=n,d=!Fc(n),f=a.attrs,p=f===void 0?xl:f,g=a.componentId,m=g===void 0?(function(W,P){var Z=typeof W!="string"?"sc":Wg(W);Ic[Z]=(Ic[Z]||0)+1;var H="".concat(Z,"-").concat(Ff(bl+Z+Ic[Z]));return P?"".concat(P,"-").concat(H):H})(a.displayName,a.parentComponentId):g,y=a.displayName,b=y===void 0?(function(W){return Fc(W)?"styled.".concat(W):"Styled(".concat(n2(W),")")})(n):y,S=a.displayName&&a.componentId?"".concat(Wg(a.displayName),"-").concat(a.componentId):a.componentId||m,M=o&&c.attrs?c.attrs.concat(p).filter(Boolean):p,N=a.shouldForwardProp;if(o&&c.shouldForwardProp){var Y=c.shouldForwardProp;if(a.shouldForwardProp){var K=a.shouldForwardProp;N=function(W,P){return Y(W,P)&&K(W,P)}}else N=Y}var q=new D2(r,S,o?c.componentStyle:void 0);function Q(W,P){return(function(Z,H,I){var xt=Z.attrs,Bt=Z.componentStyle,Yt=Z.defaultProps,Ft=Z.foldedComponentIds,en=Z.styledComponentId,be=Z.target,pe=Yn.useContext(ed),k=wf(),$=Z.shouldForwardProp||k.shouldForwardProp,et=Qy(H,pe,Yt)||$a,ot=(function(rt,ut,vt){for(var qt,Ct=ge(ge({},ut),{className:void 0,theme:vt}),xn=0;xn<rt.length;xn+=1){var Sn=Qa(qt=rt[xn])?qt(Ct):qt;for(var He in Sn)Ct[He]=He==="className"?Yi(Ct[He],Sn[He]):He==="style"?ge(ge({},Ct[He]),Sn[He]):Sn[He]}return ut.className&&(Ct.className=Yi(Ct.className,ut.className)),Ct})(xt,H,et),ht=ot.as||be,A={};for(var B in ot)ot[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&ot.theme===et||(B==="forwardedAs"?A.as=ot.forwardedAs:$&&!$(B,ht)||(A[B]=ot[B]));var J=(function(rt,ut){var vt=wf(),qt=rt.generateAndInjectStyles(ut,vt.styleSheet,vt.stylis);return qt})(Bt,ot),F=Yi(Ft,en);return J&&(F+=" "+J),ot.className&&(F+=" "+ot.className),A[Fc(ht)&&!Ky.has(ht)?"class":"className"]=F,I&&(A.ref=I),X.createElement(ht,A)})(G,W,P)}Q.displayName=b;var G=Yn.forwardRef(Q);return G.attrs=M,G.componentStyle=q,G.displayName=b,G.shouldForwardProp=N,G.foldedComponentIds=o?Yi(c.foldedComponentIds,c.styledComponentId):"",G.styledComponentId=S,G.target=o?c.target:n,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=o?(function(P){for(var Z=[],H=1;H<arguments.length;H++)Z[H-1]=arguments[H];for(var I=0,xt=Z;I<xt.length;I++)Tf(P,xt[I],!0);return P})({},c.defaultProps,W):W}}),td(G,function(){return".".concat(G.styledComponentId)}),d&&Iy(G,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function s0(n,a){for(var r=[n[0]],o=0,c=a.length;o<c;o+=1)r.push(a[o],n[o+1]);return r}var r0=function(n){return Object.assign(n,{isCss:!0})};function Ie(n){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];if(Qa(n)||ar(n))return r0(yi(s0(xl,Ga([n],a,!0))));var o=n;return a.length===0&&o.length===1&&typeof o[0]=="string"?yi(o):r0(yi(s0(o,a)))}function Ef(n,a,r){if(r===void 0&&(r=$a),!a)throw dr(1,a);var o=function(c){for(var d=[],f=1;f<arguments.length;f++)d[f-1]=arguments[f];return n(a,r,Ie.apply(void 0,Ga([c],d,!1)))};return o.attrs=function(c){return Ef(n,a,ge(ge({},r),{attrs:Array.prototype.concat(r.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return Ef(n,a,ge(ge({},r),c))},o}var ov=function(n){return Ef(z2,n)},C=ov;Ky.forEach(function(n){C[n]=ov(n)});var j2=(function(){function n(a,r){this.rules=a,this.componentId=r,this.isStatic=rv(a),ll.registerId(this.componentId+1)}return n.prototype.createStyles=function(a,r,o,c){var d=c(rl(yi(this.rules,r,o,c)),""),f=this.componentId+a;o.insertRules(f,f,d)},n.prototype.removeStyles=function(a,r){r.clearRules(this.componentId+a)},n.prototype.renderStyles=function(a,r,o,c){a>2&&ll.registerId(this.componentId+a),this.removeStyles(a,o),this.createStyles(a,r,o,c)},n})();function R2(n){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];var o=Ie.apply(void 0,Ga([n],a,!1)),c="sc-global-".concat(Ff(JSON.stringify(o))),d=new j2(o,c),f=function(g){var m=wf(),y=Yn.useContext(ed),b=Yn.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&p(b,g,m.styleSheet,y,m.stylis),Yn.useLayoutEffect(function(){if(!m.styleSheet.server)return p(b,g,m.styleSheet,y,m.stylis),function(){return d.removeStyles(b,m.styleSheet)}},[b,g,m.styleSheet,y,m.stylis]),null};function p(g,m,y,b,S){if(d.isStatic)d.renderStyles(g,FS,y,S);else{var M=ge(ge({},m),{theme:Qy(m,b,f.defaultProps)});d.renderStyles(g,M,y,S)}}return Yn.memo(f)}function oe(n){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];var o=rl(Ie.apply(void 0,Ga([n],a,!1))),c=Ff(o);return new iv(c,o)}const ie={bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgTertiary:"#111111",bgCard:"rgba(255, 255, 255, 0.02)",textPrimary:"#f5f5f7",textSecondary:"#86868b",textTertiary:"#6e6e73",accent:"#2A9D8F",accentHover:"#3BB4A5",accentSubtle:"rgba(42, 157, 143, 0.15)",blue:"#4361A5",lightBlue:"#7BA7D9",cyan:"#3BB4B1",border:"rgba(255, 255, 255, 0.08)",borderHover:"rgba(255, 255, 255, 0.15)",gradient:"linear-gradient(135deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)",gradientHorizontal:"linear-gradient(90deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%)"},he={bgPrimary:"#ffffff",bgSecondary:"#f5f5f7",bgTertiary:"#e8e8ed",bgCard:"rgba(0, 0, 0, 0.02)",textPrimary:"#1d1d1f",textSecondary:"#6e6e73",textTertiary:"#86868b",accent:"#238076",accentHover:"#1a6b63",accentSubtle:"rgba(42, 157, 143, 0.12)",blue:"#3a5491",lightBlue:"#5a8cc7",cyan:"#2f9d9a",border:"rgba(0, 0, 0, 0.08)",borderHover:"rgba(0, 0, 0, 0.15)",gradient:"linear-gradient(135deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)",gradientHorizontal:"linear-gradient(90deg, #238076 0%, #2f9d9a 35%, #3a5491 70%, #5a8cc7 100%)"},V={colors:ie,space:{sm:"16px",section:"100px"},typography:{fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',fontSize:{headline:"clamp(40px, 5vw, 64px)",caption:"14px"},fontWeight:{regular:400,medium:500,semibold:600,bold:700},lineHeight:{tight:1.05},letterSpacing:{tight:"-0.03em",wide:"0.1em"}},breakpoints:{mobile:"640px",tablet:"1024px",desktop:"1280px"},borderRadius:{full:"9999px"},zIndex:{sticky:100},maxWidth:{wide:"1200px",full:"1440px"}},O2=R2`
  /* CSS Variables for dynamic theming */
  :root {
    /* Dark mode (default) */
    --bg-primary: ${ie.bgPrimary};
    --bg-secondary: ${ie.bgSecondary};
    --bg-tertiary: ${ie.bgTertiary};
    --bg-card: ${ie.bgCard};
    --text-primary: ${ie.textPrimary};
    --text-secondary: ${ie.textSecondary};
    --text-tertiary: ${ie.textTertiary};
    --accent: ${ie.accent};
    --accent-hover: ${ie.accentHover};
    --accent-subtle: ${ie.accentSubtle};
    --blue: ${ie.blue};
    --cyan: ${ie.cyan};
    --light-blue: ${ie.lightBlue};
    --border: ${ie.border};
    --border-hover: ${ie.borderHover};
    --gradient: ${ie.gradient};
    --gradient-horizontal: ${ie.gradientHorizontal};
    
    /* Glass effects for dark mode */
    --glass-bg: rgba(255, 255, 255, 0.08);
    --glass-bg-hover: rgba(255, 255, 255, 0.12);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-shadow: rgba(0, 0, 0, 0.3);
    
    /* Navigation specific */
    --nav-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.08) 100%);
    --nav-border-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 40%, rgba(42, 157, 143, 0.2) 60%, rgba(67, 97, 165, 0.15) 100%);
    --nav-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 24px -4px rgba(0, 0, 0, 0.3), 0 8px 48px -8px rgba(42, 157, 143, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 -1px 1px rgba(0, 0, 0, 0.1);
    --nav-highlight: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    
    /* Card backgrounds */
    --card-bg: rgba(255, 255, 255, 0.02);
    --card-bg-hover: rgba(255, 255, 255, 0.05);
    --card-border: rgba(255, 255, 255, 0.08);
  }
  
  [data-theme="light"] {
    --bg-primary: ${he.bgPrimary};
    --bg-secondary: ${he.bgSecondary};
    --bg-tertiary: ${he.bgTertiary};
    --bg-card: ${he.bgCard};
    --text-primary: ${he.textPrimary};
    --text-secondary: ${he.textSecondary};
    --text-tertiary: ${he.textTertiary};
    --accent: ${he.accent};
    --accent-hover: ${he.accentHover};
    --accent-subtle: ${he.accentSubtle};
    --blue: ${he.blue};
    --cyan: ${he.cyan};
    --light-blue: ${he.lightBlue};
    --border: ${he.border};
    --border-hover: ${he.borderHover};
    --gradient: ${he.gradient};
    --gradient-horizontal: ${he.gradientHorizontal};
    
    /* Glass effects for light mode */
    --glass-bg: rgba(255, 255, 255, 0.7);
    --glass-bg-hover: rgba(255, 255, 255, 0.85);
    --glass-border: rgba(0, 0, 0, 0.08);
    --glass-shadow: rgba(0, 0, 0, 0.1);
    
    /* Navigation for light mode */
    --nav-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.8) 100%);
    --nav-border-gradient: linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 40%, rgba(42, 157, 143, 0.15) 60%, rgba(67, 97, 165, 0.1) 100%);
    --nav-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 24px -4px rgba(0, 0, 0, 0.1), 0 8px 48px -8px rgba(42, 157, 143, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.8);
    --nav-highlight: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
    
    /* Card backgrounds for light mode */
    --card-bg: rgba(255, 255, 255, 0.6);
    --card-bg-hover: rgba(255, 255, 255, 0.8);
    --card-border: rgba(0, 0, 0, 0.06);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    transition: background-color 0.4s ease, color 0.4s ease;
    position: relative;
    min-height: 100vh;
  }

  ::selection {
    background: var(--accent);
    color: white;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
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

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--border-hover);
  }

  /* Focus styles */
  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`,lv=X.createContext(void 0),uv="portfolio-theme-mode",V2=()=>{if(typeof window<"u"){const n=localStorage.getItem(uv);if(n==="dark"||n==="light")return n}return"dark"},_2=({children:n})=>{const[a,r]=X.useState(V2);X.useEffect(()=>{document.documentElement.setAttribute("data-theme",a),localStorage.setItem(uv,a)},[a]);const o=()=>{r(c=>c==="dark"?"light":"dark")};return x.jsx(lv.Provider,{value:{mode:a,toggleTheme:o,isDark:a==="dark"},children:n})},k2=()=>{const n=X.useContext(lv);if(!n)throw new Error("useTheme must be used within a ThemeProvider");return n},nd=X.createContext({});function Ja(n){const a=X.useRef(null);return a.current===null&&(a.current=n()),a.current}const id=typeof window<"u",Sl=id?X.useLayoutEffect:X.useEffect,Tl=X.createContext(null);function ad(n,a){n.indexOf(a)===-1&&n.push(a)}function sd(n,a){const r=n.indexOf(a);r>-1&&n.splice(r,1)}const bn=(n,a,r)=>r>a?a:r<n?n:r;let sr=()=>{};const qn={},cv=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function fv(n){return typeof n=="object"&&n!==null}const dv=n=>/^0[^.\s]+$/u.test(n);function rd(n){let a;return()=>(a===void 0&&(a=n()),a)}const De=n=>n,B2=(n,a)=>r=>a(n(r)),hr=(...n)=>n.reduce(B2),Ka=(n,a,r)=>{const o=a-n;return o===0?1:(r-n)/o};class od{constructor(){this.subscriptions=[]}add(a){return ad(this.subscriptions,a),()=>sd(this.subscriptions,a)}notify(a,r,o){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](a,r,o);else for(let d=0;d<c;d++){const f=this.subscriptions[d];f&&f(a,r,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const yn=n=>n*1e3,Fe=n=>n/1e3;function ld(n,a){return a?n*(1e3/a):0}const hv=(n,a,r)=>(((1-3*r+3*a)*n+(3*r-6*a))*n+3*a)*n,N2=1e-7,L2=12;function U2(n,a,r,o,c){let d,f,p=0;do f=a+(r-a)/2,d=hv(f,o,c)-n,d>0?r=f:a=f;while(Math.abs(d)>N2&&++p<L2);return f}function pr(n,a,r,o){if(n===a&&r===o)return De;const c=d=>U2(d,0,1,n,r);return d=>d===0||d===1?d:hv(c(d),a,o)}const pv=n=>a=>a<=.5?n(2*a)/2:(2-n(2*(1-a)))/2,mv=n=>a=>1-n(1-a),gv=pr(.33,1.53,.69,.99),ud=mv(gv),yv=pv(ud),vv=n=>(n*=2)<1?.5*ud(n):.5*(2-Math.pow(2,-10*(n-1))),cd=n=>1-Math.sin(Math.acos(n)),bv=mv(cd),xv=pv(cd),H2=pr(.42,0,1,1),G2=pr(0,0,.58,1),Sv=pr(.42,0,.58,1),Y2=n=>Array.isArray(n)&&typeof n[0]!="number",Tv=n=>Array.isArray(n)&&typeof n[0]=="number",q2={linear:De,easeIn:H2,easeInOut:Sv,easeOut:G2,circIn:cd,circInOut:xv,circOut:bv,backIn:ud,backInOut:yv,backOut:gv,anticipate:vv},X2=n=>typeof n=="string",o0=n=>{if(Tv(n)){sr(n.length===4);const[a,r,o,c]=n;return pr(a,r,o,c)}else if(X2(n))return q2[n];return n},Lo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function $2(n,a){let r=new Set,o=new Set,c=!1,d=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function g(y){f.has(y)&&(m.schedule(y),n()),y(p)}const m={schedule:(y,b=!1,S=!1)=>{const N=S&&c?r:o;return b&&f.add(y),N.has(y)||N.add(y),y},cancel:y=>{o.delete(y),f.delete(y)},process:y=>{if(p=y,c){d=!0;return}c=!0,[r,o]=[o,r],r.forEach(g),r.clear(),c=!1,d&&(d=!1,m.process(y))}};return m}const Q2=40;function Av(n,a){let r=!1,o=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>r=!0,f=Lo.reduce((G,W)=>(G[W]=$2(d),G),{}),{setup:p,read:g,resolveKeyframes:m,preUpdate:y,update:b,preRender:S,render:M,postRender:N}=f,Y=()=>{const G=qn.useManualTiming?c.timestamp:performance.now();r=!1,qn.useManualTiming||(c.delta=o?1e3/60:Math.max(Math.min(G-c.timestamp,Q2),1)),c.timestamp=G,c.isProcessing=!0,p.process(c),g.process(c),m.process(c),y.process(c),b.process(c),S.process(c),M.process(c),N.process(c),c.isProcessing=!1,r&&a&&(o=!1,n(Y))},K=()=>{r=!0,o=!0,c.isProcessing||n(Y)};return{schedule:Lo.reduce((G,W)=>{const P=f[W];return G[W]=(Z,H=!1,I=!1)=>(r||K(),P.schedule(Z,H,I)),G},{}),cancel:G=>{for(let W=0;W<Lo.length;W++)f[Lo[W]].cancel(G)},state:c,steps:f}}const{schedule:Et,cancel:fn,state:ae,steps:tf}=Av(typeof requestAnimationFrame<"u"?requestAnimationFrame:De,!0);let Jo;function K2(){Jo=void 0}const Me={now:()=>(Jo===void 0&&Me.set(ae.isProcessing||qn.useManualTiming?ae.timestamp:performance.now()),Jo),set:n=>{Jo=n,queueMicrotask(K2)}},wv=n=>a=>typeof a=="string"&&a.startsWith(n),fd=wv("--"),Z2=wv("var(--"),dd=n=>Z2(n)?P2.test(n.split("/*")[0].trim()):!1,P2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Wa={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},rr={...Wa,transform:n=>bn(0,1,n)},Uo={...Wa,default:1},Is=n=>Math.round(n*1e5)/1e5,hd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function J2(n){return n==null}const W2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pd=(n,a)=>r=>!!(typeof r=="string"&&W2.test(r)&&r.startsWith(n)||a&&!J2(r)&&Object.prototype.hasOwnProperty.call(r,a)),Ev=(n,a,r)=>o=>{if(typeof o!="string")return o;const[c,d,f,p]=o.match(hd);return{[n]:parseFloat(c),[a]:parseFloat(d),[r]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},F2=n=>bn(0,255,n),ef={...Wa,transform:n=>Math.round(F2(n))},qi={test:pd("rgb","red"),parse:Ev("red","green","blue"),transform:({red:n,green:a,blue:r,alpha:o=1})=>"rgba("+ef.transform(n)+", "+ef.transform(a)+", "+ef.transform(r)+", "+Is(rr.transform(o))+")"};function I2(n){let a="",r="",o="",c="";return n.length>5?(a=n.substring(1,3),r=n.substring(3,5),o=n.substring(5,7),c=n.substring(7,9)):(a=n.substring(1,2),r=n.substring(2,3),o=n.substring(3,4),c=n.substring(4,5),a+=a,r+=r,o+=o,c+=c),{red:parseInt(a,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:c?parseInt(c,16)/255:1}}const Cf={test:pd("#"),parse:I2,transform:qi.transform},mr=n=>({test:a=>typeof a=="string"&&a.endsWith(n)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${n}`}),gi=mr("deg"),vn=mr("%"),st=mr("px"),t5=mr("vh"),e5=mr("vw"),l0={...vn,parse:n=>vn.parse(n)/100,transform:n=>vn.transform(n*100)},_a={test:pd("hsl","hue"),parse:Ev("hue","saturation","lightness"),transform:({hue:n,saturation:a,lightness:r,alpha:o=1})=>"hsla("+Math.round(n)+", "+vn.transform(Is(a))+", "+vn.transform(Is(r))+", "+Is(rr.transform(o))+")"},Jt={test:n=>qi.test(n)||Cf.test(n)||_a.test(n),parse:n=>qi.test(n)?qi.parse(n):_a.test(n)?_a.parse(n):Cf.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?qi.transform(n):_a.transform(n),getAnimatableNone:n=>{const a=Jt.parse(n);return a.alpha=0,Jt.transform(a)}},n5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function i5(n){return isNaN(n)&&typeof n=="string"&&(n.match(hd)?.length||0)+(n.match(n5)?.length||0)>0}const Cv="number",Mv="color",a5="var",s5="var(",u0="${}",r5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function or(n){const a=n.toString(),r=[],o={color:[],number:[],var:[]},c=[];let d=0;const p=a.replace(r5,g=>(Jt.test(g)?(o.color.push(d),c.push(Mv),r.push(Jt.parse(g))):g.startsWith(s5)?(o.var.push(d),c.push(a5),r.push(g)):(o.number.push(d),c.push(Cv),r.push(parseFloat(g))),++d,u0)).split(u0);return{values:r,split:p,indexes:o,types:c}}function Dv(n){return or(n).values}function zv(n){const{split:a,types:r}=or(n),o=a.length;return c=>{let d="";for(let f=0;f<o;f++)if(d+=a[f],c[f]!==void 0){const p=r[f];p===Cv?d+=Is(c[f]):p===Mv?d+=Jt.transform(c[f]):d+=c[f]}return d}}const o5=n=>typeof n=="number"?0:Jt.test(n)?Jt.getAnimatableNone(n):n;function l5(n){const a=Dv(n);return zv(n)(a.map(o5))}const vi={test:i5,parse:Dv,createTransformer:zv,getAnimatableNone:l5};function nf(n,a,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(a-n)*6*r:r<1/2?a:r<2/3?n+(a-n)*(2/3-r)*6:n}function u5({hue:n,saturation:a,lightness:r,alpha:o}){n/=360,a/=100,r/=100;let c=0,d=0,f=0;if(!a)c=d=f=r;else{const p=r<.5?r*(1+a):r+a-r*a,g=2*r-p;c=nf(g,p,n+1/3),d=nf(g,p,n),f=nf(g,p,n-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:o}}function ul(n,a){return r=>r>0?a:n}const Lt=(n,a,r)=>n+(a-n)*r,af=(n,a,r)=>{const o=n*n,c=r*(a*a-o)+o;return c<0?0:Math.sqrt(c)},c5=[Cf,qi,_a],f5=n=>c5.find(a=>a.test(n));function c0(n){const a=f5(n);if(!a)return!1;let r=a.parse(n);return a===_a&&(r=u5(r)),r}const f0=(n,a)=>{const r=c0(n),o=c0(a);if(!r||!o)return ul(n,a);const c={...r};return d=>(c.red=af(r.red,o.red,d),c.green=af(r.green,o.green,d),c.blue=af(r.blue,o.blue,d),c.alpha=Lt(r.alpha,o.alpha,d),qi.transform(c))},Mf=new Set(["none","hidden"]);function d5(n,a){return Mf.has(n)?r=>r<=0?n:a:r=>r>=1?a:n}function h5(n,a){return r=>Lt(n,a,r)}function md(n){return typeof n=="number"?h5:typeof n=="string"?dd(n)?ul:Jt.test(n)?f0:g5:Array.isArray(n)?jv:typeof n=="object"?Jt.test(n)?f0:p5:ul}function jv(n,a){const r=[...n],o=r.length,c=n.map((d,f)=>md(d)(d,a[f]));return d=>{for(let f=0;f<o;f++)r[f]=c[f](d);return r}}function p5(n,a){const r={...n,...a},o={};for(const c in r)n[c]!==void 0&&a[c]!==void 0&&(o[c]=md(n[c])(n[c],a[c]));return c=>{for(const d in o)r[d]=o[d](c);return r}}function m5(n,a){const r=[],o={color:0,var:0,number:0};for(let c=0;c<a.values.length;c++){const d=a.types[c],f=n.indexes[d][o[d]],p=n.values[f]??0;r[c]=p,o[d]++}return r}const g5=(n,a)=>{const r=vi.createTransformer(a),o=or(n),c=or(a);return o.indexes.var.length===c.indexes.var.length&&o.indexes.color.length===c.indexes.color.length&&o.indexes.number.length>=c.indexes.number.length?Mf.has(n)&&!c.values.length||Mf.has(a)&&!o.values.length?d5(n,a):hr(jv(m5(o,c),c.values),r):ul(n,a)};function Rv(n,a,r){return typeof n=="number"&&typeof a=="number"&&typeof r=="number"?Lt(n,a,r):md(n)(n,a)}const y5=n=>{const a=({timestamp:r})=>n(r);return{start:(r=!0)=>Et.update(a,r),stop:()=>fn(a),now:()=>ae.isProcessing?ae.timestamp:Me.now()}},Ov=(n,a,r=10)=>{let o="";const c=Math.max(Math.round(a/r),2);for(let d=0;d<c;d++)o+=Math.round(n(d/(c-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},cl=2e4;function gd(n){let a=0;const r=50;let o=n.next(a);for(;!o.done&&a<cl;)a+=r,o=n.next(a);return a>=cl?1/0:a}function v5(n,a=100,r){const o=r({...n,keyframes:[0,a]}),c=Math.min(gd(o),cl);return{type:"keyframes",ease:d=>o.next(c*d).value/a,duration:Fe(c)}}const b5=5;function Vv(n,a,r){const o=Math.max(a-b5,0);return ld(r-n(o),a-o)}const Gt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},sf=.001;function x5({duration:n=Gt.duration,bounce:a=Gt.bounce,velocity:r=Gt.velocity,mass:o=Gt.mass}){let c,d,f=1-a;f=bn(Gt.minDamping,Gt.maxDamping,f),n=bn(Gt.minDuration,Gt.maxDuration,Fe(n)),f<1?(c=m=>{const y=m*f,b=y*n,S=y-r,M=Df(m,f),N=Math.exp(-b);return sf-S/M*N},d=m=>{const b=m*f*n,S=b*r+r,M=Math.pow(f,2)*Math.pow(m,2)*n,N=Math.exp(-b),Y=Df(Math.pow(m,2),f);return(-c(m)+sf>0?-1:1)*((S-M)*N)/Y}):(c=m=>{const y=Math.exp(-m*n),b=(m-r)*n+1;return-sf+y*b},d=m=>{const y=Math.exp(-m*n),b=(r-m)*(n*n);return y*b});const p=5/n,g=T5(c,d,p);if(n=yn(n),isNaN(g))return{stiffness:Gt.stiffness,damping:Gt.damping,duration:n};{const m=Math.pow(g,2)*o;return{stiffness:m,damping:f*2*Math.sqrt(o*m),duration:n}}}const S5=12;function T5(n,a,r){let o=r;for(let c=1;c<S5;c++)o=o-n(o)/a(o);return o}function Df(n,a){return n*Math.sqrt(1-a*a)}const A5=["duration","bounce"],w5=["stiffness","damping","mass"];function d0(n,a){return a.some(r=>n[r]!==void 0)}function E5(n){let a={velocity:Gt.velocity,stiffness:Gt.stiffness,damping:Gt.damping,mass:Gt.mass,isResolvedFromDuration:!1,...n};if(!d0(n,w5)&&d0(n,A5))if(n.visualDuration){const r=n.visualDuration,o=2*Math.PI/(r*1.2),c=o*o,d=2*bn(.05,1,1-(n.bounce||0))*Math.sqrt(c);a={...a,mass:Gt.mass,stiffness:c,damping:d}}else{const r=x5(n);a={...a,...r,mass:Gt.mass},a.isResolvedFromDuration=!0}return a}function fl(n=Gt.visualDuration,a=Gt.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:a}:n;let{restSpeed:o,restDelta:c}=r;const d=r.keyframes[0],f=r.keyframes[r.keyframes.length-1],p={done:!1,value:d},{stiffness:g,damping:m,mass:y,duration:b,velocity:S,isResolvedFromDuration:M}=E5({...r,velocity:-Fe(r.velocity||0)}),N=S||0,Y=m/(2*Math.sqrt(g*y)),K=f-d,q=Fe(Math.sqrt(g/y)),Q=Math.abs(K)<5;o||(o=Q?Gt.restSpeed.granular:Gt.restSpeed.default),c||(c=Q?Gt.restDelta.granular:Gt.restDelta.default);let G;if(Y<1){const P=Df(q,Y);G=Z=>{const H=Math.exp(-Y*q*Z);return f-H*((N+Y*q*K)/P*Math.sin(P*Z)+K*Math.cos(P*Z))}}else if(Y===1)G=P=>f-Math.exp(-q*P)*(K+(N+q*K)*P);else{const P=q*Math.sqrt(Y*Y-1);G=Z=>{const H=Math.exp(-Y*q*Z),I=Math.min(P*Z,300);return f-H*((N+Y*q*K)*Math.sinh(I)+P*K*Math.cosh(I))/P}}const W={calculatedDuration:M&&b||null,next:P=>{const Z=G(P);if(M)p.done=P>=b;else{let H=P===0?N:0;Y<1&&(H=P===0?yn(N):Vv(G,P,Z));const I=Math.abs(H)<=o,xt=Math.abs(f-Z)<=c;p.done=I&&xt}return p.value=p.done?f:Z,p},toString:()=>{const P=Math.min(gd(W),cl),Z=Ov(H=>W.next(P*H).value,P,30);return P+"ms "+Z},toTransition:()=>{}};return W}fl.applyToOptions=n=>{const a=v5(n,100,fl);return n.ease=a.ease,n.duration=yn(a.duration),n.type="keyframes",n};function zf({keyframes:n,velocity:a=0,power:r=.8,timeConstant:o=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:f,min:p,max:g,restDelta:m=.5,restSpeed:y}){const b=n[0],S={done:!1,value:b},M=I=>p!==void 0&&I<p||g!==void 0&&I>g,N=I=>p===void 0?g:g===void 0||Math.abs(p-I)<Math.abs(g-I)?p:g;let Y=r*a;const K=b+Y,q=f===void 0?K:f(K);q!==K&&(Y=q-b);const Q=I=>-Y*Math.exp(-I/o),G=I=>q+Q(I),W=I=>{const xt=Q(I),Bt=G(I);S.done=Math.abs(xt)<=m,S.value=S.done?q:Bt};let P,Z;const H=I=>{M(S.value)&&(P=I,Z=fl({keyframes:[S.value,N(S.value)],velocity:Vv(G,I,S.value),damping:c,stiffness:d,restDelta:m,restSpeed:y}))};return H(0),{calculatedDuration:null,next:I=>{let xt=!1;return!Z&&P===void 0&&(xt=!0,W(I),H(I)),P!==void 0&&I>=P?Z.next(I-P):(!xt&&W(I),S)}}}function C5(n,a,r){const o=[],c=r||qn.mix||Rv,d=n.length-1;for(let f=0;f<d;f++){let p=c(n[f],n[f+1]);if(a){const g=Array.isArray(a)?a[f]||De:a;p=hr(g,p)}o.push(p)}return o}function yd(n,a,{clamp:r=!0,ease:o,mixer:c}={}){const d=n.length;if(sr(d===a.length),d===1)return()=>a[0];if(d===2&&a[0]===a[1])return()=>a[1];const f=n[0]===n[1];n[0]>n[d-1]&&(n=[...n].reverse(),a=[...a].reverse());const p=C5(a,o,c),g=p.length,m=y=>{if(f&&y<n[0])return a[0];let b=0;if(g>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const S=Ka(n[b],n[b+1],y);return p[b](S)};return r?y=>m(bn(n[0],n[d-1],y)):m}function M5(n,a){const r=n[n.length-1];for(let o=1;o<=a;o++){const c=Ka(0,a,o);n.push(Lt(r,1,c))}}function _v(n){const a=[0];return M5(a,n.length-1),a}function D5(n,a){return n.map(r=>r*a)}function z5(n,a){return n.map(()=>a||Sv).splice(0,n.length-1)}function tr({duration:n=300,keyframes:a,times:r,ease:o="easeInOut"}){const c=Y2(o)?o.map(o0):o0(o),d={done:!1,value:a[0]},f=D5(r&&r.length===a.length?r:_v(a),n),p=yd(f,a,{ease:Array.isArray(c)?c:z5(a,c)});return{calculatedDuration:n,next:g=>(d.value=p(g),d.done=g>=n,d)}}const j5=n=>n!==null;function vd(n,{repeat:a,repeatType:r="loop"},o,c=1){const d=n.filter(j5),p=c<0||a&&r!=="loop"&&a%2===1?0:d.length-1;return!p||o===void 0?d[p]:o}const R5={decay:zf,inertia:zf,tween:tr,keyframes:tr,spring:fl};function kv(n){typeof n.type=="string"&&(n.type=R5[n.type])}class bd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,r){return this.finished.then(a,r)}}const O5=n=>n/100;class Al extends bd{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==Me.now()&&this.tick(Me.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;kv(a);const{type:r=tr,repeat:o=0,repeatDelay:c=0,repeatType:d,velocity:f=0}=a;let{keyframes:p}=a;const g=r||tr;g!==tr&&typeof p[0]!="number"&&(this.mixKeyframes=hr(O5,Rv(p[0],p[1])),p=[0,100]);const m=g({...a,keyframes:p});d==="mirror"&&(this.mirroredGenerator=g({...a,keyframes:[...p].reverse(),velocity:-f})),m.calculatedDuration===null&&(m.calculatedDuration=gd(m));const{calculatedDuration:y}=m;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(o+1)-c,this.generator=m}updateTime(a){const r=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(a,r=!1){const{generator:o,totalDuration:c,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:g}=this;if(this.startTime===null)return o.next(0);const{delay:m=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:M,type:N,onUpdate:Y,finalKeyframe:K}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-c/this.speed,this.startTime)),r?this.currentTime=a:this.updateTime(a);const q=this.currentTime-m*(this.playbackSpeed>=0?1:-1),Q=this.playbackSpeed>=0?q<0:q>c;this.currentTime=Math.max(q,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let G=this.currentTime,W=o;if(b){const I=Math.min(this.currentTime,c)/p;let xt=Math.floor(I),Bt=I%1;!Bt&&I>=1&&(Bt=1),Bt===1&&xt--,xt=Math.min(xt,b+1),!!(xt%2)&&(S==="reverse"?(Bt=1-Bt,M&&(Bt-=M/p)):S==="mirror"&&(W=f)),G=bn(0,1,Bt)*p}const P=Q?{done:!1,value:y[0]}:W.next(G);d&&(P.value=d(P.value));let{done:Z}=P;!Q&&g!==null&&(Z=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const H=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Z);return H&&N!==zf&&(P.value=vd(y,this.options,K,this.speed)),Y&&Y(P.value),H&&this.finish(),P}then(a,r){return this.finished.then(a,r)}get duration(){return Fe(this.calculatedDuration)}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+Fe(a)}get time(){return Fe(this.currentTime)}set time(a){a=yn(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(Me.now());const r=this.playbackSpeed!==a;this.playbackSpeed=a,r&&(this.time=Fe(this.currentTime))}play(){if(this.isStopped)return;const{driver:a=y5,startTime:r}=this.options;this.driver||(this.driver=a(c=>this.tick(c))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=r??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Me.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),a.observe(this)}}function V5(n){for(let a=1;a<n.length;a++)n[a]??(n[a]=n[a-1])}const Xi=n=>n*180/Math.PI,jf=n=>{const a=Xi(Math.atan2(n[1],n[0]));return Rf(a)},_5={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:jf,rotateZ:jf,skewX:n=>Xi(Math.atan(n[1])),skewY:n=>Xi(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Rf=n=>(n=n%360,n<0&&(n+=360),n),h0=jf,p0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),m0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),k5={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:p0,scaleY:m0,scale:n=>(p0(n)+m0(n))/2,rotateX:n=>Rf(Xi(Math.atan2(n[6],n[5]))),rotateY:n=>Rf(Xi(Math.atan2(-n[2],n[0]))),rotateZ:h0,rotate:h0,skewX:n=>Xi(Math.atan(n[4])),skewY:n=>Xi(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Of(n){return n.includes("scale")?1:0}function Vf(n,a){if(!n||n==="none")return Of(a);const r=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,c;if(r)o=k5,c=r;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=_5,c=p}if(!c)return Of(a);const d=o[a],f=c[1].split(",").map(N5);return typeof d=="function"?d(f):f[d]}const B5=(n,a)=>{const{transform:r="none"}=getComputedStyle(n);return Vf(r,a)};function N5(n){return parseFloat(n.trim())}const Fa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ia=new Set(Fa),g0=n=>n===Wa||n===st,L5=new Set(["x","y","z"]),U5=Fa.filter(n=>!L5.has(n));function H5(n){const a=[];return U5.forEach(r=>{const o=n.getValue(r);o!==void 0&&(a.push([r,o.get()]),o.set(r.startsWith("scale")?1:0))}),a}const Qi={width:({x:n},{paddingLeft:a="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(a)-parseFloat(r),height:({y:n},{paddingTop:a="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(a)-parseFloat(r),top:(n,{top:a})=>parseFloat(a),left:(n,{left:a})=>parseFloat(a),bottom:({y:n},{top:a})=>parseFloat(a)+(n.max-n.min),right:({x:n},{left:a})=>parseFloat(a)+(n.max-n.min),x:(n,{transform:a})=>Vf(a,"x"),y:(n,{transform:a})=>Vf(a,"y")};Qi.translateX=Qi.x;Qi.translateY=Qi.y;const Ki=new Set;let _f=!1,kf=!1,Bf=!1;function Bv(){if(kf){const n=Array.from(Ki).filter(o=>o.needsMeasurement),a=new Set(n.map(o=>o.element)),r=new Map;a.forEach(o=>{const c=H5(o);c.length&&(r.set(o,c),o.render())}),n.forEach(o=>o.measureInitialState()),a.forEach(o=>{o.render();const c=r.get(o);c&&c.forEach(([d,f])=>{o.getValue(d)?.set(f)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}kf=!1,_f=!1,Ki.forEach(n=>n.complete(Bf)),Ki.clear()}function Nv(){Ki.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(kf=!0)})}function G5(){Bf=!0,Nv(),Bv(),Bf=!1}class xd{constructor(a,r,o,c,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=r,this.name=o,this.motionValue=c,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Ki.add(this),_f||(_f=!0,Et.read(Nv),Et.resolveKeyframes(Bv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:r,element:o,motionValue:c}=this;if(a[0]===null){const d=c?.get(),f=a[a.length-1];if(d!==void 0)a[0]=d;else if(o&&r){const p=o.readValue(r,f);p!=null&&(a[0]=p)}a[0]===void 0&&(a[0]=f),c&&d===void 0&&c.set(a[0])}V5(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),Ki.delete(this)}cancel(){this.state==="scheduled"&&(Ki.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Y5=n=>n.startsWith("--");function q5(n,a,r){Y5(a)?n.style.setProperty(a,r):n.style[a]=r}const Lv=rd(()=>window.ScrollTimeline!==void 0),X5={};function $5(n,a){const r=rd(n);return()=>X5[a]??r()}const Uv=$5(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ws=([n,a,r,o])=>`cubic-bezier(${n}, ${a}, ${r}, ${o})`,y0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ws([0,.65,.55,1]),circOut:Ws([.55,0,1,.45]),backIn:Ws([.31,.01,.66,-.59]),backOut:Ws([.33,1.53,.69,.99])};function Hv(n,a){if(n)return typeof n=="function"?Uv()?Ov(n,a):"ease-out":Tv(n)?Ws(n):Array.isArray(n)?n.map(r=>Hv(r,a)||y0.easeOut):y0[n]}function Q5(n,a,r,{delay:o=0,duration:c=300,repeat:d=0,repeatType:f="loop",ease:p="easeOut",times:g}={},m=void 0){const y={[a]:r};g&&(y.offset=g);const b=Hv(p,c);Array.isArray(b)&&(y.easing=b);const S={delay:o,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return m&&(S.pseudoElement=m),n.animate(y,S)}function Gv(n){return typeof n=="function"&&"applyToOptions"in n}function K5({type:n,...a}){return Gv(n)&&Uv()?n.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class Z5 extends bd{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,!a)return;const{element:r,name:o,keyframes:c,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:p,onComplete:g}=a;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=a,sr(typeof a.type!="string");const m=K5(a);this.animation=Q5(r,o,c,m,d),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=vd(c,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):q5(r,o,y),this.animation.cancel()}g?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const a=this.animation.effect?.getComputedTiming?.().duration||0;return Fe(Number(a))}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+Fe(a)}get time(){return Fe(Number(this.animation.currentTime)||0)}set time(a){this.finishedTime=null,this.animation.currentTime=yn(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(a){this.animation.startTime=a}attachTimeline({timeline:a,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,a&&Lv()?(this.animation.timeline=a,De):r(this)}}const Yv={anticipate:vv,backInOut:yv,circInOut:xv};function P5(n){return n in Yv}function J5(n){typeof n.ease=="string"&&P5(n.ease)&&(n.ease=Yv[n.ease])}const v0=10;class W5 extends Z5{constructor(a){J5(a),kv(a),super(a),a.startTime&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:r,onUpdate:o,onComplete:c,element:d,...f}=this.options;if(!r)return;if(a!==void 0){r.set(a);return}const p=new Al({...f,autoplay:!1}),g=yn(this.finishedTime??this.time);r.setWithVelocity(p.sample(g-v0).value,p.sample(g).value,v0),p.stop()}}const b0=(n,a)=>a==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(vi.test(n)||n==="0")&&!n.startsWith("url("));function F5(n){const a=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==a)return!0}function I5(n,a,r,o){const c=n[0];if(c===null)return!1;if(a==="display"||a==="visibility")return!0;const d=n[n.length-1],f=b0(c,a),p=b0(d,a);return!f||!p?!1:F5(n)||(r==="spring"||Gv(r))&&o}function Nf(n){n.duration=0,n.type="keyframes"}const tT=new Set(["opacity","clipPath","filter","transform"]),eT=rd(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function nT(n){const{motionValue:a,name:r,repeatDelay:o,repeatType:c,damping:d,type:f}=n;if(!(a?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:m}=a.owner.getProps();return eT()&&r&&tT.has(r)&&(r!=="transform"||!m)&&!g&&!o&&c!=="mirror"&&d!==0&&f!=="inertia"}const iT=40;class aT extends bd{constructor({autoplay:a=!0,delay:r=0,type:o="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:f="loop",keyframes:p,name:g,motionValue:m,element:y,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Me.now();const S={autoplay:a,delay:r,type:o,repeat:c,repeatDelay:d,repeatType:f,name:g,motionValue:m,element:y,...b},M=y?.KeyframeResolver||xd;this.keyframeResolver=new M(p,(N,Y,K)=>this.onKeyframesResolved(N,Y,S,!K),g,m,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(a,r,o,c){this.keyframeResolver=void 0;const{name:d,type:f,velocity:p,delay:g,isHandoff:m,onUpdate:y}=o;this.resolvedAt=Me.now(),I5(a,d,f,p)||((qn.instantAnimations||!g)&&y?.(vd(a,o,r)),a[0]=a[a.length-1],Nf(o),o.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>iT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...o,keyframes:a},M=!m&&nT(S)?new W5({...S,element:S.motionValue.owner.current}):new Al(S);M.finished.then(()=>this.notifyFinished()).catch(De),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(a,r){return this.finished.finally(a).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),G5()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const sT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function rT(n){const a=sT.exec(n);if(!a)return[,];const[,r,o,c]=a;return[`--${r??o}`,c]}function qv(n,a,r=1){const[o,c]=rT(n);if(!o)return;const d=window.getComputedStyle(a).getPropertyValue(o);if(d){const f=d.trim();return cv(f)?parseFloat(f):f}return dd(c)?qv(c,a,r+1):c}function Sd(n,a){return n?.[a]??n?.default??n}const Xv=new Set(["width","height","top","left","right","bottom",...Fa]),oT={test:n=>n==="auto",parse:n=>n},$v=n=>a=>a.test(n),Qv=[Wa,st,vn,gi,e5,t5,oT],x0=n=>Qv.find($v(n));function lT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||dv(n):!0}const uT=new Set(["brightness","contrast","saturate","opacity"]);function cT(n){const[a,r]=n.slice(0,-1).split("(");if(a==="drop-shadow")return n;const[o]=r.match(hd)||[];if(!o)return n;const c=r.replace(o,"");let d=uT.has(a)?1:0;return o!==r&&(d*=100),a+"("+d+c+")"}const fT=/\b([a-z-]*)\(.*?\)/gu,Lf={...vi,getAnimatableNone:n=>{const a=n.match(fT);return a?a.map(cT).join(" "):n}},S0={...Wa,transform:Math.round},dT={rotate:gi,rotateX:gi,rotateY:gi,rotateZ:gi,scale:Uo,scaleX:Uo,scaleY:Uo,scaleZ:Uo,skew:gi,skewX:gi,skewY:gi,distance:st,translateX:st,translateY:st,translateZ:st,x:st,y:st,z:st,perspective:st,transformPerspective:st,opacity:rr,originX:l0,originY:l0,originZ:st},Td={borderWidth:st,borderTopWidth:st,borderRightWidth:st,borderBottomWidth:st,borderLeftWidth:st,borderRadius:st,radius:st,borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomRightRadius:st,borderBottomLeftRadius:st,width:st,maxWidth:st,height:st,maxHeight:st,top:st,right:st,bottom:st,left:st,padding:st,paddingTop:st,paddingRight:st,paddingBottom:st,paddingLeft:st,margin:st,marginTop:st,marginRight:st,marginBottom:st,marginLeft:st,backgroundPositionX:st,backgroundPositionY:st,...dT,zIndex:S0,fillOpacity:rr,strokeOpacity:rr,numOctaves:S0},hT={...Td,color:Jt,backgroundColor:Jt,outlineColor:Jt,fill:Jt,stroke:Jt,borderColor:Jt,borderTopColor:Jt,borderRightColor:Jt,borderBottomColor:Jt,borderLeftColor:Jt,filter:Lf,WebkitFilter:Lf},Kv=n=>hT[n];function Zv(n,a){let r=Kv(n);return r!==Lf&&(r=vi),r.getAnimatableNone?r.getAnimatableNone(a):void 0}const pT=new Set(["auto","none","0"]);function mT(n,a,r){let o=0,c;for(;o<n.length&&!c;){const d=n[o];typeof d=="string"&&!pT.has(d)&&or(d).values.length&&(c=n[o]),o++}if(c&&r)for(const d of a)n[d]=Zv(r,c)}class gT extends xd{constructor(a,r,o,c,d){super(a,r,o,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:r,name:o}=this;if(!r||!r.current)return;super.readKeyframes();for(let g=0;g<a.length;g++){let m=a[g];if(typeof m=="string"&&(m=m.trim(),dd(m))){const y=qv(m,r.current);y!==void 0&&(a[g]=y),g===a.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!Xv.has(o)||a.length!==2)return;const[c,d]=a,f=x0(c),p=x0(d);if(f!==p)if(g0(f)&&g0(p))for(let g=0;g<a.length;g++){const m=a[g];typeof m=="string"&&(a[g]=parseFloat(m))}else Qi[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:r}=this,o=[];for(let c=0;c<a.length;c++)(a[c]===null||lT(a[c]))&&o.push(c);o.length&&mT(a,o,r)}measureInitialState(){const{element:a,unresolvedKeyframes:r,name:o}=this;if(!a||!a.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qi[o](a.measureViewportBox(),window.getComputedStyle(a.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&a.getValue(o,c).jump(c,!1)}measureEndState(){const{element:a,name:r,unresolvedKeyframes:o}=this;if(!a||!a.current)return;const c=a.getValue(r);c&&c.jump(this.measuredOrigin,!1);const d=o.length-1,f=o[d];o[d]=Qi[r](a.measureViewportBox(),window.getComputedStyle(a.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,g])=>{a.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function Ad(n,a,r){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const c=document.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n)}const Pv=(n,a)=>a&&typeof n=="number"?a.transform(n):n;function wd(n){return fv(n)&&"offsetHeight"in n}const T0=30,yT=n=>!isNaN(parseFloat(n)),er={current:void 0};class vT{constructor(a,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const c=Me.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(a),this.owner=r.owner}setCurrent(a){this.current=a,this.updatedAt=Me.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=yT(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,r){this.events[a]||(this.events[a]=new od);const o=this.events[a].add(r);return a==="change"?()=>{o(),Et.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,r){this.passiveEffect=a,this.stopPassiveEffect=r}set(a){this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)}setWithVelocity(a,r,o){this.set(r),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-o}jump(a,r=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return er.current&&er.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const a=Me.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>T0)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,T0);return ld(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(a){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=a(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ln(n,a){return new vT(n,a)}const{schedule:Ed}=Av(queueMicrotask,!1),on={x:!1,y:!1};function Jv(){return on.x||on.y}function bT(n){return n==="x"||n==="y"?on[n]?null:(on[n]=!0,()=>{on[n]=!1}):on.x||on.y?null:(on.x=on.y=!0,()=>{on.x=on.y=!1})}function Wv(n,a){const r=Ad(n),o=new AbortController,c={passive:!0,...a,signal:o.signal};return[r,c,()=>o.abort()]}function A0(n){return!(n.pointerType==="touch"||Jv())}function xT(n,a,r={}){const[o,c,d]=Wv(n,r),f=p=>{if(!A0(p))return;const{target:g}=p,m=a(g,p);if(typeof m!="function"||!g)return;const y=b=>{A0(b)&&(m(b),g.removeEventListener("pointerleave",y))};g.addEventListener("pointerleave",y,c)};return o.forEach(p=>{p.addEventListener("pointerenter",f,c)}),d}const Fv=(n,a)=>a?n===a?!0:Fv(n,a.parentElement):!1,Cd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,ST=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function TT(n){return ST.has(n.tagName)||n.tabIndex!==-1}const Wo=new WeakSet;function w0(n){return a=>{a.key==="Enter"&&n(a)}}function rf(n,a){n.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const AT=(n,a)=>{const r=n.currentTarget;if(!r)return;const o=w0(()=>{if(Wo.has(r))return;rf(r,"down");const c=w0(()=>{rf(r,"up")}),d=()=>rf(r,"cancel");r.addEventListener("keyup",c,a),r.addEventListener("blur",d,a)});r.addEventListener("keydown",o,a),r.addEventListener("blur",()=>r.removeEventListener("keydown",o),a)};function E0(n){return Cd(n)&&!Jv()}function wT(n,a,r={}){const[o,c,d]=Wv(n,r),f=p=>{const g=p.currentTarget;if(!E0(p))return;Wo.add(g);const m=a(g,p),y=(M,N)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),Wo.has(g)&&Wo.delete(g),E0(M)&&typeof m=="function"&&m(M,{success:N})},b=M=>{y(M,g===window||g===document||r.useGlobalTarget||Fv(g,M.target))},S=M=>{y(M,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",S,c)};return o.forEach(p=>{(r.useGlobalTarget?window:p).addEventListener("pointerdown",f,c),wd(p)&&(p.addEventListener("focus",m=>AT(m,c)),!TT(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),d}function Md(n){return fv(n)&&"ownerSVGElement"in n}const Fo=new WeakMap;let Io;const Iv=(n,a,r)=>(o,c)=>c&&c[0]?c[0][n+"Size"]:Md(o)&&"getBBox"in o?o.getBBox()[a]:o[r],ET=Iv("inline","width","offsetWidth"),CT=Iv("block","height","offsetHeight");function MT({target:n,borderBoxSize:a}){Fo.get(n)?.forEach(r=>{r(n,{get width(){return ET(n,a)},get height(){return CT(n,a)}})})}function DT(n){n.forEach(MT)}function zT(){typeof ResizeObserver>"u"||(Io=new ResizeObserver(DT))}function jT(n,a){Io||zT();const r=Ad(n);return r.forEach(o=>{let c=Fo.get(o);c||(c=new Set,Fo.set(o,c)),c.add(a),Io?.observe(o)}),()=>{r.forEach(o=>{const c=Fo.get(o);c?.delete(a),c?.size||Io?.unobserve(o)})}}const tl=new Set;let ka;function RT(){ka=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};tl.forEach(a=>a(n))},window.addEventListener("resize",ka)}function OT(n){return tl.add(n),ka||RT(),()=>{tl.delete(n),!tl.size&&typeof ka=="function"&&(window.removeEventListener("resize",ka),ka=void 0)}}function VT(n,a){return typeof n=="function"?OT(n):jT(n,a)}function t1(n,a){let r;const o=()=>{const{currentTime:c}=a,f=(c===null?0:c.value)/100;r!==f&&n(f),r=f};return Et.preUpdate(o,!0),()=>fn(o)}function _T(n){return Md(n)&&n.tagName==="svg"}function kT(...n){const a=!Array.isArray(n[0]),r=a?0:-1,o=n[0+r],c=n[1+r],d=n[2+r],f=n[3+r],p=yd(c,d,f);return a?p(o):p}const re=n=>!!(n&&n.getVelocity);function BT(n,a,r){const o=n.get();let c=null,d=o,f;const p=typeof o=="string"?o.replace(/[\d.-]/g,""):void 0,g=()=>{c&&(c.stop(),c=null)},m=()=>{g(),c=new Al({keyframes:[M0(n.get()),M0(d)],velocity:n.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...r,onUpdate:f})};if(n.attach((y,b)=>{d=y,f=S=>b(C0(S,p)),Et.postRender(m)},g),re(a)){const y=a.on("change",S=>n.set(C0(S,p))),b=n.on("destroy",y);return()=>{y(),b()}}return g}function C0(n,a){return a?n+a:n}function M0(n){return typeof n=="number"?n:parseFloat(n)}const NT=[...Qv,Jt,vi],LT=n=>NT.find($v(n)),gr=X.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function D0(n,a){if(typeof n=="function")return n(a);n!=null&&(n.current=a)}function UT(...n){return a=>{let r=!1;const o=n.map(c=>{const d=D0(c,a);return!r&&typeof d=="function"&&(r=!0),d});if(r)return()=>{for(let c=0;c<o.length;c++){const d=o[c];typeof d=="function"?d():D0(n[c],null)}}}}function HT(...n){return X.useCallback(UT(...n),n)}class GT extends X.Component{getSnapshotBeforeUpdate(a){const r=this.props.childRef.current;if(r&&a.isPresent&&!this.props.isPresent){const o=r.offsetParent,c=wd(o)&&o.offsetWidth||0,d=this.props.sizeRef.current;d.height=r.offsetHeight||0,d.width=r.offsetWidth||0,d.top=r.offsetTop,d.left=r.offsetLeft,d.right=c-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function YT({children:n,isPresent:a,anchorX:r,root:o}){const c=X.useId(),d=X.useRef(null),f=X.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=X.useContext(gr),g=HT(d,n?.ref);return X.useInsertionEffect(()=>{const{width:m,height:y,top:b,left:S,right:M}=f.current;if(a||!d.current||!m||!y)return;const N=r==="left"?`left: ${S}`:`right: ${M}`;d.current.dataset.motionPopId=c;const Y=document.createElement("style");p&&(Y.nonce=p);const K=o??document.head;return K.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${y}px !important;
            ${N}px !important;
            top: ${b}px !important;
          }
        `),()=>{K.contains(Y)&&K.removeChild(Y)}},[a]),x.jsx(GT,{isPresent:a,childRef:d,sizeRef:f,children:X.cloneElement(n,{ref:g})})}const qT=({children:n,initial:a,isPresent:r,onExitComplete:o,custom:c,presenceAffectsLayout:d,mode:f,anchorX:p,root:g})=>{const m=Ja(XT),y=X.useId();let b=!0,S=X.useMemo(()=>(b=!1,{id:y,initial:a,isPresent:r,custom:c,onExitComplete:M=>{m.set(M,!0);for(const N of m.values())if(!N)return;o&&o()},register:M=>(m.set(M,!1),()=>m.delete(M))}),[r,m,o]);return d&&b&&(S={...S}),X.useMemo(()=>{m.forEach((M,N)=>m.set(N,!1))},[r]),X.useEffect(()=>{!r&&!m.size&&o&&o()},[r]),f==="popLayout"&&(n=x.jsx(YT,{isPresent:r,anchorX:p,root:g,children:n})),x.jsx(Tl.Provider,{value:S,children:n})};function XT(){return new Map}function e1(n=!0){const a=X.useContext(Tl);if(a===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:c}=a,d=X.useId();X.useEffect(()=>{if(n)return c(d)},[n]);const f=X.useCallback(()=>n&&o&&o(d),[d,o,n]);return!r&&o?[!1,f]:[!0]}const Ho=n=>n.key||"";function z0(n){const a=[];return X.Children.forEach(n,r=>{X.isValidElement(r)&&a.push(r)}),a}const lr=({children:n,custom:a,initial:r=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:d="sync",propagate:f=!1,anchorX:p="left",root:g})=>{const[m,y]=e1(f),b=X.useMemo(()=>z0(n),[n]),S=f&&!m?[]:b.map(Ho),M=X.useRef(!0),N=X.useRef(b),Y=Ja(()=>new Map),[K,q]=X.useState(b),[Q,G]=X.useState(b);Sl(()=>{M.current=!1,N.current=b;for(let Z=0;Z<Q.length;Z++){const H=Ho(Q[Z]);S.includes(H)?Y.delete(H):Y.get(H)!==!0&&Y.set(H,!1)}},[Q,S.length,S.join("-")]);const W=[];if(b!==K){let Z=[...b];for(let H=0;H<Q.length;H++){const I=Q[H],xt=Ho(I);S.includes(xt)||(Z.splice(H,0,I),W.push(I))}return d==="wait"&&W.length&&(Z=W),G(z0(Z)),q(b),null}const{forceRender:P}=X.useContext(nd);return x.jsx(x.Fragment,{children:Q.map(Z=>{const H=Ho(Z),I=f&&!m?!1:b===Q||S.includes(H),xt=()=>{if(Y.has(H))Y.set(H,!0);else return;let Bt=!0;Y.forEach(Yt=>{Yt||(Bt=!1)}),Bt&&(P?.(),G(N.current),f&&y?.(),o&&o())};return x.jsx(qT,{isPresent:I,initial:!M.current||r?void 0:!1,custom:a,presenceAffectsLayout:c,mode:d,root:g,onExitComplete:I?void 0:xt,anchorX:p,children:Z},H)})})},n1=X.createContext({strict:!1}),j0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Za={};for(const n in j0)Za[n]={isEnabled:a=>j0[n].some(r=>!!a[r])};function $T(n){for(const a in n)Za[a]={...Za[a],...n[a]}}const QT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function dl(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||QT.has(n)}let i1=n=>!dl(n);function KT(n){typeof n=="function"&&(i1=a=>a.startsWith("on")?!dl(a):n(a))}try{KT(require("@emotion/is-prop-valid").default)}catch{}function ZT(n,a,r){const o={};for(const c in n)c==="values"&&typeof n.values=="object"||(i1(c)||r===!0&&dl(c)||!a&&!dl(c)||n.draggable&&c.startsWith("onDrag"))&&(o[c]=n[c]);return o}const wl=X.createContext({});function El(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ur(n){return typeof n=="string"||Array.isArray(n)}const Dd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],zd=["initial",...Dd];function Cl(n){return El(n.animate)||zd.some(a=>ur(n[a]))}function a1(n){return!!(Cl(n)||n.variants)}function PT(n,a){if(Cl(n)){const{initial:r,animate:o}=n;return{initial:r===!1||ur(r)?r:void 0,animate:ur(o)?o:void 0}}return n.inherit!==!1?a:{}}function JT(n){const{initial:a,animate:r}=PT(n,X.useContext(wl));return X.useMemo(()=>({initial:a,animate:r}),[R0(a),R0(r)])}function R0(n){return Array.isArray(n)?n.join(" "):n}const cr={};function WT(n){for(const a in n)cr[a]=n[a],fd(a)&&(cr[a].isCSSVariable=!0)}function s1(n,{layout:a,layoutId:r}){return Ia.has(n)||n.startsWith("origin")||(a||r!==void 0)&&(!!cr[n]||n==="opacity")}const FT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},IT=Fa.length;function t4(n,a,r){let o="",c=!0;for(let d=0;d<IT;d++){const f=Fa[d],p=n[f];if(p===void 0)continue;let g=!0;if(typeof p=="number"?g=p===(f.startsWith("scale")?1:0):g=parseFloat(p)===0,!g||r){const m=Pv(p,Td[f]);if(!g){c=!1;const y=FT[f]||f;o+=`${y}(${m}) `}r&&(a[f]=m)}}return o=o.trim(),r?o=r(a,c?"":o):c&&(o="none"),o}function jd(n,a,r){const{style:o,vars:c,transformOrigin:d}=n;let f=!1,p=!1;for(const g in a){const m=a[g];if(Ia.has(g)){f=!0;continue}else if(fd(g)){c[g]=m;continue}else{const y=Pv(m,Td[g]);g.startsWith("origin")?(p=!0,d[g]=y):o[g]=y}}if(a.transform||(f||r?o.transform=t4(a,n.transform,r):o.transform&&(o.transform="none")),p){const{originX:g="50%",originY:m="50%",originZ:y=0}=d;o.transformOrigin=`${g} ${m} ${y}`}}const Rd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function r1(n,a,r){for(const o in a)!re(a[o])&&!s1(o,r)&&(n[o]=a[o])}function e4({transformTemplate:n},a){return X.useMemo(()=>{const r=Rd();return jd(r,a,n),Object.assign({},r.vars,r.style)},[a])}function n4(n,a){const r=n.style||{},o={};return r1(o,r,n),Object.assign(o,e4(n,a)),o}function i4(n,a){const r={},o=n4(n,a);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=o,r}const a4={offset:"stroke-dashoffset",array:"stroke-dasharray"},s4={offset:"strokeDashoffset",array:"strokeDasharray"};function r4(n,a,r=1,o=0,c=!0){n.pathLength=1;const d=c?a4:s4;n[d.offset]=st.transform(-o);const f=st.transform(a),p=st.transform(r);n[d.array]=`${f} ${p}`}function o1(n,{attrX:a,attrY:r,attrScale:o,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...p},g,m,y){if(jd(n,p,m),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:S}=n;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=y?.transformBox??"fill-box",delete b.transformBox),a!==void 0&&(b.x=a),r!==void 0&&(b.y=r),o!==void 0&&(b.scale=o),c!==void 0&&r4(b,c,d,f,!1)}const l1=()=>({...Rd(),attrs:{}}),u1=n=>typeof n=="string"&&n.toLowerCase()==="svg";function o4(n,a,r,o){const c=X.useMemo(()=>{const d=l1();return o1(d,a,u1(o),n.transformTemplate,n.style),{...d.attrs,style:{...d.style}}},[a]);if(n.style){const d={};r1(d,n.style,n),c.style={...d,...c.style}}return c}const l4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Od(n){return typeof n!="string"||n.includes("-")?!1:!!(l4.indexOf(n)>-1||/[A-Z]/u.test(n))}function u4(n,a,r,{latestValues:o},c,d=!1){const p=(Od(n)?o4:i4)(a,o,c,n),g=ZT(a,typeof n=="string",d),m=n!==X.Fragment?{...g,...p,ref:r}:{},{children:y}=a,b=X.useMemo(()=>re(y)?y.get():y,[y]);return X.createElement(n,{...m,children:b})}function O0(n){const a=[{},{}];return n?.values.forEach((r,o)=>{a[0][o]=r.get(),a[1][o]=r.getVelocity()}),a}function Vd(n,a,r,o){if(typeof a=="function"){const[c,d]=O0(o);a=a(r!==void 0?r:n.custom,c,d)}if(typeof a=="string"&&(a=n.variants&&n.variants[a]),typeof a=="function"){const[c,d]=O0(o);a=a(r!==void 0?r:n.custom,c,d)}return a}function el(n){return re(n)?n.get():n}function c4({scrapeMotionValuesFromProps:n,createRenderState:a},r,o,c){return{latestValues:f4(r,o,c,n),renderState:a()}}function f4(n,a,r,o){const c={},d=o(n,{});for(const S in d)c[S]=el(d[S]);let{initial:f,animate:p}=n;const g=Cl(n),m=a1(n);a&&m&&!g&&n.inherit!==!1&&(f===void 0&&(f=a.initial),p===void 0&&(p=a.animate));let y=r?r.initial===!1:!1;y=y||f===!1;const b=y?p:f;if(b&&typeof b!="boolean"&&!El(b)){const S=Array.isArray(b)?b:[b];for(let M=0;M<S.length;M++){const N=Vd(n,S[M]);if(N){const{transitionEnd:Y,transition:K,...q}=N;for(const Q in q){let G=q[Q];if(Array.isArray(G)){const W=y?G.length-1:0;G=G[W]}G!==null&&(c[Q]=G)}for(const Q in Y)c[Q]=Y[Q]}}}return c}const c1=n=>(a,r)=>{const o=X.useContext(wl),c=X.useContext(Tl),d=()=>c4(n,a,o,c);return r?d():Ja(d)};function _d(n,a,r){const{style:o}=n,c={};for(const d in o)(re(o[d])||a.style&&re(a.style[d])||s1(d,n)||r?.getValue(d)?.liveStyle!==void 0)&&(c[d]=o[d]);return c}const d4=c1({scrapeMotionValuesFromProps:_d,createRenderState:Rd});function f1(n,a,r){const o=_d(n,a,r);for(const c in n)if(re(n[c])||re(a[c])){const d=Fa.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;o[d]=n[c]}return o}const h4=c1({scrapeMotionValuesFromProps:f1,createRenderState:l1}),p4=Symbol.for("motionComponentSymbol");function Ba(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function m4(n,a,r){return X.useCallback(o=>{o&&n.onMount&&n.onMount(o),a&&(o?a.mount(o):a.unmount()),r&&(typeof r=="function"?r(o):Ba(r)&&(r.current=o))},[a])}const kd=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),g4="framerAppearId",d1="data-"+kd(g4),h1=X.createContext({});function y4(n,a,r,o,c){const{visualElement:d}=X.useContext(wl),f=X.useContext(n1),p=X.useContext(Tl),g=X.useContext(gr).reducedMotion,m=X.useRef(null);o=o||f.renderer,!m.current&&o&&(m.current=o(n,{visualState:a,parent:d,props:r,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g}));const y=m.current,b=X.useContext(h1);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&v4(m.current,r,c,b);const S=X.useRef(!1);X.useInsertionEffect(()=>{y&&S.current&&y.update(r,p)});const M=r[d1],N=X.useRef(!!M&&!window.MotionHandoffIsComplete?.(M)&&window.MotionHasOptimisedAnimation?.(M));return Sl(()=>{y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),N.current&&y.animationState&&y.animationState.animateChanges())}),X.useEffect(()=>{y&&(!N.current&&y.animationState&&y.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(M)}),N.current=!1),y.enteringChildren=void 0)}),y}function v4(n,a,r,o){const{layoutId:c,layout:d,drag:f,dragConstraints:p,layoutScroll:g,layoutRoot:m,layoutCrossfade:y}=a;n.projection=new r(n.latestValues,a["data-framer-portal-id"]?void 0:p1(n.parent)),n.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!f||p&&Ba(p),visualElement:n,animationType:typeof d=="string"?d:"both",initialPromotionConfig:o,crossfade:y,layoutScroll:g,layoutRoot:m})}function p1(n){if(n)return n.options.allowProjection!==!1?n.projection:p1(n.parent)}function of(n,{forwardMotionProps:a=!1}={},r,o){r&&$T(r);const c=Od(n)?h4:d4;function d(p,g){let m;const y={...X.useContext(gr),...p,layoutId:b4(p)},{isStatic:b}=y,S=JT(p),M=c(p,b);if(!b&&id){x4();const N=S4(y);m=N.MeasureLayout,S.visualElement=y4(n,M,y,o,N.ProjectionNode)}return x.jsxs(wl.Provider,{value:S,children:[m&&S.visualElement?x.jsx(m,{visualElement:S.visualElement,...y}):null,u4(n,p,m4(M,S.visualElement,g),M,b,a)]})}d.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const f=X.forwardRef(d);return f[p4]=n,f}function b4({layoutId:n}){const a=X.useContext(nd).id;return a&&n!==void 0?a+"-"+n:n}function x4(n,a){X.useContext(n1).strict}function S4(n){const{drag:a,layout:r}=Za;if(!a&&!r)return{};const o={...a,...r};return{MeasureLayout:a?.isEnabled(n)||r?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function T4(n,a){if(typeof Proxy>"u")return of;const r=new Map,o=(d,f)=>of(d,f,n,a),c=(d,f)=>o(d,f);return new Proxy(c,{get:(d,f)=>f==="create"?o:(r.has(f)||r.set(f,of(f,void 0,n,a)),r.get(f))})}function m1({top:n,left:a,right:r,bottom:o}){return{x:{min:a,max:r},y:{min:n,max:o}}}function A4({x:n,y:a}){return{top:a.min,right:n.max,bottom:a.max,left:n.min}}function w4(n,a){if(!a)return n;const r=a({x:n.left,y:n.top}),o=a({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:o.y,right:o.x}}function lf(n){return n===void 0||n===1}function Uf({scale:n,scaleX:a,scaleY:r}){return!lf(n)||!lf(a)||!lf(r)}function Gi(n){return Uf(n)||g1(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function g1(n){return V0(n.x)||V0(n.y)}function V0(n){return n&&n!=="0%"}function hl(n,a,r){const o=n-r,c=a*o;return r+c}function _0(n,a,r,o,c){return c!==void 0&&(n=hl(n,c,o)),hl(n,r,o)+a}function Hf(n,a=0,r=1,o,c){n.min=_0(n.min,a,r,o,c),n.max=_0(n.max,a,r,o,c)}function y1(n,{x:a,y:r}){Hf(n.x,a.translate,a.scale,a.originPoint),Hf(n.y,r.translate,r.scale,r.originPoint)}const k0=.999999999999,B0=1.0000000000001;function E4(n,a,r,o=!1){const c=r.length;if(!c)return;a.x=a.y=1;let d,f;for(let p=0;p<c;p++){d=r[p],f=d.projectionDelta;const{visualElement:g}=d.options;g&&g.props.style&&g.props.style.display==="contents"||(o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&La(n,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(a.x*=f.x.scale,a.y*=f.y.scale,y1(n,f)),o&&Gi(d.latestValues)&&La(n,d.latestValues))}a.x<B0&&a.x>k0&&(a.x=1),a.y<B0&&a.y>k0&&(a.y=1)}function Na(n,a){n.min=n.min+a,n.max=n.max+a}function N0(n,a,r,o,c=.5){const d=Lt(n.min,n.max,c);Hf(n,a,r,d,o)}function La(n,a){N0(n.x,a.x,a.scaleX,a.scale,a.originX),N0(n.y,a.y,a.scaleY,a.scale,a.originY)}function v1(n,a){return m1(w4(n.getBoundingClientRect(),a))}function C4(n,a,r){const o=v1(n,r),{scroll:c}=a;return c&&(Na(o.x,c.offset.x),Na(o.y,c.offset.y)),o}const L0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ua=()=>({x:L0(),y:L0()}),U0=()=>({min:0,max:0}),te=()=>({x:U0(),y:U0()}),Gf={current:null},b1={current:!1};function M4(){if(b1.current=!0,!!id)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),a=()=>Gf.current=n.matches;n.addEventListener("change",a),a()}else Gf.current=!1}const D4=new WeakMap;function z4(n,a,r){for(const o in a){const c=a[o],d=r[o];if(re(c))n.addValue(o,c);else if(re(d))n.addValue(o,ln(c,{owner:n}));else if(d!==c)if(n.hasValue(o)){const f=n.getValue(o);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=n.getStaticValue(o);n.addValue(o,ln(f!==void 0?f:c,{owner:n}))}}for(const o in r)a[o]===void 0&&n.removeValue(o);return a}const H0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class j4{scrapeMotionValuesFromProps(a,r,o){return{}}constructor({parent:a,props:r,presenceContext:o,reducedMotionConfig:c,blockInitialAnimation:d,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=xd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Me.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Et.render(this.render,!1,!0))};const{latestValues:g,renderState:m}=f;this.latestValues=g,this.baseTarget={...g},this.initialValues=r.initial?{...g}:{},this.renderState=m,this.parent=a,this.props=r,this.presenceContext=o,this.depth=a?a.depth+1:0,this.reducedMotionConfig=c,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Cl(r),this.isVariantNode=a1(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(r,{},this);for(const S in b){const M=b[S];g[S]!==void 0&&re(M)&&M.set(g[S])}}mount(a){this.current=a,D4.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),b1.current||M4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gf.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),fn(this.notifyUpdate),fn(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const r=this.features[a];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(a){this.children.add(a),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(a)}removeChild(a){this.children.delete(a),this.enteringChildren&&this.enteringChildren.delete(a)}bindToMotionValue(a,r){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const o=Ia.has(a);o&&this.onBindTransform&&this.onBindTransform();const c=r.on("change",f=>{this.latestValues[a]=f,this.props.onUpdate&&Et.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,a,r)),this.valueSubscriptions.set(a,()=>{c(),d&&d(),r.owner&&r.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in Za){const r=Za[a];if(!r)continue;const{isEnabled:o,Feature:c}=r;if(!this.features[a]&&c&&o(this.props)&&(this.features[a]=new c(this)),this.features[a]){const d=this.features[a];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):te()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,r){this.latestValues[a]=r}update(a,r){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let o=0;o<H0.length;o++){const c=H0[o];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,f=a[d];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=z4(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(a),()=>r.variantChildren.delete(a)}addValue(a,r){const o=this.values.get(a);r!==o&&(o&&this.removeValue(a),this.bindToMotionValue(a,r),this.values.set(a,r),this.latestValues[a]=r.get())}removeValue(a){this.values.delete(a);const r=this.valueSubscriptions.get(a);r&&(r(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,r){if(this.props.values&&this.props.values[a])return this.props.values[a];let o=this.values.get(a);return o===void 0&&r!==void 0&&(o=ln(r===null?void 0:r,{owner:this}),this.addValue(a,o)),o}readValue(a,r){let o=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return o!=null&&(typeof o=="string"&&(cv(o)||dv(o))?o=parseFloat(o):!LT(o)&&vi.test(r)&&(o=Zv(a,r)),this.setBaseTarget(a,re(o)?o.get():o)),re(o)?o.get():o}setBaseTarget(a,r){this.baseTarget[a]=r}getBaseTarget(a){const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const d=Vd(this.props,r,this.presenceContext?.custom);d&&(o=d[a])}if(r&&o!==void 0)return o;const c=this.getBaseTargetFromProps(this.props,a);return c!==void 0&&!re(c)?c:this.initialValues[a]!==void 0&&o===void 0?void 0:this.baseTarget[a]}on(a,r){return this.events[a]||(this.events[a]=new od),this.events[a].add(r)}notify(a,...r){this.events[a]&&this.events[a].notify(...r)}scheduleRenderMicrotask(){Ed.render(this.render)}}class x1 extends j4{constructor(){super(...arguments),this.KeyframeResolver=gT}sortInstanceNodePosition(a,r){return a.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(a,r){return a.style?a.style[r]:void 0}removeValueFromRenderState(a,{vars:r,style:o}){delete r[a],delete o[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;re(a)&&(this.childSubscription=a.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function S1(n,{style:a,vars:r},o,c){const d=n.style;let f;for(f in a)d[f]=a[f];c?.applyProjectionStyles(d,o);for(f in r)d.setProperty(f,r[f])}function R4(n){return window.getComputedStyle(n)}class O4 extends x1{constructor(){super(...arguments),this.type="html",this.renderInstance=S1}readValueFromInstance(a,r){if(Ia.has(r))return this.projection?.isProjecting?Of(r):B5(a,r);{const o=R4(a),c=(fd(r)?o.getPropertyValue(r):o[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(a,{transformPagePoint:r}){return v1(a,r)}build(a,r,o){jd(a,r,o.transformTemplate)}scrapeMotionValuesFromProps(a,r,o){return _d(a,r,o)}}const T1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function V4(n,a,r,o){S1(n,a,void 0,o);for(const c in a.attrs)n.setAttribute(T1.has(c)?c:kd(c),a.attrs[c])}class _4 extends x1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=te}getBaseTargetFromProps(a,r){return a[r]}readValueFromInstance(a,r){if(Ia.has(r)){const o=Kv(r);return o&&o.default||0}return r=T1.has(r)?r:kd(r),a.getAttribute(r)}scrapeMotionValuesFromProps(a,r,o){return f1(a,r,o)}build(a,r,o){o1(a,r,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(a,r,o,c){V4(a,r,o,c)}mount(a){this.isSVGTag=u1(a.tagName),super.mount(a)}}const k4=(n,a)=>Od(n)?new _4(a):new O4(a,{allowProjection:n!==X.Fragment});function Ha(n,a,r){const o=n.getProps();return Vd(o,a,r!==void 0?r:o.custom,n)}const Yf=n=>Array.isArray(n);function B4(n,a,r){n.hasValue(a)?n.getValue(a).set(r):n.addValue(a,ln(r))}function N4(n){return Yf(n)?n[n.length-1]||0:n}function L4(n,a){const r=Ha(n,a);let{transitionEnd:o={},transition:c={},...d}=r||{};d={...d,...o};for(const f in d){const p=N4(d[f]);B4(n,f,p)}}function U4(n){return!!(re(n)&&n.add)}function qf(n,a){const r=n.getValue("willChange");if(U4(r))return r.add(a);if(!r&&qn.WillChange){const o=new qn.WillChange("auto");n.addValue("willChange",o),o.add(a)}}function A1(n){return n.props[d1]}const H4=n=>n!==null;function G4(n,{repeat:a,repeatType:r="loop"},o){const c=n.filter(H4),d=a&&r!=="loop"&&a%2===1?0:c.length-1;return c[d]}const Y4={type:"spring",stiffness:500,damping:25,restSpeed:10},q4=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),X4={type:"keyframes",duration:.8},$4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Q4=(n,{keyframes:a})=>a.length>2?X4:Ia.has(n)?n.startsWith("scale")?q4(a[1]):Y4:$4;function K4({when:n,delay:a,delayChildren:r,staggerChildren:o,staggerDirection:c,repeat:d,repeatType:f,repeatDelay:p,from:g,elapsed:m,...y}){return!!Object.keys(y).length}const Bd=(n,a,r,o={},c,d)=>f=>{const p=Sd(o,n)||{},g=p.delay||o.delay||0;let{elapsed:m=0}=o;m=m-yn(g);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:a.getVelocity(),...p,delay:-m,onUpdate:S=>{a.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:n,motionValue:a,element:d?void 0:c};K4(p)||Object.assign(y,Q4(n,y)),y.duration&&(y.duration=yn(y.duration)),y.repeatDelay&&(y.repeatDelay=yn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Nf(y),y.delay===0&&(b=!0)),(qn.instantAnimations||qn.skipAnimations)&&(b=!0,Nf(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,b&&!d&&a.get()!==void 0){const S=G4(y.keyframes,p);if(S!==void 0){Et.update(()=>{y.onUpdate(S),y.onComplete()});return}}return p.isSync?new Al(y):new aT(y)};function Z4({protectedKeys:n,needsAnimating:a},r){const o=n.hasOwnProperty(r)&&a[r]!==!0;return a[r]=!1,o}function w1(n,a,{delay:r=0,transitionOverride:o,type:c}={}){let{transition:d=n.getDefaultTransition(),transitionEnd:f,...p}=a;o&&(d=o);const g=[],m=c&&n.animationState&&n.animationState.getState()[c];for(const y in p){const b=n.getValue(y,n.latestValues[y]??null),S=p[y];if(S===void 0||m&&Z4(m,y))continue;const M={delay:r,...Sd(d||{},y)},N=b.get();if(N!==void 0&&!b.isAnimating&&!Array.isArray(S)&&S===N&&!M.velocity)continue;let Y=!1;if(window.MotionHandoffAnimation){const q=A1(n);if(q){const Q=window.MotionHandoffAnimation(q,y,Et);Q!==null&&(M.startTime=Q,Y=!0)}}qf(n,y),b.start(Bd(y,b,S,n.shouldReduceMotion&&Xv.has(y)?{type:!1}:M,n,Y));const K=b.animation;K&&g.push(K)}return f&&Promise.all(g).then(()=>{Et.update(()=>{f&&L4(n,f)})}),g}function E1(n,a,r,o=0,c=1){const d=Array.from(n).sort((m,y)=>m.sortNodePosition(y)).indexOf(a),f=n.size,p=(f-1)*o;return typeof r=="function"?r(d,f):c===1?d*o:p-d*o}function Xf(n,a,r={}){const o=Ha(n,a,r.type==="exit"?n.presenceContext?.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(c=r.transitionOverride);const d=o?()=>Promise.all(w1(n,o,r)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:b}=c;return P4(n,a,g,m,y,b,r)}:()=>Promise.resolve(),{when:p}=c;if(p){const[g,m]=p==="beforeChildren"?[d,f]:[f,d];return g().then(()=>m())}else return Promise.all([d(),f(r.delay)])}function P4(n,a,r=0,o=0,c=0,d=1,f){const p=[];for(const g of n.variantChildren)g.notify("AnimationStart",a),p.push(Xf(g,a,{...f,delay:r+(typeof o=="function"?0:o)+E1(n.variantChildren,g,o,c,d)}).then(()=>g.notify("AnimationComplete",a)));return Promise.all(p)}function J4(n,a,r={}){n.notify("AnimationStart",a);let o;if(Array.isArray(a)){const c=a.map(d=>Xf(n,d,r));o=Promise.all(c)}else if(typeof a=="string")o=Xf(n,a,r);else{const c=typeof a=="function"?Ha(n,a,r.custom):a;o=Promise.all(w1(n,c,r))}return o.then(()=>{n.notify("AnimationComplete",a)})}function C1(n,a){if(!Array.isArray(a))return!1;const r=a.length;if(r!==n.length)return!1;for(let o=0;o<r;o++)if(a[o]!==n[o])return!1;return!0}const W4=zd.length;function M1(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?M1(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const a={};for(let r=0;r<W4;r++){const o=zd[r],c=n.props[o];(ur(c)||c===!1)&&(a[o]=c)}return a}const F4=[...Dd].reverse(),I4=Dd.length;function tA(n){return a=>Promise.all(a.map(({animation:r,options:o})=>J4(n,r,o)))}function eA(n){let a=tA(n),r=G0(),o=!0;const c=g=>(m,y)=>{const b=Ha(n,y,g==="exit"?n.presenceContext?.custom:void 0);if(b){const{transition:S,transitionEnd:M,...N}=b;m={...m,...N,...M}}return m};function d(g){a=g(n)}function f(g){const{props:m}=n,y=M1(n.parent)||{},b=[],S=new Set;let M={},N=1/0;for(let K=0;K<I4;K++){const q=F4[K],Q=r[q],G=m[q]!==void 0?m[q]:y[q],W=ur(G),P=q===g?Q.isActive:null;P===!1&&(N=K);let Z=G===y[q]&&G!==m[q]&&W;if(Z&&o&&n.manuallyAnimateOnMount&&(Z=!1),Q.protectedKeys={...M},!Q.isActive&&P===null||!G&&!Q.prevProp||El(G)||typeof G=="boolean")continue;const H=nA(Q.prevProp,G);let I=H||q===g&&Q.isActive&&!Z&&W||K>N&&W,xt=!1;const Bt=Array.isArray(G)?G:[G];let Yt=Bt.reduce(c(q),{});P===!1&&(Yt={});const{prevResolvedValues:Ft={}}=Q,en={...Ft,...Yt},be=$=>{I=!0,S.has($)&&(xt=!0,S.delete($)),Q.needsAnimating[$]=!0;const et=n.getValue($);et&&(et.liveStyle=!1)};for(const $ in en){const et=Yt[$],ot=Ft[$];if(M.hasOwnProperty($))continue;let ht=!1;Yf(et)&&Yf(ot)?ht=!C1(et,ot):ht=et!==ot,ht?et!=null?be($):S.add($):et!==void 0&&S.has($)?be($):Q.protectedKeys[$]=!0}Q.prevProp=G,Q.prevResolvedValues=Yt,Q.isActive&&(M={...M,...Yt}),o&&n.blockInitialAnimation&&(I=!1);const pe=Z&&H;I&&(!pe||xt)&&b.push(...Bt.map($=>{const et={type:q};if(typeof $=="string"&&o&&!pe&&n.manuallyAnimateOnMount&&n.parent){const{parent:ot}=n,ht=Ha(ot,$);if(ot.enteringChildren&&ht){const{delayChildren:A}=ht.transition||{};et.delay=E1(ot.enteringChildren,n,A)}}return{animation:$,options:et}}))}if(S.size){const K={};if(typeof m.initial!="boolean"){const q=Ha(n,Array.isArray(m.initial)?m.initial[0]:m.initial);q&&q.transition&&(K.transition=q.transition)}S.forEach(q=>{const Q=n.getBaseTarget(q),G=n.getValue(q);G&&(G.liveStyle=!0),K[q]=Q??null}),b.push({animation:K})}let Y=!!b.length;return o&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(Y=!1),o=!1,Y?a(b):Promise.resolve()}function p(g,m){if(r[g].isActive===m)return Promise.resolve();n.variantChildren?.forEach(b=>b.animationState?.setActive(g,m)),r[g].isActive=m;const y=f(g);for(const b in r)r[b].protectedKeys={};return y}return{animateChanges:f,setActive:p,setAnimateFunction:d,getState:()=>r,reset:()=>{r=G0()}}}function nA(n,a){return typeof a=="string"?a!==n:Array.isArray(a)?!C1(a,n):!1}function Hi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function G0(){return{animate:Hi(!0),whileInView:Hi(),whileHover:Hi(),whileTap:Hi(),whileDrag:Hi(),whileFocus:Hi(),exit:Hi()}}class bi{constructor(a){this.isMounted=!1,this.node=a}update(){}}class iA extends bi{constructor(a){super(a),a.animationState||(a.animationState=eA(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();El(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:r}=this.node.prevProps||{};a!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let aA=0;class sA extends bi{constructor(){super(...arguments),this.id=aA++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===o)return;const c=this.node.animationState.setActive("exit",!a);r&&!a&&c.then(()=>{r(this.id)})}mount(){const{register:a,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const rA={animation:{Feature:iA},exit:{Feature:sA}};function fr(n,a,r,o={passive:!0}){return n.addEventListener(a,r,o),()=>n.removeEventListener(a,r)}function yr(n){return{point:{x:n.pageX,y:n.pageY}}}const oA=n=>a=>Cd(a)&&n(a,yr(a));function nr(n,a,r,o){return fr(n,a,oA(r),o)}const D1=1e-4,lA=1-D1,uA=1+D1,z1=.01,cA=0-z1,fA=0+z1;function ve(n){return n.max-n.min}function dA(n,a,r){return Math.abs(n-a)<=r}function Y0(n,a,r,o=.5){n.origin=o,n.originPoint=Lt(a.min,a.max,n.origin),n.scale=ve(r)/ve(a),n.translate=Lt(r.min,r.max,n.origin)-n.originPoint,(n.scale>=lA&&n.scale<=uA||isNaN(n.scale))&&(n.scale=1),(n.translate>=cA&&n.translate<=fA||isNaN(n.translate))&&(n.translate=0)}function ir(n,a,r,o){Y0(n.x,a.x,r.x,o?o.originX:void 0),Y0(n.y,a.y,r.y,o?o.originY:void 0)}function q0(n,a,r){n.min=r.min+a.min,n.max=n.min+ve(a)}function hA(n,a,r){q0(n.x,a.x,r.x),q0(n.y,a.y,r.y)}function X0(n,a,r){n.min=a.min-r.min,n.max=n.min+ve(a)}function pl(n,a,r){X0(n.x,a.x,r.x),X0(n.y,a.y,r.y)}function We(n){return[n("x"),n("y")]}const j1=({current:n})=>n?n.ownerDocument.defaultView:null,$0=(n,a)=>Math.abs(n-a);function pA(n,a){const r=$0(n.x,a.x),o=$0(n.y,a.y);return Math.sqrt(r**2+o**2)}class R1{constructor(a,r,{transformPagePoint:o,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=cf(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,N=pA(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!N)return;const{point:Y}=S,{timestamp:K}=ae;this.history.push({...Y,timestamp:K});const{onStart:q,onMove:Q}=this.handlers;M||(q&&q(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),Q&&Q(this.lastMoveEvent,S)},this.handlePointerMove=(S,M)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=uf(M,this.transformPagePoint),Et.update(this.updatePoint,!0)},this.handlePointerUp=(S,M)=>{this.end();const{onEnd:N,onSessionEnd:Y,resumeAnimation:K}=this.handlers;if(this.dragSnapToOrigin&&K&&K(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const q=cf(S.type==="pointercancel"?this.lastMoveEventInfo:uf(M,this.transformPagePoint),this.history);this.startEvent&&N&&N(S,q),Y&&Y(S,q)},!Cd(a))return;this.dragSnapToOrigin=d,this.handlers=r,this.transformPagePoint=o,this.distanceThreshold=f,this.contextWindow=c||window;const p=yr(a),g=uf(p,this.transformPagePoint),{point:m}=g,{timestamp:y}=ae;this.history=[{...m,timestamp:y}];const{onSessionStart:b}=r;b&&b(a,cf(g,this.history)),this.removeListeners=hr(nr(this.contextWindow,"pointermove",this.handlePointerMove),nr(this.contextWindow,"pointerup",this.handlePointerUp),nr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),fn(this.updatePoint)}}function uf(n,a){return a?{point:a(n.point)}:n}function Q0(n,a){return{x:n.x-a.x,y:n.y-a.y}}function cf({point:n},a){return{point:n,delta:Q0(n,O1(a)),offset:Q0(n,mA(a)),velocity:gA(a,.1)}}function mA(n){return n[0]}function O1(n){return n[n.length-1]}function gA(n,a){if(n.length<2)return{x:0,y:0};let r=n.length-1,o=null;const c=O1(n);for(;r>=0&&(o=n[r],!(c.timestamp-o.timestamp>yn(a)));)r--;if(!o)return{x:0,y:0};const d=Fe(c.timestamp-o.timestamp);if(d===0)return{x:0,y:0};const f={x:(c.x-o.x)/d,y:(c.y-o.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function yA(n,{min:a,max:r},o){return a!==void 0&&n<a?n=o?Lt(a,n,o.min):Math.max(n,a):r!==void 0&&n>r&&(n=o?Lt(r,n,o.max):Math.min(n,r)),n}function K0(n,a,r){return{min:a!==void 0?n.min+a:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function vA(n,{top:a,left:r,bottom:o,right:c}){return{x:K0(n.x,r,c),y:K0(n.y,a,o)}}function Z0(n,a){let r=a.min-n.min,o=a.max-n.max;return a.max-a.min<n.max-n.min&&([r,o]=[o,r]),{min:r,max:o}}function bA(n,a){return{x:Z0(n.x,a.x),y:Z0(n.y,a.y)}}function xA(n,a){let r=.5;const o=ve(n),c=ve(a);return c>o?r=Ka(a.min,a.max-o,n.min):o>c&&(r=Ka(n.min,n.max-c,a.min)),bn(0,1,r)}function SA(n,a){const r={};return a.min!==void 0&&(r.min=a.min-n.min),a.max!==void 0&&(r.max=a.max-n.min),r}const $f=.35;function TA(n=$f){return n===!1?n=0:n===!0&&(n=$f),{x:P0(n,"left","right"),y:P0(n,"top","bottom")}}function P0(n,a,r){return{min:J0(n,a),max:J0(n,r)}}function J0(n,a){return typeof n=="number"?n:n[a]||0}const AA=new WeakMap;class wA{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=te(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=a}start(a,{snapToCursor:r=!1,distanceThreshold:o}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const d=b=>{const{dragSnapToOrigin:S}=this.getProps();S?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(yr(b).point)},f=(b,S)=>{const{drag:M,dragPropagation:N,onDragStart:Y}=this.getProps();if(M&&!N&&(this.openDragLock&&this.openDragLock(),this.openDragLock=bT(M),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),We(q=>{let Q=this.getAxisMotionValue(q).get()||0;if(vn.test(Q)){const{projection:G}=this.visualElement;if(G&&G.layout){const W=G.layout.layoutBox[q];W&&(Q=ve(W)*(parseFloat(Q)/100))}}this.originPoint[q]=Q}),Y&&Et.postRender(()=>Y(b,S)),qf(this.visualElement,"transform");const{animationState:K}=this.visualElement;K&&K.setActive("whileDrag",!0)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:M,dragDirectionLock:N,onDirectionLock:Y,onDrag:K}=this.getProps();if(!M&&!this.openDragLock)return;const{offset:q}=S;if(N&&this.currentDirection===null){this.currentDirection=EA(q),this.currentDirection!==null&&Y&&Y(this.currentDirection);return}this.updateAxis("x",S.point,q),this.updateAxis("y",S.point,q),this.visualElement.render(),K&&K(b,S)},g=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>We(b=>this.getAnimationState(b)==="paused"&&this.getAxisMotionValue(b).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new R1(a,{onSessionStart:d,onStart:f,onMove:p,onSessionEnd:g,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:o,contextWindow:j1(this.visualElement)})}stop(a,r){const o=a||this.latestPointerEvent,c=r||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!c||!o)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:p}=this.getProps();p&&Et.postRender(()=>p(o,c))}cancel(){this.isDragging=!1;const{projection:a,animationState:r}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(a,r,o){const{drag:c}=this.getProps();if(!o||!Go(a,c,this.currentDirection))return;const d=this.getAxisMotionValue(a);let f=this.originPoint[a]+o[a];this.constraints&&this.constraints[a]&&(f=yA(f,this.constraints[a],this.elastic[a])),d.set(f)}resolveConstraints(){const{dragConstraints:a,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;a&&Ba(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&o?this.constraints=vA(o.layoutBox,a):this.constraints=!1,this.elastic=TA(r),c!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&We(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=SA(o.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:r}=this.getProps();if(!a||!Ba(a))return!1;const o=a.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const d=C4(o,c.root,this.visualElement.getTransformPagePoint());let f=bA(c.layout.layoutBox,d);if(r){const p=r(A4(f));this.hasMutatedConstraints=!!p,p&&(f=m1(p))}return f}startAnimation(a){const{drag:r,dragMomentum:o,dragElastic:c,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),g=this.constraints||{},m=We(y=>{if(!Go(y,r,this.currentDirection))return;let b=g&&g[y]||{};f&&(b={min:0,max:0});const S=c?200:1e6,M=c?40:1e7,N={type:"inertia",velocity:o?a[y]:0,bounceStiffness:S,bounceDamping:M,timeConstant:750,restDelta:1,restSpeed:10,...d,...b};return this.startAxisValueAnimation(y,N)});return Promise.all(m).then(p)}startAxisValueAnimation(a,r){const o=this.getAxisMotionValue(a);return qf(this.visualElement,a),o.start(Bd(a,o,0,r,this.visualElement,!1))}stopAnimation(){We(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){We(a=>this.getAxisMotionValue(a).animation?.pause())}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const r=`_drag${a.toUpperCase()}`,o=this.visualElement.getProps(),c=o[r];return c||this.visualElement.getValue(a,(o.initial?o.initial[a]:void 0)||0)}snapToCursor(a){We(r=>{const{drag:o}=this.getProps();if(!Go(r,o,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(r);if(c&&c.layout){const{min:f,max:p}=c.layout.layoutBox[r];d.set(a[r]-Lt(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!Ba(r)||!o||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};We(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const g=p.get();c[f]=xA({min:g,max:g},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),We(f=>{if(!Go(f,a,null))return;const p=this.getAxisMotionValue(f),{min:g,max:m}=this.constraints[f];p.set(Lt(g,m,c[f]))})}addListeners(){if(!this.visualElement.current)return;AA.set(this.visualElement,this);const a=this.visualElement.current,r=nr(a,"pointerdown",g=>{const{drag:m,dragListener:y=!0}=this.getProps();m&&y&&this.start(g)}),o=()=>{const{dragConstraints:g}=this.getProps();Ba(g)&&g.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,d=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Et.read(o);const f=fr(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:m})=>{this.isDragging&&m&&(We(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=g[y].translate,b.set(b.get()+g[y].translate))}),this.visualElement.render())}));return()=>{f(),r(),d(),p&&p()}}getProps(){const a=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:o=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:f=$f,dragMomentum:p=!0}=a;return{...a,drag:r,dragDirectionLock:o,dragPropagation:c,dragConstraints:d,dragElastic:f,dragMomentum:p}}}function Go(n,a,r){return(a===!0||a===n)&&(r===null||r===n)}function EA(n,a=10){let r=null;return Math.abs(n.y)>a?r="y":Math.abs(n.x)>a&&(r="x"),r}class CA extends bi{constructor(a){super(a),this.removeGroupControls=De,this.removeListeners=De,this.controls=new wA(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||De}unmount(){this.removeGroupControls(),this.removeListeners()}}const W0=n=>(a,r)=>{n&&Et.postRender(()=>n(a,r))};class MA extends bi{constructor(){super(...arguments),this.removePointerDownListener=De}onPointerDown(a){this.session=new R1(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:j1(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:r,onPan:o,onPanEnd:c}=this.node.getProps();return{onSessionStart:W0(a),onStart:W0(r),onMove:o,onEnd:(d,f)=>{delete this.session,c&&Et.postRender(()=>c(d,f))}}}mount(){this.removePointerDownListener=nr(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const nl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function F0(n,a){return a.max===a.min?0:n/(a.max-a.min)*100}const Zs={correct:(n,a)=>{if(!a.target)return n;if(typeof n=="string")if(st.test(n))n=parseFloat(n);else return n;const r=F0(n,a.target.x),o=F0(n,a.target.y);return`${r}% ${o}%`}},DA={correct:(n,{treeScale:a,projectionDelta:r})=>{const o=n,c=vi.parse(n);if(c.length>5)return o;const d=vi.createTransformer(n),f=typeof c[0]!="number"?1:0,p=r.x.scale*a.x,g=r.y.scale*a.y;c[0+f]/=p,c[1+f]/=g;const m=Lt(p,g,.5);return typeof c[2+f]=="number"&&(c[2+f]/=m),typeof c[3+f]=="number"&&(c[3+f]/=m),d(c)}};let ff=!1;class zA extends X.Component{componentDidMount(){const{visualElement:a,layoutGroup:r,switchLayoutGroup:o,layoutId:c}=this.props,{projection:d}=a;WT(jA),d&&(r.group&&r.group.add(d),o&&o.register&&c&&o.register(d),ff&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),nl.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:r,visualElement:o,drag:c,isPresent:d}=this.props,{projection:f}=o;return f&&(f.isPresent=d,ff=!0,c||a.layoutDependency!==r||r===void 0||a.isPresent!==d?f.willUpdate():this.safeToRemove(),a.isPresent!==d&&(d?f.promote():f.relegate()||Et.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),Ed.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:r,switchLayoutGroup:o}=this.props,{projection:c}=a;ff=!0,c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),o&&o.deregister&&o.deregister(c))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function V1(n){const[a,r]=e1(),o=X.useContext(nd);return x.jsx(zA,{...n,layoutGroup:o,switchLayoutGroup:X.useContext(h1),isPresent:a,safeToRemove:r})}const jA={borderRadius:{...Zs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Zs,borderTopRightRadius:Zs,borderBottomLeftRadius:Zs,borderBottomRightRadius:Zs,boxShadow:DA};function RA(n,a,r){const o=re(n)?n:ln(n);return o.start(Bd("",o,a,r)),o.animation}const OA=(n,a)=>n.depth-a.depth;class VA{constructor(){this.children=[],this.isDirty=!1}add(a){ad(this.children,a),this.isDirty=!0}remove(a){sd(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(OA),this.isDirty=!1,this.children.forEach(a)}}function _A(n,a){const r=Me.now(),o=({timestamp:c})=>{const d=c-r;d>=a&&(fn(o),n(d-a))};return Et.setup(o,!0),()=>fn(o)}const _1=["TopLeft","TopRight","BottomLeft","BottomRight"],kA=_1.length,I0=n=>typeof n=="string"?parseFloat(n):n,ty=n=>typeof n=="number"||st.test(n);function BA(n,a,r,o,c,d){c?(n.opacity=Lt(0,r.opacity??1,NA(o)),n.opacityExit=Lt(a.opacity??1,0,LA(o))):d&&(n.opacity=Lt(a.opacity??1,r.opacity??1,o));for(let f=0;f<kA;f++){const p=`border${_1[f]}Radius`;let g=ey(a,p),m=ey(r,p);if(g===void 0&&m===void 0)continue;g||(g=0),m||(m=0),g===0||m===0||ty(g)===ty(m)?(n[p]=Math.max(Lt(I0(g),I0(m),o),0),(vn.test(m)||vn.test(g))&&(n[p]+="%")):n[p]=m}(a.rotate||r.rotate)&&(n.rotate=Lt(a.rotate||0,r.rotate||0,o))}function ey(n,a){return n[a]!==void 0?n[a]:n.borderRadius}const NA=k1(0,.5,bv),LA=k1(.5,.95,De);function k1(n,a,r){return o=>o<n?0:o>a?1:r(Ka(n,a,o))}function ny(n,a){n.min=a.min,n.max=a.max}function rn(n,a){ny(n.x,a.x),ny(n.y,a.y)}function iy(n,a){n.translate=a.translate,n.scale=a.scale,n.originPoint=a.originPoint,n.origin=a.origin}function ay(n,a,r,o,c){return n-=a,n=hl(n,1/r,o),c!==void 0&&(n=hl(n,1/c,o)),n}function UA(n,a=0,r=1,o=.5,c,d=n,f=n){if(vn.test(a)&&(a=parseFloat(a),a=Lt(f.min,f.max,a/100)-f.min),typeof a!="number")return;let p=Lt(d.min,d.max,o);n===d&&(p-=a),n.min=ay(n.min,a,r,p,c),n.max=ay(n.max,a,r,p,c)}function sy(n,a,[r,o,c],d,f){UA(n,a[r],a[o],a[c],a.scale,d,f)}const HA=["x","scaleX","originX"],GA=["y","scaleY","originY"];function ry(n,a,r,o){sy(n.x,a,HA,r?r.x:void 0,o?o.x:void 0),sy(n.y,a,GA,r?r.y:void 0,o?o.y:void 0)}function oy(n){return n.translate===0&&n.scale===1}function B1(n){return oy(n.x)&&oy(n.y)}function ly(n,a){return n.min===a.min&&n.max===a.max}function YA(n,a){return ly(n.x,a.x)&&ly(n.y,a.y)}function uy(n,a){return Math.round(n.min)===Math.round(a.min)&&Math.round(n.max)===Math.round(a.max)}function N1(n,a){return uy(n.x,a.x)&&uy(n.y,a.y)}function cy(n){return ve(n.x)/ve(n.y)}function fy(n,a){return n.translate===a.translate&&n.scale===a.scale&&n.originPoint===a.originPoint}class qA{constructor(){this.members=[]}add(a){ad(this.members,a),a.scheduleRender()}remove(a){if(sd(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(a){const r=this.members.findIndex(c=>a===c);if(r===0)return!1;let o;for(let c=r;c>=0;c--){const d=this.members[c];if(d.isPresent!==!1){o=d;break}}return o?(this.promote(o),!0):!1}promote(a,r){const o=this.lead;if(a!==o&&(this.prevLead=o,this.lead=a,a.show(),o)){o.instance&&o.scheduleRender(),a.scheduleRender(),a.resumeFrom=o,r&&(a.resumeFrom.preserveOpacity=!0),o.snapshot&&(a.snapshot=o.snapshot,a.snapshot.latestValues=o.animationValues||o.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:c}=a.options;c===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:r,resumingFrom:o}=a;r.onExitComplete&&r.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function XA(n,a,r){let o="";const c=n.x.translate/a.x,d=n.y.translate/a.y,f=r?.z||0;if((c||d||f)&&(o=`translate3d(${c}px, ${d}px, ${f}px) `),(a.x!==1||a.y!==1)&&(o+=`scale(${1/a.x}, ${1/a.y}) `),r){const{transformPerspective:m,rotate:y,rotateX:b,rotateY:S,skewX:M,skewY:N}=r;m&&(o=`perspective(${m}px) ${o}`),y&&(o+=`rotate(${y}deg) `),b&&(o+=`rotateX(${b}deg) `),S&&(o+=`rotateY(${S}deg) `),M&&(o+=`skewX(${M}deg) `),N&&(o+=`skewY(${N}deg) `)}const p=n.x.scale*a.x,g=n.y.scale*a.y;return(p!==1||g!==1)&&(o+=`scale(${p}, ${g})`),o||"none"}const df=["","X","Y","Z"],$A=1e3;let QA=0;function hf(n,a,r,o){const{latestValues:c}=a;c[n]&&(r[n]=c[n],a.setStaticValue(n,0),o&&(o[n]=0))}function L1(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:a}=n.options;if(!a)return;const r=A1(a);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:d}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",Et,!(c||d))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&L1(o)}function U1({attachResizeListener:n,defaultParent:a,measureScroll:r,checkIsScrollRoot:o,resetTransform:c}){return class{constructor(f={},p=a?.()){this.id=QA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(PA),this.nodes.forEach(IA),this.nodes.forEach(tw),this.nodes.forEach(JA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new VA)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new od),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const g=this.eventHandlers.get(f);g&&g.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Md(f)&&!_T(f),this.instance=f;const{layoutId:p,layout:g,visualElement:m}=this.options;if(m&&!m.current&&m.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||p)&&(this.isLayoutDirty=!0),n){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;Et.read(()=>{b=window.innerWidth}),n(f,()=>{const M=window.innerWidth;M!==b&&(b=M,this.root.updateBlockedByResize=!0,y&&y(),y=_A(S,250),nl.hasAnimatedSinceResize&&(nl.hasAnimatedSinceResize=!1,this.nodes.forEach(py)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||g)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const N=this.options.transition||m.getDefaultTransition()||sw,{onLayoutAnimationStart:Y,onLayoutAnimationComplete:K}=m.getProps(),q=!this.targetLayout||!N1(this.targetLayout,M),Q=!b&&S;if(this.options.layoutRoot||this.resumeFrom||Q||b&&(q||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const G={...Sd(N,"layout"),onPlay:Y,onComplete:K};(m.shouldReduceMotion||this.options.layoutRoot)&&(G.delay=0,G.type=!1),this.startAnimation(G),this.setAnimationOrigin(y,Q)}else b||py(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),fn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ew),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&L1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:g}=this.options;if(p===void 0&&!g)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(dy);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(hy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(FA),this.nodes.forEach(KA),this.nodes.forEach(ZA)):this.nodes.forEach(hy),this.clearAllSnapshots();const p=Me.now();ae.delta=bn(0,1e3/60,p-ae.timestamp),ae.timestamp=p,ae.isProcessing=!0,tf.update.process(ae),tf.preRender.process(ae),tf.render.process(ae),ae.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ed.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(WA),this.sharedNodes.forEach(nw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Et.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Et.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ve(this.snapshot.measuredBox.x)&&!ve(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=te(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const g=o(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:g,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!B1(this.projectionDelta),g=this.getTransformTemplate(),m=g?g(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;f&&this.instance&&(p||Gi(this.latestValues)||y)&&(c(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let g=this.removeElementScroll(p);return f&&(g=this.removeTransform(g)),rw(g),{animationId:this.root.animationId,measuredBox:p,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return te();const p=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(ow))){const{scroll:m}=this.root;m&&(Na(p.x,m.offset.x),Na(p.y,m.offset.y))}return p}removeElementScroll(f){const p=te();if(rn(p,f),this.scroll?.wasRoot)return p;for(let g=0;g<this.path.length;g++){const m=this.path[g],{scroll:y,options:b}=m;m!==this.root&&y&&b.layoutScroll&&(y.wasRoot&&rn(p,f),Na(p.x,y.offset.x),Na(p.y,y.offset.y))}return p}applyTransform(f,p=!1){const g=te();rn(g,f);for(let m=0;m<this.path.length;m++){const y=this.path[m];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&La(g,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Gi(y.latestValues)&&La(g,y.latestValues)}return Gi(this.latestValues)&&La(g,this.latestValues),g}removeTransform(f){const p=te();rn(p,f);for(let g=0;g<this.path.length;g++){const m=this.path[g];if(!m.instance||!Gi(m.latestValues))continue;Uf(m.latestValues)&&m.updateSnapshot();const y=te(),b=m.measurePageBox();rn(y,b),ry(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,y)}return Gi(this.latestValues)&&ry(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ae.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==p;if(!(f||g&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=ae.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=te(),this.targetWithTransforms=te()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),hA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):rn(this.target,this.layout.layoutBox),y1(this.target,this.targetDelta)):rn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Uf(this.parent.latestValues)||g1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(f,p,g){this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=te(),this.relativeTargetOrigin=te(),pl(this.relativeTargetOrigin,p,g),rn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const f=this.getLead(),p=!!this.resumingFrom||this!==f;let g=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(g=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===ae.timestamp&&(g=!1),g)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;rn(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;E4(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=te());const{target:M}=f;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(iy(this.prevProjectionDelta.x,this.projectionDelta.x),iy(this.prevProjectionDelta.y,this.projectionDelta.y)),ir(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!fy(this.projectionDelta.x,this.prevProjectionDelta.x)||!fy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ua(),this.projectionDelta=Ua(),this.projectionDeltaWithTransform=Ua()}setAnimationOrigin(f,p=!1){const g=this.snapshot,m=g?g.latestValues:{},y={...this.latestValues},b=Ua();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const S=te(),M=g?g.source:void 0,N=this.layout?this.layout.source:void 0,Y=M!==N,K=this.getStack(),q=!K||K.members.length<=1,Q=!!(Y&&!q&&this.options.crossfade===!0&&!this.path.some(aw));this.animationProgress=0;let G;this.mixTargetDelta=W=>{const P=W/1e3;my(b.x,f.x,P),my(b.y,f.y,P),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(pl(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),iw(this.relativeTarget,this.relativeTargetOrigin,S,P),G&&YA(this.relativeTarget,G)&&(this.isProjectionDirty=!1),G||(G=te()),rn(G,this.relativeTarget)),Y&&(this.animationValues=y,BA(y,m,this.latestValues,P,Q,q)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(fn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Et.update(()=>{nl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ln(0)),this.currentAnimation=RA(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),f.onUpdate&&f.onUpdate(p)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta($A),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:g,layout:m,latestValues:y}=f;if(!(!p||!g||!m)){if(this!==f&&this.layout&&m&&H1(this.options.animationType,this.layout.layoutBox,m.layoutBox)){g=this.target||te();const b=ve(this.layout.layoutBox.x);g.x.min=f.target.x.min,g.x.max=g.x.min+b;const S=ve(this.layout.layoutBox.y);g.y.min=f.target.y.min,g.y.max=g.y.min+S}rn(p,g),La(p,y),ir(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new qA),this.sharedNodes.get(f).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:g}={}){const m=this.getStack();m&&m.promote(this,g),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:g}=f;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(p=!0),!p)return;const m={};g.z&&hf("z",f,m,this.animationValues);for(let y=0;y<df.length;y++)hf(`rotate${df[y]}`,f,m,this.animationValues),hf(`skew${df[y]}`,f,m,this.animationValues);f.render();for(const y in m)f.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);f.scheduleRender()}applyProjectionStyles(f,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const g=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=el(p?.pointerEvents)||"",f.transform=g?g(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=el(p?.pointerEvents)||""),this.hasProjected&&!Gi(this.latestValues)&&(f.transform=g?g({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=m.animationValues||m.latestValues;this.applyTransformsToTarget();let b=XA(this.projectionDeltaWithTransform,this.treeScale,y);g&&(b=g(y,b)),f.transform=b;const{x:S,y:M}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${M.origin*100}% 0`,m.animationValues?f.opacity=m===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=m===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const N in cr){if(y[N]===void 0)continue;const{correct:Y,applyTo:K,isCSSVariable:q}=cr[N],Q=b==="none"?y[N]:Y(y[N],m);if(K){const G=K.length;for(let W=0;W<G;W++)f[K[W]]=Q}else q?this.options.visualElement.renderState.vars[N]=Q:f[N]=Q}this.options.layoutId&&(f.pointerEvents=m===this?el(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(dy),this.root.sharedNodes.clear()}}}function KA(n){n.updateLayout()}function ZA(n){const a=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&a&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:c}=n.options,d=a.source!==n.layout.source;c==="size"?We(y=>{const b=d?a.measuredBox[y]:a.layoutBox[y],S=ve(b);b.min=r[y].min,b.max=b.min+S}):H1(c,a.layoutBox,r)&&We(y=>{const b=d?a.measuredBox[y]:a.layoutBox[y],S=ve(r[y]);b.max=b.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+S)});const f=Ua();ir(f,r,a.layoutBox);const p=Ua();d?ir(p,n.applyTransform(o,!0),a.measuredBox):ir(p,r,a.layoutBox);const g=!B1(f);let m=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:S}=y;if(b&&S){const M=te();pl(M,a.layoutBox,b.layoutBox);const N=te();pl(N,r,S.layoutBox),N1(M,N)||(m=!0),y.options.layoutRoot&&(n.relativeTarget=N,n.relativeTargetOrigin=M,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:a,delta:p,layoutDelta:f,hasLayoutChanged:g,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function PA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function JA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function WA(n){n.clearSnapshot()}function dy(n){n.clearMeasurements()}function hy(n){n.isLayoutDirty=!1}function FA(n){const{visualElement:a}=n.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),n.resetTransform()}function py(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function IA(n){n.resolveTargetDelta()}function tw(n){n.calcProjection()}function ew(n){n.resetSkewAndRotation()}function nw(n){n.removeLeadSnapshot()}function my(n,a,r){n.translate=Lt(a.translate,0,r),n.scale=Lt(a.scale,1,r),n.origin=a.origin,n.originPoint=a.originPoint}function gy(n,a,r,o){n.min=Lt(a.min,r.min,o),n.max=Lt(a.max,r.max,o)}function iw(n,a,r,o){gy(n.x,a.x,r.x,o),gy(n.y,a.y,r.y,o)}function aw(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const sw={duration:.45,ease:[.4,0,.1,1]},yy=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),vy=yy("applewebkit/")&&!yy("chrome/")?Math.round:De;function by(n){n.min=vy(n.min),n.max=vy(n.max)}function rw(n){by(n.x),by(n.y)}function H1(n,a,r){return n==="position"||n==="preserve-aspect"&&!dA(cy(a),cy(r),.2)}function ow(n){return n!==n.root&&n.scroll?.wasRoot}const lw=U1({attachResizeListener:(n,a)=>fr(n,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),pf={current:void 0},G1=U1({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!pf.current){const n=new lw({});n.mount(window),n.setOptions({layoutScroll:!0}),pf.current=n}return pf.current},resetTransform:(n,a)=>{n.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),uw={pan:{Feature:MA},drag:{Feature:CA,ProjectionNode:G1,MeasureLayout:V1}};function xy(n,a,r){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,d=o[c];d&&Et.postRender(()=>d(a,yr(a)))}class cw extends bi{mount(){const{current:a}=this.node;a&&(this.unmount=xT(a,(r,o)=>(xy(this.node,o,"Start"),c=>xy(this.node,c,"End"))))}unmount(){}}class fw extends bi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=hr(fr(this.node.current,"focus",()=>this.onFocus()),fr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Sy(n,a,r){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),d=o[c];d&&Et.postRender(()=>d(a,yr(a)))}class dw extends bi{mount(){const{current:a}=this.node;a&&(this.unmount=wT(a,(r,o)=>(Sy(this.node,o,"Start"),(c,{success:d})=>Sy(this.node,c,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qf=new WeakMap,mf=new WeakMap,hw=n=>{const a=Qf.get(n.target);a&&a(n)},pw=n=>{n.forEach(hw)};function mw({root:n,...a}){const r=n||document;mf.has(r)||mf.set(r,{});const o=mf.get(r),c=JSON.stringify(a);return o[c]||(o[c]=new IntersectionObserver(pw,{root:n,...a})),o[c]}function gw(n,a,r){const o=mw(a);return Qf.set(n,r),o.observe(n),()=>{Qf.delete(n),o.unobserve(n)}}const yw={some:0,all:1};class vw extends bi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:r,margin:o,amount:c="some",once:d}=a,f={root:r?r.current:void 0,rootMargin:o,threshold:typeof c=="number"?c:yw[c]},p=g=>{const{isIntersecting:m}=g;if(this.isInView===m||(this.isInView=m,d&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=m?y:b;S&&S(g)};return gw(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:r}=this.node;["amount","margin","root"].some(bw(a,r))&&this.startObserver()}unmount(){}}function bw({viewport:n={}},{viewport:a={}}={}){return r=>n[r]!==a[r]}const xw={inView:{Feature:vw},tap:{Feature:dw},focus:{Feature:fw},hover:{Feature:cw}},Sw={layout:{ProjectionNode:G1,MeasureLayout:V1}},Tw={...rA,...xw,...uw,...Sw},O=T4(Tw,k4),Aw=50,Ty=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),ww=()=>({time:0,x:Ty(),y:Ty()}),Ew={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Ay(n,a,r,o){const c=r[a],{length:d,position:f}=Ew[a],p=c.current,g=r.time;c.current=n[`scroll${f}`],c.scrollLength=n[`scroll${d}`]-n[`client${d}`],c.offset.length=0,c.offset[0]=0,c.offset[1]=c.scrollLength,c.progress=Ka(0,c.scrollLength,c.current);const m=o-g;c.velocity=m>Aw?0:ld(c.current-p,m)}function Cw(n,a,r){Ay(n,"x",a,r),Ay(n,"y",a,r),a.time=r}function Mw(n,a){const r={x:0,y:0};let o=n;for(;o&&o!==a;)if(wd(o))r.x+=o.offsetLeft,r.y+=o.offsetTop,o=o.offsetParent;else if(o.tagName==="svg"){const c=o.getBoundingClientRect();o=o.parentElement;const d=o.getBoundingClientRect();r.x+=c.left-d.left,r.y+=c.top-d.top}else if(o instanceof SVGGraphicsElement){const{x:c,y:d}=o.getBBox();r.x+=c,r.y+=d;let f=null,p=o.parentNode;for(;!f;)p.tagName==="svg"&&(f=p),p=o.parentNode;o=f}else break;return r}const Kf={start:0,center:.5,end:1};function wy(n,a,r=0){let o=0;if(n in Kf&&(n=Kf[n]),typeof n=="string"){const c=parseFloat(n);n.endsWith("px")?o=c:n.endsWith("%")?n=c/100:n.endsWith("vw")?o=c/100*document.documentElement.clientWidth:n.endsWith("vh")?o=c/100*document.documentElement.clientHeight:n=c}return typeof n=="number"&&(o=a*n),r+o}const Dw=[0,0];function zw(n,a,r,o){let c=Array.isArray(n)?n:Dw,d=0,f=0;return typeof n=="number"?c=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?c=n.split(" "):c=[n,Kf[n]?n:"0"]),d=wy(c[0],r,o),f=wy(c[1],a),d-f}const jw={All:[[0,0],[1,1]]},Rw={x:0,y:0};function Ow(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function Vw(n,a,r){const{offset:o=jw.All}=r,{target:c=n,axis:d="y"}=r,f=d==="y"?"height":"width",p=c!==n?Mw(c,n):Rw,g=c===n?{width:n.scrollWidth,height:n.scrollHeight}:Ow(c),m={width:n.clientWidth,height:n.clientHeight};a[d].offset.length=0;let y=!a[d].interpolate;const b=o.length;for(let S=0;S<b;S++){const M=zw(o[S],m[f],g[f],p[d]);!y&&M!==a[d].interpolatorOffsets[S]&&(y=!0),a[d].offset[S]=M}y&&(a[d].interpolate=yd(a[d].offset,_v(o),{clamp:!1}),a[d].interpolatorOffsets=[...a[d].offset]),a[d].progress=bn(0,1,a[d].interpolate(a[d].current))}function _w(n,a=n,r){if(r.x.targetOffset=0,r.y.targetOffset=0,a!==n){let o=a;for(;o&&o!==n;)r.x.targetOffset+=o.offsetLeft,r.y.targetOffset+=o.offsetTop,o=o.offsetParent}r.x.targetLength=a===n?a.scrollWidth:a.clientWidth,r.y.targetLength=a===n?a.scrollHeight:a.clientHeight,r.x.containerLength=n.clientWidth,r.y.containerLength=n.clientHeight}function kw(n,a,r,o={}){return{measure:c=>{_w(n,o.target,r),Cw(n,r,c),(o.offset||o.target)&&Vw(n,r,o)},notify:()=>a(r)}}const Ps=new WeakMap,Ey=new WeakMap,gf=new WeakMap,Cy=n=>n===document.scrollingElement?window:n;function Y1(n,{container:a=document.scrollingElement,...r}={}){if(!a)return De;let o=gf.get(a);o||(o=new Set,gf.set(a,o));const c=ww(),d=kw(a,n,c,r);if(o.add(d),!Ps.has(a)){const p=()=>{for(const b of o)b.measure(ae.timestamp);Et.preUpdate(g)},g=()=>{for(const b of o)b.notify()},m=()=>Et.read(p);Ps.set(a,m);const y=Cy(a);window.addEventListener("resize",m,{passive:!0}),a!==document.documentElement&&Ey.set(a,VT(a,m)),y.addEventListener("scroll",m,{passive:!0}),m()}const f=Ps.get(a);return Et.read(f,!1,!0),()=>{fn(f);const p=gf.get(a);if(!p||(p.delete(d),p.size))return;const g=Ps.get(a);Ps.delete(a),g&&(Cy(a).removeEventListener("scroll",g),Ey.get(a)?.(),window.removeEventListener("resize",g))}}const My=new Map;function Bw(n){const a={value:0},r=Y1(o=>{a.value=o[n.axis].progress*100},n);return{currentTime:a,cancel:r}}function q1({source:n,container:a,...r}){const{axis:o}=r;n&&(a=n);const c=My.get(a)??new Map;My.set(a,c);const d=r.target??"self",f=c.get(d)??{},p=o+(r.offset??[]).join(",");return f[p]||(f[p]=!r.target&&Lv()?new ScrollTimeline({source:a,axis:o}):Bw({container:a,...r})),f[p]}function Nw(n,a){const r=q1(a);return n.attachTimeline({timeline:a.target?void 0:r,observe:o=>(o.pause(),t1(c=>{o.time=o.iterationDuration*c},r))})}function Lw(n){return n.length===2}function Uw(n,a){return Lw(n)?Y1(r=>{n(r[a.axis].progress,r)},a):t1(n,q1(a))}function Hw(n,{axis:a="y",container:r=document.scrollingElement,...o}={}){if(!r)return De;const c={axis:a,container:r,...o};return typeof n=="function"?Uw(n,c):Nw(n,c)}const Gw=()=>({scrollX:ln(0),scrollY:ln(0),scrollXProgress:ln(0),scrollYProgress:ln(0)}),Yo=n=>n?!n.current:!1;function Yw({container:n,target:a,...r}={}){const o=Ja(Gw),c=X.useRef(null),d=X.useRef(!1),f=X.useCallback(()=>(c.current=Hw((p,{x:g,y:m})=>{o.scrollX.set(g.current),o.scrollXProgress.set(g.progress),o.scrollY.set(m.current),o.scrollYProgress.set(m.progress)},{...r,container:n?.current||void 0,target:a?.current||void 0}),()=>{c.current?.()}),[n,a,JSON.stringify(r.offset)]);return Sl(()=>{if(d.current=!1,Yo(n)||Yo(a)){d.current=!0;return}else return f()},[f]),X.useEffect(()=>{if(d.current)return sr(!Yo(n)),sr(!Yo(a)),f()},[f]),o}function X1(n){const a=Ja(()=>ln(n)),{isStatic:r}=X.useContext(gr);if(r){const[,o]=X.useState(n);X.useEffect(()=>a.on("change",o),[])}return a}function $1(n,a){const r=X1(a()),o=()=>r.set(a());return o(),Sl(()=>{const c=()=>Et.preRender(o,!1,!0),d=n.map(f=>f.on("change",c));return()=>{d.forEach(f=>f()),fn(o)}}),r}function qw(n){er.current=[],n();const a=$1(er.current,n);return er.current=void 0,a}function il(n,a,r,o){if(typeof n=="function")return qw(n);const c=typeof a=="function"?a:kT(a,r,o);return Array.isArray(n)?Dy(n,c):Dy([n],([d])=>c(d))}function Dy(n,a){const r=Ja(()=>[]);return $1(n,()=>{r.length=0;const o=n.length;for(let c=0;c<o;c++)r[c]=n[c].get();return a(r)})}function zy(n,a={}){const{isStatic:r}=X.useContext(gr),o=()=>re(n)?n.get():n;if(r)return il(o);const c=X1(o());return X.useInsertionEffect(()=>BT(c,n,a),[c,JSON.stringify(a)]),c}const Xw={some:0,all:1};function $w(n,a,{root:r,margin:o,amount:c="some"}={}){const d=Ad(n),f=new WeakMap,p=m=>{m.forEach(y=>{const b=f.get(y.target);if(y.isIntersecting!==!!b)if(y.isIntersecting){const S=a(y.target,y);typeof S=="function"?f.set(y.target,S):g.unobserve(y.target)}else typeof b=="function"&&(b(y),f.delete(y.target))})},g=new IntersectionObserver(p,{root:r,rootMargin:o,threshold:typeof c=="number"?c:Xw[c]});return d.forEach(m=>g.observe(m)),()=>g.disconnect()}function un(n,{root:a,margin:r,amount:o,once:c=!1,initial:d=!1}={}){const[f,p]=X.useState(d);return X.useEffect(()=>{if(!n.current||c&&f)return;const g=()=>(p(!0),c?void 0:()=>p(!1)),m={root:a&&a.current||void 0,margin:r,amount:o};return $w(n.current,g,m)},[a,n,r,c,o]),f}const Qw=oe`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Kw=oe`
  0%, 100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.6;
  }
`,Zw=C.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${V.zIndex.sticky};
  max-width: calc(100vw - 48px);
  
  @media (max-width: ${V.breakpoints.tablet}) {
    top: auto;
    bottom: 24px;
    max-width: calc(100vw - 48px);
  }
  
  @media (max-width: 480px) {
    bottom: 16px;
    max-width: calc(100vw - 32px);
  }
`,Pw=C(O.nav)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  border-radius: 24px;
  
  /* Multi-layer glass effect - uses CSS variables */
  background: var(--nav-bg);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  
  /* Liquid border with gradient */
  border: 1px solid transparent;
  background-clip: padding-box;
  
  /* Outer glow */
  box-shadow: var(--nav-shadow);
  transition: background 0.4s ease, box-shadow 0.4s ease;
    
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
  
  @media (max-width: ${V.breakpoints.tablet}) {
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
    max-width: 100%;
    
    &::before {
      border-radius: 18px;
    }
  }
`,Jw=C(O.a)`
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
    animation: ${Qw} 1.5s ease infinite;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  @media (max-width: ${V.breakpoints.tablet}) {
    width: 38px;
    height: 38px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;
  }
`,Ww=C.img`
  height: 28px;
  width: auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${V.breakpoints.tablet}) {
    height: 24px;
  }
  
  @media (max-width: 480px) {
    height: 20px;
  }
`,Fw=C.div`
  display: flex;
  align-items: center;
  gap: 2px;
  
  @media (max-width: ${V.breakpoints.tablet}) {
    gap: 1px;
  }
  
  @media (max-width: 480px) {
    gap: 0;
  }
`,Iw=C(O.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  font-size: 13px;
  font-weight: ${V.typography.fontWeight.medium};
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 14px;
  transition: color 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  
  ${({$isActive:n})=>n&&Ie`
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
  
  @media (max-width: ${V.breakpoints.tablet}) {
    padding: 10px 12px;
    font-size: 12px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 10px;
    font-size: 11px;
    border-radius: 10px;
    flex-shrink: 1;
    min-width: 0;
  }
  
  @media (max-width: 360px) {
    padding: 8px 8px;
    font-size: 10px;
  }
`,t3=C(O.div)`
  position: absolute;
  inset: 2px;
  border-radius: 12px;
  z-index: -1;
  
  /* Liquid glass active state */
  background: linear-gradient(
    135deg,
    rgba(42, 157, 143, 0.2) 0%,
    rgba(59, 180, 177, 0.15) 50%,
    rgba(67, 97, 165, 0.2) 100%
  );
  
  /* Subtle inner glow */
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.1),
    0 0 20px -5px rgba(42, 157, 143, 0.4);
    
  /* Breathing animation */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: inherit;
    animation: ${Kw} 3s ease-in-out infinite;
    pointer-events: none;
  }
  
  @media (max-width: ${V.breakpoints.tablet}) {
    border-radius: 10px;
    
    &::after {
      border-radius: 10px;
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 6px;
    
    &::after {
      border-radius: 6px;
    }
  }
`,e3=C(O.button)`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  overflow: hidden;
  flex-shrink: 0;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(42, 157, 143, 0.1) 0%,
      rgba(67, 97, 165, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 14px;
  }
  
  &:hover::before {
    opacity: 1;
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
  
  @media (max-width: ${V.breakpoints.tablet}) {
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
`,jy=[{label:"About",href:"#about"},{label:"Skills",href:"#technologyproficiency"},{label:"Experience",href:"#professionalexperience"},{label:"Projects",href:"#mostproudof"},{label:"Contact",href:"#contact"}],n3=()=>{const[n,a]=X.useState(""),r=X.useRef(null),{isDark:o,toggleTheme:c}=k2();X.useEffect(()=>{const p=()=>{const g=jy.map(m=>m.href.replace("#",""));for(const m of[...g].reverse()){const y=document.getElementById(m);if(y&&y.getBoundingClientRect().top<=150){a(m);return}}a("")};return window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[]);const d=p=>{const g=p.currentTarget.getBoundingClientRect(),m=(p.clientX-g.left)/g.width*100,y=(p.clientY-g.top)/g.height*100;p.currentTarget.style.setProperty("--mouse-x",`${m}%`),p.currentTarget.style.setProperty("--mouse-y",`${y}%`)},f=(p,g)=>{p.preventDefault(),document.querySelector(g)?.scrollIntoView({behavior:"smooth"})};return x.jsx(Zw,{ref:r,children:x.jsxs(Pw,{initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:[.25,.1,.25,1],delay:.2},children:[x.jsx(Jw,{href:"#home",onClick:p=>f(p,"#home"),whileHover:{scale:1.05},whileTap:{scale:.95},children:x.jsx(Ww,{src:"/images/logo.png",alt:"PN"})}),x.jsx(Fw,{children:jy.map(p=>{const g=n===p.href.replace("#","");return x.jsxs(Iw,{href:p.href,$isActive:g,onClick:m=>f(m,p.href),onMouseMove:d,whileHover:{scale:1.02},whileTap:{scale:.98},children:[g&&x.jsx(t3,{layoutId:"navActive",initial:!1,transition:{type:"spring",stiffness:500,damping:35}}),x.jsx("span",{style:{position:"relative",zIndex:1},children:p.label})]},p.label)})}),x.jsx(e3,{onClick:c,whileHover:{scale:1.05},whileTap:{scale:.95},title:o?"Switch to light mode":"Switch to dark mode",children:x.jsx(lr,{mode:"wait",children:o?x.jsxs(O.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.3},children:[x.jsx("circle",{cx:"12",cy:"12",r:"5"}),x.jsx("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]},"sun"):x.jsx(O.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.3},children:x.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})},"moon")})})]})})},Q1=oe`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,i3=oe`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`,a3=C(O.footer)`
  padding: 48px 24px;
  padding-bottom: 100px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 56px 80px;
    padding-bottom: 56px;
  }
`,s3=C.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 1px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${Q1} 3s ease infinite;
  opacity: 0.6;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    width: 140px;
  }
`,r3=C(O.div)`
  max-width: ${V.maxWidth.wide};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,o3=C(O.p)`
  font-size: 13px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
  letter-spacing: 0.01em;
  line-height: 1.6;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    font-size: 14px;
  }
`,l3=C(O.span)`
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
`,u3=C.span`
  color: #ef4444;
  font-size: 13px;
  display: inline-block;
  animation: ${i3} 1.8s ease-in-out infinite;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    font-size: 14px;
  }
`,c3=C.span`
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${Q1} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${V.typography.fontWeight.semibold};
`,f3=()=>x.jsxs(a3,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:[x.jsx(s3,{}),x.jsx(r3,{children:x.jsxs(o3,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:["Designed & Built With",x.jsx(l3,{whileHover:{scale:1.2},transition:{type:"spring",stiffness:400,damping:15},children:x.jsx(u3,{children:"♥"})}),"By ",x.jsx(c3,{children:"Pranshu"})," • © 2025"]})})]}),d3=oe`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`,h3=oe`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`,p3=C(O.div)`
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
`,m3=C(O.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(42, 157, 143, 0.08) 0%,
    rgba(67, 97, 165, 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
`,g3=C(O.div)`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,y3=C(O.div)`
  position: absolute;
  width: ${({$size:n})=>n}px;
  height: ${({$size:n})=>n}px;
  border-radius: 50%;
  background: ${({$color:n})=>n};
  filter: blur(1px);
`,v3=C(O.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,b3=C(O.div)`
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    width: 180px;
    height: 180px;
  }
`,x3=C(O.div)`
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
`,S3=C(O.div)`
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
`,yf=C(O.div)`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px solid rgba(42, 157, 143, 0.3);
  animation: ${h3} 2s ease-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`,T3=C(O.img)`
  width: 90px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 25px rgba(42, 157, 143, 0.5));
  
  @media (min-width: ${V.breakpoints.tablet}) {
    width: 110px;
  }
`,A3=C(O.div)`
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
    animation: ${d3} 2s ease-in-out infinite;
  }
`,w3={initial:{opacity:1},animate:{opacity:1},exit:{opacity:0,transition:{duration:.6,ease:[.4,0,.2,1],when:"afterChildren"}}},E3={initial:{opacity:0,scale:1.5},animate:{opacity:1,scale:1,transition:{duration:1.5}},exit:{opacity:0,scale:.9,transition:{duration:.5,ease:[.4,0,.2,1]}}},C3={initial:{},animate:{},exit:{scale:.8,opacity:0,filter:"blur(15px)",transition:{duration:.5,ease:[.4,0,.2,1]}}},M3={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},D3={initial:{opacity:0,scale:0,rotate:-180},animate:{opacity:1,scale:1,rotate:0,transition:{type:"spring",stiffness:100,damping:15,delay:.2}}},z3={initial:{opacity:0,scale:.3,rotateY:-90,filter:"blur(10px)"},animate:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:12,delay:.4}}},j3=({onComplete:n})=>{const[a,r]=X.useState(!0),o=Array.from({length:20},(d,f)=>({id:f,x:Math.random()*100,y:Math.random()*100,size:Math.random()*4+2,color:f%3===0?"rgba(42, 157, 143, 0.4)":f%3===1?"rgba(59, 180, 177, 0.3)":"rgba(67, 97, 165, 0.3)",duration:Math.random()*3+2,delay:Math.random()*2}));X.useEffect(()=>{const d=setTimeout(()=>{r(!1)},2200);return()=>clearTimeout(d)},[]);const c=()=>{n()};return x.jsx(lr,{onExitComplete:c,children:a&&x.jsxs(p3,{variants:w3,initial:"initial",animate:"animate",exit:"exit",children:[x.jsx(m3,{variants:E3,initial:"initial",animate:"animate",exit:"exit"}),x.jsx(g3,{initial:{opacity:1},exit:{opacity:0,transition:{duration:.3}},children:o.map(d=>x.jsx(y3,{$size:d.size,$color:d.color,style:{left:`${d.x}%`,top:`${d.y}%`},initial:{opacity:0,scale:0},animate:{opacity:[0,.8,0],scale:[0,1,0],y:[0,-100]},transition:{duration:d.duration,delay:d.delay,repeat:1/0,repeatDelay:Math.random()*2}},d.id))}),x.jsx(v3,{variants:C3,initial:"initial",animate:"animate",exit:"exit",children:x.jsxs(b3,{children:[x.jsx(x3,{variants:M3,initial:"initial",animate:"animate"}),x.jsx(yf,{}),x.jsx(yf,{}),x.jsx(yf,{}),x.jsx(S3,{variants:D3,initial:"initial",animate:"animate"}),x.jsx(T3,{src:"/images/logo.png",alt:"PN",variants:z3,initial:"initial",animate:"animate"}),x.jsx(A3,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:.5}})]})})]})})},R3=oe`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,O3=oe`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(3deg);
  }
`,V3=oe`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`,_3=oe`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,k3=C.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 24px 40px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  overflow: hidden;
  position: relative;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 80px 48px 60px;
  }
  
  @media (min-width: ${V.breakpoints.desktop}) {
    padding: 100px 48px 60px;
  }
`,B3=C(O.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120vw;
  height: 120vh;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse at 60% 40%,
    rgba(42, 157, 143, 0.08) 0%,
    rgba(67, 97, 165, 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 0;
`,N3=C.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,L3=C.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    grid-template-columns: 1fr 400px;
    gap: 64px;
  }
  
  @media (min-width: ${V.breakpoints.desktop}) {
    grid-template-columns: 1fr 480px;
    gap: 80px;
  }
`,U3=C.div`
  perspective: 1000px;
`,H3=C(O.div)`
  display: flex;
  justify-content: center;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`,G3=C(O.div)`
  position: relative;
  width: 280px;
  height: 280px;
  
  @media (min-width: ${V.breakpoints.mobile}) {
    width: 340px;
    height: 340px;
  }
  
  @media (min-width: ${V.breakpoints.tablet}) {
    width: 380px;
    height: 380px;
  }
  
  @media (min-width: ${V.breakpoints.desktop}) {
    width: 440px;
    height: 440px;
  }
`,Y3=C(O.div)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
  will-change: transform;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
`,q3=C(O.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: grayscale(100%);
  transition: filter 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
  will-change: transform, filter;
  
  &:hover {
    filter: grayscale(0%);
  }
`,X3=C.div`
  position: absolute;
  inset: -4px;
  border-radius: 28px;
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
    animation: ${R3} 6s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: var(--bg-primary);
    border-radius: 24px;
    transition: background-color 0.4s ease;
  }
`,qo=C(O.div)`
  position: absolute;
  border-radius: 16px;
  z-index: -2;
  animation: ${O3} 5s ease-in-out infinite;
  will-change: transform;
  
  ${({$position:n})=>{switch(n){case"top":return`
          top: -25px;
          right: 15px;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, rgba(42, 157, 143, 0.35), transparent);
          animation-delay: 0s;
        `;case"bottom":return`
          bottom: -20px;
          left: 25px;
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, rgba(67, 97, 165, 0.3), transparent);
          animation-delay: 1.5s;
          border-radius: 14px;
        `;case"left":return`
          top: 35%;
          left: -30px;
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, rgba(59, 180, 177, 0.25), transparent);
          animation-delay: 0.8s;
          border-radius: 12px;
        `;case"right":return`
          bottom: 25%;
          right: -25px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(123, 167, 217, 0.3), transparent);
          animation-delay: 2.2s;
          border-radius: 50%;
        `}}}
  
  @media (max-width: ${V.breakpoints.tablet}) {
    display: none;
  }
`,$3=C(O.div)`
  position: absolute;
  inset: -60px;
  background: radial-gradient(
    ellipse at center,
    rgba(42, 157, 143, 0.2) 0%,
    rgba(67, 97, 165, 0.12) 35%,
    transparent 65%
  );
  z-index: -3;
  animation: ${V3} 3s ease-in-out infinite;
  filter: blur(30px);
  will-change: transform, opacity;
`,Q3=C(O.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;
`,K3=C(O.span)`
  width: 40px;
  height: 2px;
  background: var(--gradient-horizontal);
  border-radius: 1px;
  transform-origin: left;
`,Z3=C(O.span)`
  font-size: 13px;
  font-weight: ${V.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${_3} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,P3=C(O.div)`
  overflow: hidden;
  margin-bottom: 24px;
`,J3=C(O.h1)`
  font-size: clamp(52px, 9vw, 96px);
  font-weight: ${V.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.04em;
  line-height: 0.92;
  transition: color 0.4s ease;
  will-change: transform;
`,W3=C(O.span)`
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
    border-radius: 4px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`,F3=C(O.p)`
  font-size: clamp(17px, 2.2vw, 22px);
  font-weight: ${V.typography.fontWeight.regular};
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 20px;
  transition: color 0.4s ease;
`,I3=C(O.p)`
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--text-tertiary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color 0.4s ease;
  max-width: 680px;
`,tE=C(O.div)`
  display: flex;
  gap: 14px;
  flex-wrap: nowrap;
  margin-bottom: 56px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`,eE=C(O.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--text-primary);
  color: var(--bg-primary);
  font-size: 15px;
  font-weight: ${V.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: ${V.borderRadius.full};
  position: relative;
  overflow: hidden;
  will-change: transform;
  white-space: nowrap;
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    padding: 14px 20px;
    font-size: 14px;
    gap: 8px;
  }
  
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
    transition: transform 0.6s ease;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
    flex-shrink: 0;
    
    @media (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`,nE=C(O.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 26px; /* 2px less than primary to account for 2px border */
  background: transparent;
  color: var(--text-primary);
  font-size: 15px;
  font-weight: ${V.typography.fontWeight.medium};
  text-decoration: none;
  border: 2px solid var(--text-secondary);
  border-radius: ${V.borderRadius.full};
  position: relative;
  overflow: hidden;
  will-change: transform;
  white-space: nowrap;
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    padding: 12px 18px;
    font-size: 14px;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--glass-bg);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: var(--text-primary);
    text-decoration: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`,iE=C(O.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding-top: 36px;
  border-top: 1px solid var(--border);
  transition: border-color 0.4s ease;
  
  @media (min-width: ${V.breakpoints.mobile}) {
    gap: 24px;
  }
  
  @media (min-width: ${V.breakpoints.tablet}) {
    gap: 32px;
  }
`,aE=C(O.div)`
  text-align: center;
  
  @media (min-width: ${V.breakpoints.mobile}) {
    text-align: left;
  }
`,sE=C(O.span)`
  display: block;
  font-size: clamp(26px, 5.5vw, 44px);
  font-weight: ${V.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 8px;
  transition: color 0.4s ease;
  
  @media (min-width: ${V.breakpoints.mobile}) {
    font-size: clamp(30px, 4.5vw, 44px);
  }
`,rE=C.span`
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-transform: uppercase;
  transition: color 0.4s ease;
  
  @media (min-width: ${V.breakpoints.mobile}) {
    font-size: 12px;
  }
`,oE={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},Xo={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,mass:1}}},lE={hidden:{opacity:0,y:80,rotateX:-20},visible:{opacity:1,y:0,rotateX:0,transition:{type:"spring",stiffness:80,damping:20,mass:1.2}}},uE={hidden:{opacity:0,scale:.85,rotateY:-15,filter:"blur(15px)"},visible:{opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:60,damping:20,mass:1.5,delay:.3}}},cE={hidden:{scaleX:0},visible:{scaleX:1,transition:{type:"spring",stiffness:100,damping:20,delay:.1}}},fE={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.6}}},dE={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:150,damping:20}}},hE=({data:n})=>{const a=X.useRef(null),{scrollYProgress:r}=Yw({target:a,offset:["start start","end start"]}),o=il(r,[0,1],["0%","30%"]),c=il(r,[0,.5],[1,.9]),d=il(r,[0,.5],[1,.6]),f=zy(o,{stiffness:100,damping:30}),p=zy(c,{stiffness:100,damping:30}),g=[{value:"9+",label:"Years"},{value:"39+",label:"Engineers Led"},{value:"$2M+",label:"Savings"},{value:"15+",label:"Products"}];return x.jsxs(k3,{id:"home",ref:a,children:[x.jsx(B3,{style:{y:f}}),x.jsx(N3,{children:x.jsxs(L3,{children:[x.jsx(U3,{children:x.jsxs(O.div,{variants:oE,initial:"hidden",animate:"visible",children:[x.jsxs(Q3,{variants:Xo,children:[x.jsx(K3,{variants:cE}),x.jsx(Z3,{children:"Engineering Leader & Architect"})]}),x.jsx(P3,{children:x.jsxs(J3,{variants:lE,children:[x.jsx(W3,{children:n.name.split(" ")[0]}),x.jsx("br",{}),n.name.split(" ").slice(1).join(" ")]})}),x.jsx(F3,{variants:Xo,children:n.designation}),x.jsx(I3,{variants:Xo,children:n.headline}),x.jsxs(tE,{variants:Xo,children:[x.jsxs(eE,{href:"#contact",onClick:m=>{m.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[x.jsx("span",{children:"Get in Touch"}),x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:x.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),x.jsx(nE,{href:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:x.jsx("span",{children:"Download Resume"})})]}),x.jsx(iE,{variants:fE,initial:"hidden",animate:"visible",children:g.map((m,y)=>x.jsxs(aE,{variants:dE,children:[x.jsx(sE,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:100,damping:15,delay:.7+y*.1},children:m.value}),x.jsx(rE,{children:m.label})]},y))})]})}),x.jsx(H3,{variants:uE,initial:"hidden",animate:"visible",style:{scale:p,opacity:d},children:x.jsxs(G3,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:200,damping:20},children:[x.jsx($3,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:.5}}),x.jsx(qo,{$position:"top",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.6}}),x.jsx(qo,{$position:"bottom",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.6}}),x.jsx(qo,{$position:"left",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.9,duration:.6}}),x.jsx(qo,{$position:"right",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:1.1,duration:.6}}),x.jsx(X3,{}),x.jsx(Y3,{whileHover:{scale:1.03},transition:{type:"spring",stiffness:300,damping:25},children:x.jsx(q3,{src:"/images/IMG_0832.PNG",alt:`${n.name} - Engineering Leader & Architect`,whileHover:{scale:1.08},transition:{type:"spring",stiffness:200,damping:20}})})]})})]})})]})};C.div`
  width: 100%;
  max-width: ${({$wide:n})=>n?V.maxWidth.full:V.maxWidth.wide};
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${V.breakpoints.mobile}) {
    padding: 0 32px;
  }

  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 0 48px;
  }
`;const K1={primary:Ie`
    color: ${V.colors.bgPrimary};
    background: ${V.colors.textPrimary};
    
    &:hover {
      background: ${V.colors.textSecondary};
    }
  `,secondary:Ie`
    color: ${V.colors.textPrimary};
    background: transparent;
    border: 1px solid ${V.colors.border};
    
    &:hover {
      border-color: ${V.colors.textSecondary};
    }
  `,ghost:Ie`
    color: ${V.colors.accent};
    background: transparent;
    
    &:hover {
      text-decoration: underline;
    }
  `},Z1={sm:Ie`
    padding: 8px 16px;
    font-size: 13px;
  `,md:Ie`
    padding: 12px 24px;
    font-size: 14px;
  `,lg:Ie`
    padding: 16px 32px;
    font-size: 16px;
  `};C(O.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${V.typography.fontFamily};
  font-weight: ${V.typography.fontWeight.medium};
  border-radius: ${V.borderRadius.full};
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  
  ${({$size:n="md"})=>Z1[n]}
  ${({$variant:n="primary"})=>K1[n]}
`;C(O.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${V.typography.fontFamily};
  font-weight: ${V.typography.fontWeight.medium};
  border-radius: ${V.borderRadius.full};
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  
  ${({$size:n="md"})=>Z1[n]}
  ${({$variant:n="primary"})=>K1[n]}
`;const P1=oe`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,pE=C(O.div)`
  margin-bottom: 64px;
  position: relative;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    margin-bottom: 88px;
  }
`,mE=C.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    gap: 32px;
  }
`,gE=C(O.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(42, 157, 143, 0.15) 0%,
    rgba(67, 97, 165, 0.1) 100%
  );
  border: 1px solid rgba(42, 157, 143, 0.2);
  flex-shrink: 0;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }
`,yE=C.span`
  font-size: 14px;
  font-weight: ${V.typography.fontWeight.semibold};
  background: var(--gradient);
  background-size: 200% 200%;
  animation: ${P1} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-variant-numeric: tabular-nums;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    font-size: 16px;
  }
`,vE=C.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,bE=C(O.span)`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-tertiary);
  font-weight: ${V.typography.fontWeight.medium};
  transition: color 0.4s ease;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    font-size: 12px;
    letter-spacing: 0.18em;
  }
`,xE=C(O.h2)`
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: ${V.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.1;
  transition: color 0.4s ease;
  margin: 0;
`,SE=C(O.div)`
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 2px;
  width: 60px;
  background: var(--gradient);
  background-size: 200% 100%;
  animation: ${P1} 3s ease infinite;
  border-radius: 1px;
  transform-origin: left;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    width: 80px;
    bottom: -24px;
  }
`,TE={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},AE={hidden:{opacity:0,scale:.8,filter:"blur(4px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:200,damping:20}}},wE={hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:150,damping:20}}},EE={hidden:{opacity:0,y:20,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},CE={hidden:{scaleX:0,opacity:0},visible:{scaleX:1,opacity:1,transition:{duration:.6,ease:[.25,.1,.25,1],delay:.3}}},ME={About:"Who I Am","Technology Proficiency":"Technical Expertise","Professional Experience":"Career Journey","Most Proud Of":"Featured Work",Projects:"Featured Work",Certifications:"Credentials",Testimonials:"What Others Say",Education:"Academic Background","Educational Qualifications":"Academic Background",Contact:"Get In Touch"},xi=({number:n,title:a,inView:r=!0})=>{const o=ME[a]||"Section";return x.jsxs(pE,{variants:TE,initial:"hidden",animate:r?"visible":"hidden",children:[x.jsxs(mE,{children:[x.jsx(gE,{variants:AE,children:x.jsx(yE,{children:n})}),x.jsxs(vE,{children:[x.jsx(bE,{variants:wE,children:o}),x.jsx(xE,{variants:EE,children:a})]})]}),x.jsx(SE,{variants:CE})]})};C.section`
  padding: 64px 24px;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: ${V.space.section} 80px;
  }
`;C.p`
  font-size: ${V.typography.fontSize.caption};
  font-weight: ${V.typography.fontWeight.medium};
  color: ${V.colors.textTertiary};
  letter-spacing: ${V.typography.letterSpacing.wide};
  text-transform: uppercase;
  margin-bottom: ${V.space.sm};
`;C.h2`
  font-size: ${V.typography.fontSize.headline};
  font-weight: ${V.typography.fontWeight.semibold};
  color: ${V.colors.textPrimary};
  letter-spacing: ${V.typography.letterSpacing.tight};
  line-height: ${V.typography.lineHeight.tight};
`;const DE=oe`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,zE=C.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,jE=C.div`
  max-width: 1200px;
  margin: 0 auto;
`,RE=C(O.div)`
  margin-bottom: 48px;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    margin-bottom: 64px;
  }
`,OE=C(O.div)`
  position: relative;
  padding-left: 36px;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding-left: 56px;
  }
`,VE=C(O.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient);
  background-size: 100% 200%;
  animation: ${DE} 3s ease infinite;
  border-radius: 2px;
  transform-origin: top;
`,_E=C(O.p)`
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: ${V.typography.fontWeight.regular};
  color: var(--text-primary);
  line-height: 1.6;
  letter-spacing: -0.01em;
  font-style: italic;
  transition: color 0.4s ease;
`,kE=C(O.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 64px;
  }
`,Ry=C(O.div)``,Oy=C(O.h3)`
  font-size: 13px;
  font-weight: ${V.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
  transition: color 0.4s ease, border-color 0.4s ease;
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
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`,Vy=C(O.p)`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.85;
  transition: color 0.4s ease;
`,BE=C(O.div)`
  margin-bottom: 48px;
`,NE=C(O.h3)`
  font-size: 13px;
  font-weight: ${V.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
  transition: color 0.4s ease;
`,LE=C(O.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: ${V.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    transition: background-color 0.4s ease, border-color 0.4s ease;
  }
`,UE=C(O.div)`
  background: var(--bg-primary);
  padding: 36px;
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
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
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  @media (min-width: ${V.breakpoints.mobile}) {
    padding: 48px 36px;
  }
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 56px 44px;
  }
`,HE=C(O.h4)`
  font-size: 19px;
  font-weight: ${V.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 18px;
  line-height: 1.35;
  transition: color 0.4s ease;
`,GE=C(O.p)`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color 0.4s ease;
`,YE=C(O.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding-top: 56px;
  border-top: 1px solid var(--border);
  transition: border-color 0.4s ease;
  
  @media (min-width: ${V.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,qE=C(O.p)`
  font-size: 19px;
  color: var(--text-secondary);
  transition: color 0.4s ease;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    font-size: 21px;
  }
`,XE=C(O.a)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: var(--text-primary);
  color: var(--bg-primary);
  font-size: 15px;
  font-weight: ${V.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: ${V.borderRadius.full};
  position: relative;
  overflow: hidden;
  will-change: transform;
  
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
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`,$E={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},QE={hidden:{opacity:0,y:50,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:20,mass:1}}},KE={hidden:{scaleY:0},visible:{scaleY:1,transition:{type:"spring",stiffness:100,damping:20,delay:.2}}},_y={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:n=>({opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20,delay:n*.15}})},ZE={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},PE={hidden:{opacity:0,y:40,scale:.95,filter:"blur(6px)"},visible:{opacity:1,y:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},JE=({data:n})=>{const a=X.useRef(null),r=un(a,{once:!0,margin:"-100px"}),o=X.useRef(null),c=un(o,{once:!0,margin:"-50px"}),d=X.useRef(null),f=un(d,{once:!0,margin:"-50px"}),p=X.useRef(null),g=un(p,{once:!0,margin:"-50px"}),m=n.content.slice(0,3).map(b=>b.replace(/^🔹\s*/,"").trim()),y=[{title:"Product & Project Expertise",text:"Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT."},{title:"Technical Edge",text:"Deep experience leading global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, and DevOps automation."},{title:"Business Outcomes",text:"Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution."}];return x.jsx(zE,{id:"about",ref:a,children:x.jsxs(jE,{children:[x.jsx(xi,{number:"01",title:"About",inView:r}),x.jsx(RE,{ref:o,children:x.jsxs(OE,{initial:"hidden",animate:c?"visible":"hidden",variants:$E,children:[x.jsx(VE,{variants:KE}),x.jsx(_E,{variants:QE,children:m[0]})]})}),x.jsxs(kE,{ref:d,children:[x.jsxs(Ry,{variants:_y,custom:0,initial:"hidden",animate:f?"visible":"hidden",children:[x.jsx(Oy,{initial:{opacity:0,x:-20},animate:f?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Transformation"}),x.jsx(Vy,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:m[1]})]}),x.jsxs(Ry,{variants:_y,custom:1,initial:"hidden",animate:f?"visible":"hidden",children:[x.jsx(Oy,{initial:{opacity:0,x:-20},animate:f?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.15},children:"Philosophy"}),x.jsx(Vy,{initial:{opacity:0,y:20},animate:f?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.25},children:m[2]})]})]}),x.jsxs(BE,{ref:p,children:[x.jsx(NE,{initial:{opacity:0,y:20},animate:g?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20},children:"Key Highlights"}),x.jsx(LE,{variants:ZE,initial:"hidden",animate:g?"visible":"hidden",children:y.map((b,S)=>x.jsxs(UE,{variants:PE,whileHover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},children:[x.jsx(HE,{children:b.title}),x.jsx(GE,{children:b.text})]},S))})]}),x.jsxs(YE,{initial:{opacity:0,y:30},animate:r?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[x.jsx(qE,{children:"Want to know more?"}),x.jsxs(XE,{href:n.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03,backgroundColor:"var(--accent)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[x.jsx("span",{children:n.buttonProps.name}),x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:x.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]})})},WE=C.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,FE=C.div`
  max-width: 1200px;
  margin: 0 auto;
`,IE=C(O.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  
  @media (min-width: ${V.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 72px;
  }
  
  @media (min-width: ${V.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 56px 88px;
  }
`,tC=C(O.div)``,eC=C(O.h3)`
  font-size: 13px;
  font-weight: ${V.typography.fontWeight.semibold};
  color: var(--text-tertiary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 28px;
  position: relative;
  transition: color 0.4s ease;
  
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
    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`,nC=C(O.ul)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,iC=C(O.li)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,aC=C(O.div)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,sC=C(O.span)`
  font-size: 15px;
  color: var(--text-primary);
  transition: color 0.4s ease;
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
    transition: transform 0.3s ease;
  }
`,rC=C(O.span)`
  font-size: 13px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  font-weight: ${V.typography.fontWeight.medium};
  transition: color 0.4s ease;
`,oC=C(O.div)`
  width: 100%;
  height: 3px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
  transition: background-color 0.4s ease;
  position: relative;
`,lC=C(O.div)`
  height: 100%;
  background: var(--gradient-horizontal);
  border-radius: 2px;
  transform-origin: left;
`,uC={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},cC={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18,staggerChildren:.06,delayChildren:.1}}},fC={hidden:{opacity:0,x:-20,filter:"blur(4px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:120,damping:20}}},dC={hidden:{scaleX:0,opacity:0},visible:n=>({scaleX:n/100,opacity:1,transition:{scaleX:{type:"spring",stiffness:50,damping:15,mass:1},opacity:{duration:.3}}})},hC=({data:n})=>{const a=X.useRef(null),r=un(a,{once:!0,margin:"-100px"});return x.jsx(WE,{id:"technologyproficiency",ref:a,children:x.jsxs(FE,{children:[x.jsx(xi,{number:"02",title:"Skills",inView:r}),x.jsx(IE,{variants:uC,initial:"hidden",animate:r?"visible":"hidden",children:n.skills.map((o,c)=>x.jsxs(tC,{variants:cC,custom:c,children:[x.jsx(eC,{initial:{opacity:0,x:-20},animate:r?{opacity:1,x:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.2+c*.08},children:o.category}),x.jsx(nC,{children:o.skills.map((d,f)=>x.jsxs(iC,{variants:fC,whileHover:{x:8,transition:{type:"spring",stiffness:400,damping:25}},children:[x.jsxs(aC,{children:[x.jsx(sC,{children:d.name}),x.jsxs(rC,{initial:{opacity:0,scale:.8},animate:r?{opacity:1,scale:1}:{},transition:{type:"spring",stiffness:150,damping:20,delay:.4+c*.1+f*.05},children:[d.percentage,"%"]})]}),x.jsx(oC,{children:x.jsx(lC,{variants:dC,custom:d.percentage,initial:"hidden",animate:r?"visible":"hidden",transition:{delay:.5+c*.1+f*.06},style:{width:`${d.percentage}%`}})})]},d.name))})]},o.category))})]})})},pC=oe`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(42, 157, 143, 0);
  }
  50% {
    box-shadow: 0 0 20px 5px rgba(42, 157, 143, 0.15);
  }
`,mC=C.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,gC=C.div`
  max-width: 1200px;
  margin: 0 auto;
`,yC=C(O.div)``,vC=C(O.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: border-color 0.4s ease;
  position: relative;
  
  @media (min-width: ${V.breakpoints.tablet}) {
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
  
  &::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover::before {
    transform: scaleY(1);
  }
  
  @media (min-width: ${V.breakpoints.tablet}) {
    &::before {
      left: -48px;
    }
  }
`,bC=C(O.div)``,xC=C(O.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color 0.4s ease;
`,SC=C(O.div)``,TC=C(O.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 10px;
`,AC=C(O.h3)`
  font-size: 22px;
  font-weight: ${V.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.01em;
  transition: color 0.4s ease;
  
  @media (min-width: ${V.breakpoints.tablet}) {
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
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    }
    
    &:hover {
      color: var(--accent);
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
`,wC=C(O.div)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({$isOpen:n})=>n?"var(--accent)":"transparent"};
  border: 1.5px solid ${({$isOpen:n})=>n?"var(--accent)":"var(--border)"};
  flex-shrink: 0;
  will-change: transform, background, border-color;
  
  ${({$isOpen:n})=>n&&Ie`
    animation: ${pC} 2s ease-in-out infinite;
  `}
  
  svg {
    width: 14px;
    height: 14px;
    color: ${({$isOpen:n})=>n?"var(--bg-primary)":"var(--text-secondary)"};
    will-change: transform;
  }
`,EC=C(O.p)`
  font-size: 16px;
  color: var(--accent);
  font-weight: ${V.typography.fontWeight.medium};
  margin-bottom: 6px;
  transition: color 0.4s ease;
`,CC=C(O.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  flex-wrap: wrap;
`,MC=C.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
  font-weight: ${V.typography.fontWeight.medium};
`,DC=C.span`
  font-size: 14px;
  color: var(--text-secondary);
  font-style: italic;
  transition: color 0.4s ease;
`,zC=C(O.p)`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  transition: color 0.4s ease;
  
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
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
`,jC=C(O.div)`
  overflow: hidden;
  will-change: height, opacity;
`,RC=C(O.div)`
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  will-change: transform, opacity;
  transition: border-color 0.4s ease;
`,OC=C(O.ul)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,VC=C(O.li)`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  padding-left: 20px;
  position: relative;
  will-change: transform, opacity;
  transition: color 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 6px;
    height: 6px;
    background: var(--accent);
    border-radius: 50%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  &:hover::before {
    transform: scale(1.3);
    box-shadow: 0 0 10px var(--accent);
  }
`,_C={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12}}},kC={hidden:{opacity:0,y:50,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},BC={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35,mass:1},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},NC={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.08}}},LC={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.12}}},UC={collapsed:{opacity:0,x:-15,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},HC=({data:n})=>{const[a,r]=X.useState(new Set),o=X.useRef(null),c=un(o,{once:!0,margin:"-100px"}),d=f=>{r(p=>{const g=new Set(p);return g.has(f)?g.delete(f):g.add(f),g})};return x.jsx(mC,{id:"professionalexperience",ref:o,children:x.jsxs(gC,{children:[x.jsx(xi,{number:"03",title:"Experience",inView:c}),x.jsx(yC,{variants:_C,initial:"hidden",animate:c?"visible":"hidden",children:n.timeline.map((f,p)=>{const g=a.has(p);return x.jsxs(vC,{variants:kC,onClick:()=>d(p),whileHover:{x:8,transition:{type:"spring",stiffness:300,damping:25}},children:[x.jsx(bC,{children:x.jsx(xC,{initial:{opacity:0,x:-20},animate:c?{opacity:1,x:0}:{},transition:{delay:.2+p*.1},children:f.date})}),x.jsxs(SC,{children:[x.jsxs(TC,{children:[x.jsxs("div",{children:[x.jsx(AC,{children:x.jsx("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",onClick:m=>m.stopPropagation(),children:f.title})}),x.jsx(EC,{children:f.subTitle}),f.previously&&x.jsxs(CC,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.1},children:[x.jsx(MC,{children:"Previously:"}),x.jsx(DC,{children:f.previously})]})]}),x.jsx(wC,{$isOpen:g,animate:{rotate:g?45:0,scale:g?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:x.jsx(O.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:x.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),x.jsx(zC,{dangerouslySetInnerHTML:{__html:f.descriptionSummary}}),x.jsx(lr,{initial:!1,children:g&&x.jsx(jC,{variants:BC,initial:"collapsed",animate:"expanded",exit:"collapsed",children:x.jsx(RC,{variants:NC,children:x.jsx(OC,{variants:LC,initial:"collapsed",animate:"expanded",exit:"collapsed",children:f.description.map((m,y)=>x.jsx(VC,{variants:UC,children:m},y))})})},"content")})]})]},p)})})]})})},GC=C.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,YC=C.div`
  max-width: 1200px;
  margin: 0 auto;
`,qC=C(O.div)`
  display: flex;
  flex-direction: column;
`,XC=C(O.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.4s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  @media (min-width: ${V.breakpoints.tablet}) {
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
`,$C=C(O.div)`
  flex: 1;
`,QC=C(O.h3)`
  font-size: 18px;
  font-weight: ${V.typography.fontWeight.semibold};
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 6px;
  transition: color 0.4s ease;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    font-size: 20px;
  }
`,KC=C(O.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
`,ZC=C(O.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: ${V.typography.fontWeight.medium};
  color: var(--blue);
  text-decoration: none;
  border: 1.5px solid var(--border);
  border-radius: ${V.borderRadius.full};
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--accent-subtle);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: var(--blue);
    text-decoration: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  span, svg {
    position: relative;
    z-index: 1;
  }
  
  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translate(2px, -2px);
  }
`,PC={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},JC={hidden:{opacity:0,x:-40,filter:"blur(8px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},WC=({data:n})=>{const a=X.useRef(null),r=un(a,{once:!0,margin:"-100px"}),o=c=>c.toLowerCase().includes("azure")||c.toLowerCase().includes("microsoft")?"Microsoft":c.toLowerCase().includes("aws")?"Amazon Web Services":"";return x.jsx(GC,{id:"certifications",ref:a,children:x.jsxs(YC,{children:[x.jsx(xi,{number:"05",title:"Certifications",inView:r}),x.jsx(qC,{variants:PC,initial:"hidden",animate:r?"visible":"hidden",children:n.certificateProps.certificateMetaData.map((c,d)=>x.jsxs(XC,{variants:JC,whileHover:{x:12,transition:{type:"spring",stiffness:400,damping:25}},children:[x.jsxs($C,{children:[x.jsx(QC,{children:c.title}),x.jsx(KC,{children:o(c.title)})]}),x.jsxs(ZC,{href:c.buttonProps.link,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},children:[x.jsx("span",{children:"Verify"}),x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[x.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),x.jsx("polyline",{points:"15,3 21,3 21,9"}),x.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]},d))})]})})},J1=oe`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,FC=oe`
  0%, 100% {
    box-shadow: 0 0 20px rgba(42, 157, 143, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(42, 157, 143, 0.2);
  }
`,IC=C.section`
  padding: 64px 24px;
  overflow: hidden;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,tM=C.div`
  max-width: 1200px;
  margin: 0 auto;
`,eM=C(O.div)`
  position: relative;
`,nM=C.div`
  position: relative;
  perspective: 1000px;
`,iM=C(O.article)`
  border-radius: 24px;
  will-change: transform, opacity;
  overflow: hidden;
  position: relative;
  animation: ${FC} 4s ease-in-out infinite;
  
  /* Glass morphism */
  background: var(--glass-bg);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  transition: background 0.4s ease;
  
  /* Border gradient */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1.5px;
    background: var(--gradient);
    background-size: 200% 200%;
    animation: ${J1} 4s ease infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.6;
  }
  
  @media (min-width: ${V.breakpoints.tablet}) {
    border-radius: 28px;
    
    &::before {
      border-radius: 28px;
    }
  }
`,aM=C(O.div)`
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
    background: linear-gradient(
      90deg,
      transparent,
      var(--glass-bg-hover),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 32px 40px;
  }
`,sM=C(O.h3)`
  font-size: 20px;
  font-weight: ${V.typography.fontWeight.semibold};
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.35;
  flex: 1;
  transition: color 0.4s ease;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    font-size: 24px;
  }
`,rM=C(O.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid ${({$isExpanded:n})=>n?"var(--accent)":"var(--border)"};
  background: ${({$isExpanded:n})=>n?"var(--accent-subtle)":"transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  will-change: transform, background, border-color;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: var(--gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({$isExpanded:n})=>n?"var(--accent)":"var(--text-secondary)"};
    will-change: transform;
  }
`,oM=C(O.div)`
  overflow: hidden;
  will-change: height;
`,lM=C(O.div)`
  padding: 0 32px 32px;
  border-top: 1px solid var(--border);
  padding-top: 28px;
  transition: border-color 0.4s ease;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 0 40px 36px;
    padding-top: 32px;
  }
`,uM=C(O.ul)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 36px;
  }
`,cM=C(O.li)`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.75;
  padding-left: 22px;
  position: relative;
  transition: color 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    background: var(--gradient);
    border-radius: 50%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  &:hover::before {
    transform: scale(1.3);
    box-shadow: 0 0 12px var(--accent);
  }
  
  @media (min-width: ${V.breakpoints.tablet}) {
    font-size: 16px;
  }
`,fM=C(O.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 48px;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    gap: 36px;
    margin-top: 56px;
  }
`,ky=C(O.button)`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--glass-bg);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
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
  
  svg {
    width: 22px;
    height: 22px;
    position: relative;
    z-index: 1;
  }
`,dM=C(O.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,hM=C(O.button)`
  width: ${({$isActive:n})=>n?"36px":"12px"};
  height: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: ${({$isActive:n})=>n?"var(--gradient)":"var(--border)"};
  background-size: 200% 200%;
  ${({$isActive:n})=>n&&Ie`
    animation: ${J1} 3s ease infinite;
  `}
  will-change: width, background;
  
  &:hover {
    background: ${({$isActive:n})=>n?"var(--gradient)":"var(--text-tertiary)"};
  }
`,pM={enter:n=>({x:n>0?100:-100,opacity:0,scale:.95,rotateY:n>0?5:-5,filter:"blur(10px)"}),center:{x:0,opacity:1,scale:1,rotateY:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:30}},exit:n=>({x:n<0?100:-100,opacity:0,scale:.95,rotateY:n<0?5:-5,filter:"blur(10px)",transition:{type:"spring",stiffness:300,damping:30}})},mM={collapsed:{height:0,opacity:0,filter:"blur(6px)"},expanded:{height:"auto",opacity:1,filter:"blur(0px)",transition:{height:{type:"spring",stiffness:400,damping:35},opacity:{duration:.25,delay:.05},filter:{duration:.3,delay:.05}}}},gM={collapsed:{opacity:0,y:-15,filter:"blur(5px)"},expanded:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:25,delay:.1}}},yM={collapsed:{opacity:0},expanded:{opacity:1,transition:{staggerChildren:.05,delayChildren:.15}}},vM={collapsed:{opacity:0,x:-20,scale:.97,filter:"blur(4px)"},expanded:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:350,damping:25}}},bM=({data:n})=>{const[[a,r],o]=X.useState([0,0]),[c,d]=X.useState(!1),f=X.useRef(null),p=un(f,{once:!0,margin:"-100px"}),g=S=>{const M=a+S;M>=0&&M<n.content.length&&(o([M,S]),d(!1))},m=S=>{const M=S>a?1:-1;o([S,M]),d(!1)},y=(S,M)=>{M.offset.x>50||M.velocity.x>500?a>0&&g(-1):(M.offset.x<-50||M.velocity.x<-500)&&a<n.content.length-1&&g(1)},b=n.content[a];return x.jsx(IC,{id:"mostproudof",ref:f,children:x.jsxs(tM,{children:[x.jsx(xi,{number:"04",title:"Projects",inView:p}),x.jsxs(eM,{initial:{opacity:0,y:40},animate:p?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:20,delay:.2},children:[x.jsx(nM,{children:x.jsx(lr,{initial:!1,custom:r,mode:"wait",children:x.jsxs(iM,{custom:r,variants:pM,initial:"enter",animate:"center",exit:"exit",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.2,onDragEnd:y,transition:{x:{type:"spring",stiffness:350,damping:30},opacity:{duration:.25},scale:{type:"spring",stiffness:350,damping:30},rotateY:{type:"spring",stiffness:350,damping:30},filter:{duration:.3}},style:{cursor:"grab",touchAction:"pan-y"},whileDrag:{cursor:"grabbing",scale:1.02},children:[x.jsxs(aM,{$isExpanded:c,onClick:()=>d(!c),whileHover:{scale:1.01},transition:{type:"spring",stiffness:400,damping:25},children:[x.jsx(sM,{children:b.title}),x.jsx(rM,{$isExpanded:c,animate:{rotate:c?45:0,scale:c?1.1:1},transition:{type:"spring",stiffness:400,damping:20},whileHover:{scale:1.15},whileTap:{scale:.95},children:x.jsx(O.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:x.jsx("path",{d:"M12 5v14M5 12h14"})})})]}),x.jsx(lr,{initial:!1,children:c&&x.jsx(oM,{variants:mM,initial:"collapsed",animate:"expanded",exit:"collapsed",children:x.jsx(lM,{variants:gM,children:x.jsx(uM,{variants:yM,initial:"collapsed",animate:"expanded",exit:"collapsed",children:b.content.map((S,M)=>x.jsx(cM,{variants:vM,children:S},M))})})})})]},a)})}),x.jsxs(fM,{initial:{opacity:0,y:20},animate:p?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:20,delay:.4},children:[x.jsx(ky,{onClick:()=>g(-1),disabled:a===0,whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:x.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),x.jsx(dM,{children:n.content.map((S,M)=>x.jsx(hM,{$isActive:a===M,onClick:()=>m(M),whileHover:{scale:1.1},whileTap:{scale:.95},animate:{width:a===M?36:12},transition:{type:"spring",stiffness:400,damping:25}},M))}),x.jsx(ky,{onClick:()=>g(1),disabled:a===n.content.length-1,whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:x.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]})]})})},xM=oe`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,SM=C.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,TM=C.div`
  max-width: 1200px;
  margin: 0 auto;
`,AM=C(O.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }
`,wM=C(O.blockquote)`
  padding: 44px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 24px;
  margin: 0;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: var(--gradient);
    background-size: 200% 200%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 0.5;
    animation: ${xM} 3s ease infinite;
  }
  
  &:hover {
    border-color: transparent;
  }
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 52px;
  }
`,EM=C(O.div)`
  font-size: 56px;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 24px;
  font-weight: bold;
`,CM=C(O.p)`
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 28px;
  font-style: italic;
  transition: color 0.4s ease;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    font-size: 18px;
  }
`,MM=C(O.footer)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,DM=C(O.cite)`
  font-size: 16px;
  font-weight: ${V.typography.fontWeight.semibold};
  color: var(--text-primary);
  font-style: normal;
  transition: color 0.4s ease;
`,zM=C(O.span)`
  font-size: 14px;
  color: var(--text-tertiary);
  transition: color 0.4s ease;
`,jM={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},RM={hidden:{opacity:0,y:50,scale:.95,filter:"blur(10px)"},visible:{opacity:1,y:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},OM={hidden:{opacity:0,scale:.5,filter:"blur(4px)"},visible:{opacity:.5,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:150,damping:15}}},VM={hidden:{opacity:0,y:15,filter:"blur(4px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18,delay:.1}}},_M=({data:n})=>{const a=X.useRef(null),r=un(a,{once:!0,margin:"-100px"});return x.jsx(SM,{id:"testimonials",ref:a,children:x.jsxs(TM,{children:[x.jsx(xi,{number:"06",title:"Testimonials",inView:r}),x.jsx(AM,{variants:jM,initial:"hidden",animate:r?"visible":"hidden",children:n.quoteProps.quoteMetaData.map((o,c)=>x.jsxs(wM,{variants:RM,whileHover:{y:-10,scale:1.02,transition:{type:"spring",stiffness:300,damping:20}},children:[x.jsx(EM,{variants:OM,children:'"'}),x.jsx(CM,{variants:VM,children:o.quote}),x.jsxs(MM,{children:[x.jsx(DM,{initial:{opacity:0,x:-10},animate:r?{opacity:1,x:0}:{},transition:{delay:.3+c*.1},children:o.givenBy}),x.jsx(zM,{initial:{opacity:0,x:-10},animate:r?{opacity:1,x:0}:{},transition:{delay:.35+c*.1},children:o.subTitleGivenBy})]})]},c))})]})})},kM=C.section`
  padding: 64px 24px;
  background: var(--bg-secondary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,BM=C.div`
  max-width: 1200px;
  margin: 0 auto;
`,NM=C(O.div)`
  display: flex;
  flex-direction: column;
`,LM=C(O.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.4s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: var(--gradient);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (min-width: ${V.breakpoints.tablet}) {
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
`,UM=C(O.span)`
  font-size: 15px;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  transition: color 0.4s ease;
  font-weight: ${V.typography.fontWeight.medium};
`,HM=C(O.div)``,GM=C(O.h3)`
  font-size: 20px;
  font-weight: ${V.typography.fontWeight.semibold};
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
  transition: color 0.4s ease;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    font-size: 22px;
  }
`,YM=C(O.p)`
  font-size: 16px;
  color: var(--text-secondary);
  transition: color 0.4s ease;
`,qM={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12}}},XM={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},$M={hidden:{opacity:0,x:-20,filter:"blur(4px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18,delay:.1}}},QM=({data:n})=>{const a=X.useRef(null),r=un(a,{once:!0,margin:"-100px"});return x.jsx(kM,{id:"educationalqualifications",ref:a,children:x.jsxs(BM,{children:[x.jsx(xi,{number:"07",title:"Education",inView:r}),x.jsx(NM,{variants:qM,initial:"hidden",animate:r?"visible":"hidden",children:n.timeline.map((o,c)=>x.jsxs(LM,{variants:XM,whileHover:{x:16,transition:{type:"spring",stiffness:400,damping:25}},children:[x.jsx(UM,{initial:{opacity:0,y:10},animate:r?{opacity:1,y:0}:{},transition:{delay:.2+c*.1},children:o.date}),x.jsxs(HM,{variants:$M,children:[x.jsx(GM,{children:o.title}),x.jsx(YM,{children:o.subTitle})]})]},c))})]})})},W1=oe`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,KM=oe`
  0%, 100% {
    box-shadow: 0 0 20px rgba(42, 157, 143, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(42, 157, 143, 0.2);
  }
`,ZM=C.section`
  padding: 64px 24px;
  background: var(--bg-primary);
  transition: background-color 0.4s ease;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    padding: 80px 48px;
  }
`,PM=C.div`
  max-width: 1200px;
  margin: 0 auto;
`,JM=C(O.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 72px;
  
  @media (min-width: ${V.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`,WM=C(O.div)``,FM=C(O.h3)`
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: ${V.typography.fontWeight.bold};
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  transition: color 0.4s ease;
`,IM=C(O.p)`
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 36px;
  transition: color 0.4s ease;
`,tD=C(O.a)`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-size: 19px;
  font-weight: ${V.typography.fontWeight.medium};
  text-decoration: none;
  
  span {
    background: var(--gradient);
    background-size: 200% 200%;
    animation: ${W1} 4s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  svg {
    width: 22px;
    height: 22px;
    color: var(--accent);
    transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  &:hover svg {
    transform: translateX(8px);
  }
`,eD=C(O.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`,nD=C(O.a)`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 20px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient);
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
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
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    border-color: transparent;
    text-decoration: none;
  }
  
  &:hover::after {
    opacity: 0.8;
    animation: ${W1} 3s ease infinite;
  }
`,iD=C(O.div)`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-subtle);
  border-radius: 16px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  animation: ${KM} 4s ease-in-out infinite;
  
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
  
  svg {
    width: 24px;
    height: 24px;
    color: var(--cyan);
    position: relative;
    z-index: 1;
  }
`,aD=C(O.div)`
  position: relative;
  z-index: 1;
`,sD=C(O.span)`
  display: block;
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  transition: color 0.4s ease;
`,rD=C(O.span)`
  font-size: 17px;
  font-weight: ${V.typography.fontWeight.medium};
  color: var(--text-primary);
  transition: color 0.4s ease;
`,By={mail:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[x.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),x.jsx("path",{d:"M22 6L12 13 2 6"})]}),phone:x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:x.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),linkedin:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[x.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"}),x.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),x.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),location:x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[x.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),x.jsx("circle",{cx:"12",cy:"10",r:"3"})]})},oD={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},lD={hidden:{opacity:0,y:40,filter:"blur(8px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:80,damping:18}}},uD={hidden:{opacity:0,x:30,scale:.95,filter:"blur(4px)"},visible:{opacity:1,x:0,scale:1,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:18}}},cD=({data:n})=>{const a=X.useRef(null),r=un(a,{once:!0,margin:"-100px"}),o=f=>By[f.toLowerCase()]||By.mail,c=f=>({mail:"Email",phone:"Phone",linkedin:"LinkedIn",location:"Location"})[f.toLowerCase()]||f,d=n.contactMetaData.find(f=>f.icon.toLowerCase()==="mail");return x.jsx(ZM,{id:"contact",ref:a,children:x.jsxs(PM,{children:[x.jsx(xi,{number:"08",title:"Contact",inView:r}),x.jsxs(JM,{variants:oD,initial:"hidden",animate:r?"visible":"hidden",children:[x.jsxs(WM,{variants:lD,children:[x.jsx(FM,{initial:{opacity:0,y:30},animate:r?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:18},children:"Let's work together"}),x.jsx(IM,{initial:{opacity:0,y:20},animate:r?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:18,delay:.1},children:"Have a project in mind or want to discuss opportunities? I'd love to hear from you."}),d&&x.jsxs(tD,{href:d.href,initial:{opacity:0,y:20},animate:r?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:80,damping:18,delay:.2},whileHover:{scale:1.02},whileTap:{scale:.98},children:[x.jsx("span",{children:d.content}),x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:x.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),x.jsx(eD,{children:n.contactMetaData.filter(f=>f.icon.toLowerCase()!=="phone").map((f,p)=>x.jsxs(nD,{href:f.href,target:f.href.startsWith("http")?"_blank":void 0,rel:f.href.startsWith("http")?"noopener noreferrer":void 0,variants:uD,custom:p,initial:"hidden",animate:r?"visible":"hidden",transition:{delay:.3+p*.1},whileHover:{x:12,scale:1.02,transition:{type:"spring",stiffness:400,damping:25}},whileTap:{scale:.98},children:[x.jsx(iD,{whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:20},children:o(f.icon)}),x.jsxs(aD,{children:[x.jsx(sD,{children:c(f.icon)}),x.jsx(rD,{children:f.content})]})]},p))})]})]})})},fD={sectionTitle:"About Me",content:["🔹  I specialize in crafting multi-tenant, event-driven, and Micro-Services architectures on Azure and AWS, enabling real-time intelligence at scale. My leadership has accelerated delivery velocity by 25% and nurtured high-performing teams of 39+ engineers across international locations.","An expert in transforming monoliths into cloud-native Micro-Services, designing AI-driven orchestration platforms, and modernizing data pipelines using Spark, Databricks, and real-time analytics.","Passionate about balancing technical depth with business outcomes, aligning architecture roadmaps with OKRs, and embedding security and compliance (SOC2, InfoSec) across the SDLC.",`💡 Key Highlights: 
 ✅ Product & Project Expertise — Architected and launched 15+ SaaS products/modules, including McKinsey's Promotion Advisor and Condeco Connect, delivering measurable business impact through advanced analytics, ML, and IoT. 
 
 ✅ Technical Edge — Deep experience leading and mentoring global engineering teams to build MicroServices, ETL platforms, real-time analytics, secure APIs, and large-scale IoT solutions using Azure, Node.JS, C#, Python, Spark/Databricks, Docker/Kubernetes, and DevOps automation. 
 
 ✅ Business Outcomes — Consistently delivered $2M+ annual savings, 70% deployment risk reduction, 25%+ efficiency gains, and multi-region product launches by integrating architecture vision with hands-on execution.`],buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/resume_pn.pdf",name:"Download Resume"}},dD={sectionTitle:"Licenses & Certifications",certificateProps:{certificateMetaData:[{imageProps:{height:240,width:240,source:"azure-data-engineer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/e874a171d923b2a0",name:"Credential"},title:"Microsoft Certified: Azure Data Engineer Associate"},{imageProps:{height:240,width:240,source:"azure-developer-associate.png"},buttonProps:{link:"https://learn.microsoft.com/en-us/users/pranshunijhawan-8334/credentials/d0e6186a5d8110bb",name:"Credential"},title:"Microsoft Certified: Azure Developer Associate"},{imageProps:{height:170,width:170,source:"AWS-Developer-Associate.png"},buttonProps:{link:"https://www.pranshunijhawan.dev/static/pdf/AWS%20Certified%20Developer%20-%20Associate%20certificate.pdf",name:"Credential"},title:"AWS Certified: Developer Associate"}]}},hD={sectionTitle:"Contact Me",contactMetaData:[{icon:"Phone",content:"+91-9999966272",href:"tel:+91-9999966272"},{icon:"Email",content:"mail@pranshunijhawan.dev",href:"mailto:mail@pranshunijhawan.dev"},{icon:"LinkedIn",content:"@pranshunijhawan",href:"https://www.linkedin.com/in/pranshunijhawan/"},{icon:"Location",content:"India",href:"http://maps.google.com/?q=India"}]},pD={title:"Educational Qualifications",timeline:[{title:"B.Tech, Computer Science and Engineering",subTitle:"Gurgaon Institute of Technology & Management",date:"2012 - 2016"},{title:"Senior Secondary 12th",subTitle:"St PBN Public School, Gurgaon",date:"2012"},{title:"Higher Secondary 10th",subTitle:"Blue Bells Model School, Gurgaon",date:"2010",last:!0}]},mD={name:"Pranshu Nijhawan",designation:"Designing for Scale, Leading for Impact",headline:"Strategic Engineering Leader with 9+ years of experience architecting scalable SaaS platforms, leading global teams, and driving multimillion-dollar cost optimizations. Expert in cloud-native transformations, data-intensive systems, and multi-tenant architectures that enable real-time intelligence and business growth. Proven track record of reducing operational costs by $2M+, improving delivery velocity by 25%, and mentoring high-performing engineering teams.",buttonProps:{link:"#contactme",name:"Contact Me",target:"none"},selfImageSource:"IMG_0470.jpg"},gD={sectionTitle:"Most Proud Of",content:[{id:1,title:"SearchSphere – Multi-Tenant Search Platform with RAG and Vectorization",content:["Designed and architected a fully configurable multi-tenant search platform using TypeScript, Node.js, and PostgreSQL.","Implemented vectorization and Retrieval Augmented Generation (RAG) to enable intelligent global and dimension-based search capabilities.","Enabled onboarding of new search dimensions dynamically via configuration, eliminating the need for code changes.","Successfully decommissioned Elasticsearch, achieving platform simplification and over $2 million in cost savings.","Built for high scalability, supporting tenant isolation and extensibility without compromising performance."]},{id:2,title:"Zero-Downtime ETL Platform – Scalable Blue/Green Data Processing at Scale",content:["Engineered a highly scalable and fault-tolerant ETL platform using Databricks, Spark, Azure Data Factory, and PostgreSQL.","Designed around a Blue/Green deployment strategy to ensure zero downtime during data ingestion and transformation cycles.","Processed 200+ million records across 100+ tables in under 15 minutes using Change Data Capture (CDC) and dynamic schema allocation techniques.","Enabled seamless schema evolution and pipeline reusability across multiple tenants and data domains.","Delivered a production-grade solution with operational efficiency, reliability, and real-time recovery capabilities."]},{id:3,title:"Orchestron – AI Orchestrated Modular Data Processing & Explosion Platform",content:["Architected a high-performance data processing and explosion platform using .NET, Apache Spark, and Kubernetes.","Designed a modular, plug-and-play architecture with configurable rules to enable seamless data transformation at scale.","Integrated Generative AI Agents to manage orchestration and rule governance, enabling intelligent, adaptive processing workflows.","Achieved dynamic scalability and reusability across domains through containerized deployments and configuration-driven pipelines.","Delivered a flexible and future-proof platform capable of adapting to evolving data models and transformation logic with minimal effort."]},{id:4,title:"Polymorphic Self-Mutating Encryption Algorithm",content:["Created a highly secured Hybrid Encryption Algorithm, a combination of hashing and dynamic key-based Encryption Algorithm.",'Solve the drawback of traditional Hashing technique to always create a unique hash value with an "Always Unique" based mechanism ignoring the need to store a key as followed in Key Based Encryption technique.']},{id:5,title:"Global Dependency Tracer",content:["Created a highly optimized Dependency Trace writer, based on Aspect-Oriented-Programming (AOP) Paradigm.","Architected using .NET Core's built-in Dependency Injection (DI) Containers by injecting dynamic proxies acting as a Middleware for all service calls."]},{id:6,title:"Dynamic Result Library for IQueryable & IEnumerable Collections",content:["Created a highly customizable library for Non-Generic collections IQueryable & IEnumerable based on concepts of Reflection for transforming Custom Data objects into LINQ compatible Lambda Expressions.","Dynamic Filter: Generate lambda expressions for LINQ's where extension method to filter data based on defined properties and values.","Dynamic Sort: Generate LINQ's ordering extensions with lambda expressions to sort the object in any direction (Ascending & Descending).","Dynamic Select: Generate lambda expressions for LINQ's select extension to fetch only the provided properties and filter the response using Custom Middleware Injection in .NET Core's request cycle.","Fully Compatible for EF Core's Translations."]}]},yD={title:"Professional Experience",timeline:[{title:"McKinsey & Company",subTitle:"Principal Architect I",previously:"Senior Software Engineer II, Senior Software Engineer I",url:"https://www.linkedin.com/company/mckinsey/",date:"March 2022 - Present",descriptionSummary:'At McKinsey, I lead architectural vision for <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/solutions/b2c-pricing-solutions/promotion-performance" target="_blank">Promotion Advisor</a>, a flagship <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/solutions/periscope/overview" target="_blank">Periscope</a> product for CPG and retail clients. My role involves bridging deep technical expertise with strategic client engagement, advising senior product and consulting leaders, and driving solution design for high-stakes RFPs and enterprise implementations. I ensure our technical strategy delivers measurable client impact, while also leading a global team of 39 engineers in strategic technical delivery.',description:["Directed a 39-person team on Promotion Advisor, automating 80% of manual tasks to optimize trade spend and maximize ROI, yielding $2M annual savings through targeted allocation across brands, channels, and geographies.","Engineered machine learning models and Azure-based ETL pipelines to collect, clean, and validate promotion data, enabling scenario planning, impact forecasting, and workflow approvals for superior margin and sales outcomes.","Developed a scalable ETL platform (Databricks, Spark, Azure Data Factory, PostgreSQL) with Blue/Green slotting. Processed 200M+ records across 100+ tables in <15 mins (zero downtime), providing retail clients with timely, accurate data for promotional analytics and strategic decision-making.","Architected Orchestron, a high-performance Data Processing and Explosion platform (.NET, Spark, Kubernetes) with modular, rule-driven design. Utilized Generative AI Agents for intelligent orchestration, automating 80% of manual transformation tasks, enhancing client operational efficiency and insights.","Consulted Fortune 500 consumer-goods clients in North America and Europe, delivering transformations with competitive intelligence and consumer insights for full-lifecycle pricing adjustments."]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Principal Engineer",date:"April 2021 - March 2022",descriptionSummary:'At Eptura, I transformed <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), re-architecting legacy SaaS into cloud-native systems and designing distributed platforms. This directly enhanced product reliability and scalability for global clients, while I also led engineering squads, driving technical excellence and team growth.',description:["Cloud-Native Transformation for Enhanced Client Uptime: Led re-architecture of legacy SaaS to a cloud-native microservices solution on Azure Kubernetes Service (AKS). Achieved 60% faster recovery and significantly enhanced system uptime, critical for client operations.","Global Distributed Release Management System: Engineered and deployed a system (Azure IoT Hub, Serverless Functions, Azure CosmosDB) orchestrating synchronized updates across 300M+ IoT devices globally. Ensured seamless and reliable software delivery to a vast client network.","Led & Mentored Engineering Squads: Directed a team of 20 engineers (4 tech leads) across four product squads. Implemented mentorship, improving team retention by 20% and fostering engineering growth, impacting product quality for clients."]},{title:"Nagarro",url:"https://www.linkedin.com/company/nagarro/",subTitle:"Senior Engineer",date:"December 2019 – April 2021",descriptionSummary:"At Nagarro, I delivered full-stack applications for diverse clients, enhancing user experience and streamlining development. My role involved hands-on development and implementing modern software engineering practices to improve efficiency and reliability of client solutions.",description:["High-Performance Full-Stack Applications: Developed full-stack web applications (Angular, .NET Core, PostgreSQL, Ionic Framework) for e-commerce and HR clients.","CI/CD & IaC for Reliable Client Deployments: Established CI/CD pipelines and Infrastructure as Code (IaC) practices. Reduced deployment failures by 70%, ensuring stable and predictable software releases for client projects."]},{title:"Eptura (formerly Condeco)",url:"https://www.linkedin.com/company/eptura/",subTitle:"Software Engineer",date:"September 2018 – December 2019",descriptionSummary:'During this tenure at Condeco, I focused on core development and optimization of the <a href="https://www.condecosoftware.com/products/book/meeting-room-booking/meeting-room-screens/" target="_blank">Condeco Connect</a> (meeting room booking software), contributing to its scalability and reliability for a rapidly growing customer base.',description:["Scalable Microservices for 3x Customer Growth: Designed and developed microservices (C#, .NET, React, SQL Server) for the workspace SaaS platform. Supported 3x customer scale-up, handling increased user demand.","Optimized CI/CD & Data Models: Maintained CI/CD pipelines and implemented data model optimizations. Resulted in faster, more reliable software releases and improved system performance for client-facing features."]},{title:"Gartner",url:"https://www.linkedin.com/company/gartner/",subTitle:"Associate Software Engineer",date:"May 2017 – August 2018",descriptionSummary:"At Gartner, I contributed to the development of the ClearForce platform (proprietary survey and analytics tool for HR consulting), focusing on improving data accuracy and automating workflows for clients.",description:["Core SaaS Analytics Tool Development: Contributed backend development for ClearForce (C#, .NET Core, React), improving employee survey data accuracy by 60%. Critical for providing data-driven insights to HR clients.","Automated SQL Workflows: Developed and automated SQL workflows (SPs, SQL agent jobs). Saved over 240 engineering hours annually in manual data processing, improving data delivery efficiency for clients."],last:!0,previously:"Intern"}]},vD={sectionTitle:"Technology Proficiency",skills:[{icon:"Architecture",category:"Architecture",skills:[{name:"Microservices Architecture",percentage:100},{name:"Data Lakehouse",percentage:90},{name:"Domain-Driven Design (DDD)",percentage:100},{name:"Multi-Tenant Architecture (Database, Schema, Metadata Resolution)",percentage:90},{name:"Event-Driven Architecture (EDA)",percentage:100},{name:"Serverless",percentage:80}]},{icon:"Frontend",category:"Frontend",skills:[{name:"React",percentage:100},{name:"Angular",percentage:90},{name:"JavaScript",percentage:100},{name:"TypeScript",percentage:100},{name:"Ionic Framework",percentage:60}]},{icon:"Backend",category:"Backend",skills:[{name:"C#",percentage:100},{name:".NET Core",percentage:100},{name:"Node.Js",percentage:80},{name:"Python",percentage:80},{name:"Microservices",percentage:100},{name:"GraphQL",percentage:80}]},{icon:"Database",category:"Database",skills:[{name:"SQL",percentage:100},{name:"NoSQL",percentage:90}]},{icon:"Cloud",category:"Cloud",skills:[{name:"Microsoft Azure",percentage:90},{name:"Amazon Web Services (AWS)",percentage:80}]},{icon:"DataEngineering",category:"Data Engineering",skills:[{name:"Azure Databricks (Apache Spark)",percentage:80},{name:"Azure Datafactory",percentage:70},{name:"Azure Stream Analytics",percentage:70}]}]},bD={sectionTitle:"Testimonials",quoteProps:{quoteMetaData:[{quote:"Pranshu is a standout performer and has demonstrated great sense of ownership while working on any project. His biggest strength is his up-to-date technical skills and his ability to manage conflicts gracefully. It was a pleasure to have him in my team.",givenBy:"Ambica Jain",subTitleGivenBy:"Associate Vice President",source:"LinkedIn"}]}},xD={aboutSection:fD,certifications:dD,contactMe:hD,educationalQualifications:pD,homeSection:mD,mostProudOf:gD,professionalExperience:yD,technologyProficiency:vD,testimonials:bD},Hn=xD;function SD(){const[n,a]=X.useState(!1);return x.jsxs(_2,{children:[x.jsx(O2,{}),!n&&x.jsx(j3,{onComplete:()=>a(!0)}),n&&x.jsxs(x.Fragment,{children:[x.jsx(n3,{}),x.jsxs("main",{style:{position:"relative"},children:[x.jsx(hE,{data:Hn.homeSection}),x.jsx(JE,{data:Hn.aboutSection}),x.jsx(hC,{data:Hn.technologyProficiency}),x.jsx(HC,{data:Hn.professionalExperience}),x.jsx(bM,{data:Hn.mostProudOf}),x.jsx(WC,{data:Hn.certifications}),x.jsx(_M,{data:Hn.testimonials}),x.jsx(QM,{data:Hn.educationalQualifications}),x.jsx(cD,{data:Hn.contactMe})]}),x.jsx(f3,{})]})]})}RS.createRoot(document.getElementById("root")).render(x.jsx(X.StrictMode,{children:x.jsx(SD,{})}));
