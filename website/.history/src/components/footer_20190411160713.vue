<template>
    <div class="footer">
        <div class="container">
            <div class="foot_top">
                <div class="guide">
                    <h3>网站导航:</h3>
                    <a href>解决方案</a>
                    <a href>产品介绍</a>
                    <a href>易学苑</a>
                    <a href>合作案例</a>
                    <a href>服务支持</a>
                </div>
                <div class="plat_link">
                    <div class="platform">
                        <h3>南京云宝网络有限公司</h3>
                        <div class="web_plat">
                            <div class="cooper">合作伙伴</div>
                            <div class="cooper_list">
                                <div>
                                    <div>搜狐</div>
                                    <div>百家号</div>
                                    <div>企鹅号</div>
                                </div>
                                <div>
                                    <div>网易号</div>
                                    <div>知乎号</div>
                                    <div>一点资讯</div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
                <div class="micro_code">
                    <div class="wechat"></div>
                    <div class="blog"></div>
                </div>
            </div>
            <div class="friend_link">
                <div>友情链接:</div>
                <ul>
                    <li>abcabcabcabc</li>
                    <li>abcabcabcabc</li>
                    <li>abcabcabcabc</li>
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
    padding: 47px 18.75%;
    background:rgba(74,75,76,1);
    color: #ffffff;
    .container {
        width: 100%;
        .foot_top {
            width: 100%;
            display: flex;
            .guide {
                width: 20%;
                h3 {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 45px;
                }
                a {
                    text-decoration: none;
                    color: #000000;
                    text-indent: 1rem;
                    margin: 5px 0;
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
                    .web_plat {
                        width: 100%;
                        display: flex;
                        margin-bottom: 45px;
                        .cooper{
                            width: 120px;
                            font-size: 16px;
                            font-weight: 400;
                        }
                        .cooper_list{
                            width: 500px;
                            line-height: 22px;
                            font-weight: 400;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            div{
                                width: 500px;
                                text-align: center;
                            }
                        }
                    }
                }
                // .link_way {
                //     span {
                //     }
                // }
            }
            .micro_code {
                width: 30%;
                display: flex;
                justify-content: space-around;
                div {
                    width: 42%;
                    height: 10vw;
                    background: #ececec;
                    box-shadow: 1px 1px 1px #ececec;
                }
            }
        }
        .friend_link {
            display: flex;
            margin: 15px 0;
            padding: 15px 0;
            div {
                text-indent: 2rem;
            }
            ul {
                display: flex;
                li {
                    padding: 0 6px;
                }
            }
        }
        .property_info {
            width: 100%;
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
