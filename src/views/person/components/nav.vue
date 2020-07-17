<template>
    <div id="navheader">
      <div class="box">
        <div class="dingDan">
          <p class="dingDan1">订单中心</p>
          <router-link to="/PerCenter/myorder" class="dingDan2">我的订单</router-link>
          <router-link to="/PerCenter/mycomment" class="dingDan2">我的评论</router-link>
        </div>
        <div class="geRen">
          <p class="dingDan1">个人中心</p>
          <router-link to="/PerCenter/personalData" class="dingDan2">个人资料</router-link>
          <router-link to="/PerCenter/ShiAddress" class="dingDan2">收货地址</router-link>
          <router-link to="/PerCenter/Information" class="dingDan2">发票信息</router-link>
          <router-link to="/PerCenter/Mypoints" class="dingDan2">我的积分</router-link>
          <router-link to="/PerCenter/MyCoupon" class="dingDan2">我的优惠券</router-link>
          <router-link to="/PerCenter/MyMessage" class="dingDan2">我的消息</router-link>
          <router-link to="/PerCenter/MyCollection" class="dingDan2">我的收藏</router-link>
          <router-link to="/PerCenter/ChangeWord" class="dingDan2">修改密码</router-link>

        </div>
        <div class="neiRong">
          <router-view></router-view>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "navheader"
    }
</script>

<style scoped>
.box{
  position: absolute;
  top: 60px;
  left:80px ;
  width: 180px;
  height: 464px;
  padding-left: 20px;
  color: #808080;
  background-color: rgb(239,239,239);
}
  .dingDan{
    text-align: left;
    padding-top: 30px;
  }
  .dingDan1{
    color: #6b6b6b;
    font-size: 18px;

  }
template{
  font-family: 微软雅黑;
}
  .dingDan2{
    display: block;
    margin-top: 15px;
    font-size: 14px;
    color:#6b6b6b ;
  }
  .geRen{
    width: 200px;
    height: 307px;
    font-size: 12px;
    padding-top: 5px;
    text-align: left;
  }
  .neiRong{
   position: absolute;
    top: -60px;
    left: 300px;
    width: 970px;

  }
</style>
