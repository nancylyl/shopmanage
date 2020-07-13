<template>
  <div class="towel">
     <lifeapp></lifeapp> 
    动态路由参数 {{$route.params.id}}
  </div>
</template>


<script>
// import { formatNum } from '../../toolkit'
import lifeapp from '../lifeapp/index'
export default {
  name: 'towel',
  components: {
    lifeapp
  },
  methods: {}
}
</script>