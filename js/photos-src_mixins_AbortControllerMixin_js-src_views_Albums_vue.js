/*! For license information please see photos-src_mixins_AbortControllerMixin_js-src_views_Albums_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_mixins_AbortControllerMixin_js-src_views_Albums_vue"],{69363:(n,t,e)=>{e.d(t,{Z:()=>a});const a={name:"AbortControllerMixin",data:function(){return{abortController:new AbortController}},beforeDestroy:function(){this.abortController.abort()},beforeRouteLeave:function(n,t,e){this.abortController.abort(),e()}}},42357:(n,t,e)=>{e.d(t,{Z:()=>l});var a=e(87537),o=e.n(a),i=e(23645),r=e.n(i)()(o());r.push([n.id,".album-cover[data-v-9a9e277a]{display:flex;flex-direction:column;padding:16px;border-radius:12px}.album-cover[data-v-9a9e277a]:hover,.album-cover[data-v-9a9e277a]:focus{background:var(--color-background-dark)}.album-cover__image[data-v-9a9e277a]{width:350px;height:350px;object-fit:none;border-radius:12px}@media only screen and (max-width: 1200px){.album-cover__image[data-v-9a9e277a]{width:250px;height:250px}}.album-cover__image--placeholder[data-v-9a9e277a]{background:var(--color-primary-light)}.album-cover__image--placeholder[data-v-9a9e277a]  .material-design-icon{width:100%;height:100%}.album-cover__image--placeholder[data-v-9a9e277a]  .material-design-icon .material-design-icon__svg{fill:var(--color-primary)}.album-cover__details[data-v-9a9e277a]{display:flex;flex-direction:column;margin-top:16px;width:350px}@media only screen and (max-width: 1200px){.album-cover__details[data-v-9a9e277a]{width:250px}}.album-cover__details__first-line[data-v-9a9e277a]{display:flex}.album-cover__details__second-line[data-v-9a9e277a]{display:flex;color:var(--color-text-lighter)}.album-cover__details__name[data-v-9a9e277a]{flex-grow:1;margin:0;font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/components/AlbumCover.vue"],names:[],mappings:"AA+FA,8BACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,kBAAA,CAEA,wEACC,uCAAA,CAGD,qCACC,WAAA,CACA,YAAA,CACA,eAAA,CACA,kBAAA,CAEA,2CAND,qCAOE,WAAA,CACA,YAAA,CAAA,CAGD,kDACC,qCAAA,CAEA,yEACC,UAAA,CACA,WAAA,CAEA,oGACC,yBAAA,CAMJ,uCACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CAEA,2CAND,uCAOE,WAAA,CAAA,CAGD,mDACC,YAAA,CAGD,oDACC,YAAA,CACA,+BAAA,CAGD,6CACC,WAAA,CACA,QAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.album-cover {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 16px;\n\tborder-radius: 12px;\n\n\t&:hover, &:focus {\n\t\tbackground: var(--color-background-dark);\n\t}\n\n\t&__image {\n\t\twidth: 350px;\n\t\theight: 350px;\n\t\tobject-fit: none;\n\t\tborder-radius: 12px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t\theight: 250px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-light);\n\n\t\t\t::v-deep .material-design-icon {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\n\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\tfill: var(--color-primary);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 16px;\n\t\twidth: 350px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t}\n\n\t\t&__first-line {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t&__second-line {\n\t\t\tdisplay: flex;\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\n\t\t&__name {\n\t\t\tflex-grow: 1;\n\t\t\tmargin: 0;\n\t\t\tfont-weight: normal;\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\n\t\t}\n\t}\n\n}\n'],sourceRoot:""}]);const l=r},78504:(n,t,e)=>{e.d(t,{Z:()=>l});var a=e(87537),o=e.n(a),i=e(23645),r=e.n(i)()(o());r.push([n.id,".loader{display:grid;height:60px}","",{version:3,sources:["webpack://./src/components/Loader.vue"],names:[],mappings:"AAsCA,QACC,YAAA,CACA,WAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n\tdisplay: grid;\n\theight: 60px;\n}\n'],sourceRoot:""}]);const l=r},44977:(n,t,e)=>{e.d(t,{Z:()=>l});var a=e(87537),o=e.n(a),i=e(23645),r=e.n(i)()(o());r.push([n.id,".albums[data-v-4d5a6ee8]{display:flex;flex-direction:column;height:100%}.albums__header[data-v-4d5a6ee8]{display:flex;height:60px;align-items:center;padding:0 64px;position:-webkit-sticky;position:sticky;top:var(--header-height);width:100%;z-index:3;background:var(--color-main-background);box-sizing:content-box}@media only screen and (max-width: 1200px){.albums__header[data-v-4d5a6ee8]{padding:0 48px}}.albums__header button[data-v-4d5a6ee8]{margin-right:32px}.albums__list[data-v-4d5a6ee8]{padding:32px 48px;flex-grow:1;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;height:calc(100% - 60px);overflow-x:scroll}@media only screen and (max-width: 1200px){.albums__list[data-v-4d5a6ee8]{padding:32px 12px;justify-content:center}}.albums__empty[data-v-4d5a6ee8]{display:flex;flex-direction:column;align-items:center}.albums__empty__button[data-v-4d5a6ee8]{margin-top:32px}.empty-content-with-illustration[data-v-4d5a6ee8]  .empty-content__icon{width:200px;height:200px}.empty-content-with-illustration[data-v-4d5a6ee8]  .empty-content__icon svg{width:200px;height:200px}","",{version:3,sources:["webpack://./src/views/Albums.vue"],names:[],mappings:"AAoIA,yBACC,YAAA,CACA,qBAAA,CACA,WAAA,CAEA,iCACC,YAAA,CACA,WAAA,CACA,kBAAA,CACA,cAAA,CACA,uBAAA,CAAA,eAAA,CACA,wBAAA,CACA,UAAA,CACA,SAAA,CACA,uCAAA,CACA,sBAAA,CAEA,2CAZD,iCAaE,cAAA,CAAA,CAGD,wCACC,iBAAA,CAIF,+BACC,iBAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,QAAA,CACA,sBAAA,CACA,wBAAA,CACA,iBAAA,CAEA,2CAVD,+BAWE,iBAAA,CACA,sBAAA,CAAA,CAKF,gCACC,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,wCACC,eAAA,CAKH,wEACC,WAAA,CACA,YAAA,CAEA,4EACC,WAAA,CACA,YAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.albums {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\n\t&__header {\n\t\tdisplay: flex;\n\t\theight: 60px;\n\t\talign-items: center;\n\t\tpadding: 0 64px;\n\t\tposition: sticky;\n\t\ttop: var(--header-height);\n\t\twidth: 100%;\n\t\tz-index: 3;\n\t\tbackground: var(--color-main-background);\n\t\tbox-sizing: content-box;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 0 48px;\n\t\t}\n\n\t\tbutton {\n\t\t\tmargin-right: 32px;\n\t\t}\n\t}\n\n\t&__list {\n\t\tpadding: 32px 48px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 16px;\n\t\talign-items: flex-start;\n\t\theight: calc(100% - 60px);\n\t\toverflow-x: scroll;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 32px 12px;\n\t\t\tjustify-content: center;\n\t\t}\n\n\t}\n\n\t&__empty {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\n\t\t&__button {\n\t\t\tmargin-top: 32px;\n\t\t}\n\t}\n}\n\n.empty-content-with-illustration ::v-deep .empty-content__icon {\n\twidth: 200px;\n\theight: 200px;\n\n\tsvg {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n}\n'],sourceRoot:""}]);const l=r},36288:(n,t,e)=>{e.d(t,{Z:()=>o});const a={name:"ImageMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,e(51900).Z)(a,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon image-multiple-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports},8702:(n,t,e)=>{e.d(t,{Z:()=>h});const a={name:"Loader"};var o=e(93379),i=e.n(o),r=e(7795),l=e.n(r),A=e(90569),s=e.n(A),c=e(3565),m=e.n(c),u=e(19216),d=e.n(u),p=e(44589),C=e.n(p),g=e(78504),b={};b.styleTagTransform=C(),b.setAttributes=m(),b.insert=s().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=d();i()(g.Z,b);g.Z&&g.Z.locals&&g.Z.locals;const h=(0,e(51900).Z)(a,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"loader"},[n._t("icon",(function(){return[e("span",{staticClass:"icon-loading"})]}))],2)}),[],!1,null,null,null).exports},8885:(n,t,e)=>{e.r(t),e.d(t,{default:()=>F});var a=e(40502),o=e(65322),i=e(33476),r=e(12945),l=e(20629),A=e(36288),s=e(79753);function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function m(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const d={name:"AlbumCover",components:{ImageMultiple:A.Z},props:{baseName:{type:String,required:!0}},computed:m(m({},(0,l.Se)(["files","albums"])),{},{album:function(){return this.albums[this.baseName]},coverUrl:function(){return(0,s.generateUrl)("/core/preview?fileId=".concat(this.album.lastPhoto,"&x=",512,"&y=",512,"&forceIcon=0&a=1"))}})};var p=e(93379),C=e.n(p),g=e(7795),b=e.n(g),h=e(90569),_=e.n(h),v=e(3565),x=e.n(v),f=e(19216),y=e.n(f),w=e(44589),k=e.n(w),W=e(42357),T={};T.styleTagTransform=k(),T.setAttributes=x(),T.insert=_().bind(null,"head"),T.domAPI=b(),T.insertStyleElement=y();C()(W.Z,T);W.Z&&W.Z.locals&&W.Z.locals;var B=e(51900);const E=(0,B.Z)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("router-link",{staticClass:"album-cover",attrs:{to:"/albums/"+n.baseName}},[0!==n.album.lastPhoto?e("img",{staticClass:"album-cover__image",attrs:{src:n.coverUrl}}):e("div",{staticClass:"album-cover__image album-cover__image--placeholder"},[e("ImageMultiple",{attrs:{size:128}})],1),n._v(" "),e("div",{staticClass:"album-cover__details"},[e("div",{staticClass:"album-cover__details__first-line"},[e("h2",{staticClass:"album-cover__details__name"},[n._v("\n\t\t\t\t"+n._s(n.baseName)+"\n\t\t\t")])]),n._v(" "),e("div",{staticClass:"album-cover__details__second-line"},[n._v("\n\t\t\t"+n._s(n.album.date)+" ⸱ "+n._s(n.n("photos","%n item","%n photos and videos",n.album.nbItems))+"\n\t\t")])])])}),[],!1,null,"9a9e277a",null).exports;var Z=e(29195),O=e(8702);const j={name:"Albums",components:{AlbumCover:E,EmptyContent:i.EmptyContent,AlbumForm:Z.Z,Loader:O.Z,Modal:i.Modal,Button:i.Button,Plus:a.Z,FolderMultipleImage:o.Z},mixins:[r.Z],data:function(){return{showAlbumCreationForm:!1}},computed:{noAlbums:function(){return 0===Object.keys(this.albums).length}},methods:{handleAlbumCreated:function(n){var t=n.album;this.showAlbumCreationForm=!1,this.$router.push("/albums/".concat(t.basename))}}};var D=e(44977),P={};P.styleTagTransform=k(),P.setAttributes=x(),P.insert=_().bind(null,"head"),P.domAPI=b(),P.insertStyleElement=y();C()(D.Z,P);D.Z&&D.Z.locals&&D.Z.locals;const F=(0,B.Z)(j,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.errorFetchingAlbums?e("EmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):e("div",{staticClass:"albums"},[e("div",{staticClass:"albums__header"},[e("Button",{attrs:{type:"primary","aria-label":n.t("photos","Create a new album.")},on:{click:function(t){n.showAlbumCreationForm=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}])},[n._v("\n\t\t\t"+n._s(n.t("photos","New album"))+"\n\t\t")]),n._v(" "),n.loadingAlbums?e("Loader"):n._e()],1),n._v(" "),n.noAlbums&&!n.loadingAlbums?e("div",{staticClass:"albums__empty"},[e("EmptyContent",{scopedSlots:n._u([{key:"icon",fn:function(){return[e("FolderMultipleImage")]},proxy:!0},{key:"desc",fn:function(){return[n._v("\n\t\t\t\t"+n._s(n.t("photos","There is no album yet!"))+"\n\t\t\t")]},proxy:!0}],null,!1,3685789295)}),n._v(" "),e("Button",{staticClass:"albums__empty__button",attrs:{type:"primary","aria-label":n.t("photos","Create a new album")},on:{click:function(t){n.showAlbumCreationForm=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}],null,!1,1489515321)},[n._v("\n\t\t\t"+n._s(n.t("photos","Add"))+"\n\t\t")])],1):n.noAlbums?n._e():e("div",{staticClass:"albums__list"},n._l(n.albums,(function(n){return e("AlbumCover",{key:n.basename,staticClass:"album",attrs:{"base-name":n.basename}})})),1),n._v(" "),n.showAlbumCreationForm?e("Modal",{attrs:{title:n.t("photos","New album")},on:{close:function(t){n.showAlbumCreationForm=!1}}},[e("AlbumForm",{on:{done:n.handleAlbumCreated}})],1):n._e()],1)}),[],!1,null,"4d5a6ee8",null).exports}}]);
//# sourceMappingURL=photos-src_mixins_AbortControllerMixin_js-src_views_Albums_vue.js.map?v=0d08533cc7ee3dce723b