<template>
    <!-- 官网主页 -->
    <div>
        <Top></Top>
        
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Baner from "@/components/Banner.vue";
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
.banner {
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
}
</style>
