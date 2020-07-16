<template>
  <div>
<<<<<<< HEAD
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
=======
        <img class="logo" src="http://activity.dapuimg.com/2019082001logo.png" alt="大朴网" @click="tohome">       
        <div v-if="cartProducts == ''" class="empty">
            <span style="font-size: 40px; ">您的购物车还是空的</span>
            <div class="goBuy">
                <el-button type="info" @click="tohome">马上去购物</el-button>
            </div>  
        </div>
        <div v-if="cartProducts != ''">   
            <div class="tittle">
                <strong style="float:left">我的购物车</strong>
                <strong class="fRight" @click="delAll">清空购物车</strong>
            </div>
            <el-table
                :header-cell-style="{textAlign:'center',color:'#555'}"
                :cell-style="{textAlign:'center',color:'#555'}"
                ref="multipleTable"
                :data="cartProducts"
                border
                style="width: 85%; margin:0 auto;"
                tooltip-effect="dark" 
                @select='onTableSelect'
                @select-all="selectAll"
                @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="70">
                    </el-table-column>  
                    <el-table-column
                    label="商品信息" >
                        <template slot-scope="scope">
                            <router-link :to="{ path: '/productdetails/' + scope.row.id }">
                                <img :src="scope.row.img" alt="" style="float:left">
                            </router-link>
                            <router-link :to="{ path: '/productdetails/' + scope.row.id }">{{scope.row.product_Name}}</router-link>
                            <p><span>{{scope.row.Title1+" "+scope.row.Title1value}}</span> <span v-if="scope.row.Title2!=''">{{"、"+scope.row.Title2+""+scope.row.Title2value}}</span></p>
                        </template>
                    </el-table-column>
                    <el-table-column
                    label="商品单价"
                    width="140">
                        <template slot-scope="scope">
                            <span>¥{{scope.row.product_Price}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                    
                    label="商品数量"
                    width="200"
                    show-overflow-tooltip>
                        <template slot-scope="scope">
                            <el-input-number size="mini" v-model="scope.row.num" :min="1" :max="scope.row.stock" @change="isChang()"></el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column
                    label="小计"
                    width="140"
                    show-overflow-tooltip>
                        <template slot-scope="scope">
                            <span>¥{{scope.row.num*scope.row.product_Price}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作"
                    width="140">
                        <template slot-scope="scope">
                            <el-button  type="danger" @click="delProduct(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
            </el-table>
            <div class="down" v-show="isshow">
                <h3>已享受到的促销优惠：</h3>
                <p>满88包邮</p>
            </div>
            <div class="mydown" v-if="cartProducts != ''">
                <div>   
                    <p>原始金额：¥{{totalPrice}}</p>
                </div>
                <div>
                    <p style="color:red">优惠金额：¥{{discountts}}</p>
                </div>
                <div>
                    <p style="font-weight:700">商品总金额(不含运费)：¥{{totalPrice-discountts}}</p>
                </div>
                <div class="mybutton">
                    <el-button type="info" @click="tohome">继续购物</el-button>
                    <el-button  type="danger" @click="toOrder(multipleSelection)">去结算</el-button>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
    import  {mapActions,mapGetters} from 'vuex'
    export default {
        name: 'cart',
        data(){
            return{
                multipleSelection: [],
                discountts: 0,
                totalPrice: 0,
                isshow:""
            }
        },
        created() {
            this.$watch("totalPrice", function (newValue, oldValue) {
                if(newValue >= 88) {
                    this.isshow = true
                }else{
                    this.isshow = false
                }
            })
        },
        methods:{
            ...mapActions(['delProduct','delAll','submitOrder']),
            toOrder(value) {
                this.$router.push("/order")
                this.$store.dispatch("submitOrder",value) 
            },
            tohome(){
                this.$router.push("/home")
            },
            handleSelectionChange(val) {
                this.multipleSelection = val   
            },
            onTableSelect(rows, row) {
                let selected = rows.length && rows.indexOf(row) !== -1
                // console.log(selected)  // true就是选中，0或者false是取消选中
                if(selected){
                    this.totalPrice += row.product_Price*row.num
                }else{
                    this.totalPrice -= row.product_Price*row.num
                }
            },
            selectAll(selection){
                let selected = selection.length
                // console.log(selection)
                // console.log(selected)
                if(selected != 0){
                    this.totalPrice = 0
                selection.map((item,index)=>{      
                    this.totalPrice += item.product_Price*item.num
                })
                }else{
                    this.totalPrice = 0
                }
            },
            isChang() {
                this.totalPrice = 0
                this.multipleSelection.map((item,index)=>{ 
                        // console.log(item)    
                this.totalPrice += item.product_Price*item.num
                })
                }
            },
        computed:{
            ...mapGetters(['cartProducts'])       
        },
    }
>>>>>>> ae410c0ab58eeb0bff39398cec0be6da9642ee69
</script>
<style scoped lang="scss">
@import '~assets/css/cart/cart.scss';
</style>