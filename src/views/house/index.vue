<template>
  <div class="home">
    <lifeapp></lifeapp>>
    动态路由参数 {{$route.params.id}}
  </div>
</template>


<script>
// import { formatNum } from '../../toolkit'
import lifeapp from '../lifeapp/index'
export default {
  name: 'home',
   components: {
    lifeapp
  },
  methods: {}
}
</script>