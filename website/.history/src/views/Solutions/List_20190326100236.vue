<template>
   <div class="solutions">
       <Top></Top>
       <div class="img_display"></div>
        <WordCloud></WordCloud>
   </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Register from "@/components/LinkRegister.vue";
import Footer from "@/components/Footer.vue";
import WordCloud from "@/components/WordCloud.vue";
export default {
   name: '',
   data() {
       return {}
   },
  components: {
      Top,Register,Footer,WordCloud
  }
}
</script>

<style scoped lang="less">
</style>
