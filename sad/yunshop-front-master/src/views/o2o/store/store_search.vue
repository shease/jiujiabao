<template>
  <div id="search" transition="fadeInLeft">
    <div id="soso" class="uou" :class="{'mout':amout}">
      <div class="search">

        <div class="back" @click='goback'><i class="fa fa-angle-left"></i></div>
        <div class="search-box">
          <input type="text" placeholder="请输入内容" v-model="inputs" autofocus @click.native.focus='hidebox'>
          <yd-icon class="iconfont icon-sousuo1" custom size="1.125rem" color="#ccc" @click.native='search'></yd-icon>
        </div>
        <el-col :span="1">
          <i class="fa fa-th-large" v-show="view" @click="$store.commit('views')"></i>
          <i class="fa fa-th-list" v-show="!view" @click="$store.commit('views')"></i>
        </el-col>
      </div>

    </div>
    <div style="height: 3.4375rem;display: block;"></div>
    <mt-loadmore v-if="goload" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"
                 bottomPullText='' bottomDropText='下拉加载...' bottomLoadingText='' :autoFill='false'>
      <c-goodsList :goods='goods' text='搜索结果' class='osll' :styleCon="styleObj" :loading='loading' :jumpSo='jumpSo'
                   :storeId='storeId'></c-goodsList>
    </mt-loadmore>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex';
  import cGoodsList from 'components/goodsList';

  export default {
    data() {
      return {
        // title: '搜索',
        inputs: "",//input-name
        amout: false,//class
        allLoaded: true,//loadmore-all
        goload: false,//loadmore--if
        goods: [],//goodList 数据
        loading: false,//goodList--boolean

        styleObj: {
          display: 'inline-block',
          marginRight: '25px',
          backgroundColor: 'white',
          marginLeft: '5px',
          position: 'static'
        },
        jumpSo: true,
        storeId: '',
        pageNum: 1,

      }
    },
    computed: {
      ...mapState(['view']),
    },
    mounted() {
    },
    methods: {
      ...mapMutations(['views']),
      //通用功能
      showbox() {
        this.show = !this.show
      },
      //隐藏盒子
      hidebox() {
      },
      search() {
        this.pageNum = 1;
        this.goods = [];
        this.goload = true;
        this.gotoSearch();
      },
      //loadmore
      loadBottom() {

        if (this.allLoaded == false) {
          this.gotoSearch();
          this.$refs.loadmore.onBottomLoaded();
        }
      },
      //返回
      goback() {
        this.$router.go(-1);
      },
      //搜索请求
      gotoSearch() {
        let json = {
          store_id: this.$route.params.store_id,
          kwd: this.inputs,
          page: this.pageNum,
        };
        $http.get('plugin.store-cashier.frontend.store.goods.get-goods-by-kwd', json).then((response) => {
          if (response.result == 1) {
            this.pageNum = Number(this.pageNum) + 1;
            this.loading = false;
            this.allLoaded = false;
            // 搜索结果为空
            if (response.data.total <= 0) {
              this.loading = true;
              this.allLoaded = true;
              return;
            }
            this.goods = this.goods.concat(response.data.data);
            console.log('商品内容', this.goods);
            if (response.data.current_page == response.data.last_page) {
              this.loading = true;
              this.allLoaded = true;
              return;
            }
          } else {
            this.loading = true;
            this.allLoaded = true;
          }
        });
      }
    },
    activated() {
      this.storeId = this.$route.params.store_id;
      this.amout = false;
      this.loading = false;
      if (this.$route.params.fromHome !== 1) {
        // 不是从上一级点进的不清空
      } else {
        this.goods = [];
        this.inputs = "";
        this.pageNum = 1;
      }
    },
    created() {
      if (this.$route.params.fromHome !== 1) {
        this.goods = [];
        this.inputs = "";
        this.pageNum = 1;
      }
    },
    components: {
      cGoodsList,
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  #search {
    .osll {
      min-height: 100vh;
      overflow: scroll;
    }
    .uou {
      width: 100%;
      position: fixed;
      z-index: 99;
      top: 0px;
      transition: .2s;
      -webkit-transition: .2s;
    }
    #sort {
      line-height: 2.5rem;
      font-size: 14px;
    }
    .mout {
      top: -2.25rem;
    }
  }

  .search {
    height: 2.8125rem;
    line-height: 2.8125rem;
    position: relative;
    display: flex;
    overflow: hidden;
    background: #fff;
    border-bottom: 0.0625rem solid #f5f5f5;
    .el-button.el-button--default {
      float: left;
      width: 10%;
      border: none;
      padding-top: 1rem;
    }
    .el-input.el-input-group.el-input-group--append {
      float: left;
      width: 80%;
      margin-left: 2%;
      height: 2.8125rem;
    }
    .el-input-group__append .el-button.el-button--default {
      background: #f2f2f2;
      padding-top: 0.375rem;
      border-radius: 1.875rem;
      padding-right: 1.8125rem;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .el-input.el-input-group.el-input-group--append .el-input-group__append {
      background: #f5f5f5;
    }
    .el-col-1 {
      color: #666;
      font-size: 16px;
    }
    .el-input-group__append .el-button.el-button--default {
      background: #f2f2f2;
      padding-top: 0.375rem;
      border-radius: 1.875rem;
      padding-right: 1.8125rem;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .el-input.el-input-group.el-input-group--append .el-input-group__append {
      background: #f5f5f5;
    }
    .el-col-1 {
      width: 2.8125rem;
      position: absolute;
      right: 0px;
      color: #666;
      font-size: 16px;
    }
    .back {
      width: 2.8125rem;
      i {
        line-height: 2.8125rem;
        font-size: 1.5rem;
      }
    }
    .search-box {
      display: flex;
      justify-content: space-between;
      width: 75%;
      margin-top: 0.5rem;
      padding: 0 0.625rem;
      background-color: #f2f2f2;
      height: 1.75rem;
      line-height: 1.75rem;
      border-radius: 0.875rem;
      input {
        flex: 1;
        line-height: 1.75rem;
        border: none;
        color: #333;
      }
    }
  }

</style>
