<template>
    <!----- 文章详情模板 ----->
    <div class="article">
        <Top></Top>
        <div class="detials">
            <h1 class="headline"></h1>
            <div class="content">
                <div class="related_info">
                    <div class="essay_tag">文章标签：</div>
                    <div class="essay_establish">发布人：</div>
                    <div class="essay_time">发布时间：</div>
                </div>
                <div class="essay_itself">
                    div.
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
