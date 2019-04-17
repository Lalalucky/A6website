<template>
   <div class="server">
       <Top :index="'5'"></Top>
       <imgDisplay :msg="'#636363'"></imgDisplay>
       <yiServer></yiServer>
       <yiJob></yiJob>
       <Register></Register>
       <Footer></Footer>
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
       return {
           showTime:false
       }
   },
  components: {
      Top,imgDisplay,yiServer,yiJob,Register,Footer
  },
  mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods:{
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
                console.log(scrollTop);
            if( scrollTop>2400 ){
                this.showTime = true;
            }
        },
    }
}
</script>

<style scoped lang="less">
</style>
