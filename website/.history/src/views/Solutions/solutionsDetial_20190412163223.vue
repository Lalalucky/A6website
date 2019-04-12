<template>
    <div class="solutions_detial">
        <Top></Top>
        <ImgDisplay></ImgDisplay>
        <div class="point_adv">
            <div class="advantage" v-for="(item,index) in this.product" :key="index">
                <div class="product">
                    <div class="pic_frame"><img src="../../assets/images/home/with_person1.jpeg" alt=""></div>
                </div>
                <div class="pic_word">
                    <h3>{{item.title}}</h3>
                    <div class="icon_word_stage" v-for="(data,v) in item.watch_word" :key="v">
                        <p class="with_icon">
                            <img :src="item.img" alt>
                            {{data.with_icon}}:{{data.words}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Register></Register>
        <YiHelper></YiHelper>
        <div class="article">
            <div class="controlers">
                <div @click="tabClick(1)">招生干货</div>
                <div @click="tabClick(2)">招生案例</div>
                <div @click="tabClick(3)">招生工具</div>
            </div>
            <div class="container" v-show="this.curr_column==1">
                <ul class="article_list">
                    <li v-for="(item,index) in this.dry" :key="index" class="article_item">
                        <div class="simply_pic">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="simply_acticle">
                            <div class="headline">文章标题:&emsp;&emsp;{{item.title}}</div>
                            <div class="establish_info">
                                <span class="time_info">发布时间:<em>{{item.time}}</em></span>
                                <span class="reading_info">阅读量:<em>{{item.reading}}</em>次</span>
                            </div>
                            <div class="simply_con">文章简介:&emsp;&emsp;{{item.simply_con}}</div>
                        </div>
                    </li>
                    <div class="goToDetial" v-show="this.dry.length>=4">查看更多</div>
                </ul>
            </div>
            <div class="container" v-show="this.curr_column==2">
                <ul class="article_list">
                    <li v-for="(item,index) in this.case" :key="index" class="article_item">
                        <div class="simply_pic">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="simply_acticle">
                            <div class="headline">文章标题:&emsp;&emsp;{{item.title}}</div>
                            <div class="establish_info">
                                <span class="time_info">发布时间:<em>{{item.time}}</em></span>
                                <span class="reading_info">阅读量:<em>{{item.reading}}</em>次</span>
                            </div>
                            <div class="simply_con">文章简介:&emsp;&emsp;{{item.simply_con}}</div>
                        </div>
                    </li>
                    <div class="goToDetial" v-show="this.case.length>=4">查看更多</div>
                </ul>
            </div>
            <div class="container" v-show="this.curr_column==3">
                <ul class="article_list">
                    <li v-for="(item,index) in this.dry" :key="index" class="article_item">
                        <div class="simply_pic">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="simply_acticle">
                            <div class="headline">文章标题:&emsp;&emsp;{{item.title}}</div>
                            <div class="establish_info">
                                <span class="time_info">发布时间:<em>{{item.time}}</em></span>
                                <span class="reading_info">阅读量:<em>{{item.reading}}</em>次</span>
                            </div>
                            <div class="simply_con">文章简介:&emsp;&emsp;{{item.simply_con}}</div>
                        </div>
                    </li>
                    <div class="goToDetial" v-show="this.dry.length>=4">查看更多</div>
                </ul>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import ImgDisplay from "@/components/imgDisplay.vue";
import Footer from "@/components/footer.vue";
import YiHelper from "@/components/yiHelper.vue";
import Register from "@/components/linkRegister.vue";
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
            curr_column:1,
            dry:[
                {   
                    "id":"Y23333",
                    "title":"悟道修炼 不问一生缘劫",
                    "simply_con":"白纸画卷 寥寥几笔绘江湖深浅",
                    "time":"2019-03-22",
                    "reading":"221",
                    "img": require("../../assets/images/yun.jpg")
                },
                {   
                    "id":"Y24444",
                    "title":"悟道修炼 不问一生缘劫",
                    "simply_con":"白纸画卷 寥寥几笔绘江湖深浅",
                    "time":"2019-03-22",
                    "reading":"221",
                    img: require("../../assets/images/yun.jpg")
                },
                {   
                    "id":"Y25555",
                    "title":"悟道修炼 不问一生缘劫",
                    "simply_con":"白纸画卷 寥寥几笔绘江湖深浅",
                    "time":"2019-03-22",
                    "reading":"221",
                    img: require("../../assets/images/yun.jpg")
                },
                {   
                    "id":"Y26666",
                    "title":"悟道修炼 不问一生缘劫",
                    "simply_con":"白纸画卷 寥寥几笔绘江湖深浅",
                    "time":"2019-03-22",
                    "reading":"221",
                    img: require("../../assets/images/yun.jpg")
                },
            ],
            case:[
                {   
                    "id":"Y23333",
                    "title":"夏蝉冬雪，不过轮回一瞥",
                    "simply_con":"月华似练，遥看万载沧海成沧田",
                    "time":"2019-03-22",
                    "reading":"221",
                    "img": require("../../assets/images/li.jpg")
                },
                {   
                    "id":"Y24444",
                    "title":"夏蝉冬雪，不过轮回一瞥",
                    "simply_con":"月华似练，遥看万载沧海成沧田",
                    "time":"2019-03-22",
                    "reading":"221",
                    img: require("../../assets/images/li.jpg")
                },
                {   
                    "id":"Y25555",
                    "title":"夏蝉冬雪，不过轮回一瞥",
                    "simply_con":"月华似练，遥看万载沧海成沧田",
                    "time":"2019-03-22",
                    "reading":"221",
                    img: require("../../assets/images/li.jpg")
                },
                {   
                    "id":"Y26666",
                    "title":"夏蝉冬雪，不过轮回一瞥",
                    "simply_con":"月华似练，遥看万载沧海成沧田",
                    "time":"2019-03-22",
                    "reading":"221",
                    img: require("../../assets/images/li.jpg")
                },
            ],
            tools:[]
        };
    },
    created() {
        this.id = this.$route.query.id;
    },
    methods:{
        tabClick(index){
            console.log(index);
            this.curr_column=index;
        }
    },
    components: {
        Top,
        ImgDisplay,
        YiHelper,
        Register,
        Footer
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
            width: 1200px;
            padding: 30px 45px;
            display: flex;
            border: 0;
            &:nth-child(even) .pic_word {
                order: -1;
            }
            .product {
                width:410px;
                height:260px;
                .pic_frame {
                    padding: 0 50px;
                    height:260px;
                    margin: 0 auto;
                    overflow: hidden;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
            }
            .pic_word {
                width: 60%;
                padding-left: 45px;
                h3 {
                    font-size: 30px;
                    line-height: 42px;
                    font-weight: 500;
                    margin-bottom: 15px;
                }
                .icon_word_stage {
                    margin-top: 5px;
                    p {
                        line-height: 25px;
                        font-size: 18px;
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
        width:1200px;
        margin: 0 auto;
        padding-bottom: 45px;
        border-bottom: 1px solid #ececec;
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
            .article_list{
                .article_item{
                    padding: 10px 15px;
                    display: flex;
                    box-sizing: border-box;
                    margin: 10px 0;
                    .simply_pic{
                        width: 160px;
                        height: 100px;
                        margin: 0 15px;
                        img{
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            border: 1px solid #ececec;
                            // background: #ffffff;
                        }
                    }
                    .simply_acticle{
                        width: 1000px;
                        position: relative;
                        .headline{
                            height:30px;
                            font-size:22px;
                            font-weight:400;
                            color:rgba(64,64,64,1);
                            line-height:30px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;   
                        }
                        .establish_info{
                            height:20px;
                            font-size:14px;
                            font-weight:400;
                            color:rgba(151,150,150,1);
                            line-height:20px;
                            .reading_info{
                                margin-left: 45px;
                            }
                        }
                        .simply_con{
                            font-size:16px;
                            font-weight:400;
                            color:rgba(102,102,102,1);
                            line-height:22px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                    }
                }
            }
        }
        .goToDetial{
            width: 100px;
            height: 40px;
            cursor: pointer;
            line-height: 30px;
            text-align: center;
            border: 1px solid #ececec;
            border-radius: 5px;
            padding: 5px 0;
            margin: 10px auto;
        }
    }
}
</style>
