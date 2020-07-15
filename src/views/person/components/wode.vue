<template>
    <div>
      <div class="mycenter">
        <router-link to="/PerCenter" class="cloor">个人中心</router-link>
      </div>

    </div>

</template>

<script>
    export default {
        name: "sd"
    }
</script>

<style scoped>
.mycenter{
  width: 60px;
  padding: 0px 15px 0;
  height: 40px;
  background-color: rgb(177, 84, 79);
  color: #FFFFFF;
  line-height: 40px;
  font-size: 12px;
  border: 0px solid;
}
  .cloor{
    color: #FFFFFF;
  }
</style>
