<template>
    <div class="contact_us0">
        <Top :index="'6'"></Top>
        <imgDisplay :msg="'#aabbcc'"></imgDisplay>
        <div class="connections">
            <!-- <div id="allmap" ref="allmap"></div> -->
            <div class="company_address"></div>
            <div class="container">
                <p><span>公司地址：南京市雨花区大周路32号软件谷科创城A1栋15F</span></p>
                <p><span>售前咨询：400-8790-758</span></p>
                <p><span>售后支持：025-5288-1988</span></p>
                <p><span>商务合作：025-5288-1988</span></p>
                <p><span>企业邮箱：yunbao@yunbaet.cn</span></p>
            </div>
        </div>
        <Footer></Footer>
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
    mounted() {
        this.initMap()
    },
    methods: {
        //这几个地方加this
        initMap() {
            this.createMap(); //创建地图
            this.setMapEvent(); //设置地图事件
            this.addMapControl(); //向地图添加控件
            this.addMarker(); //向地图中添加marker
        },
        createMap() {
            var map = new BMap.Map("allmap"); //在百度地图容器中创建一个地图
            var point = new BMap.Point(118.751325,31.943673);//定义一个中心点坐标
            map.centerAndZoom(point, 18); //设定地图的中心点和坐标并将地图显示在地图容器中
            window.map = map; //将map变量存储在全局
        },
        setMapEvent() {
            map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
            // map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
            map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
            map.enableKeyboard(); //启用键盘上下左右键移动地图
        },
        addMapControl() {
            //向地图中添加缩放控件
            var ctrl_nav = new BMap.NavigationControl({
                anchor: BMAP_ANCHOR_TOP_LEFT,
                type: BMAP_NAVIGATION_CONTROL_LARGE
            });
            map.addControl(ctrl_nav);
            //向地图中添加缩略图控件
            var ctrl_ove = new BMap.OverviewMapControl({
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
                isOpen: 1
            });
            map.addControl(ctrl_ove);
            //向地图中添加比例尺控件
            var ctrl_sca = new BMap.ScaleControl({
                anchor: BMAP_ANCHOR_BOTTOM_LEFT
            });
            map.addControl(ctrl_sca);
        },
        //标注点数组
        //创建marker
        addMarker() {
            var markerArr = [
                {
                    title: "南京云宝网络有限公司",
                    content:
                        "地址：南京市雨花区大周路32号软件谷科创城A1栋15F<br/>邮编：210000<br/>客服：400-8292-877<br/>电话：025-52881988<br/>邮箱：yunbao@yunbaet.cn",
                    point: "118.751325|31.943673",
                    isOpen: 0,
                    icon: { w: 21, h: 21, l: 115, t: 0, x: 6, lb: 5 }
                }
            ];
            for (var i = 0; i < markerArr.length; i++) {
                var json = markerArr[i];
                var p0 = json.point.split("|")[0];
                var p1 = json.point.split("|")[1];
                var point = new BMap.Point(p0, p1);
                //这个地方加this
                var iconImg = this.createIcon(json.icon);
                var marker = new BMap.Marker(point, { icon: iconImg });
                //这个地方加this
                var iw = this.createInfoWindow(i);
                var label = new BMap.Label(json.title, {
                    offset: new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
                });
                marker.setLabel(label);
                map.addOverlay(marker);
                label.setStyle({
                    borderColor: "#808080",
                    color: "#333",
                    cursor: "pointer"
                });
                var index = i;
                //这个地方加this
                var _iw = this.createInfoWindow(i);
                var _marker = marker;
                marker.addEventListener("click", function() {
                    //这个地方加this
                    this.openInfoWindow(_iw);
                });
                iw.addEventListener("open", function() {
                    _marker.getLabel().hide();
                });
                _iw.addEventListener("close", function() {
                    _marker.getLabel().show();
                });
                label.addEventListener("click", function() {
                    _marker.openInfoWindow(_iw);
                });
                if (!!json.isOpen) {
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            }
        },
        //创建InfoWindow
        createInfoWindow(i) {
            //这个地方复制一下上面的var markerArr 不然会不显示报错
            var markerArr = [
                {
                    title: "南京云宝网络有限公司",
                    content:
                        "地址：南京市雨花区大周路32号软件谷科创城A1栋15F<br/>邮编：210000<br/>客服：400-8292-877<br/>电话：025-52881988<br/>邮箱：yunbao@yunbaet.cn",
                    point: "118.751325|31.943673",
                    isOpen: 0,
                    icon: { w: 21, h: 21, l: 115, t: 0, x: 6, lb: 5 }
                }
            ];
            var json = markerArr[i];
            var iw = new BMap.InfoWindow(
                "<b class='iw_poi_title' title='" +
                    json.title +
                    "'>" +
                    json.title +
                    "</b><div class='iw_poi_content'>" +
                    json.content +
                    "</div>"
            );
            return iw;
        },
        //创建一个Icon
        createIcon(json) {
            //这个地方我是用本地图标图片的
            var tubiao = require("../../assets/images/选中.png");
            var icon = new BMap.Icon(tubiao, new BMap.Size(json.w, json.h), {
                imageOffset: new BMap.Size(-json.l, -json.t),
                infoWindowOffset: new BMap.Size(json.lb + 5, 1),
                offset: new BMap.Size(json.x, json.h)
            });
            return icon;
        }
    }
};
</script>

<style scoped lang="less">
.contact_us {
    widows: 100%;
    .connections{
        width: 1200px;
        margin: 80px auto;
        padding: 20px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 20px 0px rgba(218,219,220,1);
        border: 1px solid #ececec;
        h1{
            text-align: center;
            line-height: 60px;
            font-size: 24px;
            margin: 30px 0;
        }
        .container{
            padding: 45px 15px 120px;
            background: url('~@/assets/images/map.png');
            p{
                line-height: 50px;
                font-size: 20px;
            }
        }
    }
    #allmap {
        width: 100%;
        height: 500px;
    }
}
</style>
