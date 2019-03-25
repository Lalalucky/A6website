<template>
    <div class="login">
        <el-form :model="login_form" :rules="rules" ref="login_form" label-width="100px" class="demo-login_form">
            <el-form-item label="登录名" prop="name">
                <el-input v-model="login_form.name" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="login_form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('login_form')">立即创建</el-button>
                <el-button @click="resetForm('login_form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        login_form: {
          name: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入登录名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="less">
</style>
