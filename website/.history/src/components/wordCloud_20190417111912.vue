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
    overflow: hidden;
    box-sizing: border-box;
    h3 {
        padding: 120px 0 40px;
    }
    .difficult {
        height: 388px;
        background: url("~@/assets/images/home/word_cloud.png") no-repeat center;
        &:hover {
            transform: scale(1.1);
            opacity: 0.8;
        }
    }
}
</style>
