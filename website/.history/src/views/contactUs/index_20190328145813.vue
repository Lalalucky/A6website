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
        this.map();
        this.addMapMarker();
    },
    methods: {
        map() {
            let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
            map.centerAndZoom(new BMap.Point(118.7502539064, 31.9427714312), 17); // 初始化地图,设置中心点坐标和地图级别
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
            var markerArr = [{title:"南京云宝网络有限公司",content:"地址：南京市雨花区大周路32号软件谷科创城A1栋15F<br/>邮编：210000<br/>客服：400-8292-877<br/>电话：025-52881988<br/>邮箱：yunbao@yunbaet.cn",point:"118.751325|31.943673",isOpen:0,icon:{w:21,h:21,l:115,t:0,x:6,lb:5}}];
            for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
            var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
            var iw = createInfoWindow(i);
            var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
            marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                borderColor:"#808080",
                color:"#333",
                cursor:"pointer"
            });

            (function(){
                var index = i;
                var _iw = createInfoWindow(i);
                var _marker = marker;
                _marker.addEventListener("click",function(){
                    this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open",function(){
                    _marker.getLabel().hide();
                })
                _iw.addEventListener("close",function(){
                    _marker.getLabel().show();
                })
                label.addEventListener("click",function(){
                    _marker.openInfoWindow(_iw);
                })
                if(!!json.isOpen){
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            })()
        }
        }
    }
};
</script>

<style scoped lang="less">
.contact_us {
    widows: 100%;
    #allmap {
        height: 400px;
    }
}
</style>
