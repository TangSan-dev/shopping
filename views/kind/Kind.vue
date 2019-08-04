<template>
    <div class="kind-main">
        <!-- header -->
        <div class="header-bar">
            <img src="@/assets/imgs/icons/search.png" alt class="icon icon-search">
            <span class="title">ZAOWU 造物</span>
            <div class="icon-chat-cart">
                <img src="@/assets/imgs/icons/chat.png" alt class="icon icon-chat">
                <router-link :to="{name:'cart',params:{id:123}}"><img src="@/assets/imgs/icons/cart.png" alt class="icon icon-cart"></router-link>
            </div>
        </div>
        <div class="kind-block-list">

         <kind-block  :active.sync="showKinds" :id="index" :kind="kind" v-for="(kind,index) in kinds" :key ="kind.ename"></kind-block>
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
import KindBlock from './components/KindBlock.vue'
export default {
    name: 'Kind',
    components:{
        KindBlock
    },
    data(){
        return {
            kinds:[
                {
                    cname: '创意',
                    ename: 'changyi',
                    img: require('@/assets/imgs/kind/goods1.png'),
                    subKinds:[
                        {
                            cname:'全部',
                            id: Math.random()
                        },
                        {
                            cname:'睡衣',
                            id: Math.random()
                        },
                        {
                            cname:'浴袍',
                            id: Math.random()
                        },
                        {
                            cname:'内衣',
                            id: Math.random()
                        },
                        {
                            cname:'袜类',
                            id: Math.random()
                        },
                        {
                            cname:'其他',
                            id: Math.random()
                        },
                    ]
                },
                {
                    cname: '家居',
                    ename: 'jiaju',
                    img: require('@/assets/imgs/kind/goods2.png'),
                    subKinds:[
                        {
                            cname:'全部',
                            id: Math.random()
                        },
                        {
                            cname:'睡衣',
                            id: Math.random()
                        },
                        {
                            cname:'浴袍',
                            id: Math.random()
                        },
                        {
                            cname:'内衣',
                            id: Math.random()
                        },
                        {
                            cname:'袜类',
                            id: Math.random()
                        },
                        {
                            cname:'其他',
                            id: Math.random()
                        },
                    ]
                },
                {
                    cname: '服饰',
                    ename: 'fushi',
                    img: require('@/assets/imgs/kind/goods3.png'),
                    subKinds:[
                        {
                            cname:'全部',
                            id: Math.random()
                        },
                        {
                            cname:'睡衣',
                            id: Math.random()
                        },
                        {
                            cname:'浴袍',
                            id: Math.random()
                        },
                        {
                            cname:'内衣',
                            id: Math.random()
                        },
                        {
                            cname:'袜类',
                            id: Math.random()
                        },
                        {
                            cname:'其他',
                            id: Math.random()
                        },
                    ]
                },
                {
                    cname: '香氛',
                    ename: 'xiangfen',
                    img: require('@/assets/imgs/kind/goods4.png')
                },
                {
                    cname: '配饰',
                    ename: 'peishi',
                    img: require('@/assets/imgs/kind/goods5.png')
                },
                {
                    cname: '创意',
                    ename: 'changyi2',
                    img: require('@/assets/imgs/kind/goods1.png')
                },
                {
                    cname: '家居',
                    ename: 'jiaju2',
                    img: require('@/assets/imgs/kind/goods2.png')
                },

            ],
            showKinds:-1,
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/style/common.scss';
    .kind-main{
        // header
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
    }
</style>

