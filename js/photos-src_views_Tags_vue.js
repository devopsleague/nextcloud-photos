/*! For license information please see photos-src_views_Tags_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Tags_vue"],{26520:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(87537),i=e.n(r),a=e(23645),o=e.n(a)()(i());o.push([n.id,"@media(min-width: 0px)and (max-width: 400px){.grid-container[data-v-7e4412b9]{padding:0px 8px 256px 8px}}@media(min-width: 400px)and (max-width: 700px){.grid-container[data-v-7e4412b9]{padding:0px 8px 256px 8px}}@media(min-width: 700px)and (max-width: 1024px){.grid-container[data-v-7e4412b9]{padding:0px 44px 256px 44px}}@media(min-width: 1024px)and (max-width: 1280px){.grid-container[data-v-7e4412b9]{padding:0px 44px 256px 44px}}@media(min-width: 1280px)and (max-width: 1440px){.grid-container[data-v-7e4412b9]{padding:0px 66px 256px 66px}}@media(min-width: 1440px)and (max-width: 1600px){.grid-container[data-v-7e4412b9]{padding:0px 66px 256px 66px}}@media(min-width: 1600px)and (max-width: 2048px){.grid-container[data-v-7e4412b9]{padding:0px 66px 256px 66px}}@media(min-width: 2048px)and (max-width: 2560px){.grid-container[data-v-7e4412b9]{padding:0px 88px 256px 88px}}@media(min-width: 2560px)and (max-width: 3440px){.grid-container[data-v-7e4412b9]{padding:0px 88px 256px 88px}}@media(min-width: 3440px){.grid-container[data-v-7e4412b9]{padding:0px 88px 256px 88px}}","",{version:3,sources:["webpack://./src/mixins/GridSizes.scss","webpack://./src/views/Tags.vue"],names:[],mappings:"AAoCG,6CCkPH,iCAEE,yBAAA,CAAA,CDpPC,+CCkPH,iCAEE,yBAAA,CAAA,CDpPC,gDCkPH,iCAEE,2BAAA,CAAA,CDpPC,iDCkPH,iCAEE,2BAAA,CAAA,CDpPC,iDCkPH,iCAEE,2BAAA,CAAA,CDpPC,iDCkPH,iCAEE,2BAAA,CAAA,CDpPC,iDCkPH,iCAEE,2BAAA,CAAA,CDpPC,iDCkPH,iCAEE,2BAAA,CAAA,CDpPC,iDCkPH,iCAEE,2BAAA,CAAA,CDxPC,0BCsPH,iCAEE,2BAAA,CAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n@use 'sass:map';\n\n@mixin grid-sizes() {\n\t$previous: 0;\n\n\t@each $size, $config in $sizes {\n\t\t$count: map.get($config, 'count');\n\t\t$marginTop: map.get($config, 'marginTop');\n\t\t$marginW: map.get($config, 'marginW');\n\n\t\t@if $size == 'max' {\n\t\t\t@media (min-width: #{$previous}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t} @else {\n\t\t\t@media (min-width: #{$previous}px) and (max-width: #{$size}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t}\n\t\t$previous: $size;\n\t}\n}\n",'$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \'../mixins/GridSizes\';\n\n.grid-container {\n\t@include grid-sizes using ($marginTop, $marginW) {\n\t\tpadding: 0px #{$marginW}px 256px #{$marginW}px;\n\t}\n}\n'],sourceRoot:""}]);const s=o},16958:(n,t,e)=>{e.r(t),e.d(t,{default:()=>Q});var r=e(20629),i=e(29837),a=e(81067),o=e(99588);function s(n,t,e,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(r,i)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){s(a,r,i,o,c,"next",n)}function c(n){s(a,r,i,o,c,"throw",n)}o(void 0)}))}}function u(n){return p.apply(this,arguments)}function p(){return p=c(regeneratorRuntime.mark((function n(t){var e,r,i=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:{},n.next=3,a.Z.getDirectoryContents("/systemtags/",Object.assign({},{data:'<?xml version="1.0"?>\n\t\t\t<d:propfind  xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:id />\n\t\t\t\t\t<oc:display-name />\n\t\t\t\t\t<oc:user-visible />\n\t\t\t\t\t<oc:user-assignable />\n\t\t\t\t\t<oc:can-assign />\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>',details:!0},e));case 3:return r=n.sent,n.abrupt("return",r.data.map((function(n){return(0,o.AX)(n)})));case 5:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}var d=e(22200),l=e(2161),f=e(3301);function m(n,t,e,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(r,i)}function g(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){m(a,r,i,o,s,"next",n)}function s(n){m(a,r,i,o,s,"throw",n)}o(void 0)}))}}function h(n){return v.apply(this,arguments)}function v(){return v=g(regeneratorRuntime.mark((function n(t){var e,r,i,s=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:{},e=Object.assign({method:"REPORT",data:'<?xml version="1.0"?>\n\t\t\t<oc:filter-files\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t'.concat(l.N,"\n\t\t\t\t</d:prop>\n\t\t\t\t<oc:filter-rules>\n\t\t\t\t\t<oc:systemtag>").concat(t,"</oc:systemtag>\n\t\t\t\t</oc:filter-rules>\n\t\t\t</oc:filter-files>"),details:!0},e),r="/files/".concat((0,d.getCurrentUser)().uid),n.next=5,a.Z.getDirectoryContents(r,e);case 5:return i=n.sent,n.abrupt("return",i.data.map((function(n){return(0,o.AX)(n)})).filter((function(n){return n.mime&&-1!==f.ZP.indexOf(n.mime)})).map((function(n){return Object.assign({},n,{filename:n.filename.replace(r,"")})})));case 7:case"end":return n.stop()}}),n)}))),v.apply(this,arguments)}var x=e(66533),A=e(4615),w=e(88318),b=e(25108);function C(n,t,e,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(r,i)}function y(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function P(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?y(Object(e),!0).forEach((function(t){O(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function O(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const R={name:"Tag",components:{FolderTagPreview:w.Z},inheritAttrs:!1,props:{item:{type:Object,required:!0}},data:function(){return{cancelRequest:null}},computed:P(P({},(0,r.Se)(["files","tags"])),{},{folderContent:function(){return this.tags[this.item.injected.id].files},fileList:function(){var n=this;return this.folderContent?this.folderContent.map((function(t){return n.files[t]})).filter((function(n){return!!n})).slice(0,4):[]}}),beforeDestroy:function(){this.cancelRequest&&this.cancelRequest("Navigated away")},created:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){var e,r,i,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,A.Z)(h),r=e.request,i=e.cancel,t.cancelRequest=i,n.prev=2,n.next=5,r(t.item.injected.id);case 5:a=n.sent,t.$store.dispatch("updateTag",{id:t.item.injected.id,files:a}),t.$store.dispatch("appendFiles",a),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),n.t0.response&&n.t0.response.status&&b.error("Failed to get folder content",t.item.injected.id,n.t0.response);case 13:return n.prev=13,t.cancelRequest=null,n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,10,13,16]])})),function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){C(a,r,i,o,s,"next",n)}function s(n){C(a,r,i,o,s,"throw",n)}o(void 0)}))})()}};var j=e(51900);const T=(0,j.Z)(R,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("FolderTagPreview",{attrs:{id:n.item.injected.id,icon:"icon-tag",name:n.item.injected.displayName,path:n.item.injected.displayName,"file-list":n.fileList}})}),[],!1,null,null,null).exports;var k=e(53932),E=e(82390),$=e(85324),D=e(25108);function q(n,t,e,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(r,i)}function S(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){q(a,r,i,o,s,"next",n)}function s(n){q(a,r,i,o,s,"throw",n)}o(void 0)}))}}function W(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function Z(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?W(Object(e),!0).forEach((function(t){N(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):W(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function N(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const L={name:"Tags",components:{VirtualGrid:i.Z,EmptyContent:x.Z,Navigation:E.Z},mixins:[$.Z],props:{rootTitle:{type:String,required:!0},path:{type:String,default:""},isRoot:{type:Boolean,default:!0}},data:function(){return{error:null,cancelRequest:null,loading:!1}},computed:Z(Z({},(0,r.Se)(["files","tags","tagsNames"])),{},{tagId:function(){return this.$store.getters.tagId(this.path)},tag:function(){return this.tags[this.tagId]},tagsList:function(){var n=this;return Object.values(this.tagsNames).map((function(t){return n.tags[t]}))},fileList:function(){var n=this;return this.tag&&this.tag.files.map((function(t){return n.files[t]})).filter((function(n){return!!n}))},contentList:function(){var n=this;return this.isRoot?this.tagsList.flatMap((function(n){return""===n.id?[]:[{id:"tag-".concat(n.id),injected:Z({},n),width:256,height:256,columnSpan:1,renderComponent:T}]})):this.fileList.map((function(t){return{id:"file-".concat(t.fileid),injected:Z(Z({},t),{},{list:n.fileList}),width:256,height:256,columnSpan:1,renderComponent:k.Z}}))},isEmpty:function(){return this.isRoot?0===Object.keys(this.tagsNames).length:0===this.fileList.length}}),watch:{path:function(){var n=this;return S(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.tagId){t.next=3;break}return t.next=3,n.fetchRootContent();case 3:n.isRoot||n.fetchContent();case 4:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){this.cancelRequest&&this.cancelRequest("Navigated away")},beforeMount:function(){var n=this;return S(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.tagId){t.next=3;break}return t.next=3,n.fetchRootContent();case 3:n.isRoot||n.fetchContent();case 4:case"end":return t.stop()}}),t)})))()},methods:{fetchRootContent:function(){var n=this;return S(regeneratorRuntime.mark((function t(){var e,r,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.cancelRequest&&n.cancelRequest("Changed folder"),OCA.Viewer.close(),n.tags[n.tagId]||(n.loading=!0),n.error=null,e=(0,A.Z)(u),r=e.request,i=e.cancel,n.cancelRequest=i,t.prev=6,t.next=9,r();case 9:a=t.sent,n.$store.dispatch("updateTags",a),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(6),D.error(t.t0),n.error=!0;case 17:return t.prev=17,n.loading=!1,n.cancelRequest=null,t.finish(17);case 21:case"end":return t.stop()}}),t,null,[[6,13,17,21]])})))()},fetchContent:function(){var n=this;return S(regeneratorRuntime.mark((function t(){var e,r,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.cancelRequest&&n.cancelRequest(),OCA.Viewer.close(),n.tags[n.tagId]||(n.loading=!0),n.error=null,e=(0,A.Z)(h),r=e.request,i=e.cancel,n.cancelRequest=i,t.prev=6,t.next=9,r(n.tagId);case 9:a=t.sent,n.$store.dispatch("updateTag",{id:n.tagId,files:a}),n.$store.dispatch("appendFiles",a),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),D.error(t.t0),n.error=!0;case 18:return t.prev=18,n.loading=!1,n.cancelRequest=null,t.finish(18);case 22:case"end":return t.stop()}}),t,null,[[6,14,18,22]])})))()}}};var I=e(93379),_=e.n(I),B=e(7795),G=e.n(B),H=e(90569),z=e.n(H),F=e(3565),U=e.n(F),V=e(19216),M=e.n(V),Y=e(44589),J=e.n(Y),X=e(26520),K={};K.styleTagTransform=J(),K.setAttributes=U(),K.insert=z().bind(null,"head"),K.domAPI=G(),K.insertStyleElement=M();_()(X.Z,K);X.Z&&X.Z.locals&&X.Z.locals;const Q=(0,j.Z)(L,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.error?e("EmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):n.loading?n._e():e("div",[e("Navigation",{key:"navigation",attrs:{basename:n.path,filename:"/"+n.path,"root-title":n.rootTitle}}),n._v(" "),n.isEmpty?e("EmptyContent",{key:"emptycontent",attrs:{"illustration-name":"empty"},scopedSlots:n._u([{key:"desc",fn:function(){return[n._v("\n\t\t\t"+n._s(n.t("photos","Photos with tags will show up here"))+"\n\t\t")]},proxy:!0}],null,!1,4132175345)},[n._v("\n\t\t"+n._s(n.t("photos","No tags yet"))+"\n\t\t")]):e("div",{staticClass:"grid-container"},[e("VirtualGrid",{ref:"virtualgrid",attrs:{items:n.contentList,"get-column-count":function(){return n.gridConfig.count},"get-grid-gap":function(){return n.gridConfig.gap}}})],1)],1)}),[],!1,null,"7e4412b9",null).exports}}]);
//# sourceMappingURL=photos-src_views_Tags_vue.js.map?v=72f35f73dd7b33543534