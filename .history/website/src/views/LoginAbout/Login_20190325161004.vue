<template>
    <div class="login">
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
        >
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="resData.name"></el-input>
            </el-form-item>
            <el-form-item label="活动名称" prop="password">
                <el-input v-model="resData.password"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Login",
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
    methods: {
        submitForm(formName) {
            this.$refs[login_form].validate(valid => {
                console.log(this.resData);
                if (valid) {
                    alert("sucess");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[login_form].resetFields();
        }
    },
    components: {}
};
</script>

<style scoped lang="less">
</style>
