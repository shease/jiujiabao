import {mapState, mapMutations} from 'vuex';
import cTitle from '../../components/title';
import {Loadmore} from 'mint-ui';
import {Lazyload, Button,Toast} from 'mint-ui';
import {MessageBox} from 'mint-ui';
// import {setImmediate, setInterval} from 'core-js';

var haveShop = false;

export default {
  data() {
    return {
      toi: this.fun.getKeyByI(),
      myType: window.localStorage.type,
      // 华侨币
      coin: false,
      // pluginsList:{
      //     'conference': {enable:0, title:'ss'},
      //     'store_cashier':{enable:0, title:'ss'},
      //     'credit':{enable:0, title:'ss'},
      //     'ranking':{enable:0, title:'ss'},
      //     'article':{enable:0, title:'ss'},
      //     'clock_in':{enable:0, title:'ss'},
      //     'recharge_code':{enable:0, title:'ss'},
      // 	'video_demand':{enable:0, title:'ss'},
      // 	'store_apply':{enable:0, title:'ss'},
      // 	'supplier_apply':{enable:0, title:'ss'}
      // },

      pluginsList: [],

      coin_name: '',
      //是否开启关系链
      relation_switch: 0,
      // 不否开户爱心值插件
      isLove: false,
      // 爱心值名称
      love_name: '',
      //当前的会员model
      member_item: '',
      //是否有推广下线资格 0-无资格；1-有资格
      is_agent: 0,
      //我的推荐人
      MyReferrer: '',
      //二维码
      qrcode: '',
      allLoaded: false,
      //刷新组件的运行状态
      topStatus: '',
      //余额
      balance_value: '0.00',
      //积分
      integral: '',
      //优惠券
      coupon: '0.00',
      //会员名字
      username: '',
      //头像
      avatar: '',
      createtime: '',
      //余额
      credit: '',
      //版权
      copyright: '',
      //1男
      gender: 1,
      group_id: '',
      group_name: '',
      has_one_fans: {followed: 1, uid: 9},
      level_id: 2,
      //会员等级
      level_name: "",
      mobile: "",
      nickname: "",
      realname: "",
      uid: '',
      waitPay: 0,
      waitSend: 0,
      waitReceive: 0,
      waitrRefund: 0,
      //供应商申请
      supplier: '',
      haveShop: '',
      // 插件数组 [{ plugin_id: 0, name: '收藏', router: 'tab', icon: 'collect.png', to: 'collection' }]
      plugins: [],

      // poster: {
      // 	name: "",
      // 	logo: "",
      // 	img: "",
      // 	qr: "",
      // },
      poster: '',
      erweima:'',
      store_set: {
        is_cash_pay: '',
        is_open_cashier: '',
        is_write_information: ''
      },

      is_custom: false,//自定义参数
      custom_title: "",//自定义title
      custom_value: "",//自定义值

      is_validity: false,//会员等级时间限制
      validity_value: "",//会员等级时间限制 数据

      isELive: false,//生活缴费开关

      //会务
      conference: [],

      isStroe: false,

      is_credit: false,

      is_ranking: false,
      is_notice: false,
      notice_title: "文章",

      is_clockin: false,//早起打卡
      is_clockin_title: "",

      is_recharge_code: false,//充值码

      is_stroeWithdraw: false,//门店提现
      isApp: false,

      is_extension: false,//推广

      //课程中心
      is_course: false,
      signs: false,
      sign_name: '',
      helps: false,
      help_name: '',

      isMemberGrade: false,

      //冻结币
      froze_name: "",
      is_froze: false,

      //门店申请和供应商申请开关
      is_o2oApply: true,
      is_supplierApply: true,
      supplier_id: "",

      //显示提现
      isWithdraw: false,
      picMa:{}
    };
  },

  mounted() {
    //this.$store.commit('cfoots', { a: false });
    //var jpg = document.getElementById('jpg');
    //jpg.innerHTML = `<img src="../../static/app/images/photo-mr.jpg">`;

  },

  methods: {
    //获取扫码个数
    getMaNumber(){
        $http.get("member.member.memerfenxiang", {uid:localStorage.uid}).then((res)=>{
            // alert(JSON.stringify(res.data))
            this.picMa = res.data
            // alert(this.P)
        })
    },
    outInfo() {
      $http.get('member.logout.index').then((response) => {
        if (response.result == 1) {
          window.localStorage.myuserinfo = {};
          this.$store.commit('savemodel', {});
          this.$store.commit('alerts', response.msg);
          MessageBox.alert(response.msg).then(action => {

            this.$router.push(this.fun.getUrl('login'));
          });
        }
      }, (response) =>{
        console.log(response.msg)
      });
   },
    goback() {
      this.$router.go(-1);
    },
    openQrCode(e) {
      if(e=='block') {
          $http.get('order.merge-pay.code', {uid: this.uid}).then((res) => {
              if(res.msg=='成功'){
                  this.erweima = res.data.code.code
                  // alert(JSON.stringify(res))
              }else{
                 Toast(res.msg)
              }
          })
      }
      this.$refs.hook.style.display = e;
    },
    toOrderList(index) {
      //index: 0-全部订单 1-待付款 2-待发货 3- 待收货
      //window.localStorage.member = this;
       this.$router.push(this.fun.getUrl('orderlist', {status: index, member: this}));
      //this.$router.push({ name: "orderlist", params: { status: index, member: this },query:{i:this.toi} });
      this.$emit('selectedstatus', {status: index});
    },
    getMemberInfo() {

      var that = this;
      $http.get('member.member.getUserInfo', {
        "i": this.fun.getKeyByI(),
        "type": this.fun.getTyep()
      }).then(function (response) {

        if (response.result == 1) {
          that.supplier_id = response.data.uid;
          //console.log('cashier:::::::', response.data.cashier);
          if (response.data.cashier) {
            that.store_set.is_open_cashier = 1;
          }
          if (response.data.sign != undefined) {
            that.signs = response.data.sign.status;
            that.sign_name = response.data.sign.plugin_name;
          }
          if (response.data.help_center != undefined) {
            that.helps = response.data.help_center.status;
            that.help_name = response.data.help_center.button_name;
          }
          if (response.data.withdraw_status == 1) {
            // 显示提现
            that.isWithdraw = true;
          }
          that.haveShop = response.data.micro.status;
          that.isLove = response.data.love.status;
          that.love_name = response.data.love.love_name;
          that.relation_switch = response.data.relation_switch;
          that.supplier = response.data.supplier;//供应商申请
          that.member_item = response.data;
          that.coupon = response.data.income;
          that.$store.commit('savemodel', response.data);
          window.localStorage.uid = response.data.uid;
          var myData = response.data;
          that.is_agent = myData.is_agent.is_agent;
          //that.qrcode = myData.qr;//我的推广二维
          that.poster = myData.poster;//我的推广二维

          that.coin = (myData.coin) ? myData.coin.status : false;
          //console.error(666666,myData.coin.coin_name)
          that.coin_name = (myData.coin) ? myData.coin.coin_name : '';
          that.MyReferrer = myData.referral;
          that.avatar = myData.avatar;
          that.nickname = myData.nickname;
          that.integral = myData.integral;
          window.localStorage.setItem('integral', that.integral.text)
          that.copyright = myData.copyright;
          that.$store.commit('updateBanlace', {balance: myData.credit2});
          that.uid = myData.uid;

          //window.localStorage.setItem("mid",myData.uid);
          that.level_name = myData.level_name;
          that.credit = myData.credit;
          for (let i = 0; i < myData.order.length; i++) {
            //let i=0;i<myData.order.length;i++
            //0 待付款 1待发货 2待收货 3完成
            var item = myData.order[i];
            if (item.status == 0) {
              that.waitPay = item.total;

            } else if (item.status == 1) {
              that.waitSend = item.total;

            } else if (item.status == 2) {
              that.waitReceive = item.total;

            } else if (item.status == 11) {
              that.waitrRefund = item.total;
            }

            // that.waitPay = myData.order[0].total;
            // that.waitSend = myData.order[1].total;
            // that.waitReceive = myData.order[2].total;
            // that.waitrRefund = myData.order[3].total;
          }
          that.mobile = myData.mobile;


          if (!that.fun.isTextEmpty(myData.yz_member)) {
            that.custom_value = myData.yz_member.custom_value;
            that.getMemberInfo2(that.custom_value, myData.yz_member.validity);//获取自定义数据
          }

          //设置开关 生活缴费
          that.isELive = myData.elive.status;


          that.is_froze = response.data.froze.status;
          that.froze_name = response.data.froze.froze_name;


        } else {
          MessageBox.alert(response.msg);
        }

      }, function (response) {
        // error callback
      });

    },
    //获取自定义数据 validity会员等级时间限制
    getMemberInfo2(value, validity) {
      let that = this;


      $http.get('member.member.get-custom-field', {
        "i": this.fun.getKeyByI(),
        "type": this.fun.getTyep()
      }).then(function (response) {

        if (response.result == 1) {


          if (response.data.is_custom == "1" && !that.fun.isTextEmpty(value)) {
            that.custom_title = response.data.custom_title;
            that.is_custom = true;
          } else {
            that.is_custom = false;
          }
    //处理会员等级时间限制
          if (response.data.is_validity && response.data.term == 1) {
            if (that.fun.isTextEmpty(validity)) {
              that.validity_value = "";
            } else {
              that.validity_value = validity + "天";
            }
          } else {
            that.validity_value = "";
          }

        } else {
          //MessageBox.alert(response.msg);
        }

      }, function (response) {
        // error callback
      });
    },


    handleTopChange(status) {
      this.topStatus = status;

    },
    loadTop() {
      // load more data
      //console.log('刷新');
      //this.topStatus = '';
      this.getMemberInfo();
      //this.getMemberInfo2();
      this.$refs.loadmore.onTopLoaded();

    },
    loadBottom() {
      // load more data
      this.allLoaded = true;// if all data are loaded
      this.$refs.loadmore.onBottomLoaded();
    },
    recieveMessage(text) {

      console.log('监听到子组件变化' + text);
    },

    getConference() {
      var that = this;
      $http.get('plugin.conference.api.conference-activity.get-activity', {
        "i": this.fun.getKeyByI(),
        "type": this.fun.getTyep()
      }).then(function (response) {

        if (response.result == 1) {
          that.conference = response.data;
          console.log('conference1', response);
        } else {
          //MessageBox.alert(response.msg);
        }

      }, function (response) {
        //alert('fail');
        // error callback
      });
    },

    //获取是否可以申请门店
    getStroe() {
      var that = this;
      $http.get('plugin.store-cashier.frontend.store.store.verify-apply', {}).then(function (response) {

        if (response.result == 1) {
          that.isStroe = true;

        } else {
          that.isStroe = false;
          //MessageBox.alert(response.msg);
        }

      }, function (response) {
        that.isStroe = false;
      });
    },


    //信用值模块
    getCreditInfo() {
      var that = this;
      $http.get('plugin.credit.api.credit.get-credit-set', {}).then(function (response) {

        if (response.result == 1) {
          that.is_credit = response.data.is_credit == "1" ? true : false;

        } else {
          that.is_credit = false;
          //MessageBox.alert(response.msg);
        }

      }, function (response) {
        that.is_credit = false;
      });
    },


    //获取排行榜模块
    getRanking() {
      var that = this;
      $http.get('plugin.ranking.api.ranking.get-ranking-entry', {}).then(function (response) {

        if (response.result == 1) {
          that.is_ranking = response.data.is_ranking == "1" ? true : false;

        } else {
          that.is_ranking = false;
          //MessageBox.alert(response.msg);
        }

      }, function (response) {
        that.is_ranking = false;
      });
    },
    //获取文章设置
    getNotice() {
      var that = this;
      $http.get('plugin.article.api.article.get-article-set', {}).then(function (response) {

        if (response.result == 1) {
          that.is_notice = response.data.enabled == "1" ? true : false;
          that.notice_title = response.data.center;
        } else {
          that.is_notice = false;
        }

      }, function (response) {
        that.is_notice = false;
      });
    },

    //获取早起打卡设置
    getClockin() {
      var that = this;
      $http.get('plugin.clock-in.api.clock-in.get-set', {}).then(function (response) {

        if (response.result == 1) {
          that.is_clockin = response.data.is_clock_in == "1" ? true : false;
          that.is_clockin_title = response.data.plugin_name;
        } else {
          that.is_clockin = false;
        }

      }, function (response) {
        that.is_clockin = false;
      });
    },


    //充值码
    getRechargeCode() {
      var that = this;
      $http.get('plugin.recharge-code.frontend.code.is-open', {}).then(function (response) {

        if (response.result == 1) {
          that.is_recharge_code = response.data.status == 1 ? true : false;
        } else {
          that.is_recharge_code = false;
        }

      }, function (response) {
        that.is_recharge_code = false;
      });
    },


    //获取门店提现
    getStroeWithdraw() {
      var that = this;
      $http.get('plugin.store-cashier.frontend.store.center.is-store.index', {}).then(function (response) {

        if (response.result == 1) {
          that.is_stroeWithdraw = response.data.status == 1 ? true : false;
        } else {
          that.is_stroeWithdraw = false;
        }

      }, function (response) {
        that.is_stroeWithdraw = false;
      });
    },


    //推广
    getExtension() {
      var that = this;
      $http.get('member.member.isOpenRelation', {}).then(function (response) {

        if (response.result == 1) {
          that.is_extension = response.data.switch == 1 ? true : false;
        } else {
          that.is_stroeWithdraw = false;
        }

      }, function (response) {
        that.is_stroeWithdraw = false;
      });
    },

    //课程中心
    getCourse() {

      $http.get("plugin.video-demand.api.video-demand-member.get-video-demand", {}).then(response => {
        if (response.result == 1) {
          this.is_course = response.data.is_video_demand == 1 ? true : false;
        } else {
          this.is_course = false;
        }

      }).catch(error => {
        console.log(error)
      })

    },
    //跳转至会员权益
    gotoMemberGrade() {
      this.$router.push(this.fun.getUrl("MemberGradeList"));
    },
    getEnablePlugin() {
      var that = this;
      $http.get("member.member.getEnablePlugins", {}).then(response => {
        if (response.result == 1) {

          // response.data.forEach(function(item, index, arr) {

          // 	that.pluginsList[item.name].enable = 1;
          // 	that.pluginsList[item.name].title = item.title;

          // });
          this.pluginsList = response.data;


        } else {
          console.log('error:', response.data);
        }
      }).catch(error => {

        console.log(error)
      })
    },


    //会员权益插件是否开启

    getMemberGrade() {
      $http.get("member.member-level.is-open", {}).then(response => {
        if (response.result == 1) {
          this.isMemberGrade = response.data.is_open == 1 ? true : false;
        } else {
          this.isMemberGrade = false;
        }
      }).catch(error => {
        console.log(error)
      })
    },
    //冻结币
    frozenCoin() {
      this.$router.push(this.fun.getUrl("FrozenCoin"));
    },

    pluginGoto(item) {
      if (item.name == "article") {
        this.$router.push(this.fun.getUrl(item.url, {id: '0'}));
      } else if (item.name == "courier") {
        window.localStorage.setItem('couriername', item.title);
        this.$router.push(this.fun.getUrl(item.url));
      } else if (item.name == "supplier") {
        this.$router.push(this.fun.getUrl(item.url, {uid: this.supplier_id}));
      } else {
        this.$router.push(this.fun.getUrl(item.url));
      }
    },

  },
  activated() {
    //console.log('本地model');
    var province = localStorage.getItem("province");
    if (province == null) {
      this.fun.getAddressInfo();//获取地址json数据
    }
    this.isApp = this.fun.isApp();
    this.toi = this.fun.getKeyByI();
    this.getMemberInfo();
    this.getEnablePlugin();
    /*this.getConference();
    this.getStroe();
    this.getCreditInfo();
    this.getRanking();
    this.getNotice();
    this.getClockin();
    this.getRechargeCode();
    this.getCourse();*/

    this.getStroeWithdraw();
    this.getExtension();
    this.getMemberGrade();

    //this.getMemberInfo2();//获取自定义数据
    //console.log(this.$store.state.memberstate.member_model);


  },
  created() {
   this.toi = this.fun.getKeyByI();
      this.getMaNumber()
  },
  components: {cTitle, Loadmore}

}
