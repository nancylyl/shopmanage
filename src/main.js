import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VueCookies from 'vue-cookies';
import { Plugin } from "vue-fragment";
import ElementUI from 'element-ui' // 引入饿了么的组件
import 'element-ui/lib/theme-chalk/index.css' // 引入饿了么的组件样式

//vueX
Vue.use(ElementUI);
// fragment, 空节点
Vue.use(Plugin);

Vue.config.productionTip = false
Vue.prototype.$cookie = VueCookies;
// Vue.prototype.$axios = axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')