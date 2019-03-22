<template>
    <!-- 官网主页 -->
    <div>
        <Top></Top>
        <div class="banner">
            <el-carousel :height="600+'px'">
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
                <div class="tips">
                    <h3>社群营销</h3>
                    <p>活动管理</p>
                    <p>文章管理</p>
                    <p>会议管理</p>
                    <p>电子券/优惠券</p>
                </div>
                <div class="tips">
                    <h3>招生管理</h3>
                    <p>公海私海</p>
                    <p>沟通商机</p>
                    <p>报价、合同</p>
                    <p>订单、收款</p>
                </div>
                <div class="tips">
                    <h3>教务管理</h3>
                    <p>学员管理</p>
                    <p>超级班级</p>
                    <p>教室、教师</p>
                    <p>教资、排课</p>
                </div>
                <div class="tips">
                    <h3>教学管理</h3>
                    <p>班级教学</p>
                    <p>在线培训</p>
                    <p>教学通知</p>
                    <p>答疑资讯</p>
                </div>
                <div class="tips">
                    <h3>查询分析</h3>
                    <p>报表仓库</p>
                    <p>驾驶舱</p>
                    <p>招生、财务</p>
                    <p>教务、教学</p>
                </div>
                <div class="tips">
                    <h3>继续教育</h3>
                    <p>学员管理</p>
                    <p>订单管理</p>
                    <p>课程管理</p>
                    <p>班级管理</p>
                    <p>学时管理</p>
                </div>
                <div class="tips">
                    <h3>协同工作</h3>
                    <p>审批管理</p>
                    <p>销售计划</p>
                    <p>任务、报告</p>
                    <p>费用、通知</p>
                </div>
                <div class="tips">
                    <h3>财务管理</h3>
                    <p>记账报销</p>
                    <p>收款、收入</p>
                    <p>业绩发票</p>
                    <p>积分审核</p>
                </div>
            </div>
            <div class="konwMore">
                <div>了解更多</div>
            </div>
        </div>
        <div class="yi_server">
            <h1>一站式服务，我们努力做到更好</h1>
            <div class="container">
                <div class="service">
                    <h3>专属服务</h3>
                    <p class="intro">合作机构将用于专属的服务顾问</p>
                    <p class="intro">7*24*365提供在线服务支持</p>
                </div>
                <div class="service">
                    <h3>多终端支持</h3>
                    <p class="intro">支持电脑、平板、手机多平台对接，</p>
                    <p class="intro">7*24*365提供在线服务支持</p>
                </div>
                <div class="service">
                    <h3>专属服务</h3>
                    <p class="intro">合作机构将用于专属的服务顾问</p>
                    <p class="intro">7*24*365提供在线服务支持</p>
                </div>
                <div class="service">
                    <h3>专属服务</h3>
                    <p class="intro">合作机构将用于专属的服务顾问</p>
                    <p class="intro">7*24*365提供在线服务支持</p>
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
            isShow: false
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
    width: 100%;
    h1 {
        text-align: center;
        line-height: 60px;
        font-size: 24px;
    }
    .container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        .tips{
            margin: 15px 0;
            width: 33.3%;
            text-align: center;
            h3{
                font-size: 18px;
                font-weight: bold;
                margin: 5px 0;
            }
        }
    }
    .konwMore{
        div{
            width: 8%;
            height: 30px;
            box-sizing: border-box;
            border:1px solid #ececec;
            border-radius: 15px;
            margin: 0 auto;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
        }
    }
}
</style>
