webpackJsonp([277,356],{3:function(t,e,i){var s,a;i(6),s=i(4);var r=i(7);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-3bb525bc",t.exports=s},4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i(8);e.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=e.default},5:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,e,i){var s=i(5);"string"==typeof s&&(s=[[t.id,s,""]]);i(2)(s,{});s.locals&&(t.exports=s.locals)},7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.hide?t._e():i("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():i("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[i("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},541:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(933),r=s(a);e.default=r.default,t.exports=e.default},933:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(3),r=s(a),o="",d="0",n="1",l="3";e.default={data:function(){return{mailLanguage:"",mailTitle:"",toi:this.fun.getKeyByI(),selected:"0",display:"-1",statusData0:[],statusData1:[],statusData2:[],statusData3:[],open_order_buyer:"",open_order_detail:""}},activated:function(){this.toi=this.fun.getKeyByI(),this.selected=this.$route.params.selected,this.swichTabData(),this.initMailLanguage()},mounted:function(){this.toi=this.fun.getKeyByI()},methods:{initMailLanguage:function(){this.mailLanguage=this.fun.initMailLanguage(),this.mailTitle=this.fun.setMailLanguage("分销订单",this.mailLanguage.commission.commission_order),this.fun.setWXTitle(this.fun.setMailLanguage("分销订单",this.mailLanguage.commission.commission_order))},swichTabTItem:function(){console.log(this.selected),this.swichTabData()},swichTabData:function(){this.display="-1",0==this.selected?this.getData(o):1==this.selected?this.getData(d):2==this.selected?this.getData(n):3==this.selected&&this.getData(l)},getData:function(t){var e=this,i={status:t,i:this.fun.getKeyByI(),type:this.fun.getTyep()};$http.get("plugin.commission.api.commission.get-commission-orders",i,"加载中...").then(function(i){console.log(i),1==i.result?(t==o?e.statusData0=i.data.orders.data:t==d?e.statusData1=i.data.orders.data:t==n?e.statusData2=i.data.orders.data:t==l&&(e.statusData3=i.data.orders.data),e.open_order_buyer=i.data.set.open_order_buyer,e.open_order_detail=i.data.set.open_order_detail):console.log(i.msg)},function(t){console.log(t)})},toggle:function(t,e){return this.display==e?void(this.display="-1"):(console.log(t.target.className),void(this.display=e))}},components:{cTitle:r.default}},t.exports=e.default},1652:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,"#distributionOrder .order .tbs[data-v-abd33602]{background:#fff;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:1px solid #e2e2e2;border-bottom:.0625rem solid #e2e2e2;line-height:20.8px;line-height:1.3rem;padding:10px 12px;padding:.625rem .75rem;font-size:14px}#distributionOrder .order .tbs li[data-v-abd33602]{line-height:24px;line-height:1.5rem}#distributionOrder .order .tbs .item2[data-v-abd33602]{-ms-flex:2;flex:2;text-align:left;color:#666}#distributionOrder .order .tbs .item3[data-v-abd33602]{text-align:right}#distributionOrder .order .tbs .item3 .red[data-v-abd33602]{color:#f15353}#distributionOrder .order .tbs .item3 p[data-v-abd33602]{margin:0;color:#222}#distributionOrder .order .order_detail.opens[data-v-abd33602]{display:block}#distributionOrder .order .order_detail[data-v-abd33602]{display:none;overflow:hidden}#distributionOrder .order .order_detail .team_list[data-v-abd33602]{background-color:#fff;padding:10px 12px;padding:.625rem .75rem;overflow:hidden}#distributionOrder .order .order_detail .team_list .img[data-v-abd33602]{width:14%;float:left;text-align:left;height:0;padding-bottom:14%;position:relative}#distributionOrder .order .order_detail .team_list .img img[data-v-abd33602]{width:100%;height:100%;position:absolute}#distributionOrder .order .order_detail .team_list .info[data-v-abd33602]{height:40px;height:2.5rem;width:80%;float:left;font-size:14px;color:#222;line-height:22.864px;line-height:1.429rem;text-align:left;padding:0 10px;padding:0 .625rem}#distributionOrder .order .order_detail .team_list .info span[data-v-abd33602]{color:#666}#distributionOrder #distribution-goods[data-v-abd33602]{background-color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-flow:row wrap;flex-flow:row wrap;padding:10px 12px;padding:.625rem .75rem;border-top:1px solid #e2e2e2;border-top:.0625rem solid #e2e2e2;margin-bottom:6px;margin-bottom:.375rem}#distributionOrder #distribution-goods .img[data-v-abd33602]{-ms-flex:1;flex:1}#distributionOrder #distribution-goods .img img[data-v-abd33602]{width:100%}#distributionOrder #distribution-goods .inner[data-v-abd33602]{-ms-flex:5;flex:5;padding:0 10px;padding:0 .625rem;display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}#distributionOrder #distribution-goods .name[data-v-abd33602]{-ms-flex:5;flex:5;text-align:justify}#distributionOrder #distribution-goods .price[data-v-abd33602]{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}#distributionOrder #distribution-goods .price b[data-v-abd33602]{-ms-flex:3;flex:3;text-align:right;color:#666;font-size:12px;font-weight:400}#distributionOrder #distribution-goods .price .evaluate-yet[data-v-abd33602]{margin:0;color:#888;float:right;line-height:25.6px;line-height:1.6rem}",""])},2064:function(t,e,i){var s=i(1652);"string"==typeof s&&(s=[[t.id,s,""]]);i(2)(s,{});s.locals&&(t.exports=s.locals)},2438:function(t,e,i){var s,a;i(2064),s=i(541);var r=i(3089);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-abd33602",t.exports=s},3089:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"distributionOrder"}},[i("c-title",{attrs:{hide:!1,text:t.mailTitle}}),t._v(" "),i("div",{staticStyle:{height:"40px"}}),t._v(" "),[i("mt-navbar",{staticStyle:{"margin-top":"40px"},attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("mt-tab-item",{attrs:{id:"0"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v("全部")]),t._v(" "),i("mt-tab-item",{attrs:{id:"1"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v(" 待付款")]),t._v(" "),i("mt-tab-item",{attrs:{id:"2"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v("已付款")]),t._v(" "),i("mt-tab-item",{attrs:{id:"3"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v("已完成")])],1),t._v(" "),i("mt-tab-container",{staticStyle:{"margin-top":"3.125rem"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("mt-tab-container-item",{attrs:{id:"0"}},t._l(t.statusData0,function(e,s){return i("div",{staticClass:"order"},[i("font",{staticClass:"or",on:{click:function(e){t.toggle(e,s)}}},[e.order?i("div",{staticClass:"tbs"},[i("ul",{staticClass:"item2"},[i("li",[t._v(t._s(e.order.order_sn)+"("+t._s(e.hierarchy)+"级)")]),t._v(" "),i("li",[t._v(t._s(e.order.create_time))])]),t._v(" "),i("ul",{staticClass:"item3"},[i("li",[t._v("+"+t._s(e.commission))]),t._v(" "),i("li",{staticClass:"red"},[t._v(t._s(e.order.status_name))])])]):t._e()]),t._v(" "),1==t.open_order_detail||1==t.open_order_buyer?i("div",{staticClass:"order_detail",class:{opens:s==t.display}},[1==t.open_order_buyer?i("div",{staticClass:"team_list"},[e.member?i("div",{staticClass:"img"},[i("img",{attrs:{src:e.member.avatar}})]):t._e(),t._v(" "),e.member?i("div",{staticClass:"info"},[t._v(t._s(e.member.nickname)+"\n                                "),i("br"),t._v(" "),i("span",[t._v("微信号:")])]):t._e()]):t._e(),t._v(" "),t._l(e.order_goods,function(e){return 1==t.open_order_detail?i("div",{staticClass:"team_goods",attrs:{id:"distribution-goods"}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.thumb}})]),t._v(" "),i("div",{staticClass:"inner"},[i("div",{staticClass:"name"},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"price"},[i("b",[t._v("￥"+t._s(e.goods_price/e.total)+"\n                                    "),i("br"),t._v(" ×"+t._s(e.total))]),t._v(" "),i("div",{staticClass:"Total"},[t._v("￥"+t._s(e.goods_price))])])]):t._e()})],2):t._e()],1)})),t._v(" "),i("mt-tab-container-item",{attrs:{id:"1"}},t._l(t.statusData1,function(e,s){return i("div",{staticClass:"order"},[i("font",{on:{click:function(e){t.toggle(e,s)}}},[e.order?i("div",{staticClass:"tbs"},[i("ul",{staticClass:"item2"},[i("li",[t._v(t._s(e.order.order_sn)+"("+t._s(e.hierarchy)+"级)")]),t._v(" "),i("li",[t._v(t._s(e.order.create_time))])]),t._v(" "),i("ul",{staticClass:"item3"},[i("li",[t._v("+"+t._s(e.commission))]),t._v(" "),i("li",{staticClass:"red"},[t._v(t._s(e.order.status_name))])])]):t._e()]),t._v(" "),1==t.open_order_detail||1==t.open_order_buyer?i("div",{staticClass:"order_detail",class:{opens:s==t.display}},[1==t.open_order_buyer?i("div",{staticClass:"team_list"},[e.member?i("div",{staticClass:"img"},[i("img",{attrs:{src:e.member.avatar}})]):t._e(),t._v(" "),e.member?i("div",{staticClass:"info"},[t._v(t._s(e.member.nickname)+"\n                                "),i("br"),t._v(" "),i("span",[t._v("微信号:")])]):t._e()]):t._e(),t._v(" "),t._l(e.order_goods,function(e){return 1==t.open_order_detail?i("div",{staticClass:"team_goods",attrs:{id:"distribution-goods"}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.thumb}})]),t._v(" "),i("div",{staticClass:"inner"},[i("div",{staticClass:"name"},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"price"},[i("b",[t._v("￥"+t._s(e.goods_price/e.total)+"\n                                    "),i("br"),t._v(" ×"+t._s(e.total))]),t._v(" "),i("div",{staticClass:"Total"},[t._v("￥"+t._s(e.goods_price))])])]):t._e()})],2):t._e()],1)})),t._v(" "),i("mt-tab-container-item",{attrs:{id:"2"}},t._l(t.statusData2,function(e,s){return i("div",{staticClass:"order"},[i("font",{on:{click:function(e){t.toggle(e,s)}}},[e.order?i("div",{staticClass:"tbs"},[i("ul",{staticClass:"item2"},[i("li",[t._v(t._s(e.order.order_sn)+"("+t._s(e.hierarchy)+"级)")]),t._v(" "),i("li",[t._v(t._s(e.order.create_time))])]),t._v(" "),i("ul",{staticClass:"item3"},[i("li",[t._v("+"+t._s(e.commission))]),t._v(" "),i("li",{staticClass:"red"},[t._v(t._s(e.order.status_name))])])]):t._e()]),t._v(" "),1==t.open_order_detail||1==t.open_order_buyer?i("div",{staticClass:"order_detail",class:{opens:s==t.display}},[1==t.open_order_buyer?i("div",{staticClass:"team_list"},[e.member?i("div",{staticClass:"img"},[i("img",{attrs:{src:e.member.avatar}})]):t._e(),t._v(" "),e.member?i("div",{staticClass:"info"},[t._v(t._s(e.member.nickname)+"\n                                "),i("br"),t._v(" "),i("span",[t._v("微信号:")])]):t._e()]):t._e(),t._v(" "),t._l(e.order_goods,function(e){return 1==t.open_order_detail?i("div",{staticClass:"team_goods",attrs:{id:"distribution-goods"}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.thumb}})]),t._v(" "),i("div",{staticClass:"inner"},[i("div",{staticClass:"name"},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"price"},[i("b",[t._v("￥"+t._s(e.goods_price/e.total)+"\n                                    "),i("br"),t._v(" ×"+t._s(e.total))]),t._v(" "),i("div",{staticClass:"Total"},[t._v("￥"+t._s(e.goods_price))])])]):t._e()})],2):t._e()],1)})),t._v(" "),i("mt-tab-container-item",{attrs:{id:"3"}},t._l(t.statusData3,function(e,s){return i("div",{staticClass:"order"},[i("font",{on:{click:function(e){t.toggle(e,s)}}},[e.order?i("div",{staticClass:"tbs"},[i("ul",{staticClass:"item2"},[i("li",[t._v(t._s(e.order.order_sn)+"("+t._s(e.hierarchy)+"级)")]),t._v(" "),i("li",[t._v(t._s(e.order.create_time))])]),t._v(" "),i("ul",{staticClass:"item3"},[i("li",[t._v("+"+t._s(e.commission))]),t._v(" "),i("li",{staticClass:"red"},[t._v(t._s(e.order.status_name))])])]):t._e()]),t._v(" "),1==t.open_order_detail||1==t.open_order_buyer?i("div",{staticClass:"order_detail",class:{opens:s==t.display}},[1==t.open_order_buyer?i("div",{staticClass:"team_list"},[e.member?i("div",{staticClass:"img"},[i("img",{attrs:{src:e.member.avatar}})]):t._e(),t._v(" "),e.member?i("div",{staticClass:"info"},[t._v(t._s(e.member.nickname)+"\n                                "),i("br"),t._v(" "),i("span",[t._v("微信号:")])]):t._e()]):t._e(),t._v(" "),t._l(e.order_goods,function(e){return 1==t.open_order_detail?i("div",{staticClass:"team_goods",attrs:{id:"distribution-goods"}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.thumb}})]),t._v(" "),i("div",{staticClass:"inner"},[i("div",{staticClass:"name"},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"price"},[i("b",[t._v("￥"+t._s(e.goods_price/e.total)+"\n                                    "),i("br"),t._v(" ×"+t._s(e.total))]),t._v(" "),i("div",{staticClass:"Total"},[t._v("￥"+t._s(e.goods_price))])])]):t._e()})],2):t._e()],1)}))],1)]],2)},staticRenderFns:[]}}});