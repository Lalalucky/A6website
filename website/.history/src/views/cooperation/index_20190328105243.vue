<template>
    <div class="coopration">
        <Top></Top>
        <imgDisplay :msg="'#606060'"></imgDisplay>
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
