<template>
    <div class="login_about">
        <div class="register">
            <h1>易教育A6</h1>
            <form action ref="register_form">
                <div class="form_item">
                    <input
                        type="text"
                        v-model="register_form.name"
                        placeholder="请输入姓名"
                        id="name"
                        required
                    >
                </div>
                <div class="form_item">
                    <input
                        type="number"
                        v-model="register_form.tel"
                        placeholder="请输入手机号"
                        id="phone"
                        required
                    >
                </div>
                <div class="form_item">
                    <input
                        type="mail"
                        v-model="register_form.email"
                        placeholder="请输入邮箱"
                        id="mail"
                        required
                    >
                </div>
                <div class="form_item">
                    <input
                        type="text"
                        v-model="register_form.company"
                        placeholder="请输入单位名称"
                        required
                    >
                </div>
                <div class="form_item role">
                    <p class="tips">申请人角色:</p>
                    <div class="role-group">
                        <div class="role-item">
                            <input type="radio" name="role" value="5" v-model="register_form.roles"> 我是校长
                        </div>
                        <div class="role-item">
                            <input type="radio" name="role" value="4" v-model="register_form.roles"> 我负责销售
                        </div>
                        <div class="role-item">
                            <input type="radio" name="role" value="1" v-model="register_form.roles"> 我负责教务
                        </div>
                        <div class="role-item">
                            <input type="radio" name="role" value="2" v-model="register_form.roles"> 我负责财务
                        </div>
                        <div class="role-item">
                            <input type="radio" name="role" value="3" v-model="register_form.roles"> 我负责社群
                        </div>
                        <div class="role-item">
                            <input
                                type="radio"
                                name="role"
                                value="20"
                                v-model="register_form.roles"
                            > 我是学员
                        </div>
                        <div class="role-item">
                            <input
                                type="radio"
                                name="role"
                                value="30"
                                v-model="register_form.roles"
                            > 我是合作伙伴
                        </div>
                    </div>
                </div>
                <div class="form_item submit_btn">
                    <button @click.prevent="submitForm()">注册</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "register",
    data() {
        return {
            register_form: {
                name: "",
                tel: "",
                email: "",
                roles: "5",
                company: "",
                type: ""
            }
        };
    },
    mounted() {},
    components: {},
    methods: {
        submitForm() {
            // 验证规则
            let phone = this.register_form.tel.trim();
            let mail = this.register_form.email.trim();
            let mailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!/^1(3|4|5|7|8)\d{9}$/.test(phone)) {
                document.getElementById("phone").select();
                this.$message.error("手机号码格式错误，请重新输入!");
                return false;
            }
            if (!mailReg.test(mail)) {
                document.getElementById("mail").select();
                this.$message.error("邮箱格式错误，请重新输入!");
                return false;
            }
            // console.log(this.register_form);
            let data = this.register_form;
            console.log(data);
            this.myRequest("site/apply", data).then(res => {
                console.log(res);
            });
            this.elseRequest("site/apply", data).then(res => {
                console.log(res);
            });
        }
    }
};
</script>

<style scoped lang="less">
.login_about {
    min-height: 100vh;
    width: 100%;
    background: url("~@/assets/images/login_bg.png") no-repeat center;
    background-size: 100% 100%;
    position: relative;
    // @media screen and(min-width: 1200px) and(max-width: 1920px) {
    //     .register {
    //         top: 250px;
    //         right: 17%;
    //         padding: 25px;
    //         .form_item {
    //             width: 450px;
    //         }
    //         .role {
    //             padding: 15px 30px;
    //             height: 120px !important;
    //             color: #666666;
    //             .tips {
    //                 width: 180px;
    //                 line-height: 25px;
    //             }
    //             .role-group {
    //                 display: flex;
    //                 flex-wrap: wrap;
    //                 .role-item {
    //                     width: 180px;
    //                     padding-left: 20px;
    //                 }
    //             }
    //         }
    //         .submit_btn {
    //             button {
    //                 width: 450px;
    //             }
    //         }
    //     }
    // }
    .register {
        & > h1 {
            width: 450px;
            font-size: 70px;
            line-height: 70px;
            color: #ffffff;
            position: absolute;
            top: 50%;
            margin-top: -300px;
            right: 12%;
            font-style: italic;
        }
        form {
            width: 450px;
            background: #ffffff;
            border: 1px solid #ececec;
            border-radius: 20px;
            position: absolute;
            top: 50%;
            margin-top: -180px;
            right: 12%;
            padding: 25px;
            .form_item {
                // width: 400px;
                height: 50px;
                margin: 10px 0;
                background: rgba(244, 244, 244, 1);
                border-radius: 30px;
                input[type="text"],
                input[type="number"],
                input[type="mail"] {
                    width: 400px;
                    font-size: 20px;
                    padding-left: 30px;
                    height: 50px;
                    line-height: 50px;
                    outline: none;
                    text-decoration: none;
                    border: none;
                    background: transparent;
                    appearance: none;
                }
                input::-webkit-input-placeholder {
                    /* placeholder颜色  */
                    color: rgba(146, 146, 146, 1);
                    font-size: 18px;
                    /* placeholder位置  */
                    text-align: left;
                }
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
                input[type="radio"] {
                    cursor: pointer;
                }
            }
            .role {
                padding: 15px;
                height: 160px !important;
                color: #666666;
                font-size: 20px;
                .tips {
                    width: 150px;
                    line-height: 25px;
                }
                .role-group {
                    display: flex;
                    flex-wrap: wrap;
                    .role-item {
                        width: 180px;
                        padding-left: 20px;
                    }
                }
            }
            .get_security_code {
                button {
                    background: transparent;
                    color: rgba(74, 144, 226, 1);
                    padding: 0;
                    height: 60px;
                    cursor: pointer;
                }
            }
            .submit_btn {
                button {
                    cursor: pointer;
                    width: 400px;
                    height: 60px;
                    background: rgba(74, 144, 226, 1);
                    border-radius: 30px;
                    font-size: 18px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                    line-height: 25px;
                }
            }
        }
    }
}
</style>
