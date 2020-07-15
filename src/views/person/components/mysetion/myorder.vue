<template>
  <div>
    <div class="box">
      <div class="header">

          <img src="../mydd.gif" alt=""  class="tu">


        <div class="text">
          <p class="name">13540238949</p>
          <p>新用户</p>
          <p>累计消费:</p>
        </div>
      </div>
      <div class="season">
        <h3>我的订单</h3>
        <div class="quanBu">全部订单</div>
        <div class="daiZhiFu">待支付</div>
        <div class="daiZhiFu">已取消的订单</div>
      </div>
      <div class="footer">
        <table>
          <thead>
          <tr><th >订单商品</th>
            <th>收货人</th>
            <th>订单金额</th>
            <th>下单时间</th>
            <th>订单状态</th>
            <th>操作</th>
          </tr></thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "myorder"
    }
</script>

<style scoped>
 .box{
   width: 970px;
   height: 540px;
  position: absolute;
   top: 60px;
   right: 7%;
   /*background-color: #00aaf1;*/
 }
  .header{
    text-align: left;
    height: 128px;
    position: relative;
    line-height: 128px;
    background-color: #efefef;
    margin-bottom: 20px;
    padding: 30px 50px;
  }
  .text{
    display: inline-block;
    width: 170px;
    height: 100px;
    position: absolute;
    top: -20px;
    left: 230px;
  }
  .tu{
    overflow: hidden;
    display: inline-block;
  }
  .name{
    color: rgb(107,107,107);
    font-size: 25px;
    font-weight: bold;
  }
  p{
    width: 170px;
    margin-top: 20px;
    height: 10px;
    font-size: 14px;
    color: #da5278;
  }
  .season{
    width: 920px;
    height: 142px;
    position: relative;
    background-color: #efefef;
    margin-bottom: 20px;
    padding-left: 50px;
    padding-top: 20px;
  }
h3{
  text-align: left;
  color: #6b6b6b;
}
  .quanBu{
    width: 120px;
    height: 50px;
    line-height: 50px;
    margin-right: 10px;
    float: left;
    border: 1px solid #fff;
    color: #fff;
    text-align: center;
    text-decoration: none;
    transition: all .4s ease 0s;
    cursor: pointer;
    background: #da5278;
  }
  .daiZhiFu{
    width: 120px;
    height: 50px;
    line-height: 50px;
    margin-right: 10px;
    float: left;
    border: 1px solid #da5278;
    color: #da5278;
    padding: 0px 10px;
    text-align: center;
    text-decoration: none;
    transition: all .4s ease 0s;
    cursor: pointer;
    background: 0 0;
  }
  .footer{
    width: 920px;
    height: 90px;
    position: relative;
    background-color: #efefef;
    padding-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  table{
    cellpadding:0;
    cellspacing:0;
    width: 920px;
   position: absolute;
    left: 0;
  }
  th{
    font-weight: bold;
    font-size: 14px;
    color: #6b6b6b;
  }
</style>
