<template>
    <div class="Home-main">
        <!-- header -->
        <div class="header-bar">
            <img src="@/assets/imgs/icons/search.png" alt class="icon icon-search">
            <span class="title">ZAOWU 造物</span>
            <div class="icon-chat-cart">
                <img src="@/assets/imgs/icons/chat.png" alt class="icon icon-chat">
                <router-link :to="{name:'cart',params:{id:123}}"><img src="@/assets/imgs/icons/cart.png" alt class="icon icon-cart"></router-link>
            </div>
        </div>
        <!-- banner -->
        <div class="banner">
            <div class="tabs">
                <span class="btn-tabs">推荐</span>
                <span class="btn-tabs">活动</span>
                <span class="btn-tabs">品牌</span>
                <span class="btn-tabs">定制</span>
            </div>
            <swiper class="banner-swiper" :options="bannerSwiper" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
                <swiper-slide class="banner-slide" v-for="m in bannerImgs" :key="m.id">
                    <img :src="m.img" alt="">
                </swiper-slide>
            </swiper>
        </div>
        <!-- content -->
        <div class="content">
            <!-- 周一二-->
            <div class="tuesday">
                <div class="week-title">
                    <h2 class="title-h2">-TUE 9.18-</h2>
                    <p class="title-p">周二品质生活专题</p>
                </div>
                <a href="" class="brand">
                    <img src="@/assets/imgs/home/bg1.png" alt="">
                </a>
                <ul class="porcelain">
                    <li class="porcelain-item">
                        <img src="@/assets/imgs/home/p12.png" alt="">
                        <p class="name">
                            精油香氛<br>
                            ￥344
                        </p>
                    </li>
                    <li class="porcelain-item">
                        <img src="@/assets/imgs/home/p11.png" alt="">
                        <p class="name">
                            山居猎奇<br>
                            ￥344
                        </p>
                    </li>
                    <li class="porcelain-item">
                        <img src="@/assets/imgs/home/p9.png" alt="">
                        <p class="name">
                            北欧国度<br>
                            ￥344
                        </p>
                    </li>
                    <li class="porcelain-item">
                        <img src="@/assets/imgs/home/p10.png" alt="">
                        <p class="name">
                            卡洛卡陶瓷<br>
                            ￥344
                        </p>
                    </li>
                </ul>
            </div>
            <!-- 周一 -->
            <div class="monday">
                <div class="week-title">
                    <h2 class="title-h2">-TUE 9.18-</h2>
                    <p class="title-p">周二品质生活专题</p>
                </div>
                <Monday></Monday>
            </div>
        </div>
    </div>
</template>

<script>
// npm swiper样式
import "swiper/dist/css/swiper.css";
// 引入swiper组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
// 导入api模块
import homeApi from '@/api/home.js'
// 引入局部组件(为了简化当前页面)
// 组件封装: 1.复用性 2.优化代码解构
import Monday from './components/Monday.vue'




export default {
    name: "Home",
    data() {
        return {
        // swiper的初始化参数
            bannerSwiper:{
                slidesPerView: 1.2,
                centeredSlides: true,
                // loop:true,
            },
            bannerImgs:[],
        };
    },
    methods: {
        callback(){

        }
    },
  // 引入组件
    components: {
        swiper,
        swiperSlide,
        // 组件
        Monday
    },
  // 生命周期函数,在这里初始化数据,包括请求api
    created(){
        // 调用方法获取imgs数组
        homeApi.getBannerImages()
        .then(res=>{
            this.bannerImgs = res;
        })
    }
};
</script>
<style lang='scss' scoped>
// css样式的引入
@import "@/assets/style/common.scss";
.Home-main {
  // 头部
    .header-bar {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 44px;
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
    //banner
    .banner {
        .tabs {
            display: flex;
            justify-content: center;
            width: 100%;
            box-sizing: border-box;
            padding: 0 $basePadding;
            margin: 13.5px 0;
            .btn-tabs {
                border-right: 1px solid #e5e5e5;
                padding: 0 15px;
                box-sizing: border-box;
                color: #010e0d;
                font-size: 15px;
                &:last-child {
                    border: none;
                }
            }
        }
        .banner-swiper{
            margin-top: 20px;
            border-bottom: 5px solid #F9F9F9;
            .banner-slide{
                width: 100%;
                height: 394px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    // content
    .content{
        width: 100%;
        box-sizing: border-box;
        padding: 0 $basePadding;
        .tuesday{
            .brand{
                width: 100%;
                height: 202px;
                img{
                    width: 341px;
                    height: 100%;
                }
            }
            .porcelain{
                width: 100%;
                display: flex;
                justify-content: center;
                .porcelain-item{
                    width: 79px;
                    // margin-left: 10px;
                    img{
                        width: 60px;
                        height: 73px;
                        margin: 0 auto;
                    }
                    .name{
                        margin: 5px 0;
                        font-size: 10px;
                        color: #494949;
                        line-height: 18px;
                    }
                }
            }
        }
        // 内部title样式
        .week-title{
            width: 100%;
            padding: 16px 0;
            .title-h2{
                font-size: 20px;
                line-height: 28px;
                color: #010E0D;
            }
            .title-p{
                font-size: 12px;
                line-height: 17px;
                color: #494949;
            }
        }
    }
}
</style>

