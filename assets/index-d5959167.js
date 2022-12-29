(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function wx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Kl={},Tx={get exports(){return Kl},set exports(n){Kl=n}},Ru={},la={},Ex={get exports(){return la},set exports(n){la=n}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),Cx=Symbol.for("react.portal"),bx=Symbol.for("react.fragment"),Ax=Symbol.for("react.strict_mode"),Px=Symbol.for("react.profiler"),Lx=Symbol.for("react.provider"),Dx=Symbol.for("react.context"),Rx=Symbol.for("react.forward_ref"),Ix=Symbol.for("react.suspense"),kx=Symbol.for("react.memo"),Nx=Symbol.for("react.lazy"),tp=Symbol.iterator;function zx(n){return n===null||typeof n!="object"?null:(n=tp&&n[tp]||n["@@iterator"],typeof n=="function"?n:null)}var Og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ug=Object.assign,Bg={};function xo(n,e,t){this.props=n,this.context=e,this.refs=Bg,this.updater=t||Og}xo.prototype.isReactComponent={};xo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};xo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Vg(){}Vg.prototype=xo.prototype;function Od(n,e,t){this.props=n,this.context=e,this.refs=Bg,this.updater=t||Og}var Ud=Od.prototype=new Vg;Ud.constructor=Od;Ug(Ud,xo.prototype);Ud.isPureReactComponent=!0;var np=Array.isArray,Gg=Object.prototype.hasOwnProperty,Bd={current:null},Wg={key:!0,ref:!0,__self:!0,__source:!0};function Hg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gg.call(e,i)&&!Wg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:za,type:n,key:s,ref:o,props:r,_owner:Bd.current}}function Fx(n,e){return{$$typeof:za,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Vd(n){return typeof n=="object"&&n!==null&&n.$$typeof===za}function Ox(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var ip=/\/+/g;function rc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Ox(""+n.key):e.toString(36)}function kl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case za:case Cx:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+rc(o,0):i,np(r)?(t="",n!=null&&(t=n.replace(ip,"$&/")+"/"),kl(r,e,t,"",function(u){return u})):r!=null&&(Vd(r)&&(r=Fx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ip,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",np(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+rc(s,a);o+=kl(s,e,t,l,r)}else if(l=zx(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+rc(s,a++),o+=kl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(n,e,t){if(n==null)return n;var i=[],r=0;return kl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Ux(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var $t={current:null},Nl={transition:null},Bx={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:Bd};Ae.Children={map:Ya,forEach:function(n,e,t){Ya(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ya(n,function(){e++}),e},toArray:function(n){return Ya(n,function(e){return e})||[]},only:function(n){if(!Vd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ae.Component=xo;Ae.Fragment=bx;Ae.Profiler=Px;Ae.PureComponent=Od;Ae.StrictMode=Ax;Ae.Suspense=Ix;Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;Ae.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Ug({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Gg.call(e,l)&&!Wg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:za,type:n.type,key:r,ref:s,props:i,_owner:o}};Ae.createContext=function(n){return n={$$typeof:Dx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Lx,_context:n},n.Consumer=n};Ae.createElement=Hg;Ae.createFactory=function(n){var e=Hg.bind(null,n);return e.type=n,e};Ae.createRef=function(){return{current:null}};Ae.forwardRef=function(n){return{$$typeof:Rx,render:n}};Ae.isValidElement=Vd;Ae.lazy=function(n){return{$$typeof:Nx,_payload:{_status:-1,_result:n},_init:Ux}};Ae.memo=function(n,e){return{$$typeof:kx,type:n,compare:e===void 0?null:e}};Ae.startTransition=function(n){var e=Nl.transition;Nl.transition={};try{n()}finally{Nl.transition=e}};Ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ae.useCallback=function(n,e){return $t.current.useCallback(n,e)};Ae.useContext=function(n){return $t.current.useContext(n)};Ae.useDebugValue=function(){};Ae.useDeferredValue=function(n){return $t.current.useDeferredValue(n)};Ae.useEffect=function(n,e){return $t.current.useEffect(n,e)};Ae.useId=function(){return $t.current.useId()};Ae.useImperativeHandle=function(n,e,t){return $t.current.useImperativeHandle(n,e,t)};Ae.useInsertionEffect=function(n,e){return $t.current.useInsertionEffect(n,e)};Ae.useLayoutEffect=function(n,e){return $t.current.useLayoutEffect(n,e)};Ae.useMemo=function(n,e){return $t.current.useMemo(n,e)};Ae.useReducer=function(n,e,t){return $t.current.useReducer(n,e,t)};Ae.useRef=function(n){return $t.current.useRef(n)};Ae.useState=function(n){return $t.current.useState(n)};Ae.useSyncExternalStore=function(n,e,t){return $t.current.useSyncExternalStore(n,e,t)};Ae.useTransition=function(){return $t.current.useTransition()};Ae.version="18.2.0";(function(n){n.exports=Ae})(Ex);const Vx=wx(la);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx=la,Wx=Symbol.for("react.element"),Hx=Symbol.for("react.fragment"),Xx=Object.prototype.hasOwnProperty,jx=Gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qx={key:!0,ref:!0,__self:!0,__source:!0};function Xg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Xx.call(e,i)&&!qx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Wx,type:n,key:s,ref:o,props:r,_owner:jx.current}}Ru.Fragment=Hx;Ru.jsx=Xg;Ru.jsxs=Xg;(function(n){n.exports=Ru})(Tx);const Yx=Kl.Fragment,Ql=Kl.jsx;var vf={},xf={},$x={get exports(){return xf},set exports(n){xf=n}},Cn={},yf={},Zx={get exports(){return yf},set exports(n){yf=n}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,G){var V=L.length;L.push(G);e:for(;0<V;){var N=V-1>>>1,O=L[N];if(0<r(O,G))L[N]=G,L[V]=O,V=N;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var G=L[0],V=L.pop();if(V!==G){L[0]=V;e:for(var N=0,O=L.length,J=O>>>1;N<J;){var Q=2*(N+1)-1,ie=L[Q],W=Q+1,Te=L[W];if(0>r(ie,V))W<O&&0>r(Te,ie)?(L[N]=Te,L[W]=V,N=W):(L[N]=ie,L[Q]=V,N=Q);else if(W<O&&0>r(Te,V))L[N]=Te,L[W]=V,N=W;else break e}}return G}function r(L,G){var V=L.sortIndex-G.sortIndex;return V!==0?V:L.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=L)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function S(L){if(h=!1,v(L),!x)if(t(l)!==null)x=!0,$(M);else{var G=t(u);G!==null&&Y(S,G.startTime-L)}}function M(L,G){x=!1,h&&(h=!1,g(y),y=-1),m=!0;var V=f;try{for(v(G),d=t(l);d!==null&&(!(d.expirationTime>G)||L&&!z());){var N=d.callback;if(typeof N=="function"){d.callback=null,f=d.priorityLevel;var O=N(d.expirationTime<=G);G=n.unstable_now(),typeof O=="function"?d.callback=O:d===t(l)&&i(l),v(G)}else i(l);d=t(l)}if(d!==null)var J=!0;else{var Q=t(u);Q!==null&&Y(S,Q.startTime-G),J=!1}return J}finally{d=null,f=V,m=!1}}var T=!1,b=null,y=-1,E=5,P=-1;function z(){return!(n.unstable_now()-P<E)}function K(){if(b!==null){var L=n.unstable_now();P=L;var G=!0;try{G=b(!0,L)}finally{G?I():(T=!1,b=null)}}else T=!1}var I;if(typeof _=="function")I=function(){_(K)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,B=R.port2;R.port1.onmessage=K,I=function(){B.postMessage(null)}}else I=function(){p(K,0)};function $(L){b=L,T||(T=!0,I())}function Y(L,G){y=p(function(){L(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,$(M))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var V=f;f=G;try{return L()}finally{f=V}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var V=f;f=L;try{return G()}finally{f=V}},n.unstable_scheduleCallback=function(L,G,V){var N=n.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?N+V:N):V=N,L){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=V+O,L={id:c++,callback:G,priorityLevel:L,startTime:V,expirationTime:O,sortIndex:-1},V>N?(L.sortIndex=V,e(u,L),t(l)===null&&L===t(u)&&(h?(g(y),y=-1):h=!0,Y(S,V-N))):(L.sortIndex=O,e(l,L),x||m||(x=!0,$(M))),L},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(L){var G=f;return function(){var V=f;f=G;try{return L.apply(this,arguments)}finally{f=V}}}})(jg);(function(n){n.exports=jg})(Zx);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg=la,wn=yf;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,ua={};function ls(n,e){eo(n,e),eo(n+"Capture",e)}function eo(n,e){for(ua[n]=e,n=0;n<e.length;n++)Yg.add(e[n])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=Object.prototype.hasOwnProperty,Kx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rp={},sp={};function Qx(n){return Sf.call(sp,n)?!0:Sf.call(rp,n)?!1:Kx.test(n)?sp[n]=!0:(rp[n]=!0,!1)}function Jx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function ey(n,e,t,i){if(e===null||typeof e>"u"||Jx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Lt[n]=new Zt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Lt[e]=new Zt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Lt[n]=new Zt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Lt[n]=new Zt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Lt[n]=new Zt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Lt[n]=new Zt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Lt[n]=new Zt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Lt[n]=new Zt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Lt[n]=new Zt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Wd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Gd,Wd);Lt[e]=new Zt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Gd,Wd);Lt[e]=new Zt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Gd,Wd);Lt[e]=new Zt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Lt[n]=new Zt(n,1,!1,n.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Lt[n]=new Zt(n,1,!1,n.toLowerCase(),null,!0,!0)});function Hd(n,e,t,i){var r=Lt.hasOwnProperty(e)?Lt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ey(e,t,r,i)&&(t=null),i||r===null?Qx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Hi=qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),As=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),wf=Symbol.for("react.suspense"),Tf=Symbol.for("react.suspense_list"),qd=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),Kg=Symbol.for("react.offscreen"),op=Symbol.iterator;function Eo(n){return n===null||typeof n!="object"?null:(n=op&&n[op]||n["@@iterator"],typeof n=="function"?n:null)}var tt=Object.assign,sc;function Vo(n){if(sc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+n}var oc=!1;function ac(n,e){if(!n||oc)return"";oc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{oc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Vo(n):""}function ty(n){switch(n.tag){case 5:return Vo(n.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return n=ac(n.type,!1),n;case 11:return n=ac(n.type.render,!1),n;case 1:return n=ac(n.type,!0),n;default:return""}}function Ef(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ps:return"Fragment";case As:return"Portal";case Mf:return"Profiler";case Xd:return"StrictMode";case wf:return"Suspense";case Tf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Zg:return(n.displayName||"Context")+".Consumer";case $g:return(n._context.displayName||"Context")+".Provider";case jd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case qd:return e=n.displayName||null,e!==null?e:Ef(n.type)||"Memo";case Zi:e=n._payload,n=n._init;try{return Ef(n(e))}catch{}}return null}function ny(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(e);case 8:return e===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Qg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iy(n){var e=Qg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Za(n){n._valueTracker||(n._valueTracker=iy(n))}function Jg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Qg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Jl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Cf(n,e){var t=e.checked;return tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function ap(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=gr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e_(n,e){e=e.checked,e!=null&&Hd(n,"checked",e,!1)}function bf(n,e){e_(n,e);var t=gr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Af(n,e.type,t):e.hasOwnProperty("defaultValue")&&Af(n,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function lp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Af(n,e,t){(e!=="number"||Jl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Go=Array.isArray;function Ws(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+gr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Pf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return tt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function up(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(Go(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:gr(t)}}function t_(n,e){var t=gr(e.value),i=gr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function cp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function n_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?n_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ka,i_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ca(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ry=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(n){ry.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Zo[e]=Zo[n]})});function r_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Zo.hasOwnProperty(n)&&Zo[n]?(""+e).trim():e+"px"}function s_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=r_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var sy=tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Df(n,e){if(e){if(sy[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Rf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var If=null;function Yd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var kf=null,Hs=null,Xs=null;function fp(n){if(n=Ua(n)){if(typeof kf!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=Fu(e),kf(n.stateNode,n.type,e))}}function o_(n){Hs?Xs?Xs.push(n):Xs=[n]:Hs=n}function a_(){if(Hs){var n=Hs,e=Xs;if(Xs=Hs=null,fp(n),e)for(n=0;n<e.length;n++)fp(e[n])}}function l_(n,e){return n(e)}function u_(){}var lc=!1;function c_(n,e,t){if(lc)return n(e,t);lc=!0;try{return l_(n,e,t)}finally{lc=!1,(Hs!==null||Xs!==null)&&(u_(),a_())}}function fa(n,e){var t=n.stateNode;if(t===null)return null;var i=Fu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var Nf=!1;if(Fi)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){Nf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{Nf=!1}function oy(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ko=!1,eu=null,tu=!1,zf=null,ay={onError:function(n){Ko=!0,eu=n}};function ly(n,e,t,i,r,s,o,a,l){Ko=!1,eu=null,oy.apply(ay,arguments)}function uy(n,e,t,i,r,s,o,a,l){if(ly.apply(this,arguments),Ko){if(Ko){var u=eu;Ko=!1,eu=null}else throw Error(ee(198));tu||(tu=!0,zf=u)}}function us(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function f_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function dp(n){if(us(n)!==n)throw Error(ee(188))}function cy(n){var e=n.alternate;if(!e){if(e=us(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return dp(r),n;if(s===i)return dp(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function d_(n){return n=cy(n),n!==null?h_(n):null}function h_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=h_(n);if(e!==null)return e;n=n.sibling}return null}var p_=wn.unstable_scheduleCallback,hp=wn.unstable_cancelCallback,fy=wn.unstable_shouldYield,dy=wn.unstable_requestPaint,st=wn.unstable_now,hy=wn.unstable_getCurrentPriorityLevel,$d=wn.unstable_ImmediatePriority,m_=wn.unstable_UserBlockingPriority,nu=wn.unstable_NormalPriority,py=wn.unstable_LowPriority,g_=wn.unstable_IdlePriority,Iu=null,hi=null;function my(n){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(Iu,n,void 0,(n.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:vy,gy=Math.log,_y=Math.LN2;function vy(n){return n>>>=0,n===0?32:31-(gy(n)/_y|0)|0}var Qa=64,Ja=4194304;function Wo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function iu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Wo(a):(s&=o,s!==0&&(i=Wo(s)))}else o=t&~r,o!==0?i=Wo(o):s!==0&&(i=Wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ti(e),r=1<<t,i|=n[t],e&=~r;return i}function xy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ti(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=xy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ff(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function __(){var n=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),n}function uc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Fa(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ti(e),n[e]=t}function Sy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ti(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Zd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ti(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Fe=0;function v_(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var x_,Kd,y_,S_,M_,Of=!1,el=[],sr=null,or=null,ar=null,da=new Map,ha=new Map,Qi=[],My="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pp(n,e){switch(n){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function bo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ua(e),e!==null&&Kd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function wy(n,e,t,i,r){switch(e){case"focusin":return sr=bo(sr,n,e,t,i,r),!0;case"dragenter":return or=bo(or,n,e,t,i,r),!0;case"mouseover":return ar=bo(ar,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,bo(da.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,bo(ha.get(s)||null,n,e,t,i,r)),!0}return!1}function w_(n){var e=Ur(n.target);if(e!==null){var t=us(e);if(t!==null){if(e=t.tag,e===13){if(e=f_(t),e!==null){n.blockedOn=e,M_(n.priority,function(){y_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Uf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);If=i,t.target.dispatchEvent(i),If=null}else return e=Ua(t),e!==null&&Kd(e),n.blockedOn=t,!1;e.shift()}return!0}function mp(n,e,t){zl(n)&&t.delete(e)}function Ty(){Of=!1,sr!==null&&zl(sr)&&(sr=null),or!==null&&zl(or)&&(or=null),ar!==null&&zl(ar)&&(ar=null),da.forEach(mp),ha.forEach(mp)}function Ao(n,e){n.blockedOn===e&&(n.blockedOn=null,Of||(Of=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,Ty)))}function pa(n){function e(r){return Ao(r,n)}if(0<el.length){Ao(el[0],n);for(var t=1;t<el.length;t++){var i=el[t];i.blockedOn===n&&(i.blockedOn=null)}}for(sr!==null&&Ao(sr,n),or!==null&&Ao(or,n),ar!==null&&Ao(ar,n),da.forEach(e),ha.forEach(e),t=0;t<Qi.length;t++)i=Qi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Qi.length&&(t=Qi[0],t.blockedOn===null);)w_(t),t.blockedOn===null&&Qi.shift()}var js=Hi.ReactCurrentBatchConfig,ru=!0;function Ey(n,e,t,i){var r=Fe,s=js.transition;js.transition=null;try{Fe=1,Qd(n,e,t,i)}finally{Fe=r,js.transition=s}}function Cy(n,e,t,i){var r=Fe,s=js.transition;js.transition=null;try{Fe=4,Qd(n,e,t,i)}finally{Fe=r,js.transition=s}}function Qd(n,e,t,i){if(ru){var r=Uf(n,e,t,i);if(r===null)xc(n,e,i,su,t),pp(n,i);else if(wy(r,n,e,t,i))i.stopPropagation();else if(pp(n,i),e&4&&-1<My.indexOf(n)){for(;r!==null;){var s=Ua(r);if(s!==null&&x_(s),s=Uf(n,e,t,i),s===null&&xc(n,e,i,su,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else xc(n,e,i,null,t)}}var su=null;function Uf(n,e,t,i){if(su=null,n=Yd(i),n=Ur(n),n!==null)if(e=us(n),e===null)n=null;else if(t=e.tag,t===13){if(n=f_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return su=n,null}function T_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hy()){case $d:return 1;case m_:return 4;case nu:case py:return 16;case g_:return 536870912;default:return 16}default:return 16}}var er=null,Jd=null,Fl=null;function E_(){if(Fl)return Fl;var n,e=Jd,t=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Fl=r.slice(n,1<i?1-i:void 0)}function Ol(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function tl(){return!0}function gp(){return!1}function bn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:gp,this.isPropagationStopped=gp,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eh=bn(yo),Oa=tt({},yo,{view:0,detail:0}),by=bn(Oa),cc,fc,Po,ku=tt({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Po&&(Po&&n.type==="mousemove"?(cc=n.screenX-Po.screenX,fc=n.screenY-Po.screenY):fc=cc=0,Po=n),cc)},movementY:function(n){return"movementY"in n?n.movementY:fc}}),_p=bn(ku),Ay=tt({},ku,{dataTransfer:0}),Py=bn(Ay),Ly=tt({},Oa,{relatedTarget:0}),dc=bn(Ly),Dy=tt({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ry=bn(Dy),Iy=tt({},yo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ky=bn(Iy),Ny=tt({},yo,{data:0}),vp=bn(Ny),zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Oy[n])?!!e[n]:!1}function th(){return Uy}var By=tt({},Oa,{key:function(n){if(n.key){var e=zy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ol(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Fy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(n){return n.type==="keypress"?Ol(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ol(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vy=bn(By),Gy=tt({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=bn(Gy),Wy=tt({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),Hy=bn(Wy),Xy=tt({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),jy=bn(Xy),qy=tt({},ku,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=bn(qy),$y=[9,13,27,32],nh=Fi&&"CompositionEvent"in window,Qo=null;Fi&&"documentMode"in document&&(Qo=document.documentMode);var Zy=Fi&&"TextEvent"in window&&!Qo,C_=Fi&&(!nh||Qo&&8<Qo&&11>=Qo),yp=String.fromCharCode(32),Sp=!1;function b_(n,e){switch(n){case"keyup":return $y.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function Ky(n,e){switch(n){case"compositionend":return A_(e);case"keypress":return e.which!==32?null:(Sp=!0,yp);case"textInput":return n=e.data,n===yp&&Sp?null:n;default:return null}}function Qy(n,e){if(Ls)return n==="compositionend"||!nh&&b_(n,e)?(n=E_(),Fl=Jd=er=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C_&&e.locale!=="ko"?null:e.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Jy[n.type]:e==="textarea"}function P_(n,e,t,i){o_(i),e=ou(e,"onChange"),0<e.length&&(t=new eh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Jo=null,ma=null;function e1(n){B_(n,0)}function Nu(n){var e=Is(n);if(Jg(e))return n}function t1(n,e){if(n==="change")return e}var L_=!1;if(Fi){var hc;if(Fi){var pc="oninput"in document;if(!pc){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),pc=typeof wp.oninput=="function"}hc=pc}else hc=!1;L_=hc&&(!document.documentMode||9<document.documentMode)}function Tp(){Jo&&(Jo.detachEvent("onpropertychange",D_),ma=Jo=null)}function D_(n){if(n.propertyName==="value"&&Nu(ma)){var e=[];P_(e,ma,n,Yd(n)),c_(e1,e)}}function n1(n,e,t){n==="focusin"?(Tp(),Jo=e,ma=t,Jo.attachEvent("onpropertychange",D_)):n==="focusout"&&Tp()}function i1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Nu(ma)}function r1(n,e){if(n==="click")return Nu(e)}function s1(n,e){if(n==="input"||n==="change")return Nu(e)}function o1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var si=typeof Object.is=="function"?Object.is:o1;function ga(n,e){if(si(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Sf.call(e,r)||!si(n[r],e[r]))return!1}return!0}function Ep(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Cp(n,e){var t=Ep(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ep(t)}}function R_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?R_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function I_(){for(var n=window,e=Jl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Jl(n.document)}return e}function ih(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function a1(n){var e=I_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&R_(t.ownerDocument.documentElement,t)){if(i!==null&&ih(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Cp(t,s);var o=Cp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var l1=Fi&&"documentMode"in document&&11>=document.documentMode,Ds=null,Bf=null,ea=null,Vf=!1;function bp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vf||Ds==null||Ds!==Jl(i)||(i=Ds,"selectionStart"in i&&ih(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ea&&ga(ea,i)||(ea=i,i=ou(Bf,"onSelect"),0<i.length&&(e=new eh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ds)))}function nl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Rs={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},mc={},k_={};Fi&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function zu(n){if(mc[n])return mc[n];if(!Rs[n])return n;var e=Rs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in k_)return mc[n]=e[t];return n}var N_=zu("animationend"),z_=zu("animationiteration"),F_=zu("animationstart"),O_=zu("transitionend"),U_=new Map,Ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(n,e){U_.set(n,e),ls(e,[n])}for(var gc=0;gc<Ap.length;gc++){var _c=Ap[gc],u1=_c.toLowerCase(),c1=_c[0].toUpperCase()+_c.slice(1);yr(u1,"on"+c1)}yr(N_,"onAnimationEnd");yr(z_,"onAnimationIteration");yr(F_,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(O_,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function Pp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,uy(i,e,void 0,n),n.currentTarget=null}function B_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Pp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Pp(r,a,u),s=l}}}if(tu)throw n=zf,tu=!1,zf=null,n}function He(n,e){var t=e[jf];t===void 0&&(t=e[jf]=new Set);var i=n+"__bubble";t.has(i)||(V_(e,n,2,!1),t.add(i))}function vc(n,e,t){var i=0;e&&(i|=4),V_(t,n,i,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function _a(n){if(!n[il]){n[il]=!0,Yg.forEach(function(t){t!=="selectionchange"&&(f1.has(t)||vc(t,!1,n),vc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[il]||(e[il]=!0,vc("selectionchange",!1,e))}}function V_(n,e,t,i){switch(T_(e)){case 1:var r=Ey;break;case 4:r=Cy;break;default:r=Qd}t=r.bind(null,e,t,n),r=void 0,!Nf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function xc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}c_(function(){var u=s,c=Yd(t),d=[];e:{var f=U_.get(n);if(f!==void 0){var m=eh,x=n;switch(n){case"keypress":if(Ol(t)===0)break e;case"keydown":case"keyup":m=Vy;break;case"focusin":x="focus",m=dc;break;case"focusout":x="blur",m=dc;break;case"beforeblur":case"afterblur":m=dc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Hy;break;case N_:case z_:case F_:m=Ry;break;case O_:m=jy;break;case"scroll":m=by;break;case"wheel":m=Yy;break;case"copy":case"cut":case"paste":m=ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=xp}var h=(e&4)!==0,p=!h&&n==="scroll",g=h?f!==null?f+"Capture":null:f;h=[];for(var _=u,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=fa(_,g),S!=null&&h.push(va(_,S,v)))),p)break;_=_.return}0<h.length&&(f=new m(f,x,null,t,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",f&&t!==If&&(x=t.relatedTarget||t.fromElement)&&(Ur(x)||x[Oi]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=u,x=x?Ur(x):null,x!==null&&(p=us(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(h=_p,S="onMouseLeave",g="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(h=xp,S="onPointerLeave",g="onPointerEnter",_="pointer"),p=m==null?f:Is(m),v=x==null?f:Is(x),f=new h(S,_+"leave",m,t,c),f.target=p,f.relatedTarget=v,S=null,Ur(c)===u&&(h=new h(g,_+"enter",x,t,c),h.target=v,h.relatedTarget=p,S=h),p=S,m&&x)t:{for(h=m,g=x,_=0,v=h;v;v=fs(v))_++;for(v=0,S=g;S;S=fs(S))v++;for(;0<_-v;)h=fs(h),_--;for(;0<v-_;)g=fs(g),v--;for(;_--;){if(h===g||g!==null&&h===g.alternate)break t;h=fs(h),g=fs(g)}h=null}else h=null;m!==null&&Lp(d,f,m,h,!1),x!==null&&p!==null&&Lp(d,p,x,h,!0)}}e:{if(f=u?Is(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var M=t1;else if(Mp(f))if(L_)M=s1;else{M=i1;var T=n1}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=r1);if(M&&(M=M(n,u))){P_(d,M,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Af(f,"number",f.value)}switch(T=u?Is(u):window,n){case"focusin":(Mp(T)||T.contentEditable==="true")&&(Ds=T,Bf=u,ea=null);break;case"focusout":ea=Bf=Ds=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,bp(d,t,c);break;case"selectionchange":if(l1)break;case"keydown":case"keyup":bp(d,t,c)}var b;if(nh)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ls?b_(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(C_&&t.locale!=="ko"&&(Ls||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ls&&(b=E_()):(er=c,Jd="value"in er?er.value:er.textContent,Ls=!0)),T=ou(u,y),0<T.length&&(y=new vp(y,n,null,t,c),d.push({event:y,listeners:T}),b?y.data=b:(b=A_(t),b!==null&&(y.data=b)))),(b=Zy?Ky(n,t):Qy(n,t))&&(u=ou(u,"onBeforeInput"),0<u.length&&(c=new vp("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=b))}B_(d,e)})}function va(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ou(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fa(n,t),s!=null&&i.unshift(va(n,s,r)),s=fa(n,e),s!=null&&i.push(va(n,s,r))),n=n.return}return i}function fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Lp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=fa(t,s),l!=null&&o.unshift(va(t,l,a))):r||(l=fa(t,s),l!=null&&o.push(va(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var d1=/\r\n?/g,h1=/\u0000|\uFFFD/g;function Dp(n){return(typeof n=="string"?n:""+n).replace(d1,`
`).replace(h1,"")}function rl(n,e,t){if(e=Dp(e),Dp(n)!==e&&t)throw Error(ee(425))}function au(){}var Gf=null,Wf=null;function Hf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xf=typeof setTimeout=="function"?setTimeout:void 0,p1=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,m1=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(n){return Rp.resolve(null).then(n).catch(g1)}:Xf;function g1(n){setTimeout(function(){throw n})}function yc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),pa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);pa(e)}function lr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Ip(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var So=Math.random().toString(36).slice(2),ci="__reactFiber$"+So,xa="__reactProps$"+So,Oi="__reactContainer$"+So,jf="__reactEvents$"+So,_1="__reactListeners$"+So,v1="__reactHandles$"+So;function Ur(n){var e=n[ci];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Oi]||t[ci]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ip(n);n!==null;){if(t=n[ci])return t;n=Ip(n)}return e}n=t,t=n.parentNode}return null}function Ua(n){return n=n[ci]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function Fu(n){return n[xa]||null}var qf=[],ks=-1;function Sr(n){return{current:n}}function je(n){0>ks||(n.current=qf[ks],qf[ks]=null,ks--)}function Ge(n,e){ks++,qf[ks]=n.current,n.current=e}var _r={},Ut=Sr(_r),en=Sr(!1),Qr=_r;function to(n,e){var t=n.type.contextTypes;if(!t)return _r;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function tn(n){return n=n.childContextTypes,n!=null}function lu(){je(en),je(Ut)}function kp(n,e,t){if(Ut.current!==_r)throw Error(ee(168));Ge(Ut,e),Ge(en,t)}function G_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,ny(n)||"Unknown",r));return tt({},t,i)}function uu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Qr=Ut.current,Ge(Ut,n),Ge(en,en.current),!0}function Np(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=G_(n,e,Qr),i.__reactInternalMemoizedMergedChildContext=n,je(en),je(Ut),Ge(Ut,n)):je(en),Ge(en,t)}var Pi=null,Ou=!1,Sc=!1;function W_(n){Pi===null?Pi=[n]:Pi.push(n)}function x1(n){Ou=!0,W_(n)}function Mr(){if(!Sc&&Pi!==null){Sc=!0;var n=0,e=Fe;try{var t=Pi;for(Fe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Pi=null,Ou=!1}catch(r){throw Pi!==null&&(Pi=Pi.slice(n+1)),p_($d,Mr),r}finally{Fe=e,Sc=!1}}return null}var Ns=[],zs=0,cu=null,fu=0,In=[],kn=0,Jr=null,Ri=1,Ii="";function Ir(n,e){Ns[zs++]=fu,Ns[zs++]=cu,cu=n,fu=e}function H_(n,e,t){In[kn++]=Ri,In[kn++]=Ii,In[kn++]=Jr,Jr=n;var i=Ri;n=Ii;var r=32-ti(i)-1;i&=~(1<<r),t+=1;var s=32-ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ri=1<<32-ti(e)+r|t<<r|i,Ii=s+n}else Ri=1<<s|t<<r|i,Ii=n}function rh(n){n.return!==null&&(Ir(n,1),H_(n,1,0))}function sh(n){for(;n===cu;)cu=Ns[--zs],Ns[zs]=null,fu=Ns[--zs],Ns[zs]=null;for(;n===Jr;)Jr=In[--kn],In[kn]=null,Ii=In[--kn],In[kn]=null,Ri=In[--kn],In[kn]=null}var yn=null,vn=null,$e=!1,Qn=null;function X_(n,e){var t=Fn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function zp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,yn=n,vn=lr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,yn=n,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Jr!==null?{id:Ri,overflow:Ii}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Fn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,yn=n,vn=null,!0):!1;default:return!1}}function Yf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $f(n){if($e){var e=vn;if(e){var t=e;if(!zp(n,e)){if(Yf(n))throw Error(ee(418));e=lr(t.nextSibling);var i=yn;e&&zp(n,e)?X_(i,t):(n.flags=n.flags&-4097|2,$e=!1,yn=n)}}else{if(Yf(n))throw Error(ee(418));n.flags=n.flags&-4097|2,$e=!1,yn=n}}}function Fp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;yn=n}function sl(n){if(n!==yn)return!1;if(!$e)return Fp(n),$e=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Hf(n.type,n.memoizedProps)),e&&(e=vn)){if(Yf(n))throw j_(),Error(ee(418));for(;e;)X_(n,e),e=lr(e.nextSibling)}if(Fp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vn=lr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vn=null}}else vn=yn?lr(n.stateNode.nextSibling):null;return!0}function j_(){for(var n=vn;n;)n=lr(n.nextSibling)}function no(){vn=yn=null,$e=!1}function oh(n){Qn===null?Qn=[n]:Qn.push(n)}var y1=Hi.ReactCurrentBatchConfig;function Zn(n,e){if(n&&n.defaultProps){e=tt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var du=Sr(null),hu=null,Fs=null,ah=null;function lh(){ah=Fs=hu=null}function uh(n){var e=du.current;je(du),n._currentValue=e}function Zf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function qs(n,e){hu=n,ah=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Jt=!0),n.firstContext=null)}function Gn(n){var e=n._currentValue;if(ah!==n)if(n={context:n,memoizedValue:e,next:null},Fs===null){if(hu===null)throw Error(ee(308));Fs=n,hu.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return e}var Br=null;function ch(n){Br===null?Br=[n]:Br.push(n)}function q_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,ch(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ui(n,i)}function Ui(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ki=!1;function fh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ni(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ie&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(n,t)}return r=i.interleaved,r===null?(e.next=e,ch(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(n,t)}function Ul(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zd(n,t)}}function Op(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function pu(n,e,t,i){var r=n.updateQueue;Ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,h=a;switch(f=e,m=t,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(m,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,f=typeof x=="function"?x.call(m,d,f):x,f==null)break e;d=tt({},d,f);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=o,n.lanes=o,n.memoizedState=d}}function Up(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var $_=new qg.Component().refs;function Kf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:tt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Uu={isMounted:function(n){return(n=n._reactInternals)?us(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Yt(),r=fr(n),s=Ni(i,r);s.payload=e,t!=null&&(s.callback=t),e=ur(n,s,r),e!==null&&(ni(e,n,r,i),Ul(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Yt(),r=fr(n),s=Ni(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ur(n,s,r),e!==null&&(ni(e,n,r,i),Ul(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Yt(),i=fr(n),r=Ni(t,i);r.tag=2,e!=null&&(r.callback=e),e=ur(n,r,i),e!==null&&(ni(e,n,i,t),Ul(e,n,i))}};function Bp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(t,i)||!ga(r,s):!0}function Z_(n,e,t){var i=!1,r=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=tn(e)?Qr:Ut.current,i=e.contextTypes,s=(i=i!=null)?to(n,r):_r),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Vp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Uu.enqueueReplaceState(e,e.state,null)}function Qf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=$_,fh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=tn(e)?Qr:Ut.current,r.context=to(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uu.enqueueReplaceState(r,r.state,null),pu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Lo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===$_&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function ol(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Gp(n){var e=n._init;return e(n._payload)}function K_(n){function e(g,_){if(n){var v=g.deletions;v===null?(g.deletions=[_],g.flags|=16):v.push(_)}}function t(g,_){if(!n)return null;for(;_!==null;)e(g,_),_=_.sibling;return null}function i(g,_){for(g=new Map;_!==null;)_.key!==null?g.set(_.key,_):g.set(_.index,_),_=_.sibling;return g}function r(g,_){return g=dr(g,_),g.index=0,g.sibling=null,g}function s(g,_,v){return g.index=v,n?(v=g.alternate,v!==null?(v=v.index,v<_?(g.flags|=2,_):v):(g.flags|=2,_)):(g.flags|=1048576,_)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function a(g,_,v,S){return _===null||_.tag!==6?(_=Ac(v,g.mode,S),_.return=g,_):(_=r(_,v),_.return=g,_)}function l(g,_,v,S){var M=v.type;return M===Ps?c(g,_,v.props.children,S,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Zi&&Gp(M)===_.type)?(S=r(_,v.props),S.ref=Lo(g,_,v),S.return=g,S):(S=Xl(v.type,v.key,v.props,null,g.mode,S),S.ref=Lo(g,_,v),S.return=g,S)}function u(g,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Pc(v,g.mode,S),_.return=g,_):(_=r(_,v.children||[]),_.return=g,_)}function c(g,_,v,S,M){return _===null||_.tag!==7?(_=jr(v,g.mode,S,M),_.return=g,_):(_=r(_,v),_.return=g,_)}function d(g,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ac(""+_,g.mode,v),_.return=g,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $a:return v=Xl(_.type,_.key,_.props,null,g.mode,v),v.ref=Lo(g,null,_),v.return=g,v;case As:return _=Pc(_,g.mode,v),_.return=g,_;case Zi:var S=_._init;return d(g,S(_._payload),v)}if(Go(_)||Eo(_))return _=jr(_,g.mode,v,null),_.return=g,_;ol(g,_)}return null}function f(g,_,v,S){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(g,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:return v.key===M?l(g,_,v,S):null;case As:return v.key===M?u(g,_,v,S):null;case Zi:return M=v._init,f(g,_,M(v._payload),S)}if(Go(v)||Eo(v))return M!==null?null:c(g,_,v,S,null);ol(g,v)}return null}function m(g,_,v,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(_,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $a:return g=g.get(S.key===null?v:S.key)||null,l(_,g,S,M);case As:return g=g.get(S.key===null?v:S.key)||null,u(_,g,S,M);case Zi:var T=S._init;return m(g,_,v,T(S._payload),M)}if(Go(S)||Eo(S))return g=g.get(v)||null,c(_,g,S,M,null);ol(_,S)}return null}function x(g,_,v,S){for(var M=null,T=null,b=_,y=_=0,E=null;b!==null&&y<v.length;y++){b.index>y?(E=b,b=null):E=b.sibling;var P=f(g,b,v[y],S);if(P===null){b===null&&(b=E);break}n&&b&&P.alternate===null&&e(g,b),_=s(P,_,y),T===null?M=P:T.sibling=P,T=P,b=E}if(y===v.length)return t(g,b),$e&&Ir(g,y),M;if(b===null){for(;y<v.length;y++)b=d(g,v[y],S),b!==null&&(_=s(b,_,y),T===null?M=b:T.sibling=b,T=b);return $e&&Ir(g,y),M}for(b=i(g,b);y<v.length;y++)E=m(b,g,y,v[y],S),E!==null&&(n&&E.alternate!==null&&b.delete(E.key===null?y:E.key),_=s(E,_,y),T===null?M=E:T.sibling=E,T=E);return n&&b.forEach(function(z){return e(g,z)}),$e&&Ir(g,y),M}function h(g,_,v,S){var M=Eo(v);if(typeof M!="function")throw Error(ee(150));if(v=M.call(v),v==null)throw Error(ee(151));for(var T=M=null,b=_,y=_=0,E=null,P=v.next();b!==null&&!P.done;y++,P=v.next()){b.index>y?(E=b,b=null):E=b.sibling;var z=f(g,b,P.value,S);if(z===null){b===null&&(b=E);break}n&&b&&z.alternate===null&&e(g,b),_=s(z,_,y),T===null?M=z:T.sibling=z,T=z,b=E}if(P.done)return t(g,b),$e&&Ir(g,y),M;if(b===null){for(;!P.done;y++,P=v.next())P=d(g,P.value,S),P!==null&&(_=s(P,_,y),T===null?M=P:T.sibling=P,T=P);return $e&&Ir(g,y),M}for(b=i(g,b);!P.done;y++,P=v.next())P=m(b,g,y,P.value,S),P!==null&&(n&&P.alternate!==null&&b.delete(P.key===null?y:P.key),_=s(P,_,y),T===null?M=P:T.sibling=P,T=P);return n&&b.forEach(function(K){return e(g,K)}),$e&&Ir(g,y),M}function p(g,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Ps&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:e:{for(var M=v.key,T=_;T!==null;){if(T.key===M){if(M=v.type,M===Ps){if(T.tag===7){t(g,T.sibling),_=r(T,v.props.children),_.return=g,g=_;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Zi&&Gp(M)===T.type){t(g,T.sibling),_=r(T,v.props),_.ref=Lo(g,T,v),_.return=g,g=_;break e}t(g,T);break}else e(g,T);T=T.sibling}v.type===Ps?(_=jr(v.props.children,g.mode,S,v.key),_.return=g,g=_):(S=Xl(v.type,v.key,v.props,null,g.mode,S),S.ref=Lo(g,_,v),S.return=g,g=S)}return o(g);case As:e:{for(T=v.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(g,_.sibling),_=r(_,v.children||[]),_.return=g,g=_;break e}else{t(g,_);break}else e(g,_);_=_.sibling}_=Pc(v,g.mode,S),_.return=g,g=_}return o(g);case Zi:return T=v._init,p(g,_,T(v._payload),S)}if(Go(v))return x(g,_,v,S);if(Eo(v))return h(g,_,v,S);ol(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(g,_.sibling),_=r(_,v),_.return=g,g=_):(t(g,_),_=Ac(v,g.mode,S),_.return=g,g=_),o(g)):t(g,_)}return p}var io=K_(!0),Q_=K_(!1),Ba={},pi=Sr(Ba),ya=Sr(Ba),Sa=Sr(Ba);function Vr(n){if(n===Ba)throw Error(ee(174));return n}function dh(n,e){switch(Ge(Sa,e),Ge(ya,n),Ge(pi,Ba),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Lf(e,n)}je(pi),Ge(pi,e)}function ro(){je(pi),je(ya),je(Sa)}function J_(n){Vr(Sa.current);var e=Vr(pi.current),t=Lf(e,n.type);e!==t&&(Ge(ya,n),Ge(pi,t))}function hh(n){ya.current===n&&(je(pi),je(ya))}var Ke=Sr(0);function mu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function ph(){for(var n=0;n<Mc.length;n++)Mc[n]._workInProgressVersionPrimary=null;Mc.length=0}var Bl=Hi.ReactCurrentDispatcher,wc=Hi.ReactCurrentBatchConfig,es=0,et=null,ht=null,Mt=null,gu=!1,ta=!1,Ma=0,S1=0;function Rt(){throw Error(ee(321))}function mh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!si(n[t],e[t]))return!1;return!0}function gh(n,e,t,i,r,s){if(es=s,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=n===null||n.memoizedState===null?E1:C1,n=t(i,r),ta){s=0;do{if(ta=!1,Ma=0,25<=s)throw Error(ee(301));s+=1,Mt=ht=null,e.updateQueue=null,Bl.current=b1,n=t(i,r)}while(ta)}if(Bl.current=_u,e=ht!==null&&ht.next!==null,es=0,Mt=ht=et=null,gu=!1,e)throw Error(ee(300));return n}function _h(){var n=Ma!==0;return Ma=0,n}function ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?et.memoizedState=Mt=n:Mt=Mt.next=n,Mt}function Wn(){if(ht===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var e=Mt===null?et.memoizedState:Mt.next;if(e!==null)Mt=e,ht=n;else{if(n===null)throw Error(ee(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},Mt===null?et.memoizedState=Mt=n:Mt=Mt.next=n}return Mt}function wa(n,e){return typeof e=="function"?e(n):e}function Tc(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=ht,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((es&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,et.lanes|=c,ts|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,si(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,et.lanes|=s,ts|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ec(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);si(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function e0(){}function t0(n,e){var t=et,i=Wn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,vh(r0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Mt!==null&&Mt.memoizedState.tag&1){if(t.flags|=2048,Ta(9,i0.bind(null,t,i,r,e),void 0,null),wt===null)throw Error(ee(349));es&30||n0(t,e,r)}return r}function n0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function i0(n,e,t,i){e.value=t,e.getSnapshot=i,s0(e)&&o0(n)}function r0(n,e,t){return t(function(){s0(e)&&o0(n)})}function s0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!si(n,t)}catch{return!0}}function o0(n){var e=Ui(n,1);e!==null&&ni(e,n,1,-1)}function Wp(n){var e=ai();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},e.queue=n,n=n.dispatch=T1.bind(null,et,n),[e.memoizedState,n]}function Ta(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function a0(){return Wn().memoizedState}function Vl(n,e,t,i){var r=ai();et.flags|=n,r.memoizedState=Ta(1|e,t,void 0,i===void 0?null:i)}function Bu(n,e,t,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(ht!==null){var o=ht.memoizedState;if(s=o.destroy,i!==null&&mh(i,o.deps)){r.memoizedState=Ta(e,t,s,i);return}}et.flags|=n,r.memoizedState=Ta(1|e,t,s,i)}function Hp(n,e){return Vl(8390656,8,n,e)}function vh(n,e){return Bu(2048,8,n,e)}function l0(n,e){return Bu(4,2,n,e)}function u0(n,e){return Bu(4,4,n,e)}function c0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function f0(n,e,t){return t=t!=null?t.concat([n]):null,Bu(4,4,c0.bind(null,e,n),t)}function xh(){}function d0(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&mh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function h0(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&mh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function p0(n,e,t){return es&21?(si(t,e)||(t=__(),et.lanes|=t,ts|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=t)}function M1(n,e){var t=Fe;Fe=t!==0&&4>t?t:4,n(!0);var i=wc.transition;wc.transition={};try{n(!1),e()}finally{Fe=t,wc.transition=i}}function m0(){return Wn().memoizedState}function w1(n,e,t){var i=fr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},g0(n))_0(e,t);else if(t=q_(n,e,t,i),t!==null){var r=Yt();ni(t,n,i,r),v0(t,e,i)}}function T1(n,e,t){var i=fr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(g0(n))_0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,si(a,o)){var l=e.interleaved;l===null?(r.next=r,ch(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=q_(n,e,r,i),t!==null&&(r=Yt(),ni(t,n,i,r),v0(t,e,i))}}function g0(n){var e=n.alternate;return n===et||e!==null&&e===et}function _0(n,e){ta=gu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function v0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zd(n,t)}}var _u={readContext:Gn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},E1={readContext:Gn,useCallback:function(n,e){return ai().memoizedState=[n,e===void 0?null:e],n},useContext:Gn,useEffect:Hp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Vl(4194308,4,c0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Vl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Vl(4,2,n,e)},useMemo:function(n,e){var t=ai();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ai();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=w1.bind(null,et,n),[i.memoizedState,n]},useRef:function(n){var e=ai();return n={current:n},e.memoizedState=n},useState:Wp,useDebugValue:xh,useDeferredValue:function(n){return ai().memoizedState=n},useTransition:function(){var n=Wp(!1),e=n[0];return n=M1.bind(null,n[1]),ai().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=et,r=ai();if($e){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),wt===null)throw Error(ee(349));es&30||n0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Hp(r0.bind(null,i,s,n),[n]),i.flags|=2048,Ta(9,i0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ai(),e=wt.identifierPrefix;if($e){var t=Ii,i=Ri;t=(i&~(1<<32-ti(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ma++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=S1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},C1={readContext:Gn,useCallback:d0,useContext:Gn,useEffect:vh,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:h0,useReducer:Tc,useRef:a0,useState:function(){return Tc(wa)},useDebugValue:xh,useDeferredValue:function(n){var e=Wn();return p0(e,ht.memoizedState,n)},useTransition:function(){var n=Tc(wa)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1},b1={readContext:Gn,useCallback:d0,useContext:Gn,useEffect:vh,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:h0,useReducer:Ec,useRef:a0,useState:function(){return Ec(wa)},useDebugValue:xh,useDeferredValue:function(n){var e=Wn();return ht===null?e.memoizedState=n:p0(e,ht.memoizedState,n)},useTransition:function(){var n=Ec(wa)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1};function so(n,e){try{var t="",i=e;do t+=ty(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Cc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Jf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var A1=typeof WeakMap=="function"?WeakMap:Map;function x0(n,e,t){t=Ni(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){xu||(xu=!0,ud=i),Jf(n,e)},t}function y0(n,e,t){t=Ni(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Jf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Jf(n,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Xp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new A1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=G1.bind(null,n,e,t),e.then(n,n))}function jp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function qp(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ni(-1,1),e.tag=2,ur(t,e,1))),t.lanes|=1),n)}var P1=Hi.ReactCurrentOwner,Jt=!1;function jt(n,e,t,i){e.child=n===null?Q_(e,null,t,i):io(e,n.child,t,i)}function Yp(n,e,t,i,r){t=t.render;var s=e.ref;return qs(e,r),i=gh(n,e,t,i,s,r),t=_h(),n!==null&&!Jt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Bi(n,e,r)):($e&&t&&rh(e),e.flags|=1,jt(n,e,i,r),e.child)}function $p(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!bh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,S0(n,e,s,i,r)):(n=Xl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ga,t(o,i)&&n.ref===e.ref)return Bi(n,e,r)}return e.flags|=1,n=dr(s,i),n.ref=e.ref,n.return=e,e.child=n}function S0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ga(s,i)&&n.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Jt=!0);else return e.lanes=n.lanes,Bi(n,e,r)}return ed(n,e,t,i,r)}function M0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Us,pn),pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ge(Us,pn),pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ge(Us,pn),pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ge(Us,pn),pn|=i;return jt(n,e,r,t),e.child}function w0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ed(n,e,t,i,r){var s=tn(t)?Qr:Ut.current;return s=to(e,s),qs(e,r),t=gh(n,e,t,i,s,r),i=_h(),n!==null&&!Jt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Bi(n,e,r)):($e&&i&&rh(e),e.flags|=1,jt(n,e,t,r),e.child)}function Zp(n,e,t,i,r){if(tn(t)){var s=!0;uu(e)}else s=!1;if(qs(e,r),e.stateNode===null)Gl(n,e),Z_(e,t,i),Qf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Gn(u):(u=tn(t)?Qr:Ut.current,u=to(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Vp(e,o,i,u),Ki=!1;var f=e.memoizedState;o.state=f,pu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||en.current||Ki?(typeof c=="function"&&(Kf(e,t,c,i),l=e.memoizedState),(a=Ki||Bp(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Y_(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Zn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=tn(t)?Qr:Ut.current,l=to(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Vp(e,o,i,l),Ki=!1,f=e.memoizedState,o.state=f,pu(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||en.current||Ki?(typeof m=="function"&&(Kf(e,t,m,i),x=e.memoizedState),(u=Ki||Bp(e,t,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return td(n,e,t,i,s,r)}function td(n,e,t,i,r,s){w0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Np(e,t,!1),Bi(n,e,s);i=e.stateNode,P1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=io(e,n.child,null,s),e.child=io(e,null,a,s)):jt(n,e,a,s),e.memoizedState=i.state,r&&Np(e,t,!0),e.child}function T0(n){var e=n.stateNode;e.pendingContext?kp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&kp(n,e.context,!1),dh(n,e.containerInfo)}function Kp(n,e,t,i,r){return no(),oh(r),e.flags|=256,jt(n,e,t,i),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(n){return{baseLanes:n,cachePool:null,transitions:null}}function E0(n,e,t){var i=e.pendingProps,r=Ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ge(Ke,r&1),n===null)return $f(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wu(o,i,0,null),n=jr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=id(t),e.memoizedState=nd,n):yh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return L1(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=jr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?id(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=nd,i}return s=n.child,n=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function yh(n,e){return e=Wu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function al(n,e,t,i){return i!==null&&oh(i),io(e,n.child,null,t),n=yh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function L1(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Cc(Error(ee(422))),al(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wu({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&io(e,n.child,null,o),e.child.memoizedState=id(o),e.memoizedState=nd,s);if(!(e.mode&1))return al(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Cc(s,i,void 0),al(n,e,o,i)}if(a=(o&n.childLanes)!==0,Jt||a){if(i=wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(n,r),ni(i,n,r,-1))}return Ch(),i=Cc(Error(ee(421))),al(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=W1.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vn=lr(r.nextSibling),yn=e,$e=!0,Qn=null,n!==null&&(In[kn++]=Ri,In[kn++]=Ii,In[kn++]=Jr,Ri=n.id,Ii=n.overflow,Jr=e),e=yh(e,i.children),e.flags|=4096,e)}function Qp(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Zf(n.return,e,t)}function bc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function C0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(n,e,i.children,t),i=Ke.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qp(n,t,e);else if(n.tag===19)Qp(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ge(Ke,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&mu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),bc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&mu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}bc(e,!0,t,null,s);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Bi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ts|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=dr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=dr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function D1(n,e,t){switch(e.tag){case 3:T0(e),no();break;case 5:J_(e);break;case 1:tn(e.type)&&uu(e);break;case 4:dh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ge(du,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ge(Ke,Ke.current&1),e.flags|=128,null):t&e.child.childLanes?E0(n,e,t):(Ge(Ke,Ke.current&1),n=Bi(n,e,t),n!==null?n.sibling:null);Ge(Ke,Ke.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return C0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ge(Ke,Ke.current),i)break;return null;case 22:case 23:return e.lanes=0,M0(n,e,t)}return Bi(n,e,t)}var b0,rd,A0,P0;b0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};rd=function(){};A0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Vr(pi.current);var s=null;switch(t){case"input":r=Cf(n,r),i=Cf(n,i),s=[];break;case"select":r=tt({},r,{value:void 0}),i=tt({},i,{value:void 0}),s=[];break;case"textarea":r=Pf(n,r),i=Pf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=au)}Df(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&He("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};P0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Do(n,e){if(!$e)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function It(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function R1(n,e,t){var i=e.pendingProps;switch(sh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return tn(e.type)&&lu(),It(e),null;case 3:return i=e.stateNode,ro(),je(en),je(Ut),ph(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(sl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(dd(Qn),Qn=null))),rd(n,e),It(e),null;case 5:hh(e);var r=Vr(Sa.current);if(t=e.type,n!==null&&e.stateNode!=null)A0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return It(e),null}if(n=Vr(pi.current),sl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[xa]=s,n=(e.mode&1)!==0,t){case"dialog":He("cancel",i),He("close",i);break;case"iframe":case"object":case"embed":He("load",i);break;case"video":case"audio":for(r=0;r<Ho.length;r++)He(Ho[r],i);break;case"source":He("error",i);break;case"img":case"image":case"link":He("error",i),He("load",i);break;case"details":He("toggle",i);break;case"input":ap(i,s),He("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},He("invalid",i);break;case"textarea":up(i,s),He("invalid",i)}Df(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,a,n),r=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&He("scroll",i)}switch(t){case"input":Za(i),lp(i,s,!0);break;case"textarea":Za(i),cp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=au)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=n_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ci]=e,n[xa]=i,b0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Rf(t,i),t){case"dialog":He("cancel",n),He("close",n),r=i;break;case"iframe":case"object":case"embed":He("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ho.length;r++)He(Ho[r],n);r=i;break;case"source":He("error",n),r=i;break;case"img":case"image":case"link":He("error",n),He("load",n),r=i;break;case"details":He("toggle",n),r=i;break;case"input":ap(n,i),r=Cf(n,i),He("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=tt({},i,{value:void 0}),He("invalid",n);break;case"textarea":up(n,i),r=Pf(n,i),He("invalid",n);break;default:r=i}Df(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?s_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&i_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ca(n,l):typeof l=="number"&&ca(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&He("scroll",n):l!=null&&Hd(n,s,l,o))}switch(t){case"input":Za(n),lp(n,i,!1);break;case"textarea":Za(n),cp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+gr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ws(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ws(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=au)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(n&&e.stateNode!=null)P0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Vr(Sa.current),Vr(pi.current),sl(e)){if(i=e.stateNode,t=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==t)&&(n=yn,n!==null))switch(n.tag){case 3:rl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&rl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return It(e),null;case 13:if(je(Ke),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($e&&vn!==null&&e.mode&1&&!(e.flags&128))j_(),no(),e.flags|=98560,s=!1;else if(s=sl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ci]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else Qn!==null&&(dd(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ke.current&1?mt===0&&(mt=3):Ch())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return ro(),rd(n,e),n===null&&_a(e.stateNode.containerInfo),It(e),null;case 10:return uh(e.type._context),It(e),null;case 17:return tn(e.type)&&lu(),It(e),null;case 19:if(je(Ke),s=e.memoizedState,s===null)return It(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Do(s,!1);else{if(mt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=mu(n),o!==null){for(e.flags|=128,Do(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ge(Ke,Ke.current&1|2),e.child}n=n.sibling}s.tail!==null&&st()>oo&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304)}else{if(!i)if(n=mu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return It(e),null}else 2*st()-s.renderingStartTime>oo&&t!==1073741824&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=st(),e.sibling=null,t=Ke.current,Ge(Ke,i?t&1|2:t&1),e):(It(e),null);case 22:case 23:return Eh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function I1(n,e){switch(sh(e),e.tag){case 1:return tn(e.type)&&lu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ro(),je(en),je(Ut),ph(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return hh(e),null;case 13:if(je(Ke),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));no()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return je(Ke),null;case 4:return ro(),null;case 10:return uh(e.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var ll=!1,Nt=!1,k1=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Os(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){nt(n,e,i)}else t.current=null}function sd(n,e,t){try{t()}catch(i){nt(n,e,i)}}var Jp=!1;function N1(n,e){if(Gf=ru,n=I_(),ih(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var m;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wf={focusedElem:n,selectionRange:t},ru=!1,ue=e;ue!==null;)if(e=ue,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ue=n;else for(;ue!==null;){e=ue;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,g=e.stateNode,_=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:Zn(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(S){nt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ue=n;break}ue=e.return}return x=Jp,Jp=!1,x}function na(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&sd(e,t,s)}r=r.next}while(r!==i)}}function Vu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function od(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function L0(n){var e=n.alternate;e!==null&&(n.alternate=null,L0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ci],delete e[xa],delete e[jf],delete e[_1],delete e[v1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function D0(n){return n.tag===5||n.tag===3||n.tag===4}function em(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||D0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ad(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=au));else if(i!==4&&(n=n.child,n!==null))for(ad(n,e,t),n=n.sibling;n!==null;)ad(n,e,t),n=n.sibling}function ld(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ld(n,e,t),n=n.sibling;n!==null;)ld(n,e,t),n=n.sibling}var Ct=null,Kn=!1;function Xi(n,e,t){for(t=t.child;t!==null;)R0(n,e,t),t=t.sibling}function R0(n,e,t){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(Iu,t)}catch{}switch(t.tag){case 5:Nt||Os(t,e);case 6:var i=Ct,r=Kn;Ct=null,Xi(n,e,t),Ct=i,Kn=r,Ct!==null&&(Kn?(n=Ct,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ct.removeChild(t.stateNode));break;case 18:Ct!==null&&(Kn?(n=Ct,t=t.stateNode,n.nodeType===8?yc(n.parentNode,t):n.nodeType===1&&yc(n,t),pa(n)):yc(Ct,t.stateNode));break;case 4:i=Ct,r=Kn,Ct=t.stateNode.containerInfo,Kn=!0,Xi(n,e,t),Ct=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!Nt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sd(t,e,o),r=r.next}while(r!==i)}Xi(n,e,t);break;case 1:if(!Nt&&(Os(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){nt(t,e,a)}Xi(n,e,t);break;case 21:Xi(n,e,t);break;case 22:t.mode&1?(Nt=(i=Nt)||t.memoizedState!==null,Xi(n,e,t),Nt=i):Xi(n,e,t);break;default:Xi(n,e,t)}}function tm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new k1),e.forEach(function(i){var r=H1.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function jn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,Kn=!1;break e;case 3:Ct=a.stateNode.containerInfo,Kn=!0;break e;case 4:Ct=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Ct===null)throw Error(ee(160));R0(s,o,r),Ct=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){nt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)I0(e,n),e=e.sibling}function I0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(e,n),oi(n),i&4){try{na(3,n,n.return),Vu(3,n)}catch(h){nt(n,n.return,h)}try{na(5,n,n.return)}catch(h){nt(n,n.return,h)}}break;case 1:jn(e,n),oi(n),i&512&&t!==null&&Os(t,t.return);break;case 5:if(jn(e,n),oi(n),i&512&&t!==null&&Os(t,t.return),n.flags&32){var r=n.stateNode;try{ca(r,"")}catch(h){nt(n,n.return,h)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&e_(r,s),Rf(a,o);var u=Rf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?s_(r,d):c==="dangerouslySetInnerHTML"?i_(r,d):c==="children"?ca(r,d):Hd(r,c,d,u)}switch(a){case"input":bf(r,s);break;case"textarea":t_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ws(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ws(r,!!s.multiple,s.defaultValue,!0):Ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[xa]=s}catch(h){nt(n,n.return,h)}}break;case 6:if(jn(e,n),oi(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(h){nt(n,n.return,h)}}break;case 3:if(jn(e,n),oi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(h){nt(n,n.return,h)}break;case 4:jn(e,n),oi(n);break;case 13:jn(e,n),oi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wh=st())),i&4&&tm(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Nt=(u=Nt)||c,jn(e,n),Nt=u):jn(e,n),oi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(ue=n,c=n.child;c!==null;){for(d=ue=c;ue!==null;){switch(f=ue,m=f.child,f.tag){case 0:case 11:case 14:case 15:na(4,f,f.return);break;case 1:Os(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){nt(i,t,h)}}break;case 5:Os(f,f.return);break;case 22:if(f.memoizedState!==null){im(d);continue}}m!==null?(m.return=f,ue=m):im(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r_("display",o))}catch(h){nt(n,n.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){nt(n,n.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:jn(e,n),oi(n),i&4&&tm(n);break;case 21:break;default:jn(e,n),oi(n)}}function oi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(D0(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=em(n);ld(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=em(n);ad(n,a,o);break;default:throw Error(ee(161))}}catch(l){nt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function z1(n,e,t){ue=n,k0(n)}function k0(n,e,t){for(var i=(n.mode&1)!==0;ue!==null;){var r=ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ll;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Nt;a=ll;var u=Nt;if(ll=o,(Nt=l)&&!u)for(ue=r;ue!==null;)o=ue,l=o.child,o.tag===22&&o.memoizedState!==null?rm(r):l!==null?(l.return=o,ue=l):rm(r);for(;s!==null;)ue=s,k0(s),s=s.sibling;ue=r,ll=a,Nt=u}nm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ue=s):nm(n)}}function nm(n){for(;ue!==null;){var e=ue;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||Vu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Zn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Up(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Up(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&pa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Nt||e.flags&512&&od(e)}catch(f){nt(e,e.return,f)}}if(e===n){ue=null;break}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}}function im(n){for(;ue!==null;){var e=ue;if(e===n){ue=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ue=t;break}ue=e.return}}function rm(n){for(;ue!==null;){var e=ue;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Vu(4,e)}catch(l){nt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){nt(e,r,l)}}var s=e.return;try{od(e)}catch(l){nt(e,s,l)}break;case 5:var o=e.return;try{od(e)}catch(l){nt(e,o,l)}}}catch(l){nt(e,e.return,l)}if(e===n){ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ue=a;break}ue=e.return}}var F1=Math.ceil,vu=Hi.ReactCurrentDispatcher,Sh=Hi.ReactCurrentOwner,Vn=Hi.ReactCurrentBatchConfig,Ie=0,wt=null,ct=null,Pt=0,pn=0,Us=Sr(0),mt=0,Ea=null,ts=0,Gu=0,Mh=0,ia=null,Kt=null,wh=0,oo=1/0,bi=null,xu=!1,ud=null,cr=null,ul=!1,tr=null,yu=0,ra=0,cd=null,Wl=-1,Hl=0;function Yt(){return Ie&6?st():Wl!==-1?Wl:Wl=st()}function fr(n){return n.mode&1?Ie&2&&Pt!==0?Pt&-Pt:y1.transition!==null?(Hl===0&&(Hl=__()),Hl):(n=Fe,n!==0||(n=window.event,n=n===void 0?16:T_(n.type)),n):1}function ni(n,e,t,i){if(50<ra)throw ra=0,cd=null,Error(ee(185));Fa(n,t,i),(!(Ie&2)||n!==wt)&&(n===wt&&(!(Ie&2)&&(Gu|=t),mt===4&&Ji(n,Pt)),nn(n,i),t===1&&Ie===0&&!(e.mode&1)&&(oo=st()+500,Ou&&Mr()))}function nn(n,e){var t=n.callbackNode;yy(n,e);var i=iu(n,n===wt?Pt:0);if(i===0)t!==null&&hp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&hp(t),e===1)n.tag===0?x1(sm.bind(null,n)):W_(sm.bind(null,n)),m1(function(){!(Ie&6)&&Mr()}),t=null;else{switch(v_(i)){case 1:t=$d;break;case 4:t=m_;break;case 16:t=nu;break;case 536870912:t=g_;break;default:t=nu}t=G0(t,N0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function N0(n,e){if(Wl=-1,Hl=0,Ie&6)throw Error(ee(327));var t=n.callbackNode;if(Ys()&&n.callbackNode!==t)return null;var i=iu(n,n===wt?Pt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Su(n,i);else{e=i;var r=Ie;Ie|=2;var s=F0();(wt!==n||Pt!==e)&&(bi=null,oo=st()+500,Xr(n,e));do try{B1();break}catch(a){z0(n,a)}while(1);lh(),vu.current=s,Ie=r,ct!==null?e=0:(wt=null,Pt=0,e=mt)}if(e!==0){if(e===2&&(r=Ff(n),r!==0&&(i=r,e=fd(n,r))),e===1)throw t=Ea,Xr(n,0),Ji(n,i),nn(n,st()),t;if(e===6)Ji(n,i);else{if(r=n.current.alternate,!(i&30)&&!O1(r)&&(e=Su(n,i),e===2&&(s=Ff(n),s!==0&&(i=s,e=fd(n,s))),e===1))throw t=Ea,Xr(n,0),Ji(n,i),nn(n,st()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:kr(n,Kt,bi);break;case 3:if(Ji(n,i),(i&130023424)===i&&(e=wh+500-st(),10<e)){if(iu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Yt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Xf(kr.bind(null,n,Kt,bi),e);break}kr(n,Kt,bi);break;case 4:if(Ji(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=st()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*F1(i/1960))-i,10<i){n.timeoutHandle=Xf(kr.bind(null,n,Kt,bi),i);break}kr(n,Kt,bi);break;case 5:kr(n,Kt,bi);break;default:throw Error(ee(329))}}}return nn(n,st()),n.callbackNode===t?N0.bind(null,n):null}function fd(n,e){var t=ia;return n.current.memoizedState.isDehydrated&&(Xr(n,e).flags|=256),n=Su(n,e),n!==2&&(e=Kt,Kt=t,e!==null&&dd(e)),n}function dd(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function O1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(n,e){for(e&=~Mh,e&=~Gu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ti(e),i=1<<t;n[t]=-1,e&=~i}}function sm(n){if(Ie&6)throw Error(ee(327));Ys();var e=iu(n,0);if(!(e&1))return nn(n,st()),null;var t=Su(n,e);if(n.tag!==0&&t===2){var i=Ff(n);i!==0&&(e=i,t=fd(n,i))}if(t===1)throw t=Ea,Xr(n,0),Ji(n,e),nn(n,st()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,kr(n,Kt,bi),nn(n,st()),null}function Th(n,e){var t=Ie;Ie|=1;try{return n(e)}finally{Ie=t,Ie===0&&(oo=st()+500,Ou&&Mr())}}function ns(n){tr!==null&&tr.tag===0&&!(Ie&6)&&Ys();var e=Ie;Ie|=1;var t=Vn.transition,i=Fe;try{if(Vn.transition=null,Fe=1,n)return n()}finally{Fe=i,Vn.transition=t,Ie=e,!(Ie&6)&&Mr()}}function Eh(){pn=Us.current,je(Us)}function Xr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,p1(t)),ct!==null)for(t=ct.return;t!==null;){var i=t;switch(sh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lu();break;case 3:ro(),je(en),je(Ut),ph();break;case 5:hh(i);break;case 4:ro();break;case 13:je(Ke);break;case 19:je(Ke);break;case 10:uh(i.type._context);break;case 22:case 23:Eh()}t=t.return}if(wt=n,ct=n=dr(n.current,null),Pt=pn=e,mt=0,Ea=null,Mh=Gu=ts=0,Kt=ia=null,Br!==null){for(e=0;e<Br.length;e++)if(t=Br[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Br=null}return n}function z0(n,e){do{var t=ct;try{if(lh(),Bl.current=_u,gu){for(var i=et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gu=!1}if(es=0,Mt=ht=et=null,ta=!1,Ma=0,Sh.current=null,t===null||t.return===null){mt=1,Ea=e,ct=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=jp(o);if(m!==null){m.flags&=-257,qp(m,o,a,s,e),m.mode&1&&Xp(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){Xp(s,u,e),Ch();break e}l=Error(ee(426))}}else if($e&&a.mode&1){var p=jp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),qp(p,o,a,s,e),oh(so(l,a));break e}}s=l=so(l,a),mt!==4&&(mt=2),ia===null?ia=[s]:ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=x0(s,l,e);Op(s,g);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cr===null||!cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=y0(s,a,e);Op(s,S);break e}}s=s.return}while(s!==null)}U0(t)}catch(M){e=M,ct===t&&t!==null&&(ct=t=t.return);continue}break}while(1)}function F0(){var n=vu.current;return vu.current=_u,n===null?_u:n}function Ch(){(mt===0||mt===3||mt===2)&&(mt=4),wt===null||!(ts&268435455)&&!(Gu&268435455)||Ji(wt,Pt)}function Su(n,e){var t=Ie;Ie|=2;var i=F0();(wt!==n||Pt!==e)&&(bi=null,Xr(n,e));do try{U1();break}catch(r){z0(n,r)}while(1);if(lh(),Ie=t,vu.current=i,ct!==null)throw Error(ee(261));return wt=null,Pt=0,mt}function U1(){for(;ct!==null;)O0(ct)}function B1(){for(;ct!==null&&!fy();)O0(ct)}function O0(n){var e=V0(n.alternate,n,pn);n.memoizedProps=n.pendingProps,e===null?U0(n):ct=e,Sh.current=null}function U0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=I1(t,e),t!==null){t.flags&=32767,ct=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ct=null;return}}else if(t=R1(t,e,pn),t!==null){ct=t;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=n}while(e!==null);mt===0&&(mt=5)}function kr(n,e,t){var i=Fe,r=Vn.transition;try{Vn.transition=null,Fe=1,V1(n,e,t,i)}finally{Vn.transition=r,Fe=i}return null}function V1(n,e,t,i){do Ys();while(tr!==null);if(Ie&6)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Sy(n,s),n===wt&&(ct=wt=null,Pt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ul||(ul=!0,G0(nu,function(){return Ys(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var o=Fe;Fe=1;var a=Ie;Ie|=4,Sh.current=null,N1(n,t),I0(t,n),a1(Wf),ru=!!Gf,Wf=Gf=null,n.current=t,z1(t),dy(),Ie=a,Fe=o,Vn.transition=s}else n.current=t;if(ul&&(ul=!1,tr=n,yu=r),s=n.pendingLanes,s===0&&(cr=null),my(t.stateNode),nn(n,st()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(xu)throw xu=!1,n=ud,ud=null,n;return yu&1&&n.tag!==0&&Ys(),s=n.pendingLanes,s&1?n===cd?ra++:(ra=0,cd=n):ra=0,Mr(),null}function Ys(){if(tr!==null){var n=v_(yu),e=Vn.transition,t=Fe;try{if(Vn.transition=null,Fe=16>n?16:n,tr===null)var i=!1;else{if(n=tr,tr=null,yu=0,Ie&6)throw Error(ee(331));var r=Ie;for(Ie|=4,ue=n.current;ue!==null;){var s=ue,o=s.child;if(ue.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ue=u;ue!==null;){var c=ue;switch(c.tag){case 0:case 11:case 15:na(8,c,s)}var d=c.child;if(d!==null)d.return=c,ue=d;else for(;ue!==null;){c=ue;var f=c.sibling,m=c.return;if(L0(c),c===u){ue=null;break}if(f!==null){f.return=m,ue=f;break}ue=m}}}var x=s.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ue=o;else e:for(;ue!==null;){if(s=ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:na(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ue=g;break e}ue=s.return}}var _=n.current;for(ue=_;ue!==null;){o=ue;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ue=v;else e:for(o=_;ue!==null;){if(a=ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vu(9,a)}}catch(M){nt(a,a.return,M)}if(a===o){ue=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ue=S;break e}ue=a.return}}if(Ie=r,Mr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(Iu,n)}catch{}i=!0}return i}finally{Fe=t,Vn.transition=e}}return!1}function om(n,e,t){e=so(t,e),e=x0(n,e,1),n=ur(n,e,1),e=Yt(),n!==null&&(Fa(n,1,e),nn(n,e))}function nt(n,e,t){if(n.tag===3)om(n,n,t);else for(;e!==null;){if(e.tag===3){om(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){n=so(t,n),n=y0(e,n,1),e=ur(e,n,1),n=Yt(),e!==null&&(Fa(e,1,n),nn(e,n));break}}e=e.return}}function G1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Yt(),n.pingedLanes|=n.suspendedLanes&t,wt===n&&(Pt&t)===t&&(mt===4||mt===3&&(Pt&130023424)===Pt&&500>st()-wh?Xr(n,0):Mh|=t),nn(n,e)}function B0(n,e){e===0&&(n.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var t=Yt();n=Ui(n,e),n!==null&&(Fa(n,e,t),nn(n,t))}function W1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),B0(n,t)}function H1(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),B0(n,t)}var V0;V0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Jt=!1,D1(n,e,t);Jt=!!(n.flags&131072)}else Jt=!1,$e&&e.flags&1048576&&H_(e,fu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Gl(n,e),n=e.pendingProps;var r=to(e,Ut.current);qs(e,t),r=gh(null,e,i,n,r,t);var s=_h();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,uu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fh(e),r.updater=Uu,e.stateNode=r,r._reactInternals=e,Qf(e,i,n,t),e=td(null,e,i,!0,s,t)):(e.tag=0,$e&&s&&rh(e),jt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Gl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=j1(i),n=Zn(i,n),r){case 0:e=ed(null,e,i,n,t);break e;case 1:e=Zp(null,e,i,n,t);break e;case 11:e=Yp(null,e,i,n,t);break e;case 14:e=$p(null,e,i,Zn(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),ed(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Zp(n,e,i,r,t);case 3:e:{if(T0(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Y_(n,e),pu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=so(Error(ee(423)),e),e=Kp(n,e,i,t,r);break e}else if(i!==r){r=so(Error(ee(424)),e),e=Kp(n,e,i,t,r);break e}else for(vn=lr(e.stateNode.containerInfo.firstChild),yn=e,$e=!0,Qn=null,t=Q_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(no(),i===r){e=Bi(n,e,t);break e}jt(n,e,i,t)}e=e.child}return e;case 5:return J_(e),n===null&&$f(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Hf(i,r)?o=null:s!==null&&Hf(i,s)&&(e.flags|=32),w0(n,e),jt(n,e,o,t),e.child;case 6:return n===null&&$f(e),null;case 13:return E0(n,e,t);case 4:return dh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=io(e,null,i,t):jt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Yp(n,e,i,r,t);case 7:return jt(n,e,e.pendingProps,t),e.child;case 8:return jt(n,e,e.pendingProps.children,t),e.child;case 12:return jt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ge(du,i._currentValue),i._currentValue=o,s!==null)if(si(s.value,o)){if(s.children===r.children&&!en.current){e=Bi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Zf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Zf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,qs(e,t),r=Gn(r),i=i(r),e.flags|=1,jt(n,e,i,t),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),$p(n,e,i,r,t);case 15:return S0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Gl(n,e),e.tag=1,tn(i)?(n=!0,uu(e)):n=!1,qs(e,t),Z_(e,i,r),Qf(e,i,r,t),td(null,e,i,!0,n,t);case 19:return C0(n,e,t);case 22:return M0(n,e,t)}throw Error(ee(156,e.tag))};function G0(n,e){return p_(n,e)}function X1(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(n,e,t,i){return new X1(n,e,t,i)}function bh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function j1(n){if(typeof n=="function")return bh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===jd)return 11;if(n===qd)return 14}return 2}function dr(n,e){var t=n.alternate;return t===null?(t=Fn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Xl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")bh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ps:return jr(t.children,r,s,e);case Xd:o=8,r|=8;break;case Mf:return n=Fn(12,t,e,r|2),n.elementType=Mf,n.lanes=s,n;case wf:return n=Fn(13,t,e,r),n.elementType=wf,n.lanes=s,n;case Tf:return n=Fn(19,t,e,r),n.elementType=Tf,n.lanes=s,n;case Kg:return Wu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case $g:o=10;break e;case Zg:o=9;break e;case jd:o=11;break e;case qd:o=14;break e;case Zi:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=Fn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function jr(n,e,t,i){return n=Fn(7,n,i,e),n.lanes=t,n}function Wu(n,e,t,i){return n=Fn(22,n,i,e),n.elementType=Kg,n.lanes=t,n.stateNode={isHidden:!1},n}function Ac(n,e,t){return n=Fn(6,n,null,e),n.lanes=t,n}function Pc(n,e,t){return e=Fn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function q1(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ah(n,e,t,i,r,s,o,a,l){return n=new q1(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fh(s),n}function Y1(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function W0(n){if(!n)return _r;n=n._reactInternals;e:{if(us(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(tn(t))return G_(n,t,e)}return e}function H0(n,e,t,i,r,s,o,a,l){return n=Ah(t,i,!0,n,r,s,o,a,l),n.context=W0(null),t=n.current,i=Yt(),r=fr(t),s=Ni(i,r),s.callback=e??null,ur(t,s,r),n.current.lanes=r,Fa(n,r,i),nn(n,i),n}function Hu(n,e,t,i){var r=e.current,s=Yt(),o=fr(r);return t=W0(t),e.context===null?e.context=t:e.pendingContext=t,e=Ni(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ur(r,e,o),n!==null&&(ni(n,r,o,s),Ul(n,r,o)),o}function Mu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Ph(n,e){am(n,e),(n=n.alternate)&&am(n,e)}function $1(){return null}var X0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lh(n){this._internalRoot=n}Xu.prototype.render=Lh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));Hu(n,e,null,null)};Xu.prototype.unmount=Lh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ns(function(){Hu(null,n,null,null)}),e[Oi]=null}};function Xu(n){this._internalRoot=n}Xu.prototype.unstable_scheduleHydration=function(n){if(n){var e=S_();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Qi.length&&e!==0&&e<Qi[t].priority;t++);Qi.splice(t,0,n),t===0&&w_(n)}};function Dh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function Z1(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Mu(o);s.call(u)}}var o=H0(e,i,n,0,null,!1,!1,"",lm);return n._reactRootContainer=o,n[Oi]=o.current,_a(n.nodeType===8?n.parentNode:n),ns(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Mu(l);a.call(u)}}var l=Ah(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=l,n[Oi]=l.current,_a(n.nodeType===8?n.parentNode:n),ns(function(){Hu(e,l,t,i)}),l}function qu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Mu(o);a.call(l)}}Hu(e,o,n,r)}else o=Z1(t,e,n,r,i);return Mu(o)}x_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Wo(e.pendingLanes);t!==0&&(Zd(e,t|1),nn(e,st()),!(Ie&6)&&(oo=st()+500,Mr()))}break;case 13:ns(function(){var i=Ui(n,1);if(i!==null){var r=Yt();ni(i,n,1,r)}}),Ph(n,1)}};Kd=function(n){if(n.tag===13){var e=Ui(n,134217728);if(e!==null){var t=Yt();ni(e,n,134217728,t)}Ph(n,134217728)}};y_=function(n){if(n.tag===13){var e=fr(n),t=Ui(n,e);if(t!==null){var i=Yt();ni(t,n,e,i)}Ph(n,e)}};S_=function(){return Fe};M_=function(n,e){var t=Fe;try{return Fe=n,e()}finally{Fe=t}};kf=function(n,e,t){switch(e){case"input":if(bf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Fu(i);if(!r)throw Error(ee(90));Jg(i),bf(i,r)}}}break;case"textarea":t_(n,t);break;case"select":e=t.value,e!=null&&Ws(n,!!t.multiple,e,!1)}};l_=Th;u_=ns;var K1={usingClientEntryPoint:!1,Events:[Ua,Is,Fu,o_,a_,Th]},Ro={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Q1={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=d_(n),n===null?null:n.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||$1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Iu=cl.inject(Q1),hi=cl}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K1;Cn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dh(e))throw Error(ee(200));return Y1(n,e,null,t)};Cn.createRoot=function(n,e){if(!Dh(n))throw Error(ee(299));var t=!1,i="",r=X0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ah(n,1,!1,null,null,t,!1,i,r),n[Oi]=e.current,_a(n.nodeType===8?n.parentNode:n),new Lh(e)};Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=d_(e),n=n===null?null:n.stateNode,n};Cn.flushSync=function(n){return ns(n)};Cn.hydrate=function(n,e,t){if(!ju(e))throw Error(ee(200));return qu(null,n,e,!0,t)};Cn.hydrateRoot=function(n,e,t){if(!Dh(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=X0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=H0(e,null,n,1,t??null,r,!1,s,o),n[Oi]=e.current,_a(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Xu(e)};Cn.render=function(n,e,t){if(!ju(e))throw Error(ee(200));return qu(null,n,e,!1,t)};Cn.unmountComponentAtNode=function(n){if(!ju(n))throw Error(ee(40));return n._reactRootContainer?(ns(function(){qu(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1};Cn.unstable_batchedUpdates=Th;Cn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ju(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return qu(n,e,t,!1,i)};Cn.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=Cn})($x);var um=xf;vf.createRoot=um.createRoot,vf.hydrateRoot=um.hydrateRoot;function Ai(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function j0(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ao={duration:.5,overwrite:!1,delay:0},Rh,Ft,ut,On=1e8,Ve=1/On,hd=Math.PI*2,J1=hd/4,eS=0,q0=Math.sqrt,tS=Math.cos,nS=Math.sin,Et=function(e){return typeof e=="string"},it=function(e){return typeof e=="function"},Vi=function(e){return typeof e=="number"},Ih=function(e){return typeof e>"u"},_i=function(e){return typeof e=="object"},rn=function(e){return e!==!1},Y0=function(){return typeof window<"u"},fl=function(e){return it(e)||Et(e)},$0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ot=Array.isArray,pd=/(?:-?\.?\d|\.)+/gi,Z0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,K0=/[+-]=-?[.\d]+/,Q0=/[^,'"\[\]\s]+/gi,iS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qe,Rn,md,kh,Tn={},wu={},J0,ev=function(e){return(wu=is(e,Tn))&&En},Nh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Tu=function(e,t){return!t&&console.warn(e)},tv=function(e,t){return e&&(Tn[e]=t)&&wu&&(wu[e]=t)||Tn},Ca=function(){return 0},rS={suppressEvents:!0,isStart:!0,kill:!1},jl={suppressEvents:!0,kill:!1},sS={suppressEvents:!0},zh={},hr=[],gd={},nv,mn={},Dc={},cm=30,ql=[],Fh="",Oh=function(e){var t=e[0],i,r;if(_i(t)||it(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ql.length;r--&&!ql[r].targetTest(t););i=ql[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Tv(e[r],i)))||e.splice(r,1);return e},qr=function(e){return e._gsap||Oh(Un(e))[0]._gsap},iv=function(e,t,i){return(i=e[t])&&it(i)?e[t]():Ih(i)&&e.getAttribute&&e.getAttribute(t)||i},sn=function(e,t){return(e=e.split(",")).forEach(t)||e},rt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},$s=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},oS=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Eu=function(){var e=hr.length,t=hr.slice(0),i,r;for(gd={},hr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},rv=function(e,t,i,r){hr.length&&!Ft&&Eu(),e.render(t,i,r||Ft&&t<0&&(e._initted||e._startAt)),hr.length&&!Ft&&Eu()},sv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Q0).length<2?t:Et(e)?e.trim():e},ov=function(e){return e},Hn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},aS=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},is=function(e,t){for(var i in t)e[i]=t[i];return e},fm=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=_i(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Cu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},sa=function(e){var t=e.parent||Qe,i=e.keyframes?aS(Ot(e.keyframes)):Hn;if(rn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},lS=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},av=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Yu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},vr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Yr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},uS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_d=function(e,t,i,r){return e._startAt&&(Ft?e._startAt.revert(jl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},cS=function n(e){return!e||e._ts&&n(e.parent)},dm=function(e){return e._repeat?lo(e._tTime,e=e.duration()+e._rDelay)*e:0},lo=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},bu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$u=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ve)||0))},Zu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=bt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$u(e),i._dirty||Yr(i,e)),e},lv=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=bu(e.rawTime(),t),(!t._dur||Va(0,t.totalDuration(),i)-t._tTime>Ve)&&t.render(i,!0)),Yr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ve}},fi=function(e,t,i,r){return t.parent&&vr(t),t._start=bt((Vi(i)?i:i||e!==Qe?Dn(e,i,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),av(e,t,"_first","_last",e._sort?"_start":0),vd(t)||(e._recent=t),r||lv(e,t),e._ts<0&&Zu(e,e._tTime),e},uv=function(e,t){return(Tn.ScrollTrigger||Nh("scrollTrigger",t))&&Tn.ScrollTrigger.create(t,e)},cv=function(e,t,i,r,s){if(Bh(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Ft&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&nv!==_n.frame)return hr.push(e),e._lazy=[s,r],1},fS=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},vd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dS=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&fS(e)&&!(!e._initted&&vd(e))||(e._ts<0||e._dp._ts<0)&&!vd(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Va(0,e._tDur,t),c=lo(l,a),e._yoyo&&c&1&&(o=1-o),c!==lo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ft||r||e._zTime===Ve||!t&&e._zTime){if(!e._initted&&cv(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Ve:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&_d(e,t,i,!0),e._onUpdate&&!i&&Bn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&vr(e,1),!i&&!Ft&&(Bn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},hS=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},uo=function(e,t,i,r){var s=e._repeat,o=bt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:bt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Zu(e,e._tTime=e._tDur*a),e.parent&&$u(e),i||Yr(e.parent,e),e},hm=function(e){return e instanceof Qt?Yr(e):uo(e,e._dur)},pS={_start:0,endTime:Ca,totalDuration:Ca},Dn=function n(e,t,i){var r=e.labels,s=e._recent||pS,o=e.duration()>=On?s.endTime(!1):e._dur,a,l,u;return Et(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Ot(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},oa=function(e,t,i){var r=Vi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=rn(l.vars.inherit)&&l.parent;o.immediateRender=rn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new pt(t[0],o,t[s+1])},wr=function(e,t){return e||e===0?t(e):t},Va=function(e,t,i){return i<e?e:i>t?t:i},zt=function(e,t){return!Et(e)||!(t=iS.exec(e))?"":t[1]},mS=function(e,t,i){return wr(i,function(r){return Va(e,t,r)})},xd=[].slice,fv=function(e,t){return e&&_i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_i(e[0]))&&!e.nodeType&&e!==Rn},gS=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Et(r)&&!t||fv(r,1)?(s=i).push.apply(s,Un(r)):i.push(r)})||i},Un=function(e,t,i){return ut&&!t&&ut.selector?ut.selector(e):Et(e)&&!i&&(md||!co())?xd.call((t||kh).querySelectorAll(e),0):Ot(e)?gS(e,i):fv(e)?xd.call(e,0):e?[e]:[]},yd=function(e){return e=Un(e)[0]||Tu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Un(t,i.querySelectorAll?i:i===e?Tu("Invalid scope")||kh.createElement("div"):e)}},dv=function(e){return e.sort(function(){return .5-Math.random()})},hv=function(e){if(it(e))return e;var t=_i(e)?e:{each:e},i=$r(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Et(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,m,x){var h=(x||t).length,p=o[h],g,_,v,S,M,T,b,y,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,On])[1],!E){for(b=-On;b<(b=x[E++].getBoundingClientRect().left)&&E<h;);E--}for(p=o[h]=[],g=l?Math.min(E,h)*c-.5:r%E,_=E===On?0:l?h*d/E-.5:r/E|0,b=0,y=On,T=0;T<h;T++)v=T%E-g,S=_-(T/E|0),p[T]=M=u?Math.abs(u==="y"?S:v):q0(v*v+S*S),M>b&&(b=M),M<y&&(y=M);r==="random"&&dv(p),p.max=b-y,p.min=y,p.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(E>h?h-1:u?u==="y"?h/E:E:Math.max(E,h/E))||0)*(r==="edges"?-1:1),p.b=h<0?s-h:s,p.u=zt(t.amount||t.each)||0,i=i&&h<0?Sv(i):i}return h=(p[f]-p.min)/p.max||0,bt(p.b+(i?i(h):h)*p.v)+p.u}},Sd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=bt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Vi(i)?0:zt(i))}},pv=function(e,t){var i=Ot(e),r,s;return!i&&_i(e)&&(r=i=e.radius||On,e.values?(e=Un(e.values),(s=!Vi(e[0]))&&(r*=r)):e=Sd(e.increment)),wr(t,i?it(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=On,c=0,d=e.length,f,m;d--;)s?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Vi(o)?c:c+zt(o)}:Sd(e))},mv=function(e,t,i,r){return wr(Ot(e)?!t:i===!0?!!(i=0):!r,function(){return Ot(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},_S=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},vS=function(e,t){return function(i){return e(parseFloat(i))+(t||zt(i))}},xS=function(e,t,i){return _v(e,t,0,1,i)},gv=function(e,t,i){return wr(i,function(r){return e[~~t(r)]})},yS=function n(e,t,i){var r=t-e;return Ot(e)?gv(e,n(0,e.length),t):wr(i,function(s){return(r+(s-e)%r)%r+e})},SS=function n(e,t,i){var r=t-e,s=r*2;return Ot(e)?gv(e,n(0,e.length-1),t):wr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ba=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Q0:pd),i+=e.substr(t,r-t)+mv(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},_v=function(e,t,i,r,s){var o=t-e,a=r-i;return wr(s,function(l){return i+((l-e)/o*a||0)})},MS=function n(e,t,i,r){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=Et(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Ot(e)&&!Ot(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(x){x*=d;var h=Math.min(f,~~x);return c[h](x-h)},i=t}else r||(e=is(Ot(e)?[]:{},e));if(!c){for(l in t)Uh.call(a,e,l,"get",t[l]);s=function(x){return Wh(x,a)||(o?e.p:e)}}}return wr(i,s)},pm=function(e,t,i){var r=e.labels,s=On,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Bn=function(e,t,i){var r=e.vars,s=r[t],o=ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&hr.length&&Eu(),a&&(ut=a),c=l?s.apply(u,l):s.call(u),ut=o,c},Xo=function(e){return vr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ft),e.progress()<1&&Bn(e,"onInterrupt"),e},Vs,wS=function(e){e=!e.name&&e.default||e;var t=e.name,i=it(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ca,render:Wh,add:Uh,kill:US,modifier:OS,rawVars:0},o={targetTest:0,get:0,getSetter:Gh,aliases:{},register:0};if(co(),e!==r){if(mn[t])return;Hn(r,Hn(Cu(e,s),o)),is(r.prototype,is(s,Cu(e,o))),mn[r.prop=t]=r,e.targetTest&&(ql.push(r),zh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}tv(t,r),e.register&&e.register(En,r,on)},Be=255,jo={aqua:[0,Be,Be],lime:[0,Be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Be],navy:[0,0,128],white:[Be,Be,Be],olive:[128,128,0],yellow:[Be,Be,0],orange:[Be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Be,0,0],pink:[Be,192,203],cyan:[0,Be,Be],transparent:[Be,Be,Be,0]},Rc=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Be+.5|0},vv=function(e,t,i){var r=e?Vi(e)?[e>>16,e>>8&Be,e&Be]:0:jo.black,s,o,a,l,u,c,d,f,m,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),jo[e])r=jo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Be,r&Be,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Be,e&Be]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(pd),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Rc(l+1/3,s,o),r[1]=Rc(l,s,o),r[2]=Rc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Z0),i&&r.length<4&&(r[3]=1),r}else r=e.match(pd)||jo.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/Be,o=r[1]/Be,a=r[2]/Be,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(m=d-f,u=c>.5?m/(2-d-f):m/(d+f),l=d===s?(o-a)/m+(o<a?6:0):d===o?(a-s)/m+2:(s-o)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},xv=function(e){var t=[],i=[],r=-1;return e.split(pr).forEach(function(s){var o=s.match(Bs)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},mm=function(e,t,i){var r="",s=(e+r).match(pr),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=vv(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=xv(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(pr,"1").split(Bs),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(pr),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},pr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in jo)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),TS=/hsl[a]?\(/,yv=function(e){var t=e.join(" "),i;if(pr.lastIndex=0,pr.test(t))return i=TS.test(t),e[1]=mm(e[1],i),e[0]=mm(e[0],i,xv(e[1])),!0},Aa,_n=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,m,x=function h(p){var g=n()-r,_=p===!0,v,S,M,T;if(g>e&&(i+=g-t),r+=g,M=r-i,v=M-o,(v>0||_)&&(T=++d.frame,f=M-d.time*1e3,d.time=M=M/1e3,o+=v+(v>=s?4:s-v),S=1),_||(l=u(h)),S)for(m=0;m<a.length;m++)a[m](M,f,T,p)};return d={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){J0&&(!md&&Y0()&&(Rn=md=window,kh=Rn.document||{},Tn.gsap=En,(Rn.gsapVersions||(Rn.gsapVersions=[])).push(En.version),ev(wu||Rn.GreenSockGlobals||!Rn.gsap&&Rn||{}),c=Rn.requestAnimationFrame),l&&d.sleep(),u=c||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Aa=1,x(2))},sleep:function(){(c?Rn.cancelAnimationFrame:clearTimeout)(l),Aa=0,u=Ca},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,g,_){var v=g?function(S,M,T,b){p(S,M,T,b),d.remove(v)}:p;return d.remove(p),a[_?"unshift":"push"](v),co(),v},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&m>=g&&m--},_listeners:a},d}(),co=function(){return!Aa&&_n.wake()},Pe={},ES=/^[\d.\-M][\d.\-,\s]/,CS=/["']/g,bS=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(CS,"").trim():+u,r=l.substr(a+1).trim();return t},AS=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},PS=function(e){var t=(e+"").split("("),i=Pe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[bS(t[1])]:AS(e).split(",").map(sv)):Pe._CE&&ES.test(e)?Pe._CE("",e):i},Sv=function(e){return function(t){return 1-e(1-t)}},Mv=function n(e,t){for(var i=e._first,r;i;)i instanceof Qt?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},$r=function(e,t){return e&&(it(e)?e:Pe[e]||PS(e))||t},cs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return sn(e,function(a){Pe[a]=Tn[a]=s,Pe[o=a.toLowerCase()]=i;for(var l in s)Pe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Pe[a+"."+l]=s[l]}),s},wv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ic=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/hd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*nS((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:wv(a);return s=hd/s,l.config=function(u,c){return n(e,u,c)},l},kc=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:wv(i);return r.config=function(s){return n(e,s)},r};sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;cs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Pe.Linear.easeNone=Pe.none=Pe.Linear.easeIn;cs("Elastic",Ic("in"),Ic("out"),Ic());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};cs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);cs("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});cs("Circ",function(n){return-(q0(1-n*n)-1)});cs("Sine",function(n){return n===1?1:-tS(n*J1)+1});cs("Back",kc("in"),kc("out"),kc());Pe.SteppedEase=Pe.steps=Tn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ve;return function(a){return((r*Va(0,o,a)|0)+s)*i}}};ao.ease=Pe["quad.out"];sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Fh+=n+","+n+"Params,"});var Tv=function(e,t){this.id=eS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:iv,this.set=t?t.getSetter:Gh},fo=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,uo(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),Aa||_n.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,uo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(co(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Zu(this,i),!s._dp||s.parent||lv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ve||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),rv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+dm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+dm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?lo(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-Ve?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?bu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ve?0:this._rts,this.totalTime(Va(-this._delay,this._tDur,r),!0),$u(this),uS(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(co(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ve&&(this._tTime-=Ve)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&fi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(rn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=sS);var r=Ft;return Ft=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ft=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,hm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,hm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Dn(this,i),rn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,rn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ve:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ve,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Ve)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=it(i)?i:ov,a=function(){var u=r.then;r.then=null,it(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Xo(this)},n}();Hn(fo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ve,_prom:0,_ps:!1,_rts:1});var Qt=function(n){j0(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=rn(i.sortChildren),Qe&&fi(i.parent||Qe,Ai(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&uv(Ai(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return oa(0,arguments,this),this},t.from=function(r,s,o){return oa(1,arguments,this),this},t.fromTo=function(r,s,o,a){return oa(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new pt(r,s,Dn(this,o),1),this},t.call=function(r,s,o){return fi(this,pt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new pt(r,o,Dn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,sa(o).immediateRender=rn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,sa(a).immediateRender=rn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:bt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,m,x,h,p,g,_,v,S,M,T,b;if(this!==Qe&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,v=this._ts,g=!v,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=bt(c%p),c===l?(h=this._repeat,f=u):(h=~~(c/p),h&&h===c/p&&(f=u,h--),f>u&&(f=u)),M=lo(this._tTime,p),!a&&this._tTime&&M!==h&&(M=h),T&&h&1&&(f=u-f,b=1),h!==M&&!this._lock){var y=T&&M&1,E=y===(T&&h&1);if(h<M&&(y=!y),a=y?0:u,this._lock=1,this.render(a||(b?0:bt(h*p)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,a=y?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Mv(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=hS(this,bt(a),bt(f)),_&&(c-=f-(f=_._start))),this._tTime=c,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&(Bn(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(m=this._first;m;){if(x=m._next,(m._act||f>=m._start)&&m._ts&&_!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!g){_=0,x&&(c+=this._zTime=-Ve);break}}m=x}else{m=this._last;for(var P=r<0?r:f;m;){if(x=m._prev,(m._act||P<=m._end)&&m._ts&&_!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,s,o||Ft&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!g){_=0,x&&(c+=this._zTime=P?-Ve:Ve);break}}m=x}}if(_&&!s&&(this.pause(),_.render(f>=a?0:-Ve)._zTime=f>=a?1:-1,this._ts))return this._start=S,$u(this),this.render(r,s,o);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&vr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Bn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Vi(s)||(s=Dn(this,s,r)),!(r instanceof fo)){if(Ot(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Et(r))return this.addLabel(r,s);if(it(r))r=pt.delayedCall(0,r);else return this}return this!==r?fi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-On);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof pt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Et(r)?this.removeLabel(r):it(r)?this.killTweensOf(r):(Yu(this,r),r===this._recent&&(this._recent=this._last),Yr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(_n.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Dn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=pt.delayedCall(0,s||Ca,o);return a.data="isPause",this._hasPause=1,fi(this,a,Dn(this,r))},t.removePause=function(r){var s=this._first;for(r=Dn(this,r);s;)s._start===r&&s.data==="isPause"&&vr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)nr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Un(r),l=this._first,u=Vi(s),c;l;)l instanceof pt?oS(l._targets,a)&&(u?(!nr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Dn(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,m,x=pt.to(o,Hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Ve,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==p&&uo(x,p,0,1).render(x._time,!0,!0),m=1}c&&c.apply(x,d||[])}},s));return f?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Hn({startAt:{time:Dn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),pm(this,Dn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),pm(this,Dn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ve)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Yr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Yr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=On,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;uo(o,o===Qe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Qe._ts&&(rv(Qe,bu(r,Qe)),nv=_n.frame),_n.frame>=cm){cm+=Sn.autoSleep||120;var s=Qe._first;if((!s||!s._ts)&&Sn.autoSleep&&_n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_n.sleep()}}},e}(fo);Hn(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var LS=function(e,t,i,r,s,o,a){var l=new on(this._pt,e,t,0,1,Lv,null,s),u=0,c=0,d,f,m,x,h,p,g,_;for(l.b=i,l.e=r,i+="",r+="",(g=~r.indexOf("random("))&&(r=ba(r)),o&&(_=[i,r],o(_,e,t),i=_[0],r=_[1]),f=i.match(Lc)||[];d=Lc.exec(r);)x=d[0],h=r.substring(u,d.index),m?m=(m+1)%5:h.substr(-5)==="rgba("&&(m=1),x!==f[c++]&&(p=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:h||c===1?h:",",s:p,c:x.charAt(1)==="="?$s(p,x)-p:parseFloat(x)-p,m:m&&m<4?Math.round:0},u=Lc.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(K0.test(r)||g)&&(l.e=0),this._pt=l,l},Uh=function(e,t,i,r,s,o,a,l,u,c){it(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:it(d)?u?e[t.indexOf("set")||!it(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,m=it(d)?u?NS:Av:Vh,x;if(Et(r)&&(~r.indexOf("random(")&&(r=ba(r)),r.charAt(1)==="="&&(x=$s(f,r)+(zt(f)||0),(x||x===0)&&(r=x))),!c||f!==r||Md)return!isNaN(f*r)&&r!==""?(x=new on(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?FS:Pv,0,m),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!d&&!(t in e)&&Nh(t,r),LS.call(this,e,t,f,r,m,l||Sn.stringFilter,u))},DS=function(e,t,i,r,s){if(it(e)&&(e=aa(e,s,t,i,r)),!_i(e)||e.style&&e.nodeType||Ot(e)||$0(e))return Et(e)?aa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=aa(e[a],s,t,i,r);return o},Ev=function(e,t,i,r,s,o){var a,l,u,c;if(mn[e]&&(a=new mn[e]).init(s,a.rawVars?t[e]:DS(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new on(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Vs))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},nr,Md,Bh=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.onUpdateParams,d=r.callbackScope,f=r.runBackwards,m=r.yoyoEase,x=r.keyframes,h=r.autoRevert,p=e._dur,g=e._startAt,_=e._targets,v=e.parent,S=v&&v.data==="nested"?v.vars.targets:_,M=e._overwrite==="auto"&&!Rh,T=e.timeline,b,y,E,P,z,K,I,R,B,$,Y,L,G;if(T&&(!x||!s)&&(s="none"),e._ease=$r(s,ao.ease),e._yEase=m?Sv($r(m===!0?s:m,ao.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!T&&!!r.runBackwards,!T||x&&!r.stagger){if(R=_[0]?qr(_[0]).harness:0,L=R&&r[R.prop],b=Cu(r,zh),g&&(g._zTime<0&&g.progress(1),t<0&&f&&a&&!h?g.render(-1,!0):g.revert(f&&p?jl:rS),g._lazy=0),o){if(vr(e._startAt=pt.set(_,Hn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!g&&rn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft||!a&&!h)&&e._startAt.revert(jl),a&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(f&&p&&!g){if(t&&(a=!1),E=Hn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&rn(l),immediateRender:a,stagger:0,parent:v},b),L&&(E[R.prop]=L),vr(e._startAt=pt.set(_,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft?e._startAt.revert(jl):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Ve,Ve);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&rn(l)||l&&!p,y=0;y<_.length;y++){if(z=_[y],I=z._gsap||Oh(_)[y]._gsap,e._ptLookup[y]=$={},gd[I.id]&&hr.length&&Eu(),Y=S===_?y:S.indexOf(z),R&&(B=new R).init(z,L||b,e,Y,S)!==!1&&(e._pt=P=new on(e._pt,z,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(V){$[V]=P}),B.priority&&(K=1)),!R||L)for(E in b)mn[E]&&(B=Ev(E,b,e,Y,z,S))?B.priority&&(K=1):$[E]=P=Uh.call(e,z,E,"get",b[E],Y,S,0,r.stringFilter);e._op&&e._op[y]&&e.kill(z,e._op[y]),M&&e._pt&&(nr=e,Qe.killTweensOf(z,$,e.globalTime(t)),G=!e.parent,nr=0),e._pt&&l&&(gd[I.id]=1)}K&&Dv(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!G,x&&t<=0&&T.render(On,!0,!0)},RS=function(e,t,i,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Md=1,e.vars[t]="+=0",Bh(e,a),Md=0,1;l.push(u)}for(f=l.length;f--;)c=l[f],u=c._pt||c,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,c.e&&(c.e=rt(i)+zt(c.e)),c.b&&(c.b=u.s+zt(c.b))},IS=function(e,t){var i=e[0]?qr(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=is({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},kS=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Ot(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},aa=function(e,t,i,r,s){return it(e)?e.call(t,i,r,s):Et(e)&&~e.indexOf("random(")?ba(e):e},Cv=Fh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bv={};sn(Cv+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return bv[n]=1});var pt=function(n){j0(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:sa(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,x=l.keyframes,h=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,_=r.parent||Qe,v=(Ot(i)||$0(i)?Vi(i[0]):"length"in r)?[i]:Un(i),S,M,T,b,y,E,P,z;if(a._targets=v.length?Oh(v):Tu("GSAP target "+i+" not found. https://greensock.com",!Sn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,x||f||fl(u)||fl(c)){if(r=a.vars,S=a.timeline=new Qt({data:"nested",defaults:h||{},targets:_&&_.data==="nested"?_.vars.targets:v}),S.kill(),S.parent=S._dp=Ai(a),S._start=0,f||fl(u)||fl(c)){if(b=v.length,P=f&&hv(f),_i(f))for(y in f)~Cv.indexOf(y)&&(z||(z={}),z[y]=f[y]);for(M=0;M<b;M++)T=Cu(r,bv),T.stagger=0,g&&(T.yoyoEase=g),z&&is(T,z),E=v[M],T.duration=+aa(u,Ai(a),M,E,v),T.delay=(+aa(c,Ai(a),M,E,v)||0)-a._delay,!f&&b===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),S.to(E,T,P?P(M,E,v):0),S._ease=Pe.none;S.duration()?u=c=0:a.timeline=0}else if(x){sa(Hn(S.vars.defaults,{ease:"none"})),S._ease=$r(x.ease||r.ease||"none");var K=0,I,R,B;if(Ot(x))x.forEach(function($){return S.to(v,$,">")}),S.duration();else{T={};for(y in x)y==="ease"||y==="easeEach"||kS(y,x[y],T,x.easeEach);for(y in T)for(I=T[y].sort(function($,Y){return $.t-Y.t}),K=0,M=0;M<I.length;M++)R=I[M],B={ease:R.e,duration:(R.t-(M?I[M-1].t:0))/100*u},B[y]=R.v,S.to(v,B,K),K+=B.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return m===!0&&!Rh&&(nr=Ai(a),Qe.killTweensOf(v),nr=0),fi(_,Ai(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!x&&a._start===bt(_._time)&&rn(d)&&cS(Ai(a))&&_.data!=="nested")&&(a._tTime=-Ve,a.render(Math.max(0,-c)||0)),p&&uv(Ai(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Ve&&!c?l:r<Ve?0:r,f,m,x,h,p,g,_,v,S;if(!u)dS(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=d,v=this.timeline,this._repeat){if(h=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(h*100+r,s,o);if(f=bt(d%h),d===l?(x=this._repeat,f=u):(x=~~(d/h),x&&x===d/h&&(f=u,x--),f>u&&(f=u)),g=this._yoyo&&x&1,g&&(S=this._yEase,f=u-f),p=lo(this._tTime,h),f===a&&!o&&this._initted)return this._tTime=d,this;x!==p&&(v&&this._yEase&&Mv(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=o=1,this.render(bt(h*x),!0).invalidate()._lock=0))}if(!this._initted){if(cv(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(S||this._ease)(f/u),this._from&&(this.ratio=_=1-_),f&&!a&&!s&&(Bn(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(_,m.d),m=m._next;v&&v.render(r<0?r:!f&&g?-Ve:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&_d(this,r,s,o),Bn(this,"onUpdate")),this._repeat&&x!==p&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&_d(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&vr(this,1),!s&&!(c&&!a)&&(d||a||g)&&(Bn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){Aa||_n.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Bh(this,l),u=this._ease(l/this._dur),RS(this,r,s,o,a,u,l)?this.resetTo(r,s,o,a):(Zu(this,0),this.parent||av(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Xo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,nr&&nr.vars.overwrite!==!0)._first||Xo(this),this.parent&&o!==this.timeline.totalDuration()&&uo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Un(r):a,u=this._ptLookup,c=this._pt,d,f,m,x,h,p,g;if((!s||s==="all")&&lS(a,l))return s==="all"&&(this._pt=0),Xo(this);for(d=this._op=this._op||[],s!=="all"&&(Et(s)&&(h={},sn(s,function(_){return h[_]=1}),s=h),s=IS(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=u[g],s==="all"?(d[g]=s,x=f,m={}):(m=d[g]=d[g]||{},x=s);for(h in x)p=f&&f[h],p&&((!("kill"in p.d)||p.d.kill(h)===!0)&&Yu(this,p,"_pt"),delete f[h]),m!=="all"&&(m[h]=1)}return this._initted&&!this._pt&&c&&Xo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return oa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return oa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Qe.killTweensOf(r,s,o)},e}(fo);Hn(pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});sn("staggerTo,staggerFrom,staggerFromTo",function(n){pt[n]=function(){var e=new Qt,t=xd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Vh=function(e,t,i){return e[t]=i},Av=function(e,t,i){return e[t](i)},NS=function(e,t,i,r){return e[t](r.fp,i)},zS=function(e,t,i){return e.setAttribute(t,i)},Gh=function(e,t){return it(e[t])?Av:Ih(e[t])&&e.setAttribute?zS:Vh},Pv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},FS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Lv=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Wh=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},OS=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},US=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Yu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},BS=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Dv=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},on=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Pv,this.d=l||this,this.set=u||Vh,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=BS,this.m=i,this.mt=s,this.tween=r},n}();sn(Fh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return zh[n]=1});Tn.TweenMax=Tn.TweenLite=pt;Tn.TimelineLite=Tn.TimelineMax=Qt;Qe=new Qt({sortChildren:!1,defaults:ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=yv;var ho=[],Yl={},VS=[],gm=0,Nc=function(e){return(Yl[e]||VS).map(function(t){return t()})},wd=function(){var e=Date.now(),t=[];e-gm>2&&(Nc("matchMediaInit"),ho.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Rn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Nc("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),gm=e,Nc("matchMedia"))},Rv=function(){function n(t,i){this.selector=i&&yd(i),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){it(i)&&(s=r,r=i,i=it);var o=this,a=function(){var u=ut,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=yd(s)),ut=o,d=r.apply(o,arguments),it(d)&&o._r.push(d),ut=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===it?a(o):i?o[i]=a:a},e.ignore=function(i){var r=ut;ut=null,i(this),ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof pt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof fo)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=ho.indexOf(this);~a&&ho.splice(a,1)}},e.revert=function(i){this.kill(i||{})},n}(),GS=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(i,r,s){_i(i)||(i={matches:i});var o=new Rv(0,s||this.scope),a=o.conditions={},l,u,c;this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Rn.matchMedia(i[u]),l&&(ho.indexOf(o)<0&&ho.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(wd):l.addEventListener("change",wd)));return c&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Au={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return wS(r)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return Qe.getTweensOf(e,t)},getProperty:function(e,t,i,r){Et(e)&&(e=Un(e)[0]);var s=qr(e||{}).get,o=i?ov:sv;return i==="native"&&(i=""),e&&(t?o((mn[t]&&mn[t].get||s)(e,t,i,r)):function(a,l,u){return o((mn[a]&&mn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Un(e),e.length>1){var r=e.map(function(c){return En.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=mn[t],a=qr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Vs._pt=0,d.init(e,i?c+i:c,Vs,0,[e]),d.render(1,d),Vs._pt&&Wh(1,Vs)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=En.to(e,is((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Qe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$r(e.ease,ao.ease)),fm(ao,e||{})},config:function(e){return fm(Sn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mn[a]&&!Tn[a]&&Tu(t+" effect requires "+a+" plugin.")}),Dc[t]=function(a,l,u){return i(Un(a),Hn(l||{},s),u)},o&&(Qt.prototype[t]=function(a,l,u){return this.add(Dc[t](a,_i(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Pe[e]=$r(t)},parseEase:function(e,t){return arguments.length?$r(e,t):Pe},getById:function(e){return Qe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Qt(e),r,s;for(i.smoothChildTiming=rn(e.smoothChildTiming),Qe.remove(i),i._dp=0,i._time=i._tTime=Qe._time,r=Qe._first;r;)s=r._next,(t||!(!r._dur&&r instanceof pt&&r.vars.onComplete===r._targets[0]))&&fi(i,r,r._start-r._delay),r=s;return fi(Qe,i,0),i},context:function(e,t){return e?new Rv(e,t):ut},matchMedia:function(e){return new GS(e)},matchMediaRefresh:function(){return ho.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||wd()},addEventListener:function(e,t){var i=Yl[e]||(Yl[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Yl[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:yS,wrapYoyo:SS,distribute:hv,random:mv,snap:pv,normalize:xS,getUnit:zt,clamp:mS,splitColor:vv,toArray:Un,selector:yd,mapRange:_v,pipe:_S,unitize:vS,interpolate:MS,shuffle:dv},install:ev,effects:Dc,ticker:_n,updateRoot:Qt.updateRoot,plugins:mn,globalTimeline:Qe,core:{PropTween:on,globals:tv,Tween:pt,Timeline:Qt,Animation:fo,getCache:qr,_removeLinkedListItem:Yu,reverting:function(){return Ft},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return Rh=e}}};sn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Au[n]=pt[n]});_n.add(Qt.updateRoot);Vs=Au.to({},{duration:0});var WS=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},HS=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=WS(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},zc=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Et(s)&&(l={},sn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}HS(a,s)}}}},En=Au.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Ft?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},zc("roundProps",Sd),zc("modifiers"),zc("snap",pv))||Au;pt.version=Qt.version=En.version="3.11.4";J0=1;Y0()&&co();Pe.Power0;Pe.Power1;Pe.Power2;Pe.Power3;Pe.Power4;Pe.Linear;Pe.Quad;Pe.Cubic;Pe.Quart;Pe.Quint;Pe.Strong;Pe.Elastic;Pe.Back;Pe.SteppedEase;Pe.Bounce;Pe.Sine;Pe.Expo;Pe.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _m,ir,Zs,Hh,Gr,vm,Xh,XS=function(){return typeof window<"u"},Gi={},Nr=180/Math.PI,Ks=Math.PI/180,ds=Math.atan2,xm=1e8,jh=/([A-Z])/g,jS=/(left|right|width|margin|padding|x)/i,qS=/[\s,\(]\S/,ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Td=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},YS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$S=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZS=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Iv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},kv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},KS=function(e,t,i){return e.style[t]=i},QS=function(e,t,i){return e.style.setProperty(t,i)},JS=function(e,t,i){return e._gsap[t]=i},eM=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},tM=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},nM=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Je="transform",ii=Je+"Origin",iM=function(e,t){var i=this,r=this.target,s=r.style;if(e in Gi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Li(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Li(r,e)),this.props.indexOf(Je)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ii,t,"")),e=Je}(s||t)&&this.props.push(e,t,s[e])},Nv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rM=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].replace(jh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Xh(),s&&!s.isStart&&!i[Je]&&(Nv(i),r.uncache=1)}},zv=function(e,t){var i={target:e,props:[],revert:rM,save:iM};return t&&t.split(",").forEach(function(r){return i.save(r)}),i},Fv,Ed=function(e,t){var i=ir.createElementNS?ir.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ir.createElement(e);return i.style?i:ir.createElement(e)},mi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(jh,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,po(t)||t,1)||""},ym="O,Moz,ms,Ms,Webkit".split(","),po=function(e,t,i){var r=t||Gr,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ym[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ym[o]:"")+e},Cd=function(){XS()&&window.document&&(_m=window,ir=_m.document,Zs=ir.documentElement,Gr=Ed("div")||{style:{}},Ed("div"),Je=po(Je),ii=Je+"Origin",Gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Fv=!!po("perspective"),Xh=En.core.reverting,Hh=1)},Fc=function n(e){var t=Ed("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Zs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Zs.removeChild(t),this.style.cssText=s,o},Sm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Ov=function(e){var t;try{t=e.getBBox()}catch{t=Fc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Fc||(t=Fc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Sm(e,["x","cx","x1"])||0,y:+Sm(e,["y","cy","y1"])||0,width:0,height:0}:t},Uv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ov(e))},Pa=function(e,t){if(t){var i=e.style;t in Gi&&t!==ii&&(t=Je),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(jh,"-$1").toLowerCase())):i.removeAttribute(t)}},rr=function(e,t,i,r,s,o){var a=new on(e._pt,t,i,0,1,o?kv:Iv);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Mm={deg:1,rad:1,turn:1},sM={grid:1,flex:1},xr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Gr.style,l=jS.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",m=r==="%",x,h,p,g;return r===o||!s||Mm[r]||Mm[o]?s:(o!=="px"&&!f&&(s=n(e,t,i,"px")),g=e.getCTM&&Uv(e),(m||o==="%")&&(Gi[t]||~t.indexOf("adius"))?(x=g?e.getBBox()[l?"width":"height"]:e[c],rt(m?s/x*d:s/100*x)):(a[l?"width":"height"]=d+(f?o:r),h=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,g&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===ir||!h.appendChild)&&(h=ir.body),p=h._gsap,p&&m&&p.width&&l&&p.time===_n.time&&!p.uncache?rt(s/p.width*d):((m||o==="%")&&!sM[mi(h,"display")]&&(a.position=mi(e,"position")),h===e&&(a.position="static"),h.appendChild(Gr),x=Gr[c],h.removeChild(Gr),a.position="absolute",l&&m&&(p=qr(h),p.time=_n.time,p.width=h[c]),rt(f?x*s/d:x&&s?d/x*s:0))))},Li=function(e,t,i,r){var s;return Hh||Cd(),t in ki&&t!=="transform"&&(t=ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),Gi[t]&&t!=="transform"?(s=Da(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Lu(mi(e,ii))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Pu[t]&&Pu[t](e,t,i)||mi(e,t)||iv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?xr(e,t,s,i)+i:s},oM=function(e,t,i,r){if(!i||i==="none"){var s=po(t,e,1),o=s&&mi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=mi(e,"borderTopColor"))}var a=new on(this._pt,e.style,t,0,1,Lv),l=0,u=0,c,d,f,m,x,h,p,g,_,v,S,M;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=mi(e,t)||r,e.style[t]=i),c=[i,r],yv(c),i=c[0],r=c[1],f=i.match(Bs)||[],M=r.match(Bs)||[],M.length){for(;d=Bs.exec(r);)p=d[0],_=r.substring(l,d.index),x?x=(x+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(x=1),p!==(h=f[u++]||"")&&(m=parseFloat(h)||0,S=h.substr((m+"").length),p.charAt(1)==="="&&(p=$s(m,p)+S),g=parseFloat(p),v=p.substr((g+"").length),l=Bs.lastIndex-v.length,v||(v=v||Sn.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(m=xr(e,t,h,v)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:m,c:g-m,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?kv:Iv;return K0.test(r)&&(a.e=0),this._pt=a,a},wm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aM=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=wm[i]||i,t[1]=wm[r]||r,t.join(" ")},lM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Gi[a]&&(l=1,a=a==="transformOrigin"?ii:Je),Pa(i,a);l&&(Pa(i,Je),o&&(o.svg&&i.removeAttribute("transform"),Da(i,1),o.uncache=1,Nv(r)))}},Pu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new on(e._pt,t,i,0,0,lM);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},La=[1,0,0,1,0,0],Bv={},Vv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tm=function(e){var t=mi(e,Je);return Vv(t)?La:t.substr(7).match(Z0).map(rt)},qh=function(e,t){var i=e._gsap||qr(e),r=e.style,s=Tm(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?La:s):(s===La&&!e.offsetParent&&e!==Zs&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Zs.appendChild(e)),s=Tm(e),l?r.display=l:Pa(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Zs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},bd=function(e,t,i,r,s,o){var a=e._gsap,l=s||qh(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],x=l[1],h=l[2],p=l[3],g=l[4],_=l[5],v=t.split(" "),S=parseFloat(v[0])||0,M=parseFloat(v[1])||0,T,b,y,E;i?l!==La&&(b=m*p-x*h)&&(y=S*(p/b)+M*(-h/b)+(h*_-p*g)/b,E=S*(-x/b)+M*(m/b)-(m*_-x*g)/b,S=y,M=E):(T=Ov(e),S=T.x+(~v[0].indexOf("%")?S/100*T.width:S),M=T.y+(~(v[1]||v[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&a.smooth?(g=S-u,_=M-c,a.xOffset=d+(g*m+_*h)-g,a.yOffset=f+(g*x+_*p)-_):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ii]="0px 0px",o&&(rr(o,a,"xOrigin",u,S),rr(o,a,"yOrigin",c,M),rr(o,a,"xOffset",d,a.xOffset),rr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},Da=function(e,t){var i=e._gsap||new Tv(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=mi(e,ii)||"0",c,d,f,m,x,h,p,g,_,v,S,M,T,b,y,E,P,z,K,I,R,B,$,Y,L,G,V,N,O,J,Q,ie;return c=d=f=h=p=g=_=v=S=0,m=x=1,i.svg=!!(e.getCTM&&Uv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Je]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Je]!=="none"?l[Je]:"")),r.scale=r.rotate=r.translate="none"),b=qh(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),bd(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,b)),M=i.xOrigin||0,T=i.yOrigin||0,b!==La&&(z=b[0],K=b[1],I=b[2],R=b[3],c=B=b[4],d=$=b[5],b.length===6?(m=Math.sqrt(z*z+K*K),x=Math.sqrt(R*R+I*I),h=z||K?ds(K,z)*Nr:0,_=I||R?ds(I,R)*Nr+h:0,_&&(x*=Math.abs(Math.cos(_*Ks))),i.svg&&(c-=M-(M*z+T*I),d-=T-(M*K+T*R))):(ie=b[6],J=b[7],V=b[8],N=b[9],O=b[10],Q=b[11],c=b[12],d=b[13],f=b[14],y=ds(ie,O),p=y*Nr,y&&(E=Math.cos(-y),P=Math.sin(-y),Y=B*E+V*P,L=$*E+N*P,G=ie*E+O*P,V=B*-P+V*E,N=$*-P+N*E,O=ie*-P+O*E,Q=J*-P+Q*E,B=Y,$=L,ie=G),y=ds(-I,O),g=y*Nr,y&&(E=Math.cos(-y),P=Math.sin(-y),Y=z*E-V*P,L=K*E-N*P,G=I*E-O*P,Q=R*P+Q*E,z=Y,K=L,I=G),y=ds(K,z),h=y*Nr,y&&(E=Math.cos(y),P=Math.sin(y),Y=z*E+K*P,L=B*E+$*P,K=K*E-z*P,$=$*E-B*P,z=Y,B=L),p&&Math.abs(p)+Math.abs(h)>359.9&&(p=h=0,g=180-g),m=rt(Math.sqrt(z*z+K*K+I*I)),x=rt(Math.sqrt($*$+ie*ie)),y=ds(B,$),_=Math.abs(y)>2e-4?y*Nr:0,S=Q?1/(Q<0?-Q:Q):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Vv(mi(e,Je)),Y&&e.setAttribute("transform",Y))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(m*=-1,_+=h<=0?180:-180,h+=h<=0?180:-180):(x*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=rt(m),i.scaleY=rt(x),i.rotation=rt(h)+a,i.rotationX=rt(p)+a,i.rotationY=rt(g)+a,i.skewX=_+a,i.skewY=v+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(r[ii]=Lu(u)),i.xOffset=i.yOffset=0,i.force3D=Sn.force3D,i.renderTransform=i.svg?cM:Fv?Gv:uM,i.uncache=0,i},Lu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Oc=function(e,t,i){var r=zt(t);return rt(parseFloat(t)+parseFloat(xr(e,"x",i+"px",r)))+r},uM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Gv(e,t)},Ar="0deg",Io="0px",Pr=") ",Gv=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,m=i.skewY,x=i.scaleX,h=i.scaleY,p=i.transformPerspective,g=i.force3D,_=i.target,v=i.zOrigin,S="",M=g==="auto"&&e&&e!==1||g===!0;if(v&&(d!==Ar||c!==Ar)){var T=parseFloat(c)*Ks,b=Math.sin(T),y=Math.cos(T),E;T=parseFloat(d)*Ks,E=Math.cos(T),o=Oc(_,o,b*E*-v),a=Oc(_,a,-Math.sin(T)*-v),l=Oc(_,l,y*E*-v+v)}p!==Io&&(S+="perspective("+p+Pr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(M||o!==Io||a!==Io||l!==Io)&&(S+=l!==Io||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Pr),u!==Ar&&(S+="rotate("+u+Pr),c!==Ar&&(S+="rotateY("+c+Pr),d!==Ar&&(S+="rotateX("+d+Pr),(f!==Ar||m!==Ar)&&(S+="skew("+f+", "+m+Pr),(x!==1||h!==1)&&(S+="scale("+x+", "+h+Pr),_.style[Je]=S||"translate(0, 0)"},cM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,m=i.target,x=i.xOrigin,h=i.yOrigin,p=i.xOffset,g=i.yOffset,_=i.forceCSS,v=parseFloat(o),S=parseFloat(a),M,T,b,y,E;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ks,u*=Ks,M=Math.cos(l)*d,T=Math.sin(l)*d,b=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=Ks,E=Math.tan(u-c),E=Math.sqrt(1+E*E),b*=E,y*=E,c&&(E=Math.tan(c),E=Math.sqrt(1+E*E),M*=E,T*=E)),M=rt(M),T=rt(T),b=rt(b),y=rt(y)):(M=d,y=f,T=b=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=xr(m,"x",o,"px"),S=xr(m,"y",a,"px")),(x||h||p||g)&&(v=rt(v+x-(x*M+h*b)+p),S=rt(S+h-(x*T+h*y)+g)),(r||s)&&(E=m.getBBox(),v=rt(v+r/100*E.width),S=rt(S+s/100*E.height)),E="matrix("+M+","+T+","+b+","+y+","+v+","+S+")",m.setAttribute("transform",E),_&&(m.style[Je]=E)},fM=function(e,t,i,r,s){var o=360,a=Et(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Nr:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*xm)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*xm)%o-~~(u/o)*o)),e._pt=f=new on(e._pt,t,i,r,u,YS),f.e=c,f.u="deg",e._props.push(i),f},Em=function(e,t){for(var i in t)e[i]=t[i];return e},dM=function(e,t,i){var r=Em({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,m,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Je]=t,a=Da(i,1),Pa(i,Je),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Je],o[Je]=t,a=Da(i,1),o[Je]=u);for(l in Gi)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(m=zt(u),x=zt(c),d=m!==x?xr(i,l,u,x):parseFloat(u),f=parseFloat(c),e._pt=new on(e._pt,a,l,d,f-d,Td),e._pt.u=x||0,e._props.push(l));Em(a,r)};sn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Pu[e>1?"border"+n:n]=function(a,l,u,c,d){var f,m;if(arguments.length<4)return f=o.map(function(x){return Li(a,x,u)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(c+"").split(" "),m={},o.forEach(function(x,h){return m[x]=f[h]=f[h]||f[(h-1)/2|0]}),a.init(l,m,d)}});var Wv={name:"css",register:Cd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,m,x,h,p,g,_,v,S,M,T,b,y;Hh||Cd(),this.styles=this.styles||zv(e),y=this.styles.props,this.tween=i;for(h in t)if(h!=="autoRound"&&(c=t[h],!(mn[h]&&Ev(h,t,i,r,e,s)))){if(m=typeof c,x=Pu[h],m==="function"&&(c=c.call(i,r,e,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=ba(c)),x)x(this,e,h,c,i)&&(b=1);else if(h.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(h)+"").trim(),c+="",pr.lastIndex=0,pr.test(u)||(p=zt(u),g=zt(c)),g?p!==g&&(u=xr(e,h,u,g)+g):p&&(c+=p),this.add(a,"setProperty",u,c,r,s,0,0,h),o.push(h),y.push(h,0,a[h]);else if(m!=="undefined"){if(l&&h in l?(u=typeof l[h]=="function"?l[h].call(i,r,e,s):l[h],Et(u)&&~u.indexOf("random(")&&(u=ba(u)),zt(u+"")||(u+=Sn.units[h]||zt(Li(e,h))||""),(u+"").charAt(1)==="="&&(u=Li(e,h))):u=Li(e,h),f=parseFloat(u),_=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),_&&(c=c.substr(2)),d=parseFloat(c),h in ki&&(h==="autoAlpha"&&(f===1&&Li(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,a.visibility),rr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),h!=="scale"&&h!=="transform"&&(h=ki[h],~h.indexOf(",")&&(h=h.split(",")[0]))),v=h in Gi,v){if(this.styles.save(h),S||(M=e._gsap,M.renderTransform&&!t.parseTransform||Da(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new on(this._pt,a,Je,0,1,M.renderTransform,M,0,-1),S.dep=1),h==="scale")this._pt=new on(this._pt,M,"scaleY",M.scaleY,(_?$s(M.scaleY,_+d):d)-M.scaleY||0,Td),this._pt.u=0,o.push("scaleY",h),h+="X";else if(h==="transformOrigin"){y.push(ii,0,a[ii]),c=aM(c),M.svg?bd(e,c,0,T,0,this):(g=parseFloat(c.split(" ")[2])||0,g!==M.zOrigin&&rr(this,M,"zOrigin",M.zOrigin,g),rr(this,a,h,Lu(u),Lu(c)));continue}else if(h==="svgOrigin"){bd(e,c,1,T,0,this);continue}else if(h in Bv){fM(this,M,h,f,_?$s(f,_+c):c);continue}else if(h==="smoothOrigin"){rr(this,M,"smooth",M.smooth,c);continue}else if(h==="force3D"){M[h]=c;continue}else if(h==="transform"){dM(this,c,e);continue}}else h in a||(h=po(h)||h);if(v||(d||d===0)&&(f||f===0)&&!qS.test(c)&&h in a)p=(u+"").substr((f+"").length),d||(d=0),g=zt(c)||(h in Sn.units?Sn.units[h]:p),p!==g&&(f=xr(e,h,u,g)),this._pt=new on(this._pt,v?M:a,h,f,(_?$s(f,_+d):d)-f,!v&&(g==="px"||h==="zIndex")&&t.autoRound!==!1?ZS:Td),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=u,this._pt.r=$S);else if(h in a)oM.call(this,e,h,u,_?_+c:c);else if(h in e)this.add(e,h,u||e[h],_?_+c:c,r,s);else if(h!=="parseTransform"){Nh(h,c);continue}v||(h in a?y.push(h,0,a[h]):y.push(h,1,u||e[h])),o.push(h)}}b&&Dv(this)},render:function(e,t){if(t.tween._time||!Xh())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Li,aliases:ki,getSetter:function(e,t,i){var r=ki[t];return r&&r.indexOf(",")<0&&(t=r),t in Gi&&t!==ii&&(e._gsap.x||Li(e,"x"))?i&&vm===i?t==="scale"?eM:JS:(vm=i||{})&&(t==="scale"?tM:nM):e.style&&!Ih(e.style[t])?KS:~t.indexOf("-")?QS:Gh(e,t)},core:{_removeProperty:Pa,_getMatrix:qh}};En.utils.checkPrefix=po;En.core.getStyleSaver=zv;(function(n,e,t,i){var r=sn(n+","+e+","+t,function(s){Gi[s]=1});sn(e,function(s){Sn.units[s]="deg",Bv[s]=1}),ki[r[13]]=n+","+e,sn(i,function(s){var o=s.split(":");ki[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Sn.units[n]="px"});En.registerPlugin(Wv);var Hv=En.registerPlugin(Wv)||En;Hv.core.Tween;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="148",hM=0,Cm=1,pM=2,Xv=1,mM=2,qo=3,rs=0,Mn=1,$h=2,dl=3,mr=0,Qs=1,Ad=2,bm=3,Am=4,gM=5,bs=100,_M=101,vM=102,Pm=103,Lm=104,xM=200,yM=201,SM=202,MM=203,jv=204,qv=205,wM=206,TM=207,EM=208,CM=209,bM=210,AM=0,PM=1,LM=2,Pd=3,DM=4,RM=5,IM=6,kM=7,Yv=0,NM=1,zM=2,zi=0,FM=1,OM=2,UM=3,BM=4,VM=5,$v=300,mo=301,go=302,Ld=303,Dd=304,Ku=306,Rd=1e3,Jn=1001,Id=1002,qt=1003,Dm=1004,Uc=1005,Nn=1006,GM=1007,Ra=1008,ss=1009,WM=1010,HM=1011,Zv=1012,XM=1013,Wr=1014,Hr=1015,Ia=1016,jM=1017,qM=1018,Js=1020,YM=1021,$M=1022,ei=1023,ZM=1024,KM=1025,Zr=1026,_o=1027,QM=1028,JM=1029,ew=1030,tw=1031,nw=1033,Bc=33776,Vc=33777,Gc=33778,Wc=33779,Rm=35840,Im=35841,km=35842,Nm=35843,iw=36196,zm=37492,Fm=37496,Om=37808,Um=37809,Bm=37810,Vm=37811,Gm=37812,Wm=37813,Hm=37814,Xm=37815,jm=37816,qm=37817,Ym=37818,$m=37819,Zm=37820,Km=37821,Qm=36492,os=3e3,Xe=3001,rw=3200,sw=3201,ow=0,aw=1,li="srgb",ka="srgb-linear",Hc=7680,lw=519,Jm=35044,eg="300 es",kd=1035;class Mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,tg=180/Math.PI;function Ga(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function gn(n,e,t){return Math.max(e,Math.min(t,n))}function uw(n,e){return(n%e+e)%e}function jc(n,e,t){return(1-t)*n+t*e}function ng(n){return(n&n-1)===0&&n!==0}function Nd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hl(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xn{constructor(){xn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],m=i[5],x=i[8],h=r[0],p=r[3],g=r[6],_=r[1],v=r[4],S=r[7],M=r[2],T=r[5],b=r[8];return s[0]=o*h+a*_+l*M,s[3]=o*p+a*v+l*T,s[6]=o*g+a*S+l*b,s[1]=u*h+c*_+d*M,s[4]=u*p+c*v+d*T,s[7]=u*g+c*S+d*b,s[2]=f*h+m*_+x*M,s[5]=f*p+m*v+x*T,s[8]=f*g+m*S+x*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,m=u*s-o*l,x=t*d+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=m*h,e[7]=(i*l-u*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qc.makeScale(e,t)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(qc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new xn;function Kv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $l(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Yc={[li]:{[ka]:Kr},[ka]:{[li]:$l}},Ht={legacyMode:!0,get workingColorSpace(){return ka},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Yc[e]&&Yc[e][t]!==void 0){const i=Yc[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dt={r:0,g:0,b:0},qn={h:0,s:0,l:0},pl={h:0,s:0,l:0};function $c(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ml(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ht.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ht.workingColorSpace){if(e=uw(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=$c(o,s,e+1/3),this.g=$c(o,s,e),this.b=$c(o,s,e-1/3)}return Ht.toWorkingColorSpace(this,r),this}setStyle(e,t=li){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ht.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ht.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ht.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ht.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=li){const i=Qv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=$l(e.r),this.g=$l(e.g),this.b=$l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Ht.fromWorkingColorSpace(ml(this,dt),e),gn(dt.r*255,0,255)<<16^gn(dt.g*255,0,255)<<8^gn(dt.b*255,0,255)<<0}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(ml(this,dt),t);const i=dt.r,r=dt.g,s=dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(ml(this,dt),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=li){return Ht.fromWorkingColorSpace(ml(this,dt),e),e!==li?`color(${e} ${dt.r} ${dt.g} ${dt.b})`:`rgb(${dt.r*255|0},${dt.g*255|0},${dt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(qn),qn.h+=e,qn.s+=t,qn.l+=i,this.setHSL(qn.h,qn.s,qn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(pl);const i=jc(qn.h,pl.h,t),r=jc(qn.s,pl.s,t),s=jc(qn.l,pl.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ze.NAMES=Qv;let hs;class Jv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=Na("canvas")),hs.width=e.width,hs.height=e.height;const i=hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Kr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kr(t[i]/255)*255):t[i]=Kr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ex{constructor(e=null){this.isSource=!0,this.uuid=Ga(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zc(r[o].image)):s.push(Zc(r[o]))}else s=Zc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Zc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cw=0;class an extends Mo{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,i=Jn,r=Jn,s=Nn,o=Ra,a=ei,l=ss,u=an.DEFAULT_ANISOTROPY,c=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=Ga(),this.name="",this.source=new ex(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=$v;an.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],m=l[5],x=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,S=(m+1)/2,M=(g+1)/2,T=(c+f)/4,b=(d+h)/4,y=(x+p)/4;return v>S&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=b/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=b/s,r=y/s),this.set(i,r,s,t),this}let _=Math.sqrt((p-x)*(p-x)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(d-h)/_,this.z=(f-c)/_,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class as extends Mo{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Nn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ex(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tx extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fw extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=h;return}if(d!==h||l!==f||u!==m||c!==x){let p=1-a;const g=l*f+u*m+c*x+d*h,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const M=Math.sqrt(v),T=Math.atan2(M,g*_);p=Math.sin(p*T)/M,a=Math.sin(a*T)/M}const S=a*_;if(l=l*p+f*S,u=u*p+m*S,c=c*p+x*S,d=d*p+h*S,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*m-u*f,e[t+1]=l*x+c*f+u*d-a*m,e[t+2]=u*x+c*m+a*f-l*d,e[t+3]=c*x-a*d-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d-f*m*x;break;case"YXZ":this._x=f*c*d+u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d+f*m*x;break;case"ZXY":this._x=f*c*d-u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d-f*m*x;break;case"ZYX":this._x=f*c*d-u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d+f*m*x;break;case"YZX":this._x=f*c*d+u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d-f*m*x;break;case"XZY":this._x=f*c*d-u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ig.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ig.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new U,ig=new Wa;class Ha{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Lr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Lr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Lr)}else i.boundingBox===null&&i.computeBoundingBox(),Qc.copy(i.boundingBox),Qc.applyMatrix4(e.matrixWorld),this.union(Qc);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Lr),Lr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),gl.subVectors(this.max,ko),ps.subVectors(e.a,ko),ms.subVectors(e.b,ko),gs.subVectors(e.c,ko),ji.subVectors(ms,ps),qi.subVectors(gs,ms),Dr.subVectors(ps,gs);let t=[0,-ji.z,ji.y,0,-qi.z,qi.y,0,-Dr.z,Dr.y,ji.z,0,-ji.x,qi.z,0,-qi.x,Dr.z,0,-Dr.x,-ji.y,ji.x,0,-qi.y,qi.x,0,-Dr.y,Dr.x,0];return!Jc(t,ps,ms,gs,gl)||(t=[1,0,0,0,1,0,0,0,1],!Jc(t,ps,ms,gs,gl))?!1:(_l.crossVectors(ji,qi),t=[_l.x,_l.y,_l.z],Jc(t,ps,ms,gs,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Lr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Lr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new U,new U,new U,new U,new U,new U,new U,new U],Lr=new U,Qc=new Ha,ps=new U,ms=new U,gs=new U,ji=new U,qi=new U,Dr=new U,ko=new U,gl=new U,_l=new U,Rr=new U;function Jc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Rr.fromArray(n,s);const a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=e.dot(Rr),u=t.dot(Rr),c=i.dot(Rr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const dw=new Ha,No=new U,ef=new U;class Qu{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const t=No.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(No,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(ef)),this.expandByPoint(No.copy(e.center).sub(ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new U,tf=new U,vl=new U,Yi=new U,nf=new U,xl=new U,rf=new U;class nx{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.direction).multiplyScalar(t).add(this.origin),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){tf.copy(e).add(t).multiplyScalar(.5),vl.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(tf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(vl),a=Yi.dot(this.direction),l=-Yi.dot(vl),u=Yi.lengthSq(),c=Math.abs(1-o*o);let d,f,m,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const h=1/c;d*=h,f*=h,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(vl).multiplyScalar(f).add(tf),m}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,s){nf.subVectors(t,e),xl.subVectors(i,e),rf.crossVectors(nf,xl);let o=this.direction.dot(rf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(xl.crossVectors(Yi,xl));if(l<0)return null;const u=a*this.direction.dot(nf.cross(Yi));if(u<0||l+u>o)return null;const c=-a*Yi.dot(rf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,d,f,m,x,h,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=d,g[14]=f,g[3]=m,g[7]=x,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,m=o*d,x=a*c,h=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=m+x*u,t[5]=f-h*u,t[9]=-a*l,t[2]=h-f*u,t[6]=x+m*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,m=l*d,x=u*c,h=u*d;t[0]=f+h*a,t[4]=x*a-m,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=m*a-x,t[6]=h+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,m=l*d,x=u*c,h=u*d;t[0]=f-h*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*c,t[9]=h-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,m=o*d,x=a*c,h=a*d;t[0]=l*c,t[4]=x*u-m,t[8]=f*u+h,t[1]=l*d,t[5]=h*u+f,t[9]=m*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*u,x=a*l,h=a*u;t[0]=l*c,t[4]=h-f*d,t[8]=x*d+m,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*d+x,t[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,m=o*u,x=a*l,h=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+h,t[5]=o*c,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*c,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hw,e,pw)}lookAt(e,t,i){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),$i.crossVectors(i,dn),$i.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),$i.crossVectors(i,dn)),$i.normalize(),yl.crossVectors(dn,$i),r[0]=$i.x,r[4]=yl.x,r[8]=dn.x,r[1]=$i.y,r[5]=yl.y,r[9]=dn.y,r[2]=$i.z,r[6]=yl.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],m=i[13],x=i[2],h=i[6],p=i[10],g=i[14],_=i[3],v=i[7],S=i[11],M=i[15],T=r[0],b=r[4],y=r[8],E=r[12],P=r[1],z=r[5],K=r[9],I=r[13],R=r[2],B=r[6],$=r[10],Y=r[14],L=r[3],G=r[7],V=r[11],N=r[15];return s[0]=o*T+a*P+l*R+u*L,s[4]=o*b+a*z+l*B+u*G,s[8]=o*y+a*K+l*$+u*V,s[12]=o*E+a*I+l*Y+u*N,s[1]=c*T+d*P+f*R+m*L,s[5]=c*b+d*z+f*B+m*G,s[9]=c*y+d*K+f*$+m*V,s[13]=c*E+d*I+f*Y+m*N,s[2]=x*T+h*P+p*R+g*L,s[6]=x*b+h*z+p*B+g*G,s[10]=x*y+h*K+p*$+g*V,s[14]=x*E+h*I+p*Y+g*N,s[3]=_*T+v*P+S*R+M*L,s[7]=_*b+v*z+S*B+M*G,s[11]=_*y+v*K+S*$+M*V,s[15]=_*E+v*I+S*Y+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],m=e[14],x=e[3],h=e[7],p=e[11],g=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*m-i*l*m)+h*(+t*l*m-t*u*f+s*o*f-r*o*m+r*u*c-s*l*c)+p*(+t*u*d-t*a*m-s*o*d+i*o*m+s*a*c-i*u*c)+g*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],m=e[11],x=e[12],h=e[13],p=e[14],g=e[15],_=d*p*u-h*f*u+h*l*m-a*p*m-d*l*g+a*f*g,v=x*f*u-c*p*u-x*l*m+o*p*m+c*l*g-o*f*g,S=c*h*u-x*d*u+x*a*m-o*h*m-c*a*g+o*d*g,M=x*d*l-c*h*l-x*a*f+o*h*f+c*a*p-o*d*p,T=t*_+i*v+r*S+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=_*b,e[1]=(h*f*s-d*p*s-h*r*m+i*p*m+d*r*g-i*f*g)*b,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*g+i*l*g)*b,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*m-i*l*m)*b,e[4]=v*b,e[5]=(c*p*s-x*f*s+x*r*m-t*p*m-c*r*g+t*f*g)*b,e[6]=(x*l*s-o*p*s-x*r*u+t*p*u+o*r*g-t*l*g)*b,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*m+t*l*m)*b,e[8]=S*b,e[9]=(x*d*s-c*h*s-x*i*m+t*h*m+c*i*g-t*d*g)*b,e[10]=(o*h*s-x*a*s+x*i*u-t*h*u-o*i*g+t*a*g)*b,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*m-t*a*m)*b,e[12]=M*b,e[13]=(c*h*r-x*d*r+x*i*f-t*h*f-c*i*p+t*d*p)*b,e[14]=(x*a*r-o*h*r-x*i*l+t*h*l+o*i*p-t*a*p)*b,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,m=s*c,x=s*d,h=o*c,p=o*d,g=a*d,_=l*u,v=l*c,S=l*d,M=i.x,T=i.y,b=i.z;return r[0]=(1-(h+g))*M,r[1]=(m+S)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(f+g))*T,r[6]=(p+_)*T,r[7]=0,r[8]=(x+v)*b,r[9]=(p-_)*b,r[10]=(1-(f+h))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=_s.set(r[0],r[1],r[2]).length();const o=_s.set(r[4],r[5],r[6]).length(),a=_s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const u=1/s,c=1/o,d=1/a;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=c,Yn.elements[5]*=c,Yn.elements[6]*=c,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,t.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,f=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _s=new U,Yn=new Tt,hw=new U(0,0,0),pw=new U(1,1,1),$i=new U,yl=new U,dn=new U,rg=new Tt,sg=new Wa;class Xa{constructor(e=0,t=0,i=0,r=Xa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sg.setFromEuler(this),this.setFromQuaternion(sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Xa.DefaultOrder="XYZ";Xa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ix{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mw=0;const og=new U,vs=new Wa,Ti=new Tt,Sl=new U,zo=new U,gw=new U,_w=new Wa,ag=new U(1,0,0),lg=new U(0,1,0),ug=new U(0,0,1),vw={type:"added"},cg={type:"removed"};class ln extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mw++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DefaultUp.clone();const e=new U,t=new Xa,i=new Wa,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new xn}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=ln.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ln.DefaultMatrixWorldAutoUpdate,this.layers=new ix,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(ag,e)}rotateY(e){return this.rotateOnAxis(lg,e)}rotateZ(e){return this.rotateOnAxis(ug,e)}translateOnAxis(e,t){return og.copy(e).applyQuaternion(this.quaternion),this.position.add(og.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ag,e)}translateY(e){return this.translateOnAxis(lg,e)}translateZ(e){return this.translateOnAxis(ug,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sl.copy(e):Sl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(zo,Sl,this.up):Ti.lookAt(Sl,zo,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(Ti),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(cg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,gw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,_w,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DefaultUp=new U(0,1,0);ln.DefaultMatrixAutoUpdate=!0;ln.DefaultMatrixWorldAutoUpdate=!0;const $n=new U,Ei=new U,sf=new U,Ci=new U,xs=new U,ys=new U,fg=new U,of=new U,af=new U,lf=new U;class Di{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$n.subVectors(e,t),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$n.subVectors(r,t),Ei.subVectors(i,t),sf.subVectors(e,t);const o=$n.dot($n),a=$n.dot(Ei),l=$n.dot(sf),u=Ei.dot(Ei),c=Ei.dot(sf),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ci),Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ci),l.set(0,0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l}static isFrontFacing(e,t,i,r){return $n.subVectors(i,t),Ei.subVectors(e,t),$n.cross(Ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),$n.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Di.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;xs.subVectors(r,i),ys.subVectors(s,i),of.subVectors(e,i);const l=xs.dot(of),u=ys.dot(of);if(l<=0&&u<=0)return t.copy(i);af.subVectors(e,r);const c=xs.dot(af),d=ys.dot(af);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(xs,o);lf.subVectors(e,s);const m=xs.dot(lf),x=ys.dot(lf);if(x>=0&&m<=x)return t.copy(s);const h=m*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(ys,a);const p=c*x-m*d;if(p<=0&&d-c>=0&&m-x>=0)return fg.subVectors(s,r),a=(d-c)/(d-c+(m-x)),t.copy(r).addScaledVector(fg,a);const g=1/(p+h+f);return o=h*g,a=f*g,t.copy(i).addScaledVector(xs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let xw=0;class ja extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=Qs,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jv,this.blendDst=qv,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Pd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hc,this.stencilZFail=Hc,this.stencilZPass=Hc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==rs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rx extends ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new U,Ml=new We;class gi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jm,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hl(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hl(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hl(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class sx extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ox extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ri extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yw=0;const Ln=new Tt,uf=new ln,Ss=new U,hn=new Ha,Fo=new Ha,St=new U;class vi extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kv(e)?ox:sx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new xn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(hn.min,Fo.min),hn.expandByPoint(St),St.addVectors(hn.max,Fo.max),hn.expandByPoint(St)):(hn.expandByPoint(Fo.min),hn.expandByPoint(Fo.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)St.fromBufferAttribute(a,u),l&&(Ss.fromBufferAttribute(e,u),St.add(Ss)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<a;P++)u[P]=new U,c[P]=new U;const d=new U,f=new U,m=new U,x=new We,h=new We,p=new We,g=new U,_=new U;function v(P,z,K){d.fromArray(r,P*3),f.fromArray(r,z*3),m.fromArray(r,K*3),x.fromArray(o,P*2),h.fromArray(o,z*2),p.fromArray(o,K*2),f.sub(d),m.sub(d),h.sub(x),p.sub(x);const I=1/(h.x*p.y-p.x*h.y);isFinite(I)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(I),_.copy(m).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(I),u[P].add(g),u[z].add(g),u[K].add(g),c[P].add(_),c[z].add(_),c[K].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let P=0,z=S.length;P<z;++P){const K=S[P],I=K.start,R=K.count;for(let B=I,$=I+R;B<$;B+=3)v(i[B+0],i[B+1],i[B+2])}const M=new U,T=new U,b=new U,y=new U;function E(P){b.fromArray(s,P*3),y.copy(b);const z=u[P];M.copy(z),M.sub(b.multiplyScalar(b.dot(z))).normalize(),T.crossVectors(y,z);const I=T.dot(c[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=I}for(let P=0,z=S.length;P<z;++P){const K=S[P],I=K.start,R=K.count;for(let B=I,$=I+R;B<$;B+=3)E(i[B+0]),E(i[B+1]),E(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,c=new U,d=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let m=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*c;for(let g=0;g<c;g++)f[x++]=u[m++]}return new gi(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,m=d.length;f<m;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const dg=new Tt,Ms=new nx,cf=new Qu,Oo=new U,Uo=new U,Bo=new U,ff=new U,wl=new U,Tl=new We,El=new We,Cl=new We,df=new U,bl=new U;class di extends ln{constructor(e=new vi,t=new rx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(ff.fromBufferAttribute(d,e),o?wl.addScaledVector(ff,c):wl.addScaledVector(ff.sub(t),c))}t.add(wl)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),cf.copy(i.boundingSphere),cf.applyMatrix4(s),e.ray.intersectsSphere(cf)===!1)||(dg.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(dg),i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const h=d[m],p=r[h.materialIndex],g=Math.max(h.start,f.start),_=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,S=_;v<S;v+=3){const M=a.getX(v),T=a.getX(v+1),b=a.getX(v+2);o=Al(this,p,e,Ms,u,c,M,T,b),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let h=m,p=x;h<p;h+=3){const g=a.getX(h),_=a.getX(h+1),v=a.getX(h+2);o=Al(this,r,e,Ms,u,c,g,_,v),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const h=d[m],p=r[h.materialIndex],g=Math.max(h.start,f.start),_=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,S=_;v<S;v+=3){const M=v,T=v+1,b=v+2;o=Al(this,p,e,Ms,u,c,M,T,b),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let h=m,p=x;h<p;h+=3){const g=h,_=h+1,v=h+2;o=Al(this,r,e,Ms,u,c,g,_,v),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function Sw(n,e,t,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===rs,a),l===null)return null;bl.copy(a),bl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(bl);return u<t.near||u>t.far?null:{distance:u,point:bl.clone(),object:n}}function Al(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,Oo),n.getVertexPosition(a,Uo),n.getVertexPosition(l,Bo);const u=Sw(n,e,t,i,Oo,Uo,Bo,df);if(u){r&&(Tl.fromBufferAttribute(r,o),El.fromBufferAttribute(r,a),Cl.fromBufferAttribute(r,l),u.uv=Di.getUV(df,Oo,Uo,Bo,Tl,El,Cl,new We)),s&&(Tl.fromBufferAttribute(s,o),El.fromBufferAttribute(s,a),Cl.fromBufferAttribute(s,l),u.uv2=Di.getUV(df,Oo,Uo,Bo,Tl,El,Cl,new We));const c={a:o,b:a,c:l,normal:new U,materialIndex:0};Di.getNormal(Oo,Uo,Bo,c.normal),u.face=c}return u}class qa extends vi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(u,3)),this.setAttribute("normal",new ri(c,3)),this.setAttribute("uv",new ri(d,2));function x(h,p,g,_,v,S,M,T,b,y,E){const P=S/b,z=M/y,K=S/2,I=M/2,R=T/2,B=b+1,$=y+1;let Y=0,L=0;const G=new U;for(let V=0;V<$;V++){const N=V*z-I;for(let O=0;O<B;O++){const J=O*P-K;G[h]=J*_,G[p]=N*v,G[g]=R,u.push(G.x,G.y,G.z),G[h]=0,G[p]=0,G[g]=T>0?1:-1,c.push(G.x,G.y,G.z),d.push(O/b),d.push(1-V/y),Y+=1}}for(let V=0;V<y;V++)for(let N=0;N<b;N++){const O=f+N+B*V,J=f+N+B*(V+1),Q=f+(N+1)+B*(V+1),ie=f+(N+1)+B*V;l.push(O,J,ie),l.push(J,Q,ie),L+=6}a.addGroup(m,L,E),m+=L,f+=Y}}static fromJSON(e){return new qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=vo(n[t]);for(const r in i)e[r]=i[r]}return e}function Mw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ax(n){return n.getRenderTarget()===null&&n.outputEncoding===Xe?li:ka}const ww={clone:vo,merge:Xt};var Tw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ew=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tw,this.fragmentShader=Ew,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=Mw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class lx extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zn extends lx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tg*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,Ts=1;class Cw extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new zn(ws,Ts,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new zn(ws,Ts,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new zn(ws,Ts,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new zn(ws,Ts,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new zn(ws,Ts,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new zn(ws,Ts,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=zi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class ux extends an{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:mo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bw extends as{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ux(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qa(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:mr});s.uniforms.tEquirect.value=t;const o=new di(r,s),a=t.minFilter;return t.minFilter===Ra&&(t.minFilter=Nn),new Cw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const hf=new U,Aw=new U,Pw=new xn;class zr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=hf.subVectors(i,t).cross(Aw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(hf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pw.getNormalMatrix(e),r=this.coplanarPoint(hf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Qu,Pl=new U;class cx{constructor(e=new zr,t=new zr,i=new zr,r=new zr,s=new zr,o=new zr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],m=i[9],x=i[10],h=i[11],p=i[12],g=i[13],_=i[14],v=i[15];return t[0].setComponents(a-r,d-l,h-f,v-p).normalize(),t[1].setComponents(a+r,d+l,h+f,v+p).normalize(),t[2].setComponents(a+s,d+u,h+m,v+g).normalize(),t[3].setComponents(a-s,d-u,h-m,v-g).normalize(),t[4].setComponents(a-o,d-c,h-x,v-_).normalize(),t[5].setComponents(a+o,d+c,h+x,v+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSprite(e){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Pl.x=r.normal.x>0?e.max.x:e.min.x,Pl.y=r.normal.y>0?e.max.y:e.min.y,Pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Lw(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,m=c.updateRange;n.bindBuffer(d,u),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Zh extends vi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,m=[],x=[],h=[],p=[];for(let g=0;g<c;g++){const _=g*f-o;for(let v=0;v<u;v++){const S=v*d-s;x.push(S,-_,0),h.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const v=_+u*g,S=_+u*(g+1),M=_+1+u*(g+1),T=_+1+u*g;m.push(v,S,T),m.push(S,M,T)}this.setIndex(m),this.setAttribute("position",new ri(x,3)),this.setAttribute("normal",new ri(h,3)),this.setAttribute("uv",new ri(p,2))}static fromJSON(e){return new Zh(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Rw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fw="vec3 transformed = vec3( position );",Ow=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uw=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Bw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$w=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Kw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iT="gl_FragColor = linearToOutputTexel( gl_FragColor );",rT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yT=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ST=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ET=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,CT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bT=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,LT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,IT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,GT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,WT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,HT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,XT=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ZT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,KT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,QT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,JT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,nE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cE=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,fE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,pE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,SE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ME=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,wE=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,TE=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,EE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,CE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,bE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,AE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,NE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,FE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,VE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WE=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s3=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,a3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:Dw,alphamap_pars_fragment:Rw,alphatest_fragment:Iw,alphatest_pars_fragment:kw,aomap_fragment:Nw,aomap_pars_fragment:zw,begin_vertex:Fw,beginnormal_vertex:Ow,bsdfs:Uw,iridescence_fragment:Bw,bumpmap_pars_fragment:Vw,clipping_planes_fragment:Gw,clipping_planes_pars_fragment:Ww,clipping_planes_pars_vertex:Hw,clipping_planes_vertex:Xw,color_fragment:jw,color_pars_fragment:qw,color_pars_vertex:Yw,color_vertex:$w,common:Zw,cube_uv_reflection_fragment:Kw,defaultnormal_vertex:Qw,displacementmap_pars_vertex:Jw,displacementmap_vertex:eT,emissivemap_fragment:tT,emissivemap_pars_fragment:nT,encodings_fragment:iT,encodings_pars_fragment:rT,envmap_fragment:sT,envmap_common_pars_fragment:oT,envmap_pars_fragment:aT,envmap_pars_vertex:lT,envmap_physical_pars_fragment:yT,envmap_vertex:uT,fog_vertex:cT,fog_pars_vertex:fT,fog_fragment:dT,fog_pars_fragment:hT,gradientmap_pars_fragment:pT,lightmap_fragment:mT,lightmap_pars_fragment:gT,lights_lambert_fragment:_T,lights_lambert_pars_fragment:vT,lights_pars_begin:xT,lights_toon_fragment:ST,lights_toon_pars_fragment:MT,lights_phong_fragment:wT,lights_phong_pars_fragment:TT,lights_physical_fragment:ET,lights_physical_pars_fragment:CT,lights_fragment_begin:bT,lights_fragment_maps:AT,lights_fragment_end:PT,logdepthbuf_fragment:LT,logdepthbuf_pars_fragment:DT,logdepthbuf_pars_vertex:RT,logdepthbuf_vertex:IT,map_fragment:kT,map_pars_fragment:NT,map_particle_fragment:zT,map_particle_pars_fragment:FT,metalnessmap_fragment:OT,metalnessmap_pars_fragment:UT,morphcolor_vertex:BT,morphnormal_vertex:VT,morphtarget_pars_vertex:GT,morphtarget_vertex:WT,normal_fragment_begin:HT,normal_fragment_maps:XT,normal_pars_fragment:jT,normal_pars_vertex:qT,normal_vertex:YT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:ZT,clearcoat_normal_fragment_maps:KT,clearcoat_pars_fragment:QT,iridescence_pars_fragment:JT,output_fragment:eE,packing:tE,premultiplied_alpha_fragment:nE,project_vertex:iE,dithering_fragment:rE,dithering_pars_fragment:sE,roughnessmap_fragment:oE,roughnessmap_pars_fragment:aE,shadowmap_pars_fragment:lE,shadowmap_pars_vertex:uE,shadowmap_vertex:cE,shadowmask_pars_fragment:fE,skinbase_vertex:dE,skinning_pars_vertex:hE,skinning_vertex:pE,skinnormal_vertex:mE,specularmap_fragment:gE,specularmap_pars_fragment:_E,tonemapping_fragment:vE,tonemapping_pars_fragment:xE,transmission_fragment:yE,transmission_pars_fragment:SE,uv_pars_fragment:ME,uv_pars_vertex:wE,uv_vertex:TE,uv2_pars_fragment:EE,uv2_pars_vertex:CE,uv2_vertex:bE,worldpos_vertex:AE,background_vert:PE,background_frag:LE,backgroundCube_vert:DE,backgroundCube_frag:RE,cube_vert:IE,cube_frag:kE,depth_vert:NE,depth_frag:zE,distanceRGBA_vert:FE,distanceRGBA_frag:OE,equirect_vert:UE,equirect_frag:BE,linedashed_vert:VE,linedashed_frag:GE,meshbasic_vert:WE,meshbasic_frag:HE,meshlambert_vert:XE,meshlambert_frag:jE,meshmatcap_vert:qE,meshmatcap_frag:YE,meshnormal_vert:$E,meshnormal_frag:ZE,meshphong_vert:KE,meshphong_frag:QE,meshphysical_vert:JE,meshphysical_frag:e3,meshtoon_vert:t3,meshtoon_frag:n3,points_vert:i3,points_frag:r3,shadow_vert:s3,shadow_frag:o3,sprite_vert:a3,sprite_frag:l3},se={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xn},uv2Transform:{value:new xn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xn}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xn}}},ui={basic:{uniforms:Xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:Xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:Xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:Xt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:Xt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:Xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:Xt([se.points,se.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:Xt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:Xt([se.common,se.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:Xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:Xt([se.sprite,se.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new xn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:Xt([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:Xt([se.lights,se.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};ui.physical={uniforms:Xt([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new We(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const Ll={r:0,b:0,g:0};function u3(n,e,t,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,c,d=null,f=0,m=null;function x(p,g){let _=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const S=n.xr,M=S.getSession&&S.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?h(a,l):v&&v.isColor&&(h(v,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ku)?(c===void 0&&(c=new di(new qa(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:vo(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==Xe,(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new di(new Zh(2,2),new Wi({name:"BackgroundMaterial",uniforms:vo(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=v.encoding!==Xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,g){p.getRGB(Ll,ax(n)),i.buffers.color.setClear(Ll.r,Ll.g,Ll.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function c3(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(R,B,$,Y,L){let G=!1;if(o){const V=h(Y,$,B);u!==V&&(u=V,m(u.object)),G=g(R,Y,$,L),G&&_(R,Y,$,L)}else{const V=B.wireframe===!0;(u.geometry!==Y.id||u.program!==$.id||u.wireframe!==V)&&(u.geometry=Y.id,u.program=$.id,u.wireframe=V,G=!0)}L!==null&&t.update(L,34963),(G||c)&&(c=!1,y(R,B,$,Y),L!==null&&n.bindBuffer(34963,t.get(L).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function x(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function h(R,B,$){const Y=$.wireframe===!0;let L=a[R.id];L===void 0&&(L={},a[R.id]=L);let G=L[B.id];G===void 0&&(G={},L[B.id]=G);let V=G[Y];return V===void 0&&(V=p(f()),G[Y]=V),V}function p(R){const B=[],$=[],Y=[];for(let L=0;L<r;L++)B[L]=0,$[L]=0,Y[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:Y,object:R,attributes:{},index:null}}function g(R,B,$,Y){const L=u.attributes,G=B.attributes;let V=0;const N=$.getAttributes();for(const O in N)if(N[O].location>=0){const Q=L[O];let ie=G[O];if(ie===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),Q===void 0||Q.attribute!==ie||ie&&Q.data!==ie.data)return!0;V++}return u.attributesNum!==V||u.index!==Y}function _(R,B,$,Y){const L={},G=B.attributes;let V=0;const N=$.getAttributes();for(const O in N)if(N[O].location>=0){let Q=G[O];Q===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));const ie={};ie.attribute=Q,Q&&Q.data&&(ie.data=Q.data),L[O]=ie,V++}u.attributes=L,u.attributesNum=V,u.index=Y}function v(){const R=u.newAttributes;for(let B=0,$=R.length;B<$;B++)R[B]=0}function S(R){M(R,0)}function M(R,B){const $=u.newAttributes,Y=u.enabledAttributes,L=u.attributeDivisors;$[R]=1,Y[R]===0&&(n.enableVertexAttribArray(R),Y[R]=1),L[R]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),L[R]=B)}function T(){const R=u.newAttributes,B=u.enabledAttributes;for(let $=0,Y=B.length;$<Y;$++)B[$]!==R[$]&&(n.disableVertexAttribArray($),B[$]=0)}function b(R,B,$,Y,L,G){i.isWebGL2===!0&&($===5124||$===5125)?n.vertexAttribIPointer(R,B,$,L,G):n.vertexAttribPointer(R,B,$,Y,L,G)}function y(R,B,$,Y){if(i.isWebGL2===!1&&(R.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const L=Y.attributes,G=$.getAttributes(),V=B.defaultAttributeValues;for(const N in G){const O=G[N];if(O.location>=0){let J=L[N];if(J===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),J!==void 0){const Q=J.normalized,ie=J.itemSize,W=t.get(J);if(W===void 0)continue;const Te=W.buffer,fe=W.type,ye=W.bytesPerElement;if(J.isInterleavedBufferAttribute){const ce=J.data,Oe=ce.stride,Ee=J.offset;if(ce.isInstancedInterleavedBuffer){for(let xe=0;xe<O.locationSize;xe++)M(O.location+xe,ce.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<O.locationSize;xe++)S(O.location+xe);n.bindBuffer(34962,Te);for(let xe=0;xe<O.locationSize;xe++)b(O.location+xe,ie/O.locationSize,fe,Q,Oe*ye,(Ee+ie/O.locationSize*xe)*ye)}else{if(J.isInstancedBufferAttribute){for(let ce=0;ce<O.locationSize;ce++)M(O.location+ce,J.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ce=0;ce<O.locationSize;ce++)S(O.location+ce);n.bindBuffer(34962,Te);for(let ce=0;ce<O.locationSize;ce++)b(O.location+ce,ie/O.locationSize,fe,Q,ie*ye,ie/O.locationSize*ce*ye)}}else if(V!==void 0){const Q=V[N];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(O.location,Q);break;case 3:n.vertexAttrib3fv(O.location,Q);break;case 4:n.vertexAttrib4fv(O.location,Q);break;default:n.vertexAttrib1fv(O.location,Q)}}}}T()}function E(){K();for(const R in a){const B=a[R];for(const $ in B){const Y=B[$];for(const L in Y)x(Y[L].object),delete Y[L];delete B[$]}delete a[R]}}function P(R){if(a[R.id]===void 0)return;const B=a[R.id];for(const $ in B){const Y=B[$];for(const L in Y)x(Y[L].object),delete Y[L];delete B[$]}delete a[R.id]}function z(R){for(const B in a){const $=a[B];if($[R.id]===void 0)continue;const Y=$[R.id];for(const L in Y)x(Y[L].object),delete Y[L];delete $[R.id]}}function K(){I(),c=!0,u!==l&&(u=l,m(u.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function f3(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function d3(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),h=n.getParameter(34921),p=n.getParameter(36347),g=n.getParameter(36348),_=n.getParameter(36349),v=f>0,S=o||e.has("OES_texture_float"),M=v&&S,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:T}}function h3(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zr,a=new xn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,m){const x=d.length!==0||f||i!==0||r;return r=f,t=c(d,m,0),i=d.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,f,m){const x=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const _=s?0:i,v=_*4;let S=g.clippingState||null;l.value=S,S=c(x,f,v,m);for(let M=0;M!==v;++M)S[M]=t[M];g.clippingState=S,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,m,x){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const g=m+h*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,S=m;v!==h;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function p3(n){let e=new WeakMap;function t(o,a){return a===Ld?o.mapping=mo:a===Dd&&(o.mapping=go),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ld||a===Dd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new bw(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class m3 extends lx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gs=4,hg=[.125,.215,.35,.446,.526,.582],Or=20,pf=new m3,pg=new Ze;let mf=null;const Fr=(1+Math.sqrt(5))/2,Cs=1/Fr,mg=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Fr,Cs),new U(0,Fr,-Cs),new U(Cs,0,Fr),new U(-Cs,0,Fr),new U(Fr,Cs,0),new U(-Fr,Cs,0)];class gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){mf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mf),e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ia,format:ei,encoding:os,depthBuffer:!1},r=_g(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g3(s)),this._blurMaterial=_3(s,e,t)}return r}_compileMaterial(e){const t=new di(this._lodPlanes[0],e);this._renderer.compile(t,pf)}_sceneToCubeUV(e,t,i,r){const a=new zn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(pg),c.toneMapping=zi,c.autoClear=!1;const m=new rx({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),x=new di(new qa,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(pg),h=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const v=this._cubeSize;Dl(r,_*v,g>2?v:0,v,v),c.setRenderTarget(r),h&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===mo||e.mapping===go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Dl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,pf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mg[(r-1)%mg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new di(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Or-1),h=s/x,p=isFinite(s)?1+Math.floor(c*h):Or;p>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Or}`);const g=[];let _=0;for(let b=0;b<Or;++b){const y=b/h,E=Math.exp(-y*y/2);g.push(E),b===0?_+=E:b<p&&(_+=2*E)}for(let b=0;b<g.length;b++)g[b]=g[b]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const S=this._sizeLods[r],M=3*S*(r>v-Gs?r-v+Gs:0),T=4*(this._cubeSize-S);Dl(t,M,T,3*S,2*S),l.setRenderTarget(t),l.render(d,pf)}}function g3(n){const e=[],t=[],i=[];let r=n;const s=n-Gs+1+hg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Gs?l=hg[o-n+Gs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,x=6,h=3,p=2,g=1,_=new Float32Array(h*x*m),v=new Float32Array(p*x*m),S=new Float32Array(g*x*m);for(let T=0;T<m;T++){const b=T%3*2/3-1,y=T>2?0:-1,E=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];_.set(E,h*x*T),v.set(f,p*x*T);const P=[T,T,T,T,T,T];S.set(P,g*x*T)}const M=new vi;M.setAttribute("position",new gi(_,h)),M.setAttribute("uv",new gi(v,p)),M.setAttribute("faceIndex",new gi(S,g)),e.push(M),r>Gs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _g(n,e,t){const i=new as(n,e,t);return i.texture.mapping=Ku,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _3(n,e,t){const i=new Float32Array(Or),r=new U(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function vg(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function xg(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v3(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ld||l===Dd,c=l===mo||l===go;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new gg(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new gg(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function x3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y3(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const m=d.morphAttributes;for(const x in m){const h=m[x];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function u(d){const f=[],m=d.index,x=d.attributes.position;let h=0;if(m!==null){const _=m.array;h=m.version;for(let v=0,S=_.length;v<S;v+=3){const M=_[v+0],T=_[v+1],b=_[v+2];f.push(M,T,T,b,b,M)}}else{const _=x.array;h=x.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const M=v+0,T=v+1,b=v+2;f.push(M,T,T,b,b,M)}}const p=new(Kv(f)?ox:sx)(f,1);p.version=h;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function c(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function S3(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,m){n.drawElements(s,m,a,f*l),t.update(m,s,1)}function d(f,m,x){if(x===0)return;let h,p;if(r)h=n,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,f*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function M3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function w3(n,e){return n[0]-e[0]}function T3(n,e){return Math.abs(e[1])-Math.abs(n[1])}function E3(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new At,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let g=s.get(c);if(g===void 0||g.count!==p){let $=function(){R.dispose(),s.delete(c),c.removeEventListener("dispose",$)};var x=$;g!==void 0&&g.texture.dispose();const S=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let P=0;S===!0&&(P=1),M===!0&&(P=2),T===!0&&(P=3);let z=c.attributes.position.count*P,K=1;z>e.maxTextureSize&&(K=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*K*4*p),R=new tx(I,z,K,p);R.type=Hr,R.needsUpdate=!0;const B=P*4;for(let Y=0;Y<p;Y++){const L=b[Y],G=y[Y],V=E[Y],N=z*K*4*Y;for(let O=0;O<L.count;O++){const J=O*B;S===!0&&(o.fromBufferAttribute(L,O),I[N+J+0]=o.x,I[N+J+1]=o.y,I[N+J+2]=o.z,I[N+J+3]=0),M===!0&&(o.fromBufferAttribute(G,O),I[N+J+4]=o.x,I[N+J+5]=o.y,I[N+J+6]=o.z,I[N+J+7]=0),T===!0&&(o.fromBufferAttribute(V,O),I[N+J+8]=o.x,I[N+J+9]=o.y,I[N+J+10]=o.z,I[N+J+11]=V.itemSize===4?o.w:1)}}g={count:p,texture:R,size:new We(z,K)},s.set(c,g),c.addEventListener("dispose",$)}let _=0;for(let S=0;S<m.length;S++)_+=m[S];const v=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",m),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const h=m===void 0?0:m.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let M=0;M<h;M++)p[M]=[M,0];i[c.id]=p}for(let M=0;M<h;M++){const T=p[M];T[0]=M,T[1]=m[M]}p.sort(T3);for(let M=0;M<8;M++)M<h&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(w3);const g=c.morphAttributes.position,_=c.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const T=a[M],b=T[0],y=T[1];b!==Number.MAX_SAFE_INTEGER&&y?(g&&c.getAttribute("morphTarget"+M)!==g[b]&&c.setAttribute("morphTarget"+M,g[b]),_&&c.getAttribute("morphNormal"+M)!==_[b]&&c.setAttribute("morphNormal"+M,_[b]),r[M]=y,v+=y):(g&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),_&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const S=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function C3(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const dx=new an,hx=new tx,px=new fw,mx=new ux,yg=[],Sg=[],Mg=new Float32Array(16),wg=new Float32Array(9),Tg=new Float32Array(4);function wo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=yg[r];if(s===void 0&&(s=new Float32Array(r),yg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ju(n,e){let t=Sg[e];t===void 0&&(t=new Int32Array(e),Sg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function b3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function A3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function P3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function L3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function D3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Tg.set(i),n.uniformMatrix2fv(this.addr,!1,Tg),_t(t,i)}}function R3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;wg.set(i),n.uniformMatrix3fv(this.addr,!1,wg),_t(t,i)}}function I3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Mg.set(i),n.uniformMatrix4fv(this.addr,!1,Mg),_t(t,i)}}function k3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function N3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function F3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function O3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function U3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function B3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function V3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function G3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||dx,r)}function W3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||px,r)}function H3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mx,r)}function X3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hx,r)}function j3(n){switch(n){case 5126:return b3;case 35664:return A3;case 35665:return P3;case 35666:return L3;case 35674:return D3;case 35675:return R3;case 35676:return I3;case 5124:case 35670:return k3;case 35667:case 35671:return N3;case 35668:case 35672:return z3;case 35669:case 35673:return F3;case 5125:return O3;case 36294:return U3;case 36295:return B3;case 36296:return V3;case 35678:case 36198:case 36298:case 36306:case 35682:return G3;case 35679:case 36299:case 36307:return W3;case 35680:case 36300:case 36308:case 36293:return H3;case 36289:case 36303:case 36311:case 36292:return X3}}function q3(n,e){n.uniform1fv(this.addr,e)}function Y3(n,e){const t=wo(e,this.size,2);n.uniform2fv(this.addr,t)}function $3(n,e){const t=wo(e,this.size,3);n.uniform3fv(this.addr,t)}function Z3(n,e){const t=wo(e,this.size,4);n.uniform4fv(this.addr,t)}function K3(n,e){const t=wo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q3(n,e){const t=wo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function J3(n,e){const t=wo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e2(n,e){n.uniform1iv(this.addr,e)}function t2(n,e){n.uniform2iv(this.addr,e)}function n2(n,e){n.uniform3iv(this.addr,e)}function i2(n,e){n.uniform4iv(this.addr,e)}function r2(n,e){n.uniform1uiv(this.addr,e)}function s2(n,e){n.uniform2uiv(this.addr,e)}function o2(n,e){n.uniform3uiv(this.addr,e)}function a2(n,e){n.uniform4uiv(this.addr,e)}function l2(n,e,t){const i=this.cache,r=e.length,s=Ju(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||dx,s[o])}function u2(n,e,t){const i=this.cache,r=e.length,s=Ju(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||px,s[o])}function c2(n,e,t){const i=this.cache,r=e.length,s=Ju(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||mx,s[o])}function f2(n,e,t){const i=this.cache,r=e.length,s=Ju(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||hx,s[o])}function d2(n){switch(n){case 5126:return q3;case 35664:return Y3;case 35665:return $3;case 35666:return Z3;case 35674:return K3;case 35675:return Q3;case 35676:return J3;case 5124:case 35670:return e2;case 35667:case 35671:return t2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return r2;case 36294:return s2;case 36295:return o2;case 36296:return a2;case 35678:case 36198:case 36298:case 36306:case 35682:return l2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return c2;case 36289:case 36303:case 36311:case 36292:return f2}}class h2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=j3(t.type)}}class p2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=d2(t.type)}}class m2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function Eg(n,e){n.seq.push(e),n.map[e.id]=e}function g2(n,e,t){const i=n.name,r=i.length;for(gf.lastIndex=0;;){const s=gf.exec(i),o=gf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Eg(t,u===void 0?new h2(a,n,e):new p2(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new m2(a),Eg(t,d)),t=d}}}class Zl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);g2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Cg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let _2=0;function v2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function x2(n){switch(n){case os:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function bg(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+v2(n.getShaderSource(e),o)}else return r}function y2(n,e){const t=x2(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function S2(n,e){let t;switch(e){case FM:t="Linear";break;case OM:t="Reinhard";break;case UM:t="OptimizedCineon";break;case BM:t="ACESFilmic";break;case VM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function M2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yo).join(`
`)}function w2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T2(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yo(n){return n!==""}function Ag(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E2=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(n){return n.replace(E2,C2)}function C2(n,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return zd(t)}const b2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lg(n){return n.replace(b2,A2)}function A2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qo&&(e="SHADOWMAP_TYPE_VSM"),e}function L2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function R2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yv:e="ENVMAP_BLENDING_MULTIPLY";break;case NM:e="ENVMAP_BLENDING_MIX";break;case zM:e="ENVMAP_BLENDING_ADD";break}return e}function I2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function k2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=P2(t),u=L2(t),c=D2(t),d=R2(t),f=I2(t),m=t.isWebGL2?"":M2(t),x=w2(s),h=r.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(Yo).join(`
`),p.length>0&&(p+=`
`),g=[m,x].filter(Yo).join(`
`),g.length>0&&(g+=`
`)):(p=[Dg(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),g=[m,Dg(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?we.tonemapping_pars_fragment:"",t.toneMapping!==zi?S2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,y2("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yo).join(`
`)),o=zd(o),o=Ag(o,t),o=Pg(o,t),a=zd(a),a=Ag(a,t),a=Pg(a,t),o=Lg(o),a=Lg(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=_+p+o,S=_+g+a,M=Cg(r,35633,v),T=Cg(r,35632,S);if(r.attachShader(h,M),r.attachShader(h,T),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(h).trim(),P=r.getShaderInfoLog(M).trim(),z=r.getShaderInfoLog(T).trim();let K=!0,I=!0;if(r.getProgramParameter(h,35714)===!1){K=!1;const R=bg(r,M,"vertex"),B=bg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+E+`
`+R+`
`+B)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(P===""||z==="")&&(I=!1);I&&(this.diagnostics={runnable:K,programLog:E,vertexShader:{log:P,prefix:p},fragmentShader:{log:z,prefix:g}})}r.deleteShader(M),r.deleteShader(T);let b;this.getUniforms=function(){return b===void 0&&(b=new Zl(r,h)),b};let y;return this.getAttributes=function(){return y===void 0&&(y=T2(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=_2++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=T,this}let N2=0;class z2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new F2(e),t.set(e,i)),i}}class F2{constructor(e){this.id=N2++,this.code=e,this.usedTimes=0}}function O2(n,e,t,i,r,s,o){const a=new ix,l=new z2,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,E,P,z,K){const I=z.fog,R=K.geometry,B=y.isMeshStandardMaterial?z.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||B),Y=$&&$.mapping===Ku?$.image.height:null,L=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const G=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,V=G!==void 0?G.length:0;let N=0;R.morphAttributes.position!==void 0&&(N=1),R.morphAttributes.normal!==void 0&&(N=2),R.morphAttributes.color!==void 0&&(N=3);let O,J,Q,ie;if(L){const Oe=ui[L];O=Oe.vertexShader,J=Oe.fragmentShader}else O=y.vertexShader,J=y.fragmentShader,l.update(y),Q=l.getVertexShaderID(y),ie=l.getFragmentShaderID(y);const W=n.getRenderTarget(),Te=y.alphaTest>0,fe=y.clearcoat>0,ye=y.iridescence>0;return{isWebGL2:c,shaderID:L,shaderName:y.type,vertexShader:O,fragmentShader:J,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:W===null?n.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:os,map:!!y.map,matcap:!!y.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:Y,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===aw,tangentSpaceNormalMap:y.normalMapType===ow,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Xe,clearcoat:fe,clearcoatMap:fe&&!!y.clearcoatMap,clearcoatRoughnessMap:fe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!y.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!y.iridescenceMap,iridescenceThicknessMap:ye&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Qs,alphaMap:!!y.alphaMap,alphaTest:Te,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:N,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:zi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$h,flipSided:y.side===Mn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)E.push(P),E.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(g(E,y),_(E,y),E.push(n.outputEncoding)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputEncoding),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.combine),y.push(E.vertexUvs),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function _(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),y.push(a.mask)}function v(y){const E=x[y.type];let P;if(E){const z=ui[E];P=ww.clone(z.uniforms)}else P=y.uniforms;return P}function S(y,E){let P;for(let z=0,K=u.length;z<K;z++){const I=u[z];if(I.cacheKey===E){P=I,++P.usedTimes;break}}return P===void 0&&(P=new k2(n,E,y,s),u.push(P)),P}function M(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function b(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:b}}function U2(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function B2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ig(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,x,h,p){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:h,group:p},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=m,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=h,g.group=p),e++,g}function a(d,f,m,x,h,p){const g=o(d,f,m,x,h,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(d,f,m,x,h,p){const g=o(d,f,m,x,h,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,f){t.length>1&&t.sort(d||B2),i.length>1&&i.sort(f||Rg),r.length>1&&r.sort(f||Rg)}function c(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function V2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ig,n.set(i,[o])):r>=s.length?(o=new Ig,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function G2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ze};break;case"SpotLight":t={position:new U,direction:new U,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function W2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let H2=0;function X2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function j2(n,e){const t=new G2,i=W2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new U);const s=new U,o=new Tt,a=new Tt;function l(c,d){let f=0,m=0,x=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let h=0,p=0,g=0,_=0,v=0,S=0,M=0,T=0,b=0,y=0;c.sort(X2);const E=d!==!0?Math.PI:1;for(let z=0,K=c.length;z<K;z++){const I=c[z],R=I.color,B=I.intensity,$=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=R.r*B*E,m+=R.g*B*E,x+=R.b*B*E;else if(I.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(I.sh.coefficients[L],B);else if(I.isDirectionalLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const G=I.shadow,V=i.get(I);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,r.directionalShadow[h]=V,r.directionalShadowMap[h]=Y,r.directionalShadowMatrix[h]=I.shadow.matrix,S++}r.directional[h]=L,h++}else if(I.isSpotLight){const L=t.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(R).multiplyScalar(B*E),L.distance=$,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,r.spot[g]=L;const G=I.shadow;if(I.map&&(r.spotLightMap[b]=I.map,b++,G.updateMatrices(I),I.castShadow&&y++),r.spotLightMatrix[g]=G.matrix,I.castShadow){const V=i.get(I);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,r.spotShadow[g]=V,r.spotShadowMap[g]=Y,T++}g++}else if(I.isRectAreaLight){const L=t.get(I);L.color.copy(R).multiplyScalar(B),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),r.rectArea[_]=L,_++}else if(I.isPointLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*E),L.distance=I.distance,L.decay=I.decay,I.castShadow){const G=I.shadow,V=i.get(I);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,r.pointShadow[p]=V,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=I.shadow.matrix,M++}r.point[p]=L,p++}else if(I.isHemisphereLight){const L=t.get(I);L.skyColor.copy(I.color).multiplyScalar(B*E),L.groundColor.copy(I.groundColor).multiplyScalar(B*E),r.hemi[v]=L,v++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const P=r.hash;(P.directionalLength!==h||P.pointLength!==p||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==v||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==b)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=_,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+b-y,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=y,P.directionalLength=h,P.pointLength=p,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=v,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=b,r.version=H2++)}function u(c,d){let f=0,m=0,x=0,h=0,p=0;const g=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const S=c[_];if(S.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(S.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(S.isRectAreaLight){const M=r.rectArea[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(S.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:l,setupView:u,state:r}}function kg(n,e){const t=new j2(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function q2(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new kg(n,e),t.set(s,[l])):o>=a.length?(l=new kg(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Y2 extends ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $2 extends ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Z2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q2(n,e,t){let i=new cx;const r=new We,s=new We,o=new At,a=new Y2({depthPacking:sw}),l=new $2,u={},c=t.maxTextureSize,d={0:Mn,1:rs,2:$h},f=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Z2,fragmentShader:K2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new vi;x.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new di(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xv,this.render=function(S,M,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),P=n.state;P.setBlending(mr),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let z=0,K=S.length;z<K;z++){const I=S[z],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const B=R.getFrameExtents();if(r.multiply(B),s.copy(R.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/B.x),r.x=s.x*B.x,R.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/B.y),r.y=s.y*B.y,R.mapSize.y=s.y)),R.map===null){const Y=this.type!==qo?{minFilter:qt,magFilter:qt}:{};R.map=new as(r.x,r.y,Y),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();const $=R.getViewportCount();for(let Y=0;Y<$;Y++){const L=R.getViewport(Y);o.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),P.viewport(o),R.updateMatrices(I,Y),i=R.getFrustum(),v(M,T,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===qo&&g(R,T),R.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(b,y,E)};function g(S,M){const T=e.update(h);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new as(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(M,null,T,f,h,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(M,null,T,m,h,null)}function _(S,M,T,b,y,E){let P=null;const z=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(z!==void 0)P=z;else if(P=T.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const K=P.uuid,I=M.uuid;let R=u[K];R===void 0&&(R={},u[K]=R);let B=R[I];B===void 0&&(B=P.clone(),R[I]=B),P=B}return P.visible=M.visible,P.wireframe=M.wireframe,E===qo?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:d[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(T.matrixWorld),P.nearDistance=b,P.farDistance=y),P}function v(S,M,T,b,y){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===qo)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const z=e.update(S),K=S.material;if(Array.isArray(K)){const I=z.groups;for(let R=0,B=I.length;R<B;R++){const $=I[R],Y=K[$.materialIndex];if(Y&&Y.visible){const L=_(S,Y,b,T.near,T.far,y);n.renderBufferDirect(T,null,z,L,S,$)}}}else if(K.visible){const I=_(S,K,b,T.near,T.far,y);n.renderBufferDirect(T,null,z,I,S,null)}}const P=S.children;for(let z=0,K=P.length;z<K;z++)v(P[z],M,T,b,y)}}function J2(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const H=new At;let te=null;const le=new At(0,0,0,0);return{setMask:function(he){te!==he&&!D&&(n.colorMask(he,he,he,he),te=he)},setLocked:function(he){D=he},setClear:function(he,ze,xt,Dt,Tr){Tr===!0&&(he*=Dt,ze*=Dt,xt*=Dt),H.set(he,ze,xt,Dt),le.equals(H)===!1&&(n.clearColor(he,ze,xt,Dt),le.copy(H))},reset:function(){D=!1,te=null,le.set(-1,0,0,0)}}}function s(){let D=!1,H=null,te=null,le=null;return{setTest:function(he){he?Te(2929):fe(2929)},setMask:function(he){H!==he&&!D&&(n.depthMask(he),H=he)},setFunc:function(he){if(te!==he){switch(he){case AM:n.depthFunc(512);break;case PM:n.depthFunc(519);break;case LM:n.depthFunc(513);break;case Pd:n.depthFunc(515);break;case DM:n.depthFunc(514);break;case RM:n.depthFunc(518);break;case IM:n.depthFunc(516);break;case kM:n.depthFunc(517);break;default:n.depthFunc(515)}te=he}},setLocked:function(he){D=he},setClear:function(he){le!==he&&(n.clearDepth(he),le=he)},reset:function(){D=!1,H=null,te=null,le=null}}}function o(){let D=!1,H=null,te=null,le=null,he=null,ze=null,xt=null,Dt=null,Tr=null;return{setTest:function(Ye){D||(Ye?Te(2960):fe(2960))},setMask:function(Ye){H!==Ye&&!D&&(n.stencilMask(Ye),H=Ye)},setFunc:function(Ye,yi,Pn){(te!==Ye||le!==yi||he!==Pn)&&(n.stencilFunc(Ye,yi,Pn),te=Ye,le=yi,he=Pn)},setOp:function(Ye,yi,Pn){(ze!==Ye||xt!==yi||Dt!==Pn)&&(n.stencilOp(Ye,yi,Pn),ze=Ye,xt=yi,Dt=Pn)},setLocked:function(Ye){D=Ye},setClear:function(Ye){Tr!==Ye&&(n.clearStencil(Ye),Tr=Ye)},reset:function(){D=!1,H=null,te=null,le=null,he=null,ze=null,xt=null,Dt=null,Tr=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},m={},x=new WeakMap,h=[],p=null,g=!1,_=null,v=null,S=null,M=null,T=null,b=null,y=null,E=!1,P=null,z=null,K=null,I=null,R=null;const B=n.getParameter(35661);let $=!1,Y=0;const L=n.getParameter(7938);L.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(L)[1]),$=Y>=1):L.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),$=Y>=2);let G=null,V={};const N=n.getParameter(3088),O=n.getParameter(2978),J=new At().fromArray(N),Q=new At().fromArray(O);function ie(D,H,te){const le=new Uint8Array(4),he=n.createTexture();n.bindTexture(D,he),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let ze=0;ze<te;ze++)n.texImage2D(H+ze,0,6408,1,1,0,6408,5121,le);return he}const W={};W[3553]=ie(3553,3553,1),W[34067]=ie(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Te(2929),l.setFunc(Pd),Gt(!1),An(Cm),Te(2884),Bt(mr);function Te(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function fe(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function ye(D,H){return m[D]!==H?(n.bindFramebuffer(D,H),m[D]=H,i&&(D===36009&&(m[36160]=H),D===36160&&(m[36009]=H)),!0):!1}function ce(D,H){let te=h,le=!1;if(D)if(te=x.get(H),te===void 0&&(te=[],x.set(H,te)),D.isWebGLMultipleRenderTargets){const he=D.texture;if(te.length!==he.length||te[0]!==36064){for(let ze=0,xt=he.length;ze<xt;ze++)te[ze]=36064+ze;te.length=he.length,le=!0}}else te[0]!==36064&&(te[0]=36064,le=!0);else te[0]!==1029&&(te[0]=1029,le=!0);le&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Oe(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const Ee={[bs]:32774,[_M]:32778,[vM]:32779};if(i)Ee[Pm]=32775,Ee[Lm]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ee[Pm]=D.MIN_EXT,Ee[Lm]=D.MAX_EXT)}const xe={[xM]:0,[yM]:1,[SM]:768,[jv]:770,[bM]:776,[EM]:774,[wM]:772,[MM]:769,[qv]:771,[CM]:775,[TM]:773};function Bt(D,H,te,le,he,ze,xt,Dt){if(D===mr){g===!0&&(fe(3042),g=!1);return}if(g===!1&&(Te(3042),g=!0),D!==gM){if(D!==_||Dt!==E){if((v!==bs||T!==bs)&&(n.blendEquation(32774),v=bs,T=bs),Dt)switch(D){case Qs:n.blendFuncSeparate(1,771,1,771);break;case Ad:n.blendFunc(1,1);break;case bm:n.blendFuncSeparate(0,769,0,1);break;case Am:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Qs:n.blendFuncSeparate(770,771,1,771);break;case Ad:n.blendFunc(770,1);break;case bm:n.blendFuncSeparate(0,769,0,1);break;case Am:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,M=null,b=null,y=null,_=D,E=Dt}return}he=he||H,ze=ze||te,xt=xt||le,(H!==v||he!==T)&&(n.blendEquationSeparate(Ee[H],Ee[he]),v=H,T=he),(te!==S||le!==M||ze!==b||xt!==y)&&(n.blendFuncSeparate(xe[te],xe[le],xe[ze],xe[xt]),S=te,M=le,b=ze,y=xt),_=D,E=!1}function Vt(D,H){D.side===$h?fe(2884):Te(2884);let te=D.side===Mn;H&&(te=!te),Gt(te),D.blending===Qs&&D.transparent===!1?Bt(mr):Bt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const le=D.stencilWrite;u.setTest(le),le&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ue(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Te(32926):fe(32926)}function Gt(D){P!==D&&(D?n.frontFace(2304):n.frontFace(2305),P=D)}function An(D){D!==hM?(Te(2884),D!==z&&(D===Cm?n.cullFace(1029):D===pM?n.cullFace(1028):n.cullFace(1032))):fe(2884),z=D}function ft(D){D!==K&&($&&n.lineWidth(D),K=D)}function Ue(D,H,te){D?(Te(32823),(I!==H||R!==te)&&(n.polygonOffset(H,te),I=H,R=te)):fe(32823)}function xi(D){D?Te(3089):fe(3089)}function Xn(D){D===void 0&&(D=33984+B-1),G!==D&&(n.activeTexture(D),G=D)}function A(D,H,te){te===void 0&&(G===null?te=33984+B-1:te=G);let le=V[te];le===void 0&&(le={type:void 0,texture:void 0},V[te]=le),(le.type!==D||le.texture!==H)&&(G!==te&&(n.activeTexture(te),G=te),n.bindTexture(D,H||W[D]),le.type=D,le.texture=H)}function w(){const D=V[G];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){J.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function pe(D){Q.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function ke(D,H){let te=d.get(H);te===void 0&&(te=new WeakMap,d.set(H,te));let le=te.get(D);le===void 0&&(le=n.getUniformBlockIndex(H,D.name),te.set(D,le))}function qe(D,H){const le=d.get(H).get(D);c.get(H)!==le&&(n.uniformBlockBinding(H,le,D.__bindingPointIndex),c.set(H,le))}function vt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},G=null,V={},m={},x=new WeakMap,h=[],p=null,g=!1,_=null,v=null,S=null,M=null,T=null,b=null,y=null,E=!1,P=null,z=null,K=null,I=null,R=null,J.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Te,disable:fe,bindFramebuffer:ye,drawBuffers:ce,useProgram:Oe,setBlending:Bt,setMaterial:Vt,setFlipSided:Gt,setCullFace:An,setLineWidth:ft,setPolygonOffset:Ue,setScissorTest:xi,activeTexture:Xn,bindTexture:A,unbindTexture:w,compressedTexImage2D:j,compressedTexImage3D:ne,texImage2D:ve,texImage3D:de,updateUBOMapping:ke,uniformBlockBinding:qe,texStorage2D:Z,texStorage3D:ge,texSubImage2D:re,texSubImage3D:oe,compressedTexSubImage2D:Se,compressedTexSubImage3D:ae,scissor:_e,viewport:pe,reset:vt}}function eC(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,w){return g?new OffscreenCanvas(A,w):Na("canvas")}function v(A,w,j,ne){let re=1;if((A.width>ne||A.height>ne)&&(re=ne/Math.max(A.width,A.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const oe=w?Nd:Math.floor,Se=oe(re*A.width),ae=oe(re*A.height);h===void 0&&(h=_(Se,ae));const Z=j?_(Se,ae):h;return Z.width=Se,Z.height=ae,Z.getContext("2d").drawImage(A,0,0,Se,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Se+"x"+ae+")."),Z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return ng(A.width)&&ng(A.height)}function M(A){return a?!1:A.wrapS!==Jn||A.wrapT!==Jn||A.minFilter!==qt&&A.minFilter!==Nn}function T(A,w){return A.generateMipmaps&&w&&A.minFilter!==qt&&A.minFilter!==Nn}function b(A){n.generateMipmap(A)}function y(A,w,j,ne,re=!1){if(a===!1)return w;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=w;return w===6403&&(j===5126&&(oe=33326),j===5131&&(oe=33325),j===5121&&(oe=33321)),w===33319&&(j===5126&&(oe=33328),j===5131&&(oe=33327),j===5121&&(oe=33323)),w===6408&&(j===5126&&(oe=34836),j===5131&&(oe=34842),j===5121&&(oe=ne===Xe&&re===!1?35907:32856),j===32819&&(oe=32854),j===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function E(A,w,j){return T(A,j)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==Nn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function P(A){return A===qt||A===Dm||A===Uc?9728:9729}function z(A){const w=A.target;w.removeEventListener("dispose",z),I(w),w.isVideoTexture&&x.delete(w)}function K(A){const w=A.target;w.removeEventListener("dispose",K),B(w)}function I(A){const w=i.get(A);if(w.__webglInit===void 0)return;const j=A.source,ne=p.get(j);if(ne){const re=ne[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&R(A),Object.keys(ne).length===0&&p.delete(j)}i.remove(A)}function R(A){const w=i.get(A);n.deleteTexture(w.__webglTexture);const j=A.source,ne=p.get(j);delete ne[w.__cacheKey],o.memory.textures--}function B(A){const w=A.texture,j=i.get(A),ne=i.get(w);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(j.__webglFramebuffer[re]),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let re=0;re<j.__webglColorRenderbuffer.length;re++)j.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[re]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let re=0,oe=w.length;re<oe;re++){const Se=i.get(w[re]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(w[re])}i.remove(w),i.remove(A)}let $=0;function Y(){$=0}function L(){const A=$;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),$+=1,A}function G(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function V(A,w){const j=i.get(A);if(A.isVideoTexture&&xi(A),A.isRenderTargetTexture===!1&&A.version>0&&j.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(j,A,w);return}}t.bindTexture(3553,j.__webglTexture,33984+w)}function N(A,w){const j=i.get(A);if(A.version>0&&j.__version!==A.version){fe(j,A,w);return}t.bindTexture(35866,j.__webglTexture,33984+w)}function O(A,w){const j=i.get(A);if(A.version>0&&j.__version!==A.version){fe(j,A,w);return}t.bindTexture(32879,j.__webglTexture,33984+w)}function J(A,w){const j=i.get(A);if(A.version>0&&j.__version!==A.version){ye(j,A,w);return}t.bindTexture(34067,j.__webglTexture,33984+w)}const Q={[Rd]:10497,[Jn]:33071,[Id]:33648},ie={[qt]:9728,[Dm]:9984,[Uc]:9986,[Nn]:9729,[GM]:9985,[Ra]:9987};function W(A,w,j){if(j?(n.texParameteri(A,10242,Q[w.wrapS]),n.texParameteri(A,10243,Q[w.wrapT]),(A===32879||A===35866)&&n.texParameteri(A,32882,Q[w.wrapR]),n.texParameteri(A,10240,ie[w.magFilter]),n.texParameteri(A,10241,ie[w.minFilter])):(n.texParameteri(A,10242,33071),n.texParameteri(A,10243,33071),(A===32879||A===35866)&&n.texParameteri(A,32882,33071),(w.wrapS!==Jn||w.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,10240,P(w.magFilter)),n.texParameteri(A,10241,P(w.minFilter)),w.minFilter!==qt&&w.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===qt||w.minFilter!==Uc&&w.minFilter!==Ra||w.type===Hr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ia&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Te(A,w){let j=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",z));const ne=w.source;let re=p.get(ne);re===void 0&&(re={},p.set(ne,re));const oe=G(w);if(oe!==A.__cacheKey){re[oe]===void 0&&(re[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),re[oe].usedTimes++;const Se=re[A.__cacheKey];Se!==void 0&&(re[A.__cacheKey].usedTimes--,Se.usedTimes===0&&R(w)),A.__cacheKey=oe,A.__webglTexture=re[oe].texture}return j}function fe(A,w,j){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const re=Te(A,w),oe=w.source;t.bindTexture(ne,A.__webglTexture,33984+j);const Se=i.get(oe);if(oe.version!==Se.__version||re===!0){t.activeTexture(33984+j),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const ae=M(w)&&S(w.image)===!1;let Z=v(w.image,ae,!1,c);Z=Xn(w,Z);const ge=S(Z)||a,ve=s.convert(w.format,w.encoding);let de=s.convert(w.type),_e=y(w.internalFormat,ve,de,w.encoding,w.isVideoTexture);W(ne,w,ge);let pe;const ke=w.mipmaps,qe=a&&w.isVideoTexture!==!0,vt=Se.__version===void 0||re===!0,D=E(w,Z,ge);if(w.isDepthTexture)_e=6402,a?w.type===Hr?_e=36012:w.type===Wr?_e=33190:w.type===Js?_e=35056:_e=33189:w.type===Hr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Zr&&_e===6402&&w.type!==Zv&&w.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Wr,de=s.convert(w.type)),w.format===_o&&_e===6402&&(_e=34041,w.type!==Js&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Js,de=s.convert(w.type))),vt&&(qe?t.texStorage2D(3553,1,_e,Z.width,Z.height):t.texImage2D(3553,0,_e,Z.width,Z.height,0,ve,de,null));else if(w.isDataTexture)if(ke.length>0&&ge){qe&&vt&&t.texStorage2D(3553,D,_e,ke[0].width,ke[0].height);for(let H=0,te=ke.length;H<te;H++)pe=ke[H],qe?t.texSubImage2D(3553,H,0,0,pe.width,pe.height,ve,de,pe.data):t.texImage2D(3553,H,_e,pe.width,pe.height,0,ve,de,pe.data);w.generateMipmaps=!1}else qe?(vt&&t.texStorage2D(3553,D,_e,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Z.width,Z.height,ve,de,Z.data)):t.texImage2D(3553,0,_e,Z.width,Z.height,0,ve,de,Z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qe&&vt&&t.texStorage3D(35866,D,_e,ke[0].width,ke[0].height,Z.depth);for(let H=0,te=ke.length;H<te;H++)pe=ke[H],w.format!==ei?ve!==null?qe?t.compressedTexSubImage3D(35866,H,0,0,0,pe.width,pe.height,Z.depth,ve,pe.data,0,0):t.compressedTexImage3D(35866,H,_e,pe.width,pe.height,Z.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(35866,H,0,0,0,pe.width,pe.height,Z.depth,ve,de,pe.data):t.texImage3D(35866,H,_e,pe.width,pe.height,Z.depth,0,ve,de,pe.data)}else{qe&&vt&&t.texStorage2D(3553,D,_e,ke[0].width,ke[0].height);for(let H=0,te=ke.length;H<te;H++)pe=ke[H],w.format!==ei?ve!==null?qe?t.compressedTexSubImage2D(3553,H,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(3553,H,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(3553,H,0,0,pe.width,pe.height,ve,de,pe.data):t.texImage2D(3553,H,_e,pe.width,pe.height,0,ve,de,pe.data)}else if(w.isDataArrayTexture)qe?(vt&&t.texStorage3D(35866,D,_e,Z.width,Z.height,Z.depth),t.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,ve,de,Z.data)):t.texImage3D(35866,0,_e,Z.width,Z.height,Z.depth,0,ve,de,Z.data);else if(w.isData3DTexture)qe?(vt&&t.texStorage3D(32879,D,_e,Z.width,Z.height,Z.depth),t.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,ve,de,Z.data)):t.texImage3D(32879,0,_e,Z.width,Z.height,Z.depth,0,ve,de,Z.data);else if(w.isFramebufferTexture){if(vt)if(qe)t.texStorage2D(3553,D,_e,Z.width,Z.height);else{let H=Z.width,te=Z.height;for(let le=0;le<D;le++)t.texImage2D(3553,le,_e,H,te,0,ve,de,null),H>>=1,te>>=1}}else if(ke.length>0&&ge){qe&&vt&&t.texStorage2D(3553,D,_e,ke[0].width,ke[0].height);for(let H=0,te=ke.length;H<te;H++)pe=ke[H],qe?t.texSubImage2D(3553,H,0,0,ve,de,pe):t.texImage2D(3553,H,_e,ve,de,pe);w.generateMipmaps=!1}else qe?(vt&&t.texStorage2D(3553,D,_e,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,ve,de,Z)):t.texImage2D(3553,0,_e,ve,de,Z);T(w,ge)&&b(ne),Se.__version=oe.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ye(A,w,j){if(w.image.length!==6)return;const ne=Te(A,w),re=w.source;t.bindTexture(34067,A.__webglTexture,33984+j);const oe=i.get(re);if(re.version!==oe.__version||ne===!0){t.activeTexture(33984+j),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const Se=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,Z=[];for(let H=0;H<6;H++)!Se&&!ae?Z[H]=v(w.image[H],!1,!0,u):Z[H]=ae?w.image[H].image:w.image[H],Z[H]=Xn(w,Z[H]);const ge=Z[0],ve=S(ge)||a,de=s.convert(w.format,w.encoding),_e=s.convert(w.type),pe=y(w.internalFormat,de,_e,w.encoding),ke=a&&w.isVideoTexture!==!0,qe=oe.__version===void 0||ne===!0;let vt=E(w,ge,ve);W(34067,w,ve);let D;if(Se){ke&&qe&&t.texStorage2D(34067,vt,pe,ge.width,ge.height);for(let H=0;H<6;H++){D=Z[H].mipmaps;for(let te=0;te<D.length;te++){const le=D[te];w.format!==ei?de!==null?ke?t.compressedTexSubImage2D(34069+H,te,0,0,le.width,le.height,de,le.data):t.compressedTexImage2D(34069+H,te,pe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+H,te,0,0,le.width,le.height,de,_e,le.data):t.texImage2D(34069+H,te,pe,le.width,le.height,0,de,_e,le.data)}}}else{D=w.mipmaps,ke&&qe&&(D.length>0&&vt++,t.texStorage2D(34067,vt,pe,Z[0].width,Z[0].height));for(let H=0;H<6;H++)if(ae){ke?t.texSubImage2D(34069+H,0,0,0,Z[H].width,Z[H].height,de,_e,Z[H].data):t.texImage2D(34069+H,0,pe,Z[H].width,Z[H].height,0,de,_e,Z[H].data);for(let te=0;te<D.length;te++){const he=D[te].image[H].image;ke?t.texSubImage2D(34069+H,te+1,0,0,he.width,he.height,de,_e,he.data):t.texImage2D(34069+H,te+1,pe,he.width,he.height,0,de,_e,he.data)}}else{ke?t.texSubImage2D(34069+H,0,0,0,de,_e,Z[H]):t.texImage2D(34069+H,0,pe,de,_e,Z[H]);for(let te=0;te<D.length;te++){const le=D[te];ke?t.texSubImage2D(34069+H,te+1,0,0,de,_e,le.image[H]):t.texImage2D(34069+H,te+1,pe,de,_e,le.image[H])}}}T(w,ve)&&b(34067),oe.__version=re.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ce(A,w,j,ne,re){const oe=s.convert(j.format,j.encoding),Se=s.convert(j.type),ae=y(j.internalFormat,oe,Se,j.encoding);i.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,ae,w.width,w.height,w.depth,0,oe,Se,null):t.texImage2D(re,0,ae,w.width,w.height,0,oe,Se,null)),t.bindFramebuffer(36160,A),Ue(w)?f.framebufferTexture2DMultisampleEXT(36160,ne,re,i.get(j).__webglTexture,0,ft(w)):(re===3553||re>=34069&&re<=34074)&&n.framebufferTexture2D(36160,ne,re,i.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function Oe(A,w,j){if(n.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(j||Ue(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===Hr?ne=36012:re.type===Wr&&(ne=33190));const oe=ft(w);Ue(w)?f.renderbufferStorageMultisampleEXT(36161,oe,ne,w.width,w.height):n.renderbufferStorageMultisample(36161,oe,ne,w.width,w.height)}else n.renderbufferStorage(36161,ne,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const ne=ft(w);j&&Ue(w)===!1?n.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Ue(w)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,A)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ne.length;re++){const oe=ne[re],Se=s.convert(oe.format,oe.encoding),ae=s.convert(oe.type),Z=y(oe.internalFormat,Se,ae,oe.encoding),ge=ft(w);j&&Ue(w)===!1?n.renderbufferStorageMultisample(36161,ge,Z,w.width,w.height):Ue(w)?f.renderbufferStorageMultisampleEXT(36161,ge,Z,w.width,w.height):n.renderbufferStorage(36161,Z,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function Ee(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,re=ft(w);if(w.depthTexture.format===Zr)Ue(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,re):n.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===_o)Ue(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,re):n.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function xe(A){const w=i.get(A),j=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ee(w.__webglFramebuffer,A)}else if(j){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=n.createRenderbuffer(),Oe(w.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Oe(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Bt(A,w,j){const ne=i.get(A);w!==void 0&&ce(ne.__webglFramebuffer,A,A.texture,36064,3553),j!==void 0&&xe(A)}function Vt(A){const w=A.texture,j=i.get(A),ne=i.get(w);A.addEventListener("dispose",K),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=w.version,o.memory.textures++);const re=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,Se=S(A)||a;if(re){j.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)j.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(j.__webglFramebuffer=n.createFramebuffer(),oe)if(r.drawBuffers){const ae=A.texture;for(let Z=0,ge=ae.length;Z<ge;Z++){const ve=i.get(ae[Z]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ue(A)===!1){const ae=oe?w:[w];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let Z=0;Z<ae.length;Z++){const ge=ae[Z];j.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(36161,j.__webglColorRenderbuffer[Z]);const ve=s.convert(ge.format,ge.encoding),de=s.convert(ge.type),_e=y(ge.internalFormat,ve,de,ge.encoding,A.isXRRenderTarget===!0),pe=ft(A);n.renderbufferStorageMultisample(36161,pe,_e,A.width,A.height),n.framebufferRenderbuffer(36160,36064+Z,36161,j.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(36161,null),A.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(j.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ne.__webglTexture),W(34067,w,Se);for(let ae=0;ae<6;ae++)ce(j.__webglFramebuffer[ae],A,w,36064,34069+ae);T(w,Se)&&b(34067),t.unbindTexture()}else if(oe){const ae=A.texture;for(let Z=0,ge=ae.length;Z<ge;Z++){const ve=ae[Z],de=i.get(ve);t.bindTexture(3553,de.__webglTexture),W(3553,ve,Se),ce(j.__webglFramebuffer,A,ve,36064+Z,3553),T(ve,Se)&&b(3553)}t.unbindTexture()}else{let ae=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ae=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ne.__webglTexture),W(ae,w,Se),ce(j.__webglFramebuffer,A,w,36064,ae),T(w,Se)&&b(ae),t.unbindTexture()}A.depthBuffer&&xe(A)}function Gt(A){const w=S(A)||a,j=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,re=j.length;ne<re;ne++){const oe=j[ne];if(T(oe,w)){const Se=A.isWebGLCubeRenderTarget?34067:3553,ae=i.get(oe).__webglTexture;t.bindTexture(Se,ae),b(Se),t.unbindTexture()}}}function An(A){if(a&&A.samples>0&&Ue(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],j=A.width,ne=A.height;let re=16384;const oe=[],Se=A.stencilBuffer?33306:36096,ae=i.get(A),Z=A.isWebGLMultipleRenderTargets===!0;if(Z)for(let ge=0;ge<w.length;ge++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){oe.push(36064+ge),A.depthBuffer&&oe.push(Se);const ve=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ve===!1&&(A.depthBuffer&&(re|=256),A.stencilBuffer&&(re|=1024)),Z&&n.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[ge]),ve===!0&&(n.invalidateFramebuffer(36008,[Se]),n.invalidateFramebuffer(36009,[Se])),Z){const de=i.get(w[ge]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,de,0)}n.blitFramebuffer(0,0,j,ne,0,0,j,ne,re,9728),m&&n.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let ge=0;ge<w.length;ge++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ge,36161,ae.__webglColorRenderbuffer[ge]);const ve=i.get(w[ge]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ge,3553,ve,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function ft(A){return Math.min(d,A.samples)}function Ue(A){const w=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function xi(A){const w=o.render.frame;x.get(A)!==w&&(x.set(A,w),A.update())}function Xn(A,w){const j=A.encoding,ne=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===kd||j!==os&&(j===Xe?a===!1?e.has("EXT_sRGB")===!0&&ne===ei?(A.format=kd,A.minFilter=Nn,A.generateMipmaps=!1):w=Jv.sRGBToLinear(w):(ne!==ei||re!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),w}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=V,this.setTexture2DArray=N,this.setTexture3D=O,this.setTextureCube=J,this.rebindTextures=Bt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ue}function tC(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===ss)return 5121;if(s===jM)return 32819;if(s===qM)return 32820;if(s===WM)return 5120;if(s===HM)return 5122;if(s===Zv)return 5123;if(s===XM)return 5124;if(s===Wr)return 5125;if(s===Hr)return 5126;if(s===Ia)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===YM)return 6406;if(s===ei)return 6408;if(s===ZM)return 6409;if(s===KM)return 6410;if(s===Zr)return 6402;if(s===_o)return 34041;if(s===$M)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===kd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===QM)return 6403;if(s===JM)return 36244;if(s===ew)return 33319;if(s===tw)return 33320;if(s===nw)return 36249;if(s===Bc||s===Vc||s===Gc||s===Wc)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rm||s===Im||s===km||s===Nm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Rm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Im)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===km)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===iw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zm||s===Fm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===zm)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Fm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Om||s===Um||s===Bm||s===Vm||s===Gm||s===Wm||s===Hm||s===Xm||s===jm||s===qm||s===Ym||s===$m||s===Zm||s===Km)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Om)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Um)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ym)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$m)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Km)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Qm)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Js?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class nC extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $o extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iC={type:"move"};class _f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,i),g=this._getHandJoint(u,h);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),m=.02,x=.005;u.inputState.pinching&&f>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $o;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class rC extends an{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Zr,c!==Zr&&c!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Zr&&(i=Wr),i===void 0&&c===_o&&(i=Js),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1}}class sC extends Mo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,d=null,f=null,m=null;const x=t.getContextAttributes();let h=null,p=null;const g=[],_=[],v=new Set,S=new Map,M=new zn;M.layers.enable(1),M.viewport=new At;const T=new zn;T.layers.enable(2),T.viewport=new At;const b=[M,T],y=new nC;y.layers.enable(1),y.layers.enable(2);let E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let O=g[N];return O===void 0&&(O=new _f,g[N]=O),O.getTargetRaySpace()},this.getControllerGrip=function(N){let O=g[N];return O===void 0&&(O=new _f,g[N]=O),O.getGripSpace()},this.getHand=function(N){let O=g[N];return O===void 0&&(O=new _f,g[N]=O),O.getHandSpace()};function z(N){const O=_.indexOf(N.inputSource);if(O===-1)return;const J=g[O];J!==void 0&&J.dispatchEvent({type:N.type,data:N.inputSource})}function K(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",I);for(let N=0;N<g.length;N++){const O=_[N];O!==null&&(_[N]=null,g[N].disconnect(O))}E=null,P=null,e.setRenderTarget(h),f=null,d=null,c=null,r=null,p=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,O),r.updateRenderState({baseLayer:f}),p=new as(f.framebufferWidth,f.framebufferHeight,{format:ei,type:ss,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let O=null,J=null,Q=null;x.depth&&(Q=x.stencil?35056:33190,O=x.stencil?_o:Zr,J=x.stencil?Js:Wr);const ie={colorFormat:32856,depthFormat:Q,scaleFactor:s};c=new XRWebGLBinding(r,t),d=c.createProjectionLayer(ie),r.updateRenderState({layers:[d]}),p=new as(d.textureWidth,d.textureHeight,{format:ei,type:ss,depthTexture:new rC(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const W=e.properties.get(p);W.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(N){for(let O=0;O<N.removed.length;O++){const J=N.removed[O],Q=_.indexOf(J);Q>=0&&(_[Q]=null,g[Q].disconnect(J))}for(let O=0;O<N.added.length;O++){const J=N.added[O];let Q=_.indexOf(J);if(Q===-1){for(let W=0;W<g.length;W++)if(W>=_.length){_.push(J),Q=W;break}else if(_[W]===null){_[W]=J,Q=W;break}if(Q===-1)break}const ie=g[Q];ie&&ie.connect(J)}}const R=new U,B=new U;function $(N,O,J){R.setFromMatrixPosition(O.matrixWorld),B.setFromMatrixPosition(J.matrixWorld);const Q=R.distanceTo(B),ie=O.projectionMatrix.elements,W=J.projectionMatrix.elements,Te=ie[14]/(ie[10]-1),fe=ie[14]/(ie[10]+1),ye=(ie[9]+1)/ie[5],ce=(ie[9]-1)/ie[5],Oe=(ie[8]-1)/ie[0],Ee=(W[8]+1)/W[0],xe=Te*Oe,Bt=Te*Ee,Vt=Q/(-Oe+Ee),Gt=Vt*-Oe;O.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Gt),N.translateZ(Vt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const An=Te+Vt,ft=fe+Vt,Ue=xe-Gt,xi=Bt+(Q-Gt),Xn=ye*fe/ft*An,A=ce*fe/ft*An;N.projectionMatrix.makePerspective(Ue,xi,Xn,A,An,ft)}function Y(N,O){O===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(O.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;y.near=T.near=M.near=N.near,y.far=T.far=M.far=N.far,(E!==y.near||P!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,P=y.far);const O=N.parent,J=y.cameras;Y(y,O);for(let ie=0;ie<J.length;ie++)Y(J[ie],O);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),N.matrix.copy(y.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const Q=N.children;for(let ie=0,W=Q.length;ie<W;ie++)Q[ie].updateMatrixWorld(!0);J.length===2?$(y,M,T):y.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(N){d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.getPlanes=function(){return v};let L=null;function G(N,O){if(u=O.getViewerPose(l||o),m=O,u!==null){const J=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Q=!1;J.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let ie=0;ie<J.length;ie++){const W=J[ie];let Te=null;if(f!==null)Te=f.getViewport(W);else{const ye=c.getViewSubImage(d,W);Te=ye.viewport,ie===0&&(e.setRenderTargetTextures(p,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(p))}let fe=b[ie];fe===void 0&&(fe=new zn,fe.layers.enable(ie),fe.viewport=new At,b[ie]=fe),fe.matrix.fromArray(W.transform.matrix),fe.projectionMatrix.fromArray(W.projectionMatrix),fe.viewport.set(Te.x,Te.y,Te.width,Te.height),ie===0&&y.matrix.copy(fe.matrix),Q===!0&&y.cameras.push(fe)}}for(let J=0;J<g.length;J++){const Q=_[J],ie=g[J];Q!==null&&ie!==void 0&&ie.update(Q,O,l||o)}if(L&&L(N,O),O.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:O.detectedPlanes});let J=null;for(const Q of v)O.detectedPlanes.has(Q)||(J===null&&(J=[]),J.push(Q));if(J!==null)for(const Q of J)v.delete(Q),S.delete(Q),i.dispatchEvent({type:"planeremoved",data:Q});for(const Q of O.detectedPlanes)if(!v.has(Q))v.add(Q),S.set(Q,O.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Q});else{const ie=S.get(Q);Q.lastChangedTime>ie&&(S.set(Q,Q.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Q}))}}m=null}const V=new fx;V.setAnimationLoop(G),this.setAnimationLoop=function(N){L=N},this.dispose=function(){}}}function oC(n,e){function t(h,p){p.color.getRGB(h.fogColor.value,ax(n)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,v)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,g,_):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===Mn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===Mn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uv2Transform.value.copy(v.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,_){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=_*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Mn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function aC(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function u(_,v){let S=r[_.id];S===void 0&&(x(_),S=c(_),r[_.id]=S,_.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(_,M);const T=e.render.frame;s[_.id]!==T&&(f(_),s[_.id]=T)}function c(_){const v=d();_.__bindingPointIndex=v;const S=n.createBuffer(),M=_.__size,T=_.usage;return n.bindBuffer(35345,S),n.bufferData(35345,M,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],S=_.uniforms,M=_.__cache;n.bindBuffer(35345,v);for(let T=0,b=S.length;T<b;T++){const y=S[T];if(m(y,T,M)===!0){const E=y.__offset,P=Array.isArray(y.value)?y.value:[y.value];let z=0;for(let K=0;K<P.length;K++){const I=P[K],R=h(I);typeof I=="number"?(y.__data[0]=I,n.bufferSubData(35345,E+z,y.__data)):I.isMatrix3?(y.__data[0]=I.elements[0],y.__data[1]=I.elements[1],y.__data[2]=I.elements[2],y.__data[3]=I.elements[0],y.__data[4]=I.elements[3],y.__data[5]=I.elements[4],y.__data[6]=I.elements[5],y.__data[7]=I.elements[0],y.__data[8]=I.elements[6],y.__data[9]=I.elements[7],y.__data[10]=I.elements[8],y.__data[11]=I.elements[0]):(I.toArray(y.__data,z),z+=R.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,E,y.__data)}}n.bindBuffer(35345,null)}function m(_,v,S){const M=_.value;if(S[v]===void 0){if(typeof M=="number")S[v]=M;else{const T=Array.isArray(M)?M:[M],b=[];for(let y=0;y<T.length;y++)b.push(T[y].clone());S[v]=b}return!0}else if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{const T=Array.isArray(S[v])?S[v]:[S[v]],b=Array.isArray(M)?M:[M];for(let y=0;y<T.length;y++){const E=T[y];if(E.equals(b[y])===!1)return E.copy(b[y]),!0}}return!1}function x(_){const v=_.uniforms;let S=0;const M=16;let T=0;for(let b=0,y=v.length;b<y;b++){const E=v[b],P={boundary:0,storage:0},z=Array.isArray(E.value)?E.value:[E.value];for(let K=0,I=z.length;K<I;K++){const R=z[K],B=h(R);P.boundary+=B.boundary,P.storage+=B.storage}if(E.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=S,b>0){T=S%M;const K=M-T;T!==0&&K-P.boundary<0&&(S+=M-T,E.__offset=S)}S+=P.storage}return T=S%M,T>0&&(S+=M-T),_.__size=S,_.__cache={},this}function h(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function g(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function lC(){const n=Na("canvas");return n.style.display="block",n}function gx(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:lC(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=os,this.physicallyCorrectLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const h=this;let p=!1,g=0,_=0,v=null,S=-1,M=null;const T=new At,b=new At;let y=null,E=e.width,P=e.height,z=1,K=null,I=null;const R=new At(0,0,E,P),B=new At(0,0,E,P);let $=!1;const Y=new cx;let L=!1,G=!1,V=null;const N=new Tt,O=new We,J=new U,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return v===null?z:1}let W=t;function Te(C,F){for(let X=0;X<C.length;X++){const k=C[X],q=e.getContext(k,F);if(q!==null)return q}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yh}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",ke,!1),W===null){const F=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&F.shift(),W=Te(F,C),W===null)throw Te(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let fe,ye,ce,Oe,Ee,xe,Bt,Vt,Gt,An,ft,Ue,xi,Xn,A,w,j,ne,re,oe,Se,ae,Z,ge;function ve(){fe=new x3(W),ye=new d3(W,fe,n),fe.init(ye),ae=new tC(W,fe,ye),ce=new J2(W,fe,ye),Oe=new M3,Ee=new U2,xe=new eC(W,fe,ce,Ee,ye,ae,Oe),Bt=new p3(h),Vt=new v3(h),Gt=new Lw(W,ye),Z=new c3(W,fe,Gt,ye),An=new y3(W,Gt,Oe,Z),ft=new C3(W,An,Gt,Oe),re=new E3(W,ye,xe),w=new h3(Ee),Ue=new O2(h,Bt,Vt,fe,ye,Z,w),xi=new oC(h,Ee),Xn=new V2,A=new q2(fe,ye),ne=new u3(h,Bt,Vt,ce,ft,c,o),j=new Q2(h,ft,ye),ge=new aC(W,Oe,ye,ce),oe=new f3(W,fe,Oe,ye),Se=new S3(W,fe,Oe,ye),Oe.programs=Ue.programs,h.capabilities=ye,h.extensions=fe,h.properties=Ee,h.renderLists=Xn,h.shadowMap=j,h.state=ce,h.info=Oe}ve();const de=new sC(h,W);this.xr=de,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(E,P,!1))},this.getSize=function(C){return C.set(E,P)},this.setSize=function(C,F,X){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=C,P=F,e.width=Math.floor(C*z),e.height=Math.floor(F*z),X!==!1&&(e.style.width=C+"px",e.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(E*z,P*z).floor()},this.setDrawingBufferSize=function(C,F,X){E=C,P=F,z=X,e.width=Math.floor(C*X),e.height=Math.floor(F*X),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,F,X,k){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,F,X,k),ce.viewport(T.copy(R).multiplyScalar(z).floor())},this.getScissor=function(C){return C.copy(B)},this.setScissor=function(C,F,X,k){C.isVector4?B.set(C.x,C.y,C.z,C.w):B.set(C,F,X,k),ce.scissor(b.copy(B).multiplyScalar(z).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(C){ce.setScissorTest($=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){I=C},this.getClearColor=function(C){return C.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(C=!0,F=!0,X=!0){let k=0;C&&(k|=16384),F&&(k|=256),X&&(k|=1024),W.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),Xn.dispose(),A.dispose(),Ee.dispose(),Bt.dispose(),Vt.dispose(),ft.dispose(),Z.dispose(),ge.dispose(),Ue.dispose(),de.dispose(),de.removeEventListener("sessionstart",le),de.removeEventListener("sessionend",he),V&&(V.dispose(),V=null),ze.stop()};function _e(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=Oe.autoReset,F=j.enabled,X=j.autoUpdate,k=j.needsUpdate,q=j.type;ve(),Oe.autoReset=C,j.enabled=F,j.autoUpdate=X,j.needsUpdate=k,j.type=q}function ke(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function qe(C){const F=C.target;F.removeEventListener("dispose",qe),vt(F)}function vt(C){D(C),Ee.remove(C)}function D(C){const F=Ee.get(C).programs;F!==void 0&&(F.forEach(function(X){Ue.releaseProgram(X)}),C.isShaderMaterial&&Ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,X,k,q,me){F===null&&(F=Q);const Me=q.isMesh&&q.matrixWorld.determinant()<0,Ce=xx(C,F,X,k,q);ce.setMaterial(k,Me);let be=X.index,Ne=1;k.wireframe===!0&&(be=An.getWireframeAttribute(X),Ne=2);const Le=X.drawRange,De=X.attributes.position;let ot=Le.start*Ne,un=(Le.start+Le.count)*Ne;me!==null&&(ot=Math.max(ot,me.start*Ne),un=Math.min(un,(me.start+me.count)*Ne)),be!==null?(ot=Math.max(ot,0),un=Math.min(un,be.count)):De!=null&&(ot=Math.max(ot,0),un=Math.min(un,De.count));const Si=un-ot;if(Si<0||Si===1/0)return;Z.setup(q,k,Ce,X,be);let Er,at=oe;if(be!==null&&(Er=Gt.get(be),at=Se,at.setIndex(Er)),q.isMesh)k.wireframe===!0?(ce.setLineWidth(k.wireframeLinewidth*ie()),at.setMode(1)):at.setMode(4);else if(q.isLine){let Re=k.linewidth;Re===void 0&&(Re=1),ce.setLineWidth(Re*ie()),q.isLineSegments?at.setMode(1):q.isLineLoop?at.setMode(2):at.setMode(3)}else q.isPoints?at.setMode(0):q.isSprite&&at.setMode(4);if(q.isInstancedMesh)at.renderInstances(ot,Si,q.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ec=Math.min(X.instanceCount,Re);at.renderInstances(ot,Si,ec)}else at.render(ot,Si)},this.compile=function(C,F){function X(k,q,me){k.transparent===!0&&k.side===dl?(k.side=Mn,k.needsUpdate=!0,Pn(k,q,me),k.side=rs,k.needsUpdate=!0,Pn(k,q,me),k.side=dl):Pn(k,q,me)}f=A.get(C),f.init(),x.push(f),C.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(h.physicallyCorrectLights),C.traverse(function(k){const q=k.material;if(q)if(Array.isArray(q))for(let me=0;me<q.length;me++){const Me=q[me];X(Me,C,k)}else X(q,C,k)}),x.pop(),f=null};let H=null;function te(C){H&&H(C)}function le(){ze.stop()}function he(){ze.start()}const ze=new fx;ze.setAnimationLoop(te),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(C){H=C,de.setAnimationLoop(C),C===null?ze.stop():ze.start()},de.addEventListener("sessionstart",le),de.addEventListener("sessionend",he),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),C.isScene===!0&&C.onBeforeRender(h,C,F,v),f=A.get(C,x.length),f.init(),x.push(f),N.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(N),G=this.localClippingEnabled,L=w.init(this.clippingPlanes,G,F),d=Xn.get(C,m.length),d.init(),m.push(d),xt(C,F,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(K,I),L===!0&&w.beginShadows();const X=f.state.shadowsArray;if(j.render(X,C,F),L===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(d,C),f.setupLights(h.physicallyCorrectLights),F.isArrayCamera){const k=F.cameras;for(let q=0,me=k.length;q<me;q++){const Me=k[q];Dt(d,C,Me,Me.viewport)}}else Dt(d,C,F);v!==null&&(xe.updateMultisampleRenderTarget(v),xe.updateRenderTargetMipmap(v)),C.isScene===!0&&C.onAfterRender(h,C,F),Z.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function xt(C,F,X,k){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){k&&J.setFromMatrixPosition(C.matrixWorld).applyMatrix4(N);const Me=ft.update(C),Ce=C.material;Ce.visible&&d.push(C,Me,Ce,X,J.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Oe.render.frame&&(C.skeleton.update(),C.skeleton.frame=Oe.render.frame),!C.frustumCulled||Y.intersectsObject(C))){k&&J.setFromMatrixPosition(C.matrixWorld).applyMatrix4(N);const Me=ft.update(C),Ce=C.material;if(Array.isArray(Ce)){const be=Me.groups;for(let Ne=0,Le=be.length;Ne<Le;Ne++){const De=be[Ne],ot=Ce[De.materialIndex];ot&&ot.visible&&d.push(C,Me,ot,X,J.z,De)}}else Ce.visible&&d.push(C,Me,Ce,X,J.z,null)}}const me=C.children;for(let Me=0,Ce=me.length;Me<Ce;Me++)xt(me[Me],F,X,k)}function Dt(C,F,X,k){const q=C.opaque,me=C.transmissive,Me=C.transparent;f.setupLightsView(X),me.length>0&&Tr(q,F,X),k&&ce.viewport(T.copy(k)),q.length>0&&Ye(q,F,X),me.length>0&&Ye(me,F,X),Me.length>0&&Ye(Me,F,X),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Tr(C,F,X){const k=ye.isWebGL2;V===null&&(V=new as(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Ia:ss,minFilter:Ra,samples:k&&s===!0?4:0})),h.getDrawingBufferSize(O),k?V.setSize(O.x,O.y):V.setSize(Nd(O.x),Nd(O.y));const q=h.getRenderTarget();h.setRenderTarget(V),h.clear();const me=h.toneMapping;h.toneMapping=zi,Ye(C,F,X),h.toneMapping=me,xe.updateMultisampleRenderTarget(V),xe.updateRenderTargetMipmap(V),h.setRenderTarget(q)}function Ye(C,F,X){const k=F.isScene===!0?F.overrideMaterial:null;for(let q=0,me=C.length;q<me;q++){const Me=C[q],Ce=Me.object,be=Me.geometry,Ne=k===null?Me.material:k,Le=Me.group;Ce.layers.test(X.layers)&&yi(Ce,F,X,be,Ne,Le)}}function yi(C,F,X,k,q,me){C.onBeforeRender(h,F,X,k,q,me),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(h,F,X,k,C,me),q.transparent===!0&&q.side===dl?(q.side=Mn,q.needsUpdate=!0,h.renderBufferDirect(X,F,k,q,C,me),q.side=rs,q.needsUpdate=!0,h.renderBufferDirect(X,F,k,q,C,me),q.side=dl):h.renderBufferDirect(X,F,k,q,C,me),C.onAfterRender(h,F,X,k,q,me)}function Pn(C,F,X){F.isScene!==!0&&(F=Q);const k=Ee.get(C),q=f.state.lights,me=f.state.shadowsArray,Me=q.state.version,Ce=Ue.getParameters(C,q.state,me,F,X),be=Ue.getProgramCacheKey(Ce);let Ne=k.programs;k.environment=C.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(C.isMeshStandardMaterial?Vt:Bt).get(C.envMap||k.environment),Ne===void 0&&(C.addEventListener("dispose",qe),Ne=new Map,k.programs=Ne);let Le=Ne.get(be);if(Le!==void 0){if(k.currentProgram===Le&&k.lightsStateVersion===Me)return Qh(C,Ce),Le}else Ce.uniforms=Ue.getUniforms(C),C.onBuild(X,Ce,h),C.onBeforeCompile(Ce,h),Le=Ue.acquireProgram(Ce,be),Ne.set(be,Le),k.uniforms=Ce.uniforms;const De=k.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(De.clippingPlanes=w.uniform),Qh(C,Ce),k.needsLights=Sx(C),k.lightsStateVersion=Me,k.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.directionalShadowMap.value=q.state.directionalShadowMap,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotShadowMap.value=q.state.spotShadowMap,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMap.value=q.state.pointShadowMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix);const ot=Le.getUniforms(),un=Zl.seqWithValue(ot.seq,De);return k.currentProgram=Le,k.uniformsList=un,Le}function Qh(C,F){const X=Ee.get(C);X.outputEncoding=F.outputEncoding,X.instancing=F.instancing,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function xx(C,F,X,k,q){F.isScene!==!0&&(F=Q),xe.resetTextureUnits();const me=F.fog,Me=k.isMeshStandardMaterial?F.environment:null,Ce=v===null?h.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:os,be=(k.isMeshStandardMaterial?Vt:Bt).get(k.envMap||Me),Ne=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Le=!!k.normalMap&&!!X.attributes.tangent,De=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,un=!!X.morphAttributes.color,Si=k.toneMapped?h.toneMapping:zi,Er=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,at=Er!==void 0?Er.length:0,Re=Ee.get(k),ec=f.state.lights;if(L===!0&&(G===!0||C!==M)){const cn=C===M&&k.id===S;w.setState(k,C,cn)}let yt=!1;k.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ec.state.version||Re.outputEncoding!==Ce||q.isInstancedMesh&&Re.instancing===!1||!q.isInstancedMesh&&Re.instancing===!0||q.isSkinnedMesh&&Re.skinning===!1||!q.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==be||k.fog===!0&&Re.fog!==me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==w.numPlanes||Re.numIntersection!==w.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==Le||Re.morphTargets!==De||Re.morphNormals!==ot||Re.morphColors!==un||Re.toneMapping!==Si||ye.isWebGL2===!0&&Re.morphTargetsCount!==at)&&(yt=!0):(yt=!0,Re.__version=k.version);let Cr=Re.currentProgram;yt===!0&&(Cr=Pn(k,F,q));let Jh=!1,To=!1,tc=!1;const Wt=Cr.getUniforms(),br=Re.uniforms;if(ce.useProgram(Cr.program)&&(Jh=!0,To=!0,tc=!0),k.id!==S&&(S=k.id,To=!0),Jh||M!==C){if(Wt.setValue(W,"projectionMatrix",C.projectionMatrix),ye.logarithmicDepthBuffer&&Wt.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,To=!0,tc=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const cn=Wt.map.cameraPosition;cn!==void 0&&cn.setValue(W,J.setFromMatrixPosition(C.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Wt.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||q.isSkinnedMesh)&&Wt.setValue(W,"viewMatrix",C.matrixWorldInverse)}if(q.isSkinnedMesh){Wt.setOptional(W,q,"bindMatrix"),Wt.setOptional(W,q,"bindMatrixInverse");const cn=q.skeleton;cn&&(ye.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Wt.setValue(W,"boneTexture",cn.boneTexture,xe),Wt.setValue(W,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const nc=X.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0&&ye.isWebGL2===!0)&&re.update(q,X,k,Cr),(To||Re.receiveShadow!==q.receiveShadow)&&(Re.receiveShadow=q.receiveShadow,Wt.setValue(W,"receiveShadow",q.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(br.envMap.value=be,br.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),To&&(Wt.setValue(W,"toneMappingExposure",h.toneMappingExposure),Re.needsLights&&yx(br,tc),me&&k.fog===!0&&xi.refreshFogUniforms(br,me),xi.refreshMaterialUniforms(br,k,z,P,V),Zl.upload(W,Re.uniformsList,br,xe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Zl.upload(W,Re.uniformsList,br,xe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Wt.setValue(W,"center",q.center),Wt.setValue(W,"modelViewMatrix",q.modelViewMatrix),Wt.setValue(W,"normalMatrix",q.normalMatrix),Wt.setValue(W,"modelMatrix",q.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const cn=k.uniformsGroups;for(let ic=0,Mx=cn.length;ic<Mx;ic++)if(ye.isWebGL2){const ep=cn[ic];ge.update(ep,Cr),ge.bind(ep,Cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cr}function yx(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function Sx(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(C,F,X){Ee.get(C.texture).__webglTexture=F,Ee.get(C.depthTexture).__webglTexture=X;const k=Ee.get(C);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=X===void 0,k.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,F){const X=Ee.get(C);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,X=0){v=C,g=F,_=X;let k=!0,q=null,me=!1,Me=!1;if(C){const be=Ee.get(C);be.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),k=!1):be.__webglFramebuffer===void 0?xe.setupRenderTarget(C):be.__hasExternalTextures&&xe.rebindTextures(C,Ee.get(C.texture).__webglTexture,Ee.get(C.depthTexture).__webglTexture);const Ne=C.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);const Le=Ee.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(q=Le[F],me=!0):ye.isWebGL2&&C.samples>0&&xe.useMultisampledRTT(C)===!1?q=Ee.get(C).__webglMultisampledFramebuffer:q=Le,T.copy(C.viewport),b.copy(C.scissor),y=C.scissorTest}else T.copy(R).multiplyScalar(z).floor(),b.copy(B).multiplyScalar(z).floor(),y=$;if(ce.bindFramebuffer(36160,q)&&ye.drawBuffers&&k&&ce.drawBuffers(C,q),ce.viewport(T),ce.scissor(b),ce.setScissorTest(y),me){const be=Ee.get(C.texture);W.framebufferTexture2D(36160,36064,34069+F,be.__webglTexture,X)}else if(Me){const be=Ee.get(C.texture),Ne=F||0;W.framebufferTextureLayer(36160,36064,be.__webglTexture,X||0,Ne)}S=-1},this.readRenderTargetPixels=function(C,F,X,k,q,me,Me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ee.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){ce.bindFramebuffer(36160,Ce);try{const be=C.texture,Ne=be.format,Le=be.type;if(Ne!==ei&&ae.convert(Ne)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===Ia&&(fe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Le!==ss&&ae.convert(Le)!==W.getParameter(35738)&&!(Le===Hr&&(ye.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-k&&X>=0&&X<=C.height-q&&W.readPixels(F,X,k,q,ae.convert(Ne),ae.convert(Le),me)}finally{const be=v!==null?Ee.get(v).__webglFramebuffer:null;ce.bindFramebuffer(36160,be)}}},this.copyFramebufferToTexture=function(C,F,X=0){const k=Math.pow(2,-X),q=Math.floor(F.image.width*k),me=Math.floor(F.image.height*k);xe.setTexture2D(F,0),W.copyTexSubImage2D(3553,X,0,0,C.x,C.y,q,me),ce.unbindTexture()},this.copyTextureToTexture=function(C,F,X,k=0){const q=F.image.width,me=F.image.height,Me=ae.convert(X.format),Ce=ae.convert(X.type);xe.setTexture2D(X,0),W.pixelStorei(37440,X.flipY),W.pixelStorei(37441,X.premultiplyAlpha),W.pixelStorei(3317,X.unpackAlignment),F.isDataTexture?W.texSubImage2D(3553,k,C.x,C.y,q,me,Me,Ce,F.image.data):F.isCompressedTexture?W.compressedTexSubImage2D(3553,k,C.x,C.y,F.mipmaps[0].width,F.mipmaps[0].height,Me,F.mipmaps[0].data):W.texSubImage2D(3553,k,C.x,C.y,Me,Ce,F.image),k===0&&X.generateMipmaps&&W.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(C,F,X,k,q=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=C.max.x-C.min.x+1,Me=C.max.y-C.min.y+1,Ce=C.max.z-C.min.z+1,be=ae.convert(k.format),Ne=ae.convert(k.type);let Le;if(k.isData3DTexture)xe.setTexture3D(k,0),Le=32879;else if(k.isDataArrayTexture)xe.setTexture2DArray(k,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,k.flipY),W.pixelStorei(37441,k.premultiplyAlpha),W.pixelStorei(3317,k.unpackAlignment);const De=W.getParameter(3314),ot=W.getParameter(32878),un=W.getParameter(3316),Si=W.getParameter(3315),Er=W.getParameter(32877),at=X.isCompressedTexture?X.mipmaps[0]:X.image;W.pixelStorei(3314,at.width),W.pixelStorei(32878,at.height),W.pixelStorei(3316,C.min.x),W.pixelStorei(3315,C.min.y),W.pixelStorei(32877,C.min.z),X.isDataTexture||X.isData3DTexture?W.texSubImage3D(Le,q,F.x,F.y,F.z,me,Me,Ce,be,Ne,at.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Le,q,F.x,F.y,F.z,me,Me,Ce,be,at.data)):W.texSubImage3D(Le,q,F.x,F.y,F.z,me,Me,Ce,be,Ne,at),W.pixelStorei(3314,De),W.pixelStorei(32878,ot),W.pixelStorei(3316,un),W.pixelStorei(3315,Si),W.pixelStorei(32877,Er),q===0&&k.generateMipmaps&&W.generateMipmap(Le),ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?xe.setTextureCube(C,0):C.isData3DTexture?xe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?xe.setTexture2DArray(C,0):xe.setTexture2D(C,0),ce.unbindTexture()},this.resetState=function(){g=0,_=0,v=null,ce.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class uC extends gx{}uC.prototype.isWebGL1Renderer=!0;class cC extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class _x extends ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ng=new Tt,Fd=new nx,Rl=new Qu,Il=new U;class fC extends ln{constructor(e=new vi,t=new _x){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(r),Rl.radius+=s,e.ray.intersectsSphere(Rl)===!1)return;Ng.copy(r).invert(),Fd.copy(e.ray).applyMatrix4(Ng);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,h=m;x<h;x++){const p=u.getX(x);Il.fromBufferAttribute(d,p),zg(Il,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,h=m;x<h;x++)Il.fromBufferAttribute(d,x),zg(Il,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zg(n,e,t,i,r,s,o){const a=Fd.distanceSqToPoint(n);if(a<t){const l=new U;Fd.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Du extends vi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new U,f=new U,m=[],x=[],h=[],p=[];for(let g=0;g<=i;g++){const _=[],v=g/i;let S=0;g==0&&o==0?S=.5/t:g==i&&l==Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const T=M/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),h.push(f.x,f.y,f.z),p.push(T+S,1-v),_.push(u++)}c.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){const v=c[g][_+1],S=c[g][_],M=c[g+1][_],T=c[g+1][_+1];(g!==0||o>0)&&m.push(v,S,T),(g!==i-1||l<Math.PI)&&m.push(S,M,T)}this.setIndex(m),this.setAttribute("position",new ri(x,3)),this.setAttribute("normal",new ri(h,3)),this.setAttribute("uv",new ri(p,2))}static fromJSON(e){return new Du(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Fg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dC{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const m=u[d],x=u[d+1];if(m.global&&(m.lastIndex=0),m.test(c))return x}return null}}}const hC=new dC;class vx{constructor(e){this.manager=e!==void 0?e:hC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class pC extends vx{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Na("img");function l(){c(),Fg.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class mC extends vx{constructor(e){super(e)}load(e,t,i,r){const s=new an,o=new pC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);const gC="/worldThreeJs/assets/earth-6886fa78.jpg",_C="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",vC="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0.3,0.6,1.0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);}",xC="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",yC="varying vec3 vertexNormal;void main(){float intensity=pow(0.8-dot(vertexNormal,vec3(0,0,1.0)),2.0);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}";function SC(){const n=new cC,e=new zn(75,innerWidth/innerHeight,.1,1e3),t=new gx({antialias:!0,canvas:document.querySelector("canvas")});t.setSize(innerWidth,innerHeight),t.setPixelRatio(window.devicePixelRatio),document.body.appendChild(t.domElement);const i=new di(new Du(5,50,50),new Wi({vertexShader:_C,fragmentShader:vC,uniforms:{globeTexture:{value:new mC().load(gC)}}}));n.add(i),e.position.z=15;const r=new di(new Du(5,50,50),new Wi({vertexShader:xC,fragmentShader:yC,blending:Ad,side:Mn}));r.scale.set(1.1,1.1,1.1),n.add(r);const s=new $o;s.add(i),n.add(s);const o=new vi,a=new _x({color:16777215}),l=[];for(let f=0;f<1e4;f++){const m=(Math.random()-.5)*2e3,x=(Math.random()-.5)*2e3,h=-Math.random()*3e3;l.push(m,x,h)}o.setAttribute("position",new ri(l,3));const u=new fC(o,a);n.add(u),e.position.z=15;const c={x:void 0,y:void 0},d=()=>{requestAnimationFrame(d),t.render(n,e),i.rotation.y+=.003,Hv.to(s.rotation,{x:-c.y*.2,y:c.x*.5,duration:2})};d(),addEventListener("mousemove",f=>{c.x=f.clientX/innerWidth*2-1,c.y=f.clientY/innerHeight*2+1})}function MC(){return Ql(Yx,{children:Ql(SC,{})})}vf.createRoot(document.getElementById("root")).render(Ql(Vx.StrictMode,{children:Ql(MC,{})}));
