<template>
    <!-- 官网主页 -->
    <div>
        <Top :index="'0'"></Top>
        <div class="banner">
            <el-carousel :height="658+'px'" :interval=5000 class="banner_item">
                <el-carousel-item v-for="item in banner" :key="item">
                    <img :src="item" alt="">
                    <p class="guide"></p>
                    <router-link tag="h3" class="free_trial" to="/register">免费体验 &gt </router-link>
                </el-carousel-item>
            </el-carousel>
        </div>
        <main>
            <WordCloud></WordCloud>
            <div class="yiEdu">
                <div class="column"><h1 class="theme"><span></span>易教育，能为您带来什么？</h1></div>
                <div class="sixAdv">
                    <ul class="tab">
                        <router-link to="/home/marketing" tag="li">营销</router-link>
                        <router-link to="/home/sell" tag="li">销售</router-link>
                        <router-link to="/home/bussiness" tag="li">业务</router-link>
                        <router-link to="/home/source" tag="li">资源</router-link>
                        <router-link to="/home/controls" tag="li">管控</router-link>
                        <router-link to="/home/education" tag="li">继续教育</router-link>
                    </ul>
                    <div class="container">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
            <YiHelper :h1="'易教育如何帮您实现机构运营全面升级'"></YiHelper>
            <YiServer></YiServer>
            <YiJob></YiJob>
            <div class="yiAchi">
                <h1>专注，让易教育持续为伙伴提供价值</h1>
                <div class="rollData">
                    <div class="grow">
                        <h3>数据</h3>
                        <p>
                            <span ref="growYear" :data-time="time" :data-value="value">0</span>年专注产品打造
                        </p>
                    </div>
                    <div class="grow">
                        <h3>数据</h3>
                        <p>
                            <span ref="growTimes" :data-time="time" :data-value="value">0</span>次产品功能升级
                        </p>
                    </div>
                    <div class="grow">
                        <h3>数据</h3>
                        <p>
                            <span ref="growOrgNum" :data-time="time" :data-value="value">0</span>家机构合作伙伴
                        </p>
                    </div>
                    <div class="grow">
                        <h3>数据</h3>
                        <p>
                            <span ref="growStuNum" :data-time="time" :data-value="value">0</span>位学员使用
                        </p>
                    </div>
                </div>
                <div class="konwMore">
                    <div>免费体验</div>
                </div>
            </div>
            <div class="yiPartner">
                <h1>伙伴的认同，就是最好的口碑</h1>
                <div class="container">
                    <el-carousel
                        :height="450+'px'"
                        arrow="always"
                        :interval="4000"
                        indicator-position="none"
                        class="with_person"
                    >
                        <el-carousel-item v-for="item in 4" :key="item">
                            <div class="every">
                                <div class="mankind">
                                    <div class="photo_frame"></div>
                                    <p>校长介绍{{item}}</p>
                                </div>
                                <div class="wordDisc">
                                    这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛
                                    这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                    <!-- <el-carousel :height="450+'px'" arrow="always" :interval="4000" :indicator-position="none" class="with_person"> -->
                    <el-carousel
                        :height="250+'px'"
                        arrow="never"
                        :interval="4000"
                        indicator-position="outside"
                        :autoplay="false"
                        class="with_brand"
                    >
                        <el-carousel-item v-for="item in 3" :key="item">
                            <div class="img_group">
                                <div class="imgs" v-for="(img,index) in 5" :key="index">{{index}}</div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </main>
        <Register></Register>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import WordCloud from "@/components/wordCloud.vue";
