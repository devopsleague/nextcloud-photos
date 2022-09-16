/*! For license information please see photos-src_views_SharedAlbums_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_SharedAlbums_vue"],{49723:(n,e,r)=>{r.d(e,{Z:()=>v});var o=r(20629),a=r(80351),s=r.n(a),l=r(82880),i=r(45994),c=r(81067),u=r(59537),m=r(94236);function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){b(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function b(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function h(t,n,e,r,o,a,s){try{var l=t[a](s),i=l.value}catch(t){return void e(t)}l.done?n(i):Promise.resolve(i).then(r,o)}function f(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function s(t){h(a,r,o,s,l,"next",t)}function l(t){h(a,r,o,s,l,"throw",t)}s(void 0)}))}}const v={name:"FetchSharedAlbumsMixin",data:function(){return{errorFetchingAlbums:null,loadingAlbums:!1}},mixins:[r(69363).Z],beforeMount:function(){var t=this;return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.fetchAlbums();case 1:case"end":return n.stop()}}),n)})))()},computed:d({},(0,o.Se)(["sharedAlbums"])),methods:{fetchAlbums:function(){var n=this;return f(regeneratorRuntime.mark((function e(){var r,o,a,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.loadingAlbums){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n.loadingAlbums=!0,n.errorFetchingAlbums=null,e.next=7,c.Z.getDirectoryContents("/photos/".concat(null===(r=(0,i.ts)())||void 0===r?void 0:r.uid,"/sharedalbums"),{data:'<?xml version="1.0"?>\n\t\t\t\t\t\t\t<d:propfind xmlns:d="DAV:"\n\t\t\t\t\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\t\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\t\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t\t<nc:last-photo />\n\t\t\t\t\t\t\t\t\t<nc:nbItems />\n\t\t\t\t\t\t\t\t\t<nc:location />\n\t\t\t\t\t\t\t\t\t<nc:dateRange />\n\t\t\t\t\t\t\t\t\t<nc:collaborators />\n\t\t\t\t\t\t\t\t\t<nc:publicLink />\n\t\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t\t</d:propfind>',details:!0,signal:n.abortController.signal});case 7:o=e.sent,a=o.data.filter((function(t){var n;return t.filename!=="/photos/".concat(null===(n=(0,i.ts)())||void 0===n?void 0:n.uid,"/sharedalbums")})).map((function(t){return(0,m.AX)(t)})).map((function(t){var e,r;t.collaborators=""===t.collaborators?[]:t.collaborators;var o=JSON.parse(null!==(e=null===(r=t.dateRange)||void 0===r?void 0:r.replace(/&quot;/g,'"'))&&void 0!==e?e:"{}");null===o.start&&(o.start=s()().unix(),o.end=s()().unix());var a={startDate:s().unix(o.start).format("MMMM YYYY"),endDate:s().unix(o.end).format("MMMM YYYY")};return d(d({},t),{},a.startDate===a.endDate?{date:a.startDate}:{date:n.t("photos","{startDate} to {endDate}",a)})})),n.$store.dispatch("addSharedAlbums",{albums:a}),u.Z.debug("[FetchSharedAlbumsMixin] Fetched ".concat(a.length," new files: "),a),e.next=26;break;case 13:if(e.prev=13,e.t0=e.catch(2),404!==(null===(p=e.t0.response)||void 0===p?void 0:p.status)){e.next=19;break}n.errorFetchingAlbums=404,e.next=24;break;case 19:if("ERR_CANCELED"!==e.t0.code){e.next=23;break}return e.abrupt("return");case 23:n.errorFetchingAlbums=e.t0;case 24:u.Z.error(t("photos","Failed to fetch albums list."),e.t0),(0,l.showError)(t("photos","Failed to fetch albums list."));case 26:return e.prev=26,n.loadingAlbums=!1,e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[2,13,26,29]])})))()}}}},7204:(t,n,e)=>{e.d(n,{Z:()=>l});var r=e(87537),o=e.n(r),a=e(23645),s=e.n(a)()(o());s.push([t.id,".albums-list[data-v-393e546c]{display:flex;flex-direction:column}.albums-list .album__name[data-v-393e546c]{font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/views/SharedAlbums.vue"],names:[],mappings:"AAuFA,8BACC,YAAA,CACA,qBAAA,CAEA,2CACC,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.albums-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t.album__name {\n\t\tfont-weight: normal;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n}\n'],sourceRoot:""}]);const l=s},41189:(t,n,e)=>{e.r(n),e.d(n,{default:()=>_});var r=e(65322),o=e(79753),a=e(33476),s=e(49723),l=e(39981),i=e(88843);const c={name:"SharedAlbums",components:{FolderMultipleImage:r.Z,NcEmptyContent:a.NcEmptyContent,CollectionsList:l.Z,CollectionCover:i.Z},filters:{coverUrl:function(t){return-1===t?"":(0,o.generateUrl)("/apps/photos/api/v1/preview/".concat(t,"?x=",512,"&y=",512))}},mixins:[s.Z]};var u=e(93379),m=e.n(u),p=e(7795),d=e.n(p),b=e(90569),h=e.n(b),f=e(3565),v=e.n(f),g=e(19216),A=e.n(g),C=e(44589),w=e.n(C),x=e(7204),y={};y.styleTagTransform=w(),y.setAttributes=v(),y.insert=h().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=A();m()(x.Z,y);x.Z&&x.Z.locals&&x.Z.locals;const _=(0,e(51900).Z)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("CollectionsList",{staticClass:"albums-list",attrs:{collections:t.sharedAlbums,loading:t.loadingAlbums,"collection-title":t.t("photos","Shared albums"),"collection-root":t.t("photos","Shared albums"),error:t.errorFetchingAlbums},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.collection;return e("CollectionCover",{key:r.basename,attrs:{link:"/sharedalbums/"+r.basename,"alt-img":t.t("photos","Cover photo for shared album {albumName}.",{albumName:r.basename}),"cover-url":t._f("coverUrl")(r.lastPhoto)}},[e("h2",{staticClass:"album__name"},[t._v("\n\t\t\t"+t._s(r.basename)+"\n\t\t")]),t._v(" "),e("div",{staticClass:"album__details",attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("\n\t\t\t"+t._s(r.date)+" ⸱ "+t._s(t.n("photos","%n item","%n photos and videos",r.nbItems))+"\n\t\t")])])}}])},[t._v(" "),e("NcEmptyContent",{attrs:{slot:"empty-collections-list",title:t.t("photos","There is no album yet!")},slot:"empty-collections-list"},[e("FolderMultipleImage",{attrs:{slot:"icon"},slot:"icon"})],1)],1)}),[],!1,null,"393e546c",null).exports}}]);
//# sourceMappingURL=photos-src_views_SharedAlbums_vue.js.map?v=8e7f46f5eb7fd9a47452