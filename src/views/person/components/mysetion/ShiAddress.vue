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
                <td id="add" class="td"><input type="button" @click="chuangjian"  class="Inputbut pointer" value="创建新地址"></td>
                <td class="td2">
                  物流配送网络覆盖全国，异地购物，全国配送，方便快捷，送装及时。<br></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="content">暂无收货地址</div>

          <form action="/addMyAddress.do" v-if="cj" method="post">
            <div class="sesion">
              <table>
                <tbody>
                <tr>
                  <td class="td1">收货人姓名：</td>
                  <td class="td2">
                    <input v-model="S_Name" class="Input" name="name" type="text">
                  </td>
                </tr>

               <tr>
                <td class="td1">省份：</td>
                <td class="td2">
                  <div class="city-box">
                    <div style="overflow: hidden">
                      <div class="select-l g-f-l">
                        <select v-model="selected" v-if="provinceL" class="select-box t-city" @change="show" >
                          <option value="" label="">请选择省</option>
                          <option v-for="(item,index) in provinceL" :value="item">{{ item.name }}</option>
                        </select>
                      </div>
                      <div class="select-l g-f-l g-ml-5">
                        <select v-model="citySelected" v-if="cityL" class="select-box t-city" v-show="se1" @change="show2" >
                          <option value="">请选择市</option>
                          <option v-for="(item,index) in cityL" :value="item">{{ item.name }}</option>
                        </select>
                      </div>
                      <div class="select-l g-f-l g-ml-5">
                        <select v-model="areaSelected" v-if="areaL" class="select-box t-city" v-show="se2">
                          <option value="">请选择区县</option>
                          <option v-for="(item,index) in areaL" :value="item">{{ item.name }}</option>
                        </select>
                      </div>
                      <div v-show="notice.province">请选择{{ provinceMsg }}</div>
                    </div>
                    <!--                   <a href="javascript:;" @click="submitCity()">提交</a>-->
                  </div>
                </td>
               </tr>
                <tr>
                  <td class="td1">地址：</td>
                  <td class="td2"><textarea class="dizhi" type="textarea" v-model="Address"  rows="2" cols="30"></textarea></td>
                </tr>
                <tr>
                  <td class="td1">手机号码：</td>
                  <td class="td2">
                    <input autocomplete="off" class="Input" v-model="Phone"  type="text">
                  </td>
                </tr>
                <tr>
                  <td class="td1">固定电话：</td>
                  <td class="td2">
                    <input autocomplete="off" class="Input" v-model="Tel"  type="text">
                  </td>
                </tr>
                <tr>
                  <td class="td1">邮政编码：</td>
                  <td class="td2">
                    <input autocomplete="off" class="Input"  v-model="Mail" type="text">
                  </td>
                </tr>
                <td class="td1"></td>
                <td class="td2">
                  <button class="queDing" @click="chuangjianQD" type="button">确定</button>
                </td>
                <tr>
                </tr>
                </tbody>
              </table>
            </div>
          </form>
        <div class="SHXX2" v-for="(item,index) in huoQu" v-if="huoQu.length>0">
          <table class="TableBoderNone">
            <tbody><tr>
              <td class="td1">收货人姓名：</td>
              <td colspan="4" class="td2">{{huoQu[index].S_Name}}</td>
            </tr>
            <tr>
              <td align="right">手机号码：</td>
              <td colspan="4" align="left">{{huoQu[index].Phone}}</td>
            </tr>
            <tr>
              <td align="right">固定电话：</td>
              <td colspan="4" align="left">{{huoQu[index].Tel}}</td>
            </tr>
            <tr>
              <td align="right">邮政编码：</td>
              <td colspan="4" align="left">{{huoQu[index].Mail}}</td>
            </tr>
            <tr>
              <td height="64" align="right" valign="top">地区：</td>
              <td colspan="4" align="left">{{huoQu[index].Province}}-{{huoQu[index].City}}-{{huoQu[index].Axis}}</td>
            </tr>
            <tr>
              <td height="64" align="right" valign="top">地址：</td>
              <td colspan="4" align="left">{{huoQu[index].Address}}</td>
            </tr>
            <tr class="Bg" style="background:#dedede;">
              <td colspan="3" align="left"><a href="#" rel="_request"><input type="radio" name="radiobutton" value="radiobutton" class="Radio" checked="checked"></a>
                默认</td>
              <td align="left"><router-link to="/PerCenter/ChangeAdd" href="/#" class="cYellow">修改</router-link></td>
              <td align="left"><a href="/delMyAddress.do?id={{huoQu[index].Id}}" class="cYellow">删除</a></td>
            </tr>
            </tbody></table></div>

      </div>
    </div>


</template>

