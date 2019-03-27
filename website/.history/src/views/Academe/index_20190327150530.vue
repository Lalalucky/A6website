<template>
    <div class="academe">
        <Top :index="'3'"></Top>
        <imgDisplay :msg="'#ff0036'"></imgDisplay>
        <div class="news_tab">
            <div class="tab_controls">
                <div class="controls" v-for="(tab,index) in this.tab_controls" :key="index">{{tab}}</div>
            </div>
            <div class="tab_pan">
                <div class="image_text">
                    <div class="images_area">
                        <el-carousel trigger="click" height="300px">
                            <el-carousel-item v-for="item in this.carousel" :key="item">
                                <img :src="item" alt>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="select_article">
                        <div class="selects" v-for="item in 3" :key="item">
                            <p class="head_line">
                                <em>文章标题</em>&emsp;&emsp;白蛇传
                            </p>
                            <p class="simply_info">
                                <em>文章简介</em>&emsp;&emsp;青城山下白素贞，洞中千年修此生
                            </p>
                        </div>
                    </div>
                </div>
                <div class="article_list"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import imgDisplay from "@/components/imgDisplay.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "academe",
    data() {
        return {
            tab_controls: [
                "公司动态",
                "行业资讯",
                "市场营销",
                "机构管理",
                "产品动态",
                "经验分享"
            ],
            carousel: [
                require("../../assets/images/carousel (1).jpg"),
                require("../../assets/images/carousel (2).jpg"),
                require("../../assets/images/carousel (3).jpg")
            ]
        };
    },
    components: {
        Top,
        imgDisplay,
        Footer
    }
};
</script>

<style scoped lang="less">
.academe {
    width: 100%;
    .news_tab {
        padding: 30px 0;
        width: 90%;
        margin: 0 auto;
        .tab_controls {
            display: flex;
            padding: 30px 0;
            .controls {
                width: 16.6%;
                text-align: center;
                cursor: pointer;
            }
        }
        .tab_pan {
            .image_text {
                width: 100%;
                display: flex;
                .images_area {
                    width: 48%;
                    height: 300px;
                    padding: 0 1%;
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .select_article {
                    width: 48%;
                    padding: 0 1%;
                    .selects {
                        width: 100%;
                        padding: 5px 0;
                        .head_line {
                            width: 100%;
                            padding: 5px 0;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                        }
                        .simply_info{
                            width: 100%;
                            height: 50px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                    }
                }
            }
        }
    }
}
</style>
