import Vue from 'vue'
import Vuex from 'vuex'
import cartBuy from '@/views/store/cartBuy'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cartBuy
  } 
})
