<template>
    <div>
      <template>
        <el-button type="text" @click="open">点击收藏</el-button>
      </template>
      <div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "myCollect",
        methods:{
          open() {
            this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
              dangerouslyUseHTMLString: true
            });
          }
        }
    }
</script>

<style >
  .el-message-box{
    width: 600px;
    height: 400px;
    background-color: rgb(243,236,230);
  }
  .el-button--small {
    display: none;
  }
  .el-message-box__content {
    display: none;
  }
  .el-message-box__title {
    display: none;
  }
</style>
