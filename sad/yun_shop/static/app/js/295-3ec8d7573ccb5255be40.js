webpackJsonp([295,356],{3:function(t,e,n){var o,r;n(6),o=n(4);var i=n(7);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-3bb525bc",t.exports=o},4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(8);e.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=e.default},5:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,e,n){var o=n(5);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.hide?t._e():n("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[n("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},846:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=o(r);e.default={components:{cTitle:i.default},data:function(){return{}}},t.exports=e.default},1475:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"#rentGuide[data-v-3e958f7e]{padding:10px 15px;padding:.625rem .9375rem;background:#fff}#rentGuide h3[data-v-3e958f7e]{text-align:left;margin-top:20px;margin-top:1.25rem;color:#101010;font-weight:400;font-size:16px;line-height:35px;line-height:2.1875rem}#rentGuide p[data-v-3e958f7e]{text-align:left;color:#8a8a8a;line-height:24px;line-height:1.5rem}",""])},1886:function(t,e,n){var o=n(1475);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},2741:function(t,e,n){var o,r;n(1886),o=n(846);var i=n(2915);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-3e958f7e",t.exports=o},2915:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"rentGuide"}},[n("c-title",{attrs:{hide:!1,text:"租赁指南"}}),t._v(" "),n("div",{staticStyle:{height:"40px"}}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("一、什么是转赠？")]),t._v(" "),n("p",[t._v("转赠人在前端输入受赠人ID（即会员ID）、姓名、电话、地址，受赠人接受转赠后，该租赁订单即可转赠到指定会员的【待归还】租赁订单中，获得该订单中商品的所有使用权，包括归还商品、继续转赠，押金也同时转让到该会员的押金冻结账户上等。")]),t._v(" "),n("h3",[t._v("二、租金怎么计算？")]),t._v(" "),n("p",[t._v("转赠人在前端输入受赠人ID（即会员ID）、姓名、电话、地址，受赠人接受转赠后，该租赁订单即可转赠到指定会员的【待归还】租赁订单中，获得该订单中商品的所有使用权，包括归还商品、继续转赠，押金也同时转让到该会员的押金冻结账户上等。")]),t._v(" "),n("h3",[t._v("三、押金冻结说明")]),t._v(" "),n("p",[t._v("租客下单，支付押金之后，这笔钱就会被冻结，不能提现，待商品归还成功之后押金解冻，这笔钱就会退还到租客押金账户上。")]),t._v(" "),n("h3",[t._v("四、逾期扣费说明")]),t._v(" "),n("p",[t._v("逾期扣费金额从押金冻结账户上扣除费用")]),t._v(" "),n("p",[t._v("逾期扣费金额=按照逾期天数*每日租金，默认24小时为一天，7天为一周，30天为一个月，365天为一年。不足24小时，按照24小时计算")]),t._v(" "),n("p",[t._v("计算实例：发财树的年租价为20元/天，押金1000元，租客一共租赁1棵发财树，租期为2年，逾期4天未还，\n\t\t逾期扣费金额=20元/天*4天=80元")])])}]}}});