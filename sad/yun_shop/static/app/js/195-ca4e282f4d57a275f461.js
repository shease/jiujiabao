webpackJsonp([195,356],{3:function(t,e,a){var i,o;a(6),i=a(4);var r=a(7);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-3bb525bc",t.exports=i},4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a(8);e.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=e.default},5:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,e,a){var i=a(5);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)},7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.hide?t._e():a("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[a("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},712:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(1079),r=i(o);e.default=r.default,t.exports=e.default},1079:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(3),r=i(o),s=a(9);a(8);e.default={data:function(){return{payerImg:"",payerName:"",goodList:[],totalNum:0,totalPrice:0,btns:[],payId:"",order_sn:"",popupSpecs:!1,isMiniprogram:!1}},methods:{getPayerInfo:function(){var t=this;$http.get("order.merge-pay.anotherPayOrder",{order_ids:this.$route.query.order_ids,mid:this.$route.query.mid,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")}).then(function(e){if(1==e.result)t.payerImg=e.data.member.avatar,t.payerName=e.data.member.nickname,t.btns=e.data.buttons,t.payId=e.data.order_pay.id,t.totalPrice=e.data.order_pay.amount;else{if(0!=e.result)return;s.MessageBox.alert(e.msg,"提示"),t.$router.push(t.fun.getUrl("home"))}}).catch(function(t){console.log(t)})},getOrderDetail:function(){var t=this;$http.get("order.another-pay-detail",{order_id:this.$route.query.order_ids,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")}).then(function(e){if(console.log(e),1==e.result){t.goodList=e.data;var a=0;e.data.forEach(function(t){return a+=t.goods_total}),t.totalNum=a,t.order_sn=e.data.order_sn}else s.MessageBox.alert(e.msg,"提示"),t.$router.push(t.fun.getUrl("home"))}).catch(function(t){console.log(t)})},btnclass:function(t){return 1==t||6==t||9==t||12==t?"wei-btn":2==t||10==t||7==t?"zhi-btn":"yu-btn"},miniPay:function(){s.MessageBox.alert("请点击右上角分享！")},confirmPay:function(t){var e=t.value;switch(e){case 1:this.getWeChatPayParams();break;case 2:this.$router.push(this.fun.getUrl("alipay",{status:2,recharge_money:this.totalPrice,order_pay_id:this.payId,uid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid"),pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")}));break;case 9:this.appWeiPay();break;case 10:this.appAliPay();break;case 6:this.getWeChatPayParams2();break;case 3:t.need_password?this.showPwdPop():this.balancePay("");break;case 12:this.newWechatPay();break;case 11:this.cashPay();break;case 7:this.cloudAlipay()}},getWeChatPayParams:function(){var t=this,e={order_pay_id:this.payId,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")};if(window.isMiniprogram)var e={order_pay_id:this.payId,client_type:2,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")};$http.get("order.merge-pay.wechatPay",e).then(function(e){1==e.result?window.isMiniprogram?t.miniWxPay(e.data.config):(wx.config(e.data.js),t.WXPay(e.data.config,e.data.redirect)):s.MessageBox.alert(e.msg,"提示")}).catch(function(t){console.log(t)})},miniWxPay:function(t){var e="?timestamp="+t.timestamp+"&nonceStr="+t.nonceStr+"&package="+encodeURIComponent(t.package)+"&signType="+t.signType+"&paySign="+t.paySign,a="/pages/pay/orderPay"+e;wx.miniProgram.navigateTo({url:a})},WXPay:function(t,e){var a=this;wx.chooseWXPay({appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign,success:function(t){"chooseWXPay:ok"==t.errMsg?a.fun.isTextEmpty(e)?(a.$router.push(a.fun.getUrl("home")),s.MessageBox.alert("支付成功","提示")):(window.location.href=e,s.MessageBox.alert("支付成功","提示")):s.MessageBox.alert("支付失败","提示")},cancel:function(t){},fail:function(t){s.MessageBox.alert("支付失败，请返回重试","提示")}})},appWeiPay:function(){var t=this;$http.get("order.merge-pay.wechatAppPay",{order_pay_id:this.payId,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")}).then(function(e){1==e.result?YDB.SetWxpayInfo(t.$store.state.temp.mailInfo.name,"订单号："+t.order_sn,t.totalPrice,t.order_sn,t.fun.getKeyByI()):s.MessageBox.alert(e.msg,"提示")},function(t){})},appAliPay:function(){var t=this;$http.get("order.merge-pay.alipayAppRay",{order_pay_id:this.payId,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")}).then(function(e){1==e.result?YDB.SetAlipayInfo(t.$store.state.temp.mailInfo.name,t.fun.getKeyByI(),t.totalPrice,t.order_sn):s.MessageBox.alert(e.msg,"提示")},function(t){})},getWeChatPayParams2:function(){$http.get("order.merge-pay.cloudWechatPay",{order_pay_id:this.payId,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")}).then(function(t){1==t.result?window.location.href=t.data:s.MessageBox.alert(t.msg,"提示")},function(t){})},showPwdPop:function(){this.popupSpecs=!0},hidePwdPop:function(){this.popupSpecs=!1},keyboardDone:function(t){this.hidePwdPop(),this.getVerifyPassword(t)},getVerifyPassword:function(t){var e=this;$http.get("payment.password.check",{password:t},"").then(function(a){1==a.result?e.balancePay(t):(0,s.MessageBox)({title:"提示",message:a.msg,showCancelButton:!0}).then(function(t){"confirm"==t?2001==a.data.code||(2002==a.data.code?e.$router.push(e.fun.getUrl("set_balance_password",{})):2003==a.data.code):"cancel"==t&&(2001==a.data.code||2002==a.data.code||2003==a.data.code)})},function(t){s.MessageBox.alert(t.msg,"提示")})},balancePay:function(t){var e=this,a={order_pay_id:this.payId,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")};this.fun.isTextEmpty(t)||(a={order_pay_id:this.payId,payment_password:t,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")}),$http.get("order.credit-merge-pay.credit2",a,"").then(function(t){1==t.result?e.fun.isTextEmpty(t.data.redirect)?(e.$router.push(e.fun.getUrl("home")),s.MessageBox.alert(t.msg,"提示")):(window.location.href=t.data.redirect,s.MessageBox.alert(t.msg,"提示")):s.MessageBox.alert(t.msg,"提示")},function(t){})},cashPay:function(){this.$router.push(this.fun.getUrl("orderCash",{order_pay_id:this.payId,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")}))},cloudAlipay:function(){var t=this,e={order_pay_id:this.payId,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")};$http.get("order.merge-pay.cloudAliPay",e,"").then(function(e){1==e.result?t.$router.push(t.fun.getUrl("alipayCloud",{status:"6",url:e.data})):s.MessageBox.alert(e.msg,"提示")},function(t){s.MessageBox.alert(t.msg,"提示")})},init:function(){this.payerImg="",this.goodList=[],this.payerName="",this.totalNum=0,this.totalPrice=0,this.btns=[],this.payId="",this.popupSpecs=!1},newWechatPay:function(){var t=this,e={order_pay_id:this.payId,pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid")};$http.get("order.merge-pay.yunPayWechat",e,"").then(function(e){1==e.result?t.newWXPay(e.data,e.data.redirect):s.MessageBox.alert(e.msg,"提示")},function(t){})},newWXPay:function(t,e){var a=this;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.appId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign},function(t){"get_brand_wcpay_request:ok"==t.err_msg?a.fun.isTextEmpty(e)?(a.$router.push(a.fun.getUrl("home")),s.MessageBox.alert("支付成功","提示")):(window.location.href=e,s.MessageBox.alert("支付成功","提示")):s.MessageBox.alert("支付失败","提示")})}},activated:function(){window.isMiniprogram&&(this.isMiniprogram=!0),this.init(),this.getPayerInfo(),this.getOrderDetail()},components:{cTitle:r.default}},t.exports=e.default},1601:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,".top-spare[data-v-74777028]{width:100%;height:44px;height:2.75rem}.detail-box[data-v-74777028]{border-top:1px solid #e2e2e2;border-top:.0625rem solid #e2e2e2;border-bottom:1px solid #e2e2e2;border-bottom:.0625rem solid #e2e2e2;padding:10px;padding:.625rem;width:100%;background-color:#fff}.detail-box .detail-top[data-v-74777028]{display:-ms-flexbox;display:flex}.detail-box .detail-top .img[data-v-74777028]{width:48px;width:3rem;height:48px;height:3rem;background-color:#888;border-radius:50%;margin-right:10px;margin-right:.625rem}.detail-box .detail-top .img img[data-v-74777028]{width:100%;height:100%;overflow:hidden;border-radius:50%}.detail-box .detail-top span[data-v-74777028]{line-height:48px;line-height:3rem;-ms-flex:3;flex:3;text-align:left}.detail-box h1[data-v-74777028]{font-size:24px;color:#f15353;font-weight:700;margin:20px 0}.detail-box .line[data-v-74777028]{width:100%;height:1px;height:.0625rem;background-color:#e2e2e2;margin-bottom:4px;margin-bottom:.25rem}.detail-box h2[data-v-74777028]{line-height:28px;line-height:1.75rem;text-align:left}.detail-box ul[data-v-74777028]{text-align:left}.pay-box[data-v-74777028]{border-top:1px solid #e2e2e2;border-top:.0625rem solid #e2e2e2;background-color:#fff;padding:0 12px;padding:0 .75rem;margin-top:4px;margin-top:.25rem}.pay-box .order-info[data-v-74777028],.pay-box[data-v-74777028]{border-bottom:1px solid #e2e2e2;border-bottom:.0625rem solid #e2e2e2;width:100%}.pay-box .order-info[data-v-74777028]{display:-ms-flexbox;display:flex}.pay-box .order-info span[data-v-74777028]{line-height:44px;line-height:2.75rem;text-align:start;font-size:14px;color:#333}.pay-box .pay-pro[data-v-74777028]{width:100%;margin-top:12px;margin-top:.75rem;display:-ms-flexbox;display:flex;border-bottom:1px solid #e2e2e2;border-bottom:.0625rem solid #e2e2e2;padding-bottom:12px;padding-bottom:.75rem}.pay-box .pay-pro .img[data-v-74777028]{-ms-flex:1;flex:1;width:64px;width:4rem;height:88px;height:5.5rem;background-color:green}.pay-box .pay-pro .img img[data-v-74777028]{width:100%;height:100%}.pay-box .pay-pro .title[data-v-74777028]{-ms-flex:3;flex:3;margin-left:8px;margin-left:.5rem}.pay-box .pay-pro .title .top[data-v-74777028]{display:-ms-flexbox;display:flex;width:100%}.pay-box .pay-pro .title .top .title-left[data-v-74777028]{-ms-flex:3;flex:3;text-align:left}.pay-box .pay-pro .title .top .title-right[data-v-74777028]{-ms-flex:1;flex:1;text-align:right}.pay-box .pay-pro .title .bottom[data-v-74777028]{display:-ms-flexbox;display:flex;margin-top:10px;margin-top:.625rem;width:100%;color:#888}.pay-box .pay-pro .title .bottom .title-left[data-v-74777028]{-ms-flex:3;flex:3;text-align:left}.pay-box .pay-pro .title .bottom .title-right[data-v-74777028]{-ms-flex:1;flex:1;text-align:right}.pay-box .pay-sum[data-v-74777028]{line-height:44px;line-height:2.75rem;text-align:right;font-size:14px}.pay-box .pay-sum .money[data-v-74777028]{font-weight:700;color:#f15353;font-size:16px}.pay-btn[data-v-74777028]{margin:10px 12px;margin:.625rem .75rem}.pay-btn button[data-v-74777028]{border:none;width:100%;height:36px;height:2.25rem;border-radius:.25rem;color:#fff;font-size:14px}.wei-btn[data-v-74777028]{background-color:#13ce66}.zhi-btn[data-v-74777028]{background-color:#46b4ed}.yu-btn[data-v-74777028]{background-color:#f15353}.dai-btn[data-v-74777028]{background-color:#36db36}",""])},2013:function(t,e,a){var i=a(1601);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)},2607:function(t,e,a){var i,o;a(2013),i=a(712);var r=a(3039);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-74777028",t.exports=i},3039:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"pay-another"}},[a("c-title",{attrs:{hide:!1,text:"代付详情"}}),t._v(" "),a("div",{staticClass:"top-spare"}),t._v(" "),a("div",{staticClass:"detail-box"},[a("div",{staticClass:"detail-top"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.payerImg}})]),t._v(" "),a("span",[t._v(t._s(t.payerName)+"  请您帮忙代付一笔订单")])]),t._v(" "),a("h1",[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("h2",[t._v("好友代付说明")]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"pay-box"},[t._m(1),t._v(" "),t._l(t.goodList,function(e){return a("div",t._l(e.has_many_order_goods,function(e){return a("div",{staticClass:"pay-pro"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:e.thumb}})]),t._v(" "),a("div",{staticClass:"title"},[a("div",{staticClass:"top"},[a("span",{staticClass:"title-left"},[t._v(t._s(e.title))]),a("br"),t._v(" "),a("span",{staticClass:"title-right"},[t._v("￥"+t._s(e.price))]),a("br")]),t._v(" "),a("div",{staticClass:"bottom"},[a("span",{staticClass:"title-left"},[t._v("规格:"+t._s(e.goods_option_title))]),a("br"),t._v(" "),a("span",{staticClass:"title-right"},[t._v("X"+t._s(e.total))])])])])}))}),t._v(" "),a("div",{staticClass:"pay-sum"},[a("span",[t._v("共"+t._s(t.totalNum)+"件商品  实付：￥"),a("span",{staticClass:"money"},[t._v(t._s(t.totalPrice))])])])],2),t._v(" "),t._l(t.btns,function(e){return t.isMiniprogram?t._e():a("div",{staticClass:"pay-btn"},[a("Button",{class:[t.btnclass(e.value)],on:{click:function(a){t.confirmPay(e)}}},[t._v(t._s(e.name))])],1)}),t._v(" "),t.isMiniprogram?a("div",{staticClass:"pay-btn"},[a("Button",{staticClass:"dai-btn",on:{click:t.miniPay}},[t._v("点击右上角分享给好友吧")])],1):t._e(),t._v(" "),a("yd-keyboard",{ref:"keyboardDemo1",attrs:{title:"安全键盘","input-text":"请输入支付密码",callback:t.keyboardDone},model:{value:t.popupSpecs,callback:function(e){t.popupSpecs=e},expression:"popupSpecs"}})],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",{staticStyle:{color:"#f15353","font-weight":"bold"}},[t._v("代付前请先电话或当面核实好友身份在代付,避免遇到诈骗行为")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-info"},[a("span",[t._v("订单信息")])])}]}}});