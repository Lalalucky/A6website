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
                            <div class="nav solutions">解决方案</div>
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
        </div>
    </header>
</template>

<script>
export default {
    name: "top",
    data() {
        return {};
    }
};
</script>

<style scoped lang="less">
header {
    width: 100%;
    overflow: hidden;
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
    }
}
</style>
