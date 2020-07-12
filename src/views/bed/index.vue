<template>
  <div class="bed">
    <div class="nav">
      <!-- hh:{{$store.state.shopmenustore.navbar}} -->
      <breadcrumbVue v-if="$store.state.shopmenustore.navbar"></breadcrumbVue>
    </div>
    <h1>我是床品</h1>
    动态路由参数 {{$route.params.id}}
  </div>
</template>


<script>
import breadcrumbVue from '@/components/content/breadcrumb'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'bed',
  data() {
    return {
      menulist: []
    }
  },
  created() {
    let nav = this.$route.params.id
    this.menulist = this.$store.state.shopmenustore.menulist
    this.setNav(nav)
  },
  beforeUpdate() {
    let nav = this.$route.params.id
    // console.log('beforeUpdate')
    // console.log(this.$store.menulist)
    console.log('hhh')
    this.menulist = this.$store.state.shopmenustore.menulist
    this.setNav(nav)
  },
  components: {
    breadcrumbVue
  },
  methods: {
    ...mapActions(['setNav'])
  }
}
</script>