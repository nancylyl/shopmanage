<template>
  <div class="bed">
   <lifeapp></lifeapp>  
    动态路由参数 {{$route.params.id}}
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import lifeapp from '../lifeapp/index'
export default {
  name: 'bed',
  data() {
    return {}
  },
  created() {},
  beforeUpdate() {},
  components: {
    lifeapp
  },
  methods: {}
}
</script>