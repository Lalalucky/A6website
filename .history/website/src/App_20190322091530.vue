<template>
  <div id="app">
  </div>
</template>

<script>
  export default {
  name: "app",
  data(){
    return{
      isRouterAlive:true
    }
  },
  components: {
    Top
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
