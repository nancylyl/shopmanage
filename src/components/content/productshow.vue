<template>
  <div class="lifeapp" v-if="$store.state.showbox.showlist.length>0&& this.listpro!=null">
    <div class="sort">
      <ul>
        <li style="font-weight:bold;text-decoration:none;cursor: unset">排序方式：</li>
        <li>
          <a href="javascript:;" @click="sort(1)">最新</a>
        </li>
        <li>
          <a href="javascript:;" @click="sort(2)">销量</a>
        </li>
        <li>
          <a href="javascript:;" @click="sort(3)">价格</a>

          <span class="icon iconfont">&#xe6db;</span>
        </li>
        <li>
          <a href="javascript:;" @click="sort(4)">价格</a>
          <span class="icon iconfont">&#xe6da;</span>
        </li>
      </ul>
    </div>
    <ul class="products" v-if="listpro.length>0">
      <li v-for="item in listpro" :key="item.id">
        <showbox
          :imgSrc="item.children"
          :price="item.Price"
          :tittle="item.Pro_Name"
          :Pro_Id="item.Pro_Id"
        ></showbox>
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
      listpro: [],
      type: '',
      oldorderzx: '',
      oldoderxl: ''
      // key: ''
    }
  },
  props: ['productType'],
  components: {
    breadcrumbVue,
    showbox
  },
  created: async function() {
    //this.key = this.key
    let isture = await this.getprolist()
    if (isture) {
      this.listpro = this.showlist
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
          key: this.key,
          // P_Type_Menu_Id: this.productType
          P_Type_Menu_Id: this.$store.state.shopmenustore.navbar
        }
        await this.getshowlist(data)
        resolve(true)
      })
    },
    sort(state) {
      //  console.log('33')
      if (state == 1) {
        if (this.oldorderzx == 'desc') {
          this.oldorderzx = 'asc'
        } else {
          this.oldorderzx = 'desc'
        }
        this.sortData('CreateDate', this.oldorder)
      } else if (state == 2) {
        if (this.oldoderxl == 'desc') {
          this.oldoderxl = 'asc'
        } else {
          this.oldoderxl = 'desc'
        }
        this.sortData('Pro_NewCount', this.oldoderxl)
      } else if (state == 3) {
        this.sortData('Price', 'asc')
      } else if (state == 4) {
        this.sortData('Price', 'desc')
      }
    },
    sortData(key, order) {
      return this.listpro.sort(function(a, b) {
        // console.log(a)

        var x = a[key]
        var y = b[key]
        let last
        if (order == 'asc') {
          last = x < y ? -1 : x > y ? 1 : 0
        } else {
          last = y < x ? -1 : y > x ? 1 : 0
        }
        return last
      })
    }
  },
  computed: {
    ...mapGetters(['showlist', 'key'])
  },

  watch: {
    '$store.state.showbox.key': async function() {
      //监听vuex中userName变化而改变header里面的值
      console.log(this.key)
      let isture = await this.getprolist()
      if (isture) {
        this.listpro = this.showlist
      }
      // console.log(this.showlist)
    }
  }
}
</script>
<style scoped lang="scss">
@import '~assets/css/productshow/life.scss';
</style>