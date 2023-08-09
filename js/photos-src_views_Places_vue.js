"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Places_vue"],{40570:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(87537),s=o.n(n),l=o(23645),a=o.n(l)()(s());a.push([t.id,".places-list[data-v-084ec013]{display:flex;flex-direction:column}.places-list .place__name[data-v-084ec013]{font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/views/Places.vue"],names:[],mappings:"AAEA,8BACC,YAAA,CACA,qBAAA,CAEA,2CACC,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.places-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t.place__name {\n\t\tfont-weight: normal;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n}\n'],sourceRoot:""}]);const i=a},45958:(t,e,o)=>{o.r(e),o.d(e,{default:()=>x});var n=o(91522),s=o(79753),l=o(15961),a=o(77958),i=o(31352),c=o(49568),r=o(37378),p=o(47210),m=o(10849);const u={name:"Places",components:{FolderMultipleImage:n.Z,NcEmptyContent:l.SL,CollectionsList:r.Z,CollectionCover:p.Z,HeaderNavigation:m.Z},filters:{coverUrl:t=>-1===t?"":(0,s.generateUrl)("/apps/photos/api/v1/preview/".concat(t,"?x=",512,"&y=",512))},mixins:[c.Z],computed:{places(){return this.$store.getters.places}},async beforeMount(){this.fetchPlaces()},methods:{fetchPlaces(){var t;this.fetchCollections("/photos/".concat(null===(t=(0,a.ts)())||void 0===t?void 0:t.uid,"/places"))},t:i.Iu,n:i.uN}};var d=o(93379),h=o.n(d),g=o(7795),v=o.n(g),A=o(90569),C=o.n(A),f=o(3565),_=o.n(f),w=o(19216),y=o.n(w),b=o(44589),T=o.n(b),k=o(40570),Z={};Z.styleTagTransform=T(),Z.setAttributes=_(),Z.insert=C().bind(null,"head"),Z.domAPI=v(),Z.insertStyleElement=y();h()(k.Z,Z);k.Z&&k.Z.locals&&k.Z.locals;const x=(0,o(51900).Z)(u,(function(){var t=this,e=t._self._c;return e("div",[e("CollectionsList",{staticClass:"places-list",attrs:{collections:t.places,loading:t.loadingCollections,error:t.errorFetchingCollections},scopedSlots:t._u([{key:"default",fn:function(o){let{collection:n}=o;return e("CollectionCover",{key:n.basename,attrs:{link:"/places/".concat(n.basename),"alt-img":t.t("photos","Cover photo for place {placeName}",{placeName:n.basename}),"cover-url":t._f("coverUrl")(n.lastPhoto)}},[e("h2",{staticClass:"place__name"},[t._v("\n\t\t\t\t"+t._s(n.basename)+"\n\t\t\t")]),t._v(" "),e("div",{staticClass:"place__details",attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("\n\t\t\t\t"+t._s(t.n("photos","%n item","%n photos and videos",n.nbItems))+"\n\t\t\t")])])}}])},[e("HeaderNavigation",{key:"navigation",attrs:{slot:"header",loading:t.loadingCollections,title:t.t("photos","Places"),"root-title":t.t("photos","Places")},on:{refresh:t.fetchPlaces},slot:"header"}),t._v(" "),t._v(" "),e("NcEmptyContent",{attrs:{slot:"empty-collections-list",title:t.t("photos","There is no place yet!")},slot:"empty-collections-list"},[e("FolderMultipleImage",{attrs:{slot:"icon"},slot:"icon"})],1)],1)],1)}),[],!1,null,"084ec013",null).exports}}]);
//# sourceMappingURL=photos-src_views_Places_vue.js.map?v=74f87e46b48e0b1fa7da