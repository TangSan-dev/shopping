<template>
    <div class="kind-block">
        <img @click="toggleSubKind" class="kind-img-block" :src="kind.img" alt="">
        <ul v-show="active == id" class="sub-kinds">
            <router-link tag="li" :to="{name:'subKind',params:{subKindId:sk.id}}" class="kind-item" v-for="sk in kind.subKinds" :key="sk.id">
                <span class="classify">{{sk.cname}}</span>
                <span class="arrows"><img src="@/assets/imgs/icons/advance.png" alt="" class='icon icon-advance'></span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'myGoods',
    props:{
        kind:Object,
        active:Number,
        id:Number
    },
    methods:{
        toggleSubKind(){
            if(this.active == this.id){
                this.$emit('update:active',-1)
            }else{
                this.$emit('update:active',this.id)
            }
        }
    }
}
</script>
<style scoped lang="scss">
@import "@/assets/style/common.scss";
    .kind-block{
        position: relative;
        padding: 0 $basePadding;
        border-radius: 4px;
        box-sizing: border-box;
        .kind-img-block{
            height: 120px;
            width: 100%;
            background-color: #F4F4F4;
            margin-top: 6px;
        }
        .sub-kinds{
            width: 100%;
            .kind-item{
                position: relative;
                width: 100%;
                height: 36px;
                line-height: 36px;
                border-bottom: 1px solid #e5e5e5;
                font-size: 16px;
                .classify{
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                .arrows{
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
        }
    }
</style>


