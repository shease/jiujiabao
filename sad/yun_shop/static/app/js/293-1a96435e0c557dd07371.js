webpackJsonp([293,356],{3:function(t,e,r){var o,d;r(6),o=r(4);var i=r(7);d=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(d=o=o.default),"function"==typeof d&&(d=d.options),d.render=i.render,d.staticRenderFns=i.staticRenderFns,d._scopeId="data-v-3bb525bc",t.exports=o},4:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});r(8);e.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=e.default},5:function(t,e,r){e=t.exports=r(1)(),e.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,e,r){var o=r(5);"string"==typeof o&&(o=[[t.id,o,""]]);r(2)(o,{});o.locals&&(t.exports=o.locals)},7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.hide?t._e():r("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():r("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[r("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},855:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var d=r(3),i=o(d);e.default={components:{cTitle:i.default},data:function(){return{records:[{addr:"广东省广州市白云区云霄路188号",tel:"13878237878",name:"李一天",userId:"100",kity:"甲",infor:"受赠",time:"2017-02-10 00:00",recording:"您已将该笔订单成功转赠给丙(会员名称)"},{addr:"广东省广州市白云区云霄路188号",tel:"13878237878",name:"李一天",userId:"100",kity:"甲",infor:"转赠",time:"2017-02-10 00:00",recording:"甲(会员名称)已将该笔订单成功转赠给您"}]}}},t.exports=e.default},1365:function(t,e,r){e=t.exports=r(1)(),e.push([t.id,"#transferRecord[data-v-1908248e]{text-align:left;line-height:30px;line-height:1.875rem}#transferRecord .box[data-v-1908248e]{padding:10px 20px;padding:.625rem 1.25rem;background:#fff}#transferRecord .box ul[data-v-1908248e]:first-child{color:#e51c23}#transferRecord .box ul:first-child li[data-v-1908248e]:nth-child(2){border-bottom:1px dotted #e51c23;border-bottom:.0625rem dotted #e51c23}#transferRecord .box ul:first-child li[data-v-1908248e]:last-child{border:1px solid #db2427;border:.0625rem solid #db2427;background:#e84e40}#transferRecord .box ul[data-v-1908248e]:last-child{padding-bottom:0}#transferRecord .box ul[data-v-1908248e]{padding:0 15px;padding:0 .9375rem;border-left:1px solid #ccc;border-left:.0625rem solid #ccc;padding-bottom:50px;padding-bottom:3.125rem;position:relative}#transferRecord .box ul li[data-v-1908248e]:first-child{line-height:25px;line-height:1.5625rem;vertical-align:top}#transferRecord .box ul li[data-v-1908248e]:nth-child(2){padding-bottom:15px;padding-bottom:.9375rem;border-bottom:1px dotted #ccc;border-bottom:.0625rem dotted #ccc}#transferRecord .box ul li[data-v-1908248e]:nth-child(3){padding-top:15px;padding-top:.9375rem}#transferRecord .box ul li[data-v-1908248e]:last-child{width:10px;width:.625rem;height:10px;height:.625rem;border-radius:50%;border:1px solid #8c898c;border:.0625rem solid #8c898c;background:#7d797d;position:absolute;top:0;left:-7px;left:-.4375rem}",""])},1776:function(t,e,r){var o=r(1365);"string"==typeof o&&(o=[[t.id,o,""]]);r(2)(o,{});o.locals&&(t.exports=o.locals)},2750:function(t,e,r){var o,d;r(1776),o=r(855);var i=r(2813);d=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(d=o=o.default),"function"==typeof d&&(d=d.options),d.render=i.render,d.staticRenderFns=i.staticRenderFns,d._scopeId="data-v-1908248e",t.exports=o},2813:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"transferRecord"}},[r("c-title",{attrs:{hide:!1,text:"转赠记录"}}),t._v(" "),r("div",{staticStyle:{height:"45px"}}),t._v(" "),r("div",{staticClass:"box"},t._l(t.records,function(e){return r("ul",[r("li",[t._v(t._s(e.recording))]),t._v(" "),r("li",[t._v("转赠时间："+t._s(e.time))]),t._v(" "),r("li",[t._v(t._s(e.infor)+"人信息：")]),t._v(" "),r("li",[t._v("昵称："+t._s(e.kity))]),t._v(" "),r("li",[t._v("会员ID："+t._s(e.userId))]),t._v(" "),r("li",[t._v("姓名："+t._s(e.name))]),t._v(" "),r("li",[t._v("联系电话："+t._s(e.tel))]),t._v(" "),r("li",[t._v("地址："+t._s(e.addr))]),t._v(" "),r("li")])}))],1)},staticRenderFns:[]}}});