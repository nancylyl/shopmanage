<template>
    <div>
      <div class="box">
        <div class="header">
          <h3>我的消息</h3>
          <p>这里会发布一些通知，包括优惠券，积分等变动提醒等。如果有是什么宝贵意见也可以在这里提交给我们。</p>
        </div>
        <div class="setion">
          <div class="xiaoXi">
            <p class="p1">订单创建提醒</p>
            <p class="p2">尊敬的用户您好，您的订单已创建成功，订单号：20200709140794，我们会在确认订单之后尽快安排发货。</p>
            <i>删除</i>
          </div>
          <p style="text-align: center;">2020-07-09 14:09:57</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MyMessage"
    }
</script>

<style scoped>
  *{
    font-size: 14px;
    color: #6B6B6B;
  }
  .box{
    width:970px;
    position: absolute;
    top: 60px;
    right: 7%;
  }
  .header{
    position: relative;
    background-color: #efefef;
    margin-bottom: 20px;
    padding: 30px 50px;
  }
  h3{
    position: relative;
    top: -10px;
    font-size: 18px;
    color: #6b6b6b;
    text-align: left;
  }
  p{

    text-align: left;
  }
  .setion{
    position: relative;
    background-color: #efefef;
    margin-bottom: 20px;
    padding: 30px 50px;
  }
  .xiaoXi{
    background: #fff;
    padding: 10px 20px;
    position: relative;
  }
  .p2{
    padding-right: 50px;
  }
  i{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -25px;
    border: 1px solid #da5278;
    color: #da5278;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }
</style>
