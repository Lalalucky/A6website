<template>
    <!-- 官网主页 -->
    <div>
        <outLink></outLink>
        <Top :index="'0'"></Top>
        <Banner></Banner>
        <main>
            <WordCloud></WordCloud>
            <div class="yiEdu">
                <div class="column">
                    <h1 class="theme">易教育，能为您带来什么？</h1>
                </div>
                <div class="sixAdv">
                    <ul class="tab">
                        <li
                            @mouseover="linkserver('marketing')"
                            :class="{active:this.currentView=='marketing'}"
                        >营销传播</li>
                        <li
                            @mouseover="linkserver('sell')"
                            :class="{active:this.currentView=='sell'}"
                        >招生转化</li>
                        <li
                            @mouseover="linkserver('bussiness')"
                            :class="{active:this.currentView=='bussiness'}"
                        >业务升级</li>
                        <li
                            @mouseover="linkserver('ziyuan')"
                            :class="{active:this.currentView=='ziyuan'}"
                        >教务教研</li>
                        <li
                            @mouseover="linkserver('controls')"
                            :class="{active:this.currentView=='controls'}"
                        >数据管控</li>
                        <li
                            @mouseover="linkserver('education')"
                            :class="{active:this.currentView=='education'}"
                        >继续教育</li>
                        <!-- <router-link to="/home/marketing" tag="li" :class="{active:this.currentView=='marketing'}" >营销</router-link> 
                        <router-link to="/home/sell" tag="li" :class="{active:this.currentView=='sell'}" @mouseover="linkserver('sell')">销售</router-link>
                        <router-link to="/home/bussiness" tag="li" :class="{active:this.currentView=='bussiness'}" @mouseover="linkserver('bussiness')">业务</router-link>
                        <router-link to="/home/ziyuan" tag="li" :class="{active:this.currentView=='ziyuan'}" @mouseover="linkserver('ziyuan')">资源</router-link>
                        <router-link to="/home/controls" tag="li" :class="{active:this.currentView=='controls'}" @mouseover="linkserver('controls')">管控</router-link>
                        <router-link to="/home/education" tag="li" :class="{active:this.currentView=='education'}" @mouseover="linkserver('education')">继续教育</router-link>-->
                    </ul>
                    <div class="container">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
            <YiHelper :h1="'易教育如何帮您实现机构运营全面升级'"></YiHelper>
            <YiServer></YiServer>
            <YiJob :showTime="showTime"></YiJob>
            <div class="yiAchi">
                <h1 class="theme">专注，让易教育持续为伙伴提供价值</h1>
                <div class="rollData">
                    <div class="grow">
                        <h3 ref="growYear" :data-time="time" :data-value="value"></h3>
                        <p>
                            <span v-html="this.growData.year"></span>年专注产品打造
                        </p>
                    </div>
                    <div class="grow">
                        <h3 ref="growTimes" :data-time="time" :data-value="value"></h3>
                        <p>
                            <span>{{this.growData.times}}</span>次产品功能升级
                        </p>
                    </div>
                    <div class="grow">
                        <h3 ref="growOrgNum" :data-time="time" :data-value="value"></h3>
                        <p>
                            <span>{{this.growData.organizations}}</span>家机构合作伙伴
                        </p>
                    </div>
                    <div class="grow">
                        <div>
                            <h3 ref="growStuNum" :data-time="time" :data-value="value"></h3>
                            <h3>万</h3>
                        </div>
                        <p>
                            <span>{{this.growData.students}}万</span>位学员使用
                        </p>
                    </div>
                </div>
                <div class="konwMore">
                    <router-link tag="div" to="/register">
                        立即体验
                        <i class="iconfont icon-icon"></i>
                    </router-link>
                </div>
            </div>
            <YiPartner></YiPartner>
        </main>
        <Register></Register>
        <Footer></Footer>
    </div>
</template>

