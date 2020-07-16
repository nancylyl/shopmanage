import Vue from 'vue'
import Vuex from 'vuex'
import shopmenustore from './shopmenustore'
import showbox from './showbox'
import cart from './cart'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        shopmenustore,
        showbox,
        cart
    }
})