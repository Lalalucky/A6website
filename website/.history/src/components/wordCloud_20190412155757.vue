<template>
    <div class="word_cloud">
        <h3 class="theme">机构运营，本不应该这么难</h3>
        <div class="difficult"></div>
    </div>
</template>

<script>
export default {
    name: "WordCloud",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="less">
//词云
.word_cloud {
    width: 1200px;
    margin: 0 auto;
    height: 450px;
    overflow: hidden;
    box-sizing: border-box;
    opacity: 0.75;
    h3 {
        line-height: 60px;
        text-align: center;
        font-size: 30px;
    }
    .difficult{
        height: 388px;
        background:url('~@/assets/images/home/word_cloud.png') no-repeat center;
    }
}
</style>
