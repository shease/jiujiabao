webpackJsonp([319,356],{3:function(t,e,a){var i,n;a(6),i=a(4);var o=a(7);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-3bb525bc",t.exports=i},4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a(8);e.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=e.default},5:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,e,a){var i=a(5);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)},7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.hide?t._e():a("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[a("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},725:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),o=i(n);e.default={components:{cTitle:o.default},data:function(){return{data:{numId:"12345689",status:"已支付",productName:"江苏中石化固定面值1000元直充",phoneNum:"1234 5678 1234 5678",place:"江苏，全国",denomination:1e3,money:"19.9x2",scoreDel:"4.00",payMethod:"-----",payNum:"30.00",date:"2017-05-01 11:00:00"}}},methods:{}},t.exports=e.default},1679:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,"#orderDetailsPaied .main[data-v-d869c5c6]{margin-top:40px;padding-top:1px;padding-top:.0625rem}#orderDetailsPaied .main .title[data-v-d869c5c6]{height:44px;height:2.75rem;line-height:44px;line-height:2.75rem;padding:0 14px;padding:0 .875rem;text-align:right;background:#fff;font-weight:500}#orderDetailsPaied .main .title p[data-v-d869c5c6]{display:inline-block;color:#8c8c8c;font-size:14px;float:left}#orderDetailsPaied .main .title span[data-v-d869c5c6]{color:#333;font-weight:500;font-size:14px}#orderDetailsPaied .main .normal[data-v-d869c5c6]{padding:14px;padding:.875rem;background:#fff;margin:10px 0;margin:.625rem 0}#orderDetailsPaied .main .normal li[data-v-d869c5c6]{line-height:30px;line-height:1.875rem;font-size:14px;color:#8c8c8c;text-align:left}#orderDetailsPaied .main .normal li span[data-v-d869c5c6]{display:inline-block;float:right;color:#333}#orderDetailsPaied .main .top li[data-v-d869c5c6]{font-size:14px;color:#8c8c8c}#orderDetailsPaied .main .middle[data-v-d869c5c6]{padding:0 14px;padding:0 .875rem}#orderDetailsPaied .main .middle li[data-v-d869c5c6]{height:44px;height:2.75rem;line-height:44px;line-height:2.75rem;font-size:14px;color:#8c8c8c;font-weight:400}#orderDetailsPaied .main .middle li span[data-v-d869c5c6]{color:#333}#orderDetailsPaied .main .content li[data-v-d869c5c6]{font-size:14px;color:#8c8c8c}#orderDetailsPaied .main .bottom[data-v-d869c5c6]{background:#fff;text-align:right;padding:15px;padding:.9375rem;line-height:26px;line-height:1.625rem}#orderDetailsPaied .main .bottom b[data-v-d869c5c6]{color:#616161;font-weight:500}#orderDetailsPaied .main .bottom span[data-v-d869c5c6]{color:#a5a5a5}#orderDetailsPaied .main .btn[data-v-d869c5c6]{position:fixed;bottom:0;right:0;height:45px;height:2.8125rem;line-height:45px;line-height:2.8125rem;width:100%;background:#fff}#orderDetailsPaied .main .btn button[data-v-d869c5c6]{margin-right:10px;margin-right:.625rem;padding:4px 10px;padding:.25rem .625rem;border-radius:.1875rem;text-align:center;border:1px solid #666;border:.0625rem solid #666;color:#333;background:#fff;outline:0;margin-top:10px;margin-top:.625rem}",""])},2091:function(t,e,a){var i=a(1679);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)},2620:function(t,e,a){var i,n;a(2091),i=a(725);var o=a(3115);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-d869c5c6",t.exports=i},3115:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"orderDetailsPaied"}},[a("c-title",{attrs:{hide:!1,text:"订单详情"}}),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"title"},[a("p",[t._v("订单号："+t._s(t.data.numId))]),t._v(" "),a("span",[t._v(t._s(t.data.status))])]),t._v(" "),a("div",{staticClass:"top normal"},[a("ul",[a("li",[t._v("游戏名称"),a("span",[t._v(t._s(t.data.productName))])]),t._v(" "),a("li",[t._v("游戏帐号"),a("span",[t._v(t._s(t.data.phoneNum))])]),t._v(" "),a("li",[t._v("游戏分区(一级)"),a("span",[t._v(t._s(t.data.place))])]),t._v(" "),a("li",[t._v("游戏分区(二级)"),a("span",[t._v(t._s(t.data.place))])]),t._v(" "),a("li",[t._v("充值面额"),a("span",[t._v(t._s(t.data.denomination)+"元")])]),t._v(" "),a("li",[t._v("数量"),a("span",[t._v(t._s(t.data.denomination)+"元")])])])]),t._v(" "),a("div",{staticClass:"middle normal"},[a("ul",[a("li",[t._v("手机号码"),a("span",[t._v(t._s(t.data.denomination)+"元")])])])]),t._v(" "),a("div",{staticClass:"content normal"},[a("ul",[a("li",[t._v("商品金额"),a("span",[t._v("￥"+t._s(t.data.money))])]),t._v(" "),a("li",[t._v("积分抵付"),a("span",[t._v("-"+t._s(t.data.scoreDel))])]),t._v(" "),a("li",[t._v("支付方式"),a("span",[t._v(t._s(t.data.payMethod))])])])]),t._v(" "),a("div",{staticClass:"bottom"},[a("b",[t._v("需付款：￥"+t._s(t.data.payNum))]),a("br"),t._v(" "),a("span",[t._v("下单时间："+t._s(t.data.date))])]),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn"},[a("button",{staticClass:"rt",attrs:{type:"button"}},[t._v("取消订单")]),t._v(" "),a("button",{staticClass:"rt",attrs:{type:"button"}},[t._v("去支付")])])}]}}});