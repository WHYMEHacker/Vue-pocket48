(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ccbaf96c"],{5006:function(t,o,s){"use strict";s.r(o);var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"room"},[t.token?s("div",{staticClass:"room-list"},t._l(t.roomList,function(o){return s("div",{key:o.roomId,staticClass:"room-item my-card",on:{click:function(s){return t.getInfo(o.roomId,o.bgPath)}}},[s("img",{staticClass:"room-avatar",attrs:{src:t._f("picPathFormat")(o.roomAvatar),alt:""}}),s("div",{staticClass:"room-info"},[s("p",[s("span",{staticClass:"room-owner",domProps:{innerHTML:t._s(o.creatorName)}}),s("span",{staticClass:"room-name",domProps:{innerHTML:t._s(o.roomName)}})]),s("p",{staticClass:"room-preview",domProps:{innerHTML:t._s(o.roomTopic)}})])])}),0):s("div",{staticClass:"my-card"},[t._v("您还没有登录")])])},r=[],n=s("cebc"),a=s("2f62"),i={name:"roomlist",data:function(){return{msgPage:0,token:this.$store.getters.getToken,friends:[],member:[]}},methods:{getInfo:function(t,o){this.$router.push({name:"roommsg",params:{id:t,bgPath:o}})}},mounted:function(){this.friends=JSON.parse(localStorage.getItem("userinfo")).friends,this.token=this.$store.getters.getToken,this.$store.dispatch("getRoomList",{token:this.token,friends:this.friends})},computed:Object(n["a"])({},Object(a["c"])(["roomList"]))},c=i,m=(s("8d42"),s("2877")),d=Object(m["a"])(c,e,r,!1,null,"22e5f14c",null);o["default"]=d.exports},"50b3":function(t,o,s){},"8d42":function(t,o,s){"use strict";var e=s("50b3"),r=s.n(e);r.a}}]);
//# sourceMappingURL=chunk-ccbaf96c.c005a408.js.map