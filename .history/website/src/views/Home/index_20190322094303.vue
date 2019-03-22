<template>
<!-- 官网主页 -->
   <router-view name="Top"></router-view>
   <router-view name="Banner"></router-view>
</template>

<script>
import Top from '@/components/Top.vue';
import Banner from '@/components/Banner.vue';
export default {
   name: '',
   data() {
       return {}
   },
  components: {
      Top,Banner
  }
}
</script>

<style scoped lang="less">
</style>
