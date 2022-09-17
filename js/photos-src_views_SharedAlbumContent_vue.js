/*! For license information please see photos-src_views_SharedAlbumContent_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_SharedAlbumContent_vue"],{49723:(n,e,r)=>{r.d(e,{Z:()=>A});var o=r(20629),a=r(80351),l=r.n(a),i=r(82880),s=r(45994),c=r(81067),u=r(59537),d=r(94236);function m(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){h(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function h(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function b(n,t,e,r,o,a,l){try{var i=n[a](l),s=i.value}catch(n){return void e(n)}i.done?t(s):Promise.resolve(s).then(r,o)}function f(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function l(n){b(a,r,o,l,i,"next",n)}function i(n){b(a,r,o,l,i,"throw",n)}l(void 0)}))}}const A={name:"FetchSharedAlbumsMixin",data:function(){return{errorFetchingAlbums:null,loadingAlbums:!1}},mixins:[r(69363).Z],beforeMount:function(){var n=this;return f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.fetchAlbums();case 1:case"end":return t.stop()}}),t)})))()},computed:p({},(0,o.Se)(["sharedAlbums"])),methods:{fetchAlbums:function(){var n=this;return f(regeneratorRuntime.mark((function e(){var r,o,a,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.loadingAlbums){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n.loadingAlbums=!0,n.errorFetchingAlbums=null,e.next=7,c.Z.getDirectoryContents("/photos/".concat(null===(r=(0,s.ts)())||void 0===r?void 0:r.uid,"/sharedalbums"),{data:'<?xml version="1.0"?>\n\t\t\t\t\t\t\t<d:propfind xmlns:d="DAV:"\n\t\t\t\t\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\t\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\t\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t\t<nc:last-photo />\n\t\t\t\t\t\t\t\t\t<nc:nbItems />\n\t\t\t\t\t\t\t\t\t<nc:location />\n\t\t\t\t\t\t\t\t\t<nc:dateRange />\n\t\t\t\t\t\t\t\t\t<nc:collaborators />\n\t\t\t\t\t\t\t\t\t<nc:publicLink />\n\t\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t\t</d:propfind>',details:!0,signal:n.abortController.signal});case 7:o=e.sent,a=o.data.filter((function(n){var t;return n.filename!=="/photos/".concat(null===(t=(0,s.ts)())||void 0===t?void 0:t.uid,"/sharedalbums")})).map((function(n){return(0,d.AX)(n)})).map((function(t){var e,r;t.collaborators=""===t.collaborators?[]:t.collaborators;var o=JSON.parse(null!==(e=null===(r=t.dateRange)||void 0===r?void 0:r.replace(/&quot;/g,'"'))&&void 0!==e?e:"{}");null===o.start&&(o.start=l()().unix(),o.end=l()().unix());var a={startDate:l().unix(o.start).format("MMMM YYYY"),endDate:l().unix(o.end).format("MMMM YYYY")};return p(p({},t),{},a.startDate===a.endDate?{date:a.startDate}:{date:n.t("photos","{startDate} to {endDate}",a)})})),n.$store.dispatch("addSharedAlbums",{albums:a}),u.Z.debug("[FetchSharedAlbumsMixin] Fetched ".concat(a.length," new files: "),a),e.next=26;break;case 13:if(e.prev=13,e.t0=e.catch(2),404!==(null===(m=e.t0.response)||void 0===m?void 0:m.status)){e.next=19;break}n.errorFetchingAlbums=404,e.next=24;break;case 19:if("ERR_CANCELED"!==e.t0.code){e.next=23;break}return e.abrupt("return");case 23:n.errorFetchingAlbums=e.t0;case 24:u.Z.error(t("photos","Failed to fetch albums list."),e.t0),(0,i.showError)(t("photos","Failed to fetch albums list."));case 26:return e.prev=26,n.loadingAlbums=!1,e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[2,13,26,29]])})))()}}}},29629:(n,t,e)=>{e.d(t,{Z:()=>i});var r=e(87537),o=e.n(r),a=e(23645),l=e.n(a)()(o());l.push([n.id,".album[data-v-617dd735]{display:flex;flex-direction:column}.album__title[data-v-617dd735]{width:100%}.album__name[data-v-617dd735]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.album__location[data-v-617dd735]{margin-left:-4px;display:flex;color:var(--color-text-lighter)}","",{version:3,sources:["webpack://./src/views/SharedAlbumContent.vue"],names:[],mappings:"AA0SA,wBACC,YAAA,CACA,qBAAA,CAEA,+BACC,UAAA,CAGD,8BACC,eAAA,CACA,kBAAA,CACA,sBAAA,CAGD,kCACC,gBAAA,CACA,YAAA,CACA,+BAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.album {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__title {\n\t\twidth: 100%;\n\t}\n\n\t&__name {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&__location {\n\t\tmargin-left: -4px;\n\t\tdisplay: flex;\n\t\tcolor: var(--color-text-lighter);\n\t}\n}\n'],sourceRoot:""}]);const i=l},40502:(n,t,e)=>{e.d(t,{Z:()=>o});const r={name:"PlusIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,e(51900).Z)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon plus-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports},84941:(n,t,e)=>{e.r(t),e.d(t,{default:()=>z});var r=e(20629),o=e(93050),a=e(40502),l=e(33691),i=e(61679),s=e(31894),c=e(2470),u=e(54287),d=e(33476),m=e(45994),p=e(79753),h=e(49723),b=e(66951),f=e(69363),A=e(38352),g=e(32948),v=e(17288),w=e(83046),C=e(59537),x=e(81067),y=e(2161),_=e(94236);function F(n,t,e,r,o,a,l){try{var i=n[a](l),s=i.value}catch(n){return void e(n)}i.done?t(s):Promise.resolve(s).then(r,o)}function k(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function l(n){F(a,r,o,l,i,"next",n)}function i(n){F(a,r,o,l,i,"throw",n)}l(void 0)}))}}function N(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function P(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?N(Object(e),!0).forEach((function(t){O(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function O(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const D={name:"SharedAlbumContent",components:{MapMarker:o.Z,Plus:a.Z,Close:s.default,Download:c.Z,DownloadMultiple:u.Z,Delete:l.Z,ImagePlus:i.Z,NcEmptyContent:d.NcEmptyContent,NcActions:d.NcActions,NcActionButton:d.NcActionButton,NcActionSeparator:d.NcActionSeparator,NcButton:d.NcButton,NcModal:d.NcModal,CollectionContent:A.Z,ActionDownload:v.Z,FilesPicker:w.Z,HeaderNavigation:g.Z},mixins:[h.Z,b.Z,f.Z,d.isMobile],props:{albumName:{type:String,default:"/"}},data:function(){return{showAddPhotosModal:!1,loadingCount:0,loadingAddFilesToAlbum:!1}},computed:P(P({},(0,r.Se)(["files","sharedAlbumsFiles"])),{},{album:function(){return this.sharedAlbums[this.albumName]||{}},albumFileIds:function(){return this.sharedAlbumsFiles[this.albumName]||[]}}),watch:{album:function(){this.fetchAlbumContent()}},methods:P(P({},(0,r.nv)(["appendFiles","deleteSharedAlbum","addFilesToSharedAlbum","removeFilesFromSharedAlbum"])),{},{fetchAlbumContent:function(){var n=this;return k(regeneratorRuntime.mark((function t(){var e,r,o,a,l,i,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.loadingFiles&&!n.showEditAlbumForm){t.next=2;break}return t.abrupt("return",[]);case 2:return t.next=4,n.semaphore.acquire((function(){return 0}),"fetchFiles");case 4:return e=t.sent,t.next=7,n.fetchSemaphore.acquire();case 7:return r=t.sent,t.prev=8,n.errorFetchingFiles=null,n.loadingFiles=!0,n.semaphoreSymbol=e,t.next=14,x.Z.getDirectoryContents("/photos/".concat(null===(o=(0,m.ts)())||void 0===o?void 0:o.uid,"/sharedalbums/").concat(n.albumName),{data:y.Z,details:!0,signal:n.abortController.signal});case 14:if(a=t.sent,l=a.data.map((function(n){return(0,_.AX)(n)})).map((function(n){return P(P({},n),{},{source:(0,p.generateRemoteUrl)("dav".concat(n.filename))})})),i=l.map((function(n){return n.fileid})).map((function(n){return n.toString()})),n.appendFiles(l),!(l.length>0)){t.next=21;break}return t.next=21,n.$store.commit("addFilesToSharedAlbum",{albumName:n.albumName,fileIdsToAdd:i});case 21:C.Z.debug("[SharedAlbumContent] Fetched ".concat(i.length," new files: "),i),t.next=36;break;case 24:if(t.prev=24,t.t0=t.catch(8),404!==(null===(s=t.t0.response)||void 0===s?void 0:s.status)){t.next=30;break}n.errorFetchingFiles=404,t.next=35;break;case 30:if("ERR_CANCELED"!==t.t0.code){t.next=34;break}return t.abrupt("return");case 34:n.errorFetchingFiles=t.t0;case 35:C.Z.error("Error fetching shared album files",t.t0);case 36:return t.prev=36,n.loadingFiles=!1,n.semaphore.release(e),n.fetchSemaphore.release(r),t.finish(36);case 41:return t.abrupt("return",[]);case 42:case"end":return t.stop()}}),t,null,[[8,24,36,41]])})))()},handleFilesPicked:function(n){var t=this;return k(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showAddPhotosModal=!1,e.next=3,t.addFilesToSharedAlbum({albumName:t.albumName,fileIdsToAdd:n});case 3:return e.next=5,t.fetchAlbumContent();case 5:case"end":return e.stop()}}),e)})))()},handleRemoveFilesFromAlbum:function(n){var t=this;return k(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$refs.collectionContent.onUncheckFiles(n),e.next=3,t.removeFilesFromSharedAlbum({albumName:t.albumName,fileIdsToRemove:n});case 3:case"end":return e.stop()}}),e)})))()},handleDeleteAlbum:function(){var n=this;return k(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.deleteSharedAlbum({albumName:n.albumName});case 2:case"end":return t.stop()}}),t)})))()}})};var S=e(93379),Z=e.n(S),M=e(7795),j=e.n(M),R=e(90569),T=e.n(R),E=e(3565),B=e.n(E),I=e(19216),W=e.n(I),Y=e(44589),H=e.n(Y),$=e(29629),V={};V.styleTagTransform=H(),V.setAttributes=B(),V.insert=T().bind(null,"head"),V.domAPI=j(),V.insertStyleElement=W();Z()($.Z,V);$.Z&&$.Z.locals&&$.Z.locals;const z=(0,e(51900).Z)(D,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("CollectionContent",{ref:"collectionContent",attrs:{collection:n.album,"collection-file-ids":n.albumFileIds,semaphore:n.semaphore,loading:n.loadingAlbums||n.loadingFiles,error:n.errorFetchingAlbums||n.errorFetchingFiles},scopedSlots:n._u([{key:"header",fn:function(t){var r=t.selectedFileIds;return e("HeaderNavigation",{key:"navigation",attrs:{loading:n.loadingFiles,params:{albumName:n.albumName},path:"/"+n.albumName,title:n.albumName},on:{refresh:n.fetchAlbumContent}},[""!==n.album.location?e("div",{staticClass:"album__location",attrs:{slot:"subtitle"},slot:"subtitle"},[e("MapMarker"),n._v(n._s(n.album.location)+"\n\t\t\t")],1):n._e(),n._v(" "),void 0!==n.album?e("template",{slot:"right"},[0!==n.album.nbItems?e("NcButton",{attrs:{type:"tertiary","aria-label":n.t("photos","Add photos to this album")},on:{click:function(t){n.showAddPhotosModal=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}],null,!0)}):n._e(),n._v(" "),e("NcActions",{attrs:{"aria-label":n.t("photos","Open actions menu")}},[n.albumFileIds.length>0?e("ActionDownload",{attrs:{"selected-file-ids":n.albumFileIds,title:n.t("photos","Download all files in album")}},[e("DownloadMultiple",{attrs:{slot:"icon"},slot:"icon"})],1):n._e(),n._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0},on:{click:n.handleDeleteAlbum}},[n._v("\n\t\t\t\t\t\t"+n._s(n.t("photos","Delete album"))+"\n\t\t\t\t\t\t"),e("Delete",{attrs:{slot:"icon"},slot:"icon"})],1),n._v(" "),r.length>0?[e("NcActionSeparator"),n._v(" "),e("ActionDownload",{attrs:{"selected-file-ids":r,title:n.t("photos","Download selected files")}},[e("Download",{attrs:{slot:"icon"},slot:"icon"})],1),n._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0},on:{click:function(t){return n.handleRemoveFilesFromAlbum(r)}}},[n._v("\n\t\t\t\t\t\t\t"+n._s(n.t("photos","Remove selection from album"))+"\n\t\t\t\t\t\t\t"),e("Close",{attrs:{slot:"icon"},slot:"icon"})],1)]:n._e()],2)],1):n._e()],2)}}],null,!1,3773425985)},[n._v(" "),e("NcEmptyContent",{staticClass:"album__empty",attrs:{slot:"empty-content",title:n.t("photos","This album doesn't have any photos or videos yet!")},slot:"empty-content"},[e("ImagePlus",{attrs:{slot:"icon"},slot:"icon"}),n._v(" "),e("NcButton",{attrs:{slot:"action",type:"primary","aria-label":n.t("photos","Add photos to this album")},on:{click:function(t){n.showAddPhotosModal=!0}},slot:"action"},[e("Plus",{attrs:{slot:"icon"},slot:"icon"}),n._v("\n\t\t\t\t"+n._s(n.t("photos","Add"))+"\n\t\t\t")],1)],1)],1),n._v(" "),n.showAddPhotosModal?e("NcModal",{attrs:{size:"large",title:n.t("photos","Add photos to the album")},on:{close:function(t){n.showAddPhotosModal=!1}}},[e("FilesPicker",{attrs:{destination:n.album.basename,"blacklist-ids":n.albumFileIds,loading:n.loadingAddFilesToAlbum},on:{"files-picked":n.handleFilesPicked}})],1):n._e()],1)}),[],!1,null,"617dd735",null).exports}}]);
//# sourceMappingURL=photos-src_views_SharedAlbumContent_vue.js.map?v=abc58749a3eb52cc8204