<template>
    <div class="yi_job">
        <h1 class="theme">我们将如何开展工作</h1>
        <div class="container">
            <div class="buildPath">
                <transition-group
                    enter-active-class="fadeInLeft"
                    leave-active-class
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                >
                    <div
                        class="tache animated"
                        :key="1"
                        v-show="showTime"
                        animate-delay="0s"
                        animate-duration="400ms"
                    >
                        <img src="../assets/images/home/项目启动.png" alt>
                        <h3>项目启动</h3>
                        <p>确认实施方案</p>
                        <p>确认项目负责人</p>
                        <img src="../assets/images/home/rightArrow.png" alt class="rightArrow">
                    </div>
                    <div
                        class="tache animated"
                        :key="2"
                        v-show="showTime"
                        animate-delay="400ms"
                        animate-duration="400ms"
                    >
                        <img src="../assets/images/home/系统部署.png" alt>
                        <h3>系统部署</h3>
                        <p>系统搭建</p>
                        <p>确认架构体系</p>
                        <p>应用测试</p>
                        <p>环境部署</p>
                        <img src="../assets/images/home/rightArrow.png" alt class="rightArrow">
                    </div>
                    <div
                        class="tache animated"
                        :key="3"
                        v-show="showTime"
                        animate-delay="800ms"
                        animate-duration="400ms"
                    >
                        <img src="../assets/images/home/数据导入.png" alt>
                        <h3>数据导入</h3>
                        <p>准备初始数据</p>
                        <p>导入数据</p>
                        <p>核对数据</p>
                        <img src="../assets/images/home/rightArrow.png" alt class="rightArrow">
                    </div>
                    <div
                        class="tache animated"
                        :key="4"
                        v-show="showTime"
                        animate-delay="1200ms"
                        animate-duration="400ms"
                    >
                        <img src="../assets/images/home/系统培训.png" alt>
                        <h3>系统培训</h3>
                        <p>按岗位角色</p>
                        <p>定点培训</p>
                        <img src="../assets/images/home/rightArrow.png" alt class="rightArrow">
                    </div>
                    <div
                        class="tache animated"
                        :key="5"
                        v-show="showTime"
                        animate-delay="1600ms"
                        animate-duration="400ms"
                    >
                        <img src="../assets/images/home/服务跟踪.png" alt>
                        <h3>服务跟踪</h3>
                        <p>系统试运营</p>
                        <p>验收数据</p>
                        <img src="../assets/images/home/rightArrow.png" alt class="rightArrow">
                    </div>
                    <div
                        class="tache animated"
                        :key="6"
                        v-show="showTime"
                        animate-delay="2000ms"
                        animate-duration="400ms"
                    >
                        <img src="../assets/images/home/运营指导.png" alt>
                        <h3>运营指导</h3>
                        <p>持续跟进回访</p>
                        <p>长期服务支持</p>
                    </div>
                </transition-group>
            </div>
        </div>
        <div class="knowMore">
            <!-- <router-link tag="div" class="free_trial" to="/register">
                立即体验
                <i class="iconfont icon-icon"></i>
            </router-link>-->
            <div class="free_trial">
                <a href="http://www.yunbaonet.cn/?yijiaoyu=true" target="_blank">
                    立即体验
                    <i class="iconfont icon-icon"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "YiJob",
    props: ["showTime"],
    data() {
        return {};
    },
    mounted() {},
    components: {},
    methods: {
        beforeEnter: function(el) {
            var delay = el.getAttribute("animate-delay"),
                duration = el.getAttribute("animate-duration");
            // console.log('attr:' + delay, duration);
            var cssObj = {
                "animation-delay": delay,
                "-webkit-animation-delay": delay,
                "animation-duration": duration,
                "-webkit-animation-duration": duration,
                opacity: 0
            };
            var getCssText = function(obj) {
                var text = [];
                for (var o in obj) {
                    text.push(o + ":" + obj[o]);
                }
                return text.join(";");
            };
            el.style.cssText = getCssText(cssObj);
        },
        enter: function(el, done) {
            el.style.opacity = 1;
        }
    }
};
</script>

<style scoped lang="less">
.yi_job {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 80px;
    .container .buildPath > span {
        width: 100%;
        margin: 45px auto;
        display: flex;
        flex-wrap: wrap;
        .tache {
            position: relative;
            margin: 15px 0;
            width: 16.6%;
            text-align: center;
            opacity: 0;
            transition: 400ms;
            h3 {
                font-size: 18px;
                font-weight: bold;
                margin: 5px 0;
            }
            p {
                margin: 5px;
                color: #666666;
            }
            .rightArrow {
                position: absolute;
                top: 45px;
                right: -10px;
                width: 37px;
                height: 30px;
            }
        }
    }
    .knowMore {
        div {
            width: 180px;
            height: 56px;
            color: rgba(74, 144, 226, 1);
            border: 2px solid rgba(74, 144, 226, 1);
            // color: #ffffff;
            font-size: 20px;
            font-weight: 500;
            box-sizing: border-box;
            border-radius: 8px;
            margin: 20px auto;
            line-height: 56px;
            text-align: center;
            cursor: pointer;
            // background:linear-gradient(360deg,rgba(103,144,219,1) 0%,rgba(118,157,234,1) 100%);
            background: transparent;
            a {
                display: block;
                cursor: pointer;
                background: transparent;
                color: rgba(74, 144, 226, 1);
            }
            img {
                vertical-align: text-bottom;
            }
            i:before {
                font-size: 20px;
            }
            &:hover {
                background: rgba(74, 144, 226, 1);
                color: #ffffff;
                a {
                    color: #ffffff;
                }
            }
        }
    }
}
</style>
