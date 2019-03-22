<template>
    <!-- 官网主页 -->
    <div>
        <Top></Top>
        <div class="banner">
            <el-carousel name="home">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="wordCloud">
            <h3>机构运营，本不应该这么难</h3>
        </div>
        <div class="yiEdu">
            <h1>易教育，能为您带来什么？</h1>
            <div class="sixAdv">
                <ul class="tab">
                    <li
                        class="tabli"
                        v-for="(item,index) in tabParams"
                        :key="index"
                        @mouseover="toggleTabs(index)"
                        :class="{active:index===nowIndex}"
                    >{{item}}</li>
                </ul>
                <div class="adv_one adv_point" v-show="nowIndex===0">
                    <p>围绕在学院周期展开1</p>
                    <p>闭环式营销综合解决方案1</p>
                </div>
                <div class="adv_two adv_point" v-show="nowIndex===1">
                    <p>围绕在学院周期展开2</p>
                    <p>闭环式营销综合解决方案2</p>
                </div>
                <div class="adv_three adv_point" v-show="nowIndex===2">
                    <p>围绕在学院周期展开3</p>
                    <p>闭环式营销综合解决方案3</p>
                </div>
                <div class="adv_four adv_point" v-show="nowIndex===3">
                    <p>围绕在学院周期展开4</p>
                    <p>闭环式营销综合解决方案4</p>
                </div>
                <div class="adv_five adv_point" v-show="nowIndex===4">
                    <p>围绕在学院周期展开5</p>
                    <p>闭环式营销综合解决方案5</p>
                </div>
                <div class="adv_three adv_point" v-show="nowIndex===5">
                    <p>围绕在学院周期展开6</p>
                    <p>闭环式营销综合解决方案6</p>
                </div>
            </div>
        </div>
        <div class="yiHelp">
            <h1>易教育如何帮您实现机构运营全面升级</h1>
            <div class="container">
                <div class="tips" v-for="(item,index) in someHelp" :key="index">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
export default {
    name: "",
    data() {
        return {
            tabParams: ["营销", "销售", "业务", "资源", "管控", "继续教育"],
            nowIndex: 0,
            isShow: false,
            someHelp:[{}]
        };
    },
    components: {
        Top
    },
    methods: {
        toggleTabs(index) {
            this.nowIndex = index;
        }
    }
};
</script>
<style scoped lang="less">
.banner {
    width: 100%;
    height: 600px;
    overflow: hidden;
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 600px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
}
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
        .tab {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            li {
                width: 16.6%;
                height: 30px;
                line-height: 30px;
                text-align: center;
            }
        }
        .adv_point {
            width: 100%;
            height: 50px;
            padding: 70px 0;
            text-align: center;
            p {
                line-height: 30px;
            }
        }
    }
}
.yiHelp {
    height: 300px;
    width: 100%;
    overflow: hidden;
    h1 {
        text-align: center;
        line-height: 60px;
        font-size: 24px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
<style>
 .el-carousel__container {
        height: 600px;
    }
</style>
