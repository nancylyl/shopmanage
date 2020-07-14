<template>
  <div id="app">
    <shopMenu></shopMenu>
    <div class="nav">
      <breadcrumbVue
        v-if="$store.state.shopmenustore.menulist.length>0&&$store.state.shopmenustore.navbar"
      ></breadcrumbVue>
    </div>
    <router-view v-if="$store.state.shopmenustore.menulist.length>0" />
    <sidebar/>
  </div>
</template>
<script>
import shopMenu from '@/components/content/shopMenu'
import breadcrumbVue from '@/components/content/breadcrumb'
import { mapActions, mapGetters } from 'vuex'
import sidebar from '@/components/commom/sidebar'
export default {
  data() {
    return {}
  },
  created() {},
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      let nav = this.$route.params.id
      this.setNav(nav)
      document.querySelector('.header').className = 'header submenu-panel-hide'
      setTimeout(() => {
        document.querySelector('.header').className = 'header'
      }, 100)
    }
  },
  methods: {
    ...mapActions(['setNav'])
  },
  components: {
    shopMenu,
    breadcrumbVue,
    sidebar
}
}
</script>
<style>
@import '~assets/css/base.scss';
@import '~assets/font/iconfont.css';
</style>



