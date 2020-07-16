import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
    added: [],
    cartData: []
}
const getters = {
    cartProducts: state => state.added,

}
const actions = {
    // 添加购物车
    addToCart(context, value) {
        context.commit("addToCart", value);
    },
    // 删除购物车指定商品
    delProduct(ctx, product) {
        ctx.commit("delCart", product)
    },
    // 清除购物车
    delAll(ctx) {
        ctx.commit("delAllCart")
    },
    // 提交购物车
    submitOrder(context, obj) {
        context.commit("submitOrder", obj);
    }
}
const mutations = {
    // 添加购物车
    addToCart: (state, obj) => {
        let record = state.added.find(selfitem => selfitem.id == obj.id && selfitem.Title1value == obj.Title1value && selfitem.Title2value == obj.Title2value)
        if (record) {
            record.num += obj.num
        } else {
            state.added.push({...obj })
        }
    },
    //删除：state.购物车数据.splice()
    delCart(state, product) {
        console.log(product)
        state.added.map((item, index) => {
            console.log(item)
            if (item.id == product.id && item.Title1value == product.Title1value && item.Title2value == product.Title2value) {
                state.added.splice(index, 1)
            }
        })
    },
    // 清除购物车
    delAllCart(state) {
        state.added = []
    },
    // 提交购物车 
    submitOrder(state, value) {
        state.cartData.push({...value })
        console.log(state.cartData)
    },
}
export default {
    state,
    mutations,
    getters,
    actions
}