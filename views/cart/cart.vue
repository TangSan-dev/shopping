<template>
  <div class="cart-main">
    <div class="header">
      <span class="icon icon-goback" @click="$router.go(-1);"></span>
      <span class="header-title">购物车</span>
      <span class="icon icon-share"></span>
    </div>
    <ul class="goods-list">
      <li class="goods-item" v-for="goods in goodsList" :key="goods.id">
        <div class="check-box">
          <input type="checkbox" v-model="goods.checked">
        </div>
        <router-link :to="{name:'goodsDetail',id:goods.id}">
          <img class="img" :src="goods.img" alt>
        </router-link>
        <div class="info">
          <p class="brand">{{goods.name}}</p>
          <p class="title">{{goods.title}}</p>
          <div class="price">
            <span class="price-text">￥ {{goods.price}}</span>
            <div class="counter">
              <span @click="des(goods.id)" class="icon icon-reduce"></span>
              <span class="count">{{goods.count}}</span>
              <span @click="ins(goods.id)" class="icon icon-plus"></span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="section-likes">
      <p class="title">你可能还会喜欢</p>
      <ul class="like-goods-list">
        <router-link class="like-item" tag="li" :to="{name:'goodsDetail',id:'123'}">
          <img class="img" :src="require('@/assets/imgs/kind/subkind/goods1.png')" alt>
        </router-link>
        <router-link class="like-item" tag="li" :to="{name:'goodsDetail',id:'123'}">
          <img class="img" :src="require('@/assets/imgs/kind/subkind/goods2.png')" alt>
        </router-link>
      </ul>
    </div>
    <div class="footer-bar">
      <div class="toggle-all">
        <label>
          <input @change="handleToggleAll" class="checkbox" type="checkbox" v-model="toggleAll">全选
        </label>
      </div>
      <div class="total-info">
        <span class="total-text">
          总计:
          <font class="price">¥ {{sumPrice}}</font>
        </span>
        <button class="submit" @click="$router.go(-1);">立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",

  data() {
    return {
      toggleAll: false
    };
  },
  computed: {
      goodsList() {
        console.log(this.$store.state.cartBuy.buy)
        return this.$store.state.cartBuy.buy;
      },
    sumPrice() {
      return this.goodsList.reduce((sum, item) => {
        if (item.checked) {
          sum += item.count * item.price;
        }
        return sum;
      }, 0);
    },
  },
  methods: {
    handleToggleAll() {
      //   if(this.toggleAll)
      this.goodsList.map(item => {
        item.checked = this.toggleAll;
        return item;
      });
    },
    des(id){
      this.$store.commit('cartBuy/desCount',id)
    },
    ins(id){
      this.$store.commit('cartBuy/insCount',id)
    }
  }
};
</script>

<style lang='scss' scoped>
.cart-main {
  background-color: #f4f4f4;
}
.header {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #f4f4f4;
  z-index: 999;
  .icon {
    display: block;
    height: 20px;
    width: 20px;
    background: no-repeat center;
    background-size: cover;
    &.icon-goback {
      background-image: url("../../assets/imgs/icons/返回.png");
    }
    &.icon-share {
      visibility: hidden;
    }
  }
  .header-title {
    font-size: 18px;
    color: #010e0d;
    line-height: 44px;
  }
}
.goods-list {
  width: 100%;
  margin: 54px auto;
  .goods-item {
    height: 114px;
    background-color: #fff;
    margin: 20px 16px;
    display: flex;
    padding: 16px;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    border-radius: 4px;
    .img {
      margin: 0 20px;
      width: 76px;
      height: 76px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      width: 180px;
      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .counter {
          display: flex;
          align-items: center;
          .icon {
            display: block;
            width: 30px;
            height: 30px;
            background: url("../../assets/imgs/kind/subkind/plus.png") no-repeat
              center;
            background-size: 28px;
            &.icon-reduce {
              background-image: url("../../assets/imgs/kind/subkind/reduce.png");
            }
          }
          .count {
            margin: auto 10px;
          }
        }

        .price-text {
          color: #1c4b47;
          font-size: 16px;
        }
      }
    }
  }
}
.section-likes {
  .title {
    font-size: 14px;
    margin: 20px auto;
  }
  .like-goods-list {
    display: flex;
    justify-content: space-around;
    > p {
      color: #494949;
      font-size: 12px;
      line-height: 22px;
      margin: 0 auto;
    }
  }
  margin-bottom: 100px;
}
.footer-bar {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 44px;
  background-color: #fff;
  padding: 16px;
  box-sizing: border-box;
  justify-content: space-between;
  .checkbox {
    vertical-align: baseline;
  }
  .total-info {
    font-size: 14px;
    color: #1c4b47;
    .price {
      margin: 0 20px 0 10px;
    }
    .submit {
      width: 112px;
      height: 40px;
      border-radius: 4px;
      font-size: 13px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      outline: none;
      border: none;
      background: #1c4b47;
    }
  }
}
</style>