import YiHelper from "@/components/yiHelper.vue";
import YiJob from "@/components/yiJob.vue";
import YiServer from "@/components/yiServer.vue";
import Register from "@/components/linkRegister.vue";
import Footer from "@/components/footer.vue";
import { mapState } from "vuex";
export default {
    name: "",
    props: {
        time: {
            type: Number,
            default: 2
        },
        value: {
            type: Number,
            default: 720000
        }
    },
    data() {
        return {
            banner:[
                require("../../assets/images/home/banner.png"),
                require("../../assets/images/home/banner.png"),
                require("../../assets/images/home/banner.png"),
                ],
            tabParams: ["营销", "销售", "业务", "资源", "管控", "继续教育"],
            nowIndex: 0,
            isShow: false,
            growData: {
                year: 6,
                times: 20,
                organizations: 30,
                students: 720000
            }
        };
    },
    components: {
        Top,
        Register,
        Footer,
        WordCloud,
        YiJob,
        YiHelper,
        YiServer
    },
    updated() {},
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        console.log(this.isLogin)
    },
    computed:{
       ...mapState({
           isLogin:state => state.isLogin
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
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (scrollTop > 2000) {
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
                //  目标值个位数，最多五秒
                let step = 1;
                let current = 0;
                let start = 0;
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
                    ele.innerHTML = current
                        .toString()
                        .replace(/(\d)(?=(?:\d{1}[+]?)+$)/g, "$1,");
                }, 500);
            } else if (1 < Math.floor(aim / 10) && Math.floor(aim / 10) < 20) {
                // 目标值在10~200之间，最多四秒
                let step = 2;
                let current = 0;
                let start = 10;
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
                    ele.innerHTML = current
                        .toString()
                        .replace(/(\d)(?=(?:\d{2}[+]?)+$)/g, "$1,");
                }, 150);
            } else if (Math.floor(aim / 10) >= 20) {
                // 没有其他的数值范围，考虑学员数，按照100,000，最多4秒完成
                let step = 3800;
                let current = 0;
                let start = 400000;
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
                    ele.innerHTML = current
                        .toString()
                        .replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,");
                }, 10);
            }
        }
    }
};
</script>
<style scoped lang="less">
.banner {
    width: 100%;
    height: 600px;
    overflow: hidden;
    .banner_item {
        .el-carousel__item {
            .free_trial {
                cursor: pointer;
                position: absolute;
                top: 70%;
                left: 20%;
                text-align: center;
                color: #ffffff;
                width: 150px;
                height: 40px;
                line-height: 30px;
                padding: 5px 0;
                border: 1px solid #ececec;
                border-radius: 10px;
                background: #FFCA73;
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
    width: 100%;
    & > h1 {
        text-align: center;
        line-height: 60px;
        font-size: 24px;
        margin: 30px 0;
    }
    & .konwMore {
        div {
            width: 8%;
            height: 30px;
            box-sizing: border-box;
            border: 1px solid #ececec;
            border-radius: 15px;
            margin: 20px auto;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
        }
    }
}
.yiEdu {
    width: 62.5%;
    margin: 0 auto;
    padding-bottom: 45px;
    .column{
        text-align: center;
    }
    .sixAdv {
        width: 100%;
        .tab {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            li {
                width: 16.6%;
                height: 50px;
                padding: 10px 0;
                font-size: 24px;
                line-height: 30px;
                text-align: center;
                font-weight: bold;
                cursor: pointer;
            }
        }
        .container {
            width: 90%;
            margin: 0 auto;
            height: 300px;
            padding: 70px 0;
            text-align: center;
            p {
                line-height: 30px;
            }
        }
    }
}
.yiAchi {
    width: 100%;
    border-bottom: 1px solid #cccccc;
    h1 {
        margin: 30px 0;
        text-align: center;
        line-height: 60px;
        font-size: 24px;
    }
    .rollData {
        width: 90%;
        margin: 0 auto;
        display: flex;
        .grow {
            width: 25%;
            text-align: center;
            h3 {
                font-size: 18px;
            }
            p {
                padding: 30px 0;
                font-size: 18px;
                line-height: 30px;
                span {
                    color: orange;
                }
            }
        }
    }
}
.yiPartner {
    .container {
        width: 90%;
        margin: 0 auto;
        .with_person {
            .every {
                width: 80%;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                .mankind {
                    width: 30%;
                    height: 400px;
                    .photo_frame {
                        width: 80%;
                        height: 15vw;
                        margin: 0 auto;
                        border: 1px solid #cccccc;
                    }
                    p {
                        text-align: center;
                        line-height: 30px;
                    }
                }
                .wordDisc {
                    width: 60%;
                    height: 400px;
                    text-indent: 1rem;
                }
            }
        }
        .with_brand {
            width: 90%;
            height: 100%;
            margin: 0 auto;
            .img_group {
                width: 100%;
                display: flex;
                justify-content: space-around;
                .imgs {
                    width: 15%;
                    height: 12vw;
                    box-sizing: border-box;
                    border: 1px solid #999999;
                }
            }
        }
    }
}
</style>
