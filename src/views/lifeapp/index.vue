<template>
  <div class="lifeapp">
    <!-- <div class="name">
      <span>
         <breadcrumbVue></breadcrumbVue>
      </span>
      <span style="margin-left:10px">商品筛选</span>
      <a href="">重置筛选条件</a>
    </div> -->
    <div class="sort">
      <ul>
        <li>排序方式：</li>
        <li>最新</li>
        <li>销量</li>
        <li>价格<span class="icon iconfont">&#xe6db;</span></li>
        <li>价格<span class="icon iconfont">&#xe6da;</span></li>
      </ul>
    </div>
    <div class="products">
      <router-link to="">
        <showbox></showbox>
      </router-link>
    </div>
  </div>
</template>

<script>
// import { formatNum } from '../../toolkit'
import { mapGetters } from 'vuex'
import breadcrumbVue from '@/components/content/breadcrumb'
import showbox from './showbox'
export default {
  name: 'lifeapp',
  data(){
     return{
    
    }
  },
components:{
  breadcrumbVue,
  showbox
},
  methods: {},
  

}
</script>
<style scoped lang="scss">
@import "~assets/css/productshow/life.scss";
</style>