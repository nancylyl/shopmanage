import Vue from 'vue'
import Vuex from 'vuex'
import { getList } from '@/network/home';
Vue.use(Vuex);
const state = {
    showlist: [],
    key: ''
}
const getters = {
    showlist: state => state.showlist,
    key: state => state.key
}
const actions = {
    getshowlist({ commit }, data) {
        return getList(data)
            .then(res => {
                let data = res.data.data


                commit('getshowlist', data)
            })
            .catch(e => {
                console.log(e)
            })
    },
    setKey({ commit, state }, key) {
        commit('setkey', key)


    }
}
const mutations = {
    getshowlist(state, data) {
        state.showlist = data;
        // console.log(data);
    },
    setkey(state, key) {
        /* 判断是否有传递参数 没有自己构建 */
        state.key = key;
        // console.log(state.key);

    }
}
export default {
    state,
    mutations,
    getters,
    actions
}