<template>
    <head>
        <div class="headerTop">
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="logoArea"></div>
                </el-col>
                <el-col :span="14">
                    <div class="navs"></div>
                </el-col>
                <el-col :span="6">
                    <div class="loginAbout"></div>
                </el-col>
            </el-row>
        </div>
    </head>
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
.headerTop {
  width: 100%;
  height: 60px;
  .logoArea {
    height: 60px;
    background: skyblue;
  }
}
</style>
