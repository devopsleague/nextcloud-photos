/*! For license information please see photos-src_views_Tags_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Tags_vue"],{69363:(t,e,r)=>{r.d(e,{Z:()=>n});const n={name:"AbortControllerMixin",data:function(){return{abortController:new AbortController}},beforeDestroy:function(){this.abortController.abort()},beforeRouteLeave:function(t,e,r){this.abortController.abort(),this.abortController=new AbortController,r()}}},2442:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(87537),o=r.n(n),i=r(23645),a=r.n(i)()(o());a.push([t.id,".tag-cover[data-v-80d42a18]{display:flex;flex-direction:column;padding:16px;border-radius:12px}.tag-cover[data-v-80d42a18]:hover,.tag-cover[data-v-80d42a18]:focus{background:var(--color-background-dark)}.tag-cover__image[data-v-80d42a18]{width:350px;height:350px;object-fit:cover;border-radius:12px}@media only screen and (max-width: 1200px){.tag-cover__image[data-v-80d42a18]{width:250px;height:250px}}.tag-cover__image--placeholder[data-v-80d42a18]{background:var(--color-primary-light)}.tag-cover__image--placeholder[data-v-80d42a18] .material-design-icon{width:100%;height:100%}.tag-cover__image--placeholder[data-v-80d42a18] .material-design-icon .material-design-icon__svg{fill:var(--color-primary)}.tag-cover__details[data-v-80d42a18]{display:flex;flex-direction:column;margin-top:16px;width:350px}@media only screen and (max-width: 1200px){.tag-cover__details[data-v-80d42a18]{width:250px}}.tag-cover__details__first-line[data-v-80d42a18]{display:flex}.tag-cover__details__second-line[data-v-80d42a18]{display:flex;color:var(--color-text-lighter)}.tag-cover__details__name[data-v-80d42a18]{flex-grow:1;margin:0;font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/components/TagCover.vue"],names:[],mappings:"AAEA,4BACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,kBAAA,CAEA,oEACC,uCAAA,CAGD,mCACC,WAAA,CACA,YAAA,CACA,gBAAA,CACA,kBAAA,CAEA,2CAND,mCAOE,WAAA,CACA,YAAA,CAAA,CAGD,gDACC,qCAAA,CAEA,sEACC,UAAA,CACA,WAAA,CAEA,iGACC,yBAAA,CAMJ,qCACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CAEA,2CAND,qCAOE,WAAA,CAAA,CAGD,iDACC,YAAA,CAGD,kDACC,YAAA,CACA,+BAAA,CAGD,2CACC,WAAA,CACA,QAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.tag-cover {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 16px;\n\tborder-radius: 12px;\n\n\t&:hover, &:focus {\n\t\tbackground: var(--color-background-dark);\n\t}\n\n\t&__image {\n\t\twidth: 350px;\n\t\theight: 350px;\n\t\tobject-fit: cover;\n\t\tborder-radius: 12px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t\theight: 250px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-light);\n\n\t\t\t:deep .material-design-icon {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\n\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\tfill: var(--color-primary);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 16px;\n\t\twidth: 350px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t}\n\n\t\t&__first-line {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t&__second-line {\n\t\t\tdisplay: flex;\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\n\t\t&__name {\n\t\t\tflex-grow: 1;\n\t\t\tmargin: 0;\n\t\t\tfont-weight: normal;\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\n\t\t}\n\t}\n\n}\n'],sourceRoot:""}]);const c=a},35375:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(87537),o=r.n(n),i=r(23645),a=r.n(i)()(o());a.push([t.id,".loader[data-v-4e989fc6]{margin-top:30vh}.container[data-v-4e989fc6]{padding-left:44px}.container>h2[data-v-4e989fc6]{margin-left:14px;margin-top:40px}.popular-tags[data-v-4e989fc6],.tags[data-v-4e989fc6]{display:flex;flex-direction:row;gap:8px;flex-wrap:wrap}","",{version:3,sources:["webpack://./src/views/Tags.vue"],names:[],mappings:"AAEA,yBACC,eAAA,CAGD,4BACC,iBAAA,CAEA,+BACC,gBAAA,CACA,eAAA,CAIF,sDACC,YAAA,CACA,kBAAA,CACA,OAAA,CACA,cAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.loader {\n\tmargin-top: 30vh;\n}\n\n.container {\n\tpadding-left: 44px;\n\n\t> h2 {\n\t\tmargin-left: 14px;\n\t\tmargin-top: 40px;\n\t}\n}\n\n.popular-tags, .tags {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 8px;\n\tflex-wrap: wrap;\n}\n'],sourceRoot:""}]);const c=a},48450:(t,e,r)=>{r.d(e,{Z:()=>o});const n={name:"ImageMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,r(51900).Z)(n,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon image-multiple-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},48353:(t,e,r)=>{r.r(e),r.d(e,{default:()=>M});var n=r(20629),o=r(15961),i=r(48450),a=r(79753),c=r(69363);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new E(o||[]);return n(a,"_invoke",{value:x(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function d(){}function g(){}function v(){}var m={};u(m,i,(function(){return this}));var y=Object.getPrototypeOf,A=y&&y(y(j([])));A&&A!==e&&r.call(A,i)&&(m=A);var w=v.prototype=d.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function o(n,i,a,c){var l=h(t[n],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==s(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return g.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:g,configurable:!0}),g.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(C.prototype),u(C.prototype,a,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new C(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function u(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const d={name:"TagCover",components:{ImageMultipleIcon:i.Z},mixins:[c.Z],props:{tag:{type:Object,required:!0}},data:function(){return{loadCover:!1,observer:null}},computed:h(h({},(0,n.Se)(["files","tags"])),{},{coverUrl:function(){return this.loadCover?(0,a.generateUrl)("/core/preview?fileId=".concat(this.tag.files[this.tag.files.length-1],"&x=",512,"&y=",512,"&forceIcon=0&a=1")):""}}),created:function(){var t,e=this;return(t=l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.tag.files.length){t.next=2;break}return t.abrupt("return");case 2:e.$store.dispatch("fetchTagFiles",{id:e.tag.id,signal:e.abortController.signal});case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))})()},mounted:function(){var t=this;this.observer=new IntersectionObserver((function(e){e[0].isIntersecting&&(t.loadCover=!0,t.observer.disconnect())})),this.observer.observe(this.$el)}};var g=r(93379),v=r.n(g),m=r(7795),y=r.n(m),A=r(90569),w=r.n(A),b=r(3565),C=r.n(b),x=r(19216),_=r.n(x),O=r(44589),L=r.n(O),E=r(2442),j={};j.styleTagTransform=L(),j.setAttributes=C(),j.insert=w().bind(null,"head"),j.domAPI=y(),j.insertStyleElement=_();v()(E.Z,j);E.Z&&E.Z.locals&&E.Z.locals;var k=r(51900);const T=(0,k.Z)(d,(function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"tag-cover",attrs:{to:"/tags/".concat(t.tag.displayName)}},[0!==t.tag.files.length?e("img",{staticClass:"tag-cover__image",attrs:{src:t.coverUrl}}):e("div",{staticClass:"tag-cover__image tag-cover__image--placeholder"},[e("ImageMultipleIcon",{attrs:{size:128}})],1),t._v(" "),e("div",{staticClass:"tag-cover__details"},[e("div",{staticClass:"tag-cover__details__first-line"},[e("h3",{staticClass:"tag-cover__details__name"},[t._v("\n\t\t\t\t"+t._s(t.t("recognize",t.tag.displayName))+"\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"tag-cover__details__second-line"},[t._v("\n\t\t\t"+t._s(t.n("photos","%n photo","%n photos",t.tag.files.length))+"\n\t\t")])])])}),[],!1,null,"80d42a18",null).exports;var P=r(25108);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function N(){N=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var g={};s(g,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(L([])));m&&m!==e&&r.call(m,i)&&(g=m);var y=d.prototype=h.prototype=Object.create(g);function A(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var s=u(t[n],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==S(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function C(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},A(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(y),s(y,c,"Generator"),s(y,i,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function W(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function G(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){W(i,n,o,a,c,"next",t)}function c(t){W(i,n,o,a,c,"throw",t)}a(void 0)}))}}function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){B(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function B(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const Z={name:"Tags",components:{TagCover:T,NcLoadingIcon:o.lb,NcEmptyContent:o.SL},mixins:[c.Z],data:function(){return{error:null,loading:!1,showTags:!1}},computed:D(D({},(0,n.Se)(["files","tags","tagsNames"])),{},{tagsList:function(){var t=this;return Object.keys(this.tagsNames).map((function(e){return t.tags[t.tagsNames[e]]})).filter((function(t){return t&&t.id}))},popularTags:function(){return Object.values(this.tags).filter((function(t){return t.files&&t.files.length>50})).sort((function(t,e){return e.files.length-t.files.length})).slice(0,9)},hasTagsWithFiles:function(){return Object.values(this.tags).some((function(t){return!!t.files.length}))}}),beforeMount:function(){var t=this;return G(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchRootContent();case 2:case"end":return e.stop()}}),e)})))()},methods:{fetchRootContent:function(){var t=this;return G(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(OCA.Viewer.close(),t.tags[t.tagId]||(t.loading=!0),t.error=null,e.prev=3,t.tagsList.length){e.next=7;break}return e.next=7,t.$store.dispatch("fetchAllTags",{signal:t.abortController.signal});case 7:if(t.hasTagsWithFiles){e.next=10;break}return e.next=10,Promise.all(t.tagsList.slice(0,15).map((function(e){return t.$store.dispatch("fetchTagFiles",{id:e.id,signal:t.abortController.signal})})));case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),P.error(e.t0),t.error=!0;case 16:return e.prev=16,t.loading=!1,e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,12,16,19]])})))()}}};var F=r(35375),Y={};Y.styleTagTransform=L(),Y.setAttributes=C(),Y.insert=w().bind(null,"head"),Y.domAPI=y(),Y.insertStyleElement=_();v()(F.Z,Y);F.Z&&F.Z.locals&&F.Z.locals;const M=(0,k.Z)(Z,(function(){var t=this,e=t._self._c;return e("div",[t.error?e("NcEmptyContent",{attrs:{title:t.t("photos","An error occurred")}}):t._e(),t._v(" "),t.loading||t.hasTagsWithFiles?t._e():e("NcEmptyContent",{attrs:{title:t.t("photos","No tags yet"),description:t.t("photos","Photos with tags will show up here")}}),t._v(" "),t.loading?e("NcLoadingIcon",{staticClass:"loader"}):e("div",{staticClass:"container"},[t.popularTags.length?e("h2",[t._v("\n\t\t\t"+t._s(t.t("photos","Popular tags"))+"\n\t\t")]):t._e(),t._v(" "),e("div",{staticClass:"popular-tags"},t._l(t.popularTags,(function(t){return e("TagCover",{key:t.id,attrs:{tag:t}})})),1),t._v(" "),t.tagsList.length?e("h2",[t._v("\n\t\t\tAll tags\n\t\t")]):t._e(),t._v(" "),e("div",{staticClass:"tags"},t._l(t.tagsList,(function(t){return e("TagCover",{key:t.id,attrs:{tag:t}})})),1)])],1)}),[],!1,null,"4e989fc6",null).exports}}]);
//# sourceMappingURL=photos-src_views_Tags_vue.js.map?v=2322c47951c98dbcb4ac