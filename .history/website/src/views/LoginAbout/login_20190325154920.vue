<template>
    <div class="login">
        <el-form ref="login_form" :model="form" label-width="80px" :rules="rules" class="login_form">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
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