<script>

  import { province, city, area } from '../../../../network/vue-area.js'
  import {addMyAddress, getMyAddress,} from '../../../../network/person'
    export default {
        name: "ShiAddress",
      data(){
        return {
          cj:false,
          se1:false,
          se2:false,
          counter:[],
          huoQu:[],
          selected: '',
          citySelected: '',
          areaSelected: '',
          S_Name:"",
          Address:"",
          Mail:"",
          Phone:"",
          Tel:"",
          Is_True:"",
          provinceL: [],
          cityL: [],
          areaL: [],
          selectedData: '',
          citySelectedData: '',
          areaSelectedData: '',
          provinceMsg:'',
          notice: {
            province: false
          }
        }
      },
      created() {

      },

      mounted() {
        this.provinceL = [...province] /*取出省市数据*/
        // this.cityList = [...city]
      },
      watch: {
        selected: function () {
          // 清除区县
          this.citySelected = {}
          this.cityL = city.filter((item) => item.parentId == this.selected.code)
          for (const i in this.cityL) {
            if (this.cityL[i].code == this.citySelectedData && this.cityL[i].parentId == this.selected.code) {
              this.citySelected = this.cityL[i]
            }
          }
        },
        citySelected: function () {
          this.areaSelected = {}
          if (this.citySelected){
            this.areaL = area.filter((item) => item.parentId === this.citySelected.code)
          }
          for (const i in this.areaL) {
            if (this.areaL[i].code == this.areaSelectedData && this.areaL[i].parentId == this.citySelected.code) {
              this.areaSelected = this.areaL[i]
            }
          }
        }
      },
      methods:{

          show(){
            this.se1=true
          },
        show2(){
          this.se2=true
        },
        chuangjian(){
          // this.document.getElementById(cj).style.display="block"
          this.cj=true;
        },

        chuangjianQD(){
          this.cj=false;
          this.counter.push({});
          let S_Name=this.S_Name; // S_Name,  --收货人
          let Province=this.selected.name; // Province, --省份
          console.log(typeof Province);
          let City=this.citySelected.name;  // City, --城市
          let Area=this.areaSelected.name;// AREA, --区域
          let Address=this.Address; // Address, --地址
          let Mail=this.Mail;// Mail, --邮编
          let Phone=this.Phone;// Phone,--电话
          let Tel=this.Tel; // Tel, --手机
          let Is_True=0;// Is_True--是否是默认地址
          let UId=3;

          let data={S_Name,Province,City,Area,Address,Mail,Phone,Tel,Is_True,UId};
          console.log(data);
          addMyAddress(data)
            .then(res=>{
              console.log(res.data.message)
            })
            .catch(e=>{
              console.log(e)
            })

        },
        /*从后台获取用户提交的省市区信息*/
        getCity(addr) {
          this.citySelectedData = addr.City
          this.areaSelectedData = addr.County
          for (const i in this.provinceL) {
            if (Number(addr.Province) == this.provinceL[i].code) {
              this.selectedData = this.provinceL[i].name
              this.selected = this.provinceL[i]
            }
          }
        }, submitCity() {
          /*市默认显示第一个时*/
          /*if (this.province == ''){
            alert("请选择地址")
            return
          }*/
          /*没有默认选择时*/
          if (this.selected == '') {
            this.notice.province = true
            this.provinceMsg = '省'
            return
          }else {
            this.notice.province = false
          }
          if (this.citySelected == undefined) {
            this.notice.province = true
            this.provinceMsg = '市'
            return
          }else {
            this.notice.province = false
          }
          if (this.areaSelected == undefined) {
            this.notice.province = true
            this.provinceMsg = '区县'
            return
          }else {
            this.notice.province = false
          }
          console.log('提交成功')
        }

      },
      beforeCreate(){
        getMyAddress()
          .then(res=>{
           this.huoQu =res.data.data;
            console.log(this.huoQu);
          })
          .catch(e => {
            console.log(e)
          })
      }

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
  .content{
    font-size: 12px;
    text-align: left;
    padding: 10px 10px;
    line-height: 24px;
    position: relative;
    padding-bottom: 20px;
  }
  .SHXX{
    text-align: left;
    padding: 10px 10px;
    line-height: 24px;
    position: relative;
    padding-bottom: 20px;
  }
  .SHXX2{
    float: left;
    width: 90%;
    margin: 10px 0;
    padding: 5px;
    border-radius: 8px 8px 8px 8px;
    border: 1px solid #dedede;
  }
.td1{
  width:22%;
  text-align:right
}
  .td2{
    text-align:left
  }
.g-f-l{
  float: left;
}
.g-ml-5 {
  margin-left: 5px;
}
.city-box{
  width: 400px;

}
.select-box{
  width: 100px;
  height: 22px;
}
</style>
