<template>
  <div class="lifeapp" v-if="$store.state.showbox.showlist.length>0">
    <div class="sort">
      <ul>
        <li style="font-weight:bold;text-decoration:none;cursor: unset">排序方式：</li>
        <li>最新</li>
        <li>销量</li>
        <li>
          价格
          <span class="icon iconfont">&#xe6db;</span>
        </li>
        <li>
          价格
          <span class="icon iconfont">&#xe6da;</span>
        </li>
      </ul>
    </div>
    <ul class="products">
      <li v-for="item in listpro" :key="item.id">
        <showbox :imgSrc="item.children" :price="item.Price" :tittle="item.Pro_Name" :Pro_Id="item.Pro_Id"></showbox>
      </li>
    </ul>
  </div>
</template>

<script>
// import { formatNum } from '../../toolkit'
import { getList } from '@/network/home'
import { mapGetters, mapActions } from 'vuex'
import breadcrumbVue from '@/components/content/breadcrumb'
import showbox from './showbox'
export default {
  name: 'lifeapp',
  data() {
    return {
      listpro: []
    }
  },
  props: ['productType'],
  components: {
    breadcrumbVue,
    showbox
  },
  created: async function() {
    let isture = await this.getprolist()
    if (isture) {
      this.listpro = this.showlist
      // console.log(this.listpro, this.showlist)
    }
  },
  mounted() {},
  methods: {
    ...mapActions(['getshowlist']),

    getprolist: function() {
      return new Promise(async (resolve, reject) => {
        let data = {
          PageCount: 100,
          CurrentPage: 1,
          Key: '',
          P_Type_Menu_Id: this.productType
        }
        await this.getshowlist(data)
        resolve(true)
      })
    }
  },
  computed: {
    ...mapGetters(['showlist'])
  }
}
</script>
<style scoped lang="scss">
@import '~assets/css/productshow/life.scss';
</style>