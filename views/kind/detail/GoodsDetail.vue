<template>
    <div class="goods-detail-main">
            <div class="header-bar">
                <img src="@/assets/imgs/icons/rutern.png" @click="$router.go(-1)" alt class="icon icon-rutern">
                <span class="title">商品详情</span>
                <div class="icon-chat-cart">
                    <img src="@/assets/imgs/icons/分享.png" alt class="icon icon-chat">
                    <router-link :to="{name:'cart',params:{id:123}}"><img src="@/assets/imgs/icons/cart.png" alt class="icon icon-cart"></router-link>
                </div>
            </div>
            <div class="tent">
                <!-- 判断添加类名的方法 -->
                <span :class="{'commodity':true,'details':true,'active':type}" @click="deShow">详情</span>
                <span :class="{'commodity':true,'estimate':true,'active':!type}" @click="esShow">评价</span>
            </div>
        <div class="content"  v-show="detailsShow">
            <swiper class="banner-swiper" :options="findSwiper" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
                <swiper-slide class="banner-slide">
                    <img src="@/assets/imgs/kind/subkind/details/wares1.png" alt="">
                </swiper-slide>
                <swiper-slide class="banner-slide">
                    <img src="@/assets/imgs/kind/subkind/details/wares2.png" alt="">
                </swiper-slide>
                <swiper-slide class="banner-slide">
                    <img src="@/assets/imgs/kind/subkind/details/wares3.png" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <img src="@/assets/imgs/kind/subkind/details/bigImg.png" alt="">
        </div>
        <div class="estimatrs" v-show="estimatrShow">
            <img src="@/assets/imgs/kind/subkind/details/评论1.png" alt="">
            <img src="@/assets/imgs/kind/subkind/details/评论2.png" alt="">
            <img src="@/assets/imgs/kind/subkind/details/评论3.png" alt="">
            <img src="@/assets/imgs/kind/subkind/details/评论4.png" alt="">
        </div>



        
        <!-- 插入的弹窗页面    ref="buyCard" 给组件起名字-->
        <GoodsBuy :dialog.sync="dialog" :goodsStock="goodsStock" :type="formType" ref="buyCard"></GoodsBuy>




        <div class="footer">
            <img src="@/assets/imgs/icons/shoucang.png" alt="" class="love">
            <img src="@/assets/imgs/icons/客服.png" alt="" class="service">
            <button class="operation join" @click="openDialog(0)">加入购物车</button>
            <button class="operation buy" @click="openDialog(1)">立即购买</button>
        </div>
    </div>
</template>
<script>
// 导入组件
import GoodsBuy from './compoents/GoodsBuy'
// 引入swiper 的css样式
import 'swiper/dist/css/swiper.css'
// 引入swiper组件
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// 引入购物车api
import kindApi from '@/api/kind'



export default {
    name: 'goodsDetail',
     // 注册swiper组件
    components:{
        swiper,
        swiperSlide,
        GoodsBuy
    },
    data(){
        return {
            type: true, // 详情与评价的激活active事件
            formType: 0, // 购买类型 默认购买类型是加入购物车  
            estimatrShow: false,
            detailsShow: true,
            findSwiper:{
                slidesPerView: 1.2,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
            },
            dialog: false,
            goodsStock: {}
        }
    },
    created(){
        this.getCardBuyId(this.$route.params.id)
    },
    methods:{
        // 根据id获取商品明细
        getCardBuyId(id) {
            // 模拟获取明细的方法
            kindApi.getBuyCart(id)
            .then(res=>{
                this.goodsStock = res;
            })
        },
        esShow(){
            this.estimatrShow = !this.estimatrShow;
            this.detailsShow = !this.detailsShow;
            this.type = false;
        },
        deShow(){
            this.estimatrShow = false;
            this.detailsShow = true;
            this.type = true;
        },
        openDialog(type){
            this.dialog = true;
            // 0: 加入购物车
            // 1: 直接购买
            
            //点击获取购买类型
            this.formType = type;
        },
        // swiper 的方法 
        callback(){

        },
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/style/common.scss';
    .goods-detail-main{
        .header-bar {
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
        .content{
            position: relative;
            width: 100%;
            // height: 640px;
            .banner-swiper{
                width: 100%;
                .banner-slide{
                    img{
                        width: 275px;
                        height: 383px;
                    }
                }
            }
        }
        .tent{
            width: 100%;
            font-size: 17px;
            line-height: 24px;
            .commodity{
                margin: 5px 0;
                &.details{
                    color: #999999;
                    margin-right: 26px;
                }
                &.estimate{
                    color: #999999;
                    margin-left: 26px;
                }
                &.active{
                    color: #1C4B47;
                }
            }
        }
        .estimatrs{
            width: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .footer{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 48.5px;
            background: #fff;
            box-sizing: border-box;
            padding: 0 $basePadding 20px;
            .love{
                float: left;
                width: 27px;
                height: 27px;
                margin-right: 21px;
                margin-top: 14.5px;
            }
            .service{
                float: left;
                width: 23px;
                height: 23px;
                margin-right: 35px;
                margin-top: 16.5px;
            }
            .operation{
                float: left;
                width: 114px;
                height: 40px;
                font-size: 15px;
                border-radius: 4px;
                line-height: 40px;
                margin: 5.5px 0;
                &.join{
                    color: #1C4B47;
                    border: 1px solid #1C4B47;
                }
                &.buy{
                    float: right;
                    color: #ffffff;
                    background: #1C4B47;
                    box-shadow: 0 2px 5px 0 #E9E9E9;
                }
            }
        }
    }
</style>


