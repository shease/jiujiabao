webpackJsonp([81,356],{3:function(e,t,o){var i,a;o(6),i=o(4);var r=o(7);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-3bb525bc",e.exports=i},4:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(8);t.default={props:["text","hide","totext","tolink","goback"],data:function(){return{toi:this.fun.getKeyByI()}},activated:function(){console.log("统计代码run");var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?651798cf44d298ed46b435d750cc920c";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),console.log("统计代码run")},mounted:function(){},methods:{goto:function(){window.history.length<=1?this.$router.push(this.fun.getUrl("home",{})):this.$router.go(-1)}}},e.exports=t.default},5:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".mint-header[data-v-3bb525bc]{background:none;color:#666}.is-fixed .mint-header-title[data-v-3bb525bc]{font-weight:700}.mint-header.is-fixed[data-v-3bb525bc]{border-bottom:1px solid #e8e8e8;border-bottom:.0625rem solid #e8e8e8;background:#fff;z-index:99}.is-right a[data-v-3bb525bc]{font-size:10px}",""])},6:function(e,t,o){var i=o(5);"string"==typeof i&&(i=[[e.id,i,""]]);o(2)(i,{});i.locals&&(e.exports=i.locals)},7:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.hide?e._e():o("mt-header",{attrs:{fixed:"",title:e.text}},[e.goback?e._e():o("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:e.goto},slot:"left"}),e._v(" "),e.tolink?[o("router-link",{staticStyle:{"font-size":"0.9rem"},attrs:{slot:"right",to:e.fun.getUrl(e.tolink)},slot:"right"},[e._v(e._s(e.totext))])]:e._e()],2)],1)},staticRenderFns:[]}},740:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(1177),r=i(a);t.default=r.default,e.exports=t.default},1177:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(13),r=i(a),c=o(3),n=i(c),l=o(9);t.default={components:{cTitle:n.default},data:function(){return{language:{},userCode:"",popupVisible:!1,provicevalue:"",cityvalue:"",company:"",contract:"",sourceMoney:"",goods_id:"",provinceoptions:[],cityoptions:[],keyIds:"",slots:[{flex:1,values:["请先选择省市"],keyId:[0],className:"slot1",textAlign:"right"}],checkDeductionList:[],form:{provicevalue:"",cityvalue:"",keyId:""},MobilePhone:"",preOrder:"",disableds:!0,score:600,scoreMoney:6,computedMoney:0,useScore:!1,regionoptions:[],poundage:0}},methods:{initData:function(){this.userCode="",this.popupVisible=!1,this.provicevalue="",this.cityvalue="",this.company="",this.contract="",this.sourceMoney="",this.goods_id="";var e=localStorage.getItem("province");this.fun.isTextEmpty(e)&&this.getAddressDataInfo()},selectProviceHandle:function(e){console.log("---fun-ev",e),this.cityvalue="",this.cityoptions=[];var t=[],o=localStorage.getItem("city");t=JSON.parse(o);for(var i=0;i<t.length;i++){var a=t[i];a.parentid==e&&this.cityoptions.push(a)}},selectCityHandle:function(e){console.log("city----s",e),this.company="",this.slots[0].values="",this.getPaymentCompanyList(2,this.form.provicevalue,e)},tipChangeEvent:function(e){1==e&&0==this.cityoptions.length&&this.$message({message:"省不能为空",type:"warning"})},getPaymentCompanyList:function(e,t,o){var i=this;o&&$http.get("plugin.live.api.goods.PaymentCompanyList",{category:e,province:t,city:o},"加载中...").then(function(e){if(1==e.result){if(!e.data)return i.company="",i.slots[0].values="",void l.MessageBox.alert(e.msg);i.slots[0].values=e.data.values,i.slots[0].keyId=e.data.keyId,i.company=e.data.values[0],i.goods_id=e.data.goods_id}else i.company="",i.slots[0].values=""},function(e){l.MessageBox.alert(e)})},chooseCompony:function(){this.popupVisible=!this.popupVisible},onValuesChange:function(e,t){var o=this.slots[0].values.indexOf(t[0]);this.form.keyId=this.slots[0].keyId[o],this.keyIds=this.slots[0].keyId[o],e.setSlotValue(1,t[0]),this.company=t[0]},confirm:function(){if(this.fun.isTextEmpty(this.userCode))return void l.MessageBox.alert("请输入户号！");if(this.fun.isTextEmpty(this.provicevalue))return void l.MessageBox.alert("请选择省份");if(this.fun.isTextEmpty(this.cityvalue))return void l.MessageBox.alert("请选择城市");if(this.fun.isTextEmpty(this.company))return void l.MessageBox.alert("请选择缴费单位");if(this.fun.isTextEmpty(this.contract))return void l.MessageBox.alert("请输入合同号");if(this.fun.isTextEmpty(this.sourceMoney))return void l.MessageBox.alert("请输入充值金额");if(this.sourceMoney<=0)return void l.MessageBox.alert("充值金额必需大于0");var e={goods_id:this.goods_id,account:this.userCode,api_goods_id:this.keyIds,contract:this.contract,price:this.sourceMoney,total:1,option_id:"",orders:(0,r.default)(this.assembleDeduction())},t=this;$http.get("plugin.live.Frontend.Modules.Order.Controllers.goods-buy",e,"提交中...").then(function(o){1==o.result?t.$router.push(t.fun.getUrl("waterFeePay",{para:(0,r.default)(e)})):l.MessageBox.alert(o.msg)},function(e){console.log(e)})},assembleDeduction:function(){for(var e=[],t=0;t<this.checkDeductionList.length;t++)e.push(this.checkDeductionList[t]);return e},getAddressDataInfo:function(){var e=this;$http.get("member.member-address.address",{i:this.fun.getKeyByI(),type:this.fun.getTyep()},"").then(function(t){if(1==t.result){var o=(0,r.default)(t.data.province),i=(0,r.default)(t.data.city),a=(0,r.default)(t.data.district);localStorage.setItem("province",o),localStorage.setItem("city",i),localStorage.setItem("district",a),e.initProvice()}else l.MessageBox.alert(t.msg)},function(e){l.MessageBox.alert(e)})},initProvice:function(){var e=localStorage.getItem("province"),t=[];t=JSON.parse(e),this.provinceoptions=t}},computed:{getLangState:function(){return this.$store.state.service.languageService}},watch:{getLangState:function(e){e?this.language=JSON.parse(sessionStorage.languageService).waterFee:this.language=this.$store.state.service.languageService.waterFee}},mounted:function(){this.userCode=localStorage.getItem("tempElectri"),this.initProvice(),sessionStorage.languageService?this.language=JSON.parse(sessionStorage.languageService).waterFee:this.language=this.$store.state.service.languageService.waterFee},activated:function(){this.$store.commit("onload"),this.userCode=localStorage.getItem("tempWater"),this.initData()}},e.exports=t.default},1609:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,"::-webkit-input-placeholder{color:#8c8c8c}:-moz-placeholder,::-moz-placeholder{color:#8c8c8c}:-ms-input-placeholder{color:#8c8c8c}",""])},1610:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,"[data-v-78eb9b9c]{box-sizing:border-box}.electricitych .poundage[data-v-78eb9b9c]{color:red;font-size:12px}.electricitych .maleall[data-v-78eb9b9c]{background-color:#fff}.electricitych .maleall span[data-v-78eb9b9c]{font-size:14px;vertical-align:middle;width:auto;margin-left:-15px;margin-left:-.9375rem;-ms-flex:none;flex:none;line-height:50px;line-height:3.125rem}.electricitych .telep[data-v-78eb9b9c]{margin-top:10px;margin-top:.625rem;margin-bottom:10px;margin-bottom:.625rem;padding:10px 14px;padding:.625rem .875rem;background:#fff}.electricitych .telep p input[data-v-78eb9b9c]{padding-bottom:10px;padding-bottom:.625rem;width:100%;height:100%;border:0;outline:0;color:#333;font-size:24px;border-bottom:1px solid #ebebeb;border-bottom:.0625rem solid #ebebeb}.electricitych .telep p span[data-v-78eb9b9c]{display:block;line-height:30px;line-height:1.875rem;text-align:left;font-size:14px}.electricitych .content .form[data-v-78eb9b9c]{background-color:#fff;margin-top:10px;margin-top:.625rem;font-size:16px;padding-left:14px;padding-left:.875rem}.electricitych .content .form .form-group[data-v-78eb9b9c]{padding-right:14px;height:45px;height:2.8125rem;border-top:1px solid #ebebeb;border-top:.0625rem solid #ebebeb;display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row}.electricitych .content .form .form-group .form-help[data-v-78eb9b9c]{width:100px;width:6.25rem;height:45px;height:2.8125rem;line-height:45px;line-height:2.8125rem;text-align:left}.electricitych .content .form .form-group .form-controler[data-v-78eb9b9c]{color:#8c8c8c;-ms-flex:1;flex:1;height:auto;line-height:45px;line-height:2.8125rem;float:left;border:0;outline:0;text-align:left}.electricitych .content .form .form-group .form-controler i[data-v-78eb9b9c]{font-size:23px;float:right}.electricitych .popUp[data-v-78eb9b9c]{width:100%;background:#fff}.electricitych .popUp .title[data-v-78eb9b9c]{height:45px;height:2.8125rem;line-height:45px;line-height:2.8125rem;border-bottom:1px solid #f3f5f7;border-bottom:.0625rem solid #f3f5f7;padding:0 15px;padding:0 .9375rem}.electricitych .popUp .title .left[data-v-78eb9b9c]{float:left}.electricitych .popUp .title .right[data-v-78eb9b9c]{float:right;color:#1bba9e}.electricitych .amount[data-v-78eb9b9c]{padding:0;margin-bottom:0;box-sizing:border-box}.electricitych .amount span[data-v-78eb9b9c]{color:#333;font-size:16px;float:left}.electricitych .amount button[data-v-78eb9b9c]{width:90%;height:46px;height:2.875rem;color:#fff;font-size:16px;background:#f15353;border:0;border-radius:.375rem;margin-top:20px;margin-top:1.25rem}.electricitych .m-footer[data-v-78eb9b9c]{width:100%;background:#fff;position:fixed;bottom:0}.electricitych .m-footer .subtotal[data-v-78eb9b9c]{height:40px;height:2.5rem;line-height:40px;line-height:2.5rem;padding:0 13px;padding:0 .8125rem;border-bottom:1px solid #ccc;border-bottom:.0625rem solid #ccc;margin:0}.electricitych .m-footer .subtotal span[data-v-78eb9b9c]:first-child{color:#333;font-size:16px;float:left}.electricitych .m-footer .subtotal span[data-v-78eb9b9c]:last-child{color:12px;color:#333;float:right}.electricitych .m-footer .integral[data-v-78eb9b9c]{height:45px;height:2.8125rem;line-height:45px;line-height:2.8125rem;padding:0 13px;padding:0 .8125rem}.electricitych .m-footer .integral div[data-v-78eb9b9c]{float:left}.electricitych .m-footer .integral div b[data-v-78eb9b9c]{color:#333;font-size:16px;font-weight:noraml}.electricitych .m-footer .integral div span[data-v-78eb9b9c]{color:#333;font-size:12px}.electricitych .m-footer .amount.disableds button[data-v-78eb9b9c]{background:#ccc}.electricitywei .telep[data-v-78eb9b9c]{margin-top:10px;margin-top:.625rem;margin-bottom:10px;margin-bottom:.625rem;padding:10px 14px;padding:.625rem .875rem;background:#fff}.electricitywei .telep p input[data-v-78eb9b9c]{padding-bottom:10px;padding-bottom:.625rem;width:100%;height:100%;border:0;outline:0;color:#333;font-size:24px;border-bottom:1px solid #ebebeb;border-bottom:.0625rem solid #ebebeb}.electricitywei .telep p span[data-v-78eb9b9c]{display:block;line-height:30px;line-height:1.875rem;text-align:left;font-size:14px}.electricitywei .content[data-v-78eb9b9c]{background:#fff}.electricitywei .content .form .form-group[data-v-78eb9b9c]{padding:0 15px;padding:0 .9375rem;height:45px;height:2.8125rem;border-top:1px solid #ccc;border-top:.0625rem solid #ccc;display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row}.electricitywei .content .form .form-group .form-help[data-v-78eb9b9c]{-ms-flex-order:2;order:2;width:80px;width:5rem;height:45px;height:2.8125rem;line-height:45px;line-height:2.8125rem;text-align:right}.electricitywei .content .form .form-group .form-controler[data-v-78eb9b9c]{-ms-flex:1;flex:1;height:45px;height:2.8125rem;line-height:45px;line-height:2.8125rem;float:left;border:0;outline:0;text-align:right}.electricitywei .content .form .form-group .form-controler i[data-v-78eb9b9c]{font-size:23px;float:left}.electricitywei .popUp[data-v-78eb9b9c]{width:100%;background:#fff}.electricitywei .popUp .title[data-v-78eb9b9c]{height:45px;height:2.8125rem;line-height:45px;line-height:2.8125rem;border-bottom:1px solid #f3f5f7;border-bottom:.0625rem solid #f3f5f7;padding:0 15px;padding:0 .9375rem}.electricitywei .popUp .title .left[data-v-78eb9b9c]{float:right}.electricitywei .popUp .title .right[data-v-78eb9b9c]{float:left;color:#1bba9e}.electricitywei .m-footer[data-v-78eb9b9c]{width:100%;background:#fff;position:fixed;bottom:0}.electricitywei .m-footer .subtotal[data-v-78eb9b9c]{height:40px;height:2.5rem;line-height:40px;line-height:2.5rem;padding:0 13px;padding:0 .8125rem;border-bottom:1px solid #ccc;border-bottom:.0625rem solid #ccc;margin:0}.electricitywei .m-footer .subtotal span[data-v-78eb9b9c]:first-child{color:#333;font-size:16px;float:right}.electricitywei .m-footer .subtotal span[data-v-78eb9b9c]:last-child{color:12px;color:#333;float:left}.electricitywei .m-footer .integral[data-v-78eb9b9c]{height:45px;height:2.8125rem;line-height:45px;line-height:2.8125rem;padding:0 13px;padding:0 .8125rem}.electricitywei .m-footer .integral div[data-v-78eb9b9c]{float:right}.electricitywei .m-footer .integral div b[data-v-78eb9b9c]{color:#333;font-size:16px;font-weight:noraml;float:right}.electricitywei .m-footer .integral div span[data-v-78eb9b9c]{color:#333;font-size:12px}.electricitywei .m-footer .amount[data-v-78eb9b9c]{height:50px;height:3.125rem;line-height:50px;line-height:3.125rem;padding:0 0 0 13px;padding:0 0 0 .8125rem;margin-bottom:0;box-sizing:border-box}.electricitywei .m-footer .amount span[data-v-78eb9b9c]{color:#333;font-size:16px;float:left}.electricitywei .m-footer .amount button[data-v-78eb9b9c]{width:105px;width:6.5625rem;height:40px;height:2.5rem;color:#fff;font-size:16px;background:#ff951b;border:0;border-radius:.1875rem;margin-top:9px;margin-top:.5625rem;float:right}",""])},2021:function(e,t,o){var i=o(1609);"string"==typeof i&&(i=[[e.id,i,""]]);o(2)(i,{});i.locals&&(e.exports=i.locals)},2022:function(e,t,o){var i=o(1610);"string"==typeof i&&(i=[[e.id,i,""]]);o(2)(i,{});i.locals&&(e.exports=i.locals)},2635:function(e,t,o){var i,a;o(2021),o(2022),i=o(740);var r=o(3047);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-78eb9b9c",e.exports=i},3047:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:"electricity"+e.$store.state.service.lang,attrs:{id:"electricity"}},[o("c-title",{attrs:{hide:!1,text:e.language.title}}),e._v(" "),o("div",{staticStyle:{height:"40px"}}),e._v(" "),o("div",{staticClass:"telep"},[o("p",[o("span",[e._v("用户编号")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.userCode,expression:"userCode",modifiers:{lazy:!0}}],attrs:{type:"number",placeholder:e.language.placeTip},domProps:{value:e.userCode},on:{change:function(t){e.userCode=t.target.value}}})])]),e._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"maleall"},[o("label",{staticClass:"males",attrs:{for:"male"}},[o("span",{staticStyle:{"margin-right":"10px"}},[e._v("所在省份: ")]),e._v(" "),o("el-select",{attrs:{placeholder:"请选择省份"},on:{change:e.selectProviceHandle},model:{value:e.provicevalue,callback:function(t){e.provicevalue=t},expression:"provicevalue"}},e._l(e.provinceoptions,function(e){return o("el-option",{key:e.id,attrs:{label:e.areaname,value:e.id}})}))],1)]),e._v(" "),o("div",{staticClass:"maleall"},[o("label",{staticClass:"males",attrs:{for:"male"}},[o("span",{staticStyle:{"margin-right":"10px"}},[e._v("所在城市: ")]),e._v(" "),o("el-select",{attrs:{placeholder:"请选择城市"},on:{"visible-change":e.tipChangeEvent,change:e.selectCityHandle},model:{value:e.cityvalue,callback:function(t){e.cityvalue=t},expression:"cityvalue"}},e._l(e.cityoptions,function(e){return o("el-option",{key:e.id,attrs:{label:e.areaname,value:e.id}})}))],1)]),e._v(" "),o("form",{staticClass:"form",attrs:{action:"",method:""}},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"form-help",attrs:{for:""}},[e._v(e._s(e.language.company))]),e._v(" "),o("div",{staticClass:"form-controler",on:{click:e.chooseCompony}},[e._v(e._s(e.company)+"\n\t\t            \t"),"ch"==e.$store.state.service.lang?o("i",{staticClass:"iconfont icon-right"}):o("i",{staticClass:"iconfont icon-left"})])]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"form-help",attrs:{for:""}},[e._v(e._s(e.language.contract))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.contract,expression:"contract",modifiers:{lazy:!0}}],staticClass:"form-controler",attrs:{type:"number",placeholder:e.language.placeContract},domProps:{value:e.contract},on:{change:function(t){e.contract=t.target.value}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"form-help",attrs:{for:""}},[e._v(e._s(e.language.money))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.sourceMoney,expression:"sourceMoney",modifiers:{lazy:!0}}],staticClass:"form-controler",attrs:{type:"number",placeholder:e.language.placeMoney},domProps:{value:e.sourceMoney},on:{change:function(t){e.sourceMoney=t.target.value}}})])])]),e._v(" "),o("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[o("div",{staticClass:"popUp"},[o("div",{staticClass:"title"},[o("span",{staticClass:"left",on:{click:e.chooseCompony}},[e._v(e._s(e.language.cancle))]),e._v(e._s(e.language.company)),o("span",{staticClass:"right",on:{click:e.chooseCompony}},[e._v(e._s(e.language.confirm))])]),e._v(" "),o("mt-picker",{attrs:{slots:e.slots},on:{change:e.onValuesChange}})],1)]),e._v(" "),[o("div",{staticClass:"amount"},[o("button",{attrs:{type:"button"},on:{click:e.confirm}},[e._v(e._s(e.language.btn))])])],e._v(" "),e._e()],2)},staticRenderFns:[]}}});