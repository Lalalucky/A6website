<template>
   <div class="solutions">
       <Top></Top>
       <div class="img_display"></div>

   </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Register from "@/components/LinkRegister.vue";
import Footer from "@/components/Footer.vue";
import wordCloud from "@/components/WordCloud.vue";
export default {
   name: '',
   data() {
       return {}
   },
  components: {
      Top,Register,Footer
  }
}
</script>

<style scoped lang="less">
</style>
