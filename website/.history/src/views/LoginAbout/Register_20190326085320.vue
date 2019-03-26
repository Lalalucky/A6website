<template>
    <div class="register">
        <el-form :model="register_form" :rules="rules" ref="register_form" label-width="100px" class="demo-register_form">
            <el-form-item label="登录名" prop="name">
                <el-input v-model="register_form.name" placeholder="请输入登录名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="register_form.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item class="btn_group">
                <el-button @click="resetForm('register_form')">重置</el-button>
                <el-button type="primary" @click="submitForm('register_form')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            
        };
    },
    components: {}
};
</script>

<style scoped lang="less">
</style>
