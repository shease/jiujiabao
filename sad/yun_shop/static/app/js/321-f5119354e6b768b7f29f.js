webpackJsonp([321,356],{3:function(e,t,i){var a,n;i(6),a=i(4);var o=i(7);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-3bb525bc",e.exports=a},4:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(8);t.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},e.exports=t.default},5:function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(e,t,i){var a=i(5);"string"==typeof a&&(a=[[e.id,a,""]]);i(2)(a,{});a.locals&&(e.exports=a.locals)},7:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.hide?e._e():i("mt-header",{attrs:{fixed:"",title:e.text}},[e.goback?e._e():i("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:e.goto},slot:"left"}),e._v(" "),e.tolink?[i("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:e.fun.getUrl(e.tolink)},slot:"right"},[e._v(e._s(e.totext))])]:e._e()],2)],1)},staticRenderFns:[]}},623:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(3),o=a(n);t.default={data:function(){return{dataget:[],title:[],msgarr:[],msg:"",sharedata:"",cservice:"",showbox:!1}},methods:{show:function(e){this.msg=this.msgarr[e],this.showbox=!0},getData:function(){var e=this;$http.get("plugin.help-center.api.share.index").then(function(t){1==t.result&&(e.sharedata=t.data.data,e.initShare())})},initShare:function(){var e=this;console.log(document.location.href);var t=document.location.href;$http.post("member.member.wxJsSdkConfig",{url:t}).then(function(t){1==t.result&&(e.initCservice(t.data.shop.cservice),e.share(t.data))},function(e){console.log(e)})},share:function(e){var t=this;wx.config(e.config),wx.ready(function(){var i=t.sharedata.title?t.sharedata.title:e.shop.name,a=document.location.href+"&share_tag=2";a=t.fun.isMid(a,e.info.uid);var n=t.sharedata.icon?t.sharedata.icon:e.shop.logo,o=t.sharedata.description?t.sharedata.description:e.shop.copyright;wx.showOptionMenu(),wx.onMenuShareTimeline({title:i,link:a,imgUrl:n,success:function(){Toast("分享成功")},cancel:function(){Toast("取消分享")}}),wx.onMenuShareAppMessage({title:i,desc:o,link:a,imgUrl:n,type:"link",dataUrl:"",success:function(){Toast("分享成功")},cancel:function(){Toast("取消分享")}})})},initCservice:function(e){return this.fun.isTextEmpty(e)?this.fun.isTextEmpty(this.$store.state.temp.mailInfo)||this.fun.isTextEmpty(this.$store.state.temp.mailInfo.cservice)?void 0:void(this.cservice=this.$store.state.temp.mailInfo.cservice):void(this.cservice=e)},hide:function(){this.showbox=!1}},created:function(){var e=this;$http.get("plugin.help-center.api.content.info").then(function(t){e.dataget=t.data.set_data,e.dataget.map(function(t){e.title.push(t.title),e.msgarr.push(t.content),e.msg=e.msgarr[0]})}),this.getData(),this.initCservice("")},components:{cTitle:o.default}},e.exports=t.default},1432:function(e,t,i){t=e.exports=i(1)(),t.push([e.id,"#helpcenter table td[data-v-3091cc8a]{border-style:solid!important}#helpcenter .fade-enter-active[data-v-3091cc8a],#helpcenter .fade-leave-active[data-v-3091cc8a]{transition:all .3s}#helpcenter .fade-enter[data-v-3091cc8a],#helpcenter .fade-leave-to[data-v-3091cc8a]{transform:translateX(100%)}#helpcenter .list[data-v-3091cc8a]{margin-top:10px;margin-top:.625rem}#helpcenter .list ul[data-v-3091cc8a]{background-color:#fff}#helpcenter .list ul li[data-v-3091cc8a]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;height:40px;height:2.5rem;line-height:40px;line-height:2.5rem;padding:0 14px;padding:0 .875rem;font-size:15px;border-bottom:1px solid #ebebeb;border-bottom:.0625rem solid #ebebeb}#helpcenter .list i[data-v-3091cc8a]{font-size:24px;font-size:1.5rem;color:#c9c9c9;line-height:40px;line-height:2.5rem}#helpcenter .sver[data-v-3091cc8a]{margin-top:10px;margin-top:.625rem;background-color:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;height:40px;height:2.5rem;line-height:40px;line-height:2.5rem;padding:0 14px;padding:0 .875rem;font-size:15px}#helpcenter .sver ul[data-v-3091cc8a]{display:-ms-flexbox;display:flex}#helpcenter .sver i[data-v-3091cc8a]:first-child{font-size:20px;font-size:1.25rem;margin-right:10px;margin-right:.625rem;color:#666}#helpcenter .sver i[data-v-3091cc8a]{font-size:24px;font-size:1.5rem;color:#c9c9c9;line-height:40px;line-height:2.5rem}#helpcenter .message[data-v-3091cc8a]{width:100%;position:absolute;background:#fff;top:0;min-height:100%;overflow:hidden;z-index:999}#helpcenter .message .msgbox[data-v-3091cc8a]{line-height:20px;line-height:1.25rem;box-sizing:border-box;padding-top:10px;padding-top:.625rem}#helpcenter .message header[data-v-3091cc8a]{height:40px;height:2.5rem;width:100%;line-height:40px;line-height:2.5rem;font-size:14px;font-weight:bolder;position:relative;border-bottom:1px solid #ebebeb;border-bottom:.0625rem solid #ebebeb}#helpcenter .message header .icon[data-v-3091cc8a]{position:absolute;display:block;float:left;width:10.4px;width:.65rem;height:10.4px;height:.65rem;border:1.6px solid rgba(0,0,0,.5);border:.1rem solid rgba(0,0,0,.5);transform:rotate(45deg);border-right:transparent;border-top:transparent;margin:15px;margin:.9375rem}",""])},1843:function(e,t,i){var a=i(1432);"string"==typeof a&&(a=[[e.id,a,""]]);i(2)(a,{});a.locals&&(e.exports=a.locals)},2519:function(e,t,i){var a,n;i(1843),a=i(623);var o=i(2874);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-3091cc8a",e.exports=a},2874:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"helpcenter"}},[i("c-title",{attrs:{hide:!1,text:"帮助中心"}}),e._v(" "),i("div",{staticStyle:{height:"40px"}}),e._v(" "),i("div",{staticClass:"list"},[i("ul",e._l(e.title,function(t,a){return i("li",{on:{click:function(t){e.show(a)}}},[i("span",[e._v(e._s(t))]),e._v(" "),i("i",{staticClass:"fa fa-angle-right"})])}))]),e._v(" "),i("transition",{attrs:{name:"fade"}},[e.showbox?i("div",{staticClass:"message"},[i("header",[i("span",{staticClass:"icon",on:{click:e.hide}}),e._v("帮助详情")]),e._v(" "),i("div",{staticClass:"msgbox",domProps:{innerHTML:e._s(e.msg)}})]):e._e()]),e._v(" "),i("a",{attrs:{href:e.cservice}},[e._m(0)])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sver"},[i("ul",[i("li",[i("i",{staticClass:"iconfont icon-kefu"})]),e._v(" "),i("li",[e._v("人工客服")])]),e._v(" "),i("i",{staticClass:"fa fa-angle-right"})])}]}}});