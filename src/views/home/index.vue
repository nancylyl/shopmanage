<template>
  <div class="home">
<<<<<<< HEAD
    <!-- <img :src="require('@/assets/images/bed/0035-0.png')"> -->
    <!-- <img src="@/assets/images/bed/0035-0.png"> -->
   <el-carousel :interval="4000" arrow="never" height="450px">
      <el-carousel-item v-for="item in ProdeuctList[0]" :key="item.id">
        <router-link :to="'/'+item.url+'/'+item.id">
          <img :src="require(`../../assets/images/${item.Banner_src}`)" class="banner_img">
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <div class="largeproduct">
      <div v-for="item in ProdeuctList[1]" :key="item.id" class="bigPro_img">
        <router-link :to="'/'+item.url+'/'+item.id">
          <img :src="require(`../../assets/images/${item.Pro_Url}`)">
        </router-link>
      </div>
    </div>
=======
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
>>>>>>> 382311cb0f00308694e00261f2b7944d188f684a
  </div>
</template> 
<script>
// @ is an alias to /src
import { getHomeInfo } from '@/network/home'
export default {
  name: 'Home',
  data() {
    return {
<<<<<<< HEAD
      ProdeuctList: [],
=======
      img: '../../assets/logo.png',
      ProdeuctList: [],
      productdetail: ''
>>>>>>> 382311cb0f00308694e00261f2b7944d188f684a
    }
  },
  components: {
  },

  created() {
<<<<<<< HEAD
    getHomeInfo()
=======
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
>>>>>>> 382311cb0f00308694e00261f2b7944d188f684a
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
<style lang="scss"> 
@import '~assets/css/home/home.scss';
</style>
