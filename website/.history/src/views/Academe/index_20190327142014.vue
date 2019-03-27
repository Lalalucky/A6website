<template>
    <div class="academe">
        <Top :index="'3'"></Top>
        <imgDisplay :msg="'#ff0036'"></imgDisplay>
        <div class="news_tab">
            <div class="tab_controls">
                <div class="controls" v-for="(tab,index) in this.tab_controls" :key="index">
                    {{tab}}
                </div>
            </div>
            <div class="tab_pan">

            </div>
        </div>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import imgDisplay from "@/components/imgDisplay.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "academe",
    data() {
        return {
            tab_controls: [
                "公司动态",
                "行业资讯",
                "市场营销",
                "机构管理",
                "产品动态",
                "经验分享"
            ],
            pan_data:[]
        };
    },
    components: {
        Top,
        imgDisplay,
        Footer
    }
};
</script>

<style scoped lang="less">
</style>
