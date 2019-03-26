<template>
    <div class="solutions">
        <Top></Top>
        <div class="img_display"></div>
        <WordCloud></WordCloud>
        <div class="brand_slogen">
            <h1>品牌slogen</h1>
        </div>
        <div class="light_point">
            <div class="point" v-for="(item,index) in 6" :key=index>
                <router-link to="/solutions/detial"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Register from "@/components/LinkRegister.vue";
import Footer from "@/components/Footer.vue";
import WordCloud from "@/components/WordCloud.vue";
export default {
    name: "",
    data() {
        return {};
    },
    components: {
        Top,
        Register,
        Footer,
        WordCloud
    }
};
</script>

<style scoped lang="less">
.solutions {
    width: 100%;
    overflow: hidden;
    .img_display {
        width: 100%;
        height: 650px;
        background: greenyellow;
    }
    .brand_slogen{
        width: 100%;
        height: 450px;
        h1{
            line-height: 300px;
            text-align: center;
            font-size: 30px;
        }
    }
}
</style>
