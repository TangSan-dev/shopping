<template>
    <div class="monday-main">
        <!-- Swiper -->
        <swiper class="monday-swiper" :options="mondaySwiper" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="banner-slide" v-for="m in mondayImgs" :key="m.id">
                <img :src="m.url" alt="">
            </swiper-slide>
        </swiper>   
    </div>
</template>

<script>
// 导入混合
// import mixinImgs from './data.js'

// 导入 swiper样式
import "swiper/dist/css/swiper.css";
// swiper 组件
import { swiper, swiperSlide } from "vue-awesome-swiper";

// 调用 homeApi
import homeApi from '@/api/home.js'

export default {
  name: "Monday",
    // 多个对象要使用mixins
    // mixins: [mixinImgs], 
    data() {
        return {
            // swiper的初始化参数
            mondaySwiper:{
                slidesPerView: 4,
                slidesPerColumn: 2,
                // loop:true,
            },
            // 图片数组对象
            mondayImgs:[]
        };
    },
    created(){
        // 初始化monday图片的调用方法
        this.getMondayImgs();
    },
    methods: {
        // 执行方法  获取图片数组
        getMondayImgs(){
            homeApi.getMondayImgs()
            .then(res => {
                this.mondayImgs = res
            })
        }
    },
    // 引入组件
    components: {
        swiper,
        swiperSlide
    },
   
};
</script>
<style lang='scss' scoped>
</style>