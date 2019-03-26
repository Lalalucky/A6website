<template>
    <header class="header">
        <div class="headerTop" @mouseleave="getIndex(0)">
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="logoArea">LOGO</div>
                </el-col>
                <el-col :span="16">
                    <el-row :gutter="10" class="navs" type="flex">
                        <el-col :span="3">
                            <router-link tag="div" to="/solutions/index" class="nav">首页</router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link tag="div" to="/solutions/index" class="nav" @mouseover="getIndex(1)">解决方案</router-link>
                        </el-col>
                        <el-col :span="3">
                            <div class="nav">产品介绍</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="nav">易学苑</div>
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
                    <el-row :gutter="10" class="loginAbout" type="flex">
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
    data() {
        return {
            needShow: 0
        };
    },
    methods: {
        getIndex(index) {
            console.log(index)
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
            background: #ffffff;
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
                    border: 1px solid #ececec;
                }
            }
        }
    }
}
</style>
