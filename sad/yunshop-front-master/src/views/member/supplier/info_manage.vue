<template>
	<div id="supplier-center">
		 <c-title :hide="false" text='信息管理'></c-title>
		<div class="info-box">
			<h1>基本信息</h1>
			<section>
				<mt-field label="真实姓名:" placeholder="请输入真实姓名" v-model="information.my_name"></mt-field>
				<mt-field label="手机号码:" placeholder="请输入手机号码" type="tel" v-model="information.phone_number"></mt-field>
			</section>
			<h1>店铺信息</h1>
			<section>
				<mt-field label="店铺名称:" placeholder="请输入店铺姓名" v-model="information.store_name"></mt-field>
			</section>
			<section>
				<div style="height:50px;text-align:left;line-height:50px;background: white;">
						<span style="font-size:16px;margin-left: 10px;">店铺LOGO：</span>
					</div>
					<div style="background: white;padding-bottom: 10px;box-sizing: border-box;border-bottom:solid 0.0625rem #ebebeb;">
						<div style="text-align: center;">
							<el-upload :action="uploadUrl" :on-preview="handlePreview" :limit="1" list-type="picture-card" :show-file-list="false" :on-exceed="handleExceed" :before-upload="beforeUpload" :on-success="handleStoreSuccess">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus"></i>
							</el-upload>
						</div>
				</div>
			</section>
			<h1>收款信息</h1>
			<section>
				<mt-field label="银行卡账号:" placeholder="请输入银行账号" type="number" v-model="information.bank_account"></mt-field>
				<mt-field label="开户人姓名:" placeholder="请输入开户人姓名" v-model="information.owner_name"></mt-field>
				<mt-field label="开户银行:" placeholder="请输入开户银行" v-model="information.opening_bank"></mt-field>
				<mt-field label="开户支行:" placeholder="请输入开户支行" v-model="information.opening_branch"></mt-field>
				<mt-field label="企业支付宝账号:" placeholder="请输入企业支付宝账号" v-model="information.enterprise_alipay"></mt-field>
				<mt-field label="企业支付宝用户名:" placeholder="请输入企业支付宝用户名" v-model="information.enterprise_alipay_user"></mt-field>
				<mt-field label="支付宝账号:" placeholder="请输入支付宝账号" v-model="information.alipay"></mt-field>
				<mt-field label="支付宝用户名:" placeholder="请输入支付宝用户名" v-model="information.alipay_username"></mt-field>
				<mt-field label="微信账号:" placeholder="请输入微信账号" v-model="information.weChat_account"></mt-field>
			</section>


			<!-- <ul>
				<h1>基本信息</h1>
				<li>
					<span>真实姓名：</span>
					<input type="text" v-model="information.my_name">
				</li>
				<li>
					<span>手机号码：</span>
					<input type="text" v-model="information.phone_number">
				</li>
			</ul>
			
			<ul>
				<h1>店铺信息</h1>
				<li>
					<span>店铺姓名：</span>
					<input type="text" v-model="information.store_name">
				</li>
			</ul>
					<div style="height:50px;text-align:left;line-height:50px;background: white;padding-left: 20px;">
						<span style="font-size:14px;">店铺LOGO：</span>
					</div>
					<div style="background: white;padding-bottom: 10px;box-sizing: border-box;border-bottom:solid 0.0625rem #ebebeb;">
						<div>
							<el-upload :action="uploadUrl" :on-preview="handlePreview" :limit="1" list-type="picture-card" :show-file-list="false" :on-exceed="handleExceed" :before-upload="beforeUpload" :on-success="handleStoreSuccess">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus"></i>
							</el-upload>
						</div>
					</div>
			<ul>
				<h1>收款信息</h1>
				<li>
					<span>银行账号：</span>
					<input type="text" v-model="information.bank_account">
				</li>
				<li>
					<span>开户人姓名：</span>
					<input type="text" v-model="information.owner_name">
				</li>
				<li>
					<span>开户银行：</span>
					<input type="text" v-model="information.opening_bank">
				</li>
				<li>
					<span>开户支行：</span>
					<input type="text" v-model="information.opening_branch">
				</li>
				<li>
					<span>企业支付宝账号：</span>
					<input type="text" v-model="information.alipay_en">
				</li>
				<li>
					<span>企业支付宝用户名：</span>
					<input type="text" v-model="information.alipay_username_en">
				</li>
				<li>
					<span>支付宝账号：</span>
					<input type="text" v-model="information.alipay">
				</li>
				<li>
					<span>支付宝用户名：</span>
					<input type="text" v-model="information.alipay_username">
				</li>
				<li>
					<span>微信账号：</span>
					<input type="text" v-model="information.weChat_account">
				</li>
			</ul> -->

			<div class="btn">
				<button type="buttom" @click="modifyInformation">确认修改</button>
			</div>
			

		</div>
		 
	</div>
</template>
<script>
import info_manage_controller from "./info_manage_controller";
export default info_manage_controller;
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
// setting sun
.avatar {
		width: 100%;
		height: 100%;
}
#supplier-center{
	text-align: left;
	padding-top:2.5rem;
	.info-box{
		h1{
				line-height: 2.25rem;
				color:#888;
				padding:0 0.875rem;
				font-size:16px;
				text-align: left;
		}

		ul{
			h1{
				line-height: 2.25rem;
				color:#888;
				padding:0 0.875rem;
				font-size:16px;
				text-align: left;
			}
			li{
				background-color: #fff;
				line-height: 2.75rem;
				font-size:14px;
				text-align: left;
				padding:0 1.25rem;
				border-bottom:solid 0.0625rem #ebebeb;
				display: flex;
				input{
					border:none;
					flex:1;
				}
				i{
					font-size:1.5rem;
					color:#c9c9c9;
					line-height: 3.75rem;
				}
				
			}
			#logo{
				line-height: 3.75rem;
				height:3.75rem;
				position: relative;
				justify-content: space-between;
				span{
					line-height: 2.75rem;
				}
				.spare{
					position: absolute;
					right: 2.75rem;
					top:0.375rem;
					width:3rem;
					height:3rem;
					border:0.0625rem dashed #ccc;
					background-color: #fafafa;
					border-radius: 0.1875rem;
					margin:0 auto;
					display: flex;
					i{
						font-size:1.5rem;
						margin:0 auto;
						line-height: 3rem;
						color:#ccc;
						
					}
				}
			}
		}
		.btn{
			margin:1.25rem 0;
			padding:0 0.875rem;
			font-size:16px;
			button{
				color:#fff;
				background-color: #f15353;
				height:2.875rem;
				border-radius: 0.25rem;
				border:none;
				width:100%;
			}
		}
	}
}

</style>
