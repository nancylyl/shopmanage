<template>
  <div class="home">
    ddd
    动态路由参数 {{$route.params.id}}
    <div class="detail" v-html="productdetail"></div>
    <!-- <img src="../../assets/logo.png" alt /> -->
    <!-- <img alt="Vue logo" :src="require(src)" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ul>
      <li v-for="item in ProdeuctList" :key="item.id" :class="item">
        <span>{{ item.Pro_Name }}</span>
        <img :src="item.MemPrice" alt />
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { getHomeInfo, getDetail, getProductList } from '@/network/home'
export default {
  name: 'Home',
  data() {
    return {
      img: '../../assets/logo.png',
      ProdeuctList: [],
      productdetail: ''
    }
  },
  components: {
    // HelloWorld
  },
  created() {
    //1.get提交方式
    // getProductList()
    //   .then(res => {
    //     this.ProdeuctList = res.data.list
    //     console.log(this.ProdeuctList)
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })
    //post提交
    // getDetail(1).then(res => {
    //   console.log(res)
    // })

    getProductList()
      .then(res => {
        this.ProdeuctList = res.data.data
        console.log(this.ProdeuctList)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>
<style scoped>
.detail {
  width: 800px;
}
</style>
