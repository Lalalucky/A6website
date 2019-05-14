<template>
    <!-- 继续教育 -->
    <div class="education">
        <div class="shoucut">
            <div class="col_t">继续教育</div>
            <div class="adv_word">
                <p>一站式解决继续教育线上业务开展及管理的</p>
                <p>垂直线上平台</p>
            </div>
        </div>
        <ul class="light_point">
            <li>
                <img src="../../assets/images/icons/education/形状.png" alt>人工智能技术确保学员，信息真实有效
            </li>
            <li>
                <img src="../../assets/images/icons/education/同步.png" alt>结合传统教学课程业务，实现O2O业务同步
            </li>
            <li>
                <img src="../../assets/images/icons/education/设备.png" alt>平台数据智能回赠，实时上报
            </li>
            <li>
                <img src="../../assets/images/icons/education/专线接入.png" alt>独家视频点播技术，确保课时信息真实有效
            </li>
            <li>
                <img src="../../assets/images/icons/education/形状.png" alt>支持接入主营机构相关平台主管课程
            </li>
        </ul>
        <router-link tag="div" class="know_more" :to="{path:'/solutions/detial',query:{id:6}}">
            <div class="btn">
                了解详情
                <i class="iconfont icon-icon"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "education",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="less">
.light_point {
    margin-top: 50px;
}
.btn {
    text-align: center;
}
</style>
