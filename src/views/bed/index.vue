<template>
  <div class="bed">
    <bedchose></bedchose>
   <lifeapp></lifeapp>  
    动态路由参数 {{$route.params.id}}
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import lifeapp from '../lifeapp/index'
import bedchose from './bedchose'
export default {
  name: 'bed',
  data() {
    return {}
  },
  created() {},
  beforeUpdate() {},
  components: {
    lifeapp,
    bedchose
  },
  methods: {}
}
</script>