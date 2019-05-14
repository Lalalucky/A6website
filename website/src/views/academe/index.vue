<template>
    <div class="academe">
        <outLink></outLink>
        <Top :index="'3'"></Top>
        <Banner :second_id="this.column_id"></Banner>
        <div class="news_tab">
            <div class="category">
                <!-- 渲染 -->
                <div class="tab_bar">
                    <div
                        class="tab_bar_item"
                        v-for="(item,index) in this.tab_bar"
                        :key="index"
                        @click="changeTab(item.id)"
                    >{{item.name}}</div>
                </div>
                <div class="tab_pan">
                    <!-- 置顶文章 -->
                    <div class="image_text">
                        <div class="images_area">
                            <el-carousel trigger="click" height="300px">
                                <el-carousel-item v-for="item in this.stick" :key="item.id">
                                    <img :src="item.picture_path" alt>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <div class="select_article">
                            <div
                                class="selects"
                                v-for="item in this.stick"
                                :key="item.id"
                                @click="goToArticle(item.id)"
                                useHandCursor="true"
                                buttonMode="true"
                                mouseChildren="false"
                            >
                                <p class="head_line">{{item.post_title}}</p>
                                <p class="simply_info">{{item.post_title}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- 总的文章 -->
                    <div class="row_box">
                        <ul class="article_list">
                            <li
                                v-for="(item,index) in this.normal"
                                :key="index"
                                class="article_item"
                                @click="goToArticle(item.id)"
                            >
                                <div class="simply_pic">
                                    <img :src="item.picture_path" alt>
                                </div>
                                <div class="simply_acticle">
                                    <div class="headline">
                                        <h3>{{item.post_title}}</h3>
                                    </div>
                                    <div class="simply_con">{{item.post_title}}</div>
                                    <!-- <div class="establish_info">
                                        <span class="time_info">
                                            发布时间:
                                            <em>{{item.time}}</em>
                                        </span>
                                        <span class="reading_info">
                                            阅读量:
                                            <em>{{item.reading}}</em>次
                                        </span>
                                    </div>-->
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="block">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage"
                        :page-size="5"
                        layout="prev, pager, next, jumper"
                        :total="this.count"
                    ></el-pagination>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import outLink from "@/components/outsideLink.vue";
import Top from "@/components/top.vue";
import Banner from "@/components/banner.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "academe",
    data() {
        return {
            key: "",
            column_id: "",
            third_id: "",
            tab_bar: [],
            main: [],
            stick: [],
            normal: [],
            count: 1,
            currentPage: 1,
            // 定时器,数字2代表两分钟
            minute: 1
        };
    },
    created() {
        this.getData();
        _MEIQIA("showPanel");
    },
    watch: {
        $route() {
            console.log(this.$route.path);
            if (this.$route.path === "/academe/index") {
                this.getData();
            }
        }
    },
    components: {
        Top,
        Banner,
        Footer,
        outLink
    },
    methods: {
        openCon() {
            let time = this.minute * 60 * 1000;
            setTimeout(() => {
                _MEIQIA("showPanel");
            }, time);
        },
        getData() {
            let id = this.$route.query.column_id;
            this.column_id = id;
            this.postRequest("v1/application/get-paper-list", { id }).then(
                res => {
                    let data = res.data.data;
                    this.count = +res.data.count;
                    this.tab_bar = res.data.third_columns;
                    this.third_id = res.data.third_columns[0].id;
                    if (data.length > 3) {
                        this.stick = data.slice(0, 3);
                        this.normal = data;
                        // console.log(this.normal);
                    } else {
                        this.stick = data;
                        this.normal = [];
                        // console.log(this.normal);
                    }
                }
            );
        },
        changeTab(index) {
            this.third_id = index;
            // console.log(this.third_id);
            this.key = index;
            let params = {
                id: index,
                limit: 5,
                page: 1
            };
            this.postRequest(
                "v1/application/get-paper-list-third-column",
                params
            ).then(res => {
                let data = res.data.data;
                this.tab_bar = res.data.third_columns;
                this.count = +res.data.count;
                this.third_id = res.data.third_columns[0].id;
                if (data.length > 3) {
                    this.stick = data.slice(0, 3);
                    this.normal = data;
                    // console.log(this.normal);
                } else {
                    this.stick = data;
                    this.normal = [];
                    // console.log(this.normal);
                }
            });
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            // console.log(this.third_id);
            let params = {
                id: this.third_id,
                limit: 5,
                page: val
            };
            params.id = this.key;
            this.postRequest(
                "v1/application/get-paper-list-third-column",
                params
            ).then(res => {
                let data = res.data.data;
                this.tab_bar = res.data.third_columns;
                this.count = +res.data.count;
                this.third_id = res.data.third_columns[0].id;
                if (data.length > 3) {
                    this.stick = data.slice(0, 3);
                    this.normal = data;
                    // console.log(this.normal);
                } else {
                    this.stick = data;
                    this.normal = [];
                    // console.log(this.normal);
                }
            });
            window.scroll(0, 450);
        },
        goToArticle(article_id) {
            // console.log(article_id);
            this.$router.push({
                path: "/academe/article",
                query: { article_id: article_id }
            });
        }
    }
};
</script>

<style scoped lang="less">
.academe {
    width: 100%;
    .news_tab {
        width: 1200px;
        margin: 0 auto;
        .tab_bar {
            width: 1200px;
            margin: 15px auto;
            display: flex;
            justify-content: space-around;
            & > div {
                padding: 15px 50px;
                line-height: 36px;
                font-size: 24px;
                font-weight: 400;
                color: #4a4a4a;
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
                        cursor: pointer;
                        .head_line {
                            width: 100%;
                            padding: 5px 0;
                            font-size: 22px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                            color: #404040;
                            line-height: 30px;
                        }
                        .simply_info {
                            width: 100%;
                            height: 55px;
                            display: -webkit-box;
                            color: #666666;
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
                            padding: 0 2%;
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
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 1;
                                overflow: hidden;
                                margin-bottom: 15px;
                                & > h3 {
                                    display: inline-block;
                                    font-size: 22px;
                                    color: #404040;
                                }
                            }
                            .simply_con {
                                padding: 5px 0;
                                display: -webkit-box;
                                color: #666666;
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
        .block {
            padding: 15px 0;
            text-align: center;
        }
    }
}
</style>
