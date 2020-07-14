<template>
    <div class="goods">
        <img :src="imgSrc" alt="" class="big">
        <div class="little">
          <img src="" alt="">
        </div>
        <p>
          <span>￥{{price}}</span>
        </p>
        <router-link to="#" active-class="active"  tag="li" style="color:#6B6B6B">{{tittle}}</router-link>
      </div> 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'showbox',
  data(){
     return{
    
    }
  },
  props:['imgSrc','price','tittle'],
components:{

},
  methods: {},

}
</script>
<style scoped lang="scss">
@import "~assets/css/productshow/life.scss";
</style>