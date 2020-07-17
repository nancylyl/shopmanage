<template>
    <div>
      <div class="box">
        <div class="header">
          <h3>我的收藏</h3>
          <table id="" class="title">
            <tbody>
            <tr>
              <th class="th1">商品图片</th>
              <th class="th2">商品名称</th>
              <th class="th1">价格</th>
              <th class="th3">操作</th>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MyCollection"
    }
</script>

<style scoped>
  *{
    font-size: 14px;
    color:#6B6B6B;
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
  th{
    font-style: normal;
    font-weight: 500;
  }

  .th1{
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    text-align: left;
    width: 15%;
  }
  .th2{
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    width: 45%;
    text-align: center;
  }
  .th3{
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    text-align: left;
    width: 25%;
  }
  .title{
    border-bottom: 1px solid #888;
    width: 870px;
    height: 50px;
  }
</style>
