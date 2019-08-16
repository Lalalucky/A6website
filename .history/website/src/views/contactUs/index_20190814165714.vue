<template>
    <div class="contact_us">
        <outLink></outLink>
        <Top :index="'6'"></Top>
        <Banner></Banner>
        <div class="connections">
            <div id="allmap" ref="allmap"></div>
            <!-- <div class="company_address"></div> -->
            <div class="container">
                <h3>南京云宝网络有限公司</h3>
                <div class="linkway">
                    <div>
                        地址：
                        <span>南京市雨花区大周路32号软件谷科创城A1栋15F</span>
                    </div>
                    <div>
                        电话：
                        <span>400-8790-758</span>
                    </div>
                    <div>
                        邮箱：
                        <span>yunbao@yunbaonet.cn</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="recommend">
            <div class="decration">
                <div class="line"></div>
                <div class="block"></div>
                <div class="line"></div>
            </div>
            <div class="icons">
                <div class="icon">
                    <img src="../../assets/images/contactUs/wechat.png" alt>
                    <div class="stage_name">
                        <div class="stage">
                            <h4>服务号</h4>
                            <p class="name">易教育在线</p>
                        </div>
                        <div class="stage">
                            <h4>订阅号</h4>
                            <p class="name">小易爱职教</p>
                        </div>
                    </div>
                </div>
                <div class="icon">
                    <img src="../../assets/images/contactUs/microblog.png" alt>
                    <div class="stage_name">
                        <div class="stage">
                            <h4>新浪微博</h4>
                            <p class="name">易教育学苑</p>
                        </div>
                    </div>
                </div>
                <div class="icon">
                    <img src="../../assets/images/contactUs/toutiao.png" alt>
                    <div class="stage_name">
                        <div class="stage">
                            <h4>今日头条</h4>
                            <p class="name">易教育学苑</p>
                        </div>
                    </div>
                </div>
                <div class="icon">
                    <img src="../../assets/images/contactUs/zhihu.png" alt>
                    <div class="stage_name">
                        <div class="stage">
                            <h4>知乎账号</h4>
                            <p class="name">易教育学苑</p>
                        </div>
                    </div>
                </div>
                <div class="icon">
                    <img src="../../assets/images/contactUs/phone.png" alt>
                    <div class="stage_name">
                        <div class="stage">
                            <h4>联系电话</h4>
                            <p class="name">400-8790-758</p>
                        </div>
                    </div>
                </div>
                <div class="icon">
                    <img src="../../assets/images/contactUs/kefu.png" alt>
                    <div class="stage_name">
                        <div class="kefu">
                            <h4>在线客服</h4>
                            <p class="name">9:00-21:00（工作日）</p>
                            <p class="name">9:00-18:00（双休日）</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import outLink from "@/components/outsideLink.vue";
import Banner from "@/components/banner.vue";
import Top from "@/components/top.vue";
import imgDisplay from "@/components/imgDisplay.vue";
import Register from "@/components/linkRegister.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "contactUs",
    data() {
        return {};
    },
    components: {
        Top,
        Banner,
        Register,
        Footer,
        outLink
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
                        "地址：南京市雨花区大周路32号软件谷科创城A1栋15F<br/>邮编：210000<br/>客服：400-8292-877<br/>电话：025-52881988<br/>邮箱：yunbao@yunbaoet.cn",
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
    .connections {
        width: 1200px;
        // height: 1006px;
        margin: 80px auto;
        padding: 20px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 20px 0px rgba(218, 219, 220, 1);
        border: 1px solid #ececec;
        background-size: contain;
        h1 {
            text-align: center;
            line-height: 60px;
            font-size: 24px;
            margin: 30px 0;
        }
        .company_address {
            height: 596px;
            background: url("~@/assets/images/company_address.png");
        }
        .container {
            padding: 15px 15px 120px;
            background: url("~@/assets/images/map.png") no-repeat left top;
            h3 {
                text-align: center;
                font-size: 30px;
                font-weight: 400;
                color: rgba(43, 43, 43, 1);
                line-height: 100px;
            }
            & > div {
                width: 600px;
                margin: 0px auto;
                font-size: 24px;
                font-weight: 400;
                color: rgba(43, 43, 43, 1);
                line-height: 32px;
                div {
                    margin: 30px 0;
                }
                span {
                    color: rgba(102, 102, 102, 1);
                }
            }
        }
        #allmap {
            width: 100%;
            height: 500px;
        }
    }
    .recommend {
        width: 1200px;
        margin: 68px auto;
        .decration {
            height: 16px;
        }
        .decration > div {
            display: inline-block;
            background: rgba(218, 219, 220, 1);
        }
        .line {
            width: 560px;
            height: 1px;
            margin-bottom: 8px;
            height: 1px;
        }
        .block {
            width: 16px;
            height: 16px;
            margin: 0 30px;
        }
        .icons {
            width: 1200px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .icon {
                width: 25%;
                padding: 30px 0;
                text-align: center;
                img {
                    display: block;
                    height: 77px;
                    margin: 15px auto;
                }
                .stage_name {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    .stage {
                        width: 40%;
                        h4 {
                            font-size: 20px;
                            font-weight: 400;
                            color: rgba(43, 43, 43, 1);
                            line-height: 28px;
                        }
                        .name {
                            display: inline-block;
                            font-size: 18px;
                            font-weight: 400;
                            color: rgba(102, 102, 102, 1);
                            line-height: 25px;
                        }
                    }
                    .kefu {
                        h4 {
                            font-size: 20px;
                            font-weight: 400;
                            color: rgba(43, 43, 43, 1);
                            line-height: 28px;
                        }
                        .name {
                            font-size: 18px;
                            font-weight: 400;
                            color: rgba(102, 102, 102, 1);
                            line-height: 25px;
                        }
                    }
                }
            }
        }
    }
}
</style>
