<template>
  <div class="bed">
    <h1>我是床品</h1>
    动态路由参数 {{$route.params.id}}
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'bed',
  data() {
    return {}
  },
  created() {},
  beforeUpdate() {},
  components: {},
  methods: {}
}
</script>