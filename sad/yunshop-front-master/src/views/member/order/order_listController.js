import cTitle from 'components/title';
import {Loadmore} from 'mint-ui';
import cOrderList from 'components/orderList';
import {InfiniteScroll} from 'mint-ui';
import PullToRefresh from 'components/pull-to-refresh.vue'

export default {
  data() {
    return {
      toi: this.fun.getKeyByI(),
      topStatus: '',
      bottomStatus: '',
      getAllLoaded: false,
      //当前的订单状态
      selected: 0,
      //上一次的订单状态
      last_status: 0,
      loading: false,
      allLoaded: false,
      goload: false,
      isLoadMore: true,
      action: '',
      //全部订单
      waitsaomiao:[],
      orderList: [],
      //待付款
      waitPayList: [],
      //待发货
      waitSendList: [],
      //全待收货
      waitReceiveList: [],
      //已完成
      waitCompleteList: [],
      //待付款-多订单合并付款的订单id数组
      order_ids: [],
      checkList: [],
      //是否开启合并支付
      isMultiplePay: false,
      page: 1,
      total_page: 0,
      detailUrl: 'orderdetail',
      //orderList:[{goods:["asdf","adfa"],isVirtual:true,buttonList:[{name:"查看物流",button_value:"8",api:"order/confirm"}]},{goods:["asdf","adfa","adfa"],buttonList:[{name:"评价",button_value:"10",api:"order/comment"},{name:"确认收货",button_value:"5",api:"order/confirm"}]},{goods:["adfa"],buttonList:[{name:"查看物流",button_value:"8",api:"order/comment"},{name:"付款",button_value:"1",api:"order/pay"},{name:"删除",button_value:"12",api:"order/delete"}]}]

      //shop 商城，cashier 收银台 store 门店
      orderType: 'shop'
    };
  },
  methods:
    {
      swichTabTItem() {
        this.initData();
        this.getOrderList(this.selected);

      },
      //顶部状态发生变化相应事件
      handleTopChange(status) {
        this.topStatus = status;
      },
      //底部状态发生变化相应事件
      handleBottomChange(status) {
        this.allLoaded = false;// 若数据已全部获取完毕,不在显示加载更多组件
        this.bottomStatus = status;
      },
      initData() {
        this.page = 1;
        this.goload = true;
        this.total_page = 0;
        this.loading = true;
        this.allLoaded = false;
        this.isLoadMore = true;

      },
      //更新
      loadTop() {
        this.initData();
        this.getOrderList(this.selected);
        this.$refs.loadmore.onTopLoaded();
      },
      // 加载更多
      loadBottom() {

        //	this.allLoaded = true;// 若数据已全部获取完毕,不在显示加载更多组件
        if (this.isLoadMore) {
          console.log('加载更多');

          this.getMoreData(this.page, this.selected);
          this.$refs.loadmore.onBottomLoaded();

        } else {
          console.log('没有更多数据');
        }


      },
      getOrderList(index) {
        if (this.$route.params.orderType && this.$route.params.orderType == 'cashier') {
          this.orderType = 'cashier';
          this.detailUrl = 'cashierOrderdetail';
        } else if (this.$route.params.orderType && this.$route.params.orderType == 'store') {
          this.orderType = 'store';
          this.detailUrl = 'storeOrderdetail';
        }
        console.log('list:::', this.orderType);
        //this.action;
        if (index == 0) {
          this.action = 'order.list';
          if (this.orderType == 'cashier') {
            this.action = 'plugin.store-cashier.frontend.Order.list';
          } else if (this.orderType == 'store') {
            this.action = 'plugin.store-cashier.frontend.store.center.order-list.index';
          } else if (this.orderType == 'supplier') {
            this.action = 'plugin.supplier.frontend.order.index';
          }
        } else if (index == 1) {
          this.action = 'order.list.waitPay';
          if (this.orderType == 'cashier') {
            this.action = 'plugin.store-cashier.frontend.Order.list.waitPay';
          } else if (this.orderType == 'store') {
            this.action = 'plugin.store-cashier.frontend.store.center.order-list.waitPay';
          } else if (this.orderType == 'supplier') {
            this.action = 'plugin.supplier.frontend.order.wait-pay';
          }
        } else if (index == 2) {
          this.action = 'order.list.waitSend';
          if (this.orderType == 'store') {
            this.action = 'plugin.store-cashier.frontend.store.center.order-list.waitSend';
          } else if (this.orderType == 'supplier') {
            this.action = 'plugin.supplier.frontend.order.wait-send';
          }
        } else if (index == 3) {
          this.action = 'order.list.waitReceive';
          if (this.orderType == 'store') {
            this.action = 'plugin.store-cashier.frontend.store.center.order-list.waitReceive';
          } else if (this.orderType == 'supplier') {
            this.action = 'plugin.supplier.frontend.order.wait-receive';
          }
        }  else if (index == 5) {
            this.action = 'order.list.scanHou';
            // if (this.orderType == 'cashier') {
            //     this.action = 'plugin.store-cashier.frontend.Order.list.waitPay';
            // } else if (this.orderType == 'store') {
            //     this.action = 'plugin.store-cashier.frontend.store.center.order-list.waitPay';
            // } else if (this.orderType == 'supplier') {
            //     this.action = 'plugin.supplier.frontend.order.wait-pay';
            // }
        }
        else {
          this.action = 'order.list.Completed';
          if (this.orderType == 'cashier') {
            this.action = 'plugin.store-cashier.frontend.Order.list.Completed';
          } else if (this.orderType == 'store') {
            this.action = 'plugin.store-cashier.frontend.store.center.order-list.Completed';
          } else if (this.orderType == 'supplier') {
            this.action = 'plugin.supplier.frontend.order.completed';
          }
        }

        this.getNetData(this.action, index);

      },
      toDetail(order) {
        console.log(order);

        this.$router.push(this.fun.getUrl('orderdetail', {order_id: order.id, isDetail: true, orderType: 'supplier'}));
      },
      //确认收货订单
      cofirmOrderAction(order) {

        if (this.selected == 0) {
          //全部订单列表
          this.getOrderList(this.selected);

        } else if (order == 'pay') {
          this.getOrderList(this.selected);
        } else {

          this.waitReceiveList.splice(this.waitReceiveList.indexOf(order), 1);


        }
      },
      //待付款状态下-多订单合并支付,order_ids-订单id数组
      toMultiplePay() {
        //type-1订单支付，type-2订单合并支付

        this.$router.push(this.fun.getUrl('orderpay', {status: 2, order_ids: encodeURI(this.order_ids)}));
        var child = this.$refs.mychild;
        //调用子组件的方法
        child.setCheckList();
        this.isMultiplePay = false;

      },
      //接收到合并多订单支付的通知方法
      multiplePayAction(order_ids) {

        this.order_ids = order_ids;
        if (order_ids.length > 0) {
          this.isMultiplePay = true;

        } else {
          this.isMultiplePay = false;

        }
      },
      //发起http请求
      getNetData(api, index) {
        //alert(api,index);
        var that = this;

        if (this.orderType == 'supplier') {
          $http.post(api, {
            page: 1,
            "i": this.fun.getKeyByI(),
            "type": this.fun.getTyep()
          }, '正在获取订单...').then(function (response) {
            console.log('显示', response);
            if (response.result == 1) {

              console.log(index);
              var myData = response.data;
              that.total_page = myData.total;
              if (index == 0) {
                that.orderList = myData.data;
                //alert(that.selected);
              } else if (index == 1) {
                that.waitPayList = myData.data;


              } else if (index == 2) {
                that.waitSendList = myData.data;

              } else if (index == 3) {
                that.waitReceiveList = myData.data;

              }else if (index == 5) {
                  console.log(myData.data )
                  that.waitsaomiao = myData.data;

              } else {
                that.waitCompleteList = myData.data;
             }

            }
          }, function (response) {
            // error callback
          });
        } else {
          $http.get(api, {
            page: 1,
            "i": this.fun.getKeyByI(),
            "type": this.fun.getTyep()
          }, '正在获取订单...').then(function (response) {
            console.log('显示', response);
            if (response.result == 1) {

              console.log(index);
              var myData = response.data;
              that.total_page = myData.total;
              if (index == 0) {
                that.orderList = myData.data;
                //alert(that.selected);
              } else if (index == 1) {
                that.waitPayList = myData.data;


              } else if (index == 2) {
                that.waitSendList = myData.data;
                console.log( myData.data)

              } else if (index == 3) {
                that.waitReceiveList = myData.data;
                  console.log(myData.data)

              }else if (index == 5) {
                  console.log( myData.data)
                  that.waitsaomiao = myData.data;

              } else {
                that.waitCompleteList = myData.data;
             }

            }
          }, function (response) {
            // error callback
          });
        }


      },

      getMoreData(page, index) {
        var that = this;
        if (this.page == this.total_page) {

          return;

        }
        if (this.page >= this.total_page) {
          that.loading = true;
          that.allLoaded = true;
          return;

        } else {
          this.page = this.page + 1;
          $http.get(this.action, {
            page: this.page,
            "i": this.fun.getKeyByI(),
            "type": this.fun.getTyep()
          }, '正在获取更多订单...').then(function (response) {

            if (response.result == 1) {
              var myData = response.data;

              that.loading = false;
              that.allLoaded = false;
              if (index == 0) {

                that.orderList = that.orderList.concat(myData.data);//数组拼接

              } else if (index == 1) {
                that.waitPayList = that.waitPayList.concat(myData.data);

              } else if (index == 2) {
                that.waitSendList = that.waitSendList.concat(myData.data);

              } else if (index == 3) {
                that.waitReceiveList = that.waitReceiveList.concat(myData.data);

              } else {
                that.waitCompleteList = that.waitCompleteList.concat(myData.data);

              }

            } else {
              that.page = that.page - 1;
              that.loading = true;
              that.allLoaded = true;
              that.isLoadMore = false;
              return;
            }
          }, function (response) {
            // error callback
          });

        }


      }
    },
  computed: {},
  created() {
    this.last_status = this.selected;
  },
  mounted() {
    this.toi = this.fun.getKeyByI();


  },
  updated() {

  },
  activated() {
    console.log('opp+++++=====', this.$route.params);
    this.toi = this.fun.getKeyByI();
    //   this.$route.params.member.$on('selectedstatus', (text) => {

    //       this.selected = text.status;

    //   });
    console.log('ccccc::', this.$route.params);
    if (this.$route.params.orderType && this.$route.params.orderType == 'cashier') {
      this.orderType = 'cashier';
      this.detailUrl = 'cashierOrderdetail';
    } else if (this.$route.params.orderType && this.$route.params.orderType == 'store') {
      this.orderType = 'store';
      this.detailUrl = 'storeOrderdetail';
    } else if (this.$route.params.orderType && this.$route.params.orderType == 'supplier') {
      this.orderType = 'supplier';
      this.detailUrl = 'supplierOrderdetail';
    } else {
      this.orderType = 'shop';
      this.detailUrl = 'orderdetail';
    }
    this.selected = this.$route.params.status;//this.$store.state.status;

    //alert(this.selected);
    this.initData();
    this.getOrderList(this.selected);

  },
  components: {cTitle, cOrderList, PullToRefresh}
}