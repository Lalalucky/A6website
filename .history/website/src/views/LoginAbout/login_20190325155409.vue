<template>
    <div class="login">
        <el-form
            ref="login_form"
            :model="login_form"
            label-width="80px"
            :rules="rules"
            class="login_form"
        >
            <el-form-item label="用户名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
                <el-button @click="resetForm('login_form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            resData: {
                name: "",
                password: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入登录名",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "请输入用户密码",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    methods:{
        
    },
    components: {}
};
</script>

<style scoped lang="less">
</style>
