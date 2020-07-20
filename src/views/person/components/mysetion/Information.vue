<template>
  <div>
    <div class="box">
      <div class="box-head">
        <h3 class="title">发票信息（这里可以配置默认的发票信息）</h3>
        <div>
          <h3 class="title2">发票抬头:</h3>
          <div class="taiTou">
            <el-radio v-model="radio" label="1">个人</el-radio>
            <el-radio v-model="radio" label="2">单位</el-radio>
          </div>
        </div>
        <h3 class="title2">发票内容:</h3>
        <div class="taiTou">
          <el-radio v-model="neiRong" label="1"
            >商品明细（附购物清单）</el-radio
          >
        </div>
        <div class="taiTou">
          <el-radio v-model="neiRong" label="2">办公礼品</el-radio>
        </div>
        <div class="taiTou">
          <el-radio v-model="neiRong" label="3">礼品</el-radio>
        </div>
        <div class="footer">
          <button class="baoCun">保存修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
      radio: "1",
      neiRong: "1"
    };
  }
};
</script>

<style scoped>
* {
  color: #6b6b6b;
}
.box {
  background-color: rgb(239, 239, 239);
  width: 970px;
  /* position: absolute; */
  top: 60px;
  right: 7%;
}
.box-head {
  width: 870px;

  position: relative;
  background-color: #efefef;
  margin-bottom: 20px;
  padding: 20px 50px;
}
.title {
  text-align: left;
  color: #6b6b6b;
  font-size: 18px;
  padding-bottom: 10px;
}
.title2 {
  text-align: left;
  color: #6b6b6b;
  font-size: 14px;
}
.taiTou {
  padding-left: 50px;
  text-align: left;
  height: 30px;
}
label {
  margin-left: 5px;
  font-size: 14px;
  line-height: 30px;
}
.left5 {
  margin-left: 5px;
}
.footer {
  height: 40px;
  border-top: 1px solid #808080;
  margin-top: 30px;
  padding-top: 30px;
  text-align: center;
}
.baoCun {
  height: 40px;
  display: inline-block;
  width: 120px;
  line-height: 28px;
  border: 1px solid #da5278;
  color: #da5278;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
}
.baoCun:hover {
  color: whitesmoke;
  background-color: #da5278;
  transition: all 0.3s;
}
</style>
