<template>
  <div id="app">
    <Top></Top>
    <Banner></Banner>
  </div>
</template>

<script>
import Top from "./components/top.vue";
import Banner from "./components/banner.vue";
  export default {
  name: "app",
  data(){
    return{
      isRouterAlive:true
    }
  },
  components: {
    Top,Banner
  },
  mounted() {

  },
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
