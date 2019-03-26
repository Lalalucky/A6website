<template>
    <div class="solutions_detial">
        
    </div>
</template>

<script>
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
