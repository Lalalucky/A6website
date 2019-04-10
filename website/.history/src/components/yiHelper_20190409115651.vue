<template>
    <div class="yiHelp">
        <h1 class="h1 theme" ref="h_html">
            <span class="adorn"></span>易教育如何帮您实现机构运营全面升级
        </h1>
        <div class="container">
            <div class="tips">
                <div>
                    <div>
                        <img src="" alt="">
                        <span>社群营销</span>
                    </div>
                    <p>活动管理</p>
                    <p>文章管理</p>
                    <p>会议管理</p>
                    <p>电子券/优惠券</p>
                </div>
            </div>
            <div class="tips">
                <div>
                    <div>招生管理</div>
                    <p>公海私海</p>
                    <p>沟通商机</p>
                    <p>报价、合同</p>
                    <p>订单、收款</p>
                </div>
            </div>
            <div class="tips">
                <div>
                    <div>教务管理</div>
                    <p>学员管理</p>
                    <p>超级班级</p>
                    <p>教室、教师</p>
                    <p>教资、排课</p>
                </div>
            </div>
            <div class="tips">
                <div>
                    <div>教学管理</div>
                    <p>班级教学</p>
                    <p>在线培训</p>
                    <p>教学通知</p>
                    <p>答疑资讯</p>
                </div>
            </div>
            <div class="tips">
                <div>
                    <div>查询分析</div>
                    <p>报表仓库</p>
                    <p>驾驶舱</p>
                    <p>招生、财务</p>
                    <p>教务、教学</p>
                </div>
            </div>
            <div class="tips">
                <div>
                    <div>继续教育</div>
                    <p>学员管理</p>
                    <p>订单管理</p>
                    <p>课程管理</p>
                    <p>班级管理</p>
                    <p>学时管理</p>
                </div>
            </div>
            <div class="tips">
                <div>
                    <div>协同工作</div>
                    <p>审批管理</p>
                    <p>销售计划</p>
                    <p>任务、报告</p>
                    <p>费用、通知</p>
                </div>
            </div>
            <div class="tips">
                <div>
                    <div>财务管理</div>
                    <p>记账报销</p>
                    <p>收款、收入</p>
                    <p>业绩发票</p>
                    <p>积分审核</p>
                </div>
            </div>
        </div>
        <div class="konwMore">
            <div>了解更多</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "YiHelper",
    props: ["h1"],
    data() {
        return {};
    },
    components: {},
    mounted() {
        console.log(this.h1);
        this.$refs.h_html.nodeValue = this.h1;
    }
};
</script>

<style scoped lang="less">
.yiHelp {
    width: 62.5%;
    margin: 30px auto;
    padding-bottom: 45px;
    h1 {
        text-align: center;
        line-height: 60px;
        font-size: 24px;
        margin: 30px 0;
    }
    .container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .tips {
            margin: 15px 0;
            width: 33.3%;
            text-align: center;
            div {
                width: 200px;
                margin: 0 auto;
                border-top: 3px solid #4a90e2;
                div {
                    width: 100%;
                    height: 66px;
                }
            }
        }
    }
    .konwMore {
        div {
            width: 8%;
            height: 30px;
            box-sizing: border-box;
            border: 1px solid #ececec;
            border-radius: 5px;
            margin: 20px auto;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
        }
    }
}
</style>
