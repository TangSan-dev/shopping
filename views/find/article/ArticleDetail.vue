<template>
    <div class="article-detail-main">
        <!-- header -->=
        <div class="header">
            <div class="header-bar">
                <img src="@/assets/imgs/icons/rutern.png" alt class="icon icon-search" @click="$router.go(-1);">
                <span class="title">精品文章</span>
                <img src="@/assets/imgs/icons/分享.png" alt class="icon icon-cart">
            </div>
        </div>
        <div class="content">
            <h2 class="title">{{$route.params.title}}</h2>
            <p class="sort">{{$route.params.sort}}</p>
            <img :src="$route.params.content.img1" alt="" class="img1">
            <p class="name">auth: {{$route.params.content.name}}</p>
            <p class="pags">{{$route.params.content.pag1}}</p>
            <img :src="$route.params.content.img2" alt="" class="img2">
            <p class="pags">{{$route.params.content.pag2}}</p>
            <img :src="$route.params.content.img3" alt="" class="img3">
        </div>
        <div class="footer">
            <input type="text" placeholder="发表你的观点吧" class="comment">
            <img src="@/assets/imgs/icons/评论.png" alt="" class="icon-comment">
            <img src="@/assets/imgs/icons/love.png" alt="" class="icon-love">
        </div>
    </div>
</template>
<script>
export default {
    name: 'articleDetail'
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/common.scss';
.article-detail-main{
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
                // margin-left: 20px;
                font-size: 18px;
                line-height: 44px;
            }
        }
    } 
    .content{
        margin-top: 44px;
        .title{
            font-size: 18px;
            color: #010E0D;
            line-height: 25px;
            letter-spacing: 0.3px;
            margin-top: 35px;
        }
        .sort{
            font-size: 12px;
            color: #999999;
            line-height: 17px;
            letter-spacing: 0.7px;
        }
        .img1{
            width: 186px;
            height: 186px;
            margin: 14px 0 8px;
        }
        .name{
            width: 186px;
            margin: 0 auto;
            font-size: 12px;
            line-height: 17px;
            text-align: right;
        }
        .pags{
            margin: 10px 0;
            font-size: 18px;
            line-height: 25px;
            color: #010E0D ;
        }
        .img2 .img3{
            width: 346px;
            height: 160px;
        }
    }
    .footer{
        width: 100%;
        box-sizing: border-box;
        padding: 9px 21.5px;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #fff;
        .comment{
            float: left;
            width: 220px;
            height: 28px;
            border: 1 solid #999999;
            border-radius: 8px;
            font-size: 12px;
            line-height: 17px;
        }
        .icon-comment{
            width: 28px;
            height: 26.3px;
        }
        .icon-love{
            width: 30px;
            height: 30px;
            margin-left: 20px;
        }
    }
}
</style>


