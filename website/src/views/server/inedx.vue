<template>
    <div class="server">
        <outLink></outLink>
        <Top :index="'5'"></Top>
        <Banner></Banner>
        <yiServer></yiServer>
        <yiJob :showTime="showTime"></yiJob>
        <Register></Register>
        <Footer></Footer>
    </div>
</template>

<script>
import outLink from "@/components/outsideLink.vue";
import Banner from "@/components/banner.vue";
import Top from "@/components/top.vue";
import yiServer from "@/components/yiServer.vue";
import yiJob from "@/components/yiJob.vue";
import Register from "@/components/linkRegister.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "",
    data() {
        return {
            showTime: false
        };
    },
    components: {
        Top,
        Banner,
        yiServer,
        yiJob,
        Register,
        Footer,
        outLink
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            // console.log(scrollTop);
            if (scrollTop > 1000) {
                this.showTime = true;
            }
        }
    }
};
</script>

<style scoped lang="less">
.yi_job {
    position: relative;
    &:before {
        content: " ";
        position: absolute;
        top: 50px;
        height: 40px;
        width: 1200px;
        margin: 0 auto;
        background: url("~@/assets/images/zhuangshi.png") center;
        // background-size: 100%;
    }
}
</style>
