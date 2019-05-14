<template>
    <!--  首页业务 -->
    <div class="business">
        <div class="shoucut">
            <div class="col_t">业务升级</div>
            <div class="adv_word">
                <p>结合传统职业培训机构基础业务形态</p>
                <p>运用互联网技术升级业务模式以助力增收</p>
            </div>
        </div>
        <ul class="light_point">
            <li>
                <img src="../../assets/images/icons/bussiness/矩形.png" alt>学习过程线上化，提升服务质量
            </li>
            <li>
                <img src="../../assets/images/icons/bussiness/业务.png" alt>学习内容差异配置，丰富业务种类
            </li>
            <li>
                <img src="../../assets/images/icons/bussiness/专属粉丝.png" alt>组织学员专属门户，满足特定需求
            </li>
            <li>
                <img src="../../assets/images/icons/bussiness/公众号.png" alt>业务场景嵌入微信生态，打破o2o业务壁垒
            </li>
        </ul>
        <router-link tag="div" class="know_more" :to="{path:'/solutions/detial',query:{id:3}}">
            <div class="btn">
                了解详情
                <i class="iconfont icon-icon"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "business",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="less">
.light_point {
    margin-top: 70px;
}
.btn {
    text-align: center;
}
</style>
