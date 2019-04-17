<template>
    <div class="footer">
        <div class="container">
            <div class="foot_top">
                <div class="guide">
                    <h3>网站导航</h3>
                    <a href>解决方案</a>
                    <a href>产品介绍</a>
                    <a href>易学苑</a>
                    <a href>合作案例</a>
                    <a href>服务支持</a>
                </div>
                <div class="plat_link">
                    <div class="platform">
                        <h3>易学苑</h3>
                        <div class="xueyuan">
                            <div class="lanmu">
                                <h4>办学干货</h4>
                                <ul class="lanmu_list">
                                    <li>营销策划</li>
                                    <li>招生转化</li>
                                    <li>机构管理</li>
                                    <li>其他干货</li>
                                </ul>
                            </div>
                            <div class="lanmu">
                                <h4>政策热点</h4>
                                <ul class="lanmu_list">
                                    <li>证书相关</li>
                                    <li>政策文件</li>
                                    <li>行业新闻</li>
                                    <li>报考百科</li>
                                </ul>
                            </div>
                            <div class="lanmu">
                                <h4>福利下载</h4>
                                <ul class="lanmu_list">
                                    <li>办学礼包</li>
                                    <li>知识课程</li>
                                    <li>行业报告</li>
                                </ul>
                            </div>
                        </div>
                        <div class="cooper_list">
                            <div>合作伙伴：</div>
                            <div>搜狐</div>
                            <div>百家号</div>
                            <div>企鹅号</div>
                            <div>网易号</div>
                            <div>知乎号</div>
                            <div>一点资讯</div>
                        </div>
                    </div>
                </div>
                <div class="micro_code">
                    <h3>联系我们</h3>
                    <div class="link_way">
                        <div>
                            <span>电话 :</span>&emsp;17626040221
                        </div>
                        <div>
                            <span>邮箱 :</span>&emsp;dl735809142@foxmail.com
                        </div>
                    </div>
                    <div class="icons">
                        <div class="wechat">
                            <img src="../assets/images/wechat.jpg" alt="">
                        </div>
                        <div class="blog">
                            <img src="../assets/images/wechat_serve].jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="company_info">
                <h2>南京云宝网络有限公司</h2>
                <p>公司地址：南京市雨花区大周路32号软件谷科创城A1栋15F</p>
            </div>
            <div class="property_info">
                <div class="container">
                    <p>Copyright&copy;2018-2020 南京云宝网络有限公司版权所有 | 苏ICP备15038143号-4</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="less">
@import "~@/assets/global.less";

.footer {
    width: 100%;
    color: #ffffff;
    text-align: left;
    .container {
        width: 100%;
        .foot_top {
            width: 100%;
            padding: 60px 18.75% 40px;
            display: flex;
            background:rgba(74,75,76,1);
            border-bottom: 2px solid #B6B6B7;
            .guide {
                width: 20%;
                text-align: center;
                h3 {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 45px;
                }
                a {
                    text-decoration: none;
                    color: #ffffff;
                    line-height: 25px;
                    display: block;
                    cursor: pointer;
                }
            }
            .plat_link {
                width: 50%;
                text-align: center;
                .platform {
                    h3 {
                        font-size: 18px;
                        font-weight: 600;
                        margin-bottom: 45px;
                    }
                }
                .xueyuan{
                    display: flex;
                    .lanmu{
                        width: 33.3%;
                        h4{
                            line-height:25px;
                            font-size:18px;
                            font-weight: 400;
                            margin-bottom: 30px;
                        }
                        .lanmu_list>li{
                            font-size: 14px;
                            line-height: 20px;
                            font-weight: 400;
                        }
                    }
                }
                .cooper_list{
                    display: flex;
                    font-size: 16px;
                    line-height: 22px;
                    font-weight: 400;
                    justify-content: center;
                    margin-top: 60px;
                    div{
                        padding: 0 3px;
                    }
                }
            }
            .micro_code {
                width: 30%;
                text-align: center;
                h3 {
                        font-size: 18px;
                        font-weight: 600;
                        margin-bottom: 45px;
                    }
                .icons{
                    display: flex;
                    justify-content: space-around;
                    margin-top: 30px;
                    .wechat,.blog {
                        width: 110px;
                        height: 110px;
                        background: #ececec;
                        box-shadow: 1px 1px 1px #ececec;
                        img{
                            display: block;
                            width: 110px;
                            height: 110px;
                        }
                    }
                }
                
            }
        }
        .friend_link {
            display: flex;
            padding: 15px 18.75%;
            background:rgba(74,75,76,1);
            div {
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(182,182,183,1);
                line-height:20px;
            }
            ul {
                display: flex;
                li a{
                    margin: 0 5px;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(182,182,183,1);
                    line-height:20px;
                    cursor: pointer;
                }
            }
        }
        .company_info{
            background:rgba(74,75,76,1);
            padding: 30px;
            text-align: center;
            color: #ffffff;
            h2{
                font-size:24px;
                line-height: 32px;
                height: 32px;
            }
            p{
                font-size: 16px;
                line-height: 30px;
            }
        }
        .property_info {
            width: 100%;
            padding: 15px 18.75% 45px;
            color:rgba(74,74,74,1);
            .container {
                text-align: center;
            }
        }
    }
}
</style>
