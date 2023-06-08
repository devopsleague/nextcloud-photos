/*! For license information please see photos-src_views_AlbumContent_vue.js.LICENSE.txt */
(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_AlbumContent_vue"],{94712:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var o=n(87537),r=n.n(o),i=n(23645),a=n.n(i)()(r());a.push([t.id,".file-picker[data-v-5720fc76]{display:flex;flex-direction:column;padding:12px}.file-picker__content[data-v-5720fc76]{display:flex;align-items:flex-start;flex-grow:1;height:500px}.file-picker__navigation[data-v-5720fc76]{flex-basis:200px;overflow:scroll;margin-right:8px;padding-right:8px;height:100%}@media only screen and (max-width: 1200px){.file-picker__navigation[data-v-5720fc76]{flex-basis:100px}}.file-picker__navigation--placeholder[data-v-5720fc76]{background:var(--color-primary-element-light);border-radius:var(--border-radius-large)}.file-picker__navigation__month[data-v-5720fc76]{font-weight:bold;font-size:16px;border-radius:var(--border-radius-pill);padding:8px 16px;margin:4px 0;cursor:pointer}@media only screen and (max-width: 1200px){.file-picker__navigation__month[data-v-5720fc76]{text-align:center}}.file-picker__navigation__month[data-v-5720fc76]:hover{background:var(--color-background-dark)}.file-picker__navigation__month.selected[data-v-5720fc76]{background:var(--color-primary-element-lighter)}.file-picker__file-list[data-v-5720fc76]{flex-grow:1;min-width:0;height:100%}.file-picker__file-list--placeholder[data-v-5720fc76]{background:var(--color-primary-element-light);border-radius:var(--border-radius-large)}.file-picker__file-list .section-header[data-v-5720fc76]{font-weight:bold;font-size:20px;padding:8px 0 4px 0}.file-picker__file-list[data-v-5720fc76] .empty-content{position:absolute;width:100%;margin-top:0;height:100%;display:flex;flex-direction:column;justify-content:center}.file-picker__actions[data-v-5720fc76]{display:flex;justify-content:space-between;justify-items:center;padding-top:16px}","",{version:3,sources:["webpack://./src/components/FilesPicker.vue"],names:[],mappings:"AAEA,8BACC,YAAA,CACA,qBAAA,CACA,YAAA,CAEA,uCACC,YAAA,CACA,sBAAA,CACA,WAAA,CACA,YAAA,CAGD,0CACC,gBAAA,CACA,eAAA,CACA,gBAAA,CACA,iBAAA,CACA,WAAA,CAEA,2CAPD,0CAQE,gBAAA,CAAA,CAGD,uDACC,6CAAA,CACA,wCAAA,CAGD,iDACC,gBAAA,CACA,cAAA,CACA,uCAAA,CACA,gBAAA,CACA,YAAA,CACA,cAAA,CAEA,2CARD,iDASE,iBAAA,CAAA,CAGD,uDACC,uCAAA,CAGD,0DACC,+CAAA,CAKH,yCACC,WAAA,CACA,WAAA,CACA,WAAA,CAEA,sDACC,6CAAA,CACA,wCAAA,CAGD,yDACC,gBAAA,CACA,cAAA,CACA,mBAAA,CAGD,wDACC,iBAAA,CACA,UAAA,CACA,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CAIF,uCACC,YAAA,CACA,6BAAA,CACA,oBAAA,CACA,gBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.file-picker {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 12px;\n\n\t&__content {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tflex-grow: 1;\n\t\theight: 500px;\n\t}\n\n\t&__navigation {\n\t\tflex-basis: 200px;\n\t\toverflow: scroll;\n\t\tmargin-right: 8px;\n\t\tpadding-right: 8px;\n\t\theight: 100%;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tflex-basis: 100px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-element-light);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t}\n\n\t\t&__month {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 16px;\n\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\tpadding: 8px 16px;\n\t\t\tmargin: 4px 0;\n\t\t\tcursor: pointer;\n\n\t\t\t@media only screen and (max-width: 1200px) {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tbackground: var(--color-background-dark);\n\t\t\t}\n\n\t\t\t&.selected {\n\t\t\t\tbackground: var(--color-primary-element-lighter);\n\t\t\t}\n\t\t}\n\t}\n\n\t&__file-list {\n\t\tflex-grow: 1;\n\t\tmin-width: 0;\n\t\theight: 100%;\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-element-light);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t}\n\n\t\t.section-header {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 20px;\n\t\t\tpadding: 8px 0 4px 0;\n\t\t}\n\n\t\t:deep .empty-content {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\tmargin-top: 0;\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n\n\t&__actions {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tjustify-items: center;\n\t\tpadding-top: 16px;\n\t}\n}\n'],sourceRoot:""}]);const l=a},107:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var o=n(87537),r=n.n(o),i=n(23645),a=n.n(i)()(r());a.push([t.id,".album__title[data-v-2ab2bdc6]{width:100%}.album__name[data-v-2ab2bdc6]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.album__location[data-v-2ab2bdc6]{margin-left:-4px;display:flex;color:var(--color-text-lighter)}.photos-navigation[data-v-2ab2bdc6]{position:relative}.photos-navigation--uploading[data-v-2ab2bdc6]{margin-bottom:30px}[data-v-2ab2bdc6] .upload-picker .upload-picker__progress{position:absolute;bottom:-30px;left:64px;margin:0}[data-v-2ab2bdc6] .upload-picker .upload-picker__cancel{position:absolute;bottom:-24px;right:50px}","",{version:3,sources:["webpack://./src/views/AlbumContent.vue"],names:[],mappings:"AAGC,+BACC,UAAA,CAGD,8BACC,eAAA,CACA,kBAAA,CACA,sBAAA,CAGD,kCACC,gBAAA,CACA,YAAA,CACA,+BAAA,CAIF,oCACC,iBAAA,CAEA,+CACC,kBAAA,CAKD,0DACC,iBAAA,CACA,YAAA,CACA,SAAA,CACA,QAAA,CAED,wDACC,iBAAA,CACA,YAAA,CACA,UAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.album {\n\t&__title {\n\t\twidth: 100%;\n\t}\n\n\t&__name {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&__location {\n\t\tmargin-left: -4px;\n\t\tdisplay: flex;\n\t\tcolor: var(--color-text-lighter);\n\t}\n}\n\n.photos-navigation {\n\tposition: relative;\n\t// Add space at the bottom for the progress bar.\n\t&--uploading {\n\t\tmargin-bottom: 30px;\n\t}\n}\n\n:deep(.upload-picker) {\n\t.upload-picker__progress {\n\t\tposition: absolute;\n\t\tbottom: -30px;\n\t\tleft: 64px;\n\t\tmargin: 0;\n\t}\n\t.upload-picker__cancel {\n\t\tposition: absolute;\n\t\tbottom: -24px;\n\t\tright: 50px;\n\t}\n}\n'],sourceRoot:""}]);const l=a},38734:(t,e,n)=>{"use strict";n.d(e,{Z:()=>Z});var o=n(20629),r=n(15961),i=n(52587),a=n(80351),l=n.n(a),s=n(12571),c=n(68411),u=n(42375),d=n(66951),p=n(98171),f=n(28391),h=n(81090),m=n(3301);function A(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const C={name:"FilesPicker",components:{File:u.Z,FilesListViewer:c.Z,ImagePlus:s.Z,NcButton:r.P2,NcLoadingIcon:r.lb,UploadPicker:i.e},filters:{dateMonthAndYear:function(t){return l()(t,"YYYYMM").format("MMMM YYYY")}},mixins:[d.Z,f.Z,p.Z,h.Z],props:{destination:{type:String,required:!0},blacklistIds:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{allowedMimes:m.ZP,targetMonth:null,uploadContext:{route:"albumpicker"}}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,o.Se)(["files"])),watch:{monthsList:function(t){null===this.targetMonth&&(this.targetMonth=t[0])}},methods:{getFiles:function(){this.fetchFiles("",{},this.blacklistIds)},refreshFiles:function(){this.fetchFiles("",{firstResult:0},[].concat(A(this.blacklistIds),A(this.fetchedFileIds)),!0)},emitPickedEvent:function(){this.$emit("files-picked",this.selectedFileIds)}}};var y=n(93379),_=n.n(y),w=n(7795),x=n.n(w),k=n(90569),F=n.n(k),E=n(3565),P=n.n(E),N=n(19216),O=n.n(N),S=n(44589),j=n.n(S),M=n(94712),L={};L.styleTagTransform=j(),L.setAttributes=P(),L.insert=F().bind(null,"head"),L.domAPI=x(),L.insertStyleElement=O();_()(M.Z,L);M.Z&&M.Z.locals&&M.Z.locals;const Z=(0,n(51900).Z)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"file-picker"},[e("div",{staticClass:"file-picker__content"},[e("div",{staticClass:"file-picker__navigation",class:{"file-picker__navigation--placeholder":0===t.monthsList.length}},t._l(t.monthsList,(function(n){return e("div",{key:n,staticClass:"file-picker__navigation__month",class:{selected:t.targetMonth===n},on:{click:function(e){t.targetMonth=n}}},[t._v("\n\t\t\t\t"+t._s(t._f("dateMonthAndYear")(n))+"\n\t\t\t")])})),0),t._v(" "),e("FilesListViewer",{staticClass:"file-picker__file-list",class:{"file-picker__file-list--placeholder":0===t.monthsList.length},attrs:{"file-ids-by-section":t.fileIdsByMonth,"empty-message":t.t("photos","There are no photos or videos yet!"),sections:t.monthsList,loading:t.loadingFiles,"base-height":100,"section-header-height":50,"scroll-to-section":t.targetMonth},on:{"need-content":t.getFiles},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.file,r=n.height,i=n.distance;return[o.sectionHeader?e("h3",{staticClass:"section-header",style:{height:"".concat(r,"px")},attrs:{id:"file-picker-section-header-".concat(o.id)}},[t._v("\n\t\t\t\t\t"+t._s(t._f("dateMonthAndYear")(o.id))+"\n\t\t\t\t")]):e("File",{attrs:{file:t.files[o.id],"allow-selection":!0,selected:!0===t.selection[o.id],distance:i},on:{"select-toggled":t.onFileSelectToggle}})]}}])})],1),t._v(" "),e("div",{staticClass:"file-picker__actions"},[e("UploadPicker",{attrs:{accept:t.allowedMimes,context:t.uploadContext,destination:t.photosLocation,multiple:!0},on:{uploaded:t.refreshFiles}}),t._v(" "),e("NcButton",{attrs:{type:"primary",disabled:t.loading||0===t.selectedFileIds.length},on:{click:t.emitPickedEvent},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?t._e():e("ImagePlus"),t._v(" "),t.loading?e("NcLoadingIcon"):t._e()]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("photos","Add to {destination}",{destination:t.destination}))+"\n\t\t")])],1)])}),[],!1,null,"5720fc76",null).exports},81048:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>nt});var r=o(91627),i=o(45994),a=o(20629),l=o(15961),s=o(52587),c=o(20296),u=o.n(c),d=o(98293),p=o(11341),f=o(12571),h=o(50863),m=o(49976),A=o(69141),b=o(44244),g=o(8356),v=o(69363),C=o(12945),y=o(66951),_=o(81090),w=o(61225),x=o(11762),k=o(56943),F=o(79617),E=o(38734),P=o(71823),N=o(94236),O=o(3301),S=o(81067),j=o(2161),M=o(59537);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function Z(){Z=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),l=new k(r||[]);return o(a,"_invoke",{value:y(t,n,l)}),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var d={};function p(){}function f(){}function h(){}var m={};s(m,i,(function(){return this}));var A=Object.getPrototypeOf,b=A&&A(A(F([])));b&&b!==e&&n.call(b,i)&&(m=b);var g=h.prototype=p.prototype=Object.create(m);function v(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(o,i,a,l){var s=u(t[o],t,i);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==L(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,l)}),(function(t){r("throw",t,a,l)})):e.resolve(d).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,l)}))}l(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function y(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return E()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var l=_(a,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=u(t,e,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}function _(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function F(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=h,o(g,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:f,configurable:!0}),f.displayName=s(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},v(C.prototype),s(C.prototype,a,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new C(c(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(g),s(g,l,"Generator"),s(g,i,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=F,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function B(t,e,n,o,r,i,a){try{var l=t[i](a),s=l.value}catch(t){return void n(t)}l.done?e(s):Promise.resolve(s).then(o,r)}function T(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){B(i,o,r,a,l,"next",t)}function l(t){B(i,o,r,a,l,"throw",t)}a(void 0)}))}}function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){W(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function W(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const Y={name:"AlbumContent",components:{ActionFavorite:w.Z,AlbumForm:x.Z,Close:d.default,CollaboratorsSelectionForm:k.Z,CollectionContent:F.Z,Delete:p.Z,FilesPicker:E.Z,HeaderNavigation:P.Z,ImagePlus:f.Z,MapMarker:h.Z,NcActionButton:l.Js,NcActions:l.O3,NcActionSeparator:l.rr,NcButton:l.P2,NcEmptyContent:l.SL,NcLoadingIcon:l.lb,NcModal:l.Jc,Pencil:m.default,Plus:A.Z,ShareVariant:g.Z,UploadPicker:s.e},mixins:[v.Z,C.Z,y.Z,l.tq,_.Z],props:{albumName:{type:String,default:"/"}},data:function(){var e=this;return{allowedMimes:O.ZP,showAddPhotosModal:!1,showManageCollaboratorView:!1,showEditAlbumForm:!1,loadingAddCollaborators:!1,uploader:(0,s.oM)(),newFileMenuEntry:{id:"album-add",displayName:t("photos","Add photos to this album"),templateName:"",if:function(t){return t.route===e.$route.name},iconSvgInline:b,handler:function(){e.showAddPhotosModal=!0}}}},computed:I(I({},(0,a.Se)(["albumsFiles"])),{},{album:function(){return this.albums[this.albumName]||{}},albumFileIds:function(){return this.albumsFiles[this.albumName]||[]},sharingEnabled:function(){return void 0!==OC.Share},uploadContext:function(){var t;return I(I({},this.album),{},{route:this.$route.name,root:"dav/photos/".concat(null===(t=(0,i.ts)())||void 0===t?void 0:t.uid,"/albums")})}}),watch:{album:function(t,e){t.filename!==e.filename&&this.fetchAlbumContent()}},mounted:function(){this.fetchAlbumContent(),(0,r.cd)(this.newFileMenuEntry)},destroyed:function(){(0,r.oE)(this.newFileMenuEntry)},methods:I(I({},(0,a.nv)(["appendFiles","deleteAlbum","addFilesToAlbum","removeFilesFromAlbum","updateAlbum"])),{},{fetchAlbumContent:function(){var t=this;return T(Z().mark((function e(){var n,o,r,a,l,s;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loadingFiles&&!t.showEditAlbumForm){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,t.fetchSemaphore.acquire();case 4:return n=e.sent,e.prev=5,t.errorFetchingFiles=null,t.loadingFiles=!0,e.next=10,S.ZP.getDirectoryContents("/photos/".concat(null===(o=(0,i.ts)())||void 0===o?void 0:o.uid,"/albums/").concat(t.albumName),{data:j.Z,details:!0,signal:t.abortController.signal});case 10:if(r=e.sent,a=r.data.map((function(t){return(0,N.AX)(t)})).filter((function(t){return t.fileid})),l=a.map((function(t){return t.fileid.toString()})),t.appendFiles(a),!(a.length>0)){e.next=17;break}return e.next=17,t.$store.commit("setAlbumFiles",{albumName:t.albumName,fileIds:l});case 17:M.Z.debug("[AlbumContent] Fetched ".concat(l.length," new files: "),l),e.next=32;break;case 20:if(e.prev=20,e.t0=e.catch(5),404!==(null===(s=e.t0.response)||void 0===s?void 0:s.status)){e.next=26;break}t.errorFetchingFiles=404,e.next=31;break;case 26:if("ERR_CANCELED"!==e.t0.code){e.next=30;break}return e.abrupt("return");case 30:t.errorFetchingFiles=e.t0;case 31:M.Z.error("[AlbumContent] Error fetching album files",{error:e.t0});case 32:return e.prev=32,t.loadingFiles=!1,t.fetchSemaphore.release(n),e.finish(32);case 36:return e.abrupt("return",[]);case 37:case"end":return e.stop()}}),e,null,[[5,20,32,36]])})))()},redirectToNewName:function(t){var e=t.album;this.showEditAlbumForm=!1,this.album.basename!==e.basename&&this.$router.push("/albums/".concat(e.basename))},handleFilesPicked:function(t){var e=this;return T(Z().mark((function n(){return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.showAddPhotosModal=!1,n.next=3,e.addFilesToAlbum({albumName:e.albumName,fileIdsToAdd:t});case 3:return n.next=5,e.fetchAlbumContent();case 5:case"end":return n.stop()}}),n)})))()},handleRemoveFilesFromAlbum:function(t){var e=this;return T(Z().mark((function n(){return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.$refs.collectionContent.onUncheckFiles(t),n.next=3,e.removeFilesFromAlbum({albumName:e.albumName,fileIdsToRemove:t});case 3:case"end":return n.stop()}}),n)})))()},handleDeleteAlbum:function(){var t=this;return T(Z().mark((function e(){return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.deleteAlbum({albumName:t.albumName});case 2:t.$router.push("/albums");case 3:case"end":return e.stop()}}),e)})))()},handleSetCollaborators:function(t){var e=this;return T(Z().mark((function n(){return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.loadingAddCollaborators=!0,e.showManageCollaboratorView=!1,n.next=5,e.updateAlbum({albumName:e.albumName,properties:{collaborators:t}});case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),M.Z.error(n.t0);case 10:return n.prev=10,e.loadingAddCollaborators=!1,n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))()},onUpload:u()((function(){this.fetchAlbumContent()}),500)})};var G=o(93379),U=o.n(G),R=o(7795),$=o.n(R),V=o(90569),z=o.n(V),q=o(3565),H=o.n(q),J=o(19216),K=o.n(J),Q=o(44589),X=o.n(Q),tt=o(107),et={};et.styleTagTransform=X(),et.setAttributes=H(),et.insert=z().bind(null,"head"),et.domAPI=$(),et.insertStyleElement=K();U()(tt.Z,et);tt.Z&&tt.Z.locals&&tt.Z.locals;const nt=(0,o(51900).Z)(Y,(function(){var t=this,e=t._self._c;return e("div",[e("CollectionContent",{ref:"collectionContent",attrs:{collection:t.album,"collection-file-ids":t.albumFileIds,loading:t.loadingAlbums||t.loadingFiles,error:t.errorFetchingAlbums||t.errorFetchingFiles},scopedSlots:t._u([{key:"header",fn:function(n){var o,r=n.selectedFileIds;return e("HeaderNavigation",{key:"navigation",class:{"photos-navigation--uploading":(null===(o=t.uploader.queue)||void 0===o?void 0:o.length)>0},attrs:{loading:t.loadingFiles,params:{albumName:t.albumName},path:"/"+t.albumName,title:t.albumName},on:{refresh:t.fetchAlbumContent}},[""!==t.album.location?e("div",{staticClass:"album__location",attrs:{slot:"subtitle"},slot:"subtitle"},[e("MapMarker"),t._v(t._s(t.album.location)+"\n\t\t\t")],1):t._e(),t._v(" "),void 0!==t.album?e("template",{slot:"right"},[0!==t.album.nbItems?e("UploadPicker",{attrs:{accept:t.allowedMimes,context:t.uploadContext,destination:t.album.basename,root:t.uploadContext.root,multiple:!0},on:{uploaded:t.onUpload}}):t._e(),t._v(" "),t.sharingEnabled?e("NcButton",{attrs:{type:"tertiary","aria-label":t.t("photos","Manage collaborators for this album")},on:{click:function(e){t.showManageCollaboratorView=!0}}},[e("ShareVariant",{attrs:{slot:"icon"},slot:"icon"})],1):t._e(),t._v(" "),e("NcActions",{attrs:{"aria-label":t.t("photos","Open actions menu")}},[e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Edit album details")},on:{click:function(e){t.showEditAlbumForm=!0}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Edit album details"))+"\n\t\t\t\t\t\t"),e("Pencil",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0},on:{click:t.handleDeleteAlbum}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Delete album"))+"\n\t\t\t\t\t\t"),e("Delete",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),r.length>0?[e("NcActionSeparator"),t._v(" "),e("ActionFavorite",{attrs:{"selected-file-ids":r}}),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0},on:{click:function(e){return t.handleRemoveFilesFromAlbum(r)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.t("photos","Remove selection from album"))+"\n\t\t\t\t\t\t\t"),e("Close",{attrs:{slot:"icon"},slot:"icon"})],1)]:t._e()],2)],1):t._e()],2)}}],null,!1,4147026808)},[t._v(" "),void 0===t.album||0!==t.album.nbItems||t.loadingFiles||t.loadingAlbums?t._e():e("NcEmptyContent",{staticClass:"album__empty",attrs:{slot:"empty-content",title:t.t("photos","This album does not have any photos or videos yet!")},slot:"empty-content"},[e("ImagePlus",{attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("NcButton",{staticClass:"album__empty__button",attrs:{slot:"action",type:"primary","aria-label":t.t("photos","Add photos to this album")},on:{click:function(e){t.showAddPhotosModal=!0}},slot:"action"},[e("Plus",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n\t\t\t\t"+t._s(t.t("photos","Add"))+"\n\t\t\t")],1)],1)],1),t._v(" "),t.showAddPhotosModal?e("NcModal",{attrs:{size:"large",title:t.t("photos","Add photos to the album")},on:{close:function(e){t.showAddPhotosModal=!1}}},[e("FilesPicker",{attrs:{destination:t.album.basename,"blacklist-ids":t.albumFileIds},on:{"files-picked":t.handleFilesPicked}})],1):t._e(),t._v(" "),t.showManageCollaboratorView?e("NcModal",{attrs:{title:t.t("photos","Manage collaborators")},on:{close:function(e){t.showManageCollaboratorView=!1}}},[e("CollaboratorsSelectionForm",{attrs:{"album-name":t.album.basename,collaborators:t.album.collaborators,"public-link":t.album.publicLink},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.collaborators;return[e("NcButton",{attrs:{"aria-label":t.t("photos","Save collaborators for this album."),type:"primary",disabled:t.loadingAddCollaborators},on:{click:function(e){return t.handleSetCollaborators(o)}},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loadingAddCollaborators?e("NcLoadingIcon"):t._e()]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Save"))+"\n\t\t\t\t")])]}}],null,!1,4058924180)})],1):t._e(),t._v(" "),t.showEditAlbumForm?e("NcModal",{attrs:{title:t.t("photos","Edit album details")},on:{close:function(e){t.showEditAlbumForm=!1}}},[e("AlbumForm",{attrs:{album:t.album},on:{done:t.redirectToNewName}})],1):t._e()],1)}),[],!1,null,"2ab2bdc6",null).exports},80950:()=>{},46601:()=>{},89214:()=>{},96419:()=>{},56353:()=>{},8623:()=>{},7748:()=>{},85568:()=>{},69386:()=>{},31616:()=>{},56619:()=>{},77108:()=>{}}]);
//# sourceMappingURL=photos-src_views_AlbumContent_vue.js.map?v=ad74752420eb1e39fc03