webpackJsonp([212,356],{3:function(t,e,o){var a,i;o(6),a=o(4);var n=o(7);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,i._scopeId="data-v-3bb525bc",t.exports=a},4:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o(8);e.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=e.default},5:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,e,o){var a=o(5);"string"==typeof a&&(a=[[t.id,a,""]]);o(2)(a,{});a.locals&&(t.exports=a.locals)},7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.hide?t._e():o("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():o("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[o("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},673:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(1047),n=a(i);e.default=n.default,t.exports=e.default},1047:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(13),n=a(i),r=o(3),s=a(r),d=o(9);e.default={data:function(){return{showInfo:!0,shopName:"",userName:"",signName:"",showBox:"main",changeType:"",changeVal:"",imageUrl:"",imageUrl1:"",imageUrl2:"",bgImg:"",temp:!1,bannerImg:"",postUrl:"",shopModle:{shop_background:"",signature:""}}},activated:function(){this.temp=this.$route.params.showSelectGood,this.showInfo=!0,this.init()},methods:{init:function(){var t=this;$http.get("plugin.micro.frontend.controllers.MicroShop.set-shop").then(function(e){console.log("+++++++++++个人信息++++++++++++++"),console.log(e);var o=e.data.micro_shop;1==e.result?(t.shopName=o.shop_name,t.username=o.has_one_member.nickname,t.signName=o.signature,t.imageUrl1=o.shop_avatar,t.imageUrl2=o.has_one_member.avatar,t.postUrl=o.api,t.bannerImg=e.data.select_goods_thumb,t.bgImg=o.shop_background,t.action=e.data.api+"&type="+t.fun.getTyep(),t.shopModle.shop_background=e.data.micro_shop.shop_background,t.shopModle.signature=e.data.micro_shop.signature):console.log(e)},function(t){console.log(t)})},changeShowBox:function(t){this.changeType=t,"店招背景"==t?this.showBox="upLoadBox":"个性签名"==t||"微店名称"==t||"店主昵称"==t?this.showBox="inputBox":this.showBox="main"},changeActive:function(t,e){if(1==e){var o=this;if(this.fun.isTextEmpty(this.shopModle.shop_background))return void(0,d.Toast)("微店背景不能为空");if(this.fun.isTextEmpty(this.shopModle.signature))return void(0,d.Toast)("微店个性签名不能为空");var a={shop_set:(0,n.default)(this.shopModle)};$http.get("plugin.micro.frontend.controllers.MicroShop.set-shop.edit",a,"设置中").then(function(t){1==t.result?o.$router.go(-1):console.log(t)},function(t){console.log(t)})}else this.showInfo=t},closePopInput:function(){this.showBox="main",this.changeVal=""},goBack:function(){this.showBox="main"},goBack1:function(){this.$router.push(this.fun.getUrl("microShop_ShopKeeperCenter"))},handleAvatarSuccess:function(t,e){console.log("jfc",t),this.imageUrl=URL.createObjectURL(e.raw),"微店头像"==this.changeType?this.imageUrl1=t.data.img:"店招背景"==this.changeType&&(this.bgImg=t.data.img,this.shopModle.shop_background=this.bgImg)},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type,o=t.size/1024/1024<2;return e||this.$message.error("上传图片只能是 JPG 或PNG格式!"),o||this.$message.error("上传图片大小不能超过 2MB!"),e&&o},manageShop:function(){this.$router.push(this.fun.getUrl("manage_shop",{}))}},components:{cTitle:s.default}},t.exports=e.default},1363:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,'#baseInfo[data-v-18646935]{position:relative;width:100%;height:100%}#baseInfo .bottom-btn[data-v-18646935]{margin-top:20px;margin-top:1.25rem}#baseInfo .bottom-btn .bg-btn[data-v-18646935],#baseInfo .bottom-btn button[data-v-18646935]{margin-top:10px;margin-top:.625rem;width:80%;height:36px;height:2.25rem;border:1px solid #ccc;border:.0625rem solid #ccc;border-radius:.25rem;margin-left:10%;color:#333;line-height:36px;line-height:2.25rem;text-align:center}#baseInfo .avatar-uploader .el-upload[data-v-18646935]{border:1px dashed #d9d9d9;border:.0625rem dashed #d9d9d9;border-radius:.375rem;cursor:pointer;position:relative;overflow:hidden}#baseInfo .avatar-uploader .el-upload[data-v-18646935]:hover{border-color:#20a0ff}#baseInfo .avatar-uploader-icon[data-v-18646935]{font-size:28px;color:#8c939d;width:178px;width:11.125rem;height:178px;height:11.125rem;line-height:178px;line-height:11.125rem;text-align:center}#baseInfo .avatar[data-v-18646935]{width:100%;height:178px;height:11.125rem;display:block}#baseInfo .popupInput[data-v-18646935]{position:relative;text-align:left}#baseInfo .popupInput .notes[data-v-18646935]{width:100%;background-color:#ebebeb;height:40px;height:2.5rem;padding:0 12px;padding:0 .75rem}#baseInfo .popupInput p[data-v-18646935]{color:#f15353;line-height:40px;line-height:2.5rem;font-size:14px}#baseInfo .popupInput .inputBox[data-v-18646935]{background:#fff;height:250px;height:15.625rem}#baseInfo .popupInput .inputBox .avatar-uploader[data-v-18646935]{position:relative}#baseInfo .popupInput .inputBox .avatar-uploader i[data-v-18646935]{font-style:normal;position:absolute;top:15px;top:.9375rem;color:blue;right:15px;right:.9375rem}#baseInfo .popupInput .inputBox .avatar-uploader div[data-v-18646935]{width:80px;width:5rem;height:80px;height:5rem;background:#f15353}#baseInfo .popupInput .inputBox .avatar-uploader img[data-v-18646935]{width:100%}#baseInfo .popupInput span[data-v-18646935]{display:inline-block;margin-right:30px;margin-right:1.875rem}#baseInfo .m_header[data-v-18646935]{width:100%;height:40px;height:2.5rem;padding:0 12px;padding:0 .75rem;box-sizing:border-box;border-bottom:1px solid #e2e2e2;border-bottom:.0625rem solid #e2e2e2;line-height:40px;line-height:2.5rem;text-align:left;font-size:14px}#baseInfo .m_header button[data-v-18646935]{color:#fff;background:green;border-radius:.25rem;width:60px;width:3.75rem;border:none;font-size:12px;float:right;line-height:36px;line-height:2.25rem}#baseInfo .m_header span[data-v-18646935]{display:inline-block;float:left;font-size:28px}#baseInfo .m_header i[data-v-18646935]{font-size:14px;float:right;font-style:normal}#baseInfo .nav[data-v-18646935]{padding:15px 12px;padding:.9375rem .75rem}#baseInfo .nav li[data-v-18646935]{width:calc(50% - .125rem);display:inline-block;text-align:center;font-size:14px;line-height:40px;line-height:2.5rem;background:#fff;color:#f15353}#baseInfo .nav li[data-v-18646935]:first-child{border-radius:.3125rem 0 0 .3125rem}#baseInfo .nav li[data-v-18646935]:last-child{border-radius:0 .3125rem .3125rem 0}#baseInfo .info li[data-v-18646935]:after{content:"";display:block;clear:both}#baseInfo .info li[data-v-18646935]:first-child{border-bottom:1px solid #ccc;border-bottom:.0625rem solid #ccc}#baseInfo .info li[data-v-18646935]{padding:12px;padding:.75rem;font-size:14px;text-align:left;background:#fff;line-height:20px;line-height:1.25rem;margin-top:10px;margin-top:.625rem}#baseInfo .info li .right[data-v-18646935]{float:right;text-align:right;border:none!important}#baseInfo .info li .right .img[data-v-18646935]{width:35px;width:2.1875rem;height:35px;height:2.1875rem;border:none!important}#baseInfo .info li .right .img img[data-v-18646935]{width:35px;width:2.1875rem;height:35px;height:2.1875rem;vertical-align:middle;border:0;margin-top:-3px;margin-top:-.1875rem}#baseInfo .info li input[data-v-18646935]{width:70%;border:none;outline:none;line-height:20px;line-height:1.25rem;float:right;text-align:right;font-size:14px;position:relative;top:-2px;top:-.125rem}#baseInfo .info .tou[data-v-18646935]{line-height:36px;line-height:2.25rem;padding-bottom:10px;padding-bottom:.625rem}#baseInfo .info .list[data-v-18646935]{padding-left:12px;padding-left:.75rem;background-color:#fff}#baseInfo .info .list .tou2[data-v-18646935]{height:44px;height:2.75rem;padding-right:12px;padding-right:.75rem}#baseInfo .info .list .tou2 span[data-v-18646935]{line-height:44px;line-height:2.75rem;float:left;font-size:15px;color:#333}#baseInfo .info .list .tou2 i[data-v-18646935]{line-height:44px;line-height:2.75rem;float:right;font-size:24px;font-size:1.5rem;color:#c9c9c9}#baseInfo .info textarea[data-v-18646935]{width:100%;height:120px;height:7.5rem;border:1px solid #e2e2e2;border:.0625rem solid #e2e2e2;background-color:#f9f9f9;border-radius:.25rem;line-height:24px;line-height:1.5rem;padding:10px;padding:.625rem;color:#8c8c8c;margin-top:12px;margin-top:.75rem}#baseInfo .info .btn[data-v-18646935]{margin:20px auto;margin:1.25rem auto;border-radius:.25rem;width:80%;height:46px;height:2.875rem;line-height:46px;line-height:2.875rem;text-align:center;background:#f15353;font-size:16px;color:#fff}#baseInfo .selectGoods[data-v-18646935]{overflow:hidden}#baseInfo .selectGoods .selectedGood li[data-v-18646935]{float:left;width:40px;width:2.5rem;margin:10px;margin:.625rem}#baseInfo .selectGoods .selectedGood li img[data-v-18646935]{width:40px;width:2.5rem}#baseInfo .selectGoods .selectedGood[data-v-18646935]:after{content:"";display:block;clear:both}#baseInfo .selectGoods .content[data-v-18646935]{font-size:14px;background:#fff;text-align:center}#baseInfo .selectGoods .content img[data-v-18646935]{width:100%}#baseInfo .selectGoods p[data-v-18646935]{padding:0 15px;padding:0 .9375rem}#baseInfo .selectGoods .add[data-v-18646935]{width:100%;box-sizing:border-box;padding:20px;padding:1.25rem}#baseInfo .selectGoods .add div[data-v-18646935]{width:80%;font-size:16px;color:#fff;background-color:#f15353;margin:0 auto;border-radius:.25rem;height:40px;height:2.5rem}#baseInfo .selectGoods .add div i[data-v-18646935]{font-size:24px;font-size:1.5rem;display:inline-block;top:2px;top:.125rem;position:relative;z-index:22}#baseInfo .selectGoods .add div .font[data-v-18646935]{line-height:40px;line-height:2.5rem}#baseInfo .selectGoods .btn[data-v-18646935]{margin:20px auto;margin:1.25rem auto;border-radius:.25rem;width:80%;padding:12px;padding:.75rem;text-align:center;background:#f15353;font-size:20px;color:#fff}#baseInfo .selectGoods p[data-v-18646935]{margin-top:15px;margin-top:.9375rem;line-height:20px;line-height:1.25rem;text-align:left;font-size:12px}.active22[data-v-18646935]{color:#fff!important;background:#f15353!important}',""])},1774:function(t,e,o){var a=o(1363);"string"==typeof a&&(a=[[t.id,a,""]]);o(2)(a,{});a.locals&&(t.exports=a.locals)},2569:function(t,e,o){var a,i;o(1774),a=o(673);var n=o(2811);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,i._scopeId="data-v-18646935",t.exports=a},2811:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"baseInfo"}},["main"==t.showBox?o("div",[o("c-title",{attrs:{hide:!1,text:" 微店设置"}}),t._v(" "),o("div",{staticStyle:{height:"40px"}}),t._v(" "),o("ul",{staticClass:"nav"},[o("li",{class:{active22:t.showInfo},on:{click:function(e){t.changeActive(!0)}}},[t._v("基本信息")]),t._v(" "),o("li",{class:{active22:!t.showInfo},on:{click:function(e){t.changeActive(!1)}}},[t._v("自选商品")])]),t._v(" "),t.showInfo?o("div",{staticClass:"info"},[o("div",{staticClass:"list"},[o("div",{staticClass:" tou2",staticStyle:{"border-bottom":"solid 0.0625rem #ebebeb"},on:{click:function(e){t.manageShop()}}},[o("span",[t._v("商品管理")]),t._v(" "),o("i",{staticClass:"fa fa-angle-right"})]),t._v(" "),o("div",{staticClass:" tou2",on:{click:function(e){t.changeShowBox("店招背景")}}},[o("span",[t._v("店招背景")]),t._v(" "),o("i",{staticClass:"fa fa-angle-right"})])]),t._v(" "),o("li",[t._v("个性签名\n\t\t\t"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.shopModle.signature,expression:"shopModle.signature"}],attrs:{name:"个性签名",id:"个性签名",cols:"30",rows:"10",maxlength:"120"},domProps:{value:t.shopModle.signature},on:{input:function(e){e.target.composing||t.$set(t.shopModle,"signature",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"btn",on:{click:function(e){t.changeActive(!1,1)}}},[t._v("\n\t\t\t\t确 定\n\t\t\t")])]):o("div",{staticClass:"selectGoods"},[o("div",{staticClass:"content"},[o("img",{attrs:{src:t.bannerImg,alt:""}})]),t._v(" "),o("router-link",{attrs:{to:t.fun.getUrl("micro_shop_add_category")}},[o("div",{staticClass:"add"},[o("div",[o("i",[t._v("+")]),t._v(" "),o("span",{staticClass:"font"},[t._v("  选择 商品")])])])]),t._v(" "),t._m(0)],1)],1):"upLoadBox"==t.showBox?o("div",{staticClass:"popupInput"},[o("c-title",{attrs:{hide:!1,text:"店招背景"}}),t._v(" "),o("div",{staticStyle:{width:"100%",height:"2.5rem"}}),t._v(" "),o("div",{staticClass:"m_header"},[o("span",{staticClass:"iconfont icon-left",on:{click:function(e){t.closePopInput()}}}),t._v("\n\t\t\t修改"+t._s(t.changeType)+"\n\t\t")]),t._v(" "),o("div",{staticClass:"inputBox"},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.action,"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.bgImg?o("img",{staticClass:"avatar",attrs:{src:t.bgImg}}):o("div")])],1),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"bottom-btn"},[o("el-upload",{staticClass:"bg-btn",attrs:{action:t.action,"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t._v("\n\t\t\t更换背景\n\t\t\t")]),t._v(" "),o("button",{on:{click:t.closePopInput}},[t._v("保存")])],1)],1):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("店主可以通过选择商品就可以生成微店，将微店分享给好友，好友通过自己的微店链接进入购买商品就可以获得分红啦~\n\t\t\t\t"),o("br"),t._v("快去选择您的微店商品吧！")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notes"},[o("p",[t._v("请上传不大于2M的jpeg或者png格式的图片。")])])}]}}});