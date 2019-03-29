<template>
    <header class="header">
        <div class="headerTop" @mouseleave="getIndex(0)">
            <el-row>
                <el-col :span="4">
                    <router-link tag="div" to='/'>
                        <div class="logoArea">LOGO</div>
                    </router-link>
                </el-col>
                <el-col :span="16">
                    <el-row class="navs" type="flex">
                        <el-col :span="3">
                            <router-link tag="div" to="/" class="nav">
                                <div @mouseover="getIndex(0)" :class="[this.index==0?'underline':'']">首页</div>
                            </router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link tag="div" to="/solutions/index" class="nav">
                                <div @mouseover="getIndex(1)" :class="[this.index==1?'underline':'']">解决方案</div>
                            </router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link tag="div" to="/productsIntro/index" class="nav">
                                <div @mouseover="getIndex(2)" :class="[this.index==2?'underline':'']">产品介绍</div>
                            </router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link tag="div" to="/academe/index" class="nav">
                                <div @mouseover="getIndex(3)" :class="[this.index==3?'underline':'']">易学苑</div>
                            </router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link tag="div" to="/cooprations/index" class="nav">
                                <div @mouseover="getIndex(4)" :class="[this.index==4?'underline':'']">合作案例</div>
                            </router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link tag="div" to="/server/index" class="nav">
                                <div @mouseover="getIndex(5)" :class="[this.index==5?'underline':'']">服务支持</div>
                            </router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link tag="div" to="/contactUs/index" class="nav">
                                <div @mouseover="getIndex(6)" :class="[this.index==6?'underline':'']">联系我们</div>
                            </router-link>
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
                <div class="solutions" v-show="this.needShow==1" animate-delay="0s">
                    <div class="sixDisp">
                        <div @click="solutions(1)">营销传播</div>
                        <div @click="solutions(2)">招生转化</div>
                        <div @click="solutions(3)">业务升级</div>
                        <div @click="solutions(4)">教务教研</div>
                        <div @click="solutions(5)">信息职教</div>
                        <div @click="solutions(6)">一站到底</div>
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
        },
        solutions(index){
            let cur_path=this.$route.path;
            this.$router.replace({
                path:'solutions/detial',
                query:{
                    id:index
                }
            })
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
    background: @base_color;
    color: #ffffff;
    z-index: 100;
    border-bottom: 1px solid #cccccc;
    .headerTop {
        height: 60px;
        .logoArea {
            height: 60px;
        }
        .navs .nav {
            height: 60px;
            cursor: pointer;
            box-sizing: border-box;
            &:hover {
                color: #000000;
            }
            div{
                width: 50%;
                height: 60px;
                margin: 0 auto;
                box-sizing: border-box;
                &.underline{
                    border-bottom: 3px solid #ffffff;
                }
                &:hover{
                    border-bottom: 3px solid #ffffff;
                }
            }
        }
        .fade-enter-active{
            transition: opacity 0.5s;
        }
        .fade-leave-active {
            transition: opacity 1.5s;
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
