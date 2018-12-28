import cTitle from 'components/title';
import {Navbar} from 'mint-ui';

export default {
  data() {
    return {
      toi: this.fun.getKeyByI(),
      selected: '',
      //代打款
      waitPay: [],
      //打款
      pay: [],
      //待审核
      review: [],
      //无效数据
      invalid: [],
      //全部数据
      all: [],
      // loadMore
      loading: false,
      allLoaded: false,
      goload: false,
      isLoadMore: true,
      page: 1,
      total_page: 0,
      orderType: '',
    };
  },
  methods: {
    swichTabTItem() {
      if (this.orderType === 'supplier') {
        this.getSupplierNetData();
      } else {
        this.getNetData(this.selected);
      }
    },
    //发起http请求
    getNetData(status) {
      var that = this;
      $http.get('finance.withdraw.withdraw-log', {
        status: status,
        "i": this.fun.getKeyByI(),
        "type": this.fun.getTyep()
      }, '正在获取列表...').then(function (response) {
        var mydata = response.data;
        that.total_page = mydata.total;
        that.allLoaded = false;
        if (!that.total_page) {
          that.total_page = 0;
        }
        if (that.selected.length == 0) {
          //全部
          that.all = mydata;
        }
        else if (that.selected == 0) {
          //待审核
          that.review = mydata;

        } else if (that.selected == 1) {
          //待打款
          that.waitPay = mydata;
        } else if (that.selected == 2) {
          //打款
          that.pay = mydata;

        } else if (that.selected == -1) {
          //无效
          that.invalid = mydata;
        }
      }, function (response) {
        // error callback
      });

    },
    //供应商
    getSupplierNetData() {
      if (this.selected.length == 0) {
        //全部
        this.api = 'plugin.supplier.frontend.withdraw-log.index';
      }
      else if (this.selected == 0) {
        //待审核
        this.api = 'plugin.supplier.frontend.withdraw-log.applying';
      } else if (this.selected == 1) {
        //待打款
        this.api = 'plugin.supplier.frontend.withdraw-log.pending';
      } else if (this.selected == 2) {
        //打款
        this.api = 'plugin.supplier.frontend.withdraw-log.already';
      } else if (this.selected == -1) {
        //无效
        this.api = 'plugin.supplier.frontend.withdraw-log.reject';
      }
      const that = this;
      $http.get(that.api, {
        member_id: that.member_id,
      }, '正在获取列表...').then(function (response) {
        var mydata = response.data.data;
        that.total_page = mydata.total;
        that.allLoaded = false;
        if (!that.total_page) {
          that.total_page = 0;
        }
        if (that.selected.length == 0) {
          //全部
          that.all = mydata;
        }
        else if (that.selected == 0) {
          //待审核
          that.review = mydata;

        } else if (that.selected == 1) {
          //待打款
          that.waitPay = mydata;
        } else if (that.selected == 2) {
          //打款
          that.pay = mydata;

        } else if (that.selected == -1) {
          //无效
          that.invalid = mydata;
        }
      }, function (response) {
        // error callback
      });

    },
    //更新
    loadTop() {
      this.initData();
      if (this.orderType === 'supplier') {
        this.getSupplierNetData();
      } else {
        this.getNetData(this.selected);
      }
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
        $http.get(that.api, {
          page: this.page,
          member_id: that.member_id,
        }, '正在获取更多订单...').then(function (response) {

          if (response.result === 1) {
            var myData = response.data.data;

            that.loading = false;
            that.allLoaded = false;
            if (index.length == 0) {
              //全部
              that.all = that.all.concat(myData.data);//数组拼接
            }
            else if (index == 0) {
              //待审核
              that.review = that.review.concat(myData.data);

            } else if (index == 1) {
              //待打款
              that.waitPay = that.waitPay.concat(myData.data);
            } else if (index == 2) {
              //打款
              that.pay = that.pay.concat(myData.data);

            } else if (index == -1) {
              //无效
              that.invalid = that.invalid.concat(myData.data);
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
    },
    initData() {
      this.page = 1;
      this.goload = true;
      this.total_page = 0;
      this.loading = true;
      this.allLoaded = false;
      this.isLoadMore = true;

    },

  },
  activated() {
    this.toi = this.fun.getKeyByI();
    this.initData();
    if (this.$route.params.supplier === 'supplier') {
      this.orderType = 'supplier';
      this.member_id = this.$route.params.member_id;
      this.getSupplierNetData();
    } else {
      this.getNetData('');
    }
  },
  components: {cTitle}
}