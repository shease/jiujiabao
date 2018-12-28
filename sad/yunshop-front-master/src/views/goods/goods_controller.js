import {mapState} from 'vuex';
import cGoods from 'components/goods/goods';
import storeGoods from 'components/goods/store_goods';
import courseGoods from 'components/goods/course';

var goods_id = "";

//wx.config(response.data.js); 微信认证
export default {
  data() {
    return {
      goods_type:'',
      goods_id:'',
      cGoods:'cGoods',
      storeGoods:'storeGoods',
      courseGoods:'courseGoods',
      goodsInfo:{
        thumb_url:[],
      },
    }
  },
  created() {
    console.log('c_created');
    console.log('goods_id:::', this.$route.params.id);
    this.toi = this.fun.getKeyByI();
    goods_id = this.$route.params.id;
    this.goods_id = goods_id;
    this.getData();//获取数据
  },
  activated() {
    console.log('g_active');
    console.log('g_active_goods_id:::', this.$route.params.id);
    //this.getData();//获取数据

  },

  mounted() {
    console.log('g_mounted');
    console.log('g_mounted_goods_id:::', this.$route.params.id);
    //this.getData();//获取数据

  },

  methods: {
    //获取数据
    getData() {
      let that = this;
      console.log('goods_id1:::', this.$route.params.id);
      console.log('goods_id3:::', goods_id);

      let json = { id: goods_id, "i": this.fun.getKeyByI(), "type": this.fun.getTyep(), "mid": this.fun.getKeyByMid(),'t':1111};
      $http.get('goods.goods.get-goods', json, "加载中...").then(function (res) {
        if (res.result == 1) {
          let goodsInfo = res.data;
          that.goods_info = goodsInfo;
          console.log('result_goods_id', goods_id);
          console.log('goodsInfo9', res.data);
          console.log('goodsInfo8.store_goods', goodsInfo.store_goods);
          if (goodsInfo.is_course == 1) {
            that.goods_type = 'course';
          } else if (goodsInfo.store_goods) {
            that.goods_type = 'store_goods';
          } else {
            that.goods_type = 'goods';
          }
          console.log('goods_type', that.goods_type);
        } else {
          console.log(res.msg);
          Toast(res.msg);
        }

      }, function (res) {
        console.log(res);
      });
    },
  },

  watch: {
    $route(to, from) {
      let a = to;

      console.log('toroute:', to);
      // 对路由变化作出响应...

      if(to.name=="goods" && from.name=="goods"){


        goods_id = this.$route.params.id;

        console.log('watch goods id:', goods_id);

        this.getData();//获取数据
      }

    }
  },

  components: { cGoods, storeGoods,courseGoods },

  computed:{

    
  }
}  
