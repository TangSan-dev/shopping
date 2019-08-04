<template>
    <div class="sub-kind-main">
       <!-- header -->
       <div class="header">
            <div class="header-bar">
                <img src="@/assets/imgs/icons/rutern.png" @click="$router.go(-1)" alt class="icon icon-rutern">
                <span class="title">内衣</span>
                <div class="icon-chat-cart">
                    <img src="@/assets/imgs/icons/chat.png" alt class="icon icon-chat">
                    <router-link :to="{name:'cart',params:{id:123}}"><img src="@/assets/imgs/icons/cart.png" alt class="icon icon-cart"></router-link>
                </div>
            </div>
            <ul class="choose">
                <li class="choose-item">新品</li>
                <li class="choose-item" @click="sortImgs">销量
                    <img class="icon icon-sort" :src="sortUp" alt="">
                    <img class="icon icon-sort" :src="sortDown" alt="">
                </li>
                <li class="choose-item" @click="priceImgs">价格
                    <img class="icon icon-sort" :src="priceUp" alt="">
                    <img class="icon icon-sort" :src="priceDown" alt="">
                </li>
                <li class="choose-item" @click="kinds">筛选</li>
            </ul>
        </div>
        <div class="one">
            <ul class="kinds" v-show = "!kindShow">
                <li class="kinds-item">无痕</li>
                <li class="kinds-item">美背</li>
                <li class="kinds-item">运动</li>
                <li class="kinds-item">性感</li>
            </ul>
            
            <div class="clothe">
                <ul class="exhibition">
                    <router-link class="img-block" tag="li" v-for="m in sortImg" :key="m.id" :to="{name:'goodsDetail',params:{subKindId:$route.params.subKindId,id:m.id}}">
                        <img :src="m.img" alt="" class="detail">
                        <p class="name">{{m.name}}</p>
                        <p class="pes">{{m.pes}}</p>
                        <p class="price">￥ {{m.price}}</p>
                    </router-link>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<script>
import KindImgs from '@/api/kind.js'
export default {
    data(){
        return {
            KindImgs:[],
            clo: [],
            // 筛选显示
            kindShow: true,
            sortUp: require('@/assets/imgs/icons/sort-asc.png'),
            sortDown: require('@/assets/imgs/icons/sort-desc.png'),
            priceUp: require('@/assets/imgs/icons/sort-asc.png'),
            priceDown: require('@/assets/imgs/icons/sort-desc.png'),
        }
    },
    created(){
        KindImgs.getKindImgs()
        .then(res => {
            this.KindImgs = res;
            this.clo = res.concat();
            console.log(res)
        })
    },
    methods: {
        kinds(){
            this.kindShow = !this.kindShow
        },
        // 销量
        sortImgs(){
            if(this.sortUp == require('@/assets/imgs/icons/sort-asc.png') && this.sortDown == require('@/assets/imgs/icons/sort-desc.png')){
                this.sortUp = require('@/assets/imgs/icons/sort-up.png');
            }else if(this.sortUp == require('@/assets/imgs/icons/sort-up.png') && this.sortDown == require('@/assets/imgs/icons/sort-desc.png')){
                this.sortDown = require('@/assets/imgs/icons/sort-down.png');
                this.sortUp = require('@/assets/imgs/icons/sort-asc.png');
            }else{
                this.sortUp = require('@/assets/imgs/icons/sort-asc.png');
                this.sortDown = require('@/assets/imgs/icons/sort-desc.png');
            }
        },
        // 价格
        priceImgs(){
            if(this.priceUp == require('@/assets/imgs/icons/sort-asc.png') && this.priceDown == require('@/assets/imgs/icons/sort-desc.png')){
                this.priceUp = require('@/assets/imgs/icons/sort-up.png')
            }else if(this.priceUp == require('@/assets/imgs/icons/sort-up.png') && this.priceDown == require('@/assets/imgs/icons/sort-desc.png')){
                this.priceDown = require('@/assets/imgs/icons/sort-down.png');
                this.priceUp = require('@/assets/imgs/icons/sort-asc.png');
            }else{
                this.priceUp = require('@/assets/imgs/icons/sort-asc.png');
                this.priceDown = require('@/assets/imgs/icons/sort-desc.png');
            }
        }
    },
    computed:{
        sortImg(){
            if(this.sortUp == require('@/assets/imgs/icons/sort-up.png') && this.sortDown == require('@/assets/imgs/icons/sort-desc.png')){
                 var temp = null;
                for(var i = 1; i < this.KindImgs.length; i ++){
                    for(var j = 0; j < this.KindImgs.length - i; j ++){
                        // console.log(this.KindImgs[j].price)
                        if(this.KindImgs[j].price < this.KindImgs[j + 1].price){
                            temp = this.KindImgs[j + 1];
                            this.KindImgs[j + 1] = this.KindImgs[j];
                            this.KindImgs[j] = temp
                        }
                    }
                }
            }else if(this.sortUp == require('@/assets/imgs/icons/sort-asc.png') && this.sortDown == require('@/assets/imgs/icons/sort-down.png')){
                 var temp = null;
                for(var i = 1; i < this.KindImgs.length; i ++){
                    for(var j = 0; j < this.KindImgs.length - i; j ++){
                        // console.log(this.KindImgs[j].price)
                        if(this.KindImgs[j].price > this.KindImgs[j + 1].price){
                            temp = this.KindImgs[j + 1];
                            this.KindImgs[j + 1] = this.KindImgs[j];
                            this.KindImgs[j] = temp
                        }
                    }
                }
            }else{
                // console.log(this.clo)
                return this.clo;
            }
            return this.KindImgs
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/common.scss';
.sub-kind-main{
    .header{
        float: left;
        position: fixed;
        left: 0;
        top:0;
        width: 100%;
        background-color: #F9F9F9;
        .header-bar {
            // float: left;
            display: flex;
            justify-content: space-between;
            width: 100%;
            box-sizing: border-box;
            padding: 0 $basePadding;
            .icon {
                width: 20px;
                height: 20px;
                margin-top: 13px;
                &.icon-chat {
                    margin-right: 10px;
                }
            }
            .title {
                margin-left: 20px;
                font-size: 20px;
                line-height: 44px;
            }
        }
        .choose{
            // float: left;
            width: 100%;
            height: 44px;
            display: flex;
            line-height: 44px;
            margin-top: 10px;
            box-sizing: border-box;
            padding: 0 $basePadding;
            .choose-item{
                position: relative;
                flex: 4;
                font-size: 14px;
                color: #010E0D;
                .icon{
                    position: absolute;
                    width: 15px;
                    right: 10px;
                    top: 15px;
                }
            }
        }
    } 
    .one{
        margin-top: 110px;
        .kinds{
        width: 100%;
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        padding: 10px 35px;
        background-color: #fff;
        .kinds-item{
            width: 51px;
            height: 23px;
            color: #010E0D;
            line-height: 23px;
            background-color: #F9F9F9;
        }
    }
    .clothe{
        width: 100%;
        box-sizing: border-box;
        padding: 0 35px;
        margin-top:10px;
        .exhibition{
            .img-block{
                display: block;
                float: left;
                width: 129px;
                padding-bottom: 10px;
                
                &.img-block:nth-child(2n){
                    margin-left: 45.5px;
                }
                img{
                    width: 129px;
                    height: 129px;
                }
                p{
                    color: #494949;
                    line-height: 17px;
                    font-size: 12px;
                    &.price{
                        color: #010E0D;
                    }
                }
            }
        }
    }
    }
    
}

</style>

