<template>
    
    <div id="details">
    	<c-title :hide="false" text='详情'></c-title>
    	<div style="height: 40px;"></div>
		        <!--id	int	主键
  uniacid	int	公众号ID
  old_money	int	变动前余额值
  change_money	DECIMAL(14,2)	变动余额值
  new_money	DECIMAL(14,2)	变动后余额值
  type	TINYINT	1收入，2支出
  service_type	tinyint	业务类型
  serial_number	varchar	流水号,订单号
  operator	int	操作者
  operator_id	int	操作者ID
  remark	varchar	公众号ID
  created_at	int	变动时间-->
		<div id="tbs">
			<div class="left">订单编号</div>
			<div class="right">{{item.serial_number}}</div>
			<div class="left">金额</div>
			<div class="right">{{item.change_money}}</div>	
			<div class="left">业务类型</div>
			<div class="right">{{item.service_type_name}}</div>
			<div class="left">余额</div>
			<div class="right">{{item.new_money}}</div>
			<!--<div class="left" v-if="item.service_type==3">对方会员</div>
			<div class="right" v-if="item.service_type==3">{{item.operator_id}}</div>				-->
		</div>
    	
    </div>
   
</template>
<script>
import member_balance_detailscontroller from './member_balance_detailscontroller';
export default member_balance_detailscontroller;

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
#details{
	#tbs{ display: flex;align-items:center; background: #FFF; flex-flow: row wrap; padding:0.625rem 0.875rem; line-height:1.875rem;
		font-size:12px;
		.left{text-align: left;flex: 50%;color:#8c8c8c;}
		.right{text-align: right;flex: 50%;}
	}
}
</style>