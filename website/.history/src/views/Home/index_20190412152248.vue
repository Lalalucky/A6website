<template>
    <!-- 官网主页 -->
    <div>
        <outLink></outLink>
        <Top :index="'0'"></Top>
        <div class="banner">
            <el-carousel :height="595+'px'" :interval='4000' class="banner_item">
                <el-carousel-item v-for="item in banner" :key="item">
                    <img :src="item" alt="">
                    <router-link tag="h3" class="free_trial" to="/register">免费体验  <i class="iconfont icon-icon"></i> </router-link>
                </el-carousel-item>
            </el-carousel>
        </div>
        <main>
            <WordCloud></WordCloud>
            <div class="yiEdu">
                <div class="column"><h1 class="theme"><span></span>易教育，能为您带来什么？</h1></div>
                <div class="sixAdv">
                    <ul class="tab">
                        <router-link to="/home/marketing" tag="li" :class="{active:this.currentView=='marketing'}">营销</router-link>
                        <router-link to="/home/sell" tag="li" :class="{active:this.currentView=='sell'}">销售</router-link>
                        <router-link to="/home/bussiness" tag="li" :class="{active:this.currentView=='bussiness'}">业务</router-link>
                        <router-link to="/home/ziyuan" tag="li" :class="{active:this.currentView=='ziyuan'}">资源</router-link>
                        <router-link to="/home/controls" tag="li" :class="{active:this.currentView=='controls'}">管控</router-link>
                        <router-link to="/home/education" tag="li" :class="{active:this.currentView=='education'}">继续教育</router-link>
                    </ul>
                    <div class="container">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
            <YiHelper :h1="'易教育如何帮您实现机构运营全面升级'"></YiHelper>
            <YiServer></YiServer>
            <YiJob :showTime='showTime'></YiJob>
            <div class="yiAchi" :style="rollDataPic">
                <h1 class="theme"><span></span> 专注，让易教育持续为伙伴提供价值</h1>
                <div class="rollData">
                    <div class="grow">
                        <h3>6</h3>
                        <p>
                            <span ref="growYear" :data-time="time" :data-value="value">0</span>年专注产品打造
                        </p>
                    </div>
                    <div class="grow">
                        <h3>20</h3>
                        <p>
                            <span ref="growTimes" :data-time="time" :data-value="value">0</span>次产品功能升级
                        </p>
                    </div>
                    <div class="grow">
                        <h3>30</h3>
                        <p>
                            <span ref="growOrgNum" :data-time="time" :data-value="value">0</span>家机构合作伙伴
                        </p>
                    </div>
                    <div class="grow">
                        <h3>720,000</h3>
                        <p>
                            <span ref="growStuNum" :data-time="time" :data-value="value">0</span>位学员使用
                        </p>
                    </div>
                </div>
                <div class="konwMore">
                    <div :style="konwMorePic"></div>
                </div>
            </div>
            <div class="yiPartner">
                <h1 class="theme"><span></span>伙伴的认同，就是最好的口碑</h1>
                <div class="container">
                    <el-carousel
                        :height="450+'px'"
                        arrow="always"
                        :interval="4000"
                        indicator-position="none"
                        class="with_person"
                    >
                        <el-carousel-item v-for="item in with_person" :key="item">
                            <div class="every">
                                <div class="mankind">
                                    <div class="photo_frame">
                                        <img :src="item" alt="">
                                    </div>
                                    <p>海绵宝宝和派大星</p>
                                    <p>快乐的源泉</p>
                                    <p>谁不想做一只快乐的海星</p>
                                </div>
                                <div class="wordDisc">
                                    准备好了吗？孩子们？ 是的，船长 太小声罗 是的，船长 哦~是谁住在深海的大菠萝里 海绵宝宝 方方黄黄伸缩自如 海绵宝宝 如果四处探险是你的愿望 海绵宝宝 那就敲敲甲板让大鱼开路 海绵宝宝 准备… 海绵宝宝，海绵宝宝，海绵宝宝，海绵宝宝♪♪♪ ♪♪♪
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                    <div class="cooper_display">
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/云豆.png" alt="">
                            <img src="../../assets/images/合作伙伴/云豆0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/泰州.png" alt="">
                            <img src="../../assets/images/合作伙伴/泰州0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/鲁班.png" alt="">
                            <img src="../../assets/images/合作伙伴/鲁班0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/金职.png" alt="">
                            <img src="../../assets/images/合作伙伴/金职0.png" alt="">
                        </div>

                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/华睿.png" alt="">
                            <img src="../../assets/images/合作伙伴/华睿0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/通州.png" alt="">
                            <img src="../../assets/images/合作伙伴/通州0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/南京建培.png" alt="">
                            <img src="../../assets/images/合作伙伴/南京建培0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/易直学.png" alt="">
                            <img src="../../assets/images/合作伙伴/易直学0.png" alt="">
                        </div>

                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/三成.png" alt="">
                            <img src="../../assets/images/合作伙伴/三成0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/扬州.png" alt="">
                            <img src="../../assets/images/合作伙伴/扬州0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/镇江.png" alt="">
                            <img src="../../assets/images/合作伙伴/镇江0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/瑞宁.png" alt="">
                            <img src="../../assets/images/合作伙伴/瑞宁0.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Register></Register>
        <Footer></Footer>
    </div>
</template>

