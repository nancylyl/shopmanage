<template>
  <div>
    <img
      src="http://activity.dapuimg.com/2019082001logo.png"
      alt="大朴网"
      style="width:250px;height:100px;cursor: pointer;"
      @click="tohome"
    />
    <div>
      <img src alt />
    </div>
    <div class="tittle">
      <strong style="float:left">我的购物车</strong>
      <a href>
        <strong style="float:right">清空购物车</strong>
      </a>
    </div>
    <table>
      <tr>
        <th style="width:5%">
          <input type="checkbox" checked="checked" />
        </th>
        <th style="width:40%">商品信息</th>
        <th style="width:10%">商品单价</th>
        <th style="15%">商品数量</th>
        <th style="width:10%">小计</th>
        <th style="width:10%">操作</th>
      </tr>
      <tr>
        <td>
          <input type="checkbox" checked="checked" />
        </td>
        <td>
          <a href>
            <img src alt style="float:left" />
          </a>
          <a href>精梳纯棉缎纹婚庆绣花六件套/百年好合</a>
          <p>颜色：百年好合、尺寸：1.8米床</p>
        </td>
        <td>
          <span>¥799</span>
        </td>
        <td>
          <div>
            <button type="button">-</button>
            <input type="text" placeholder="1" style="padding-left:10px" />
            <button type="button">+</button>
          </div>
        </td>
        <td>
          <span>¥799</span>
        </td>
        <td>
          <button class="mydelete">删除</button>
        </td>
      </tr>
    </table>
    <div class="down">
      <h3>已享受到的促销优惠：</h3>
      <p>满88包邮</p>
    </div>
    <div class="mydown">
      <div>
        <p>原始金额：￥799</p>
      </div>
      <div>
        <p style="color:red">优惠金额：￥0</p>
      </div>
      <div>
        <p style="font-weight:700">商品总金额(不含运费)：￥799</p>
      </div>
      <div class="mybutton">
        <button class="one" @click="tohome">继续购物</button>
        <button @click="toorder">去结算</button>
      </div>
    </div>
  </div>
</template>

<script>
// import {
//   getcartlist
// } from '@/network/cart'
export default {
  name: 'cart',
  data() {
    return {}
  },
  methods: {
    toorder() {
      this.$router.push('/order')
    },
    tohome() {
      this.$router.push('/home')
    }
  },
  created() {
    //     getcartlist()
    //   .then(res => {
    //       console.log(res);
    //   })
  }
}
</script>
<style scoped lang="scss">
@import '~assets/css/cart/cart.scss';
</style>