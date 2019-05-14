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
                <div class="item">
                    <a class="nav" href="http://www.yunbaonet.cn/" target="_blank">
                        <div>关于云宝</div>
                    </a>
                </div>
            </div>
            <!-- <div class="loginAbout">
                <router-link tag="div" class="btn" to="/register">注册</router-link>
            </div>-->
            <transition
                name="fade"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
            >
                <div
                    class="solutions"
                    ref="navbar"
                    v-show="this.needShow==1"
                    animate-delay="1000ms"
                >
                    <div class="sixDisp">
                        <router-link tag="div" to="/solutions/detial?id=1" class="nav">
                            <div>营销传播</div>
                        </router-link>
                        <router-link tag="div" to="/solutions/detial?id=2" class="nav">
                            <div>招生转化</div>
                        </router-link>
                        <router-link tag="div" to="/solutions/detial?id=3" class="nav">
                            <div>业务升级</div>
                        </router-link>
                        <router-link tag="div" to="/solutions/detial?id=4" class="nav">
                            <div>教务教研</div>
                        </router-link>
                        <router-link tag="div" to="/solutions/detial?id=5" class="nav">
                            <div>数据管控</div>
                        </router-link>
                        <router-link tag="div" to="/solutions/detial?id=6" class="nav">
                            <div>继续教育</div>
                        </router-link>
                    </div>
                </div>
            </transition>
            <!--------------- 易教育学苑的层级路由 ------------------------->
            <div class="news_wrap" v-show="this.needShow==3">
                <div class="yi_router">
                    <div class="first_level" v-for="(first,index) in this.news_wrap" :key="index">
                        <h3>{{first.name}}</h3>
                        <div
                            class="second_level"
                            v-for="(second,i) in first.children"
                            :key="i"
                            :data-id="second.id"
                            @click="goToArticle(second.id)"
                            :class="calculate(second.id)"
                        >{{second.name}}</div>
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
            nowIndex: 0,
            news_wrap: []
        };
    },
    created() {
        //获取一级栏目和二级栏目
        this.postRequest("v1/application/get-two-column").then(res => {
            // console.log(res.data.data)
            this.news_wrap = res.data.data;
            // console.log(this.news_wrap)
        });
    },
    watch: {
        $route() {
            if (
                this.$route.path === "/academe/article" ||
                this.$route.path === "/academe/index"
            ) {
                let wenzhang = document.querySelectorAll(".navs .item")[3];
                // console.log(wenzhang)
                wenzhang.classList.add("underline");
            }
        }
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
        // 用以拼凑类名
        calculate(index) {
            let obj = { underline: true };
            if (this.$route.query.column_id == index) {
                return obj;
            }
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
                header.style.boxShadow =
                    "4px 4px 30px 0px rgba(174,173,173,0.5)";
            } else {
                header.style.position = "static";
                // header.style.boxShadow = "none";
            }
        },
        goToArticle(id) {
            //跳转文章列表
            this.$router.replace({
                path: "/academe/index",
                query: {
                    column_id: id
                }
            });
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
    color: #2b2b2b;
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
            width: 900px;
            display: flex;
            flex-wrap: no-wrap;
            .nav {
                display: inline-block;
                width: 110px;
                height: 60px;
                cursor: pointer;
                box-sizing: border-box;
                div {
                    height: 60px;
                    margin: 0 auto;
                    box-sizing: border-box;
                    font-family: PFregular;
                    color: #2b2b2b;
                    cursor: pointer;
                    &.underline {
                        border-bottom: 3px solid #4a90e2;
                        color: #4a90e2;
                    }
                    &:hover {
                        border-bottom: 3px solid #4a90e2;
                        color: #4a90e2;
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
            box-shadow: 0px 0px 5px 0px rgba(182, 182, 183, 1);
            z-index: 100;
            .sixDisp {
                width: 1200px;
                margin: 0 auto;
                display: flex;
                padding: 15px 0;
                justify-content: center;
                color: #2b2b2b;
                & > div {
                    height: 40px;
                    padding: 0 15px;
                    line-height: 40px;
                    position: relative;
                    font-size: 18px;
                    cursor: pointer;
                }
                & > div:not(:last-child):after {
                    content: "";
                    position: absolute;
                    width: 1px;
                    height: 20px;
                    background: rgba(102, 102, 102, 1);
                    right: 0;
                    top: 10px;
                }
            }
        }
        .news_wrap {
            position: absolute;
            left: 0;
            top: 60px;
            width: 100%;
            background: #ffffff;
            box-shadow: 0px 0px 5px 0px rgba(182, 182, 183, 1);
            z-index: 100;
            .yi_router {
                padding: 30px 0;
                width: 1200px;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                .first_level {
                    width: 15%;
                    text-align: center;
                    h3 {
                        font-size: 22px;
                        font-weight: 400;
                        color: rgba(43, 43, 43, 1);
                        line-height: 30px;
                        padding-bottom: 15px;
                        margin-bottom: 15px;
                        border-bottom: 2px solid #b6b6b7;
                    }
                    .second_level {
                        font-size: 14px;
                        font-weight: 400;
                        color: rgba(146, 146, 146, 1);
                        line-height: 22px;
                        cursor: pointer;
                        &:hover {
                            color: #4a90e2;
                        }
                        &.underline {
                            color: #4a90e2;
                        }
                    }
                }
            }
        }
    }
}
</style>
