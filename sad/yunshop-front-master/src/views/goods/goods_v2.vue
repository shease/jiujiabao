<template>

<transition>
        <div v-if="goods_type">
            <div  v-if="goods_type == 'goods'">
                <component :is="cGoods" :goods_id='goods_id' :goods_type="goods_type" :goods_info="goods_info"></component>
            </div>
            <div  v-else-if="goods_type == 'store_goods'">
                <component :is="storeGoods" :goods_id='goods_id' :goods_type="goods_type" :goods_info="goods_info"></component>
            </div>
            <div  v-else="goods_type == 'course'">
                <component :is="courseGoods" :goods_id='goods_id' :goods_type="goods_type" :goods_info="goods_info"></component>
            </div>
        </div>
</transition>
</template>


<script>
	import goods from './goods_controller';
	export default goods;
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
	@import '../../assets/css/goods.scss'
</style>
