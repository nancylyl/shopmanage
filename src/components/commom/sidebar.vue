<template>
  <div class="sidebar">
    <ul>
      <li class="sidebar—li">
        <p class="iconfont icon-shouyeshouye"></p>
        <b @click="tohome">首页</b>
      </li>
      <li>
        <p class="iconfont icon-gerenzhongxin-2"></p>
        <b @click="toperson">我的<br />订单</b>
      </li>
      <li>
        <p class="iconfont icon-gouwuche"></p>
        <b @click="tocart">购物车</b>
      </li>
      <li class="erWeiMa_li">
        <p class="iconfont icon-kefu"></p>
        <b>客服</b>
        <img src="~assets/images/other/erweima.jpg" class="erWeiMa" />
      </li>
      <li>
        <p>
          <img src="~assets/images/other/side5.png" />
        </p>
        <b @click="toTop">回到<br />顶部</b>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {};
  },
  components: {},
  methods: {
    toTop() {
      scrollTo(0, 0);
    },
    tohome() {
      this.$router.push("/home");
    },
<<<<<<< HEAD
    toperson(){
      this.$router.push("/person")
    },
    tocart(){
     this.$router.push("/cart")
=======
    toperson() {
      this.$router.push("/PerCenter");
>>>>>>> affc917deae6f42756537a43b4c9ce5a8ef52bb5
    },
    tocart() {
      this.$router.push("/cart");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pop_up/sidebar.scss";
</style>
