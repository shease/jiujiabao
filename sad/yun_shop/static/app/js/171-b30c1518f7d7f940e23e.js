webpackJsonp([171,356],{3:function(e,t,n){var o,i;n(6),o=n(4);var a=n(7);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-3bb525bc",e.exports=o},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(8);t.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},e.exports=t.default},5:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},7:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.hide?e._e():n("mt-header",{attrs:{fixed:"",title:e.text}},[e.goback?e._e():n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:e.goto},slot:"left"}),e._v(" "),e.tolink?[n("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:e.fun.getUrl(e.tolink)},slot:"right"},[e._v(e._s(e.totext))])]:e._e()],2)],1)},staticRenderFns:[]}},802:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1218),a=o(i);t.default=a.default,e.exports=t.default},1218:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),a=n(3),r=o(a);t.default={data:function(){return{information:{my_name:"",phone_number:"",store_name:"",store_logo:"",bank_account:"",owner_name:"",opening_bank:"",opening_branch:"",enterprise_alipay:"",enterprise_alipay_user:"",alipay:"",alipay_username:"",weChat_account:""},imageUrl:"",uploadUrl:"",jumpState:!0}},activated:function(){console.log("route++params",this.$route.params),this.init(),this.urlUp(),this.getJson()},methods:{init:function(){for(var e in this.information)this.information[e]="";this.imageUrl=""},getJson:function(){var e=this,t={member_id:this.$route.params.member_id};$http.post("plugin.supplier.frontend.info.index",t).then(function(t){console.log("info--res",t),1==t.result?(e.information.my_name=t.data.realname,e.information.phone_number=t.data.mobile,e.information.store_name=t.data.store_name,e.information.store_logo=t.data.logo,e.imageUrl=t.data.logo,e.information.bank_account=t.data.company_bank,e.information.owner_name=t.data.bank_username,e.information.opening_bank=t.data.bank_of_accounts,e.information.opening_branch=t.data.opening_branch,e.information.enterprise_alipay=t.data.company_ali,e.information.enterprise_alipay_user=t.data.company_ali_username,e.information.alipay=t.data.ali,e.information.alipay_username=t.data.ali_username,e.information.weChat_account=t.data.wechat):e.$message.error(t.msg)},function(e){console.log(e)})},modifyInformation:function(){var e=this;if(e.jumpJudge(),1==e.jumpState){if(e.fun.isMoblie(e.information.phone_number))return void this.$message.error("请输入正确的手机号");if(!/^([1-9]{1})(\d{15}|\d{18})$/.test(e.information.bank_account))return void this.$message.error("请输入正确的银行卡账号");if(!/^(?:\w+\.?)*\w+@(?:\w+\.)+\w+|\d{9,11}$/.test(e.information.enterprise_alipay))return void this.$message.error("请输入正确的企业支付宝账号");if(!/^(?:\w+\.?)*\w+@(?:\w+\.)+\w+|\d{9,11}$/.test(e.information.alipay))return void this.$message.error("请输入正确的支付宝账号");if(!/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(e.information.weChat_account))return void this.$message.error("请输入正确的微信号");var t={realname:e.information.my_name,mobile:e.information.phone_number,store_name:e.information.store_name,logo:e.information.store_logo,company_bank:e.information.bank_account,bank_username:e.information.owner_name,bank_of_accounts:e.information.opening_bank,opening_branch:e.information.opening_branch,company_ali:e.information.enterprise_alipay,company_ali_username:e.information.enterprise_alipay_user,ali:e.information.alipay,ali_username:e.information.alipay_username,wechat:e.information.weChat_account};$http.post("plugin.supplier.frontend.info.edit",t).then(function(t){console.log("midify",t),1===t.result?(e.$router.push(e.fun.getUrl("SupplierCenter",{uid:e.$route.params.member_id})),e.$message({message:"修改成功",type:"success"})):e.$message.error(t.msg)},function(e){console.log(e)})}else e.$message({message:"填写信息不完整",type:"warning"})},jumpJudge:function(){this.jumpState=!0;for(var e in this.information)""==this.information[e]&&(this.jumpState=!1);""==this.imageUrl&&(this.jumpState=!1)},urlUp:function(){this.uploadUrl=this.fun.getRealUrl("plugin.supplier.frontend.info.upload",{})},handleStoreSuccess:function(e,t){console.log(e),this.imageUrl=URL.createObjectURL(t.raw),1==e.result?this.information.store_logo=e.data.img:(0,i.Toast)(e.msg)},beforeUpload:function(e){var t="image/png"===e.type||"image/jpeg"===e.type,n=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG或PNG 格式!"),n||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&n}},components:{cTitle:r.default}},e.exports=t.default},1639:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".avatar[data-v-969eb28c]{width:100%;height:100%}#supplier-center[data-v-969eb28c]{text-align:left;padding-top:40px;padding-top:2.5rem}#supplier-center .info-box h1[data-v-969eb28c],#supplier-center .info-box ul h1[data-v-969eb28c]{line-height:36px;line-height:2.25rem;color:#888;padding:0 14px;padding:0 .875rem;font-size:16px;text-align:left}#supplier-center .info-box ul li[data-v-969eb28c]{background-color:#fff;line-height:44px;line-height:2.75rem;font-size:14px;text-align:left;padding:0 20px;padding:0 1.25rem;border-bottom:1px solid #ebebeb;border-bottom:.0625rem solid #ebebeb;display:-ms-flexbox;display:flex}#supplier-center .info-box ul li input[data-v-969eb28c]{border:none;-ms-flex:1;flex:1}#supplier-center .info-box ul li i[data-v-969eb28c]{font-size:24px;font-size:1.5rem;color:#c9c9c9;line-height:60px;line-height:3.75rem}#supplier-center .info-box ul #logo[data-v-969eb28c]{line-height:60px;line-height:3.75rem;height:60px;height:3.75rem;position:relative;-ms-flex-pack:justify;justify-content:space-between}#supplier-center .info-box ul #logo span[data-v-969eb28c]{line-height:44px;line-height:2.75rem}#supplier-center .info-box ul #logo .spare[data-v-969eb28c]{position:absolute;right:44px;right:2.75rem;top:6px;top:.375rem;width:48px;width:3rem;height:48px;height:3rem;border:1px dashed #ccc;border:.0625rem dashed #ccc;background-color:#fafafa;border-radius:.1875rem;margin:0 auto;display:-ms-flexbox;display:flex}#supplier-center .info-box ul #logo .spare i[data-v-969eb28c]{font-size:24px;font-size:1.5rem;margin:0 auto;line-height:48px;line-height:3rem;color:#ccc}#supplier-center .info-box .btn[data-v-969eb28c]{margin:20px 0;margin:1.25rem 0;padding:0 14px;padding:0 .875rem;font-size:16px}#supplier-center .info-box .btn button[data-v-969eb28c]{color:#fff;background-color:#f15353;height:46px;height:2.875rem;border-radius:.25rem;border:none;width:100%}",""])},2051:function(e,t,n){var o=n(1639);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},2697:function(e,t,n){var o,i;n(2051),o=n(802);var a=n(3076);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-969eb28c",e.exports=o},3076:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"supplier-center"}},[n("c-title",{attrs:{hide:!1,text:"信息管理"}}),e._v(" "),n("div",{staticClass:"info-box"},[n("h1",[e._v("基本信息")]),e._v(" "),n("section",[n("mt-field",{attrs:{label:"真实姓名:",placeholder:"请输入真实姓名"},model:{value:e.information.my_name,callback:function(t){e.$set(e.information,"my_name",t)},expression:"information.my_name"}}),e._v(" "),n("mt-field",{attrs:{label:"手机号码:",placeholder:"请输入手机号码",type:"tel"},model:{value:e.information.phone_number,callback:function(t){e.$set(e.information,"phone_number",t)},expression:"information.phone_number"}})],1),e._v(" "),n("h1",[e._v("店铺信息")]),e._v(" "),n("section",[n("mt-field",{attrs:{label:"店铺名称:",placeholder:"请输入店铺姓名"},model:{value:e.information.store_name,callback:function(t){e.$set(e.information,"store_name",t)},expression:"information.store_name"}})],1),e._v(" "),n("section",[e._m(0),e._v(" "),n("div",{staticStyle:{background:"white","padding-bottom":"10px","box-sizing":"border-box","border-bottom":"solid 0.0625rem #ebebeb"}},[n("div",{staticStyle:{"text-align":"center"}},[n("el-upload",{attrs:{action:e.uploadUrl,"on-preview":e.handlePreview,limit:1,"list-type":"picture-card","show-file-list":!1,"on-exceed":e.handleExceed,"before-upload":e.beforeUpload,"on-success":e.handleStoreSuccess}},[e.imageUrl?n("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):n("i",{staticClass:"el-icon-plus"})])],1)])]),e._v(" "),n("h1",[e._v("收款信息")]),e._v(" "),n("section",[n("mt-field",{attrs:{label:"银行卡账号:",placeholder:"请输入银行账号",type:"number"},model:{value:e.information.bank_account,callback:function(t){e.$set(e.information,"bank_account",t)},expression:"information.bank_account"}}),e._v(" "),n("mt-field",{attrs:{label:"开户人姓名:",placeholder:"请输入开户人姓名"},model:{value:e.information.owner_name,callback:function(t){e.$set(e.information,"owner_name",t)},expression:"information.owner_name"}}),e._v(" "),n("mt-field",{attrs:{label:"开户银行:",placeholder:"请输入开户银行"},model:{value:e.information.opening_bank,callback:function(t){e.$set(e.information,"opening_bank",t)},expression:"information.opening_bank"}}),e._v(" "),n("mt-field",{attrs:{label:"开户支行:",placeholder:"请输入开户支行"},model:{value:e.information.opening_branch,callback:function(t){e.$set(e.information,"opening_branch",t)},expression:"information.opening_branch"}}),e._v(" "),n("mt-field",{attrs:{label:"企业支付宝账号:",placeholder:"请输入企业支付宝账号"},model:{value:e.information.enterprise_alipay,callback:function(t){e.$set(e.information,"enterprise_alipay",t)},expression:"information.enterprise_alipay"}}),e._v(" "),n("mt-field",{attrs:{label:"企业支付宝用户名:",placeholder:"请输入企业支付宝用户名"},model:{value:e.information.enterprise_alipay_user,callback:function(t){e.$set(e.information,"enterprise_alipay_user",t)},expression:"information.enterprise_alipay_user"}}),e._v(" "),n("mt-field",{attrs:{label:"支付宝账号:",placeholder:"请输入支付宝账号"},model:{value:e.information.alipay,callback:function(t){e.$set(e.information,"alipay",t)},expression:"information.alipay"}}),e._v(" "),n("mt-field",{attrs:{label:"支付宝用户名:",placeholder:"请输入支付宝用户名"},model:{value:e.information.alipay_username,callback:function(t){e.$set(e.information,"alipay_username",t)},expression:"information.alipay_username"}}),e._v(" "),n("mt-field",{attrs:{label:"微信账号:",placeholder:"请输入微信账号"},model:{value:e.information.weChat_account,callback:function(t){e.$set(e.information,"weChat_account",t)},expression:"information.weChat_account"}})],1),e._v(" "),n("div",{staticClass:"btn"},[n("button",{attrs:{type:"buttom"},on:{click:e.modifyInformation}},[e._v("确认修改")])])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"50px","text-align":"left","line-height":"50px",background:"white"}},[n("span",{staticStyle:{"font-size":"16px","margin-left":"10px"}},[e._v("店铺LOGO：")])])}]}}});