<template>
    <div class="academe">
        <Top :index="'3'"></Top>
        <imgDisplay :msg="'#ff0036'"></imgDisplay>
        <div class="news_tab">
            <div class="tab_controls">
                <router-link tag="div" class="controls" to="/academe/index/company">公司资讯</router-link>
                <router-link tag="div" class="controls" to="/academe/index/industry">行业资讯</router-link>
                <router-link tag="div" class="controls" to="/academe/index/market">市场营销</router-link>
                <router-link tag="div" class="controls" to="/academe/index/organization">机构管理</router-link>
                <router-link tag="div" class="controls" to="/academe/index/products">产品动态</router-link>
                <router-link tag="div" class="controls" to="/academe/index/experience">经验分享</router-link>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import imgDisplay from "@/components/imgDisplay.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "academe",
    data() {
        return {};
    },
    components: {
        Top,
        imgDisplay,
        Footer
    },
    methods: {
        
    }
};
</script>

<style scoped lang="less">
.academe {
    width: 100%;
    .news_tab {
        width: 1200px;
        margin: 0 auto;
        .tab_controls {
            display: flex;
            .controls {
                width: 16.6%;
                padding: 30px 0;
                text-align: center;
                cursor: pointer;
            }
        }
    }
}
</style>
