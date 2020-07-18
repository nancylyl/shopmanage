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
      <div v-for="item in defaultSite" :key="item.id"> 
        <p>
          <label>收货人姓名：</label>
          <span>{{item.S_Name}}</span>
        </p>
        <p>
          <label>收货人地区：</label>
          <span>{{item.Province+'-'+item.City+'-'+item.Area}}</span>
        </p>
        <P>
          <label>收货人地址：</label>
          <span>{{item.Address}}</span>
        </P>
        <P>
          <label>邮编：</label>
          <span>{{item.Mail}}</span>
        </P>
        <P>
          <label>手机：</label>
          <span>{{item.Phone}}</span>
        </P>
        <P>
          <label>固定电话：</label>
          <span>{{item.Tel}}</span>
        </P>
        <P>
          <label>送货时间：</label>
          <select @change="indexSelect($event)" >
            <option value="0">工作日、双休日与假日均可送货</option>
            <option value="1">只工作日送货（双休日与假日不用送）</option>
            <option value="2">只双休日、假日送货（工作日不用送）</option>
          </select>  
        </P>
      </div> 
    </div> 
      <div class="address" style="margin-top:25px">
      <div class="th" >
        <span>配送及支付方式</span>
        <router-link :to="{path:'/paybyway',query:{id:1}}">修改</router-link>
      </div>
      <p>
        <label>配送方式：</label>
        <span>快递-{{checkedData[0].payway}}</span>
      </p>
      <p>
        <label>付款方式：</label>
        <span>网银-{{checkedData[0].whichway}}</span>
      </p>
    </div> 
    <div class="address" style="margin-top:25px">
      <div class="th" >
        <span>商品清单</span>
        <a href=""> 返回修改购物车</a>
      </div>
      <div class="xiangqing" v-if="cartData!=''">
         <el-table
          :data="cartData"
          :header-cell-style="{fontSize:'14px',color:'#6b6b6b'}"
          style="width: 100%">
          <el-table-column
            label="商品信息">
            <template slot-scope="scope">
              <router-link :to="{ path: '/productdetails/' + scope.row.id }">
                  <img :src="scope.row.img" alt="" style="float:left">
              </router-link>
              <div class="detail">
                <router-link :to="{ path: '/productdetails/' + scope.row.id }">{{scope.row.product_Name}}</router-link>
                <p><span>{{scope.row.Title1+" "+scope.row.Title1value}}</span> <span v-if="scope.row.Title2!=''">{{"、"+scope.row.Title2+""+scope.row.Title2value}}</span></p>
              </div>
              
            </template>
          </el-table-column>
          <el-table-column
            label="商品单价"
            width="160">
            <template slot-scope="scope">
                <span>¥{{scope.row.product_Price}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="商品数量"
            width="160">
            <template slot-scope="scope">
                <span>{{scope.row.num}}</span>
            </template>    
          </el-table-column>
          <el-table-column
            label="小计"
            width="140">
            <template slot-scope="scope">
                <span>¥{{scope.row.num*scope.row.product_Price}}</span>
            </template>
          </el-table-column>
        </el-table>
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
            <span>¥{{totalPrice}}</span>
          </div>
          <div style="border-bottom:1px solid black">
            <label>配送金额</label>
            <span>+¥{{freight}}</span>
          </div>
          <div style="padding-top:20px;color:red;font-size:20px;text-align:right;margin-bottom：10px">
             <label>应付金额：</label>
            <span style="margin-left:0;margin-right:50px">¥{{totalPrice+freight}}元</span>
          </div>
        </div>
      </div>
    </div>
    <button class="btn" @click="upOrder">提交订单</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { addOrder } from '@/network/order'
export default {
  name: 'order',
  data(){
     return{
      totalPrice: 0,
      freight: 0,
      Deltimeid: 0
    }
  },
  created() {  
    // console.log(this.checkedData[0])
    this.getSiteList()
    this.cartData.map((item, index) => {
      this.totalPrice += item.product_Price*item.num
    })
    if(this.totalPrice>=88){
      this.freight = 0
    }else{
      this.freight = 12
    }
  },
  methods:{
    ...mapActions(['getSiteList']),
    tohome(){
      this.$router.push("/home")
    },
    indexSelect(event){
      this.Deltimeid = event.target.value
      // console.log(event.target.value)
    },
    upOrder() {
      this.$router.push("/payOrder")
      let orderList = []         
      this.cartData.map((item, index) => {
          orderList.push({
                PId:  this.cartData[index].id, // 购买物品id
                Price: this.cartData[index].product_Price, // 商品价格
                Num:  this.cartData[index].num, // 购买商品数量
                Score: this.cartData[index].Score, // 购买商品积分
                Is_Invoic:  0, // 是否开具发票
                Invoic_Type:  1,// 发票种类
                IS_Coupon:  0, // 是否使用优惠券
                Coupon_Id:  0, // 优惠券id
                Is_Gift:  0, // 是否使用礼品卡
                Gift_Id:  0, // 礼品卡使用id
                Send_Type:  1, // 配送方式
                Pay_Type_Id:  this.checkedData[0].payId, // 付款方式id
                Address_ID:  1, // 收货地址id
                New_Name:   this.defaultSite[0].S_Name,
                New_Province:  this.defaultSite[0].Province,     
                New_City:  this.defaultSite[0].City,   
                New_Area:  this.defaultSite[0].Area,
                New_Address:  this.defaultSite[0].Address,
                New_Mail:  this.defaultSite[0].Mail,   
                New_Phone:  this.defaultSite[0].Phone, 
                New_Tel:  this.defaultSite[0].Tel,
                Deltime:  this.Deltimeid   // 送货时间种类  
            })
      })
      // console.log(orderList)
      // console.log(this.defaultSite[0])
      // console.log(this.checkedData[0])
      // console.log(this.cartData)
      addOrder(orderList)
    }
  },
  computed: {
    ...mapGetters(['siteList','cartData','checkedData']),
    defaultSite: function () {
      return this.siteList.filter(function (siteList) {
        return siteList.Is_True==1
      })
    } 
  }
}
</script>
<style scoped lang="scss">
@import "~assets/css/cart/order.scss";
</style>