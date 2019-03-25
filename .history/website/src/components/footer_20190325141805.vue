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
                        <h3>平台</h3>
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
                        <div>联系我们:XXX-XXXX-XXXX</div>
                        <div>售前咨询:XXX-XXXX-XXXX</div>
                        <div>售后咨询:XXX-XXXX-XXXX</div>
                    </div>
                </div>
                <div class="micro_code">
                    <div class="wechat"></div>
                    <div class="blog"></div>
                </div>
            </div>
            <div class="friend_link">
                <div>友情链接</div>
                <ul>
                    <li>abcabcabcabc</li>
                    <li>abcabcabcabc</li>
                    <li>abcabcabcabc</li>
                </ul>
            </div>
            <div class="property_info">
                <div>
                    <span>版权:</span>
                    <span>苏010-XXX-XXXXX</span>
                </div>
                <div>
                    <span>备案号:</span>
                    <span>苏010-5288-1988</span>
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
            .guide{
                width: 20%;
                h3{
                    font-size: 18px;
                    font-weight: bold;
                }
                a{
                    list-style: none;
                    text-decoration: none;
                    display: block;
                }
            }
        }
    }
}
</style>
