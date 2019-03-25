<template>
    <div class="register">
        <el-form ref="login_form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="less">
</style>
