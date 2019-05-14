<template>
    <div class="products_intro">
        <outLink></outLink>
        <Top :index="'2'"></Top>
        <Banner></Banner>
        <div class="yiHelp">
            <h1 class="h1 theme" ref="h_html">易教育如何帮您实现机构运营全面升级</h1>
            <div class="container">
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao1.png" alt>
                            <span>社群营销</span>
                        </div>
                        <p>活动管理</p>
                        <p>文章管理</p>
                        <p>会议管理</p>
                        <p>电子券/优惠券</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao2.png" alt>
                            <span>招生管理</span>
                        </div>
                        <p>公海私海</p>
                        <p>沟通商机</p>
                        <p>报价、合同</p>
                        <p>订单、收款</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao3.png" alt>
                            <span>教务管理</span>
                        </div>
                        <p>学员管理</p>
                        <p>超级班级</p>
                        <p>教室、教师</p>
                        <p>教资、排课</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao4.png" alt>
                            <span>教学管理</span>
                        </div>
                        <p>班级教学</p>
                        <p>在线培训</p>
                        <p>教学通知</p>
                        <p>答疑资讯</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao5.png" alt>
                            <span>查询分析</span>
                        </div>
                        <p>报表仓库</p>
                        <p>驾驶舱</p>
                        <p>招生、财务</p>
                        <p>教务、教学</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao6.png" alt>
                            <span>继续教育</span>
                        </div>
                        <p>学员管理</p>
                        <p>订单管理</p>
                        <p>课程管理</p>
                        <p>班级管理</p>
                        <p>学时管理</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao7.png" alt>
                            <span>协同工作</span>
                        </div>
                        <p>审批管理</p>
                        <p>销售计划</p>
                        <p>任务、报告</p>
                        <p>费用、通知</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao8.png" alt>
                            <span>财务管理</span>
                        </div>
                        <p>记账报销</p>
                        <p>收款、收入</p>
                        <p>业绩发票</p>
                        <p>积分审核</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 版本 -->
        <div class="versions">
            <div class="ace_exhibition">
                <h3 class="theme">版本对比</h3>
                <!-- 点击之前显示缩率图 -->
                <div class="path_stage before_click" v-show="this.drop==false">
                    <img src="../../assets/images/zhedie_path.png" alt>
                    <div class="click_showMore" @click="dropdown(true)">
                        <img src="../../assets/images/drop_down.png" alt>
                    </div>
                </div>
                <!-- 点击之后显示完整图片 -->
                <div class="path_stage after_click" v-show="this.drop==true">
                    <img src="../../assets/images/path.png" alt>
                    <div class="click_hide" @click="dropdown(false)">
                        <img src="../../assets/images/drop_down.png" alt>
                    </div>
                </div>
            </div>
            <div class="events">
                <h1 class="theme">我们努力让“变得更好”成为一种常态</h1>
                <!-- 大事记 -->
                <div class="events_path">
                    <div class="row_box">
                        <div class="year2015">
                            <p>4月：云宝网络公司注册成立。</p>
                            <p>9月：云豆讲堂V1.0发版。</p>
                            <p>9月：第一套题库（八大员）制作完成上线服务</p>
                            <p>10月：云豆讲堂平台注册学员数破万</p>
                            <p>12月：云豆讲堂平台签约第一家培训机构</p>
                        </div>
                        <div class="year2016">
                            <p>3月：云豆讲堂V2.0发版并更名为云宝易教育系统A6平台V2.0</p>
                            <p>6月：云宝易教育系统A5平台V1.0发版（无 纸化考试模拟平台）</p>
                            <p>12月：云宝易教育系统A6平台签约第一 家江苏省外培训机构</p>
                        </div>
                        <div class="year2017">
                            <p>3月：云宝易教育系统A6平台V3.0发版</p>
                            <p>12月：云宝易教育系统A6平台V4.0发版</p>
                        </div>
                        <div class="year2018">
                            <p>3月：云宝易教育系统A6平台V5.0发版</p>
                            <p>6月：云宝易教育系统A7平台V5.0发版</p>
                            <p>12月：云宝易教育系统A6平台V6.0发版</p>
                            <p>12月：云宝易教育系统A8平台V6.0发版</p>
                        </div>
                        <div class="year2019">
                            <p>1月：云宝汇平台A11上线</p>
                            <p>4月：云宝易教育系统A6平台V6.1发版</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <YiJob :showTime="showTime"></YiJob>
        <Register></Register>
        <Footer></Footer>
    </div>
</template>

<script>
import outLink from "@/components/outsideLink.vue";
import Banner from "@/components/banner.vue";
import Top from "@/components/top.vue";
import YiHelper from "@/components/yiHelper.vue";
import YiJob from "@/components/yiJob.vue";
import Register from "@/components/linkRegister.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "",
    data() {
        return {
            drop: false,
            showTime: false,
            // 定时器,数字2代表两分钟
            minute: 1
        };
    },
    components: {
        Top,
        YiHelper,
        YiJob,
        Register,
        Footer,
        outLink,
        Banner
    },
    created() {
        this.openCon();
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        // 一个定时的弹出对话框
        openCon() {
            let time = this.minute * 60 * 1000;
            setTimeout(() => {
                _MEIQIA("showPanel");
            }, time);
        },
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            console.log(scrollTop);
            let before_content_height =
                document.querySelector(".header").offsetHeight +
                document.querySelector(".banner").offsetHeight +
                document.querySelector(".yiHelp").offsetHeight +
                document.querySelector(".versions").offsetHeight -
                600;
            // console.log(before_content_height);
            if (scrollTop > before_content_height) {
                this.showTime = true;
            }
        },
        dropdown(flag) {
            this.drop = flag;
            if (flag === false) {
                window.scroll(0, 2000);
            }
        }
    }
};
</script>

