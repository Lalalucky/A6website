<template>
    <div id="app">
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "app",
    data() {
        return {
            isRouterAlive: true
        };
    },
    components: {
        Footer
    },
    mounted() {}
};
</script>

<style lang="less">
#app {
    width: 100%;
    min-height: 100vh;
    min-width: 1200px;
}
@media screen and(max-width: 1200px) {
    overflow-x: scroll;
}
</style>
