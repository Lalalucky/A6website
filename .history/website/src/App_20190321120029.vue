<template>
  <div id="app">
    <nav></nav>
    <router-view v-if="isRouterAlive"/>
    <!--search,goodsDetial-->
  </div>
</template>

<script>
import nav from "./components/nva.vue";
  export default {
  name: "app",
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  components: {
    nav
  },
  mounted() {

  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
};
</script>

<style lang="less">
  #app{
    width: 100%;
    min-height: 100vh;
    min-width: 1200px;
  }
  @media screen and(max-width: 1200px) {
    overflow-x: scroll;
  }
</style>
