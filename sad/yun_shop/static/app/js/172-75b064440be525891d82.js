webpackJsonp([172,356],{3:function(e,t,i){var o,a;i(6),o=i(4);var s=i(7);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,a._scopeId="data-v-3bb525bc",e.exports=o},4:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(8);t.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},e.exports=t.default},5:function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(e,t,i){var o=i(5);"string"==typeof o&&(o=[[e.id,o,""]]);i(2)(o,{});o.locals&&(e.exports=o.locals)},7:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.hide?e._e():i("mt-header",{attrs:{fixed:"",title:e.text}},[e.goback?e._e():i("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:e.goto},slot:"left"}),e._v(" "),e.tolink?[i("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:e.fun.getUrl(e.tolink)},slot:"right"},[e._v(e._s(e.totext))])]:e._e()],2)],1)},staticRenderFns:[]}},801:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(1217),s=o(a);t.default=s.default,e.exports=t.default},1217:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(3),s=o(a),n=i(9);t.default={components:{cTitle:s.default},data:function(){return{cargon_data:{title:"",sku:"",thumb:"",price:"",market_price:"",cost_price:"",stock:""},imageUrl:"",uploadUrl:"",fileList1:[],fileList2:[],upNumMax:0,upNumMaxOther:0,fileList3:[],fileList4:[],options:[],selectedOptions3:[],sectionOptions:[],jumpState:!0,number:1}},activated:function(){this.init(),this.urlUp(),this.getJson()},methods:{init:function(){for(var e in this.cargon_data)this.cargon_data[e]="";this.selectedOptions3=[],this.imageUrl="",this.fileList1=[],this.fileList2=[],this.fileList3=[],this.fileList4=[],this.upNumMax=0,this.upNumMaxOther=0},getJson:function(){var e=this;if("store"==e.$route.params.store){var t={store_id:e.$route.params.store_id};$http.get("plugin.store-cashier.frontend.store.goods-category.get-category-by-store-id",t).then(function(t){if(console.log("显示分类edit",t),1==t.result){e.sectionOptions=[];for(var i=0;i<t.data.list.length;i++){e.sectionOptions.push({id:t.data.list[i].id,value:t.data.list[i].id,label:t.data.list[i].name,children:[]});for(var o=0;o<t.data.list[i].childrens.length;o++)e.sectionOptions[i].children.push({id:t.data.list[i].childrens[o].id,value:t.data.list[i].childrens[o].id,label:t.data.list[i].childrens[o].name})}console.log("---option----",e.sectionOptions),e.options=e.sectionOptions}else e.$message.error(t.msg)},function(e){console.log(e)})}else if("supplier"==e.$route.params.store){var i={};$http.post("plugin.supplier.frontend.goods.get-category",i).then(function(t){if(console.log("显示分类edit",t),1==t.result){e.sectionOptions=[];for(var i=0;i<t.data.length;i++)if(e.sectionOptions.push({id:t.data[i].id,value:t.data[i].id,label:t.data[i].name}),!t.data[i].childrens||t.data[i].childrens.length<1);else{e.sectionOptions[i].children=[];for(var o=0;o<t.data[i].childrens.length;o++)if(e.sectionOptions[i].children.push({id:t.data[i].childrens[o].id,value:t.data[i].childrens[o].id,label:t.data[i].childrens[o].name}),!t.data[i].childrens[o].childrens||t.data[i].childrens[o].childrens.length<1);else{e.sectionOptions[i].children[o].children=[];for(var a=0;a<t.data[i].childrens[o].childrens.length;a++)e.sectionOptions[i].children[o].children.push({id:t.data[i].childrens[o].childrens[a].id,value:t.data[i].childrens[o].childrens[a].id,label:t.data[i].childrens[o].childrens[a].name})}}console.log("---option----",e.sectionOptions),e.options=e.sectionOptions}else e.$message.error(t.msg)},function(e){console.log(e)})}},classifyChange:function(e){console.log("选择分类返回值",e),this.selectedOptions3=e},publishEvent:function(){var e=this,t=this;if(t.jumpEvent(),1==t.jumpState){var i=[];if(0!=t.fileList1.length)for(var o=0;o<t.fileList1.length;o++)i.push(t.fileList1[o].url);else i=[];var a=[];if(0!=t.fileList3.length)for(var o=0;o<t.fileList3.length;o++)a.push(t.fileList3[o].url);else a=[];if("store"==t.$route.params.store)var s="plugin.store-cashier.frontend.store.goods.add-goods",n={store_id:t.$route.params.store_id,category_pid:t.selectedOptions3[0],category_cid:t.selectedOptions3[1],title:t.cargon_data.title,thumb:t.cargon_data.thumb,thumb_url:a,good_content:i,cost_price:t.cargon_data.cost_price,market_price:t.cargon_data.market_price,price:t.cargon_data.price,sku:t.cargon_data.sku,stock:t.cargon_data.stock};else if("supplier"==t.$route.params.store){var s="plugin.supplier.frontend.goods.add-goods",n={title:t.cargon_data.title,thumb:t.cargon_data.thumb,thumb_url:a,good_content:i,cost_price:t.cargon_data.cost_price,market_price:t.cargon_data.market_price,price:t.cargon_data.price,sku:t.cargon_data.sku,stock:t.cargon_data.stock};if(t.selectedOptions3.length<2)return document.documentElement.scrollTop=0,document.body.scrollTop=0,this.$refs.classify.className="classify",setTimeout(function(){e.$refs.classify.className=""},3e3),void t.$message.error("必须选择二级分类");t.selectedOptions3.length<3?(n.category_pid=t.selectedOptions3[0],n.category_cid=t.selectedOptions3[1]):(n.category_pid=t.selectedOptions3[0],n.category_cid=t.selectedOptions3[1],n.category_tid=t.selectedOptions3[2])}$http.get(s,n).then(function(e){console.log("显示add",e),1==e.result?(t.init(),t.$router.go(-1),t.$message({message:"上传商品成功",type:"success"})):t.$message.error(e.msg)},function(e){console.log(e)})}else t.$message({message:"商品信息不完整",type:"warning"})},jumpEvent:function(){this.jumpState=!0;for(var e in this.cargon_data)""==this.cargon_data[e]&&(this.jumpState=!1);0==this.selectedOptions3.length&&(this.jumpState=!1),""==this.imageUrl&&(this.jumpState=!1)},urlUp:function(){var e=document.getElementsByClassName("el-cascader__label")[0];e.style.lineHeight="48px",this.uploadUrl=this.fun.getRealUrl("plugin.store-cashier.frontend.store.goods.upload",{})},handleStoreSuccess:function(e,t){console.log("------param-----",e,t),this.imageUrl=URL.createObjectURL(t.raw),1==e.result?(this.cargon_data.thumb=e.data.img,console.log("url-fabu",this.imageUrl)):(0,n.Toast)(e.msg)},beforeUpload:function(e){var t="image/png"===e.type||"image/jpeg"===e.type,i=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG或PNG 格式!"),i||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&i},handleAptiSuccess:function(e,t){console.log("------param-----",e,t),1==e.result?this.fileList1.push({url:e.data.img}):(0,n.Toast)(e.msg)},handleAptiRemove:function(e,t){console.log("handleStoreRemove:",e,t),this.upNumMax=t.length;var i=e.url;if(i){var o="";this.fileList1.forEach(function(e,t,a){e.url==i&&(o=t)}),this.fileList1.splice(o,1)}},occlusion:function(){this.$message.warning("图片数量已达到上限")},handleChange:function(e,t){console.log("change--u",e,t),this.upNumMax=t.length},handleAptiSuccessOther:function(e,t){console.log("------param-----",e,t),1==e.result?this.fileList3.push({url:e.data.img}):(0,n.Toast)(e.msg)},handleAptiRemoveOther:function(e,t){console.log("handleStoreRemove:",e,t),this.upNumMaxOther=t.length;var i=e.url;if(i){var o="";this.fileList3.forEach(function(e,t,a){e.url==i&&(o=t)}),this.fileList3.splice(o,1)}},occlusionOther:function(){this.$message.warning("图片数量已达到上限")},handleChangeOther:function(e,t){console.log("change--u",e,t),this.upNumMaxOther=t.length}}},e.exports=t.default},1356:function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".avatar[data-v-145dc268]{width:100%;height:100%}.el-cascader[data-v-145dc268]{width:250px;width:15.625rem}#goods-release[data-v-145dc268]{text-align:left;padding-top:40px;padding-bottom:62px;padding-bottom:3.875rem}#goods-release .classify[data-v-145dc268]{animation:myfirst 3s}@keyframes myfirst{0%{background:#f15353}to{background:#fff}}#goods-release #edit-b[data-v-145dc268]{background-color:#fff;margin-top:10px;margin-top:.625rem}#goods-release #edit-b .bottom[data-v-145dc268],#goods-release #edit-b .top[data-v-145dc268]{-padding:0 14px;-padding:0 .875rem;font-size:14px;padding-bottom:10px;padding-bottom:.625rem}#goods-release #edit-b .bottom h1[data-v-145dc268],#goods-release #edit-b .top h1[data-v-145dc268]{line-height:36px;line-height:2.25rem;text-align:left;font-weight:400}#goods-release #edit-b .bottom .icon[data-v-145dc268],#goods-release #edit-b .top .icon[data-v-145dc268]{padding-top:18px;padding-top:1.125rem;width:72px;width:4.5rem;height:72px;height:4.5rem;background-color:#fafafa;font-size:12px}#goods-release #edit-b .bottom .icon i[data-v-145dc268],#goods-release #edit-b .top .icon i[data-v-145dc268]{padding:2px;padding:.125rem;background-color:#fff;border:1px solid #ebebeb;border:.0625rem solid #ebebeb;border-radius:1.25rem}#goods-release #edit-b .bottom .icon span[data-v-145dc268],#goods-release #edit-b .top .icon span[data-v-145dc268]{display:block;margin-top:4px;margin-top:.25rem}#goods-release #edit-b .bottom[data-v-145dc268]{border-bottom:none}#goods-release #edit-a[data-v-145dc268],#goods-release #edit-c[data-v-145dc268]{margin-top:10px;margin-top:.625rem;background-color:#fff}#goods-release #edit-a ul li[data-v-145dc268],#goods-release #edit-c ul li[data-v-145dc268]{height:44px;height:2.75rem;line-height:44px;line-height:2.75rem;padding:0 14px;padding:0 .875rem;border-bottom:1px solid #ebebeb;border-bottom:.0625rem solid #ebebeb;font-size:16px;text-align:left}#goods-release #edit-a ul li input[data-v-145dc268],#goods-release #edit-c ul li input[data-v-145dc268]{border:none;color:#8c8c8c;width:74%}#goods-release #edit-a ul li[data-v-145dc268]:last-child{border:none}#goods-release #edit-a ul li:last-child i[data-v-145dc268]{font-size:24px;font-size:1.5rem;color:#c9c9c9;position:absolute;right:14px;right:.875rem;line-height:44px;line-height:2.75rem}#goods-release #edit-a ul li:last-child input[data-v-145dc268]{font-size:14px}#goods-release #edit-d[data-v-145dc268]{margin-top:10px;margin-top:.625rem;background-color:#fff}#goods-release #edit-d ul li[data-v-145dc268]{height:44px;height:2.75rem;line-height:44px;line-height:2.75rem;padding:0 14px;padding:0 .875rem;border-bottom:1px solid #ebebeb;border-bottom:.0625rem solid #ebebeb;font-size:16px;text-align:left}#goods-release #edit-d ul li[data-v-145dc268]:last-child,#goods-release #edit-d ul li input[data-v-145dc268]{border:none}#goods-release #btn[data-v-145dc268]{background-color:#fff;width:100%;position:fixed;bottom:0;z-index:100;border-top:1px solid #ebebeb;border-top:.0625rem solid #ebebeb;padding:0 14px;padding:0 .875rem;margin-top:20px;margin-top:1.25rem}#goods-release #btn button[data-v-145dc268]{height:40px;height:2.5rem;line-height:40px;line-height:2.5rem;border-radius:.1875rem;margin:6px 0;margin:.375rem 0;width:100%;color:#fff;font-size:16px;border:none;background-color:#f15353}",""])},1767:function(e,t,i){var o=i(1356);"string"==typeof o&&(o=[[e.id,o,""]]);i(2)(o,{});o.locals&&(e.exports=o.locals)},2696:function(e,t,i){var o,a;i(1767),o=i(801);var s=i(2804);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,a._scopeId="data-v-145dc268",e.exports=o},2804:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{attrs:{id:"goods-release"}},[i("c-title",{attrs:{hide:!1,text:"商品发布"}}),e._v(" "),i("section",{attrs:{id:"edit-a"}},[i("mt-field",{attrs:{label:"商品名称:",placeholder:"请输入商品名称"},model:{value:e.cargon_data.title,callback:function(t){e.$set(e.cargon_data,"title",t)},expression:"cargon_data.title"}}),e._v(" "),i("mt-field",{attrs:{label:"商品单位:",placeholder:"请输入商品单位"},model:{value:e.cargon_data.sku,callback:function(t){e.$set(e.cargon_data,"sku",t)},expression:"cargon_data.sku"}})],1),e._v(" "),i("section",{ref:"classify",staticStyle:{height:"48px",background:"white","margin-top":"10px","line-height":"48px"}},[i("span",{staticStyle:{float:"left","font-size":"16px","padding-left":"10px","box-sizing":"border-box"}},[e._v("商品分类：")]),e._v(" "),i("span",{staticClass:"block",staticStyle:{float:"left"}},[i("el-cascader",{attrs:{"expand-trigger":"click",options:e.options},on:{change:e.classifyChange},model:{value:e.selectedOptions3,callback:function(t){e.selectedOptions3=t},expression:"selectedOptions3"}})],1)]),e._v(" "),i("section",{attrs:{id:"edit-b"}},[i("div",{staticClass:"top"},[e._m(0),e._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("div",[i("el-upload",{attrs:{action:e.uploadUrl,"on-preview":e.handlePreview,limit:1,"list-type":"picture-card","show-file-list":!1,"on-exceed":e.handleExceed,"before-upload":e.beforeUpload,"on-success":e.handleStoreSuccess}},[e.imageUrl?i("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):i("i",{staticClass:"el-icon-plus"})])],1)])])]),e._v(" "),i("section",{staticStyle:{background:"white","margin-top":"0.625rem","padding-bottom":"10px","box-sizing":"border-box"}},[e._m(1),e._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("el-upload",{staticClass:"upload-demo",attrs:{data:{attach:"upload"},"on-change":e.handleChange,action:e.uploadUrl,"on-preview":e.handlePreview,"on-remove":e.handleAptiRemove,"file-list":e.fileList2,"list-type":"picture-card","on-exceed":e.handleExceed,"before-upload":e.beforeUpload,"on-success":e.handleAptiSuccess}},[i("div",{staticStyle:{width:"100%",height:"100%",background:"rgba(45,45,45,0)",position:"relative"}},[i("i",{staticClass:"el-icon-plus"}),e._v(" "),e.upNumMax>=4?i("div",{staticStyle:{width:"100%",height:"100%",background:"rgba(45,45,45,0)",position:"absolute",left:"0px",top:"0px","z-index":"2"},on:{click:function(t){t.stopPropagation(),e.occlusion()}}}):e._e()])])],1)]),e._v(" "),i("section",{staticStyle:{background:"white","margin-top":"0.625rem","padding-bottom":"10px","box-sizing":"border-box"}},[e._m(2),e._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("el-upload",{staticClass:"upload-demo",attrs:{data:{attach:"upload"},"on-change":e.handleChangeOther,action:e.uploadUrl,"on-preview":e.handlePreview,"on-remove":e.handleAptiRemoveOther,"file-list":e.fileList4,"list-type":"picture-card","on-exceed":e.handleExceed,"before-upload":e.beforeUpload,"on-success":e.handleAptiSuccessOther}},[i("div",{staticStyle:{width:"100%",height:"100%",background:"rgba(45,45,45,0)",position:"relative"}},[i("i",{staticClass:"el-icon-plus"}),e._v(" "),e.upNumMaxOther>=4?i("div",{staticStyle:{width:"100%",height:"100%",background:"rgba(45,45,45,0)",position:"absolute",left:"0px",top:"0px","z-index":"2"},on:{click:function(t){t.stopPropagation(),e.occlusionOther()}}}):e._e()])])],1)]),e._v(" "),i("section",{attrs:{id:"edit-c"}},[i("mt-field",{attrs:{label:"商品现价:",placeholder:"请输入商品现价",type:"number"},model:{value:e.cargon_data.price,callback:function(t){e.$set(e.cargon_data,"price",t)},expression:"cargon_data.price"}}),e._v(" "),i("mt-field",{attrs:{label:"商品原价:",placeholder:"请输入商品原价",type:"number"},model:{value:e.cargon_data.market_price,callback:function(t){e.$set(e.cargon_data,"market_price",t)},expression:"cargon_data.market_price"}}),e._v(" "),i("mt-field",{attrs:{label:"商品成本:",placeholder:"请输入商品成本",type:"number"},model:{value:e.cargon_data.cost_price,callback:function(t){e.$set(e.cargon_data,"cost_price",t)},expression:"cargon_data.cost_price"}})],1),e._v(" "),i("section",{attrs:{id:"edit-d"}},[i("mt-field",{attrs:{label:"商品库存:",placeholder:"请输入商品库存",type:"number"},model:{value:e.cargon_data.stock,callback:function(t){e.$set(e.cargon_data,"stock",t)},expression:"cargon_data.stock"}})],1),e._v(" "),i("section",{attrs:{id:"btn"}},[i("button",{attrs:{type:"button"},on:{click:function(t){e.publishEvent()}}},[e._v("确认发布")])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{height:"3.125rem","text-align":"left","line-height":"3.125rem","padding-left":"10px","box-size":"border-box"}},[i("span",{staticStyle:{"font-size":"16px"}},[e._v("商品图片：")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{height:"50px","text-align":"left","padding-left":"13px","line-height":"50px"}},[i("span",{staticStyle:{"font-size":"16px"}},[e._v("商品详情：")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{height:"50px","text-align":"left","padding-left":"13px","line-height":"50px"}},[i("span",{staticStyle:{"font-size":"16px"}},[e._v("其他图片：")])])}]}}});