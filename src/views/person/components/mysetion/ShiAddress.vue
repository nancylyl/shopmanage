<template>
    <div>
      <div class="box">
        <div class="header">
          <h3>收货地址</h3>
        </div>
        <div class="chuangJian">
          <table>
            <tbody class="body1">
              <tr>
                <td id="add" class="td"><input type="button" class="Inputbut pointer" value="创建新地址"></td>
                <td class="td2">
                  物流配送网络覆盖全国，异地购物，全国配送，方便快捷，送装及时。<br></td>
              </tr>
            </tbody>
          </table>
        </div>

          <form action="">
            <div class="sesion">
              <table>
                <tbody>
                <tr>
                  <td class="td1">收货人姓名：</td>
                  <td class="td2">
                    <input autocomplete="off" class="Input" name="name" type="text">
                  </td>
                </tr>
                <tr>
                  <td class="td1">省份：</td>
                  <td class="td2">
                    <select class="xiala">
                      <option>请选择...</option>
                      <option value="1">北京</option>
                      <option value="21">上海</option>
                      <option value="42">天津</option>
                      <option value="62">重庆</option>
                      <option value="104">安徽</option>
                      <option value="227">福建</option>
                      <option value="322">甘肃</option>
                      <option value="423">广东</option>
                      <option value="566">广西</option>
                      <option value="690">贵州</option>
                      <option value="788">海南</option>
                      <option value="814">河北</option>
                      <option value="998">河南</option>
                      <option value="1176">黑龙江</option>
                      <option value="1320">湖北</option>
                      <option value="1436">湖南</option>
                      <option value="1573">吉林</option>
                      <option value="1643">江苏</option>
                      <option value="1763">江西</option>
                      <option value="1874">辽宁</option>
                      <option value="1989">内蒙古</option>
                      <option value="2103">宁夏</option>
                      <option value="2130">青海</option>
                      <option value="2182">山东</option>
                      <option value="2340">山西</option>
                      <option value="2471">陕西</option>
                      <option value="2589">四川</option>
                      <option value="2792">西藏</option>
                      <option value="2873">新疆</option>
                      <option value="2987">云南</option>
                      <option value="3133">浙江</option>
                      <option value="3235">香港</option>
                      <option value="3239">澳门</option>
                      <option value="3242">台湾</option></select>
                  </td>
                </tr>
                <tr>
                  <td class="td1">地址：</td>
                  <td class="td2"><textarea class="dizhi" type="textarea" name="addr" rows="2" cols="30"></textarea></td>
                </tr>
                <tr>
                  <td class="td1">手机号码：</td>
                  <td class="td2">
                    <input autocomplete="off" class="Input" name="name" type="text">
                  </td>
                </tr>
                <tr>
                  <td class="td1">固定电话：</td>
                  <td class="td2">
                    <input autocomplete="off" class="Input" name="name" type="text">
                  </td>
                </tr>
                <tr>
                  <td class="td1">邮政编码：</td>
                  <td class="td2">
                    <input autocomplete="off" class="Input" name="name" type="text">
                  </td>
                </tr>
                <td class="td1"></td>
                <td class="td2">
                  <button class="queDing">确定</button>
                </td>
                <tr>
                </tr>
                </tbody>
              </table>
            </div>
          </form>

      </div>
    </div>
</template>

<script>
    export default {
        name: "ShiAddress"
    }
</script>

<style scoped>
.box{
  background-color: rgb(239,239,239);
  width:970px;
  position: absolute;
  top: 60px;
  right: 7%;
}
.header{
  border-radius: 2px;
  width: 950px;
  height: 50px;
  position: relative;
  top: -15px;
  padding-left: 20px;
  background-color: rgb(222,222,222);
}
h3{
  position: relative;
  top: 15px;
  font-size: 16px;
  color: #6b6b6b;
  text-align: left;
}
  .chuangJian{
    top: -15px;
    text-align: left;
    padding: 10px 10px;
    line-height: 24px;
    position: relative;
    padding-bottom: 20px;
  }
 table{
   cellspacing:0;
   cellpadding:0;
   width: 100%;
   text-align: center;
 }
  .body1{
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .td{
    width:20%;
    text-align:center;
    height: 20px;
    vertical-align: middle;
    border: none;
    padding: 3px;
  }
  .Inputbut{
    position: relative;
    border-radius: 4px;
    width: 92px;
    height: 29px;
    border: solid 1px #c1c1c1;
    background-color: rgb(249,249,249);
    color: #615146;
    font-size: 12px;

  }
  .td2{
    font-size: 14px;
    color: #615146;
    text-align:left
  }
  .sesion{
    width: 936px;
    height: 250px;
    border: none;
    margin: 0 auto;
    border-bottom: 1px dashed #ddd;
    background: #fff;
    padding: 7px;
    margin-bottom: 7px;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
td {
  height: 30px;
  line-height: 22px;
}
  *{
    font-size: 14px;
    color: #6b6b6b;
  }
  .td1{
    text-align: right;
    width: 145px;
    height: 30px;
  }
  .Input{
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2) inset;
    width: 206px;
    height: 20px;
    border: 1px solid #ccc;
    padding: 3px 5px;
  }
option {
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
select {
  border-radius: 3px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: menulist;
  box-sizing: border-box;
  align-items: center;
  white-space: pre;
  -webkit-rtl-ordering: logical;
  cursor: default;
  margin: 0em;
  border-radius: 0px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
}
  .dizhi{
    text-align: left;
    width: 229px;
    height: 32px;
  }
  .queDing{
    position: relative;
    border-radius: 4px;
    width: 92px;
    height: 29px;
    border: solid 1px #c1c1c1;
    background-color: rgb(249,249,249);
    color: #615146;
    font-size: 12px;
  }

</style>
