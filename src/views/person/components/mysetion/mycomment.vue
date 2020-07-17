<template>
    <div>
      <div class="box">
        <div class="header">
          <h3 class="myPL">我的评论</h3>
          <p class="Num">已评论数: 0</p>
          <p class="Num">未评论数: 0</p>
        </div>
        <h3 class="NoComment">未评论列表</h3>
        <div class="No">暂无需要评论的商品</div>
        <h3 class="NoComment">已评论列表</h3>
        <div class="No">您还没有评论过</div>
<!--        <div class="YesNoComment">以评论列表</div>-->
        <div class="shuoMin"><p class="fB">评论说明:</p>
          <p class="one">1、只能对在半年内购买的商品进行评价；</p>
          <p class="one">2、同一订单的相同商品，只有一次评价获得积分；</p>
          <p class="one">3、根据评论的质量和对广大网友的参考价值，赠送积分会有所不同；</p>
          <p class="one">4、欢迎您发表有价值的评论，拷贝他人内容、内容重复、过多标点符号等情况不赠送积分。</p>
        </div>
      </div>

    </div>
</template>

<script>
  // pro_name-- 产品
  // pro_title,--产品标题
  // Price --价格
  // pro_url --路径
  import {getComment,} from '../../../../network/person'
    export default {
      name: "mycomment",
        data() {
         return{
           mycomment:[]
         }
        },

      beforeCreate(){
        getComment()
          .then(res=>{
            this.mycomment =res.data.data;
            console.log( this.mycomment);

          })
          .catch(e => {
            console.log(e)
          })
      }




    }
</script>

<style scoped>
  .box{
    width: 970px;
    height: 660px;
    position: absolute;
    top: 60px;
    right: 7%;
  }
  .header{
    text-align: left;
    width: 920px;
    height: 150px;
    position: relative;
    background-color: #efefef;
    margin-bottom: 20px;
    padding-left: 50px;
    padding-top: 20px;
  }
  .myPL{
    color: #6b6b6b;
    font-size: 18px;
    padding-bottom: 20px;
  }
  .Num{
    width: 170px;
    margin-top: 15px;
    height: 10px;
    font-size: 14px;
    color: #6b6b6b;
  }
  .NoComment{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #efefef;
    font-size: 14px;
  }
  .No{
    margin-top: -15px;
    font-size: 12px;
    color: #6b6b6b;
    width: 910px;
    height: 18px;
    border: 1px solid #efefef;
    margin-bottom: 15px;
    padding: 30px 30px;
  }
  .shuoMin{

    background-color: rgb(239,239,239);
    text-align: left;
    padding: 10px 10px;
    line-height: 24px;
    position: relative;
  }
  .one{
    margin-top: -10px;
    font-size: 12px;
    color: #6b6b6b;
  }
  .fB{
    font-weight: bold;
    font-size: 12px;
    margin-top: -5px;
    margin-bottom: 10px;
  }

</style>
