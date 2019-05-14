<template>
    <!-- 销售 -->
    <div class="sell">
        <div class="shoucut">
            <div class="col_t">招生转化</div>
            <div class="adv_word">
                <p>通过对销售过程及意向学员信息的标准化信息处理</p>
                <p>实现精细化销售流程管控</p>
            </div>
        </div>
        <div>
            <ul class="light_point">
                <li>
                    <img src="../../assets/images/icons/sell/线索.png" alt>精细化绘制用户画像，助力业务分析
                </li>
                <li>
                    <img src="../../assets/images/icons/sell/标准.png" alt>规范化销售行为记录，促进流程改良
                </li>
                <li>
                    <img src="../../assets/images/icons/sell/矩形.png" alt>优化线索分配，避免资源浪费
                </li>
                <li>
                    <img src="../../assets/images/icons/sell/互动交流.png" alt>流程记录实时更新，在线交流指导
                </li>
            </ul>
        </div>
        <router-link tag="div" class="know_more" :to="{path:'/solutions/detial',query:{id:2}}">
            <div class="btn">
                了解详情
                <i class="iconfont icon-icon"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "sell",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="less">
.light_point{
    margin-top: 70px;
}
.btn{
    text-align: center;
}
</style>
