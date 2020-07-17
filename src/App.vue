<template>
  <div id="app">
    <div v-if="ishow">
      <shopMenu></shopMenu>
      
    </div>
    <router-view v-if="showRouter" />
    <sidebar />
  </div>
</template>
<script>
import shopMenu from '@/components/content/shopMenu'
import breadcrumbVue from '@/components/content/breadcrumb'
import { mapActions, mapGetters } from 'vuex'
import productdeltails from '@/components/content/productdetails'
import sidebar from '@/components/commom/sidebar'
import person from '@/views/person/components/wode'
import head from '@/views/person/components/head'

export default {
  data() {
    name: 'app'
    return {}
  },
  created() {},
  watch: {
    $route(to, from) {
      try {
        let nav = this.$route.params.id
        this.setNav(nav)
        document.querySelector('.header').className =
          'header submenu-panel-hide'
        setTimeout(() => {
          document.querySelector('.header').className = 'header'
        }, 100)
      } catch (e) {
        console.log(e)
      }
    }
  },
  computed: {
    ishow: function() {
      if (
        this.$route.path.indexOf('PerCenter') > 0 ||
        this.$route.path.indexOf('denglu') > 0 ||
        this.$route.path.indexOf('zhuce') > 0
      ) {
        return false
      } else {
        return true
      }
    },
    showRouter: function() {
      return (
        // 等待菜单数据加载完成再显示 || 在订单页面显示
        this.$store.state.shopmenustore.menulist.length > 0 ||
        this.$route.path.indexOf('PerCenter') > 0 ||
        this.$route.path.indexOf('denglu') > 0 ||
        this.$route.path.indexOf('zhuce') > 0
      )
    }
  },
  methods: {
    ...mapActions(['setNav'])
  },
  components: {
    shopMenu,
    breadcrumbVue,
    productdeltails,
    sidebar,
    person
  }
}
</script>
<style>
@import '~assets/css/base.scss';
@import '~assets/font/iconfont.css';
</style>
