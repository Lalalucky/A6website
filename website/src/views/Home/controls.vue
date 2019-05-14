<template>
    <!-- 管控 -->
    <div class="controls">
        <div class="shoucut">
            <div class="col_t">数据管控</div>
            <div class="adv_word">
                <p>以职业培训机构核心数据为中心</p>
                <p>打造的体系化数据管控解决方案</p>
            </div>
        </div>
        <ul class="light_point">
            <li>
                <img src="../../assets/images/icons/controls/形状.png" alt>打通各业务环节壁垒，实现数据一体化
            </li>
            <li>
                <img src="../../assets/images/icons/controls/自动.png" alt>数据自动处理，一建调整，方便快捷
            </li>
            <li>
                <img src="../../assets/images/icons/controls/云端.png" alt>数据终身存储云端，全程可追溯，实现数据沉淀
            </li>
            <li>
                <img src="../../assets/images/icons/controls/整合.png" alt>数据结构化整合，集中整理，清晰具体
            </li>
            <li>
                <img src="../../assets/images/icons/controls/跟进记录.png" alt>数据多端实时跟心，及时决策调整
            </li>
        </ul>
        <router-link tag="div" class="know_more" :to="{path:'/solutions/detial',query:{id:5}}">
            <div class="btn">
                了解详情
                <i class="iconfont icon-icon"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "controls",
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
