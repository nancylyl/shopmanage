import Vue from 'vue'
import Vuex from 'vuex'
import { getList } from '@/network/home';
Vue.use(Vuex);
const state = {
    showlist: []
}
const getters = {
    showlist: state => state.showlist,
}
const actions = {
    //获取菜单栏信息
    getshowlist({ commit }) {
        getList()
            .then(res => {
                let data = res.data.data
                commit('getshowlist', data)
            })
            .catch(e => {
                console.log(e)
            })

    },
}
const mutations = {
    getshowlist(state, data) {
        state.showlist = data;
        console.log(state.showlist);
    }

}
export default {
    state,
    mutations,
    getters,
    actions
}