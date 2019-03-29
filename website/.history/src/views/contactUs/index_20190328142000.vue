<template>
    <div class="contact_us">
        <Top :index="'6'"></Top>
        <imgDisplay :msg="'#aabbcc'"></imgDisplay>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import imgDisplay from "@/components/imgDisplay.vue";
import Register from "@/components/linkRegister.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "",
    data() {
        return {};
    },
    components: {
        Top,
        imgDisplay,
        Register,
        Footer
    },
    methods: {
        map() {
            let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
            map.centerAndZoom(new BMap.Point(118.75106, 31.944332), 11); // 初始化地图,设置中心点坐标和地图级别
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

<style scoped lang="less">
</style>
