<template>
  <div class="goodsBuy-main">
    <transition :duration="400">
      <div class="mask" v-show="dialog">
        <transition name="fade">
          <div class="card">
            <span class="close" @click="hideClose"></span>
            <div class="good-info">
              <img src="@/assets/imgs/kind/subkind/details/cloth.png" alt class="good-img">
              <div class="good-text">
                <p class="name">{{goodsStock.name}}</p>
                <p class="title">{{goodsStock.title}}</p>
                <p class="price">￥ {{goodsStock.price}}</p>
                <p class="surplus">剩余{{goodsStock.stock}}件</p>
              </div>
            </div>
            <div class="arr">
              <span class="arr-name">颜色</span>
              <span class="arr-img"></span>
              <div class="arr-item">
                <span class="grey"></span>
                <span class="black"></span>
              </div>
              <span class="arr-name">规格</span>
              <span class="arr-img"></span>
              <div class="arr-item">
                <span class="type">S</span>
                <span class="type">M</span>
                <span class="type">L</span>
              </div>
              <span class="arr-name">数量</span>
              <span class="arr-img"></span>
              <div class="arr-item">
                <button class="minus" :disabled="count <= 1" @click="desCount">-</button>
                <span class="count">{{count}}</span>
                <button class="add" :disabled="count >= goodsStock.stock" @click="insCount">+</button>
              </div>
            </div>
            <button class="confirm" @click="hideSubmit">确定</button>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "goodsBuy",
  props: {
    // 这里是sync上个购物详情页面更新过来的属性
    dialog: Boolean,
    type: Number, // 购买类型 0: 加入购物车 1: 购买
    // props 对象写法 子组件中以对象的方法接收时，父组件传入的msg对象由子组件接收时拆分成对象形式
    // 这个也是 购物车里拥有的值
    goodsStock: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      count: 1
    };
  },
  methods: {
    // 数量
    insCount() {
      this.count++;
    },
    desCount() {
      this.count--;
    },
    hideClose() {
      this.$emit("update:dialog", false);
    },
    // 执行添加购物车
    hideSubmit() {
      this.hideClose();
      // 添加到购物车
      if (this.type == 0) {
        //   外面先把cout添加进去
        //   Object.assign(this.goodsStock,{count:this.count})
        //   console.log(this.goodsStock)
        this.$store.commit("cartBuy/addToBuy",{...this.goodsStock,count:this.count});
        // 传入对象
        // this.$store.commit("cartBuy/addToBuy",this.goodsStock);
      } else {

      }
    }
  }
};
</script>
<style lang='scss' scoped>
.goodsBuy-main {
  overflow: auto;
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
    .card {
      position: absolute;
      left: 50%;
      bottom: 20px;
      width: 334px;
      padding: 20px;
      margin-left: -167px;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 8px;
      .close {
        float: right;
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url("../../../../assets/imgs/icons/close.png") no-repeat
          center;
        background-size: 20px 20px;
      }
      .good-info {
        width: 100%;
        display: flex;
        .good-img {
          width: 114px;
          height: 114px;
        }
        .good-text {
          padding-left: 24px;
          font-size: 12px;
          color: #494949;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .price {
            font-size: 14px;
            font-weight: 600;
            color: #010e0d;
          }
        }
      }
      .arr {
        width: 100%;
        margin-top: 20px;
        text-align: left;
        .arr-name {
          font-size: 14px;
          line-height: 20px;
        }
        .arr-img {
          display: inline-block;
          width: 16px;
          height: 16px;
          background: url("../../../../assets/imgs/icons/Down.png") no-repeat
            center;
          background-size: 16px 16px;
        }
        .arr-item {
          display: flex;
          margin: 15px 0 20px;
          .grey {
            display: block;
            width: 35px;
            height: 35px;
            background-color: grey;
            border-radius: 50%;
            margin-left: 16px;
          }
          .black {
            display: block;
            width: 35px;
            height: 35px;
            background-color: black;
            border-radius: 50%;
            margin-left: 35px;
          }
          .type {
            display: inline-block;
            width: 44px;
            height: 40px;
            margin-left: 25px;
            font-size: 14px;
            text-align: center;
            line-height: 40px;
            background-color: #fff;
            box-shadow: 0 2px 5px 0 #e9e9e9;
            &.type:nth-child(1) {
              margin-left: 5px;
            }
          }
          button {
            width: 22px;
            height: 24px;
            font-size: 9px;
            text-align: center;
            background: #ffffff;
            box-shadow: 0 2px 5px 0 #e9e9e9;
            border-radius: 1px;
          }
          .count {
            width: 33px;
            height: 24px;
            font-size: 9px;
            line-height: 24px;
            text-align: center;
          }
        }
      }
    }
    .confirm {
      width: 177px;
      height: 40px;
      margin-top: 20px;
      background: #1c4b47;
      border-radius: 8px;
    }
  }
}

.fade-enter-active {
  animation: fadeIn ease 0.4s;
}

.fade-leave-active {
  animation: fadeOut ease 0.4s;
}

@keyframes fadeIn {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>