<style scoped lang="less">
.products_intro {
    .yiHelp {
        width: 1200px;
        margin: 30px auto;
        .container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .tips {
                margin: 15px 0px 45px;
                width: 25%;
                text-align: center;
                font-family: PFregular;
                .piece {
                    width: 200px;
                    padding: 35px 0 45px;
                    background: #ffffff;
                    margin: 0 auto;
                    border-top: 3px solid #4a90e2;
                    & > div {
                        width: 100%;
                        height: 66px;
                        margin: 10px 0;
                        img {
                            display: inline-block;
                            height: 66px;
                            width: 56px;
                            vertical-align: middle;
                        }
                        span {
                            font-size: 24px;
                            font-weight: 400;
                            display: inline-block;
                            line-height: 70px;
                            margin-left: 10px;
                            color: rgba(43, 43, 43, 1);
                        }
                    }
                    &:hover {
                        box-shadow: 4px 4px 30px 0px rgba(174, 173, 173, 0.5);
                        transform: scale(1.05);
                        transition: 400ms;
                        transition-delay: 200ms;
                    }
                    & > p {
                        font-size: 16px;
                        font-weight: 400;
                        color: rgba(102, 102, 102, 1);
                        line-height: 26px;
                    }
                }
            }
        }
    }
    .versions {
        width: 1200px;
        margin: 0 auto;
        position: relative;
        &:before {
            content: " ";
            position: absolute;
            top: 50px;
            height: 40px;
            width: 1200px;
            margin: 0 auto;
            background: url("~@/assets/images/zhuangshi.png") center;
            // background-size: 100%;
        }
        .ace_exhibition {
            width: 100%;
            .before_click {
                height: 625px;
                position: relative;
                .click_showMore {
                    width: 100%;
                    height: 25px;
                    text-align: center;
                    position: absolute;
                    bottom: 25px;
                    img {
                        cursor: pointer;
                        animation: shaky-slow 4s ease-in-out infinite;
                        animation-delay: 2s;
                    }
                    @keyframes shaky-slow {
                        0% {
                            transform: translate(0px, 0px);
                        }
                        10% {
                            transform: translate(0px, 2px);
                        }
                        20% {
                            transform: translate(0px, 0px);
                        }
                        30% {
                            transform: translate(0px, -4px);
                        }
                        40% {
                            transform: translate(0px, 0px);
                        }
                        50% {
                            transform: translate(0px, 2px);
                        }
                        60% {
                            transform: translate(0px, 0px);
                        }
                        70% {
                            transform: translate(0, -4px);
                        }
                        80% {
                            transform: translate(0px, 0px);
                        }
                        90% {
                            transform: translate(0px, 2px);
                        }
                    }
                }
            }
            .after_click {
                height: 2440px;
                position: relative;
                .click_hide {
                    width: 50px;
                    height: 25px;
                    text-align: center;
                    position: absolute;
                    left: 50%;
                    margin-left: -25px;
                    bottom: 0px;
                    transform: rotateX(180deg);
                    img {
                        cursor: pointer;
                        animation: shaky-again 4s ease-in-out infinite;
                        animation-delay: 2s;
                    }
                    @keyframes shaky-again {
                        0% {
                            transform: translate(0px, 0px);
                        }
                        10% {
                            transform: translate(0px, 2px);
                        }
                        20% {
                            transform: translate(0px, 0px);
                        }
                        30% {
                            transform: translate(0px, -4px);
                        }
                        40% {
                            transform: translate(0px, 0px);
                        }
                        50% {
                            transform: translate(0px, 2px);
                        }
                        60% {
                            transform: translate(0px, 0px);
                        }
                        70% {
                            transform: translate(0, -4px);
                        }
                        80% {
                            transform: translate(0px, 0px);
                        }
                        90% {
                            transform: translate(0px, 2px);
                        }
                    }
                }
            }
        }
        .events {
            width: 100%;
            position: relative;
            &:before {
                content: " ";
                position: absolute;
                top: 50px;
                height: 40px;
                width: 1200px;
                margin: 0 auto;
                background: url("~@/assets/images/zhuangshi.png") center;
                // background-size: 100%;
            }
            .events_path {
                width: 100%;
                .row_box {
                    width: 100%;
                    height: 600px;
                    position: relative;
                    color: rgba(102, 102, 102, 1);
                    font-size: 16px;
                    font-weight: 400;
                    background: url("~@/assets/images/大事记.png") no-repeat
                        center;
                    & > div {
                        position: absolute;
                    }
                    .year2015 {
                        width: 330px;
                        top: 40px;
                        left: 115px;
                    }
                    .year2016 {
                        // width: 300px;haoba
                        top: 440px;
                        left: 363px;
                    }
                    .year2017 {
                        width: 300px;
                        top: 40px;
                        right: 295px;
                    }
                    .year2018 {
                        width: 300px;
                        top: 440px;
                        right: 40px;
                    }
                    .year2019 {
                        right: -174px;
                        top: 40px;
                    }
                    p {
                        line-height: 27px;
                    }
                }
            }
        }
    }
    .yi_job {
        position: relative;
        &:before {
            content: " ";
            position: absolute;
            top: 50px;
            height: 40px;
            width: 1200px;
            margin: 0 auto;
            background: url("~@/assets/images/zhuangshi.png") center;
            // background-size: 100%;
        }
    }
}
</style>
