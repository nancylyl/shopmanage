<template>
  <div class="home">
    <div class="detail" v-html="productdetail"></div>
    <img alt="Vue logo" src="~assets/logo.png" />

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getHomeInfo, getDetail } from '@/network/home'
export default {
  name: 'Home',
  data() {
    return {
      productdetail: ''
    }
  },
  components: {
    HelloWorld
  },
  created() {
    //1.get提交方式
    getHomeInfo()
      .then(res => {
        console.log(res)
        this.productdetail = res.data.data.Pro_data
      })
      .catch(e => {
        console.log(e)
      })
    //post提交
    // getDetail(1).then(res => {
    //   console.log(res)
    // })
  }
}
</script>
<style scoped>
.detail {
  width: 800px;
}
</style>
