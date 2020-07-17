<template>
    <div>
      <div class="box">
        <div class="BdTop"><span>修改收货地址</span></div>
        <form action="" >
          <div class="sesion">
            <table>
              <tr>
                <td class="td1">默认收货地址：</td>
                <td class="td2">
                  <el-radio v-model="radio" label="1">否</el-radio>
                  <el-radio v-model="radio" label="2">是</el-radio>
                </td>


              </tr>
              <tbody>
              <tr>
                <td class="td1">姓名：</td>
                <td class="td2">
                  <input autocomplete="off" class="Input" name="name" type="text">
                </td>
              </tr>
              <tr>
                <td class="td1">电话：</td>
                <td class="td2">
                  <input autocomplete="off" class="Input" name="name" type="text">
                  <span class="infotips"> 其中联系电话和联系手机必须填写一项</span>
                </td>

              </tr>
              <tr>
                <td class="td1">手机：</td>
                <td class="td2">
                  <input autocomplete="off" class="Input" name="name" type="text">
                </td>
              </tr>
              <tr>
                <td class="td1">地区：</td>
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
                  <span>-</span>

                  <select>
                    <option value="_NULL_">请选择...</option>
                    <option value="3243">台北市</option>
                    <option value="3244">高雄市</option>
                    <option value="3245">高雄县</option>
                    <option value="3246">花莲县</option>
                    <option value="3247">基隆市</option>
                    <option value="3248">嘉义市</option>
                    <option value="3249">嘉义县</option>
                    <option value="3250">金门县</option>
                    <option value="3251">苗栗县</option>
                    <option value="3252">南投县</option>
                    <option value="3253">澎湖县</option>
                    <option value="3254">屏东县</option>
                    <option value="3255">台北县</option>
                    <option value="3256">台东县</option>
                    <option value="3257">台南市</option>
                    <option value="3258">台南县</option>
                    <option value="3259">台中市</option>
                    <option value="3260">台中县</option>
                    <option value="3261">桃园县</option>
                    <option value="3262">新竹市</option>
                    <option value="3263">新竹县</option>
                    <option value="3264">宜兰县</option>
                    <option value="3265">云林县</option>
                    <option value="3266">彰化县</option></select>

                  <span>-</span>
                  <select>
                    <option value="_NULL_">请选择...</option>
                    <option value="23">黄浦区</option>
                    <option value="24">卢湾区</option>
                    <option value="25">徐汇区</option>
                    <option value="26">长宁区</option>
                    <option value="27">静安区</option>
                    <option value="28">普陀区</option>
                    <option value="29">闸北区</option>
                    <option value="30">虹口区</option>
                    <option value="31">杨浦区</option>
                    <option value="32">闵行区</option>
                    <option value="33">宝山区</option>
                    <option value="34">嘉定区</option>
                    <option value="35">浦东新区</option>
                    <option value="36">金山区</option>
                    <option value="37">松江区</option>
                    <option value="38">青浦区</option>
                    <option value="39">南汇区</option>
                    <option value="40">奉贤区</option>
                    <option value="41">崇明县</option></select>
                </td>
              </tr>
              <tr>
                <td class="td1">地址：</td>
                <td class="td2"><textarea class="dizhi" type="textarea" name="addr" rows="2" cols="30"></textarea></td>
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
                <button class="quxiao">取消</button>
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
        name: "ChangeAdd",
      data () {
        return {
          radio: '1',
          neiRong:'1'

        };
      }
    }
</script>

<style scoped>
  *{
    font-size: 14px;
    color: #6b6b6b;
  }
  .box{
    width:770px;
    position: absolute;
    top: 60px;
    right: 7%;
  }
  .BdTop{
    width: 758px;
    height: 29px;
    padding-left: 10px;
    background: #EEE;
    border: 1px solid #DAD9D8;
    color: #6B6B6B;
    font-size: 14px;
    font-weight: 700;
    line-height: 29px;
    text-align: left;
  }

  table{
    cellspacing:0;
    cellpadding:0;
    width: 100%;
    text-align: center;
  }


  .td2{
    color: #0f0f0f;
    font-size: 14px;
    color: #615146;
    text-align:left
  }
  .sesion{
    width: 756px;
    height: 270px;
    border: none;
    margin: 0 auto;
    border-bottom: 1px dashed #ddd;
    background: #FCFBFB;
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
    color: #0f0f0f;
    text-align: right;
    width: 145px;
    height: 30px;
  }
  .Input{
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2) inset;
    width: 206px;
    height: 22px;
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
    color: #0f0f0f;
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
  .quxiao{
    position: relative;
    border-radius: 4px;
    width: 92px;
    height: 29px;
    border: solid 1px #c1c1c1;
    background-color: rgb(249,249,249);
    color: #615146;
    font-size: 12px;
    margin-left: 10px;
  }
</style>
