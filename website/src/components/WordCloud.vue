<template>
    <div class="word_cloud">
        <h3 class="theme">机构运营，本不应该这么难</h3>
        <div
            class="difficult"
            :style="{backgroundImage: 'url(' + this.bg + ')', backgroundSize:'contain'}"
        ></div>
    </div>
</template>

<script>
export default {
    name: "WordCloud",
    data() {
        return {
            bg: ""
        };
    },
    components: {},
    mounted() {
        this.postRequest("v1/application/word-cloud").then(res => {
            this.bg = res.data.data[0].img;
        });
    }
};
</script>

<style scoped lang="less">
//词云
.word_cloud {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    height: 750px;
    h3 {
        width: 100%;
        padding-top: 140px;
        text-align: center;
        position: absolute;
        top: 0;
        // padding: 120px 0 40px;
    }
    .difficult {
        position: absolute;
        top: 260px;
        width: 100%;
        height: 388px;
        background: url("~@/assets/images/home/word_cloud.png") no-repeat center;
        &:hover {
            transform: scale(1.01);
            transition: 1000ms;
            // opacity: 0.6;
        }
    }
}
</style>
