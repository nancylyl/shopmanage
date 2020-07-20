<template>
    <div>
      <div class="box">
        <div class="header">
          <h3>我的消息</h3>
          <p>这里会发布一些通知，包括优惠券，积分等变动提醒等。如果有是什么宝贵意见也可以在这里提交给我们。</p>
        </div>
        <div class="setion" >
          <div class="xiaoXi" v-for="item in myNewMessage" :key="item.Message_Id" style="margin-top:20px">
            <p class="p1">{{item.Message_Type}}</p>
             <p class="p2">{{item.Message_Text}}</p>
            <i @click="delmessage(item.Message_Id)">删除</i>
             <p style="text-align: center;">{{item.Message_Time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</p>
          </div>
         
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getMymessage } from "@/network/person";

    export default {
        name: "MyMessage",
        data(){
          return{
            myNewMessage:[],
          };
        },
         created(){
          // this.getMymessage();
           getMymessage().then(res => {
            console.log(res.data);
            this.myNewMessage = res.data.data;
            console.log(this.myNewMessage);

            for(let i=0;i<this.myNewMessage.length;i++){   
            if(this.myNewMessage[i].Message_Type==0){
             this.myNewMessage[i].Message_Type="活动通知"
            }
           else if(this.myNewMessage[i].Message_Type==1){
             this.myNewMessage[i].Message_Type="优惠券变动通知"
            }
            else if(this.myNewMessage[i].Message_Type==2){
            this.myNewMessage[i].Message_Type="积分变动通知"
            }            
              console.log(this.myNewMessage[i].Message_Type)
            }           
           });     
        },
        methods:{
          delmessage(Message_Id){
            this.myNewMessage.map((item,index)=>{
              if(item.Message_Id==Message_Id){
                this.myNewMessage.splice(index,1);
              }
            })
            console.log(Message_Id)
          },
          mytype2(){
             console.log(this.myNewMessage)
            this.myNewMessage.map((item,index)=>{
              if(item.Message_Type==0){
              return this.mytype="活动通知"
            }
            if(item.Message_Type==1){
              return this.mytype="优惠券通知"
            }
            if(item.Message_Type==2){
              return this.mytype="积分通知"
            }
            })
            console.log(this.mytype)
          }
        },
       
         computed:{
            ...mapGetters(['mymessage'])   

        }
    }

</script>

<style scoped>
  *{
    font-size: 14px;
    color: #6B6B6B;
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
  p{

    text-align: left;
  }
  .setion{
    position: relative;
    background-color: #efefef;
    margin-bottom: 20px;
    padding: 30px 50px;
  }
  .xiaoXi{
    background: #fff;
    padding: 10px 20px;
    position: relative;
  }
  .p2{
    padding-right: 50px;
  }
  i{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -25px;
    border: 1px solid #da5278;
    color: #da5278;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }
</style>
