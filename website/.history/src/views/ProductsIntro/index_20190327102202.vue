<template>
    <div class="products_intro">
        <Top></Top>
        <ImgDisplay :msg="'skyblue'"></ImgDisplay>
        <YiHelper :h1="'产品功能'"></YiHelper>
        <!-- 版本 -->
        <div class="versions">
            <div class="ace_exhibition"></div>
        </div>
        <YiJob></YiJob>
        <Register></Register>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import ImgDisplay from "@/components/ImgDisplay.vue";
import YiHelper from "@/components/YiHelper.vue";
import YiJob from "@/components/YiJob.vue";
import Register from "@/components/LinkRegister.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "",
    data() {
        return {};
    },
    components: {
        Top,
        ImgDisplay,
        YiHelper,
        YiJob,
        Register
    }
};
</script>

<style scoped lang="less">
</style>
