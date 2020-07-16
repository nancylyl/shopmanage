<template>
  <div>
    <addcart v-show="visible" />
    <section class="details" v-if="this.productlist.length>0">
      <div class="boxleft">
        <div class="picbox">
          <div class="choose" ref="choose">
            <div class="content" ref="content" @mousemove="handleMove" @mouseleave="notshow">
              <img :src="picsrcbig" />
              <div class="shadow" ref="shadow"></div>
            </div>
            <el-carousel
              type="card"
              height="100px"
              :autoplay="false"
              indicator-position="none"
              arrow="never"
            >
              <el-carousel-item
                v-for="(item, index) in piclist"
                :key="item.id"
                name="item.id"
                @click.native="setActiveItem(piclist, index, picsrcbig)"
              >
                <img :src="require(`../../assets/images/${item.Pro_Url}`)" class="medium" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="larger" ref="larger">
            <img :src="picsrcbig" ref="big" />
          </div>
        </div>
        <!-- 收藏按钮 -->
        <a href>
          <div id="shoucangbg" class="shoucang"></div>
        </a>
        <!-- 分享按钮 -->
        <a href>
          <div id="bshare-shareto" class="shareto">&nbsp;</div>
        </a>
      </div>
      <div class="boxright">
        <h1 class="goods-name">{{ productlist[0].Pro_Name }}</h1>
        <div class="product-id clearfix">
          商品编码：&nbsp;
          <span id="goodsBn">{{ productlist[0].Pro_Num }}</span>
        </div>
        <div class="goods-price-box clearfix">
          <div style="margin:0px;padding:0px;">
            <span class="goodsprice">￥{{ productlist[0].Price }}</span>
          </div>
        </div>
        <div class="goods-price-box clearfix">
          <span class="huiyuan">会员价</span>&nbsp;&nbsp;
          <span
            class="mlvprice"
            style="color:#7F5B42;font-weight:bold;"
          >￥{{ productlist[0].MemPrice }}</span>
          <a
            class="how"
            target="_blank"
            href="http://www.dapu.com/index.php/article-bangzhuzhongxin_tesesuwu-24.html"
          >如何成为会员？</a>
        </div>
        <div id="promotion_show" class="clearfix">
          <span class="cuxiao">促销</span>
          <span id="promotion_msg">满88包邮</span>
        </div>
        <div class="score-wrap">
          <ul>
            <li>
              <p class="score-num">{{ productlist[0].Pro_SumCount - productlist[0].Pro_NewCount }}</p>
              <p class="score-name">销量</p>
            </li>
            <li>
              <p class="score-num">{{ productlist[0].CNum }}</p>
              <p class="score-name">用户评论数</p>
            </li>
            <li>
              <p class="score-num">{{ productlist[0].Score }}</p>
              <p class="score-name">评论送积分</p>
            </li>
          </ul>
        </div>
        <div class="tagline">{{ productlist[0].Pro_Title }}</div>
        <div id="goods-spec" class="goods-spec">
          <div class="spec-item specItem">
            <span class="buttontitle">{{ Pro_Spe_Title1 }}</span>
            <div class="rightdiv1">
              <el-button
                type="info"
                size="small"
                v-for="(item,index) in shopbutton1"
                :key="index"
                name="item"
                @click.native="value1(item)"
              >{{ item }}</el-button>
            </div>
            <br />
            <br />
            <span class="buttontitle">{{ Pro_Spe_Title2 }}</span>
            <div class="rightdiv1">
              <el-button
                type="info"
                size="small"
                v-for="(item,index) in shopbutton2"
                :key="index"
                name="item"
                @click.native="value2(item)"
              >{{ item }}</el-button>
            </div>
          </div>
        </div>
        <div class="buyinfo clearfix">
          数量:
          <el-input-number
            class="elbutton"
            size="small"
            v-model="num4"
            :min="0"
            :max="productlist[0].Pro_SumCount"
          ></el-input-number>
          <!-- @change="handleChange(num4)" -->
        </div>
        <div class="shopbutton">
          <el-button
            type="warning"
            style="background-color:#B1544F"
            @click.native="addcart(productlist[0].Pro_Id,productlist[0].Pro_Name,productlist[0].Price,Pro_Spe_Title1,Title1_value,Pro_Spe_Title2,Title2_value,num4,picsrcbig,productlist[0].Pro_SumCount )"
          >加入购物车</el-button>
        </div>
      </div>
    </section>
    <div class="bottomcontent">
      <div class="btshop">
        <hotShop />
      </div>
      <div class="btright">
        <div id="buttonbox">
          <el-radio-group v-model="isCollapse">
            <el-radio-button :label="false" @click.native="showdata()">产品详情</el-radio-button>
            <el-radio-button :label="true" @click.native="showcommentary()">用户评论</el-radio-button>
          </el-radio-group>
        </div>
        <div class="otherbox" v-html="pro_data" :style="productshow"></div>
        <div class="otherbox" :style="commentaryshow">
          <div class="talk" v-for="item in piclist" :key="item.id" name="item.id">
            <span class="tel">13388886666</span>
            <div class="talktext">啊哈哈哈哈哈！！！！！！！</div>
            <div class="talkdate">2070-12-05</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import addcart from '@/components/commom/addcart'
