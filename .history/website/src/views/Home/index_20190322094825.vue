<template>
    <!-- 官网主页 -->
    <Top></Top>
    <div class="banner">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
export default {
    name: "",
    data() {
        return {};
    },
    components: {
        Top
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
