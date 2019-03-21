<template>
    <head>
        <div class="headerTop">
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="logoArea"></div>
                </el-col>
                <el-col :span="14">
                    <el-row :gutter="10">
                        <el-col :span="">

                        </el-col>
                    </el-row>
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
    head{
        display: block;
        .headerTop{
            height: 60px;
            .logoArea{
                height: 60px;
                background: skyblue;
            }

        }        
    }
</style>
