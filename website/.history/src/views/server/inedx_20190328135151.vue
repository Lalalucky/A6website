<template>
   <div class="server">
       <Top :index="'5'"></Top>
       <imgDisplay :msg="'#636363'"></imgDisplay>
       <yiServer></yiServer>
       <yiJob></yiJob>
   </div>
</template>

<script>
import Top from '@/components/top.vue';
import imgDisplay from '@/components/imgDisplay.vue';
import yiServer from '@/components/yiServer.vue';
import yiJob from '@/components/yiJob.vue';
import Register from '@/components/linkRegister.vue'
import Footer from '@/components/footer.vue';
export default {
   name: '',
   data() {
       return {}
   },
  components: {
      Top,imgDisplay,yiServer,yiJob,Register,Footer
  }
}
</script>

<style scoped lang="less">
</style>
