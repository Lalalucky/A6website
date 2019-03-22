<template>
    <!-- 官网主页 -->
    <div>
        <Top></Top>
        <Banner></Banner>
        <div class="wordCloud">
            <h3>机构运营，本不应该这么难</h3>
        </div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Banner from "@/components/Banner.vue";
export default {
    name: "",
    data() {
        return {};
    },
    components: {
        Top,Banner
    }
};
</script>

<style scoped lang="less">
    .wordCloud{
        height: 300px;
        width: 100%;
        overflow: hidden;
        box-size:border-box;
        h3{
            line-height: 300px;
            text-align: center;
        }
    }
</style>
