<template>
   <div class="academe">
       <Top :index="'3'"></Top>
       <imgDisplay :msg="'#ff0036'"></imgDisplay>

   </div>
</template>

<script>
import Top from '@/components/top.vue';
import imgDisplay from '@/components/imgDisplay.vue';
import Footer from '@/components/footer.vue'
export default {
   name: 'academe',
   data() {
       return {}
   },
  components: {
      Top,imgDisplay,Footer
  }
}
</script>

<style scoped lang="less">
</style>
