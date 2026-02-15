(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var xf={exports:{}},ha={},vf={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function nv(){if(qm)return vt;qm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(B,le,Ce){this.props=B,this.context=le,this.refs=E,this.updater=Ce||y}S.prototype.isReactComponent={},S.prototype.setState=function(B,le){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,le,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function _(){}_.prototype=S.prototype;function A(B,le,Ce){this.props=B,this.context=le,this.refs=E,this.updater=Ce||y}var w=A.prototype=new _;w.constructor=A,M(w,S.prototype),w.isPureReactComponent=!0;var C=Array.isArray,L=Object.prototype.hasOwnProperty,I={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function U(B,le,Ce){var Ye,Ze={},ne=null,de=null;if(le!=null)for(Ye in le.ref!==void 0&&(de=le.ref),le.key!==void 0&&(ne=""+le.key),le)L.call(le,Ye)&&!D.hasOwnProperty(Ye)&&(Ze[Ye]=le[Ye]);var Se=arguments.length-2;if(Se===1)Ze.children=Ce;else if(1<Se){for(var ke=Array(Se),Ie=0;Ie<Se;Ie++)ke[Ie]=arguments[Ie+2];Ze.children=ke}if(B&&B.defaultProps)for(Ye in Se=B.defaultProps,Se)Ze[Ye]===void 0&&(Ze[Ye]=Se[Ye]);return{$$typeof:o,type:B,key:ne,ref:de,props:Ze,_owner:I.current}}function b(B,le){return{$$typeof:o,type:B.type,key:le,ref:B.ref,props:B.props,_owner:B._owner}}function P(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function O(B){var le={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ce){return le[Ce]})}var K=/\/+/g;function Y(B,le){return typeof B=="object"&&B!==null&&B.key!=null?O(""+B.key):le.toString(36)}function re(B,le,Ce,Ye,Ze){var ne=typeof B;(ne==="undefined"||ne==="boolean")&&(B=null);var de=!1;if(B===null)de=!0;else switch(ne){case"string":case"number":de=!0;break;case"object":switch(B.$$typeof){case o:case e:de=!0}}if(de)return de=B,Ze=Ze(de),B=Ye===""?"."+Y(de,0):Ye,C(Ze)?(Ce="",B!=null&&(Ce=B.replace(K,"$&/")+"/"),re(Ze,le,Ce,"",function(Ie){return Ie})):Ze!=null&&(P(Ze)&&(Ze=b(Ze,Ce+(!Ze.key||de&&de.key===Ze.key?"":(""+Ze.key).replace(K,"$&/")+"/")+B)),le.push(Ze)),1;if(de=0,Ye=Ye===""?".":Ye+":",C(B))for(var Se=0;Se<B.length;Se++){ne=B[Se];var ke=Ye+Y(ne,Se);de+=re(ne,le,Ce,ke,Ze)}else if(ke=x(B),typeof ke=="function")for(B=ke.call(B),Se=0;!(ne=B.next()).done;)ne=ne.value,ke=Ye+Y(ne,Se++),de+=re(ne,le,Ce,ke,Ze);else if(ne==="object")throw le=String(B),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return de}function te(B,le,Ce){if(B==null)return B;var Ye=[],Ze=0;return re(B,Ye,"","",function(ne){return le.call(Ce,ne,Ze++)}),Ye}function se(B){if(B._status===-1){var le=B._result;le=le(),le.then(function(Ce){(B._status===0||B._status===-1)&&(B._status=1,B._result=Ce)},function(Ce){(B._status===0||B._status===-1)&&(B._status=2,B._result=Ce)}),B._status===-1&&(B._status=0,B._result=le)}if(B._status===1)return B._result.default;throw B._result}var $={current:null},X={transition:null},fe={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:X,ReactCurrentOwner:I};function oe(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:te,forEach:function(B,le,Ce){te(B,function(){le.apply(this,arguments)},Ce)},count:function(B){var le=0;return te(B,function(){le++}),le},toArray:function(B){return te(B,function(le){return le})||[]},only:function(B){if(!P(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},vt.Component=S,vt.Fragment=t,vt.Profiler=s,vt.PureComponent=A,vt.StrictMode=i,vt.Suspense=d,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,vt.act=oe,vt.cloneElement=function(B,le,Ce){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Ye=M({},B.props),Ze=B.key,ne=B.ref,de=B._owner;if(le!=null){if(le.ref!==void 0&&(ne=le.ref,de=I.current),le.key!==void 0&&(Ze=""+le.key),B.type&&B.type.defaultProps)var Se=B.type.defaultProps;for(ke in le)L.call(le,ke)&&!D.hasOwnProperty(ke)&&(Ye[ke]=le[ke]===void 0&&Se!==void 0?Se[ke]:le[ke])}var ke=arguments.length-2;if(ke===1)Ye.children=Ce;else if(1<ke){Se=Array(ke);for(var Ie=0;Ie<ke;Ie++)Se[Ie]=arguments[Ie+2];Ye.children=Se}return{$$typeof:o,type:B.type,key:Ze,ref:ne,props:Ye,_owner:de}},vt.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:a,_context:B},B.Consumer=B},vt.createElement=U,vt.createFactory=function(B){var le=U.bind(null,B);return le.type=B,le},vt.createRef=function(){return{current:null}},vt.forwardRef=function(B){return{$$typeof:u,render:B}},vt.isValidElement=P,vt.lazy=function(B){return{$$typeof:p,_payload:{_status:-1,_result:B},_init:se}},vt.memo=function(B,le){return{$$typeof:h,type:B,compare:le===void 0?null:le}},vt.startTransition=function(B){var le=X.transition;X.transition={};try{B()}finally{X.transition=le}},vt.unstable_act=oe,vt.useCallback=function(B,le){return $.current.useCallback(B,le)},vt.useContext=function(B){return $.current.useContext(B)},vt.useDebugValue=function(){},vt.useDeferredValue=function(B){return $.current.useDeferredValue(B)},vt.useEffect=function(B,le){return $.current.useEffect(B,le)},vt.useId=function(){return $.current.useId()},vt.useImperativeHandle=function(B,le,Ce){return $.current.useImperativeHandle(B,le,Ce)},vt.useInsertionEffect=function(B,le){return $.current.useInsertionEffect(B,le)},vt.useLayoutEffect=function(B,le){return $.current.useLayoutEffect(B,le)},vt.useMemo=function(B,le){return $.current.useMemo(B,le)},vt.useReducer=function(B,le,Ce){return $.current.useReducer(B,le,Ce)},vt.useRef=function(B){return $.current.useRef(B)},vt.useState=function(B){return $.current.useState(B)},vt.useSyncExternalStore=function(B,le,Ce){return $.current.useSyncExternalStore(B,le,Ce)},vt.useTransition=function(){return $.current.useTransition()},vt.version="18.3.1",vt}var Km;function ah(){return Km||(Km=1,vf.exports=nv()),vf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function iv(){if($m)return ha;$m=1;var o=ah(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,g={},x=null,y=null;h!==void 0&&(x=""+h),d.key!==void 0&&(x=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(g[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:u,key:x,ref:y,props:g,_owner:s.current}}return ha.Fragment=t,ha.jsx=c,ha.jsxs=c,ha}var Zm;function rv(){return Zm||(Zm=1,xf.exports=iv()),xf.exports}var ce=rv(),$e=ah(),Yl={},yf={exports:{}},jn={},Sf={exports:{}},Mf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function sv(){return Jm||(Jm=1,(function(o){function e(X,fe){var oe=X.length;X.push(fe);e:for(;0<oe;){var B=oe-1>>>1,le=X[B];if(0<s(le,fe))X[B]=fe,X[oe]=le,oe=B;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var fe=X[0],oe=X.pop();if(oe!==fe){X[0]=oe;e:for(var B=0,le=X.length,Ce=le>>>1;B<Ce;){var Ye=2*(B+1)-1,Ze=X[Ye],ne=Ye+1,de=X[ne];if(0>s(Ze,oe))ne<le&&0>s(de,Ze)?(X[B]=de,X[ne]=oe,B=ne):(X[B]=Ze,X[Ye]=oe,B=Ye);else if(ne<le&&0>s(de,oe))X[B]=de,X[ne]=oe,B=ne;else break e}}return fe}function s(X,fe){var oe=X.sortIndex-fe.sortIndex;return oe!==0?oe:X.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,g=null,x=3,y=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(X){for(var fe=t(h);fe!==null;){if(fe.callback===null)i(h);else if(fe.startTime<=X)i(h),fe.sortIndex=fe.expirationTime,e(d,fe);else break;fe=t(h)}}function C(X){if(E=!1,w(X),!M)if(t(d)!==null)M=!0,se(L);else{var fe=t(h);fe!==null&&$(C,fe.startTime-X)}}function L(X,fe){M=!1,E&&(E=!1,_(U),U=-1),y=!0;var oe=x;try{for(w(fe),g=t(d);g!==null&&(!(g.expirationTime>fe)||X&&!O());){var B=g.callback;if(typeof B=="function"){g.callback=null,x=g.priorityLevel;var le=B(g.expirationTime<=fe);fe=o.unstable_now(),typeof le=="function"?g.callback=le:g===t(d)&&i(d),w(fe)}else i(d);g=t(d)}if(g!==null)var Ce=!0;else{var Ye=t(h);Ye!==null&&$(C,Ye.startTime-fe),Ce=!1}return Ce}finally{g=null,x=oe,y=!1}}var I=!1,D=null,U=-1,b=5,P=-1;function O(){return!(o.unstable_now()-P<b)}function K(){if(D!==null){var X=o.unstable_now();P=X;var fe=!0;try{fe=D(!0,X)}finally{fe?Y():(I=!1,D=null)}}else I=!1}var Y;if(typeof A=="function")Y=function(){A(K)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,te=re.port2;re.port1.onmessage=K,Y=function(){te.postMessage(null)}}else Y=function(){S(K,0)};function se(X){D=X,I||(I=!0,Y())}function $(X,fe){U=S(function(){X(o.unstable_now())},fe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,se(L))},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(X){switch(x){case 1:case 2:case 3:var fe=3;break;default:fe=x}var oe=x;x=fe;try{return X()}finally{x=oe}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(X,fe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var oe=x;x=X;try{return fe()}finally{x=oe}},o.unstable_scheduleCallback=function(X,fe,oe){var B=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?B+oe:B):oe=B,X){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=oe+le,X={id:p++,callback:fe,priorityLevel:X,startTime:oe,expirationTime:le,sortIndex:-1},oe>B?(X.sortIndex=oe,e(h,X),t(d)===null&&X===t(h)&&(E?(_(U),U=-1):E=!0,$(C,oe-B))):(X.sortIndex=le,e(d,X),M||y||(M=!0,se(L))),X},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(X){var fe=x;return function(){var oe=x;x=fe;try{return X.apply(this,arguments)}finally{x=oe}}}})(Mf)),Mf}var Qm;function ov(){return Qm||(Qm=1,Sf.exports=sv()),Sf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function av(){if(eg)return jn;eg=1;var o=ah(),e=ov();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function x(n){return d.call(g,n)?!0:d.call(p,n)?!1:h.test(n)?g[n]=!0:(p[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,f,m,v,R){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=R}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_,A);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_,A);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_,A);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function w(n,r,l,f){var m=S.hasOwnProperty(r)?S[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,m,f)&&(l=null),f||m===null?x(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),I=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),X=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,B;function le(n){if(B===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);B=r&&r[1]||""}return`
`+B+n}var Ce=!1;function Ye(n,r){if(!n||Ce)return"";Ce=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ie){var f=ie}Reflect.construct(n,[],r)}else{try{r.call()}catch(ie){f=ie}n.call(r.prototype)}else{try{throw Error()}catch(ie){f=ie}n()}}catch(ie){if(ie&&f&&typeof ie.stack=="string"){for(var m=ie.stack.split(`
`),v=f.stack.split(`
`),R=m.length-1,k=v.length-1;1<=R&&0<=k&&m[R]!==v[k];)k--;for(;1<=R&&0<=k;R--,k--)if(m[R]!==v[k]){if(R!==1||k!==1)do if(R--,k--,0>k||m[R]!==v[k]){var z=`
`+m[R].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=R&&0<=k);break}}}finally{Ce=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?le(n):""}function Ze(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=Ye(n.type,!1),n;case 11:return n=Ye(n.type.render,!1),n;case 1:return n=Ye(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case I:return"Portal";case b:return"Profiler";case U:return"StrictMode";case Y:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case K:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case te:return r=n.displayName||null,r!==null?r:ne(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return ne(n(r))}catch{}}return null}function de(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(r);case 8:return r===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ie(n){var r=ke(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(R){f=""+R,v.call(this,R)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(R){f=""+R},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function yt(n){n._valueTracker||(n._valueTracker=Ie(n))}function en(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=ke(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function xt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wt(n,r){var l=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Dt(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Se(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function dt(n,r){r=r.checked,r!=null&&w(n,"checked",r,!1)}function Xt(n,r){dt(n,r);var l=Se(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Yt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Yt(n,r.type,Se(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function V(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Yt(n,r,l){(r!=="number"||xt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Mt=Array.isArray;function bt(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Se(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function We(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function F(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Mt(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Se(l)}}function T(n,r){var l=Se(r.value),f=Se(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function W(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?he(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,qe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Te(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(n){rt.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Be[r]=Be[n]})});function ye(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Be.hasOwnProperty(n)&&Be[n]?(""+r).trim():r+"px"}function Re(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=ye(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var He=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(n,r){if(r){if(He[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function be(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,Me=null,Ne=null;function xe(n){if(n=Jo(n)){if(typeof Le!="function")throw Error(t(280));var r=n.stateNode;r&&(r=ll(r),Le(n.stateNode,n.type,r))}}function pe(n){Me?Ne?Ne.push(n):Ne=[n]:Me=n}function Ae(){if(Me){var n=Me,r=Ne;if(Ne=Me=null,xe(n),r)for(n=0;n<r.length;n++)xe(r[n])}}function ot(n,r){return n(r)}function Ut(){}var At=!1;function qn(n,r,l){if(At)return n(r,l);At=!0;try{return ot(n,r,l)}finally{At=!1,(Me!==null||Ne!==null)&&(Ut(),Ae())}}function Ln(n,r){var l=n.stateNode;if(l===null)return null;var f=ll(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Lo=!1;if(u)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Lo=!1}function No(n,r,l,f,m,v,R,k,z){var ie=Array.prototype.slice.call(arguments,3);try{r.apply(l,ie)}catch(_e){this.onError(_e)}}var Kr=!1,$r=null,Zr=!1,mi=null,Do={onError:function(n){Kr=!0,$r=n}};function Va(n,r,l,f,m,v,R,k,z){Kr=!1,$r=null,No.apply(Do,arguments)}function Ha(n,r,l,f,m,v,R,k,z){if(Va.apply(this,arguments),Kr){if(Kr){var ie=$r;Kr=!1,$r=null}else throw Error(t(198));Zr||(Zr=!0,mi=ie)}}function ii(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Io(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Jr(n){if(ii(n)!==n)throw Error(t(188))}function Ga(n){var r=n.alternate;if(!r){if(r=ii(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var v=m.alternate;if(v===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===v.child){for(v=m.child;v;){if(v===l)return Jr(m),n;if(v===f)return Jr(m),r;v=v.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=v;else{for(var R=!1,k=m.child;k;){if(k===l){R=!0,l=m,f=v;break}if(k===f){R=!0,f=m,l=v;break}k=k.sibling}if(!R){for(k=v.child;k;){if(k===l){R=!0,l=v,f=m;break}if(k===f){R=!0,f=v,l=m;break}k=k.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Uo(n){return n=Ga(n),n!==null?Wa(n):null}function Wa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Wa(n);if(r!==null)return r;n=n.sibling}return null}var ja=e.unstable_scheduleCallback,Xa=e.unstable_cancelCallback,zc=e.unstable_shouldYield,Vc=e.unstable_requestPaint,Kt=e.unstable_now,N=e.unstable_getCurrentPriorityLevel,j=e.unstable_ImmediatePriority,ae=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,J=e.unstable_LowPriority,Pe=e.unstable_IdlePriority,Ue=null,we=null;function Ve(n){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Ue,n,void 0,(n.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:pt,it=Math.log,Qe=Math.LN2;function pt(n){return n>>>=0,n===0?32:31-(it(n)/Qe|0)|0}var Rt=64,Vt=4194304;function Bt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Pt(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,v=n.pingedLanes,R=l&268435455;if(R!==0){var k=R&~m;k!==0?f=Bt(k):(v&=R,v!==0&&(f=Bt(v)))}else R=l&~m,R!==0?f=Bt(R):v!==0&&(f=Bt(v));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,v=r&-r,m>=v||m===16&&(v&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-Oe(r),m=1<<l,f|=n[l],r&=~m;return f}function et(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nt(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,v=n.pendingLanes;0<v;){var R=31-Oe(v),k=1<<R,z=m[R];z===-1?((k&l)===0||(k&f)!==0)&&(m[R]=et(k,r)):z<=r&&(n.expiredLanes|=k),v&=~k}}function Et(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function En(){var n=Rt;return Rt<<=1,(Rt&4194240)===0&&(Rt=64),n}function Pi(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function sn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Oe(r),n[r]=l}function Qr(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-Oe(l),v=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~v}}function It(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-Oe(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var ut=0;function Nn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var hn,pn,bs,Li,Ph,Hc=!1,Ya=[],yr=null,Sr=null,Mr=null,Fo=new Map,Oo=new Map,Er=[],T_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(n,r){switch(n){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Fo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(r.pointerId)}}function ko(n,r,l,f,m,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:v,targetContainers:[m]},r!==null&&(r=Jo(r),r!==null&&pn(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function w_(n,r,l,f,m){switch(r){case"focusin":return yr=ko(yr,n,r,l,f,m),!0;case"dragenter":return Sr=ko(Sr,n,r,l,f,m),!0;case"mouseover":return Mr=ko(Mr,n,r,l,f,m),!0;case"pointerover":var v=m.pointerId;return Fo.set(v,ko(Fo.get(v)||null,n,r,l,f,m)),!0;case"gotpointercapture":return v=m.pointerId,Oo.set(v,ko(Oo.get(v)||null,n,r,l,f,m)),!0}return!1}function Nh(n){var r=es(n.target);if(r!==null){var l=ii(r);if(l!==null){if(r=l.tag,r===13){if(r=Io(l),r!==null){n.blockedOn=r,Ph(n.priority,function(){bs(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Wc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);ft=f,l.target.dispatchEvent(f),ft=null}else return r=Jo(l),r!==null&&pn(r),n.blockedOn=l,!1;r.shift()}return!0}function Dh(n,r,l){qa(n)&&l.delete(r)}function b_(){Hc=!1,yr!==null&&qa(yr)&&(yr=null),Sr!==null&&qa(Sr)&&(Sr=null),Mr!==null&&qa(Mr)&&(Mr=null),Fo.forEach(Dh),Oo.forEach(Dh)}function Bo(n,r){n.blockedOn===r&&(n.blockedOn=null,Hc||(Hc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,b_)))}function zo(n){function r(m){return Bo(m,n)}if(0<Ya.length){Bo(Ya[0],n);for(var l=1;l<Ya.length;l++){var f=Ya[l];f.blockedOn===n&&(f.blockedOn=null)}}for(yr!==null&&Bo(yr,n),Sr!==null&&Bo(Sr,n),Mr!==null&&Bo(Mr,n),Fo.forEach(r),Oo.forEach(r),l=0;l<Er.length;l++)f=Er[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<Er.length&&(l=Er[0],l.blockedOn===null);)Nh(l),l.blockedOn===null&&Er.shift()}var As=C.ReactCurrentBatchConfig,Ka=!0;function A_(n,r,l,f){var m=ut,v=As.transition;As.transition=null;try{ut=1,Gc(n,r,l,f)}finally{ut=m,As.transition=v}}function R_(n,r,l,f){var m=ut,v=As.transition;As.transition=null;try{ut=4,Gc(n,r,l,f)}finally{ut=m,As.transition=v}}function Gc(n,r,l,f){if(Ka){var m=Wc(n,r,l,f);if(m===null)au(n,r,f,$a,l),Lh(n,f);else if(w_(m,n,r,l,f))f.stopPropagation();else if(Lh(n,f),r&4&&-1<T_.indexOf(n)){for(;m!==null;){var v=Jo(m);if(v!==null&&hn(v),v=Wc(n,r,l,f),v===null&&au(n,r,f,$a,l),v===m)break;m=v}m!==null&&f.stopPropagation()}else au(n,r,f,null,l)}}var $a=null;function Wc(n,r,l,f){if($a=null,n=H(f),n=es(n),n!==null)if(r=ii(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Io(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return $a=n,null}function Ih(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N()){case j:return 1;case ae:return 4;case ee:case J:return 16;case Pe:return 536870912;default:return 16}default:return 16}}var Tr=null,jc=null,Za=null;function Uh(){if(Za)return Za;var n,r=jc,l=r.length,f,m="value"in Tr?Tr.value:Tr.textContent,v=m.length;for(n=0;n<l&&r[n]===m[n];n++);var R=l-n;for(f=1;f<=R&&r[l-f]===m[v-f];f++);return Za=m.slice(n,1<f?1-f:void 0)}function Ja(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Qa(){return!0}function Fh(){return!1}function Kn(n){function r(l,f,m,v,R){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=v,this.target=R,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(l=n[k],this[k]=l?l(v):v[k]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Qa:Fh,this.isPropagationStopped=Fh,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),r}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xc=Kn(Rs),Vo=oe({},Rs,{view:0,detail:0}),C_=Kn(Vo),Yc,qc,Ho,el=oe({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ho&&(Ho&&n.type==="mousemove"?(Yc=n.screenX-Ho.screenX,qc=n.screenY-Ho.screenY):qc=Yc=0,Ho=n),Yc)},movementY:function(n){return"movementY"in n?n.movementY:qc}}),Oh=Kn(el),P_=oe({},el,{dataTransfer:0}),L_=Kn(P_),N_=oe({},Vo,{relatedTarget:0}),Kc=Kn(N_),D_=oe({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),I_=Kn(D_),U_=oe({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),F_=Kn(U_),O_=oe({},Rs,{data:0}),kh=Kn(O_),k_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=z_[n])?!!r[n]:!1}function $c(){return V_}var H_=oe({},Vo,{key:function(n){if(n.key){var r=k_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ja(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?B_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(n){return n.type==="keypress"?Ja(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ja(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),G_=Kn(H_),W_=oe({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bh=Kn(W_),j_=oe({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),X_=Kn(j_),Y_=oe({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),q_=Kn(Y_),K_=oe({},el,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$_=Kn(K_),Z_=[9,13,27,32],Zc=u&&"CompositionEvent"in window,Go=null;u&&"documentMode"in document&&(Go=document.documentMode);var J_=u&&"TextEvent"in window&&!Go,zh=u&&(!Zc||Go&&8<Go&&11>=Go),Vh=" ",Hh=!1;function Gh(n,r){switch(n){case"keyup":return Z_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function Q_(n,r){switch(n){case"compositionend":return Wh(r);case"keypress":return r.which!==32?null:(Hh=!0,Vh);case"textInput":return n=r.data,n===Vh&&Hh?null:n;default:return null}}function ex(n,r){if(Cs)return n==="compositionend"||!Zc&&Gh(n,r)?(n=Uh(),Za=jc=Tr=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return zh&&r.locale!=="ko"?null:r.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!tx[n.type]:r==="textarea"}function Xh(n,r,l,f){pe(f),r=sl(r,"onChange"),0<r.length&&(l=new Xc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var Wo=null,jo=null;function nx(n){up(n,0)}function tl(n){var r=Is(n);if(en(r))return n}function ix(n,r){if(n==="change")return r}var Yh=!1;if(u){var Jc;if(u){var Qc="oninput"in document;if(!Qc){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),Qc=typeof qh.oninput=="function"}Jc=Qc}else Jc=!1;Yh=Jc&&(!document.documentMode||9<document.documentMode)}function Kh(){Wo&&(Wo.detachEvent("onpropertychange",$h),jo=Wo=null)}function $h(n){if(n.propertyName==="value"&&tl(jo)){var r=[];Xh(r,jo,n,H(n)),qn(nx,r)}}function rx(n,r,l){n==="focusin"?(Kh(),Wo=r,jo=l,Wo.attachEvent("onpropertychange",$h)):n==="focusout"&&Kh()}function sx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return tl(jo)}function ox(n,r){if(n==="click")return tl(r)}function ax(n,r){if(n==="input"||n==="change")return tl(r)}function lx(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var gi=typeof Object.is=="function"?Object.is:lx;function Xo(n,r){if(gi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(r,m)||!gi(n[m],r[m]))return!1}return!0}function Zh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jh(n,r){var l=Zh(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Zh(l)}}function Qh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Qh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ep(){for(var n=window,r=xt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=xt(n.document)}return r}function eu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function cx(n){var r=ep(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Qh(l.ownerDocument.documentElement,l)){if(f!==null&&eu(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,v=Math.min(f.start,m);f=f.end===void 0?v:Math.min(f.end,m),!n.extend&&v>f&&(m=f,f=v,v=m),m=Jh(l,v);var R=Jh(l,f);m&&R&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),v>f?(n.addRange(r),n.extend(R.node,R.offset)):(r.setEnd(R.node,R.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ux=u&&"documentMode"in document&&11>=document.documentMode,Ps=null,tu=null,Yo=null,nu=!1;function tp(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;nu||Ps==null||Ps!==xt(f)||(f=Ps,"selectionStart"in f&&eu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Yo&&Xo(Yo,f)||(Yo=f,f=sl(tu,"onSelect"),0<f.length&&(r=new Xc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=Ps)))}function nl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ls={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},iu={},np={};u&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function il(n){if(iu[n])return iu[n];if(!Ls[n])return n;var r=Ls[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in np)return iu[n]=r[l];return n}var ip=il("animationend"),rp=il("animationiteration"),sp=il("animationstart"),op=il("transitionend"),ap=new Map,lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(n,r){ap.set(n,r),a(r,[n])}for(var ru=0;ru<lp.length;ru++){var su=lp[ru],fx=su.toLowerCase(),dx=su[0].toUpperCase()+su.slice(1);wr(fx,"on"+dx)}wr(ip,"onAnimationEnd"),wr(rp,"onAnimationIteration"),wr(sp,"onAnimationStart"),wr("dblclick","onDoubleClick"),wr("focusin","onFocus"),wr("focusout","onBlur"),wr(op,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function cp(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,Ha(f,r,void 0,n),n.currentTarget=null}function up(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var v=void 0;if(r)for(var R=f.length-1;0<=R;R--){var k=f[R],z=k.instance,ie=k.currentTarget;if(k=k.listener,z!==v&&m.isPropagationStopped())break e;cp(m,k,ie),v=z}else for(R=0;R<f.length;R++){if(k=f[R],z=k.instance,ie=k.currentTarget,k=k.listener,z!==v&&m.isPropagationStopped())break e;cp(m,k,ie),v=z}}}if(Zr)throw n=mi,Zr=!1,mi=null,n}function Gt(n,r){var l=r[hu];l===void 0&&(l=r[hu]=new Set);var f=n+"__bubble";l.has(f)||(fp(r,n,2,!1),l.add(f))}function ou(n,r,l){var f=0;r&&(f|=4),fp(l,n,f,r)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Ko(n){if(!n[rl]){n[rl]=!0,i.forEach(function(l){l!=="selectionchange"&&(hx.has(l)||ou(l,!1,n),ou(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[rl]||(r[rl]=!0,ou("selectionchange",!1,r))}}function fp(n,r,l,f){switch(Ih(r)){case 1:var m=A_;break;case 4:m=R_;break;default:m=Gc}l=m.bind(null,r,l,n),m=void 0,!Lo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function au(n,r,l,f,m){var v=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var R=f.tag;if(R===3||R===4){var k=f.stateNode.containerInfo;if(k===m||k.nodeType===8&&k.parentNode===m)break;if(R===4)for(R=f.return;R!==null;){var z=R.tag;if((z===3||z===4)&&(z=R.stateNode.containerInfo,z===m||z.nodeType===8&&z.parentNode===m))return;R=R.return}for(;k!==null;){if(R=es(k),R===null)return;if(z=R.tag,z===5||z===6){f=v=R;continue e}k=k.parentNode}}f=f.return}qn(function(){var ie=v,_e=H(l),ve=[];e:{var ge=ap.get(n);if(ge!==void 0){var Fe=Xc,Ge=n;switch(n){case"keypress":if(Ja(l)===0)break e;case"keydown":case"keyup":Fe=G_;break;case"focusin":Ge="focus",Fe=Kc;break;case"focusout":Ge="blur",Fe=Kc;break;case"beforeblur":case"afterblur":Fe=Kc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=L_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=X_;break;case ip:case rp:case sp:Fe=I_;break;case op:Fe=q_;break;case"scroll":Fe=C_;break;case"wheel":Fe=$_;break;case"copy":case"cut":case"paste":Fe=F_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Bh}var Xe=(r&4)!==0,tn=!Xe&&n==="scroll",Z=Xe?ge!==null?ge+"Capture":null:ge;Xe=[];for(var G=ie,Q;G!==null;){Q=G;var Ee=Q.stateNode;if(Q.tag===5&&Ee!==null&&(Q=Ee,Z!==null&&(Ee=Ln(G,Z),Ee!=null&&Xe.push($o(G,Ee,Q)))),tn)break;G=G.return}0<Xe.length&&(ge=new Fe(ge,Ge,null,l,_e),ve.push({event:ge,listeners:Xe}))}}if((r&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",ge&&l!==ft&&(Ge=l.relatedTarget||l.fromElement)&&(es(Ge)||Ge[Ji]))break e;if((Fe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(Ge=l.relatedTarget||l.toElement,Fe=ie,Ge=Ge?es(Ge):null,Ge!==null&&(tn=ii(Ge),Ge!==tn||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Fe=null,Ge=ie),Fe!==Ge)){if(Xe=Oh,Ee="onMouseLeave",Z="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=Bh,Ee="onPointerLeave",Z="onPointerEnter",G="pointer"),tn=Fe==null?ge:Is(Fe),Q=Ge==null?ge:Is(Ge),ge=new Xe(Ee,G+"leave",Fe,l,_e),ge.target=tn,ge.relatedTarget=Q,Ee=null,es(_e)===ie&&(Xe=new Xe(Z,G+"enter",Ge,l,_e),Xe.target=Q,Xe.relatedTarget=tn,Ee=Xe),tn=Ee,Fe&&Ge)t:{for(Xe=Fe,Z=Ge,G=0,Q=Xe;Q;Q=Ns(Q))G++;for(Q=0,Ee=Z;Ee;Ee=Ns(Ee))Q++;for(;0<G-Q;)Xe=Ns(Xe),G--;for(;0<Q-G;)Z=Ns(Z),Q--;for(;G--;){if(Xe===Z||Z!==null&&Xe===Z.alternate)break t;Xe=Ns(Xe),Z=Ns(Z)}Xe=null}else Xe=null;Fe!==null&&dp(ve,ge,Fe,Xe,!1),Ge!==null&&tn!==null&&dp(ve,tn,Ge,Xe,!0)}}e:{if(ge=ie?Is(ie):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var Ke=ix;else if(jh(ge))if(Yh)Ke=ax;else{Ke=sx;var tt=rx}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=ox);if(Ke&&(Ke=Ke(n,ie))){Xh(ve,Ke,l,_e);break e}tt&&tt(n,ge,ie),n==="focusout"&&(tt=ge._wrapperState)&&tt.controlled&&ge.type==="number"&&Yt(ge,"number",ge.value)}switch(tt=ie?Is(ie):window,n){case"focusin":(jh(tt)||tt.contentEditable==="true")&&(Ps=tt,tu=ie,Yo=null);break;case"focusout":Yo=tu=Ps=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,tp(ve,l,_e);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":tp(ve,l,_e)}var nt;if(Zc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Cs?Gh(n,l)&&(at="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(zh&&l.locale!=="ko"&&(Cs||at!=="onCompositionStart"?at==="onCompositionEnd"&&Cs&&(nt=Uh()):(Tr=_e,jc="value"in Tr?Tr.value:Tr.textContent,Cs=!0)),tt=sl(ie,at),0<tt.length&&(at=new kh(at,n,null,l,_e),ve.push({event:at,listeners:tt}),nt?at.data=nt:(nt=Wh(l),nt!==null&&(at.data=nt)))),(nt=J_?Q_(n,l):ex(n,l))&&(ie=sl(ie,"onBeforeInput"),0<ie.length&&(_e=new kh("onBeforeInput","beforeinput",null,l,_e),ve.push({event:_e,listeners:ie}),_e.data=nt))}up(ve,r)})}function $o(n,r,l){return{instance:n,listener:r,currentTarget:l}}function sl(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,v=m.stateNode;m.tag===5&&v!==null&&(m=v,v=Ln(n,l),v!=null&&f.unshift($o(n,v,m)),v=Ln(n,r),v!=null&&f.push($o(n,v,m))),n=n.return}return f}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dp(n,r,l,f,m){for(var v=r._reactName,R=[];l!==null&&l!==f;){var k=l,z=k.alternate,ie=k.stateNode;if(z!==null&&z===f)break;k.tag===5&&ie!==null&&(k=ie,m?(z=Ln(l,v),z!=null&&R.unshift($o(l,z,k))):m||(z=Ln(l,v),z!=null&&R.push($o(l,z,k)))),l=l.return}R.length!==0&&n.push({event:r,listeners:R})}var px=/\r\n?/g,mx=/\u0000|\uFFFD/g;function hp(n){return(typeof n=="string"?n:""+n).replace(px,`
`).replace(mx,"")}function ol(n,r,l){if(r=hp(r),hp(n)!==r&&l)throw Error(t(425))}function al(){}var lu=null,cu=null;function uu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,gx=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(n){return pp.resolve(null).then(n).catch(xx)}:fu;function xx(n){setTimeout(function(){throw n})}function du(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),zo(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);zo(r)}function br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function mp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Ni="__reactFiber$"+Ds,Zo="__reactProps$"+Ds,Ji="__reactContainer$"+Ds,hu="__reactEvents$"+Ds,vx="__reactListeners$"+Ds,yx="__reactHandles$"+Ds;function es(n){var r=n[Ni];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Ji]||l[Ni]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=mp(n);n!==null;){if(l=n[Ni])return l;n=mp(n)}return r}n=l,l=n.parentNode}return null}function Jo(n){return n=n[Ni]||n[Ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ll(n){return n[Zo]||null}var pu=[],Us=-1;function Ar(n){return{current:n}}function Wt(n){0>Us||(n.current=pu[Us],pu[Us]=null,Us--)}function Ht(n,r){Us++,pu[Us]=n.current,n.current=r}var Rr={},Tn=Ar(Rr),zn=Ar(!1),ts=Rr;function Fs(n,r){var l=n.type.contextTypes;if(!l)return Rr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},v;for(v in l)m[v]=r[v];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function Vn(n){return n=n.childContextTypes,n!=null}function cl(){Wt(zn),Wt(Tn)}function gp(n,r,l){if(Tn.current!==Rr)throw Error(t(168));Ht(Tn,r),Ht(zn,l)}function _p(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,de(n)||"Unknown",m));return oe({},l,f)}function ul(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Rr,ts=Tn.current,Ht(Tn,n),Ht(zn,zn.current),!0}function xp(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=_p(n,r,ts),f.__reactInternalMemoizedMergedChildContext=n,Wt(zn),Wt(Tn),Ht(Tn,n)):Wt(zn),Ht(zn,l)}var Qi=null,fl=!1,mu=!1;function vp(n){Qi===null?Qi=[n]:Qi.push(n)}function Sx(n){fl=!0,vp(n)}function Cr(){if(!mu&&Qi!==null){mu=!0;var n=0,r=ut;try{var l=Qi;for(ut=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}Qi=null,fl=!1}catch(m){throw Qi!==null&&(Qi=Qi.slice(n+1)),ja(j,Cr),m}finally{ut=r,mu=!1}}return null}var Os=[],ks=0,dl=null,hl=0,ri=[],si=0,ns=null,er=1,tr="";function is(n,r){Os[ks++]=hl,Os[ks++]=dl,dl=n,hl=r}function yp(n,r,l){ri[si++]=er,ri[si++]=tr,ri[si++]=ns,ns=n;var f=er;n=tr;var m=32-Oe(f)-1;f&=~(1<<m),l+=1;var v=32-Oe(r)+m;if(30<v){var R=m-m%5;v=(f&(1<<R)-1).toString(32),f>>=R,m-=R,er=1<<32-Oe(r)+m|l<<m|f,tr=v+n}else er=1<<v|l<<m|f,tr=n}function gu(n){n.return!==null&&(is(n,1),yp(n,1,0))}function _u(n){for(;n===dl;)dl=Os[--ks],Os[ks]=null,hl=Os[--ks],Os[ks]=null;for(;n===ns;)ns=ri[--si],ri[si]=null,tr=ri[--si],ri[si]=null,er=ri[--si],ri[si]=null}var $n=null,Zn=null,qt=!1,_i=null;function Sp(n,r){var l=ci(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Mp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,$n=n,Zn=br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,$n=n,Zn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ns!==null?{id:er,overflow:tr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ci(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,$n=n,Zn=null,!0):!1;default:return!1}}function xu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function vu(n){if(qt){var r=Zn;if(r){var l=r;if(!Mp(n,r)){if(xu(n))throw Error(t(418));r=br(l.nextSibling);var f=$n;r&&Mp(n,r)?Sp(f,l):(n.flags=n.flags&-4097|2,qt=!1,$n=n)}}else{if(xu(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,$n=n}}}function Ep(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function pl(n){if(n!==$n)return!1;if(!qt)return Ep(n),qt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!uu(n.type,n.memoizedProps)),r&&(r=Zn)){if(xu(n))throw Tp(),Error(t(418));for(;r;)Sp(n,r),r=br(r.nextSibling)}if(Ep(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Zn=br(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Zn=null}}else Zn=$n?br(n.stateNode.nextSibling):null;return!0}function Tp(){for(var n=Zn;n;)n=br(n.nextSibling)}function Bs(){Zn=$n=null,qt=!1}function yu(n){_i===null?_i=[n]:_i.push(n)}var Mx=C.ReactCurrentBatchConfig;function Qo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(R){var k=m.refs;R===null?delete k[v]:k[v]=R},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function ml(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function wp(n){var r=n._init;return r(n._payload)}function bp(n){function r(Z,G){if(n){var Q=Z.deletions;Q===null?(Z.deletions=[G],Z.flags|=16):Q.push(G)}}function l(Z,G){if(!n)return null;for(;G!==null;)r(Z,G),G=G.sibling;return null}function f(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function m(Z,G){return Z=Or(Z,G),Z.index=0,Z.sibling=null,Z}function v(Z,G,Q){return Z.index=Q,n?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<G?(Z.flags|=2,G):Q):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function R(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function k(Z,G,Q,Ee){return G===null||G.tag!==6?(G=df(Q,Z.mode,Ee),G.return=Z,G):(G=m(G,Q),G.return=Z,G)}function z(Z,G,Q,Ee){var Ke=Q.type;return Ke===D?_e(Z,G,Q.props.children,Ee,Q.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===se&&wp(Ke)===G.type)?(Ee=m(G,Q.props),Ee.ref=Qo(Z,G,Q),Ee.return=Z,Ee):(Ee=Bl(Q.type,Q.key,Q.props,null,Z.mode,Ee),Ee.ref=Qo(Z,G,Q),Ee.return=Z,Ee)}function ie(Z,G,Q,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=hf(Q,Z.mode,Ee),G.return=Z,G):(G=m(G,Q.children||[]),G.return=Z,G)}function _e(Z,G,Q,Ee,Ke){return G===null||G.tag!==7?(G=fs(Q,Z.mode,Ee,Ke),G.return=Z,G):(G=m(G,Q),G.return=Z,G)}function ve(Z,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number")return G=df(""+G,Z.mode,Q),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case L:return Q=Bl(G.type,G.key,G.props,null,Z.mode,Q),Q.ref=Qo(Z,null,G),Q.return=Z,Q;case I:return G=hf(G,Z.mode,Q),G.return=Z,G;case se:var Ee=G._init;return ve(Z,Ee(G._payload),Q)}if(Mt(G)||fe(G))return G=fs(G,Z.mode,Q,null),G.return=Z,G;ml(Z,G)}return null}function ge(Z,G,Q,Ee){var Ke=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ke!==null?null:k(Z,G,""+Q,Ee);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case L:return Q.key===Ke?z(Z,G,Q,Ee):null;case I:return Q.key===Ke?ie(Z,G,Q,Ee):null;case se:return Ke=Q._init,ge(Z,G,Ke(Q._payload),Ee)}if(Mt(Q)||fe(Q))return Ke!==null?null:_e(Z,G,Q,Ee,null);ml(Z,Q)}return null}function Fe(Z,G,Q,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(Q)||null,k(G,Z,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case L:return Z=Z.get(Ee.key===null?Q:Ee.key)||null,z(G,Z,Ee,Ke);case I:return Z=Z.get(Ee.key===null?Q:Ee.key)||null,ie(G,Z,Ee,Ke);case se:var tt=Ee._init;return Fe(Z,G,Q,tt(Ee._payload),Ke)}if(Mt(Ee)||fe(Ee))return Z=Z.get(Q)||null,_e(G,Z,Ee,Ke,null);ml(G,Ee)}return null}function Ge(Z,G,Q,Ee){for(var Ke=null,tt=null,nt=G,at=G=0,_n=null;nt!==null&&at<Q.length;at++){nt.index>at?(_n=nt,nt=null):_n=nt.sibling;var Lt=ge(Z,nt,Q[at],Ee);if(Lt===null){nt===null&&(nt=_n);break}n&&nt&&Lt.alternate===null&&r(Z,nt),G=v(Lt,G,at),tt===null?Ke=Lt:tt.sibling=Lt,tt=Lt,nt=_n}if(at===Q.length)return l(Z,nt),qt&&is(Z,at),Ke;if(nt===null){for(;at<Q.length;at++)nt=ve(Z,Q[at],Ee),nt!==null&&(G=v(nt,G,at),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return qt&&is(Z,at),Ke}for(nt=f(Z,nt);at<Q.length;at++)_n=Fe(nt,Z,at,Q[at],Ee),_n!==null&&(n&&_n.alternate!==null&&nt.delete(_n.key===null?at:_n.key),G=v(_n,G,at),tt===null?Ke=_n:tt.sibling=_n,tt=_n);return n&&nt.forEach(function(kr){return r(Z,kr)}),qt&&is(Z,at),Ke}function Xe(Z,G,Q,Ee){var Ke=fe(Q);if(typeof Ke!="function")throw Error(t(150));if(Q=Ke.call(Q),Q==null)throw Error(t(151));for(var tt=Ke=null,nt=G,at=G=0,_n=null,Lt=Q.next();nt!==null&&!Lt.done;at++,Lt=Q.next()){nt.index>at?(_n=nt,nt=null):_n=nt.sibling;var kr=ge(Z,nt,Lt.value,Ee);if(kr===null){nt===null&&(nt=_n);break}n&&nt&&kr.alternate===null&&r(Z,nt),G=v(kr,G,at),tt===null?Ke=kr:tt.sibling=kr,tt=kr,nt=_n}if(Lt.done)return l(Z,nt),qt&&is(Z,at),Ke;if(nt===null){for(;!Lt.done;at++,Lt=Q.next())Lt=ve(Z,Lt.value,Ee),Lt!==null&&(G=v(Lt,G,at),tt===null?Ke=Lt:tt.sibling=Lt,tt=Lt);return qt&&is(Z,at),Ke}for(nt=f(Z,nt);!Lt.done;at++,Lt=Q.next())Lt=Fe(nt,Z,at,Lt.value,Ee),Lt!==null&&(n&&Lt.alternate!==null&&nt.delete(Lt.key===null?at:Lt.key),G=v(Lt,G,at),tt===null?Ke=Lt:tt.sibling=Lt,tt=Lt);return n&&nt.forEach(function(tv){return r(Z,tv)}),qt&&is(Z,at),Ke}function tn(Z,G,Q,Ee){if(typeof Q=="object"&&Q!==null&&Q.type===D&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case L:e:{for(var Ke=Q.key,tt=G;tt!==null;){if(tt.key===Ke){if(Ke=Q.type,Ke===D){if(tt.tag===7){l(Z,tt.sibling),G=m(tt,Q.props.children),G.return=Z,Z=G;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===se&&wp(Ke)===tt.type){l(Z,tt.sibling),G=m(tt,Q.props),G.ref=Qo(Z,tt,Q),G.return=Z,Z=G;break e}l(Z,tt);break}else r(Z,tt);tt=tt.sibling}Q.type===D?(G=fs(Q.props.children,Z.mode,Ee,Q.key),G.return=Z,Z=G):(Ee=Bl(Q.type,Q.key,Q.props,null,Z.mode,Ee),Ee.ref=Qo(Z,G,Q),Ee.return=Z,Z=Ee)}return R(Z);case I:e:{for(tt=Q.key;G!==null;){if(G.key===tt)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){l(Z,G.sibling),G=m(G,Q.children||[]),G.return=Z,Z=G;break e}else{l(Z,G);break}else r(Z,G);G=G.sibling}G=hf(Q,Z.mode,Ee),G.return=Z,Z=G}return R(Z);case se:return tt=Q._init,tn(Z,G,tt(Q._payload),Ee)}if(Mt(Q))return Ge(Z,G,Q,Ee);if(fe(Q))return Xe(Z,G,Q,Ee);ml(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,G!==null&&G.tag===6?(l(Z,G.sibling),G=m(G,Q),G.return=Z,Z=G):(l(Z,G),G=df(Q,Z.mode,Ee),G.return=Z,Z=G),R(Z)):l(Z,G)}return tn}var zs=bp(!0),Ap=bp(!1),gl=Ar(null),_l=null,Vs=null,Su=null;function Mu(){Su=Vs=_l=null}function Eu(n){var r=gl.current;Wt(gl),n._currentValue=r}function Tu(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function Hs(n,r){_l=n,Su=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Hn=!0),n.firstContext=null)}function oi(n){var r=n._currentValue;if(Su!==n)if(n={context:n,memoizedValue:r,next:null},Vs===null){if(_l===null)throw Error(t(308));Vs=n,_l.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return r}var rs=null;function wu(n){rs===null?rs=[n]:rs.push(n)}function Rp(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,wu(r)):(l.next=m.next,m.next=l),r.interleaved=l,nr(n,f)}function nr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Pr=!1;function bu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ir(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Lr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(Ct&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,nr(n,l)}return m=f.interleaved,m===null?(r.next=r,wu(f)):(r.next=m.next,m.next=r),f.interleaved=r,nr(n,l)}function xl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,It(n,l)}}function Pp(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?m=v=R:v=v.next=R,l=l.next}while(l!==null);v===null?m=v=r:v=v.next=r}else m=v=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:v,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function vl(n,r,l,f){var m=n.updateQueue;Pr=!1;var v=m.firstBaseUpdate,R=m.lastBaseUpdate,k=m.shared.pending;if(k!==null){m.shared.pending=null;var z=k,ie=z.next;z.next=null,R===null?v=ie:R.next=ie,R=z;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,k=_e.lastBaseUpdate,k!==R&&(k===null?_e.firstBaseUpdate=ie:k.next=ie,_e.lastBaseUpdate=z))}if(v!==null){var ve=m.baseState;R=0,_e=ie=z=null,k=v;do{var ge=k.lane,Fe=k.eventTime;if((f&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Fe,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ge=n,Xe=k;switch(ge=r,Fe=l,Xe.tag){case 1:if(Ge=Xe.payload,typeof Ge=="function"){ve=Ge.call(Fe,ve,ge);break e}ve=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Xe.payload,ge=typeof Ge=="function"?Ge.call(Fe,ve,ge):Ge,ge==null)break e;ve=oe({},ve,ge);break e;case 2:Pr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,ge=m.effects,ge===null?m.effects=[k]:ge.push(k))}else Fe={eventTime:Fe,lane:ge,tag:k.tag,payload:k.payload,callback:k.callback,next:null},_e===null?(ie=_e=Fe,z=ve):_e=_e.next=Fe,R|=ge;if(k=k.next,k===null){if(k=m.shared.pending,k===null)break;ge=k,k=ge.next,ge.next=null,m.lastBaseUpdate=ge,m.shared.pending=null}}while(!0);if(_e===null&&(z=ve),m.baseState=z,m.firstBaseUpdate=ie,m.lastBaseUpdate=_e,r=m.shared.interleaved,r!==null){m=r;do R|=m.lane,m=m.next;while(m!==r)}else v===null&&(m.shared.lanes=0);as|=R,n.lanes=R,n.memoizedState=ve}}function Lp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ea={},Di=Ar(ea),ta=Ar(ea),na=Ar(ea);function ss(n){if(n===ea)throw Error(t(174));return n}function Au(n,r){switch(Ht(na,r),Ht(ta,n),Ht(Di,ea),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:me(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=me(r,n)}Wt(Di),Ht(Di,r)}function Gs(){Wt(Di),Wt(ta),Wt(na)}function Np(n){ss(na.current);var r=ss(Di.current),l=me(r,n.type);r!==l&&(Ht(ta,n),Ht(Di,l))}function Ru(n){ta.current===n&&(Wt(Di),Wt(ta))}var $t=Ar(0);function yl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Cu=[];function Pu(){for(var n=0;n<Cu.length;n++)Cu[n]._workInProgressVersionPrimary=null;Cu.length=0}var Sl=C.ReactCurrentDispatcher,Lu=C.ReactCurrentBatchConfig,os=0,Zt=null,on=null,mn=null,Ml=!1,ia=!1,ra=0,Ex=0;function wn(){throw Error(t(321))}function Nu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!gi(n[l],r[l]))return!1;return!0}function Du(n,r,l,f,m,v){if(os=v,Zt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Sl.current=n===null||n.memoizedState===null?Ax:Rx,n=l(f,m),ia){v=0;do{if(ia=!1,ra=0,25<=v)throw Error(t(301));v+=1,mn=on=null,r.updateQueue=null,Sl.current=Cx,n=l(f,m)}while(ia)}if(Sl.current=wl,r=on!==null&&on.next!==null,os=0,mn=on=Zt=null,Ml=!1,r)throw Error(t(300));return n}function Iu(){var n=ra!==0;return ra=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Zt.memoizedState=mn=n:mn=mn.next=n,mn}function ai(){if(on===null){var n=Zt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var r=mn===null?Zt.memoizedState:mn.next;if(r!==null)mn=r,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},mn===null?Zt.memoizedState=mn=n:mn=mn.next=n}return mn}function sa(n,r){return typeof r=="function"?r(n):r}function Uu(n){var r=ai(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=on,m=f.baseQueue,v=l.pending;if(v!==null){if(m!==null){var R=m.next;m.next=v.next,v.next=R}f.baseQueue=m=v,l.pending=null}if(m!==null){v=m.next,f=f.baseState;var k=R=null,z=null,ie=v;do{var _e=ie.lane;if((os&_e)===_e)z!==null&&(z=z.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),f=ie.hasEagerState?ie.eagerState:n(f,ie.action);else{var ve={lane:_e,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};z===null?(k=z=ve,R=f):z=z.next=ve,Zt.lanes|=_e,as|=_e}ie=ie.next}while(ie!==null&&ie!==v);z===null?R=f:z.next=k,gi(f,r.memoizedState)||(Hn=!0),r.memoizedState=f,r.baseState=R,r.baseQueue=z,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do v=m.lane,Zt.lanes|=v,as|=v,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Fu(n){var r=ai(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,v=r.memoizedState;if(m!==null){l.pending=null;var R=m=m.next;do v=n(v,R.action),R=R.next;while(R!==m);gi(v,r.memoizedState)||(Hn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,f]}function Dp(){}function Ip(n,r){var l=Zt,f=ai(),m=r(),v=!gi(f.memoizedState,m);if(v&&(f.memoizedState=m,Hn=!0),f=f.queue,Ou(Op.bind(null,l,f,n),[n]),f.getSnapshot!==r||v||mn!==null&&mn.memoizedState.tag&1){if(l.flags|=2048,oa(9,Fp.bind(null,l,f,m,r),void 0,null),gn===null)throw Error(t(349));(os&30)!==0||Up(l,r,m)}return m}function Up(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Zt.updateQueue,r===null?(r={lastEffect:null,stores:null},Zt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Fp(n,r,l,f){r.value=l,r.getSnapshot=f,kp(r)&&Bp(n)}function Op(n,r,l){return l(function(){kp(r)&&Bp(n)})}function kp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!gi(n,l)}catch{return!0}}function Bp(n){var r=nr(n,1);r!==null&&Si(r,n,1,-1)}function zp(n){var r=Ii();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},r.queue=n,n=n.dispatch=bx.bind(null,Zt,n),[r.memoizedState,n]}function oa(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=Zt.updateQueue,r===null?(r={lastEffect:null,stores:null},Zt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function Vp(){return ai().memoizedState}function El(n,r,l,f){var m=Ii();Zt.flags|=n,m.memoizedState=oa(1|r,l,void 0,f===void 0?null:f)}function Tl(n,r,l,f){var m=ai();f=f===void 0?null:f;var v=void 0;if(on!==null){var R=on.memoizedState;if(v=R.destroy,f!==null&&Nu(f,R.deps)){m.memoizedState=oa(r,l,v,f);return}}Zt.flags|=n,m.memoizedState=oa(1|r,l,v,f)}function Hp(n,r){return El(8390656,8,n,r)}function Ou(n,r){return Tl(2048,8,n,r)}function Gp(n,r){return Tl(4,2,n,r)}function Wp(n,r){return Tl(4,4,n,r)}function jp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Xp(n,r,l){return l=l!=null?l.concat([n]):null,Tl(4,4,jp.bind(null,r,n),l)}function ku(){}function Yp(n,r){var l=ai();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Nu(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function qp(n,r){var l=ai();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Nu(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function Kp(n,r,l){return(os&21)===0?(n.baseState&&(n.baseState=!1,Hn=!0),n.memoizedState=l):(gi(l,r)||(l=En(),Zt.lanes|=l,as|=l,n.baseState=!0),r)}function Tx(n,r){var l=ut;ut=l!==0&&4>l?l:4,n(!0);var f=Lu.transition;Lu.transition={};try{n(!1),r()}finally{ut=l,Lu.transition=f}}function $p(){return ai().memoizedState}function wx(n,r,l){var f=Ur(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Zp(n))Jp(r,l);else if(l=Rp(n,r,l,f),l!==null){var m=In();Si(l,n,f,m),Qp(l,r,f)}}function bx(n,r,l){var f=Ur(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Zp(n))Jp(r,m);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var R=r.lastRenderedState,k=v(R,l);if(m.hasEagerState=!0,m.eagerState=k,gi(k,R)){var z=r.interleaved;z===null?(m.next=m,wu(r)):(m.next=z.next,z.next=m),r.interleaved=m;return}}catch{}finally{}l=Rp(n,r,m,f),l!==null&&(m=In(),Si(l,n,f,m),Qp(l,r,f))}}function Zp(n){var r=n.alternate;return n===Zt||r!==null&&r===Zt}function Jp(n,r){ia=Ml=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Qp(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,It(n,l)}}var wl={readContext:oi,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},Ax={readContext:oi,useCallback:function(n,r){return Ii().memoizedState=[n,r===void 0?null:r],n},useContext:oi,useEffect:Hp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,El(4194308,4,jp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return El(4194308,4,n,r)},useInsertionEffect:function(n,r){return El(4,2,n,r)},useMemo:function(n,r){var l=Ii();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Ii();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=wx.bind(null,Zt,n),[f.memoizedState,n]},useRef:function(n){var r=Ii();return n={current:n},r.memoizedState=n},useState:zp,useDebugValue:ku,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=zp(!1),r=n[0];return n=Tx.bind(null,n[1]),Ii().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=Zt,m=Ii();if(qt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),gn===null)throw Error(t(349));(os&30)!==0||Up(f,r,l)}m.memoizedState=l;var v={value:l,getSnapshot:r};return m.queue=v,Hp(Op.bind(null,f,v,n),[n]),f.flags|=2048,oa(9,Fp.bind(null,f,v,l,r),void 0,null),l},useId:function(){var n=Ii(),r=gn.identifierPrefix;if(qt){var l=tr,f=er;l=(f&~(1<<32-Oe(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=ra++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Ex++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Rx={readContext:oi,useCallback:Yp,useContext:oi,useEffect:Ou,useImperativeHandle:Xp,useInsertionEffect:Gp,useLayoutEffect:Wp,useMemo:qp,useReducer:Uu,useRef:Vp,useState:function(){return Uu(sa)},useDebugValue:ku,useDeferredValue:function(n){var r=ai();return Kp(r,on.memoizedState,n)},useTransition:function(){var n=Uu(sa)[0],r=ai().memoizedState;return[n,r]},useMutableSource:Dp,useSyncExternalStore:Ip,useId:$p,unstable_isNewReconciler:!1},Cx={readContext:oi,useCallback:Yp,useContext:oi,useEffect:Ou,useImperativeHandle:Xp,useInsertionEffect:Gp,useLayoutEffect:Wp,useMemo:qp,useReducer:Fu,useRef:Vp,useState:function(){return Fu(sa)},useDebugValue:ku,useDeferredValue:function(n){var r=ai();return on===null?r.memoizedState=n:Kp(r,on.memoizedState,n)},useTransition:function(){var n=Fu(sa)[0],r=ai().memoizedState;return[n,r]},useMutableSource:Dp,useSyncExternalStore:Ip,useId:$p,unstable_isNewReconciler:!1};function xi(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Bu(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:oe({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var bl={isMounted:function(n){return(n=n._reactInternals)?ii(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=In(),m=Ur(n),v=ir(f,m);v.payload=r,l!=null&&(v.callback=l),r=Lr(n,v,m),r!==null&&(Si(r,n,m,f),xl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=In(),m=Ur(n),v=ir(f,m);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Lr(n,v,m),r!==null&&(Si(r,n,m,f),xl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=In(),f=Ur(n),m=ir(l,f);m.tag=2,r!=null&&(m.callback=r),r=Lr(n,m,f),r!==null&&(Si(r,n,f,l),xl(r,n,f))}};function em(n,r,l,f,m,v,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,v,R):r.prototype&&r.prototype.isPureReactComponent?!Xo(l,f)||!Xo(m,v):!0}function tm(n,r,l){var f=!1,m=Rr,v=r.contextType;return typeof v=="object"&&v!==null?v=oi(v):(m=Vn(r)?ts:Tn.current,f=r.contextTypes,v=(f=f!=null)?Fs(n,m):Rr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=bl,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=v),r}function nm(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&bl.enqueueReplaceState(r,r.state,null)}function zu(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},bu(n);var v=r.contextType;typeof v=="object"&&v!==null?m.context=oi(v):(v=Vn(r)?ts:Tn.current,m.context=Fs(n,v)),m.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Bu(n,r,v,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&bl.enqueueReplaceState(m,m.state,null),vl(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,r){try{var l="",f=r;do l+=Ze(f),f=f.return;while(f);var m=l}catch(v){m=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:m,digest:null}}function Vu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Hu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Px=typeof WeakMap=="function"?WeakMap:Map;function im(n,r,l){l=ir(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){Dl||(Dl=!0,rf=f),Hu(n,r)},l}function rm(n,r,l){l=ir(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){Hu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Hu(n,r),typeof f!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})}),l}function sm(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new Px;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=Wx.bind(null,n,r,l),r.then(n,n))}function om(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function am(n,r,l,f,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=ir(-1,1),r.tag=2,Lr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var Lx=C.ReactCurrentOwner,Hn=!1;function Dn(n,r,l,f){r.child=n===null?Ap(r,null,l,f):zs(r,n.child,l,f)}function lm(n,r,l,f,m){l=l.render;var v=r.ref;return Hs(r,m),f=Du(n,r,l,f,v,m),l=Iu(),n!==null&&!Hn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,rr(n,r,m)):(qt&&l&&gu(r),r.flags|=1,Dn(n,r,f,m),r.child)}function cm(n,r,l,f,m){if(n===null){var v=l.type;return typeof v=="function"&&!ff(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,um(n,r,v,f,m)):(n=Bl(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&m)===0){var R=v.memoizedProps;if(l=l.compare,l=l!==null?l:Xo,l(R,f)&&n.ref===r.ref)return rr(n,r,m)}return r.flags|=1,n=Or(v,f),n.ref=r.ref,n.return=r,r.child=n}function um(n,r,l,f,m){if(n!==null){var v=n.memoizedProps;if(Xo(v,f)&&n.ref===r.ref)if(Hn=!1,r.pendingProps=f=v,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Hn=!0);else return r.lanes=n.lanes,rr(n,r,m)}return Gu(n,r,l,f,m)}function fm(n,r,l){var f=r.pendingProps,m=f.children,v=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Xs,Jn),Jn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ht(Xs,Jn),Jn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:l,Ht(Xs,Jn),Jn|=f}else v!==null?(f=v.baseLanes|l,r.memoizedState=null):f=l,Ht(Xs,Jn),Jn|=f;return Dn(n,r,m,l),r.child}function dm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Gu(n,r,l,f,m){var v=Vn(l)?ts:Tn.current;return v=Fs(r,v),Hs(r,m),l=Du(n,r,l,f,v,m),f=Iu(),n!==null&&!Hn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,rr(n,r,m)):(qt&&f&&gu(r),r.flags|=1,Dn(n,r,l,m),r.child)}function hm(n,r,l,f,m){if(Vn(l)){var v=!0;ul(r)}else v=!1;if(Hs(r,m),r.stateNode===null)Rl(n,r),tm(r,l,f),zu(r,l,f,m),f=!0;else if(n===null){var R=r.stateNode,k=r.memoizedProps;R.props=k;var z=R.context,ie=l.contextType;typeof ie=="object"&&ie!==null?ie=oi(ie):(ie=Vn(l)?ts:Tn.current,ie=Fs(r,ie));var _e=l.getDerivedStateFromProps,ve=typeof _e=="function"||typeof R.getSnapshotBeforeUpdate=="function";ve||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(k!==f||z!==ie)&&nm(r,R,f,ie),Pr=!1;var ge=r.memoizedState;R.state=ge,vl(r,f,R,m),z=r.memoizedState,k!==f||ge!==z||zn.current||Pr?(typeof _e=="function"&&(Bu(r,l,_e,f),z=r.memoizedState),(k=Pr||em(r,l,k,f,ge,z,ie))?(ve||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(r.flags|=4194308)):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=z),R.props=f,R.state=z,R.context=ie,f=k):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{R=r.stateNode,Cp(n,r),k=r.memoizedProps,ie=r.type===r.elementType?k:xi(r.type,k),R.props=ie,ve=r.pendingProps,ge=R.context,z=l.contextType,typeof z=="object"&&z!==null?z=oi(z):(z=Vn(l)?ts:Tn.current,z=Fs(r,z));var Fe=l.getDerivedStateFromProps;(_e=typeof Fe=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(k!==ve||ge!==z)&&nm(r,R,f,z),Pr=!1,ge=r.memoizedState,R.state=ge,vl(r,f,R,m);var Ge=r.memoizedState;k!==ve||ge!==Ge||zn.current||Pr?(typeof Fe=="function"&&(Bu(r,l,Fe,f),Ge=r.memoizedState),(ie=Pr||em(r,l,ie,f,ge,Ge,z)||!1)?(_e||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(f,Ge,z),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(f,Ge,z)),typeof R.componentDidUpdate=="function"&&(r.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof R.componentDidUpdate!="function"||k===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Ge),R.props=f,R.state=Ge,R.context=z,f=ie):(typeof R.componentDidUpdate!="function"||k===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),f=!1)}return Wu(n,r,l,f,v,m)}function Wu(n,r,l,f,m,v){dm(n,r);var R=(r.flags&128)!==0;if(!f&&!R)return m&&xp(r,l,!1),rr(n,r,v);f=r.stateNode,Lx.current=r;var k=R&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&R?(r.child=zs(r,n.child,null,v),r.child=zs(r,null,k,v)):Dn(n,r,k,v),r.memoizedState=f.state,m&&xp(r,l,!0),r.child}function pm(n){var r=n.stateNode;r.pendingContext?gp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&gp(n,r.context,!1),Au(n,r.containerInfo)}function mm(n,r,l,f,m){return Bs(),yu(m),r.flags|=256,Dn(n,r,l,f),r.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Xu(n){return{baseLanes:n,cachePool:null,transitions:null}}function gm(n,r,l){var f=r.pendingProps,m=$t.current,v=!1,R=(r.flags&128)!==0,k;if((k=R)||(k=n!==null&&n.memoizedState===null?!1:(m&2)!==0),k?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Ht($t,m&1),n===null)return vu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(R=f.children,n=f.fallback,v?(f=r.mode,v=r.child,R={mode:"hidden",children:R},(f&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=R):v=zl(R,f,0,null),n=fs(n,f,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Xu(l),r.memoizedState=ju,n):Yu(r,R));if(m=n.memoizedState,m!==null&&(k=m.dehydrated,k!==null))return Nx(n,r,R,f,k,m,l);if(v){v=f.fallback,R=r.mode,m=n.child,k=m.sibling;var z={mode:"hidden",children:f.children};return(R&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=z,r.deletions=null):(f=Or(m,z),f.subtreeFlags=m.subtreeFlags&14680064),k!==null?v=Or(k,v):(v=fs(v,R,l,null),v.flags|=2),v.return=r,f.return=r,f.sibling=v,r.child=f,f=v,v=r.child,R=n.child.memoizedState,R=R===null?Xu(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},v.memoizedState=R,v.childLanes=n.childLanes&~l,r.memoizedState=ju,f}return v=n.child,n=v.sibling,f=Or(v,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Yu(n,r){return r=zl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Al(n,r,l,f){return f!==null&&yu(f),zs(r,n.child,null,l),n=Yu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Nx(n,r,l,f,m,v,R){if(l)return r.flags&256?(r.flags&=-257,f=Vu(Error(t(422))),Al(n,r,R,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=f.fallback,m=r.mode,f=zl({mode:"visible",children:f.children},m,0,null),v=fs(v,m,R,null),v.flags|=2,f.return=r,v.return=r,f.sibling=v,r.child=f,(r.mode&1)!==0&&zs(r,n.child,null,R),r.child.memoizedState=Xu(R),r.memoizedState=ju,v);if((r.mode&1)===0)return Al(n,r,R,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var k=f.dgst;return f=k,v=Error(t(419)),f=Vu(v,f,void 0),Al(n,r,R,f)}if(k=(R&n.childLanes)!==0,Hn||k){if(f=gn,f!==null){switch(R&-R){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|R))!==0?0:m,m!==0&&m!==v.retryLane&&(v.retryLane=m,nr(n,m),Si(f,n,m,-1))}return uf(),f=Vu(Error(t(421))),Al(n,r,R,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=jx.bind(null,n),m._reactRetry=r,null):(n=v.treeContext,Zn=br(m.nextSibling),$n=r,qt=!0,_i=null,n!==null&&(ri[si++]=er,ri[si++]=tr,ri[si++]=ns,er=n.id,tr=n.overflow,ns=r),r=Yu(r,f.children),r.flags|=4096,r)}function _m(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),Tu(n.return,r,l)}function qu(n,r,l,f,m){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=l,v.tailMode=m)}function xm(n,r,l){var f=r.pendingProps,m=f.revealOrder,v=f.tail;if(Dn(n,r,f.children,l),f=$t.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_m(n,l,r);else if(n.tag===19)_m(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Ht($t,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&yl(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),qu(r,!1,m,l,v);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&yl(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}qu(r,!0,l,null,v);break;case"together":qu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Rl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function rr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),as|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Or(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Or(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Dx(n,r,l){switch(r.tag){case 3:pm(r),Bs();break;case 5:Np(r);break;case 1:Vn(r.type)&&ul(r);break;case 4:Au(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Ht(gl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Ht($t,$t.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?gm(n,r,l):(Ht($t,$t.current&1),n=rr(n,r,l),n!==null?n.sibling:null);Ht($t,$t.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return xm(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ht($t,$t.current),f)break;return null;case 22:case 23:return r.lanes=0,fm(n,r,l)}return rr(n,r,l)}var vm,Ku,ym,Sm;vm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ku=function(){},ym=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,ss(Di.current);var v=null;switch(l){case"input":m=wt(n,m),f=wt(n,f),v=[];break;case"select":m=oe({},m,{value:void 0}),f=oe({},f,{value:void 0}),v=[];break;case"textarea":m=We(n,m),f=We(n,f),v=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=al)}je(l,f);var R;l=null;for(ie in m)if(!f.hasOwnProperty(ie)&&m.hasOwnProperty(ie)&&m[ie]!=null)if(ie==="style"){var k=m[ie];for(R in k)k.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(s.hasOwnProperty(ie)?v||(v=[]):(v=v||[]).push(ie,null));for(ie in f){var z=f[ie];if(k=m!=null?m[ie]:void 0,f.hasOwnProperty(ie)&&z!==k&&(z!=null||k!=null))if(ie==="style")if(k){for(R in k)!k.hasOwnProperty(R)||z&&z.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in z)z.hasOwnProperty(R)&&k[R]!==z[R]&&(l||(l={}),l[R]=z[R])}else l||(v||(v=[]),v.push(ie,l)),l=z;else ie==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,k=k?k.__html:void 0,z!=null&&k!==z&&(v=v||[]).push(ie,z)):ie==="children"?typeof z!="string"&&typeof z!="number"||(v=v||[]).push(ie,""+z):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(s.hasOwnProperty(ie)?(z!=null&&ie==="onScroll"&&Gt("scroll",n),v||k===z||(v=[])):(v=v||[]).push(ie,z))}l&&(v=v||[]).push("style",l);var ie=v;(r.updateQueue=ie)&&(r.flags|=4)}},Sm=function(n,r,l,f){l!==f&&(r.flags|=4)};function aa(n,r){if(!qt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function bn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function Ix(n,r,l){var f=r.pendingProps;switch(_u(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(r),null;case 1:return Vn(r.type)&&cl(),bn(r),null;case 3:return f=r.stateNode,Gs(),Wt(zn),Wt(Tn),Pu(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(pl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,_i!==null&&(af(_i),_i=null))),Ku(n,r),bn(r),null;case 5:Ru(r);var m=ss(na.current);if(l=r.type,n!==null&&r.stateNode!=null)ym(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return bn(r),null}if(n=ss(Di.current),pl(r)){f=r.stateNode,l=r.type;var v=r.memoizedProps;switch(f[Ni]=r,f[Zo]=v,n=(r.mode&1)!==0,l){case"dialog":Gt("cancel",f),Gt("close",f);break;case"iframe":case"object":case"embed":Gt("load",f);break;case"video":case"audio":for(m=0;m<qo.length;m++)Gt(qo[m],f);break;case"source":Gt("error",f);break;case"img":case"image":case"link":Gt("error",f),Gt("load",f);break;case"details":Gt("toggle",f);break;case"input":Dt(f,v),Gt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},Gt("invalid",f);break;case"textarea":F(f,v),Gt("invalid",f)}je(l,v),m=null;for(var R in v)if(v.hasOwnProperty(R)){var k=v[R];R==="children"?typeof k=="string"?f.textContent!==k&&(v.suppressHydrationWarning!==!0&&ol(f.textContent,k,n),m=["children",k]):typeof k=="number"&&f.textContent!==""+k&&(v.suppressHydrationWarning!==!0&&ol(f.textContent,k,n),m=["children",""+k]):s.hasOwnProperty(R)&&k!=null&&R==="onScroll"&&Gt("scroll",f)}switch(l){case"input":yt(f),V(f,v,!0);break;case"textarea":yt(f),W(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=al)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{R=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=R.createElement(l,{is:f.is}):(n=R.createElement(l),l==="select"&&(R=n,f.multiple?R.multiple=!0:f.size&&(R.size=f.size))):n=R.createElementNS(n,l),n[Ni]=r,n[Zo]=f,vm(n,r,!1,!1),r.stateNode=n;e:{switch(R=be(l,f),l){case"dialog":Gt("cancel",n),Gt("close",n),m=f;break;case"iframe":case"object":case"embed":Gt("load",n),m=f;break;case"video":case"audio":for(m=0;m<qo.length;m++)Gt(qo[m],n);m=f;break;case"source":Gt("error",n),m=f;break;case"img":case"image":case"link":Gt("error",n),Gt("load",n),m=f;break;case"details":Gt("toggle",n),m=f;break;case"input":Dt(n,f),m=wt(n,f),Gt("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=oe({},f,{value:void 0}),Gt("invalid",n);break;case"textarea":F(n,f),m=We(n,f),Gt("invalid",n);break;default:m=f}je(l,m),k=m;for(v in k)if(k.hasOwnProperty(v)){var z=k[v];v==="style"?Re(n,z):v==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&qe(n,z)):v==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&Te(n,z):typeof z=="number"&&Te(n,""+z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?z!=null&&v==="onScroll"&&Gt("scroll",n):z!=null&&w(n,v,z,R))}switch(l){case"input":yt(n),V(n,f,!1);break;case"textarea":yt(n),W(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Se(f.value));break;case"select":n.multiple=!!f.multiple,v=f.value,v!=null?bt(n,!!f.multiple,v,!1):f.defaultValue!=null&&bt(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=al)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return bn(r),null;case 6:if(n&&r.stateNode!=null)Sm(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=ss(na.current),ss(Di.current),pl(r)){if(f=r.stateNode,l=r.memoizedProps,f[Ni]=r,(v=f.nodeValue!==l)&&(n=$n,n!==null))switch(n.tag){case 3:ol(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ol(f.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Ni]=r,r.stateNode=f}return bn(r),null;case 13:if(Wt($t),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&Zn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Tp(),Bs(),r.flags|=98560,v=!1;else if(v=pl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Ni]=r}else Bs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;bn(r),v=!1}else _i!==null&&(af(_i),_i=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||($t.current&1)!==0?an===0&&(an=3):uf())),r.updateQueue!==null&&(r.flags|=4),bn(r),null);case 4:return Gs(),Ku(n,r),n===null&&Ko(r.stateNode.containerInfo),bn(r),null;case 10:return Eu(r.type._context),bn(r),null;case 17:return Vn(r.type)&&cl(),bn(r),null;case 19:if(Wt($t),v=r.memoizedState,v===null)return bn(r),null;if(f=(r.flags&128)!==0,R=v.rendering,R===null)if(f)aa(v,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(R=yl(n),R!==null){for(r.flags|=128,aa(v,!1),f=R.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)v=l,n=f,v.flags&=14680066,R=v.alternate,R===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=R.childLanes,v.lanes=R.lanes,v.child=R.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=R.memoizedProps,v.memoizedState=R.memoizedState,v.updateQueue=R.updateQueue,v.type=R.type,n=R.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ht($t,$t.current&1|2),r.child}n=n.sibling}v.tail!==null&&Kt()>Ys&&(r.flags|=128,f=!0,aa(v,!1),r.lanes=4194304)}else{if(!f)if(n=yl(R),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),aa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!R.alternate&&!qt)return bn(r),null}else 2*Kt()-v.renderingStartTime>Ys&&l!==1073741824&&(r.flags|=128,f=!0,aa(v,!1),r.lanes=4194304);v.isBackwards?(R.sibling=r.child,r.child=R):(l=v.last,l!==null?l.sibling=R:r.child=R,v.last=R)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Kt(),r.sibling=null,l=$t.current,Ht($t,f?l&1|2:l&1),r):(bn(r),null);case 22:case 23:return cf(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(Jn&1073741824)!==0&&(bn(r),r.subtreeFlags&6&&(r.flags|=8192)):bn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Ux(n,r){switch(_u(r),r.tag){case 1:return Vn(r.type)&&cl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Gs(),Wt(zn),Wt(Tn),Pu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Ru(r),null;case 13:if(Wt($t),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Bs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Wt($t),null;case 4:return Gs(),null;case 10:return Eu(r.type._context),null;case 22:case 23:return cf(),null;case 24:return null;default:return null}}var Cl=!1,An=!1,Fx=typeof WeakSet=="function"?WeakSet:Set,ze=null;function js(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Qt(n,r,f)}else l.current=null}function $u(n,r,l){try{l()}catch(f){Qt(n,r,f)}}var Mm=!1;function Ox(n,r){if(lu=Ka,n=ep(),eu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var R=0,k=-1,z=-1,ie=0,_e=0,ve=n,ge=null;t:for(;;){for(var Fe;ve!==l||m!==0&&ve.nodeType!==3||(k=R+m),ve!==v||f!==0&&ve.nodeType!==3||(z=R+f),ve.nodeType===3&&(R+=ve.nodeValue.length),(Fe=ve.firstChild)!==null;)ge=ve,ve=Fe;for(;;){if(ve===n)break t;if(ge===l&&++ie===m&&(k=R),ge===v&&++_e===f&&(z=R),(Fe=ve.nextSibling)!==null)break;ve=ge,ge=ve.parentNode}ve=Fe}l=k===-1||z===-1?null:{start:k,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(cu={focusedElem:n,selectionRange:l},Ka=!1,ze=r;ze!==null;)if(r=ze,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ze=n;else for(;ze!==null;){r=ze;try{var Ge=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Xe=Ge.memoizedProps,tn=Ge.memoizedState,Z=r.stateNode,G=Z.getSnapshotBeforeUpdate(r.elementType===r.type?Xe:xi(r.type,Xe),tn);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Q=r.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Qt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,ze=n;break}ze=r.return}return Ge=Mm,Mm=!1,Ge}function la(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var v=m.destroy;m.destroy=void 0,v!==void 0&&$u(r,l,v)}m=m.next}while(m!==f)}}function Pl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Zu(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Em(n){var r=n.alternate;r!==null&&(n.alternate=null,Em(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ni],delete r[Zo],delete r[hu],delete r[vx],delete r[yx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Tm(n){return n.tag===5||n.tag===3||n.tag===4}function wm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Tm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ju(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=al));else if(f!==4&&(n=n.child,n!==null))for(Ju(n,r,l),n=n.sibling;n!==null;)Ju(n,r,l),n=n.sibling}function Qu(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Qu(n,r,l),n=n.sibling;n!==null;)Qu(n,r,l),n=n.sibling}var yn=null,vi=!1;function Nr(n,r,l){for(l=l.child;l!==null;)bm(n,r,l),l=l.sibling}function bm(n,r,l){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Ue,l)}catch{}switch(l.tag){case 5:An||js(l,r);case 6:var f=yn,m=vi;yn=null,Nr(n,r,l),yn=f,vi=m,yn!==null&&(vi?(n=yn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):yn.removeChild(l.stateNode));break;case 18:yn!==null&&(vi?(n=yn,l=l.stateNode,n.nodeType===8?du(n.parentNode,l):n.nodeType===1&&du(n,l),zo(n)):du(yn,l.stateNode));break;case 4:f=yn,m=vi,yn=l.stateNode.containerInfo,vi=!0,Nr(n,r,l),yn=f,vi=m;break;case 0:case 11:case 14:case 15:if(!An&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var v=m,R=v.destroy;v=v.tag,R!==void 0&&((v&2)!==0||(v&4)!==0)&&$u(l,r,R),m=m.next}while(m!==f)}Nr(n,r,l);break;case 1:if(!An&&(js(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(k){Qt(l,r,k)}Nr(n,r,l);break;case 21:Nr(n,r,l);break;case 22:l.mode&1?(An=(f=An)||l.memoizedState!==null,Nr(n,r,l),An=f):Nr(n,r,l);break;default:Nr(n,r,l)}}function Am(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Fx),r.forEach(function(f){var m=Xx.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function yi(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var v=n,R=r,k=R;e:for(;k!==null;){switch(k.tag){case 5:yn=k.stateNode,vi=!1;break e;case 3:yn=k.stateNode.containerInfo,vi=!0;break e;case 4:yn=k.stateNode.containerInfo,vi=!0;break e}k=k.return}if(yn===null)throw Error(t(160));bm(v,R,m),yn=null,vi=!1;var z=m.alternate;z!==null&&(z.return=null),m.return=null}catch(ie){Qt(m,r,ie)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Rm(r,n),r=r.sibling}function Rm(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(r,n),Ui(n),f&4){try{la(3,n,n.return),Pl(3,n)}catch(Xe){Qt(n,n.return,Xe)}try{la(5,n,n.return)}catch(Xe){Qt(n,n.return,Xe)}}break;case 1:yi(r,n),Ui(n),f&512&&l!==null&&js(l,l.return);break;case 5:if(yi(r,n),Ui(n),f&512&&l!==null&&js(l,l.return),n.flags&32){var m=n.stateNode;try{Te(m,"")}catch(Xe){Qt(n,n.return,Xe)}}if(f&4&&(m=n.stateNode,m!=null)){var v=n.memoizedProps,R=l!==null?l.memoizedProps:v,k=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{k==="input"&&v.type==="radio"&&v.name!=null&&dt(m,v),be(k,R);var ie=be(k,v);for(R=0;R<z.length;R+=2){var _e=z[R],ve=z[R+1];_e==="style"?Re(m,ve):_e==="dangerouslySetInnerHTML"?qe(m,ve):_e==="children"?Te(m,ve):w(m,_e,ve,ie)}switch(k){case"input":Xt(m,v);break;case"textarea":T(m,v);break;case"select":var ge=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!v.multiple;var Fe=v.value;Fe!=null?bt(m,!!v.multiple,Fe,!1):ge!==!!v.multiple&&(v.defaultValue!=null?bt(m,!!v.multiple,v.defaultValue,!0):bt(m,!!v.multiple,v.multiple?[]:"",!1))}m[Zo]=v}catch(Xe){Qt(n,n.return,Xe)}}break;case 6:if(yi(r,n),Ui(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,v=n.memoizedProps;try{m.nodeValue=v}catch(Xe){Qt(n,n.return,Xe)}}break;case 3:if(yi(r,n),Ui(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{zo(r.containerInfo)}catch(Xe){Qt(n,n.return,Xe)}break;case 4:yi(r,n),Ui(n);break;case 13:yi(r,n),Ui(n),m=n.child,m.flags&8192&&(v=m.memoizedState!==null,m.stateNode.isHidden=v,!v||m.alternate!==null&&m.alternate.memoizedState!==null||(nf=Kt())),f&4&&Am(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(An=(ie=An)||_e,yi(r,n),An=ie):yi(r,n),Ui(n),f&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!_e&&(n.mode&1)!==0)for(ze=n,_e=n.child;_e!==null;){for(ve=ze=_e;ze!==null;){switch(ge=ze,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:la(4,ge,ge.return);break;case 1:js(ge,ge.return);var Ge=ge.stateNode;if(typeof Ge.componentWillUnmount=="function"){f=ge,l=ge.return;try{r=f,Ge.props=r.memoizedProps,Ge.state=r.memoizedState,Ge.componentWillUnmount()}catch(Xe){Qt(f,l,Xe)}}break;case 5:js(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Lm(ve);continue}}Fe!==null?(Fe.return=ge,ze=Fe):Lm(ve)}_e=_e.sibling}e:for(_e=null,ve=n;;){if(ve.tag===5){if(_e===null){_e=ve;try{m=ve.stateNode,ie?(v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(k=ve.stateNode,z=ve.memoizedProps.style,R=z!=null&&z.hasOwnProperty("display")?z.display:null,k.style.display=ye("display",R))}catch(Xe){Qt(n,n.return,Xe)}}}else if(ve.tag===6){if(_e===null)try{ve.stateNode.nodeValue=ie?"":ve.memoizedProps}catch(Xe){Qt(n,n.return,Xe)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===n)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===n)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===n)break e;_e===ve&&(_e=null),ve=ve.return}_e===ve&&(_e=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:yi(r,n),Ui(n),f&4&&Am(n);break;case 21:break;default:yi(r,n),Ui(n)}}function Ui(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Tm(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Te(m,""),f.flags&=-33);var v=wm(n);Qu(n,v,m);break;case 3:case 4:var R=f.stateNode.containerInfo,k=wm(n);Ju(n,k,R);break;default:throw Error(t(161))}}catch(z){Qt(n,n.return,z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function kx(n,r,l){ze=n,Cm(n)}function Cm(n,r,l){for(var f=(n.mode&1)!==0;ze!==null;){var m=ze,v=m.child;if(m.tag===22&&f){var R=m.memoizedState!==null||Cl;if(!R){var k=m.alternate,z=k!==null&&k.memoizedState!==null||An;k=Cl;var ie=An;if(Cl=R,(An=z)&&!ie)for(ze=m;ze!==null;)R=ze,z=R.child,R.tag===22&&R.memoizedState!==null?Nm(m):z!==null?(z.return=R,ze=z):Nm(m);for(;v!==null;)ze=v,Cm(v),v=v.sibling;ze=m,Cl=k,An=ie}Pm(n)}else(m.subtreeFlags&8772)!==0&&v!==null?(v.return=m,ze=v):Pm(n)}}function Pm(n){for(;ze!==null;){var r=ze;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:An||Pl(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!An)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:xi(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Lp(r,v,f);break;case 3:var R=r.updateQueue;if(R!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Lp(r,R,l)}break;case 5:var k=r.stateNode;if(l===null&&r.flags&4){l=k;var z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ie=r.alternate;if(ie!==null){var _e=ie.memoizedState;if(_e!==null){var ve=_e.dehydrated;ve!==null&&zo(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||r.flags&512&&Zu(r)}catch(ge){Qt(r,r.return,ge)}}if(r===n){ze=null;break}if(l=r.sibling,l!==null){l.return=r.return,ze=l;break}ze=r.return}}function Lm(n){for(;ze!==null;){var r=ze;if(r===n){ze=null;break}var l=r.sibling;if(l!==null){l.return=r.return,ze=l;break}ze=r.return}}function Nm(n){for(;ze!==null;){var r=ze;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Pl(4,r)}catch(z){Qt(r,l,z)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(z){Qt(r,m,z)}}var v=r.return;try{Zu(r)}catch(z){Qt(r,v,z)}break;case 5:var R=r.return;try{Zu(r)}catch(z){Qt(r,R,z)}}}catch(z){Qt(r,r.return,z)}if(r===n){ze=null;break}var k=r.sibling;if(k!==null){k.return=r.return,ze=k;break}ze=r.return}}var Bx=Math.ceil,Ll=C.ReactCurrentDispatcher,ef=C.ReactCurrentOwner,li=C.ReactCurrentBatchConfig,Ct=0,gn=null,nn=null,Sn=0,Jn=0,Xs=Ar(0),an=0,ca=null,as=0,Nl=0,tf=0,ua=null,Gn=null,nf=0,Ys=1/0,sr=null,Dl=!1,rf=null,Dr=null,Il=!1,Ir=null,Ul=0,fa=0,sf=null,Fl=-1,Ol=0;function In(){return(Ct&6)!==0?Kt():Fl!==-1?Fl:Fl=Kt()}function Ur(n){return(n.mode&1)===0?1:(Ct&2)!==0&&Sn!==0?Sn&-Sn:Mx.transition!==null?(Ol===0&&(Ol=En()),Ol):(n=ut,n!==0||(n=window.event,n=n===void 0?16:Ih(n.type)),n)}function Si(n,r,l,f){if(50<fa)throw fa=0,sf=null,Error(t(185));sn(n,l,f),((Ct&2)===0||n!==gn)&&(n===gn&&((Ct&2)===0&&(Nl|=l),an===4&&Fr(n,Sn)),Wn(n,f),l===1&&Ct===0&&(r.mode&1)===0&&(Ys=Kt()+500,fl&&Cr()))}function Wn(n,r){var l=n.callbackNode;Nt(n,r);var f=Pt(n,n===gn?Sn:0);if(f===0)l!==null&&Xa(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&Xa(l),r===1)n.tag===0?Sx(Im.bind(null,n)):vp(Im.bind(null,n)),_x(function(){(Ct&6)===0&&Cr()}),l=null;else{switch(Nn(f)){case 1:l=j;break;case 4:l=ae;break;case 16:l=ee;break;case 536870912:l=Pe;break;default:l=ee}l=Hm(l,Dm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Dm(n,r){if(Fl=-1,Ol=0,(Ct&6)!==0)throw Error(t(327));var l=n.callbackNode;if(qs()&&n.callbackNode!==l)return null;var f=Pt(n,n===gn?Sn:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=kl(n,f);else{r=f;var m=Ct;Ct|=2;var v=Fm();(gn!==n||Sn!==r)&&(sr=null,Ys=Kt()+500,cs(n,r));do try{Hx();break}catch(k){Um(n,k)}while(!0);Mu(),Ll.current=v,Ct=m,nn!==null?r=0:(gn=null,Sn=0,r=an)}if(r!==0){if(r===2&&(m=Et(n),m!==0&&(f=m,r=of(n,m))),r===1)throw l=ca,cs(n,0),Fr(n,f),Wn(n,Kt()),l;if(r===6)Fr(n,f);else{if(m=n.current.alternate,(f&30)===0&&!zx(m)&&(r=kl(n,f),r===2&&(v=Et(n),v!==0&&(f=v,r=of(n,v))),r===1))throw l=ca,cs(n,0),Fr(n,f),Wn(n,Kt()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:us(n,Gn,sr);break;case 3:if(Fr(n,f),(f&130023424)===f&&(r=nf+500-Kt(),10<r)){if(Pt(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){In(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=fu(us.bind(null,n,Gn,sr),r);break}us(n,Gn,sr);break;case 4:if(Fr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var R=31-Oe(f);v=1<<R,R=r[R],R>m&&(m=R),f&=~v}if(f=m,f=Kt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*Bx(f/1960))-f,10<f){n.timeoutHandle=fu(us.bind(null,n,Gn,sr),f);break}us(n,Gn,sr);break;case 5:us(n,Gn,sr);break;default:throw Error(t(329))}}}return Wn(n,Kt()),n.callbackNode===l?Dm.bind(null,n):null}function of(n,r){var l=ua;return n.current.memoizedState.isDehydrated&&(cs(n,r).flags|=256),n=kl(n,r),n!==2&&(r=Gn,Gn=l,r!==null&&af(r)),n}function af(n){Gn===null?Gn=n:Gn.push.apply(Gn,n)}function zx(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],v=m.getSnapshot;m=m.value;try{if(!gi(v(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Fr(n,r){for(r&=~tf,r&=~Nl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Oe(r),f=1<<l;n[l]=-1,r&=~f}}function Im(n){if((Ct&6)!==0)throw Error(t(327));qs();var r=Pt(n,0);if((r&1)===0)return Wn(n,Kt()),null;var l=kl(n,r);if(n.tag!==0&&l===2){var f=Et(n);f!==0&&(r=f,l=of(n,f))}if(l===1)throw l=ca,cs(n,0),Fr(n,r),Wn(n,Kt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,us(n,Gn,sr),Wn(n,Kt()),null}function lf(n,r){var l=Ct;Ct|=1;try{return n(r)}finally{Ct=l,Ct===0&&(Ys=Kt()+500,fl&&Cr())}}function ls(n){Ir!==null&&Ir.tag===0&&(Ct&6)===0&&qs();var r=Ct;Ct|=1;var l=li.transition,f=ut;try{if(li.transition=null,ut=1,n)return n()}finally{ut=f,li.transition=l,Ct=r,(Ct&6)===0&&Cr()}}function cf(){Jn=Xs.current,Wt(Xs)}function cs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,gx(l)),nn!==null)for(l=nn.return;l!==null;){var f=l;switch(_u(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&cl();break;case 3:Gs(),Wt(zn),Wt(Tn),Pu();break;case 5:Ru(f);break;case 4:Gs();break;case 13:Wt($t);break;case 19:Wt($t);break;case 10:Eu(f.type._context);break;case 22:case 23:cf()}l=l.return}if(gn=n,nn=n=Or(n.current,null),Sn=Jn=r,an=0,ca=null,tf=Nl=as=0,Gn=ua=null,rs!==null){for(r=0;r<rs.length;r++)if(l=rs[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,v=l.pending;if(v!==null){var R=v.next;v.next=m,f.next=R}l.pending=f}rs=null}return n}function Um(n,r){do{var l=nn;try{if(Mu(),Sl.current=wl,Ml){for(var f=Zt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Ml=!1}if(os=0,mn=on=Zt=null,ia=!1,ra=0,ef.current=null,l===null||l.return===null){an=1,ca=r,nn=null;break}e:{var v=n,R=l.return,k=l,z=r;if(r=Sn,k.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ie=z,_e=k,ve=_e.tag;if((_e.mode&1)===0&&(ve===0||ve===11||ve===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Fe=om(R);if(Fe!==null){Fe.flags&=-257,am(Fe,R,k,v,r),Fe.mode&1&&sm(v,ie,r),r=Fe,z=ie;var Ge=r.updateQueue;if(Ge===null){var Xe=new Set;Xe.add(z),r.updateQueue=Xe}else Ge.add(z);break e}else{if((r&1)===0){sm(v,ie,r),uf();break e}z=Error(t(426))}}else if(qt&&k.mode&1){var tn=om(R);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),am(tn,R,k,v,r),yu(Ws(z,k));break e}}v=z=Ws(z,k),an!==4&&(an=2),ua===null?ua=[v]:ua.push(v),v=R;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var Z=im(v,z,r);Pp(v,Z);break e;case 1:k=z;var G=v.type,Q=v.stateNode;if((v.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(Dr===null||!Dr.has(Q)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=rm(v,k,r);Pp(v,Ee);break e}}v=v.return}while(v!==null)}km(l)}catch(Ke){r=Ke,nn===l&&l!==null&&(nn=l=l.return);continue}break}while(!0)}function Fm(){var n=Ll.current;return Ll.current=wl,n===null?wl:n}function uf(){(an===0||an===3||an===2)&&(an=4),gn===null||(as&268435455)===0&&(Nl&268435455)===0||Fr(gn,Sn)}function kl(n,r){var l=Ct;Ct|=2;var f=Fm();(gn!==n||Sn!==r)&&(sr=null,cs(n,r));do try{Vx();break}catch(m){Um(n,m)}while(!0);if(Mu(),Ct=l,Ll.current=f,nn!==null)throw Error(t(261));return gn=null,Sn=0,an}function Vx(){for(;nn!==null;)Om(nn)}function Hx(){for(;nn!==null&&!zc();)Om(nn)}function Om(n){var r=Vm(n.alternate,n,Jn);n.memoizedProps=n.pendingProps,r===null?km(n):nn=r,ef.current=null}function km(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Ix(l,r,Jn),l!==null){nn=l;return}}else{if(l=Ux(l,r),l!==null){l.flags&=32767,nn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,nn=null;return}}if(r=r.sibling,r!==null){nn=r;return}nn=r=n}while(r!==null);an===0&&(an=5)}function us(n,r,l){var f=ut,m=li.transition;try{li.transition=null,ut=1,Gx(n,r,l,f)}finally{li.transition=m,ut=f}return null}function Gx(n,r,l,f){do qs();while(Ir!==null);if((Ct&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Qr(n,v),n===gn&&(nn=gn=null,Sn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Il||(Il=!0,Hm(ee,function(){return qs(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=li.transition,li.transition=null;var R=ut;ut=1;var k=Ct;Ct|=4,ef.current=null,Ox(n,l),Rm(l,n),cx(cu),Ka=!!lu,cu=lu=null,n.current=l,kx(l),Vc(),Ct=k,ut=R,li.transition=v}else n.current=l;if(Il&&(Il=!1,Ir=n,Ul=m),v=n.pendingLanes,v===0&&(Dr=null),Ve(l.stateNode),Wn(n,Kt()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(Dl)throw Dl=!1,n=rf,rf=null,n;return(Ul&1)!==0&&n.tag!==0&&qs(),v=n.pendingLanes,(v&1)!==0?n===sf?fa++:(fa=0,sf=n):fa=0,Cr(),null}function qs(){if(Ir!==null){var n=Nn(Ul),r=li.transition,l=ut;try{if(li.transition=null,ut=16>n?16:n,Ir===null)var f=!1;else{if(n=Ir,Ir=null,Ul=0,(Ct&6)!==0)throw Error(t(331));var m=Ct;for(Ct|=4,ze=n.current;ze!==null;){var v=ze,R=v.child;if((ze.flags&16)!==0){var k=v.deletions;if(k!==null){for(var z=0;z<k.length;z++){var ie=k[z];for(ze=ie;ze!==null;){var _e=ze;switch(_e.tag){case 0:case 11:case 15:la(8,_e,v)}var ve=_e.child;if(ve!==null)ve.return=_e,ze=ve;else for(;ze!==null;){_e=ze;var ge=_e.sibling,Fe=_e.return;if(Em(_e),_e===ie){ze=null;break}if(ge!==null){ge.return=Fe,ze=ge;break}ze=Fe}}}var Ge=v.alternate;if(Ge!==null){var Xe=Ge.child;if(Xe!==null){Ge.child=null;do{var tn=Xe.sibling;Xe.sibling=null,Xe=tn}while(Xe!==null)}}ze=v}}if((v.subtreeFlags&2064)!==0&&R!==null)R.return=v,ze=R;else e:for(;ze!==null;){if(v=ze,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:la(9,v,v.return)}var Z=v.sibling;if(Z!==null){Z.return=v.return,ze=Z;break e}ze=v.return}}var G=n.current;for(ze=G;ze!==null;){R=ze;var Q=R.child;if((R.subtreeFlags&2064)!==0&&Q!==null)Q.return=R,ze=Q;else e:for(R=G;ze!==null;){if(k=ze,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Pl(9,k)}}catch(Ke){Qt(k,k.return,Ke)}if(k===R){ze=null;break e}var Ee=k.sibling;if(Ee!==null){Ee.return=k.return,ze=Ee;break e}ze=k.return}}if(Ct=m,Cr(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Ue,n)}catch{}f=!0}return f}finally{ut=l,li.transition=r}}return!1}function Bm(n,r,l){r=Ws(l,r),r=im(n,r,1),n=Lr(n,r,1),r=In(),n!==null&&(sn(n,1,r),Wn(n,r))}function Qt(n,r,l){if(n.tag===3)Bm(n,n,l);else for(;r!==null;){if(r.tag===3){Bm(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Dr===null||!Dr.has(f))){n=Ws(l,n),n=rm(r,n,1),r=Lr(r,n,1),n=In(),r!==null&&(sn(r,1,n),Wn(r,n));break}}r=r.return}}function Wx(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=In(),n.pingedLanes|=n.suspendedLanes&l,gn===n&&(Sn&l)===l&&(an===4||an===3&&(Sn&130023424)===Sn&&500>Kt()-nf?cs(n,0):tf|=l),Wn(n,r)}function zm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Vt,Vt<<=1,(Vt&130023424)===0&&(Vt=4194304)));var l=In();n=nr(n,r),n!==null&&(sn(n,r,l),Wn(n,l))}function jx(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),zm(n,l)}function Xx(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),zm(n,l)}var Vm;Vm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||zn.current)Hn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Hn=!1,Dx(n,r,l);Hn=(n.flags&131072)!==0}else Hn=!1,qt&&(r.flags&1048576)!==0&&yp(r,hl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;Rl(n,r),n=r.pendingProps;var m=Fs(r,Tn.current);Hs(r,l),m=Du(null,r,f,n,m,l);var v=Iu();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Vn(f)?(v=!0,ul(r)):v=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,bu(r),m.updater=bl,r.stateNode=m,m._reactInternals=r,zu(r,f,n,l),r=Wu(null,r,f,!0,v,l)):(r.tag=0,qt&&v&&gu(r),Dn(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(Rl(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=qx(f),n=xi(f,n),m){case 0:r=Gu(null,r,f,n,l);break e;case 1:r=hm(null,r,f,n,l);break e;case 11:r=lm(null,r,f,n,l);break e;case 14:r=cm(null,r,f,xi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:xi(f,m),Gu(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:xi(f,m),hm(n,r,f,m,l);case 3:e:{if(pm(r),n===null)throw Error(t(387));f=r.pendingProps,v=r.memoizedState,m=v.element,Cp(n,r),vl(r,f,null,l);var R=r.memoizedState;if(f=R.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){m=Ws(Error(t(423)),r),r=mm(n,r,f,l,m);break e}else if(f!==m){m=Ws(Error(t(424)),r),r=mm(n,r,f,l,m);break e}else for(Zn=br(r.stateNode.containerInfo.firstChild),$n=r,qt=!0,_i=null,l=Ap(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Bs(),f===m){r=rr(n,r,l);break e}Dn(n,r,f,l)}r=r.child}return r;case 5:return Np(r),n===null&&vu(r),f=r.type,m=r.pendingProps,v=n!==null?n.memoizedProps:null,R=m.children,uu(f,m)?R=null:v!==null&&uu(f,v)&&(r.flags|=32),dm(n,r),Dn(n,r,R,l),r.child;case 6:return n===null&&vu(r),null;case 13:return gm(n,r,l);case 4:return Au(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=zs(r,null,f,l):Dn(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:xi(f,m),lm(n,r,f,m,l);case 7:return Dn(n,r,r.pendingProps,l),r.child;case 8:return Dn(n,r,r.pendingProps.children,l),r.child;case 12:return Dn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,v=r.memoizedProps,R=m.value,Ht(gl,f._currentValue),f._currentValue=R,v!==null)if(gi(v.value,R)){if(v.children===m.children&&!zn.current){r=rr(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var k=v.dependencies;if(k!==null){R=v.child;for(var z=k.firstContext;z!==null;){if(z.context===f){if(v.tag===1){z=ir(-1,l&-l),z.tag=2;var ie=v.updateQueue;if(ie!==null){ie=ie.shared;var _e=ie.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),ie.pending=z}}v.lanes|=l,z=v.alternate,z!==null&&(z.lanes|=l),Tu(v.return,l,r),k.lanes|=l;break}z=z.next}}else if(v.tag===10)R=v.type===r.type?null:v.child;else if(v.tag===18){if(R=v.return,R===null)throw Error(t(341));R.lanes|=l,k=R.alternate,k!==null&&(k.lanes|=l),Tu(R,l,r),R=v.sibling}else R=v.child;if(R!==null)R.return=v;else for(R=v;R!==null;){if(R===r){R=null;break}if(v=R.sibling,v!==null){v.return=R.return,R=v;break}R=R.return}v=R}Dn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,Hs(r,l),m=oi(m),f=f(m),r.flags|=1,Dn(n,r,f,l),r.child;case 14:return f=r.type,m=xi(f,r.pendingProps),m=xi(f.type,m),cm(n,r,f,m,l);case 15:return um(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:xi(f,m),Rl(n,r),r.tag=1,Vn(f)?(n=!0,ul(r)):n=!1,Hs(r,l),tm(r,f,m),zu(r,f,m,l),Wu(null,r,f,!0,n,l);case 19:return xm(n,r,l);case 22:return fm(n,r,l)}throw Error(t(156,r.tag))};function Hm(n,r){return ja(n,r)}function Yx(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(n,r,l,f){return new Yx(n,r,l,f)}function ff(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qx(n){if(typeof n=="function")return ff(n)?1:0;if(n!=null){if(n=n.$$typeof,n===K)return 11;if(n===te)return 14}return 2}function Or(n,r){var l=n.alternate;return l===null?(l=ci(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Bl(n,r,l,f,m,v){var R=2;if(f=n,typeof n=="function")ff(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case D:return fs(l.children,m,v,r);case U:R=8,m|=8;break;case b:return n=ci(12,l,r,m|2),n.elementType=b,n.lanes=v,n;case Y:return n=ci(13,l,r,m),n.elementType=Y,n.lanes=v,n;case re:return n=ci(19,l,r,m),n.elementType=re,n.lanes=v,n;case $:return zl(l,m,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:R=10;break e;case O:R=9;break e;case K:R=11;break e;case te:R=14;break e;case se:R=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ci(R,l,r,m),r.elementType=n,r.type=f,r.lanes=v,r}function fs(n,r,l,f){return n=ci(7,n,f,r),n.lanes=l,n}function zl(n,r,l,f){return n=ci(22,n,f,r),n.elementType=$,n.lanes=l,n.stateNode={isHidden:!1},n}function df(n,r,l){return n=ci(6,n,null,r),n.lanes=l,n}function hf(n,r,l){return r=ci(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Kx(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function pf(n,r,l,f,m,v,R,k,z){return n=new Kx(n,r,l,k,z),r===1?(r=1,v===!0&&(r|=8)):r=0,v=ci(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(v),n}function $x(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function Gm(n){if(!n)return Rr;n=n._reactInternals;e:{if(ii(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Vn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Vn(l))return _p(n,l,r)}return r}function Wm(n,r,l,f,m,v,R,k,z){return n=pf(l,f,!0,n,m,v,R,k,z),n.context=Gm(null),l=n.current,f=In(),m=Ur(l),v=ir(f,m),v.callback=r??null,Lr(l,v,m),n.current.lanes=m,sn(n,m,f),Wn(n,f),n}function Vl(n,r,l,f){var m=r.current,v=In(),R=Ur(m);return l=Gm(l),r.context===null?r.context=l:r.pendingContext=l,r=ir(v,R),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Lr(m,r,R),n!==null&&(Si(n,m,R,v),xl(n,m,R)),R}function Hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function mf(n,r){jm(n,r),(n=n.alternate)&&jm(n,r)}function Zx(){return null}var Xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function gf(n){this._internalRoot=n}Gl.prototype.render=gf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Vl(n,r,null,null)},Gl.prototype.unmount=gf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ls(function(){Vl(null,n,null,null)}),r[Ji]=null}};function Gl(n){this._internalRoot=n}Gl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Li();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Er.length&&r!==0&&r<Er[l].priority;l++);Er.splice(l,0,n),l===0&&Nh(n)}};function _f(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Wl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function Jx(n,r,l,f,m){if(m){if(typeof f=="function"){var v=f;f=function(){var ie=Hl(R);v.call(ie)}}var R=Wm(r,f,n,0,null,!1,!1,"",Ym);return n._reactRootContainer=R,n[Ji]=R.current,Ko(n.nodeType===8?n.parentNode:n),ls(),R}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var k=f;f=function(){var ie=Hl(z);k.call(ie)}}var z=pf(n,0,!1,null,null,!1,!1,"",Ym);return n._reactRootContainer=z,n[Ji]=z.current,Ko(n.nodeType===8?n.parentNode:n),ls(function(){Vl(r,z,l,f)}),z}function jl(n,r,l,f,m){var v=l._reactRootContainer;if(v){var R=v;if(typeof m=="function"){var k=m;m=function(){var z=Hl(R);k.call(z)}}Vl(r,R,n,m)}else R=Jx(l,r,n,m,f);return Hl(R)}hn=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Bt(r.pendingLanes);l!==0&&(It(r,l|1),Wn(r,Kt()),(Ct&6)===0&&(Ys=Kt()+500,Cr()))}break;case 13:ls(function(){var f=nr(n,1);if(f!==null){var m=In();Si(f,n,1,m)}}),mf(n,1)}},pn=function(n){if(n.tag===13){var r=nr(n,134217728);if(r!==null){var l=In();Si(r,n,134217728,l)}mf(n,134217728)}},bs=function(n){if(n.tag===13){var r=Ur(n),l=nr(n,r);if(l!==null){var f=In();Si(l,n,r,f)}mf(n,r)}},Li=function(){return ut},Ph=function(n,r){var l=ut;try{return ut=n,r()}finally{ut=l}},Le=function(n,r,l){switch(r){case"input":if(Xt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=ll(f);if(!m)throw Error(t(90));en(f),Xt(f,m)}}}break;case"textarea":T(n,l);break;case"select":r=l.value,r!=null&&bt(n,!!l.multiple,r,!1)}},ot=lf,Ut=ls;var Qx={usingClientEntryPoint:!1,Events:[Jo,Is,ll,pe,Ae,lf]},da={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ev={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Uo(n),n===null?null:n.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||Zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Ue=Xl.inject(ev),we=Xl}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx,jn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_f(r))throw Error(t(200));return $x(n,r,null,l)},jn.createRoot=function(n,r){if(!_f(n))throw Error(t(299));var l=!1,f="",m=Xm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=pf(n,1,!1,null,null,l,!1,f,m),n[Ji]=r.current,Ko(n.nodeType===8?n.parentNode:n),new gf(r)},jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Uo(r),n=n===null?null:n.stateNode,n},jn.flushSync=function(n){return ls(n)},jn.hydrate=function(n,r,l){if(!Wl(r))throw Error(t(200));return jl(null,n,r,!0,l)},jn.hydrateRoot=function(n,r,l){if(!_f(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,v="",R=Xm;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),r=Wm(r,null,n,1,l??null,m,!1,v,R),n[Ji]=r.current,Ko(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new Gl(r)},jn.render=function(n,r,l){if(!Wl(r))throw Error(t(200));return jl(null,n,r,!1,l)},jn.unmountComponentAtNode=function(n){if(!Wl(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){jl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ji]=null})}),!0):!1},jn.unstable_batchedUpdates=lf,jn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Wl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return jl(n,r,l,!1,f)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var tg;function lv(){if(tg)return yf.exports;tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),yf.exports=av(),yf.exports}var ng;function cv(){if(ng)return Yl;ng=1;var o=lv();return Yl.createRoot=o.createRoot,Yl.hydrateRoot=o.hydrateRoot,Yl}var uv=cv();const fv=$e.createContext(void 0),dv=[{id:"default",name:"Monochrome",description:"Clean grayscale terminal"},{id:"vt320",name:"VT320",description:"Amber phosphor CRT"},{id:"cassette",name:"Cassette",description:"Green terminal with vignette"},{id:"coldwar",name:"Cold War",description:"Radar grid aesthetic"}];function hv({children:o}){const[e,t]=$e.useState(()=>typeof window<"u"&&localStorage.getItem("grainrad-theme")||"default");return $e.useEffect(()=>{document.body.classList.remove("theme-vt320","theme-cassette","theme-coldwar"),e!=="default"&&document.body.classList.add(`theme-${e}`),localStorage.setItem("grainrad-theme",e)},[e]),ce.jsx(fv.Provider,{value:{theme:e,setTheme:t,themes:dv},children:o})}const Ef={characterSet:"standard",customCharacters:" .:-=+*#%@",cellSize:8,spacing:.8,brightness:0,contrast:0,threshold:.5,colored:!1,bgColor:"#0a0a0a",fgColor:"#00ff00",backgroundOpacity:1,sortDirection:"vertical",sortComparator:"luma",sortThreshold:.5,trackingNoise:.3,trackingSpeed:1,colorBleed:.2,warpIntensity:.1,jitterAmount:.1,speed:1,trailLength:16,glow:0,randomization:0,fxOpacity:1,dotSize:4,dotAngle:45,cmykSeparation:!1,ditherAlgorithm:"bayer",colorPalette:"1bit",grainIntensity:0,grainSize:1,noiseIntensity:0,noiseColor:!1,scanlines:!1,scanlineIntensity:.15,blur:0,invert:!1,format:"png",quality:100},ig=[{name:"ASCII & Text",effects:[{id:"ascii",name:"ASCII",description:"Convert brightness to text characters"},{id:"dithering",name:"Dithering",description:"Bayer or Floyd-Steinberg dithering"}]},{name:"Pixel Effects",effects:[{id:"pixel-sorting",name:"Pixel Sorting",description:"Sort pixels by brightness or hue"},{id:"pixelate",name:"Pixelate",description:"Blocky pixel effect"},{id:"pixel-grid",name:"Pixel Grid",description:"Pixels with grid lines"},{id:"mosaic",name:"Mosaic",description:"Color-quantized blocks"}]},{name:"Matrix",effects:[{id:"matrix-rain",name:"Matrix Rain",description:"Falling code effect"},{id:"matrix-dots",name:"Matrix Dots",description:"Dot matrix display"}]},{name:"Halftone",effects:[{id:"halftone",name:"Halftone",description:"Newsprint dot pattern"},{id:"halftone-cmyk",name:"CMYK Halftone",description:"Four-color separation"},{id:"halftone-dots",name:"Halftone Dots",description:"Variable dot sizes"},{id:"crosses",name:"Crosses",description:"Cross-hatch pattern"}]},{name:"VHS / Analog",effects:[{id:"vhs-glitch",name:"VHS Glitch",description:"Old tape recording effect"},{id:"scanlines",name:"Scanlines",description:"CRT monitor lines"}]},{name:"Edge Detection",effects:[{id:"edge-detection",name:"Sobel Edge",description:"Sobel edge detection"},{id:"edge-lines",name:"Edge Lines",description:"ASCII edge lines"},{id:"convolution",name:"Convolution",description:"Custom kernel convolution"}]},{name:"Other",effects:[{id:"threshold",name:"Threshold",description:"Binary black/white"},{id:"invert",name:"Invert",description:"Negative image"},{id:"led",name:"LED",description:"LED matrix display"},{id:"grain",name:"Film Grain",description:"Analog film texture"},{id:"noise",name:"Digital Noise",description:"Sensor noise effect"}]}],pv=[{id:"terminal",name:"Terminal",description:"Classic green terminal look",effect:"ascii",settings:{characterSet:"standard",cellSize:6,colored:!1,fgColor:"#00ff00",bgColor:"#000000",backgroundOpacity:1}},{id:"matrix",name:"Matrix Rain",description:"Falling code from The Matrix",effect:"matrix-rain",settings:{cellSize:12,speed:2,trailLength:20,fgColor:"#00ff41",glow:.5}},{id:"newsprint",name:"Newsprint",description:"Black and white newspaper print",effect:"halftone",settings:{cellSize:4,colored:!1,dotSize:4,dotAngle:45,contrast:20}},{id:"broken-tape",name:"Broken Tape",description:"Heavy VHS warping with static",effect:"vhs-glitch",settings:{trackingNoise:.5,colorBleed:.3,warpIntensity:.2,scanlines:!0,scanlineIntensity:.2}},{id:"cyber",name:"Cyber",description:"High contrast neon pixel sorting",effect:"pixel-sorting",settings:{sortThreshold:.6,sortDirection:"vertical",sortComparator:"hue",colored:!0,contrast:30}},{id:"retro-game",name:"Retro Game",description:"8-bit pixel art style",effect:"pixelate",settings:{cellSize:8,colored:!0}},{id:"gameboy",name:"GameBoy",description:"Classic GameBoy green palette",effect:"dithering",settings:{ditherAlgorithm:"bayer",colorPalette:"gameboy",cellSize:4}},{id:"security-cam",name:"Security Cam",description:"Low-res surveillance look",effect:"scanlines",settings:{scanlineIntensity:.3,noiseIntensity:.2,contrast:20}}];function mv({activeEffect:o,setActiveEffect:e,onFileSelect:t,onWebcam:i,hasSource:s,onPresetSelect:a}){const c=$e.useRef(null),[u,d]=$e.useState(!1),[h,p]=$e.useState(ig.map(w=>w.name)),[g,x]=$e.useState(!0),[y,M]=$e.useState(!0),E=$e.useCallback(w=>{w.preventDefault(),d(!1);const C=w.dataTransfer.files[0];C&&(C.type.startsWith("image/")||C.type.startsWith("video/")||C.name.endsWith(".glb")||C.name.endsWith(".gltf"))&&t(C)},[t]),S=$e.useCallback(w=>{w.preventDefault(),d(!0)},[]),_=$e.useCallback(()=>{d(!1)},[]),A=w=>{p(C=>C.includes(w)?C.filter(L=>L!==w):[...C,w])};return ce.jsxs("div",{className:"w-[264px] xl:w-[282px] border-r border-term-border bg-term-panel flex flex-col overflow-hidden",children:[ce.jsxs("div",{className:"px-3 py-2 border-b border-term-border",children:[ce.jsx("h1",{className:"text-term-text-bright text-[14px] font-medium",children:"Grainrad"}),ce.jsx("p",{className:"text-term-text-dim text-[11px]",children:"Effects Editor"})]}),ce.jsxs("div",{className:"p-2 border-b border-term-border",children:[ce.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[ce.jsx("span",{className:"text-term-text-dim text-[12px] uppercase tracking-wide",children:"- Input"}),s&&ce.jsx("span",{className:"text-green-500 text-[11px]",children:"* Active"})]}),ce.jsxs("div",{onDrop:E,onDragOver:S,onDragLeave:_,onClick:()=>{var w;return(w=c.current)==null?void 0:w.click()},className:`
            border border-dashed rounded cursor-pointer transition-colors p-2.5 text-center
            ${u?"border-term-accent bg-term-accent/10":"border-term-border hover:border-term-text-dim"}
          `,children:[ce.jsx("p",{className:"text-term-text-dim text-[12px]",children:"Drop file or click to browse"}),ce.jsx("p",{className:"text-term-text-dim text-[10px] mt-1 opacity-60",children:"PNG, JPG, GIF, MP4, WebM"})]}),ce.jsx("input",{ref:c,type:"file",accept:"image/*,video/*",onChange:w=>{var C;return((C=w.target.files)==null?void 0:C[0])&&t(w.target.files[0])},className:"hidden"}),ce.jsxs("button",{type:"button",onClick:i,className:"w-full mt-1.5 px-2 py-1.5 text-[12px] border border-term-border text-term-text-dim hover:border-term-text hover:text-term-text transition-colors flex items-center justify-center gap-1.5",children:[ce.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:ce.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})}),"Use Webcam"]})]}),ce.jsxs("div",{className:"flex-1 overflow-y-auto",children:[ce.jsx("div",{className:"border-b border-term-border",children:ce.jsxs("button",{type:"button",onClick:()=>x(w=>!w),className:"w-full px-3 py-2 flex items-center justify-between text-left hover:bg-term-border/30 transition-colors",children:[ce.jsx("span",{className:"text-term-text-dim text-[12px] uppercase tracking-wide",children:"- Effects"}),ce.jsx("svg",{className:`w-4 h-4 text-term-text-dim transition-transform pointer-events-none ${g?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:ce.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})}),g&&ig.map(w=>ce.jsxs("div",{className:"border-b border-term-border last:border-b-0",children:[ce.jsxs("button",{type:"button",onClick:()=>A(w.name),className:"w-full px-3 py-1.5 flex items-center justify-between text-left hover:bg-term-border/30 transition-colors",children:[ce.jsx("span",{className:"text-term-text text-[13px] min-w-0 flex-1 truncate pr-2",children:w.name}),ce.jsx("svg",{className:`w-4 h-4 text-term-text-dim transition-transform pointer-events-none ${h.includes(w.name)?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:ce.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),h.includes(w.name)&&ce.jsx("div",{className:"pb-1",children:w.effects.map(C=>ce.jsxs("button",{type:"button",onClick:()=>e(C.id),className:`
                      w-full px-4 py-0.5 text-left text-[12px] transition-colors flex items-center gap-2 overflow-hidden
                      ${o===C.id?"text-term-accent bg-term-accent/10":"text-term-text-dim hover:text-term-text hover:bg-term-border/20"}
                    `,children:[ce.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${o===C.id?"bg-term-accent":"bg-term-text-dim/30"}`}),ce.jsx("span",{className:"min-w-0 flex-1 truncate",children:C.name})]},C.id))})]},w.name)),ce.jsxs("div",{className:"border-t border-term-border",children:[ce.jsxs("button",{type:"button",onClick:()=>M(!y),className:"w-full px-3 py-2 flex items-center justify-between text-left hover:bg-term-border/30 transition-colors",children:[ce.jsx("span",{className:"text-term-text-dim text-[12px] uppercase tracking-wide",children:"- Presets"}),ce.jsx("svg",{className:`w-4 h-4 text-term-text-dim transition-transform pointer-events-none ${y?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:ce.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),y&&ce.jsx("div",{className:"px-2 pb-2 space-y-0.5",children:pv.map(w=>ce.jsx("button",{type:"button",onClick:()=>a(w),className:"w-full px-2 py-0.5 text-[11px] text-term-text-dim hover:text-term-text hover:bg-term-border/30 transition-colors text-left truncate",children:w.name},w.id))})]})]}),ce.jsxs("div",{className:"px-3 py-2 border-t border-term-border flex gap-2.5 text-[10px] text-term-text-dim",children:[ce.jsx("a",{href:"#",className:"hover:text-term-text",children:"GitHub"}),ce.jsx("a",{href:"#",className:"hover:text-term-text",children:"About"}),ce.jsx("a",{href:"#",className:"hover:text-term-text",children:"Changelog"})]})]})}const rg=12e4,sg=" .:-=+*#%@",gv=" .':,;clodxkO0KXNWM",_v=" .:-=+*#%@";function xv({sourceImage:o,sourceType:e,activeEffect:t,settings:i,zoom:s,previewMode:a,onFpsUpdate:c,setIsProcessing:u,onExportReady:d}){const h=$e.useRef(null),p=$e.useRef(null),g=$e.useRef(null),x=$e.useRef(null),y=$e.useRef(null),M=$e.useRef(0),E=$e.useRef(0),S=$e.useRef(0),[_,A]=$e.useState(!1),[w,C]=$e.useState(null),[L,I]=$e.useState({width:0,height:0});$e.useEffect(()=>{d&&d(()=>h.current)},[d]),$e.useEffect(()=>{if(!(!o||o==="webcam")){if(A(!0),C(null),e==="image"){const U=new Image;U.onload=()=>{p.current=U,I({width:U.width,height:U.height}),A(!1)},U.onerror=()=>{C("Failed to load image"),A(!1)},U.src=o}else if(e==="video"){const U=document.createElement("video");U.onloadedmetadata=()=>{g.current=U,I({width:U.videoWidth,height:U.videoHeight}),A(!1),U.play()},U.onerror=()=>{C("Failed to load video"),A(!1)},U.src=o,U.loop=!0,U.muted=!0}return()=>{g.current&&(g.current.pause(),g.current=null)}}},[o,e]),$e.useEffect(()=>{if(e!=="webcam")return;let U=null;return(async()=>{try{A(!0),C(null),U=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720}});const P=document.createElement("video");P.srcObject=U,P.onloadedmetadata=()=>{g.current=P,I({width:P.videoWidth,height:P.videoHeight}),A(!1),P.play()}}catch{C("Failed to access webcam"),A(!1)}})(),()=>{U&&U.getTracks().forEach(P=>P.stop()),g.current&&(g.current.pause(),g.current=null)}},[e]);const D=$e.useCallback(()=>{const U=h.current,b=U==null?void 0:U.getContext("2d"),P=p.current||g.current;if(!U||!b||!P||!L.width||!L.height)return;const O=vv(L.width,L.height,i.cellSize),K=O.cols*O.cellSize,Y=O.rows*O.cellSize;(U.width!==K||U.height!==Y)&&(U.width=K,U.height=Y);const re=Sv(x,y,O.cols,O.rows),te=y.current;if(!re||!te)return;te.drawImage(P,0,0,O.cols,O.rows);const se=te.getImageData(0,0,O.cols,O.rows).data,$=yv(P);if(a==="original")b.imageSmoothingEnabled=!1,b.drawImage(P,0,0,$.width,$.height,0,0,U.width,U.height);else if(a==="split"){const fe=Math.floor(O.cols/2);cg(b,se,O.cols,O.rows,O.cellSize,t,i,fe);const oe=fe/O.cols,B=Math.floor($.width*oe);b.drawImage(P,B,0,$.width-B,$.height,fe*O.cellSize,0,U.width-fe*O.cellSize,U.height),b.strokeStyle="#00ff00",b.lineWidth=2,b.beginPath(),b.moveTo(fe*O.cellSize,0),b.lineTo(fe*O.cellSize,U.height),b.stroke()}else cg(b,se,O.cols,O.rows,O.cellSize,t,i,O.cols);const X=performance.now();S.current++,X-E.current>=1e3&&(c(S.current),S.current=0,E.current=X),(e==="video"||e==="webcam")&&(M.current=requestAnimationFrame(D))},[t,L.height,L.width,c,a,i,e]);return $e.useEffect(()=>{if(!(!o||_)){if(u(!0),E.current=performance.now(),S.current=0,e==="image"){D(),c(0),u(!1);return}return M.current=requestAnimationFrame(D),()=>{M.current&&cancelAnimationFrame(M.current),u(!1)}}},[_,c,D,u,o,e]),ce.jsxs("div",{className:"flex-1 min-w-0 min-h-0 bg-term-bg flex items-center justify-center overflow-auto p-2 relative",children:[_&&ce.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-term-bg/80 z-10",children:ce.jsx("div",{className:"text-term-text-dim text-sm",children:"Loading..."})}),w&&ce.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-term-bg/80 z-10",children:ce.jsx("div",{className:"text-red-500 text-sm",children:w})}),!o&&!_&&ce.jsxs("div",{className:"text-center",children:[ce.jsx("p",{className:"text-term-text-dim text-[18px] mb-1",children:"Waiting Input"}),ce.jsx("p",{className:"text-term-text-dim text-[14px] opacity-60",children:"Drop a file or capture a source"})]}),o&&ce.jsx("div",{className:"relative",style:{transform:`scale(${s/100})`,transformOrigin:"center center"},children:ce.jsx("canvas",{ref:h,className:"block",style:{imageRendering:"pixelated",filter:i.blur>0?`blur(${i.blur}px)`:"none"}})})]})}function Pn(o,e,t){return Math.max(e,Math.min(t,o))}function vv(o,e,t){let i=Math.max(1,Math.floor(t)),s=Math.max(1,Math.floor(o/i)),a=Math.max(1,Math.floor(e/i));const c=s*a;if(c>rg){const u=Math.sqrt(c/rg);i=Math.max(i,Math.ceil(i*u)),s=Math.max(1,Math.floor(o/i)),a=Math.max(1,Math.floor(e/i))}return{cellSize:i,cols:s,rows:a}}function yv(o){return o instanceof HTMLVideoElement?{width:o.videoWidth||1,height:o.videoHeight||1}:{width:o.naturalWidth||o.width||1,height:o.naturalHeight||o.height||1}}function Sv(o,e,t,i){o.current||(o.current=document.createElement("canvas"));const s=o.current;return(s.width!==t||s.height!==i||!e.current)&&(s.width=t,s.height=i,e.current=s.getContext("2d")),s}function Mv(o,e){switch(o){case"extended":return gv;case"blocks":return _v;case"custom":return e||sg;default:return sg}}function og(o,e){const t=(e.contrast+100)/100,i=e.brightness/100;return Pn((o-.5)*t+.5+i,0,1)}function ag(o,e){return[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5][(e&3)*4+(o&3)]/16}function Tf(o,e){if(e<=1)return o;const t=255/(e-1);return Pn(Math.round(o/t)*t,0,255)}function lg(o){const e=o.replace("#","");if(e.length!==6)return null;const t=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),s=parseInt(e.slice(4,6),16);return Number.isNaN(t)||Number.isNaN(i)||Number.isNaN(s)?null:{r:t,g:i,b:s}}function cg(o,e,t,i,s,a,c,u){const d=Mv(c.characterSet,c.customCharacters),h=t*i,p=new Float32Array(h),g=new Uint8ClampedArray(h),x=new Uint8ClampedArray(h),y=new Uint8ClampedArray(h),M=c.invert||a==="invert",E=lg(c.fgColor)??{r:0,g:255,b:65},S=performance.now();o.fillStyle=c.bgColor,o.fillRect(0,0,t*s,i*s),o.font=`${s*c.spacing}px "IBM Plex Mono", monospace`,o.textAlign="center",o.textBaseline="middle";for(let _=0;_<i;_++)for(let A=0;A<t;A++){const w=(_*t+A)*4;let C=e[w],L=e[w+1],I=e[w+2];M&&(C=255-C,L=255-L,I=255-I);const D=_*t+A;g[D]=C,x[D]=L,y[D]=I,p[D]=og((C+L+I)/765,c)}switch(a){case"convolution":{const _=[0,-1,0,-1,5,-1,0,-1,0];for(let A=0;A<i;A++)for(let w=0;w<u;w++){let C=0,L=0,I=0;for(let P=-1;P<=1;P++)for(let O=-1;O<=1;O++){const K=Pn(w+O,0,t-1),re=(Pn(A+P,0,i-1)*t+K)*4,te=_[(P+1)*3+(O+1)];C+=e[re]*te,L+=e[re+1]*te,I+=e[re+2]*te}let D=Pn(C,0,255),U=Pn(L,0,255),b=Pn(I,0,255);if(M&&(D=255-D,U=255-U,b=255-b),c.colored)o.fillStyle=`rgb(${D}, ${U}, ${b})`;else{const P=og((D+U+b)/765,c),O=Math.floor(P*255);o.fillStyle=`rgb(${O}, ${O}, ${O})`}o.fillRect(w*s,A*s,s,s)}break}case"edge-detection":case"edge-lines":{for(let _=1;_<i-1;_++)for(let A=1;A<Math.min(u,t-1);A++){const w=_*t+(A-1),C=_*t+(A+1),L=(_-1)*t+A,I=(_+1)*t+A,D=p[C]-p[w],U=p[I]-p[L];if(!(Math.sqrt(D*D+U*U)<=c.threshold))if(a==="edge-lines"){let P="|";Math.abs(U)>Math.abs(D)*1.5?P="-":D*U>0?P="\\":D*U<0&&(P="/"),o.fillStyle=c.fgColor,o.fillText(P,A*s+s/2,_*s+s/2)}else o.fillStyle=c.fgColor,o.fillRect(A*s,_*s,s,s)}break}case"threshold":{for(let _=0;_<i;_++)for(let A=0;A<u;A++){const w=_*t+A;o.fillStyle=p[w]>c.threshold?c.fgColor:c.bgColor,o.fillRect(A*s,_*s,s,s)}break}case"matrix-dots":{for(let _=0;_<i;_++)for(let A=0;A<u;A++){const w=_*t+A,C=Math.max(.5,p[w]*(s*.45));o.fillStyle=c.colored?`rgb(${g[w]}, ${x[w]}, ${y[w]})`:c.fgColor,o.beginPath(),o.arc(A*s+s/2,_*s+s/2,C,0,Math.PI*2),o.fill()}break}case"matrix-rain":{const _=Math.max(4,Math.floor(c.trailLength)),A=Math.max(.15,c.speed)*.04,w=c.randomization*.8;for(let C=0;C<i;C++)for(let L=0;L<u;L++){const I=C*t+L,D=(S*A+L*(2+w*9))%(i+_),U=(C-D+i+_)%(i+_),b=Pn(1-U/_,0,1),P=Pn(p[I]*.45+b*.9,0,1),O=Math.floor(Pn(P+ag(L,C)*.1,0,1)*(d.length-1)),K=d[O]??" ";if(c.colored)o.fillStyle=`rgb(${g[I]}, ${x[I]}, ${y[I]})`;else{const Y=Math.floor(70+P*185),re=Math.floor(E.r*(Y/255)),te=Math.floor(E.g*(Y/255)),se=Math.floor(E.b*(Y/255));o.fillStyle=`rgb(${re}, ${te}, ${se})`}o.fillText(K,L*s+s/2,C*s+s/2)}break}case"half-tone":{for(let _=0;_<i;_++)for(let A=0;A<u;A++){const w=_*t+A,C=Math.max(.1,(1-p[w])*s*.45);o.fillStyle=c.colored?`rgb(${g[w]}, ${x[w]}, ${y[w]})`:c.fgColor,o.beginPath(),o.arc(A*s+s/2,_*s+s/2,C,0,Math.PI*2),o.fill()}break}case"halftone-dots":{for(let _=0;_<i;_++)for(let A=0;A<u;A++){const w=_*t+A,C=Math.max(1,(1-p[w])*s*.85),L=Math.max(1,s*.16),I=A*s+s/2+(_%2===0?0:s*.08);o.fillStyle=c.colored?`rgb(${g[w]}, ${x[w]}, ${y[w]})`:c.fgColor,o.fillRect(I-C/2,_*s+s/2-L/2,C,L)}break}case"crosses":{for(let _=0;_<i;_++)for(let A=0;A<u;A++){const w=_*t+A,C=Math.max(1,(1-p[w])*s*.9),L=Math.max(1,s*.12),I=A*s+s/2,D=_*s+s/2;o.fillStyle=c.colored?`rgb(${g[w]}, ${x[w]}, ${y[w]})`:c.fgColor,o.fillRect(I-L/2,D-C/2,L,C),o.fillRect(I-C/2,D-L/2,C,L)}break}case"pixelate":case"pixel-grid":case"mosaic":case"invert":{const _=a==="pixel-grid"?1:0,A=a==="mosaic"?5:0,w=a==="invert";for(let C=0;C<i;C++)for(let L=0;L<u;L++){const I=C*t+L;let D=g[I],U=x[I],b=y[I];if(A>0&&(D=Tf(D,A),U=Tf(U,A),b=Tf(b,A)),c.colored||w)o.fillStyle=`rgb(${D}, ${U}, ${b})`;else{const P=Math.floor(p[I]*255);o.fillStyle=`rgb(${P}, ${P}, ${P})`}o.fillRect(L*s+_,C*s+_,s-_*2,s-_*2)}break}case"led":{const _=lg(c.fgColor)??{r:204,g:204,b:204};for(let A=0;A<i;A++)for(let w=0;w<u;w++){const C=A*t+w,L=p[C],I=Math.max(1,s*(.2+L*.26)),D=w*s+s/2,U=A*s+s/2;if(c.colored)o.fillStyle=`rgb(${g[C]}, ${x[C]}, ${y[C]})`;else{const b=Math.floor(_.r*(.3+L*.7)),P=Math.floor(_.g*(.3+L*.7)),O=Math.floor(_.b*(.3+L*.7));o.fillStyle=`rgb(${b}, ${P}, ${O})`}o.beginPath(),o.arc(D,U,I,0,Math.PI*2),o.fill(),o.fillStyle="rgba(255,255,255,0.16)",o.beginPath(),o.arc(D-I*.25,U-I*.25,Math.max(.5,I*.25),0,Math.PI*2),o.fill()}break}case"dithering":{for(let _=0;_<i;_++)for(let A=0;A<u;A++){const w=_*t+A,C=p[w]*(d.length-1),L=Math.floor(C),D=C-L>ag(A,_)?1:0,U=d[Math.min(d.length-1,L+D)]??" ";o.fillStyle=c.colored?`rgb(${g[w]}, ${x[w]}, ${y[w]})`:c.fgColor,o.fillText(U,A*s+s/2,_*s+s/2)}break}case"pixel-sorting":{const _=new Uint8ClampedArray(e.length),A=c.threshold;for(let w=0;w<i;w++){const C=[];for(let D=0;D<t;D++){const U=(w*t+D)*4,b=e[U],P=e[U+1],O=e[U+2],K=(b+P+O)/765;C.push({r:b,g:P,b:O,brightness:K,x:D})}const L=C.filter(D=>D.brightness>A);L.sort((D,U)=>D.brightness-U.brightness);let I=0;for(let D=0;D<t;D++){const U=(w*t+D)*4,b=C[D],P=b.brightness>A&&I<L.length?L[I++]:b;_[U]=P.r,_[U+1]=P.g,_[U+2]=P.b,_[U+3]=255}}for(let w=0;w<i;w++)for(let C=0;C<u;C++){const L=(w*t+C)*4;if(c.colored)o.fillStyle=`rgb(${_[L]}, ${_[L+1]}, ${_[L+2]})`;else{const I=Math.floor((_[L]+_[L+1]+_[L+2])/3);o.fillStyle=`rgb(${I}, ${I}, ${I})`}o.fillRect(C*s,w*s,s,s)}break}case"vhs-glitch":{const _=S*.001,A=Math.sin(_*2)*.5+.5;for(let w=0;w<i;w++){const C=Math.floor(Math.sin(w*.1+_*3)*A*3);for(let L=0;L<u;L++){const I=Pn(L+C,0,t-1),D=w*t+I,U=Math.floor(Math.sin(w*.05+_)*2),b=w*t+Pn(L+U,0,t-1),P=w*t+Pn(L-U,0,t-1),O=g[b],K=x[D],Y=y[P];if(c.colored)o.fillStyle=`rgb(${O}, ${K}, ${Y})`;else{const re=Math.floor((O+K+Y)/3);o.fillStyle=`rgb(${re}, ${re}, ${re})`}o.fillRect(L*s,w*s,s,s)}}if(Math.random()>.7){const w=Math.floor(Math.random()*i);o.fillStyle="rgba(255,255,255,0.3)",o.fillRect(0,w*s,t*s,s)}break}case"halftone-cmyk":{const _=[15,75,0,45],A=s*.5;for(let w=0;w<i;w++)for(let C=0;C<u;C++){const L=w*t+C,I=g[L],D=x[L],U=y[L],b=1-Math.max(I,D,U)/255,P=b<1?(1-I/255-b)/(1-b):0,O=b<1?(1-D/255-b)/(1-b):0,K=b<1?(1-U/255-b)/(1-b):0,Y=C*s+s/2,re=w*s+s/2;o.fillStyle=`rgba(0, 255, 255, ${P})`,o.beginPath(),o.arc(Y+Math.cos(_[0])*A*.2,re+Math.sin(_[0])*A*.2,A*P,0,Math.PI*2),o.fill(),o.fillStyle=`rgba(255, 0, 255, ${O})`,o.beginPath(),o.arc(Y+Math.cos(_[1])*A*.2,re+Math.sin(_[1])*A*.2,A*O,0,Math.PI*2),o.fill(),o.fillStyle=`rgba(255, 255, 0, ${K})`,o.beginPath(),o.arc(Y+Math.cos(_[2])*A*.2,re+Math.sin(_[2])*A*.2,A*K,0,Math.PI*2),o.fill(),o.fillStyle=`rgba(0, 0, 0, ${b})`,o.beginPath(),o.arc(Y,re,A*b,0,Math.PI*2),o.fill()}break}case"grain":{const _=c.grainIntensity;for(let A=0;A<i;A++)for(let w=0;w<u;w++){const C=A*t+w;let L=g[C],I=x[C],D=y[C];const U=(Math.random()-.5)*_*100;if(L=Pn(L+U,0,255),I=Pn(I+U,0,255),D=Pn(D+U,0,255),c.colored)o.fillStyle=`rgb(${Math.floor(L)}, ${Math.floor(I)}, ${Math.floor(D)})`;else{const b=Math.floor((L+I+D)/3);o.fillStyle=`rgb(${b}, ${b}, ${b})`}o.fillRect(w*s,A*s,s,s)}break}case"noise":{const _=c.noiseIntensity;for(let A=0;A<i;A++)for(let w=0;w<u;w++){const C=A*t+w;let L=g[C],I=x[C],D=y[C];if(Math.random()<_&&(L=Math.random()*255,I=Math.random()*255,D=Math.random()*255),c.colored)o.fillStyle=`rgb(${Math.floor(L)}, ${Math.floor(I)}, ${Math.floor(D)})`;else{const U=Math.floor((L+I+D)/3);o.fillStyle=`rgb(${U}, ${U}, ${U})`}o.fillRect(w*s,A*s,s,s)}break}case"scanlines":{for(let _=0;_<i;_++)for(let A=0;A<u;A++){const w=_*t+A,C=g[w],L=x[w],I=y[w],D=_%2===0?1:.7;if(c.colored)o.fillStyle=`rgb(${Math.floor(C*D)}, ${Math.floor(L*D)}, ${Math.floor(I*D)})`;else{const U=Math.floor((C+L+I)/3*D);o.fillStyle=`rgb(${U}, ${U}, ${U})`}o.fillRect(A*s,_*s,s,s)}break}case"ascii":default:{for(let _=0;_<i;_++)for(let A=0;A<u;A++){const w=_*t+A,C=d[Math.floor(p[w]*(d.length-1))]??" ";o.fillStyle=c.colored?`rgb(${g[w]}, ${x[w]}, ${y[w]})`:c.fgColor,o.fillText(C,A*s+s/2,_*s+s/2)}break}}if(c.noiseIntensity>0){const _=Math.min(.3,c.noiseIntensity*.25);o.fillStyle=`rgba(255,255,255,${_})`;const A=Math.min(2e4,Math.floor(t*i*c.noiseIntensity));for(let w=0;w<A;w++){const C=Math.floor(Math.random()*t)*s,L=Math.floor(Math.random()*i)*s;o.fillRect(C,L,1,1)}}if(c.scanlines){o.fillStyle="rgba(0,0,0,0.15)";for(let _=0;_<i*s;_+=2)o.fillRect(0,_,t*s,1)}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="182",po={ROTATE:0,DOLLY:1,PAN:2},ho={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ev=0,ug=1,Tv=2,Sc=1,wv=2,wa=3,gr=0,Yn=1,Bi=2,pr=0,mo=1,fg=2,dg=3,hg=4,bv=5,vs=100,Av=101,Rv=102,Cv=103,Pv=104,Lv=200,Nv=201,Dv=202,Iv=203,cd=204,ud=205,Uv=206,Fv=207,Ov=208,kv=209,Bv=210,zv=211,Vv=212,Hv=213,Gv=214,fd=0,dd=1,hd=2,xo=3,pd=4,md=5,gd=6,_d=7,I0=0,Wv=1,jv=2,Hi=0,U0=1,F0=2,O0=3,k0=4,B0=5,z0=6,V0=7,pg="attached",Xv="detached",H0=300,Ts=301,vo=302,xd=303,vd=304,Ic=306,yo=1e3,zi=1001,Rc=1002,cn=1003,G0=1004,ba=1005,un=1006,Mc=1007,dr=1008,ti=1009,W0=1010,j0=1011,La=1012,ch=1013,ji=1014,di=1015,_r=1016,uh=1017,fh=1018,Na=1020,X0=35902,Y0=35899,q0=1021,K0=1022,hi=1023,xr=1026,Ss=1027,dh=1028,hh=1029,So=1030,ph=1031,mh=1033,Ec=33776,Tc=33777,wc=33778,bc=33779,yd=35840,Sd=35841,Md=35842,Ed=35843,Td=36196,wd=37492,bd=37496,Ad=37488,Rd=37489,Cd=37490,Pd=37491,Ld=37808,Nd=37809,Dd=37810,Id=37811,Ud=37812,Fd=37813,Od=37814,kd=37815,Bd=37816,zd=37817,Vd=37818,Hd=37819,Gd=37820,Wd=37821,jd=36492,Xd=36494,Yd=36495,qd=36283,Kd=36284,$d=36285,Zd=36286,Da=2300,Ia=2301,wf=2302,mg=2400,gg=2401,_g=2402,Yv=2500,qv=0,$0=1,Jd=2,Kv=3200,Z0=0,$v=1,Yr="",Mn="srgb",Bn="srgb-linear",Cc="linear",Ft="srgb",Ks=7680,xg=519,Zv=512,Jv=513,Qv=514,gh=515,ey=516,ty=517,_h=518,ny=519,Qd=35044,vg="300 es",Vi=2e3,Pc=2001;function J0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function iy(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Ua(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ry(){const o=Ua("canvas");return o.style.display="block",o}const yg={};function Lc(...o){const e="THREE."+o.shift();console.log(e,...o)}function Je(...o){const e="THREE."+o.shift();console.warn(e,...o)}function st(...o){const e="THREE."+o.shift();console.error(e,...o)}function Fa(...o){const e=o.join(" ");e in yg||(yg[e]=!0,Je(...o))}function sy(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sg=1234567;const Ra=Math.PI/180,Mo=180/Math.PI;function Ai(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function _t(o,e,t){return Math.max(e,Math.min(t,o))}function xh(o,e){return(o%e+e)%e}function oy(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function ay(o,e,t){return o!==e?(t-o)/(e-o):0}function Ca(o,e,t){return(1-t)*o+t*e}function ly(o,e,t,i){return Ca(o,e,1-Math.exp(-t*i))}function cy(o,e=1){return e-Math.abs(xh(o,e*2)-e)}function uy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function fy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function dy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function hy(o,e){return o+Math.random()*(e-o)}function py(o){return o*(.5-Math.random())}function my(o){o!==void 0&&(Sg=o);let e=Sg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gy(o){return o*Ra}function _y(o){return o*Mo}function xy(o){return(o&o-1)===0&&o!==0}function vy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function yy(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Sy(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),d=c(t/2),h=a((e+i)/2),p=c((e+i)/2),g=a((e-i)/2),x=c((e-i)/2),y=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*p,d*g,d*x,u*h);break;case"YZY":o.set(d*x,u*p,d*g,u*h);break;case"ZXZ":o.set(d*g,d*x,u*p,u*h);break;case"XZX":o.set(u*p,d*M,d*y,u*h);break;case"YXY":o.set(d*y,u*p,d*M,u*h);break;case"ZYZ":o.set(d*M,d*y,u*p,u*h);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ot(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Q0={DEG2RAD:Ra,RAD2DEG:Mo,generateUUID:Ai,clamp:_t,euclideanModulo:xh,mapLinear:oy,inverseLerp:ay,lerp:Ca,damp:ly,pingpong:cy,smoothstep:uy,smootherstep:fy,randInt:dy,randFloat:hy,randFloatSpread:py,seededRandom:my,degToRad:gy,radToDeg:_y,isPowerOfTwo:xy,ceilPowerOfTwo:vy,floorPowerOfTwo:yy,setQuaternionFromProperEuler:Sy,normalize:Ot,denormalize:wi};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let d=i[s+0],h=i[s+1],p=i[s+2],g=i[s+3],x=a[c+0],y=a[c+1],M=a[c+2],E=a[c+3];if(u<=0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(u>=1){e[t+0]=x,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==x||h!==y||p!==M){let S=d*x+h*y+p*M+g*E;S<0&&(x=-x,y=-y,M=-M,E=-E,S=-S);let _=1-u;if(S<.9995){const A=Math.acos(S),w=Math.sin(A);_=Math.sin(_*A)/w,u=Math.sin(u*A)/w,d=d*_+x*u,h=h*_+y*u,p=p*_+M*u,g=g*_+E*u}else{d=d*_+x*u,h=h*_+y*u,p=p*_+M*u,g=g*_+E*u;const A=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=A,h*=A,p*=A,g*=A}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],d=i[s+1],h=i[s+2],p=i[s+3],g=a[c],x=a[c+1],y=a[c+2],M=a[c+3];return e[t]=u*M+p*g+d*y-h*x,e[t+1]=d*M+p*x+h*g-u*y,e[t+2]=h*M+p*y+u*x-d*g,e[t+3]=p*M-u*g-d*x-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(s/2),g=u(a/2),x=d(i/2),y=d(s/2),M=d(a/2);switch(c){case"XYZ":this._x=x*p*g+h*y*M,this._y=h*y*g-x*p*M,this._z=h*p*M+x*y*g,this._w=h*p*g-x*y*M;break;case"YXZ":this._x=x*p*g+h*y*M,this._y=h*y*g-x*p*M,this._z=h*p*M-x*y*g,this._w=h*p*g+x*y*M;break;case"ZXY":this._x=x*p*g-h*y*M,this._y=h*y*g+x*p*M,this._z=h*p*M+x*y*g,this._w=h*p*g-x*y*M;break;case"ZYX":this._x=x*p*g-h*y*M,this._y=h*y*g+x*p*M,this._z=h*p*M-x*y*g,this._w=h*p*g+x*y*M;break;case"YZX":this._x=x*p*g+h*y*M,this._y=h*y*g+x*p*M,this._z=h*p*M-x*y*g,this._w=h*p*g-x*y*M;break;case"XZY":this._x=x*p*g-h*y*M,this._y=h*y*g-x*p*M,this._z=h*p*M+x*y*g,this._w=h*p*g+x*y*M;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],g=t[10],x=i+u+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(p-d)*y,this._y=(a-h)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(p-d)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+h)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(a-h)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(a+h)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+s*h-a*d,this._y=s*p+c*d+a*u-i*h,this._z=a*p+c*h+i*d-s*u,this._w=c*p-i*u-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,a=-a,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*s-u*i),p=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+d*h+c*g-u*p,this.y=i+d*p+u*h-a*g,this.z=s+d*g+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=s*d-a*u,this.y=a*c-i*d,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bf.copy(this).projectOnVector(e),this.sub(bf)}reflect(e){return this.sub(bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bf=new q,Mg=new Xi;class ht{constructor(e,t,i,s,a,c,u,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,h)}set(e,t,i,s,a,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],g=i[7],x=i[2],y=i[5],M=i[8],E=s[0],S=s[3],_=s[6],A=s[1],w=s[4],C=s[7],L=s[2],I=s[5],D=s[8];return a[0]=c*E+u*A+d*L,a[3]=c*S+u*w+d*I,a[6]=c*_+u*C+d*D,a[1]=h*E+p*A+g*L,a[4]=h*S+p*w+g*I,a[7]=h*_+p*C+g*D,a[2]=x*E+y*A+M*L,a[5]=x*S+y*w+M*I,a[8]=x*_+y*C+M*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*d+s*a*h-s*c*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],g=p*c-u*h,x=u*d-p*a,y=h*a-c*d,M=t*g+i*x+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*h-p*i)*E,e[2]=(u*i-s*c)*E,e[3]=x*E,e[4]=(p*t-s*d)*E,e[5]=(s*a-u*t)*E,e[6]=y*E,e[7]=(i*d-h*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-s*h,s*d,-s*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Af.makeScale(e,t)),this}rotate(e){return this.premultiply(Af.makeRotation(-e)),this}translate(e,t){return this.premultiply(Af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Af=new ht,Eg=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tg=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function My(){const o={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ft&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(s.r=go(s.r),s.g=go(s.g),s.b=go(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yr?Cc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Fa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Fa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Bn]:{primaries:e,whitePoint:i,transfer:Cc,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),o}const Tt=My();function mr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function go(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $s;class Ey{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$s===void 0&&($s=Ua("canvas")),$s.width=e.width,$s.height=e.height;const s=$s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=$s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=mr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mr(t[i]/255)*255):t[i]=mr(t[i]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ty=0;class vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(Rf(s[c].image)):a.push(Rf(s[c]))}else a=Rf(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Rf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ey.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let wy=0;const Cf=new q;class vn extends ws{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=zi,s=zi,a=un,c=dr,u=hi,d=ti,h=vn.DEFAULT_ANISOTROPY,p=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Ai(),this.name="",this.source=new vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cf).x}get height(){return this.source.getSize(Cf).y}get depth(){return this.source.getSize(Cf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yo:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yo:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=H0;vn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,i=0,s=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,h=d[0],p=d[4],g=d[8],x=d[1],y=d[5],M=d[9],E=d[2],S=d[6],_=d[10];if(Math.abs(p-x)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+x)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,C=(y+1)/2,L=(_+1)/2,I=(p+x)/4,D=(g+E)/4,U=(M+S)/4;return w>C&&w>L?w<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(w),s=I/i,a=D/i):C>L?C<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),i=I/s,a=U/s):L<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(L),i=D/a,s=U/a),this.set(i,s,a,t),this}let A=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(x-p)*(x-p));return Math.abs(A)<.001&&(A=1),this.x=(S-M)/A,this.y=(g-E)/A,this.z=(x-p)/A,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class by extends ws{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const s={width:e,height:t,depth:i.depth},a=new vn(s);this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends by{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class e_ extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ay extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Mi):Mi.fromBufferAttribute(a,c),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ql.copy(i.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Kl.subVectors(this.max,pa),Zs.subVectors(e.a,pa),Js.subVectors(e.b,pa),Qs.subVectors(e.c,pa),Br.subVectors(Js,Zs),zr.subVectors(Qs,Js),ds.subVectors(Zs,Qs);let t=[0,-Br.z,Br.y,0,-zr.z,zr.y,0,-ds.z,ds.y,Br.z,0,-Br.x,zr.z,0,-zr.x,ds.z,0,-ds.x,-Br.y,Br.x,0,-zr.y,zr.x,0,-ds.y,ds.x,0];return!Pf(t,Zs,Js,Qs,Kl)||(t=[1,0,0,0,1,0,0,0,1],!Pf(t,Zs,Js,Qs,Kl))?!1:($l.crossVectors(Br,zr),t=[$l.x,$l.y,$l.z],Pf(t,Zs,Js,Qs,Kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new q,new q,new q,new q,new q,new q,new q,new q],Mi=new q,ql=new Ki,Zs=new q,Js=new q,Qs=new q,Br=new q,zr=new q,ds=new q,pa=new q,Kl=new q,$l=new q,hs=new q;function Pf(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){hs.fromArray(o,a);const u=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),d=e.dot(hs),h=t.dot(hs),p=i.dot(hs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const Ry=new Ki,ma=new q,Lf=new q;class $i{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ry.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ma,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Lf)),this.expandByPoint(ma.copy(e.center).sub(Lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ar=new q,Nf=new q,Zl=new q,Vr=new q,Df=new q,Jl=new q,If=new q;class ka{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Nf.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Nf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Zl),u=Vr.dot(this.direction),d=-Vr.dot(Zl),h=Vr.lengthSq(),p=Math.abs(1-c*c);let g,x,y,M;if(p>0)if(g=c*d-u,x=c*u-d,M=a*p,g>=0)if(x>=-M)if(x<=M){const E=1/p;g*=E,x*=E,y=g*(g+c*x+2*u)+x*(c*g+x+2*d)+h}else x=a,g=Math.max(0,-(c*x+u)),y=-g*g+x*(x+2*d)+h;else x=-a,g=Math.max(0,-(c*x+u)),y=-g*g+x*(x+2*d)+h;else x<=-M?(g=Math.max(0,-(-c*a+u)),x=g>0?-a:Math.min(Math.max(-a,-d),a),y=-g*g+x*(x+2*d)+h):x<=M?(g=0,x=Math.min(Math.max(-a,-d),a),y=x*(x+2*d)+h):(g=Math.max(0,-(c*a+u)),x=g>0?a:Math.min(Math.max(-a,-d),a),y=-g*g+x*(x+2*d)+h);else x=c>0?-a:a,g=Math.max(0,-(c*x+u)),y=-g*g+x*(x+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Nf).addScaledVector(Zl,x),y}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const i=ar.dot(this.direction),s=ar.dot(ar)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,x=this.origin;return h>=0?(i=(e.min.x-x.x)*h,s=(e.max.x-x.x)*h):(i=(e.max.x-x.x)*h,s=(e.min.x-x.x)*h),p>=0?(a=(e.min.y-x.y)*p,c=(e.max.y-x.y)*p):(a=(e.max.y-x.y)*p,c=(e.min.y-x.y)*p),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-x.z)*g,d=(e.max.z-x.z)*g):(u=(e.max.z-x.z)*g,d=(e.min.z-x.z)*g),i>d||u>s)||((u>i||i!==i)&&(i=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,i,s,a){Df.subVectors(t,e),Jl.subVectors(i,e),If.crossVectors(Df,Jl);let c=this.direction.dot(If),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Vr.subVectors(this.origin,e);const d=u*this.direction.dot(Jl.crossVectors(Vr,Jl));if(d<0)return null;const h=u*this.direction.dot(Df.cross(Vr));if(h<0||d+h>c)return null;const p=-u*Vr.dot(If);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,s,a,c,u,d,h,p,g,x,y,M,E,S){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,h,p,g,x,y,M,E,S)}set(e,t,i,s,a,c,u,d,h,p,g,x,y,M,E,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=a,_[5]=c,_[9]=u,_[13]=d,_[2]=h,_[6]=p,_[10]=g,_[14]=x,_[3]=y,_[7]=M,_[11]=E,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/eo.setFromMatrixColumn(e,0).length(),a=1/eo.setFromMatrixColumn(e,1).length(),c=1/eo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(s),h=Math.sin(s),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const x=c*p,y=c*g,M=u*p,E=u*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=y+M*h,t[5]=x-E*h,t[9]=-u*d,t[2]=E-x*h,t[6]=M+y*h,t[10]=c*d}else if(e.order==="YXZ"){const x=d*p,y=d*g,M=h*p,E=h*g;t[0]=x+E*u,t[4]=M*u-y,t[8]=c*h,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-M,t[6]=E+x*u,t[10]=c*d}else if(e.order==="ZXY"){const x=d*p,y=d*g,M=h*p,E=h*g;t[0]=x-E*u,t[4]=-c*g,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*p,t[9]=E-x*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const x=c*p,y=c*g,M=u*p,E=u*g;t[0]=d*p,t[4]=M*h-y,t[8]=x*h+E,t[1]=d*g,t[5]=E*h+x,t[9]=y*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const x=c*d,y=c*h,M=u*d,E=u*h;t[0]=d*p,t[4]=E-x*g,t[8]=M*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=y*g+M,t[10]=x-E*g}else if(e.order==="XZY"){const x=c*d,y=c*h,M=u*d,E=u*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=x*g+E,t[5]=c*p,t[9]=y*g-M,t[2]=M*g-y,t[6]=u*p,t[10]=E*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cy,e,Py)}lookAt(e,t,i){const s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Hr.crossVectors(i,Qn),Hr.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Hr.crossVectors(i,Qn)),Hr.normalize(),Ql.crossVectors(Qn,Hr),s[0]=Hr.x,s[4]=Ql.x,s[8]=Qn.x,s[1]=Hr.y,s[5]=Ql.y,s[9]=Qn.y,s[2]=Hr.z,s[6]=Ql.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],g=i[5],x=i[9],y=i[13],M=i[2],E=i[6],S=i[10],_=i[14],A=i[3],w=i[7],C=i[11],L=i[15],I=s[0],D=s[4],U=s[8],b=s[12],P=s[1],O=s[5],K=s[9],Y=s[13],re=s[2],te=s[6],se=s[10],$=s[14],X=s[3],fe=s[7],oe=s[11],B=s[15];return a[0]=c*I+u*P+d*re+h*X,a[4]=c*D+u*O+d*te+h*fe,a[8]=c*U+u*K+d*se+h*oe,a[12]=c*b+u*Y+d*$+h*B,a[1]=p*I+g*P+x*re+y*X,a[5]=p*D+g*O+x*te+y*fe,a[9]=p*U+g*K+x*se+y*oe,a[13]=p*b+g*Y+x*$+y*B,a[2]=M*I+E*P+S*re+_*X,a[6]=M*D+E*O+S*te+_*fe,a[10]=M*U+E*K+S*se+_*oe,a[14]=M*b+E*Y+S*$+_*B,a[3]=A*I+w*P+C*re+L*X,a[7]=A*D+w*O+C*te+L*fe,a[11]=A*U+w*K+C*se+L*oe,a[15]=A*b+w*Y+C*$+L*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],g=e[6],x=e[10],y=e[14],M=e[3],E=e[7],S=e[11],_=e[15],A=d*y-h*x,w=u*y-h*g,C=u*x-d*g,L=c*y-h*p,I=c*x-d*p,D=c*g-u*p;return t*(E*A-S*w+_*C)-i*(M*A-S*L+_*I)+s*(M*w-E*L+_*D)-a*(M*C-E*I+S*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],g=e[9],x=e[10],y=e[11],M=e[12],E=e[13],S=e[14],_=e[15],A=g*S*h-E*x*h+E*d*y-u*S*y-g*d*_+u*x*_,w=M*x*h-p*S*h-M*d*y+c*S*y+p*d*_-c*x*_,C=p*E*h-M*g*h+M*u*y-c*E*y-p*u*_+c*g*_,L=M*g*d-p*E*d-M*u*x+c*E*x+p*u*S-c*g*S,I=t*A+i*w+s*C+a*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=A*D,e[1]=(E*x*a-g*S*a-E*s*y+i*S*y+g*s*_-i*x*_)*D,e[2]=(u*S*a-E*d*a+E*s*h-i*S*h-u*s*_+i*d*_)*D,e[3]=(g*d*a-u*x*a-g*s*h+i*x*h+u*s*y-i*d*y)*D,e[4]=w*D,e[5]=(p*S*a-M*x*a+M*s*y-t*S*y-p*s*_+t*x*_)*D,e[6]=(M*d*a-c*S*a-M*s*h+t*S*h+c*s*_-t*d*_)*D,e[7]=(c*x*a-p*d*a+p*s*h-t*x*h-c*s*y+t*d*y)*D,e[8]=C*D,e[9]=(M*g*a-p*E*a-M*i*y+t*E*y+p*i*_-t*g*_)*D,e[10]=(c*E*a-M*u*a+M*i*h-t*E*h-c*i*_+t*u*_)*D,e[11]=(p*u*a-c*g*a-p*i*h+t*g*h+c*i*y-t*u*y)*D,e[12]=L*D,e[13]=(p*E*s-M*g*s+M*i*x-t*E*x-p*i*S+t*g*S)*D,e[14]=(M*u*s-c*E*s-M*i*d+t*E*d+c*i*S-t*u*S)*D,e[15]=(c*g*s-p*u*s+p*i*d-t*g*d-c*i*x+t*u*x)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-s*d,h*d+s*u,0,h*u+s*d,p*u+i,p*d-s*c,0,h*d-s*u,p*d+s*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,p=c+c,g=u+u,x=a*h,y=a*p,M=a*g,E=c*p,S=c*g,_=u*g,A=d*h,w=d*p,C=d*g,L=i.x,I=i.y,D=i.z;return s[0]=(1-(E+_))*L,s[1]=(y+C)*L,s[2]=(M-w)*L,s[3]=0,s[4]=(y-C)*I,s[5]=(1-(x+_))*I,s[6]=(S+A)*I,s[7]=0,s[8]=(M+w)*D,s[9]=(S-A)*D,s[10]=(1-(x+E))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let a=eo.set(s[0],s[1],s[2]).length();const c=eo.set(s[4],s[5],s[6]).length(),u=eo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),Ei.copy(this);const h=1/a,p=1/c,g=1/u;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=p,Ei.elements[5]*=p,Ei.elements[6]*=p,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,t.setFromRotationMatrix(Ei),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=Vi,d=!1){const h=this.elements,p=2*a/(t-e),g=2*a/(i-s),x=(t+e)/(t-e),y=(i+s)/(i-s);let M,E;if(d)M=a/(c-a),E=c*a/(c-a);else if(u===Vi)M=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(u===Pc)M=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=Vi,d=!1){const h=this.elements,p=2/(t-e),g=2/(i-s),x=-(t+e)/(t-e),y=-(i+s)/(i-s);let M,E;if(d)M=1/(c-a),E=c/(c-a);else if(u===Vi)M=-2/(c-a),E=-(c+a)/(c-a);else if(u===Pc)M=-1/(c-a),E=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=g,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const eo=new q,Ei=new gt,Cy=new q(0,0,0),Py=new q(1,1,1),Hr=new q,Ql=new q,Qn=new q,wg=new gt,bg=new Xi;class Yi{constructor(e=0,t=0,i=0,s=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],d=s[1],h=s[5],p=s[9],g=s[2],x=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bg.setFromEuler(this),this.setFromQuaternion(bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class t_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ly=0;const Ag=new q,to=new Xi,lr=new gt,ec=new q,ga=new q,Ny=new q,Dy=new Xi,Rg=new q(1,0,0),Cg=new q(0,1,0),Pg=new q(0,0,1),Lg={type:"added"},Iy={type:"removed"},no={type:"childadded",child:null},Uf={type:"childremoved",child:null};class Jt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new q,t=new Yi,i=new Xi,s=new q(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new ht}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(Rg,e)}rotateY(e){return this.rotateOnAxis(Cg,e)}rotateZ(e){return this.rotateOnAxis(Pg,e)}translateOnAxis(e,t){return Ag.copy(e).applyQuaternion(this.quaternion),this.position.add(Ag.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rg,e)}translateY(e){return this.translateOnAxis(Cg,e)}translateZ(e){return this.translateOnAxis(Pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ec.copy(e):ec.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(ga,ec,this.up):lr.lookAt(ec,ga,this.up),this.quaternion.setFromRotationMatrix(lr),s&&(lr.extractRotation(s.matrixWorld),to.setFromRotationMatrix(lr),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lg),no.child=e,this.dispatchEvent(no),no.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iy),Uf.child=e,this.dispatchEvent(Uf),Uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lg),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,Ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),g=c(e.shapes),x=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),x.length>0&&(i.skeletons=x),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Jt.DEFAULT_UP=new q(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new q,cr=new q,Ff=new q,ur=new q,io=new q,ro=new q,Ng=new q,Of=new q,kf=new q,Bf=new q,zf=new jt,Vf=new jt,Hf=new jt;class bi{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ti.subVectors(e,t),s.cross(Ti);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Ti.subVectors(s,t),cr.subVectors(i,t),Ff.subVectors(e,t);const c=Ti.dot(Ti),u=Ti.dot(cr),d=Ti.dot(Ff),h=cr.dot(cr),p=cr.dot(Ff),g=c*h-u*u;if(g===0)return a.set(0,0,0),null;const x=1/g,y=(h*d-u*p)*x,M=(c*p-u*d)*x;return a.set(1-y-M,M,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,i,s,a,c,u,d){return this.getBarycoord(e,t,i,s,ur)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,ur.x),d.addScaledVector(c,ur.y),d.addScaledVector(u,ur.z),d)}static getInterpolatedAttribute(e,t,i,s,a,c){return zf.setScalar(0),Vf.setScalar(0),Hf.setScalar(0),zf.fromBufferAttribute(e,t),Vf.fromBufferAttribute(e,i),Hf.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(zf,a.x),c.addScaledVector(Vf,a.y),c.addScaledVector(Hf,a.z),c}static isFrontFacing(e,t,i,s){return Ti.subVectors(i,t),cr.subVectors(e,t),Ti.cross(cr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ti.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return bi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;io.subVectors(s,i),ro.subVectors(a,i),Of.subVectors(e,i);const d=io.dot(Of),h=ro.dot(Of);if(d<=0&&h<=0)return t.copy(i);kf.subVectors(e,s);const p=io.dot(kf),g=ro.dot(kf);if(p>=0&&g<=p)return t.copy(s);const x=d*g-p*h;if(x<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(io,c);Bf.subVectors(e,a);const y=io.dot(Bf),M=ro.dot(Bf);if(M>=0&&y<=M)return t.copy(a);const E=y*h-d*M;if(E<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(i).addScaledVector(ro,u);const S=p*M-y*g;if(S<=0&&g-p>=0&&y-M>=0)return Ng.subVectors(a,s),u=(g-p)/(g-p+(y-M)),t.copy(s).addScaledVector(Ng,u);const _=1/(S+E+x);return c=E*_,u=x*_,t.copy(i).addScaledVector(io,c).addScaledVector(ro,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const n_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},tc={h:0,s:0,l:0};function Gf(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=xh(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Gf(c,a,e+1/3),this.g=Gf(c,a,e),this.b=Gf(c,a,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Mn){function i(a){a!==void 0&&parseFloat(a)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const i=n_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Tt.workingToColorSpace(Cn.copy(this),e),Math.round(_t(Cn.r*255,0,255))*65536+Math.round(_t(Cn.g*255,0,255))*256+Math.round(_t(Cn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Cn.copy(this),t);const i=Cn.r,s=Cn.g,a=Cn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const g=c-u;switch(h=p<=.5?g/(c+u):g/(2-c-u),c){case i:d=(s-a)/g+(s<a?6:0);break;case s:d=(a-i)/g+2;break;case a:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Mn){Tt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,i=Cn.g,s=Cn.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL(tc);const i=Ca(Gr.h,tc.h,t),s=Ca(Gr.s,tc.s,t),a=Ca(Gr.l,tc.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ct;ct.NAMES=n_;let Uy=0;class Wi extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=mo,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cd&&(i.blendSrc=this.blendSrc),this.blendDst!==ud&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ms extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=I0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new q,nc=new lt;let Fy=0;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qd,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),a=Ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qd&&(e.usage=this.usage),e}}class i_ extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class r_ extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ri extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Oy=0;const ui=new gt,Wf=new Jt,so=new q,ei=new Ki,_a=new Ki,xn=new q;class pi extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J0(e)?r_:i_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ht().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return Wf.lookAt(e),Wf.updateMatrix(),this.applyMatrix4(Wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ri(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];_a.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(ei.min,_a.min),ei.expandByPoint(xn),xn.addVectors(ei.max,_a.max),ei.expandByPoint(xn)):(ei.expandByPoint(_a.min),ei.expandByPoint(_a.max))}ei.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)xn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(xn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)xn.fromBufferAttribute(u,h),d&&(so.fromBufferAttribute(e,h),xn.add(so)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let U=0;U<i.count;U++)u[U]=new q,d[U]=new q;const h=new q,p=new q,g=new q,x=new lt,y=new lt,M=new lt,E=new q,S=new q;function _(U,b,P){h.fromBufferAttribute(i,U),p.fromBufferAttribute(i,b),g.fromBufferAttribute(i,P),x.fromBufferAttribute(a,U),y.fromBufferAttribute(a,b),M.fromBufferAttribute(a,P),p.sub(h),g.sub(h),y.sub(x),M.sub(x);const O=1/(y.x*M.y-M.x*y.y);isFinite(O)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(O),S.copy(g).multiplyScalar(y.x).addScaledVector(p,-M.x).multiplyScalar(O),u[U].add(E),u[b].add(E),u[P].add(E),d[U].add(S),d[b].add(S),d[P].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,b=A.length;U<b;++U){const P=A[U],O=P.start,K=P.count;for(let Y=O,re=O+K;Y<re;Y+=3)_(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const w=new q,C=new q,L=new q,I=new q;function D(U){L.fromBufferAttribute(s,U),I.copy(L);const b=u[U];w.copy(b),w.sub(L.multiplyScalar(L.dot(b))).normalize(),C.crossVectors(I,b);const O=C.dot(d[U])<0?-1:1;c.setXYZW(U,w.x,w.y,w.z,O)}for(let U=0,b=A.length;U<b;++U){const P=A[U],O=P.start,K=P.count;for(let Y=O,re=O+K;Y<re;Y+=3)D(e.getX(Y+0)),D(e.getX(Y+1)),D(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let x=0,y=i.count;x<y;x++)i.setXYZ(x,0,0,0);const s=new q,a=new q,c=new q,u=new q,d=new q,h=new q,p=new q,g=new q;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),E=e.getX(x+1),S=e.getX(x+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),p.subVectors(c,a),g.subVectors(s,a),p.cross(g),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),u.add(p),d.add(p),h.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let x=0,y=t.count;x<y;x+=3)s.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),p.subVectors(c,a),g.subVectors(s,a),p.cross(g),i.setXYZ(x+0,p.x,p.y,p.z),i.setXYZ(x+1,p.x,p.y,p.z),i.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,g=u.normalized,x=new h.constructor(d.length*p);let y=0,M=0;for(let E=0,S=d.length;E<S;E++){u.isInterleavedBufferAttribute?y=d[E]*u.data.stride+u.offset:y=d[E]*p;for(let _=0;_<p;_++)x[M++]=h[y++]}return new kn(x,p,g)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,i=this.index.array,s=this.attributes;for(const u in s){const d=s[u],h=e(d,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let p=0,g=h.length;p<g;p++){const x=h[p],y=e(x,i);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,x=h.length;g<x;g++){const y=h[g];p.push(y.toJSON(e.data))}p.length>0&&(s[d]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],g=a[h];for(let x=0,y=g.length;x<y;x++)p.push(g[x].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dg=new gt,ps=new ka,ic=new $i,Ig=new q,rc=new q,sc=new q,oc=new q,jf=new q,ac=new q,Ug=new q,lc=new q;class ni extends Jt{constructor(e=new pi,t=new Ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){ac.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=u[d],g=a[d];p!==0&&(jf.fromBufferAttribute(g,e),c?ac.addScaledVector(jf,p):ac.addScaledVector(jf.sub(t),p))}t.add(ac)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(a),ps.copy(e.ray).recast(e.near),!(ic.containsPoint(ps.origin)===!1&&(ps.intersectSphere(ic,Ig)===null||ps.origin.distanceToSquared(Ig)>(e.far-e.near)**2))&&(Dg.copy(a).invert(),ps.copy(e.ray).applyMatrix4(Dg),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,x=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=x.length;M<E;M++){const S=x[M],_=c[S.materialIndex],A=Math.max(S.start,y.start),w=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let C=A,L=w;C<L;C+=3){const I=u.getX(C),D=u.getX(C+1),U=u.getX(C+2);s=cc(this,_,e,i,h,p,g,I,D,U),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(u.count,y.start+y.count);for(let S=M,_=E;S<_;S+=3){const A=u.getX(S),w=u.getX(S+1),C=u.getX(S+2);s=cc(this,c,e,i,h,p,g,A,w,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=x.length;M<E;M++){const S=x[M],_=c[S.materialIndex],A=Math.max(S.start,y.start),w=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=A,L=w;C<L;C+=3){const I=C,D=C+1,U=C+2;s=cc(this,_,e,i,h,p,g,I,D,U),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let S=M,_=E;S<_;S+=3){const A=S,w=S+1,C=S+2;s=cc(this,c,e,i,h,p,g,A,w,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function ky(o,e,t,i,s,a,c,u){let d;if(e.side===Yn?d=i.intersectTriangle(c,a,s,!0,u):d=i.intersectTriangle(s,a,c,e.side===gr,u),d===null)return null;lc.copy(u),lc.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(lc);return h<t.near||h>t.far?null:{distance:h,point:lc.clone(),object:o}}function cc(o,e,t,i,s,a,c,u,d,h){o.getVertexPosition(u,rc),o.getVertexPosition(d,sc),o.getVertexPosition(h,oc);const p=ky(o,e,t,i,rc,sc,oc,Ug);if(p){const g=new q;bi.getBarycoord(Ug,rc,sc,oc,g),s&&(p.uv=bi.getInterpolatedAttribute(s,u,d,h,g,new lt)),a&&(p.uv1=bi.getInterpolatedAttribute(a,u,d,h,g,new lt)),c&&(p.normal=bi.getInterpolatedAttribute(c,u,d,h,g,new q),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const x={a:u,b:d,c:h,normal:new q,materialIndex:0};bi.getNormal(rc,sc,oc,x.normal),p.face=x,p.barycoord=g}return p}class Ba extends pi{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],p=[],g=[];let x=0,y=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new Ri(h,3)),this.setAttribute("normal",new Ri(p,3)),this.setAttribute("uv",new Ri(g,2));function M(E,S,_,A,w,C,L,I,D,U,b){const P=C/D,O=L/U,K=C/2,Y=L/2,re=I/2,te=D+1,se=U+1;let $=0,X=0;const fe=new q;for(let oe=0;oe<se;oe++){const B=oe*O-Y;for(let le=0;le<te;le++){const Ce=le*P-K;fe[E]=Ce*A,fe[S]=B*w,fe[_]=re,h.push(fe.x,fe.y,fe.z),fe[E]=0,fe[S]=0,fe[_]=I>0?1:-1,p.push(fe.x,fe.y,fe.z),g.push(le/D),g.push(1-oe/U),$+=1}}for(let oe=0;oe<U;oe++)for(let B=0;B<D;B++){const le=x+B+te*oe,Ce=x+B+te*(oe+1),Ye=x+(B+1)+te*(oe+1),Ze=x+(B+1)+te*oe;d.push(le,Ce,Ze),d.push(Ce,Ye,Ze),X+=6}u.addGroup(y,X,b),y+=X,x+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Fn(o){const e={};for(let t=0;t<o.length;t++){const i=Eo(o[t]);for(const s in i)e[s]=i[s]}return e}function By(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function s_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const zy={clone:Eo,merge:Fn};var Vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vy,this.fragmentShader=Hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=By(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class o_ extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new q,Fg=new lt,Og=new lt;class On extends o_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,Fg,Og),t.subVectors(Og,Fg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*i/h,s*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oo=-90,ao=1;class Gy extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new On(oo,ao,e,t);s.layers=this.layers,this.add(s);const a=new On(oo,ao,e,t);a.layers=this.layers,this.add(a);const c=new On(oo,ao,e,t);c.layers=this.layers,this.add(c);const u=new On(oo,ao,e,t);u.layers=this.layers,this.add(u);const d=new On(oo,ao,e,t);d.layers=this.layers,this.add(d);const h=new On(oo,ao,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,p]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(g,x,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class a_ extends vn{constructor(e=[],t=Ts,i,s,a,c,u,d,h,p){super(e,t,i,s,a,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l_ extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new a_(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ba(5,5,5),a=new qi({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:pr});a.uniforms.tEquirect.value=t;const c=new ni(s,a),u=t.minFilter;return t.minFilter===dr&&(t.minFilter=un),new Gy(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class Es extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class Xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),_=this._getHandJoint(h,E);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],x=p.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&x>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class jy extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qd,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new q;class yh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),a=Ot(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Lc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new kn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const kg=new q,Bg=new jt,zg=new jt,Yy=new q,Vg=new gt,uc=new q,Yf=new $i,Hg=new gt,qf=new ka;class qy extends ni{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pg,this.bindMatrix=new gt,this.bindMatrixInverse=new gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ki),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uc),this.boundingBox.expandByPoint(uc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $i),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uc),this.boundingSphere.expandByPoint(uc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yf.copy(this.boundingSphere),Yf.applyMatrix4(s),e.ray.intersectsSphere(Yf)!==!1&&(Hg.copy(s).invert(),qf.copy(e.ray).applyMatrix4(Hg),!(this.boundingBox!==null&&qf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new jt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xv?this.bindMatrixInverse.copy(this.bindMatrix).invert():Je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Bg.fromBufferAttribute(s.attributes.skinIndex,e),zg.fromBufferAttribute(s.attributes.skinWeight,e),kg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=zg.getComponent(a);if(c!==0){const u=Bg.getComponent(a);Vg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(Yy.copy(kg).applyMatrix4(Vg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class c_ extends Jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Sh extends vn{constructor(e=null,t=1,i=1,s,a,c,u,d,h=cn,p=cn,g,x){super(null,c,u,d,h,p,s,a,g,x),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gg=new gt,Ky=new gt;class Mh{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new gt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new gt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:Ky;Gg.multiplyMatrices(u,t[a]),Gg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Mh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Sh(t,e,e,hi,di);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(Je("Skeleton: No bone found with UUID:",a),c=new c_),this.bones.push(c),this.boneInverses.push(new gt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class eh extends kn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const lo=new gt,Wg=new gt,fc=[],jg=new Ki,$y=new gt,xa=new ni,va=new $i;class Zy extends ni{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new eh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,$y)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),jg.copy(e.boundingBox).applyMatrix4(lo),this.boundingBox.union(jg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),va.copy(e.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(i),e.ray.intersectsSphere(va)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,lo),Wg.multiplyMatrices(i,lo),xa.matrixWorld=Wg,xa.raycast(e,fc);for(let c=0,u=fc.length;c<u;c++){const d=fc[c];d.instanceId=a,d.object=this,t.push(d)}fc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new eh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sh(new Float32Array(s*this.count),s,this.count,dh,di));const a=this.morphTexture.source.data.data;let c=0;for(let h=0;h<i.length;h++)c+=i[h];const u=this.geometry.morphTargetsRelative?1:1-c,d=s*e;a[d]=u,a.set(i,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kf=new q,Jy=new q,Qy=new ht;class Xr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Kf.subVectors(i,t).cross(Jy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Kf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qy.getNormalMatrix(e),s=this.coplanarPoint(Kf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new $i,eS=new lt(.5,.5),dc=new q;class Eh{constructor(e=new Xr,t=new Xr,i=new Xr,s=new Xr,a=new Xr,c=new Xr){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi,i=!1){const s=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],p=a[4],g=a[5],x=a[6],y=a[7],M=a[8],E=a[9],S=a[10],_=a[11],A=a[12],w=a[13],C=a[14],L=a[15];if(s[0].setComponents(h-c,y-p,_-M,L-A).normalize(),s[1].setComponents(h+c,y+p,_+M,L+A).normalize(),s[2].setComponents(h+u,y+g,_+E,L+w).normalize(),s[3].setComponents(h-u,y-g,_-E,L-w).normalize(),i)s[4].setComponents(d,x,S,C).normalize(),s[5].setComponents(h-d,y-x,_-S,L-C).normalize();else if(s[4].setComponents(h-d,y-x,_-S,L-C).normalize(),t===Vi)s[5].setComponents(h+d,y+x,_+S,L+C).normalize();else if(t===Pc)s[5].setComponents(d,x,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=eS.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(dc.x=s.normal.x>0?e.max.x:e.min.x,dc.y=s.normal.y>0?e.max.y:e.min.y,dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class u_ extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nc=new q,Dc=new q,Xg=new gt,ya=new ka,hc=new $i,$f=new q,Yg=new q;class Th extends Jt{constructor(e=new pi,t=new u_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Nc.fromBufferAttribute(t,s-1),Dc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Nc.distanceTo(Dc);e.setAttribute("lineDistance",new Ri(i,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(s),hc.radius+=a,e.ray.intersectsSphere(hc)===!1)return;Xg.copy(s).invert(),ya.copy(e.ray).applyMatrix4(Xg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=this.isLineSegments?2:1,p=i.index,x=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=h){const _=p.getX(E),A=p.getX(E+1),w=pc(this,e,ya,d,_,A,E);w&&t.push(w)}if(this.isLineLoop){const E=p.getX(M-1),S=p.getX(y),_=pc(this,e,ya,d,E,S,M-1);_&&t.push(_)}}else{const y=Math.max(0,c.start),M=Math.min(x.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=h){const _=pc(this,e,ya,d,E,E+1,E);_&&t.push(_)}if(this.isLineLoop){const E=pc(this,e,ya,d,M-1,y,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function pc(o,e,t,i,s,a,c){const u=o.geometry.attributes.position;if(Nc.fromBufferAttribute(u,s),Dc.fromBufferAttribute(u,a),t.distanceSqToSegment(Nc,Dc,$f,Yg)>i)return;$f.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo($f);if(!(h<e.near||h>e.far))return{distance:h,point:Yg.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const qg=new q,Kg=new q;class tS extends Th{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)qg.fromBufferAttribute(t,s),Kg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+qg.distanceTo(Kg);e.setAttribute("lineDistance",new Ri(i,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nS extends Th{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class f_ extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $g=new gt,th=new ka,mc=new $i,gc=new q;class iS extends Jt{constructor(e=new pi,t=new f_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(s),mc.radius+=a,e.ray.intersectsSphere(mc)===!1)return;$g.copy(s).invert(),th.copy(e.ray).applyMatrix4($g);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=i.index,g=i.attributes.position;if(h!==null){const x=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let M=x,E=y;M<E;M++){const S=h.getX(M);gc.fromBufferAttribute(g,S),Zg(gc,S,d,s,e,t,this)}}else{const x=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let M=x,E=y;M<E;M++)gc.fromBufferAttribute(g,M),Zg(gc,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Zg(o,e,t,i,s,a,c){const u=th.distanceSqToPoint(o);if(u<t){const d=new q;th.closestPointToPoint(o,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Oa extends vn{constructor(e,t,i=ji,s,a,c,u=cn,d=cn,h,p=xr,g=1){if(p!==xr&&p!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:g};super(x,s,a,c,u,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rS extends Oa{constructor(e,t=ji,i=Ts,s,a,c=cn,u=cn,d,h=xr){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,i,s,a,c,u,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class d_ extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Uc extends pi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(s),h=u+1,p=d+1,g=e/u,x=t/d,y=[],M=[],E=[],S=[];for(let _=0;_<p;_++){const A=_*x-c;for(let w=0;w<h;w++){const C=w*g-a;M.push(C,-A,0),E.push(0,0,1),S.push(w/u),S.push(1-_/d)}}for(let _=0;_<d;_++)for(let A=0;A<u;A++){const w=A+h*_,C=A+h*(_+1),L=A+1+h*(_+1),I=A+1+h*_;y.push(w,C,I),y.push(C,L,I)}this.setIndex(y),this.setAttribute("position",new Ri(M,3)),this.setAttribute("normal",new Ri(E,3)),this.setAttribute("uv",new Ri(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.widthSegments,e.heightSegments)}}class sS extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wh extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Z0,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zi extends wh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class oS extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aS extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _c(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function lS(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Jg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let d=0;d!==e;++d)s[c++]=o[u+d]}return s}function h_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push(...c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class za{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cS extends za{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mg,endingEnd:mg}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],d=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case gg:a=e,u=2*t-i;break;case _g:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(d===void 0)switch(this.getSettings_().endingEnd){case gg:c=e,d=2*i-t;break;case _g:c=1,d=i+s[1]-s[0];break;default:c=e-1,d=t}const h=(i-t)*.5,p=this.valueSize;this._weightPrev=h/(t-u),this._weightNext=h/(d-i),this._offsetPrev=a*p,this._offsetNext=c*p}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,h=d-u,p=this._offsetPrev,g=this._offsetNext,x=this._weightPrev,y=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,_=-x*S+2*x*E-x*M,A=(1+x)*S+(-1.5-2*x)*E+(-.5+x)*M+1,w=(-1-y)*S+(1.5+y)*E+.5*M,C=y*S-y*E;for(let L=0;L!==u;++L)a[L]=_*c[p+L]+A*c[h+L]+w*c[d+L]+C*c[g+L];return a}}class uS extends za{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,h=d-u,p=(i-t)/(s-t),g=1-p;for(let x=0;x!==u;++x)a[x]=c[h+x]*g+c[d+x]*p;return a}}class fS extends za{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ci{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_c(t,this.TimeBufferType),this.values=_c(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_c(e.times,Array),values:_c(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Da:t=this.InterpolantFactoryMethodDiscrete;break;case Ia:t=this.InterpolantFactoryMethodLinear;break;case wf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Je("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return wf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const d=i[u];if(typeof d=="number"&&isNaN(d)){st("KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(c!==null&&c>d){st("KeyframeTrack: Out of order keys.",this,u,d,c),e=!1;break}c=d}if(s!==void 0&&iy(s))for(let u=0,d=s.length;u!==d;++u){const h=s[u];if(isNaN(h)){st("KeyframeTrack: Value is not a valid number.",this,u,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wf,a=e.length-1;let c=1;for(let u=1;u<a;++u){let d=!1;const h=e[u],p=e[u+1];if(h!==p&&(u!==1||h!==e[0]))if(s)d=!0;else{const g=u*i,x=g-i,y=g+i;for(let M=0;M!==i;++M){const E=t[g+M];if(E!==t[x+M]||E!==t[y+M]){d=!0;break}}}if(d){if(u!==c){e[c]=e[u];const g=u*i,x=c*i;for(let y=0;y!==i;++y)t[x+y]=t[g+y]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,d=c*i,h=0;h!==i;++h)t[d+h]=t[u+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ci.prototype.ValueTypeName="";Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Ia;class Ao extends Ci{constructor(e,t,i){super(e,t,i)}}Ao.prototype.ValueTypeName="bool";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=Da;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class p_ extends Ci{constructor(e,t,i,s){super(e,t,i,s)}}p_.prototype.ValueTypeName="color";class To extends Ci{constructor(e,t,i,s){super(e,t,i,s)}}To.prototype.ValueTypeName="number";class dS extends za{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=(i-t)/(s-t);let h=e*u;for(let p=h+u;h!==p;h+=4)Xi.slerpFlat(a,0,c,h-u,c,h,d);return a}}class wo extends Ci{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new dS(this.times,this.values,this.getValueSize(),e)}}wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends Ci{constructor(e,t,i){super(e,t,i)}}Ro.prototype.ValueTypeName="string";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=Da;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends Ci{constructor(e,t,i,s){super(e,t,i,s)}}bo.prototype.ValueTypeName="vector";class hS{constructor(e="",t=-1,i=[],s=Yv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(mS(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,c=i.length;a!==c;++a)t.push(Ci.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let d=[],h=[];d.push((u+a-1)%a,u,(u+1)%a),h.push(0,1,0);const p=lS(d);d=Jg(d,1,p),h=Jg(h,1,p),!s&&d[0]===0&&(d.push(a),h.push(h[0])),c.push(new To(".morphTargetInfluences["+t[u].name+"]",d,h).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,d=e.length;u<d;u++){const h=e[u],p=h.name.match(a);if(p&&p.length>1){const g=p[1];let x=s[g];x||(s[g]=x=[]),x.push(h)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(Je("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return st("AnimationClip: No animation in JSONLoader data."),null;const i=function(g,x,y,M,E){if(y.length!==0){const S=[],_=[];h_(y,S,_,M),S.length!==0&&E.push(new g(x,S,_))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const x=h[g].keys;if(!(!x||x.length===0))if(x[0].morphTargets){const y={};let M;for(M=0;M<x.length;M++)if(x[M].morphTargets)for(let E=0;E<x[M].morphTargets.length;E++)y[x[M].morphTargets[E]]=-1;for(const E in y){const S=[],_=[];for(let A=0;A!==x[M].morphTargets.length;++A){const w=x[M];S.push(w.time),_.push(w.morphTarget===E?1:0)}s.push(new To(".morphTargetInfluence["+E+"]",S,_))}d=y.length*c}else{const y=".bones["+t[g].name+"]";i(bo,y+".position",x,"pos",s),i(wo,y+".quaternion",x,"rot",s),i(bo,y+".scale",x,"scl",s)}}return s.length===0?null:new this(a,d,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function pS(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return To;case"vector":case"vector2":case"vector3":case"vector4":return bo;case"color":return p_;case"quaternion":return wo;case"bool":case"boolean":return Ao;case"string":return Ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function mS(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=pS(o.type);if(o.times===void 0){const t=[],i=[];h_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const hr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class gS{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,a===!1&&s.onStart!==void 0&&s.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return h.push(p,g),this},this.removeHandler=function(p){const g=h.indexOf(p);return g!==-1&&h.splice(g,2),this},this.getHandler=function(p){for(let g=0,x=h.length;g<x;g+=2){const y=h[g],M=h[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _S=new gS;class Co{constructor(e){this.manager=e!==void 0?e:_S,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Co.DEFAULT_MATERIAL_NAME="__DEFAULT";const fr={};class xS extends Error{constructor(e,t){super(e),this.response=t}}class m_ extends Co{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=hr.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(fr[e]!==void 0){fr[e].push({onLoad:t,onProgress:i,onError:s});return}fr[e]=[],fr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,d=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=fr[e],g=h.body.getReader(),x=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=x?parseInt(x):0,M=y!==0;let E=0;const S=new ReadableStream({start(_){A();function A(){g.read().then(({done:w,value:C})=>{if(w)_.close();else{E+=C.byteLength;const L=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let I=0,D=p.length;I<D;I++){const U=p[I];U.onProgress&&U.onProgress(L)}_.enqueue(C),A()}},w=>{_.error(w)})}}});return new Response(S)}else throw new xS(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return h.json();default:if(u==="")return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),x=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(x);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{hr.add(`file:${e}`,h);const p=fr[e];delete fr[e];for(let g=0,x=p.length;g<x;g++){const y=p[g];y.onLoad&&y.onLoad(h)}}).catch(h=>{const p=fr[e];if(p===void 0)throw this.manager.itemError(e),h;delete fr[e];for(let g=0,x=p.length;g<x;g++){const y=p[g];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const co=new WeakMap;class vS extends Co{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=hr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let g=co.get(c);g===void 0&&(g=[],co.set(c,g)),g.push({onLoad:t,onError:s})}return c}const u=Ua("img");function d(){p(),t&&t(this);const g=co.get(this)||[];for(let x=0;x<g.length;x++){const y=g[x];y.onLoad&&y.onLoad(this)}co.delete(this),a.manager.itemEnd(e)}function h(g){p(),s&&s(g),hr.remove(`image:${e}`);const x=co.get(this)||[];for(let y=0;y<x.length;y++){const M=x[y];M.onError&&M.onError(g)}co.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),hr.add(`image:${e}`,u),a.manager.itemStart(e),u.src=e,u}}class yS extends Co{constructor(e){super(e)}load(e,t,i,s){const a=new vn,c=new vS(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Fc extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Zf=new gt,Qg=new q,e0=new q;class bh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eh,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qg),e0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(e0),t.updateMatrixWorld(),Zf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class SS extends bh{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Mo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class MS extends Fc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new SS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class ES extends bh{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0}}class TS extends Fc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ES}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Oc extends o_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wS extends bh{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nh extends Fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new wS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class bS extends Fc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Jf=new WeakMap;class AS extends Co{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=hr.get(`image-bitmap:${e}`);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{if(Jf.has(c)===!0)s&&s(Jf.get(c)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(h),a.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader,u.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const d=fetch(e,u).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return hr.add(`image-bitmap:${e}`,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Jf.set(d,h),hr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});hr.add(`image-bitmap:${e}`,d),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class RS extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ah="\\[\\]\\.:\\/",CS=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",PS="[^"+Ah.replace("\\.","")+"]",LS=/((?:WC+[\/:])*)/.source.replace("WC",Rh),NS=/(WCOD+)?/.source.replace("WCOD",PS),DS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),IS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),US=new RegExp("^"+LS+NS+DS+IS+"$"),FS=["material","materials","bones","map"];class OS{constructor(e,t,i){const s=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class kt{constructor(e,t,i){this.path=t,this.parsedPath=i||kt.parseTrackName(t),this.node=kt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new kt.Composite(e,t,i):new kt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(CS,"")}static parseTrackName(e){const t=US.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);FS.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const d=i(u.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=kt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[s];if(c===void 0){const h=t.nodeName;st("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?u=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}kt.Composite=OS;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class t0{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kS extends ws{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Je("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function n0(o,e,t,i){const s=BS(i);switch(t){case q0:return o*e;case dh:return o*e/s.components*s.byteLength;case hh:return o*e/s.components*s.byteLength;case So:return o*e*2/s.components*s.byteLength;case ph:return o*e*2/s.components*s.byteLength;case K0:return o*e*3/s.components*s.byteLength;case hi:return o*e*4/s.components*s.byteLength;case mh:return o*e*4/s.components*s.byteLength;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wc:case bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sd:case Ed:return Math.max(o,16)*Math.max(e,8)/4;case yd:case Md:return Math.max(o,8)*Math.max(e,8)/2;case Td:case wd:case Ad:case Rd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bd:case Cd:case Pd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Od:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case zd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case jd:case Xd:case Yd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case qd:case Kd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case $d:case Zd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BS(o){switch(o){case ti:case W0:return{byteLength:1,components:1};case La:case j0:case _r:return{byteLength:2,components:1};case uh:case fh:return{byteLength:2,components:4};case ji:case ch:case di:return{byteLength:4,components:1};case X0:case Y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function g_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function zS(o){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,g=h.byteLength,x=o.createBuffer();o.bindBuffer(d,x),o.bufferData(d,h,p),u.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=o.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,d,h){const p=d.array,g=d.updateRanges;if(o.bindBuffer(h,u),g.length===0)o.bufferSubData(h,0,p);else{g.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<g.length;y++){const M=g[x],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++x,g[x]=E)}g.length=x+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];o.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(o.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,d),h.version=u.version}}return{get:s,remove:a,update:c}}var VS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eM=`#ifdef USE_IRIDESCENCE
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
#endif`,tM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uM=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,dM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RM=`#ifdef USE_GRADIENTMAP
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
}`,CM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,DM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,wE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,PE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UE=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,YE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,KE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,iT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sT=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,cT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,hT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:VS,alphahash_pars_fragment:HS,alphamap_fragment:GS,alphamap_pars_fragment:WS,alphatest_fragment:jS,alphatest_pars_fragment:XS,aomap_fragment:YS,aomap_pars_fragment:qS,batching_pars_vertex:KS,batching_vertex:$S,begin_vertex:ZS,beginnormal_vertex:JS,bsdfs:QS,iridescence_fragment:eM,bumpmap_pars_fragment:tM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:aM,color_pars_vertex:lM,color_vertex:cM,common:uM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:dM,displacementmap_pars_vertex:hM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:_M,colorspace_pars_fragment:xM,envmap_fragment:vM,envmap_common_pars_fragment:yM,envmap_pars_fragment:SM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:DM,envmap_vertex:EM,fog_vertex:TM,fog_pars_vertex:wM,fog_fragment:bM,fog_pars_fragment:AM,gradientmap_pars_fragment:RM,lightmap_pars_fragment:CM,lights_lambert_fragment:PM,lights_lambert_pars_fragment:LM,lights_pars_begin:NM,lights_toon_fragment:IM,lights_toon_pars_fragment:UM,lights_phong_fragment:FM,lights_phong_pars_fragment:OM,lights_physical_fragment:kM,lights_physical_pars_fragment:BM,lights_fragment_begin:zM,lights_fragment_maps:VM,lights_fragment_end:HM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:XM,map_fragment:YM,map_pars_fragment:qM,map_particle_fragment:KM,map_particle_pars_fragment:$M,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:JM,morphinstance_vertex:QM,morphcolor_vertex:eE,morphnormal_vertex:tE,morphtarget_pars_vertex:nE,morphtarget_vertex:iE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:oE,normal_pars_vertex:aE,normal_vertex:lE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:uE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:hE,opaque_fragment:pE,packing:mE,premultiplied_alpha_fragment:gE,project_vertex:_E,dithering_fragment:xE,dithering_pars_fragment:vE,roughnessmap_fragment:yE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:EE,shadowmap_vertex:TE,shadowmask_pars_fragment:wE,skinbase_vertex:bE,skinning_pars_vertex:AE,skinning_vertex:RE,skinnormal_vertex:CE,specularmap_fragment:PE,specularmap_pars_fragment:LE,tonemapping_fragment:NE,tonemapping_pars_fragment:DE,transmission_fragment:IE,transmission_pars_fragment:UE,uv_pars_fragment:FE,uv_pars_vertex:OE,uv_vertex:kE,worldpos_vertex:BE,background_vert:zE,background_frag:VE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:WE,cube_frag:jE,depth_vert:XE,depth_frag:YE,distance_vert:qE,distance_frag:KE,equirect_vert:$E,equirect_frag:ZE,linedashed_vert:JE,linedashed_frag:QE,meshbasic_vert:eT,meshbasic_frag:tT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:oT,meshnormal_frag:aT,meshphong_vert:lT,meshphong_frag:cT,meshphysical_vert:uT,meshphysical_frag:fT,meshtoon_vert:dT,meshtoon_frag:hT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:_T,sprite_vert:xT,sprite_frag:vT},De={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ki={basic:{uniforms:Fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ct(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Fn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Fn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ct(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Fn([De.points,De.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Fn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Fn([De.common,De.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Fn([De.sprite,De.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Fn([De.common,De.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Fn([De.lights,De.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ki.physical={uniforms:Fn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const xc={r:0,b:0,g:0},gs=new Yi,yT=new gt;function ST(o,e,t,i,s,a,c){const u=new ct(0);let d=a===!0?0:1,h,p,g=null,x=0,y=null;function M(w){let C=w.isScene===!0?w.background:null;return C&&C.isTexture&&(C=(w.backgroundBlurriness>0?t:e).get(C)),C}function E(w){let C=!1;const L=M(w);L===null?_(u,d):L&&L.isColor&&(_(L,1),C=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(w,C){const L=M(C);L&&(L.isCubeTexture||L.mapping===Ic)?(p===void 0&&(p=new ni(new Ba(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Eo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),gs.copy(C.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(yT.makeRotationFromEuler(gs)),p.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Ft,(g!==L||x!==L.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=L,x=L.version,y=o.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new ni(new Uc(2,2),new qi({name:"BackgroundMaterial",uniforms:Eo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Ft,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||x!==L.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,g=L,x=L.version,y=o.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function _(w,C){w.getRGB(xc,s_(o)),i.buffers.color.setClear(xc.r,xc.g,xc.b,C,c)}function A(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,C=1){u.set(w),d=C,_(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,_(u,d)},render:E,addToRenderList:S,dispose:A}}function MT(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=x(null);let a=s,c=!1;function u(P,O,K,Y,re){let te=!1;const se=g(Y,K,O);a!==se&&(a=se,h(a.object)),te=y(P,Y,K,re),te&&M(P,Y,K,re),re!==null&&e.update(re,o.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,C(P,O,K,Y),re!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function d(){return o.createVertexArray()}function h(P){return o.bindVertexArray(P)}function p(P){return o.deleteVertexArray(P)}function g(P,O,K){const Y=K.wireframe===!0;let re=i[P.id];re===void 0&&(re={},i[P.id]=re);let te=re[O.id];te===void 0&&(te={},re[O.id]=te);let se=te[Y];return se===void 0&&(se=x(d()),te[Y]=se),se}function x(P){const O=[],K=[],Y=[];for(let re=0;re<t;re++)O[re]=0,K[re]=0,Y[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:Y,object:P,attributes:{},index:null}}function y(P,O,K,Y){const re=a.attributes,te=O.attributes;let se=0;const $=K.getAttributes();for(const X in $)if($[X].location>=0){const oe=re[X];let B=te[X];if(B===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(B=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(B=P.instanceColor)),oe===void 0||oe.attribute!==B||B&&oe.data!==B.data)return!0;se++}return a.attributesNum!==se||a.index!==Y}function M(P,O,K,Y){const re={},te=O.attributes;let se=0;const $=K.getAttributes();for(const X in $)if($[X].location>=0){let oe=te[X];oe===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));const B={};B.attribute=oe,oe&&oe.data&&(B.data=oe.data),re[X]=B,se++}a.attributes=re,a.attributesNum=se,a.index=Y}function E(){const P=a.newAttributes;for(let O=0,K=P.length;O<K;O++)P[O]=0}function S(P){_(P,0)}function _(P,O){const K=a.newAttributes,Y=a.enabledAttributes,re=a.attributeDivisors;K[P]=1,Y[P]===0&&(o.enableVertexAttribArray(P),Y[P]=1),re[P]!==O&&(o.vertexAttribDivisor(P,O),re[P]=O)}function A(){const P=a.newAttributes,O=a.enabledAttributes;for(let K=0,Y=O.length;K<Y;K++)O[K]!==P[K]&&(o.disableVertexAttribArray(K),O[K]=0)}function w(P,O,K,Y,re,te,se){se===!0?o.vertexAttribIPointer(P,O,K,re,te):o.vertexAttribPointer(P,O,K,Y,re,te)}function C(P,O,K,Y){E();const re=Y.attributes,te=K.getAttributes(),se=O.defaultAttributeValues;for(const $ in te){const X=te[$];if(X.location>=0){let fe=re[$];if(fe===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),fe!==void 0){const oe=fe.normalized,B=fe.itemSize,le=e.get(fe);if(le===void 0)continue;const Ce=le.buffer,Ye=le.type,Ze=le.bytesPerElement,ne=Ye===o.INT||Ye===o.UNSIGNED_INT||fe.gpuType===ch;if(fe.isInterleavedBufferAttribute){const de=fe.data,Se=de.stride,ke=fe.offset;if(de.isInstancedInterleavedBuffer){for(let Ie=0;Ie<X.locationSize;Ie++)_(X.location+Ie,de.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)S(X.location+Ie);o.bindBuffer(o.ARRAY_BUFFER,Ce);for(let Ie=0;Ie<X.locationSize;Ie++)w(X.location+Ie,B/X.locationSize,Ye,oe,Se*Ze,(ke+B/X.locationSize*Ie)*Ze,ne)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<X.locationSize;de++)_(X.location+de,fe.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<X.locationSize;de++)S(X.location+de);o.bindBuffer(o.ARRAY_BUFFER,Ce);for(let de=0;de<X.locationSize;de++)w(X.location+de,B/X.locationSize,Ye,oe,B*Ze,B/X.locationSize*de*Ze,ne)}}else if(se!==void 0){const oe=se[$];if(oe!==void 0)switch(oe.length){case 2:o.vertexAttrib2fv(X.location,oe);break;case 3:o.vertexAttrib3fv(X.location,oe);break;case 4:o.vertexAttrib4fv(X.location,oe);break;default:o.vertexAttrib1fv(X.location,oe)}}}}A()}function L(){U();for(const P in i){const O=i[P];for(const K in O){const Y=O[K];for(const re in Y)p(Y[re].object),delete Y[re];delete O[K]}delete i[P]}}function I(P){if(i[P.id]===void 0)return;const O=i[P.id];for(const K in O){const Y=O[K];for(const re in Y)p(Y[re].object),delete Y[re];delete O[K]}delete i[P.id]}function D(P){for(const O in i){const K=i[O];if(K[P.id]===void 0)continue;const Y=K[P.id];for(const re in Y)p(Y[re].object),delete Y[re];delete K[P.id]}}function U(){b(),c=!0,a!==s&&(a=s,h(a.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:U,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:S,disableUnusedAttributes:A}}function ET(o,e,t){let i;function s(h){i=h}function a(h,p){o.drawArrays(i,h,p),t.update(p,i,1)}function c(h,p,g){g!==0&&(o.drawArraysInstanced(i,h,p,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,g);let y=0;for(let M=0;M<g;M++)y+=p[M];t.update(y,i,1)}function d(h,p,g,x){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)c(h[M],p[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,p,0,x,0,g);let M=0;for(let E=0;E<g;E++)M+=p[E]*x[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function TT(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(D){return!(D!==hi&&i.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(D){const U=D===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==ti&&i.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==di&&!U)}function d(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(Je("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),w=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:C,maxSamples:L,samples:I}}function wT(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Xr,u=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||i!==0||s;return s=x,i=g.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,x){t=p(g,x,0)},this.setState=function(g,x,y){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,_=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?p(null):h();else{const A=a?0:i,w=A*4;let C=_.clippingState||null;d.value=C,C=p(M,x,w,y);for(let L=0;L!==w;++L)C[L]=t[L];_.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,x,y,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const _=y+E*4,A=x.matrixWorldInverse;u.getNormalMatrix(A),(S===null||S.length<_)&&(S=new Float32Array(_));for(let w=0,C=y;w!==E;++w,C+=4)c.copy(g[w]).applyMatrix4(A,u),c.normal.toArray(S,C),S[C+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function bT(o){let e=new WeakMap;function t(c,u){return u===xd?c.mapping=Ts:u===vd&&(c.mapping=vo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===xd||u===vd)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new l_(d.height);return h.fromEquirectangularTexture(o,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const qr=4,i0=[.125,.215,.35,.446,.526,.582],ys=20,AT=256,Sa=new Oc,r0=new ct;let Qf=null,ed=0,td=0,nd=!1;const RT=new q;class s0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){const{size:c=256,position:u=RT}=a;Qf=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,s,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qf,ed,td),this._renderer.xr.enabled=nd,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qf=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:_r,format:hi,colorSpace:Bn,depthBuffer:!1},s=o0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o0(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CT(a)),this._blurMaterial=LT(a,e,t),this._ggxMaterial=PT(a,e,t)}return s}_compileMaterial(e){const t=new ni(new pi,e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,i,s,a){const d=new On(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(r0),g.toneMapping=Hi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new Ba,new Ms({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let _=!1;const A=e.background;A?A.isColor&&(S.color.copy(A),e.background=null,_=!0):(S.color.copy(r0),_=!0);for(let w=0;w<6;w++){const C=w%3;C===0?(d.up.set(0,h[w],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[w],a.y,a.z)):C===1?(d.up.set(0,0,h[w]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[w],a.z)):(d.up.set(0,h[w],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[w]));const L=this._cubeSize;uo(s,C*L,w>2?L:0,L,L),g.setRenderTarget(s),_&&g.render(E,d),g.render(e,d)}g.toneMapping=y,g.autoClear=x,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ts||e.mapping===vo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=l0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a0());const a=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;uo(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-p*p),x=0+h*1.25,y=g*x,{_lodMax:M}=this,E=this._sizeLods[i],S=3*E*(i>M-qr?i-M+qr:0),_=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,uo(a,S,_,3*E,2*E),s.setRenderTarget(a),s.render(u,Sa),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-i,uo(e,S,_,3*E,2*E),s.setRenderTarget(e),s.render(u,Sa)}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&st("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[s];g.material=h;const x=h.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ys-1),E=a/M,S=isFinite(a)?1+Math.floor(p*E):ys;S>ys&&Je(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ys}`);const _=[];let A=0;for(let D=0;D<ys;++D){const U=D/E,b=Math.exp(-U*U/2);_.push(b),D===0?A+=b:D<S&&(A+=2*b)}for(let D=0;D<_.length;D++)_[D]=_[D]/A;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=c==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:w}=this;x.dTheta.value=M,x.mipInt.value=w-i;const C=this._sizeLods[s],L=3*C*(s>w-qr?s-w+qr:0),I=4*(this._cubeSize-C);uo(t,L,I,3*C,2*C),d.setRenderTarget(t),d.render(g,Sa)}}function CT(o){const e=[],t=[],i=[];let s=o;const a=o-qr+1+i0.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);e.push(u);let d=1/u;c>o-qr?d=i0[c-o+qr-1]:c===0&&(d=0),t.push(d);const h=1/(u-2),p=-h,g=1+h,x=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,M=6,E=3,S=2,_=1,A=new Float32Array(E*M*y),w=new Float32Array(S*M*y),C=new Float32Array(_*M*y);for(let I=0;I<y;I++){const D=I%3*2/3-1,U=I>2?0:-1,b=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];A.set(b,E*M*I),w.set(x,S*M*I);const P=[I,I,I,I,I,I];C.set(P,_*M*I)}const L=new pi;L.setAttribute("position",new kn(A,E)),L.setAttribute("uv",new kn(w,S)),L.setAttribute("faceIndex",new kn(C,_)),i.push(new ni(L,null)),s>qr&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function o0(o,e,t){const i=new Gi(o,e,t);return i.texture.mapping=Ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function PT(o,e,t){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function LT(o,e,t){const i=new Float32Array(ys),s=new q(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function a0(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function l0(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function NT(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,h=d===xd||d===vd,p=d===Ts||d===vo;if(h||p){let g=e.get(u);const x=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return t===null&&(t=new s0(o)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return h&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new s0(o)),g=h?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function DT(o){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=o.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Fa("WebGLRenderer: "+i+" extension not supported."),s}}}function IT(o,e,t,i){const s={},a=new WeakMap;function c(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",c),delete s[x.id];const y=a.get(x);y&&(e.remove(y),a.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function u(g,x){return s[x.id]===!0||(x.addEventListener("dispose",c),s[x.id]=!0,t.memory.geometries++),x}function d(g){const x=g.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function h(g){const x=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const A=y.array;E=y.version;for(let w=0,C=A.length;w<C;w+=3){const L=A[w+0],I=A[w+1],D=A[w+2];x.push(L,I,I,D,D,L)}}else if(M!==void 0){const A=M.array;E=M.version;for(let w=0,C=A.length/3-1;w<C;w+=3){const L=w+0,I=w+1,D=w+2;x.push(L,I,I,D,D,L)}}else return;const S=new(J0(x)?r_:i_)(x,1);S.version=E;const _=a.get(g);_&&e.remove(_),a.set(g,S)}function p(g){const x=a.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&h(g)}else h(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:p}}function UT(o,e,t){let i;function s(x){i=x}let a,c;function u(x){a=x.type,c=x.bytesPerElement}function d(x,y){o.drawElements(i,y,a,x*c),t.update(y,i,1)}function h(x,y,M){M!==0&&(o.drawElementsInstanced(i,y,a,x*c,M),t.update(y,i,M))}function p(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,x,0,M);let S=0;for(let _=0;_<M;_++)S+=y[_];t.update(S,i,1)}function g(x,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)h(x[_]/c,y[_],E[_]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,x,0,E,0,M);let _=0;for(let A=0;A<M;A++)_+=y[A]*E[A];t.update(_,i,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function FT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:st("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function OT(o,e,t){const i=new WeakMap,s=new jt;function a(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let x=i.get(u);if(x===void 0||x.count!==g){let P=function(){U.dispose(),i.delete(u),u.removeEventListener("dispose",P)};var y=P;x!==void 0&&x.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let L=u.attributes.position.count*C,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*I*4*g),U=new e_(D,L,I,g);U.type=di,U.needsUpdate=!0;const b=C*4;for(let O=0;O<g;O++){const K=_[O],Y=A[O],re=w[O],te=L*I*4*O;for(let se=0;se<K.count;se++){const $=se*b;M===!0&&(s.fromBufferAttribute(K,se),D[te+$+0]=s.x,D[te+$+1]=s.y,D[te+$+2]=s.z,D[te+$+3]=0),E===!0&&(s.fromBufferAttribute(Y,se),D[te+$+4]=s.x,D[te+$+5]=s.y,D[te+$+6]=s.z,D[te+$+7]=0),S===!0&&(s.fromBufferAttribute(re,se),D[te+$+8]=s.x,D[te+$+9]=s.y,D[te+$+10]=s.z,D[te+$+11]=re.itemSize===4?s.w:1)}}x={count:g,texture:U,size:new lt(L,I)},i.set(u,x),u.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const E=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:a}}function kT(o,e,t,i){let s=new WeakMap;function a(d){const h=i.render.frame,p=d.geometry,g=e.get(d,p);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const x=d.skeleton;s.get(x)!==h&&(x.update(),s.set(x,h))}return g}function c(){s=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}const BT={[U0]:"LINEAR_TONE_MAPPING",[F0]:"REINHARD_TONE_MAPPING",[O0]:"CINEON_TONE_MAPPING",[k0]:"ACES_FILMIC_TONE_MAPPING",[z0]:"AGX_TONE_MAPPING",[V0]:"NEUTRAL_TONE_MAPPING",[B0]:"CUSTOM_TONE_MAPPING"};function zT(o,e,t,i,s){const a=new Gi(e,t,{type:o,depthBuffer:i,stencilBuffer:s}),c=new Gi(e,t,{type:_r,depthBuffer:!1,stencilBuffer:!1}),u=new pi;u.setAttribute("position",new Ri([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ri([0,2,0,0,2,0],2));const d=new sS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ni(u,d),p=new Oc(-1,1,1,-1,0,1);let g=null,x=null,y=!1,M,E=null,S=[],_=!1;this.setSize=function(A,w){a.setSize(A,w),c.setSize(A,w);for(let C=0;C<S.length;C++){const L=S[C];L.setSize&&L.setSize(A,w)}},this.setEffects=function(A){S=A,_=S.length>0&&S[0].isRenderPass===!0;const w=a.width,C=a.height;for(let L=0;L<S.length;L++){const I=S[L];I.setSize&&I.setSize(w,C)}},this.begin=function(A,w){if(y||A.toneMapping===Hi&&S.length===0)return!1;if(E=w,w!==null){const C=w.width,L=w.height;(a.width!==C||a.height!==L)&&this.setSize(C,L)}return _===!1&&A.setRenderTarget(a),M=A.toneMapping,A.toneMapping=Hi,!0},this.hasRenderPass=function(){return _},this.end=function(A,w){A.toneMapping=M,y=!0;let C=a,L=c;for(let I=0;I<S.length;I++){const D=S[I];if(D.enabled!==!1&&(D.render(A,L,C,w),D.needsSwap!==!1)){const U=C;C=L,L=U}}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,d.defines={},Tt.getTransfer(g)===Ft&&(d.defines.SRGB_TRANSFER="");const I=BT[x];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=C.texture,A.setRenderTarget(E),A.render(h,p),E=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),c.dispose(),u.dispose(),d.dispose()}}const __=new vn,ih=new Oa(1,1),x_=new e_,v_=new Ay,y_=new a_,c0=[],u0=[],f0=new Float32Array(16),d0=new Float32Array(9),h0=new Float32Array(4);function Po(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=c0[s];if(a===void 0&&(a=new Float32Array(s),c0[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function fn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function dn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Bc(o,e){let t=u0[e];t===void 0&&(t=new Int32Array(e),u0[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function VT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function HT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;o.uniform2fv(this.addr,e),dn(t,e)}}function GT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;o.uniform3fv(this.addr,e),dn(t,e)}}function WT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;o.uniform4fv(this.addr,e),dn(t,e)}}function jT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;h0.set(i),o.uniformMatrix2fv(this.addr,!1,h0),dn(t,i)}}function XT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;d0.set(i),o.uniformMatrix3fv(this.addr,!1,d0),dn(t,i)}}function YT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;f0.set(i),o.uniformMatrix4fv(this.addr,!1,f0),dn(t,i)}}function qT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function KT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;o.uniform2iv(this.addr,e),dn(t,e)}}function $T(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;o.uniform3iv(this.addr,e),dn(t,e)}}function ZT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;o.uniform4iv(this.addr,e),dn(t,e)}}function JT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function QT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;o.uniform2uiv(this.addr,e),dn(t,e)}}function e1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;o.uniform3uiv(this.addr,e),dn(t,e)}}function t1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;o.uniform4uiv(this.addr,e),dn(t,e)}}function n1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(ih.compareFunction=t.isReversedDepthBuffer()?_h:gh,a=ih):a=__,t.setTexture2D(e||a,s)}function i1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||v_,s)}function r1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||y_,s)}function s1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||x_,s)}function o1(o){switch(o){case 5126:return VT;case 35664:return HT;case 35665:return GT;case 35666:return WT;case 35674:return jT;case 35675:return XT;case 35676:return YT;case 5124:case 35670:return qT;case 35667:case 35671:return KT;case 35668:case 35672:return $T;case 35669:case 35673:return ZT;case 5125:return JT;case 36294:return QT;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return s1}}function a1(o,e){o.uniform1fv(this.addr,e)}function l1(o,e){const t=Po(e,this.size,2);o.uniform2fv(this.addr,t)}function c1(o,e){const t=Po(e,this.size,3);o.uniform3fv(this.addr,t)}function u1(o,e){const t=Po(e,this.size,4);o.uniform4fv(this.addr,t)}function f1(o,e){const t=Po(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function d1(o,e){const t=Po(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function h1(o,e){const t=Po(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function p1(o,e){o.uniform1iv(this.addr,e)}function m1(o,e){o.uniform2iv(this.addr,e)}function g1(o,e){o.uniform3iv(this.addr,e)}function _1(o,e){o.uniform4iv(this.addr,e)}function x1(o,e){o.uniform1uiv(this.addr,e)}function v1(o,e){o.uniform2uiv(this.addr,e)}function y1(o,e){o.uniform3uiv(this.addr,e)}function S1(o,e){o.uniform4uiv(this.addr,e)}function M1(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);fn(i,a)||(o.uniform1iv(this.addr,a),dn(i,a));let c;this.type===o.SAMPLER_2D_SHADOW?c=ih:c=__;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,a[u])}function E1(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);fn(i,a)||(o.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||v_,a[c])}function T1(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);fn(i,a)||(o.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||y_,a[c])}function w1(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);fn(i,a)||(o.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||x_,a[c])}function b1(o){switch(o){case 5126:return a1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return d1;case 35676:return h1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return x1;case 36294:return v1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return w1}}class A1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=o1(t.type)}}class R1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b1(t.type)}}class C1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const id=/(\w+)(\])?(\[|\.)?/g;function p0(o,e){o.seq.push(e),o.map[e.id]=e}function P1(o,e,t){const i=o.name,s=i.length;for(id.lastIndex=0;;){const a=id.exec(i),c=id.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===s){p0(t,h===void 0?new A1(u,o,e):new R1(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new C1(u),p0(t,g)),t=g}}}class Ac{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);P1(u,d,this)}const s=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):a.push(c);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function m0(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const L1=37297;let N1=0;function D1(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const g0=new ht;function I1(o){Tt._getMatrix(g0,Tt.workingColorSpace,o);const e=`mat3( ${g0.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Cc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function _0(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+D1(o.getShaderSource(e),u)}else return a}function U1(o,e){const t=I1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const F1={[U0]:"Linear",[F0]:"Reinhard",[O0]:"Cineon",[k0]:"ACESFilmic",[z0]:"AgX",[V0]:"Neutral",[B0]:"Custom"};function O1(o,e){const t=F1[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vc=new q;function k1(){Tt.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),e=vc.y.toFixed(4),t=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function z1(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function V1(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function Aa(o){return o!==""}function x0(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function v0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(o){return o.replace(H1,W1)}const G1=new Map;function W1(o,e){let t=mt[e];if(t===void 0){const i=G1.get(e);if(i!==void 0)t=mt[i],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rh(t)}const j1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(o){return o.replace(j1,X1)}function X1(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function S0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Y1={[Sc]:"SHADOWMAP_TYPE_PCF",[wa]:"SHADOWMAP_TYPE_VSM"};function q1(o){return Y1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K1={[Ts]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE",[Ic]:"ENVMAP_TYPE_CUBE_UV"};function $1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":K1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Z1={[vo]:"ENVMAP_MODE_REFRACTION"};function J1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Z1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Q1={[I0]:"ENVMAP_BLENDING_MULTIPLY",[Wv]:"ENVMAP_BLENDING_MIX",[jv]:"ENVMAP_BLENDING_ADD"};function ew(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Q1[o.combine]||"ENVMAP_BLENDING_NONE"}function tw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function nw(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=q1(t),h=$1(t),p=J1(t),g=ew(t),x=tw(t),y=B1(t),M=z1(a),E=s.createProgram();let S,_,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Aa).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Aa).join(`
`),_.length>0&&(_+=`
`)):(S=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),_=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?O1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,U1("linearToOutputTexel",t.outputColorSpace),k1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),c=rh(c),c=x0(c,t),c=v0(c,t),u=rh(u),u=x0(u,t),u=v0(u,t),c=y0(c),u=y0(u),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=A+S+c,C=A+_+u,L=m0(s,s.VERTEX_SHADER,w),I=m0(s,s.FRAGMENT_SHADER,C);s.attachShader(E,L),s.attachShader(E,I),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function D(O){if(o.debug.checkShaderErrors){const K=s.getProgramInfoLog(E)||"",Y=s.getShaderInfoLog(L)||"",re=s.getShaderInfoLog(I)||"",te=K.trim(),se=Y.trim(),$=re.trim();let X=!0,fe=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(X=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,L,I);else{const oe=_0(s,L,"vertex"),B=_0(s,I,"fragment");st("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+te+`
`+oe+`
`+B)}else te!==""?Je("WebGLProgram: Program Info Log:",te):(se===""||$==="")&&(fe=!1);fe&&(O.diagnostics={runnable:X,programLog:te,vertexShader:{log:se,prefix:S},fragmentShader:{log:$,prefix:_}})}s.deleteShader(L),s.deleteShader(I),U=new Ac(s,E),b=V1(s,E)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(E,L1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=I,this}let iw=0;class rw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sw(e),t.set(e,i)),i}}class sw{constructor(e){this.id=iw++,this.code=e,this.usedTimes=0}}function ow(o,e,t,i,s,a,c){const u=new t_,d=new rw,h=new Set,p=[],g=new Map,x=s.logarithmicDepthBuffer;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return h.add(b),b===0?"uv":`uv${b}`}function S(b,P,O,K,Y){const re=K.fog,te=Y.geometry,se=b.isMeshStandardMaterial?K.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),X=$&&$.mapping===Ic?$.image.height:null,fe=M[b.type];b.precision!==null&&(y=s.getMaxPrecision(b.precision),y!==b.precision&&Je("WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const oe=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,B=oe!==void 0?oe.length:0;let le=0;te.morphAttributes.position!==void 0&&(le=1),te.morphAttributes.normal!==void 0&&(le=2),te.morphAttributes.color!==void 0&&(le=3);let Ce,Ye,Ze,ne;if(fe){const At=ki[fe];Ce=At.vertexShader,Ye=At.fragmentShader}else Ce=b.vertexShader,Ye=b.fragmentShader,d.update(b),Ze=d.getVertexShaderID(b),ne=d.getFragmentShaderID(b);const de=o.getRenderTarget(),Se=o.state.buffers.depth.getReversed(),ke=Y.isInstancedMesh===!0,Ie=Y.isBatchedMesh===!0,yt=!!b.map,en=!!b.matcap,xt=!!$,wt=!!b.aoMap,Dt=!!b.lightMap,dt=!!b.bumpMap,Xt=!!b.normalMap,V=!!b.displacementMap,Yt=!!b.emissiveMap,Mt=!!b.metalnessMap,bt=!!b.roughnessMap,We=b.anisotropy>0,F=b.clearcoat>0,T=b.dispersion>0,W=b.iridescence>0,he=b.sheen>0,me=b.transmission>0,ue=We&&!!b.anisotropyMap,qe=F&&!!b.clearcoatMap,Te=F&&!!b.clearcoatNormalMap,Be=F&&!!b.clearcoatRoughnessMap,rt=W&&!!b.iridescenceMap,ye=W&&!!b.iridescenceThicknessMap,Re=he&&!!b.sheenColorMap,He=he&&!!b.sheenRoughnessMap,je=!!b.specularMap,be=!!b.specularColorMap,ft=!!b.specularIntensityMap,H=me&&!!b.transmissionMap,Le=me&&!!b.thicknessMap,Me=!!b.gradientMap,Ne=!!b.alphaMap,xe=b.alphaTest>0,pe=!!b.alphaHash,Ae=!!b.extensions;let ot=Hi;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ot=o.toneMapping);const Ut={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:Ye,defines:b.defines,customVertexShaderID:Ze,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Ie,batchingColor:Ie&&Y._colorsTexture!==null,instancing:ke,instancingColor:ke&&Y.instanceColor!==null,instancingMorph:ke&&Y.morphTexture!==null,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Bn,alphaToCoverage:!!b.alphaToCoverage,map:yt,matcap:en,envMap:xt,envMapMode:xt&&$.mapping,envMapCubeUVHeight:X,aoMap:wt,lightMap:Dt,bumpMap:dt,normalMap:Xt,displacementMap:V,emissiveMap:Yt,normalMapObjectSpace:Xt&&b.normalMapType===$v,normalMapTangentSpace:Xt&&b.normalMapType===Z0,metalnessMap:Mt,roughnessMap:bt,anisotropy:We,anisotropyMap:ue,clearcoat:F,clearcoatMap:qe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Be,dispersion:T,iridescence:W,iridescenceMap:rt,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:Re,sheenRoughnessMap:He,specularMap:je,specularColorMap:be,specularIntensityMap:ft,transmission:me,transmissionMap:H,thicknessMap:Le,gradientMap:Me,opaque:b.transparent===!1&&b.blending===mo&&b.alphaToCoverage===!1,alphaMap:Ne,alphaTest:xe,alphaHash:pe,combine:b.combine,mapUv:yt&&E(b.map.channel),aoMapUv:wt&&E(b.aoMap.channel),lightMapUv:Dt&&E(b.lightMap.channel),bumpMapUv:dt&&E(b.bumpMap.channel),normalMapUv:Xt&&E(b.normalMap.channel),displacementMapUv:V&&E(b.displacementMap.channel),emissiveMapUv:Yt&&E(b.emissiveMap.channel),metalnessMapUv:Mt&&E(b.metalnessMap.channel),roughnessMapUv:bt&&E(b.roughnessMap.channel),anisotropyMapUv:ue&&E(b.anisotropyMap.channel),clearcoatMapUv:qe&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Te&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:He&&E(b.sheenRoughnessMap.channel),specularMapUv:je&&E(b.specularMap.channel),specularColorMapUv:be&&E(b.specularColorMap.channel),specularIntensityMapUv:ft&&E(b.specularIntensityMap.channel),transmissionMapUv:H&&E(b.transmissionMap.channel),thicknessMapUv:Le&&E(b.thicknessMap.channel),alphaMapUv:Ne&&E(b.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Xt||We),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!te.attributes.uv&&(yt||Ne),fog:!!re,useFog:b.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Se,skinning:Y.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:le,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&O.length>0,shadowMapType:o.shadowMap.type,toneMapping:ot,decodeVideoTexture:yt&&b.map.isVideoTexture===!0&&Tt.getTransfer(b.map.colorSpace)===Ft,decodeVideoTextureEmissive:Yt&&b.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(b.emissiveMap.colorSpace)===Ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bi,flipSided:b.side===Yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ae&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&b.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ut.vertexUv1s=h.has(1),Ut.vertexUv2s=h.has(2),Ut.vertexUv3s=h.has(3),h.clear(),Ut}function _(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)P.push(O),P.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(A(P,b),w(P,b),P.push(o.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function A(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function w(b,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),b.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),b.push(u.mask)}function C(b){const P=M[b.type];let O;if(P){const K=ki[P];O=zy.clone(K.uniforms)}else O=b.uniforms;return O}function L(b,P){let O=g.get(P);return O!==void 0?++O.usedTimes:(O=new nw(o,P,b,a),p.push(O),g.set(P,O)),O}function I(b){if(--b.usedTimes===0){const P=p.indexOf(b);p[P]=p[p.length-1],p.pop(),g.delete(b.cacheKey),b.destroy()}}function D(b){d.remove(b)}function U(){d.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:C,acquireProgram:L,releaseProgram:I,releaseShaderCache:D,programs:p,dispose:U}}function aw(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,d){o.get(c)[u]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function lw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function M0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function E0(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,x,y,M,E,S){let _=o[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},o[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=y,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=E,_.group=S),e++,_}function u(g,x,y,M,E,S){const _=c(g,x,y,M,E,S);y.transmission>0?i.push(_):y.transparent===!0?s.push(_):t.push(_)}function d(g,x,y,M,E,S){const _=c(g,x,y,M,E,S);y.transmission>0?i.unshift(_):y.transparent===!0?s.unshift(_):t.unshift(_)}function h(g,x){t.length>1&&t.sort(g||lw),i.length>1&&i.sort(x||M0),s.length>1&&s.sort(x||M0)}function p(){for(let g=e,x=o.length;g<x;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:d,finish:p,sort:h}}function cw(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new E0,o.set(i,[c])):s>=a.length?(c=new E0,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function uw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ct};break;case"SpotLight":t={position:new q,direction:new q,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new q,halfWidth:new q,halfHeight:new q};break}return o[e.id]=t,t}}}function fw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let dw=0;function hw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function pw(o){const e=new uw,t=fw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new q);const s=new q,a=new gt,c=new gt;function u(h){let p=0,g=0,x=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let y=0,M=0,E=0,S=0,_=0,A=0,w=0,C=0,L=0,I=0,D=0;h.sort(hw);for(let b=0,P=h.length;b<P;b++){const O=h[b],K=O.color,Y=O.intensity,re=O.distance;let te=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===So?te=O.shadow.map.texture:te=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)p+=K.r*Y,g+=K.g*Y,x+=K.b*Y;else if(O.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(O.sh.coefficients[se],Y);D++}else if(O.isDirectionalLight){const se=e.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const $=O.shadow,X=t.get(O);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,i.directionalShadow[y]=X,i.directionalShadowMap[y]=te,i.directionalShadowMatrix[y]=O.shadow.matrix,A++}i.directional[y]=se,y++}else if(O.isSpotLight){const se=e.get(O);se.position.setFromMatrixPosition(O.matrixWorld),se.color.copy(K).multiplyScalar(Y),se.distance=re,se.coneCos=Math.cos(O.angle),se.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),se.decay=O.decay,i.spot[E]=se;const $=O.shadow;if(O.map&&(i.spotLightMap[L]=O.map,L++,$.updateMatrices(O),O.castShadow&&I++),i.spotLightMatrix[E]=$.matrix,O.castShadow){const X=t.get(O);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,i.spotShadow[E]=X,i.spotShadowMap[E]=te,C++}E++}else if(O.isRectAreaLight){const se=e.get(O);se.color.copy(K).multiplyScalar(Y),se.halfWidth.set(O.width*.5,0,0),se.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=se,S++}else if(O.isPointLight){const se=e.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity),se.distance=O.distance,se.decay=O.decay,O.castShadow){const $=O.shadow,X=t.get(O);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,i.pointShadow[M]=X,i.pointShadowMap[M]=te,i.pointShadowMatrix[M]=O.shadow.matrix,w++}i.point[M]=se,M++}else if(O.isHemisphereLight){const se=e.get(O);se.skyColor.copy(O.color).multiplyScalar(Y),se.groundColor.copy(O.groundColor).multiplyScalar(Y),i.hemi[_]=se,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=x;const U=i.hash;(U.directionalLength!==y||U.pointLength!==M||U.spotLength!==E||U.rectAreaLength!==S||U.hemiLength!==_||U.numDirectionalShadows!==A||U.numPointShadows!==w||U.numSpotShadows!==C||U.numSpotMaps!==L||U.numLightProbes!==D)&&(i.directional.length=y,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=_,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=C+L-I,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=D,U.directionalLength=y,U.pointLength=M,U.spotLength=E,U.rectAreaLength=S,U.hemiLength=_,U.numDirectionalShadows=A,U.numPointShadows=w,U.numSpotShadows=C,U.numSpotMaps=L,U.numLightProbes=D,i.version=dw++)}function d(h,p){let g=0,x=0,y=0,M=0,E=0;const S=p.matrixWorldInverse;for(let _=0,A=h.length;_<A;_++){const w=h[_];if(w.isDirectionalLight){const C=i.directional[g];C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),g++}else if(w.isSpotLight){const C=i.spot[y];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),y++}else if(w.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(S),c.identity(),a.copy(w.matrixWorld),a.premultiply(S),c.extractRotation(a),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(w.isPointLight){const C=i.point[x];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(S),x++}else if(w.isHemisphereLight){const C=i.hemi[E];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(S),E++}}}return{setup:u,setupView:d,state:i}}function T0(o){const e=new pw(o),t=[],i=[];function s(p){h.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function mw(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new T0(o),e.set(s,[u])):a>=c.length?(u=new T0(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const gw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_w=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xw=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],vw=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],w0=new gt,Ma=new q,rd=new q;function yw(o,e,t){let i=new Eh;const s=new lt,a=new lt,c=new jt,u=new oS,d=new aS,h={},p=t.maxTextureSize,g={[gr]:Yn,[Yn]:gr,[Bi]:Bi},x=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:gw,fragmentShader:_w}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new pi;M.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ni(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let _=this.type;this.render=function(I,D,U){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;I.type===wv&&(Je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Sc);const b=o.getRenderTarget(),P=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),K=o.state;K.setBlending(pr),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Y=_!==this.type;Y&&D.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(te=>te.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,te=I.length;re<te;re++){const se=I[re],$=se.shadow;if($===void 0){Je("WebGLShadowMap:",se,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const X=$.getFrameExtents();if(s.multiply(X),a.copy($.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/X.x),s.x=a.x*X.x,$.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/X.y),s.y=a.y*X.y,$.mapSize.y=a.y)),$.map===null||Y===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===wa){if(se.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Gi(s.x,s.y,{format:So,type:_r,minFilter:un,magFilter:un,generateMipmaps:!1}),$.map.texture.name=se.name+".shadowMap",$.map.depthTexture=new Oa(s.x,s.y,di),$.map.depthTexture.name=se.name+".shadowMapDepth",$.map.depthTexture.format=xr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=cn,$.map.depthTexture.magFilter=cn}else{se.isPointLight?($.map=new l_(s.x),$.map.depthTexture=new rS(s.x,ji)):($.map=new Gi(s.x,s.y),$.map.depthTexture=new Oa(s.x,s.y,ji)),$.map.depthTexture.name=se.name+".shadowMap",$.map.depthTexture.format=xr;const oe=o.state.buffers.depth.getReversed();this.type===Sc?($.map.depthTexture.compareFunction=oe?_h:gh,$.map.depthTexture.minFilter=un,$.map.depthTexture.magFilter=un):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=cn,$.map.depthTexture.magFilter=cn)}$.camera.updateProjectionMatrix()}const fe=$.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<fe;oe++){if($.map.isWebGLCubeRenderTarget)o.setRenderTarget($.map,oe),o.clear();else{oe===0&&(o.setRenderTarget($.map),o.clear());const B=$.getViewport(oe);c.set(a.x*B.x,a.y*B.y,a.x*B.z,a.y*B.w),K.viewport(c)}if(se.isPointLight){const B=$.camera,le=$.matrix,Ce=se.distance||B.far;Ce!==B.far&&(B.far=Ce,B.updateProjectionMatrix()),Ma.setFromMatrixPosition(se.matrixWorld),B.position.copy(Ma),rd.copy(B.position),rd.add(xw[oe]),B.up.copy(vw[oe]),B.lookAt(rd),B.updateMatrixWorld(),le.makeTranslation(-Ma.x,-Ma.y,-Ma.z),w0.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$._frustum.setFromProjectionMatrix(w0,B.coordinateSystem,B.reversedDepth)}else $.updateMatrices(se);i=$.getFrustum(),C(D,U,$.camera,se,this.type)}$.isPointLightShadow!==!0&&this.type===wa&&A($,U),$.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(b,P,O)};function A(I,D){const U=e.update(E);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Gi(s.x,s.y,{format:So,type:_r})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(D,null,U,x,E,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(D,null,U,y,E,null)}function w(I,D,U,b){let P=null;const O=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)P=O;else if(P=U.isPointLight===!0?d:u,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const K=P.uuid,Y=D.uuid;let re=h[K];re===void 0&&(re={},h[K]=re);let te=re[Y];te===void 0&&(te=P.clone(),re[Y]=te,D.addEventListener("dispose",L)),P=te}if(P.visible=D.visible,P.wireframe=D.wireframe,b===wa?P.side=D.shadowSide!==null?D.shadowSide:D.side:P.side=D.shadowSide!==null?D.shadowSide:g[D.side],P.alphaMap=D.alphaMap,P.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,P.map=D.map,P.clipShadows=D.clipShadows,P.clippingPlanes=D.clippingPlanes,P.clipIntersection=D.clipIntersection,P.displacementMap=D.displacementMap,P.displacementScale=D.displacementScale,P.displacementBias=D.displacementBias,P.wireframeLinewidth=D.wireframeLinewidth,P.linewidth=D.linewidth,U.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const K=o.properties.get(P);K.light=U}return P}function C(I,D,U,b,P){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&P===wa)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const Y=e.update(I),re=I.material;if(Array.isArray(re)){const te=Y.groups;for(let se=0,$=te.length;se<$;se++){const X=te[se],fe=re[X.materialIndex];if(fe&&fe.visible){const oe=w(I,fe,b,P);I.onBeforeShadow(o,I,D,U,Y,oe,X),o.renderBufferDirect(U,null,Y,oe,I,X),I.onAfterShadow(o,I,D,U,Y,oe,X)}}}else if(re.visible){const te=w(I,re,b,P);I.onBeforeShadow(o,I,D,U,Y,te,null),o.renderBufferDirect(U,null,Y,te,I,null),I.onAfterShadow(o,I,D,U,Y,te,null)}}const K=I.children;for(let Y=0,re=K.length;Y<re;Y++)C(K[Y],D,U,b,P)}function L(I){I.target.removeEventListener("dispose",L);for(const U in h){const b=h[U],P=I.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}const Sw={[fd]:dd,[hd]:gd,[pd]:_d,[xo]:md,[dd]:fd,[gd]:hd,[_d]:pd,[md]:xo};function Mw(o,e){function t(){let H=!1;const Le=new jt;let Me=null;const Ne=new jt(0,0,0,0);return{setMask:function(xe){Me!==xe&&!H&&(o.colorMask(xe,xe,xe,xe),Me=xe)},setLocked:function(xe){H=xe},setClear:function(xe,pe,Ae,ot,Ut){Ut===!0&&(xe*=ot,pe*=ot,Ae*=ot),Le.set(xe,pe,Ae,ot),Ne.equals(Le)===!1&&(o.clearColor(xe,pe,Ae,ot),Ne.copy(Le))},reset:function(){H=!1,Me=null,Ne.set(-1,0,0,0)}}}function i(){let H=!1,Le=!1,Me=null,Ne=null,xe=null;return{setReversed:function(pe){if(Le!==pe){const Ae=e.get("EXT_clip_control");pe?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Le=pe;const ot=xe;xe=null,this.setClear(ot)}},getReversed:function(){return Le},setTest:function(pe){pe?de(o.DEPTH_TEST):Se(o.DEPTH_TEST)},setMask:function(pe){Me!==pe&&!H&&(o.depthMask(pe),Me=pe)},setFunc:function(pe){if(Le&&(pe=Sw[pe]),Ne!==pe){switch(pe){case fd:o.depthFunc(o.NEVER);break;case dd:o.depthFunc(o.ALWAYS);break;case hd:o.depthFunc(o.LESS);break;case xo:o.depthFunc(o.LEQUAL);break;case pd:o.depthFunc(o.EQUAL);break;case md:o.depthFunc(o.GEQUAL);break;case gd:o.depthFunc(o.GREATER);break;case _d:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ne=pe}},setLocked:function(pe){H=pe},setClear:function(pe){xe!==pe&&(Le&&(pe=1-pe),o.clearDepth(pe),xe=pe)},reset:function(){H=!1,Me=null,Ne=null,xe=null,Le=!1}}}function s(){let H=!1,Le=null,Me=null,Ne=null,xe=null,pe=null,Ae=null,ot=null,Ut=null;return{setTest:function(At){H||(At?de(o.STENCIL_TEST):Se(o.STENCIL_TEST))},setMask:function(At){Le!==At&&!H&&(o.stencilMask(At),Le=At)},setFunc:function(At,qn,Ln){(Me!==At||Ne!==qn||xe!==Ln)&&(o.stencilFunc(At,qn,Ln),Me=At,Ne=qn,xe=Ln)},setOp:function(At,qn,Ln){(pe!==At||Ae!==qn||ot!==Ln)&&(o.stencilOp(At,qn,Ln),pe=At,Ae=qn,ot=Ln)},setLocked:function(At){H=At},setClear:function(At){Ut!==At&&(o.clearStencil(At),Ut=At)},reset:function(){H=!1,Le=null,Me=null,Ne=null,xe=null,pe=null,Ae=null,ot=null,Ut=null}}}const a=new t,c=new i,u=new s,d=new WeakMap,h=new WeakMap;let p={},g={},x=new WeakMap,y=[],M=null,E=!1,S=null,_=null,A=null,w=null,C=null,L=null,I=null,D=new ct(0,0,0),U=0,b=!1,P=null,O=null,K=null,Y=null,re=null;const te=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,$=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),se=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),se=$>=2);let fe=null,oe={};const B=o.getParameter(o.SCISSOR_BOX),le=o.getParameter(o.VIEWPORT),Ce=new jt().fromArray(B),Ye=new jt().fromArray(le);function Ze(H,Le,Me,Ne){const xe=new Uint8Array(4),pe=o.createTexture();o.bindTexture(H,pe),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ae=0;Ae<Me;Ae++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,Ne,0,o.RGBA,o.UNSIGNED_BYTE,xe):o.texImage2D(Le+Ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,xe);return pe}const ne={};ne[o.TEXTURE_2D]=Ze(o.TEXTURE_2D,o.TEXTURE_2D,1),ne[o.TEXTURE_CUBE_MAP]=Ze(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[o.TEXTURE_2D_ARRAY]=Ze(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ne[o.TEXTURE_3D]=Ze(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),de(o.DEPTH_TEST),c.setFunc(xo),dt(!1),Xt(ug),de(o.CULL_FACE),wt(pr);function de(H){p[H]!==!0&&(o.enable(H),p[H]=!0)}function Se(H){p[H]!==!1&&(o.disable(H),p[H]=!1)}function ke(H,Le){return g[H]!==Le?(o.bindFramebuffer(H,Le),g[H]=Le,H===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Le),H===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ie(H,Le){let Me=y,Ne=!1;if(H){Me=x.get(Le),Me===void 0&&(Me=[],x.set(Le,Me));const xe=H.textures;if(Me.length!==xe.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let pe=0,Ae=xe.length;pe<Ae;pe++)Me[pe]=o.COLOR_ATTACHMENT0+pe;Me.length=xe.length,Ne=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,Ne=!0);Ne&&o.drawBuffers(Me)}function yt(H){return M!==H?(o.useProgram(H),M=H,!0):!1}const en={[vs]:o.FUNC_ADD,[Av]:o.FUNC_SUBTRACT,[Rv]:o.FUNC_REVERSE_SUBTRACT};en[Cv]=o.MIN,en[Pv]=o.MAX;const xt={[Lv]:o.ZERO,[Nv]:o.ONE,[Dv]:o.SRC_COLOR,[cd]:o.SRC_ALPHA,[Bv]:o.SRC_ALPHA_SATURATE,[Ov]:o.DST_COLOR,[Uv]:o.DST_ALPHA,[Iv]:o.ONE_MINUS_SRC_COLOR,[ud]:o.ONE_MINUS_SRC_ALPHA,[kv]:o.ONE_MINUS_DST_COLOR,[Fv]:o.ONE_MINUS_DST_ALPHA,[zv]:o.CONSTANT_COLOR,[Vv]:o.ONE_MINUS_CONSTANT_COLOR,[Hv]:o.CONSTANT_ALPHA,[Gv]:o.ONE_MINUS_CONSTANT_ALPHA};function wt(H,Le,Me,Ne,xe,pe,Ae,ot,Ut,At){if(H===pr){E===!0&&(Se(o.BLEND),E=!1);return}if(E===!1&&(de(o.BLEND),E=!0),H!==bv){if(H!==S||At!==b){if((_!==vs||C!==vs)&&(o.blendEquation(o.FUNC_ADD),_=vs,C=vs),At)switch(H){case mo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fg:o.blendFunc(o.ONE,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:st("WebGLState: Invalid blending: ",H);break}else switch(H){case mo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case dg:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hg:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",H);break}A=null,w=null,L=null,I=null,D.set(0,0,0),U=0,S=H,b=At}return}xe=xe||Le,pe=pe||Me,Ae=Ae||Ne,(Le!==_||xe!==C)&&(o.blendEquationSeparate(en[Le],en[xe]),_=Le,C=xe),(Me!==A||Ne!==w||pe!==L||Ae!==I)&&(o.blendFuncSeparate(xt[Me],xt[Ne],xt[pe],xt[Ae]),A=Me,w=Ne,L=pe,I=Ae),(ot.equals(D)===!1||Ut!==U)&&(o.blendColor(ot.r,ot.g,ot.b,Ut),D.copy(ot),U=Ut),S=H,b=!1}function Dt(H,Le){H.side===Bi?Se(o.CULL_FACE):de(o.CULL_FACE);let Me=H.side===Yn;Le&&(Me=!Me),dt(Me),H.blending===mo&&H.transparent===!1?wt(pr):wt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const Ne=H.stencilWrite;u.setTest(Ne),Ne&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Yt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):Se(o.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){P!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),P=H)}function Xt(H){H!==Ev?(de(o.CULL_FACE),H!==O&&(H===ug?o.cullFace(o.BACK):H===Tv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Se(o.CULL_FACE),O=H}function V(H){H!==K&&(se&&o.lineWidth(H),K=H)}function Yt(H,Le,Me){H?(de(o.POLYGON_OFFSET_FILL),(Y!==Le||re!==Me)&&(o.polygonOffset(Le,Me),Y=Le,re=Me)):Se(o.POLYGON_OFFSET_FILL)}function Mt(H){H?de(o.SCISSOR_TEST):Se(o.SCISSOR_TEST)}function bt(H){H===void 0&&(H=o.TEXTURE0+te-1),fe!==H&&(o.activeTexture(H),fe=H)}function We(H,Le,Me){Me===void 0&&(fe===null?Me=o.TEXTURE0+te-1:Me=fe);let Ne=oe[Me];Ne===void 0&&(Ne={type:void 0,texture:void 0},oe[Me]=Ne),(Ne.type!==H||Ne.texture!==Le)&&(fe!==Me&&(o.activeTexture(Me),fe=Me),o.bindTexture(H,Le||ne[H]),Ne.type=H,Ne.texture=Le)}function F(){const H=oe[fe];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function he(){try{o.texSubImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function me(){try{o.texSubImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function ue(){try{o.compressedTexSubImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function qe(){try{o.compressedTexSubImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function Te(){try{o.texStorage2D(...arguments)}catch(H){st("WebGLState:",H)}}function Be(){try{o.texStorage3D(...arguments)}catch(H){st("WebGLState:",H)}}function rt(){try{o.texImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function ye(){try{o.texImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function Re(H){Ce.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),Ce.copy(H))}function He(H){Ye.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Ye.copy(H))}function je(H,Le){let Me=h.get(Le);Me===void 0&&(Me=new WeakMap,h.set(Le,Me));let Ne=Me.get(H);Ne===void 0&&(Ne=o.getUniformBlockIndex(Le,H.name),Me.set(H,Ne))}function be(H,Le){const Ne=h.get(Le).get(H);d.get(Le)!==Ne&&(o.uniformBlockBinding(Le,Ne,H.__bindingPointIndex),d.set(Le,Ne))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},fe=null,oe={},g={},x=new WeakMap,y=[],M=null,E=!1,S=null,_=null,A=null,w=null,C=null,L=null,I=null,D=new ct(0,0,0),U=0,b=!1,P=null,O=null,K=null,Y=null,re=null,Ce.set(0,0,o.canvas.width,o.canvas.height),Ye.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:de,disable:Se,bindFramebuffer:ke,drawBuffers:Ie,useProgram:yt,setBlending:wt,setMaterial:Dt,setFlipSided:dt,setCullFace:Xt,setLineWidth:V,setPolygonOffset:Yt,setScissorTest:Mt,activeTexture:bt,bindTexture:We,unbindTexture:F,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:rt,texImage3D:ye,updateUBOMapping:je,uniformBlockBinding:be,texStorage2D:Te,texStorage3D:Be,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:qe,scissor:Re,viewport:He,reset:ft}}function Ew(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new lt,p=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,T){return y?new OffscreenCanvas(F,T):Ua("canvas")}function E(F,T,W){let he=1;const me=We(F);if((me.width>W||me.height>W)&&(he=W/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ue=Math.floor(he*me.width),qe=Math.floor(he*me.height);g===void 0&&(g=M(ue,qe));const Te=T?M(ue,qe):g;return Te.width=ue,Te.height=qe,Te.getContext("2d").drawImage(F,0,0,ue,qe),Je("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ue+"x"+qe+")."),Te}else return"data"in F&&Je("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),F;return F}function S(F){return F.generateMipmaps}function _(F){o.generateMipmap(F)}function A(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(F,T,W,he,me=!1){if(F!==null){if(o[F]!==void 0)return o[F];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ue=T;if(T===o.RED&&(W===o.FLOAT&&(ue=o.R32F),W===o.HALF_FLOAT&&(ue=o.R16F),W===o.UNSIGNED_BYTE&&(ue=o.R8)),T===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.R8UI),W===o.UNSIGNED_SHORT&&(ue=o.R16UI),W===o.UNSIGNED_INT&&(ue=o.R32UI),W===o.BYTE&&(ue=o.R8I),W===o.SHORT&&(ue=o.R16I),W===o.INT&&(ue=o.R32I)),T===o.RG&&(W===o.FLOAT&&(ue=o.RG32F),W===o.HALF_FLOAT&&(ue=o.RG16F),W===o.UNSIGNED_BYTE&&(ue=o.RG8)),T===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RG8UI),W===o.UNSIGNED_SHORT&&(ue=o.RG16UI),W===o.UNSIGNED_INT&&(ue=o.RG32UI),W===o.BYTE&&(ue=o.RG8I),W===o.SHORT&&(ue=o.RG16I),W===o.INT&&(ue=o.RG32I)),T===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),W===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),W===o.UNSIGNED_INT&&(ue=o.RGB32UI),W===o.BYTE&&(ue=o.RGB8I),W===o.SHORT&&(ue=o.RGB16I),W===o.INT&&(ue=o.RGB32I)),T===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),W===o.UNSIGNED_INT&&(ue=o.RGBA32UI),W===o.BYTE&&(ue=o.RGBA8I),W===o.SHORT&&(ue=o.RGBA16I),W===o.INT&&(ue=o.RGBA32I)),T===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),T===o.RGBA){const qe=me?Cc:Tt.getTransfer(he);W===o.FLOAT&&(ue=o.RGBA32F),W===o.HALF_FLOAT&&(ue=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ue=qe===Ft?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(F,T){let W;return F?T===null||T===ji||T===Na?W=o.DEPTH24_STENCIL8:T===di?W=o.DEPTH32F_STENCIL8:T===La&&(W=o.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ji||T===Na?W=o.DEPTH_COMPONENT24:T===di?W=o.DEPTH_COMPONENT32F:T===La&&(W=o.DEPTH_COMPONENT16),W}function L(F,T){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==cn&&F.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function I(F){const T=F.target;T.removeEventListener("dispose",I),U(T),T.isVideoTexture&&p.delete(T)}function D(F){const T=F.target;T.removeEventListener("dispose",D),P(T)}function U(F){const T=i.get(F);if(T.__webglInit===void 0)return;const W=F.source,he=x.get(W);if(he){const me=he[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&b(F),Object.keys(he).length===0&&x.delete(W)}i.remove(F)}function b(F){const T=i.get(F);o.deleteTexture(T.__webglTexture);const W=F.source,he=x.get(W);delete he[T.__cacheKey],c.memory.textures--}function P(F){const T=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let me=0;me<T.__webglFramebuffer[he].length;me++)o.deleteFramebuffer(T.__webglFramebuffer[he][me]);else o.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)o.deleteFramebuffer(T.__webglFramebuffer[he]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=F.textures;for(let he=0,me=W.length;he<me;he++){const ue=i.get(W[he]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),c.memory.textures--),i.remove(W[he])}i.remove(F)}let O=0;function K(){O=0}function Y(){const F=O;return F>=s.maxTextures&&Je("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),O+=1,F}function re(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function te(F,T){const W=i.get(F);if(F.isVideoTexture&&Mt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&W.__version!==F.version){const he=F.image;if(he===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,F,T);return}}else F.isExternalTexture&&(W.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+T)}function se(F,T){const W=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&W.__version!==F.version){ne(W,F,T);return}else F.isExternalTexture&&(W.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+T)}function $(F,T){const W=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&W.__version!==F.version){ne(W,F,T);return}t.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+T)}function X(F,T){const W=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&W.__version!==F.version){de(W,F,T);return}t.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+T)}const fe={[yo]:o.REPEAT,[zi]:o.CLAMP_TO_EDGE,[Rc]:o.MIRRORED_REPEAT},oe={[cn]:o.NEAREST,[G0]:o.NEAREST_MIPMAP_NEAREST,[ba]:o.NEAREST_MIPMAP_LINEAR,[un]:o.LINEAR,[Mc]:o.LINEAR_MIPMAP_NEAREST,[dr]:o.LINEAR_MIPMAP_LINEAR},B={[Zv]:o.NEVER,[ny]:o.ALWAYS,[Jv]:o.LESS,[gh]:o.LEQUAL,[Qv]:o.EQUAL,[_h]:o.GEQUAL,[ey]:o.GREATER,[ty]:o.NOTEQUAL};function le(F,T){if(T.type===di&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===Mc||T.magFilter===ba||T.magFilter===dr||T.minFilter===un||T.minFilter===Mc||T.minFilter===ba||T.minFilter===dr)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,fe[T.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,fe[T.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,fe[T.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,oe[T.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,B[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===cn||T.minFilter!==ba&&T.minFilter!==dr||T.type===di&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(F,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ce(F,T){let W=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",I));const he=T.source;let me=x.get(he);me===void 0&&(me={},x.set(he,me));const ue=re(T);if(ue!==F.__cacheKey){me[ue]===void 0&&(me[ue]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,W=!0),me[ue].usedTimes++;const qe=me[F.__cacheKey];qe!==void 0&&(me[F.__cacheKey].usedTimes--,qe.usedTimes===0&&b(T)),F.__cacheKey=ue,F.__webglTexture=me[ue].texture}return W}function Ye(F,T,W){return Math.floor(Math.floor(F/W)/T)}function Ze(F,T,W,he){const ue=F.updateRanges;if(ue.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,W,he,T.data);else{ue.sort((ye,Re)=>ye.start-Re.start);let qe=0;for(let ye=1;ye<ue.length;ye++){const Re=ue[qe],He=ue[ye],je=Re.start+Re.count,be=Ye(He.start,T.width,4),ft=Ye(Re.start,T.width,4);He.start<=je+1&&be===ft&&Ye(He.start+He.count-1,T.width,4)===be?Re.count=Math.max(Re.count,He.start+He.count-Re.start):(++qe,ue[qe]=He)}ue.length=qe+1;const Te=o.getParameter(o.UNPACK_ROW_LENGTH),Be=o.getParameter(o.UNPACK_SKIP_PIXELS),rt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let ye=0,Re=ue.length;ye<Re;ye++){const He=ue[ye],je=Math.floor(He.start/4),be=Math.ceil(He.count/4),ft=je%T.width,H=Math.floor(je/T.width),Le=be,Me=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ft),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),t.texSubImage2D(o.TEXTURE_2D,0,ft,H,Le,Me,W,he,T.data)}F.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Te),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Be),o.pixelStorei(o.UNPACK_SKIP_ROWS,rt)}}function ne(F,T,W){let he=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=o.TEXTURE_3D);const me=Ce(F,T),ue=T.source;t.bindTexture(he,F.__webglTexture,o.TEXTURE0+W);const qe=i.get(ue);if(ue.version!==qe.__version||me===!0){t.activeTexture(o.TEXTURE0+W);const Te=Tt.getPrimaries(Tt.workingColorSpace),Be=T.colorSpace===Yr?null:Tt.getPrimaries(T.colorSpace),rt=T.colorSpace===Yr||Te===Be?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ye=E(T.image,!1,s.maxTextureSize);ye=bt(T,ye);const Re=a.convert(T.format,T.colorSpace),He=a.convert(T.type);let je=w(T.internalFormat,Re,He,T.colorSpace,T.isVideoTexture);le(he,T);let be;const ft=T.mipmaps,H=T.isVideoTexture!==!0,Le=qe.__version===void 0||me===!0,Me=ue.dataReady,Ne=L(T,ye);if(T.isDepthTexture)je=C(T.format===Ss,T.type),Le&&(H?t.texStorage2D(o.TEXTURE_2D,1,je,ye.width,ye.height):t.texImage2D(o.TEXTURE_2D,0,je,ye.width,ye.height,0,Re,He,null));else if(T.isDataTexture)if(ft.length>0){H&&Le&&t.texStorage2D(o.TEXTURE_2D,Ne,je,ft[0].width,ft[0].height);for(let xe=0,pe=ft.length;xe<pe;xe++)be=ft[xe],H?Me&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,be.width,be.height,Re,He,be.data):t.texImage2D(o.TEXTURE_2D,xe,je,be.width,be.height,0,Re,He,be.data);T.generateMipmaps=!1}else H?(Le&&t.texStorage2D(o.TEXTURE_2D,Ne,je,ye.width,ye.height),Me&&Ze(T,ye,Re,He)):t.texImage2D(o.TEXTURE_2D,0,je,ye.width,ye.height,0,Re,He,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){H&&Le&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,je,ft[0].width,ft[0].height,ye.depth);for(let xe=0,pe=ft.length;xe<pe;xe++)if(be=ft[xe],T.format!==hi)if(Re!==null)if(H){if(Me)if(T.layerUpdates.size>0){const Ae=n0(be.width,be.height,T.format,T.type);for(const ot of T.layerUpdates){const Ut=be.data.subarray(ot*Ae/be.data.BYTES_PER_ELEMENT,(ot+1)*Ae/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,ot,be.width,be.height,1,Re,Ut)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,ye.depth,Re,be.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xe,je,be.width,be.height,ye.depth,0,be.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,ye.depth,Re,He,be.data):t.texImage3D(o.TEXTURE_2D_ARRAY,xe,je,be.width,be.height,ye.depth,0,Re,He,be.data)}else{H&&Le&&t.texStorage2D(o.TEXTURE_2D,Ne,je,ft[0].width,ft[0].height);for(let xe=0,pe=ft.length;xe<pe;xe++)be=ft[xe],T.format!==hi?Re!==null?H?Me&&t.compressedTexSubImage2D(o.TEXTURE_2D,xe,0,0,be.width,be.height,Re,be.data):t.compressedTexImage2D(o.TEXTURE_2D,xe,je,be.width,be.height,0,be.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,be.width,be.height,Re,He,be.data):t.texImage2D(o.TEXTURE_2D,xe,je,be.width,be.height,0,Re,He,be.data)}else if(T.isDataArrayTexture)if(H){if(Le&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,je,ye.width,ye.height,ye.depth),Me)if(T.layerUpdates.size>0){const xe=n0(ye.width,ye.height,T.format,T.type);for(const pe of T.layerUpdates){const Ae=ye.data.subarray(pe*xe/ye.data.BYTES_PER_ELEMENT,(pe+1)*xe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,ye.width,ye.height,1,Re,He,Ae)}T.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Re,He,ye.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,je,ye.width,ye.height,ye.depth,0,Re,He,ye.data);else if(T.isData3DTexture)H?(Le&&t.texStorage3D(o.TEXTURE_3D,Ne,je,ye.width,ye.height,ye.depth),Me&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Re,He,ye.data)):t.texImage3D(o.TEXTURE_3D,0,je,ye.width,ye.height,ye.depth,0,Re,He,ye.data);else if(T.isFramebufferTexture){if(Le)if(H)t.texStorage2D(o.TEXTURE_2D,Ne,je,ye.width,ye.height);else{let xe=ye.width,pe=ye.height;for(let Ae=0;Ae<Ne;Ae++)t.texImage2D(o.TEXTURE_2D,Ae,je,xe,pe,0,Re,He,null),xe>>=1,pe>>=1}}else if(ft.length>0){if(H&&Le){const xe=We(ft[0]);t.texStorage2D(o.TEXTURE_2D,Ne,je,xe.width,xe.height)}for(let xe=0,pe=ft.length;xe<pe;xe++)be=ft[xe],H?Me&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,Re,He,be):t.texImage2D(o.TEXTURE_2D,xe,je,Re,He,be);T.generateMipmaps=!1}else if(H){if(Le){const xe=We(ye);t.texStorage2D(o.TEXTURE_2D,Ne,je,xe.width,xe.height)}Me&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Re,He,ye)}else t.texImage2D(o.TEXTURE_2D,0,je,Re,He,ye);S(T)&&_(he),qe.__version=ue.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function de(F,T,W){if(T.image.length!==6)return;const he=Ce(F,T),me=T.source;t.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+W);const ue=i.get(me);if(me.version!==ue.__version||he===!0){t.activeTexture(o.TEXTURE0+W);const qe=Tt.getPrimaries(Tt.workingColorSpace),Te=T.colorSpace===Yr?null:Tt.getPrimaries(T.colorSpace),Be=T.colorSpace===Yr||qe===Te?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const rt=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Re=[];for(let pe=0;pe<6;pe++)!rt&&!ye?Re[pe]=E(T.image[pe],!0,s.maxCubemapSize):Re[pe]=ye?T.image[pe].image:T.image[pe],Re[pe]=bt(T,Re[pe]);const He=Re[0],je=a.convert(T.format,T.colorSpace),be=a.convert(T.type),ft=w(T.internalFormat,je,be,T.colorSpace),H=T.isVideoTexture!==!0,Le=ue.__version===void 0||he===!0,Me=me.dataReady;let Ne=L(T,He);le(o.TEXTURE_CUBE_MAP,T);let xe;if(rt){H&&Le&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,ft,He.width,He.height);for(let pe=0;pe<6;pe++){xe=Re[pe].mipmaps;for(let Ae=0;Ae<xe.length;Ae++){const ot=xe[Ae];T.format!==hi?je!==null?H?Me&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae,0,0,ot.width,ot.height,je,ot.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae,ft,ot.width,ot.height,0,ot.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae,0,0,ot.width,ot.height,je,be,ot.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae,ft,ot.width,ot.height,0,je,be,ot.data)}}}else{if(xe=T.mipmaps,H&&Le){xe.length>0&&Ne++;const pe=We(Re[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ye){H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Re[pe].width,Re[pe].height,je,be,Re[pe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Re[pe].width,Re[pe].height,0,je,be,Re[pe].data);for(let Ae=0;Ae<xe.length;Ae++){const Ut=xe[Ae].image[pe].image;H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae+1,0,0,Ut.width,Ut.height,je,be,Ut.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae+1,ft,Ut.width,Ut.height,0,je,be,Ut.data)}}else{H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,je,be,Re[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,je,be,Re[pe]);for(let Ae=0;Ae<xe.length;Ae++){const ot=xe[Ae];H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae+1,0,0,je,be,ot.image[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae+1,ft,je,be,ot.image[pe])}}}S(T)&&_(o.TEXTURE_CUBE_MAP),ue.__version=me.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function Se(F,T,W,he,me,ue){const qe=a.convert(W.format,W.colorSpace),Te=a.convert(W.type),Be=w(W.internalFormat,qe,Te,W.colorSpace),rt=i.get(T),ye=i.get(W);if(ye.__renderTarget=T,!rt.__hasExternalTextures){const Re=Math.max(1,T.width>>ue),He=Math.max(1,T.height>>ue);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?t.texImage3D(me,ue,Be,Re,He,T.depth,0,qe,Te,null):t.texImage2D(me,ue,Be,Re,He,0,qe,Te,null)}t.bindFramebuffer(o.FRAMEBUFFER,F),Yt(T)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,me,ye.__webglTexture,0,V(T)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,me,ye.__webglTexture,ue),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(F,T,W){if(o.bindRenderbuffer(o.RENDERBUFFER,F),T.depthBuffer){const he=T.depthTexture,me=he&&he.isDepthTexture?he.type:null,ue=C(T.stencilBuffer,me),qe=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Yt(T)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(T),ue,T.width,T.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(T),ue,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ue,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qe,o.RENDERBUFFER,F)}else{const he=T.textures;for(let me=0;me<he.length;me++){const ue=he[me],qe=a.convert(ue.format,ue.colorSpace),Te=a.convert(ue.type),Be=w(ue.internalFormat,qe,Te,ue.colorSpace);Yt(T)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(T),Be,T.width,T.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(T),Be,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Be,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ie(F,T,W){const he=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(T.depthTexture);if(me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he){if(me.__webglInit===void 0&&(me.__webglInit=!0,T.depthTexture.addEventListener("dispose",I)),me.__webglTexture===void 0){me.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),le(o.TEXTURE_CUBE_MAP,T.depthTexture);const rt=a.convert(T.depthTexture.format),ye=a.convert(T.depthTexture.type);let Re;T.depthTexture.format===xr?Re=o.DEPTH_COMPONENT24:T.depthTexture.format===Ss&&(Re=o.DEPTH24_STENCIL8);for(let He=0;He<6;He++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Re,T.width,T.height,0,rt,ye,null)}}else te(T.depthTexture,0);const ue=me.__webglTexture,qe=V(T),Te=he?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Be=T.depthTexture.format===Ss?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===xr)Yt(T)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Be,Te,ue,0,qe):o.framebufferTexture2D(o.FRAMEBUFFER,Be,Te,ue,0);else if(T.depthTexture.format===Ss)Yt(T)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Be,Te,ue,0,qe):o.framebufferTexture2D(o.FRAMEBUFFER,Be,Te,ue,0);else throw new Error("Unknown depthTexture format")}function yt(F){const T=i.get(F),W=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const he=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=he}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)Ie(T.__webglFramebuffer[he],F,he);else{const he=F.texture.mipmaps;he&&he.length>0?Ie(T.__webglFramebuffer[0],F,0):Ie(T.__webglFramebuffer,F,0)}else if(W){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=o.createRenderbuffer(),ke(T.__webglDepthbuffer[he],F,!1);else{const me=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,ue)}}else{const he=F.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ke(T.__webglDepthbuffer,F,!1);else{const me=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,ue)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function en(F,T,W){const he=i.get(F);T!==void 0&&Se(he.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&yt(F)}function xt(F){const T=F.texture,W=i.get(F),he=i.get(T);F.addEventListener("dispose",D);const me=F.textures,ue=F.isWebGLCubeRenderTarget===!0,qe=me.length>1;if(qe||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=T.version,c.memory.textures++),ue){W.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Te]=[];for(let Be=0;Be<T.mipmaps.length;Be++)W.__webglFramebuffer[Te][Be]=o.createFramebuffer()}else W.__webglFramebuffer[Te]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Te=0;Te<T.mipmaps.length;Te++)W.__webglFramebuffer[Te]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(qe)for(let Te=0,Be=me.length;Te<Be;Te++){const rt=i.get(me[Te]);rt.__webglTexture===void 0&&(rt.__webglTexture=o.createTexture(),c.memory.textures++)}if(F.samples>0&&Yt(F)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const Be=me[Te];W.__webglColorRenderbuffer[Te]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Te]);const rt=a.convert(Be.format,Be.colorSpace),ye=a.convert(Be.type),Re=w(Be.internalFormat,rt,ye,Be.colorSpace,F.isXRRenderTarget===!0),He=V(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,He,Re,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.RENDERBUFFER,W.__webglColorRenderbuffer[Te])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(W.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){t.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),le(o.TEXTURE_CUBE_MAP,T);for(let Te=0;Te<6;Te++)if(T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)Se(W.__webglFramebuffer[Te][Be],F,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Be);else Se(W.__webglFramebuffer[Te],F,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(T)&&_(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Te=0,Be=me.length;Te<Be;Te++){const rt=me[Te],ye=i.get(rt);let Re=o.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Re=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Re,ye.__webglTexture),le(Re,rt),Se(W.__webglFramebuffer,F,rt,o.COLOR_ATTACHMENT0+Te,Re,0),S(rt)&&_(Re)}t.unbindTexture()}else{let Te=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Te=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),le(Te,T),T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)Se(W.__webglFramebuffer[Be],F,T,o.COLOR_ATTACHMENT0,Te,Be);else Se(W.__webglFramebuffer,F,T,o.COLOR_ATTACHMENT0,Te,0);S(T)&&_(Te),t.unbindTexture()}F.depthBuffer&&yt(F)}function wt(F){const T=F.textures;for(let W=0,he=T.length;W<he;W++){const me=T[W];if(S(me)){const ue=A(F),qe=i.get(me).__webglTexture;t.bindTexture(ue,qe),_(ue),t.unbindTexture()}}}const Dt=[],dt=[];function Xt(F){if(F.samples>0){if(Yt(F)===!1){const T=F.textures,W=F.width,he=F.height;let me=o.COLOR_BUFFER_BIT;const ue=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=i.get(F),Te=T.length>1;if(Te)for(let rt=0;rt<T.length;rt++)t.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+rt,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+rt,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Be=F.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let rt=0;rt<T.length;rt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),Te){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qe.__webglColorRenderbuffer[rt]);const ye=i.get(T[rt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,W,he,0,0,W,he,me,o.NEAREST),d===!0&&(Dt.length=0,dt.length=0,Dt.push(o.COLOR_ATTACHMENT0+rt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Dt.push(ue),dt.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,dt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Te)for(let rt=0;rt<T.length;rt++){t.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+rt,o.RENDERBUFFER,qe.__webglColorRenderbuffer[rt]);const ye=i.get(T[rt]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+rt,o.TEXTURE_2D,ye,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&d){const T=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function V(F){return Math.min(s.maxSamples,F.samples)}function Yt(F){const T=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Mt(F){const T=c.render.frame;p.get(F)!==T&&(p.set(F,T),F.update())}function bt(F,T){const W=F.colorSpace,he=F.format,me=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||W!==Bn&&W!==Yr&&(Tt.getTransfer(W)===Ft?(he!==hi||me!==ti)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",W)),T}function We(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=K,this.setTexture2D=te,this.setTexture2DArray=se,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=en,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tw(o,e){function t(i,s=Yr){let a;const c=Tt.getTransfer(s);if(i===ti)return o.UNSIGNED_BYTE;if(i===uh)return o.UNSIGNED_SHORT_4_4_4_4;if(i===fh)return o.UNSIGNED_SHORT_5_5_5_1;if(i===X0)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===Y0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===W0)return o.BYTE;if(i===j0)return o.SHORT;if(i===La)return o.UNSIGNED_SHORT;if(i===ch)return o.INT;if(i===ji)return o.UNSIGNED_INT;if(i===di)return o.FLOAT;if(i===_r)return o.HALF_FLOAT;if(i===q0)return o.ALPHA;if(i===K0)return o.RGB;if(i===hi)return o.RGBA;if(i===xr)return o.DEPTH_COMPONENT;if(i===Ss)return o.DEPTH_STENCIL;if(i===dh)return o.RED;if(i===hh)return o.RED_INTEGER;if(i===So)return o.RG;if(i===ph)return o.RG_INTEGER;if(i===mh)return o.RGBA_INTEGER;if(i===Ec||i===Tc||i===wc||i===bc)if(c===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ec)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ec)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yd||i===Sd||i===Md||i===Ed)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===yd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ed)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Td||i===wd||i===bd||i===Ad||i===Rd||i===Cd||i===Pd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Td||i===wd)return c===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===bd)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ad)return a.COMPRESSED_R11_EAC;if(i===Rd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Cd)return a.COMPRESSED_RG11_EAC;if(i===Pd)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ld||i===Nd||i===Dd||i===Id||i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Vd||i===Hd||i===Gd||i===Wd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ld)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nd)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dd)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Id)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ud)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fd)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Od)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kd)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bd)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zd)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vd)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hd)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gd)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wd)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jd||i===Xd||i===Yd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===jd)return c===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qd||i===Kd||i===$d||i===Zd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===qd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Kd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$d)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new d_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qi({vertexShader:ww,fragmentShader:bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new Uc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rw extends ws{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",d=1,h=null,p=null,g=null,x=null,y=null,M=null;const E=typeof XRWebGLBinding<"u",S=new Aw,_={},A=t.getContextAttributes();let w=null,C=null;const L=[],I=[],D=new lt;let U=null;const b=new On;b.viewport=new jt;const P=new On;P.viewport=new jt;const O=[b,P],K=new RS;let Y=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=L[ne];return de===void 0&&(de=new Xf,L[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=L[ne];return de===void 0&&(de=new Xf,L[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=L[ne];return de===void 0&&(de=new Xf,L[ne]=de),de.getHandSpace()};function te(ne){const de=I.indexOf(ne.inputSource);if(de===-1)return;const Se=L[de];Se!==void 0&&(Se.update(ne.inputSource,ne.frame,h||c),Se.dispatchEvent({type:ne.type,data:ne.inputSource}))}function se(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",$);for(let ne=0;ne<L.length;ne++){const de=I[ne];de!==null&&(I[ne]=null,L[ne].disconnect(de))}Y=null,re=null,S.reset();for(const ne in _)delete _[ne];e.setRenderTarget(w),y=null,x=null,g=null,s=null,C=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,i.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){u=ne,i.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",se),s.addEventListener("inputsourceschange",$),A.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ke=null,Ie=null;A.depth&&(Ie=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=A.stencil?Ss:xr,ke=A.stencil?Na:ji);const yt={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:a};g=this.getBinding(),x=g.createProjectionLayer(yt),s.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),C=new Gi(x.textureWidth,x.textureHeight,{format:hi,type:ti,depthTexture:new Oa(x.textureWidth,x.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Gi(y.framebufferWidth,y.framebufferHeight,{format:hi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await s.requestReferenceSpace(u),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(ne){for(let de=0;de<ne.removed.length;de++){const Se=ne.removed[de],ke=I.indexOf(Se);ke>=0&&(I[ke]=null,L[ke].disconnect(Se))}for(let de=0;de<ne.added.length;de++){const Se=ne.added[de];let ke=I.indexOf(Se);if(ke===-1){for(let yt=0;yt<L.length;yt++)if(yt>=I.length){I.push(Se),ke=yt;break}else if(I[yt]===null){I[yt]=Se,ke=yt;break}if(ke===-1)break}const Ie=L[ke];Ie&&Ie.connect(Se)}}const X=new q,fe=new q;function oe(ne,de,Se){X.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(Se.matrixWorld);const ke=X.distanceTo(fe),Ie=de.projectionMatrix.elements,yt=Se.projectionMatrix.elements,en=Ie[14]/(Ie[10]-1),xt=Ie[14]/(Ie[10]+1),wt=(Ie[9]+1)/Ie[5],Dt=(Ie[9]-1)/Ie[5],dt=(Ie[8]-1)/Ie[0],Xt=(yt[8]+1)/yt[0],V=en*dt,Yt=en*Xt,Mt=ke/(-dt+Xt),bt=Mt*-dt;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(bt),ne.translateZ(Mt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ie[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const We=en+Mt,F=xt+Mt,T=V-bt,W=Yt+(ke-bt),he=wt*xt/F*We,me=Dt*xt/F*We;ne.projectionMatrix.makePerspective(T,W,he,me,We,F),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function B(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let de=ne.near,Se=ne.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),K.near=P.near=b.near=de,K.far=P.far=b.far=Se,(Y!==K.near||re!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),Y=K.near,re=K.far),K.layers.mask=ne.layers.mask|6,b.layers.mask=K.layers.mask&3,P.layers.mask=K.layers.mask&5;const ke=ne.parent,Ie=K.cameras;B(K,ke);for(let yt=0;yt<Ie.length;yt++)B(Ie[yt],ke);Ie.length===2?oe(K,b,P):K.projectionMatrix.copy(b.projectionMatrix),le(ne,K,ke)};function le(ne,de,Se){Se===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(Se.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Mo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&y===null))return d},this.setFoveation=function(ne){d=ne,x!==null&&(x.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(ne){return _[ne]};let Ce=null;function Ye(ne,de){if(p=de.getViewerPose(h||c),M=de,p!==null){const Se=p.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let ke=!1;Se.length!==K.cameras.length&&(K.cameras.length=0,ke=!0);for(let xt=0;xt<Se.length;xt++){const wt=Se[xt];let Dt=null;if(y!==null)Dt=y.getViewport(wt);else{const Xt=g.getViewSubImage(x,wt);Dt=Xt.viewport,xt===0&&(e.setRenderTargetTextures(C,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(C))}let dt=O[xt];dt===void 0&&(dt=new On,dt.layers.enable(xt),dt.viewport=new jt,O[xt]=dt),dt.matrix.fromArray(wt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(wt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),xt===0&&(K.matrix.copy(dt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),ke===!0&&K.cameras.push(dt)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=i.getBinding();const xt=g.getDepthInformation(Se[0]);xt&&xt.isValid&&xt.texture&&S.init(xt,s.renderState)}if(Ie&&Ie.includes("camera-access")&&E){e.state.unbindTexture(),g=i.getBinding();for(let xt=0;xt<Se.length;xt++){const wt=Se[xt].camera;if(wt){let Dt=_[wt];Dt||(Dt=new d_,_[wt]=Dt);const dt=g.getCameraImage(wt);Dt.sourceTexture=dt}}}}for(let Se=0;Se<L.length;Se++){const ke=I[Se],Ie=L[Se];ke!==null&&Ie!==void 0&&Ie.update(ke,de,h||c)}Ce&&Ce(ne,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ze=new g_;Ze.setAnimationLoop(Ye),this.setAnimationLoop=function(ne){Ce=ne},this.dispose=function(){}}}const _s=new Yi,Cw=new gt;function Pw(o,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function i(S,_){_.color.getRGB(S.fogColor.value,s_(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function s(S,_,A,w,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(S,_):_.isMeshToonMaterial?(a(S,_),g(S,_)):_.isMeshPhongMaterial?(a(S,_),p(S,_)):_.isMeshStandardMaterial?(a(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,C)):_.isMeshMatcapMaterial?(a(S,_),M(S,_)):_.isMeshDepthMaterial?a(S,_):_.isMeshDistanceMaterial?(a(S,_),E(S,_)):_.isMeshNormalMaterial?a(S,_):_.isLineBasicMaterial?(c(S,_),_.isLineDashedMaterial&&u(S,_)):_.isPointsMaterial?d(S,_,A,w):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Yn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Yn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const A=e.get(_),w=A.envMap,C=A.envMapRotation;w&&(S.envMap.value=w,_s.copy(C),_s.x*=-1,_s.y*=-1,_s.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),S.envMapRotation.value.setFromMatrix4(Cw.makeRotationFromEuler(_s)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function c(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function u(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function d(S,_,A,w){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*A,S.scale.value=w*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,A){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function E(S,_){const A=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Lw(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,w){const C=w.program;i.uniformBlockBinding(A,C)}function h(A,w){let C=s[A.id];C===void 0&&(M(A),C=p(A),s[A.id]=C,A.addEventListener("dispose",S));const L=w.program;i.updateUBOMapping(A,L);const I=e.render.frame;a[A.id]!==I&&(x(A),a[A.id]=I)}function p(A){const w=g();A.__bindingPointIndex=w;const C=o.createBuffer(),L=A.__size,I=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,L,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,C),C}function g(){for(let A=0;A<u;A++)if(c.indexOf(A)===-1)return c.push(A),A;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(A){const w=s[A.id],C=A.uniforms,L=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let I=0,D=C.length;I<D;I++){const U=Array.isArray(C[I])?C[I]:[C[I]];for(let b=0,P=U.length;b<P;b++){const O=U[b];if(y(O,I,b,L)===!0){const K=O.__offset,Y=Array.isArray(O.value)?O.value:[O.value];let re=0;for(let te=0;te<Y.length;te++){const se=Y[te],$=E(se);typeof se=="number"||typeof se=="boolean"?(O.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,K+re,O.__data)):se.isMatrix3?(O.__data[0]=se.elements[0],O.__data[1]=se.elements[1],O.__data[2]=se.elements[2],O.__data[3]=0,O.__data[4]=se.elements[3],O.__data[5]=se.elements[4],O.__data[6]=se.elements[5],O.__data[7]=0,O.__data[8]=se.elements[6],O.__data[9]=se.elements[7],O.__data[10]=se.elements[8],O.__data[11]=0):(se.toArray(O.__data,re),re+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,O.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(A,w,C,L){const I=A.value,D=w+"_"+C;if(L[D]===void 0)return typeof I=="number"||typeof I=="boolean"?L[D]=I:L[D]=I.clone(),!0;{const U=L[D];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return L[D]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function M(A){const w=A.uniforms;let C=0;const L=16;for(let D=0,U=w.length;D<U;D++){const b=Array.isArray(w[D])?w[D]:[w[D]];for(let P=0,O=b.length;P<O;P++){const K=b[P],Y=Array.isArray(K.value)?K.value:[K.value];for(let re=0,te=Y.length;re<te;re++){const se=Y[re],$=E(se),X=C%L,fe=X%$.boundary,oe=X+fe;C+=fe,oe!==0&&L-oe<$.storage&&(C+=L-oe),K.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=C,C+=$.storage}}}const I=C%L;return I>0&&(C+=L-I),A.__size=C,A.__cache={},this}function E(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Je("WebGLRenderer: Unsupported uniform value type.",A),w}function S(A){const w=A.target;w.removeEventListener("dispose",S);const C=c.indexOf(w.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function _(){for(const A in s)o.deleteBuffer(s[A]);c=[],s={},a={}}return{bind:d,update:h,dispose:_}}const Nw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function Dw(){return Fi===null&&(Fi=new Sh(Nw,16,16,So,_r),Fi.name="DFG_LUT",Fi.minFilter=un,Fi.magFilter=un,Fi.wrapS=zi,Fi.wrapT=zi,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class Iw{constructor(e={}){const{canvas:t=ry(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:y=ti}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const E=y,S=new Set([mh,ph,hh]),_=new Set([ti,ji,La,Na,uh,fh]),A=new Uint32Array(4),w=new Int32Array(4);let C=null,L=null;const I=[],D=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1;this._outputColorSpace=Mn;let O=0,K=0,Y=null,re=-1,te=null;const se=new jt,$=new jt;let X=null;const fe=new ct(0);let oe=0,B=t.width,le=t.height,Ce=1,Ye=null,Ze=null;const ne=new jt(0,0,B,le),de=new jt(0,0,B,le);let Se=!1;const ke=new Eh;let Ie=!1,yt=!1;const en=new gt,xt=new q,wt=new jt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Xt(){return Y===null?Ce:1}let V=i;function Yt(N,j){return t.getContext(N,j)}try{const N={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lh}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",At,!1),V===null){const j="webgl2";if(V=Yt(j,N),V===null)throw Yt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw st("WebGLRenderer: "+N.message),N}let Mt,bt,We,F,T,W,he,me,ue,qe,Te,Be,rt,ye,Re,He,je,be,ft,H,Le,Me,Ne,xe;function pe(){Mt=new DT(V),Mt.init(),Me=new Tw(V,Mt),bt=new TT(V,Mt,e,Me),We=new Mw(V,Mt),bt.reversedDepthBuffer&&x&&We.buffers.depth.setReversed(!0),F=new FT(V),T=new aw,W=new Ew(V,Mt,We,T,bt,Me,F),he=new bT(b),me=new NT(b),ue=new zS(V),Ne=new MT(V,ue),qe=new IT(V,ue,F,Ne),Te=new kT(V,qe,ue,F),ft=new OT(V,bt,W),He=new wT(T),Be=new ow(b,he,me,Mt,bt,Ne,He),rt=new Pw(b,T),ye=new cw,Re=new mw(Mt),be=new ST(b,he,me,We,Te,M,d),je=new yw(b,Te,bt),xe=new Lw(V,F,bt,We),H=new ET(V,Mt,F),Le=new UT(V,Mt,F),F.programs=Be.programs,b.capabilities=bt,b.extensions=Mt,b.properties=T,b.renderLists=ye,b.shadowMap=je,b.state=We,b.info=F}pe(),E!==ti&&(U=new zT(E,t.width,t.height,s,a));const Ae=new Rw(b,V);this.xr=Ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=Mt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Mt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(N){N!==void 0&&(Ce=N,this.setSize(B,le,!1))},this.getSize=function(N){return N.set(B,le)},this.setSize=function(N,j,ae=!0){if(Ae.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}B=N,le=j,t.width=Math.floor(N*Ce),t.height=Math.floor(j*Ce),ae===!0&&(t.style.width=N+"px",t.style.height=j+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,N,j)},this.getDrawingBufferSize=function(N){return N.set(B*Ce,le*Ce).floor()},this.setDrawingBufferSize=function(N,j,ae){B=N,le=j,Ce=ae,t.width=Math.floor(N*ae),t.height=Math.floor(j*ae),this.setViewport(0,0,N,j)},this.setEffects=function(N){if(E===ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let j=0;j<N.length;j++)if(N[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(se)},this.getViewport=function(N){return N.copy(ne)},this.setViewport=function(N,j,ae,ee){N.isVector4?ne.set(N.x,N.y,N.z,N.w):ne.set(N,j,ae,ee),We.viewport(se.copy(ne).multiplyScalar(Ce).round())},this.getScissor=function(N){return N.copy(de)},this.setScissor=function(N,j,ae,ee){N.isVector4?de.set(N.x,N.y,N.z,N.w):de.set(N,j,ae,ee),We.scissor($.copy(de).multiplyScalar(Ce).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(N){We.setScissorTest(Se=N)},this.setOpaqueSort=function(N){Ye=N},this.setTransparentSort=function(N){Ze=N},this.getClearColor=function(N){return N.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(N=!0,j=!0,ae=!0){let ee=0;if(N){let J=!1;if(Y!==null){const Pe=Y.texture.format;J=S.has(Pe)}if(J){const Pe=Y.texture.type,Ue=_.has(Pe),we=be.getClearColor(),Ve=be.getClearAlpha(),Oe=we.r,it=we.g,Qe=we.b;Ue?(A[0]=Oe,A[1]=it,A[2]=Qe,A[3]=Ve,V.clearBufferuiv(V.COLOR,0,A)):(w[0]=Oe,w[1]=it,w[2]=Qe,w[3]=Ve,V.clearBufferiv(V.COLOR,0,w))}else ee|=V.COLOR_BUFFER_BIT}j&&(ee|=V.DEPTH_BUFFER_BIT),ae&&(ee|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",At,!1),be.dispose(),ye.dispose(),Re.dispose(),T.dispose(),he.dispose(),me.dispose(),Te.dispose(),Ne.dispose(),xe.dispose(),Be.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",$r),Ae.removeEventListener("sessionend",Zr),mi.stop()};function ot(N){N.preventDefault(),Lc("WebGLRenderer: Context Lost."),P=!0}function Ut(){Lc("WebGLRenderer: Context Restored."),P=!1;const N=F.autoReset,j=je.enabled,ae=je.autoUpdate,ee=je.needsUpdate,J=je.type;pe(),F.autoReset=N,je.enabled=j,je.autoUpdate=ae,je.needsUpdate=ee,je.type=J}function At(N){st("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function qn(N){const j=N.target;j.removeEventListener("dispose",qn),Ln(j)}function Ln(N){Lo(N),T.remove(N)}function Lo(N){const j=T.get(N).programs;j!==void 0&&(j.forEach(function(ae){Be.releaseProgram(ae)}),N.isShaderMaterial&&Be.releaseShaderCache(N))}this.renderBufferDirect=function(N,j,ae,ee,J,Pe){j===null&&(j=Dt);const Ue=J.isMesh&&J.matrixWorld.determinant()<0,we=Wa(N,j,ae,ee,J);We.setMaterial(ee,Ue);let Ve=ae.index,Oe=1;if(ee.wireframe===!0){if(Ve=qe.getWireframeAttribute(ae),Ve===void 0)return;Oe=2}const it=ae.drawRange,Qe=ae.attributes.position;let pt=it.start*Oe,Rt=(it.start+it.count)*Oe;Pe!==null&&(pt=Math.max(pt,Pe.start*Oe),Rt=Math.min(Rt,(Pe.start+Pe.count)*Oe)),Ve!==null?(pt=Math.max(pt,0),Rt=Math.min(Rt,Ve.count)):Qe!=null&&(pt=Math.max(pt,0),Rt=Math.min(Rt,Qe.count));const Vt=Rt-pt;if(Vt<0||Vt===1/0)return;Ne.setup(J,ee,we,ae,Ve);let Bt,Pt=H;if(Ve!==null&&(Bt=ue.get(Ve),Pt=Le,Pt.setIndex(Bt)),J.isMesh)ee.wireframe===!0?(We.setLineWidth(ee.wireframeLinewidth*Xt()),Pt.setMode(V.LINES)):Pt.setMode(V.TRIANGLES);else if(J.isLine){let et=ee.linewidth;et===void 0&&(et=1),We.setLineWidth(et*Xt()),J.isLineSegments?Pt.setMode(V.LINES):J.isLineLoop?Pt.setMode(V.LINE_LOOP):Pt.setMode(V.LINE_STRIP)}else J.isPoints?Pt.setMode(V.POINTS):J.isSprite&&Pt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Fa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const et=J._multiDrawStarts,Nt=J._multiDrawCounts,Et=J._multiDrawCount,En=Ve?ue.get(Ve).bytesPerElement:1,Pi=T.get(ee).currentProgram.getUniforms();for(let sn=0;sn<Et;sn++)Pi.setValue(V,"_gl_DrawID",sn),Pt.render(et[sn]/En,Nt[sn])}else if(J.isInstancedMesh)Pt.renderInstances(pt,Vt,J.count);else if(ae.isInstancedBufferGeometry){const et=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Nt=Math.min(ae.instanceCount,et);Pt.renderInstances(pt,Vt,Nt)}else Pt.render(pt,Vt)};function vr(N,j,ae){N.transparent===!0&&N.side===Bi&&N.forceSinglePass===!1?(N.side=Yn,N.needsUpdate=!0,Jr(N,j,ae),N.side=gr,N.needsUpdate=!0,Jr(N,j,ae),N.side=Bi):Jr(N,j,ae)}this.compile=function(N,j,ae=null){ae===null&&(ae=N),L=Re.get(ae),L.init(j),D.push(L),ae.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),N!==ae&&N.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),L.setupLights();const ee=new Set;return N.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Pe=J.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){const we=Pe[Ue];vr(we,ae,J),ee.add(we)}else vr(Pe,ae,J),ee.add(Pe)}),L=D.pop(),ee},this.compileAsync=function(N,j,ae=null){const ee=this.compile(N,j,ae);return new Promise(J=>{function Pe(){if(ee.forEach(function(Ue){T.get(Ue).currentProgram.isReady()&&ee.delete(Ue)}),ee.size===0){J(N);return}setTimeout(Pe,10)}Mt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let No=null;function Kr(N){No&&No(N)}function $r(){mi.stop()}function Zr(){mi.start()}const mi=new g_;mi.setAnimationLoop(Kr),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(N){No=N,Ae.setAnimationLoop(N),N===null?mi.stop():mi.start()},Ae.addEventListener("sessionstart",$r),Ae.addEventListener("sessionend",Zr),this.render=function(N,j){if(j!==void 0&&j.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const ae=Ae.enabled===!0&&Ae.isPresenting===!0,ee=U!==null&&(Y===null||ae)&&U.begin(b,Y);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(j),j=Ae.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,j,Y),L=Re.get(N,D.length),L.init(j),D.push(L),en.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ke.setFromProjectionMatrix(en,Vi,j.reversedDepth),yt=this.localClippingEnabled,Ie=He.init(this.clippingPlanes,yt),C=ye.get(N,I.length),C.init(),I.push(C),Ae.enabled===!0&&Ae.isPresenting===!0){const Ue=b.xr.getDepthSensingMesh();Ue!==null&&Do(Ue,j,-1/0,b.sortObjects)}Do(N,j,0,b.sortObjects),C.finish(),b.sortObjects===!0&&C.sort(Ye,Ze),dt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,dt&&be.addToRenderList(C,N),this.info.render.frame++,Ie===!0&&He.beginShadows();const J=L.state.shadowsArray;if(je.render(J,N,j),Ie===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&U.hasRenderPass())===!1){const Ue=C.opaque,we=C.transmissive;if(L.setupLights(),j.isArrayCamera){const Ve=j.cameras;if(we.length>0)for(let Oe=0,it=Ve.length;Oe<it;Oe++){const Qe=Ve[Oe];Ha(Ue,we,N,Qe)}dt&&be.render(N);for(let Oe=0,it=Ve.length;Oe<it;Oe++){const Qe=Ve[Oe];Va(C,N,Qe,Qe.viewport)}}else we.length>0&&Ha(Ue,we,N,j),dt&&be.render(N),Va(C,N,j)}Y!==null&&K===0&&(W.updateMultisampleRenderTarget(Y),W.updateRenderTargetMipmap(Y)),ee&&U.end(b),N.isScene===!0&&N.onAfterRender(b,N,j),Ne.resetDefaultState(),re=-1,te=null,D.pop(),D.length>0?(L=D[D.length-1],Ie===!0&&He.setGlobalState(b.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?C=I[I.length-1]:C=null};function Do(N,j,ae,ee){if(N.visible===!1)return;if(N.layers.test(j.layers)){if(N.isGroup)ae=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(j);else if(N.isLight)L.pushLight(N),N.castShadow&&L.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ke.intersectsSprite(N)){ee&&wt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(en);const Ue=Te.update(N),we=N.material;we.visible&&C.push(N,Ue,we,ae,wt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||ke.intersectsObject(N))){const Ue=Te.update(N),we=N.material;if(ee&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),wt.copy(N.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),wt.copy(Ue.boundingSphere.center)),wt.applyMatrix4(N.matrixWorld).applyMatrix4(en)),Array.isArray(we)){const Ve=Ue.groups;for(let Oe=0,it=Ve.length;Oe<it;Oe++){const Qe=Ve[Oe],pt=we[Qe.materialIndex];pt&&pt.visible&&C.push(N,Ue,pt,ae,wt.z,Qe)}}else we.visible&&C.push(N,Ue,we,ae,wt.z,null)}}const Pe=N.children;for(let Ue=0,we=Pe.length;Ue<we;Ue++)Do(Pe[Ue],j,ae,ee)}function Va(N,j,ae,ee){const{opaque:J,transmissive:Pe,transparent:Ue}=N;L.setupLightsView(ae),Ie===!0&&He.setGlobalState(b.clippingPlanes,ae),ee&&We.viewport(se.copy(ee)),J.length>0&&ii(J,j,ae),Pe.length>0&&ii(Pe,j,ae),Ue.length>0&&ii(Ue,j,ae),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Ha(N,j,ae,ee){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ee.id]===void 0){const pt=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ee.id]=new Gi(1,1,{generateMipmaps:!0,type:pt?_r:ti,minFilter:dr,samples:bt.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Pe=L.state.transmissionRenderTarget[ee.id],Ue=ee.viewport||se;Pe.setSize(Ue.z*b.transmissionResolutionScale,Ue.w*b.transmissionResolutionScale);const we=b.getRenderTarget(),Ve=b.getActiveCubeFace(),Oe=b.getActiveMipmapLevel();b.setRenderTarget(Pe),b.getClearColor(fe),oe=b.getClearAlpha(),oe<1&&b.setClearColor(16777215,.5),b.clear(),dt&&be.render(ae);const it=b.toneMapping;b.toneMapping=Hi;const Qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),L.setupLightsView(ee),Ie===!0&&He.setGlobalState(b.clippingPlanes,ee),ii(N,ae,ee),W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Rt=0,Vt=j.length;Rt<Vt;Rt++){const Bt=j[Rt],{object:Pt,geometry:et,material:Nt,group:Et}=Bt;if(Nt.side===Bi&&Pt.layers.test(ee.layers)){const En=Nt.side;Nt.side=Yn,Nt.needsUpdate=!0,Io(Pt,ae,ee,et,Nt,Et),Nt.side=En,Nt.needsUpdate=!0,pt=!0}}pt===!0&&(W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe))}b.setRenderTarget(we,Ve,Oe),b.setClearColor(fe,oe),Qe!==void 0&&(ee.viewport=Qe),b.toneMapping=it}function ii(N,j,ae){const ee=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Pe=N.length;J<Pe;J++){const Ue=N[J],{object:we,geometry:Ve,group:Oe}=Ue;let it=Ue.material;it.allowOverride===!0&&ee!==null&&(it=ee),we.layers.test(ae.layers)&&Io(we,j,ae,Ve,it,Oe)}}function Io(N,j,ae,ee,J,Pe){N.onBeforeRender(b,j,ae,ee,J,Pe),N.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(b,j,ae,ee,N,Pe),J.transparent===!0&&J.side===Bi&&J.forceSinglePass===!1?(J.side=Yn,J.needsUpdate=!0,b.renderBufferDirect(ae,j,ee,J,N,Pe),J.side=gr,J.needsUpdate=!0,b.renderBufferDirect(ae,j,ee,J,N,Pe),J.side=Bi):b.renderBufferDirect(ae,j,ee,J,N,Pe),N.onAfterRender(b,j,ae,ee,J,Pe)}function Jr(N,j,ae){j.isScene!==!0&&(j=Dt);const ee=T.get(N),J=L.state.lights,Pe=L.state.shadowsArray,Ue=J.state.version,we=Be.getParameters(N,J.state,Pe,j,ae),Ve=Be.getProgramCacheKey(we);let Oe=ee.programs;ee.environment=N.isMeshStandardMaterial?j.environment:null,ee.fog=j.fog,ee.envMap=(N.isMeshStandardMaterial?me:he).get(N.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&N.envMap===null?j.environmentRotation:N.envMapRotation,Oe===void 0&&(N.addEventListener("dispose",qn),Oe=new Map,ee.programs=Oe);let it=Oe.get(Ve);if(it!==void 0){if(ee.currentProgram===it&&ee.lightsStateVersion===Ue)return Uo(N,we),it}else we.uniforms=Be.getUniforms(N),N.onBeforeCompile(we,b),it=Be.acquireProgram(we,Ve),Oe.set(Ve,it),ee.uniforms=we.uniforms;const Qe=ee.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Qe.clippingPlanes=He.uniform),Uo(N,we),ee.needsLights=Xa(N),ee.lightsStateVersion=Ue,ee.needsLights&&(Qe.ambientLightColor.value=J.state.ambient,Qe.lightProbe.value=J.state.probe,Qe.directionalLights.value=J.state.directional,Qe.directionalLightShadows.value=J.state.directionalShadow,Qe.spotLights.value=J.state.spot,Qe.spotLightShadows.value=J.state.spotShadow,Qe.rectAreaLights.value=J.state.rectArea,Qe.ltc_1.value=J.state.rectAreaLTC1,Qe.ltc_2.value=J.state.rectAreaLTC2,Qe.pointLights.value=J.state.point,Qe.pointLightShadows.value=J.state.pointShadow,Qe.hemisphereLights.value=J.state.hemi,Qe.directionalShadowMap.value=J.state.directionalShadowMap,Qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Qe.spotShadowMap.value=J.state.spotShadowMap,Qe.spotLightMatrix.value=J.state.spotLightMatrix,Qe.spotLightMap.value=J.state.spotLightMap,Qe.pointShadowMap.value=J.state.pointShadowMap,Qe.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.currentProgram=it,ee.uniformsList=null,it}function Ga(N){if(N.uniformsList===null){const j=N.currentProgram.getUniforms();N.uniformsList=Ac.seqWithValue(j.seq,N.uniforms)}return N.uniformsList}function Uo(N,j){const ae=T.get(N);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function Wa(N,j,ae,ee,J){j.isScene!==!0&&(j=Dt),W.resetTextureUnits();const Pe=j.fog,Ue=ee.isMeshStandardMaterial?j.environment:null,we=Y===null?b.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Bn,Ve=(ee.isMeshStandardMaterial?me:he).get(ee.envMap||Ue),Oe=ee.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,it=!!ae.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Qe=!!ae.morphAttributes.position,pt=!!ae.morphAttributes.normal,Rt=!!ae.morphAttributes.color;let Vt=Hi;ee.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Vt=b.toneMapping);const Bt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Pt=Bt!==void 0?Bt.length:0,et=T.get(ee),Nt=L.state.lights;if(Ie===!0&&(yt===!0||N!==te)){const hn=N===te&&ee.id===re;He.setState(ee,N,hn)}let Et=!1;ee.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Nt.state.version||et.outputColorSpace!==we||J.isBatchedMesh&&et.batching===!1||!J.isBatchedMesh&&et.batching===!0||J.isBatchedMesh&&et.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&et.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&et.instancing===!1||!J.isInstancedMesh&&et.instancing===!0||J.isSkinnedMesh&&et.skinning===!1||!J.isSkinnedMesh&&et.skinning===!0||J.isInstancedMesh&&et.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&et.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&et.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&et.instancingMorph===!1&&J.morphTexture!==null||et.envMap!==Ve||ee.fog===!0&&et.fog!==Pe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==He.numPlanes||et.numIntersection!==He.numIntersection)||et.vertexAlphas!==Oe||et.vertexTangents!==it||et.morphTargets!==Qe||et.morphNormals!==pt||et.morphColors!==Rt||et.toneMapping!==Vt||et.morphTargetsCount!==Pt)&&(Et=!0):(Et=!0,et.__version=ee.version);let En=et.currentProgram;Et===!0&&(En=Jr(ee,j,J));let Pi=!1,sn=!1,Qr=!1;const It=En.getUniforms(),ut=et.uniforms;if(We.useProgram(En.program)&&(Pi=!0,sn=!0,Qr=!0),ee.id!==re&&(re=ee.id,sn=!0),Pi||te!==N){We.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),It.setValue(V,"projectionMatrix",N.projectionMatrix),It.setValue(V,"viewMatrix",N.matrixWorldInverse);const pn=It.map.cameraPosition;pn!==void 0&&pn.setValue(V,xt.setFromMatrixPosition(N.matrixWorld)),bt.logarithmicDepthBuffer&&It.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&It.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),te!==N&&(te=N,sn=!0,Qr=!0)}if(et.needsLights&&(Nt.state.directionalShadowMap.length>0&&It.setValue(V,"directionalShadowMap",Nt.state.directionalShadowMap,W),Nt.state.spotShadowMap.length>0&&It.setValue(V,"spotShadowMap",Nt.state.spotShadowMap,W),Nt.state.pointShadowMap.length>0&&It.setValue(V,"pointShadowMap",Nt.state.pointShadowMap,W)),J.isSkinnedMesh){It.setOptional(V,J,"bindMatrix"),It.setOptional(V,J,"bindMatrixInverse");const hn=J.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),It.setValue(V,"boneTexture",hn.boneTexture,W))}J.isBatchedMesh&&(It.setOptional(V,J,"batchingTexture"),It.setValue(V,"batchingTexture",J._matricesTexture,W),It.setOptional(V,J,"batchingIdTexture"),It.setValue(V,"batchingIdTexture",J._indirectTexture,W),It.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&It.setValue(V,"batchingColorTexture",J._colorsTexture,W));const Nn=ae.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&ft.update(J,ae,En),(sn||et.receiveShadow!==J.receiveShadow)&&(et.receiveShadow=J.receiveShadow,It.setValue(V,"receiveShadow",J.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(ut.envMap.value=Ve,ut.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&j.environment!==null&&(ut.envMapIntensity.value=j.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=Dw()),sn&&(It.setValue(V,"toneMappingExposure",b.toneMappingExposure),et.needsLights&&ja(ut,Qr),Pe&&ee.fog===!0&&rt.refreshFogUniforms(ut,Pe),rt.refreshMaterialUniforms(ut,ee,Ce,le,L.state.transmissionRenderTarget[N.id]),Ac.upload(V,Ga(et),ut,W)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ac.upload(V,Ga(et),ut,W),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&It.setValue(V,"center",J.center),It.setValue(V,"modelViewMatrix",J.modelViewMatrix),It.setValue(V,"normalMatrix",J.normalMatrix),It.setValue(V,"modelMatrix",J.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const hn=ee.uniformsGroups;for(let pn=0,bs=hn.length;pn<bs;pn++){const Li=hn[pn];xe.update(Li,En),xe.bind(Li,En)}}return En}function ja(N,j){N.ambientLightColor.needsUpdate=j,N.lightProbe.needsUpdate=j,N.directionalLights.needsUpdate=j,N.directionalLightShadows.needsUpdate=j,N.pointLights.needsUpdate=j,N.pointLightShadows.needsUpdate=j,N.spotLights.needsUpdate=j,N.spotLightShadows.needsUpdate=j,N.rectAreaLights.needsUpdate=j,N.hemisphereLights.needsUpdate=j}function Xa(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(N,j,ae){const ee=T.get(N);ee.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),T.get(N.texture).__webglTexture=j,T.get(N.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ae,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,j){const ae=T.get(N);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0};const zc=V.createFramebuffer();this.setRenderTarget=function(N,j=0,ae=0){Y=N,O=j,K=ae;let ee=null,J=!1,Pe=!1;if(N){const we=T.get(N);if(we.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(V.FRAMEBUFFER,we.__webglFramebuffer),se.copy(N.viewport),$.copy(N.scissor),X=N.scissorTest,We.viewport(se),We.scissor($),We.setScissorTest(X),re=-1;return}else if(we.__webglFramebuffer===void 0)W.setupRenderTarget(N);else if(we.__hasExternalTextures)W.rebindTextures(N,T.get(N.texture).__webglTexture,T.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const it=N.depthTexture;if(we.__boundDepthTexture!==it){if(it!==null&&T.has(it)&&(N.width!==it.image.width||N.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(N)}}const Ve=N.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);const Oe=T.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Oe[j])?ee=Oe[j][ae]:ee=Oe[j],J=!0):N.samples>0&&W.useMultisampledRTT(N)===!1?ee=T.get(N).__webglMultisampledFramebuffer:Array.isArray(Oe)?ee=Oe[ae]:ee=Oe,se.copy(N.viewport),$.copy(N.scissor),X=N.scissorTest}else se.copy(ne).multiplyScalar(Ce).floor(),$.copy(de).multiplyScalar(Ce).floor(),X=Se;if(ae!==0&&(ee=zc),We.bindFramebuffer(V.FRAMEBUFFER,ee)&&We.drawBuffers(N,ee),We.viewport(se),We.scissor($),We.setScissorTest(X),J){const we=T.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,we.__webglTexture,ae)}else if(Pe){const we=j;for(let Ve=0;Ve<N.textures.length;Ve++){const Oe=T.get(N.textures[Ve]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ve,Oe.__webglTexture,ae,we)}}else if(N!==null&&ae!==0){const we=T.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,we.__webglTexture,ae)}re=-1},this.readRenderTargetPixels=function(N,j,ae,ee,J,Pe,Ue,we=0){if(!(N&&N.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=T.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){We.bindFramebuffer(V.FRAMEBUFFER,Ve);try{const Oe=N.textures[we],it=Oe.format,Qe=Oe.type;if(!bt.textureFormatReadable(it)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Qe)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=N.width-ee&&ae>=0&&ae<=N.height-J&&(N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+we),V.readPixels(j,ae,ee,J,Me.convert(it),Me.convert(Qe),Pe))}finally{const Oe=Y!==null?T.get(Y).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(N,j,ae,ee,J,Pe,Ue,we=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=T.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve)if(j>=0&&j<=N.width-ee&&ae>=0&&ae<=N.height-J){We.bindFramebuffer(V.FRAMEBUFFER,Ve);const Oe=N.textures[we],it=Oe.format,Qe=Oe.type;if(!bt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,pt),V.bufferData(V.PIXEL_PACK_BUFFER,Pe.byteLength,V.STREAM_READ),N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+we),V.readPixels(j,ae,ee,J,Me.convert(it),Me.convert(Qe),0);const Rt=Y!==null?T.get(Y).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Rt);const Vt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await sy(V,Vt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,pt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pe),V.deleteBuffer(pt),V.deleteSync(Vt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,j=null,ae=0){const ee=Math.pow(2,-ae),J=Math.floor(N.image.width*ee),Pe=Math.floor(N.image.height*ee),Ue=j!==null?j.x:0,we=j!==null?j.y:0;W.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,Ue,we,J,Pe),We.unbindTexture()};const Vc=V.createFramebuffer(),Kt=V.createFramebuffer();this.copyTextureToTexture=function(N,j,ae=null,ee=null,J=0,Pe=null){Pe===null&&(J!==0?(Fa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=J,J=0):Pe=0);let Ue,we,Ve,Oe,it,Qe,pt,Rt,Vt;const Bt=N.isCompressedTexture?N.mipmaps[Pe]:N.image;if(ae!==null)Ue=ae.max.x-ae.min.x,we=ae.max.y-ae.min.y,Ve=ae.isBox3?ae.max.z-ae.min.z:1,Oe=ae.min.x,it=ae.min.y,Qe=ae.isBox3?ae.min.z:0;else{const Nn=Math.pow(2,-J);Ue=Math.floor(Bt.width*Nn),we=Math.floor(Bt.height*Nn),N.isDataArrayTexture?Ve=Bt.depth:N.isData3DTexture?Ve=Math.floor(Bt.depth*Nn):Ve=1,Oe=0,it=0,Qe=0}ee!==null?(pt=ee.x,Rt=ee.y,Vt=ee.z):(pt=0,Rt=0,Vt=0);const Pt=Me.convert(j.format),et=Me.convert(j.type);let Nt;j.isData3DTexture?(W.setTexture3D(j,0),Nt=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(W.setTexture2DArray(j,0),Nt=V.TEXTURE_2D_ARRAY):(W.setTexture2D(j,0),Nt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Et=V.getParameter(V.UNPACK_ROW_LENGTH),En=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Pi=V.getParameter(V.UNPACK_SKIP_PIXELS),sn=V.getParameter(V.UNPACK_SKIP_ROWS),Qr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Bt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Bt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Oe),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qe);const It=N.isDataArrayTexture||N.isData3DTexture,ut=j.isDataArrayTexture||j.isData3DTexture;if(N.isDepthTexture){const Nn=T.get(N),hn=T.get(j),pn=T.get(Nn.__renderTarget),bs=T.get(hn.__renderTarget);We.bindFramebuffer(V.READ_FRAMEBUFFER,pn.__webglFramebuffer),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let Li=0;Li<Ve;Li++)It&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(N).__webglTexture,J,Qe+Li),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(j).__webglTexture,Pe,Vt+Li)),V.blitFramebuffer(Oe,it,Ue,we,pt,Rt,Ue,we,V.DEPTH_BUFFER_BIT,V.NEAREST);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||N.isRenderTargetTexture||T.has(N)){const Nn=T.get(N),hn=T.get(j);We.bindFramebuffer(V.READ_FRAMEBUFFER,Vc),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Kt);for(let pn=0;pn<Ve;pn++)It?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nn.__webglTexture,J,Qe+pn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nn.__webglTexture,J),ut?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,Pe,Vt+pn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,Pe),J!==0?V.blitFramebuffer(Oe,it,Ue,we,pt,Rt,Ue,we,V.COLOR_BUFFER_BIT,V.NEAREST):ut?V.copyTexSubImage3D(Nt,Pe,pt,Rt,Vt+pn,Oe,it,Ue,we):V.copyTexSubImage2D(Nt,Pe,pt,Rt,Oe,it,Ue,we);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ut?N.isDataTexture||N.isData3DTexture?V.texSubImage3D(Nt,Pe,pt,Rt,Vt,Ue,we,Ve,Pt,et,Bt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Nt,Pe,pt,Rt,Vt,Ue,we,Ve,Pt,Bt.data):V.texSubImage3D(Nt,Pe,pt,Rt,Vt,Ue,we,Ve,Pt,et,Bt):N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pe,pt,Rt,Ue,we,Pt,et,Bt.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pe,pt,Rt,Bt.width,Bt.height,Pt,Bt.data):V.texSubImage2D(V.TEXTURE_2D,Pe,pt,Rt,Ue,we,Pt,et,Bt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Et),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,En),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Pi),V.pixelStorei(V.UNPACK_SKIP_ROWS,sn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qr),Pe===0&&j.generateMipmaps&&V.generateMipmap(Nt),We.unbindTexture()},this.initRenderTarget=function(N){T.get(N).__webglFramebuffer===void 0&&W.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?W.setTextureCube(N,0):N.isData3DTexture?W.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?W.setTexture2DArray(N,0):W.setTexture2D(N,0),We.unbindTexture()},this.resetState=function(){O=0,K=0,Y=null,We.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function b0(o,e){if(e===qv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Jd||e===$0){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let d=0;d<u.count;d++)c.push(d);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Jd)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Uw extends Co{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zw(t)}),this.register(function(t){return new Vw(t)}),this.register(function(t){return new $w(t)}),this.register(function(t){return new Zw(t)}),this.register(function(t){return new Jw(t)}),this.register(function(t){return new Gw(t)}),this.register(function(t){return new Ww(t)}),this.register(function(t){return new jw(t)}),this.register(function(t){return new Xw(t)}),this.register(function(t){return new Bw(t)}),this.register(function(t){return new Yw(t)}),this.register(function(t){return new Hw(t)}),this.register(function(t){return new Kw(t)}),this.register(function(t){return new qw(t)}),this.register(function(t){return new Ow(t)}),this.register(function(t){return new Qw(t)}),this.register(function(t){return new eb(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=Pa.extractUrlBase(e);c=Pa.resolveURL(h,this.path)}else c=Pa.extractUrlBase(e);this.manager.itemStart(e);const u=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},d=new m_(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{a.parse(h,c,function(p){t(p),a.manager.itemEnd(e)},u)}catch(p){u(p)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===S_){try{c[St.KHR_BINARY_GLTF]=new tb(e)}catch(g){s&&s(g);return}a=JSON.parse(c[St.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new pb(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const g=this.pluginCallbacks[p](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let p=0;p<a.extensionsUsed.length;++p){const g=a.extensionsUsed[p],x=a.extensionsRequired||[];switch(g){case St.KHR_MATERIALS_UNLIT:c[g]=new kw;break;case St.KHR_DRACO_MESH_COMPRESSION:c[g]=new nb(a,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:c[g]=new ib;break;case St.KHR_MESH_QUANTIZATION:c[g]=new rb;break;default:x.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(c),h.setPlugins(u),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function Fw(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ow{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const p=new ct(16777215);d.color!==void 0&&p.setRGB(d.color[0],d.color[1],d.color[2],Bn);const g=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new nh(p),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new TS(p),h.distance=g;break;case"spot":h=new MS(p),h.distance=g,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),Oi(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(d){return i._getNodeRef(t.cache,u,d)})}}class kw{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return Ms}extendParams(e,t,i){const s=[];e.color=new ct(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Bn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,Mn))}return Promise.all(s)}}class Bw{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class zw{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(u,u)}return Promise.all(a)}}class Vw{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class Hw{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class Gw{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],Bn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,Mn)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class Ww{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class jw{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(u[0],u[1],u[2],Bn),Promise.all(a)}}class Xw{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class Yw{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(u[0],u[1],u[2],Bn),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,Mn)),Promise.all(a)}}class qw{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class Kw{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class $w{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class Zw{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let d=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(d=h)}return i.loadTextureImage(e,c.source,d)}}class Jw{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let d=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(d=h)}return i.loadTextureImage(e,c.source,d)}}class Qw{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const d=s.byteOffset||0,h=s.byteLength||0,p=s.count,g=s.byteStride,x=new Uint8Array(u,d,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(p,g,x,s.mode,s.filter).then(function(y){return y.buffer}):c.ready.then(function(){const y=new ArrayBuffer(p*g);return c.decodeGltfBuffer(new Uint8Array(y),p,g,x,s.mode,s.filter),y})})}else return null}}class eb{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==fi.TRIANGLES&&h.mode!==fi.TRIANGLE_STRIP&&h.mode!==fi.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],d={};for(const h in c)u.push(this.parser.getDependency("accessor",c[h]).then(p=>(d[h]=p,d[h])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(h=>{const p=h.pop(),g=p.isGroup?p.children:[p],x=h[0].count,y=[];for(const M of g){const E=new gt,S=new q,_=new Xi,A=new q(1,1,1),w=new Zy(M.geometry,M.material,x);for(let C=0;C<x;C++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,C),d.ROTATION&&_.fromBufferAttribute(d.ROTATION,C),d.SCALE&&A.fromBufferAttribute(d.SCALE,C),w.setMatrixAt(C,E.compose(S,_,A));for(const C in d)if(C==="_COLOR_0"){const L=d[C];w.instanceColor=new eh(L.array,L.itemSize,L.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,d[C]);Jt.prototype.copy.call(w,M),this.parser.assignFinalMaterial(w),y.push(w)}return p.isGroup?(p.clear(),p.add(...y),p):y[0]}))}}const S_="glTF",Ea=12,A0={JSON:1313821514,BIN:5130562};class tb{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ea),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==S_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ea,a=new DataView(e,Ea);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const d=a.getUint32(c,!0);if(c+=4,d===A0.JSON){const h=new Uint8Array(e,Ea+c,u);this.content=i.decode(h)}else if(d===A0.BIN){const h=Ea+c;this.body=e.slice(h,h+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class nb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},d={},h={};for(const p in c){const g=sh[p]||p.toLowerCase();u[g]=c[p]}for(const p in e.attributes){const g=sh[p]||p.toLowerCase();if(c[p]!==void 0){const x=i.accessors[e.attributes[p]],y=_o[x.componentType];h[g]=y.name,d[g]=x.normalized===!0}}return t.getDependency("bufferView",a).then(function(p){return new Promise(function(g,x){s.decodeDracoFile(p,function(y){for(const M in y.attributes){const E=y.attributes[M],S=d[M];S!==void 0&&(E.normalized=S)}g(y)},u,h,Bn,x)})})}}class ib{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rb{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class M_ extends za{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=u*2,h=u*3,p=s-t,g=(i-t)/p,x=g*g,y=x*g,M=e*h,E=M-h,S=-2*y+3*x,_=y-x,A=1-S,w=_-x+g;for(let C=0;C!==u;C++){const L=c[E+C+u],I=c[E+C+d]*p,D=c[M+C+u],U=c[M+C]*p;a[C]=A*L+w*I+S*D+_*U}return a}}const sb=new Xi;class ob extends M_{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return sb.fromArray(a).normalize().toArray(a),a}}const fi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},_o={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},R0={9728:cn,9729:un,9984:G0,9985:Mc,9986:ba,9987:dr},C0={33071:zi,33648:Rc,10497:yo},sd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ab={CUBICSPLINE:void 0,LINEAR:Ia,STEP:Da},od={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lb(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new wh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gr})),o.DefaultMaterial}function xs(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Oi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cb(o,e,t){let i=!1,s=!1,a=!1;for(let h=0,p=e.length;h<p;h++){const g=e[h];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],d=[];for(let h=0,p=e.length;h<p;h++){const g=e[h];if(i){const x=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(x)}if(s){const x=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(x)}if(a){const x=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;d.push(x)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d)]).then(function(h){const p=h[0],g=h[1],x=h[2];return i&&(o.morphAttributes.position=p),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=x),o.morphTargetsRelative=!0,o})}function ub(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fb(o){let e;const t=o.extensions&&o.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ad(t.attributes):e=o.indices+":"+ad(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+ad(o.targets[i]);return e}function ad(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function oh(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function db(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const hb=new gt;class pb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const d=u.match(/Version\/(\d+)/);s=i&&d?parseInt(d[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new yS(this.options.manager):this.textureLoader=new AS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new m_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return xs(a,u,s),Oi(u,s),Promise.all(i._invokeAll(function(d){return d.afterRoot&&d.afterRoot(u)})).then(function(){for(const d of u.scenes)d.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,d=c.length;u<d;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const d=this.associations.get(c);d!=null&&this.associations.set(u,d);for(const[h,p]of c.children.entries())a(p,u.children[h])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(Pa.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=sd[s.type],u=_o[s.componentType],d=s.normalized===!0,h=new u(s.count*c);return Promise.resolve(new kn(h,c,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],d=sd[s.type],h=_o[s.componentType],p=h.BYTES_PER_ELEMENT,g=p*d,x=s.byteOffset||0,y=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(y&&y!==g){const _=Math.floor(x/y),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let w=t.cache.get(A);w||(E=new h(u,_*y,s.count*y/p),w=new Xy(E,y/p),t.cache.add(A,w)),S=new yh(w,d,x%y/p,M)}else u===null?E=new h(s.count*d):E=new h(u,x,s.count*d),S=new kn(E,d,M);if(s.sparse!==void 0){const _=sd.SCALAR,A=_o[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,L=new A(c[1],w,s.sparse.count*_),I=new h(c[2],C,s.sparse.count*d);u!==null&&(S=new kn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let D=0,U=L.length;D<U;D++){const b=L[D];if(S.setX(b,I[D*d]),d>=2&&S.setY(b,I[D*d+1]),d>=3&&S.setZ(b,I[D*d+2]),d>=4&&S.setW(b,I[D*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const d=i.manager.getHandler(c.uri);d!==null&&(u=d)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],d=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=c.name||u.name||"",p.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(p.name=u.uri);const x=(a.samplers||{})[c.sampler]||{};return p.magFilter=R0[x.magFilter]||un,p.minFilter=R0[x.minFilter]||dr,p.wrapS=C0[x.wrapS]||yo,p.wrapT=C0[x.wrapT]||yo,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==cn&&p.minFilter!==un,s.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let d=c.uri||"",h=!1;if(c.bufferView!==void 0)d=i.getDependency("bufferView",c.bufferView).then(function(g){h=!0;const x=new Blob([g],{type:c.mimeType});return d=u.createObjectURL(x),d});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(d).then(function(g){return new Promise(function(x,y){let M=x;t.isImageBitmapLoader===!0&&(M=function(E){const S=new vn(E);S.needsUpdate=!0,x(S)}),t.load(Pa.resolveURL(g,a.path),M,void 0,y)})}).then(function(g){return h===!0&&u.revokeObjectURL(d),Oi(g,c),g.userData.mimeType=c.mimeType||db(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),g});return this.sourceCache[e]=p,p}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[St.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const d=a.associations.get(c);c=a.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,d)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let d=this.cache.get(u);d||(d=new f_,Wi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,d.sizeAttenuation=!1,this.cache.add(u,d)),i=d}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let d=this.cache.get(u);d||(d=new u_,Wi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,this.cache.add(u,d)),i=d}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let d=this.cache.get(u);d||(d=i.clone(),a&&(d.vertexColors=!0),c&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(u,d),this.associations.set(d,this.associations.get(i))),i=d}e.material=i}getMaterialType(){return wh}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},d=a.extensions||{},h=[];if(d[St.KHR_MATERIALS_UNLIT]){const g=s[St.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),h.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new ct(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const x=g.baseColorFactor;u.color.setRGB(x[0],x[1],x[2],Bn),u.opacity=x[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(u,"map",g.baseColorTexture,Mn)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(x){return x.getMaterialType&&x.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(x){return x.extendMaterialParams&&x.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=Bi);const p=a.alphaMode||od.OPAQUE;if(p===od.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,p===od.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Ms&&(h.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new lt(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==Ms&&(h.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Ms){const g=a.emissiveFactor;u.emissive=new ct().setRGB(g[0],g[1],g[2],Bn)}return a.emissiveTexture!==void 0&&c!==Ms&&h.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,Mn)),Promise.all(h).then(function(){const g=new c(u);return a.name&&(g.name=a.name),Oi(g,a),t.associations.set(g,{materials:e}),a.extensions&&xs(s,g,a),g})}createUniqueName(e){const t=kt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(d){return P0(d,u,t)})}const c=[];for(let u=0,d=e.length;u<d;u++){const h=e[u],p=fb(h),g=s[p];if(g)c.push(g.promise);else{let x;h.extensions&&h.extensions[St.KHR_DRACO_MESH_COMPRESSION]?x=a(h):x=P0(new pi,h,t),s[p]={primitive:h,promise:x},c.push(x)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d].material===void 0?lb(this.cache):this.getDependency("material",c[d].material);u.push(p)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(d){const h=d.slice(0,d.length-1),p=d[d.length-1],g=[];for(let y=0,M=p.length;y<M;y++){const E=p[y],S=c[y];let _;const A=h[y];if(S.mode===fi.TRIANGLES||S.mode===fi.TRIANGLE_STRIP||S.mode===fi.TRIANGLE_FAN||S.mode===void 0)_=a.isSkinnedMesh===!0?new qy(E,A):new ni(E,A),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),S.mode===fi.TRIANGLE_STRIP?_.geometry=b0(_.geometry,$0):S.mode===fi.TRIANGLE_FAN&&(_.geometry=b0(_.geometry,Jd));else if(S.mode===fi.LINES)_=new tS(E,A);else if(S.mode===fi.LINE_STRIP)_=new Th(E,A);else if(S.mode===fi.LINE_LOOP)_=new nS(E,A);else if(S.mode===fi.POINTS)_=new iS(E,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(_.geometry.morphAttributes).length>0&&ub(_,a),_.name=t.createUniqueName(a.name||"mesh_"+e),Oi(_,a),S.extensions&&xs(s,_,S),t.assignFinalMaterial(_),g.push(_)}for(let y=0,M=g.length;y<M;y++)t.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return a.extensions&&xs(s,g[0],a),g[0];const x=new Es;a.extensions&&xs(s,x,a),t.associations.set(x,{meshes:e});for(let y=0,M=g.length;y<M;y++)x.add(g[y]);return x})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new On(Q0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Oc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Oi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],d=[];for(let h=0,p=c.length;h<p;h++){const g=c[h];if(g){u.push(g);const x=new gt;a!==null&&x.fromArray(a.array,h*16),d.push(x)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Mh(u,d)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],d=[],h=[],p=[];for(let g=0,x=s.channels.length;g<x;g++){const y=s.channels[g],M=s.samplers[y.sampler],E=y.target,S=E.node,_=s.parameters!==void 0?s.parameters[M.input]:M.input,A=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",_)),d.push(this.getDependency("accessor",A)),h.push(M),p.push(E))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d),Promise.all(h),Promise.all(p)]).then(function(g){const x=g[0],y=g[1],M=g[2],E=g[3],S=g[4],_=[];for(let w=0,C=x.length;w<C;w++){const L=x[w],I=y[w],D=M[w],U=E[w],b=S[w];if(L===void 0)continue;L.updateMatrix&&L.updateMatrix();const P=i._createAnimationTracks(L,I,D,U,b);if(P)for(let O=0;O<P.length;O++)_.push(P[O])}const A=new hS(a,void 0,_);return Oi(A,s),A})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let d=0,h=s.weights.length;d<h;d++)u.morphTargetInfluences[d]=s.weights[d]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let h=0,p=u.length;h<p;h++)c.push(i.getDependency("node",u[h]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),d]).then(function(h){const p=h[0],g=h[1],x=h[2];x!==null&&p.traverse(function(y){y.isSkinnedMesh&&y.bind(x,hb)});for(let y=0,M=g.length;y<M;y++)p.add(g[y]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],d=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&u.push(d),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){u.push(h)}),this.nodeCache[e]=Promise.all(u).then(function(h){let p;if(a.isBone===!0?p=new c_:h.length>1?p=new Es:h.length===1?p=h[0]:p=new Jt,p!==h[0])for(let g=0,x=h.length;g<x;g++)p.add(h[g]);if(a.name&&(p.userData.name=a.name,p.name=c),Oi(p,a),a.extensions&&xs(i,p,a),a.matrix!==void 0){const g=new gt;g.fromArray(a.matrix),p.applyMatrix4(g)}else a.translation!==void 0&&p.position.fromArray(a.translation),a.rotation!==void 0&&p.quaternion.fromArray(a.rotation),a.scale!==void 0&&p.scale.fromArray(a.scale);if(!s.associations.has(p))s.associations.set(p,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){const g=s.associations.get(p);s.associations.set(p,{...g})}return s.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new Es;i.name&&(a.name=s.createUniqueName(i.name)),Oi(a,i),i.extensions&&xs(t,a,i);const c=i.nodes||[],u=[];for(let d=0,h=c.length;d<h;d++)u.push(s.getDependency("node",c[d]));return Promise.all(u).then(function(d){for(let p=0,g=d.length;p<g;p++)a.add(d[p]);const h=p=>{const g=new Map;for(const[x,y]of s.associations)(x instanceof Wi||x instanceof vn)&&g.set(x,y);return p.traverse(x=>{const y=s.associations.get(x);y!=null&&g.set(x,y)}),g};return s.associations=h(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,d=[];jr[a.path]===jr.weights?e.traverse(function(x){x.morphTargetInfluences&&d.push(x.name?x.name:x.uuid)}):d.push(u);let h;switch(jr[a.path]){case jr.weights:h=To;break;case jr.rotation:h=wo;break;case jr.translation:case jr.scale:h=bo;break;default:switch(i.itemSize){case 1:h=To;break;case 2:case 3:default:h=bo;break}break}const p=s.interpolation!==void 0?ab[s.interpolation]:Ia,g=this._getArrayFromAccessor(i);for(let x=0,y=d.length;x<y;x++){const M=new h(d[x]+"."+jr[a.path],t.array,g,p);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=oh(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof wo?ob:M_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mb(o,e,t){const i=e.attributes,s=new Ki;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],d=u.min,h=u.max;if(d!==void 0&&h!==void 0){if(s.set(new q(d[0],d[1],d[2]),new q(h[0],h[1],h[2])),u.normalized){const p=oh(_o[u.componentType]);s.min.multiplyScalar(p),s.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new q,d=new q;for(let h=0,p=a.length;h<p;h++){const g=a[h];if(g.POSITION!==void 0){const x=t.json.accessors[g.POSITION],y=x.min,M=x.max;if(y!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),x.normalized){const E=oh(_o[x.componentType]);d.multiplyScalar(E)}u.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new $i;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function P0(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(d){o.setAttribute(u,d)})}for(const c in i){const u=sh[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return Tt.workingColorSpace!==Bn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`),Oi(o,e),mb(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?cb(o,e.targets,t):o})}const L0={type:"change"},Ch={type:"start"},E_={type:"end"},yc=new ka,N0=new Xr,gb=Math.cos(70*Q0.DEG2RAD),ln=new q,Xn=2*Math.PI,zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ld=1e-6;class _b extends kS{constructor(e,t=null){super(e,t),this.state=zt.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:po.ROTATE,MIDDLE:po.DOLLY,RIGHT:po.PAN},this.touches={ONE:ho.ROTATE,TWO:ho.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Xi,this._lastTargetPosition=new q,this._quat=new Xi().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new t0,this._sphericalDelta=new t0,this._scale=1,this._panOffset=new q,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new q,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vb.bind(this),this._onPointerDown=xb.bind(this),this._onPointerUp=yb.bind(this),this._onContextMenu=Ab.bind(this),this._onMouseWheel=Eb.bind(this),this._onKeyDown=Tb.bind(this),this._onTouchStart=wb.bind(this),this._onTouchMove=bb.bind(this),this._onMouseDown=Sb.bind(this),this._onMouseMove=Mb.bind(this),this._interceptControlDown=Rb.bind(this),this._interceptControlUp=Cb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(L0),this.update(),this.state=zt.NONE}update(e=null){const t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Xn:i>Math.PI&&(i-=Xn),s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=ln.length();c=this._clampDistance(u*this._scale);const d=u-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const u=new q(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const h=new q(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),c=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(yc.origin.copy(this.object.position),yc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yc.direction))<gb?this.object.lookAt(this.target):(N0.setFromNormalAndCoplanarPoint(this.object.up,this.target),yc.intersectPlane(N0,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>ld||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ld||this._lastTargetPosition.distanceToSquared(this.target)>ld?(this.dispatchEvent(L0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xn/60*this.autoRotateSpeed*e:Xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ln.copy(s).sub(this.target);let a=ln.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,c=i.width,u=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xb(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function vb(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function yb(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(E_),this.state=zt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Sb(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case po.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=zt.DOLLY;break;case po.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=zt.ROTATE}break;case po.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=zt.PAN}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(Ch)}function Mb(o){switch(this.state){case zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function Eb(o){this.enabled===!1||this.enableZoom===!1||this.state!==zt.NONE||(o.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(E_))}function Tb(o){this.enabled!==!1&&this._handleKeyDown(o)}function wb(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case ho.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=zt.TOUCH_ROTATE;break;case ho.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=zt.TOUCH_PAN;break;default:this.state=zt.NONE}break;case 2:switch(this.touches.TWO){case ho.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=zt.TOUCH_DOLLY_PAN;break;case ho.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=zt.TOUCH_DOLLY_ROTATE;break;default:this.state=zt.NONE}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(Ch)}function bb(o){switch(this._trackPointer(o),this.state){case zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=zt.NONE}}function Ab(o){this.enabled!==!1&&o.preventDefault()}function Rb(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cb(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pb({modelUrl:o,activeEffect:e,settings:t,onCanvasReady:i,onFpsUpdate:s,setIsProcessing:a}){const c=$e.useRef(null),u=$e.useRef(null),d=$e.useRef(null),h=$e.useRef(null),p=$e.useRef(null),g=$e.useRef(null),x=$e.useRef(0),y=$e.useRef(0),M=$e.useRef(0),E=$e.useRef(null),S=$e.useRef(null),[_,A]=$e.useState(!1),[w,C]=$e.useState(null);$e.useEffect(()=>{if(!c.current)return;const I=new jy;I.background=new ct(t.bgColor),d.current=I;const D=new On(75,c.current.clientWidth/c.current.clientHeight,.1,1e3);D.position.z=5,h.current=D;const U=new Iw({antialias:!0,preserveDrawingBuffer:!0});U.setSize(c.current.clientWidth,c.current.clientHeight),U.setPixelRatio(window.devicePixelRatio),c.current.appendChild(U.domElement),u.current=U;const b=new _b(D,U.domElement);b.enableDamping=!0,b.dampingFactor=.05,g.current=b;const P=new bS(16777215,.5);I.add(P);const O=new nh(16777215,1);O.position.set(5,5,5),I.add(O);const K=new nh(16777215,.5);K.position.set(-5,-5,-5),I.add(K);const Y=document.createElement("canvas");E.current=Y,S.current=Y.getContext("2d");const re=()=>{if(!c.current||!D||!U)return;const te=c.current.clientWidth,se=c.current.clientHeight;D.aspect=te/se,D.updateProjectionMatrix(),U.setSize(te,se)};return window.addEventListener("resize",re),i(()=>E.current),()=>{var te;window.removeEventListener("resize",re),u.current&&((te=c.current)==null||te.removeChild(u.current.domElement),u.current.dispose()),x.current&&cancelAnimationFrame(x.current)}},[i,t.bgColor]),$e.useEffect(()=>{if(!o||!d.current)return;A(!0),C(null),a(!0),new Uw().load(o,D=>{var re,te;p.current&&((re=d.current)==null||re.remove(p.current));const U=D.scene,b=new Ki().setFromObject(U),P=b.getCenter(new q),O=b.getSize(new q),Y=2/Math.max(O.x,O.y,O.z);U.position.sub(P),U.scale.multiplyScalar(Y),(te=d.current)==null||te.add(U),p.current=U,A(!1),a(!1)},void 0,D=>{console.error("Error loading model:",D),C("Failed to load 3D model"),A(!1),a(!1)})},[o,a]);const L=$e.useCallback(()=>{if(!u.current||!d.current||!h.current||!g.current)return;if(g.current.update(),u.current.render(d.current,h.current),E.current&&S.current){const D=u.current.domElement.width,U=u.current.domElement.height;E.current.width=D,E.current.height=U,S.current.drawImage(u.current.domElement,0,0),Lb(S.current,D,U,e,t)}const I=performance.now();M.current++,I-y.current>=1e3&&(s(M.current),M.current=0,y.current=I),x.current=requestAnimationFrame(L)},[e,t,s]);return $e.useEffect(()=>{if(o)return y.current=performance.now(),M.current=0,x.current=requestAnimationFrame(L),()=>{x.current&&cancelAnimationFrame(x.current)}},[o,L]),$e.useEffect(()=>{d.current&&(d.current.background=new ct(t.bgColor))},[t.bgColor]),ce.jsxs("div",{ref:c,className:"w-full h-full relative",children:[_&&ce.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-term-bg/80 z-10",children:ce.jsx("div",{className:"text-term-text-dim text-sm",children:"Loading 3D Model..."})}),w&&ce.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-term-bg/80 z-10",children:ce.jsx("div",{className:"text-red-500 text-sm",children:w})}),!o&&!_&&ce.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:ce.jsxs("div",{className:"text-center",children:[ce.jsx("p",{className:"text-term-text-dim text-[18px] mb-1",children:"No 3D Model"}),ce.jsx("p",{className:"text-term-text-dim text-[14px] opacity-60",children:"Drop a .GLB file to view"})]})})]})}function Lb(o,e,t,i,s){const a=o.getImageData(0,0,e,t),c=a.data;switch(i){case"pixelate":case"pixel-grid":case"mosaic":{const u=Math.max(1,s.cellSize),d=i==="pixel-grid"?1:0,h=i==="mosaic"?5:0;for(let p=0;p<t;p+=u)for(let g=0;g<e;g+=u){let x=0,y=0,M=0,E=0;for(let S=0;S<u&&p+S<t;S++)for(let _=0;_<u&&g+_<e;_++){const A=((p+S)*e+(g+_))*4;x+=c[A],y+=c[A+1],M+=c[A+2],E++}if(x=Math.floor(x/E),y=Math.floor(y/E),M=Math.floor(M/E),h>0){const S=255/(h-1);x=Math.round(x/S)*S,y=Math.round(y/S)*S,M=Math.round(M/S)*S}for(let S=d;S<u-d&&p+S<t;S++)for(let _=d;_<u-d&&g+_<e;_++){const A=((p+S)*e+(g+_))*4;c[A]=x,c[A+1]=y,c[A+2]=M}}break}case"vhs-glitch":{const u=performance.now()*.001,d=s.threshold;for(let h=0;h<t;h++){const p=Math.floor(Math.sin(h*.01+u*3)*d*10);for(let g=0;g<e;g++){const x=Math.max(0,Math.min(e-1,g+p)),y=(h*e+g)*4,M=(h*e+x)*4,E=Math.floor(Math.sin(h*.005+u)*3),S=(h*e+Math.max(0,Math.min(e-1,g+E)))*4,_=(h*e+Math.max(0,Math.min(e-1,g-E)))*4;c[y]=c[S],c[y+1]=c[M+1],c[y+2]=c[_+2]}}break}case"grain":{const u=s.grainIntensity;for(let d=0;d<c.length;d+=4){const h=(Math.random()-.5)*u*100;c[d]=Math.max(0,Math.min(255,c[d]+h)),c[d+1]=Math.max(0,Math.min(255,c[d+1]+h)),c[d+2]=Math.max(0,Math.min(255,c[d+2]+h))}break}case"noise":{const u=s.noiseIntensity;for(let d=0;d<c.length;d+=4)Math.random()<u&&(c[d]=Math.random()*255,c[d+1]=Math.random()*255,c[d+2]=Math.random()*255);break}case"scanlines":{for(let u=0;u<t;u++){const d=u%2===0?1:.7;for(let h=0;h<e;h++){const p=(u*e+h)*4;c[p]*=d,c[p+1]*=d,c[p+2]*=d}}break}case"invert":{for(let u=0;u<c.length;u+=4)c[u]=255-c[u],c[u+1]=255-c[u+1],c[u+2]=255-c[u+2];break}case"threshold":{const u=s.threshold*255,d=D0(s.fgColor)??{r:255,g:255,b:255},h=D0(s.bgColor)??{r:0,g:0,b:0};for(let p=0;p<c.length;p+=4){const x=(c[p]+c[p+1]+c[p+2])/3>u?d:h;c[p]=x.r,c[p+1]=x.g,c[p+2]=x.b}break}}if(o.putImageData(a,0,0),s.scanlines&&i!=="scanlines"){o.fillStyle="rgba(0,0,0,0.15)";for(let u=0;u<t;u+=2)o.fillRect(0,u,e,1)}}function D0(o){const e=o.replace("#","");if(e.length!==6)return null;const t=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),s=parseInt(e.slice(4,6),16);return Number.isNaN(t)||Number.isNaN(i)||Number.isNaN(s)?null:{r:t,g:i,b:s}}function Nb({activeEffect:o,settings:e,setSettings:t,sourceImage:i,previewMode:s,setPreviewMode:a,onResetSettings:c,onExport:u}){const d=(p,g)=>{t({...e,[p]:g})},h=p=>({ascii:"ASCII",dithering:"Dithering","half-tone":"Half-tone","matrix-rain":"Matrix Rain","matrix-dots":"Matrix Dots",mosaic:"Mosaic","pixel-grid":"Pixel Grid",pixelate:"Pixelate",threshold:"Threshold","edge-detection":"Edge Detection",convolution:"Convolution","edge-lines":"Edge Lines","halftone-dots":"Halftone Dots",crosses:"Crosses",invert:"Invert",led:"LED","pixel-sorting":"Pixel Sorting",halftone:"Halftone","halftone-cmyk":"CMYK Halftone","vhs-glitch":"VHS Glitch",scanlines:"Scanlines",grain:"Grain",noise:"Noise"})[p]||p;return ce.jsxs("div",{className:"w-[318px] xl:w-[336px] border-l border-term-border bg-term-panel flex flex-col overflow-hidden",children:[ce.jsxs("div",{className:"px-3 py-2 border-b border-term-border flex items-center justify-between",children:[ce.jsx("span",{className:"text-term-text-dim text-[11px] uppercase tracking-wide",children:"- Settings"}),ce.jsx("button",{type:"button",onClick:c,className:"text-term-text-dim text-[11px] hover:text-term-text",children:"Reset"})]}),ce.jsxs("div",{className:"flex-1 overflow-y-auto",children:[ce.jsx("div",{className:"px-3 py-2 border-b border-term-border",children:ce.jsx("span",{className:"text-term-text-bright text-[14px] truncate",children:h(o)})}),ce.jsx(Ta,{title:"Preview",children:ce.jsx("div",{className:"grid grid-cols-3 gap-1",children:["processed","split","original"].map(p=>ce.jsx("button",{onClick:()=>a(p),className:`px-2 py-1 text-[10px] uppercase border ${s===p?"border-term-accent text-term-accent":"border-term-border text-term-text-dim hover:border-term-text"}`,children:p},p))})}),(o==="ascii"||o==="matrix-rain")&&ce.jsx(Ta,{title:"Character Set",children:ce.jsx(Db,{value:e.characterSet,onChange:p=>d("characterSet",p),options:[{value:"standard",label:"Standard"},{value:"extended",label:"Extended"},{value:"blocks",label:"Blocks"},{value:"custom",label:"Custom"}]})}),ce.jsxs(Ta,{title:"Effects",children:[ce.jsx(fo,{label:"Cell Size",value:e.cellSize,min:2,max:32,step:1,onChange:p=>d("cellSize",p)}),ce.jsx(fo,{label:"Brightness",value:e.brightness,min:-100,max:100,step:1,onChange:p=>d("brightness",p)}),ce.jsx(fo,{label:"Contrast",value:e.contrast,min:-100,max:100,step:1,onChange:p=>d("contrast",p)}),ce.jsx(fo,{label:"Threshold",value:e.threshold,min:0,max:1,step:.01,onChange:p=>d("threshold",p)}),ce.jsx(fo,{label:"Noise",value:e.noiseIntensity,min:0,max:1,step:.01,onChange:p=>d("noiseIntensity",p)}),ce.jsx(fo,{label:"Blur",value:e.blur,min:0,max:10,step:.1,onChange:p=>d("blur",p)})]}),ce.jsx(Ta,{title:"Color",children:ce.jsxs("div",{className:"flex items-center justify-between",children:[ce.jsx("span",{className:"text-term-text-dim text-[11px]",children:"Auto Color"}),ce.jsx("input",{type:"checkbox",checked:e.colored,onChange:p=>d("colored",p.target.checked),className:"w-4 h-4 accent-term-accent"})]})}),ce.jsx(Ta,{title:"Export",children:ce.jsx("div",{className:"grid grid-cols-3 gap-1",children:["png","jpg","svg","text"].map(p=>ce.jsx("button",{onClick:()=>d("format",p),className:`px-2 py-1 text-[10px] uppercase border ${e.format===p?"border-term-accent text-term-accent":"border-term-border text-term-text-dim hover:border-term-text"}`,children:p},p))})})]}),ce.jsx("div",{className:"p-3 border-t border-term-border",children:ce.jsxs("button",{type:"button",onClick:()=>u(e.format),disabled:!i,className:`w-full py-2 text-[12px] uppercase tracking-wide transition-colors ${i?"bg-term-text-bright text-term-bg hover:bg-term-accent":"bg-term-border text-term-text-dim cursor-not-allowed"}`,children:["Export ",e.format.toUpperCase()]})})]})}function Ta({title:o,children:e}){return ce.jsxs("div",{className:"px-3 py-2 border-b border-term-border",children:[ce.jsx("span",{className:"text-term-text text-[10px] uppercase tracking-wide block mb-2",children:o}),ce.jsx("div",{className:"space-y-2",children:e})]})}function fo({label:o,value:e,min:t,max:i,step:s,onChange:a}){return ce.jsxs("div",{className:"space-y-1",children:[ce.jsxs("div",{className:"flex justify-between text-[10px]",children:[ce.jsx("span",{className:"text-term-text-dim",children:o}),ce.jsx("span",{className:"text-term-text tabular-nums",children:s<1?e.toFixed(2):e})]}),ce.jsx("input",{type:"range",min:t,max:i,step:s,value:e,onChange:c=>a(parseFloat(c.target.value)),className:"w-full h-1 bg-term-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-term-text-bright"})]})}function Db({value:o,onChange:e,options:t}){return ce.jsx("select",{value:o,onChange:i=>e(i.target.value),className:"w-full px-2 py-1.5 text-[11px] bg-term-bg border border-term-border text-term-text",children:t.map(i=>ce.jsx("option",{value:i.value,children:i.label},i.value))})}function Ib({activeEffect:o,fps:e,isProcessing:t,onReset:i}){const s=a=>({ascii:"ASCII",dithering:"Dithering","half-tone":"Half-tone","matrix-rain":"Matrix Rain","matrix-dots":"Matrix Dots",mosaic:"Mosaic","pixel-grid":"Pixel Grid",pixelate:"Pixelate",threshold:"Threshold","edge-detection":"Edge Detection",convolution:"Convolution","edge-lines":"Edge Lines","halftone-dots":"Halftone Dots",crosses:"Crosses",invert:"Invert",led:"LED","pixel-sorting":"Pixel Sorting",halftone:"Halftone","halftone-cmyk":"Halftone CMYK","vhs-glitch":"VHS Glitch",scanlines:"Scanlines",grain:"Grain",noise:"Noise"})[a]||a;return ce.jsxs("div",{className:"h-9 border-b border-term-border bg-term-panel flex items-center justify-between px-3",children:[ce.jsx("div",{className:"flex items-center gap-4",children:ce.jsxs("div",{className:"flex items-center gap-2.5",children:[ce.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${t?"bg-green-500 animate-pulse shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]":"bg-term-text-dim"}`}),ce.jsx("span",{className:"text-term-text text-[13px]",children:s(o)}),t&&ce.jsx("span",{className:"text-term-text-dim text-[11px]",children:"(WebGPU)"})]})}),ce.jsx("div",{className:"flex items-center gap-3",children:e>0&&ce.jsxs("span",{className:"text-term-text-dim text-[11px] tabular-nums",children:[e," FPS"]})}),ce.jsxs("div",{className:"flex items-center gap-2",children:[ce.jsx("button",{onClick:i,className:"px-2.5 py-1 text-[12px] text-term-text-dim hover:text-term-text border border-term-border hover:border-term-text-dim transition-colors",children:"Reset"}),ce.jsx("button",{className:"p-1 text-term-text-dim hover:text-term-text transition-colors",children:ce.jsxs("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[ce.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),ce.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),ce.jsx("button",{className:"p-1 text-term-text-dim hover:text-term-text transition-colors",children:ce.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:ce.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})]})]})}function Ub({zoom:o,setZoom:e}){const t=[25,50,75,100,150,200];return ce.jsxs("div",{className:"h-8 border-t border-term-border bg-term-panel flex items-center justify-between px-3",children:[ce.jsxs("div",{className:"flex items-center gap-2.5",children:[ce.jsxs("span",{className:"text-term-text-dim text-[11px] tabular-nums w-12",children:[o,"%"]}),ce.jsx("input",{type:"range",min:10,max:300,value:o,onChange:i=>e(parseInt(i.target.value)),className:"w-24 h-1 bg-term-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-term-text-bright"}),ce.jsx("div",{className:"flex items-center gap-1",children:t.slice(0,4).map(i=>ce.jsxs("button",{onClick:()=>e(i),className:`px-1.5 py-0.5 text-[10px] border transition-colors ${o===i?"border-term-accent text-term-accent":"border-term-border text-term-text-dim hover:border-term-text hover:text-term-text"}`,children:[i,"%"]},i))})]}),ce.jsx("div",{className:"flex-1"}),ce.jsxs("div",{className:"flex items-center gap-2.5 text-term-text-dim text-[11px]",children:[ce.jsx("span",{children:"Ready"}),ce.jsx("span",{className:"opacity-50",children:"|"}),ce.jsx("span",{children:"GPU"})]})]})}function Fb(){const[o,e]=$e.useState(null),[t,i]=$e.useState(null),[s,a]=$e.useState("ascii"),[c,u]=$e.useState(Ef),[d,h]=$e.useState(!1),[p,g]=$e.useState(0),[x,y]=$e.useState(100),[M,E]=$e.useState("processed"),[S,_]=$e.useState(null),A=$e.useCallback(D=>{const U=URL.createObjectURL(D);D.name.endsWith(".glb")||D.name.endsWith(".gltf")?i("model"):D.type.startsWith("video/")?i("video"):i("image"),e(U)},[]),w=$e.useCallback(()=>{i("webcam"),e("webcam")},[]),C=$e.useCallback(()=>{o&&o!=="webcam"&&URL.revokeObjectURL(o),e(null),i(null),u(Ef),E("processed")},[o]),L=$e.useCallback(D=>{a(D.effect),u(U=>({...U,...D.settings}))},[]),I=$e.useCallback(D=>{const U=S==null?void 0:S();if(!U)return;const b=(P,O)=>{const K=document.createElement("a");K.href=P,K.download=`grainrad-${s}.${O}`,K.click()};if(D==="text"){const P=Ob(U,c),O=new Blob([P],{type:"text/plain"}),K=URL.createObjectURL(O);b(K,"txt"),setTimeout(()=>URL.revokeObjectURL(K),0);return}if(D==="svg"){const P=U.toDataURL("image/png"),O=`<svg xmlns="http://www.w3.org/2000/svg" width="${U.width}" height="${U.height}"><image href="${P}" width="100%" height="100%"/></svg>`,K=new Blob([O],{type:"image/svg+xml"}),Y=URL.createObjectURL(K);b(Y,"svg"),setTimeout(()=>URL.revokeObjectURL(Y),0);return}if(D==="jpg"){b(U.toDataURL("image/jpeg",c.quality/100),"jpg");return}if(D==="gif"||D==="mp4"||D==="webm"){b(U.toDataURL("image/png"),"png");return}b(U.toDataURL("image/png"),"png")},[s,S,c]);return ce.jsxs("div",{className:"h-full min-h-0 flex flex-col bg-term-bg text-[13px] leading-tight",children:[ce.jsx(Ib,{activeEffect:s,fps:p,isProcessing:d,onReset:C}),ce.jsxs("div",{className:"flex-1 min-h-0 flex overflow-hidden",children:[ce.jsx(mv,{activeEffect:s,setActiveEffect:a,onFileSelect:A,onWebcam:w,onPresetSelect:L,hasSource:!!o}),t==="model"?ce.jsx(Pb,{modelUrl:o,activeEffect:s,settings:c,onCanvasReady:_,onFpsUpdate:g,setIsProcessing:h}):ce.jsx(xv,{sourceImage:o,sourceType:t,activeEffect:s,settings:c,zoom:x,previewMode:M,onFpsUpdate:g,setIsProcessing:h,onExportReady:_}),ce.jsx(Nb,{activeEffect:s,settings:c,setSettings:u,sourceImage:o,previewMode:M,setPreviewMode:E,onResetSettings:()=>u(Ef),onExport:I})]}),ce.jsx(Ub,{zoom:x,setZoom:y})]})}function Ob(o,e){const t=o.getContext("2d");if(!t||!o.width||!o.height)return"";const i=e.customCharacters||" .:-=+*#%@",s=Math.max(1,Math.floor(e.cellSize)),a=t.getImageData(0,0,o.width,o.height).data,c=[];for(let u=0;u<o.height;u+=s){let d="";for(let h=0;h<o.width;h+=s){const p=(u*o.width+h)*4,g=(a[p]+a[p+1]+a[p+2])/765,x=Math.min(i.length-1,Math.floor(g*i.length));d+=i[x]??" "}c.push(d)}return c.join(`
`)}function kb(){return ce.jsx(hv,{children:ce.jsx("div",{className:"h-dvh min-h-0 flex flex-col overflow-hidden",children:ce.jsx(Fb,{})})})}uv.createRoot(document.getElementById("root")).render(ce.jsx($e.StrictMode,{children:ce.jsx(kb,{})}));
