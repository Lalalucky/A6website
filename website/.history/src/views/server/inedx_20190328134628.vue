<template>
   <div class="server">
       <Top :index="'5'"></Top>
       
   </div>
</template>

<script>
import Top from '@/components/top.vue';
import Register from '@/components/linkRegister.vue'
import Footer from '@/components/footer.vue';
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
