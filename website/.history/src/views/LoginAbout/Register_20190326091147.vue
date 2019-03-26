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
            <el-form-item class="get_security_code">
                <el-input v-model="register_form.security_code" class="security_code_input"></el-input>
                <el-button @click.prevent="getCode()" class="getCode">获取验证码</el-button>
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
                name: "",
                password: "",
                security_code: ""
            },
            rewrite_password:"",
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
.register {
    width: 30%;
    border: 1px solid #ececec;
    padding: 45px 30px 30px;
    border-radius: 20px;
    position: absolute;
    top: 150px;
    right: 100px;
    .get_security_code{
        .security_code_input{
            width: 60%;
            margin-left: 9%;
        }
        .get_code{
            width: 30%;
        }
    }
    .btn_group {
        margin-top: 45px;
        text-align: right;
    }
}
</style>