import { mapActions } from 'vuex'
import { getProductDetail } from '@/network/productdetails'
import hotShop from '@/components/content/hotShop'
export default {
  data() {
    return {
      visible: false,
      intnum: 0,
      num4: 1,
      productlist: [], //产品的信息表
      ProdeuctList: [],
      piclist: [], //产品图片表
      Pro_Spe_Title1: '',
      Pro_Spe_Title2: '',
      picsrcbig: '', //轮播图切换存放图片地址的
      shopbutton1: [],
      shopbutton2: [],
      isCollapse: false,
      pro_data: '',
      productshow: '',
      commentaryshow: { display: 'none' },
      talklist: [],
      talktel: [],
      pro_Id: '',
      Title1_value: '',
      Title2_value: ''
      // pid:
    }
  },
  components: {
    addcart,
    hotShop
  },
  mounted: function() {
    // let piclist = this.piclist
    // let intnum = this.intnum
    // let url = this.piclist[0].Pro_Url
    // console.log(2222222222222222);
    // console.log(url);
    // picsrcbig = "require(`../../assets/images/${url}`)",
    // this.setActiveItem(piclist,intnum,picsrcbig);//需要触发的函数
  },
  created() {
    this.getProductDetail()
  },
  methods: {
    ...mapActions(['addToCart']),
    getProductDetail() {
      getProductDetail(this.$route.params.id).then(res => {
        this.pro_Id = this.$route.params.id
        this.productlist = res.data.data[0]
        let piclist2 = res.data.data[1]
        var newArr = piclist2.filter(item => item.Type == 3) //遍历数组拿到类型为3的数组
        this.piclist = newArr

        if (res.data.data[0][0].Pro_Spe_Content1 != null) {
          var newButton1 = res.data.data[0][0].Pro_Spe_Content1.split('$')
        }
        this.shopbutton1 = newButton1 //遍历字符串，以$分隔存入新数组
        if (res.data.data[0][0].Pro_Spe_Content2 != null) {
          var newButton2 = res.data.data[0][0].Pro_Spe_Content2.split('$')
          this.shopbutton2 = newButton2 //遍历字符串，以$分隔存入新数组
        }

        let myurl = this.piclist[0].Pro_Url //将拿到数据分别赋值给几个数组

        this.picsrcbig = require(`../../assets/images/${myurl}`)
        if (res.data.data[0][0].Pro_Spe_Title1 != null) {
          //判断选择菜单2是否有数值，并且赋值
          this.Pro_Spe_Title1 = res.data.data[0][0].Pro_Spe_Title1 + ':'
        }
        if (res.data.data[0][0].Pro_Spe_Title2 != null) {
          //判断选择菜单2是否有数值，并且赋值
          this.Pro_Spe_Title2 = res.data.data[0][0].Pro_Spe_Title2 + ':'
        }
        this.pro_data = res.data.data[0][0].pro_data
        //   console.log(33333333333333);
        //   console.log(res.data.data[0]);
        //   console.log(res.data.data[1]);
        //   console.log(res.data.data[2]);
      })
    },
    showdata() {
      this._data.productshow = { display: 'block' }
      this._data.commentaryshow = { display: 'none' }
    },
    showcommentary(productshow) {
      this._data.productshow = { display: 'none' }
      this._data.commentaryshow = { display: 'block' }
    },
    setActiveItem(piclist, name, picsrcbig) {
      let srcnow = piclist[name].Pro_Url
      this.picsrcbig = require(`../../assets/images/${srcnow}`)
    },
    // 获取元素到文档区域的坐标
    getPosition: function(element) {
      var dc = document,
        rec = element.getBoundingClientRect(),
        x = rec.left, // 获取元素相对浏览器视窗window的左、上坐标
        y = rec.top
      // 与html或body元素的滚动距离相加就是元素相对于文档区域document的坐标位置
      x += dc.documentElement.scrollLeft || dc.body.scrollLeft
      y += dc.documentElement.scrollTop || dc.body.scrollTop
      return {
        left: x,
        top: y
      }
    },
    handleMove(evt) {
      var larger = this.$refs.larger
      var shadow = this.$refs.shadow
      var big = this.$refs.big
      var pos = this.getPosition(this.$refs.choose)
      var shadowRect = shadow.getBoundingClientRect()
      var bigRect = big.getBoundingClientRect()
      var contentRect = this.$refs.content.getBoundingClientRect()
      var maxX = contentRect.width - shadowRect.width
      var maxY = contentRect.height - shadowRect.height

      var X = evt.pageX - pos.left - shadowRect.width / 2
      var Y = evt.pageY - pos.top - shadowRect.height / 2

      if (X <= 0) {
        X = 0
      }
      if (X >= maxX) {
        X = maxX
      }
      if (Y <= 0) {
        Y = 0
      }
      if (Y >= maxY) {
        Y = maxY
      }
      // 防止遮罩层粘滞，跟随鼠标一起滑出大图位置
      var bigX = (X * bigRect.width) / contentRect.width
      var bigY = (Y * bigRect.height) / contentRect.height
      //  bigX / bigW = X / contentW,主图和遮罩层之间存在两倍关系，放大图和原图之间也有两倍关系
      shadow.style.left = X + 'px'
      shadow.style.top = Y + 'px'

      // console.log(X, Y, bigX, bigY);

      big.style.left = -bigX + 'px'
      big.style.top = -bigY + 'px'

      larger.style.display = 'block'
      shadow.style.display = 'block'
    },
    notshow() {
      var larger = this.$refs.larger
      var shadow = this.$refs.shadow
      larger.style.display = 'none'
      shadow.style.display = 'none'
    },
    addcart() {
      console.log(this.pro_Id)
    }
  },
  addcart(a, b, c, d, e, f, g, h, i, j) {
    if (e == '' || g == '') {
    }
    console.log(a, b, c, d, e, f, g, h, i, j)
    this.addToCart({
      id: a,
      product_Name: b,
      product_Price: c,
      Title1: d,
      Title1value: e,
      Title2: f,
      Title2value: g,
      num: h,
      img: i,
      stock: j
    })
  },
  value1(event) {
    this.Title1_value = event
    // console.log(event)
  },
  value2(event) {
    this.Title2_value = event
    // console.log(event)
  },
  notshow() {
    var larger = this.$refs.larger
    var shadow = this.$refs.shadow
    larger.style.display = 'none'
    shadow.style.display = 'none'
  },
  updated() {
    // this.getProductDetail();
  }
}
</script>
    <style scoped>
