(function(e){function t(t){for(var i,o,r=t[0],s=t[1],c=t[2],m=0,u=[];m<r.length;m++)o=r[m],n[o]&&u.push(n[o][0]),n[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(u.length)u.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],i=!0,r=1;r<a.length;r++){var s=a[r];0!==n[s]&&(i=!1)}i&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},l=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=s;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),n=a("bb71");a("da64");i["a"].use(n["a"],{iconfont:"md"});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-toolbar",{attrs:{app:"",color:"primary"}},[a("v-toolbar-title",[a("span",{staticClass:"white--text"},[e._v("Editable List")])]),a("v-spacer"),a("v-btn",{attrs:{flat:"",href:"https://github.com/ngustavo/editable-list/",target:"_blank"}},[a("span",{staticClass:"white--text"},[e._v("GitHub")])])],1),a("v-content",[a("List")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ma-4"},[a("v-toolbar",{staticClass:"elevation-1",attrs:{color:"white"}},[a("v-toolbar-title",[e._v("Users")]),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[e._v("Add User")]),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"e-mail"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Phone"},model:{value:e.editedItem.phone,callback:function(t){e.$set(e.editedItem,"phone",t)},expression:"editedItem.phone"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"City"},model:{value:e.editedItem.city,callback:function(t){e.$set(e.editedItem,"city",t)},expression:"editedItem.city"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error",flat:""},on:{click:e.closeDialog}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"info",flat:""},on:{click:e.saveDialog}},[e._v("Save")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Wait!")]),a("v-card-text",[e._v("\n          Are you sure you want to delete this user?\n        ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error",flat:""},on:{click:function(t){e.confirm=!1}}},[e._v("\n            Cancel\n          ")]),a("v-btn",{attrs:{color:"info",flat:""},on:{click:function(t){e.confirm=!1,e.users.splice(e.deleteIndex,1)}}},[e._v("\n            Delete\n          ")])],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-2",attrs:{headers:e.headers,items:e.users},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.name))]),a("td",[e._v(e._s(t.item.email))]),a("td",[e._v(e._s(t.item.phone))]),a("td",[e._v(e._s(t.item.city))]),a("td",[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){e.editItem(t.item)}}},[e._v("\n          edit\n        ")]),a("v-icon",{attrs:{small:""},on:{click:function(a){e.deleteItem(t.item)}}},[e._v("\n          delete\n        ")])],1)]}}])},[a("template",{slot:"no-data"},[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])],1)],2)],1)},s=[],c=(a("f751"),[{name:"Aimee Park",email:"aimeepark@jetsilk.com",phone:"+1 (959) 497-2286",city:"Calvary"},{name:"Marie Vaughan",email:"marievaughan@jetsilk.com",phone:"+1 (917) 520-2131",city:"Bartonsville"},{name:"Charmaine Dotson",email:"charmainedotson@jetsilk.com",phone:"+1 (867) 534-3639",city:"Chautauqua"},{name:"Beryl Wade",email:"berylwade@jetsilk.com",phone:"+1 (926) 429-2132",city:"Allentown"},{name:"Christi Quinn",email:"christiquinn@jetsilk.com",phone:"+1 (894) 532-3089",city:"Siglerville"},{name:"Carroll Freeman",email:"carrollfreeman@jetsilk.com",phone:"+1 (885) 453-2819",city:"Selma"},{name:"Georgia Allison",email:"georgiaallison@jetsilk.com",phone:"+1 (925) 464-3189",city:"Nord"},{name:"Knight Robbins",email:"knightrobbins@jetsilk.com",phone:"+1 (834) 425-3982",city:"Kersey"},{name:"Williams Bright",email:"williamsbright@jetsilk.com",phone:"+1 (854) 469-3393",city:"Wakulla"},{name:"Alvarez Irwin",email:"alvarezirwin@jetsilk.com",phone:"+1 (852) 515-2476",city:"Whitmer"}]),d=[{text:"Name",value:"name"},{text:"e-mail",value:"email"},{text:"Phone",value:"phone"},{text:"City",value:"address.city"},{text:"Actions",value:"name",sortable:!1}],m={data:function(){return{dialog:!1,confirm:!1,headers:[],users:[],deleteIndex:-1,editedIndex:-1,editedItem:{name:"",email:"",phone:"",city:""},defaultItem:{name:"",email:"",phone:"",city:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Add User":"Edit User"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.headers=d,this.users=c},editItem:function(e){this.editedIndex=this.users.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.deleteIndex=this.users.indexOf(e),this.confirm=!0},closeDialog:function(){var e=this;this.dialog=!1,setTimeout(function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1},300)},saveDialog:function(){this.editedIndex>-1?Object.assign(this.users[this.editedIndex],this.editedItem):this.users.push(this.editedItem),this.closeDialog()}}},u=m,v=a("2877"),f=a("6544"),p=a.n(f),h=a("8336"),b=a("b0af"),x=a("99d9"),y=a("12b2"),g=a("a523"),_=a("8fea"),I=a("169a"),k=a("0e8f"),w=a("132d"),C=a("a722"),j=a("9910"),V=a("2677"),O=a("71d9"),T=a("2a7f"),A=Object(v["a"])(u,r,s,!1,null,null,null);A.options.__file="List.vue";var S=A.exports;p()(A,{VBtn:h["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:y["a"],VContainer:g["a"],VDataTable:_["a"],VDialog:I["a"],VFlex:k["a"],VIcon:w["a"],VLayout:C["a"],VSpacer:j["a"],VTextField:V["a"],VToolbar:O["a"],VToolbarTitle:T["a"]});var D={name:"App",components:{List:S}},P=D,$=a("7496"),z=a("549c"),B=Object(v["a"])(P,l,o,!1,null,null,null);B.options.__file="App.vue";var L=B.exports;p()(B,{VApp:$["a"],VBtn:h["a"],VContent:z["a"],VSpacer:j["a"],VToolbar:O["a"],VToolbarTitle:T["a"]}),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(L)}}).$mount("#app")}});
//# sourceMappingURL=app.82f18a13.js.map