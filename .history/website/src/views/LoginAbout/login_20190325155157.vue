<template>
    <div class="login">
        <el-form
            ref="login_form"
            :model="form"
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
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
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
                        message: "请输入活动名称",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "请输入活动名称",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    components: {}
};
</script>

<style scoped lang="less">
</style>
