<template>
  <div class="lifeapp">
    <div class="sort">
      <ul>
        <li style="font-weight:bold;text-decoration:none;cursor: unset">排序方式：</li>
        <li>最新</li>
        <li>销量</li>
        <li>价格<span class="icon iconfont">&#xe6db;</span></li>
        <li>价格<span class="icon iconfont">&#xe6da;</span></li>
      </ul>
    </div>
    <ul class="products">
      <li v-for="item in showlist" :key="item.id">
        <showbox :imgSrc="item.children" :price="item.Price" :tittle="item.Pro_Name"></showbox>
      </li>
    </ul>
  </div>
</template>

<script>
// import { formatNum } from '../../toolkit'
import { getList } from '@/network/home'
import { mapGetters,mapActions } from 'vuex'
import breadcrumbVue from '@/components/content/breadcrumb'
import showbox from './showbox'
export default {
  name: 'lifeapp',
  data(){
     return{
    }
  },
  props:["productType"],
  components:{
    breadcrumbVue,
    showbox
  },
  created(){
    let data = { PageCount: 100, CurrentPage: 1, Key: '', P_Type_Menu_Id: productType }
    this.getshowlist(data)
  },
  methods: {...mapActions(["getshowlist"])},
  computed:{
   ...mapGetters(["showlist"])
  }
 

}
</script>
<style scoped lang="scss">
@import "~assets/css/productshow/life.scss";
</style>