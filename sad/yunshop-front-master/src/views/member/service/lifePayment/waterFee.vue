<template>
	<div id="electricity" :class="'electricity'+$store.state.service.lang">
		<c-title :hide="false" :text='language.title'></c-title>
        <div style="height:40px"></div>
        
        <div class="telep">
	        <p>
                <span>用户编号</span>
	            <input type="number" :placeholder="language.placeTip" v-model.lazy="userCode">
	        </p>
        </div>
        
         <div class="content">
		<div class="maleall">
			<label for="male"
			       class="males"><span style="margin-right: 10px;">所在省份: </span>
				<el-select v-model="provicevalue"
				           placeholder="请选择省份"
				           @change="selectProviceHandle">
					<el-option v-for="item in provinceoptions"
					           :label="item.areaname"
                               :key="item.id"
					           :value="item.id">
					</el-option>
				</el-select>
			</label>
		</div>
		<div class="maleall">
			<label for="male"
			       class="males"><span style="margin-right: 10px;">所在城市: </span>
				<el-select v-model="cityvalue"
				           placeholder="请选择城市"
                            @visible-change="tipChangeEvent"
				           @change="selectCityHandle">
					<el-option v-for="item in cityoptions"
					           :label="item.areaname"
                               :key="item.id"
					           :value="item.id">
					</el-option>
				</el-select> 
			</label>
		</div>         	
	        <form action="" method="" class="form">
		        <div class="form-group">
		            <label class="form-help" for="">{{language.company}}</label>
		            <div class="form-controler"  @click="chooseCompony">{{company}}
		            	<i class="iconfont icon-right" v-if="$store.state.service.lang=='ch'"></i>
		            	<i class="iconfont icon-left" v-else="$store.state.service.lang=='wei'"></i>
		            </div>
		        </div>
		        <div class="form-group">
		            <label class="form-help" for="">{{language.contract}}</label>
		            <input class="form-controler" type="number" :placeholder="language.placeContract" v-model.lazy="contract">
		        </div>	        
		        <div class="form-group">
		            <label class="form-help" for="">{{language.money}}</label>
		            <input class="form-controler" type="number" :placeholder="language.placeMoney" v-model.lazy="sourceMoney">
		        </div>
	        </form>
	    </div>
	    
	    <mt-popup
		  	v-model="popupVisible"
		  	position="bottom">
		  	<div class="popUp">
		  		<div class="title"><span class="left" @click="chooseCompony">{{language.cancle}}</span>{{language.company}}<span class="right" @click="chooseCompony">{{language.confirm}}</span></div>
			  	<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
		  	</div>
		  	
		</mt-popup>

        <template>
        <div class="amount">
          <button type="button" @click='confirm'>{{language.btn}}</button></div>
        </template>
        
        
        <div class="m-footer" v-if="false">
            <p class="subtotal"><span>{{language.subtotal}}</span> <span>¥{{sourceMoney}}</span></p>
            <div class="clear"></div>
            <div class="integral">
                <div>
                    <b>{{language.score}}</b> <span>{{language.scoreTip1}}{{score}}{{language.scoreTip2}}{{scoreMoney}}{{language.yuan}}</span>
                </div>
                <mt-switch :class="{rt:$store.state.service.lang=='ch',lf:!$store.state.service.lang=='wei'}" v-model="useScore"></mt-switch>
            </div>
            <!--<p class="poundage">注：手续费为{{poundage}}%</p>-->
            <div class="clear"></div>
            <div class="amount" :class="{'disableds':disableds}">
                <span>{{language.total}}<b>{{computedMoney}}</b></span>
                
                    <button type="button">{{language.btn}}</button>
                
            </div>
        </div>
        
	</div>
</template>

<script>
	import  waterFee_controller from './waterFee_controller';
	export default waterFee_controller;
