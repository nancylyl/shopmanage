import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// import axios from 'axios'

// 引入饿了么的组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//vueX
Vue.use(ElementUI);
Vue.config.productionTip = false
    // Vue.prototype.$axios = axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')