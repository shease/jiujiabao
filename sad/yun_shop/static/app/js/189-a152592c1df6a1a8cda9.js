webpackJsonp([189,356],{3:function(t,e,i){var o,a;i(6),o=i(4);var n=i(7);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-3bb525bc",t.exports=o},4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i(8);e.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=e.default},5:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,e,i){var o=i(5);"string"==typeof o&&(o=[[t.id,o,""]]);i(2)(o,{});o.locals&&(t.exports=o.locals)},7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.hide?t._e():i("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():i("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[i("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},719:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(1085),n=o(a);e.default=n.default,t.exports=e.default},1085:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(3),n=o(a),r=i(9);e.default={data:function(){return{dataList:[],loading:!1,isLoadMore:!0,page:1,total_page:0,integral:window.localStorage.integral}},created:function(){},methods:{getData:function(){var t=this;$http.post("plugin.point-activity.Frontend.Modules.Activity.Controllers.receive-records.index",{page_id:1},"正在加载").then(function(e){if(1===e.result){var i=e.data;t.dataList=i.records.data,t.total_page=i.records.last_page,t.total_page||(t.total_page=0)}else r.MessageBox.alert(e.msg)},function(t){})},loadMore:function(){this.isLoadMore&&this.getMoreData(this.page)},getMoreData:function(t){var e=this;this.page>=this.total_page||(this.page=this.page+1,$http.post("plugin.point-activity.Frontend.Modules.Activity.Controllers.receive-records.index",{page_id:this.page},"加载中...").then(function(t){if(1!==t.result)return e.page=e.page-1,e.loading=!0,void(e.isLoadMore=!1);var i=t.data.records.data;e.loading=!1,e.dataList=e.dataList.concat(i)},function(t){}))},initData:function(){this.page=1,this.total_page=0,this.loading=!1,this.isLoadMore=!0,this.dataList=[]}},activated:function(){this.initData(),this.getData()},deactivated:function(){this.loading=!0},components:{cTitle:n.default}},t.exports=e.default},1488:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,"#get_record #content[data-v-42fb84ff]{padding-top:10px;padding-top:.625rem}#get_record #content .list[data-v-42fb84ff]{background-color:#fff;padding:10px 14px;padding:.625rem .875rem;border-bottom:1px solid #ebebeb;border-bottom:.0625rem solid #ebebeb}#get_record #content .list li[data-v-42fb84ff]{font-size:14px;line-height:30px;line-height:1.875rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}#get_record #content .list li[data-v-42fb84ff]:first-child{font-size:16px}#get_record #content .list li:first-child span[data-v-42fb84ff]:last-child{color:#f15353}#get_record #content .list li[data-v-42fb84ff]:last-child{color:#8c8c8c;font-size:12px}",""])},1899:function(t,e,i){var o=i(1488);"string"==typeof o&&(o=[[t.id,o,""]]);i(2)(o,{});o.locals&&(t.exports=o.locals)},2614:function(t,e,i){var o,a;i(1899),o=i(719);var n=i(2928);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-42fb84ff",t.exports=o},2928:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"get_record"}},[i("c-title",{attrs:{hide:!1,text:"领取记录"}}),t._v(" "),i("div",{staticStyle:{height:"40px"}}),t._v(" "),i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{id:"content","infinite-scroll-disabled":"loading"}},t._l(t.dataList,function(e){return i("ul",{staticClass:"list"},[i("li",[i("span",[t._v(t._s(e.name))]),t._v(" "),i("span",[t._v("+"+t._s(e.point))])]),t._v(" "),i("li",[i("span",[t._v(t._s(e.created_at))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.validity_at,expression:"list.validity_at"}]},[t._v("有效期至"+t._s(e.validity_at))])])])}))],1)},staticRenderFns:[]}}});