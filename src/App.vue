<template>
  <div id="app">
    <!-- <person /> -->
    <div v-if="ishow">
      <shopMenu></shopMenu>
      <div class="nav">
        <breadcrumbVue
          v-if="
            $store.state.shopmenustore.menulist.length > 0 &&
              $store.state.shopmenustore.navbar
          "
        ></breadcrumbVue>
      </div>
    </div>
<<<<<<< HEAD
    <router-view v-if="$store.state.shopmenustore.menulist.length>0" />
     <sidebar /> 
=======
    <router-view v-if="$store.state.shopmenustore.menulist.length > 0" />
    <sidebar />
>>>>>>> affc917deae6f42756537a43b4c9ce5a8ef52bb5
  </div>
</template>
<script>
import shopMenu from "@/components/content/shopMenu";
import breadcrumbVue from "@/components/content/breadcrumb";
import { mapActions, mapGetters } from "vuex";
import productdeltails from "@/components/content/productdetails";
import sidebar from "@/components/commom/sidebar";
import person from "@/views/person/components/wode";
export default {
  data() {
    name: "app";
    return {
      ishow: true
    };
  },
  created() {
    console.log(this.$route.path.indexOf("PerCenter"));

    if (this.$route.path.indexOf("PerCenter") > 0) {
      this.ishow = false;
    } else {
      this.ishow = true;
    }
  },
  watch: {
    $route(to, from) {
      // console.log(to.path);
      if (to.path.indexOf("PerCenter") > 0) {
        this.ishow = false;
      } else {
        this.ishow = true;
      }
      // 对路由变化作出响应...
      console.log(to.name);
      console.log(this);

      try {
        let nav = this.$route.params.id;
        this.setNav(nav);
        document.querySelector(".header").className =
          "header submenu-panel-hide";
        setTimeout(() => {
          document.querySelector(".header").className = "header";
        }, 100);
      } catch {}
    }
  },
  methods: {
    ...mapActions(["setNav"])
  },
  components: {
    shopMenu,
    breadcrumbVue,
    productdeltails,
<<<<<<< HEAD
    sidebar
=======
    sidebar,
    person
>>>>>>> affc917deae6f42756537a43b4c9ce5a8ef52bb5
  }
};
</script>
<style>
@import "~assets/css/base.scss";
@import "~assets/font/iconfont.css";
</style>
