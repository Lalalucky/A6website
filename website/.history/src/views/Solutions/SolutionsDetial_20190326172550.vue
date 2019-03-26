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
        <Register></Register>
        <YiHelper></YiHelper>
        <div class="article">
            <div class="controlers">
                <div>招生干货</div>
                <div>招生案例</div>
                <div>招生工具</div>
            </div>
            <div class="container" v-show="this.curr_column==1">
                <ul class="article">
                    <li v-for="(item,index) in this.dry" :key="index" class="article_item">
                        <div class="simply_pic">
                            <img src="" alt="">
                        </div>
                        <div class="simply_acticle">
                            <div class="headline">文章标题:<span>{{item.title}}</span></div>
                            <div class="simply_con">文章简介:<span>{{item.simply_con}}</span></div>
                            <div class="establish_info">
                                <span class="time_info">发布时间:<em>{{item.time}}</em></span>
                                <span class="reading_info">阅读量:<em>{{item.reading}}</em>次</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import ImgDisplay from "@/components/ImgDisplay.vue";
import Footer from "@/components/Footer.vue";
import YiHelper from "@/components/YiHelper.vue";
import Register from "@/components/LinkRegister.vue";
export default {
    name: "SolutionsDetial",
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
            ],
            curr_column:"1",
            dry:[
                {
                    "title":"夏蝉冬雪，不过轮回一瞥",
                    "simply_con":"月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田月华似练，遥看万载沧海成沧田,月华似练，遥看万载沧海成沧田,",
                    "time":"2019-03-22",
                    "reading":"221"
                }
            ],
            case:[],
            tools:[]
        };
    },
    created() {
        this.id = this.$route.query.id;
    },
    components: {
        Top,
        ImgDisplay,
        YiHelper,
        Register
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
            padding: 30px 45px;
            display: flex;
            &:nth-child(even) .pic_word {
                order: -1;
            }
            .product {
                width: 40%;
                height: 10vw;
                .pic_frame {
                    width: 200px;
                    margin: 0 auto;
                    height: 100%;
                    border: 1px solid #999999;
                }
            }
            .pic_word {
                width: 60%;
                padding-left: 45px;
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
    .article{
        width:90%;
        margin: 0 auto;
        .controlers{
            width: 100%;
            display: flex;
            div{
                width: 33%;
                text-align: center;
                height: 40px;
                padding: 5px 0;
                line-height: 30px;
                font-size: 18px;
            }
        }
        .container{
            .article{
                .article_item{
                    padding: 5px 15px;
                    display: flex;
                    .simply_pic{
                        width: 30%;
                        height: 10vw;
                        padding: 0 5%;
                        img{
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            border: 1px solid #ececec;
                            background: #aabbcc;
                        }
                    }
                    .simply_acticle{
                        width: 60%;
                        position: relative;
                        .headline{
                            span{
                                display: inline-block;
                                text-indent: 2rem;
                            }
                        }
                        .simply_con{
                            span{
                                display: inline-block;
                                text-indent: 2rem;
                                
                            }
                        }
                        .establish_info{
                            position: absolute;
                            bottom: 15px;
                            right: 50px;
                            .reading_info{
                                margin-left: 45px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