<script>
import outLink from "@/components/outsideLink.vue";
import Banner from "@/components/banner.vue";
import Top from "@/components/top.vue";
import WordCloud from "@/components/wordCloud.vue";
import YiHelper from "@/components/yiHelper.vue";
import YiJob from "@/components/yiJob.vue";
import YiServer from "@/components/yiServer.vue";
import YiPartner from "@/components/yiPartner.vue";
import Register from "@/components/linkRegister.vue";
import Footer from "@/components/footer.vue";
import { mapState } from "vuex";
// import { url } from 'inspector';
export default {
    name: "",
    props: {
        time: {
            // type: Number,
            // default: 2
        },
        value: {
            // type: Number,
            // default: 720000
        }
    },
    data() {
        return {
            tabParams: [
                "营销传播",
                "招生转化",
                "业务升级",
                "教务教研",
                "数据管控",
                "继续教育"
            ],
            nowIndex: 0,
            isShow: false,
            growData: {
                year: 0,
                times: 0,
                organizations: 0,
                students: 0
            },
            currentView: "marketing",
            showTime: false,
            rollDataPic: {
                backgroundImage:
                    "url(" + require("../../assets/images/home/achi.png") + ")"
            }
        };
    },
    components: {
        Top,
        Banner,
        Register,
        Footer,
        WordCloud,
        YiJob,
        YiHelper,
        YiServer,
        YiPartner,
        outLink
    },
    created() {
        //滚动数字
        this.postRequest("v1/application/roll-number").then(res => {
            // console.log(res)
            this.growData.year = res.data.data.first_number;
            this.growData.times = res.data.data.second_number;
            this.growData.organizations = res.data.data.third_number;
            this.growData.students = res.data.data.fourth_number;
        });
        // console.log(this.growData)
    },
    updated() {
        //判断的当前位于哪一个栏目
        let currentRouter = this.$route.path;
        this.currentView = currentRouter.split("/").pop();
    },
    mounted() {
        //绑定监听
        window.addEventListener("scroll", this.handleScroll);
    },
    computed: {
        ...mapState({
            isLogin: state => state.isLogin
        })
    },
    destroyed() {
        //离开该页面需要移除这个监听的事件
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        toggleTabs(index) {
            this.nowIndex = index;
        },
        linkserver(link) {
            // console.log(link);
            this.$router.push({
                path: link,
                query: {}
            });
        },
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            // console.log(scrollTop);
            let beforeHeight =
                document.querySelector(".header").offsetHeight +
                document.querySelector(".banner").offsetHeight +
                document.querySelector(".word_cloud").offsetHeight +
                document.querySelector(".yiEdu").offsetHeight +
                document.querySelector(".yiHelp").offsetHeight +
                document.querySelector(".yiServer").offsetHeight;
            // console.log(beforeHeight);
            if (scrollTop > beforeHeight) {
                this.growNumber(this.$refs.growYear, this.growData.year);
                this.growNumber(this.$refs.growTimes, this.growData.times);
                this.growNumber(
                    this.$refs.growOrgNum,
                    this.growData.organizations
                );
                this.growNumber(this.$refs.growStuNum, this.growData.students);
            } else {
                this.$refs.growYear.innerHTML = 0;
                this.$refs.growTimes.innerHTML = 0;
                this.$refs.growOrgNum.innerHTML = 0;
                this.$refs.growStuNum.innerHTML = 0;
            }
            if (scrollTop > 3700) {
                this.showTime = true;
            }
        },
        growNumber(ele, aim) {
            //判断目标值数数据量大小，为后面正则判断做准备
            let _this = this;
            let realNum = ele.innerHTML.split(",");
            let res = realNum.join("");
            if (res == aim) {
                return;
            }
            if (Math.floor(aim / 10) <= 1) {
                let step = 1;
                let current = 0;
                let start = 1;
                let t = setInterval(function() {
                    start += step;
                    if (start > aim) {
                        clearInterval(t);
                        start = aim;
                        t = null;
                    }
                    if (current === start) {
                        return;
                    }
                    current = start;
                    ele.innerHTML = current.toString();
                    // .replace(/(\d)(?=(?:\d{1}[+]?)+$)/g, "$1,");
                }, 500);
            } else if (1 < Math.floor(aim / 10) && Math.floor(aim / 10) < 20) {
                let step = 3;
                let current = 0;
                let start = 130;
                let t = setInterval(function() {
                    start += step;
                    if (start > aim) {
                        clearInterval(t);
                        start = aim;
                        t = null;
                    }
                    if (current === start) {
                        return;
                    }
                    current = start;
                    ele.innerHTML = current.toString();
                    // .replace(/(\d)(?=(?:\d{2}[+]?)+$)/g, "$1,");
                }, 200);
            } else if (Math.floor(aim / 10) >= 20) {
                let step = 4;
                let current = 0;
                let start = 450;
                let t = setInterval(function() {
                    start += step;
                    if (start > aim) {
                        clearInterval(t);
                        start = aim;
                        t = null;
                    }
                    if (current === start) {
                        return;
                    }
                    current = start;
                    ele.innerHTML = current.toString();
                    // .replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,");
                }, 100);
            }
        }
    }
};
</script>
<style scoped lang="less">
.banner {
    width: 100%;
    height: 595px;
    overflow: hidden;
    text-align: center;
    .banner_item {
        img {
            display: block;
            width: 1920px;
            height: 595px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -960px;
            margin-top: -297px;
        }
        .el-carousel__item {
            a {
                display: block;
                height: 100%;
            }
            .guide {
                position: absolute;
                font-family: PFregular;
                font-weight: 500;
                font-size: 30px;
                color: #ffffff;
                top: 250px;
                left: 360px;
            }
            .free_trial {
                cursor: pointer;
                position: absolute;
                font-size: 20px;
                top: 483px;
                left: 360px;
                text-align: center;
                color: #ffffff;
                width: 180px;
                height: 56px;
                line-height: 36px;
                padding: 10px 0;
                border-radius: 8px;
                background: linear-gradient(
                    180deg,
                    rgba(255, 221, 135, 1) 0%,
                    rgba(246, 185, 84, 1) 100%
                );
                i:before {
                    font-size: 20px;
                }
            }
        }
        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }
        .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
        }
    }
}
main > div {
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
.word_cloud:before {
    display: none;
}
.yiEdu {
    width: 1200px;
    padding-bottom: 45px;
    margin: 0 auto;
    .column {
        text-align: center;
    }
    .sixAdv {
        width: 100%;
        .tab {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            margin-bottom: 3px;
            flex-wrap: nowrap;
            li {
                width: 16.6%;
                height: 80px;
                padding: 10px 0;
                font-size: 24px;
                line-height: 30px;
                text-align: center;
                font-weight: 500;
                cursor: pointer;
                &.active {
                    border-bottom: 3px solid #4a90e2;
                    color: #4a90e2;
                }
            }
        }
        .container {
            width: 100%;
            margin: 0 auto;
            text-align: center;
            & > div {
                position: relative;
                width: 1200px;
                height: 360px;
                margin: 0 auto;
                margin-top: -2px;
                display: flex;
                padding: 38px 0 38px 100px;
                border-radius: 10px;
                background: url("~@/assets/images/home/qipao.png") no-repeat
                    center;
                background-size: contain;
                box-shadow: 4px 4px 30px 0px rgba(174, 173, 173, 0.5);
            }
        }
    }
}
.yiAchi {
    width: 100%;
    // border-bottom: 1px solid #cccccc;
    height: 600px;
    background: url("~@/assets/images/home/achi.png") center;
    h1 {
        margin: 30px 0;
        padding: 70px;
        text-align: center;
        line-height: 60px;
        font-size: 36px;
        color: #ffffff;
        span {
            background: #ffffff;
        }
    }
    .rollData {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        color: #ffffff;
        font-family: PFregular;
        .grow {
            width: 25%;
            text-align: center;
            h3 {
                display: inline-block;
                font-size: 70px;
                line-height: 70px;
                height: 70px;
            }
            p {
                padding: 30px 0;
                font-size: 22px;
                line-height: 30px;
                // span{}
            }
        }
        & > .grow:not(:last-child) {
            border-right: 4px solid #ffffff;
        }
    }
    .konwMore {
        padding-top: 40px;
        div {
            width: 184px;
            height: 60px;
            color: #ffffff;
            font-size: 20px;
            font-weight: 500;
            box-sizing: border-box;
            border-radius: 8px;
            margin: 40px auto;
            line-height: 60px;
            text-align: center;
            cursor: pointer;
            background: linear-gradient(
                360deg,
                rgba(103, 144, 219, 1) 0%,
                rgba(74, 144, 226, 1) 100%
            );
            i:before {
                font-size: 20px;
            }
        }
    }
    &:before {
        display: none;
    }
}
.yiPartner:before {
    display: none;
}
</style>
<style>
.with_person .el-carousel__arrow.el-carousel__arrow--left {
    left: 0;
    top: 185px;
    width: 60px;
    height: 120px;
    background: url("~@/assets/images/home/left.png") no-repeat center;
}
.with_person .el-carousel__arrow.el-carousel__arrow--right {
    right: 0;
    top: 185px;
    width: 60px;
    height: 120px;
    background: url("~@/assets/images/home/right.png") no-repeat center;
}
</style>
