<template>
  <div>
    <div id="mylogin">
<!--      <router-link to="/denglu">-->
        <a href="" @click="roleLink">{{myLogin}}</a>
<!--      </router-link>-->
      <span>|</span>
<!--      <router-link to="/zhuce">-->
        <a href="" class="zhuce" @click="quitUser">{{myRegis}}</a>
<!--      </router-link>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "loginButton",
    data(){
      return {
        myLogin:'登录',
        myRegis:'注册'
      }
    },
    methods:{
      /*判断是去注册还是退出*/
      quitUser(){
        if(this.myRegis=='退出'){
          sessionStorage.clear();
          this.$router.push({
            path: `/home`,
          });
        }else if(this.myRegis=='注册'){
          this.$router.push({
            path:`/zhuce`,
          })
        }
      },


      roleLink(){
        if(this.myLogin!='登录'){
          this.$router.push({
            path:`/PerCenter`
          })
        }else {
          this.$router.push({
            path:`/denglu`
          })
        }
      }

    },
    created() {

      /*把用户名存到sessionStorage里面*/
      setInterval(()=>{
        // console.log(typeof sessionStorage.myUser);
        if(sessionStorage.myUser=='' || sessionStorage.myUser==undefined){
          this.myLogin='登录';
        }else {
          this.myLogin=sessionStorage.myUser;
          this.myRegis=sessionStorage.myQuit;
        }
      },100)
    },
    computed:{

    }
  }
</script>

<style scoped>
  #mylogin {
    width: 100px;
    height: 40px;
    background-color: rgb(177,84,79);
    line-height: 40px;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 12px;
  }
  span {
    color: white;
    margin-left: 5px;
  }
  .zhuce {
    margin-left: 5px;
  }
  a:hover {
    color: rgb(127,91,66);
  }
</style>
