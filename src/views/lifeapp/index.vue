<template>
  <div class="lifeapp">
    <div class="name">
      <span>生活家电</span>
      <span style="margin-left:10px">商品筛选</span>
      <a href="">重置筛选条件</a>
    </div>
    <div class="sort">
      <ul>
        <li>排序方式：</li>
        <li>最新</li>
        <li>销量</li>
        <li>价格 ↑</li>
        <li>价格 ↓</li>
      </ul>
    </div>
    <div class="products">
      <div class="goods">
        <img src="" alt="" class="big">
        <div class="little">
          <img src="" alt="">
        </div>
        <p>
          <span>￥159</span>
        </p>
        <router-link to="#" active-class="active"  tag="li">支撑加热护颈</router-link>
      </div>
       <div class="goods">
        <img src="" alt="" class="big">
        <div class="little">
          <img src="" alt="">
        </div>
        <p>
          <span>￥159</span>
        </p>
        <router-link to="#" active-class="active"  tag="li">支撑加热护颈</router-link>
      </div> <div class="goods">
        <img src="" alt="" class="big">
        <div class="little">
          <img src="" alt="">
        </div>
        <p>
          <span>￥159</span>
        </p>
        <router-link to="#" active-class="active"  tag="li">支撑加热护颈</router-link>
      </div> <div class="goods">
        <img src="" alt="" class="big">
        <div class="little">
          <img src="" alt="">
        </div>
        <p>
          <span>￥159</span>
        </p>
        <router-link to="#" active-class="active"  tag="li">支撑加热护颈</router-link>
      </div>
       <div class="goods">
        <img src="" alt="" class="big">
        <div class="little">
          <img src="" alt="">
        </div>
        <p>
          <span>￥159</span>
        </p>
        <router-link to="#" active-class="active"  tag="li">支撑加热护颈</router-link>
      </div>
    </div>
    
    <!-- <h1>我是生活家电</h1> -->

  </div>
</template>


<script>
// import { formatNum } from '../../toolkit'
export default {
  name: 'lifeapp',
  methods: {}
}
</script>
<style scoped lang="scss">
@import "~assets/css/productshow/life.scss";
</style>