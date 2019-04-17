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
                    <div class="link_way">
                        <div>
                            <span>联系我们 :</span>&emsp;XXX-XXXX-XXXX
                        </div>
                        <div>
                            <span>售前咨询 :</span>&emsp;XXX-XXXX-XXXX
                        </div>
                        <div>
                            <span>售后咨询 :</span>&emsp;XXX-XXXX-XXXX
                        </div>
                    </div>
                    <div class="wechat"></div>
                    <div class="blog"></div>
                </div>
            </div>
            <div class="friend_link">
                <div>友情链接:</div>
                <ul>
                    <li><a href="">abcabcabcabc</a></li>
                    <li><a href="">abcabcabcabc</a></li>
                    <li><a href="">abcabcabcabc</a></li>
                </ul>
            </div>
            <div class="property_info">
                <div class="container">
                    <div class="brand_right">
                        <span>版权:</span>
                        <span>苏010-XXX-XXXXX</span>
                    </div>
                    <div class="doc_code">
                        <span>备案号:</span>
                        <span>苏010-5288-1988</span>
                    </div>
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
    .container {
        width: 100%;
        .foot_top {
            width: 100%;
            padding: 47px 18.75%;
            display: flex;
            background:rgba(74,75,76,1);
            border-bottom: 2px solid #B6B6B7;
            .guide {
                width: 20%;
                h3 {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 45px;
                }
                a {
                    text-decoration: none;
                    color: #ffffff;
                    text-indent: 1rem;
                    line-height: 25px;
                    display: block;
                    cursor: pointer;
                }
            }
            .plat_link {
                width: 50%;
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
                    div{
                        padding: 0 3px;
                    }
                }
            }
            .micro_code {
                width: 30%;
                display: flex;
                justify-content:space-around;
                .wechat,.blog {
                    width: 110px;
                    height: 110px;
                    background: #ececec;
                    box-shadow: 1px 1px 1px #ececec;
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
        .property_info {
            width: 100%;
            padding: 15px 18.75% 45px;
            color:rgba(74,74,74,1);
            .container {
                height: 60px;
                padding-right: 350px;
                text-align: right;
                & > div {
                    line-height: 30px;
                    span {
                        padding: 0 5px;
                    }
                }
            }
        }
    }
}
</style>
