<template>
    <!----- 文章详情模板 ----->
    <div class="article">
        <Top></Top>
        <div class="detials">
            <h1 class="headline"></h1>
            <div class="content">
                <div class="related_info">
                    <div class="essay"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "",
    data() {
        return {};
    },
    components: {
        Top,
        Footer
    }
};
</script>

<style scoped lang="less">
</style>
