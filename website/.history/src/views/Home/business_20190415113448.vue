<template>
    <!--  首页业务 -->
    <div class="business">
        <div class="shoucut">
            <div class="col_t">业务</div>
            <div class="adv_word">
                <p>结合传统职教机构运营基础形态，运用互联网技术</p>
                <p>升级业务模式，从而直接作用于增收的解决方案</p>
            </div>
        </div>
        <ul class="light_point">
            <li><img src="../../assets/images/icons/bussiness/矩形 (1).png" alt="">学习过程线上化，提升服务质量</li>
            <li><img src="../../assets/images/icons/bussiness/矩形 (1).png" alt="">学习内容差异配置，丰富业务种类</li>
            <li><img src="../../assets/images/icons/bussiness/矩形 (1).png" alt="">组织学员专属门户，满足特定需求</li>
            <li><img src="../../assets/images/icons/bussiness/矩形 (1).png" alt="">业务场景嵌入微信生态，打破o2o业务壁垒</li>
        </ul>
        <router-link tag="div" class="know_more" to='/'>
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

</style>
