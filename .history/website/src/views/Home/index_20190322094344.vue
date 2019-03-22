<template>
<!-- 官网主页 -->
   <div class="banner">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
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
