<template>
  <div id="mylogin">
    <!--      <h1>这是登录页面</h1>-->
    <!--      <router-view>-->
    <div id="loginBox">
      <h3>用户登录</h3>
      <form action="/login.do" method="post">
        <div id="username">
          <label for="">用户名:</label><input type="text"  v-model="Account">
        </div>

        <div id="pwd">
          <label for="">密码:</label><input type="password"  v-model="PassWord">
        </div>

        <div id="thelogin">


<!--          <router-link  >-->
            <button  type="button" @click="login" >登录</button>
<!--          </router-link>-->


          <router-link to="/forgetPwd"><a href="" class="forgetPwd">忘记密码</a></router-link>
        </div>
      </form>

      <div class="myShouji">
        <a href="" class="shouji">手机校验登录</a>
        <span>|</span>
        <router-link to="/zhuce"><a href="">免费注册</a></router-link>

      </div>
    </div>
    <!--      </router-view>-->

  </div>
</template>

<script>
  import  {login} from '@/network/login';

  export default {
    name: "denglu",
data(){
  return {
    Account:'',
    PassWord:'',
    tiao:''
  }
},
    created() {

    },
    methods:{
     login()
     {
       let Account=this.Account;
       console.log(typeof Account);
       let PassWord=this.PassWord
       let data={Account,PassWord }
       console.log(data);
       if(Account=='' || PassWord==''){
         console.log(111)
         this.$router.push({
           path: `/denglu`
         });
       }else if(Account!='' && PassWord!=''){
         login(data)
           .then(res =>{
             console.log(res);
             console.log(res.data.message);
             if(res.data.success){
               sessionStorage.myUser=this.Account;
               sessionStorage.myQuit='退出';
               this.$router.push({
                 path: `/home`,
               });
             }else {

             }
           })
           .catch(e =>{
             console.log(e);
           })
       }


     }

    }
  }
</script>

<style scoped>
  #mylogin {
    width: 1000px;
    height: 410px;
    background: url("../../../assets/images/home/dapu_login.jpg");
    margin: 0 auto;
    position: relative;
  }
  #loginBox {
    width: 520px;
    height: 390px;
    background-color: rgba(246, 248, 249, 0.81);
    position: absolute;
    top: 10px;
    margin-left: 470px;
  }
  h3 {
    border-bottom: 1px solid #877b74;
    color: #877b74;
    font-family: "微软雅黑";
    font-size: 24.5px;
    padding-bottom: 10px;
    width: 500px;
    margin: 20px auto;
  }
  #mylogin input {
    width: 160px;
    /*display: inline;*/
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    border-radius: 4px;
    height: 30px;
  }
  label {
    width: 160px;
    display: inline-block;
    text-align: right;
    padding-right: 40px;
    margin-left: -137px;
  }
  #username {
    margin-top: 40px;
  }
  #pwd {
    margin-top: 20px;
  }
  #thelogin {
    margin-top: 15px;
  }
  #thelogin button {
    width: 54px;
    height: 30px;
    cursor: pointer;
    background-color: #49afcd;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    border: none;
    color: white;
    border-radius: 3px;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    margin-left: 30px;
  }
  .forgetPwd {
    color: #49afcd;
    margin-left: 5px;
  }
  .shouji {
    margin-left: 57px;
  }
  .myShouji span {
    margin-left: 5px;
    margin-right: 5px;
  }
  #mylogin a {
    color: #49afcd;
    font-size: 14px;
  }
  #mylogin a:hover {
    text-decoration: underline;
  }
</style>
