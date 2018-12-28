import cTitle from 'components/title';


export default {
  data() {
    return {
      mainInfo: '',
      cost_money: '',
      money_total: '',
      order_amount: '',
      order_count: '',
      supplier_id: '',
      mid: '',
    }
  },

  activated() {
    this.init();
    this.getSupplierInfo();
    this.mid = this.$route.params.uid;
  },
  mounted() {
  },

  methods: {
    init() {
      this.mainInfo = '';
      this.cost_money = '';
      this.money_total = '';
      this.order_amount = '';
      this.order_count = '';
    },

    goToInfo(res) {
      if (res === '1') {
        this.$router.push(this.fun.getUrl('SupInfoManage', {member_id: this.mid}));
      } else if (res === '2') {
        this.$router.push(this.fun.getUrl('CommodityManagement', {store_id: this.supplier_id, store: 'supplier'}));
      } else if (res === '3') {
        this.$router.push(this.fun.getUrl('supplierOrderlist', {status: '0', orderType: 'supplier'}));
      } else if (res === '4') {
        this.$router.push(this.fun.getUrl('supplierRecord', {supplier: 'supplier', member_id: this.mid}));
      } else if (res === '5') {
        this.$router.push(this.fun.getUrl('balance_withdrawals', {
          supplier: 'supplier',
          member_id: this.mid
        }));
      }

    },
    getSupplierInfo() {
      var that = this;
      var json = {member_id: this.mid};
      $http.post('plugin.supplier.frontend.index.index', json).then(function (response) {
        console.log('supplier888', response);
        if (response.result == 1) {
          that.supplier_id = response.data.data.supplier_id;
          that.cost_money = response.data.data.cost_money;
          that.money_total = response.data.data.money_total;
          that.order_amount = response.data.data.order_amount;
          that.order_count = response.data.data.order_count;
          that.mainInfo = response.data.data.member_model;
        } else {

        }
      }, function (response) {
        console.log(response);
      });
    }

  },
  components: {cTitle}
}
