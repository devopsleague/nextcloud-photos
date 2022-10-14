/*! For license information please see photos-src_views_AlbumContent_vue.js.LICENSE.txt */
(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_AlbumContent_vue"],{28391:(n,t,e)=>{"use strict";function o(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return l=n.done,n},e:function(n){s=!0,a=n},f:function(){try{l||null==e.return||e.return()}finally{if(s)throw a}}}}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}e.d(t,{Z:()=>i});const i={name:"FilesByMonthMixin",computed:{fileIdsByMonth:function(){var n,t=this,e={},r=o(this.fetchedFileIds);try{for(r.s();!(n=r.n()).done;){var i,a=n.value,l=this.files[a];if(l)e[l.month]=null!==(i=e[l.month])&&void 0!==i?i:[],e[l.month].push(l.fileid)}}catch(n){r.e(n)}finally{r.f()}return Object.keys(e).forEach((function(n){return e[n].sort(t.sortFilesByTimestamp)})),e},monthsList:function(){return Object.keys(this.fileIdsByMonth).sort((function(n,t){return n>t?-1:1}))}},methods:{sortFilesByTimestamp:function(n,t){return this.files[n].timestamp>this.files[t].timestamp?-1:1}}}},19413:(n,t,e)=>{"use strict";e.d(t,{Z:()=>l});var o=e(87537),r=e.n(o),i=e(23645),a=e.n(i)()(r());a.push([n.id,".file-picker[data-v-0810cf23]{display:flex;flex-direction:column;padding:12px}.file-picker__content[data-v-0810cf23]{display:flex;align-items:flex-start;flex-grow:1;height:500px}.file-picker__navigation[data-v-0810cf23]{flex-basis:200px;overflow:scroll;margin-right:8px;padding-right:8px;height:100%}@media only screen and (max-width: 1200px){.file-picker__navigation[data-v-0810cf23]{flex-basis:100px}}.file-picker__navigation--placeholder[data-v-0810cf23]{background:var(--color-primary-light);border-radius:var(--border-radius-large)}.file-picker__navigation__month[data-v-0810cf23]{font-weight:bold;font-size:16px;border-radius:var(--border-radius-pill);padding:8px 16px;margin:4px 0;cursor:pointer}@media only screen and (max-width: 1200px){.file-picker__navigation__month[data-v-0810cf23]{text-align:center}}.file-picker__navigation__month[data-v-0810cf23]:hover{background:var(--color-background-dark)}.file-picker__navigation__month.selected[data-v-0810cf23]{background:var(--color-primary-element-lighter)}.file-picker__file-list[data-v-0810cf23]{flex-grow:1;min-width:0;height:100%}.file-picker__file-list--placeholder[data-v-0810cf23]{background:var(--color-primary-light);border-radius:var(--border-radius-large)}.file-picker__file-list .section-header[data-v-0810cf23]{font-weight:bold;font-size:20px;padding:8px 0 4px 0}.file-picker__file-list[data-v-0810cf23]  .empty-content{position:absolute;width:100%;margin-top:0;height:100%;display:flex;flex-direction:column;justify-content:center}.file-picker__actions[data-v-0810cf23]{display:flex;justify-content:space-between;justify-items:center;padding-top:16px}","",{version:3,sources:["webpack://./src/components/FilesPicker.vue"],names:[],mappings:"AAuLA,8BACC,YAAA,CACA,qBAAA,CACA,YAAA,CAEA,uCACC,YAAA,CACA,sBAAA,CACA,WAAA,CACA,YAAA,CAGD,0CACC,gBAAA,CACA,eAAA,CACA,gBAAA,CACA,iBAAA,CACA,WAAA,CAEA,2CAPD,0CAQE,gBAAA,CAAA,CAGD,uDACC,qCAAA,CACA,wCAAA,CAGD,iDACC,gBAAA,CACA,cAAA,CACA,uCAAA,CACA,gBAAA,CACA,YAAA,CACA,cAAA,CAEA,2CARD,iDASE,iBAAA,CAAA,CAGD,uDACC,uCAAA,CAGD,0DACC,+CAAA,CAKH,yCACC,WAAA,CACA,WAAA,CACA,WAAA,CAEA,sDACC,qCAAA,CACA,wCAAA,CAGD,yDACC,gBAAA,CACA,cAAA,CACA,mBAAA,CAGD,yDACC,iBAAA,CACA,UAAA,CACA,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CAIF,uCACC,YAAA,CACA,6BAAA,CACA,oBAAA,CACA,gBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.file-picker {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 12px;\n\n\t&__content {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tflex-grow: 1;\n\t\theight: 500px;\n\t}\n\n\t&__navigation {\n\t\tflex-basis: 200px;\n\t\toverflow: scroll;\n\t\tmargin-right: 8px;\n\t\tpadding-right: 8px;\n\t\theight: 100%;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tflex-basis: 100px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-light);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t}\n\n\t\t&__month {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 16px;\n\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\tpadding: 8px 16px;\n\t\t\tmargin: 4px 0;\n\t\t\tcursor: pointer;\n\n\t\t\t@media only screen and (max-width: 1200px) {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tbackground: var(--color-background-dark);\n\t\t\t}\n\n\t\t\t&.selected {\n\t\t\t\tbackground: var(--color-primary-element-lighter);\n\t\t\t}\n\t\t}\n\t}\n\n\t&__file-list {\n\t\tflex-grow: 1;\n\t\tmin-width: 0;\n\t\theight: 100%;\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-light);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t}\n\n\t\t.section-header {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 20px;\n\t\t\tpadding: 8px 0 4px 0;\n\t\t}\n\n\t\t::v-deep .empty-content {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\tmargin-top: 0;\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n\n\t&__actions {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tjustify-items: center;\n\t\tpadding-top: 16px;\n\t}\n}\n'],sourceRoot:""}]);const l=a},17802:(n,t,e)=>{"use strict";e.d(t,{Z:()=>l});var o=e(87537),r=e.n(o),i=e(23645),a=e.n(i)()(r());a.push([n.id,".album__title[data-v-20164bcc]{width:100%}.album__name[data-v-20164bcc]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.album__location[data-v-20164bcc]{margin-left:-4px;display:flex;color:var(--color-text-lighter)}","",{version:3,sources:["webpack://./src/views/AlbumContent.vue"],names:[],mappings:"AA0aC,+BACC,UAAA,CAGD,8BACC,eAAA,CACA,kBAAA,CACA,sBAAA,CAGD,kCACC,gBAAA,CACA,YAAA,CACA,+BAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.album {\n\t&__title {\n\t\twidth: 100%;\n\t}\n\n\t&__name {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&__location {\n\t\tmargin-left: -4px;\n\t\tdisplay: flex;\n\t\tcolor: var(--color-text-lighter);\n\t}\n}\n'],sourceRoot:""}]);const l=a},94917:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});const o={name:"ShareVariantIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const r=(0,e(51900).Z)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon share-variant-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports},79906:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var o=e(20629),r=e(79753);function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){l(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const s={name:"ActionDownload",components:{NcActionLink:e(15961).ih},props:{title:{type:String,required:!0},selectedFileIds:{type:Array,required:!0}},computed:a(a({},(0,o.Se)(["files"])),{},{downloadUrl:function(){var n=new URLSearchParams,t=this.fileNames.map((function(n){return"/"+n.split("/").splice(3).join("/")}));return n.append("files",JSON.stringify(t)),(0,r.generateUrl)("/apps/files/ajax/download.php?".concat(n))},fileNames:function(){var n=this;return this.selectedFileIds.map((function(t){return n.files[t].filename}))}})};const c=(0,e(51900).Z)(s,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("NcActionLink",{attrs:{"close-after-click":!0,href:n.downloadUrl,download:n.downloadUrl,"aria-label":n.title}},[n._v("\n\t"+n._s(n.title)+"\n\t"),n._t("icon",null,{slot:"icon"})],2)}),[],!1,null,null,null).exports},60627:(n,t,e)=>{"use strict";e.d(t,{Z:()=>p});var o=e(20629),r=e(75760),i=e(15961);function a(n,t,e,o,r,i,a){try{var l=n[i](a),s=l.value}catch(n){return void e(n)}l.done?t(s):Promise.resolve(s).then(o,r)}function l(n){return function(){var t=this,e=arguments;return new Promise((function(o,r){var i=n.apply(t,e);function l(n){a(i,o,r,l,s,"next",n)}function s(n){a(i,o,r,l,s,"throw",n)}l(void 0)}))}}function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const d={name:"ActionFavorite",components:{Star:r.default,NcActionButton:i.Js},props:{selectedFileIds:{type:Array,required:!0}},computed:c(c({},(0,o.Se)(["files"])),{},{shouldFavoriteSelection:function(){var n=this;return this.selectedFileIds.some((function(t){return 0===n.files[t].favorite}))}}),methods:c(c({},(0,o.nv)(["toggleFavoriteForFiles"])),{},{favoriteSelection:function(){var n=this;return l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.toggleFavoriteForFiles({fileIds:n.selectedFileIds,favoriteState:1});case 2:case"end":return t.stop()}}),t)})))()},unFavoriteSelection:function(){var n=this;return l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.toggleFavoriteForFiles({fileIds:n.selectedFileIds,favoriteState:0});case 2:case"end":return t.stop()}}),t)})))()}})};const p=(0,e(51900).Z)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.shouldFavoriteSelection?e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Mark selection as favorite")},on:{click:n.favoriteSelection}},[n._v("\n\t"+n._s(n.t("photos","Add selection to favorites"))+"\n\t"),e("Star",{attrs:{slot:"icon"},slot:"icon"})],1):e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Remove selection from favorites")},on:{click:n.unFavoriteSelection}},[n._v("\n\t"+n._s(n.t("photos","Remove selection from favorites"))+"\n\t"),e("Star",{attrs:{slot:"icon"},slot:"icon"})],1)}),[],!1,null,null,null).exports},53474:(n,t,e)=>{"use strict";e.d(t,{Z:()=>Z});var o=e(20629),r=e(15961),i=e(52587),a=e(80351),l=e.n(a),s=e(61679),c=e(89240),u=e(86677),d=e(66951),p=e(98171),m=e(28391),f=e(81090),A=e(3301);function h(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function b(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const g={name:"FilesPicker",components:{File:u.Z,FilesListViewer:c.Z,ImagePlus:s.Z,NcButton:r.P2,NcLoadingIcon:r.lb,UploadPicker:i.e},filters:{dateMonthAndYear:function(n){return l()(n,"YYYYMM").format("MMMM YYYY")}},mixins:[d.Z,m.Z,p.Z,f.Z],props:{destination:{type:String,required:!0},blacklistIds:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{allowedMimes:A.ZP,targetMonth:null,uploadContext:{route:"albumpicker"}}},computed:function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){b(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({},(0,o.Se)(["files"])),watch:{monthsList:function(n){null===this.targetMonth&&(this.targetMonth=n[0])}},methods:{getFiles:function(){this.fetchFiles("",{},this.blacklistIds)},emitPickedEvent:function(){this.$emit("files-picked",this.selectedFileIds)}}};var v=e(93379),C=e.n(v),_=e(7795),y=e.n(_),w=e(90569),x=e.n(w),k=e(3565),F=e.n(k),O=e(19216),P=e.n(O),S=e(44589),j=e.n(S),N=e(19413),M={};M.styleTagTransform=j(),M.setAttributes=F(),M.insert=x().bind(null,"head"),M.domAPI=y(),M.insertStyleElement=P();C()(N.Z,M);N.Z&&N.Z.locals&&N.Z.locals;const Z=(0,e(51900).Z)(g,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"file-picker"},[e("div",{staticClass:"file-picker__content"},[e("div",{staticClass:"file-picker__navigation",class:{"file-picker__navigation--placeholder":0===n.monthsList.length}},n._l(n.monthsList,(function(t){return e("div",{key:t,staticClass:"file-picker__navigation__month",class:{selected:n.targetMonth===t},on:{click:function(e){n.targetMonth=t}}},[n._v("\n\t\t\t\t"+n._s(n._f("dateMonthAndYear")(t))+"\n\t\t\t")])})),0),n._v(" "),e("FilesListViewer",{staticClass:"file-picker__file-list",class:{"file-picker__file-list--placeholder":0===n.monthsList.length},attrs:{"file-ids-by-section":n.fileIdsByMonth,"empty-message":n.t("photos","There are no photos or videos yet!"),sections:n.monthsList,loading:n.loadingFiles,"base-height":100,"section-header-height":50,"scroll-to-section":n.targetMonth},on:{"need-content":n.getFiles},scopedSlots:n._u([{key:"default",fn:function(t){var o=t.file,r=t.height,i=t.visibility;return[o.sectionHeader?e("h3",{staticClass:"section-header",style:{height:r+"px"},attrs:{id:"file-picker-section-header-"+o.id}},[n._v("\n\t\t\t\t\t"+n._s(n._f("dateMonthAndYear")(o.id))+"\n\t\t\t\t")]):e("File",{attrs:{file:n.files[o.id],"allow-selection":!0,selected:!0===n.selection[o.id],visibility:i,semaphore:n.semaphore},on:{"select-toggled":n.onFileSelectToggle}})]}}])})],1),n._v(" "),e("div",{staticClass:"file-picker__actions"},[e("UploadPicker",{attrs:{accept:n.allowedMimes,context:n.uploadContext,destination:n.photosLocation,multiple:!0},on:{uploaded:n.getFiles}}),n._v(" "),e("NcButton",{attrs:{type:"primary",disabled:n.loading||0===n.selectedFileIds.length},on:{click:n.emitPickedEvent},scopedSlots:n._u([{key:"icon",fn:function(){return[n.loading?n._e():e("ImagePlus"),n._v(" "),n.loading?e("NcLoadingIcon"):n._e()]},proxy:!0}])},[n._v("\n\t\t\t"+n._s(n.t("photos","Add to {destination}",{destination:n.destination}))+"\n\t\t")])],1)])}),[],!1,null,"0810cf23",null).exports},19738:(n,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>an});var r=o(91770),i=o(45994),a=o(20629),l=o(15961),s=o(52587),c=o(20296),u=o.n(c),d=o(31894),p=o(33691),m=o(2470);const f={name:"DownloadMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var A=o(51900);const h=(0,A.Z)(f,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon download-multiple-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M9,1V7H5L12,14L19,7H15V1H9M5,16V18H19V16H5M5,20V22H19V20H5Z"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports;var b=o(61679),g=o(93050),v=o(91482),C=o(40502),_=o(44244),y=o(94917),w=o(69363),x=o(12945),k=o(66951),F=o(81090),O=o(79906),P=o(60627),S=o(59008),j=o(54953),N=o(13827),M=o(53474),Z=o(68391),D=o(94236),B=o(3301),I=o(81067),E=o(2161),T=o(59537);function L(n,t,e,o,r,i,a){try{var l=n[i](a),s=l.value}catch(n){return void e(n)}l.done?t(s):Promise.resolve(s).then(o,r)}function R(n){return function(){var t=this,e=arguments;return new Promise((function(o,r){var i=n.apply(t,e);function a(n){L(i,o,r,a,l,"next",n)}function l(n){L(i,o,r,a,l,"throw",n)}a(void 0)}))}}function W(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function V(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?W(Object(e),!0).forEach((function(t){Y(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):W(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Y(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const $={name:"AlbumContent",components:{ActionDownload:O.Z,ActionFavorite:P.Z,AlbumForm:S.Z,Close:d.default,CollaboratorsSelectionForm:j.Z,CollectionContent:N.Z,Delete:p.Z,Download:m.Z,DownloadMultiple:h,FilesPicker:M.Z,HeaderNavigation:Z.Z,ImagePlus:b.Z,MapMarker:g.Z,NcActionButton:l.Js,NcActions:l.O3,NcActionSeparator:l.rr,NcButton:l.P2,NcEmptyContent:l.SL,NcLoadingIcon:l.lb,NcModal:l.Jc,Pencil:v.default,Plus:C.Z,ShareVariant:y.Z,UploadPicker:s.e},mixins:[w.Z,x.Z,k.Z,l.tq,F.Z],props:{albumName:{type:String,default:"/"}},data:function(){return{allowedMimes:B.ZP,showAddPhotosModal:!1,showManageCollaboratorView:!1,showEditAlbumForm:!1,loadingAddCollaborators:!1}},computed:V(V({},(0,a.Se)(["albumsFiles"])),{},{album:function(){return this.albums[this.albumName]||{}},albumFileIds:function(){return this.albumsFiles[this.albumName]||[]},sharingEnabled:function(){return void 0!==OC.Share},uploadContext:function(){var n;return V(V({},this.album),{},{route:this.$route.name,root:"dav/photos/".concat(null===(n=(0,i.ts)())||void 0===n?void 0:n.uid,"/albums")})}}),watch:{album:function(n,t){n.filename!==t.filename&&this.fetchAlbumContent()}},mounted:function(){var n=this;(0,r.cd)({id:"album-add",displayName:t("photos","Add photos to this album"),templateName:"",if:function(t){return t.route===n.$route.name},iconSvgInline:_,handler:function(){n.showAddPhotosModal=!0}})},methods:V(V({},(0,a.nv)(["appendFiles","deleteAlbum","addFilesToAlbum","removeFilesFromAlbum","updateAlbum"])),{},{fetchAlbumContent:function(){var n=this;return R(regeneratorRuntime.mark((function t(){var e,o,r,a,l,s,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.loadingFiles&&!n.showEditAlbumForm){t.next=2;break}return t.abrupt("return",[]);case 2:return t.next=4,n.semaphore.acquire((function(){return 0}),"fetchFiles");case 4:return e=t.sent,t.next=7,n.fetchSemaphore.acquire();case 7:return o=t.sent,t.prev=8,n.errorFetchingFiles=null,n.loadingFiles=!0,n.semaphoreSymbol=e,t.next=14,I.ZP.getDirectoryContents("/photos/".concat(null===(r=(0,i.ts)())||void 0===r?void 0:r.uid,"/albums/").concat(n.albumName),{data:E.Z,details:!0,signal:n.abortController.signal});case 14:if(a=t.sent,l=a.data.map((function(n){return(0,D.AX)(n)})).filter((function(n){return n.fileid})),s=l.map((function(n){return n.fileid.toString()})),n.appendFiles(l),!(l.length>0)){t.next=21;break}return t.next=21,n.$store.commit("addFilesToAlbum",{albumName:n.albumName,fileIdsToAdd:s});case 21:T.Z.debug("[AlbumContent] Fetched ".concat(s.length," new files: "),s),t.next=36;break;case 24:if(t.prev=24,t.t0=t.catch(8),404!==(null===(c=t.t0.response)||void 0===c?void 0:c.status)){t.next=30;break}n.errorFetchingFiles=404,t.next=35;break;case 30:if("ERR_CANCELED"!==t.t0.code){t.next=34;break}return t.abrupt("return");case 34:n.errorFetchingFiles=t.t0;case 35:T.Z.error("[AlbumContent] Error fetching album files",{error:t.t0});case 36:return t.prev=36,n.loadingFiles=!1,n.semaphore.release(e),n.fetchSemaphore.release(o),t.finish(36);case 41:return t.abrupt("return",[]);case 42:case"end":return t.stop()}}),t,null,[[8,24,36,41]])})))()},redirectToNewName:function(n){var t=n.album;this.showEditAlbumForm=!1,this.album.basename!==t.basename&&this.$router.push("/albums/".concat(t.basename))},handleFilesPicked:function(n){var t=this;return R(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showAddPhotosModal=!1,e.next=3,t.addFilesToAlbum({albumName:t.albumName,fileIdsToAdd:n});case 3:return e.next=5,t.fetchAlbumContent();case 5:case"end":return e.stop()}}),e)})))()},handleRemoveFilesFromAlbum:function(n){var t=this;return R(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$refs.collectionContent.onUncheckFiles(n),e.next=3,t.removeFilesFromAlbum({albumName:t.albumName,fileIdsToRemove:n});case 3:case"end":return e.stop()}}),e)})))()},handleDeleteAlbum:function(){var n=this;return R(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.deleteAlbum({albumName:n.albumName});case 2:n.$router.push("/albums");case 3:case"end":return t.stop()}}),t)})))()},handleSetCollaborators:function(n){var t=this;return R(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loadingAddCollaborators=!0,t.showManageCollaboratorView=!1,e.next=5,t.updateAlbum({albumName:t.albumName,properties:{collaborators:n}});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),T.Z.error(e.t0);case 10:return e.prev=10,t.loadingAddCollaborators=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()},onUpload:u()((function(){this.fetchAlbumContent()}),500)})};var H=o(93379),U=o.n(H),z=o(7795),q=o.n(z),G=o(90569),J=o.n(G),K=o(3565),Q=o.n(K),X=o(19216),nn=o.n(X),tn=o(44589),en=o.n(tn),on=o(17802),rn={};rn.styleTagTransform=en(),rn.setAttributes=Q(),rn.insert=J().bind(null,"head"),rn.domAPI=q(),rn.insertStyleElement=nn();U()(on.Z,rn);on.Z&&on.Z.locals&&on.Z.locals;const an=(0,A.Z)($,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("CollectionContent",{ref:"collectionContent",attrs:{collection:n.album,"collection-file-ids":n.albumFileIds,semaphore:n.semaphore,loading:n.loadingAlbums||n.loadingFiles,error:n.errorFetchingAlbums||n.errorFetchingFiles},scopedSlots:n._u([{key:"header",fn:function(t){var o=t.selectedFileIds;return e("HeaderNavigation",{key:"navigation",attrs:{loading:n.loadingFiles,params:{albumName:n.albumName},path:"/"+n.albumName,title:n.albumName},on:{refresh:n.fetchAlbumContent}},[""!==n.album.location?e("div",{staticClass:"album__location",attrs:{slot:"subtitle"},slot:"subtitle"},[e("MapMarker"),n._v(n._s(n.album.location)+"\n\t\t\t")],1):n._e(),n._v(" "),void 0!==n.album?e("template",{slot:"right"},[0!==n.album.nbItems?e("UploadPicker",{attrs:{accept:n.allowedMimes,context:n.uploadContext,destination:n.album.basename,root:n.uploadContext.root,multiple:!0},on:{uploaded:n.onUpload}}):n._e(),n._v(" "),n.sharingEnabled?e("NcButton",{attrs:{type:"tertiary","aria-label":n.t("photos","Manage collaborators for this album")},on:{click:function(t){n.showManageCollaboratorView=!0}}},[e("ShareVariant",{attrs:{slot:"icon"},slot:"icon"})],1):n._e(),n._v(" "),e("NcActions",{attrs:{"aria-label":n.t("photos","Open actions menu")}},[e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Edit album details")},on:{click:function(t){n.showEditAlbumForm=!0}}},[n._v("\n\t\t\t\t\t\t"+n._s(n.t("photos","Edit album details"))+"\n\t\t\t\t\t\t"),e("Pencil",{attrs:{slot:"icon"},slot:"icon"})],1),n._v(" "),n.albumFileIds.length>0?e("ActionDownload",{attrs:{"selected-file-ids":n.albumFileIds,title:n.t("photos","Download all files in album")}},[e("DownloadMultiple",{attrs:{slot:"icon"},slot:"icon"})],1):n._e(),n._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0},on:{click:n.handleDeleteAlbum}},[n._v("\n\t\t\t\t\t\t"+n._s(n.t("photos","Delete album"))+"\n\t\t\t\t\t\t"),e("Delete",{attrs:{slot:"icon"},slot:"icon"})],1),n._v(" "),o.length>0?[e("NcActionSeparator"),n._v(" "),e("ActionDownload",{attrs:{"selected-file-ids":o,title:n.t("photos","Download selected files")}},[e("Download",{attrs:{slot:"icon"},slot:"icon"})],1),n._v(" "),e("ActionFavorite",{attrs:{"selected-file-ids":o}}),n._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0},on:{click:function(t){return n.handleRemoveFilesFromAlbum(o)}}},[n._v("\n\t\t\t\t\t\t\t"+n._s(n.t("photos","Remove selection from album"))+"\n\t\t\t\t\t\t\t"),e("Close",{attrs:{slot:"icon"},slot:"icon"})],1)]:n._e()],2)],1):n._e()],2)}}],null,!1,3771967189)},[n._v(" "),void 0===n.album||0!==n.album.nbItems||n.loadingFiles||n.loadingAlbums?n._e():e("NcEmptyContent",{staticClass:"album__empty",attrs:{slot:"empty-content",title:n.t("photos","This album does not have any photos or videos yet!")},slot:"empty-content"},[e("ImagePlus",{attrs:{slot:"icon"},slot:"icon"}),n._v(" "),e("NcButton",{staticClass:"album__empty__button",attrs:{slot:"action",type:"primary","aria-label":n.t("photos","Add photos to this album")},on:{click:function(t){n.showAddPhotosModal=!0}},slot:"action"},[e("Plus",{attrs:{slot:"icon"},slot:"icon"}),n._v("\n\t\t\t\t"+n._s(n.t("photos","Add"))+"\n\t\t\t")],1)],1)],1),n._v(" "),n.showAddPhotosModal?e("NcModal",{attrs:{size:"large",title:n.t("photos","Add photos to the album")},on:{close:function(t){n.showAddPhotosModal=!1}}},[e("FilesPicker",{attrs:{destination:n.album.basename,"blacklist-ids":n.albumFileIds},on:{"files-picked":n.handleFilesPicked}})],1):n._e(),n._v(" "),n.showManageCollaboratorView?e("NcModal",{attrs:{title:n.t("photos","Manage collaborators")},on:{close:function(t){n.showManageCollaboratorView=!1}}},[e("CollaboratorsSelectionForm",{attrs:{"album-name":n.album.basename,collaborators:n.album.collaborators,"public-link":n.album.publicLink},scopedSlots:n._u([{key:"default",fn:function(t){var o=t.collaborators;return[e("NcButton",{attrs:{"aria-label":n.t("photos","Save collaborators for this album."),type:"primary",disabled:n.loadingAddCollaborators},on:{click:function(t){return n.handleSetCollaborators(o)}},scopedSlots:n._u([{key:"icon",fn:function(){return[n.loadingAddCollaborators?e("NcLoadingIcon"):n._e()]},proxy:!0}],null,!0)},[n._v("\n\t\t\t\t\t"+n._s(n.t("photos","Save"))+"\n\t\t\t\t")])]}}],null,!1,4058924180)})],1):n._e(),n._v(" "),n.showEditAlbumForm?e("NcModal",{attrs:{title:n.t("photos","Edit album details")},on:{close:function(t){n.showEditAlbumForm=!1}}},[e("AlbumForm",{attrs:{album:n.album},on:{done:n.redirectToNewName}})],1):n._e()],1)}),[],!1,null,"20164bcc",null).exports},44244:n=>{"use strict";n.exports='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-plus" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>'},80950:()=>{},46601:()=>{},89214:()=>{},96419:()=>{},56353:()=>{},8623:()=>{},7748:()=>{},85568:()=>{},69386:()=>{},31616:()=>{},56619:()=>{},77108:()=>{}}]);
//# sourceMappingURL=photos-src_views_AlbumContent_vue.js.map?v=1fc78fc719c63e5dc165