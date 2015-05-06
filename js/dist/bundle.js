// cartodb.js version: 3.11.20
// uncompressed version: cartodb.uncompressed.js
// sha: 62a22057f230bc1bff64344b3603001e8bacb5c4
(function(){var root=this,__prev={jQuery:root.jQuery,$:root.$,L:root.L,Mustache:root.Mustache,Backbone:root.Backbone,_:root._};(function(e,t){function n(e){return H.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}function r(e){if(!vn[e]){var t=_.body,n=H("<"+e+">").appendTo(t),r=n.css("display");n.remove();if(r==="none"||r===""){mn||(mn=_.createElement("iframe"),mn.frameBorder=mn.width=mn.height=0),t.appendChild(mn);if(!gn||!mn.createElement)gn=(mn.contentWindow||mn.contentDocument).document,gn.write((H.support.boxModel?"<!doctype html>":"")+"<html><body>"),gn.close();n=gn.createElement(e),gn.body.appendChild(n),r=H.css(n,"display"),t.removeChild(mn)}vn[e]=r}return vn[e]}function i(e,t){var n={};return H.each(En.concat.apply([],En.slice(0,t)),function(){n[this]=e}),n}function s(){Sn=t}function o(){return setTimeout(s,0),Sn=H.now()}function u(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function a(){try{return new e.XMLHttpRequest}catch(t){}}function f(e,n){e.dataFilter&&(n=e.dataFilter(n,e.dataType));var r=e.dataTypes,i={},s,o,u=r.length,a,f=r[0],l,c,h,p,d;for(s=1;s<u;s++){if(s===1)for(o in e.converters)typeof o=="string"&&(i[o.toLowerCase()]=e.converters[o]);l=f,f=r[s];if(f==="*")f=l;else if(l!=="*"&&l!==f){c=l+" "+f,h=i[c]||i["* "+f];if(!h){d=t;for(p in i){a=p.split(" ");if(a[0]===l||a[0]==="*"){d=i[a[1]+" "+f];if(d){p=i[p],p===!0?h=d:d===!0&&(h=p);break}}}}!h&&!d&&H.error("No conversion from "+c.replace(" "," to ")),h!==!0&&(n=h?h(n):d(p(n)))}}return n}function l(e,n,r){var i=e.contents,s=e.dataTypes,o=e.responseFields,u,a,f,l;for(a in o)a in r&&(n[o[a]]=r[a]);while(s[0]==="*")s.shift(),u===t&&(u=e.mimeType||n.getResponseHeader("content-type"));if(u)for(a in i)if(i[a]&&i[a].test(u)){s.unshift(a);break}if(s[0]in r)f=s[0];else{for(a in r){if(!s[0]||e.converters[a+" "+s[0]]){f=a;break}l||(l=a)}f=f||l}if(f)return f!==s[0]&&s.unshift(f),r[f]}function c(e,t,n,r){if(H.isArray(t))H.each(t,function(t,i){n||Ut.test(e)?r(e,i):c(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&H.type(t)==="object")for(var i in t)c(e+"["+i+"]",t[i],n,r);else r(e,t)}function h(e,n){var r,i,s=H.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&H.extend(!0,e,i)}function p(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u=e[s],a=0,f=u?u.length:0,l=e===rn,c;for(;a<f&&(l||!c);a++)c=u[a](n,r,i),typeof c=="string"&&(!l||o[c]?c=t:(n.dataTypes.unshift(c),c=p(e,n,r,i,c,o)));return(l||!c)&&!o["*"]&&(c=p(e,n,r,i,"*",o)),c}function d(e){return function(t,n){typeof t!="string"&&(n=t,t="*");if(H.isFunction(n)){var r=t.toLowerCase().split(Zt),i=0,s=r.length,o,u,a;for(;i<s;i++)o=r[i],a=/^\+/.test(o),a&&(o=o.substr(1)||"*"),u=e[o]=e[o]||[],u[a?"unshift":"push"](n)}}}function v(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=t==="width"?1:0,s=4;if(r>0){if(n!=="border")for(;i<s;i+=2)n||(r-=parseFloat(H.css(e,"padding"+jt[i]))||0),n==="margin"?r+=parseFloat(H.css(e,n+jt[i]))||0:r-=parseFloat(H.css(e,"border"+jt[i]+"Width"))||0;return r+"px"}r=Ft(e,t);if(r<0||r==null)r=e.style[t];if(Dt.test(r))return r;r=parseFloat(r)||0;if(n)for(;i<s;i+=2)r+=parseFloat(H.css(e,"padding"+jt[i]))||0,n!=="padding"&&(r+=parseFloat(H.css(e,"border"+jt[i]+"Width"))||0),n==="margin"&&(r+=parseFloat(H.css(e,n+jt[i]))||0);return r+"px"}function m(e){var t=_.createElement("div");return Lt.appendChild(t),t.innerHTML=e.outerHTML,t.firstChild}function g(e){var t=(e.nodeName||"").toLowerCase();t==="input"?y(e):t!=="script"&&typeof e.getElementsByTagName!="undefined"&&H.grep(e.getElementsByTagName("input"),y)}function y(e){if(e.type==="checkbox"||e.type==="radio")e.defaultChecked=e.checked}function b(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function w(e,t){var n;t.nodeType===1&&(t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?t.outerHTML=e.outerHTML:n!=="input"||e.type!=="checkbox"&&e.type!=="radio"?n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text):(e.checked&&(t.defaultChecked=t.checked=e.checked),t.value!==e.value&&(t.value=e.value)),t.removeAttribute(H.expando),t.removeAttribute("_submit_attached"),t.removeAttribute("_change_attached"))}function E(e,t){if(t.nodeType===1&&!!H.hasData(e)){var n,r,i,s=H._data(e),o=H._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)H.event.add(t,n,u[n][r])}o.data&&(o.data=H.extend({},o.data))}}function S(e,t){return H.nodeName(e,"table")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function x(e){var t=dt.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function T(e,t,n){t=t||0;if(H.isFunction(t))return H.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return H.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=H.grep(e,function(e){return e.nodeType===1});if(lt.test(t))return H.filter(t,r,!n);t=H.filter(t,r)}return H.grep(e,function(e,r){return H.inArray(e,t)>=0===n})}function N(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function C(){return!0}function k(){return!1}function L(e,t,n){var r=t+"defer",i=t+"queue",s=t+"mark",o=H._data(e,r);o&&(n==="queue"||!H._data(e,i))&&(n==="mark"||!H._data(e,s))&&setTimeout(function(){!H._data(e,i)&&!H._data(e,s)&&(H.removeData(e,r,!0),o.fire())},0)}function A(e){for(var t in e){if(t==="data"&&H.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function O(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(I,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:H.isNumeric(r)?+r:F.test(r)?H.parseJSON(r):r}catch(s){}H.data(e,n,r)}else r=t}return r}function M(e){var t=B[e]={},n,r;e=e.split(/\s+/);for(n=0,r=e.length;n<r;n++)t[e[n]]=!0;return t}var _=e.document,D=e.navigator,P=e.location,H=function(){function n(){if(!r.isReady){try{_.documentElement.doScroll("left")}catch(e){setTimeout(n,1);return}r.ready()}}var r=function(e,t){return new r.fn.init(e,t,o)},i=e.jQuery,s=e.$,o,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,a=/\S/,f=/^\s+/,l=/\s+$/,c=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,h=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,d=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,v=/(?:^|:|,)(?:\s*\[)+/g,m=/(webkit)[ \/]([\w.]+)/,g=/(opera)(?:.*version)?[ \/]([\w.]+)/,y=/(msie) ([\w.]+)/,b=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,E=/^-ms-/,S=function(e,t){return(t+"").toUpperCase()},x=D.userAgent,T,N,C,k=Object.prototype.toString,L=Object.prototype.hasOwnProperty,A=Array.prototype.push,O=Array.prototype.slice,M=String.prototype.trim,P=Array.prototype.indexOf,H={};return r.fn=r.prototype={constructor:r,init:function(e,n,i){var s,o,a,f;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(e==="body"&&!n&&_.body)return this.context=_,this[0]=_.body,this.selector=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)!=="<"||e.charAt(e.length-1)!==">"||e.length<3?s=u.exec(e):s=[null,e,null];if(s&&(s[1]||!n)){if(s[1])return n=n instanceof r?n[0]:n,f=n?n.ownerDocument||n:_,a=c.exec(e),a?r.isPlainObject(n)?(e=[_.createElement(a[1])],r.fn.attr.call(e,n,!0)):e=[f.createElement(a[1])]:(a=r.buildFragment([s[1]],[f]),e=(a.cacheable?r.clone(a.fragment):a.fragment).childNodes),r.merge(this,e);o=_.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return i.find(e);this.length=1,this[0]=o}return this.context=_,this.selector=e,this}return!n||n.jquery?(n||i).find(e):this.constructor(n).find(e)}return r.isFunction(e)?i.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),r.makeArray(e,this))},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return O.call(this,0)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var i=this.constructor();return r.isArray(e)?A.apply(i,e):r.merge(i,e),i.prevObject=this,i.context=this.context,t==="find"?i.selector=this.selector+(this.selector?" ":"")+n:t&&(i.selector=this.selector+"."+t+"("+n+")"),i},each:function(e,t){return r.each(this,e,t)},ready:function(e){return r.bindReady(),N.add(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(O.apply(this,arguments),"slice",O.call(arguments).join(","))},map:function(e){return this.pushStack(r.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:A,sort:[].sort,splice:[].splice},r.fn.init.prototype=r.fn,r.extend=r.fn.extend=function(){var e,n,i,s,o,u,a=arguments[0]||{},f=1,l=arguments.length,c=!1;typeof a=="boolean"&&(c=a,a=arguments[1]||{},f=2),typeof a!="object"&&!r.isFunction(a)&&(a={}),l===f&&(a=this,--f);for(;f<l;f++)if((e=arguments[f])!=null)for(n in e){i=a[n],s=e[n];if(a===s)continue;c&&s&&(r.isPlainObject(s)||(o=r.isArray(s)))?(o?(o=!1,u=i&&r.isArray(i)?i:[]):u=i&&r.isPlainObject(i)?i:{},a[n]=r.extend(c,u,s)):s!==t&&(a[n]=s)}return a},r.extend({noConflict:function(t){return e.$===r&&(e.$=s),t&&e.jQuery===r&&(e.jQuery=i),r},isReady:!1,readyWait:1,holdReady:function(e){e?r.readyWait++:r.ready(!0)},ready:function(e){if(e===!0&&!--r.readyWait||e!==!0&&!r.isReady){if(!_.body)return setTimeout(r.ready,1);r.isReady=!0;if(e!==!0&&--r.readyWait>0)return;N.fireWith(_,[r]),r.fn.trigger&&r(_).trigger("ready").off("ready")}},bindReady:function(){if(!N){N=r.Callbacks("once memory");if(_.readyState==="complete")return setTimeout(r.ready,1);if(_.addEventListener)_.addEventListener("DOMContentLoaded",C,!1),e.addEventListener("load",r.ready,!1);else if(_.attachEvent){_.attachEvent("onreadystatechange",C),e.attachEvent("onload",r.ready);var t=!1;try{t=e.frameElement==null}catch(i){}_.documentElement.doScroll&&t&&n()}}},isFunction:function(e){return r.type(e)==="function"},isArray:Array.isArray||function(e){return r.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):H[k.call(e)]||"object"},isPlainObject:function(e){if(!e||r.type(e)!=="object"||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!L.call(e,"constructor")&&!L.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var i;for(i in e);return i===t||L.call(e,i)},isEmptyObject:function(e){for(var t in e)return!1;return!0},error:function(e){throw new Error(e)},parseJSON:function(t){if(typeof t!="string"||!t)return null;t=r.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(h.test(t.replace(p,"@").replace(d,"]").replace(v,"")))return(new Function("return "+t))();r.error("Invalid JSON: "+t)},parseXML:function(n){if(typeof n!="string"||!n)return null;var i,s;try{e.DOMParser?(s=new DOMParser,i=s.parseFromString(n,"text/xml")):(i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(n))}catch(o){i=t}return(!i||!i.documentElement||i.getElementsByTagName("parsererror").length)&&r.error("Invalid XML: "+n),i},noop:function(){},globalEval:function(t){t&&a.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(E,"ms-").replace(w,S)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()},each:function(e,n,i){var s,o=0,u=e.length,a=u===t||r.isFunction(e);if(i){if(a){for(s in e)if(n.apply(e[s],i)===!1)break}else for(;o<u;)if(n.apply(e[o++],i)===!1)break}else if(a){for(s in e)if(n.call(e[s],s,e[s])===!1)break}else for(;o<u;)if(n.call(e[o],o,e[o++])===!1)break;return e},trim:M?function(e){return e==null?"":M.call(e)}:function(e){return e==null?"":(e+"").replace(f,"").replace(l,"")},makeArray:function(e,t){var n=t||[];if(e!=null){var i=r.type(e);e.length==null||i==="string"||i==="function"||i==="regexp"||r.isWindow(e)?A.call(n,e):r.merge(n,e)}return n},inArray:function(e,t,n){var r;if(t){if(P)return P.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=e.length,i=0;if(typeof n.length=="number")for(var s=n.length;i<s;i++)e[r++]=n[i];else while(n[i]!==t)e[r++]=n[i++];return e.length=r,e},grep:function(e,t,n){var r=[],i;n=!!n;for(var s=0,o=e.length;s<o;s++)i=!!t(e[s],s),n!==i&&r.push(e[s]);return r},map:function(e,n,i){var s,o,u=[],a=0,f=e.length,l=e instanceof r||f!==t&&typeof f=="number"&&(f>0&&e[0]&&e[f-1]||f===0||r.isArray(e));if(l)for(;a<f;a++)s=n(e[a],a,i),s!=null&&(u[u.length]=s);else for(o in e)s=n(e[o],o,i),s!=null&&(u[u.length]=s);return u.concat.apply([],u)},guid:1,proxy:function(e,n){if(typeof n=="string"){var i=e[n];n=e,e=i}if(!r.isFunction(e))return t;var s=O.call(arguments,2),o=function(){return e.apply(n,s.concat(O.call(arguments)))};return o.guid=e.guid=e.guid||o.guid||r.guid++,o},access:function(e,n,i,s,o,u,a){var f,l=i==null,c=0,h=e.length;if(i&&typeof i=="object"){for(c in i)r.access(e,n,c,i[c],1,u,s);o=1}else if(s!==t){f=a===t&&r.isFunction(s),l&&(f?(f=n,n=function(e,t,n){return f.call(r(e),n)}):(n.call(e,s),n=null));if(n)for(;c<h;c++)n(e[c],i,f?s.call(e[c],c,n(e[c],i)):s,a);o=1}return o?e:l?n.call(e):h?n(e[0],i):u},now:function(){return(new Date).getTime()},uaMatch:function(e){e=e.toLowerCase();var t=m.exec(e)||g.exec(e)||y.exec(e)||e.indexOf("compatible")<0&&b.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},sub:function(){function e(t,n){return new e.fn.init(t,n)}r.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(n,i){return i&&i instanceof r&&!(i instanceof e)&&(i=e(i)),r.fn.init.call(this,n,i,t)},e.fn.init.prototype=e.fn;var t=e(_);return e},browser:{}}),r.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){H["[object "+t+"]"]=t.toLowerCase()}),T=r.uaMatch(x),T.browser&&(r.browser[T.browser]=!0,r.browser.version=T.version),r.browser.webkit&&(r.browser.safari=!0),a.test(" ")&&(f=/^[\s\xA0]+/,l=/[\s\xA0]+$/),o=r(_),_.addEventListener?C=function(){_.removeEventListener("DOMContentLoaded",C,!1),r.ready()}:_.attachEvent&&(C=function(){_.readyState==="complete"&&(_.detachEvent("onreadystatechange",C),r.ready())}),r}(),B={};H.Callbacks=function(e){e=e?B[e]||M(e):{};var n=[],r=[],i,s,o,u,a,f,l=function(t){var r,i,s,o,u;for(r=0,i=t.length;r<i;r++)s=t[r],o=H.type(s),o==="array"?l(s):o==="function"&&(!e.unique||!h.has(s))&&n.push(s)},c=function(t,l){l=l||[],i=!e.memory||[t,l],s=!0,o=!0,f=u||0,u=0,a=n.length;for(;n&&f<a;f++)if(n[f].apply(t,l)===!1&&e.stopOnFalse){i=!0;break}o=!1,n&&(e.once?i===!0?h.disable():n=[]:r&&r.length&&(i=r.shift(),h.fireWith(i[0],i[1])))},h={add:function(){if(n){var e=n.length;l(arguments),o?a=n.length:i&&i!==!0&&(u=e,c(i[0],i[1]))}return this},remove:function(){if(n){var t=arguments,r=0,i=t.length;for(;r<i;r++)for(var s=0;s<n.length;s++)if(t[r]===n[s]){o&&s<=a&&(a--,s<=f&&f--),n.splice(s--,1);if(e.unique)break}}return this},has:function(e){if(n){var t=0,r=n.length;for(;t<r;t++)if(e===n[t])return!0}return!1},empty:function(){return n=[],this},disable:function(){return n=r=i=t,this},disabled:function(){return!n},lock:function(){return r=t,(!i||i===!0)&&h.disable(),this},locked:function(){return!r},fireWith:function(t,n){return r&&(o?e.once||r.push([t,n]):(!e.once||!i)&&c(t,n)),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!s}};return h};var j=[].slice;H.extend({Deferred:function(e){var t=H.Callbacks("once memory"),n=H.Callbacks("once memory"),r=H.Callbacks("memory"),i="pending",s={resolve:t,reject:n,notify:r},o={done:t.add,fail:n.add,progress:r.add,state:function(){return i},isResolved:t.fired,isRejected:n.fired,then:function(e,t,n){return u.done(e).fail(t).progress(n),this},always:function(){return u.done.apply(u,arguments).fail.apply(u,arguments),this},pipe:function(e,t,n){return H.Deferred(function(r){H.each({done:[e,"resolve"],fail:[t,"reject"],progress:[n,"notify"]},function(e,t){var n=t[0],i=t[1],s;H.isFunction(n)?u[e](function(){s=n.apply(this,arguments),s&&H.isFunction(s.promise)?s.promise().then(r.resolve,r.reject,r.notify):r[i+"With"](this===u?r:this,[s])}):u[e](r[i])})}).promise()},promise:function(e){if(e==null)e=o;else for(var t in o)e[t]=o[t];return e}},u=o.promise({}),a;for(a in s)u[a]=s[a].fire,u[a+"With"]=s[a].fireWith;return u.done(function(){i="resolved"},n.disable,r.lock).fail(function(){i="rejected"},t.disable,r.lock),e&&e.call(u,u),u},when:function(e){function t(e){return function(t){o[e]=arguments.length>1?j.call(arguments,0):t,f.notifyWith(l,o)}}function n(e){return function(t){r[e]=arguments.length>1?j.call(arguments,0):t,--u||f.resolveWith(f,r)}}var r=j.call(arguments,0),i=0,s=r.length,o=Array(s),u=s,a=s,f=s<=1&&e&&H.isFunction(e.promise)?e:H.Deferred(),l=f.promise();if(s>1){for(;i<s;i++)r[i]&&r[i].promise&&H.isFunction(r[i].promise)?r[i].promise().then(n(i),f.reject,t(i)):--u;u||f.resolveWith(f,r)}else f!==e&&f.resolveWith(f,s?[e]:[]);return l}}),H.support=function(){var t,n,r,i,s,o,u,a,f,l,c,h,p=_.createElement("div"),d=_.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!n.length||!r)return{};i=_.createElement("select"),s=i.appendChild(_.createElement("option")),o=p.getElementsByTagName("input")[0],t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.55/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:o.value==="on",optSelected:s.selected,getSetAttribute:p.className!=="t",enctype:!!_.createElement("form").enctype,html5Clone:_.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},H.boxModel=t.boxModel=_.compatMode==="CSS1Compat",o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,i.disabled=!0,t.optDisabled=!s.disabled;try{delete p.test}catch(v){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),o=_.createElement("input"),o.value="t",o.setAttribute("type","radio"),t.radioValue=o.value==="t",o.setAttribute("checked","checked"),o.setAttribute("name","t"),p.appendChild(o),u=_.createDocumentFragment(),u.appendChild(p.lastChild),t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=o.checked,u.removeChild(o),u.appendChild(p);if(p.attachEvent)for(c in{submit:1,change:1,focusin:1})l="on"+c,h=l in p,h||(p.setAttribute(l,"return;"),h=typeof p[l]=="function"),t[c+"Bubbles"]=h;return u.removeChild(p),u=i=s=p=o=null,H(function(){var n,r,i,s,o,u,f,l,c,d,v,m,g,y=_.getElementsByTagName("body")[0];!y||(l=1,g="padding:0;margin:0;border:",v="position:absolute;top:0;left:0;width:1px;height:1px;",m=g+"0;visibility:hidden;",c="style='"+v+g+"5px solid #000;",d="<div "+c+"display:block;'><div style='"+g+"0;display:block;overflow:hidden;'></div></div>"+"<table "+c+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",n=_.createElement("div"),n.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+l+"px",y.insertBefore(n,y.firstChild),p=_.createElement("div"),n.appendChild(p),p.innerHTML="<table><tr><td style='"+g+"0;display:none'></td><td>t</td></tr></table>",a=p.getElementsByTagName("td"),h=a[0].offsetHeight===0,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=h&&a[0].offsetHeight===0,e.getComputedStyle&&(p.innerHTML="",f=_.createElement("div"),f.style.width="0",f.style.marginRight="0",p.style.width="2px",p.appendChild(f),t.reliableMarginRight=(parseInt((e.getComputedStyle(f,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,t.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",t.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=v+m,p.innerHTML=d,r=p.firstChild,i=r.firstChild,o=r.nextSibling.firstChild.firstChild,u={doesNotAddBorder:i.offsetTop!==5,doesAddBorderForTableAndCells:o.offsetTop===5},i.style.position="fixed",i.style.top="20px",u.fixedPosition=i.offsetTop===20||i.offsetTop===15,i.style.position=i.style.top="",r.style.overflow="hidden",r.style.position="relative",u.subtractsBorderForOverflowNotVisible=i.offsetTop===-5,u.doesNotIncludeMarginInBodyOffset=y.offsetTop!==l,e.getComputedStyle&&(p.style.marginTop="1%",t.pixelMargin=(e.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof n.style.zoom!="undefined"&&(n.style.zoom=1),y.removeChild(n),f=p=n=null,H.extend(t,u))}),t}();var F=/^(?:\{.*\}|\[.*\])$/,I=/([A-Z])/g;H.extend({cache:{},uuid:0,expando:"jQuery"+(H.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?H.cache[e[H.expando]]:e[H.expando],!!e&&!A(e)},data:function(e,n,r,i){if(!!H.acceptData(e)){var s,o,u,a=H.expando,f=typeof n=="string",l=e.nodeType,c=l?H.cache:e,h=l?e[a]:e[a]&&a,p=n==="events";if((!h||!c[h]||!p&&!i&&!c[h].data)&&f&&r===t)return;h||(l?e[a]=h=++H.uuid:h=a),c[h]||(c[h]={},l||(c[h].toJSON=H.noop));if(typeof n=="object"||typeof n=="function")i?c[h]=H.extend(c[h],n):c[h].data=H.extend(c[h].data,n);return s=o=c[h],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[H.camelCase(n)]=r),p&&!o[n]?s.events:(f?(u=o[n],u==null&&(u=o[H.camelCase(n)])):u=o,u)}},removeData:function(e,t,n){if(!!H.acceptData(e)){var r,i,s,o=H.expando,u=e.nodeType,a=u?H.cache:e,f=u?e[o]:o;if(!a[f])return;if(t){r=n?a[f]:a[f].data;if(r){H.isArray(t)||(t in r?t=[t]:(t=H.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?A:H.isEmptyObject)(r))return}}if(!n){delete a[f].data;if(!A(a[f]))return}H.support.deleteExpando||!a.setInterval?delete a[f]:a[f]=null,u&&(H.support.deleteExpando?delete e[o]:e.removeAttribute?e.removeAttribute(o):e[o]=null)}},_data:function(e,t,n){return H.data(e,t,n,!0)},acceptData:function(e){if(e.nodeName){var t=H.noData[e.nodeName.toLowerCase()];if(t)return t!==!0&&e.getAttribute("classid")===t}return!0}}),H.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=H.data(a);if(a.nodeType===1&&!H._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")===0&&(o=H.camelCase(o.substring(5)),O(a,o,l[o]));H._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){H.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",H.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=H.data(a,e),l=O(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=H(this);t.triggerHandler("setData"+i,r),H.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){H.removeData(this,e)})}}),H.extend({_mark:function(e,t){e&&(t=(t||"fx")+"mark",H._data(e,t,(H._data(e,t)||0)+1))},_unmark:function(e,t,n){e!==!0&&(n=t,t=e,e=!1);if(t){n=n||"fx";var r=n+"mark",i=e?0:(H._data(t,r)||1)-1;i?H._data(t,r,i):(H.removeData(t,r,!0),L(t,n,"mark"))}},queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=H._data(e,t),n&&(!r||H.isArray(n)?r=H._data(e,t,H.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=H.queue(e,t),r=n.shift(),i={};r==="inprogress"&&(r=n.shift()),r&&(t==="fx"&&n.unshift("inprogress"),H._data(e,t+".run",i),r.call(e,function(){H.dequeue(e,t)},i)),n.length||(H.removeData(e,t+"queue "+t+".run",!0),L(e,t,"queue"))}}),H.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?H.queue(this[0],e):n===t?this:this.each(function(){var t=H.queue(this,e,n);e==="fx"&&t[0]!=="inprogress"&&H.dequeue(this,e)})},dequeue:function(e){return this.each(function(){H.dequeue(this,e)})},delay:function(e,t){return e=H.fx?H.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){function r(){--u||i.resolveWith(s,[s])}typeof e!="string"&&(n=e,e=t),e=e||"fx";var i=H.Deferred(),s=this,o=s.length,u=1,a=e+"defer",f=e+"queue",l=e+"mark",c;while(o--)if(c=H.data(s[o],a,t,!0)||(H.data(s[o],f,t,!0)||H.data(s[o],l,t,!0))&&H.data(s[o],a,H.Callbacks("once memory"),!0))u++,c.add(r);return r(),i.promise(n)}});var q=/[\n\t\r]/g,R=/\s+/,U=/\r/g,z=/^(?:button|input)$/i,W=/^(?:button|input|object|select|textarea)$/i,X=/^a(?:rea)?$/i,V=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,$=H.support.getSetAttribute,J,K,Q;H.fn.extend({attr:function(e,t){return H.access(this,H.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){H.removeAttr(this,e)})},prop:function(e,t){return H.access(this,H.prop,e,t,arguments.length>1)},removeProp:function(e){return e=H.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(H.isFunction(e))return this.each(function(t){H(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(R);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)~s.indexOf(" "+t[o]+" ")||(s+=t[o]+" ");i.className=H.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(H.isFunction(e))return this.each(function(t){H(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(R);for(r=0,i=this.length;r<i;r++){s=this[r];if(s.nodeType===1&&s.className)if(e){o=(" "+s.className+" ").replace(q," ");for(u=0,a=n.length;u<a;u++)o=o.replace(" "+n[u]+" "," ");s.className=H.trim(o)}else s.className=""}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return H.isFunction(e)?this.each(function(n){H(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=H(this),u=t,a=e.split(R);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&H._data(this,"__className__",this.className),this.className=this.className||e===!1?"":H._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>-1)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!!arguments.length)return i=H.isFunction(e),this.each(function(r){var s=H(this),o;if(this.nodeType===1){i?o=e.call(this,r,s.val()):o=e,o==null?o="":typeof o=="number"?o+="":H.isArray(o)&&(o=H.map(o,function(e){return e==null?"":e+""})),n=H.valHooks[this.type]||H.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,o,"value")===t)this.value=o}});if(s)return n=H.valHooks[s.type]||H.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(U,""):r==null?"":r)}}),H.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r,i,s=e.selectedIndex,o=[],u=e.options,a=e.type==="select-one";if(s<0)return null;n=a?s:0,r=a?s+1:u.length;for(;n<r;n++){i=u[n];if(i.selected&&(H.support.optDisabled?!i.disabled:i.getAttribute("disabled")===null)&&(!i.parentNode.disabled||!H.nodeName(i.parentNode,"optgroup"))){t=H(i).val();if(a)return t;o.push(t)}}return a&&!o.length&&u.length?H(u[s]).val():o},set:function(e,t){var n=H.makeArray(t);return H(e).find("option").each(function(){this.selected=H.inArray(H(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!!e&&a!==3&&a!==8&&a!==2){if(i&&n in H.attrFn)return H(e)[n](r);if(typeof e.getAttribute=="undefined")return H.prop(e,n,r);u=a!==1||!H.isXMLDoc(e),u&&(n=n.toLowerCase(),o=H.attrHooks[n]||(V.test(n)?K:J));if(r!==t){if(r===null){H.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,""+r),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)}},removeAttr:function(e,t){var n,r,i,s,o,u=0;if(t&&e.nodeType===1){r=t.toLowerCase().split(R),s=r.length;for(;u<s;u++)i=r[u],i&&(n=H.propFix[i]||i,o=V.test(i),o||H.attr(e,i,""),e.removeAttribute($?i:n),o&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(z.test(e.nodeName)&&e.parentNode)H.error("type property can't be changed");else if(!H.support.radioValue&&t==="radio"&&H.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return J&&H.nodeName(e,"button")?J.get(e,t):t in e?e.value:null},set:function(e,t,n){if(J&&H.nodeName(e,"button"))return J.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!!e&&u!==3&&u!==8&&u!==2)return o=u!==1||!H.isXMLDoc(e),o&&(n=H.propFix[n]||n,s=H.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):W.test(e.nodeName)||X.test(e.nodeName)&&e.href?0:t}}}}),H.attrHooks.tabindex=H.propHooks.tabIndex,K={get:function(e,n){var r,i=H.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?H.removeAttr(e,n):(r=H.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},$||(Q={name:!0,id:!0,coords:!0},J=H.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(Q[n]?r.nodeValue!=="":r.specified)?r.nodeValue:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=_.createAttribute(n),e.setAttributeNode(r)),r.nodeValue=t+""}},H.attrHooks.tabindex.set=J.set,H.each(["width","height"],function(e,t){H.attrHooks[t]=H.extend(H.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),H.attrHooks.contenteditable={get:J.get,set:function(e,t,n){t===""&&(t="false"),J.set(e,t,n)}}),H.support.hrefNormalized||H.each(["href","src","width","height"],function(e,n){H.attrHooks[n]=H.extend(H.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),H.support.style||(H.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=""+t}}),H.support.optSelected||(H.propHooks.selected=H.extend(H.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),H.support.enctype||(H.propFix.enctype="encoding"),H.support.checkOn||H.each(["radio","checkbox"],function(){H.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),H.each(["radio","checkbox"],function(){H.valHooks[this]=H.extend(H.valHooks[this],{set:function(e,t){if(H.isArray(t))return e.checked=H.inArray(H(e).val(),t)>=0}})});var G=/^(?:textarea|input|select)$/i,Y=/^([^\.]*)?(?:\.(.+))?$/,Z=/(?:^|\s)hover(\.\S+)?\b/,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,it=function(e){var t=rt.exec(e);return t&&(t[1]=(t[1]||"").toLowerCase(),t[3]=t[3]&&new RegExp("(?:^|\\s)"+t[3]+"(?:\\s|$)")),t},st=function(e,t){var n=e.attributes||{};return(!t[1]||e.nodeName.toLowerCase()===t[1])&&(!t[2]||(n.id||{}).value===
t[2])&&(!t[3]||t[3].test((n["class"]||{}).value))},ot=function(e){return H.event.special.hover?e:e.replace(Z,"mouseenter$1 mouseleave$1")};H.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,v,m,g;if(!(e.nodeType===3||e.nodeType===8||!n||!r||!(o=H._data(e)))){r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=H.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof H=="undefined"||!!e&&H.event.triggered===e.type?t:H.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=H.trim(ot(n)).split(" ");for(f=0;f<n.length;f++){l=Y.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=H.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=H.event.special[c]||{},p=H.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,quick:s&&it(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),H.event.global[c]=!0}e=null}},global:{},remove:function(e,t,n,r,i){var s=H.hasData(e)&&H._data(e),o,u,a,f,l,c,h,p,d,v,m,g;if(!!s&&!!(p=s.events)){t=H.trim(ot(t||"")).split(" ");for(o=0;o<t.length;o++){u=Y.exec(t[o])||[],a=f=u[1],l=u[2];if(!a){for(a in p)H.event.remove(e,a+t[o],n,r,!0);continue}d=H.event.special[a]||{},a=(r?d.delegateType:d.bindType)||a,m=p[a]||[],c=m.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(h=0;h<m.length;h++)g=m[h],(i||f===g.origType)&&(!n||n.guid===g.guid)&&(!l||l.test(g.namespace))&&(!r||r===g.selector||r==="**"&&g.selector)&&(m.splice(h--,1),g.selector&&m.delegateCount--,d.remove&&d.remove.call(e,g));m.length===0&&c!==m.length&&((!d.teardown||d.teardown.call(e,l)===!1)&&H.removeEvent(e,a,s.handle),delete p[a])}H.isEmptyObject(p)&&(v=s.handle,v&&(v.elem=null),H.removeData(e,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,i,s){if(!i||i.nodeType!==3&&i.nodeType!==8){var o=n.type||n,u=[],a,f,l,c,h,p,d,v,m,g;if(nt.test(o+H.event.triggered))return;o.indexOf("!")>=0&&(o=o.slice(0,-1),f=!0),o.indexOf(".")>=0&&(u=o.split("."),o=u.shift(),u.sort());if((!i||H.event.customEvent[o])&&!H.event.global[o])return;n=typeof n=="object"?n[H.expando]?n:new H.Event(o,n):new H.Event(o),n.type=o,n.isTrigger=!0,n.exclusive=f,n.namespace=u.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+u.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,p=o.indexOf(":")<0?"on"+o:"";if(!i){a=H.cache;for(l in a)a[l].events&&a[l].events[o]&&H.event.trigger(n,r,a[l].handle.elem,!0);return}n.result=t,n.target||(n.target=i),r=r!=null?H.makeArray(r):[],r.unshift(n),d=H.event.special[o]||{};if(d.trigger&&d.trigger.apply(i,r)===!1)return;m=[[i,d.bindType||o]];if(!s&&!d.noBubble&&!H.isWindow(i)){g=d.delegateType||o,c=nt.test(g+o)?i:i.parentNode,h=null;for(;c;c=c.parentNode)m.push([c,g]),h=c;h&&h===i.ownerDocument&&m.push([h.defaultView||h.parentWindow||e,g])}for(l=0;l<m.length&&!n.isPropagationStopped();l++)c=m[l][0],n.type=m[l][1],v=(H._data(c,"events")||{})[n.type]&&H._data(c,"handle"),v&&v.apply(c,r),v=p&&c[p],v&&H.acceptData(c)&&v.apply(c,r)===!1&&n.preventDefault();return n.type=o,!s&&!n.isDefaultPrevented()&&(!d._default||d._default.apply(i.ownerDocument,r)===!1)&&(o!=="click"||!H.nodeName(i,"a"))&&H.acceptData(i)&&p&&i[o]&&(o!=="focus"&&o!=="blur"||n.target.offsetWidth!==0)&&!H.isWindow(i)&&(h=i[p],h&&(i[p]=null),H.event.triggered=o,i[o](),H.event.triggered=t,h&&(i[p]=h)),n.result}},dispatch:function(n){n=H.event.fix(n||e.event);var r=(H._data(this,"events")||{})[n.type]||[],i=r.delegateCount,s=[].slice.call(arguments,0),o=!n.exclusive&&!n.namespace,u=H.event.special[n.type]||{},a=[],f,l,c,h,p,d,v,m,g,y,b;s[0]=n,n.delegateTarget=this;if(!u.preDispatch||u.preDispatch.call(this,n)!==!1){if(i&&(!n.button||n.type!=="click")){h=H(this),h.context=this.ownerDocument||this;for(c=n.target;c!=this;c=c.parentNode||this)if(c.disabled!==!0){d={},m=[],h[0]=c;for(f=0;f<i;f++)g=r[f],y=g.selector,d[y]===t&&(d[y]=g.quick?st(c,g.quick):h.is(y)),d[y]&&m.push(g);m.length&&a.push({elem:c,matches:m})}}r.length>i&&a.push({elem:this,matches:r.slice(i)});for(f=0;f<a.length&&!n.isPropagationStopped();f++){v=a[f],n.currentTarget=v.elem;for(l=0;l<v.matches.length&&!n.isImmediatePropagationStopped();l++){g=v.matches[l];if(o||!n.namespace&&!g.namespace||n.namespace_re&&n.namespace_re.test(g.namespace))n.data=g.data,n.handleObj=g,p=((H.event.special[g.origType]||{}).handle||g.handler).apply(v.elem,s),p!==t&&(n.result=p,p===!1&&(n.preventDefault(),n.stopPropagation()))}}return u.postDispatch&&u.postDispatch.call(this,n),n.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,s,o=n.button,u=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||_,i=r.documentElement,s=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||s&&s.scrollLeft||0)-(i&&i.clientLeft||s&&s.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||s&&s.scrollTop||0)-(i&&i.clientTop||s&&s.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),!e.which&&o!==t&&(e.which=o&1?1:o&2?3:o&4?2:0),e}},fix:function(e){if(e[H.expando])return e;var n,r,i=e,s=H.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=H.Event(i);for(n=o.length;n;)r=o[--n],e[r]=i[r];return e.target||(e.target=i.srcElement||_),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey===t&&(e.metaKey=e.ctrlKey),s.filter?s.filter(e,i):e},special:{ready:{setup:H.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){H.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=H.extend(new H.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?H.event.trigger(i,null,t):H.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},H.event.handle=H.event.dispatch,H.removeEvent=_.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){e.detachEvent&&e.detachEvent("on"+t,n)},H.Event=function(e,t){if(!(this instanceof H.Event))return new H.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?C:k):this.type=e,t&&H.extend(this,t),this.timeStamp=e&&e.timeStamp||H.now(),this[H.expando]=!0},H.Event.prototype={preventDefault:function(){this.isDefaultPrevented=C;var e=this.originalEvent;!e||(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=C;var e=this.originalEvent;!e||(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=C,this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k},H.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){H.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n=this,r=e.relatedTarget,i=e.handleObj,s=i.selector,o;if(!r||r!==n&&!H.contains(n,r))e.type=i.origType,o=i.handler.apply(this,arguments),e.type=t;return o}}}),H.support.submitBubbles||(H.event.special.submit={setup:function(){if(H.nodeName(this,"form"))return!1;H.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=H.nodeName(n,"input")||H.nodeName(n,"button")?n.form:t;r&&!r._submit_attached&&(H.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),r._submit_attached=!0)})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&H.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(H.nodeName(this,"form"))return!1;H.event.remove(this,"._submit")}}),H.support.changeBubbles||(H.event.special.change={setup:function(){if(G.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")H.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),H.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1,H.event.simulate("change",this,e,!0))});return!1}H.event.add(this,"beforeactivate._change",function(e){var t=e.target;G.test(t.nodeName)&&!t._change_attached&&(H.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&H.event.simulate("change",this.parentNode,e,!0)}),t._change_attached=!0)})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return H.event.remove(this,"._change"),G.test(this.nodeName)}}),H.support.focusinBubbles||H.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){H.event.simulate(t,e.target,H.event.fix(e),!0)};H.event.special[t]={setup:function(){n++===0&&_.addEventListener(e,r,!0)},teardown:function(){--n===0&&_.removeEventListener(e,r,!0)}}}),H.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=k;else if(!i)return this;return s===1&&(o=i,i=function(e){return H().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=H.guid++)),this.each(function(){H.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){if(e&&e.preventDefault&&e.handleObj){var i=e.handleObj;return H(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this}if(typeof e=="object"){for(var s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=k),this.each(function(){H.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return H(this.context).on(e,this.selector,t,n),this},die:function(e,t){return H(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length==1?this.off(e,"**"):this.off(t,e,n)},trigger:function(e,t){return this.each(function(){H.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return H.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||H.guid++,r=0,i=function(n){var i=(H._data(this,"lastToggle"+e.guid)||0)%r;return H._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),H.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){H.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},H.attrFn&&(H.attrFn[t]=!0),et.test(t)&&(H.event.fixHooks[t]=H.event.keyHooks),tt.test(t)&&(H.event.fixHooks[t]=H.event.mouseHooks)}),function(){function e(e,t,n,r,s,o){for(var u=0,a=r.length;u<a;u++){var f=r[u];if(f){var l=!1;f=f[e];while(f){if(f[i]===n){l=r[f.sizset];break}if(f.nodeType===1){o||(f[i]=n,f.sizset=u);if(typeof t!="string"){if(f===t){l=!0;break}}else if(h.filter(t,[f]).length>0){l=f;break}}f=f[e]}r[u]=l}}}function n(e,t,n,r,s,o){for(var u=0,a=r.length;u<a;u++){var f=r[u];if(f){var l=!1;f=f[e];while(f){if(f[i]===n){l=r[f.sizset];break}f.nodeType===1&&!o&&(f[i]=n,f.sizset=u);if(f.nodeName.toLowerCase()===t){l=f;break}f=f[e]}r[u]=l}}}var r=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,i="sizcache"+(Math.random()+"").replace(".",""),s=0,o=Object.prototype.toString,u=!1,a=!0,f=/\\/g,l=/\r\n/g,c=/\W/;[0,0].sort(function(){return a=!1,0});var h=function(e,t,n,i){n=n||[],t=t||_;var s=t;if(t.nodeType!==1&&t.nodeType!==9)return[];if(!e||typeof e!="string")return n;var u,a,f,l,c,p,m,g,b=!0,w=h.isXML(t),E=[],x=e;do{r.exec(""),u=r.exec(x);if(u){x=u[3],E.push(u[1]);if(u[2]){l=u[3];break}}}while(u);if(E.length>1&&v.exec(e))if(E.length===2&&d.relative[E[0]])a=S(E[0]+E[1],t,i);else{a=d.relative[E[0]]?[t]:h(E.shift(),t);while(E.length)e=E.shift(),d.relative[e]&&(e+=E.shift()),a=S(e,a,i)}else{!i&&E.length>1&&t.nodeType===9&&!w&&d.match.ID.test(E[0])&&!d.match.ID.test(E[E.length-1])&&(c=h.find(E.shift(),t,w),t=c.expr?h.filter(c.expr,c.set)[0]:c.set[0]);if(t){c=i?{expr:E.pop(),set:y(i)}:h.find(E.pop(),E.length!==1||E[0]!=="~"&&E[0]!=="+"||!t.parentNode?t:t.parentNode,w),a=c.expr?h.filter(c.expr,c.set):c.set,E.length>0?f=y(a):b=!1;while(E.length)p=E.pop(),m=p,d.relative[p]?m=E.pop():p="",m==null&&(m=t),d.relative[p](f,m,w)}else f=E=[]}f||(f=a),f||h.error(p||e);if(o.call(f)==="[object Array]")if(!b)n.push.apply(n,f);else if(t&&t.nodeType===1)for(g=0;f[g]!=null;g++)f[g]&&(f[g]===!0||f[g].nodeType===1&&h.contains(t,f[g]))&&n.push(a[g]);else for(g=0;f[g]!=null;g++)f[g]&&f[g].nodeType===1&&n.push(a[g]);else y(f,n);return l&&(h(l,s,n,i),h.uniqueSort(n)),n};h.uniqueSort=function(e){if(w){u=a,e.sort(w);if(u)for(var t=1;t<e.length;t++)e[t]===e[t-1]&&e.splice(t--,1)}return e},h.matches=function(e,t){return h(e,null,null,t)},h.matchesSelector=function(e,t){return h(t,null,null,[e]).length>0},h.find=function(e,t,n){var r,i,s,o,u,a;if(!e)return[];for(i=0,s=d.order.length;i<s;i++){u=d.order[i];if(o=d.leftMatch[u].exec(e)){a=o[1],o.splice(1,1);if(a.substr(a.length-1)!=="\\"){o[1]=(o[1]||"").replace(f,""),r=d.find[u](o,t,n);if(r!=null){e=e.replace(d.match[u],"");break}}}}return r||(r=typeof t.getElementsByTagName!="undefined"?t.getElementsByTagName("*"):[]),{set:r,expr:e}},h.filter=function(e,n,r,i){var s,o,u,a,f,l,c,p,v,m=e,g=[],y=n,b=n&&n[0]&&h.isXML(n[0]);while(e&&n.length){for(u in d.filter)if((s=d.leftMatch[u].exec(e))!=null&&s[2]){l=d.filter[u],c=s[1],o=!1,s.splice(1,1);if(c.substr(c.length-1)==="\\")continue;y===g&&(g=[]);if(d.preFilter[u]){s=d.preFilter[u](s,y,r,g,i,b);if(!s)o=a=!0;else if(s===!0)continue}if(s)for(p=0;(f=y[p])!=null;p++)f&&(a=l(f,s,p,y),v=i^a,r&&a!=null?v?o=!0:y[p]=!1:v&&(g.push(f),o=!0));if(a!==t){r||(y=g),e=e.replace(d.match[u],"");if(!o)return[];break}}if(e===m){if(o!=null)break;h.error(e)}m=e}return y},h.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};var p=h.getText=function(e){var t,n,r=e.nodeType,i="";if(r){if(r===1||r===9||r===11){if(typeof e.textContent=="string")return e.textContent;if(typeof e.innerText=="string")return e.innerText.replace(l,"");for(e=e.firstChild;e;e=e.nextSibling)i+=p(e)}else if(r===3||r===4)return e.nodeValue}else for(t=0;n=e[t];t++)n.nodeType!==8&&(i+=p(n));return i},d=h.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(e,t){var n=typeof t=="string",r=n&&!c.test(t),i=n&&!r;r&&(t=t.toLowerCase());for(var s=0,o=e.length,u;s<o;s++)if(u=e[s]){while((u=u.previousSibling)&&u.nodeType!==1);e[s]=i||u&&u.nodeName.toLowerCase()===t?u||!1:u===t}i&&h.filter(t,e,!0)},">":function(e,t){var n,r=typeof t=="string",i=0,s=e.length;if(r&&!c.test(t)){t=t.toLowerCase();for(;i<s;i++){n=e[i];if(n){var o=n.parentNode;e[i]=o.nodeName.toLowerCase()===t?o:!1}}}else{for(;i<s;i++)n=e[i],n&&(e[i]=r?n.parentNode:n.parentNode===t);r&&h.filter(t,e,!0)}},"":function(t,r,i){var o,u=s++,a=e;typeof r=="string"&&!c.test(r)&&(r=r.toLowerCase(),o=r,a=n),a("parentNode",r,u,t,o,i)},"~":function(t,r,i){var o,u=s++,a=e;typeof r=="string"&&!c.test(r)&&(r=r.toLowerCase(),o=r,a=n),a("previousSibling",r,u,t,o,i)}},find:{ID:function(e,t,n){if(typeof t.getElementById!="undefined"&&!n){var r=t.getElementById(e[1]);return r&&r.parentNode?[r]:[]}},NAME:function(e,t){if(typeof t.getElementsByName!="undefined"){var n=[],r=t.getElementsByName(e[1]);for(var i=0,s=r.length;i<s;i++)r[i].getAttribute("name")===e[1]&&n.push(r[i]);return n.length===0?null:n}},TAG:function(e,t){if(typeof t.getElementsByTagName!="undefined")return t.getElementsByTagName(e[1])}},preFilter:{CLASS:function(e,t,n,r,i,s){e=" "+e[1].replace(f,"")+" ";if(s)return e;for(var o=0,u;(u=t[o])!=null;o++)u&&(i^(u.className&&(" "+u.className+" ").replace(/[\t\n\r]/g," ").indexOf(e)>=0)?n||r.push(u):n&&(t[o]=!1));return!1},ID:function(e){return e[1].replace(f,"")},TAG:function(e,t){return e[1].replace(f,"").toLowerCase()},CHILD:function(e){if(e[1]==="nth"){e[2]||h.error(e[0]),e[2]=e[2].replace(/^\+|\s*/g,"");var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=t[1]+(t[2]||1)-0,e[3]=t[3]-0}else e[2]&&h.error(e[0]);return e[0]=s++,e},ATTR:function(e,t,n,r,i,s){var o=e[1]=e[1].replace(f,"");return!s&&d.attrMap[o]&&(e[1]=d.attrMap[o]),e[4]=(e[4]||e[5]||"").replace(f,""),e[2]==="~="&&(e[4]=" "+e[4]+" "),e},PSEUDO:function(e,t,n,i,s){if(e[1]==="not"){if(!((r.exec(e[3])||"").length>1||/^\w/.test(e[3]))){var o=h.filter(e[3],t,n,!0^s);return n||i.push.apply(i,o),!1}e[3]=h(e[3],null,null,t)}else if(d.match.POS.test(e[0])||d.match.CHILD.test(e[0]))return!0;return e},POS:function(e){return e.unshift(!0),e}},filters:{enabled:function(e){return e.disabled===!1&&e.type!=="hidden"},disabled:function(e){return e.disabled===!0},checked:function(e){return e.checked===!0},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!h(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){var t=e.getAttribute("type"),n=e.type;return e.nodeName.toLowerCase()==="input"&&"text"===n&&(t===n||t===null)},radio:function(e){return e.nodeName.toLowerCase()==="input"&&"radio"===e.type},checkbox:function(e){return e.nodeName.toLowerCase()==="input"&&"checkbox"===e.type},file:function(e){return e.nodeName.toLowerCase()==="input"&&"file"===e.type},password:function(e){return e.nodeName.toLowerCase()==="input"&&"password"===e.type},submit:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"submit"===e.type},image:function(e){return e.nodeName.toLowerCase()==="input"&&"image"===e.type},reset:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"reset"===e.type},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&"button"===e.type||t==="button"},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(e,t){return t===0},last:function(e,t,n,r){return t===r.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,r){var i=t[1],s=d.filters[i];if(s)return s(e,n,t,r);if(i==="contains")return(e.textContent||e.innerText||p([e])||"").indexOf(t[3])>=0;if(i==="not"){var o=t[3];for(var u=0,a=o.length;u<a;u++)if(o[u]===e)return!1;return!0}h.error(i)},CHILD:function(e,t){var n,r,s,o,u,a,f,l=t[1],c=e;switch(l){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(l==="first")return!0;c=e;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0;case"nth":n=t[2],r=t[3];if(n===1&&r===0)return!0;s=t[0],o=e.parentNode;if(o&&(o[i]!==s||!e.nodeIndex)){a=0;for(c=o.firstChild;c;c=c.nextSibling)c.nodeType===1&&(c.nodeIndex=++a);o[i]=s}return f=e.nodeIndex-r,n===0?f===0:f%n===0&&f/n>=0}},ID:function(e,t){return e.nodeType===1&&e.getAttribute("id")===t},TAG:function(e,t){return t==="*"&&e.nodeType===1||!!e.nodeName&&e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1],r=h.attr?h.attr(e,n):d.attrHandle[n]?d.attrHandle[n](e):e[n]!=null?e[n]:e.getAttribute(n),i=r+"",s=t[2],o=t[4];return r==null?s==="!=":!s&&h.attr?r!=null:s==="="?i===o:s==="*="?i.indexOf(o)>=0:s==="~="?(" "+i+" ").indexOf(o)>=0:o?s==="!="?i!==o:s==="^="?i.indexOf(o)===0:s==="$="?i.substr(i.length-o.length)===o:s==="|="?i===o||i.substr(0,o.length+1)===o+"-":!1:i&&r!==!1},POS:function(e,t,n,r){var i=t[2],s=d.setFilters[i];if(s)return s(e,n,t,r)}}},v=d.match.POS,m=function(e,t){return"\\"+(t-0+1)};for(var g in d.match)d.match[g]=new RegExp(d.match[g].source+/(?![^\[]*\])(?![^\(]*\))/.source),d.leftMatch[g]=new RegExp(/(^(?:.|\r|\n)*?)/.source+d.match[g].source.replace(/\\(\d+)/g,m));d.match.globalPOS=v;var y=function(e,t){return e=Array.prototype.slice.call(e,0),t?(t.push.apply(t,e),t):e};try{Array.prototype.slice.call(_.documentElement.childNodes,0)[0].nodeType}catch(b){y=function(e,t){var n=0,r=t||[];if(o.call(e)==="[object Array]")Array.prototype.push.apply(r,e);else if(typeof e.length=="number")for(var i=e.length;n<i;n++)r.push(e[n]);else for(;e[n];n++)r.push(e[n]);return r}}var w,E;_.documentElement.compareDocumentPosition?w=function(e,t){return e===t?(u=!0,0):!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition?-1:1:e.compareDocumentPosition(t)&4?-1:1}:(w=function(e,t){if(e===t)return u=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,a=t.parentNode,f=o;if(o===a)return E(e,t);if(!o)return-1;if(!a)return 1;while(f)i.unshift(f),f=f.parentNode;f=a;while(f)s.unshift(f),f=f.parentNode;n=i.length,r=s.length;for(var l=0;l<n&&l<r;l++)if(i[l]!==s[l])return E(i[l],s[l]);return l===n?E(e,s[l],-1):E(i[l],t,1)},E=function(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}),function(){var e=_.createElement("div"),n="script"+(new Date).getTime(),r=_.documentElement;e.innerHTML="<a name='"+n+"'/>",r.insertBefore(e,r.firstChild),_.getElementById(n)&&(d.find.ID=function(e,n,r){if(typeof n.getElementById!="undefined"&&!r){var i=n.getElementById(e[1]);return i?i.id===e[1]||typeof i.getAttributeNode!="undefined"&&i.getAttributeNode("id").nodeValue===e[1]?[i]:t:[]}},d.filter.ID=function(e,t){var n=typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id");return e.nodeType===1&&n&&n.nodeValue===t}),r.removeChild(e),r=e=null}(),function(){var e=_.createElement("div");e.appendChild(_.createComment("")),e.getElementsByTagName("*").length>0&&(d.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1]);if(e[1]==="*"){var r=[];for(var i=0;n[i];i++)n[i].nodeType===1&&r.push(n[i]);n=r}return n}),e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!="undefined"&&e.firstChild.getAttribute("href")!=="#"&&(d.attrHandle.href=function(e){return e.getAttribute("href",2)}),e=null}(),_.querySelectorAll&&function(){var e=h,t=_.createElement("div"),n="__sizzle__";t.innerHTML="<p class='TEST'></p>";if(!t.querySelectorAll||t.querySelectorAll(".TEST").length!==0){h=function(t,r,i,s){r=r||_;if(!s&&!h.isXML(r)){var o=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);if(o&&(r.nodeType===1||r.nodeType===9)){if(o[1])return y(r.getElementsByTagName(t),i);if(o[2]&&d.find.CLASS&&r.getElementsByClassName)return y(r.getElementsByClassName(o[2]),i)}if(r.nodeType===9){if(t==="body"&&r.body)return y([r.body],i);if(o&&o[3]){var u=r.getElementById(o[3]);if(!u||!u.parentNode)return y([],i);if(u.id===o[3])return y([u],i)}try{return y(r.querySelectorAll(t),i)}catch(a){}}else if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){var f=r,l=r.getAttribute("id"),c=l||n,p=r.parentNode,v=/^\s*[+~]/.test(t);l?c=c.replace(/'/g,"\\$&"):r.setAttribute("id",c),v&&p&&(r=r.parentNode);try{if(!v||p)return y(r.querySelectorAll("[id='"+c+"'] "+t),i)}catch(m){}finally{l||f.removeAttribute("id")}}}return e(t,r,i,s)};for(var r in e)h[r]=e[r];t=null}}(),function(){var e=_.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;if(t){var n=!t.call(_.createElement("div"),"div"),r=!1;try{t.call(_.documentElement,"[test!='']:sizzle")}catch(i){r=!0}h.matchesSelector=function(e,i){i=i.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!h.isXML(e))try{if(r||!d.match.PSEUDO.test(i)&&!/!=/.test(i)){var s=t.call(e,i);if(s||!n||e.document&&e.document.nodeType!==11)return s}}catch(o){}return h(i,null,null,[e]).length>0}}}(),function(){var e=_.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!e.getElementsByClassName&&e.getElementsByClassName("e").length!==0){e.lastChild.className="e";if(e.getElementsByClassName("e").length===1)return;d.order.splice(1,0,"CLASS"),d.find.CLASS=function(e,t,n){if(typeof t.getElementsByClassName!="undefined"&&!n)return t.getElementsByClassName(e[1])},e=null}}(),_.documentElement.contains?h.contains=function(e,t){return e!==t&&(e.contains?e.contains(t):!0)}:_.documentElement.compareDocumentPosition?h.contains=function(e,t){return!!(e.compareDocumentPosition(t)&16)}:h.contains=function(){return!1},h.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?t.nodeName!=="HTML":!1};var S=function(e,t,n){var r,i=[],s="",o=t.nodeType?[t]:t;while(r=d.match.PSEUDO.exec(e))s+=r[0],e=e.replace(d.match.PSEUDO,"");e=d.relative[e]?e+"*":e;for(var u=0,a=o.length;u<a;u++)h(e,o[u],i,n);return h.filter(s,i)};h.attr=H.attr,h.selectors.attrMap={},H.find=h,H.expr=h.selectors,H.expr[":"]=H.expr.filters,H.unique=h.uniqueSort,H.text=h.getText,H.isXMLDoc=h.isXML,H.contains=h.contains}();var ut=/Until$/,at=/^(?:parents|prevUntil|prevAll)/,ft=/,/,lt=/^.[^:#\[\.,]*$/,ct=Array.prototype.slice,ht=H.expr.match.globalPOS,pt={children:!0,contents:!0,next:!0,prev:!0};H.fn.extend({find:function(e){var t=this,n,r;if(typeof e!="string")return H(e).filter(function(){for(n=0,r=t.length;n<r;n++)if(H.contains(t[n],this))return!0});var i=this.pushStack("","find",e),s,o,u;for(n=0,r=this.length;n<r;n++){s=i.length,H.find(e,this[n],i);if(n>0)for(o=s;o<i.length;o++)for(u=0;u<s;u++)if(i[u]===i[o]){i.splice(o--,1);break}}return i},has:function(e){var t=H(e);return this.filter(function(){for(var e=0,n=t.length;e<n;e++)if(H.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(T(this,e,!1),"not",e)},filter:function(e){return this.pushStack(T(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?ht.test(e)?H(e,this.context).index(this[0])>=0:H.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n=[],r,i,s=this[0];if(H.isArray(e)){var o=1;while(s&&s.ownerDocument&&s!==t){for(r=0;r<e.length;r++)H(s).is(e[r])&&n.push({selector:e[r],elem:s,level:o});s=s.parentNode,o++}return n}var u=ht.test(e)||typeof e!="string"?H(e,t||this.context):0;for(r=0,i=this.length;r<i;r++){s=this[r];while(s){if(u?u.index(s)>-1:H.find.matchesSelector(s,e)){n.push(s);break}s=s.parentNode;if(!s||!s.ownerDocument||s===t||s.nodeType===11)break}}return n=n.length>1?H.unique(n):n,this.pushStack(n,"closest",e)},index:function(e){return e?typeof e=="string"?H.inArray(this[0],H(e)):H.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?H(e,t):H.makeArray(e&&e.nodeType?[e]:e),r=H.merge(this.get(),n);return this.pushStack(N(n[0])||N(r[0])?r:H.unique(r))},andSelf:function(){return this.add(this.prevObject)}}),H.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return H.dir(e,"parentNode")},parentsUntil:function(e,t,n){return H.dir(e,"parentNode",n)},next:function(e){return H.nth(e,2,"nextSibling")},prev:function(e){return H.nth(e,2,"previousSibling")},nextAll:function(e){return H.dir(e,"nextSibling")},prevAll:function(e){return H.dir(e,"previousSibling")},nextUntil:function(e,t,n){return H.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return H.dir(e,"previousSibling",n)},siblings:function(e){return H.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return H.sibling(e.firstChild)},contents:function(e){return H.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:H.makeArray(e.childNodes)}},function(e,t){H.fn[e]=function(n,r){var i=H.map(this,t,n);return ut.test(e)||(r=n),r&&typeof r=="string"&&(i=H.filter(r,i)),i=this.length>1&&!pt[e]?H.unique(i):i,(this.length>1||ft.test(r))&&at.test(e)&&(i=i.reverse()),this.pushStack(i,e,ct.call(arguments).join(","))}}),H.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?H.find.matchesSelector(t[0],e)?[t[0]]:[]:H.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!H(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},nth:function(e,t,n,r){t=t||1;var i=0;for(;e;e=e[n])if(e.nodeType===1&&++i===t)break;return e},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var dt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",vt=/ jQuery\d+="(?:\d+|null)"/g,mt=/^\s+/,gt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,yt=/<([\w:]+)/,bt=/<tbody/i,wt=/<|&#?\w+;/,Et=/<(?:script|style)/i,St=/<(?:script|object|embed|option|style)/i,xt=new RegExp("<(?:"+dt+")[\\s/>]","i"),Tt=/checked\s*(?:[^=]|=\s*.checked.)/i,Nt=/\/(java|ecma)script/i,Ct=/^\s*<!(?:\[CDATA\[|\-\-)/,kt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Lt=x(_);kt.optgroup=kt.option,kt.tbody=kt.tfoot=kt.colgroup=kt.caption=kt.thead,kt.th=kt.td,H.support.htmlSerialize||(kt._default=[1,"div<div>","</div>"]),H.fn.extend({text:function(e){return H.access(this,function(e){return e===t?H.text(this):this.empty().append((this[0]&&this[0].ownerDocument||_).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(H.isFunction(e))return this.each(function(t){H(this).wrapAll(e.call(this,t))});if(this[0]){var t=H(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return H.isFunction(e)?this.each(function(t){H(this).wrapInner(e.call(this,t))}):this.each(function(){var t=H(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=H.isFunction(e);return this.each(function(n){H(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){H.nodeName(this,"body")||H(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){this.nodeType===1&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){this.nodeType===1&&this.insertBefore(e,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=H.clean(arguments);return e.push.apply(e,this.toArray()),this.pushStack(e,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=
this.pushStack(this,"after",arguments);return e.push.apply(e,H.clean(arguments)),e}},remove:function(e,t){for(var n=0,r;(r=this[n])!=null;n++)if(!e||H.filter(e,[r]).length)!t&&r.nodeType===1&&(H.cleanData(r.getElementsByTagName("*")),H.cleanData([r])),r.parentNode&&r.parentNode.removeChild(r);return this},empty:function(){for(var e=0,t;(t=this[e])!=null;e++){t.nodeType===1&&H.cleanData(t.getElementsByTagName("*"));while(t.firstChild)t.removeChild(t.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return H.clone(this,e,t)})},html:function(e){return H.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(vt,""):null;if(typeof e=="string"&&!Et.test(e)&&(H.support.leadingWhitespace||!mt.test(e))&&!kt[(yt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(gt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(H.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return this[0]&&this[0].parentNode?H.isFunction(e)?this.each(function(t){var n=H(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=H(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;H(this).remove(),t?H(t).before(e):H(n).append(e)})):this.length?this.pushStack(H(H.isFunction(e)?e():e),"replaceWith",e):this},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){var i,s,o,u,a=e[0],f=[];if(!H.support.checkClone&&arguments.length===3&&typeof a=="string"&&Tt.test(a))return this.each(function(){H(this).domManip(e,n,r,!0)});if(H.isFunction(a))return this.each(function(i){var s=H(this);e[0]=a.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){u=a&&a.parentNode,H.support.parentNode&&u&&u.nodeType===11&&u.childNodes.length===this.length?i={fragment:u}:i=H.buildFragment(e,this,f),o=i.fragment,o.childNodes.length===1?s=o=o.firstChild:s=o.firstChild;if(s){n=n&&H.nodeName(s,"tr");for(var l=0,c=this.length,h=c-1;l<c;l++)r.call(n?S(this[l],s):this[l],i.cacheable||c>1&&l<h?H.clone(o,!0,!0):o)}f.length&&H.each(f,function(e,t){t.src?H.ajax({type:"GET",global:!1,url:t.src,async:!1,dataType:"script"}):H.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Ct,"/*$0*/")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),H.buildFragment=function(e,t,n){var r,i,s,o,u=e[0];return t&&t[0]&&(o=t[0].ownerDocument||t[0]),o.createDocumentFragment||(o=_),e.length===1&&typeof u=="string"&&u.length<512&&o===_&&u.charAt(0)==="<"&&!St.test(u)&&(H.support.checkClone||!Tt.test(u))&&(H.support.html5Clone||!xt.test(u))&&(i=!0,s=H.fragments[u],s&&s!==1&&(r=s)),r||(r=o.createDocumentFragment(),H.clean(e,o,r,n)),i&&(H.fragments[u]=s?r:1),{fragment:r,cacheable:i}},H.fragments={},H.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){H.fn[e]=function(n){var r=[],i=H(n),s=this.length===1&&this[0].parentNode;if(s&&s.nodeType===11&&s.childNodes.length===1&&i.length===1)return i[t](this[0]),this;for(var o=0,u=i.length;o<u;o++){var a=(o>0?this.clone(!0):this).get();H(i[o])[t](a),r=r.concat(a)}return this.pushStack(r,e,i.selector)}}),H.extend({clone:function(e,t,n){var r,i,s,o=H.support.html5Clone||H.isXMLDoc(e)||!xt.test("<"+e.nodeName+">")?e.cloneNode(!0):m(e);if((!H.support.noCloneEvent||!H.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!H.isXMLDoc(e)){w(e,o),r=b(e),i=b(o);for(s=0;r[s];++s)i[s]&&w(r[s],i[s])}if(t){E(e,o);if(n){r=b(e),i=b(o);for(s=0;r[s];++s)E(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var i,s,o,u=[];t=t||_,typeof t.createElement=="undefined"&&(t=t.ownerDocument||t[0]&&t[0].ownerDocument||_);for(var a=0,f;(f=e[a])!=null;a++){typeof f=="number"&&(f+="");if(!f)continue;if(typeof f=="string")if(!wt.test(f))f=t.createTextNode(f);else{f=f.replace(gt,"<$1></$2>");var l=(yt.exec(f)||["",""])[1].toLowerCase(),c=kt[l]||kt._default,h=c[0],p=t.createElement("div"),d=Lt.childNodes,v;t===_?Lt.appendChild(p):x(t).appendChild(p),p.innerHTML=c[1]+f+c[2];while(h--)p=p.lastChild;if(!H.support.tbody){var m=bt.test(f),y=l==="table"&&!m?p.firstChild&&p.firstChild.childNodes:c[1]==="<table>"&&!m?p.childNodes:[];for(o=y.length-1;o>=0;--o)H.nodeName(y[o],"tbody")&&!y[o].childNodes.length&&y[o].parentNode.removeChild(y[o])}!H.support.leadingWhitespace&&mt.test(f)&&p.insertBefore(t.createTextNode(mt.exec(f)[0]),p.firstChild),f=p.childNodes,p&&(p.parentNode.removeChild(p),d.length>0&&(v=d[d.length-1],v&&v.parentNode&&v.parentNode.removeChild(v)))}var b;if(!H.support.appendChecked)if(f[0]&&typeof (b=f.length)=="number")for(o=0;o<b;o++)g(f[o]);else g(f);f.nodeType?u.push(f):u=H.merge(u,f)}if(n){i=function(e){return!e.type||Nt.test(e.type)};for(a=0;u[a];a++){s=u[a];if(r&&H.nodeName(s,"script")&&(!s.type||Nt.test(s.type)))r.push(s.parentNode?s.parentNode.removeChild(s):s);else{if(s.nodeType===1){var w=H.grep(s.getElementsByTagName("script"),i);u.splice.apply(u,[a+1,0].concat(w))}n.appendChild(s)}}}return u},cleanData:function(e){var t,n,r=H.cache,i=H.event.special,s=H.support.deleteExpando;for(var o=0,u;(u=e[o])!=null;o++){if(u.nodeName&&H.noData[u.nodeName.toLowerCase()])continue;n=u[H.expando];if(n){t=r[n];if(t&&t.events){for(var a in t.events)i[a]?H.event.remove(u,a):H.removeEvent(u,a,t.handle);t.handle&&(t.handle.elem=null)}s?delete u[H.expando]:u.removeAttribute&&u.removeAttribute(H.expando),delete r[n]}}}});var At=/alpha\([^)]*\)/i,Ot=/opacity=([^)]*)/,Mt=/([A-Z]|^ms)/g,_t=/^[\-+]?(?:\d*\.)?\d+$/i,Dt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Pt=/^([\-+])=([\-+.\de]+)/,Ht=/^margin/,Bt={position:"absolute",visibility:"hidden",display:"block"},jt=["Top","Right","Bottom","Left"],Ft,It,qt;H.fn.css=function(e,n){return H.access(this,function(e,n,r){return r!==t?H.style(e,n,r):H.css(e,n)},e,n,arguments.length>1)},H.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ft(e,"opacity");return n===""?"1":n}return e.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":H.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!!e&&e.nodeType!==3&&e.nodeType!==8&&!!e.style){var s,o,u=H.camelCase(n),a=e.style,f=H.cssHooks[u];n=H.cssProps[u]||u;if(r===t)return f&&"get"in f&&(s=f.get(e,!1,i))!==t?s:a[n];o=typeof r,o==="string"&&(s=Pt.exec(r))&&(r=+(s[1]+1)*+s[2]+parseFloat(H.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!H.cssNumber[u]&&(r+="px");if(!f||!("set"in f)||(r=f.set(e,r))!==t)try{a[n]=r}catch(l){}}},css:function(e,n,r){var i,s;n=H.camelCase(n),s=H.cssHooks[n],n=H.cssProps[n]||n,n==="cssFloat"&&(n="float");if(s&&"get"in s&&(i=s.get(e,!0,r))!==t)return i;if(Ft)return Ft(e,n)},swap:function(e,t,n){var r={},i,s;for(s in t)r[s]=e.style[s],e.style[s]=t[s];i=n.call(e);for(s in t)e.style[s]=r[s];return i}}),H.curCSS=H.css,_.defaultView&&_.defaultView.getComputedStyle&&(It=function(e,t){var n,r,i,s,o=e.style;return t=t.replace(Mt,"-$1").toLowerCase(),(r=e.ownerDocument.defaultView)&&(i=r.getComputedStyle(e,null))&&(n=i.getPropertyValue(t),n===""&&!H.contains(e.ownerDocument.documentElement,e)&&(n=H.style(e,t))),!H.support.pixelMargin&&i&&Ht.test(t)&&Dt.test(n)&&(s=o.width,o.width=n,n=i.width,o.width=s),n}),_.documentElement.currentStyle&&(qt=function(e,t){var n,r,i,s=e.currentStyle&&e.currentStyle[t],o=e.style;return s==null&&o&&(i=o[t])&&(s=i),Dt.test(s)&&(n=o.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),o.left=t==="fontSize"?"1em":s,s=o.pixelLeft+"px",o.left=n,r&&(e.runtimeStyle.left=r)),s===""?"auto":s}),Ft=It||qt,H.each(["height","width"],function(e,t){H.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth!==0?v(e,t,r):H.swap(e,Bt,function(){return v(e,t,r)})},set:function(e,t){return _t.test(t)?t+"px":t}}}),H.support.opacity||(H.cssHooks.opacity={get:function(e,t){return Ot.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=H.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&H.trim(s.replace(At,""))===""){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=At.test(s)?s.replace(At,i):s+" "+i}}),H(function(){H.support.reliableMarginRight||(H.cssHooks.marginRight={get:function(e,t){return H.swap(e,{display:"inline-block"},function(){return t?Ft(e,"margin-right"):e.style.marginRight})}})}),H.expr&&H.expr.filters&&(H.expr.filters.hidden=function(e){var t=e.offsetWidth,n=e.offsetHeight;return t===0&&n===0||!H.support.reliableHiddenOffsets&&(e.style&&e.style.display||H.css(e,"display"))==="none"},H.expr.filters.visible=function(e){return!H.expr.filters.hidden(e)}),H.each({margin:"",padding:"",border:"Width"},function(e,t){H.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+jt[r]+t]=i[r]||i[r-2]||i[0];return s}}});var Rt=/%20/g,Ut=/\[\]$/,zt=/\r?\n/g,Wt=/#.*$/,Xt=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Vt=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,$t=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Jt=/^(?:GET|HEAD)$/,Kt=/^\/\//,Qt=/\?/,Gt=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Yt=/^(?:select|textarea)/i,Zt=/\s+/,en=/([?&])_=[^&]*/,tn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,nn=H.fn.load,rn={},sn={},on,un,an=["*/"]+["*"];try{on=P.href}catch(fn){on=_.createElement("a"),on.href="",on=on.href}un=tn.exec(on.toLowerCase())||[],H.fn.extend({load:function(e,n,r){if(typeof e!="string"&&nn)return nn.apply(this,arguments);if(!this.length)return this;var i=e.indexOf(" ");if(i>=0){var s=e.slice(i,e.length);e=e.slice(0,i)}var o="GET";n&&(H.isFunction(n)?(r=n,n=t):typeof n=="object"&&(n=H.param(n,H.ajaxSettings.traditional),o="POST"));var u=this;return H.ajax({url:e,type:o,dataType:"html",data:n,complete:function(e,t,n){n=e.responseText,e.isResolved()&&(e.done(function(e){n=e}),u.html(s?H("<div>").append(n.replace(Gt,"")).find(s):n)),r&&u.each(r,[n,t,e])}}),this},serialize:function(){return H.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?H.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Yt.test(this.nodeName)||Vt.test(this.type))}).map(function(e,t){var n=H(this).val();return n==null?null:H.isArray(n)?H.map(n,function(e,n){return{name:t.name,value:e.replace(zt,"\r\n")}}):{name:t.name,value:n.replace(zt,"\r\n")}}).get()}}),H.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){H.fn[t]=function(e){return this.on(t,e)}}),H.each(["get","post"],function(e,n){H[n]=function(e,r,i,s){return H.isFunction(r)&&(s=s||i,i=r,r=t),H.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),H.extend({getScript:function(e,n){return H.get(e,t,n,"script")},getJSON:function(e,t,n){return H.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?h(e,H.ajaxSettings):(t=e,e=H.ajaxSettings),h(e,t),e},ajaxSettings:{url:on,isLocal:$t.test(un[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":an},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":H.parseJSON,"text xml":H.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:d(rn),ajaxTransport:d(sn),ajax:function(e,n){function r(e,n,r,p){if(E!==2){E=2,b&&clearTimeout(b),y=t,m=p||"",T.readyState=e>0?4:0;var d,v,g,w=n,x=r?l(i,T,r):t,N,C;if(e>=200&&e<300||e===304){if(i.ifModified){if(N=T.getResponseHeader("Last-Modified"))H.lastModified[h]=N;if(C=T.getResponseHeader("Etag"))H.etag[h]=C}if(e===304)w="notmodified",d=!0;else try{v=f(i,x),w="success",d=!0}catch(k){w="parsererror",g=k}}else{g=w;if(!w||e)w="error",e<0&&(e=0)}T.status=e,T.statusText=""+(n||w),d?u.resolveWith(s,[v,w,T]):u.rejectWith(s,[T,w,g]),T.statusCode(c),c=t,S&&o.trigger("ajax"+(d?"Success":"Error"),[T,i,d?v:g]),a.fireWith(s,[T,w]),S&&(o.trigger("ajaxComplete",[T,i]),--H.active||H.event.trigger("ajaxStop"))}}typeof e=="object"&&(n=e,e=t),n=n||{};var i=H.ajaxSetup({},n),s=i.context||i,o=s!==i&&(s.nodeType||s instanceof H)?H(s):H.event,u=H.Deferred(),a=H.Callbacks("once memory"),c=i.statusCode||{},h,d={},v={},m,g,y,b,w,E=0,S,x,T={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=v[n]=v[n]||e,d[e]=t}return this},getAllResponseHeaders:function(){return E===2?m:null},getResponseHeader:function(e){var n;if(E===2){if(!g){g={};while(n=Xt.exec(m))g[n[1].toLowerCase()]=n[2]}n=g[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(i.mimeType=e),this},abort:function(e){return e=e||"abort",y&&y.abort(e),r(0,e),this}};u.promise(T),T.success=T.done,T.error=T.fail,T.complete=a.add,T.statusCode=function(e){if(e){var t;if(E<2)for(t in e)c[t]=[c[t],e[t]];else t=e[T.status],T.then(t,t)}return this},i.url=((e||i.url)+"").replace(Wt,"").replace(Kt,un[1]+"//"),i.dataTypes=H.trim(i.dataType||"*").toLowerCase().split(Zt),i.crossDomain==null&&(w=tn.exec(i.url.toLowerCase()),i.crossDomain=!(!w||w[1]==un[1]&&w[2]==un[2]&&(w[3]||(w[1]==="http:"?80:443))==(un[3]||(un[1]==="http:"?80:443)))),i.data&&i.processData&&typeof i.data!="string"&&(i.data=H.param(i.data,i.traditional)),p(rn,i,n,T);if(E===2)return!1;S=i.global,i.type=i.type.toUpperCase(),i.hasContent=!Jt.test(i.type),S&&H.active++===0&&H.event.trigger("ajaxStart");if(!i.hasContent){i.data&&(i.url+=(Qt.test(i.url)?"&":"?")+i.data,delete i.data),h=i.url;if(i.cache===!1){var N=H.now(),C=i.url.replace(en,"$1_="+N);i.url=C+(C===i.url?(Qt.test(i.url)?"&":"?")+"_="+N:"")}}(i.data&&i.hasContent&&i.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",i.contentType),i.ifModified&&(h=h||i.url,H.lastModified[h]&&T.setRequestHeader("If-Modified-Since",H.lastModified[h]),H.etag[h]&&T.setRequestHeader("If-None-Match",H.etag[h])),T.setRequestHeader("Accept",i.dataTypes[0]&&i.accepts[i.dataTypes[0]]?i.accepts[i.dataTypes[0]]+(i.dataTypes[0]!=="*"?", "+an+"; q=0.01":""):i.accepts["*"]);for(x in i.headers)T.setRequestHeader(x,i.headers[x]);if(!i.beforeSend||i.beforeSend.call(s,T,i)!==!1&&E!==2){for(x in{success:1,error:1,complete:1})T[x](i[x]);y=p(sn,i,n,T);if(!y)r(-1,"No Transport");else{T.readyState=1,S&&o.trigger("ajaxSend",[T,i]),i.async&&i.timeout>0&&(b=setTimeout(function(){T.abort("timeout")},i.timeout));try{E=1,y.send(d,r)}catch(k){if(!(E<2))throw k;r(-1,k)}}return T}return T.abort(),!1},param:function(e,n){var r=[],i=function(e,t){t=H.isFunction(t)?t():t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=H.ajaxSettings.traditional);if(H.isArray(e)||e.jquery&&!H.isPlainObject(e))H.each(e,function(){i(this.name,this.value)});else for(var s in e)c(s,e[s],n,i);return r.join("&").replace(Rt,"+")}}),H.extend({active:0,lastModified:{},etag:{}});var ln=H.now(),cn=/(\=)\?(&|$)|\?\?/i;H.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return H.expando+"_"+ln++}}),H.ajaxPrefilter("json jsonp",function(t,n,r){var i=typeof t.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(t.contentType);if(t.dataTypes[0]==="jsonp"||t.jsonp!==!1&&(cn.test(t.url)||i&&cn.test(t.data))){var s,o=t.jsonpCallback=H.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,u=e[o],a=t.url,f=t.data,l="$1"+o+"$2";return t.jsonp!==!1&&(a=a.replace(cn,l),t.url===a&&(i&&(f=f.replace(cn,l)),t.data===f&&(a+=(/\?/.test(a)?"&":"?")+t.jsonp+"="+o))),t.url=a,t.data=f,e[o]=function(e){s=[e]},r.always(function(){e[o]=u,s&&H.isFunction(u)&&e[o](s[0])}),t.converters["script json"]=function(){return s||H.error(o+" was not called"),s[0]},t.dataTypes[0]="json","script"}}),H.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return H.globalEval(e),e}}}),H.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),H.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=_.head||_.getElementsByTagName("head")[0]||_.documentElement;return{send:function(i,s){n=_.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||s(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var hn=e.ActiveXObject?function(){for(var e in dn)dn[e](0,1)}:!1,pn=0,dn;H.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&a()||u()}:a,function(e){H.extend(H.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(H.ajaxSettings.xhr()),H.support.ajax&&H.ajaxTransport(function(n){if(!n.crossDomain||H.support.cors){var r;return{send:function(i,s){var o=n.xhr(),u,a;n.username?o.open(n.type,n.url,n.async,n.username,n.password):o.open(n.type,n.url,n.async);if(n.xhrFields)for(a in n.xhrFields)o[a]=n.xhrFields[a];n.mimeType&&o.overrideMimeType&&o.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(a in i)o.setRequestHeader(a,i[a])}catch(f){}o.send(n.hasContent&&n.data||null),r=function(e,i){var a,f,l,c,h;try{if(r&&(i||o.readyState===4)){r=t,u&&(o.onreadystatechange=H.noop,hn&&delete dn[u]);if(i)o.readyState!==4&&o.abort();else{a=o.status,l=o.getAllResponseHeaders(),c={},h=o.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=o.responseText}catch(e){}try{f=o.statusText}catch(p){f=""}!a&&n.isLocal&&!n.crossDomain?a=c.text?200:404:a===1223&&(a=204)}}}catch(d){i||s(-1,d)}c&&s(a,f,c,l)},!n.async||o.readyState===4?r():(u=++pn,hn&&(dn||(dn={},H(e).unload(hn)),dn[u]=r),o.onreadystatechange=r)},abort:function(){r&&r(0,1)}}}});var vn={},mn,gn,yn=/^(?:toggle|show|hide)$/,bn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,wn,En=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],Sn;H.fn.extend({show:function(e,t,n){var s,o;if(e||e===0)return this.animate(i("show",3),e,t,n);for(var u=0,a=this.length;u<a;u++)s=this[u],s.style&&(o=s.style.display,!H._data(s,"olddisplay")&&o==="none"&&(o=s.style.display=""),(o===""&&H.css(s,"display")==="none"||!H.contains(s.ownerDocument.documentElement,s))&&H._data(s,"olddisplay",r(s.nodeName)));for(u=0;u<a;u++){s=this[u];if(s.style){o=s.style.display;if(o===""||o==="none")s.style.display=H._data(s,"olddisplay")||""}}return this},hide:function(e,t,n){if(e||e===0)return this.animate(i("hide",3),e,t,n);var r,s,o=0,u=this.length;for(;o<u;o++)r=this[o],r.style&&(s=H.css(r,"display"),s!=="none"&&!H._data(r,"olddisplay")&&H._data(r,"olddisplay",s));for(o=0;o<u;o++)this[o].style&&(this[o].style.display="none");return this},_toggle:H.fn.toggle,toggle:function(e,t,n){var r=typeof e=="boolean";return H.isFunction(e)&&H.isFunction(t)?this._toggle.apply(this,arguments):e==null||r?this.each(function(){var t=r?e:H(this).is(":hidden");H(this)[t?"show":"hide"]()}):this.animate(i("toggle",3),e,t,n),this},fadeTo:function(e,t,n,r){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,i){function s(){o.queue===!1&&H._mark(this);var t=H.extend({},o),n=this.nodeType===1,i=n&&H(this).is(":hidden"),s,u,a,f,l,c,h,p,d,v,m;t.animatedProperties={};for(a in e){s=H.camelCase(a),a!==s&&(e[s]=e[a],delete e[a]);if((l=H.cssHooks[s])&&"expand"in l){c=l.expand(e[s]),delete e[s];for(a in c)a in e||(e[a]=c[a])}}for(s in e){u=e[s],H.isArray(u)?(t.animatedProperties[s]=u[1],u=e[s]=u[0]):t.animatedProperties[s]=t.specialEasing&&t.specialEasing[s]||t.easing||"swing";if(u==="hide"&&i||u==="show"&&!i)return t.complete.call(this);n&&(s==="height"||s==="width")&&(t.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],H.css(this,"display")==="inline"&&H.css(this,"float")==="none"&&(!H.support.inlineBlockNeedsLayout||r(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}t.overflow!=null&&(this.style.overflow="hidden");for(a in e)f=new H.fx(this,t,a),u=e[a],yn.test(u)?(m=H._data(this,"toggle"+a)||(u==="toggle"?i?"show":"hide":0),m?(H._data(this,"toggle"+a,m==="show"?"hide":"show"),f[m]()):f[u]()):(h=bn.exec(u),p=f.cur(),h?(d=parseFloat(h[2]),v=h[3]||(H.cssNumber[a]?"":"px"),v!=="px"&&(H.style(this,a,(d||1)+v),p=(d||1)/f.cur()*p,H.style(this,a,p+v)),h[1]&&(d=(h[1]==="-="?-1:1)*d+p),f.custom(p,d,v)):f.custom(p,u,""));return!0}var o=H.speed(t,n,i);return H.isEmptyObject(e)?this.each(o.complete,[!1]):(e=H.extend({},e),o.queue===!1?this.each(s):this.queue(o.queue,s))},stop:function(e,n,r){return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){function t(e,t,n){var i=t[n];H.removeData(e,n,!0),i.stop(r)}var n,i=!1,s=H.timers,o=H._data(this);r||H._unmark(!0,this);if(e==null)for(n in o)o[n]&&o[n].stop&&n.indexOf(".run")===n.length-4&&t(this,o,n);else o[n=e+".run"]&&o[n].stop&&t(this,o,n);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(r?s[n](!0):s[n].saveState(),i=!0,s.splice(n,1));(!r||!i)&&H.dequeue(this,e)})}}),H.each({slideDown:i("show",1),slideUp:i("hide",1),slideToggle:i("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){H.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),H.extend({speed:function(e,t,n){var r=e&&typeof e=="object"?H.extend({},e):{complete:n||!n&&t||H.isFunction(e)&&e,duration:e,easing:n&&t||t&&!H.isFunction(t)&&t};r.duration=H.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in H.fx.speeds?H.fx.speeds[r.duration]:H.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(e){H.isFunction(r.old)&&r.old.call(this),r.queue?H.dequeue(this,r.queue):e!==!1&&H._unmark(this)},r},easing:{linear:function(e){return e},swing:function(e){return-Math.cos(e*Math.PI)/2+.5}},timers:[],fx:function(e,t,n){this.options=t,this.elem=e,this.prop=n,t.orig=t.orig||{}}}),H.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(H.fx.step[this.prop]||H.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]==null||!!this.elem.style&&this.elem.style[this.prop]!=null){var e,t=H.css(this.elem,this.prop);return isNaN(e=parseFloat(t))?!t||t==="auto"?0:t:e}return this.elem[this.prop]},custom:function(e,n,r){function i(e){return s.step(e)}var s=this,u=H.fx;this.startTime=Sn||o(),this.end=n,this.now=this.start=e,this.pos=this.state=0,this.unit=r||this.unit||(H.cssNumber[this.prop]?"":"px"),i.queue=this.options.queue,i.elem=this.elem,i.saveState=function(){H._data(s.elem,"fxshow"+s.prop)===t&&(s.options.hide?H._data(s.elem,"fxshow"+s.prop,s.start):s.options.show&&H._data(s.elem,"fxshow"+s.prop,s.end))},i()&&H.timers.push(i)&&!wn&&(wn=setInterval(u.tick,u.interval))},show:function(){var e=H._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=e||H.style(this.elem,this.prop),this.options.show=!0,e!==t?this.custom(this.cur(),e):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),H(this.elem).show()},hide:function(){this.options.orig[this.prop]=H._data(this.elem,"fxshow"+this.prop)||H.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(e){var t,n,r,i=Sn||o(),s=!0,u=this.elem,a=this.options;if(e||i>=a.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),a.animatedProperties[this.prop]=!0;for(t in a.animatedProperties)a.animatedProperties[t]!==!0&&(s=!1);if(s){a.overflow!=null&&!H.support.shrinkWrapBlocks&&H.each(["","X","Y"],function(e,t){u.style["overflow"+t]=a.overflow[e]}),a.hide&&H(u).hide();if(a.hide||a.show)for(t in a.animatedProperties)H.style(u,t,a.orig[t]),H.removeData(u,"fxshow"+t,!0),H.removeData(u,"toggle"+t,!0);r=a.complete,r&&(a.complete=!1,r.call(u))}return!1}return a.duration==Infinity?this.now=i:(n=i-this.startTime,this.state=n/a.duration,this.pos=H.easing[a.animatedProperties[this.prop]](this.state,n,0,1,a.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},H.extend(H.fx,{tick:function(){var e,t=H.timers,n=0;for(;n<t.length;n++)e=t[n],!e()&&t[n]===e&&t.splice(n--,1);t.length||H.fx.stop()},interval:13,stop:function(){clearInterval(wn),wn=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){H.style(e.elem,"opacity",e.now)},_default:function(e){e.elem.style&&e.elem.style[e.prop]!=null?e.elem.style[e.prop]=e.now+e.unit:e.elem[e.prop]=e.now}}}),H.each(En.concat.apply([],En),function(e,t){t.indexOf("margin")&&(H.fx.step[t]=function(e){H.style(e.elem,t,Math.max(0,e.now)+e.unit)})}),H.expr&&H.expr.filters&&(H.expr.filters.animated=function(e){return H.grep(H.timers,function(t){return e===t.elem}).length});var xn,Tn=/^t(?:able|d|h)$/i,Nn=/^(?:body|html)$/i;"getBoundingClientRect"in _.documentElement?xn=function(e,t,r,i){try{i=e.getBoundingClientRect()}catch(s){}if(!i||!H.contains(r,e))return i?{top:i.top,left:i.left}:{top:0,left:0};var o=t.body,u=n(t),a=r.clientTop||o.clientTop||0,f=r.clientLeft||o.clientLeft||0,l=u.pageYOffset||H.support.boxModel&&r.scrollTop||o.scrollTop,c=u.pageXOffset||H.support.boxModel&&r.scrollLeft||o.scrollLeft,h=i.top+l-a,p=i.left+c-f;return{top:h,left:p}}:xn=function(e,t,n){var r,i=e.offsetParent,s=e,o=t.body,u=t.defaultView,a=u?u.getComputedStyle(e,null):e.currentStyle,f=e.offsetTop,l=e.offsetLeft;while((e=e.parentNode)&&e!==o&&e!==n){if(H.support.fixedPosition&&a.position==="fixed")break;r=u?u.getComputedStyle(e,null):e.currentStyle,f-=e.scrollTop,l-=e.scrollLeft,e===i&&(f+=e.offsetTop,l+=e.offsetLeft,H.support.doesNotAddBorder&&(!H.support.doesAddBorderForTableAndCells||!Tn.test(e.nodeName))&&(f+=parseFloat(r.borderTopWidth)||0,l+=parseFloat(r.borderLeftWidth)||0),s=i,i=e.offsetParent),H.support.subtractsBorderForOverflowNotVisible&&r.overflow!=="visible"&&(f+=parseFloat(r.borderTopWidth)||0,l+=parseFloat(r.borderLeftWidth)||0),a=r}if(a.position==="relative"||a.position==="static")f+=o.offsetTop,l+=o.offsetLeft;return H.support.fixedPosition&&a.position==="fixed"&&(f+=Math.max(n.scrollTop,o.scrollTop),l+=Math.max(n.scrollLeft,o.scrollLeft)),{top:f,left:l}},H.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){H.offset.setOffset(this,e,t)});var n=this[0],r=n&&n.ownerDocument;return r?n===r.body?H.offset.bodyOffset(n):xn(n,r,r.documentElement):null},H.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return H.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(H.css(e,"marginTop"))||0,n+=parseFloat(H.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=H.css(e,"position");r==="static"&&(e.style.position="relative");var i=H(e),s=i.offset(),o=H.css(e,"top"),u=H.css(e,"left"),a=(r==="absolute"||r==="fixed")&&H.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),H.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},H.fn.extend({position:function(){if(!this[0])return null;var e=this[0],t=this.offsetParent(),n=this.offset(),r=Nn.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(H.css(e,"marginTop"))||0,n.left-=parseFloat(H.css(e,"marginLeft"))||0,r.top+=parseFloat(H.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(H.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||_.body;while(e&&!Nn.test(e.nodeName)&&H.css(e,"position")==="static")e=e.offsetParent;return e})}}),H.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,r){var i=/Y/.test(r);H.fn[e]=function(s){return H.access(this,function(e,s,o){var u=n(e);if(o===t)return u?r in u?u[r]:H.support.boxModel&&u.document.documentElement[s]||u.document.body[s]:e[s];u?u.scrollTo(i?H(u).scrollLeft():o,i?o:H(u).scrollTop()):e[s]=o},e,s,arguments.length,null)}}),H.each({Height:"height",Width:"width"},function(e,n){var r="client"+e,i="scroll"+e,s="offset"+e;H.fn["inner"+e]=function(){var e=this[0];return e?e.style?parseFloat(H.css(e,n,"padding")):this[n]():null},H.fn["outer"+e]=function(e){var t=this[0];return t?t.style?parseFloat(H.css(t,n,e?"margin":"border")):this[n]():null},H.fn[n]=function(e){return H.access(this,function(e,n,o){var u,a,f,l;if(H.isWindow(e))return u=e.document,a=u.documentElement[r],H.support.boxModel&&a||u.body&&u.body[r]||a;if(e.nodeType===9)return u=e.documentElement,u[r]>=u[i]?u[r]:Math.max(e.body[i],u[i],e.body[s],u[s]);if(o===t)return f=H.css(e,n),l=parseFloat(f),H.isNumeric(l)?l:f;H(e).css(n,o)},n,e,arguments.length,null)}}),e.jQuery=e.$=H,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return H})})(window),function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.concat,f=i.toString,l=i.hasOwnProperty,c=r.forEach,h=r.map,p=r.reduce,d=r.reduceRight,v=r.filter,m=r.every,g=r.some,y=r.indexOf,b=r.lastIndexOf,w=Array.isArray,E=Object.keys,S=s.bind,x=function(e){return e instanceof x?e:this instanceof x?(this._wrapped=e,void 0):new x(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=x),exports._=x):e._=x,x.VERSION="1.4.4";var T=x.each=x.forEach=function(e,t,r){if(null!=e)if(c&&e.forEach===c)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;s>i;i++)if(t.call(r,e[i],i,e)===n)return}else for(var o in e)if(x.has(e,o)&&t.call(r,e[o],o,e)===n)return};x.map=x.collect=function(e,t,n){var r=[];return null==e?r:h&&e.map===h?e.map(t,n):(T(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),r)};var N="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),p&&e.reduce===p)return r&&(t=x.bind(t,r)),i?e.reduce(t,n):e.reduce(t);if(T(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)}),!i)throw new TypeError(N);return n},x.reduceRight=x.foldr=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),d&&e.reduceRight===d)return r&&(t=x.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=x.keys(e);s=o.length}if(T(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)}),!i)throw new TypeError(N);return n},x.find=x.detect=function(e,t,n){var r;return C(e,function(e,i,s){return t.call(n,e,i,s)?(r=e,!0):void 0}),r},x.filter=x.select=function(e,t,n){var r=[];return null==e?r:v&&e.filter===v?e.filter(t,n):(T(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)}),r)},x.reject=function(e,t,n){return x.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},x.every=x.all=function(e,t,r){t||(t=x.identity);var i=!0;return null==e?i:m&&e.every===m?e.every(t,r):(T(e,function(e,s,o){return(i=i&&t.call(r,e,s,o))?void 0:n}),!!i)};var C=x.some=x.any=function(e,t,r){t||(t=x.identity);var i=!1;return null==e?i:g&&e.some===g?e.some(t,r):(T(e,function(e,s,o){return i||(i=t.call(r,e,s,o))?n:void 0}),!!i)};x.contains=x.include=function(e,t){return null==e?!1:y&&e.indexOf===y?e.indexOf(t)!=-1:C(e,function(e){return e===t})},x.invoke=function(e,t){var n=u.call(arguments,2),r=x.isFunction(t);return x.map(e,function(e){return(r?t:e[t]).apply(e,n)})},x.pluck=function(e,t){return x.map(e,function(e){return e[t]})},x.where=function(e,t,n){return x.isEmpty(t)?n?null:[]:x[n?"find":"filter"](e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},x.findWhere=function(e,t){return x.where(e,t,!0)},x.max=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.max.apply(Math,e);if(!t&&x.isEmpty(e))return-1/0;var r={computed:-1/0,value:-1/0};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>=r.computed&&(r={value:e,computed:o})}),r.value},x.min=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.min.apply(Math,e);if(!t&&x.isEmpty(e))return 1/0;var r={computed:1/0,value:1/0};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;r.computed>o&&(r={value:e,computed:o})}),r.value},x.shuffle=function(e){var t,n=0,r=[];return T(e,function(e){t=x.random(n++),r[n-1]=r[t],r[t]=e}),r};var k=function(e){return x.isFunction(e)?e:function(t){return t[e]}};x.sortBy=function(e,t,n){var r=k(t);return x.pluck(x.map(e,function(e,t,i){return{value:e
,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(r>n||r===void 0)return-1}return e.index<t.index?-1:1}),"value")};var L=function(e,t,n,r){var i={},s=k(t||x.identity);return T(e,function(t,o){var u=s.call(n,t,o,e);r(i,u,t)}),i};x.groupBy=function(e,t,n){return L(e,t,n,function(e,t,n){(x.has(e,t)?e[t]:e[t]=[]).push(n)})},x.countBy=function(e,t,n){return L(e,t,n,function(e,t){x.has(e,t)||(e[t]=0),e[t]++})},x.sortedIndex=function(e,t,n,r){n=null==n?x.identity:k(n);for(var i=n.call(r,t),s=0,o=e.length;o>s;){var u=s+o>>>1;i>n.call(r,e[u])?s=u+1:o=u}return s},x.toArray=function(e){return e?x.isArray(e)?u.call(e):e.length===+e.length?x.map(e,x.identity):x.values(e):[]},x.size=function(e){return null==e?0:e.length===+e.length?e.length:x.keys(e).length},x.first=x.head=x.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:u.call(e,0,t)},x.initial=function(e,t,n){return u.call(e,0,e.length-(null==t||n?1:t))},x.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:u.call(e,Math.max(e.length-t,0))},x.rest=x.tail=x.drop=function(e,t,n){return u.call(e,null==t||n?1:t)},x.compact=function(e){return x.filter(e,x.identity)};var A=function(e,t,n){return T(e,function(e){x.isArray(e)?t?o.apply(n,e):A(e,t,n):n.push(e)}),n};x.flatten=function(e,t){return A(e,t,[])},x.without=function(e){return x.difference(e,u.call(arguments,1))},x.uniq=x.unique=function(e,t,n,r){x.isFunction(t)&&(r=n,n=t,t=!1);var i=n?x.map(e,n,r):e,s=[],o=[];return T(i,function(n,r){(t?r&&o[o.length-1]===n:x.contains(o,n))||(o.push(n),s.push(e[r]))}),s},x.union=function(){return x.uniq(a.apply(r,arguments))},x.intersection=function(e){var t=u.call(arguments,1);return x.filter(x.uniq(e),function(e){return x.every(t,function(t){return x.indexOf(t,e)>=0})})},x.difference=function(e){var t=a.apply(r,u.call(arguments,1));return x.filter(e,function(e){return!x.contains(t,e)})},x.zip=function(){for(var e=u.call(arguments),t=x.max(x.pluck(e,"length")),n=Array(t),r=0;t>r;r++)n[r]=x.pluck(e,""+r);return n},x.object=function(e,t){if(null==e)return{};for(var n={},r=0,i=e.length;i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},x.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=x.sortedIndex(e,t),e[r]===t?r:-1;r=0>n?Math.max(0,i+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;i>r;r++)if(e[r]===t)return r;return-1},x.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=null!=n;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);for(var i=r?n:e.length;i--;)if(e[i]===t)return i;return-1},x.range=function(e,t,n){1>=arguments.length&&(t=e||0,e=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=Array(r);r>i;)s[i++]=e,e+=n;return s},x.bind=function(e,t){if(e.bind===S&&S)return S.apply(e,u.call(arguments,1));var n=u.call(arguments,2);return function(){return e.apply(t,n.concat(u.call(arguments)))}},x.partial=function(e){var t=u.call(arguments,1);return function(){return e.apply(this,t.concat(u.call(arguments)))}},x.bindAll=function(e){var t=u.call(arguments,1);return 0===t.length&&(t=x.functions(e)),T(t,function(t){e[t]=x.bind(e[t],e)}),e},x.memoize=function(e,t){var n={};return t||(t=x.identity),function(){var r=t.apply(this,arguments);return x.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},x.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},x.defer=function(e){return x.delay.apply(x,[e,1].concat(u.call(arguments,1)))},x.throttle=function(e,t){var n,r,i,s,o=0,u=function(){o=new Date,i=null,s=e.apply(n,r)};return function(){var a=new Date,f=t-(a-o);return n=this,r=arguments,0>=f?(clearTimeout(i),i=null,o=a,s=e.apply(n,r)):i||(i=setTimeout(u,f)),s}},x.debounce=function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},x.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},x.wrap=function(e,t){return function(){var n=[e];return o.apply(n,arguments),t.apply(this,n)}},x.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},x.after=function(e,t){return 0>=e?t():function(){return 1>--e?t.apply(this,arguments):void 0}},x.keys=E||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)x.has(e,n)&&(t[t.length]=n);return t},x.values=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push(e[n]);return t},x.pairs=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push([n,e[n]]);return t},x.invert=function(e){var t={};for(var n in e)x.has(e,n)&&(t[e[n]]=n);return t},x.functions=x.methods=function(e){var t=[];for(var n in e)x.isFunction(e[n])&&t.push(n);return t.sort()},x.extend=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},x.pick=function(e){var t={},n=a.apply(r,u.call(arguments,1));return T(n,function(n){n in e&&(t[n]=e[n])}),t},x.omit=function(e){var t={},n=a.apply(r,u.call(arguments,1));for(var i in e)x.contains(n,i)||(t[i]=e[i]);return t},x.defaults=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)null==e[n]&&(e[n]=t[n])}),e},x.clone=function(e){return x.isObject(e)?x.isArray(e)?e.slice():x.extend({},e):e},x.tap=function(e,t){return t(e),e};var O=function(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof x&&(e=e._wrapped),t instanceof x&&(t=t._wrapped);var i=f.call(e);if(i!=f.call(t))return!1;switch(i){case"[object String]":return e==t+"";case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var s=n.length;s--;)if(n[s]==e)return r[s]==t;n.push(e),r.push(t);var o=0,u=!0;if("[object Array]"==i){if(o=e.length,u=o==t.length)for(;o--&&(u=O(e[o],t[o],n,r)););}else{var a=e.constructor,l=t.constructor;if(a!==l&&!(x.isFunction(a)&&a instanceof a&&x.isFunction(l)&&l instanceof l))return!1;for(var c in e)if(x.has(e,c)&&(o++,!(u=x.has(t,c)&&O(e[c],t[c],n,r))))break;if(u){for(c in t)if(x.has(t,c)&&!(o--))break;u=!o}}return n.pop(),r.pop(),u};x.isEqual=function(e,t){return O(e,t,[],[])},x.isEmpty=function(e){if(null==e)return!0;if(x.isArray(e)||x.isString(e))return 0===e.length;for(var t in e)if(x.has(e,t))return!1;return!0},x.isElement=function(e){return!!e&&1===e.nodeType},x.isArray=w||function(e){return"[object Array]"==f.call(e)},x.isObject=function(e){return e===Object(e)},T(["Arguments","Function","String","Number","Date","RegExp"],function(e){x["is"+e]=function(t){return f.call(t)=="[object "+e+"]"}}),x.isArguments(arguments)||(x.isArguments=function(e){return!!e&&!!x.has(e,"callee")}),"function"!=typeof /./&&(x.isFunction=function(e){return"function"==typeof e}),x.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},x.isNaN=function(e){return x.isNumber(e)&&e!=+e},x.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==f.call(e)},x.isNull=function(e){return null===e},x.isUndefined=function(e){return e===void 0},x.has=function(e,t){return l.call(e,t)},x.noConflict=function(){return e._=t,this},x.identity=function(e){return e},x.times=function(e,t,n){for(var r=Array(e),i=0;e>i;i++)r[i]=t.call(n,i);return r},x.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=x.invert(M.escape);var _={escape:RegExp("["+x.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+x.keys(M.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(e){x[e]=function(t){return null==t?"":(""+t).replace(_[e],function(t){return M[e][t]})}}),x.result=function(e,t){if(null==e)return null;var n=e[t];return x.isFunction(n)?n.call(e):n},x.mixin=function(e){T(x.functions(e),function(t){var n=x[t]=e[t];x.prototype[t]=function(){var e=[this._wrapped];return o.apply(e,arguments),j.call(this,n.apply(x,e))}})};var D=0;x.uniqueId=function(e){var t=++D+"";return e?e+t:t},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var P=/(.)^/,H={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(e,t,n){var r;n=x.defaults({},n,x.templateSettings);var i=RegExp([(n.escape||P).source,(n.interpolate||P).source,(n.evaluate||P).source].join("|")+"|$","g"),s=0,o="__p+='";e.replace(i,function(t,n,r,i,u){return o+=e.slice(s,u).replace(B,function(e){return"\\"+H[e]}),n&&(o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(o+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(o+="';\n"+i+"\n__p+='"),s=u+t.length,t}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=Function(n.variable||"obj","_",o)}catch(u){throw u.source=o,u}if(t)return r(t,x);var a=function(e){return r.call(this,e,x)};return a.source="function("+(n.variable||"obj")+"){\n"+o+"}",a},x.chain=function(e){return x(e).chain()};var j=function(e){return this._chain?x(e).chain():e};x.mixin(x),T(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];x.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!=e&&"splice"!=e||0!==n.length||delete n[0],j.call(this,n)}}),T(["concat","join","slice"],function(e){var t=r[e];x.prototype[e]=function(){return j.call(this,t.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this),typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(){var e=this,t=e.Backbone,n=Array.prototype.slice,r=Array.prototype.splice,i;typeof exports!="undefined"?i=exports:i=e.Backbone={},i.VERSION="0.9.2";var s=e._;!s&&typeof require!="undefined"&&(s=require("underscore"));var o=e.jQuery||e.Zepto||e.ender;i.setDomLibrary=function(e){o=e},i.noConflict=function(){return e.Backbone=t,this},i.emulateHTTP=!1,i.emulateJSON=!1;var u=/\s+/,a=i.Events={on:function(e,t,n){var r,i,s,o,a;if(!t)return this;e=e.split(u),r=this._callbacks||(this._callbacks={});while(i=e.shift())a=r[i],s=a?a.tail:{},s.next=o={},s.context=n,s.callback=t,r[i]={tail:o,next:a?a.next:s};return this},off:function(e,t,n){var r,i,o,a,f,l;if(!(i=this._callbacks))return;if(!(e||t||n))return delete this._callbacks,this;e=e?e.split(u):s.keys(i);while(r=e.shift()){o=i[r],delete i[r];if(!o||!t&&!n)continue;a=o.tail;while((o=o.next)!==a)f=o.callback,l=o.context,(t&&f!==t||n&&l!==n)&&this.on(r,f,l)}return this},trigger:function(e){var t,r,i,s,o,a,f;if(!(i=this._callbacks))return this;a=i.all,e=e.split(u),f=n.call(arguments,1);while(t=e.shift()){if(r=i[t]){s=r.tail;while((r=r.next)!==s)r.callback.apply(r.context||this,f)}if(r=a){s=r.tail,o=[t].concat(f);while((r=r.next)!==s)r.callback.apply(r.context||this,o)}}return this}};a.bind=a.on,a.unbind=a.off;var f=i.Model=function(e,t){var n;e||(e={}),t&&t.parse&&(e=this.parse(e));if(n=C(this,"defaults"))e=s.extend({},n,e);t&&t.collection&&(this.collection=t.collection),this.attributes={},this._escapedAttributes={},this.cid=s.uniqueId("c"),this.changed={},this._silent={},this._pending={},this.set(e,{silent:!0}),this.changed={},this._silent={},this._pending={},this._previousAttributes=s.clone(this.attributes),this.initialize.apply(this,arguments)};s.extend(f.prototype,a,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return s.clone(this.attributes)},get:function(e){return this.attributes[e]},escape:function(e){var t;if(t=this._escapedAttributes[e])return t;var n=this.get(e);return this._escapedAttributes[e]=s.escape(n==null?"":""+n)},has:function(e){return this.get(e)!=null},set:function(e,t,n){var r,i,o;s.isObject(e)||e==null?(r=e,n=t):(r={},r[e]=t),n||(n={});if(!r)return this;r instanceof f&&(r=r.attributes);if(n.unset)for(i in r)r[i]=void 0;if(!this._validate(r,n))return!1;this.idAttribute in r&&(this.id=r[this.idAttribute]);var u=n.changes={},a=this.attributes,l=this._escapedAttributes,c=this._previousAttributes||{};for(i in r){o=r[i];if(!s.isEqual(a[i],o)||n.unset&&s.has(a,i))delete l[i],(n.silent?this._silent:u)[i]=!0;n.unset?delete a[i]:a[i]=o,!s.isEqual(c[i],o)||s.has(a,i)!=s.has(c,i)?(this.changed[i]=o,n.silent||(this._pending[i]=!0)):(delete this.changed[i],delete this._pending[i])}return n.silent||this.change(n),this},unset:function(e,t){return(t||(t={})).unset=!0,this.set(e,null,t)},clear:function(e){return(e||(e={})).unset=!0,this.set(s.clone(this.attributes),e)},fetch:function(e){e=e?s.clone(e):{};var t=this,n=e.success;return e.success=function(r,i,s){if(!t.set(t.parse(r,s),e))return!1;n&&n(t,r)},e.error=i.wrapError(e.error,t,e),(this.sync||i.sync).call(this,"read",this,e)},save:function(e,t,n){var r,o;s.isObject(e)||e==null?(r=e,n=t):(r={},r[e]=t),n=n?s.clone(n):{};if(n.wait){if(!this._validate(r,n))return!1;o=s.clone(this.attributes)}var u=s.extend({},n,{silent:!0});if(r&&!this.set(r,n.wait?u:n))return!1;var a=this,f=n.success;n.success=function(e,t,i){var o=a.parse(e,i);n.wait&&(delete n.wait,o=s.extend(r||{},o));if(!a.set(o,n))return!1;f?f(a,e):a.trigger("sync",a,e,n)},n.error=i.wrapError(n.error,a,n);var l=this.isNew()?"create":"update",c=(this.sync||i.sync).call(this,l,this,n);return n.wait&&this.set(o,u),c},destroy:function(e){e=e?s.clone(e):{};var t=this,n=e.success,r=function(){t.trigger("destroy",t,t.collection,e)};if(this.isNew())return r(),!1;e.success=function(i){e.wait&&r(),n?n(t,i):t.trigger("sync",t,i,e)},e.error=i.wrapError(e.error,t,e);var o=(this.sync||i.sync).call(this,"delete",this,e);return e.wait||r(),o},url:function(){var e=C(this,"urlRoot")||C(this.collection,"url")||k();return this.isNew()?e:e+(e.charAt(e.length-1)=="/"?"":"/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},change:function(e){e||(e={});var t=this._changing;this._changing=!0;for(var n in this._silent)this._pending[n]=!0;var r=s.extend({},e.changes,this._silent);this._silent={};for(var n in r)this.trigger("change:"+n,this,this.get(n),e);if(t)return this;while(!s.isEmpty(this._pending)){this._pending={},this.trigger("change",this,e);for(var n in this.changed){if(this._pending[n]||this._silent[n])continue;delete this.changed[n]}this._previousAttributes=s.clone(this.attributes)}return this._changing=!1,this},hasChanged:function(e){return arguments.length?s.has(this.changed,e):!s.isEmpty(this.changed)},changedAttributes:function(e){if(!e)return this.hasChanged()?s.clone(this.changed):!1;var t,n=!1,r=this._previousAttributes;for(var i in e){if(s.isEqual(r[i],t=e[i]))continue;(n||(n={}))[i]=t}return n},previous:function(e){return!arguments.length||!this._previousAttributes?null:this._previousAttributes[e]},previousAttributes:function(){return s.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(e,t){if(t.silent||!this.validate)return!0;e=s.extend({},this.attributes,e);var n=this.validate(e,t);return n?(t&&t.error?t.error(this,n,t):this.trigger("error",this,n,t),!1):!0}});var l=i.Collection=function(e,t){t||(t={}),t.model&&(this.model=t.model),t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,{silent:!0,parse:t.parse})};s.extend(l.prototype,a,{model:f,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},add:function(e,t){var n,i,o,u,a,f,l={},c={},h=[];t||(t={}),e=s.isArray(e)?e.slice():[e];for(n=0,o=e.length;n<o;n++){if(!(u=e[n]=this._prepareModel(e[n],t)))throw new Error("Can't add an invalid model to a collection");a=u.cid,f=u.id;if(l[a]||this._byCid[a]||f!=null&&(c[f]||this._byId[f])){h.push(n);continue}l[a]=c[f]=u}n=h.length;while(n--)e.splice(h[n],1);for(n=0,o=e.length;n<o;n++)(u=e[n]).on("all",this._onModelEvent,this),this._byCid[u.cid]=u,u.id!=null&&(this._byId[u.id]=u);this.length+=o,i=t.at!=null?t.at:this.models.length,r.apply(this.models,[i,0].concat(e)),this.comparator&&this.sort({silent:!0});if(t.silent)return this;for(n=0,o=this.models.length;n<o;n++){if(!l[(u=this.models[n]).cid])continue;t.index=n,u.trigger("add",u,this,t)}return this},remove:function(e,t){var n,r,i,o;t||(t={}),e=s.isArray(e)?e.slice():[e];for(n=0,r=e.length;n<r;n++){o=this.getByCid(e[n])||this.get(e[n]);if(!o)continue;delete this._byId[o.id],delete this._byCid[o.cid],i=this.indexOf(o),this.models.splice(i,1),this.length--,t.silent||(t.index=i,o.trigger("remove",o,this,t)),this._removeReference(o)}return this},push:function(e,t){return e=this._prepareModel(e,t),this.add(e,t),e},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return e=this._prepareModel(e,t),this.add(e,s.extend({at:0},t)),e},shift:function(e){var t=this.at(0);return this.remove(t,e),t},get:function(e){return e==null?void 0:this._byId[e.id!=null?e.id:e]},getByCid:function(e){return e&&this._byCid[e.cid||e]},at:function(e){return this.models[e]},where:function(e){return s.isEmpty(e)?[]:this.filter(function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},sort:function(e){e||(e={});if(!this.comparator)throw new Error("Cannot sort a set without a comparator");var t=s.bind(this.comparator,this);return this.comparator.length==1?this.models=this.sortBy(t):this.models.sort(t),e.silent||this.trigger("reset",this,e),this},pluck:function(e){return s.map(this.models,function(t){return t.get(e)})},reset:function(e,t){e||(e=[]),t||(t={});for(var n=0,r=this.models.length;n<r;n++)this._removeReference(this.models[n]);return this._reset(),this.add(e,s.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),this},fetch:function(e){e=e?s.clone(e):{},e.parse===undefined&&(e.parse=!0);var t=this,n=e.success;return e.success=function(r,i,s){t[e.add?"add":"reset"](t.parse(r,s),e),n&&n(t,r)},e.error=i.wrapError(e.error,t,e),(this.sync||i.sync).call(this,"read",this,e)},create:function(e,t){var n=this;t=t?s.clone(t):{},e=this._prepareModel(e,t);if(!e)return!1;t.wait||n.add(e,t);var r=t.success;return t.success=function(i,s,o){t.wait&&n.add(i,t),r?r(i,s):i.trigger("sync",e,s,t)},e.save(null,t),e},parse:function(e,t){return e},chain:function(){return s(this.models).chain()},_reset:function(e){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(e,t){t||(t={});if(e instanceof f)e.collection||(e.collection=this);else{var n=e;t.collection=this,e=new this.model(n,t),e._validate(e.attributes,t)||(e=!1)}return e},_removeReference:function(e){this==e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){if((e=="add"||e=="remove")&&n!=this)return;e=="destroy"&&this.remove(t,r),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],this._byId[t.id]=t),this.trigger.apply(this,arguments)}});var c=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];s.each(c,function(e){l.prototype[e]=function(){return s[e].apply(s,[this.models].concat(s.toArray(arguments)))}});var h=i.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},p=/:\w+/g,d=/\*\w+/g,v=/[-[\]{}()+?.,\\^$|#\s]/g;s.extend(h.prototype,a,{initialize:function(){},route:function(e,t,n){return i.history||(i.history=new m),s.isRegExp(e)||(e=this._routeToRegExp(e)),n||(n=this[t]),i.history.route(e,s.bind(function(r){var s=this._extractParameters(e,r);n&&n.apply(this,s),this.trigger.apply(this,["route:"+t].concat(s)),i.history.trigger("route",this,t,s)},this)),this},navigate:function(e,t){i.history.navigate(e,t)},_bindRoutes:function(){if(!this.routes)return;var e=[];for(var t in this.routes)e.unshift([t,this.routes[t]]);for(var n=0,r=e.length;n<r;n++)this.route(e[n][0],e[n][1],this[e[n][1]])},_routeToRegExp:function(e){return e=e.replace(v,"\\$&").replace(p,"([^/]+)").replace(d,"(.*?)"),new RegExp("^"+e+"$")},_extractParameters:function(e,t){return e.exec(t).slice(1)}});var m=i.History=function(){this.handlers=[],s.bindAll(this,"checkUrl")},g=/^[#\/]/,y=/msie [\w.]+/;m.started=!1,s.extend(m.prototype,a,{interval:50,getHash:function(e){var t=e?e.location:window.location,n=t.href.match(/#(.*)$/);return n?n[1]:""},getFragment:function(e,t){if(e==null)if(this._hasPushState||t){e=window.location.pathname;var n=window.location.search;n&&(e+=n)}else e=this.getHash();return e.indexOf(this.options.root)||(e=e.substr(this.options.root.length)),e.replace(g,"")},start:function(e){if(m.started)throw new Error("Backbone.history has already been started");m.started=!0,this.options=s.extend({},{root:"/"},this.options,e),this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var t=this.getFragment(),n=document.documentMode,r=y.exec(navigator.userAgent.toLowerCase())&&(!n||n<=7);r&&(this.iframe=o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(t)),this._hasPushState?o(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!r?o(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=t;var i=window.location,u=i.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!u)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&u&&i.hash&&(this.fragment=this.getHash().replace(g,""),window.history.replaceState({},document.title,i.protocol+"//"+i.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},stop:function(){o(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),m.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();t==this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe)));if(t==this.fragment)return!1;this.iframe&&this.navigate(t),this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(e){var t=this.fragment=this.getFragment(e),n=s.any(this.handlers,function(e){if(e.route.test(t))return e.callback(t),!0});return n},navigate:function(e,t){if(!m.started)return!1;if(!t||t===!0)t={trigger:t};var n=(e||"").replace(g,"");if(this.fragment==n)return;this._hasPushState?(n.indexOf(this.options.root)!=0&&(n=this.options.root+n),this.fragment=n,window.history[t.replace?"replaceState":"pushState"]({},document.title,n)):this._wantsHashChange?(this.fragment=n,this._updateHash(window.location,n,t.replace),this.iframe&&n!=this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,n,t.replace))):window.location.assign(this.options.root+e),t.trigger&&this.loadUrl(e)},_updateHash:function(e,t,n){n?e.replace(e.toString().replace(/(javascript:|#).*$/,"")+"#"+t):e.hash=t}});var b=i.View=function(e){this.cid=s.uniqueId("view"),this._configure(e||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},w=/^(\S+)\s*(.*)$/,E=["model","collection","el","id","attributes","className","tagName"];s.extend(b.prototype,a,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(e,t,n){var r=document.createElement(e);return t&&o(r).attr(t),n&&o(r).html(n),r},setElement:function(e,t){return this.$el&&this.undelegateEvents(),this.$el=e instanceof o?e:o(e),this.el=this.$el[0],t!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=C(this,"events")))return;this.undelegateEvents();for(var t in e){var n=e[t];s.isFunction(n)||(n=this[e[t]]);if(!n)throw new Error('Method "'+e[t]+'" does not exist');var r=t.match(w),i=r[1],o=r[2];n=s.bind(n,this),i+=".delegateEvents"+this.cid,o===""?this.$el.bind(i,n):this.$el.delegate(o,i,n)}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(e){this.options&&(e=s.extend({},this.options,e));for(var t=0,n=E.length;t<n;t++){var r=E[t];e[r]&&(this[r]=e[r])}this.options=e},_ensureElement:function(){if(!this.el){var e=C(this,"attributes")||{};this.id&&(e.id=this.id),this.className&&(e["class"]=this.className),this.setElement(this.make(this.tagName,e),!1)}else this.setElement(this.el,!1)}});var S=function(e,t){var n=N(this,e,t);return n.extend=this.extend,n};f.extend=l.extend=h.extend=b.extend=S;var x={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};i.sync=function(e,t,n){var r=x[e];n||(n={});var u={type:r,dataType:"json"};return n.url||(u.url=C(t,"url")||k()),!n.data&&t&&(e=="create"||e=="update")&&(u.contentType="application/json",u.data=JSON.stringify(t.toJSON())),i.emulateJSON&&(u.contentType="application/x-www-form-urlencoded",u.data=u.data?{model:u.data}:{}),i.emulateHTTP&&(r==="PUT"||r==="DELETE")&&(i.emulateJSON&&(u.data._method=r),u.type="POST",u.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",r)}),u.type!=="GET"&&!i.emulateJSON&&(u.processData=!1),o.ajax(s.extend(u,n))},i.wrapError=function(e,t,n){return function(r,i){i=r===t?i:r,e?e(t,i,n):t.trigger("error",t,i,n)}};var T=function(){},N=function(e,t,n){var r;return t&&t.hasOwnProperty("constructor")?r=t.constructor:r=function(){e.apply(this,arguments)},s.extend(r,e),T.prototype=e.prototype,r.prototype=new T,t&&s.extend(r.prototype,t),n&&s.extend(r,n),r.prototype.constructor=r,r.__super__=e.prototype,r},C=function(e,t){return!e||!e[t]?null:s.isFunction(e[t])?e[t]():e[t]},k=function(){throw new Error('A "url" property or function must be specified')}}.call(this),function(e,t,n){var r=e.L,i={};i.version="0.7.3",typeof module=="object"&&typeof module.exports=="object"?module.exports=i:typeof define=="function"&&define.amd&&define(i),i.noConflict=function(){return e.L=r,this},e.L=i,i.Util={extend:function(e){var t=Array.prototype.slice.call(arguments,1),n,r,i,s;for(r=0,i=t.length;r<i;r++){s=t[r]||{};for(n in s)s.hasOwnProperty(n)&&(e[n]=s[n])}return e},bind:function(e,t){var n=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return e.apply(t,n||arguments)}},stamp:function(){var e=0,t="_leaflet_id";return function(n){return n[t]=n[t]||++e,n[t]}}(),invokeEach:function(e,t,n){var r,i;if(typeof e=="object"){i=Array.prototype.slice.call(arguments,3);for(r in e)t.apply(n,[r,e[r]].concat(i));return!0}return!1},limitExecByInterval:function(e,t,n){var r,i;return function s(){var o=arguments;if(r){i=!0;return}r=!0,setTimeout(function(){r=!1,i&&(s.apply(n,o),i=!1)},t),e.apply(n,o)}},falseFn:function(){return!1},formatNum:function(e,t){var n=Math.pow(10,t||5);return Math.round(e*n)/n},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},splitWords:function(e){return i.Util.trim(e).split(/\s+/)},setOptions:function(e,t){return e.options=i.extend({},e.options,t),e.options},getParamString:function(e,t,n){var r=[];for(var i in e)r.push(encodeURIComponent(n?i.toUpperCase():i)+"="+encodeURIComponent(e[i]));return(!t||t.indexOf("?")===-1?"?":"&")+r.join("&")},template:function(e,t){return e.replace(/\{ *([\w_]+) *\}/g,function(e,r){var i=t[r];if(i===n)throw new Error("No value provided for variable "+e);return typeof i=="function"&&(i=i(t)),i})},isArray:Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function t(t){var n,r,i=["webkit","moz","o","ms"];for(n=0;n<i.length&&!r;n++)r=e[i[n]+t];return r}function r(t){var r=+(new Date),i=Math.max(0,16-(r-n));return n=r+i,e.setTimeout(t,i)}var n=0,s=e.requestAnimationFrame||t("RequestAnimationFrame")||r,o=e.cancelAnimationFrame||t("CancelAnimationFrame")||t("CancelRequestAnimationFrame")||function(t){e.clearTimeout(t)};i.Util.requestAnimFrame=function(t,n,o,u){t=i.bind(t,n);if(!o||s!==r)return s.call(e,t,u);t()},i.Util.cancelAnimFrame=function(t){t&&o.call(e,t)}}(),i.extend=i.Util.extend,i.bind=i.Util.bind,i.stamp=i.Util.stamp,i.setOptions=i.Util.setOptions,i.Class=function(){},i.Class.extend=function(e){var t=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},n=function(){};n.prototype=this.prototype;var r=new n;r.constructor=t,t.prototype=r;for(var s in this)this.hasOwnProperty(s)&&s!=="prototype"&&(t[s]=this[s]);e.statics&&(i.extend(t,e.statics),delete e.statics),e.includes&&(i.Util.extend.apply(null,[r].concat(e.includes)),delete e.includes),e.options&&r.options&&(e.options=i.extend({},r.options,e.options)),i.extend(r,e),r._initHooks=[];var o=this;return t.__super__=o.prototype,r.callInitHooks=function(){if(this._initHooksCalled)return;o.prototype.callInitHooks&&o.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var e=0,t=r._initHooks.length;e<t;e++)r._initHooks[e].call(this)},t},i.Class.include=function(e){i.extend(this.prototype,e)},i.Class.mergeOptions=function(e){i.extend(this.prototype.options,e)},i.Class
.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n=typeof e=="function"?e:function(){this[e].apply(this,t)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n)};var s="_leaflet_events";i.Mixin={},i.Mixin.Events={addEventListener:function(e,t,n){if(i.Util.invokeEach(e,this.addEventListener,this,t,n))return this;var r=this[s]=this[s]||{},o=n&&n!==this&&i.stamp(n),u,a,f,l,c,h,p;e=i.Util.splitWords(e);for(u=0,a=e.length;u<a;u++)f={action:t,context:n||this},l=e[u],o?(c=l+"_idx",h=c+"_len",p=r[c]=r[c]||{},p[o]||(p[o]=[],r[h]=(r[h]||0)+1),p[o].push(f)):(r[l]=r[l]||[],r[l].push(f));return this},hasEventListeners:function(e){var t=this[s];return!!t&&(e in t&&t[e].length>0||e+"_idx"in t&&t[e+"_idx_len"]>0)},removeEventListener:function(e,t,n){if(!this[s])return this;if(!e)return this.clearAllEventListeners();if(i.Util.invokeEach(e,this.removeEventListener,this,t,n))return this;var r=this[s],o=n&&n!==this&&i.stamp(n),u,a,f,l,c,h,p,d,v;e=i.Util.splitWords(e);for(u=0,a=e.length;u<a;u++){f=e[u],h=f+"_idx",p=h+"_len",d=r[h];if(!t)delete r[f],delete r[h],delete r[p];else{l=o&&d?d[o]:r[f];if(l){for(c=l.length-1;c>=0;c--)l[c].action===t&&(!n||l[c].context===n)&&(v=l.splice(c,1),v[0].action=i.Util.falseFn);n&&d&&l.length===0&&(delete d[o],r[p]--)}}}return this},clearAllEventListeners:function(){return delete this[s],this},fireEvent:function(e,t){if(!this.hasEventListeners(e))return this;var n=i.Util.extend({},t,{type:e,target:this}),r=this[s],o,u,a,f,l;if(r[e]){o=r[e].slice();for(u=0,a=o.length;u<a;u++)o[u].action.call(o[u].context,n)}f=r[e+"_idx"];for(l in f){o=f[l].slice();if(o)for(u=0,a=o.length;u<a;u++)o[u].action.call(o[u].context,n)}return this},addOneTimeEventListener:function(e,t,n){if(i.Util.invokeEach(e,this.addOneTimeEventListener,this,t,n))return this;var r=i.bind(function(){this.removeEventListener(e,t,n).removeEventListener(e,r,n)},this);return this.addEventListener(e,t,n).addEventListener(e,r,n)}},i.Mixin.Events.on=i.Mixin.Events.addEventListener,i.Mixin.Events.off=i.Mixin.Events.removeEventListener,i.Mixin.Events.once=i.Mixin.Events.addOneTimeEventListener,i.Mixin.Events.fire=i.Mixin.Events.fireEvent,function(){var r="ActiveXObject"in e,s=r&&!t.addEventListener,o=navigator.userAgent.toLowerCase(),u=o.indexOf("webkit")!==-1,a=o.indexOf("chrome")!==-1,f=o.indexOf("phantom")!==-1,l=o.indexOf("android")!==-1,c=o.search("android [23]")!==-1,h=o.indexOf("gecko")!==-1,p=typeof orientation!=n+"",d=e.navigator&&e.navigator.msPointerEnabled&&e.navigator.msMaxTouchPoints&&!e.PointerEvent,v=e.PointerEvent&&e.navigator.pointerEnabled&&e.navigator.maxTouchPoints||d,m="devicePixelRatio"in e&&e.devicePixelRatio>1||"matchMedia"in e&&e.matchMedia("(min-resolution:144dpi)")&&e.matchMedia("(min-resolution:144dpi)").matches,g=t.documentElement,y=r&&"transition"in g.style,b="WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix&&!c,w="MozPerspective"in g.style,E="OTransition"in g.style,S=!e.L_DISABLE_3D&&(y||b||w||E)&&!f,x=!e.L_NO_TOUCH&&!f&&function(){var e="ontouchstart";if(v||e in g)return!0;var n=t.createElement("div"),r=!1;return n.setAttribute?(n.setAttribute(e,"return;"),typeof n[e]=="function"&&(r=!0),n.removeAttribute(e),n=null,r):!1}();i.Browser={ie:r,ielt9:s,webkit:u,gecko:h&&!u&&!e.opera&&!r,android:l,android23:c,chrome:a,ie3d:y,webkit3d:b,gecko3d:w,opera3d:E,any3d:S,mobile:p,mobileWebkit:p&&u,mobileWebkit3d:p&&b,mobileOpera:p&&e.opera,touch:x,msPointer:d,pointer:v,retina:m}}(),i.Point=function(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t},i.Point.prototype={clone:function(){return new i.Point(this.x,this.y)},add:function(e){return this.clone()._add(i.point(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(i.point(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e){return this.clone()._divideBy(e)},_divideBy:function(e){return this.x/=e,this.y/=e,this},multiplyBy:function(e){return this.clone()._multiplyBy(e)},_multiplyBy:function(e){return this.x*=e,this.y*=e,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(e){e=i.point(e);var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)},equals:function(e){return e=i.point(e),e.x===this.x&&e.y===this.y},contains:function(e){return e=i.point(e),Math.abs(e.x)<=Math.abs(this.x)&&Math.abs(e.y)<=Math.abs(this.y)},toString:function(){return"Point("+i.Util.formatNum(this.x)+", "+i.Util.formatNum(this.y)+")"}},i.point=function(e,t,r){return e instanceof i.Point?e:i.Util.isArray(e)?new i.Point(e[0],e[1]):e===n||e===null?e:new i.Point(e,t,r)},i.Bounds=function(e,t){if(!e)return;var n=t?[e,t]:e;for(var r=0,i=n.length;r<i;r++)this.extend(n[r])},i.Bounds.prototype={extend:function(e){return e=i.point(e),!this.min&&!this.max?(this.min=e.clone(),this.max=e.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(e.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(e.y,this.max.y)),this},getCenter:function(e){return new i.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return new i.Point(this.min.x,this.max.y)},getTopRight:function(){return new i.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(e){var t,n;return typeof e[0]=="number"||e instanceof i.Point?e=i.point(e):e=i.bounds(e),e instanceof i.Bounds?(t=e.min,n=e.max):t=n=e,t.x>=this.min.x&&n.x<=this.max.x&&t.y>=this.min.y&&n.y<=this.max.y},intersects:function(e){e=i.bounds(e);var t=this.min,n=this.max,r=e.min,s=e.max,o=s.x>=t.x&&r.x<=n.x,u=s.y>=t.y&&r.y<=n.y;return o&&u},isValid:function(){return!!this.min&&!!this.max}},i.bounds=function(e,t){return!e||e instanceof i.Bounds?e:new i.Bounds(e,t)},i.Transformation=function(e,t,n,r){this._a=e,this._b=t,this._c=n,this._d=r},i.Transformation.prototype={transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t=t||1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t=t||1,new i.Point((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}},i.DomUtil={get:function(e){return typeof e=="string"?t.getElementById(e):e},getStyle:function(e,n){var r=e.style[n];!r&&e.currentStyle&&(r=e.currentStyle[n]);if((!r||r==="auto")&&t.defaultView){var i=t.defaultView.getComputedStyle(e,null);r=i?i[n]:null}return r==="auto"?null:r},getViewportOffset:function(e){var n=0,r=0,s=e,o=t.body,u=t.documentElement,a;do{n+=s.offsetTop||0,r+=s.offsetLeft||0,n+=parseInt(i.DomUtil.getStyle(s,"borderTopWidth"),10)||0,r+=parseInt(i.DomUtil.getStyle(s,"borderLeftWidth"),10)||0,a=i.DomUtil.getStyle(s,"position");if(s.offsetParent===o&&a==="absolute")break;if(a==="fixed"){n+=o.scrollTop||u.scrollTop||0,r+=o.scrollLeft||u.scrollLeft||0;break}if(a==="relative"&&!s.offsetLeft){var f=i.DomUtil.getStyle(s,"width"),l=i.DomUtil.getStyle(s,"max-width"),c=s.getBoundingClientRect();if(f!=="none"||l!=="none")r+=c.left+s.clientLeft;n+=c.top+(o.scrollTop||u.scrollTop||0);break}s=s.offsetParent}while(s);s=e;do{if(s===o)break;n-=s.scrollTop||0,r-=s.scrollLeft||0,s=s.parentNode}while(s);return new i.Point(r,n)},documentIsLtr:function(){return i.DomUtil._docIsLtrCached||(i.DomUtil._docIsLtrCached=!0,i.DomUtil._docIsLtr=i.DomUtil.getStyle(t.body,"direction")==="ltr"),i.DomUtil._docIsLtr},create:function(e,n,r){var i=t.createElement(e);return i.className=n,r&&r.appendChild(i),i},hasClass:function(e,t){if(e.classList!==n)return e.classList.contains(t);var r=i.DomUtil._getClass(e);return r.length>0&&(new RegExp("(^|\\s)"+t+"(\\s|$)")).test(r)},addClass:function(e,t){if(e.classList!==n){var r=i.Util.splitWords(t);for(var s=0,o=r.length;s<o;s++)e.classList.add(r[s])}else if(!i.DomUtil.hasClass(e,t)){var u=i.DomUtil._getClass(e);i.DomUtil._setClass(e,(u?u+" ":"")+t)}},removeClass:function(e,t){e.classList!==n?e.classList.remove(t):i.DomUtil._setClass(e,i.Util.trim((" "+i.DomUtil._getClass(e)+" ").replace(" "+t+" "," ")))},_setClass:function(e,t){e.className.baseVal===n?e.className=t:e.className.baseVal=t},_getClass:function(e){return e.className.baseVal===n?e.className:e.className.baseVal},setOpacity:function(e,t){if("opacity"in e.style)e.style.opacity=t;else if("filter"in e.style){var n=!1,r="DXImageTransform.Microsoft.Alpha";try{n=e.filters.item(r)}catch(i){if(t===1)return}t=Math.round(t*100),n?(n.Enabled=t!==100,n.Opacity=t):e.style.filter+=" progid:"+r+"(opacity="+t+")"}},testProp:function(e){var n=t.documentElement.style;for(var r=0;r<e.length;r++)if(e[r]in n)return e[r];return!1},getTranslateString:function(e){var t=i.Browser.webkit3d,n="translate"+(t?"3d":"")+"(",r=(t?",0":"")+")";return n+e.x+"px,"+e.y+"px"+r},getScaleString:function(e,t){var n=i.DomUtil.getTranslateString(t.add(t.multiplyBy(-1*e))),r=" scale("+e+") ";return n+r},setPosition:function(e,t,n){e._leaflet_pos=t,!n&&i.Browser.any3d?e.style[i.DomUtil.TRANSFORM]=i.DomUtil.getTranslateString(t):(e.style.left=t.x+"px",e.style.top=t.y+"px")},getPosition:function(e){return e._leaflet_pos}},i.DomUtil.TRANSFORM=i.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),i.DomUtil.TRANSITION=i.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),i.DomUtil.TRANSITION_END=i.DomUtil.TRANSITION==="webkitTransition"||i.DomUtil.TRANSITION==="OTransition"?i.DomUtil.TRANSITION+"End":"transitionend",function(){if("onselectstart"in t)i.extend(i.DomUtil,{disableTextSelection:function(){i.DomEvent.on(e,"selectstart",i.DomEvent.preventDefault)},enableTextSelection:function(){i.DomEvent.off(e,"selectstart",i.DomEvent.preventDefault)}});else{var n=i.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);i.extend(i.DomUtil,{disableTextSelection:function(){if(n){var e=t.documentElement.style;this._userSelect=e[n],e[n]="none"}},enableTextSelection:function(){n&&(t.documentElement.style[n]=this._userSelect,delete this._userSelect)}})}i.extend(i.DomUtil,{disableImageDrag:function(){i.DomEvent.on(e,"dragstart",i.DomEvent.preventDefault)},enableImageDrag:function(){i.DomEvent.off(e,"dragstart",i.DomEvent.preventDefault)}})}(),i.LatLng=function(e,t,r){e=parseFloat(e),t=parseFloat(t);if(isNaN(e)||isNaN(t))throw new Error("Invalid LatLng object: ("+e+", "+t+")");this.lat=e,this.lng=t,r!==n&&(this.alt=parseFloat(r))},i.extend(i.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),i.LatLng.prototype={equals:function(e){if(!e)return!1;e=i.latLng(e);var t=Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng));return t<=i.LatLng.MAX_MARGIN},toString:function(e){return"LatLng("+i.Util.formatNum(this.lat,e)+", "+i.Util.formatNum(this.lng,e)+")"},distanceTo:function(e){e=i.latLng(e);var t=6378137,n=i.LatLng.DEG_TO_RAD,r=(e.lat-this.lat)*n,s=(e.lng-this.lng)*n,o=this.lat*n,u=e.lat*n,a=Math.sin(r/2),f=Math.sin(s/2),l=a*a+f*f*Math.cos(o)*Math.cos(u);return t*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))},wrap:function(e,t){var n=this.lng;return e=e||-180,t=t||180,n=(n+t)%(t-e)+(n<e||n===t?t:e),new i.LatLng(this.lat,n)}},i.latLng=function(e,t){return e instanceof i.LatLng?e:i.Util.isArray(e)?typeof e[0]=="number"||typeof e[0]=="string"?new i.LatLng(e[0],e[1],e[2]):null:e===n||e===null?e:typeof e=="object"&&"lat"in e?new i.LatLng(e.lat,"lng"in e?e.lng:e.lon):t===n?null:new i.LatLng(e,t)},i.LatLngBounds=function(e,t){if(!e)return;var n=t?[e,t]:e;for(var r=0,i=n.length;r<i;r++)this.extend(n[r])},i.LatLngBounds.prototype={extend:function(e){if(!e)return this;var t=i.latLng(e);return t!==null?e=t:e=i.latLngBounds(e),e instanceof i.LatLng?!this._southWest&&!this._northEast?(this._southWest=new i.LatLng(e.lat,e.lng),this._northEast=new i.LatLng(e.lat,e.lng)):(this._southWest.lat=Math.min(e.lat,this._southWest.lat),this._southWest.lng=Math.min(e.lng,this._southWest.lng),this._northEast.lat=Math.max(e.lat,this._northEast.lat),this._northEast.lng=Math.max(e.lng,this._northEast.lng)):e instanceof i.LatLngBounds&&(this.extend(e._southWest),this.extend(e._northEast)),this},pad:function(e){var t=this._southWest,n=this._northEast,r=Math.abs(t.lat-n.lat)*e,s=Math.abs(t.lng-n.lng)*e;return new i.LatLngBounds(new i.LatLng(t.lat-r,t.lng-s),new i.LatLng(n.lat+r,n.lng+s))},getCenter:function(){return new i.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new i.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new i.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(e){typeof e[0]=="number"||e instanceof i.LatLng?e=i.latLng(e):e=i.latLngBounds(e);var t=this._southWest,n=this._northEast,r,s;return e instanceof i.LatLngBounds?(r=e.getSouthWest(),s=e.getNorthEast()):r=s=e,r.lat>=t.lat&&s.lat<=n.lat&&r.lng>=t.lng&&s.lng<=n.lng},intersects:function(e){e=i.latLngBounds(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),s=e.getNorthEast(),o=s.lat>=t.lat&&r.lat<=n.lat,u=s.lng>=t.lng&&r.lng<=n.lng;return o&&u},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(e){return e?(e=i.latLngBounds(e),this._southWest.equals(e.getSouthWest())&&this._northEast.equals(e.getNorthEast())):!1},isValid:function(){return!!this._southWest&&!!this._northEast}},i.latLngBounds=function(e,t){return!e||e instanceof i.LatLngBounds?e:new i.LatLngBounds(e,t)},i.Projection={},i.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(e){var t=i.LatLng.DEG_TO_RAD,n=this.MAX_LATITUDE,r=Math.max(Math.min(n,e.lat),-n),s=e.lng*t,o=r*t;return o=Math.log(Math.tan(Math.PI/4+o/2)),new i.Point(s,o)},unproject:function(e){var t=i.LatLng.RAD_TO_DEG,n=e.x*t,r=(2*Math.atan(Math.exp(e.y))-Math.PI/2)*t;return new i.LatLng(r,n)}},i.Projection.LonLat={project:function(e){return new i.Point(e.lng,e.lat)},unproject:function(e){return new i.LatLng(e.y,e.x)}},i.CRS={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},scale:function(e){return 256*Math.pow(2,e)},getSize:function(e){var t=this.scale(e);return i.point(t,t)}},i.CRS.Simple=i.extend({},i.CRS,{projection:i.Projection.LonLat,transformation:new i.Transformation(1,0,-1,0),scale:function(e){return Math.pow(2,e)}}),i.CRS.EPSG3857=i.extend({},i.CRS,{code:"EPSG:3857",projection:i.Projection.SphericalMercator,transformation:new i.Transformation(.5/Math.PI,.5,-0.5/Math.PI,.5),project:function(e){var t=this.projection.project(e),n=6378137;return t.multiplyBy(n)}}),i.CRS.EPSG900913=i.extend({},i.CRS.EPSG3857,{code:"EPSG:900913"}),i.CRS.EPSG4326=i.extend({},i.CRS,{code:"EPSG:4326",projection:i.Projection.LonLat,transformation:new i.Transformation(1/360,.5,-1/360,.5)}),i.Map=i.Class.extend({includes:i.Mixin.Events,options:{crs:i.CRS.EPSG3857,fadeAnimation:i.DomUtil.TRANSITION&&!i.Browser.android23,trackResize:!0,markerZoomAnimation:i.DomUtil.TRANSITION&&i.Browser.any3d},initialize:function(e,t){t=i.setOptions(this,t),this._initContainer(e),this._initLayout(),this._onResize=i.bind(this._onResize,this),this._initEvents(),t.maxBounds&&this.setMaxBounds(t.maxBounds),t.center&&t.zoom!==n&&this.setView(i.latLng(t.center),t.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0,this.callInitHooks(),this._addLayers(t.layers)},setView:function(e,t){return t=t===n?this.getZoom():t,this._resetView(i.latLng(e),this._limitZoom(t)),this},setZoom:function(e,t){return this._loaded?this.setView(this.getCenter(),e,{zoom:t}):(this._zoom=this._limitZoom(e),this)},zoomIn:function(e,t){return this.setZoom(this._zoom+(e||1),t)},zoomOut:function(e,t){return this.setZoom(this._zoom-(e||1),t)},setZoomAround:function(e,t,n){var r=this.getZoomScale(t),s=this.getSize().divideBy(2),o=e instanceof i.Point?e:this.latLngToContainerPoint(e),u=o.subtract(s).multiplyBy(1-1/r),a=this.containerPointToLatLng(s.add(u));return this.setView(a,t,{zoom:n})},fitBounds:function(e,t){t=t||{},e=e.getBounds?e.getBounds():i.latLngBounds(e);var n=i.point(t.paddingTopLeft||t.padding||[0,0]),r=i.point(t.paddingBottomRight||t.padding||[0,0]),s=this.getBoundsZoom(e,!1,n.add(r)),o=r.subtract(n).divideBy(2),u=this.project(e.getSouthWest(),s),a=this.project(e.getNorthEast(),s),f=this.unproject(u.add(a).divideBy(2).add(o),s);return s=t&&t.maxZoom?Math.min(t.maxZoom,s):s,this.setView(f,s,t)},fitWorld:function(e){return this.fitBounds([[-90,-180],[90,180]],e)},panTo:function(e,t){return this.setView(e,this._zoom,{pan:t})},panBy:function(e){return this.fire("movestart"),this._rawPanBy(i.point(e)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(e){return e=i.latLngBounds(e),this.options.maxBounds=e,e?(this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds,this)):this.off("moveend",this._panInsideMaxBounds,this)},panInsideBounds:function(e,t){var n=this.getCenter(),r=this._limitCenter(n,this._zoom,e);return n.equals(r)?this:this.panTo(r,t)},addLayer:function(e){var t=i.stamp(e);return this._layers[t]?this:(this._layers[t]=e,e.options&&(!isNaN(e.options.maxZoom)||!isNaN(e.options.minZoom))&&(this._zoomBoundLayers[t]=e,this._updateZoomLevels()),this.options.zoomAnimation&&i.TileLayer&&e instanceof i.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,e.on("load",this._onTileLayerLoad,this)),this._loaded&&this._layerAdd(e),this)},removeLayer:function(e){var t=i.stamp(e);return this._layers[t]?(this._loaded&&e.onRemove(this),delete this._layers[t],this._loaded&&this.fire("layerremove",{layer:e}),this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels()),this.options.zoomAnimation&&i.TileLayer&&e instanceof i.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,e.off("load",this._onTileLayerLoad,this)),this):this},hasLayer:function(e){return e?i.stamp(e)in this._layers:!1},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},invalidateSize:function(e){if(!this._loaded)return this;e=i.extend({animate:!1,pan:!0},e===!0?{animate:!0}:e);var t=this.getSize();this._sizeChanged=!0,this._initialCenter=null;var n=this.getSize(),r=t.divideBy(2).round(),s=n.divideBy(2).round(),o=r.subtract(s);return!o.x&&!o.y?this:(e.animate&&e.pan?this.panBy(o):(e.pan&&this._rawPanBy(o),this.fire("move"),e.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(i.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:t,newSize:n}))},addHandler:function(e,t){if(!t)return this;var n=this[e]=new t(this);return this._handlers.push(n),this.options[e]&&n.enable(),this},remove:function(){this._loaded&&this.fire("unload"),this._initEvents("off");try{delete this._container._leaflet}catch(e){this._container._leaflet=n}return this._clearPanes(),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this},getCenter:function(){return this._checkIfLoaded(),this._initialCenter&&!this._moved()?this._initialCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds(),t=this.unproject(e.getBottomLeft()),n=this.unproject(e.getTopRight());return new i.LatLngBounds(t,n)},getMinZoom:function(){return this.options.minZoom===n?this._layersMinZoom===n?0:this._layersMinZoom:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===n?this._layersMaxZoom===n?Infinity:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(e,t,n){e=i.latLngBounds(e);var r=this.getMinZoom()-(t?1:0),s=this.getMaxZoom(),o=this.getSize(),u=e.getNorthWest(),a=e.getSouthEast(),f=!0,l;n=i.point(n||[0,0]);do r++,l=this.project(a,r).subtract(this.project(u,r)).add(n),f=t?l.x<o.x||l.y<o.y:o.contains(l);while(f&&r<=s);return f&&t?null:t?r:r-1},getSize:function(){if(!this._size||this._sizeChanged)this._size=new i.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1;return this._size.clone()},getPixelBounds:function(){var e=this._getTopLeftPoint();return new i.Bounds(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e){var t=this.options.crs;return t.scale(e)/t.scale(this._zoom)},getScaleZoom:function(e){return this._zoom+Math.log(e)/Math.LN2},project:function(e,t){return t=t===n?this._zoom:t,this.options.crs.latLngToPoint(i.latLng(e),t)},unproject:function(e,t){return t=t===n?this._zoom:t,this.options.crs.pointToLatLng(i.point(e),t)},layerPointToLatLng:function(e){var t=i.point(e).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(e){var t=this.project(i.latLng(e))._round();return t._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(e){return i.point(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return i.point(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(i.point(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(i.latLng(e)))},mouseEventToContainerPoint:function(e){return i.DomEvent.getMousePosition(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=i.DomUtil.get(e);if(!t)throw new Error("Map container not found.");if(t._leaflet)throw new Error("Map container is already initialized.");t._leaflet=!0},_initLayout:function(){var e=this._container;i.DomUtil.addClass(e,"leaflet-container"+(i.Browser.touch?" leaflet-touch":"")+(i.Browser.retina?" leaflet-retina":"")+(i.Browser.ielt9?" leaflet-oldie":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var t=i.DomUtil.getStyle(e,"position");t!=="absolute"&&t!=="relative"&&t!=="fixed"&&(e.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._mapPane=e.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=e.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),e.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),e.shadowPane=this._createPane("leaflet-shadow-pane"),e.overlayPane=this._createPane("leaflet-overlay-pane"),e.markerPane=this._createPane("leaflet-marker-pane"),e.popupPane=this._createPane("leaflet-popup-pane");var t=" leaflet-zoom-hide";this.options.markerZoomAnimation||(i.DomUtil.addClass(e.markerPane,t),i.DomUtil.addClass(e.shadowPane,t),i.DomUtil.addClass(e.popupPane,t))},_createPane:function(e,t){return i.DomUtil.create("div",e,t||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(e){e=e?i.Util.isArray(e)?e:[e]:[];for(var t=0,n=e.length;t<n;t++)this.addLayer(e[t])},_resetView:function(e,t,n,r){var s=this._zoom!==t;r||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=t,this._initialCenter=e,this._initialTopLeftPoint=this._getNewTopLeftPoint(e),n?this._initialTopLeftPoint._add(this._getMapPanePos()):i.DomUtil.setPosition(this._mapPane,new i.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var o=!this._loaded;this._loaded=!0,this.fire("viewreset",{hard:!n}),o&&(this.fire("load"),this.eachLayer(this._layerAdd,this)),this.fire("move"),(s||r)&&this.fire("zoomend"),this.fire("moveend",{hard:!n})},_rawPanBy:function(e){i.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(e))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var e,t=Infinity,r=-Infinity,i=this._getZoomSpan();for(e in this._zoomBoundLayers){var s=this._zoomBoundLayers[e];isNaN(s.options.minZoom)||(t=Math.min(t,s.options.minZoom)),isNaN(s.options.maxZoom)||(r=Math.max(r,s.options.maxZoom))}e===n?this._layersMaxZoom=this._layersMinZoom=n:(this._layersMaxZoom=r,this._layersMinZoom=t),i!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){if(!i.DomEvent)return;t=t||"on",i.DomEvent[t](this._container,"click",this._onMouseClick,this);var n=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"],r,s;for(r=0,s=n.length;r<s;r++)i.DomEvent[t](this._container,n[r],this._fireMouseEvent,this);this.options.trackResize&&i.DomEvent[t](e,"resize",this._onResize,this)},_onResize:function(){i.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=i.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this,!1,this._container)},_onMouseClick:function(e){if(!this._loaded||!e._simulated&&(this.dragging&&this.dragging.moved()||this.boxZoom&&this.boxZoom.moved())||i.DomEvent._skipped(e))return;this.fire("preclick"),this._fireMouseEvent(e)},_fireMouseEvent:function(e){if(!this._loaded||i.DomEvent._skipped(e))return;var t=e.type;t=t==="mouseenter"?"mouseover":t==="mouseleave"?"mouseout":t;if(!this.hasEventListeners(t))return;t==="contextmenu"&&i.DomEvent.preventDefault(e);var n=this.mouseEventToContainerPoint(e),r=this.containerPointToLayerPoint(n),s=this.layerPointToLatLng(r);this.fire(t,{latlng:s,layerPoint:r,containerPoint:n,originalEvent:e})},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},_clearHandlers:function(){for(var e=0,t=this._handlers.length;e<t;e++)this._handlers[e].disable()},whenReady:function(e,t){return this._loaded?e.call(t||this,this):this.on("load",e,t),this},_layerAdd:function(e){e.onAdd(this),this.fire("layeradd",{layer:e})},_getMapPanePos:function(){return i.DomUtil.getPosition(this._mapPane)},_moved:function(){var e=this._getMapPanePos();return e&&!e.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(e,t){var n=this.getSize()._divideBy(2);return this.project(e,t)._subtract(n)._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewTopLeftPoint(n,t).add(this._getMapPanePos());return this.project(e,t)._subtract(r)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitCenter:function(e,t,n){if(!n)return e;var r=this.project(e,t),s=this.getSize().divideBy(2),o=new i.Bounds(r.subtract(s),r.add(s)),u=this._getBoundsOffset(o,n,t);return this.unproject(r.add(u),t)},_limitOffset:function(e,t){if(!t)return e;var n=this.getPixelBounds(),r=new i.Bounds(n.min.add(e),n.max.add(e));return e.add(this._getBoundsOffset(r,t))},_getBoundsOffset:function(e,t,n){var r=this.project(t.getNorthWest(),n).subtract(e.min),s=this.project(t.getSouthEast(),n).subtract(e.max),o=this._rebound(r.x,-s.x),u=this._rebound(r.y,-s.y);return new i.Point(o,u)},_rebound:function(e,t){return e+t>0?Math.round(e-t)/2:Math.max(0,Math.ceil(e))-Math.max(0,Math.floor(t))},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom();return Math.max(t,Math.min(n,e))}}),i.map=function(e,t){return new i.Map(e,t)},i.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.314245179,R_MAJOR:6378137,project:function(e){var t=i.LatLng.DEG_TO_RAD,n=this.MAX_LATITUDE,r=Math.max(Math.min(n,e.lat),-n),s=this.R_MAJOR,o=this.R_MINOR,u=e.lng*t*s,a=r*t,f=o/s,l=Math.sqrt(1-f*f),c=l*Math.sin(a);c=Math.pow((1-c)/(1+c),l*.5);var h=Math.tan(.5*(Math.PI*.5-a))/c;return a=-s*Math.log(h),new i.Point(u,a)},unproject:function(e){var t=i.LatLng.RAD_TO_DEG,n=this.R_MAJOR,r=this.R_MINOR,s=e.x*t/n,o=r/n,u=Math.sqrt(1-o*o),a=Math.exp(-e.y/n),f=Math.PI/2-2*Math.atan(a),l=15,c=1e-7,h=l,p=.1,d;while(Math.abs(p)>c&&--h>0)d=u*Math.sin(f),p=Math.PI/2-2*Math.atan(a*Math.pow((1-d)/(1+d),.5*u))-f,f+=p;return new i.LatLng(f*t,s)}},i.CRS.EPSG3395=i.extend({},i.CRS,{code:"EPSG:3395",projection:i.Projection.Mercator,transformation:function(){var e=i.Projection.Mercator,t=e.R_MAJOR,n=.5/(Math.PI*t);return new i.Transformation(n,.5,-n,.5)}()}),i.TileLayer=i.Class.extend({includes:i.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:i.Browser.mobile,updateWhenIdle:i.Browser.mobile},initialize:function(e,t){t=i.setOptions(this,t),t.detectRetina&&i.Browser.retina&&t.maxZoom>0&&(t.tileSize=Math.floor(t.tileSize/2),t.zoomOffset++,t.minZoom>0&&t.minZoom--,this.options.maxZoom--),t.bounds&&(t.bounds=i.latLngBounds(t.bounds)),this._url=e;var n=this.options.subdomains;typeof n=="string"&&(this.options.subdomains=n.split(""))},onAdd:function(e){this._map=e,this._animated=e._zoomAnimated,this._initContainer(),e.on({viewreset:this._reset,moveend:this._update},this),this._animated&&e.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=i.Util.limitExecByInterval(this._update,150,this),e.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){this._container.parentNode.removeChild(this._container),e.off({viewreset:this._reset,moveend:this._update},this),this._animated&&e.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||e.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var e=this._map._panes.tilePane;return this._container&&(e.appendChild(this._container),this._setAutoZIndex(e,Math.max)),this},bringToBack:function(){var e=this._map._panes.tilePane;return this._container&&(e.insertBefore(this._container,e.firstChild),this._setAutoZIndex(e,Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},setUrl:function(e,t){return this._url=e,t||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==n&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e,t){var n=e.children,r=-t(Infinity,-Infinity),i,s,o;for(s=0,o=n.length;s<o;s++)n[s]!==this._container&&(i=parseInt(n[s].style.zIndex,10),isNaN(i)||(r=t(r,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(r)?r:0)+t(1,-1)},_updateOpacity:function(){var e,t=this._tiles;if(i.Browser.ielt9)for(e in t)i.DomUtil.setOpacity(t[e],this.options.opacity);else i.DomUtil.setOpacity(this._container,this.options.opacity)},_initContainer:function(){var e=this._map._panes.tilePane;if(!this._container){this._container=i.DomUtil.create("div","leaflet-layer"),this._updateZIndex();if(this._animated){var t="leaflet-tile-container";this._bgBuffer=i.DomUtil.create("div",t,this._container),this._tileContainer=i.DomUtil.create("div",t,this._container)}else this._tileContainer=this._container;e.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()}},_reset:function(e){for(var t in this._tiles)this.fire("tileunload",{tile:this._tiles[t]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&e&&e.hard&&this._clearBgBuffer(),this._initContainer()},_getTileSize:function(){var e=this._map,t=e.getZoom()+this.options.zoomOffset,n=this.options.maxNativeZoom,r=this.options.tileSize;return n&&t>n&&(r=Math.round(e.getZoomScale(t)/e.getZoomScale(n)*r)),r},_update:function(){if(!this._map)return;var e=this._map,t=e.getPixelBounds(),n=e.getZoom(),r=this._getTileSize(
);if(n>this.options.maxZoom||n<this.options.minZoom)return;var s=i.bounds(t.min.divideBy(r)._floor(),t.max.divideBy(r)._floor());this._addTilesFromCenterOut(s),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(s)},_addTilesFromCenterOut:function(e){var n=[],r=e.getCenter(),s,o,u;for(s=e.min.y;s<=e.max.y;s++)for(o=e.min.x;o<=e.max.x;o++)u=new i.Point(o,s),this._tileShouldBeLoaded(u)&&n.push(u);var a=n.length;if(a===0)return;n.sort(function(e,t){return e.distanceTo(r)-t.distanceTo(r)});var f=t.createDocumentFragment();this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=a;for(o=0;o<a;o++)this._addTile(n[o],f);this._tileContainer.appendChild(f)},_tileShouldBeLoaded:function(e){if(e.x+":"+e.y in this._tiles)return!1;var t=this.options;if(!t.continuousWorld){var n=this._getWrapTileNum();if(t.noWrap&&(e.x<0||e.x>=n.x)||e.y<0||e.y>=n.y)return!1}if(t.bounds){var r=t.tileSize,i=e.multiplyBy(r),s=i.add([r,r]),o=this._map.unproject(i),u=this._map.unproject(s);!t.continuousWorld&&!t.noWrap&&(o=o.wrap(),u=u.wrap());if(!t.bounds.intersects([o,u]))return!1}return!0},_removeOtherTiles:function(e){var t,n,r,i;for(i in this._tiles)t=i.split(":"),n=parseInt(t[0],10),r=parseInt(t[1],10),(n<e.min.x||n>e.max.x||r<e.min.y||r>e.max.y)&&this._removeTile(i)},_removeTile:function(e){var t=this._tiles[e];this.fire("tileunload",{tile:t,url:t.src}),this.options.reuseTiles?(i.DomUtil.removeClass(t,"leaflet-tile-loaded"),this._unusedTiles.push(t)):t.parentNode===this._tileContainer&&this._tileContainer.removeChild(t),i.Browser.android||(t.onload=null,t.src=i.Util.emptyImageUrl),delete this._tiles[e]},_addTile:function(e,t){var n=this._getTilePos(e),r=this._getTile();i.DomUtil.setPosition(r,n,i.Browser.chrome),this._tiles[e.x+":"+e.y]=r,this._loadTile(r,e),r.parentNode!==this._tileContainer&&t.appendChild(r)},_getZoomForUrl:function(){var e=this.options,t=this._map.getZoom();return e.zoomReverse&&(t=e.maxZoom-t),t+=e.zoomOffset,e.maxNativeZoom?Math.min(t,e.maxNativeZoom):t},_getTilePos:function(e){var t=this._map.getPixelOrigin(),n=this._getTileSize();return e.multiplyBy(n).subtract(t)},getTileUrl:function(e){return i.Util.template(this._url,i.extend({s:this._getSubdomain(e),z:e.z,x:e.x,y:e.y},this.options))},_getWrapTileNum:function(){var e=this._map.options.crs,t=e.getSize(this._map.getZoom());return t.divideBy(this._getTileSize())._floor()},_adjustTilePoint:function(e){var t=this._getWrapTileNum();!this.options.continuousWorld&&!this.options.noWrap&&(e.x=(e.x%t.x+t.x)%t.x),this.options.tms&&(e.y=t.y-e.y-1),e.z=this._getZoomForUrl()},_getSubdomain:function(e){var t=Math.abs(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var e=this._unusedTiles.pop();return this._resetTile(e),e}return this._createTile()},_resetTile:function(){},_createTile:function(){var e=i.DomUtil.create("img","leaflet-tile");return e.style.width=e.style.height=this._getTileSize()+"px",e.galleryimg="no",e.onselectstart=e.onmousemove=i.Util.falseFn,i.Browser.ielt9&&this.options.opacity!==n&&i.DomUtil.setOpacity(e,this.options.opacity),i.Browser.mobileWebkit3d&&(e.style.WebkitBackfaceVisibility="hidden"),e},_loadTile:function(e,t){e._layer=this,e.onload=this._tileOnLoad,e.onerror=this._tileOnError,this._adjustTilePoint(t),e.src=this.getTileUrl(t),this.fire("tileloadstart",{tile:e,url:e.src})},_tileLoaded:function(){this._tilesToLoad--,this._animated&&i.DomUtil.addClass(this._tileContainer,"leaflet-zoom-animated"),this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(i.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var e=this._layer;this.src!==i.Util.emptyImageUrl&&(i.DomUtil.addClass(this,"leaflet-tile-loaded"),e.fire("tileload",{tile:this,url:this.src})),e._tileLoaded()},_tileOnError:function(){var e=this._layer;e.fire("tileerror",{tile:this,url:this.src});var t=e.options.errorTileUrl;t&&(this.src=t),e._tileLoaded()}}),i.tileLayer=function(e,t){return new i.TileLayer(e,t)},i.TileLayer.WMS=i.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(e,t){this._url=e;var n=i.extend({},this.defaultWmsParams),r=t.tileSize||this.options.tileSize;t.detectRetina&&i.Browser.retina?n.width=n.height=r*2:n.width=n.height=r;for(var s in t)!this.options.hasOwnProperty(s)&&s!=="crs"&&(n[s]=t[s]);this.wmsParams=n,i.setOptions(this,t)},onAdd:function(e){this._crs=this.options.crs||e.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var t=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[t]=this._crs.code,i.TileLayer.prototype.onAdd.call(this,e)},getTileUrl:function(e){var t=this._map,n=this.options.tileSize,r=e.multiplyBy(n),s=r.add([n,n]),o=this._crs.project(t.unproject(r,e.z)),u=this._crs.project(t.unproject(s,e.z)),a=this._wmsVersion>=1.3&&this._crs===i.CRS.EPSG4326?[u.y,o.x,o.y,u.x].join(","):[o.x,u.y,u.x,o.y].join(","),f=i.Util.template(this._url,{s:this._getSubdomain(e)});return f+i.Util.getParamString(this.wmsParams,f,!0)+"&BBOX="+a},setParams:function(e,t){return i.extend(this.wmsParams,e),t||this.redraw(),this}}),i.tileLayer.wms=function(e,t){return new i.TileLayer.WMS(e,t)},i.TileLayer.Canvas=i.TileLayer.extend({options:{async:!1},initialize:function(e){i.setOptions(this,e)},redraw:function(){this._map&&(this._reset({hard:!0}),this._update());for(var e in this._tiles)this._redrawTile(this._tiles[e]);return this},_redrawTile:function(e){this.drawTile(e,e._tilePoint,this._map._zoom)},_createTile:function(){var e=i.DomUtil.create("canvas","leaflet-tile");return e.width=e.height=this.options.tileSize,e.onselectstart=e.onmousemove=i.Util.falseFn,e},_loadTile:function(e,t){e._layer=this,e._tilePoint=t,this._redrawTile(e),this.options.async||this.tileDrawn(e)},drawTile:function(){},tileDrawn:function(e){this._tileOnLoad.call(e)}}),i.tileLayer.canvas=function(e){return new i.TileLayer.Canvas(e)},i.ImageOverlay=i.Class.extend({includes:i.Mixin.Events,options:{opacity:1},initialize:function(e,t,n){this._url=e,this._bounds=i.latLngBounds(t),i.setOptions(this,n)},onAdd:function(e){this._map=e,this._image||this._initImage(),e._panes.overlayPane.appendChild(this._image),e.on("viewreset",this._reset,this),e.options.zoomAnimation&&i.Browser.any3d&&e.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(e){e.getPanes().overlayPane.removeChild(this._image),e.off("viewreset",this._reset,this),e.options.zoomAnimation&&e.off("zoomanim",this._animateZoom,this)},addTo:function(e){return e.addLayer(this),this},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var e=this._map._panes.overlayPane;return this._image&&e.insertBefore(this._image,e.firstChild),this},setUrl:function(e){this._url=e,this._image.src=this._url},getAttribution:function(){return this.options.attribution},_initImage:function(){this._image=i.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&i.Browser.any3d?i.DomUtil.addClass(this._image,"leaflet-zoom-animated"):i.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),i.extend(this._image,{galleryimg:"no",onselectstart:i.Util.falseFn,onmousemove:i.Util.falseFn,onload:i.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(e){var t=this._map,n=this._image,r=t.getZoomScale(e.zoom),s=this._bounds.getNorthWest(),o=this._bounds.getSouthEast(),u=t._latLngToNewLayerPoint(s,e.zoom,e.center),a=t._latLngToNewLayerPoint(o,e.zoom,e.center)._subtract(u),f=u._add(a._multiplyBy(.5*(1-1/r)));n.style[i.DomUtil.TRANSFORM]=i.DomUtil.getTranslateString(f)+" scale("+r+") "},_reset:function(){var e=this._image,t=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),n=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(t);i.DomUtil.setPosition(e,t),e.style.width=n.x+"px",e.style.height=n.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){i.DomUtil.setOpacity(this._image,this.options.opacity)}}),i.imageOverlay=function(e,t,n){return new i.ImageOverlay(e,t,n)},i.Icon=i.Class.extend({options:{className:""},initialize:function(e){i.setOptions(this,e)},createIcon:function(e){return this._createIcon("icon",e)},createShadow:function(e){return this._createIcon("shadow",e)},_createIcon:function(e,t){var n=this._getIconUrl(e);if(!n){if(e==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var r;return!t||t.tagName!=="IMG"?r=this._createImg(n):r=this._createImg(n,t),this._setIconStyles(r,e),r},_setIconStyles:function(e,t){var n=this.options,r=i.point(n[t+"Size"]),s;t==="shadow"?s=i.point(n.shadowAnchor||n.iconAnchor):s=i.point(n.iconAnchor),!s&&r&&(s=r.divideBy(2,!0)),e.className="leaflet-marker-"+t+" "+n.className,s&&(e.style.marginLeft=-s.x+"px",e.style.marginTop=-s.y+"px"),r&&(e.style.width=r.x+"px",e.style.height=r.y+"px")},_createImg:function(e,n){return n=n||t.createElement("img"),n.src=e,n},_getIconUrl:function(e){return i.Browser.retina&&this.options[e+"RetinaUrl"]?this.options[e+"RetinaUrl"]:this.options[e+"Url"]}}),i.icon=function(e){return new i.Icon(e)},i.Icon.Default=i.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(e){var t=e+"Url";if(this.options[t])return this.options[t];i.Browser.retina&&e==="icon"&&(e+="-2x");var n=i.Icon.Default.imagePath;if(!n)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return n+"/marker-"+e+".png"}}),i.Icon.Default.imagePath=function(){var e=t.getElementsByTagName("script"),n=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/,r,i,s,o,u;for(r=0,i=e.length;r<i;r++){s=e[r].src,o=s.match(n);if(o)return u=s.split(n)[0],(u?u+"/":"")+"images"}}(),i.Marker=i.Class.extend({includes:i.Mixin.Events,options:{icon:new i.Icon.Default,title:"",alt:"",clickable:!0,draggable:!1,keyboard:!0,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(e,t){i.setOptions(this,t),this._latlng=i.latLng(e)},onAdd:function(e){this._map=e,e.on("viewreset",this.update,this),this._initIcon(),this.update(),this.fire("add"),e.options.zoomAnimation&&e.options.markerZoomAnimation&&e.on("zoomanim",this._animateZoom,this)},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){this.dragging&&this.dragging.disable(),this._removeIcon(),this._removeShadow(),this.fire("remove"),e.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=i.latLng(e),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(e){return this.options.zIndexOffset=e,this.update(),this},setIcon:function(e){return this.options.icon=e,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup),this},update:function(){if(this._icon){var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)}return this},_initIcon:function(){var e=this.options,t=this._map,n=t.options.zoomAnimation&&t.options.markerZoomAnimation,r=n?"leaflet-zoom-animated":"leaflet-zoom-hide",s=e.icon.createIcon(this._icon),o=!1;s!==this._icon&&(this._icon&&this._removeIcon(),o=!0,e.title&&(s.title=e.title),e.alt&&(s.alt=e.alt)),i.DomUtil.addClass(s,r),e.keyboard&&(s.tabIndex="0"),this._icon=s,this._initInteraction(),e.riseOnHover&&i.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this);var u=e.icon.createShadow(this._shadow),a=!1;u!==this._shadow&&(this._removeShadow(),a=!0),u&&i.DomUtil.addClass(u,r),this._shadow=u,e.opacity<1&&this._updateOpacity();var f=this._map._panes;o&&f.markerPane.appendChild(this._icon),u&&a&&f.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&i.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),this._map._panes.markerPane.removeChild(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow),this._shadow=null},_setPos:function(e){i.DomUtil.setPosition(this._icon,e),this._shadow&&i.DomUtil.setPosition(this._shadow,e),this._zIndex=e.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(e){this._icon.style.zIndex=this._zIndex+e},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center).round();this._setPos(t)},_initInteraction:function(){if(!this.options.clickable)return;var e=this._icon,t=["dblclick","mousedown","mouseover","mouseout","contextmenu"];i.DomUtil.addClass(e,"leaflet-clickable"),i.DomEvent.on(e,"click",this._onMouseClick,this),i.DomEvent.on(e,"keypress",this._onKeyPress,this);for(var n=0;n<t.length;n++)i.DomEvent.on(e,t[n],this._fireMouseEvent,this);i.Handler.MarkerDrag&&(this.dragging=new i.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())},_onMouseClick:function(e){var t=this.dragging&&this.dragging.moved();(this.hasEventListeners(e.type)||t)&&i.DomEvent.stopPropagation(e);if(t)return;if((!this.dragging||!this.dragging._enabled)&&this._map.dragging&&this._map.dragging.moved())return;this.fire(e.type,{originalEvent:e,latlng:this._latlng})},_onKeyPress:function(e){e.keyCode===13&&this.fire("click",{originalEvent:e,latlng:this._latlng})},_fireMouseEvent:function(e){this.fire(e.type,{originalEvent:e,latlng:this._latlng}),e.type==="contextmenu"&&this.hasEventListeners(e.type)&&i.DomEvent.preventDefault(e),e.type!=="mousedown"?i.DomEvent.stopPropagation(e):i.DomEvent.preventDefault(e)},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},_updateOpacity:function(){i.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&i.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),i.marker=function(e,t){return new i.Marker(e,t)},i.DivIcon=i.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:!1},createIcon:function(e){var n=e&&e.tagName==="DIV"?e:t.createElement("div"),r=this.options;return r.html!==!1?n.innerHTML=r.html:n.innerHTML="",r.bgPos&&(n.style.backgroundPosition=-r.bgPos.x+"px "+ -r.bgPos.y+"px"),this._setIconStyles(n,"icon"),n},createShadow:function(){return null}}),i.divIcon=function(e){return new i.DivIcon(e)},i.Map.mergeOptions({closePopupOnClick:!0}),i.Popup=i.Class.extend({includes:i.Mixin.Events,options:{minWidth:50,maxWidth:300,autoPan:!0,closeButton:!0,offset:[0,7],autoPanPadding:[5,5],keepInView:!1,className:"",zoomAnimation:!0},initialize:function(e,t){i.setOptions(this,e),this._source=t,this._animated=i.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(e){this._map=e,this._container||this._initLayout();var t=e.options.fadeAnimation;t&&i.DomUtil.setOpacity(this._container,0),e._panes.popupPane.appendChild(this._container),e.on(this._getEvents(),this),this.update(),t&&i.DomUtil.setOpacity(this._container,1),this.fire("open"),e.fire("popupopen",{popup:this}),this._source&&this._source.fire("popupopen",{popup:this})},addTo:function(e){return e.addLayer(this),this},openOn:function(e){return e.openPopup(this),this},onRemove:function(e){e._panes.popupPane.removeChild(this._container),i.Util.falseFn(this._container.offsetWidth),e.off(this._getEvents(),this),e.options.fadeAnimation&&i.DomUtil.setOpacity(this._container,0),this._map=null,this.fire("close"),e.fire("popupclose",{popup:this}),this._source&&this._source.fire("popupclose",{popup:this})},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=i.latLng(e),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(e){return this._content=e,this.update(),this},update:function(){if(!this._map)return;this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan()},_getEvents:function(){var e={viewreset:this._updatePosition};this._animated&&(e.zoomanim=this._zoomAnimation);if("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)e.preclick=this._close;return this.options.keepInView&&(e.moveend=this._adjustPan),e},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var e="leaflet-popup",t=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),n=this._container=i.DomUtil.create("div",t),r;this.options.closeButton&&(r=this._closeButton=i.DomUtil.create("a",e+"-close-button",n),r.href="#close",r.innerHTML="&#215;",i.DomEvent.disableClickPropagation(r),i.DomEvent.on(r,"click",this._onCloseButtonClick,this));var s=this._wrapper=i.DomUtil.create("div",e+"-content-wrapper",n);i.DomEvent.disableClickPropagation(s),this._contentNode=i.DomUtil.create("div",e+"-content",s),i.DomEvent.disableScrollPropagation(this._contentNode),i.DomEvent.on(s,"contextmenu",i.DomEvent.stopPropagation),this._tipContainer=i.DomUtil.create("div",e+"-tip-container",n),this._tip=i.DomUtil.create("div",e+"-tip",this._tipContainer)},_updateContent:function(){if(!this._content)return;if(typeof this._content=="string")this._contentNode.innerHTML=this._content;else{while(this._contentNode.hasChildNodes())this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width="",t.whiteSpace="nowrap";var n=e.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),t.width=n+1+"px",t.whiteSpace="",t.height="";var r=e.offsetHeight,s=this.options.maxHeight,o="leaflet-popup-scrolled";s&&r>s?(t.height=s+"px",i.DomUtil.addClass(e,o)):i.DomUtil.removeClass(e,o),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(!this._map)return;var e=this._map.latLngToLayerPoint(this._latlng),t=this._animated,n=i.point(this.options.offset);t&&i.DomUtil.setPosition(this._container,e),this._containerBottom=-n.y-(t?0:e.y),this._containerLeft=-Math.round(this._containerWidth/2)+n.x+(t?0:e.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"},_zoomAnimation:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);i.DomUtil.setPosition(this._container,t)},_adjustPan:function(){if(!this.options.autoPan)return;var e=this._map,t=this._container.offsetHeight,n=this._containerWidth,r=new i.Point(this._containerLeft,-t-this._containerBottom);this._animated&&r._add(i.DomUtil.getPosition(this._container));var s=e.layerPointToContainerPoint(r),o=i.point(this.options.autoPanPadding),u=i.point(this.options.autoPanPaddingTopLeft||o),a=i.point(this.options.autoPanPaddingBottomRight||o),f=e.getSize(),l=0,c=0;s.x+n+a.x>f.x&&(l=s.x+n-f.x+a.x),s.x-l-u.x<0&&(l=s.x-u.x),s.y+t+a.y>f.y&&(c=s.y+t-f.y+a.y),s.y-c-u.y<0&&(c=s.y-u.y),(l||c)&&e.fire("autopanstart").panBy([l,c])},_onCloseButtonClick:function(e){this._close(),i.DomEvent.stop(e)}}),i.popup=function(e,t){return new i.Popup(e,t)},i.Map.include({openPopup:function(e,t,n){this.closePopup();if(!(e instanceof i.Popup)){var r=e;e=(new i.Popup(n)).setLatLng(t).setContent(r)}return e._isOpen=!0,this._popup=e,this.addLayer(e)},closePopup:function(e){if(!e||e===this._popup)e=this._popup,this._popup=null;return e&&(this.removeLayer(e),e._isOpen=!1),this}}),i.Marker.include({openPopup:function(){return this._popup&&this._map&&!this._map.hasLayer(this._popup)&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(){return this._popup&&(this._popup._isOpen?this.closePopup():this.openPopup()),this},bindPopup:function(e,t){var n=i.point(this.options.icon.options.popupAnchor||[0,0]);return n=n.add(i.Popup.prototype.options.offset),t&&t.offset&&(n=n.add(t.offset)),t=i.extend({offset:n},t),this._popupHandlersAdded||(this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popupHandlersAdded=!0),e instanceof i.Popup?(i.setOptions(e,t),this._popup=e):this._popup=(new i.Popup(t,this)).setContent(e),this},setPopupContent:function(e){return this._popup&&this._popup.setContent(e),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.togglePopup,this).off("remove",this.closePopup,this).off("move",this._movePopup,this),this._popupHandlersAdded=!1),this},getPopup:function(){return this._popup},_movePopup:function(e){this._popup.setLatLng(e.latlng)}}),i.LayerGroup=i.Class.extend({initialize:function(e){this._layers={};var t,n;if(e)for(t=0,n=e.length;t<n;t++)this.addLayer(e[t])},addLayer:function(e){var t=this.getLayerId(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(e){return e?e in this._layers||this.getLayerId(e)in this._layers:!1},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(e){var t=Array.prototype.slice.call(arguments,1),n,r;for(n in this._layers)r=this._layers[n],r[e]&&r[e].apply(r,t);return this},onAdd:function(e){this._map=e,this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e),this._map=null},addTo:function(e){return e.addLayer(this),this},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},getLayer:function(e){return this._layers[e]},getLayers:function(){var e=[];for(var t in this._layers)e.push(this._layers[t]);return e},setZIndex:function(e){return this.invoke("setZIndex",e)},getLayerId:function(e){return i.stamp(e)}}),i.layerGroup=function(e){return new i.LayerGroup(e)},i.FeatureGroup=i.LayerGroup.extend({includes:i.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(e){return this.hasLayer(e)?this:("on"in e&&e.on(i.FeatureGroup.EVENTS,this._propagateEvent,this),i.LayerGroup.prototype.addLayer.call(this,e),this._popupContent&&e.bindPopup&&e.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:e}))},removeLayer:function(e){return this.hasLayer(e)?(e in this._layers&&(e=this._layers[e]),e.off(i.FeatureGroup.EVENTS,this._propagateEvent,this),i.LayerGroup.prototype.removeLayer.call(this,e),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:e})):this},bindPopup:function(e,t){return this._popupContent=e,this._popupOptions=t,this.invoke("bindPopup",e,t)},openPopup:function(e){for(var t in this._layers){this._layers[t].openPopup(e);break}return this},setStyle:function(e){return this.invoke("setStyle",e)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var e=new i.LatLngBounds;return this.eachLayer(function(t){e.extend(t instanceof i.Marker?t.getLatLng():t.getBounds())}),e},_propagateEvent:function(e){e=i.extend({layer:e.target,target:this},e),this.fire(e.type,e)}}),i.featureGroup=function(e){return new i.FeatureGroup(e)},i.Path=i.Class.extend({includes:[i.Mixin.Events],statics:{CLIP_PADDING:function(){var t=i.Browser.mobile?1280:2e3,n=(t/Math.max(e.outerWidth,e.outerHeight)-1)/2;return Math.max(0,Math.min(.5,n))}()},options:{stroke:!0,color:"#0033ff",dashArray:null,lineCap:null,lineJoin:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(e){i.setOptions(this,e)},onAdd:function(e){this._map=e,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),e.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){e._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,i.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),e.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(e){return i.setOptions(this,e),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),i.Map.include({_updatePathViewport:function(){var e=i.Path.CLIP_PADDING,t=this.getSize(),n=i.DomUtil.getPosition(this._mapPane),r=n.multiplyBy(-1)._subtract(t.multiplyBy(e)._round()),s=r.add(t.multiplyBy(1+e*2)._round());this._pathViewport=new i.Bounds(r,s)}}),i.Path.SVG_NS="http://www.w3.org/2000/svg",i.Browser.svg=!!t.createElementNS&&!!t.createElementNS(i.Path.SVG_NS,"svg").createSVGRect,i.Path=i.Path.extend({statics:{SVG:i.Browser.svg},bringToFront:function(){var e=this._map._pathRoot,t=this._container;return t&&e.lastChild!==t&&e.appendChild(t),this},bringToBack:function(){var e=this._map._pathRoot,t=this._container,n=e.firstChild;return t&&n!==t&&e.insertBefore(t,n),this},getPathString:function(){},_createElement:function(e){return t.createElementNS(i.Path.SVG_NS,e)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this.options.className&&i.DomUtil.addClass(this._path,this.options.className),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this.options.pointerEvents&&this._path.setAttribute("pointer-events",this.options.pointerEvents),!this.options.clickable&&!this.options.pointerEvents&&this._path.setAttribute("pointer-events","none"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray"),this.options.lineCap&&this._path.setAttribute("stroke-linecap",this.options.lineCap),this.options.lineJoin&&this._path.setAttribute("stroke-linejoin",this.options.lineJoin)):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var e=this.getPathString();e||(e="M0 0"),this._path.setAttribute("d",e)},_initEvents:function(){if(this.options.clickable){(i.Browser.svg||!i.Browser.vml)&&i.DomUtil.addClass(this._path,"leaflet-clickable"),i.DomEvent.on(this._container,"click",this._onMouseClick,this);var e=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"];for(var t=0;t<e.length;t++)i.DomEvent.on(this._container,e[t],this._fireMouseEvent,this)}},_onMouseClick:function(e){if(this._map.dragging&&this._map.dragging.moved())return;this._fireMouseEvent(e)},_fireMouseEvent:function(e){if(!this.hasEventListeners(e.type))return;var t=this._map,n=t.mouseEventToContainerPoint(e),r=t.containerPointToLayerPoint(n),s=t.layerPointToLatLng(r);this.fire(e.type,{latlng:s,layerPoint:r,containerPoint:n,originalEvent:e}),e.type==="contextmenu"&&i.DomEvent.preventDefault(e),e.type!=="mousemove"&&i.DomEvent.stopPropagation(e)}}),i.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=i.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&i.Browser.any3d?(i.DomUtil.addClass(this._pathRoot,"leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):i.DomUtil.addClass(this._pathRoot,"leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())},_animatePathZoom:function(e){var t=this.getZoomScale(e.zoom),n=this._getCenterOffset(e.center)._multiplyBy(-t)._add(this._pathViewport.min);this._pathRoot.style[i.DomUtil.TRANSFORM]=i.DomUtil.getTranslateString(n)+" scale("+t+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(this._pathZooming)return;this._updatePathViewport();var e=this._pathViewport,t=e.min,n=e.max,r=n.x-t.x,s=n.y-t.y,o=this._pathRoot,u=this._panes.overlayPane;i.Browser.mobileWebkit&&u.removeChild(o),i.DomUtil.setPosition(o,t),o.setAttribute("width",r),o.setAttribute("height",s),o.setAttribute("viewBox",[t.x,t.y,r,s].join(" ")),i.Browser.mobileWebkit&&u.appendChild(o)}}),i.Path.include({bindPopup:function(e,t){if(e instanceof i.Popup)this._popup=e;else{if(!this._popup||t)this._popup=new i.Popup(t,this);this._popup.setContent(e)}return this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(e){return this._popup&&(e=e||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:e})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(e){this._popup.setLatLng(e.latlng),this._map.openPopup(this._popup)}}),i.Browser.vml=!i.Browser.svg&&function(){try{var e=t.createElement("div");e.innerHTML='<v:shape adj="1"/>';var n=e.firstChild;return n.style.behavior="url(#default#VML)",n&&typeof n.adj=="object"}catch(r){return!1}}(),i.Path=i.Browser.svg||!i.Browser.vml?i.Path:i.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return t.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(e){return t.createElement("<lvml:"+e+' class="lvml">')}}catch(e){return function(e){return t.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var e=this._container=this._createElement("shape");i.DomUtil.addClass(e,"leaflet-vml-shape"+(this.options.className?" "+this.options.className:"")),this.options.clickable&&i.DomUtil.addClass(e,"leaflet-clickable"),e.coordsize="1 1",this._path=this._createElement("path"),e.appendChild(this._path),this._map._pathRoot.appendChild(e)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var e=this._stroke,t=this._fill,n=this.options,r=this._container;r.stroked=n.stroke,r.filled=n.fill,n.stroke?(e||(e=this._stroke=this._createElement("stroke"),e.endcap="round",r.appendChild(e)),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=i.Util.isArray(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",n.lineCap&&(e.endcap=n.lineCap.replace("butt","flat")),n.lineJoin&&(e.joinstyle=n.lineJoin)):e&&(r.removeChild(e),this._stroke=null),n.fill?(t||(t=this._fill=this._createElement("fill"),r.appendChild(t)),t.color=n.fillColor||n.color,t.opacity=n.fillOpacity):t&&(r.removeChild(t),this._fill=null)},_updatePath:function(){var e=this._container.style;e.display="none",this._path.v=this.getPathString()+" ",e.display=""}}),i.Map.include(i.Browser.svg||!i.Browser.vml?{}:{_initPathRoot:function(){if(this._pathRoot)return;var e=this._pathRoot=t.createElement("div");e.className="leaflet-vml-container",this._panes.overlayPane.appendChild(e),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}),i.Browser.canvas=function(){return!!t.createElement("canvas").getContext}(),i.Path=i.Path.SVG&&!e.L_PREFER_CANVAS||!i.Browser.canvas?i.Path:i.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(e){return i.setOptions(this,e),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(e){e.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&(this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this)),this._requestUpdate(),this.fire("remove"),this._map=null},_requestUpdate:function(){this._map&&!i.Path._updateRequest&&(i.
Path._updateRequest=i.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){i.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var e=this.options;e.stroke&&(this._ctx.lineWidth=e.weight,this._ctx.strokeStyle=e.color),e.fill&&(this._ctx.fillStyle=e.fillColor||e.color)},_drawPath:function(){var e,t,n,r,s,o;this._ctx.beginPath();for(e=0,n=this._parts.length;e<n;e++){for(t=0,r=this._parts[e].length;t<r;t++)s=this._parts[e][t],o=(t===0?"move":"line")+"To",this._ctx[o](s.x,s.y);this instanceof i.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(this._checkIfEmpty())return;var e=this._ctx,t=this.options;this._drawPath(),e.save(),this._updateStyle(),t.fill&&(e.globalAlpha=t.fillOpacity,e.fill()),t.stroke&&(e.globalAlpha=t.opacity,e.stroke()),e.restore()},_initEvents:function(){this.options.clickable&&(this._map.on("mousemove",this._onMouseMove,this),this._map.on("click",this._onClick,this))},_onClick:function(e){this._containsPoint(e.layerPoint)&&this.fire("click",e)},_onMouseMove:function(e){if(!this._map||this._map._animatingZoom)return;this._containsPoint(e.layerPoint)?(this._ctx.canvas.style.cursor="pointer",this._mouseInside=!0,this.fire("mouseover",e)):this._mouseInside&&(this._ctx.canvas.style.cursor="",this._mouseInside=!1,this.fire("mouseout",e))}}),i.Map.include(i.Path.SVG&&!e.L_PREFER_CANVAS||!i.Browser.canvas?{}:{_initPathRoot:function(){var e=this._pathRoot,n;e||(e=this._pathRoot=t.createElement("canvas"),e.style.position="absolute",n=this._canvasCtx=e.getContext("2d"),n.lineCap="round",n.lineJoin="round",this._panes.overlayPane.appendChild(e),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(this._pathZooming)return;this._updatePathViewport();var e=this._pathViewport,t=e.min,n=e.max.subtract(t),r=this._pathRoot;i.DomUtil.setPosition(r,t),r.width=n.x,r.height=n.y,r.getContext("2d").translate(-t.x,-t.y)}}),i.LineUtil={simplify:function(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=this._reducePoints(e,n),e=this._simplifyDP(e,n),e},pointToSegmentDistance:function(e,t,n){return Math.sqrt(this._sqClosestPointOnSegment(e,t,n,!0))},closestPointOnSegment:function(e,t,n){return this._sqClosestPointOnSegment(e,t,n)},_simplifyDP:function(e,t){var r=e.length,i=typeof Uint8Array!=n+""?Uint8Array:Array,s=new i(r);s[0]=s[r-1]=1,this._simplifyDPStep(e,s,t,0,r-1);var o,u=[];for(o=0;o<r;o++)s[o]&&u.push(e[o]);return u},_simplifyDPStep:function(e,t,n,r,i){var s=0,o,u,a;for(u=r+1;u<=i-1;u++)a=this._sqClosestPointOnSegment(e[u],e[r],e[i],!0),a>s&&(o=u,s=a);s>n&&(t[o]=1,this._simplifyDPStep(e,t,n,r,o),this._simplifyDPStep(e,t,n,o,i))},_reducePoints:function(e,t){var n=[e[0]];for(var r=1,i=0,s=e.length;r<s;r++)this._sqDist(e[r],e[i])>t&&(n.push(e[r]),i=r);return i<s-1&&n.push(e[s-1]),n},clipSegment:function(e,t,n,r){var i=r?this._lastCode:this._getBitCode(e,n),s=this._getBitCode(t,n),o,u,a;this._lastCode=s;for(;;){if(!(i|s))return[e,t];if(i&s)return!1;o=i||s,u=this._getEdgeIntersection(e,t,o,n),a=this._getBitCode(u,n),o===i?(e=u,i=a):(t=u,s=a)}},_getEdgeIntersection:function(e,t,n,r){var s=t.x-e.x,o=t.y-e.y,u=r.min,a=r.max;if(n&8)return new i.Point(e.x+s*(a.y-e.y)/o,a.y);if(n&4)return new i.Point(e.x+s*(u.y-e.y)/o,u.y);if(n&2)return new i.Point(a.x,e.y+o*(a.x-e.x)/s);if(n&1)return new i.Point(u.x,e.y+o*(u.x-e.x)/s)},_getBitCode:function(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n},_sqDist:function(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r},_sqClosestPointOnSegment:function(e,t,n,r){var s=t.x,o=t.y,u=n.x-s,a=n.y-o,f=u*u+a*a,l;return f>0&&(l=((e.x-s)*u+(e.y-o)*a)/f,l>1?(s=n.x,o=n.y):l>0&&(s+=u*l,o+=a*l)),u=e.x-s,a=e.y-o,r?u*u+a*a:new i.Point(s,o)}},i.Polyline=i.Path.extend({initialize:function(e,t){i.Path.prototype.initialize.call(this,t),this._latlngs=this._convertLatLngs(e)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var e=0,t=this._latlngs.length;e<t;e++)this._originalPoints[e]=this._map.latLngToLayerPoint(this._latlngs[e])},getPathString:function(){for(var e=0,t=this._parts.length,n="";e<t;e++)n+=this._getPathPartStr(this._parts[e]);return n},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._latlngs=this._convertLatLngs(e),this.redraw()},addLatLng:function(e){return this._latlngs.push(i.latLng(e)),this.redraw()},spliceLatLngs:function(){var e=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs,!0),this.redraw(),e},closestLayerPoint:function(e){var t=Infinity,n=this._parts,r,s,o=null;for(var u=0,a=n.length;u<a;u++){var f=n[u];for(var l=1,c=f.length;l<c;l++){r=f[l-1],s=f[l];var h=i.LineUtil._sqClosestPointOnSegment(e,r,s,!0);h<t&&(t=h,o=i.LineUtil._sqClosestPointOnSegment(e,r,s))}}return o&&(o.distance=Math.sqrt(t)),o},getBounds:function(){return new i.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(e,t){var n,r,s=t?e:[];for(n=0,r=e.length;n<r;n++){if(i.Util.isArray(e[n])&&typeof e[n][0]!="number")return;s[n]=i.latLng(e[n])}return s},_initEvents:function(){i.Path.prototype._initEvents.call(this)},_getPathPartStr:function(e){var t=i.Path.VML;for(var n=0,r=e.length,s="",o;n<r;n++)o=e[n],t&&o._round(),s+=(n?"L":"M")+o.x+" "+o.y;return s},_clipPoints:function(){var e=this._originalPoints,t=e.length,n,r,s;if(this.options.noClip){this._parts=[e];return}this._parts=[];var o=this._parts,u=this._map._pathViewport,a=i.LineUtil;for(n=0,r=0;n<t-1;n++){s=a.clipSegment(e[n],e[n+1],u,n);if(!s)continue;o[r]=o[r]||[],o[r].push(s[0]);if(s[1]!==e[n+1]||n===t-2)o[r].push(s[1]),r++}},_simplifyPoints:function(){var e=this._parts,t=i.LineUtil;for(var n=0,r=e.length;n<r;n++)e[n]=t.simplify(e[n],this.options.smoothFactor)},_updatePath:function(){if(!this._map)return;this._clipPoints(),this._simplifyPoints(),i.Path.prototype._updatePath.call(this)}}),i.polyline=function(e,t){return new i.Polyline(e,t)},i.PolyUtil={},i.PolyUtil.clipPolygon=function(e,t){var n,r=[1,4,2,8],s,o,u,a,f,l,c,h,p=i.LineUtil;for(s=0,l=e.length;s<l;s++)e[s]._code=p._getBitCode(e[s],t);for(u=0;u<4;u++){c=r[u],n=[];for(s=0,l=e.length,o=l-1;s<l;o=s++)a=e[s],f=e[o],a._code&c?f._code&c||(h=p._getEdgeIntersection(f,a,c,t),h._code=p._getBitCode(h,t),n.push(h)):(f._code&c&&(h=p._getEdgeIntersection(f,a,c,t),h._code=p._getBitCode(h,t),n.push(h)),n.push(a));e=n}return e},i.Polygon=i.Polyline.extend({options:{fill:!0},initialize:function(e,t){i.Polyline.prototype.initialize.call(this,e,t),this._initWithHoles(e)},_initWithHoles:function(e){var t,n,r;if(e&&i.Util.isArray(e[0])&&typeof e[0][0]!="number"){this._latlngs=this._convertLatLngs(e[0]),this._holes=e.slice(1);for(t=0,n=this._holes.length;t<n;t++)r=this._holes[t]=this._convertLatLngs(this._holes[t]),r[0].equals(r[r.length-1])&&r.pop()}e=this._latlngs,e.length>=2&&e[0].equals(e[e.length-1])&&e.pop()},projectLatlngs:function(){i.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[];if(!this._holes)return;var e,t,n,r;for(e=0,n=this._holes.length;e<n;e++){this._holePoints[e]=[];for(t=0,r=this._holes[e].length;t<r;t++)this._holePoints[e][t]=this._map.latLngToLayerPoint(this._holes[e][t])}},setLatLngs:function(e){return e&&i.Util.isArray(e[0])&&typeof e[0][0]!="number"?(this._initWithHoles(e),this.redraw()):i.Polyline.prototype.setLatLngs.call(this,e)},_clipPoints:function(){var e=this._originalPoints,t=[];this._parts=[e].concat(this._holePoints);if(this.options.noClip)return;for(var n=0,r=this._parts.length;n<r;n++){var s=i.PolyUtil.clipPolygon(this._parts[n],this._map._pathViewport);s.length&&t.push(s)}this._parts=t},_getPathPartStr:function(e){var t=i.Polyline.prototype._getPathPartStr.call(this,e);return t+(i.Browser.svg?"z":"x")}}),i.polygon=function(e,t){return new i.Polygon(e,t)},function(){function e(e){return i.FeatureGroup.extend({initialize:function(e,t){this._layers={},this._options=t,this.setLatLngs(e)},setLatLngs:function(t){var n=0,r=t.length;this.eachLayer(function(e){n<r?e.setLatLngs(t[n++]):this.removeLayer(e)},this);while(n<r)this.addLayer(new e(t[n++],this._options));return this},getLatLngs:function(){var e=[];return this.eachLayer(function(t){e.push(t.getLatLngs())}),e}})}i.MultiPolyline=e(i.Polyline),i.MultiPolygon=e(i.Polygon),i.multiPolyline=function(e,t){return new i.MultiPolyline(e,t)},i.multiPolygon=function(e,t){return new i.MultiPolygon(e,t)}}(),i.Rectangle=i.Polygon.extend({initialize:function(e,t){i.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=i.latLngBounds(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast()]}}),i.rectangle=function(e,t){return new i.Rectangle(e,t)},i.Circle=i.Path.extend({initialize:function(e,t,n){i.Path.prototype.initialize.call(this,n),this._latlng=i.latLng(e),this._mRadius=t},options:{fill:!0},setLatLng:function(e){return this._latlng=i.latLng(e),this.redraw()},setRadius:function(e){return this._mRadius=e,this.redraw()},projectLatlngs:function(){var e=this._getLngRadius(),t=this._latlng,n=this._map.latLngToLayerPoint([t.lat,t.lng-e]);this._point=this._map.latLngToLayerPoint(t),this._radius=Math.max(this._point.x-n.x,1)},getBounds:function(){var e=this._getLngRadius(),t=this._mRadius/40075017*360,n=this._latlng;return new i.LatLngBounds([n.lat-t,n.lng-e],[n.lat+t,n.lng+e])},getLatLng:function(){return this._latlng},getPathString:function(){var e=this._point,t=this._radius;return this._checkIfEmpty()?"":i.Browser.svg?"M"+e.x+","+(e.y-t)+"A"+t+","+t+",0,1,1,"+(e.x-.1)+","+(e.y-t)+" z":(e._round(),t=Math.round(t),"AL "+e.x+","+e.y+" "+t+","+t+" 0,"+23592600)},getRadius:function(){return this._mRadius},_getLatRadius:function(){return this._mRadius/40075017*360},_getLngRadius:function(){return this._getLatRadius()/Math.cos(i.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var e=this._map._pathViewport,t=this._radius,n=this._point;return n.x-t>e.max.x||n.y-t>e.max.y||n.x+t<e.min.x||n.y+t<e.min.y}}),i.circle=function(e,t,n){return new i.Circle(e,t,n)},i.CircleMarker=i.Circle.extend({options:{radius:10,weight:2},initialize:function(e,t){i.Circle.prototype.initialize.call(this,e,null,t),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){i.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setLatLng:function(e){return i.Circle.prototype.setLatLng.call(this,e),this._popup&&this._popup._isOpen&&this._popup.setLatLng(e),this},setRadius:function(e){return this.options.radius=this._radius=e,this.redraw()},getRadius:function(){return this._radius}}),i.circleMarker=function(e,t){return new i.CircleMarker(e,t)},i.Polyline.include(i.Path.CANVAS?{_containsPoint:function(e,t){var n,r,s,o,u,a,f,l=this.options.weight/2;i.Browser.touch&&(l+=10);for(n=0,o=this._parts.length;n<o;n++){f=this._parts[n];for(r=0,u=f.length,s=u-1;r<u;s=r++){if(!t&&r===0)continue;a=i.LineUtil.pointToSegmentDistance(e,f[s],f[r]);if(a<=l)return!0}}return!1}}:{}),i.Polygon.include(i.Path.CANVAS?{_containsPoint:function(e){var t=!1,n,r,s,o,u,a,f,l;if(i.Polyline.prototype._containsPoint.call(this,e,!0))return!0;for(o=0,f=this._parts.length;o<f;o++){n=this._parts[o];for(u=0,l=n.length,a=l-1;u<l;a=u++)r=n[u],s=n[a],r.y>e.y!=s.y>e.y&&e.x<(s.x-r.x)*(e.y-r.y)/(s.y-r.y)+r.x&&(t=!t)}return t}}:{}),i.Circle.include(i.Path.CANVAS?{_drawPath:function(){var e=this._point;this._ctx.beginPath(),this._ctx.arc(e.x,e.y,this._radius,0,Math.PI*2,!1)},_containsPoint:function(e){var t=this._point,n=this.options.stroke?this.options.weight/2:0;return e.distanceTo(t)<=this._radius+n}}:{}),i.CircleMarker.include(i.Path.CANVAS?{_updateStyle:function(){i.Path.prototype._updateStyle.call(this)}}:{}),i.GeoJSON=i.FeatureGroup.extend({initialize:function(e,t){i.setOptions(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t=i.Util.isArray(e)?e:e.features,n,r,s;if(t){for(n=0,r=t.length;n<r;n++)s=t[n],(s.geometries||s.geometry||s.features||s.coordinates)&&this.addData(t[n]);return this}var o=this.options;if(o.filter&&!o.filter(e))return;var u=i.GeoJSON.geometryToLayer(e,o.pointToLayer,o.coordsToLatLng,o);return u.feature=i.GeoJSON.asFeature(e),u.defaultOptions=u.options,this.resetStyle(u),o.onEachFeature&&o.onEachFeature(e,u),this.addLayer(u)},resetStyle:function(e){var t=this.options.style;t&&(i.Util.extend(e.options,e.defaultOptions),this._setLayerStyle(e,t))},setStyle:function(e){this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){typeof t=="function"&&(t=t(e.feature)),e.setStyle&&e.setStyle(t)}}),i.extend(i.GeoJSON,{geometryToLayer:function(e,t,n,r){var s=e.type==="Feature"?e.geometry:e,o=s.coordinates,u=[],a,f,l,c;n=n||this.coordsToLatLng;switch(s.type){case"Point":return a=n(o),t?t(e,a):new i.Marker(a);case"MultiPoint":for(l=0,c=o.length;l<c;l++)a=n(o[l]),u.push(t?t(e,a):new i.Marker(a));return new i.FeatureGroup(u);case"LineString":return f=this.coordsToLatLngs(o,0,n),new i.Polyline(f,r);case"Polygon":if(o.length===2&&!o[1].length)throw new Error("Invalid GeoJSON object.");return f=this.coordsToLatLngs(o,1,n),new i.Polygon(f,r);case"MultiLineString":return f=this.coordsToLatLngs(o,1,n),new i.MultiPolyline(f,r);case"MultiPolygon":return f=this.coordsToLatLngs(o,2,n),new i.MultiPolygon(f,r);case"GeometryCollection":for(l=0,c=s.geometries.length;l<c;l++)u.push(this.geometryToLayer({geometry:s.geometries[l],type:"Feature",properties:e.properties},t,n,r));return new i.FeatureGroup(u);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(e){return new i.LatLng(e[1],e[0],e[2])},coordsToLatLngs:function(e,t,n){var r,i,s,o=[];for(i=0,s=e.length;i<s;i++)r=t?this.coordsToLatLngs(e[i],t-1,n):(n||this.coordsToLatLng)(e[i]),o.push(r);return o},latLngToCoords:function(e){var t=[e.lng,e.lat];return e.alt!==n&&t.push(e.alt),t},latLngsToCoords:function(e){var t=[];for(var n=0,r=e.length;n<r;n++)t.push(i.GeoJSON.latLngToCoords(e[n]));return t},getFeature:function(e,t){return e.feature?i.extend({},e.feature,{geometry:t}):i.GeoJSON.asFeature(t)},asFeature:function(e){return e.type==="Feature"?e:{type:"Feature",properties:{},geometry:e}}});var o={toGeoJSON:function(){return i.GeoJSON.getFeature(this,{type:"Point",coordinates:i.GeoJSON.latLngToCoords(this.getLatLng())})}};i.Marker.include(o),i.Circle.include(o),i.CircleMarker.include(o),i.Polyline.include({toGeoJSON:function(){return i.GeoJSON.getFeature(this,{type:"LineString",coordinates:i.GeoJSON.latLngsToCoords(this.getLatLngs())})}}),i.Polygon.include({toGeoJSON:function(){var e=[i.GeoJSON.latLngsToCoords(this.getLatLngs())],t,n,r;e[0].push(e[0][0]);if(this._holes)for(t=0,n=this._holes.length;t<n;t++)r=i.GeoJSON.latLngsToCoords(this._holes[t]),r.push(r[0]),e.push(r);return i.GeoJSON.getFeature(this,{type:"Polygon",coordinates:e})}}),function(){function e(e){return function(){var t=[];return this.eachLayer(function(e){t.push(e.toGeoJSON().geometry.coordinates)}),i.GeoJSON.getFeature(this,{type:e,coordinates:t})}}i.MultiPolyline.include({toGeoJSON:e("MultiLineString")}),i.MultiPolygon.include({toGeoJSON:e("MultiPolygon")}),i.LayerGroup.include({toGeoJSON:function(){var t=this.feature&&this.feature.geometry,n=[],r;if(t&&t.type==="MultiPoint")return e("MultiPoint").call(this);var s=t&&t.type==="GeometryCollection";return this.eachLayer(function(e){e.toGeoJSON&&(r=e.toGeoJSON(),n.push(s?r.geometry:i.GeoJSON.asFeature(r)))}),s?i.GeoJSON.getFeature(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}})}(),i.geoJson=function(e,t){return new i.GeoJSON(e,t)},i.DomEvent={addListener:function(e,t,n,r){var s=i.stamp(n),o="_leaflet_"+t+s,u,a,f;return e[o]?this:(u=function(t){return n.call(r||e,t||i.DomEvent._getEvent())},i.Browser.pointer&&t.indexOf("touch")===0?this.addPointerListener(e,t,u,s):(i.Browser.touch&&t==="dblclick"&&this.addDoubleTapListener&&this.addDoubleTapListener(e,u,s),"addEventListener"in e?t==="mousewheel"?(e.addEventListener("DOMMouseScroll",u,!1),e.addEventListener(t,u,!1)):t==="mouseenter"||t==="mouseleave"?(a=u,f=t==="mouseenter"?"mouseover":"mouseout",u=function(t){if(!i.DomEvent._checkMouse(e,t))return;return a(t)},e.addEventListener(f,u,!1)):t==="click"&&i.Browser.android?(a=u,u=function(e){return i.DomEvent._filterClick(e,a)},e.addEventListener(t,u,!1)):e.addEventListener(t,u,!1):"attachEvent"in e&&e.attachEvent("on"+t,u),e[o]=u,this))},removeListener:function(e,t,n){var r=i.stamp(n),s="_leaflet_"+t+r,o=e[s];return o?(i.Browser.pointer&&t.indexOf("touch")===0?this.removePointerListener(e,t,r):i.Browser.touch&&t==="dblclick"&&this.removeDoubleTapListener?this.removeDoubleTapListener(e,r):"removeEventListener"in e?t==="mousewheel"?(e.removeEventListener("DOMMouseScroll",o,!1),e.removeEventListener(t,o,!1)):t==="mouseenter"||t==="mouseleave"?e.removeEventListener(t==="mouseenter"?"mouseover":"mouseout",o,!1):e.removeEventListener(t,o,!1):"detachEvent"in e&&e.detachEvent("on"+t,o),e[s]=null,this):this},stopPropagation:function(e){return e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,i.DomEvent._skipped(e),this},disableScrollPropagation:function(e){var t=i.DomEvent.stopPropagation;return i.DomEvent.on(e,"mousewheel",t).on(e,"MozMousePixelScroll",t)},disableClickPropagation:function(e){var t=i.DomEvent.stopPropagation;for(var n=i.Draggable.START.length-1;n>=0;n--)i.DomEvent.on(e,i.Draggable.START[n],t);return i.DomEvent.on(e,"click",i.DomEvent._fakeStop).on(e,"dblclick",t)},preventDefault:function(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this},stop:function(e){return i.DomEvent.preventDefault(e).stopPropagation(e)},getMousePosition:function(e,t){if(!t)return new i.Point(e.clientX,e.clientY);var n=t.getBoundingClientRect();return new i.Point(e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop)},getWheelDelta:function(e){var t=0;return e.wheelDelta&&(t=e.wheelDelta/120),e.detail&&(t=-e.detail/3),t},_skipEvents:{},_fakeStop:function(e){i.DomEvent._skipEvents[e.type]=!0},_skipped:function(e){var t=this._skipEvents[e.type];return this._skipEvents[e.type]=!1,t},_checkMouse:function(e,t){var n=t.relatedTarget;if(!n)return!0;try{while(n&&n!==e)n=n.parentNode}catch(r){return!1}return n!==e},_getEvent:function(){var t=e.event;if(!t){var n=arguments.callee.caller;while(n){t=n.arguments[0];if(t&&e.Event===t.constructor)break;n=n.caller}}return t},_filterClick:function(e,t){var n=e.timeStamp||e.originalEvent.timeStamp,r=i.DomEvent._lastClick&&n-i.DomEvent._lastClick;if(r&&r>100&&r<500||e.target._simulatedClick&&!e._simulated){i.DomEvent.stop(e);return}return i.DomEvent._lastClick=n,t(e)}},i.DomEvent.on=i.DomEvent.addListener,i.DomEvent.off=i.DomEvent.removeListener,i.Draggable=i.Class.extend({includes:i.Mixin.Events,statics:{START:i.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(e,t){this._element=e,this._dragStartTarget=t||e},enable:function(){if(this._enabled)return;for(var e=i.Draggable.START.length-1;e>=0;e--)i.DomEvent.on(this._dragStartTarget,i.Draggable.START[e],this._onDown,this);this._enabled=!0},disable:function(){if(!this._enabled)return;for(var e=i.Draggable.START.length-1;e>=0;e--)i.DomEvent.off(this._dragStartTarget,i.Draggable.START[e],this._onDown,this);this._enabled=!1,this._moved=!1},_onDown:function(e){this._moved=!1;if(e.shiftKey||e.which!==1&&e.button!==1&&!e.touches)return;i.DomEvent.stopPropagation(e);if(i.Draggable._disabled)return;i.DomUtil.disableImageDrag(),i.DomUtil.disableTextSelection();if(this._moving)return;var n=e.touches?e.touches[0]:e;this._startPoint=new i.Point(n.clientX,n.clientY),this._startPos=this._newPos=i.DomUtil.getPosition(this._element),i.DomEvent.on(t,i.Draggable.MOVE[e.type],this._onMove,this).on(t,i.Draggable.END[e.type],this._onUp,this)},_onMove:function(e){if(e.touches&&e.touches.length>1){this._moved=!0;return}var n=e.touches&&e.touches.length===1?e.touches[0]:e,r=new i.Point(n.clientX,n.clientY),s=r.subtract(this._startPoint);if(!s.x&&!s.y)return;if(i.Browser.touch&&Math.abs(s.x)+Math.abs(s.y)<3)return;i.DomEvent.preventDefault(e),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=i.DomUtil.getPosition(this._element).subtract(s),i.DomUtil.addClass(t.body,"leaflet-dragging"),this._lastTarget=e.target||e.srcElement,i.DomUtil.addClass(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,i.Util.cancelAnimFrame(this._animRequest),this._animRequest=i.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget)},_updatePosition:function(){this.fire("predrag"),i.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(){i.DomUtil.removeClass(t.body,"leaflet-dragging"),this._lastTarget&&(i.DomUtil.removeClass(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var e in i.Draggable.MOVE)i.DomEvent.off(t,i.Draggable.MOVE[e],this._onMove).off(t,i.Draggable.END[e],this._onUp);i.DomUtil.enableImageDrag(),i.DomUtil.enableTextSelection(),this._moved&&this._moving&&(i.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1}}),i.Handler=i.Class.extend({initialize:function(e){this._map=e},enable:function(){if(this._enabled)return;this._enabled=!0,this.addHooks()},disable:function(){if(!this._enabled)return;this._enabled=!1,this.removeHooks()},enabled:function(){return!!this._enabled}}),i.Map.mergeOptions({dragging:!0,inertia:!i.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:Infinity,inertiaThreshold:i.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:!1}),i.Map.Drag=i.Handler.extend({addHooks:function(){if(!this._draggable){var e=this._map;this._draggable=new i.Draggable(e._mapPane,e._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),e.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),e.on("viewreset",this._onViewReset,this),e.whenReady(this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var e=this._map;e._panAnim&&e._panAnim.stop(),e.fire("movestart").fire("dragstart"),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var e=this._lastTime=+(new Date),t=this._lastPos=this._draggable._newPos;this._positions.push(t),this._times.push(e),e-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var e=this._map.getSize()._divideBy(2),t=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=t.subtract(e).x,this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var e=this._worldWidth,t=Math.round(e/2),n=this._initialWorldOffset,r=this._draggable._newPos.x,i=(r-t+n)%e+t-n,s=(r+t+n)%e-t-n,o=Math.abs(i+n)<Math.abs(s+n)?i:s;this._draggable._newPos.x=o},_onDragEnd:function(e){var t=this._map,n=t.options,r=+(new Date)-this._lastTime,s=!n.inertia||r>n.inertiaThreshold||!this._positions[0];t.fire("dragend",e);if(s)t.fire("moveend");else{var o=this._lastPos.subtract(this._positions[0]),u=(this._lastTime+r-this._times[0])/1e3,a=n.easeLinearity,f=o.multiplyBy(a/u),l=f.distanceTo([0,0]),c=Math.min(n.inertiaMaxSpeed,l),h=f.multiplyBy(c/l),p=c/(n.inertiaDeceleration*a),d=h.multiplyBy(-p/2).round();!d.x||!d.y?t.fire("moveend"):(d=t._limitOffset(d,t.options.maxBounds),i.Util.requestAnimFrame(function(){t.panBy(d,{duration:p,easeLinearity:a,noMoveStart:!0})}))}}}),i.Map.addInitHook("addHandler","dragging",i.Map.Drag),i.Map.mergeOptions({doubleClickZoom:!0}),i.Map.DoubleClickZoom=i.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(e){var t=this._map,n=t.getZoom()+(e.originalEvent.shiftKey?-1:1);t.options.doubleClickZoom==="center"?t.setZoom(n):t.setZoomAround(e.containerPoint,n)}}),i.Map.addInitHook("addHandler","doubleClickZoom",i.Map.DoubleClickZoom),i.Map.mergeOptions({scrollWheelZoom:!0}),i.Map.ScrollWheelZoom=i.Handler.extend({addHooks:function(){i.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),i.DomEvent.on(this._map._container,"MozMousePixelScroll",i.DomEvent.preventDefault),this._delta=0},removeHooks:function(){i.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll),i.DomEvent.off(this._map._container,"MozMousePixelScroll",i.DomEvent.preventDefault)},_onWheelScroll:function(e){var t=i.DomEvent.getWheelDelta(e);this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),this._startTime||(this._startTime=+(new Date));var n=Math.max(40-(+(new Date)-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(i.bind(this._performZoom,this),n),i.DomEvent.preventDefault(e),i.DomEvent.stopPropagation(e)},_performZoom:function(){var e=this._map,t=this._delta,n=e.getZoom();t=t>0?Math.ceil(t):Math.floor(t),t=Math.max(Math.min(t,4),-4),t=e._limitZoom(n+t)-n,this._delta=0,this._startTime=null;if(!t)return;e.options.scrollWheelZoom==="center"?e.setZoom(n+t):e.setZoomAround(this._lastMousePos,n+t)}}),i.Map.addInitHook("addHandler","scrollWheelZoom",i.Map.ScrollWheelZoom),i.extend(i.DomEvent,{_touchstart:i.Browser.msPointer?"MSPointerDown":i.Browser.pointer?"pointerdown":"touchstart",_touchend:i.Browser.msPointer?"MSPointerUp":i.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(e,n,r){function p(e){var t;i.Browser.pointer?(h.push(e.pointerId),t=h.length):t=e.touches.length;if(t>1)return;var n=Date.now(),r=n-(s||n);a=e.touches?e.touches[0]:e,o=r>0&&r<=u,s=n}function d(e){if(i.Browser.pointer){var t=h.indexOf(e.pointerId);if(t===-1)return;h.splice(t,1)}if(o){if(i.Browser.pointer){var r={},u;for(var f in a)u=a[f],typeof u=="function"?r[f]=u.bind(a):r[f]=u;a=r}a.type="dblclick",n(a),s=null}}var s,o=!1,u=250,a,f="_leaflet_",l=this._touchstart,c=this._touchend,h=[];e[f+l+r]=p,e[f+c+r]=d;var v=i.Browser.pointer?t.documentElement:e;return e.addEventListener(l,p,!1),v.addEventListener(c,d,!1),i.Browser.pointer&&v.addEventListener(i.DomEvent.POINTER_CANCEL,d,!1),this},removeDoubleTapListener:function(e,n){var r="_leaflet_";return e.removeEventListener(this._touchstart,e[r+this._touchstart+n],!1),(i.Browser.pointer?t.documentElement:e).removeEventListener(this._touchend,e[r+this._touchend+n],!1),i.Browser.pointer&&t.documentElement.removeEventListener(i.DomEvent.POINTER_CANCEL,e[r+this._touchend+n],!1),this}}),i.extend(i.DomEvent,{POINTER_DOWN:i.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:i.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:i.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:i.Browser.msPointer?"MSPointerCancel":"pointercancel",_pointers:[],_pointerDocumentListener:!1,addPointerListener:function(e,t,n,r){switch(t){case"touchstart":return this.addPointerListenerStart(e,t,n,r);case"touchend":return this.addPointerListenerEnd(e,t,n,r);case"touchmove":return this.addPointerListenerMove(e,t,n,r);default:throw"Unknown touch event type"}},addPointerListenerStart:function(e,n,r,s){var o="_leaflet_",u=this._pointers,a=function(e){i.DomEvent.preventDefault(e);var t=!1;for(var n=0;n<u.length;n++)if(u[n].pointerId===e.pointerId){t=!0;break}t||u.push(e),e.touches=u.slice(),e.changedTouches=[e],r(e)};e[o+"touchstart"+s]=a,e.addEventListener(this.POINTER_DOWN,a,!1);if(!this._pointerDocumentListener){var f=function(e){for(var t=0;t<u.length;t++)if(u[t].pointerId===e.pointerId){u.splice(t,1);break}};t.documentElement.addEventListener(this.POINTER_UP,f,!1),t.documentElement.addEventListener(this.POINTER_CANCEL,f,!1),this._pointerDocumentListener=!0}return this},addPointerListenerMove:function(e,t,n,r){function o(e){if((e.pointerType===e.MSPOINTER_TYPE_MOUSE||e.pointerType==="mouse")&&e.buttons===0)return;for(var t=0;t<s.length;t++)if(s[t].pointerId===e.pointerId){s[t]=e;break}e.touches=s.slice(),e.changedTouches=[e],n(e)}var i="_leaflet_",s=this._pointers;return e[i+"touchmove"+r]=o,e.addEventListener(this.POINTER_MOVE,o,!1),this},addPointerListenerEnd:function(e,t,n,r){var i="_leaflet_",s=this._pointers,o=function(e){for(var t=0;t<s.length;t++)if(s[t].pointerId===e.pointerId){s.splice(t,1);break}e.touches=s.slice(),e.changedTouches=[e],n(e)};return e[i+"touchend"+r]=o,e.addEventListener(this.POINTER_UP,o,!1),e.addEventListener(this.POINTER_CANCEL,o,!1),this},removePointerListener:function(e,t,n){var r="_leaflet_",i=e[r+t+n];switch(t){case"touchstart":e.removeEventListener(this.POINTER_DOWN,i,!1);break;case"touchmove":e.removeEventListener(this.POINTER_MOVE,i,!1);break;case"touchend":e.removeEventListener(this.POINTER_UP,i,!1),e.removeEventListener(this.POINTER_CANCEL,i,!1)}return this}}),i.Map.mergeOptions({touchZoom:i.Browser.touch&&!i.Browser.android23,bounceAtZoomLimits:!0}),i.Map.TouchZoom=i.Handler.extend({addHooks:function(){i.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){i.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(e){var n=this._map;if(!e.touches||e.touches.length!==2||n._animatingZoom||this._zooming)return;var r=n.mouseEventToLayerPoint(e.touches[0]),s=n.mouseEventToLayerPoint(e.touches[1]),o=n._getCenterLayerPoint();this._startCenter=r.add(s)._divideBy(2),this._startDist=r.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=o.subtract(this._startCenter),n._panAnim&&n._panAnim.stop(),i.DomEvent.on(t,"touchmove",this._onTouchMove,this).on(t,"touchend",this._onTouchEnd,this),i.DomEvent.preventDefault(e)},_onTouchMove:function(e){var t=this._map;if(!e.touches||e.touches.length!==2||!this._zooming)return;var n=t.mouseEventToLayerPoint(e.touches[0]),r=t.mouseEventToLayerPoint(e.touches[1]);this._scale=n.distanceTo(r)/this._startDist,this._delta=n._add(r)._divideBy(2)._subtract(this._startCenter);if(this._scale===1)return;if(!t.options.bounceAtZoomLimits)if(t.getZoom()===t.getMinZoom()&&this._scale<1||t.getZoom()===t.getMaxZoom()&&this._scale>1)return;this._moved||(i.DomUtil.addClass(t._mapPane,"leaflet-touching"),t.fire("movestart").fire("zoomstart"),this._moved=!0),i.Util.cancelAnimFrame(this._animRequest),this._animRequest=i.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),i.DomEvent.preventDefault(e)},_updateOnMove:function(){var e=this._map,t=this._getScaleOrigin(),n=e.layerPointToLatLng(t),r=e.getScaleZoom(this._scale);e._animateZoom(n,r,this._startCenter,this._scale,this._delta,!1,!0)},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}var e=this._map;this._zooming=!1,i.DomUtil.removeClass(e._mapPane,"leaflet-touching"),i.Util.cancelAnimFrame(this._animRequest),i.DomEvent.off(t,"touchmove",this._onTouchMove).off(t,"touchend",this._onTouchEnd);var n=this._getScaleOrigin(),r=e.layerPointToLatLng(n),s=e.getZoom(),o=e.getScaleZoom(this._scale)-s,u=o>0?Math.ceil(o):Math.floor(o),a=e._limitZoom(s+u),f=e.getZoomScale(a)/this._scale;e._animateZoom(r,a,n,f)},_getScaleOrigin:function(){var e=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(e)}}),i.Map.addInitHook("addHandler","touchZoom",i.Map.TouchZoom),i.Map.mergeOptions({tap:!0,tapTolerance:15}),i.Map.Tap=i.Handler.extend({addHooks:function(){i.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){i.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(e){if(!e.touches)return;i.DomEvent.preventDefault(e),this._fireClick=!0;if(e.touches.length>1){this._fireClick=!1,clearTimeout(this._holdTimeout);return}var n=e.touches[0],r=n.target;this._startPos=this._newPos=new i.Point(n.clientX,n.clientY),r.tagName&&r.tagName.toLowerCase()==="a"&&i.DomUtil.addClass(r,"leaflet-active"),this._holdTimeout=setTimeout(i.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",n))},this),1e3),i.DomEvent.on(t,"touchmove",this._onMove,this).on(t,"touchend",this._onUp,this
)},_onUp:function(e){clearTimeout(this._holdTimeout),i.DomEvent.off(t,"touchmove",this._onMove,this).off(t,"touchend",this._onUp,this);if(this._fireClick&&e&&e.changedTouches){var n=e.changedTouches[0],r=n.target;r&&r.tagName&&r.tagName.toLowerCase()==="a"&&i.DomUtil.removeClass(r,"leaflet-active"),this._isTapValid()&&this._simulateEvent("click",n)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(e){var t=e.touches[0];this._newPos=new i.Point(t.clientX,t.clientY)},_simulateEvent:function(n,r){var i=t.createEvent("MouseEvents");i._simulated=!0,r.target._simulatedClick=!0,i.initMouseEvent(n,!0,!0,e,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),r.target.dispatchEvent(i)}}),i.Browser.touch&&!i.Browser.pointer&&i.Map.addInitHook("addHandler","tap",i.Map.Tap),i.Map.mergeOptions({boxZoom:!0}),i.Map.BoxZoom=i.Handler.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane,this._moved=!1},addHooks:function(){i.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){i.DomEvent.off(this._container,"mousedown",this._onMouseDown),this._moved=!1},moved:function(){return this._moved},_onMouseDown:function(e){this._moved=!1;if(!e.shiftKey||e.which!==1&&e.button!==1)return!1;i.DomUtil.disableTextSelection(),i.DomUtil.disableImageDrag(),this._startLayerPoint=this._map.mouseEventToLayerPoint(e),i.DomEvent.on(t,"mousemove",this._onMouseMove,this).on(t,"mouseup",this._onMouseUp,this).on(t,"keydown",this._onKeyDown,this)},_onMouseMove:function(e){this._moved||(this._box=i.DomUtil.create("div","leaflet-zoom-box",this._pane),i.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",this._map.fire("boxzoomstart"));var t=this._startLayerPoint,n=this._box,r=this._map.mouseEventToLayerPoint(e),s=r.subtract(t),o=new i.Point(Math.min(r.x,t.x),Math.min(r.y,t.y));i.DomUtil.setPosition(n,o),this._moved=!0,n.style.width=Math.max(0,Math.abs(s.x)-4)+"px",n.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._moved&&(this._pane.removeChild(this._box),this._container.style.cursor=""),i.DomUtil.enableTextSelection(),i.DomUtil.enableImageDrag(),i.DomEvent.off(t,"mousemove",this._onMouseMove).off(t,"mouseup",this._onMouseUp).off(t,"keydown",this._onKeyDown)},_onMouseUp:function(e){this._finish();var t=this._map,n=t.mouseEventToLayerPoint(e);if(this._startLayerPoint.equals(n))return;var r=new i.LatLngBounds(t.layerPointToLatLng(this._startLayerPoint),t.layerPointToLatLng(n));t.fitBounds(r),t.fire("boxzoomend",{boxZoomBounds:r})},_onKeyDown:function(e){e.keyCode===27&&this._finish()}}),i.Map.addInitHook("addHandler","boxZoom",i.Map.BoxZoom),i.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),i.Map.Keyboard=i.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,173]},initialize:function(e){this._map=e,this._setPanOffset(e.options.keyboardPanOffset),this._setZoomOffset(e.options.keyboardZoomOffset)},addHooks:function(){var e=this._map._container;e.tabIndex===-1&&(e.tabIndex="0"),i.DomEvent.on(e,"focus",this._onFocus,this).on(e,"blur",this._onBlur,this).on(e,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var e=this._map._container;i.DomEvent.off(e,"focus",this._onFocus,this).off(e,"blur",this._onBlur,this).off(e,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(this._focused)return;var n=t.body,r=t.documentElement,i=n.scrollTop||r.scrollTop,s=n.scrollLeft||r.scrollLeft;this._map._container.focus(),e.scrollTo(s,i)},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(e){var t=this._panKeys={},n=this.keyCodes,r,i;for(r=0,i=n.left.length;r<i;r++)t[n.left[r]]=[-1*e,0];for(r=0,i=n.right.length;r<i;r++)t[n.right[r]]=[e,0];for(r=0,i=n.down.length;r<i;r++)t[n.down[r]]=[0,e];for(r=0,i=n.up.length;r<i;r++)t[n.up[r]]=[0,-1*e]},_setZoomOffset:function(e){var t=this._zoomKeys={},n=this.keyCodes,r,i;for(r=0,i=n.zoomIn.length;r<i;r++)t[n.zoomIn[r]]=e;for(r=0,i=n.zoomOut.length;r<i;r++)t[n.zoomOut[r]]=-e},_addHooks:function(){i.DomEvent.on(t,"keydown",this._onKeyDown,this)},_removeHooks:function(){i.DomEvent.off(t,"keydown",this._onKeyDown,this)},_onKeyDown:function(e){var t=e.keyCode,n=this._map;if(t in this._panKeys){if(n._panAnim&&n._panAnim._inProgress)return;n.panBy(this._panKeys[t]),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds)}else{if(!(t in this._zoomKeys))return;n.setZoom(n.getZoom()+this._zoomKeys[t])}i.DomEvent.stop(e)}}),i.Map.addInitHook("addHandler","keyboard",i.Map.Keyboard),i.Handler.MarkerDrag=i.Handler.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||(this._draggable=new i.Draggable(e,e)),this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),this._draggable.enable(),i.DomUtil.addClass(this._marker._icon,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),this._draggable.disable(),i.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var e=this._marker,t=e._shadow,n=i.DomUtil.getPosition(e._icon),r=e._map.layerPointToLatLng(n);t&&i.DomUtil.setPosition(t,n),e._latlng=r,e.fire("move",{latlng:r}).fire("drag")},_onDragEnd:function(e){this._marker.fire("moveend").fire("dragend",e)}}),i.Control=i.Class.extend({options:{position:"topright"},initialize:function(e){i.setOptions(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},getContainer:function(){return this._container},addTo:function(e){this._map=e;var t=this._container=this.onAdd(e),n=this.getPosition(),r=e._controlCorners[n];return i.DomUtil.addClass(t,"leaflet-control"),n.indexOf("bottom")!==-1?r.insertBefore(t,r.firstChild):r.appendChild(t),this},removeFrom:function(e){var t=this.getPosition(),n=e._controlCorners[t];return n.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(e),this},_refocusOnMap:function(){this._map&&this._map.getContainer().focus()}}),i.control=function(e){return new i.Control(e)},i.Map.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.removeFrom(this),this},_initControlPos:function(){function r(r,s){var o=t+r+" "+t+s;e[r+s]=i.DomUtil.create("div",o,n)}var e=this._controlCorners={},t="leaflet-",n=this._controlContainer=i.DomUtil.create("div",t+"control-container",this._container);r("top","left"),r("top","right"),r("bottom","left"),r("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}}),i.Control.Zoom=i.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(e){var t="leaflet-control-zoom",n=i.DomUtil.create("div",t+" leaflet-bar");return this._map=e,this._zoomInButton=this._createButton(this.options.zoomInText,this.options.zoomInTitle,t+"-in",n,this._zoomIn,this),this._zoomOutButton=this._createButton(this.options.zoomOutText,this.options.zoomOutTitle,t+"-out",n,this._zoomOut,this),this._updateDisabled(),e.on("zoomend zoomlevelschange",this._updateDisabled,this),n},onRemove:function(e){e.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(e){this._map.zoomIn(e.shiftKey?3:1)},_zoomOut:function(e){this._map.zoomOut(e.shiftKey?3:1)},_createButton:function(e,t,n,r,s,o){var u=i.DomUtil.create("a",n,r);u.innerHTML=e,u.href="#",u.title=t;var a=i.DomEvent.stopPropagation;return i.DomEvent.on(u,"click",a).on(u,"mousedown",a).on(u,"dblclick",a).on(u,"click",i.DomEvent.preventDefault).on(u,"click",s,o).on(u,"click",this._refocusOnMap,o),u},_updateDisabled:function(){var e=this._map,t="leaflet-disabled";i.DomUtil.removeClass(this._zoomInButton,t),i.DomUtil.removeClass(this._zoomOutButton,t),e._zoom===e.getMinZoom()&&i.DomUtil.addClass(this._zoomOutButton,t),e._zoom===e.getMaxZoom()&&i.DomUtil.addClass(this._zoomInButton,t)}}),i.Map.mergeOptions({zoomControl:!0}),i.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new i.Control.Zoom,this.addControl(this.zoomControl))}),i.control.zoom=function(e){return new i.Control.Zoom(e)},i.Control.Attribution=i.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(e){i.setOptions(this,e),this._attributions={}},onAdd:function(e){this._container=i.DomUtil.create("div","leaflet-control-attribution"),i.DomEvent.disableClickPropagation(this._container);for(var t in e._layers)e._layers[t].getAttribution&&this.addAttribution(e._layers[t].getAttribution());return e.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(e){e.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){if(!e)return;return this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this},removeAttribution:function(e){if(!e)return;return this._attributions[e]&&(this._attributions[e]--,this._update()),this},_update:function(){if(!this._map)return;var e=[];for(var t in this._attributions)this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(", ")),this._container.innerHTML=n.join(" | ")},_onLayerAdd:function(e){e.layer.getAttribution&&this.addAttribution(e.layer.getAttribution())},_onLayerRemove:function(e){e.layer.getAttribution&&this.removeAttribution(e.layer.getAttribution())}}),i.Map.mergeOptions({attributionControl:!0}),i.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new i.Control.Attribution).addTo(this))}),i.control.attribution=function(e){return new i.Control.Attribution(e)},i.Control.Scale=i.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(e){this._map=e;var t="leaflet-control-scale",n=i.DomUtil.create("div",t),r=this.options;return this._addScales(r,t,n),e.on(r.updateWhenIdle?"moveend":"move",this._update,this),e.whenReady(this._update,this),n},onRemove:function(e){e.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(e,t,n){e.metric&&(this._mScale=i.DomUtil.create("div",t+"-line",n)),e.imperial&&(this._iScale=i.DomUtil.create("div",t+"-line",n))},_update:function(){var e=this._map.getBounds(),t=e.getCenter().lat,n=6378137*Math.PI*Math.cos(t*Math.PI/180),r=n*(e.getNorthEast().lng-e.getSouthWest().lng)/180,i=this._map.getSize(),s=this.options,o=0;i.x>0&&(o=r*(s.maxWidth/i.x)),this._updateScales(s,o)},_updateScales:function(e,t){e.metric&&t&&this._updateMetric(t),e.imperial&&t&&this._updateImperial(t)},_updateMetric:function(e){var t=this._getRoundNum(e);this._mScale.style.width=this._getScaleWidth(t/e)+"px",this._mScale.innerHTML=t<1e3?t+" m":t/1e3+" km"},_updateImperial:function(e){var t=e*3.2808399,n=this._iScale,r,i,s;t>5280?(r=t/5280,i=this._getRoundNum(r),n.style.width=this._getScaleWidth(i/r)+"px",n.innerHTML=i+" mi"):(s=this._getRoundNum(t),n.style.width=this._getScaleWidth(s/t)+"px",n.innerHTML=s+" ft")},_getScaleWidth:function(e){return Math.round(this.options.maxWidth*e)-10},_getRoundNum:function(e){var t=Math.pow(10,(Math.floor(e)+"").length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),i.control.scale=function(e){return new i.Control.Scale(e)},i.Control.Layers=i.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(e,t,n){i.setOptions(this,n),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var r in e)this._addLayer(e[r],r);for(r in t)this._addLayer(t[r],r,!0)},onAdd:function(e){return this._initLayout(),this._update(),e.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(e){e.off("layeradd",this._onLayerChange,this).off("layerremove",this._onLayerChange,this)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._update(),this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._update(),this},removeLayer:function(e){var t=i.stamp(e);return delete this._layers[t],this._update(),this},_initLayout:function(){var e="leaflet-control-layers",t=this._container=i.DomUtil.create("div",e);t.setAttribute("aria-haspopup",!0),i.Browser.touch?i.DomEvent.on(t,"click",i.DomEvent.stopPropagation):i.DomEvent.disableClickPropagation(t).disableScrollPropagation(t);var n=this._form=i.DomUtil.create("form",e+"-list");if(this.options.collapsed){i.Browser.android||i.DomEvent.on(t,"mouseover",this._expand,this).on(t,"mouseout",this._collapse,this);var r=this._layersLink=i.DomUtil.create("a",e+"-toggle",t);r.href="#",r.title="Layers",i.Browser.touch?i.DomEvent.on(r,"click",i.DomEvent.stop).on(r,"click",this._expand,this):i.DomEvent.on(r,"focus",this._expand,this),i.DomEvent.on(n,"click",function(){setTimeout(i.bind(this._onInputClick,this),0)},this),this._map.on("click",this._collapse,this)}else this._expand();this._baseLayersList=i.DomUtil.create("div",e+"-base",n),this._separator=i.DomUtil.create("div",e+"-separator",n),this._overlaysList=i.DomUtil.create("div",e+"-overlays",n),t.appendChild(n)},_addLayer:function(e,t,n){var r=i.stamp(e);this._layers[r]={layer:e,name:t,overlay:n},this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex))},_update:function(){if(!this._container)return;this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var e=!1,t=!1,n,r;for(n in this._layers)r=this._layers[n],this._addItem(r),t=t||r.overlay,e=e||!r.overlay;this._separator.style.display=t&&e?"":"none"},_onLayerChange:function(e){var t=this._layers[i.stamp(e.layer)];if(!t)return;this._handlingClick||this._update();var n=t.overlay?e.type==="layeradd"?"overlayadd":"overlayremove":e.type==="layeradd"?"baselayerchange":null;n&&this._map.fire(n,t)},_createRadioElement:function(e,n){var r='<input type="radio" class="leaflet-control-layers-selector" name="'+e+'"';n&&(r+=' checked="checked"'),r+="/>";var i=t.createElement("div");return i.innerHTML=r,i.firstChild},_addItem:function(e){var n=t.createElement("label"),r,s=this._map.hasLayer(e.layer);e.overlay?(r=t.createElement("input"),r.type="checkbox",r.className="leaflet-control-layers-selector",r.defaultChecked=s):r=this._createRadioElement("leaflet-base-layers",s),r.layerId=i.stamp(e.layer),i.DomEvent.on(r,"click",this._onInputClick,this);var o=t.createElement("span");o.innerHTML=" "+e.name,n.appendChild(r),n.appendChild(o);var u=e.overlay?this._overlaysList:this._baseLayersList;return u.appendChild(n),n},_onInputClick:function(){var e,t,n,r=this._form.getElementsByTagName("input"),i=r.length;this._handlingClick=!0;for(e=0;e<i;e++)t=r[e],n=this._layers[t.layerId],t.checked&&!this._map.hasLayer(n.layer)?this._map.addLayer(n.layer):!t.checked&&this._map.hasLayer(n.layer)&&this._map.removeLayer(n.layer);this._handlingClick=!1,this._refocusOnMap()},_expand:function(){i.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),i.control.layers=function(e,t,n){return new i.Control.Layers(e,t,n)},i.PosAnimation=i.Class.extend({includes:i.Mixin.Events,run:function(e,t,n,r){this.stop(),this._el=e,this._inProgress=!0,this._newPos=t,this.fire("start"),e.style[i.DomUtil.TRANSITION]="all "+(n||.25)+"s cubic-bezier(0,0,"+(r||.5)+",1)",i.DomEvent.on(e,i.DomUtil.TRANSITION_END,this._onTransitionEnd,this),i.DomUtil.setPosition(e,t),i.Util.falseFn(e.offsetWidth),this._stepTimer=setInterval(i.bind(this._onStep,this),50)},stop:function(){if(!this._inProgress)return;i.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),i.Util.falseFn(this._el.offsetWidth)},_onStep:function(){var e=this._getPos();if(!e){this._onTransitionEnd();return}this._el._leaflet_pos=e,this.fire("step")},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var t,n,r,s=this._el,o=e.getComputedStyle(s);if(i.Browser.any3d){r=o[i.DomUtil.TRANSFORM].match(this._transformRe);if(!r)return;t=parseFloat(r[1]),n=parseFloat(r[2])}else t=parseFloat(o.left),n=parseFloat(o.top);return new i.Point(t,n,!0)},_onTransitionEnd:function(){i.DomEvent.off(this._el,i.DomUtil.TRANSITION_END,this._onTransitionEnd,this);if(!this._inProgress)return;this._inProgress=!1,this._el.style[i.DomUtil.TRANSITION]="",this._el._leaflet_pos=this._newPos,clearInterval(this._stepTimer),this.fire("step").fire("end")}}),i.Map.include({setView:function(e,t,r){t=t===n?this._zoom:this._limitZoom(t),e=this._limitCenter(i.latLng(e),t,this.options.maxBounds),r=r||{},this._panAnim&&this._panAnim.stop();if(this._loaded&&!r.reset&&r!==!0){r.animate!==n&&(r.zoom=i.extend({animate:r.animate},r.zoom),r.pan=i.extend({animate:r.animate},r.pan));var s=this._zoom!==t?this._tryAnimatedZoom&&this._tryAnimatedZoom(e,t,r.zoom):this._tryAnimatedPan(e,r.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(e,t),this},panBy:function(e,t){e=i.point(e).round(),t=t||{};if(!e.x&&!e.y)return this;this._panAnim||(this._panAnim=new i.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),t.noMoveStart||this.fire("movestart");if(t.animate!==!1){i.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var n=this._getMapPanePos().subtract(e);this._panAnim.run(this._mapPane,n,t.duration||.25,t.easeLinearity)}else this._rawPanBy(e),this.fire("move").fire("moveend");return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){i.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(e,t){var n=this._getCenterOffset(e)._floor();return(t&&t.animate)!==!0&&!this.getSize().contains(n)?!1:(this.panBy(n,t),!0)}}),i.PosAnimation=i.DomUtil.TRANSITION?i.PosAnimation:i.PosAnimation.extend({run:function(e,t,n,r){this.stop(),this._el=e,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(r||.5,.2),this._startPos=i.DomUtil.getPosition(e),this._offset=t.subtract(this._startPos),this._startTime=+(new Date),this.fire("start"),this._animate()},stop:function(){if(!this._inProgress)return;this._step(),this._complete()},_animate:function(){this._animId=i.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var e=+(new Date)-this._startTime,t=this._duration*1e3;e<t?this._runFrame(this._easeOut(e/t)):(this._runFrame(1),this._complete())},_runFrame:function(e){var t=this._startPos.add(this._offset.multiplyBy(e));i.DomUtil.setPosition(this._el,t),this.fire("step")},_complete:function(){i.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(e){return 1-Math.pow(1-e,this._easeOutPower)}}),i.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4}),i.DomUtil.TRANSITION&&i.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&i.DomUtil.TRANSITION&&i.Browser.any3d&&!i.Browser.android23&&!i.Browser.mobileOpera,this._zoomAnimated&&i.DomEvent.on(this._mapPane,i.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),i.Map.include(i.DomUtil.TRANSITION?{_catchTransitionEnd:function(e){this._animatingZoom&&e.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(e,t,n){if(this._animatingZoom)return!0;n=n||{};if(!this._zoomAnimated||n.animate===!1||this._nothingToAnimate()||Math.abs(t-this._zoom)>this.options.zoomAnimationThreshold)return!1;var r=this.getZoomScale(t),i=this._getCenterOffset(e)._divideBy(1-1/r),s=this._getCenterLayerPoint()._add(i);return n.animate!==!0&&!this.getSize().contains(i)?!1:(this.fire("movestart").fire("zoomstart"),this._animateZoom(e,t,s,r,null,!0),!0)},_animateZoom:function(e,t,n,r,s,o,u){u||(this._animatingZoom=!0),i.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this._animateToCenter=e,this._animateToZoom=t,i.Draggable&&(i.Draggable._disabled=!0),i.Util.requestAnimFrame(function(){this.fire("zoomanim",{center:e,zoom:t,origin:n,scale:r,delta:s,backwards:o})},this)},_onZoomTransitionEnd:function(){this._animatingZoom=!1,i.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),i.Draggable&&(i.Draggable._disabled=!1)}}:{}),i.TileLayer.include({_animateZoom:function(e){this._animating||(this._animating=!0,this._prepareBgBuffer());var t=this._bgBuffer,n=i.DomUtil.TRANSFORM,r=e.delta?i.DomUtil.getTranslateString(e.delta):t.style[n],s=i.DomUtil.getScaleString(e.scale,e.origin);t.style[n]=e.backwards?s+" "+r:r+" "+s},_endZoomAnim:function(){var e=this._tileContainer,t=this._bgBuffer;e.style.visibility="",e.parentNode.appendChild(e),i.Util.falseFn(t.offsetWidth),this._animating=!1},_clearBgBuffer:function(){var e=this._map;e&&!e._animatingZoom&&!e.touchZoom._zooming&&(this._bgBuffer.innerHTML="",this._bgBuffer.style[i.DomUtil.TRANSFORM]="")},_prepareBgBuffer:function(){var e=this._tileContainer,t=this._bgBuffer,n=this._getLoadedTilesPercentage(t),r=this._getLoadedTilesPercentage(e);if(t&&n>.5&&r<.5){e.style.visibility="hidden",this._stopLoadingImages(e);return}t.style.visibility="hidden",t.style[i.DomUtil.TRANSFORM]="",this._tileContainer=t,t=this._bgBuffer=e,this._stopLoadingImages(t),clearTimeout(this._clearBgBufferTimer)},_getLoadedTilesPercentage:function(e){var t=e.getElementsByTagName("img"),n,r,i=0;for(n=0,r=t.length;n<r;n++)t[n].complete&&i++;return i/r},_stopLoadingImages:function(e){var t=Array.prototype.slice.call(e.getElementsByTagName("img")),n,r,s;for(n=0,r=t.length;n<r;n++)s=t[n],s.complete||(s.onload=i.Util.falseFn,s.onerror=i.Util.falseFn,s.src=i.Util.emptyImageUrl,s.parentNode.removeChild(s))}}),i.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:Infinity,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(e){e=this._locateOptions=i.extend(this._defaultLocateOptions,e);if(!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var t=i.bind(this._handleGeolocationResponse,this),n=i.bind(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,n,e):navigator.geolocation.getCurrentPosition(t,n,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(e){var t=e.code,n=e.message||(t===1?"permission denied":t===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:t,message:"Geolocation error: "+n+"."})},_handleGeolocationResponse:function(e){var t=e.coords.latitude,n=e.coords.longitude,r=new i.LatLng(t,n),s=180*e.coords.accuracy/40075017,o=s/Math.cos(i.LatLng.DEG_TO_RAD*t),u=i.latLngBounds([t-s,n-o],[t+s,n+o]),a=this._locateOptions;if(a.setView){var f=Math.min(this.getBoundsZoom(u),a.maxZoom);this.setView(r,f)}var l={latlng:r,bounds:u,timestamp:e.timestamp};for(var c in e.coords)typeof e.coords[c]=="number"&&(l[c]=e.coords[c]);this.fire("locationfound",l)}})}(window,document),!function(e,t,n){t[e]=n(e,t)}("bean",this,function(e,t){var n=window,r=t[e],i=/over|out/,s=/[^\.]*(?=\..*)\.|.*/,o=/\..*/,u="addEventListener",a="attachEvent",f="removeEventListener",l="detachEvent",c=document||{},h=c.documentElement||{},p=h[u],d=p?u:a,v=Array.prototype.slice,m=/click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,g=/mouse.*(wheel|scroll)/i,y=/^text/i,b=/^touch|^gesture/i,w={one:1},E=function(e,t,n){for(n=0;n<t.length;n++)e[t[n]]=1;return e}({},("click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange error abort scroll "+(p?"show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend MSPointerUp MSPointerDown MSPointerCancel MSPointerMove MSPointerOver MSPointerOut message readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ":"")).split(" ")),S=function(){function e(e,t){while((t=t.parentNode)!==null)if(t===e)return!0;return!1}function t(t){var n=t.relatedTarget;return n?n!==this&&n.prefix!=="xul"&&!/document/.test(this.toString())&&!e(this,n):n===null}return{mouseenter:{base:"mouseover",condition:t},mouseleave:{base:"mouseout",condition:t},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}}}(),x=function(){var e="altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which".split(" "),t=e.concat("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" ")),n=t.concat("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis".split(" ")),r=e.concat("char charCode key keyCode keyIdentifier keyLocation".split(" ")),s=e.concat(["data"]),o=e.concat("touches targetTouches changedTouches scale rotation".split(" ")),u="preventDefault",a=function(e){return function(){e[u]?e[u]():e.returnValue=!1}},f="stopPropagation",l=function(e){return function(){e[f]?e[f]():e.cancelBubble=!0}},p=function(e){return function(){e[u](),e[f](),e.stopped=!0}},d=function(e,t,n){var r,i;for(r=n.length;r--;)i=n[r],!(i in t)&&i in e&&(t[i]=e[i])};return function(v,w){var E={originalEvent:v,isNative:w};if(!v)return E;var S,x=v.type,T=v.target||v.srcElement;E[u]=a(v),E[f]=l(v),E.stop=p(E),E.target=T&&T.nodeType===3?T.parentNode:T;if(w){if(x.indexOf("key")!==-1)S=r,E.keyCode=v.which||v.keyCode;else if(m.test(x)){S=t,E.rightClick=v.which===3||v.button===2,E.pos={x:0,y:0};if(v.pageX||v.pageY)E.clientX=v.pageX,E.clientY=v.pageY;else if(v.clientX||v.clientY)E.clientX=v.clientX+c.body.scrollLeft+h.scrollLeft,E.clientY=v.clientY+c.body.scrollTop+h.scrollTop;i.test(x)&&(E.relatedTarget=v.relatedTarget||v[(x==="mouseover"?"from":"to")+"Element"])}else b.test(x)?S=o:g.test(x)?S=n:y.test(x)&&(S=s);d(v,E,S||e)}return E}}(),T=function(e,t){return!p&&!t&&(e===c||e===n)?h:e},N=function(){function e(e,t,n,r,i){this.element=e,this.type=t,this.handler=n,this.original=r,this.namespaces=i,this.custom=S[t],this.isNative=E[t]&&e[d],this.eventType=p||this.isNative?t:"propertychange",this.customType=!p&&!this.isNative&&t,this.target=T(e,this.isNative),this.eventSupport=this.target[d]}return e.prototype={inNamespaces:function(e){var t,n;if(!e)return!0;if(!this.namespaces)return!1;for(t=e.length;t--;)for(n=this.namespaces.length;n--;)if(e[t]===this.namespaces[n])return!0;return!1},matches:function(e,t,n){return this.element===e&&(!t||this.original===t)&&(!n||this.handler===n)}},e}(),C=function(){var e={},t=function(n,r,i,s,o){if(!r||r==="*")for(var u in e)u.charAt(0)==="$"&&t(n,u.substr(1),i,s,o);else{var a=0,f,l=e["$"+r],c=n==="*";if(!l)return;for(f=l.length;a<f;a++)if(c||l[a].matches(n,i,s))if(!o(l[a],l,a,r))return}},n=function(t,n,r){var i,s=e["$"+n];if(s)for(i=s.length;i--;)if(s[i].matches(t,r,null))return!0;return!1},r=function(e,n,r){var i=[];return t(e,n,r,null,function(e){return i.push(e)}),i},i=function(t){return(e["$"+t.type]||(e["$"+t.type]=[])).push(t),t},s=function(n){t(n.element,n.type,null,n.handler,function(t,n,r){return n.splice(r,1),n.length===0&&delete e["$"+t.type],!1})},o=function(){var t,n=[];for(t in e)t.charAt(0)==="$"&&(n=n.concat(e[t]));return n};return{has:n,get:r,put:i,del:s,entries:o}}(),k=p?function(e,t,n,r){e[r?u:f](t,n,!1)}:function(e,t,n,r,i){i&&r&&e["_on"+i]===null&&(e["_on"+i]=0),e[r?a:l]("on"+t,n)},L=function(e,t,r){return function(i){return i=x(i||((this.ownerDocument||this.document||this).parentWindow||n).event,!0),t.apply(e,[i].concat(r))}},A=function(e,t,r,i,s,o){return function(u){if(i?i.apply(this,arguments):p?!0:u&&u.propertyName==="_on"+r||!u)u&&(u=x(u||((this.ownerDocument||this.document||this).parentWindow||n).event,o)),t.apply(e,u&&(!s||s.length===0)?arguments:v.call(arguments,u?0:1).concat(s))}},O=function(e,t,n,r,i){return function(){e(t,n,i),r.apply(this,arguments)}},M=function(e,t,n,r){var i,s,u,a=t&&t.replace(o,""),f=C.get(e,a,n);for(i=0,s=f.length;i<s;i++)f[i].inNamespaces(r)&&((u=f[i]).eventSupport&&k(u.target,u.eventType,u.handler,!1,u.type),C.del(u))},_=function(e,t,n,r,i){var u,a=t.replace(o,""),f=t.replace(s,"").split(".");if(C.has(e,a,n))return e;a==="unload"&&(n=O(M,e,a,n,r)),S[a]&&(S[a].condition&&(n=A(e,n,a,S[a].condition,!0)),a=S[a].base||a),u=C.put(new N(e,a,n,r,f[0]&&f)),u.handler=u.isNative?L(e,u.handler,i):A(e,u.handler,a,!1,i,!1),u.eventSupport&&k(u.target,u.eventType,u.handler,!0,u.customType)},D=function(e,t,n){return function(r){var i,s,o=typeof e=="string"?n(e,this):e;for(i=r.target;i&&i!==this;i=i.parentNode)for(s=o.length;s--;)if(o[s]===i)return t.apply(i,arguments)}},P=function(e,t,n){var r,i,u,a,f,l=M,c=t&&typeof t=="string";if(c&&t.indexOf(" ")>0){t=t.split(" ");for(f=t.length;f--;)P(e,t[f],n);return e}u=c&&t.replace(o,""),u&&S[u]&&(u=S[u].type);if(!t||c){if(a=c&&t.replace(s,""))a=a.split(".");l(e,u,n,a)}else if(typeof t=="function")l(e,null,t);else for(r in t)t.hasOwnProperty(r)&&P(e,r,t[r]);return e},H=function(e,t,n,r,i){var s,o,u,a,f=n,l=n&&typeof n=="string";if(t&&!n&&typeof t=="object")for(s in t)t.hasOwnProperty(s)&&H.apply(this,[e,s,t[s]]);else{a=arguments.length>3?v.call(arguments,3):[],o=(l?n:t).split(" "),l&&(n=D(t,f=r,i))&&(a=v.call(a,1)),this===w&&(n=O(P,e,t,n,f));for(u=o.length;u--;)_(e,o[u],n,f,a)}return e},B=function(){return H.apply(w,arguments)},j=p?function(e,t,r){var i=c.createEvent(e?"HTMLEvents":"UIEvents");i[e?"initEvent":"initUIEvent"](t,!0,!0,n,1),r.dispatchEvent(i)}:function(e,t,n){n=T(n,e),e?n.fireEvent("on"+t,c.createEventObject()):n["_on"+t]++},F=function(e,t,n){var r,i,u,a,f,l=t.split(" ");for(r=l.length;r--;){t=l[r].replace(o,"");if(a=l[r].replace(s,""))a=a.split(".");if(!a&&!n&&e[d])j(E[t],t,e);else{f=C.get(e,t),n=[!1].concat(n);for(i=0,u=f.length;i<u;i++)f[i].inNamespaces(a)&&f[i].handler.apply(e,n)}}return e},I=function(e,t,n){var r=0,i=C.get(t,n),s=i.length;for(;r<s;r++)i[r].original&&H(e,i[r].type,i[r].original);return e},q={add:H,one:B,remove:P,clone:I,fire:F,noConflict:function(){return t[e]=r,this}};if(n[a]){var R=function(){var e,t=C.entries();for(e in t)t[e].type&&t[e].type!=="unload"&&P(t[e].element,t[e].type);n[l]("onunload",R),n.CollectGarbage&&n.CollectGarbage()};n[a]("onunload",R)}return q});var html4={};html4.atype={NONE:0,URI:1,URI_FRAGMENT:11,SCRIPT:2,STYLE:3,ID:4,IDREF:5,IDREFS:6,GLOBAL_NAME:7,LOCAL_NAME:8,CLASSES:9,FRAME_TARGET:10},html4.ATTRIBS={"*::class":9,"*::dir":0,"*::id":4,"*::lang":0,"*::onclick":2,"*::ondblclick":2,"*::onkeydown":2,"*::onkeypress":2,"*::onkeyup":2,"*::onload":2,"*::onmousedown":2,"*::onmousemove":2,"*::onmouseout":2,"*::onmouseover":2,"*::onmouseup":2,"*::style":3,"*::title":0,"a::accesskey":0,"a::coords":0,"a::href":1,"a::hreflang":0,"a::name":7,"a::onblur":2,"a::onfocus":2,"a::rel":0,"a::rev":0,"a::shape":0,"a::tabindex":0,"a::target":10,"a::type":0,"area::accesskey":0,"area::alt":0,"area::coords":0,"area::href":1,"area::nohref":0,"area::onblur":2,"area::onfocus":2,"area::shape":0,"area::tabindex":0,"area::target":10,"bdo::dir":0,"blockquote::cite":1,"br::clear":0,"button::accesskey":0,"button::disabled":0,"button::name":8,"button::onblur"
:2,"button::onfocus":2,"button::tabindex":0,"button::type":0,"button::value":0,"canvas::height":0,"canvas::width":0,"caption::align":0,"col::align":0,"col::char":0,"col::charoff":0,"col::span":0,"col::valign":0,"col::width":0,"colgroup::align":0,"colgroup::char":0,"colgroup::charoff":0,"colgroup::span":0,"colgroup::valign":0,"colgroup::width":0,"del::cite":1,"del::datetime":0,"dir::compact":0,"div::align":0,"dl::compact":0,"font::color":0,"font::face":0,"font::size":0,"form::accept":0,"form::action":1,"form::autocomplete":0,"form::enctype":0,"form::method":0,"form::name":7,"form::onreset":2,"form::onsubmit":2,"form::target":10,"h1::align":0,"h2::align":0,"h3::align":0,"h4::align":0,"h5::align":0,"h6::align":0,"hr::align":0,"hr::noshade":0,"hr::size":0,"hr::width":0,"iframe::align":0,"iframe::frameborder":0,"iframe::height":0,"iframe::marginheight":0,"iframe::marginwidth":0,"iframe::width":0,"img::align":0,"img::alt":0,"img::border":0,"img::height":0,"img::hspace":0,"img::ismap":0,"img::name":7,"img::src":1,"img::usemap":11,"img::vspace":0,"img::width":0,"input::accept":0,"input::accesskey":0,"input::align":0,"input::alt":0,"input::autocomplete":0,"input::checked":0,"input::disabled":0,"input::ismap":0,"input::maxlength":0,"input::name":8,"input::onblur":2,"input::onchange":2,"input::onfocus":2,"input::onselect":2,"input::readonly":0,"input::size":0,"input::src":1,"input::tabindex":0,"input::type":0,"input::usemap":11,"input::value":0,"ins::cite":1,"ins::datetime":0,"label::accesskey":0,"label::for":5,"label::onblur":2,"label::onfocus":2,"legend::accesskey":0,"legend::align":0,"li::type":0,"li::value":0,"map::name":7,"menu::compact":0,"ol::compact":0,"ol::start":0,"ol::type":0,"optgroup::disabled":0,"optgroup::label":0,"option::disabled":0,"option::label":0,"option::selected":0,"option::value":0,"p::align":0,"pre::width":0,"q::cite":1,"select::disabled":0,"select::multiple":0,"select::name":8,"select::onblur":2,"select::onchange":2,"select::onfocus":2,"select::size":0,"select::tabindex":0,"table::align":0,"table::bgcolor":0,"table::border":0,"table::cellpadding":0,"table::cellspacing":0,"table::frame":0,"table::rules":0,"table::summary":0,"table::width":0,"tbody::align":0,"tbody::char":0,"tbody::charoff":0,"tbody::valign":0,"td::abbr":0,"td::align":0,"td::axis":0,"td::bgcolor":0,"td::char":0,"td::charoff":0,"td::colspan":0,"td::headers":6,"td::height":0,"td::nowrap":0,"td::rowspan":0,"td::scope":0,"td::valign":0,"td::width":0,"textarea::accesskey":0,"textarea::cols":0,"textarea::disabled":0,"textarea::name":8,"textarea::onblur":2,"textarea::onchange":2,"textarea::onfocus":2,"textarea::onselect":2,"textarea::readonly":0,"textarea::rows":0,"textarea::tabindex":0,"tfoot::align":0,"tfoot::char":0,"tfoot::charoff":0,"tfoot::valign":0,"th::abbr":0,"th::align":0,"th::axis":0,"th::bgcolor":0,"th::char":0,"th::charoff":0,"th::colspan":0,"th::headers":6,"th::height":0,"th::nowrap":0,"th::rowspan":0,"th::scope":0,"th::valign":0,"th::width":0,"thead::align":0,"thead::char":0,"thead::charoff":0,"thead::valign":0,"tr::align":0,"tr::bgcolor":0,"tr::char":0,"tr::charoff":0,"tr::valign":0,"ul::compact":0,"ul::type":0},html4.eflags={OPTIONAL_ENDTAG:1,EMPTY:2,CDATA:4,RCDATA:8,UNSAFE:16,FOLDABLE:32,SCRIPT:64,STYLE:128},html4.ELEMENTS={a:0,abbr:0,acronym:0,address:0,applet:16,area:2,b:0,base:18,basefont:18,bdo:0,big:0,blockquote:0,body:49,br:2,button:0,canvas:0,caption:0,center:0,cite:0,code:0,col:2,colgroup:1,dd:1,del:0,dfn:0,dir:0,div:0,dl:0,dt:1,em:0,fieldset:0,font:0,form:0,frame:18,frameset:16,h1:0,h2:0,h3:0,h4:0,h5:0,h6:0,head:49,hr:2,html:49,i:0,iframe:4,img:2,input:2,ins:0,isindex:18,kbd:0,label:0,legend:0,li:1,link:18,map:0,menu:0,meta:18,nobr:0,noembed:4,noframes:20,noscript:20,object:16,ol:0,optgroup:0,option:1,p:1,param:18,pre:0,q:0,s:0,samp:0,script:84,select:0,small:0,span:0,strike:0,strong:0,style:148,sub:0,sup:0,table:0,tbody:1,td:1,textarea:8,tfoot:1,th:1,thead:1,title:24,tr:1,tt:0,u:0,ul:0,"var":0},html4.ueffects={NOT_LOADED:0,SAME_DOCUMENT:1,NEW_DOCUMENT:2},html4.URIEFFECTS={"a::href":2,"area::href":2,"blockquote::cite":0,"body::background":1,"del::cite":0,"form::action":2,"img::src":1,"input::src":1,"ins::cite":0,"q::cite":0},html4.ltypes={UNSANDBOXED:2,SANDBOXED:1,DATA:0},html4.LOADERTYPES={"a::href":2,"area::href":2,"blockquote::cite":2,"body::background":1,"del::cite":2,"form::action":2,"img::src":1,"input::src":1,"ins::cite":2,"q::cite":2};var html=function(e){function o(e){e=t(e);if(n.hasOwnProperty(e))return n[e];var r=e.match(i);return r?String.fromCharCode(parseInt(r[1],10)):(r=e.match(s))?String.fromCharCode(parseInt(r[1],16)):""}function u(e,t){return o(t)}function f(e){return e.replace(a,"")}function c(e){return e.replace(l,u)}function y(e){return e.replace(h,"&amp;").replace(d,"&lt;").replace(v,"&gt;").replace(m,"&#34;").replace(g,"&#61;")}function b(e){return e.replace(p,"&amp;$1").replace(d,"&lt;").replace(v,"&gt;")}function S(n){return function(i,s){i=String(i);var o=null,u=!1,a=[],l=void 0,h=void 0,p=void 0;n.startDoc&&n.startDoc(s);while(i){var d=i.match(u?w:E);i=i.substring(d[0].length);if(u){if(d[1]){var v=t(d[1]),m;if(d[2]){var g=d[3];switch(g.charCodeAt(0)){case 34:case 39:g=g.substring(1,g.length-1)}m=c(f(g))}else m=v;a.push(v,m)}else if(d[4]){h!==void 0&&(p?n.startTag&&n.startTag(l,a,s):n.endTag&&n.endTag(l,s));if(p&&h&(e.eflags.CDATA|e.eflags.RCDATA)){o===null?o=t(i):o=o.substring(o.length-i.length);var y=o.indexOf("</"+l);y<0&&(y=i.length),y&&(h&e.eflags.CDATA?n.cdata&&n.cdata(i.substring(0,y),s):n.rcdata&&n.rcdata(b(i.substring(0,y)),s),i=i.substring(y))}l=h=p=void 0,a.length=0,u=!1}}else if(d[1])n.pcdata&&n.pcdata(d[0],s);else if(d[3])p=!d[2],u=!0,l=t(d[3]),h=e.ELEMENTS.hasOwnProperty(l)?e.ELEMENTS[l]:void 0;else if(d[4])n.pcdata&&n.pcdata(d[4],s);else if(d[5]&&n.pcdata){var S=d[5];n.pcdata(S==="<"?"&lt;":S===">"?"&gt;":"&amp;",s)}}n.endDoc&&n.endDoc(s)}}function x(t){var n,r;return S({startDoc:function(e){n=[],r=!1},startTag:function(i,s,o){if(r)return;if(!e.ELEMENTS.hasOwnProperty(i))return;var u=e.ELEMENTS[i];if(u&e.eflags.FOLDABLE)return;if(u&e.eflags.UNSAFE){r=!(u&e.eflags.EMPTY);return}s=t(i,s);if(s){u&e.eflags.EMPTY||n.push(i),o.push("<",i);for(var a=0,f=s.length;a<f;a+=2){var l=s[a],c=s[a+1];c!==null&&c!==void 0&&o.push(" ",l,'="',y(c),'"')}o.push(">")}},endTag:function(t,i){if(r){r=!1;return}if(!e.ELEMENTS.hasOwnProperty(t))return;var s=e.ELEMENTS[t];if(!(s&(e.eflags.UNSAFE|e.eflags.EMPTY|e.eflags.FOLDABLE))){var o;if(s&e.eflags.OPTIONAL_ENDTAG)for(o=n.length;--o>=0;){var u=n[o];if(u===t)break;if(!(e.ELEMENTS[u]&e.eflags.OPTIONAL_ENDTAG))return}else for(o=n.length;--o>=0;)if(n[o]===t)break;if(o<0)return;for(var a=n.length;--a>o;){var u=n[a];e.ELEMENTS[u]&e.eflags.OPTIONAL_ENDTAG||i.push("</",u,">")}n.length=o,i.push("</",t,">")}},pcdata:function(e,t){r||t.push(e)},rcdata:function(e,t){r||t.push(e)},cdata:function(e,t){r||t.push(e)},endDoc:function(e){for(var t=n.length;--t>=0;)e.push("</",n[t],">");n.length=0}})}function N(t,n,i){var s=[];return x(function(s,o){for(var u=0;u<o.length;u+=2){var a=o[u],f=o[u+1],l=null,c;if((c=s+"::"+a,e.ATTRIBS.hasOwnProperty(c))||(c="*::"+a,e.ATTRIBS.hasOwnProperty(c)))l=e.ATTRIBS[c];if(l!==null)switch(l){case e.atype.NONE:break;case e.atype.SCRIPT:case e.atype.STYLE:f=null;break;case e.atype.ID:case e.atype.IDREF:case e.atype.IDREFS:case e.atype.GLOBAL_NAME:case e.atype.LOCAL_NAME:case e.atype.CLASSES:f=i?i(f):f;break;case e.atype.URI:var h=(""+f).match(T);h?!h[1]||r.test(h[1])?f=n&&n(f):f=null:f=null;break;case e.atype.URI_FRAGMENT:f&&"#"===f.charAt(0)?(f=i?i(f):f,f&&(f="#"+f)):f=null;break;default:f=null}else f=null;o[u+1]=f}return o})(t,s),s.join("")}var t;"script"==="SCRIPT".toLowerCase()?t=function(e){return e.toLowerCase()}:t=function(e){return e.replace(/[A-Z]/g,function(e){return String.fromCharCode(e.charCodeAt(0)|32)})};var n={lt:"<",gt:">",amp:"&",nbsp:" ",quot:'"',apos:"'"},r=/^(?:https?|mailto|data)$/i,i=/^#(\d+)$/,s=/^#x([0-9A-Fa-f]+)$/,a=/\0/g,l=/&(#\d+|#x[0-9A-Fa-f]+|\w+);/g,h=/&/g,p=/&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,d=/</g,v=/>/g,m=/\"/g,g=/\=/g,w=new RegExp("^\\s*(?:(?:([a-z][a-z-]*)(\\s*=\\s*(\"[^\"]*\"|'[^']*'|(?=[a-z][a-z-]*\\s*=)|[^>\"'\\s]*))?)|(/?>)|[\\s\\S][^a-z\\s>]*)","i"),E=new RegExp("^(?:&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);|<!--[\\s\\S]*?-->|<!\\w[^>]*>|<\\?[^>*]*>|<(/)?([a-z][a-z0-9]*)|([^<&>]+)|([<&>]))","i"),T=new RegExp("^(?:([^:/?#]+):)?");return{escapeAttrib:y,makeHtmlSanitizer:x,makeSaxParser:S,normalizeRCData:b,sanitize:N,unescapeEntities:c}}(html4),html_sanitize=html.sanitize;typeof window!="undefined"&&(window.html=html,window.html_sanitize=html_sanitize),html4.ATTRIBS["*::style"]=0,html4.ELEMENTS.style=0,html4.ATTRIBS["a::target"]=0,html4.ELEMENTS.video=0,html4.ATTRIBS["video::src"]=0,html4.ATTRIBS["video::poster"]=0,html4.ATTRIBS["video::controls"]=0,html4.ELEMENTS.audio=0,html4.ATTRIBS["audio::src"]=0,html4.ATTRIBS["video::autoplay"]=0,html4.ATTRIBS["video::controls"]=0;var Mustache=typeof module!="undefined"&&module.exports||{};(function(e){function a(e){return u.test(e)}function p(e){return String(e).replace(/[&<>"'\/]/g,function(e){return h[e]||e})}function d(e,t,n,r){r=r||"<template>";var i=t.split("\n"),s=Math.max(n-3,0),o=Math.min(i.length,n+3),u=i.slice(s,o),a;for(var f=0,l=u.length;f<l;++f)a=f+s+1,u[f]=(a===n?" >> ":"    ")+u[f];return e.template=t,e.line=n,e.file=r,e.message=[r+":"+n,u.join("\n"),"",e.message].join("\n"),e}function v(e,t,n){if(e===".")return t[t.length-1];var r=e.split("."),i=r.length-1,s=r[i],o,u,a=t.length,f,l;while(a){l=t.slice(0),u=t[--a],f=0;while(f<i){u=u[r[f++]];if(u==null)break;l.push(u)}if(u&&typeof u=="object"&&s in u){o=u[s];break}}return typeof o=="function"&&(o=o.call(l[l.length-1])),o==null?n:o}function m(e,t,n,r){var i="",u=v(e,t);if(r){if(u==null||u===!1||s(u)&&u.length===0)i+=n()}else if(s(u))o(u,function(e){t.push(e),i+=n(),t.pop()});else if(typeof u=="object")t.push(u),i+=n(),t.pop();else if(typeof u=="function"){var a=t[t.length-1],f=function(e){return S(e,a)};i+=u.call(a,n(),f)||""}else u&&(i+=n());return i}function g(t,n){n=n||{};var r=n.tags||e.tags,i=r[0],s=r[r.length-1],o=['var buffer = "";',"\nvar line = 1;","\ntry {",'\nbuffer += "'],u=[],l=!1,c=!1,h=function(){if(l&&!c&&!n.space)while(u.length)o.splice(u.pop(),1);else u=[];l=!1,c=!1},p=[],v,m,g,y=function(e){r=f(e).split(/\s+/),m=r[0],g=r[r.length-1]},b=function(e){o.push('";',v,'\nvar partial = partials["'+f(e)+'"];',"\nif (partial) {","\n  buffer += render(partial,stack[stack.length - 1],partials);","\n}",'\nbuffer += "')},w=function(e,r){var i=f(e);if(i==="")throw d(new Error("Section name may not be empty"),t,N,n.file);p.push({name:i,inverted:r}),o.push('";',v,'\nvar name = "'+i+'";',"\nvar callback = (function () {","\n  return function () {",'\n    var buffer = "";','\nbuffer += "')},E=function(e){w(e,!0)},S=function(e){var r=f(e),i=p.length!=0&&p[p.length-1].name;if(!i||r!=i)throw d(new Error('Section named "'+r+'" was never opened'),t,N,n.file);var s=p.pop();o.push('";',"\n    return buffer;","\n  };","\n})();"),s.inverted?o.push("\nbuffer += renderSection(name,stack,callback,true);"):o.push("\nbuffer += renderSection(name,stack,callback);"),o.push('\nbuffer += "')},x=function(e){o.push('";',v,'\nbuffer += lookup("'+f(e)+'",stack,"");','\nbuffer += "')},T=function(e){o.push('";',v,'\nbuffer += escapeHTML(lookup("'+f(e)+'",stack,""));','\nbuffer += "')},N=1,C,k;for(var L=0,A=t.length;L<A;++L)if(t.slice(L,L+i.length)===i){L+=i.length,C=t.substr(L,1),v="\nline = "+N+";",m=i,g=s,l=!0;switch(C){case"!":L++,k=null;break;case"=":L++,s="="+s,k=y;break;case">":L++,k=b;break;case"#":L++,k=w;break;case"^":L++,k=E;break;case"/":L++,k=S;break;case"{":s="}"+s;case"&":L++,c=!0,k=x;break;default:c=!0,k=T}var O=t.indexOf(s,L);if(O===-1)throw d(new Error('Tag "'+i+'" was not closed properly'),t,N,n.file);var M=t.substring(L,O);k&&k(M);var _=0;while(~(_=M.indexOf("\n",_)))N++,_++;L=O+s.length-1,i=m,s=g}else{C=t.substr(L,1);switch(C){case'"':case"\\":c=!0,o.push("\\"+C);break;case"\r":break;case"\n":u.push(o.length),o.push("\\n"),h(),N++;break;default:a(C)?u.push(o.length):c=!0,o.push(C)}}if(p.length!=0)throw d(new Error('Section "'+p[p.length-1].name+'" was not closed properly'),t,N,n.file);h(),o.push('";',"\nreturn buffer;","\n} catch (e) { throw {error: e, line: line}; }");var D=o.join("").replace(/buffer \+= "";\n/g,"");return n.debug&&(typeof console!="undefined"&&console.log?console.log(D):typeof print=="function"&&print(D)),D}function y(e,t){var n="view,partials,stack,lookup,escapeHTML,renderSection,render",r=g(e,t),i=new Function(n,r);return function(n,r){r=r||{};var s=[n];try{return i(n,r,s,v,p,m,S)}catch(o){throw d(o.error,e,o.line,t.file)}}}function w(){b={}}function E(e,t){return t=t||{},t.cache!==!1?(b[e]||(b[e]=y(e,t)),b[e]):y(e,t)}function S(e,t,n){return E(e)(t,n)}e.name="mustache.js",e.version="0.5.0-dev",e.tags=["{{","}}"],e.parse=g,e.compile=E,e.render=S,e.clearCache=w,e.to_html=function(e,t,n,r){var i=S(e,t,n);if(typeof r!="function")return i;r(i)};var t=Object.prototype.toString,n=Array.isArray,r=Array.prototype.forEach,i=String.prototype.trim,s;n?s=n:s=function(e){return t.call(e)==="[object Array]"};var o;r?o=function(e,t,n){return r.call(e,t,n)}:o=function(e,t,n){for(var r=0,i=e.length;r<i;++r)t.call(n,e[r],r,e)};var u=/^\s*$/,f;if(i)f=function(e){return e==null?"":i.call(e)};else{var l,c;a(" ")?(l=/^\s+/,c=/\s+$/):(l=/^[\s\xA0]+/,c=/[\s\xA0]+$/),f=function(e){return e==null?"":String(e).replace(l,"").replace(c,"")}}var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},b={}})(Mustache),function(e,t,n){t[e]=n()}("reqwest",this,function(){function handleReadyState(e,t,n){return function(){if(e._aborted)return n(e.request);e.request&&e.request[readyState]==4&&(e.request.onreadystatechange=noop,twoHundo.test(e.request.status)?t(e.request):n(e.request))}}function setHeaders(e,t){var n=t.headers||{},r;n.Accept=n.Accept||defaultHeaders.accept[t.type]||defaultHeaders.accept["*"],!t.crossOrigin&&!n[requestedWith]&&(n[requestedWith]=defaultHeaders.requestedWith),n[contentType]||(n[contentType]=t.contentType||defaultHeaders.contentType);for(r in n)n.hasOwnProperty(r)&&e.setRequestHeader(r,n[r])}function setCredentials(e,t){typeof t.withCredentials!="undefined"&&typeof e.withCredentials!="undefined"&&(e.withCredentials=!!t.withCredentials)}function generalCallback(e){lastValue=e}function urlappend(e,t){return e+(/\?/.test(e)?"&":"?")+t}function handleJsonp(e,t,n,r){var i=uniqid++,s=e.jsonpCallback||"callback",o=e.jsonpCallbackName||reqwest.getcallbackPrefix(i),u=new RegExp("((^|\\?|&)"+s+")=([^&]+)"),a=r.match(u),f=doc.createElement("script"),l=0,c=navigator.userAgent.indexOf("MSIE 10.0")!==-1;return a?a[3]==="?"?r=r.replace(u,"$1="+o):o=a[3]:r=urlappend(r,s+"="+o),win[o]=generalCallback,f.type="text/javascript",typeof f.onreadystatechange!="undefined"&&!c&&(f.event="onclick",f.htmlFor=f.id="_reqwest_"+i),f.onload=f.onreadystatechange=function(){if(f[readyState]&&f[readyState]!=="complete"&&f[readyState]!=="loaded"||l)return!1;f.onload=f.onreadystatechange=null,f.onclick&&f.onclick(),e.success&&e.success(lastValue),lastValue=undefined,head.removeChild(f),l=1},f.src=r,f.async=!0,head.appendChild(f),{abort:function(){f.onload=f.onreadystatechange=null,e.error&&e.error({},"Request is aborted: timeout",{}),lastValue=undefined,head.removeChild(f),l=1}}}function getRequest(e,t){var n=this.o,r=(n.method||"GET").toUpperCase(),i=typeof n=="string"?n:n.url,s=n.processData!==!1&&n.data&&typeof n.data!="string"?reqwest.toQueryString(n.data):n.data||null,o;return(n.type=="jsonp"||r=="GET")&&s&&(i=urlappend(i,s),s=null),n.type=="jsonp"?handleJsonp(n,e,t,i):(o=xhr(),o.open(r,i,!0),setHeaders(o,n),setCredentials(o,n),o.onreadystatechange=handleReadyState(this,e,t),n.before&&n.before(o),o.send(s),o)}function Reqwest(e,t){this.o=e,this.fn=t,init.apply(this,arguments)}function setType(e){var t=e.match(/\.(json|jsonp|html|xml)(\?|$)/);return t?t[1]:"js"}function init(o,fn){function complete(e){o.timeout&&clearTimeout(self.timeout),self.timeout=null;while(self._completeHandlers.length>0)self._completeHandlers.shift()(e)}function success(resp){var r=resp.responseText;if(r)switch(type){case"json":try{resp=win.JSON?win.JSON.parse(r):eval("("+r+")")}catch(err){return error(resp,"Could not parse JSON in response",err)}break;case"js":resp=eval(r);break;case"html":resp=r;break;case"xml":resp=resp.responseXML&&resp.responseXML.parseError&&resp.responseXML.parseError.errorCode&&resp.responseXML.parseError.reason?null:resp.responseXML}self._responseArgs.resp=resp,self._fulfilled=!0,fn(resp);while(self._fulfillmentHandlers.length>0)self._fulfillmentHandlers.shift()(resp);complete(resp)}function error(e,t,n){self._responseArgs.resp=e,self._responseArgs.msg=t,self._responseArgs.t=n,self._erred=!0;while(self._errorHandlers.length>0)self._errorHandlers.shift()(e,t,n);complete(e)}this.url=typeof o=="string"?o:o.url,this.timeout=null,this._fulfilled=!1,this._fulfillmentHandlers=[],this._errorHandlers=[],this._completeHandlers=[],this._erred=!1,this._responseArgs={};var self=this,type=o.type||setType(this.url);fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){self.abort()},o.timeout)),o.success&&this._fulfillmentHandlers.push(function(){o.success.apply(o,arguments)}),o.error&&this._errorHandlers.push(function(){o.error.apply(o,arguments)}),o.complete&&this._completeHandlers.push(function(){o.complete.apply(o,arguments)}),this.request=getRequest.call(this,success,error)}function reqwest(e,t){return new Reqwest(e,t)}function normalize(e){return e?e.replace(/\r?\n/g,"\r\n"):""}function serial(e,t){var n=e.name,r=e.tagName.toLowerCase(),i=function(e){e&&!e.disabled&&t(n,normalize(e.attributes.value&&e.attributes.value.specified?e.value:e.text))},s,o,u,a;if(e.disabled||!n)return;switch(r){case"input":/reset|button|image|file/i.test(e.type)||(s=/checkbox/i.test(e.type),o=/radio/i.test(e.type),u=e.value,(!s&&!o||e.checked)&&t(n,normalize(s&&u===""?"on":u)));break;case"textarea":t(n,normalize(e.value));break;case"select":if(e.type.toLowerCase()==="select-one")i(e.selectedIndex>=0?e.options[e.selectedIndex]:null);else for(a=0;e.length&&a<e.length;a++)e.options[a].selected&&i(e.options[a])}}function eachFormElement(){var e=this,t,n,r=function(t,n){var r,i,s;for(r=0;r<n.length;r++){s=t[byTag](n[r]);for(i=0;i<s.length;i++)serial(s[i],e)}};for(n=0;n<arguments.length;n++)t=arguments[n],/input|select|textarea/i.test(t.tagName)&&serial(t,e),r(t,["input","select","textarea"])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var e={};return eachFormElement.apply(function(t,n){t in e?(e[t]&&!isArray(e[t])&&(e[t]=[e[t]]),e[t].push(n)):e[t]=n},arguments),e}var win=window,doc=document,twoHundo=/^20\d$/,byTag="getElementsByTagName",readyState="readyState",contentType="Content-Type",requestedWith="X-Requested-With",head=doc[byTag]("head")[0],uniqid=0,callbackPrefix="reqwest_"+ +(new Date),lastValue,xmlHttpRequest="XMLHttpRequest",noop=function(){},isArray=typeof Array.isArray=="function"?Array.isArray:function(e){return e instanceof Array},defaultHeaders={contentType:"application/x-www-form-urlencoded",requestedWith:xmlHttpRequest,accept:{"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"}},xhr=win[xmlHttpRequest]?function(){return new XMLHttpRequest}:function(){return new ActiveXObject("Microsoft.XMLHTTP")};return Reqwest.prototype={abort:function(){this._aborted=!0,this.request.abort()},retry:function(){init.call(this,this.o,this.fn)},then:function(e,t){return this._fulfilled?e(this._responseArgs.resp):this._erred?t(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):(this._fulfillmentHandlers.push(e),this._errorHandlers.push(t)),this},always:function(e){return this._fulfilled||this._erred?e(this._responseArgs.resp):this._completeHandlers.push(e),this},fail:function(e){return this._erred?e(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):this._errorHandlers.push(e),this}},reqwest.serializeArray=function(){var e=[];return eachFormElement.apply(function(t,n){e.push({name:t,value:n})},arguments),e},reqwest.serialize=function(){if(arguments.length===0)return"";var e,t,n=Array.prototype.slice.call(arguments,0);return e=n.pop(),e&&e.nodeType&&n.push(e)&&(e=null),e&&(e=e.type),e=="map"?t=serializeHash:e=="array"?t=reqwest.serializeArray:t=serializeQueryString,t.apply(null,n)},reqwest.toQueryString=function(e){var t="",n,r=encodeURIComponent,i=function(e,n){t+=r(e)+"="+r(n)+"&"},s,o;if(isArray(e))for(n=0;e&&n<e.length;n++)i(e[n].name,e[n].value);else for(s in e){if(!Object.hasOwnProperty.call(e,s))continue;o=e[s];if(isArray(o))for(n=0;n<o.length;n++)i(s,o[n]);else i(s,e[s])}return t.replace(/&$/,"").replace(/%20/g,"+")},reqwest.getcallbackPrefix=function(){return callbackPrefix},reqwest.compat=function(e,t){return e&&(e.type&&(e.method=e.type)&&delete e.type,e.dataType&&(e.type=e.dataType),e.jsonpCallback&&(e.jsonpCallbackName=e.jsonpCallback)&&delete e.jsonpCallback,e.jsonp&&(e.jsonpCallback=e.jsonp)),new Reqwest(e,t)},reqwest}),wax=wax||{},wax.attribution=function(){var e={},t=document.createElement("div");return t.className="map-attribution",e.content=function(e){return typeof e=="undefined"?t.innerHTML:(t.innerHTML=wax.u.sanitize(e),this)},e.element=function(){return t},e.init=function(){return this},e},wax=wax||{},wax.bwdetect=function(e,t){function a(){wax.bw=-1;var e=new Image;e.src=s;var t=!0,i=setTimeout(function(){t&&wax.bw==-1&&(n.bw(0),t=!1)},r);e.onload=function(){t&&wax.bw==-1&&(clearTimeout(i),n.bw(1),t=!1)}}var n={},r=e.threshold||400,s="http://a.tiles.mapbox.com/mapbox/1.0.0/blue-marble-topo-bathy-jul/0/0/0.png?preventcache="+ +(new Date),o=1,u=e.auto===undefined?!0:e.auto;return n.bw=function(e){if(!arguments.length)return o;var n=o;wax.bwlisteners&&wax.bwlisteners.length&&function(){listeners=wax.bwlisteners,wax.bwlisteners=[];for(i=0;i<listeners;i++)listeners[i](e)}(),wax.bw=e,o!=(o=e)&&t(e)},n.add=function(){return u&&a(),this},wax.bw==-1?(wax.bwlisteners=wax.bwlisteners||[],wax.bwlisteners.push(n.bw)):wax.bw!==undefined?n.bw(wax.bw):n.add(),n},wax.formatter=function(x){var formatter={},f;if(x&&typeof x=="string")try{eval("f = "+x)}catch(e){console&&console.log(e)}else x&&typeof x=="function"?f=x:f=function(){};return formatter.format=function(e,t){try{return wax.u.sanitize(f(e,t))}catch(n){console&&console.log(n)}},formatter},wax.gi=function(e,t){function s(e){return e>=93&&e--,e>=35&&e--,e-=32,e}t=t||{};var n={},r=t.resolution||4,i=t.tileSize||256;return n.grid_tile=function(){return e},n.getKey=function(t,n){if(!e||!e.grid)return;if(n<0||t<0)return;if(Math.floor(n)>=i||Math.floor(t)>=i)return;return s(e.grid[Math.floor(n/r)].charCodeAt(Math.floor(t/r)))},n.gridFeature=function(t,n){var r=this.getKey(t,n),i=e.keys;if(i&&i[r]&&e.data[i[r]])return e.data[i[r]]},n.tileFeature=function(t,n,r){if(!e)return;var i=wax.u.offset(r);return feature=this.gridFeature(t-i.left,n-i.top),feature},n},wax.gm=function(){function o(e){return typeof e=="string"&&(e=[e]),function(r){if(!r)return;var i=new RegExp(n.tileRegexp()),s=i.exec(r);if(!s)return;return e[parseInt(s[2],10)%e.length].replace(/\{z\}/g,s[1]).replace(/\{x\}/g,s[2]).replace(/\{y\}/g,s[3])}}var e=4,t={},n={},r,i,s=function(e){if(e)return e.replace(/(\.png|\.jpg|\.jpeg)(\d*)/,".grid.json")};return n.tileRegexp=function(){var e=r.tiles[0],t=e.indexOf("?");t!==-1&&(e=e.substr(0,t)),e=e.replace(/[\(\)\?\$\*\+\^]/g,"."),e.indexOf("https")===0?e=e.replace(":443","[:0-9]*"):e.indexOf("http")===0&&(e=e.replace(":80","[:0-9]*"));var n="";if(r.tiles.length>1){var i=r.tiles[0],s=r.tiles[1];for(var o=0;o<i.length;++o)i.charAt(o)!=s.charAt(o)?n+=".":n+=e.charAt(o)||""}else n=e;return n.replace(/\{x\}/,"(\\d+)").replace(/\{y\}/,"(\\d+)").replace(/\{z\}/,"(\\d+)")},n.formatter=function(e){return arguments.length?(i=wax.formatter(e),n):i},n.template=function(e){return arguments.length?(i=wax.template(e),n):i},n.gridUrl=function(e){return arguments.length?(e?s=typeof e=="function"?e:o(e):s=function(){return null},n):s},n.getGrid=function(t,r){var o=s(t);return!i||!o?r(null,null):(wax.request.get(o,function(t,n){if(t)return r(t,null);r(null,wax.gi(n,{formatter:i,resolution:e}))}),n)},n.tilejson=function(t){return arguments.length?(t.template?n.template(t.template):t.formatter?n.formatter(t.formatter):i=undefined,n.gridUrl(t.grids),t.resolution&&(e=t.resolution),r=t,n):r},n},wax=wax||{},wax.hash=function(e){function i(){return location.hash.substring(1)}function s(e){var t=window.location;t.replace(t.toString().replace(t.hash||/$/,"#"+e))}function o(t){var n=t.split("/");for(var r=0;r<n.length;r++){n[r]=Number(n[r]);if(isNaN(n[r]))return!0}if(n.length<3)return!0;n.length==3&&e.setCenterZoom(n)}function u(){var n=e.getCenterZoom();t!==n&&(t=n,s(t))}function a(e){if(e===t)return;o(t=e)&&u()}e=e||{};var t,n={},r=90-1e-8,f=wax.u.throttle(u,500);return n.add=function(){return a(i()),e.bindChange(f),n},n.remove=function(){return e.unbindChange(f),n},n},wax=wax||{},wax.interaction=function(){function v(t){var n=o(),r=new RegExp(e.tileRegexp());for(var i=0;i<n.length;i++)if(t){var s=n[i][0]<=t.y&&n[i][0]+256>t.y&&n[i][1]<=t.x&&n[i][1]+256>t.x;if(s&&r.exec(n[i][2].src))return n[i][2]}return!1}function m(){return r?(window.clearTimeout(r),r=null,!0):!1}function g(r){if(n)return;var i=r.type!="MSPointerMove"?r:r.originalEvent,s=wax.u.eventoffset(i);t.screen_feature(s,function(n){n?bean.fire(t,"on",{parent:f(),data:n,formatter:e.formatter().format,e:r}):bean.fire(t,"off")})}function y(e){n=!0;var r=e.type!="MSPointerDown"?e:e.originalEvent;i=wax.u.eventoffset(r),e.type==="mousedown"?(bean.add(document.body,"click",E),bean.add(document.body,"mouseup",b)):e.type==="touchstart"&&e.touches.length===1?(bean.fire(t,"off"),bean.add(f(),p)):e.originalEvent.type==="MSPointerDown"&&e.originalEvent.touches&&e.originalEvent.touches.length===1&&(bean.fire(t,"off"),bean.add(f(),d))}function b(){n=!1}function w(){bean.remove(f(),p),bean.remove(f(),d),n=!1}function E(e){var o={},u=e.type!="MSPointerMove"&&e.type!="MSPointerUp"?e:e.originalEvent,a=wax.u.eventoffset(u);n=!1;for(var l in u)o[l]=u[l];return o.changedTouches=[],bean.remove(document.body,"mouseup",E),bean.remove(f(),p),bean.remove(f(),d),e.type==="touchend"?t.click(e,i):a&&(o.type==="MSPointerMove"||o.type==="MSPointerUp"?t.click(o,a):Math.round(a.y/s)===Math.round(i.y/s)&&Math.round(a.x/s)===Math.round(i.x/s)&&(r?m():r=window.setTimeout(function(){r=null,t.click(o,a)},150))),E}var e=wax.gm(),t={},n=!1,r=null,i,s=4,o,u,a,f,l,c,h={mousemove:g,touchstart:y,mousedown:y},p={touchend:E,touchmove:E,touchcancel:w},d={MSPointerUp:E,MSPointerMove:E,MSPointerCancel:w};return t.click=function(n,r){t.screen_feature(r,function(r){r&&bean.fire(t,"on",{parent:f(),data:r,formatter:e.formatter().format,e:n})})},t.screen_feature=function(t,n){var r=v(t);r||n(null),e.getGrid(r.src,function(e,i){if(e||!i)return n(null);var s=i.tileFeature(t.x,t.y,r);n(s)})},t.attach=function(e){return arguments.length?(u=e,t):u},t.detach=function(e){return arguments.length?(a=e,t):a},t.map=function(e){return arguments.length?(l=e,u&&u(l),bean.add(f(),h),bean.add(f(),"touchstart",y),bean.add(f(),"MSPointerDown",y),t):l},t.grid=function(e){return arguments.length?(o=e,t):o},t.remove=function(e){return a&&a(l),bean.remove(f(),h),bean.fire(t,"remove"),t},t.tilejson=function(n){return arguments.length?(e.tilejson(n),t):e.tilejson()},t.formatter=function(){return e.formatter()},t.on=function(e,n){return bean.add(t,e,n),t},t.off=function(e,n){return bean.remove(t,e,n),t},t.gridmanager=function(n){return arguments.length?(e=n,t):e},t.parent=function(e){return f=e,t},t};var wax=wax||{};wax.location=function(){function t(e){if(e.e.type==="mousemove"||!e.e.type)return;var t=e.formatter({format:"location"},e.data);t&&(window.location.href=t)}var e={};return e.events=function(){return{on:t}},e};var wax=wax||{};wax.request={cache:{},locks:{},promises:{},get:function(e,t){if(this.cache[e])return t(this.cache[e][0],this.cache[e][1]);this.promises[e]=this.promises[e]||[],this.promises[e].push(t);if(this.locks[e])return;var n=this;this.locks[e]=!0,reqwest({url:e+(~e.indexOf("?")?"&":"?")+"callback=grid",type:"jsonp",jsonpCallback:"callback",success:function(t){n.locks[e]=!1,n.cache[e]=[null,t];for(var r=0;r<n.promises[e].length;r++)n.promises[e][r](n.cache[e][0],n.cache[e][1])},error:function(t){n.locks[e]=!1,n.cache[e]=[t,null];for(var r=0;r<n.promises[e].length;r++)n.promises[e][r](n.cache[e][0],n.cache[e][1])}})}},wax.template=function(e){var t={};return t.format=function(t,n){var r={};for(var i in n)r[i]=n[i];return t.format&&(r["__"+t.format+"__"]=!0),wax.u.sanitize(Mustache.to_html(e,r))},t};if(!wax)var wax={};wax.tilejson=function(e,t){reqwest({url:e+(~e.indexOf("?")?"&":"?")+"callback=grid",type:"jsonp",jsonpCallback:"callback",success:t,error:t})};var wax=wax||{};wax.u={offset:function(e){var t=e.offsetWidth||parseInt(e.style.width,10),n=e.offsetHeight||parseInt(e.style.height,10),r=document.body,i=0,s=0,o=function(e){if(e===r||e===document.documentElement)return;i+=e.offsetTop,s+=e.offsetLeft;var t=e.style.transform||e.style.WebkitTransform||e.style.OTransform||e.style.MozTransform||e.style.msTransform;if(t){var n;if(n=t.match(/translate\((.+)px, (.+)px\)/))i+=parseInt(n[2],10),s+=parseInt(n[1],10);else if(n=t.match(/translate3d\((.+)px, (.+)px, (.+)px\)/))i+=parseInt(n[2],10),s+=parseInt(n[1],10);else if(n=t.match(/matrix3d\(([\-\d,\s]+)\)/)){var o=n[1].split(",");i+=parseInt(o[13],10),s+=parseInt(o[12],10)}else if(n=t.match(/matrix\(.+, .+, .+, .+, (.+), (.+)\)/))i+=parseInt(n[2],10),s+=parseInt(n[1],10)}};if(typeof e.getBoundingClientRect!="undefined"){var u=document.body,a=e.ownerDocument.documentElement,f=document.clientTop||u.clientTop||0,l=document.clientLeft||u.clientLeft||0,c=window.pageYOffset||a.scrollTop,h=window.pageXOffset||a.scrollLeft,p=e.getBoundingClientRect();i=p.top+c-f,s=p.left+h-l}else{o(e);try{while(e=e.offsetParent)o(e)}catch(d){}}i+=r.offsetTop,s+=r.offsetLeft,i+=r.parentNode.offsetTop,s+=r.parentNode.offsetLeft;var v=document.defaultView?window.getComputedStyle(r.parentNode,null):r.parentNode.currentStyle;return r.parentNode.offsetTop!==parseInt(v.marginTop,10)&&!isNaN(parseInt(v.marginTop,10))&&(i+=parseInt(v.marginTop,10),s+=parseInt(v.marginLeft,10)),{top:i,left:s,height:n,width:t}},$:function(e){return typeof e=="string"?document.getElementById(e):e},eventoffset:function(e){var t=0,n=0;e||(e=window.event);if(e.type=="MSPointerMove"||e.type=="MSPointerDown"||e.type=="MSPointerUp")return{x:e.pageX+window.pageXOffset,y:e.pageY+window.pageYOffset};if(e.pageX||e.pageY)return{x:e.pageX,y:e.pageY};if(e.clientX||e.clientY)return{x:e.clientX,y:e.clientY};if(e.touches&&e.touches.length===1)return{x:e.touches[0].pageX,y:e.touches[0].pageY}},limit:function(e,t,n){var r;return function(){var i=this,s=arguments,o=function(){r=null,e.apply(i,s)};n&&clearTimeout(r);if(n||!r)r=setTimeout(o,t)}},throttle:function(e,t){return this.limit(e,t,!1)},sanitize:function(e){function t(e){if(/^(https?:\/\/|data:image)/.test(e))return e}function n(e){return e}return e?html_sanitize(e,t,n):""}},wax=wax||{},wax.leaf=wax.leaf||{},wax.leaf.hash=function(e){return wax.hash({getCenterZoom:function(){var t=e.getCenter(),n=e.getZoom(),r=Math.max(0,Math.ceil(Math.log(n)/Math.LN2));return[n,t.lat.toFixed(r),t.lng.toFixed(r)].join("/")},setCenterZoom:function(t){e.setView(new L.LatLng(t[1],t[2]),t[0])},bindChange:function(t){e.on("moveend",t)},unbindChange:function(t){e.off("moveend",t)}})},wax=wax||{},wax.leaf=wax.leaf||{},wax.leaf.interaction=function(){function r(){e=!0}function i(){return!e&&t?t:t=function(e){var t=[];for(var n in e)if(e[n]._tiles)for(var r in e[n]._tiles){var i=e[n]._tiles[r];if(i.src){var s=wax.u.offset(i);t.push([s.top,s.left,i])}}return t}(n._layers)}function s(e){if(!arguments.length)return n;n=e;var t=["moveend"];for(var i=0;i<t.length;i++)n.on(t[i],r)}function o(e){if(!arguments.length)return n;n=e;var t=["moveend"];for(var i=0;i<t.length;i++)n.off(t[i],r)}var e=!1,t,n;return wax.interaction().attach(s).detach(o).parent(function(){return n._container}).grid(i)},wax=wax||{},wax.leaf=wax.leaf||{},wax.leaf.connector=L.TileLayer.extend({initialize:function(e){e=e||{},e.minZoom=e.minzoom||0,e.maxZoom=e.maxzoom||22,L.TileLayer.prototype.initialize.call(this,e.tiles[0],e)}}),wax=wax||{},wax.g=wax.g||{},wax.g.attribution=function(e,t){t=t||{};var n,r={};return r.element=function(){return n.element()},r.
appendTo=function(e){return wax.u.$(e).appendChild(n.element()),this},r.init=function(){return n=wax.attribution(),n.content(t.attribution),n.element().className="map-attribution map-g",this},r.init()},wax=wax||{},wax.g=wax.g||{},wax.g.bwdetect=function(e,t){t=t||{};var n=t.png||".png128",r=t.jpg||".jpg70";if(!e.mapTypes["mb-low"]){var i=e.mapTypes.mb,s={tiles:[],scheme:i.options.scheme,blankImage:i.options.blankImage,minzoom:i.minZoom,maxzoom:i.maxZoom,name:i.name,description:i.description};for(var o=0;o<i.options.tiles.length;o++)s.tiles.push(i.options.tiles[o].replace(".png",n).replace(".jpg",r));m.mapTypes.set("mb-low",new wax.g.connector(s))}return wax.bwdetect(t,function(t){e.setMapTypeId(t?"mb":"mb-low")})},wax=wax||{},wax.g=wax.g||{},wax.g.hash=function(e){return wax.hash({getCenterZoom:function(){var t=e.getCenter(),n=e.getZoom(),r=Math.max(0,Math.ceil(Math.log(n)/Math.LN2));return[n.toFixed(2),t.lat().toFixed(r),t.lng().toFixed(r)].join("/")},setCenterZoom:function(n){e.setCenter(new google.maps.LatLng(n[1],n[2])),e.setZoom(n[0])},bindChange:function(t){google.maps.event.addListener(e,"idle",t)},unbindChange:function(t){google.maps.event.removeListener(e,"idle",t)}})},wax=wax||{},wax.g=wax.g||{},wax.g.interaction=function(){function s(){e=!0}function o(){if(!e&&t)return t;t=[];var r=n.getZoom(),i=wax.u.offset(n.getDiv()),s=function(e){if(!e.interactive)return;for(var n in e.cache){if(n.split("/")[0]!=r)continue;var i=wax.u.offset(e.cache[n]);t.push([i.top,i.left,e.cache[n]])}};for(var o in n.mapTypes)s(n.mapTypes[o]);return n.overlayMapTypes.forEach(s),t}function u(e){if(!arguments.length)return n;n=e,r=google.maps.event.addListener(n,"tileloaded",s),i=google.maps.event.addListener(n,"idle",s)}function a(e){r&&google.maps.event.removeListener(r),i&&google.maps.event.removeListener(i)}var e=!1,t,n,r=null,i=null;return wax.interaction().attach(u).detach(a).parent(function(){return n.getDiv()}).grid(o)};var wax=wax||{};wax.g=wax.g||{},wax.g.connector=function(e){e=e||{},this.options={tiles:e.tiles,scheme:e.scheme||"xyz",blankImage:e.blankImage||"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},this.opacity=e.opacity||0,this.minZoom=e.minzoom||0,this.maxZoom=e.maxzoom||22,this.name=e.name||"",this.description=e.description||"",this.interactive=!0,this.tileSize=new google.maps.Size(256,256),this.cache={}},wax.g.connector.prototype.getTile=function(e,t,n){var r=t+"/"+e.x+"/"+e.y;if(!this.cache[r]){var i=this.cache[r]=new Image(256,256);this.cache[r].src=this.getTileUrl(e,t),this.cache[r].setAttribute("gTileKey",r),this.cache[r].setAttribute("style","opacity: "+this.opacity+"; filter: alpha(opacity="+this.opacity*100+");"),this.cache[r].onerror=function(){i.style.display="none"}}return this.cache[r]},wax.g.connector.prototype.releaseTile=function(e){var t=e.getAttribute("gTileKey");this.cache[t]&&delete this.cache[t],e.parentNode&&e.parentNode.removeChild(e)},wax.g.connector.prototype.getTileUrl=function(e,t){var n=Math.pow(2,t),r=this.options.scheme==="tms"?n-1-e.y:e.y,i=e.x%n;return i=i<0?e.x%n+n:i,r<0?this.options.blankImage:this.options.tiles[parseInt(i+r,10)%this.options.tiles.length].replace(/\{z\}/g,t).replace(/\{x\}/g,i).replace(/\{y\}/g,r)};var GeoJSON=function(e,t){var n=function(e,t,s){var o;switch(e.type){case"Point":t.position=new google.maps.LatLng(e.coordinates[1],e.coordinates[0]),o=new google.maps.Marker(t),s&&o.set("geojsonProperties",s);break;case"MultiPoint":o=[];for(var u=0;u<e.coordinates.length;u++)t.position=new google.maps.LatLng(e.coordinates[u][1],e.coordinates[u][0]),o.push(new google.maps.Marker(t));if(s)for(var a=0;a<o.length;a++)o[a].set("geojsonProperties",s);break;case"LineString":var f=[];for(var u=0;u<e.coordinates.length;u++){var l=e.coordinates[u],c=new google.maps.LatLng(l[1],l[0]);f.push(c)}t.path=f,o=new google.maps.Polyline(t),s&&o.set("geojsonProperties",s);break;case"MultiLineString":o=[];for(var u=0;u<e.coordinates.length;u++){var f=[];for(var h=0;h<e.coordinates[u].length;h++){var l=e.coordinates[u][h],c=new google.maps.LatLng(l[1],l[0]);f.push(c)}t.path=f,o.push(new google.maps.Polyline(t))}if(s)for(var a=0;a<o.length;a++)o[a].set("geojsonProperties",s);break;case"Polygon":var p=[],d,v;for(var u=0;u<e.coordinates.length;u++){var f=[];for(var h=0;h<e.coordinates[u].length;h++){var c=new google.maps.LatLng(e.coordinates[u][h][1],e.coordinates[u][h][0]);f.push(c)}u?u==1?(v=i(f),d==v?p.push(f.reverse()):p.push(f)):d==v?p.push(f.reverse()):p.push(f):(d=i(f),p.push(f))}t.paths=p,o=new google.maps.Polygon(t),s&&o.set("geojsonProperties",s);break;case"MultiPolygon":o=[];for(var u=0;u<e.coordinates.length;u++){var p=[],d,v;for(var h=0;h<e.coordinates[u].length;h++){var f=[];for(var a=0;a<e.coordinates[u][h].length-1;a++){var c=new google.maps.LatLng(e.coordinates[u][h][a][1],e.coordinates[u][h][a][0]);f.push(c)}h?h==1?(v=i(f),d==v?p.push(f.reverse()):p.push(f)):d==v?p.push(f.reverse()):p.push(f):(d=i(f),p.push(f))}t.paths=p,o.push(new google.maps.Polygon(t))}if(s)for(var a=0;a<o.length;a++)o[a].set("geojsonProperties",s);break;case"GeometryCollection":o=[];if(!e.geometries)o=r('Invalid GeoJSON object: GeometryCollection object missing "geometries" member.');else for(var u=0;u<e.geometries.length;u++)o.push(n(e.geometries[u],t,s||null));break;default:o=r('Invalid GeoJSON object: Geometry object must be one of "Point", "LineString", "Polygon" or "MultiPolygon".')}return o},r=function(e){return{type:"Error",message:e}},i=function(e){var t,n=0;for(var r=0;r<e.length-2;r++)n+=(e[r+1].lat()-e[r].lat())*(e[r+2].lng()-e[r].lng())-(e[r+2].lat()-e[r].lat())*(e[r+1].lng()-e[r].lng());return n>0?t=!0:t=!1,t},s,o=t||{};switch(e.type){case"FeatureCollection":if(!e.features)s=r('Invalid GeoJSON object: FeatureCollection object missing "features" member.');else{s=[];for(var u=0;u<e.features.length;u++)s.push(n(e.features[u].geometry,o,e.features[u].properties))}break;case"GeometryCollection":if(!e.geometries)s=r('Invalid GeoJSON object: GeometryCollection object missing "geometries" member.');else{s=[];for(var u=0;u<e.geometries.length;u++)s.push(n(e.geometries[u],o))}break;case"Feature":!e.properties||!e.geometry?s=r('Invalid GeoJSON object: Feature object missing "properties" or "geometry" member.'):s=n(e.geometry,o,e.properties);break;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":s=e.coordinates?s=n(e,o):r('Invalid GeoJSON object: Geometry object missing "coordinates" member.');break;default:s=r('Invalid GeoJSON object: GeoJSON object must be one of "Point", "LineString", "Polygon", "MultiPolygon", "Feature", "FeatureCollection" or "GeometryCollection".')}return s};(function(e,t,n){e.fn.jScrollPane=function(r){function i(r,i){function V(t){var i,o,g,y,w,E,x=!1,T=!1;s=t;if(u===n)w=r.scrollTop(),E=r.scrollLeft(),r.css({overflow:"hidden",padding:0}),a=r.innerWidth()+F,f=r.innerHeight(),r.width(a),u=e('<div class="jspPane" />').css("padding",j).append(r.children()),l=e('<div class="jspContainer" />').css({width:a+"px",height:f+"px"}).append(u).appendTo(r);else{r.css("width",""),x=s.stickToBottom&&mt(),T=s.stickToRight&&gt(),y=r.innerWidth()+F!=a||r.outerHeight()!=f,y&&(a=r.innerWidth()+F,f=r.innerHeight(),l.css({width:a+"px",height:f+"px"}));if(!y&&I==c&&u.outerHeight()==h){r.width(a);return}I=c,u.css("width",""),r.width(a),l.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}u.css("overflow","auto"),t.contentWidth?c=t.contentWidth:c=u[0].scrollWidth,h=u[0].scrollHeight,u.css("overflow",""),p=c/a,d=h/f,v=d>1,m=p>1,!m&&!v?(r.removeClass("jspScrollable"),u.css({top:0,width:l.width()-F}),bt(),St(),Tt(),rt()):(r.addClass("jspScrollable"),i=s.maintainPosition&&(b||S),i&&(o=dt(),g=vt()),J(),Q(),Y(),i&&(ht(T?c-a:o,!1),ct(x?h-f:g,!1)),Et(),yt(),kt(),s.enableKeyboardNavigation&&xt(),s.clickOnTrack&&nt(),Nt(),s.hijackInternalLinks&&Ct()),s.autoReinitialise&&!B?B=setInterval(function(){V(s)},s.autoReinitialiseDelay):!s.autoReinitialise&&B&&clearInterval(B),w&&r.scrollTop(0)&&ct(w,!1),E&&r.scrollLeft(0)&&ht(E,!1),r.trigger("jsp-initialised",[m||v])}function J(){v&&(l.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'),e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'),e('<div class="jspDragBottom" />'))),e('<div class="jspCap jspCapBottom" />'))),x=l.find(">.jspVerticalBar"),T=x.find(">.jspTrack"),g=T.find(">.jspDrag"),s.showArrows&&(L=e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",et(0,-1)).bind("click.jsp",wt),A=e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",et(0,1)).bind("click.jsp",wt),s.arrowScrollOnHover&&(L.bind("mouseover.jsp",et(0,-1,L)),A.bind("mouseover.jsp",et(0,1,A))),Z(T,s.verticalArrowPositions,L,A)),C=f,l.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){C-=e(this).outerHeight()}),g.hover(function(){g.addClass("jspHover")},function(){g.removeClass("jspHover")}).bind("mousedown.jsp",function(t){e("html").bind("dragstart.jsp selectstart.jsp",wt),g.addClass("jspActive");var n=t.pageY-g.position().top;return e("html").bind("mousemove.jsp",function(e){st(e.pageY-n,!1)}).bind("mouseup.jsp mouseleave.jsp",it),!1}),K())}function K(){T.height(C+"px"),b=0,N=s.verticalGutter+T.outerWidth(),u.width(a-N-F);try{x.position().left===0&&u.css("margin-left",N+"px")}catch(e){}}function Q(){m&&(l.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'),e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'),e('<div class="jspDragRight" />'))),e('<div class="jspCap jspCapRight" />'))),O=l.find(">.jspHorizontalBar"),M=O.find(">.jspTrack"),w=M.find(">.jspDrag"),s.showArrows&&(P=e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",et(-1,0)).bind("click.jsp",wt),H=e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",et(1,0)).bind("click.jsp",wt),s.arrowScrollOnHover&&(P.bind("mouseover.jsp",et(-1,0,P)),H.bind("mouseover.jsp",et(1,0,H))),Z(M,s.horizontalArrowPositions,P,H)),w.hover(function(){w.addClass("jspHover")},function(){w.removeClass("jspHover")}).bind("mousedown.jsp",function(t){e("html").bind("dragstart.jsp selectstart.jsp",wt),w.addClass("jspActive");var n=t.pageX-w.position().left;return e("html").bind("mousemove.jsp",function(e){ut(e.pageX-n,!1)}).bind("mouseup.jsp mouseleave.jsp",it),!1}),_=l.innerWidth(),G())}function G(){l.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){_-=e(this).outerWidth()}),M.width(_+"px"),S=0}function Y(){if(m&&v){var t=M.outerHeight(),n=T.outerWidth();C-=t,e(O).find(">.jspCap:visible,>.jspArrow").each(function(){_+=e(this).outerWidth()}),_-=n,f-=n,a-=t,M.parent().append(e('<div class="jspCorner" />').css("width",t+"px")),K(),G()}m&&u.width(l.outerWidth()-F+"px"),h=u.outerHeight(),d=h/f,m&&(D=Math.ceil(1/p*_),D>s.horizontalDragMaxWidth?D=s.horizontalDragMaxWidth:D<s.horizontalDragMinWidth&&(D=s.horizontalDragMinWidth),w.width(D+"px"),E=_-D,at(S)),v&&(k=Math.ceil(1/d*C),k>s.verticalDragMaxHeight?k=s.verticalDragMaxHeight:k<s.verticalDragMinHeight&&(k=s.verticalDragMinHeight),g.height(k+"px"),y=C-k,ot(b))}function Z(e,t,n,r){var i="before",s="after",o;t=="os"&&(t=/Mac/.test(navigator.platform)?"after":"split"),t==i?s=t:t==s&&(i=t,o=n,n=r,r=o),e[i](n)[s](r)}function et(e,t,n){return function(){return tt(e,t,this,n),this.blur(),!1}}function tt(t,n,r,i){r=e(r).addClass("jspActive");var u,a,f=!0,l=function(){t!==0&&o.scrollByX(t*s.arrowButtonSpeed),n!==0&&o.scrollByY(n*s.arrowButtonSpeed),a=setTimeout(l,f?s.initialDelay:s.arrowRepeatFreq),f=!1};l(),u=i?"mouseout.jsp":"mouseup.jsp",i=i||e("html"),i.bind(u,function(){r.removeClass("jspActive"),a&&clearTimeout(a),a=null,i.unbind(u)})}function nt(){rt(),v&&T.bind("mousedown.jsp",function(t){if(t.originalTarget===n||t.originalTarget==t.currentTarget){var r=e(this),i=r.offset(),u=t.pageY-i.top-b,a,l=!0,c=function(){var e=r.offset(),n=t.pageY-e.top-k/2,i=f*s.scrollPagePercent,d=y*i/(h-f);if(u<0)b-d>n?o.scrollByY(-i):st(n);else{if(!(u>0)){p();return}b+d<n?o.scrollByY(i):st(n)}a=setTimeout(c,l?s.initialDelay:s.trackClickRepeatFreq),l=!1},p=function(){a&&clearTimeout(a),a=null,e(document).unbind("mouseup.jsp",p)};return c(),e(document).bind("mouseup.jsp",p),!1}}),m&&M.bind("mousedown.jsp",function(t){if(t.originalTarget===n||t.originalTarget==t.currentTarget){var r=e(this),i=r.offset(),u=t.pageX-i.left-S,f,l=!0,h=function(){var e=r.offset(),n=t.pageX-e.left-D/2,i=a*s.scrollPagePercent,d=E*i/(c-a);if(u<0)S-d>n?o.scrollByX(-i):ut(n);else{if(!(u>0)){p();return}S+d<n?o.scrollByX(i):ut(n)}f=setTimeout(h,l?s.initialDelay:s.trackClickRepeatFreq),l=!1},p=function(){f&&clearTimeout(f),f=null,e(document).unbind("mouseup.jsp",p)};return h(),e(document).bind("mouseup.jsp",p),!1}})}function rt(){M&&M.unbind("mousedown.jsp"),T&&T.unbind("mousedown.jsp")}function it(){e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),g&&g.removeClass("jspActive"),w&&w.removeClass("jspActive")}function st(e,t){if(!v)return;e<0?e=0:e>y&&(e=y),t===n&&(t=s.animateScroll),t?o.animate(g,"top",e,ot):(g.css("top",e),ot(e))}function ot(e){e===n&&(e=g.position().top),l.scrollTop(0),b=e;var t=b===0,i=b==y,s=e/y,o=-s*(h-f);if(q!=t||U!=i)q=t,U=i,r.trigger("jsp-arrow-change",[q,U,R,z]);ft(t,i),u.css("top",o),r.trigger("jsp-scroll-y",[-o,t,i]).trigger("scroll")}function ut(e,t){if(!m)return;e<0?e=0:e>E&&(e=E),t===n&&(t=s.animateScroll),t?o.animate(w,"left",e,at):(w.css("left",e),at(e))}function at(e){e===n&&(e=w.position().left),l.scrollTop(0),S=e;var t=S===0,i=S==E,s=e/E,o=-s*(c-a);if(R!=t||z!=i)R=t,z=i,r.trigger("jsp-arrow-change",[q,U,R,z]);lt(t,i),u.css("left",o),r.trigger("jsp-scroll-x",[-o,t,i]).trigger("scroll")}function ft(e,t){s.showArrows&&(L[e?"addClass":"removeClass"]("jspDisabled"),A[t?"addClass":"removeClass"]("jspDisabled"))}function lt(e,t){s.showArrows&&(P[e?"addClass":"removeClass"]("jspDisabled"),H[t?"addClass":"removeClass"]("jspDisabled"))}function ct(e,t){var n=e/(h-f);st(n*y,t)}function ht(e,t){var n=e/(c-a);ut(n*E,t)}function pt(t,n,r){var i,o,u,c=0,h=0,p,d,v,m,g,y;try{i=e(t)}catch(b){return}o=i.outerHeight(),u=i.outerWidth(),l.scrollTop(0),l.scrollLeft(0);while(!i.is(".jspPane")){c+=i.position().top,h+=i.position().left,i=i.offsetParent();if(/^body|html$/i.test(i[0].nodeName))return}p=vt(),v=p+f,c<p||n?g=c-s.verticalGutter:c+o>v&&(g=c-f+o+s.verticalGutter),g&&ct(g,r),d=dt(),m=d+a,h<d||n?y=h-s.horizontalGutter:h+u>m&&(y=h-a+u+s.horizontalGutter),y&&ht(y,r)}function dt(){return-u.position().left}function vt(){return-u.position().top}function mt(){var e=h-f;return e>20&&e-vt()<10}function gt(){var e=c-a;return e>20&&e-dt()<10}function yt(){l.unbind(X).bind(X,function(e,t,n,r){var i=S,u=b;return o.scrollBy(n*s.mouseWheelSpeed,-r*s.mouseWheelSpeed,!1),i==S&&u==b})}function bt(){l.unbind(X)}function wt(){return!1}function Et(){u.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(e){pt(e.target,!1)})}function St(){u.find(":input,a").unbind("focus.jsp")}function xt(){function a(){var e=S,r=b;switch(t){case 40:o.scrollByY(s.keyboardSpeed,!1);break;case 38:o.scrollByY(-s.keyboardSpeed,!1);break;case 34:case 32:o.scrollByY(f*s.scrollPagePercent,!1);break;case 33:o.scrollByY(-f*s.scrollPagePercent,!1);break;case 39:o.scrollByX(s.keyboardSpeed,!1);break;case 37:o.scrollByX(-s.keyboardSpeed,!1)}return n=e!=S||r!=b,n}var t,n,i=[];m&&i.push(O[0]),v&&i.push(x[0]),u.focus(function(){r.focus()}),r.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(r){if(r.target!==this&&(!i.length||!e(r.target).closest(i).length))return;var s=S,o=b;switch(r.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:t=r.keyCode,a();break;case 35:ct(h-f),t=null;break;case 36:ct(0),t=null}return n=r.keyCode==t&&s!=S||o!=b,!n}).bind("keypress.jsp",function(e){return e.keyCode==t&&a(),!n}),s.hideFocus?(r.css("outline","none"),"hideFocus"in l[0]&&r.attr("hideFocus",!0)):(r.css("outline",""),"hideFocus"in l[0]&&r.attr("hideFocus",!1))}function Tt(){r.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function Nt(){if(location.hash&&location.hash.length>1){var t,n,r=escape(location.hash.substr(1));try{t=e("#"+r+', a[name="'+r+'"]')}catch(i){return}t.length&&u.find(r)&&(l.scrollTop()===0?n=setInterval(function(){l.scrollTop()>0&&(pt(t,!0),e(document).scrollTop(l.position().top),clearInterval(n))},50):(pt(t,!0),e(document).scrollTop(l.position().top)))}}function Ct(){if(e(document.body).data("jspHijack"))return;e(document.body).data("jspHijack",!0),e(document.body).delegate("a[href*=#]","click",function(n){var r=this.href.substr(0,this.href.indexOf("#")),i=location.href,s,o,u,a,f,l;location.href.indexOf("#")!==-1&&(i=location.href.substr(0,location.href.indexOf("#")));if(r!==i)return;s=escape(this.href.substr(this.href.indexOf("#")+1)),o;try{o=e("#"+s+', a[name="'+s+'"]')}catch(c){return}if(!o.length)return;u=o.closest(".jspScrollable"),a=u.data("jsp"),a.scrollToElement(o,!0),u[0].scrollIntoView&&(f=e(t).scrollTop(),l=o.offset().top,(l<f||l>f+e(t).height())&&u[0].scrollIntoView()),n.preventDefault()})}function kt(){var e,t,n,r,i,s=!1;l.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(o){var u=o.originalEvent.touches[0];e=dt(),t=vt(),n=u.pageX,r=u.pageY,i=!1,s=!0}).bind("touchmove.jsp",function(u){if(!s)return;var a=u.originalEvent.touches[0],f=S,l=b;return o.scrollTo(e+n-a.pageX,t+r-a.pageY),i=i||Math.abs(n-a.pageX)>5||Math.abs(r-a.pageY)>5,f==S&&l==b}).bind("touchend.jsp",function(e){s=!1}).bind("click.jsp-touchclick",function(e){if(i)return i=!1,!1})}function Lt(){var e=vt(),t=dt();r.removeClass("jspScrollable").unbind(".jsp"),r.replaceWith(W.append(u.children())),W.scrollTop(e),W.scrollLeft(t),B&&clearInterval(B)}var s,o=this,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q=!0,R=!0,U=!1,z=!1,W=r.clone(!1,!1).empty(),X=e.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";j=r.css("paddingTop")+" "+r.css("paddingRight")+" "+r.css("paddingBottom")+" "+r.css("paddingLeft"),F=(parseInt(r.css("paddingLeft"),10)||0)+(parseInt(r.css("paddingRight"),10)||0),e.extend(o,{reinitialise:function(t){t=e.extend({},s,t),V(t)},scrollToElement:function(e,t,n){pt(e,t,n)},scrollTo:function(e,t,n){ht(e,n),ct(t,n)},scrollToX:function(e,t){ht(e,t)},scrollToY:function(e,t){ct(e,t)},scrollToPercentX:function(e,t){ht(e*(c-a),t)},scrollToPercentY:function(e,t){ct(e*(h-f),t)},scrollBy:function(e,t,n){o.scrollByX(e,n),o.scrollByY(t,n)},scrollByX:function(e,t){var n=dt()+Math[e<0?"floor":"ceil"](e),r=n/(c-a);ut(r*E,t)},scrollByY:function(e,t){var n=vt()+Math[e<0?"floor":"ceil"](e),r=n/(h-f);st(r*y,t)},positionDragX:function(e,t){ut(e,t)},positionDragY:function(e,t){st(e,t)},animate:function(e,t,n,r){var i={};i[t]=n,e.animate(i,{duration:s.animateDuration,easing:s.animateEase,queue:!1,step:r})},getContentPositionX:function(){return dt()},getContentPositionY:function(){return vt()},getContentWidth:function(){return c},getContentHeight:function(){return h},getPercentScrolledX:function(){return dt()/(c-a)},getPercentScrolledY:function(){return vt()/(h-f)},getIsScrollableH:function(){return m},getIsScrollableV:function(){return v},getContentPane:function(){return u},scrollToBottom:function(e){st(y,e)},hijackInternalLinks:e.noop,destroy:function(){Lt()}}),V(i)}return r=e.extend({},e.fn.jScrollPane.defaults,r),e.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){r[this]=r[this]||r.speed}),this.each(function(){var t=e(this),n=t.data("jsp");n?n.reinitialise(r):(e("script",t).filter('[type="text/javascript"],:not([type])').remove(),n=new i(t,r),t.data("jsp",n))})},e.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:n,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}})(jQuery,this),function(e){function r(t){var n=t||window.event,r=[].slice.call(arguments,1),i=0,s=!0,o=0,u=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(i=n.wheelDelta/120),n.detail&&(i=-n.detail/3),u=i,n.axis!==undefined&&n.axis===n.HORIZONTAL_AXIS&&(u=0,o=-1*i),n.wheelDeltaY!==undefined&&(u=n.wheelDeltaY/120),n.wheelDeltaX!==undefined&&(o=-1*n.wheelDeltaX/120),r.unshift(t,i,o,u),(e.event.dispatch||e.event.handle).apply(this,r)}var t=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var n=t.length;n;)e.event.fixHooks[t[--n]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],r,!1);else this.onmousewheel=r},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],r,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery),function(e){function a(){this===t.elem&&(t.pos=[-260,-260],t.elem=!1,n=3)}var t={pos:[-260,-260]},n=3,r=document,i=r.documentElement,s=r.body,o,u;e.event.special.mwheelIntent={setup:function(){var t=e(this).bind("mousewheel",e.event.special.mwheelIntent.handler);return this!==r&&this!==i&&this!==s&&t.bind("mouseleave",a),t=null,!0},teardown:function(){return e(this).unbind("mousewheel",e.event.special.mwheelIntent.handler).unbind("mouseleave",a),!0},handler:function(r,i){var s=[r.clientX,r.clientY];if(this===t.elem||Math.abs(t.pos[0]-s[0])>n||Math.abs(t.pos[1]-s[1])>n)return t.elem=this,t.pos=s,n=250,clearTimeout(u),u=setTimeout(function(){n=10},200),clearTimeout(o),o=setTimeout(function(){n=3},1500),r=e.extend({},r,{type:"mwheelIntent"}),e.event.handle.apply(this,arguments)}},e.fn.extend({mwheelIntent:function(e){return e?this.bind("mwheelIntent",e):this.trigger("mwheelIntent")},unmwheelIntent:function(e){return this.unbind("mwheelIntent",e)}}),e(function(){s=r.body,e(r).bind("mwheelIntent.mwheelIntentDefault",e.noop)})}(jQuery),function(e,t,n){function r(e,n){var r=t.createElement(e||"div"),i;for(i in n)r[i]=n[i];return r}function i(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function s(e,t,n,r){var i=["opacity",t,~~(e*100),n,r].join("-"),s=.01+n/r*100,o=Math.max(1-(1-e)/t*(100-s),e),u=h.substring(0,h.indexOf("Animation")).toLowerCase(),a=u&&"-"+u+"-"||"";return c[i]||(p.insertRule("@"+a+"keyframes "+i+"{"+"0%{opacity:"+o+"}"+s+"%{opacity:"+e+"}"+(s+.01)+"%{opacity:1}"+(s+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+o+"}"+"}",0),c[i]=1),i}function o(e,t){var r=e.style,i,s;if(r[t]!==n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(s=0;s<l.length;s++){i=l[s]+t;if(r[i]!==n)return i}}function u(e,t){for(var n in t)e.style[o(e,n)||n]=t[n];return e}function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]===n&&(e[i]=r[i])}return e}function f(e){var t={x:e.offsetLeft,y:e.offsetTop};while(e=e.offsetParent)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}var l=["webkit","Moz","ms","O"],c={},h,p=function(){var e=r("style");return i(t.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto"},v=function m(e){if(!this.spin)return new m(e);this.opts=a(e||{},m.defaults,d)};v.defaults={},a(v.prototype,{spin:function(e){this.stop();var t=this,n=t.opts,i=t.el=u(r(0,{className:n.className}),{position:"relative",zIndex:n.zIndex}),s=n.radius+n.length+n.width,o,a;e&&(e.insertBefore(i,e.firstChild||null),a=f(e),o=f(i),u(i,{left:(n.left=="auto"?a.x-o.x+(e.offsetWidth>>1):n.left+s)+"px",top:(n.top=="auto"?a.y-o.y+(e.offsetHeight>>1):n.top+s)+"px"})),i.setAttribute("aria-role","progressbar"),t.lines(i,t.opts);if(!h){var l=0,c=n.fps,p=c/n.speed,d=(1-n.opacity)/(p*n.trail/100),v=p/n.lines;!function m(){l++;for(var e=n.lines;e;e--){var r=Math.max(1-(l+e*v)%p*d,n.opacity);t.opacity(i,n.lines-e,r,n)}t.timeout=t.el&&setTimeout(m,~~(1e3/c))}()}return t},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=n),this},lines:function(e,t){function n(e,n){return u(r(),{position:"absolute",width:t.length+t.width+"px",height:t.width+"px",background:e,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/t.lines*o+t.rotate)+"deg) translate("+t.radius+"px"+",0)",borderRadius:(t.width>>1)+"px"})}var o=0,a;for(;o<t.lines;o++)a=u(r(),{position:"absolute",top:1+~(t.width/2)+"px",transform:t.hwaccel?"translate3d(0,0,0)":"",opacity:t.opacity,animation:h&&s(t.opacity,t.trail,o,t.lines)+" "+1/t.speed+"s linear infinite"}),t.shadow&&i(a,u(n("#000","0 0 4px #000"),{top:"2px"})),i(e,i(a,n(t.color,"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),!function(){function e(e,t){return r("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}var t=u(r("group"),{behavior:"url(#default#VML)"});!o(t,"transform")&&t.adj?(p.addRule(".spin-vml","behavior:url(#default#VML)"),v.prototype.lines=function(t,n){function r(){return u(e("group",{coordsize:a+" "+a,coordorigin:-o+" "+ -o}),{width:a,height:a})}function s(t,s,a){i(l,i(u(r(),{rotation:360/n.lines*t+"deg",left:~~s}),i(u(e("roundrect",{arcsize:1}),{width:o,height:n.width,left:n.radius,top:-n.width>>1,filter:a}),e("fill",{color:n.color,opacity:n.opacity}),e("stroke",{opacity:0}))))}var o=n.length+n.width,a=2*o,f=-(n.width+n.length)*2+"px",l=u(r(),{position:"absolute",top:f,left:f}),c;if(n.shadow)for(c=1;c<=n.lines;c++)s(c,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(c=1;c<=n.lines;c++)s(c);return i(t,l)},v.prototype.opacity=function(e,t,n,r){var i=e.firstChild;r=r.shadow&&r.lines||0,i&&t+r<i.childNodes.length&&(i=i.childNodes[t+r],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}):h=o(t,"animation")}(),e.Spinner=v}(window,document);var LZMA=function(){function r(e,t){postMessage({action:3,callback_num:t,result:e})}function y(){return eo}function b(){}function w(){return to}function E(){}function S(){return no}function x(){}function T(e,t){return e.detailMessage=t,e}function N(){return ro}function C(){}function k(e,t){return e}function L(){return io}function A(){}function O(e,t){e[e.explicitLength++]=t}function M(e,t){e[e.explicitLength++]=t}function _(e){var t,n;return t=(n=e.join(""),e.length=e.explicitLength=0,n),e[e.explicitLength++]=t,t}function D(e,t){var n=new Array(t);if(e>0){var r=[null,0,!1,[0,0]][e];for(var i=0;i<t;++i)n[i]=r}return n}function P(){return this.arrayClass$}function H(e,t,n,r,i){var s;return s=D(i,r),I(),R(s,U,z),s.arrayClass$=e,s.typeId$=t,s.queryId$=n,s}function B(e,t,n,r){return I(),R(r,U,z),r.arrayClass$=e,r.typeId$=t,r.queryId$=n,r}function j(e,t,n){if(n!=null){if(e.queryId$>0&&!X(n.typeId$,e.queryId$))throw new nn;if(e.queryId$<0&&(n.typeMarker$==Zs||n.typeId$==2))throw new nn}return e[t]=n}function F(){}function I(){I=Zs,U=[],z=[],q(new F,U,z)}function q(e,t,n){var r=0,i;for(var s in e)if(i=e[s])t[r]=s,n[r]=i,++r}function R(e,t,n){I();for(var r=0,i=t.length;r<i;++r)e[t[r]]=n[r]}function W(e,t){return e&&!!K[e][t]}function X(e,t){return e&&K[e][t]}function V(e,t){if(e!=null&&!X(e.typeId$,t))throw new ln;return e}function $(e,t){return e!=null&&W(e.typeId$,t)}function J(e){return~~Math.max(Math.min(e,2147483647),-2147483648)}function Q(e){return e!=null&&W(e.typeId$,2)?e:k(new A,e)}function G(e,t){var n,r;return n=e[1]+t[1],r=e[0]+t[0],tt(r,n)}function Y(e,t,n){return t==0?e:n==0?e:G(e,tt(t*n,0))}function Z(e,t){return at(~~Math.max(Math.min(e[1]/4294967296,2147483647),-2147483648)&~~Math.max(Math.min(t[1]/4294967296,2147483647),-2147483648),ut(e)&ut(t))}function et(e,t){var n,r;return e[0]==t[0]&&e[1]==t[1]?0:(n=e[1]<0,r=t[1]<0,n&&!r?-1:!n&&r?1:mt(e,t)[1]<0?-1:1)}function tt(e,t){var n,r;t%=0x10000000000000000,e%=0x10000000000000000,n=t%4294967296,r=Math.floor(e/4294967296)*4294967296,t=t-n+r,e=e-r+n;while(e<0)e+=4294967296,t-=4294967296;while(e>4294967295)e-=4294967296,t+=4294967296;t%=0x10000000000000000;while(t>0x7fffffff00000000)t-=0x10000000000000000;while(t<-0x8000000000000000)t+=0x10000000000000000;return[e,t]}function nt(e,t){var n,r,i,s,o,u;if(t[0]==0&&t[1]==0)throw Gt(new Zt,"/ by zero");if(e[0]==0&&e[1]==0)return St(),Ot;if(rt(e,(St(),Nt)))return rt(t,kt)||rt(t,Ct)?Nt:(s=dt(e,1),n=pt(nt(s,t),1),o=mt(e,ft(t,n)),G(n,nt(o,t)));if(rt(t,Nt))return Ot;if(e[1]<0)return t[1]<0?nt(ct(e),ct(t)):ct(nt(ct(e),t));if(t[1]<0)return ct(nt(e,ct(t)));u=Ot,o=e;while(et(o,t)>=0)i=it(Math.floor(gt(o)/yt(t))),i[0]==0&&i[1]==0&&(i=kt),r=ft(i,t),u=G(u,i),o=mt(o,r);return u}function rt(e,t){return e[0]==t[0]&&e[1]==t[1]}function it(e){return isNaN(e)?(St(),Ot):e<-0x8000000000000000?(St(),Nt):e>=0x8000000000000000?(St(),Tt):e>0?tt(Math.floor(e),0):tt(Math.ceil(e),0)}function st(e){var t,n;return e>-129&&e<128?(t=e+128,n=(wt(),Et)[t],n==null&&(n=Et[t]=ot(e)),n):ot(e)}function ot(e){return e>=0?[e,0]:[e+4294967296,-4294967296]}function ut(e){return e[0]>=2147483648?~~Math.max(Math.min(e[0]-4294967296,2147483647),-2147483648):~~Math.max(Math.min(e[0],2147483647),-2147483648)}function at(e,t){var n,r;return n=e*4294967296,r=t,t<0&&(r+=4294967296),[r,n]}function ft(e,t){var n,r,i,s,o,u,a,f,l;return e[0]==0&&e[1]==0?(St(),Ot):t[0]==0&&t[1]==0?(St(),Ot):rt(e,(St(),Nt))?lt(t):rt(t,Nt)?lt(e):e[1]<0?t[1]<0?ft(ct(e),ct(t)):ct(ft(ct(e),t)):t[1]<0?ct(ft(e,ct(t))):et(e,At)<0&&et(t,At)<0?tt((e[1]+e[0])*(t[1]+t[0]),0):(i=e[1]%281474976710656,s=e[1]-i,n=e[0]%65536,r=e[0]-n,a=t[1]%281474976710656,f=t[1]-a,o=t[0]%65536,u=t[0]-o,l=Ot,l=Y(l,s,o),l=Y(l,i,u),l=Y(l,i,o),l=Y(l,r,a),l=Y(l,r,u),l=Y(l,r,o),l=Y(l,n,f),l=Y(l,n,a),l=Y(l,n,u),l=Y(l,n,o),l)}function lt(e){return(ut(e)&1)==1?(St(),Nt):(St(),Ot)}function ct(e){var t,n;return rt(e,(St(),Nt))?Nt:(t=-e[1],n=-e[0],n>4294967295&&(n-=4294967296,t+=4294967296),n<0&&(n+=4294967296,t-=4294967296),[n,t])}function ht(e){return e<=30?1<<e:ht(30)*ht(e-30)}function pt(e,t){var n,r,i,s;return t&=63,rt(e,(St(),Nt))?t==0?e:Ot:e[1]<0?ct(pt(ct(e),t)):(s=ht(t),r=e[1]*s%0x10000000000000000,i=e[0]*s,n=i-i%4294967296,r+=n,i-=n,r>=0x8000000000000000&&(r-=0x10000000000000000),[i,r])}function dt(e,t){var n,r,i;return t&=63,i=ht(t),n=e[1]/i,r=Math.floor(e[0]/i),tt(r,n)}function vt(e,t){var n;return t&=63,n=dt(e,t),e[1]<0&&(n=G(n,pt((St(),Lt),63-t))),n}function mt(e,t){var n,r;return n=e[1]-t[1],r=e[0]-t[0],tt(r,n)}function gt(e){var t,n,r;return n=J(Math.log(e[1])/(St(),xt)),n<=48?e[1]+e[0]:(t=n-48,r=(1<<t)-1,e[1]+(e[0]-r))}function yt(e){var t,n,r;return n=J(Math.log(e[1])/(St(),xt)),n<=48?e[1]+e[0]:(t=n-48,r=(1<<t)-1,e[1]+(e[0]+r))}function bt(e){var t,n,r,i,s,o;if(e[0]==0&&e[1]==0)return"0";if(rt(e,(St(),Nt)))return"-9223372036854775808";if(e[1]<0)return"-"+bt(ct(e));n=e,i="";while(n[0]!=0||n[1]!=0){s=st(1e9),r=nt(n,s),t=""+ut(mt(n,ft(r,s))),n=r;if(n[0]!=0||n[1]!=0){o=9-t.length;for(;o>0;--o)t="0"+t}i=t+i}return i}function wt(){wt=Zs,Et=H(oo,0,9,256,0)}function St(){St=Zs,xt=Math.log(2),Tt=g,Nt=u,Ct=st(-1),kt=st(1),Lt=st(2),At=d,Ot=st(0)}function Mt(){return uo}function _t(){}function Dt(e,t){return Pt(e,t,0,t.length),e}function Pt(e,t,n,r){return e.buf=t,e.pos=n,e.count=n+r,e.count>t.length&&(e.count=t.length),e}function Ht(e){return e.pos>=e.count?-1:e.buf[e.pos++]&255}function Bt(e,t,n,r){return e.pos>=e.count?-1:(r=En(r,e.count-e.pos),On(e.buf,e.pos,t,n,r),e.pos+=r,r)}function jt(){return ao}function Ft(){}function It(){return lo}function qt(){}function Rt(e){return e.buf=H(fo,0,-1,32,1),e}function Ut(e,t){var n;if(t<=e.buf.length)return;t=wn(t,e.buf.length*2),n=H(fo,0,-1,t,1),On(e.buf,0,n,0,e.buf.length),e.buf=n}function zt(e){var t;return t=H(fo,0,-1,e.count,1),On(e.buf,0,t,0,e.count),t}function Wt(e,t){Ut(e,e.count+1),e.buf[e.count++]=t<<24>>24}function Xt(e,t,n,r){Ut(e,e.count+r),On(t,n,e.buf,e.count,r),e.count+=r}function Vt(){return co}function $t(){}function Jt(e,t){return e.detailMessage=t,e}function Kt(){return ho}function Qt(){}function Gt(e,t){return e.detailMessage=t,e}function Yt(){return vo}function Zt(){}function en(e,t){return e.detailMessage=t,e}function tn(){return mo}function nn
(){}function rn(e,t){var n;return n=new an,n.typeName=e+t,n}function sn(e,t){var n;return n=new an,n.typeName=e+t,n}function on(e,t){var n;return n=new an,n.typeName=e+t,n}function un(){return yo}function an(){}function fn(){return bo}function ln(){}function cn(){return po}function hn(){}function pn(e,t){return e.detailMessage=t,e}function dn(){return wo}function vn(){}function mn(){return Eo}function gn(){}function yn(){return So}function bn(){}function wn(e,t){return e>t?e:t}function En(e,t){return e<t?e:t}function Sn(){return To}function xn(){}function Tn(e,t){return t==null?!1:String(e)==t}function Nn(e,t,n,r,i){var s;for(s=t;s<n;++s)r[i++]=e.charCodeAt(s)}function Cn(){return No}function kn(e){var t;return e.data=(t=[],t.explicitLength=0,t),e}function Ln(){return Co}function An(){}function On(e,t,n,r,i){var s,o,u,a,f,l,c,h;if(e==null||n==null)throw new xn;c=(e.typeMarker$==Zs||e.typeId$==2?e.getClass$():so).typeName,u=(n.typeMarker$==Zs||n.typeId$==2?n.getClass$():so).typeName;if(c.charCodeAt(0)!=91||u.charCodeAt(0)!=91)throw en(new nn,"Must be array types");if(c.charCodeAt(1)!=u.charCodeAt(1))throw en(new nn,"Array types must match");h=e.length,a=n.length;if(t<0||r<0||i<0||t+i>h||r+i>a)throw new bn;if(c.charCodeAt(1)!=76&&c.charCodeAt(1)!=91||!!Tn(c,u))for(f=0;f<i;++f)n[r+f]=e[t+f];else{l=V(e,3),s=V(n,3);if((e==null?null:e)===(n==null?null:n)&&t<r){t+=i;for(o=r+i;o-->r;)j(s,o,l[--t])}else for(o=r+i;r<o;)j(s,r++,l[t++])}}function Mn(e,t){if(!Ti(t,1<<e.dictionarySize))throw T(new C,"unexpected failure");if(!ki(t,e.fb))throw T(new C,"unexpected failure");if(!Ci(t,e.matchFinder))throw T(new C,"unexpected failure");if(!Ni(t,e.lc,e.lp,e.pb))throw T(new C,"unexpected failure")}function _n(){return Zo}function Dn(){}function Pn(e){var t;try{return Ar(e.chunker)}catch(t){t=Q(t);if($(t,10))return!1;throw t}}function Hn(e,t,n,r,i){var s,o;if(!i)throw pn(new vn,"null mode");if(et(r,a)<0)throw pn(new vn,"invalid length "+bt(r));e.length_0=r,s=ci(new Di),Mn(i,s),s._writeEndMark=!0,Li(s,n);for(o=0;o<64;o+=8)Wt(n,ut(dt(r,o))&255);e.chunker=(s._needReleaseMFStream=!1,s._inStream=t,s._finished=!1,li(s),s._rangeEncoder.Stream=n,bi(s),pi(s),hi(s),s._lenEncoder._tableSize=s._numFastBytes+1-2,Wi(s._lenEncoder,1<<s._posStateBits),s._repMatchLenEncoder._tableSize=s._numFastBytes+1-2,Wi(s._repMatchLenEncoder,1<<s._posStateBits),s.nowPos64=f,undefined,kr(new Dr,s))}function Bn(){return eu}function jn(){}function Fn(e,t,n){var r;e.output=Rt(new $t);try{Hn(e,Dt(new Ft,t),e.output,st(t.length),n)}catch(r){throw r=Q(r),$(r,10)?T(new C,"impossible exception"):r}return e}function In(){return tu}function qn(){}function Rn(e){var t,n;try{return Ar(e.chunker)}catch(t){t=Q(t);if($(t,10))return n=t,e.exception=n,!1;throw t}}function Un(e,t,n){var r,i="",s,o,u,f;o=H(fo,0,-1,5,1);for(s=0;s<o.length;++s){u=Ht(t);if(u==-1)throw Jt(new Qt,"truncated input");o[s]=u<<24>>24}r=jr(new zr);if(!Ir(r,o))throw Jt(new Qt,"corrupted input");for(s=0;s<64;s+=8){u=Ht(t);if(u==-1)throw Jt(new Qt,"truncated input");u=u.toString(16),u.length==1&&(u="0"+u),i=u+""+i}i.toLowerCase()=="ffffffffffffffffff"||i==0?e.length_0=a:(f=parseInt(i,16),f>4294967295?e.length_0=a:e.length_0=it(f)),e.chunker=Hr(r,t,n,e.length_0)}function zn(){return nu}function Wn(){}function Xn(e,t){return e.output=Rt(new $t),Un(e,Dt(new Ft,t),e.output),e}function Vn(){return ru}function $n(){}function Jn(e,t,n,r){var i;e._keepSizeBefore=t,e._keepSizeAfter=n,i=t+n+r;if(e._bufferBase==null||e._blockSize!=i)e._bufferBase=null,e._blockSize=i,e._bufferBase=H(fo,0,-1,e._blockSize,1);e._pointerToLastSafePosition=e._blockSize-n}function Kn(e,t){return e._bufferBase[e._bufferOffset+e._pos+t]}function Qn(e,t,n,r){var i,s;e._streamEndWasReached&&e._pos+t+r>e._streamPos&&(r=e._streamPos-(e._pos+t)),++n,s=e._bufferOffset+e._pos+t;for(i=0;i<r&&e._bufferBase[s+i]==e._bufferBase[s+i-n];++i);return i}function Gn(e){return e._streamPos-e._pos}function Yn(e){var t,n,r;r=e._bufferOffset+e._pos-e._keepSizeBefore,r>0&&--r,n=e._bufferOffset+e._streamPos-r;for(t=0;t<n;++t)e._bufferBase[t]=e._bufferBase[r+t];e._bufferOffset-=r}function Zn(e){var t;++e._pos,e._pos>e._posLimit&&(t=e._bufferOffset+e._pos,t>e._pointerToLastSafePosition&&Yn(e),er(e))}function er(e){var t,n,r;if(e._streamEndWasReached)return;for(;;){r=-e._bufferOffset+e._blockSize-e._streamPos;if(r==0)return;t=Bt(e._stream,e._bufferBase,e._bufferOffset+e._streamPos,r);if(t==-1){e._posLimit=e._streamPos,n=e._bufferOffset+e._posLimit,n>e._pointerToLastSafePosition&&(e._posLimit=e._pointerToLastSafePosition-e._bufferOffset),e._streamEndWasReached=!0;return}e._streamPos+=t,e._streamPos>=e._pos+e._keepSizeAfter&&(e._posLimit=e._streamPos-e._keepSizeAfter)}}function tr(e,t){e._bufferOffset+=t,e._posLimit-=t,e._pos-=t,e._streamPos-=t}function nr(){return ko}function rr(){}function ir(){ir=Zs;var e,t,n;dr=H(xo,0,-1,256,1);for(e=0;e<256;++e){n=e;for(t=0;t<8;++t)(n&1)!=0?n=n>>>1^-306674912:n>>>=1;dr[e]=n}}function sr(e,t,n,r,i){var s,o,u;return t>1073741567?!1:(e._cutValue=16+(r>>1),u=~~((t+n+r+i)/2)+256,Jn(e,t+n,r+i,u),e._matchMaxLen=r,s=t+1,e._cyclicBufferSize!=s&&(e._son=H(xo,0,-1,(e._cyclicBufferSize=s)*2,1)),o=65536,e.HASH_ARRAY&&(o=t-1,o|=o>>1,o|=o>>2,o|=o>>4,o|=o>>8,o>>=1,o|=65535,o>16777216&&(o>>=1),e._hashMask=o,++o,o+=e.kFixHashSize),o!=e._hashSizeSum&&(e._hash=H(xo,0,-1,e._hashSizeSum=o,1)),!0)}function or(e,t){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S;if(e._pos+e._matchMaxLen<=e._streamPos)v=e._matchMaxLen;else{v=e._streamPos-e._pos;if(v<e.kMinMatchCheck)return ar(e),0}y=0,m=e._pos>e._cyclicBufferSize?e._pos-e._cyclicBufferSize:0,r=e._bufferOffset+e._pos,g=1,f=0,l=0,e.HASH_ARRAY?(S=dr[e._bufferBase[r]&255]^e._bufferBase[r+1]&255,f=S&1023,S^=(e._bufferBase[r+2]&255)<<8,l=S&65535,c=(S^dr[e._bufferBase[r+3]&255]<<5)&e._hashMask):c=e._bufferBase[r]&255^(e._bufferBase[r+1]&255)<<8,i=e._hash[e.kFixHashSize+c],e.HASH_ARRAY&&(s=e._hash[f],o=e._hash[1024+l],e._hash[f]=e._pos,e._hash[1024+l]=e._pos,s>m&&e._bufferBase[e._bufferOffset+s]==e._bufferBase[r]&&(t[y++]=g=2,t[y++]=e._pos-s-1),o>m&&e._bufferBase[e._bufferOffset+o]==e._bufferBase[r]&&(o==s&&(y-=2),t[y++]=g=3,t[y++]=e._pos-o-1,s=o),y!=0&&s==i&&(y-=2,g=1)),e._hash[e.kFixHashSize+c]=e._pos,w=(e._cyclicBufferPos<<1)+1,E=e._cyclicBufferPos<<1,p=d=e.kNumHashDirectBytes,e.kNumHashDirectBytes!=0&&i>m&&e._bufferBase[e._bufferOffset+i+e.kNumHashDirectBytes]!=e._bufferBase[r+e.kNumHashDirectBytes]&&(t[y++]=g=e.kNumHashDirectBytes,t[y++]=e._pos-i-1),n=e._cutValue;for(;;){if(i<=m||n--==0){e._son[w]=e._son[E]=0;break}a=e._pos-i,u=(a<=e._cyclicBufferPos?e._cyclicBufferPos-a:e._cyclicBufferPos-a+e._cyclicBufferSize)<<1,b=e._bufferOffset+i,h=p<d?p:d;if(e._bufferBase[b+h]==e._bufferBase[r+h]){while(++h!=v)if(e._bufferBase[b+h]!=e._bufferBase[r+h])break;if(g<h){t[y++]=g=h,t[y++]=a-1;if(h==v){e._son[E]=e._son[u],e._son[w]=e._son[u+1];break}}}(e._bufferBase[b+h]&255)<(e._bufferBase[r+h]&255)?(e._son[E]=i,E=u+1,i=e._son[E],d=h):(e._son[w]=i,w=u,i=e._son[w],p=h)}return ar(e),y}function ur(e){var t;e._bufferOffset=0,e._pos=0,e._streamPos=0,e._streamEndWasReached=!1,er(e);for(t=0;t<e._hashSizeSum;++t)e._hash[t]=0;e._cyclicBufferPos=0,tr(e,-1)}function ar(e){var t;++e._cyclicBufferPos>=e._cyclicBufferSize&&(e._cyclicBufferPos=0),Zn(e),e._pos==1073741823&&(t=e._pos-e._cyclicBufferSize,fr(e._son,e._cyclicBufferSize*2,t),fr(e._hash,e._hashSizeSum,t),tr(e,t))}function fr(e,t,n){var r,i;for(r=0;r<t;++r)i=e[r],i<=n?i=0:i-=n,e[r]=i}function lr(e,t){e.HASH_ARRAY=t>2,e.HASH_ARRAY?(e.kNumHashDirectBytes=0,e.kMinMatchCheck=4,e.kFixHashSize=66560):(e.kNumHashDirectBytes=2,e.kMinMatchCheck=3,e.kFixHashSize=0)}function cr(e,t){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y;do{if(e._pos+e._matchMaxLen<=e._streamPos)p=e._matchMaxLen;else{p=e._streamPos-e._pos;if(p<e.kMinMatchCheck){ar(e);continue}}d=e._pos>e._cyclicBufferSize?e._pos-e._cyclicBufferSize:0,r=e._bufferOffset+e._pos,e.HASH_ARRAY?(y=dr[e._bufferBase[r]&255]^e._bufferBase[r+1]&255,u=y&1023,e._hash[u]=e._pos,y^=(e._bufferBase[r+2]&255)<<8,a=y&65535,e._hash[1024+a]=e._pos,f=(y^dr[e._bufferBase[r+3]&255]<<5)&e._hashMask):f=e._bufferBase[r]&255^(e._bufferBase[r+1]&255)<<8,i=e._hash[e.kFixHashSize+f],e._hash[e.kFixHashSize+f]=e._pos,m=(e._cyclicBufferPos<<1)+1,g=e._cyclicBufferPos<<1,c=h=e.kNumHashDirectBytes,n=e._cutValue;for(;;){if(i<=d||n--==0){e._son[m]=e._son[g]=0;break}o=e._pos-i,s=(o<=e._cyclicBufferPos?e._cyclicBufferPos-o:e._cyclicBufferPos-o+e._cyclicBufferSize)<<1,v=e._bufferOffset+i,l=c<h?c:h;if(e._bufferBase[v+l]==e._bufferBase[r+l]){while(++l!=p)if(e._bufferBase[v+l]!=e._bufferBase[r+l])break;if(l==p){e._son[g]=e._son[s],e._son[m]=e._son[s+1];break}}(e._bufferBase[v+l]&255)<(e._bufferBase[r+l]&255)?(e._son[g]=i,g=s+1,i=e._son[g],h=l):(e._son[m]=i,m=s,i=e._son[m],c=l)}ar(e)}while(--t!=0)}function hr(){return Lo}function pr(){}function vr(e,t,n){var r;r=e._pos-t-1,r<0&&(r+=e._windowSize);for(;n!=0;--n)r>=e._windowSize&&(r=0),e._buffer[e._pos++]=e._buffer[r++],e._pos>=e._windowSize&&gr(e)}function mr(e,t){if(e._buffer==null||e._windowSize!=t)e._buffer=H(fo,0,-1,t,1);e._windowSize=t,e._pos=0,e._streamPos=0}function gr(e){var t;t=e._pos-e._streamPos;if(t==0)return;Xt(e._stream,e._buffer,e._streamPos,t),e._pos>=e._windowSize&&(e._pos=0),e._streamPos=e._pos}function yr(e,t){var n;return n=e._pos-t-1,n<0&&(n+=e._windowSize),e._buffer[n]}function br(e,t){t||(e._streamPos=0,e._pos=0)}function wr(e,t){e._buffer[e._pos++]=t,e._pos>=e._windowSize&&gr(e)}function Er(e){gr(e),e._stream=null}function Sr(e,t){gr(e),e._stream=null,e._stream=t}function xr(){return Ao}function Tr(){}function Nr(e){return e-=2,e<4?e:3}function Cr(e){return e<4?0:e<10?e-3:e-6}function kr(e,t){return e.encoder=t,e.decoder=null,e.alive=!0,e}function Lr(e,t){return e.decoder=t,e.encoder=null,e.alive=!0,e}function Ar(e){var t;if(!e.alive)throw new gn;t=!0;try{return e.encoder?Mr(e):Or(e),t=!1,e.alive}finally{t&&(e.alive=!1)}}function Or(e){var t;t=Br(e.decoder);if(t==-1)throw Jt(new Qt,"corrupted input");e.inBytesProcessed=a,e.outBytesProcessed=e.decoder.nowPos64;if(t==1||et(e.decoder.outSize,f)>=0&&et(e.decoder.nowPos64,e.decoder.outSize)>=0)Pr(e.decoder),e.alive=!1}function Mr(e){fi(e.encoder,e.encoder.processedInSize,e.encoder.processedOutSize,e.encoder.finished),e.inBytesProcessed=e.encoder.processedInSize[0],e.encoder.finished[0]&&(xi(e.encoder),e.alive=!1)}function _r(){return Oo}function Dr(){}function Pr(e){gr(e.m_OutWindow),Er(e.m_OutWindow),e.m_RangeDecoder.Stream=null}function Hr(e,t,n,r){return e.m_RangeDecoder.Stream=t,Sr(e.m_OutWindow,n),Fr(e),e.state=0,e.rep0=0,e.rep1=0,e.rep2=0,e.rep3=0,e.outSize=r,e.nowPos64=f,e.prevByte=0,Lr(new Dr,e)}function Br(e){var t,n,r,i,s,o;o=ut(e.nowPos64)&e.m_PosStateMask;if(xs(e.m_RangeDecoder,e.m_IsMatchDecoders,(e.state<<4)+o)==0)t=Gr(e.m_LiteralDecoder,ut(e.nowPos64),e.prevByte),e.state<7?e.prevByte=ti(t,e.m_RangeDecoder):e.prevByte=ni(t,e.m_RangeDecoder,yr(e.m_OutWindow,e.rep0)),wr(e.m_OutWindow,e.prevByte),e.state=Cr(e.state),e.nowPos64=G(e.nowPos64,l);else{if(xs(e.m_RangeDecoder,e.m_IsRepDecoders,e.state)==1)r=0,xs(e.m_RangeDecoder,e.m_IsRepG0Decoders,e.state)==0?xs(e.m_RangeDecoder,e.m_IsRep0LongDecoders,(e.state<<4)+o)==0&&(e.state=e.state<7?9:11,r=1):(xs(e.m_RangeDecoder,e.m_IsRepG1Decoders,e.state)==0?n=e.rep1:(xs(e.m_RangeDecoder,e.m_IsRepG2Decoders,e.state)==0?n=e.rep2:(n=e.rep3,e.rep3=e.rep2),e.rep2=e.rep1),e.rep1=e.rep0,e.rep0=n),r==0&&(r=Xr(e.m_RepLenDecoder,e.m_RangeDecoder,o)+2,e.state=e.state<7?8:11);else{e.rep3=e.rep2,e.rep2=e.rep1,e.rep1=e.rep0,r=2+Xr(e.m_LenDecoder,e.m_RangeDecoder,o),e.state=e.state<7?7:10,s=fs(e.m_PosSlotDecoder[Nr(r)],e.m_RangeDecoder);if(s>=4){i=(s>>1)-1,e.rep0=(2|s&1)<<i;if(s<14)e.rep0+=cs(e.m_PosDecoders,e.rep0-s-1,e.m_RangeDecoder,i);else{e.rep0+=Ts(e.m_RangeDecoder,i-4)<<4,e.rep0+=ls(e.m_PosAlignDecoder,e.m_RangeDecoder);if(e.rep0<0)return e.rep0==-1?1:-1}}else e.rep0=s}if(et(st(e.rep0),e.nowPos64)>=0||e.rep0>=e.m_DictionarySizeCheck)return-1;vr(e.m_OutWindow,e.rep0,r),e.nowPos64=G(e.nowPos64,st(r)),e.prevByte=yr(e.m_OutWindow,0)}return 0}function jr(e){var t;e.m_OutWindow=new Tr,e.m_RangeDecoder=new Ls,e.m_IsMatchDecoders=H(Mo,0,-1,192,1),e.m_IsRepDecoders=H(Mo,0,-1,12,1),e.m_IsRepG0Decoders=H(Mo,0,-1,12,1),e.m_IsRepG1Decoders=H(Mo,0,-1,12,1),e.m_IsRepG2Decoders=H(Mo,0,-1,12,1),e.m_IsRep0LongDecoders=H(Mo,0,-1,192,1),e.m_PosSlotDecoder=H(_o,0,7,4,0),e.m_PosDecoders=H(Mo,0,-1,114,1),e.m_PosAlignDecoder=as(new ps,4),e.m_LenDecoder=Vr(new Kr),e.m_RepLenDecoder=Vr(new Kr),e.m_LiteralDecoder=new ei;for(t=0;t<4;++t)e.m_PosSlotDecoder[t]=as(new ps,6);return e}function Fr(e){var t;br(e.m_OutWindow,!1),Cs(e.m_IsMatchDecoders),Cs(e.m_IsRep0LongDecoders),Cs(e.m_IsRepDecoders),Cs(e.m_IsRepG0Decoders),Cs(e.m_IsRepG1Decoders),Cs(e.m_IsRepG2Decoders),Cs(e.m_PosDecoders),Yr(e.m_LiteralDecoder);for(t=0;t<4;++t)Cs(e.m_PosSlotDecoder[t].Models);$r(e.m_LenDecoder),$r(e.m_RepLenDecoder),Cs(e.m_PosAlignDecoder.Models),Ns(e.m_RangeDecoder)}function Ir(e,t){var n,r,i,s,o,u,a;if(t.length<5)return!1;a=t[0]&255,i=a%9,u=~~(a/9),s=u%5,o=~~(u/5),n=0;for(r=0;r<4;++r)n+=(t[1+r]&255)<<r*8;return Rr(e,i,s,o)?qr(e,n):!1}function qr(e,t){return t<0?!1:(e.m_DictionarySize!=t&&(e.m_DictionarySize=t,e.m_DictionarySizeCheck=wn(e.m_DictionarySize,1),mr(e.m_OutWindow,wn(e.m_DictionarySizeCheck,4096))),!0)}function Rr(e,t,n,r){var i;return t>8||n>4||r>4?!1:(Qr(e.m_LiteralDecoder,n,t),i=1<<r,Wr(e.m_LenDecoder,i),Wr(e.m_RepLenDecoder,i),e.m_PosStateMask=i-1,!0)}function Ur(){return Do}function zr(){}function Wr(e,t){for(;e.m_NumPosStates<t;++e.m_NumPosStates)e.m_LowCoder[e.m_NumPosStates]=as(new ps,3),e.m_MidCoder[e.m_NumPosStates]=as(new ps,3)}function Xr(e,t,n){var r;return xs(t,e.m_Choice,0)==0?fs(e.m_LowCoder[n],t):(r=8,xs(t,e.m_Choice,1)==0?r+=fs(e.m_MidCoder[n],t):r+=8+fs(e.m_HighCoder,t),r)}function Vr(e){return e.m_Choice=H(Mo,0,-1,2,1),e.m_LowCoder=H(_o,0,7,16,0),e.m_MidCoder=H(_o,0,7,16,0),e.m_HighCoder=as(new ps,8),e}function $r(e){var t;Cs(e.m_Choice);for(t=0;t<e.m_NumPosStates;++t)Cs(e.m_LowCoder[t].Models),Cs(e.m_MidCoder[t].Models);Cs(e.m_HighCoder.Models)}function Jr(){return Po}function Kr(){}function Qr(e,t,n){var r,i;if(e.m_Coders!=null&&e.m_NumPrevBits==n&&e.m_NumPosBits==t)return;e.m_NumPosBits=t,e.m_PosMask=(1<<t)-1,e.m_NumPrevBits=n,i=1<<e.m_NumPrevBits+e.m_NumPosBits,e.m_Coders=H(Ho,0,4,i,0);for(r=0;r<i;++r)e.m_Coders[r]=ri(new si)}function Gr(e,t,n){return e.m_Coders[((t&e.m_PosMask)<<e.m_NumPrevBits)+((n&255)>>>8-e.m_NumPrevBits)]}function Yr(e){var t,n;n=1<<e.m_NumPrevBits+e.m_NumPosBits;for(t=0;t<n;++t)Cs(e.m_Coders[t].m_Decoders)}function Zr(){return Bo}function ei(){}function ti(e,t){var n;n=1;do n=n<<1|xs(t,e.m_Decoders,n);while(n<256);return n<<24>>24}function ni(e,t,n){var r,i,s;s=1;do{i=n>>7&1,n<<=1,r=xs(t,e.m_Decoders,(1+i<<8)+s),s=s<<1|r;if(i!=r){while(s<256)s=s<<1|xs(t,e.m_Decoders,s);break}}while(s<256);return s<<24>>24}function ri(e){return e.m_Decoders=H(Mo,0,-1,768,1),e}function ii(){return jo}function si(){}function oi(){oi=Zs;var e,t,n,r;Pi=H(fo,0,-1,2048,1),e=2,Pi[0]=0,Pi[1]=1;for(r=2;r<22;++r){n=1<<(r>>1)-1;for(t=0;t<n;++t,++e)Pi[e]=r<<24>>24}}function ui(e,t){var n,r,i,s;e._optimumEndIndex=t,i=e._optimum[t].PosPrev,r=e._optimum[t].BackPrev;do e._optimum[t].Prev1IsChar&&(is(e._optimum[i]),e._optimum[i].PosPrev=i-1,e._optimum[t].Prev2&&(e._optimum[i-1].Prev1IsChar=!1,e._optimum[i-1].PosPrev=e._optimum[t].PosPrev2,e._optimum[i-1].BackPrev=e._optimum[t].BackPrev2)),s=i,n=r,r=e._optimum[s].BackPrev,i=e._optimum[s].PosPrev,e._optimum[s].BackPrev=n,e._optimum[s].PosPrev=t,t=s;while(t>0);return e.backRes=e._optimum[0].BackPrev,e._optimumCurrentIndex=e._optimum[0].PosPrev,e._optimumCurrentIndex}function ai(e){var t;e._state=0,e._previousByte=0;for(t=0;t<4;++t)e._repDistances[t]=0}function fi(e,t,n,r){var i,s,o,u,a,c,p,d,v,m,g,y,b,w,E;t[0]=f,n[0]=f,r[0]=!0,e._inStream&&(e._matchFinder._stream=e._inStream,ur(e._matchFinder),e._needReleaseMFStream=!0,e._inStream=null);if(e._finished)return;e._finished=!0,w=e.nowPos64;if(rt(e.nowPos64,f)){if(Gn(e._matchFinder)==0){di(e,ut(e.nowPos64));return}Ei(e),b=ut(e.nowPos64)&e._posStateMask,Os(e._rangeEncoder,e._isMatch,(e._state<<4)+b,0),e._state=Cr(e._state),o=Kn(e._matchFinder,-e._additionalOffset),Yi(Ji(e._literalEncoder,ut(e.nowPos64),e._previousByte),e._rangeEncoder,o),e._previousByte=o,--e._additionalOffset,e.nowPos64=G(e.nowPos64,l)}if(Gn(e._matchFinder)==0){di(e,ut(e.nowPos64));return}for(;;){p=vi(e,ut(e.nowPos64)),m=e.backRes,b=ut(e.nowPos64)&e._posStateMask,s=(e._state<<4)+b;if(p==1&&m==-1)Os(e._rangeEncoder,e._isMatch,s,0),o=Kn(e._matchFinder,-e._additionalOffset),E=Ji(e._literalEncoder,ut(e.nowPos64),e._previousByte),e._state<7?Yi(E,e._rangeEncoder,o):(v=Kn(e._matchFinder,-e._repDistances[0]-1-e._additionalOffset),Zi(E,e._rangeEncoder,v,o)),e._previousByte=o,e._state=Cr(e._state);else{Os(e._rangeEncoder,e._isMatch,s,1);if(m<4){Os(e._rangeEncoder,e._isRep,e._state,1),m==0?(Os(e._rangeEncoder,e._isRepG0,e._state,0),p==1?Os(e._rangeEncoder,e._isRep0Long,s,0):Os(e._rangeEncoder,e._isRep0Long,s,1)):(Os(e._rangeEncoder,e._isRepG0,e._state,1),m==1?Os(e._rangeEncoder,e._isRepG1,e._state,0):(Os(e._rangeEncoder,e._isRepG1,e._state,1),Os(e._rangeEncoder,e._isRepG2,e._state,m-2))),p==1?e._state=e._state<7?9:11:(Ri(e._repMatchLenEncoder,e._rangeEncoder,p-2,b),e._state=e._state<7?8:11),u=e._repDistances[m];if(m!=0){for(c=m;c>=1;--c)e._repDistances[c]=e._repDistances[c-1];e._repDistances[0]=u}}else{Os(e._rangeEncoder,e._isRep,e._state,0),e._state=e._state<7?7:10,Ri(e._lenEncoder,e._rangeEncoder,p-2,b),m-=4,y=Oi(m),d=Nr(p),vs(e._posSlotEncoder[d],e._rangeEncoder,y),y>=4&&(a=(y>>1)-1,i=(2|y&1)<<a,g=m-i,y<14?bs(e._posEncoders,i-y-1,e._rangeEncoder,a,g):(Ms(e._rangeEncoder,g>>4,a-4),gs(e._posAlignEncoder,e._rangeEncoder,g&15),++e._alignPriceCount)),u=m;for(c=3;c>=1;--c)e._repDistances[c]=e._repDistances[c-1];e._repDistances[0]=u,++e._matchPriceCount}e._previousByte=Kn(e._matchFinder,p-1-e._additionalOffset)}e._additionalOffset-=p,e.nowPos64=G(e.nowPos64,st(p));if(e._additionalOffset==0){e._matchPriceCount>=128&&pi(e),e._alignPriceCount>=16&&hi(e),t[0]=e.nowPos64,n[0]=Ds(e._rangeEncoder);if(Gn(e._matchFinder)==0){di(e,ut(e.nowPos64));return}if(et(mt(e.nowPos64,w),h)>=0){e._finished=!1,r[0]=!1;return}}}}function li(e){var t,n;e._matchFinder||(t=(ir(),new pr),n=4,e._matchFinderType==0&&(n=2),lr(t,n),e._matchFinder=t),$i(e._literalEncoder,e._numLiteralPosStateBits,e._numLiteralContextBits);if(e._dictionarySize==e._dictionarySizePrev&&e._numFastBytesPrev==e._numFastBytes)return;sr(e._matchFinder,e._dictionarySize,4096,e._numFastBytes,274),e._dictionarySizePrev=e._dictionarySize,e._numFastBytesPrev=e._numFastBytes}function ci(e){var t;oi(),e._repDistances=H(xo,0,-1,4,1),e._optimum=H(Fo,0,6,4096,0),e._rangeEncoder=(As(),new Is),e._isMatch=H(Mo,0,-1,192,1),e._isRep=H(Mo,0,-1,12,1),e._isRepG0=H(Mo,0,-1,12,1),e._isRepG1=H(Mo,0,-1,12,1),e._isRepG2=H(Mo,0,-1,12,1),e._isRep0Long=H(Mo,0,-1,192,1),e._posSlotEncoder=H(Io,0,8,4,0),e._posEncoders=H(Mo,0,-1,114,1),e._posAlignEncoder=ds(new Ss,4),e._lenEncoder=Ui(new Vi),e._repMatchLenEncoder=Ui(new Vi),e._literalEncoder=new Gi,e._matchDistances=H(xo,0,-1,548,1),e._posSlotPrices=H(xo,0,-1,256,1),e._distancesPrices=H(xo,0,-1,512,1),e._alignPrices=H(xo,0,-1,16,1),e.reps=H(xo,0,-1,4,1),e.repLens=H(xo,0,-1,4,1),e.processedInSize=H(qo,0,-1,1,3),e.processedOutSize=H(qo,0,-1,1,3),e.finished=H(Ro,0,-1,1,2),e.properties=H(fo,0,-1,5,1),e.tempPrices=H(xo,0,-1,128,1);for(t=0;t<4096;++t)e._optimum[t]=new us;for(t=0;t<4;++t)e._posSlotEncoder[t]=ds(new Ss,6);return e}function hi(e){var t;for(t=0;t<16;++t)e._alignPrices[t]=ys(e._posAlignEncoder,t);e._alignPriceCount=0}function pi(e){var t,n,r,i,s,o,u,a;for(i=4;i<128;++i)o=Oi(i),r=(o>>1)-1,t=(2|o&1)<<r,e.tempPrices[i]=ws(e._posEncoders,t-o-1,r,i-t);for(s=0;s<4;++s){n=e._posSlotEncoder[s],u=s<<6;for(o=0;o<e._distTableSize;++o)e._posSlotPrices[u+o]=ms(n,o);for(o=14;o<e._distTableSize;++o)e._posSlotPrices[u+o]+=(o>>1)-1-4<<6;a=s*128;for(i=0;i<4;++i)e._distancesPrices[a+i]=e._posSlotPrices[u+i];for(;i<128;++i)e._distancesPrices[a+i]=e._posSlotPrices[u+Oi(i)]+e.tempPrices[i]}e._matchPriceCount=0}function di(e,t){Si(e),Ai(e,t&e._posStateMask),_s(e._rangeEncoder)}function vi(e,t){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K,Q,G;if(e._optimumEndIndex!=e._optimumCurrentIndex)return d=e._optimum[e._optimumCurrentIndex].PosPrev-e._optimumCurrentIndex,e.backRes=e._optimum[e._optimumCurrentIndex].BackPrev,e._optimumCurrentIndex=e._optimum[e._optimumCurrentIndex].PosPrev,d;e._optimumCurrentIndex=e._optimumEndIndex=0,e._longestMatchWasFound?(p=e._longestMatchLength,e._longestMatchWasFound=!1):p=Ei(e),L=e._numDistancePairs,C=Gn(e._matchFinder)+1;if(C<2)return e.backRes=-1,1;C>273&&(C=273),R=0;for(l=0;l<4;++l)e.reps[l]=e._repDistances[l],e.repLens[l]=Qn(e._matchFinder,-1,e.reps[l],273),e.repLens[l]>e.repLens[R]&&(R=l);if(e.repLens[R]>=e._numFastBytes)return e.backRes=R,d=e.repLens[R],wi(e,d-1),d;if(p>=e._numFastBytes)return e.backRes=e._matchDistances[L-1]+4,wi(e,p-1),p;a=Kn(e._matchFinder,-1),y=Kn(e._matchFinder,-e._repDistances[0]-1-1);if(p<2&&a!=y&&e.repLens[R]<2)return e.backRes=-1,1;e._optimum[0].State=e._state,H=t&e._posStateMask,e._optimum[1].Price=(As(),qs[e._isMatch[(e._state<<4)+H]>>>2])+ts(Ji(e._literalEncoder,t,e._previousByte),e._state>=7,y,a),is(e._optimum[1]),b=qs[2048-e._isMatch[(e._state<<4)+H]>>>2],q=b+qs[2048-e._isRep[e._state]>>>2],y==a&&(U=q+yi(e,e._state,H),U<e._optimum[1].Price&&(e._optimum[1].Price=U,ss(e._optimum[1]))),h=p>=e.repLens[R]?p:e.repLens[R];if(h<2)return e.backRes=e._optimum[1].BackPrev,1;e._optimum[1].PosPrev=0,e._optimum[0].Backs0=e.reps[0],e._optimum[0].Backs1=e.reps[1],e._optimum[0].Backs2=e.reps[2],e._optimum[0].Backs3=e.reps[3],c=h;do e._optimum[c--].Price=268435455;while(c>=2);for(l=0;l<4;++l){I=e.repLens[l];if(I<2)continue;j=q+gi(e,l,e._state,H);do s=j+zi(e._repMatchLenEncoder,I-2,H),_=e._optimum[I],s<_.Price&&(_.Price=s,_.PosPrev=0,_.BackPrev=l,_.Prev1IsChar=!1);while(--I>=2)}N=b+qs[e._isRep[e._state]>>>2],c=e.repLens[0]>=2?e.repLens[0]+1:2;if(c<=p){A=0;while(c>e._matchDistances[A])A+=2;for(;;++c){f=e._matchDistances[A+1],s=N+mi(e,f,c,H),_=e._optimum[c],s<_.Price&&(_.Price=s,_.PosPrev=0,_.BackPrev=f+4,_.Prev1IsChar=!1);if(c==e._matchDistances[A]){A+=2;if(A==L)break}}}n=0;for(;;){++n;if(n==h)return ui(e,n);w=Ei(e),L=e._numDistancePairs;if(w>=e._numFastBytes)return e._longestMatchLength=w,e._longestMatchWasFound=!0,ui(e,n);++t,P=e._optimum[n].PosPrev,e._optimum[n].Prev1IsChar?(--P,e._optimum[n].Prev2?(W=e._optimum[e._optimum[n].PosPrev2].State,e._optimum[n].BackPrev2<4?W=W<7?8:11:W=W<7?7:10):W=e._optimum[P].State,W=Cr(W)):W=e._optimum[P].State,P==n-1?e._optimum[n].BackPrev==0?W=W<7?9:11:W=Cr(W):(e._optimum[n].Prev1IsChar&&e._optimum[n].Prev2?(P=e._optimum[n].PosPrev2,D=e._optimum[n].BackPrev2,W=W<7?8:11):(D=e._optimum[n].BackPrev,D<4?W=W<7?8:11:W=W<7?7:10),M=e._optimum[P],D<4?D==0?(e.reps[0]=M.Backs0,e.reps[1]=M.Backs1,e.reps[2]=M.Backs2,e.reps[3]=M.Backs3):D==1?(e.reps[0]=M.Backs1,e.reps[1]=M.Backs0,e.reps[2]=M.Backs2,e.reps[3]=M.Backs3):D==2?(e.reps[0]=M.Backs2,e.reps[1]=M.Backs0,e.reps[2]=M.Backs1,e.reps[3]=M.Backs3):(e.reps[0]=M.Backs3,e.reps[1]=M.Backs0,e.reps[2]=M.Backs1,e.reps[3]=M.Backs2):(e.reps[0]=D-4,e.reps[1]=M.Backs0,e.reps[2]=M.Backs1,e.reps[3]=M.Backs2)),e._optimum[n].State=W,e._optimum[n].Backs0=e.reps[0],e._optimum[n].Backs1=e.reps[1],e._optimum[n].Backs2=e.reps[2],e._optimum[n].Backs3=e.reps[3],u=e._optimum[n].Price,a=Kn(e._matchFinder,-1),y=Kn(e._matchFinder,-e.reps[0]-1-1),H=t&e._posStateMask,r=u+qs[e._isMatch[(W<<4)+H]>>>2]+ts(Ji(e._literalEncoder,t,Kn(e._matchFinder,-2)),W>=7,y,a),x=e._optimum[n+1],E=!1,r<x.Price&&(x.Price=r,x.PosPrev=n,x.BackPrev=-1,x.Prev1IsChar=!1,E=!0),b=u+qs[2048-e._isMatch[(W<<4)+H]>>>2],q=b+qs[2048-e._isRep[W]>>>2],y==a&&!(x.PosPrev<n&&x.BackPrev==0)&&(U=q+(qs[e._isRepG0[W]>>>2]+qs[e._isRep0Long[(W<<4)+H]>>>2]),U<=x.Price&&(x.Price=U,x.PosPrev=n,x.BackPrev=0,x.Prev1IsChar=!1,E=!0)),k=Gn(e._matchFinder)+1,k=4095-n<k?4095-n:k,C=k;if(C<2)continue;C>e._numFastBytes&&(C=e._numFastBytes);if(!E&&y!=a){V=En(k-1,e._numFastBytes),m=Qn(e._matchFinder,0,e.reps[0],V);if(m>=2){X=Cr(W),B=t+1&e._posStateMask,T=r+qs[2048-e._isMatch[(X<<4)+B]>>>2]+qs[2048-e._isRep[X]>>>2],O=n+1+m;while(h<O)e._optimum[++h].Price=268435455;s=T+($=zi(e._repMatchLenEncoder,m-2,B),$+gi(e,0,X,B)),_=e._optimum[O],s<_.Price&&(_.Price=s,_.PosPrev=n+1,_.BackPrev=0,_.Prev1IsChar=!0,_.Prev2=!1)}}z=2;for(F=0;F<4;++F){v=Qn(e._matchFinder,-1,e.reps[F],C);if(v<2)continue;g=v;do{while(h<n+v)e._optimum[++h].Price=268435455;s=q+(J=zi(e._repMatchLenEncoder,v-2,H),J+gi(e,F,W,H)),_=e._optimum[n+v],s<_.Price&&(_.Price=s,_.PosPrev=n,_.BackPrev=F,_.Prev1IsChar=!1)}while(--v>=2);v=g,F==0&&(z=v+1);if(v<k){V=En(k-1-v,e._numFastBytes),m=Qn(e._matchFinder,v,e.reps[F],V);if(m>=2){X=W<7?8:11,B=t+v&e._posStateMask,i=q+(K=zi(e._repMatchLenEncoder,v-2,H),K+gi(e,F,W,H))+qs[e._isMatch[(X<<4)+B]>>>2]+ts(Ji(e._literalEncoder,t+v,Kn(e._matchFinder,v-1-1)),!0,Kn(e._matchFinder,v-1-(e.reps[F]+1)),Kn(e._matchFinder,v-1)),X=Cr(X),B=t+v+1&e._posStateMask,S=i+qs[2048-e._isMatch[(X<<4)+B]>>>2],T=S+qs[2048-e._isRep[X]>>>2],O=v+1+m;while(h<n+O)e._optimum[++h].Price=268435455;s=T+(Q=zi(e._repMatchLenEncoder,m-2,B),Q+gi(e,0,X,B)),_=e._optimum[n+O],s<_.Price&&(_.Price=s,_.PosPrev=n+v+1,_.BackPrev=0,_.Prev1IsChar=!0,_.Prev2=!0,_.PosPrev2=n,_.BackPrev2=F)}}}if(w>C){w=C;for(L=0;w>e._matchDistances[L];L+=2);e._matchDistances[L]=w,L+=2}if(w>=z){N=b+qs[e._isRep[W]>>>2];while(h<n+w)e._optimum[++h].Price=268435455;A=0;while(z>e._matchDistances[A])A+=2;for(v=z;;++v){o=e._matchDistances[A+1],s=N+mi(e,o,v,H),_=e._optimum[n+v],s<_.Price&&(_.Price=s,_.PosPrev=n,_.BackPrev=o+4,_.Prev1IsChar=!1);if(v==e._matchDistances[A]){if(v<k){V=En(k-1-v,e._numFastBytes),m=Qn(e._matchFinder,v,o,V);if(m>=2){X=W<7?7:10,B=t+v&e._posStateMask,i=s+qs[e._isMatch[(X<<4)+B]>>>2]+ts(Ji(e._literalEncoder,t+v,Kn(e._matchFinder,v-1-1)),!0,Kn(e._matchFinder,v-(o+1)-1),Kn(e._matchFinder,v-1)),X=Cr(X),B=t+v+1&e._posStateMask,S=i+qs[2048-e._isMatch[(X<<4)+B]>>>2],T=S+qs[2048-e._isRep[X]>>>2],O=v+1+m;while(h<n+O)e._optimum[++h].Price=268435455;s=T+(G=zi(e._repMatchLenEncoder,m-2,B),G+gi(e,0,X,B)),_=e._optimum[n+O],s<_.Price&&(_.Price=s,_.PosPrev=n+v+1,_.BackPrev=0,_.Prev1IsChar=!0,_.Prev2=!0,_.PosPrev2=n,_.BackPrev2=o+4)}}A+=2;if(A==L)break}}}}}function mi(e,t,n,r){var i,s;return i=Nr(n),t<128?s=e._distancesPrices[i*128+t]:s=e._posSlotPrices[(i<<6)+Mi(t)]+e._alignPrices[t&15],s+zi(e._lenEncoder,n-2,r)}function gi(e,t,n,r){var i;return t==0?(i=(As(),qs[e._isRepG0[n]>>>2]),i+=qs[2048-e._isRep0Long[(n<<4)+r]>>>2]):(i=(As(),qs[2048-e._isRepG0[n]>>>2]),t==1?i+=qs[e._isRepG1[n]>>>2]:(i+=qs[2048-e._isRepG1[n]>>>2],i+=Bs(e._isRepG2[n],t-2))),i}function yi(e,t,n){return(As(),qs[e._isRepG0[t]>>>2])+qs[e._isRep0Long[(t<<4)+n]>>>2]}function bi(e){var t;ai(e),Ps(e._rangeEncoder),js(e._isMatch),js(e._isRep0Long),js(e._isRep),js(e._isRepG0),js(e._isRepG1),js(e._isRepG2),js(e._posEncoders),Ki(e._literalEncoder);for(t=0;t<4;++t)Cs(e._posSlotEncoder[t].Models);ji(e._lenEncoder,1<<e._posStateBits),ji(e._repMatchLenEncoder,1<<e._posStateBits),Cs(e._posAlignEncoder.Models),e._longestMatchWasFound=!1,e._optimumEndIndex=0,e._optimumCurrentIndex=0,e._additionalOffset=0}function wi(e,t){t>0&&(cr(e._matchFinder,t),e._additionalOffset+=t)}function Ei(e){var t;return t=0,e._numDistancePairs=or(e._matchFinder,e._matchDistances),e._numDistancePairs>0&&(t=e._matchDistances[e._numDistancePairs-2],t==e._numFastBytes&&(t+=Qn(e._matchFinder,t-1,e._matchDistances[e._numDistancePairs-1],273-t))),++e._additionalOffset,t}function Si(e){!!e._matchFinder&&e._needReleaseMFStream&&(e._matchFinder._stream=null,e._needReleaseMFStream=!1)}function xi(e){Si(e),e._rangeEncoder.Stream=null}function Ti(e,t){var n;if(t<1||t>536870912)return!1;e._dictionarySize=t;for(n=0;t>1<<n;++n);return e._distTableSize=n*2,!0}function Ni(e,t,n,r){return n<0||n>4||t<0||t>8||r<0||r>4?!1:(e._numLiteralPosStateBits=n,e._numLiteralContextBits=t,e._posStateBits=r,e._posStateMask=(1<<e._posStateBits)-1,!0)}function Ci(e,t){var n;return t<0||t>2?!1:(n=e._matchFinderType,e._matchFinderType=t,!!e._matchFinder&&n!=e._matchFinderType&&(e._dictionarySizePrev=-1,e._matchFinder=null),!0)}function ki(e,t){return t<5||t>273?!1:(e._numFastBytes=t,!0)}function Li(e,t){var n;e.properties[0]=(e._posStateBits*5+e._numLiteralPosStateBits)*9+e._numLiteralContextBits<<24>>24;for(n=0;n<4;++n)e.properties[1+n]=e._dictionarySize>>8*n<<24>>24;Xt(t,e.properties,0,5)}function Ai(e,t){var n;if(!e._writeEndMark)return;Os(e._rangeEncoder,e._isMatch,(e._state<<4)+t,1),Os(e._rangeEncoder,e._isRep,e._state,0),e._state=e._state<7?7:10,Ri(e._lenEncoder,e._rangeEncoder,0,t),n=Nr(2),vs(e._posSlotEncoder[n],e._rangeEncoder,63),Ms(e._rangeEncoder,67108863,26),gs(e._posAlignEncoder,e._rangeEncoder,15)}function Oi(e){return e<2048?Pi[e]:e<2097152?Pi[e>>10]+20:Pi[e>>20]+40}function Mi(e){return e<131072?Pi[e>>6]+12:e<134217728?Pi[e>>16]+32:Pi[e>>26]+52}function _i(){return Uo}function Di(){}function Hi(e,t,n,r){n<8?(Os(t,e._choice,0,0),vs(e._lowCoder[r],t,n)):(n-=8,Os(t,e._choice,0,1),n<8?(Os(t,e._choice,1,0),vs(e._midCoder[r],t,n)):(Os(t,e._choice,1,1),vs(e._highCoder,t,n-8)))}function Bi(e){var t;e._choice=H(Mo,0,-1,2,1),e._lowCoder=H(Io,0,8,16,0),e._midCoder=H(Io,0,8,16,0),e._highCoder=ds(new Ss,8);for(t=0;t<16;++t)e._lowCoder[t]=ds(new Ss,3),e._midCoder[t]=ds(new Ss,3);return e}function ji(e,t){var n;js(e._choice);for(n=0;n<t;++n)Cs(e._lowCoder[n].Models),Cs(e._midCoder[n].Models);Cs(e._highCoder.Models)}function Fi(e,t,n,r,i){var s,o,u,a,f;s=(As(),qs[e._choice[0]>>>2]),o=qs[2048-e._choice[0]>>>2],u=o+qs[e._choice[1]>>>2],a=o+qs[2048-e._choice[1]>>>2],f=0;for(f=0;f<8;++f){if(f>=n)return;r[i+f]=s+ms(e._lowCoder[t],f)}for(;f<16;++f){if(f>=n)return;r[i+f]=u+ms(e._midCoder[t],f-8)}for(;f<n;++f)r[i+f]=a+ms(e._highCoder,f-8-8)}function Ii(){return Vo}function qi(){}function Ri(e,t,n,r){Hi(e,t,n,r),--e._counters[r]==0&&(Fi(e,r,e._tableSize,e._prices,r*272),e._counters[r]=e._tableSize)}function Ui(e){return Bi(e),e._prices=H(xo,0,-1,4352,1),e._counters=H(xo,0,-1,16,1),e}function zi(e,t,n){return e._prices[n*272+t]}function Wi(e,t){var n;for(n=0;n<t;++n)Fi(e,n,e._tableSize,e._prices,n*272),e._counters[n]=e._tableSize}function Xi(){return $o}function Vi(){}function $i(e,t,n){var r,i;if(e.m_Coders!=null&&e.m_NumPrevBits==n&&e.m_NumPosBits==t)return;e.m_NumPosBits=t,e.m_PosMask=(1<<t)-1,e.m_NumPrevBits=n,i=1<<e.m_NumPrevBits+e.m_NumPosBits,e.m_Coders=H(zo,0,5,i,0);for(r=0;r<i;++r)e.m_Coders[r]=es(new rs)}function Ji(e,t,n){return e.m_Coders[((t&e.m_PosMask)<<e.m_NumPrevBits)+((n&255)>>>8-e.m_NumPrevBits)]}function Ki(e){var t,n;n=1<<e.m_NumPrevBits+e.m_NumPosBits;for(t=0;t<n;++t)js(e.m_Coders[t].m_Encoders)}function Qi(){return Wo}function Gi(){}function Yi(e,t,n){var r,i,s;i=1;for(s=7;s>=0;--s)r=n>>s&1,Os(t,e.m_Encoders,i,r),i=i<<1|r}function Zi(e,t,n,r){var i,s,o,u,a,f;s=1,a=!0;for(o=7;o>=0;--o)i=r>>o&1,f=s,a&&(u=n>>o&1,f+=1+u<<8,a=u==i),Os(t,e.m_Encoders,f,i),s=s<<1|i}function es(e){return e.m_Encoders=H(Mo,0,-1,768,1),e}function ts(e,t,n,r){var i,s,o,u,a;a=0,s=1,o=7;if(t)for(;o>=0;--o){u=n>>o&1,i=r>>o&1,a+=Bs(e.m_Encoders[(1+u<<8)+s],i),s=s<<1|i;if(u!=i){--o;break}}for(;o>=0;--o)i=r>>o&1,a+=Bs(e.m_Encoders[s],i),s=s<<1|i;return a}function ns(){return Xo}function rs(){}function is(e){e.BackPrev=-1,e.Prev1IsChar=!1}function ss(e){e.BackPrev=0,e.Prev1IsChar=!1}function os(){return Jo}function us(){}function as(e,t){return e.NumBitLevels=t,e.Models=H(Mo,0,-1,1<<t,1),e}function fs(e,t){var n,r;r=1;for(n=e.NumBitLevels;n!=0;--n)r=(r<<1)+xs(t,e.Models,r);return r-(1<<e.NumBitLevels)}function ls(e,t){var n,r,i,s;i=1,s=0;for(r=0;r<e.NumBitLevels;++r)n=xs(t,e.Models,i),i<<=1,i+=n,s|=n<<r;return s}function cs(e,t,n,r){var i,s,o,u;o=1,u=0;for(s=0;s<r;++s)i=xs(n,e,t+o),o<<=1,o+=i,u|=i<<s;return u}function hs(){return Ko}function ps(){}function ds(e,t){return e.NumBitLevels=t,e.Models=H(Mo,0,-1,1<<t,1),e}function vs(e,t,n){var r,i,s;s=1;for(i=e.NumBitLevels;i!=0;)--i,r=n>>>i&1,Os(t,e.Models,s,r),s=s<<1|r}function ms(e,t){var n,r,i,s;s=0,i=1;for(r=e.NumBitLevels;r!=0;)--r,n=t>>>r&1,s+=Bs(e.Models[i],n),i=(i<<1)+n;return s}function gs(e,t,n){var r,i,s;s=1;for(i=0;i<e.NumBitLevels;++i)r=n&1,Os(t,e.Models,s,r),s=s<<1|r,n>>=1}function ys(e,t){var n,r,i,s;s=0,i=1;for(r=e.NumBitLevels;r!=0;--r)n=t&1,t>>>=1,s+=Bs(e.Models[i],n),i=i<<1|n;return s}function bs(e,t,n,r,i){var s,o,u;u=1;for(o=0;o<r;++o)s=i&1,Os(n,e,t+u,s),u=u<<1|s,i>>=1}function ws(e,t,n,r){var i,s,o,u;u=0,o=1;for(s=n;s!=0;--s)i=r&1,r>>>=1,u+=(As(),qs[((e[t+o]-i^-i)&2047)>>>2]),o=o<<1|i;return u}function Es(){return Qo}function Ss(){}function xs(e,t
,n){var r,i;return i=t[n],r=(e.Range>>>11)*i,(e.Code^-2147483648)<(r^-2147483648)?(e.Range=r,t[n]=i+(2048-i>>>5)<<16>>16,(e.Range&-16777216)==0&&(e.Code=e.Code<<8|Ht(e.Stream),e.Range<<=8),0):(e.Range-=r,e.Code-=r,t[n]=i-(i>>>5)<<16>>16,(e.Range&-16777216)==0&&(e.Code=e.Code<<8|Ht(e.Stream),e.Range<<=8),1)}function Ts(e,t){var n,r,i;r=0;for(n=t;n!=0;--n)e.Range>>>=1,i=e.Code-e.Range>>>31,e.Code-=e.Range&i-1,r=r<<1|1-i,(e.Range&-16777216)==0&&(e.Code=e.Code<<8|Ht(e.Stream),e.Range<<=8);return r}function Ns(e){var t;e.Code=0,e.Range=-1;for(t=0;t<5;++t)e.Code=e.Code<<8|Ht(e.Stream)}function Cs(e){var t;for(t=0;t<e.length;++t)e[t]=1024}function ks(){return Go}function Ls(){}function As(){As=Zs;var e,t,n,r;qs=H(xo,0,-1,512,1);for(t=8;t>=0;--t){r=1<<9-t-1,e=1<<9-t;for(n=r;n<e;++n)qs[n]=(t<<6)+(e-n<<6>>>9-t-1)}}function Os(e,t,n,r){var i,s;s=t[n],i=(e.Range>>>11)*s,r==0?(e.Range=i,t[n]=s+(2048-s>>>5)<<16>>16):(e.Low=G(e.Low,Z(st(i),m)),e.Range-=i,t[n]=s-(s>>>5)<<16>>16),(e.Range&-16777216)==0&&(e.Range<<=8,Hs(e))}function Ms(e,t,n){var r;for(r=n-1;r>=0;--r)e.Range>>>=1,(t>>>r&1)==1&&(e.Low=G(e.Low,st(e.Range))),(e.Range&-16777216)==0&&(e.Range<<=8,Hs(e))}function _s(e){var t;for(t=0;t<5;++t)Hs(e)}function Ds(e){return G(G(st(e._cacheSize),e._position),c)}function Ps(e){e._position=f,e.Low=f,e.Range=-1,e._cacheSize=1,e._cache=0}function Hs(e){var t,n;t=ut(vt(e.Low,32));if(t!=0||et(e.Low,v)<0){e._position=G(e._position,st(e._cacheSize)),n=e._cache;do Wt(e.Stream,n+t),n=255;while(--e._cacheSize!=0);e._cache=ut(e.Low)>>>24}++e._cacheSize,e.Low=pt(Z(e.Low,p),8)}function Bs(e,t){return As(),qs[((e-t^-t)&2047)>>>2]}function js(e){As();var t;for(t=0;t<e.length;++t)e[t]=1024}function Fs(){return Yo}function Is(){}function Rs(e){var t,n,r,i,s;t=kn(new An);for(n=0;n<e.length;++n){r=e[n]&255;if((r&128)==0){if(r==0)throw pn(new vn,"invalid UTF-8");M(t.data,String.fromCharCode(r&65535))}else if((r&224)==192){if(n+1>=e.length)throw pn(new vn,"invalid UTF-8");i=e[++n]&255;if((i&192)!=128)throw pn(new vn,"invalid UTF-8");O(t.data,String.fromCharCode((r&31)<<6&65535|i&63))}else{if((r&240)!=224)throw pn(new vn,"invalid UTF-8");if(n+2>=e.length)throw pn(new vn,"invalid UTF-8");i=e[++n]&255;if((i&192)!=128)throw pn(new vn,"invalid UTF-8");s=e[++n]&255;if((s&192)!=128)throw pn(new vn,"invalid UTF-8");M(t.data,String.fromCharCode(((r&15)<<12|(i&63)<<6|s&63)&65535))}}return _(t.data)}function Us(e){var t,n,r,i,s,o,u;n=(u=e.length,o=H(go,0,-1,u,1),Nn(e,0,u,o,0),o),i=0;for(s=0;s<e.length;++s)t=n[s],t>=1&&t<=127?++i:t==0||t>=128&&t<=2047?i+=2:i+=3;r=H(fo,0,-1,i,1),i=0;for(s=0;s<e.length;++s)t=n[s],t>=1&&t<=127?r[i++]=t<<24>>24:t==0||t>=128&&t<=2047?(r[i++]=(192|t>>6&31)<<24>>24,r[i++]=(128|t&63)<<24>>24):(r[i++]=(224|t>>12&15)<<24>>24,r[i++]=(128|t>>6&63)<<24>>24,r[i++]=(128|t&63)<<24>>24);return r}function zs(e){return e}function Ws(e){return e[1]+e[0]}function Xs(){function l(){var s;i=(new Date).getTime();while(Pn(t.c)){n=Ws(t.c.chunker.inBytesProcessed)/Ws(t.c.length_0);if((new Date).getTime()-i>200)return f?f(n):typeof u!="undefined"&&r(n,u),setTimeout(l,0),!1}f?f(1):typeof u!="undefined"&&r(1,u),s=zt(t.c.output).slice(0),a?a(s):typeof u!="undefined"&&postMessage({action:e,callback_num:u,result:s})}var t=zs(new Ks),n,i,s=arguments[0],o=arguments[1],u,a,f;typeof arguments[2]=="function"?(a=arguments[2],typeof arguments[3]=="function"&&(f=arguments[3])):u=arguments[2],t.mode=su(o),t.c=Fn(new qn,Us(s),t.mode),f?f(0):typeof u!="undefined"&&r(0,u),setTimeout(l,1)}function Vs(){function c(){var i;s=(new Date).getTime();while(Rn(e.d)){n=Ws(e.d.chunker.decoder.nowPos64)/Ws(e.d.length_0);if((new Date).getTime()-s>200)return l?l(n):typeof a!="undefined"&&r(n,a),setTimeout(c,0),!1}l?l(1):typeof a!="undefined"&&r(1,a),i=Rs(zt(e.d.output)),f?f(i):typeof a!="undefined"&&postMessage({action:t,callback_num:a,result:i})}var e=zs(new Ks),n,i,s,o,u=arguments[0],a,f,l;typeof arguments[1]=="function"?(f=arguments[1],typeof arguments[2]=="function"&&(l=arguments[2])):a=arguments[1],i=B(fo,0,-1,u),e.d=Xn(new $n,i),l?l(0):typeof a!="undefined"&&r(0,a),setTimeout(c,0)}function $s(e){Xs(e),Vs(e)}function Js(){return iu}function Ks(){}function Gs(){!!$stats&&$stats({moduleName:i,subSystem:"startup",evtGroup:"moduleStartup",millis:(new Date).getTime(),type:"onModuleLoadStart",className:"org.dellroad.lzma.demo.client.LZMADemo"})}function Ys(e,t,n){i=t,s=n;if(e)try{Gs()}catch(r){e(t)}else Gs()}function Zs(){}var e=1,t=2,n=3,i,s,o,u=[0,-0x8000000000000000],a=[4294967295,-4294967296],f=[0,0],l=[1,0],c=[4,0],h=[4096,0],p=[16777215,0],d=[16777216,0],v=[4278190080,0],m=[4294967295,0],g=[4294967295,0x7fffffff00000000];o=b.prototype={},o.getClass$=y,o.typeMarker$=Zs,o.typeId$=1,o=E.prototype=new b,o.getClass$=w,o.typeId$=3,o.detailMessage=null,o=x.prototype=new E,o.getClass$=S,o.typeId$=4,o=C.prototype=new x,o.getClass$=N,o.typeId$=5,o=A.prototype=new C,o.getClass$=L,o.typeId$=6,o=F.prototype=new b,o.getClass$=P,o.typeId$=0,o.arrayClass$=null,o.length=0,o.queryId$=0;var U,z,K=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1,10:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1,11:1},{2:1},{2:1},{2:1},{4:1},{5:1},{6:1},{7:1},{8:1},{9:1}],Et,xt,Tt,Nt,Ct,kt,Lt,At,Ot;o=_t.prototype=new b,o.getClass$=Mt,o.typeId$=0,o=Ft.prototype=new _t,o.getClass$=jt,o.typeId$=0,o.buf=null,o.count=0,o.pos=0,o=qt.prototype=new b,o.getClass$=It,o.typeId$=0,o=$t.prototype=new qt,o.getClass$=Vt,o.typeId$=0,o.buf=null,o.count=0,o=Qt.prototype=new x,o.getClass$=Kt,o.typeId$=7,o=Zt.prototype=new C,o.getClass$=Yt,o.typeId$=8,o=nn.prototype=new C,o.getClass$=tn,o.typeId$=9,o=an.prototype=new b,o.getClass$=un,o.typeId$=0,o.typeName=null,o=ln.prototype=new C,o.getClass$=fn,o.typeId$=12,o=hn.prototype=new b,o.getClass$=cn,o.typeId$=0,o=vn.prototype=new C,o.getClass$=dn,o.typeId$=13,o=gn.prototype=new C,o.getClass$=mn,o.typeId$=14,o=bn.prototype=new C,o.getClass$=yn,o.typeId$=15,o=xn.prototype=new C,o.getClass$=Sn,o.typeId$=16,o=String.prototype,o.getClass$=Cn,o.typeId$=2,o=An.prototype=new b,o.getClass$=Ln,o.typeId$=0,o=Dn.prototype=new hn,o.getClass$=_n,o.typeId$=0,o.dictionarySize=0,o.fb=0,o.lc=0,o.lp=0,o.matchFinder=0,o.pb=0,o=jn.prototype=new b,o.getClass$=Bn,o.typeId$=0,o.chunker=null,o=qn.prototype=new jn,o.getClass$=In,o.typeId$=0,o.output=null,o=Wn.prototype=new b,o.getClass$=zn,o.typeId$=0,o.chunker=null,o.exception=null,o.length_0=f,o=$n.prototype=new Wn,o.getClass$=Vn,o.typeId$=0,o.output=null,o=rr.prototype=new b,o.getClass$=nr,o.typeId$=0,o._blockSize=0,o._bufferBase=null,o._bufferOffset=0,o._keepSizeAfter=0,o._keepSizeBefore=0,o._pointerToLastSafePosition=0,o._pos=0,o._posLimit=0,o._stream=null,o._streamEndWasReached=!1,o._streamPos=0,o=pr.prototype=new rr,o.getClass$=hr,o.typeId$=0,o.HASH_ARRAY=!0,o._cutValue=255,o._cyclicBufferPos=0,o._cyclicBufferSize=0,o._hash=null,o._hashMask=0,o._hashSizeSum=0,o._matchMaxLen=0,o._son=null,o.kFixHashSize=66560,o.kMinMatchCheck=4,o.kNumHashDirectBytes=0;var dr;o=Tr.prototype=new b,o.getClass$=xr,o.typeId$=0,o._buffer=null,o._pos=0,o._stream=null,o._streamPos=0,o._windowSize=0,o=Dr.prototype=new b,o.getClass$=_r,o.typeId$=0,o.alive=!1,o.decoder=null,o.encoder=null,o=zr.prototype=new b,o.getClass$=Ur,o.typeId$=0,o.m_DictionarySize=-1,o.m_DictionarySizeCheck=-1,o.m_PosStateMask=0,o.nowPos64=f,o.outSize=f,o.prevByte=0,o.rep0=0,o.rep1=0,o.rep2=0,o.rep3=0,o.state=0,o=Kr.prototype=new b,o.getClass$=Jr,o.typeId$=0,o.m_NumPosStates=0,o=ei.prototype=new b,o.getClass$=Zr,o.typeId$=0,o.m_Coders=null,o.m_NumPosBits=0,o.m_NumPrevBits=0,o.m_PosMask=0,o=si.prototype=new b,o.getClass$=ii,o.typeId$=17,o=Di.prototype=new b,o.getClass$=_i,o.typeId$=0,o._additionalOffset=0,o._alignPriceCount=0,o._dictionarySize=4194304,o._dictionarySizePrev=-1,o._distTableSize=44,o._finished=!1,o._inStream=null,o._longestMatchLength=0,o._longestMatchWasFound=!1,o._matchFinder=null,o._matchFinderType=1,o._matchPriceCount=0,o._needReleaseMFStream=!1,o._numDistancePairs=0,o._numFastBytes=32,o._numFastBytesPrev=-1,o._numLiteralContextBits=3,o._numLiteralPosStateBits=0,o._optimumCurrentIndex=0,o._optimumEndIndex=0,o._posStateBits=2,o._posStateMask=3,o._previousByte=0,o._state=0,o._writeEndMark=!1,o.backRes=0,o.nowPos64=f;var Pi;o=qi.prototype=new b,o.getClass$=Ii,o.typeId$=0,o=Vi.prototype=new qi,o.getClass$=Xi,o.typeId$=0,o._tableSize=0,o=Gi.prototype=new b,o.getClass$=Qi,o.typeId$=0,o.m_Coders=null,o.m_NumPosBits=0,o.m_NumPrevBits=0,o.m_PosMask=0,o=rs.prototype=new b,o.getClass$=ns,o.typeId$=18,o=us.prototype=new b,o.getClass$=os,o.typeId$=19,o.BackPrev=0,o.BackPrev2=0,o.Backs0=0,o.Backs1=0,o.Backs2=0,o.Backs3=0,o.PosPrev=0,o.PosPrev2=0,o.Prev1IsChar=!1,o.Prev2=!1,o.Price=0,o.State=0,o=ps.prototype=new b,o.getClass$=hs,o.typeId$=20,o.Models=null,o.NumBitLevels=0,o=Ss.prototype=new b,o.getClass$=Es,o.typeId$=21,o.Models=null,o.NumBitLevels=0,o=Ls.prototype=new b,o.getClass$=ks,o.typeId$=0,o.Code=0,o.Range=0,o.Stream=null,o=Is.prototype=new b,o.getClass$=Fs,o.typeId$=0,o.Low=f,o.Range=0,o.Stream=null,o._cache=0,o._cacheSize=0,o._position=f;var qs;o=Ks.prototype=new b,o.getClass$=Js,o.typeId$=0,o.c=null,o.d=null;var Qs,eo=sn("java.lang.","Object"),to=sn("java.lang.","Throwable"),no=sn("java.lang.","Exception"),ro=sn("java.lang.","RuntimeException"),io=sn("com.google.gwt.core.client.","JavaScriptException"),so=sn("com.google.gwt.core.client.","JavaScriptObject$"),oo=rn("","[[D"),uo=sn("java.io.","InputStream"),ao=sn("java.io.","ByteArrayInputStream"),fo=rn("","[B"),lo=sn("java.io.","OutputStream"),co=sn("java.io.","ByteArrayOutputStream"),ho=sn("java.io.","IOException"),po=sn("java.lang.","Enum"),vo=sn("java.lang.","ArithmeticException"),mo=sn("java.lang.","ArrayStoreException"),go=rn("","[C"),yo=sn("java.lang.","Class"),bo=sn("java.lang.","ClassCastException"),wo=sn("java.lang.","IllegalArgumentException"),Eo=sn("java.lang.","IllegalStateException"),So=sn("java.lang.","IndexOutOfBoundsException"),xo=rn("","[I"),To=sn("java.lang.","NullPointerException"),No=sn("java.lang.","String"),Co=sn("java.lang.","StringBuilder"),ko=sn("org.dellroad.lzma.client.SevenZip.Compression.LZ.","InWindow"),Lo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZ.","BinTree"),Ao=sn("org.dellroad.lzma.client.SevenZip.Compression.LZ.","OutWindow"),Oo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Chunker"),Mo=rn("","[S"),_o=rn("[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","BitTreeDecoder;"),Do=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Decoder"),Po=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Decoder$LenDecoder"),Ho=rn("[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.","Decoder$LiteralDecoder$Decoder2;"),Bo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Decoder$LiteralDecoder"),jo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Decoder$LiteralDecoder$Decoder2"),Fo=rn("[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$Optimal;"),Io=rn("[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","BitTreeEncoder;"),qo=rn("","[J"),Ro=rn("","[Z"),Uo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder"),zo=rn("[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$LiteralEncoder$Encoder2;"),Wo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$LiteralEncoder"),Xo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$LiteralEncoder$Encoder2"),Vo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$LenEncoder"),$o=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$LenPriceTableEncoder"),Jo=sn("org.dellroad.lzma.client.SevenZip.Compression.LZMA.","Encoder$Optimal"),Ko=sn("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","BitTreeDecoder"),Qo=sn("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","BitTreeEncoder"),Go=sn("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","Decoder"),Yo=sn("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.","Encoder"),Zo=on("org.dellroad.lzma.client.","CompressionMode"),eu=sn("org.dellroad.lzma.client.","LZMACompressor"),tu=sn("org.dellroad.lzma.client.","LZMAByteArrayCompressor"),nu=sn("org.dellroad.lzma.client.","LZMADecompressor"),ru=sn("org.dellroad.lzma.client.","LZMAByteArrayDecompressor"),iu=sn("org.dellroad.lzma.demo.client.","LZMADemo");Ys(function(){},"lzma_demo","");var su=function(){function t(e){return!isNaN(parseFloat(e))&&isFinite(e)}var e=[{dictionarySize:16,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dictionarySize:20,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dictionarySize:19,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:20,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:21,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:22,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:23,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:24,fb:255,matchFinder:1,lc:3,lp:0,pb:2},{dictionarySize:25,fb:255,matchFinder:1,lc:3,lp:0,pb:2}];return function(n){return t(n)?n<1?n=1:n>9&&(n=9):n=1,e[n-1]}}();return{compress:Xs,decompress:Vs}}();this.LZMA=LZMA,root.Mustache=Mustache,function(){function GeometryView(){}function Map(e){var t=this;this.options=_.defaults(e,{ajax:window.$?window.$.ajax:reqwest.compat,pngParams:["map_key","api_key","cache_policy","updated_at"],gridParams:["map_key","api_key","cache_policy","updated_at"],cors:this.isCORSSupported(),btoa:this.isBtoaSupported()?this._encodeBase64Native:this._encodeBase64,MAX_GET_SIZE:2033,force_cors:!1,instanciateCallback:function(){return"_cdbc_"+cartodb.uniqueCallbackName(JSON.stringify(t.toJSON()))}}),this.layerToken=null,this.urls=null,this.silent=!1,this.interactionEnabled=[],this._layerTokenQueue=[],this._timeout=-1,this._queue=[],this._waiting=!1,this.lastTimeUpdated=null,this._refreshTimer=-1}function NamedMap(e,t){var n=this;Map.call(this,t),this.options.pngParams.push("auth_token"),this.options.gridParams.push("auth_token"),this.endPoint=Map.BASE_URL+"/named/"+e.name,this.JSONPendPoint=Map.BASE_URL+"/named/"+e.name+"/jsonp",this.layers=_.clone(e.layers)||[];for(var r=0;r<this.layers.length;++r){var i=this.layers[r];i.options=i.options||{hidden:!1},i.options.layer_name=i.layer_name}this.named_map=e,this.stat_tag=e.stat_tag;var s=e.auth_token||t.auth_token;s&&this.setAuthToken(s)}function LayerDefinition(e,t){var n=this;Map.call(this,t),this.endPoint=Map.BASE_URL,this.setLayerDefinition(e,{silent:!0})}function SubLayer(e,t){this._parent=e,this._position=t,this._added=!0,this._bindInteraction(),Backbone.Model&&(this.infowindow=new Backbone.Model(this._parent.getLayer(this._position).infowindow),this.infowindow.bind("change",function(){var e=this._parent.getLayer(this._position);e.infowindow=this.infowindow.toJSON(),this._parent.setLayer(this._position,e)},this))}function CartoDBLayerCommon(){}var $=root.$,jQuery=root.jQuery,L=root.L,Mustache=root.Mustache,Backbone=root.Backbone,_=root._;(function(){var e=this,t=e.cdb={};t.VERSION="3.11.20",t.DEBUG=!1,t.CARTOCSS_VERSIONS={"2.0.0":"","2.1.0":""},t.CARTOCSS_DEFAULT_VERSION="2.1.1",t.CDB_HOST={http:"api.cartocdn.com",https:"cartocdn.global.ssl.fastly.net"},e.cdb.config={},e.cdb.core={},e.cdb.geo={},e.cdb.geo.ui={},e.cdb.geo.geocoder={},e.cdb.ui={},e.cdb.ui.common={},e.cdb.vis={},e.cdb.decorators={},e.JST=e.JST||{},e.cartodb=t,t.files=["../vendor/jquery.min.js","../vendor/underscore-min.js","../vendor/json2.js","../vendor/backbone.js","../vendor/leaflet.js","../vendor/wax.cartodb.js","../vendor/GeoJSON.js","../vendor/jscrollpane.js","../vendor/mousewheel.js","../vendor/mwheelIntent.js","../vendor/spin.js","../vendor/lzma.js","core/decorator.js","core/config.js","core/log.js","core/profiler.js","core/template.js","core/model.js","core/view.js","geo/geocoder.js","geo/geometry.js","geo/map.js","geo/ui/text.js","geo/ui/annotation.js","geo/ui/image.js","geo/ui/share.js","geo/ui/zoom.js","geo/ui/zoom_info.js","geo/ui/legend.js","geo/ui/switcher.js","geo/ui/infowindow.js","geo/ui/header.js","geo/ui/search.js","geo/ui/layer_selector.js","geo/ui/mobile.js","geo/ui/tiles_loader.js","geo/ui/infobox.js","geo/ui/tooltip.js","geo/ui/fullscreen.js","geo/layer_definition.js","geo/common.js","geo/leaflet/leaflet_base.js","geo/leaflet/leaflet_plainlayer.js","geo/leaflet/leaflet_tiledlayer.js","geo/leaflet/leaflet_wmslayer.js","geo/leaflet/leaflet_cartodb_layergroup.js","geo/leaflet/leaflet_cartodb_layer.js","geo/leaflet/leaflet.js","geo/gmaps/gmaps_base.js","geo/gmaps/gmaps_baselayer.js","geo/gmaps/gmaps_plainlayer.js","geo/gmaps/gmaps_tiledlayer.js","geo/gmaps/gmaps_cartodb_layergroup.js","geo/gmaps/gmaps_cartodb_layer.js","geo/gmaps/gmaps.js","ui/common/dialog.js","ui/common/share.js","ui/common/notification.js","ui/common/table.js","ui/common/dropdown.js","vis/vis.js","vis/overlays.js","vis/layers.js","api/layers.js","api/sql.js","api/vis.js"],t.init=function(n){var r=t.Class=function(){};_.extend(r.prototype,Backbone.Events),t._loadJST(),e.cdb.god=new Backbone.Model,n&&n()},t.load=function(e,n){var r=0,i=function(){var s=document.createElement("script");s.src=e+t.files[r],document.body.appendChild(s),++r,r==t.files.length?n&&(s.onload=n):s.onload=i};i()}})(),cdb.decorators.elder=function(){var e=Backbone.Router.extend,t=function(e,t){var n=null;if(this.parent!=null){var r=this.parent;this.parent=this.parent.parent;var t=Array.prototype.slice.call(arguments,1);r.hasOwnProperty(e)?n=r[e].apply(this,t):(t.splice(0,0,e),n=r.elder.apply(this,t)),this.parent=r}return n},n=function(n,r){var i=e.call(this,n,r);return i.prototype.parent=this.prototype,i.prototype.elder=function(e){var n=Array.prototype.slice.call(arguments,1);return e?(n.splice(0,0,e),t.apply(this,n)):i.prototype.parent},i},r=function(e){e.extend=n,e.prototype.elder=function(){},e.prototype.parent=null};return r}(),cdb.decorators.elder(Backbone.Model),cdb.decorators.elder(Backbone.View),cdb.decorators.elder(Backbone.Collection),window.JSON||(window.JSON={stringify:function(e){if(typeof e=="number"||typeof e=="boolean")return e.toString();if(typeof e=="string")return'"'+e.toString()+'"';if(_.isArray(e)){var t="[";for(var n in e)n>0&&(t+=", "),t+=JSON.stringify(e[n]);return t+="]",t}var t="{";for(var r in e)e.hasOwnProperty(r)&&(t+='"'+r+'": '+JSON.stringify(e[r]));return t+="}",t},parse:function(param){return eval(param)}}),function(){Config=Backbone.Model.extend({VERSION:2,initialize:function(){this.modules=new Backbone.Collection,this.modules.bind("add",function(e){this.trigger("moduleLoaded")},this)},REPORT_ERROR_URL:"/api/v0/error",ERROR_TRACK_ENABLED:!1,getSqlApiUrl:function(){var e=this.get("sql_api_protocol")+"://"+this.get("user_name")+"."+this.get("sql_api_domain")+":"+this.get("sql_api_port");return e}}),cdb.config=new Config,cdb.config.set({cartodb_attributions:"CartoDB <a href='http://cartodb.com/attributions' target='_blank'>attribution</a>",cartodb_logo_link:"http://www.cartodb.com"})}(),function(){cdb.core.Error=Backbone.Model.extend({url:cdb.config.REPORT_ERROR_URL,initialize:function(){this.set({browser:JSON.stringify($.browser)})}}),cdb.core.ErrorList=Backbone.Collection.extend({model:cdb.core.Error,enableTrack:function(){var e=window.onerror;window.onerror=function(t,n,r){cdb.errors.create({msg:t,url:n,line:r}),e&&e.apply(window,arguments)}}}),cdb.errors=new cdb.core.ErrorList,cdb.config.ERROR_TRACK_ENABLED&&cdb.errors.enableTrack();var e=function(){};e.prototype.error=function(){},e.prototype.log=function(){};if(typeof console!="undefined"){_console=console;try{_console.log.apply(_console,["cartodb.js "+cartodb.VERSION])}catch(t){_console=new e}}else _console=new e;cdb.core.Log=Backbone.Model.extend({error:function(){_console.error.apply(_console,arguments),cdb.config.ERROR_TRACK_ENABLED&&cdb.errors.create({msg:Array.prototype.slice.call(arguments).join("")})},log:function(){_console.log.apply(_console,arguments)},info:function(){_console.log.apply(_console,arguments)},debug:function(){_console.log.apply(_console,arguments)}})}(),cdb.log=new cdb.core.Log({tag:"cdb"}),function(e){function n(){}function r(e){this.t0=null,this.name=e,this.count=0}var t=1024;n.metrics={},n._backend=null,n.get=function(e){return n.metrics[e]||{max:0,min:Number.MAX_VALUE,avg:0,total:0,count:0,last:0,history:typeof Float32Array!="undefined"?new Float32Array(t):[]}},n.backend=function(e){n._backend=e},n.new_value=function(e,r,i,s){i=i||"i";var o=n.metrics[e]=n.get(e);o.max=Math.max(o.max,r),o.min=Math.min(o.min,r),o.total+=r,++o.count,o.avg=o.total/o.count,o.history[o.count%t]=r;if(!s)n._backend&&n._backend([i,e,r]);else{var u=(new Date).getTime();u-o.last>1e3&&(n._backend&&n._backend([i,e,o.avg]),o.last=u)}},n.print_stats=function(){for(k in n.metrics){var e=n.metrics[k];console.log(" === "+k+" === "),console.log(" max: "+e.max),console.log(" min: "+e.min),console.log(" avg: "+e.avg),console.log(" count: "+e.count),console.log(" total: "+e.total)}},r.prototype={start:function(){return this.t0=+(new Date),this},_elapsed:function(){return+(new Date)-this.t0},end:function(e){this.t0!==null&&(n.new_value(this.name,this._elapsed(),"t",e),this.t0=null)},inc:function(e){e=e===undefined?1:e,n.new_value(this.name,e,"i")},dec:function(e){e=e===undefined?1:e,n.new_value(this.name,e,"d")},mark:function(){++this.count;if(this.t0===null){this.start();return}var e=this._elapsed();e>1&&(n.new_value(this.name,this.count),this.count=0,this.start())}},n.metric=function(e){return new r(e)},e.Profiler=n}(cdb.core),cdb.core.Template=Backbone.Model.extend({initialize:function(){this.bind("change",this._invalidate),this._invalidate()},url:function(){return this.get("template_url")},parse:function(e){return{template:e}},_invalidate:function(){this.compiled=null,this.get("template_url")&&this.fetch()},compile:function(){var e=this.get("type")||"underscore",t=cdb.core.Template.compilers[e];return t?t(this.get("template")):(cdb.log.error("can't get rendered for "+e),null)},render:function(e){var t=this.compiled=this.compiled||this.get("compiled")||this.compile(),n=t(e);return n},asFunction:function(){return _.bind(this.render,this)}},{compilers:{underscore:_.template,mustache:typeof Mustache=="undefined"?null:Mustache.compile},compile:function(e,t){var n=new cdb.core.Template({template:e,type:t||"underscore"});return _.bind(n.render,n)}}),cdb.core.TemplateList=Backbone.Collection.extend({model:cdb.core.Template,getTemplate:function(e){this.namespace&&(e=this.namespace+e);var t=this.find(function(t){return t.get("name")===e});return t?_.bind(t.render,t):(cdb.log.error(e+" not found"),null)}}),cdb.templates=new cdb.core.TemplateList,cdb._loadJST=function(){typeof window.JST!==undefined&&cdb.templates.reset(_(JST).map(function(e,t){return{name:t,compiled:e}}))},function(){cdb._debugCallbacks=function(e){var t=e._callbacks;for(var n in t){var r=t[n];console.log(" * ",n);var i=r.tail;while((r=r.next)!==i)console.log("    - ",r.context,r.context&&r.context.el||"none")}};var e=cdb.core.Model=Backbone.Model.extend({initialize:function(e){return _.bindAll(this,"fetch","save","retrigger"),Backbone.Model.prototype.initialize.call(this,e)},fetch:function(e){var t=this;this.trigger("loadModelStarted"),$.when(this.elder("fetch",e)).done(function(e){t.trigger("loadModelCompleted",e)}).fail(function(e){t.trigger("loadModelFailed",e)})},setIdAttribute:function(e){this.idAttribute=e},retrigger:function(e,t,n){n||(n=e);var r=this;t.bind&&t.bind(e,function(){r.trigger(n)},r)},save:function(e,t){var n=this;(!t||!t.silent)&&this.trigger("saving");var r=Backbone.Model.prototype.save.apply(this,arguments);return $.when(r).done(function(){(!t||!t.silent)&&n.trigger("saved")}).fail(function(){(!t||!t.silent)&&n.trigger("errorSaving")}),r}})}(),function(){var e=cdb.core.View=Backbone.View.extend({classLabel:"cdb.core.View",constructor:function(t){this._models=[],this._subviews={},Backbone.View.call(this,t),e.viewCount++,e.views[this.cid]=this,this._created_at=new Date,cdb.core.Profiler.new_value("total_views",e.viewCount)},add_related_model:function(e){if(!e)throw"added non valid model";this._models.push(e)},addView:function(e){this._subviews[e.cid]=e,e._parent=this},removeView:function(e){delete this._subviews[e.cid]},clearSubViews:function(){_(this._subviews).each(function(e){e.clean()}),this._subviews={}},clean:function(){var t=this;return this.trigger("clean"),this.clearSubViews(),this._parent&&(this._parent.removeView(this),this._parent=null),this.remove(),this.unbind(),this.model&&this.model.unbind&&this.model.unbind(null,null,this),_(this._models).each(function(e){e.unbind(null,null,t)}),this._models=[],e.viewCount--,delete e.views[this.cid],this},getTemplate:function(e){return this.options.template?_.template(this.options.template):cdb.templates.getTemplate(e)},show:function(){this.$el.show()},hide:function(){this.$el.hide()},retrigger:function(e,t,n){n||(n=e);var r=this;t.bind&&t.bind(e,function(){r.trigger(n)},r),this.add_related_model(t)},killEvent:function(e){e&&e.preventDefault&&e.preventDefault(),e&&e.stopPropagation&&e.stopPropagation()},cleanTooltips:function(){this.$(".tipsy").remove()}},{viewCount:0,views:{},extendEvents:function(e){return function(){return _.extend(e,this.constructor.__super__.events)}},runChecker:function(){_.each(cdb.core.View.views,function(e){_.each(e,function(t,n){n!=="_parent"&&e.hasOwnProperty(n)&&t instanceof cdb.core.View&&e._subviews[t.cid]===undefined&&(console.log("========="),console.log("untracked view: "),console.log(t.el),console.log("parent"),console.log(e.el),console.log(" "))})})}})}(),cdb.geo.geocoder.YAHOO={keys:{app_id:"nLQPTdTV34FB9L3yK2dCXydWXRv3ZKzyu_BdCSrmCBAM1HgGErsCyCbBbVP2Yg--"},geocode:function(e,t){e=e.toLowerCase().replace(/é/g,"e").replace(/á/g,"a").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u").replace(/ /g,"+");var n="";location.protocol.indexOf("http")===-1&&(n="http:"),$.getJSON(n+"//query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('SELECT * FROM json WHERE url="http://where.yahooapis.com/geocode?q='+e+"&appid="+this.keys.app_id+'&flags=JX"')+"&format=json&callback=?",function(e){var n=[];if(e&&e.query&&e.query.results&&e.query.results.json&&e.query.results.json.ResultSet&&e.query.results.json.ResultSet.Found!="0"){var r;_.isArray(e.query.results.json.ResultSet.Results)?r=e.query.results.json.ResultSet.Results:r=[e.query.results.json.ResultSet.Results];for(var i in r){var s=r[i],o;o={lat:s.latitude,lon:s.longitude},s.boundingbox&&(o.boundingbox=s.boundingbox),n.push(o)}}t(n)})}},cdb.geo.geocoder.NOKIA={keys:{app_id:"KuYppsdXZznpffJsKT24",app_code:"A7tBPacePg9Mj_zghvKt9Q"},geocode:function(e,t){e=e.toLowerCase().replace(/é/g,"e").replace(/á/g,"a").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u").replace(/ /g,"+");var n="";location.protocol.indexOf("http")===-1&&(n="http:"),$.getJSON(n+"//places.nlp.nokia.com/places/v1/discover/search/?q="+encodeURIComponent(e)+"&app_id="+this.keys.app_id+"&app_code="+this.keys.app_code+"&Accept-Language=en-US&at=0,0&callback=?",function(e){var n=[];if(e&&e.results&&e.results.items&&e.results.items.length>0){var r=e.results.items;for(var i in r){var s=r[i],o;o={lat:s.position[0],lon:s.position[1]},s.bbox&&(o.boundingbox={north:s.bbox[3],south:s.bbox[1],east:s.bbox[2],west:s.bbox[0]}),n.push(o)}}t(n)})}},cdb.geo.Geometry=cdb.core.Model.extend({isPoint:function(){var e=this.get("geojson").type;return e&&e.toLowerCase()==="point"?!0:!1}}),cdb.geo.Geometries=Backbone.Collection.extend({}),_.extend(GeometryView.prototype,Backbone.Events,{edit:function(){throw new Error("to be implemented")}}),cdb.geo.MapLayer=cdb.core.Model.extend({defaults:{visible:!0,type:"Tiled"},isEqual:function(e){var t=this.toJSON(),n=e.toJSON(),r=["id","order"];_.each(r,function(e){delete t[e],delete n[e],t.options&&delete t.options[e],n.options&&delete n.options[e]});var i=t.type?t.type:t.options.type,s=n.type?n.type:n.options.type;if(i&&i===s){if(i==="Tiled"){var o=t.urlTemplate?t.urlTemplate:t.options.urlTemplate,u=n.urlTemplate?n.urlTemplate:n.options.urlTemplate;return o===u?!0:!1}if(i==="WMS"){var o=t.urlTemplate?t.urlTemplate:t.options.urlTemplate,u=n.urlTemplate?n.urlTemplate:n.options.urlTemplate,a=t.layers?t.layers:t.options.layers,f=n.layers?n.layers:n.options.layers;return o===u&&a===f?!0:!1}var l=t.base_type?t.base_type:t.options.base_type,c=n.base_type?n.base_type:n.options.base_type;return l?_.isEqual(t,n)?!0:!1:!0}return!1}}),cdb.geo.TileLayer=cdb.geo.MapLayer.extend({getTileLayer:function(){}}),cdb.geo.GMapsBaseLayer=cdb.geo.MapLayer.extend({OPTIONS:["roadmap","satellite","terrain","custom"],defaults:{type:"GMapsBase",base_type:"gray_roadmap",style:null}}),cdb.geo.WMSLayer=cdb.geo.MapLayer.extend({defaults:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1}}),cdb.geo.PlainLayer=cdb.geo.MapLayer.extend({defaults:{type:"Plain",base_type:"plain",className:"plain",color:"#FFFFFF",image:""}}),cdb.geo.TorqueLayer=cdb.geo.MapLayer.extend({defaults:{type:"torque",visible:!0}}),cdb.geo.CartoDBLayer=cdb.geo.MapLayer.extend({defaults:{attribution:"CartoDB",type:"CartoDB",active:!0,query:null,opacity:.99,interactivity:null,interaction:!0,debug:!1,tiler_domain:"cartodb.com",tiler_port:"80",tiler_protocol:"http",sql_api_domain:"cartodb.com",sql_api_port:"80",sql_api_protocol:"http",extra_params:{},cdn_url:null,maxZoom:28},activate:function(){this.set({active:!0,opacity:.99,visible:!0})},deactivate:function(){this.set({active:!1,opacity:0,visible:!1})},invalidate:function(){var e=this.get("extra_params")||e;e.cache_buster=(new Date).getTime(),this.set("extra_params",e),this.trigger("change",this)},toggle:function(){this.get("active")?this.deactivate():this.activate()}}),cdb.geo.CartoDBGroupLayer=cdb.geo.MapLayer.extend({defaults:{visible:!0,type:"layergroup"}}),cdb.geo.CartoDBNamedMapLayer=cdb.geo.MapLayer.extend({defaults:{visible:!0,type:"namedmap"}}),cdb.geo.Layers=Backbone.Collection.extend({model:cdb.geo.MapLayer,initialize:function(){this.comparator=function(e){return parseInt(e.get("order"),10)},this.bind("add",this._assignIndexes)},_assignIndexes:function(e,t,n){function i(e){var t=e.get("type");return r[t]||0}var r={torque:100},s=0;n&&n.at!==undefined&&(s=n.at),s===0&&(this.models[0].set({order:0}),++s);for(var o=s;o<this.size();++o){var u=this.models[o-1],a=u.get("order")-i(u);this.models[o].set({order:i(this.models[o])+a+1})}}}),cdb.geo.Map=cdb.core.Model.extend({defaults:{center:[0,0],zoom:3,minZoom:0,maxZoom:40,scrollwheel:!0,provider:"leaflet"},initialize:function(){this.layers=new cdb.geo.Layers,this.layers.bind("reset",function(){this.layers.size()>=1&&this._adjustZoomtoLayer(this.layers.models[0])},this),this.geometries=new cdb.geo.Geometries},setView:function(e,t){this.set({center:e,zoom:t},{silent:!0}),this.trigger("set_view")},setZoom:function(e){this.set({zoom:e})},enableScrollWheel:function(){this.set({scrollwheel:!0})},disableScrollWheel:function(){this.set({scrollwheel:!1})},getZoom:function(){return this.get("zoom")},setCenter:function(e){this.set({center:e})},setOptions:function(e){if(typeof e!="object"||e.length){if(this.options.debug)throw e+" options has to be an object";return}_.defaults(this.options,e)},getViewBounds:function(){return this.has("view_bounds_sw")&&this.has("view_bounds_ne")?[this.get("view_bounds_sw"),this.get("view_bounds_ne")]:null},getLayerAt:function(e){return this.layers.at(e)},getLayerByCid:function(e){return this.layers.getByCid(e)},_adjustZoomtoLayer:function(e){var t=e.get("maxZoom"),n=e.get("minZoom");_.isNumber(t)&&(this.get("zoom")>t?this.set({zoom:t,maxZoom:t}):this.set("maxZoom",t)),_.isNumber(n)&&(this.get("zoom")<n?this.set({minZoom:n,zoom:n}):this.set("minZoom",n))},addLayer:function(e,t){return this.layers.size()==0&&this._adjustZoomtoLayer(e),this.layers.add(e,t),this.trigger("layerAdded"),this.layers.length===1&&this.trigger("firstLayerAdded"),e.cid},removeLayer:function(e){this.layers.remove(e)},removeLayerByCid:function(e){var t=this.layers.getByCid(e);t?this.removeLayer(t):cdb.log.error("There's no layer with cid = "+e+".")},removeLayerAt:function(e){var t=this.layers.at(e);t?this.removeLayer(t):cdb.log.error("There's no layer in that position.")},clearLayers:function(){while(this.layers.length>0)this.removeLayer(this.layers.at(0))},getBaseLayer:function(){return this.layers.at(0)},isBaseLayerAdded:function(e){var t=this.getBaseLayer();return t&&e.isEqual(t)},getLayerTemplate:function(){var e=this.getBaseLayer();if(e&&e.get("options"))return e.get("options").urlTemplate},updateAttribution:function(e,t){var n=this.get("attribution")||[];e&&(n=_.without(n,e)),t&&(_.contains(n,t)||n.push(t)),this.set({attribution:n})},addGeometry:function(e){this.geometries.add(e)},removeGeometry:function(e){this.geometries.remove(e)},setBounds:function(e){this.attributes.view_bounds_sw=[e[0][0],e[0][1]],this.attributes.view_bounds_ne=[e[1][0],e[1][1]
],this.trigger("change:view_bounds_ne",this)},fitBounds:function(e,t){var n=this.getBoundsZoom(e,t);if(n===null)return;var r=cdb.geo.Map.latlngToMercator(e[0],n),i=cdb.geo.Map.latlngToMercator(e[1],n),s=cdb.geo.Map.mercatorToLatLng({x:(r[0]+i[0])*.5,y:(r[1]+i[1])*.5},n);this.set({center:s,zoom:n})},getBoundsZoom:function(e,t){if(t.x===0||t.y===0)return null;var n=[t.x,t.y],r=this.get("minZoom")||0,i=this.get("maxZoom")||24,s=e[1],o=e[0],u=[],a,f,l=!0;do r++,a=cdb.geo.Map.latlngToMercator(s,r),f=cdb.geo.Map.latlngToMercator(o,r),u[0]=Math.abs(a[0]-f[0]),u[1]=Math.abs(f[1]-a[1]),l=u[0]<=n[0]||u[1]<=n[1];while(l&&r<=i);return l?null:r-1}},{latlngToMercator:function(e,t){var n=new L.LatLng(e[0],e[1]),r=L.CRS.EPSG3857.latLngToPoint(n,t);return[r.x,r.y]},mercatorToLatLng:function(e,t){var n=L.CRS.EPSG3857.pointToLatLng(e,t);return[n.lat,n.lng]}}),cdb.geo.MapView=cdb.core.View.extend({initialize:function(){if(this.options.map===undefined)throw"you should specify a map model";this.map=this.options.map,this.add_related_model(this.map),this.add_related_model(this.map.layers),this.autoSaveBounds=!1,this.layers={},this.geometries={},this.bind("clean",this._removeLayers,this)},render:function(){return this},addInfowindow:function(e){this.addOverlay(e)},addOverlay:function(e){e&&(this.$el.append(e.render().el),this.addView(e))},getInfoWindows:function(){var e=[];for(var t in this._subviews)this._subviews[t]instanceof cdb.geo.ui.Infowindow&&e.push(this._subviews[t]);return e},showBounds:function(e){throw"to be implemented"},_setModelProperty:function(e){this._unbindModel(),this.map.set(e);if(e.center!==undefined||e.zoom!==undefined){var t=this.getBounds();this.map.set({view_bounds_sw:t[0],view_bounds_ne:t[1]}),this.autoSaveBounds&&this._saveLocation()}this._bindModel()},_bindModel:function(){this._unbindModel(),this.map.bind("change:view_bounds_sw",this._changeBounds,this),this.map.bind("change:view_bounds_ne",this._changeBounds,this),this.map.bind("change:zoom",this._setZoom,this),this.map.bind("change:scrollwheel",this._setScrollWheel,this),this.map.bind("change:center",this._setCenter,this),this.map.bind("change:attribution",this._setAttribution,this)},_unbindModel:function(){this.map.unbind("change:view_bounds_sw",null,this),this.map.unbind("change:view_bounds_ne",null,this),this.map.unbind("change:zoom",null,this),this.map.unbind("change:scrollwheel",null,this),this.map.unbind("change:center",null,this),this.map.unbind("change:attribution",null,this)},_changeBounds:function(){var e=this.map.getViewBounds();e&&this.showBounds(e)},showBounds:function(e){this.map.fitBounds(e,this.getSize())},_setAttribution:function(e,t){this.setAttribution(e)},_addLayers:function(){var e=this;this._removeLayers(),this.map.layers.each(function(t){e._addLayer(t)})},_removeLayers:function(e){for(var t in this.layers){var n=this.layers[t];n.remove(),delete this.layers[t]}},_removeLayer:function(e){var t=this.layers[e.cid];t&&(t.remove(),delete this.layers[e.cid])},_swicthLayerView:function(e,t,n){this._removeLayer(e),this._addLayer(e,this.map.layers,n)},_removeGeometry:function(e){var t=this.geometries[e.cid];delete this.layers[layer.cid]},getLayerByCid:function(e){var t=this.layers[e];return t||cdb.log.debug("layer with cid "+e+" can't be get"),t},_setZoom:function(e,t){throw"to be implemented"},_setCenter:function(e,t){throw"to be implemented"},_addLayer:function(e,t,n){throw"to be implemented"},_addGeomToMap:function(e){throw"to be implemented"},_removeGeomFromMap:function(e){throw"to be implemented"},setAutoSaveBounds:function(){var e=this;this.autoSaveBounds=!0},_saveLocation:_.debounce(function(){this.map.save(null,{silent:!0})},1e3),_addGeometry:function(e){var t=this._addGeomToMap(e);this.geometries[e.cid]=t},_removeGeometry:function(e){var t=this.geometries[e.cid];this._removeGeomFromMap(t),delete this.geometries[e.cid]}},{_getClass:function(e){var t=cdb.geo.LeafletMapView;return e==="googlemaps"&&(typeof google!="undefined"&&typeof google.maps!="undefined"?t=cdb.geo.GoogleMapsMapView:cdb.log.error("you must include google maps library _before_ include cdb")),t},create:function(e,t){var n=cdb.geo.MapView._getClass(t.get("provider"));return new n({el:e,map:t})}}),cdb.geo.ui.Text=cdb.core.View.extend({className:"cartodb-overlay overlay-text",events:{click:"stopPropagation"},default_options:{},stopPropagation:function(e){e.stopPropagation()},initialize:function(){_.defaults(this.options,this.default_options),this.template=this.options.template;var e=this;$(window).on("map_resized",function(){e._place()}),$(window).on("resize",function(){e._place()})},_applyStyle:function(){var e=this.model.get("style"),t=e["box-color"],n=e["box-opacity"],r=e["box-width"],i=e["font-family-name"];this.$text=this.$el.find(".text"),this.$text.css(e),this.$text.css("font-size",e["font-size"]+"px"),this.$el.css("z-index",e["z-index"]);var s="";i=="Droid Sans"?s="droid":i=="Vollkorn"?s="vollkorn":i=="Open Sans"?s="open_sans":i=="Roboto"&&(s="roboto");var o="rgba("+parseInt(t.slice(-6,-4),16)+","+parseInt(t.slice(-4,-2),16)+","+parseInt(t.slice(-2),16)+", "+n+" )";this.$el.removeClass("droid").removeClass("vollkorn").removeClass("roboto").removeClass("open_sans"),this.$el.addClass(s),this.$el.css({backgroundColor:o,maxWidth:r})},_place:function(e){var t=e||this.model.get("extra"),n=this.model.get("y"),r=this.model.get("x"),i=t.bottom-this.$el.height(),s=t.right-this.$el.width(),o=t.top_percentage,u=t.left_percentage,a="auto",f="auto",l=0,c=0,h=t.width,p=t.height,d=t.portrait_dominant_side,v=t.landscape_dominant_side;d==="bottom"&&i<=250?(n="auto",f=i):o>45&&o<55&&(n="50%",l=-p/2),v==="right"&&s<=250?(r="auto",a=s):u>45&&u<55&&(r="50%",c=-h/2),this.$el.css({marginLeft:c,marginTop:l,top:n,left:r,right:a,bottom:f})},show:function(e){this.$el.fadeIn(150,function(){e&&e()})},hide:function(e){this.$el.fadeOut(150,function(){e&&e()})},render:function(){this.$el.html(this.template(_.extend(this.model.attributes,{text:this.model.attributes.extra.rendered_text})));var e=this;return setTimeout(function(){e._applyStyle(),e._place(),e.show()},900),this}}),cdb.geo.ui.Annotation=cdb.core.View.extend({className:"cartodb-overlay overlay-annotation",defaults:{minZoom:0,maxZoom:40,style:{textAlign:"left",zIndex:5,color:"#ffffff",fontSize:"13",fontFamilyName:"Helvetica",boxColor:"#333333",boxOpacity:.7,boxPadding:10,lineWidth:50,lineColor:"#333333"}},template:cdb.core.Template.compile('<div class="content">    <div class="text widget_text">{{{ text }}}</div>    <div class="stick"><div class="ball"></div></div>    </div>',"mustache"),events:{click:"stopPropagation"},stopPropagation:function(e){e.stopPropagation()},initialize:function(){this.template=this.options.template||this.template,this.mapView=this.options.mapView,this.mobileEnabled=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this._cleanStyleProperties(this.options.style),_.defaults(this.options.style,this.defaults.style),this._setupModels(),this._bindMap()},_setupModels:function(){this.model=new cdb.core.Model({display:!0,hidden:!1,text:this.options.text,latlng:this.options.latlng,minZoom:this.options.minZoom||this.defaults.minZoom,maxZoom:this.options.maxZoom||this.defaults.maxZoom}),this.model.on("change:display",this._onChangeDisplay,this),this.model.on("change:text",this._onChangeText,this),this.model.on("change:latlng",this._place,this),this.model.on("change:minZoom",this._applyZoomLevelStyle,this),this.model.on("change:maxZoom",this._applyZoomLevelStyle,this),this.style=new cdb.core.Model(this.options.style),this.style.on("change",this._applyStyle,this),this.add_related_model(this.style)},_bindMap:function(){this.mapView.map.bind("change",this._place,this),this.mapView.map.bind("change:zoom",this._applyZoomLevelStyle,this),this.mapView.bind("zoomstart",this.hide,this),this.mapView.bind("zoomend",this.show,this)},_unbindMap:function(){this.mapView.map.unbind("change",this._place,this),this.mapView.map.unbind("change:zoom",this._applyZoomLevelStyle,this),this.mapView.unbind("zoomstart",this.hide,this),this.mapView.unbind("zoomend",this.show,this)},_onChangeDisplay:function(){this.model.get("display")?this.show():this.hide()},_onChangeText:function(e){this.$el.find(".text").html(this.model.get("text"))},_getStandardPropertyName:function(e){if(!e)return;var t=e.split("-");if(t.length===1)return e;if(t.length===2)return t[0]+t[1].slice(0,1).toUpperCase()+t[1].slice(1)},_cleanStyleProperties:function(e){var t={};_.each(e,function(e,n){t[this._getStandardPropertyName(n)]=e},this),this.options.style=t},_belongsToCanvas:function(){var e=this.options.device==="mobile"?!0:!1;return e===this.mobileEnabled},show:function(e){if(this.model.get("hidden")||!this._belongsToCanvas())return;var t=this;this.$el.css({opacity:0,display:"inline-table"}),this.$el.stop().animate({opacity:1},{duration:150,complete:function(){e&&e()}})},hide:function(e){this.$el.stop().fadeOut(150,function(){e&&e()})},_place:function(){var e=this.model.get("latlng"),t=this.style.get("lineWidth"),n=this.style.get("textAlign"),r=this.mapView.latLonToPixel(e);if(r){var i=r.y-this.$el.height()/2,s=r.x+t;n==="right"&&(s=r.x-this.$el.width()-t-this.$el.find(".ball").width()),this.$el.css({top:i,left:s})}},setMinZoom:function(e){this.model.set("minZoom",e)},setMaxZoom:function(e){this.model.set("maxZoom",e)},setPosition:function(e){this.model.set("latlng",e)},setText:function(e){this.model.set("text",e)},setStyle:function(e,t){var n=this._getStandardPropertyName(e);n&&this.style.set(n,t)},_applyStyle:function(){var e=this.style.get("color"),t=this.style.get("textAlign"),n=this.style.get("boxColor"),r=this.style.get("boxOpacity"),i=this.style.get("boxPadding"),s=this.style.get("lineWidth"),o=this.style.get("lineColor"),u=this.style.get("fontFamilyName");this.$text=this.$el.find(".text"),this.$text.css({color:e,textAlign:t}),this.$el.find(".content").css("padding",i),this.$text.css("font-size",this.style.get("fontSize")+"px"),this.$el.css("z-index",this.style.get("zIndex")),this.$el.find(".stick").css({width:s,left:-s});var a="";u=="Droid Sans"?a="droid":u=="Vollkorn"?a="vollkorn":u=="Open Sans"?a="open_sans":u=="Roboto"&&(a="roboto"),this.$el.removeClass("droid").removeClass("vollkorn").removeClass("roboto").removeClass("open_sans"),this.$el.addClass(a),t==="right"?(this.$el.addClass("align-right"),this.$el.find(".stick").css({left:"auto",right:-s})):this.$el.removeClass("align-right"),this._place(),this._applyZoomLevelStyle()},_getRGBA:function(e,t){return"rgba("+parseInt(e.slice(-6,-4),16)+","+parseInt(e.slice(-4,-2),16)+","+parseInt(e.slice(-2),16)+","+t+" )"},_applyZoomLevelStyle:function(){var e=this.style.get("boxColor"),t=this.style.get("boxOpacity"),n=this.style.get("lineColor"),r=this.model.get("minZoom"),i=this.model.get("maxZoom"),s=this.mapView.map.get("zoom");if(s>=r&&s<=i){var o=this._getRGBA(n,1),u=this._getRGBA(e,t);this.$el.find(".text").animate({opacity:1},150),this.$el.css("background-color",u),this.$el.find(".stick").css("background-color",o),this.$el.find(".ball").css("background-color",o),this.model.set("hidden",!1),this.model.set("display",!0)}else this.model.set("hidden",!0),this.model.set("display",!1)},clean:function(){this._unbindMap(),cdb.core.View.prototype.clean.call(this)},render:function(){this.$el.html(this.template(this.model.attributes));var e=this;return setTimeout(function(){e._applyStyle(),e._applyZoomLevelStyle(),e.show()},500),this}}),cdb.geo.ui.Image=cdb.geo.ui.Text.extend({className:"cartodb-overlay image-overlay",events:{click:"stopPropagation"},default_options:{},stopPropagation:function(e){e.stopPropagation()},initialize:function(){_.defaults(this.options,this.default_options),this.template=this.options.template;var e=this;$(window).on("map_resized",function(){e._place()}),$(window).on("resize",function(){e._place()})},_applyStyle:function(){var e=this.model.get("style"),t=e["box-color"],n=e["box-opacity"],r=e["box-width"];this.$text.css(e),this.$el.css("z-index",e["z-index"]);var i="rgba("+parseInt(t.slice(-6,-4),16)+","+parseInt(t.slice(-4,-2),16)+","+parseInt(t.slice(-2),16)+", "+n+" )";this.$el.css({backgroundColor:i}),this.$el.find("img").css({width:r})},render:function(){var e=this.model.get("extra").rendered_text;this.model.get("extra").has_default_image&&(e='<img src="'+this.model.get("extra").public_default_image_url+'" />'),this.$el.html(this.template(_.extend(this.model.attributes,{content:e}))),this.$text=this.$el.find(".text");var t=this;return setTimeout(function(){t._applyStyle(),t._place(),t.show()},900),this}}),cdb.geo.ui.Share=cdb.core.View.extend({className:"cartodb-share",events:{"click a":"_onClick"},default_options:{},initialize:function(){_.bindAll(this,"_onClick"),_.defaults(this.options,this.default_options),this.template=this.options.template},_applyStyle:function(){},_onClick:function(e){e.preventDefault(),e.stopPropagation(),this.dialog.show()},createDialog:function(){var e=this.options;e.template="",location.href?e.share_url=encodeURIComponent(location.href):e.share_url=e.url;var t=cdb.core.Template.compile(e.template||'      <div class="mamufas">      <div class="block modal {{modal_type}}">      <a href="#close" class="close">x</a>      <div class="head">      <h3>Share this map</h3>      </div>      <div class="content">      <div class="buttons">      <h4>Social</h4>      <ul>      <li><a class="facebook" target="_blank" href="{{ facebook_url }}">Share on Facebook</a></li>      <li><a class="twitter" href="{{ twitter_url }}" target="_blank">Share on Twitter</a></li>      <li><a class="link" href="{{ public_map_url }}" target="_blank">Link to this map</a></li>      </ul>      </div><div class="embed_code">      <h4>Embed this map</h4>      <textarea id="" name="" cols="30" rows="10">{{ code }}</textarea>      </div>      </div>      </div>      </div>      ',e.templateType||"mustache"),n=location.href;n=n.replace("public_map","embed_map");var r=n.replace("embed_map","public_map"),i="<iframe width='100%' height='520' frameborder='0' src='"+n+"' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>";this.dialog=new cdb.ui.common.ShareDialog({title:e.map.get("title"),description:e.map.get("description"),model:this.options.vis.map,code:i,url:e.url,public_map_url:r,share_url:e.share_url,template:t,target:$(".cartodb-share a"),size:$(document).width()>400?"":"small",width:$(document).width()>400?430:216}),$(".cartodb-map-wrapper").append(this.dialog.render().$el)},render:function(){return this.$el.html(this.template(_.extend(this.model.attributes))),this}}),cdb.geo.ui.Zoom=cdb.core.View.extend({className:"cartodb-zoom",events:{"click .zoom_in":"zoom_in","click .zoom_out":"zoom_out"},default_options:{timeout:0,msg:""},initialize:function(){this.map=this.model,_.defaults(this.options,this.default_options),this.template=this.options.template?this.options.template:cdb.templates.getTemplate("geo/zoom"),this.map.bind("change:zoom change:minZoom change:maxZoom",this._checkZoom,this)},render:function(){return this.$el.html(this.template(this.options)),this._checkZoom(),this},_checkZoom:function(){var e=this.map.get("zoom");this.$(".zoom_in")[e<this.map.get("maxZoom")?"removeClass":"addClass"]("disabled"),this.$(".zoom_out")[e>this.map.get("minZoom")?"removeClass":"addClass"]("disabled")},zoom_in:function(e){this.map.get("maxZoom")>this.map.getZoom()&&this.map.setZoom(this.map.getZoom()+1),e.preventDefault(),e.stopPropagation()},zoom_out:function(e){this.map.get("minZoom")<this.map.getZoom()&&this.map.setZoom(this.map.getZoom()-1),e.preventDefault(),e.stopPropagation()}}),cdb.geo.ui.ZoomInfo=cdb.core.View.extend({className:"cartodb-zoom-info",initialize:function(){this.model.bind("change:zoom",this.render,this)},render:function(){return this.$el.html(this.model.get("zoom")),this}}),cdb.geo.ui.LegendItemModel=cdb.core.Model.extend({defaults:{name:"Untitled",visible:!0,value:""}}),cdb.geo.ui.LegendItems=Backbone.Collection.extend({model:cdb.geo.ui.LegendItemModel}),cdb.geo.ui.LegendItem=cdb.core.View.extend({tagName:"li",initialize:function(){_.bindAll(this,"render"),this.template=this.options.template?_.template(this.options.template):cdb.templates.getTemplate("geo/legend")},render:function(){var e;this.model.get("type")=="image"&&this.model.get("value")?e="url( "+this.model.get("value")+")":e=this.model.get("value");var t=_.extend(this.model.toJSON(),{value:e});return this.$el.html(this.template(t)),this.$el}}),cdb.geo.ui.Legend=cdb.core.View.extend({className:"cartodb-legend",events:{dragstart:"_stopPropagation",mousedown:"_stopPropagation",touchstart:"_stopPropagation",MSPointerDown:"_stopPropagation",dblclick:"_stopPropagation",mousewheel:"_stopPropagation",DOMMouseScroll:"_stopPropagation",dbclick:"_stopPropagation",click:"_stopPropagation"},initialize:function(){_.bindAll(this,"render","show","hide"),_.defaults(this.options,this.default_options),this.map=this.options.map,this._setupModel(),this._setupItems(),this._updateLegendType()},_stopPropagation:function(e){e.stopPropagation()},_setupModel:function(){this.model||(this.model=new cdb.geo.ui.LegendModel({type:this.options.type||cdb.geo.ui.LegendModel.prototype.defaults.type,title:this.options.title||cdb.geo.ui.LegendModel.prototype.defaults.title,show_title:this.options.show_title||cdb.geo.ui.LegendModel.prototype.defaults.show_title,template:this.options.template||cdb.geo.ui.LegendModel.prototype.defaults.template})),this.add_related_model(this.model),this.model.bind("change",this._updateLegendType,this)},_updateLegendType:function(){var e=this.model.get("type");this.legend_name=this._capitalize(e)+"Legend";if(e=="none"||e==null)this.legend_name=null,this.model.set({type:"none"},{silent:!0});else if(!cdb.geo.ui[this.legend_name]){this.legend_name=null,this.model.set({type:this.model.previous("type")},{silent:!0});return}this._refresh()},_refresh:function(){var e=this;this.view&&this.view.clean();var t=this.model.get("type"),n=this.model.get("title"),r=this.model.get("show_title"),i=this.model.get("template");t&&this.legend_name?(this.view=new cdb.geo.ui[this.legend_name]({model:this.model}),this.$el.removeClass(),this.$el.addClass(this.className+" "+this.model.get("type")),this.show()):(this.hide(),this.$el.removeClass(),this.$el.addClass(this.className+" none")),this.render()},_setupItems:function(){var e=this;this.items=this.model.items,this.options.data&&this.items.reset(this.options.data),this.items.bind("add remove change:value change:name",this.render,this)},show:function(e){var t=this.model.get("type");t&&t!="none"&&this.$el.show()},hide:function(e){this.model.get("type")&&this.$el.hide()},_capitalize:function(e){if(e&&_.isString(e))return e.charAt(0).toUpperCase()+e.slice(1)},render:function(){return this.view&&(this.model.get("template")?(this.$el.html(this.view.render().$el.html()),this.$el.removeClass(this.model.get("type")),this.$el.addClass("wrapper")):this.$el.html(this.view.render().$el.html())),this}}),cdb.geo.ui.DebugLegend=cdb.core.View.extend({}),cdb.geo.ui.BaseLegend=cdb.core.View.extend({_bindModel:function(){this.model.bind("change:template change:title change:show_title",this.render,this)},addTo:function(e){$(e).html(this.render().$el)},setTitle:function(e){this.model.set("title",e)},showTitle:function(){this.model.set("show_title",!0)},hideTitle:function(){this.model.set("show_title",!1)}}),cdb.geo.ui.NoneLegend=cdb.geo.ui.BaseLegend.extend({}),cdb.geo.ui.Legend.None=cdb.core.View.extend({}),cdb.geo.ui.ChoroplethLegend=cdb.geo.ui.BaseLegend.extend({className:"choropleth-legend",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul><li class="min">		<%= leftLabel %></li><li class="max">		<%= rightLabel %></li><li class="graph count_<%= buckets_count %>">	<div class="colors"><%= colors %>\n	</div></li></ul>'),initialize:function(){this.items=this.model.items},_generateColorList:function(){var e="";if(this.model.get("colors"))return _.map(this.model.get("colors"),function(e){return'\n	<div class="quartile" style="background-color:'+e+'"></div>'}).join("");for(var t=2;t<this.items.length;t++){var n=this.items.at(t).get("value");e+='\n	<div class="quartile" style="background-color:'+n+'"></div>'}return e},setLeftLabel:function(e){this.model.set("leftLabel",e)},setRightLabel:function(e){this.model.set("rightLabel",e)},setColors:function(e){this.model.set("colors",e)},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON()))}else if(this.items.length>=2){this.leftLabel=this.items.at(0),this.rightLabel=this.items.at(1);var t=this.model.get("leftLabel")||this.leftLabel.get("value"),n=this.model.get("rightLabel")||this.rightLabel.get("value"),r=this._generateColorList(),i=_.extend(this.model.toJSON(),{leftLabel:t,rightLabel:n,colors:r,buckets_count:r.length});this.$el.html(this.template(i))}return this}}),cdb.geo.ui.DensityLegend=cdb.geo.ui.BaseLegend.extend({className:"density-legend",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul><li class="min">	<%= leftLabel %></li><li class="max">	<%= rightLabel %></li><li class="graph count_<%= buckets_count %>">	<div class="colors"><%= colors %>\n	</div></li></ul>'),initialize:function(){this.items=this.model.items},setLeftLabel:function(e){this.model.set("leftLabel",e)},setRightLabel:function(e){this.model.set("rightLabel",e)},setColors:function(e){this.model.set("colors",e)},_generateColorList:function(){var e="";if(this.model.get("colors"))return _.map(this.model.get("colors"),function(e){return'\n		<div class="quartile" style="background-color:'+e+'"></div>'}).join("");for(var t=2;t<this.items.length;t++){var n=this.items.at(t).get("value");e+='\n		<div class="quartile" style="background-color:'+n+'"></div>'}return e},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON()))}else if(this.items.length>=2){this.leftLabel=this.items.at(0),this.rightLabel=this.items.at(1);var t=this.model.get("leftLabel")||this.leftLabel.get("value"),n=this.model.get("rightLabel")||this.rightLabel.get("value"),r=this._generateColorList(),i=_.extend(this.model.toJSON(),{leftLabel:t,rightLabel:n,colors:r,buckets_count:r.length});this.$el.html(this.template(i))}return this}}),cdb.geo.ui.Legend.Density=cdb.geo.ui.DensityLegend.extend({type:"density",className:"cartodb-legend density",initialize:function(){this.items=this.options.items,this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,show_title:this.options.title?!0:!1,leftLabel:this.options.left||this.options.leftLabel,rightLabel:this.options.right||this.options.rightLabel,colors:this.options.colors,buckets_count:this.options.colors?this.options.colors.length:0,items:this.options.items}),this._bindModel()},_bindModel:function(){this.model.bind("change:colors change:template change:title change:show_title change:colors change:leftLabel change:rightLabel",this.render,this)},_generateColorList:function(){return _.map(this.model.get("colors"),function(e){return'<div class="quartile" style="background-color:'+e+'"></div>'}).join("")},render:function(){var e=_.extend(this.model.toJSON(),{colors:this._generateColorList()});return this.$el.html(this.template(e)),this}}),cdb.geo.ui.IntensityLegend=cdb.geo.ui.BaseLegend.extend({className:"intensity-legend",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul><li class="min">	<%= leftLabel %></li><li class="max">	<%= rightLabel %></li><li class="graph"></li></ul>'),initialize:function(){this.items=this.model.items},_bindModel:function(){this.model.bind("change:template",this.render,this)},setColor:function(e){this.model.set("color",e)},setLeftLabel:function(e){this.model.set("leftLabel",e)},setRightLabel:function(e){this.model.set("rightLabel",e)},_hexToRGB:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},_rgbToHex:function(e,t,n){function r(e){var t=e.toString(16);return t.length==1?"0"+t:t}return"#"+r(e)+r(t)+r(n)},_calculateMultiply:function(e,t){var n=this._hexToRGB(e);if(n){var r=n.r,i=n.g,s=n.b;for(var o=0;o<=t;o++)r=Math.round(r*n.r/255),i=Math.round(i*n.g/255),s=Math.round(s*n.b/255);return this._rgbToHex(r,i,s)}return"#ffffff"},_renderGraph:function(e){var t="";t+="background: <%= color %>;",t+="background: -moz-linear-gradient(left, <%= color %> 0%, <%= right %> 100%);",t+="background: -webkit-gradient(linear, left top, right top, color-stop(0%,<%= color %>), color-stop(100%,<%= right %>));",t+="background: -webkit-linear-gradient(left, <%= color %> 0%,<%= right %> 100%);",t+="background: -o-linear-gradient(left, <%= color %> 0%,<%= right %> 100%);",t+="background: -ms-linear-gradient(left, <%= color %> 0%,<%= right %> 100%)",t+="background: linear-gradient(to right, <%= color %> 0%,<%= right %> 100%);",t+="filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='<%= color %>', endColorstr='<%= right %>',GradientType=1 );",t+="background-image: -ms-linear-gradient(left, <%= color %> 0%,<%= right %> 100%)";var n=_.template(t),r=this._calculateMultiply(e,4);this.$el.find(".graph").attr("style",n({color:e,right:r}))},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON()))}else if(this.items.length>=3){this.leftLabel=this.items.at(0),this.rightLabel=this.items.at(1);var t=this.model.get("color")||this.items.at(2).get("value"),n=this.model.get("leftLabel")||this.leftLabel.get("value"),r=this.model.get("rightLabel")||this.rightLabel.get("value"),i=_.extend(this.model.toJSON(),{color:t,leftLabel:n,rightLabel:r});this.$el.html(this.template(i)),this._renderGraph(t)}return this}}),cdb.geo.ui.CategoryLegend=cdb.geo.ui.BaseLegend.extend({className:"category-legend",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul></ul>'),initialize:function(){this.items=this.model.items},_bindModel:function(){this.model.bind("change:title change:show_title change:template",this.render,this)},_renderItems:function(){this.items.each(this._renderItem,this)},_renderItem:function(e){view=new cdb.geo.ui.LegendItem({model:e,className:e.get("value")&&e.get("value").indexOf("http")>=0||e.get("type")&&e.get("type")=="image"?"bkg":"",template:'		<div class="bullet" style="background: <%= value %>"></div> <%= name || ((name === false) ? "false": "null") %>'}),this.$el.find("ul").append(view.render())},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON()))}else this.$el.html(this.template(this.model.toJSON())),this.items.length>0?this._renderItems():this.$el.html('<div class="warning">The category legend is empty</div>');return this}}),cdb.geo.ui.Legend.Category=cdb.geo.ui.CategoryLegend.extend({className:"cartodb-legend category",type:"category",initialize:function(){this.items=new cdb.geo.ui.LegendItems(this.options.data),this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,show_title:this.options.title?!0:!1}),this._bindModel()},render:function(){return this.$el.html(this.template(this.model.toJSON())),this._renderItems(),this}}),cdb.geo.ui.ColorLegend=cdb.geo.ui.BaseLegend.extend({className:"color-legend",type:"color",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul></ul>'),initialize:function(){this.items=this.model.items},_renderItems:function(){this.items.each(this._renderItem,this)},_renderItem:function(e){view=new cdb.geo.ui.LegendItem({model:e,className:e.get("value")&&e.get("value").indexOf("http")>=0?"bkg":"",template:'		<div class="bullet" style="background: <%= value %>"></div> <%= name || ((name === false) ? "false": "null") %>'}),this.$el.find("ul").append(view.render())},render:function(){return this.$el.html(this.template(this.model.toJSON())),this.items.length>0?this._renderItems():this.$el.html('<div class="warning">The color legend is empty</div>'),this}}),cdb.geo.ui.Legend.Color=cdb.geo.ui.Legend.Category.extend({}),cdb.geo.ui.StackedLegend=cdb.core.View.extend({events:{dragstart:"_stopPropagation",mousedown:"_stopPropagation",touchstart:"_stopPropagation",MSPointerDown:"_stopPropagation",dblclick:"_stopPropagation",mousewheel:"_stopPropagation",DOMMouseScroll:"_stopPropagation",dbclick:"_stopPropagation",click:"_stopPropagation"},className:"cartodb-legend-stack",initialize:function(){_.each(this.options.legends,this._setupBinding,this)},_stopPropagation:function(e){e.stopPropagation()},getLegendByIndex:function(e){if(!this._layerByIndex){this._layerByIndex={};var t=this.options.legends;for(var n=0;n<t.length;++n){var r=t[n];this._layerByIndex[r.options.index]=r}}return this._layerByIndex[e]},_setupBinding:function(e){e.model.bind("change:type",this._checkVisibility,this),this.add_related_model(e.model)},_checkVisibility:function(){var e=_.some(this.options.legends,function(e){return e.model.get("type")&&(e.model.get("type")!="none"||e.model.get("template"))},this);e?this.show():this.hide(),_.each(this.options.legends,function(e){var t=e.model.get("type");t&&t!="none"?e.show():e.hide()},this)},_renderItems:function(){_.each(this.options.legends,function(e){this.$el.append(e.render().$el)},this)},show:function(){this.$el.show()},hide:function(){this.$el.hide()},addTo:function(e){$(e).html(this.render().$el)},render:function(){return this._renderItems(),this._checkVisibility(),this}}),cdb.geo.ui.Legends=Backbone.Collection.extend({model:cdb.geo.ui.LegendModel}),cdb.geo.ui.Legend.Stacked=cdb.geo.ui.StackedLegend.extend({initialize:function(){if(this.options.legends){var e=_.map(this.options.legends,function(e){return e.model});this.legendItems=new cdb.geo.ui.Legends(e),this.legendItems.bind("add remove change",this.render,this)}else if(this.options.data){var e=_.map(this.options.data,function(e){return new cdb.geo.ui.LegendModel(e)});this.legendItems=new cdb.geo.ui.Legends(e),this.legendItems.bind("add remove change",this.render,this)}},_capitalize:function(e){if(e&&_.isString(e))return e.charAt(0).toUpperCase()+e.slice(1)},render:function(){return this.$el.empty(),this.legends=[],this.legendItems&&this.legendItems.length>0&&this.legendItems.each(this._renderLegend,this),this},_renderLegend:function(e){var t=e.get("type");t||(t="custom"),t=this._capitalize(t);var n=new cdb.geo.ui.Legend[t](e.attributes);this.legends.push(n),e.get("visible")!==!1&&this.$el.append(n.render().$el)},getLegendAt:function(e){return this.legends[e]},addLegend:function(e){var t=new cdb.geo.ui.LegendModel(e);this.legendItems.push(t)},removeLegendAt:function(e){var t=this.legendItems.at(e);this.legendItems.remove(t)}}),cdb.geo.ui.LegendModel=cdb.core.Model.extend({defaults:{type:null,show_title:!1,title:"",template:""},initialize:function(){this.items=new cdb.geo.ui.LegendItems(this.get("items")),this.items.bind("add remove reset change",function(){this.set({items:this.items.toJSON()})},this),this.bind("change:items",this._onUpdateItems,this),this.bind("change:title change:show_title",this._onUpdateTitle,this),this.bind("change:template",this._onUpdateTemplate,this)},_onUpdateTemplate:function(){this.template=this.get("template")},_onUpdateTitle:function(){this.title=this.get("title"),this.show_title=this.get("show_title")},_onUpdateItems:function(){var e=this.get("items");this.items.reset(e)}}),cdb.geo.ui.CustomLegend=cdb.geo.ui.BaseLegend.extend({className:"custom-legend",type:"custom",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul></ul>'),initialize:function(){this.items=this.model.items},setData:function(e){this.items=new cdb.geo.ui.LegendItems(e),this.model.items=this.items,this.model.set("items",e)},_renderItems:function(){this.items.each(this._renderItem,this)},_renderItem:function(e){view=new cdb.geo.ui.LegendItem({model:e,className:e.get("value")&&e.get("value").indexOf("http")>=0?"bkg":"",template:'		<div class="bullet" style="background:<%= value %>"></div>\n		<%= name || "null" %>'}),this.$el.find("ul").append(view.render())},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON()))}else this.$el.html(this.template(this.model.toJSON())),this.items.length>0?this._renderItems():this.$el.html('<div class="warning">The legend is empty</div>');return this}}),cdb.geo.ui.Legend.Custom=cdb.geo.ui.CustomLegend.extend
({className:"cartodb-legend custom",type:"custom",initialize:function(){this.items=new cdb.geo.ui.LegendItems(this.options.data||this.options.items),this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,show_title:this.options.title?!0:!1,items:this.items.models}),this._bindModel()},_bindModel:function(){this.model.bind("change:items change:template change:title change:show_title",this.render,this)}}),cdb.geo.ui.BubbleLegend=cdb.geo.ui.BaseLegend.extend({className:"bubble-legend",template:_.template('<% if (title && show_title) { %>\n<div class="legend-title"><%= title %></div><% } %><ul><li>	<%= min %></li><li class="graph">		<div class="bubbles"></div></li><li>	<%= max %></li></ul>'),initialize:function(){this.items=this.model.items},_bindModel:function(){this.model.bind("change:template change:title change:show_title change:color change:min change:max",this.render,this)},setColor:function(e){this.model.set("color",e)},setMinValue:function(e){this.model.set("min",e)},setMaxValue:function(e){this.model.set("max",e)},_renderGraph:function(e){this.$el.find(".graph").css("background",e)},render:function(){if(this.model.get("template")){var e=_.template(this.model.get("template"));this.$el.html(e(this.model.toJSON())),this.$el.removeClass("bubble-legend")}else{var t=this.model.get("color")||(this.items.length>=3?this.items.at(2).get("value"):"");if(this.items.length>=3){var n=this.model.get("min")||this.items.at(0).get("value"),r=this.model.get("max")||this.items.at(1).get("value"),i=_.extend(this.model.toJSON(),{min:n,max:r});this.$el.html(this.template(i))}this._renderGraph(t)}return this}}),cdb.geo.ui.Legend.Bubble=cdb.geo.ui.BubbleLegend.extend({className:"cartodb-legend bubble",type:"bubble",initialize:function(){this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,min:this.options.min,max:this.options.max,color:this.options.color,show_title:this.options.title?!0:!1}),this.add_related_model(this.model),this._bindModel()},render:function(){return this.$el.html(this.template(this.model.toJSON())),this._renderGraph(this.model.get("color")),this}}),cdb.geo.ui.Legend.Choropleth=cdb.geo.ui.ChoroplethLegend.extend({type:"choropleth",className:"cartodb-legend choropleth",initialize:function(){this.items=this.options.items,this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,show_title:this.options.title?!0:!1,leftLabel:this.options.left||this.options.leftLabel,rightLabel:this.options.right||this.options.rightLabel,colors:this.options.colors,buckets_count:this.options.colors?this.options.colors.length:0}),this.add_related_model(this.model),this._bindModel()},_bindModel:function(){this.model.bind("change:template change:title change:show_title change:colors change:leftLabel change:rightLabel",this.render,this)},_generateColorList:function(){return _.map(this.model.get("colors"),function(e){return'		<div class="quartile" style="background-color:'+e+'"></div>'}).join("")},render:function(){var e=_.extend(this.model.toJSON(),{colors:this._generateColorList()});return this.$el.html(this.template(e)),this}}),cdb.geo.ui.Legend.Intensity=cdb.geo.ui.IntensityLegend.extend({className:"cartodb-legend intensity",type:"intensity",initialize:function(){this.items=this.options.items,this.model=new cdb.geo.ui.LegendModel({type:this.type,title:this.options.title,show_title:this.options.title?!0:!1,color:this.options.color,leftLabel:this.options.left||this.options.leftLabel,rightLabel:this.options.right||this.options.rightLabel}),this.add_related_model(this.model),this._bindModel()},_bindModel:function(){this.model.bind("change:title change:show_title change:color change:leftLabel change:rightLabel",this.render,this)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this._renderGraph(this.model.get("color")),this}}),cdb.geo.ui.SwitcherItemModel=Backbone.Model.extend({}),cdb.geo.ui.SwitcherItems=Backbone.Collection.extend({model:cdb.geo.ui.SwitcherItemModel}),cdb.geo.ui.SwitcherItem=cdb.core.View.extend({tagName:"li",events:{"click a":"select"},initialize:function(){_.bindAll(this,"render"),this.template=cdb.templates.getTemplate("templates/map/switcher/item"),this.parent=this.options.parent,this.model.on("change:selected",this.render)},select:function(e){e.preventDefault(),this.parent.toggle(this);var t=this.model.get("callback");t&&t()},render:function(){return this.model.get("selected")==1?this.$el.addClass("selected"):this.$el.removeClass("selected"),this.$el.html(this.template(this.model.toJSON())),this.$el}}),cdb.geo.ui.Switcher=cdb.core.View.extend({id:"switcher",default_options:{},initialize:function(){this.map=this.model,this.add_related_model(this.model),_.bindAll(this,"render","show","hide","toggle"),_.defaults(this.options,this.default_options),this.collection&&(this.model.collection=this.collection),this.template=this.options.template?this.options.template:cdb.templates.getTemplate("geo/switcher")},show:function(){this.$el.fadeIn(250)},hide:function(){this.$el.fadeOut(250)},toggle:function(e){this.collection&&this.collection.each(function(e){e.set("selected",!e.get("selected"))})},render:function(){var e=this;return this.model!=undefined&&this.$el.html(this.template(this.model.toJSON())),this.collection&&this.collection.each(function(t){var n=new cdb.geo.ui.SwitcherItem({parent:e,className:t.get("className"),model:t});e.$el.find("ul").append(n.render())}),this}}),cdb.geo.ui.InfowindowModel=Backbone.Model.extend({SYSTEM_COLUMNS:["the_geom","the_geom_webmercator","created_at","updated_at","cartodb_id","cartodb_georef_status"],defaults:{template_name:"infowindow_light",latlng:[0,0],offset:[28,0],maxHeight:180,autoPan:!0,template:"",content:"",visibility:!1,alternative_names:{},fields:null},clearFields:function(){this.set({fields:[]})},saveFields:function(e){e=e||"old_fields",this.set(e,_.clone(this.get("fields")))},fieldCount:function(){var e=this.get("fields");return e?e.length:0},restoreFields:function(e,t){t=t||"old_fields";var n=this.get(t);e&&(n=n.filter(function(t){return _.contains(e,t.name)})),n&&n.length&&this._setFields(n),this.unset(t)},_cloneFields:function(){return _(this.get("fields")).map(function(e){return _.clone(e)})},_setFields:function(e){e.sort(function(e,t){return e.position-t.position}),this.set({fields:e})},sortFields:function(){this.get("fields").sort(function(e,t){return e.position-t.position})},_addField:function(e,t){var n=$.Deferred();if(!this.containsField(e)){var r=this.get("fields");r?(t=t===undefined?r.length:t,r.push({name:e,title:!0,position:t})):(t=t===undefined?0:t,this.set("fields",[{name:e,title:!0,position:t}],{silent:!0}))}return n.resolve(),n.promise()},addField:function(e,t){var n=this;return $.when(this._addField(e,t)).then(function(){n.sortFields(),n.trigger("change:fields"),n.trigger("add:fields")}),this},getFieldProperty:function(e,t){if(this.containsField(e)){var n=this.get("fields")||[],r=_.indexOf(_(n).pluck("name"),e);return n[r][t]}return null},setFieldProperty:function(e,t,n){if(this.containsField(e)){var r=this._cloneFields()||[],i=_.indexOf(_(r).pluck("name"),e);r[i][t]=n,this._setFields(r)}return this},getAlternativeName:function(e){return this.get("alternative_names")&&this.get("alternative_names")[e]},setAlternativeName:function(e,t){var n=this.get("alternative_names")||[];n[e]=t,this.set({alternative_names:n}),this.trigger("change:alternative_names")},getFieldPos:function(e){var t=this.getFieldProperty(e,"position");return t==undefined?Number.MAX_VALUE:t},containsAlternativeName:function(e){var t=this.get("alternative_names")||[];return t[e]},containsField:function(e){var t=this.get("fields")||[];return _.contains(_(t).pluck("name"),e)},removeField:function(e){if(this.containsField(e)){var t=this._cloneFields()||[],n=_.indexOf(_(t).pluck("name"),e);n>=0&&t.splice(n,1),this._setFields(t),this.trigger("remove:fields")}return this},updateContent:function(e){var t=this.get("fields");this.set("content",cdb.geo.ui.InfowindowModel.contentForFields(e,t))}},{contentForFields:function(e,t,n){n=n||{};var r=[];for(var i=0;i<t.length;++i){var s=t[i],o=String(e[s.name]);(n.empty_fields||e[s.name]!==undefined&&o!="")&&r.push({title:s.title?s.name:null,value:e[s.name],index:i?i:null})}return r.length===0&&r.push({title:null,value:"No data available",index:i?i:null,type:"empty"}),{fields:r,data:e}}}),cdb.geo.ui.Infowindow=cdb.core.View.extend({className:"cartodb-infowindow",spin_options:{lines:10,length:0,width:4,radius:6,corners:1,rotate:0,color:"rgba(0,0,0,0.5)",speed:1,trail:60,shadow:!1,hwaccel:!0,className:"spinner",zIndex:2e9,top:"auto",left:"auto",position:"absolute"},events:{"click .close":"_closeInfowindow","touchstart .close":"_closeInfowindow","MSPointerDown .close":"_closeInfowindow",dragstart:"_checkOrigin",mousedown:"_checkOrigin",touchstart:"_checkOrigin",MSPointerDown:"_checkOrigin",dblclick:"_stopPropagation",DOMMouseScroll:"_stopBubbling",MozMousePixelScroll:"_stopBubbling",mousewheel:"_stopBubbling",dbclick:"_stopPropagation",click:"_stopPropagation"},initialize:function(){var e=this;_.bindAll(this,"render","setLatLng","_setTemplate","_updatePosition","_update","toggle","show","hide"),this.mapView=this.options.mapView,this.options.template&&this.model.set("template",this.options.template),this.model.get("template")?this._compileTemplate():this._setTemplate(),this.model.bind("change:content",this.render,this),this.model.bind("change:template_name",this._setTemplate,this),this.model.bind("change:latlng",this._update,this),this.model.bind("change:visibility",this.toggle,this),this.model.bind("change:template",this._compileTemplate,this),this.model.bind("change:alternative_names",this.render,this),this.model.bind("change:width",this.render,this),this.model.bind("change:maxHeight",this.render,this),this.mapView.map.bind("change",this._updatePosition,this),this.mapView.bind("zoomstart",function(){e.hide(!0)}),this.mapView.bind("zoomend",function(){e.show(!0)}),this.add_related_model(this.mapView.map),this.$el.hide()},render:function(){if(this.template){var e=this.$(".cartodb-popup-content");e.length>0&&e.data()!=null&&e.data().jsp&&e.data().jsp.destroy();var t=_.map(this.model.attributes.content.fields,function(e){return _.clone(e)}),n=this.model.get("content")?this.model.get("content").data:{};if(this.model.get("template_name")){var r=_.clone(this.model.attributes.template_name);t=this._fieldsToString(t,r)}var i={};_.each(this.model.get("content").fields,function(e){i[e.title]=e.value});var s=_.extend({content:{fields:t,data:n}},i);this.$el.html(this.template(s)),this.model.get("width")&&this.$(".cartodb-popup").css("width",this.model.get("width")+"px"),this.$(".cartodb-popup .cartodb-popup-content").css("max-height",this.model.get("maxHeight")+"px");var o=this;setTimeout(function(){var e=o.$(".cartodb-popup-content").outerHeight();o.model.get("maxHeight")<=e&&o.$(".cartodb-popup-content").jScrollPane({maintainPosition:!1,verticalDragMinHeight:20})},1),this._checkLoading(),this._loadCover(),this.isLoadingData()||(this.model.trigger("domready",this,this.$el),this.trigger("domready",this,this.$el))}return this},_getModelTemplate:function(){return this.model.get("template_name")},_setTemplate:function(){this.model.get("template_name")&&(this.template=cdb.templates.getTemplate(this._getModelTemplate()),this.render())},_compileTemplate:function(){var e=this.model.get("template")?this.model.get("template"):cdb.templates.getTemplate(this._getModelTemplate());typeof e!="function"?this.template=(new cdb.core.Template({template:e,type:this.model.get("template_type")||"mustache"})).asFunction():this.template=e,this.render()},_checkOrigin:function(e){var t=$(e.target).closest(".jspVerticalBar").length>0&&e.type!="touchstart";t||e.stopPropagation()},_fieldsToString:function(e,t){var n=[];if(e&&e.length>0){var r=this;n=_.map(e,function(e,n){return r._sanitizeField(e,t,e.index||n)})}return n},_sanitizeField:function(e,t,n){if(e.value==null||e.value==undefined)e.value="";var r=this.model.getAlternativeName(e.title);e.title&&r?e.title=r:e.title&&(e.title=e.title.replace(/_/g," "));var i=e.value.toString();return!e.type&&n==0&&e.value.length>35&&t&&t.search("_header_")!=-1&&(i=e.value.substr(0,32)+"..."),!e.type&&n==1&&e.value.length>35&&t&&t.search("_header_with_image")!=-1&&(i=e.value.substr(0,32)+"..."),this._isValidURL(e.value)&&(i="<a href='"+e.value+"' target='_blank'>"+i+"</a>"),n==0&&t.search("_header_with_image")!=-1&&(i=e.value),e.value=i,e},isLoadingData:function(){var e=this.model.get("content");return e.fields&&e.fields.length==1&&e.fields[0].type==="loading"},_checkLoading:function(){this.isLoadingData()?this._startSpinner():this._stopSpinner()},_stopSpinner:function(){this.spinner&&this.spinner.stop()},_startSpinner:function(e){this._stopSpinner();var e=this.$el.find(".loading");if(e){var t=this.model.get("template_name").search("dark")!=-1;t?this.spin_options.color="#FFF":this.spin_options.color="rgba(0,0,0,0.5)",this.spinner=(new Spinner(this.spin_options)).spin(),e.append(this.spinner.el)}},_containsCover:function(){return this.$el.find(".cartodb-popup.header").attr("data-cover")?!0:!1},_getCoverURL:function(){var e=this.model.get("content");return e&&e.fields&&e.fields.length>0?(e.fields[0].value||"").toString():!1},_loadCover:function(){if(!this._containsCover())return;var e=this,t=this.$(".cover"),n=this.$(".shadow"),r=this._getCoverURL();if(!this._isValidURL(r)){n.hide(),cdb.log.info("Header image url not valid");return}var i=document.getElementById("spinner"),s={lines:9,length:4,width:2,radius:4,corners:1,rotate:0,color:"#ccc",speed:1,trail:60,shadow:!0,hwaccel:!1,zIndex:2e9},o=(new Spinner(s)).spin(i),u=t.find("img");u.hide(function(){this.remove()}),u=$("<img />").attr("src",r),t.append(u),u.load(function(){o.stop();var e=u.width(),n=u.height(),r=t.width(),i=t.height(),s=n/e,a=i/r;if(e>r&&n>i)if(s<a)u.css({height:i});else{var f=n/(e/r);u.css({width:r,top:"50%",position:"absolute","margin-top":-1*parseInt(f,10)/2})}else{var f=n/(e/r);u.css({width:r,top:"50%",position:"absolute","margin-top":-1*parseInt(f,10)/2})}u.fadeIn(300)}).error(function(){o.stop()})},_isValidURL:function(e){if(e){var t=/^(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-|]*[\w@?^=%&amp;\/~+#-])?$/;return String(e).match(t)!=null?!0:!1}return!1},toggle:function(){this.model.get("visibility")?this.show():this.hide()},_stopBubbling:function(e){e.preventDefault(),e.stopPropagation()},_stopPropagation:function(e){e.stopPropagation()},setLoading:function(){return this.model.set({content:{fields:[{title:null,alternative_name:null,value:"Loading content...",index:null,type:"loading"}],data:{}}}),this},setError:function(){return this.model.set({content:{fields:[{title:null,alternative_name:null,value:"There has been an error...",index:null,type:"error"}],data:{}}}),this},setLatLng:function(e){return this.model.set("latlng",e),this},_closeInfowindow:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.model.get("visibility")&&(this.model.set("visibility",!1),this.trigger("close"))},showInfowindow:function(){this.model.set("visibility",!0)},show:function(e){var t=this;this.model.get("visibility")&&(t.$el.css({left:-5e3}),t._update(e))},isHidden:function(){return!this.model.get("visibility")},hide:function(e){(e||!this.model.get("visibility"))&&this._animateOut()},_update:function(e){if(!this.isHidden()){var t=0;if(!e)var t=this.adjustPan();this._updatePosition(),this._animateIn(t)}},_animateIn:function(e){!$.browser.msie||$.browser.msie&&parseInt($.browser.version)>8?(this.$el.css({marginBottom:"-10px",display:"block",opacity:0}),this.$el.delay(e).animate({opacity:1,marginBottom:0},300)):this.$el.show()},_animateOut:function(){if(!$.browser.msie||$.browser.msie&&parseInt($.browser.version)>8){var e=this;this.$el.animate({marginBottom:"-10px",opacity:"0",display:"block"},180,function(){e.$el.css({display:"none"})})}else this.$el.hide()},_updatePosition:function(){if(this.isHidden())return;var e=this.model.get("offset");pos=this.mapView.latLonToPixel(this.model.get("latlng")),x=this.$el.position().left,y=this.$el.position().top,containerHeight=this.$el.outerHeight(!0),containerWidth=this.$el.width(),left=pos.x-e[0],size=this.mapView.getSize(),bottom=-1*(pos.y-e[1]-size.y),this.$el.css({bottom:bottom,left:left})},adjustPan:function(e){var t=this.model.get("offset");if(!this.model.get("autoPan")||this.isHidden())return;var n=this.$el.position().left,r=this.$el.position().top,i=this.$el.outerHeight(!0)+15,s=this.$el.width(),o=this.mapView.latLonToPixel(this.model.get("latlng")),u={x:0,y:0};size=this.mapView.getSize(),wait_callback=0,o.x-t[0]<0&&(u.x=o.x-t[0]-10),o.x-t[0]+s>size.x&&(u.x=o.x+s-size.x-t[0]+10),o.y-i<0&&(u.y=o.y-i-10),o.y-i>size.y&&(u.y=o.y+i-size.y);if(u.x||u.y)this.mapView.panBy(u),wait_callback=300;return wait_callback}}),cdb.geo.ui.Header=cdb.core.View.extend({className:"cartodb-header",initialize:function(){var e=this.model.get("extra");this.model.set({title:e.title,description:this._setLinksTarget(e.description),show_title:e.show_title,show_description:e.show_description},{silent:!0})},show:function(){var e=this.model.get("title")&&this.model.get("show_title"),t=this.model.get("description")&&this.model.get("show_description");if(e||t){var n=this;this.$el.show(),e&&n.$title.show(),t&&n.$description.show()}},_setLinksTarget:function(e){if(!e)return e;var t=new RegExp(/<(a)([^>]+)>/g);return e.replace(t,'<$1 target="_blank"$2>')},render:function(){return this.$el.html(this.options.template(this.model.attributes)),this.$title=this.$el.find(".content div.title"),this.$description=this.$el.find(".content div.description"),this.model.get("show_title")||this.model.get("show_description")?this.show():this.hide(),this}}),cdb.geo.ui.Search=cdb.core.View.extend({className:"cartodb-searchbox",events:{"click input[type='text']":"_focus","submit form":"_submit",click:"_stopPropagation",dblclick:"_stopPropagation",mousedown:"_stopPropagation"},initialize:function(){},render:function(){return this.$el.html(this.options.template(this.options)),this},_stopPropagation:function(e){e.stopPropagation()},_focus:function(e){e.preventDefault(),$(e.target).focus()},_showLoader:function(){this.$("span.loader").show()},_hideLoader:function(){this.$("span.loader").hide()},_submit:function(e){e.preventDefault();var t=this,n=this.$("input.text").val();this._showLoader(),cdb.geo.geocoder.NOKIA.geocode(n,function(e){if(e.length>0){var n=!0;if(!e[0].boundingbox||e[0].boundingbox.south==e[0].boundingbox.north||e[0].boundingbox.east==e[0].boundingbox.west)n=!1;n&&e[0].boundingbox?t.model.setBounds([[parseFloat(e[0].boundingbox.south),parseFloat(e[0].boundingbox.west)],[parseFloat(e[0].boundingbox.north),parseFloat(e[0].boundingbox.east)]]):e[0].lat&&e[0].lon&&(t.model.setCenter([e[0].lat,e[0].lon]),t.model.setZoom(10))}t._hideLoader()})}}),cdb.geo.ui.LayerSelector=cdb.core.View.extend({className:"cartodb-layer-selector-box",events:{click:"_openDropdown",dblclick:"killEvent",mousedown:"killEvent"},initialize:function(){this.map=this.options.mapView.map,this.mapView=this.options.mapView,this.mapView.bind("click zoomstart drag",function(){this.dropdown&&this.dropdown.hide()},this),this.add_related_model(this.mapView),this.layers=[]},render:function(){return this.$el.html(this.options.template(this.options)),this.dropdown=new cdb.ui.common.Dropdown({className:"cartodb-dropdown border",template:this.options.dropdown_template,target:this.$el.find("a"),speedIn:300,speedOut:200,position:"position",tick:"right",vertical_position:"down",horizontal_position:"right",vertical_offset:7,horizontal_offset:13}),cdb.god&&cdb.god.bind("closeDialogs",this.dropdown.hide,this.dropdown),this.$el.append(this.dropdown.render().el),this._getLayers(),this._setCount(),this},_getLayers:function(){var e=this;this.layers=[],_.each(this.map.layers.models,function(t){if(t.get("type")=="layergroup"||t.get("type")==="namedmap"){var n=e.mapView.getLayerByCid(t.cid);for(var r=0;r<n.getLayerCount();++r){var i=n.getLayer(r),s=new cdb.core.Model(i);s.set("order",r),s.set("type","layergroup"),s.set("visible",!n.getSubLayer(r).get("hidden")),s.bind("change:visible",function(e){this.trigger("change:visible",e.get("visible"),e.get("order"),e)},e),e.options.layer_names?s.set("layer_name",e.options.layer_names[r]):s.set("layer_name",i.options.layer_name);var o=e._createLayer("LayerViewFromLayerGroup",{model:s,layerView:n,layerIndex:r});o.bind("switchChanged",e._setCount,e),e.layers.push(o)}}else if(t.get("type")==="CartoDB"||t.get("type")==="torque"){var o=e._createLayer("LayerView",{model:t});o.bind("switchChanged",e._setCount,e),e.layers.push(o),o.model.bind("change:visible",function(e){this.trigger("change:visible",e.get("visible"),e.get("order"),e)},e)}})},_createLayer:function(e,t){var n=new cdb.geo.ui[e](t);return this.$("ul").append(n.render().el),this.addView(n),n},_setCount:function(){var e=0;for(var t=0,n=this.layers.length;t<n;++t){var r=this.layers[t];r.model.get("visible")&&e++}this.$(".count").text(e),this.trigger("switchChanged",this)},_openDropdown:function(){this.dropdown.open()}}),cdb.geo.ui.LayerView=cdb.core.View.extend({tagName:"li",defaults:{template:'      <a class="layer" href="#/change-layer"><%= layer_name %></a>      <a href="#switch" class="right <%= visible ? "enabled" : "disabled" %> switch"><span class="handle"></span></a>    '},events:{click:"_onSwitchClick"},initialize:function(){this.model.has("visible")||this.model.set("visible",!1),this.model.bind("change:visible",this._onSwitchSelected,this),this.add_related_model(this.model),this._onSwitchSelected(),this.template=this.options.template?cdb.templates.getTemplate(this.options.template):_.template(this.defaults.template)},render:function(){var e=_.clone(this.model.attributes);return e.layer_name=e.layer_name||e.table_name,this.$el.append(this.template(e)),this},_onSwitchSelected:function(){var e=this.model.get("visible");this.$el.find(".switch").removeClass(e?"disabled":"enabled").addClass(e?"enabled":"disabled"),this.trigger("switchChanged")},_onSwitchClick:function(e){this.killEvent(e),this.model.set("visible",!this.model.get("visible"))}}),cdb.geo.ui.LayerViewFromLayerGroup=cdb.geo.ui.LayerView.extend({_onSwitchSelected:function(){cdb.geo.ui.LayerView.prototype._onSwitchSelected.call(this);var e=this.options.layerView.getSubLayer(this.options.layerIndex),t=this.model.get("visible");t?e.show():e.hide()}}),cdb.geo.ui.MobileLayer=cdb.core.View.extend({events:{"click h3":"_toggle",dblclick:"_stopPropagation"},tagName:"li",className:"cartodb-mobile-layer has-toggle",template:cdb.core.Template.compile("<% if (show_title) { %><h3><%= layer_name %><% } %><a href='#' class='toggle<%= toggle_class %>'></a></h3>"),_stopPropagation:function(e){e.stopPropagation()},initialize:function(){_.defaults(this.options,this.default_options),this.model.bind("change:visible",this._onChangeVisible,this)},_onChangeVisible:function(){this.$el.find(".legend")[this.model.get("visible")?"fadeIn":"fadeOut"](150),this.$el[this.model.get("visible")?"removeClass":"addClass"]("hidden"),this.trigger("change_visibility",this)},_toggle:function(e){e.preventDefault(),e.stopPropagation();if(this.options.hide_toggle)return;this.model.set("visible",!this.model.get("visible"))},_renderLegend:function(){if(!this.options.show_legends)return;if(this.model.get("legend")&&(this.model.get("legend").type=="none"||!this.model.get("legend").type))return;if(this.model.get("legend")&&this.model.get("legend").items&&this.model.get("legend").items.length==0)return;this.$el.addClass("has-legend");var e=new cdb.geo.ui.Legend(this.model.get("legend"));e.undelegateEvents(),this.$el.append(e.render().$el)},_truncate:function(e,t){return e.substr(0,t-1)+(e.length>t?"&hellip;":"")},render:function(){var e=this.model.get("layer_name");e=e?this._truncate(e,23):"untitled";var t=_.extend(this.model.attributes,{layer_name:this.options.show_title?e:"",toggle_class:this.options.hide_toggle?" hide":""});return this.$el.html(this.template(_.extend(t,{show_title:this.options.show_title}))),this.options.hide_toggle&&this.$el.removeClass("has-toggle"),this.model.get("visible")||this.$el.addClass("hidden"),this.model.get("legend")&&this._renderLegend(),this._onChangeVisible(),this}}),cdb.geo.ui.Mobile=cdb.core.View.extend({className:"cartodb-mobile",events:{"click .cartodb-attribution-button":"_onAttributionClick","click .toggle":"_toggle","click .fullscreen":"_toggleFullScreen","click .backdrop":"_onBackdropClick","dblclick .aside":"_stopPropagation","dragstart .aside":"_checkOrigin","mousedown .aside":"_checkOrigin","touchstart .aside":"_checkOrigin","MSPointerDown .aside":"_checkOrigin"},initialize:function(){_.bindAll(this,"_toggle","_reInitScrollpane"),_.defaults(this.options,this.default_options),this.hasLayerSelector=!1,this.mobileEnabled=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.visibility_options=this.options.visibility_options||{},this.mapView=this.options.mapView,this.map=this.mapView.map,this.template=this.options.template?this.options.template:cdb.templates.getTemplate("geo/zoom"),this.overlays=this.options.overlays,this._setupModel(),window.addEventListener("orientationchange",_.bind(this.doOnOrientationChange,this)),this._addWheelEvent()},_addWheelEvent:function(){var e=this,t=this.options.mapView;$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(){!document.fullscreenElement&&!document.webkitFullscreenElement&&!document.mozFullScreenElement&&!document.msFullscreenElement&&t.options.map.set("scrollwheel",!1),t.invalidateSize()})},_setupModel:function(){this.model=new Backbone.Model({open:!1,layer_count:0}),this.model.on("change:open",this._onChangeOpen,this),this.model.on("change:layer_count",this._onChangeLayerCount,this)},_checkOrigin:function(e){var t=$(e.target).closest(".jspVerticalBar").length>0&&e.type!="touchstart";t||e.stopPropagation()},_stopPropagation:function(e){e.stopPropagation()},_onBackdropClick:function(e){e.preventDefault(),e.stopPropagation(),this.$el.find(".backdrop").fadeOut(250),this.$el.find(".cartodb-attribution").fadeOut(250)},_onAttributionClick:function(e){e.preventDefault(),e.stopPropagation(),this.$el.find(".backdrop").fadeIn(250),this.$el.find(".cartodb-attribution").fadeIn(250)},_toggle:function(e){e.preventDefault(),e.stopPropagation(),this.model.set("open",!this.model.get("open"))},_toggleFullScreen:function(e){e.stopPropagation(),e.preventDefault();var t=window.document,n=$("#map > div")[0],r=n.requestFullscreen||n.mozRequestFullScreen||n.webkitRequestFullScreen,i=t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen,s=this.options.mapView;!t.fullscreenElement&&!t.mozFullScreenElement&&!t.webkitFullscreenElement?(r.call(n),s&&s.options.map.set("scrollwheel",!0)):i.call(t)},_open:function(){var e=this.$el.find(".aside").width();this.$el.find(".cartodb-header").animate({right:e},200),this.$el.find(".aside").animate({right:0},200),this.$el.find(".cartodb-attribution-button").animate({right:e+parseInt(this.$el.find(".cartodb-attribution-button").css("right"))},200),this.$el.find(".cartodb-attribution").animate({right:e+parseInt(this.$el.find(".cartodb-attribution-button").css("right"))},200),this._initScrollPane()},_close:function(){this.$el.find(".cartodb-header").animate({right:0},200),this.$el.find(".aside").animate({right:-this.$el.find(".aside").width()},200),this.$el.find(".cartodb-attribution-button").animate({right:20},200),this.$el.find(".cartodb-attribution").animate({right:20},200)},default_options:{timeout:0,msg:""},_stopPropagation:function(e){e.stopPropagation()},doOnOrientationChange:function(){switch(window.orientation){case-90:case 90:this.recalc("landscape");break;default:this.recalc("portrait")}},recalc:function(e){var t=$(".legends > div.cartodb-legend-stack").height();this.$el.hasClass("open")&&t<100&&!this.$el.hasClass("torque")?(this.$el.css("height",t),this.$el.find(".top-shadow").hide(),this.$el.find(".bottom-shadow").hide()):this.$el.hasClass("open")&&t<100&&this.$el.hasClass("legends")&&this.$el.hasClass("torque")&&(this.$el.css("height",t+$(".legends > div.torque").height()),this.$el.find(".top-shadow").hide(),this.$el.find(".bottom-shadow").hide())},_onChangeLayerCount:function(){var e=this.model.get("layer_count"),t=e+" layer"+(e!=1?"s":"");this.$el.find(".aside .layer-container > h3").html(t)},_onChangeOpen:function(){this.model.get("open")?this._open():this._close()},_createLayer:function(e,t){return new cdb.geo.ui[e](t)},_getLayers:function(){this.layers=[],this.options.layerView?this._getLayersFromLayerView():_.each(this.map.layers.models,this._getLayer,this)},_getLayersFromLayerView:function(){if(this.options.layerView&&this.options.layerView.model.get("type")=="layergroup")this.layers=_.map(this.options.layerView.layers,function(t,n){var r=new cdb.core.Model(t);return r.set("order",n),r.set("type","layergroup"),r.set("visible",t.visible),r.set("layer_name",t.options.layer_name),e=this._createLayer("LayerViewFromLayerGroup",{model:r,layerView:this.options.layerView,layerIndex:n}),e.model},this);else if(this.options.layerView&&this.options.layerView.model.get("type")=="torque"){var e=this._createLayer("LayerView",{model:this.options.layerView.model});this.layers.push(e.model)}},_getLayer:function(e){if(e.get("type")=="layergroup"||e.get("type")==="namedmap"){var t=this.mapView.getLayerByCid(e.cid);for(var n=0;n<t.getLayerCount();++n){var r=t.getLayer(n),i=new cdb.core.Model(r);i.set("order",n),i.set("type","layergroup"),i.set("visible",r.visible),i.set("layer_name",r.options.layer_name),layerView=this._createLayer("LayerViewFromLayerGroup",{model:i,layerView:t,layerIndex:n}),this.layers.push(layerView.model)}}else if(e.get("type")==="CartoDB"||e.get("type")==="torque")e.get("type")==="torque"&&e.on("change:visible",this._toggleSlider,this),this.layers.push(e)},_toggleSlider:function(e){e.get("visible")?(this.$el.addClass("with-torque"),this.slider.show()):(this.$el.removeClass("with-torque"),this.slider.hide())},_reInitScrollpane:function(){this.$(".scrollpane").data("jsp")&&this.$(".scrollpane").data("jsp").reinitialise()},_bindOrientationChange:function(){var e=this,t=function(){$(".cartodb-mobile .scrollpane").css("max-height",e.$el.height()-30),$(".cartodb-mobile .scrollpane").data("jsp")&&$(".cartodb-mobile .scrollpane").data("jsp").reinitialise()};window.addEventListener?window.addEventListener("orientationchange",_.bind(t)):window.attachEvent("orientationchange",t,this)},_renderOverlays:function(){var e=!1,t=!1,n=!1;_.each(this.overlays,function(r){!this.visibility_options.search&&r.type=="search"&&this.visibility_options.search!==!1&&this.visibility_options.search!=="false"&&(this._addSearch(),e=!0),!this.visibility_options.zoomControl&&r.type=="zoom"&&this.visibility_options.zoomControl!=="false"&&(this._addZoom(),t=!0),r.type=="fullscreen"&&!this.mobileEnabled&&this._addFullscreen(),r.type=="header"&&this._addHeader(r),r.type=="layer_selector"&&(n=!0)},this);var r=this.visibility_options.search==="true"||this.visibility_options.search===!0,i=this.visibility_options.zoomControl==="true"||this.visibility_options.zoomControl===!0,s=this.visibility_options.layer_selector;!e&&r&&this._addSearch(),!t&&i&&this._addZoom();if(s||n&&s==undefined)this.hasLayerSelector=!0},_initScrollPane:function(){if(this.$scrollpane)return;var e=this,t=this.$el.height();this.$scrollpane=this.$el.find(".scrollpane"),setTimeout(function(){e.$scrollpane.css("max-height",t-60),e.$scrollpane.jScrollPane({showArrows:!0})},500)},_addZoom:function(){var e=cdb.core.Template.compile('    <a href="#zoom_in" class="zoom_in">+</a>    <a href="#zoom_out" class="zoom_out">-</a>    <div class="info"></div>',"mustache"),t=new cdb.geo.ui.Zoom({model:this.options.map,template:e});this.$el.append(t.render().$el),this.$el.addClass("with-zoom")},_addFullscreen:function(){this.visibility_options.fullscreen!=0&&(this.hasFullscreen=!0,this.$el.addClass("with-fullscreen"))},_addSearch:function(){this.hasSearch=!0;var e=cdb.core.Template.compile('      <form>      <span class="loader"></span>      <input type="text" class="text" placeholder="Search for places..." value="" />      <input type="submit" class="submit" value="" />      </form>      ',"mustache"),t=new cdb.geo.ui.Search({template:e,model:this.mapView.map});this.$el.find(".aside").prepend(t.render().$el),this.$el.find(".cartodb-searchbox").show(),this.$el.addClass("with-search")},_addHeader:function(e){this.hasHeader=!0,this.$header=this.$el.find(".cartodb-header");var t=_.template('<div class="hgroup"><% if (show_title) { %><div class="title"><%= title %></div><% } %><% if (show_description) { %><div class="description"><%= description %><% } %></div></div>'
),n=e.options.extra,r=!1,i=!1,s=!1;if(n){if(this.visibility_options.title||this.visibility_options.title!=0&&n.show_title)r=!0,i=!0;if(this.visibility_options.description||this.visibility_options.description!=0&&n.show_description)r=!0,s=!0;var o=t({title:n.title,show_title:i,description:n.description,show_description:s});r&&(this.$el.addClass("with-header"),this.$header.find(".content").append(o))}},_addAttributions:function(){var e="";this.options.mapView.$el.find(".leaflet-control-attribution").hide(),this.options.layerView?(e=this.options.layerView.model.get("attribution"),this.$el.find(".cartodb-attribution").append(e)):this.options.map.get("attribution")&&(e=this.options.map.get("attribution"),_.each(e,function(e){var t=$("<li></li>"),n=t.html(e);this.$el.find(".cartodb-attribution").append(t)},this)),e&&this.$el.find(".cartodb-attribution-button").fadeIn(250)},_renderLayers:function(){var e=this.visibility_options.legends,t=this.layers.filter(function(e){return e.get("legend")&&e.get("legend").type!=="none"}),n=t.length?!0:!1;if(!this.hasLayerSelector&&!e)return;if(!this.hasLayerSelector&&!n)return;if(this.layers.length==0)return;if(this.layers.length==1&&!n)return;this.$el.addClass("with-layers"),this.model.set("layer_count",0),this.hasSearch||this.$el.find(".aside .layer-container").prepend("<h3></h3>"),_.each(this.layers,this._renderLayer,this)},_renderLayer:function(e){var t=e.get("legend")&&e.get("legend").type!==""&&e.get("legend").type!=="none";if(!this.hasLayerSelector&&!t)return;if(!this.hasLayerSelector&&!e.get("visible"))return;var n=this.layers.length==1||!this.hasLayerSelector,r=!0;this.visibility_options&&this.visibility_options.legends!==undefined&&(r=this.visibility_options.legends);var i=new cdb.geo.ui.MobileLayer({model:e,show_legends:r,show_title:this.hasLayerSelector?!0:!1,hide_toggle:n});this.$el.find(".aside .layers").append(i.render().$el),i.bind("change_visibility",this._reInitScrollpane,this),this.model.set("layer_count",this.model.get("layer_count")+1)},_renderTorque:function(){this.options.torqueLayer&&(this.hasTorque=!0,this.slider=new cdb.geo.ui.TimeSlider({type:"time_slider",layer:this.options.torqueLayer,map:this.options.map,pos_margin:0,position:"none",width:"auto"}),this.slider.bind("time_clicked",function(){this.slider.toggleTime()},this),this.$el.find(".torque").append(this.slider.render().$el),this.$el.addClass("with-torque"))},render:function(){return this._bindOrientationChange(),this.$el.html(this.template(this.options)),this._renderOverlays(),this._addAttributions(),this.$header=this.$el.find(".cartodb-header"),this.$header.show(),this._getLayers(),this._renderLayers(),this._renderTorque(),this}}),cdb.geo.ui.TilesLoader=cdb.core.View.extend({className:"cartodb-tiles-loader",default_options:{animationSpeed:500},initialize:function(){_.defaults(this.options,this.default_options),this.isVisible=0,this.template=this.options.template?this.options.template:cdb.templates.getTemplate("geo/tiles_loader")},render:function(){return this.$el.html($(this.template(this.options))),this},show:function(e){if(this.isVisible)return;!$.browser.msie||$.browser.msie&&$.browser.version.indexOf("9.")!=0?this.$el.fadeTo(this.options.animationSpeed,1):this.$el.show(),this.isVisible++},hide:function(e){this.isVisible--;if(this.isVisible>0)return;this.isVisible=0,!$.browser.msie||$.browser.msie&&$.browser.version.indexOf("9.")==0?this.$el.stop(!0).fadeTo(this.options.animationSpeed,0):this.$el.hide()},visible:function(){return this.isVisible>0}}),cdb.geo.ui.InfoBox=cdb.core.View.extend({className:"cartodb-infobox",defaults:{pos_margin:20,position:"bottom|right",width:200},initialize:function(){var e=this;_.defaults(this.options,this.defaults),this.options.layer&&this.enable(),this.setTemplate(this.options.template||this.defaultTemplate,"mustache")},setTemplate:function(e){this.template=cdb.core.Template.compile(e,"mustache")},enable:function(){this.options.layer&&this.options.layer.on("featureOver",function(e,t,n,r){this.render(r).show()},this).on("featureOut",function(){this.hide()},this)},disable:function(){this.options.layer&&this.options.layer.off(null,null,this)},setPosition:function(e){var t={};e.indexOf("top")!==-1?t.top=this.options.pos_margin:e.indexOf("bottom")!==-1&&(t.bottom=this.options.pos_margin),e.indexOf("left")!==-1?t.left=this.options.pos_margin:e.indexOf("right")!==-1&&(t.right=this.options.pos_margin),this.$el.css(t)},render:function(e){return this.$el.html(this.template(e)),this.options.width&&this.$el.css("width",this.options.width),this.options.position&&this.setPosition(this.options.position),this}}),cdb.geo.ui.Tooltip=cdb.geo.ui.InfoBox.extend({defaultTemplate:"<p>{{text}}</p>",className:"cartodb-tooltip",defaults:{vertical_offset:0,horizontal_offset:0,position:"top|center"},initialize:function(){this.options.template=this.options.template||this.defaultTemplate,cdb.geo.ui.InfoBox.prototype.initialize.call(this),this._filter=null,this.showing=!1,this.showhideTimeout=null},setLayer:function(e){return this.options.layer=e,this},setFilter:function(e){return this._filter=e,this},setFields:function(e){return this.options.fields=e,this},setAlternativeNames:function(e){this.options.alternative_names=e},enable:function(){this.options.layer&&(this.options.layer.unbind(null,null,this),this.options.layer.on("mouseover",function(e,t,n,r){if(this.options.fields){var i=["fields","content"];this.options.omit_columns&&(i=i.concat(this.options.omit_columns));var s=cdb.geo.ui.InfowindowModel.contentForFields(r,this.options.fields,{empty_fields:this.options.empty_fields});r.content=_.omit(r,i),r.fields=s.fields;var o=this.options.alternative_names;if(o)for(var u=0;u<r.fields.length;++u){var a=r.fields[u];a.title=o[a.title]||a.title}}this.show(n,r),this.showing=!0},this).on("mouseout",function(){this.showing&&(this.hide(),this.showing=!1)},this),this.add_related_model(this.options.layer))},disable:function(){this.options.layer&&this.options.layer.unbind(null,null,this),this.hide(),this.showing=!1},_visibility:function(){var e=this;clearTimeout(this.showhideTimeout),this.showhideTimeout=setTimeout(e._showing?function(){e.$el.fadeIn(100)}:function(){e.$el.fadeOut(200)},50)},hide:function(){this._showing&&(this._showing=!1,this._visibility())},show:function(e,t){return this._filter&&!this._filter(t)?this:(this.render(t),this.setPosition(e),this._showing||(this._showing=!0,this._visibility()),this)},setPosition:function(e){var t={left:0,top:0},n=this.options.position,r=this.$el,i=r.innerHeight(),s=r.innerWidth();n.indexOf("top")!==-1?t.top=-i:n.indexOf("middle")!==-1&&(t.top=-(i/2)),n.indexOf("left")!==-1?t.left=-s:n.indexOf("center")!==-1&&(t.left=-(s/2)),t.top+=this.options.vertical_offset,t.left+=this.options.horizontal_offset,r.css({top:e.y+t.top,left:e.x+t.left})},render:function(e){return this.$el.html(this.template(e)),this}}),cdb.ui.common.FullScreen=cdb.core.View.extend({tagName:"div",className:"cartodb-fullscreen",events:{"click a":"_toggleFullScreen"},initialize:function(){_.bindAll(this,"render"),_.defaults(this.options,this.default_options),this._addWheelEvent()},_addWheelEvent:function(){var e=this,t=this.options.mapView;$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(){!document.fullscreenElement&&!document.webkitFullscreenElement&&!document.mozFullScreenElement&&!document.msFullscreenElement&&e.model.get("allowWheelOnFullscreen")&&t.options.map.set("scrollwheel",!1),t.invalidateSize()})},_toggleFullScreen:function(e){e.stopPropagation(),e.preventDefault();var t=window.document,n=t.documentElement;this.options.doc&&(n=$(this.options.doc)[0]);var r=n.requestFullscreen||n.mozRequestFullScreen||n.webkitRequestFullScreen,i=t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen,s=this.options.mapView;!t.fullscreenElement&&!t.mozFullScreenElement&&!t.webkitFullscreenElement?(r.call(n),s&&this.model.get("allowWheelOnFullscreen")&&s.options.map.set("scrollwheel",!0)):i.call(t)},render:function(){var e=this.$el,t=_.extend(this.options);return e.html(this.options.template(t)),this}}),Map.BASE_URL="/api/v1/map",Map.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",LayerDefinition.layerDefFromSubLayers=function(e){if(!e||e.length===undefined)throw new Error("sublayers should be an array");var t={version:"1.0.0",stat_tag:"API",layers:[]};for(var n=0;n<e.length;++n)t.layers.push({type:"cartodb",options:e[n]});return t},Map.prototype={isCORSSupported:function(){return"withCredentials"in new XMLHttpRequest},isBtoaSupported:function(){return typeof window["btoa"]=="function"},getLayerCount:function(){return this.layers.length},_encodeBase64Native:function(e){return btoa(e)},getLayerIndexByNumber:function(e){var t={},n=0;for(var r=0;r<this.layers.length;++r){var i=this.layers[r];t[r]=n,i.options&&!i.options.hidden&&++n}return t[e]},getLayerNumberByIndex:function(e){var t=[];for(var n=0;n<this.layers.length;++n){var r=this.layers[n];r.options&&!r.options.hidden&&t.push(n)}return e>=t.length?-1:+t[e]},visibleLayers:function(){var e=[];for(var t=0;t<this.layers.length;++t){var n=this.layers[t];n.options.hidden||e.push(n)}return e},_encodeBase64:function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n,r,i,s,o,u,a,f,l=0,c=0,h="",p=[];if(!e)return e;do n=e.charCodeAt(l++),r=e.charCodeAt(l++),i=e.charCodeAt(l++),f=n<<16|r<<8|i,s=f>>18&63,o=f>>12&63,u=f>>6&63,a=f&63,p[c++]=t.charAt(s)+t.charAt(o)+t.charAt(u)+t.charAt(a);while(l<e.length);h=p.join("");var d=e.length%3;return(d?h.slice(0,d-3):h)+"===".slice(d||3)},_array2hex:function(e){var t=[];for(var n=0;n<e.length;++n)t.push(String.fromCharCode(e[n]+128));return this.options.btoa(t.join(""))},getLayerToken:function(e){function n(e,n){var r;while(r=t._layerTokenQueue.pop())r(e,n)}var t=this;clearTimeout(this._timeout),this._queue.push(n),this._layerTokenQueue.push(e),this._timeout=setTimeout(function(){t._getLayerToken(n)},4)},_requestFinished:function(){var e=this;this._waiting=!1,this.lastTimeUpdated=(new Date).getTime(),clearTimeout(this._refreshTimer),this._refreshTimer=setTimeout(function(){e.invalidate()},this.options.refreshTime||72e5);if(this._queue.length){var t=this._queue[this._queue.length-1];this._getLayerToken(t)}},_requestPOST:function(e,t){var n=this,r=this.options.ajax,i=cartodb.core.Profiler.metric("cartodb-js.layergroup.post.time").start();r({crossOrigin:!0,type:"POST",method:"POST",dataType:"json",contentType:"application/json",url:this._tilerHost()+this.endPoint+(e.length?"?"+e.join("&"):""),data:JSON.stringify(this.toJSON()),success:function(e){i.end(),0===n._queue.length&&t(e),n._requestFinished()},error:function(e){i.end(),cartodb.core.Profiler.metric("cartodb-js.layergroup.post.error").inc();var r={errors:["unknow error"]};e.status===0&&(r={errors:["connection error"]});try{r=JSON.parse(e.responseText)}catch(s){}0===n._queue.length&&t(null,r),n._requestFinished()}})},_getCompressor:function(e){var t=this;return this.options.compressor?this.options.compressor:(e=e||JSON.stringify(this.toJSON()),!this.options.force_compress&&e.length<this.options.MAX_GET_SIZE?function(e,t,n){n("config="+encodeURIComponent(e))}:function(e,n,r){e=JSON.stringify({config:e}),LZMA.compress(e,n,function(e){r("lzma="+encodeURIComponent(t._array2hex(e)))})})},_requestGET:function(e,t){var n=this,r=this.options.ajax,i=JSON.stringify(this.toJSON()),s=this._getCompressor(i),o=n.JSONPendPoint||n.endPoint;s(i,3,function(i){e.push(i);var s=cartodb.core.Profiler.metric("cartodb-js.layergroup.get.time").start();r({dataType:"jsonp",url:n._tilerHost()+o+"?"+e.join("&"),jsonpCallback:n.options.instanciateCallback,cache:!!n.options.instanciateCallback,success:function(e){s.end(),0===n._queue.length&&(e.error?(cartodb.core.Profiler.metric("cartodb-js.layergroup.get.error").inc(),t(null,e.error)):t(e)),n._requestFinished()},error:function(e){s.end(),cartodb.core.Profiler.metric("cartodb-js.layergroup.get.error").inc();var r={errors:["unknow error"]};try{r=JSON.parse(xhr.responseText)}catch(i){}0===n._queue.length&&t(null,r),n._requestFinished()}})})},_getLayerToken:function(e){var t=this,n=[];e=e||function(){};if(this._waiting)return this;this._queue=[];if(!this.named_map&&this.visibleLayers().length===0){e(null);return}var r=this.options.extra_params||{},i=this.options.map_key||this.options.api_key||r.map_key||r.api_key;i&&n.push("map_key="+i);if(r.auth_token)if(_.isArray(r.auth_token))for(var s=0,o=r.auth_token.length;s<o;s++)n.push("auth_token[]="+r.auth_token[s]);else n.push("auth_token="+r.auth_token);this.stat_tag&&n.push("stat_tag="+this.stat_tag),this._waiting=!0;var u=null;return this._usePOST()?u=this._requestPOST:u=this._requestGET,u.call(this,n,e),this},_usePOST:function(){if(this.options.cors){if(this.options.force_cors)return!0;var e=JSON.stringify(this.toJSON());if(e.length<this.options.MAX_GET_SIZE)return!1}return!1},getLayer:function(e){return _.clone(this.layers[e])},invalidate:function(){this.layerToken=null,this.urls=null,this.onLayerDefinitionUpdated()},setLayer:function(e,t){if(e<this.getLayerCount()&&e>=0){if(t.options.hidden){var n=this.interactionEnabled[e];n&&(t.interaction=!0,this.setInteraction(e,!1))}else this.layers[e].interaction&&(this.setInteraction(e,!0),delete this.layers[e].interaction);this.layers[e]=_.clone(t)}return this.invalidate(),this},getTiles:function(e){var t=this;return t.layerToken?(e&&e(t._layerGroupTiles(t.layerToken,t.options.extra_params)),this):(this.getLayerToken(function(n,r){if(n){t.layerToken=n.layergroupid;if(n.cdn_url){var i=t.options.cdn_url=t.options.cdn_url||{};i.http=n.cdn_url.http||i.http,i.https=n.cdn_url.https||i.https}t.urls=t._layerGroupTiles(n.layergroupid,t.options.extra_params),e&&e(t.urls)}else{if(t.visibleLayers().length===0){e&&e({tiles:[Map.EMPTY_GIF],grids:[]});return}e&&e(null,r)}}),this)},isHttps:function(){return this.options.tiler_protocol==="https"},_layerGroupTiles:function(e,t){var n=this.options.subdomains||["0","1","2","3"];this.isHttps()&&(n=[null]);var r="/{z}/{x}/{y}",i=[],s=[],o=this._encodeParams(t,this.options.pngParams);for(var u=0;u<n.length;++u){var a=n[u],f=this._host(a)+Map.BASE_URL+"/"+e;s.push(f+r+".png"+(o?"?"+o:""));var l=this._encodeParams(t,this.options.gridParams);for(var c=0;c<this.layers.length;++c)i[c]=i[c]||[],i[c].push(f+"/"+c+r+".grid.json"+(l?"?"+l:""))}return{tiles:s,grids:i}},_cleanInteractivity:function(e){if(!e)return;typeof e=="string"&&(e=e.split(","));for(var t=0;t<e.length;++t)e[t]=e[t].replace(/ /g,"");return e},onLayerDefinitionUpdated:function(){},setSilent:function(e){this.silent=e},_definitionUpdated:function(){if(this.silent)return;this.invalidate()},_tileJSONfromTiles:function(e,t,n){function i(e){var t=[];for(var n=0;n<e.length;++n)t.push(e[n].replace("{s}",r[n%r.length]));return t}n=n||{};var r=n.subdomains||["0","1","2","3"];return{tilejson:"2.0.0",scheme:"xyz",grids:i(t.grids[e]),tiles:i(t.tiles),formatter:function(e,t){return t}}},getTileJSON:function(e,t){e=e==undefined?0:e;var n=this;this.getTiles(function(r){if(!r){t(null);return}t&&t(n._tileJSONfromTiles(e,r))})},_encodeParams:function(e,t){if(!e)return"";var n=[];t=t||_.keys(e);for(var r in t){var i=t[r],s=e[i];if(s)if(_.isArray(s))for(var o=0,u=s.length;o<u;o++)n.push(i+"[]="+encodeURIComponent(s[o]));else{var a=encodeURIComponent(s);a=a.replace(/%7Bx%7D/g,"{x}").replace(/%7By%7D/g,"{y}").replace(/%7Bz%7D/g,"{z}"),n.push(i+"="+a)}}return n.join("&")},_tilerHost:function(){var e=this.options;return e.tiler_protocol+"://"+(e.user_name?e.user_name+".":"")+e.tiler_domain+(e.tiler_port!=""?":"+e.tiler_port:"")},_host:function(e){var t=this.options;if(t.no_cdn)return this._tilerHost();var n=t.tiler_protocol+"://";e&&(n+=e+".");var r=t.cdn_url||cdb.CDB_HOST;if(!r.http&&!r.https)throw new Error("cdn_host should contain http and/or https entries");return n+=r[t.tiler_protocol]+"/"+t.user_name,n},getTooltipData:function(e){return this.layers[e].tooltip},getInfowindowData:function(e){var t,n=this.layers[e].infowindow;return!n&&this.options.layer_definition&&(t=this.options.layer_definition.layers[e])&&(n=t.infowindow),n&&n.fields&&n.fields.length>0?n:null},containInfowindow:function(){var e=this.options.layer_definition.layers;for(var t=0;t<e.length;++t){var n=e[t].infowindow;if(n&&n.fields&&n.fields.length>0)return!0}return!1},containTooltip:function(){var e=this.options.layer_definition.layers;for(var t=0;t<e.length;++t){var n=e[t].tooltip;if(n&&n.fields&&n.fields.length)return!0}return!1},getSubLayer:function(e){var t=this.layers[e];return t.sub=t.sub||new SubLayer(this,e),t.sub},getSubLayerCount:function(){return this.getLayerCount()},getSubLayers:function(){var e=[];for(var t=0;t<this.getSubLayerCount();++t)e.push(this.getSubLayer(t));return e}},NamedMap.prototype=_.extend({},Map.prototype,{setAuthToken:function(e){if(!this.isHttps())throw new Error("https must be used when auth_token is set");return this.options.extra_params=this.options.extra_params||{},this.options.extra_params.auth_token=e,this.invalidate(),this},setParams:function(e,t){var n;arguments.length===2?(n={},n[e]=t):n=e,this.named_map.params||(this.named_map.params={});for(var r in n)n[r]===undefined||n[r]===null?delete this.named_map.params[r]:this.named_map.params[r]=n[r];return this.invalidate(),this},toJSON:function(){var e=this.named_map.params||{};for(var t=0;t<this.layers.length;++t){var n=this.layers[t];e["layer"+t]=n.options.hidden?0:1}return e},containInfowindow:function(){var e=this.layers||[];for(var t=0;t<e.length;++t){var n=e[t].infowindow;if(n&&n.fields&&n.fields.length>0)return!0}return!1},containTooltip:function(){var e=this.layers||[];for(var t=0;t<e.length;++t){var n=e[t].tooltip;if(n)return!0}return!1},_attributesUrl:function(e,t){var n=[this._tilerHost(),Map.BASE_URL.slice(1),this.layerToken,e,"attributes",t].join("/"),r=this.options.extra_params||{},i=r.auth_token;if(i)if(_.isArray(i)){var s=[];for(var o=0,u=i.length;o<u;o++)s.push("auth_token[]="+i[o]);n+="?"+s.join("&")}else n+="?auth_token="+i;return n},fetchAttributes:function(e,t,n,r){var i=this.options.ajax,s=cartodb.core.Profiler.metric("cartodb-js.named_map.attributes.time").start();i({dataType:"jsonp",url:this._attributesUrl(e,t),jsonpCallback:"_cdbi_layer_attributes",cache:!0,success:function(e){s.end(),r(e)},error:function(e){s.end(),cartodb.core.Profiler.metric("cartodb-js.named_map.attributes.error").inc(),r(null)}})},setSQL:function(e){throw new Error("SQL is read-only in NamedMaps")},setCartoCSS:function(e){throw new Error("cartocss is read-only in NamedMaps")},getCartoCSS:function(){throw new Error("cartocss can't be accessed in NamedMaps")},getSQL:function(){throw new Error("SQL can't be accessed in NamedMaps")},setLayer:function(e,t){var n={sql:1,cartocss:1,interactivity:1};for(var r in t.options)if(r in n)throw delete t.options[r],new Error(r+" is read-only in NamedMaps");return Map.prototype.setLayer.call(this,e,t)},removeLayer:function(e){throw new Error("sublayers are read-only in Named Maps")},createSubLayer:function(e,t){throw new Error("sublayers are read-only in Named Maps")},addLayer:function(e,t){throw new Error("sublayers are read-only in Named Maps")},getLayerIndexByNumber:function(e){return+e}}),LayerDefinition.prototype=_.extend({},Map.prototype,{setLayerDefinition:function(e,t){t=t||{},this.version=e.version||"1.0.0",this.stat_tag=e.stat_tag,this.layers=_.clone(e.layers),t.silent||this._definitionUpdated()},toJSON:function(){var e={};e.version=this.version,this.stat_tag&&(e.stat_tag=this.stat_tag),e.layers=[];var t=this.visibleLayers();for(var n=0;n<t.length;++n){var r=t[n];e.layers.push({type:"cartodb",options:{sql:r.options.sql,cartocss:r.options.cartocss,cartocss_version:r.options.cartocss_version||"2.1.0",interactivity:this._cleanInteractivity(r.options.interactivity)}})}return e},removeLayer:function(e){return e<this.getLayerCount()&&e>=0&&(this.layers.splice(e,1),this.interactionEnabled.splice(e,1),this._reorderSubLayers(),this.invalidate()),this},_reorderSubLayers:function(){for(var e=0;e<this.layers.length;++e){var t=this.layers[e];t.sub&&t.sub._setPosition(e)}},addLayer:function(e,t){t=t===undefined?this.getLayerCount():t;if(t<=this.getLayerCount()&&t>=0){if(!e.sql||!e.cartocss)throw new Error("layer definition should contain at least a sql and a cartocss");this.layers.splice(t,0,{type:"cartodb",options:e}),this._definitionUpdated()}return this},setInteractivity:function(e,t){t===undefined&&(t=e,e=0);if(e>=this.getLayerCount()&&e<0)throw new Error("layer does not exist");typeof t=="string"&&(t=t.split(","));for(var n=0;n<t.length;++n)t[n]=t[n].replace(/ /g,"");return this.layers[e].options.interactivity=t,this._definitionUpdated(),this},setQuery:function(e,t){t===undefined&&(t=e,e=0),this.layers[e].options.sql=t,this._definitionUpdated()},getQuery:function(e){return e=e||0,this.layers[e].options.sql},setCartoCSS:function(e,t,n){n===undefined&&(n=t,t=e,e=0),n=n||cartodb.CARTOCSS_DEFAULT_VERSION,this.layers[e].options.cartocss=t,this.layers[e].options.cartocss_version=n,this._definitionUpdated()},createSubLayer:function(e,t){return this.addLayer(e),this.getSubLayer(this.getLayerCount()-1)},_getSqlApi:function(e){e=e||{};var t=e.sql_api_port,n=e.sql_api_domain+(t?":"+t:""),r=e.sql_api_protocol,i="v1";n.indexOf("cartodb.com")!==-1&&(n="cartodb.com",i="v2");var s=new cartodb.SQL({user:e.user_name,protocol:r,host:n,version:i});return s},fetchAttributes:function(e,t,n,r){var i=this.getLayer(e),s=this._getSqlApi(this.options);n=_.map(n,function(e){return'"'+e+'"'}).join(",");var o=cartodb.core.Profiler.metric("cartodb-js.layergroup.attributes.time").start();s.execute("select {{{ fields }}} from ({{{ sql }}}) as _cartodbjs_alias where cartodb_id = {{{ cartodb_id }}}",{fields:n,cartodb_id:t,sql:i.options.sql},{cache:!0,jsonpCallback:"_cdbi_layer_attributes",jsonp:!0}).done(function(e){o.end();if(e.rows.length===0){r(null);return}r(e.rows[0])}).error(function(){o.end(),cartodb.core.Profiler.metric("cartodb-js.layergroup.attributes.error").inc(),r(null)})}}),SubLayer.prototype={remove:function(){this._check(),this._parent.removeLayer(this._position),this._unbindInteraction(),this._added=!1},show:function(){this.get("hidden")&&this.set({hidden:!1})},hide:function(){this.get("hidden")||this.set({hidden:!0})},setSQL:function(e){return this.set({sql:e})},setCartoCSS:function(e){return this.set({cartocss:e})},setInteractivity:function(e){return this.set({interactivity:e})},getSQL:function(){return this.get("sql")},getCartoCSS:function(){return this.get("cartocss")},setInteraction:function(e){this._parent.setInteraction(this._position,e)},get:function(e){this._check();var t=this._parent.getLayer(this._position);return t.options[e]},set:function(e){this._check();var t=this._parent.getLayer(this._position),n=t.options;for(var r in e)n[r]=e[r];return this._parent.setLayer(this._position,t),this},unset:function(e){var t=this._parent.getLayer(this._position);delete t.options[e],this._parent.setLayer(this._position,t)},_check:function(){if(!this._added)throw"sublayer was removed"},_unbindInteraction:function(){if(!this._parent.off)return;this._parent.off(null,null,this)},_bindInteraction:function(){if(!this._parent.on)return;var e=this,t=function(t,n){n=n||t,e._parent.on(t,function(){var t=Array.prototype.slice.call(arguments);parseInt(t[t.length-1],10)==e._position&&e.trigger.apply(e,[n].concat(t))},e)};t("featureOver"),t("featureOut"),t("featureClick"),t("layermouseover","mouseover"),t("layermouseout","mouseout")},_setPosition:function(e){this._position=e}},_.extend(SubLayer.prototype,Backbone.Events),cartodb._makeCRCTable=function(){var e,t=[];for(var n=0;n<256;++n){e=n;for(var r=0;r<8;++r)e=e&1?3988292384^e>>>1:e>>>1;t[n]=e}return t},cartodb.crc32=function(e){var t=cartodb._crcTable||(cartodb._crcTable=cartodb._makeCRCTable()),n=-1;for(var r=0,i=e.length;r<i;++r)n=n>>>8^t[(n^e.charCodeAt(r))&255];return(n^-1)>>>0},cartodb.uniqueCallbackName=function(e){return cartodb._callback_c=cartodb._callback_c||0,++cartodb._callback_c,cartodb.crc32(e)+"_"+cartodb._callback_c},CartoDBLayerCommon.prototype={show:function(){this.setOpacity(this.options.previous_opacity===undefined?.99:this.options.previous_opacity),delete this.options.previous_opacity,this._interactionDisabled=!1},hide:function(){this.options.previous_opacity==undefined&&(this.options.previous_opacity=this.options.opacity),this.setOpacity(0),this._interactionDisabled=!0},isVisible:function(){return this.visible},setInteraction:function(e,t){t==undefined&&(t=e,e=0);var n;this.interactionEnabled[e]=t;if(!t)n=this.interaction[e],n&&(n.remove(),this.interaction[e]=null);else if(this.urls){var r=this.getLayerIndexByNumber(+e),i=this._tileJSONfromTiles(r,this.urls);n=this.interaction[e],n&&n.remove();var s=this;this.interaction[e]=this.interactionClass().map(this.options.map).tilejson(i).on("on",function(t){if(s._interactionDisabled)return;t.layer=+e,s._manageOnEvents(s.options.map,t)}).on("off",function(t){if(s._interactionDisabled)return;t=t||{},t.layer=+e,s._manageOffEvents(s.options.map,t)})}return this},setOptions:function(e){if(typeof e!="object"||e.length)throw new Error(e+" options must be an object");_.extend(this.options,e);var e=this.options;this.options.query=this.options.query||"select * from "+this.options.table_name,this.options.query_wrapper&&(this.options.query=_.template(this.options.query_wrapper)({sql:this.options.query})),this.setSilent(!0),e.interaction&&this.setInteraction(e.interaction),e.opacity&&this.setOpacity(e.opacity),e.query&&this.setQuery(e.query.replace(/\{\{table_name\}\}/g,this.options.table_name)),e.tile_style&&this.setCartoCSS(e.tile_style.replace(new RegExp(e.table_name,"g"),"layer0")),e.cartocss&&this.setCartoCSS(e.cartocss),e.interactivity&&this.setInteractivity(e.interactivity),e.visible?this.show():this.hide(),this.setSilent(!1),this._definitionUpdated()},_getLayerDefinition:function(){var e={},t=this.options,n,r,i;n=t.query||"select * from "+t.table_name,t.query_wrapper&&(n=_.template(t.query_wrapper)({sql:n})),r=t.tile_style,i=t.cartocss_version||"2.1.0";for(var s in t.extra_params){var o=t.extra_params[s];e[s]=o.replace?o.replace(/\{\{table_name\}\}/g,t.table_name):o}return n=n.replace(/\{\{table_name\}\}/g,t.table_name),r=r.replace(/\{\{table_name\}\}/g,t.table_name),r=r.replace(new RegExp(t.table_name,"g"),"layer0"),{sql:n,cartocss:r,cartocss_version:i,params:e,interactivity:t.interactivity}},error:function(e){},tilesOk:function(){},_clearInteraction:function(){for(var e in this.interactionEnabled)this.interactionEnabled.hasOwnProperty(e)&&this.interactionEnabled[e]&&this.setInteraction(e,!1)},_reloadInteraction:function(){for(var e in this.interactionEnabled)this.interactionEnabled.hasOwnProperty(e)&&this.interactionEnabled[e]&&(this.setInteraction(e,!1),this.setInteraction(e,!0))},_checkTiles:function(){var e={z:4,x:6,y:6},t=this,n=new Image,r=this._tileJSON();getTiles(function(n){var r=n.tiles[0].replace(/\{z\}/g,e.z).replace(/\{x\}/g,e.x).replace(/\{y\}/g,e.y);this.options.ajax({method:"get",url:r,crossDomain:!0,success:function(){t.tilesOk(),clearTimeout(i)},error:function(e,n,r){clearTimeout(i),t.error(e.responseText&&JSON.parse(e.responseText))}})});var i=setTimeout(function(){clearTimeout(i),t.error("tile timeout")},3e4)}},cdb.geo.common={},cdb.geo.common.CartoDBLogo={isWadusAdded:function(e,t){var n=[],r=new RegExp("\\b"+t+"\\b"),i=e.getElementsByTagName("*");for(var s=0,o=i.length;s<o;s++)r.test(i[s].className)&&n.push(i[s]);return n.length>0},isRetinaBrowser:function(){return"devicePixelRatio"in window&&window.devicePixelRatio>1||"matchMedia"in window&&window.matchMedia("(min-resolution:144dpi)")&&window.matchMedia("(min-resolution:144dpi)").matches},addWadus:function(e,t,n){var r=this;setTimeout(function(){if(!r.isWadusAdded(n,"cartodb-logo")){var t=document.createElement("div"),i=r.isRetinaBrowser();t.setAttribute("class","cartodb-logo"),t.setAttribute("style","position:absolute; bottom:0; left:0; display:block; border:none; z-index:1000000;");var s=location.protocol.indexOf("https")===-1?"http":"https",o=cdb.config.get("cartodb_logo_link");t.innerHTML="<a href='"+o+"' target='_blank'><img width='71' height='29' src='"+s+"://cartodb.s3.amazonaws.com/static/new_logo"+(i?"@2x":"")+".png' style='position:absolute; bottom:"+(e.bottom||0)+"px; left:"+(e.left||0)+"px; display:block; width:71px!important; height:29px!important; border:none; outline:none;' alt='CartoDB' title='CartoDB' />",n.appendChild(t)}},t||0)}},function(){var e=function(e,t,n){this.leafletLayer=t,this.leafletMap=n,this.model=e,this.model.bind("change",this._modelUpdated,this),this.type=e.get("type")||e.get("kind"),this.type=this.type.toLowerCase()};_.extend(e.prototype,Backbone.Events),_.extend(e.prototype,{remove:function(){this.leafletMap.removeLayer(this.leafletLayer),this.model.unbind(null,null,this),this.unbind()},reload:function(){this.leafletLayer.redraw()}}),cdb.geo.LeafLetLayerView=e}(),function(){if(typeof L=="undefined")return;var e=L.Class.extend({includes:L.Mixin.Events,initialize:function(e,t){cdb.geo.LeafLetLayerView.call(this,e,this,t)},onAdd:function(){this.redraw()},onRemove:function(){var e=this.leafletMap.getContainer();e.style.background="none"},_modelUpdated:function(){this.redraw()},redraw:function(){var e=this.leafletMap.getContainer();e.style.backgroundColor=this.model.get("color")||"#FFF";if(this.model.get("image")){var t="transparent url("+this.model.get("image")+") repeat center center";e.style.background=t}}});_.extend(e.prototype,cdb.geo.LeafLetLayerView.prototype),cdb.geo.LeafLetPlainLayerView=e}(),function(){if(typeof L=="undefined")return;var e=L.TileLayer.extend({initialize:function(e,t){L.TileLayer.prototype.initialize.call(this,e.get("urlTemplate"),{tms:e.get("tms"),attribution:e.get("attribution"),minZoom:e.get("minZomm"),maxZoom:e.get("maxZoom"),subdomains:e.get("subdomains")||"abc",errorTileUrl:e.get("errorTileUrl"),opacity:e.get("opacity")}),cdb.geo.LeafLetLayerView.call(this,e,this,t)}});_.extend(e.prototype,cdb.geo.LeafLetLayerView.prototype,{_modelUpdated:function(){_.defaults(this.leafletLayer.options,_.clone(this.model.attributes)),this.leafletLayer.options.subdomains=this.model.get("subdomains")||"abc",this.leafletLayer.options.attribution=this.model.get("attribution"),this.leafletLayer.options.maxZoom=this.model.get("maxZoom"),this.leafletLayer.options.minZoom=this.model.get("minZoom"),this.leafletLayer.setUrl(this.model.get("urlTemplate"))}}),cdb.geo.LeafLetTiledLayerView=e}(),function(){if(typeof L=="undefined")return;var e=L.TileLayer.WMS.extend({initialize:function(e,t){L.TileLayer.WMS.prototype.initialize.call(this,e.get("urlTemplate"),{attribution:e.get("attribution"),layers:e.get("layers"),format:e.get("format"),transparent:e.get("transparent"),minZoom:e.get("minZomm"),maxZoom:e.get("maxZoom"),subdomains:e.get("subdomains")||"abc",errorTileUrl:e.get("errorTileUrl"),opacity:e.get("opacity")}),cdb.geo.LeafLetLayerView.call(this,e,this,t)}});_.extend(e.prototype,cdb.geo.LeafLetLayerView.prototype,{_modelUpdated:function(){_.defaults(this.leafletLayer.options,_.clone(this.model.attributes)),this.leafletLayer.setUrl(this.model.get("urlTemplate"))}}),cdb.geo.LeafLetWMSLayerView=e}(),function(){function e(e){var t=e.extend({includes:[cdb.geo.LeafLetLayerView.prototype,Backbone.Events],initialize:function(t,n){var r=this,i=[];t.attributes.attribution=cdb.config.get("cartodb_attributions");var s=_.clone(t.attributes);s.map=n;var o=s.featureOver,u=s.featureOut,a=s.featureClick,f,l=-1;s.featureOver=function(e,t,n,s,u){i[u]||r.trigger("layerenter",e,t,n,s,u),i[u]=1,o&&o.apply(this,arguments),r.featureOver&&r.featureOver.apply(r,arguments),e.timeStamp===f&&clearTimeout(l),l=setTimeout(function(){r.trigger("mouseover",e,t,n,s,u),r.trigger("layermouseover",e,t,n,s,u)},0),f=e.timeStamp},s.featureOut=function(e,t){i[t]&&r.trigger("layermouseout",t),i[t]=0,_.any(i)||r.trigger("mouseout"),u&&u.apply(this,arguments),r.featureOut&&r.featureOut.apply(r,arguments)},s.featureClick=_.debounce(function(){a&&a.apply(r,arguments),r.featureClick&&r.featureClick.apply(r,arguments)},10),e.prototype.initialize.call(this,s),cdb.geo.LeafLetLayerView.call(this,t,this,n)},featureOver:function(e,t,n,r,i){this.trigger("featureOver",e,[t.lat,t.lng],n,r,i)},featureOut:function(e,t){this.trigger("featureOut",e,t)},featureClick:function(e,t,n,r,i){this.trigger("featureClick",e,[t.lat,t.lng],n,r,i)},error:function(e){this.trigger("error",e?e.errors:"unknown error"),this.model.trigger("error",e?e.errors:"unknown error")},ok:function(e){this.model.trigger("tileOk")},onLayerDefinitionUpdated:function(){this.__update()}});return t}if(typeof L=="undefined")return;
L.CartoDBGroupLayerBase=L.TileLayer.extend({interactionClass:wax.leaf.interaction,includes:[cdb.geo.LeafLetLayerView.prototype,CartoDBLayerCommon.prototype],options:{opacity:.99,attribution:"CartoDB",debug:!1,visible:!0,added:!1,tiler_domain:"cartodb.com",tiler_port:"80",tiler_protocol:"http",sql_api_domain:"cartodb.com",sql_api_port:"80",sql_api_protocol:"http",maxZoom:30,extra_params:{},cdn_url:null,subdomains:null},initialize:function(e){e=e||{},L.Util.setOptions(this,e);if(!e.layer_definition&&!e.sublayers)throw new Error("cartodb-leaflet needs at least the layer_definition or sublayer list");e.layer_definition||(this.options.layer_definition=LayerDefinition.layerDefFromSubLayers(e.sublayers)),LayerDefinition.call(this,this.options.layer_definition,this.options),this.fire=this.trigger,CartoDBLayerCommon.call(this),L.TileLayer.prototype.initialize.call(this),this.interaction=[],this.addProfiling()},addProfiling:function(){this.bind("tileloadstart",function(e){var t=this.tileStats||(this.tileStats={});t[e.tile.src]=cartodb.core.Profiler.metric("cartodb-js.tile.png.load.time").start()});var e=function(e){var t=this.tileStats&&this.tileStats[e.tile.src];t&&t.end()};this.bind("tileload",e),this.bind("tileerror",function(t){cartodb.core.Profiler.metric("cartodb-js.tile.png.error").inc(),e(t)})},getTileUrl:function(e){var t="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";this._adjustTilePoint(e);var n=[t];this.tilejson&&(n=this.tilejson.tiles);var r=(e.x+e.y)%n.length;return L.Util.template(n[r],L.Util.extend({z:this._getZoomForUrl(),x:e.x,y:e.y},this.options))},setOpacity:function(e){if(isNaN(e)||e>1||e<0)throw new Error(e+" is not a valid value");this.options.opacity=Math.min(e,.99),this.options.visible&&(L.TileLayer.prototype.setOpacity.call(this,this.options.opacity),this.fire("updated"))},onAdd:function(e){var t=this;this.options.map=e,this.options.cartodb_logo!=0&&cdb.geo.common.CartoDBLogo.addWadus({left:8,bottom:8},0,e._container),this.__update(function(){var n=L.stamp(t);if(!e._layers[n])return;L.TileLayer.prototype.onAdd.call(t,e),t.fire("added"),t.options.added=!0})},onRemove:function(e){this.options.added&&(this.options.added=!1,L.TileLayer.prototype.onRemove.call(this,e))},__update:function(e){var t=this;this.fire("updated"),this.fire("loading");var n=this.options.map;this.getTiles(function(n,r){n?(t.tilejson=n,t.setUrl(t.tilejson.tiles[0]),t._reloadInteraction(),t.ok&&t.ok(),e&&e()):(t.error&&t.error(r),e&&e())})},_checkLayer:function(){if(!this.options.added)throw new Error("the layer is not still added to the map")},setAttribution:function(e){this._checkLayer(),this.map.attributionControl.removeAttribution(this.options.attribution),this.options.attribution=e,this.map.attributionControl.addAttribution(this.options.attribution),this.options.attribution=this.options.attribution,this.tilejson.attribution=this.options.attribution,this.fire("updated")},_manageOnEvents:function(e,t){var n=this._findPos(e,t),r=e.layerPointToLatLng(n),i=t.e.type.toLowerCase(),s=e.layerPointToContainerPoint(n);switch(i){case"mousemove":if(this.options.featureOver)return this.options.featureOver(t.e,r,s,t.data,t.layer);break;case"click":case"touchend":case"mspointerup":this.options.featureClick&&this.options.featureClick(t.e,r,s,t.data,t.layer);break;default:}},_manageOffEvents:function(e,t){if(this.options.featureOut)return this.options.featureOut&&this.options.featureOut(t.e,t.layer)},_findPos:function(e,t){var n=0,r=0,i=e.getContainer(),s,o;t.e.changedTouches&&t.e.changedTouches.length>0?(s=t.e.changedTouches[0].clientX+window.scrollX,o=t.e.changedTouches[0].clientY+window.scrollY):(s=t.e.clientX,o=t.e.clientY);if(i.offsetParent){do n+=i.offsetLeft,r+=i.offsetTop;while(i=i.offsetParent);return e.containerPointToLayerPoint(new L.Point(s-n,o-r))}var u=i.getBoundingClientRect(),a=new L.Point(t.e.clientX-u.left-i.clientLeft-window.scrollX,t.e.clientY-u.top-i.clientTop-window.scrollY);return e.containerPointToLayerPoint(a)}}),L.CartoDBGroupLayer=L.CartoDBGroupLayerBase.extend({includes:[LayerDefinition.prototype]}),L.NamedMap=L.CartoDBGroupLayerBase.extend({includes:[cdb.geo.LeafLetLayerView.prototype,NamedMap.prototype,CartoDBLayerCommon.prototype],initialize:function(e){e=e||{},L.Util.setOptions(this,e);if(!e.named_map&&!e.sublayers)throw new Error("cartodb-leaflet needs at least the named_map");NamedMap.call(this,this.options.named_map,this.options),this.fire=this.trigger,CartoDBLayerCommon.call(this),L.TileLayer.prototype.initialize.call(this),this.interaction=[],this.addProfiling()}}),cdb.geo.LeafLetCartoDBLayerGroupView=e(L.CartoDBGroupLayer),cdb.geo.LeafLetCartoDBNamedMapView=e(L.NamedMap)}(),function(){if(typeof L=="undefined")return;L.CartoDBLayer=L.CartoDBGroupLayer.extend({options:{query:"SELECT * FROM {{table_name}}",opacity:.99,attribution:"CartoDB",debug:!1,visible:!0,added:!1,extra_params:{},layer_definition_version:"1.0.0"},initialize:function(e){L.Util.setOptions(this,e);if(!e.table_name||!e.user_name||!e.tile_style)throw"cartodb-leaflet needs at least a CartoDB table name, user_name and tile_style";L.CartoDBGroupLayer.prototype.initialize.call(this,{layer_definition:{version:this.options.layer_definition_version,layers:[{type:"cartodb",options:this._getLayerDefinition(),infowindow:this.options.infowindow}]}}),this.setOptions(this.options)},setQuery:function(e,t){t===undefined&&(t=e,e=0),t=t||"select * from "+this.options.table_name,LayerDefinition.prototype.setQuery.call(this,e,t)},isVisible:function(){return this.visible},isAdded:function(){return this.options.added}});var e=L.CartoDBLayer.extend({initialize:function(e,t){var n=this;_.bindAll(this,"featureOut","featureOver","featureClick"),e.attributes.attribution=cdb.config.get("cartodb_attributions");var r=_.clone(e.attributes);r.map=t;var i=r.featureOver,s=r.featureOut,o=r.featureClick;r.featureOver=function(){i&&i.apply(this,arguments),n.featureOver&&n.featureOver.apply(this,arguments)},r.featureOut=function(){s&&s.apply(this,arguments),n.featureOut&&n.featureOut.apply(this,arguments)},r.featureClick=function(){o&&o.apply(this,arguments),n.featureClick&&n.featureClick.apply(r,arguments)},e.bind("change:visible",function(){n.model.get("visible")?n.show():n.hide()},this),L.CartoDBLayer.prototype.initialize.call(this,r),cdb.geo.LeafLetLayerView.call(this,e,this,t)},_modelUpdated:function(){var e=_.clone(this.model.attributes);this.leafletLayer.setOptions(e)},featureOver:function(e,t,n,r){this.trigger("featureOver",e,[t.lat,t.lng],n,r,0)},featureOut:function(e){this.trigger("featureOut",e,0)},featureClick:function(e,t,n,r){this.trigger("featureClick",e,[t.lat,t.lng],n,r,0)},reload:function(){this.model.invalidate()},error:function(e){this.trigger("error",e?e.error:"unknown error"),this.model.trigger("tileError",e?e.error:"unknown error")},tilesOk:function(e){this.model.trigger("tileOk")},includes:[cdb.geo.LeafLetLayerView.prototype,Backbone.Events]});cdb.geo.LeafLetLayerCartoDBView=e}(),function(){if(typeof L=="undefined")return;cdb.geo.LeafletMapView=cdb.geo.MapView.extend({initialize:function(){_.bindAll(this,"_addLayer","_removeLayer","_setZoom","_setCenter","_setView"),cdb.geo.MapView.prototype.initialize.call(this);var e=this,t=this.map.get("center"),n={zoomControl:!1,center:new L.LatLng(t[0],t[1]),zoom:this.map.get("zoom"),minZoom:this.map.get("minZoom"),maxZoom:this.map.get("maxZoom")};this.map.get("bounding_box_ne");if(!this.options.map_object)this.map_leaflet=new L.Map(this.el,n),this.map_leaflet.attributionControl.setPrefix(""),this.map.get("scrollwheel")==0&&this.map_leaflet.scrollWheelZoom.disable();else{this.map_leaflet=this.options.map_object,this.setElement(this.map_leaflet.getContainer());var r=e.map_leaflet.getCenter();e._setModelProperty({center:[r.lat,r.lng]}),e._setModelProperty({zoom:e.map_leaflet.getZoom()}),e.map.unset("view_bounds_sw",{silent:!0}),e.map.unset("view_bounds_ne",{silent:!0})}this.map.bind("set_view",this._setView,this),this.map.layers.bind("add",this._addLayer,this),this.map.layers.bind("remove",this._removeLayer,this),this.map.layers.bind("reset",this._addLayers,this),this.map.layers.bind("change:type",this._swicthLayerView,this),this.map.geometries.bind("add",this._addGeometry,this),this.map.geometries.bind("remove",this._removeGeometry,this),this._bindModel(),this._addLayers(),this.map_leaflet.on("layeradd",function(t){this.trigger("layeradd",t,e)},this),this.map_leaflet.on("zoomstart",function(){e.trigger("zoomstart")}),this.map_leaflet.on("click",function(t){e.trigger("click",t.originalEvent,[t.latlng.lat,t.latlng.lng])}),this.map_leaflet.on("dblclick",function(t){e.trigger("dblclick",t.originalEvent)}),this.map_leaflet.on("zoomend",function(){e._setModelProperty({zoom:e.map_leaflet.getZoom()}),e.trigger("zoomend")},this),this.map_leaflet.on("move",function(){var t=e.map_leaflet.getCenter();e._setModelProperty({center:[t.lat,t.lng]})}),this.map_leaflet.on("drag",function(){var t=e.map_leaflet.getCenter();e._setModelProperty({center:[t.lat,t.lng]}),e.trigger("drag")},this),this.map.bind("change:maxZoom",function(){L.Util.setOptions(e.map_leaflet,{maxZoom:e.map.get("maxZoom")})},this),this.map.bind("change:minZoom",function(){L.Util.setOptions(e.map_leaflet,{minZoom:e.map.get("minZoom")})},this),this.trigger("ready");var i=this.map.getViewBounds();i&&this.showBounds(i)},clean:function(){L.DomEvent.off(window,"resize",this.map_leaflet._onResize,this.map_leaflet);for(var e in this.layers){var t=this.layers[e];t.remove(),delete this.layers[e]}cdb.core.View.prototype.clean.call(this)},_setScrollWheel:function(e,t){t?this.map_leaflet.scrollWheelZoom.enable():this.map_leaflet.scrollWheelZoom.disable()},_setZoom:function(e,t){this._setView()},_setCenter:function(e,t){this._setView()},_setView:function(){this.map_leaflet.setView(this.map.get("center"),this.map.get("zoom")||0)},_addGeomToMap:function(e){var t=cdb.geo.LeafletMapView.createGeometry(e);return t.geom.addTo(this.map_leaflet),t},_removeGeomFromMap:function(e){this.map_leaflet.removeLayer(e.geom)},createLayer:function(e){return cdb.geo.LeafletMapView.createLayer(e,this.map_leaflet)},_addLayer:function(e,t,n){var r=this,i,s;s=cdb.geo.LeafletMapView.createLayer(e,this.map_leaflet);if(!s)return;var o=!n||n.index===undefined||n.index===_.size(this.layers);if(!o)for(var u in this.layers)this.map_leaflet.removeLayer(this.layers[u]);this.layers[e.cid]=s,o?(cdb.geo.LeafletMapView.addLayerToMap(s,r.map_leaflet),s.setZIndex&&s.setZIndex(e.get("order"))):this.map.layers.each(function(e){var t=r.layers[e.cid];t&&(cdb.geo.LeafletMapView.addLayerToMap(t,r.map_leaflet),t.setZIndex&&t.setZIndex(e.get("order")))});var a=e.get("attribution");if(a){var f=this.map.get("attribution")||[];_.contains(f,a)||f.push(a),this.map.set({attribution:f})}return(n==undefined||!n.silent)&&this.trigger("newLayerView",s,e,this),s},pixelToLatLon:function(e){var t=this.map_leaflet.containerPointToLatLng([e[0],e[1]]);return t},latLonToPixel:function(e){var t=this.map_leaflet.latLngToLayerPoint(new L.LatLng(e[0],e[1]));return this.map_leaflet.layerPointToContainerPoint(t)},getBounds:function(){var e=this.map_leaflet.getBounds(),t=e.getSouthWest(),n=e.getNorthEast();return[[t.lat,t.lng],[n.lat,n.lng]]},setAttribution:function(e){},getSize:function(){return this.map_leaflet.getSize()},panBy:function(e){this.map_leaflet.panBy(new L.Point(e.x,e.y))},setCursor:function(e){$(this.map_leaflet.getContainer()).css("cursor",e)},getNativeMap:function(){return this.map_leaflet},invalidateSize:function(){this.map_leaflet.invalidateSize({pan:!1}),this.map_leaflet.setView(this.map.get("center"),this.map.get("zoom")||0,{animate:!1})}},{layerTypeMap:{tiled:cdb.geo.LeafLetTiledLayerView,wms:cdb.geo.LeafLetWMSLayerView,cartodb:cdb.geo.LeafLetLayerCartoDBView,carto:cdb.geo.LeafLetLayerCartoDBView,plain:cdb.geo.LeafLetPlainLayerView,gmapsbase:cdb.geo.LeafLetPlainLayerView,layergroup:cdb.geo.LeafLetCartoDBLayerGroupView,namedmap:cdb.geo.LeafLetCartoDBNamedMapView,torque:function(e,t){return new cdb.geo.LeafLetTorqueLayer(e,t)}},createLayer:function(e,t){var n=null,r=this.layerTypeMap[e.get("type").toLowerCase()];if(r)try{n=new r(e,t)}catch(i){cdb.log.error("MAP: error creating layer"+e.get("type")+" "+i)}else cdb.log.error("MAP: "+e.get("type")+" can't be created");return n},addLayerToMap:function(e,t,n){t.addLayer(e.leafletLayer),n!==undefined&&v.setZIndex&&v.setZIndex(n)},createGeometry:function(e){return e.isPoint()?new cdb.geo.leaflet.PointView(e):new cdb.geo.leaflet.PathView(e)}}),L.Icon.Default.imagePath=function(){var e=document.getElementsByTagName("script"),t=/\/?cartodb[\-\._]?([\w\-\._]*)\.js\??/,n,r,i,s;for(n=0,r=e.length;n<r;n++){i=e[n].src,s=i.match(t);if(s){var o=i.split("/");return delete o[o.length-1],o.join("/")+"themes/css/images"}}}()}(),function(){if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e,t,n){this.gmapsLayer=t,this.map=this.gmapsMap=n,this.model=e,this.model.bind("change",this._update,this),this.type=e.get("type")||e.get("kind"),this.type=this.type.toLowerCase()};_.extend(e.prototype,Backbone.Events),_.extend(e.prototype,{_searchLayerIndex:function(){var e=this,t=-1;return this.gmapsMap.overlayMapTypes.forEach(function(n,r){n==e&&(t=r)}),t},remove:function(){if(!this.isBase){var e=this,t=this._searchLayerIndex();t>=0?this.gmapsMap.overlayMapTypes.removeAt(t):this.gmapsLayer.setMap&&this.gmapsLayer.setMap(null),this.model.unbind(null,null,this),this.unbind()}},refreshView:function(){var e=this;if(this.isBase){var t="_baseLayer";this.gmapsMap.setMapTypeId(null),this.gmapsMap.mapTypes.set(t,this.gmapsLayer),this.gmapsMap.setMapTypeId(t)}else{var n=this._searchLayerIndex();n>=0&&this.gmapsMap.overlayMapTypes.setAt(n,this)}},reload:function(){this.refreshView()},_update:function(){this.refreshView()}}),cdb.geo.GMapsLayerView=e}(),function(){if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e,t){cdb.geo.GMapsLayerView.call(this,e,null,t)};_.extend(e.prototype,cdb.geo.GMapsLayerView.prototype,{_update:function(){var e=this.model,t={roadmap:google.maps.MapTypeId.ROADMAP,gray_roadmap:google.maps.MapTypeId.ROADMAP,dark_roadmap:google.maps.MapTypeId.ROADMAP,hybrid:google.maps.MapTypeId.HYBRID,satellite:google.maps.MapTypeId.SATELLITE,terrain:google.maps.MapTypeId.TERRAIN};this.gmapsMap.setOptions({mapTypeId:t[e.get("base_type")]}),this.gmapsMap.setOptions({styles:e.get("style")||DEFAULT_MAP_STYLE})},remove:function(){}}),cdb.geo.GMapsBaseLayerView=e}(),function(){if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e,t){this.color=e.get("color"),cdb.geo.GMapsLayerView.call(this,e,this,t)};_.extend(e.prototype,cdb.geo.GMapsLayerView.prototype,{_update:function(){this.color=this.model.get("color"),this.refreshView()},getTile:function(e,t,n){var r=document.createElement("div");return r.style.width=this.tileSize.x,r.style.height=this.tileSize.y,r["background-color"]=this.color,r},tileSize:new google.maps.Size(256,256),maxZoom:100,minZoom:0,name:"plain layer",alt:"plain layer"}),cdb.geo.GMapsPlainLayerView=e}(),function(){if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e,t){cdb.geo.GMapsLayerView.call(this,e,this,t),this.tileSize=new google.maps.Size(256,256),this.opacity=1,this.isPng=!0,this.maxZoom=22,this.minZoom=0,this.name="cartodb tiled layer",google.maps.ImageMapType.call(this,this)};_.extend(e.prototype,cdb.geo.GMapsLayerView.prototype,google.maps.ImageMapType.prototype,{getTileUrl:function(e,t){var n=e.y,r=1<<t;if(n<0||n>=r)return null;var i=e.x;if(i<0||i>=r)i=(i%r+r)%r;this.model.get("tms")&&(n=r-n-1);var s=this.model.get("urlTemplate");return s.replace("{x}",i).replace("{y}",n).replace("{z}",t)}}),cdb.geo.GMapsTiledLayerView=e}(),function(){function s(e,t){var r=Math.round(t*100);r>=99?e.style.filter=n:e.style.filter="alpha(opacity="+t+");"}function o(){}function u(e){var t=function(t,n){var r=this,i=[];_.bindAll(this,"featureOut","featureOver","featureClick"),t.attributes.attribution=cdb.config.get("cartodb_attributions");var s=_.clone(t.attributes);s.map=n;var o=s.featureOver,u=s.featureOut,a=s.featureClick,f,l=-1;s.featureOver=function(e,t,n,s,u){i[u]||r.trigger("layerenter",e,t,n,s,u),i[u]=1,o&&o.apply(this,arguments),r.featureOver&&r.featureOver.apply(this,arguments),e.timeStamp===f&&clearTimeout(l),l=setTimeout(function(){r.trigger("mouseover",e,t,n,s,u),r.trigger("layermouseover",e,t,n,s,u)},0),f=e.timeStamp},s.featureOut=function(e,t){i[t]&&r.trigger("layermouseout",t),i[t]=0,_.any(i)||r.trigger("mouseout"),u&&u.apply(this,arguments),r.featureOut&&r.featureOut.apply(this,arguments)},s.featureClick=_.debounce(function(){a&&a.apply(this,arguments),r.featureClick&&r.featureClick.apply(s,arguments)},10),e.call(this,s),cdb.geo.GMapsLayerView.call(this,t,this,n)};return _.extend(t.prototype,cdb.geo.GMapsLayerView.prototype,e.prototype,{_update:function(){this.setOptions(this.model.attributes)},reload:function(){this.model.invalidate()},remove:function(){cdb.geo.GMapsLayerView.prototype.remove.call(this),this.clear()},featureOver:function(e,t,n,r,i){this.trigger("featureOver",e,[t.lat(),t.lng()],n,r,i)},featureOut:function(e,t){this.trigger("featureOut",e,t)},featureClick:function(e,t,n,r,i){this.trigger("featureClick",e,[t.lat(),t.lng()],n,r,i)},error:function(e){this.model&&(this.model.trigger("error",e?e.errors:"unknown error"),this.model.trigger("tileError",e?e.errors:"unknown error"))},ok:function(e){this.model.trigger("tileOk")},tilesOk:function(e){this.model.trigger("tileOk")},loading:function(){this.trigger("loading")},finishLoading:function(){this.trigger("load")}}),t}if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e){this.setMap(e)};e.prototype=new google.maps.OverlayView,e.prototype.draw=function(){},e.prototype.latLngToPixel=function(e){var t=this.getProjection();return t?t.fromLatLngToContainerPixel(e):[0,0]},e.prototype.pixelToLatLng=function(e){var t=this.getProjection();return t?t.fromContainerPixelToLatLng(e):[0,0]};var t={opacity:.99,attribution:"CartoDB",debug:!1,visible:!0,added:!1,tiler_domain:"cartodb.com",tiler_port:"80",tiler_protocol:"http",sql_api_domain:"cartodb.com",sql_api_port:"80",sql_api_protocol:"http",extra_params:{},cdn_url:null,subdomains:null},n="progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)",r=function(n){this.options=_.defaults(n,t),this.tiles=0,this.tilejson=null,this.interaction=[];if(!n.named_map&&!n.sublayers)throw new Error("cartodb-gmaps needs at least the named_map");this.options.cartodb_logo!=0&&cdb.geo.common.CartoDBLogo.addWadus({left:74,bottom:8},2e3,this.options.map.getDiv()),wax.g.connector.call(this,n),_.extend(this.options,n),this.projector=new e(n.map),NamedMap.call(this,this.options.named_map,this.options),CartoDBLayerCommon.call(this),this.update()},i=function(n){this.options=_.defaults(n,t),this.tiles=0,this.tilejson=null,this.interaction=[];if(!n.layer_definition&&!n.sublayers)throw new Error("cartodb-leaflet needs at least the layer_definition or sublayer list");n.layer_definition||(n.layer_definition=LayerDefinition.layerDefFromSubLayers(n.sublayers)),this.options.cartodb_logo!=0&&cdb.geo.common.CartoDBLogo.addWadus({left:74,bottom:8},2e3,this.options.map.getDiv()),wax.g.connector.call(this,n),_.extend(this.options,n),this.projector=new e(n.map),LayerDefinition.call(this,n.layer_definition,this.options),CartoDBLayerCommon.call(this),this.update()};o.prototype.setOpacity=function(e){if(isNaN(e)||e>1||e<0)throw new Error(e+" is not a valid value, should be in [0, 1] range");this.opacity=this.options.opacity=e;for(var t in this.cache){var n=this.cache[t];n.style.opacity=e,s(n,e)}},o.prototype.setAttribution=function(){},o.prototype.getTile=function(e,t,n){var r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",i=this,o="ActiveXObject"in window,u=o&&!document.addEventListener;this.options.added=!0;if(this.tilejson===null){var a=t+"/"+e.x+"/"+e.y,f=this.cache[a]=new Image(256,256);return f.src=r,f.setAttribute("gTileKey",a),f.style.opacity=this.options.opacity,f}var l=wax.g.connector.prototype.getTile.call(this,e,t,n);u&&s(l,this.options.opacity),l.style.opacity=this.options.opacity,this.tiles===0&&this.loading&&this.loading(),this.tiles++;var c=cartodb.core.Profiler.metric("cartodb-js.tile.png.load.time").start(),h=function(){c.end(),i.tiles--,i.tiles===0&&i.finishLoading&&i.finishLoading()};return l.onload=h,l.onerror=function(){cartodb.core.Profiler.metric("cartodb-js.tile.png.error").inc(),h()},l},o.prototype.onAdd=function(){},o.prototype.clear=function(){this._clearInteraction(),self.finishLoading&&self.finishLoading()},o.prototype.update=function(e){var t=this;this.loading&&this.loading(),this.getTiles(function(n,r){n?(t.tilejson=n,t.options.tiles=n.tiles,t.tiles=0,t.cache={},t._reloadInteraction(),t.refreshView(),t.ok&&t.ok(),e&&e()):t.error&&t.error(r)})},o.prototype.refreshView=function(){var e=this,t=this.options.map;t.overlayMapTypes.forEach(function(n,r){if(n==e){t.overlayMapTypes.setAt(r,e);return}})},o.prototype.onLayerDefinitionUpdated=function(){this.update()},o.prototype._checkLayer=function(){if(!this.options.added)throw new Error("the layer is not still added to the map")},o.prototype._findPos=function(e,t){var n,r;n=curtop=0;var i=e.getDiv(),s,o;t.e.changedTouches&&t.e.changedTouches.length>0?(s=t.e.changedTouches[0].clientX+window.scrollX,o=t.e.changedTouches[0].clientY+window.scrollY):(s=t.e.clientX,o=t.e.clientY);do n+=i.offsetLeft,curtop+=i.offsetTop;while(i=i.offsetParent);return new google.maps.Point(s-n,o-curtop)},o.prototype._manageOffEvents=function(e,t){if(this.options.featureOut)return this.options.featureOut&&this.options.featureOut(t.e,t.layer)},o.prototype._manageOnEvents=function(e,t){var n=this._findPos(e,t),r=this.projector.pixelToLatLng(n),i=t.e.type.toLowerCase();switch(i){case"mousemove":if(this.options.featureOver)return this.options.featureOver(t.e,r,n,t.data,t.layer);break;case"click":case"touchend":case"mspointerup":this.options.featureClick&&this.options.featureClick(t.e,r,n,t.data,t.layer);break;default:}},i.Projector=e,i.prototype=new wax.g.connector,_.extend(i.prototype,LayerDefinition.prototype,o.prototype,CartoDBLayerCommon.prototype),i.prototype.interactionClass=wax.g.interaction,r.prototype=new wax.g.connector,_.extend(r.prototype,NamedMap.prototype,o.prototype,CartoDBLayerCommon.prototype),r.prototype.interactionClass=wax.g.interaction,cdb.geo.CartoDBLayerGroupGMaps=i,cdb.geo.CartoDBNamedMapGMaps=r,cdb.geo.GMapsCartoDBLayerGroupView=u(i),cdb.geo.GMapsCartoDBNamedMapView=u(r),cdb.geo.CartoDBNamedMapGMaps=r}(),function(){if(typeof google=="undefined"||typeof google.maps=="undefined")return;var e=function(e){this.setMap(e)};e.prototype=new google.maps.OverlayView,e.prototype.draw=function(){},e.prototype.latLngToPixel=function(e){var t=this.getProjection();return t?t.fromLatLngToContainerPixel(e):[0,0]},e.prototype.pixelToLatLng=function(e){var t=this.getProjection();return t?t.fromContainerPixelToLatLng(e):[0,0]};var t=function(e){var t={query:"SELECT * FROM {{table_name}}",opacity:.99,attribution:"CartoDB",opacity:1,debug:!1,visible:!0,added:!1,extra_params:{},layer_definition_version:"1.0.0"};this.options=_.defaults(e,t);if(!e.table_name||!e.user_name||!e.tile_style)throw"cartodb-gmaps needs at least a CartoDB table name, user_name and tile_style";this.options.layer_definition={version:this.options.layer_definition_version,layers:[{type:"cartodb",options:this._getLayerDefinition(),infowindow:this.options.infowindow}]},cdb.geo.CartoDBLayerGroupGMaps.call(this,this.options),this.setOptions(this.options)};_.extend(t.prototype,cdb.geo.CartoDBLayerGroupGMaps.prototype),t.prototype.setQuery=function(e,t){t===undefined&&(t=e,e=0),t=t||"select * from "+this.options.table_name,LayerDefinition.prototype.setQuery.call(this,e,t)},cdb.geo.CartoDBLayerGMaps=t;var n=function(e,t){var n=this;_.bindAll(this,"featureOut","featureOver","featureClick"),e.attributes.attribution=cdb.config.get("cartodb_attributions");var r=_.clone(e.attributes);r.map=t;var i=r.featureOver,s=r.featureOut,o=r.featureClick;r.featureOver=function(){i&&i.apply(this,arguments),n.featureOver&&n.featureOver.apply(this,arguments)},r.featureOut=function(){s&&s.apply(this,arguments),n.featureOut&&n.featureOut.apply(this,arguments)},r.featureClick=function(){o&&o.apply(this,arguments),n.featureClick&&n.featureClick.apply(r,arguments)},cdb.geo.CartoDBLayerGMaps.call(this,r),cdb.geo.GMapsLayerView.call(this,e,this,t)};cdb.geo.GMapsCartoDBLayerView=n,_.extend(n.prototype,cdb.geo.CartoDBLayerGMaps.prototype,cdb.geo.GMapsLayerView.prototype,{_update:function(){this.setOptions(this.model.attributes)},reload:function(){this.model.invalidate()},remove:function(){cdb.geo.GMapsLayerView.prototype.remove.call(this),this.clear()},featureOver:function(e,t,n,r){this.trigger("featureOver",e,[t.lat(),t.lng()],n,r,0)},featureOut:function(e){this.trigger("featureOut",e)},featureClick:function(e,t,n,r,i){this.trigger("featureClick",e,[t.lat(),t.lng()],n,r,0)},error:function(e){this.model&&(this.model.trigger("error",e?e.error:"unknown error"),this.model.trigger("tileError",e?e.error:"unknown error"))},tilesOk:function(e){this.model.trigger("tileOk")},loading:function(){this.trigger("loading")},finishLoading:function(){this.trigger("load")}})}();if(typeof google!="undefined"&&typeof google.maps!="undefined"){var DEFAULT_MAP_STYLE=[{stylers:[{saturation:-65},{gamma:1.52}]},{featureType:"administrative",stylers:[{saturation:-95},{gamma:2.26}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{visibility:"simplified"},{saturation:-99},{gamma:2.22}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{saturation:-55}]}];cdb.geo.GoogleMapsMapView=cdb.geo.MapView.extend({layerTypeMap:{tiled:cdb.geo.GMapsTiledLayerView,cartodb:cdb.geo.GMapsCartoDBLayerView,carto:cdb.geo.GMapsCartoDBLayerView,plain:cdb.geo.GMapsPlainLayerView,gmapsbase:cdb.geo.GMapsBaseLayerView,layergroup:cdb.geo.GMapsCartoDBLayerGroupView,namedmap:cdb.geo.GMapsCartoDBNamedMapView,torque:function(e,t){return new cdb.geo.GMapsTorqueLayerView(e,t)},wms:cdb.geo.LeafLetWMSLayerView},initialize:function(){_.bindAll(this,"_ready"),this._isReady=!1;var e=this;cdb.geo.MapView.prototype.initialize.call(this);var t=this.map.getViewBounds();t&&this.showBounds(t);var n=this.map.get("center");if(!this.options.map_object)this.map_googlemaps=new google.maps.Map(this.el,{center:new google.maps.LatLng(n[0],n[1]),zoom:this.map.get("zoom"),minZoom:this.map.get("minZoom"),maxZoom:this.map.get("maxZoom"),disableDefaultUI:!0,scrollwheel:this.map.get("scrollwheel"),mapTypeControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,backgroundColor:"white",tilt:0}),this.map.bind("change:maxZoom",function(){e.map_googlemaps.setOptions({maxZoom:e.map.get("maxZoom")})},this),this.map.bind("change:minZoom",function(){e.map_googlemaps.setOptions({minZoom:e.map.get("minZoom")})},this);else{this.map_googlemaps=this.options.map_object,this.setElement(this.map_googlemaps.getDiv());var r=e.map_googlemaps.getCenter();e._setModelProperty({center:[r.lat(),r.lng()]}),e._setModelProperty({zoom:e.map_googlemaps.getZoom()}),e.map.unset("view_bounds_sw",{silent:!0}),e.map.unset("view_bounds_ne",{silent:!0})}this.map.geometries.bind("add",this._addGeometry,this),this.map.geometries.bind("remove",this._removeGeometry,this),this._bindModel(),this._addLayers(),google.maps.event.addListener(this.map_googlemaps,"center_changed",function(){var t=e.map_googlemaps.getCenter();e._setModelProperty({center:[t.lat(),t.lng()]})}),google.maps.event.addListener(this.map_googlemaps,"zoom_changed",function(){e._setModelProperty({zoom:e.map_googlemaps.getZoom()})}),google.maps.event.addListener(this.map_googlemaps,"click",function(t){e.trigger("click",t,[t.latLng.lat(),t.latLng.lng()])}),google.maps.event.addListener(this.map_googlemaps,"dblclick",function(t){e.trigger("dblclick",t)}),this.map.layers.bind("add",this._addLayer,this),this.map.layers.bind("remove",this._removeLayer,this),this.map.layers.bind("reset",this._addLayers,this),this.map.layers.bind("change:type",this._swicthLayerView,this),this.projector=new cdb.geo.CartoDBLayerGroupGMaps.Projector(this.map_googlemaps),this.projector.draw=this._ready},_ready:function(){this.projector.draw=function(){},this.trigger("ready"),this._isReady=!0},_setScrollWheel:function(e,t){this.map_googlemaps.setOptions({scrollwheel:t})},_setZoom:function(e,t){t=t||0,this.map_googlemaps.setZoom(t)},_setCenter:function(e,t){var n=new google.maps.LatLng(t[0],t[1]);this.map_googlemaps.setCenter(n)},createLayer:function(e){var t,n=this.layerTypeMap[e.get("type").toLowerCase()];if(n)try{t=new n(e,this.map_googlemaps)}catch(r){cdb.log.error("MAP: error creating layer"+e.get("type")+" "+r)}else cdb.log.error("MAP: "+e.get("type")+" can't be created");return t},_addLayer:function(e,t,n){n=n||{};var r=this,i,s;s=this.createLayer(e);if(!s)return;this.layers[e.cid]=s;if(s){var o=_(this.layers).filter(function(e){return!!e.getTile}).length-1,u=_.keys(this.layers).length===1||n&&n.index===0;if(u&&!n.no_base_layer){var a=s.model;a.get("type")==="GMapsBase"?s._update():(s.isBase=!0,s._update())}else o-=1,o=Math.max(0,o),s.getTile?(s.gmapsLayer||cdb.log.error("gmaps layer can't be null"),r.map_googlemaps.overlayMapTypes.setAt(o,s.gmapsLayer)):s.gmapsLayer.setMap(r.map_googlemaps);(n===undefined||!n.silent)&&this.trigger("newLayerView",s,e,this)}else cdb.log.error("layer type not supported");var f=e.get("attribution");if(f){var l=this.map.get("attribution")||[];_.contains(l,f)||l.push(f),this.map.set({attribution:l})}return s},pixelToLatLon:function(e){return this.projector.fromContainerPixelToLatLng(new google.maps.Point(e[0],e[1]))},latLonToPixel:function(e){return this.projector.latLngToPixel(new google.maps.LatLng(e[0],e[1]))},getSize:function(){return{x:this.$el.width(),y:this.$el.height()}},panBy:function(e){var t=this.map.get("center"),n=this.latLonToPixel(t);e.x+=n.x,e.y+=n.y;var r=this.projector.pixelToLatLng(e);this.map.setCenter([r.lat(),r.lng()])},getBounds:function(){if(this._isReady){var e=this.map_googlemaps.getBounds(),t=e.getSouthWest(),n=e.getNorthEast();return[[t.lat(),t.lng()],[n.lat(),n.lng()]]}return[[0,0],[0,0]]},setAttribution:function(e){var t=document.getElementById("cartodb-gmaps-attribution"),n=e.get("attribution").join(", ");t&&t.parentNode.removeChild(t);var r=this.map_googlemaps.getDiv(),i=document.createElement("div");i.setAttribute("id","cartodb-gmaps-attribution"),i.setAttribute("class","gmaps"),r.appendChild(i),i.innerHTML=n},setCursor:function(e){this.map_googlemaps.setOptions({draggableCursor:e})},_addGeomToMap:function(e){var t=cdb.geo.GoogleMapsMapView.createGeometry(e);if(t.geom.length)for(var n=0;n<t.geom.length;++n)t.geom[n].setMap(this.map_googlemaps);else t.geom.setMap(this.map_googlemaps);return t},_removeGeomFromMap:function(e){if(e.geom.length)for(var t=0;t<e.geom.length;++t)e.geom[t].setMap(null);else e.geom.setMap(null)},getNativeMap:function(){return this.map_googlemaps},invalidateSize:function(){google.maps.event.trigger(this.map_googlemaps,"resize")}},{addLayerToMap:function(e,t,n){n=n||0,e||cdb.log.error("gmaps layer can't be null"),e.getTile?t.overlayMapTypes.setAt(n,e):e.setMap(t)},createGeometry:function(e){return e.isPoint()?new cdb.geo.gmaps.PointView(e):new cdb.geo.gmaps.PathView(e)}})}cdb.ui.common.Dialog=cdb.core.View.extend({tagName:"div",className:"dialog",events:{"click .ok":"_ok","click .cancel":"_cancel","click .close":"_cancel"},default_options:{title:"title",description:"",ok_title:"Ok",cancel_title:"Cancel",width:300,height:200,clean_on_hide:!1,enter_to_confirm:!1,template_name:"common/views/dialog_base",ok_button_classes:"button green",cancel_button_classes:"",modal_type:"",modal_class:"",include_footer:!0,additionalButtons:[]},initialize:function(){_.defaults(this.options,this.default_options),_.bindAll(this,"render","_keydown"),$(document).bind("keydown",this._keydown),this.bind("clean",this._reClean),this.template_base=this.options.template_base?_.template(this.options.template_base):cdb.templates.getTemplate(this.options.template_name)},render:function(){var e=this.$el;return e.html(this.template_base(
this.options)),e.find(".modal").css({width:this.options.width}),this.render_content&&this.$(".content").append(this.render_content()),this.options.modal_class&&this.$el.addClass(this.options.modal_class),this},_keydown:function(e){e.keyCode===27?this._cancel():e.keyCode===13&&this.options.enter_to_confirm&&this._ok()},appendToBody:function(){return $("body").append(this.render().el),this},_ok:function(e){e&&e.preventDefault(),this.ok&&this.ok(this.result),this.hide()},_cancel:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.cancel&&this.cancel(),this.hide()},hide:function(){this.$el.hide(),this.options.clean_on_hide&&this.clean()},open:function(){this.$el.show()},_reClean:function(){$(document).unbind("keydown",this._keydown)}}),cdb.ui.common.ShareDialog=cdb.ui.common.Dialog.extend({tagName:"div",className:"cartodb-share-dialog",events:{"click .ok":"_ok","click .cancel":"_cancel","click .close":"_cancel",click:"_stopPropagation",dblclick:"_stopPropagation",mousedown:"_stopPropagation"},default_options:{title:"",description:"",ok_title:"Ok",cancel_title:"Cancel",width:300,height:200,clean_on_hide:!1,enter_to_confirm:!1,template_name:"common/views/dialog_base",ok_button_classes:"button green",cancel_button_classes:"",modal_type:"",modal_class:"",include_footer:!0,additionalButtons:[]},initialize:function(){_.defaults(this.options,this.default_options),_.bindAll(this,"render","_keydown"),this.isOpen=!1;var e=this;this.options.target&&this.options.target.on("click",function(t){t.preventDefault(),t.stopPropagation(),e.open()}),$(document).bind("keydown",this._keydown),this.bind("clean",this._reClean)},_stopPropagation:function(e){e.stopPropagation()},_stripHTML:function(e,t){t=(((t||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var n=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;return!e||typeof e!="string"?"":e.replace(n,function(e,n){return t.indexOf("<"+n.toLowerCase()+">")>-1?e:""})},open:function(){var e=this;this.$el.show(0,function(){e.isOpen=!0})},hide:function(){var e=this;this.$el.hide(0,function(){e.isOpen=!1}),this.options.clean_on_hide&&this.clean()},toggle:function(){this.isOpen?this.hide():this.open()},_truncateTitle:function(e,t){return e.substr(0,t-1)+(e.length>t?"…":"")},render:function(){var e=this.$el,t=this.options.title,n=this.options.description,r=this._stripHTML(this.options.description),i=this.options.share_url,s,o;this.$el.addClass(this.options.size);var u=t+": "+r,a;t&&r?a=this._truncateTitle(t+": "+r,112)+" %23map ":t?a=this._truncateTitle(t,112)+" %23map":r?a=this._truncateTitle(r,112)+" %23map":a="%23map",this.options.facebook_url?s=this.options.facebook_url:s="http://www.facebook.com/sharer.php?u="+i+"&text="+u,this.options.twitter_url?o=this.options.twitter_url:o="https://twitter.com/share?url="+i+"&text="+a;var f=_.extend(this.options,{facebook_url:s,twitter_url:o});return e.html(this.options.template(f)),e.find(".modal").css({width:this.options.width}),this.render_content&&this.$(".content").append(this.render_content()),this.options.modal_class&&this.$el.addClass(this.options.modal_class),this.options.disableLinks&&this.$el.find("a").attr("target",""),this}}),cdb.ui.common.Notification=cdb.core.View.extend({tagName:"div",className:"dialog",events:{"click .close":"hide"},default_options:{timeout:0,msg:"",hideMethod:"",duration:"normal"},initialize:function(){this.closeTimeout=-1,_.defaults(this.options,this.default_options),this.template=this.options.template?_.template(this.options.template):cdb.templates.getTemplate("common/notification"),this.$el.hide()},render:function(){var e=this.$el;return e.html(this.template(this.options)),this.render_content&&this.$(".content").append(this.render_content()),this},hide:function(e){var t=this;e&&e.preventDefault(),clearTimeout(this.closeTimeout),this.options.hideMethod!=""&&this.$el.is(":visible")?this.$el[this.options.hideMethod](this.options.duration,"swing",function(){t.$el.html(""),t.trigger("notificationDeleted"),t.remove()}):(this.$el.hide(),t.$el.html(""),t.trigger("notificationDeleted"),t.remove())},open:function(e,t){this.render(),this.$el.show(e,t),this.options.timeout&&(this.closeTimeout=setTimeout(_.bind(this.hide,this),this.options.timeout))}}),cdb.ui.common.Row=cdb.core.Model.extend({}),cdb.ui.common.TableData=Backbone.Collection.extend({model:cdb.ui.common.Row,fetched:!1,initialize:function(){var e=this;this.bind("reset",function(){e.fetched=!0})},getCell:function(e,t){var n=this.at(e);return n?n.get(t):null},isEmpty:function(){return this.length===0}}),cdb.ui.common.TableProperties=cdb.core.Model.extend({columnNames:function(){return _.map(this.get("schema"),function(e){return e[0]})},columnName:function(e){return this.columnNames()[e]}}),cdb.ui.common.RowView=cdb.core.View.extend({tagName:"tr",initialize:function(){this.model.bind("change",this.render,this),this.model.bind("destroy",this.clean,this),this.model.bind("remove",this.clean,this),this.model.bind("change",this.triggerChange,this),this.model.bind("sync",this.triggerSync,this),this.model.bind("error",this.triggerError,this),this.add_related_model(this.model),this.order=this.options.order},triggerChange:function(){this.trigger("changeRow")},triggerSync:function(){this.trigger("syncRow")},triggerError:function(){this.trigger("errorRow")},valueView:function(e,t){return t},render:function(){var e=this,t=this.model,n="",r=0,i;this.options.row_header?i='<td class="rowHeader" data-x="'+r+'">':i='<td class="EmptyRowHeader" data-x="'+r+'">';var s=e.valueView("","");s.html&&(s=s[0].outerHTML),i+=s,i+="</td>",r++,n+=i;var o=this.order||_.keys(t.attributes),u="",a=t.attributes;for(var f=0,l=o.length;f<l;++f){var c=o[f],h=a[c];if(h!==undefined){var i='<td id="cell_'+t.id+"_"+c+'" data-x="'+r+'">',s=e.valueView(c,h);s.html&&(s=s[0].outerHTML),i+=s,i+="</td>",r++,u+=i}}return n+=u,this.$el.html(n).attr("id","row_"+t.id),this},getCell:function(e){var t=e;return this.options.row_header&&++e,this.$("td:eq("+e+")")},getTableView:function(){return this.tableView}}),cdb.ui.common.Table=cdb.core.View.extend({tagName:"table",rowView:cdb.ui.common.RowView,events:{"click td":"_cellClick","dblclick td":"_cellDblClick"},default_options:{},initialize:function(){var e=this;_.defaults(this.options,this.default_options),this.dataModel=this.options.dataModel,this.rowViews=[],this.setDataSource(this.dataModel),this.model.bind("change",this.render,this),this.model.bind("change:dataSource",this.setDataSource,this),this.bind("clean",this.clear_rows,this),this.add_related_model(this.dataModel),this.add_related_model(this.model),this.model.bind("removing:row",function(){e.rowsBeingDeleted=e.rowsBeingDeleted?e.rowsBeingDeleted+1:1,e.rowDestroying()}),this.model.bind("remove:row",function(){e.rowsBeingDeleted>0&&(e.rowsBeingDeleted--,e.rowDestroyed(),e.dataModel.length==0&&e.emptyTable())})},headerView:function(e){return e[0]},setDataSource:function(e){this.dataModel&&this.dataModel.unbind(null,null,this),this.dataModel=e,this.dataModel.bind("reset",this._renderRows,this),this.dataModel.bind("error",this._renderRows,this),this.dataModel.bind("add",this.addRow,this)},_renderHeader:function(){var e=this,t=$("<thead>"),n=$("<tr>");return this.options.row_header?n.append($("<th>").append(e.headerView(["","header"]))):n.append($("<th>").append(e.headerView(["","header"]))),_(this.model.get("schema")).each(function(t){n.append($("<th>").append(e.headerView(t)))}),t.append(n),t},clear_rows:function(){this.$("tfoot").remove(),this.$("tr.noRows").remove();var e=null;while(e=this.rowViews.pop())e.unbind(null,null,this),e.clean();this.rowViews=[]},addRow:function(e,t,n){var r=this,i=new r.rowView({model:e,order:this.model.columnNames(),row_header:this.options.row_header});i.tableView=this,i.bind("clean",function(){var e=_.indexOf(r.rowViews,i);r.rowViews.splice(e,1);for(var t=e;t<r.rowViews.length;++t)r.rowViews[t].$el.attr("data-y",t)},this),i.bind("changeRow",this.rowChanged,this),i.bind("saved",this.rowSynched,this),i.bind("errorSaving",this.rowFailed,this),i.bind("saving",this.rowSaving,this),this.retrigger("saving",i),i.render();if(n&&n.index!==undefined&&n.index!=r.rowViews.length){i.$el.insertBefore(r.rowViews[n.index].$el),r.rowViews.splice(n.index,0,i);for(var s=n.index;s<r.rowViews.length;++s)r.rowViews[s].$el.attr("data-y",s)}else i.$el.attr("data-y",r.rowViews.length),r.$el.append(i.el),r.rowViews.push(i);this.trigger("createRow")},rowChanged:function(){},rowSynched:function(){},rowFailed:function(){},rowSaving:function(){},rowDestroying:function(){},rowDestroyed:function(){},emptyTable:function(){},isEmptyTable:function(){return this.dataModel.length===0&&this.dataModel.fetched},_renderRows:function(){this.clear_rows();if(!this.isEmptyTable())if(this.dataModel.fetched){var e=this;this.dataModel.each(function(t){e.addRow(t)})}else this._renderLoading();else this._renderEmpty()},_renderLoading:function(){},_renderEmpty:function(){},addEmptyTableInfo:function(){},render:function(){var e=this;return e.$el.html(e._renderHeader()),e._renderRows(),this},getCell:function(e,t){return this.options.row_header&&++t,this.rowViews[t].getCell(e)},_cellClick:function(e,t){t=t||"cellClick",e.preventDefault();var n=$(e.currentTarget||e.target),r=parseInt(n.attr("data-x"),10),i=parseInt(n.parent().attr("data-y"),10);this.trigger(t,e,n,r,i)},_cellDblClick:function(e){this._cellClick(e,"cellDblClick")}}),cdb.ui.common.Dropdown=cdb.core.View.extend({tagName:"div",className:"dropdown",events:{"click ul li a":"_fireClick"},default_options:{width:160,speedIn:150,speedOut:300,vertical_position:"down",horizontal_position:"right",tick:"right",vertical_offset:0,horizontal_offset:0},initialize:function(){_.bindAll(this,"open","hide","_handleClick","_keydown"),_.defaults(this.options,this.default_options),this.options.template_base?this.template_base=cdb.templates.getTemplate(this.options.template_base):this.options.template&&(this.template_base=this.options.template),$(this.options.target).bind({click:this._handleClick}),$(document).bind("keydown",this._keydown),this.isOpen=!1},render:function(){var e=this.$el;return e.html(this.template_base(this.options)).css({width:this.options.width}),this},_handleClick:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.isOpen?this.hide():this.open()},_keydown:function(e){e.keyCode===27&&this.hide()},hide:function(){this.isOpen=!1,this.$el.hide()},show:function(){this.$el.css({display:"block",opacity:1}),this.isOpen=!0},open:function(e,t){var n=t&&$(t)||this.options.target;this.options.target=n;var r=n[this.options.position||"offset"](),i=n.outerWidth(),s=n.outerHeight(),o=this.$el.outerWidth(),u=this.$el.outerHeight(),a=this;this.$el.css({top:r.top+parseInt(a.options.vertical_position=="up"?-u-10-a.options.vertical_offset:s+10-a.options.vertical_offset),left:r.left+parseInt(a.options.horizontal_position=="left"?a.options.horizontal_offset-15:i-o+15-a.options.horizontal_offset)}).addClass((this.options.vertical_position=="up"?"vertical_top":"vertical_bottom")+" "+(this.options.horizontal_position=="right"?"horizontal_right":"horizontal_left")+" "+"tick_"+this.options.tick),this.show(),this.isOpen=!0},_fireClick:function(e){this.trigger("optionClicked",e,this.el)}}),function(){var e={},t={_types:{},register:function(e,n){t._types[e]=n},create:function(e,n,r){var i=t._types[e];if(!i){cdb.log.error("Overlay: "+e+" does not exist");return}r.options=typeof r.options=="string"?JSON.parse(r.options):r.options,r.options=r.options||{};var s=i(r,n);return s?(s.type=e,s):!1}};cdb.vis.Overlay=t;var n={_types:{},register:function(e,t){this._types[e]=t},create:function(e,t,n){if(!e)return cdb.log.error("creating a layer without type"),null;var r=this._types[e.toLowerCase()],i={};return i.type=e,_.extend(i,n,n.options),new r(t,i)},moduleForLayer:function(e){return e.toLowerCase()==="torque"?"torque":null},modulesForLayers:function(e){var t=_(e).map(function(e){return n.moduleForLayer(e.type||e.kind)});return _.compact(_.uniq(t))}};cdb.vis.Layers=n;var r=cdb.vis.Loader={queue:[],current:undefined,_script:null,head:null,loadScript:function(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.async=!0,r.head||(r.head=document.getElementsByTagName("head")[0]),setTimeout(function(){r.head.appendChild(t)},0),t},get:function(e,t){r._script?r.queue.push([e,t]):(r.current=t,r._script=r.loadScript(e+(~e.indexOf("?")?"&":"?")+"callback=vizjson"))},getPath:function(e){var t=document.getElementsByTagName("script"),n=/\/?cartodb[\-\._]?([\w\-\._]*)\.js\??/;for(i=0,len=t.length;i<len;i++){src=t[i].src,matches=src.match(n);if(matches){var r=src.split("/");return delete r[r.length-1],r.join("/")+e}}return null},loadModule:function(e){var t="cartodb.mod."+e+(cartodb.DEBUG?".uncompressed.js":".js"),n=this.getPath(t);n||cartodb.log.error("can't find cartodb.js file"),r.loadScript(n)}};window.vizjson=function(e){r.current&&r.current(e),r.head.removeChild(r._script),r._script=null;var t=r.queue.shift();t&&r.get(t[0],t[1])},cartodb.moduleLoad=function(e,t){cartodb[e]=t,cartodb.config.modules.add({name:t})};var s=cdb.core.View.extend({initialize:function(){_.bindAll(this,"loadingTiles","loadTiles","_onResize"),this.https=!1,this.overlays=[],this.moduleChecked=!1,this.layersLoading=0,this.options.mapView&&(this.mapView=this.options.mapView,this.map=this.mapView.map),window.addEventListener?window.addEventListener("orientationchange",_.bind(this.doOnOrientationChange,this)):window.attachEvent("orientationchange",this.doOnOrientationChange,this)},doOnOrientationChange:function(){},checkModules:function(e){var t=n.modulesForLayers(e);return _.every(_.map(t,function(e){return cartodb[e]!==undefined}))},loadModules:function(e,t){function u(){i.checkModules(e)&&(cdb.config.unbind("moduleLoaded",u),t())}var i=this,s=n.modulesForLayers(e);for(var o=0;o<s.length;++o)r.loadModule(s[o]);cdb.config.bind("moduleLoaded",u),_.defer(u)},_addLayers:function(e,t){for(var n=0;n<e.length;++n){var r=e[n];this.loadLayer(r,t)}},addLegends:function(e,t){this.legends=new cdb.geo.ui.StackedLegend({legends:this.createLegendView(e)}),t||this.mapView.addOverlay(this.legends)},_setLayerOptions:function(e){var t=[],t=_.map(this.getLayers().slice(1),function(e){return e.getSubLayers?e.getSubLayers():e});t=_.flatten(t);for(i=0;i<Math.min(e.sublayer_options.length,t.length);++i){var n=e.sublayer_options[i],r=t[i],s=this.legends&&this.legends.getLegendByIndex(i);s&&s[n.visible?"show":"hide"]();if(r.model&&r.model.get("type")==="torque"){if(n.visible===!1){r.model.set("visible",!1);var o=this.getOverlay("time_slider");o&&o.hide()}}else n.visible===!1&&r.hide()}},_addOverlays:function(e,t){e=_.sortBy(e,function(e){return e.order==null?1e3:e.order}),this._createOverlays(e,t)},addTimeSlider:function(e){e&&this.addOverlay({type:"time_slider",layer:e})},_setupSublayers:function(e,t){t.sublayer_options=[],_.each(e.slice(1),function(e){e.type==="layergroup"?_.each(e.options.layer_definition.layers,function(e){t.sublayer_options.push({visible:e.visible!==undefined?e.visible:!0})}):e.type==="namedmap"&&_.each(e.options.named_map.layers,function(e){t.sublayer_options.push({visible:e.visible!==undefined?e.visible:!0})})})},load:function(e,t){var n=this;if(typeof e=="string"){var r=e;return cdb.vis.Loader.get(r,function(e){e?n.load(e,t):n.throwError("error fetching viz.json file")}),this}if(!this.checkModules(e.layers))return this.moduleChecked?(n.throwError("modules couldn't be loaded"),this):(this.moduleChecked=!0,this.loadModules(e.layers,function(){n.load(e,t)}),this);window&&window.location.protocol&&window.location.protocol==="https:"&&(this.https=!0),e.https&&(this.https=e.https),t=t||{},this._applyOptions(e,t);var i=!!_.find(e.overlays,function(e){return e.type==="logo"&&e.options.display});this.cartodb_logo=t.cartodb_logo!==undefined?t.cartodb_logo:i,this.mobile?this.cartodb_logo=!1:!i&&t.cartodb_logo===undefined&&(this.cartodb_logo=!0);var s=t.scrollwheel===undefined?e.scrollwheel:t.scrollwheel;e.maxZoom||(e.maxZoom=20),e.minZoom||(e.minZoom=0);var o={title:e.title,description:e.description,maxZoom:e.maxZoom,minZoom:e.minZoom,legends:e.legends,scrollwheel:s,provider:e.map_provider};e.bounding_box_sw&&e.bounding_box_ne&&(o.bounding_box_sw=e.bounding_box_sw,o.bounding_box_ne=e.bounding_box_ne);if(e.bounds)o.view_bounds_sw=e.bounds[0],o.view_bounds_ne=e.bounds[1];else{var u=e.center;typeof u=="string"&&(u=$.parseJSON(u)),o.center=u||[0,0],o.zoom=e.zoom==undefined?4:e.zoom}var a=new cdb.geo.Map(o);this.map=a,this.updated_at=e.updated_at||(new Date).getTime();var f=this.$el.outerHeight();f===0&&(this.mapConfig=o,$(window).bind("resize",this._onResize));var l=$("<div>").css({position:"relative",width:"100%",height:"100%"});this.container=l;var c=$("<div>").addClass("cartodb-map-wrapper").css({position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%"});l.append(c),this.$el.append(l);var h=new cdb.geo.MapView.create(c,a);this.mapView=h,this._addLayers(e.layers,t),(t.legends||t.legends===undefined&&this.map.get("legends")!==!1)&&this.addLegends(e.layers,this.mobile_enabled);if(t.time_slider){var p=_(this.getLayers()).filter(function(e){return e.model.get("type")==="torque"});p&&p.length&&(this.torqueLayer=p[0],!this.mobile_enabled&&this.torqueLayer&&this.addTimeSlider(this.torqueLayer))}return t.sublayer_options||this._setupSublayers(e.layers,t),t.sublayer_options&&this._setLayerOptions(t),this.mobile_enabled&&(t.legends===undefined&&(t.legends=this.legends?!0:!1),this.addMobile(e.overlays,e.layers,t)),this._addOverlays(e.overlays,t),_.defer(function(){n.trigger("done",n,n.getLayers())}),this},_addFullScreen:function(){this.addOverlay({options:{allowWheelOnFullscreen:!0},type:"fullscreen"})},_createOverlays:function(e,t){_.each(e,function(e){var n=e.type;if(this.mobile_enabled&&n==="zoom")return;if(this.mobile_enabled&&n==="header")return;if(n==="image"||n==="text"||n==="annotation"){var r=e.options.device=="mobile"?!0:!1;if(this.mobile!==r)return;if(!t[n]&&t[n]!==undefined)return}var i=this.addOverlay(e);i&&n in t&&t[n]===!1&&i.hide();var s=e.options;(n=="share"&&t.shareable||n=="share"&&i.model.get("display")&&t["shareable"]==undefined)&&i.show(),(n=="layer_selector"&&t[n]||n=="layer_selector"&&i.model.get("display")&&t[n]==undefined)&&i.show(),(n=="fullscreen"&&t[n]||n=="fullscreen"&&i.model.get("display")&&t[n]==undefined)&&i.show(),!this.mobile_enabled&&(n=="search"&&t[n]||n=="search"&&s.display&&t[n]==undefined)&&i.show();if(!this.mobile_enabled&&n==="header"){var o=i.model;t.title!==undefined&&o.set("show_title",t.title),t.description!==undefined&&o.set("show_description",t.description),(o.get("show_title")||o.get("show_description"))&&$(".cartodb-map-wrapper").addClass("with_header"),i.render()}},this)},addMobile:function(e,t,n){var r,i=t[1];i.options&&i.options.layer_definition?r=i.options.layer_definition.layers:i.options&&i.options.named_map&&i.options.named_map.layers&&(r=i.options.named_map.layers),this.addOverlay({type:"mobile",layers:r,overlays:e,options:n,torqueLayer:this.torqueLayer})},createLegendView:function(e){var t=[];for(var n=e.length-1;n>=0;--n){var r=e[n];if(r.legend){r.legend.data=r.legend.items;var i=r.legend;if(i.items&&i.items.length||i.template)r.legend.index=n,t.push(new cdb.geo.ui.Legend(r.legend))}r.options&&r.options.layer_definition?t=t.concat(this.createLegendView(r.options.layer_definition.layers)):r.options&&r.options.named_map&&r.options.named_map.layers&&(t=t.concat(this.createLegendView(r.options.named_map.layers)))}return t},addOverlay:function(e){e.map=this.map;var n=t.create(e.type,this,e);return n&&(e.type=="loader"&&(this.loader=n),this.mapView.addOverlay(n),this.overlays.push(n),n.bind("clean",function(){for(var e in this.overlays){var t=this.overlays[e];if(n.cid===t.cid){this.overlays.splice(e,1);return}}},this),e.type=="header"),n},_applyOptions:function(e,t){function n(t){if(!e.overlays)return null;for(var n=0;n<e.overlays.length;++n)if(e.overlays[n].type===t)return e.overlays[n]}function r(t){if(!e.overlays)return;for(var n=0;n<e.overlays.length;++n)if(e.overlays[n].type===t){e.overlays.splice(n,1);return}}t=t||{},t=_.defaults(t,{tiles_loader:!0,loaderControl:!0,infowindow:!0,tooltip:!0,time_slider:!0}),e.overlays=e.overlays||[],e.layers=e.layers||[],this.infowindow=t.infowindow,this.tooltip=t.tooltip,t.https&&(this.https=!0),this.mobile=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.mobile_enabled=t.mobile_layout&&this.mobile||t.force_mobile;if(t.force_mobile===!1||t.force_mobile==="false")this.mobile_enabled=!1;t.title||(e.title=null),t.description||(e.description=null),t.tiles_loader||r("loader"),t.loaderControl||r("loader"),!this.mobile_enabled&&t.search&&(n("search")||e.overlays.push({type:"search",order:3}));if(t.title&&e.title||t.description&&e.description)n("header")||e.overlays.unshift({type:"header",order:1,shareable:t.shareable?!0:!1,url:e.url,options:{extra:{title:e.title,description:e.description,show_title:t.title,show_description:t.description}}});t.layer_selector&&(n("layer_selector")||e.overlays.push({type:"layer_selector"})),t.shareable&&!this.mobile_enabled&&(n("share")||e.overlays.push({type:"share",order:2,url:e.url})),this.mobile_enabled&&(r("logo"),r("share")),this.mobile&&r("zoom");var i=parseInt(t.zoom);isNaN(i)||(e.zoom=i,e.bounds=null);var s=parseFloat(t.center_lat),o=parseFloat(t.center_lon);!isNaN(s)&&!isNaN(o)&&(e.center=[s,o],e.bounds=null),t.center!==undefined&&(e.center=t.center,e.bounds=null);var u=parseFloat(t.sw_lat),a=parseFloat(t.sw_lon),f=parseFloat(t.ne_lat),l=parseFloat(t.ne_lon);!isNaN(u)&&!isNaN(a)&&!isNaN(f)&&!isNaN(l)&&(e.bounds=[[u,a],[f,l]]);if(e.layers.length>1){var c=t.auth_token;for(var h=1;h<e.layers.length;++h){var p=e.layers[h].options;p.no_cdn=t.no_cdn,p.force_cors=t.force_cors,c&&(p.auth_token=c)}}},setMapPosition:function(){},createLayer:function(e,t){var r=n.create(e.type||e.kind,this,e);return this.mapView.createLayer(r)},_getSqlApi:function(e){e=e||{};var t=e.sql_api_port,n=e.sql_api_domain+(t?":"+t:""),r=e.sql_api_protocol,i="v1";n.indexOf("cartodb.com")!==-1&&(r="http",n="cartodb.com",i="v2");var s=new cartodb.SQL({user:e.user_name,protocol:r,host:n,version:i});return s},addTooltip:function(e){if(!e||!e.containTooltip||!e.containTooltip())return;for(var t=0;t<e.getLayerCount();++t){var n=e.getTooltipData(t);if(n){if(!e.tooltip){var r=new cdb.geo.ui.Tooltip({layer:e,template:n.template,position:"bottom|right",vertical_offset:10,horizontal_offset:4,fields:n.fields,omit_columns:["cartodb_id"]});e.tooltip=r,this.mapView.addOverlay(r)}e.setInteraction(t,!0)}}e.tooltip&&e.bind("featureOver",function(t,n,r,i,s){var o=e.getTooltipData(s);o?(e.tooltip.setTemplate(o.template),e.tooltip.setFields(o.fields),e.tooltip.setAlternativeNames(o.alternative_names),e.tooltip.enable()):e.tooltip.disable()})},addInfowindow:function(e){if(!e.containInfowindow||!e.containInfowindow())return;var n=this.mapView,r="featureClick",i=null;for(var s=0;s<e.getLayerCount();++s)if(e.getInfowindowData(s)){i||(i=t.create("infowindow",this,e.getInfowindowData(s),!0),n.addInfowindow(i));var o=e.getLayerNumberByIndex(s);e.setInteraction(o,!0)}if(!i)return;i.bind("close",function(){for(var t=0;t<e.getLayerCount();++t){var n=e.tooltip;n&&n.setFilter(null)}}),e.bind(r,function(t,n,r,s,o){var u=e.getInfowindowData(o);if(!u)return;var a=_.pluck(u.fields,"name"),f=s.cartodb_id;e.fetchAttributes(o,f,a,function(e){var t=_.defaults({offset:u.offset,width:u.width,maxHeight:u.maxHeight},cdb.geo.ui.InfowindowModel.prototype.defaults);i.model.set({fields:u.fields,template:u.template,template_type:u.template_type,alternative_names:u.alternative_names,offset:t.offset,width:t.width,maxHeight:t.maxHeight}),e?(i.model.updateContent(e),i.adjustPan()):i.setError()}),i.setLatLng(n).setLoading().showInfowindow(),e.tooltip&&e.tooltip.setFilter(function(e){return e.cartodb_id!==f}).hide()});var u=[];e.bind("mouseover",function(){n.setCursor("pointer")}),e.bind("mouseout",function(e,t){n.setCursor("auto")}),e.infowindow=i.model},loadLayer:function(e,t){var r=this.map,i=this.mapView,s=r.addLayer(n.create(e.type||e.kind,this,e),t),o=i.getLayerByCid(s);if(!o){this.throwError("layer can't be created",r.layers.getByCid(s));return}o&&this.infowindow&&o.containInfowindow&&o.containInfowindow()&&this.addInfowindow(o),o&&this.tooltip&&o.containTooltip&&o.containTooltip()&&this.addTooltip(o);if(o){var u=this,a=function(){u.loadingTiles(t)},f=function(){u.loadTiles(t)};o.bind("loading",a),o.bind("load",f)}return o},loadingTiles:function(){this.loader&&this.loader.show(),this.layersLoading===0&&this.trigger("loading"),this.layersLoading++},loadTiles:function(){this.loader&&this.loader.hide(),this.layersLoading--,this.layersLoading<=0&&(this.layersLoading=0,this.trigger("load"))},throwError:function(e,t){cdb.log.error(e);var n=this;_.defer(function(){n.trigger("error",e,t)})},error:function(e){return this.bind("error",e)},done:function(e){return this.bind("done",e)},getNativeMap:function(){return this.mapView.getNativeMap()},getLayers:function(){var e=this;return _.compact(this.map.layers.map(function(t){return e.mapView.getLayerByCid(t.cid)}))},getOverlays:function(){return this.overlays},getOverlay:function(e){return _(this.overlays).find(function(t){return t.type==e})},getOverlaysByType:function(e){return _(this.overlays).filter(function(t){return t.type==e})},_onResize:function(){$(window).unbind("resize",this._onResize);var e=this;e.mapView.invalidateSize(),setTimeout(function(){var t=e.mapConfig;t.view_bounds_sw?e.mapView.map.setBounds([t.view_bounds_sw,t.view_bounds_ne]):e.mapView.map.set({center:t.center,zoom:t.zoom})},150)}},{addInfowindow:function(e,t,n,r){var i=_.defaults(r||{},{infowindowTemplate:cdb.vis.INFOWINDOW_TEMPLATE.light,templateType:"mustache",triggerEvent:"featureClick",templateName:"light",extraFields:[],cursorInteraction:!0});if(!e)throw new Error("map is not valid");if(!t)throw new Error("layer is not valid");if(!n&&n.length===undefined)throw new Error("fields should be a list of strings");var s=[];n=n.concat(i.extraFields);for(var o=0;o<n.length;++o)s.push({name:n,order:o});var u=new cdb.geo.ui.InfowindowModel({fields:s,template_name:i.templateName}),a=new cdb.geo.ui.Infowindow({model:u,mapView:e.viz.mapView,template:(new cdb.core.Template({template:i.infowindowTemplate,type:i.templateType})).asFunction()});e.viz.mapView.addInfowindow(a);try{t.setInteractivity(n)}catch(f){}return t.setInteraction(!0),t.bind(i.triggerEvent,function(e,t,r,i,s){var o=[],u;for(var f=0;f<n.length;++f){var l=n[f];(u=i[l])&&o.push({title:l,value:u,index:0})}a.model.set({content:{fields:o,data:i}}),a.setLatLng(t).showInfowindow(),a.adjustPan()},a),a.bind("clean",function(){t.unbind(i.triggerEvent,null,a)}),i.cursorInteraction&&cdb.vis.Vis.addCursorInteraction(e,t),a},addCursorInteraction:function(e,t){var n=e.viz.mapView;t.bind("mouseover",function(){n.setCursor("pointer")}),t.bind("mouseout",function(e,t){n.setCursor("auto")})},removeCursorInteraction:function(e,t){var n=e.viz.mapView;t.unbind(null,null,n)}});cdb.vis.INFOWINDOW_TEMPLATE={light:['<div class="cartodb-popup">','<a href="#close" class="cartodb-popup-close-button close">x</a>','<div class="cartodb-popup-content-wrapper">','<div class="cartodb-popup-content">',"{{#content.fields}}","{{#title}}<h4>{{title}}</h4>{{/title}}","{{#value}}",'<p {{#type}}class="{{ type }}"{{/type}}>{{{ value }}}</p>',"{{/value}}","{{^value}}",'<p class="empty">null</p>',"{{/value}}","{{/content.fields}}","</div>","</div>",'<div class="cartodb-popup-tip-container"></div>',"</div>"].join("")},cdb.vis.Vis=s}(),function(){cdb.vis.Overlay.register("logo",function(e,t){}),cdb.vis.Overlay.register("mobile",function(e,t){var n=cdb.core.Template.compile(e.template||'    <div class="backdrop"></div>    <div class="cartodb-header">      <div class="content">        <a href="#" class="fullscreen"></a>        <a href="#" class="toggle"></a>        </div>      </div>    </div>    <div class="aside">    <div class="layer-container">    <div class="scrollpane"><ul class="layers"></ul></div>    </div>    </div>    <div class="cartodb-attribution"></div>    <a href="#" class="cartodb-attribution-button"></a>    <div class="torque"></div>    ',e.templateType||"mustache"),r=new cdb.geo.ui.Mobile({template:n,mapView:t.mapView,overlays:e.overlays,layerView:e.layerView,visibility_options:e.options,torqueLayer:e.torqueLayer,map:e.map});return r.render()}),cdb.vis.Overlay.register("image",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'    <div class="content">    <div class="text widget_text">{{{ content }}}</div>    </div>',e.templateType||"mustache"),i=new cdb.geo.ui.Image({model:new cdb.core.Model(n),template:r});return i.render()}),cdb.vis.Overlay.register("text",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'    <div class="content">    <div class="text widget_text">{{{ text }}}</div>    </div>',e.templateType||"mustache"),i=new cdb.geo.ui.Text({model:new cdb.core.Model(n),template:r,className:"cartodb-overlay overlay-text "+n.device});return i.render()}),cdb.vis.Overlay.register("annotation",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'    <div class="content">    <div class="text widget_text">{{{ text }}}</div>    <div class="stick"><div class="ball"></div></div>    </div>',e.templateType||"mustache"),n=e.options,i=new cdb.geo.ui.Annotation({className:"cartodb-overlay overlay-annotation "+n.device,template:r,mapView:t.mapView,device:n.device,text:n.extra.rendered_text,minZoom:n.style["min-zoom"],maxZoom:n.style["max-zoom"],latlng:n.extra.latlng,style:n.style});return i.render()}),cdb.vis.Overlay.register("zoom_info",function(e,t){}),cdb.vis.Overlay.register("header",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'    <div class="content">    <div class="title">{{{ title }}}</div>    <div class="description">{{{ description }}}</div>    </div>',e.templateType||"mustache"),i=new cdb.geo.ui.Header({model:new cdb.core.Model(n),template:r});return i.render()}),cdb.vis.Overlay.register("zoom",function(e,t){if(!e.template){t.trigger("error","zoom template is empty");return}var n=new cdb.geo.ui.Zoom({model:e.map,template:cdb.core.Template.compile(e.template)});return n.render()}),cdb.vis.Overlay.register("loader",function(e){var t=new cdb.geo.ui.TilesLoader({template:cdb.core.Template.compile(e.template)});return t.render()}),cdb.vis.Overlay.register("time_slider",function(e,t){var n=new cdb.geo.ui.TimeSlider(e);return n.render()}),cdb.vis.Overlay.register("_header",function(e,t){function i(e,t){return e.substr(0,t-1)+(e.length>t?"…":"")}var n=100;location.href?e.share_url=encodeURIComponent(location.href):e.share_url=e.url;var r=cdb.core.Template.compile(e.template||"      {{#title}}        <h1>          {{#url}}            <a href='#' onmousedown=\"window.open('{{url}}')\">{{title}}</a>          {{/url}}          {{^url}}            {{title}}          {{/url}}        </h1>      {{/title}}      {{#description}}<p>{{{description}}}</p>{{/description}}      {{#mobile_shareable}}        <div class='social'>          <a class='facebook' target='_blank'            href='http://www.facebook.com/sharer.php?u={{share_url}}&text=Map of {{title}}: {{description}}'>F</a>          <a class='twitter' href='https://twitter.com/share?url={{share_url}}&text={{twitter_title}}'           target='_blank'>T</a>        </div>      {{/mobile_shareable}}    ",e.templateType||"mustache"),s=e.map.get("title"),o=e.map.get("description"),u=s+": "+o,a;s&&o?a=i(s+": "+o,112)+" %23map ":s?a=i(s,112)+" %23map":o?a=i(o,112)+" %23map":a="%23map";var f=e.shareable=="false"||!e.shareable?null:e.shareable,l=f;l=l&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var c=new cdb.geo.ui.Header({title:s,description:o,facebook_title:u,twitter_title:a,url:e.url,share_url:e.share_url,mobile_shareable:l,shareable:f&&!l,template:r});return c.render()}),cdb.vis.Overlay.register("infowindow",function(e,t){if(_.size(e.fields)==0)return null;var n=new cdb.geo.ui.InfowindowModel({template:e.template,alternative_names:e.alternative_names,fields:e.fields,template_name:e.template_name}),r=e.templateType||"mustache",i=new cdb.geo.ui.Infowindow({model:n,mapView:t.mapView,template:(new cdb.core.Template({template:e.template,type:r})).asFunction()});return i}),cdb.vis.Overlay.register("layer_selector",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'      <a href="#/change-visibility" class="layers">Visible layers<div class="count"></div></a>      ',e.templateType||"underscore"),i=cdb.core.Template.compile(e.template||'      <ul></ul><div class="tail"><span class="border"></span></div>      '
,e.templateType||"underscore"),s=new cdb.geo.ui.LayerSelector({model:new cdb.core.Model(n),mapView:t.mapView,template:r,dropdown_template:i,layer_names:e.layer_names});return t.legends&&s.bind("change:visible",function(e,n,r){if(r.get("type")==="torque"){var i=t.getOverlay("time_slider");i&&i[e?"show":"hide"]()}if(r.get("type")==="layergroup"||r.get("type")==="torque"){var s=t.legends&&t.legends.getLegendByIndex(n);s&&s[e?"show":"hide"]()}}),s.render()}),cdb.vis.Overlay.register("fullscreen",function(e,t){var n=e.options;n.allowWheelOnFullscreen=!1;var r=cdb.core.Template.compile(e.template||'<a href="#"></a>',e.templateType||"mustache"),i=new cdb.ui.common.FullScreen({doc:"#map > div",model:new cdb.core.Model(n),mapView:t.mapView,template:r});return i.render()}),cdb.vis.Overlay.register("share",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'<a href="#"></a>',e.templateType||"mustache"),i=new cdb.geo.ui.Share({model:new cdb.core.Model(n),vis:t,map:t.map,template:r});return i.createDialog(),i.render()}),cdb.vis.Overlay.register("search",function(e,t){var n=e.options,r=cdb.core.Template.compile(e.template||'      <form>        <span class="loader"></span>        <input type="text" class="text" value="" />        <input type="submit" class="submit" value="" />      </form>    ',e.templateType||"mustache"),i=new cdb.geo.ui.Search({template:r,model:t.map});return i.render()}),cdb.vis.Overlay.register("tooltip",function(e,t){var n;if(!e.layer){var r=t.getLayers();r.length>1&&(n=r[1]),e.layer=n}if(!e.layer)throw new Error("layer is null");e.layer.setInteraction(!0);var i=new cdb.geo.ui.Tooltip(e);return i}),cdb.vis.Overlay.register("infobox",function(e,t){var n,r=t.getLayers();e.layer||(r.length>1&&(n=r[1]),e.layer=n);if(!e.layer)throw new Error("layer is null");e.layer.setInteraction(!0);var i=new cdb.geo.ui.InfoBox(e);return i})}(),function(){function n(e){for(var n in t)if(e.indexOf(n)!==-1)return e.replace(n,t[n]);return e}function r(e,t){t.infowindow&&t.infowindow.fields&&(t.interactivity?t.interactivity.indexOf("cartodb_id")===-1&&(t.interactivity=t.interactivity+",cartodb_id"):t.interactivity="cartodb_id"),e.https&&(t.tiler_protocol="https",t.tiler_port=443,t.sql_api_protocol="https",t.sql_api_port=443),t.cartodb_logo=e.cartodb_logo==undefined?t.cartodb_logo:e.cartodb_logo}var e=cdb.vis.Layers,t={"https://dnv9my2eseobd.cloudfront.net/":"http://a.tiles.mapbox.com/","https://maps.nlp.nokia.com/":"http://maps.nlp.nokia.com/","https://tile.stamen.com/":"http://tile.stamen.com/","https://{s}.maps.nlp.nokia.com/":"http://{s}.maps.nlp.nokia.com/","https://cartocdn_{s}.global.ssl.fastly.net/":"http://{s}.api.cartocdn.com/"};e.register("tilejson",function(e,t){var r=t.tiles[0];return r=e.https?r:n(r),new cdb.geo.TileLayer({urlTemplate:r})}),e.register("tiled",function(e,t){var r=t.urlTemplate;return r=e.https?r:n(r),t.urlTemplate=r,new cdb.geo.TileLayer(t)}),e.register("wms",function(e,t){return new cdb.geo.WMSLayer(t)}),e.register("gmapsbase",function(e,t){return new cdb.geo.GMapsBaseLayer(t)}),e.register("plain",function(e,t){return new cdb.geo.PlainLayer(t)}),e.register("background",function(e,t){return new cdb.geo.PlainLayer(t)});var i=function(e,t){return r(e,t),t.sublayers?(t.type="layergroup",new cdb.geo.CartoDBGroupLayer(t)):new cdb.geo.CartoDBLayer(t)};e.register("cartodb",i),e.register("carto",i),e.register("layergroup",function(e,t){return r(e,t),new cdb.geo.CartoDBGroupLayer(t)}),e.register("namedmap",function(e,t){return r(e,t),new cdb.geo.CartoDBNamedMapLayer(t)}),e.register("torque",function(e,t){return e.https&&t.sql_api_domain&&t.sql_api_domain.indexOf("cartodb.com")!==-1&&(t.sql_api_protocol="https",t.sql_api_port=443,t.tiler_protocol="https",t.tiler_port=443),t.cartodb_logo=e.cartodb_logo==undefined?t.cartodb_logo:e.cartodb_logo,new cdb.geo.TorqueLayer(t)})}(),function(){function e(){}function n(e){var t=e.host||"cartodb.com",n=e.protocol||"https";return n+"://"+e.user+"."+t+"/api/v1/viz/"+e.table+"/viz.json"}function r(e,t){var r=null;if(e.layers!==undefined||(e.kind||e.type)!==undefined){_.defer(function(){t(e)});return}e.table!==undefined&&e.user!==undefined?r=n(e):e.indexOf&&e.indexOf("http")===0&&(r=e),r?cdb.vis.Loader.get(r,t):_.defer(function(){t(null)})}_.extend(e.prototype,Backbone.Events,{done:function(e){return this.bind("done",e)},error:function(e){return this.bind("error",e)}}),cdb._Promise=e;var t={};cartodb.createLayer=function(t,n,i,s){var o=new e,u,a;i=i||{};if(t===undefined)throw new TypeError("map should be provided");if(n===undefined)throw new TypeError("layer should be provided");var f=arguments,l=f[f.length-1];return _.isFunction(l)&&(s=l),o.addTo=function(e,t){return o.on("done",function(){a.addLayerToMap(u,e,t)}),o},r(n,function(e){function c(){u=f.createLayer(n,{no_base_layer:!0});var e,r=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),a=i.mobile_layout&&r||i.force_mobile;if(!u)return o.trigger("error","layer not supported"),o;i.infowindow&&f.addInfowindow(u),i.tooltip&&f.addTooltip(u),i.legends&&f.addLegends([n],r&&i.mobile_layout||i.force_mobile),i.time_slider&&u.model.get("type")==="torque"&&(a||f.addTimeSlider(u),e=u),a&&(i.mapView=t.viz.mapView,f.addOverlay({type:"mobile",layerView:u,overlays:[],torqueLayer:e,options:i})),s&&s(u),o.trigger("done",u)}var n;if(!e){o.trigger("error");return}if(e.layers){e.layers.length<2&&o.trigger("error","visualization file does not contain layer info");var r=i.layerIndex===undefined?1:i.layerIndex;if(e.layers.length<=r){o.trigger("error","layerIndex out of bounds");return}n=e.layers[r]}else n=e;if(!n){o.trigger("error");return}i&&!_.isFunction(i)&&(n.options=n.options||{},_.extend(n.options,i)),i=_.defaults(i,{infowindow:!0,https:!1,legends:!0,time_slider:!0,tooltip:!0});if(typeof t.overlayMapTypes!="undefined")a=cdb.geo.GoogleMapsMapView;else{if(!(t instanceof L.Map||window.L&&t instanceof window.L.Map))return o.trigger("error","cartodb.js can't guess the map type"),o;a=cdb.geo.LeafletMapView}var f=t.viz;if(!f){var l=new a({map_object:t,map:new cdb.geo.Map});t.viz=f=new cdb.vis.Vis({mapView:l}),f.updated_at=e.updated_at,f.https=i.https}f.checkModules([n])?c():f.loadModules([n],function(){c()})}),o}}(),function(){function t(e){if(cartodb===this||window===this)return new t(e);if(!e.user)throw new Error("user should be provided");var n=new String(window.location.protocol);n=n.slice(0,n.length-1),n=="file"&&(n="https"),this.ajax=e.ajax||(typeof jQuery!="undefined"?jQuery.ajax:reqwest);if(!this.ajax)throw new Error("jQuery or reqwest should be loaded");this.options=_.defaults(e,{version:"v2",protocol:n,jsonp:typeof jQuery!="undefined"?!jQuery.support.cors:!1})}var e=this;e.cartodb=e.cartodb||{},t.prototype._host=function(){var e=this.options;if(e&&e.completeDomain)return e.completeDomain+"/api/"+e.version+"/sql";var t=e.host||"cartodb.com",n=e.protocol||"https";return n+"://"+e.user+"."+t+"/api/"+e.version+"/sql"},t.prototype.execute=function(e,t,n,r){var i=new cartodb._Promise;if(!e)throw new TypeError("sql should not be null");var s=arguments,o=s[s.length-1];_.isFunction(o)&&(r=o),n=_.defaults(n||{},this.options);var u={type:"get",dataType:"json",crossDomain:!0};n.cache!==undefined&&(u.cache=n.cache),n.jsonp&&(delete u.crossDomain,n.jsonpCallback&&(u.jsonpCallback=n.jsonpCallback),u.dataType="jsonp");var a="156543.03515625",f="ST_MakeEnvelope(-20037508.5,-20037508.5,20037508.5,20037508.5,3857)";e=e.replace("!bbox!",f).replace("!pixel_width!",a).replace("!pixel_height!",a);var l=Mustache.render(e,t),c="q="+encodeURIComponent(l),h=["format","dp","api_key"];n.extra_params&&(h=h.concat(n.extra_params));for(var p in h){var d=h[p],v=n[d];v&&(c+="&"+d+"="+v)}var m=n.type?n.type=="get":u.type=="get";u.url=this._host(),m?u.url+="?"+c:u.data=c;var g=n.success,y=n.error;return g&&delete n.success,y&&delete y.success,u.error=function(e){var t=e.responseText||e.response,n=t&&JSON.parse(t);i.trigger("error",n&&n.error,e),y&&y(e)},u.success=function(e,t,n){t==undefined&&(t=e.status,n=e,e=JSON.parse(e.response)),i.trigger("done",e,t,n),g&&g(e,t,n),r&&r(e)},delete n.jsonp,this.ajax(_.extend(u,n)),i},t.prototype.getBounds=function(e,t,n,r){var i=new cartodb._Promise,s=arguments,o=s[s.length-1];_.isFunction(o)&&(r=o);var u="SELECT ST_XMin(ST_Extent(the_geom)) as minx,       ST_YMin(ST_Extent(the_geom)) as miny,       ST_XMax(ST_Extent(the_geom)) as maxx,       ST_YMax(ST_Extent(the_geom)) as maxy from ({{{ sql }}}) as subq";return e=Mustache.render(e,t),this.execute(u,{sql:e},n).done(function(e){if(e.rows&&e.rows.length>0&&e.rows[0].maxx!=null){var t=e.rows[0],n=-85.0511,s=85.0511,o=-179,u=179,a=function(e,t,n){return e<t?t:e>n?n:e},f=a(t.maxx,o,u),l=a(t.minx,o,u),c=a(t.maxy,n,s),h=a(t.miny,n,s),p=[[c,f],[h,l]];i.trigger("done",p),r&&r(p)}}).error(function(e){i.trigger("error",e)}),i},t.prototype.table=function(e){function a(){a.fetch.apply(a,arguments)}var t=e,n,r=[],i,s,o,u=this;return a.fetch=function(e){e=e||{};var t=arguments,n=t[t.length-1];_.isFunction(n)&&(callback=n,t.length===1&&(e={})),u.execute(a.sql(),e,callback)},a.sql=function(){var e="select";return r.length?e+=" "+r.join(",")+" ":e+=" * ",e+="from "+t,n&&(e+=" where "+n),i&&(e+=" limit "+i),s&&(e+=" order by "+s),o&&(e+=" "+o),e},a.filter=function(e){return n=e,a},a.order_by=function(e){return s=e,a},a.asc=function(){return o="asc",a},a.desc=function(){return o="desc",a},a.columns=function(e){return r=e,a},a.limit=function(e){return i=e,a},a},e.cartodb.SQL=t}(),function(){cartodb.createVis=function(e,t,n,r){if(!e)throw new TypeError("a DOM element should be provided");var i=arguments,s=i[i.length-1];_.isFunction(s)&&(r=s),e=typeof e=="string"?document.getElementById(e):e;var o=new cartodb.vis.Vis({el:e});return t&&(o.load(t,n),r&&o.done(r)),o}}(),cdb.$=$,cdb.L=L,cdb.Mustache=Mustache,cdb.Backbone=Backbone,cdb._=_}();for(var i in __prev)__prev[i]&&(window[i]=__prev[i])})();
/*!

 handlebars v3.0.3

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _runtime = __webpack_require__(1);

	var _runtime2 = _interopRequireWildcard(_runtime);

	// Compiler imports

	var _AST = __webpack_require__(2);

	var _AST2 = _interopRequireWildcard(_AST);

	var _Parser$parse = __webpack_require__(3);

	var _Compiler$compile$precompile = __webpack_require__(4);

	var _JavaScriptCompiler = __webpack_require__(5);

	var _JavaScriptCompiler2 = _interopRequireWildcard(_JavaScriptCompiler);

	var _Visitor = __webpack_require__(6);

	var _Visitor2 = _interopRequireWildcard(_Visitor);

	var _noConflict = __webpack_require__(7);

	var _noConflict2 = _interopRequireWildcard(_noConflict);

	var _create = _runtime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _Compiler$compile$precompile.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _Compiler$compile$precompile.precompile(input, options, hb);
	  };

	  hb.AST = _AST2['default'];
	  hb.Compiler = _Compiler$compile$precompile.Compiler;
	  hb.JavaScriptCompiler = _JavaScriptCompiler2['default'];
	  hb.Parser = _Parser$parse.parser;
	  hb.parse = _Parser$parse.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_noConflict2['default'](inst);

	inst.Visitor = _Visitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _import = __webpack_require__(9);

	var base = _interopRequireWildcard(_import);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _SafeString = __webpack_require__(10);

	var _SafeString2 = _interopRequireWildcard(_SafeString);

	var _Exception = __webpack_require__(11);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var _import2 = __webpack_require__(12);

	var Utils = _interopRequireWildcard(_import2);

	var _import3 = __webpack_require__(13);

	var runtime = _interopRequireWildcard(_import3);

	var _noConflict = __webpack_require__(7);

	var _noConflict2 = _interopRequireWildcard(_noConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _SafeString2['default'];
	  hb.Exception = _Exception2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_noConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  Program: function Program(statements, blockParams, strip, locInfo) {
	    this.loc = locInfo;
	    this.type = 'Program';
	    this.body = statements;

	    this.blockParams = blockParams;
	    this.strip = strip;
	  },

	  MustacheStatement: function MustacheStatement(path, params, hash, escaped, strip, locInfo) {
	    this.loc = locInfo;
	    this.type = 'MustacheStatement';

	    this.path = path;
	    this.params = params || [];
	    this.hash = hash;
	    this.escaped = escaped;

	    this.strip = strip;
	  },

	  BlockStatement: function BlockStatement(path, params, hash, program, inverse, openStrip, inverseStrip, closeStrip, locInfo) {
	    this.loc = locInfo;
	    this.type = 'BlockStatement';

	    this.path = path;
	    this.params = params || [];
	    this.hash = hash;
	    this.program = program;
	    this.inverse = inverse;

	    this.openStrip = openStrip;
	    this.inverseStrip = inverseStrip;
	    this.closeStrip = closeStrip;
	  },

	  PartialStatement: function PartialStatement(name, params, hash, strip, locInfo) {
	    this.loc = locInfo;
	    this.type = 'PartialStatement';

	    this.name = name;
	    this.params = params || [];
	    this.hash = hash;

	    this.indent = '';
	    this.strip = strip;
	  },

	  ContentStatement: function ContentStatement(string, locInfo) {
	    this.loc = locInfo;
	    this.type = 'ContentStatement';
	    this.original = this.value = string;
	  },

	  CommentStatement: function CommentStatement(comment, strip, locInfo) {
	    this.loc = locInfo;
	    this.type = 'CommentStatement';
	    this.value = comment;

	    this.strip = strip;
	  },

	  SubExpression: function SubExpression(path, params, hash, locInfo) {
	    this.loc = locInfo;

	    this.type = 'SubExpression';
	    this.path = path;
	    this.params = params || [];
	    this.hash = hash;
	  },

	  PathExpression: function PathExpression(data, depth, parts, original, locInfo) {
	    this.loc = locInfo;
	    this.type = 'PathExpression';

	    this.data = data;
	    this.original = original;
	    this.parts = parts;
	    this.depth = depth;
	  },

	  StringLiteral: function StringLiteral(string, locInfo) {
	    this.loc = locInfo;
	    this.type = 'StringLiteral';
	    this.original = this.value = string;
	  },

	  NumberLiteral: function NumberLiteral(number, locInfo) {
	    this.loc = locInfo;
	    this.type = 'NumberLiteral';
	    this.original = this.value = Number(number);
	  },

	  BooleanLiteral: function BooleanLiteral(bool, locInfo) {
	    this.loc = locInfo;
	    this.type = 'BooleanLiteral';
	    this.original = this.value = bool === 'true';
	  },

	  UndefinedLiteral: function UndefinedLiteral(locInfo) {
	    this.loc = locInfo;
	    this.type = 'UndefinedLiteral';
	    this.original = this.value = undefined;
	  },

	  NullLiteral: function NullLiteral(locInfo) {
	    this.loc = locInfo;
	    this.type = 'NullLiteral';
	    this.original = this.value = null;
	  },

	  Hash: function Hash(pairs, locInfo) {
	    this.loc = locInfo;
	    this.type = 'Hash';
	    this.pairs = pairs;
	  },
	  HashPair: function HashPair(key, value, locInfo) {
	    this.loc = locInfo;
	    this.type = 'HashPair';
	    this.key = key;
	    this.value = value;
	  },

	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return !!(node.type === 'SubExpression' || node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return /^\.|this\b/.test(path.original);
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(14);

	var _parser2 = _interopRequireWildcard(_parser);

	var _AST = __webpack_require__(2);

	var _AST2 = _interopRequireWildcard(_AST);

	var _WhitespaceControl = __webpack_require__(15);

	var _WhitespaceControl2 = _interopRequireWildcard(_WhitespaceControl);

	var _import = __webpack_require__(16);

	var Helpers = _interopRequireWildcard(_import);

	var _extend = __webpack_require__(12);

	exports.parser = _parser2['default'];

	var yy = {};
	_extend.extend(yy, Helpers, _AST2['default']);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _WhitespaceControl2['default']();
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _Exception = __webpack_require__(11);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var _isArray$indexOf = __webpack_require__(12);

	var _AST = __webpack_require__(2);

	var _AST2 = _interopRequireWildcard(_AST);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      helperMissing: true,
	      blockHelperMissing: true,
	      each: true,
	      'if': true,
	      unless: true,
	      'with': true,
	      log: true,
	      lookup: true
	    };
	    if (knownHelpers) {
	      for (var _name in knownHelpers) {
	        if (_name in knownHelpers) {
	          options.knownHelpers[_name] = knownHelpers[_name];
	        }
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _Exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      params.push({ type: 'PathExpression', parts: [], depth: 0 });
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, undefined, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache); // eslint-disable-line new-cap

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    this.accept(sexpr.path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _Exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _AST2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _AST2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _AST2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _AST2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_AST2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^\.\//g, '').replace(/^\.$/g, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _isArray$indexOf.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _Exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, _x, env) {
	  var options = arguments[1] === undefined ? {} : arguments[1];

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _Exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_isArray$indexOf.isArray(a) && _isArray$indexOf.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = new _AST2['default'].PathExpression(false, 0, [literal.original + ''], literal.original + '', literal.loc);
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _COMPILER_REVISION$REVISION_CHANGES = __webpack_require__(9);

	var _Exception = __webpack_require__(11);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var _isArray = __webpack_require__(12);

	var _CodeGen = __webpack_require__(17);

	var _CodeGen2 = _interopRequireWildcard(_CodeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[\'', name, '\']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('this.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _COMPILER_REVISION$REVISION_CHANGES.COMPILER_REVISION,
	        versions = _COMPILER_REVISION$REVISION_CHANGES.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_isArray.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _Exception2['default']('Compile completed with content left on stack');
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };
	      var programs = this.context.programs;
	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _CodeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer('\'\'', undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('this.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('this.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy) {
	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /*eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /*eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('this.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params, false);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('this.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var index = this.matchExistingProgram(child);

	      if (index == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	      } else {
	        child.index = index;
	        child.name = 'program' + index;

	        this.useDepths = this.useDepths || child.useDepths;
	        this.useBlockParams = this.useBlockParams || child.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return i;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'this.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _Exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _Exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [this.contextName(0)].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        param = undefined;

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'this.noop';
	      options.inverse = inverse || 'this.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params, true);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else {
	      params.push(options);
	      return '';
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('this.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _Exception = __webpack_require__(11);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var _AST = __webpack_require__(2);

	var _AST2 = _interopRequireWildcard(_AST);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check:
	      if (value && (!value.type || !_AST2['default'][value.type])) {
	        throw new _Exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _Exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.acceptRequired(mustache, 'path');
	    this.acceptArray(mustache.params);
	    this.acceptKey(mustache, 'hash');
	  },

	  BlockStatement: function BlockStatement(block) {
	    this.acceptRequired(block, 'path');
	    this.acceptArray(block.params);
	    this.acceptKey(block, 'hash');

	    this.acceptKey(block, 'program');
	    this.acceptKey(block, 'inverse');
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.acceptRequired(partial, 'name');
	    this.acceptArray(partial.params);
	    this.acceptKey(partial, 'hash');
	  },

	  ContentStatement: function ContentStatement() {},
	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    this.acceptRequired(sexpr, 'path');
	    this.acceptArray(sexpr.params);
	    this.acceptKey(sexpr, 'hash');
	  },

	  PathExpression: function PathExpression() {},

	  StringLiteral: function StringLiteral() {},
	  NumberLiteral: function NumberLiteral() {},
	  BooleanLiteral: function BooleanLiteral() {},
	  UndefinedLiteral: function UndefinedLiteral() {},
	  NullLiteral: function NullLiteral() {},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	exports['default'] = Visitor;
	module.exports = exports['default'];
	/* content */ /* comment */ /* path */ /* string */ /* number */ /* bool */ /* literal */ /* literal */

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;
	/*global window */

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	exports.createFrame = createFrame;

	var _import = __webpack_require__(12);

	var Utils = _interopRequireWildcard(_import);

	var _Exception = __webpack_require__(11);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var VERSION = '3.0.1';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 6;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var isArray = Utils.isArray,
	    isFunction = Utils.isFunction,
	    toString = Utils.toString,
	    objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};

	  registerDefaultHelpers(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: logger,
	  log: log,

	  registerHelper: function registerHelper(name, fn) {
	    if (toString.call(name) === objectType) {
	      if (fn) {
	        throw new _Exception2['default']('Arg not supported with multiple helpers');
	      }
	      Utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (toString.call(name) === objectType) {
	      Utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _Exception2['default']('Attempting to register a partial as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  }
	};

	function registerDefaultHelpers(instance) {
	  instance.registerHelper('helperMissing', function () {
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} constuct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _Exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });

	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });

	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _Exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: Utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });

	  instance.registerHelper('if', function (conditional, options) {
	    if (isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || Utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });

	  instance.registerHelper('with', function (context, options) {
	    if (isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!Utils.isEmpty(context)) {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
	        options = { data: data };
	      }

	      return fn(context, options);
	    } else {
	      return options.inverse(this);
	    }
	  });

	  instance.registerHelper('log', function (message, options) {
	    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
	    instance.log(level, message);
	  });

	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	}

	var logger = {
	  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

	  // State enum
	  DEBUG: 0,
	  INFO: 1,
	  WARN: 2,
	  ERROR: 3,
	  level: 1,

	  // Can be overridden in the host environment
	  log: function log(level, message) {
	    if (typeof console !== 'undefined' && logger.level <= level) {
	      var method = logger.methodMap[level];
	      (console[method] || console.log).call(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports.logger = logger;
	var log = logger.log;

	exports.log = log;

	function createFrame(object) {
	  var frame = Utils.extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	/* [args, ]options */

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// Build out our basic SafeString type
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;

	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  '\'': '&#x27;',
	  '`': '&#x60;'
	};

	var badChars = /[&<>"'`]/g,
	    possible = /[&<>"'`]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/*eslint-disable func-style, no-var */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	var isFunction;
	exports.isFunction = isFunction;
	/*eslint-enable func-style, no-var */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};exports.isArray = isArray;

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;

	// TODO: Remove this line and break up compilePartial

	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _import = __webpack_require__(12);

	var Utils = _interopRequireWildcard(_import);

	var _Exception = __webpack_require__(11);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var _COMPILER_REVISION$REVISION_CHANGES$createFrame = __webpack_require__(9);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[currentRevision],
	          compilerVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[compilerRevision];
	      throw new _Exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _Exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _Exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _Exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _Exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _Exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      return templateSpec[i];
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      depths = options.depths ? [context].concat(options.depths) : [context];
	    }

	    return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _Exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _Exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];

	    return fn.call(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), depths && [context].concat(depths));
	  }
	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    partial = options.partials[options.name];
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;

	  if (partial === undefined) {
	    throw new _Exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	/* istanbul ignore next */
	/* Jison generated parser */
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, content: 12, COMMENT: 13, CONTENT: 14, openRawBlock: 15, END_RAW_BLOCK: 16, OPEN_RAW_BLOCK: 17, helperName: 18, openRawBlock_repetition0: 19, openRawBlock_option0: 20, CLOSE_RAW_BLOCK: 21, openBlock: 22, block_option0: 23, closeBlock: 24, openInverse: 25, block_option1: 26, OPEN_BLOCK: 27, openBlock_repetition0: 28, openBlock_option0: 29, openBlock_option1: 30, CLOSE: 31, OPEN_INVERSE: 32, openInverse_repetition0: 33, openInverse_option0: 34, openInverse_option1: 35, openInverseChain: 36, OPEN_INVERSE_CHAIN: 37, openInverseChain_repetition0: 38, openInverseChain_option0: 39, openInverseChain_option1: 40, inverseAndProgram: 41, INVERSE: 42, inverseChain: 43, inverseChain_option0: 44, OPEN_ENDBLOCK: 45, OPEN: 46, mustache_repetition0: 47, mustache_option0: 48, OPEN_UNESCAPED: 49, mustache_repetition1: 50, mustache_option1: 51, CLOSE_UNESCAPED: 52, OPEN_PARTIAL: 53, partialName: 54, partial_repetition0: 55, partial_option0: 56, param: 57, sexpr: 58, OPEN_SEXPR: 59, sexpr_repetition0: 60, sexpr_option0: 61, CLOSE_SEXPR: 62, hash: 63, hash_repetition_plus0: 64, hashSegment: 65, ID: 66, EQUALS: 67, blockParams: 68, OPEN_BLOCK_PARAMS: 69, blockParams_repetition_plus0: 70, CLOSE_BLOCK_PARAMS: 71, path: 72, dataName: 73, STRING: 74, NUMBER: 75, BOOLEAN: 76, UNDEFINED: 77, NULL: 78, DATA: 79, pathSegments: 80, SEP: 81, $accept: 0, $end: 1 },
	        terminals_: { 2: "error", 5: "EOF", 13: "COMMENT", 14: "CONTENT", 16: "END_RAW_BLOCK", 17: "OPEN_RAW_BLOCK", 21: "CLOSE_RAW_BLOCK", 27: "OPEN_BLOCK", 31: "CLOSE", 32: "OPEN_INVERSE", 37: "OPEN_INVERSE_CHAIN", 42: "INVERSE", 45: "OPEN_ENDBLOCK", 46: "OPEN", 49: "OPEN_UNESCAPED", 52: "CLOSE_UNESCAPED", 53: "OPEN_PARTIAL", 59: "OPEN_SEXPR", 62: "CLOSE_SEXPR", 66: "ID", 67: "EQUALS", 69: "OPEN_BLOCK_PARAMS", 71: "CLOSE_BLOCK_PARAMS", 74: "STRING", 75: "NUMBER", 76: "BOOLEAN", 77: "UNDEFINED", 78: "NULL", 79: "DATA", 81: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [12, 1], [10, 3], [15, 5], [9, 4], [9, 4], [22, 6], [25, 6], [36, 6], [41, 2], [43, 3], [43, 1], [24, 3], [8, 5], [8, 5], [11, 5], [57, 1], [57, 1], [58, 5], [63, 1], [65, 3], [68, 3], [18, 1], [18, 1], [18, 1], [18, 1], [18, 1], [18, 1], [18, 1], [54, 1], [54, 1], [73, 2], [72, 1], [80, 3], [80, 1], [6, 0], [6, 2], [19, 0], [19, 2], [20, 0], [20, 1], [23, 0], [23, 1], [26, 0], [26, 1], [28, 0], [28, 2], [29, 0], [29, 1], [30, 0], [30, 1], [33, 0], [33, 2], [34, 0], [34, 1], [35, 0], [35, 1], [38, 0], [38, 2], [39, 0], [39, 1], [40, 0], [40, 1], [44, 0], [44, 1], [47, 0], [47, 2], [48, 0], [48, 1], [50, 0], [50, 2], [51, 0], [51, 1], [55, 0], [55, 2], [56, 0], [56, 1], [60, 0], [60, 2], [61, 0], [61, 1], [64, 1], [64, 2], [70, 1], [70, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = new yy.Program($$[$0], null, {}, yy.locInfo(this._$));
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = new yy.CommentStatement(yy.stripComment($$[$0]), yy.stripFlags($$[$0], $$[$0]), yy.locInfo(this._$));
	                    break;
	                case 9:
	                    this.$ = new yy.ContentStatement($$[$0], yy.locInfo(this._$));
	                    break;
	                case 10:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 11:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 12:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 14:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 15:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 18:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = new yy.Program([inverse], null, {}, yy.locInfo(this._$));
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 19:
	                    this.$ = $$[$0];
	                    break;
	                case 20:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 21:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = new yy.PartialStatement($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], yy.stripFlags($$[$0 - 4], $$[$0]), yy.locInfo(this._$));
	                    break;
	                case 24:
	                    this.$ = $$[$0];
	                    break;
	                case 25:
	                    this.$ = $$[$0];
	                    break;
	                case 26:
	                    this.$ = new yy.SubExpression($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], yy.locInfo(this._$));
	                    break;
	                case 27:
	                    this.$ = new yy.Hash($$[$0], yy.locInfo(this._$));
	                    break;
	                case 28:
	                    this.$ = new yy.HashPair(yy.id($$[$0 - 2]), $$[$0], yy.locInfo(this._$));
	                    break;
	                case 29:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 30:
	                    this.$ = $$[$0];
	                    break;
	                case 31:
	                    this.$ = $$[$0];
	                    break;
	                case 32:
	                    this.$ = new yy.StringLiteral($$[$0], yy.locInfo(this._$));
	                    break;
	                case 33:
	                    this.$ = new yy.NumberLiteral($$[$0], yy.locInfo(this._$));
	                    break;
	                case 34:
	                    this.$ = new yy.BooleanLiteral($$[$0], yy.locInfo(this._$));
	                    break;
	                case 35:
	                    this.$ = new yy.UndefinedLiteral(yy.locInfo(this._$));
	                    break;
	                case 36:
	                    this.$ = new yy.NullLiteral(yy.locInfo(this._$));
	                    break;
	                case 37:
	                    this.$ = $$[$0];
	                    break;
	                case 38:
	                    this.$ = $$[$0];
	                    break;
	                case 39:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 40:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 41:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 42:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 43:
	                    this.$ = [];
	                    break;
	                case 44:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 45:
	                    this.$ = [];
	                    break;
	                case 46:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 53:
	                    this.$ = [];
	                    break;
	                case 54:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 59:
	                    this.$ = [];
	                    break;
	                case 60:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 65:
	                    this.$ = [];
	                    break;
	                case 66:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 73:
	                    this.$ = [];
	                    break;
	                case 74:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 77:
	                    this.$ = [];
	                    break;
	                case 78:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 81:
	                    this.$ = [];
	                    break;
	                case 82:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 85:
	                    this.$ = [];
	                    break;
	                case 86:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 89:
	                    this.$ = [$$[$0]];
	                    break;
	                case 90:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 91:
	                    this.$ = [$$[$0]];
	                    break;
	                case 92:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 43], 6: 3, 13: [2, 43], 14: [2, 43], 17: [2, 43], 27: [2, 43], 32: [2, 43], 46: [2, 43], 49: [2, 43], 53: [2, 43] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: [1, 11], 14: [1, 18], 15: 16, 17: [1, 21], 22: 14, 25: 15, 27: [1, 19], 32: [1, 20], 37: [2, 2], 42: [2, 2], 45: [2, 2], 46: [1, 12], 49: [1, 13], 53: [1, 17] }, { 1: [2, 1] }, { 5: [2, 44], 13: [2, 44], 14: [2, 44], 17: [2, 44], 27: [2, 44], 32: [2, 44], 37: [2, 44], 42: [2, 44], 45: [2, 44], 46: [2, 44], 49: [2, 44], 53: [2, 44] }, { 5: [2, 3], 13: [2, 3], 14: [2, 3], 17: [2, 3], 27: [2, 3], 32: [2, 3], 37: [2, 3], 42: [2, 3], 45: [2, 3], 46: [2, 3], 49: [2, 3], 53: [2, 3] }, { 5: [2, 4], 13: [2, 4], 14: [2, 4], 17: [2, 4], 27: [2, 4], 32: [2, 4], 37: [2, 4], 42: [2, 4], 45: [2, 4], 46: [2, 4], 49: [2, 4], 53: [2, 4] }, { 5: [2, 5], 13: [2, 5], 14: [2, 5], 17: [2, 5], 27: [2, 5], 32: [2, 5], 37: [2, 5], 42: [2, 5], 45: [2, 5], 46: [2, 5], 49: [2, 5], 53: [2, 5] }, { 5: [2, 6], 13: [2, 6], 14: [2, 6], 17: [2, 6], 27: [2, 6], 32: [2, 6], 37: [2, 6], 42: [2, 6], 45: [2, 6], 46: [2, 6], 49: [2, 6], 53: [2, 6] }, { 5: [2, 7], 13: [2, 7], 14: [2, 7], 17: [2, 7], 27: [2, 7], 32: [2, 7], 37: [2, 7], 42: [2, 7], 45: [2, 7], 46: [2, 7], 49: [2, 7], 53: [2, 7] }, { 5: [2, 8], 13: [2, 8], 14: [2, 8], 17: [2, 8], 27: [2, 8], 32: [2, 8], 37: [2, 8], 42: [2, 8], 45: [2, 8], 46: [2, 8], 49: [2, 8], 53: [2, 8] }, { 18: 22, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 18: 33, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 4: 34, 6: 3, 13: [2, 43], 14: [2, 43], 17: [2, 43], 27: [2, 43], 32: [2, 43], 37: [2, 43], 42: [2, 43], 45: [2, 43], 46: [2, 43], 49: [2, 43], 53: [2, 43] }, { 4: 35, 6: 3, 13: [2, 43], 14: [2, 43], 17: [2, 43], 27: [2, 43], 32: [2, 43], 42: [2, 43], 45: [2, 43], 46: [2, 43], 49: [2, 43], 53: [2, 43] }, { 12: 36, 14: [1, 18] }, { 18: 38, 54: 37, 58: 39, 59: [1, 40], 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 5: [2, 9], 13: [2, 9], 14: [2, 9], 16: [2, 9], 17: [2, 9], 27: [2, 9], 32: [2, 9], 37: [2, 9], 42: [2, 9], 45: [2, 9], 46: [2, 9], 49: [2, 9], 53: [2, 9] }, { 18: 41, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 18: 42, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 18: 43, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 31: [2, 73], 47: 44, 59: [2, 73], 66: [2, 73], 74: [2, 73], 75: [2, 73], 76: [2, 73], 77: [2, 73], 78: [2, 73], 79: [2, 73] }, { 21: [2, 30], 31: [2, 30], 52: [2, 30], 59: [2, 30], 62: [2, 30], 66: [2, 30], 69: [2, 30], 74: [2, 30], 75: [2, 30], 76: [2, 30], 77: [2, 30], 78: [2, 30], 79: [2, 30] }, { 21: [2, 31], 31: [2, 31], 52: [2, 31], 59: [2, 31], 62: [2, 31], 66: [2, 31], 69: [2, 31], 74: [2, 31], 75: [2, 31], 76: [2, 31], 77: [2, 31], 78: [2, 31], 79: [2, 31] }, { 21: [2, 32], 31: [2, 32], 52: [2, 32], 59: [2, 32], 62: [2, 32], 66: [2, 32], 69: [2, 32], 74: [2, 32], 75: [2, 32], 76: [2, 32], 77: [2, 32], 78: [2, 32], 79: [2, 32] }, { 21: [2, 33], 31: [2, 33], 52: [2, 33], 59: [2, 33], 62: [2, 33], 66: [2, 33], 69: [2, 33], 74: [2, 33], 75: [2, 33], 76: [2, 33], 77: [2, 33], 78: [2, 33], 79: [2, 33] }, { 21: [2, 34], 31: [2, 34], 52: [2, 34], 59: [2, 34], 62: [2, 34], 66: [2, 34], 69: [2, 34], 74: [2, 34], 75: [2, 34], 76: [2, 34], 77: [2, 34], 78: [2, 34], 79: [2, 34] }, { 21: [2, 35], 31: [2, 35], 52: [2, 35], 59: [2, 35], 62: [2, 35], 66: [2, 35], 69: [2, 35], 74: [2, 35], 75: [2, 35], 76: [2, 35], 77: [2, 35], 78: [2, 35], 79: [2, 35] }, { 21: [2, 36], 31: [2, 36], 52: [2, 36], 59: [2, 36], 62: [2, 36], 66: [2, 36], 69: [2, 36], 74: [2, 36], 75: [2, 36], 76: [2, 36], 77: [2, 36], 78: [2, 36], 79: [2, 36] }, { 21: [2, 40], 31: [2, 40], 52: [2, 40], 59: [2, 40], 62: [2, 40], 66: [2, 40], 69: [2, 40], 74: [2, 40], 75: [2, 40], 76: [2, 40], 77: [2, 40], 78: [2, 40], 79: [2, 40], 81: [1, 45] }, { 66: [1, 32], 80: 46 }, { 21: [2, 42], 31: [2, 42], 52: [2, 42], 59: [2, 42], 62: [2, 42], 66: [2, 42], 69: [2, 42], 74: [2, 42], 75: [2, 42], 76: [2, 42], 77: [2, 42], 78: [2, 42], 79: [2, 42], 81: [2, 42] }, { 50: 47, 52: [2, 77], 59: [2, 77], 66: [2, 77], 74: [2, 77], 75: [2, 77], 76: [2, 77], 77: [2, 77], 78: [2, 77], 79: [2, 77] }, { 23: 48, 36: 50, 37: [1, 52], 41: 51, 42: [1, 53], 43: 49, 45: [2, 49] }, { 26: 54, 41: 55, 42: [1, 53], 45: [2, 51] }, { 16: [1, 56] }, { 31: [2, 81], 55: 57, 59: [2, 81], 66: [2, 81], 74: [2, 81], 75: [2, 81], 76: [2, 81], 77: [2, 81], 78: [2, 81], 79: [2, 81] }, { 31: [2, 37], 59: [2, 37], 66: [2, 37], 74: [2, 37], 75: [2, 37], 76: [2, 37], 77: [2, 37], 78: [2, 37], 79: [2, 37] }, { 31: [2, 38], 59: [2, 38], 66: [2, 38], 74: [2, 38], 75: [2, 38], 76: [2, 38], 77: [2, 38], 78: [2, 38], 79: [2, 38] }, { 18: 58, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 28: 59, 31: [2, 53], 59: [2, 53], 66: [2, 53], 69: [2, 53], 74: [2, 53], 75: [2, 53], 76: [2, 53], 77: [2, 53], 78: [2, 53], 79: [2, 53] }, { 31: [2, 59], 33: 60, 59: [2, 59], 66: [2, 59], 69: [2, 59], 74: [2, 59], 75: [2, 59], 76: [2, 59], 77: [2, 59], 78: [2, 59], 79: [2, 59] }, { 19: 61, 21: [2, 45], 59: [2, 45], 66: [2, 45], 74: [2, 45], 75: [2, 45], 76: [2, 45], 77: [2, 45], 78: [2, 45], 79: [2, 45] }, { 18: 65, 31: [2, 75], 48: 62, 57: 63, 58: 66, 59: [1, 40], 63: 64, 64: 67, 65: 68, 66: [1, 69], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 66: [1, 70] }, { 21: [2, 39], 31: [2, 39], 52: [2, 39], 59: [2, 39], 62: [2, 39], 66: [2, 39], 69: [2, 39], 74: [2, 39], 75: [2, 39], 76: [2, 39], 77: [2, 39], 78: [2, 39], 79: [2, 39], 81: [1, 45] }, { 18: 65, 51: 71, 52: [2, 79], 57: 72, 58: 66, 59: [1, 40], 63: 73, 64: 67, 65: 68, 66: [1, 69], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 24: 74, 45: [1, 75] }, { 45: [2, 50] }, { 4: 76, 6: 3, 13: [2, 43], 14: [2, 43], 17: [2, 43], 27: [2, 43], 32: [2, 43], 37: [2, 43], 42: [2, 43], 45: [2, 43], 46: [2, 43], 49: [2, 43], 53: [2, 43] }, { 45: [2, 19] }, { 18: 77, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 4: 78, 6: 3, 13: [2, 43], 14: [2, 43], 17: [2, 43], 27: [2, 43], 32: [2, 43], 45: [2, 43], 46: [2, 43], 49: [2, 43], 53: [2, 43] }, { 24: 79, 45: [1, 75] }, { 45: [2, 52] }, { 5: [2, 10], 13: [2, 10], 14: [2, 10], 17: [2, 10], 27: [2, 10], 32: [2, 10], 37: [2, 10], 42: [2, 10], 45: [2, 10], 46: [2, 10], 49: [2, 10], 53: [2, 10] }, { 18: 65, 31: [2, 83], 56: 80, 57: 81, 58: 66, 59: [1, 40], 63: 82, 64: 67, 65: 68, 66: [1, 69], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 59: [2, 85], 60: 83, 62: [2, 85], 66: [2, 85], 74: [2, 85], 75: [2, 85], 76: [2, 85], 77: [2, 85], 78: [2, 85], 79: [2, 85] }, { 18: 65, 29: 84, 31: [2, 55], 57: 85, 58: 66, 59: [1, 40], 63: 86, 64: 67, 65: 68, 66: [1, 69], 69: [2, 55], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 18: 65, 31: [2, 61], 34: 87, 57: 88, 58: 66, 59: [1, 40], 63: 89, 64: 67, 65: 68, 66: [1, 69], 69: [2, 61], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 18: 65, 20: 90, 21: [2, 47], 57: 91, 58: 66, 59: [1, 40], 63: 92, 64: 67, 65: 68, 66: [1, 69], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 31: [1, 93] }, { 31: [2, 74], 59: [2, 74], 66: [2, 74], 74: [2, 74], 75: [2, 74], 76: [2, 74], 77: [2, 74], 78: [2, 74], 79: [2, 74] }, { 31: [2, 76] }, { 21: [2, 24], 31: [2, 24], 52: [2, 24], 59: [2, 24], 62: [2, 24], 66: [2, 24], 69: [2, 24], 74: [2, 24], 75: [2, 24], 76: [2, 24], 77: [2, 24], 78: [2, 24], 79: [2, 24] }, { 21: [2, 25], 31: [2, 25], 52: [2, 25], 59: [2, 25], 62: [2, 25], 66: [2, 25], 69: [2, 25], 74: [2, 25], 75: [2, 25], 76: [2, 25], 77: [2, 25], 78: [2, 25], 79: [2, 25] }, { 21: [2, 27], 31: [2, 27], 52: [2, 27], 62: [2, 27], 65: 94, 66: [1, 95], 69: [2, 27] }, { 21: [2, 89], 31: [2, 89], 52: [2, 89], 62: [2, 89], 66: [2, 89], 69: [2, 89] }, { 21: [2, 42], 31: [2, 42], 52: [2, 42], 59: [2, 42], 62: [2, 42], 66: [2, 42], 67: [1, 96], 69: [2, 42], 74: [2, 42], 75: [2, 42], 76: [2, 42], 77: [2, 42], 78: [2, 42], 79: [2, 42], 81: [2, 42] }, { 21: [2, 41], 31: [2, 41], 52: [2, 41], 59: [2, 41], 62: [2, 41], 66: [2, 41], 69: [2, 41], 74: [2, 41], 75: [2, 41], 76: [2, 41], 77: [2, 41], 78: [2, 41], 79: [2, 41], 81: [2, 41] }, { 52: [1, 97] }, { 52: [2, 78], 59: [2, 78], 66: [2, 78], 74: [2, 78], 75: [2, 78], 76: [2, 78], 77: [2, 78], 78: [2, 78], 79: [2, 78] }, { 52: [2, 80] }, { 5: [2, 12], 13: [2, 12], 14: [2, 12], 17: [2, 12], 27: [2, 12], 32: [2, 12], 37: [2, 12], 42: [2, 12], 45: [2, 12], 46: [2, 12], 49: [2, 12], 53: [2, 12] }, { 18: 98, 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 36: 50, 37: [1, 52], 41: 51, 42: [1, 53], 43: 100, 44: 99, 45: [2, 71] }, { 31: [2, 65], 38: 101, 59: [2, 65], 66: [2, 65], 69: [2, 65], 74: [2, 65], 75: [2, 65], 76: [2, 65], 77: [2, 65], 78: [2, 65], 79: [2, 65] }, { 45: [2, 17] }, { 5: [2, 13], 13: [2, 13], 14: [2, 13], 17: [2, 13], 27: [2, 13], 32: [2, 13], 37: [2, 13], 42: [2, 13], 45: [2, 13], 46: [2, 13], 49: [2, 13], 53: [2, 13] }, { 31: [1, 102] }, { 31: [2, 82], 59: [2, 82], 66: [2, 82], 74: [2, 82], 75: [2, 82], 76: [2, 82], 77: [2, 82], 78: [2, 82], 79: [2, 82] }, { 31: [2, 84] }, { 18: 65, 57: 104, 58: 66, 59: [1, 40], 61: 103, 62: [2, 87], 63: 105, 64: 67, 65: 68, 66: [1, 69], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 30: 106, 31: [2, 57], 68: 107, 69: [1, 108] }, { 31: [2, 54], 59: [2, 54], 66: [2, 54], 69: [2, 54], 74: [2, 54], 75: [2, 54], 76: [2, 54], 77: [2, 54], 78: [2, 54], 79: [2, 54] }, { 31: [2, 56], 69: [2, 56] }, { 31: [2, 63], 35: 109, 68: 110, 69: [1, 108] }, { 31: [2, 60], 59: [2, 60], 66: [2, 60], 69: [2, 60], 74: [2, 60], 75: [2, 60], 76: [2, 60], 77: [2, 60], 78: [2, 60], 79: [2, 60] }, { 31: [2, 62], 69: [2, 62] }, { 21: [1, 111] }, { 21: [2, 46], 59: [2, 46], 66: [2, 46], 74: [2, 46], 75: [2, 46], 76: [2, 46], 77: [2, 46], 78: [2, 46], 79: [2, 46] }, { 21: [2, 48] }, { 5: [2, 21], 13: [2, 21], 14: [2, 21], 17: [2, 21], 27: [2, 21], 32: [2, 21], 37: [2, 21], 42: [2, 21], 45: [2, 21], 46: [2, 21], 49: [2, 21], 53: [2, 21] }, { 21: [2, 90], 31: [2, 90], 52: [2, 90], 62: [2, 90], 66: [2, 90], 69: [2, 90] }, { 67: [1, 96] }, { 18: 65, 57: 112, 58: 66, 59: [1, 40], 66: [1, 32], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 5: [2, 22], 13: [2, 22], 14: [2, 22], 17: [2, 22], 27: [2, 22], 32: [2, 22], 37: [2, 22], 42: [2, 22], 45: [2, 22], 46: [2, 22], 49: [2, 22], 53: [2, 22] }, { 31: [1, 113] }, { 45: [2, 18] }, { 45: [2, 72] }, { 18: 65, 31: [2, 67], 39: 114, 57: 115, 58: 66, 59: [1, 40], 63: 116, 64: 67, 65: 68, 66: [1, 69], 69: [2, 67], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 28], 78: [1, 29], 79: [1, 31], 80: 30 }, { 5: [2, 23], 13: [2, 23], 14: [2, 23], 17: [2, 23], 27: [2, 23], 32: [2, 23], 37: [2, 23], 42: [2, 23], 45: [2, 23], 46: [2, 23], 49: [2, 23], 53: [2, 23] }, { 62: [1, 117] }, { 59: [2, 86], 62: [2, 86], 66: [2, 86], 74: [2, 86], 75: [2, 86], 76: [2, 86], 77: [2, 86], 78: [2, 86], 79: [2, 86] }, { 62: [2, 88] }, { 31: [1, 118] }, { 31: [2, 58] }, { 66: [1, 120], 70: 119 }, { 31: [1, 121] }, { 31: [2, 64] }, { 14: [2, 11] }, { 21: [2, 28], 31: [2, 28], 52: [2, 28], 62: [2, 28], 66: [2, 28], 69: [2, 28] }, { 5: [2, 20], 13: [2, 20], 14: [2, 20], 17: [2, 20], 27: [2, 20], 32: [2, 20], 37: [2, 20], 42: [2, 20], 45: [2, 20], 46: [2, 20], 49: [2, 20], 53: [2, 20] }, { 31: [2, 69], 40: 122, 68: 123, 69: [1, 108] }, { 31: [2, 66], 59: [2, 66], 66: [2, 66], 69: [2, 66], 74: [2, 66], 75: [2, 66], 76: [2, 66], 77: [2, 66], 78: [2, 66], 79: [2, 66] }, { 31: [2, 68], 69: [2, 68] }, { 21: [2, 26], 31: [2, 26], 52: [2, 26], 59: [2, 26], 62: [2, 26], 66: [2, 26], 69: [2, 26], 74: [2, 26], 75: [2, 26], 76: [2, 26], 77: [2, 26], 78: [2, 26], 79: [2, 26] }, { 13: [2, 14], 14: [2, 14], 17: [2, 14], 27: [2, 14], 32: [2, 14], 37: [2, 14], 42: [2, 14], 45: [2, 14], 46: [2, 14], 49: [2, 14], 53: [2, 14] }, { 66: [1, 125], 71: [1, 124] }, { 66: [2, 91], 71: [2, 91] }, { 13: [2, 15], 14: [2, 15], 17: [2, 15], 27: [2, 15], 32: [2, 15], 42: [2, 15], 45: [2, 15], 46: [2, 15], 49: [2, 15], 53: [2, 15] }, { 31: [1, 126] }, { 31: [2, 70] }, { 31: [2, 29] }, { 66: [2, 92], 71: [2, 92] }, { 13: [2, 16], 14: [2, 16], 17: [2, 16], 27: [2, 16], 32: [2, 16], 37: [2, 16], 42: [2, 16], 45: [2, 16], 46: [2, 16], 49: [2, 16], 53: [2, 16] }],
	        defaultActions: { 4: [2, 1], 49: [2, 50], 51: [2, 19], 55: [2, 52], 64: [2, 76], 73: [2, 80], 78: [2, 17], 82: [2, 84], 92: [2, 48], 99: [2, 18], 100: [2, 72], 105: [2, 88], 107: [2, 58], 110: [2, 64], 111: [2, 11], 123: [2, 70], 124: [2, 29] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = "";
	                this.conditionStack = ["INITIAL"];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = "";
	                    this.match = "";
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) {
	                        return token;
	                    } else {
	                        return;
	                    }
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== "undefined") {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) {
	                        return 14;
	                    }break;
	                case 1:
	                    return 14;
	                    break;
	                case 2:
	                    this.popState();
	                    return 14;

	                    break;
	                case 3:
	                    yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                    this.popState();
	                    return 16;

	                    break;
	                case 4:
	                    return 14;
	                    break;
	                case 5:
	                    this.popState();
	                    return 13;

	                    break;
	                case 6:
	                    return 59;
	                    break;
	                case 7:
	                    return 62;
	                    break;
	                case 8:
	                    return 17;
	                    break;
	                case 9:
	                    this.popState();
	                    this.begin("raw");
	                    return 21;

	                    break;
	                case 10:
	                    return 53;
	                    break;
	                case 11:
	                    return 27;
	                    break;
	                case 12:
	                    return 45;
	                    break;
	                case 13:
	                    this.popState();return 42;
	                    break;
	                case 14:
	                    this.popState();return 42;
	                    break;
	                case 15:
	                    return 32;
	                    break;
	                case 16:
	                    return 37;
	                    break;
	                case 17:
	                    return 49;
	                    break;
	                case 18:
	                    return 46;
	                    break;
	                case 19:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin("com");

	                    break;
	                case 20:
	                    this.popState();
	                    return 13;

	                    break;
	                case 21:
	                    return 46;
	                    break;
	                case 22:
	                    return 67;
	                    break;
	                case 23:
	                    return 66;
	                    break;
	                case 24:
	                    return 66;
	                    break;
	                case 25:
	                    return 81;
	                    break;
	                case 26:
	                    // ignore whitespace
	                    break;
	                case 27:
	                    this.popState();return 52;
	                    break;
	                case 28:
	                    this.popState();return 31;
	                    break;
	                case 29:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, "\"");return 74;
	                    break;
	                case 30:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 74;
	                    break;
	                case 31:
	                    return 79;
	                    break;
	                case 32:
	                    return 76;
	                    break;
	                case 33:
	                    return 76;
	                    break;
	                case 34:
	                    return 77;
	                    break;
	                case 35:
	                    return 78;
	                    break;
	                case 36:
	                    return 75;
	                    break;
	                case 37:
	                    return 69;
	                    break;
	                case 38:
	                    return 71;
	                    break;
	                case 39:
	                    return 66;
	                    break;
	                case 40:
	                    return 66;
	                    break;
	                case 41:
	                    return "INVALID";
	                    break;
	                case 42:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { mu: { rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42], inclusive: false }, emu: { rules: [2], inclusive: false }, com: { rules: [5], inclusive: false }, raw: { rules: [3, 4], inclusive: false }, INITIAL: { rules: [0, 1, 42], inclusive: true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _Visitor = __webpack_require__(6);

	var _Visitor2 = _interopRequireWildcard(_Visitor);

	function WhitespaceControl() {}
	WhitespaceControl.prototype = new _Visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};
	WhitespaceControl.prototype.BlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;

	var _Exception = __webpack_require__(11);

	var _Exception2 = _interopRequireWildcard(_Exception);

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, locInfo) {
	  locInfo = this.locInfo(locInfo);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0,
	      depthString = '';

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _Exception2['default']('Invalid path: ' + original, { loc: locInfo });
	      } else if (part === '..') {
	        depth++;
	        depthString += '../';
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return new this.PathExpression(data, depth, dig, original, locInfo);
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  return new this.MustacheStatement(path, params, hash, escaped, strip, this.locInfo(locInfo));
	}

	function prepareRawBlock(openRawBlock, content, close, locInfo) {
	  if (openRawBlock.path.original !== close) {
	    var errorNode = { loc: openRawBlock.path.loc };

	    throw new _Exception2['default'](openRawBlock.path.original + ' doesn\'t match ' + close, errorNode);
	  }

	  locInfo = this.locInfo(locInfo);
	  var program = new this.Program([content], null, {}, locInfo);

	  return new this.BlockStatement(openRawBlock.path, openRawBlock.params, openRawBlock.hash, program, undefined, {}, {}, {}, locInfo);
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  // When we are chaining inverse calls, we will not have a close path
	  if (close && close.path && openBlock.path.original !== close.path.original) {
	    var errorNode = { loc: openBlock.path.loc };

	    throw new _Exception2['default'](openBlock.path.original + ' doesn\'t match ' + close.path.original, errorNode);
	  }

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return new this.BlockStatement(openBlock.path, openBlock.params, openBlock.hash, program, inverse, openBlock.strip, inverseStrip, close && close.strip, this.locInfo(locInfo));
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	/*global define */

	var _isArray = __webpack_require__(12);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_isArray.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_isArray.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_isArray.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = arguments[0] === undefined ? this.currentLocation || { start: {} } : arguments[0];

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries, loc) {
	    var ret = this.empty(loc);

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this, loc));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries, loc) {
	    var ret = this.generateList(entries, loc);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

	/* NOP */

/***/ }
/******/ ])
});
;
!function(){"use strict";var a=["html","json","jsonp","script"],b=["connect","delete","get","head","options","patch","post","put","trace"],c=function f(){var a={},b={},c={url:function(a){return h.call(this,"url",a,d.string)},sync:function(a){return h.call(this,"sync",a,d.bool)},cache:function(a){return h.call(this,"cache",a,d.bool)},type:function(a){return h.call(this,"type",a,d.type)},header:function(b,c){return a.headers=a.headers||{},d.string(b),"undefined"!=typeof c?(d.string(c),a.headers[b]=c,this):a.headers[b]},auth:function(b,c){return d.string(b),d.string(c),a.auth={user:b,passwd:c},this},method:function(a){return h.call(this,"method",a,d.method)},queryString:function(a){return h.call(this,"queryString",a,d.queryString)},data:function(a){return h.call(this,"data",a,d.plainObject)},body:function(a){return h.call(this,"body",a,null,function(a){if("object"==typeof a){if(!(a instanceof FormData)){try{a=JSON.stringify(a)}catch(b){throw new TypeError("Unable to stringify body's content : "+b.name)}this.header("Content-Type","application/json")}}else a+="";return a})},into:function(a){return h.call(this,"into",a,d.selector,function(a){return"string"==typeof a?document.querySelectorAll(a):a instanceof HTMLElement?[a]:void 0})},jsonPaddingName:function(a){return h.call(this,"jsonPaddingName",a,d.string)},jsonPadding:function(a){return h.call(this,"jsonPadding",a,d.func)},on:function(a,c){return"function"==typeof c&&(b[a]=b[a]||[],b[a].push(c)),this},off:function(a){return b[a]=[],this},trigger:function(a,c){var d=this,e=function(a,c){b[a]instanceof Array&&b[a].forEach(function(a){a.call(d,c)})};if("undefined"!=typeof a){a+="";var f=/^([0-9])([0-9x])([0-9x])$/i,g=a.match(f);g&&g.length>3?Object.keys(b).forEach(function(a){var b=a.match(f);!(b&&b.length>3&&g[1]===b[1])||"x"!==b[2]&&g[2]!==b[2]||"x"!==b[3]&&g[3]!==b[3]||e(a,c)}):b[a]&&e(a,c)}return this},go:function(){var b=a.type||(a.into?"html":"json"),c=j();return"function"==typeof g[b]?g[b].call(this,c):void 0}},g={json:function(a){var b=this;g._xhr.call(this,a,function(a){if(a)try{a=JSON.parse(a)}catch(c){return b.trigger("error",c),null}return a})},html:function(b){g._xhr.call(this,b,function(b){return a.into&&a.into.length&&[].forEach.call(a.into,function(a){a.innerHTML=b}),b})},_xhr:function(b,c){var d,e,f,g,h=this,j=a.method||"get",k=a.sync!==!0,l=new XMLHttpRequest,m=a.data,n=a.body,o=(a.headers||{},this.header("Content-Type"));if(!o&&m&&i()&&(this.header("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o=this.header("Content-Type")),m&&i())if("string"!=typeof n&&(n=""),o.indexOf("json")>-1)try{n=JSON.stringify(m)}catch(p){throw new TypeError("Unable to stringify body's content : "+p.name)}else{f=o&&o.indexOf("x-www-form-urlencoded")>1;for(d in m)n+=f?encodeURIComponent(d)+"="+encodeURIComponent(m[d])+"&":d+"="+m[d]+"\n\r"}g=[j,b,k],a.auth&&(g.push(a.auth.user),g.push(a.auth.passwd)),l.open.apply(l,g);for(e in a.headers)l.setRequestHeader(e,a.headers[e]);l.onprogress=function(a){a.lengthComputable&&h.trigger("progress",a.loaded/a.total)},l.onload=function(){var a=l.responseText;this.status>=200&&this.status<300&&("function"==typeof c&&(a=c(a)),h.trigger("success",a)),h.trigger(this.status,a),h.trigger("end",a)},l.onerror=function(a){h.trigger("error",a,arguments)},l.send(n)},jsonp:function(b){var c,d=this,g=document.querySelector("head"),h=a.sync!==!0,i=a.jsonPaddingName||"callback",j=a.jsonPadding||"_padd"+(new Date).getTime()+Math.floor(1e4*Math.random()),k={};if(f[j])throw new Error("Padding "+j+"  already exists. It must be unique.");/^ajajsonp_/.test(j)||(j="ajajsonp_"+j),window[j]=function(a){d.trigger("success",a),g.removeChild(c),window[j]=void 0},k[i]=j,b=e(b,k),c=document.createElement("script"),c.async=h,c.src=b,c.onerror=function(){d.trigger("error",arguments),g.removeChild(c),window[j]=void 0},g.appendChild(c)},script:function(b){var c,d=this,e=document.querySelector("head")||document.querySelector("body"),f=a.sync!==!0;if(!e)throw new Error("Ok, wait a second, you want to load a script, but you don't have at least a head or body tag...");c=document.createElement("script"),c.async=f,c.src=b,c.onerror=function(){d.trigger("error",arguments),e.removeChild(c)},c.onload=function(){d.trigger("success",arguments)},e.appendChild(c)}},h=function(b,c,e,f){if("undefined"!=typeof c){if("function"==typeof e)try{c=e.call(d,c)}catch(g){throw new TypeError("Failed to set "+b+" : "+g.message)}return a[b]="function"==typeof f?f.call(this,c):c,this}return"undefined"===a[b]?null:a[b]},i=function(){return["delete","patch","post","put"].indexOf(a.method)>-1},j=function(){var b=a.url,c="undefined"!=typeof a.cache?!!a.cache:!0,d=a.queryString||"",f=a.data;return c===!1&&(d+="&ajabuster="+(new Date).getTime()),b=e(b,d),f&&!i()&&(b=e(b,f)),b};return c},d={bool:function(a){return!!a},string:function(a){if("string"!=typeof a)throw new TypeError("a string is expected, but "+a+" ["+typeof a+"] given");return a},plainObject:function(a){if("object"!=typeof a||a.constructor!==Object)throw new TypeError("an object is expected, but "+a+"  ["+typeof a+"] given");return a},type:function(b){if(b=this.string(b),a.indexOf(b.toLowerCase())<0)throw new TypeError("a type in ["+a.join(", ")+"] is expected, but "+b+" given");return b.toLowerCase()},method:function(a){if(a=this.string(a),b.indexOf(a.toLowerCase())<0)throw new TypeError("a method in ["+b.join(", ")+"] is expected, but "+a+" given");return a.toLowerCase()},queryString:function(a){var b={};return"string"==typeof a?a.replace("?","").split("&").forEach(function(a){var c=a.split("=");2===c.length&&(b[decodeURIComponent(c[0])]=decodeURIComponent(c[1]))}):b=a,this.plainObject(b)},selector:function(a){if("string"!=typeof a&&!(a instanceof HTMLElement))throw new TypeError("a selector or an HTMLElement is expected, "+a+" ["+typeof a+"] given");return a},func:function(a){if(a=this.string(a),!/^([a-zA-Z_])([a-zA-Z0-9_\-])+$/.test(a))throw new TypeError("a valid function name is expected, "+a+" ["+typeof a+"] given");return a}},e=function(a,b){var c;if(a=a||"",b)if(-1===a.indexOf("?")&&(a+="?"),"string"==typeof b)a+=b;else if("object"==typeof b)for(c in b)a+="&"+encodeURIComponent(c)+"="+encodeURIComponent(b[c]);return a};"function"==typeof define&&define.amd?define([],function(){return c}):"object"==typeof exports?module.exports=c:window.aja=window.aja||c}();
(function(w,d){var atc_url="//addtocalendar.com/atc/",atc_version="1.5",b=d.documentElement;if(!Array.indexOf){Array.prototype.indexOf=function(e){for(var t=0,n=this.length;t<n;t++){if(this[t]==e){return t}}return-1}}if(!Array.prototype.map){Array.prototype.map=function(e){var t=[];for(var n=0,r=this.length;n<r;n++){t.push(e(this[n]))}return t}}var isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"};var isFunc=function(e){return Object.prototype.toString.call(e)==="[object Function]"};var ready=function(e,t){function u(){if(!n){if(!t.body)return setTimeout(u,13);n=true;if(i){var e,r=0;while(e=i[r++])e.call(null);i=null}}}function a(){if(r)return;r=true;if(t.readyState==="complete")return u();if(t.addEventListener){t.addEventListener("DOMContentLoaded",s,false);e.addEventListener("load",u,false)}else{if(t.attachEvent){t.attachEvent("onreadystatechange",s);e.attachEvent("onload",u);var n=false;try{n=e.frameElement==null}catch(i){}if(b.doScroll&&n)f()}else{o=e.onload;e.onload=function(e){o(e);u()}}}}function f(){if(n)return;try{b.doScroll("left")}catch(e){setTimeout(f,1);return}u()}var n=false,r=false,i=[],s,o;if(t.addEventListener){s=function(){t.removeEventListener("DOMContentLoaded",s,false);u()}}else{if(t.attachEvent){s=function(){if(t.readyState==="complete"){t.detachEvent("onreadystatechange",s);u()}}}}return function(e){a();if(n){e.call(null)}else{i.push(e)}}}(w,d);if(w.addtocalendar&&typeof w.addtocalendar.start=="function")return;if(!w.addtocalendar)w.addtocalendar={};addtocalendar.languages={de:"In den Kalender",en:"Add to Calendar",es:"Añadir al Calendario",fr:"Ajouter au calendrier",hi:"कैलेंडर में जोड़ें","in":"Tambahkan ke Kalender",ja:"カレンダーに追加",ko:"캘린더에 추가",pt:"Adicionar ao calendário",ru:"Добавить в календарь",uk:"Додати в календар",zh:"添加到日历"};addtocalendar.calendar_urls={};addtocalendar.loadSettings=function(element){var settings={language:"auto","show-list-on":"click",calendars:["iCalendar","Google Calendar","Outlook","Outlook Online","Yahoo! Calendar"],secure:"auto","on-button-click":function(){},"on-calendar-click":function(){}};for(var option in settings){var pname="data-"+option;var eattr=element.getAttribute(pname);if(eattr!=null){if(isArray(settings[option])){settings[option]=eattr.replace(/\s*,\s*/g,",").replace(/^\s+|\s+$/g,"").split(",");continue}if(isFunc(settings[option])){var fn=window[eattr];if(isFunc(fn)){settings[option]=fn}else{settings[option]=eval("(function(mouseEvent){"+eattr+"})")}continue}settings[option]=element.getAttribute(pname)}}return settings};addtocalendar.load=function(){ready(function(){var e={iCalendar:"ical","Google Calendar":"google",Outlook:"outlook","Outlook Online":"outlookonline","Yahoo! Calendar":"yahoo"};var t=-(new Date).getTimezoneOffset().toString();var n=addtocalendar.languages;var r=document.getElementsByTagName("*");for(var i=0;i<r.length;i++){var s=r[i].className;if(s.split(" ").indexOf("addtocalendar")!=-1){var o=addtocalendar.loadSettings(r[i]);var u=o["calendars"].length==1;var a="http:";if(o["secure"]=="auto"){a=location.protocol=="https:"?"https:":"http:"}else if(o["secure"]=="true"){a="https:"}var f=a+atc_url;var l=r[i].id;var c=n["en"];if(o["language"]=="auto"){var h="no_lang";if(typeof navigator.language==="string"){h=navigator.language.substr(0,2)}else if(typeof navigator.browserLanguage==="string"){h=navigator.browserLanguage.substr(0,2)}if(n.hasOwnProperty(h)){c=n[h]}}else if(n.hasOwnProperty(o["language"])){c=n[o["language"]]}var p=["utz="+t,"uln="+navigator.language,"vjs="+atc_version];var d=r[i].getElementsByTagName("var");var v=-1;for(var m=0;m<d.length;m++){var g=d[m].className.replace("atc_","");var y=d[m].innerHTML;if(g=="event"){v++;continue}if(g==d[m].className){if(g=="atc-body"){c=y}continue}if(v==-1){continue}p.push("e["+v+"]["+g+"]"+"="+encodeURIComponent(y))}var b=l==""?"":l+"_link";var w=document.createElement("ul");w.className="atcb-list";var E="";var S="";for(var x in o["calendars"]){if(!e.hasOwnProperty(o["calendars"][x])){continue}var T=e[o["calendars"][x]];var N=l==""?"":'id="'+l+"_"+T+'_link"';var C=f+T+"?"+p.join("&");if(u){S=C}else{E+='<li class="atcb-item"><a '+N+' class="atcb-item-link" href="'+C+'" target="_blank">'+o["calendars"][x]+"</a></li>"}}w.innerHTML=E;if(r[i].getElementsByClassName("atcb-link")[0]==undefined){var k=document.createElement("a");k.className="atcb-link";k.innerHTML=c;k.id=b;k.tabIndex="-1";if(u){k.href=S;k.target="_blank"}r[i].appendChild(k);if(!u){r[i].appendChild(w)}}else{var k=r[i].getElementsByClassName("atcb-link")[0];if(!u){k.parentNode.appendChild(w)}k.tabIndex="-1";if(k.id==""){k.id=b}if(u){k.href=S;k.target="_blank"}}r[i].getElementsByClassName("atcb-link")[0].addEventListener("click",o["on-button-click"],false);var L=r[i].getElementsByClassName("atcb-item-link");for(var m=0;m<L.length;m++){L[m].addEventListener("click",o["on-calendar-click"],false)}}}})};addtocalendar.load()})(window,document)

/*!

 handlebars v3.0.3

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=r();return a.compile=function(b,c){return k.compile(b,c,a)},a.precompile=function(b,c){return k.precompile(b,c,a)},a.AST=i["default"],a.Compiler=k.Compiler,a.JavaScriptCompiler=m["default"],a.Parser=j.parser,a.parse=j.parse,a}var e=c(8)["default"];b.__esModule=!0;var f=c(1),g=e(f),h=c(2),i=e(h),j=c(3),k=c(4),l=c(5),m=e(l),n=c(6),o=e(n),p=c(7),q=e(p),r=g["default"].create,s=d();s.create=d,q["default"](s),s.Visitor=o["default"],s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b,c){"use strict";function d(){var a=new g.HandlebarsEnvironment;return m.extend(a,g),a.SafeString=i["default"],a.Exception=k["default"],a.Utils=m,a.escapeExpression=m.escapeExpression,a.VM=o,a.template=function(b){return o.template(b,a)},a}var e=c(8)["default"];b.__esModule=!0;var f=c(9),g=e(f),h=c(10),i=e(h),j=c(11),k=e(j),l=c(12),m=e(l),n=c(13),o=e(n),p=c(7),q=e(p),r=d();r.create=d,q["default"](r),r["default"]=r,b["default"]=r,a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0;var c={Program:function(a,b,c,d){this.loc=d,this.type="Program",this.body=a,this.blockParams=b,this.strip=c},MustacheStatement:function(a,b,c,d,e,f){this.loc=f,this.type="MustacheStatement",this.path=a,this.params=b||[],this.hash=c,this.escaped=d,this.strip=e},BlockStatement:function(a,b,c,d,e,f,g,h,i){this.loc=i,this.type="BlockStatement",this.path=a,this.params=b||[],this.hash=c,this.program=d,this.inverse=e,this.openStrip=f,this.inverseStrip=g,this.closeStrip=h},PartialStatement:function(a,b,c,d,e){this.loc=e,this.type="PartialStatement",this.name=a,this.params=b||[],this.hash=c,this.indent="",this.strip=d},ContentStatement:function(a,b){this.loc=b,this.type="ContentStatement",this.original=this.value=a},CommentStatement:function(a,b,c){this.loc=c,this.type="CommentStatement",this.value=a,this.strip=b},SubExpression:function(a,b,c,d){this.loc=d,this.type="SubExpression",this.path=a,this.params=b||[],this.hash=c},PathExpression:function(a,b,c,d,e){this.loc=e,this.type="PathExpression",this.data=a,this.original=d,this.parts=c,this.depth=b},StringLiteral:function(a,b){this.loc=b,this.type="StringLiteral",this.original=this.value=a},NumberLiteral:function(a,b){this.loc=b,this.type="NumberLiteral",this.original=this.value=Number(a)},BooleanLiteral:function(a,b){this.loc=b,this.type="BooleanLiteral",this.original=this.value="true"===a},UndefinedLiteral:function(a){this.loc=a,this.type="UndefinedLiteral",this.original=this.value=void 0},NullLiteral:function(a){this.loc=a,this.type="NullLiteral",this.original=this.value=null},Hash:function(a,b){this.loc=b,this.type="Hash",this.pairs=a},HashPair:function(a,b,c){this.loc=c,this.type="HashPair",this.key=a,this.value=b},helpers:{helperExpression:function(a){return!("SubExpression"!==a.type&&!a.params.length&&!a.hash)},scopedId:function(a){return/^\.|this\b/.test(a.original)},simpleId:function(a){return 1===a.parts.length&&!c.helpers.scopedId(a)&&!a.depth}}};b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if("Program"===a.type)return a;g["default"].yy=o,o.locInfo=function(a){return new o.SourceLocation(b&&b.srcName,a)};var c=new k["default"];return c.accept(g["default"].parse(a))}var e=c(8)["default"];b.__esModule=!0,b.parse=d;var f=c(14),g=e(f),h=c(2),i=e(h),j=c(15),k=e(j),l=c(16),m=e(l),n=c(12);b.parser=g["default"];var o={};n.extend(o,m,i["default"])},function(a,b,c){"use strict";function d(){}function e(a,b,c){if(null==a||"string"!=typeof a&&"Program"!==a.type)throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var d=c.parse(a,b),e=(new c.Compiler).compile(d,b);return(new c.JavaScriptCompiler).compile(e,b)}function f(a,b,c){function d(){var b=c.parse(a,f),d=(new c.Compiler).compile(b,f),e=(new c.JavaScriptCompiler).compile(d,f,void 0,!0);return c.template(e)}function e(a,b){return g||(g=d()),g.call(this,a,b)}var f=void 0===arguments[1]?{}:arguments[1];if(null==a||"string"!=typeof a&&"Program"!==a.type)throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);"data"in f||(f.data=!0),f.compat&&(f.useDepths=!0);var g=void 0;return e._setup=function(a){return g||(g=d()),g._setup(a)},e._child=function(a,b,c,e){return g||(g=d()),g._child(a,b,c,e)},e}function g(a,b){if(a===b)return!0;if(l.isArray(a)&&l.isArray(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!g(a[c],b[c]))return!1;return!0}}function h(a){if(!a.path.parts){var b=a.path;a.path=new n["default"].PathExpression(!1,0,[b.original+""],b.original+"",b.loc)}}var i=c(8)["default"];b.__esModule=!0,b.Compiler=d,b.precompile=e,b.compile=f;var j=c(11),k=i(j),l=c(12),m=c(2),n=i(m),o=[].slice;d.prototype={compiler:d,equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;b>c;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||!g(d.args,e.args))return!1}b=this.children.length;for(var c=0;b>c;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){this.sourceNode=[],this.opcodes=[],this.children=[],this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds,b.blockParams=b.blockParams||[];var c=b.knownHelpers;if(b.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},c)for(var d in c)d in c&&(b.knownHelpers[d]=c[d]);return this.accept(a)},compileProgram:function(a){var b=new this.compiler,c=b.compile(a,this.options),d=this.guid++;return this.usePartial=this.usePartial||c.usePartial,this.children[d]=c,this.useDepths=this.useDepths||c.useDepths,d},accept:function(a){this.sourceNode.unshift(a);var b=this[a.type](a);return this.sourceNode.shift(),b},Program:function(a){this.options.blockParams.unshift(a.blockParams);for(var b=a.body,c=b.length,d=0;c>d;d++)this.accept(b[d]);return this.options.blockParams.shift(),this.isSimple=1===c,this.blockParams=a.blockParams?a.blockParams.length:0,this},BlockStatement:function(a){h(a);var b=a.program,c=a.inverse;b=b&&this.compileProgram(b),c=c&&this.compileProgram(c);var d=this.classifySexpr(a);"helper"===d?this.helperSexpr(a,b,c):"simple"===d?(this.simpleSexpr(a),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("blockValue",a.path.original)):(this.ambiguousSexpr(a,b,c),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},PartialStatement:function(a){this.usePartial=!0;var b=a.params;if(b.length>1)throw new k["default"]("Unsupported number of partial arguments: "+b.length,a);b.length||b.push({type:"PathExpression",parts:[],depth:0});var c=a.name.original,d="SubExpression"===a.name.type;d&&this.accept(a.name),this.setupFullMustacheParams(a,void 0,void 0,!0);var e=a.indent||"";this.options.preventIndent&&e&&(this.opcode("appendContent",e),e=""),this.opcode("invokePartial",d,c,e),this.opcode("append")},MustacheStatement:function(a){this.SubExpression(a),this.opcode(a.escaped&&!this.options.noEscape?"appendEscaped":"append")},ContentStatement:function(a){a.value&&this.opcode("appendContent",a.value)},CommentStatement:function(){},SubExpression:function(a){h(a);var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ambiguousSexpr:function(a,b,c){var d=a.path,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.accept(d),this.opcode("invokeAmbiguous",e,f)},simpleSexpr:function(a){this.accept(a.path),this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.path,f=e.parts[0];if(this.options.knownHelpers[f])this.opcode("invokeKnownHelper",d.length,f);else{if(this.options.knownHelpersOnly)throw new k["default"]("You specified knownHelpersOnly, but used the unknown helper "+f,a);e.falsy=!0,this.accept(e),this.opcode("invokeHelper",d.length,e.original,n["default"].helpers.simpleId(e))}},PathExpression:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0],c=n["default"].helpers.scopedId(a),d=!a.depth&&!c&&this.blockParamIndex(b);d?this.opcode("lookupBlockParam",d,a.parts):b?a.data?(this.options.data=!0,this.opcode("lookupData",a.depth,a.parts)):this.opcode("lookupOnContext",a.parts,a.falsy,c):this.opcode("pushContext")},StringLiteral:function(a){this.opcode("pushString",a.value)},NumberLiteral:function(a){this.opcode("pushLiteral",a.value)},BooleanLiteral:function(a){this.opcode("pushLiteral",a.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(a){var b=a.pairs,c=0,d=b.length;for(this.opcode("pushHash");d>c;c++)this.pushParam(b[c].value);for(;c--;)this.opcode("assignToHash",b[c].key);this.opcode("popHash")},opcode:function(a){this.opcodes.push({opcode:a,args:o.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(a){a&&(this.useDepths=!0)},classifySexpr:function(a){var b=n["default"].helpers.simpleId(a.path),c=b&&!!this.blockParamIndex(a.path.parts[0]),d=!c&&n["default"].helpers.helperExpression(a),e=!c&&(d||b);if(e&&!d){var f=a.path.parts[0],g=this.options;g.knownHelpers[f]?d=!0:g.knownHelpersOnly&&(e=!1)}return d?"helper":e?"ambiguous":"simple"},pushParams:function(a){for(var b=0,c=a.length;c>b;b++)this.pushParam(a[b])},pushParam:function(a){var b=null!=a.value?a.value:a.original||"";if(this.stringParams)b.replace&&(b=b.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),a.depth&&this.addDepth(a.depth),this.opcode("getContext",a.depth||0),this.opcode("pushStringParam",b,a.type),"SubExpression"===a.type&&this.accept(a);else{if(this.trackIds){var c=void 0;if(!a.parts||n["default"].helpers.scopedId(a)||a.depth||(c=this.blockParamIndex(a.parts[0])),c){var d=a.parts.slice(1).join(".");this.opcode("pushId","BlockParam",c,d)}else b=a.original||b,b.replace&&(b=b.replace(/^\.\//g,"").replace(/^\.$/g,"")),this.opcode("pushId",a.type,b)}this.accept(a)}},setupFullMustacheParams:function(a,b,c,d){var e=a.params;return this.pushParams(e),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.accept(a.hash):this.opcode("emptyHash",d),e},blockParamIndex:function(a){for(var b=0,c=this.options.blockParams.length;c>b;b++){var d=this.options.blockParams[b],e=d&&l.indexOf(d,a);if(d&&e>=0)return[b,e]}}}},function(a,b,c){"use strict";function d(a){this.value=a}function e(){}function f(a,b,c,d){var e=b.popStack(),f=0,g=c.length;for(a&&g--;g>f;f++)e=b.nameLookup(e,c[f],d);return a?[b.aliasable("this.strict"),"(",e,", ",b.quotedString(c[f]),")"]:e}var g=c(8)["default"];b.__esModule=!0;var h=c(9),i=c(11),j=g(i),k=c(12),l=c(17),m=g(l);e.prototype={nameLookup:function(a,b){return e.isValidJavaScriptVariableName(b)?[a,".",b]:[a,"['",b,"']"]},depthedLookup:function(a){return[this.aliasable("this.lookup"),'(depths, "',a,'")']},compilerInfo:function(){var a=h.COMPILER_REVISION,b=h.REVISION_CHANGES[a];return[a,b]},appendToBuffer:function(a,b,c){return k.isArray(a)||(a=[a]),a=this.source.wrap(a,b),this.environment.isSimple?["return ",a,";"]:c?["buffer += ",a,";"]:(a.appendToBuffer=!0,a)},initializeBuffer:function(){return this.quotedString("")},compile:function(a,b,c,d){this.environment=a,this.options=b,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!d,this.name=this.environment.name,this.isChild=!!c,this.context=c||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(a,b),this.useDepths=this.useDepths||a.useDepths||this.options.compat,this.useBlockParams=this.useBlockParams||a.useBlockParams;var e=a.opcodes,f=void 0,g=void 0,h=void 0,i=void 0;for(h=0,i=e.length;i>h;h++)f=e[h],this.source.currentLocation=f.loc,g=g||f.loc,this[f.opcode].apply(this,f.args);if(this.source.currentLocation=g,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new j["default"]("Compile completed with content left on stack");var k=this.createFunctionContext(d);if(this.isChild)return k;var l={compiler:this.compilerInfo(),main:k},m=this.context.programs;for(h=0,i=m.length;i>h;h++)m[h]&&(l[h]=m[h]);return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.useBlockParams&&(l.useBlockParams=!0),this.options.compat&&(l.compat=!0),d?l.compilerOptions=this.options:(l.compiler=JSON.stringify(l.compiler),this.source.currentLocation={start:{line:1,column:0}},l=this.objectLiteral(l),b.srcName?(l=l.toStringWithSourceMap({file:b.destName}),l.map=l.map&&l.map.toString()):l=l.toString()),l},preamble:function(){this.lastContext=0,this.source=new m["default"](this.options.srcName)},createFunctionContext:function(a){var b="",c=this.stackVars.concat(this.registers.list);c.length>0&&(b+=", "+c.join(", "));var d=0;for(var e in this.aliases){var f=this.aliases[e];this.aliases.hasOwnProperty(e)&&f.children&&f.referenceCount>1&&(b+=", alias"+ ++d+"="+e,f.children[0]="alias"+d)}var g=["depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&g.push("blockParams"),this.useDepths&&g.push("depths");var h=this.mergeSource(b);return a?(g.push(h),Function.apply(this,g)):this.source.wrap(["function(",g.join(","),") {\n  ",h,"}"])},mergeSource:function(a){var b=this.environment.isSimple,c=!this.forceBuffer,d=void 0,e=void 0,f=void 0,g=void 0;return this.source.each(function(a){a.appendToBuffer?(f?a.prepend("  + "):f=a,g=a):(f&&(e?f.prepend("buffer += "):d=!0,g.add(";"),f=g=void 0),e=!0,b||(c=!1))}),c?f?(f.prepend("return "),g.add(";")):e||this.source.push('return "";'):(a+=", buffer = "+(d?"":this.initializeBuffer()),f?(f.prepend("return buffer + "),g.add(";")):this.source.push("return buffer;")),a&&this.source.prepend("var "+a.substring(2)+(d?"":";\n")),this.source.merge()},blockValue:function(a){var b=this.aliasable("helpers.blockHelperMissing"),c=[this.contextName(0)];this.setupHelperArgs(a,0,c);var d=this.popStack();c.splice(1,0,d),this.push(this.source.functionCall(b,"call",c))},ambiguousBlockValue:function(){var a=this.aliasable("helpers.blockHelperMissing"),b=[this.contextName(0)];this.setupHelperArgs("",0,b,!0),this.flushInline();var c=this.topStack();b.splice(1,0,c),this.pushSource(["if (!",this.lastHelper,") { ",c," = ",this.source.functionCall(a,"call",b),"}"])},appendContent:function(a){this.pendingContent?a=this.pendingContent+a:this.pendingLocation=this.source.currentLocation,this.pendingContent=a},append:function(){if(this.isInline())this.replaceStack(function(a){return[" != null ? ",a,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var a=this.popStack();this.pushSource(["if (",a," != null) { ",this.appendToBuffer(a,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("this.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(a){this.lastContext=a},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(a,b,c){var d=0;c||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(a[d++])),this.resolvePath("context",a,d,b)},lookupBlockParam:function(a,b){this.useBlockParams=!0,this.push(["blockParams[",a[0],"][",a[1],"]"]),this.resolvePath("context",b,1)},lookupData:function(a,b){this.pushStackLiteral(a?"this.data(data, "+a+")":"data"),this.resolvePath("data",b,0,!0)},resolvePath:function(a,b,c,d){var e=this;if(this.options.strict||this.options.assumeObjects)return void this.push(f(this.options.strict,this,b,a));for(var g=b.length;g>c;c++)this.replaceStack(function(f){var g=e.nameLookup(f,b[c],a);return d?[" && ",g]:[" != null ? ",g," : ",f]})},resolvePossibleLambda:function(){this.push([this.aliasable("this.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(a,b){this.pushContext(),this.pushString(b),"SubExpression"!==b&&("string"==typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(a){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(a?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(a.ids)),this.stringParams&&(this.push(this.objectLiteral(a.contexts)),this.push(this.objectLiteral(a.types))),this.push(this.objectLiteral(a.values))},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){this.pushStackLiteral(null!=a?this.programExpression(a):null)},invokeHelper:function(a,b,c){var d=this.popStack(),e=this.setupHelper(a,b),f=c?[e.name," || "]:"",g=["("].concat(f,d);this.options.strict||g.push(" || ",this.aliasable("helpers.helperMissing")),g.push(")"),this.push(this.source.functionCall(g,"call",e.callParams))},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(this.source.functionCall(c.name,"call",c.callParams))},invokeAmbiguous:function(a,b){this.useRegister("helper");var c=this.popStack();this.emptyHash();var d=this.setupHelper(0,a,b),e=this.lastHelper=this.nameLookup("helpers",a,"helper"),f=["(","(helper = ",e," || ",c,")"];this.options.strict||(f[0]="(helper = ",f.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))),this.push(["(",f,d.paramsInit?["),(",d.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",d.callParams)," : helper))"])},invokePartial:function(a,b,c){var d=[],e=this.setupParams(b,1,d,!1);a&&(b=this.popStack(),delete e.name),c&&(e.indent=JSON.stringify(c)),e.helpers="helpers",e.partials="partials",d.unshift(a?b:this.nameLookup("partials",b,"partial")),this.options.compat&&(e.depths="depths"),e=this.objectLiteral(e),d.push(e),this.push(this.source.functionCall("this.invokePartial","",d))},assignToHash:function(a){var b=this.popStack(),c=void 0,d=void 0,e=void 0;this.trackIds&&(e=this.popStack()),this.stringParams&&(d=this.popStack(),c=this.popStack());var f=this.hash;c&&(f.contexts[a]=c),d&&(f.types[a]=d),e&&(f.ids[a]=e),f.values[a]=b},pushId:function(a,b,c){"BlockParam"===a?this.pushStackLiteral("blockParams["+b[0]+"].path["+b[1]+"]"+(c?" + "+JSON.stringify("."+c):"")):"PathExpression"===a?this.pushString(b):this.pushStackLiteral("SubExpression"===a?"true":"null")},compiler:e,compileChildren:function(a,b){for(var c=a.children,d=void 0,e=void 0,f=0,g=c.length;g>f;f++){d=c[f],e=new this.compiler;var h=this.matchExistingProgram(d);null==h?(this.context.programs.push(""),h=this.context.programs.length,d.index=h,d.name="program"+h,this.context.programs[h]=e.compile(d,b,this.context,!this.precompile),this.context.environments[h]=d,this.useDepths=this.useDepths||e.useDepths,this.useBlockParams=this.useBlockParams||e.useBlockParams):(d.index=h,d.name="program"+h,this.useDepths=this.useDepths||d.useDepths,this.useBlockParams=this.useBlockParams||d.useBlockParams)}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;c>b;b++){var d=this.context.environments[b];if(d&&d.equals(a))return b}},programExpression:function(a){var b=this.environment.children[a],c=[b.index,"data",b.blockParams];return(this.useBlockParams||this.useDepths)&&c.push("blockParams"),this.useDepths&&c.push("depths"),"this.program("+c.join(", ")+")"},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},push:function(a){return a instanceof d||(a=this.source.wrap(a)),this.inlineStack.push(a),a},pushStackLiteral:function(a){this.push(new d(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),a&&this.source.push(a)},replaceStack:function(a){var b=["("],c=void 0,e=void 0,f=void 0;if(!this.isInline())throw new j["default"]("replaceStack on non-inline");var g=this.popStack(!0);if(g instanceof d)c=[g.value],b=["(",c],f=!0;else{e=!0;var h=this.incrStack();b=["((",this.push(h)," = ",g,")"],c=this.topStack()}var i=a.call(this,c);f||this.popStack(),e&&this.stackSlot--,this.push(b.concat(i,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;this.inlineStack=[];for(var b=0,c=a.length;c>b;b++){var e=a[b];if(e instanceof d)this.compileStack.push(e);else{var f=this.incrStack();this.pushSource([f," = ",e,";"]),this.compileStack.push(f)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),c=(b?this.inlineStack:this.compileStack).pop();if(!a&&c instanceof d)return c.value;if(!b){if(!this.stackSlot)throw new j["default"]("Invalid stack pop");this.stackSlot--}return c},topStack:function(){var a=this.isInline()?this.inlineStack:this.compileStack,b=a[a.length-1];return b instanceof d?b.value:b},contextName:function(a){return this.useDepths&&a?"depths["+a+"]":"depth"+a},quotedString:function(a){return this.source.quotedString(a)},objectLiteral:function(a){return this.source.objectLiteral(a)},aliasable:function(a){var b=this.aliases[a];return b?(b.referenceCount++,b):(b=this.aliases[a]=this.source.wrap(a),b.aliasable=!0,b.referenceCount=1,b)},setupHelper:function(a,b,c){var d=[],e=this.setupHelperArgs(b,a,d,c),f=this.nameLookup("helpers",b,"helper");return{params:d,paramsInit:e,name:f,callParams:[this.contextName(0)].concat(d)}},setupParams:function(a,b,c){var d={},e=[],f=[],g=[],h=void 0;d.name=this.quotedString(a),d.hash=this.popStack(),this.trackIds&&(d.hashIds=this.popStack()),this.stringParams&&(d.hashTypes=this.popStack(),d.hashContexts=this.popStack());var i=this.popStack(),j=this.popStack();(j||i)&&(d.fn=j||"this.noop",d.inverse=i||"this.noop");for(var k=b;k--;)h=this.popStack(),c[k]=h,this.trackIds&&(g[k]=this.popStack()),this.stringParams&&(f[k]=this.popStack(),e[k]=this.popStack());return this.trackIds&&(d.ids=this.source.generateArray(g)),this.stringParams&&(d.types=this.source.generateArray(f),d.contexts=this.source.generateArray(e)),this.options.data&&(d.data="data"),this.useBlockParams&&(d.blockParams="blockParams"),d},setupHelperArgs:function(a,b,c,d){var e=this.setupParams(a,b,c,!0);return e=this.objectLiteral(e),d?(this.useRegister("options"),c.push("options"),["options=",e]):(c.push(e),"")}},function(){for(var a="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),b=e.RESERVED_WORDS={},c=0,d=a.length;d>c;c++)b[a[c]]=!0}(),e.isValidJavaScriptVariableName=function(a){return!e.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)},b["default"]=e,a.exports=b["default"]},function(a,b,c){"use strict";function d(){this.parents=[]}var e=c(8)["default"];b.__esModule=!0;var f=c(11),g=e(f),h=c(2),i=e(h);d.prototype={constructor:d,mutating:!1,acceptKey:function(a,b){var c=this.accept(a[b]);if(this.mutating){if(c&&(!c.type||!i["default"][c.type]))throw new g["default"]('Unexpected node type "'+c.type+'" found when accepting '+b+" on "+a.type);a[b]=c}},acceptRequired:function(a,b){if(this.acceptKey(a,b),!a[b])throw new g["default"](a.type+" requires "+b)},acceptArray:function(a){for(var b=0,c=a.length;c>b;b++)this.acceptKey(a,b),a[b]||(a.splice(b,1),b--,c--)},accept:function(a){if(a){this.current&&this.parents.unshift(this.current),this.current=a;var b=this[a.type](a);return this.current=this.parents.shift(),!this.mutating||b?b:b!==!1?a:void 0}},Program:function(a){this.acceptArray(a.body)},MustacheStatement:function(a){this.acceptRequired(a,"path"),this.acceptArray(a.params),this.acceptKey(a,"hash")},BlockStatement:function(a){this.acceptRequired(a,"path"),this.acceptArray(a.params),this.acceptKey(a,"hash"),this.acceptKey(a,"program"),this.acceptKey(a,"inverse")},PartialStatement:function(a){this.acceptRequired(a,"name"),this.acceptArray(a.params),this.acceptKey(a,"hash")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:function(a){this.acceptRequired(a,"path"),this.acceptArray(a.params),this.acceptKey(a,"hash")},PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(a){this.acceptArray(a.pairs)},HashPair:function(a){this.acceptRequired(a,"value")}},b["default"]=d,a.exports=b["default"]},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){b.Handlebars===a&&(b.Handlebars=d)}},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b){this.helpers=a||{},this.partials=b||{},e(this)}function e(a){a.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new k["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse,e=c.fn;if(b===!0)return e(this);if(b===!1||null==b)return d(this);if(o(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):d(this);if(c.data&&c.ids){var g=f(c.data);g.contextPath=i.appendContextPath(c.data.contextPath,c.name),c={data:g}}return e(b,c)}),a.registerHelper("each",function(a,b){function c(b,c,e){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!e,l&&(j.contextPath=l+b)),h+=d(a[b],{data:j,blockParams:i.blockParams([a[b],b],[l+b,null])})}if(!b)throw new k["default"]("Must pass iterator to #each");var d=b.fn,e=b.inverse,g=0,h="",j=void 0,l=void 0;if(b.data&&b.ids&&(l=i.appendContextPath(b.data.contextPath,b.ids[0])+"."),p(a)&&(a=a.call(this)),b.data&&(j=f(b.data)),a&&"object"==typeof a)if(o(a))for(var m=a.length;m>g;g++)c(g,g,g===a.length-1);else{var n=void 0;for(var q in a)a.hasOwnProperty(q)&&(n&&c(n,g-1),n=q,g++);n&&c(n,g-1,!0)}return 0===g&&(h=e(this)),h}),a.registerHelper("if",function(a,b){return p(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||i.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){p(a)&&(a=a.call(this));var c=b.fn;if(i.isEmpty(a))return b.inverse(this);if(b.data&&b.ids){var d=f(b.data);d.contextPath=i.appendContextPath(b.data.contextPath,b.ids[0]),b={data:d}}return c(a,b)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)}),a.registerHelper("lookup",function(a,b){return a&&a[b]})}function f(a){var b=i.extend({},a);return b._parent=a,b}var g=c(8)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d,b.createFrame=f;var h=c(12),i=g(h),j=c(11),k=g(j),l="3.0.1";b.VERSION=l;var m=6;b.COMPILER_REVISION=m;var n={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};b.REVISION_CHANGES=n;var o=i.isArray,p=i.isFunction,q=i.toString,r="[object Object]";d.prototype={constructor:d,logger:s,log:t,registerHelper:function(a,b){if(q.call(a)===r){if(b)throw new k["default"]("Arg not supported with multiple helpers");i.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(q.call(a)===r)i.extend(this.partials,a);else{if("undefined"==typeof b)throw new k["default"]("Attempting to register a partial as undefined");this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]}};var s={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(a,b){if("undefined"!=typeof console&&s.level<=a){var c=s.methodMap[a];(console[c]||console.log).call(console,b)}}};b.logger=s;var t=s.log;b.log=t},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b){"use strict";function c(a,b){var e=b&&b.loc,f=void 0,g=void 0;e&&(f=e.start.line,g=e.start.column,a+=" - "+f+":"+g);for(var h=Error.prototype.constructor.call(this,a),i=0;i<d.length;i++)this[d[i]]=h[d[i]];Error.captureStackTrace&&Error.captureStackTrace(this,c),e&&(this.lineNumber=f,this.column=g)}b.__esModule=!0;var d=["description","fileName","lineNumber","message","name","number","stack"];c.prototype=new Error,b["default"]=c,a.exports=b["default"]},function(a,b){"use strict";function c(a){return j[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return l.test(a)?a.replace(k,c):a}function g(a){return a||0===a?o(a)&&0===a.length?!0:!1:!0}function h(a,b){return a.path=b,a}function i(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.blockParams=h,b.appendContextPath=i;var j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},k=/[&<>"'`]/g,l=/[&<>"'`]/,m=Object.prototype.toString;b.toString=m;var n=function(a){return"function"==typeof a};n(/x/)&&(b.isFunction=n=function(a){return"function"==typeof a&&"[object Function]"===m.call(a)});var n;b.isFunction=n;var o=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===m.call(a):!1};b.isArray=o},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=p.COMPILER_REVISION;if(b!==c){if(c>b){var d=p.REVISION_CHANGES[c],e=p.REVISION_CHANGES[b];throw new o["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new o["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=m.extend({},d,e.hash)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;i>h&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new o["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){var c=void 0===arguments[1]?{}:arguments[1],f=c.data;
d._setup(c),!c.partial&&a.useData&&(f=j(b,f));var g=void 0,h=a.useBlockParams?[]:void 0;return a.useDepths&&(g=c.depths?[b].concat(c.depths):[b]),a.main.call(e,b,e.helpers,e.partials,f,h,g)}if(!b)throw new o["default"]("No environment passed to template");if(!a||!a.main)throw new o["default"]("Unknown template object: "+typeof a);b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new o["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:m.escapeExpression,invokePartial:c,fn:function(b){return a[b]},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=m.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new o["default"]("must pass block params");if(a.useDepths&&!g)throw new o["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=void 0===arguments[1]?{}:arguments[1];return c.call(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),g&&[b].concat(g))}return h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a=c.partials[c.name],a}function h(a,b,c){if(c.partial=!0,void 0===a)throw new o["default"]("The partial "+c.name+" could not be found");return a instanceof Function?a(b,c):void 0}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?p.createFrame(b):{},b.root=a),b}var k=c(8)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var l=c(12),m=k(l),n=c(11),o=k(n),p=c(9)},function(a,b){"use strict";b.__esModule=!0;var c=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,content:12,COMMENT:13,CONTENT:14,openRawBlock:15,END_RAW_BLOCK:16,OPEN_RAW_BLOCK:17,helperName:18,openRawBlock_repetition0:19,openRawBlock_option0:20,CLOSE_RAW_BLOCK:21,openBlock:22,block_option0:23,closeBlock:24,openInverse:25,block_option1:26,OPEN_BLOCK:27,openBlock_repetition0:28,openBlock_option0:29,openBlock_option1:30,CLOSE:31,OPEN_INVERSE:32,openInverse_repetition0:33,openInverse_option0:34,openInverse_option1:35,openInverseChain:36,OPEN_INVERSE_CHAIN:37,openInverseChain_repetition0:38,openInverseChain_option0:39,openInverseChain_option1:40,inverseAndProgram:41,INVERSE:42,inverseChain:43,inverseChain_option0:44,OPEN_ENDBLOCK:45,OPEN:46,mustache_repetition0:47,mustache_option0:48,OPEN_UNESCAPED:49,mustache_repetition1:50,mustache_option1:51,CLOSE_UNESCAPED:52,OPEN_PARTIAL:53,partialName:54,partial_repetition0:55,partial_option0:56,param:57,sexpr:58,OPEN_SEXPR:59,sexpr_repetition0:60,sexpr_option0:61,CLOSE_SEXPR:62,hash:63,hash_repetition_plus0:64,hashSegment:65,ID:66,EQUALS:67,blockParams:68,OPEN_BLOCK_PARAMS:69,blockParams_repetition_plus0:70,CLOSE_BLOCK_PARAMS:71,path:72,dataName:73,STRING:74,NUMBER:75,BOOLEAN:76,UNDEFINED:77,NULL:78,DATA:79,pathSegments:80,SEP:81,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",13:"COMMENT",14:"CONTENT",16:"END_RAW_BLOCK",17:"OPEN_RAW_BLOCK",21:"CLOSE_RAW_BLOCK",27:"OPEN_BLOCK",31:"CLOSE",32:"OPEN_INVERSE",37:"OPEN_INVERSE_CHAIN",42:"INVERSE",45:"OPEN_ENDBLOCK",46:"OPEN",49:"OPEN_UNESCAPED",52:"CLOSE_UNESCAPED",53:"OPEN_PARTIAL",59:"OPEN_SEXPR",62:"CLOSE_SEXPR",66:"ID",67:"EQUALS",69:"OPEN_BLOCK_PARAMS",71:"CLOSE_BLOCK_PARAMS",74:"STRING",75:"NUMBER",76:"BOOLEAN",77:"UNDEFINED",78:"NULL",79:"DATA",81:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[12,1],[10,3],[15,5],[9,4],[9,4],[22,6],[25,6],[36,6],[41,2],[43,3],[43,1],[24,3],[8,5],[8,5],[11,5],[57,1],[57,1],[58,5],[63,1],[65,3],[68,3],[18,1],[18,1],[18,1],[18,1],[18,1],[18,1],[18,1],[54,1],[54,1],[73,2],[72,1],[80,3],[80,1],[6,0],[6,2],[19,0],[19,2],[20,0],[20,1],[23,0],[23,1],[26,0],[26,1],[28,0],[28,2],[29,0],[29,1],[30,0],[30,1],[33,0],[33,2],[34,0],[34,1],[35,0],[35,1],[38,0],[38,2],[39,0],[39,1],[40,0],[40,1],[44,0],[44,1],[47,0],[47,2],[48,0],[48,1],[50,0],[50,2],[51,0],[51,1],[55,0],[55,2],[56,0],[56,1],[60,0],[60,2],[61,0],[61,1],[64,1],[64,2],[70,1],[70,2]],performAction:function(a,b,c,d,e,f){var g=f.length-1;switch(e){case 1:return f[g-1];case 2:this.$=new d.Program(f[g],null,{},d.locInfo(this._$));break;case 3:this.$=f[g];break;case 4:this.$=f[g];break;case 5:this.$=f[g];break;case 6:this.$=f[g];break;case 7:this.$=f[g];break;case 8:this.$=new d.CommentStatement(d.stripComment(f[g]),d.stripFlags(f[g],f[g]),d.locInfo(this._$));break;case 9:this.$=new d.ContentStatement(f[g],d.locInfo(this._$));break;case 10:this.$=d.prepareRawBlock(f[g-2],f[g-1],f[g],this._$);break;case 11:this.$={path:f[g-3],params:f[g-2],hash:f[g-1]};break;case 12:this.$=d.prepareBlock(f[g-3],f[g-2],f[g-1],f[g],!1,this._$);break;case 13:this.$=d.prepareBlock(f[g-3],f[g-2],f[g-1],f[g],!0,this._$);break;case 14:this.$={path:f[g-4],params:f[g-3],hash:f[g-2],blockParams:f[g-1],strip:d.stripFlags(f[g-5],f[g])};break;case 15:this.$={path:f[g-4],params:f[g-3],hash:f[g-2],blockParams:f[g-1],strip:d.stripFlags(f[g-5],f[g])};break;case 16:this.$={path:f[g-4],params:f[g-3],hash:f[g-2],blockParams:f[g-1],strip:d.stripFlags(f[g-5],f[g])};break;case 17:this.$={strip:d.stripFlags(f[g-1],f[g-1]),program:f[g]};break;case 18:var h=d.prepareBlock(f[g-2],f[g-1],f[g],f[g],!1,this._$),i=new d.Program([h],null,{},d.locInfo(this._$));i.chained=!0,this.$={strip:f[g-2].strip,program:i,chain:!0};break;case 19:this.$=f[g];break;case 20:this.$={path:f[g-1],strip:d.stripFlags(f[g-2],f[g])};break;case 21:this.$=d.prepareMustache(f[g-3],f[g-2],f[g-1],f[g-4],d.stripFlags(f[g-4],f[g]),this._$);break;case 22:this.$=d.prepareMustache(f[g-3],f[g-2],f[g-1],f[g-4],d.stripFlags(f[g-4],f[g]),this._$);break;case 23:this.$=new d.PartialStatement(f[g-3],f[g-2],f[g-1],d.stripFlags(f[g-4],f[g]),d.locInfo(this._$));break;case 24:this.$=f[g];break;case 25:this.$=f[g];break;case 26:this.$=new d.SubExpression(f[g-3],f[g-2],f[g-1],d.locInfo(this._$));break;case 27:this.$=new d.Hash(f[g],d.locInfo(this._$));break;case 28:this.$=new d.HashPair(d.id(f[g-2]),f[g],d.locInfo(this._$));break;case 29:this.$=d.id(f[g-1]);break;case 30:this.$=f[g];break;case 31:this.$=f[g];break;case 32:this.$=new d.StringLiteral(f[g],d.locInfo(this._$));break;case 33:this.$=new d.NumberLiteral(f[g],d.locInfo(this._$));break;case 34:this.$=new d.BooleanLiteral(f[g],d.locInfo(this._$));break;case 35:this.$=new d.UndefinedLiteral(d.locInfo(this._$));break;case 36:this.$=new d.NullLiteral(d.locInfo(this._$));break;case 37:this.$=f[g];break;case 38:this.$=f[g];break;case 39:this.$=d.preparePath(!0,f[g],this._$);break;case 40:this.$=d.preparePath(!1,f[g],this._$);break;case 41:f[g-2].push({part:d.id(f[g]),original:f[g],separator:f[g-1]}),this.$=f[g-2];break;case 42:this.$=[{part:d.id(f[g]),original:f[g]}];break;case 43:this.$=[];break;case 44:f[g-1].push(f[g]);break;case 45:this.$=[];break;case 46:f[g-1].push(f[g]);break;case 53:this.$=[];break;case 54:f[g-1].push(f[g]);break;case 59:this.$=[];break;case 60:f[g-1].push(f[g]);break;case 65:this.$=[];break;case 66:f[g-1].push(f[g]);break;case 73:this.$=[];break;case 74:f[g-1].push(f[g]);break;case 77:this.$=[];break;case 78:f[g-1].push(f[g]);break;case 81:this.$=[];break;case 82:f[g-1].push(f[g]);break;case 85:this.$=[];break;case 86:f[g-1].push(f[g]);break;case 89:this.$=[f[g]];break;case 90:f[g-1].push(f[g]);break;case 91:this.$=[f[g]];break;case 92:f[g-1].push(f[g])}},table:[{3:1,4:2,5:[2,43],6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],46:[2,43],49:[2,43],53:[2,43]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:[1,11],14:[1,18],15:16,17:[1,21],22:14,25:15,27:[1,19],32:[1,20],37:[2,2],42:[2,2],45:[2,2],46:[1,12],49:[1,13],53:[1,17]},{1:[2,1]},{5:[2,44],13:[2,44],14:[2,44],17:[2,44],27:[2,44],32:[2,44],37:[2,44],42:[2,44],45:[2,44],46:[2,44],49:[2,44],53:[2,44]},{5:[2,3],13:[2,3],14:[2,3],17:[2,3],27:[2,3],32:[2,3],37:[2,3],42:[2,3],45:[2,3],46:[2,3],49:[2,3],53:[2,3]},{5:[2,4],13:[2,4],14:[2,4],17:[2,4],27:[2,4],32:[2,4],37:[2,4],42:[2,4],45:[2,4],46:[2,4],49:[2,4],53:[2,4]},{5:[2,5],13:[2,5],14:[2,5],17:[2,5],27:[2,5],32:[2,5],37:[2,5],42:[2,5],45:[2,5],46:[2,5],49:[2,5],53:[2,5]},{5:[2,6],13:[2,6],14:[2,6],17:[2,6],27:[2,6],32:[2,6],37:[2,6],42:[2,6],45:[2,6],46:[2,6],49:[2,6],53:[2,6]},{5:[2,7],13:[2,7],14:[2,7],17:[2,7],27:[2,7],32:[2,7],37:[2,7],42:[2,7],45:[2,7],46:[2,7],49:[2,7],53:[2,7]},{5:[2,8],13:[2,8],14:[2,8],17:[2,8],27:[2,8],32:[2,8],37:[2,8],42:[2,8],45:[2,8],46:[2,8],49:[2,8],53:[2,8]},{18:22,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:33,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{4:34,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],37:[2,43],42:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{4:35,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],42:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{12:36,14:[1,18]},{18:38,54:37,58:39,59:[1,40],66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{5:[2,9],13:[2,9],14:[2,9],16:[2,9],17:[2,9],27:[2,9],32:[2,9],37:[2,9],42:[2,9],45:[2,9],46:[2,9],49:[2,9],53:[2,9]},{18:41,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:42,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:43,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{31:[2,73],47:44,59:[2,73],66:[2,73],74:[2,73],75:[2,73],76:[2,73],77:[2,73],78:[2,73],79:[2,73]},{21:[2,30],31:[2,30],52:[2,30],59:[2,30],62:[2,30],66:[2,30],69:[2,30],74:[2,30],75:[2,30],76:[2,30],77:[2,30],78:[2,30],79:[2,30]},{21:[2,31],31:[2,31],52:[2,31],59:[2,31],62:[2,31],66:[2,31],69:[2,31],74:[2,31],75:[2,31],76:[2,31],77:[2,31],78:[2,31],79:[2,31]},{21:[2,32],31:[2,32],52:[2,32],59:[2,32],62:[2,32],66:[2,32],69:[2,32],74:[2,32],75:[2,32],76:[2,32],77:[2,32],78:[2,32],79:[2,32]},{21:[2,33],31:[2,33],52:[2,33],59:[2,33],62:[2,33],66:[2,33],69:[2,33],74:[2,33],75:[2,33],76:[2,33],77:[2,33],78:[2,33],79:[2,33]},{21:[2,34],31:[2,34],52:[2,34],59:[2,34],62:[2,34],66:[2,34],69:[2,34],74:[2,34],75:[2,34],76:[2,34],77:[2,34],78:[2,34],79:[2,34]},{21:[2,35],31:[2,35],52:[2,35],59:[2,35],62:[2,35],66:[2,35],69:[2,35],74:[2,35],75:[2,35],76:[2,35],77:[2,35],78:[2,35],79:[2,35]},{21:[2,36],31:[2,36],52:[2,36],59:[2,36],62:[2,36],66:[2,36],69:[2,36],74:[2,36],75:[2,36],76:[2,36],77:[2,36],78:[2,36],79:[2,36]},{21:[2,40],31:[2,40],52:[2,40],59:[2,40],62:[2,40],66:[2,40],69:[2,40],74:[2,40],75:[2,40],76:[2,40],77:[2,40],78:[2,40],79:[2,40],81:[1,45]},{66:[1,32],80:46},{21:[2,42],31:[2,42],52:[2,42],59:[2,42],62:[2,42],66:[2,42],69:[2,42],74:[2,42],75:[2,42],76:[2,42],77:[2,42],78:[2,42],79:[2,42],81:[2,42]},{50:47,52:[2,77],59:[2,77],66:[2,77],74:[2,77],75:[2,77],76:[2,77],77:[2,77],78:[2,77],79:[2,77]},{23:48,36:50,37:[1,52],41:51,42:[1,53],43:49,45:[2,49]},{26:54,41:55,42:[1,53],45:[2,51]},{16:[1,56]},{31:[2,81],55:57,59:[2,81],66:[2,81],74:[2,81],75:[2,81],76:[2,81],77:[2,81],78:[2,81],79:[2,81]},{31:[2,37],59:[2,37],66:[2,37],74:[2,37],75:[2,37],76:[2,37],77:[2,37],78:[2,37],79:[2,37]},{31:[2,38],59:[2,38],66:[2,38],74:[2,38],75:[2,38],76:[2,38],77:[2,38],78:[2,38],79:[2,38]},{18:58,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{28:59,31:[2,53],59:[2,53],66:[2,53],69:[2,53],74:[2,53],75:[2,53],76:[2,53],77:[2,53],78:[2,53],79:[2,53]},{31:[2,59],33:60,59:[2,59],66:[2,59],69:[2,59],74:[2,59],75:[2,59],76:[2,59],77:[2,59],78:[2,59],79:[2,59]},{19:61,21:[2,45],59:[2,45],66:[2,45],74:[2,45],75:[2,45],76:[2,45],77:[2,45],78:[2,45],79:[2,45]},{18:65,31:[2,75],48:62,57:63,58:66,59:[1,40],63:64,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{66:[1,70]},{21:[2,39],31:[2,39],52:[2,39],59:[2,39],62:[2,39],66:[2,39],69:[2,39],74:[2,39],75:[2,39],76:[2,39],77:[2,39],78:[2,39],79:[2,39],81:[1,45]},{18:65,51:71,52:[2,79],57:72,58:66,59:[1,40],63:73,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{24:74,45:[1,75]},{45:[2,50]},{4:76,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],37:[2,43],42:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{45:[2,19]},{18:77,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{4:78,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{24:79,45:[1,75]},{45:[2,52]},{5:[2,10],13:[2,10],14:[2,10],17:[2,10],27:[2,10],32:[2,10],37:[2,10],42:[2,10],45:[2,10],46:[2,10],49:[2,10],53:[2,10]},{18:65,31:[2,83],56:80,57:81,58:66,59:[1,40],63:82,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{59:[2,85],60:83,62:[2,85],66:[2,85],74:[2,85],75:[2,85],76:[2,85],77:[2,85],78:[2,85],79:[2,85]},{18:65,29:84,31:[2,55],57:85,58:66,59:[1,40],63:86,64:67,65:68,66:[1,69],69:[2,55],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:65,31:[2,61],34:87,57:88,58:66,59:[1,40],63:89,64:67,65:68,66:[1,69],69:[2,61],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:65,20:90,21:[2,47],57:91,58:66,59:[1,40],63:92,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{31:[1,93]},{31:[2,74],59:[2,74],66:[2,74],74:[2,74],75:[2,74],76:[2,74],77:[2,74],78:[2,74],79:[2,74]},{31:[2,76]},{21:[2,24],31:[2,24],52:[2,24],59:[2,24],62:[2,24],66:[2,24],69:[2,24],74:[2,24],75:[2,24],76:[2,24],77:[2,24],78:[2,24],79:[2,24]},{21:[2,25],31:[2,25],52:[2,25],59:[2,25],62:[2,25],66:[2,25],69:[2,25],74:[2,25],75:[2,25],76:[2,25],77:[2,25],78:[2,25],79:[2,25]},{21:[2,27],31:[2,27],52:[2,27],62:[2,27],65:94,66:[1,95],69:[2,27]},{21:[2,89],31:[2,89],52:[2,89],62:[2,89],66:[2,89],69:[2,89]},{21:[2,42],31:[2,42],52:[2,42],59:[2,42],62:[2,42],66:[2,42],67:[1,96],69:[2,42],74:[2,42],75:[2,42],76:[2,42],77:[2,42],78:[2,42],79:[2,42],81:[2,42]},{21:[2,41],31:[2,41],52:[2,41],59:[2,41],62:[2,41],66:[2,41],69:[2,41],74:[2,41],75:[2,41],76:[2,41],77:[2,41],78:[2,41],79:[2,41],81:[2,41]},{52:[1,97]},{52:[2,78],59:[2,78],66:[2,78],74:[2,78],75:[2,78],76:[2,78],77:[2,78],78:[2,78],79:[2,78]},{52:[2,80]},{5:[2,12],13:[2,12],14:[2,12],17:[2,12],27:[2,12],32:[2,12],37:[2,12],42:[2,12],45:[2,12],46:[2,12],49:[2,12],53:[2,12]},{18:98,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{36:50,37:[1,52],41:51,42:[1,53],43:100,44:99,45:[2,71]},{31:[2,65],38:101,59:[2,65],66:[2,65],69:[2,65],74:[2,65],75:[2,65],76:[2,65],77:[2,65],78:[2,65],79:[2,65]},{45:[2,17]},{5:[2,13],13:[2,13],14:[2,13],17:[2,13],27:[2,13],32:[2,13],37:[2,13],42:[2,13],45:[2,13],46:[2,13],49:[2,13],53:[2,13]},{31:[1,102]},{31:[2,82],59:[2,82],66:[2,82],74:[2,82],75:[2,82],76:[2,82],77:[2,82],78:[2,82],79:[2,82]},{31:[2,84]},{18:65,57:104,58:66,59:[1,40],61:103,62:[2,87],63:105,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{30:106,31:[2,57],68:107,69:[1,108]},{31:[2,54],59:[2,54],66:[2,54],69:[2,54],74:[2,54],75:[2,54],76:[2,54],77:[2,54],78:[2,54],79:[2,54]},{31:[2,56],69:[2,56]},{31:[2,63],35:109,68:110,69:[1,108]},{31:[2,60],59:[2,60],66:[2,60],69:[2,60],74:[2,60],75:[2,60],76:[2,60],77:[2,60],78:[2,60],79:[2,60]},{31:[2,62],69:[2,62]},{21:[1,111]},{21:[2,46],59:[2,46],66:[2,46],74:[2,46],75:[2,46],76:[2,46],77:[2,46],78:[2,46],79:[2,46]},{21:[2,48]},{5:[2,21],13:[2,21],14:[2,21],17:[2,21],27:[2,21],32:[2,21],37:[2,21],42:[2,21],45:[2,21],46:[2,21],49:[2,21],53:[2,21]},{21:[2,90],31:[2,90],52:[2,90],62:[2,90],66:[2,90],69:[2,90]},{67:[1,96]},{18:65,57:112,58:66,59:[1,40],66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{5:[2,22],13:[2,22],14:[2,22],17:[2,22],27:[2,22],32:[2,22],37:[2,22],42:[2,22],45:[2,22],46:[2,22],49:[2,22],53:[2,22]},{31:[1,113]},{45:[2,18]},{45:[2,72]},{18:65,31:[2,67],39:114,57:115,58:66,59:[1,40],63:116,64:67,65:68,66:[1,69],69:[2,67],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{5:[2,23],13:[2,23],14:[2,23],17:[2,23],27:[2,23],32:[2,23],37:[2,23],42:[2,23],45:[2,23],46:[2,23],49:[2,23],53:[2,23]},{62:[1,117]},{59:[2,86],62:[2,86],66:[2,86],74:[2,86],75:[2,86],76:[2,86],77:[2,86],78:[2,86],79:[2,86]},{62:[2,88]},{31:[1,118]},{31:[2,58]},{66:[1,120],70:119},{31:[1,121]},{31:[2,64]},{14:[2,11]},{21:[2,28],31:[2,28],52:[2,28],62:[2,28],66:[2,28],69:[2,28]},{5:[2,20],13:[2,20],14:[2,20],17:[2,20],27:[2,20],32:[2,20],37:[2,20],42:[2,20],45:[2,20],46:[2,20],49:[2,20],53:[2,20]},{31:[2,69],40:122,68:123,69:[1,108]},{31:[2,66],59:[2,66],66:[2,66],69:[2,66],74:[2,66],75:[2,66],76:[2,66],77:[2,66],78:[2,66],79:[2,66]},{31:[2,68],69:[2,68]},{21:[2,26],31:[2,26],52:[2,26],59:[2,26],62:[2,26],66:[2,26],69:[2,26],74:[2,26],75:[2,26],76:[2,26],77:[2,26],78:[2,26],79:[2,26]},{13:[2,14],14:[2,14],17:[2,14],27:[2,14],32:[2,14],37:[2,14],42:[2,14],45:[2,14],46:[2,14],49:[2,14],53:[2,14]},{66:[1,125],71:[1,124]},{66:[2,91],71:[2,91]},{13:[2,15],14:[2,15],17:[2,15],27:[2,15],32:[2,15],42:[2,15],45:[2,15],46:[2,15],49:[2,15],53:[2,15]},{31:[1,126]},{31:[2,70]},{31:[2,29]},{66:[2,92],71:[2,92]},{13:[2,16],14:[2,16],17:[2,16],27:[2,16],32:[2,16],37:[2,16],42:[2,16],45:[2,16],46:[2,16],49:[2,16],53:[2,16]}],defaultActions:{4:[2,1],49:[2,50],51:[2,19],55:[2,52],64:[2,76],73:[2,80],78:[2,17],82:[2,84],92:[2,48],99:[2,18],100:[2,72],105:[2,88],107:[2,58],110:[2,64],111:[2,11],123:[2,70],124:[2,29]},parseError:function(a){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:((null===n||"undefined"==typeof n)&&(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,-1*t*2),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substr(a,b.yyleng-c)}switch(c){case 0:if("\\\\"===b.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu"),b.yytext)return 14;break;case 1:return 14;case 2:return this.popState(),14;case 3:return b.yytext=b.yytext.substr(5,b.yyleng-9),this.popState(),16;case 4:return 14;case 5:return this.popState(),13;case 6:return 59;case 7:return 62;case 8:return 17;case 9:return this.popState(),this.begin("raw"),21;case 10:return 53;case 11:return 27;case 12:return 45;case 13:return this.popState(),42;case 14:return this.popState(),42;case 15:return 32;case 16:return 37;case 17:return 49;case 18:return 46;case 19:this.unput(b.yytext),this.popState(),this.begin("com");break;case 20:return this.popState(),13;case 21:return 46;case 22:return 67;case 23:return 66;case 24:return 66;case 25:return 81;case 26:break;case 27:return this.popState(),52;case 28:return this.popState(),31;case 29:return b.yytext=e(1,2).replace(/\\"/g,'"'),74;case 30:return b.yytext=e(1,2).replace(/\\'/g,"'"),74;case 31:return 79;case 32:return 76;case 33:return 76;case 34:return 77;case 35:return 78;case 36:return 75;case 37:return 69;case 38:return 71;case 39:return 66;case 40:return 66;case 41:return"INVALID";case 42:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],a.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,42],inclusive:!0}},a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}();b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(){}function e(a,b,c){void 0===b&&(b=a.length);var d=a[b-1],e=a[b-2];return d?"ContentStatement"===d.type?(e||!c?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(d.original):void 0:c}function f(a,b,c){void 0===b&&(b=-1);var d=a[b+1],e=a[b+2];return d?"ContentStatement"===d.type?(e||!c?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(d.original):void 0:c}function g(a,b,c){var d=a[null==b?0:b+1];if(d&&"ContentStatement"===d.type&&(c||!d.rightStripped)){var e=d.value;d.value=d.value.replace(c?/^\s+/:/^[ \t]*\r?\n?/,""),d.rightStripped=d.value!==e}}function h(a,b,c){var d=a[null==b?a.length-1:b-1];if(d&&"ContentStatement"===d.type&&(c||!d.leftStripped)){var e=d.value;return d.value=d.value.replace(c?/\s+$/:/[ \t]+$/,""),d.leftStripped=d.value!==e,d.leftStripped}}var i=c(8)["default"];b.__esModule=!0;var j=c(6),k=i(j);d.prototype=new k["default"],d.prototype.Program=function(a){var b=!this.isRootSeen;this.isRootSeen=!0;for(var c=a.body,d=0,i=c.length;i>d;d++){var j=c[d],k=this.accept(j);if(k){var l=e(c,d,b),m=f(c,d,b),n=k.openStandalone&&l,o=k.closeStandalone&&m,p=k.inlineStandalone&&l&&m;k.close&&g(c,d,!0),k.open&&h(c,d,!0),p&&(g(c,d),h(c,d)&&"PartialStatement"===j.type&&(j.indent=/([ \t]+$)/.exec(c[d-1].original)[1])),n&&(g((j.program||j.inverse).body),h(c,d)),o&&(g(c,d),h((j.inverse||j.program).body))}}return a},d.prototype.BlockStatement=function(a){this.accept(a.program),this.accept(a.inverse);var b=a.program||a.inverse,c=a.program&&a.inverse,d=c,i=c;if(c&&c.chained)for(d=c.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var j={open:a.openStrip.open,close:a.closeStrip.close,openStandalone:f(b.body),closeStandalone:e((d||b).body)};if(a.openStrip.close&&g(b.body,null,!0),c){var k=a.inverseStrip;k.open&&h(b.body,null,!0),k.close&&g(d.body,null,!0),a.closeStrip.open&&h(i.body,null,!0),e(b.body)&&f(d.body)&&(h(b.body),g(d.body))}else a.closeStrip.open&&h(b.body,null,!0);return j},d.prototype.MustacheStatement=function(a){return a.strip},d.prototype.PartialStatement=d.prototype.CommentStatement=function(a){var b=a.strip||{};return{inlineStandalone:!0,open:b.open,close:b.close}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){this.source=a,this.start={line:b.first_line,column:b.first_column},this.end={line:b.last_line,column:b.last_column}}function e(a){return/^\[.*\]$/.test(a)?a.substr(1,a.length-2):a}function f(a,b){return{open:"~"===a.charAt(2),close:"~"===b.charAt(b.length-3)}}function g(a){return a.replace(/^\{\{~?\!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function h(a,b,c){c=this.locInfo(c);for(var d=a?"@":"",e=[],f=0,g="",h=0,i=b.length;i>h;h++){var j=b[h].part,k=b[h].original!==j;if(d+=(b[h].separator||"")+j,k||".."!==j&&"."!==j&&"this"!==j)e.push(j);else{if(e.length>0)throw new n["default"]("Invalid path: "+d,{loc:c});".."===j&&(f++,g+="../")}}return new this.PathExpression(a,f,e,d,c)}function i(a,b,c,d,e,f){var g=d.charAt(3)||d.charAt(2),h="{"!==g&&"&"!==g;return new this.MustacheStatement(a,b,c,h,e,this.locInfo(f))}function j(a,b,c,d){if(a.path.original!==c){var e={loc:a.path.loc};throw new n["default"](a.path.original+" doesn't match "+c,e)}d=this.locInfo(d);var f=new this.Program([b],null,{},d);return new this.BlockStatement(a.path,a.params,a.hash,f,void 0,{},{},{},d)}function k(a,b,c,d,e,f){if(d&&d.path&&a.path.original!==d.path.original){var g={loc:a.path.loc};throw new n["default"](a.path.original+" doesn't match "+d.path.original,g)}b.blockParams=a.blockParams;var h=void 0,i=void 0;return c&&(c.chain&&(c.program.body[0].closeStrip=d.strip),i=c.strip,h=c.program),e&&(e=h,h=b,b=e),new this.BlockStatement(a.path,a.params,a.hash,b,h,a.strip,i,d&&d.strip,this.locInfo(f))}var l=c(8)["default"];b.__esModule=!0,b.SourceLocation=d,b.id=e,b.stripFlags=f,b.stripComment=g,b.preparePath=h,b.prepareMustache=i,b.prepareRawBlock=j,b.prepareBlock=k;var m=c(11),n=l(m)},function(a,b,c){"use strict";function d(a,b,c){if(f.isArray(a)){for(var d=[],e=0,g=a.length;g>e;e++)d.push(b.wrap(a[e],c));return d}return"boolean"==typeof a||"number"==typeof a?a+"":a}function e(a){this.srcFile=a,this.source=[]}b.__esModule=!0;var f=c(12),g=void 0;try{}catch(h){}g||(g=function(a,b,c,d){this.src="",d&&this.add(d)},g.prototype={add:function(a){f.isArray(a)&&(a=a.join("")),this.src+=a},prepend:function(a){f.isArray(a)&&(a=a.join("")),this.src=a+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),e.prototype={prepend:function(a,b){this.source.unshift(this.wrap(a,b))},push:function(a,b){this.source.push(this.wrap(a,b))},merge:function(){var a=this.empty();return this.each(function(b){a.add(["  ",b,"\n"])}),a},each:function(a){for(var b=0,c=this.source.length;c>b;b++)a(this.source[b])},empty:function(){var a=void 0===arguments[0]?this.currentLocation||{start:{}}:arguments[0];return new g(a.start.line,a.start.column,this.srcFile)},wrap:function(a){var b=void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return a instanceof g?a:(a=d(a,this,b),new g(b.start.line,b.start.column,this.srcFile,a))},functionCall:function(a,b,c){return c=this.generateList(c),this.wrap([a,b?"."+b+"(":"(",c,")"])},quotedString:function(a){return'"'+(a+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var b=[];for(var c in a)if(a.hasOwnProperty(c)){var e=d(a[c],this);"undefined"!==e&&b.push([this.quotedString(c),":",e])
}var f=this.generateList(b);return f.prepend("{"),f.add("}"),f},generateList:function(a,b){for(var c=this.empty(b),e=0,f=a.length;f>e;e++)e&&c.add(","),c.add(d(a[e],this,b));return c},generateArray:function(a,b){var c=this.generateList(a,b);return c.prepend("["),c.add("]"),c}},b["default"]=e,a.exports=b["default"]}])});
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-borderradius-generatedcontent-csstransitions-shiv-mq-teststyles-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){i.cssText=a}function A(a,b){return z(prefixes.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.8.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k=":)",l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},w=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return v("@media "+b+" { #"+g+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.borderradius=function(){return F("borderRadius")},p.csstransitions=function(){return F("transition")},p.generatedcontent=function(){var a;return v(["#",g,"{font:0/0 a}#",g,':after{content:"',k,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a};for(var G in p)y(p,G)&&(u=G.toLowerCase(),e[u]=p[G](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),h=j=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.mq=w,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=v,e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
(function(window,document) {

    var prefix = "", _addEventListener, onwheel, support;

    // detect event model
    if ( window.addEventListener ) {
        _addEventListener = "addEventListener";
    } else {
        _addEventListener = "attachEvent";
        prefix = "on";
    }

    // detect available wheel event
    support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
              document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
              "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

    window.addWheelListener = function( elem, callback, useCapture ) {
        _addWheelListener( elem, support, callback, useCapture );

        // handle MozMousePixelScroll in older Firefox
        if( support == "DOMMouseScroll" ) {
            _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
        }
    };

    function _addWheelListener( elem, eventName, callback, useCapture ) {
        elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
            !originalEvent && ( originalEvent = window.event );

            // create a normalized event object
            var event = {
                // keep a ref to the original event object
                originalEvent: originalEvent,
                target: originalEvent.target || originalEvent.srcElement,
                type: "wheel",
                deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
                deltaX: 0,
                deltaZ: 0,
                preventDefault: function() {
                    originalEvent.preventDefault ?
                        originalEvent.preventDefault() :
                        originalEvent.returnValue = false;
                }
            };
            
            // calculate deltaY (and deltaX) according to the event
            if ( support == "mousewheel" ) {
                event.deltaY = - 1/40 * originalEvent.wheelDelta;
                // Webkit also support wheelDeltaX
                originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
            } else {
                event.deltaY = originalEvent.detail;
            }

            // it's time to fire the callback
            return callback( event );

        }, useCapture || false );
    }

})(window,document);
var app = app || {};

app.a = (function(w,d) {
  /*
  ** User address related functions
   */

   var el = app.el;
   var f = app.fns;
   var state = app.s;

   function address() {
     return {
       // form validation for when user enters address and selects boro
      checkAddressInput : function(address, borough) {        
        if (address !== "" && borough !== undefined) {  
          app.events.publish('state-change', {
            formFilled : true
          });
          
          app.f.goToNextSlide();
          var parsed_address = app.a.parseAddressInput(address);      
          // delay API calls so user sees loading gif
          setTimeout(function(){    
            console.log('form filled, parsed address: ', parsed_address);
            app.map.geoclient(parsed_address[0], parsed_address[1], borough); 
          }, 1000);              

        } else if (address === "" && borough === undefined) {      
          if (app.f.hasClass(app.el.valErrorAddress, 'vis-hidden')===true && app.f.hasClass(app.el.valErrorBoro, 'vis-hidden')===true){
            app.f.toggleClass(app.el.valErrorAddress, 'vis-hidden');
            app.f.toggleClass(app.el.valErrorBoro, 'vis-hidden');
          }

        } else if (borough === undefined) {
          // alert('Please select your borough.');
          if (app.f.hasClass(app.el.valErrorBoro, 'vis-hidden')===true) {
            app.f.toggleClass(app.el.valErrorBoro, 'vis-hidden');
          }

        } else if (address === '') {
          // alert('Please enter your house number and street.');
          if (app.f.hasClass(app.el.valErrorAddress, 'vis-hidden')===true) {
            app.f.toggleClass(app.el.valErrorAddress, 'vis-hidden');
          }

        } else {
          app.f.goToPrevSlide();
        } 
      },

      // separate the building number and street name from the address input
      parseAddressInput : function(input) {
        var input_split = input.split(' '),
              len = input_split.length,
              num = input_split[0],
              input_last = input_split.splice(1, len),
              street = input_last.join(' ');
        return [num, street];
      },

      // create the mailto content for requesting rent history from dhcr
      createMailTo : function() {
        var email = "rentinfo@nyshcr.org",
              subject = "request for rent history",
              body = "Hello, \n\n" +
                          "I, YOUR NAME HERE, am currently renting " + 
                          "YOUR ADDRESS, APARTMENT NUMBER, BOROUGH, ZIPCODE" +
                          " and would like to request the rent history for this apartment." +
                          " Any information you can provide me would be greatly appreciated. \n\n" +
                          "thank you,\n\n" +
                          "- YOUR NAME HERE",
              msg = 'mailto:' + encodeURIComponent(email) +
                         '?subject=' + encodeURIComponent(subject) +
                         '&body=' + encodeURIComponent(body); 
        app.el.mailTo.setAttribute('href', msg);
      }   
    };
   }

   return {
    address : address
   };

})(window, document);
var app = app || {};

app.el = (function(w,d,$) { 
  var el;
  // drop down class
  //  code reference: http://tympanus.net/codrops/2012/10/04/custom-drop-down-list-styling/
  function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.drop-down > li > a');
    this.val = undefined;    
    this.name = undefined;
    this.index = -1;
    this.initEvents();
  }  

  // dropdown
  DropDown.prototype = {
    initEvents : function() {
      var obj = this;

      // console.log('initEvents this: ', this);

      obj.dd.on('click', function(e){
        e.preventDefault();
        // $(this).toggleClass('active');
        app.f.toggleClass(this, 'active');
        return false;
      });

      obj.opts.on('click',function(e){
        e.preventDefault();
        var opt = $(this);
        obj.val = opt.data("boro");
        obj.name = opt.text();
        // obj.data = opt.children('span').text();
        obj.index = opt.index();
        obj.placeholder.text('Borough: ' + obj.name);        
        // console.log('obj: ', obj);  
      });
    },

    getValue : function() {
      return this.val;
    },

    getIndex : function() {
      return this.index;
    }
  };  

  // references to DOM elements
  function refDOM(){
    el =  {
      navGoNext : d.querySelectorAll('.go-next'),
      navGoFirst : d.querySelectorAll('.go-first'),
      navGoFour : d.querySelectorAll('.go-step4'),
      burgerIcon : d.querySelector('.burger'),
      navBar : d.querySelector('.main-nav'),
      mainNavList : d.querySelector('.main-nav ul'),
      progressCircles : d.querySelectorAll('.margin-circles li'),
      slidesContainer : d.querySelector('.slides-container'),
      slides : d.querySelectorAll('.slide'),
      slide4 : d.querySelector('#slide-8'),
      dd : new DropDown( $('.user-data.borough-select')),
      addressInput : d.querySelector('.address-input'),
      boroSelect : d.querySelector('.user-data.borough-select'),
      boroDropDown : d.getElementById('boroughs'),
      boroDropDownItems : d.querySelectorAll('#boroughs li a'),
      selectBoro : d.getElementsByName('borough'),
      search : d.querySelector('.search'),
      valErrors : d.querySelectorAll('.validation-error'),
      valErrorAddress : d.getElementById('error-address'),
      valErrorBoro : d.getElementById('error-boro'),
      valErrorNF : d.getElementById('error-not-found'),
      yes : d.querySelectorAll('.yes'),
      no : d.querySelectorAll('.no'),
      yesNoState : false,
      map : d.getElementById('map'),
      mapMessage : d.querySelector('.map-message'),
      mailTo : d.getElementById('mail-to'),
      lightBox : d.getElementById('rent-history'),
      addToCalendar : d.getElementById('atc_text_link'),
      addToCalendarLink : d.querySelector('.atcb-link'),
      noTR : d.querySelector('.no-local-tr'),
      yesTR : d.querySelector('.yes-local-tr'),
      trModal : d.getElementsByClassName('tr-modal')[0],           
      learnMore : d.querySelector('.button.learn-more')
    };

    return el;
  }
  
   // trModalClose : d.querySelector('.org-container .close'),      

  return {
    refDOM : refDOM
  };

})(window, document, jQuery);
var app = app || {};

app.events = (function(w, d, $) {    

    var publish = function (name, o) {
       
       // console.log("EVENT [" + name + "]", o);
        $(document).trigger(name, [o]);
    
    };

    var subscribe = function (name, callback) {
        
        $(document).on(name, function(event, o){            
            callback(o);
        });

    };

    return {
        publish : publish,
        subscribe : subscribe
    }; 

})(window, document, jQuery);
var app = app || {};

app.helpers = (function(w,d,el) {
  
  // var el = app.el.refDOM();
  var state = app.s;
  app.f = {};

  app.events.subscribe('state-updated', function(updatedState){
    state = updatedState;
  });

  // key codes for up / down arrows for navigation
  var keyCodes = {
    UP : 38,
    DOWN : 40
  };  

  function registerfns() {
    app.f = {
      addEventListenerList : function (list, event, fn) {
        var i=0, len=list.length;
        for (i; i< len; i++) {
            list[i].addEventListener(event, fn, false);
        }
      },

      onKeyDown : function (event){
        var pressedKey = event.keyCode;
        if (pressedKey === keyCodes.UP) {
          app.f.goToPrevSlide();
          event.preventDefault();
        } 
        else if (pressedKey === keyCodes.DOWN) {
          app.f.goToNextSlide();
          event.preventDefault();
        }
      },

      onMouseWheel : function(event) {
        var delta = event / 30 || -event;    
        if (delta < -1) {
          app.f.goToNextSlide();
        }
        else if (delta > 1) {
          app.f.goToPrevSlide();
        } 
      },

      getSlideIndex : function(slide){
          var index;
          for (var i=0; i < app.el.slides.length; i++) { 
            if (app.el.slides[i] === slide) { 
              index = i; 
            }        
          }
          return index;
      },

      goToSlide : function(slide){
        if (!state.isAnimating && slide) {

          app.events.publish('state-change', {
            isAnimating : true,
            currentSlide : slide
          });

          var index = app.f.getSlideIndex(slide); 
          // console.log('index: ', index, ' slide: ', slide);                 
          TweenLite.to(app.el.slidesContainer, 1, {scrollTo: {y: state.pageHeight * index}, onComplete: app.f.onSlideChangeEnd});
        }
      },

      goToPrevSlide : function(callback){          
        var previous = app.f.getSlideIndex(state.currentSlide) -1;
        console.log('go previous slide', previous);
        if (previous >=0) {      
          app.f.goToSlide(app.el.slides[previous]);       
          if (callback && typeof callback === "function") { 
            callback();
          }
        }    
      },

      goToNextSlide: function(callback) {
        // console.log('local slide state: ', state);
        var index = app.f.getSlideIndex(state.currentSlide);
        var next = app.el.slides[index + 1];
        if (next && ( index === 0 || (index >= 1 && state.formFilled === true ) ) ) {      
          app.f.goToSlide(next);
          if (callback && typeof callback === "function") { 
            callback(); 
          }  
        }      
      },

      goToFirstSlide : function() {
        // reset everything to defaults
        if (state.currentSlide) {
          app.el.addressInput.value = '';
          app.f.resetSearchResultMsg();      
          app.f.hideFormValidationErrors();
          app.f.resetBoroValue();
          app.map.resetMap();
          app.f.addClass(el.yes, 'hidden');
          app.f.removeClass(el.no, 'hidden');
          app.f.addClass(el.yesTR, 'hidden');
          app.f.removeClass(el.noTR, 'hidden');
          d.querySelector('.tr-modal').innerHTML = '';
          app.f.goToSlide(app.el.slides[0]);
          app.events.publish('state-change', {
            formFilled : false
          });
        }
      },

      onSlideChangeEnd : function(){
        app.events.publish('state-change', {
          isAnimating : false
        });      
        app.f.updateProgCircles(state.currentSlide);
      },

      updateProgCircles : function (slide) {
        var s = app.f.getSlideIndex(slide),
              i = 0,
              l = app.el.progressCircles.length,
              backgroundSize;

        if (w.innerHeight <= 700 || w.innerWidth <= 1100) {
          backgroundSize = '20px';
        } else {
          backgroundSize = '25px';
        }
        
        for (i; i<l; i++) {
          var circle = app.el.progressCircles[i];
          if (s===i) {
            circle.style.backgroundImage = 'url(../assets/png/oval_25_filled.png)';
            circle.style.backgroundSize = backgroundSize;
            circle.style.backgroundRepeat = 'no-repeat';        
          } else {
            circle.style.background = 'url(../assets/png/oval_25_blank.png)';
            circle.style.backgroundSize = backgroundSize; 
            circle.style.backgroundRepeat = 'no-repeat';               
          }
        }
      },

      /*
      ** jQuery-esque helper functions
       */

       // resize window
      onResize : function() {
        // console.log('onResize called');
        var newPageHeight = w.innerHeight - 60;
        var slide = state.currentSlide;
        var index = app.f.getSlideIndex(slide);
        if (state.pageHeight !== newPageHeight) {
          app.events.publish('state-change', { pageHeight : newPageHeight });
          //This can be done via CSS only, but fails into some old browsers, so I prefer to set height via JS
          TweenLite.set([app.el.slidesContainer, app.el.slides], {height: state.pageHeight + "px"});
          //The current slide should be always on the top
          TweenLite.set(app.el.slidesContainer, {scrollTo: {y: state.pageHeight * index}});
        }
      },

      // iterate over node lists
      iterateNodeList : function(list,fn) {
        if (list && list.length) {
          var i=0, len=list.length;
          for (i; i<len; i++) {
            return fn(list[i], i);
          }
        }
        if (list && !list.length) {
          return fn(list);
        }
      },

      indexOf : function(array, item) {
        for (var i = 0; i < array.length; i++) {
          if (array[i] === item)
            return i;
        }
        return -1;
      },  
      
      hasClass : function(el, className) {
        return app.f.iterateNodeList(el, function(el){
          if (el.classList) {
            return el.classList.contains(className);
          } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
          }        
        });
      },

      addClass : function(el, className) {
        app.f.iterateNodeList(el, function(el) {
          if (el.classList) {
            el.classList.add(className);
          } else {
            el.className += ' ' + className;
          }
        });
      },

      toggleClass : function(el, className) {
        app.f.iterateNodeList(el, function(el){
          if (el.classList) {
            el.classList.toggle(className);
          } else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf(className);
            if (existingIndex >=0) {
              classes.splice(existingIndex, 1);
            } else {
              classes.push(className);
              el.className = classes.join(' ');
            }
          }
        });
      },

      removeClass : function(el, className) {
        app.f.iterateNodeList(el, function(el){
          if (el.classList) {
            el.classList.remove(className);
          }
          else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        });
      }  ,  

      // reset the yes / no message above map on slide 4
      resetSearchResultMsg : function() {
        if (app.el.yesNoState === true) {
          app.f.toggleClass(el.yes, 'hidden');
          app.f.toggleClass(el.no, 'hidden');
          app.el.yesNoState = false;
        }
      },

      // hide all validation errors
      hideFormValidationErrors : function() {
        var i=0, len=app.el.valErrors.length;
        for (i; i<len; i++) {
          if (app.f.hasClass(app.el.valErrors[i], 'vis-hidden')===false){
            app.f.addClass(app.el.valErrors[i], 'vis-hidden');
          }   
        }    
      },

      resetBoroValue : function() {
        app.el.dd.val = undefined;
        app.el.dd.placeholder.text('Select a Borough');
      },

      addToCalendar : function() {
        var curDate = new Date(),
              startDate,
              endDate;
        startDate = new Date(curDate);
        startDate.setDate(startDate.getDate() + 7);
        endDate = new Date(curDate);
        endDate.setDate(startDate.getDate() + 1);
        app.el.addToCalendar.innerHTML = 
            '<var class="atc_event">' +
                '<var class="atc_date_start">' + startDate + '</var>' +
                '<var class="atc_date_end">' + endDate + '</var>' +
                '<var class="atc_timezone">America/New_York</var>' +
                '<var class="atc_title">Check mail for my rent history</var>' +
                '<var class="atc_description">See if your rent history arrived in the mail, then go back to http://amirentstabilzed.com!</var>' +
                '<var class="atc_location">my house</var>'+
            '</var>';   
        // init the add to calendar library
        w.addtocalendar.load();
        // change the text of the link to be more descriptive
        var atcLink = d.querySelector('.atcb-link');
        atcLink.innerHTML = "Create a calendar reminder.";
        atcLink.tabindex = "-1";
      }
    };
    return app.f;
  }

  return {
    registerfns : registerfns
  };

})(window, document, app.el);
var app = app || {};

app.init = (function(w,d){
  
  function init(){
    var template = app.templates.main;

    $.getJSON('../data/content.json', function(data){
      html = template(data.languages[0].en);
      document.querySelector('#wrapper').innerHTML = html;
    })
      .done(function(){
        app.el = app.el.refDOM();
        app.a = app.a.address();
        app.f = app.helpers.registerfns();
        app.l.listen();

        app.events.publish('state-change', {
          currentSlide : app.el.slides[0]
        });

        app.f.onResize();
        app.f.goToSlide(app.el.currentSlide);
        app.a.createMailTo();
        app.f.addToCalendar();
        app.map.init();
    });
  }
  
  return {
    init : init
  };

})(window, document);
var app = app || {};

app.l = (function(w,d,$,el,f) {
  /*
  * Event listeners
  */

  // var el = app.elem;
  // var f = app.fns;
  var state = app.s; // create state object
  var a = app.a; // create address searching object
  var self = this;

    // swipe interaction for mobile
  // $(document).touchwipe({
  //   wipeUp              : function()
  //   {
  //       self.goToNextSlide();
  //   },

  //   wipeDown            : function()
  //   {
  //       self.goToPrevSlide();
  //   },

  //   min_move_x          : 50,
  //   min_move_y          : 15,
  //   preventDefaultEvents: true    
  // });

  function listen() {
    app.events.subscribe('state-updated', function(updatedState){
      state = updatedState;
    });

    // resize window height
    w.onresize = app.f.onResize;

    // use mouse wheel to scroll
    addWheelListener( w, function(e) { 
      app.f.onMouseWheel(e.deltaY); 
      e.preventDefault(); 
    });

    // up / down key navigation
    w.onkeydown = app.f.onKeyDown;

    // go back
    // addEventListenerList(el.navGoPrev, 'click', goToPrevSlide);

    // go forward
    app.f.addEventListenerList(app.el.navGoNext, 'click', app.f.goToNextSlide);

    // go to inspect rent-history
    app.f.addEventListenerList(app.el.navGoFour, 'click', function(e){
      e.preventDefault();
      
      app.events.publish('state-change', {
        formFilled : true
      });
      
      app.f.hideFormValidationErrors();
      app.f.goToSlide(app.el.slides[6]);
    });

    // hamburger icon
    app.el.burgerIcon.addEventListener('click', function(e) {
      e.preventDefault();
      app.f.toggleClass(app.el.burgerIcon, 'open');
      app.f.toggleClass(app.el.mainNavList, 'responsive');
    });

    // if dropdown is visible & user clicks outside of it collapse it
    app.el.slidesContainer.addEventListener('click', function(e){
      if (app.f.hasClass(app.el.boroSelect, 'active')) {
        app.f.removeClass(app.el.boroSelect, 'active');
      }    
    });

    // search button for address
    app.el.search.addEventListener('click', function(e){
      e.preventDefault();
      var streetAddress = app.el.addressInput.value,
            boro = app.el.dd.getValue();    
      _gaq.push(['_trackEvent', 'Address Entered', 'Search', streetAddress + ', ' + boro ]);
      app.a.checkAddressInput(streetAddress, boro);
    });

    // start over
    app.f.addEventListenerList(app.el.navGoFirst, 'click', app.f.goToFirstSlide);

    // hide address error message if it's displayed and user enters text
    app.el.addressInput.addEventListener("blur", function(e){
      if (app.el.addressInput.value !== "" && app.f.hasClass(el.valErrorAddress, 'vis-hidden') !== true) {
        app.f.addClass(app.el.valErrorAddress, 'vis-hidden');
      }
    });

    // hide boro error message if it's displayed and user clicks a button
    app.f.addEventListenerList(app.el.boroDropDownItems, 'click', function(e){
      if (app.f.hasClass(app.el.valErrorBoro, 'vis-hidden') !== true && app.el.dd.getValue !== undefined) {
        app.f.addClass(app.el.valErrorBoro, 'vis-hidden');
      }
    });

    app.el.lightBox.addEventListener('click', function(e) {
      e.preventDefault();    
      app.f.goToSlide(app.el.slides[6]);
      w.location.hash = '';
    });  

    // el.trModal.addEventListener('click', function(e) {
    //   e.preventDefault();
    //   f.goToSlide(el.slides[7]);
    //   w.location.hash = '';
    // });
  }

  return {
    listen : listen
  };

})(window, document, jQuery, app.el, app.f);
// map & cartodb stuff
var app = app || {};

app.map = (function(d,w,a,H,$){
  var el = {}, // to store DOM element references from app.ui
      f = {},  // to store DOM manipulation and UI functions from app.ui
      state = app.s,
      addressMarker, // leaflet marker to locate user's address on map
      sqlURL = "https://chenrick.cartodb.com/api/v2/sql?q=", //cartodb SQL API reference
      g = {}, // to store properties from NYC Geoclient API result
      trmodal = d.getElementsByClassName('tr-modal')[0],
      source = $("#org-template").html(),
      template = H.compile(source),
      noTR = d.querySelector('.no-local-tr'),
      yesTR = d.querySelector('.yes-local-tr'),
      hbData = {orgs: []};

  Handlebars.registerHelper('each', function(context, options) {
    var ret = "";
    for(var i=0, j=context.length; i<j; i++) {
      ret = ret + options.fn(context[i]);
    }
    return ret;
  });

  Handlebars.registerHelper('if', function(conditional, options) {
    if (conditional) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });   

  app.events.subscribe('state-updated', function(updatedState){
    state = updatedState;
  });

  function getJSON(url, type, callback) {
    a().url(url)
        .type(type)
        .on('success', function(data){
          callback(data);
          console.log('getJSON data: ', data);
        })
        .on('error', function(err){
          callback('error');
        })
        .go();
  }

  // grab property data from nyc geo-client api
  var geoclient = function(num, name, boro) {
    // create URL to pass to geoclient api
    var id = '9cd0a15f',
          appID = 'app_id=' + id + '&',
          key = '54dc84bcaca9ff4877da771750033275',
          appKey = 'app_key=' + key,
          stNum = 'houseNumber='+ num + '&',
          nameEncoded = name.replace(' ', '+'),
          stName = 'street=' + nameEncoded + '&',
          borough = 'borough=' + boro + '&',
          url = 'https://api.cityofnewyork.us/geoclient/v1/address.json?',
          urlConcat = url + stNum + stName + borough + appID + appKey;

    console.log('getting json...');
    getJSON(urlConcat, 'jsonp', checkResult);      
  };

  // see if the geolient result has a bbl
  var checkResult = function(data) {
    if (typeof data === "object" && data.address.bbl !== undefined ) {      
      var d = data.address;
      g =  {
        bbl : d.bbl,
        lon : d.longitudeInternalLabel,
        lat : d.latitudeInternalLabel,
        hNo : d.houseNumber,
        sName : d.streetName1In,
        bCode : d.boroughCode1In,
        bUSPS : d.uspsPreferredCityName,
        zip : d.zipCode,
        cd: d.communityDistrict,
        bin : d.giBuildingIdentificationNumber1,
        tr_groups : []
      };      
      var bbl = d.bbl;
      var gcr_stringify = JSON.stringify(g);
      _gaq.push(['_trackEvent', 'Geoclient Success', 'Result', gcr_stringify]);

      console.log('geoclient success, data: ', g);
      
      getCDBdata(bbl);
      showMarker(data);

    } else {      

      app.el.addressInput.value='';
      app.f.resetBoroValue();      
      if (app.f.hasClass(app.el.valErrorNF, 'vis-hidden')===true) {
        app.f.toggleClass(app.el.valErrorNF, 'vis-hidden');
      }
      if (app.f.hasClass(app.el.valErrorBoro, 'vis-hidden')===false) {
        app.f.addClass(app.el.valErrorBoro, 'vis-hidden');
      }
      if (app.f.hasClass(app.el.valErrorAddress, 'vis-hidden')===false) {
        app.f.addClass(app.el.valErrorAddress, 'vis-hidden');
      }
      
      app.events.publish('state-change', { formFilled : false });
      app.f.goToPrevSlide(); 
    }     
  };

  function trQuery(lat, lon) {
    // construct the tenants rights group query
    var query = "SELECT * FROM nyc_tenants_rights_service_areas " +
                "WHERE " +
                "ST_Contains(" +
                  "nyc_tenants_rights_service_areas.the_geom," +
                  "ST_GeomFromText(" +
                   "'Point(" + lon + " " + lat + ")', 4326" +
                  ")" +      
                ");";  
    return query;
  }  

  // check the bbl number against the cartodb data
  var getCDBdata = function(bbl) {
    // sql to pass cartodb's sql api
    var sql1 = "SELECT bbl FROM map_pluto_likely_rs " +
                  "WHERE bbl = " + bbl;    
    var sql2 = trQuery(g.lat, g.lon);                  

    getJSON(sqlURL + sql1, 'json', checkRS);
    getJSON(sqlURL + sql2, 'json', checkTR);
  };

  function checkRS(data) {
    if (data.rows.length > 0 && state.yesNoState === false) {      
      var bbl_match = JSON.stringify(data.rows[0].bbl);
      _gaq.push(['_trackEvent', 'CDB', 'Match', bbl_match]);
      app.f.toggleClass(app.el.yes, 'hidden');
      app.f.toggleClass(app.el.no, 'hidden');
      app.events.publish('state-change', { yesNoState : true });            
    } 

    app.f.goToNextSlide();
  }

  function checkTR(data) {
    if (data.rows.length > 0) {
      app.f.addClass(noTR, 'hidden');
      app.f.removeClass(yesTR, 'hidden');
      
      var i = 0, l = data.rows.length;
      for (i; i<l; i++) {
        var x = data.rows[i];
        g.tr_groups.push(x);
        hbData.orgs.push(handlebarsMake(x));
      }
      var html = template(hbData);
      trmodal.innerHTML = html;
      g.tr_groups.length = 0;     
    } 
  }

  function handlebarsMake(data) {
    var context = {
      name: data.name,
      website: data.website_url,
      phone: data.phone,
      email: data.email,
      address: data.address,
      description: data.description
    };
    // var html = template(context);
    return context;
  }  

  // if the results of the CDB SQL query have a row then show yes else display no
  var checkData = function(data) {   
    console.log('cdb data: ', data); 
    if (data.rows.length > 0 && state.yesNoState === false) {
      console.log('bbl match!');
      var bbl_match = JSON.stringify(data.rows[0].bbl);
      _gaq.push(['_trackEvent', 'CDB', 'Match', bbl_match]);
      app.f.toggleClass(el.yes, 'hidden');
      app.f.toggleClass(el.no, 'hidden');
      app.events.publish('state-change', { yesNoState : true });
    } 
    app.f.goToNextSlide();
    // console.log('checkData goToNextSlide called');
  };

  var showMarker = function(data) {
    // console.log('showMarker data: ', data);
    var x = data.address.longitudeInternalLabel,
          y = data.address.latitudeInternalLabel,
          latlng = [y, x],
          address = data.address.houseNumber + ' ' + 
                          data.address.firstStreetNameNormalized + '<br>' +
                          data.address.uspsPreferredCityName + ', NY ' +
                          data.address.zipCode;
    // remove geocoded marker if one already exists
    if (addressMarker) { 
      app.el.map.removeLayer(addressMarker);
    }
    // add a marker and pan and zoom the el.map to it
    addressMarker = new L.marker(latlng).addTo(el.map);
    addressMarker.on('popupopen', function(e){
      app.el.map.setView(latlng, 16);  
    }); 
    addressMarker.bindPopup("<b>" + address + "</b>").openPopup();   
  };

  // set up the leaflet / cartodb map
  var initMap = function() {
    app.el.map = new L.Map('map', {
      center : [40.7127, -74.0059],
      zoom : 12,
      dragging : false,
      touchZoom : false,
      doubleClickZoom : false,
      scrollWheelZoom : false,
      zoomControl : false,
      keyboard : false
    });

    var basemap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    });

    var cdbURL = 'https://chenrick.cartodb.com/api/v2/viz/20b7c6ac-ee12-11e4-b74e-0e853d047bba/viz.json';

    var cartocss = "#all_map_pluto_rent_stabl_reg_2014v1 {" +
                      "polygon-fill: #FF6600;" +
                      "polygon-opacity: 0.6;" +
                      "line-color: #000;" +
                      "line-width: 0.7;" +
                      "line-opacity: 0.3;" +
                    "}";
                    
    var sql = 'SELECT the_geom, the_geom_webmercator, cartodb_id, address, borough, ownername, unitsres ' + 
              'FROM all_nyc_likely_rent_stabl_merged';

    var taxLots;

    app.el.map.addLayer(basemap);

    cartodb.createLayer(el.map, cdbURL, {
        cartodb_logo: false, 
        legends: false,
        https: true,
        fullscreen : true     
    },
    function(layer) {
      taxLots = layer.getSubLayer(0);
      taxLots.setCartoCSS(cartocss);
      // taxLots.setSQL(sql);
      // taxLots.setInteraction(true);
      // taxLots.setInteractivity('address, borough, unitsres, ownername');
      // taxLots.on('click', function(e, pos, latlng, data){
      //   console.log('data: ', data);
      // });
      
      app.el.map.addLayer(layer, false);
      basemap.bringToBack();
    })
    // .addTo(el.map)
    .done(function(layer){
      // console.log(layer);
      // basemap.bringToBack();
    });    
  }; // end initMap()

  var resetMap = function() {
    if (addressMarker) {
      app.el.map.removeLayer(addressMarker);
    }
    app.el.map.setView([40.7127, -74.0059], 12);
  };

  function init() {
    el = app.el;
    f = app.f;
    state = app.s;
    initMap();
  }

  return   {
    init : init,
    geoclient : geoclient,
    resetMap : resetMap
  };

})(document, window, aja, Handlebars, jQuery);
var app = app || {};

app.s = (function(w,d) {
  // this is for storing the app's current state

  var state = {
    formFilled : false, // has the user filled out the address form?    
    currentSlide : null,
    isAnimating : false,
    pageHeight : null,
    yesNoState : false,
    propertyData : null
  };

  app.events.subscribe('state-change', function(updates){
    
    if (updates.isAnimating !== undefined) state.isAnimating = updates.isAnimating;
    if (updates.formFilled !== undefined) state.formFilled = updates.formFilled;    
    if (updates.currentSlide !== undefined) state.currentSlide = updates.currentSlide;
    if (updates.pageHeight !== undefined) state.pageHeight = updates.pageHeight; 
    if (updates.yesNoState !== undefined) state.yesNoState = updates.yesNoState;
    if (updates.propertyData !== undefined) state.propertyData = updates.propertyData;
    
    // console.log('state: ', state);

    app.events.publish('state-updated', state);
  });

  return {
    state : state
  };

})(window, document);
