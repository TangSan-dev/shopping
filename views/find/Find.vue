<template>
    <div class="find-main">
        <div class="header-bar">
            <router-link to="/find/article" :class="{'find':true,'article':true,'active':type}" @click.native="article">精选文章</router-link>
            <router-link :to="{name:'findGoods'}" :class="{'find':true,'recommend':true,'active':!type}" @click.native="recommend">好物推荐</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    name: 'Find',
    data() {
        return {
            type: true,
        }
    },
    methods: {
        article(){
            this.type = true;
        },
        recommend(){
            this.type = false;
        }
    },
    components:{
    }


}
</script>
<style scoped lang="scss">
    .header-bar{
        width: 100%;
        height: 44px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        text-align: center;
        box-shadow: 0 -2px 10px 0;
        background-color: #fff;
        .find{
            display: inline-block;
            line-height: 44px;
            font-size: 18px;
            text-decoration: none;
            &.article{
                margin-right: 50px;
                color: #999999;
            }
            &.recommend{
                margin-left: 50px;
                color: #999999;
            }
            &.active{
                color: #010E0D;
            }
        }
    }
</style>

