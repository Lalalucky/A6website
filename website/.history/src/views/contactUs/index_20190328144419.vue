<template>
    <div class="contact_us">
        <Top :index="'6'"></Top>
        <imgDisplay :msg="'#aabbcc'"></imgDisplay>
        <div id="allmap" ref="allmap"></div>
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
    mounted(){
        this.map()
    },
    methods: {
        map() {
            let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
            map.centerAndZoom(new BMap.Point(118.7502539064, 31.9427714312), 15); // 初始化地图,设置中心点坐标和地图级别
            map.addControl(
                new BMap.MapTypeControl({
                    //添加地图类型控件
                    mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
                })
            );
            map.setCurrentCity("南京"); // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 
        },
        addMapMarker(){
            var markerArr=[{title:'南京云宝网络有限公司',content::"地址：南京市雨花区大周路32号软件谷科创城A1栋15F<br/>邮编：210000<br/>客服：400-8292-877<br/>电话：025-52881988<br/>邮箱：yunbao@yunbaet.cn",pointer:"118.7502539064|31.9427714312",isOpen:1,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}]
            
        }
    }
};
</script>

<style scoped lang="less">
.contact_us{
    widows: 100%;
    #allmap{
        height: 400px;
    }
}
</style>