* {
  margin: 0px;
  padding: 0px;
}
section {
  height: 600px;
  border: 1px solid #6b6b6b;
  position: relative;
}
.boxleft {
  width: 400px;
  float: left;
}
.choose {
  width: 400px;
  height: 600px;
  float: left;
  margin: 10px 0 0 10px;
}

.content {
  width: 400px;
  height: 400px;
  position: relative;
}

.content img {
  width: 400px;
  height: 400px;
}
#listshow {
  width: 400px;
  height: 100px;
  margin-top: 20px;
}

#listshow li {
  width: 98px;
  height: 100px;
  float: left;
  border: 1px solid #666;
}

#listshow li img {
  width: 98px;
  height: 100px;
}

#listshow .selected {
  border-color: brown;
}

.larger {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 22px;
  left: 420px;
  float: left;
  overflow: hidden;
  display: none;
  z-index: 10;
}

.larger img {
  width: 800px;
  height: 800px;
  position: absolute;
  left: 0;
  top: 0;
}

.shadow {
  width: 200px;
  height: 200px;
  background-color: rgba(145, 200, 200, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: none;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff;
}
/* 收藏按键 */
#shoucangbg {
  width: 80px;
  height: 20px;
  background-image: url(http://www.dapu.com/themes/blue/images/favorite01.png);
  position: absolute;
  top: 530px;
  left: 250px;
}
.shareto {
  display: inline;
  padding-left: 115px;
  padding-top: 80px;
  background: url(http://www.dapu.com/themes/blue/images/bshare01.png) no-repeat;

  top: 430px;
  left: 200px;
}
.medium {
  width: 150px;
  height: 100px;
}
.boxright {
  text-align: left;
  padding-top: 10px;
  padding-left: 450px;
}
.goods-name {
  font-size: 16px;
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
  margin-top: 10px;
}
.product-id {
  font-size: 14px;
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
  margin-top: 10px;
}
.goods-price-box {
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
  margin-top: 10px;
}
.goodsprice {
  font-weight: bold;
  font-size: 24px;
  color: #7f5b42;
  margin-top: 10px;
}
.huiyuan {
  color: #ffffff;
  background: #7f5b42;
  font-weight: bold;
  margin-top: 10px;
}
.how {
  color: #ff0000;
  text-decoration: none;
}
#promotion_show {
  margin: 0px 0px 5px;
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
  margin-top: 10px;
}
.cuxiao {
  color: #ffffff;
  background: #b1544f;
  font-weight: bold;
  margin-top: 10px;
}
#promotion_msg {
  padding-left: 22px;
  color: #2c3e50;
  font-size: 12px;
}
.score-wrap {
  background: #f6f5f3;
  color: #6b6b6b;
  font-family: 微软雅黑;
  height: 60px;
  margin-top: 10px;
}
.score-wrap > ul {
  text-align: center;
  display: flex;
  line-height: 30px;
  width: 80%;
}
.score-wrap li {
  flex: 1;
}
.score-num {
  font-size: 18px;
  color: #b1544f;
}
.tagline {
  margin: 10px 0px;
  font-size: 14px;
  font-weight: 700;
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
}
.goods-spec {
  background: #f6f5f3;
  color: #6b6b6b;
  font-family: 微软雅黑;
  padding: 10px 8px;
}
.buttontitle {
  color: #333333;
  font-weight: bold;
}
.rightdiv1 {
  display: inline;
}
.rightdiv1 > a {
  padding-left: 10px;
}
.buyinfo {
  height: 35px;
  margin: 10px 0px;
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
}
.shopbutton {
  padding-top: 20px;
  border-top: 1px solid #6b6b6bda;
}
#buttonbox {
  margin-top: 30px;
  margin-right: 350px;
}
.otherbox {
  border: 1px solid rgba(145, 200, 200, 0.4);
  margin-left: 350px;
  min-height: 500px;
  padding: 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.tel {
  font: 16px/1.5 Arial, simsun;
  text-align: left;
  color: #6b6b6b;
}
.talk {
  margin: 5px;
  text-align: left;
}
.talktext {
  border: 1px solid #dedede;
  padding: 15px 15px;
  line-height: 15px;
  font: 12px/1.5;
  color: #6b6b6b;
}
.talkdate {
  text-align: right;
  font: 12px/1.5;
  color: #6b6b6b;
}
</style>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
section {
  margin-top: 30px;
  width: 90%;
  margin-left: 5%;
  height: 600px;
  border: 1px solid #dcdcdc;
  position: relative;
  overflow: hidden;
}
.boxleft {
  width: 400px;
  float: left;
}
.choose {
  width: 400px;
  height: 600px;
  float: left;
  margin: 10px 0 0 10px;
}

.content {
  width: 400px;
  height: 400px;
  position: relative;
}

.content img {
  width: 400px;
  height: 400px;
}
#listshow {
  width: 400px;
  height: 100px;
  margin-top: 20px;
}

