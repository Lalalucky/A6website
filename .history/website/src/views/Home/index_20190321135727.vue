<template>
<!-- 官网主页 -->
   <Top></Top>
   <router-view></router-view>
</template>

<script>
import Top from '@/components/top.vue'
export default {
   name: '',
   data() {
       return {}
   },
  components: {
      Top
  }
}
</script>

<style scoped lang="less">
</style>
