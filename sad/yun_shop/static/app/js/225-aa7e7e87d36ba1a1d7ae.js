webpackJsonp([225,356],{3:function(t,e,a){var i,n;a(6),i=a(4);var s=a(7);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-3bb525bc",t.exports=i},4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a(8);e.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=e.default},5:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,e,a){var i=a(5);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)},7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.hide?t._e():a("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[a("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},652:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(1026),s=i(n);e.default=s.default,t.exports=e.default},1026:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),s=i(n),o=a(9),d="0",r=!1,l=!1,c=!1;e.default={data:function(){return{mailLanguage:"",mailTeamDividendTitle:"",mailDividend:"",level_name:"",dividend_ratio:"",next_dividend_ratio:"",ratioDatas:[],activeName:"first",first_content:[],second_content:[],third_content:[],bonus_active:!0,leveling_active:!0,prize_active:!0,record_index:"",record_key:"",tab_name:"提成",bonus_lable:"",leveling_label:"",prize_label:"",bonus_save:[],leveling_save:[],prize_save:[]}},activated:function(){this.isGratitude(),this.initMailLanguage(),this.initData(),this.getData(0),this.initInfo(),this.setDataByTabIndex()},methods:{initMailLanguage:function(){this.mailLanguage=this.fun.initMailLanguage(),this.fun.setWXTitle(this.fun.setMailLanguage("经销商管理中心",this.mailLanguage.team_dividend.team_agent_centre)),this.mailTeamDividendTitle=this.fun.setMailLanguage("经销商管理中心",this.mailLanguage.team_dividend.team_agent_centre),this.mailDividend=this.fun.setMailLanguage("提成",this.mailLanguage.team_dividend.dividend)},isGratitude:function(){var t=document.getElementsByClassName("el-tabs__item"),e=this;$http.post("plugin.team-dividend.api.team-dividend.get-dividend-type",{}).then(function(a){e.bonus_lable=e.fun.setMailLanguage("提成",e.mailLanguage.team_dividend.dividend),e.leveling_label="平级奖",e.prize_label="感恩奖",e.record_index=a.data.is_flat_prize,e.record_key=a.data.is_award_gratitude,1==a.data.is_flat_prize&&1==a.data.is_award_gratitude?(e.leveling_active=!0,e.prize_active=!0,t[0].style.width="33.33%",t[1].style.width="33.33%",t[2].style.width="33.33%"):0==a.data.is_flat_prize&&1==a.data.is_award_gratitude?(e.leveling_active=!1,e.prize_active=!0,t[0].style.width="50%",t[1].style.width="50%"):1==a.data.is_flat_prize&&0==a.data.is_award_gratitude?(e.leveling_active=!0,e.prize_active=!1,t[0].style.width="50%",t[1].style.width="50%"):0==a.data.is_flat_prize&&0==a.data.is_award_gratitude&&(e.leveling_active=!1,e.prize_active=!1,t[0].style.width="100%")},function(t){(0,o.Toast)(t.msg)})},initData:function(){this.level_name="",this.dividend_ratio="",this.next_dividend_ratio,this.ratioDatas=[],d="0",r=!1,l=!1,c=!1,this.activeName="first",this.first_content=[],this.second_content=[],this.third_content=[]},initInfo:function(){var t=this;$http.get("plugin.team-dividend.api.index",{}).then(function(e){1==e.result?(t.level_name=e.data.level_name,t.dividend_ratio=e.data.dividend_ratio,t.next_dividend_ratio=e.data.next_dividend_ratio):(0,o.Toast)(e.msg)},function(t){(0,o.Toast)(t.msg)})},getData:function(t){var e=this,a={dividend_type:t};$http.get("plugin.team-dividend.api.team-dividend.get-dividend-statistic",a,"").then(function(a){if(e.ratioDatas=[],1==a.result){var i=new Object;i.money=a.data.today,i.data="今日",i.name="data",e.ratioDatas.push(i);var n=new Object;n.money=a.data.yesterday,n.data="昨日",n.name="data",e.ratioDatas.push(n);var s=new Object;s.money=a.data.this_week,s.data="本周",s.name="data",e.ratioDatas.push(s);var d=new Object;d.money=a.data.this_month,d.data="本月累计"+e.tab_name,d.name="mounth",e.ratioDatas.push(d),0==t?(e.bonus_save=[],e.bonus_save.push(i),e.bonus_save.push(n),e.bonus_save.push(s),e.bonus_save.push(d)):1==t?(e.leveling_save=[],e.leveling_save.push(i),e.leveling_save.push(n),e.leveling_save.push(s),e.leveling_save.push(d)):2==t&&(e.prize_save=[],e.prize_save.push(i),e.prize_save.push(n),e.prize_save.push(s),e.prize_save.push(d))}else(0,o.Toast)(a.msg)},function(t){(0,o.Toast)(t.msg)})},getDividendList:function(t){var e=this,a={dividend_type:t};$http.get("plugin.team-dividend.api.team-dividend.get-dividend-list",a,"获取中").then(function(a){if(1==a.result)switch(t){case"0":e.first_content=a.data;break;case"1":e.second_content=a.data;break;case"2":e.third_content=a.data}else(0,o.Toast)(a.msg)},function(t){(0,o.Toast)(t.msg)})},getDividendListByType2:function(){var t=this,e={};$http.get("plugin.team-dividend.api.team-dividend.get-reward",e,"获取中").then(function(e){1==e.result?t.third_content=e.data:(0,o.Toast)(e.msg)},function(t){(0,o.Toast)(t.msg)})},setDataByTabIndex:function(){0==this.record_index&&1==this.record_key&&1==d&&(d=2),"0"!=d||r?"1"!=d||l?"2"!=d||c||(c=!0,this.getDividendList("2"),this.tab_name="感恩奖",this.getData("2")):(l=!0,this.getDividendList("1"),this.tab_name="平级奖",this.getData("1")):(r=!0,this.getDividendList("0"),this.tab_name=this.fun.setMailLanguage("提成",this.mailLanguage.team_dividend.dividend),this.getData("0")),"0"==d&&1==r?this.ratioDatas=this.bonus_save:"1"==d&&1==l?this.ratioDatas=this.leveling_save:"2"==d&&1==c&&(this.ratioDatas=this.prize_save)},handleClick:function(t,e){d!=t.index&&(d=t.index,this.setDataByTabIndex())}},components:{cTitle:s.default}},t.exports=e.default},1653:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,"[data-v-af370142]{box-sizing:border-box}#teamAgentCenter .share_holder .header_box[data-v-af370142]{padding:16px 12px;padding:1rem .75rem;background:#f15353;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;font-size:14px}#teamAgentCenter .share_holder .header_box .left[data-v-af370142]{line-height:48px;line-height:3rem}#teamAgentCenter .share_holder .header_box .right[data-v-af370142]{text-align:right}#teamAgentCenter .share_holder .header_box .right li[data-v-af370142]{line-height:24px;line-height:1.5rem}#teamAgentCenter .share_holder .today_bonus[data-v-af370142]{width:100%;height:82px;height:5.125rem;background:#fff;padding:16px 0;padding:1rem 0;box-sizing:border-box;position:relative;border-bottom:1px solid #e2e2e2;border-bottom:.0625rem solid #e2e2e2}#teamAgentCenter .share_holder .today_bonus li.line[data-v-af370142]{position:absolute;width:1px;width:.0625rem;height:52px;height:3.25rem;background:#ddd;top:16px;top:1rem;right:34%}#teamAgentCenter .share_holder .today_bonus li.line .careat[data-v-af370142]{width:6px;width:.375rem;height:6px;height:.375rem;border:1px solid #ebebeb;border:.0625rem solid #ebebeb;border-left:0;border-bottom:0;transform:rotate(45deg);background:#fff;position:absolute;top:23px;top:1.4375rem;right:-3px;right:-.1875rem}#teamAgentCenter .share_holder .today_bonus li[data-v-af370142]{text-align:center;float:left}#teamAgentCenter .share_holder .today_bonus li span[data-v-af370142]{font-size:17px;line-height:26px;line-height:1.625rem;display:inline-block;margin-bottom:10px;margin-bottom:.625rem}#teamAgentCenter .share_holder .today_bonus li b[data-v-af370142]{font-size:11px;color:#333}#teamAgentCenter .share_holder .today_bonus li.data[data-v-af370142]{width:22%}#teamAgentCenter .share_holder .today_bonus li.data span[data-v-af370142]{color:#ffa800}#teamAgentCenter .share_holder .today_bonus li[data-v-af370142]:first-child,#teamAgentCenter .share_holder .today_bonus li[data-v-af370142]:nth-child(2){border-right:1px solid #e2e2e2;border-right:.0625rem solid #e2e2e2}#teamAgentCenter .share_holder .today_bonus li.mounth[data-v-af370142]{width:34%}#teamAgentCenter .share_holder .today_bonus li.mounth span[data-v-af370142]{color:#fc6a70}#teamAgentCenter .code[data-v-af370142]{height:44px;height:2.75rem;background:#fff;padding:0 15px;padding:0 .9375rem;font-size:15px;line-height:44px;line-height:2.75rem;color:#333;text-align:left;box-sizing:border-box;margin-bottom:10px;margin-bottom:.625rem}#teamAgentCenter .code i[data-v-af370142]{float:right;line-height:44px;line-height:2.75rem;display:inline-block;font-size:24px;color:#c9c9c9;text-align:center;background-size:1.25rem}#teamAgentCenter .content[data-v-af370142]{margin-top:10px}#teamAgentCenter .content .ratioNav[data-v-af370142]{padding:0;margin:0;height:38px;height:2.375rem;width:100%;background:#fff;border-bottom:1px solid #cdcdcd;border-bottom:.0625rem solid #cdcdcd;border-top:1px solid #cdcdcd;border-top:.0625rem solid #cdcdcd}#teamAgentCenter .content .ratioNav li[data-v-af370142]{float:left;width:33%;text-align:center;line-height:35px;line-height:2.1875rem;font-size:14px;color:#666}#teamAgentCenter .content .rationList[data-v-af370142]{padding:0;margin:0}#teamAgentCenter .content .rationList li span.month[data-v-af370142]{display:block;text-align:left;line-height:36px;line-height:2.25rem;padding:0 12px;padding:0 .75rem;background:#f0f0f0;font-size:16px}#teamAgentCenter .content .rationList li .info[data-v-af370142]{border-bottom:1px solid #eee;border-bottom:.0625rem solid #eee;overflow:hidden;padding:10px 12px;padding:.625rem .75rem;background:#fff;font-size:14px}#teamAgentCenter .content .rationList li .info .left[data-v-af370142]{width:70%;float:left;text-align:left;box-sizing:border-box}#teamAgentCenter .content .rationList li .info .left .time[data-v-af370142]{font-size:12px;color:#8c8c8c}#teamAgentCenter .content .rationList li .info .left li[data-v-af370142]{line-height:24px;line-height:1.5rem}#teamAgentCenter .content .rationList li .info .left span[data-v-af370142]{font-size:14px;font-weight:400;color:#333}#teamAgentCenter .content .rationList li .info .left p[data-v-af370142]{font-size:12px;color:#999}#teamAgentCenter .content .rationList li .info .left span.created[data-v-af370142]{font-size:12px}#teamAgentCenter .content .rationList li .info .left h4[data-v-af370142]{font-weight:400}#teamAgentCenter .content .rationList li .info .left h4 b[data-v-af370142]{font-weight:400;color:#f15353}#teamAgentCenter .content .rationList li .info .right[data-v-af370142]{float:left;width:30%;color:#20b86a;text-align:right}#teamAgentCenter .content .rationList li .info .right .state[data-v-af370142]{font-size:12px;color:#8c8c8c}#teamAgentCenter .content .rationList li .info .right li[data-v-af370142]{line-height:24px;line-height:1.5rem}#teamAgentCenter .content .rationList li .info .right p[data-v-af370142]{margin:0;padding:0;font-size:12px;color:#888}#teamAgentCenter .content .rationList li .info .right b[data-v-af370142]{font-weight:400}#teamAgentCenter .content .rationList li .info .right b.created[data-v-af370142]{line-height:35px;line-height:2.1875rem}",""])},2065:function(t,e,a){var i=a(1653);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)},2548:function(t,e,a){var i,n;a(2065),i=a(652);var s=a(3090);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-af370142",t.exports=i},3090:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"teamAgentCenter"}},[a("c-title",{attrs:{hide:!1,text:t.mailTeamDividendTitle}}),t._v(" "),a("div",{staticStyle:{height:"40px"}}),t._v(" "),a("div",{staticClass:"share_holder"},[a("div",{staticClass:"header_box"},[a("div",{staticClass:"left"},[a("span",[t._v(t._s(t.level_name))])]),t._v(" "),a("ul",{staticClass:"right"},[a("li",[t._v(t._s(t.mailDividend)+"比例:"+t._s(t.dividend_ratio)+"%")]),t._v(" "),a("li",[t._v("下级"+t._s(t.mailDividend)+"比例:"+t._s(t.next_dividend_ratio)+"%")])])]),t._v(" "),a("router-link",{attrs:{to:t.fun.getUrl("teamCode")}},[a("div",{staticClass:"list1 code"},[a("div",{staticClass:"ico extension"}),t._v(t._s(t.$yzt("teamAgentCenter.myCode"))+"\n                "),a("i",{staticClass:"fa fa-angle-right"})])]),t._v(" "),a("ul",{staticClass:"today_bonus"},[t._l(t.ratioDatas,function(e){return a("li",{class:e.name},[a("span",[t._v(t._s(e.money))]),t._v(" "),a("br"),t._v(" "),a("b",[t._v(t._s(e.data))])])}),t._v(" "),t._m(0)],2)],1),t._v(" "),a("div",{staticClass:"content"},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[t.bonus_active?a("el-tab-pane",{attrs:{label:t.bonus_lable,name:"first"}},[a("ul",{staticClass:"rationList"},t._l(t.first_content,function(e){return a("li",[a("div",{staticClass:"detail"},[a("span",{staticClass:"month"},[t._v(t._s(e.create_month))]),t._v(" "),t._l(e.has_many_dividend,function(e){return a("div",{staticClass:"info"},[a("ul",{staticClass:"left"},[a("li",[t._v("订单号："+t._s(e.order_sn))]),t._v(" "),a("li",{staticClass:"time"},[t._v("时间："+t._s(e.created_at))])]),t._v(" "),a("ul",{staticClass:"right"},[a("li",[t._v(t._s(e.dividend_amount))]),t._v(" "),a("li",{staticClass:"state"},[t._v(t._s(e.status_name))])])])})],2)])}))]):t._e(),t._v(" "),t.leveling_active?a("el-tab-pane",{attrs:{label:t.leveling_label,name:"second"}},[a("ul",{staticClass:"rationList"},t._l(t.second_content,function(e){return a("li",[a("div",{staticClass:"detail"},[a("span",{staticClass:"month"},[t._v(t._s(e.create_month))]),t._v(" "),t._l(e.has_many_dividend,function(e){return a("div",{staticClass:"info"},[a("ul",{staticClass:"left"},[a("li",[t._v("订单号："+t._s(e.order_sn))]),t._v(" "),a("li",{staticClass:"time"},[t._v("时间："+t._s(e.created_at))])]),t._v(" "),a("ul",{staticClass:"right"},[a("li",[t._v(t._s(e.dividend_amount))]),t._v(" "),a("li",{staticClass:"state"},[t._v(t._s(e.status_name))])])])})],2)])}))]):t._e(),t._v(" "),a("el-tab-pane",{attrs:{label:"感恩奖",name:"third"}},[a("ul",{staticClass:"rationList"},t._l(t.third_content,function(e){return a("li",[a("div",{staticClass:"detail"},[a("span",{staticClass:"month"},[t._v(t._s(e.create_month))]),t._v(" "),t._l(e.has_many_dividend,function(e){return a("div",{staticClass:"info"},[a("ul",{staticClass:"left"},[a("li",[t._v("订单号："+t._s(e.order_sn))]),t._v(" "),a("li",{staticClass:"time"},[t._v("时间："+t._s(e.created_at))])]),t._v(" "),a("ul",{staticClass:"right"},[a("li",[t._v(t._s(e.dividend_amount))]),t._v(" "),a("li",{staticClass:"state"},[t._v(t._s(e.status_name))])])])})],2)])}))])],1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"line"},[a("div",{staticClass:"careat"})])}]}}});