<template>
    <div class="login">
        
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
