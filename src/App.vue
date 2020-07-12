<template>
  <div id="app">
    <shopMenu></shopMenu>
    <router-view v-if="$store.state.shopmenustore.menulist.length>0" />
  </div>
</template>
<script>
import shopMenu from '@/components/content/shopMenu'
import { mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      document.querySelector('.header').className = 'header submenu-panel-hide'
      setTimeout(() => {
        document.querySelector('.header').className = 'header'
      }, 100)
    }
  },
  methods: {
    ...mapActions(['setnav'])
  },
  components: {
    shopMenu
  }
}
</script>
<style>
@import '~assets/css/base.scss';
</style>
