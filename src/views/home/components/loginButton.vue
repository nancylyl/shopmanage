<template>
  <div>
    <div id="mylogin">
      <!--      <router-link to="/denglu">-->
      <a href @click="roleLink">{{myLogin}}</a>
      <!--      </router-link>-->
      <span>|</span>
      <!--      <router-link to="/zhuce">-->
      <a href class="zhuce" @click="quitUser" id='myReg'>{{myRegis}}</a>
      <!--      </router-link>-->
    </div>
  </div>
</template>

<script>
import { getUserInfo, isLogin, overUserInfo } from '../../../toolkit'
import { exitLogin } from '@/network/login'
import { getMyUserInfo } from '@/network/home'
export default {
  name: 'loginButton',
  data() {
    return {
      myLogin: '登录',
      myRegis: '注册'
    }
  },
  computed: {},
  methods: {
    /*判断是去注册还是退出*/
    quitUser() {
      if (this.myRegis == '退出') {
        exitLogin().then(res => {
          console.log(res)
          if (res.data.success) {
            console.log('退出')
            overUserInfo([])
            // this.$router.push({
            //   path: `/home`
            // })
          }
        })
      } else if (this.myRegis == '注册') {
        this.$router.push({
          path: `/zhuce`
        })
      }
    },

    roleLink() {
      if (this.myLogin != '登录') {
        this.$router.push({
          path: `/PerCenter/myorder`
        })
      } else {
        this.$router.push({
          path: `/denglu`
        })
      }
    },

    
  },
  created() {
    getMyUserInfo().then(res => {
      let data = res.data.data[0]
      overUserInfo(data)
      if (isLogin()) {
        this.myLogin = getUserInfo().Account
        this.myRegis = '退出'
      } else {
        this.myLogin = '登录'
        this.myRegis = '注册'
      }


      setInterval(() => {
        if(this.myLogin.length>=8){
          document.getElementById('mylogin').style.width='140px';
        }
      }, 200);
    })
  }
}
</script>

<style scoped>
#mylogin {
  width: 100px;
  height: 40px;
  background-color: rgb(177, 84, 79);
  line-height: 40px;
  /* font: 12px/1.5 Arial,simsun; */
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
  color: rgba(255, 255, 255, 0.5);
}
#myReg{
  width: 40px;
}
</style>
