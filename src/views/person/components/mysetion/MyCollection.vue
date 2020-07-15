<template>
    <div>
      <div class="box">
        <div class="header">
          <h3>我的收藏</h3>
          <table id="" class="mem-table">
            <tbody><tr class="mem-thead">
              <th width="15%">商品图片</th>
              <th width="45%" align="center">商品名称</th>
              <th width="15%">价格</th>
              <th width="25%">操作</th>
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
    text-align: left;
  }
</style>
