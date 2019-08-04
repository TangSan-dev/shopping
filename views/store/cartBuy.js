const cart = {
    // 开启命名空间
    namespaced: true,
    // vuex 的实例对象
    state: {
        // 购物车里面的对象
      buy:[]  
    },
    mutations: {
        // 加入购物车分清楚的就是id 和数量count
        addToBuy(state,obj){
            // 如果buy没有则添加  有的话则count++
            // some 用法 检查数组中是否有这个值 有则返回ture 没有则返回false
          
            if(!state.buy.some(item=>item.id == obj.id)){
                // arr.count = count
                state.buy.push(obj)
            }else{
                // 已经拥有该值 执行数量
                var item = state.buy.find(item=>item.id == obj.id)
                item.count += obj.count
            }
            
        },


        // obj接收对象
        // addToBuy(state,obj){
        //     // 如果buy没有则添加  有的话则count++
        //     // some 用法 检查数组中是否有这个值 有则返回ture 没有则返回false
          
        //     if(!state.buy.some(item=>item.id == obj.id)){
        //         // obj.count = count
        //         state.buy.push(obj)
        //         console.log(state.buy)
        //     }else{
        //         // 已经拥有该值 执行数量
        //         var item = state.buy.find(item=>item.id == obj.id)
        //         item.count += obj.count
        //         console.log(state.buy)
        //     }
        //     return state.buy
        // },
        // 购物车里面的物件减少
        desCount(state,id){
            var item = state.buy.find(item=>item.id == id);
            item.count --
            if(item.count == 0){
                state.buy = state.buy.filter(obj => obj.id != item.id)
            }
            console.log(state.buy)
        },
        // 购物车物品增加
        insCount(state,id){
            var item = state.buy.find(item=>item.id == id);
            item.count ++;
            if(item.count > item.stock){
                item.count = item.stock;
                alert('当前库只剩下'+item.stock+'件!')
            }
            console.log(state.buy)
        }
    },
    getters: {
       
    },
    actions: {
        
    }
}

// 导出api
export default cart