<template>
    <div class="academe">
        <Top :index="'3'"></Top>
        <imgDisplay :msg="'#ff0036'"></imgDisplay>
        <div class="news_tab">
            <div class="tab_controls">
                <router-link tag="div" class="controls" to="/academe/index/company">公司资讯</router-link>
                <router-link tag="div" class="controls" to="/academe/index/industry">行业资讯</router-link>
                <router-link tag="div" class="controls" to="/academe/index/market">市场营销</router-link>
                <router-link tag="div" class="controls" to="/academe/index/organization">机构管理</router-link>
                <router-link tag="div" class="controls" to="/academe/index/products">产品动态</router-link>
                <router-link tag="div" class="controls" to="/academe/index/experience">经验分享</router-link>
            </div>
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import imgDisplay from "@/components/imgDisplay.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "academe",
    data() {
        return {};
    },
    components: {
        Top,
        imgDisplay,
        Footer
    },
    methods: {
        goToArticle(article_id) {
            console.log(article_id);
            this.$router.push({
                path: "/academe/article",
                query: { id: article_id }
            });
        }
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
                border: 1px solid #ececec;
                padding: 10px 0;
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
                        border-bottom: 1px solid #ececec;
                        .head_line {
                            width: 100%;
                            padding: 5px 0;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                        }
                        .simply_info {
                            width: 100%;
                            height: 55px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                    }
                }
            }
            .row_box {
                .article_list {
                    width: 100%;
                    .article_item {
                        padding: 10px 15px;
                        display: flex;
                        box-sizing: border-box;
                        border: 1px solid #ececec;
                        margin: 10px 0;
                        border-radius: 5px;
                        .simply_pic {
                            width: 30%;
                            height: 10vw;
                            padding: 0 5%;
                            img {
                                display: inline-block;
                                width: 100%;
                                height: 100%;
                                border: 1px solid #ececec;
                                background: #aabbcc;
                            }
                        }
                        .simply_acticle {
                            width: 60%;
                            position: relative;
                            .headline {
                                padding: 5px 0;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 1;
                                overflow: hidden;
                            }
                            .simply_con {
                                padding: 5px 0;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 6;
                                overflow: hidden;
                            }
                            .establish_info {
                                position: absolute;
                                bottom: 0px;
                                right: 50px;
                                .reading_info {
                                    margin-left: 45px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
