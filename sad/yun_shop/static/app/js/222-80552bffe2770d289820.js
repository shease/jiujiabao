webpackJsonp([222,356],{3:function(t,e,a){var i,n;a(6),i=a(4);var r=a(7);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-3bb525bc",t.exports=i},4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a(8);e.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=e.default},5:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,e,a){var i=a(5);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)},7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.hide?t._e():a("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[a("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},655:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(1029),r=i(n);e.default=r.default,t.exports=e.default},1029:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),r=i(n),s=a(9);e.default={data:function(){return{mailLanguage:"",mailTeamReturnTitle:"",mailTeamAmount:"",mailTeamReturnRate:"",mailTeamName:"",mailTeamReturnName:"",order_amount:0,return_amount:0,status_name:"",each_return_rate:0,return_mode:"",not_return:0,id:"",order_sn:"",created_at:"",finish_time:"",mall_amount:"",rate:"",power_data:"",power_total:""}},activated:function(){this.initMailLanguage(),this.getData(),this.init()},methods:{initMailLanguage:function(){this.mailLanguage=this.fun.initMailLanguage(),this.fun.setWXTitle(this.fun.setMailLanguage("赠送详情",this.mailLanguage.team_return.return_detail)),this.mailTeamReturnTitle=this.fun.setMailLanguage("赠送详情",this.mailLanguage.team_return.return_detail),this.mailTeamAmount=this.fun.setMailLanguage("赠送金额",this.mailLanguage.team_return.return_amount),this.mailTeamReturnRate=this.fun.setMailLanguage("赠送比例",this.mailLanguage.team_return.return_rate),this.mailTeamName=this.fun.setMailLanguage("经销商",this.mailLanguage.team_return.mailTeamName),this.mailTeamReturnName=this.fun.setMailLanguage("赠送",this.mailLanguage.team_return.return_name)},init:function(){this.order_amount=0,this.return_amount=0,this.status_name="",this.each_return_rate=0,this.return_mode="",this.not_return=0,this.id="",this.order_sn="",this.created_at="",this.finish_time=""},getData:function(){var t=this,e={logid:this.$route.params.id};$http.get("plugin.team-return.api.team-return.get-team-return-detail",e,"加载中").then(function(e){console.log("======",e),1==e.result?(t.return_amount=e.data.amount,t.power_total=e.data.power_total,t.power_data=e.data.power_data,t.mall_amount=e.data.mall_amount,t.id=e.data.id,t.rate=e.data.rate,t.created_at=e.data.created_at):(0,s.Toast)(e.msg)},function(t){(0,s.Toast)(t)})},goBack:function(){this.$router.go(-1)}},components:{cTitle:r.default}},t.exports=e.default},1675:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,"li[data-v-d4950ba8],p[data-v-d4950ba8],ul[data-v-d4950ba8]{margin:0;padding:0}li[data-v-d4950ba8]{list-style:none}#share .m_header[data-v-d4950ba8]{width:100%;height:45px;height:2.8125rem;padding-right:15px;padding-right:.9375rem;box-sizing:border-box;background:#fff;line-height:45px;line-height:2.8125rem;font-size:18px}#share .m_header span[data-v-d4950ba8]{display:inline-block;width:16px;width:1rem;height:24px;height:1.5rem;float:left;margin-left:10px;margin-left:.625rem;font-size:30px}#share .m_header i[data-v-d4950ba8]{font-size:16px;float:right;font-style:normal}#share .top[data-v-d4950ba8]{text-align:left;height:95px;height:5.9375rem;padding:15px;padding:.9375rem;background:#fff;position:relative;text-align:center;margin:15px 0;margin:.9375rem 0}#share .top i[data-v-d4950ba8]{font-style:normal;font-size:16px;display:block}#share .top .content[data-v-d4950ba8]{width:120px;width:7.5rem;margin:0 auto;font-size:16px;text-align:center}#share .top .content span[data-v-d4950ba8]{font-size:28px;color:green;display:inline-block;padding-top:12px;padding-top:.75rem;margin-bottom:5px;margin-bottom:.3125rem}#share .top .content b[data-v-d4950ba8]{line-height:24px;line-height:1.5rem;font-weight:400;color:#fff;background:#f15353;width:60px;width:3.75rem;height:24px;height:1.5rem;display:inline-block}#share .bott[data-v-d4950ba8],#share .middle[data-v-d4950ba8]{text-align:left;padding:15px;padding:.9375rem;line-height:32px;line-height:2rem;color:#343434;background:#fff;margin-bottom:8px;margin-bottom:.5rem}#share .middle[data-v-d4950ba8]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}#share .middle .lrest[data-v-d4950ba8]{-ms-flex:70%;flex:70%}#share .middle .resot[data-v-d4950ba8]{-ms-flex:30%;flex:30%;text-align:right}",""])},2087:function(t,e,a){var i=a(1675);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)},2551:function(t,e,a){var i,n;a(2087),i=a(655);var r=a(3111);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-d4950ba8",t.exports=i},3111:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"share"}},[a("div",[a("c-title",{attrs:{hide:!1,text:t.mailTeamReturnTitle}}),t._v(" "),a("div",{staticStyle:{height:"40px"}}),t._v(" "),a("div",{staticClass:"top"},[a("i",[t._v(t._s(t.mailTeamAmount))]),t._v(" "),a("div",{staticClass:"content"},[a("span",[t._v(t._s(t.return_amount))]),t._v("元\n\t\t\t\t"),a("br")])]),t._v(" "),a("div",{staticClass:"middle"},[[a("div",{staticClass:"lrest"},[t._v("商城总销售额")]),t._v(" "),a("div",{staticClass:"resot"},[t._v(t._s(t.mall_amount))]),t._v(" "),a("div",{staticClass:"lrest"},[t._v(t._s(t.mailTeamReturnRate))]),t._v(" "),a("div",{staticClass:"resot"},[t._v(t._s(t.rate)+"%")]),t._v(" "),t._l(t.power_data,function(e){return[a("div",{staticClass:"lrest"},[t._v(t._s(e.level))]),t._v(" "),a("div",{staticClass:"resot"},[t._v(t._s(e.level_num))]),t._v(" "),a("div",{staticClass:"lrest"},[t._v(t._s(e.team))]),t._v(" "),a("div",{staticClass:"resot"},[t._v(t._s(e.team_num))])]}),t._v(" "),a("div",{staticClass:"lrest"},[t._v("总权益")]),t._v(" "),a("div",{staticClass:"resot"},[t._v(t._s(t.power_total))])]],2),t._v(" "),a("div",{staticClass:"middle"},[[a("div",{staticClass:"lrest"},[t._v(t._s(t.mailTeamReturnName)+"ID")]),t._v(" "),a("div",{staticClass:"resot"},[t._v(t._s(t.id))]),t._v(" "),a("div",{staticClass:"lrest",staticStyle:{flex:"30%"}},[t._v(t._s(t.mailTeamReturnName)+"时间")]),t._v(" "),a("div",{staticClass:"resot",staticStyle:{flex:"70%"}},[t._v(t._s(t.created_at))])]],2)],1)])},staticRenderFns:[]}}});