<script>
import outLink from "@/components/outsideLink.vue"
import Top from "@/components/top.vue";
import WordCloud from "@/components/wordCloud.vue";
import YiHelper from "@/components/yiHelper.vue";
import YiJob from "@/components/yiJob.vue";
import YiServer from "@/components/yiServer.vue";
import Register from "@/components/linkRegister.vue";
import Footer from "@/components/footer.vue";
import { mapState } from "vuex";
// import { url } from 'inspector';
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
                require("../../assets/images/home/indexBanner.png"),
                ],
            tabParams: ["营销", "销售", "业务", "资源", "管控", "继续教育"],
            nowIndex: 0,
            isShow: false,
            growData: {
                year: 6,
                times: 20,
                organizations: 30,
                students: 720000
            },
            currentView:'marketing',
            showTime:false,
            rollDataPic:{
                backgroundImage:'url('+require('../../assets/images/home/achi.png')+')'
            },
            konwMorePic:{
                backgroundImage:'url('+require('../../assets/images/home/免费体验.png')+')'
            },
            with_person:[
                require("../../assets/images/home/with_person1.jpeg"),
                require("../../assets/images/home/with_person2.png"),
                require("../../assets/images/home/with_person3.jpg"),
            ],
            
        };
    },
    components: {
        Top,
        Register,
        Footer,
        WordCloud,
        YiJob,
        YiHelper,
        YiServer,
        outLink
    },
    created(){
    },
    updated() {
        let currentRouter=this.$route.path;
        this.currentView =  currentRouter.split('/').pop();
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
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
            if( scrollTop>3700 ){
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
    height: 595px;
    overflow: hidden;
    text-align: center;
    .banner_item {
        img{
            width: 1920px;
            height: 595px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -960px;
            margin-top: -297px;
            }
        .el-carousel__item {
            .guide{
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
                left: 50%;
                margin-left: -53px;
                text-align: center;
                color: #ffffff;
                width: 180px;
                height: 56px;
                line-height: 30px;
                padding: 10px 0;
                border-radius: 8px;
                background:linear-gradient(180deg,rgba(255,221,135,1) 0%,rgba(246,185,84,1) 100%);
                i:before{
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
    & > h1 {
        text-align: center;
        line-height: 60px;
        font-size: 24px;
        margin: 30px 0;
    }
}
.yiEdu {
    width: 100%;
    padding-bottom: 45px;
    .column{
        text-align: center;
    }
    .sixAdv {
        width: 100%;
        .tab {
            width: 62.5%;
            margin: 0 auto;
            display: flex;
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
                &.active{
                    border-bottom: 3px solid #4A90E2;
                    color: #4A90E2;
                }
            }
        }
        .container {
            width: 100%;
            margin: 0 auto;
            text-align: center;
            &>div{
                position: relative;
                width: 1200px;
                height: 360px;
                margin: 0 auto;
                margin-top: -2px;
                display: flex;
                padding: 38px 100px;
                background:url('~@/assets/images/home/qipao.png') no-repeat center;
                background-size: contain;
                box-shadow:4px 4px 30px 0px rgba(174,173,173,0.5);
            }
        }
    }
}
.yiAchi {
    width: 100%;
    border-bottom: 1px solid #cccccc;
    height: 534px;
    h1 {
        margin: 30px 0;
        padding: 70px;
        text-align: center;
        line-height: 60px;
        font-size: 36px;
        color: #ffffff;
        span{
            background: #ffffff;
        }
    }
    .rollData {
        width: 70%;
        margin: 0 auto;
        display: flex;
        color: #ffffff;
        font-family: PFregular;
        .grow {
            width: 25%;
            text-align: center;
            h3 {
                font-size: 40px;
                line-height: 56px;
            }
            p {
                padding: 30px 0;
                font-size: 22px;
                line-height: 30px;
                // span{}
            }
        }
        &>.grow:not(:last-child){
            border-right: 4px solid #ffffff;
        }
    }
    .konwMore {
        padding-top: 40px;
        div {
            width: 180px;
            height: 56px;
            box-sizing: border-box;
            border-radius:47px;
            margin: 20px auto;
            line-height: 56px;
            text-align: center;
            cursor: pointer;
            background: no-repeat center top;
            background-size:contain;
        }
    }
}
.yiPartner {
    .container {
        width: 62.5%;
        margin: 0 auto;
        .with_person {
            .every {
                width: 80%;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                .mankind {
                    width: 30%;
                    height: 250px;
                    .photo_frame {
                        width: 242px;
                        height: 250px;
                        margin: 0 auto;
                        border: 1px solid #cccccc;
                        overflow: hidden;
                        img{
                            display: block;
                            width: 242px;
                            height: 250px;
                        }
                    }
                    p {
                        font-family:PFregular;
                        text-align: center;
                        line-height: 28px;
                        font-size:20px;
                    }
                    &>p:nth-child(2){
                        font-weight:500;
                        color:rgba(64,64,64,1);
                    }
                    &>p:nth-child(3){
                        font-weight:400;
                        color:rgba(68,68,68,1);
                    }
                    &>p:nth-child(4){
                        font-weight:400;
                        color:rgba(68,68,68,1);
                    }
                }
                .wordDisc {
                    width: 60%;
                    height: 400px;
                    text-indent: 1rem;
                }
            }
        }
        .cooper_display{
            display: flex;
            height: 200px;
            flex-wrap: wrap;
            .showItem{
                width: 25%;
                height:60px;
                text-align: center;
                position: relative;
                img{
                    // display: block;
                    position: absolute;
                }
                &:hover img:nth-child(2){
                    display: none;
                }
            }
        }
    }
}
</style>
<style>
.with_person .el-carousel__arrow.el-carousel__arrow--left{
    left: 0;
    top: 185px;
    width: 60px;
    height: 120px;
    background:url('~@/assets/images/home/left.png') no-repeat center;
}
.with_person .el-carousel__arrow.el-carousel__arrow--right{
    right: 0;
    top: 185px;
    width: 60px;
    height: 120px;
    background:url('~@/assets/images/home/right.png') no-repeat center;
}
</style>
