<template>
  <div class="home">
    <div class="bedchose">
  <div>
    <ul>
      <li style="font-weight:bold;text-decoration:none;cursor: unset">风格：</li>
      <li>全部</li>
      <li>纯色</li>
      <li>格子</li>
      <li>条纹</li>
      <li>印花</li>
    </ul>
  </div>
  </div>
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
<style lang="scss">
@import "~assets/css/productshow/life.scss";
</style>