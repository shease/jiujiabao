import { Loadmore } from 'mint-ui';
import { Indicator, Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Field } from 'mint-ui';
import cTitle from 'components/title';



export default {
  data() {
    return {
      information: {my_name: '',phone_number: '',
                    store_name: '',store_logo: '',
                    bank_account: '',owner_name: '',opening_bank: '',opening_branch: '',enterprise_alipay: '',enterprise_alipay_user: '',alipay: '',alipay_username: '',weChat_account: ''},
      //setting sun
			imageUrl: '',
      uploadUrl:'',
      jumpState: true,

    }
  },

  //setting sun
	activated() {
    console.log('route++params',this.$route.params);
    this.init();
    this.urlUp();
    this.getJson();
	},
  methods: {
    //初始化信息
    init(){
      for(var item in this.information){
        this.information[item] = '';
      }
      this.imageUrl = "";
    },
    //获取数据
    getJson(){
        let that = this;
        let json = {member_id: this.$route.params.member_id};
        $http.post('plugin.supplier.frontend.info.index', json).then(function (response) {
              console.log('info--res',response);
              if(response.result == 1){
                  that.information.my_name = response.data.realname;
                  that.information.phone_number = response.data.mobile;
                  that.information.store_name = response.data.store_name;
                  that.information.store_logo = response.data.logo;
                  that.imageUrl = response.data.logo;
                  that.information.bank_account = response.data.company_bank;
                  that.information.owner_name = response.data.bank_username;
                  that.information.opening_bank = response.data.bank_of_accounts;
                  that.information.opening_branch = response.data.opening_branch;
                  that.information.enterprise_alipay = response.data.company_ali;
                  that.information.enterprise_alipay_user = response.data.company_ali_username;
                  that.information.alipay = response.data.ali;
                  that.information.alipay_username = response.data.ali_username;
                  that.information.weChat_account = response.data.wechat;
              }else{
                that.$message.error(response.msg);
              }

        }, function (response) {
          console.log(response)
        });
    },
    //确认修改
    modifyInformation(){
      var that = this;
      that.jumpJudge();
      if(that.jumpState == true){

        if(that.fun.isMoblie(that.information.phone_number)){
          this.$message.error('请输入正确的手机号');
          return;
        }
        if(!/^([1-9]{1})(\d{15}|\d{18})$/.test(that.information.bank_account)){
          this.$message.error('请输入正确的银行卡账号');
          return;
        }
        if(!/^(?:\w+\.?)*\w+@(?:\w+\.)+\w+|\d{9,11}$/.test(that.information.enterprise_alipay)){
          this.$message.error('请输入正确的企业支付宝账号');
          return;
        }
        if(!/^(?:\w+\.?)*\w+@(?:\w+\.)+\w+|\d{9,11}$/.test(that.information.alipay)){
          this.$message.error('请输入正确的支付宝账号');
          return;
        }
        if(!/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(that.information.weChat_account)){
          this.$message.error('请输入正确的微信号');
          return;
        }

          let json = {
            realname: that.information.my_name,
            mobile: that.information.phone_number,
            store_name: that.information.store_name,
            logo: that.information.store_logo,
            company_bank: that.information.bank_account,
            bank_username: that.information.owner_name,
            bank_of_accounts: that.information.opening_bank,
            opening_branch: that.information.opening_branch,
            company_ali: that.information.enterprise_alipay,
            company_ali_username: that.information.enterprise_alipay_user,
            ali: that.information.alipay,
            ali_username: that.information.alipay_username,
            wechat: that.information.weChat_account,
          };
          $http.post('plugin.supplier.frontend.info.edit',json).then(function (response) {
            console.log('midify',response);
            if(response.result === 1){
              that.$router.push(that.fun.getUrl("SupplierCenter",{uid: that.$route.params.member_id}));
              that.$message({
                message: '修改成功',
                type: 'success'
              });
            }else{
              that.$message.error(response.msg);
            }
          }, function (response) {
            console.log(response);
          });
      }else{
          that.$message({
            message: '填写信息不完整',
            type: 'warning'
          });
      }
    },
    //确认条件
    jumpJudge(){
        this.jumpState = true;
        for(var item in this.information){
            if(this.information[item] == ''){
              this.jumpState = false;
            }
        }
        if(this.imageUrl == ''){
            this.jumpState = false;
        }
    },
    //setting sun
		//上传url
		urlUp(){
			this.uploadUrl = this.fun.getRealUrl("plugin.supplier.frontend.info.upload",{});
    },
    //上传成功
		handleStoreSuccess(res, file) {
			console.log(res)
            this.imageUrl = URL.createObjectURL(file.raw);
            if (res.result == 1) {
                this.information.store_logo = res.data.img;
            } else {
                Toast(res.msg);
            }
    },
    //上传前
		beforeUpload(file) {
            //const isJPG = file.type === 'image/jpeg';
            const isPNG = (file.type === 'image/png' || file.type === 'image/jpeg');
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isPNG) {
                this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isPNG && isLt2M;
		},
  },
  components: {cTitle}
}