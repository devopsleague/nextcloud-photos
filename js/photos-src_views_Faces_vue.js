/*! For license information please see photos-src_views_Faces_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Faces_vue"],{46116:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(20629),a=t(86492),o=t.n(a);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}const l={name:"FaceCoverMixin",computed:i({},(0,r.Se)(["faces","facesFiles","files"])),methods:{getFaceCover:function(n){var e=this;return(this.facesFiles[n]||[]).slice(0,25).map((function(n){return e.files[n]})).map((function(n){return i(i({},n),{},{faceDetections:JSON.parse(o().decode(n.faceDetections))})})).sort((function(e,t){return t.faceDetections.find((function(e){return e.title===n})).width-e.faceDetections.find((function(e){return e.title===n})).width})).sort((function(n,e){return n.faceDetections.length-e.faceDetections.length}))[0]},getCoverStyle:function(n){var e=this.getFaceCover(n);if(!e)return{};var t=e.faceDetections.find((function(e){return e.title===n})),r=Math.max(1,1/t.width*.4),a=100*(t.x+t.width/2),o=100*(t.y+t.height/2);return{width:"100%",transform:"translate(calc( var(--photos-face-width)/2 - ".concat(a,"% ), calc( var(--photos-face-width)/2 - ").concat(o,"% )) scale(").concat(r,")"),transformOrigin:"".concat(a,"% ").concat(o,"%")}}}}},99751:(n,e,r)=>{r.d(e,{Z:()=>h});var a=r(20629),o=r(82880),c=r(22200),i=r(81067),s=r(59537),l=r(4615),u=r(2161),p=r(94236);function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function A(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){d(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function g(n,e,t,r,a,o,c){try{var i=n[o](c),s=i.value}catch(n){return void t(n)}i.done?e(s):Promise.resolve(s).then(r,a)}function m(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function c(n){g(o,r,a,c,i,"next",n)}function i(n){g(o,r,a,c,i,"throw",n)}c(void 0)}))}}const h={name:"FetchFacesMixin",data:function(){return{errorFetchingFaces:null,loadingFaces:!1,errorFetchingFiles:null,loadingFiles:!1,cancelFacesRequest:function(){},cancelFilesRequest:function(){}}},beforeMount:function(){var n=this;return m(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.fetchFaces();case 1:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.cancelFacesRequest("Changed view"),this.cancelFilesRequest("Changed view")},computed:A({},(0,a.Se)(["faces"])),methods:A(A({},(0,a.nv)(["appendFiles"])),{},{fetchFaces:function(){var n=this;return m(regeneratorRuntime.mark((function e(){var r,a,u,p,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.loadingFaces){e.next=2;break}return e.abrupt("return");case 2:if(!Object.keys(n.faces).length){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,n.loadingFaces=!0,n.errorFetchingFaces=null,a=(0,l.Z)(i.Z.getDirectoryContents),u=a.request,p=a.cancel,n.cancelFacesRequest=p,e.next=11,u("/recognize/".concat(null===(r=(0,c.getCurrentUser)())||void 0===r?void 0:r.uid,"/faces/"));case 11:f=e.sent,n.$store.dispatch("addFaces",{faces:f}),s.Z.debug("[FetchFacesMixin] Fetched ".concat(f.length," new faces: "),f),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(4),e.t0.response&&e.t0.response.status&&(404===e.t0.response.status?n.errorFetchingFaces=404:n.errorFetchingFaces=e.t0),s.Z.error(t("photos","Failed to fetch faces list."),e.t0),(0,o.x2)(t("photos","Failed to fetch faces list."));case 21:return e.prev=21,n.cancelFacesRequest=function(){},n.loadingFaces=!1,e.finish(21);case 25:case"end":return e.stop()}}),e,null,[[4,16,21,25]])})))()},fetchFaceContent:function(n,e){var t=this;return m(regeneratorRuntime.mark((function r(){var a,o,f,d,g,m,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.loadingFiles){r.next=2;break}return r.abrupt("return");case 2:if(e||!t.facesFiles[n]||!t.facesFiles[n].length){r.next=4;break}return r.abrupt("return");case 4:return r.prev=4,t.errorFetchingFiles=null,t.loadingFiles=!0,o=(0,l.Z)(i.Z.getDirectoryContents),f=o.request,d=o.cancel,t.cancelFilesRequest=d,r.next=11,f("/recognize/".concat(null===(a=(0,c.getCurrentUser)())||void 0===a?void 0:a.uid,"/faces/").concat(n),{data:u.Z,details:!0});case 11:if(g=r.sent,m=(m=g.data).map((function(n){return(0,p.AX)(n)})).map((function(n){return A(A({},n),{},{filename:n.realpath.replace("/".concat((0,c.getCurrentUser)().uid,"/files"),"")})})),h=m.map((function(n){return""+n.fileid})),t.appendFiles(m),!(m.length>0)){r.next=19;break}return r.next=19,t.$store.commit("addFilesToFace",{faceName:n,fileIdsToAdd:h});case 19:s.Z.debug("[FetchFacesMixin] Fetched ".concat(h.length," new files: "),h),r.next=26;break;case 22:r.prev=22,r.t0=r.catch(4),r.t0.response&&r.t0.response.status&&(404===r.t0.response.status?t.errorFetchingFiles=404:t.errorFetchingFiles=r.t0),s.Z.error("Error fetching face files",r.t0);case 26:return r.prev=26,t.loadingFiles=!1,t.cancelFilesRequest=function(){},r.finish(26);case 30:case"end":return r.stop()}}),r,null,[[4,22,26,30]])})))()}})}},2161:(n,e,t)=>{t.d(e,{N:()=>r,Z:()=>a});var r="\n\t<oc:fileid />\n\t<d:getlastmodified />\n\t<d:getetag />\n\t<d:getcontenttype />\n\t<d:getcontentlength />\n\t<nc:realpath />\n\t<nc:has-preview />\n\t<nc:file-metadata-size />\n\t<nc:face-detections />\n\t<oc:favorite />\n\t<d:resourcetype />";const a='<?xml version="1.0"?>\n\t\t\t<d:propfind xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t'.concat(r,"\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>")},4615:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(4820);function a(n,e,t,r,a,o,c){try{var i=n[o](c),s=i.value}catch(n){return void t(n)}i.done?e(s):Promise.resolve(s).then(r,a)}const o=function(n){var e=r.default.CancelToken.source(),t=function(){var t,r=(t=regeneratorRuntime.mark((function t(r,a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n(r,Object.assign({cancelToken:e.token},a)));case 1:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var c=t.apply(n,e);function i(n){a(c,r,o,i,s,"next",n)}function s(n){a(c,r,o,i,s,"throw",n)}i(void 0)}))});return function(n,e){return r.apply(this,arguments)}}();return{request:t,cancel:e.cancel}}},49462:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(87537),a=t.n(r),o=t(23645),c=t.n(o)()(a());c.push([n.id,".face-cover[data-v-2a995501]{display:flex;flex-direction:column;padding:10px;border-radius:var(--border-radius-large)}.face-cover__crop-container[data-v-2a995501]{overflow:hidden;width:250px;height:250px;border-radius:250px;position:relative;background:var(--color-background-darker);--photos-face-width: 250px}@media only screen and (max-width: 1020px){.face-cover__crop-container[data-v-2a995501]{width:95px;height:95px;--photos-face-width: 95px}}.face-cover[data-v-2a995501]:hover,.face-cover[data-v-2a995501]:focus{background:var(--color-background-hover)}.face-cover__details[data-v-2a995501]{display:flex;flex-direction:column;width:250px;margin-top:4px;text-align:center}@media only screen and (max-width: 1020px){.face-cover__details[data-v-2a995501]{width:95px}}.face-cover__details__first-line[data-v-2a995501]{display:flex;height:2em;overflow:hidden;text-overflow:ellipsis}.face-cover__details__second-line[data-v-2a995501]{color:var(--color-text-maxcontrast)}.face-cover__details__name[data-v-2a995501]{flex-grow:1;margin:0}","",{version:3,sources:["webpack://./src/components/FaceCover.vue"],names:[],mappings:"AAuHA,6BACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,wCAAA,CAEA,6CACC,eAAA,CACA,WAAA,CACA,YAAA,CACA,mBAAA,CACA,iBAAA,CACA,yCAAA,CACA,0BAAA,CAEA,2CATD,6CAUE,UAAA,CACA,WAAA,CACA,yBAAA,CAAA,CAIF,sEACC,wCAAA,CAGD,sCACC,YAAA,CACA,qBAAA,CACA,WAAA,CACA,cAAA,CACA,iBAAA,CAEA,2CAPD,sCAQE,UAAA,CAAA,CAGD,kDACC,YAAA,CACA,UAAA,CACA,eAAA,CACA,sBAAA,CAGD,mDACC,mCAAA,CAGD,4CACC,WAAA,CACA,QAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.face-cover {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 10px;\n\tborder-radius: var(--border-radius-large);\n\n\t&__crop-container {\n\t\toverflow: hidden;\n\t\twidth: 250px;\n\t\theight: 250px;\n\t\tborder-radius: 250px;\n\t\tposition: relative;\n\t\tbackground: var(--color-background-darker);\n\t\t--photos-face-width: 250px;\n\n\t\t@media only screen and (max-width: 1020px) {\n\t\t\twidth: 95px;\n\t\t\theight: 95px;\n\t\t\t--photos-face-width: 95px;\n\t\t}\n\t}\n\n\t&:hover, &:focus {\n\t\tbackground: var(--color-background-hover);\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\twidth: 250px;\n\t\tmargin-top: 4px;\n\t\ttext-align: center;\n\n\t\t@media only screen and (max-width: 1020px) {\n\t\t\twidth: 95px;\n\t\t}\n\n\t\t&__first-line {\n\t\t\tdisplay: flex;\n\t\t\theight: 2em;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\t&__second-line {\n\t\t\tcolor: var(--color-text-maxcontrast);\n\t\t}\n\n\t\t&__name {\n\t\t\tflex-grow: 1;\n\t\t\tmargin: 0;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const i=c},78504:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(87537),a=t.n(r),o=t(23645),c=t.n(o)()(a());c.push([n.id,".loader{display:grid;height:60px}","",{version:3,sources:["webpack://./src/components/Loader.vue"],names:[],mappings:"AAsCA,QACC,YAAA,CACA,WAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n\tdisplay: grid;\n\theight: 60px;\n}\n'],sourceRoot:""}]);const i=c},16467:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(87537),a=t.n(r),o=t(23645),c=t.n(o)()(a());c.push([n.id,".faces[data-v-40b27884]{display:flex;flex-direction:column;height:calc(100vh - var(--header-height));padding-left:64px}@media only screen and (max-width: 1020px){.faces[data-v-40b27884]{padding:0}}.faces__header[data-v-40b27884]{display:flex;min-height:60px;align-items:center}.faces__header button[data-v-40b27884]{margin-right:32px}.faces__list[data-v-40b27884]{padding-top:24px;padding-bottom:32px;flex-grow:1;display:flex;flex-wrap:wrap;overflow:scroll;gap:32px;align-content:flex-start}.faces__empty[data-v-40b27884]{display:flex;flex-direction:column;align-items:center}.faces__empty__button[data-v-40b27884]{margin-top:32px}.empty-content-with-illustration[data-v-40b27884]  .empty-content__icon{width:200px;height:200px}.empty-content-with-illustration[data-v-40b27884]  .empty-content__icon svg{width:200px;height:200px}","",{version:3,sources:["webpack://./src/views/Faces.vue"],names:[],mappings:"AAqGA,wBACC,YAAA,CACA,qBAAA,CACA,yCAAA,CACA,iBAAA,CAEA,2CAND,wBAOE,SAAA,CAAA,CAGD,gCACC,YAAA,CACA,eAAA,CACA,kBAAA,CAEA,uCACC,iBAAA,CAIF,8BACC,gBAAA,CACA,mBAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,eAAA,CACA,QAAA,CACA,wBAAA,CAGD,+BACC,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,uCACC,eAAA,CAKH,wEACC,WAAA,CACA,YAAA,CAEA,4EACC,WAAA,CACA,YAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.faces {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: calc(100vh - var(--header-height));\n\tpadding-left: 64px;\n\n\t@media only screen and (max-width: 1020px) {\n\t\tpadding: 0;\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\tmin-height: 60px;\n\t\talign-items: center;\n\n\t\tbutton {\n\t\t\tmargin-right: 32px;\n\t\t}\n\t}\n\n\t&__list {\n\t\tpadding-top: 24px;\n\t\tpadding-bottom: 32px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\toverflow: scroll;\n\t\tgap: 32px;\n\t\talign-content: flex-start;\n\t}\n\n\t&__empty {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\n\t\t&__button {\n\t\t\tmargin-top: 32px;\n\t\t}\n\t}\n}\n\n.empty-content-with-illustration ::v-deep .empty-content__icon {\n\twidth: 200px;\n\theight: 200px;\n\n\tsvg {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n}\n'],sourceRoot:""}]);const i=c},8702:(n,e,t)=>{t.d(e,{Z:()=>v});const r={name:"Loader"};var a=t(93379),o=t.n(a),c=t(7795),i=t.n(c),s=t(90569),l=t.n(s),u=t(3565),p=t.n(u),f=t(19216),A=t.n(f),d=t(44589),g=t.n(d),m=t(78504),h={};h.styleTagTransform=g(),h.setAttributes=p(),h.insert=l().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=A();o()(m.Z,h);m.Z&&m.Z.locals&&m.Z.locals;const v=(0,t(51900).Z)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"loader"},[n._t("icon",(function(){return[t("span",{staticClass:"icon-loading"})]}))],2)}),[],!1,null,null,null).exports},20458:(n,e,t)=>{t.r(e),t.d(e,{default:()=>S});var r=t(33476),a=t(50335),o=t(99751),c=t(8702),i=t(20629),s=t(79753),l=t(46116);function u(n,e,t,r,a,o,c){try{var i=n[o](c),s=i.value}catch(n){return void t(n)}i.done?e(s):Promise.resolve(s).then(r,a)}function p(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function c(n){u(o,r,a,c,i,"next",n)}function i(n){u(o,r,a,c,i,"throw",n)}c(void 0)}))}}function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function A(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){d(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}const g={name:"FaceCover",mixins:[o.Z,l.Z],props:{baseName:{type:String,required:!0}},computed:A(A({},(0,i.Se)(["files","faces","facesFiles"])),{},{face:function(){return this.faces[this.baseName]},coverUrl:function(){return this.cover?(0,s.generateUrl)("/core/preview?fileId=".concat(this.cover.fileid,"&x=",512,"&y=",512,"&forceIcon=0&a=1")):""},cover:function(){return this.getFaceCover(this.face.basename)},coverDimensions:function(){return this.cover?this.getCoverStyle(this.face.basename):{}}}),beforeMount:function(){var n=this;return p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchFiles();case 2:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.cancelFilesRequest("Changed view")},methods:{fetchFiles:function(){var n=this;return p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchFaceContent(n.face.basename);case 2:case"end":return e.stop()}}),e)})))()}}};var m=t(93379),h=t.n(m),v=t(7795),C=t.n(v),b=t(90569),x=t.n(b),y=t(3565),w=t.n(y),_=t(19216),F=t.n(_),O=t(44589),j=t.n(O),k=t(49462),P={};P.styleTagTransform=j(),P.setAttributes=w(),P.insert=x().bind(null,"head"),P.domAPI=C(),P.insertStyleElement=F();h()(k.Z,P);k.Z&&k.Z.locals&&k.Z.locals;var T=t(51900);function D(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function W(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?D(Object(t),!0).forEach((function(e){Z(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function Z(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}const E={name:"Faces",components:{FaceCover:(0,T.Z)(g,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("router-link",{staticClass:"face-cover",attrs:{to:"/faces/"+n.baseName}},[t("div",{staticClass:"face-cover__crop-container"},[t("img",{ref:"image",staticClass:"face-cover__image",style:n.coverDimensions,attrs:{src:n.coverUrl}})]),n._v(" "),t("div",{staticClass:"face-cover__details"},[t("div",{staticClass:"face-cover__details__first-line"},[t("h2",{class:{"face-cover__details__name":!0,"hidden-visually":n.baseName.match(/^[0-9]+$/)}},[n._v("\n\t\t\t\t"+n._s(n.baseName)+"\n\t\t\t")])]),n._v(" "),n.facesFiles[n.baseName]?t("div",{staticClass:"face-cover__details__second-line"},[n._v("\n\t\t\t"+n._s(n.n("photos","%n photos","%n photos",n.facesFiles[n.baseName].length))+"\n\t\t")]):n._e()])])}),[],!1,null,"2a995501",null).exports,EmptyContent:r.EmptyContent,Loader:c.Z,AccountBoxMultipleOutline:a.Z},mixins:[o.Z],computed:W(W({},(0,i.Se)(["facesFiles"])),{},{noFaces:function(){return 0===Object.keys(this.faces).length},orderedFaces:function(){var n=this;return Object.values(this.faces).sort((function(e,t){return n.facesFiles[t.basename]&&n.facesFiles[e.basename]?n.facesFiles[t.basename].length-n.facesFiles[e.basename].length:0}))}})};var R=t(16467),B={};B.styleTagTransform=j(),B.setAttributes=w(),B.insert=x().bind(null,"head"),B.domAPI=C(),B.insertStyleElement=F();h()(R.Z,B);R.Z&&R.Z.locals&&R.Z.locals;const S=(0,T.Z)(E,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.errorFetchingFaces?t("EmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):t("div",{staticClass:"faces"},[n.loadingFaces?t("Loader"):n._e(),n._v(" "),n.noFaces&&!n.loadingFaces?t("div",{staticClass:"faces__empty"},[t("EmptyContent",{staticClass:"empty-content-with-illustration",scopedSlots:n._u([{key:"icon",fn:function(){return[t("AccountBoxMultipleOutline")]},proxy:!0},{key:"desc",fn:function(){return[n._v("\n\t\t\t\t"+n._s(n.t("photos","This might take some time depending on the size of your photo library."))+"\n\t\t\t")]},proxy:!0}],null,!1,3796275108)},[n._v(" "),n._v("\n\t\t\t"+n._s(n.t("photos","Recognized people will show up here"))+"\n\t\t")])],1):n.noFaces?n._e():t("div",{staticClass:"faces__list"},n._l(n.orderedFaces,(function(n){return t("FaceCover",{key:n.basename,attrs:{"base-name":n.basename}})})),1)],1)}),[],!1,null,"40b27884",null).exports}}]);
//# sourceMappingURL=photos-src_views_Faces_vue.js.map?v=08318d4eb2700c4439a5