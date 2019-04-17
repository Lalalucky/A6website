<template>
    <header class="header">
        <div class="headerTop" @mouseleave="destoryIndex()">
            <div class="logo">
                <router-link tag="div" to="/">
                    <div class="logoArea">
                        <img
                            src="../assets/images/home/LOGO.png"
                            alt="易教育A6"
                            width="160"
                            height="60"
                        >
                    </div>
                </router-link>
            </div>
            <div class="navs">
                <div class="item">
                    <router-link tag="div" to="/" class="nav">
                        <div
                            @mouseover="getIndex(0,$event)"
                            :class="[this.index==0?'underline':'']"
                        >首页</div>
                    </router-link>
                </div>
                <div class="item">
                    <router-link tag="div" to="/solutions/index" class="nav">
                        <div
                            @mouseover="getIndex(1,$event)"
                            :class="[this.index==1?'underline':'']"
                        >解决方案</div>
                    </router-link>
                </div>
                <div class="item">
                    <router-link tag="div" to="/productsIntro/index" class="nav">
                        <!-- <transition name='navbar'> -->
                        <div
                            @mouseover="getIndex(2,$event)"
                            :class="[this.index==2?'underline':'']"
                        >产品介绍</div>
                        <!-- </transition> -->
                    </router-link>
                </div>
                <div class="item">
                    <!-- <router-link tag="div" to="/academe" class="nav">
                        <div
                            @mouseover="getIndex(3,$event)"
                            :class="[this.index==3?'underline':'']"
                        >易教育学苑</div>
                    </router-link>-->
                    <div class="nav">
                        <div
                            @mouseover="getIndex(3,$event)"
                            :class="[this.index==3?'underline':'']"
                        >易教育学苑</div>
                    </div>
                </div>
                <div class="item">
                    <router-link tag="div" to="/cooprations/index" class="nav">
                        <div
                            @mouseover="getIndex(4,$event)"
                            :class="[this.index==4?'underline':'']"
                        >合作案例</div>
                    </router-link>
                </div>
                <div class="item">
                    <router-link tag="div" to="/server/index" class="nav">
                        <div
                            @mouseover="getIndex(5,$event)"
                            :class="[this.index==5?'underline':'']"
                        >服务支持</div>
                    </router-link>
                </div>
                <div class="item">
                    <router-link tag="div" to="/contactUs/index" class="nav">
                        <div
                            @mouseover="getIndex(6,$event)"
                            :class="[this.index==6?'underline':'']"
                        >联系我们</div>
                    </router-link>
                </div>
            </div>
            <div class="loginAbout">
                <router-link tag="div" class="btn" to="/register">注册</router-link>
            </div>
            <transition
                name="fade"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
            >
                <div
                    class="solutions"
                    ref="navbar"
                    animate-delay="1000ms"
                >
                    <div class="sixDisp">
                        <div @click="solutions(1)">营销</div>
                        <div @click="solutions(2)">招生转化</div>
                        <div @click="solutions(3)">业务升级</div>
                        <div @click="solutions(4)">教务教研</div>
                        <div @click="solutions(5)">信息职教</div>
                        <div @click="solutions(6)">一站到底</div>
                    </div>
                </div>
            </transition>
            <!--------------- 易教育学苑的层级路由 ------------------------->
            <div class="news_warp" v-show="this.needShow==3">
                <div class="yi_router">
                    <div class="first_level">
                        <h3>办学干货</h3>
                        <div class="second_evel">营销策划</div>
                        <div class="second_evel">招生转化</div>
                        <div class="second_evel">机构管理</div>
                        <div class="second_evel">其他干货</div>
                    </div>
                    <div class="first_level">
                        <h3>政策热点</h3>
                        <div class="second_evel">证书相关</div>
                        <div class="second_evel">政策文件</div>
                        <div class="second_evel">行业新闻</div>
                        <div class="second_evel">报考百科</div>
                    </div>
                    <div class="first_level">
                        <h3>福利下载</h3>
                        <div class="second_evel">办学礼包</div>
                        <div class="second_evel">知识课程</div>
                        <div class="second_evel">行业报告</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Top",
    props: ["index"],
    data() {
        return {
            needShow: 0,
            nowIndex: 0
        };
    },
    mounted() {
        //固定头部
        window.addEventListener("scroll", this.setHead);
        //获取头部地址
    },
    methods: {
        getIndex(index, event) {
            this.needShow = index;
            // let el = event.currentTarget;
            // el.style.borderBottom = "3px solid red";
        },
        destoryIndex() {
            this.needShow == 1
                ? (this.needShow = -1)
                : (this.needShow = this.nowIndex);
        },
        goToLogin() {
            this.$router.push({
                path: "/home/login",
                query: {}
            });
        },
        goToRegister() {
            this.$router.push({
                path: "/home/register",
                query: {}
            });
        },
        setHead() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            let header = document.querySelector(".header");
            let headerHeight = header.offsetHeight;
            if (scrollTop > headerHeight) {
                header.style.position = "fixed";
                header.style.top = 0;
            } else {
                header.style.position = "static";
                header.style.boxShadow = "none";
            }
        },
        solutions(index) {
            // window.location.href=''
            window.location.href = "../solutions/detial";
            // this.$router.back();
            // this.$router.push({
            //     path: "solutions/detial",
            //     query: {
            //         id: index
            //     }
            // });
        }
    }
};
</script>

