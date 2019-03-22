<template>
    <!-- 官网主页 -->
    <div>
        <Top></Top>
        <Banner></Banner>
        <div class="wordCloud">
            <h3>机构运营，本不应该这么难</h3>
        </div>
        <div class="yiEdu">
            <h1>易教育，能为您带来什么？</h1>
            <div class="sixAdv">
                <ul class="tab">
                    <li class="tab_li" v-for="(item,index) in tabParams" @mouseover="toggleTabs(index)" :class="{active:index===nowIndex}">
                        {{item}}
                    </li>
                </ul>
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
        return {
            tabParams:[""]
        };
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
    box-sizing: border-box;
    background: #99a9bf;
    opacity: 0.75;
    h3 {
        line-height: 300px;
        text-align: center;
    }
}
.yiEdu {
    height: 300px;
    width: 100%;
    overflow: hidden;
    h1 {
        text-align: center;
        line-height: 60px;
        font-size: 24px;
    }
    .sixAdv {
        width: 100%;
    }
}
</style>
