webpackJsonp([278,356],{3:function(t,i,e){var n,a;e(6),n=e(4);var s=e(7);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,a._scopeId="data-v-3bb525bc",t.exports=n},4:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});e(8);i.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=i.default},5:function(t,i,e){i=t.exports=e(1)(),i.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,i,e){var n=e(5);"string"==typeof n&&(n=[[t.id,n,""]]);e(2)(n,{});n.locals&&(t.exports=n.locals)},7:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t.hide?t._e():e("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():e("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[e("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},540:function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(934),s=n(a);i.default=s.default,t.exports=i.default},934:function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(3),s=n(a),o=e(9);i.default={data:function(){return{userAvatar:"",userName:"",vipId:"",mailLanguage:"",mail_distrbution_name:"",mail_commission:"",toi:this.fun.getKeyByI(),first_level:0,second_level:0,third_level:0,expect:0,unliquidated:0,liquidated:0,not_yet_withdrawed:0,withdrawed:0,manage:0,count:0,invalid:0}},activated:function(){this.toi=this.fun.getKeyByI(),this.userAvatar="",this.userName="",this.vipId="",this.first_level=0,this.second_level=0,this.third_level=0,this.expect=0,this.unliquidated=0,this.liquidated=0,this.not_yet_withdrawed=0,this.withdrawed=0,this.count=0,this.getDistributionCommissionData(),this.getAgentCountData(),this.getLevelData(),this.initMailLanguage(),this.setUserInfo()},mounted:function(){this.toi=this.fun.getKeyByI()},methods:{initMailLanguage:function(){this.mailLanguage=this.fun.initMailLanguage(),this.fun.setWXTitle(this.fun.setMailLanguage("分销商",this.mailLanguage.commission.agent)),this.mail_distrbution_name=this.fun.setMailLanguage("分销等级",this.mailLanguage.commission.level_name),this.mail_commission=this.fun.setMailLanguage("分销",this.mailLanguage.commission.commission)},msg:function(){(0,o.MessageBox)("默认"+this.mail_commission+"比例","因商品、供应商可以独立设置佣金，您最终获得的佣金可能与此比例不同")},getLevelData:function(){var t=this,i={i:this.fun.getKeyByI(),type:this.fun.getTyep()};$http.get("plugin.commission.api.commission.get-agent-level",i).then(function(i){console.log(i),1==i.result&&(t.setDistributionInfo(i.data),t.setDistributionScaleInfo(i.data))},function(t){console.log(t)})},getDistributionCommissionData:function(){var t=this,i={i:this.fun.getKeyByI(),type:this.fun.getTyep()};$http.get("plugin.commission.api.commission.get-commission",i).then(function(i){console.log(i),1==i.result&&(t.setDistributionCommissionData(i.data),t.invalid=i.data.invalid)},function(t){console.log(t)})},getAgentCountData:function(){var t=this,i={i:this.fun.getKeyByI(),type:this.fun.getTyep()};$http.get("member.member.getMyAgentCount",i).then(function(i){console.log(i),1==i.result&&t.setAgentCountData(i.data)},function(t){console.log(t)})},setUserInfo:function(){var t=this,i={i:this.fun.getKeyByI(),type:this.fun.getTyep()};$http.get("member.member.getUserInfo",i).then(function(i){console.log(i),1==i.result&&(t.userName=i.data.nickname,t.vipId=i.data.uid,t.userAvatar=i.data.avatar)},function(t){})},setDistributionInfo:function(t){this.distrbution_name=t.name,this.distrbution_tiem=t.created_at},setDistributionScaleInfo:function(t){this.first_level=t.first_level,this.second_level=t.second_level,this.third_level=t.third_level},setDistributionCommissionData:function(t){this.expect=t.expect,this.unliquidated=t.unliquidated,this.liquidated=t.liquidated,this.not_yet_withdrawed=t.not_yet_withdrawed,this.withdrawed=t.withdrawed,this.manage=t.manage,this.is_manage="1"==t.is_manage},setAgentCountData:function(t){this.count=t.count}},components:{cTitle:s.default}},t.exports=i.default},1614:function(t,i,e){i=t.exports=e(1)(),i.push([t.id,".distribution a[data-v-7b0210bf]{color:#000}.distribution .header[data-v-7b0210bf]{height:auto;background:#f15353;background-size:100% 100%;padding:20px;padding:1.25rem;position:relative}.distribution .header .user[data-v-7b0210bf]{display:-ms-flexbox;display:flex}.distribution .header .user .user-head[data-v-7b0210bf]{height:52px;height:3.25rem;width:52px;width:3.25rem;background:#fff;border-radius:50%;border:2px solid #fff;border:.125rem solid #fff;box-sizing:content-box;overflow:hidden}.distribution .header .user .user-head img[data-v-7b0210bf]{width:100%}.distribution .header .user .user-info[data-v-7b0210bf]{color:#fff;text-align:left;margin-left:10px;margin-left:.625rem}.distribution .header .user .user-info .user-name[data-v-7b0210bf]{font-weight:700;font-size:14px;line-height:30px;line-height:1.875rem}.distribution .header .user .user-info .user-other[data-v-7b0210bf]{font-size:12px;opacity:.5}.distribution .scale[data-v-7b0210bf]{height:auto;width:100%;background:#fff;margin-top:10px;margin-top:.625rem}.distribution .scale .list1[data-v-7b0210bf]{height:44px;height:2.75rem;box-sizing:content-box;background:#fff;padding:0 12px;padding:0 .75rem;font-size:14px;line-height:44px;line-height:2.75rem;color:#333;text-align:left;border-bottom:1px solid #e2e2e2;border-bottom:.0625rem solid #e2e2e2}.distribution .scale .list1 i[data-v-7b0210bf]{color:#f15353;font-size:19.2px;font-size:1.2rem;float:right;line-height:44px;line-height:2.75rem}.distribution .scale .list2[data-v-7b0210bf]{height:44px;height:2.75rem;box-sizing:content-box;background:#fff;padding:0 12px;padding:0 .75rem;font-size:14px;line-height:44px;line-height:2.75rem;color:#888;text-align:left}.distribution .scale .list2 span[data-v-7b0210bf]{float:right}.distribution .myrelationship a .list1[data-v-7b0210bf]{height:44px;height:2.75rem;background:#fff;padding:0 12px;padding:0 .75rem;font-size:15px;line-height:44px;line-height:2.75rem;box-sizing:content-box;color:#242424;text-align:left}.distribution .myrelationship a .list1 i[data-v-7b0210bf]{line-height:44px;line-height:2.75rem;color:#c9c9c9;font-size:24px;font-size:1.5rem;float:right}.distribution .myrelationship a .list1 span[data-v-7b0210bf]{line-height:44px;line-height:2.75rem;color:#8c8c8c;font-size:14px;float:right;padding-right:10px;padding-right:.625rem}.distribution .title[data-v-7b0210bf]{margin-top:10px;margin-top:.625rem;display:-ms-flexbox;display:flex;height:36px;height:2.25rem;line-height:36px;line-height:2.25rem;background-color:#fff;padding:0 10px;padding:0 .625rem;border-bottom:1px solid #e2e2e2;border-bottom:.0625rem solid #e2e2e2}.distribution .title .spare[data-v-7b0210bf]{width:4px;width:.25rem;height:16px;height:1rem;background-color:#f15353;margin-right:6px;margin-right:.375rem;margin-top:9px;margin-top:.5625rem;border-radius:.0625rem}.distribution .title h3[data-v-7b0210bf]{font-size:14px}.distribution #gongge[data-v-7b0210bf]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;background:#fff;column-count:3;padding-bottom:10px;padding-bottom:.625rem;padding-top:10px;padding-top:.625rem}.distribution #gongge li[data-v-7b0210bf]{width:33%;text-align:center;margin-bottom:10px;margin-bottom:.625rem;margin-top:10px;margin-top:.625rem;font-size:12px}.distribution #gongge li i[data-v-7b0210bf]{font-size:26px;color:#999;display:inline-block;margin-bottom:6px;margin-bottom:.375rem;width:100%}.distribution #gongge li a span[data-v-7b0210bf]{color:#333;font-size:12px}.distribution #gongge li b[data-v-7b0210bf]{color:#f15353;font-size:16px}#distribution-order[data-v-7b0210bf]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;background:#fff;column-count:4;padding-bottom:10px;padding-bottom:.625rem}#distribution-order li[data-v-7b0210bf]{width:25%;text-align:center;margin-bottom:10px;margin-bottom:.625rem;font-size:12px;color:#666}#distribution-order li i[data-v-7b0210bf]{font-size:27.2px;font-size:1.7rem;color:#999;margin:15px 0 7px;margin:.9375rem 0 .4375rem;display:inline-block}",""])},2026:function(t,i,e){var n=e(1614);"string"==typeof n&&(n=[[t.id,n,""]]);e(2)(n,{});n.locals&&(t.exports=n.locals)},2437:function(t,i,e){var n,a;e(2026),n=e(540);var s=e(3051);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,a._scopeId="data-v-7b0210bf",t.exports=n},3051:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"distribution",attrs:{id:"distribution"}},[e("c-title",{attrs:{hide:!1,text:"分销商"}}),t._v(" "),e("div",{staticStyle:{height:"40px"}}),t._v(" "),e("div",{staticClass:"header"},[e("div",{staticClass:"user"},[e("div",{staticClass:"user-head"},[e("img",{attrs:{src:t.userAvatar}})]),t._v(" "),e("div",{staticClass:"user-info"},[e("div",{staticClass:"user-name",attrs:{"data-v-30855510":""}},[t._v(t._s(t.userName)+"[会员ID:"+t._s(t.vipId)+"]")]),t._v(" "),e("div",{staticClass:"user-other",attrs:{"data-v-30855510":""}},[t._v(t._s(t.mail_distrbution_name)+" "+t._s(t.distrbution_name)),e("br"),t._v(" "+t._s(t.$yzt("distribution.distrbution_tiem"))+"："+t._s(t.distrbution_tiem))])])])]),t._v(" "),e("div",{staticClass:"myrelationship"},[e("router-link",{attrs:{to:t.fun.getUrl("myRelationship",{})}},[e("div",{staticClass:"list1",staticStyle:{margin:"0px"}},[t._v("\n                "+t._s(t.$yzt("distribution.team"))+"\n\n                "),e("i",{staticClass:"fa fa-angle-right"}),t._v(" "),e("span",[t._v(t._s(t.count)+"人")])])])],1),t._v(" "),e("div",{staticClass:"scale"},[e("div",{staticClass:"list1",staticStyle:{margin:"0px"}},[t._v("\n            "+t._s(t.$yzt("distribution.default-rate"))+"\n\n            "),t._v(" "),e("i",{staticClass:"fa fa-question-circle",attrs:{"aria-hidden":"true"},on:{click:t.msg}})]),t._v(" "),e("div",{staticClass:"list2",staticStyle:{margin:"0px"}},[t._v("\n            "+t._s(t.$yzt("distribution.first-level"))+"\n            "),e("span",[t._v(t._s(t.first_level)+"%")])]),t._v(" "),t._e(),t._v(" "),t._e()]),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"spare"}),t._v(" "),e("h3",[t._v(t._s(t.$yzt("distribution.ordername")))])]),t._v(" "),e("ul",{attrs:{id:"distribution-order"}},[e("li",[e("router-link",{attrs:{to:t.fun.getUrl("distributionOrder",{selected:"0"})}},[e("i",{staticClass:"iconfont icon-caidan"}),t._v(" "),e("br"),t._v(t._s(t.$yzt("distribution.all_order"))+"\n            ")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:t.fun.getUrl("distributionOrder",{selected:"1"})}},[e("i",{staticClass:"iconfont icon-weifukuan",attrs:{"aria-hidden":"true"}}),t._v(" "),e("br"),t._v(t._s(t.$yzt("distribution.no_pay_order"))+"\n                ")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:t.fun.getUrl("distributionOrder",{selected:"2"})}},[e("i",{staticClass:"iconfont icon-weifukuan",attrs:{"aria-hidden":"true"}}),t._v(" "),e("br"),t._v(t._s(t.$yzt("distribution.pay_order"))+"\n                ")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:t.fun.getUrl("distributionOrder",{selected:"3"})}},[e("i",{staticClass:"iconfont icon-wancheng2"}),t._v(" "),e("br"),t._v(t._s(t.$yzt("distribution.complate_order"))+"\n                ")])],1)])],1)},staticRenderFns:[]}}});