!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.to=t():e.to=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=n(1);e.exports=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.params,u=n.param,a=n.returnOne,c=n.web,s=n.throwError;if(e.constructor===Function)t=new Promise((function(t){return t(i?e.apply(void 0,r(i)):e(u))}));else if(e.constructor===Promise)t=e;else{if(!Array.isArray(e))throw new Error("There was an erron in your input function.");var f=e.map((function(e){return e.constructor===Function?new Promise((function(t){return t(i?e.apply(void 0,r(i)):e(u))})):e.constructor===Promise?e:void 0}));t=Promise.all(f)}return t.then((function(e){return a?e:[void 0,e]})).catch((function(e){return s?Promise.reject(e):a?c?o.improve(e):e:c?[o.improve(e),void 0]:[e,void 0]})).catch((function(e){throw c?o.improve(e):e}))}},function(e,t,n){var r;function o(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?i(e):t}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return s(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function s(e,t,n){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}parcelRequire=function(o,i,u,a){var c,s="function"==typeof parcelRequire&&parcelRequire;function f(e,t){if(!i[e]){if(!o[e]){var r="function"==typeof parcelRequire&&parcelRequire;if(!t&&r)return r(e,!0);if(s)return s(e,!0);if("string"==typeof e)return n(2)(e);var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}c.resolve=function(t){return o[e][1][t]||t},c.cache={};var a=i[e]=new f.Module(e);o[e][0].call(a.exports,c,a,a.exports,this)}return i[e].exports;function c(e){return f(c.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=o,f.cache=i,f.parent=s,f.register=function(e,t){o[e]=[function(e,n){n.exports=t},{}]};for(var l=0;l<u.length;l++)try{f(u[l])}catch(o){c||(c=o)}if(u.length){var d=f(u[u.length-1]);"object"==p(t)&&void 0!==e?e.exports=d:void 0===(r=function(){return d}.call(t,n,t,e))||(e.exports=r)}if(parcelRequire=f,c)throw c;return f}({HbDo:[function(e,t,n){t.exports=function(e){var t=e.toLowerCase();return(t=t.replace(/\W([a-z])/g,(function(e){return e.toUpperCase()}))).replace(/\W/gi,"")}},{}],Focm:[function(e,t,n){"use strict";var r=e("./libs/camelcase"),u=new Map([[100,"Continue"],[101,"Switching Protocols"],[102,"Processing"],[103,"Early Hints"],[200,"OK"],[201,"Created"],[202,"Accepted"],[203,"Non-Authoritative Information"],[204,"No Content"],[205,"Reset Content"],[206,"Partial Content"],[207,"Multi-Status"],[208,"Already Reported"],[226,"IM Used"],[300,"Multiple Choices"],[301,"Moved Permanently"],[302,"Found"],[303,"See Other"],[304,"Not Modified"],[305,"Use Proxy"],[306,"Switch Proxy"],[307,"Temporary Redirect"],[308,"Permanent Redirect"],[400,"Bad Request"],[401,"Unauthorized"],[402,"Payment Required"],[403,"Forbidden"],[404,"Not Found"],[405,"Method Not Allowed"],[406,"Not Acceptable"],[407,"Proxy Authentication Required"],[408,"Request Time-out"],[409,"Conflict"],[410,"Gone"],[411,"Length Required"],[412,"Precondition Failed"],[413,"Payload Too Large"],[414,"URI Too Long"],[415,"Unsupported Media Type"],[416,"Requested Range Not Satisfiable"],[417,"Expectation Failed"],[418,"I Am A Teapot"],[421,"Misdirected Request"],[422,"Unprocessable Entity"],[423,"Locked"],[424,"Failed Dependency"],[425,"Unordered Collection"],[426,"Upgrade Required"],[428,"Precondition Required"],[429,"Too Many Requests"],[431,"Request Header Fields Too Large"],[451,"Unavailable For Legal Reasons"],[499,"Client Closed Request"],[500,"Internal Server Error"],[501,"Not Implemented"],[502,"Bad Gateway"],[503,"Service Unavailable"],[504,"Gateway Time-out"],[505,"HTTP Version Not Supported"],[506,"Variant Also Negotiates"],[507,"Insufficient Storage"],[509,"Bandwidth Limit Exceeded"],[510,"Not Extended"],[511,"Network Authentication Required"],[598,"Network Read Timeout Error"],[599,"Network Connect Timeout Error"]]),s=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=o(this,l(t).call(this)),Object.assign(i(e),r),e._isHttpRes=!0,"number"==typeof n)e.statusCode=n,e.message=r.message?r.message:void 0;else{if("string"!=typeof n)throw new Error("The first parameter must be either a number or a string.");e.message=n,e.statusCode=r.statusCode||r.status||500}return o(e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a(t,null,[{key:"improve",value:function(e){return new t(500,e)}},{key:"isHR",value:function(e){return e.constructor===t&&e._isHttpRes}}]),a(t,[{key:"appendError",value:function(e){return Object.assign(this,e)}},{key:"end",value:function(e){return e.status(this.statusCode).json(this.payload)}},{key:"send",value:function(e){return this.end(e)}},{key:"json",value:function(e){return this.end(e)}},{key:"log",value:function(){console.log(JSON.stringify(this))}},{key:"status",get:function(){return this.statusCode},set:function(e){this.statusCode=e}},{key:"statusDesc",get:function(){return u.has(this.statusCode)?u.get(this.statusCode):"Unknown Status Code"}},{key:"statusText",get:function(){return this.statusDesc}},{key:"body",get:function(){return this.data},set:function(e){this.data=e}},{key:"payload",get:function(){var e=this;return{statusCode:this.statusCode,statusDesc:this.statusDesc,message:this.message&&this.message.length?this.message:void 0,data:this.data?this.data:void 0,log:function(){return console.log(JSON.stringify(e.payload))}}},set:function(e){throw new Error("This property is read-only.")}}]),t}(c(Error));t.exports=(u.forEach((function(e,t){s[r(e)]=function(e,n){return new s(t,{statusCode:t,message:e&&e.constructor===String&&e.length?e:void 0,data:e&&e.constructor!==String?e:n})}})),s)},{"./libs/camelcase":"HbDo"}]},{},["Focm"])},function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2}])}));