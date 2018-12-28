<template >
	<div id="balance_recharge">
		<c-title :hide="false" text='订单支付'></c-title>
		<div style="height: 40px;"></div>
		<div class="pay-box">
			<div class="my_wrapper">
				<div class="left"><span>账</span><span>户</span><span>余</span><span>额：</span></div>
				<div class="my-value">{{balance}} 元</div>
			</div>
			<div class="my_wrapper">
				<div class="left"><span>支</span><span>付</span><span>流</span><span>水</span><span>号：</span></div>
				<div class="my-value">{{order_sn}}</div>
			</div>
			<div class="my_wrapper">
				<div class="left"><span>支</span><span>付</span><span>金</span><span>额：</span></div>
				<div class="my-value">
					<span>{{money}} </span> 元</div>
			</div>
		</div>
		
		<div style="height: 1.25rem;"></div>
		<div id="payBtnList">
			<div class="mod_btns" v-for="(btn) in buttons">

		<a @click="confirm(btn)" class="mod_btn" :class="[btnclass(btn.value)]"  v-if="$route.params.goodsID !=7 || btn.name != '微信' ">{{btn.name}}{{typename}}</a>
            <div v-if="huanxun_form_quick == btn.value || huanxun_form_wx == btn.value">
					<form id="ipspaysubmit" method="post" :action="huanxun_form_action">
						<input type="hidden" :name="huanxun_input_name" v-model="huanxun_form_input">
					</form>
				</div>
			</div>
			<!-- <el-button style="width: 21.09rem;height: 46px;margin-bottom: 10px;font-size: 16px;font-family: Source Sans Pro, Helvetica, sans-serif;" type="success" @click="confirm('flower')">模拟支付</el-button> -->
		</div>

		<yd-keyboard v-model="popupSpecs" title="安全键盘" input-text="请输入支付密码" :callback="keyboardDone" ref="keyboardDemo1"></yd-keyboard>

		<!--<mt-button type="primary"
				size="large"
	 @click="getWeChatPayParams">微信支付</mt-button>-->
		<div class="maWrapper" v-show="maShow" @click="clickmaWrapper">
			<div class="ma">
				<div class="tipContent">支付成功</div>
				<div v-html="erweima"></div>
			</div>
		</div>
		<div class="paySuccessMes" v-show="showMessage">
			<div class="centerContent">
			  <div class="centerContenttext" v-for="item in tiijaoxinxi">
				 <span>{{item.name}}</span>
				 <input type="text" :placeholder="item.tip" v-model="item.tip1">
			  </div>
             <div class="default" @click="clickdefault">提交</div>
			</div>
		</div>
	</div>
</template>
<script>
import order_paymentcontroller from './order_paymentcontroller';
export default order_paymentcontroller;

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
#balance_recharge {
	.pay-box{
		padding:0 0.875rem;
		background: #FFF;
	}
	.my_wrapper {
		text-align: left;
		overflow: hidden;
		display: flex;
		height:2.75rem;
		line-height: 2.75rem;
		.left{
			display: flex;
			justify-content: space-between;
			flex: 0.8;
			margin-right:0.625rem;
			color:#8c8c8c;
		}
		span {
			font-size: 16px;
			line-height: 2.75rem;
		}
		.my-value {
			line-height: 2.75rem;
			text-align: left;
			font-size:16px;
			flex: 2;
			text-align: left;
			span {
				color: red;
			}
		}
	}
	.paySuccessMes{
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		width: 100vw;
		height: calc(100vh - 43px);
		background: rgba(0,0,0,0.8);
		left: 0;
		top: 0;
		.centerContent{
			background: white;
			border-radius: 10px;
			width: 80vw;
            padding-top: 10px;
			.centerContenttext{
				text-align: left;
				padding-left: 20px;
				display: flex;
				height: 30px;
				align-items: center;
                margin-bottom: 5px;
				span{
					font-size: 20px;
				}
				input{
					height: 25px;
					width: 50vw;
					font-size: 20px;
				}
			}
			.default{
				display: block;
				width: 60vw;
				margin: 0 auto;
				background: #0e81fd;
				border-radius: 10px;
				line-height: 30px;
				font-size: 20px;
				color: white;
				margin-bottom: 10px;
			}
		}
	}
}

#payBtnList {
	.mod_btns {
		margin-bottom: 0.75rem;
		font-size: 16px;
		.mod_btn {
			height:2.875rem;
			line-height: 2.875rem;
			display: block;
			width: 90%;
			margin:0 auto;
			border-radius: 0.25rem;
		}
		.mod_btn.bg_wechat {
			background: #26ce29;
			color: #fff;
		}
		.mod_btn.bg_alipay {
			background: #FF6100;
			color: #fff;
		}
		.mod_btn.bg_ali {
			background: #22aaed;
			color: #fff;
		}
		.mod_btn.bg_cash {
			background: #FB0207;
			color: #fff;
		}
		//找人代付
		.mod_btn.bg_payanother {
			background: #ff6666;
			color: #fff;
		}
		//电子钱包快捷支付
		.mod_btn.bg_quick {
			background: #0099ff;
			color: #fff;
		}
	}
}

.pay-psw-info {
	overflow-y: scroll;
	width: 100vw;
	height: auto;
	background: #FFF;
	max-height: 80vh;
	padding-top: 0.625rem;
}

footer {
	position: absolute;
	bottom: 0;
	width: 100vw;
	font-weight: 600;
}

.pay_btn {
	border-top: 0.0625rem solid #ddd;
	width: 100vw;
	height: auto;
}


.pay_btn li {
	width: 33%;
	float: left;
	height: 3rem;
	line-height: 3rem;
	text-align: center;
	background: #fff;
	font-size: 14px;
	border-right: 0.0625rem solid #ddd;
	border-bottom: 0.0625rem solid #ddd;
}


.pay_btn li:active {
	background: #C2C2C2;
}

.b9:active {
	background: #fff !important;
}

.b9 {
	background: #C2C2C2 !important;
}

.pay_content {
	width: 100vw;
	height: 3.125rem;
	margin-bottom: 0.625rem;
}

.pay_content_title {
	width: 100vw;
	height: 1.875rem;
	line-height: 1.875rem;
	margin-bottom: 0.625rem;
	font-size: 18px;
}

.pay_content_view {
	width: 100vw;
	height: 3.125rem; // margin-left: 2px;
	border-bottom: 0.0625rem solid #ddd;
	border-top: 0.0625rem solid #ddd;
	border-right: 0.0625rem solid #ddd;
}

.ipt_pay_p {
	line-height: 3.125rem;
	height: 3.125rem;
	font-size: 20px;
}

.ipt_pay {
	float: left;
	width: 16.27%;
	height: 3.125rem;
	text-align: center;
	border-left: 0.0625rem solid #ddd;
}
	.maWrapper{
		width: 100vw;
		height: calc(100vh - 40px);
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(0,0,0,0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		.ma{
			width: 280px;
			height: 30vh;
			.tipContent{
				background: white;
				line-height: 5vh;
				font-size: 20px;
			}
		}
	}
</style>