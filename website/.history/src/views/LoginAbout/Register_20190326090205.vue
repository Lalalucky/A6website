<template>
    <div class="register">
        <el-form
            :model="register_form"
            :rules="rules"
            ref="register_form"
            label-width="100px"
            class="demo-register_form"
        >
            <el-form-item label="登录名" prop="name">
                <el-input v-model="register_form.name" placeholder="请设置您的登录名"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="name">
                <el-input v-model="register_form.name" placeholder="请输入您的手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="register_form.password" placeholder="请输入6位数密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password">
                <el-input v-model="rewrite_password" placeholder="请确认您的密码"></el-input>
            </el-form-item>
            <el-form-item
                :label="获取验证码"
                :rules="{
                required: true, message: '域名不能为空', trigger: 'blur'
                }"
            >
                <el-input v-model="register_form.security"></el-input>
                <el-button @click.prevent="removeDomain(domain)">删除</el-button>
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
    name: "register",
    data() {
        return {
            register_form: {
                name: ""
            },
            rules: {
                name: [
                    { required: true, message: "请输入登录名", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ]
            }
        };
    },
    components: {}
};
</script>

<style scoped lang="less">
</style>
