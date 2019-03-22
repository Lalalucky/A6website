<template>
    <!-- 官网主页 -->
    <div>
        <Top></Top>
        <Banner></Banner>
        <div class="wordCloud">
            <h3>机构运营，本不应该这么难</h3>
        </div>
        <div class="yiEdu">
            <h2>易教育，能为您带来什么？</h2>
            <div class="sixAdv">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
            </div>
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
        Top,
        Banner
    }
};
</script>

<style scoped lang="less">
.wordCloud {
    height: 300px;
    width: 100%;
    overflow: hidden;
    box-size: border-box;
    background: #99a9bf;
    opacity: 0.75;
    h3 {
        line-height: 300px;
        text-align: center;
    }
}
</style>
