import Vue from 'vue'
import Vuex from 'vuex'
import shopmenustore from './shopmenustore'
import showbox from './showbox'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        shopmenustore,
        showbox
    }
})