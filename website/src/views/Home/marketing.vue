<template>
    <!-- 营销 -->
    <div class="marketing">
        <div class="shoucut">
            <div class="col_t">营销传播</div>
            <div class="adv_word">
                <p>围绕潜在学员全生命周期</p>
                <p>开展的闭环式营销传播</p>
            </div>
        </div>
        <ul class="light_point">
            <li>
                <img src="../../assets/images/icons/marketing/活动.png" alt>活动一键启动，内容丰富
            </li>
            <li>
                <img src="../../assets/images/icons/marketing/信息.png" alt>信息全渠道覆盖，成本更低
            </li>
            <li>
                <img src="../../assets/images/icons/marketing/fa_bu.png" alt>活动曝光更多，反复触达学员
            </li>
            <li>
                <img src="../../assets/images/icons/marketing/公众号.png" alt>公众号承接流量，引流社群
            </li>
            <li>
                <img src="../../assets/images/icons/marketing/库存.png" alt>社群售前蓄水，促进后续转化
            </li>
            <li>
                <img src="../../assets/images/icons/marketing/搜索.png" alt>社交裂变模板，背书式自主传播
            </li>
            <li>
                <img src="../../assets/images/icons/marketing/券类.png" alt>自定义电子券，餐椅华定点转化
            </li>
        </ul>
        <router-link tag="div" class="know_more" :to="{path:'/solutions/detial',query:{id:1}}">
            <div class="btn">
                了解详情
                <i class="iconfont icon-icon"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "marketing",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="less">
.light_point {
    margin-top: 20px;
}
.btn {
    text-align: center;
}
</style>
