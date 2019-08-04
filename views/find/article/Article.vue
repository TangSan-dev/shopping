<template>
    <div class="article-main">
        <div v-for="(article,index) in articles" :key="article.id" :style="{transform:'translateY('+(articles.length-index-1)*50+'px) translateZ(-'+index*100+'px)',zIndex:(articles.length-index)}" class="article">
            <h2  @click="changeItem(index)" class="article-title">{{article.title}}</h2>
            <p class="article-sort">{{article.sort}}</p>
            <router-link tag="img" class="article-img" :src="article.img" alt="" :to="{name:'articleDetail',params:{id:article.id,title:article.title,sort:article.sort,content:article.content}}"></router-link>
        </div>
    </div>
</template>
<script>
import Article from '@/api/article.js'
import ArticleDetail from './ArticleDetail.vue'
export default {
    name:'Article',
    data(){
        return{
            articles:[]
        }

    },
    created() {
        Article.getArticle()
        .then(res => {
            this.articles = res;
            console.log(res)
        })
    },
    methods:{
        changeItem(n){
            console.log(n);
            // this.articles.unshift(this.articles.splice(n,1)[0]);
            if(n!=0){
                var temp = this.articles[n];
                this.$set(this.articles,n,this.articles[0]);
                this.$set(this.articles,0,temp);
                console.log(this.articles[0])
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .article-main{
        position: relative;
        width: 100%;
        // min-height: 667px;
        height: 100vh;
        box-sizing: border-box;
        padding: 0 7.5px;
        perspective: 1000px;
        perspective-origin: center 0;
        background-color: #1C4B47;
        overflow: hidden;
        .article{
            position: absolute;
            left: 50%;
            top: 0;
            width: 360px;
            margin-left: -180px;
            height: 473px;
            background-color: #fff;
            border-radius: 8px;
            margin-bottom: 50px;
            .article-title{
                width: 220px;
                margin: 31.5px auto 5px;
                font-size: 18px;
                text-align: center;
                line-height: 25px;
                letter-spacing: 2px;
                font-weight: 600;
                color: #010E0D;
            }
            .article-sort{
                font-size: 12px;
                color: #999999;
                letter-spacing: 0.7px;
                line-height: 17px;
            }
            .article-img{
                margin-top: 15.5px;
            }
        }
    }
   
</style>

