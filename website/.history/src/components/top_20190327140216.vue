<template>
    <header class="header">
        <div class="headerTop" @mouseleave="getIndex(0)">
            <el-row>
                <el-col :span="4">
                    <div class="logoArea">LOGO</div>
                </el-col>
                <el-col :span="16">
                    <el-row class="navs" type="flex">
                        <el-col :span="3">
                            <router-link tag="div" to="/" class="nav">
                                <div class="nav" @mouseover="getIndex(0)">首页</div>
                            </router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link tag="div" to="/solutions/index">
                                <div class="nav" @mouseover="getIndex(1)">解决方案</div>
                            </router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link tag="div" to="/productsIntro/index">
                                <div class="nav" @mouseover="getIndex(2)">产品介绍</div>
                            </router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link tag="div" to="/academe/index">
                                <div class="nav" @mouseover="getIndex(2)">易学苑</div>
                            </router-link>
                        </el-col>
                        <el-col :span="3">
                            <div class="nav">合作案例</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="nav">服务支持</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="nav">联系我们</div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <el-row class="loginAbout" type="flex">
                        <el-col :span="12">
                            <router-link tag="div" class="btn" to='/register'>注册</router-link>
                        </el-col>
                        <el-col :span="12">
                            <router-link tag="div" class="btn" to='/login'>登录</router-link>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <transition
                name="fade"
                enter-active-class="animated pulse"
                leave-active-class="animated fadeOutDown"
            >
                <div class="solutions" v-show="this.needShow==1">
                    <div class="sixDisp">
                        <div>解决方案</div>
                        <div>解决方案</div>
                        <div>解决方案</div>
                        <div>解决方案</div>
                        <div>解决方案</div>
                        <div>解决方案</div>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script>
export default {
    name: "Top",
    props:['index'],
    data() {
        return {
            needShow: 0
        };
    },
    mounted(){
        //固定头部
        window.addEventListener("scroll", this.setHead);
        //获取头部地址
        
    },
    methods: {
        getIndex(index) {
            this.needShow = index;
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
         setHead(){
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
                let header=document.querySelector('.header');
                let headerHeight = header.offsetHeight ;
            if( scrollTop> headerHeight){
                header.style.position = "fixed";
                header.style.top=0;
                header.style.boxShadow = "0px 1px 1px 1px #ececec";
            }else{
                header.style.position = "static";
                header.style.boxShadow = "none";
            }
        }
    }
};
</script>

<style scoped lang="less">
@import "~@/assets/global.less";

header {
    width: 100%;
    // overflow: hidden;
    display: block;
    line-height: 60px;
    text-align: center;
    background: #ffffff;
    z-index: 100;
    border-bottom: 1px solid #cccccc;
    .headerTop {
        height: 60px;
        .logoArea {
            height: 60px;
        }
        .navs .nav {
            cursor: pointer;
            &:hover {
                color: @base_color;
            }
        }
        .fade-enter-active,
        .fade-leave-active {
            transition: opacity 0.5s;
        }
        .loginAbout {
            justify-content: space-around;
            // margin: 0;
            div {
                width: 33%;
                .btn {
                    width: 100%;
                    height: 40px;
                    margin-top: 9px;
                    line-height: 40px;
                    border: 1px solid #ececec;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
        }
        .solutions {
            position: absolute;
            top: 60px;
            width: 100%;
            background-color:rgba(0,0,0,.4);
            z-index: 100;
            .sixDisp {
                width: 80%;
                margin: 0 auto;
                display: flex;
                padding: 15px;
                justify-content: space-around;
                div {
                    width: 8%;
                    height: 40px;
                    padding: 5px;
                    line-height: 30px;
                    border-radius: 5px;
                    color: #ffffff;
                    border: 1px solid #ececec;
                }
            }
        }
    }
}
</style>
