<template>
  <div>
    <div class="box1" v-if="xiuGai.length>0">
      <div class="header1">
        <span>修改手机号</span>
      </div>
      <div class="sesion">
        <form action="/updataPhoe.do" method="post">
          <table class="biao">
            <tbody>
            <tr>
              <td class="TD1">原有手机号码：</td>
              <td class="TD2">{{greet( xiuGai[0].Phone)}}</td>
            </tr>
            <tr>
              <td class="TD1">修改号码：</td>
              <td class="TD2"><input type="password" v-model="Phone"></input></td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div class="footer1">
        <div class="BT">
          <button class="queDing" @click="xiuGaiPhone" type="button">确定</button>
          <button class="quXiao" @click="quxiao">取消</button>>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getUserInfo, updataPhoe} from '../../../../network/person'
  export default {
    name: "xiuGai",
    data(){
      return{
        xiuGai:[],
        Phone:""
      }
    },
    methods:{
      quxiao(){
        this.$router.go(-1)
      },
      xiuGaiPhone(){
        let Phone=this.Phone;
        console.log(Phone)
        let UId=window.pageConfig.userInfo.UId
        let data={Phone,UId}

        updataPhoe(data)
          .then(res=>{
            console.log(res.data.message)
          })
          .catch(e=>{
            console.log(e)
          })
        this.$router.go(-1)
      },
      greet:function(a){
        return a.replace(a.substring(3, a.length - 3), '****')
      },

    },
    beforeCreate(){
      getUserInfo()
        .then(res=>{
          this.xiuGai =res.data.data;
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
</script>

<style scoped>
  .box1{
    z-index: 100;
    border: solid 1px #efefef;
    position: absolute;
    height: 240px;
    width: 388px;
    top: 139.5px;
    left: 180px;
    display: block;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    border-radius: 3px;
    background-color: rgb(249,249,249);
  }
  .header1{
    border-radius: 2px;
    width: 364px;
    height: 24px;
    padding: 5px 13px;
    background-color: rgb(98,81,71);
    box-shadow: 1px 1px 6px black ;
  }
  .header1 span{
    font-weight: bold;
    text-align: left;
    line-height: 20px;
    font-size: 13px;
    color: #EEEEEE;
    float: left;
    margin: .1em 0;
    white-space: nowrap;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sesion{
    width: 360px;
    padding: 7.5px 15px;
    height: 115px;
  }
  .biao{
    width: 100%;
  }
  .TD1{
    text-align: right;
    line-height: 40px;
    width: 120px;
    height: 40px;
    font-size: 13px;

  }
  .TD2{
    width: 290px;
    height: 40px;
    font-size: 13px;
    text-align: left;
  }
  .TD2 input{
    /*box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);*/
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2) inset;
    width: 102px;
    height: 20px;
    border: 1px solid #ccc;
    padding: 3px 5px;
  }
  .footer1{
    border-top: 1px solid #ccc;;
    position: absolute;
    top: 75%;
    width: 370px;
    height: 41px;
    padding: 4px 13px 6px 5px;
  }
  .BT{
    float: right;
    width: 200px;
    height: 40px;
  }
  .queDing{
    margin-top: 10px;
    margin-left: 80px;
    color: #e3e3e3;
    font-size: 13px;
    width: 52px;
    border: 0;
    height: 27px;
    border-radius: 3px;
    background-color: rgb(133,119,111);
  }
  .quXiao{
    margin-top: 10px;
    margin-left: 5px;
    color: #e3e3e3;
    font-size: 13px;
    width: 52px;
    border: 0;
    height: 27px;
    border-radius: 3px;
    background-color: rgb(133,119,111);
  }

</style>
