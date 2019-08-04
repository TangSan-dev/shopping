<template>
    <div class="goods-main">
        <div class="goods" v-for="good in goodImg" :key="good.id">
            <img :src="good.img" alt="" class="goodImg">
            <p class="title">{{good.title}}</p>
            <p class="ctitle">{{good.ctitle}}</p>
        </div>
    </div>
</template>
<script>
import GoodsImgs from '@/api/article.js'
export default {
    name:'findGoods',
    data() {
        return {
            goodImg: []
        }
    },
    // 计算属性的遍历需要用到方法 遍历这个方法
    // 页面运行直接执行
    created(){
        GoodsImgs.getGoods()
        .then(res => {
            this.goodImg = res;
        })
    }

}
</script>
<style scoped lang="scss">
.goods-main{
    margin-top: 44px;
    .goods{
        width: 100%;
        .goodImg{
            width: 100%;
            height: 160px;
        }
        .title{
            margin-top: 10px;
            font-size: 16px;
            line-height: 30px;
            color: #010E0D;
        }
        .ctitle{
            font-size: 12px;
            color: #494949;
            line-height: 17px;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }
    }
}
</style>

