webpackJsonp([272,356],{3:function(t,e,o){var n,r;o(6),n=o(4);var i=o(7);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-3bb525bc",t.exports=n},4:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o(8);e.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},t.exports=e.default},5:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(t,e,o){var n=o(5);"string"==typeof n&&(n=[[t.id,n,""]]);o(2)(n,{});n.locals&&(t.exports=n.locals)},7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.hide?t._e():o("mt-header",{attrs:{fixed:"",title:t.text}},[t.goback?t._e():o("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goto},slot:"left"}),t._v(" "),t.tolink?[o("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:t.fun.getUrl(t.tolink)},slot:"right"},[t._v(t._s(t.totext))])]:t._e()],2)],1)},staticRenderFns:[]}},549:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(942),i=n(r);e.default=i.default,t.exports=e.default},942:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(3),i=n(r);e.default={components:{cTitle:i.default},data:function(){return{}},methods:{previousPage:function(){this.$router.push(this.fun.getUrl("ExtensionPage"))}}},t.exports=e.default},1645:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,"",""])},2057:function(t,e,o){var n=o(1645);"string"==typeof n&&(n=[[t.id,n,""]]);o(2)(n,{});n.locals&&(t.exports=n.locals)},2446:function(t,e,o){var n,r;o(2057),n=o(549);var i=o(3082);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=n},3082:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("el-row",[o("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.previousPage()}}},[t._v("奖项排行")])],1)],1)},staticRenderFns:[]}}});