<template>
    <div id="app">
        <div id="allmap" ref="allmap"></div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            isRouterAlive: true
        };
    },
    components: {},
    mounted() {

    },
    methods: {
        map() {
            let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
            map.centerAndZoom(new BMap.Point(118.75106,31.944332), 11); // 初始化地图,设置中心点坐标和地图级别
            map.addControl(
                new BMap.MapTypeControl({
                    //添加地图类型控件
                    mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
                })
            );
            map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        }
    }
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
