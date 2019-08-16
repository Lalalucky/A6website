<template>
    <div class="contact_us">
        <outLink></outLink>
        <Top :index="'6'"></Top>
        <Banner></Banner>
        <div class="connections">
            <!-- <div id="allmap" ref="allmap"></div> -->
            <div class="company_address"></div>
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

<!-- 百度地图模块 -->
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=RrgqxTHHgxSiz9rh3jfbNKRrmgE8sQaZ"></script> 
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
