<template>
    <div class="coopration">
        <Top></Top>
        <imgDisplay :msg="'#606060'"></imgDisplay>
        <div class="new_partner">
            <h1>新签客户</h1>
            <div class="container">
                <div class="item" v-for="item in 3" :key="item">
                    <img src="" alt="">
                    <div class="school_info">
                        <p class="come_from">XX校长</p>
                        <p class="come_from">XX教育机构</p>
                        <p class="words">云宝不错</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="older_partner">

        </div>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import imgDisplay from "@/components/imgDisplay.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "",
    data() {
        return {};
    },
    components: {
        Top,
        imgDisplay,
        Footer
    }
};
</script>

<style scoped lang="less">
</style>