<style scoped lang="less">
@import "~@/assets/global.less";

.header {
    width: 100%;
    line-height: 60px;
    text-align: center;
    z-index: 100;
    background: #ffffff;
    .headerTop {
        width: 1200px;
        display: flex;
        margin: 0 auto;
        height: 60px;
        .logoArea {
            width: 300px;
            height: 60px;
            text-align: center;
            img {
                display: block;
                padding: 12px 0;
            }
        }
        .navs {
            width: 720px;
            display: flex;
            .nav {
                width: 100px;
                height: 60px;
                cursor: pointer;
                box-sizing: border-box;
                &:hover {
                    color: #000000;
                }
                div {
                    width: 90%;
                    height: 60px;
                    margin: 0 auto;
                    box-sizing: border-box;
                    font-family: PFregular;
                    &.underline {
                        border-bottom: 3px solid #4a90e2;
                    }
                    &:hover {
                        border-bottom: 3px solid #4a90e2;
                    }
                }
            }
        }
        .fade-enter-active {
            transition: opacity 0.5s;
        }
        .fade-leave-active {
            transition: opacity 1.5s;
        }
        .loginAbout {
            width: 180px;
            justify-content: space-around;
            .btn {
                width: 60px;
                line-height: 30px;
                margin: 15px auto;
                background: linear-gradient(
                    360deg,
                    rgba(103, 144, 219, 1) 0%,
                    rgba(118, 157, 234, 1) 100%
                );
                color: rgba(255, 255, 255, 1);
                border-radius: 8px;
                font-family: PFregular;
                cursor: pointer;
            }
        }
        .solutions {
            position: absolute;
            left: 0;
            top: 60px;
            width: 100%;
            background: #ffffff;
            z-index: 100;
            .sixDisp {
                width: 1200px;
                margin: 0 auto;
                display: flex;
                padding: 15px 0;
                justify-content: center;
                div {
                    height: 40px;
                    padding: 5px;
                    line-height: 30px;
                    border-radius: 5px;
                }
            }
        }
        .news_warp {
            position: absolute;
            left: 0;
            top: 60px;
            width: 100%;
            background: #ffffff;
            z-index: 100;
            .yi_router{
                padding: 30px 0;
                width: 1200px;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                .first_level{
                    width: 15%;
                    text-align: center;
                    h3{
                        font-size:18px;
                        font-weight:400;
                        color:rgba(43,43,43,1);
                        line-height:25px;
                    }
                    div{
                        font-size:14px;
                        font-weight:400;
                        color:rgba(146,146,146,1);
                        line-height:20px;
                    }
                }
            }
        }
    }
}
</style>
