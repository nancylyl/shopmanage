<template>
  <div class="bedchose">
    <div>
      <ul>
<<<<<<< HEAD
        <li style="font-weight:bold;text-decoration:none;cursor: unset">
          根数：
        </li>
=======
        <li style="font-weight:bold;text-decoration:none;cursor: unset">根数：</li>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 0 ? 'selected' : ''"
            @click="searchByGS(0)"
<<<<<<< HEAD
            >全部</a
          >
=======
          >全部</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 1 ? 'selected' : ''"
            @click="searchByGS(1)"
<<<<<<< HEAD
            >240根</a
          >
=======
          >240根</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 2 ? 'selected' : ''"
            @click="searchByGS(2)"
<<<<<<< HEAD
            >300根</a
          >
=======
          >300根</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 3 ? 'selected' : ''"
            @click="searchByGS(3)"
<<<<<<< HEAD
            >350根</a
          >
=======
          >350根</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 4 ? 'selected' : ''"
            @click="searchByGS(4)"
<<<<<<< HEAD
            >600根</a
          >
=======
          >600根</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 5 ? 'selected' : ''"
            @click="searchByGS(5)"
<<<<<<< HEAD
            >床单被罩枕巾单品</a
          >
=======
          >床单被罩枕巾单品</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 6 ? 'selected' : ''"
            @click="searchByGS(6)"
<<<<<<< HEAD
            >靠垫套</a
          >
=======
          >靠垫套</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
      </ul>
    </div>
    <div>
      <ul>
<<<<<<< HEAD
        <li style="font-weight:bold;text-decoration:none;cursor: unset">
          尺寸：
        </li>
=======
        <li style="font-weight:bold;text-decoration:none;cursor: unset">尺寸：</li>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        <li>
          <a
            href="javascript:;"
            :class="activeIndex1 == 0 ? 'selected' : ''"
            @click="searchBySize(0)"
<<<<<<< HEAD
            >全部</a
          >
=======
          >全部</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex1 == 1 ? 'selected' : ''"
            @click="searchBySize(1)"
<<<<<<< HEAD
            >2.0米</a
          >
=======
          >2.0米</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex1 == 2 ? 'selected' : ''"
            @click="searchBySize(2)"
<<<<<<< HEAD
            >1.8米</a
          >
=======
          >1.8米</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex1 == 3 ? 'selected' : ''"
            @click="searchBySize(3)"
<<<<<<< HEAD
            >1.5米</a
          >
=======
          >1.5米</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex1 == 4 ? 'selected' : ''"
            @click="searchBySize(4)"
<<<<<<< HEAD
            >1.2米</a
          >
=======
          >1.2米</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
      </ul>
    </div>
    <div>
      <ul>
<<<<<<< HEAD
        <li style="font-weight:bold;text-decoration:none;cursor: unset">
          类型：
        </li>
=======
        <li style="font-weight:bold;text-decoration:none;cursor: unset">类型：</li>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 0 ? 'selected' : ''"
            @click="searchByType(0)"
<<<<<<< HEAD
            >全部</a
          >
=======
          >全部</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 1 ? 'selected' : ''"
            @click="searchByType(1)"
<<<<<<< HEAD
            >纯色</a
          >
=======
          >纯色</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 2 ? 'selected' : ''"
            @click="searchByType(2)"
<<<<<<< HEAD
            >磨毛</a
          >
=======
          >磨毛</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 3 ? 'selected' : ''"
            @click="searchByType(3)"
<<<<<<< HEAD
            >条纹</a
          >
=======
          >条纹</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 4 ? 'selected' : ''"
            @click="searchByType(4)"
<<<<<<< HEAD
            >印花</a
          >
=======
          >印花</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 5 ? 'selected' : ''"
            @click="searchByType(5)"
<<<<<<< HEAD
            >绣花</a
          >
=======
          >绣花</a>
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import { mapGetters, mapActions } from "vuex";
=======
import { mapGetters, mapActions } from 'vuex'
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
export default {
  name: "bedchose",
  data() {
    return {
      activeIndex: -1,
      activeIndex1: -1,
      activeIndex2: -1,
      proot: 0,
      psize: 0,
      ptype: 0
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
  },
  created() {},
  beforeUpdate() {},
  components: {},
  methods: {
<<<<<<< HEAD
    ...mapActions(["setRoot", "setSize", "setType"]),
    searchByGS(key) {
      this.activeIndex = key;
      this.proot = key;
      // this.setRoot(key);
    },
    searchBySize(key) {
      this.activeIndex1 = key;
      this.psize = key;
      // this.setSize(key);
    },
    searchByType(key) {
      this.activeIndex2 = key;
      this.ptype = key;
=======
    ...mapActions(['setRoot', 'setSize', 'setType']),
    searchByGS(key) {
      this.activeIndex = key
      this.proot = key
      // this.setRoot(key);
    },
    searchBySize(key) {
      this.activeIndex1 = key
      this.psize = key
      // this.setSize(key);
    },
    searchByType(key) {
      this.activeIndex2 = key
      this.ptype = key
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
      // this.setType(key);
    }
  },
  watch: {
    proot: function() {
<<<<<<< HEAD
      this.setRoot(this.proot);
    },
    psize: function() {
      this.setSize(this.psize);
    },
    ptype: function() {
      this.setType(this.ptype);
    }
  }
};
</script>
<style lang="scss">
@import "~assets/css/productshow/life.scss";
=======
      this.setRoot(this.proot)
    },
    psize: function() {
      this.setSize(this.psize)
    },
    ptype: function() {
      this.setType(this.ptype)
    }
  }
}
</script>
<style lang="scss">
@import '~assets/css/productshow/life.scss';
>>>>>>> 2eff788efaa3814697419b520205fb295ff54425
</style>
