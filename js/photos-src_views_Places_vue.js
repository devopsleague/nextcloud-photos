/*! For license information please see photos-src_views_Places_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Places_vue"],{46417:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(87537),o=r.n(n),i=r(23645),a=r.n(i)()(o());a.push([t.id,".places-list[data-v-0c0bf9ab]{display:flex;flex-direction:column}.places-list .place__name[data-v-0c0bf9ab]{font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/views/Places.vue"],names:[],mappings:"AAEA,8BACC,YAAA,CACA,qBAAA,CAEA,2CACC,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.places-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t.place__name {\n\t\tfont-weight: normal;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n}\n'],sourceRoot:""}]);const c=a},20464:(t,e,r)=>{r.r(e),r.d(e,{default:()=>B});var n=r(57563),o=r(79753),i=r(15961),a=r(45994),c=r(9944),l=r(20629),u=r(69363),s=r(87076);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new A(o||[]);return n(a,"_invoke",{value:_(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p={};function v(){}function y(){}function d(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(j([])));w&&w!==e&&r.call(w,i)&&(m=w);var b=d.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function o(n,i,a,c){var l=s(t[n],t,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==f(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:y,configurable:!0}),y.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),l(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),l(b,c,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function p(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const m={name:"FetchCollectionsMixin",data:function(){return{errorFetchingCollections:null,loadingCollections:!1}},mixins:[u.Z],methods:y(y({},(0,l.nv)(["addCollections"])),{},{fetchCollections:function(t){var e,r=this;return(e=h().mark((function e(){var n,o;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.loadingCollections){e.next=2;break}return e.abrupt("return",[]);case 2:return e.prev=2,r.loadingCollections=!0,r.errorFetchingCollections=null,e.next=7,(0,s.XK)(t,{signal:r.abortController.signal});case 7:return n=e.sent,r.addCollections({collections:n}),e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(2),404===(null===(o=e.t0.response)||void 0===o?void 0:o.status)?r.errorFetchingCollections=404:r.errorFetchingCollections=e.t0;case 15:return e.prev=15,r.loadingCollections=!1,e.finish(15);case 18:return e.abrupt("return",[]);case 19:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(t){p(i,n,o,a,c,"next",t)}function c(t){p(i,n,o,a,c,"throw",t)}a(void 0)}))})()}})};var g=r(94446),w=r(22891),b=r(71823);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function L(){L=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new A(o||[]);return n(a,"_invoke",{value:_(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function h(){}function p(){}function v(){}var y={};l(y,i,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(j([])));m&&m!==e&&r.call(m,i)&&(y=m);var g=v.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var l=s(t[n],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==x(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),l(g,c,"Generator"),l(g,i,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function _(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}const E={name:"Places",components:{FolderMultipleImage:n.Z,NcEmptyContent:i.SL,CollectionsList:g.Z,CollectionCover:w.Z,HeaderNavigation:b.Z},filters:{coverUrl:function(t){return-1===t?"":(0,o.generateUrl)("/apps/photos/api/v1/preview/".concat(t,"?x=",512,"&y=",512))}},mixins:[m],computed:{places:function(){return this.$store.getters.places}},beforeMount:function(){var t,e=this;return(t=L().mark((function t(){return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fetchPlaces();case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){_(i,n,o,a,c,"next",t)}function c(t){_(i,n,o,a,c,"throw",t)}a(void 0)}))})()},methods:{fetchPlaces:function(){var t;this.fetchCollections("/photos/".concat(null===(t=(0,a.ts)())||void 0===t?void 0:t.uid,"/places"))},t:c.translate,n:c.translatePlural}};var C=r(93379),O=r.n(C),A=r(7795),j=r.n(A),P=r(90569),k=r.n(P),S=r(3565),T=r.n(S),N=r(19216),F=r.n(N),G=r(44589),Z=r.n(G),I=r(46417),W={};W.styleTagTransform=Z(),W.setAttributes=T(),W.insert=k().bind(null,"head"),W.domAPI=j(),W.insertStyleElement=F();O()(I.Z,W);I.Z&&I.Z.locals&&I.Z.locals;const B=(0,r(51900).Z)(E,(function(){var t=this,e=t._self._c;return e("div",[e("CollectionsList",{staticClass:"places-list",attrs:{collections:t.places,loading:t.loadingCollections,error:t.errorFetchingCollections},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.collection;return e("CollectionCover",{key:n.basename,attrs:{link:"/places/".concat(n.basename),"alt-img":t.t("photos","Cover photo for place {placeName}",{placeName:n.basename}),"cover-url":t._f("coverUrl")(n.lastPhoto)}},[e("h2",{staticClass:"place__name"},[t._v("\n\t\t\t\t"+t._s(n.basename)+"\n\t\t\t")]),t._v(" "),e("div",{staticClass:"place__details",attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("\n\t\t\t\t"+t._s(t.n("photos","%n item","%n photos and videos",n.nbItems))+"\n\t\t\t")])])}}])},[e("HeaderNavigation",{key:"navigation",attrs:{slot:"header",loading:t.loadingCollections,title:t.t("photos","Places"),"root-title":t.t("photos","Places")},on:{refresh:t.fetchPlaces},slot:"header"}),t._v(" "),t._v(" "),e("NcEmptyContent",{attrs:{slot:"empty-collections-list",title:t.t("photos","There is no place yet!")},slot:"empty-collections-list"},[e("FolderMultipleImage",{attrs:{slot:"icon"},slot:"icon"})],1)],1)],1)}),[],!1,null,"0c0bf9ab",null).exports}}]);
//# sourceMappingURL=photos-src_views_Places_vue.js.map?v=e220216a83a88e49c2be