#listshow li {
  width: 98px;
  height: 100px;
  float: left;
  border: 1px solid #666;
}

#listshow li img {
  width: 98px;
  height: 100px;
}

#listshow .selected {
  border-color: brown;
}

.larger {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 22px;
  left: 420px;
  float: left;
  overflow: hidden;
  display: none;
  z-index: 10;
}

.larger img {
  width: 800px;
  height: 800px;
  position: absolute;
  left: 0;
  top: 0;
}

.shadow {
  width: 200px;
  height: 200px;
  background-color: rgba(145, 200, 200, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: none;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff;
}
/* 收藏按键 */
#shoucangbg {
  width: 80px;
  height: 20px;
  background-image: url(http://www.dapu.com/themes/blue/images/favorite01.png);
  position: absolute;
  top: 530px;
  left: 250px;
}
.shareto {
  display: inline;
  padding-left: 115px;
  padding-top: 80px;
  background: url(http://www.dapu.com/themes/blue/images/bshare01.png) no-repeat;

  top: 430px;
  left: 200px;
}
.medium {
  width: 150px;
  height: 100px;
}
.boxright {
  text-align: left;
  padding-top: 10px;
  padding-left: 450px;
}
.goods-name {
  font-size: 16px;
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
  margin-top: 10px;
}
.product-id {
  font-size: 14px;
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
  margin-top: 10px;
}
.goods-price-box {
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
  margin-top: 10px;
}
.goodsprice {
  font-weight: bold;
  font-size: 24px;
  color: #7f5b42;
  margin-top: 10px;
}
.huiyuan {
  color: #ffffff;
  background: #7f5b42;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 10px;
}
.how {
  color: #ff0000;
  text-decoration: none;
}
#promotion_show {
  margin: 0px 0px 5px;
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
  margin-top: 10px;
}
.cuxiao {
  color: #ffffff;
  background: #b1544f;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 10px;
}
#promotion_msg {
  padding-left: 22px;
  color: #2c3e50;
  font-size: 12px;
}
.score-wrap {
  background: #f6f5f3;
  color: #6b6b6b;
  font-family: 微软雅黑;
  height: 60px;
  margin-top: 10px;
}
.score-wrap > ul {
  text-align: center;
  display: flex;
  line-height: 30px;
  width: 80%;
}
.score-wrap li {
  flex: 1;
}
.score-num {
  font-size: 18px;
  color: #b1544f;
}
.tagline {
  margin: 10px 0px;
  font-size: 14px;
  font-weight: 700;
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
}
.goods-spec {
  background: #f6f5f3;
  color: #6b6b6b;
  font-family: 微软雅黑;
  padding: 10px 8px;
}
.buttontitle {
  color: #333333;
  font-weight: bold;
}
.rightdiv1 {
  display: inline;
  margin-left: 20px;
}
.rightdiv1 > a {
  padding-left: 10px;
}
.buyinfo {
  height: 35px;
  margin: 10px 0px;
  color: #6b6b6b;
  font-family: 微软雅黑;
  background-color: #ffffff;
}
.shopbutton {
  padding-top: 20px;
  border-top: 1px solid #6b6b6bda;
}
#buttonbox {
  margin-top: 30px;
  margin-left: 80px;
}
.otherbox {
  border: 1px solid rgba(145, 200, 200, 0.4);
  margin-left: 50px;
  min-height: 500px;
  width: 100%;
  padding: 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.tel {
  font: 16px/1.5 Arial, simsun;
  text-align: left;
  color: #6b6b6b;
}
.talk {
  margin: 5px;
  text-align: left;
}
.talktext {
  border: 1px solid #dedede;
  padding: 15px 15px;
  line-height: 15px;
  font: 12px/1.5;
  color: #6b6b6b;
}
.talkdate {
  text-align: right;
  font: 12px/1.5;
  color: #6b6b6b;
}
.bottomcontent {
  display: flex;
  justify-content: flex-start;
  align-content: flex-end;
  text-align: left;
}
.btshop {
  width: 180px;
  margin-top: 70px;
  margin-left: 50px;
}
.btright {
  width: 80%;
}
</style>
