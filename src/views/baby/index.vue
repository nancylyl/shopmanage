<template>
  <div class="clean">
    <lifeapp></lifeapp>
    动态路由参数 {{$route.params.id}}
  </div>
</template>

<script>
import lifeapp from '../lifeapp/index'
export default {
  name: 'clean',
    components: {
    lifeapp
  },
  methods: {}
}
</script>