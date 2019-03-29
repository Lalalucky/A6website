<template>
   <div class="server">
       <Top :index="'5'"></Top>
       <imgDisplay :msg="'#636363'"></imgDisplay>
   </div>
</template>

<script>
import Top from '@/components/top.vue';
import imgDisplay from '@/components/imgDisplay.vue';
import Register from '@/components/linkRegister.vue'
import Footer from '@/components/footer.vue';
export default {
   name: '',
   data() {
       return {}
   },
  components: {
      Top,imgDisplay,Register,Footer
  }
}
</script>

<style scoped lang="less">
</style>
