"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_AlbumContent_vue"],{63872:(t,o,e)=>{e.d(o,{Z:()=>s});var l=e(87537),a=e.n(l),n=e(23645),i=e.n(n)()(a());i.push([t.id,".album__title[data-v-771b9d90]{width:100%}.album__name[data-v-771b9d90]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.album__location[data-v-771b9d90]{margin-left:-4px;display:flex;color:var(--color-text-lighter)}.photos-navigation[data-v-771b9d90]{position:relative}.photos-navigation--uploading[data-v-771b9d90]{margin-bottom:30px}[data-v-771b9d90] .upload-picker .upload-picker__progress{position:absolute;bottom:-30px;left:64px;margin:0}[data-v-771b9d90] .upload-picker .upload-picker__cancel{position:absolute;bottom:-24px;right:50px}","",{version:3,sources:["webpack://./src/views/AlbumContent.vue"],names:[],mappings:"AAGC,+BACC,UAAA,CAGD,8BACC,eAAA,CACA,kBAAA,CACA,sBAAA,CAGD,kCACC,gBAAA,CACA,YAAA,CACA,+BAAA,CAIF,oCACC,iBAAA,CAEA,+CACC,kBAAA,CAKD,0DACC,iBAAA,CACA,YAAA,CACA,SAAA,CACA,QAAA,CAED,wDACC,iBAAA,CACA,YAAA,CACA,UAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.album {\n\t&__title {\n\t\twidth: 100%;\n\t}\n\n\t&__name {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&__location {\n\t\tmargin-left: -4px;\n\t\tdisplay: flex;\n\t\tcolor: var(--color-text-lighter);\n\t}\n}\n\n.photos-navigation {\n\tposition: relative;\n\t// Add space at the bottom for the progress bar.\n\t&--uploading {\n\t\tmargin-bottom: 30px;\n\t}\n}\n\n:deep(.upload-picker) {\n\t.upload-picker__progress {\n\t\tposition: absolute;\n\t\tbottom: -30px;\n\t\tleft: 64px;\n\t\tmargin: 0;\n\t}\n\t.upload-picker__cancel {\n\t\tposition: absolute;\n\t\tbottom: -24px;\n\t\tright: 50px;\n\t}\n}\n'],sourceRoot:""}]);const s=i},69014:(t,o,e)=>{e.d(o,{Z:()=>s});var l=e(20629),a=e(4777),n=e(15961);const i={name:"ActionFavorite",components:{Star:a.default,NcActionButton:n.Js},props:{selectedFileIds:{type:Array,required:!0}},computed:{...(0,l.Se)(["files"]),shouldFavoriteSelection(){return this.selectedFileIds.some((t=>0===this.files[t].favorite))}},methods:{...(0,l.nv)(["toggleFavoriteForFiles"]),async favoriteSelection(){await this.toggleFavoriteForFiles({fileIds:this.selectedFileIds,favoriteState:1})},async unFavoriteSelection(){await this.toggleFavoriteForFiles({fileIds:this.selectedFileIds,favoriteState:0})}}};const s=(0,e(51900).Z)(i,(function(){var t=this,o=t._self._c;return t.shouldFavoriteSelection?o("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Mark selection as favorite")},on:{click:t.favoriteSelection}},[t._v("\n\t"+t._s(t.t("photos","Add selection to favorites"))+"\n\t"),o("Star",{attrs:{slot:"icon"},slot:"icon"})],1):o("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Remove selection from favorites")},on:{click:t.unFavoriteSelection}},[t._v("\n\t"+t._s(t.t("photos","Remove selection from favorites"))+"\n\t"),o("Star",{attrs:{slot:"icon"},slot:"icon"})],1)}),[],!1,null,null,null).exports},46121:(o,e,l)=>{l.r(e),l.d(e,{default:()=>O});var a=l(20629),n=l(41572),i=l(77958),s=l(15961),r=l(52587),c=l(31352),u=l(20296),d=l.n(u),m=l(82675),h=l(57612),b=l(93754),p=l(50246),A=l(73229),v=l(61149),C=l(44244),g=l(83422),f=l(66951),_=l(60213),F=l(81090),w=l(69014),N=l(54285),k=l(4395),y=l(71156),S=l(54159),x=l(10849),M=l(3301),Z=l(59537);const B={name:"AlbumContent",components:{ActionFavorite:w.Z,AlbumForm:N.Z,Close:m.default,CollaboratorsSelectionForm:k.Z,CollectionContent:y.Z,Delete:h.Z,FilesPicker:S.Z,HeaderNavigation:x.Z,ImagePlus:b.Z,MapMarker:p.Z,NcActionButton:s.Js,NcActions:s.O3,NcActionSeparator:s.rr,NcButton:s.P2,NcEmptyContent:s.SL,NcLoadingIcon:s.lb,NcModal:s.Jc,Pencil:A.default,Plus:v.Z,ShareVariant:g.Z,UploadPicker:r.e},mixins:[_.Z,f.Z,s.tq,F.Z],props:{albumName:{type:String,default:"/"}},data(){return{allowedMimes:M.ZP,showAddPhotosModal:!1,showManageCollaboratorView:!1,showEditAlbumForm:!1,loadingAddCollaborators:!1,uploader:(0,r.oM)(),newFileMenuEntry:{id:"album-add",displayName:t("photos","Add photos to this album"),templateName:"",if:t=>t.route===this.$route.name,iconSvgInline:C,handler:()=>{this.showAddPhotosModal=!0}}}},computed:{album(){return this.$store.getters.getAlbum(this.albumName)},albumFileIds(){return this.$store.getters.getAlbumFiles(this.albumName)},sharingEnabled:()=>void 0!==OC.Share,uploadContext(){var t;return{...this.album,route:this.$route.name,root:"dav/photos/".concat(null===(t=(0,i.ts)())||void 0===t?void 0:t.uid,"/albums")}},albumFileName(){return this.$store.getters.getAlbumName(this.albumName)}},async mounted(){this.fetchAlbum(),this.fetchAlbumContent(),(0,n.cd)(this.newFileMenuEntry)},destroyed(){(0,n.oE)(this.newFileMenuEntry)},methods:{...(0,a.nv)(["addFilesToCollection","removeFilesFromCollection","deleteCollection","updateCollection"]),async fetchAlbum(){await this.fetchCollection(this.albumFileName,["<nc:location />","<nc:dateRange />","<nc:collaborators />"])},async fetchAlbumContent(){await this.fetchCollectionFiles(this.albumFileName)},redirectToNewName(t){let{album:o}=t;this.showEditAlbumForm=!1,this.album.basename!==o.basename&&this.$router.push("/albums/".concat(o.basename))},async handleFilesPicked(t){this.showAddPhotosModal=!1,await this.addFilesToCollection({collectionFileName:this.album.filename,fileIdsToAdd:t}),await this.fetchAlbumContent()},async handleRemoveFilesFromAlbum(t){this.$refs.collectionContent.onUncheckFiles(t),await this.removeFilesFromCollection({collectionFileName:this.album.filename,fileIdsToRemove:t})},async handleDeleteAlbum(){await this.deleteCollection({collectionFileName:this.album.filename}),this.$router.push("/albums")},async handleSetCollaborators(t){try{this.loadingAddCollaborators=!0,this.showManageCollaboratorView=!1,await this.updateCollection({collectionFileName:this.album.filename,properties:{collaborators:t}})}catch(t){Z.Z.error("Error while setting album collaborators",{error:t})}finally{this.loadingAddCollaborators=!1}},onUpload:d()((function(){this.fetchAlbumContent()}),500),t:c.Iu}};var I=l(93379),P=l.n(I),E=l(7795),T=l.n(E),D=l(90569),W=l.n(D),U=l(3565),$=l.n(U),R=l(19216),V=l.n(R),q=l(44589),G=l.n(q),J=l(63872),L={};L.styleTagTransform=G(),L.setAttributes=$(),L.insert=W().bind(null,"head"),L.domAPI=T(),L.insertStyleElement=V();P()(J.Z,L);J.Z&&J.Z.locals&&J.Z.locals;const O=(0,l(51900).Z)(B,(function(){var t=this,o=t._self._c;return o("div",[o("CollectionContent",{ref:"collectionContent",attrs:{collection:t.album,"collection-file-ids":t.albumFileIds,loading:t.loadingCollection||t.loadingCollectionFiles,error:t.errorFetchingCollection||t.errorFetchingCollectionFiles},scopedSlots:t._u([{key:"header",fn:function(e){var l;let{selectedFileIds:a,resetSelection:n}=e;return o("HeaderNavigation",{key:"navigation",class:{"photos-navigation--uploading":(null===(l=t.uploader.queue)||void 0===l?void 0:l.length)>0},attrs:{loading:t.loadingCollectionFiles,params:{albumName:t.albumName},path:"/"+t.albumName,title:t.albumName},on:{refresh:t.fetchAlbumContent}},[void 0!==t.album&&""!==t.album.location?o("div",{staticClass:"album__location",attrs:{slot:"subtitle"},slot:"subtitle"},[o("MapMarker"),t._v(t._s(t.album.location)+"\n\t\t\t")],1):t._e(),t._v(" "),o("template",{slot:"default"},[a.length>0?o("NcButton",{attrs:{"aria-label":t.t("photos","Unselect all")},on:{click:n},scopedSlots:t._u([{key:"icon",fn:function(){return[o("Close")]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Unselect all"))+"\n\t\t\t\t")]):t._e()],1),t._v(" "),void 0!==t.album?o("template",{slot:"right"},[0!==t.album.nbItems?o("UploadPicker",{attrs:{accept:t.allowedMimes,context:t.uploadContext,destination:t.album.basename,root:t.uploadContext.root,multiple:!0},on:{uploaded:t.onUpload}}):t._e(),t._v(" "),t.sharingEnabled?o("NcButton",{attrs:{type:"tertiary","aria-label":t.t("photos","Manage collaborators for this album")},on:{click:function(o){t.showManageCollaboratorView=!0}}},[o("ShareVariant",{attrs:{slot:"icon"},slot:"icon"})],1):t._e(),t._v(" "),o("NcActions",{attrs:{"aria-label":t.t("photos","Open actions menu")}},[o("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Edit album details")},on:{click:function(o){t.showEditAlbumForm=!0}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Edit album details"))+"\n\t\t\t\t\t\t"),o("Pencil",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),o("NcActionButton",{attrs:{"close-after-click":!0},on:{click:t.handleDeleteAlbum}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Delete album"))+"\n\t\t\t\t\t\t"),o("Delete",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),a.length>0?[o("NcActionSeparator"),t._v(" "),o("ActionFavorite",{attrs:{"selected-file-ids":a}}),t._v(" "),o("NcActionButton",{attrs:{"close-after-click":!0},on:{click:function(o){return t.handleRemoveFilesFromAlbum(a)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.t("photos","Remove selection from album"))+"\n\t\t\t\t\t\t\t"),o("Close",{attrs:{slot:"icon"},slot:"icon"})],1)]:t._e()],2)],1):t._e()],2)}}],null,!1,749312566)},[t._v(" "),void 0===t.album||0!==t.album.nbItems||t.loadingCollectionFiles||t.loadingCollection?t._e():o("NcEmptyContent",{staticClass:"album__empty",attrs:{slot:"empty-content",title:t.t("photos","This album does not have any photos or videos yet!")},slot:"empty-content"},[o("ImagePlus",{attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("NcButton",{staticClass:"album__empty__button",attrs:{slot:"action",type:"primary","aria-label":t.t("photos","Add photos to this album")},on:{click:function(o){t.showAddPhotosModal=!0}},slot:"action"},[o("Plus",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n\t\t\t\t"+t._s(t.t("photos","Add"))+"\n\t\t\t")],1)],1)],1),t._v(" "),t.showAddPhotosModal?o("NcModal",{attrs:{size:"large",title:t.t("photos","Add photos to {albumName}",{albumName:t.albumName})},on:{close:function(o){t.showAddPhotosModal=!1}}},[void 0!==t.album?o("FilesPicker",{attrs:{destination:t.album.basename,"blacklist-ids":t.albumFileIds},on:{"files-picked":t.handleFilesPicked}}):t._e()],1):t._e(),t._v(" "),t.showManageCollaboratorView&&void 0!==t.album?o("NcModal",{attrs:{title:t.t("photos","Manage collaborators")},on:{close:function(o){t.showManageCollaboratorView=!1}}},[o("CollaboratorsSelectionForm",{attrs:{"album-name":t.album.basename,collaborators:t.album.collaborators},scopedSlots:t._u([{key:"default",fn:function(e){let{collaborators:l}=e;return[o("NcButton",{attrs:{"aria-label":t.t("photos","Save collaborators for this album."),type:"primary",disabled:t.loadingAddCollaborators},on:{click:function(o){return t.handleSetCollaborators(l)}},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loadingAddCollaborators?o("NcLoadingIcon"):t._e()]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Save"))+"\n\t\t\t\t")])]}}],null,!1,4058924180)})],1):t._e(),t._v(" "),t.showEditAlbumForm?o("NcModal",{attrs:{title:t.t("photos","Edit album details")},on:{close:function(o){t.showEditAlbumForm=!1}}},[o("AlbumForm",{attrs:{album:t.album},on:{done:t.redirectToNewName}})],1):t._e()],1)}),[],!1,null,"771b9d90",null).exports}}]);
//# sourceMappingURL=photos-src_views_AlbumContent_vue.js.map?v=705f517645085f95da0a