webpackJsonp([267,356],{3:function(t,e,i){var o,n;i(6),o=i(4);var a=i(7);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-3bb525bc",t.exports=o},4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i(8);e.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=e.default},5:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,e,i){var o=i(5);"string"==typeof o&&(o=[[t.id,o,""]]);i(2)(o,{});o.locals&&(t.exports=o.locals)},7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.hide?t._e():i("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():i("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[i("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},565:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(957),a=o(n);e.default=a.default,t.exports=e.default},957:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=(i(8),i(9),i(3)),a=o(n);e.default={data:function(){return{form:{mobile:"",mobileErr:"",password:"",passwordErr:"",uuid:0,mid:0},mydata:"",isApp:!1,apptoken:"",wetach_login:!1,appShow:!1}},components:{cTitle:a.default},methods:{login:function(t){var e=this,i=this;$http.post("member.login.index",t,"").then(function(t){1==t.result?(window.localStorage.myuserinfo=t.data,console.info("--会员信息--"),console.info(t.msg),i.$store.commit("setLoginStatus",t.data.status),i.fun.isApp()&&YDB.SetUserRelationForPush(t.msg.member_id),t.data.url?window.location.href=t.data.url:i.$router.push(e.fun.getUrl("home"))):i.$store.commit("alerts",t.msg)})},mobile_login:function(){return this.fun.isTextEmpty(this.form.mobile)?void this.$dialog.toast({mes:"请填写手机号",timeout:1500}):this.fun.isTextEmpty(this.form.password)?void this.$dialog.toast({mes:"请填写密码",timeout:1500}):(this.form.uuid=0,this.form.mid=null==this.fun.isTextEmpty(window.localStorage.getItem("mid"))?0:window.localStorage.getItem("mid"),console.log("我是登入进入后台====="+this.fun),console.log(this.form.mid),void this.login(this.form))},register:function(){this.$router.push(this.fun.getUrl("register"))},weixin:function(){var t=this,e=t.fun.getKeyByI(),i=t.fun.getKeyByMid(),o=t.fun.getTyep(),n=t.fun.getSiteRoot()+"/addons/yun_shop/api.php?i="+e+"&mid="+i+"&type="+o+"&route=member.login.index&uuid="+YDB_UUID;YDB.WXLogin(0,n)},init_login:function(){var t=this;t.fun.isApp()&&YDB_isWXApp&&(t.apptoken?t.login({apptoken:this.apptoken}):$http.get("member.login.index",{show_wechat_login:!0}).then(function(e){1==e.result&&(t.wetach_login=e.data.wetach_login)}))},gotoPwd:function(){this.$router.push(this.fun.getUrl("findpwd"))},isAppLogin:function(){var t=this;$http.post("member.login.phoneSetGet",{}).then(function(e){if(console.log(e),1==e.result)if(1==e.data.phone_oauth)t.appShow=!0;else{if(0!=e.data.phone_oauth)return;t.appShow=!1}}).catch(function(t){console.log(t)})}},activated:function(){var t=this.fun.getTyep();console.log(t),"7"==t?this.isAppLogin():this.appShow=!0,this.apptoken=this.$route.query.apptoken,this.init_login()}},t.exports=e.default},1599:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,"#login[data-v-72c018e8]{margin-top:50px;margin-top:3.125rem;width:100%}#login h1[data-v-72c018e8]{color:#42b983}#login .mint-button--large[data-v-72c018e8]{margin-top:10px;margin-top:.625rem}#login #bts[data-v-72c018e8]{margin:auto 5px;margin:auto .3125rem}#login .forget[data-v-72c018e8]{line-height:40px;line-height:2.5rem;float:right}#login .forget a[data-v-72c018e8]{color:#999}#login .vip_main[data-v-72c018e8]{background:#fff;margin-top:50px;margin-top:3.125rem}#login .vip_main .title[data-v-72c018e8]{padding:10px;padding:.625rem;font-size:12px;border-bottom:1px solid #eee;border-bottom:.0625rem solid #eee;text-align:center}#login .vip_main .weixin[data-v-72c018e8]{padding:15px 10px;padding:.9375rem .625rem;overflow:hidden;font-size:12px;color:#999}#login .vip_main .weixin .ico1[data-v-72c018e8],#login .vip_main .weixin .ico2[data-v-72c018e8]{width:15%;float:left}#login .vip_main .weixin .ico1 i[data-v-72c018e8]{background:#32cd32}#login .vip_main .weixin .ico2 i[data-v-72c018e8]{background:#fece00}#login .vip_main .weixin .text[data-v-72c018e8]{float:left;width:85%}#login .vip_main .weixin .text .t1[data-v-72c018e8]{font-size:16px;color:#333;margin-bottom:5px;margin-bottom:.3125rem;text-align:left}#login .vip_main .weixin .text .t2[data-v-72c018e8]{text-align:justify}#login .vip_main .weixin i[data-v-72c018e8]{background:#32cd32;height:36px;height:2.25rem;width:36px;width:2.25rem;border-radius:1.125rem;color:#fff;text-align:center;line-height:38px;line-height:2.375rem;font-size:18px}#login .vip_main .vip1[data-v-72c018e8]{border-bottom:1px solid #eee;border-bottom:.0625rem solid #eee}",""])},2011:function(t,e,i){var o=i(1599);"string"==typeof o&&(o=[[t.id,o,""]]);i(2)(o,{});o.locals&&(t.exports=o.locals)},2461:function(t,e,i){var o,n;i(2011),o=i(565);var a=i(3037);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-72c018e8",t.exports=o},3037:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"login"}},[i("c-title",{attrs:{hide:!1,text:"用户登录"}}),t._v(" "),i("div",[t.appShow?i("div",[i("yd-cell-group",[i("yd-cell-item",[i("span",{attrs:{slot:"left"},slot:"left"},[t._v("手机号：")]),t._v(" "),i("yd-input",{attrs:{slot:"right",required:"",max:"20",placeholder:"请输入手机号"},slot:"right",model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),t._v(" "),i("yd-cell-item",[i("span",{attrs:{slot:"left"},slot:"left"},[t._v("密码：")]),t._v(" "),i("yd-input",{attrs:{slot:"right",type:"password",placeholder:"请输入密码"},slot:"right",model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),t._v(" "),i("yd-button-group",[i("yd-button",{attrs:{size:"large",type:"danger"},nativeOn:{click:function(e){return t.mobile_login(e)}}},[t._v("登录")]),t._v(" "),i("yd-button",{attrs:{size:"large",type:"primary"},nativeOn:{click:function(e){return t.register(e)}}},[t._v("注册")]),t._v(" "),i("p",{staticClass:"forget",on:{click:t.gotoPwd}},[t._v("忘记密码")])],1)],1):t._e(),t._v(" "),1==t.wetach_login?i("div",{staticClass:"vip_main"},[i("div",{staticClass:"title"},[t._v("一键登录")]),t._v(" "),i("div",{staticClass:"weixin vip1",on:{click:t.weixin}},[t._m(0),t._v(" "),t._m(1)])]):t._e()])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ico1"},[i("i",{staticClass:"fa fa-qrcode"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text"},[i("div",{staticClass:"t1"},[t._v("微信登录")]),t._v(" "),i("div",{staticClass:"t2"},[t._v("微信快捷通道一键登录商城")])])}]}}});