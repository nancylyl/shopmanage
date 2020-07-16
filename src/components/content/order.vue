<template>
  <div class="order">
  <div class="jiantou">
    <img alt="大朴" src="http://p2.dapuimg.com/themes/blue/images/images/icons/logo2015.png" width="200" height="50" border="0" @click="tohome">
    <ol>
      <li class="step1">1、我的购物车</li>

      <li class="step2 on">2、填写核对订单信息</li>
      <li class="step3">3、成功提交订单</li>
	  </ol>
  </div>
   <div class="address">
      <div class="th">
        <span>收货人信息</span>
        <a href="">修改</a>
      </div>
      <p>
        <label>收货人姓名：</label>
        <span>343</span>
      </p>
      <p>
        <label>收货人地区：</label>
        <span>北京-北京市-宣武区</span>
      </p>
      <P>
        <label>收货人地址：</label>
        <span>23</span>
      </P>
      <P>
        <label>邮编：</label>
        <span>23</span>
      </P>
      <P>
        <label>手机：</label>
        <span>23</span>
      </P>
      <P>
        <label>固定电话：</label>
        <span>23</span>
      </P>
      <P>
        <label>送货时间：</label>
        <span>任意日期任意时间段</span>
      </P>
    </div> 
      <div class="address" style="margin-top:25px">
      <div class="th" >
        <span>配送及支付方式</span>
        <a href="">修改</a>
      </div>
      <p>
        <label>配送方式：</label>
        <span>快递-网上支付</span>
      </p>
      <p>
        <label>付款方式：</label>
        <span>网银-中国工商银行</span>
      </p>
    </div> 
     <div class="address" style="margin-top:25px">
      <div class="th" >
        <span>商品清单</span>
        <a href=""><< 返回修改购物车</a>
      </div>
      <div class="th" style="border:none">
        <span>商品信息</span>
        <span style="margin-left:400px">商品单价</span>
        <span style="margin-left:150px">商品数量</span>
        <span style="margin-left:200px">小计</span>
      </div>
      <div class="xiangqing">
        <img src="" alt="">
        <div style="margin-left:40px">
          <a href="">阿瓦提毛巾经典款两条装（条纹+纯色）</a>
          <p>颜色：浅绿、尺寸：34cm×76cm</p>
        </div>
        <div style="margin-left:90px">
          <p>	￥69</p>
        </div>
        <div style="margin-left:190px">
          <p>1</p>
        </div>
        <div style="margin-left:210px">
          <p>￥69</p>
        </div>
      </div>
    </div> 
    <div class="address" style="margin-top:25px;">
      <div class="th" >
        <span>结算信息</span>
      </div>
      <div style=" height:200px">
      <div class="jiesuan">
        <div>
          <input type="checkbox"> 
          <span style="color:#2980B9">使用优惠券</span>
        </div>
        <div>
          <input type="checkbox"> 
          <span style="font-size:13px">支持礼品卡支付</span>
        </div>
        <div> 
          <span style="color:#2980B9">订单备注：</span>
           <input>
        </div>
      </div>
       <div class="two">
          <div style="height:40px"></div>
          <div>
            <label>商品金额</label>
            <span>￥69</span>
          </div>
          <div style="border-bottom:1px solid black">
            <label>配送金额</label>
            <span>+￥15</span>
          </div>
          <div style="padding-top:20px;color:red;font-size:20px;text-align:right;margin-bottom：10px">
             <label>应付金额：</label>
            <span style="margin-left:0;margin-right:50px">￥84元</span>
          </div>
        </div>
      </div>
    </div>
    <button class="btn">提交订单</button>
  </div>
</template>
<script>
export default {
  name: 'order',
  data(){
     return{
    }
  },
  methods:{
    tohome(){
      this.$router.push("/home")
    }
  }
 

}
</script>
<style scoped lang="scss">
@import "~assets/css/cart/order.scss";
</style>