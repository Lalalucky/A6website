<template>
    <div class="word_cloud">
        <h3>机构运营，本不应该这么难</h3>
    </div>
</template>

<script>
export default {
    name: "wordCloud",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="less">
//词云
.word_cloud {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    background: #99a9bf;
    opacity: 0.75;
    h3 {
        line-height: 300px;
        text-align: center;
    }
}
</style>
