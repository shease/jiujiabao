webpackJsonp([351,356],{806:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{toi:window.localStorage.i,activeName:"first"}},methods:{handleClick:function(e,t){console.log(e,t)}}},e.exports=t.default},1673:function(e,t,a){t=e.exports=a(1)(),t.push([e.id,"",""])},2085:function(e,t,a){var n=a(1673);"string"==typeof n&&(n=[[e.id,n,""]]);a(2)(n,{});n.locals&&(e.exports=n.locals)},2701:function(e,t,a){var n,o;a(2085),n=a(806);var l=a(3109);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=l.render,o.staticRenderFns=l.staticRenderFns,o._scopeId="data-v-d1086b9c",e.exports=n},3109:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"标签1",name:"first"}},[e._v("标签1内容")]),e._v(" "),a("el-tab-pane",{attrs:{label:"标签2",name:"second"}},[e._v("标签2内容")]),e._v(" "),a("el-tab-pane",{attrs:{label:"标签3",name:"third"}},[e._v("标签3内容")]),e._v(" "),a("el-tab-pane",{attrs:{label:"标签4",name:"fourth"}},[e._v("标签4内容")])],1)},staticRenderFns:[]}}});