<template>
  <div>
    <productshow/>
  </div>
</template>

<script>
// import { formatNum } from '../../toolkit'
// import { getList } from '@/network/home'
// import { mapGetters,mapActions } from 'vuex'
import productshow from '@/components/content/productshow'
// import showbox from './showbox'
export default {
  name: 'lifeapp',
  data(){
      return{
      type_id:2
    }
  },
  components:{
    productshow
  },
  created(){
    
    this.type_id=productType
  }
} 
</script>
<style scoped lang="scss">
@import "~assets/css/productshow/life.scss";
</style>