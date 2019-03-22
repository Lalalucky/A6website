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
                    <li class="tabli" v-for="(item,index) in tabParams" :key="index" @mouseover="toggleTabs(index)" :class="{active:index===nowIndex}">
                        {{item}}
                    </li>
                </ul>
                <div class="adv_one" v-show="nowIndex===0">1</div>
                <div class="adv_two" v-show="nowIndex===1">2</div>
                <div class="adv_three" v-show="nowIndex===2">3</div>
                <div class="adv_four" v-show="nowIndex===3">4</div>
                <div class="adv_five" v-show="nowIndex===4">5</div>
                <div class="adv_three" v-show="nowIndex===5">6</div>
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
            tabParams: ["营销", "销售", "业务", "资源", "管控", "继续教育"],
            nowIndex: 0,
            isShow: false
        };
    },
    components: {
        Top,
        Banner
    },
    methods: {
        toggleTabs(index) {
            this.nowIndex = index;
            $(window).resize();
        }
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
        .tad{
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            li{
                
            }
        }
    }
}
</style>
