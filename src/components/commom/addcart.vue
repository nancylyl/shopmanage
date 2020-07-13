<template>
    <div id="addcart" v-show="isshow">
        <div class="addcart-body">
            <div class="addcart-header">
                <span>
                    <button type="button" title="关闭" @click="handle">X</button>
                </span>
                 <h2>{{msg}}</h2>
            </div>
            <div class="addcart-content">
                <div v-show="visible">loading...</div>
                <div v-show="isshow">
                    <p class="p10">目前选购商品共
                        <span>1</span> 种
                        <span>1</span> 件  
                        合计：<span>¥100</span>
                    </p>
                    <div class="btnBar">
                        <button class="cart_btn btn-default">继续购物</button>
                        <button class="cart_btn btn-danger">去结算</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
   export default {
        name: "addcart",
        data(){
            return {
               msg:"成功加入购物车",
               visible:false,
               isshow:true
            }
        },
        methods:{
            handle(){
                this.isshow=false;
            }
        },
        created(){
            this.$axios.interceptors.request.use( (config)=> {
            // 在发送请求之前做些什么
            this.visible=true;
            this.isshow=false;
            this.msg="正在加入购物车";
            return config;
            }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
            });
            this.$axios.interceptors.response.use( (response)=> {
            // 对响应数据做点什么
            console.log("响应拦截");
            this.visible=true;
            this.isshow=false;
            this.msg="成功加入购物车";
            return response;
            }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
            });
        },
   }
</script>
<style lang="scss" scoped>
@import "~assets/css/pop_up/addcart.scss";
</style>