</script>
<style type="text/css">
::-webkit-input-placeholder { /* WebKit browsers */
color:#8c8c8c;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
color:#8c8c8c;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
color:#8c8c8c;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
color:#8c8c8c;
}
</style>
<style  lang="scss" rel="stylesheet/scss" scoped>
/*　input[placeholder], [placeholder], *[placeholder] { 
color:red !important; 
} 　*/
*{box-sizing: border-box;}
.electricitych{
	.poundage{color: red;font-size: 12px;}
	.maleall{
        background-color: #fff;
        span {
            font-size: 14px;
            vertical-align: middle;
            width: auto;
            margin-left: -0.9375rem;
            -webkit-box-flex: 0;
            -ms-flex: none;
            flex: none;
            line-height: 3.125rem;
        }
    } 
	.telep{
        margin-top:0.625rem;
        margin-bottom:0.625rem;
        padding:0.625rem 0.875rem;
        background:#fff;
        p{
            input{
                padding-bottom: 0.625rem;
                width:100%;
                height:100%;
                border:0;
                outline:0;
                color:#333;
                font-size:24px;
                border-bottom:solid 0.0625rem #ebebeb;  
                
            }    
            span{
                display: block;
                line-height: 1.875rem;
                text-align: left;
                font-size:14px;
            }     
        }
    }
    
    .content{
	    .form{
            background-color: #fff;
            margin-top:0.625rem;
            font-size:16px;
            padding-left:0.875rem;
	      	.form-group{
	        	padding-right:14px;
	        	height:2.8125rem;
	        	border-top:0.0625rem solid #ebebeb;
	        	display: -webkit-flex; /* Safari */
  				display: flex;
	        	flex-flow: row;
	        	.form-help{
	         	 	width:6.25rem;
	          		height:2.8125rem;
	          		line-height:2.8125rem;
	          		text-align:left;
	        	}
	        	.form-controler{
                    color:#8c8c8c;
	          		flex:1;
	          		height:auto;
	          		line-height: 2.8125rem;
	          		float:left;
	          		border:0;
	          		outline:0;
	          		text-align: left;
	          		i{font-size: 23px;float: right;}
	        	}
	      	}
	    }
	}
	
	.popUp{
		width: 100%;
		background:#fff;
		.title{
			height: 2.8125rem;
			line-height: 2.8125rem;
			border-bottom: 0.0625rem solid #f3f5f7;
			padding:0 0.9375rem;
			.left{float: left;}
			.right{float: right;color:#1bba9e;}
		}
	}
        .amount{
            padding:0 0 0 0rem;
            margin-bottom:0;
            box-sizing:border-box;
            span{
               color:#333;
                font-size:16px;
                float:left;
            }
            button{
                width:90%;
                height:2.875rem;
                color:#fff;
                font-size:16px;
                background:#f15353;
                border:0;
                border-radius:0.375rem;
                margin-top:1.25rem;
                
            }
        }	
    .m-footer{
        width:100%;
        background:#fff;
        position: fixed;
        bottom: 0;
        .subtotal{
            height:2.5rem;
            line-height:2.5rem;
            padding:0 0.8125rem;
            border-bottom:0.0625rem solid #ccc;
            margin:0;
            span:first-child{
                color:#333;
                font-size:16px;
                float:left;
            }
            span:last-child{
                color:12px;
                color:#333;
                float:right;
            }
        }
        .integral{
            height:2.8125rem;
            line-height:2.8125rem;
            padding:0 0.8125rem;
            div{
            	float:left;
                b{
                    color:#333;
                    font-size:16px;
                    font-weight:noraml;
                }
                span{
                    color:#333;
                    font-size:12px;
                }
            }
        }
        .amount.disableds{
         button{
        	background:#ccc;
        }	
        }        

    } 
}
.electricitywei{
	.telep{
        margin-top:0.625rem;
        margin-bottom:0.625rem;
        padding:0.625rem 0.875rem;
        background:#fff;
        p{
            input{
                padding-bottom: 0.625rem;
                width:100%;
                height:100%;
                border:0;
                outline:0;
                color:#333;
                font-size:24px;
                border-bottom:solid 0.0625rem #ebebeb; 
            }
            span{
                display: block;
                line-height: 1.875rem;
                text-align: left;
                font-size:14px;
            } 
        }
    }
    
    .content{
    	background:#fff;
	    .form{
	      	.form-group{
	        	padding:0 0.9375rem;
	        	height:2.8125rem;
	        	border-top:0.0625rem solid #ccc;
	        	display: -webkit-flex; /* Safari */
  				display: flex;
	        	flex-flow: row;
	        	.form-help{
	        		order:2;
	         	 	width:5rem;
	          		height:2.8125rem;
	          		line-height:2.8125rem;
	          		text-align:right;
	        	}
	        	
	        	.form-controler{
	          		flex:1;
	          		height:2.8125rem;
	          		line-height: 2.8125rem;
	          		float:left;
	          		border:0;
	          		outline:0;
	          		text-align: right;
	          		i{font-size: 23px;float: left;}
	        	}
	      	}
	    }
	}
	
	.popUp{
		width: 100%;
		background:#fff;
		.title{
			height: 2.8125rem;
			line-height: 2.8125rem;
			border-bottom: 0.0625rem solid #f3f5f7;
			padding:0 0.9375rem;
			.left{float:right ;}
			.right{float: left;color:#1bba9e;}
		}
	}
	
    .m-footer{
        width:100%;
        background:#fff;
        position: fixed;
        bottom: 0;
        .subtotal{
            height:2.5rem;
            line-height:2.5rem;
            padding:0 0.8125rem;
            border-bottom:0.0625rem solid #ccc;
            margin:0;
            span:first-child{
                color:#333;
                font-size:16px;
                float:right;
            }
            span:last-child{
                color:12px;
                color:#333;
                float:left;
            }
        }
        .integral{
            height:2.8125rem;
            line-height:2.8125rem;
            padding:0 0.8125rem;
            div{
            	float:right;
                b{
                    color:#333;
                    font-size:16px;
                    font-weight:noraml;
                    float:right;
                }
                span{
                    color:#333;
                    font-size:12px;
                }
            }
        }
        .amount{
            height:3.125rem;
            line-height:3.125rem;
            padding:0 0 0 0.8125rem;
            margin-bottom:0;
            box-sizing:border-box;
            span{
                color:#333;
                font-size:16px;
                float:left;
            }
            button{
                width:6.5625rem;
                height:2.5rem;
                color:#fff;
                font-size:16px;
                background:#ff951b;
                border:0;
                border-radius:0.1875rem;
                margin-top:0.5625rem;
                float:right;
            }
        }
    }  
}
</style>