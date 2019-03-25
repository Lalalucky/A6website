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
                        <h3>平台:</h3>
                        <div class="web_plat">
                            <div>搜狐</div>
                            <div>百家号</div>
                            <div>企鹅号</div>
                            <div>网易号</div>
                            <div>知乎号</div>
                            <div>一点资讯</div>
                        </div>
                    </div>
                    <div class="link_way">
                        <div>
                            <span>联系我们:</span>XXX-XXXX-XXXX
                        </div>
                        <div>
                            <span>售前咨询:</span>XXX-XXXX-XXXX
                        </div>
                        <div>
                            <span>售后咨询:</span>XXX-XXXX-XXXX
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
    width: 90%;
    margin: 0 auto;
    .container {
        width: 100%;
        .foot_top {
            width: 100%;
            display: flex;
            .guide {
                width: 20%;
                h3 {
                    font-size: 18px;
                    font-weight: bold;
                }
                a {
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
                        font-weight: bold;
                    }
                    .web_plat {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        div {
                            width: 20%;
                            margin: 10px 5%;
                            height: 40px;
                            padding: 5px;
                            border-radius: 5px;
                            border: 1px solid #ececec;
                            line-height: 30px;
                            text-align: center;
                        }
                    }
                }
                .link_way {
                    span {

                    }
                }
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
            div {
                text-indent: 2rem;
            }
            ul {
                display: flex;
                li{
                    padding: 0 6px;
                }
            }
        }
        .property_info {
            width: 100%;
            .container{
                height: 60px;
                text-align: right;
                &>div{
                    line-height: 30px;
                }
            }
        }
    }
}
</style>
