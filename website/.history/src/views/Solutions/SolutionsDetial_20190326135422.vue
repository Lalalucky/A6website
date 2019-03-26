<template>
    <div class="solutions_detial">
        <Top></Top>
        
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Footer from "@/components/Footer.vue";
import Register from "@/components/LinkRegister.vue";
export default {
    name: "",
    data() {
        return {
            id:''
        };
    },
    created() {
        this.id=this.$route.query.id
    },
    components: {}
};
</script>

<style scoped lang="less">
</style>
