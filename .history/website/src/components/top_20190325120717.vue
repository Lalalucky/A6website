<template>
    <header class="header">
        <div class="headerTop">
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="logoArea">LOGO</div>
                </el-col>
                <el-col :span="16">
                    <el-row :gutter="10" class="navs" type="flex">
                        <el-col :span="3">
                            <div class="nav">首页</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="nav" @mouseenter="getIndex(1)" @mouseleave="getIndex(0)">解决方案</div>
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
                        <el-col :sapn="12">注册</el-col>
                        <el-col :sapn="12">登录</el-col>
                    </el-row>
                </el-col>
            </el-row>
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
        </div>
    </header>
</template>

<script>
export default {
    name: "top",
    data() {
        return {
            needShow: 0
        };
    },
    methods: {
        getIndex(index) {
            this.needShow = index;
            console.log(this.needShow);
        }
    }
};
</script>

<style scoped lang="less">
//这里定义了基本色彩；
@base_color:greenyellow;
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
        .navs .nav:hover{
            color:@base_color;
        }
        .solutions {
            position: absolute;
            top: 60px;
            width: 100%;
            background: #ffffff;
            z-index: 100;
            transition: 1000;
            .sixDisp {
                width: 80%;
                margin: 0 auto;
                display: flex;
                padding: 15px;
                justify-content: space-between;
                div {
                    width: 6%;
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
