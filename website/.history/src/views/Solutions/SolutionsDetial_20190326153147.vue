<template>
    <div class="solutions_detial">
        <Top></Top>
        <ImgDisplay></ImgDisplay>
        <div class="point_adv">
            <div class="advantage" v-for="(item,index) in this.product" :key="index">
                <div class="product">
                    <div class="pic_frame"></div>
                </div>
                <div class="pic_word">
                    <h3>{{item.title}}</h3>
                    <div class="icon_word_stage" v-for="(data,v) in item.watch_word" :key="v">
                        <p class="with_icon">
                            <img :src="item.img" alt>
                            {{data.with_icon}}
                        </p>
                        <p>{{data.words}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import ImgDisplay from "@/components/ImgDisplay.vue";
import Footer from "@/components/Footer.vue";
import Register from "@/components/LinkRegister.vue";
export default {
    name: "",
    data() {
        return {
            id: "",
            product: [
                {
                    title: "更贴合移动互联网时代的招生活动",
                    watch_word: [
                        {
                            with_icon: "载体形式丰富",
                            words: "H5、海报、图文、小游戏"
                        },
                        {
                            with_icon: "高效便捷操作",
                            words: "海量模板轻松编辑一键生成"
                        },
                        {
                            with_icon: "玩法种类多样",
                            words: "免单、砍价、助力、抽奖、电子优惠券等"
                        }
                    ],
                    img: require("../../assets/images/选中.png")
                },
                {
                    title: "嵌入微信生态的社群流量池",
                    watch_word: [
                        {
                            with_icon: "社群引入微信公众号",
                            words: "借助社交流量红利，最大化品牌曝光"
                        },
                        {
                            with_icon: "内容种类样式丰富",
                            words: "图文、音视频、资料下载"
                        },
                        {
                            with_icon: "引导学员雪球",
                            words: "通过内容构建生态，引导学习需求"
                        }
                    ],
                    img: require("../../assets/images/选中.png")
                },
                {
                    title: "裂变式招生传播渠道",
                    watch_word: [
                        {
                            with_icon: "信息全网覆盖",
                            words: "信息一建发送全网，引流社群蓄水"
                        },
                        {
                            with_icon: "借助学员社交网络",
                            words: "内容一键转发朋友圈，高效老带新"
                        },
                        {
                            with_icon: "各种裂变奖励机制",
                            words: "解锁更多社群内容"
                        }
                    ],
                    img: require("../../assets/images/选中.png")
                }
            ]
        };
    },
    created() {
        this.id = this.$route.query.id;
    },
    components: {
        Top,
        ImgDisplay
    }
};
</script>

<style scoped lang="less">
.solutions_detial {
    width: 100%;
    .point_adv {
        width: 100%;
        .advantage {
            #baseWidth;
            width: 60%;
            padding: 30px;
            display: flex;
            &:nth-child(odd) .product{
                background: #ff00ff;
                order: 1;
            }
            .product {
                width: 50%;
                height: 10vw;
                .pic_frame {
                    width: 200px;
                    margin: 0 auto;
                    height: 100%;
                    border: 1px solid #999999;
                }
            }
            .pic_word {
                width: 50%;
                h3 {
                    font-size: 18px;
                    padding: 2px 0;
                    font-weight: 400;
                    margin-bottom: 15px;
                }
                .icon_word_stage {
                    margin-top: 5px;
                    p {
                        line-height: 24px;
                    }
                    .with_icon {
                        img {
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
    }
}
</style>
